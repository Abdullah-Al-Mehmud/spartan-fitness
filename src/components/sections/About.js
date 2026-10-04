"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Target, Award, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    content:
      "To empower individuals in Dhaka to build strength, discipline, and healthy lifestyles. We provide high-end international facilities, certified trainers, and personalized coaching systems designed to deliver guaranteed results.",
    icon: Target,
  },
  {
    id: "vision",
    label: "Vision",
    content:
      "To be the gold standard of premium boutique fitness in Bangladesh, expanding our community of relentless individuals and consistently raising the bar for athletic conditioning, training biomechanics, and recovery.",
    icon: Award,
  },
  {
    id: "philosophy",
    label: "Philosophy",
    content:
      "Discipline is the foundation of success. We reject quick-fixes, fat-loss pills, and unsustainable crash diets. We advocate progressive overload weight training, clean nutritional fueling, and scientific body tracking.",
    icon: Dumbbell,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.registerPlugin(ScrollTrigger);

      // Collage mask reveals
      gsap.fromTo(
        ".about-img-main",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", scale: 1.08 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-img-main",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-img-tr",
        { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", scale: 1.08 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-img-tr",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-img-bl",
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.08 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-img-bl",
            start: "top 85%",
          },
        }
      );

      // Responsive Parallax collage movements
      gsap.to(".about-img-tr", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });

      gsap.to(".about-img-bl", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });

      // Experience badge scale-in
      gsap.fromTo(
        ".about-badge",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".about-badge",
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-36 bg-[#0A0A0A] overflow-hidden">
      {/* Background atmospheric ambient red glow */}
      <div className="crimson-ambient-glow -top-32 -left-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-40 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-32 -right-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] opacity-25 pointer-events-none" />

      {/* Subtle architectural dot grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark text */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        SPARTAN
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="WHO WE ARE"
          title="About Spartan Fitness"
          subtext="Dhaka's premier luxury fitness center. We build custom strength training programs, bodybuilding frameworks, and weight loss blueprints that deliver results."
          className="mb-12 sm:mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative h-[340px] xs:h-[390px] sm:h-[460px] lg:h-[520px] w-full">
            {/* Ambient soft glow directly behind photo cluster */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10 pointer-events-none" />

            {/* Main large image */}
            <div className="about-img-main absolute top-0 left-0 w-[64%] h-[76%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#121214]">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
                alt="Spartan Gym interior"
                fill
                sizes="(max-width: 640px) 65vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Overlapping top-right image */}
            <div className="about-img-tr absolute top-6 sm:top-10 right-0 w-[42%] h-[48%] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.9)] bg-[#121214]">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
                alt="Member lifting weights"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 20vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Overlapping bottom-left image */}
            <div className="about-img-bl absolute bottom-0 right-[16%] w-[48%] h-[40%] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.9)] bg-[#121214]">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                alt="Barbell rack section"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 22vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Experience badge */}
            <div className="about-badge absolute bottom-2 sm:bottom-4 left-1 sm:left-4 spartan-glass-card p-3 sm:p-5 flex flex-col items-start border border-white/20 bg-black/70 backdrop-blur-xl">
              <span className="font-heading text-2xl sm:text-4xl text-primary font-extrabold leading-none">
                10+
              </span>
              <span className="font-body text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-white/70 mt-1 font-medium">
                Years of Excellence
              </span>
            </div>
          </div>

          {/* Right Column: Story & Tabs */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight leading-[1.2] text-white font-bold">
              Building a community of high performers in Dhaka.
            </h3>
            <p className="text-white/60 font-body text-xs sm:text-sm md:text-base leading-relaxed mt-4 sm:mt-5">
              Spartan Fitness is one of the leading premium fitness centers in Dhaka. We provide world-class gym equipment, certified trainers, strength training, bodybuilding, weight loss programs, functional fitness, cardio training, and personalized coaching for beginners and professionals alike.
            </p>

            {/* Hairline divider */}
            <div className="h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent my-6 sm:my-8" />

            {/* Responsive Tabs list */}
            <div className="flex gap-4 sm:gap-8 border-b border-white/10 pb-1 overflow-x-auto scrollbar-none" role="tablist">
              {tabs.map((tab, i) => {
                const TabIcon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 pb-3 relative font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${
                      active ? "text-primary" : "text-white/50 hover:text-white"
                    }`}
                  >
                    <span className="text-[10px] opacity-40 font-heading">0{i + 1}</span>
                    <TabIcon size={13} className="sm:w-3.5 sm:h-3.5" />
                    <span>{tab.label}</span>
                    {active && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_6px_rgba(208,59,59,0.35)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="pt-5 sm:pt-6 min-h-[110px] sm:min-h-[120px]">
              <AnimatePresence mode="wait">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.p
                        key={tab.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/70 font-body text-xs sm:text-sm md:text-base leading-relaxed"
                      >
                        {tab.content}
                      </motion.p>
                    )
                )}
              </AnimatePresence>
            </div>

            {/* CTA Link button */}
            <div className="mt-6 sm:mt-8">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-body text-xs font-bold uppercase tracking-[0.2em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-white/[0.05] border border-white/15 text-white hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                <span>View Membership Plans</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
