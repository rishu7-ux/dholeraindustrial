"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaEnvelope,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaUser,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";

const smoothEase = [0.22, 1, 0.36, 1] as const;

/* =====================================================
   ANIMATIONS
===================================================== */

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    filter: "blur(5px)",
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
    x: 50,
    filter: "blur(5px)",
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
    y: 32,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

/* =====================================================
   DATA
===================================================== */

const solutions = [
  "Verified Industrial Plots",
  "Custom Land Sizing",
  "Location Advice",
  "Documentation & Legal Support",
  "On-Ground Support",
  "Post-Sale Assistance",
];

const values = [
  {
    icon: FaShieldAlt,
    title: "Verified Opportunities",
    description:
      "We focus on verified and strategically located industrial land opportunities in Dholera SIR.",
  },
  {
    icon: FaHandshake,
    title: "Transparent Approach",
    description:
      "Our process is built around openness, dependable advice, and clear communication throughout the transaction.",
  },
  {
    icon: FaBuilding,
    title: "Industrial Focus",
    description:
      "We work with investors, entrepreneurs, SMEs, logistics companies, and industrial businesses.",
  },
];

/* =====================================================
   PAGE
===================================================== */

export default function AboutUsPage() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main className="about-page compact-page overflow-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#081A3A] py-10 text-white sm:py-12 lg:py-14">
          {/* Glow 1 */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [-40, 40, -40],
                    y: [-20, 20, -20],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-white/20 blur-3xl"
          />

          {/* Glow 2 */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [30, -30, 30],
                    y: [20, -20, 20],
                  }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#081A3A]/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
            >
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#FF7A00]">
                About Dholera Industrial Plot
              </p>

              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Building Trust In Dholera&apos;s
                <span className="text-[#FF7A00]"> Industrial Future</span>
              </h1>

              <div className="mx-auto mt-7 flex w-fit gap-3">
                <span className="h-1 w-20 bg-[#FF7A00]" />
                <span className="h-1 w-10 bg-white/70" />
              </div>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                Strategic industrial land solutions backed by market knowledge,
                transparent guidance and a long-term vision for Dholera SIR.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            COMPANY HISTORY
        ===================================================== */}

        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              {/* LEFT */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="lg:sticky lg:top-28"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                  Our Journey
                </p>

                <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-[#081A3A] sm:text-5xl">
                  Our Company History
                </h2>

                <div className="mt-6 flex gap-3">
                  <span className="h-1 w-20 bg-[#FF7A00]" />
                  <span className="h-1 w-10 bg-[#081A3A]" />
                </div>

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className="mt-10 overflow-hidden border border-[#FF7A00]/25 bg-[#FFFFFF] p-8 text-[#081A3A] shadow-[0_22px_65px_rgba(8,26,58,0.12)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]">
                    <FaBuilding size={23} />
                  </span>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                    Established
                  </p>

                  <p className="mt-2 text-4xl font-black">
                    2024
                  </p>

                  <p className="mt-4 leading-8 text-[#0A2E73]">
                    Founded as a subsidiary of Omana Projects to support
                    India&apos;s next-generation industrial revolution.
                  </p>
                </motion.div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="space-y-6"
              >
                <motion.div
                  variants={fadeUp}
                  className="border border-[#081A3A]/10 bg-[#ffffff] p-7 sm:p-9"
                >
                  <p className="text-base leading-9 text-[#0A2E73]">
                    Dholera Industrial Plot was founded in 2024 as a subsidiary
                    of Omana Projects with the goal of supporting India&apos;s
                    next-generation industrial revolution. The company
                    specializes in providing strategic industrial land solutions
                    in the Dholera Special Investment Region (DSIR), which is
                    the country&apos;s first smart city and greenfield industrial
                    hub.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="border border-[#081A3A]/10 bg-white p-7 shadow-[0_15px_45px_rgba(8,26,58,0.07)] sm:p-9"
                >
                  <p className="text-base leading-9 text-[#0A2E73]">
                    Early on, we had to negotiate a new market environment
                    characterized by quick changes in regulations, a lack of
                    infrastructure, and low investor confidence. However, we
                    established ourselves at the forefront of industrial real
                    estate in the area by having a solid grasp of government
                    plans and a strong faith in Dholera&apos;s potential.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="relative overflow-hidden bg-[#FFFFFF] p-7 sm:p-9"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#FF7A00]" />

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#081A3A]">
                    Dholera Industrial Plot
                  </p>

                  <p className="mt-5 text-base leading-9 text-[#0A2E73]">
                    Beginning with a modest portfolio of plots, our team
                    established solid local connections and gained a reputation
                    for honest business practices, genuine sites, and timely
                    legal and advisory assistance.
                  </p>

                  <p className="mt-5 text-base leading-9 text-[#0A2E73]">
                    With time, we branched out into investment consulting,
                    customized land planning, and strategic alliances with
                    logistics companies, SMEs, and industrial players.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="border border-[#FF7A00]/25 bg-[#FFFFFF] p-7 text-[#081A3A] sm:p-9"
                >
                  <p className="text-base leading-9 text-[#0A2E73]">
                    It is now known as a reliable brand for purchasing industrial
                    real estate in Dholera. A decade of progress is reflected in
                    our track record, which includes hundreds of happy customers,
                    confirmed land transactions, and an expanding presence in
                    strategic SIR zones.
                  </p>

                  <p className="mt-5 text-base leading-9 text-[#0A2E73]">
                    We&apos;re still dedicated to supporting our clients&apos;
                    growth as Dholera develops into a major force in smart
                    infrastructure and manufacturing worldwide.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}

        <section className="bg-[#ffffff] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]"
              >
                What Defines Us
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl"
              >
                Built On Trust &amp; Expertise
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="mt-14 grid gap-7 md:grid-cols-3"
            >
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardReveal}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -10,
                            scale: 1.015,
                          }
                    }
                    className="group border border-[#081A3A]/10 bg-white p-8 shadow-[0_15px_45px_rgba(8,26,58,0.08)]"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00] transition-all duration-300 group-hover:bg-[#0A2E73]">
                      <Icon size={22} />
                    </span>

                    <h3 className="mt-7 text-xl font-black text-[#081A3A]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[#0A2E73]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            OBJECTIVE + SOLUTION
        ===================================================== */}

        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {/* OBJECTIVE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="relative overflow-hidden border border-[#FF7A00]/25 bg-[#FFFFFF] p-8 text-[#081A3A] shadow-[0_24px_70px_rgba(8,26,58,0.12)] sm:p-10"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, 8, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]"
              >
                <FaBullseye size={23} />
              </motion.div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Objective
              </p>

              <h2 className="mt-4 font-serif text-3xl font-black sm:text-4xl">
                Empowering Industrial Growth
              </h2>

              <p className="mt-7 text-base leading-9 text-[#0A2E73]">
                Providing verified, well-located industrial plots in Dholera
                SIR that guarantee long-term growth, legal security, and a high
                return on investment in order to empower industries, investors,
                and entrepreneurs.
              </p>

              <p className="mt-5 text-base leading-9 text-[#0A2E73]">
                With openness, knowledge, and dependability at the heart of each
                real estate transaction, we seek to close the gap between
                Dholera&apos;s development potential and practical business
                requirements.
              </p>
            </motion.div>

            {/* SOLUTION */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="bg-[#FF7A00] p-8 text-[#081A3A] shadow-[0_24px_70px_rgba(255,122,0,0.18)] sm:p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A3A] text-[#FF7A00]">
                <FaLightbulb size={23} />
              </span>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.3em]">
                Solution
              </p>

              <h2 className="mt-4 font-serif text-3xl font-black sm:text-4xl">
                End-To-End Land Acquisition Support
              </h2>

              <p className="mt-6 leading-8">
                We provide a comprehensive, end-to-end industrial land
                acquisition solution in Dholera.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {solutions.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 5,
                          }
                    }
                    className="flex items-center gap-3 bg-white/70 p-4 backdrop-blur"
                  >
                    <FaCheckCircle size={15} className="text-[#FF7A00]" />

                    <span className="font-black">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CONTACT + FORM
        ===================================================== */}

        <section className="bg-[#ffffff] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            {/* CONTACT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Contact Us
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black text-[#081A3A] sm:text-5xl">
                Reach Out To Us
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-[#0A2E73]">
                Speak with our team regarding industrial plots, documentation,
                location guidance or site visits in Dholera SIR.
              </p>

              <div className="mt-10 space-y-5">
                <Link
                  href="tel:+919217104219"
                    className="group flex items-center gap-4 bg-white p-5 shadow-sm transition hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaPhoneAlt size={16} />
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[#0A2E73]">
                      Call Us
                    </p>

                    <p className="mt-1 font-black text-[#081A3A]">
                      +91 9217104219
                    </p>
                  </div>
                </Link>

                <Link
                  href="mailto:customercare@omanaprojects.com"
                    className="group flex items-center gap-4 bg-white p-5 shadow-sm transition hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaEnvelope size={16} />
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[#0A2E73]">
                      Email
                    </p>

                    <p className="mt-1 break-all font-black text-[#081A3A]">
                      customercare@omanaprojects.com
                    </p>
                  </div>
                </Link>

                <div className="flex items-start gap-4 bg-white p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#081A3A] text-[#FF7A00]">
                    <FaMapMarkerAlt size={16} />
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[#0A2E73]">
                      Office
                    </p>

                    <p className="mt-1 leading-7 font-semibold text-[#0A2E73]">
                      7th floor, plot no 56a/16, C Block, Phase 2,
                      Industrial Area, Sector 62, Noida,
                      Uttar Pradesh 201309
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="relative overflow-hidden bg-white p-6 shadow-[0_25px_70px_rgba(8,26,58,0.12)] sm:p-8 lg:p-10"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-[#FF7A00]" />

              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                Enquiry Form
              </p>

              <h3 className="mt-4 text-3xl font-black text-[#081A3A]">
                Reach Out To Us
              </h3>

              {submitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFFFFF] text-[#FF7A00]">
                    <FaCheckCircle size={34} />
                  </span>

                  <h4 className="mt-6 text-2xl font-black text-[#081A3A]">
                    Thank You
                  </h4>

                  <p className="mt-3 text-[#0A2E73]">
                    Your enquiry has been submitted successfully.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#081A3A]">
                      Name
                    </label>

                    <div className="flex items-center rounded-xl border border-[#081A3A]/15 bg-[#ffffff] transition focus-within:border-[#081A3A]">
                      <span className="flex h-13 w-13 items-center justify-center text-[#FF7A00]">
                        <FaUser size={14} />
                      </span>

                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        placeholder="Your Name*"
                        className="h-13 w-full bg-transparent pr-4 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#081A3A]">
                      Email
                    </label>

                    <div className="flex items-center rounded-xl border border-[#081A3A]/15 bg-[#ffffff] transition focus-within:border-[#081A3A]">
                      <span className="flex h-13 w-13 items-center justify-center text-[#FF7A00]">
                        <FaEnvelope size={14} />
                      </span>

                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        placeholder="Your Email*"
                        className="h-13 w-full bg-transparent pr-4 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#081A3A]">
                      Phone
                    </label>

                    <div className="flex items-center rounded-xl border border-[#081A3A]/15 bg-[#ffffff] transition focus-within:border-[#081A3A]">
                      <span className="flex h-13 w-13 items-center justify-center text-[#FF7A00]">
                        <FaPhoneAlt size={14} />
                      </span>

                      <span className="border-r border-[#081A3A]/15 pr-3 text-sm font-bold text-[#0A2E73]">
                        +91
                      </span>

                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone: e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10),
                          })
                        }
                        placeholder="Your Phone*"
                        className="h-13 w-full bg-transparent px-3 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#081A3A]">
                      Message
                    </label>

                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      placeholder="Write comment"
                      className="w-full resize-none rounded-xl border border-[#081A3A]/15 bg-[#ffffff] p-4 text-sm outline-none transition focus:border-[#081A3A]"
                    />
                  </div>

                  <motion.button
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            scale: 1.01,
                          }
                    }
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    className="group flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#081A3A] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#081A3A]"
                  >
                    Submit

                    <FaArrowRight
                      size={12}
                      className="text-[#FF7A00] transition-transform group-hover:translate-x-2"
                    />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-[#FFFFFF] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="relative overflow-hidden border border-[#FF7A00]/25 bg-[#FFFFFF] px-7 py-12 text-[#081A3A] shadow-[0_25px_70px_rgba(8,26,58,0.12)] sm:px-10 lg:px-14"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-[#FF7A00]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                    Invest With Confidence
                  </p>

                  <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                    Explore Industrial Properties In Dholera
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-[#0A2E73]">
                    Discover verified industrial land opportunities designed
                    for long-term growth and strategic investment.
                  </p>
                </div>

                <Link
                  href="/properties"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#081A3A] px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#081A3A]"
                >
                  View Properties

                  <FaArrowRight
                    size={12}
                    className="text-[#FF7A00] transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
