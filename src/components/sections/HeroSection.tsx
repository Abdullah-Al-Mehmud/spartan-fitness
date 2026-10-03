"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, Play, Flame, Trophy, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import type { ScrollState } from "./HeroParticles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// WebGL layer is client-only → avoids SSR/hydration issues
const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false });

type Stat = { icon: LucideIcon; target: number; suffix: string; label: string; desc: string };

const STATS: Stat[] = [
  {
    icon: Trophy,
    target: 100,
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Every client matters. We ensure personalized attention to help you reach your goals.",
  },
  {
    icon: Flame,
    target: 500,
    suffix: "+",
    label: "Happy Members",
    desc: "Join a community of fitness enthusiasts who have transformed their lives with us.",
  },
];

/** Per-breakpoint tuning for the scroll journey */
type JourneyConfig = {
  end: string; // scroll distance the section stays pinned
  ghostScale: number; // watermark scale toward the camera
  drift: number; // lateral peel distance for UI (px)
  athleteFrom: number;
  athleteTo: number;
};

const DESKTOP: JourneyConfig = { end: "+=200%", ghostScale: 4.5, drift: 120, athleteFrom: 1.05, athleteTo: 1.1 };
const MOBILE: JourneyConfig = { end: "+=140%", ghostScale: 3, drift: 60, athleteFrom: 1, athleteTo: 1.05 };

/* ─────────────────────────────────────────────────────────────
   GSAP timeline configuration
   Scroll animations target the OUTER [data-layer] wrappers;
   the load-in intro targets the INNER [data-intro] elements,
   so the two never fight over the same transform.
   ───────────────────────────────────────────────────────────── */
function buildScrollJourney(
  section: HTMLElement,
  scrollState: { current: ScrollState },
  cfg: JourneyConfig
) {
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: cfg.end,
      pin: true, // visual stage stays fixed while the journey plays
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        scrollState.current.progress = self.progress;
        scrollState.current.velocity = self.getVelocity();
      },
    },
  });

  // Layer 0 — watermark rushes toward the camera and dissolves
  tl.fromTo(
    "[data-layer='watermark']",
    { scale: 1, opacity: 1 },
    { scale: cfg.ghostScale, opacity: 0, ease: "power2.in", duration: 0.6 },
    0
  );
  // Layer 0 — vignette dims slightly as we travel deeper
  tl.to("[data-layer='glow']", { opacity: 0.45, duration: 1 }, 0);

  // Layer 2 — athlete: parallax push (0–50%), then drops out of frame (50–100%)
  tl.fromTo("[data-layer='athlete']", { scale: cfg.athleteFrom }, { scale: cfg.athleteTo, duration: 0.5 }, 0);
  tl.to("[data-layer='athlete']", { yPercent: 100, ease: "power2.in", duration: 0.5 }, 0.5);

  // Layer 3 — UI peels away laterally
  tl.to(
    "[data-layer='left']",
    { x: -cfg.drift, opacity: 0, filter: "blur(8px)", duration: 0.35 },
    0.05
  );
  tl.to(
    "[data-layer='card']",
    { x: cfg.drift, opacity: 0, rotateY: 25, duration: 0.35, stagger: 0.06 },
    0.05
  );

  return tl;
}

