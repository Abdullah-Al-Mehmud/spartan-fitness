"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Premium dark luxury Section Heading
 * Aligned with the Spartan Hero section design language
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtext,
  className,
  align = "left",
}) {
  const center = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className={cn(center ? "text-center flex flex-col items-center" : "flex flex-col items-start", className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          <span className="w-5 h-[2px] bg-primary rounded-full inline-block" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white font-extrabold leading-[1.08]">
        {title}
      </h2>
      {subtext && (
        <p
          className={cn(
            "text-white/60 font-body text-sm md:text-base mt-4 max-w-2xl leading-relaxed",
            center && "mx-auto"
          )}
        >
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
