"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle,
  Star,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Flame,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Custom SVG WhatsApp icon
const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const branches = [
  {
    id: "mirpur-7",
    name: "Spartan Fitness Mirpur 7 Branch",
    tagline: "Flagship Arena (Bike Zone Building)",
    rating: "4.8",
    reviews: "180+ Google Reviews",
    image: "/128868841_668587480486581_6912739221833064982_n.jpg",
    address:
      "Level-3, 1/1 Milk Vita Road, Plot-B, Avenue-4, Block-3, Chalantika Mor, Mirpur-7, Dhaka.",
    phone: "01688-664545",
    mapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0982705164104!2d90.3621415!3d23.8151246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1264c126d4b%3A0xc31cb0270a6c9cf1!2sMirpur%20Section%207!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    directionsUrl: "https://maps.google.com/?q=Spartan+Fitness+Mirpur+7+Dhaka",
    femaleHours: "3:00 PM to 6:00 PM (Sat – Thu)",
    generalHours: "7:00 AM to 11:30 PM (Sat – Thu) | 4:00 PM to 10:00 PM (Fri)",
  },
  {
    id: "mirpur-14",
    name: "Spartan Fitness Mirpur 14 Branch",
    tagline: "Executive Performance Suite (Apex Building)",
    rating: "4.9",
    reviews: "150+ Google Reviews",
    image: "/644271147_1327952692688367_6006543335469826725_n.jpg",
    address:
      "Level-4, Rofiq Tower, 211/8 Kachukhet Road (Apex & Foodnest Building), Mirpur-14, Dhaka.",
    phone: "01688-664545",
    mapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.597652758137!2d90.3888365!3d23.7972846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a95cd8c847%3A0x6b245037d04a6011!2sMirpur%2014%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    directionsUrl:
      "https://maps.google.com/?q=Spartan+Fitness+Mirpur+14+Kachukhet+Road+Dhaka",
    femaleHours: "3:00 PM to 6:00 PM (Sat – Thu)",
    generalHours: "7:00 AM to 11:30 PM (Sat – Thu) | 4:00 PM to 10:00 PM (Fri)",
  },
];

const faqs = [
  {
    q: "Can I try out the gym before taking a membership?",
    a: "Yes! You can book a free gym walkthrough and trial consultation with our certified trainers by filling out the form on this page or messaging us on WhatsApp.",
  },
  {
    q: "How does the dedicated female hour work?",
    a: "Every Saturday through Thursday from 3:00 PM to 6:00 PM, both branches transition to female-exclusive access. Certified female trainers are present to guide members in complete privacy.",
  },
  {
    q: "Is the 50% discount on admission available at both branches?",
    a: "Yes! Currently, our 50% discount on admission fee is valid across all 3-month, 6-month, and 1-year packages at both Mirpur 7 and Mirpur 14.",
  },
  {
    q: "Are the steam and shower facilities included in standard packages?",
    a: "Yes! Steam bath sessions, sanitized lockers, and executive shower suites are included with our 6-month and 1-year packages.",
  },
];

