"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Hero visual: a wireframe globe inside three tilted orbit rings, with the
 * capability chips floating around it. All motion is CSS; this component only
 * adds pointer parallax, writing `--v2-px` / `--v2-py` (-0.5…0.5) on the stage
 * so three layers shift at different depths — no React re-render per frame.
 * Parallax is skipped for coarse pointers and reduced motion. Decorative.
 *
 * `chips` are rendered by the server component that owns this island, so the
 * icon registry never ships to the client.
 */
export function OrbitVisual({ chips }: { chips: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduce) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      stage.style.setProperty("--v2-px", x.toFixed(3));
      stage.style.setProperty("--v2-py", y.toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      // Normalised to the stage, clamped so far-away pointers don't overshoot.
      x = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
      y = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="v2-stage v2-rise v2-rise--3"
      aria-hidden="true"
    >
      <div className="v2-stage-scale">
        <div className="v2-stage-layer v2-stage-tilt">
          <div className="v2-ring v2-ring--a">
            <span className="v2-ring-node" />
          </div>
          <div className="v2-ring v2-ring--b">
            <span className="v2-ring-node" />
          </div>
          <div className="v2-ring v2-ring--c">
            <span className="v2-ring-node" />
          </div>
        </div>

        <div className="v2-stage-layer v2-stage-core">
          <div className="v2-core-wrap">
            <div className="v2-core">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i} className="v2-meridian" />
              ))}
              <span className="v2-latitude v2-latitude--1" />
              <span className="v2-latitude v2-latitude--2" />
              <span className="v2-latitude v2-latitude--3" />
            </div>
            <CoreMark />
          </div>
        </div>

        <div className="v2-stage-layer v2-stage-chips">{chips}</div>
      </div>
    </div>
  );
}

/** The mark, inverted for the globe's dark core in both themes. */
function CoreMark() {
  const arrow = "M3 44 L42 6 M31.4 8 L42 6 L39.8 16.6";
  return (
    <svg
      className="v2-core-mark"
      viewBox="0 0 48 48"
      width="74"
      height="74"
      fill="none"
    >
      <mask
        id="v2-core-cut"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#fff" />
        <path
          d={arrow}
          stroke="#000"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#v2-core-cut)">
        <path
          d="M10 42 V9 H25 A9.5 9.5 0 0 1 25 28 H10"
          stroke="#ffffff"
          strokeWidth="6"
        />
        <path d="M22 28 L36 42" stroke="#c9d2da" strokeWidth="6" />
      </g>
      <path
        d={arrow}
        stroke="#a9cbf2"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
