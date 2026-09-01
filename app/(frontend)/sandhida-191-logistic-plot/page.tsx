"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFileContract,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoad,
  FaShieldAlt,
  FaTruckMoving,
  FaWarehouse,
  FaSnowflake,
  FaBoxes,
  FaIndustry,
  FaClipboardCheck,
  FaBuilding,
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

const projectOverview = [
  ["Project Name", "Sandhida 191 Logistic Plot"],
  ["Location", "Plot 191, TP-3 A, Dholera SIR"],
  ["Land Type", "Logistic"],
  ["Land Use Permission", "Logistics"],
  ["Legal Status", "NA (Approval applied)"],
  ["Road Width", "55 metres"],
  ["Total Area", "~9,000–10,000 SQYD"],
  ["Available Plot Sizes", "1000 & 1500 SQYD"],
  ["Starting Price", "₹15,000 / Sq.yd (indicative)"],
];

const locationBenefits = [
  "Quick access to the 55-metre TP road — suitable for large vehicles and trailers.",
  "Close to the proposed Dholera International Airport.",
  "Excellent access to Dholera Expressway towards Ahmedabad.",
  "Easy movement for logistics vehicles, trucks and containers.",
  "Near the Activation Area and established manufacturing hubs.",
];

const idealUses = [
  {
    icon: FaWarehouse,
    title: "Warehouses & Distribution Centers",
  },
  {
    icon: FaSnowflake,
    title: "Cold Storage & Temperature-Controlled Facilities",
  },
  {
    icon: FaTruckMoving,
    title: "Transport Hubs, Container Yards & Fleet Parking",
  },
  {
    icon: FaBoxes,
    title: "Packaging, Dispatch Centers & Industrial Workshops",
  },
  {
    icon: FaIndustry,
    title: "Small-Scale Manufacturing & Storage Units",
  },
];

const investmentReasons = [
  {
    title: "Growth Zone",
    description:
      "TP-3 is seeing rapid industrial development and capital appreciation.",
  },
  {
    title: "Cost Advantage",
    description:
      "Dholera is comparatively affordable versus Ahmedabad, Vatva, Sanand, and Changodar.",
  },
  {
    title: "Future Appreciation",
    description:
      "Values may rise as airport, expressway and nearby industrial clusters progress.",
  },
  {
    title: "Legal Safety",
    description:
      "TP scheme documentation and planned infrastructure reduce long-term risk.",
  },
  {
    title: "Rental Demand",
    description:
      "Likely to be strong as companies set up in Activation Area and near the airport.",
  },
];

const investorNotes = [
  "Verify current NA approval status and title documents with the seller before transacting.",
  "Confirm exact road alignment & frontage at the local TP office / survey maps.",
  "Check connectivity timelines for airport and expressway to align expectation on appreciation.",
  "For custom requirements such as ramp access and utilities, plan these during the design stage to fit FAR and setbacks.",
];

const quickFacts = [
  ["FAR", "30/70"],
  ["Permitted", "G+2"],
  ["Road", "55 m"],
  ["Sizes", "1000 / 1500 SQYD"],
  ["Use", "Logistics"],
];

const legalPoints = [
  "Confirm NA approval & application reference number.",
  "Obtain encumbrance certificate (EC) from the registrar.",
  "Check TP scheme maps and any proposed changes.",
  "Cross-verify sellers and their authority to transfer.",
];

