"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

type Tier = "basic" | "advanced" | "both";
type Goal = "followers" | "engagement" | "monetize" | "brand-deals";

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
      const { error } = await supabase.from("Audits").insert([
        {
          name,
          email,
          profile_url: url,
          tier,
          goal,
          challenges,
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Error submitting form:", err);
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An error occurred during submission.");
      }
    } finally {
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
      <div className="bg-white rounded-2xl sm:rounded-[28px] shadow-[0px_24px_64px_0px_rgba(0,46,255,0.2)] w-full max-w-[560px] max-h-[90vh] flex flex-col relative z-10">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5fc] text-[#555566] hover:bg-[#e8e8f0] transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="overflow-y-auto flex-1 px-6 sm:px-10 pt-10 sm:pt-12 pb-8 sm:pb-10" style={{ scrollbarWidth: "none" }}>
          <h2 className="font-black text-[20px] sm:text-[22px] text-[#0a0a0a] mb-1.5">
            📋 Book Your Audit
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#555566] mb-5">
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
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-[#f5f5fc] border border-[#e8e8f0] text-[#555566] hover:border-[#002eff]"
                }`}
              >
                {tierLabels[t]}
              </button>
            ))}
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[9px] font-semibold text-[#9999a6] tracking-[1.5px] uppercase mb-1.5">
                FULL NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full h-10 bg-[#f7f7fc] border border-[#e8e8f0] rounded-xl px-3 text-[13px] text-[#0a0a0a] placeholder:text-[#b0b0c0] focus:outline-none focus:border-[#002eff]"
              />
            </div>
            <div>
              <label className="block text-[9px] font-semibold text-[#9999a6] tracking-[1.5px] uppercase mb-1.5">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-10 bg-[#f7f7fc] border border-[#e8e8f0] rounded-xl px-3 text-[13px] text-[#0a0a0a] placeholder:text-[#b0b0c0] focus:outline-none focus:border-[#002eff]"
              />
            </div>
          </div>

          {/* URL */}
          <div className="mb-4">
            <label className="block text-[9px] font-semibold text-[#9999a6] tracking-[1.5px] uppercase mb-1.5">
              PROFILE / CHANNEL URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://instagram.com/yourhandle"
              className="w-full h-10 bg-[#f7f7fc] border border-[#e8e8f0] rounded-xl px-3 text-[13px] text-[#0a0a0a] placeholder:text-[#b0b0c0] focus:outline-none focus:border-[#002eff]"
            />
          </div>

          {/* Primary Goal */}
          <div className="mb-4">
            <label className="block text-[9px] font-semibold text-[#9999a6] tracking-[1.5px] uppercase mb-1.5">
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
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-[#f5f5fc] border border-[#e8e8f0] text-[#555566] hover:border-[#002eff]"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <label className="block text-[9px] font-semibold text-[#9999a6] tracking-[1.5px] uppercase mb-1.5">
              CHALLENGES / WHAT&apos;S NOT WORKING
            </label>
            <textarea
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              placeholder="Describe your current situation..."
              rows={3}
              className="w-full bg-[#f7f7fc] border border-[#e8e8f0] rounded-xl px-3 py-3 text-[13px] text-[#0a0a0a] placeholder:text-[#b0b0c0] focus:outline-none focus:border-[#002eff] resize-none"
            />
          </div>

          {/* Price + Payment row */}
          <div className="border-t border-[#e8e8f0] pt-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-[11px] text-[#555566]">
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
                    className="bg-[#f5f5fc] border border-[#e8e8f0] rounded-lg h-7 px-2 flex items-center text-[10px] sm:text-[11px] font-medium text-[#555566]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {errorMsg && <p className="text-[#ff0000] text-[12px] mb-3 text-center font-medium bg-[#ffeaea] py-2 rounded-lg">{errorMsg}</p>}
          {isSuccess && <p className="text-[#008a00] text-[12px] mb-3 text-center font-bold bg-[#e8ffe8] py-2 rounded-lg">Audit request submitted successfully! We will contact you soon.</p>}

          {/* Submit */}
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting || isSuccess}
            className="w-full h-12 sm:h-[52px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[14px] sm:text-[15px] font-bold rounded-full hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : isSuccess ? "Done ✓" : `Pay ${tierPrices[tier]} & Submit →`}
          </button>

          <p className="text-[10px] sm:text-[11px] text-[#a6a6b8] text-center mt-4">
            🔒 Secure Payment · Confirmation email within 10 min
          </p>
        </div>
        </div>
    </div>
  );
}
