/**
 * Design-system gates.
 *
 * 1. Token sync — every hex in src/lib/ds/tokens.ts must appear in
 *    globals.css (the TS mirror can never drift from the CSS source).
 *    Covers the brand core, semantic tokens, skill/role palettes, the
 *    chart ramp and the legacy palette bridge (ink/sand/grove/sun/clay,
 *    numeric brand ramp, gold, phases) — in BOTH themes.
 * 2. WCAG contrast gates — the text/interactive pairs the product relies
 *    on must pass AA (4.5:1) or AAA (7:1) in BOTH themes.
 * 3. Asset & structure checks — font wiring, focus ring, reduced-motion,
 *    type-scale step, motion tokens and gradient definitions.
 *
 * Run: bun test tests/design-system.test.ts
 */

import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  BRAND,
  BRAND_CORE,
  CHARTS,
  CHART_PALETTE,
  CLAY,
  contrastRatio,
  GOLD,
  GOLD_FOREGROUND,
  GROVE,
  INK,
  PAPER,
  PHASES,
  SEMANTIC,
  SKILLS,
  SUN,
} from "../src/lib/ds/tokens";

const ROOT = join(import.meta.dir, "..");
const css = readFileSync(join(ROOT, "src/app/globals.css"), "utf-8");

/* ------------------------------------------------------------------ */
/* CSS parsing helpers                                                  */
/* ------------------------------------------------------------------ */

/** All declarations of every `:root { … }` block, concatenated. */
function rootDeclarations(): string {
  let out = "";
  let idx = css.indexOf(":root {");
  while (idx !== -1) {
    out += css.slice(idx, css.indexOf("}", idx));
    idx = css.indexOf(":root {", idx + 1);
  }
  if (!out) throw new Error("no :root block found");
  return out;
}

/** All declarations of every `.dark { … }` block, concatenated. */
function darkDeclarations(): string {
  let out = "";
  let idx = css.indexOf(".dark {");
  while (idx !== -1) {
    out += css.slice(idx, css.indexOf("}", idx));
    idx = css.indexOf(".dark {", idx + 1);
  }
  if (!out) throw new Error("no .dark block found");
  return out;
}

const rootBlock = rootDeclarations();
const darkBlock = darkDeclarations();

/** Extract a var value from a declarations blob. */
function cssVar(block: string, name: string): string {
  const re = new RegExp(`--${name}:\\s*([^;]+);`);
  const match = block.match(re);
  if (!match) throw new Error(`--${name} not found in block`);
  return match[1].trim();
}

const WHITE = "#ffffff";
const PAPER_BG = SEMANTIC.background; // light page
const DARK_BG = "#0a1526"; // dark canvas (globals.css .dark --background)
const DARK_CARD = "#101e38"; // dark card surface

/* ------------------------------------------------------------------ */
/* 1. Token sync — tokens.ts ↔ globals.css                              */
/* ------------------------------------------------------------------ */

