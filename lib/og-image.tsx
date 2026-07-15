import type { ReactElement } from "react";
import { site } from "@/content/site";

/**
 * Shared renderer for every build-time Open Graph image.
 *
 * One template, one place to re-key if the brand moves — each route's
 * `opengraph-image.tsx` supplies only its own title/eyebrow. Keyed to the
 * "Ink & Electric Violet" system in `app/globals.css`; the tokens are
 * duplicated as literals below because Satori resolves no CSS variables and
 * never sees the stylesheet.
 */

/** 1200×630 is the size every major platform crops against. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#08080f";
const INK_2 = "#101020";
const ACCENT_FROM = "#4f46e5";
const ACCENT_MID = "#7c3aed";
const ACCENT_TO = "#a855f7";
const TEXT = "#f4f4f8";
const TEXT_DIM = "#9a9ab0";

/** Longer titles would overflow the fixed canvas, so they clamp with an ellipsis. */
const TITLE_MAX = 78;

export function ogImage({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
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
              backgroundImage: `linear-gradient(135deg, ${ACCENT_FROM}, ${ACCENT_TO})`,
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {site.logoLetter}
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
                color: ACCENT_TO,
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
            borderTop: `1px solid #24243a`,
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
