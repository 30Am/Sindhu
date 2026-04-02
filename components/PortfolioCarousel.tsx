"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const baseItems = [
  { id: 1, caption: "Strategy & Planning" },
  { id: 2, caption: "Design & Development" },
  { id: 3, caption: "Launch & Growth" },
  { id: 4, caption: "Ongoing Support" },
  { id: 5, caption: "SEO Optimization" },
  { id: 6, caption: "Content Marketing" },
  { id: 7, caption: "Copywriting" },
  { id: 8, caption: "Branding" },
  { id: 9, caption: "Analytics" },
];

// 15 copies = 135 items. Enough to never hit the walls.
const items = Array(15)
  .fill(baseItems)
  .flat()
  .map((item, i) => ({ ...item, uniqueId: `${item.id}-${i}` }));

export default function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInitializing = useRef(true);
  const isPaused = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // --- 3D transform logic ---
    const applyTransforms = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      const cards = container.querySelectorAll<HTMLElement>(".carousel-card");
      cards.forEach((card) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distanceFromCenter = cardCenter - containerCenter;

        const cardWidth = card.offsetWidth + 32;
        const normalizedDistance = distanceFromCenter / cardWidth;
        const clamped = Math.max(-3.5, Math.min(3.5, normalizedDistance));

        const rotateY = clamped * 38;
        const translateZ = -Math.abs(clamped) * 80;
        const scale = Math.max(0.75, 1 - Math.abs(clamped) * 0.08);
        const opacity = Math.max(0.45, 1 - Math.abs(clamped) * 0.22);

        card.style.transform = `perspective(1200px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = String(opacity);
        card.style.zIndex = String(Math.round(100 - Math.abs(clamped) * 10));
      });
    };

    // --- Infinite loop check ---
    const checkLoop = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft < maxScroll * 0.15) {
        container.scrollLeft += maxScroll * 0.35;
      } else if (container.scrollLeft > maxScroll * 0.85) {
        container.scrollLeft -= maxScroll * 0.35;
      }
    };

    // --- Auto-scroll rAF loop ---
    const SPEED = 1.4;
    const tick = () => {
      if (!isInitializing.current && !isPaused.current) {
        container.scrollLeft += SPEED;
        checkLoop();
        applyTransforms();
      }
      rafId.current = requestAnimationFrame(tick);
    };

    // Jump to centre on mount, then start the loop
    requestAnimationFrame(() => {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
      applyTransforms();
      requestAnimationFrame(() => {
        isInitializing.current = false;
        rafId.current = requestAnimationFrame(tick);
      });
    });

    window.addEventListener("resize", applyTransforms);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", applyTransforms);
    };
  }, []);

  return (
    <section className="bg-white py-10 sm:py-14 overflow-hidden">

      {/* Carousel track — overflow hidden + pointer-events-none kills manual drag */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden pb-12 pt-6 hide-scrollbar select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: "32px",
          scrollBehavior: "auto",
          pointerEvents: "none",
        }}
      >
        {/* Left spacer so the first visible item can sit in the centre */}
        <div className="flex-shrink-0 w-[calc(50vw-150px)] sm:w-[calc(50vw-170px)] lg:w-[calc(50vw-190px)]" />

        {items.map((item) => (
          <div
            key={item.uniqueId}
            className="carousel-card flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] origin-center"
            style={{ transition: "transform 80ms ease-out, opacity 80ms ease-out", pointerEvents: "auto" }}
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            {/* Card image — hover: enlarge + purple glow */}
            <div className="carousel-img-wrap relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-gradient-to-t from-[#e5e5f5] to-[#c7c2e5]">
              <Image
                src={`/carousel/${item.id}.png`}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                quality={80}
                loading="lazy"
              />
            </div>
          </div>
        ))}

        {/* Right spacer — mirrors left */}
        <div className="flex-shrink-0 w-[calc(50vw-150px)] sm:w-[calc(50vw-170px)] lg:w-[calc(50vw-190px)]" />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .carousel-img-wrap {
            transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                        box-shadow 0.35s ease;
          }
          .carousel-card:hover .carousel-img-wrap {
            transform: scale(1.07);
            box-shadow: 0 20px 60px 0 rgba(124, 58, 237, 0.45);
          }
        `
      }} />
    </section>
  );
}
