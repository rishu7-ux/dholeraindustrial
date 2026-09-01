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
    y: 40,
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

export default function HomeProjects() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-14 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ANIMATION ================= */}

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
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#FF7A00]/15 blur-3xl"
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
        className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#081A3A]/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

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
            Featured Opportunities
          </p>

          <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
            Invest In Dholera
          </h2>

          <div className="mx-auto mt-6 flex w-fit gap-2">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="h-1 rounded-full bg-[#FF7A00]"
            />

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="h-1 rounded-full bg-[#081A3A]"
            />
          </div>
        </motion.div>

        {/* ================= PROJECT CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
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
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-[0_12px_36px_rgba(8,26,58,0.10)] backdrop-blur-xl sm:rounded-[30px] sm:shadow-[0_20px_60px_rgba(8,26,58,0.10)]"
            >
              <div className="grid grid-cols-[42%_58%] sm:grid-cols-1 lg:grid-cols-[44%_56%]">
                {/* ================= LEFT IMAGE ================= */}

                <div className="relative min-h-40 overflow-hidden sm:min-h-[380px] lg:min-h-[400px]">
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
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A3A]/70 via-[#081A3A]/5 to-transparent" />

                  {/* NUMBER GLASS */}

                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-md border border-white/30 bg-white/15 text-[10px] font-black text-white shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:h-12 sm:w-12 sm:rounded-xl sm:text-sm"
                  >
                    {project.id}
                  </motion.div>

                  {/* BOTTOM GLASS */}

                  <div className="absolute bottom-3 left-3 right-3 hidden sm:block sm:bottom-5 sm:left-5 sm:right-5">
                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      className="w-fit rounded-lg border border-white/25 bg-[#081A3A]/35 px-3 py-2 text-white backdrop-blur-xl sm:rounded-xl sm:px-5 sm:py-3"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7A00]">
                        Dholera SIR
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Industrial Opportunity
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* ================= RIGHT CONTENT ================= */}

                <div className="relative flex flex-col justify-center p-3 sm:p-9 lg:p-11">
                  {/* GLASS DECORATION */}

                  <motion.div
                    animate={{
                      rotate: [0, 12, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#FF7A00]/10 blur-2xl"
                  />

                  <p className="relative z-10 text-[8px] font-black uppercase tracking-[0.14em] text-[#FF7A00] sm:text-[10px] sm:tracking-[0.25em]">
                    Featured Project
                  </p>

                  <h3 className="relative z-10 mt-1 font-serif text-base font-black leading-5 text-[#081A3A] sm:mt-3 sm:text-4xl sm:leading-tight">
                    {project.title}
                  </h3>

                  {/* SMALL LINE */}

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
                    className="relative z-10 mt-2 flex origin-left gap-1 sm:mt-5 sm:gap-2"
                  >
                    <span className="h-0.5 w-8 rounded-full bg-[#FF7A00] sm:h-1 sm:w-14" />
                    <span className="h-0.5 w-4 rounded-full bg-[#081A3A] sm:h-1 sm:w-7" />
                  </motion.div>

                  {/* LOCATION */}

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="relative z-10 mt-3 flex items-center gap-2 sm:mt-7 sm:gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#081A3A] text-[#FF7A00] sm:h-10 sm:w-10 sm:rounded-xl">
                      <FaMapMarkerAlt size={14} />
                    </span>

                    <span className="line-clamp-1 text-[10px] font-bold leading-4 text-[#0A2E73] sm:text-sm sm:leading-normal">
                      {project.location}
                    </span>
                  </motion.div>

                  {/* ONE FEATURE ONLY */}

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="relative z-10 mt-4 hidden items-center gap-3 sm:flex"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFFFFF] text-[#081A3A] sm:h-10 sm:w-10 sm:rounded-xl">
                      <FaRoad size={14} />
                    </span>

                    <span className="text-sm font-bold text-[#0A2E73]">
                      {project.highlight}
                    </span>
                  </motion.div>

                  {/* BUTTON */}

                  <div className="relative z-10 mt-3 sm:mt-7">
                    <Link
                      href={project.href}
                      className="group/button inline-flex items-center gap-1.5 rounded-md bg-[#081A3A] px-3 py-2 text-[9px] font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF7A00] hover:text-[#081A3A] sm:gap-3 sm:rounded-xl sm:px-6 sm:py-4 sm:text-xs"
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

              {/* MOVING GLASS SHINE */}

              <motion.div
                initial={{
                  x: "-160%",
                }}
                whileInView={{
                  x: "260%",
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute top-0 h-full w-24 rotate-12 bg-white/15 blur-xl"
              />
            </motion.article>
          ))}
        </motion.div>

        {/* ================= VIEW ALL ================= */}

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
            duration: 0.7,
          }}
          className="mt-8 text-center sm:mt-12"
        >
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#081A3A]/15 bg-white/70 px-5 py-3 text-xs font-black uppercase tracking-wide text-[#081A3A] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#081A3A] hover:text-white sm:gap-3 sm:rounded-xl sm:px-8 sm:py-4 sm:text-sm"
          >
            View All Properties

            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