export default function Sandhida191Page() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main className="compact-page property-detail-page">
        {/* ================= SCREENSHOT STYLE HERO ================= */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#ffffff] via-white to-[#FFFFFF] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <motion.div variants={fadeLeft} initial="hidden" animate="visible">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#FF7A00]/50 bg-[#FFFFFF] px-5 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#081A3A]">
                <span className="h-3 w-3 rounded-full bg-[#FF7A00]" />
                Logistic Property
              </div>

              <h1 className="mt-7 max-w-2xl font-serif text-5xl font-black leading-[1.02] text-[#081A3A] sm:text-6xl lg:text-7xl">
                Sandhida 191 Logistic Plot
              </h1>

              <div className="mt-7 flex gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-9 bg-[#081A3A]" />
              </div>

              <p className="mt-8 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                The perfect logistics and industrial investment opportunity in
                Dholera SIR, strategically positioned for warehouses, transport
                operations, distribution centres and industrial businesses.
              </p>

              <div className="property-contact-grid mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:block sm:space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaMapMarkerAlt size={19} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2E73]">Location</p>
                    <p className="mt-1 font-black leading-6 text-[#0A2E73]">
                      Plot 191, TP-3 A, Dholera SIR
                    </p>
                  </div>
                </div>

                <Link href="tel:+919667798802" className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FFFFFF] text-[#081A3A]">
                    <FaPhoneAlt size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2E73]">Call Our Expert</p>
                    <p className="mt-1 text-lg font-black text-[#081A3A]">+91 9667798802</p>
                  </div>
                </Link>
              </div>

              <div className="property-facts-grid mt-5 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-4">
                {[
                  ["Starting Price", "₹15,000", "Per Sq.yd"],
                  ["Plot Sizes", "1000 / 1500", "SQYD"],
                  ["Road Width", "55 M", "Wide Road"],
                ].map(([label, value, sub]) => (
                  <motion.div
                    key={label}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className="rounded-2xl border border-[#081A3A]/10 bg-white p-6 shadow-[0_15px_45px_rgba(8,26,58,0.08)]"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A2E73]">{label}</p>
                    <p className="mt-3 text-xl font-black text-[#081A3A]">{value}</p>
                    <p className="mt-1 text-xs font-bold text-[#0A2E73]">{sub}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="#enquiry" className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#FF7A00] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#081A3A] transition hover:-translate-y-1">
                  Schedule Visit
                  <FaArrowRight size={12} className="transition-transform group-hover:translate-x-2" />
                </Link>
                <Link href="tel:+919667798802" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-[#081A3A]/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#081A3A]">
                  <FaPhoneAlt size={13} /> Call Now
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" animate="visible" className="relative">
              <div className="absolute -left-5 -top-5 h-20 w-20 rounded-tl-[20px] border-l-4 border-t-4 border-[#FF7A00]" />
              <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-br-[20px] border-b-4 border-r-4 border-[#081A3A]" />
              <div className="relative overflow-hidden rounded-[30px] bg-white pt-28 shadow-[0_30px_80px_rgba(8,26,58,0.16)]">
                <div className="absolute right-7 top-7 z-10 rounded-2xl bg-[#081A3A]/25 px-6 py-5 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">Dholera SIR</p>
                  <p className="mt-2 font-black text-white">TP-3 Logistic Zone</p>
                </div>

                <div className="relative h-97.5 sm:h-117.5">
                  <Image
                    src="/gallery/sandhida -191.jpeg"
                    alt="Sandhida 191 Logistic Plot"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#081A3A]/65 via-transparent to-transparent" />
                  <div className="absolute bottom-7 left-7 right-7 max-w-xl rounded-[22px] border border-white/25 bg-[#081A3A]/55 p-6 text-white backdrop-blur-md sm:p-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">Prime Logistics Zone</p>
                    <h2 className="mt-3 text-2xl font-black">Plot 191, TP-3 A</h2>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      Strategic location for logistics, warehousing and industrial operations in Dholera SIR.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-bold">
                      <FaRoad className="text-[#FF7A00]" /> 55 Metre Wide Road
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="premium-connectivity-section bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">Introduction</p>
              <h2 className="mt-5 max-w-5xl font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                The Perfect Logistics &amp; Industrial Investment Opportunity in Dholera SIR
              </h2>
              <div className="mt-6 flex gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-10 bg-[#081A3A]" />
              </div>
              <div className="mt-10 space-y-6 text-base leading-9 text-[#0A2E73] sm:text-lg">
                <p>
                  Dholera SIR has quickly become one of India&apos;s most strategic industrial and logistics destinations.
                  With world-class infrastructure, excellent connectivity, and huge government investment, Dholera is
                  transforming into the preferred choice for industries, warehouses, e-commerce hubs, transport companies,
                  and manufacturing units.
                </p>
                <p>
                  One of the most promising developments in this region is the Sandhida 191 Logistic Plot, located at TP-3.
                  Designed specifically for logistics, warehousing, and industrial operations, this project offers everything
                  a modern business needs—from strategic location to reliable connectivity, future expansion potential,
                  and legally safe land.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PROJECT OVERVIEW ================= */}
        <section className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">Project Overview</p>
              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">Key Project Details</h2>
              <div className="mt-6 flex justify-center gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-10 bg-[#081A3A]" />
              </div>
            </div>

            <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              className="mt-14 rounded-[30px] border border-[#081A3A]/15 bg-white p-5 shadow-[0_18px_55px_rgba(8,26,58,0.06)] sm:p-7">
              {projectOverview.map(([label, value]) => (
                <motion.div variants={cardReveal} key={label}
                  className="mb-4 grid gap-3 rounded-2xl border border-[#081A3A]/15 bg-[#ffffff] px-6 py-6 last:mb-0 sm:grid-cols-2 sm:items-center">
                  <div className="flex items-center gap-4 font-black text-[#081A3A]">
                    <span className="h-3 w-3 rounded-full bg-[#FF7A00]" /> {label}
                  </div>
                  <div className="border-[#081A3A]/10 font-semibold text-[#0A2E73] sm:border-l sm:pl-10">{value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= STRATEGIC LOCATION ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">Strategic Location</p>
              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                Plot 191, TP-3 — A Perfect Logistics Zone
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                The project&apos;s greatest asset is its location. Plot 191 of TP-3 is located within a strategic logistics
                area that is already experiencing fast industrial growth. With wide roads, clear zoning, and ready
                infrastructure, TP-3 is one of the most active town planning schemes in Dholera SIR.
              </p>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="premium-connectivity-panel rounded-4xl bg-[#FFFFFF] p-6 sm:p-8">
              <h3 className="text-xl font-black text-[#081A3A]">Principal Benefits Of The Location</h3>
              <div className="mt-7 space-y-5">
                {locationBenefits.map((item) => (
                  <motion.div key={item} whileHover={reduceMotion ? undefined : { x: 5 }}
                    className="premium-connectivity-item flex items-start gap-4 rounded-2xl border border-[#081A3A]/15 bg-white p-5 shadow-sm">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                      <FaCheckCircle size={15} />
                    </span>
                    <p className="leading-7 text-[#0A2E73]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= IDEAL LAND USE ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">Ideal Land Use</p>
              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Built For Logistics &amp; Industrial Operations
              </h2>
            </div>
            <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {idealUses.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={cardReveal} whileHover={reduceMotion ? undefined : { y: -8 }}
                    className="min-h-52 rounded-[26px] border border-[#081A3A]/10 bg-white p-8 shadow-sm">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-7 text-xl font-black leading-8 text-[#081A3A]">{item.title}</h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= TP-3 + 55M ROAD ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-4xl bg-[#081A3A] p-9 text-white sm:p-11">
              <FaBuilding size={28} className="text-[#FF7A00]" />
              <h2 className="mt-7 font-serif text-3xl font-black">TP-3 — Town Planning Advantages</h2>
              <p className="mt-7 text-base leading-9 text-white/80">
                TP schemes offer reliable planning: defined boundaries, wide internal roads, electricity, drainage and
                clear zoning — which reduces legal &amp; approval risk compared to unplanned land.
              </p>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-4xl bg-[#FF7A00] p-9 text-[#081A3A] sm:p-11">
              <FaRoad size={28} />
              <h2 className="mt-7 font-serif text-3xl font-black">55-Meter Road — Operational Benefits</h2>
              <p className="mt-7 text-base leading-9">
                A 55-metre road ensures smooth two-way movement for large trucks, safe loading/unloading, easy entry/exit
                for long trailers, and reduced congestion — crucial for high-volume logistics operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= AREA & PLOT SIZES ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">Total Area &amp; Plot Sizes</p>
              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">Flexible Plot Configuration</h2>
              <p className="mt-8 text-base leading-9 text-[#0A2E73] sm:text-lg">
                The project parcel is large enough to allow multiple plot configurations. Typical available plots include:
              </p>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#081A3A] p-8 text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF7A00]">Plot Size</p>
                <p className="mt-4 text-4xl font-black">1000 SQYD</p>
              </div>
              <div className="rounded-3xl bg-[#FF7A00] p-8 text-[#081A3A]">
                <p className="text-xs font-black uppercase tracking-[0.2em]">Plot Size</p>
                <p className="mt-4 text-4xl font-black">1500 SQYD</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= INVESTMENT ================= */}
        <section className="relative overflow-hidden bg-[#081A3A] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]"
              >
                Investment Potential
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black sm:text-4xl lg:text-5xl"
              >
                Why This Is A Good Investment
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {investmentReasons.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardReveal}
                  whileHover={{ y: -8 }}
                  className="rounded-[22px] border border-white/15 bg-white/10 p-6 backdrop-blur-md"
                >
                  <p className="font-black text-[#FF7A00]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= USE CASES ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-5xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]"
              >
                Use Cases &amp; Examples
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#081A3A] sm:text-4xl"
              >
                Suitable For Modern Logistics Operations
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 leading-8 text-[#0A2E73]"
              >
                Suitable uses include third-party logistics (3PL), e-commerce
                fulfillment centers, cold storage operators, spare-parts
                warehouses, container yards, fleet depots, and last-mile
                distribution centers.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ================= CONCLUSION ================= */}
        <section className="bg-[#ffffff] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl rounded-[28px] border-l-4 border-[#FF7A00] bg-white p-7 shadow-[0_15px_45px_rgba(8,26,58,0.08)] sm:p-9"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                Conclusion
              </p>

              <p className="mt-5 leading-8 text-[#0A2E73]">
                Sandhida 191 Logistic Plot (Plot 191, TP-3) is well-positioned
                to become a high-value logistics hub. With 55-metre road
                access, G+2 permission, and TP-backed infrastructure, it
                presents a compelling option for businesses and investors
                targeting the Dholera SIR logistics market.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= INVESTOR NOTES ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                  Investor Notes &amp; Next Steps
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black text-[#081A3A] sm:text-4xl">
                  Check Before You Proceed
                </h2>

                <div className="mt-7 space-y-4">
                  {investorNotes.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                        <FaClipboardCheck size={13} />
                      </span>
                      <p className="leading-7 text-[#0A2E73]">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[28px] bg-[#081A3A] p-7 text-white shadow-[0_22px_65px_rgba(8,26,58,0.22)] sm:p-9"
              >
                <p className="font-black text-[#FF7A00]">Quick Facts</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {quickFacts.map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-white/10 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/55">
                        {label}
                      </p>
                      <p className="mt-2 text-xl font-black">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= LEGAL DUE DILIGENCE ================= */}
        <section className="bg-[#ffffff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]">
                  <FaShieldAlt size={22} />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                  Legal &amp; Due Diligence
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black text-[#081A3A] sm:text-4xl">
                  Verify Documents Before Purchase
                </h2>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {legalPoints.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                      <FaFileContract size={14} />
                    </span>

                    <p className="leading-7 text-[#0A2E73]">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="enquiry" className="bg-[#FFFFFF] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 45, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="relative overflow-hidden rounded-[30px] bg-[#081A3A] px-6 py-10 text-white shadow-[0_25px_70px_rgba(8,26,58,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              <div className="absolute left-0 top-0 h-1.25 w-full bg-[#FF7A00]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                    Contact &amp; Site Visit
                  </p>

                  <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                    Interested In Sandhida 191 Logistic Plot?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    To schedule a site visit or request a detailed brochure,
                    contact the project sales team. Always perform a physical
                    inspection and demand original documents.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="tel:+919667798802"
                      className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#FF7A00] px-7 py-4 text-sm font-black uppercase text-[#081A3A] transition-colors hover:bg-white"
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
                      className="group inline-flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-sm font-black uppercase text-white transition-colors hover:bg-white hover:text-[#081A3A]"
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

        {/* ================= DISCLAIMER ================= */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-2xl border border-[#FF7A00]/25 bg-[#FFFFFF] p-6">
              <p className="font-black text-[#081A3A]">Disclaimer</p>

              <p className="mt-3 text-sm leading-7 text-white/80">
                The information on this page is for informational purposes only
                and may be indicative. Prices, approvals and availability are
                subject to change — always verify documents and approvals
                through official authorities and legal counsel before making
                any purchase.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
