"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/lib/use-motion-preference";
import type { CSSProperties, ReactNode } from "react";

/**
 * Subtle scroll-into-view reveal. Respects prefers-reduced-motion by
 * rendering statically. Animates once, on first view.
 *
 * Never wrap above-the-fold content in the animated variant: the server ships
 * the hidden state (`opacity: 0`), so the text does not paint until React has
 * hydrated and the observer has fired. On a throttled phone that is seconds,
 * and if the wrapped text is the largest thing on screen it *is* the LCP. Pass
 * `eager` there — the content renders as plain markup and paints with the
 * first frame.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  style,
  eager = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  /** Skip the entrance animation so the content is in the first paint. */
  eager?: boolean;
}) {
  const reduce = useReducedMotionSafe();

  if (reduce || eager) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
