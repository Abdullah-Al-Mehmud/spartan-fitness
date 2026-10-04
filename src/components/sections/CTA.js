"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#0A0A0A] text-center overflow-hidden">
      {/* Veiled background gym image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/485851646_1052136656936640_8896535166201266335_n.jpg"
          alt="Spartan Fitness strength facility"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]" />
      </div>

      {/* Hero-matching atmospheric crimson radial bloom */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] aspect-[2/1] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(208,59,59,0.22) 0%, rgba(171,45,45,0.08) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Horizontal laser glow line */}
      <div
        aria-hidden
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[70vw] max-w-[800px] h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(208,59,59,0.4), transparent)",
          boxShadow: "0 0 25px 4px rgba(208,59,59,0.18)",
        }}
      />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        JOIN SPARTAN
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 text-primary font-body text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4">
            <span className="w-4 sm:w-5 h-[2px] bg-primary rounded-full inline-block" />
            LIMITED-TIME 50% DISCOUNT
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold leading-[1.08] mb-5 sm:mb-6 max-w-3xl">
            Ready to Start Your{" "}
            <span className="text-primary">
              Transformation?
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8 sm:mb-10">
            Don&apos;t miss out on our limited-time 50% discount offers. Call us directly to book your package.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScroll("#claim-offer")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-body text-xs font-bold uppercase tracking-[0.2em] px-8 sm:px-9 py-3.5 sm:py-4 rounded-md bg-primary text-white hover:bg-primary-dark transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
            >
              <span>Claim 50% Off Now</span>
              <ArrowRight size={15} />
            </button>

            <a
              href="tel:01688664545"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs sm:text-sm font-bold uppercase tracking-[0.16em] px-7 sm:px-8 py-3.5 sm:py-4 rounded-md bg-white/[0.08] border border-white/20 text-white hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
            >
              <Phone size={15} className="text-primary" />
              <span>📞 01688-664545</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
