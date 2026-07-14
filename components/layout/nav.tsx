"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Ico } from "@/components/icon";
import { megaMenu, site, type MegaItem, type NavLink } from "@/content/site";

/**
 * A single service inside a category panel. Renders as a card: icon, title,
 * one-line description, and a hover arrow. `soon` items render as a
 * non-clickable card with a "Soon" pill so intended IA shows without dead links.
 */
function ServiceCard({
  link,
  onNavigate,
}: {
  link: NavLink;
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
    <Link className="mega-link" href={link.href} onClick={onNavigate}>
      {inner}
    </Link>
  );
}

/**
 * A top-level mega-menu entry with a master–detail panel: a left rail of
 * categories drives the right-hand detail panel. Hovering or focusing a
 * category swaps the panel. Holds its own active-category state (defaults to
 * the first category, resets when the pointer leaves). On mobile the rail is
 * hidden and every category renders as a labelled, stacked accordion section.
 */
function MegaMenuItem({
  item,
  isOpen,
  isActive,
  onToggle,
  onNavigate,
}: {
  item: MegaItem;
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const [active, setActive] = useState(0);
  const categories = item.columns ?? [];
  const overviewLabel = item.overview ?? `Explore all ${item.label}`;

  // Flat mode — a single grid of items, no category rail.
  if (item.flat && item.links) {
    return (
      <div className={cn("nav-item", item.compact && "mm-anchored", isOpen && "open")}>
        <button
          type="button"
          className={cn("nav-trigger", isActive && "active")}
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {item.label}
          <ChevronDown className="caret" size={14} aria-hidden />
        </button>

        <div className={cn("mega is-flat", item.compact && "is-compact")}>
          <div className="mega-inner">
            <div className="mm-detail">
              <div className="mm-flat-cards">
                {item.links.map((link) => (
                  <ServiceCard
                    key={link.label}
                    link={link}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
              <div className="mm-foot">
                <Link
                  className="mm-foot-overview"
                  href={item.href}
                  onClick={onNavigate}
                >
                  {overviewLabel}
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  className="mm-foot-cta"
                  href="/contact"
                  onClick={onNavigate}
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("nav-item", isOpen && "open")}
      onMouseLeave={() => setActive(0)}
    >
      <button
        type="button"
        className={cn("nav-trigger", isActive && "active")}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown className="caret" size={14} aria-hidden />
      </button>

      <div className="mega">
        <div className="mega-inner">
          {/* Left rail — category selector (desktop). Hidden on mobile. */}
          <div
            className="mm-rail"
            role="tablist"
            aria-label={`${item.label} categories`}
          >
            {categories.map((cat, ci) => (
              <button
                key={cat.title}
                type="button"
                role="tab"
                aria-selected={active === ci}
                className={cn("mm-rail-item", active === ci && "is-active")}
                onMouseEnter={() => setActive(ci)}
                onFocus={() => setActive(ci)}
              >
                <span>{cat.title}</span>
                <span className="mm-rail-arrow" aria-hidden>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right detail — service cards for the active category. */}
          <div className="mm-detail">
            {categories.map((cat, ci) => (
              <div
                key={cat.title}
                className={cn("mm-panel", active === ci && "is-active")}
              >
                <h4 className="mm-panel-head">{cat.title}</h4>
                <div className="mm-cards">
                  {cat.links.map((link) => (
                    <ServiceCard
                      key={link.label}
                      link={link}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="mm-foot">
              <Link
                className="mm-foot-overview"
                href={item.href}
                onClick={onNavigate}
              >
                {overviewLabel}
                <span aria-hidden>→</span>
              </Link>
              <Link
                className="mm-foot-cta"
                href="/contact"
                onClick={onNavigate}
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const close = () => {
    setMobileOpen(false);
    setOpenIndex(null);
  };

  // Close the sheet whenever the route changes.
  useEffect(() => {
    close();
  }, [pathname]);

  // Elevate the header once the page scrolls past the hero's top edge —
  // stronger border + shadow so it reads as a distinct layer over content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile sheet is open: lock body scroll, close on Escape, and
  // move focus into the sheet. Focus returns to the toggle when it closes.
  useEffect(() => {
    if (!mobileOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  return (
    <header className={cn("nav", scrolled && "is-scrolled")}>
      <div className="nav-inner container-wide container">
        <Link className="brand brand-lockup" href="/" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo" src="/logo.svg" alt="" width={38} height={38} />
          <span className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-slogan">{site.slogan}</span>
          </span>
        </Link>

        <nav
          ref={panelRef}
          id="primary-nav"
          className={cn("nav-links", mobileOpen && "open")}
          aria-label="Primary"
        >
          {megaMenu.map((item, i) =>
            item.columns || (item.flat && item.links) ? (
              <MegaMenuItem
                key={item.label}
                item={item}
                isOpen={openIndex === i}
                isActive={isActive(item.href)}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                onNavigate={close}
              />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn("nav-plain", isActive(item.href) && "active")}
                onClick={close}
              >
                {item.label}
              </Link>
            ),
          )}

          <Link
            className="btn btn-primary nav-cta nav-cta-mobile"
            href="/contact"
            onClick={close}
          >
            Get A Quote
            <span className="btn-arrow" aria-hidden>
              →
            </span>
          </Link>
        </nav>

        <div className="nav-right">
          <Link
            className="btn btn-primary nav-cta nav-cta-desktop"
            href="/contact"
          >
            Get A Quote
            <span className="btn-arrow" aria-hidden>
              →
            </span>
          </Link>
          <button
            ref={toggleRef}
            className="nav-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="primary-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
