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
    value: 8,
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
    <section
      id="stats"
      data-section-number="05"
      className="premium-stats relative overflow-hidden bg-[#FF7A00] text-white"
    >
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-5">
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
              className={`premium-stat relative flex min-h-[70px] min-w-0 flex-col items-center justify-center border-b border-white/35 px-2 py-2 text-center sm:min-h-[86px] sm:px-4 sm:py-3 lg:min-h-[102px] lg:border-b-0 lg:px-6 lg:py-4 ${
                index !== 0 ? "lg:border-l" : ""
              } ${index === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Large editorial number. The value and label remain the
                  existing project data; only the visual treatment changes. */}
              <motion.p
                className="premium-stat-number text-[2.1rem] leading-none sm:text-4xl lg:text-[3.25rem]"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  format={stat.format}
                  delay={index * 0.12}
                />
              </motion.p>

              <p className="premium-stat-label mt-1.5 text-[8px] font-medium uppercase leading-4 tracking-[0.12em] sm:mt-2 sm:text-[10px] sm:tracking-[0.18em]">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
