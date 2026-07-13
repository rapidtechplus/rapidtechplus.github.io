"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Count-up animation that runs once when scrolled into view. Parses a display
 * string like "10+", "100%", "24/7", or "∞": it animates the leading integer
 * (if any) and keeps the surrounding characters intact. Reduced-motion and
 * non-numeric values render statically.
 */
export function Counter({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(
    target === null || reduce ? value : `0${suffix}`,
  );

  useEffect(() => {
    if (target === null || reduce) {
      setDisplay(value);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${Math.round(eased * target)}${suffix}`);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix, value, reduce]);

  return (
    <span ref={ref} className="num">
      {display}
    </span>
  );
}
