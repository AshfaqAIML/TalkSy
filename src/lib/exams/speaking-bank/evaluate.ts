/**
 * IELTS Speaking Masterclass — the deterministic evaluation engine
 * (PROMPT 47, Part 7).
 *
 * Every simulator or practice submission is analysed by this rule-based
 * layer FIRST: measured metrics (length, pace, fillers, self-correction,
 * linker variety, coverage of the authored requirements, sentence range,
 * lexical spread, spoken error patterns) are turned into four criterion
 * estimates — Fluency and Coherence, Lexical Resource, Grammatical Range
 * and Accuracy, Pronunciation — each with per-criterion feedback citing
 * measured evidence quoted verbatim from the transcript, and each
 * explicitly labelled an educational estimate against the publicly known
 * descriptor approach. The overall is the mean of the four, mirroring how
 * the real test derives the speaking band.
 *
 * The engine never hears the audio — it reads the learner-supplied
 * transcript — so the Pronunciation estimate is deliberately conservative
 * and arrives with replay-check observations rather than claims about the
 * actual sound. An optional AI layer (through the provider seam) then
 * ADDS a summary; it never overrides the deterministic scores.
 */

import type {
  SpeakingBankItem,
  SpeakingCueCard,
  SpeakingPart1Set,
  SpeakingPart3Set,
} from "@/data/exams/ielts/speaking-bank/types";
import { SPEAKING_CRITERIA, type SpeakingCriterionKey } from "@/data/exams/ielts/speaking-bank/types";

// ---------------------------------------------------------------------------
// Text utilities
// ---------------------------------------------------------------------------

