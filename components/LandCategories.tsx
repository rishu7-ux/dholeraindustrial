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
    <section
      id="land-categories"
      data-section-number="04"
      className="premium-land-categories relative w-full overflow-hidden bg-white py-16 text-[#081A3A] sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-14">
        <motion.div
          variants={headingContainer}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="premium-category-heading grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="premium-category-eyebrow flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[#ff5e1a] sm:text-xs"
            >
              <span className="h-px w-10 bg-[#ff5e1a]" />
              Land Categories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="premium-category-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,6.2rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em] text-[#081A3A]"
            >
              Find the land best suited for you
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="premium-category-lede max-w-lg text-base leading-7 text-[#0A2E73] sm:text-lg sm:leading-8"
          >
            At Omana Projects, we make land investment easy, transparent, and
            future-focused.
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardsContainer}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="premium-category-grid mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {categories.map((category) => (
            <motion.article
              key={category.id}
              variants={cardAnimation}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="premium-category-card group relative flex min-h-[34rem] flex-col overflow-hidden border border-white/20 bg-[#0A2E73] transition-[border-color,box-shadow,transform] duration-500"
            >
              <div className="premium-category-media relative h-[19rem] shrink-0 overflow-hidden bg-[#d9d6cf] sm:h-[21rem] lg:h-[22rem]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#191b1d]/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
              </div>

              <div className="premium-category-body flex flex-1 flex-col bg-[#0A2E73] p-6 text-white sm:p-7 lg:p-8">
                <h3 className="premium-category-card-title text-[1.6rem] font-semibold uppercase leading-none tracking-[-0.02em] text-white sm:text-[1.8rem]">
                  {category.title}
                </h3>
                <span className="premium-category-rule mt-5 h-px w-12 bg-[#ff5e1a] transition-all duration-500 group-hover:w-24" />
                <p className="premium-category-description mt-5 max-w-md text-sm leading-6 text-white/72 sm:text-[15px] sm:leading-7">
                  {category.description}
                </p>
                <motion.div whileHover={{ x: 5 }} className="mt-auto pt-8">
                  <Link
                    href="#contact"
                    className="premium-category-link group/link inline-flex items-center gap-3 border-b border-[#ff7a00] pb-1 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:text-[#ff7a00]"
                  >
                    Enquiry Now
                    <FaArrowRight
                      size={11}
                      className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
