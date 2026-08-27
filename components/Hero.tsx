"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Dholera industrial development"
      className="relative min-h-[560px] w-full overflow-hidden sm:min-h-[640px] lg:min-h-[720px]"
    >
      <motion.div
        className="absolute -inset-4"
        initial={reduceMotion ? false : { scale: 1.04, x: 0 }}
        animate={reduceMotion ? undefined : { scale: [1.04, 1.1, 1.04], x: [0, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/gallery/b1.webp"
          alt="Modern industrial development in Dholera"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-b from-[#12568d]/10 via-transparent to-[#071c2d]/35" />
      <div className="absolute inset-0 bg-linear-to-r from-[#12568d]/15 via-transparent to-[#fdb713]/5" />

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
            className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#fdb713]/25 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.1, 0.22, 0.1], x: [-15, 20, -15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#12568d]/35 blur-3xl"
          />
        </>
      )}

      <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-[#12568d] via-[#fdb713] to-[#12568d]" />
    </section>
  );
}
