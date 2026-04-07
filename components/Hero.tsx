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
        className="hidden lg:block relative max-w-7xl mx-auto px-16 mb-16 xl:mb-20"
      >
        {/* Hey / there */}
        <div className="flex justify-between items-start pt-8">
          <motion.p variants={heyVariants} className="font-light italic text-[80px] xl:text-[96px] leading-none text-[#0a0a0a] dark:text-[#eeeeff]">
            Hey,
          </motion.p>
          <motion.p variants={thereVariants} className="font-light italic text-[80px] xl:text-[96px] leading-none text-[#0a0a0a] dark:text-[#eeeeff]">
            there
          </motion.p>
        </div>

        {/* 3-column: left text | photo | right text */}
        <div className="flex items-end gap-8 -mt-6">
          {/* Left */}
          <div className="flex-1 pb-10 flex flex-col gap-5">
            <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-2 bg-[#f5f5fa] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-full h-9 w-fit px-4 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
              <span className="text-[12px] font-medium text-[#0a0a0a] dark:text-[#eeeeff] whitespace-nowrap">
                Available for New Audits
              </span>
            </motion.div>
            <motion.div variants={itemSlideLeftVariants}>
              <p className="font-extrabold text-[12px] tracking-[4px] text-[#0a0a0a] dark:text-[#eeeeff] mb-1 uppercase">
                BREAKDOWN BY
              </p>
              <p className="font-black text-[72px] xl:text-[84px] leading-none tracking-[-2px] text-[#0a0a0a] dark:text-[#eeeeff]">
                SINDHU
              </p>
            </motion.div>
            <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-3 flex-wrap">
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

          {/* Center photo */}
          <motion.div variants={photoVariants} className="w-[320px] xl:w-[370px] flex-shrink-0 relative">
            {/* Circular gradient glow behind photo */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,46,255,0.15)_0%,_rgba(99,66,237,0.09)_38%,_transparent_65%)] pointer-events-none z-0"
            />
            <div className="relative z-10 w-full h-[480px] xl:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-t from-[#e0e0ed] dark:from-[#1a1a2e] to-[#bdbdd1] dark:to-[#0f0f20] shadow-xl">
              <Image
                src={HERO_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex-1 pb-10 flex flex-col items-end gap-5 text-right">
            <motion.p variants={itemSlideRightVariants} className="text-[#555566] dark:text-[#8888bb] text-[13px] leading-[22px] max-w-[200px]">
              Specialized in Instagram, YouTube Growth Strategy, and Content
              Marketing.
            </motion.p>
            <motion.p variants={itemSlideRightVariants} className="font-black text-[48px] xl:text-[58px] leading-[1.1] tracking-[-1px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">
              GROWTH
              <br />
              AUDITOR
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── MOBILE / TABLET layout (< lg) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden"
      >
        {/* Photo — fixed height, full-bleed */}
        <motion.div variants={photoVariants} className="relative w-full h-[320px] sm:h-[420px] overflow-hidden bg-gradient-to-t from-[#e0e0ed] dark:from-[#1a1a2e] to-[#bdbdd1] dark:to-[#0f0f20]">
          <Image
            src={HERO_PHOTO}
            alt="Sindhu Biswal"
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
        </motion.div>

        {/* Text content below photo */}
        <div className="px-5 sm:px-8 pt-6 pb-12 sm:pb-16 flex flex-col items-center text-center gap-4">
          <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-2 bg-[#f5f5fa] dark:bg-[#141428] border border-[#e8e8f0] dark:border-[#242440] rounded-full h-8 px-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
            <span className="text-[11px] font-medium text-[#0a0a0a] dark:text-[#eeeeff]">
              Available for New Audits
            </span>
          </motion.div>

          <motion.div variants={itemSlideRightVariants}>
            <p className="font-extrabold text-[10px] tracking-[4px] text-[#0a0a0a] dark:text-[#eeeeff] uppercase mb-0.5">
              BREAKDOWN BY
            </p>
            <p className="font-black text-[48px] sm:text-[60px] leading-none tracking-[-2px] text-[#0a0a0a] dark:text-[#eeeeff]">
              SINDHU
            </p>
          </motion.div>

          <motion.p variants={itemSlideLeftVariants} className="font-black text-[30px] sm:text-[38px] leading-tight tracking-[-1px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent">
            GROWTH AUDITOR
          </motion.p>

          <motion.p variants={itemSlideRightVariants} className="text-[#555566] dark:text-[#8888bb] text-[13px] leading-[21px] max-w-xs">
            Specialized in Instagram, YouTube Growth Strategy, and Content
            Marketing.
          </motion.p>

          <motion.div variants={itemUpVariants} className="flex items-center gap-3 flex-wrap justify-center pt-1">
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
      </motion.div>

    </section>
  );
}
