"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      setHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-[#07070e]/80 backdrop-blur-xl shadow-[0_4px_24px_0_rgba(0,46,255,0.07)] border-b border-white/40 dark:border-[#242440]/40"
          : "bg-white/95 dark:bg-[#07070e]/95 backdrop-blur-sm shadow-[0px_1px_0px_0px_rgba(0,0,0,0.06)] dark:shadow-[0px_1px_0px_0px_rgba(255,255,255,0.04)]"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="font-black text-[13px] sm:text-[15px] tracking-[2.5px] text-[#0a0a0a] dark:text-[#eeeeff] uppercase flex-shrink-0"
        >
          SINDHU BISWAL
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#555566] dark:text-[#8888bb] text-[13px] font-medium hover:text-[#0a0a0a] dark:hover:text-[#eeeeff] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + theme toggle + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-[#f5f5fa] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] flex items-center justify-center text-[#555566] dark:text-[#8888bb] hover:text-[#002eff] dark:hover:text-[#7c7cff] hover:border-[#002eff] dark:hover:border-[#7c7cff] hover:scale-105 transition-all duration-200 flex-shrink-0"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "book";
            }}
            className="hidden sm:flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[12px] sm:text-[13px] font-semibold px-4 sm:px-5 h-[38px] sm:h-[40px] rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Your Audit →
          </a>
          <button
            className="lg:hidden p-2 text-[#0a0a0a] dark:text-[#eeeeff] text-xl leading-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#07070e] border-t border-[#e8e8f0] dark:border-[#242440] px-5 py-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#0a0a0a] dark:text-[#eeeeff] text-[15px] font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-[44px] rounded-full"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.location.hash = "book";
            }}
          >
            Get Your Audit →
          </a>
        </div>
      )}
    </nav>
  );
}
