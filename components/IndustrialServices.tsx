"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFileSignature,
  FaHandshake,
  FaMapMarkedAlt,
  FaChartLine,
  FaIndustry,
  FaRupeeSign,
  FaHeadset,
} from "react-icons/fa";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const services: Service[] = [
  {
    number: "01",
    title: "Verified Plots",
    description:
    "Legally approved and government-backed plots ensure a secure and hassle-free investment experience.",
    icon: FaCheckCircle,
  },
  {
    number: "02",
    title: "Industrial Experts",
    description:
    "We focus only on industrial land, giving you expert advice and access to high-growth zones in Dholera SIR.",
    icon: FaIndustry,
  },
  {
    number: "03",
    title: "High Returns",
    description:
    "Our clients enjoy long-term value appreciation and excellent ROI from well-planned industrial zones.",
    icon: FaChartLine,
  },
  {
    number: "04",
    title: "Industrial Property List",
    description:
    "Explore carefully selected industrial plots in India’s first smart city with transparent project information.",
    icon: FaMapMarkedAlt,
  },
  {
    number: "05",
    title: "Investment Growth",
    description:
    "Get access to promising industrial locations designed for long-term business and investment growth.",
    icon: FaRupeeSign,
  },
  {
    number: "06",
    title: "Best Pricing",
    description:
    "Get competitive prices with clear paperwork and no hidden costs, ensuring maximum value for every rupee.",
    icon: FaFileSignature,
  },
  {
    number: "07",
    title: "Free Site Visit",
    description:
    "We offer guided site visits covering major industrial areas so you can make an informed decision.",
    icon: FaHandshake,
  },
  {
    number: "08",
    title: "Complete Support",
    description:
    "From your first inquiry to registration, our team supports you throughout the complete investment process.",
    icon: FaHeadset,
  },
];

const sectionVariants: Variants = {
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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function IndustrialServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24"
    >
      {/* Soft background decorations */}
      
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-20, 25, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#12568d]/5 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [20, -25, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-36 -right-28 h-96 w-96 rounded-full bg-[#fdb713]/8 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#fdb713] sm:text-sm sm:tracking-[0.25em]"
          >
            Industrial Plot Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-2xl font-black leading-tight text-[#12568d] sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Everything You Need For A Safe Industrial Investment
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:mt-5 sm:text-base sm:leading-7"
          >
            From verified properties to final registration, our experienced
            team helps you invest confidently in Dholera SIR.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-4 flex items-center justify-center gap-2 sm:mt-6"
          >
            <span className="h-0.75 w-16 bg-[#fdb713]" />
            <span className="h-0.75 w-8 bg-[#12568d]" />
          </motion.div>
        </motion.div>

        {/* Services cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group relative min-h-48 overflow-hidden rounded-xl border border-[#12568d]/10 bg-white p-3 shadow-[0_8px_24px_rgba(18,86,141,0.08)] transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_26px_65px_rgba(18,86,141,0.18)] sm:min-h-71.25 sm:rounded-2xl sm:border-2 sm:p-7 sm:shadow-[0_14px_40px_rgba(18,86,141,0.08)]"
              >
                {/* Light hover background */}
                <div className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[#eef5fb] transition-transform duration-500 group-hover:scale-y-100" />

                {/* Yellow top line */}
                <span className="absolute left-0 top-0 h-1 w-full bg-[#fdb713]" />

                {/* Decorative number */}
                <motion.span
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-3 top-3 text-3xl font-black text-[#12568d]/8 transition-all duration-500 group-hover:text-[#12568d]/12 sm:right-5 sm:top-4 sm:text-5xl"
                >
                  {service.number}
                </motion.span>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#12568d] text-sm text-[#fdb713] shadow-lg transition-colors duration-500 group-hover:bg-[#fdb713] group-hover:text-[#12568d] sm:h-14 sm:w-14 sm:rounded-2xl"
                  >
                    <Icon className="text-sm sm:text-[22px]" />
                  </motion.div>

                  <h3 className="mt-3 text-[13px] font-black leading-4 text-[#12568d] transition-all duration-500 group-hover:translate-x-1 group-hover:text-slate-950 sm:mt-6 sm:text-xl sm:leading-normal">
                    {service.title}
                  </h3>

                  <span className="mt-2 block h-0.5 w-8 bg-[#fdb713] transition-all duration-500 group-hover:w-24 sm:mt-4 sm:h-0.75 sm:w-12" />

                  <p className="mt-2 line-clamp-3 text-[10px] leading-4 text-slate-600 transition-colors duration-500 group-hover:text-slate-800 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-7">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-auto hidden pt-7 sm:block"
                  >
                    <a
                      href="#contact"
                      className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#12568d] transition-colors duration-300 hover:text-[#fdb713]"
                    >
                      Learn More

                      <FaArrowRight
                        size={11}
                        className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                      />
                    </a>
                  </motion.div>
                </div>

                {/* Bottom animated line */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#12568d] transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
