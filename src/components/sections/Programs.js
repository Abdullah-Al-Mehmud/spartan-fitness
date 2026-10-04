"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Personal Training",
    desc: "Achieve rapid results with dedicated 1-on-1 coaching, bi-weekly kinetic checks, and custom tracking tailored to your leverage.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
    benefits: ["Assign a certified private coach", "Real-time posture auditing", "Exclusive secure log logs"],
  },
  {
    title: "Strength Training",
    desc: "Master compound movements and powerlifting barbell techniques (Squat, Bench, Deadlift) with progressive volume logs.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    benefits: ["Master compound mechanics", "Track progressive overload", "Avoid chronic joint strain"],
  },
  {
    title: "Weight Loss",
    desc: "Accelerate fat oxidation and calorie burn through customized high-intensity energy deficits and metabolic conditioning.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600",
    benefits: ["Custom metabolic calorie deficits", "High active fat oxidation", "Cardiovascular optimization"],
  },
  {
    title: "Muscle Gain",
    desc: "Optimize hypertrophy stimuli using scientific rep ranges, mechanical tension principles, and structural rest splits.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
    benefits: ["Targeted muscle protein synthesis", "Optimized recovery timing", "Structured splits & loads"],
  },
  {
    title: "Bodybuilding",
    desc: "Sculpt muscle groups and structural symmetry with isolation profiling, hypertrophy audits, and athletic posing guidelines.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=600",
    benefits: ["Isolate lagging muscle profiles", "Build visual aesthetic balance", "Prepare for staging & symmetry"],
  },
  {
    title: "Functional Training",
    desc: "Improve mobility and real-world durability using kettlebells, sleds, plyo boxes, and active athletic movements.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600",
    benefits: ["Increase multi-planar stamina", "Fortify joint capsules", "Build useful core power"],
  },
  {
    title: "Cardio Programs",
    desc: "Boost VO2 max threshold and raw lung capacity utilizing high-end air bikes, rowing logs, and interval training protocols.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600",
    benefits: ["Expand aerobic endurance", "Enhance resting heart rate", "Elevate active conditioning"],
  },
  {
    title: "Beginner Programs",
    desc: "Start safely. Learn gym etiquette, standard kinetic patterns, and baseline weight selection with introductory trainers.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    benefits: ["Safe, injury-free onboarding", "Learn proper warmups/downs", "Graded strength progression"],
  },
  {
    title: "Nutrition Guidance",
    desc: "Fuel correctly. Get direct dietitian consulting, macro mapping logs, and sustainable nutrition plans to match your goals.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    benefits: ["Audited daily macro budgets", "Pre- and post-workout recipes", "Custom nutrition profiles"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Programs() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="sp-section sp-dark">
      <span className="sp-ghost" aria-hidden>SERVICES</span>
      <div className="sp-container">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Premium Fitness Services"
          subtext="Spartan Fitness delivers structured, science-backed workout and coaching templates engineered for raw results."
          className="mb-16 lg:mb-20"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="sp-card group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent pointer-events-none" />
                <span className="absolute top-4 left-5 font-heading text-4xl leading-none text-white/30">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-heading text-xl uppercase tracking-tight text-current group-hover:text-primary transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="sp-muted font-body text-sm leading-relaxed mt-3">
                  {svc.desc}
                </p>

                <div className="sp-hairline my-6" />

                <ul className="space-y-2.5 flex-1">
                  {svc.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center gap-3">
                      <Check size={12} className="text-primary flex-shrink-0" />
                      <span className="sp-muted font-body text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleScroll("#contact")}
                  className="mt-8 w-full inline-flex items-center justify-between font-body text-xs font-bold uppercase tracking-[0.2em] text-current hover:text-primary transition-colors group/btn cursor-pointer"
                >
                  <span>Book Class</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
