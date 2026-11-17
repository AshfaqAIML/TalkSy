/**
 * WCAG contrast audit for the TalkSy design system (Prompt 28 tokens).
 * Converts hex token values to sRGB and computes WCAG contrast ratios for
 * the key foreground/background pairs in BOTH themes.
 */
function hexToRgb(h: string): [number, number, number] {
  const s = h.replace("#", "");
  return [
    parseInt(s.slice(0, 2), 16) / 255,
    parseInt(s.slice(2, 4), 16) / 255,
    parseInt(s.slice(4, 6), 16) / 255,
  ];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const lin = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrast(fg: string, bg: string): number {
  const l1 = relativeLuminance(hexToRgb(fg));
  const l2 = relativeLuminance(hexToRgb(bg));
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

const themes = {
  "LIGHT (docs/design/TALKSY_DESIGN_SYSTEM.md)": {
    background: "#fafaf8",
    foreground: "#1b2540",
    card: "#ffffff",
    primary: "#0b1f46",
    primaryForeground: "#ffffff",
    secondary: "#edf1f8",
    secondaryForeground: "#1b3a6b",
    accent: "#e8f0fb",
    accentForeground: "#14376b",
    mutedForeground: "#5a6274",
    destructive: "#dc2626",
    destructiveForeground: "#ffffff",
    success: "#15803d",
    warning: "#b45309",
    info: "#0369a1",
    incorrect: "#b91c1c",
  },
  "DARK (docs/design/TALKSY_DESIGN_SYSTEM.md)": {
    background: "#0a1526",
    foreground: "#e9eef8",
    card: "#101e38",
    primary: "#4d9fea",
    primaryForeground: "#06122a",
    secondary: "#1b2c4e",
    secondaryForeground: "#dce6f7",
    accent: "#16294a",
    accentForeground: "#d7e6fb",
    mutedForeground: "#9aa8c3",
    destructive: "#f87171",
    destructiveForeground: "#0a1526",
    success: "#4ade80",
    warning: "#fbbf24",
    info: "#38bdf8",
    incorrect: "#f87171",
  },
} as const;

type Theme = keyof (typeof themes)[keyof typeof themes] extends never ? never : Record<string, string>;

let failures = 0;
for (const [name, t] of Object.entries(themes)) {
  const theme = t as unknown as Theme;
  const pairs: [string, string, string][] = [
    ["Body text on background", theme.foreground, theme.background],
    ["Body text on card", theme.foreground, theme.card],
    ["Muted text on background", theme.mutedForeground, theme.background],
    ["Muted text on card", theme.mutedForeground, theme.card],
    ["Primary button text on primary", theme.primaryForeground, theme.primary],
    ["Secondary chip text on secondary", theme.secondaryForeground, theme.secondary],
    ["Accent text on accent", theme.accentForeground, theme.accent],
    ["On-destructive text", theme.destructiveForeground, theme.destructive],
    ["Success text on card", theme.success, theme.card],
    ["Warning text on card", theme.warning, theme.card],
    ["Info text on card", theme.info, theme.card],
    ["Incorrect text on card", theme.incorrect, theme.card],
  ];
  console.log(`\nWCAG contrast ratios — ${name}:`);
  for (const [label, fg, bg] of pairs) {
    const ratio = contrast(fg, bg);
    const passes = ratio >= 4.5;
    const passesLarge = ratio >= 3;
    if (!passes) failures += 1;
    const verdict = passes ? "PASS AA" : passesLarge ? "AA-large only" : "FAIL";
    console.log(`  ${label}: ${ratio.toFixed(2)} — ${verdict} (needs AA 4.5)`);
  }
}

console.log(
  failures === 0
    ? "\nAll pairs pass WCAG AA."
    : `\n${failures} pair(s) below AA — fix before shipping.`,
);
process.exit(failures === 0 ? 0 : 1);
