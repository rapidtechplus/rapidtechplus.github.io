/**
 * "Neural globe" — a rotating sphere of nodes with data pulses travelling
 * along great-circle arcs, drawn with the Canvas 2D API (no dependencies).
 *
 * Framework-free on purpose: React only mounts the canvas and feeds pointer,
 * scroll, palette and visibility in through the returned controller. All
 * geometry is generated once; each frame is a rotate → project → draw pass,
 * with nodes depth-sorted only coarsely (back half first) to keep it cheap.
 */

export type GlobePalette = {
  /** Node + arc colour as "r, g, b". */
  node: string;
  /** Pulse head colour as "r, g, b". */
  pulse: string;
  /** Additive glow looks right on dark backgrounds only. */
  additive: boolean;
};

export type GlobeOptions = {
  nodes: number;
  arcs: number;
  palette: GlobePalette;
};

export type GlobeController = {
  start(): void;
  stop(): void;
  resize(): void;
  /** Normalised pointer, -1..1 on both axes. */
  setPointer(x: number, y: number): void;
  /** 0 at rest, 1 when the hero has scrolled out of view. */
  setScroll(progress: number): void;
  setPalette(palette: GlobePalette): void;
  dispose(): void;
};

type Vec3 = [number, number, number];

const TAU = Math.PI * 2;
const ARC_STEPS = 28;
const MAX_DPR = 1.75;
/** Alpha buckets for batched node fills. */
const BUCKETS = 6;

/** Evenly distributed points on a unit sphere (golden-angle spiral). */
function fibonacciSphere(n: number): Vec3[] {
  const pts: Vec3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return pts;
}

/** Deterministic PRNG so the arc layout is stable across mounts. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Points along the great circle a→b, lifted off the surface mid-way. */
function buildArc(a: Vec3, b: Vec3): Vec3[] {
  const dot = Math.min(
    1,
    Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]),
  );
  const omega = Math.acos(dot);
  const sinO = Math.sin(omega) || 1;
  const lift = 0.12 + omega * 0.12;
  const out: Vec3[] = [];
  for (let s = 0; s <= ARC_STEPS; s++) {
    const t = s / ARC_STEPS;
    const k1 = Math.sin((1 - t) * omega) / sinO;
    const k2 = Math.sin(t * omega) / sinO;
    const h = 1 + Math.sin(Math.PI * t) * lift;
    out.push([
      (a[0] * k1 + b[0] * k2) * h,
      (a[1] * k1 + b[1] * k2) * h,
      (a[2] * k1 + b[2] * k2) * h,
    ]);
  }
  return out;
}

