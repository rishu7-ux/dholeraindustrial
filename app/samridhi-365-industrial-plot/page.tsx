"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoad,
  FaSolarPanel,
  FaSubway,
  FaTint,
  FaTruckMoving,
  FaIndustry,
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
      delayChildren: 0.07,
    },
  },
};

const fadeUp: Variants = {
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

const fadeLeft: Variants = {
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

const fadeRight: Variants = {
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

const cardReveal: Variants = {
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
    icon: FaRoad,
    title: "Expressway",
    description:
      "Direct access to major industrial and transport corridors.",
  },
  {
    icon: FaSubway,
    title: "Metro",
    description:
      "Planned metro connectivity supporting fast regional movement.",
  },
  {
    icon: FaTruckMoving,
    title: "Dedicated Freight Corridor",
    description:
      "Strong freight connectivity for logistics, warehousing, and industry.",
  },
];

const projectVisionPoints = [
  {
    icon: FaRoad,
    title: "Wide Internal Roads",
    description: "Wide internal roads for smooth vehicular movement.",
  },
  {
    icon: FaLeaf,
    title: "Tree-Lined Streets",
    description:
      "Tree-lined streets promoting a green and serene environment.",
  },
  {
    icon: FaSolarPanel,
    title: "Solar-Powered Lighting",
    description:
      "Solar-powered street lighting reducing energy consumption.",
  },
  {
    icon: FaTint,
    title: "Rainwater Harvesting",
    description:
      "Rainwater harvesting systems promoting water conservation.",
  },
];

const investmentPoints = [
  "Located near major industrial and transport infrastructure",
  "Backed by government initiatives like DMIC and Make in India",
  "Transparent documentation and RERA registration",
  "Rapidly increasing property values",
  "Green, sustainable design for long-term viability",
];

const projectHighlights = [
  "Government Approved",
  "Industrial Zoned Plots",
  "Tree-Lined Streets & Green Landscapes",
  "Solar Lighting & Rainwater Harvesting",
  "1.5 km from Tata Semiconductor Plant",
  "500 m from Dholera Expressway",
];

export default function Samridhi365Page() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative min-h-[620px] overflow-hidden lg:min-h-175">
          <Image
            src="/gallery/ sandhida 191.webp"
            alt="Samridhi 365 Industrial Plot"
            fill
            priority
            className="object-cover transition-transform duration-1600 ease-out"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
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

          <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-end px-4 pb-14 pt-24 sm:px-6 lg:min-h-[700px] lg:px-8 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 55, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: smoothEase }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/20 bg-[#12568d]/88 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <div className="absolute left-0 top-0 h-1.25 w-full bg-[#fdb713]" />

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                Industrial Property
              </p>

              <h1 className="mt-4 font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Samridhi 365 – A Landmark Investment in Dholera Smart City
              </h1>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                  <FaMapMarkerAlt
                    size={16}
                    className="mt-1 shrink-0 text-[#fdb713]"
                  />
                  <span>Near the Expressway, Metro, and Freight Corridor</span>
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
                    ₹1,35,00,000*
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Location
                  </p>
                  <p className="mt-2 font-bold">Dholera Smart City</p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Property
                  </p>
                  <p className="mt-2 font-bold">Industrial Plots</p>
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
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Introduction
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl"
              >
                Samridhi 365 Industrial Plots
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-5 flex gap-2">
                <span className="h-0.75 w-16 bg-[#fdb713]" />
                <span className="h-0.75 w-8 bg-[#12568d]" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base"
              >
                <p>
                  India is poised to enter a new era of smart infrastructure.
                  Samridhi 365 Industrial Plots is one of the most promising and
                  strategically located investment destinations for
                  industrialists, business owners, and forward-thinking
                  investors among the numerous development projects forming
                  this futuristic area.
                </p>

                <p>
                  Plots in Dholera are redefining what it means to invest in
                  industrial land because of their advantageous location close
                  to the Tata Semiconductor Plant, the Expressway, the Metro,
                  and the Freight Corridor.
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
                    This project seamlessly blends world-class infrastructure
                    with forward-thinking innovation, backed by government
                    approvals and a strong focus on sustainability—creating a
                    future-ready environment where growth and business flourish
                    in perfect harmony.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= DHOLERA SMART CITY ================= */}
        <section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18, margin: "-70px" }}
              className="group relative"
            >
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-[20px] border-l-4 border-t-4 border-[#fdb713]" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-br-[20px] border-b-4 border-r-4 border-[#12568d]" />

              <div className="relative h-105 overflow-hidden rounded-[28px] shadow-xl sm:h-125">
                <Image
                  src="/gallery/gallery3.webp"
                  alt="Dholera Smart City"
                  fill
                  className="object-cover transition-transform duration-1600 ease-out group-hover:scale-[1.045]"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18, margin: "-70px" }}
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                Dholera Smart City
              </p>

              <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                India&apos;s First Greenfield Smart City
              </h2>

              <div className="mt-5 flex gap-2">
                <span className="h-0.75 w-16 bg-[#fdb713]" />
                <span className="h-0.75 w-8 bg-[#12568d]" />
              </div>

              <div className="mt-7 space-y-5 leading-8 text-slate-600">
                <p>
                  It&apos;s important to recognize what makes Dholera Smart City
                  such an exceptional place before you can appreciate the value
                  of Samridhi 365. Dholera, India&apos;s first Greenfield Smart
                  City, was created as part of the Delhi Mumbai Industrial
                  Corridor (DMIC) project and is located in Gujarat.
                </p>

                <p>
                  Dholera&apos;s goal is to establish a global center for
                  manufacturing and industry that draws in both foreign and
                  domestic capital. The city, which is more than 920 square
                  kilometers in size, is being planned with cutting-edge
                  infrastructure, strong connectivity, and sustainable urban
                  design.
                </p>

                <p>
                  With its expansive six-lane motorways, dedicated freight
                  lanes, international airport, and high-speed metro system,
                  Dholera is more than just an industrial area; it is the
                  blueprint for India&apos;s urban future.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= LOCATION ADVANTAGE ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Location Advantage
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl lg:text-5xl"
              >
                At The Heart Of Connectivity
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600"
              >
                The Project&apos;s greatest benefit is its unmatched location.
                The project is ideally located for logistics, warehousing, and
                industrial operations because it is close to major
                transportation infrastructure.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-6 md:grid-cols-3"
            >
              {locationPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardReveal}
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

            <div className="mx-auto mt-12 max-w-5xl space-y-6 leading-8 text-slate-600">
              <p>
                Moreover, the project lies right beside the High Access
                Corridor (HAC)—a vital highway engineered to support
                high-volume industrial transportation. Its strategic
                positioning ensures seamless connectivity and uninterrupted
                movement of goods and services across Gujarat and beyond.
              </p>

              <p>
                The location&apos;s closeness to important landmarks adds to its
                impressiveness:
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-[#12568d] p-6 text-white"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#fdb713]">
                    Tata Semiconductor Plant
                  </p>

                  <p className="mt-3 text-xl font-black">1 KM Away</p>

                  <p className="mt-3 text-sm leading-7 text-white/75">
                    One of the biggest and most sophisticated semiconductor
                    manufacturing plants in India.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-[#fdb713] p-6 text-[#12568d]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Dholera Expressway
                  </p>

                  <p className="mt-3 text-xl font-black">500 M Away</p>

                  <p className="mt-3 text-sm leading-7">
                    Providing immediate access to the highway.
                  </p>
                </motion.div>
              </div>

              <p>
                Samridhi 365 provides everything in one place for companies
                seeking excellent connectivity to ports, airports, and
                industrial corridors.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROJECT VISION ================= */}
        <section className="bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  The Project Vision
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                  A Smart, Sustainable Industrial Estate
                </h2>

                <p className="mt-7 leading-8 text-slate-600">
                  It has been developed to serve the growing demand for
                  industrial and residential-zoned plots in Dholera. Each plot
                  is designed to provide ample space, modern infrastructure,
                  and sustainable features that enhance operational efficiency.
                </p>
              </motion.div>

              <motion.div
                variants={sectionStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {projectVisionPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={cardReveal}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -8,
                              scale: 1.018,
                            }
                      }
                      className="group rounded-[22px] border border-[#12568d]/10 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_22px_55px_rgba(18,86,141,0.14)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713]">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-5 font-black text-[#12568d]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={cardReveal}
                  className="rounded-[22px] border border-[#12568d]/10 bg-white p-6 shadow-sm sm:col-span-2"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713]">
                      <FaIndustry size={20} />
                    </span>

                    <div>
                      <h3 className="font-black text-[#12568d]">
                        Underground Cabling &amp; Drainage
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Underground cabling and drainage systems for a clean,
                        modern look.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <p className="mx-auto mt-10 max-w-5xl leading-8 text-slate-600">
              Every aspect of the layout reflects the idea of a future-ready
              development, ensuring long-term returns and a high-quality
              ecosystem for businesses and residents alike.
            </p>
          </div>
        </section>

        {/* ================= INVESTMENT POTENTIAL ================= */}
        <section className="relative overflow-hidden bg-[#12568d] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Investment Potential
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Why Now Is The Time To Buy
                </h2>

                <p className="mt-7 leading-8 text-white/80">
                  The numbers speak for themselves. Property values in and
                  around Dholera Smart City have been steadily increasing as
                  infrastructure projects near completion. With expressways,
                  the freight corridor, metro connectivity, and the upcoming
                  Dholera International Airport, the city is gearing up for
                  exponential growth in both industrial and residential demand.
                </p>

                <p className="mt-5 leading-8 text-white/80">
                  In short, it&apos;s the kind of investment that grows in value
                  and relevance with every passing year.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-md sm:p-9"
              >
                <p className="text-sm font-black text-[#fdb713]">
                  Why it&apos;s a smart investment:
                </p>

                <div className="mt-6 space-y-5">
                  {investmentPoints.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={13} />
                      </span>

                      <p className="leading-7 text-white/85">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= MORE THAN JUST LAND ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Samridhi 365
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                  More Than Just Land, It&apos;s A Vision
                </h2>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Its vision—to create a contemporary, environmentally
                    friendly, and well-planned industrial community that
                    complements India&apos;s growth narrative—is what sets it
                    apart, not just its location or infrastructure.
                  </p>

                  <p>
                    Here, every plot represents a promise of prosperity,
                    safety, and opportunity. Samridhi 365 is made to provide
                    long-term value, regardless of your plans to use it as a
                    factory, warehouse, home, or just as an appreciating asset.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#f7fbff] p-7 sm:p-9"
              >
                <p className="font-black text-[#12568d]">
                  Project Highlights:
                </p>

                <motion.div
                  variants={sectionStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="mt-6 space-y-4"
                >
                  {projectHighlights.map((item) => (
                    <motion.div
                      key={item}
                      variants={cardReveal}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 6,
                              scale: 1.008,
                            }
                      }
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={14} />
                      </span>

                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= ENQUIRY ================= */}
        <section id="enquiry" className="bg-[#fff8e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 45, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="relative overflow-hidden rounded-[30px] bg-[#12568d] px-6 py-10 text-white shadow-[0_25px_70px_rgba(18,86,141,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              <div className="absolute left-0 top-0 h-[5px] w-full bg-[#fdb713]" />

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
                    Interested In Samridhi 365?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    Contact our property team to check current availability,
                    pricing and documentation.
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