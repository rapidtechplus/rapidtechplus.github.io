import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PageHero, CtaBanner } from "@/components/sections/pieces";
import { blogPosts } from "@/content/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd } from "@/lib/structured-data";

const description =
  "Engineering notes from Rapid Tech Plus on AI, web development, and product engineering — how we build reliable, modern software.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: "/blog" },
};

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Blog/Article markup waits for Phase H — posts have no routes yet. */}
      <JsonLd
        data={webPageJsonLd({ name: "Insights", description, path: "/blog" })}
      />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Insights"
        title={
          <>
            Notes from our <span className="grad-text">engineering desk</span>
          </>
        }
        lead="Practical writing on AI, web development, and product engineering — what we're learning as we design and ship modern software."
      />

      <section style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
        <div className="container-wide container">
          {/* Featured post */}
          <Reveal className="post post-featured">
            <div className="post-meta">
              <span className="post-cat">{featured.category}</span>
              <span>{dateFmt.format(new Date(featured.date))}</span>
              <span>{featured.readingTime}</span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <Link className="post-more" href="/blog">
              Read more →
            </Link>
          </Reveal>

          <div
            className="post-grid"
            style={{ marginTop: "clamp(24px,3vw,40px)" }}
          >
            {rest.map((post, i) => (
              <Reveal className="post" key={post.slug} delay={i * 0.05}>
                <div className="post-meta">
                  <span className="post-cat">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="post-more" href="/blog">
                  Read more →
                </Link>
              </Reveal>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "clamp(32px,4vw,48px)",
              color: "var(--text-dim)",
              fontSize: "0.92rem",
            }}
          >
            More articles are on the way — individual posts will get their own
            pages as we publish.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Want to talk through a build?"
        body="Have a project in mind? Tell us what you're building and we'll help you scope it."
      />
    </>
  );
}
