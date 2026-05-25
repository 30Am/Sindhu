"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TOTAL_PAGES = 15;

export default function AuditSamplePreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollByOne = (dir: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(".audit-card");
    if (!card) return;
    const step = card.offsetWidth + 24;
    container.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const card = container.querySelector<HTMLElement>(".audit-card");
      if (!card) return;
      const step = card.offsetWidth + 24;
      const idx = Math.round(container.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(TOTAL_PAGES - 1, idx)));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : Math.min(TOTAL_PAGES - 1, i + 1)));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1)));
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  return (
    <section className="relative bg-gradient-to-b from-white dark:from-[#07070e] to-[#f6f6fe] dark:to-[#0b0b18] py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          <span className="text-[10px] font-semibold text-[#002eff] tracking-[2.5px] uppercase">
            SAMPLE REPORT
          </span>
        </div>

        <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[48px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] text-center mb-4 leading-tight">
          See how an audit report looks like
        </h2>
        <p className="text-[#555566] dark:text-[#8888bb] text-[14px] sm:text-[16px] leading-[26px] text-center mb-10 max-w-[640px] mx-auto">
          Flip through a real audit deck, frame-by-frame analysis, not a templated PDF. Tap any page to view it full-size.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-white dark:from-[#07070e] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#f6f6fe] dark:from-[#0b0b18] to-transparent z-10" />

          {/* Prev button */}
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => scrollByOne(-1)}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.25)] hover:border-[#c4b5fd] transition-all active:scale-95 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0a0a0a] dark:text-[#eeeeff]" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            aria-label="Next page"
            onClick={() => scrollByOne(1)}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white dark:bg-[#101020] border border-[#e8e8f0] dark:border-[#242440] shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.25)] hover:border-[#c4b5fd] transition-all active:scale-95 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0a0a0a] dark:text-[#eeeeff]" />
            </svg>
          </button>

          {/* Scroll track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-2 sm:px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => {
              const num = String(n).padStart(2, "0");
              return (
                <button
                  type="button"
                  key={n}
                  onClick={() => setLightboxIndex(n - 1)}
                  className="audit-card snap-center flex-shrink-0 w-[280px] sm:w-[400px] md:w-[480px] lg:w-[560px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#0d0d18] shadow-[0_12px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-1 ring-black/5 dark:ring-white/10 relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(124,58,237,0.28)]"
                  aria-label={`Open page ${n} full-size`}
                >
                  <Image
                    src={`/audit-sample/page-${num}.jpg`}
                    alt={`Audit report page ${n}`}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 480px, (min-width: 640px) 400px, 280px"
                    className="object-cover"
                    unoptimized
                  />
                  {/* Page badge */}
                  <div className="absolute top-3 left-3 bg-black/55 backdrop-blur-md text-white text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full">
                    Page {n} / {TOTAL_PAGES}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="bg-white/95 text-[#0a0a0a] text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full shadow-md">
                      🔍 Click to enlarge
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-gradient-to-r from-[#002eff] to-[#7c3aed]"
                    : "w-1.5 bg-[#d8d8e4] dark:bg-[#33334d]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1))); }}
            disabled={lightboxIndex === 0}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? null : Math.min(TOTAL_PAGES - 1, i + 1))); }}
            disabled={lightboxIndex === TOTAL_PAGES - 1}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-[1200px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/audit-sample/page-${String(lightboxIndex + 1).padStart(2, "0")}.jpg`}
              alt={`Audit report page ${lightboxIndex + 1}`}
              fill
              sizes="1200px"
              className="object-contain"
              unoptimized
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-[12px] font-medium tracking-wide">
            Page {lightboxIndex + 1} of {TOTAL_PAGES}
          </div>
        </div>
      )}
    </section>
  );
}
