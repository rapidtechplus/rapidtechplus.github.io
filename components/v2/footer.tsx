import { CONTACT_HREF } from "@/config/site";
import { site } from "@/content/site";
import { documentHref } from "@/lib/document-href";
import { RisingMark } from "./logo";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI development", href: "/services/ai-development" },
      { label: "SaaS development", href: "/services/saas-development" },
      { label: "Web development", href: "/services/web-development" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Case studies", href: "/case-studies" },
      { label: "About us", href: "/about" },
      { label: "Our process", href: "/our-process" },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
];

/** v2 footer. Links leave the preview for live pages, so they load a new document. */
export function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-container v2-footer-top">
        <div className="v2-footer-brand">
          <span className="v2-brand">
            <RisingMark id="footer" size={32} />
            <span>
              Rapid Tech <span className="v2-brand-plus">Plus</span>
            </span>
          </span>
          <p>
            A senior software studio building AI-native products, SaaS platforms
            and custom systems for teams worldwide.
          </p>
        </div>
        <div className="v2-footer-cols">
          {columns.map((col) => (
            <nav
              key={col.title}
              className="v2-footer-col"
              aria-label={col.title}
            >
              <h2>{col.title}</h2>
              {col.links.map((l) => (
                <a key={l.href} href={documentHref(l.href)}>
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
          <div className="v2-footer-col">
            <h2>Get in touch</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
      <div className="v2-container v2-footer-bottom">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
