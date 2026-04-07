"use client";

import { useState, useRef, useCallback } from "react";
import { supabase } from "../lib/supabase";

const MIN = 1000;
const MAX = 50000;

function formatINR(val: number) {
  const s = String(val);
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const withCommas = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3 : last3;
  return `₹${withCommas}`;
}

export default function CustomRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [request, setRequest] = useState("");
  const [budget, setBudget] = useState(10000);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [budgetInput, setBudgetInput] = useState("10,000");
  const [isBudgetFocused, setIsBudgetFocused] = useState(false);
  const budgetRef = useRef(10000);
  const fillRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  const wordCount = request.trim() === "" ? 0 : request.trim().split(/\s+/).length;
  const percent = ((budget - MIN) / (MAX - MIN)) * 100;

  const updateSliderUI = useCallback((val: number) => {
    const pct = ((val - MIN) / (MAX - MIN)) * 100;
    if (fillRef.current) fillRef.current.style.width = `${pct}%`;
    if (thumbRef.current) thumbRef.current.style.left = `calc(${pct}% - 11px)`;
    if (sliderRef.current) sliderRef.current.value = String(val);
  }, []);

  const handleSliderInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    budgetRef.current = val;
    updateSliderUI(val);
    setBudgetInput(val.toLocaleString("en-IN"));
  }, [updateSliderUI]);

  const handleSliderCommit = useCallback(() => {
    setBudget(budgetRef.current);
  }, []);

  const handleBudgetType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setBudgetInput(raw);
    const num = Number(raw);
    if (!isNaN(num) && raw !== "") {
      const clamped = Math.min(Math.max(num, MIN), MAX);
      budgetRef.current = clamped;
      setBudget(clamped);
      updateSliderUI(clamped);
    }
  }, [updateSliderUI]);

  const handleBudgetBlur = useCallback(() => {
    setIsBudgetFocused(false);
    const num = Number(budgetInput.replace(/,/g, ""));
    const clamped = isNaN(num) || budgetInput === "" ? MIN : Math.min(Math.max(num, MIN), MAX);
    budgetRef.current = clamped;
    setBudget(clamped);
    updateSliderUI(clamped);
    setBudgetInput(clamped.toLocaleString("en-IN"));
  }, [budgetInput, updateSliderUI]);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please fill in your name and email.");
      return;
    }
    if (!request.trim()) {
      setErrorMsg("Please describe what you need.");
      return;
    }
    if (wordCount > 200) {
      setErrorMsg("Please keep your request under 200 words.");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const { error } = await supabase.from("CustomRequests").insert([
        { name: name.trim(), email: email.trim(), profile_url: profileUrl.trim(), request: request.trim(), budget },
      ]);
      if (error) throw error;
      setIsSuccess(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full h-11 bg-white dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-xl px-4 text-[14px] text-[#0a0a0a] dark:text-[#eeeeff] placeholder:text-[#c0c0d0] dark:placeholder:text-[#4a4a6a] focus:outline-none focus:border-[#002eff] focus:ring-4 focus:ring-[#002eff]/8 transition-all duration-200";

  return (
    <section className="relative bg-white dark:bg-[#07070e] py-10 sm:py-16 lg:py-24 overflow-hidden">

      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#002eff]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7c3aed]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-4 sm:px-8">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            CUSTOM REQUEST
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-black text-[32px] sm:text-[40px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] mb-2 leading-tight">
          Want something custom?
        </h2>
        <p className="text-[15px] text-[#555566] dark:text-[#8888bb] mb-10 leading-[26px]">
          Reach out and we&apos;ll craft something just for you within 24 hours.
        </p>

        {/* Form card */}
        <div className="bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] rounded-2xl shadow-[0_8px_40px_rgba(0,46,255,0.07)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-6 sm:p-8">

          {/* Gradient accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full mb-7" />

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="group">
              <label className="block text-[11px] font-semibold text-[#9999b0] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-2 transition-colors group-focus-within:text-[#002eff]">
                Your name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Raj Sharma"
                className={inputClass}
              />
            </div>
            <div className="group">
              <label className="block text-[11px] font-semibold text-[#9999b0] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-2 transition-colors group-focus-within:text-[#002eff]">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="raj@example.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* Profile URL */}
          <div className="group mb-5">
            <label className="block text-[11px] font-semibold text-[#9999b0] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-2 transition-colors group-focus-within:text-[#002eff]">
              Profile / Channel URL
            </label>
            <input
              type="url"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              placeholder="https://instagram.com/yourhandle"
              className={inputClass}
            />
          </div>

          {/* Textarea */}
          <div className="group mb-5">
            <label className="block text-[11px] font-semibold text-[#9999b0] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-2 transition-colors group-focus-within:text-[#002eff]">
              What do you need?
            </label>
            <textarea
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Describe your custom request: goals, platform, what you're struggling with, what outcome you want..."
              rows={5}
              className="w-full bg-white dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-xl px-4 py-3 text-[14px] text-[#0a0a0a] dark:text-[#eeeeff] placeholder:text-[#c0c0d0] dark:placeholder:text-[#4a4a6a] focus:outline-none focus:border-[#002eff] focus:ring-4 focus:ring-[#002eff]/8 transition-all duration-200 resize-none leading-relaxed"
            />
            <div className="flex items-center justify-between mt-2">
              <div className="flex-1 h-[3px] rounded-full bg-[#f0f0f8] dark:bg-[#1c1c35] overflow-hidden mr-3">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    wordCount > 200
                      ? "bg-red-400"
                      : wordCount > 160
                      ? "bg-amber-400"
                      : "bg-gradient-to-r from-[#002eff] to-[#7c3aed]"
                  }`}
                  style={{ width: `${Math.min((wordCount / 200) * 100, 100)}%` }}
                />
              </div>
              <span
                className={`text-[11px] font-medium tabular-nums transition-colors flex-shrink-0 ${
                  wordCount > 200 ? "text-red-500" : wordCount > 160 ? "text-amber-500" : "text-[#c0c0d0] dark:text-[#4a4a6a]"
                }`}
              >
                {wordCount} / 200
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#f0f0f8] dark:bg-[#242440] my-6" />

          {/* Budget */}
          <div className="mb-7">
            <label className="block text-[11px] font-semibold text-[#9999b0] dark:text-[#6060a0] tracking-[1.5px] uppercase mb-5">
              How much are you ready to invest?
            </label>

            {/* Budget pill — typeable */}
            <div className="flex justify-center mb-5">
              <div className={`inline-flex flex-col items-center bg-gradient-to-br from-[#f0f2ff] dark:from-[#141428] to-[#f5f0ff] dark:to-[#1a1030] border rounded-2xl px-8 py-3 transition-all duration-200 ${isBudgetFocused ? "border-[#7c3aed] shadow-[0_0_0_3px_rgba(124,58,237,0.15)]" : "border-[#e0e0f5] dark:border-[#242440]"}`}>
                <div className="flex items-center">
                  <span className="font-black text-[34px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent leading-none tracking-tight">₹</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={isBudgetFocused ? budgetInput.replace(/,/g, "") : budgetInput}
                    onChange={handleBudgetType}
                    onFocus={() => { setIsBudgetFocused(true); setBudgetInput(budget.toLocaleString("en-IN").replace(/,/g, "")); }}
                    onBlur={handleBudgetBlur}
                    className="font-black text-[34px] bg-transparent bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent leading-none tracking-tight outline-none w-[160px] text-center caret-[#7c3aed]"
                    style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to right, #002eff, #7c3aed)", backgroundClip: "text" }}
                  />
                </div>
                <span className="text-[10px] text-[#9999b0] dark:text-[#6060a0] mt-1 tracking-widest uppercase font-semibold">your budget</span>
              </div>
            </div>

            {/* Track */}
            <div className="relative h-[6px] rounded-full bg-[#ebebf5] dark:bg-[#1c1c35] mx-1">
              <div
                ref={fillRef}
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#002eff] to-[#7c3aed] pointer-events-none will-change-[width]"
                style={{ width: `${percent}%` }}
              />
              <input
                ref={sliderRef}
                type="range"
                min={MIN}
                max={MAX}
                step={500}
                defaultValue={budget}
                onChange={handleSliderInput}
                onMouseUp={handleSliderCommit}
                onTouchEnd={handleSliderCommit}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                style={{ touchAction: "none" }}
              />
              {/* Thumb */}
              <div
                ref={thumbRef}
                className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-white dark:bg-[#141428] border-2 border-[#7c3aed] shadow-[0_2px_12px_rgba(124,58,237,0.35)] pointer-events-none will-change-[left]"
                style={{ left: `calc(${percent}% - 11px)` }}
              >
                <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-[#002eff] to-[#7c3aed]" />
              </div>
            </div>

            {/* Ticks */}
            <div className="flex justify-between mt-3 px-1">
              {[1, 12.5, 25, 37.5, 50].map((v) => (
                <span key={v} className="text-[10px] text-[#c0c0d0] dark:text-[#4a4a6a] font-medium">
                  ₹{v}k
                </span>
              ))}
            </div>
          </div>

          {/* Error / Success */}
          {errorMsg && (
            <p className="text-red-600 dark:text-red-400 text-[13px] mb-4 bg-red-50 dark:bg-red-950/30 py-2.5 px-4 rounded-xl border border-red-100 dark:border-red-900/50 font-medium">
              {errorMsg}
            </p>
          )}
          {isSuccess && (
            <div className="mb-4 bg-gradient-to-r from-emerald-50 dark:from-emerald-950/30 to-teal-50 dark:to-teal-950/30 border border-emerald-100 dark:border-emerald-900/50 rounded-xl py-3 px-4 text-center">
              <p className="text-emerald-700 dark:text-emerald-400 text-[13px] font-semibold">Request submitted!</p>
              <p className="text-emerald-600 dark:text-emerald-500 text-[12px] mt-0.5">We&apos;ll get back to you within 24 hours.</p>
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || isSuccess || wordCount > 200}
            className="relative w-full h-[52px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[15px] font-bold rounded-xl overflow-hidden group transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_8px_24px_rgba(0,46,255,0.35)] active:scale-[0.99]"
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
            <span className="relative">
              {isSubmitting ? "Submitting…" : isSuccess ? "Submitted ✓" : "Send message"}
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}
