const rows = [
  { feature: "Profile & Bio Review",             basic: true,  advanced: true  },
  { feature: "Content Strategy Assessment",      basic: true,  advanced: true  },
  { feature: "Engagement Rate Analysis",         basic: true,  advanced: true  },
  { feature: "Hashtag / Keyword Review",         basic: true,  advanced: true  },
  { feature: "3 Quick-Win Recommendations",      basic: true,  advanced: true  },
  { feature: "Deep-Dive Performance Analysis",   basic: false, advanced: true  },
  { feature: "Competitor Benchmarking",          basic: false, advanced: true  },
  { feature: "Audience Persona Breakdown",       basic: false, advanced: true  },
  { feature: "Algorithm & Posting Plan",         basic: false, advanced: true  },
  { feature: "30-Day Action Plan",               basic: false, advanced: true  },
  { feature: "Loom Video Walkthrough",           basic: false, advanced: true  },
  { feature: "Both Platforms (₹11,999)",         basic: false, advanced: true  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Label */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            FULL BREAKDOWN
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] text-[#0a0a0a] text-center mb-10 leading-tight">
          What&apos;s Included?
        </h2>

        {/* Table */}
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#e8e8f0] shadow-sm">
          {/* Header */}
          <div className="bg-[#0a0a0a] grid grid-cols-[1fr_80px_100px] sm:grid-cols-[1fr_130px_160px] h-12 items-center">
            <span className="text-white text-[12px] sm:text-[13px] font-bold px-4 sm:px-6">
              Feature
            </span>
            <span className="text-white text-[11px] sm:text-[13px] font-bold text-center">
              Basic
            </span>
            <span className="text-[#b2b2f2] text-[11px] sm:text-[13px] font-bold text-center px-2">
              Advanced
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_80px_100px] sm:grid-cols-[1fr_130px_160px] h-11 sm:h-12 items-center border-b border-[#e8e8f0] last:border-0 ${
                i % 2 === 0 ? "bg-[#f8f8fe]" : "bg-white"
              }`}
            >
              <span className="text-[#0a0a0a] text-[12px] sm:text-[13px] px-4 sm:px-6 truncate pr-2">
                {row.feature}
              </span>
              <span className="text-center font-bold text-[14px]">
                {row.basic ? (
                  <span className="text-[#1ab24d]">✓</span>
                ) : (
                  <span className="text-[#d0d0e0]">—</span>
                )}
              </span>
              <span className="text-center font-bold text-[14px]">
                {row.advanced ? (
                  <span className="text-[#002eff]">✓</span>
                ) : (
                  <span className="text-[#d0d0e0]">—</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Price callout below table */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <span className="text-[13px] text-[#555566]">Basic starts at</span>
          <span className="font-black text-[20px] text-[#002eff]">₹2,999</span>
          <span className="text-[13px] text-[#555566] hidden sm:inline">·</span>
          <span className="text-[13px] text-[#555566]">Advanced starts at</span>
          <span className="font-black text-[20px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">₹6,999</span>
        </div>
      </div>
    </section>
  );
}
