"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaTimes, FaUser } from "react-icons/fa";

const schema = z.object({
  name: z.string().trim().min(3, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
});

type FormData = z.infer<typeof schema>;
type Props = { open: boolean; onClose: () => void; propertyName?: string };

const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#fdb713] focus:ring-4 focus:ring-[#fdb713]/15";
const labelClass = "mb-2 block text-xs font-black uppercase tracking-wide text-[#12568d]";

export default function EnquiryModal({ open, onClose, propertyName = "Dholera Industrial Property" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const close = useCallback(() => {
    onClose();
    window.setTimeout(() => { reset(); setSubmitted(false); }, 300);
  }, [onClose, reset]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const submit = async (data: FormData) => {
    setServerError("");
    const response = await fetch("/api/industrial-leads", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "enquiry", name: data.name, email: data.email, phone: data.phone, property: propertyName, message: "", source: "industrial-popup-form" }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok) {
      setServerError(result?.message || "Unable to submit right now. Please try again.");
      return;
    }
    reset();
    setSubmitted(true);
  };

  const error = (message?: string) => message ? <p className="mt-1.5 text-xs font-semibold text-red-500">{message}</p> : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#12568d]/70 px-4 py-5 backdrop-blur-sm">
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-[28px] border border-[#fdb713]/25 bg-[#f7fbff] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
          >
            <header className="relative overflow-hidden border-b border-[#fdb713]/20 bg-linear-to-b from-[#f7fbff] to-[#fff4d6] px-6 py-6 text-center sm:px-8">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#fdb713]/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-14 h-36 w-36 rounded-full bg-[#12568d]/15 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#fdb713]" />
              <button type="button" onClick={close} aria-label="Close enquiry form" className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#fdb713]/25 bg-white text-[#12568d] shadow-sm transition hover:rotate-90 hover:bg-[#fdb713]">
                <FaTimes size={14} />
              </button>
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#fdb713]/25 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#12568d]">
                <FaCheckCircle className="text-[#fdb713]" /> Property Enquiry
              </div>
              <h2 id="enquiry-title" className="mt-3 text-3xl font-black text-[#12568d]">Enquire Now</h2>
              <div className="mx-auto mt-3 h-1 w-11 rounded-full bg-[#fdb713]" />
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">Share your details and our property consultant will contact you shortly.</p>
              <div className="mx-auto mt-4 max-w-sm rounded-xl border border-[#fdb713]/20 bg-white/70 px-3 py-2">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">Enquiring About</p>
                <p className="mt-1 text-sm font-black text-[#12568d]">{propertyName}</p>
              </div>
            </header>

            <div className="max-h-[70vh] overflow-y-auto bg-linear-to-b from-[#f7fbff] to-[#fff8e8] px-5 py-6 sm:px-7">
              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-full flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fdb713]/15 text-[#12568d]"><FaCheckCircle size={36} /></div>
                  <h3 className="mt-6 text-3xl font-black text-[#12568d]">Enquiry Submitted</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">Thank you for your interest. Our property team will contact you shortly.</p>
                  <button type="button" onClick={close} className="mt-8 rounded-xl bg-[#12568d] px-7 py-3.5 text-sm font-black uppercase text-white transition hover:bg-[#fdb713] hover:text-[#12568d]">Close</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(submit)} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="enquiry-name" className={labelClass}>Full Name</label>
                    <div className="relative"><FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fdb713]" size={13} /><input id="enquiry-name" autoComplete="name" placeholder="Enter your full name" {...register("name")} className={`${inputClass} pl-11`} /></div>
                    {error(errors.name?.message)}
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="enquiry-email" className={labelClass}>Email</label>
                      <div className="relative"><FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fdb713]" size={13} /><input id="enquiry-email" type="email" autoComplete="email" placeholder="Email address" {...register("email")} className={`${inputClass} pl-11`} /></div>
                      {error(errors.email?.message)}
                    </div>
                    <div>
                      <label htmlFor="enquiry-phone" className={labelClass}>Phone</label>
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fdb713]" size={13} />
                        <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-slate-200 pr-2 text-xs font-bold text-slate-500">+91</span>
                        <input id="enquiry-phone" type="tel" inputMode="numeric" autoComplete="tel" maxLength={10} placeholder="9876543210" {...register("phone", { onChange: (event) => { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10); } })} className={`${inputClass} pl-20`} />
                      </div>
                      {error(errors.phone?.message)}
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#fdb713] px-5 py-4 text-sm font-black uppercase tracking-wide text-[#12568d] shadow-lg transition hover:-translate-y-1 hover:bg-[#12568d] hover:text-white disabled:cursor-wait disabled:opacity-60">
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}<FaArrowRight size={12} className="transition-transform group-hover:translate-x-2" />
                  </button>
                  {serverError && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-xs font-semibold text-red-600">{serverError}</p>}
                  <div className="border-t border-[#fdb713]/20 pt-4 text-center">
                    <p className="text-[11px] text-slate-500">Need quick assistance?</p>
                    <a href="tel:+919217104219" className="mt-1.5 inline-flex items-center gap-2 text-sm font-black text-[#12568d] transition hover:text-[#fdb713]"><FaPhoneAlt size={11} /> +91 92171 04219</a>
                  </div>
                </form>
              )}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
