"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Magnetic wrapper — the wrapped element (typically a CTA button) drifts a few
 * pixels toward the pointer while hovered, then springs back on leave. Purely a
 * hover delight: the offset is written to CSS custom properties so React never
 * re-renders, and the whole effect is disabled under reduced motion and on
 * coarse (touch) pointers, where it renders as a plain inline-flex wrapper.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  /** Fraction of the pointer's in-element offset applied as translation. */
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      node.style.setProperty("--mag-x", `${x.toFixed(1)}px`);
      node.style.setProperty("--mag-y", `${y.toFixed(1)}px`);
    };
    const reset = () => {
      node.style.setProperty("--mag-x", "0px");
      node.style.setProperty("--mag-y", "0px");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, [reduce, strength]);

  return (
    <span
      ref={ref}
      className={["magnetic", className].filter(Boolean).join(" ")}
    >
      {children}
    </span>
  );
}