const WORD_RE = /[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g;

function words(text: string): string[] {
  return text.toLowerCase().match(WORD_RE) ?? [];
}

export function countWords(text: string): number {
  return words(text).length;
}

export function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Loose stem match: case-insensitive, suffix-insensitive containment. */
function stemHit(haystackLower: string, stem: string): boolean {
  const s = stem.toLowerCase();
  if (haystackLower.includes(s)) return true;
  const head = s.replace(/(ing|ed|es|s|ly)$/i, "");
  if (head.length >= 3 && new RegExp(`\\b${escapeRe(head)}[a-z]{0,3}\\b`).test(haystackLower)) return true;
  return false;
}

// ---------------------------------------------------------------------------
// Measured metrics
// ---------------------------------------------------------------------------

const FILLERS: { label: string; re: RegExp }[] = [
  { label: "um", re: /\bum\b/gi },
  { label: "uh", re: /\buh\b/gi },
  { label: "er", re: /\ber\b/gi },
  { label: "erm", re: /\berm\b/gi },
  { label: "you know", re: /\byou know\b/gi },
  { label: "kind of", re: /\bkind of\b/gi },
  { label: "sort of", re: /\bsort of\b/gi },
  { label: "basically", re: /\bbasically\b/gi },
];
const REPAIR_MARKERS = ["i mean", "sorry", "let me", "or rather", "how do you say", "what's the word", "how can i say", "actually, no", "wait, no"];

const LINKER_FAMILIES: { family: string; markers: string[] }[] = [
  { family: "addition", markers: ["and also", "plus", "as well", "another thing", "on top of that", "furthermore"] },
  { family: "contrast", markers: ["but", "however", "although", "whereas", "on the other hand", "though", "instead"] },
  { family: "cause", markers: ["because", "since", "that's why", "due to", "thanks to"] },
  { family: "example", markers: ["for example", "for instance", "such as", "like when", "to give you an idea"] },
  { family: "sequence", markers: ["then", "after that", "next", "by the time", "eventually", "in the end", "at first"] },
  { family: "opinion", markers: ["i think", "in my view", "i'd say", "i suppose", "personally", "i believe", "in my opinion"] },
  { family: "concession", markers: ["i see what you mean", "admittedly", "of course", "that said", "even so", "granted"] },
  { family: "speculation", markers: ["might", "could", "may", "probably", "likely", "i wouldn't be surprised", "perhaps"] },
];

const COMPLEX_MARKERS = [
  "because", "when", "while", "although", "if", "since", "whereas", "which", "who", "so that",
  "even though", "as soon as", "the reason", "used to", "more than", "less than", "the most", "the best", "not only",
];

export type SpokenErrorPattern = {
  id: string;
  wrong: string;
  right: string;
  reason: string;
  test: RegExp;
};

export const SPOKEN_ERROR_PATTERNS: SpokenErrorPattern[] = [
  { id: "agree", wrong: "I am agree", right: "I agree", reason: "Agree is a verb in English — it needs no 'am'.", test: /\bi am agree/i },
  { id: "informations", wrong: "informations", right: "information", reason: "Information is uncountable — it never takes a plural -s.", test: /\binformations\b/i },
  { id: "advices", wrong: "advices", right: "advice", reason: "Advice is uncountable — say 'pieces of advice' if you need more than one.", test: /\badvices\b/i },
  { id: "peoples", wrong: "peoples", right: "people", reason: "People is already plural; 'peoples' means ethnic groups.", test: /\bpeoples\b/i },
  { id: "more-better", wrong: "more better", right: "better", reason: "Better is already comparative — double marking is ungrammatical.", test: /\bmore better\b/i },
  { id: "did-went", wrong: "did went", right: "did go", reason: "After the auxiliary 'did' the main verb stays in its base form.", test: /\bdid (went|saw|ate|took|came|made|got|had)\b/i },
  { id: "since-years", wrong: "since three years", right: "for three years", reason: "A duration takes 'for'; 'since' marks a start point.", test: /\bsince (two|three|four|five|six|seven|eight|nine|ten|many|several) \w+?s?\b/i },
  { id: "explain-me", wrong: "explain me", right: "explain to me", reason: "Explain needs 'to' before the person.", test: /\bexplains? me\b/i },
  { id: "discuss-about", wrong: "discuss about", right: "discuss", reason: "Discuss already carries its object directly.", test: /\bdiscuss about\b/i },
  { id: "depend-of", wrong: "depend of", right: "depend on", reason: "The fixed preposition after depend is 'on'.", test: /\bdepends? of\b/i },
  { id: "married-with", wrong: "married with", right: "married to", reason: "The fixed preposition after married is 'to'.", test: /\bmarried with\b/i },
  { id: "in-weekend", wrong: "in the weekend", right: "at the weekend", reason: "Weekend takes 'at' in British English.", test: /\bin the weekend\b/i },
  { id: "make-photo", wrong: "make a photo", right: "take a photo", reason: "English takes photos; it does not make them.", test: /\bmake a photo\b/i },
  { id: "an-before-consonant", wrong: "an before a consonant sound", right: "a", reason: "Use 'a' before consonant sounds (an hour and an honest are the exceptions).", test: /\ban (?!hour|honest|heir|honour)[bcdfgjklmnpqrstvwxyz]\w*\b/i },
];

export type SpeakingMetrics = {
  wordCount: number;
  sentenceCount: number;
  avgSentenceWords: number;
  sentenceSpread: number;
  wpm: number;
  fillers: number;
  fillerRate: number;
  repairs: number;
  linkerFamilies: number;
  complexHits: number;
  typeTokenRatio: number;
  repetitionRatio: number;
  errorCount: number;
  topicVocabHits: number;
  topicVocabTotal: number;
  coverage: number;
  missedRequirements: string[];
  perAnswer: { words: number; sentences: number; covered: boolean }[];
  durationSec: number;
  part: 1 | 2 | 3;
  kind: string;
};

function measureBase(transcript: string, durationSec: number): Omit<
  SpeakingMetrics,
  "coverage" | "missedRequirements" | "perAnswer" | "topicVocabHits" | "topicVocabTotal" | "part" | "kind"
> {
  const tokens = words(transcript);
  const sentences = splitSentences(transcript);
  const lower = ` ${transcript.toLowerCase()} `;
  const sentenceLengths = sentences.map((s) => words(s).length).filter((n) => n > 0);
  const avg = sentenceLengths.length > 0 ? sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length : 0;
  const spread = sentenceLengths.length > 1 ? Math.max(...sentenceLengths) - Math.min(...sentenceLengths) : 0;

  let fillers = 0;
  for (const f of FILLERS) fillers += (transcript.match(f.re) ?? []).length;
  const repairs = REPAIR_MARKERS.reduce((a, m) => a + occurrences(lower, m), 0);

  const linkerFamilies = LINKER_FAMILIES.filter((f) => f.markers.some((m) => lower.includes(m))).length;
  const complexHits = COMPLEX_MARKERS.reduce((a, m) => a + occurrences(lower, m), 0);

  const unique = new Set(tokens);
  const ttr = tokens.length > 0 ? unique.size / tokens.length : 0;

  // Sentence-initial repetition + repeated bigrams.
  const initials = sentences.map((s) => words(s)[0] ?? "").filter(Boolean);
  const initialCounts = new Map<string, number>();
  for (const w of initials) initialCounts.set(w, (initialCounts.get(w) ?? 0) + 1);
  const repeatedInitials = [...initialCounts.values()].reduce((a, n) => a + Math.max(0, n - 1), 0);
  const bigrams = new Map<string, number>();
  for (let i = 0; i < tokens.length - 1; i++) {
    const key = `${tokens[i]} ${tokens[i + 1]}`;
    bigrams.set(key, (bigrams.get(key) ?? 0) + 1);
  }
  const repeatedBigrams = [...bigrams.values()].reduce((a, n) => a + Math.max(0, n - 1), 0);
  const repetitionRatio = tokens.length > 0 ? (repeatedInitials * 2 + repeatedBigrams) / tokens.length : 0;

  const errorCount = SPOKEN_ERROR_PATTERNS.filter((p) => p.test.test(transcript)).length;

  const minutes = Math.max(durationSec, 1) / 60;
  return {
    wordCount: tokens.length,
    sentenceCount: sentences.length,
    avgSentenceWords: avg,
    sentenceSpread: spread,
    wpm: tokens.length / minutes,
    fillers,
    fillerRate: tokens.length > 0 ? (fillers / tokens.length) * 100 : 0,
    repairs,
    linkerFamilies,
    complexHits,
    typeTokenRatio: ttr,
    repetitionRatio,
    errorCount,
    durationSec,
  };
}

function occurrences(haystackLower: string, needle: string): number {
  if (!needle) return 0;
  let count = 0;
  let pos = haystackLower.indexOf(needle);
  while (pos !== -1) {
    count += 1;
    pos = haystackLower.indexOf(needle, pos + needle.length);
  }
  return count;
}

// ---------------------------------------------------------------------------
// Requirement coverage per item kind
// ---------------------------------------------------------------------------

export type CoverageResult = {
  coverage: number;
  missedRequirements: string[];
  perAnswer: { words: number; sentences: number; covered: boolean }[];
  topicVocabHits: number;
  topicVocabTotal: number;
};

export function measureCoverage(item: SpeakingBankItem, answers: string[]): CoverageResult {
  const perAnswer: CoverageResult["perAnswer"] = [];
  const joined = answers.join(" ").toLowerCase();

  if (item.kind === "part1") {
    const set = item as SpeakingPart1Set;
    let coveredCount = 0;
    answers.forEach((answer, i) => {
      const q = set.questions[i];
      const lower = answer.toLowerCase();
      const covered = q ? q.expected.some((stem) => stemHit(lower, stem)) : answer.trim().length > 0;
      if (covered) coveredCount += 1;
      perAnswer.push({ words: countWords(answer), sentences: splitSentences(answer).length, covered });
    });
    const vocab = set.vocabulary.map((v) => v.word);
    return {
      coverage: set.questions.length > 0 ? coveredCount / set.questions.length : 0,
      missedRequirements: set.questions
        .map((q, i) => ({ q, i }))
        .filter(({ i }) => !perAnswer[i]?.covered)
        .map(({ q, i }) => `Question ${i + 1} (“${q.question}”) is not visibly answered`),
      perAnswer,
      topicVocabHits: vocab.filter((w) => joined.includes(w.toLowerCase().split(" ")[0])).length,
      topicVocabTotal: vocab.length,
    };
  }

  if (item.kind === "cue-card") {
    const card = item as SpeakingCueCard;
    const answer = answers[0] ?? "";
    const lower = answer.toLowerCase();
    const missed = card.requirements.filter((r) => !r.keywords.some((k) => stemHit(lower, k)));
    const vocab = card.vocabularySuggestions.map((v) => v.word);
    return {
      coverage: card.requirements.length > 0 ? 1 - missed.length / card.requirements.length : 0,
      missedRequirements: missed.map((r) => r.description),
      perAnswer: [{ words: countWords(answer), sentences: splitSentences(answer).length, covered: missed.length === 0 }],
      topicVocabHits: vocab.filter((w) => lower.includes(w.toLowerCase().split(" ")[0])).length,
      topicVocabTotal: vocab.length,
    };
  }

  if (item.kind === "part3") {
    const set = item as SpeakingPart3Set;
    let coveredCount = 0;
    answers.forEach((answer, i) => {
      const q = set.questions[i];
      const lower = answer.toLowerCase();
      const covered = q ? q.expected.some((stem) => stemHit(lower, stem)) : answer.trim().length > 0;
      if (covered) coveredCount += 1;
      perAnswer.push({ words: countWords(answer), sentences: splitSentences(answer).length, covered });
    });
    const vocab = set.vocabulary.map((v) => v.word);
    return {
      coverage: set.questions.length > 0 ? coveredCount / set.questions.length : 0,
      missedRequirements: set.questions
        .map((q, i) => ({ q, i }))
        .filter(({ i }) => !perAnswer[i]?.covered)
        .map(({ q, i }) => `Question ${i + 1} (“${q.question}”) is not visibly answered`),
      perAnswer,
      topicVocabHits: vocab.filter((w) => joined.includes(w.toLowerCase().split(" ")[0])).length,
      topicVocabTotal: vocab.length,
    };
  }

  // Practice cue cards: coverage from the bullets themselves.
  const answer = answers[0] ?? "";
  const lower = answer.toLowerCase();
  const prompts = [...item.bullets, item.extension];
  const missed = prompts.filter((p) => {
    const key = keyStems(p);
    return key.length > 0 && !key.some((k) => stemHit(lower, k));
  });
  return {
    coverage: prompts.length > 0 ? 1 - missed.length / prompts.length : 0,
    missedRequirements: missed.map((p) => `The prompt “${p}” is not visibly covered`),
    perAnswer: [{ words: countWords(answer), sentences: splitSentences(answer).length, covered: missed.length === 0 }],
    topicVocabHits: item.vocabularyHints.filter((h) => lower.includes(h.toLowerCase().split(" ")[0])).length,
    topicVocabTotal: item.vocabularyHints.length,
  };
}

function keyStems(prompt: string): string[] {
  const stop = new Set([
    "you", "your", "the", "and", "for", "not", "say", "should", "explain", "describe",
  ]);
  return words(prompt).filter((w) => w.length > 2 && !stop.has(w));
}

// ---------------------------------------------------------------------------
// Criterion reports
// ---------------------------------------------------------------------------

export type CriterionFeedbackLine = { kind: "strength" | "issue" | "neutral"; text: string };

export type SpeakingCriterionReport = {
  key: SpeakingCriterionKey;
  name: string;
  /** Band estimate 4.0–9.0, 0.5 steps — an educational estimate. */
  score: number;
  maxScore: 9;
  unit: "band";
  descriptor: string;
  feedback: CriterionFeedbackLine[];
  evidence: { quote: string; note: string }[];
};

export type SpeakingExtras = {
  sentenceCorrections: { wrong: string; right: string; reason: string }[];
  vocabularySuggestions: { insteadOf: string; use: string; why: string }[];
  fluencyFeedback: string[];
  pronunciationObservations: { riskWord: string; checkThis: string }[];
  improvedResponses: { original: string; improved: string; note: string }[];
};

export type SpeakingEvaluation = {
  criteria: SpeakingCriterionReport[];
  overall: number;
  overallLabel: string;
  metrics: SpeakingMetrics;
  strengths: string[];
  improvements: string[];
  extras: SpeakingExtras;
  disclaimers: string[];
  status: "complete" | "insufficient";
  aiAvailable: boolean;
  aiCommentary: { summary: string; strengths: string[]; improvements: string[]; examinerNote: string } | null;
};

const clampBand = (v: number): number => Math.min(9, Math.max(4, Math.round(v * 2) / 2));

function quoteFrom(transcript: string, predicate: (s: string) => boolean): string {
  const sentences = splitSentences(transcript);
  return (sentences.find(predicate) ?? sentences[0] ?? transcript).slice(0, 300);
}

/** Minimum meaningful length before the engine can say anything useful. */
export function minimumReliableWords(item: SpeakingBankItem): number {
  if (item.kind === "cue-card" || item.kind === "practice-cue-card") return 60;
  const questionCount =
    item.kind === "part1"
      ? (item as SpeakingPart1Set).questions.length
      : (item as SpeakingPart3Set).questions.length;
  return questionCount * 8;
}

function durationWindow(item: SpeakingBankItem): { min: number; max: number } | null {
  if (item.kind === "cue-card" || item.kind === "practice-cue-card") return { min: 60, max: 120 };
  return null;
}

// --- Fluency and Coherence ---------------------------------------------------

function buildFcCriterion(item: SpeakingBankItem, m: SpeakingMetrics, transcript: string): SpeakingCriterionReport {
  const def = SPEAKING_CRITERIA[0];
  const feedback: CriterionFeedbackLine[] = [];
  const evidence: { quote: string; note: string }[] = [];
  let score = 4.0;

  // Task coverage is the backbone of coherence.
  score += m.coverage * 2.0;

  // Length against the part's expectation.
  const target = item.kind === "cue-card" || item.kind === "practice-cue-card" ? 180 : 90;
  const lengthRatio = m.wordCount / target;
  if (lengthRatio >= 0.8) score += 1.0;
  else if (lengthRatio >= 0.5) score += 0.5;
  else score -= 1.0;

  // Linker variety across functional families.
  if (m.linkerFamilies >= 3) score += 1.0;
  else if (m.linkerFamilies >= 2) score += 0.5;

  // Filler density (per 100 words).
  if (m.fillerRate < 1) score += 0.5;
  else if (m.fillerRate > 5) score -= 1.0;

  // Repetition.
  if (m.repetitionRatio > 0.15) score -= 0.5;

  // Part 2 duration discipline.
  const window = durationWindow(item);
  if (window) {
    if (m.durationSec >= window.min && m.durationSec <= window.max + 15) {
      score += 0.5;
      feedback.push({ kind: "strength", text: `You spoke for ${m.durationSec}s against the official one-to-two-minute window — the discipline examiners look for.` });
    } else if (m.durationSec < window.min) {
      score -= 1.0;
      feedback.push({ kind: "issue", text: `Only ${m.durationSec}s of speech against the official one-to-two-minute window: stopping well before the minute mark starves every criterion, whatever the language quality.` });
    } else {
      feedback.push({ kind: "neutral", text: `${m.durationSec}s of speech — slightly over the two-minute window; fine for practice, though the examiner would stop you at two.` });
    }
  }

  feedback.push(
    m.coverage >= 0.99
      ? { kind: "strength", text: "Every question or prompt is visibly answered — the coverage the coherence descriptor asks for." }
      : { kind: "issue", text: `${m.missedRequirements.length} of the item's prompts are not visibly answered — see the requirement list in the review panel.` },
  );
  feedback.push(
    m.linkerFamilies >= 3
      ? { kind: "strength", text: `Ideas are connected through ${m.linkerFamilies} different linker families (contrast, cause, example…) — audible structure.` }
      : { kind: "issue", text: `Only ${m.linkerFamilies} linker famil${m.linkerFamilies === 1 ? "y is" : "ies are"} in use — connect your moves with because, whereas, for instance, and that's why.` },
  );
  if (m.fillerRate > 5) {
    feedback.push({ kind: "issue", text: `${m.fillers} filler${m.fillers === 1 ? "" : "s"} in ${m.wordCount} words (${m.fillerRate.toFixed(1)} per 100) — swap “um” for a silent meaning pause; pauses do not cost marks, groaning for words does.` });
  } else if (m.fillerRate < 1) {
    feedback.push({ kind: "strength", text: "Almost no fillers — hesitation is either absent or hidden in clean pauses, exactly the descriptor's “effort hidden”." });
  }
  if (m.repairs >= 1 && m.repairs <= 5) {
    feedback.push({ kind: "strength", text: `${m.repairs} natural self-correction${m.repairs === 1 ? "" : "s"} (“I mean…”, “sorry, let me…”) — the sound of live speech, not a fault.` });
  } else if (m.repairs > 6) {
    feedback.push({ kind: "issue", text: `${m.repairs} restarts and repairs — so many that the thread is hard to follow; finish sentences before repairing them.` });
  }
  if (m.repetitionRatio > 0.15) {
    feedback.push({ kind: "issue", text: "Sentence openings and word pairs repeat noticeably — vary your openings and prune repeated phrases." });
  }

  evidence.push({
    quote: quoteFrom(transcript, (s) => /\b(because|so|but|which|when|although|for example|for instance|that's why)\b/i.test(s)),
    note: "The connective tissue the coherence descriptor listens for.",
  });

  return { key: def.key, name: def.name, score: clampBand(score), maxScore: 9, unit: "band", descriptor: def.descriptor, feedback, evidence };
}

// --- Lexical Resource --------------------------------------------------------

const GENERIC_UPGRADES: { insteadOf: RegExp; use: string; why: string }[] = [
  { insteadOf: /\bvery good\b/i, use: "rewarding / worthwhile", why: "Precision beats intensity with evaluative adjectives." },
  { insteadOf: /\bvery bad\b/i, use: "disappointing / frustrating", why: "A specific negative says more than a scaled one." },
  { insteadOf: /\ba lot of\b/i, use: "plenty of / a great deal of", why: "Register-appropriate quantity phrases." },
  { insteadOf: /\bthing\b/i, use: "the specific noun (activity, habit, advantage…)", why: "“Thing” hides the exact meaning a precise noun would carry." },
  { insteadOf: /\bnice\b/i, use: "enjoyable / pleasant / thoughtful", why: "Choose the flavour of nice you actually mean." },
  { insteadOf: /\bbig\b/i, use: "spacious (rooms) / significant (matters)", why: "Match the adjective to what is large." },
  { insteadOf: /\bgood\b/i, use: "effective / reliable / brilliant", why: "Pick the quality you mean rather than the default adjective." },
];

function itemVocabulary(item: SpeakingBankItem): { word: string; partOfSpeech: string; meaning: string; example: string }[] {
  if (item.kind === "part1" || item.kind === "part3") return item.vocabulary;
  if (item.kind === "cue-card") return item.vocabularySuggestions;
  return item.vocabularyHints.map((h) => ({ word: h, partOfSpeech: "", meaning: "", example: "" }));
}

function buildLrCriterion(
  item: SpeakingBankItem,
  m: SpeakingMetrics,
  transcript: string,
  suggestions: SpeakingExtras["vocabularySuggestions"],
): SpeakingCriterionReport {
  const def = SPEAKING_CRITERIA[1];
  const feedback: CriterionFeedbackLine[] = [];
  let score = 4.0;

  // Topic vocabulary use.
  const vocabRatio = m.topicVocabTotal > 0 ? m.topicVocabHits / m.topicVocabTotal : 0;
  score += Math.min(2.0, vocabRatio * 4.0);
  if (m.topicVocabTotal > 0 && m.topicVocabHits === 0) score -= 0.5;

  // Lexical diversity (type-token ratio on short transcripts is inflated;
  // moderate expectations).
  if (m.typeTokenRatio >= 0.55) score += 1.0;
  else if (m.typeTokenRatio >= 0.45) score += 0.5;

  // Repetition penalty.
  if (m.repetitionRatio > 0.2) score -= 0.5;

  feedback.push(
    m.topicVocabTotal === 0
      ? { kind: "neutral", text: "This item sets no topic vocabulary list; lexical range is judged from diversity and precision." }
      : m.topicVocabHits >= Math.ceil(m.topicVocabTotal * 0.3)
        ? { kind: "strength", text: `${m.topicVocabHits} of the item's ${m.topicVocabTotal} suggested words and phrases appear — the topic is spoken in its own vocabulary.` }
        : { kind: "issue", text: `Only ${m.topicVocabHits} of ${m.topicVocabTotal} suggested topic words appear — the bank's vocabulary list (revealed after submission) is your next lift.` },
  );
  feedback.push(
    m.typeTokenRatio >= 0.55
      ? { kind: "strength", text: `Word variety is wide (${Math.round(m.typeTokenRatio * 100)}% unique tokens) with little recycling.` }
      : { kind: "issue", text: `Word variety is narrow (${Math.round(m.typeTokenRatio * 100)}% unique tokens) — the same words carry too much of the talk.` },
  );

  // Generic-word upgrades feed both the feedback and the suggestions list.
  for (const upgrade of GENERIC_UPGRADES) {
    if (upgrade.insteadOf.test(transcript) && suggestions.length < 6) {
      suggestions.push({
        insteadOf: `“${transcript.match(upgrade.insteadOf)?.[0] ?? ""}”`,
        use: upgrade.use,
        why: upgrade.why,
      });
    }
  }
  if (m.topicVocabTotal > 0 && m.topicVocabHits < Math.ceil(m.topicVocabTotal * 0.3)) {
    const bank = itemVocabulary(item)
      .slice(0, 3)
      .map((v) => v.word)
      .filter(Boolean);
    if (bank.length > 0) {
      suggestions.push({
        insteadOf: "your current wording",
        use: bank.join(" · "),
        why: "Straight from this item's suggested vocabulary — try one in your next attempt.",
      });
    }
  }
  if (suggestions.length > 0) {
    feedback.push({ kind: "neutral", text: `${suggestions.length} vocabulary upgrade${suggestions.length === 1 ? "" : "s"} suggested below — see “Vocabulary suggestions”.` });
  }

  const vocab = itemVocabulary(item);
  const evidenceQuote =
    vocab.length > 0
      ? quoteFrom(transcript, (s) => vocab.some((v) => v.word && s.toLowerCase().includes(v.word.toLowerCase().split(" ")[0])))
      : quoteFrom(transcript, (s) => words(s).length >= 10);
  return {
    key: def.key,
    name: def.name,
    score: clampBand(score),
    maxScore: 9,
    unit: "band",
    descriptor: def.descriptor,
    feedback,
    evidence: [{ quote: evidenceQuote, note: "Where the topic's own vocabulary shows up in your talk." }],
  };
}

// --- Grammatical Range and Accuracy -------------------------------------------

function buildGraCriterion(
  m: SpeakingMetrics,
  transcript: string,
  corrections: SpeakingExtras["sentenceCorrections"],
): SpeakingCriterionReport {
  const def = SPEAKING_CRITERIA[2];
  const feedback: CriterionFeedbackLine[] = [];
  let score = 4.0;

  // Complex structure variety.
  if (m.complexHits >= 7) score += 1.5;
  else if (m.complexHits >= 4) score += 1.0;
  else if (m.complexHits >= 2) score += 0.5;

  // Sentence-length spread shows range.
  if (m.sentenceSpread >= 8) score += 0.5;
  else if (m.sentenceSpread <= 3 && m.sentenceCount >= 3) score -= 0.5;

  // Error density (patterns per 100 words).
  const errorRate = m.wordCount > 0 ? (m.errorCount / m.wordCount) * 100 : 0;
  if (errorRate < 0.5) score += 1.0;
  else if (errorRate < 1.5) score += 0.5;
  else if (errorRate > 3) score -= 1.0;

  feedback.push(
    m.complexHits >= 7
      ? { kind: "strength", text: `${m.complexHits} complex-structure markers (because/which/although clauses, comparatives, conditionals) — the range the descriptor rewards.` }
      : { kind: "issue", text: `Only ${m.complexHits} complex-structure markers detected — join ideas with because, which, although and if-clauses rather than short chained sentences.` },
  );
  feedback.push(
    m.sentenceSpread >= 8
      ? { kind: "strength", text: `Sentence length ranges from short to long (spread of ${m.sentenceSpread} words) — audible variety.` }
      : { kind: "issue", text: "Sentences run at nearly uniform length — mix a short direct sentence with a longer subordinate one." },
  );
  if (m.errorCount > 0) {
    feedback.push({ kind: "issue", text: `${m.errorCount} spoken error pattern${m.errorCount === 1 ? "" : "s"} detected — corrected below in “Sentence corrections”.` });
  } else {
    feedback.push({ kind: "strength", text: "None of the common spoken error patterns (agreement, preposition, countability) were detected." });
  }

  // Build the sentence corrections with full sentences as evidence.
  const sentences = splitSentences(transcript);
  for (const pattern of SPOKEN_ERROR_PATTERNS) {
    const hit = sentences.find((s) => pattern.test.test(s));
    if (hit && corrections.length < 6) {
      let corrected = hit.replace(pattern.test, pattern.right);
      if (pattern.id === "did-went") {
        const map: Record<string, string> = { went: "go", saw: "see", ate: "eat", took: "take", came: "come", made: "make", got: "get", had: "have" };
        corrected = hit.replace(/\bdid (went|saw|ate|took|came|made|got|had)\b/i, (m2) => {
          const verb = m2.split(" ")[1].toLowerCase();
          return `did ${map[verb] ?? "go"}`;
        });
      }
      corrections.push({ wrong: hit.slice(0, 300), right: corrected.slice(0, 300), reason: pattern.reason });
    }
  }

  const evidenceQuote = quoteFrom(transcript, (s) => /\b(because|which|although|if|when|while|used to|more than)\b/i.test(s));
  return {
    key: def.key,
    name: def.name,
    score: clampBand(score),
    maxScore: 9,
    unit: "band",
    descriptor: def.descriptor,
    feedback,
    evidence: [{ quote: evidenceQuote, note: m.errorCount > 0 ? "A complex sentence that works — carry this range into the places flagged below." : "The complex structures that carry the range score." }],
  };
}

// --- Pronunciation -------------------------------------------------------------

const PRON_RISK_SETS: { test: RegExp; check: string }[] = [
  { test: /\b(think|three|through|threw|thing|something|anything|nothing|both|with|without|mother|weather|whether|breathe|breath)\b/gi, check: "Tongue between the teeth for /θ/ — make sure it never slips to /s/ or /t/." },
  { test: /\b(very|video|voice|value|view|give|have|live|love)\b/gi, check: "/v/ needs top teeth on the bottom lip — distinct from /w/ and /b/." },
  { test: /\b(want|week|wine|winter|would|work|world|word)\b/gi, check: "/w/ is a rounded glide — keep it apart from /v/." },
  { test: /\b(wanted|needed|decided|started|ended|intended|suggested)\b/gi, check: "The -ed after t/d sounds is an extra syllable: “want-id”, not “want-d”." },
  { test: /\b(comfortable|vegetable|interesting|temperature|development|opportunity|particularly)\b/gi, check: "These words lose a vowel in natural speech (COMF-tə-bəl) — check the syllable you stress." },
  { test: /\b(support|about|away|tomorrow|ago|again|banana|photograph|photography)\b/gi, check: "The unstressed syllable is a schwa — keep it weak, not fully pronounced." },
  { test: /\b(buses|watches|finishes|washes|boxes|changes)\b/gi, check: "Plural -es after sibilants adds a syllable: “bus-iz”, not “buss”." },
];

function buildPronCriterion(m: SpeakingMetrics, transcript: string, observations: SpeakingExtras["pronunciationObservations"]): SpeakingCriterionReport {
  const def = SPEAKING_CRITERIA[3];
  const feedback: CriterionFeedbackLine[] = [];

  // The engine cannot hear the recording — say so, then estimate
  // conservatively from the text-visible proxies: pace plausibility,
  // clean delivery markers, rhythm variety and clean word forms.
  let score = 5.0;
  const wpmOk = m.wpm >= 90 && m.wpm <= 170;
  if (wpmOk) score += 0.5;
  if (m.fillerRate < 2) score += 0.5;
  if (m.sentenceSpread >= 8) score += 0.5;
  if (m.errorCount === 0) score += 0.5;
  if (m.repairs >= 1 && m.repairs <= 5) score += 0.25;

  feedback.push({
    kind: "neutral",
    text: "This engine reads your transcript — it cannot hear your voice. The estimate below is deliberately conservative and the observations are replay checks, not verdicts.",
  });
  feedback.push(
    wpmOk
      ? { kind: "strength", text: `A pace of ${Math.round(m.wpm)} words per minute is inside the natural speaking band (roughly 90–170) — pace is what stress and intonation ride on.` }
      : { kind: "issue", text: `${Math.round(m.wpm)} words per minute is ${m.wpm < 90 ? "slower" : "faster"} than the natural band (roughly 90–170) — at this pace stress patterns tend to flatten; adjust by ten per cent.` },
  );

  // Risk-word observations (capped at 6, first appearances).
  const sentences = splitSentences(transcript);
  const seen = new Set<string>();
  for (const sentence of sentences) {
    for (const risk of PRON_RISK_SETS) {
      const matches = sentence.match(risk.test);
      if (matches && observations.length < 6) {
        const word = matches[0].toLowerCase();
        if (seen.has(word)) continue;
        seen.add(word);
        observations.push({ riskWord: word, checkThis: risk.check });
      }
    }
  }
  if (observations.length > 0) {
    feedback.push({ kind: "neutral", text: `${observations.length} replay check${observations.length === 1 ? "" : "s"} below — replay your recording and listen only for these words.` });
  } else {
    feedback.push({ kind: "neutral", text: "No high-risk sounds surfaced in your transcript; replay your recording against the four-question check (followable? stressed? melodic? paused at meaning?)." });
  }

  feedback.push({
    kind: "neutral",
    text: "Remember the criterion's honest frame: intelligibility in ANY accent — a clear Indian, Nigerian, Brazilian or Chinese accent scores exactly as high as any British or American one.",
  });

  const evidenceQuote = quoteFrom(transcript, (s) => words(s).length >= 8);
  return {
    key: def.key,
    name: def.name,
    score: clampBand(score),
    maxScore: 9,
    unit: "band",
    descriptor: def.descriptor,
    feedback,
    evidence: [{ quote: evidenceQuote, note: "Read this sentence aloud once more — the replay check starts here." }],
  };
}

// ---------------------------------------------------------------------------
// Extras: improved responses from the bank's own authored material
// ---------------------------------------------------------------------------

function buildImprovedResponses(
  item: SpeakingBankItem,
  answers: string[],
  perAnswer: { words: number; sentences: number; covered: boolean }[],
): SpeakingExtras["improvedResponses"] {
  const improved: SpeakingExtras["improvedResponses"] = [];
  if (item.kind === "part1") {
    item.questions.forEach((q, i) => {
      if (improved.length >= 3) return;
      const answer = answers[i] ?? "";
      if (countWords(answer) < 15 || (perAnswer[i]?.sentences ?? 0) < 2) {
        improved.push({
          original: answer.trim().slice(0, 200) || "(no answer given)",
          improved: q.improved,
          note: "The bank's improved version of this exact answer — same content, developed with the layer method (answer, reason, detail).",
        });
      }
    });
  } else if (item.kind === "part3") {
    item.questions.forEach((q, i) => {
      if (improved.length >= 3) return;
      const answer = answers[i] ?? "";
      if (countWords(answer) < 20) {
        improved.push({
          original: answer.trim().slice(0, 200) || "(no answer given)",
          improved: q.modelAnswer,
          note: `The bank's model for this ${q.level}-level question — note the moves it makes.`,
        });
      }
    });
  } else if (item.kind === "cue-card") {
    const answer = answers[0] ?? "";
    if (countWords(answer) < 140) {
      const opening = splitSentences(item.sampleResponse.transcript).slice(0, 2).join(" ");
      improved.push({
        original: answer.trim().slice(0, 200) || "(no answer given)",
        improved: opening,
        note: "How the bank's sample response opens its two minutes — borrow the shape (what it is + why it was chosen), never the words.",
      });
    }
  }
  if (improved.length === 0) {
    improved.push({
      original: "—",
      improved:
        item.kind === "cue-card" || item.kind === "practice-cue-card"
          ? "Cover each prompt in order, then spend your final twenty seconds on the “and explain” line — evaluation, not narration."
          : "Answer directly, give the reason in the next sentence, add one concrete detail, then stop.",
      note: "No thin answers were detected — this is the standing shape to keep.",
    });
  }
  return improved;
}

// ---------------------------------------------------------------------------
// Disclaimers + AI seam
// ---------------------------------------------------------------------------

export const SPEAKING_DISCLAIMERS = [
  "All band numbers are educational estimates produced by a rule-based engine against the publicly known descriptor approach — not official IELTS scores.",
  "The engine reads your transcript; it cannot hear your recording. The Pronunciation estimate is the roughest of the four — use the replay checks.",
  "An examiner also judges meaning, nuance and interaction; where the engine marks a prompt uncovered, check the requirement list revealed after submission.",
];

async function aiCommentary(transcript: string, overall: number): Promise<SpeakingEvaluation["aiCommentary"]> {
  try {
    const { getLlmProvider } = await import("@/lib/llm");
    const { withUsageLogging } = await import("@/lib/llm/usage");
    const provider = withUsageLogging(getLlmProvider(), { feature: "speaking-masterclass" });
    const reply = await provider.complete({
      system: [
        "You are an experienced IELTS Speaking examiner writing a short coaching note on a candidate's transcribed spoken response.",
        "A rule-based engine has already measured the transcript and produced criterion estimates; your job is ONLY an encouraging, specific commentary layer — do not assign or promise scores.",
        "Reply with ONLY a JSON object:",
        `{"summary": "<three sentences: what genuinely worked, what limits it, the single highest-value lift>", "strengths": ["<two specific strengths, quoting the candidate's own words where useful>"], "improvements": ["<three concrete, doable revisions for spoken delivery>"], "examinerNote": "<one sentence on how an examiner would read this performance, hedged as an estimate>"}`,
      ].join("\n"),
      messages: [
        {
          role: "user",
          content: [
            `MEASURED: ${""}coverage, pace and structure metrics already reflected in the engine's estimate of band ${overall.toFixed(1)} (an educational estimate).`,
            `CANDIDATE TRANSCRIPT (self-transcribed):\n${transcript.slice(0, 6000)}`,
          ].join("\n"),
        },
      ],
      timeoutMs: 45_000,
    });
    const fenced = reply.match(/```(?:json)?\s*([\s\S]*?)```/);
    const candidate = fenced ? fenced[1] : reply;
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end === -1) return null;
    const parsed = JSON.parse(candidate.slice(start, end + 1)) as Record<string, unknown>;
    const str = (v: unknown, cap = 400): string => (typeof v === "string" ? v.slice(0, cap) : "");
    const arr = (v: unknown, cap: number): string[] =>
      Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").slice(0, cap).map((x) => x.slice(0, 300)) : [];
    const summary = str(parsed.summary);
    if (!summary) return null;
    return {
      summary,
      strengths: arr(parsed.strengths, 3),
      improvements: arr(parsed.improvements, 4),
      examinerNote: str(parsed.examinerNote, 300),
    };
  } catch {
    return null; // provider unavailable / timeout / unparsable → deterministic-only report
  }
}

// ---------------------------------------------------------------------------
// Main entry
// ---------------------------------------------------------------------------

export type SpeakingEvaluationInput = {
  /** One transcript per question (Part 1/3) or a single transcript (Part 2). */
  answers: string[];
  durationSec: number;
};

export async function evaluateSpeaking(
  item: SpeakingBankItem,
  input: SpeakingEvaluationInput,
): Promise<SpeakingEvaluation> {
  const transcript = input.answers.join("\n\n");
  const base = measureBase(transcript, input.durationSec);
  const cov = measureCoverage(item, input.answers);
  const m: SpeakingMetrics = {
    ...base,
    coverage: cov.coverage,
    missedRequirements: cov.missedRequirements,
    perAnswer: cov.perAnswer,
    topicVocabHits: cov.topicVocabHits,
    topicVocabTotal: cov.topicVocabTotal,
    part: item.kind === "part1" ? 1 : item.kind === "part3" ? 3 : 2,
    kind: item.kind,
  };

  if (m.wordCount < minimumReliableWords(item)) {
    return {
      criteria: [],
      overall: 0,
      overallLabel: "Too short to evaluate",
      metrics: m,
      strengths: [],
      improvements: [
        `Speak (or type) a fuller response first — at least ${minimumReliableWords(item)} words before the engine can say anything useful.`,
      ],
      extras: { sentenceCorrections: [], vocabularySuggestions: [], fluencyFeedback: [], pronunciationObservations: [], improvedResponses: [] },
      disclaimers: SPEAKING_DISCLAIMERS,
      status: "insufficient",
      aiAvailable: false,
      aiCommentary: null,
    };
  }

  const corrections: SpeakingExtras["sentenceCorrections"] = [];
  const suggestions: SpeakingExtras["vocabularySuggestions"] = [];
  const observations: SpeakingExtras["pronunciationObservations"] = [];

  const criteria = [
    buildFcCriterion(item, m, transcript),
    buildLrCriterion(item, m, transcript, suggestions),
    buildGraCriterion(m, transcript, corrections),
    buildPronCriterion(m, transcript, observations),
  ];
  const overall = clampBand(criteria.reduce((a, c) => a + c.score, 0) / criteria.length);

  // Fluency feedback lines (Part 7's dedicated fluency feedback).
  const fluencyFeedback: string[] = [];
  fluencyFeedback.push(
    m.wpm >= 90 && m.wpm <= 170
      ? `Pace: ${Math.round(m.wpm)} wpm — inside the natural band; keep the meaning pauses.`
      : `Pace: ${Math.round(m.wpm)} wpm — aim for the natural band (roughly 90–170 wpm) by adjusting ten per cent.`,
  );
  fluencyFeedback.push(
    m.fillers <= 2
      ? `Fillers: ${m.fillers} detected — clean.`
      : `Fillers: ${m.fillers} (${m.fillerRate.toFixed(1)} per 100 words) — replace “um/you know” with a silent pause at the next meaning boundary.`,
  );
  fluencyFeedback.push(
    m.repairs === 0
      ? "Self-correction: none detected — a natural “I mean…” repair is welcome, not penalised."
      : `Self-correction: ${m.repairs} — ${m.repairs <= 5 ? "a healthy amount of live speech." : "enough to blur the thread; finish the sentence, then repair."}`,
  );
  if (item.kind === "part1") {
    const thin = m.perAnswer.filter((a) => a.sentences < 2).length;
    fluencyFeedback.push(
      thin === 0
        ? "Length: every answer reaches at least two sentences — the Part 1 calibration."
        : `Length: ${thin} answer${thin === 1 ? "" : "s"} still under two sentences — extend with one reason or detail.`,
    );
  }

  const extras: SpeakingExtras = {
    sentenceCorrections: corrections,
    vocabularySuggestions: suggestions,
    fluencyFeedback,
    pronunciationObservations: observations,
    improvedResponses: buildImprovedResponses(item, input.answers, m.perAnswer),
  };

  const strengths = criteria
    .flatMap((c) => c.feedback.filter((f) => f.kind === "strength").map((f) => `${c.name}: ${f.text}`))
    .slice(0, 5);
  const improvements = criteria
    .flatMap((c) => c.feedback.filter((f) => f.kind === "issue").map((f) => `${c.name}: ${f.text}`))
    .slice(0, 6);
  if (m.missedRequirements.length > 0) {
    improvements.push(`Task coverage: ${m.missedRequirements.length} prompt(s) not visibly answered — see the requirement list in the review panel.`);
  }

  const ai = await aiCommentary(transcript, overall);

  return {
    criteria,
    overall,
    overallLabel: `Estimated band ${overall.toFixed(1)} (educational estimate)`,
    metrics: m,
    strengths,
    improvements,
    extras,
    disclaimers: SPEAKING_DISCLAIMERS,
    status: "complete",
    aiAvailable: ai !== null,
    aiCommentary: ai,
  };
}
