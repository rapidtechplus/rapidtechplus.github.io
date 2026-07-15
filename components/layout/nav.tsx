"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Ico } from "@/components/icon";
import {
  megaMenu,
  site,
  type MegaColumn,
  type MegaItem,
  type NavLink,
} from "@/content/site";

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
 * Panel footer — the overview link plus a consultation CTA. Shared by every
 * panel variant. In showcase panels the featured column carries these actions
 * at desktop widths, so CSS hides this strip there and shows it again once the
 * featured column drops away.
 */
function MenuFoot({
  item,
  onNavigate,
}: {
  item: MegaItem;
  onNavigate: () => void;
}) {
  return (
    <div className="mm-foot">
      <Link className="mm-foot-overview" href={item.href} onClick={onNavigate}>
        {item.overview ?? `Explore all ${item.label}`}
        <span aria-hidden>→</span>
      </Link>
      <Link className="mm-foot-cta" href="/contact" onClick={onNavigate}>
        Book a consultation
      </Link>
    </div>
  );
}

/**
 * Category rail — the master column. Each category is a tab that swaps the
 * detail (and, in showcase panels, the featured) column on hover or focus.
 * Hidden on mobile, where categories become accordion section headings.
 */
function CategoryRail({
  label,
  categories,
  active,
  onActivate,
}: {
  label: string;
  categories: MegaColumn[];
  active: number;
  onActivate: (index: number) => void;
}) {
  return (
    <div className="mm-rail" role="tablist" aria-label={`${label} categories`}>
      {categories.map((cat, ci) => (
        <button
          key={cat.title}
          type="button"
          role="tab"
          aria-selected={active === ci}
          className={cn("mm-rail-item", active === ci && "is-active")}
          onMouseEnter={() => onActivate(ci)}
          onFocus={() => onActivate(ci)}
        >
          {cat.icon && (
            <span className="mm-rail-ico" aria-hidden>
              <Ico name={cat.icon} />
            </span>
          )}
          <span className="mm-rail-label">{cat.title}</span>
          <span className="mm-rail-arrow" aria-hidden>
            →
          </span>
        </button>
      ))}
    </div>
  );
}

/**
 * Featured column of a showcase panel — an original abstract motif keyed to the
 * category's icon, its introduction, and the two conversion actions. Re-keyed
 * on the active category so the fade/slide replays on every switch.
 */
function FeaturePanel({
  item,
  category,
  onNavigate,
}: {
  item: MegaItem;
  category: MegaColumn;
  onNavigate: () => void;
}) {
  return (
    <aside className="mm-feature" key={category.title}>
      <div className="mm-feature-viz" aria-hidden>
        <span className="mm-feature-orb">
          {category.icon && <Ico name={category.icon} />}
        </span>
      </div>
      <p className="mm-feature-eyebrow">Featured</p>
      <h4 className="mm-feature-title">{category.title}</h4>
      {category.blurb && <p className="mm-feature-blurb">{category.blurb}</p>}
      <div className="mm-feature-actions">
        <Link
          className="mm-feature-cta"
          href={category.href ?? item.href}
          onClick={onNavigate}
        >
          Explore {item.label}
          <span aria-hidden>→</span>
        </Link>
        <Link
          className="mm-feature-ghost"
          href="/contact"
          onClick={onNavigate}
        >
          Book Consultation
        </Link>
      </div>
    </aside>
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
              <MenuFoot item={item} onNavigate={onNavigate} />
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

      <div className={cn("mega", item.showcase && "is-showcase")}>
        <div className="mega-inner">
          <CategoryRail
            label={item.label}
            categories={categories}
            active={active}
            onActivate={setActive}
          />

          {/* Middle — the active category's cards. On mobile every category
              renders as its own labelled accordion section. */}
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

            <MenuFoot item={item} onNavigate={onNavigate} />
          </div>

          {item.showcase && categories[active] && (
            <FeaturePanel
              item={item}
              category={categories[active]}
              onNavigate={onNavigate}
            />
          )}
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