function buildIntro() {
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .from("[data-intro='glow']", { opacity: 0, scale: 0.85, duration: 1.6, ease: "power2.out" }, 0)
    .from(
      "[data-intro='ghost']",
      { yPercent: 35, opacity: 0, filter: "blur(12px)", duration: 1.5, stagger: 0.18 },
      0.1
    )
    .from("[data-intro='athlete']", { y: 80, opacity: 0, filter: "brightness(0.6)", duration: 1.4 }, 0.3)
    .from("[data-intro='line']", { yPercent: 110, duration: 1, stagger: 0.12, ease: "power4.out" }, 0.55)
    .from("[data-intro='fade']", { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.85)
    .from("[data-intro='card']", { x: 40, opacity: 0, scale: 0.95, duration: 0.85, stagger: 0.18 }, 0.95);

  // Stat counters 0 → target
  gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
    const target = Number(el.dataset.counter);
    const suffix = el.dataset.suffix ?? "";
    const counter = { val: 0 };
    intro.to(
      counter,
      {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${Math.round(counter.val).toLocaleString()}${suffix}`;
        },
      },
      1.1
    );
  });

  // Gentle idle float on the glass cards once they've landed
  gsap.to("[data-float]", {
    y: -7,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.6,
    delay: 2.4,
  });

  return intro;
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollState = useRef<ScrollState>({ progress: 0, velocity: 0 });
  const lenis = useLenis();

  const scrollTo = (href: string) => {
    if (lenis) lenis.scrollTo(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduceMotion } = ctx.conditions as Record<string, boolean>;
          if (reduceMotion) return; // static hero, no pin, no scrub

          buildScrollJourney(section, scrollState, isDesktop ? DESKTOP : MOBILE);
          buildIntro();
        }
      );
      // matchMedia reverts automatically on breakpoint change; useGSAP reverts on unmount
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* ═══ Layer 0 — Background depth + coded watermark (z-0) ═══ */}
      <div className="absolute inset-0 z-0">
        <div data-layer="glow" className="absolute inset-0">
          <div
            data-intro="glow"
            className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(220,38,38,0.55),transparent_70%),radial-gradient(ellipse_75%_55%_at_50%_100%,rgba(220,38,38,0.5),transparent_70%),radial-gradient(ellipse_at_center,#7f1d1d_0%,#2a0505_55%,#000_85%)]"
          />
        </div>

        <div
          data-layer="watermark"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center will-change-transform"
        >
          {["Spartan", "Fitness"].map((word) => (
            <span
              key={word}
              data-intro="ghost"
              className="block whitespace-nowrap bg-linear-to-b from-white/10 via-white/[0.03] to-transparent bg-clip-text font-black uppercase leading-[0.8] tracking-tighter text-transparent [font-family:system-ui,sans-serif] text-[23vw] lg:text-[19vw]"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ Layer 1 — 3D embers / chalk (z-10) ═══ */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <HeroParticles scrollRef={scrollState} />
      </div>

      {/* ═══ Layer 2 — Athlete (z-20) ═══ */}
      <div
        data-layer="athlete"
        className="absolute inset-x-0 bottom-0 z-20 mx-auto h-[78svh] w-[min(92vw,560px)] origin-bottom will-change-transform max-lg:opacity-60 lg:h-[92svh] lg:w-[clamp(420px,45vw,860px)]"
      >
        <div data-intro="athlete" className="relative h-full w-full">
          <Image
            src="/hero.png"
            alt="Spartan Fitness athlete"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 45vw"
            className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
          />
        </div>
      </div>

      {/* ═══ Layer 3 — Foreground UI (z-30) ═══ */}
      <div className="relative z-30 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-12 lg:pb-0 lg:pt-20">
        {/* Left — headline + CTAs */}
        <div data-layer="left" className="text-center will-change-transform lg:col-span-5 lg:text-left">
          <div data-intro="fade" className="mb-5 inline-flex items-center gap-2 lg:mb-6">
            <span className="h-[2px] w-8 bg-primary" />
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Premium Fitness Center
            </span>
          </div>

          <h1 className="font-heading text-[3.25rem] uppercase leading-[0.95] tracking-tight text-white sm:text-7xl xl:text-[5.5rem]">
            <span className="block overflow-hidden">
              <span data-intro="line" className="block">Forge Your</span>
            </span>
            <span className="block overflow-hidden">
              <span data-intro="line" className="block text-primary">Best Self</span>
            </span>
          </h1>

          <p
            data-intro="fade"
            className="mx-auto mt-5 max-w-md font-body text-sm leading-relaxed text-white/55 sm:text-base lg:mx-0 lg:mt-6"
          >
            Personal training designed around your schedule, your goals, your results.
            Transform your body and mind with Spartan Fitness.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-8 lg:justify-start">
            <button data-intro="fade" onClick={() => scrollTo("#contact")} className="hero-btn-primary group">
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Session
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button data-intro="fade" onClick={() => scrollTo("#programs")} className="hero-btn-outline justify-center">
              <Play size={14} className="fill-white" />
              <span>View Programs</span>
            </button>
          </div>
        </div>

        {/* Center spacer (athlete lives here visually) */}
        <div className="hidden lg:col-span-3 lg:block" />

        {/* Right — glass stat cards */}
        <div className="grid grid-cols-2 gap-3 [perspective:1000px] lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:gap-5">
          {STATS.map(({ icon: Icon, target, suffix, label, desc }) => (
            <div key={label} data-layer="card" className="will-change-transform [transform-style:preserve-3d]">
              <div data-intro="card">
                <div
                  data-float
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.08] lg:w-[300px] lg:p-6 xl:w-[320px]"
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 lg:h-11 lg:w-11">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p
                        data-counter={target}
                        data-suffix={suffix}
                        className="font-heading text-2xl leading-none text-white lg:text-3xl"
                      >
                        {target}
                        {suffix}
                      </p>
                      <p className="mt-1 font-body text-[9px] uppercase tracking-wider text-white/45 lg:text-[10px]">
                        {label}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 hidden font-body text-[11px] leading-relaxed text-white/35 sm:block">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
