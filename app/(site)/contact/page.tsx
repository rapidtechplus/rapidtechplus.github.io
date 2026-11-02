import type { Metadata } from "next";
import { Ico } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  FaqAccordion,
  SectionHead,
} from "@/components/sections/pieces";
import { ContactForm } from "@/components/contact-form";
import { site, contactFaqs } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd, faqPageJsonLd } from "@/lib/structured-data";

const description =
  "Get in touch with Rapid Tech Plus. Email, call, or send us a message to discuss your software project, product idea, or engineering needs.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
};

/** A single "way to reach us" card: icon, label, value, and a short line. */
type Method = {
  icon: string;
  label: string;
  value: string;
  href?: string;
  note: string;
};

const { contact } = site;

const methods: Method[] = [
  {
    icon: "mail",
    label: "General & sales",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "New projects, quotes, and partnership enquiries.",
  },
  {
    icon: "life-buoy",
    label: "Product support",
    value: site.supportEmail,
    href: `mailto:${site.supportEmail}`,
    note: "Help for existing clients and live products.",
  },
  {
    icon: "briefcase",
    label: "Careers",
    value: contact.hrEmail,
    href: `mailto:${contact.hrEmail}`,
    note: "Join the team — we're always meeting good people.",
  },
  {
    icon: "phone",
    label: "Call us",
    value: contact.phone,
    href: `tel:${contact.phoneHref}`,
    note: "Talk it through during business hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: "ContactPage",
          name: "Contact",
          description,
          path: "/contact",
        })}
      />
      <JsonLd data={faqPageJsonLd(contactFaqs)} />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="grad-text">your project</span>
          </>
        }
        lead="Whether you arrive with a fully scoped brief or just the seed of an idea, we'd love to hear it. Tell us where you're headed and we'll help you map the fastest route there — every message reaches a real engineer, not a ticket queue."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container">
          <div className="contact-grid">
            {/* Ways to reach us */}
            <Reveal className="contact-info">
              <span className="eyebrow">Ways to reach us</span>
              <h2 className="contact-info-title">Start a conversation</h2>
              <p className="contact-info-lead">
                Pick whichever channel suits you. Prefer to write? The form
                sends straight to our inbox — every message reaches a real
                engineer, not a ticket queue.
              </p>
              <p className="contact-promise">
                <span className="cp-dot" aria-hidden />
                {/* One flex item, not three: the bare text nodes either side of
                    the <strong> would each become their own flex child and
                    squeeze into separate columns on a narrow screen. */}
                <span className="cp-text">
                  We reply within <strong>one business day</strong> — and the
                  first consultation is free.
                </span>
              </p>

              <div className="contact-methods">
                {methods.map((m) => {
                  const body = (
                    <>
                      <span className="cm-ico" aria-hidden>
                        <Ico name={m.icon} size={20} />
                      </span>
                      <span className="cm-body">
                        <span className="cm-label">{m.label}</span>
                        <span className="cm-value">{m.value}</span>
                        <span className="cm-note">{m.note}</span>
                      </span>
                    </>
                  );
                  return m.href ? (
                    <a key={m.label} className="contact-method" href={m.href}>
                      {body}
                    </a>
                  ) : (
                    <div key={m.label} className="contact-method">
                      {body}
                    </div>
                  );
                })}
              </div>

              {/* Location + hours — moved here from the footer. */}
              <div className="contact-place panel">
                <span className="eyebrow">Where to find us</span>
                <div className="cp-row">
                  <span className="cp-ico" aria-hidden>
                    <Ico name="map-pin" size={20} />
                  </span>
                  <div>
                    <div className="cp-label">Studio</div>
                    <p className="cp-value">{contact.address}</p>
                  </div>
                </div>
                <div className="cp-row">
                  <span className="cp-ico" aria-hidden>
                    <Ico name="clock" size={20} />
                  </span>
                  <div>
                    <div className="cp-label">Working hours</div>
                    <p className="cp-value">{site.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Message form */}
            <Reveal className="panel contact-form-panel">
              <span className="eyebrow">Send a message</span>
              <h2 className="contact-form-title">Tell us what you need</h2>
              <p className="contact-form-lead">
                Share a little about your goals, timeline, or the problem
                you&apos;re solving. The more you tell us, the sharper our first
                reply.
              </p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact-stage FAQ — response time, demos, support, NDAs. */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Before you reach out" title="Contact questions">
            The practical questions we hear most before a first conversation.
          </SectionHead>
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
