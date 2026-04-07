"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How will I receive my audit?",
    a: "You'll receive a comprehensive PDF report directly in your email inbox within the stated delivery time. Advanced audit clients also receive a Loom video walkthrough.",
  },
  {
    q: "Will Sindhu personally do the audit?",
    a: "Yes — every audit is personally conducted by Sindhu Biswal. No outsourcing, no templates. You get her direct expertise and strategic insights.",
  },
  {
    q: "What's the difference between Basic and Advanced?",
    a: "The Basic Audit covers essential profile review, content strategy, engagement analysis, and quick wins. Advanced adds competitor benchmarking, audience persona deep-dives, algorithm analysis, and a full 30-day action plan with a Loom walkthrough.",
  },
  {
    q: "Can I audit both Instagram and YouTube?",
    a: "Absolutely! Choose the 'Both Platforms' option for ₹11,999 on the Advanced tier and get a comprehensive cross-platform growth strategy.",
  },
  {
    q: "Is this suitable for small accounts?",
    a: "100% yes. Whether you have 500 followers or 500K, the audit focuses on what's holding your specific account back and gives you actionable steps tailored to your stage of growth.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#f8f8fe] dark:bg-[#0b0b18] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Label */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] text-center mb-6 sm:mb-10 leading-tight">
          Got Questions?
        </h2>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer gap-4"
              >
                <span className="font-semibold text-[13px] sm:text-[14px] text-[#0a0a0a] dark:text-[#eeeeff] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`text-[18px] text-[#555566] dark:text-[#8888bb] flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5 border-t border-[#f0f0f8] dark:border-[#1c1c35]">
                  <p className="text-[13px] sm:text-[14px] text-[#555566] dark:text-[#8888bb] leading-[22px] pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
