import Link from "next/link";
import {
  footerColumns,
  site,
  socialLinks,
  type NavLink,
  type SocialLink,
} from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { NewsletterForm } from "@/components/newsletter";

function FooterLink({ link }: { link: NavLink }) {
  if (link.soon) {
    return (
      <span className="foot-soon" aria-disabled>
        {link.label}
        <span className="soon-pill">Soon</span>
      </span>
    );
  }
  if (link.href.startsWith("/")) {
    return <Link href={link.href}>{link.label}</Link>;
  }
  return <a href={link.href}>{link.label}</a>;
}

/** Inline brand glyphs for the social row — no icon runtime dependency. */
const SOCIAL_ICONS: Record<SocialLink["icon"], React.ReactNode> = {
  github: (
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45C23.2 24 24 23.2 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
  ),
  x: (
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
  ),
  email: (
    <path d="M2.25 5.25h19.5c.41 0 .75.34.75.75v12c0 .41-.34.75-.75.75H2.25a.75.75 0 0 1-.75-.75V6c0-.41.34-.75.75-.75Zm1.02 1.65 8.73 6.11 8.73-6.11H3.27ZM21 8.02l-8.57 6a.75.75 0 0 1-.86 0L3 8.02V17.25h18V8.02Z" />
  ),
};

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = site;

  return (
    <footer className="footer">
      <div className="container-full footer-shell container">
        {/* Masthead — brand lockup + newsletter capture spanning the full width. */}
        <div className="footer-masthead">
          <div className="foot-brand">
            <Link className="brand brand-lockup" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="logo"
                src="/logo.svg"
                alt=""
                width={40}
                height={40}
              />
              <span className="brand-text">
                <span className="brand-name">{site.name}</span>
                <span className="brand-slogan">{site.slogan}</span>
              </span>
            </Link>
            <p className="foot-tagline">{site.tagline}</p>
            <div className="foot-social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    focusable="false"
                    width={18}
                    height={18}
                  >
                    {SOCIAL_ICONS[s.icon]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <NewsletterForm />
        </div>

        {/* Main — link columns on the left, contact aside on the right. */}
        <div className="footer-main">
          <div className="footer-cols">
            {footerColumns.map((col) => (
              <div key={col.title} className="foot-col">
                <h4>{col.title}</h4>
                <div className="foot-links">
                  {col.links.map((link) => (
                    <FooterLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="footer-contact" aria-label="Contact details">
            <div className="foot-contact-block">
              <h4>Sales</h4>
              <p className="foot-contact-name">{contact.salesName}</p>
              <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
            </div>
            <div className="foot-contact-block">
              <h4>Careers &amp; HR</h4>
              <p className="foot-contact-name">{contact.hrName}</p>
              <a href={`mailto:${contact.hrEmail}`}>{contact.hrEmail}</a>
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </div>
            <div className="foot-contact-block">
              <h4>Location</h4>
              <p className="foot-contact-address">{contact.address}</p>
            </div>
          </aside>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. {site.footerNote}
          </span>
          <span className="foot-theme">
            <span className="foot-theme-label">Theme</span>
            <ThemeToggle />
          </span>
        </div>
      </div>
    </footer>
  );
}
