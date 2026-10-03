"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    id: "basic",
    name: "Basic Access",
    desc: "Essential gym access for your fitness routine.",
    priceMonthly: 2500,
    priceYearly: 2000,
    billingMonthly: "/month",
    billingYearly: "/month",
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
    billingMonthly: "/month",
    billingYearly: "/month",
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
    billingMonthly: "/month",
    billingYearly: "/month",
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
    <section id="pricing" className="bg-offwhite py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="MEMBERSHIP PLANS"
            title="Choose Your Level"
            subtext="Flexible tiers built to align with your personal goals. Train in Mirpur-7 or Mirpur-14 with our premium packages."
            className="md:max-w-2xl mb-0"
          />

          {/* Billing Switcher */}
          <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-dark/5 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all relative ${
                billingCycle === "monthly" ? "text-white" : "text-muted hover:text-dark"
              }`}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-dark rounded-full -z-10"
                />
              )}
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all relative flex items-center gap-1.5 ${
                billingCycle === "yearly" ? "text-white" : "text-muted hover:text-dark"
              }`}
            >
              {billingCycle === "yearly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-dark rounded-full -z-10"
                />
              )}
              Yearly
              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                billingCycle === "yearly" ? "bg-primary text-white" : "bg-primary/10 text-primary"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24">
          {plans.map((plan) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`relative bg-white rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                  plan.isFeatured
                    ? "border-primary shadow-2xl ring-2 ring-primary/40 md:-translate-y-2"
                    : "border-dark/5 shadow-xl shadow-dark/[0.02]"
                }`}
              >
                {/* Popular Tag */}
                {plan.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Card Title */}
                <h3 className="font-heading text-2xl uppercase tracking-wider text-dark">
                  {plan.name}
                </h3>
                <p className="font-body text-xs text-muted mt-2 min-h-[32px] leading-relaxed">
                  {plan.desc}
                </p>

                {/* Price block */}
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl text-dark">৳</span>
                  <span className="font-heading text-5xl md:text-6xl text-dark transition-all duration-300">
                    {price.toLocaleString()}
                  </span>
                  <span className="font-body text-xs font-semibold text-muted uppercase tracking-widest">
                    /month
                  </span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="font-body text-[10px] text-primary font-semibold mt-1">
                    Billed annually (৳{(price * 12).toLocaleString()}/year)
                  </p>
                )}

                {/* Features divider */}
                <hr className="border-dark/5 my-6" />

                {/* Features checklist */}
                <ul className="space-y-4 flex-1 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="font-body text-xs md:text-sm text-dark/85 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.isFeatured ? "primary" : "outline"}
                  onClick={() => handleScroll("#contact")}
                  className="w-full shadow-lg shadow-dark/[0.02]"
                >
                  Get Started with {plan.name}
                </Button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
