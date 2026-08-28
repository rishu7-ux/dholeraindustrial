
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
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-[#12568d]/90 shadow-[0_10px_35px_rgba(18,86,141,0.28)] backdrop-blur-xl"
          : "border-slate-200/80 bg-white shadow-sm"
      }`}
    >
      {/* BLUE GLOW */}
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

      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
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
    className="flex items-center"
  >
    <Image
      src="/gallery/logo.png"
      alt="Dholera Industrial Logo"
      width={70}
      height={40}
      priority
      className="h-auto w-14 object-contain sm:w-[82px]"
    />
  </Link>
</motion.div>



        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
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
                  className={`group relative block whitespace-nowrap py-7 text-[12px] font-semibold uppercase tracking-[0.04em] transition-all duration-300 xl:text-[13px] ${
                    scrolled
                      ? active
                        ? "text-[#fdb713]"
                        : "text-white hover:text-[#fdb713]"
                      : active
                      ? "text-[#12568d]"
                      : "text-slate-700 hover:text-[#12568d]"
                  }`}
                >
                  <span className="relative z-10 inline-block transition-all duration-300 group-hover:-translate-y-0.5 group-hover:font-bold">
                    {link.label}
                  </span>

                  {/* UNDERLINE */}
                  <span
                    className={`absolute bottom-3 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#fdb713] transition-all duration-300 ${
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

        {/* DESKTOP CALL BUTTON */}
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
          <Link
            href="tel:+919217104219"
            className={`group flex items-center gap-3 rounded-xl border px-3 py-2 transition-all duration-300 ${
              scrolled
                ? "border-white/20 bg-white/10 shadow-lg backdrop-blur-xl"
                : "border-[#12568d]/10 bg-white shadow-sm"
            } hover:border-[#fdb713]`}
          >
            <span
              className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg shadow-md transition-all duration-300 ${
                scrolled
                  ? "bg-[#fdb713] text-[#12568d]"
                  : "bg-[#12568d] text-white group-hover:bg-[#fdb713] group-hover:text-[#12568d]"
              }`}
            >
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
            </span>

            <span>
              <span
                className={`block text-[11px] font-medium ${
                  scrolled ? "text-white/65" : "text-slate-500"
                }`}
              >
                Call Us Now
              </span>

              <span
                className={`block whitespace-nowrap text-sm font-extrabold ${
                  scrolled
                    ? "text-white"
                    : "text-[#12568d]"
                }`}
              >
                +91 9217104219
              </span>
            </span>
          </Link>
        </motion.div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link
              href="tel:+919217104219"
              aria-label="Call us"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdb713] text-[#12568d] shadow-md sm:h-11 sm:w-11 sm:rounded-xl"
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
            className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg shadow-md transition-all duration-300 sm:h-11 sm:w-11 sm:rounded-xl ${
              scrolled
                ? "bg-white/15 text-white ring-1 ring-white/20"
                : "bg-[#12568d] text-white"
            }`}
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
            className={`overflow-hidden border-t lg:hidden ${
              scrolled
                ? "border-white/10 bg-[#12568d]/95 backdrop-blur-xl"
                : "border-slate-200 bg-white"
            }`}
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
                        scrolled
                          ? active
                            ? "border-white/10 bg-white/10 text-[#fdb713]"
                            : "border-white/10 text-white hover:bg-white/10 hover:text-[#fdb713]"
                          : active
                          ? "border-slate-200/60 bg-[#12568d]/10 text-[#12568d]"
                          : "border-slate-200/60 text-slate-700 hover:bg-[#12568d]/5 hover:text-[#12568d]"
                      }`}
                    >
                      <span
                        className={`absolute left-3 h-2 w-2 shrink-0 rounded-full ${
                          active
                            ? "bg-[#fdb713]"
                            : scrolled
                            ? "bg-white/40"
                            : "bg-[#12568d]/30"
                        }`}
                      />

                      <span>{link.label}</span>

                      <span
                        className={`absolute right-3 h-0.5 rounded-full bg-[#fdb713] transition-all duration-300 ${
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
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#fdb713] px-4 py-2.5 text-xs font-extrabold text-[#12568d] shadow-lg sm:gap-3 sm:rounded-xl sm:px-5 sm:py-4 sm:text-sm"
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
