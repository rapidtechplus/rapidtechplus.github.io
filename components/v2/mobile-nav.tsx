"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";

type Link = { label: string; href: string };

/**
 * Disclosure menu for narrow screens. Closes on Escape (returning focus to the
 * toggle), on choosing a link, and when the viewport grows past the breakpoint
 * where the inline nav takes over.
 */
export function V2MobileNav({ links, cta }: { links: Link[]; cta: Link }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      document.getElementById(`${panelId}-toggle`)?.focus();
    };
    const wide = window.matchMedia("(min-width: 961px)");
    const onWide = () => wide.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open, panelId]);

  return (
    <>
      <button
        id={`${panelId}-toggle`}
        type="button"
        className="v2-icon-btn v2-menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>
      <div id={panelId} className="v2-mobile-menu" hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="v2-btn v2-btn--primary"
          href={cta.href}
          onClick={() => setOpen(false)}
        >
          {cta.label}
        </a>
      </div>
    </>
  );
}
