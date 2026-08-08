"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaRoad,
  FaSolarPanel,
  FaSubway,
  FaTruckMoving,
  FaWarehouse,
  FaGlobe,
  FaBolt,
  FaFileSignature,
  FaCity,
} from "react-icons/fa";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const smoothFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

const smoothFadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -48,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const smoothFadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 48,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const smoothCard: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

const locationPoints = [
  {
    icon: FaSubway,
    title: "Metro Station",
    description:
      "Close to the metro station for convenient workforce and business connectivity.",
  },
  {
    icon: FaPlaneDeparture,
    title: "Dholera International Airport",
    description:
      "Approximately 10 km from Dholera International Airport for strong air and cargo connectivity.",
  },
  {
    icon: FaTruckMoving,
    title: "Dedicated Freight Corridor",
    description:
      "Close to the Dedicated Freight Corridor (DFC) for efficient logistics and cargo movement.",
  },
  {
    icon: FaRoad,
    title: "Expressway Connectivity",
    description:
      "Connected to the expressway for faster access to important industrial and business zones.",
  },
];

const projectHighlights = [
  "Starting Price: ₹85,00,000* only",
  "Plot Sizes Available: 1318 sq. yd | 1865 sq. yd | 1882 sq. yd",
  "Road Width: 48-meter-wide roads for smooth transport of heavy vehicles",
  "Status: Ready for industrial and logistic development",
];

const facilities = [
  {
    icon: FaSubway,
    title: "Metro Connectivity",
  },
  {
    icon: FaPlaneDeparture,
    title: "Proximity to Dholera International Airport",
  },
  {
    icon: FaSolarPanel,
    title: "Ultra-Mega Solar Park",
  },
  {
    icon: FaCity,
    title: "India’s 1st Platinum Rated Green Smart City",
  },
  {
    icon: FaBolt,
    title: "Smart City Infrastructure",
  },
];

const whyDholera = [
  "Government Support",
  "Smart Infrastructure",
  "Global Investor Confidence",
  "Tax & Policy Benefits",
  "Workforce Availability",
];

const roiDrivers = [
  "The upcoming Dholera International Airport – a major logistics and cargo hub",
  "Operational phase of the Freight Corridor",
  "Global companies setting up plants",
  "Increasing NRI interest",
];

const idealFor = [
  {
    icon: FaIndustry,
    title: "Industrialists",
    description: "Expanding manufacturing units.",
  },
  {
    icon: FaWarehouse,
    title: "Logistics Companies",
    description: "Setting up distribution centers.",
  },
  {
    icon: FaGlobe,
    title: "Long-Term Investors",
    description: "Looking for long-term capital appreciation.",
  },
  {
    icon: FaFileSignature,
    title: "NRI Investors",
    description: "Seeking secure, high-return property in India.",
  },
];

const comparativeAdvantages = [
  "Lower land acquisition costs",
  "Modern, planned infrastructure",
  "Proximity to global logistics hubs (Airport + DFC)",
  "Green city certification",
  "High-speed metro and smart grid systems",
];

const amenities = [
  "Located near Dholera Expressway",
  "Metro connectivity to major business zones",
  "Close to the Dedicated Freight Corridor (DFC)",
  "Just minutes away from Dholera International Airport",
  "48-meter wide internal roads for easy heavy vehicle movement",
  "Eco-friendly infrastructure supporting green industry goals",
  "Smart street lighting and waste management system",
  "24x7 power backup and green energy options",
  "Dedicated investment support & legal assistance",
  "Smooth documentation and registration process",
];

