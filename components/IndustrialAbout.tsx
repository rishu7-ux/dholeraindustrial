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
      className="relative w-full overflow-hidden bg-[#f5f8fc] py-16 sm:py-20 lg:py-24"
    >
      {/* Premium light background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 -top-44 h-125 w-125 rounded-full bg-white/90 blur-[140px]" />

        <div className="absolute -bottom-44 -right-44 h-130 w-130 rounded-full bg-[#12568d]/5 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-[180px]" />

        <div className="absolute inset-0 bg-linear-to-br from-white/80 via-[#f5f8fc] to-[#eef4fa]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
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
          className="group relative"
        >
          {/* Yellow decorative shape */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-3 -top-3 h-24 w-24 rounded-xl bg-[#fdb713] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32"
          />

          {/* Blue decorative shape */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-3 -right-3 h-24 w-24 rounded-xl bg-[#12568d] sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32"
          />

          <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-[0_25px_70px_rgba(18,86,141,0.18)]">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/gallery/industrial  heart.webp"
                alt="Dholera industrial development"
                width={800}
                height={520}
                priority
                className="h-80 w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-100 lg:h-117.5"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#12568d]/35 via-transparent to-transparent" />

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
                className="absolute bottom-5 left-5 right-5 border-l-4 border-[#fdb713] bg-[#12568d]/90 px-5 py-4 text-white shadow-lg backdrop-blur-sm sm:right-auto sm:max-w-[330px]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#fdb713]">
                  Dholera SIR
                </p>

                <p className="mt-1 text-sm font-semibold sm:text-base">
                  India&apos;s future industrial and investment destination
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
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
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#fdb713] sm:text-sm"
          >
            About Dholera Industrial
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl lg:text-5xl"
          >
            Invest Smart. Build Big. In Dholera&apos;s Industrial Heart!
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex items-center gap-2"
          >
            <span className="h-0.75 w-16 bg-[#fdb713]" />
            <span className="h-0.75 w-8 bg-[#12568d]" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-[15px] leading-8 text-slate-600 sm:text-base"
          >
            At Omana Projects, we help businesses secure high-potential
            industrial plots in Dholera SIR — India&apos;s most advanced
            greenfield smart city, developed under the Delhi–Mumbai Industrial
            Corridor.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base"
          >
            Backed by the Government of India, Dholera is becoming a major
            destination for manufacturing, logistics, infrastructure and
            long-term industrial growth.
          </motion.p>

          {/* Feature lists */}
          <motion.div
            variants={featureContainer}
            className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2"
          >
            <div className="space-y-5">
              {leftFeatures.map((item) => (
                <motion.div
                  key={item}
                  variants={featureAnimation}
                  whileHover={{
                    x: 7,
                  }}
                  className="group/feature flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12568d]/10 text-[#12568d] transition-all duration-300 group-hover/feature:bg-[#fdb713]">
                    <FaRegCheckCircle size={17} />
                  </span>

                  <span className="text-sm font-semibold text-slate-700 sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-5">
              {rightFeatures.map((item) => (
                <motion.div
                  key={item}
                  variants={featureAnimation}
                  whileHover={{
                    x: 7,
                  }}
                  className="group/feature flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12568d]/10 text-[#12568d] transition-all duration-300 group-hover/feature:bg-[#fdb713]">
                    <FaRegCheckCircle size={17} />
                  </span>

                  <span className="text-sm font-semibold text-slate-700 sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeUp} className="mt-9">
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
                className="group/button inline-flex min-h-13 items-center justify-center gap-3 rounded-md bg-[#12568d] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition-colors duration-300 hover:bg-[#fdb713] hover:text-[#12568d]"
              >
                Explore Projects

                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}