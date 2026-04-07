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
        className="hidden lg:flex relative min-h-[calc(100vh-68px)] max-w-[1400px] mx-auto px-10 xl:px-16 2xl:px-20 items-stretch"
      >
        {/* LEFT: title top · badge middle · CTAs bottom */}
        <div className="flex flex-col justify-between py-16 xl:py-20 w-[36%] flex-shrink-0 relative z-10">

          <motion.div variants={itemSlideLeftVariants}>
            <p className="font-black text-[56px] xl:text-[72px] 2xl:text-[88px] leading-[0.88] tracking-[-2px] xl:tracking-[-3px] text-[#0a0a0a] dark:text-[#eeeeff]">
              BREAKDOWN
            </p>
            <p className="font-black text-[24px] xl:text-[30px] 2xl:text-[36px] leading-none tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] mt-2 xl:mt-3">
              BY SINDHU
            </p>
          </motion.div>

          <motion.div
            variants={itemSlideLeftVariants}
            className="flex items-center gap-2.5 bg-white dark:bg-[#141428] border border-[#e0e0ec] dark:border-[#242440] rounded-full h-10 w-fit px-4 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
            <span className="text-[13px] font-medium text-[#0a0a0a] dark:text-[#eeeeff] whitespace-nowrap">
              Available for New Audits
            </span>
          </motion.div>

          <motion.div variants={itemSlideLeftVariants} className="flex items-center gap-3 flex-wrap">
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#002eff] to-[#7c3aed] text-white text-[14px] font-semibold h-12 px-7 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Get My Audit Now
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border-[1.5px] border-[#0a0a0a] dark:border-[#eeeeff] text-[#0a0a0a] dark:text-[#eeeeff] text-[14px] font-semibold h-12 px-6 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              See What&apos;s Included
            </motion.a>
          </motion.div>

        </div>

        {/* CENTER: blob + photo */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Blob */}
          <motion.div
            variants={blobVariants}
            className="absolute rounded-full bg-[#ebebf5] dark:bg-[#12122a] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] xl:w-[620px] xl:h-[620px]"
          />
          {/* Photo */}
          <motion.div
            variants={photoVariants}
            className="relative z-10 rounded-[20px] xl:rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(0,46,255,0.13)]"
            style={{ width: "min(300px, 80%)", aspectRatio: "3/4" }}
          >
            <Image
              src={HERO_PHOTO}
              alt="Sindhu Biswal"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT: description centered · GROWTH AUDITOR bottom */}
        <div className="flex flex-col py-16 xl:py-20 w-[36%] flex-shrink-0 items-end text-right relative z-10">
          <div className="flex-1" />
          <motion.p
            variants={itemSlideRightVariants}
            className="text-[#888899] dark:text-[#8888bb] text-[14px] xl:text-[15px] leading-[26px] max-w-[200px] xl:max-w-[220px]"
          >
            Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
          </motion.p>
          <div className="flex-1" />
          <motion.p
            variants={itemSlideRightVariants}
            className="font-black text-[64px] xl:text-[80px] 2xl:text-[96px] leading-[0.88] tracking-[-2px] xl:tracking-[-3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent"
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
              <p className="font-black text-[22px] sm:text-[26px] leading-none tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] mt-2">
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
        className="md:hidden px-5 pt-8 pb-12"
      >
        {/* Badge */}
        <motion.div
          variants={itemSlideLeftVariants}
          className="flex items-center gap-2 bg-white dark:bg-[#141428] border border-[#e0e0ec] dark:border-[#242440] rounded-full h-8 w-fit px-4 shadow-sm mb-7"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
          <span className="text-[11px] font-medium text-[#0a0a0a] dark:text-[#eeeeff]">
            Available for New Audits
          </span>
        </motion.div>

        {/* Editorial split: name left + photo right */}
        <div className="flex items-start gap-5 mb-5">
          <motion.div variants={itemSlideLeftVariants} className="flex-1">
            <p className="font-extrabold text-[9px] tracking-[3.5px] text-[#0a0a0a]/40 dark:text-[#eeeeff]/30 uppercase mb-3">
              BREAKDOWN BY
            </p>
            <p className="font-black text-[64px] leading-[0.88] tracking-[-3px] text-[#0a0a0a] dark:text-[#eeeeff]">
              SIN<br />DHU
            </p>
          </motion.div>

          <motion.div variants={itemSlideRightVariants} className="flex-shrink-0 w-[116px] mt-7">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,46,255,0.18)]">
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

        {/* GROWTH AUDITOR */}
        <motion.p
          variants={itemSlideLeftVariants}
          className="font-black text-[46px] leading-[1.0] tracking-[-2px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] bg-clip-text text-transparent mb-4"
        >
          GROWTH<br />AUDITOR
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemSlideRightVariants}
          className="text-[#888899] dark:text-[#8888bb] text-[13px] leading-[22px] max-w-[260px] mb-7"
        >
          Specialized in Instagram, YouTube Growth Strategy, and Content Marketing.
        </motion.p>

        {/* CTAs */}
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
      </motion.div>

    </section>
  );
}
