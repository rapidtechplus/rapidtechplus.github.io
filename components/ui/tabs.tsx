"use client";

import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  panel: ReactNode;
};

/**
 * Accessible tabs (WAI-ARIA tabs pattern, automatic activation): roving
 * tabindex, arrow keys in both axes, Home/End. Every panel stays in the DOM
 * (inactive ones `hidden`), so all content is in the static HTML for SEO and
 * no-JS visitors still get the first panel.
 */
export function Tabs({
  items,
  label,
  className,
}: {
  items: TabItem[];
  /** Accessible name for the tab list. */
  label: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = items.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? active === last
          ? 0
          : active + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
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
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={cn("tabs", className)}>
      <div
        className="tabs-list"
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${item.id}`}
            aria-controls={`${baseId}-panel-${item.id}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            className={cn("tabs-tab", active === i && "is-active")}
            onClick={() => setActive(i)}
          >
            {item.icon ? (
              <span className="tabs-ico" aria-hidden>
                {item.icon}
              </span>
            ) : null}
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="tabs-panel"
        >
          {item.panel}
        </div>
      ))}
    </div>
  );
}
