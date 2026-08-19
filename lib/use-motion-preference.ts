"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * `prefers-reduced-motion`, safe to branch on during render.
 *
 * `useReducedMotion()` reads `matchMedia` on the very first client render but
 * always resolves to `false` on the server. Any component that changes its
 * markup based on it therefore hydrates against different HTML — React
 * discards and re-renders the whole tree, which is exactly the cost reduced
 * motion is meant to avoid (and it is common on phones, where Reduce Motion is
 * a battery/accessibility default).
 *
 * Gating on a mount flag keeps the first client render byte-identical to the
 * server's, then swaps to the static variant on the next commit. The animation
 * never gets a chance to play, so reduced-motion users still see no motion.
 *
 * Effect-only consumers (listeners, timers) can keep using `useReducedMotion`
 * directly — effects run after hydration, so they never mismatch.
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted && !!reduce;
}
