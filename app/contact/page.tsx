import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rapid Tech Plus. Contact us by email to discuss your software project, product idea, or engineering needs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>
            Let&apos;s talk about{" "}
            <span className="grad-text">your project</span>
          </h1>
          <p>
            Reach out with your idea, question, or requirement. We typically
            respond within one business day.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container">
          <div className="contact-grid">
            {/* Details */}
            <Reveal>
              <span className="eyebrow">Company details</span>
              <h2 style={{ fontSize: "1.6rem", marginBottom: 24 }}>
                {site.name}
              </h2>

              <div className="contact-item">
                <span className="ico">✉</span>
                <div>
                  <div className="label">Email</div>
                  <a className="val" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="ico">◎</span>
                <div>
                  <div className="label">Support</div>
                  <a className="val" href={`mailto:${site.supportEmail}`}>
                    {site.supportEmail}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="ico">⌖</span>
                <div>
                  <div className="label">Location</div>
                  <span className="val">{site.location}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="ico">◷</span>
                <div>
                  <div className="label">Hours</div>
                  <span className="val">{site.hours}</span>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="panel">
              <span className="eyebrow">Send a message</span>
              <h2 style={{ fontSize: "1.4rem", marginBottom: 20 }}>
                Tell us what you need
              </h2>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
