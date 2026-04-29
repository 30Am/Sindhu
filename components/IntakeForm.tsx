"use client";

import { useState, useEffect } from "react";

type Tier = "basic" | "advanced" | "both";
type Goal = "followers" | "engagement" | "monetize" | "brand-deals";

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: { name?: string; email?: string };
  theme?: { color?: string };
  handler: (response: RazorpayResponse) => void;
  modal?: { ondismiss?: () => void };
}

interface RazorpayInstance {
  open: () => void;
  on: (event: "payment.failed", cb: (resp: { error: { description?: string } }) => void) => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

/** Lazy-load the Razorpay Checkout script once. */
function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function IntakeForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState<Tier>("advanced");
  const [goal, setGoal] = useState<Goal>("followers");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [challenges, setChallenges] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const tierPrices: Record<Tier, string> = {
    basic: "₹2,999",
    advanced: "₹6,999",
    both: "₹11,999",
  };
  const tierLabels: Record<Tier, string> = {
    basic: "Basic · ₹2,999",
    advanced: "Advanced · ₹6,999",
    both: "Both · ₹11,999",
  };

  const handleSubmit = async () => {
    if (!name || !email || !url) {
      setErrorMsg("Please fill in name, email, and URL.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      // 1. Make sure the Razorpay Checkout script is on the page.
      const scriptOk = await loadRazorpayScript();
      if (!scriptOk) {
        throw new Error("Couldn't load the payment gateway. Check your connection and try again.");
      }

      // 2. Ask our server to create a Razorpay order. Amount is computed
      //    server-side from the tier so it can't be tampered with.
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData.error || "Couldn't start payment. Please try again.");
      }

      // 3. Open Razorpay Checkout. On success, verify on our server.
      const rzp = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Sindhu Biswal",
        description:
          tier === "advanced"
            ? "Advanced Audit"
            : tier === "basic"
              ? "Basic Audit"
              : "Both Platforms Audit",
        order_id: orderData.orderId,
        prefill: { name, email },
        theme: { color: "#002eff" },
        handler: async (response) => {
          // 4. Send signature + form data to verify endpoint.
          //    The audit is only saved + welcome email sent if the signature is valid.
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                name,
                email,
                profile_url: url,
                tier,
                goal,
                challenges,
              }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.error || "Payment verification failed.");
            }
            setIsSuccess(true);
          } catch (err) {
            console.error("Verification error:", err);
            setErrorMsg(
              "Your payment went through, but we couldn't confirm it. Email hello@buzzlab.in with payment ID " +
                response.razorpay_payment_id +
                "."
            );
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            setErrorMsg("Payment cancelled. You can try again whenever you're ready.");
          },
        },
      });

      rzp.on("payment.failed", (resp) => {
        console.error("Razorpay payment.failed", resp);
        setErrorMsg(resp.error?.description || "Payment failed. Please try a different method.");
        setIsSubmitting(false);
      });

      rzp.open();
    } catch (err: unknown) {
      console.error("Error submitting form:", err);
      setErrorMsg(err instanceof Error ? err.message : "An error occurred during submission.");
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === "#book" || window.location.hash.includes("#book"));
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const closeForm = () => {
    setIsOpen(false);
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0a0a0a]/80 backdrop-blur-sm w-full h-full">
      <div
        className="w-full h-full absolute inset-0 cursor-pointer"
        onClick={closeForm}
        aria-label="Close modal"
      />
      <div className="bg-white dark:bg-[#101020] rounded-2xl sm:rounded-[28px] shadow-[0px_24px_64px_0px_rgba(0,46,255,0.2)] dark:shadow-[0px_24px_64px_0px_rgba(0,46,255,0.35)] w-full max-w-[560px] max-h-[90vh] flex flex-col relative z-10 border border-transparent dark:border-[#242440]">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5fc] dark:bg-[#1a1a2e] text-[#555566] dark:text-[#8888bb] hover:bg-[#e8e8f0] dark:hover:bg-[#242440] transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="overflow-y-auto flex-1 px-6 sm:px-10 pt-10 sm:pt-12 pb-8 sm:pb-10" style={{ scrollbarWidth: "none" }}>
          <h2 className="font-black text-[20px] sm:text-[22px] text-[#0a0a0a] dark:text-[#eeeeff] mb-1.5">
            📋 Book Your Audit
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#555566] dark:text-[#8888bb] mb-5">
            {tier === "advanced"
              ? "Advanced Audit · ₹6,999"
              : tier === "basic"
                ? "Basic Audit · ₹2,999"
                : "Both Platforms · ₹11,999"}
          </p>

          {/* Tier selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(["basic", "advanced", "both"] as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`h-8 px-3 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  tier === t
                    ? "bg-[#0a0a0a] dark:bg-gradient-to-r dark:from-[#002eff] dark:to-[#7c3aed] text-white"
                    : "bg-[#f5f5fc] dark:bg-[#1a1a2e] border border-[#e8e8f0] dark:border-[#242440] text-[#555566] dark:text-[#8888bb] hover:border-[#002eff]"
                }`}
              >
                {tierLabels[t]}
              </button>
            ))}
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[9px] font-semibold text-[#9999a6] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-1.5">
                FULL NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full h-10 bg-[#f7f7fc] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-xl px-3 text-[13px] text-[#0a0a0a] dark:text-[#eeeeff] placeholder:text-[#b0b0c0] dark:placeholder:text-[#4a4a6a] focus:outline-none focus:border-[#002eff]"
              />
            </div>
            <div>
              <label className="block text-[9px] font-semibold text-[#9999a6] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-1.5">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-10 bg-[#f7f7fc] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-xl px-3 text-[13px] text-[#0a0a0a] dark:text-[#eeeeff] placeholder:text-[#b0b0c0] dark:placeholder:text-[#4a4a6a] focus:outline-none focus:border-[#002eff]"
              />
            </div>
          </div>

          {/* URL */}
          <div className="mb-4">
            <label className="block text-[9px] font-semibold text-[#9999a6] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-1.5">
              PROFILE / CHANNEL URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://instagram.com/yourhandle"
              className="w-full h-10 bg-[#f7f7fc] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-xl px-3 text-[13px] text-[#0a0a0a] dark:text-[#eeeeff] placeholder:text-[#b0b0c0] dark:placeholder:text-[#4a4a6a] focus:outline-none focus:border-[#002eff]"
            />
          </div>

          {/* Primary Goal */}
          <div className="mb-4">
            <label className="block text-[9px] font-semibold text-[#9999a6] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-1.5">
              PRIMARY GOAL
            </label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: "followers",   label: "Grow Followers" },
                  { id: "engagement",  label: "More Engagement" },
                  { id: "monetize",    label: "Monetize" },
                  { id: "brand-deals", label: "Brand Deals" },
                ] as { id: Goal; label: string }[]
              ).map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGoal(g.id)}
                  className={`h-8 px-3 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    goal === g.id
                      ? "bg-[#0a0a0a] dark:bg-gradient-to-r dark:from-[#002eff] dark:to-[#7c3aed] text-white"
                      : "bg-[#f5f5fc] dark:bg-[#1a1a2e] border border-[#e8e8f0] dark:border-[#242440] text-[#555566] dark:text-[#8888bb] hover:border-[#002eff]"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <label className="block text-[9px] font-semibold text-[#9999a6] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-1.5">
              CHALLENGES / WHAT&apos;S NOT WORKING
            </label>
            <textarea
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              placeholder="Describe your current situation..."
              rows={3}
              className="w-full bg-[#f7f7fc] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-xl px-3 py-3 text-[13px] text-[#0a0a0a] dark:text-[#eeeeff] placeholder:text-[#b0b0c0] dark:placeholder:text-[#4a4a6a] focus:outline-none focus:border-[#002eff] resize-none"
            />
          </div>

          {/* Price + Payment row */}
          <div className="border-t border-[#e8e8f0] dark:border-[#242440] pt-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-[11px] text-[#555566] dark:text-[#8888bb]">
                  {tier === "advanced" ? "Advanced Audit" : tier === "basic" ? "Basic Audit" : "Both Platforms"}
                </p>
                <p className="font-black text-[26px] sm:text-[28px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent leading-none mt-0.5">
                  {tierPrices[tier]}
                </p>
              </div>
              <div className="flex gap-2">
                {["UPI", "Card", "Net Banking"].map((m) => (
                  <span
                    key={m}
                    className="bg-[#f5f5fc] dark:bg-[#1a1a2e] border border-[#e8e8f0] dark:border-[#242440] rounded-lg h-7 px-2 flex items-center text-[10px] sm:text-[11px] font-medium text-[#555566] dark:text-[#8888bb]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {errorMsg && <p className="text-[#ff0000] dark:text-red-400 text-[12px] mb-3 text-center font-medium bg-[#ffeaea] dark:bg-red-950/30 py-2 rounded-lg">{errorMsg}</p>}
          {isSuccess && <p className="text-[#008a00] dark:text-emerald-400 text-[12px] mb-3 text-center font-bold bg-[#e8ffe8] dark:bg-emerald-950/30 py-2 rounded-lg">Audit request submitted successfully! We will contact you soon.</p>}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || isSuccess}
            className="w-full h-12 sm:h-[52px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[14px] sm:text-[15px] font-bold rounded-full hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : isSuccess ? "Done ✓" : `Pay ${tierPrices[tier]} & Submit →`}
          </button>

          <p className="text-[10px] sm:text-[11px] text-[#a6a6b8] dark:text-[#6060a0] text-center mt-4">
            🔒 Secure Payment · Confirmation email within 10 min
          </p>
        </div>
        </div>
    </div>
  );
}
