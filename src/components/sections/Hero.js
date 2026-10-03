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
    if (typeof window === "undefined") return;

    // 1. Line-by-line text splitting
    let split;
    if (headingRef.current) {
      split = new SplitType(headingRef.current, { types: "lines" });
      split.lines.forEach((line) => {
        const wrap = document.createElement("div");
        wrap.style.overflow = "hidden";
        line.parentNode.insertBefore(wrap, line);
        wrap.appendChild(line);
      });
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Atmospheric Red Glow Bloom (lights powering on in the dark)
      tl.fromTo(
        [".hero-glow-top", ".hero-glow-bottom"],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" }
      );

      // 2. Ghost text "Born there" — rising from depth, deblurring & manifesting into existence
      const ghostLines = document.querySelectorAll(".hero-ghost-line");
      if (ghostLines.length > 0) {
        tl.fromTo(
          ghostLines,
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
            letterSpacing: "-0.08em",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            letterSpacing: "-0.03em",
            duration: 1.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=1.5"
        );
      }

      // 3. Center model athlete emerges from darkness
      if (modelRef.current) {
        tl.fromTo(
          modelRef.current,
          { y: 80, opacity: 0, scale: 0.94, filter: "brightness(0.65)" },
          { y: 0, opacity: 1, scale: 1, filter: "brightness(1)", duration: 1.5, ease: "power3.out" },
          "-=1.3"
        );
      }

      // 4. Line by line heading reveal (crisp slide-up from overflow hidden)
      if (split && split.lines.length > 0) {
        tl.fromTo(
          split.lines,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.13, ease: "power4.out" },
          "-=1.1"
        );
      }

      // 5. Sub-label tag reveal
      tl.fromTo(
        ".hero-tag",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.9"
      );

      // 6. Subtitle paragraph reveal
      tl.fromTo(
        ".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.7"
      );

      // 7. CTA Buttons staggered spring reveal
      tl.fromTo(
        ".hero-ctas > *",
        { y: 25, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)" },
        "-=0.6"
      );

      // 8. Glass cards reveal
      tl.fromTo(
        ".hero-glass-card",
        { x: 50, opacity: 0, scale: 0.94 },
        { x: 0, opacity: 1, scale: 1, duration: 0.85, stagger: 0.2, ease: "power3.out" },
        "-=0.7"
      );

      // 9. Statistics counter animation
      const statItems = document.querySelectorAll(".hero-stat-number");
      statItems.forEach((item) => {
        const targetVal = parseInt(item.getAttribute("data-target"), 10);
        const suffix = item.getAttribute("data-suffix") || "";
        const counter = { val: 0 };
        tl.to(
          counter,
          {
            val: targetVal,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: function () {
              item.textContent = Math.ceil(counter.val).toLocaleString() + suffix;
            },
          },
          "-=1.2"
        );
      });

      // 10. Ambient idle floating animations
      // Floating glass cards
      gsap.to(".hero-glass-card", {
        y: "-=7",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.6,
        delay: 2.2,
      });

      // Subtle slow breathing idle on model
      if (modelRef.current) {
        gsap.to(modelRef.current, {
          y: "-=6",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2.5,
        });
      }
    }, heroRef);

    // Cleanup
    return () => {
      ctx.revert();
      if (split) split.revert();
    };
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
            src="/hero.png"
            alt="Fitness model at Spartan Fitness"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw"
            priority
          />
        </div>
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
    </section>
  );
}
