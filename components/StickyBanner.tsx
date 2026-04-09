"use client";

import { useEffect, useState } from "react";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // The "proprietary way of audit" section (Services component with id="services")
      const servicesSection = document.getElementById("services");
      let reachedServices = false;
      
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        // Disappear when the "Services" section starts becoming visible in the viewport
        reachedServices = rect.top <= window.innerHeight;
      }
      
      // Show when scrolling down (e.g., past 200px) and hide when reaches services
      if (scrollY > 200 && !reachedServices) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[999] transition-transform duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)] ${
        isVisible ? "translate-y-0" : "translate-y-[120%]"
      }`}
    >
      <div className="bg-[#0a0a0a]/85 backdrop-blur-xl border-t border-[rgba(255,255,255,0.08)] py-3 sm:py-4 px-4 sm:px-6 shadow-[0_-12px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <p className="hidden sm:block text-white/90 text-[15px] font-medium tracking-wide">
            Ready to expand your digital presence?
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "book";
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[15px] sm:text-[16px] font-bold h-12 px-8 rounded-full shadow-[0px_4px_24px_rgba(124,58,237,0.4)] hover:shadow-[0px_6px_32px_rgba(124,58,237,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Get Your Audit 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
