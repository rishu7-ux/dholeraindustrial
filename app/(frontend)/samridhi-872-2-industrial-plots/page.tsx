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
  FaWarehouse,
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
  ["Project Name", "Samridhi 872/2 Industrial Plot"],
  ["Location", "Near the Expressway, Metro, and Freight Corridor"],
  ["Project Type", "Industrial Plot"],
  ["Registration", "Government-Registered"],
  ["Main Road", "70 metres"],
  ["Secondary Road", "48 metres"],
  ["Expressway", "2-3 Minutes"],
  ["Metro Station", "5 Minutes"],
  ["Freight Corridor", "10 Minutes"],
];

const locationBenefits = [
  "Being close to an expressway guarantees easy access to important industrial cities and logistical hubs.",
  "Metro Access provides future workers and residents with quick, environmentally friendly transportation.",
  "The Freight Corridor places the project close to India's main industrial transportation hub, making cargo transportation simple.",
];

const idealUses = [
  {
    icon: FaBuilding,
    title: "Tree-Lined Streets — Fresh Air, Natural Shade & A Revitalizing Atmosphere",
  },
  {
    icon: FaIndustry,
    title: "Green Landscapes — Carefully Planned To Preserve A Natural Ecosystem",
  },
  {
    icon: FaRoad,
    title: "Solar Lighting — Renewable Energy With Lower Energy Requirements",
  },
  {
    icon: FaWarehouse,
    title: "Rainwater Harvesting — Water Conservation & Long-Term Ecological Balance",
  },
  {
    icon: FaCheckCircle,
    title: "Sustainable Planning For Residential & Commercial Users",
  },
];

const investmentReasons = [
  {
    title: "Expressway Connectivity",
    description:
      "Expressway access supports convenient movement to important industrial cities and logistical hubs.",
  },
  {
    title: "Metro Access",
    description:
      "Future Metro connectivity can provide quick and environmentally friendly transportation for workers and residents.",
  },
  {
    title: "Freight Corridor",
    description:
      "The Dedicated Freight Corridor places the project close to a major industrial transportation network.",
  },
  {
    title: "Government-Registered",
    description:
      "The project is presented as government-registered with paperwork, land titles and registrations confirmed.",
  },
  {
    title: "Future-Ready Planning",
    description:
      "Wide roads, landscaping, solar lighting and rainwater harvesting support sustainable long-term development.",
  },
];

const investorNotes = [
  "Verify the current project registration, land title and ownership documents before purchase.",
  "Confirm zoning approvals and permitted land use through the relevant authorities.",
  "Check the latest Expressway, Metro and Dedicated Freight Corridor connectivity timelines.",
  "Verify internal road alignment, drainage, utilities and other infrastructure during the site visit.",
];

const quickFacts = [
  ["Expressway", "2-3 Minutes"],
  ["Metro Station", "5 Minutes"],
  ["Freight Corridor", "10 Minutes"],
  ["Main Road", "70 m"],
  ["Secondary Road", "48 m"],
  ["Smart City Zone", "Nearby"],
];

const legalPoints = [
  "Confirm government registration and all applicable approval documents.",
  "Verify land title, legal ownership and zoning approvals.",
  "Check project boundaries, road alignment and official planning documents.",
  "Cross-verify the seller's authority and all transfer documentation before purchase.",
];


