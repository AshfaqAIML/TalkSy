/**
 * WCAG contrast audit: convert the theme's OKLCH variables to sRGB and
 * compute contrast ratios for the key foreground/background pairs.
 */
function oklchToSrgb(L: number, C: number, H: number): [number, number, number] {
  // OKLab → LMS → linear sRGB (standard matrices).
  const hr = (H * Math.PI) / 180;
  const a = C * Math.cos(hr);
  const b = C * Math.sin(hr);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  let r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let bb = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  const gam = (v: number) => {
    v = Math.min(1, Math.max(0, v));
    return v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
  };
  return [gam(r), gam(g), gam(bb)];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  // WCAG relative luminance uses LINEARIZED sRGB channels.
  const lin = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrast(fg: [number, number, number], bg: [number, number, number]): number {
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

const theme = {
  background: [0.985, 0.006, 90],
  foreground: [0.24, 0.02, 60],
  card: [1, 0, 0],
  primary: [0.46, 0.085, 165],
  primaryForeground: [0.985, 0.005, 90],
  secondary: [0.95, 0.015, 100],
  secondaryForeground: [0.32, 0.03, 150],
  mutedForeground: [0.5, 0.02, 70],
  destructive: [0.577, 0.245, 27.325],
  accent: [0.93, 0.04, 95],
  accentForeground: [0.32, 0.04, 70],
} as const;

const pairs: [string, keyof typeof theme, keyof typeof theme, string][] = [
  ["Body text on background", "foreground", "background", "AA 4.5"],
  ["Body text on card", "foreground", "card", "AA 4.5"],
  ["Muted text on background", "mutedForeground", "background", "AA 4.5"],
  ["Muted text on card", "mutedForeground", "card", "AA 4.5"],
  ["Primary button text on primary", "primaryForeground", "primary", "AA 4.5"],
  ["Secondary chip text on secondary", "secondaryForeground", "secondary", "AA 4.5"],
  ["Accent text on accent", "accentForeground", "accent", "AA 4.5"],
  ["White on destructive", "primaryForeground", "destructive", "AA 4.5"],
];

const toSrgb = (k: keyof typeof theme) => oklchToSrgb(...(theme[k] as [number, number, number]));

console.log("WCAG contrast ratios (light theme):");
for (const [label, fg, bg, req] of pairs) {
  const ratio = contrast(toSrgb(fg), toSrgb(bg));
  const passes = ratio >= 4.5;
  const passesLarge = ratio >= 3;
  const verdict = passes ? "PASS AA" : passesLarge ? "AA-large only" : "FAIL";
  console.log(`  ${label}: ${ratio.toFixed(2)} — ${verdict} (needs ${req})`);
}
