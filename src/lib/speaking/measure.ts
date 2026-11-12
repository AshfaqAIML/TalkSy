/**
 * Speaking measurement engine — deterministic metrics computed from a
 * transcript and the recording duration. Every number the learner sees in
 * the "Measured results" section comes from here: no AI, no guesses.
 *
 * Honesty rules baked into the design:
 * - Words-per-minute needs a duration; without one it is reported as 0.
 * - Sentence counts on unpunctuated speech are estimates (flagged as such).
 * - There is no phoneme-level analysis anywhere in this module.
 */

const FILLER_PATTERNS: { pattern: RegExp; label: string }[] = [
  { pattern: /\bum+\b/gi, label: "um" },
  { pattern: /\buh+\b/gi, label: "uh" },
  { pattern: /\berm?\b/gi, label: "er" },
  { pattern: /\bah+\b/gi, label: "ah" },
  { pattern: /\bhmm+\b/gi, label: "hmm" },
  { pattern: /\byou know\b/gi, label: "you know" },
  { pattern: /\bi mean\b/gi, label: "I mean" },
  { pattern: /\bsort of\b/gi, label: "sort of" },
  { pattern: /\bkind of\b/gi, label: "kind of" },
];

/** Discourse markers that (roughly) signal a new sentence in spoken English. */
const SPOKEN_BOUNDARY =
  /\b(?:and then|but then|so then|after that|afterward|afterwards|then|next|finally|in the end|at last|secondly|second|first of all|firstly|first)\b/gi;

export interface TranscriptMetrics {
  wordCount: number;
  sentenceCount: number;
  /** True when sentenceCount is an estimate (no punctuation in the transcript). */
  sentenceCountEstimated: boolean;
  avgSentenceWords: number;
  fillerCount: number;
  fillersFound: string[];
  repeatedPhrases: string[];
  uniqueWordRatio: number;
  /** Advanced-vocabulary markers found in the transcript. */
  advancedMarkers: string[];
}

/** B2+ discourse markers — a light, honest vocabulary-sophistication signal. */
export const ADVANCED_MARKERS = [
  "furthermore",
  "moreover",
  "nevertheless",
  "nonetheless",
  "whereas",
  "although",
  "consequently",
  "in addition",
  "on balance",
  "admittedly",
  "granted",
  "for instance",
  "arguably",
  "to a great extent",
  "that said",
  "on the other hand",
  "in retrospect",
  "notably",
  "particularly",
  "significantly",
];

function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/** Split into sentences: punctuation first, discourse-marker estimate second. */
export function splitSentences(text: string): { sentences: string[]; estimated: boolean } {
  const trimmed = text.trim();
  if (!trimmed) return { sentences: [], estimated: false };
  if (/[.!?]/.test(trimmed)) {
    const sentences = trimmed
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    return { sentences: sentences.length > 0 ? sentences : [trimmed], estimated: false };
  }
  // Unpunctuated speech: estimate ~12 words per spoken sentence, nudged by
  // the number of discourse markers.
  const wordTotal = words(trimmed).length;
  const markers = trimmed.match(SPOKEN_BOUNDARY)?.length ?? 0;
  const estimated = Math.max(1, Math.round(Math.max(wordTotal / 12, (wordTotal / 12) * 0.5 + markers * 0.5)));
  const perSentence = Math.ceil(wordTotal / estimated) || 1;
  const wordList = trimmed.split(/\s+/);
  const sentences: string[] = [];
  for (let i = 0; i < wordList.length; i += perSentence) {
    sentences.push(wordList.slice(i, i + perSentence).join(" "));
  }
  return { sentences: sentences.length > 0 ? sentences : [trimmed], estimated: true };
}

/** Find 3-grams repeated at least twice, plus immediate word repeats. */
function findRepeatedPhrases(text: string): string[] {
  const list = words(text);
  const repeats = new Set<string>();

  // Immediate repeats: "the the", "I I".
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === list[i + 1] && list[i].length > 1) {
      repeats.add(`${list[i]} ${list[i + 1]}`);
    }
  }

  // Repeated 3-grams.
  const counts = new Map<string, number>();
  for (let i = 0; i < list.length - 2; i++) {
    const gram = `${list[i]} ${list[i + 1]} ${list[i + 2]}`;
    counts.set(gram, (counts.get(gram) ?? 0) + 1);
  }
  for (const [gram, count] of counts) {
    if (count >= 2) repeats.add(gram);
  }

  return [...repeats].slice(0, 5);
}

export function measureTranscript(transcript: string): TranscriptMetrics {
  const clean = transcript.replace(/\s+/g, " ").trim();
  const wordList = words(clean);
  const { sentences, estimated } = splitSentences(clean);

  const fillersFound: string[] = [];
  let fillerCount = 0;
  for (const { pattern, label } of FILLER_PATTERNS) {
    const matches = clean.match(pattern);
    if (matches && matches.length > 0) {
      fillerCount += matches.length;
      fillersFound.push(label);
    }
  }

  const unique = new Set(wordList);
  const uniqueWordRatio = wordList.length === 0 ? 0 : unique.size / wordList.length;

  const advancedMarkers = ADVANCED_MARKERS.filter((marker) =>
    clean.toLowerCase().includes(marker),
  );

  return {
    wordCount: wordList.length,
    sentenceCount: sentences.length,
    sentenceCountEstimated: estimated,
    avgSentenceWords:
      sentences.length === 0 ? 0 : Math.round((wordList.length / sentences.length) * 10) / 10,
    fillerCount,
    fillersFound,
    repeatedPhrases: findRepeatedPhrases(clean),
    uniqueWordRatio: Math.round(uniqueWordRatio * 100) / 100,
    advancedMarkers,
  };
}

/** Words per minute from a duration; 0 when the duration is unknown. */
export function wordsPerMinute(wordCount: number, durationMs: number): number {
  if (durationMs <= 0 || wordCount === 0) return 0;
  const minutes = durationMs / 60_000;
  return Math.round(wordCount / minutes);
}

/** Fillers per minute; 0 when the duration is unknown. */
export function fillersPerMinute(fillerCount: number, durationMs: number): number {
  if (durationMs <= 0) return 0;
  const minutes = durationMs / 60_000;
  return Math.round((fillerCount / minutes) * 10) / 10;
}
