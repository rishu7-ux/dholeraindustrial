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

      <main>
        {/* ================= PREMIUM HERO ================= */}
        <section className="relative overflow-hidden bg-[#f7fbff] py-12 sm:py-16 lg:py-20">
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [-25, 25, -25],
                    y: [-18, 18, -18],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-40 top-10 h-105 w-105 rounded-full bg-[#fdb713]/10 blur-3xl"
          />

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [25, -25, 25],
                    y: [15, -15, 15],
                  }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-40 bottom-0 h-105 w-105 rounded-full bg-[#12568d]/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <motion.div
                initial={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: -50,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: smoothEase,
                }}
                className="relative"
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: smoothEase,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#fdb713]/30 bg-[#fff8e5] px-4 py-2"
                >
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.35, 1],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-2 w-2 rounded-full bg-[#fdb713]"
                  />

                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#12568d]">
                    Logistic Property
                  </p>
                </motion.div>

                <motion.h1
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 28,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.18,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  className="mt-5 font-serif text-4xl font-black leading-[1.08] text-[#12568d] sm:text-5xl lg:text-[58px]"
                >
                  Sandhida 191
                  <span className="block">Logistic Plot</span>
                </motion.h1>

                <motion.div
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scaleX: 0,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  className="mt-6 flex origin-left items-center gap-2"
                >
                  <span className="h-0.75 w-16 rounded-full bg-[#fdb713]" />
                  <span className="h-0.75 w-8 rounded-full bg-[#12568d]" />
                </motion.div>

                <motion.p
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.36,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base"
                >
                  The perfect logistics and industrial investment opportunity in
                  Dholera SIR, strategically positioned for warehouses, transport
                  operations, distribution centres and industrial businesses.
                </motion.p>

                <motion.div
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.44,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  className="mt-7 flex items-start gap-4"
                >
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: -7,
                            scale: 1.08,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713] shadow-[0_8px_25px_rgba(18,86,141,0.18)]"
                  >
                    <FaMapMarkerAlt size={16} />
                  </motion.div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 font-bold leading-6 text-slate-700">
                      Plot 191, TP-3 A, Dholera SIR
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.52,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                >
                  <Link
                    href="tel:+919667798802"
                    className="group mt-5 flex w-fit items-center gap-4"
                  >
                    <motion.span
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              rotate: -8,
                              scale: 1.08,
                            }
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4d2] text-[#12568d] transition-colors duration-300 group-hover:bg-[#fdb713]"
                    >
                      <FaPhoneAlt size={14} />
                    </motion.span>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Call Our Expert
                      </p>
                      <p className="mt-1 font-black text-[#12568d] transition-colors duration-300 group-hover:text-[#f0a900]">
                        +91 9667798802
                      </p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 28,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  className="mt-8 grid gap-4 sm:grid-cols-3"
                >
                  {[
                    ["Starting Price", "₹15,000", "Per Sq.yd"],
                    ["Plot Sizes", "1000 / 1500", "SQYD"],
                    ["Road Width", "55 M", "Wide Road"],
                  ].map(([label, value, sub]) => (
                    <motion.div
                      key={label}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -6,
                              scale: 1.02,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-[#12568d]/10 bg-white p-5 shadow-[0_12px_35px_rgba(18,86,141,0.08)]"
                    >
                      <div className="absolute left-0 top-0 h-0.75 w-0 bg-[#fdb713] transition-all duration-500 group-hover:w-full" />
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                        {label}
                      </p>
                      <p className="mt-2 text-xl font-black text-[#12568d]">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-slate-500">
                        {sub}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <Link
                    href="#enquiry"
                    className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#12568d] shadow-[0_10px_30px_rgba(253,183,19,0.25)] transition-all duration-300 hover:bg-[#12568d] hover:text-white sm:w-auto"
                  >
                    Schedule Visit
                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>

                  <Link
                    href="tel:+919667798802"
                    className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl border border-[#12568d]/15 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#12568d] shadow-[0_8px_25px_rgba(18,86,141,0.08)] transition-all duration-300 hover:border-[#12568d] hover:bg-[#12568d] hover:text-white sm:w-auto"
                  >
                    <FaPhoneAlt size={13} />
                    Call Now
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: 50,
                        scale: 0.96,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.95,
                  ease: smoothEase,
                }}
                className="relative mt-4 lg:mt-0"
              >
                <div className="absolute -left-3 -top-3 z-20 h-14 w-14 rounded-tl-2xl border-l-[3px] border-t-[3px] border-[#fdb713] sm:-left-4 sm:-top-4 sm:h-16 sm:w-16" />
                <div className="absolute -bottom-3 -right-3 z-20 h-14 w-14 rounded-br-2xl border-b-[3px] border-r-[3px] border-[#12568d] sm:-bottom-4 sm:-right-4 sm:h-16 sm:w-16" />




<div
                  className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    bg-white
                    shadow-[0_25px_70px_rgba(18,86,141,0.16)]
                    h-80
                    sm:h-107.5
                    md:h-125
                    lg:h-140
                    xl:h-152.5
                  "
                >
                  <Image
                    src="/gallery/sandhida -191.jpeg"
                    alt="Sandhida 191 Logistic Plot"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
                    className="
                      object-contain
                      object-center
                      transition-transform
                      duration-1200
                      ease-out
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

                  <motion.div
                    initial={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -20,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.65,
                      duration: 0.7,
                      ease: smoothEase,
                    }}
                    className="absolute right-4 top-4 rounded-xl border border-white/30 bg-black/20 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:right-6 sm:top-6"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#fdb713]">
                      Dholera SIR
                    </p>

                    <p className="mt-1 text-sm font-black">
                      TP-3 Logistic Zone
                    </p>
                  </motion.div>

                  <motion.div
                    initial={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: 30,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.75,
                      duration: 0.8,
                      ease: smoothEase,
                    }}
                    className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-2xl border border-white/25 bg-black/30 p-4 text-white shadow-[0_15px_45px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm sm:p-6"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#fdb713] sm:text-[10px]">
                      Prime Logistics Zone
                    </p>

                    <p className="mt-2 text-base font-black sm:text-xl">
                      Plot 191, TP-3 A
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/80 sm:text-sm sm:leading-6">
                      Strategic location for logistics, warehousing and industrial
                      operations in Dholera SIR.
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-white/90 sm:mt-4 sm:text-xs">
                      <FaRoad size={12} className="shrink-0 text-[#fdb713]" />
                      <span>55 Metre Wide Road</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
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
                The Perfect Logistics &amp; Industrial Investment Opportunity in Dholera SIR
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
                  Dholera SIR has quickly become one of India&apos;s most strategic
                  industrial and logistics destinations. With world-class
                  infrastructure, excellent connectivity, and huge government
                  investment, Dholera is transforming into the preferred choice
                  for industries, warehouses, e-commerce hubs, transport
                  companies, and manufacturing units.
                </p>

                <p>
                  One of the most promising developments in this region is the
                  Sandhida 191 Logistic Plot, located at TP-3. Designed
                  specifically for logistics, warehousing, and industrial
                  operations, this project offers everything a modern business
                  needs—from strategic location to reliable connectivity, future
                  expansion potential, and legally safe land.
                </p>

              </motion.div>
            </motion.div>
          </div>
        </section>


       {/* ================= PROJECT OVERVIEW ================= */}

<section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* HEADING */}
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
        Project Overview
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl"
      >
        Key Project Details
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className="mx-auto mt-5 flex w-fit gap-2"
      >
        <span className="h-0.75 w-16 rounded-full bg-[#fdb713]" />
        <span className="h-0.75 w-8 rounded-full bg-[#12568d]" />
      </motion.div>
    </motion.div>

    {/* DETAILS */}
    <motion.div
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="
        mx-auto
        mt-12
        max-w-5xl
        overflow-hidden
        rounded-[28px]
        border
        border-[#12568d]/10
        bg-white
        p-4
        shadow-[0_18px_55px_rgba(18,86,141,0.09)]
        sm:p-6
      "
    >
      <div className="space-y-3">
        {projectOverview.map(([label, value]) => (
          <motion.div
            key={label}
            variants={fadeUp}
            whileHover={{
              y: -3,
              scale: 1.005,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              group
              relative
              grid
              gap-3
              overflow-hidden
              rounded-2xl
              border
              border-[#12568d]/5
              bg-[#f8fbfd]
              px-5
              py-5
              transition-all
              duration-300

              hover:border-[#fdb713]/30
              hover:bg-white
              hover:shadow-[0_10px_30px_rgba(18,86,141,0.07)]

              sm:grid-cols-2
              sm:items-center
              sm:gap-8
              sm:px-8
            "
          >
            {/* Yellow hover line */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-0.75
                bg-[#fdb713]
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* LEFT */}
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2.5
                  w-2.5
                  shrink-0
                  rounded-full
                  bg-[#fdb713]
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              />

              <p className="text-sm font-black text-[#12568d] sm:text-[15px]">
                {label}
              </p>
            </div>

            {/* RIGHT */}
            <div className="sm:border-l sm:border-slate-200 sm:pl-8">
              <p className="text-sm font-semibold leading-6 text-slate-600 sm:text-[15px]">
                {value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
            






        {/* ================= STRATEGIC LOCATION ================= */}
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
                  Strategic Location
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#12568d] sm:text-4xl">
                  Plot 191, TP-3 — A Perfect Logistics Zone
                </h2>

                <p className="mt-7 leading-8 text-slate-600">
                  The project&apos;s greatest asset is its location. Plot 191 of
                  TP-3 is located within a strategic logistics area that is
                  already experiencing fast industrial growth. With wide roads,
                  clear zoning, and ready infrastructure, TP-3 is one of the
                  most active town planning schemes in Dholera SIR.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#f7fbff] p-7 sm:p-9"
              >
                <p className="font-black text-[#12568d]">
                  Principal Benefits Of The Location
                </p>

                <div className="mt-6 space-y-4">
                  {locationBenefits.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaCheckCircle size={13} />
                      </span>
                      <p className="leading-7 text-slate-600">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ================= IDEAL LAND USE ================= */}
        <section className="bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
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
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Ideal Land Use
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl"
              >
                Built For Logistics &amp; Industrial Operations
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {idealUses.map((item) => {
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
                    className="group rounded-[22px] border border-[#12568d]/10 bg-white p-6 shadow-[0_15px_45px_rgba(18,86,141,0.08)] transition-all duration-500 hover:border-[#fdb713]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12568d] text-[#fdb713] transition-all duration-300 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-black leading-7 text-[#12568d]">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>


        {/* ================= TP-3 + 55M ROAD ================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#12568d] p-7 text-white sm:p-9"
              >
                <FaBuilding size={26} className="text-[#fdb713]" />

                <h2 className="mt-5 font-serif text-3xl font-black">
                  TP-3 — Town Planning Advantages
                </h2>

                <p className="mt-6 leading-8 text-white/80">
                  TP schemes offer reliable planning: defined boundaries, wide
                  internal roads, electricity, drainage and clear zoning —
                  which reduces legal &amp; approval risk compared to unplanned
                  land.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#fdb713] p-7 text-[#12568d] sm:p-9"
              >
                <FaRoad size={26} />

                <h2 className="mt-5 font-serif text-3xl font-black">
                  55-Meter Road — Operational Benefits
                </h2>

                <p className="mt-6 leading-8">
                  A 55-metre road ensures smooth two-way movement for large
                  trucks, safe loading/unloading, easy entry/exit for long
                  trailers, and reduced congestion — crucial for high-volume
                  logistics operations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ================= AREA & PLOT SIZES ================= */}
        <section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Total Area &amp; Plot Sizes
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl">
                  Flexible Plot Configuration
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  The project parcel is large enough to allow multiple plot
                  configurations. Typical available plots include:
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-[#12568d] p-7 text-white"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#fdb713]">
                    Plot Size
                  </p>
                  <p className="mt-3 text-3xl font-black">1000 SQYD</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-[#fdb713] p-7 text-[#12568d]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Plot Size
                  </p>
                  <p className="mt-3 text-3xl font-black">1500 SQYD</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= INVESTMENT ================= */}
        <section className="relative overflow-hidden bg-[#12568d] py-16 text-white sm:py-20 lg:py-24">
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
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
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
                  <p className="font-black text-[#fdb713]">{item.title}</p>
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
                className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]"
              >
                Use Cases &amp; Examples
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl"
              >
                Suitable For Modern Logistics Operations
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 leading-8 text-slate-600"
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
        <section className="bg-[#fffaf0] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl rounded-[28px] border-l-4 border-[#fdb713] bg-white p-7 shadow-[0_15px_45px_rgba(18,86,141,0.08)] sm:p-9"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                Conclusion
              </p>

              <p className="mt-5 leading-8 text-slate-600">
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
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Investor Notes &amp; Next Steps
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl">
                  Check Before You Proceed
                </h2>

                <div className="mt-7 space-y-4">
                  {investorNotes.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                        <FaClipboardCheck size={13} />
                      </span>
                      <p className="leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[28px] bg-[#12568d] p-7 text-white sm:p-9"
              >
                <p className="font-black text-[#fdb713]">Quick Facts</p>

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
        <section className="bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12568d] text-[#fdb713]">
                  <FaShieldAlt size={22} />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
                  Legal &amp; Due Diligence
                </p>

                <h2 className="mt-4 font-serif text-3xl font-black text-[#12568d] sm:text-4xl">
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
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d]">
                      <FaFileContract size={14} />
                    </span>

                    <p className="leading-7 text-slate-600">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="enquiry" className="bg-[#fff8e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 45, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="relative overflow-hidden rounded-[30px] bg-[#12568d] px-6 py-10 text-white shadow-[0_25px_70px_rgba(18,86,141,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              <div className="absolute left-0 top-0 h-1.25 w-full bg-[#fdb713]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#fdb713]">
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

        {/* ================= DISCLAIMER ================= */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-black text-[#12568d]">Disclaimer</p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
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