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
  visible: {
    transition: { staggerChildren: 0.08 },
  },
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
    <section id="why-choose-us" className="bg-offwhite py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <SectionHeading
          eyebrow="WHY SPARTAN"
          title="Designed for high performance"
          subtext="Dhaka&apos;s leading premium fitness ecosystem, offering the perfect blend of luxury, scientific coaching, and competitive pricing."
          className="mb-16"
        />

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-dark/5 shadow-xl shadow-dark/[0.01] flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Icon wrap with red accent circle */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                    <Icon size={20} className="text-primary group-hover:text-white transition-all duration-300" />
                  </div>

                  <h3 className="font-heading text-lg uppercase tracking-wider text-dark mb-3">
                    {card.title}
                  </h3>

                  <p className="font-body text-xs md:text-sm text-muted leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => handleScroll("#contact")}
                    className="inline-flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-wider text-dark hover:text-primary transition-colors group-hover:gap-2.5 duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={14} />
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
