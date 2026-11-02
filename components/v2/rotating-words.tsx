"use client";

import { useEffect, useState } from "react";

const INTERVAL_MS = 2400;
/** Full passes through the list before it settles. Stops long-running motion
    (WCAG 2.2.2) without needing a pause control for a one-line flourish. */
const CYCLES = 2;

/**
 * "We build AI agents." — the last phrase rotates through `words`, then rests
 * on the first one. Screen readers get the full sentence once, statically;
 * the animated part is hidden from them. Static under reduced motion.
 */
export function RotatingWords({
  prefix,
  words,
}: {
  prefix: string;
  words: string[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticks = 0;
    const total = words.length * CYCLES;
    const timer = window.setInterval(() => {
      ticks += 1;
      setIndex(ticks % words.length);
      if (ticks >= total) window.clearInterval(timer);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [words.length]);

  const sentence = `${prefix} ${words
    .map((w) => w.replace(/\.$/, ""))
    .join(", ")
    .replace(/, ([^,]*)$/, " and $1")}.`;

  return (
    <p className="v2-build-line v2-rise v2-rise--2">
      <span className="v2-sr-only">{sentence}</span>
      <span aria-hidden="true">
        {prefix} {/* Keyed so each phrase remounts and replays its entrance. */}
        <span key={index} className="v2-word">
          {words[index]}
        </span>
      </span>
    </p>
  );
}
