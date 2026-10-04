"use client";

import { motion } from "framer-motion";
import { Shield, Award, Sparkles, Clock, ArrowRight, Heart, Users, DollarSign, Activity } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Shield,
    title: "Modern Equipment",
    desc: "Train with world-class, premium international biomechanic strength machinery, Olympic platforms, and high-performance cardio decks.",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    desc: "Every coach holds verified industry-leading credentials (such as NASM, CSCS, and dietitian registrations) to guide you safely.",
  },
  {
    icon: Activity,
    title: "Personal Coaching",
    desc: "Receive dedicated 1-on-1 kinetic assessments, tailored lifting logs, and progress diagrams engineered for muscle stimulus.",
  },
  {
    icon: Sparkles,
    title: "Nutrition Support",
    desc: "Get customized macronutrient breakdowns, meal prep recipes, and diet blueprints aligned with your fat oxidation goals.",
  },
  {
    icon: Clock,
    title: "Flexible Membership",
    desc: "No locked contracts. Enjoy flexible monthly, quarterly, and yearly tiers with hassle-free holds and membership freezes.",
  },
  {
    icon: Heart,
    title: "Clean Environment",
    desc: "Train in comfort. We maintain surgical sanitation standards with continuous cleaning shifts on all machines and lockers.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    desc: "Surround yourself with like-minded, ambitious members who encourage consistency, hard work, and mutual athletic growth.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Enjoy top-tier boutique luxury gym facilities and coaching at highly competitive BDT pricing plans in Dhaka.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function WhyChooseUs() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-choose-us" className="relative py-28 lg:py-36 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="crimson-ambient-glow -top-40 -right-40 w-[600px] h-[600px] opacity-30 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-40 -left-40 w-[500px] h-[500px] opacity-25 pointer-events-none" />

      {/* Grid pattern */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-12" aria-hidden>
        WHY SPARTAN
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="WHY SPARTAN"
          title="Designed for High Performance"
          subtext="Dhaka's leading premium fitness ecosystem, offering the perfect blend of luxury, scientific coaching, and competitive pricing."
          className="mb-16 lg:mb-20"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="spartan-glass-card group p-7 lg:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold leading-none text-white/10 group-hover:text-primary/25 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg uppercase tracking-tight text-white font-bold mt-6 mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="h-px w-full bg-white/10 mb-5" />
                  <button
                    onClick={() => handleScroll("#contact")}
                    className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary group-hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={13} className="text-primary" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
