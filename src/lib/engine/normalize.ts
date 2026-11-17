/**
 * Text normalization and grading helpers shared by every exercise validator.
 * Isomorphic: used on the server (authoritative) and mirrored on the client
 * for optimistic UX like live word counts.
 */

/** Collapse whitespace, trim, lowercase, and strip terminal punctuation. */
export function normalizeText(input: string): string {
  return input
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[.!?,;:]+$/g, "")
    .replace(/^["'""'']+|["'""'']+$/g, "")
    .trim();
}

/** Normalize a single word: lowercase, strip surrounding punctuation and
 * internal apostrophes ("don't" → "dont"), so apostrophe style can never
 * fail an answer on its own. */
export function normalizeWord(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}']+$/gu, "")
    .replace(/['\u2019]/g, "");
}

/**
 * Unambiguous contraction pairs (contracted ↔ expanded), PROMPT 36.
 *
 * Only pairs whose expansion is one-to-one are listed. Ambiguous forms —
 * "I'd" (I had / I would), "he'd", "we'd", "they'd", "it'd", "there'd" — are
 * deliberately EXCLUDED so equivalence can never merge two different
 * meanings. Token-based types (fill-blank, rearrange, sentence-build) and
 * dictation never use this map: tile sets and transcriptions must match what
 * was asked. Free-text sentence answers (complete-sentence, correct-mistake,
 * translate, short-answer, listen-answer) compare both sides after expansion,
 * so "she's a doctor" and "she is a doctor" grade identically.
 */
const CONTRACTION_PAIRS: ReadonlyArray<readonly [string, string]> = [
  ["i'm", "i am"],
  ["i've", "i have"],
  ["you're", "you are"],
  ["you've", "you have"],
  ["we're", "we are"],
  ["we've", "we have"],
  ["they're", "they are"],
  ["they've", "they have"],
  ["he's", "he is"],
  ["he'll", "he will"],
  ["she's", "she is"],
  ["she'll", "she will"],
  ["it's", "it is"],
  ["we'll", "we will"],
  ["they'll", "they will"],
  ["you'll", "you will"],
  ["i'll", "i will"],
  ["that's", "that is"],
  ["what's", "what is"],
  ["who's", "who is"],
  ["there's", "there is"],
  ["here's", "here is"],
  ["let's", "let us"],
  ["isn't", "is not"],
  ["aren't", "are not"],
  ["wasn't", "was not"],
  ["weren't", "were not"],
  ["don't", "do not"],
  ["doesn't", "does not"],
  ["didn't", "did not"],
  ["can't", "cannot"],
  ["couldn't", "could not"],
  ["shouldn't", "should not"],
  ["wouldn't", "would not"],
  ["won't", "will not"],
  ["haven't", "have not"],
  ["hasn't", "has not"],
  ["hadn't", "had not"],
  ["mustn't", "must not"],
  ["needn't", "need not"],
];

const EXPANSION_MAP = new Map<string, string>(
  CONTRACTION_PAIRS.map(([contracted, expanded]) => [
    contracted.replace(/['\u2019]/g, ""),
    expanded,
  ]),
);

/** Expand safe contractions in a normalized (lowercase) sentence. */
export function expandContractions(input: string): string {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      const bare = word.replace(/['\u2019]/g, "");
      return EXPANSION_MAP.get(bare) ?? word;
    })
    .join(" ");
}

/**
 * Levenshtein edit distance (small strings only — fine for single sentences).
 */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    prev = curr;
  }
  return prev[b.length];
}

/** Per-word typo tolerance: allow 1 edit for words of 5+ letters. */
export function wordsCloseEnough(a: string, b: string): boolean {
  const wa = normalizeWord(a);
  const wb = normalizeWord(b);
  if (wa === wb) return true;
  const len = Math.max(wa.length, wb.length);
  if (len >= 5 && levenshtein(wa, wb) <= 1) return true;
  if (len >= 8 && levenshtein(wa, wb) <= 2) return true;
  return false;
}

/** Compare two sentences word-by-word with small typo tolerance. */
export function sentencesCloseEnough(a: string, b: string): boolean {
  const na = normalizeText(a).split(" ").filter(Boolean);
  const nb = normalizeText(b).split(" ").filter(Boolean);
  if (na.length !== nb.length) return false;
  return na.every((word, i) => wordsCloseEnough(word, nb[i]));
}

/** Check that every keyword appears in the answer (word-level tolerance). */
export function containsAllKeywords(answer: string, keywords: string[]): boolean {
  const answerWords = normalizeText(answer).split(" ").filter(Boolean);
  return keywords.every((keyword) => {
    const kwWords = normalizeText(keyword).split(" ").filter(Boolean);
    if (kwWords.length === 0) return false;
    // Multi-word keywords must appear as a contiguous run.
    if (kwWords.length > 1) {
      for (let i = 0; i + kwWords.length <= answerWords.length; i++) {
        const run = answerWords.slice(i, i + kwWords.length);
        if (run.every((w, j) => wordsCloseEnough(w, kwWords[j]))) return true;
      }
      return false;
    }
    return answerWords.some((w) => wordsCloseEnough(w, kwWords[0]));
  });
}

/** Count words in a free-text response. */
export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

// ---------------------------------------------------------------------------
// Deterministic randomness (seeded) — stable scrambles and assessment picks
// ---------------------------------------------------------------------------

/** xmur3 string hash → 32-bit seed. */
export function hashSeed(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

/** mulberry32 seeded PRNG. */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic Fisher–Yates shuffle driven by a string seed. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const rand = seededRandom(hashSeed(seed));
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
