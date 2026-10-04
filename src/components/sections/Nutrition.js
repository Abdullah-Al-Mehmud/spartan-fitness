"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const dietPlans = [
  {
    id: "fat-loss",
    goal: "Lean Definition & Fat Loss",
    planName: "Thermogenic Caloric Deficit",
    mealName: "Zesty Seared Salmon & Greens",
    macros: "1,800 kcal • 160g Protein • 130g Carbs • 55g Fat",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Accelerates fat oxidation while preserving lean skeletal muscle",
      "Balances high dietary protein to keep you satiated throughout the day",
      "Low glycemic index carbs to prevent insulin and energy spikes",
    ],
    sampleIngredients: "Fresh Wild Salmon, Steam Broccoli, Avocado slices, Wild Rice, Lemon drizzle",
  },
  {
    id: "hypertrophy",
    goal: "Muscle Gain & Mass",
    planName: "Hypertrophic Caloric Surplus",
    mealName: "Prime Beef Sirloin & Mash",
    macros: "2,900 kcal • 190g Protein • 310g Carbs • 85g Fat",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Elevates glycogen reserves to maximize lifting performance",
      "Triggers high muscle protein synthesis (MPS) rates post-training",
      "Packed with essential amino acids and healthy fats for joint recovery",
    ],
    sampleIngredients: "Seared Beef Strips, Whipped Sweet Potatoes, Sauteed Asparagus, Virgin Olive Oil",
  },
  {
    id: "performance",
    goal: "Athletic Endurance",
    planName: "Isocaloric Performance Balance",
    mealName: "Marinated Chicken & Quinoa Salad",
    macros: "2,400 kcal • 170g Protein • 240g Carbs • 70g Fat",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Maintains optimal glucose levels during intense athletic conditioning",
      "Anti-inflammatory ingredients support cardiovascular performance",
      "Rich in complex minerals to support electrolyte replenishment",
    ],
    sampleIngredients: "Shredded Organic Chicken, Toasted Quinoa, Mixed Baby Greens, Almond slivers, Raspberries",
  },
];


export default function Nutrition() {
  const [activePlanId, setActivePlanId] = useState("fat-loss");

  const activePlan = dietPlans.find((plan) => plan.id === activePlanId);
  const activeIndex = dietPlans.findIndex((plan) => plan.id === activePlanId);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nutrition" className="sp-section sp-dark">
      <span className="sp-ghost" aria-hidden>
        Fuel
      </span>
      <div className="sp-container">
        <SectionHeading
          eyebrow="NUTRITION SYSTEM"
          title="Performance Diet Blueprints"
          subtext="Training stimualtes. Nutrition builds. Select your athletic goal to view sample nutrient splits mapped out by our staff nutritionists."
          className="mb-12 md:mb-16"
        />

        {/* Goal selector */}
        <div className="flex flex-wrap gap-3 mb-10">
          {dietPlans.map((plan, i) => (
            <button
              key={plan.id}
              onClick={() => setActivePlanId(plan.id)}
              aria-pressed={activePlanId === plan.id}
              className={`inline-flex items-center gap-3 px-5 py-3 rounded-full font-body text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 border cursor-pointer ${
                activePlanId === plan.id
                  ? "bg-primary border-primary text-white shadow-[0_10px_40px_-10px_rgba(220,38,38,0.7)]"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/30"
              }`}
            >
              <span className="opacity-60">0{i + 1}</span>
              {plan.goal}
            </button>
          ))}
        </div>

        {/* Active plan */}
        <div className="sp-card p-5 sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlanId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch"
            >
              {/* Image */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-2xl overflow-hidden bg-black group">
                <Image
                  src={activePlan.image}
                  alt={activePlan.mealName}
                  fill
                  className="object-cover object-center grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                  <span className="font-body text-[10px] font-semibold text-primary-light uppercase tracking-[0.2em] block">
                    Sample Meal
                  </span>
                  <span className="font-heading text-sm text-white uppercase tracking-wide mt-0.5 block truncate">
                    {activePlan.mealName}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-7 flex flex-col justify-between relative">
                <span
                  aria-hidden
                  className="absolute -top-2 right-0 font-heading text-[5rem] sm:text-[8rem] leading-none text-white/[0.05] select-none pointer-events-none"
                >
                  0{activeIndex + 1}
                </span>
                <div className="relative">
                  <span className="font-body text-[11px] font-semibold text-primary-light uppercase tracking-[0.22em]">
                    {activePlan.planName}
                  </span>

                  <h3 className="font-heading text-2xl md:text-4xl uppercase tracking-tight leading-[1.05] mt-3 text-current">
                    {activePlan.mealName}
                  </h3>

                  <div className="inline-flex items-start gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 rounded-2xl mt-6">
                    <Flame size={15} className="text-primary-light flex-shrink-0 mt-0.5" />
                    <span className="font-body text-xs font-semibold tracking-wide">
                      {activePlan.macros}
                    </span>
                  </div>

                  <p className="sp-muted font-body text-sm leading-relaxed mt-6">
                    <strong className="text-current font-semibold">Primary ingredients:</strong>{" "}
                    {activePlan.sampleIngredients}.
                  </p>

                  <div className="sp-hairline my-8" />

                  <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] sp-muted mb-5">
                    Nutritional Strategy
                  </h4>
                  <ul className="space-y-4">
                    {activePlan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary-light" />
                        </span>
                        <span className="font-body text-sm text-white/80 leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    onClick={() => handleScroll("#contact")}
                    className="sp-btn sp-btn-primary"
                  >
                    Request Custom Diet
                  </button>
                  <button
                    onClick={() => handleScroll("#pricing")}
                    className="sp-btn sp-btn-outline"
                  >
                    <span>View Pricing Plans</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
