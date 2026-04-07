"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const HERO_PHOTO = "/sindhu-hero.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemSlideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const itemSlideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const heyVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 0.35,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const thereVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 0.35,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-[#07070e] pt-[68px] overflow-hidden">
      {/* Subtle radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,46,255,0.07)_0%,_transparent_70%)] pointer-events-none"
      />

      {/* ── DESKTOP layout (lg+) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block relative max-w-7xl mx-auto px-16 pt-8 pb-10 xl:pb-14"
      >
        <div className="grid grid-cols-[1fr_360px_1fr] xl:grid-cols-[1fr_420px_1fr] gap-8 xl:gap-10 min-h-[580px] xl:min-h-[650px]">

          {/* LEFT: heading top · badge + CTAs bottom */}
          <div className="flex flex-col justify-between py-4">
            <motion.div variants={itemSlideLeftVariants}>
              <p className="font-black text-[80px] xl:text-[96px] leading-[0.88] tracking-[-4px] text-[#0a0a0a] dark:text-[#eeeeff]">
                BREAK<br />DOWN
              </p>
              <p className="font-black text-[32px] xl:text-[38px] leading-none tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] mt-3">
                BY SINDHU
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-2 bg-[#f5f5fa] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-full h-9 w-fit px-4 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
                <span className="text-[12px] font-medium text-[#0a0a0a] dark:text-[#eeeeff] whitespace-nowrap">
                  Available for New Audits
                </span>
              </motion.div>
              <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-3">
                <motion.a
                  href="#book"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-11 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Get My Audit Now
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center border-[1.5px] border-[#002eff] text-[#002eff] text-[13px] font-semibold h-11 px-5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                >
                  See What&apos;s Included
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* CENTER: large photo */}
          <motion.div variants={photoVariants} className="relative">
            {/* Rotating glow */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,46,255,0.13)_0%,_rgba(99,66,237,0.07)_38%,_transparent_65%)] pointer-events-none z-0"
            />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-t from-[#e0e0ed] dark:from-[#1a1a2e] to-[#bdbdd1] dark:to-[#0f0f20] shadow-[0_24px_60px_rgba(0,46,255,0.12)]">
              <Image
                src={HERO_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: description top · GROWTH AUDITOR bottom */}
          <div className="flex flex-col justify-between items-end py-4 text-right">
            <motion.p variants={itemSlideRightVariants} className="text-[#555566] dark:text-[#8888bb] text-[13px] leading-[22px] max-w-[190px]">
              Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
            </motion.p>
            <motion.p variants={itemSlideRightVariants} className="font-black text-[52px] xl:text-[64px] leading-[1.0] tracking-[-2px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">
              GROWTH<br />AUDITOR
            </motion.p>
          </div>

        </div>
      </motion.div>

      {/* ── MOBILE / TABLET layout (< lg) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden px-5 sm:px-8 pt-8 pb-12 sm:pb-16"
      >
        {/* Badge — left aligned */}
        <motion.div
          variants={itemSlideLeftVariants}
          className="flex items-center gap-2 bg-[#f5f5fa] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-full h-8 w-fit px-4 shadow-sm mb-7"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
          <span className="text-[11px] font-medium text-[#0a0a0a] dark:text-[#eeeeff]">
            Available for New Audits
          </span>
        </motion.div>

        {/* Editorial split: big name left + portrait photo right */}
        <div className="flex items-start gap-5 mb-5">

          {/* Left: stacked name */}
          <motion.div variants={itemSlideLeftVariants} className="flex-1">
            <p className="font-extrabold text-[9px] tracking-[3.5px] text-[#0a0a0a]/40 dark:text-[#eeeeff]/30 uppercase mb-3">
              BREAKDOWN BY
            </p>
            <p className="font-black text-[64px] sm:text-[76px] leading-[0.88] tracking-[-3px] text-[#0a0a0a] dark:text-[#eeeeff]">
              SIN<br />DHU
            </p>
          </motion.div>

          {/* Right: portrait photo card */}
          <motion.div variants={itemSlideRightVariants} className="flex-shrink-0 w-[116px] sm:w-[134px] mt-7">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-t from-[#d8d8ec] dark:from-[#1a1a2e] to-[#c2beda] dark:to-[#0f0f20] shadow-[0_12px_40px_rgba(0,46,255,0.18)]">
              <Image
                src={HERO_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
            </div>
            <div className="mt-2.5 mx-auto w-8 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          </motion.div>
        </div>

        {/* GROWTH AUDITOR — gradient, left-aligned */}
        <motion.p
          variants={itemSlideLeftVariants}
          className="font-black text-[46px] sm:text-[56px] leading-[1.0] tracking-[-2px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent mb-4"
        >
          GROWTH<br />AUDITOR
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemSlideRightVariants}
          className="text-[#555566] dark:text-[#8888bb] text-[13px] leading-[22px] max-w-[260px] mb-7"
        >
          Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
        </motion.p>

        {/* CTAs — full-width stacked */}
        <motion.div variants={itemUpVariants} className="flex flex-col gap-3">
          <motion.a
            href="#book"
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[13px] font-semibold h-12 rounded-full shadow-md"
          >
            Get My Audit Now
          </motion.a>
          <motion.a
            href="#services"
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center border-[1.5px] border-[#002eff] text-[#002eff] text-[13px] font-semibold h-12 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
          >
            See What&apos;s Included
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
}
