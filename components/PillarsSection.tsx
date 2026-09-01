"use client";

import { motion, type Variants } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Verified",
    description:
      "Every plot is legally checked and government-backed before it reaches our listings.",
  },
  {
    number: "02",
    title: "Strategic",
    description:
      "Positioned along the expressway, metro corridor and freight network from day one.",
  },
  {
    number: "03",
    title: "Transparent",
    description:
      "Clear paperwork, honest pricing and no hidden costs at any stage of the process.",
  },
  {
    number: "04",
    title: "Future-Ready",
    description:
      "Zoned for the industries and logistics networks Dholera SIR is being built around.",
  },
  {
    number: "05",
    title: "Reliable",
    description:
      "End-to-end support from first enquiry through to final registration.",
  },
  {
    number: "06",
    title: "Growth-Driven",
    description:
      "Land selected for long-term appreciation, not just today's asking price.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function PillarsSection() {
  return (
    <section className="premium-pillars relative overflow-hidden bg-[#0A2E73] text-white">
      <div className="pointer-events-none absolute -right-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#FF7A00]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1680px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="max-w-4xl"
        >
          <p className="premium-pillars-eyebrow flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00] sm:text-sm">
            <span className="h-px w-10 bg-[#FF7A00] sm:w-14" />
            Introduction to Omana Projects
          </p>

          <h2 className="premium-pillars-title mt-6 text-4xl font-semibold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Built For Growth
          </h2>

          <p className="premium-pillars-lede mt-8 max-w-3xl text-base leading-7 text-white/62 sm:text-xl sm:leading-9">
            Omana Projects is committed to making industrial land investment in
            Dholera SIR transparent, verified and future-focused — for
            businesses building India&apos;s next manufacturing belt.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={gridReveal}
          className="premium-pillars-grid mt-12 grid gap-px border border-white/20 bg-white/20 sm:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.number}
              variants={reveal}
              whileHover={{ y: -2 }}
              className="premium-pillar group relative min-h-[16rem] border border-transparent bg-[#0A2E73] p-7 transition-colors duration-500 sm:min-h-[18rem] sm:p-10"
            >
              <span className="premium-pillar-number font-mono text-sm font-semibold tracking-[0.12em] text-[#FF7A00] transition-colors duration-500">
                {pillar.number}
              </span>
              <h3 className="premium-pillar-title mt-8 text-2xl font-semibold uppercase leading-none text-white transition-colors duration-500 sm:text-3xl">
                {pillar.title}
              </h3>
              <p className="premium-pillar-description mt-5 max-w-md text-sm leading-6 text-white/58 transition-colors duration-500 sm:text-base sm:leading-7">
                {pillar.description}
              </p>
              <span className="premium-pillar-rule absolute bottom-0 left-0 h-1 w-0 bg-[#191B1D] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
