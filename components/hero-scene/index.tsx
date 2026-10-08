"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { GlobePalette } from "./globe";

/** Reads the current theme's colours from the design tokens. */
function readPalette(): GlobePalette {
  const light = document.documentElement.classList.contains("light");
  return light
    ? { node: "37, 99, 235", pulse: "14, 165, 233", additive: false }
    : { node: "147, 197, 253", pulse: "90, 209, 255", additive: true };
}

/**
 * Decorative hero backdrop: the canvas "neural globe" (see `globe.ts`).
 *
 * Progressive enhancement only — nothing here affects the LCP or the copy:
 * - the scene module is code-split and loaded on idle, after first paint;
 * - skipped entirely under `prefers-reduced-motion` or Save-Data, leaving the
 *   static aurora background in place;
 * - rendering pauses when the hero leaves the viewport or the tab is hidden;
 * - pointer tilt is fine-pointer only; scroll drives a gentle zoom.
 */
export function HeroScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (conn?.saveData) return;

    let disposed = false;
    const cleanups: (() => void)[] = [];

    const boot = async () => {
      const { createGlobe } = await import("./globe");
      if (disposed) return;
      const small = window.innerWidth < 768;
      const globe = createGlobe(canvas, {
        nodes: small ? 360 : 640,
        arcs: small ? 14 : 26,
        palette: readPalette(),
      });
      if (!globe) return;
      cleanups.push(() => globe.dispose());

      // Visibility: run only while the hero is on screen and the tab is visible.
      let inView = true;
      const sync = () =>
        inView && !document.hidden ? globe.start() : globe.stop();
      const io = new IntersectionObserver(([e]) => {
        inView = e.isIntersecting;
        sync();
      });
      io.observe(wrap);
      document.addEventListener("visibilitychange", sync);
      cleanups.push(() => {
        io.disconnect();
        document.removeEventListener("visibilitychange", sync);
      });

      const ro = new ResizeObserver(() => globe.resize());
      ro.observe(wrap);
      cleanups.push(() => ro.disconnect());

      // Theme switches toggle the `light` class on <html>.
      const mo = new MutationObserver(() => globe.setPalette(readPalette()));
      mo.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      cleanups.push(() => mo.disconnect());

      if (window.matchMedia("(pointer: fine)").matches) {
        const onMove = (e: PointerEvent) =>
          globe.setPointer(
            (e.clientX / window.innerWidth - 0.5) * 2,
            (e.clientY / window.innerHeight - 0.5) * 2,
          );
        window.addEventListener("pointermove", onMove, { passive: true });
        cleanups.push(() => window.removeEventListener("pointermove", onMove));
      }

      const onScroll = () => {
        const r = wrap.getBoundingClientRect();
        globe.setScroll(-r.top / Math.max(1, r.height));
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));

      sync();
      setReady(true);
    };

    // Defer until the browser is idle so the scene never competes with LCP.
    const ric = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId = 0;
    let timeoutId = 0;
    if (ric.requestIdleCallback) {
      idleId = ric.requestIdleCallback(() => void boot(), { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(() => void boot(), 800);
    }

    return () => {
      disposed = true;
      if (idleId && ric.cancelIdleCallback) ric.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn("hero-scene", ready && "is-ready")}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
