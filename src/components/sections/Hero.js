"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, Flame, Trophy } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const headingRef = useRef(null);
  const heroRef = useRef(null);
  const modelRef = useRef(null);
  const ghostRef = useRef(null);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Line-by-line text splitting
      let split;
      if (headingRef.current) {
        split = new SplitType(headingRef.current, { types: "lines" });
        // Wrap each line in a overflow-hidden wrapper container
        split.lines.forEach((line) => {
          const wrap = document.createElement("div");
          wrap.style.overflow = "hidden";
          line.parentNode.insertBefore(wrap, line);
          wrap.appendChild(line);
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 2. Ghost text fade in
      if (ghostRef.current) {
        tl.fromTo(
          ghostRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.4 }
        );
      }

      // 3. Model image reveal
      if (modelRef.current) {
        tl.fromTo(
          modelRef.current,
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2 },
          "-=1.0"
        );
      }

      // 4. Line by line heading reveal
      if (split && split.lines.length > 0) {
        tl.fromTo(
          split.lines,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
          "-=0.9"
        );
      }

      // 5. Subtitle paragraph reveal
      tl.fromTo(
        ".hero-desc",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.6"
      );

      // 6. CTA Buttons reveal
      tl.fromTo(
        ".hero-ctas > *",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
        "-=0.5"
      );

      // 7. Glass cards reveal
      tl.fromTo(
        ".hero-glass-card",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        "-=0.7"
      );

      // 8. Sub-label tag
      tl.fromTo(
        ".hero-tag",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.8"
      );

      // 9. Statistics counter animation
      const statItems = document.querySelectorAll(".hero-stat-number");
      statItems.forEach((item) => {
        const targetVal = parseInt(item.getAttribute("data-target"), 10);
        const suffix = item.getAttribute("data-suffix") || "";
        tl.fromTo(
          item,
          { textContent: "0" },
          {
            textContent: targetVal,
            duration: 1.5,
            snap: { textContent: 1 },
            ease: "power2.out",
            onUpdate: function () {
              const currentVal = Math.ceil(parseFloat(item.textContent));
              item.textContent = currentVal.toLocaleString() + suffix;
            },
          },
          "-=1.2"
        );
      });

      // 10. Floating glass cards gentle hover animation
      gsap.to(".hero-glass-card", {
        y: "-=8",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      // Cleanup
      return () => {
        if (split) split.revert();
      };
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Dark Background ─── */}
      <div className="absolute inset-0 bg-[#0A0A0A] z-0" />

      {/* ─── Red Blurry Glow - Top ─── */}
      <div className="hero-glow-top" />

      {/* ─── Red Blurry Glow - Bottom ─── */}
      <div className="hero-glow-bottom" />

      {/* ─── Subtle noise texture overlay ─── */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ─── Ghost Text Behind Model ─── */}
      <div
        ref={ghostRef}
        className="hero-ghost-text"
        aria-hidden="true"
      >
        <span className="hero-ghost-line">SPARTAN</span>
        <span className="hero-ghost-line">FITNESS</span>
      </div>

      {/* ─── Center Model Image ─── */}
      <div ref={modelRef} className="hero-model-container">
        <div className="hero-model-image">
          <Image
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1200"
            alt="Fitness model at Spartan Fitness"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 80vw, 40vw"
            priority
          />
        </div>
        {/* Gradient fade at the bottom of model */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-[1]" />
      </div>

      {/* ─── Content Layer ─── */}
      <div className="relative z-[15] w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen pt-28 pb-16">

          {/* ═══ Left Column - Text Content ═══ */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left relative z-20">
            {/* Tag */}
            <div className="hero-tag inline-flex items-center gap-2 mb-6 opacity-0">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-body text-[10px] font-bold tracking-[0.3em] uppercase">
                Premium Fitness Center
              </span>
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] uppercase tracking-tight text-white leading-[0.95]"
            >
              Forge Your{" "}
              <span className="text-primary">Best Self</span>
            </h1>

            {/* Description */}
            <p className="hero-desc font-body text-white/50 text-sm md:text-base mt-6 max-w-md leading-relaxed opacity-0">
              Personal training designed around your schedule, your goals,
              your results. Transform your body and mind with Spartan Fitness.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={() => handleScroll("#contact")}
                className="hero-btn-primary group opacity-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Session
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
                {/* Shine sweep */}
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              </button>
              <button
                onClick={() => handleScroll("#programs")}
                className="hero-btn-outline group opacity-0"
              >
                <Play size={14} className="fill-white" />
                <span>View Programs</span>
              </button>
            </div>
          </div>

          {/* ═══ Center spacer for model ═══ */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* ═══ Right Column - Glassmorphic Cards ═══ */}
          <div className="lg:col-span-4 flex flex-col gap-5 items-end relative z-20">
            {/* Card 1 - Client Satisfaction */}
            <div className="hero-glass-card opacity-0">
              <div className="flex items-center gap-4">
                <div className="hero-glass-icon">
                  <Trophy size={20} className="text-primary" />
                </div>
                <div>
                  <p
                    className="hero-stat-number font-heading text-3xl text-white"
                    data-target="100"
                    data-suffix="%"
                  >
                    0%
                  </p>
                  <p className="font-body text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    Client Satisfaction
                  </p>
                </div>
              </div>
              <p className="font-body text-white/30 text-[11px] mt-3 leading-relaxed">
                Every client matters. We ensure personalized attention to help you reach your goals.
              </p>
            </div>

            {/* Card 2 - Happy Members */}
            <div className="hero-glass-card opacity-0">
              <div className="flex items-center gap-4">
                <div className="hero-glass-icon">
                  <Flame size={20} className="text-primary" />
                </div>
                <div>
                  <p
                    className="hero-stat-number font-heading text-3xl text-white"
                    data-target="500"
                    data-suffix="+"
                  >
                    0+
                  </p>
                  <p className="font-body text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    Happy Members
                  </p>
                </div>
              </div>
              <p className="font-body text-white/30 text-[11px] mt-3 leading-relaxed">
                Join a community of fitness enthusiasts who have transformed their lives with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom gradient fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-[14]" />
    </section>
  );
}
