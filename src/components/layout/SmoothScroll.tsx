"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives Lenis from GSAP's ticker (single RAF loop) and pushes every Lenis
 * scroll event into ScrollTrigger, so pinned/scrubbed timelines stay in sync
 * with the smoothed scroll position instead of the raw native one.
 */
function LenisGsapSync() {
  // Fires on every Lenis scroll tick → keeps ScrollTrigger positions in sync
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;

    const raf = (time: number) => lenis.raf(time * 1000); // gsap time is in seconds
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0); // avoid jumps after tab switches

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    // autoRaf={false}: GSAP's ticker owns the animation frame (see LenisGsapSync)
    <ReactLenis root autoRaf={false} options={{ lerp: 0.08 }}>
      <LenisGsapSync />
      {children as any}
    </ReactLenis>
  );
}
