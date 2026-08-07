"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  label: string;
  suffix?: string;
  format?: "normal" | "indian";
};

const stats: Stat[] = [
  {
    value: 10,
    label: "Dholera Projects",
  },
  {
    value: 105,
    label: "Dholera Sold Projects",
  },
  {
    value: 20,
    label: "Years Experience",
  },
  {
    value: 124246,
    label: "Acquired Area",
    format: "indian",
  },
  {
    value: 2000,
    label: "Served Members",
  },
];

function formatNumber(value: number, format: Stat["format"]) {
  if (format === "indian") {
    return value.toLocaleString("en-IN");
  }

  return value.toLocaleString("en-US");
}

function Counter({
  value,
  format = "normal",
  suffix = "",
  delay = 0,
}: {
  value: number;
  format?: Stat["format"];
  suffix?: string;
  delay?: number;
}) {
  const counterRef = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame: number | undefined;
    let startTime: number | null = null;

    const duration = 1800;
    const delayTime = delay * 1000;

    const timer = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTime === null) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easedProgress * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, delayTime);

    return () => {
      window.clearTimeout(timer);

      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [delay, isInView, value]);

  return (
    <span ref={counterRef}>
      {formatNumber(count, format)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group relative px-4 text-center sm:text-left lg:px-7"
            >
              {/* Separator */}
              {index !== 0 && (
                <span className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-slate-200 lg:block" />
              )}

              {/* Number */}
              <motion.p
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3.3 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-3xl font-black text-[#12568d] sm:text-4xl"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  format={stat.format}
                  delay={index * 0.12}
                />
              </motion.p>

              {/* Label */}
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-700 sm:text-xs">
                {stat.label}
              </p>

              {/* Blue underline */}
              <span className="mx-auto mt-4 block h-[3px] w-0 bg-[#12568d] transition-all duration-500 group-hover:w-14 sm:mx-0" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}