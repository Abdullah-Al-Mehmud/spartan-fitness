"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const words = ["DISCIPLINE", "CONSISTENCY", "STRENGTH", "SPARTAN"];

export default function GymIntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent body scrolling while intro preloader is running
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          // Slide preloader out of view
          gsap.to(".intro-preloader", {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
            onComplete: () => {
              setVisible(false);
              document.body.style.overflow = "";
            },
          });
        },
      });

      // 1. Dumbbell icon entry animation
      tl.fromTo(
        ".intro-instrument-icon",
        { opacity: 0, scale: 0.5, rotation: -90 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)" }
      );

      // 2. Animate each word in sequence
      words.forEach((_, idx) => {
        // Fade in, scale, and remove blur
        tl.fromTo(
          `.intro-word-${idx}`,
          { opacity: 0, scale: 0.9, y: 30, filter: "blur(6px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.45, ease: "power3.out" },
          "-=0.1"
        );

        // Word reading delay
        tl.to({}, { duration: 0.35 });

        // Fade out, scale up, and re-blur
        if (idx < words.length - 1) {
          tl.to(`.intro-word-${idx}`, {
            opacity: 0,
            scale: 1.05,
            y: -30,
            filter: "blur(6px)",
            duration: 0.35,
            ease: "power2.in",
          });
        } else {
          // Dramatic fade out for the final brand word (SPARTAN)
          tl.to(`.intro-word-${idx}`, {
            scale: 1.15,
            opacity: 0,
            filter: "blur(12px)",
            duration: 0.5,
            ease: "power2.in",
          });
        }
      });

      // 3. Dumbbell icon fade out near the end
      tl.to(
        ".intro-instrument-icon",
        {
          scale: 1.2,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.4"
      );

      // Dumbbell float loop
      gsap.to(".intro-instrument-icon", {
        y: "-=8",
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Sync loading progress bar to the complete timeline duration
      tl.fromTo(
        ".intro-progress-bar",
        { width: "0%" },
        { width: "100%", duration: tl.totalDuration(), ease: "none" },
        0
      );
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-preloader fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center overflow-hidden select-none pointer-events-none">
      {/* Red soft glow in center */}
      <div className="intro-preloader-glow absolute w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* Barbell/Dumbbell SVG illustration */}
      <svg
        viewBox="0 0 64 64"
        className="intro-instrument-icon w-14 h-14 text-primary mb-6 opacity-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left plates */}
        <rect x="6" y="16" width="6" height="32" rx="2" fill="currentColor" fillOpacity="0.05" />
        <rect x="12" y="20" width="4" height="24" rx="1" fill="currentColor" fillOpacity="0.1" />
        
        {/* Bar */}
        <rect x="16" y="29" width="32" height="6" rx="1" fill="currentColor" />
        
        {/* Right plates */}
        <rect x="48" y="20" width="4" height="24" rx="1" fill="currentColor" fillOpacity="0.1" />
        <rect x="52" y="16" width="6" height="32" rx="2" fill="currentColor" fillOpacity="0.05" />
        
        {/* Collars */}
        <line x1="16" y1="26" x2="16" y2="38" />
        <line x1="48" y1="26" x2="48" y2="38" />
      </svg>

      {/* Flashing Words Stack */}
      <div className="relative flex items-center justify-center h-28 w-full px-6">
        {words.map((word, idx) => (
          <h2
            key={idx}
            className={`intro-word-${idx} absolute font-heading text-5xl sm:text-7xl md:text-8xl tracking-widest uppercase leading-none opacity-0 filter blur-[8px] text-center ${
              idx === words.length - 1
                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light"
                : "text-white"
            }`}
          >
            {word}
          </h2>
        ))}
      </div>

      {/* Loading Progress Line */}
      <div className="absolute bottom-12 left-12 right-12 h-[2px] bg-white/5 overflow-hidden rounded-full max-w-md mx-auto">
        <div className="h-full bg-primary w-0 intro-progress-bar" />
      </div>
    </div>
  );
}
