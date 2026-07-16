"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Ico } from "@/components/icon";
import { MegaLink } from "@/components/layout/mega-link";
import type { CompanyPanel, MegaItem } from "@/content/site";

/**
 * Strips the trailing slash so a content href (`/about`) compares equal to the
 * pathname Next serves it at (`/about/` — the export sets `trailingSlash`).
 */
const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

/** How long each slide holds before the scroller advances itself. */
const AUTOPLAY_MS = 5000;

/**
 * Mission / vision scroller — a native scroll-snap track rather than a carousel
 * library: touch swipe and arrow-key scrolling come for free, and the slides
 * stay readable if JS never runs.
 *
 * It advances itself every `AUTOPLAY_MS`, but never over the reader: the timer
 * holds while the pointer is over the slides or focus is inside them, and it is
 * suppressed entirely under `prefers-reduced-motion`.
 */
function StoryScroller({
  story,
  label,
}: {
  story: CompanyPanel["story"];
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // Refs, not state: neither pausing nor the autoplay timer's own bookkeeping
  // should restart the interval below.
  const paused = useRef(false);
  const indexRef = useRef(0);

  // Swipe and arrow-key scrolling report their position here, so the dots track
  // whatever the reader actually did to the scroller.
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const at = Math.round(track.scrollLeft / track.clientWidth);
    indexRef.current = at;
    setIndex(at);
  }, []);

  // A dot click sets the active dot directly rather than waiting for the scroll
  // it triggers to echo back through `onScroll`: the feedback then lands on the
  // click instead of trailing a 300ms smooth-scroll, and it cannot be lost if
  // the scroll is interrupted. `onScroll` still corrects it if the reader takes
  // over mid-flight.
  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    indexRef.current = i;
    setIndex(i);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: i * track.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || story.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The panel stays mounted while the menu is closed, so "is it open?" has to
    // be asked every tick. Mirror the CSS that opens it rather than measuring
    // the scroller: `.mega` is revealed by hover/focus on the entry (desktop) or
    // the `.open` accordion class (mobile), and a closed panel is only faded
    // out — it still reports a real size and a `visible` computed style.
    const entry = track.closest(".nav-item");
    const isOpen = () =>
      !!entry && (entry.matches(":hover, :focus-within") || entry.classList.contains("open"));

    const id = window.setInterval(() => {
      // Rewind while closed, so the menu always opens on the first slide.
      if (!isOpen()) {
        track.scrollTo({ left: 0, behavior: "auto" });
        indexRef.current = 0;
        setIndex(0);
        return;
      }
      if (paused.current) return;
      // Step from the tracked index, not from `scrollLeft`: the previous
      // smooth scroll may still be travelling, and re-reading the track would
      // round back to the slide we just left and stall here. A reader's own
      // swipe still redirects this — `onScroll` writes the ref too.
      goTo((indexRef.current + 1) % story.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [goTo, story.length]);

  return (
    <div
      className="mm-co-story"
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <p className="mm-co-label">{label}</p>

      <div
        ref={trackRef}
        className="mm-co-track"
        onScroll={onScroll}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
      >
        {story.map((slide, i) => (
          <article
            className="mm-co-slide"
            key={slide.title}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${story.length}: ${slide.title}`}
          >
            <span className="mm-co-orb" aria-hidden>
              <Ico name={slide.icon} />
            </span>
            <h4 className="mm-co-slide-title">{slide.title}</h4>
            <p className="mm-co-slide-body">{slide.body}</p>
          </article>
        ))}
      </div>

      {story.length > 1 && (
        <div className="mm-co-dots">
          {story.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={cn("mm-co-dot", index === i && "is-active")}
              aria-label={slide.title}
              aria-current={index === i ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * The Company panel — a two-column trust surface: the navigation sidebar and a
 * mission/vision scroller, closed by a promotional banner.
 *
 * On mobile the shared accordion rules keep the sidebar and the banner and drop
 * the scroller — the sidebar *is* the navigation, so it is the one column that
 * must always survive (see `.mega.is-company` in globals.css).
 */
export function CompanyMega({
  item,
  onNavigate,
}: {
  item: MegaItem;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const panel = item.company;
  if (!panel || !item.links) return null;

  const { banner } = panel;
  const [primary, ...secondary] = panel.actions;
  const current = normalize(pathname);

  return (
    <div className="mega is-company">
      <div className="mega-inner">
        {/* Left — company navigation. */}
        <nav className="mm-co-nav" aria-label={`${item.label} navigation`}>
          <p className="mm-co-label">{panel.navLabel}</p>
          {item.links.map((link) => (
            <MegaLink
              key={link.label}
              link={link}
              active={normalize(link.href) === current}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        {/* Right — who we are, and the actions that follow from it. */}
        <aside className="mm-co-feature">
          <StoryScroller story={panel.story} label={panel.storyLabel} />
          <div className="mm-co-actions">
            {primary && (
              <Link
                className="mm-co-cta"
                href={primary.href}
                onClick={onNavigate}
              >
                {primary.label}
                <span aria-hidden>→</span>
              </Link>
            )}
            {secondary.map((action) => (
              <Link
                key={action.label}
                className="mm-co-ghost"
                href={action.href}
                onClick={onNavigate}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Foot — promotional banner across both columns. */}
        <div className="mm-co-banner">
          <div className="mm-co-banner-text">
            <p className="mm-co-banner-title">{banner.title}</p>
            <p className="mm-co-banner-body">{banner.body}</p>
          </div>
          <Link
            className="mm-co-cta mm-co-banner-cta"
            href={banner.cta.href}
            onClick={onNavigate}
          >
            {banner.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
