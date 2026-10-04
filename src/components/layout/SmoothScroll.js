"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis RAF with GSAP ticker for seamless 60-120fps frame rendering
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete window.__lenis;
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
