export default function BottomBanner() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,46,255,0.18)] via-[rgba(124,58,237,0.08)] to-[rgba(0,46,255,0.18)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-black text-[32px] sm:text-[40px] tracking-[-1.5px] text-white leading-[1.2] mb-8">
          Looking for any other service?
        </h2>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:marketing@trythegrowthproject.com"
            className="inline-flex items-center justify-center bg-[#4d32ff] text-white text-[14px] font-semibold h-12 sm:h-14 px-8 rounded-full shadow-[0_0_24px_rgba(77,50,255,0.4)] hover:shadow-[0_0_36px_rgba(77,50,255,0.6)] transition-all"
          >
            Contact Us
          </a>
          <a
            href="https://topmate.io/sindhubiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-[2px] border-[#4d32ff] text-white bg-transparent text-[14px] font-semibold h-12 sm:h-14 px-8 rounded-full hover:bg-[#4d32ff]/10 transition-colors"
          >
            Sindhu&apos;s Topmate
          </a>
        </div>
      </div>
    </section>
  );
}
