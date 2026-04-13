"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const HERO_PHOTO = "/sindhu-hero.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const photoVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const blobVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-[#07070e] pt-[68px]">

      {/* ── DESKTOP layout (lg+) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex relative min-h-[calc(100vh-68px)] max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-14 2xl:px-16 items-stretch"
      >
        {/* LEFT: title top · badge middle · CTAs bottom */}
        <div className="flex flex-col justify-between py-16 xl:py-20 w-[34%] flex-shrink-0 relative z-20">

          <motion.div variants={itemSlideLeftVariants}>
            <p className="font-black text-[56px] xl:text-[68px] 2xl:text-[80px] leading-[0.88] tracking-[-2px] xl:tracking-[-3px] text-[#0a0a0a] dark:text-[#eeeeff] whitespace-nowrap">
              BREAKDOWN
            </p>
            <p className="font-black text-[24px] xl:text-[30px] 2xl:text-[34px] leading-none tracking-[4px] xl:tracking-[8px] text-[#0a0a0a] dark:text-[#eeeeff] mt-2 xl:mt-3 whitespace-nowrap">
              BY SINDHU
            </p>
          </motion.div>

          <motion.div
            variants={itemSlideLeftVariants}
            className="flex items-center gap-2.5 bg-[#f4f4f9] border border-transparent dark:bg-[#141428] dark:border-[#242440] rounded-full h-10 w-fit px-4 shadow-sm my-auto lg:mt-24 lg:mb-12"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
            <span className="text-[13px] font-medium text-[#0a0a0a] dark:text-[#eeeeff] whitespace-nowrap">
              Available for New Audits
            </span>
          </motion.div>

          <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-[#4d32ff] text-white text-[14px] font-semibold h-12 px-7 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Get My Audit Now
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border-[1.5px] border-[#4d32ff] text-[#4d32ff] bg-transparent text-[14px] font-semibold h-12 px-6 rounded-full hover:bg-[#4d32ff]/5 transition-colors"
            >
              See What&apos;s Included
            </motion.a>
          </motion.div>

        </div>

        {/* CENTER: blob + photo */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Blob (soft circular gradient) */}
          <motion.div
            variants={blobVariants}
            className="absolute rounded-full pointer-events-none left-[25%] -top-[10%] -translate-x-1/2 w-[700px] h-[700px] xl:w-[1000px] xl:h-[1000px] z-[0] bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-[#e5e2ff] via-[#eeedff]/60 to-transparent dark:from-[#252048] dark:via-[#1a1a3b]/50 dark:to-transparent"
          />
          {/* Photo */}
          <motion.div
            variants={photoVariants}
            className="relative z-10 translate-x-2 lg:translate-x-4 xl:translate-x-6 2xl:translate-x-8 shadow-[0_0px_100px_rgba(124,58,237,0.25)] dark:shadow-[0_0px_100px_rgba(124,58,237,0.4)] rounded-[24px] xl:rounded-[32px]"
            style={{ width: "min(460px, 95%)", aspectRatio: "3/4" }}
          >
            <div className="absolute inset-0 overflow-hidden bg-[#dadae4] dark:bg-[#1a1a2e] rounded-[24px] xl:rounded-[32px]">
              <Image
                src={HERO_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white dark:bg-[#101020] rounded-[20px] lg:rounded-[28px] p-5 lg:p-7 shadow-[0px_24px_48px_rgba(0,0,0,0.12)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.4)] border border-transparent dark:border-[#242440] flex flex-col items-start z-20">
              <span className="font-black text-[32px] lg:text-[40px] text-[#002eff] leading-none mb-1.5 lg:mb-2">
                23+
              </span>
              <span className="text-[13px] lg:text-[15px] text-[#555566] dark:text-[#8888bb] font-medium leading-tight mb-2.5 lg:mb-3">
                Brands Scaled
              </span>
              <div className="w-9 lg:w-12 h-1 bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* RIGHT: description centered · GROWTH AUDITOR bottom */}
        <div className="flex flex-col py-16 xl:py-20 w-[34%] flex-shrink-0 items-start text-left relative z-20 pl-16 lg:pl-20 xl:pl-28 2xl:pl-36">
          <div className="flex-1" />
          <motion.p
            variants={itemSlideRightVariants}
            className="text-[#888899] dark:text-[#8888bb] text-[14px] xl:text-[15px] leading-[26px] max-w-[210px] xl:max-w-[220px]"
          >
            Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
          </motion.p>
          <div className="flex-1" />
          <motion.p
            variants={itemSlideRightVariants}
            className="font-black text-[64px] xl:text-[76px] 2xl:text-[88px] leading-[0.88] tracking-[-2px] xl:tracking-[-3px] bg-gradient-to-b from-[#1541ff] to-[#7c1cf5] bg-clip-text text-transparent whitespace-nowrap"
          >
            GROWTH<br />AUDITOR
          </motion.p>
        </div>

      </motion.div>

      {/* ── TABLET layout (md–lg) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex lg:hidden flex-col min-h-[calc(100vh-68px)] px-8 pt-10 pb-12"
      >
        {/* Top row: title + photo side by side */}
        <div className="flex items-start gap-6 flex-1">

          {/* Left: title + badge + CTAs */}
          <div className="flex flex-col justify-between flex-1 h-full py-2">
            <motion.div variants={itemSlideLeftVariants}>
              <p className="font-black text-[52px] sm:text-[60px] leading-[0.88] tracking-[-2px] text-[#0a0a0a] dark:text-[#eeeeff]">
                BREAKDOWN
              </p>
              <p className="font-black text-[22px] sm:text-[26px] leading-none tracking-[4px] text-[#0a0a0a] dark:text-[#eeeeff] mt-2">
                BY SINDHU
              </p>
            </motion.div>

            <motion.div
              variants={itemSlideLeftVariants}
              className="flex items-center gap-2 bg-white dark:bg-[#141428] border border-[#e0e0ec] dark:border-[#242440] rounded-full h-9 w-fit px-4 shadow-sm my-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="text-[12px] font-medium text-[#0a0a0a] dark:text-[#eeeeff] whitespace-nowrap">
                Available for New Audits
              </span>
            </motion.div>

            <motion.p
              variants={itemSlideRightVariants}
              className="text-[#888899] dark:text-[#8888bb] text-[13px] leading-[22px] max-w-[220px] mb-6"
            >
              Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
            </motion.p>

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
                className="flex items-center justify-center border-[1.5px] border-[#0a0a0a] dark:border-[#eeeeff] text-[#0a0a0a] dark:text-[#eeeeff] text-[13px] font-semibold h-12 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                See What&apos;s Included
              </motion.a>
            </motion.div>
          </div>

          {/* Right: photo + GROWTH AUDITOR */}
          <div className="flex flex-col items-end flex-shrink-0 w-[42%] h-full py-2 justify-between">
            <motion.div variants={photoVariants} className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(0,46,255,0.15)]">
              <Image
                src={HERO_PHOTO}
                alt="Sindhu Biswal"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
            <motion.p
              variants={itemSlideRightVariants}
              className="font-black text-[40px] sm:text-[48px] leading-[0.88] tracking-[-2px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent text-right mt-4"
            >
              GROWTH<br />AUDITOR
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── MOBILE layout (< md) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:hidden relative px-5 pt-6 pb-16 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Mobile Blob Gradient Background */}
        <motion.div
          variants={blobVariants}
          className="absolute rounded-full pointer-events-none top-[15%] left-1/2 -translate-x-1/2 w-[140vw] aspect-square z-[0] bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-[#e5e2ff] via-[#e5e2ff]/40 to-transparent dark:from-[#252048] dark:via-[#1a1a3b]/40 dark:to-transparent blur-[60px]"
        />

        {/* Badge */}
        <motion.div
          variants={itemUpVariants}
          className="relative z-10 flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-full h-8 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wide text-[#0a0a0a] dark:text-[#eeeeff]">
            Available for New Audits
          </span>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemUpVariants} className="relative z-10 mb-8">
          <p className="font-black text-[52px] sm:text-[64px] leading-[0.85] tracking-[-2px] text-[#0a0a0a] dark:text-[#eeeeff] mb-3">
            BREAKDOWN
          </p>
          <p className="font-extrabold text-[11px] tracking-[4px] text-[#555566] dark:text-[#8888bb] uppercase">
            BY SINDHU
          </p>
        </motion.div>

        {/* Photo Container */}
        <motion.div
          variants={photoVariants}
          className="relative z-10 w-full max-w-[310px] aspect-[4/5] mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#002eff]/30 to-[#7c3aed]/30 rounded-[32px] blur-2xl transform translate-y-4" />
          <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(124,58,237,0.25)] dark:shadow-[0_24px_80px_rgba(124,58,237,0.4)] bg-[#dadae4] dark:bg-[#1a1a2e] ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src={HERO_PHOTO}
              alt="Sindhu Biswal"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#101020] rounded-[20px] p-4 shadow-[0px_16px_40px_rgba(0,0,0,0.12)] border border-transparent dark:border-[#242440] flex flex-col items-start z-20">
            <span className="font-black text-[28px] text-[#002eff] leading-none mb-1">
              23+
            </span>
            <span className="text-[12px] text-[#555566] dark:text-[#8888bb] font-medium leading-tight mb-2">
              Brands Scaled
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
          </div>
        </motion.div>

        {/* GROWTH AUDITOR */}
        <motion.p
          variants={itemUpVariants}
          className="relative z-10 font-black text-[52px] sm:text-[60px] leading-[0.9] tracking-[-2px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent mb-5"
        >
          GROWTH
          <br />
          AUDITOR
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemUpVariants}
          className="relative z-10 text-[#555566] dark:text-[#8888bb] text-[15px] leading-[24px] max-w-[300px] mb-10 font-medium"
        >
          Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemUpVariants} className="relative z-10 flex flex-col gap-3.5 w-full max-w-[300px]">
          <motion.a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "book";
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[15px] font-bold h-[56px] rounded-full shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.5)] transition-all"
          >
            Get My Audit Now →
          </motion.a>
          <motion.a
            href="#services"
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[1.5px] border-[#e0e0ec] dark:border-[#242440] text-[#0a0a0a] dark:text-[#eeeeff] text-[15px] font-bold h-[56px] rounded-full hover:bg-white dark:hover:bg-[#141428] transition-colors"
          >
            See What&apos;s Included
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
}
