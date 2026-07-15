"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Staggered word reveal for a plain-text heading. Splits the string into words
 * and rises each into place with a small per-word delay once the element
 * scrolls into view (fires once). Under reduced motion — or before it enters
 * the viewport on the server — it renders fully visible and static, so it is
 * always readable and SEO-safe (the full text is in the DOM).
 */
export function TextReveal({
  text,
  className,
  accent,
  step = 0.045,
}: {
  text: string;
  className?: string;
  /**
   * A single word within `text` to render with the moving-gradient sheen. It is
   * nested inside the word span rather than applied to it: `.grad-text` and
   * `.tr-word` both set `animation`, so on one element the rise and the sheen
   * would clobber each other.
   */
  accent?: string;
  /** Seconds of delay added per successive word. */
  step?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduce]);

  const words = text.split(" ");
  const isStatic = reduce || !active;

  return (
    <span
      ref={ref}
      className={["text-reveal", isStatic ? "is-static" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="tr-word"
          style={{ "--tr-delay": `${i * step}s` } as React.CSSProperties}
        >
          {accent && word === accent ? (
            <span className="grad-text">{word}</span>
          ) : (
            word
          )}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
