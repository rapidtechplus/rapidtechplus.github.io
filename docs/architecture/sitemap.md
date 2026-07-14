# Sitemap (recommended)

Derived from the [ACKPlus competitive review](../design/ackplus-analysis.md) and
the [2026-07 project audit](../audit/project-audit-2026-07.md). Legend:
✅ built · 🟡 hub built, detail pages pending · ⛔ not built (advertised in nav).

See also the human-readable in-app sitemap at `/sitemap` and the content-team
sitemap at [`docs/content/sitemap.md`](../content/sitemap.md).

```
/
├── about                         ✅
│   ├── story                     ⛔ (Phase I)
│   ├── leadership                ⛔ (Phase I)
│   └── culture                   ⛔ (Phase I)
├── services                      ✅ hub
│   └── [slug]                    🟡 (Phase B — 23 services modelled)
│       ├── ai-agents · llm-integration · rag-solutions · mcp-servers
│       ├── ai-automation · ai-chatbots
│       ├── react · nextjs · angular · vue
│       ├── nodejs · nestjs · laravel · dotnet
│       ├── aws · azure · docker · kubernetes · ci-cd
│       └── flutter · react-native · android · ios
├── hire                          ⛔ hub (Phase C)
│   └── [slug]                    ⛔ (Phase C — 28 roles modelled)
├── solutions                     ✅ hub
│   └── [slug]                    ⛔ (Phase E — 7 solutions modelled)
├── industries                    ✅ hub
│   └── [slug]                    ⛔ (Phase D — 10 industries modelled)
├── products                      ✅ hub
│   └── [slug]                    ⛔ (Phase F — 6 product types modelled)
├── case-studies                  ✅ hub
│   └── [slug]                    ⛔ (Phase G — 6 studies modelled)
├── technologies                  ✅
├── blog                          ✅ index
│   ├── [slug]                    ⛔ (Phase H — 6 posts modelled)
│   ├── category/[slug]           ⛔ (Phase H)
│   └── tag/[slug]                ⛔ (Phase H)
├── careers                       ⛔ (Phase I — direct ACKPlus gap)
├── resources                     ⛔
│   ├── faq                       ⛔ (Phase J)
│   ├── process                   ⛔ (Phase J)
│   └── open-source               ⛔ (Phase J)
├── why-rapid-tech-plus           ⛔ (Phase J)
├── contact                       ✅ (add response promise + FAQ)
├── sitemap                       ✅ (human-readable)
├── privacy                       ✅
├── terms                         ✅
├── cookies                       ✅
├── disclaimer                    ⛔ (Phase K)
└── 404 / 500 / coming-soon       ✅ 404 · ⛔ 500/coming-soon (Phase K)
```

**Priority order to close the ACKPlus gap:** Phase B (service detail) → Phase D
(industries) → Phase G (case-study detail) → Phase C (hire) → Phase I (careers/
company) → Phase H (blog) → Phase E/F (solutions/products) → Phase J/K
(resources/legal).
