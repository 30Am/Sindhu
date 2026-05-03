"use client";

import { useState, useEffect, useRef } from "react";

type Platform = "instagram" | "youtube" | "both";

const basicFeatures = [
  "Personalized written audit report (manually prepared)",
  "Positioning Clarity and Niche Ownership",
  "First Impression Audit of Profile",
  "Content Pillar Architecture",
  "Finding your Audience-Content Fit",
  "Engagement Quality and Depth",
  "Follower Growth Trajectory and Inflection Points",
  "Content Format Portfolio",
];

const advancedFeatures = [
  "1-on-1 Live Strategy Call with Sindhu (1 hour)",
  "Hook and Retention Architecture",
  "Storytelling and Personal Brand Narrative",
  "Monetisation Alignment and Funnel Architecture",
  "Competitive Benchmarking and Differentiation",
  "Strategic Trajectory and Growth Ceiling Diagnosis",
  "Brand Aesthetic and Visual Consistency",
];

const prices: Record<Platform, { basic: string; advanced: string; advancedSub: string }> = {
  instagram: { basic: "₹2,999", advanced: "₹6,999", advancedSub: "per platform" },
  youtube:   { basic: "₹2,999", advanced: "₹6,999", advancedSub: "per platform" },
  both:      { basic: "₹5,999", advanced: "₹11,999", advancedSub: "both platforms" },
};

export default function Services() {
  const [platform, setPlatform] = useState<Platform>("both");

  return (
    <section id="services" className="bg-gradient-to-b from-[#f6f6fe] dark:from-[#0b0b18] to-white dark:to-[#07070e] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Label */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            CHOOSE YOUR AUDIT
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[48px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] text-center mb-4 leading-tight">
          Personalized 1-on-1 audits — not a template.
        </h2>
        <p className="text-[#555566] dark:text-[#8888bb] text-[14px] sm:text-[16px] leading-[26px] text-center mb-8 max-w-[600px] mx-auto">
          My team manually reviews your profile against our internal framework
          and writes a custom audit report. The Advanced tier includes a live
          1-hour strategy call with me — no downloadable courses, no canned
          PDFs, no e-books.
        </p>

        {/* Platform Toggle */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {/* Instagram */}
          <button
            onClick={() => setPlatform("instagram")}
            className={`h-10 sm:h-11 px-4 sm:px-6 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              platform === "instagram"
                ? "bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white shadow-md"
                : "bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] text-[#0a0a0a] dark:text-[#eeeeff] hover:border-[#002eff]"
            }`}
          >
            <span className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden relative"
              style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.12)" }}>
              <img src="/instagram.avif" alt="Instagram" width={26} height={26} className="rounded-lg" />
              <span className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 60%)", pointerEvents: "none" }} />
            </span>
            Instagram
          </button>

          {/* YouTube */}
          <button
            onClick={() => setPlatform("youtube")}
            className={`h-10 sm:h-11 px-4 sm:px-6 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              platform === "youtube"
                ? "bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white shadow-md"
                : "bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] text-[#0a0a0a] dark:text-[#eeeeff] hover:border-[#002eff]"
            }`}
          >
            <span className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden relative"
              style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.12)" }}>
              <img src="/youtube.svg" alt="YouTube" width={22} height={22} />
              <span className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 60%)", pointerEvents: "none" }} />
            </span>
            YouTube
          </button>

          {/* Both Platforms */}
          <button
            onClick={() => setPlatform("both")}
            className={`h-10 sm:h-11 px-4 sm:px-6 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              platform === "both"
                ? "bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white shadow-md"
                : "bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] text-[#0a0a0a] dark:text-[#eeeeff] hover:border-[#002eff]"
            }`}
          >
            <span className="flex items-center gap-1 flex-shrink-0">
              <span className="w-[22px] h-[22px] rounded-md flex items-center justify-center overflow-hidden relative"
                style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.1)" }}>
                <img src="/instagram.avif" alt="Instagram" width={22} height={22} className="rounded-md" />
                <span className="absolute inset-0 rounded-md" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 60%)", pointerEvents: "none" }} />
              </span>
              <span className="w-[22px] h-[22px] rounded-md flex items-center justify-center overflow-hidden relative"
                style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.1)" }}>
                <img src="/youtube.svg" alt="YouTube" width={19} height={19} />
                <span className="absolute inset-0 rounded-md" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 60%)", pointerEvents: "none" }} />
              </span>
            </span>
            Both Platforms
          </button>
        </div>

        {/* Cards */}
        <CardsSection prices={prices} platform={platform} basicFeatures={basicFeatures} advancedFeatures={advancedFeatures} />
      </div>
    </section>
  );
}