export default function Samridhi872Page() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main className="compact-page property-detail-page overflow-hidden bg-white text-[#0A2E73]">
        {/* ================= HERO — SAME SCREENSHOT UI ================= */}
        <section className="relative bg-linear-to-br from-[#ffffff] via-white to-[#FFFFFF] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            {/* LEFT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#FF7A00]/50 bg-[#FFFFFF] px-5 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#081A3A]">
                <span className="h-3 w-3 rounded-full bg-[#FF7A00]" />
                Industrial Property
              </div>

              <h1 className="mt-7 max-w-2xl font-serif text-5xl font-black leading-[1.02] text-[#081A3A] sm:text-6xl lg:text-7xl">
                Samridhi 872/2 Industrial Plot
              </h1>

              <div className="mt-7 flex gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-9 bg-[#081A3A]" />
              </div>

              <p className="mt-8 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                An unprecedented opportunity near the Expressway, Metro and
                Dedicated Freight Corridor, combining government-backed planning,
                sustainable design and wide-road infrastructure.
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
                      Near the Expressway, Metro, and Freight Corridor
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
                  ["Main Road", "70 Meter", "Wide Road"],
                  ["Secondary Road", "48 Meter", "Internal Road"],
                  ["Connectivity", "Expressway", "Metro • DFC"],
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
              variants={fadeRight}
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

                <div className="relative h-97.5 sm:h-117.5">
                  <Image
                    src="/gallery/psamridhi-872-2.webp"
                    alt="Samridhi 872/2 Industrial Plot"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#081A3A]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7 max-w-xl rounded-[22px] border border-white/25 bg-[#081A3A]/55 p-6 text-white backdrop-blur-md sm:p-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                      Prime Industrial Zone
                    </p>

                    <h2 className="mt-3 text-2xl font-black">
                      Samridhi 872/2
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-white/80">
                      Sustainable industrial development near the Expressway,
                      Metro and Dedicated Freight Corridor with 70 m and 48 m roads.
                    </p>

                    <p className="mt-4 flex items-center gap-2 text-sm font-bold">
                      <FaRoad className="text-[#FF7A00]" />
                      70 Meter Main Road • 48 Meter Secondary Road
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Introduction
              </p>

              <h2 className="mt-5 max-w-5xl font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                Samridhi 872/2 Industrial Plot: An Unprecedented Chance
              </h2>

              <div className="mt-6 flex gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-10 bg-[#081A3A]" />
              </div>

              <div className="mt-10 space-y-6 text-base leading-9 text-[#0A2E73] sm:text-lg">
                <p>
                  One of those unique opportunities that emerges when opportunity
                  and planning align is the Metro &amp; Freight Corridor Industrial
                  Plot, which is located close to the expressway. Taking advantage
                  of its prime location close to the Expressway, Metro, and
                  Dedicated Freight Corridor, this development is transforming
                  modern industrial and residential areas with government support.
                  With its tree-lined streets, lush landscaping, solar lighting,
                  rainwater collection, and broad 70- and 48-meter roads,
                  Samridhi 872/2 is more than just a plot—it&apos;s a blueprint
                  for sustainable, future-ready growth.
                </p>

                <p>
                  Whether you&apos;re an investor, industrialist, or homebuilder,
                  this region offers unmatched access, government approvals,
                  and the potential for long-term appreciation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= STRATEGIC LOCATION ================= */}
        <section className="premium-connectivity-section bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Strategic Location
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                The Power Of Connectivity
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                Location is the foundation of real estate value, and Samridhi
                872/2 is in an ideal location. This project has direct access
                to some of India&apos;s most ambitious infrastructure networks
                because of its proximity to the Expressway, the future Metro
                station, and the Dedicated Freight Corridor.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-9 text-[#0A2E73] sm:text-lg">
                In addition to improving convenience, this tri-corridor connectivity
                strengthens the project&apos;s long-term investment position.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="premium-connectivity-panel rounded-4xl bg-[#FFFFFF] p-6 sm:p-8"
            >
              <h3 className="text-xl font-black text-[#081A3A]">
                Principal Benefits Of The Location
              </h3>

              <div className="mt-7 space-y-5">
                {locationBenefits.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={reduceMotion ? undefined : { x: 5 }}
                    className="premium-connectivity-item flex items-start gap-4 rounded-2xl border border-[#081A3A]/15 bg-white p-5 shadow-sm"
                  >
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
              {projectOverview.map(([label, value]) => (
                <motion.div
                  variants={cardReveal}
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

        {/* ================= GREEN & SUSTAINABLE DESIGN ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Green &amp; Sustainable Design
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Where Nature Meets Progress
              </h2>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {idealUses.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardReveal}
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
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-4xl bg-[#081A3A] p-9 text-white sm:p-11"
            >
              <FaBuilding size={28} className="text-[#FF7A00]" />

              <h2 className="mt-7 font-serif text-3xl font-black">
                Government-Registered And Legally Secure
              </h2>

              <p className="mt-7 text-base leading-9 text-white/80">
                Transparency is the foundation of trust in real estate. Since
                Samridhi 872/2 is a government-registered project, buyers can
                invest with greater confidence. The project is presented with
                confirmed paperwork, land titles and registrations, together
                with clear zoning approvals and legal ownership.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-4xl bg-[#FF7A00] p-9 text-[#081A3A] sm:p-11"
            >
              <FaRoad size={28} />

              <h2 className="mt-7 font-serif text-3xl font-black">
                Smart Infrastructure With Wide Roads
              </h2>

              <p className="mt-7 text-base leading-9">
                With its 70-meter main road and 48-meter secondary road,
                Samridhi 872/2 sets a new benchmark. These roads are wide
                enough to facilitate easy traffic, logistics and future growth,
                with room for cars, transport trucks and pedestrians.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= LOCATION HIGHLIGHTS ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Location Highlight
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Key Connectivity Features
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Expressway", "2-3 Minutes"],
                ["Metro Station", "5 Minutes"],
                ["Freight Corridor", "10 Minutes"],
                ["Smart City Zone", "Nearby"],
                ["Hospitals & Schools", "Within Reach"],
                ["Shopping & Dining", "10-15 Minutes"],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  className="rounded-3xl border border-[#081A3A]/10 bg-white p-7 shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaCheckCircle size={17} />
                  </span>

                  <p className="mt-6 text-lg font-black text-[#081A3A]">
                    {label}
                  </p>

                  <p className="mt-2 font-semibold text-[#0A2E73]">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INVESTMENT ================= */}
        <section className="bg-[#081A3A] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Investment Potential
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black sm:text-5xl">
                The Power Of Connectivity &amp; Future Growth
              </h2>
            </div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {investmentReasons.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardReveal}
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md"
                >
                  <p className="text-lg font-black text-[#FF7A00]">
                    {item.title}
                  </p>

                  <p className="mt-4 leading-8 text-white/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SUSTAINABLE PLANNING ================= */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Sustainable Planning
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Green &amp; Sustainable Design
              </h2>

              <p className="mt-8 text-base leading-9 text-[#0A2E73] sm:text-lg">
                Beyond concrete, contemporary investors are searching for areas
                that complement sustainability, design, and sophisticated planning.
                Samridhi 872/2 combines tree-lined streets, green landscapes,
                solar lighting and rainwater harvesting to create a sustainable,
                future-ready environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= INVESTOR NOTES + QUICK FACTS ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Investor Notes &amp; Next Steps
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Check Before You Proceed
              </h2>

              <div className="mt-8 space-y-5">
                {investorNotes.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                      <FaClipboardCheck size={14} />
                    </span>

                    <p className="leading-8 text-[#0A2E73]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[30px] bg-[#081A3A] p-8 text-white"
            >
              <p className="text-xl font-black text-[#FF7A00]">
                Quick Facts
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {quickFacts.map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/55">
                      {label}
                    </p>

                    <p className="mt-2 text-xl font-black">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= LEGAL ================= */}
        <section className="bg-[#ffffff] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]">
                <FaShieldAlt size={22} />
              </span>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Legal &amp; Due Diligence
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
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
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-[#081A3A]">
                    <FaFileContract size={14} />
                  </span>

                  <p className="leading-8 text-[#0A2E73]">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="enquiry" className="bg-[#FFFFFF] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                    Interested In Samridhi 872/2 Industrial Plot?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    Talk with our team about Samridhi 872/2, its connectivity,
                    project planning, documentation and current availability.
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

        {/* ================= DISCLAIMER ================= */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-2xl border border-[#FF7A00]/25 bg-[#FFFFFF] p-6">
              <p className="font-black text-[#081A3A]">Disclaimer</p>

              <p className="mt-3 text-sm leading-7 text-[#0A2E73]">
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
