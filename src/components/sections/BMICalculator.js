"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, Calculator, RefreshCw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState("metric"); // metric vs imperial
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [advice, setAdvice] = useState("");

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

  return (
    <section id="bmi" className="bg-offwhite py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="BODY DIAGNOSTICS"
          title="Interactive BMI Calculator"
          subtext="Calculate your Body Mass Index (BMI) instantly to benchmark your weight status and identify baseline training goals."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white rounded-3xl p-8 border border-dark/5 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Selector */}
              <div className="flex items-center gap-3 bg-offwhite p-1 rounded-xl border border-dark/5 mb-8">
                <button
                  type="button"
                  onClick={() => {
                    setUnitSystem("metric");
                    resetCalculator();
                  }}
                  className={`flex-1 py-2 rounded-lg font-body text-xs font-bold uppercase tracking-wider transition-all ${
                    unitSystem === "metric" ? "bg-dark text-white shadow-sm" : "text-muted hover:text-dark"
                  }`}
                >
                  Metric (kg/cm)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUnitSystem("imperial");
                    resetCalculator();
                  }}
                  className={`flex-1 py-2 rounded-lg font-body text-xs font-bold uppercase tracking-wider transition-all ${
                    unitSystem === "imperial" ? "bg-dark text-white shadow-sm" : "text-muted hover:text-dark"
                  }`}
                >
                  Imperial (lbs/in)
                </button>
              </div>

              <form onSubmit={calculateBmi} className="space-y-6">
                {unitSystem === "metric" ? (
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 175"
                      required
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full px-4 py-3 bg-offwhite border border-dark/5 rounded-xl font-body text-sm text-dark placeholder:text-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                        Height (Feet)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 5"
                        required
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full px-4 py-3 bg-offwhite border border-dark/5 rounded-xl font-body text-sm text-dark placeholder:text-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                        Height (Inches)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 9"
                        required
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="w-full px-4 py-3 bg-offwhite border border-dark/5 rounded-xl font-body text-sm text-dark placeholder:text-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                    Weight ({unitSystem === "metric" ? "kg" : "lbs"})
                  </label>
                  <input
                    type="number"
                    placeholder={unitSystem === "metric" ? "e.g. 70" : "e.g. 155"}
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 bg-offwhite border border-dark/5 rounded-xl font-body text-sm text-dark placeholder:text-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button type="submit" className="flex-1 justify-center gap-2">
                    Calculate BMI
                    <Calculator size={14} />
                  </Button>
                  
                  {bmi && (
                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="p-3.5 bg-offwhite hover:bg-dark hover:text-white rounded-xl border border-dark/5 text-dark transition-all duration-350 cursor-pointer"
                      aria-label="Reset Calculator"
                    >
                      <RefreshCw size={16} />
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Health Info details */}
            <div className="mt-8 p-4 bg-offwhite rounded-2xl flex items-start gap-3 border border-dark/5">
              <Info size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-[11px] text-muted leading-relaxed">
                BMI is a universal guideline calculated using height and weight. Note that it does not directly isolate muscle mass percentages, meaning heavily muscular athletes may show higher indexes.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-dark text-white rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col justify-between"
          >
            {bmi ? (
              <div className="flex flex-col justify-between h-full">
                
                {/* Result Header */}
                <div>
                  <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    Your Diagnostics
                  </span>
                  
                  <div className="flex items-baseline gap-4 mt-2">
                    <h3 className="font-heading text-6xl text-white">{bmi}</h3>
                    <span className={`font-body text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${getStatusColor()}`}>
                      {status}
                    </span>
                  </div>

                  <p className="font-body text-xs text-white/60 leading-relaxed mt-6">
                    {advice}
                  </p>
                </div>

                {/* Meter gauge */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex justify-between font-body text-[10px] text-white/40 uppercase font-semibold mb-2">
                    <span>15.0 (Min)</span>
                    <span>Healthy Range (18.5 - 24.9)</span>
                    <span>35.0 (Max)</span>
                  </div>
                  
                  {/* Outer track */}
                  <div className="relative w-full h-3.5 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="w-[17.5%] h-full bg-yellow-500/60" /> {/* Underweight */}
                    <div className="w-[32.5%] h-full bg-emerald-500/60" /> {/* Normal */}
                    <div className="w-[25%] h-full bg-amber-500/60" /> {/* Overweight */}
                    <div className="w-[25%] h-full bg-red-500/60" /> {/* Obese */}
                    
                    {/* Floating indicator pin */}
                    <motion.div
                      initial={{ left: 0 }}
                      animate={{ left: `${getGaugePercentage()}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute top-0 bottom-0 w-2.5 bg-white border border-dark rounded-full shadow-2xl -translate-x-1/2"
                    />
                  </div>
                </div>

                {/* Action button redirecting to scheduling */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <Button
                    variant="primary"
                    onClick={() => handleScroll("#contact")}
                    className="w-full shadow-xl shadow-primary/10"
                  >
                    Consult Custom Nutrition
                  </Button>
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary-light mb-6">
                  <Calculator size={28} />
                </div>
                <h3 className="font-heading text-2xl uppercase tracking-wider text-white">
                  Awaiting Input
                </h3>
                <p className="font-body text-xs text-white/55 mt-2 max-w-xs leading-relaxed">
                  Enter your height and weight measurements to calculate your BMI and review custom recommendations.
                </p>

                {/* Show general healthy ranges as placeholder content */}
                <div className="mt-8 w-full max-w-sm border border-white/5 bg-white/[0.02] p-5 rounded-2xl text-left space-y-2 text-[11px] font-body text-white/50">
                  <p className="font-bold text-white/70 uppercase tracking-wider mb-3">Healthy BMI References:</p>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Underweight:</span> <span className="font-semibold text-yellow-500">Less than 18.5</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Healthy Range:</span> <span className="font-semibold text-emerald-500">18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Overweight:</span> <span className="font-semibold text-amber-500">25.0 - 29.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Obese:</span> <span className="font-semibold text-red-500">30.0 or Higher</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
