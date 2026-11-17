/**
 * Pure text matching utilities — shared by the browser speech layer
 * (src/lib/speech.ts) and the server-side exercise evaluation engine
 * (src/server/core/evaluation.ts).
 *
 * No "use client" and no browser APIs: safe to import from server code.
 */

function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Case/punctuation-insensitive equality, with British/American tolerance. */
export function textMatches(input: string, expected: string): boolean {
  const a = normalise(input);
  const b = normalise(expected);
  if (a === b) return true;
  // tolerate a/an/the and small typos in speech
  if (a.replace(/\b(a|an|the)\b/g, "").trim() === b.replace(/\b(a|an|the)\b/g, "").trim()) {
    return true;
  }
  return false;
}

/** Levenshtein similarity 0..1 for speech grading. */
export function similarity(a: string, b: string): number {
  const s = normalise(a);
  const t = normalise(b);
  if (s === t) return 1;
  const m = s.length;
  const n = t.length;
  if (m === 0 || n === 0) return 0;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return 1 - dp[m][n] / Math.max(m, n);
}

/** Speech passes at ≥ 0.7 word similarity. */
export function speechPassed(input: string, target: string): boolean {
  return similarity(input, target) >= 0.7;
}

/** Token equality for word-ordering exercises (punctuation/case tolerant). */
export function tokensMatch(input: string, expected: string): boolean {
  const tok = (s: string) => normalise(s).split(" ").filter(Boolean);
  const a = tok(input);
  const b = tok(expected);
  return a.length === b.length && a.every((t, i) => t === b[i]);
}

export { normalise as normaliseText };
