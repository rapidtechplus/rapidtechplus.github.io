"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type SectionLink = { id: string; label: string };

/**
 * Sticky in-page section nav for long detail pages. Highlights the section
 * currently in view (IntersectionObserver) and scrolls horizontally on narrow
 * screens. Plain anchor links, so it works without JS too.
 */
export function SectionNav({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      // A thin band just below the sticky bars decides the "current" section.
      { rootMargin: "-140px 0px -65% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="secnav" aria-label="On this page">
      <div className="secnav-inner container-wide container">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(active === s.id && "is-active")}
            aria-current={active === s.id ? "location" : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