export function createGlobe(
  canvas: HTMLCanvasElement,
  options: GlobeOptions,
): GlobeController | null {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const rand = mulberry32(7);
  const nodes = fibonacciSphere(options.nodes);
  const phases = nodes.map(() => rand() * TAU);

  // Arcs between node pairs at a pleasing angular distance.
  const arcs: { pts: Vec3[]; offset: number; speed: number }[] = [];
  let guard = 0;
  while (arcs.length < options.arcs && guard++ < options.arcs * 40) {
    const a = nodes[Math.floor(rand() * nodes.length)];
    const b = nodes[Math.floor(rand() * nodes.length)];
    const ang = Math.acos(a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
    if (ang < 0.5 || ang > 1.7) continue;
    arcs.push({
      pts: buildArc(a, b),
      offset: rand(),
      speed: 0.12 + rand() * 0.14,
    });
  }

  let palette = options.palette;
  const buckets: number[][] = Array.from({ length: BUCKETS }, () => []);
  let width = 0;
  let height = 0;
  let dpr = 1;
  let raf = 0;
  let running = false;
  let last = 0;
  let spin = 0;
  let time = 0;
  // Smoothed inputs.
  let px = 0,
    py = 0,
    tx = 0,
    ty = 0;
  let scroll = 0,
    targetScroll = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
  }

  function frame(now: number) {
    if (!running) return;
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016);
    last = now;
    time += dt;
    spin += dt * 0.12;
    px += (tx - px) * Math.min(1, dt * 3);
    py += (ty - py) * Math.min(1, dt * 3);
    scroll += (targetScroll - scroll) * Math.min(1, dt * 4);
    draw();
    raf = requestAnimationFrame(frame);
  }

  function draw() {
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx!.clearRect(0, 0, width, height);
    ctx!.globalCompositeOperation = palette.additive
      ? "lighter"
      : "source-over";

    // The canvas is oversized around its stage, so the globe sits centred.
    const cx = width / 2;
    const cy = height / 2 - scroll * height * 0.06;
    const radius = Math.min(width, height) * 0.34 * (1 + scroll * 0.2);
    const persp = 3.2;

    const ry = spin + px * 0.35;
    const rx = 0.42 + py * 0.22;
    const cyR = Math.cos(ry),
      syR = Math.sin(ry);
    const cxR = Math.cos(rx),
      sxR = Math.sin(rx);

    const project = (p: Vec3) => {
      // Rotate around Y then X.
      const x1 = p[0] * cyR + p[2] * syR;
      const z1 = -p[0] * syR + p[2] * cyR;
      const y2 = p[1] * cxR - z1 * sxR;
      const z2 = p[1] * sxR + z1 * cxR;
      const s = persp / (persp - z2);
      return { x: cx + x1 * radius * s, y: cy + y2 * radius * s, z: z2, s };
    };

    // (The atmosphere glow is CSS on the stage — cheaper than a per-frame fill.)

    // Equator + orbit rings.
    ctx!.lineWidth = 1;
    for (const [tilt, scale, alpha] of [
      [0, 1.0, 0.18],
      [0.9, 1.22, 0.1],
    ] as const) {
      ctx!.strokeStyle = `rgba(${palette.node}, ${alpha})`;
      ctx!.beginPath();
      for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * TAU + (tilt ? time * 0.05 : 0);
        const p = project([
          Math.cos(a) * scale,
          Math.sin(a) * Math.sin(tilt) * scale,
          Math.sin(a) * Math.cos(tilt) * scale,
        ]);
        if (i === 0) ctx!.moveTo(p.x, p.y);
        else ctx!.lineTo(p.x, p.y);
      }
      ctx!.stroke();
    }

    // Nodes — back hemisphere dimmer and smaller. Bucketed by alpha so the
    // whole field is ~6 fills instead of one fill per node.
    for (const list of buckets) list.length = 0;
    for (let i = 0; i < nodes.length; i++) {
      const p = project(nodes[i]);
      const front = (p.z + 1) / 2; // 0 back .. 1 front
      const twinkle = 0.65 + 0.35 * Math.sin(time * 1.6 + phases[i]);
      const a = (0.12 + front * 0.75) * twinkle;
      const k = Math.min(BUCKETS - 1, Math.floor(a * BUCKETS));
      buckets[k].push(p.x, p.y, (0.6 + front * 1.3) * p.s);
    }
    for (let k = 0; k < BUCKETS; k++) {
      const list = buckets[k];
      if (!list.length) continue;
      ctx!.fillStyle = `rgba(${palette.node}, ${((k + 0.5) / BUCKETS).toFixed(3)})`;
      ctx!.beginPath();
      for (let j = 0; j < list.length; j += 3) {
        ctx!.moveTo(list[j] + list[j + 2], list[j + 1]);
        ctx!.arc(list[j], list[j + 1], list[j + 2], 0, TAU);
      }
      ctx!.fill();
    }

    // Arcs: every faint track in one stroke, then the travelling pulses.
    const projected = arcs.map((arc) => arc.pts.map(project));
    ctx!.strokeStyle = `rgba(${palette.node}, 0.1)`;
    ctx!.beginPath();
    for (const proj of projected) {
      proj.forEach((p, i) =>
        i ? ctx!.lineTo(p.x, p.y) : ctx!.moveTo(p.x, p.y),
      );
    }
    ctx!.stroke();
    for (let ai = 0; ai < arcs.length; ai++) {
      const arc = arcs[ai];
      const proj = projected[ai];
      const head = (arc.offset + time * arc.speed) % 1.3; // pause between runs
      if (head > 1) continue;
      // Bright comet: a short tail behind the head.
      const hi = Math.floor(head * ARC_STEPS);
      const tail = Math.max(0, hi - 6);
      ctx!.lineWidth = 1.6;
      for (let s = tail; s < hi; s++) {
        const p0 = proj[s],
          p1 = proj[s + 1];
        const k = (s - tail + 1) / (hi - tail);
        const depth = (p1.z + 1) / 2;
        ctx!.strokeStyle = `rgba(${palette.pulse}, ${(k * (0.25 + depth * 0.75)).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.moveTo(p0.x, p0.y);
        ctx!.lineTo(p1.x, p1.y);
        ctx!.stroke();
      }
      const hp = proj[hi];
      ctx!.fillStyle = `rgba(${palette.pulse}, ${(0.4 + ((hp.z + 1) / 2) * 0.6).toFixed(3)})`;
      ctx!.beginPath();
      ctx!.arc(hp.x, hp.y, 2.2 * hp.s, 0, TAU);
      ctx!.fill();
      ctx!.lineWidth = 1;
    }
  }

  resize();

  return {
    start() {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
    },
    resize() {
      resize();
      if (!running) draw();
    },
    setPointer(x, y) {
      tx = x;
      ty = y;
    },
    setScroll(p) {
      targetScroll = Math.min(1, Math.max(0, p));
    },
    setPalette(p) {
      palette = p;
      if (!running) draw();
    },
    dispose() {
      running = false;
      cancelAnimationFrame(raf);
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
}
