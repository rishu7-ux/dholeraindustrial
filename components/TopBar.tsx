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
    <div className="relative w-full overflow-hidden bg-[#12568d] text-white">
      {/* Animated background glow */}
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

      {/* Moving yellow glow */}
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
        className="pointer-events-none absolute -right-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#fdb713]/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-12 max-w-7xl items-center justify-between px-4 lg:px-8">
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
          className="flex-1 overflow-hidden text-center"
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
            className="text-xs font-semibold tracking-wide sm:text-sm"
          >
            Invest in India&apos;s First Greenfield Smart City – Dholera
          </motion.p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden items-center md:flex">
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
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden border-l border-white/20 transition-colors duration-300 hover:bg-[#fdb713] hover:text-[#12568d]"
              >
                {/* Shine */}
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-5 -skew-x-12 bg-white/35 transition-all duration-700 group-hover:left-16" />

                <Icon
                  size={15}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                />
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
              className="group relative flex h-12 items-center overflow-hidden bg-[#fdb713] px-6 text-sm font-black uppercase tracking-wide text-[#12568d] shadow-lg transition-colors duration-300 hover:bg-white"
            >
              <span className="pointer-events-none absolute -left-12 top-0 h-full w-7 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10">Invest Today</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
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
        className="relative z-10 flex justify-center border-t border-white/20 md:hidden"
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
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden transition-colors duration-300 hover:bg-[#fdb713] hover:text-[#12568d]"
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
