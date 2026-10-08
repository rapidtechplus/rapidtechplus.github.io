"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sets `data-inview` on its wrapper the first time it scrolls into view, so
 * CSS animations inside can stay paused until they are actually seen
 * (`[data-inview]` selectors in globals.css). No JS → no attribute → the CSS
 * fallback shows the final, settled frame.
 */
export function InView({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return (
    <div
      ref={ref}
      className={className}
      data-inview={seen ? "" : undefined}
      // Only after hydration, so server HTML never pauses anything.
      data-inview-ready={mounted ? "" : undefined}
    >
      {children}
    </div>
  );
}
