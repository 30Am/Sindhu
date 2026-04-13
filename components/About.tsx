import Image from "next/image";

const ABOUT_PHOTO = "/Gemini_Generated_Image_skdhthskdhthskdh.png";

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
    <section id="about" className="bg-white dark:bg-[#07070e] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 w-full">
            {/* Accent line + label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full flex-shrink-0" />
              <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
                BREAKDOWN BY SINDHU
              </span>
            </div>

            <h2 className="font-black text-[32px] sm:text-[40px] lg:text-[48px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] mb-5 leading-tight">
              Decode your Instagram!
            </h2>

            <p className="text-[#555566] dark:text-[#8888bb] text-[15px] sm:text-[16px] leading-[26px] mb-5">
              The consultant behind Raj Shamani&apos;s podcast growth. 500+ founders and creators have already done this with us and seen real results. Don&apos;t be the one who watches others grow while wondering what they&apos;re doing differently.
            </p>

            <p className="text-[#555566] dark:text-[#8888bb] text-[15px] sm:text-[16px] leading-[26px] mb-8">
              I will decode your Instagram and YouTube to see exactly why you&apos;re not growing, what&apos;s bleeding reach, and what to fix first. This isn&apos;t a template checklist, it&apos;s 15 years of pattern recognition, certified by Cannes Lions &amp; Ogilvy UK, put to work on your account.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
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
                    className="bg-[#f5f5fc] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] text-[#0a0a0a] dark:text-[#eeeeff] text-[11px] sm:text-[12px] font-semibold px-4 h-8 rounded-full flex items-center"
                  >
                    {tag.label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Photo with stat card */}
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:w-[420px] xl:w-[460px] flex-shrink-0">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-t from-[#e5e5f5] dark:from-[#1a1a2e] to-[#c7c2e5] dark:to-[#0f0f20]">
              <Image
                src={ABOUT_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            {/* Stat card overlay */}
            <div className="absolute bottom-[-16px] right-[-16px] sm:bottom-[-20px] sm:right-[-20px] bg-white dark:bg-[#101020] rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,46,255,0.12)] dark:shadow-[0px_8px_24px_0px_rgba(0,46,255,0.25)] w-[150px] sm:w-[170px] p-4 sm:p-5">
              <p className="font-black text-[28px] sm:text-[32px] text-[#002eff] leading-none">
                23+
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#555566] dark:text-[#8888bb] mt-1">
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
