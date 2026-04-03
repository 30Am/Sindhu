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

    const checkLoop = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft < maxScroll * 0.15) {
        container.scrollLeft += maxScroll * 0.35;
      } else if (container.scrollLeft > maxScroll * 0.85) {
        container.scrollLeft -= maxScroll * 0.35;
      }
    };

    const SPEED = 1.4;
    const tick = () => {
      if (!isInitializing.current && !isPaused.current) {
        container.scrollLeft += SPEED;
        checkLoop();
        applyTransforms();
      }
      rafId.current = requestAnimationFrame(tick);
    };

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
    /* overflow-x-hidden only — lets the hover scale breathe vertically */
    <section className="bg-white pt-10 sm:pt-14 pb-6 overflow-x-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden hide-scrollbar select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: "32px",
          scrollBehavior: "auto",
          pointerEvents: "none",
          /* generous vertical padding so scaled cards never clip */
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="flex-shrink-0 w-[calc(50vw-150px)] sm:w-[calc(50vw-170px)] lg:w-[calc(50vw-190px)]" />

        {items.map((item) => (
          <div
            key={item.uniqueId}
            className="carousel-card flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] origin-center"
            style={{ transition: "transform 80ms ease-out, opacity 80ms ease-out", pointerEvents: "auto" }}
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            {/*
              Two-layer structure:
              - outer .carousel-hover-wrap  → scales up on hover (no overflow-hidden, so nothing clips)
              - inner .carousel-img-clip    → overflow-hidden + border-radius for clean edges
            */}
            <div className="carousel-hover-wrap w-full aspect-[4/5]">
              <div className="carousel-img-clip relative w-full h-full rounded-[24px] overflow-hidden shadow-xl bg-gradient-to-t from-[#e5e5f5] to-[#c7c2e5]">
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
          </div>
        ))}

        <div className="flex-shrink-0 w-[calc(50vw-150px)] sm:w-[calc(50vw-170px)] lg:w-[calc(50vw-190px)]" />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }

          /* Scale the outer wrapper — no overflow-hidden here so edges never clip */
          .carousel-hover-wrap {
            transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .carousel-card:hover .carousel-hover-wrap {
            transform: scale(1.06);
          }

          /* Shadow glow on the inner clip layer */
          .carousel-img-clip {
            transition: box-shadow 0.38s ease;
          }
          .carousel-card:hover .carousel-img-clip {
            box-shadow: 0 24px 64px 0 rgba(124, 58, 237, 0.35), 0 4px 16px rgba(0,0,0,0.1);
          }
        `
      }} />
    </section>
  );
}
