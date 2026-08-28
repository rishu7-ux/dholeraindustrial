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

      <main className="compact-page property-detail-page overflow-hidden bg-white text-slate-700">
        {/* ================= HERO — SCREENSHOT STYLE ================= */}
        <section className="relative bg-linear-to-br from-[#fffaf0] via-white to-[#eef6fc] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#fdb713]/50 bg-[#fff8e8] px-5 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#12568d]">
                <span className="h-3 w-3 rounded-full bg-[#fdb713]" />
                Industrial Property
              </div>

              <h1 className="mt-7 max-w-2xl font-serif text-5xl font-black leading-[1.02] text-[#12568d] sm:text-6xl lg:text-7xl">
                Samridhi 365 Industrial Plots
              </h1>

              <div className="mt-7 flex gap-3">
                <span className="h-1 w-20 bg-[#fdb713]" />
                <span className="h-1 w-9 bg-[#12568d]" />
              </div>

              <p className="mt-8 max-w-2xl text-base leading-9 text-slate-600 sm:text-lg">
                A landmark industrial investment opportunity in Dholera Smart City,
                strategically located near the Expressway, Metro, Freight Corridor
                and major industrial infrastructure.
              </p>

              <div className="property-contact-grid mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:block sm:space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713]">
                    <FaMapMarkerAlt size={19} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 font-black text-slate-700">
                      Near the Expressway, Metro, and Freight Corridor
                    </p>
                  </div>
                </div>

                <Link href="tel:+919667798802" className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#fff3cf] text-[#12568d]">
                    <FaPhoneAlt size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                      Call Our Expert
                    </p>
                    <p className="mt-1 text-lg font-black text-[#12568d]">
                      +91 9667798802
                    </p>
                  </div>
                </Link>
              </div>

              <div className="property-facts-grid mt-5 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-4">
                {[
                  ["Starting Price", "₹1,35,00,000*", "Investment"],
                  ["Location", "Dholera", "Smart City"],
                  ["Property", "Industrial", "Plots"],
                ].map(([label, value, sub]) => (
                  <motion.div
                    key={label}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className="rounded-2xl border border-[#12568d]/10 bg-white p-6 shadow-[0_15px_45px_rgba(18,86,141,0.08)]"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-3 text-xl font-black text-[#12568d]">{value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-500">{sub}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#enquiry"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#12568d] transition hover:-translate-y-1"
                >
                  Schedule Visit
                  <FaArrowRight size={12} className="transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="tel:+919667798802"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-[#12568d]/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#12568d]"
                >
                  <FaPhoneAlt size={13} />
                  Call Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-20 w-20 rounded-tl-[20px] border-l-4 border-t-4 border-[#fdb713]" />
              <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-br-[20px] border-b-4 border-r-4 border-[#12568d]" />

              <div className="relative overflow-hidden rounded-[30px] bg-white pt-28 shadow-[0_30px_80px_rgba(18,86,141,0.16)]">
                <div className="absolute right-7 top-7 rounded-2xl bg-slate-900/15 px-6 py-5 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fdb713]">
                    Dholera SIR
                  </p>
                  <p className="mt-2 font-black text-white">Industrial Investment Zone</p>
                </div>

                <div className="relative h-97.5 sm:h-117.5">
                  <Image
                    src="/gallery/n1.webp"
                    alt="Samridhi 365 Industrial Plots"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7 max-w-xl rounded-[22px] border border-white/25 bg-black/55 p-6 text-white backdrop-blur-md sm:p-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fdb713]">
                      Prime Industrial Zone
                    </p>
                    <h2 className="mt-3 text-2xl font-black">Samridhi 365</h2>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      A future-ready industrial investment in Dholera Smart City
                      with strategic connectivity and sustainable planning.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-bold">
                      <FaRoad className="text-[#fdb713]" />
                      Expressway • Metro • Freight Corridor
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">Introduction</p>
              <h2 className="mt-5 max-w-5xl font-serif text-4xl font-black leading-tight text-[#12568d] sm:text-5xl">
                Samridhi 365 Industrial Plots
              </h2>
              <div className="mt-6 flex gap-3">
                <span className="h-1 w-20 bg-[#fdb713]" />
                <span className="h-1 w-10 bg-[#12568d]" />
              </div>

              <div className="mt-10 space-y-6 text-base leading-9 text-slate-600 sm:text-lg">
                <p>
                  India is poised to enter a new era of smart infrastructure.
                  Samridhi 365 Industrial Plots is one of the most promising and
                  strategically located investment destinations for industrialists,
                  business owners, and forward-thinking investors among the numerous
                  development projects forming this futuristic area.
                </p>
                <p>
                  Plots in Dholera are redefining what it means to invest in industrial
                  land because of their advantageous location close to the Tata
                  Semiconductor Plant, the Expressway, the Metro, and the Freight Corridor.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= STRATEGIC LOCATION ================= */}
        <section className="bg-[#f7fbff] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">
                Strategic Location
              </p>
              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#12568d] sm:text-5xl">
                At The Heart Of Connectivity
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-9 text-slate-600 sm:text-lg">
                The Project&apos;s greatest benefit is its unmatched location.
                The project is ideally located for logistics, warehousing, and
                industrial operations because it is close to major transportation
                infrastructure.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-9 text-slate-600 sm:text-lg">
                Moreover, the project lies right beside the High Access Corridor
                (HAC)—a vital highway engineered to support high-volume industrial
                transportation. Its strategic positioning ensures seamless connectivity.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-4xl bg-[#f2f8fc] p-6 sm:p-8"
            >
              <h3 className="text-xl font-black text-[#12568d]">
                Principal Benefits Of The Location
              </h3>
              <div className="mt-7 space-y-5">
                {locationPoints.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={reduceMotion ? undefined : { x: 5 }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                      <FaCheckCircle size={15} />
                    </span>
                    <div>
                      <p className="font-black text-[#12568d]">{item.title}</p>
                      <p className="mt-1 leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PROJECT OVERVIEW ================= */}
        <section className="bg-[#f4f9fd] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">
                Project Overview
              </p>
              <h2 className="mt-5 font-serif text-4xl font-black text-[#12568d] sm:text-5xl">
                Key Project Details
              </h2>
              <div className="mt-6 flex justify-center gap-3">
                <span className="h-1 w-20 bg-[#fdb713]" />
                <span className="h-1 w-10 bg-[#12568d]" />
              </div>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 rounded-[30px] border border-[#12568d]/15 bg-white p-5 shadow-[0_18px_55px_rgba(18,86,141,0.06)] sm:p-7"
            >
              {[
                ["Project Name", "Samridhi 365 Industrial Plots"],
                ["Location", "Dholera Smart City"],
                ["Land Type", "Industrial"],
                ["Connectivity", "Expressway, Metro & Freight Corridor"],
                ["Planning", "Smart & Sustainable Industrial Estate"],
                ["Nearby Landmark", "Tata Semiconductor Plant"],
                ["Expressway Distance", "500 M"],
              ].map(([label, value]) => (
                <motion.div
                  variants={cardReveal}
                  key={label}
                  className="mb-4 grid gap-3 rounded-2xl border border-[#12568d]/15 bg-[#f9fbfd] px-6 py-6 last:mb-0 sm:grid-cols-2 sm:items-center"
                >
                  <div className="flex items-center gap-4 font-black text-[#12568d]">
                    <span className="h-3 w-3 rounded-full bg-[#fdb713]" />
                    {label}
                  </div>
                  <div className="border-[#12568d]/10 font-semibold text-slate-600 sm:border-l sm:pl-10">
                    {value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= IDEAL LAND USE ================= */}
        <section className="bg-[#fffaf0] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">
                The Project Vision
              </p>
              <h2 className="mt-5 font-serif text-4xl font-black text-[#12568d] sm:text-5xl">
                A Smart, Sustainable Industrial Estate
              </h2>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {projectVisionPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={cardReveal}
                    whileHover={reduceMotion ? undefined : { y: -8 }}
                    className="min-h-52 rounded-[26px] border border-[#12568d]/10 bg-white p-8 shadow-sm"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12568d] text-[#fdb713]">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-7 text-xl font-black text-[#12568d]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </motion.div>
                );
              })}

              <motion.div
                variants={cardReveal}
                className="min-h-52 rounded-[26px] border border-[#12568d]/10 bg-white p-8 shadow-sm"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12568d] text-[#fdb713]">
                  <FaIndustry size={22} />
                </span>
                <h3 className="mt-7 text-xl font-black text-[#12568d]">
                  Underground Cabling &amp; Drainage
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Underground cabling and drainage systems for a clean, modern look.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= TWO FEATURE CARDS ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-4xl bg-[#12568d] p-9 text-white sm:p-11"
            >
              <FaIndustry size={27} className="text-[#fdb713]" />
              <h2 className="mt-7 font-serif text-3xl font-black">
                Dholera Smart City Advantage
              </h2>
              <p className="mt-7 text-base leading-9 text-white/80">
                Dholera, India&apos;s first Greenfield Smart City, was created as part
                of the Delhi Mumbai Industrial Corridor (DMIC) project and is planned
                with cutting-edge infrastructure, strong connectivity, and sustainable
                urban design.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-4xl bg-[#fdb713] p-9 text-[#12568d] sm:p-11"
            >
              <FaRoad size={28} />
              <h2 className="mt-7 font-serif text-3xl font-black">
                Connectivity &amp; Growth Potential
              </h2>
              <p className="mt-7 text-base leading-9">
                Expressways, freight connectivity, metro access and nearby industrial
                development make the project suitable for long-term industrial growth,
                logistics access and future appreciation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= INVESTMENT POTENTIAL ================= */}
        <section className="bg-[#12568d] py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">
                Investment Potential
              </p>
              <h2 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl">
                Why Now Is The Time To Buy
              </h2>
              <p className="mt-8 text-base leading-9 text-white/80">
                Property values in and around Dholera Smart City have been steadily
                increasing as infrastructure projects near completion. With expressways,
                the freight corridor, metro connectivity, and the upcoming Dholera
                International Airport, the city is gearing up for industrial and
                residential demand. </p>
            </motion.div>

            <motion.div
              variants={fadeRight} initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[30px] border border-white/15 bg-white/10 p-8 backdrop-blur-md"
            >
              <p className="font-black text-[#fdb713]">Why it&apos;s a smart investment:</p>
              <div className="mt-7 space-y-5">
                {investmentPoints.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                      <FaCheckCircle size={14} />
                    </span>
                    <p className="leading-8 text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PROJECT HIGHLIGHTS ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">
                  Samridhi 365
                </p>
                <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#12568d] sm:text-5xl">
                  More Than Just Land, It&apos;s A Vision
                </h2>
                <p className="mt-8 text-base leading-9 text-slate-600">
                  Its vision—to create a contemporary, environmentally friendly,
                  and well-planned industrial community that complements India&apos;s
                  growth narrative—is what sets it apart, not just its location
                  or infrastructure.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[30px] bg-[#f7fbff] p-8"
              >
                <p className="text-xl font-black text-[#12568d]">Project Highlights:</p>
                <div className="mt-7 space-y-4">
                  {projectHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={14} />
                      </span>
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= ENQUIRY ================= */}
        <section id="enquiry" className="bg-[#fff8e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="relative overflow-hidden rounded-[30px] bg-[#12568d] px-6 py-10 text-white shadow-[0_25px_70px_rgba(18,86,141,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              <div className="absolute left-0 top-0 h-1.25 w-full bg-[#fdb713]" />
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
                  <Link
                    href="tel:+919667798802"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-7 py-4 text-sm font-black uppercase text-[#12568d] transition hover:bg-white"
                  >
                    <FaPhoneAlt size={13} />
                    Call Expert
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#12568d]"
                  >
                    Enquire Now
                    <FaArrowRight size={12} className="transition-transform group-hover:translate-x-2" />
                  </Link>
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
