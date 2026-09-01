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
      data-section-number="03"
      className="relative overflow-hidden bg-[#0A2E73] py-12 text-white sm:py-20 lg:py-24"
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
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#081A3A]/5 blur-3xl"
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
        className="pointer-events-none absolute -bottom-36 -right-28 h-96 w-96 rounded-full bg-[#FF7A00]/8 blur-3xl"
      />

      <div className="premium-services-wrap relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="premium-services-heading max-w-none text-left lg:grid lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.7fr)] lg:items-end lg:gap-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF7A00] sm:text-sm sm:tracking-[0.25em]"
            >
              Industrial Plot Services
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="premium-services-title mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.94] text-[#081A3A] sm:text-5xl lg:text-7xl"
            >
              Everything You Need
              <br />
              For A Safe Industrial
              <br />
              Investment
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-2 sm:mt-7"
            >
              <span className="h-0.75 w-16 bg-[#FF7A00]" />
              <span className="h-0.75 w-8 bg-white/60" />
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            className="premium-services-lede mt-3 max-w-md text-xs leading-5 text-[#5B6672] sm:mt-5 sm:text-base sm:leading-7 lg:mt-0"
          >
            From verified properties to final registration, our experienced
            team helps you invest confidently in Dholera SIR.
          </motion.p>

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
          className="premium-services-grid mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-px sm:border sm:border-[#191B1D]/15 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="premium-service-card group relative flex min-h-[19rem] flex-col overflow-hidden border border-[#191B1D]/15 bg-white p-6 transition-colors duration-500 sm:min-h-[21rem] sm:border-0 sm:p-8"
              >
                <span className="premium-service-number font-mono text-sm font-semibold tracking-[0.12em] text-[#FF7A00] transition-colors duration-500">
                  {service.number}
                </span>

                {/* Orange-only hover surface keeps the interaction focused on
                    the project's primary accent color. */}
                <div className="premium-service-hover-surface pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[#FF7A00] transition-transform duration-500 group-hover:scale-y-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="premium-service-icon mt-10 flex h-11 w-11 items-center justify-center border border-[#FF7A00]/50 text-[#FF7A00] transition-colors duration-500 sm:h-14 sm:w-14"
                  >
                    <Icon className="text-base sm:text-xl" />
                  </motion.div>

                  <h3 className="premium-service-title mt-7 text-xl font-semibold uppercase leading-[1.05] text-[#191B1D] transition-colors duration-500 sm:text-2xl">
                    {service.title}
                  </h3>

                  <span className="premium-service-rule mt-4 block h-px w-12 bg-[#FF7A00] transition-all duration-500 group-hover:w-24" />

                  <p className="premium-service-description mt-5 text-xs leading-6 text-[#5B6672] transition-colors duration-500 sm:text-sm sm:leading-7">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-auto pt-7"
                  >
                    <a
                      href="#contact"
                      className="premium-service-link group/link inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF7A00] transition-colors duration-300 hover:text-[#191B1D]"
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
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#081A3A] transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
