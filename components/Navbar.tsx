
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Director Message", href: "/director-message" },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      data-premium-navbar
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-[#191B1D]/20 bg-white/95 shadow-[0_10px_35px_rgba(25,27,29,0.12)] backdrop-blur-xl"
          : "border-[#191B1D]/15 bg-white shadow-sm"
      }`}
    >
      {/* Charcoal glow */}
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
        className={`pointer-events-none absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-30"
        }`}
      />

      <div className="relative mx-auto flex h-14 max-w-none items-center justify-between px-5 sm:h-20 sm:px-8 lg:h-[112px] lg:px-12 xl:px-14">
        {/* LOGO */}

{/* LOGO - NEVER CHANGES ON SCROLL */}
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
  className="shrink-0"
>
  <Link
    href="/"
    onClick={() => setMenuOpen(false)}
    aria-label="Go to homepage"
    className="flex items-center gap-3 sm:gap-4"
  >
    <span className="premium-logo-mark">
      <Image
        src="/gallery/logo.png"
        alt="Omana Projects — We think about you"
        width={1080}
        height={1080}
        preload
        className="absolute inset-0 h-full w-full object-contain"
      />
    </span>
  </Link>
</motion.div>



        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-9">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);

            return (
              <motion.div
                key={link.href}
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
                    className={`group relative block whitespace-nowrap py-7 text-[12px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 xl:text-[13px] ${
                    active
                      ? "text-[#FF7A00]"
                      : "text-[#191B1D] hover:text-[#FF7A00]"
                  }`}
                >
                  <span className="relative z-10 inline-block transition-all duration-300 group-hover:-translate-y-0.5 group-hover:font-bold">
                    {link.label}
                  </span>

                  {/* UNDERLINE */}
                  <span
                    className={`absolute bottom-3 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#FF7A00] transition-all duration-300 ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* DESKTOP CONTACT ACTIONS */}
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
          className="hidden shrink-0 lg:block"
        >
          <div className="flex items-center gap-7 xl:gap-9">
            <Link
              href="tel:+919217104219"
              className="whitespace-nowrap font-mono text-[13px] tracking-[0.04em] text-[#191B1D] transition-colors duration-300 hover:text-[#FF7A00]"
            >
              Call: +91 92171 04219
            </Link>

            <Link
              href="/contact"
              className="premium-header-enquire group inline-flex items-center gap-3 bg-[#FF7A00] px-7 py-4 font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-[#191B1D] shadow-[0_12px_28px_rgba(255,122,0,0.2)] transition-all duration-300 hover:bg-white hover:text-[#191B1D]"
            >
              <span>ENQUIRE NOW</span>
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link
              href="tel:+919217104219"
              aria-label="Call us"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF7A00] text-[#191B1D] shadow-md sm:h-11 sm:w-11 sm:rounded-xl"
            >
              <FaPhoneAlt size={15} />
            </Link>
          </motion.div>

          <motion.button
            type="button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            whileTap={{
              scale: 0.9,
            }}
            className="premium-menu-toggle relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-[#191B1D] text-white shadow-md transition-all duration-300 sm:h-11 sm:w-11 sm:rounded-xl"
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

      {/* MOBILE NAVIGATION */}
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
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="premium-mobile-menu overflow-hidden border-t border-[#191B1D]/15 bg-white lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="mx-auto max-h-[calc(100dvh-3.5rem)] max-w-7xl overflow-y-auto px-3 py-2 sm:max-h-[calc(100dvh-5rem)] sm:px-6 sm:py-4"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -25,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className={`group relative flex items-center justify-center rounded-md border-b px-8 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.04em] transition-all duration-300 sm:rounded-lg sm:px-10 sm:py-4 sm:text-sm ${
                        active
                          ? "border-[#191B1D]/15 bg-[#191B1D]/10 text-[#FF7A00]"
                          : "border-[#191B1D]/15 text-[#5B6672] hover:bg-[#191B1D]/5 hover:text-[#191B1D]"
                      }`}
                    >
                      <span
                        className={`absolute left-3 h-2 w-2 shrink-0 rounded-full ${
                          active
                            ? "bg-[#FF7A00]"
                            : "bg-[#191B1D]/30"
                        }`}
                      />

                      <span>{link.label}</span>

                      <span
                        className={`absolute right-3 h-0.5 rounded-full bg-[#FF7A00] transition-all duration-300 ${
                          active
                            ? "w-8"
                            : "w-0 group-hover:w-8"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              {/* MOBILE CALL */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="pt-2 sm:pt-4"
              >
                <Link
                  href="tel:+919217104219"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="premium-mobile-call group flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF7A00] px-4 py-2.5 text-xs font-extrabold text-[#191B1D] shadow-lg sm:gap-3 sm:rounded-xl sm:px-5 sm:py-4 sm:text-sm"
                >
                  <FaPhoneAlt size={14} />

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
