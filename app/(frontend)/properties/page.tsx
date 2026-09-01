"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaHome } from "react-icons/fa";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import PropertyShowcase from "@/components/PropertyShowcase";
import EnquiryModal from "@/components/ EnquiryModal";
import Footer from "@/components/Footer";

export default function PropertiesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const [selectedProperty, setSelectedProperty] = useState(
    "Dholera Industrial Property"
  );

  const handleEnquiry = (propertyName: string) => {
    setSelectedProperty(propertyName);
    setEnquiryOpen(true);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <SocialBar />

      <main className="properties-page compact-page overflow-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#081A3A] py-12 text-white sm:py-14 lg:py-16">
          {/* Glow 1 */}
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
            className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#FF7A00]/15 blur-3xl"
          />

          {/* Glow 2 */}
          <motion.div
            animate={{
              x: [30, -30, 30],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-6 flex items-center justify-center gap-2 text-sm text-white/70"
            >
              <Link
                href="/"
                className="flex items-center gap-2 transition-colors hover:text-[#FF7A00]"
              >
                <FaHome size={12} className="text-[#FF7A00]" />
                Home
              </Link>

              <span>/</span>

              <span className="text-[#FF7A00]">
                Properties
              </span>
            </motion.div>

            {/* Small Heading */}
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.7,
              }}
              className="text-xs font-black uppercase tracking-[0.35em] text-[#FF7A00]"
            >
              Explore Our Projects
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl"
            >
              Investment Opportunities
            </motion.h1>

            {/* Decorative Lines */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="mx-auto mt-6 flex w-fit gap-2"
            >
              <span className="h-1 w-16 bg-[#FF7A00]" />
              <span className="h-1 w-8 bg-white" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base"
            >
              Discover selected industrial and logistics opportunities across
              Dholera SIR.
            </motion.p>

            {/* Explore Button */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-8"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#081A3A] px-7 py-4 text-sm font-black uppercase tracking-wide text-white ring-1 ring-[#FF7A00] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#081A3A] hover:shadow-xl"
              >
                Explore Projects

                <FaArrowRight
                  size={12}
                  className="text-[#FF7A00] transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            PREMIUM PROJECT SHOWCASE
        ===================================================== */}

        <section
          id="projects"
          className="relative"
        >
          <PropertyShowcase />
        </section>

        {/* =====================================================
            BOTTOM CTA
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden bg-[#0A2E73] px-6 py-10 text-white shadow-[0_25px_70px_rgba(8,26,58,0.22)] sm:px-10 lg:px-14 lg:py-14"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-[#FF7A00]" />

              {/* Animated Glow */}
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
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF7A00]/15 blur-3xl"
              />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Text */}
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                    Need Help Choosing?
                  </p>

                  <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                    Find The Right Property In Dholera
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    Talk with our team about location, pricing, plot sizes,
                    documentation and current availability.
                  </p>
                </div>

                {/* Enquiry Button */}
                <motion.button
                  type="button"
                  onClick={() =>
                    handleEnquiry("Dholera Industrial Property")
                  }
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-black uppercase text-[#081A3A] shadow-lg transition-all duration-300 hover:bg-[#FFFFFF]/90"
                >
                  Enquire Now

                  <FaArrowRight
                    size={12}
                    className="text-[#FF7A00] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          ENQUIRY POPUP
      ===================================================== */}

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        propertyName={selectedProperty}
      />
    </>
  );
}
