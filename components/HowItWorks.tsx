"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Choose Your Audit",
    desc: "Pick the audit plan that fits your needs and goals.",
  },
  {
    num: "02",
    title: "Personality Assessment",
    desc: "Fill up a form telling us everything about you.",
  },
  {
    num: "03",
    title: "Choose Audit Type",
    desc: "Select Instagram, YouTube, or Both.",
  },
  {
    num: "04",
    title: "Share Your Issues",
    desc: "Tell us about the challenges you face and your goals for the year.",
  },
  {
    num: "05",
    title: "Pick 4 Inspirations",
    desc: "Choose 4 creators you get inspired from.",
  },
  {
    num: "06",
    title: "Make Payment",
    desc: "Pay the amount and receive a confirmation mail. Your audit will be ready within 7 days.",
  },
  {
    num: "07",
    title: "Receive Your Audit",
    desc: "The full audit is delivered as a PDF after 7 days.",
  },
  {
    num: "08",
    title: "1-Hour Consulting Call",
    desc: "In advance plans, get a 1-hour call with Sindhu and his team for consulting.",
    isAdvanced: true,
  },
];

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s cubic-bezier(0.34,1.2,0.64,1) ${index * 0.08}s, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
      className={`group border rounded-2xl p-6 h-full cursor-default
        hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,46,255,0.15)]
        active:scale-[1.02] active:shadow-[0_8px_24px_rgba(124,58,237,0.25)]
        ${
          step.isAdvanced
            ? "bg-gradient-to-br from-[rgba(124,58,237,0.18)] to-[rgba(0,46,255,0.12)] border-[rgba(124,58,237,0.35)] hover:from-[rgba(124,58,237,0.32)] hover:to-[rgba(0,46,255,0.22)] hover:border-[rgba(124,58,237,0.6)] active:from-[rgba(124,58,237,0.32)] active:to-[rgba(0,46,255,0.22)] active:border-[rgba(124,58,237,0.6)]"
            : "bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.1)] hover:from-[rgba(0,46,255,0.14)] hover:to-[rgba(124,58,237,0.08)] hover:border-[rgba(100,100,220,0.3)] active:from-[rgba(0,46,255,0.14)] active:to-[rgba(124,58,237,0.08)] active:border-[rgba(100,100,220,0.3)]"
        }`}
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#002eff] to-[#7c3aed] flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-[#7c3aed] group-hover:to-[#002eff] group-hover:shadow-[0_0_16px_rgba(124,58,237,0.5)] group-active:from-[#7c3aed] group-active:to-[#002eff] group-active:shadow-[0_0_16px_rgba(124,58,237,0.5)]">
        <span className="font-black text-[15px] text-white">{step.num}</span>
      </div>
      <h3 className="font-bold text-[15px] sm:text-[16px] text-white mb-2">{step.title}</h3>
      <p className="text-[13px] text-[#a6a6c7] leading-[20px]">{step.desc}</p>
      {step.isAdvanced && (
        <span className="inline-block mt-3 text-[10px] font-semibold text-[#c084fc] tracking-[1.5px] uppercase bg-[rgba(124,58,237,0.18)] px-2 py-1 rounded-full">
          Advance Plans Only
        </span>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden lg:flex flex-shrink-0 w-8 items-center justify-center self-stretch">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 10h12M12 6l4 4-4 4"
          stroke="#555577"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StepRow({ rowSteps, offset }: { rowSteps: (typeof steps)[number][]; offset: number }) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-4 lg:gap-0">
      {rowSteps.map((step, i) => (
        <div key={step.num} className="flex lg:flex-row lg:items-stretch flex-1">
          <div className="flex-1">
            <StepCard step={step} index={offset + i} />
          </div>
          {i < rowSteps.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  const row1 = steps.slice(0, 4);
  const row2 = steps.slice(4, 8);

  return (
    <section id="how-it-works" className="bg-[#0a0a0a] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <p className="text-[10px] font-semibold text-[#8080e5] tracking-[2.5px] uppercase text-center mb-3">
          HOW IT WORKS
        </p>
        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] text-white text-center mb-8 sm:mb-12 leading-tight">
          Audit Workflow
        </h2>

        <div className="flex flex-col gap-4">
          <StepRow rowSteps={row1} offset={0} />
          <StepRow rowSteps={row2} offset={4} />
        </div>
      </div>
    </section>
  );
}
