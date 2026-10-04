"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const benefits = [
  "Custom Strength & Conditioning Blueprint",
  "Real-Time Biomechanics & Form Correction",
  "Individualized Macro & Diet Structure Mapping",
  "Bi-Weekly Body Composition Diagnostics & Diagnostics",
];

export default function PersonalTraining() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="personal-training" className="sp-section sp-dark overflow-hidden">
      <span className="sp-ghost" aria-hidden>1-ON-1</span>
      <div className="sp-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative pb-10 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
                alt="Personal trainer supporting member bench press"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sp-card absolute bottom-0 right-3 sm:right-6 lg:-right-6 p-5 w-[260px] max-w-[85%]"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                    alt="David Martinez portrait"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-sm text-current">David Martinez</h4>
                  <p className="font-body text-[9px] text-primary uppercase font-bold tracking-[0.2em]">
                    Member Transformation
                  </p>
                </div>
              </div>
              <div className="sp-hairline mt-4" />
              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="font-heading text-xl text-current">-30 lbs</span>
                  <p className="sp-muted font-body text-[9px] uppercase tracking-wider">Weight Loss</p>
                </div>
                <div>
                  <span className="font-heading text-xl text-current">12 Weeks</span>
                  <p className="sp-muted font-body text-[9px] uppercase tracking-wider">Duration</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.span {...fade()} className="sp-eyebrow self-start">
              One-On-One Training
            </motion.span>

            <motion.h2
              {...fade(0.1)}
              className="font-heading text-[2.25rem] sm:text-5xl lg:text-[3.5rem] uppercase tracking-tight text-current leading-[1] mt-5"
            >
              Elite Personal Training <br />
              <span className="text-primary">Built for your metrics</span>
            </motion.h2>

            <motion.p
              {...fade(0.2)}
              className="sp-muted font-body text-sm md:text-base leading-relaxed mt-6 max-w-lg"
            >
              Generic templates lead to generic plateaus. Our certified elite coaches perform individual kinetic assessments, mapping your skeletal leverage and cardiovascular zones to create a program built strictly for your physiology.
            </motion.p>

            <motion.ul {...fade(0.3)} className="mt-10 mb-10 border-t border-white/10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-5 py-4 border-b border-white/10">
                  <span className="font-heading text-sm text-primary tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm font-semibold text-current">{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fade(0.4)} className="flex flex-wrap items-center gap-4">
              <Button variant="primary" onClick={() => handleScroll("#contact")}>
                Inquire PT Program
              </Button>
              <button
                onClick={() => handleScroll("#trainers")}
                className="inline-flex items-center gap-1 font-body text-xs font-bold uppercase tracking-[0.2em] text-current hover:text-primary transition-colors py-3 px-4 cursor-pointer"
              >
                <span>View Trainers</span>
                <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
