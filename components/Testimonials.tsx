"use client";

const testimonials = [
  {
    quote:
      "After implementing Sindhu's audit recommendations, my reach doubled in 3 weeks. The quick-wins were immediately actionable.",
    name: "Priya Sharma",
    handle: "@priyacreates · 45K followers",
    initials: "PS",
  },
  {
    quote:
      "The competitor benchmarking alone gave me 5 video ideas I wouldn't have thought of. Advanced audit is worth every rupee.",
    name: "Rohan Mehta",
    handle: "@rohantalks · 120K subscribers",
    initials: "RM",
  },
  {
    quote:
      "Our engagement rate went from 1.2% to 4.8% after following Sindhu's 30-day action plan. Incredible ROI.",
    name: "Aakash Patel",
    handle: "Marketing Head · D2C Brand",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-10 sm:py-16 lg:py-24">
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .testimonial-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 46, 255, 0.04) 0%,
            rgba(124, 58, 237, 0.06) 40%,
            rgba(0, 46, 255, 0.03) 70%,
            rgba(124, 58, 237, 0.05) 100%
          );
          background-size: 300% 300%;
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 0;
        }
        .testimonial-card:hover::before {
          opacity: 1;
          animation: gradientShift 4s ease infinite;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 46, 255, 0.1), 0 4px 12px rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.25);
        }
        .testimonial-card > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Label */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            REAL CREATORS. REAL RESULTS.
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] text-[#0a0a0a] text-center mb-6 sm:mb-10 leading-tight">
          What People Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white border border-[#e8e8f0] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden flex flex-col"
            >

              <p className="font-bold text-[14px] text-[#f5d84a] mb-3">★★★★★</p>
              <p className="text-[#555566] text-[14px] leading-[22px] flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#002eff] to-[#7c3aed] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[13px] text-[#0a0a0a]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#555566]">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
