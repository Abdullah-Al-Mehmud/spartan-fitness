"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What are the gym operating hours?",
    answer:
      "Our standard staffed hours are Monday through Friday from 5:00 AM to 11:00 PM, and Saturday/Sunday from 7:00 AM to 9:00 PM. Elite members receive personalized keycard access for 24/7 gym entry.",
  },
  {
    question: "Can I freeze or cancel my membership online?",
    answer:
      "Yes, you can freeze or cancel your subscription directly through the member portal or app, or by writing to hello@spartangym.com. We require a 5-day notice before your next billing cycle to prevent automatic renews.",
  },
  {
    question: "What is included in the Pro Plan's personal training?",
    answer:
      "The Pro Plan includes 4 private 60-minute personal training sessions per billing month. These sessions are scheduled directly with your coach and do not roll over to the subsequent billing month.",
  },
  {
    question: "Is there secure parking at the facility?",
    answer:
      "Absolutely. Spartan has monitored secure underground parking free for all active members. Simply validate your parking card at the main reception desk when entering the gym.",
  },
  {
    question: "How do I book athletic group classes?",
    answer:
      "Classes can be booked online via our member app up to 7 days in advance. Basic tier allows standard bookings, while Pro and Elite plans receive priority 24-hour early booking windows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-36 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="crimson-ambient-glow -top-40 -left-40 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-25 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        FAQ
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20">
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36">
              <SectionHeading
                eyebrow="COMMON QUESTIONS"
                title="Frequently Asked Questions"
                subtext="Find answers to baseline inquiries regarding our facilities, private training, and membership billing cycles."
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 border-t border-white/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-7 flex items-start gap-3 sm:gap-6 text-left focus:outline-none rounded-md cursor-pointer group"
                  >
                    <span
                      className={`font-heading text-xs sm:text-base pt-0.5 w-6 sm:w-7 flex-shrink-0 font-bold transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-white/30 group-hover:text-primary"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 font-heading text-sm sm:text-base md:text-lg uppercase tracking-tight leading-snug font-bold transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-white group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-primary border-primary text-white"
                          : "border-white/15 bg-white/[0.04] text-white/60 group-hover:border-primary/50 group-hover:text-white"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex"
                      >
                        <ChevronDown size={14} className="sm:w-4 sm:h-4" />
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 pl-9 sm:pl-13 pr-4 sm:pr-6 pb-5 sm:pb-7 font-body text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
