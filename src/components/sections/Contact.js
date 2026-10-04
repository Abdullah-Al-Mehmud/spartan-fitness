"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Clock, Send, CheckCircle, Star, Compass } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const branches = [
  {
    id: "mirpur-7",
    name: "Spartan Fitness Mirpur 7 Branch",
    rating: "4.5",
    reviews: "Google Reviews",
    image: "/128868841_668587480486581_6912739221833064982_n.jpg",
    address:
      "Level-3, 1/1 Milk Vita Road, Plot-B, Avenue-4, Block-3, Chalantika Mor, Mirpur (Bike Zone Building).",
    phone: "01688-664545",
    mapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0982705164104!2d90.3621415!3d23.8151246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1264c126d4b%3A0xc31cb0270a6c9cf1!2sMirpur%20Section%207!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    directionsUrl: "https://maps.google.com/?q=Spartan+Fitness+Mirpur+7+Dhaka",
  },
  {
    id: "mirpur-14",
    name: "Spartan Fitness Mirpur 14 Branch",
    rating: "4.5",
    reviews: "Google Reviews",
    image: "/644271147_1327952692688367_6006543335469826725_n.jpg",
    address:
      "Level-4, Rofiq Tower, 211/8 Kachukhet Road (Apex/Foodnest Building).",
    phone: "01688-664545",
    image: "/644271147_1327952692688367_6006543335469826725_n.jpg",
    mapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.597652758137!2d90.3888365!3d23.7972846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a95cd8c847%3A0x6b245037d04a6011!2sMirpur%2014%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    directionsUrl: "https://maps.google.com/?q=Spartan+Fitness+Mirpur+14+Kachukhet+Road+Dhaka",
  },
];

export default function Contact() {
  const [activeBranchId, setActiveBranchId] = useState("mirpur-7");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Contact submission:", { ...data, branch: activeBranchId });
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const activeBranch = branches.find((b) => b.id === activeBranchId);

  const inputClass =
    "w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-white/[0.04] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300";

  const errorClass = "font-body text-xs text-primary mt-1 font-medium";
  const labelClass =
    "font-body text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5 sm:mb-2 block";

  const details = [
    { icon: MapPin, label: "Address", value: activeBranch.address },
    { icon: Phone, label: "Direct Phone", value: activeBranch.phone },
    {
      icon: Clock,
      label: "Timing & Schedule",
      value: (
        <div className="space-y-1.5 mt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
            <span className="text-white/60">Sat – Thu:</span>
            <span className="font-semibold text-white">7:00 AM to 11:30 PM</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm bg-primary/15 border border-primary/30 px-2.5 py-1.5 rounded-lg">
            <span className="text-primary font-bold">Female Exclusive Hour:</span>
            <span className="font-bold text-white">3:00 PM to 6:00 PM (Sat-Thu)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
            <span className="text-white/60">Friday:</span>
            <span className="font-semibold text-white">4:00 PM to 10:00 PM (Female Off)</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-36 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="crimson-ambient-glow -top-40 -right-40 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-25 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] opacity-25 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        LOCATION
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="LOCATIONS & SCHEDULE"
          title="Find Your Nearest Spartan Fitness"
          subtext="Two premier locations in Mirpur. Visit us or call to claim your 50% discount on admission today."
          className="mb-8 sm:mb-12"
        />

        {/* Branch Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBranchId(b.id)}
              aria-pressed={activeBranchId === b.id}
              className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 rounded-full font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-center transition-all duration-300 border cursor-pointer ${
                activeBranchId === b.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white/[0.04] border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Branch Details & Map */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="spartan-glass-card p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 mb-4">
                  <h3 className="font-heading text-lg sm:text-xl uppercase tracking-tight text-white font-bold">
                    {activeBranch.name}
                  </h3>
                  <div className="self-start xs:self-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/90">
                    <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                    <span>{activeBranch.rating}</span>
                    <span className="text-white/40">({activeBranch.reviews})</span>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 my-4 sm:my-6" />

                {/* Real Branch Photo Preview */}
                <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden mb-5 border border-white/10 shadow-md">
                  <Image
                    src={activeBranch.image}
                    alt={activeBranch.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15">
                    {activeBranch.id === "mirpur-7" ? "Mirpur 7 Training Arena" : "Mirpur 14 Training Arena"}
                  </span>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {details.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <li key={i} className="flex items-start gap-3.5 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-body uppercase tracking-[0.2em] text-white/40 block">
                            {d.label}
                          </span>
                          <div className="text-xs sm:text-sm font-body text-white/90 leading-relaxed mt-0.5 block break-words">
                            {d.value}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={activeBranch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] px-5 sm:px-6 py-3 rounded-md bg-white/[0.05] border border-white/15 text-white hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Compass size={14} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${activeBranch.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] px-5 sm:px-6 py-3 rounded-md bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone size={14} />
                  <span>Call Branch</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="spartan-glass-card overflow-hidden h-[220px] sm:h-[260px] relative border border-white/10">
              <iframe
                title={`Map of ${activeBranch.name}`}
                src={activeBranch.mapIframe}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-6">
            <div className="spartan-glass-card p-5 sm:p-7 lg:p-9 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-tight text-white font-bold mb-2">
                  Send Us a Message
                </h3>
                <p className="text-white/60 font-body text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  Fill in your details below and a Spartan fitness consultant will get in touch with you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-primary/40 text-center flex flex-col items-center gap-3 my-6 sm:my-8"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary">
                      <CheckCircle size={22} />
                    </div>
                    <h4 className="font-heading text-base sm:text-lg uppercase tracking-tight text-white font-bold">
                      Message Received!
                    </h4>
                    <p className="text-white/70 font-body text-xs leading-relaxed max-w-sm">
                      Thank you for reaching out. A consultant from {activeBranch.name} will call you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          {...register("fullName", { required: "Name is required" })}
                          placeholder="Tanvir Rahman"
                          className={inputClass}
                        />
                        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
                      </div>

                      <div>
                        <label className={labelClass}>Phone Number *</label>
                        <input
                          {...register("phone", { required: "Phone number is required" })}
                          placeholder="017XX-XXXXXX"
                          className={inputClass}
                        />
                        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className={labelClass}>Email Address</label>
                        <input
                          {...register("email")}
                          placeholder="tanvir@example.com"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Interested Plan</label>
                        <select
                          {...register("plan")}
                          className={`${inputClass} bg-[#141416] text-white`}
                        >
                          <option value="Pro Premium">Pro Premium (Most Popular)</option>
                          <option value="Basic Access">Basic Access</option>
                          <option value="Spartan Elite">Spartan Elite</option>
                          <option value="Personal Coaching">1-on-1 Personal Training</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Message or Questions</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell us about your fitness goals or questions..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 rounded-md font-body text-xs font-bold uppercase tracking-[0.2em] bg-primary text-white hover:bg-primary-dark transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mt-3 sm:mt-4"
                    >
                      <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
