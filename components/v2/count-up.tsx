"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

/** Splits "+28%" → { prefix: "+", number: 28, suffix: "%", decimals: 0 }. */
function parse(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return {
    prefix,
    number: Number(digits),
    suffix,
    decimals: digits.includes(".") ? digits.split(".")[1].length : 0,
  };
}

/**
 * Counts a metric up from zero the first time it scrolls into view.
 *
 * The server (and first client) render is the final value, so the number is
 * correct without JavaScript, for crawlers and for reduced motion. Values that
 * are not numeric ("24/7", "HIPAA") render as-is.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parts = parse(value);
    const el = ref.current;
    if (!parts || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const format = (n: number) =>
      `${parts.prefix}${n.toFixed(parts.decimals)}${parts.suffix}`;

    setDisplay(format(0));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION_MS);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(format(parts.number * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {/* Assistive tech reads the real value once, not every frame. */}
      <span className="v2-sr-only">{value}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
