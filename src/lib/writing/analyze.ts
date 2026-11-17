/**
 * Writing feedback engine — the deterministic layer.
 *
 * Two clearly separated feedback layers, exactly like the Speaking Lab:
 *  1. MEASURED (this file): the 10-dimension rubric + rule-based issues,
 *     computed from the learner's text by fixed rules. No AI involved.
 *  2. AI COACH (ai.ts): language-model notes, always labeled, never part
 *     of a score, defensively parsed, silently optional.
 *
 * Every issue — measured or AI — must teach, never just rewrite: original,
 * correction, explanation, grammar concept, additional example and a
 * suggested exercise. The engine NEVER returns a rewritten paragraph.
 */

import type {
  FreeWritingTask,
  WritingDimension,
  WritingIssue,
  WritingMeasured,
} from "@/data/writing/types";
import { checkSentence } from "@/lib/grammar/checker";
import type { GrammarIssue } from "@/data/grammar/types";
import { normalizeWord } from "@/lib/engine/normalize";
import { measureTranscript } from "@/lib/speaking/measure";

// ---------------------------------------------------------------------------
// Text utilities
// ---------------------------------------------------------------------------

function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/** Word-boundary phrase match — "i" must not match inside "is". */
function containsPhrase(lowerText: string, phrase: string): boolean {
  const trimmed = phrase.toLowerCase().trim();
  if (!trimmed) return false;
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9'])${escaped}([^a-z0-9']|$)`).test(lowerText);
}

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export function splitSentencesStrict(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.replace(/[^a-zA-Z0-9]/g, "").length > 0);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

// ---------------------------------------------------------------------------
// Word-choice confusions (deterministic, high-precision pairs only)
// ---------------------------------------------------------------------------

const WORD_CHOICE_RULES: {
  pattern: RegExp;
  instead: string;
  use: string;
  concept: string;
  example: string;
  exercise: string;
}[] = [
  {
    pattern: /\bthen\s+than\b|\bthan\s+then\b/gi,
    instead: "then / than mixed",
    use: "'than' compares (bigger than); 'then' sequences (first… then).",
    concept: "Comparatives vs. sequencers",
    example: "She is taller THAN her brother. First we ate, THEN we walked.",
    exercise: "Write three comparative sentences with 'than' and one story line with 'then'.",
  },
  {
    pattern: /\bshould\s+of\b|\bwould\s+of\b|\bcould\s+of\b/gi,
    instead: "should of / would of / could of",
    use: "should have / would have / could have",
    concept: "Perfect modals",
    example: "I should have called you yesterday.",
    exercise: "Rewrite three regrets: 'I should of…' → 'I should have…'.",
  },
  {
    pattern: /\bmake\s+a\s+mistake\s+of\b/gi,
    instead: "make a mistake of",
    use: "make a mistake in / by",
    concept: "make vs. do collocations",
    example: "I made a mistake in the calculation.",
    exercise: "Learn the pair list: make a mistake / do business / make a favour → do a favour.",
  },
  {
    pattern: /\bsaid\s+me\b/gi,
    instead: "said me",
    use: "told me / said to me",
    concept: "say vs. tell",
    example: "She told me the news. / She said to me, 'Come in.'",
    exercise: "Write two sentences about advice: one with 'told me', one with 'said'.",
  },
  {
    pattern: /\bdiscuss\s+about\b/gi,
    instead: "discuss about",
    use: "discuss (no preposition)",
    concept: "transitive verbs without prepositions",
    example: "We discussed the plan for an hour.",
    exercise: "Cross out the wrong preposition: discuss about, enter into, answer to.",
  },
  {
    pattern: /\bexplain\s+me\b/gi,
    instead: "explain me",
    use: "explain to me",
    concept: "ditransitive verbs",
    example: "Can you explain the rule to me?",
    exercise: "Rewrite: 'explain me the problem' → 'explain the problem to me'.",
  },
  {
    pattern: /\bvery\s+much\s+\w+er\b|\bmore\s+better\b|\bmost\s+\w+est\b/gi,
    instead: "double comparative",
    use: "one comparison marker only (bigger / more interesting / the biggest)",
    concept: "Comparative forms",
    example: "This is better, not 'more better'. It is the most useful book, not 'the most usefulest'.",
    exercise: "Correct five double comparatives: 'more faster', 'most highest', 'more better'.",
  },
];

// Common misspellings beyond the grammar-clinic rules.
const SPELLING_RULES: { wrong: RegExp; right: string; tip: string }[] = [
  { wrong: /\brecieve\b/gi, right: "receive", tip: "'i' before 'e'… except after 'c': receive." },
  { wrong: /\bdefinat(e|ly)\b/gi, right: "definite(ly)", tip: "think of 'finite' inside definite." },
  { wrong: /\bseperate\b/gi, right: "separate", tip: "there's 'a rat' in sep-A-rat-e." },
  { wrong: /\bbecuase\b|\bbecouse\b/gi, right: "because", tip: "be-cause: a cause." },
  { wrong: /\btomm?or?ow\b/gi, right: "tomorrow", tip: "one m, double r, double w is tomorrow." },
  { wrong: /\bwich\b/gi, right: "which", tip: "which has an 'h' at both ends of the sound." },
  { wrong: /\bthier\b/gi, right: "their", tip: "'their' has 'heir' inside — the heir owns things." },
  { wrong: /\balot\b/gi, right: "a lot", tip: "'a lot' is two words (an 'alot' is not an animal)." },
  { wrong: /\buntill\b/gi, right: "until", tip: "one l at the end." },
  { wrong: /\bbegining\b/gi, right: "beginning", tip: "double n before -ing after a short vowel." },
  { wrong: /\bwritting\b/gi, right: "writing", tip: "write drops the e; only one t." },
  { wrong: /\bthats\b/gi, right: "that's", tip: "contractions need their apostrophe." },
  { wrong: /\bdont\b/gi, right: "don't", tip: "missing apostrophe in don't." },
  { wrong: /\bim\b/g, right: "I'm", tip: "'I' is always capital; I'm needs its apostrophe." },
];

const CONNECTORS = [
  "however", "therefore", "moreover", "furthermore", "although", "though",
  "nevertheless", "consequently", "in addition", "for example", "for instance",
  "on the other hand", "as a result", "first", "second", "finally", "in conclusion",
  "because", "so", "but", "and then", "after that", "while", "whereas", "since",
];

const BASIC_WORD_OVERUSE = ["very", "really", "good", "bad", "nice", "thing", "things", "get", "got", "stuff"];

// ---------------------------------------------------------------------------
// Dimension → issue teaching payload (for grammar-clinic categories)
// ---------------------------------------------------------------------------

const GRAMMAR_CATEGORY_TEACHING: Record<
  string,
  { concept: string; example: string; exercise: string }
> = {
  "subject-verb-agreement": {
    concept: "Subject–verb agreement",
    example: "She works here. / They work here.",
    exercise: "Grammar School → Tenses: write five present-simple sentences with he/she/it subjects.",
  },
  "third-person": {
    concept: "Third person -s",
    example: "He plays, she watches, it rains.",
    exercise: "Transform five I-statements into he/she-statements.",
  },
  articles: {
    concept: "Articles (a / an / the)",
    example: "I have a dog. The dog is brown.",
    exercise: "Grammar School → Nouns: add the missing article to ten sentences.",
  },
  capitalization: {
    concept: "Capital letters",
    example: "My name is Ana. I am from Peru.",
    exercise: "Rewrite five sentences starting with the correct capital letter.",
  },
  negatives: {
    concept: "Negation",
    example: "I don't like fish. She isn't at home.",
    exercise: "Make five affirmative sentences negative.",
  },
  comparatives: {
    concept: "Comparatives and superlatives",
    example: "bigger than / the biggest; more interesting / the most interesting",
    exercise: "Compare three things in your room using both forms.",
  },
  countability: {
    concept: "Countable vs. uncountable nouns",
    example: "two books (countable) / some water (uncountable)",
    exercise: "Sort ten nouns into countable/uncountable and use each in a sentence.",
  },
  "word-choice": {
    concept: "Word choice",
    example: "I am 20 years old (not 'I have 20 years').",
    exercise: "Match ten common collocations to their correct verbs.",
  },
  prepositions: {
    concept: "Prepositions",
    example: "arrive AT the station, arrive IN Paris, depend ON.",
    exercise: "Grammar School → Prepositions: fill the gaps in fifteen sentences.",
  },
  "word-order": {
    concept: "Word order (SVO)",
    example: "I always drink coffee (adverb before the main verb).",
    exercise: "Unscramble five sentences with adverbs of frequency.",
  },
  punctuation: {
    concept: "Punctuation",
    example: "First, we ate. Then, we walked — one idea per sentence.",
    exercise: "Split two run-on sentences into four clean ones.",
  },
};

let issueCounter = 0;
function nextIssueId(): string {
  issueCounter += 1;
  return `w${issueCounter}`;
}

function grammarIssuesToWriting(issues: GrammarIssue[], max: number): WritingIssue[] {
  return issues.slice(0, max).map((issue) => {
    const teaching = GRAMMAR_CATEGORY_TEACHING[issue.category] ?? {
      concept: "Grammar",
      example: "—",
      exercise: "Review this rule in Grammar School.",
    };
    return {
      id: nextIssueId(),
      dimension: issue.category === "punctuation" ? "punctuation" : "grammar",
      source: "measured",
      original: issue.original,
      correction: issue.suggestion,
      explanation: issue.explanation,
      concept: teaching.concept,
      example: teaching.example,
      exercise: teaching.exercise,
      lessonSlug: issue.lessonSlug,
    };
  });
}

// ---------------------------------------------------------------------------
// The analyzer
// ---------------------------------------------------------------------------

export interface WritingAnalysis {
  measured: WritingMeasured;
  issues: WritingIssue[];
  /** Grouped grammar issues by sentence for the feedback panel. */
  wordCount: number;
}

export function analyzeWriting(
  text: string,
  task: FreeWritingTask,
): WritingAnalysis {
  const clean = text.replace(/\r\n/g, "\n").trim();
  const wordList = words(clean);
  const sentences = splitSentencesStrict(clean);
  const paragraphs = splitParagraphs(clean);
  const lower = ` ${clean.toLowerCase().replace(/\s+/g, " ")} `;
  const issues: WritingIssue[] = [];

  // ---- metrics ----------------------------------------------------------
  const sentenceWords = sentences.map((s) => words(s).length);
  const avgSentenceWords =
    sentences.length === 0 ? 0 : wordList.length / sentences.length;
  const longest = sentenceWords.length === 0 ? 0 : Math.max(...sentenceWords);
  const mean = avgSentenceWords || 1;
  const variance =
    sentenceWords.reduce((sum, n) => sum + (n - mean) ** 2, 0) /
    (sentenceWords.length || 1);
  const stdevRatio = mean === 0 ? 0 : Math.sqrt(variance) / mean;
  // Good prose mixes lengths: stdev/mean around 0.3–0.8.
  const variety =
    stdevRatio < 0.15 ? stdevRatio / 0.15 * 0.5 : stdevRatio > 1.1 ? Math.max(0.4, 1.1 / stdevRatio) : 1;

  const uniqueRatio = wordList.length === 0 ? 0 : new Set(wordList).size / wordList.length;

  const connectorsFound = CONNECTORS.filter((c) => lower.includes(` ${c} `) || lower.includes(`${c} `));
  const connectorCount = CONNECTORS.reduce(
    (sum, c) => sum + (clean.toLowerCase().split(c).length - 1),
    0,
  );

  // Checklist coverage.
  const checklistCovered = task.checklist.map((point) => ({
    id: point.id,
    label: point.label,
    covered: point.anyOf.some((phrase) => containsPhrase(lower, phrase)),
  }));
  const checklistCoverage =
    task.checklist.length === 0
      ? 0
      : checklistCovered.filter((c) => c.covered).length / task.checklist.length;

  const conventions = task.conventions ?? [];
  const conventionsCovered = conventions.map((point) => ({
    id: point.id,
    label: point.label,
    covered: point.anyOf.some((phrase) => containsPhrase(lower, phrase)),
  }));
  const conventionsCoverage =
    conventions.length === 0
      ? 1
      : conventionsCovered.filter((c) => c.covered).length / conventions.length;

  const topicKeywordHits = task.topicKeywords.filter((k) => containsPhrase(lower, k));
  const targetWordsUsed = (task.targetWords ?? []).filter((k) => containsPhrase(lower, k));

  // Repeated content words (not grammar words).
  const STOP = new Set([
    "the", "a", "an", "and", "or", "but", "of", "to", "in", "on", "at", "for",
    "with", "is", "are", "was", "were", "be", "been", "am", "i", "you", "he",
    "she", "it", "we", "they", "my", "your", "his", "her", "its", "our", "their",
    "that", "this", "these", "those", "as", "so", "not", "do", "does", "did",
    "have", "has", "had", "will", "would", "can", "could",
  ]);
  const counts = new Map<string, number>();
  for (const w of wordList) if (!STOP.has(w) && w.length > 3) {
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  const maxWord = wordList.length || 1;
  const repeatedWords = [...counts.entries()]
    .filter(([w, n]) => n / maxWord > 0.02 && n >= 3)
    .map(([w]) => w)
    .slice(0, 6);

  // ---- measured issues ----------------------------------------------------

  // Grammar + punctuation: the clinic rules per sentence (writing cares about
  // capitals and punctuation — unlike speaking, these are real errors here).
  const grammarIssues: GrammarIssue[] = [];
  for (const sentence of sentences.slice(0, 12)) {
    const result = checkSentence(sentence);
    grammarIssues.push(...result.issues);
  }
  const grammarIssueCount = grammarIssues.length;
  issues.push(...grammarIssuesToWriting(grammarIssues, 8));

  // Spelling rules.
  for (const rule of SPELLING_RULES) {
    const match = clean.match(rule.wrong);
    if (match) {
      issues.push({
        id: nextIssueId(),
        dimension: "spelling",
        source: "measured",
        original: match[0],
        correction: rule.right,
        explanation: rule.tip,
        concept: "Spelling patterns",
        example: `Correct: “${rule.right}”.`,
        exercise: "Write the correct spelling three times, then use it in a sentence.",
      });
    }
  }

  // Word-choice confusions.
  for (const rule of WORD_CHOICE_RULES) {
    const match = clean.match(rule.pattern);
    if (match) {
      issues.push({
        id: nextIssueId(),
        dimension: "word-choice",
        source: "measured",
        original: match[0],
        correction: rule.use,
        explanation: `${rule.instead} — ${rule.use}`,
        concept: rule.concept,
        example: rule.example,
        exercise: rule.exercise,
      });
    }
  }

  // Sentence-structure: run-on sentences.
  for (const sentence of sentences) {
    const n = words(sentence).length;
    if (n > 34) {
      issues.push({
        id: nextIssueId(),
        dimension: "sentence-structure",
        source: "measured",
        original: sentence.slice(0, 80) + (sentence.length > 80 ? "…" : ""),
        correction: "Split this sentence into two (or three) at its natural pause.",
        explanation: `This sentence runs to ${n} words. Readers lose the thread after roughly 25–30 words; two shorter sentences say the same thing more clearly.`,
        concept: "Sentence length and run-ons",
        example: "Instead of a 40-word chain, write: “The market was full. Sellers called prices over each other.”",
        exercise: "Find the longest sentence in your text and split it into two at the conjunction.",
      });
    }
  }

  // Punctuation: repeated punctuation and double spaces.
  if (/!!+|\?\?+/.test(clean)) {
    issues.push({
      id: nextIssueId(),
      dimension: "punctuation",
      source: "measured",
      original: (clean.match(/!!+|\?\?+/) ?? ["!!"])[0],
      correction: "One punctuation mark is enough.",
      explanation: "Repeated exclamation or question marks weaken the sentence instead of strengthening it.",
      concept: "Punctuation intensity",
      example: "“Where are you?” not “Where are you??”",
      exercise: "Scan your text for double punctuation and reduce each to a single mark.",
    });
  }
  if (/ {2,}/.test(clean)) {
    issues.push({
      id: nextIssueId(),
      dimension: "punctuation",
      source: "measured",
      original: "double spaces",
      correction: "Single spaces between words.",
      explanation: "Extra spaces usually come from typing after a deletion and are invisible to the writer but not the reader.",
      concept: "Typography basics",
      example: "Use one space after a full stop, one space between words.",
      exercise: "Search your text for double spaces and fix each one.",
    });
  }

  // Vocabulary: basic-word overuse (measured as a note, not an error).
  const basicCounts = BASIC_WORD_OVERUSE.map((w) => ({
    w,
    n: wordList.filter((x) => x === w).length,
  })).filter((x) => x.n >= 3);
  if (basicCounts.length > 0) {
    issues.push({
      id: nextIssueId(),
      dimension: "vocabulary",
      source: "measured",
      original: basicCounts.map((x) => `“${x.w}” ×${x.n}`).join(", "),
      correction: "Replace some of these with more precise words.",
      explanation:
        "Very common words (very, good, nice, thing, get) are correct but vague — precise alternatives make writing stronger.",
      concept: "Precision in word choice",
      example: "“very good” → “delicious / excellent / reliable”; “things” → the actual nouns.",
      exercise: `Replace three uses of “${basicCounts[0].w}” with different, more precise words.`,
    });
  }

  // Coherence: connectors missing in longer texts.
  if (wordList.length >= 60 && connectorCount < 2) {
    issues.push({
      id: nextIssueId(),
      dimension: "coherence",
      source: "measured",
      original: "the text as a whole",
      correction: "Add linking words between ideas (however, so, because, for example).",
      explanation:
        "In a text of this length, almost no linking words were found. Connectors show the reader how your ideas relate — without them, sentences sit side by side without a relationship.",
      concept: "Cohesive devices",
      example: "“The plan is cheap. It is slow.” → “The plan is cheap; however, it is slow.”",
      exercise: "Join two neighbouring sentences with a different connector (but, so, because, however).",
    });
  }

  // Organisation: paragraphs.
  if (task.expectedParagraphs) {
    const { min, max } = task.expectedParagraphs;
    if (paragraphs.length < min && wordList.length >= task.minWords * 0.6) {
      issues.push({
        id: nextIssueId(),
        dimension: "organisation",
        source: "measured",
        original: `${paragraphs.length} paragraph${paragraphs.length === 1 ? "" : "s"} found`,
        correction: `Split your text into at least ${min} paragraphs.`,
        explanation:
          "One solid block of text asks the reader to do the organising. Paragraph breaks tell the reader where one idea ends and the next begins.",
        concept: "Paragraphing",
        example: "For this task: each paragraph = one job (e.g. reason / example / counter-argument).",
        exercise: "Mark where each new idea starts in your text and press Enter twice there.",
      });
    } else if (paragraphs.length > max) {
      issues.push({
        id: nextIssueId(),
        dimension: "organisation",
        source: "measured",
        original: `${paragraphs.length} paragraphs found`,
        correction: `Combine into at most ${max} paragraphs.`,
        explanation:
          "Very short paragraphs fragment the text; a paragraph should fully develop one idea before moving on.",
        concept: "Paragraph unity",
        example: "A paragraph needs at least two or three sentences to do its job.",
        exercise: "Find two neighbouring paragraphs about the same idea and merge them.",
      });
    }
  }

  // Clarity: monotonous sentence length.
  if (sentences.length >= 5 && stdevRatio < 0.15) {
    issues.push({
      id: nextIssueId(),
      dimension: "clarity",
      source: "measured",
      original: `all sentences ≈ ${Math.round(mean)} words`,
      correction: "Vary the lengths: follow a long sentence with a short one.",
      explanation:
        "Every sentence here is nearly the same length. Uniform rhythm lulls the reader; variation wakes them up.",
      concept: "Rhythm and sentence variety",
      example: "“The market was full of sellers and buyers all morning. Then the rain came.” — long, then short.",
      exercise: "Shorten one sentence in your text to five words or fewer.",
    });
  }

  // Relevance: too short / off-topic.
  const relevanceHits = topicKeywordHits.length;

  // ---- dimension scores ---------------------------------------------------

  const grammarPenalty = Math.min(60, grammarIssueCount * 12);
  const scores: Record<WritingDimension, number> = {
    grammar: clamp(100 - grammarPenalty - (grammarIssues.filter((i) => i.category === "word-choice").length * 5)),
    "sentence-structure": clamp(
      100 - (sentences.filter((s) => words(s).length > 34).length * 22) - (avgSentenceWords > 26 ? 20 : 0),
    ),
    spelling: clamp(100 - issues.filter((i) => i.dimension === "spelling").length * 18),
    punctuation: clamp(
      100 -
        grammarIssues.filter((i) => i.category === "punctuation").length * 14 -
        issues.filter((i) => i.dimension === "punctuation").length * 15,
    ),
    "word-choice": clamp(100 - issues.filter((i) => i.dimension === "word-choice").length * 22),
    vocabulary: clamp(
      50 +
        (uniqueRatio >= 0.55 ? 15 : uniqueRatio >= 0.45 ? 10 : 5) +
        (targetWordsUsed.length > 0 ? 15 : 0) +
        (basicCounts.length === 0 ? 15 : 5) +
        (wordList.length >= task.minWords ? 10 : 0),
    ),
    clarity: clamp(
      (avgSentenceWords <= 22 ? 45 : avgSentenceWords <= 28 ? 30 : 15) +
        variety * 30 +
        (longest <= 34 ? 15 : 5) +
        (basicCounts.length === 0 ? 10 : 3),
    ),
    coherence: clamp(
      (connectorCount === 0 ? 25 : connectorCount <= 2 ? 45 : 60) +
        (connectorsFound.length >= 3 ? 20 : connectorsFound.length * 6) +
        (wordList.length < 60 ? 15 : 10),
    ),
    organisation: (() => {
      let score = 70;
      if (task.expectedParagraphs) {
        const { min, max } = task.expectedParagraphs;
        if (paragraphs.length >= min && paragraphs.length <= max) score = 95;
        else if (Math.abs(paragraphs.length - min) === 1 || Math.abs(paragraphs.length - max) === 1) score = 75;
        else score = 55;
      } else if (paragraphs.length >= 1) {
        score = 85;
      }
      if (wordList.length >= task.minWords) score += 5;
      return clamp(score);
    })(),
    relevance: clamp(
      (task.topicKeywords.length === 0
        ? 70
        : (relevanceHits / task.topicKeywords.length) * 60) +
        checklistCoverage * 25 +
        (wordList.length >= task.minWords ? 15 : (wordList.length / Math.max(task.minWords, 1)) * 15),
    ),
  };

  const dimensionList = Object.keys(scores) as WritingDimension[];
  const qualityAverage =
    dimensionList.reduce((sum, d) => sum + scores[d], 0) / dimensionList.length;
  // Completion factor: quality scores describe what was written; a text far
  // below the minimum length is an incomplete submission, so the overall
  // score scales with how much of the assignment was actually attempted.
  const completion = Math.min(1, wordList.length / Math.max(task.minWords, 1));
  const overall = Math.round(qualityAverage * (0.35 + 0.65 * completion));

  const measured: WritingMeasured = {
    wordCount: wordList.length,
    charCount: clean.length,
    sentenceCount: sentences.length,
    paragraphCount: paragraphs.length,
    avgSentenceWords: Math.round(avgSentenceWords * 10) / 10,
    longestSentenceWords: longest,
    sentenceLengthVariety: Math.round(stdevRatio * 100) / 100,
    uniqueWordRatio: Math.round(uniqueRatio * 100) / 100,
    connectorCount,
    connectorVariety: connectorsFound.length,
    checklistCovered,
    checklistCoverage: Math.round(checklistCoverage * 100) / 100,
    conventionsCovered,
    conventionsCoverage: Math.round(conventionsCoverage * 100) / 100,
    topicKeywordHits,
    targetWordsUsed,
    repeatedWords,
    scores,
    overall,
  };

  return { measured, issues, wordCount: wordList.length };
}

// ---------------------------------------------------------------------------
// Guided-task grading (beginner micro-skills)
// ---------------------------------------------------------------------------

export interface GuidedGradeResult {
  correct: boolean;
  /** Constructive feedback for wrong answers. */
  feedback: string;
  explanation: string;
}

export function gradeGuidedItem(
  acceptedAnswers: string[],
  submitted: string,
): GuidedGradeResult {
  const normalise = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[.!]+$/, "");
  const submittedNorm = normalise(submitted);
  const accepted = acceptedAnswers.map(normalise);
  const exact = accepted.includes(submittedNorm);

  if (exact) return { correct: true, feedback: "Correct!", explanation: "" };

  // Letter-level comparison for a helpful, specific hint.
  const target = accepted[0] ?? "";
  const distance = levenshteinWords(submittedNorm, target);
  if (distance === 1 && submittedNorm.length > 2) {
    return {
      correct: false,
      feedback: "Very close — check every letter carefully and try again.",
      explanation: "",
    };
  }
  return {
    correct: false,
    feedback: "Not yet — try again, or open the hint.",
    explanation: "",
  };
}

function levenshteinWords(a: string, b: string): number {
  const A = a.split(" ");
  const B = b.split(" ");
  const dp = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1).fill(0));
  for (let i = 0; i <= A.length; i++) dp[i][0] = i;
  for (let j = 0; j <= B.length; j++) dp[0][j] = j;
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 1),
      );
    }
  }
  return dp[A.length][B.length];
}

/** Fluency metrics reused for the writing stats panel (pace is not scored). */
export const writingMetricsHelpers = { measureTranscript };
