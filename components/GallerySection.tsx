"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  category: string;
}; 

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery/airtop images .webp",
    title: "Dholera International Airport",
    category: "Connectivity",
  },

  {
    id: 2,
    image: "/gallery/gallery2.webp",
    title: "Future Metro Connectivity",
    category: "Transport",
  },
  {
    id: 3,
    image: "/gallery/gallery3.webp",
    title: "Premium Smart Development",
    category: "Infrastructure",
  },
  {
    id: 4,
    image: "/gallery/gallery 4.webp",
    title: "Modern Business District",
    category: "Commercial",
  },
  {
    id: 5,
    image: "/gallery/gallery 5.webp",
    title: "Dholera Expressway Network",
    category: "Connectivity",
  },
  {
    id: 6,
    image: "/gallery/n1.webp",
    title: "Smart Industrial Entrance",
    category: "Development",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const galleryContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const galleryCard: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function GalleryIntro() {
  return (
    <>
      <motion.p
        variants={fadeUp}
        className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#FF7A00] sm:text-sm"
      >
        Gallery
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="premium-gallery-title mt-4 font-serif text-3xl font-black leading-tight text-[#0A2E73] sm:text-4xl lg:text-5xl"
      >
        Explore Dholera&apos;s Smart Future
      </motion.h2>

      <motion.div variants={fadeUp} className="mt-5 flex items-center gap-2">
        <span className="h-0.75 w-16 bg-[#FF7A00]" />
        <span className="h-0.75 w-8 bg-[#081A3A]" />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-7 text-[15px] leading-8 text-[#0A2E73] sm:text-base"
      >
        Discover Dholera&apos;s airport, metro connectivity, expressway,
        business districts and next-generation industrial infrastructure.
      </motion.p>
    </>
  );
}

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;


  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  
  const closeImage = () => {
    setSelectedIndex(null);
  };


  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
    );
  };


  return (
    <>
      <section
        id="gallery"
        className="premium-gallery-section relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        {/* Background animation */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [-30, 30, -30],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 -top-40 h-107.5 w-107.5 rounded-full bg-[#081A3A]/5 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [30, -30, 30],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-44 -right-40 h-115 w-115 rounded-full bg-[#FF7A00]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="premium-gallery-mobile-intro mb-8 lg:hidden"
          >
            <GalleryIntro />
          </motion.div>

          <div className="premium-gallery-layout grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Featured image */}
            <motion.div
              initial={{
                opacity: 0,
                x: -70,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="premium-gallery-featured group relative"
            >
              {/* Top-left accent corner — no white mask */}
              <motion.div
                aria-hidden="true"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-3 -top-3 z-0 h-16 w-20 rounded-tl-[20px] border-l-[6px] border-t-[6px] border-[#FF7A00] sm:-left-4 sm:-top-4 sm:h-20 sm:w-24"
              />

              {/* Bottom-right accent corner — no white mask */}
              <motion.div
                aria-hidden="true"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-3 -right-3 z-0 h-16 w-20 rounded-br-[20px] border-b-[6px] border-r-[6px] border-[#081A3A] sm:-bottom-4 sm:-right-4 sm:h-20 sm:w-24"
              />

              <motion.button
                type="button"
                onClick={() => openImage(0)}
                whileHover={{
                  y: -7,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="premium-gallery-featured-card relative block w-full touch-manipulation overflow-hidden rounded-[28px] shadow-[0_30px_85px_rgba(8,26,58,0.22)]"
              >
                <div className="premium-gallery-featured-media relative h-90 overflow-hidden rounded-[28px] sm:h-117.5 lg:h-130">
                  <Image
                    src={galleryItems[0].image}
                    alt={galleryItems[0].title}
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  {/* Expand icon */}
                  <span className="premium-gallery-expand premium-gallery-expand-featured absolute right-5 top-5 flex h-12 w-12 -translate-y-3 items-center justify-center rounded-full bg-white/95 text-[#081A3A] opacity-0 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <FaExpand size={16} />
                  </span>

                  {/* Featured caption */}
                  <div className="premium-gallery-featured-caption absolute bottom-5 left-5 right-5 border-l-4 border-[#FF7A00] bg-[#081A3A]/70 px-5 py-4 text-left text-white shadow-xl backdrop-blur-sm sm:right-auto sm:max-w-[360px]">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF7A00]">
                      {galleryItems[0].category}
                    </p>

                    <h3 className="mt-1 text-base font-black sm:text-lg">
                      {galleryItems[0].title}
                    </h3>
                  </div>

                  {/* Bottom hover line */}
                  <span className="premium-gallery-hover-line absolute bottom-0 left-0 h-1.5 w-0 bg-[#FF7A00] transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.button>
            </motion.div>

            {/* Right content */}
            <motion.div
              className="premium-gallery-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <div className="hidden lg:block">
                <GalleryIntro />
              </div>

              {/* Thumbnail gallery */}
              <motion.div
                variants={galleryContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="premium-gallery-grid grid grid-cols-2 gap-3 sm:gap-4 lg:mt-8"
              >
                {galleryItems.slice(1, 5).map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    variants={galleryCard}
                    whileHover={{
                      y: -8,
                      scale: 1.025,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => openImage(index + 1)}
                    className="premium-gallery-thumb group/thumb relative h-36.25 touch-manipulation overflow-hidden rounded-[22px] shadow-[0_18px_45px_rgba(8,26,58,0.18)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(8,26,58,0.28)] sm:h-[175px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />

                    {/* Caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-[#081A3A]/65 p-3 text-left backdrop-blur-[2px] sm:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF7A00]">
                        {item.category}
                      </p>

                      <h3 className="mt-1 line-clamp-2 text-xs font-black text-white sm:text-sm">
                        {item.title}
                      </h3>
                    </div>

                    {/* Expand icon */}
                    <span className="premium-gallery-expand absolute right-3 top-3 flex h-9 w-9 -translate-y-3 items-center justify-center rounded-full bg-white/95 text-[#081A3A] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/thumb:translate-y-0 group-hover/thumb:opacity-100">
                      <FaExpand size={13} />
                    </span>

                    {/* Bottom hover line */}
                    <span className="premium-gallery-hover-line absolute bottom-0 left-0 h-1 w-0 bg-[#FF7A00] transition-all duration-500 group-hover/thumb:w-full" />
                  </motion.button>
                ))}
              </motion.div>

              {/* Gallery button */}
              <motion.button
                variants={fadeUp}
                type="button"
                onClick={() => openImage(5)}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group mt-6 inline-flex w-full touch-manipulation items-center justify-center gap-3 rounded-md bg-[#081A3A] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#FF7A00] hover:text-[#081A3A] hover:shadow-xl active:bg-[#FF7A00] active:text-[#081A3A] sm:mt-7 sm:w-auto"
              >
                View Full Gallery

                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1.5 group-active:translate-x-1.5"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-screen popup */}
      <AnimatePresence>
        {selectedItem && selectedIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={closeImage}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#081A3A]/90 p-4 backdrop-blur-md sm:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeImage}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 touch-manipulation items-center justify-center rounded-full bg-white text-[#081A3A] shadow-xl transition-all duration-300 hover:rotate-90 hover:bg-[#FF7A00] active:bg-[#FF7A00] sm:right-8 sm:top-8"
            >
              <FaTimes size={18} />
            </button>

            {/* Previous button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white text-[#081A3A] shadow-xl transition-all duration-300 hover:-translate-x-1 hover:bg-[#FF7A00] active:bg-[#FF7A00] sm:left-8 sm:h-12 sm:w-12"
            >
              <FaArrowLeft size={16} />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white text-[#081A3A] shadow-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#FF7A00] active:bg-[#FF7A00] sm:right-8 sm:h-12 sm:w-12"
            >
              <FaArrowRight size={16} />
            </button>

            {/* Popup image */}
            <motion.div
              key={selectedItem.id}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative h-[68vh] w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl sm:h-[80vh]"
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Popup caption */}
              <div className="absolute inset-x-0 bottom-0 bg-[#081A3A]/75 px-5 py-5 text-white backdrop-blur-sm sm:px-8 sm:py-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF7A00]">
                  {selectedItem.category}
                </p>

                <h3 className="mt-2 text-xl font-black sm:text-3xl">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
