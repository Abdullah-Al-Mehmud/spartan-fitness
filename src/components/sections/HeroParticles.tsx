"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Shared, mutable scroll state written by GSAP and read every frame here (no re-renders). */
export type ScrollState = { progress: number; velocity: number };

interface HeroParticlesProps {
  scrollRef: RefObject<ScrollState>;
}

const FAR_Z = -22; // spawn depth
const NEAR_Z = 5; // camera position — particles recycle once they pass it
const SPREAD_X = 9;
const SPREAD_Y = 6;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/** Soft round sprite generated on a canvas — no texture file needed. */
function createSprite(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function Embers({ scrollRef, count }: HeroParticlesProps & { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const boost = useRef(0); // smoothed extra Z-speed driven by scroll
  const sprite = useMemo(createSprite, []);

  const { positions, colors, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 2); // [phase, riseSpeed]

    const embers = ["#ff3b1f", "#dc2626", "#ff8a3d", "#b91c1c"].map((c) => new THREE.Color(c));
    const chalk = new THREE.Color("#f5efe6");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = rand(-SPREAD_X, SPREAD_X);
      positions[i * 3 + 1] = rand(-SPREAD_Y, SPREAD_Y);
      positions[i * 3 + 2] = rand(FAR_Z, NEAR_Z);

      // ~25% white chalk dust, the rest red/orange embers
      const base = Math.random() < 0.25 ? chalk : embers[Math.floor(Math.random() * embers.length)];
      const intensity = rand(0.45, 1);
      colors[i * 3] = base.r * intensity;
      colors[i * 3 + 1] = base.g * intensity;
      colors[i * 3 + 2] = base.b * intensity;

      seeds[i * 2] = rand(0, Math.PI * 2);
      seeds[i * 2 + 1] = rand(0.12, 0.45);
    }
    return { positions, colors, seeds };
  }, [count]);

  useEffect(() => () => sprite.dispose(), [sprite]);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const dt = Math.min(delta, 0.05); // clamp after tab switches
    const scroll = scrollRef.current;

    // Scroll progress + scroll velocity → how fast particles rush the camera
    const target = scroll.progress * 14 + Math.min(Math.abs(scroll.velocity) / 350, 12);
    boost.current = THREE.MathUtils.lerp(boost.current, target, 1 - Math.exp(-dt * 4));
    scroll.velocity *= 0.92; // decay so particles calm down when scrolling stops

    const zSpeed = 0.35 + boost.current;
    const t = state.clock.elapsedTime;
    const attr = points.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const phase = seeds[i * 2];
      const rise = seeds[i * 2 + 1];

      arr[ix] += Math.sin(t * 0.6 + phase) * 0.12 * dt; // lateral sway
      arr[ix + 1] += rise * dt; // embers float upward
      arr[ix + 2] += zSpeed * dt; // drift / rush toward the camera

      if (arr[ix + 2] > NEAR_Z) {
        // passed the camera → respawn deep in the tunnel
        arr[ix] = rand(-SPREAD_X, SPREAD_X);
        arr[ix + 1] = rand(-SPREAD_Y, SPREAD_Y);
        arr[ix + 2] = FAR_Z + rand(0, 4);
      } else if (arr[ix + 1] > SPREAD_Y + 0.5) {
        // floated off the top → re-enter from the bottom
        arr[ix + 1] = -SPREAD_Y - 0.5;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        map={sprite}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Full-screen ember/chalk particle layer. Client-only (loaded via next/dynamic
 * with ssr:false) so WebGL never runs during SSR → no hydration mismatches.
 */
export default function HeroParticles({ scrollRef }: HeroParticlesProps) {
  const [config, setConfig] = useState<{ count: number } | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setConfig({ count: window.innerWidth < 768 ? 220 : window.innerWidth < 1280 ? 450 : 650 });
  }, []);

  if (!config) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, NEAR_Z], fov: 60 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <Embers scrollRef={scrollRef} count={config.count} />
    </Canvas>
  );
}
