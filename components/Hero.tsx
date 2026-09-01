"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaBuilding, FaCheckCircle, FaUsers } from "react-icons/fa";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Dholera industrial development"
      className="premium-hero relative min-h-[calc(100svh-6.5rem)] w-full overflow-hidden min-[400px]:min-h-[520px] sm:min-h-[680px] lg:min-h-[780px]"
    >
      <motion.div
        className="absolute -inset-4"
        initial={reduceMotion ? false : { scale: 1.04, x: 0 }}
        animate={reduceMotion ? undefined : { scale: [1.04, 1.1, 1.04], x: [0, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/gallery/dholeralindustrial.png"
          alt="Modern industrial and logistics district in Dholera"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center brightness-[1.08] saturate-[1.05]"
        />
      </motion.div>

      <div className="premium-hero-glass-overlay absolute inset-0 bg-[rgba(10,46,115,0.20)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,14,20,.02)_52%,rgba(8,14,20,.32)_100%)]" />

      <div className="premium-hero-content absolute inset-0 z-20 mx-auto flex max-w-[1440px] items-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-14">
        <div className="w-full max-w-[820px] lg:ml-[14%]">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="premium-hero-eyebrow mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00] sm:text-xs"
          >
            <span className="h-px w-10 bg-[#FF7A00]" aria-hidden="true" />
            Dholera SIR — Delhi–Mumbai Industrial Corridor
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="premium-hero-description mt-7 max-w-[760px] text-base font-medium leading-[1.7] text-white/85 sm:text-lg"
          >
            Verified, government-backed industrial and logistics plots inside India&apos;s first greenfield smart city — built for manufacturers, investors and long-term growth.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/properties"
              className="premium-hero-button group inline-flex items-center gap-3 bg-[#FF7A00] px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#191B1D] shadow-[0_12px_28px_rgba(255,122,0,0.24)] transition-all duration-300 hover:bg-white"
            >
              <span>View Properties</span>
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="premium-hero-button premium-hero-button-outline group inline-flex items-center gap-3 border border-white/45 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#FF7A00] hover:bg-[#FF7A00] hover:text-[#191B1D]"
            >
              <span>Book a Site Visit</span>
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="premium-hero-trust mt-10 grid max-w-[900px] grid-cols-1 gap-4 border-t border-white/15 pt-6 text-white/55 sm:grid-cols-3 sm:gap-6"
          >
            <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] sm:text-[11px]">
              <FaCheckCircle className="shrink-0 text-[#FF7A00]" size={16} aria-hidden="true" />
              Government-Verified Titles
            </span>
            <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] sm:text-[11px]">
              <FaBuilding className="shrink-0 text-[#FF7A00]" size={16} aria-hidden="true" />
              9+ Years in Dholera SIR
            </span>
            <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] sm:text-[11px]">
              <FaUsers className="shrink-0 text-[#FF7A00]" size={16} aria-hidden="true" />
              640+ Investors Served
            </span>
          </motion.div>
        </div>
      </div>

      <div className="premium-hero-scroll absolute bottom-7 right-6 z-20 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:right-10">
        <span>Scroll</span>
        <span className="relative h-9 w-px overflow-hidden bg-white/30" aria-hidden="true">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-[#FF7A00] motion-safe:animate-pulse" />
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#081018]/15 to-transparent" />

      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-30%", "130%"] }}
            transition={{ duration: 9, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 w-32 -skew-x-12 bg-linear-to-r from-transparent via-white/15 to-transparent blur-2xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.12, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#FF7A00]/25 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.06, 0.13, 0.06], x: [-15, 20, -15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
        </>
      )}

      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FF7A00]" />
    </section>
  );
}