export default function Samridhi621Page() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative min-h-155 overflow-hidden lg:min-h-175">
          <Image
            src="/gallery/industrial Land.webp"
            alt="Samridhi 621 Panchi Industrial Plots"
            fill
            priority
            className="object-cover transition-transform duration-1600 ease-out"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-[#12568d]/10" />

          <motion.div
            aria-hidden="true"
            animate={{
              x: [-25, 25, -25],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#fdb713]/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-end px-4 pb-14 pt-24 sm:px-6 lg:min-h-175 lg:px-8 lg:pb-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 55,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: smoothEase,
              }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/20 bg-[#12568d]/88 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <div className="absolute left-0 top-0 h-1.25 w-full bg-[#fdb713]" />

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                Industrial Property
              </p>

              <h1 className="mt-4 font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Samridhi 621 Panchi Industrial Plots
              </h1>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                  <FaMapMarkerAlt
                    size={16}
                    className="mt-1 shrink-0 text-[#fdb713]"
                  />

                  <span>
                    Near Tata Semiconductor Plant, Expressway, Metro &amp;
                    Freight Corridor
                  </span>
                </div>

                <Link
                  href="tel:+919667798802"
                  className="flex items-center gap-3 text-sm font-semibold text-white/85 transition hover:text-[#fdb713] sm:text-base"
                >
                  <FaPhoneAlt size={14} className="text-[#fdb713]" />
                  +91 9667798802
                </Link>
              </div>

              <div className="my-7 h-px bg-white/20" />

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Starting Price
                  </p>

                  <p className="mt-2 text-2xl font-black text-[#fdb713]">
                    ₹85,00,000*
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Plot Sizes
                  </p>

                  <p className="mt-2 font-bold">
                    1318 / 1865 / 1882 Sq. Yd.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Road Width
                  </p>

                  <p className="mt-2 font-bold">48 Meter</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#enquiry"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#12568d] transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white"
                >
                  Schedule Visit

                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>

                <Link
                  href="tel:+919667798802"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur-md transition-all duration-500 ease-out hover:bg-white hover:text-[#12568d]"
                >
                  <FaPhoneAlt size={13} />
                  Call Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18, margin: "-70px" }}
              className="mx-auto max-w-5xl"
            >
              <motion.p
                variants={smoothFadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Introduction
              </motion.p>

              <motion.h2
                variants={smoothFadeUp}
                className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl"
              >
                Samridhi 621 Panchi Industrial Plots
              </motion.h2>

              <motion.div variants={smoothFadeUp} className="mt-5 flex gap-2">
                <span className="h-0.75 w-16 bg-[#fdb713]" />
                <span className="h-0.75 w-8 bg-[#12568d]" />
              </motion.div>

              <motion.div
                variants={smoothFadeUp}
                className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base"
              >
                <p>
                  Dholera SIR (Special Investment Region) is becoming India&apos;s
                  most promising industrial and smart city destination in
                  Gujarat&apos;s quickly expanding industrial landscape. Dholera
                  is the ideal environment for companies, manufacturers, and
                  international investors thanks to its top-notch infrastructure,
                  easy access to major highways, and government-backed development
                  plans.
                </p>

                <p>
                  At the center of this expansion narrative is Samridhi 621
                  Panchi Industrial Plots, a high-end industrial development with
                  unparalleled long-term growth potential and a prime location
                  close to the Expressway, Metro, and Freight Corridor.
                </p>

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                          scale: 1.01,
                          transition: {
                            type: "spring",
                            stiffness: 220,
                            damping: 22,
                          },
                        }
                  }
                  className="rounded-3xl border-l-4 border-[#fdb713] bg-[#f7fbff] p-6 text-[#12568d] shadow-[0_14px_35px_rgba(18,86,141,0.08)] sm:p-8"
                >
                  <p className="font-semibold leading-8">
                    It is worth looking at if you&apos;re an investor,
                    manufacturer, or business owner looking for an industrial
                    land opportunity with a high return on investment.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= LOCATION ADVANTAGE ================= */}
        <section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18, margin: "-70px" }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={smoothFadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Location Advantage
              </motion.p>

              <motion.h2
                variants={smoothFadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl lg:text-5xl"
              >
                Business-Driven Connectivity
              </motion.h2>

              <motion.p
                variants={smoothFadeUp}
                className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600"
              >
                Dholera Industrial Plot has an ideal location within the Dholera
                SIR region—a smart city emerging as India&apos;s next industrial
                powerhouse—is among the best arguments for investing in the
                property.
              </motion.p>

              <motion.p
                variants={smoothFadeUp}
                className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600"
              >
                Top-notch infrastructure surrounds the project, guaranteeing
                that your company is always connected to important markets and
                trade routes.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "-60px" }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {locationPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={smoothCard}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -9,
                            scale: 1.018,
                            transition: {
                              type: "spring",
                              stiffness: 220,
                              damping: 22,
                            },
                          }
                    }
                    className="group rounded-3xl border border-[#12568d]/10 bg-white p-7 shadow-[0_15px_45px_rgba(18,86,141,0.08)] transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_24px_60px_rgba(18,86,141,0.15)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12568d] text-[#fdb713] transition-all duration-300 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-[#12568d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mx-auto mt-10 max-w-5xl space-y-5 text-center leading-8 text-slate-600">
              <p>
                The project has outstanding connectivity, turning it into a
                strategic business advantage rather than just a land investment.
              </p>

              <p>
                The government-approved industrial project combines long-term
                industrial vision, smart infrastructure, and accessibility. This
                project, which is in line with the Dholera SIR (Special
                Investment Region) initiatives, is intended for companies
                wishing to start manufacturing, logistics, or warehousing
                operations.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROJECT HIGHLIGHTS ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                variants={smoothFadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18, margin: "-70px" }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Project Highlights
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                  Ready For Industrial &amp; Logistic Development
                </h2>

                <div className="mt-7 space-y-4">
                  {projectHighlights.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 rounded-xl bg-[#f7fbff] p-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={13} />
                      </span>

                      <span className="font-semibold leading-7 text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Each plot is developed with industrial zoning permissions,
                  ensuring that investors can begin development or leasing
                  without bureaucratic delays.
                </p>
              </motion.div>

              <motion.div
                variants={smoothFadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18, margin: "-70px" }}
                className="rounded-[28px] bg-[#fffaf0] p-7 sm:p-9"
              >
                <p className="font-black text-[#12568d]">
                  Facilities Include:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {facilities.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -5,
                                scale: 1.01,
                              }
                        }
                        className="group rounded-xl bg-white p-5 shadow-sm transition-shadow duration-500 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713] transition-all duration-300 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                          <Icon size={18} />
                        </div>

                        <p className="mt-4 text-sm font-bold leading-6 text-[#12568d]">
                          {item.title}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE DHOLERA ================= */}
        <section className="relative overflow-hidden bg-[#12568d] py-16 text-white sm:py-20 lg:py-24">
          <motion.div
            aria-hidden="true"
            animate={{
              x: [-20, 24, -20],
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#fdb713]/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={smoothFadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Why Choose Dholera for Industrial Investment?
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  A Visionary Development Under DMIC
                </h2>

                <p className="mt-7 leading-8 text-white/80">
                  Dholera is not just another industrial area; it&apos;s a
                  visionary development created under the Delhi-Mumbai
                  Industrial Corridor (DMIC) initiative — a multi-billion-dollar
                  infrastructure project connecting India&apos;s key economic
                  hubs.
                </p>

                <p className="mt-5 leading-8 text-white/80">
                  In short, Dholera SIR is the future of industrial expansion in
                  India, and Samridhi 621 Panchi is your opportunity to be part
                  of that future.
                </p>
              </motion.div>

              <motion.div
                variants={smoothFadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-md sm:p-9"
              >
                <p className="text-sm font-black text-[#fdb713]">
                  Key reasons why industries are choosing Dholera:
                </p>

                <div className="mt-6 space-y-5">
                  {whyDholera.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={13} />
                      </span>

                      <p className="font-semibold text-white/85">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= INVESTMENT POTENTIAL ================= */}
        <section className="bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={smoothFadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Investment Potential &amp; ROI Outlook
              </motion.p>

              <motion.h2
                variants={smoothFadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl lg:text-5xl"
              >
                Growth Drivers Around Dholera
              </motion.h2>

              <motion.p
                variants={smoothFadeUp}
                className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600"
              >
                The land prices in Dholera are still in their early growth
                phase, making now the perfect time to invest. Industrial plots
                here are expected to appreciate significantly in the coming
                years due to major infrastructure and industrial activity.
              </motion.p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <motion.div
                variants={smoothFadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-white p-7 shadow-[0_15px_45px_rgba(18,86,141,0.08)] sm:p-9"
              >
                <p className="font-black text-[#12568d]">
                  Key Growth Drivers
                </p>

                <div className="mt-6 space-y-4">
                  {roiDrivers.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={13} />
                      </span>

                      <p className="leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={smoothFadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#12568d] p-7 text-white shadow-[0_18px_55px_rgba(18,86,141,0.20)] sm:p-9"
              >
                <p className="font-black text-[#fdb713]">
                  This Makes It An Ideal Choice For:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {idealFor.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -5 }}
                        className="rounded-xl bg-white/10 p-5"
                      >
                        <Icon className="text-[#fdb713]" size={20} />

                        <p className="mt-4 font-black">{item.title}</p>

                        <p className="mt-2 text-sm leading-6 text-white/75">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= COMPARATIVE ADVANTAGE ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={smoothFadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Comparative Advantage
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                  Over Other Industrial Zones
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  When compared to traditional industrial areas like Sanand,
                  Dahej, or Mundra, Dholera SIR — and particularly Samridhi 621
                  Panchi — offers several strategic advantages.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  These advantages make it ideal for industries like
                  electronics, engineering, logistics, renewable energy, and IT
                  manufacturing.
                </p>
              </motion.div>

              <motion.div
                variants={smoothFadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#f7fbff] p-7 sm:p-9"
              >
                <div className="space-y-4">
                  {comparativeAdvantages.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12568d] text-[#fdb713]">
                        <FaCheckCircle size={14} />
                      </span>

                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= AMENITIES ================= */}
        <section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={smoothFadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Amenities
              </motion.p>

              <motion.h2
                variants={smoothFadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl"
              >
                Infrastructure &amp; Investor Support
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {amenities.map((item) => (
                <motion.div
                  key={item}
                  variants={smoothCard}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                          scale: 1.01,
                        }
                  }
                  className="group flex items-start gap-4 rounded-[20px] border border-[#12568d]/10 bg-white p-5 shadow-[0_12px_35px_rgba(18,86,141,0.07)] transition-all duration-500 hover:border-[#fdb713]"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                    <FaCheckCircle size={14} />
                  </span>

                  <p className="font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= ENQUIRY ================= */}
        <section id="enquiry" className="bg-[#fff8e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: smoothEase,
              }}
              className="relative overflow-hidden rounded-[30px] bg-[#12568d] px-6 py-10 text-white shadow-[0_25px_70px_rgba(18,86,141,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              <div className="absolute left-0 top-0 h-1.25 w-full bg-[#fdb713]" />

              <motion.div
                animate={{
                  x: [-30, 30, -30],
                  y: [-15, 15, -15],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fdb713]/15 blur-3xl"
              />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                    Schedule A Site Visit
                  </p>

                  <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                    Interested In Samridhi 621 Panchi?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    Contact our property team to check current availability,
                    pricing, documentation and schedule your site visit.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="tel:+919667798802"
                      className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-7 py-4 text-sm font-black uppercase text-[#12568d] transition-colors hover:bg-white"
                    >
                      <FaPhoneAlt size={13} />
                      Call Expert
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 text-sm font-black uppercase text-white transition-colors hover:bg-white hover:text-[#12568d]"
                    >
                      Enquire Now

                      <FaArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}