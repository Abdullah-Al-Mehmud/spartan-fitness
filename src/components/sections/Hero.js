"use client";

import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const modelInnerRef = useRef(null);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // 1. Statistics counter animation (rolls up as cards land)
      const statItems = document.querySelectorAll(".hero-stat-number");
      statItems.forEach((item) => {
        const targetVal = parseInt(item.getAttribute("data-target"), 10);
        const suffix = item.getAttribute("data-suffix") || "";

        // Respect reduced motion: show final numbers immediately
        if (reduceMotion) {
          item.textContent = targetVal.toLocaleString() + suffix;
          return;
        }

        const counter = { val: 0 };
        gsap.to(counter, {
          val: targetVal,
          duration: 1.4,
          delay: 0.4,
          ease: "power2.out",
          onUpdate: function () {
            item.textContent = Math.ceil(counter.val).toLocaleString() + suffix;
          },
        });
      });

      if (reduceMotion) return;

      // 2. Ambient idle floating on glass cards
      gsap.to(".hero-glass-card", {
        y: -7,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.6,
        delay: 1.3,
      });

      // 3. Subtle breathing idle on athlete model
      if (modelInnerRef.current) {
        gsap.to(modelInnerRef.current, {
          y: -6,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.4,
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden">
      {/* ─── Dark Background ─── */}
      <div className="absolute inset-0 bg-[#0A0A0A] z-0" />

      {/* ─── Red Blurry Glow - Top ─── */}
      <div className="hero-glow-top" />

      {/* ─── Red Blurry Glow - Bottom ─── */}
      <div className="hero-glow-bottom" />

      {/* ─── Subtle noise texture overlay ─── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ─── Ghost Text Behind Model (Desktop Only) ─── */}
      <div className="hero-ghost-text hidden lg:flex" aria-hidden="true">
        <span className="hero-ghost-line">SPARTAN</span>
        <span className="hero-ghost-line">FITNESS</span>
      </div>

      {/* ─── Model stage ───
          Mobile/tablet: a top-anchored stage brought down below navbar.
          lg+: `contents` removes the wrapper box entirely, so the desktop
          layout is exactly what it was before. */}
      <div className="hero-model-stage absolute inset-x-0 top-20 sm:top-24 lg:top-0 z-[2] h-[55svh] sm:h-[58svh] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_70%,transparent_100%)] lg:contents">
        <div className="hero-model-container">
          <div ref={modelInnerRef} className="hero-model-image">
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
      </div>

      {/* ─── Mobile-only ghost text (bold vanished text like desktop) ─── */}
      <div
        aria-hidden="true"
        className="hero-mobile-ghost-text pointer-events-none select-none absolute inset-x-0 z-[1] flex flex-col items-center uppercase leading-[0.8] tracking-tight lg:hidden">
        <span className="hero-mobile-ghost-line">SPARTAN</span>
        <span className="hero-mobile-ghost-line hero-mobile-ghost-line-2">
          FITNESS
        </span>
      </div>

      {/* ─── Content Layer ─── */}
      <div className="relative z-[15] w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[100svh] lg:min-h-screen pt-[calc(60svh+2.5rem)] sm:pt-[calc(62svh+2rem)] lg:pt-28 gap-6 lg:gap-8 pb-14 lg:pb-16">
          {/* ═══ Left Column - Text Content ═══ */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left relative z-20">
            {/* Tag */}
            <div className="hero-tag inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-body text-[10px] font-bold tracking-[0.3em] uppercase">
                Premium Fitness Center
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] uppercase tracking-tight text-white leading-[0.95]">
              <span className="block overflow-hidden">
                <span className="hero-heading-line block">Forge Your</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-heading-line hero-heading-line-2 block text-primary">
                  Best Self
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc font-body text-white/70 lg:text-white/50 text-sm md:text-base mt-4 sm:mt-6 max-w-md leading-relaxed">
              Personal training designed around your schedule, your goals, your
              results. Transform your body and mind with Spartan Fitness.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-md">
              <button
                onClick={() => handleScroll("#contact")}
                className="hero-btn-primary group w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book a Free Session
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                {/* Shine sweep */}
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              </button>
              <button
                onClick={() => handleScroll("#programs")}
                className="hero-btn-outline group justify-center w-full sm:w-auto">
                <Play size={14} className="fill-white" />
                <span>View Programs</span>
              </button>
            </div>
          </div>

          {/* ═══ Right Column - Glassmorphic Cards ═══ */}
          <div className="hero-cards-col lg:col-span-6 xl:col-span-5 order-first lg:order-none flex flex-row gap-3 sm:gap-5 justify-center lg:justify-end items-stretch lg:items-center relative z-20 lg:self-end lg:pb-4 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
            {/* Soft glow sitting BEHIND the glass */}
            <span className="hero-cards-slab-glow" aria-hidden="true" />

            {/* Card 1 - Client Satisfaction */}
            <div className="hero-glass-card hero-glass-card-red flex-1 min-w-0 lg:flex-initial lg:w-[230px] xl:w-[245px] lg:aspect-square flex flex-col justify-between">
              <div>
                <p
                  className="hero-stat-number font-body font-light text-[1.65rem] sm:text-3xl lg:text-[3.25rem] text-white tracking-tight leading-none"
                  data-target="100"
                  data-suffix="%">
                  0%
                </p>
              </div>
              <div className="pt-2 sm:pt-3 lg:pt-4">
                <h3 className="font-body font-medium text-white text-xs sm:text-sm lg:text-[15px] leading-snug">
                  Client Satisfaction
                </h3>
                <p className="font-body hidden sm:block text-white/80 text-xs leading-relaxed mt-1 font-light">
                  Guaranteed — every program is built around your goals.
                </p>
              </div>
            </div>

            {/* Card 2 - Clients Trained */}
            <div className="hero-glass-card hero-glass-card-frosted flex-1 min-w-0 lg:flex-initial lg:w-[230px] xl:w-[245px] lg:aspect-square flex flex-col justify-between">
              <div>
                <p
                  className="hero-stat-number font-body font-light text-[1.65rem] sm:text-3xl lg:text-[3.25rem] text-white tracking-tight leading-none"
                  data-target="500"
                  data-suffix="+">
                  0+
                </p>
              </div>
              <div className="pt-2 sm:pt-3 lg:pt-4">
                <h3 className="font-body font-medium text-white text-xs sm:text-sm lg:text-[15px] leading-snug">
                  Clients Trained
                </h3>
                <p className="font-body hidden sm:block text-white/80 text-xs leading-relaxed mt-1 font-light">
                  Real people, real results — from beginners to athletes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
