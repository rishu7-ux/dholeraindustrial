"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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
  FaShieldAlt,
  FaHospital,
  FaShoppingBag,
} from "react-icons/fa";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";

/* =========================================================
   ANIMATIONS
========================================================= */

const smoothEase = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const fromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const fromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const connectivity = [
  {
    icon: FaRoad,
    title: "Expressway",
    description:
      "Being close to an expressway guarantees easy access to important industrial cities and logistical hubs.",
  },
  {
    icon: FaSubway,
    title: "Metro Access",
    description:
      "Metro Access provides future workers and residents with quick, environmentally friendly transportation.",
  },
  {
    icon: FaTruckMoving,
    title: "Freight Corridor",
    description:
      "The Freight Corridor places the project close to India's main industrial transportation hub, making cargo transportation simple.",
  },
];

const locationHighlights = [
  {
    icon: FaRoad,
    title: "Expressway",
    value: "2-3 Minutes",
  },
  {
    icon: FaSubway,
    title: "Metro Station",
    value: "5 Minutes",
  },
  {
    icon: FaTruckMoving,
    title: "Freight Corridor",
    value: "10 Minutes",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Smart City Zone",
    value: "Nearby",
  },
  {
    icon: FaHospital,
    title: "Hospitals & Schools",
    value: "Within Reach",
  },
  {
    icon: FaShoppingBag,
    title: "Shopping & Dining",
    value: "10-15 Minutes",
  },
];

