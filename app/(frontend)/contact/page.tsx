"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import {
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import ContactForm from "@/components/ContactForm";



const fromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function ContactPage() {
  return (
    <>
      <TopBar />
        <Navbar />
        <SocialBar />
        
      <main className="compact-page contact-page">
        {/* ================= Hero Banner ================= */}
        <section className="relative h-[14rem] overflow-hidden bg-linear-to-br from-[#0A2E73] via-[#081A3A] to-[#0A2E73] sm:h-[16rem] lg:h-[18rem]">

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#081A3A]/35 via-transparent to-[#081A3A]/10"></div>

          {/* Decorative glow blobs */}
          <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#FF7A00]/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#081A3A]/10 blur-3xl"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

            <motion.span
              initial="hidden"
              animate="show"
              variants={fromLeft}
              className="mb-4 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[4px] text-[#FF7A00] backdrop-blur-sm"
            >
              We&apos;re here to help
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fromRight}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold md:text-6xl"
            >
              Contact Us
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fromLeft}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-3 text-lg text-white/75"
            >
              <FaHome className="text-[#FF7A00]" />
              <span>Home</span>
              <span className="text-[#FF7A00]">/</span>
              <span className="text-[#FF7A00]">Contact</span>
            </motion.div>

          </div>

        </section>

        {/* ================= Info Cards ================= */}

        <section className="relative bg-white py-14 sm:py-16 lg:py-20">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fromLeft}
              className="h-full border-2 border-[#081A3A]/10 bg-white p-10 text-center shadow-[0_12px_38px_rgba(8,26,58,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#FF7A00] hover:shadow-[0_24px_55px_rgba(8,26,58,0.16)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#081A3A]/8">
                <FaPhoneAlt className="h-7 w-7 text-[#FF7A00]" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#081A3A]">
                Call Us On
              </h3>

              <p className="text-[#0A2E73]">+91 92171 04219</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="h-full border-2 border-[#081A3A]/10 bg-white p-10 text-center shadow-[0_12px_38px_rgba(8,26,58,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#FF7A00] hover:shadow-[0_24px_55px_rgba(8,26,58,0.16)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#081A3A]/8">
                <FaEnvelope className="h-7 w-7 text-[#FF7A00]" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#081A3A]">
                Email Us
              </h3>

              <p className="text-[#0A2E73]">customercare@omanaprojects.com</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fromRight}
              transition={{ delay: 0.3 }}
              className="h-full border-2 border-[#081A3A]/10 bg-white p-10 text-center shadow-[0_12px_38px_rgba(8,26,58,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#FF7A00] hover:shadow-[0_24px_55px_rgba(8,26,58,0.16)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#081A3A]/8">
                <FaMapMarkerAlt className="h-7 w-7 text-[#FF7A00]" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#081A3A]">
                Our Location
              </h3>

              <p className="text-[#0A2E73]">
                7th floor, plot no 56a/16, C Block, Phase 2, Industrial
                Area, Sector 62, Noida, Uttar Pradesh 201309
              </p>
            </motion.div>

          </div>

        </section>

        {/* ================= Contact Form Section ================= */}

        <section className="relative overflow-hidden bg-[#ffffff] py-16 sm:py-20 lg:py-24">

          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-linear-to-br from-[#FFFFFF] to-transparent blur-2xl"></div>
          <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-linear-to-tl from-[#FFFFFF] to-transparent blur-2xl"></div>

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

            {/* Left Side */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fromLeft}
            >

              <div className="mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#FF7A00]"></div>
                <div className="h-0.5 w-16 bg-[#FF7A00]"></div>
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#081A3A]">
                CONTACT US
              </p>

              <h2 className="text-5xl font-extrabold leading-tight text-[#081A3A]">
                Send us a
                <br />
                message!
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
                className="mt-6 h-1 w-28 origin-left rounded-full bg-linear-to-r from-[#FF7A00] to-[#FF7A00]"
              />

              <p className="mt-8 text-lg leading-8 text-[#0A2E73]">
                We&apos;d love to hear from you. If you have any questions,
                investment queries or need project information,
                our team is always ready to help.
              </p>

              {/* Quick contact chips */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-10 space-y-4"
              >

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 border border-[#081A3A]/10 bg-white px-6 py-4 shadow-[0_8px_30px_rgba(8,26,58,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(8,26,58,0.08)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] text-[#FF7A00]">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#0A2E73]">Call Us</p>
                    <p className="font-semibold text-[#081A3A]">+91 92171 04219</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 border border-[#081A3A]/10 bg-white px-6 py-4 shadow-[0_8px_30px_rgba(8,26,58,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(8,26,58,0.08)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#081A3A]/8 text-[#FF7A00]">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#0A2E73]">Location</p>
                    <p className="font-semibold text-[#081A3A]">Sector 62, Noida, Uttar Pradesh</p>
                  </div>
                </motion.div>

              </motion.div>

              <div className="mt-12">

                <h3 className="mb-6 text-2xl font-bold text-[#081A3A]">
                  Follow Us Here
                </h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex gap-5"
                >

                  <motion.a
                    variants={fadeUp}
                    whileHover={{ scale: 1.1, y: -4 }}
                    href="#"
                    aria-label="Facebook"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF7A00]/35 text-[#FF7A00] transition-all duration-300 ease-out hover:border-transparent hover:bg-[#081A3A] hover:text-[#FF7A00] hover:shadow-lg"
                  >
                    <FaFacebookF />
                  </motion.a>

                  <motion.a
                    variants={fadeUp}
                    whileHover={{ scale: 1.1, y: -4 }}
                    href="#"
                    aria-label="Instagram"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF7A00]/35 text-[#FF7A00] transition-all duration-300 ease-out hover:border-transparent hover:bg-[#081A3A] hover:text-[#FF7A00] hover:shadow-lg"
                  >
                    <FaInstagram />
                  </motion.a>

                  <motion.a
                    variants={fadeUp}
                    whileHover={{ scale: 1.1, y: -4 }}
                    href="#"
                    aria-label="YouTube"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF7A00]/35 text-[#FF7A00] transition-all duration-300 ease-out hover:border-transparent hover:bg-[#081A3A] hover:text-[#FF7A00] hover:shadow-lg"
                  >
                    <FaYoutube />
                  </motion.a>

                </motion.div>

              </div>

            </motion.div>

            {/* Right Form */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fromRight}
              className="relative border border-[#FF7A00]/35 bg-white/90 p-10 shadow-[0_25px_70px_rgba(8,26,58,0.08)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(8,26,58,0.16)]"
            >

              {/* corner accent */}
              <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-linear-to-br from-[#FF7A00] to-[#FF7A00] opacity-90 blur-md"></div>

              <h2 className="relative text-4xl font-bold text-[#081A3A] md:text-5xl">
                Get In Touch
              </h2>

              <p className="relative mt-3 text-[#0A2E73]">
                We&apos;d love to hear from you! If you have any questions,
                please fill out the form below.
              </p>

              <div className="relative mt-10">
                <ContactForm />
              </div>

              <div className="hidden">

                <div>

                  <label className="mb-2 block font-semibold text-[#081A3A]">
                    Name
                  </label>

                  <div className="relative">
                    <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7A00]" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-lg border py-4 pl-11 pr-5 outline-none transition-all duration-300 focus:border-[#FF7A00] focus:shadow-[0_0_0_4px_rgba(255,122,0,0.18)]"
                    />
                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block font-semibold text-[#081A3A]">
                      Email
                    </label>

                    <div className="relative">
                      <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7A00]" />
                      <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full rounded-lg border py-4 pl-11 pr-5 outline-none transition-all duration-300 focus:border-[#FF7A00] focus:shadow-[0_0_0_4px_rgba(255,122,0,0.18)]"
                      />
                    </div>

                  </div>

                  <div>

                    <label className="mb-2 block font-semibold text-[#081A3A]">
                      Phone Number
                    </label>

                    <div className="relative">
                      <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7A00]" />
                      <input
                        type="tel"
                        placeholder="Enter phone"
                        className="w-full rounded-lg border py-4 pl-11 pr-5 outline-none transition-all duration-300 focus:border-[#FF7A00] focus:shadow-[0_0_0_4px_rgba(255,122,0,0.18)]"
                      />
                    </div>

                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block font-semibold text-[#081A3A]">
                      What are you searching for
                    </label>

                    <select className="w-full rounded-lg border bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-[#FF7A00] focus:shadow-[0_0_0_4px_rgba(255,122,0,0.18)]">
                      <option>Select Option</option>
                      <option>Residential Plot</option>
                      <option>Commercial Plot</option>
                      <option>Industrial Plot</option>
                      <option>Villa</option>
                    </select>

                  </div>

                  <div>

                    <label className="mb-2 block font-semibold text-[#081A3A]">
                      Budget
                    </label>

                    <select className="w-full rounded-lg border bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-[#FF7A00] focus:shadow-[0_0_0_4px_rgba(255,122,0,0.18)]">
                      <option>Select Budget</option>
                      <option>Under ₹25 Lakhs</option>
                      <option>₹25-50 Lakhs</option>
                      <option>₹50 Lakhs - ₹1 Cr</option>
                      <option>Above ₹1 Cr</option>
                    </select>

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-[#081A3A]">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full rounded-lg border p-5 outline-none transition-all duration-300 focus:border-[#FF7A00] focus:shadow-[0_0_0_4px_rgba(255,122,0,0.18)]"
                  ></textarea>

                </div>

                <div className="flex items-start gap-3">

                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 cursor-pointer accent-[#FF7A00] transition-transform duration-150 active:scale-90"
                  />

                  <p className="text-[#0A2E73]">
                    I agree and give permission to use my
                    information solely for marketing purposes.
                  </p>

                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: "0 15px 40px rgba(8,26,58,0.28)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full overflow-hidden rounded-lg bg-linear-to-r from-[#081A3A] to-[#0A2E73] py-5 text-lg font-semibold text-white"
                >
                  Send Message
                </motion.button>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= Google Map ================= */}

        <section className="bg-[#ffffff] pt-20">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-7xl px-6 text-center"
          >

            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#081A3A]">
              FIND US HERE
            </p>

            <h2 className="text-4xl font-bold text-[#081A3A]">
              Visit Our Office
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-linear-to-r from-[#FF7A00] to-[#FF7A00]"></div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="w-full"
          >
            <iframe
              title="Omana Projects Location"
              src="https://www.google.com/maps?q=Omana%20Projects%20Sector%2062%20Noida&output=embed"
              className="h-[550px] w-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}
