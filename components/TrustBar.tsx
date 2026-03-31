const brands = [
  "Raj Shamani",
  "Finance with Sharan",
  "FilterCopy",
  "PayTM Insider",
  "Wakefit",
  "Acko",
  "Betterhalf",
  "IPL",
  "iMumz",
  "Masters' Union",
];

export default function TrustBar() {
  const scrollBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="bg-[#f9f9fe] border-t border-b border-[#e8e8f0] py-4 sm:py-0 sm:h-[88px] flex items-center overflow-hidden w-full relative">
      <div className="w-full relative flex items-center overflow-hidden">
        {/* Fading margins for the continuous loop effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f9f9fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f9f9fe] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee items-center py-2">
          {scrollBrands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="bg-white border border-[#e8e8f0] rounded-[6px] h-[36px] sm:h-[40px] px-5 sm:px-6 mx-2 sm:mx-3 flex items-center justify-center flex-shrink-0 cursor-pointer transition-all hover:bg-gradient-to-r hover:from-[#002eff] hover:to-[#7c3aed] hover:border-transparent group shadow-sm hover:shadow-md"
            >
              <span className="text-[12px] sm:text-[14px] font-bold text-[#0a0a0a] whitespace-nowrap group-hover:text-white transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
