import type { ReactElement } from "react";
import { site } from "@/content/site";

/**
 * Shared renderer for every build-time Open Graph image.
 *
 * One template, one place to re-key if the brand moves — each route's
 * `opengraph-image.tsx` supplies only its own title/eyebrow. Keyed to the
 * logo-derived system in `app/globals.css` (navy ink, navy → sky ramp); the
 * tokens are duplicated as literals below because Satori resolves no CSS
 * variables and never sees the stylesheet.
 */

/** 1200×630 is the size every major platform crops against. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#0a1322";
const INK_2 = "#12294a";
const ACCENT_FROM = "#183860";
const ACCENT_MID = "#3a6fa8";
const ACCENT_TO = "#5890d0";
const EYEBROW = "#8ab8ea";
const TEXT = "#eef3fa";
const TEXT_DIM = "#9fb3cc";
const RULE = "#1d2f4a";

/** Longer titles would overflow the fixed canvas, so they clamp with an ellipsis. */
const TITLE_MAX = 78;

export function ogImage({
  title,
  eyebrow,
  logoSrc,
}: {
  title: string;
  eyebrow?: string;
  /** The brand mark as a data URI — Satori cannot fetch site-relative paths. */
  logoSrc: string;
}): ReactElement {
  const clamped =
    title.length > TITLE_MAX
      ? `${title.slice(0, TITLE_MAX - 1).trimEnd()}…`
      : title;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: INK,
        backgroundImage: `linear-gradient(135deg, ${INK} 0%, ${INK_2} 100%)`,
      }}
    >
      {/* Accent seam — the brand's signature edge. Kept a normal flex child of an
          unpadded root so it spans the full canvas: an absolutely positioned seam
          resolves against the padded box and stops 80px short of each edge. */}
      <div
        style={{
          width: "100%",
          height: 8,
          backgroundImage: `linear-gradient(90deg, ${ACCENT_FROM}, ${ACCENT_MID}, ${ACCENT_TO})`,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: "64px 80px 72px",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 16,
              backgroundColor: "#ffffff",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={56} height={56} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 600,
              color: TEXT,
            }}
          >
            {site.name}
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: EYEBROW,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.5,
              color: TEXT,
              maxWidth: 940,
            }}
          >
            {clamped}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${RULE}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: TEXT_DIM }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: TEXT_DIM }}>
            {site.slogan}
          </div>
        </div>
      </div>
    </div>
  );
}
