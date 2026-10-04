"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowLeftRight } from "lucide-react";

const comparisonFeatures = [
  {
    name: "Gym Access Hours",
    earlyAccess: "7:00 AM to 3:00 PM",
    gold: "Full Schedule (7:00 AM - 11:30 PM)",
  },
  {
    name: "Diet & Exercise Plan",
    earlyAccess: "100% Free",
    gold: "100% Free",
  },
  {
    name: "Trainer Guidance",
    earlyAccess: "Full Time Availability",
    gold: "Full Time Availability",
  },
  {
    name: "Steam / Sauna Bath",
    earlyAccess: "Included",
    gold: "Included",
  },
  {
    name: "Shower & Locker Facility",
    earlyAccess: "Free Access",
    gold: "Free Access",
  },
  {
    name: "Female Exclusive Hours",
    earlyAccess: "Not Applicable",
    gold: "Access during 3:00 PM - 6:00 PM",
  },
];

function Cell({ value, highlight, isNotApplicable }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={16} className="text-primary mx-auto" />
    ) : (
      <X size={16} className="text-white/20 mx-auto" />
    );
  }
  return (
    <span
      className={`text-xs sm:text-sm font-body ${
        isNotApplicable
          ? "text-white/40 italic"
          : highlight
          ? "text-white font-semibold"
          : "text-white/80"
      }`}
    >
      {value}
    </span>
  );
}

export default function PlanComparison() {
  return (
    <section id="plan-comparison" className="relative pb-16 sm:pb-24 lg:pb-36 bg-[#0D0D0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-10 sm:mb-12" />

          {/* Heading with Mobile Scroll Hint */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-4 h-[2px] bg-primary rounded-full inline-block" />
                MEMBERSHIP TIERS
              </span>
              <h4 className="font-heading text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-white font-bold">
                COMPARE MEMBERSHIPS
              </h4>
            </div>

            <div className="sm:hidden flex items-center gap-1.5 text-white/50 font-body text-[11px] self-start">
              <ArrowLeftRight size={13} className="text-primary" />
              <span>Scroll horizontally to compare tiers</span>
            </div>
          </div>

          {/* Glass Card Container for Table */}
          <div className="spartan-glass-card overflow-hidden">
            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full min-w-[540px] sm:min-w-[620px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-4 sm:py-5 px-4 sm:px-6 font-body text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50 w-2/5">
                      FEATURE
                    </th>
                    <th className="py-4 sm:py-5 px-3 sm:px-6 font-body text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white text-center w-[30%]">
                      EARLY ACCESS <span className="block text-[10px] font-normal text-white/60 normal-case tracking-normal mt-0.5">(7 AM - 3 PM)</span>
                    </th>
                    <th className="py-4 sm:py-5 px-3 sm:px-6 font-body text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary-light text-center bg-primary/[0.08] border-x border-primary/20 w-[30%]">
                      GOLD MEMBERSHIP <span className="block text-[10px] font-normal text-white/80 normal-case tracking-normal mt-0.5">(Anytime)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-body text-xs sm:text-sm font-semibold text-white/95">
                        {feat.name}
                      </td>
                      <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-center">
                        <Cell
                          value={feat.earlyAccess}
                          isNotApplicable={feat.earlyAccess === "Not Applicable"}
                        />
                      </td>
                      <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-center bg-primary/[0.08] border-x border-primary/20">
                        <Cell value={feat.gold} highlight />
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