const sustainableFeatures = [
  {
    icon: FaLeaf,
    title: "Tree-Lined Streets",
    description:
      "Providing fresh air, natural shade, and a revitalizing atmosphere.",
  },
  {
    icon: FaLeaf,
    title: "Green Landscapes",
    description:
      "Crafted with careful planting to preserve a natural ecosystem.",
  },
  {
    icon: FaSolarPanel,
    title: "Solar Lighting",
    description:
      "Encourages the use of renewable energy while lowering energy expenses.",
  },
  {
    icon: FaTint,
    title: "Rainwater Harvesting",
    description:
      "Guarantees long-term ecological balance and water conservation.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function Samridhi872Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main className="overflow-hidden">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-155 overflow-hidden lg:min-h-175">
          {/* Background Image */}

          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.8,
              ease: smoothEase,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/gallery/psamridhi 872:2.webp"
              alt="Samridhi 872/2 Industrial Plot"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Hero overlay - no hover effect */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/15" />

          {/* Floating yellow glow */}

          <motion.div
            animate={{
              x: [-30, 30, -30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#fdb713]/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-end px-4 pb-14 pt-28 sm:px-6 lg:min-h-175 lg:px-8 lg:pb-20">
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
              className="relative w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/20 bg-[#12568d]/90 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              {/* Yellow Top Line */}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                }}
                className="absolute left-0 top-0 h-1.25 w-full origin-left bg-[#fdb713]"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Industrial Property
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="mt-4 font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
              >
                Samridhi 872/2 Industrial Plot
              </motion.h1>

              {/* Location */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                  <FaMapMarkerAlt
                    size={16}
                    className="mt-1 shrink-0 text-[#fdb713]"
                  />

                  <span>
                    Near the Expressway, Metro, and Freight Corridor
                  </span>
                </div>

                <Link
                  href="tel:+919667798802"
                  className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#fdb713]"
                >
                  <FaPhoneAlt
                    size={14}
                    className="text-[#fdb713]"
                  />

                  +91 9667798802
                </Link>
              </motion.div>

              <div className="my-7 h-px bg-white/20" />

              {/* Highlights */}

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-5 sm:grid-cols-3"
              >
                <motion.div variants={fadeUp}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Property
                  </p>

                  <p className="mt-2 font-black">
                    Industrial Plot
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Main Road
                  </p>

                  <p className="mt-2 text-xl font-black text-[#fdb713]">
                    70 Meter
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    Secondary Road
                  </p>

                  <p className="mt-2 font-black">
                    48 Meter
                  </p>
                </motion.div>
              </motion.div>

              {/* Buttons */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="#enquiry"
                    className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#12568d] transition-colors duration-300 hover:bg-white"
                  >
                    Schedule Visit

                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="tel:+919667798802"
                    className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[#12568d]"
                  >
                    <FaPhoneAlt size={13} />

                    Call Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="mx-auto max-w-5xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Samridhi 872/2
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl"
              >
                An Unprecedented Investment Opportunity
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="mt-5 flex gap-2"
              >
                <span className="h-0.75 w-16 bg-[#fdb713]" />
                <span className="h-0.75 w-8 bg-[#12568d]" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 space-y-6 text-[15px] leading-8 text-slate-600 sm:text-base"
              >
                <p>
                  Samridhi 872/2 Industrial Plot: An Unprecedented
                  Chance. One of those unique opportunities that emerges
                  when opportunity and planning align is the Metro &
                  Freight Corridor Industrial Plot, which is located close
                  to the expressway.
                </p>

                <p>
                  Taking advantage of its prime location close to the
                  Expressway, Metro, and Dedicated Freight Corridor, this
                  development is transforming modern industrial and
                  residential areas with government support.
                </p>

                {/* Special Highlight Card */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="relative overflow-hidden rounded-3xl border-l-4 border-[#fdb713] bg-[#f7fbff] p-6 shadow-[0_15px_45px_rgba(18,86,141,0.08)] sm:p-8"
                >
                  <p className="relative z-10 font-semibold leading-8 text-[#12568d]">
                    With its tree-lined streets, lush landscaping, solar
                    lighting, rainwater collection, and broad 70- and
                    48-meter roads, Samridhi 872/2 is more than just a
                    plot—it&apos;s a blueprint for sustainable,
                    future-ready growth.
                  </p>
                </motion.div>

                <p>
                  Whether you&apos;re an investor, industrialist, or
                  homebuilder, this region offers unmatched access,
                  government approvals, and the potential for long-term
                  appreciation.
                </p>

                <p>
                  Let&apos;s look at why Industrial Plot is quickly rising
                  to the top of Gujarat&apos;s real estate investment list.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            STRATEGIC LOCATION
        ====================================================== */}

        <section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Strategic Location
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl lg:text-5xl"
              >
                The Power Of Connectivity
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600"
              >
                Location is the foundation of real estate value, and
                Samridhi 872/2 is in an ideal location. This project has
                direct access to some of India&apos;s most ambitious
                infrastructure networks because of its proximity to the
                Expressway, the future Metro station, and the Dedicated
                Freight Corridor.
              </motion.p>
            </motion.div>

            {/* Connectivity Cards */}

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-6 md:grid-cols-3"
            >
              {connectivity.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardAnimation}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-[#12568d]/10 bg-white p-7 shadow-[0_15px_45px_rgba(18,86,141,0.08)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(18,86,141,0.15)]"
                  >
                    {/* Yellow top line */}

                    <div className="absolute left-0 top-0 h-1 w-0 bg-[#fdb713] transition-all duration-500 group-hover:w-full" />

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.1,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12568d] text-[#fdb713]"
                    >
                      <Icon size={22} />
                    </motion.div>

                    <h3 className="mt-5 text-xl font-black text-[#12568d]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto mt-10 max-w-5xl text-center leading-8 text-slate-600"
            >
              In addition to improving convenience, this tri-corridor
              connectivity raises property values. The demand for
              strategically located, registered plots like Samridhi 872/2
              is anticipated to increase as these massive infrastructure
              projects get closer to completion.
            </motion.p>
          </div>
        </section>

        {/* =====================================================
            LOCATION HIGHLIGHTS
        ====================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Location Highlight
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl"
              >
                Everything Within Reach
              </motion.h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {locationHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardAnimation}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="group flex items-center gap-5 rounded-[20px] border border-slate-100 bg-white p-6 shadow-[0_12px_35px_rgba(18,86,141,0.08)] transition-all duration-500 hover:border-[#fdb713]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713] transition-all duration-300 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-500">
                        {item.title}
                      </p>

                      <p className="mt-1 text-lg font-black text-[#12568d]">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-10 max-w-4xl text-center leading-8 text-slate-600"
            >
              Its proximity to urban and industrial hubs ensures that
              residents, workers, and investors enjoy the best of both
              worlds — peaceful green surroundings and modern
              connectivity.
            </motion.p>
          </div>
        </section>

        {/* =====================================================
            GOVERNMENT REGISTERED
        ====================================================== */}

        <section className="bg-[#12568d] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                variants={fromLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fdb713] text-[#12568d]">
                  <FaShieldAlt size={27} />
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Buyer Confidence
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black sm:text-4xl">
                  Government-Registered And Legally Secure
                </h2>
              </motion.div>

              <motion.div
                variants={fromRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-md sm:p-9"
              >
                <p className="leading-8 text-white/80">
                  Transparency is the foundation of trust in real estate.
                  Since Samridhi 872/2 is a government-registered project,
                  all buyers can feel secure and at ease. It is a totally
                  safe investment because all paperwork, land titles, and
                  registrations have been confirmed.
                </p>

                <p className="mt-5 leading-8 text-white/80">
                  With clear zoning approvals, legal ownership, and
                  protection from local and state laws, buyers can invest
                  with confidence.
                </p>

                <div className="mt-7 flex items-center gap-3 text-[#fdb713]">
                  <FaCheckCircle />

                  <span className="font-bold">
                    Government Registered Project
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GREEN DESIGN
        ====================================================== */}

        <section className="bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Sustainable Development
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl"
              >
                Green & Sustainable Design — Where Nature Meets Progress
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600"
              >
                Beyond concrete, contemporary investors are searching for
                areas that complement sustainability, design, and
                sophisticated planning. The goal of Samridhi 872/2 is to
                create a sustainable, green community with elements that
                combine technology and the natural world.
              </motion.p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {sustainableFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardAnimation}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    className="group relative overflow-hidden rounded-[22px] bg-white p-6 shadow-[0_15px_45px_rgba(18,86,141,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713] transition-all duration-300 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-black text-[#12568d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#fdb713] transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-10 max-w-5xl text-center leading-8 text-slate-600"
            >
              In addition to improving living standards and long-term
              property value, this emphasis on sustainability lessens its
              negative effects on the environment. These features offer
              efficiency and prestige to both residential and commercial
              users.
            </motion.p>
          </div>
        </section>

        {/* =====================================================
            SMART INFRASTRUCTURE
        ====================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {/* Image */}

            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Corner borders */}

              <div className="absolute -left-3 -top-3 h-14 w-14 rounded-tl-xl border-l-[3px] border-t-[3px] border-[#fdb713]" />

              <div className="absolute -bottom-3 -right-3 h-14 w-14 rounded-br-xl border-b-[3px] border-r-[3px] border-[#12568d]" />

              <div className="relative h-[400px] overflow-hidden rounded-[26px] shadow-[0_20px_60px_rgba(18,86,141,0.15)] sm:h-[500px]">
                <Image
                  src="/gallery/psamridhi 872:2.webp"
                  alt="Samridhi 872/2 infrastructure"
                  fill
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
            </motion.div>

            {/* Content */}

            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                Smart Infrastructure
              </p>

              <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                Wide Roads And Modern Urban Planning
              </h2>

              <div className="mt-5 flex gap-2">
                <span className="h-[3px] w-16 bg-[#fdb713]" />
                <span className="h-[3px] w-8 bg-[#12568d]" />
              </div>

              <div className="mt-7 space-y-5 leading-8 text-slate-600">
                <p>
                  The foundation of any development is its
                  infrastructure. With its 70-meter main road and
                  48-meter secondary road, Samridhi 872/2 sets a new
                  benchmark. These roads are sufficiently wide to
                  facilitate easy traffic, logistics, and future growth.
                </p>

                <p>
                  Both residential and industrial activities can move
                  around easily thanks to these well-planned roads.
                  Safety and convenience are guaranteed by plenty of
                  room for cars, transport trucks, and pedestrians.
                </p>

                <p>
                  Long-term urban sustainability was taken into
                  consideration when designing the project&apos;s interior
                  layout, which also includes utility corridors, adequate
                  drainage, and street lighting.
                </p>

                <p>
                  Mid-scale industrial projects rarely include this kind
                  of planned infrastructure, which shows the
                  developers&apos; dedication to excellence and foresight.
                </p>
              </div>

              {/* Road Cards */}

              <div className="mt-8 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-[#12568d] p-5 text-white"
                >
                  <FaRoad className="text-[#fdb713]" size={22} />

                  <p className="mt-4 text-2xl font-black">
                    70 M
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Main Road
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-[#fdb713] p-5 text-[#12568d]"
                >
                  <FaRoad size={22} />

                  <p className="mt-4 text-2xl font-black">
                    48 M
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Secondary Road
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section
          id="enquiry"
          className="bg-[#fff8e8] py-16 sm:py-20"
        >
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
                    Interested In Samridhi 872/2?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    Contact our property team to check current
                    availability, pricing, documentation and schedule your
                    site visit.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
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
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
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