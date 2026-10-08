"use client";

import Link from "next/link";

/**
 * Root-level error boundary (HTTP 500 surface). Next renders this in place of
 * the root layout when an error is thrown above `app/layout.tsx`, so it must
 * supply its own `<html>`/`<body>` and cannot rely on `globals.css`, the font
 * variables, or the theme provider. Everything here is therefore inlined and
 * theme-aware via `prefers-color-scheme` so it reads correctly in both themes.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          background: "var(--bg)",
          color: "var(--fg)",
          padding: "24px",
        }}
      >
        {/* Scoped theme tokens — no globals.css available in this boundary. */}
        <style>{`
          :root { --bg: #fbfbfd; --fg: #12121a; --dim: #55556a; --accent: #2563eb; --on-accent: #fff; --line: #e6e6ee; }
          @media (prefers-color-scheme: dark) {
            :root { --bg: #0b0f17; --fg: #f4f4fa; --dim: #a5a5bd; --accent: #60a5fa; --on-accent: #0b0f17; --line: #23232f; }
          }
          .ge-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
        `}</style>
        <main style={{ maxWidth: 520, textAlign: "center" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--accent)",
            }}
          >
            Error 500
          </p>
          <h1
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(1.7rem, 5vw, 2.4rem)",
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "var(--dim)",
            }}
          >
            An unexpected error occurred on our end. You can try again, or head
            back to the homepage.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className="ge-btn"
              onClick={() => reset()}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                borderRadius: 10,
                padding: "12px 22px",
                fontSize: "0.98rem",
                fontWeight: 600,
                background: "linear-gradient(180deg, #2563eb, #2563eb)",
                color: "#fff",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              className="ge-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 10,
                padding: "12px 22px",
                fontSize: "0.98rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid var(--line)",
                color: "var(--fg)",
              }}
            >
              Back to home
            </Link>
          </div>
          {error?.digest ? (
            <p
              style={{
                margin: "24px 0 0",
                fontSize: "0.78rem",
                color: "var(--dim)",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
