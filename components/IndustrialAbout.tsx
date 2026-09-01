"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa";

const leftFeatures = [
  "Professional Variations",
  "Guaranteed",
  "Consulting",
];

const rightFeatures = [
  "Happy Clients",
  "Industrial Design",
  "Advertise",
];

const contentContainer: Variants = {
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
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featureContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featureAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function IndustrialAbout() {
  return (
    <section
      id="about-industrial"
      data-section-number="02"
      className="relative w-full overflow-hidden bg-[#ffffff] py-10 sm:py-20 lg:py-24"
    >
      {/* Premium light background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 -top-44 h-125 w-125 rounded-full bg-white/90 blur-[140px]" />

        <div className="absolute -bottom-44 -right-44 h-130 w-130 rounded-full bg-[#081A3A]/5 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-[180px]" />

        <div className="absolute inset-0 bg-linear-to-br from-white/80 via-[#ffffff] to-[#FFFFFF]" />
      </div>

      <div className="premium-story-grid relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="premium-about-visual group relative"
        >
          {/* Accent decorative shape */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="premium-about-accent absolute -left-2 -top-2 h-14 w-14 rounded-lg bg-[#FF7A00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32 sm:rounded-xl"
          />

          {/* Charcoal decorative shape */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="premium-about-accent absolute -bottom-2 -right-2 h-14 w-14 rounded-lg bg-[#081A3A] sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32 sm:rounded-xl"
          />

          <div className="premium-about-image-shell relative overflow-hidden rounded-2xl bg-white p-2 shadow-[0_25px_70px_rgba(8,26,58,0.18)]">
            <div className="premium-about-image-media relative overflow-hidden rounded-lg sm:rounded-xl">
              <Image
                src="/gallery/industrial  heart.webp"
                alt="Dholera industrial development"
                width={800}
                height={520}
                priority
                className="premium-about-image h-44 w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-100 lg:h-117.5"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#081A3A]/35 via-transparent to-transparent" />

              {/* Small image label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="premium-about-image-label absolute bottom-2 left-2 right-2 border-l-2 border-[#FF7A00] bg-[#081A3A]/90 px-3 py-2 text-white shadow-lg backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[330px] sm:border-l-4 sm:px-5 sm:py-4"
              >
                <p className="premium-about-image-kicker text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  Dholera SIR
                </p>

                <p className="premium-about-image-caption mt-1 text-sm font-semibold sm:text-base">
                  India&apos;s future industrial and investment destination
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="premium-about-content"
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF7A00] sm:text-sm sm:tracking-[0.25em]"
          >
            About Dholera Industrial
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-2 font-serif text-2xl font-black leading-tight text-[#081A3A] sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Invest Smart. Build Big. In Dholera&apos;s Industrial Heart!
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-3 flex items-center gap-2 sm:mt-5"
          >
            <span className="h-0.75 w-16 bg-[#FF7A00]" />
            <span className="h-0.75 w-8 bg-[#081A3A]" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="premium-about-summary mt-4 text-sm leading-6 text-[#0A2E73] sm:mt-7 sm:text-base sm:leading-8"
          >
            At Omana Projects, we help businesses secure high-potential
            industrial plots in Dholera SIR — India&apos;s most advanced
            greenfield smart city, developed under the Delhi–Mumbai Industrial
            Corridor.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 hidden text-[15px] leading-8 text-[#0A2E73] sm:block sm:text-base"
          >
            Backed by the Government of India, Dholera is becoming a major
            destination for manufacturing, logistics, infrastructure and
            long-term industrial growth.
          </motion.p>

          {/* Feature lists */}
          <motion.div
            variants={featureContainer}
            className="premium-about-features mt-5 grid grid-cols-2 gap-x-3 gap-y-3 sm:mt-8 sm:gap-x-8 sm:gap-y-5"
          >
            <div className="space-y-2 sm:space-y-5">
              {leftFeatures.map((item) => (
                <motion.div
                  key={item}
                  variants={featureAnimation}
                  whileHover={{
                    x: 7,
                  }}
                  className="group/feature flex items-center gap-2 sm:gap-3"
                >
                  <span className="premium-about-feature-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7A00]/12 text-[#FF7A00] transition-all duration-300 group-hover/feature:bg-[#081A3A] sm:h-9 sm:w-9">
                    <FaRegCheckCircle size={14} />
                  </span>

                  <span className="text-[11px] font-semibold leading-4 text-[#0A2E73] sm:text-base sm:leading-normal">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-2 sm:space-y-5">
              {rightFeatures.map((item) => (
                <motion.div
                  key={item}
                  variants={featureAnimation}
                  whileHover={{
                    x: 7,
                  }}
                  className="group/feature flex items-center gap-2 sm:gap-3"
                >
                  <span className="premium-about-feature-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7A00]/12 text-[#FF7A00] transition-all duration-300 group-hover/feature:bg-[#081A3A] sm:h-9 sm:w-9">
                    <FaRegCheckCircle size={14} />
                  </span>

                  <span className="text-[11px] font-semibold leading-4 text-[#0A2E73] sm:text-base sm:leading-normal">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeUp} className="premium-about-action mt-6 sm:mt-9">
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex"
            >
              <Link
                href="#properties"
                className="group/button inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-md bg-[#081A3A] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg transition-colors duration-300 hover:bg-white hover:text-[#081A3A] active:bg-white active:text-[#081A3A] sm:min-h-13 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
              >
                Explore Projects

                <FaArrowRight
                  size={13}
                  className="text-[#FF7A00] transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
