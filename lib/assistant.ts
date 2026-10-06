/**
 * Guided assistant — static, deterministic Q&A over a page's own content.
 *
 * Not an LLM: the site is a static export with no backend (CLAUDE.md →
 * Project Constraints), so answers are authored content selected by keyword
 * matching. That makes every answer accurate by construction — it can only
 * repeat what the page already says — and anything it cannot match is handed
 * to a human via the contact page.
 *
 * Pure functions only; the UI lives in `components/assistant/`.
 */

export type AssistantLink = { label: string; href: string };

export type AssistantTopic = {
  id: string;
  /** Suggestion-chip text; also the user's message when the chip is used. */
  label: string;
  /** Lower-case terms that route free-text questions to this topic. */
  keywords: string[];
  /** Answer paragraphs or bullet lines (lines starting "• " render as list). */
  answer: string[];
  links?: AssistantLink[];
};

const STOPWORDS = new Set(
  "a an the and or of to in on for with is are do does you your we our it this that what which how can i my me about any have has be will".split(
    " ",
  ),
);

/** Lower-cases, strips punctuation, drops stopwords and very short tokens. */
export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^[.-]+|[.-]+$/g, ""))
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

/**
 * Scores each topic by keyword hits (exact token = 2, prefix match on 4+
 * chars = 1, so "price" finds "pricing") and returns the best one, or null
 * when nothing clears the threshold.
 */
export function matchTopic(
  query: string,
  topics: readonly AssistantTopic[],
): AssistantTopic | null {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  let best: AssistantTopic | null = null;
  let bestScore = 0;
  for (const topic of topics) {
    let score = 0;
    for (const token of tokens) {
      for (const kw of topic.keywords) {
        if (kw === token) score += 2;
        else if (
          token.length >= 4 &&
          kw.length >= 4 &&
          (kw.startsWith(token.slice(0, 4)) || token.startsWith(kw.slice(0, 4)))
        )
          score += 1;
      }
    }
    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  }
  return bestScore >= 2 ? best : null;
}

type Feature = { title: string; body: string };

/** A template-specific section the assistant should be able to answer from. */
export type ExtraTopic = {
  id: string;
  label: string;
  keywords: string[];
  items: readonly Feature[];
  /** Optional sentence shown before the bullet list. */
  intro?: string;
};

/**
 * Inputs for a detail page's topic set — everything is content already on
 * the page. Shared by every detail template (services, AI, hire, technology,
 * solutions, industries, products); omit what a page doesn't have.
 */
export type PageKnowledge = {
  label: string;
  overview?: string;
  /** "What's included" — capabilities, deliverables, or features. */
  included: readonly Feature[];
  /** Chip text for `included`; defaults to "What's included in {label}?". */
  includedLabel?: string;
  problems?: readonly Feature[];
  technologies?: readonly string[];
  benefits?: readonly Feature[];
  process?: readonly Feature[];
  /** Template-specific sections (e.g. hiring models, projects). */
  extras?: readonly ExtraTopic[];
  caseStudies?: readonly { title: string; href: string }[];
  faqs?: readonly { q: string; a: string }[];
  contactHref: string;
};

const bullets = (items: readonly Feature[]) =>
  items.map((i) => `• ${i.title} — ${i.body}`);

/** Builds the assistant's topics for one detail page. */
export function buildPageTopics(k: PageKnowledge): AssistantTopic[] {
  const topics: AssistantTopic[] = [
    {
      id: "included",
      label: k.includedLabel ?? `What's included in ${k.label}?`,
      keywords: [
        "included",
        "include",
        "offer",
        "deliver",
        "scope",
        "services",
        "what",
        "capabilities",
        "provide",
        "overview",
        "features",
      ],
      answer: [...(k.overview ? [k.overview] : []), ...bullets(k.included)],
    },
  ];

  if (k.problems?.length) {
    topics.push({
      id: "problems",
      label: "What problems does it solve?",
      keywords: [
        "problem",
        "problems",
        "solve",
        "challenge",
        "pain",
        "issue",
        "stuck",
        "why",
      ],
      answer: bullets(k.problems),
    });
  }
  for (const extra of k.extras ?? []) {
    if (!extra.items.length) continue;
    topics.push({
      id: extra.id,
      label: extra.label,
      keywords: extra.keywords,
      answer: [...(extra.intro ? [extra.intro] : []), ...bullets(extra.items)],
    });
  }
  if (k.technologies?.length) {
    topics.push({
      id: "stack",
      label: "Which technologies do you use?",
      keywords: [
        "technology",
        "technologies",
        "stack",
        "tools",
        "framework",
        "language",
        "tech",
        "platform",
        ...k.technologies.flatMap((t) => tokenize(t)),
      ],
      answer: [
        `For ${k.label} we typically work with: ${k.technologies.join(", ")}.`,
        "We pick the stack to fit your problem and your team, not the other way round.",
      ],
    });
  }
  if (k.process?.length) {
    topics.push({
      id: "process",
      label: "How does the process work?",
      keywords: [
        "process",
        "steps",
        "start",
        "work",
        "approach",
        "method",
        "agile",
        "phases",
        "begin",
        "engagement",
        "onboarding",
      ],
      answer: bullets(k.process),
    });
  }
  if (k.benefits?.length) {
    topics.push({
      id: "benefits",
      label: "What results can I expect?",
      keywords: [
        "benefit",
        "benefits",
        "results",
        "outcome",
        "value",
        "roi",
        "gain",
        "expect",
      ],
      answer: bullets(k.benefits),
    });
  }
  if (k.caseStudies?.length) {
    topics.push({
      id: "proof",
      label: "Do you have case studies?",
      keywords: [
        "case",
        "studies",
        "example",
        "examples",
        "portfolio",
        "proof",
        "clients",
        "projects",
      ],
      answer: ["Here is representative work related to this page:"],
      links: k.caseStudies.map((c) => ({ label: c.title, href: c.href })),
    });
  }
  // Commercial questions are always a human conversation — never invent numbers.
  topics.push({
    id: "pricing",
    label: "How much does it cost?",
    keywords: [
      "cost",
      "price",
      "pricing",
      "budget",
      "quote",
      "estimate",
      "rate",
      "rates",
      "timeline",
      "long",
      "time",
      "duration",
      "weeks",
      "fee",
      "hourly",
    ],
    answer: [
      "Cost and timeline depend on scope, so we don't publish fixed prices.",
      "Share a few details and we'll come back with a scoped estimate — the first consultation is free.",
    ],
    links: [{ label: "Get a quote", href: k.contactHref }],
  });

  k.faqs?.forEach((f, i) => {
    topics.push({
      id: `faq-${i}`,
      label: f.q,
      keywords: tokenize(f.q),
      answer: [f.a],
    });
  });

  return topics;
}
