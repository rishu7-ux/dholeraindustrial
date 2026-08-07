"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "#about-industrial",
  },
  {
    label: "Properties",
    href: "#properties",
  },
  {
    label: "Blog",
    href: "#blog",
  },
  {
    label: "Contact Us",
    href: "#contact",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const propertyLinks = [
  {
    label: "Samridhi 621 Ranchi",
    href: "/properties/1",
  },
  {
    label: "Samridhi 365",
    href: "/properties/2",
  },
  {
    label: "Samridhi 872/2",
    href: "/properties/3",
  },
  {
    label: "Sandhida 191 Logistic Plot",
    href: "/properties/4",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919217104219",
    icon: FaWhatsapp,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#12568d] text-white"
    >
      {/* Decorative background */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-20, 25, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#fdb713]/10 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [20, -25, 20],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />

      {/* Main footer */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:px-8 lg:py-20">
        {/* Contact column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FooterHeading title="Contact Us" />

          <div className="mt-8 space-y-5">
            <Link
              href="tel:+919217104219"
              className="group flex items-start gap-4 text-sm text-white/80 transition hover:text-[#fdb713] sm:text-base"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#fdb713] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                <FaPhoneAlt size={14} />
              </span>

              <span className="pt-2 font-semibold">+91 9217104219</span>
            </Link>

            <Link
              href="mailto:customercare@omanaprojects.com"
              className="group flex items-start gap-4 text-sm text-white/80 transition hover:text-[#fdb713] sm:text-base"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#fdb713] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
                <FaEnvelope size={15} />
              </span>

              <span className="break-all pt-2 font-semibold">
                customercare@omanaprojects.com
              </span>
            </Link>

            <div className="flex items-start gap-4 text-sm text-white/80 sm:text-base">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#fdb713]">
                <FaMapMarkerAlt size={15} />
              </span>

              <p className="max-w-xl pt-1 leading-7">
                7th floor, Plot No. 56A/16, C Block, Phase 2, Industrial Area,
                Sector 62, Noida, Uttar Pradesh 201309
              </p>
            </div>
          </div>

          <div className="mt-8 h-px bg-white/10" />

          {/* Social links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -5,
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.94,
                }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/10 text-white transition-all duration-300 hover:border-[#fdb713] hover:bg-[#fdb713] hover:text-[#12568d]"
                >
                  <Icon size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FooterHeading title="Quick Links" />

          <ul className="mt-8 space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#fdb713] sm:text-base"
                >
                  <span className="h-[2px] w-0 bg-[#fdb713] transition-all duration-300 group-hover:w-5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Property links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FooterHeading title="Properties" />

          <ul className="mt-8 space-y-4">
            {propertyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#fdb713] sm:text-base"
                >
                  <span className="h-[2px] w-0 bg-[#fdb713] transition-all duration-300 group-hover:w-5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#properties"
            className="group mt-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#fdb713]"
          >
            View All Properties

            <span className="h-[2px] w-8 bg-[#fdb713] transition-all duration-300 group-hover:w-14" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 border-t border-white/10 bg-[#0d456f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/65 sm:px-6 md:flex-row md:text-left lg:px-8 sm:text-sm">
          <p>
            Copyright © 2026 Dholera Industrial Plots. All rights reserved.
          </p>

         
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-serif text-xl font-black uppercase text-white">
        {title}
      </h2>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-[3px] w-10 bg-[#fdb713]" />
        <span className="h-[3px] w-4 bg-white/50" />
      </div>
    </div>
  );
}