"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Tag, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const mirpur7Plans = [
  {
    id: "m7-3m",
    name: "3 Months Package",
    desc: "Admission fee included. Fast track your fitness goals.",
    regularPrice: 8900,
    offerPrice: 4500,
    duration: "3 Months",
    note: "Admission Fee Included",
    features: [
      "50% Discount on Admission included",
      "Free customized diet plan",
      "Certified trainers floor guidance",
      "Fully air-conditioned workout space",
      "Modern high-end equipment",
      "Free Wi-Fi & locker facilities",
    ],
    isFeatured: false,
  },
  {
    id: "m7-6m",
    name: "6 Months Package",
    desc: "Our most popular package for serious transformation.",
    regularPrice: 12800,
    offerPrice: 6500,
    duration: "6 Months",
    note: "Admission Fee Included",
    features: [
      "50% Discount on Admission included",
      "Free personalized diet & workout routine",
      "Steam & Sauna bath relaxation",
      "Dedicated female hours (3:00 PM - 6:00 PM)",
      "Lockers & premium shower facilities",
      "High-value long-term savings",
    ],
    isFeatured: true,
  },
  {
    id: "m7-1y",
    name: "1 Year Package",
    desc: "Maximum results and the biggest overall annual savings.",
    regularPrice: 20600,
    offerPrice: 9500,
    duration: "1 Year",
    note: "Admission Fee Included",
    features: [
      "Save TK 11,100 on annual membership",
      "50% Discount on Admission included",
      "Free custom diet & exercise blueprint",
      "Full steam/sauna bath amenities",
      "Unlimited gym access for 365 days",
      "Continuous progress monitoring",
    ],
    isFeatured: false,
  },
];

const mirpur14EarlyAccess = [
  {
    id: "m14-ea-3m",
    name: "3 Months Package",
    desc: "Early access morning & afternoon training session.",
    regularPrice: 9500,
    offerPrice: 4350,
    duration: "3 Months",
    note: "You Pay Only TK 4,350",
    features: [
      "Training access 7:00 AM - 3:00 PM",
      "Admission fee discount included",
      "Free personalized diet plan",
      "Certified trainer support",
      "Modern equipment & air-conditioned zone",
    ],
    isFeatured: false,
  },
  {
    id: "m14-ea-6m",
    name: "6 Months Package",
    desc: "Half-year early access with massive value.",
    regularPrice: 14000,
    offerPrice: 5850,
    duration: "6 Months",
    note: "You Pay Only TK 5,850",
    features: [
      "Training access 7:00 AM - 3:00 PM",
      "Save TK 8,150 over regular price",
      "Free diet plan & workout routine",
      "Steam/sauna & premium showers",
      "Dedicated female hours (Sat-Thu)",
    ],
    isFeatured: true,
  },
  {
    id: "m14-ea-1y",
    name: "1 Year Package",
    desc: "Full year of early access at the lowest rate.",
    regularPrice: 23000,
    offerPrice: 8850,
    duration: "1 Year",
    note: "You Pay Only TK 8,850",
    features: [
      "Training access 7:00 AM - 3:00 PM",
      "Save TK 14,150 over regular price",
      "365 days of guided fitness routines",
      "Free customized diet blueprints",
      "Full amenities & recovery access",
    ],
    isFeatured: false,
  },
];

