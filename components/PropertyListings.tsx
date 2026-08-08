"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaArrowsAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoad,
} from "react-icons/fa";

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
    price: "₹ 85 lakhs onward",
    href: "/samridhi-621-panchi-industrial-plots",
  },

  {
    id: 2,
    title: "Samridhi 365 - Industrial Plot",
    image: "/gallery/ sandhida 191.webp",
    location:
      "Near the Expressway, Metro, and Freight Corridor, next to HAC",
    phone: "+91 93157 82996",
    description:
      "Residential-zoned | Govt approved | Tree-lined streets | Green landscapes | Solar lighting & rainwater harvesting",
    featureOne: "1 km distance from Tata Semiconductor",
    featureTwo: "500 m distance from Dholera Expressway",
    price: "₹ 1,35,00,000",
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
    price: "₹ 1,35,00,000",
    href: "/samridhi-872-2-industrial-plots",
  },

  {
    id: 4,
    title: "Sandhida 191 Logistic Plot",
    image: "/gallery/ sandhida 191.webp",
    location: "Plot 191, TP-3 A, Dholera SIR",
    phone: "+91 93157 82996",
    description:
      "Logistic / Industrial | NA approval applied | Warehouses and distribution centers | Cold storage facilities",
    featureOne: "~9,000–10,000 sq. yd.",
    featureTwo: "55 metres wide road",
    price: "₹ 15,000 onward",
    href: "/sandhida-191-logistic-plot",
  },

  {
    id: 5,
    title: "Samridhi 966/2",
    image: "/properties/property-5.jpg",
    location: "Near Expressway, Metro and Freight Corridor",
    phone: "+91 93157 82996",
    description:
      "Residential-zoned | Govt approved | Tree-lined streets | Green landscapes | Solar lighting & rainwater harvesting",
    featureOne: "70 m road + 48 m",
    price: "Sold Out",
    soldOut: true,
    href: "#",
  },

  {
    id: 6,
    title: "Samridhi 365/2",
    image: "/properties/property-6.jpg",
    location: "Near Expressway, Metro and Freight Corridor",
    phone: "+91 93157 82996",
    description:
      "Residential-zoned | Govt approved | Tree-lined streets | Green landscapes | Solar lighting & rainwater harvesting",
    featureOne: "70 m road + 48 m",
    price: "Sold Out",
    soldOut: true,
    href: "#",
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
}: {
  property: Property;
  index: number;
}) {
  const phoneLink = property.phone.replace(/\s/g, "");

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
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#12568d]/20
        bg-linear-to-r
        from-[#12568d]
        via-[#246b9d]
        to-[#4385b4]
        shadow-[0_14px_45px_rgba(18,86,141,0.18)]
        transition-all
        duration-500

        ${
          property.soldOut
            ? "cursor-not-allowed opacity-[0.78]"
            : "hover:border-[#fdb713] hover:shadow-[0_28px_75px_rgba(18,86,141,0.32)]"
        }
      `}
    >
      {/* ================= Moving Shine ================= */}
      {!property.soldOut && (
        <div className="pointer-events-none absolute inset-y-0 -left-45 z-2 w-40 -skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 group-hover:left-[115%]" />
      )}

      {/* ================= Floating Glow ================= */}
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

      <div className="relative z-10 grid lg:grid-cols-[370px_1fr]">
        {/* =================================================
            IMAGE
        ================================================= */}
        <div className="relative min-h-68.75 overflow-hidden sm:min-h-82.5 lg:min-h-91.25">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className={`
              object-cover
              transition-all
              duration-1600
              ease-out

              ${
                property.soldOut
                  ? "scale-[1.08] blur-[10px] grayscale-75 brightness-[0.35]"
                  : "group-hover:scale-[1.06]"
              }
            `}
            sizes="(max-width: 1024px) 100vw, 370px"
          />

          {/* ================= Number ================= */}
          <motion.div
            animate={
              property.soldOut
                ? undefined
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 3.5 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-lg bg-[#12568d] text-sm font-black text-[#fdb713] shadow-xl"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* ================= Available Hover Label ================= */}
          {!property.soldOut && (
            <div className="absolute bottom-5 left-5 translate-y-6 border-l-4 border-[#fdb713] bg-[#12568d]/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Dholera Industrial Plot
            </div>
          )}

          {/* ================= SOLD OUT Overlay ================= */}
          {property.soldOut && (
            <>
              {/* Strong dark + blur layer */}
              <div className="absolute inset-0 z-10 bg-black/55 backdrop-blur-[5px]" />

              {/* Sold Out Badge */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.035, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-xl border-2 border-[#fdb713] bg-[#12568d]/95 px-9 py-5 text-center shadow-[0_15px_50px_rgba(0,0,0,0.45)]"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fdb713]">
                    Property
                  </p>

                  <p className="mt-2 text-2xl font-black uppercase tracking-wide text-white">
                    Sold Out
                  </p>
                </motion.div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-5 left-5 z-30 border-l-4 border-[#fdb713] bg-[#12568d]/95 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl">
                Dholera Industrial Plot
              </div>
            </>
          )}
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}
        <div
          className={`
            relative
            flex
            min-h-91.25
            flex-col
            p-5
            text-white
            sm:p-7
            lg:p-8

            ${
              property.soldOut
                ? "brightness-[0.72] saturate-[0.55]"
                : ""
            }
          `}
        >
          {/* ================= Sold Out Content Overlay ================= */}
          {property.soldOut && (
            <div className="pointer-events-none absolute inset-0 z-0 bg-black/15 backdrop-blur-[1px]" />
          )}

          {/* ================= Price Ribbon ================= */}
          <div
            className={`
              relative
              z-10
              mb-7
              ml-auto
              flex
              min-h-14.5
              w-full
              max-w-75
              items-center
              justify-center
              px-7
              text-center
              text-lg
              font-black
              uppercase
              shadow-xl
              sm:absolute
              sm:right-0
              sm:top-0
              sm:mb-0

              ${
                property.soldOut
                  ? "bg-slate-800/90 text-white"
                  : "bg-[#12568d] text-white transition-all duration-500 group-hover:-translate-x-2 group-hover:bg-[#fdb713] group-hover:text-[#12568d]"
              }
            `}
          >
            <span
              className={`
                absolute
                -left-5
                hidden
                h-10
                w-10
                rotate-45
                sm:block

                ${
                  property.soldOut
                    ? "bg-slate-700"
                    : "bg-[#246b9d] transition-colors duration-500 group-hover:bg-[#fdb713]"
                }
              `}
            />

            <span className="relative z-10">
              {property.soldOut ? "Sold Out" : property.price}
            </span>
          </div>

          {/* ================= Title ================= */}
          <div className="relative z-10 sm:pr-71.25">
            <motion.p
              animate={
                property.soldOut
                  ? undefined
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: 3.4 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#fdb713]"
            >
              Industrial Property
            </motion.p>

            <h3
              className={`
                font-serif
                text-xl
                font-black
                uppercase
                leading-tight
                text-white
                sm:text-2xl

                ${
                  property.soldOut
                    ? ""
                    : "transition-transform duration-500 group-hover:translate-x-1.5"
                }
              `}
            >
              {property.title}
            </h3>

            <span
              className={`
                mt-4
                block
                h-0.75
                bg-[#fdb713]

                ${
                  property.soldOut
                    ? "w-16"
                    : "w-16 transition-all duration-500 group-hover:w-32 group-hover:bg-white"
                }
              `}
            />
          </div>

          {/* ================= Location & Phone ================= */}
          <div className="relative z-10 mt-6 flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
            <div
              className={`
                flex
                max-w-lg
                items-start
                gap-3

                ${
                  property.soldOut
                    ? ""
                    : "transition-transform duration-300 hover:translate-x-2"
                }
              `}
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#fdb713]">
                <FaMapMarkerAlt size={13} />
              </span>

              <span
                className={
                  property.soldOut
                    ? "leading-7 text-white/55"
                    : "leading-7 text-white/90"
                }
              >
                {property.location}
              </span>
            </div>

            {property.soldOut ? (
              <div className="flex items-center gap-3 text-white/50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#fdb713]">
                  <FaPhoneAlt size={12} />
                </span>

                <span className="font-semibold">{property.phone}</span>
              </div>
            ) : (
              <Link
                href={`tel:${phoneLink}`}
                className="flex items-center gap-3 text-white/90 transition-all duration-300 hover:translate-x-2 hover:text-[#fdb713]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#fdb713] transition-all duration-300 hover:-rotate-12 hover:bg-[#fdb713] hover:text-[#12568d]">
                  <FaPhoneAlt size={12} />
                </span>

                <span className="font-semibold">{property.phone}</span>
              </Link>
            )}
          </div>

          {/* ================= Description ================= */}
          <p
            className={`
              relative
              z-10
              mt-5
              text-sm
              font-medium
              leading-7
              sm:text-[15px]

              ${
                property.soldOut
                  ? "text-white/45"
                  : "text-white/85 transition-colors duration-500 group-hover:text-white"
              }
            `}
          >
            {property.description}
          </p>

          {/* ================= Features ================= */}
          <div className="relative z-10 mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  text-[#fdb713]

                  ${
                    property.soldOut
                      ? "opacity-60"
                      : "transition-all duration-300 hover:scale-110 hover:bg-[#fdb713] hover:text-[#12568d]"
                  }
                `}
              >
                <FaArrowsAlt size={14} />
              </span>

              <span
                className={`font-semibold ${
                  property.soldOut ? "text-white/45" : "text-white/90"
                }`}
              >
                {property.featureOne}
              </span>
            </div>

            {property.featureTwo && (
              <div className="flex items-center gap-3">
                <span
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    text-[#fdb713]

                    ${
                      property.soldOut
                        ? "opacity-60"
                        : "transition-all duration-300 hover:scale-110 hover:bg-[#fdb713] hover:text-[#12568d]"
                    }
                  `}
                >
                  <FaRoad size={14} />
                </span>

                <span
                  className={`font-semibold ${
                    property.soldOut ? "text-white/45" : "text-white/90"
                  }`}
                >
                  {property.featureTwo}
                </span>
              </div>
            )}
          </div>

          {/* ================= Buttons ================= */}
          <div className="relative z-10 mt-auto flex flex-wrap gap-3 pt-7">
            {property.soldOut ? (
              <>
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-12 cursor-not-allowed items-center justify-center bg-slate-400/60 px-7 text-sm font-black uppercase tracking-wide text-white/60"
                >
                  Sold Out
                </button>

                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-12 cursor-not-allowed items-center justify-center border border-white/10 bg-slate-700/50 px-7 text-sm font-black uppercase tracking-wide text-white/45"
                >
                  Sold Out
                </button>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href="#contact"
                    className="group/button inline-flex min-h-12 items-center justify-center gap-2 bg-[#12568d] px-6 text-sm font-black uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#12568d]"
                  >
                    Enquiry Now

                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover/button:translate-x-1.5"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href={property.href}
                    className="group/button inline-flex min-h-12 items-center justify-center gap-2 bg-[#fdb713] px-6 text-sm font-black uppercase tracking-wide text-[#12568d] shadow-lg transition-all duration-300 hover:bg-white"
                  >
                    More Details

                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover/button:translate-x-1.5"
                    />
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PropertyListings() {
  return (
    <section
      id="properties"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= Heading ================= */}
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

        {/* ================= Property Cards ================= */}
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
              <PropertyCard property={property} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}