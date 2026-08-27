"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/14nw1ZfSqB3/?mibextid=wwXIfr",
    label: "Facebook",
    background:
      "linear-gradient(145deg,#5fa0ff 0%,#1877f2 58%,#0c55bd 100%)",
    glow: "rgba(24,119,242,.55)",
  },

  {
    icon: FaWhatsapp,
    href: "https://wa.me/919217104219",
    label: "WhatsApp",
    background:
      "linear-gradient(145deg,#5ff397 0%,#25d366 58%,#159a48 100%)",
    glow: "rgba(37,211,102,.55)",
  },

  {
    icon: FaInstagram,
    href: "https://www.instagram.com/omana_projects",
    label: "Instagram",
    background:
      "linear-gradient(145deg,#feda75 0%,#fa7e1e 25%,#d62976 55%,#962fbf 78%,#4f5bd5 100%)",
    glow: "rgba(214,41,118,.55)",
  },

  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/omana-projectss/",
    label: "LinkedIn",
    background:
      "linear-gradient(145deg,#55a7dd 0%,#0a66c2 58%,#004182 100%)",
    glow: "rgba(10,102,194,.50)",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@OmanaProjects",
    label: "YouTube",
    background:
      "linear-gradient(145deg,#ff6a6a 0%,#ff0000 58%,#bd0000 100%)",
    glow: "rgba(255,0,0,.50)",
  },
  
];

export default function SocialBar() {
  return (
    <div
      className="
        fixed
        left-1.5
        top-1/2
        z-999
        flex
        -translate-y-1/2
        flex-col
        gap-2
        sm:left-2
        sm:gap-2.5
        lg:left-3
        lg:gap-3
      "
    >
      {socialLinks.map(
        ({ icon: Icon, href, label, background, glow }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative block"
          >
            {/* Glow */}
            <span
              className="
                pointer-events-none
                absolute
                inset-1
                rounded-xl
                opacity-0
                blur-lg
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:opacity-100
              "
              style={{ backgroundColor: glow }}
            />

            {/* Social Icon */}
            <span
              style={{ background }}
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                overflow-hidden
                rounded-[11px]
                border
                border-white/20
                shadow-[inset_0_1px_1px_rgba(255,255,255,.4),0_6px_16px_rgba(0,0,0,.22)]
                transition-all
                duration-500
                active:scale-90
                sm:h-10
                sm:w-10
                sm:rounded-xl
                lg:h-12
                lg:w-12
                lg:rounded-[14px]
                lg:group-hover:-translate-y-1
                lg:group-hover:translate-x-1
                lg:group-hover:scale-110
              "
            >
              {/* Top glass shine */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-1/2
                  rounded-t-[11px]
                  bg-linear-to-b
                  from-white/40
                  via-white/10
                  to-transparent
                  sm:rounded-t-xl
                  lg:rounded-t-[14px]
                "
              />

              {/* Inner border */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-px
                  rounded-[10px]
                  border
                  border-white/15
                  sm:rounded-[11px]
                  lg:rounded-[13px]
                "
              />

              {/* Moving shine */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-10
                  top-0
                  h-full
                  w-5
                  -skew-x-12
                  bg-white/40
                  transition-all
                  duration-700
                  group-hover:left-16
                "
              />

              <Icon
                className="
                  relative
                  z-10
                  text-[15px]
                  text-white
                  transition-transform
                  duration-300
                  sm:text-[17px]
                  lg:text-[20px]
                  lg:group-hover:scale-110
                "
              />

              {/* Bottom glass highlight */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-1
                  left-1/2
                  h-0.5
                  w-4
                  -translate-x-1/2
                  rounded-full
                  bg-white/20
                  blur-[1px]
                  lg:w-5
                "
              />
            </span>

            {/* Tooltip only on desktop */}
            <span
              className="
                pointer-events-none
                absolute
                left-14
                top-1/2
                hidden
                -translate-y-1/2
                whitespace-nowrap
                rounded-lg
                bg-slate-900
                px-3
                py-1.5
                text-xs
                font-semibold
                text-white
                opacity-0
                shadow-lg
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
                lg:block
                lg:left-16
              "
            >
              {label}
            </span>
          </Link>
        )
      )}
    </div>
  );
}
