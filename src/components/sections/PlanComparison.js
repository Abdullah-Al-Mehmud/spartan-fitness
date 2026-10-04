"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonFeatures = [
  { name: "Gym Access", basic: "5 days/week", pro: "All-Branch 24/7", elite: "All-Branch VIP 24/7" },
  { name: "Lockers & Showers", basic: "Standard", pro: "Premium + Towels", elite: "Private Locker + Laundry" },
  { name: "Personal Coaching", basic: "1 assessment/yr", pro: "4 sessions/mo", elite: "Unlimited Sessions" },
  { name: "Custom Nutrition Plans", basic: false, pro: "1 consultation/mo", elite: "Full Custom Blueprints" },
  { name: "Recovery Suites", basic: false, pro: false, elite: "Unlimited Access" },
  { name: "Guest Passes", basic: false, pro: "2 passes/mo", elite: "Unlimited Passes" },
  { name: "Smoothie Bar", basic: false, pro: "10% discount", elite: "Free Daily Smoothie" },
];

function Cell({ value, highlight }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={16} className="text-primary mx-auto" />
    ) : (
      <X size={16} className="text-white/20 mx-auto" />
    );
  }
  return (
    <span className={`text-xs sm:text-sm font-body ${highlight ? "text-white font-semibold" : "text-white/70"}`}>
      {value}
    </span>
  );
}

export default function PlanComparison() {
  return (
    <section id="plan-comparison" className="relative pb-28 lg:pb-36 bg-[#0D0D0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-12" />

          {/* Heading */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-4 h-[2px] bg-primary rounded-full inline-block" />
              COMPARE
            </span>
            <h4 className="font-heading text-xl sm:text-2xl uppercase tracking-tight text-white font-bold">
              Detailed Plan Comparison
            </h4>
          </div>

          {/* Glass Card Container for Table */}
          <div className="spartan-glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-5 px-6 font-body text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      Feature
                    </th>
                    <th className="py-5 px-6 font-body text-xs font-bold uppercase tracking-[0.2em] text-white text-center">
                      Basic Access
                    </th>
                    <th className="py-5 px-6 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary text-center bg-primary/[0.08]">
                      Pro Premium
                    </th>
                    <th className="py-5 px-6 font-body text-xs font-bold uppercase tracking-[0.2em] text-white text-center">
                      Spartan Elite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-6 font-body text-sm font-medium text-white/90">
                        {feat.name}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Cell value={feat.basic} />
                      </td>
                      <td className="py-4 px-6 text-center bg-primary/[0.08]">
                        <Cell value={feat.pro} highlight />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Cell value={feat.elite} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
