"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type WorkItem = {
  slug: string;
  href: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metrics: { value: string; label: string }[];
  bars: number[];
};

const SLIDE_MS = 6000;

/**
 * Case-study showcase as an ARIA tabs widget that advances on its own.
 *
 * Autoplay rules: off under reduced motion; paused while the pointer or
 * keyboard focus is inside; and an explicit pause/play control (WCAG 2.2.2).
 * Arrow keys, Home and End move between tabs (roving tabindex). Choosing a tab
 * restarts its timer so the progress bar always matches the remaining time.
 */
export function WorkTabs({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cycle, setCycle] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Autoplay starts only after mount and only without reduced motion, so the
  // server render and the first client render agree (no timer, no bar).
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(true);
    }
  }, []);

  const running = playing && !hovered;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setActive((i) => (i + 1) % items.length);
      setCycle((c) => c + 1);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [running, active, cycle, items.length]);

  const select = (i: number, focus = false) => {
    setActive(i);
    setCycle((c) => c + 1);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = items.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? active === last
          ? 0
          : active + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? active === 0
            ? last
            : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  };

  const item = items[active];

  return (
    <div
      className="v2-work-layout v2-reveal"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setHovered(false);
        }
      }}
    >
      <div className="v2-work-side">
        <div
          className="v2-tabs"
          role="tablist"
          aria-label="Case studies"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {items.map((it, i) => {
            const selected = i === active;
            return (
              <button
                key={it.slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`v2-work-tab-${it.slug}`}
                type="button"
                role="tab"
                className="v2-tab"
                aria-selected={selected}
                aria-controls="v2-work-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
              >
                <span className="v2-mono-label">{it.category}</span>
                <span className="v2-tab-title">{it.title}</span>
                {selected && playing && (
                  <span
                    key={cycle}
                    className="v2-tab-progress"
                    data-paused={!running}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="v2-autoplay"
          aria-pressed={!playing}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? (
            <Pause size={14} aria-hidden />
          ) : (
            <Play size={14} aria-hidden />
          )}
          {playing ? "Pause rotation" : "Play rotation"}
        </button>
      </div>

      <div
        id="v2-work-panel"
        className="v2-work-panel v2-beam"
        role="tabpanel"
        aria-labelledby={`v2-work-tab-${item.slug}`}
      >
        <div key={item.slug} className="v2-work-slide">
          <div className="v2-work-bars" aria-hidden="true">
            {item.bars.map((h, j) => (
              <span
                key={j}
                className={cn(
                  "v2-bar",
                  j >= item.bars.length - 3 && "v2-bar--accent",
                )}
                style={{ height: `${h}%`, animationDelay: `${j * 0.06}s` }}
              />
            ))}
          </div>
          <div className="v2-work-body">
            <span className="v2-mono-label">{item.client}</span>
            <h3 className="v2-work-title">
              <a href={item.href}>{item.title}</a>
            </h3>
            <p className="v2-lead">{item.summary}</p>
            <dl className="v2-metrics">
              {item.metrics.map((m) => (
                <div key={m.label} className="v2-metric">
                  <dt>{m.label}</dt>
                  <dd className="v2-text-grad">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
