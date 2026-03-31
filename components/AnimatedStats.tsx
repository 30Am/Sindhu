"use client";

import { useEffect, useState } from "react";

function CountUp({ end, prefix = "", suffix = "" }: { end: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const duration = 2000; // 2 seconds
    const incrementTime = 30; // 30ms updates
    const totalSteps = Math.ceil(duration / incrementTime);
    const step = (end - start) / totalSteps;

    if (start === end) {
      return;
    }

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return <>{prefix}{count}{suffix}</>;
}

export default function AnimatedStats() {
  const stats = [
    { value: <CountUp end={50} suffix="K+" />, label: "LinkedIn Followers" },
    { value: <CountUp end={23} suffix="+" />, label: "Brands Scaled" },
    { value: <CountUp end={12} suffix="+" />, label: "Years Experience" },
    { value: <><CountUp end={5} />&ndash;<CountUp end={7} /></>, label: "Day Delivery" },
  ];

  return (
    <div className="bg-[#f7f7fd] border-t border-[#e8e8f0]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-6 sm:py-10 ${
              i > 0 && i !== 2 ? "border-l border-[#e8e8f0]" : ""
            } ${i === 2 || i === 3 ? "border-t lg:border-t-0 border-[#e8e8f0]" : ""} ${
              i === 2 && "lg:border-l"
            }`}
          >
            <p className="font-black text-[36px] sm:text-[48px] lg:text-[56px] text-[#002eff] leading-none mb-2">
              {stat.value}
            </p>
            <p className="text-[12px] sm:text-[14px] font-bold text-[#555566] text-center px-1 uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
