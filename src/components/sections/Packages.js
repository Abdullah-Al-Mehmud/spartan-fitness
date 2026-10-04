"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  {
    id: "basic",
    name: "Basic Access",
    desc: "Essential gym access for your fitness routine.",
    priceMonthly: 2500,
    priceYearly: 2000,
    features: [
      "Access 5 days a week (Mon-Fri)",
      "Standard cardio & strength equipment",
      "Sleek lockers & premium showers",
      "Complimentary high-speed Wi-Fi",
      "1 baseline fitness assessment/year",
      "Mobile app access for training logs",
    ],
    isFeatured: false,
  },
  {
    id: "pro",
    name: "Pro Premium",
    desc: "The sweet spot. Complete access + personal coaching.",
    priceMonthly: 4500,
    priceYearly: 3600,
    features: [
      "Unlimited 24/7 gym access (both branches)",
      "Full zone access (CrossFit, MMA, HIIT)",
      "Lockers, premium showers & towel service",
      "4 personal training sessions per month",
      "1 professional nutrition consultation/month",
      "2 guest passes per month",
      "Priority class booking on mobile app",
    ],
    isFeatured: true,
  },
  {
    id: "elite",
    name: "Spartan Elite",
    desc: "VVIP treatment. Maximum results, diets, & recovery.",
    priceMonthly: 7500,
    priceYearly: 6000,
    features: [
      "Unlimited 24/7 VIP access (all branches)",
      "Unlimited personal training sessions",
      "Tailored custom meal & diet plans",
      "Weekly body composition diagnostics",
      "Unlimited Recovery & Cryo suite access",
      "Dedicated secure locker & laundry service",
      "Free daily performance protein smoothie",
    ],
    isFeatured: false,
  },
];

export default function Packages() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative pt-28 lg:pt-36 pb-12 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient background glows */}
      <div className="crimson-ambient-glow -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-35 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-12" aria-hidden>
        PLANS
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="MEMBERSHIP PLANS"
            title="Choose Your Level"
            subtext="Flexible tiers built to align with your personal goals. Train in Mirpur-7 or Mirpur-14 with our premium packages."
            className="md:max-w-2xl"
          />

          {/* Billing cycle toggle */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                billingCycle === "monthly" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                />
              )}
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative flex items-center gap-2 cursor-pointer ${
                billingCycle === "yearly" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {billingCycle === "yearly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                />
              )}
              Yearly
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col ${plan.isFeatured ? "md:-mt-3 md:-mb-3" : ""}`}
              >
                <div
                  className={`flex-1 p-8 sm:p-9 flex flex-col justify-between ${
                    plan.isFeatured ? "spartan-glass-red" : "spartan-glass-card"
                  }`}
                >
                  {plan.isFeatured && (
                    <div className="absolute top-0 right-8 -translate-y-1/2">
                      <span className="inline-flex items-center gap-1.5 bg-white text-[#0A0A0A] text-[10px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-xl">
                        <Sparkles size={11} className="text-primary fill-primary" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-xl uppercase tracking-tight text-white font-bold">
                        {plan.name}
                      </h3>
                      <span className="font-heading text-sm opacity-40 font-semibold">0{i + 1}</span>
                    </div>
                    <p className={`font-body text-xs sm:text-sm mt-2 leading-relaxed ${plan.isFeatured ? "text-white/90" : "text-white/60"}`}>
                      {plan.desc}
                    </p>

                    {/* Price */}
                    <div className="mt-7 flex items-baseline gap-1.5">
                      <span className="font-heading text-2xl font-bold text-primary">৳</span>
                      <span className="font-heading text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-white">
                        {price.toLocaleString()}
                      </span>
                      <span className={`font-body text-xs font-semibold uppercase tracking-wider ${plan.isFeatured ? "text-white/80" : "text-white/50"}`}>
                        /month
                      </span>
                    </div>
                    <p className="font-body text-[11px] font-medium text-white/60 mt-1 min-h-[16px]">
                      {billingCycle === "yearly" && `Billed annually (৳${(price * 12).toLocaleString()}/year)`}
                    </p>

                    {/* Divider */}
                    <div className={`h-px w-full my-7 ${plan.isFeatured ? "bg-white/20" : "bg-white/10"}`} />

                    {/* Features */}
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check
                            size={15}
                            className={`flex-shrink-0 mt-0.5 ${
                              plan.isFeatured ? "text-white" : "text-primary"
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

                  {/* Button */}
                  <button
                    onClick={() => handleScroll("#contact")}
                    className={`w-full py-4 rounded-md font-body text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                      plan.isFeatured
                        ? "bg-white text-[#0A0A0A] hover:bg-white/90 shadow-xl"
                        : "bg-white/[0.05] border border-white/20 text-white hover:border-primary hover:bg-primary"
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
