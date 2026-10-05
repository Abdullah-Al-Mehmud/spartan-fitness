"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Award,
  Dumbbell,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    icon: Target,
    title: "Empower Every Trainee with Science & Precision",
    description:
      "To empower individuals in Dhaka to build sustainable strength, athletic discipline, and long-term health. We provide international-grade biomechanical equipment, certified master trainers, and custom protocols engineered for measurable results.",
    highlights: [
      "Custom biomechanical coaching to eliminate injury risk",
      "Routine metabolic & body composition analysis",
      "Personalized nutrition tailored to South Asian lifestyles",
    ],
  },
  {
    id: "vision",
    label: "Vision",
    icon: Award,
    title: "The Gold Standard of Strength & Recovery in Bangladesh",
    description:
      "To be the benchmark of boutique fitness sanctuaries in Dhaka, expanding an elite community of relentless individuals while consistently advancing equipment ergonomics, coaching standards, and executive wellness facilities.",
    highlights: [
      "Continuously upgraded international biomechanic machines",
      "Executive Finnish steam bath and recovery amenities",
      "Safe, private training with dedicated female-only hours",
    ],
  },
  {
    id: "philosophy",
    label: "Philosophy",
    icon: Dumbbell,
    title: "Discipline Over Shortcuts — The Spartan Code",
    description:
      "True transformation demands patience and ruthless consistency. We reject dangerous fat-loss pills, crash starvation diets, and viral fitness fads. We advocate progressive overload, mindful movement, and restorative recovery.",
    highlights: [
      "Strict adherence to progressive resistance principles",
      "Whole-food nutritional frameworks — no unsustainable starvation",
      "A culture of mutual respect, humility, and daily discipline",
    ],
  },
];

const highlights = [
  { label: "Proven Heritage", value: "10+", sub: "Years in Dhaka" },
  { label: "Master Trainers", value: "15+", sub: "Certified Coaches" },
  { label: "Prime Arenas", value: "2", sub: "Mirpur 7 & 14" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

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
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 bg-[#0A0A0A] overflow-hidden">
      {/* Background atmospheric ambient red glows */}
      <div className="crimson-ambient-glow -top-36 -left-36 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] opacity-35 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-36 -right-36 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] opacity-25 pointer-events-none" />

      {/* Architectural dot grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Background Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        SPARTAN
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="WHO WE ARE"
          title="About Spartan Fitness"
          subtext="Dhaka's premier luxury fitness sanctuary. Custom strength training, athletic conditioning, and executive recovery tailored for high performers."
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Premium Layered Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Ambient backlight glow */}
            <div className="absolute -inset-4 bg-primary/15 rounded-3xl blur-3xl -z-10 pointer-events-none" />

            <div className="relative h-[420px] xs:h-[460px] sm:h-[520px] md:h-[540px] w-full">
              {/* Main Anchor Card: Primary Arena Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-[72%] h-[74%] rounded-3xl overflow-hidden border border-white/15 bg-[#111114] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group"
              >
                <Image
                  src="/128868841_668587480486581_6912739221833064982_n.jpg"
                  alt="Spartan Fitness state-of-the-art training arena"
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 35vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Micro Location Pill */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-white/90">
                    Mirpur 7 & 14 • Dhaka
                  </span>
                </div>

                {/* Bottom title inside main frame */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <p className="font-heading text-xs uppercase tracking-wider font-bold text-white">
                    Main Workout Floor
                  </p>
                  <p className="font-body text-[10px] text-white/60">
                    High-end international equipment & air-conditioned zone
                  </p>
                </div>
              </motion.div>

              {/* Overlapping Top-Right Card: Coaches & Championship Trophy */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="absolute top-6 right-0 w-[46%] h-[44%] rounded-2xl overflow-hidden border border-white/20 bg-[#151518] shadow-[0_20px_45px_rgba(0,0,0,0.9)] group"
              >
                <Image
                  src="/485309162_1051877876962518_2632745172042704375_n.jpg"
                  alt="Spartan championship coaches"
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[9px] font-heading font-extrabold uppercase tracking-wider text-primary-light">
                      <Award size={11} /> National Champions
                    </span>
                    <p className="font-body text-[9px] text-white/70">Certified Coaching Staff</p>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping Bottom-Right Card: Heavy Weights & Dumbbell Racks */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.25 }}
                className="absolute bottom-0 right-[4%] w-[48%] h-[42%] rounded-2xl overflow-hidden border border-white/20 bg-[#151518] shadow-[0_20px_50px_rgba(0,0,0,0.9)] group"
              >
                <Image
                  src="/482207656_1042939214523051_8760506858185054018_n.jpg"
                  alt="Spartan heavy dumbbell training floor"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 22vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3">
                  <p className="font-heading text-[10px] uppercase tracking-wider font-bold text-white">
                    Free Weights Zone
                  </p>
                  <p className="font-body text-[9px] text-white/70">
                    Full dumbbell racks & powerlifting platforms
                  </p>
                </div>
              </motion.div>

              {/* Floating Luxury Achievement Badge */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute bottom-4 left-2 sm:left-4 z-20 rounded-2xl border border-primary/30 bg-[#0E0E12]/92 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_15px_35px_rgba(208,59,59,0.2)] flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shrink-0 shadow-md">
                  <Flame size={22} className="text-white fill-white/20" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                      10+
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Years
                    </span>
                  </div>
                  <p className="font-body text-[10px] uppercase tracking-[0.16em] text-white/60 font-semibold mt-0.5">
                    Of Fitness Excellence
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative, Features & Structured Tabs */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Section Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                The Spartan Philosophy
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight leading-[1.18] text-white font-black">
              Building a community of high performers in Dhaka.
            </h3>

            <p className="text-white/70 font-body text-sm sm:text-base leading-relaxed mt-4">
              Spartan Fitness is Dhaka&apos;s premier strength and wellness sanctuary. We combine
              world-class biomechanical equipment, certified championship trainers, and executive
              amenities into a results-driven environment designed for beginners and elite athletes alike.
            </p>

            {/* Quick Impact Stats */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 my-6 py-4 border-y border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary mt-0.5">
                    {item.label}
                  </span>
                  <span className="font-body text-[10px] text-white/45 hidden sm:block">
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Segmented Interactive Tabs */}
            <div className="w-full">
              <div
                className="flex p-1 rounded-xl bg-white/[0.04] border border-white/10 gap-1"
                role="tablist"
              >
                {tabs.map((tab, i) => {
                  const TabIcon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-lg font-body text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        active
                          ? "bg-primary text-white shadow-[0_4px_16px_rgba(208,59,59,0.35)]"
                          : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <TabIcon size={14} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Tab Body */}
              <div className="pt-5 min-h-[160px] sm:min-h-[145px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <p className="text-white/75 font-body text-xs sm:text-sm leading-relaxed">
                      {currentTab.description}
                    </p>

                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {currentTab.highlights.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          <span className="font-body text-xs text-white/80 font-medium">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#pricing");
                }}
                className="inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-[0.18em] px-6 py-3.5 rounded-lg bg-primary text-white hover:bg-primary-dark shadow-[0_6px_20px_rgba(208,59,59,0.3)] transition-all duration-300 group cursor-pointer"
              >
                <span>View Membership Plans</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-[0.18em] px-6 py-3.5 rounded-lg bg-white/[0.04] border border-white/15 text-white hover:border-primary hover:text-primary transition-all duration-300 group cursor-pointer"
              >
                <span>Our Full Story</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
