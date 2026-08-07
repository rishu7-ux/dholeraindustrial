"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dholera Logistics & Warehousing Plots 2026",
    date: "Jun 29, 2026",
    image: "/blogs/blog-1.jpg",
    href: "/blog/dholera-logistics-warehousing-plots-2026",
  },
  {
    id: 2,
    title:
      "Why Dholera SIR Is India Best Location For EV And Semiconductor In 2026",
    date: "Jun 25, 2026",
    image: "/blogs/blog-2.jpg",
    href: "/blog/dholera-ev-semiconductor-2026",
  },
  {
    id: 3,
    title: "NRI Industrial Investment In Dholera SIR",
    date: "Jun 22, 2026",
    image: "/blogs/blog-3.jpg",
    href: "/blog/nri-industrial-investment-dholera",
  },
  {
    id: 4,
    title: "Top Reasons To Invest In Dholera Industrial Land",
    date: "Jun 18, 2026",
    image: "/blogs/blog-4.jpg",
    href: "/blog/reasons-to-invest-dholera",
  },
  {
    id: 5,
    title: "Dholera Expressway And Airport Growth Opportunities",
    date: "Jun 14, 2026",
    image: "/blogs/blog-5.jpg",
    href: "/blog/dholera-expressway-airport-growth",
  },
  {
    id: 6,
    title: "Future Of Manufacturing And Logistics In Dholera",
    date: "Jun 10, 2026",
    image: "/blogs/blog-6.jpg",
    href: "/blog/manufacturing-logistics-dholera",
  },
];

const duplicatedBlogs = [...blogPosts, ...blogPosts];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative w-[310px] shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-[#fdb713] hover:shadow-[0_30px_70px_rgba(18,86,141,0.18)] sm:w-[360px] lg:w-[390px]"
    >
      {/* Top yellow line */}
      <span className="absolute left-0 top-0 z-20 h-1 w-full bg-[#fdb713]" />

      {/* Blog image */}
      <div className="relative h-[230px] overflow-hidden sm:h-[250px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-[0.5deg]"
          sizes="(max-width: 640px) 310px, (max-width: 1024px) 360px, 390px"
        />

        {/* Very light image hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

        {/* Hover label */}
        <div className="absolute bottom-5 left-5 translate-y-5 border-l-4 border-[#fdb713] bg-white/95 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#12568d] opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Dholera Blog
        </div>
      </div>

      {/* Shine effect */}
      <div className="pointer-events-none absolute inset-y-0 -left-40 z-20 w-28 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-1000 group-hover:left-[120%]" />

      {/* Blog content */}
      <div className="relative z-10 flex min-h-[245px] flex-col bg-white p-6 sm:p-7">
        <h3 className="font-serif text-xl font-black leading-tight text-slate-800 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#12568d]">
          {post.title}
        </h3>

        <span className="mt-4 block h-[3px] w-12 bg-[#fdb713] transition-all duration-500 group-hover:w-24" />

        <div className="mt-5 flex items-center gap-3 text-sm text-slate-500 transition-colors duration-500 group-hover:text-slate-700">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12568d]/10 text-[#12568d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#fdb713]">
            <FaCalendarAlt size={14} />
          </span>

          <span className="font-semibold">{post.date}</span>
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={post.href}
            className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#12568d] transition-colors duration-300 hover:text-[#fdb713]"
          >
            Read More

            <FaArrowRight
              size={11}
              className="transition-transform duration-300 group-hover/link:translate-x-1.5"
            />
          </Link>
        </div>
      </div>

      {/* Bottom yellow hover line */}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#fdb713] transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

export default function BlogSlider() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#eef5fb] py-16 sm:py-20 lg:py-24"
    >
      {/* Floating left shape */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#12568d]/5 blur-3xl"
      />

      {/* Floating right shape */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [20, -20, 20],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#fdb713]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
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
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#fdb713] sm:text-sm">
            Latest Updates
          </p>

          <h2 className="mt-4 font-serif text-3xl font-black uppercase text-[#12568d] sm:text-4xl lg:text-5xl">
            Blog
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore the latest updates, investment insights and industrial
            development news from Dholera.
          </p>

          <div className="mx-auto mt-6 flex w-28 flex-col items-center gap-1.5">
            <span className="h-[2px] w-20 bg-[#fdb713]" />
            <span className="h-[2px] w-12 bg-[#12568d]" />
            <span className="h-[2px] w-20 bg-[#fdb713]" />
          </div>
        </motion.div>
      </div>

      {/* Automatic continuous slider */}
      <div className="relative mt-12 overflow-hidden">
        {/* Left fade matching background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-gradient-to-r from-[#eef5fb] to-transparent sm:w-24" />

        {/* Right fade matching background */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-10 bg-gradient-to-l from-[#eef5fb] to-transparent sm:w-24" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-7 px-4 sm:px-6 lg:px-8"
        >
          {duplicatedBlogs.map((post, index) => (
            <BlogCard key={`${post.id}-${index}`} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}