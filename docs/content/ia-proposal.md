# Information Architecture Proposal — Rapid Tech Plus (AI-first)

**Status:** DRAFT — awaiting approval. No implementation until this is signed off
(per the IA brief and `CLAUDE.md` workflow).

**Positioning decided:** AI-first product company. Named products (Planix, Rocket
Intelligence Engine, WhatsApp Business OS, KidzoRides) are real; copy to be
supplied by the owner. This proposal defines the structure those pages plug into.

---

## 1. Reference analysis — techalmas.com

Analysed for _how a mature IT company organises information_, not to copy.

**Strengths**

- Single, confident story arc on the home page: hero → what we do → stats →
  services grid → process → domain expertise → work/portfolio → CTA.
- **Services** expressed as a scannable grid of 8 concrete offerings (Web & CMS,
  Custom Software, Marketing, MVP, White Label, UI/UX, E-commerce, Mobile App).
- **Domains/industries** treated as a first-class section (Real Estate,
  Healthcare, E-commerce, EdTech, Travel, Supply Chain, Media, ERP, Finance) —
  signals credibility across verticals.
- Explicit **6-step process** (Analysis → Architecture → Development → Testing →
  Deployment → Maintenance) builds trust.
- Strong **portfolio/proof** presence.

**Weaknesses / gaps we can beat**

- Flat structure — little true navigational hierarchy; discovery relies on
  scrolling one long page rather than a scalable menu system.
- **No product story** — it is a pure services shop; there is no concept of owned
  products. This is exactly where Rapid Tech Plus differentiates.
- **AI is a slogan, not a structure** ("AI-Powered Innovation" in the hero) — no
  dedicated AI services or Solutions IA behind it.
- Repetitive content blocks; thin Company/Resources depth (no clear About,
  Careers, Culture, blog/case-study hubs surfaced in nav).

**What we take (as principles, not content):** services-as-grid, industries as a
first-class section, an explicit process, and prominent proof. **Where we win:**
a real Products pillar, a genuine AI/Solutions IA, and a scalable multi-level
menu + comprehensive footer instead of one long scroll.

---

## 2. Proposed sitemap

Legend: **●** live page (v1) · **◐** hub exists, detail routes added as content
lands · **○** coming-soon (rendered as non-clickable `soon` pill, no dead links).

```
/                              ● Home
/services                      ● Services (hub; grouped Development/Engineering/Experience)
  /services/ai-development     ◐   AI Development
  /services/saas-development   ◐   SaaS Development
  /services/custom-software    ◐   Custom Software
  /services/enterprise         ◐   Enterprise Software
  /services/web-apps           ◐   Web Applications
  /services/mobile-apps        ◐   Mobile Applications
  /services/api-development     ◐   API Development
  /services/cloud-devops       ◐   Cloud & DevOps
  /services/ui-ux              ◐   UI/UX Design
  /services/product-design     ◐   Product Design
  /services/design-systems     ◐   Design Systems
/solutions                     ● Solutions (hub) — NEW top-level pillar
  /solutions/ai-agents         ◐   AI Agents
  /solutions/workflow-automation ◐ Workflow Automation
  /solutions/llm-integration   ◐   LLM Integration
  /solutions/rag               ◐   RAG Solutions
  /solutions/business-automation ◐ Business Automation
  /solutions/digital-transformation ◐ Digital Transformation
/products                      ● Products (hub)
  /products/planix             ◐   Planix                       (copy TBD by owner)
  /products/rocket-intelligence-engine ◐ Rocket Intelligence Engine (copy TBD)
  /products/whatsapp-business-os ◐ WhatsApp Business OS          (copy TBD)
  /products/kidzorides         ◐   KidzoRides                    (copy TBD)
  /products/open-source        ◐   Open Source Projects
/industries                    ● Industries (hub)
  …/healthcare /finance /retail /logistics /manufacturing /education /real-estate ◐
/technologies                  ● Technologies (hub; Frontend/Backend/AI/Cloud/Mobile/DevOps/Data)
/company                       ● Company hub  (or keep /about as canonical)
  /about                       ●   About
  /process                     ◐   Our Process
  /culture                     ◐   Culture
  /careers                     ○   Careers (coming soon)
  /contact                     ●   Contact
/resources                     ◐ Resources hub
  /faqs (or /#faq)             ●   FAQs
  /blog                        ○   Blog (coming soon)
  /case-studies                ○   Case Studies (coming soon)
  /docs                        ○   Documentation (coming soon)
/privacy  /terms  /cookies(○)  ● Legal
/404                           ● Not found
```

**v1 real routes** stay small (Home, Services, Solutions, Products, Industries,
Technologies, About, Process, Contact, Privacy, Terms, 404). Everything deeper is
a hub anchor today and gains its own route as content arrives — the menu data
model doesn't change when it does.