describe("token sync (tokens.ts ↔ globals.css)", () => {
  it("brand core matches :root primitives", () => {
    expect(cssVar(rootBlock, "brand-navy")).toBe(BRAND_CORE.navy);
    expect(cssVar(rootBlock, "brand-blue")).toBe(BRAND_CORE.blue);
    expect(cssVar(rootBlock, "brand-cyan")).toBe(BRAND_CORE.cyan);
    expect(cssVar(rootBlock, "brand-orange")).toBe(BRAND_CORE.orange);
    expect(cssVar(rootBlock, "brand-gold")).toBe(BRAND_CORE.gold);
    expect(cssVar(rootBlock, "brand-indigo")).toBe(BRAND_CORE.indigo);
    expect(cssVar(rootBlock, "brand-violet")).toBe(BRAND_CORE.violet);
  });

  it("semantic tokens match :root", () => {
    expect(cssVar(rootBlock, "primary")).toBe(SEMANTIC.primary);
    expect(cssVar(rootBlock, "success")).toBe(SEMANTIC.success);
    expect(cssVar(rootBlock, "warning")).toBe(SEMANTIC.warning);
    expect(cssVar(rootBlock, "info")).toBe(SEMANTIC.info);
    expect(cssVar(rootBlock, "correct")).toBe(SEMANTIC.correct);
    expect(cssVar(rootBlock, "incorrect")).toBe(SEMANTIC.incorrect);
    expect(cssVar(rootBlock, "background")).toBe(SEMANTIC.background);
    expect(cssVar(rootBlock, "foreground")).toBe(SEMANTIC.foreground);
    expect(cssVar(rootBlock, "muted-foreground")).toBe(SEMANTIC.mutedForeground);
    expect(cssVar(rootBlock, "ring")).toBe(SEMANTIC.ring);
  });

  it("skill and role palettes match :root", () => {
    for (const [key, hex] of Object.entries(SKILLS)) {
      expect(cssVar(rootBlock, `skill-${key}`)).toBe(hex);
    }
    expect(cssVar(rootBlock, "role-subject")).toBe("#1668c4");
    expect(cssVar(rootBlock, "role-verb")).toBe("#7c3aed");
    expect(cssVar(rootBlock, "role-negation")).toBe("#b91c1c");
  });

  it("chart ramp matches :root", () => {
    for (const [step, hex] of Object.entries(CHARTS)) {
      expect(cssVar(rootBlock, `chart-${step}`)).toBe(hex);
    }
  });

  it("legacy bridge ramps match :root (brand/ink/sand/grove/sun/clay)", () => {
    for (const [step, hex] of Object.entries(BRAND)) {
      expect(cssVar(rootBlock, `brand-${step}`)).toBe(hex);
    }
    for (const [step, hex] of Object.entries(INK)) {
      expect(cssVar(rootBlock, `ink-${step}`)).toBe(hex);
    }
    expect(cssVar(rootBlock, "sand-100")).toBe("#f1f2f5");
    expect(cssVar(rootBlock, "sand-200")).toBe("#edf1f8");
    for (const [step, hex] of Object.entries(GROVE)) {
      expect(cssVar(rootBlock, `grove-${step}`)).toBe(hex);
    }
    for (const [step, hex] of Object.entries(SUN)) {
      expect(cssVar(rootBlock, `sun-${step}`)).toBe(hex);
    }
    for (const [step, hex] of Object.entries(CLAY)) {
      expect(cssVar(rootBlock, `clay-${step}`)).toBe(hex);
    }
  });

  it("paper/line/gold bridge tokens match :root", () => {
    expect(cssVar(rootBlock, "paper")).toBe(PAPER.paper);
    expect(cssVar(rootBlock, "line")).toBe(PAPER.line);
    expect(cssVar(rootBlock, "line-strong")).toBe(PAPER.lineStrong);
    expect(cssVar(rootBlock, "gold-foreground")).toBe(GOLD_FOREGROUND);
  });

  it("phase palette matches :root", () => {
    for (const phase of Object.values(PHASES)) {
      expect(cssVar(rootBlock, `phase-${phase.key}`)).toBe(phase.color);
    }
  });

  it("the dark theme overrides the bridge and the semantic tokens", () => {
    // Bridge scales flip to luminous/dark variants in .dark
    expect(cssVar(darkBlock, "ink-900")).not.toBe(INK[900]);
    expect(cssVar(darkBlock, "brand-700")).not.toBe(BRAND[700]);
    expect(cssVar(darkBlock, "grove-700")).not.toBe(GROVE[700]);
    // Every bridge var has a dark override
    for (const step of Object.keys(INK)) {
      expect(darkBlock).toContain(`--ink-${step}:`);
    }
    for (const phase of Object.keys(PHASES)) {
      expect(darkBlock).toContain(`--phase-${phase}:`);
    }
    // Semantic dark values
    expect(cssVar(darkBlock, "background")).toBe(DARK_BG);
    expect(cssVar(darkBlock, "card")).toBe(DARK_CARD);
  });

  it("every bridge token is exposed as a Tailwind utility", () => {
    // @theme inline maps --color-<name> → var(--<name>) so bg-ink-500 etc. compile
    const inkSteps = Object.keys(INK);
    const claySteps = Object.keys(CLAY);
    for (const step of inkSteps) {
      expect(css).toContain(`--color-ink-${step}: var(--ink-${step});`);
    }
    for (const step of claySteps) {
      expect(css).toContain(`--color-clay-${step}: var(--clay-${step});`);
    }
    for (const step of Object.keys(GROVE)) {
      expect(css).toContain(`--color-grove-${step}: var(--grove-${step});`);
    }
    for (const step of Object.keys(SUN)) {
      expect(css).toContain(`--color-sun-${step}: var(--sun-${step});`);
    }
    for (const step of Object.keys(BRAND)) {
      expect(css).toContain(`--color-brand-${step}: var(--brand-${step});`);
    }
    expect(css).toContain(`--color-sand-100: var(--sand-100);`);
    expect(css).toContain(`--color-gold: var(--gold);`);
    expect(css).toContain(`--color-gold-600: var(--gold-600);`);
    expect(css).toContain(`--color-line: var(--line);`);
    expect(css).toContain(`--color-line-strong: var(--line-strong);`);
    expect(css).toContain(`--color-paper: var(--paper);`);
    expect(css).toContain(`--color-phase-guided: var(--phase-guided);`);
    expect(css).toContain(`--color-phase-assessment: var(--phase-assessment);`);
  });
});

