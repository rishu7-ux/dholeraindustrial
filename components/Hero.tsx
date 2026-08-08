"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaRoad,
  FaRulerCombined,
} from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/hero/hero-1.jpg",
    title: "Samridhi 872/2 Industrial Plot",
    location: "4B1, 4B2 & Activation Area",
    road: "70M, 48M & 55M Road Facing",
    area: "1250 - 7000 Sq. Yards",
    price: "₹1,35,00,000",
  },
  {
    id: 2,
    image: "/hero/hero-2.jpg",
    title: "Premium Industrial Plots",
    location: "Dholera Special Investment Region",
    road: "Wide Road Connectivity",
    area: "1000 - 5000 Sq. Yards",
    price: "₹95,00,000",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1 ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="min-h-155 w-full bg-cover bg-center transition-all duration-700 lg:min-h-180"
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Previous button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#12568d] shadow-lg transition-all duration-300 hover:bg-[#fdb713] sm:left-5 sm:h-12 sm:w-12"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#12568d] shadow-lg transition-all duration-300 hover:bg-[#fdb713] sm:right-5 sm:h-12 sm:w-12"
        >
          <FaChevronRight size={18} />
        </button>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-180 lg:px-8">
          <div className="mx-auto w-full max-w-140 lg:mx-0 lg:ml-12">
            <div className="overflow-hidden rounded-sm bg-[#12568d]/90 text-white shadow-2xl backdrop-blur-sm">
              {/* Heading */}
              <div className="border-b border-white/20 px-5 py-6 sm:px-7 sm:py-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#fdb713] sm:text-sm">
                  Premium Investment Opportunity
                </p>

                <h1 className="text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
                  {slide.title}
                </h1>
              </div>

              {/* Details */}
              <div className="space-y-4 px-5 py-6 sm:px-7">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    className="mt-1 shrink-0 text-[#fdb713]"
                    size={17}
                  />

                  <div>
                    <p className="text-xs uppercase text-white/70">Location</p>
                    <p className="mt-1 text-sm font-semibold uppercase sm:text-base">
                      {slide.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaRoad
                    className="mt-1 shrink-0 text-[#fdb713]"
                    size={17}
                  />

                  <div>
                    <p className="text-xs uppercase text-white/70">
                      Road Connectivity
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase sm:text-base">
                      {slide.road}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaRulerCombined
                    className="mt-1 shrink-0 text-[#fdb713]"
                    size={17}
                  />

                  <div>
                    <p className="text-xs uppercase text-white/70">Plot Area</p>
                    <p className="mt-1 text-sm font-semibold uppercase sm:text-base">
                      {slide.area}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price and button */}
              <div className="flex flex-col gap-4 bg-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    Starting Price
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#fdb713] sm:text-3xl">
                    {slide.price}
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center bg-[#fdb713] px-6 text-sm font-extrabold uppercase tracking-wide text-[#12568d] transition-all duration-300 hover:bg-white"
                >
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#fdb713]"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}