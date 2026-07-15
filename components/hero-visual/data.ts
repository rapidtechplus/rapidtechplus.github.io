/**
 * Deterministic content for the hero console's three panes.
 *
 * Everything here is static and hand-authored (no randomness, no Date, no
 * locale formatting) so the server and client render identical markup — the
 * visual hydrates without drift. Geometry that needs trig is computed in
 * `graph-pane.tsx` and rounded for the same reason.
 */

/** The console's pane tabs, in cycle order. */
export const PANES = [
  { id: "graph", label: "Graph" },
  { id: "code", label: "Code" },
  { id: "deploy", label: "Deploy" },
] as const;

export type PaneId = (typeof PANES)[number]["id"];

/** How long each pane holds before the console advances to the next. */
export const PANE_INTERVAL_MS = 5200;

/* ── Graph pane ──────────────────────────────────────────────────────────── */

export const VW = 640;
export const VH = 320;
export const CX = VW / 2;
export const CY = VH / 2;

/** Tilted orbital rings — rx/ry give the 3-D ellipse, dur drives spin speed. */
export const RINGS = [
  { rx: 104, ry: 38, dur: 26, reverse: false, sats: [0, 128, 232] },
  { rx: 168, ry: 62, dur: 40, reverse: true, sats: [40, 150, 262, 330] },
  { rx: 236, ry: 88, dur: 58, reverse: false, sats: [18, 96, 200, 300] },
];

/** Technology cards that float over the core — corner-anchored so they never
    crowd the center. `pos` maps to a `.hv-chip--*` placement class. */
export const CHIPS = [
  { label: "Next.js", pos: "tl", delay: 0 },
  { label: "Python", pos: "tr", delay: 1.1 },
  { label: "AWS", pos: "bl", delay: 0.6 },
  { label: "PyTorch", pos: "br", delay: 1.7 },
] as const;

/* ── Code pane ───────────────────────────────────────────────────────────── */

/** Syntax token kinds — each maps to a `.hv-t--*` colour class. */
type TokenKind = "kw" | "str" | "fn" | "num" | "com" | "punc" | "prop";
export type Token = [kind: TokenKind | "", text: string];

/** A short, real-looking agent-orchestration snippet. Tokenised by hand rather
    than run through a highlighter — the snippet never changes, so shipping a
    parser to the browser to re-derive a known answer would be dead weight.
 *
 * Every line is kept under ~32 characters on purpose: the pane is only ~280px
 * wide on a 320px phone, and anything longer either clips mid-line or forces a
 * font size too small to read. Widen a line and it will silently truncate. */
export const CODE: Token[][] = [
  [
    ["kw", "const"],
    ["", " pipeline = "],
    ["fn", "orchestrator"],
    ["punc", "({"],
  ],
  [
    ["prop", "  model"],
    ["punc", ":"],
    ["", " "],
    ["str", '"reasoning-v2"'],
    ["punc", ","],
  ],
  [
    ["prop", "  tools"],
    ["punc", ":"],
    ["", " [retrieval, codegen]"],
    ["punc", ","],
  ],
  [
    ["prop", "  budget"],
    ["punc", ": {"],
    ["prop", " latency"],
    ["punc", ":"],
    ["", " "],
    ["str", '"200ms"'],
    ["punc", " },"],
  ],
  [["punc", "});"]],
  [],
  [
    ["kw", "await"],
    ["", " pipeline."],
    ["fn", "run"],
    ["punc", "("],
    ["", "task"],
    ["punc", ");"],
  ],
  [["com", "// → shipped · p95 42ms"]],
];

/* ── Deploy pane ─────────────────────────────────────────────────────────── */

export const DEPLOY_STATS = [
  { label: "p95 latency", value: "42ms", delta: "−18%", trend: "down" },
  { label: "uptime", value: "99.98%", delta: "30d", trend: "flat" },
  { label: "deploys / wk", value: "128", delta: "+24%", trend: "up" },
] as const;

/** Throughput bars — fixed heights (% of track) so the chart is stable. */
export const DEPLOY_BARS = [
  38, 52, 44, 61, 55, 72, 64, 80, 71, 88, 79, 96,
] as const;

export const DEPLOY_STEPS = [
  { label: "build", state: "done" },
  { label: "test · 412 passed", state: "done" },
  { label: "canary · 10%", state: "done" },
  { label: "rollout · production", state: "active" },
] as const;
