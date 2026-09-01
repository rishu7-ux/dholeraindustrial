"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/14nw1ZfSqB3/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/omana_projects",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919217104219",
    icon: FaWhatsapp,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@OmanaProjects",
    icon: FaYoutube,
  },
];

export default function TopBar() {
  return (
    <div className="topbar premium-topbar relative w-full overflow-hidden bg-[#0A2E73] font-mono text-[12px] text-white/70 shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      {/* A restrained orange marker echoes the architectural detail in the
          reference header without adding another interactive element. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full border border-[#FF7A00]/80 sm:block"
      >
        <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A00]" />
      </span>

      {/* Subtle graphite sheen */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-80, 180, -80],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-transparent via-white/10 to-transparent blur-xl"
      />

      {/* Moving accent glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -120, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#FF7A00]/10 blur-3xl"
      />

      <div className="wrap relative z-10 mx-auto flex h-[38px] max-w-[1320px] items-center justify-between gap-6 px-4 lg:px-8">
        {/* Announcement */}
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="tel min-w-0 flex-1 overflow-hidden text-left"
        >
          <motion.p
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="truncate text-[10px] font-medium tracking-[0.08em] text-white/75 sm:text-xs"
          >
            Invest in India&apos;s First Greenfield Smart City – Dholera
          </motion.p>
        </motion.div>

        {/* Desktop */}
        <div className="social hidden items-center gap-4 md:flex">
          {socialLinks.map(({ name, href, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group relative flex h-[38px] items-center justify-center gap-2 text-[11px] tracking-[0.05em] text-white/60 transition-colors duration-300 hover:text-[#FF7A00]"
              >
                <Icon size={13} className="relative z-10 shrink-0 md:hidden xl:block" />
                <span className="relative z-10">{name}</span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href="/contact"
              className="group relative ml-1 flex h-[38px] items-center overflow-hidden bg-[#FF7A00] px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#191B1D] shadow-[0_8px_24px_rgba(255,122,0,0.18)] transition-colors duration-300 hover:bg-white"
            >
              <span className="pointer-events-none absolute -left-12 top-0 h-full w-7 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10">Invest Today</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* The floating social dock remains available on mobile, so repeating
          the same links here would unnecessarily double the header height. */}
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          height: "auto",
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="relative z-10 hidden justify-center border-t border-[#081A3A]/15"
      >
        {socialLinks.map(({ name, href, icon: Icon }, index) => (
          <motion.div
            key={name}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.25 + index * 0.07,
            }}
            whileTap={{
              scale: 0.88,
            }}
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden transition-colors duration-300 hover:bg-[#FF7A00] hover:text-[#081A3A]"
            >
              <span className="pointer-events-none absolute -left-8 top-0 h-full w-4 -skew-x-12 bg-white/35 transition-all duration-500 group-hover:left-12" />

              <Icon
                size={14}
                className="relative z-10 transition-transform duration-300 group-hover:scale-125"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
