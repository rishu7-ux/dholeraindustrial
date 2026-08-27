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

    image: "/gallery/psamridhi 872:2.webp",

    location: "Dholera SIR",

    highlight: "70M + 48M Roads",

    href: "/samridhi-872-2-industrial-plots",
  },

];

export default function PropertyShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
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
        className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-[#fdb713]/15 blur-3xl"
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
        className="pointer-events-none absolute -right-40 bottom-10 h-112.5 w-112.5 rounded-full bg-[#12568d]/15 blur-3xl"
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
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#fdb713]">
            Investment Opportunities
          </p>

          <h2 className="mt-5 font-serif text-4xl font-black text-[#12568d] sm:text-5xl">
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
              className="h-1 rounded-full bg-[#fdb713]"
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
              className="h-1 rounded-full bg-[#12568d]"
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
          className="mt-14 space-y-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/65 shadow-[0_20px_60px_rgba(18,86,141,0.10)] backdrop-blur-xl"
            >
              <div className="grid lg:grid-cols-[45%_55%]">
                {/* =====================================================
                    LEFT IMAGE
                ===================================================== */}

                <div className="relative min-h-75 overflow-hidden sm:min-h-95 lg:min-h-100">
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

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

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
                    className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-sm font-black text-white shadow-xl backdrop-blur-xl"
                  >
                    {project.id}
                  </motion.div>

                  {/* Image Glass Label */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="absolute bottom-5 left-5 rounded-xl border border-white/25 bg-black/35 px-5 py-3 text-white backdrop-blur-xl"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#fdb713]">
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

                <div className="relative flex flex-col justify-center overflow-hidden p-7 sm:p-9 lg:p-11">
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
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#fdb713]/15 blur-3xl"
                  />

                  {/* Gold Border */}

                  <div className="absolute left-0 top-0 hidden h-full w-1 bg-[#fdb713] lg:block" />

                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fdb713]">
                      Featured Project
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-black text-[#12568d] sm:text-4xl">
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
                      className="mt-5 flex origin-left gap-2"
                    >
                      <span className="h-1 w-14 rounded-full bg-[#fdb713]" />

                      <span className="h-1 w-7 rounded-full bg-[#12568d]" />
                    </motion.div>

                    {/* LOCATION */}

                    <motion.div
                      whileHover={{
                        x: 6,
                      }}
                      className="mt-7 flex items-center gap-3"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713]">
                        <FaMapMarkerAlt size={14} />
                      </span>

                      <span className="text-sm font-bold text-slate-600">
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
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff2c9] text-[#12568d]">
                        <FaRoad size={14} />
                      </span>

                      <span className="text-sm font-bold text-slate-600">
                        {project.highlight}
                      </span>
                    </motion.div>

                    {/* EXPLORE */}

                    <div className="mt-7">
                      <Link
                        href={project.href}
                        className="group/button inline-flex items-center gap-3 rounded-xl bg-[#12568d] px-6 py-4 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#fdb713] hover:text-[#12568d]"
                      >
                        Explore

                        <FaArrowRight
                          size={11}
                          className="transition-transform duration-300 group-hover/button:translate-x-2"
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
