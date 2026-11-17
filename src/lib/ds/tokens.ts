/**
 * TalkSy design tokens — TypeScript mirror of `src/app/globals.css`.
 *
 * Used where CSS variables are impractical: Recharts fills, Framer Motion,
 * SVG stroke colors and the WCAG contrast gates in `tests/design-system.test.ts`
 * (which cross-checks every hex here against globals.css, so the two can
 * never drift apart).
 *
 * Layers mirrored:
 *  1. Brand core   — the five brand-brief colours + gradient extensions
 *  2. Semantic     — primary/success/warning/info/correct/incorrect
 *  3. Skill & role palettes — one hue per language skill / grammatical role
 *  4. Charts       — the brand ramp
 *  5. Legacy bridge — the pre-redesign scale names (ink/sand/grove/sun/clay,
 *     numeric brand ramp, gold, phases) re-pointed at the new brand system,
 *     still used by ~280 components (see globals.css §3b)
 *  6. Motion & layout
 */

/* -------------------------------------------------------------------------- */
/* 1. Brand core (globals.css §1 — brand primitives, identical in both themes) */
/* -------------------------------------------------------------------------- */

export const BRAND_CORE = {
  navy: "#0b1f46",
  blue: "#1e88e5",
  cyan: "#06b6d4",
  orange: "#ff8a00",
  gold: "#ffc247",
  indigo: "#4f46e5",
  indigoSoft: "#818cf8",
  violet: "#8b5cf6",
  violetSoft: "#c4b5fd",
} as const;

/* -------------------------------------------------------------------------- */
/* 2. Semantic tokens (light theme values — see globals.css §2/§3 for dark)    */
/* -------------------------------------------------------------------------- */

export const SEMANTIC = {
  primary: "#0b1f46",
  primaryForeground: "#ffffff",
  success: "#15803d",
  successForeground: "#ffffff",
  warning: "#b45309",
  warningForeground: "#ffffff",
  info: "#0369a1",
  infoForeground: "#ffffff",
  correct: "#15803d",
  correctForeground: "#ffffff",
  incorrect: "#b91c1c",
  incorrectForeground: "#ffffff",
  destructive: "#dc2626",
  background: "#fafaf8",
  foreground: "#1b2540",
  card: "#ffffff",
  mutedForeground: "#5a6274",
  border: "#e5e7ec",
  ring: "#1e88e5",
} as const;

/* -------------------------------------------------------------------------- */
/* 3. Skill & grammatical-role palettes (light values; dark variants in CSS)   */
/* -------------------------------------------------------------------------- */

export const SKILLS = {
  reading: "#1668c4",
  listening: "#0e7490",
  speaking: "#c2410c",
  writing: "#7c3aed",
  vocabulary: "#4f46e5",
  grammar: "#a16207",
} as const;

export type SkillKey = keyof typeof SKILLS;

export const ROLES = {
  subject: "#1668c4",
  verb: "#7c3aed",
  object: "#15803d",
  complement: "#4f46e5",
  modifier: "#c2410c",
  auxiliary: "#a16207",
  negation: "#b91c1c",
  question: "#0e7490",
} as const;

/* -------------------------------------------------------------------------- */
/* 4. Charts — the brand ramp (light values)                                   */
/* -------------------------------------------------------------------------- */

export const CHARTS = {
  1: "#1e88e5",
  2: "#06b6d4",
  3: "#4f46e5",
  4: "#ff8a00",
  5: "#ffc247",
} as const;

/** Categorical palette for charts (light theme) — brand ramp + slate anchor. */
export const CHART_PALETTE = [
  CHARTS[1],
  CHARTS[2],
  CHARTS[3],
  CHARTS[4],
  "#b91c1c",
  "#1b3a6b",
] as const;

/* -------------------------------------------------------------------------- */
/* 5. Legacy palette bridge (globals.css §3b — light values)                   */
/* -------------------------------------------------------------------------- */

/** Numeric brand ramp on the brand-blue family (500 = brand-blue). */
export const BRAND = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#1e88e5",
  600: "#1668c4",
  700: "#1259a8",
  800: "#0d3f80",
  900: "#0b1f46",
  950: "#081634",
} as const;

/** Neutral navy-gray ink scale (900 = foreground). */
export const INK = {
  50: "#f6f8fb",
  100: "#eef1f6",
  200: "#dde3ec",
  300: "#c2ccdb",
  400: "#7e8ca4",
  500: "#64748c",
  600: "#5a6274",
  700: "#49536a",
  800: "#2c3a5c",
  900: "#1b2540",
  950: "#101a30",
} as const;

