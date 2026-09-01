"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

type Partner = {
  id: number;
  name: string;
  logo: string;
};

const partners: Partner[] = [
  {
    id: 1,
    name: "Dholera Industrial",
    logo: "/partners/partner-1.png",
  },
  {
    id: 2,
    name: "Tata",
    logo: "/partners/partner-2.png",
  },
  {
    id: 3,
    name: "Adani",
    logo: "/partners/partner-3.png",
  },
  {
    id: 4,
    name: "Airbus",
    logo: "/partners/partner-4.png",
  },
  {
    id: 5,
    name: "Hindustan Petroleum",
    logo: "/partners/partner-5.png",
  },
  {
    id: 6,
    name: "Dholera Smart City",
    logo: "/partners/partner-6.png",
  },
];

const duplicatedPartners = [...partners, ...partners];

export default function ContactPartners() {
  return (
    <section className="w-full overflow-hidden">
      {/* Contact CTA */}
      <div className="relative overflow-hidden bg-linear-to-r from-[#081A3A] via-[#0A2E73] to-[#FF7A00] py-16 text-white sm:py-20 lg:py-24">
        {/* Animated floating glow */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [-25, 25, -25],
            y: [-18, 18, -18],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [25, -25, 25],
            y: [18, -18, 18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#FF7A00]/20 blur-3xl"
        />

        {/* Moving diagonal shape */}
        <motion.div
          aria-hidden="true"
          animate={{
            rotate: [0, 8, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[10%] top-10 hidden h-28 w-28 rotate-45 border border-white/15 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 55,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF7A00] sm:text-sm"
            >
              Invest in Dholera
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-4 max-w-3xl font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
            >
              Know More About Dholera Industrial Property
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-5 text-xl font-bold sm:text-2xl"
            >
              Contact Our Property Expert
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="#contact"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 border-2 border-white bg-transparent px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:border-[#FF7A00] hover:bg-[#FF7A00] hover:text-[#081A3A]"
                >
                  Contact Agent

                  <FaArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="tel:+919217104219"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 bg-[#081A3A] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#081A3A]"
                >
                  <FaPhoneAlt
                    size={13}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />

                  Call Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Continuous partners slider */}
      <div className="relative overflow-hidden bg-[#FFFFFF] py-8 sm:py-10">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-linear-to-r from-[#FFFFFF] to-transparent sm:w-28" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-linear-to-l from-[#FFFFFF] to-transparent sm:w-28" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-5 px-4 sm:gap-7 sm:px-6 lg:px-8"
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative flex h-27.5 w-50 shrink-0 items-center justify-center overflow-hidden border border-[#081A3A]/10 bg-white px-7 shadow-sm transition-all duration-500 hover:border-[#FF7A00] hover:shadow-[0_18px_45px_rgba(8,26,58,0.15)] sm:h-[125px] sm:w-[230px]"
            >
              {/* Hover accent line */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF7A00] transition-all duration-500 group-hover:w-full" />

              {/* Shine effect */}
              <div className="pointer-events-none absolute inset-y-0 -left-28 z-10 w-20 -skew-x-12 bg-linear-to-r from-transparent via-white/60 to-transparent transition-all duration-700 group-hover:left-[120%]" />

              <Image
                src={partner.logo}
                alt={partner.name}
                width={170}
                height={75}
                className="max-h-17.5 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}