import Image from "next/image";
import AnimatedStats from "./AnimatedStats";

const HERO_PHOTO =
  "https://www.figma.com/api/mcp/asset/898806f1-82e3-43f7-9b0f-a17e7e83bc8b";

export default function Hero() {
  return (
    <section className="relative bg-white pt-[68px] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,46,255,0.07)_0%,_transparent_70%)] pointer-events-none" />

      {/* ── DESKTOP layout (lg+) ── */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-16 mb-16 xl:mb-20">
        {/* Hey / there */}
        <div className="flex justify-between items-start pt-8">
          <p className="font-light italic text-[80px] xl:text-[96px] leading-none text-[#0a0a0a] opacity-50">
            Hey,
          </p>
          <p className="font-light italic text-[80px] xl:text-[96px] leading-none text-[#0a0a0a] opacity-50">
            there
          </p>
        </div>

        {/* 3-column: left text | photo | right text */}
        <div className="flex items-end gap-8 -mt-6">
          {/* Left */}
          <div className="flex-1 pb-10 flex flex-col gap-5">
            <div className="flex items-center gap-2 bg-[#f5f5fa] border border-[#e8e8f0] rounded-full h-9 w-fit px-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-[12px] font-medium text-[#0a0a0a] whitespace-nowrap">
                Available for New Audits
              </span>
            </div>
            <div>
              <p className="font-extrabold text-[12px] tracking-[4px] text-[#0a0a0a] mb-1 uppercase">
                I AM
              </p>
              <p className="font-black text-[72px] xl:text-[84px] leading-none tracking-[-2px] text-[#0a0a0a]">
                SINDHU
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-11 px-6 rounded-full hover:opacity-90 transition-opacity"
              >
                Get My Audit Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-[1.5px] border-[#002eff] text-[#002eff] text-[13px] font-semibold h-11 px-5 rounded-full hover:bg-blue-50 transition-colors"
              >
                See What&apos;s Included
              </a>
            </div>
          </div>

          {/* Center photo */}
          <div className="w-[320px] xl:w-[370px] flex-shrink-0">
            <div className="relative w-full h-[480px] xl:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-t from-[#e0e0ed] to-[#bdbdd1] shadow-lg">
              <Image
                src={HERO_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 pb-10 flex flex-col items-end gap-5 text-right">
            <p className="text-[#555566] text-[13px] leading-[22px] max-w-[200px]">
              Specialized in Instagram, YouTube Growth Strategy, and Content
              Marketing.
            </p>
            <p className="font-black text-[48px] xl:text-[58px] leading-[1.1] tracking-[-1px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">
              GROWTH
              <br />
              AUDITOR
            </p>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET layout (< lg) ── */}
      <div className="lg:hidden">
        {/* Photo — fixed height, full-bleed */}
        <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden bg-gradient-to-t from-[#e0e0ed] to-[#bdbdd1]">
          <Image
            src={HERO_PHOTO}
            alt="Sindhu Biswal"
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
        </div>

        {/* Text content below photo */}
        <div className="px-5 sm:px-8 pt-6 pb-12 sm:pb-16 flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2 bg-[#f5f5fa] border border-[#e8e8f0] rounded-full h-8 px-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-[11px] font-medium text-[#0a0a0a]">
              Available for New Audits
            </span>
          </div>

          <div>
            <p className="font-extrabold text-[10px] tracking-[4px] text-[#0a0a0a] uppercase mb-0.5">
              I AM
            </p>
            <p className="font-black text-[48px] sm:text-[60px] leading-none tracking-[-2px] text-[#0a0a0a]">
              SINDHU
            </p>
          </div>

          <p className="font-black text-[30px] sm:text-[38px] leading-tight tracking-[-1px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">
            GROWTH AUDITOR
          </p>

          <p className="text-[#555566] text-[13px] leading-[21px] max-w-xs">
            Specialized in Instagram, YouTube Growth Strategy, and Content
            Marketing.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center pt-1">
            <a
              href="#book"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-11 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              Get My Audit Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-[1.5px] border-[#002eff] text-[#002eff] text-[13px] font-semibold h-11 px-5 rounded-full hover:bg-blue-50 transition-colors"
            >
              See What&apos;s Included
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar — shared */}
      <AnimatedStats />
    </section>
  );
}
