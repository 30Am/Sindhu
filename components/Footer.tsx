export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <p className="font-black text-[14px] sm:text-[15px] text-white tracking-[3px] uppercase mb-2">
              SINDHU BISWAL
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#737394] mb-5 leading-[20px]">
              Growth Marketing Expert
            </p>
            <div className="flex gap-2 flex-wrap">
              <a
                href="https://www.linkedin.com/in/sindhubiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 h-9 rounded-lg bg-[#1a1a26] border border-[#33334d] text-[12px] font-medium text-[#eeeeff] hover:border-[#555577] hover:bg-[#22222e] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://topmate.io/sindhubiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 h-9 rounded-lg bg-[#1a1a26] border border-[#33334d] text-[12px] font-medium text-[#eeeeff] hover:border-[#555577] hover:bg-[#22222e] transition-colors"
              >
                Topmate
              </a>
              <a
                href="https://www.instagram.com/sindhu.biswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 h-9 rounded-lg bg-[#1a1a26] border border-[#33334d] text-[12px] font-medium text-[#eeeeff] hover:border-[#555577] hover:bg-[#22222e] transition-colors"
              >
                Instagram
              </a>
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
              { label: "About",        href: "/#about" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Testimonials", href: "/#testimonials" },
              { label: "FAQ",          href: "/#faq" },
              { label: "Contact",      href: "/contact" },
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

          {/* Legal & Contact */}
          <div>
            <p className="text-[10px] font-semibold text-[#8080a6] tracking-[1.5px] uppercase mb-4">
              Legal
            </p>
            <a
              href="mailto:marketing@trythegrowthproject.com"
              className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors"
            >
              marketing@trythegrowthproject.com
            </a>
            <a href="/privacy" className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="/refund" className="block text-[12px] text-[#737394] hover:text-white mb-3 transition-colors">
              Refund Policy
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#262638] pt-5">
          <p className="text-[11px] text-[#4d4d6b] text-center">
            © 2026 Sindhu Biswal · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
