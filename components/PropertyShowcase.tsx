"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaRoad,
} from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const projects = [
  {
    id: "01",

    title: "Samridhi 621 Panchi",

    image: "/gallery/industrial Land.webp",

    location: "Dholera SIR",

    highlight: "48 Meter Wide Road",

    href: "/samridhi-621-panchi-industrial-plots",
  },

  {
    id: "02",

    title: "Samridhi 365",

    image: "/gallery/n1.webp",

    location: "Near Tata Semiconductor",

    highlight: "500m From Expressway",

    href: "/samridhi-365-industrial-plot",
  },

  {
    id: "03",

    title: "Samridhi 872/2",

    image: "/gallery/psamridhi-872-2.webp",

    location: "Dholera SIR",

    highlight: "70M + 48M Roads",

    href: "/samridhi-872-2-industrial-plots",
  },

];

export default function PropertyShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 30, -20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-[#FF7A00]/15 blur-3xl"
      />

      <motion.div
        animate={{
          x: [40, -30, 40],
          y: [20, -30, 20],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-112.5 w-112.5 rounded-full bg-[#081A3A]/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#FF7A00]">
            Investment Opportunities
          </p>

          <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
            Explore Dholera
          </h2>

          <div className="mx-auto mt-6 flex w-fit gap-2">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 70,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-1 rounded-full bg-[#FF7A00]"
            />

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 32,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="h-1 rounded-full bg-[#081A3A]"
            />
          </div>
        </motion.div>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-10 space-y-5 sm:mt-14 sm:space-y-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden border border-white/70 bg-white/65 shadow-[0_12px_36px_rgba(8,26,58,0.10)] backdrop-blur-xl sm:shadow-[0_20px_60px_rgba(8,26,58,0.10)]"
            >
              <div className="grid lg:grid-cols-[45%_55%]">
                {/* =====================================================
                    LEFT IMAGE
                ===================================================== */}

                <div className="relative min-h-52 overflow-hidden sm:min-h-95 lg:min-h-100">
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.9,
                      ease,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Image Gradient */}

                  <div className="absolute inset-0 bg-linear-to-t from-[#081A3A]/70 via-[#081A3A]/10 to-transparent" />

                  {/* Floating Number */}

                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/15 text-xs font-black text-white shadow-xl backdrop-blur-xl sm:left-6 sm:top-6 sm:h-12 sm:w-12 sm:rounded-xl sm:text-sm"
                  >
                    {project.id}
                  </motion.div>

                  {/* Image Glass Label */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="absolute bottom-3 left-3 rounded-lg border border-white/25 bg-[#081A3A]/35 px-3 py-2 text-white backdrop-blur-xl sm:bottom-5 sm:left-5 sm:rounded-xl sm:px-5 sm:py-3"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00]">
                      Dholera SIR
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      Industrial Opportunity
                    </p>
                  </motion.div>
                </div>

                {/* =====================================================
                    RIGHT CONTENT
                ===================================================== */}

                <div className="relative flex flex-col justify-center overflow-hidden p-5 sm:p-9 lg:p-11">
                  {/* Animated Glow */}

                  <motion.div
                    animate={{
                      x: [-15, 20, -15],
                      y: [-10, 15, -10],
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FF7A00]/15 blur-3xl"
                  />

                  {/* Accent border */}

                  <div className="absolute left-0 top-0 hidden h-full w-1 bg-[#FF7A00] lg:block" />

                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                      Featured Project
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-black text-[#081A3A] sm:mt-3 sm:text-4xl">
                      {project.title}
                    </h3>

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="mt-3 flex origin-left gap-2 sm:mt-5"
                    >
                      <span className="h-1 w-14 rounded-full bg-[#FF7A00]" />

                      <span className="h-1 w-7 rounded-full bg-[#081A3A]" />
                    </motion.div>

                    {/* LOCATION */}

                    <motion.div
                      whileHover={{
                        x: 6,
                      }}
                      className="mt-5 flex items-center gap-3 sm:mt-7"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#081A3A] text-[#FF7A00] sm:h-10 sm:w-10 sm:rounded-xl">
                        <FaMapMarkerAlt size={14} />
                      </span>

                      <span className="text-sm font-bold text-[#0A2E73]">
                        {project.location}
                      </span>
                    </motion.div>

                    {/* ONE FEATURE */}

                    <motion.div
                      whileHover={{
                        x: 6,
                      }}
                      className="mt-4 flex items-center gap-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF7A00]/12 text-[#FF7A00] sm:h-10 sm:w-10 sm:rounded-xl">
                        <FaRoad size={14} />
                      </span>

                      <span className="text-sm font-bold text-[#0A2E73]">
                        {project.highlight}
                      </span>
                    </motion.div>

                    {/* EXPLORE */}

                    <div className="mt-5 sm:mt-7">
                      <Link
                        href={project.href}
                        className="group/button inline-flex items-center gap-2 rounded-lg bg-[#081A3A] px-5 py-3 text-[11px] font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#081A3A] sm:gap-3 sm:rounded-xl sm:px-6 sm:py-4 sm:text-xs"
                      >
                        Explore

                        <FaArrowRight
                          size={11}
                          className="text-[#FF7A00] transition-transform duration-300 group-hover/button:translate-x-2"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  MOVING GLASS SHINE
              ===================================================== */}

              <motion.div
                initial={{
                  x: "-180%",
                }}
                animate={{
                  x: "700%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute top-0 h-full w-20 rotate-12 bg-white/15 blur-xl"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
