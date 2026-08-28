"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

type Category = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Industrial Land",
    image: "/gallery/industrial Land.webp",
    description:
      "Build your manufacturing unit in the heart of Dholera SIR. With world-class infrastructure, seamless connectivity, and government support.",
  },
  {
    id: 2,
    title: "Logistic Hub",
    image: "/gallery/Logistic hub.webp",
    description:
      "Invest in plots strategically located along freight corridors and near the upcoming international airport. Perfect for warehousing, transport, and logistics.",
  },
  {
    id: 3,
    title: "Green Factory Zone",
    image: "/gallery/green Factory Zone.webp",
    description:
      "Set up eco-friendly manufacturing in India’s first platinum-rated smart city. Benefit from solar power, green zoning, and future-ready infrastructure.",
  },
];

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function LandCategories() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf4] py-12 sm:py-20 lg:py-24">
      {/* Very light transparent yellow glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-25, 25, -25],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-44 -top-44 h-120 w-120 rounded-full bg-[#fdb713]/10 blur-[130px]"
      />

      {/* Soft white glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-0 h-130 w-130 rounded-full bg-white/75 blur-[150px]"
      />

      {/* Subtle blue balance */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-20, 20, -20],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[#12568d]/4 blur-[120px]"
      />

      {/* Premium transparent overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/35 via-transparent to-[#fdb713]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#12568d] sm:text-sm sm:tracking-[0.25em]"
          >
            Land Categories
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-2xl font-black leading-tight text-[#12568d] sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Find the land best suited for you
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-2xl text-xs font-medium leading-5 text-[#173b57] sm:mt-5 sm:text-base sm:leading-7"
          >
            At Omana Projects, we make land investment easy, transparent, and
            future-focused.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex items-center gap-2 sm:mt-6"
          >
            <span className="h-1 w-16 rounded-full bg-[#fdb713]" />
            <span className="h-1 w-8 rounded-full bg-[#12568d]" />
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-8 grid gap-4 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.article
              key={category.id}
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group relative grid min-h-38 grid-cols-[40%_60%] overflow-hidden rounded-xl border-2 border-white bg-white shadow-[0_10px_30px_rgba(18,86,141,0.12)] transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_35px_85px_rgba(18,86,141,0.24)] md:block md:min-h-0 md:rounded-[26px] md:border-[3px] md:shadow-[0_20px_55px_rgba(18,86,141,0.14)]"
            >
              {/* Top accent line */}
              <div className="absolute left-0 top-0 z-20 h-1.5 w-full bg-[#fdb713]" />

              {/* Decorative corners */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-20 w-20 rounded-bl-[30px] bg-[#fdb713]/15" />
              <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-20 w-20 rounded-tr-[30px] bg-[#12568d]/5" />

              {/* Image */}
              <div className="relative min-h-38 overflow-hidden md:h-65 md:min-h-0 lg:h-72.5">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="relative flex min-h-0 flex-col border-l-[3px] border-t-0 border-[#fdb713]/70 bg-white p-4 transition-all duration-500 group-hover:bg-[#fffdf4] md:min-h-63.75 md:border-l-0 md:border-t-[3px] md:p-7 lg:p-8">
                <h3 className="text-base font-black leading-tight text-[#12568d] transition-all duration-500 group-hover:translate-x-1 group-hover:text-black md:text-2xl">
                  {category.title}
                </h3>

                <span className="mt-2 block h-0.5 w-8 rounded-full bg-[#fdb713] transition-all duration-500 group-hover:w-28 group-hover:bg-[#12568d] md:mt-4 md:h-1 md:w-14" />

                <p className="mt-2 line-clamp-3 text-[10px] leading-4 text-slate-600 transition-colors duration-500 group-hover:text-slate-900 md:mt-5 md:line-clamp-none md:text-[15px] md:leading-8">
                  {category.description}
                </p>

                <motion.div
                  whileHover={{
                    x: 6,
                  }}
                  className="mt-auto hidden pt-7 md:block"
                >
                  <Link
                    href="#contact"
                    className="group/link inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-[#12568d] transition-colors duration-300 hover:text-[#d99800]"
                  >
                    Enquiry Now

                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover/link:translate-x-2"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Bottom animated line */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#12568d] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
