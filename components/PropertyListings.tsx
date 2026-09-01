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
    image: "/gallery/psamridhi-872-2.webp",
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
  const category = property.title.toLowerCase().includes("logistic")
    ? "Logistic Property"
    : "Industrial Property";

  return (
    <motion.article
      variants={cardAnimation}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="premium-listing-card group relative flex min-h-[32rem] flex-col overflow-hidden border border-white/15 bg-[#081A3A] shadow-[0_18px_42px_rgba(8,26,58,0.16)] transition-[transform,border-color,box-shadow] duration-500 hover:border-[#FF7A00] hover:shadow-[0_26px_58px_rgba(8,26,58,0.28)]"
    >
      <div className="premium-listing-media relative min-h-[24rem] flex-1 overflow-hidden sm:min-h-[28rem]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] ${
            property.soldOut ? "brightness-[0.7]" : ""
          }`}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#081A3A]/10 via-transparent to-[#081A3A]" />

        <div
          className={`absolute left-5 top-5 z-10 border px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${
            property.soldOut
              ? "border-white/20 bg-[#081A3A] text-white"
              : "border-[#FF7A00] bg-[#FF7A00] text-[#191B1D]"
          }`}
        >
          {property.soldOut ? "Sold Out" : property.price}
        </div>

        <span className="absolute right-5 top-5 z-10 font-mono text-xs tracking-[0.2em] text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 pt-20 sm:px-8 sm:pb-8">
          <p className="premium-listing-eyebrow text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
            {category}
          </p>
          <h3 className="premium-listing-title mt-2 max-w-[24rem] text-2xl font-semibold uppercase leading-[0.98] text-white sm:text-3xl">
            {property.title}
          </h3>
          <span className="mt-5 block h-px w-14 bg-[#FF7A00] transition-all duration-500 group-hover:w-24" />
        </div>
      </div>

      <div className="premium-listing-body border-t border-white/10 bg-[#0A2E73] px-6 py-5 text-white sm:px-8 sm:py-6">
        <div className="flex flex-col gap-3 text-xs text-white/72">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#FF7A00]" size={13} />
            <span className="leading-5">{property.location}</span>
          </div>
          <div className="flex items-center gap-3 text-white/72">
            <FaPhoneAlt className="shrink-0 text-[#FF7A00]" size={12} />
            <span>{property.phone}</span>
          </div>
        </div>

        <p className="mt-5 text-xs leading-5 text-white/62">{property.description}</p>

        <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 text-xs text-white/78 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <FaArrowsAlt className="mt-0.5 shrink-0 text-[#FF7A00]" size={12} />
            <span>{property.featureOne}</span>
          </div>
          {property.featureTwo && (
            <div className="flex items-start gap-2">
              <FaRoad className="mt-0.5 shrink-0 text-[#FF7A00]" size={12} />
              <span>{property.featureTwo}</span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
          <a
            href={property.href}
            className="premium-listing-link inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF7A00] transition-colors hover:text-white"
          >
            View Details
            <FaArrowRight size={11} className="text-[#FF7A00] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => onEnquire(property.title)}
            className="premium-listing-enquire inline-flex items-center gap-2 border border-white/25 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#FF7A00] hover:bg-white hover:text-[#191B1D]"
          >
            Enquiry Now
            <FaArrowRight size={10} className="text-[#FF7A00]" />
          </button>
        </div>
      </div>
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
        data-section-number="01"
        className="relative w-full overflow-hidden bg-[#081A3A] py-16 text-white sm:py-20 lg:py-24"
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
            className="premium-listings-heading mb-10 grid max-w-none gap-8 text-left sm:mb-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.7fr)] lg:items-end lg:gap-16"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF7A00] sm:text-sm"
              >
                Explore Our Projects
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="premium-listings-title mt-4 max-w-5xl font-serif text-4xl font-black uppercase leading-[0.94] text-[#081A3A] sm:text-5xl lg:text-7xl"
              >
                Property Listings
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex w-28 flex-col gap-1.5"
              >
                <span className="h-0.5 w-20 bg-[#FF7A00]" />
                <span className="h-0.5 w-12 bg-[#081A3A]" />
                <span className="h-0.5 w-20 bg-[#FF7A00]" />
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-sm leading-7 text-[#5B6672] sm:text-base"
            >
              At Omana Projects, we make land investment easy, transparent and
              future-focused.
            </motion.p>
          </motion.div>

          {/* ================= PROPERTY CARDS ================= */}

          <div className="premium-listings-grid grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
