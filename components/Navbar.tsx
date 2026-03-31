"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0px_1px_0px_0px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="font-black text-[13px] sm:text-[15px] tracking-[2.5px] text-[#0a0a0a] uppercase flex-shrink-0"
        >
          SINDHU BISWAL
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#555566] text-[13px] font-medium hover:text-[#0a0a0a] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden sm:flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[12px] sm:text-[13px] font-semibold px-4 sm:px-5 h-[38px] sm:h-[40px] rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Your Audit →
          </a>
          <button
            className="lg:hidden p-2 text-[#0a0a0a] text-xl leading-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e8f0] px-5 py-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#0a0a0a] text-[15px] font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-[44px] rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Get Your Audit →
          </a>
        </div>
      )}
    </nav>
  );
}