function CardsSection({ prices, platform, basicFeatures, advancedFeatures }: {
  prices: Record<string, { basic: string; advanced: string; advancedSub: string }>;
  platform: string;
  basicFeatures: string[];
  advancedFeatures: string[];
}) {
  const basicRef = useRef<HTMLDivElement>(null);
  const advancedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [basicRef.current, advancedRef.current];
    els.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

          {/* Basic Card */}
          <div
            ref={basicRef}
            style={{ opacity: 0, transform: "translateY(36px) scale(0.97)", transition: "opacity 0.55s ease 0s, transform 0.55s cubic-bezier(0.34,1.2,0.64,1) 0s, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease" }}
            className="bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)] p-6 sm:p-8 flex flex-col hover:scale-[1.03] hover:shadow-[0px_8px_40px_0px_rgba(124,58,237,0.15)] hover:bg-[#f5f3ff] dark:hover:bg-[#14102a] hover:border-[#c4b5fd] active:scale-[1.02] active:shadow-[0px_8px_32px_0px_rgba(124,58,237,0.2)] active:bg-[#f5f3ff] dark:active:bg-[#14102a] active:border-[#c4b5fd]">
            <div className="mb-auto">
              <p className="text-[10px] font-semibold text-[#8c8ca6] dark:text-[#6060a0] tracking-[2px] uppercase mb-2">
                TIER 1
              </p>
              <h3 className="font-black text-[24px] sm:text-[28px] text-[#0a0a0a] dark:text-[#eeeeff] mb-1">
                Basic Audit
              </h3>
              <p className="text-[12px] text-[#555566] dark:text-[#8888bb] mb-3 italic">
                Personalized written audit, hand-prepared by my team
              </p>
              <p className="font-black text-[38px] sm:text-[44px] text-[#002eff] tracking-[-1px] leading-none">
                {prices[platform].basic}
              </p>
              <p className="text-[13px] text-[#555566] dark:text-[#8888bb] mt-2 mb-5">per platform</p>
              <div className="border-t border-[#e8e8f0] dark:border-[#242440] mb-5" />
              <ul className="space-y-3">
                {basicFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="font-bold text-[#002eff] text-[13px] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#555566] dark:text-[#8888bb] text-[13px] leading-[20px]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#book"
              className="mt-7 flex items-center justify-center w-full h-12 rounded-full border-[1.5px] border-[#002eff] text-[#002eff] text-[14px] font-semibold relative overflow-hidden group transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-[0px_4px_20px_0px_rgba(0,46,255,0.4)] active:text-white active:border-transparent active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#002eff] to-[#7c3aed] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get Basic Audit →</span>
            </a>
          </div>

          {/* Advanced Card */}
          <div
            ref={advancedRef}
            style={{ opacity: 0, transform: "translateY(36px) scale(0.97)", transition: "opacity 0.55s ease 0.1s, transform 0.55s cubic-bezier(0.34,1.2,0.64,1) 0.1s, box-shadow 0.3s ease, background-color 0.3s ease" }}
            className="bg-[#0a0a0a] dark:bg-[#0d0d20] rounded-2xl shadow-[0px_16px_40px_0px_rgba(0,46,255,0.18)] p-6 sm:p-8 relative flex flex-col hover:scale-[1.03] hover:shadow-[0px_24px_60px_0px_rgba(124,58,237,0.35)] hover:bg-[#110d1f] active:scale-[1.02] active:shadow-[0px_20px_50px_0px_rgba(124,58,237,0.4)] active:bg-[#110d1f]">
            {/* Most Popular badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[10px] font-semibold tracking-[0.5px] px-3 h-7 rounded-full flex items-center">
              ⭐ MOST POPULAR
            </div>

            <div className="mb-auto">
              <p className="text-[10px] font-semibold text-[#9999cc] tracking-[2px] uppercase mb-2">
                TIER 2
              </p>
              <h3 className="font-black text-[24px] sm:text-[28px] text-white mb-1">
                Advanced Audit
              </h3>
              <p className="text-[12px] text-[#b2b2cc] mb-3 italic">
                Audit + 1-hour live strategy call with Sindhu
              </p>
              <p className="font-black text-[38px] sm:text-[44px] tracking-[-1px] leading-none bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">
                {prices[platform].advanced}
              </p>
              <p className="text-[13px] text-[#b2b2cc] mt-2 mb-5">
                {prices[platform].advancedSub}
                {platform !== "both" && " · ₹11,999 for both"}
              </p>
              <div className="border-t border-[#33334d] mb-5" />
              <ul className="space-y-3">
                {advancedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="font-bold text-[#66cc80] text-[13px] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#c7c7d9] text-[13px] leading-[20px]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#book"
              className="mt-7 flex items-center justify-center w-full h-12 rounded-full bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[14px] font-semibold relative overflow-hidden group transition-all duration-300 hover:shadow-[0px_6px_24px_0px_rgba(124,58,237,0.5)] active:shadow-[0px_6px_24px_0px_rgba(124,58,237,0.5)] active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#002eff] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
              <span className="relative">Get Advanced Audit →</span>
            </a>
          </div>

        </div>
  );
}