---

## 3. Header navigation

Premium sticky header: transparent over hero → blur/solid on scroll, smooth
transitions, responsive (mega panels on desktop, tap-to-expand accordions on
mobile), keyboard + `aria-expanded` accessible, search-ready slot reserved. Same
data-driven `megaMenu` model already in `content/site.ts`, extended.

**Top level:** Home · Services ▾ · Solutions ▾ · Products ▾ · Industries ▾ ·
Technologies ▾ · Company ▾ · Resources ▾ · **Contact** (button)

### Mega-menu contents

**Services ▾** (3 columns, each with an "All services" overview link → `/services`)

- **Development** — AI Development · SaaS Development · Custom Software · Enterprise Software
- **Engineering** — Web Applications · Mobile Applications · API Development · Cloud & DevOps
- **Experience** — UI/UX Design · Product Design · Design Systems

**Solutions ▾** (2 columns → `/solutions`)

- **AI** — AI Agents · LLM Integration · RAG Solutions
- **Automation** — Workflow Automation · Business Automation · Digital Transformation

**Products ▾** (2 columns → `/products`) — featured item styling for flagships

- **Products** — Planix · Rocket Intelligence Engine · WhatsApp Business OS · KidzoRides
- **More** — Open Source Projects

**Industries ▾** (2 columns → `/industries`)

- Healthcare · Finance · Retail · Logistics — Manufacturing · Education · Real Estate

**Technologies ▾** (mega, grouped → `/technologies`)

- Frontend · Backend · AI · Cloud · Mobile · DevOps · Data

**Company ▾** (→ `/about`)

- About · Our Process · Culture · Careers _(soon)_ · Contact

**Resources ▾** (→ `/resources` or `/#faq`)

- FAQs · Blog _(soon)_ · Case Studies _(soon)_ · Documentation _(soon)_

---

## 4. Footer hierarchy

Comprehensive multi-column hub so the whole site is reachable from the footer.

| Company          | Services            | Solutions           | Products                   | Technologies | Resources              | Legal                  |
| ---------------- | ------------------- | ------------------- | -------------------------- | ------------ | ---------------------- | ---------------------- |
| About            | AI Development      | AI Agents           | Planix                     | Next.js      | Blog _(soon)_          | Privacy Policy         |
| Our Process      | SaaS Development    | Workflow Automation | Rocket Intelligence Engine | React        | Case Studies _(soon)_  | Terms of Service       |
| Careers _(soon)_ | Enterprise Software | RAG Solutions       | WhatsApp Business OS       | TypeScript   | Documentation _(soon)_ | Cookie Policy _(soon)_ |
| Culture _(soon)_ | Web Development     | Cloud Solutions     | KidzoRides                 | Node.js      | FAQs                   |                        |
| Contact          | Mobile Development  | Business Automation | Open Source                | AI · Cloud   |                        |                        |

**Footer bottom bar:** logo + slogan · copyright "© {year} Rapid Tech Plus" ·
social/GitHub org links · theme switcher · "Built with Next.js & TypeScript" badge.

---

## 5. Hero (structure only — original copy at build)

Bold headline + concise subhead · primary CTA (Start a project → `/contact`) +
secondary (Explore products → `/products`) · AI-inspired animated background
(reuse `components/background.tsx`) · trust row (stat counters) · quick links into
Services & Products. No wording/layout borrowed from any reference.

---

## 6. What changes vs. the current build

- **New top-level pillar: Solutions** (AI Agents, RAG, LLM, automation).
- **Services** re-grouped Development / Engineering / Experience; **AI Development**
  promoted to the lead offering.
- **Products** become named/real (Planix, RIE, WhatsApp Business OS, KidzoRides)
  with per-product hub routes; owner supplies copy.
- **Industries** switch to the 7 named verticals.
- **Company** and **Resources** gain fuller sub-structures.
- Data model (`megaMenu`, `footerColumns`) is extended, not rearchitected — the
  Nav/Footer components already render from data and scale without edits.

---

## 7. Open questions for owner

1. **Canonical Company route:** keep `/about` as the hub, or introduce `/company`?
   (Recommendation: keep `/about` to avoid churn.)
2. **Solutions vs. Services overlap:** "Business Automation" appears in both the
   brief's Services and Solutions. Recommendation: keep it under **Solutions**
   only; Services stays build-focused.
3. **Product copy:** confirm a one-line description + category for each of Planix,
   Rocket Intelligence Engine, WhatsApp Business OS, KidzoRides so hubs aren't
   placeholder-only.
4. **Resources hub:** single `/resources` landing, or keep FAQs on the home page
   anchor (`/#faq`) until blog/case-studies exist?

```

```
