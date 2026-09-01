"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import EnquiryModal from "./ EnquiryModal";

declare global {
  interface Window {
    __dholeraIndustrialWelcomePopupOpened?: boolean;
  }
}

export default function SideEnquiry() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cmsRoute = pathname.startsWith("/admin") || pathname.startsWith("/api");

  useEffect(() => {
    if (cmsRoute) return;
    if (window.__dholeraIndustrialWelcomePopupOpened) return;

    const timer = window.setTimeout(() => {
      window.__dholeraIndustrialWelcomePopupOpened = true;
      setOpen(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [cmsRoute]);

  if (cmsRoute) return null;

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ x: 45, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 45, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Open enquiry form"
            className="fixed right-0 top-1/2 z-[9990] flex h-28 w-10 -translate-y-1/2 items-center justify-center overflow-hidden border-y border-l border-[#FF7A00]/30 bg-[#FF7A00] text-[#081A3A] shadow-[-5px_8px_22px_rgba(8,26,58,0.25)] transition-colors hover:bg-[#081A3A] hover:text-white"
          >
            <span className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-white/10" />
            <span className="relative z-10 rotate-180 whitespace-nowrap text-[11px] font-black uppercase tracking-[0.08em] [writing-mode:vertical-rl]">
              Enquire Now
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <EnquiryModal
        open={open}
        onClose={() => setOpen(false)}
        propertyName="Dholera Industrial Property"
      />
    </>
  );
}
