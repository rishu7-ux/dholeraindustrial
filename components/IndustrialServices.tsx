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
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
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
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#fdb713] sm:text-sm"
          >
            Industrial Plot Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-black leading-tight text-[#12568d] sm:text-4xl lg:text-5xl"
          >
            Everything You Need For A Safe Industrial Investment
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            From verified properties to final registration, our experienced
            team helps you invest confidently in Dholera SIR.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 flex items-center justify-center gap-2"
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
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
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
                className="group relative min-h-71.25 overflow-hidden rounded-2xl border-2 border-[#12568d]/10 bg-white p-6 shadow-[0_14px_40px_rgba(18,86,141,0.08)] transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_26px_65px_rgba(18,86,141,0.18)] sm:p-7"
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
                  className="absolute right-5 top-4 text-5xl font-black text-[#12568d]/8 transition-all duration-500 group-hover:text-[#12568d]/12"
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
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12568d] text-[#fdb713] shadow-lg transition-colors duration-500 group-hover:bg-[#fdb713] group-hover:text-[#12568d]"
                  >
                    <Icon size={22} />
                  </motion.div>

                  <h3 className="mt-6 text-lg font-black text-[#12568d] transition-all duration-500 group-hover:translate-x-1 group-hover:text-slate-950 sm:text-xl">
                    {service.title}
                  </h3>

                  <span className="mt-4 block h-0.75 w-12 bg-[#fdb713] transition-all duration-500 group-hover:w-24" />

                  <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-800">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-auto pt-7"
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