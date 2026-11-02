import type { Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const viewport: Viewport = {
  themeColor: "#f6f8fb",
};

/**
 * Layout for every live route. A route group (no URL segment) so the live
 * site's stylesheet and chrome load only here — design previews such as `/v2`
 * sit beside this group with their own layout and never inherit either.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
