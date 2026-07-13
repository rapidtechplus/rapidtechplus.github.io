import Link from "next/link";
import { footerColumns, site } from "@/content/site";

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return <Link href={href}>{label}</Link>;
  }
  return <a href={href}>{label}</a>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <span className="logo">{site.logoLetter}</span>
              <span>{site.name}</span>
            </Link>
            <p>{site.tagline}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <div className="foot-links">
                {col.links.map((link) => (
                  <FooterLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
