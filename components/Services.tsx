"use client";

import { useState } from "react";

type Platform = "instagram" | "youtube" | "both";

const basicFeatures = [
  "Profile & bio optimization review",
  "Content strategy assessment (30 posts)",
  "Engagement rate benchmarking",
  "Hashtag & keyword strategy",
  "3 quick-win recommendations",
  "PDF report via email",
  "Delivered in 5 business days",
];

const advancedFeatures = [
  "Everything in Basic Audit",
  "Deep-dive performance analysis",
  "Competitor benchmarking (3 brands)",
  "Audience persona breakdown",
  "Algorithm & posting cadence plan",
  "Monetization & growth opportunities",
  "30-day prioritized action plan",
];

const prices: Record<Platform, { basic: string; advanced: string; advancedSub: string }> = {
  instagram: { basic: "₹2,999", advanced: "₹6,999", advancedSub: "per platform" },
  youtube:   { basic: "₹2,999", advanced: "₹6,999", advancedSub: "per platform" },
  both:      { basic: "₹5,999", advanced: "₹11,999", advancedSub: "both platforms" },
};

export default function Services() {
  const [platform, setPlatform] = useState<Platform>("both");

  return (
    <section id="services" className="bg-gradient-to-b from-[#f6f6fe] to-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Label */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            CHOOSE YOUR AUDIT
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[48px] tracking-[-1px] text-[#0a0a0a] text-center mb-4 leading-tight">
          Two Tiers. One Goal: Growth.
        </h2>
        <p className="text-[#555566] text-[14px] sm:text-[16px] leading-[26px] text-center mb-8 max-w-[520px] mx-auto">
          Pick the audit that matches where you are — both deliver real,
          actionable insight.
        </p>

        {/* Platform Toggle */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(
            [
              { id: "instagram", label: "📸 Instagram" },
              { id: "youtube",   label: "▶️ YouTube" },
              { id: "both",      label: "🔥 Both Platforms" },
            ] as { id: Platform; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPlatform(tab.id)}
              className={`h-10 sm:h-11 px-4 sm:px-6 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer ${
                platform === tab.id
                  ? "bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white shadow-md"
                  : "bg-white border border-[#e8e8f0] text-[#0a0a0a] hover:border-[#002eff]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

          {/* Basic Card */}
          <div className="bg-white border border-[#e8e8f0] rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col">
            <div className="mb-auto">
              <p className="text-[10px] font-semibold text-[#8c8ca6] tracking-[2px] uppercase mb-2">
                TIER 1
              </p>
              <h3 className="font-black text-[24px] sm:text-[28px] text-[#0a0a0a] mb-3">
                Basic Audit
              </h3>
              <p className="font-black text-[38px] sm:text-[44px] text-[#002eff] tracking-[-1px] leading-none">
                {prices[platform].basic}
              </p>
              <p className="text-[13px] text-[#555566] mt-2 mb-5">per platform</p>
              <div className="border-t border-[#e8e8f0] mb-5" />
              <ul className="space-y-3">
                {basicFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="font-bold text-[#002eff] text-[13px] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#555566] text-[13px] leading-[20px]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#book"
              className="mt-7 flex items-center justify-center w-full h-12 rounded-full border-[1.5px] border-[#002eff] text-[#002eff] text-[14px] font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Basic Audit →
            </a>
          </div>

          {/* Advanced Card */}
          <div className="bg-[#0a0a0a] rounded-2xl shadow-[0px_16px_40px_0px_rgba(0,46,255,0.18)] p-6 sm:p-8 relative flex flex-col">
            {/* Most Popular badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[10px] font-semibold tracking-[0.5px] px-3 h-7 rounded-full flex items-center">
              ⭐ MOST POPULAR
            </div>

            <div className="mb-auto">
              <p className="text-[10px] font-semibold text-[#9999cc] tracking-[2px] uppercase mb-2">
                TIER 2
              </p>
              <h3 className="font-black text-[24px] sm:text-[28px] text-white mb-3">
                Advanced Audit
              </h3>
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
              className="mt-7 flex items-center justify-center w-full h-12 rounded-full bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
            >
              Get Advanced Audit →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
