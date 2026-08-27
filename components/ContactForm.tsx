"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

const schema = z.object({
  name: z.string().trim().min(3, "Please enter at least 3 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please select your budget"),
  comments: z.string().trim().max(500, "Message cannot exceed 500 characters"),
  consent: z.boolean().refine(Boolean, "Please accept before submitting"),
});

type ContactData = z.infer<typeof schema>;
const labelClass = "mb-2 block text-xs font-black text-[#12568d]";
const fieldClass = "w-full rounded-xl border border-[#12568d]/15 bg-[#f7fbff] px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#fdb713] focus:bg-white focus:ring-4 focus:ring-[#fdb713]/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", propertyType: "", budget: "", comments: "", consent: false },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const submit = async (data: ContactData) => {
    setServerError("");
    const response = await fetch("/api/industrial-leads", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...data, source: "industrial-contact-us-page" }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok) {
      setServerError(result?.message || "Unable to submit right now. Please try again.");
      return;
    }
    reset();
    setSubmitted(true);
  };

  const error = (message?: string) => message ? <p className="ml-1 mt-1 text-xs font-medium text-red-500">{message}</p> : null;

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.div key="contact-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -15 }}>
          <div className="mb-7">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fdb713]">Quick Enquiry</p>
            <h3 className="mt-2 text-2xl font-black text-[#12568d] sm:text-3xl">Send Us Your Requirement</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">Fill in the details and our industrial property consultant will contact you shortly.</p>
          </div>

          <form onSubmit={handleSubmit(submit)} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
              <div className="relative"><FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fdb713]" /><input id="contact-name" autoComplete="name" placeholder="Enter your full name" {...register("name")} className={`${fieldClass} pl-11`} /></div>
              {error(errors.name?.message)}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className={labelClass}>Email Address *</label>
                <div className="relative"><FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fdb713]" /><input id="contact-email" type="email" autoComplete="email" placeholder="Your email" {...register("email")} className={`${fieldClass} pl-11`} /></div>
                {error(errors.email?.message)}
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClass}>Phone Number *</label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fdb713]" />
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-[#12568d]/15 pr-2 text-xs font-bold text-slate-500">+91</span>
                  <input id="contact-phone" type="tel" inputMode="numeric" autoComplete="tel" maxLength={10} placeholder="9876543210" {...register("phone", { onChange: (event) => { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10); } })} className={`${fieldClass} pl-20`} />
                </div>
                {error(errors.phone?.message)}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-property" className={labelClass}>Property Type *</label>
                <select id="contact-property" {...register("propertyType")} className={fieldClass}>
                  <option value="">Select Property Type</option><option value="industrial-plot">Industrial Plot</option><option value="logistics-plot">Logistics Plot</option><option value="warehouse-land">Warehouse Land</option><option value="commercial-plot">Commercial Plot</option>
                </select>
                {error(errors.propertyType?.message)}
              </div>
              <div>
                <label htmlFor="contact-budget" className={labelClass}>Budget *</label>
                <select id="contact-budget" {...register("budget")} className={fieldClass}>
                  <option value="">Select Budget</option><option value="below-25-lakhs">Below ₹25 Lakhs</option><option value="25-50-lakhs">₹25 - ₹50 Lakhs</option><option value="50-lakhs-1-crore">₹50 Lakhs - ₹1 Crore</option><option value="above-1-crore">Above ₹1 Crore</option>
                </select>
                {error(errors.budget?.message)}
              </div>
            </div>

            <div>
              <label htmlFor="contact-comments" className={labelClass}>Message</label>
              <textarea id="contact-comments" rows={5} placeholder="Tell us what you are looking for..." {...register("comments")} className={`${fieldClass} resize-none`} />
              {error(errors.comments?.message)}
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
                <input type="checkbox" {...register("consent")} className="mt-0.5 h-4 w-4 shrink-0 accent-[#12568d]" />
                <span>I agree to use my information for enquiry and marketing communication.</span>
              </label>
              {error(errors.consent?.message)}
            </div>

            <motion.button type="submit" disabled={isSubmitting} whileHover={isSubmitting ? undefined : { y: -2, scale: 1.01 }} whileTap={isSubmitting ? undefined : { scale: 0.98 }} className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#fdb713] px-6 py-4 text-xs font-black uppercase tracking-widest text-[#12568d] shadow-[0_12px_30px_rgba(253,183,19,0.25)] transition hover:bg-[#12568d] hover:text-white disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:min-w-52">
              <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">{isSubmitting ? "Submitting..." : "Send Enquiry"}</span>
              {!isSubmitting && <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />}
            </motion.button>
            {serverError && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">{serverError}</p>}
          </form>
        </motion.div>
      ) : (
        <motion.div key="contact-success" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-125 flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fdb713] text-[#12568d] shadow-[0_12px_35px_rgba(253,183,19,0.3)]"><FaCheckCircle size={34} /></div>
          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.22em] text-[#fdb713]">Enquiry Submitted</p>
          <h3 className="mt-2 text-3xl font-black text-[#12568d]">Thank You!</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">Your enquiry has been submitted successfully. Our industrial property consultant will contact you shortly.</p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-xl bg-[#12568d] px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#fdb713] hover:text-[#12568d]">Send Another Enquiry</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
