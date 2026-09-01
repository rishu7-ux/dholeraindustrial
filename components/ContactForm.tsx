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
const labelClass = "mb-2 block text-xs font-black text-[#081A3A]";
const fieldClass = "w-full rounded-xl border border-[#081A3A]/15 bg-[#ffffff] px-4 py-3.5 text-sm text-[#0A2E73] outline-none transition placeholder:text-[#0A2E73] focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10";

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

  const error = (message?: string) => message ? <p className="ml-1 mt-1 text-xs font-medium text-[#C94F00]">{message}</p> : null;

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.div key="contact-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -15 }}>
          <div className="mb-7">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">Quick Enquiry</p>
            <h3 className="mt-2 text-2xl font-black text-[#081A3A] sm:text-3xl">Send Us Your Requirement</h3>
            <p className="mt-2 text-sm leading-6 text-[#0A2E73]">Fill in the details and our industrial property consultant will contact you shortly.</p>
          </div>

          <form onSubmit={handleSubmit(submit)} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
              <div className="relative"><FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7A00]" /><input id="contact-name" autoComplete="name" placeholder="Enter your full name" {...register("name")} className={`${fieldClass} pl-11`} /></div>
              {error(errors.name?.message)}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className={labelClass}>Email Address *</label>
                <div className="relative"><FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7A00]" /><input id="contact-email" type="email" autoComplete="email" placeholder="Your email" {...register("email")} className={`${fieldClass} pl-11`} /></div>
                {error(errors.email?.message)}
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClass}>Phone Number *</label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7A00]" />
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-[#081A3A]/15 pr-2 text-xs font-bold text-[#0A2E73]">+91</span>
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
              <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#0A2E73]">
                <input type="checkbox" {...register("consent")} className="mt-0.5 h-4 w-4 shrink-0 accent-[#081A3A]" />
                <span>I agree to use my information for enquiry and marketing communication.</span>
              </label>
              {error(errors.consent?.message)}
            </div>

            <motion.button type="submit" disabled={isSubmitting} whileHover={isSubmitting ? undefined : { y: -2, scale: 1.01 }} whileTap={isSubmitting ? undefined : { scale: 0.98 }} className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#081A3A] px-6 py-4 text-xs font-black uppercase tracking-widest text-white shadow-[0_12px_30px_rgba(255,122,0,0.25)] transition hover:bg-white hover:text-[#081A3A] disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:min-w-52">
              <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">{isSubmitting ? "Submitting..." : "Send Enquiry"}</span>
              {!isSubmitting && <FaArrowRight className="relative z-10 text-[#FF7A00] transition-transform group-hover:translate-x-1" />}
            </motion.button>
            {serverError && <p className="rounded-xl border border-[#FF7A00]/25 bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#C94F00]">{serverError}</p>}
          </form>
        </motion.div>
      ) : (
        <motion.div key="contact-success" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-125 flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#081A3A] text-[#FF7A00] shadow-[0_12px_35px_rgba(255,122,0,0.3)]"><FaCheckCircle size={34} /></div>
          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.22em] text-[#FF7A00]">Enquiry Submitted</p>
          <h3 className="mt-2 text-3xl font-black text-[#081A3A]">Thank You!</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#0A2E73]">Your enquiry has been submitted successfully. Our industrial property consultant will contact you shortly.</p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-xl bg-[#081A3A] px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#FF7A00] hover:text-[#081A3A]">Send Another Enquiry</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
