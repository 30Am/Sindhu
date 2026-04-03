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
              Growth Marketing Expert · Founder, Buzzlab
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sindhu.biswal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#1a1a26] border border-[#33334d] flex items-center justify-center hover:border-[#555577] transition-colors group"
              >
                <img src="/instagram.avif" alt="Instagram" width={22} height={22} className="rounded-md opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sindhubiswal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#1a1a26] border border-[#33334d] flex items-center justify-center hover:border-[#555577] transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path d="M7.75 9.5H5.25V18.5H7.75V9.5Z" fill="white"/>
                  <circle cx="6.5" cy="6.75" r="1.5" fill="white"/>
                  <path d="M18.75 18.5H16.25V13.75C16.25 12.5 15.5 11.75 14.5 11.75C13.5 11.75 12.75 12.5 12.75 13.75V18.5H10.25V9.5H12.75V10.75C13.25 9.75 14.25 9.25 15.5 9.25C17.25 9.25 18.75 10.75 18.75 13V18.5Z" fill="white"/>
                </svg>
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
