"use client";

import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "Delhi",
    message:
      "I visited Dholera with Omana Projects and was impressed with how professionally everything was handled. Legal clarity, guided tour, and honest advice.",
  },
  {
    id: 2,
    name: "Meena Rathi",
    location: "Mumbai",
    message:
      "They helped me find an ideal plot for my upcoming warehouse project. Location, price, and paperwork — everything was spot on!",
  },
  {
    id: 3,
    name: "Rohit Patel",
    location: "Ahmedabad",
    message:
      "I had zero experience in land investment, but the Omana Projects team made the process simple and clear. Highly recommended.",
  },
  {
    id: 4,
    name: "Neha Verma",
    location: "Noida",
    message:
      "The team was transparent, supportive, and responsive. I received proper guidance before finalizing my industrial plot.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur",
    message:
      "The site visit was well managed and all my investment questions were answered clearly. The overall experience was excellent.",
  },
  {
    id: 6,
    name: "Karan Malhotra",
    location: "Gurugram",
    message:
      "Omana Projects helped me understand the future growth potential of Dholera. Their documentation and customer support were professional.",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative flex min-h-72.5 w-[320px] shrink-0 flex-col overflow-hidden border border-[#081A3A]/15 bg-white p-6 shadow-sm transition-shadow duration-500 hover:border-[#FF7A00] hover:shadow-[0_24px_65px_rgba(8,26,58,0.18)] sm:w-[380px] sm:p-7 lg:w-[400px]"
    >
      {/* Accent top border */}
      <span className="absolute left-0 top-0 h-1 w-full bg-[#FF7A00]" />

      {/* Charcoal hover background */}
      <div className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[#081A3A] transition-transform duration-500 group-hover:scale-y-100" />

      {/* Moving shine */}
      <div className="pointer-events-none absolute inset-y-0 -left-40 z-2 w-28 -skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[120%]" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Quote and rating */}
        <div className="flex items-center justify-between">
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaQuoteLeft
              size={28}
              className="text-[#FF7A00] transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={12}
                className="text-[#FF7A00]"
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <p className="mt-6 text-sm leading-7 text-[#0A2E73] transition-colors duration-500 group-hover:text-white/90 sm:text-[15px]">
          “{testimonial.message}”
        </p>

        {/* User details */}
        <div className="mt-auto pt-8">
          <span className="mb-5 block h-0.75 w-10 bg-[#FF7A00] transition-all duration-500 group-hover:w-20 group-hover:bg-white" />

          <h3 className="text-base font-extrabold text-[#081A3A] transition-colors duration-500 group-hover:text-white">
            {testimonial.name}
          </h3>

          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A2E73] transition-colors duration-500 group-hover:text-[#FF7A00]">
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" data-section-number="06" className="relative overflow-hidden bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
      {/* Soft background decoration */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#081A3A]/5 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [20, -20, 20],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#FF7A00]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#081A3A] sm:text-sm">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[#081A3A] sm:text-4xl lg:text-5xl">
            What people say
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-0.75 w-16 bg-[#FF7A00]" />
            <span className="h-0.75 w-8 bg-[#081A3A]" />
          </div>
        </motion.div>
      </div>

      {/* Continuous slider */}
      <div className="relative mt-12 overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-[#FFFFFF] to-transparent sm:w-24" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-linear-to-l from-[#FFFFFF] to-transparent sm:w-24" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6 px-4 sm:px-6 lg:px-8"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