const mirpur14Gold = [
  {
    id: "m14-gold-3m",
    name: "3 Months Package",
    desc: "Anytime access with zero time restrictions.",
    regularPrice: null,
    offerPrice: 5000,
    duration: "3 Months",
    note: "You Pay Only TK 5,000",
    features: [
      "Anytime access (7:00 AM - 11:30 PM)",
      "Admission fee discount included",
      "Free customized diet plan",
      "Certified trainers on floor",
      "Modern equipment & luxury amenities",
    ],
    isFeatured: false,
  },
  {
    id: "m14-gold-6m",
    name: "6 Months Package",
    desc: "Anytime access with optimum consistency.",
    regularPrice: null,
    offerPrice: 7000,
    duration: "6 Months",
    note: "You Pay Only TK 7,000",
    features: [
      "Anytime access throughout the week",
      "Free custom diet & routine plan",
      "Steam & Sauna bath relaxation",
      "Dedicated female hours (3:00 PM - 6:00 PM)",
      "Priority trainer guidance",
    ],
    isFeatured: true,
  },
  {
    id: "m14-gold-1y",
    name: "1 Year Package",
    desc: "Complete 1-year unrestricted VIP gold pass.",
    regularPrice: null,
    offerPrice: 10000,
    duration: "1 Year",
    note: "You Pay Only TK 10,000",
    features: [
      "Unlimited anytime gym access for 1 full year",
      "Best value per month (Under TK 850/mo)",
      "Free comprehensive diet & workout plans",
      "Steam/sauna & premium showers",
      "Continuous coaching & progress reviews",
    ],
    isFeatured: false,
  },
];

