"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingDown, Flame, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stories = [
  {
    id: 1,
    name: "Tanvir Rahman",
    program: "1-on-1 Strength Coaching",
    quote:
      "I tried countless gyms in Mirpur, but Spartan's scientific tracking made the difference. The coaches built a customized program around my knee constraints, and the results followed.",
    timeline: "12 Weeks",
    metrics: [
      { label: "Weight Loss", value: "-30 lbs", icon: TrendingDown },
      { label: "Body Fat", value: "26% to 14%", icon: Flame },
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    afterImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Sarah Khan",
    program: "Athletic Performance Zone",
    quote:
      "I wanted to gain core strength and athletic agility. Spartan pushed me past mental barriers I didn't know existed. I have never felt more powerful or functional.",
    timeline: "16 Weeks",
    metrics: [
      { label: "Lean Muscle", value: "+8 lbs", icon: Flame },
      { label: "Body Fat", value: "22% to 15%", icon: TrendingDown },
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    afterImage:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Transformations() {
  const [activeStates, setActiveStates] = useState({ 1: "after", 2: "after" });

  const toggleState = (id, state) => {
    setActiveStates((prev) => ({ ...prev, [id]: state }));
  };

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
    <section id="transformations" className="relative py-16 sm:py-24 lg:py-36 bg-[#0A0A0A] overflow-hidden">
      {/* Ambient background glows */}
      <div className="crimson-ambient-glow -top-32 -left-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-30 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-32 -right-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-25 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        RESULTS
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="TRANSFORMATIONS"
          title="Proven Member Success"
          subtext="Real members, real work, real results. See what is possible with science-backed tracking and relentless consistency."
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {stories.map((story) => {
            const activeImg =
              activeStates[story.id] === "before" ? story.beforeImage : story.afterImage;

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="spartan-glass-card p-5 sm:p-7 md:p-8 flex flex-col md:flex-row gap-6 sm:gap-7 items-stretch"
              >
                {/* Photo Column with Before/After Switcher */}
                <div className="w-full md:w-[48%] flex flex-col gap-3">
                  <div className="relative w-full aspect-[4/3] xs:aspect-[3/4] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStates[story.id]}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={activeImg}
                          alt={`${story.name} transformation`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Timeline Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-body font-semibold uppercase tracking-wider text-white">
                      {story.timeline}
                    </div>
                  </div>

                  {/* Toggle Pill */}
                  <div className="flex p-1 rounded-full bg-white/[0.04] border border-white/10 self-center">
                    <button
                      onClick={() => toggleState(story.id, "before")}
                      className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeStates[story.id] === "before"
                          ? "bg-primary text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => toggleState(story.id, "after")}
                      className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeStates[story.id] === "after"
                          ? "bg-primary text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* Info Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-primary font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] block mb-1">
                      {story.program}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-tight text-white font-bold">
                      {story.name}
                    </h3>

                    {/* Quote */}
                    <div className="mt-3.5 sm:mt-4 relative pl-3.5 sm:pl-4 border-l-2 border-primary/50">
                      <p className="text-white/70 font-body text-xs sm:text-sm leading-relaxed italic">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-5">
                      {story.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={idx}
                            className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-1.5 text-primary text-xs font-medium">
                              <Icon size={13} />
                              <span className="text-white/60 text-[10px] sm:text-[11px] font-body uppercase tracking-wider">
                                {metric.label}
                              </span>
                            </div>
                            <span className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white mt-1">
                              {metric.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action link */}
                  <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10">
                    <button
                      onClick={() => handleScroll("#contact")}
                      className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors cursor-pointer group"
                    >
                      <span>Start Your Transformation</span>
                      <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
