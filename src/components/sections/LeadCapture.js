"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Phone,
  User,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    branch: "Mirpur 7 Branch",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Please enter your phone number.";
    } else if (
      !/^(?:\+?88|01)?\d{9,11}$/.test(formData.phoneNumber.replace(/[\s-]/g, ""))
    ) {
      errs.phoneNumber = "Please enter a valid phone number (e.g. 017XXXXXXXX).";
    }

    if (!formData.branch) {
      errs.branch = "Please select a branch.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Discount claim submitted:", formData);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      branch: "Mirpur 7 Branch",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="claim-offer"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#0A0A0C] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="crimson-ambient-glow -top-32 left-1/2 -translate-x-1/2 w-[400px] sm:w-[850px] h-[350px] sm:h-[550px] opacity-35 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-32 -right-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-20 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* Background Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        50% OFF
      </span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            eyebrow="DON'T MISS OUT"
            title="Lock In Your 50% Discount Today!"
            subtext="Leave your details below. Our fitness consultants will call you back to confirm your offer and invite you for a free gym tour. No credit card required."
            align="center"
          />
        </div>

        {/* Lead Capture Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]"
          >
            {/* Specular hairline top glow */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-primary/70 via-white/80 to-transparent pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

            {/* Urgency Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-7 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} className="text-primary animate-pulse" />
                <span>Special Promotional Pricing</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-emerald-400 font-body text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Consultants Available Now</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                  noValidate
                >
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-body text-xs font-bold uppercase tracking-[0.16em] text-white/80 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className={`w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl font-body text-sm text-white placeholder:text-white/30 bg-black/40 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                          errors.fullName
                            ? "border-primary bg-primary/5"
                            : "border-white/15 focus:border-primary"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-primary font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block font-body text-xs font-bold uppercase tracking-[0.16em] text-white/80 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="01X-XXXX-XXXX"
                        className={`w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl font-body text-sm text-white placeholder:text-white/30 bg-black/40 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                          errors.phoneNumber
                            ? "border-primary bg-primary/5"
                            : "border-white/15 focus:border-primary"
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1.5 text-xs text-primary font-medium">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Select Branch */}
                  <div>
                    <label
                      htmlFor="branch"
                      className="block font-body text-xs font-bold uppercase tracking-[0.16em] text-white/80 mb-2"
                    >
                      Select Branch
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
                        <MapPin size={18} />
                      </div>
                      <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-10 py-3.5 sm:py-4 rounded-xl font-body text-sm text-white bg-black/70 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none cursor-pointer ${
                          errors.branch
                            ? "border-primary bg-primary/5"
                            : "border-white/15 focus:border-primary"
                        }`}
                      >
                        <option value="Mirpur 7 Branch" className="bg-[#121214] text-white py-2">
                          Mirpur 7 Branch (Chalantika Mor)
                        </option>
                        <option value="Mirpur 14 Branch" className="bg-[#121214] text-white py-2">
                          Mirpur 14 Branch (Kachukhet Road)
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white/50">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.branch && (
                      <p className="mt-1.5 text-xs text-primary font-medium">
                        {errors.branch}
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden group w-full py-4 sm:py-4.5 rounded-xl font-body text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-[0_10px_35px_-5px_rgba(208,59,59,0.55)] hover:shadow-[0_15px_45px_-5px_rgba(208,59,59,0.7)] hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Locking in Your Discount..." : "Claim My Discount Now"}
                      </span>
                      {!isSubmitting && (
                        <ArrowRight
                          size={16}
                          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      )}
                      {/* Shine sweep effect */}
                      <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    </button>

                    {/* Under-button Micro-copy */}
                    <p className="text-center font-body text-xs text-white/50 italic mt-3">
                      *Offer valid for a limited time. Hurry up!*
                    </p>
                  </div>

                  {/* Trust pillars row */}
                  <div className="pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-white/60">
                      <ShieldCheck size={14} className="text-primary flex-shrink-0" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-white/60">
                      <Clock size={14} className="text-primary flex-shrink-0" />
                      <span>Quick callback today</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-white/60">
                      <Check size={14} className="text-emerald-400 flex-shrink-0" />
                      <span>Free gym tour included</span>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto text-primary">
                    <CheckCircle2 size={36} className="text-primary" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                      50% Discount Reserved!
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.fullName}</span>! We have locked in your 50% discount for the{" "}
                      <span className="text-primary font-semibold">{formData.branch}</span>.
                    </p>
                    <p className="font-body text-xs sm:text-sm text-white/55 max-w-md mx-auto mt-2 leading-relaxed">
                      Our fitness consultant will call you at{" "}
                      <span className="text-white font-semibold">{formData.phoneNumber}</span> shortly to confirm your booking and schedule your free VIP gym tour.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:01688664545"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-dark transition-all duration-300"
                    >
                      <Phone size={14} />
                      <span>Call Us Right Now (01688-664545)</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white/70 text-xs font-bold uppercase tracking-wider hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
