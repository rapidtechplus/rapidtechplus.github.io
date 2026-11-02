import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./v2.css";
import { ThemeProvider } from "@/components/theme-provider";
import { V2Header } from "@/components/v2/header";
import { V2Footer } from "@/components/v2/footer";
import { documentHref } from "@/lib/document-href";

export const metadata: Metadata = {
  title: "Homepage v2 preview",
  description:
    "Preview of the v2 (Orbit+) homepage design for Rapid Tech Plus. Not indexed.",
  alternates: { canonical: "/v2" },
  // Review-only, like /home-preview: hidden from search and left out of the
  // sitemap so it can never compete with the live homepage.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#050b16" },
  ],
};

/**
 * Shell for the v2 design preview. It sits outside the `(site)` route group,
 * so none of the live site's stylesheet or chrome loads here; it brings its
 * own tokens (`v2.css`), header and footer.
 *
 * Theme: its own next-themes instance on `html[data-theme]` with a separate
 * storage key, defaulting to the visitor's system setting. next-themes
 * injects a pre-paint script, so the stored theme applies before first paint
 * (no flash) on this static export.
 */
export default function V2Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      storageKey="rtp-v2-theme"
      defaultTheme="system"
      enableSystem
    >
      <div className="v2-root">
        <a className="v2-skip" href="#v2-main">
          Skip to content
        </a>
        <div className="v2-preview-bar">
          Design preview — v2.{" "}
          <a href={documentHref("/")}>Compare with the live site</a>
        </div>
        <V2Header />
        <main id="v2-main">{children}</main>
        <V2Footer />
      </div>
    </ThemeProvider>
  );
}
