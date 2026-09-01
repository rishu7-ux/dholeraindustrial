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

      <main className="compact-page property-detail-page overflow-hidden bg-white text-[#0A2E73]">
        {/* ================= HERO — SAME SCREENSHOT UI ================= */}
        <section className="relative bg-gradient-to-br from-[#ffffff] via-white to-[#FFFFFF] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            {/* LEFT */}
            <motion.div
              variants={smoothFadeLeft}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#FF7A00]/50 bg-[#FFFFFF] px-5 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#081A3A]">
                <span className="h-3 w-3 rounded-full bg-[#FF7A00]" />
                Industrial Property
              </div>

              <h1 className="mt-7 max-w-2xl font-serif text-5xl font-black leading-[1.02] text-[#081A3A] sm:text-6xl lg:text-7xl">
                Samridhi 621 Panchi Industrial Plots
              </h1>

              <div className="mt-7 flex gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-9 bg-[#081A3A]" />
              </div>

              <p className="mt-8 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                A premium industrial opportunity in Dholera SIR near the Tata
                Semiconductor Plant, Expressway, Metro and Dedicated Freight
                Corridor, designed for manufacturing, logistics and long-term
                investment growth.
              </p>

              <div className="property-contact-grid mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:block sm:space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaMapMarkerAlt size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2E73]">
                      Location
                    </p>

                    <p className="mt-1 font-black leading-6 text-[#0A2E73]">
                      Near Tata Semiconductor Plant, Expressway, Metro &amp;
                      Freight Corridor
                    </p>
                  </div>
                </div>

                <Link
                  href="tel:+919667798802"
                  className="flex items-center gap-4"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FFFFFF] text-[#081A3A]">
                    <FaPhoneAlt size={17} />
                  </span>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2E73]">
                      Call Our Expert
                    </p>

                    <p className="mt-1 text-lg font-black text-[#081A3A]">
                      +91 9667798802
                    </p>
                  </div>
                </Link>
              </div>

              <div className="property-facts-grid mt-5 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-4">
                {[
                  ["Starting Price", "₹85,00,000*", "Only"],
                  ["Plot Sizes", "1318 / 1865", "1882 Sq. Yd."],
                  ["Road Width", "48 Meter", "Wide Road"],
                ].map(([label, value, sub]) => (
                  <motion.div
                    key={label}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className="rounded-2xl border border-[#081A3A]/10 bg-white p-6 shadow-[0_15px_45px_rgba(8,26,58,0.08)]"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A2E73]">
                      {label}
                    </p>

                    <p className="mt-3 text-xl font-black text-[#081A3A]">
                      {value}
                    </p>

                    <p className="mt-1 text-xs font-bold text-[#0A2E73]">
                      {sub}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#enquiry"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#FF7A00] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#081A3A] transition hover:-translate-y-1"
                >
                  Schedule Visit

                  <FaArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>

                <Link
                  href="tel:+919667798802"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-[#081A3A]/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#081A3A]"
                >
                  <FaPhoneAlt size={13} />
                  Call Now
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={smoothFadeRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-20 w-20 rounded-tl-[20px] border-l-4 border-t-4 border-[#FF7A00]" />
              <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-br-[20px] border-b-4 border-r-4 border-[#081A3A]" />

              <div className="relative overflow-hidden rounded-[30px] bg-white pt-28 shadow-[0_30px_80px_rgba(8,26,58,0.16)]">
                <div className="absolute right-7 top-7 rounded-2xl bg-[#081A3A]/25 px-6 py-5 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                    Dholera SIR
                  </p>

                  <p className="mt-2 font-black text-white">
                    Industrial Investment Zone
                  </p>
                </div>

                <div className="relative h-[390px] sm:h-[470px]">
                  <Image
                    src="/gallery/industrial Land.webp"
                    alt="Samridhi 621 Panchi Industrial Plots"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A3A]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7 max-w-xl rounded-[22px] border border-white/25 bg-[#081A3A]/55 p-6 text-white backdrop-blur-md sm:p-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                      Prime Industrial Zone
                    </p>

                    <h2 className="mt-3 text-2xl font-black">
                      Samridhi 621 Panchi
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-white/80">
                      Industrial plots with strategic access to the Tata
                      Semiconductor Plant, Metro, Airport, Expressway and DFC.
                    </p>

                    <p className="mt-4 flex items-center gap-2 text-sm font-bold">
                      <FaRoad className="text-[#FF7A00]" />
                      48 Meter Wide Road
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
            <motion.div
              variants={smoothFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Introduction
              </p>

              <h2 className="mt-5 max-w-5xl font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                Samridhi 621 Panchi Industrial Plots
              </h2>

              <div className="mt-6 flex gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-10 bg-[#081A3A]" />
              </div>

              <div className="mt-10 space-y-6 text-base leading-9 text-[#0A2E73] sm:text-lg">
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

                <div className="rounded-3xl border-l-4 border-[#FF7A00] bg-[#ffffff] p-6 text-[#081A3A] shadow-sm sm:p-8">
                  <p className="font-semibold leading-8">
                    It is worth looking at if you&apos;re an investor,
                    manufacturer, or business owner looking for an industrial
                    land opportunity with a high return on investment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= LOCATION ADVANTAGE ================= */}
        <section className="premium-connectivity-section bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <motion.div
              variants={smoothFadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Strategic Location
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                Business-Driven Connectivity
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                Dholera Industrial Plot has an ideal location within the Dholera
                SIR region—a smart city emerging as India&apos;s next industrial
                powerhouse—and is among the best arguments for investing in the
                property.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                Top-notch infrastructure surrounds the project, guaranteeing
                that your company is always connected to important markets and
                trade routes.
              </p>
            </motion.div>

            <motion.div
              variants={smoothFadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="premium-connectivity-panel rounded-[32px] bg-[#FFFFFF] p-6 sm:p-8"
            >
              <h3 className="text-xl font-black text-[#081A3A]">
                Principal Benefits Of The Location
              </h3>

              <div className="mt-7 space-y-5">
                {locationPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={reduceMotion ? undefined : { x: 5 }}
                      className="premium-connectivity-item flex items-start gap-4 rounded-2xl border border-[#081A3A]/15 bg-white p-5 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                        <Icon size={15} />
                      </span>

                      <div>
                        <p className="font-black text-[#081A3A]">
                          {item.title}
                        </p>

                        <p className="mt-1 leading-7 text-[#0A2E73]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PROJECT OVERVIEW ================= */}
        <section className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Project Overview
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Key Project Details
              </h2>

              <div className="mt-6 flex justify-center gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-10 bg-[#081A3A]" />
              </div>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 rounded-[30px] border border-[#081A3A]/15 bg-white p-5 shadow-[0_18px_55px_rgba(8,26,58,0.06)] sm:p-7"
            >
              {[
                ["Project Name", "Samridhi 621 Panchi Industrial Plots"],
                [
                  "Location",
                  "Near Tata Semiconductor Plant, Expressway, Metro & Freight Corridor",
                ],
                ["Starting Price", "₹85,00,000* only"],
                ["Plot Sizes", "1318 | 1865 | 1882 Sq. Yd."],
                ["Road Width", "48 Meter"],
                ["Status", "Ready for industrial and logistic development"],
                ["Airport", "Approx. 10 km from Dholera International Airport"],
              ].map(([label, value]) => (
                <motion.div
                  variants={smoothCard}
                  key={label}
                  className="mb-4 grid gap-3 rounded-2xl border border-[#081A3A]/15 bg-[#ffffff] px-6 py-6 last:mb-0 sm:grid-cols-2 sm:items-center"
                >
                  <div className="flex items-center gap-4 font-black text-[#081A3A]">
                    <span className="h-3 w-3 rounded-full bg-[#FF7A00]" />
                    {label}
                  </div>

                  <div className="border-[#081A3A]/10 font-semibold text-[#0A2E73] sm:border-l sm:pl-10">
                    {value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= PROJECT HIGHLIGHTS ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Project Highlights
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Ready For Industrial &amp; Logistic Development
              </h2>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-7 md:grid-cols-2"
            >
              {projectHighlights.map((item) => (
                <motion.div
                  key={item}
                  variants={smoothCard}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  className="flex min-h-36 items-start gap-5 rounded-[26px] border border-[#081A3A]/10 bg-white p-7 shadow-sm"
                >
                  <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaCheckCircle size={17} />
                  </span>

                  <p className="font-black leading-8 text-[#081A3A]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= FACILITIES ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Facilities Include
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Future-Ready Infrastructure
              </h2>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {facilities.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={smoothCard}
                    whileHover={reduceMotion ? undefined : { y: -8 }}
                    className="min-h-52 rounded-[26px] border border-[#081A3A]/10 bg-white p-8 shadow-sm"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]">
                      <Icon size={22} />
                    </span>

                    <h3 className="mt-7 text-xl font-black leading-8 text-[#081A3A]">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= TWO FEATURE CARDS ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={smoothFadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[32px] bg-[#081A3A] p-9 text-white sm:p-11"
            >
              <FaCity size={28} className="text-[#FF7A00]" />

              <h2 className="mt-7 font-serif text-3xl font-black">
                Why Choose Dholera?
              </h2>

              <p className="mt-7 text-base leading-9 text-white/80">
                Dholera is a visionary development created under the Delhi-Mumbai
                Industrial Corridor (DMIC) initiative and is being developed
                with smart infrastructure, government support and global
                investment potential.
              </p>
            </motion.div>

            <motion.div
              variants={smoothFadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[32px] bg-[#FF7A00] p-9 text-[#081A3A] sm:p-11"
            >
              <FaRoad size={28} />

              <h2 className="mt-7 font-serif text-3xl font-black">
                Connectivity &amp; Growth Potential
              </h2>

              <p className="mt-7 text-base leading-9">
                Metro connectivity, Dholera International Airport, Dedicated
                Freight Corridor and Expressway access provide a strong
                foundation for manufacturing, logistics and long-term growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= WHY DHOLERA ================= */}
        <section className="bg-[#081A3A] py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={smoothFadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Why Choose Dholera For Industrial Investment?
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl">
                A Visionary Development Under DMIC
              </h2>

              <p className="mt-8 text-base leading-9 text-white/80">
                Dholera is not just another industrial area; it&apos;s a
                visionary development created under the Delhi-Mumbai Industrial
                Corridor (DMIC) initiative — a multi-billion-dollar
                infrastructure project connecting India&apos;s key economic hubs.
              </p>
            </motion.div>

            <motion.div
              variants={smoothFadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[30px] border border-white/15 bg-white/10 p-8 backdrop-blur-md"
            >
              <p className="font-black text-[#FF7A00]">
                Key reasons industries are choosing Dholera:
              </p>

              <div className="mt-7 space-y-5">
                {whyDholera.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                      <FaCheckCircle size={14} />
                    </span>

                    <p className="leading-8 text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= INVESTMENT POTENTIAL ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Investment Potential &amp; ROI Outlook
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Growth Drivers Around Dholera
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <motion.div
                variants={smoothFadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[30px] bg-white p-8 shadow-[0_15px_45px_rgba(8,26,58,0.08)]"
              >
                <p className="text-xl font-black text-[#081A3A]">
                  Key Growth Drivers
                </p>

                <div className="mt-7 space-y-5">
                  {roiDrivers.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                        <FaCheckCircle size={14} />
                      </span>

                      <p className="leading-8 text-[#0A2E73]">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={smoothFadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[30px] bg-[#081A3A] p-8 text-white"
              >
                <p className="text-xl font-black text-[#FF7A00]">
                  This Makes It An Ideal Choice For:
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {idealFor.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={reduceMotion ? undefined : { y: -5 }}
                        className="rounded-2xl bg-white/10 p-5"
                      >
                        <Icon className="text-[#FF7A00]" size={20} />

                        <p className="mt-4 font-black">{item.title}</p>

                        <p className="mt-2 text-sm leading-7 text-white/75">
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
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={smoothFadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Comparative Advantage
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                Over Other Industrial Zones
              </h2>

              <p className="mt-8 text-base leading-9 text-[#0A2E73]">
                When compared to traditional industrial areas like Sanand,
                Dahej, or Mundra, Dholera SIR — and particularly Samridhi 621
                Panchi — offers several strategic advantages.
              </p>
            </motion.div>

            <motion.div
              variants={smoothFadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[30px] bg-[#ffffff] p-8"
            >
              <div className="space-y-4">
                {comparativeAdvantages.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                      <FaCheckCircle size={14} />
                    </span>

                    <span className="font-semibold text-[#0A2E73]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= AMENITIES ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Amenities
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Infrastructure &amp; Investor Support
              </h2>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {amenities.map((item) => (
                <motion.div
                  key={item}
                  variants={smoothCard}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  className="flex items-start gap-4 rounded-[22px] border border-[#081A3A]/10 bg-white p-5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                    <FaCheckCircle size={14} />
                  </span>

                  <p className="font-semibold leading-7 text-[#0A2E73]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= ENQUIRY ================= */}
        <section id="enquiry" className="bg-[#FFFFFF] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="relative overflow-hidden rounded-[30px] bg-[#081A3A] px-6 py-10 text-white shadow-[0_25px_70px_rgba(8,26,58,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              <div className="absolute left-0 top-0 h-[5px] w-full bg-[#FF7A00]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
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
                  <Link
                    href="tel:+919667798802"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#FF7A00] px-7 py-4 text-sm font-black uppercase text-[#081A3A] transition hover:bg-white"
                  >
                    <FaPhoneAlt size={13} />
                    Call Expert
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#081A3A]"
                  >
                    Enquire Now

                    <FaArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-2"
                    />
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
