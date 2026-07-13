# Coding Standards

Conventions every change must follow. Read with
[`project-structure.md`](./project-structure.md) (where files live) and
[`../architecture.md`](../architecture.md) (rendering model).

---

## Language & typing

- **TypeScript strict** everywhere. No `any` — use precise types, `unknown` with
  narrowing, or generics.
- Prefer `type` aliases for content shapes; export them next to the data
  (`export type NavItem = ...` in `content/site.ts`).
- Use `as const` for static content objects to preserve literal types.
- No non-null assertions (`!`) unless provably safe and commented.

## Components

- **Named exports, PascalCase** for components (`export function ThemeToggle()`).
  Route files are the exception — Next requires a **default export**.
- Default to **server components**. Add `"use client"` only for state, effects,
  browser APIs, or event handlers, and push it to the smallest child possible.
- Keep components small and single-purpose. If a `page.tsx` exceeds ~150 lines of
  JSX, extract sections into `components/sections/`.
- Primitives in `ui/` are style-only and content-free (shadcn/ui pattern: `cva`
  variants + `Slot`/`asChild`).

## Content & data

- **Content never lives in components.** All copy, lists, and company details go
  in `content/site.ts`; components consume them. This keeps verification facts
  (name, email) in one place.
- Shared logic → `lib/`. Shared constants (when they appear) → `config/`.

## Imports

- Use the `@/*` alias for all internal imports — no `../../..` chains.
- Order: external packages → `@/` internal → relative. Prettier + ESLint enforce.

## Styling

- Reference **design tokens** (`var(--bg)`, Tailwind theme vars), never raw hex.
- Component classes are kebab-case and semantic (`.card`, `.cta-banner`).
- Mobile-first; verify at desktop, ≤900px, and ≤640px.

## Static-export rules

Every addition must survive `output: "export"`: no route handlers, server
actions, middleware, or runtime fetching. Dynamic lists use
`generateStaticParams` from `content/`. Images use `next/image` with
`unoptimized`, or plain `<img>`.

## Naming

| Thing           | Convention                      |
| --------------- | ------------------------------- |
| Files           | kebab-case (`theme-toggle.tsx`) |
| Route folders   | lowercase, match URL            |
| Components      | PascalCase, named               |
| Content objects | camelCase (`homeServices`)      |
| CSS classes     | kebab-case, semantic            |
| CSS tokens      | `--kebab-case`                  |

## Formatting & hooks

- **Prettier** is the single source of formatting truth — don't hand-format.
- **ESLint** (flat config) must pass with zero errors.
- **Husky + lint-staged** run lint/format on staged files pre-commit; never
  bypass with `--no-verify`.

## Commits

Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`). One
logical group of related work per commit/PR — no mixing unrelated changes.

## Definition of Done

Files in the right folder, named per convention, content externalized, imports
via `@/`, and `npm run lint && npm run typecheck && npm run build` all green.
