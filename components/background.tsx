"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Fixed, behind-content motion layer for the Ink & Electric Violet system:
 * an animated grid, three drifting aurora blobs, and floating AI-inspired
 * particles. Purely decorative (aria-hidden) and fully disabled under
 * prefers-reduced-motion — the static grid/aurora remain, particles drop out.
 *
 * The aurora and grid drift subtly toward the pointer (mouse parallax) for a
 * premium, alive feel. Parallax is pointer-only (skipped on touch/coarse
 * pointers), rAF-throttled, and driven entirely through CSS custom properties
 * so React never re-renders on mouse move.
 */
export function Background() {
  const reduce = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);

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

  // Mouse parallax — write normalized pointer offset (-1..1) into CSS vars.
  useEffect(() => {
    const node = layerRef.current;
    if (!node || reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        node.style.setProperty("--par-x", tx.toFixed(3));
        node.style.setProperty("--par-y", ty.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div className="bg-layer" aria-hidden="true" ref={layerRef}>
      <div className="bg-grid" />
      <div className="bg-parallax">
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />
      </div>
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
