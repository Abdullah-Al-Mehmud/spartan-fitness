"use client";

import { motion } from "framer-motion";
import { Shield, Award, Sparkles, Clock, ArrowRight, Heart, Users, DollarSign, Activity } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Award,
    title: "Free Expert Guidance",
    desc: "Get a customized diet plan and exercise routine from our certified trainers at no extra cost.",
  },
  {
    icon: Sparkles,
    title: "Premium Comfort",
    desc: "Train in a fully air-conditioned, spacious environment with surreal views from our cardio sections.",
  },
  {
    icon: Clock,
    title: "Exclusive Female Hours",
    desc: "Dedicated, safe, and comfortable workout hours for women every Saturday to Thursday (3:00 PM - 6:00 PM).",
  },
  {
    icon: Shield,
    title: "World-Class Equipment",
    desc: "Achieve your goals faster with top-branded, modern equipment and a surround sound system to keep you pumped.",
  },
  {
    icon: Heart,
    title: "Luxury Amenities",
    desc: "Relax post-workout with our Steam/Sauna bath and enjoy free premium shower facilities and WiFi.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function WhyChooseUs() {
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
    <section id="why-choose-us" className="relative py-16 sm:py-24 lg:py-36 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="crimson-ambient-glow -top-40 -right-40 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-30 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] opacity-25 pointer-events-none" />

      {/* Grid pattern */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        BENEFITS
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="Beyond a Gym. A Complete Fitness Experience."
          subtext="Everything you need to achieve your dream physique, all under one roof."
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="spartan-glass-card group p-5 sm:p-7 lg:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Icon size={19} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold leading-none text-white/10 group-hover:text-primary/25 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg uppercase tracking-tight text-white font-bold mt-5 sm:mt-6 mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/60 font-body text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <div className="h-px w-full bg-white/10 mb-4 sm:mb-5" />
                  <button
                    onClick={() => handleScroll("#contact")}
                    className="inline-flex items-center gap-2 font-body text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary group-hover:gap-3 transition-all duration-300 cursor-pointer"
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