/* ------------------------------------------------------------------ */
/* 2. WCAG contrast gates — light theme                                 */
/* ------------------------------------------------------------------ */

describe("WCAG contrast gates — light theme", () => {
  it("body text meets AAA on the page background (≥7:1)", () => {
    expect(contrastRatio(SEMANTIC.foreground, PAPER_BG)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(INK[900], PAPER_BG)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(INK[800], PAPER_BG)).toBeGreaterThanOrEqual(7);
  });

  it("secondary and muted text meet AA (≥4.5:1)", () => {
    expect(contrastRatio(SEMANTIC.mutedForeground, PAPER_BG)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(INK[700], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(INK[600], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(INK[500], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
  });

  it("primary and brand solids meet AA with white text", () => {
    expect(contrastRatio(SEMANTIC.primary, WHITE)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(BRAND[600], WHITE)).toBeGreaterThanOrEqual(4.5);
  });

  it("brand text shades meet AA on the page background", () => {
    expect(contrastRatio(BRAND[700], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(BRAND[800], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
  });

  it("status colours meet AA in solid and text forms", () => {
    expect(contrastRatio(SEMANTIC.success, WHITE)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(GROVE[700], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(SEMANTIC.warning, WHITE)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(SUN[700], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(SEMANTIC.destructive, WHITE)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(CLAY[700], PAPER_BG)).toBeGreaterThanOrEqual(4.5);
  });

  it("XP pill: gold-foreground on gold meets AA", () => {
    expect(contrastRatio(GOLD_FOREGROUND, BRAND_CORE.gold)).toBeGreaterThanOrEqual(4.5);
  });

  it("text-safe gold meets AA on the page background", () => {
    expect(contrastRatio(cssVar(rootBlock, "gold-600"), PAPER_BG)).toBeGreaterThanOrEqual(4.5);
  });

  it("every phase colour passes AA with white text", () => {
    for (const phase of Object.values(PHASES)) {
      expect(contrastRatio(phase.color, WHITE)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("skill palette reads as text on white (≥4.5:1)", () => {
    for (const hex of Object.values(SKILLS)) {
      expect(contrastRatio(hex, WHITE)).toBeGreaterThanOrEqual(4.5);
    }
  });
});

/* ------------------------------------------------------------------ */
/* 2b. WCAG contrast gates — dark theme                                 */
/* ------------------------------------------------------------------ */

describe("WCAG contrast gates — dark theme", () => {
  it("dark canvas is dark and body text meets AAA (≥7:1)", () => {
    expect(contrastRatio(DARK_BG, WHITE)).toBeGreaterThan(4.5); // very dark
    expect(contrastRatio(cssVar(darkBlock, "foreground"), DARK_BG)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(cssVar(darkBlock, "ink-900"), DARK_CARD)).toBeGreaterThanOrEqual(7);
  });

  it("muted text meets AA on dark surfaces", () => {
    expect(contrastRatio(cssVar(darkBlock, "muted-foreground"), DARK_CARD)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(cssVar(darkBlock, "ink-500"), DARK_CARD)).toBeGreaterThanOrEqual(4.5);
  });

  it("luminous bridge text shades meet AA on the dark card", () => {
    expect(contrastRatio(cssVar(darkBlock, "brand-700"), DARK_CARD)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(cssVar(darkBlock, "grove-700"), DARK_CARD)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(cssVar(darkBlock, "sun-700"), DARK_CARD)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(cssVar(darkBlock, "clay-700"), DARK_CARD)).toBeGreaterThanOrEqual(4.5);
  });

  it("dark status solids keep AA with their on-colour text", () => {
    const destructiveDark = cssVar(darkBlock, "destructive");
    const destructiveFg = cssVar(darkBlock, "destructive-foreground");
    expect(contrastRatio(destructiveDark, destructiveFg)).toBeGreaterThanOrEqual(4.5);
  });

  it("the dark theme overrides every phase colour, luminous enough to read", () => {
    for (const phase of Object.keys(PHASES)) {
      const light = cssVar(rootBlock, `phase-${phase}`);
      const dark = cssVar(darkBlock, `phase-${phase}`);
      expect(dark).not.toBe(light);
      expect(contrastRatio(dark, DARK_BG)).toBeGreaterThanOrEqual(3);
    }
  });
});

/* ------------------------------------------------------------------ */
/* 3. Palettes, typography & experience-quality rules                    */
/* ------------------------------------------------------------------ */

describe("phase & chart palettes", () => {
  it("has all seven phases with labels", () => {
    expect(Object.keys(PHASES).sort()).toEqual([
      "assessment",
      "guided",
      "independent",
      "listening",
      "reading",
      "speaking",
      "writing",
    ]);
    for (const phase of Object.values(PHASES)) {
      expect(phase.label.length).toBeGreaterThan(0);
    }
  });

  it("phase hues are pairwise distinct", () => {
    const colors = Object.values(PHASES).map((p) => p.color);
    expect(new Set(colors).size).toBe(colors.length);
  });

  it("chart palette has six distinct colours", () => {
    expect(new Set(CHART_PALETTE).size).toBe(6);
  });
});

describe("typography assets", () => {
  it("the app fonts (Inter body, Poppins headings) load through next/font", () => {
    const layout = readFileSync(join(ROOT, "src/app/layout.tsx"), "utf-8");
    expect(layout).toContain("Inter(");
    expect(layout).toContain("Poppins(");
    expect(layout).toContain('"--font-inter"');
    expect(layout).toContain('"--font-poppins"');
  });

  it("globals.css maps the font tokens and heading family", () => {
    expect(css).toContain("--font-sans: var(--font-inter)");
    expect(css).toContain("--font-heading: var(--font-poppins)");
    expect(css).toMatch(/h1, h2, h3, h4\s*\{/);
    expect(css).toContain("font-family: var(--font-poppins)");
  });

  it("legacy local font assets are no longer referenced by globals.css", () => {
    // The redesign moved to next/font; nothing in globals.css should point
    // at the retired fraunces/jakarta woff2 files.
    expect(css).not.toContain("fraunces");
    expect(css).not.toContain("jakarta");
  });
});

describe("experience-quality rules in the token layer", () => {
  it("focus-visible ring is globally defined", () => {
    expect(css).toContain(":focus-visible");
    expect(css).toMatch(/outline:\s*2px solid var\(--ring\)/);
  });

  it("prefers-reduced-motion collapses animations", () => {
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  });

  it("the display type step is defined", () => {
    expect(css).toContain("--text-display:");
    expect(css).toMatch(/--text-display--line-height:/);
  });

  it("motion tokens (durations & easings) are defined", () => {
    expect(css).toContain("--duration-fast:");
    expect(css).toContain("--duration-base:");
    expect(css).toContain("--duration-slow:");
    expect(css).toContain("--ease-out:");
    expect(css).toContain("--ease-spring:");
    expect(css).toContain("--shadow-md:");
  });

  it("the gradient system is defined with a text-safe ramp", () => {
    for (const g of ["--gradient-brand", "--gradient-deep", "--gradient-fresh", "--gradient-warm", "--gradient-text"]) {
      expect(css).toContain(`${g}:`);
    }
    // every stop of the text gradient passes AA on white
    for (const stop of ["#1668c4", "#4f46e5", "#7c3aed"]) {
      expect(contrastRatio(stop, WHITE)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("signatures: ambient glow, glass, lift-hover and skeleton shimmer exist", () => {
    for (const cls of [".ambient-glow", ".surface-glass", ".lift-hover", ".skeleton-shimmer", ".text-gradient"]) {
      expect(css).toContain(cls);
    }
  });
});
