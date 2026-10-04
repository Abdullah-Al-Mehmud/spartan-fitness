"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Fully Responsive Dark Luxury Section Heading
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className={cn(center ? "text-center flex flex-col items-center" : "flex flex-col items-start", className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-primary font-body text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-2.5 sm:mb-3">
          <span className="w-4 sm:w-5 h-[2px] bg-primary rounded-full inline-block" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white font-extrabold leading-[1.1] break-words">
        {title}
      </h2>
      {subtext && (
        <p
          className={cn(
            "text-white/60 font-body text-xs sm:text-sm md:text-base mt-3 sm:mt-4 max-w-2xl leading-relaxed",
            center && "mx-auto"
          )}
        >
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
