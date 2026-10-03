"use client";

import { motion } from "framer-motion";
import { Check, X, Info } from "lucide-react";

const comparisonFeatures = [
  { name: "Gym Access", basic: "5 days/week", pro: "All-Branch 24/7", elite: "All-Branch VIP 24/7" },
  { name: "Lockers & Showers", basic: "Standard", pro: "Premium + Towels", elite: "Private Locker + Laundry" },
  { name: "Personal Coaching", basic: "1 assessment/yr", pro: "4 sessions/mo", elite: "Unlimited Sessions" },
  { name: "Custom Nutrition Plans", basic: false, pro: "1 consultation/mo", elite: "Full Custom Blueprints" },
  { name: "Recovery Suites", basic: false, pro: false, elite: "Unlimited Access" },
  { name: "Guest Passes", basic: false, pro: "2 passes/mo", elite: "Unlimited Passes" },
  { name: "Smoothie Bar", basic: false, pro: "10% discount", elite: "Free Daily Smoothie" },
];

export default function PlanComparison() {
  return (
    <section id="plan-comparison" className="bg-offwhite pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-dark/5 p-6 md:p-10 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Info size={16} className="text-primary" />
            <h4 className="font-heading text-lg uppercase tracking-wider text-dark">
              Detailed Plan Comparison
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark/10">
                  <th className="py-4 font-body text-xs font-bold uppercase tracking-wider text-muted">Feature</th>
                  <th className="py-4 px-4 font-body text-xs font-bold uppercase tracking-wider text-dark">Basic</th>
                  <th className="py-4 px-4 font-body text-xs font-bold uppercase tracking-wider text-primary">Pro</th>
                  <th className="py-4 px-4 font-body text-xs font-bold uppercase tracking-wider text-dark">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark/5">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-offwhite/50 transition-colors">
                    <td className="py-4 font-body text-sm font-medium text-dark">{feat.name}</td>
                    <td className="py-4 px-4 font-body text-sm text-muted">
                      {typeof feat.basic === "boolean" ? (
                        feat.basic ? <Check size={16} className="text-primary" /> : <X size={16} className="text-muted/30" />
                      ) : (
                        feat.basic
                      )}
                    </td>
                    <td className="py-4 px-4 font-body text-sm font-semibold text-primary">
                      {typeof feat.pro === "boolean" ? (
                        feat.pro ? <Check size={16} className="text-primary" /> : <X size={16} className="text-muted/30" />
                      ) : (
                        feat.pro
                      )}
                    </td>
                    <td className="py-4 px-4 font-body text-sm text-dark font-medium">
                      {typeof feat.elite === "boolean" ? (
                        feat.elite ? <Check size={16} className="text-primary" /> : <X size={16} className="text-muted/30" />
                      ) : (
                        feat.elite
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
