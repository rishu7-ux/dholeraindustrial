"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Director Message", href: "/director-message" },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      {/* Soft animated navbar glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-120, 240, -120],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-56 bg-linear-to-r from-transparent via-[#12568d]/5 to-transparent blur-xl"
      />

      <div className="relative mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/gallery/logo.png"
              alt="Dholera Industrial Logo"
              width={70}
              height={40}
              priority
              className="h-auto w-18 object-contain sm:w-20.5"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => {
            const active = pathname === link.href;

            return (

              <motion.div
                key={link.label}
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
                  delay: index * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  className={`group relative block py-7 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors duration-300 ${
                    active
                      ? "text-[#12568d]"
                      : "text-slate-700 hover:text-[#12568d]"
                  }`}
                >
                  <span
                    className="relative z-10 inline-block origin-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:font-bold group-hover:tracking-[0.08em] group-hover:text-[#12568d] group-hover:drop-shadow-[0_3px_10px_rgba(18,86,141,0.22)]"
                  >
                    {link.label}
                  </span>


                  <span className="pointer-events-none absolute inset-x-2 bottom-2 h-6 rounded-full bg-[#12568d]/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Call Button */}
        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.25,
          }}
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="hidden lg:block"
        >
          <Link
            href="tel:+919217104219"
            className="group flex items-center gap-3 rounded-xl border border-[#12568d]/10 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-[#fdb713] hover:shadow-[0_12px_30px_rgba(18,86,141,0.14)]"
          >
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-[#12568d] text-white shadow-md transition-colors duration-300 group-hover:bg-[#fdb713] group-hover:text-[#12568d]">
            
              <motion.span
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaPhoneAlt size={15} />
              </motion.span>

              <span className="pointer-events-none absolute -left-8 top-0 h-full w-5 -skew-x-12 bg-white/30 transition-all duration-700 group-hover:left-14" />
            </span>

            <span>
              <span className="block text-[11px] font-medium text-slate-500">
                Call Us Now
              </span>

              <span className="block text-sm font-extrabold text-[#12568d]">
                +91 9217104219
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
          >
            <Link
              href="tel:+919217104219"
              aria-label="Call us"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdb713] text-[#12568d] shadow-md"
            >
              <FaPhoneAlt size={15} />
            </Link>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            whileTap={{
              scale: 0.9,
            }}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#12568d] text-white shadow-md"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaTimes size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaBars size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
              className="px-4 py-4"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -25,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.35,
                        },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center gap-3 border-b border-slate-100 px-2 py-4 text-sm font-semibold uppercase transition-all duration-300 ${
                        active
                          ? "bg-[#12568d]/5 text-[#12568d]"
                          : "text-slate-700 hover:bg-[#12568d]/5 hover:text-[#12568d]"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          active
                            ? "scale-125 bg-[#fdb713]"
                            : "bg-[#12568d]/30 group-hover:scale-125 group-hover:bg-[#fdb713]"
                        }`}
                      />

                      {link.label}

                      <span className="ml-auto h-0.5 w-0 bg-[#fdb713] transition-all duration-300 group-hover:w-8" />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.35,
                    },
                  },
                }}
                className="pt-4"
              >
                <Link
                  href="tel:+919217104219"
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-center gap-3 rounded-xl bg-[#12568d] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition-colors duration-300 hover:bg-[#fdb713] hover:text-[#12568d]"
                >
                  <FaPhoneAlt
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />

                  Call Now: +91 9217104219
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}