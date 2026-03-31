export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] pt-8 pb-5">
      <div className="h-[2px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] mb-8 sm:mb-8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <p className="font-black text-[14px] sm:text-[15px] text-white tracking-[3px] uppercase mb-2">
              SINDHU BISWAL
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#737394] mb-5 leading-[20px]">
              Growth Marketing Expert · Founder, Buzzlab
            </p>
            <div className="flex gap-2 flex-wrap">
              {["LinkedIn", "Topmate", "Instagram"].map((p) => (
                <a
                  key={p}
                  href="#"
                  className="bg-[#1a1a26] border border-[#33334d] rounded-lg h-7 px-3 flex items-center text-[11px] font-medium text-[#8c8cad] hover:text-white hover:border-[#555577] transition-colors"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold text-[#8080a6] tracking-[1.5px] uppercase mb-4">
              Services
            </p>
            {["Basic Audit", "Advanced Audit", "Both Platforms"].map((item) => (
              <a
                key={item}
                href="#services"
                className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] font-semibold text-[#8080a6] tracking-[1.5px] uppercase mb-4">
              Navigate
            </p>
            {[
              { label: "About",        href: "#about" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "FAQ",          href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold text-[#8080a6] tracking-[1.5px] uppercase mb-4">
              Contact
            </p>
            <a
              href="mailto:hello@buzzlab.in"
              className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors"
            >
              hello@buzzlab.in
            </a>
            <a href="#" className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors">
              Refund Policy
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#262638] pt-5">
          <p className="text-[11px] text-[#4d4d6b] text-center">
            © 2026 Sindhu Biswal / Buzzlab · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
