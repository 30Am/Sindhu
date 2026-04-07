"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({
  end,
  prefix = "",
  suffix = "",
  triggered,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [triggered, end]);

  return <>{prefix}{count}{suffix}</>;
}

export default function AnimatedStats() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { prefix: "", end: 50, suffix: "K+", label: "LinkedIn Followers" },
    { prefix: "", end: 23, suffix: "+",  label: "Brands Scaled" },
    { prefix: "", end: 12, suffix: "+",  label: "Years Experience" },
    { prefix: "",  end: 5, suffix: "–7", label: "Day Delivery" },
  ];

  return (
    <div ref={sectionRef} className="bg-[#f7f7fd] dark:bg-[#0b0b18] border-t border-[#e8e8f0] dark:border-[#242440]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-6 sm:py-10 ${
              i > 0 && i !== 2 ? "border-l border-[#e8e8f0] dark:border-[#242440]" : ""
            } ${i === 2 || i === 3 ? "border-t lg:border-t-0 border-[#e8e8f0] dark:border-[#242440]" : ""} ${
              i === 2 ? "lg:border-l" : ""
            }`}
          >
            <p
              className="font-black text-[36px] sm:text-[48px] lg:text-[56px] text-[#002eff] leading-none mb-2 tabular-nums"
              style={{
                opacity: triggered ? 1 : 0,
                transform: triggered ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <CountUp
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                triggered={triggered}
              />
            </p>
            <p
              className="text-[12px] sm:text-[14px] font-bold text-[#555566] dark:text-[#8888bb] text-center px-1 uppercase tracking-wide"
              style={{
                opacity: triggered ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 0.1 + 0.2}s`,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
