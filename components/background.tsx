"use client";

import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Fixed, behind-content motion layer for the Ink & Electric Violet system:
 * an animated grid, three drifting aurora blobs, and floating AI-inspired
 * particles. Purely decorative (aria-hidden) and fully disabled under
 * prefers-reduced-motion — the static grid/aurora remain, particles drop out.
 */
export function Background() {
  const reduce = useReducedMotion();

  // Deterministic particle field (stable across renders, no hydration drift).
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const rnd = seed / 233280;
        const rnd2 = ((i * 4099 + 137) % 233280) / 233280;
        return {
          left: 4 + rnd * 92,
          size: 2 + Math.round(rnd2 * 2),
          duration: 16 + rnd2 * 20,
          delay: -rnd * 30,
        };
      }),
    [],
  );

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <div className="aurora a1" />
      <div className="aurora a2" />
      <div className="aurora a3" />
      {!reduce &&
        particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
    </div>
  );
}
