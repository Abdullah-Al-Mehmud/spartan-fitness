"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#0A0A0A] text-center overflow-hidden">
      {/* Veiled background gym image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
          alt="Spartan athlete training in gym"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]" />
      </div>

      {/* Hero-matching atmospheric crimson radial bloom */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1400px] aspect-[2/1] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.45) 0%, rgba(185,28,28,0.2) 35%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Horizontal laser glow line */}
      <div
        aria-hidden
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[60vw] max-w-[800px] h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.8), transparent)",
          boxShadow: "0 0 40px 8px rgba(220,38,38,0.4)",
        }}
      />

      {/* Watermark */}
      <span className="spartan-watermark top-12" aria-hidden>
        JOIN SPARTAN
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-5 h-[2px] bg-primary rounded-full inline-block" />
            UNLEASH YOUR POTENTIAL
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-extrabold leading-[0.96] mb-6">
            Start Your Fitness <br />
            <span className="text-primary">
              Journey Today
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-10">
            Join Spartan Fitness Dhaka today and get access to elite trainers, customized strength training plans, and a supportive, relentless community that doesn&apos;t settle for average.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScroll("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-body text-xs font-bold uppercase tracking-[0.2em] px-9 py-4 rounded-md bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-[0_15px_35px_rgba(220,38,38,0.5)] hover:scale-105 cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center font-body text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-md bg-white/[0.05] border border-white/15 text-white hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
            >
              Book Free Trial
            </button>

            <a
              href="tel:01688-664545"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-md bg-white/[0.05] border border-white/15 text-white hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
            >
              <Phone size={14} />
              <span>01688-664545</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
