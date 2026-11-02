import { ArrowRight } from "lucide-react";
import { CONTACT_HREF, CTA_LABEL } from "@/config/site";
import { v2Nav } from "@/content/v2-home";
import { documentHref } from "@/lib/document-href";
import { Brand } from "./logo";
import { V2MobileNav } from "./mobile-nav";
import { V2ThemeToggle } from "./theme-toggle";

/** Sticky, translucent v2 header: brand, in-page nav, theme switch, CTA. */
export function V2Header() {
  const cta = { label: CTA_LABEL, href: documentHref(CONTACT_HREF) };
  return (
    <header className="v2-header">
      <nav className="v2-container v2-nav" aria-label="Primary">
        <Brand id="header" animated />
        <ul className="v2-nav-links">
          {v2Nav.map((l) => (
            <li key={l.href}>
              <a className="v2-nav-link" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="v2-header-actions">
          <V2ThemeToggle />
          <a
            className="v2-btn v2-btn--primary v2-btn--sm v2-header-cta"
            href={cta.href}
          >
            {cta.label}
            <ArrowRight className="v2-btn-icon" size={16} aria-hidden />
          </a>
          <V2MobileNav links={v2Nav} cta={cta} />
        </div>
      </nav>
    </header>
  );
}
