"use client";

import { useEffect } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Drives the cursor-reactive sheen on `.card` (see `.card::before` in
 * globals.css), which reads its highlight position from `--mx`/`--my`.
 *
 * One delegated listener on the document rather than a wrapper component per
 * card: cards are plain server-rendered markup all over the site, and the sheen
 * is a decoration that must not force any of them into a client boundary.
 *
 * The vars are only ever read while a card is hovered (`.card:hover::before`
 * is what fades the sheen in), so a stale position left behind on leave is
 * invisible and needs no reset. Disabled under reduced motion and on coarse
 * pointers, where there is no cursor to track.
 */
export function PointerSheen() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let pending: { card: HTMLElement; x: number; y: number } | null = null;

    const onMove = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".card");
      if (!card) return;

      const rect = card.getBoundingClientRect();
      pending = {
        card,
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };

      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!pending) return;
        pending.card.style.setProperty("--mx", `${pending.x.toFixed(1)}%`);
        pending.card.style.setProperty("--my", `${pending.y.toFixed(1)}%`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return null;
}