export default function Packages() {
  const [activeBranch, setActiveBranch] = useState("mirpur-7");
  const [m14Tier, setM14Tier] = useState("early-access");

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentPlans =
    activeBranch === "mirpur-7"
      ? mirpur7Plans
      : m14Tier === "early-access"
      ? mirpur14EarlyAccess
      : mirpur14Gold;

  const branchCta =
    activeBranch === "mirpur-7" ? "Join Mirpur 7 Now" : "Join Mirpur 14 Now";

  return (
    <section id="pricing" className="relative pt-16 sm:pt-24 lg:pt-36 pb-8 sm:pb-12 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient background glows */}
      <div className="crimson-ambient-glow -top-32 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[500px] opacity-35 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        OFFERS
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="POWER UP DEALS"
            title="Power Up Deals! Best Time to Join is NOW."
            subtext="Limited-time admission fee discounts across both branches. Secure your spot before the offer ends."
            className="md:max-w-2xl"
          />

          {/* Branch Tabs */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-2xl sm:rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md self-stretch sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveBranch("mirpur-7")}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer text-center ${
                activeBranch === "mirpur-7" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {activeBranch === "mirpur-7" && (
                <motion.div
                  layoutId="activeBranchTab"
                  className="absolute inset-0 bg-primary rounded-xl sm:rounded-full z-0 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 leading-tight">Mirpur 7</span>
              <span
                className={`relative z-10 text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full shrink-0 ${
                  activeBranch === "mirpur-7"
                    ? "bg-white/20 text-white"
                    : "bg-primary/20 text-primary-light border border-primary/30"
                }`}
              >
                50% OFF
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveBranch("mirpur-14")}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer text-center ${
                activeBranch === "mirpur-14" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {activeBranch === "mirpur-14" && (
                <motion.div
                  layoutId="activeBranchTab"
                  className="absolute inset-0 bg-primary rounded-xl sm:rounded-full z-0 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 leading-tight">Mirpur 14</span>
              <span
                className={`relative z-10 text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full shrink-0 ${
                  activeBranch === "mirpur-14"
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/80 border border-white/15"
                }`}
              >
                Early / Gold
              </span>
            </button>
          </div>
        </div>

        {/* Mirpur 14 Sub-Tiers Toggle */}
        {activeBranch === "mirpur-14" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-auto p-1 sm:p-1.5 rounded-2xl sm:rounded-full border border-white/10 bg-white/[0.03] gap-1">
              <button
                type="button"
                onClick={() => setM14Tier("early-access")}
                className={`px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                  m14Tier === "early-access"
                    ? "bg-white text-[#0A0A0A] font-bold shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Early Access (7:00 AM - 3:00 PM)
              </button>
              <button
                type="button"
                onClick={() => setM14Tier("gold")}
                className={`px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                  m14Tier === "gold"
                    ? "bg-white text-[#0A0A0A] font-bold shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Gold Membership (Anytime Access)
              </button>
            </div>
          </motion.div>
        )}

        {/* Notice Banner for Mirpur 7 */}
        {activeBranch === "mirpur-7" && (
          <div className="mb-8 flex items-center justify-center px-2">
            <span className="inline-flex items-center text-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm max-w-full">
              <Tag size={13} className="text-primary-light shrink-0" />
              <span>50% Discount on Admission Fee Included Across All Packages</span>
            </span>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative flex flex-col ${plan.isFeatured ? "md:-mt-3 md:-mb-3 pt-3" : "pt-3"}`}
              >
                {plan.isFeatured && (
                  <div className="absolute top-0 right-6 sm:right-8 z-30 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#0A0A0A] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.55)] border border-white/30">
                      <Sparkles size={12} className="text-primary fill-primary" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`flex-1 p-6 sm:p-8 lg:p-9 flex flex-col justify-between ${
                    plan.isFeatured ? "spartan-glass-red" : "spartan-glass-card"
                  }`}
                >

                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-lg sm:text-xl uppercase tracking-tight text-white font-bold">
                        {plan.name}
                      </h3>
                      <span className="font-heading text-sm opacity-40 font-semibold">0{i + 1}</span>
                    </div>
                    <p className={`font-body text-xs sm:text-sm mt-2 leading-relaxed ${plan.isFeatured ? "text-white/90" : "text-white/60"}`}>
                      {plan.desc}
                    </p>

                    {/* Strikethrough regular price (if available) */}
                    <div className="mt-5 sm:mt-6 min-h-[22px]">
                      {plan.regularPrice ? (
                        <div className="flex items-center gap-2">
                          <span className={`line-through text-xs sm:text-sm font-body font-medium ${plan.isFeatured ? "text-white/70" : "text-white/45"}`}>
                            Regular TK {plan.regularPrice.toLocaleString()}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                              plan.isFeatured
                                ? "bg-white/20 text-white border border-white/30"
                                : "bg-primary/20 text-primary-light border border-primary/35"
                            }`}
                          >
                            Save TK {(plan.regularPrice - plan.offerPrice).toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            plan.isFeatured ? "text-white/90" : "text-primary-light"
                          }`}
                        >
                          Exclusive Offer Price
                        </span>
                      )}
                    </div>

                    {/* Bold Offer Price */}
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span
                        className={`font-heading text-lg sm:text-xl font-bold ${
                          plan.isFeatured ? "text-white/95" : "text-primary-light"
                        }`}
                      >
                        TK
                      </span>
                      <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-white">
                        {plan.offerPrice.toLocaleString()}
                      </span>
                      <span className={`font-body text-xs font-semibold uppercase tracking-wider ${plan.isFeatured ? "text-white/80" : "text-white/50"}`}>
                        / {plan.duration}
                      </span>
                    </div>

                    <p
                      className={`font-body text-[11px] font-semibold mt-1.5 flex items-center gap-1.5 ${
                        plan.isFeatured ? "text-white/95" : "text-emerald-400"
                      }`}
                    >
                      <Check
                        size={13}
                        className={`stroke-[2.5] ${
                          plan.isFeatured ? "text-white" : "text-emerald-400"
                        }`}
                      />
                      <span>{plan.note}</span>
                    </p>

                    {/* Divider */}
                    <div className={`h-px w-full my-5 sm:my-6 ${plan.isFeatured ? "bg-white/20" : "bg-white/10"}`} />

                    {/* Features */}
                    <ul className="space-y-3 sm:space-y-3.5 mb-7 sm:mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                          <Check
                            size={15}
                            className={`flex-shrink-0 mt-0.5 ${
                              plan.isFeatured ? "text-white" : "text-primary-light"
                            }`}
                          />
                          <span
                            className={`font-body text-xs sm:text-sm leading-relaxed ${
                              plan.isFeatured ? "text-white/95" : "text-white/80"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Branch CTA Button */}
                  <button
                    onClick={() => handleScroll("#claim-offer")}
                    className={`w-full py-3.5 sm:py-4 rounded-md font-body text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      plan.isFeatured
                        ? "bg-white text-[#0A0A0A] hover:bg-white/90 shadow-lg"
                        : "bg-white/[0.05] border border-white/20 text-white hover:border-primary hover:bg-primary"
                    }`}
                  >
                    <span>{branchCta}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
