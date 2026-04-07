const rows = [
  { feature: "Positioning Clarity and Niche Ownership", basic: true, advanced: true },
  { feature: "First Impression Audit of Profile", basic: true, advanced: true },
  { feature: "Content Pillar Architecture", basic: true, advanced: true },
  { feature: "Audience-Content Fit", basic: true, advanced: true },
  { feature: "Engagement Quality and Depth", basic: true, advanced: true },
  { feature: "Follower Growth Trajectory and Inflection Points", basic: true, advanced: true },
  { feature: "Content Format Portfolio", basic: true, advanced: true },
  { feature: "Posting Cadence and Consistency", basic: true, advanced: true },
  { feature: "Hook and Retention Architecture", basic: true, advanced: true },
  { feature: "Storytelling and Personal Brand Narrative", basic: false, advanced: true },
  { feature: "Monetization Alignment and Funnel Architecture", basic: false, advanced: true },
  { feature: "Competitive Benchmarking and Differentiation", basic: false, advanced: true },
  { feature: "Brand Aesthetic and Visual Consistency", basic: false, advanced: true },
  { feature: "Strategic Trajectory and Growth Ceiling Diagnosis", basic: false, advanced: true },
  { feature: "1-Hour Consulting Call", basic: false, advanced: true },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="bg-white dark:bg-[#07070e] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Label */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            FULL BREAKDOWN
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] text-center mb-10 leading-tight">
          What&apos;s Included?
        </h2>

        {/* Table */}
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#e8e8f0] dark:border-[#242440] shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {/* Header */}
          <div className="bg-[#0a0a0a] dark:bg-[#0d0d20] grid grid-cols-[1fr_80px_100px] sm:grid-cols-[1fr_130px_160px] h-12 items-center">
            <span className="text-white text-[12px] sm:text-[13px] font-bold px-4 sm:px-6">
              Feature
            </span>
            <span className="text-white text-[11px] sm:text-[13px] font-bold text-center">
              Basic ₹2,999
            </span>
            <span className="text-[#b2b2f2] text-[11px] sm:text-[13px] font-bold text-center px-2">
              Advanced ₹6,999+
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_80px_100px] sm:grid-cols-[1fr_130px_160px] h-11 sm:h-12 items-center border-b border-[#e8e8f0] dark:border-[#242440] last:border-0 ${
                i % 2 === 0
                  ? "bg-[#f8f8fe] dark:bg-[#0d0d1a]"
                  : "bg-white dark:bg-[#101020]"
              }`}
            >
              <span className="text-[#0a0a0a] dark:text-[#eeeeff] text-[12px] sm:text-[13px] px-4 sm:px-6 truncate pr-2">
                {row.feature}
              </span>
              <span className="text-center font-bold text-[14px]">
                {row.basic ? (
                  <span className="text-[#1ab24d]">✓</span>
                ) : (
                  <span className="text-[#d0d0e0] dark:text-[#3a3a5a]">—</span>
                )}
              </span>
              <span className="text-center font-bold text-[14px]">
                {row.advanced ? (
                  <span className="text-[#002eff]">✓</span>
                ) : (
                  <span className="text-[#d0d0e0] dark:text-[#3a3a5a]">—</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Price callout below table */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <span className="text-[13px] text-[#555566] dark:text-[#8888bb]">Basic starts at</span>
          <span className="font-black text-[20px] text-[#002eff]">₹2,999</span>
          <span className="text-[13px] text-[#555566] dark:text-[#8888bb] hidden sm:inline">·</span>
          <span className="text-[13px] text-[#555566] dark:text-[#8888bb]">Advanced starts at</span>
          <span className="font-black text-[20px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">₹6,999</span>
        </div>
      </div>
    </section>
  );
}
