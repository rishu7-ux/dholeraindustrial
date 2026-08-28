"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaArrowsAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoad,
} from "react-icons/fa";

import EnquiryModal from "./ EnquiryModal";

type Property = {
  id: number;
  title: string;
  image: string;
  location: string;
  phone: string;
  description: string;
  featureOne: string;
  featureTwo?: string;
  price: string;
  soldOut?: boolean;
  href: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: "Samridhi 621 Panchi Industrial Plots",
    image: "/gallery/psamridhi 872:2.webp",
    location: "Near the Expressway, Metro, and Freight Corridor",
    phone: "+91 93157 82996",
    description:
      "In facilities: Airport | Metro connectivity | Ultra-mega solar park | India’s 1st Platinum Rated Green Smart City",
    featureOne: "3 plot sizes available: 1318, 1865, 1882 sq. yd.",
    featureTwo: "48 m wide road",
    price: "Sold Out",
    soldOut: true,
    href: "/samridhi-621-panchi-industrial-plots",
  },

  {
    id: 2,
    title: "Samridhi 365 - Industrial Plot",
    image: "/gallery/n1.webp",
    location:
      "Near the Expressway, Metro, and Freight Corridor, next to HAC",
    phone: "+91 93157 82996",
    description:
      "Residential-zoned | Govt approved | Tree-lined streets | Green landscapes | Solar lighting & rainwater harvesting",
    featureOne: "1 km distance from Tata Semiconductor",
    featureTwo: "500 m distance from Dholera Expressway",
    price: "Sold Out",
    soldOut: true,
    href: "/samridhi-365-industrial-plot",
  },

  {
    id: 3,
    title: "Samridhi 872/2 Industrial Plot",
    image: "/gallery/samridhi - industrila plot.webp",
    location: "Near the Expressway, Metro, and Freight Corridor",
    phone: "+91 93157 82996",
    description:
      "Residential-zoned | Govt approved | Tree-lined streets | Green landscapes | Solar lighting & rainwater harvesting",
    featureOne: "9500 sq. yd. area",
    featureTwo: "70 m road + 48 m",
    price: "Sold Out",
    soldOut: true,
    href: "/samridhi-872-2-industrial-plots",
  },

];

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PropertyCard({
  property,
  index,
  onEnquire,
}: {
  property: Property;
  index: number;
  onEnquire: (propertyName: string) => void;
}) {
  return (
    <motion.article
      variants={cardAnimation}
      whileHover={
        property.soldOut
          ? undefined
          : {
              y: -9,
              scale: 1.006,
            }
      }
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden rounded-xl border border-[#12568d]/20 bg-linear-to-r from-[#12568d] via-[#246b9d] to-[#4385b4] shadow-[0_10px_30px_rgba(18,86,141,0.18)] transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_28px_75px_rgba(18,86,141,0.32)] sm:rounded-2xl sm:shadow-[0_14px_45px_rgba(18,86,141,0.18)]"
    >
      {/* Moving shine */}
      {!property.soldOut && (
        <div className="pointer-events-none absolute inset-y-0 -left-45 z-2 w-40 -skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 group-hover:left-[115%]" />
      )}

      {/* Floating glow */}
      {!property.soldOut && (
        <motion.div
          aria-hidden="true"
          animate={{
            x: [-20, 28, -20],
            y: [-18, 22, -18],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#fdb713]/20 blur-3xl"
        />
      )}

      <div
        className={`relative z-10 grid transition-all duration-500 lg:grid-cols-[370px_1fr] ${
          property.soldOut
            ? "pointer-events-none select-none blur-[4px] grayscale opacity-40"
            : ""
        }`}
        aria-hidden={property.soldOut || undefined}
      >
        {/* ================= IMAGE ================= */}

        <div className="relative min-h-40 overflow-hidden sm:min-h-82.5 lg:min-h-91.25">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className={`object-cover transition-all duration-1600 ease-out ${
              property.soldOut
                ? "scale-[1.08] blur-[10px] grayscale-70 brightness-[0.38]"
                : "group-hover:scale-[1.06]"
            }`}
            sizes="(max-width: 1024px) 100vw, 370px"
          />

          {/* Number */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3.5 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#12568d] text-[10px] font-black text-[#fdb713] shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#fdb713] group-hover:text-[#12568d] sm:left-5 sm:top-5 sm:h-12 sm:w-12 sm:rounded-lg sm:text-sm"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* Hover Label */}
          <div className="absolute bottom-5 left-5 translate-y-6 border-l-4 border-[#fdb713] bg-[#12568d]/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Dholera Industrial Plot
          </div>

          {/* ================= SOLD OUT OVERLAY ================= */}

          {property.soldOut && (
            <>
              <div className="absolute inset-0 z-10 bg-slate-950/45 backdrop-blur-[6px]" />

              <motion.div
                aria-hidden="true"
                animate={{
                  x: ["-130%", "180%"],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -top-20 z-20 h-[160%] w-24 -rotate-12 bg-linear-to-r from-transparent via-white/20 to-transparent blur-xl"
              />

              <motion.div
                aria-hidden="true"
                animate={{
                  x: [-12, 18, -12],
                  y: [-10, 14, -10],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-10 top-10 z-20 h-32 w-32 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl"
              />

              <motion.div
                aria-hidden="true"
                animate={{
                  x: [15, -15, 15],
                  y: [12, -12, 12],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-12 -right-10 z-20 h-40 w-40 rounded-full border border-[#fdb713]/20 bg-[#fdb713]/10 backdrop-blur-xl"
              />

              <div className="absolute inset-0 z-30 flex items-center justify-center px-5">
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    scale: [1, 1.025, 1],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-2xl sm:px-9 sm:py-6"
                >
                  <motion.div
                    aria-hidden="true"
                    animate={{
                      x: ["-150%", "180%"],
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-16 -skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent"
                  />

                  <div className="absolute left-0 top-0 h-0.75 w-full bg-[#fdb713]" />

                  <p className="relative z-10 text-[10px] font-black uppercase tracking-[0.32em] text-[#fdb713]">
                    Property Status
                  </p>

                  <p className="relative z-10 mt-1 text-xl font-black uppercase tracking-[0.08em] text-white sm:mt-2 sm:text-3xl">
                    Sold Out
                  </p>

                  <div className="relative z-10 mx-auto mt-2 h-px w-12 bg-white/30 sm:mt-4 sm:w-16" />

                  <p className="relative z-10 mt-2 text-[8px] font-bold uppercase tracking-[0.16em] text-white/60 sm:mt-3 sm:text-[10px] sm:tracking-[0.2em]">
                    Currently Unavailable
                  </p>
                </motion.div>
              </div>

              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-5 z-40 overflow-hidden rounded-r-xl border border-white/15 border-l-4 border-l-[#fdb713] bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl backdrop-blur-xl"
              >
                Dholera Industrial Plot
              </motion.div>
            </>
          )}
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative flex flex-col p-3 text-white sm:min-h-91.25 sm:p-7 lg:p-8">
          {/* Price */}
          <div className="relative mb-3 ml-auto flex min-h-9 w-fit min-w-28 items-center justify-center rounded-md bg-[#12568d] px-4 text-center text-xs font-black uppercase text-white shadow-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:bg-[#fdb713] group-hover:text-[#12568d] sm:absolute sm:right-0 sm:top-0 sm:mb-0 sm:min-h-14.5 sm:w-full sm:max-w-75 sm:rounded-none sm:px-7 sm:text-lg">
            <span className="absolute -left-5 hidden h-10 w-10 rotate-45 bg-[#246b9d] transition-colors duration-500 group-hover:bg-[#fdb713] sm:block" />

            <span className="relative z-10">
              {property.soldOut ? "Sold Out" : property.price}
            </span>
          </div>

          {/* Title */}
          <div className="sm:pr-71.25">
            <motion.p
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3.4 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#fdb713] transition-colors duration-500 group-hover:text-white sm:mb-2 sm:text-xs sm:tracking-[0.2em]"
            >
              Industrial Property
            </motion.p>

            <h3 className="font-serif text-base font-black uppercase leading-tight text-white transition-transform duration-500 group-hover:translate-x-1.5 sm:text-2xl">
              {property.title}
            </h3>

            <span className="mt-2 block h-0.5 w-10 bg-[#fdb713] transition-all duration-500 group-hover:w-32 group-hover:bg-white sm:mt-4 sm:h-0.75 sm:w-16" />
          </div>

          {/* Location + Phone */}
          <div className="mt-3 flex flex-col gap-2 text-[11px] sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm">
            <div className="flex max-w-lg items-start gap-3 transition-transform duration-300 hover:translate-x-2">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#fdb713] transition-all duration-300 hover:rotate-12 hover:bg-[#fdb713] hover:text-[#12568d] sm:h-9 sm:w-9">
                <FaMapMarkerAlt size={13} />
              </span>

              <span className="line-clamp-1 leading-5 text-white/90 sm:line-clamp-none sm:leading-7">
                {property.location}
              </span>
            </div>

            <div className="hidden items-center gap-3 text-white/90 sm:flex">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#fdb713] transition-all duration-300 hover:-rotate-12 hover:bg-[#fdb713] hover:text-[#12568d]">
                <FaPhoneAlt size={12} />
              </span>

              <span className="font-semibold">
                {property.phone}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 hidden text-[15px] font-medium leading-7 text-white/85 transition-colors duration-500 group-hover:text-white sm:block">
            {property.description}
          </p>

          {/* Features */}
          <div className="mt-6 hidden gap-4 text-sm sm:grid sm:grid-cols-2">
            <div className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#fdb713] transition-all duration-300 hover:scale-110 hover:bg-[#fdb713] hover:text-[#12568d]">
                <FaArrowsAlt size={14} />
              </span>

              <span className="font-semibold text-white/90">
                {property.featureOne}
              </span>
            </div>

            {property.featureTwo && (
              <div className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#fdb713] transition-all duration-300 hover:scale-110 hover:bg-[#fdb713] hover:text-[#12568d]">
                  <FaRoad size={14} />
                </span>

                <span className="font-semibold text-white/90">
                  {property.featureTwo}
                </span>
              </div>
            )}
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="mt-auto hidden flex-wrap gap-3 pt-7 sm:flex">
            {!property.soldOut && (
              <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => onEnquire(property.title)}
                    className="group/button inline-flex min-h-12 items-center justify-center gap-2 bg-[#12568d] px-6 text-sm font-black uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#12568d]"
                  >
                    Enquiry Now

                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover/button:translate-x-1.5"
                    />
                  </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {property.soldOut && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/25 p-3 backdrop-blur-[2px] sm:p-5">
          <div
            role="status"
            className="rounded-lg border border-white/30 bg-[#12568d]/90 px-5 py-3 text-center shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:rounded-2xl sm:px-10 sm:py-7"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#fdb713]">
              Property Status
            </p>
            <p className="mt-1 text-xl font-black uppercase tracking-wider text-white sm:mt-2 sm:text-4xl">
              Sold Out
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/65 sm:mt-3 sm:text-xs sm:tracking-[0.18em]">
              Currently Unavailable
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onEnquire(property.title);
              }}
              className="mt-3 inline-flex min-h-9 items-center justify-center gap-2 rounded-md bg-[#fdb713] px-4 text-[10px] font-black uppercase tracking-wide text-[#12568d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:mt-6 sm:min-h-12 sm:rounded-lg sm:px-7 sm:text-sm"
            >
              Enquiry Now
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      )}
    </motion.article>
  );
}

/* =========================================================
   MAIN PROPERTY LISTINGS
========================================================= */

export default function PropertyListings() {
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
      <section
        id="properties"
        className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ================= HEADING ================= */}

          <motion.div
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#fdb713] sm:text-sm"
            >
              Explore Our Projects
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-serif text-3xl font-black uppercase leading-tight text-[#12568d] sm:text-4xl lg:text-5xl"
            >
              Property Listings
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              At Omana Projects, we make land investment easy, transparent and
              future-focused.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 flex w-28 flex-col items-center gap-1.5"
            >
              <span className="h-0.5 w-20 bg-[#fdb713]" />
              <span className="h-0.5 w-12 bg-[#12568d]" />
              <span className="h-0.5 w-20 bg-[#fdb713]" />
            </motion.div>
          </motion.div>

          {/* ================= PROPERTY CARDS ================= */}

          <div className="space-y-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
              >
                <PropertyCard
                  property={property}
                  index={index}
                  onEnquire={handleEnquiry}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENQUIRY MODAL
      ===================================================== */}

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        propertyName={selectedProperty}
      />
    </>
  );
}
