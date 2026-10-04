"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "I am a complete beginner. Is this gym right for me?",
    answer:
      "Absolutely! We provide a Free Exercise Routine and a Free Diet Plan for all new members. Our expert trainers are always on the floor to guide you step-by-step.",
  },
  {
    question: "Are there dedicated hours for female members?",
    answer:
      "Yes. We have exclusive, comfortable, and safe Female-Only hours from 3:00 PM to 6:00 PM (Saturday to Thursday).",
  },
  {
    question: "Do I have to pay extra for a diet plan or shower facilities?",
    answer:
      "Not at all. Your membership includes customized diet plans, free premium shower access, steam/sauna bath, and even free high-speed WiFi.",
  },
  {
    question: "Are the promotional prices (e.g., 50% discount) applicable for both branches?",
    answer:
      "Yes, we have exclusive \"Power Up Deals\" for both Mirpur 7 and Mirpur 14 branches. Submit the form above or call us to grab the current running offer!",
    hasAction: true,
  },
];

export default function FAQ() {
  // Only one question open at a time (defaults to first question open)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.querySelector("#claim-offer");
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#0B0B0D] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="crimson-ambient-glow -top-40 -left-40 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-25 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-40 -right-40 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-20 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        ANSWERS
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start">
          {/* Left Column: Sticky Title & Quick Support */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36 space-y-6 sm:space-y-8">
              <SectionHeading
                eyebrow="FREQUENTLY ASKED QUESTIONS"
                title="Got Questions? We've Got Answers."
                subtext="Everything you need to know about our memberships, female hours, amenities, and free consultation before getting started."
              />

              {/* Support Card */}
              <div className="spartan-glass-card p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-wide text-white font-bold">
                      Need Immediate Help?
                    </h4>
                    <p className="font-body text-xs text-white/60">
                      Our fitness advisors are available 7 days a week
                    </p>
                  </div>
                </div>

                <p className="font-body text-xs text-white/70 leading-relaxed mb-4">
                  Have a specific question about your fitness goals or branch timings? Call our direct hotline.
                </p>

                <a
                  href="tel:01688664545"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.06] hover:bg-primary border border-white/15 hover:border-primary text-white font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 group"
                >
                  <Phone size={14} className="text-primary group-hover:text-white transition-colors" />
                  <span>Call 01688-664545</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                      isOpen
                        ? "bg-white/[0.05] border-primary/40 shadow-[0_15px_35px_-10px_rgba(208,59,59,0.2)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.035]"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 sm:py-7 flex items-start gap-4 sm:gap-5 text-left focus:outline-none cursor-pointer group"
                    >
                      {/* Number badge */}
                      <span
                        className={`font-heading text-xs sm:text-sm font-extrabold px-2.5 py-1 rounded-md transition-all duration-300 flex-shrink-0 mt-0.5 ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-white/10 text-white/50 group-hover:text-white group-hover:bg-white/15"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Question text */}
                      <span
                        className={`flex-1 font-heading text-sm sm:text-base lg:text-lg uppercase tracking-tight leading-snug font-bold transition-colors duration-300 ${
                          isOpen ? "text-primary" : "text-white group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Expand / Collapse Icon */}
                      <span
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-primary border-primary text-white rotate-180"
                            : "border-white/15 bg-white/[0.04] text-white/60 group-hover:border-primary/50 group-hover:text-white"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-white/75 font-body text-xs sm:text-sm leading-relaxed border-t border-white/5">
                            <p className="pl-10 sm:pl-11">{faq.answer}</p>

                            {faq.hasAction && (
                              <div className="pl-10 sm:pl-11 mt-4">
                                <a
                                  href="#claim-offer"
                                  onClick={handleScrollToForm}
                                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary-light font-body text-xs font-bold uppercase tracking-wider hover:underline"
                                >
                                  <span>Lock in 50% discount now</span>
                                  <ArrowUpRight size={14} />
                                </a>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
