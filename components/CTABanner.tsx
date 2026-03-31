export default function CTABanner() {
  return (
    <section className="bg-[#0a0a0a] py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,46,255,0.18)] via-[rgba(124,58,237,0.08)] to-[rgba(0,46,255,0.18)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="font-black text-[26px] sm:text-[34px] lg:text-[40px] tracking-[-1px] text-white leading-[1.2] mb-5 max-w-2xl mx-auto">
          Ready to Find Out What&apos;s Holding Your Growth Back?
        </h2>
        <p className="text-[14px] sm:text-[16px] text-[#a6a6c7] mb-10 max-w-md mx-auto leading-[26px]">
          Personalized audit from someone who&apos;s grown 23+ brands. No
          fluff. Just strategy.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#book"
            className="flex items-center justify-center bg-white border border-[rgba(128,128,178,0.4)] text-[#0a0a0a] text-[13px] font-semibold h-12 sm:h-[52px] px-6 sm:px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Basic Audit — ₹2,999
          </a>
          <a
            href="#book"
            className="flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-12 sm:h-[52px] px-6 sm:px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            Advanced Audit — ₹6,999+
          </a>
        </div>
      </div>
    </section>
  );
}