export default function ContactPage() {
  const [activeBranchId, setActiveBranchId] = useState("mirpur-7");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: "Mirpur 7",
    goal: "Weight Loss & Toning",
    preferredTime: "Evening (6:00 PM - 10:00 PM)",
    message: "",
  });

  const activeBranch = branches.find((b) => b.id === activeBranchId) || branches[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white overflow-hidden min-h-screen">
        {/* 1. Header & Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28 bg-[#0A0A0A] overflow-hidden">
          <div className="crimson-ambient-glow -top-40 -right-40 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] opacity-35 pointer-events-none" />
          <div className="crimson-ambient-glow top-1/2 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] opacity-25 pointer-events-none" />
          <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

          <span className="spartan-watermark top-12" aria-hidden>
            CONNECT
          </span>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-bold">Contact</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-white text-xs font-body font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} className="text-primary" />
              <span>Two Luxury Arenas Across Dhaka</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] max-w-4xl text-white">
              Start your transformation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-white">
                Visit or speak with us today.
              </span>
            </h1>

            <p className="mt-6 text-white/70 font-body text-base sm:text-lg max-w-3xl leading-relaxed">
              Have questions regarding our membership packages, admission discounts, or certified personal
              training? Reach out directly or visit our branches in Mirpur 7 and Mirpur 14.
            </p>

            {/* Direct Contact Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 pt-10 border-t border-white/10">
              <a
                href="tel:01688-664545"
                className="spartan-glass-card p-5 sm:p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-wider text-white/50 block">
                    Direct Phone Line
                  </span>
                  <span className="font-heading text-lg font-black text-white group-hover:text-primary transition-colors">
                    01688-664545
                  </span>
                  <p className="text-[11px] text-white/60">Sat - Thu: 7 AM - 11:30 PM</p>
                </div>
              </a>

              <a
                href="https://wa.me/8801688664545?text=Hello%20Spartan%20Fitness,%20I%20am%20interested%20in%20membership%20packages%20and%20offers."
                target="_blank"
                rel="noopener noreferrer"
                className="spartan-glass-card p-5 sm:p-6 flex items-center gap-4 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <WhatsAppIcon />
                </div>
                <div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-wider text-white/50 block">
                    Instant WhatsApp Support
                  </span>
                  <span className="font-heading text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp
                  </span>
                  <p className="text-[11px] text-white/60">Fast response within minutes</p>
                </div>
              </a>

              <div className="spartan-glass-card p-5 sm:p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-wider text-white/50 block">
                    Female Exclusive Hours
                  </span>
                  <span className="font-heading text-lg font-black text-white">
                    3:00 PM – 6:00 PM
                  </span>
                  <p className="text-[11px] text-white/60">Sat – Thu (Female Trainers)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Branch Selector & Map + Booking Form */}
        <section className="relative py-16 sm:py-24 bg-[#0D0D10] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            {/* Branch Switcher Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Select A Location
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                  Our Two Arenas
                </h2>
              </div>

              <div className="flex p-1 rounded-xl bg-white/[0.04] border border-white/10 gap-1 self-start sm:self-auto">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBranchId(b.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeBranchId === b.id
                        ? "bg-primary text-white shadow-[0_4px_16px_rgba(208,59,59,0.35)]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {b.name.replace("Spartan Fitness ", "")}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Branch Highlight + Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Branch Details & Interactive Map */}
              <div className="lg:col-span-6 space-y-6">
                <div className="spartan-glass-card p-6 sm:p-8 space-y-6">
                  <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/15">
                    <Image
                      src={activeBranch.image}
                      alt={activeBranch.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider">
                      {activeBranch.tagline}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-bold">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span>{activeBranch.rating} / 5.0</span>
                        <span className="text-white/60 font-normal">({activeBranch.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-heading text-xs font-bold uppercase tracking-wider text-white block">
                          Full Location Address
                        </span>
                        <p className="font-body text-xs sm:text-sm text-white/70 mt-0.5">
                          {activeBranch.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-heading text-xs font-bold uppercase tracking-wider text-white block">
                          Operating Hours
                        </span>
                        <p className="font-body text-xs sm:text-sm text-white/70 mt-0.5">
                          {activeBranch.generalHours}
                        </p>
                        <p className="font-body text-xs font-bold text-primary mt-1">
                          Female Exclusive: {activeBranch.femaleHours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons for directions & call */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/10">
                    <a
                      href={activeBranch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.05] border border-white/15 text-white font-body text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <MapPin size={14} />
                      <span>Open in Google Maps</span>
                      <ExternalLink size={12} />
                    </a>

                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-primary-dark transition-all duration-300"
                    >
                      <Phone size={14} />
                      <span>Call {activeBranch.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Live Google Maps Embed */}
                <div className="spartan-glass-card p-2 rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    src={activeBranch.mapIframe}
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: "12px", filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${activeBranch.name} Location Map`}
                  />
                </div>
              </div>

              {/* Right Column: Direct Consultation & Booking Form */}
              <div className="lg:col-span-6">
                <div className="spartan-glass-card p-6 sm:p-8 lg:p-10 border border-white/15 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Consultation & Passes
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white tracking-tight">
                    Schedule Your Free Visit & Claim 50% Off
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-white/60 mt-2 mb-6">
                    Leave your contact details and our fitness consultant will reserve your pass and answer
                    all package queries.
                  </p>

                  {formSubmitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="font-heading text-xl font-black uppercase text-white">
                        Inquiry Received!
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-bold">{formData.name}</span>. A Spartan Fitness
                        representative will call or message you at{" "}
                        <span className="text-emerald-400 font-bold">{formData.phone}</span> shortly.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="font-body text-xs font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer pt-2"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tanvir Rahman"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5 block">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="017XX-XXXXXX"
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>

                        <div>
                          <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5 block">
                            Preferred Branch
                          </label>
                          <select
                            value={formData.branch}
                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                            className="w-full px-4 py-3 bg-[#141418] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="Mirpur 7">Mirpur 7 (Milk Vita Rd)</option>
                            <option value="Mirpur 14">Mirpur 14 (Kachukhet Rd)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5 block">
                            Primary Goal
                          </label>
                          <select
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                            className="w-full px-4 py-3 bg-[#141418] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="Weight Loss & Toning">Weight Loss & Fat Burn</option>
                            <option value="Muscle Hypertrophy">Muscle Hypertrophy</option>
                            <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                            <option value="General Health & Mobility">General Health & Mobility</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5 block">
                            Preferred Timing
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full px-4 py-3 bg-[#141418] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="Morning (7:00 AM - 12:00 PM)">Morning (7 AM - 12 PM)</option>
                            <option value="Female Hours (3:00 PM - 6:00 PM)">Female Hours (3 PM - 6 PM)</option>
                            <option value="Evening (6:00 PM - 10:00 PM)">Evening (6 PM - 10 PM)</option>
                            <option value="Night (10:00 PM - 11:30 PM)">Night (10 PM - 11:30 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5 block">
                          Message or Question (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your fitness background or any questions..."
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl font-body text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-primary text-white font-body text-xs font-bold uppercase tracking-[0.2em] shadow-[0_6px_25px_rgba(208,59,59,0.4)] hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                      >
                        <Send size={15} />
                        <span>Confirm Consultation & Claim Offer</span>
                      </button>

                      <p className="font-body text-[10px] text-white/40 text-center uppercase tracking-wider pt-1">
                        🔒 No spam. We respect your privacy & respond within hours.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Visiting FAQ Section */}
        <section className="relative py-20 sm:py-28 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Common Questions
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-black uppercase text-white mt-2">
                Visiting Spartan Fitness
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="spartan-glass-card p-6 rounded-2xl">
                  <h3 className="font-heading text-base font-bold text-white uppercase tracking-tight flex items-start gap-2.5">
                    <span className="text-primary font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed mt-2.5 pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
