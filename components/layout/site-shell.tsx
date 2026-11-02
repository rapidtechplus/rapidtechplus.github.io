import type { ReactNode } from "react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Background } from "@/components/background";
import { PointerSheen } from "@/components/pointer-sheen";

/**
 * The live site's page chrome: theme, animated background, header and footer.
 *
 * Rendered by `app/(site)/layout.tsx` for every live route, and by the root
 * `app/not-found.tsx` — Next renders the global 404 inside the root layout
 * only, so it has to opt into this shell itself to keep the header and footer.
 * Routes outside the `(site)` group (e.g. the `/v2` design preview) bring
 * their own shell instead.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    // Light-only for now (owner decision, Phase 39): `forcedTheme` pins the
    // class and ignores any stored preference. The dark token set and
    // `ThemeToggle` stay in the codebase so dark can be re-enabled by dropping
    // this prop and restoring the footer switch.
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <Background />
      <PointerSheen />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
