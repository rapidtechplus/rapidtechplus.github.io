"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Ico } from "@/components/icon";
import type { NavLink } from "@/content/site";

/**
 * A single link inside a mega-menu panel. Renders as a card: icon, title,
 * one-line description, and a hover arrow. `soon` items render as a
 * non-clickable card with a "Soon" pill so intended IA shows without dead links.
 *
 * Shared by every panel variant (`nav.tsx`) and the company sidebar
 * (`company-mega.tsx`), which is why it lives in its own module — importing it
 * back from `nav.tsx` would create a cycle.
 */
export function MegaLink({
  link,
  active,
  onNavigate,
}: {
  link: NavLink;
  /** Marks the link as the current page. Only the company sidebar sets this. */
  active?: boolean;
  onNavigate: () => void;
}) {
  const inner = (
    <>
      {link.icon && (
        <span className="mega-ico" aria-hidden>
          <Ico name={link.icon} />
        </span>
      )}
      <span className="mega-link-text">
        <span className="mega-link-label">
          {link.label}
          {link.soon && <span className="soon-pill">Soon</span>}
        </span>
        {link.desc && <span className="mega-link-desc">{link.desc}</span>}
      </span>
      {!link.soon && (
        <span className="mega-link-arrow" aria-hidden>
          →
        </span>
      )}
    </>
  );

  if (link.soon) {
    return (
      <span className="mega-link is-soon" aria-disabled>
        {inner}
      </span>
    );
  }
  return (
    <Link
      className={cn("mega-link", active && "is-current")}
      href={link.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
    >
      {inner}
    </Link>
  );
}