/** Quiet neutral surfaces. */
export const SAND = {
  50: "#fcfcfe",
  100: "#f1f2f5",
  200: "#edf1f8",
  300: "#e5e7ec",
} as const;

/** Success green. */
export const GROVE = {
  50: "#f0fdf4",
  100: "#dcfce7",
  300: "#86efac",
  400: "#4ade80",
  500: "#22c55e",
  600: "#15803d",
  700: "#166534",
  900: "#14532d",
} as const;

/** Warning amber. */
export const SUN = {
  50: "#fffbeb",
  100: "#fef3c7",
  400: "#fbbf24",
  500: "#f59e0b",
  600: "#b45309",
  700: "#92400e",
} as const;

/** Danger red. */
export const CLAY = {
  50: "#fef2f2",
  100: "#fee2e2",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  900: "#7f1d1d",
} as const;

/** Page & neutral surfaces. */
export const PAPER = {
  paper: "#fafaf8",
  line: "#e5e7ec",
  lineStrong: "#d1d5dd",
} as const;

/** Achievement gold (foreground = dark text on gold fills). */
export const GOLD = "#e8a93e";
export const GOLD_FOREGROUND = "#3a2b05";

/* -------------------------------------------------------------------------- */
/* Phase palette — the seven exercise phases (light values; dark in CSS)       */
/* -------------------------------------------------------------------------- */

export type PhaseKey =
  | "guided"
  | "independent"
  | "speaking"
  | "listening"
  | "reading"
  | "writing"
  | "assessment";

export interface PhaseStyle {
  key: PhaseKey;
  label: string;
  /** Solid hue — AA with white text in light theme. */
  color: string;
}

export const PHASES: Record<PhaseKey, PhaseStyle> = {
  guided: { key: "guided", label: "Guided practice", color: "#0e7490" },
  independent: { key: "independent", label: "Independent practice", color: "#7c3aed" },
  speaking: { key: "speaking", label: "Speaking", color: "#c2410c" },
  listening: { key: "listening", label: "Listening", color: "#a16207" },
  reading: { key: "reading", label: "Reading", color: "#1668c4" },
  writing: { key: "writing", label: "Writing", color: "#15803d" },
  assessment: { key: "assessment", label: "Assessment", color: "#0369a1" },
};

/* -------------------------------------------------------------------------- */
/* 6. Motion & layout                                                          */
/* -------------------------------------------------------------------------- */

/** Motion durations (ms) — mirror of --duration-* in globals.css. */
export const DURATION = {
  instant: 100,
  fast: 150,
  base: 200,
  slow: 320,
} as const;

/** Standard easings — mirror of the --ease-* tokens. */
export const EASING = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

/** The same easings as Framer Motion tuples (typed for Transition.ease). */
export const EASING_TUPLES = {
  out: [0.22, 1, 0.36, 1],
  outQuint: [0.22, 1, 0.36, 1],
  spring: [0.34, 1.56, 0.64, 1],
} as const;

/** Framer Motion spring presets. */
export const SPRING = {
  gentle: { type: "spring", stiffness: 200, damping: 26, mass: 0.9 },
  snappy: { type: "spring", stiffness: 500, damping: 32, mass: 0.7 },
} as const;

/** Layout rhythm (px) — documented in docs/design/TALKSY_DESIGN_SYSTEM.md. */
export const LAYOUT = {
  topbarHeight: 64,
  bottomNavHeight: 64,
  containerPage: 1152, // --container-page (72rem)
  containerNarrow: 1024, // --container-narrow (64rem)
  containerReading: 896, // --container-reading (56rem)
  containerText: 672, // --container-text (42rem)
  measure: "66ch",
  touchTarget: 44,
} as const;

/* -------------------------------------------------------------------------- */
/* WCAG utilities                                                              */
/* -------------------------------------------------------------------------- */

/** WCAG relative luminance + contrast ratio (used by the DS test suite). */
export function contrastRatio(hexA: string, hexB: string): number {
  const lum = (hex: string): number => {
    const clean = hex.replace("#", "");
    const rgb = [0, 2, 4].map((i) => parseInt(clean.slice(i, i + 2), 16) / 255);
    const [r, g, b] = rgb.map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const [la, lb] = [lum(hexA), lum(hexB)];
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}
