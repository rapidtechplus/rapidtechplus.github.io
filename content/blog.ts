/**
 * Blog / Insights collection. Slug-keyed post metadata for the `/blog` index
 * (and the future `/blog/[slug]` post pages in Phase H). Static, no CMS — real
 * posts replace these as they are written.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-ai-agents-in-production",
    title: "Shipping AI agents that actually hold up in production",
    excerpt:
      "What it takes to move an AI agent from a convincing demo to a dependable system — guardrails, evaluation, and the boring reliability work that matters.",
    category: "AI",
    date: "2026-06-18",
    readingTime: "8 min read",
  },
  {
    slug: "rag-that-doesnt-hallucinate",
    title: "Building RAG that grounds answers in your own data",
    excerpt:
      "A practical look at retrieval pipelines: chunking, embeddings, and the retrieval quality checks that keep responses honest.",
    category: "AI",
    date: "2026-05-30",
    readingTime: "6 min read",
  },
  {
    slug: "why-typescript-everywhere",
    title: "Why we run TypeScript across the whole stack",
    excerpt:
      "End-to-end type safety changes how teams ship. Here's how a shared type layer reduces bugs and speeds up delivery.",
    category: "Web Development",
    date: "2026-05-12",
    readingTime: "5 min read",
  },
  {
    slug: "static-sites-that-scale",
    title: "Static-first architecture that still scales",
    excerpt:
      "How a statically-exported Next.js site stays fast, cheap, and secure — and where to draw the line before you need a server.",
    category: "Web Development",
    date: "2026-04-27",
    readingTime: "7 min read",
  },
  {
    slug: "design-systems-that-last",
    title: "Design systems that survive the second year",
    excerpt:
      "A class-driven, token-based approach to UI that keeps a product visually coherent as it grows.",
    category: "Product Engineering",
    date: "2026-04-09",
    readingTime: "6 min read",
  },
  {
    slug: "from-idea-to-launch-in-weeks",
    title: "From idea to launch in weeks: how our process works",
    excerpt:
      "The four-phase engagement model we use to move from a first conversation to a live, production product.",
    category: "Product Engineering",
    date: "2026-03-22",
    readingTime: "5 min read",
  },
];
