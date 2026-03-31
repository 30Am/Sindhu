const steps = [
  {
    num: "01",
    title: "Choose Audit",
    desc: "Pick Basic or Advanced + your platform",
  },
  {
    num: "02",
    title: "Fill the Form",
    desc: "Share profile link, goals & challenges",
  },
  {
    num: "03",
    title: "Make Payment",
    desc: "UPI / Card / Net Banking — Confirmed instantly",
  },
  {
    num: "04",
    title: "Receive Audit",
    desc: "Full report in inbox within 5–7 days",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0a0a0a] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Label */}
        <p className="text-[10px] font-semibold text-[#8080e5] tracking-[2.5px] uppercase text-center mb-3">
          HOW IT WORKS
        </p>
        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] text-white text-center mb-8 sm:mb-12 leading-tight">
          4 Simple Steps to Your Audit
        </h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-full">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#002eff] to-[#7c3aed] flex items-center justify-center mb-5">
                  <span className="font-black text-[15px] text-white">{step.num}</span>
                </div>
                <h3 className="font-bold text-[15px] sm:text-[16px] text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#a6a6c7] leading-[20px]">
                  {step.desc}
                </p>
              </div>
              {/* Arrow — only on lg between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#555577] text-[20px]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
