# Content Strategy

How copy is written, stored, and maintained. Voice and brand facts live in
[`../design/branding.md`](../design/branding.md); page structure in
[`page-outline.md`](./page-outline.md).

---

## Single source of truth

**All copy lives in `content/site.ts`** — nav, footer, services, products,
process, values, stats, and company details. Components consume it; they never
hardcode text. This keeps verification-relevant facts (company name, email,
location) consistent and changeable in one place.

## Voice

- Confident, clear, honest. Describe real capability — no hype or buzzword
  stacking.
- Technical but accessible: credible to engineers, legible to business readers.
- Short sentences, active voice, concrete nouns.
- AI is a **capability, not a claim** — only state what the company genuinely does.

## Structure of copy

- **Eyebrow** — 1–3 words, uppercase, sets context.
- **Heading** — a clear promise or label, not a slogan.
- **Lead** — one or two sentences expanding the heading (~60ch measure).
- **Card body** — one tight sentence; describe the outcome, not a feature list.

Keep paragraphs short; avoid walls of text (a stated design goal in the PRD).

## Consistency rules

- Company name is always **"Rapid Tech Plus"**, written in full.
- Service/product names and descriptions match across Home previews and their
  full pages (`homeServices` ↔ `services`, previews ↔ `products`).
- Contact details come only from the `site` object.

## Verification-critical content

Every deployment must clearly present: company name, what the company does,
contact email, and legal pages (Privacy, Terms) with consistent branding and
canonical URLs. Treat changes to these as high-care edits.

## Growth

- New sections/pages get their content added to `content/site.ts` as typed
  objects (`as const`), then rendered by reused section components.
- When content outgrows a single file, split by domain (e.g.
  `content/services.ts`, `content/products.ts`) while keeping `site` as the
  company-facts source.
- Future dynamic lists (product detail, blog, case studies) are generated at
  build time from local typed data / MDX — never a runtime CMS.

## Editing checklist

- [ ] Copy edited in `content/site.ts`, not in a component.
- [ ] Company name and contact facts unchanged unless intended.
- [ ] Home previews still match their full-page counterparts.
- [ ] Reads well, stays short, avoids hype.
