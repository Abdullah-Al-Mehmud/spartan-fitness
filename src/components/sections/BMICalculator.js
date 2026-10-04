"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, Calculator, RefreshCw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState("metric"); // metric vs imperial
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [advice, setAdvice] = useState("");

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const calculateBmi = (e) => {
    e.preventDefault();
    let weightVal = parseFloat(weight);
    let heightM = 0;

    if (!weightVal) return;

    if (unitSystem === "metric") {
      let heightVal = parseFloat(heightCm);
      if (!heightVal) return;
      heightM = heightVal / 100;
    } else {
      let ftVal = parseFloat(heightFt) || 0;
      let inVal = parseFloat(heightIn) || 0;
      let totalInches = ftVal * 12 + inVal;
      if (totalInches <= 0) return;
      // Convert inches to meters
      heightM = totalInches * 0.0254;
      // Convert lbs to kg
      weightVal = weightVal * 0.453592;
    }

    const calculatedBmi = weightVal / (heightM * heightM);
    const score = parseFloat(calculatedBmi.toFixed(1));
    setBmi(score);

    // Determine category & advice
    if (score < 18.5) {
      setStatus("Underweight");
      setAdvice("Your BMI indicates you are in the underweight category. Focus on nutrient-rich calorie surpluses and strength training to build lean muscle mass safely.");
    } else if (score >= 18.5 && score <= 24.9) {
      setStatus("Normal Weight");
      setAdvice("Congratulations! Your BMI is in the healthy range. Maintain your current diet composition, hydration, and progressive overload lifting schedule.");
    } else if (score >= 25 && score <= 29.9) {
      setStatus("Overweight");
      setAdvice("Your BMI indicates you are slightly overweight. We recommend a mild caloric deficit coupled with consistent cardio HIIT and strength training.");
    } else {
      setStatus("Obese");
      setAdvice("Your BMI is in the obese category. Prioritize cardiac conditioning, functional lifting patterns, and detailed nutritional consultations for sustainable fat reduction.");
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setBmi(null);
    setStatus("");
    setAdvice("");
  };

  const getGaugePercentage = () => {
    if (!bmi) return 0;
    // Map BMI range (15 to 35) to percentage (0% to 100%)
    const minBmi = 15;
    const maxBmi = 35;
    const percentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const getStatusColor = () => {
    switch (status) {
      case "Underweight":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
      case "Normal Weight":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Overweight":
        return "text-amber-500 bg-amber-500/10 border-amber-500/20";
      case "Obese":
        return "text-red-500 bg-red-500/10 border-red-500/20";
      default:
        return "text-muted";
    }
  };

  const tabBtn = (active) =>
    `flex-1 py-2.5 rounded-lg font-body text-[11px] font-bold uppercase tracking-[0.15em] transition-all cursor-pointer ${
      active ? "bg-dark text-white" : "text-dark/55 hover:text-dark"
    }`;

  return (
    <section id="bmi" className="sp-section sp-light overflow-hidden">
      <span className="sp-ghost" aria-hidden>BMI</span>
      <div className="sp-container">
        <SectionHeading
          eyebrow="BODY DIAGNOSTICS"
          title="Interactive BMI Calculator"
          subtext="Calculate your Body Mass Index (BMI) instantly to benchmark your weight status and identify baseline training goals."
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sp-card lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 bg-dark/[0.04] p-1 rounded-xl mb-10">
                <button type="button" onClick={() => { setUnitSystem("metric"); resetCalculator(); }} className={tabBtn(unitSystem === "metric")}>
                  Metric (kg/cm)
                </button>
                <button type="button" onClick={() => { setUnitSystem("imperial"); resetCalculator(); }} className={tabBtn(unitSystem === "imperial")}>
                  Imperial (lbs/in)
                </button>
              </div>

              <form onSubmit={calculateBmi} className="space-y-6">
                {unitSystem === "metric" ? (
                  <div>
                    <label className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-dark/60 mb-2 block">Height (cm)</label>
                    <input type="number" placeholder="e.g. 175" required value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className="w-full px-4 py-3.5 bg-white/70 border border-dark/10 rounded-xl font-body text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-transparent transition-all" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-dark/60 mb-2 block">Height (Feet)</label>
                    <input type="number" placeholder="e.g. 5" required value={heightFt} onChange={(e) => setHeightFt(e.target.value)} className="w-full px-4 py-3.5 bg-white/70 border border-dark/10 rounded-xl font-body text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-dark/60 mb-2 block">Height (Inches)</label>
                    <input type="number" placeholder="e.g. 9" required value={heightIn} onChange={(e) => setHeightIn(e.target.value)} className="w-full px-4 py-3.5 bg-white/70 border border-dark/10 rounded-xl font-body text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-transparent transition-all" />
                  </div>
                  </div>
                )}

                <div>
                  <label className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-dark/60 mb-2 block">
                    Weight ({unitSystem === "metric" ? "kg" : "lbs"})
                  </label>
                  <input
                    type="number"
                    placeholder={unitSystem === "metric" ? "e.g. 70" : "e.g. 155"}
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white/70 border border-dark/10 rounded-xl font-body text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button type="submit" className="sp-btn sp-btn-primary flex-1 justify-center gap-2">
                    Calculate BMI
                    <Calculator size={14} />
                  </button>
                  {bmi && (
                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="p-3.5 bg-white/70 hover:bg-dark hover:text-white rounded-xl border border-dark/10 text-dark transition-all cursor-pointer"
                      aria-label="Reset Calculator"
                    >
                      <RefreshCw size={16} />
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="sp-hairline mt-10" />
            <div className="pt-6 flex items-start gap-3">
              <Info size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="sp-muted font-body text-[12px] leading-relaxed">
                BMI is a universal guideline calculated using height and weight. Note that it does not directly isolate muscle mass percentages, meaning heavily muscular athletes may show higher indexes.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative overflow-hidden rounded-[1.75rem] bg-dark text-white p-6 sm:p-10 flex flex-col justify-between shadow-[0_20px_45px_-20px_rgba(208,59,59,0.2)] border border-white/5"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/25 blur-[90px]" aria-hidden />
            <div className="relative h-full">
            {bmi ? (
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
                    Your Diagnostics
                  </span>
                  <div className="flex flex-wrap items-baseline gap-4 mt-3">
                    <h3 className="font-heading text-7xl sm:text-8xl leading-none text-white">{bmi}</h3>
                    <span className={`font-body text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${getStatusColor()}`}>
                      {status}
                    </span>
                  </div>
                  <p className="font-body text-sm text-white/60 leading-relaxed mt-6">{advice}</p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <div className="flex flex-wrap justify-between gap-x-2 font-body text-[10px] text-white/40 uppercase font-semibold mb-3">
                    <span>15.0 (Min)</span>
                    <span>Healthy (18.5 - 24.9)</span>
                    <span>35.0 (Max)</span>
                  </div>
                  <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="w-[17.5%] h-full bg-yellow-500/60" />
                    <div className="w-[32.5%] h-full bg-emerald-500/60" />
                    <div className="w-[25%] h-full bg-amber-500/60" />
                    <div className="w-[25%] h-full bg-red-500/60" />
                    <motion.div
                      initial={{ left: 0 }}
                      animate={{ left: `${getGaugePercentage()}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute top-0 bottom-0 w-2.5 bg-white border border-dark rounded-full shadow-2xl -translate-x-1/2"
                    />
                  </div>
                </div>

                <button type="button" onClick={() => handleScroll("#contact")} className="sp-btn sp-btn-primary w-full justify-center">
                  Consult Custom Nutrition
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center h-full py-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light mb-6">
                  <Calculator size={24} />
                </div>
                <h3 className="font-heading text-2xl uppercase tracking-tight text-white">Awaiting Input</h3>
                <p className="font-body text-sm text-white/55 mt-3 max-w-xs leading-relaxed">
                  Enter your height and weight measurements to calculate your BMI and review custom recommendations.
                </p>

                <div className="mt-10 w-full font-body text-xs text-white/50">
                  <p className="font-bold text-white/70 uppercase tracking-[0.18em] text-[11px] mb-3">Healthy BMI References</p>
                  <div className="flex justify-between py-3 border-t border-white/10"><span>Underweight</span><span className="font-semibold text-yellow-500">Less than 18.5</span></div>
                  <div className="flex justify-between py-3 border-t border-white/10"><span>Healthy Range</span><span className="font-semibold text-emerald-500">18.5 - 24.9</span></div>
                  <div className="flex justify-between py-3 border-t border-white/10"><span>Overweight</span><span className="font-semibold text-amber-500">25.0 - 29.9</span></div>
                  <div className="flex justify-between py-3 border-t border-white/10"><span>Obese</span><span className="font-semibold text-red-500">30.0 or Higher</span></div>
                </div>
              </div>
            )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
