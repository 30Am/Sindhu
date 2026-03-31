import Image from "next/image";

const ABOUT_PHOTO =
  "https://www.figma.com/api/mcp/asset/d53d53be-eeec-45a1-97bc-311c856c1fac";

const tags = [
  { label: "Buzzlab Founder", gradient: true },
  { label: "Ex-FilterCopy", gradient: false },
  { label: "19+ Brands Advised", gradient: true },
  { label: "Ogilvy UK Cert.", gradient: false },
  { label: "50K+ LinkedIn", gradient: true },
  { label: "Growth @ Wakefit", gradient: false },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 w-full">
            {/* Accent line + label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full flex-shrink-0" />
              <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
                ABOUT THE AUDITOR
              </span>
            </div>

            <h2 className="font-black text-[32px] sm:text-[40px] lg:text-[48px] tracking-[-1px] text-[#0a0a0a] mb-5 leading-tight">
              Hi, I&apos;m Sindhu Biswal.
            </h2>

            <p className="text-[#555566] text-[15px] sm:text-[16px] leading-[26px] mb-5">
              Founder &amp; CEO of Buzzlab. Growth Marketing Consultant for
              Wakefit and Acko. Ex-FilterCopy (Pocket Aces) and PayTM Insider.
              Fractional CMO for 12 consumer internet companies and 7 B2B SaaS
              firms.
            </p>

            <p className="text-[#555566] text-[15px] sm:text-[16px] leading-[26px] mb-8">
              At The Growth Project, we do heavy experiments with a growth
              mindset — performance marketing, CRO, and brandformance.
              We&apos;re founder-friendly and data-backed. I&apos;ve mentored
              at Masters&apos; Union and am certified by Cannes Lions &amp;
              Ogilvy UK.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) =>
                tag.gradient ? (
                  <span
                    key={tag.label}
                    className="bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[11px] sm:text-[12px] font-semibold px-4 h-8 rounded-full flex items-center"
                  >
                    {tag.label}
                  </span>
                ) : (
                  <span
                    key={tag.label}
                    className="bg-[#f5f5fc] border border-[#e8e8f0] text-[#0a0a0a] text-[11px] sm:text-[12px] font-semibold px-4 h-8 rounded-full flex items-center"
                  >
                    {tag.label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Photo with stat card */}
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:w-[420px] xl:w-[460px] flex-shrink-0">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-t from-[#e5e5f5] to-[#c7c2e5]">
              <Image
                src={ABOUT_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            {/* Stat card overlay */}
            <div className="absolute bottom-[-16px] right-[-16px] sm:bottom-[-20px] sm:right-[-20px] bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,46,255,0.12)] w-[150px] sm:w-[170px] p-4 sm:p-5">
              <p className="font-black text-[28px] sm:text-[32px] text-[#002eff] leading-none">
                23+
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#555566] mt-1">
                Brands Scaled
              </p>
              <div className="mt-2 w-9 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
