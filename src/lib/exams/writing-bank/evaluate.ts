/**
 * IELTS Writing Masterclass — the deterministic evaluation engine
 * (PROMPT 46, Part G).
 *
 * Every studio submission is analysed by this rule-based layer FIRST:
 * measured metrics (length, paragraphs, requirement coverage, linker
 * variety, sentence range, register markers, error patterns, lexical
 * spread) are turned into four criterion estimates — Task Achievement
 * (Task 1, incl. the GT letter's purpose-and-tone sense) or Task Response
 * (Task 2), Coherence and Cohesion, Lexical Resource, Grammatical Range
 * and Accuracy — each with per-criterion feedback citing measured
 * evidence, and each explicitly labelled an educational estimate against
 * the publicly known descriptor approach. The overall is the mean of the
 * four, mirroring how the real test derives the task band.
 *
 * An optional AI layer (through the provider seam — tests install a fake,
 * deployments without credentials degrade gracefully) then ADDS a summary
 * and coaching commentary; it never overrides the deterministic scores,
 * so the report always stands alone and every number is explainable.
 */

import type { WritingBankTask, WritingCriterionKey } from "@/data/exams/ielts/writing-bank/types";
import { writingCriteriaFor } from "@/data/exams/ielts/writing-bank/types";

// ---------------------------------------------------------------------------
// Text utilities
// ---------------------------------------------------------------------------

const WORD_RE = /[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g;

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export function splitSentences(text: string): string[] {
  const out: string[] = [];
  for (const paragraph of splitParagraphs(text)) {
    const parts = paragraph
      .split(/(?<=[.!?])\s+(?=[A-Z0-9"'“(])/)
      .map((s) => s.trim())
      .filter(Boolean);
    for (const p of parts) out.push(p);
  }
  return out;
}

const words = (s: string): string[] => s.match(WORD_RE) ?? [];
const wc = (s: string): number => words(s).length;

/** Suffix-insensitive stem match ("cycling" matches keyword "cycle"). */
function stem(word: string): string {
  return word.toLowerCase().replace(/(ing|ed|es|s|ion|ions|ly|ment|ness)$/i, "");
}

function containsStem(haystack: string[], needle: string): boolean {
  const target = stem(needle);
  if (target.length < 3) return haystack.some((w) => w.toLowerCase() === needle.toLowerCase());
  return haystack.some((w) => {
    const h = stem(w);
    return h === target || h.startsWith(target) || target.startsWith(h);
  });
}

// ---------------------------------------------------------------------------
// Measured metrics (deterministic, auditable)
// ---------------------------------------------------------------------------

export type WritingMetrics = {
  wordCount: number;
  paragraphCount: number;
  sentenceCount: number;
  avgSentenceWords: number;
  sentenceLengthSpread: number; // stdev of sentence lengths
  shortLongMix: boolean; // both ≤ 10-word and ≥ 20-word sentences present
  requirementCoverage: number; // 0–1 across the task's authored requirements
  missedRequirements: string[]; // descriptions of uncovered requirements
  overviewPresent: boolean; // AT1 report overview markers
  positionPresent: boolean; // essay position markers
  figuresMentioned: number; // numeric values cited (AT1 data reporting)
  linkerCount: number;
  linkerVariety: number; // unique linker families used
  linkerDensity: number; // per sentence
  referenceDevices: number; // this/these/such/it/they/the former…
  complexMarkers: number; // subordinators + relatives + passives + conditionals
  passiveCount: number;
  errorCount: number;
  errorFindings: { pattern: string; example: string }[];
  contractions: number;
  formalRegisterBreaches: number; // contractions in formal contexts
  typeTokenRatio: number; // content-word diversity
  avgWordLength: number;
  repetitionRate: number; // share of content words used 3+ times
  topicVocabularyHits: number; // vocabularyBank words used (stem match)
  topicVocabularyTotal: number;
  greetingSignOff: boolean; // letters: greeting + sign-off both present
};

const LINKER_FAMILIES: { family: string; items: string[] }[] = [
  { family: "contrast", items: ["however", "whereas", "while", "although", "though", "yet", "nevertheless", "nonetheless", "on the other hand", "by contrast", "in contrast", "instead", "conversely"] },
  { family: "sequence", items: ["first", "firstly", "second", "secondly", "then", "next", "after that", "subsequently", "finally", "lastly", "meanwhile", "initially", "before this"] },
  { family: "cause", items: ["because", "since", "as a result", "therefore", "consequently", "thus", "due to", "owing to", "this is because", "for this reason"] },
  { family: "addition", items: ["moreover", "furthermore", "in addition", "also", "besides", "what is more", "additionally"] },
  { family: "example", items: ["for example", "for instance", "such as", "to illustrate", "namely", "a case in point"] },
  { family: "concession", items: ["despite", "in spite of", "even though", "admittedly", "granted", "of course"] },
  { family: "result", items: ["as a result", "therefore", "thus", "consequently", "which means", "leading to", "so that"] },
  { family: "similarity", items: ["similarly", "likewise", "in the same way", "equally"] },
];

const OVERVIEW_MARKERS = ["overall", "in general", "generally", "it is clear that", "the most striking", "the main trend", "the key feature", "the overriding"];
const POSITION_MARKERS = ["i believe", "i agree", "i disagree", "in my opinion", "in my view", "i think", "i would argue", "my view", "this essay will argue", "i am convinced", "it is my view", "i contend"];
const REFERENCE_MARKERS = ["this", "these", "such", "the former", "the latter", "they", "them", "their", "its", "it"];
const SUBORDINATORS = ["although", "because", "whereas", "while", "if", "when", "unless", "since", "after", "before", "until", "as soon as", "even though", "so that", "in order that", "provided that"];

const ERROR_PATTERNS: { name: string; re: RegExp }[] = [
  { name: "double comparative", re: /\bmore\s+\w+er\b|\bmost\s+\w+est\b/gi },
  { name: "plural of an uncountable noun", re: /\b(peoples|informations|advices|equipments|knowledges|researches|homeworks|luggages|furnitures)\b/gi },
  { name: "third-person -s missing", re: /\b(he|she|it)\s+(go|do|have|make|take|want|need|think|say|seem|become|come|get|give|know|believe)\b/gi },
  { name: "'there is' with a plural", re: /\bthere\s+(is|was)\s+(many|several|two|three|four|five|some\s+\w+s|a\s+number\s+of)\b/gi },
  { name: "missing space after comma", re: /,[A-Za-z]/g },
  { name: "missing space after full stop", re: /[a-z]\.[A-Z]/g },
  { name: "'discuss about'", re: /\bdiscuss\s+about\b/gi },
  { name: "'in the other hand'", re: /\bin\s+the\s+other\s+hand\b/gi },
  { name: "'alot'", re: /\balot\b/gi },
  { name: "common misspelling", re: /\b(recieve|seperate|occured|goverment|enviroment|becuase|definately|neccessary|accomodate|wich|untill|greatful)\b/gi },
  { name: "child/children double plural", re: /\b(childrens|womens|mens|foots|teeths|mices)\b/gi },
  { name: "'very + much + adjective'", re: /\bvery\s+much\s+\w+er\b/gi },
];

const CONTRACTION_RE = /\b(i|you|we|they|he|she|it|there|that|what|who)'(s|t|re|ve|ll|d|m)\b|\b(don|doesn|didn|can|won|isn|aren|wasn|weren|hasn|haven|hadn|couldn|shouldn|wouldn|mustn)t\b/gi;

const STOPWORDS = new Set(
  "the a an and or but if of to in on for with as by at from is are was were be been being it its this that these those there here he she they them his her their our your my me you we i not no so than then also very can could would should may might will shall do does did done have has had having about into over under more most some any each which who whom what when where why how all both few many other such only own same too s t just don now".split(" "),
);

export function measureWriting(task: WritingBankTask, response: string): WritingMetrics {
  const paragraphs = splitParagraphs(response);
  const sentences = splitSentences(response);
  const allWords = words(response);
  const lowerWords = allWords.map((w) => w.toLowerCase());
  const sentenceLengths = sentences.map((s) => wc(s));
  const avgSentenceWords = sentenceLengths.length ? sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length : 0;
  const variance = sentenceLengths.length
    ? sentenceLengths.reduce((a, l) => a + (l - avgSentenceWords) ** 2, 0) / sentenceLengths.length
    : 0;

  const lower = response.toLowerCase();

  // Requirement coverage (authored keyword stems, suffix-insensitive).
  let covered = 0;
  const missedRequirements: string[] = [];
  for (const req of task.requirements) {
    const hit = req.keywords.some((k) => {
      const parts = k.split(/\s+/).filter(Boolean);
      if (parts.length > 1) {
        return lower.includes(k.toLowerCase()); // phrase match
      }
      return containsStem(allWords, k);
    });
    if (hit) covered += 1;
    else missedRequirements.push(req.description);
  }
  const requirementCoverage = task.requirements.length ? covered / task.requirements.length : 1;

  const overviewPresent = OVERVIEW_MARKERS.some((m) => lower.includes(m));
  const positionPresent = POSITION_MARKERS.some((m) => lower.includes(m));
  const figuresMentioned = (response.match(/\b\d+(?:[.,]\d+)?\b/g) ?? []).length;

  let linkerCount = 0;
  const familiesUsed = new Set<string>();
  for (const { family, items } of LINKER_FAMILIES) {
    for (const item of items) {
      const re = new RegExp(`\\b${item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
      const hits = lower.match(re);
      if (hits) {
        linkerCount += hits.length;
        familiesUsed.add(family);
      }
    }
  }

  let referenceDevices = 0;
  for (const marker of REFERENCE_MARKERS) {
    const re = new RegExp(`\\b${marker}\\b`, "g");
    referenceDevices += (lower.match(re) ?? []).length;
  }

  let complexMarkers = 0;
  for (const sub of SUBORDINATORS) {
    const re = new RegExp(`\\b${sub}\\b`, "g");
    complexMarkers += (lower.match(re) ?? []).length;
  }
  complexMarkers += (lower.match(/\b(which|who|whose|whom)\b/g) ?? []).length;
  complexMarkers += (lower.match(/\bif\b.*\b(would|could|might)\b/g) ?? []).length;
  const passiveCount = (lower.match(/\b(is|are|was|were|be|been|being)\s+\w+(ed|en)\b/g) ?? []).length;
  complexMarkers += passiveCount;
  // Range markers that carry Task 1 reports and letters: participle clauses
  // (", reaching 38%"), comparatives and proportional structures.
  complexMarkers += (response.match(/,\s+\w+ing\b/g) ?? []).length;
  complexMarkers += (lower.match(/\b\w+er\s+than\b|\bmore\s+than\b|\btwice\b|\bdouble[d]?\b|\bas\s+\w+\s+as\b/g) ?? []).length;

  const errorFindings: WritingMetrics["errorFindings"] = [];
  for (const { name, re } of ERROR_PATTERNS) {
    const matches = [...response.matchAll(re)];
    for (const m of matches.slice(0, 2)) {
      errorFindings.push({ pattern: name, example: m[0].slice(0, 40) });
    }
  }
  // Paragraphs not ending in terminal punctuation.
  for (const p of paragraphs) {
    if (wc(p) >= 6 && !/[.!?"”']$/.test(p)) {
      errorFindings.push({ pattern: "paragraph without terminal punctuation", example: p.slice(-40) });
    }
  }
  // Sentences not starting with a capital.
  for (const s of sentences) {
    if (wc(s) >= 4 && /^[a-z]/.test(s)) {
      errorFindings.push({ pattern: "sentence not capitalised", example: s.slice(0, 40) });
    }
  }

  const contractions = (response.match(CONTRACTION_RE) ?? []).length;
  const formalContext = task.channel === "gt" ? task.register === "formal" : true;
  const formalRegisterBreaches = formalContext ? contractions : 0;

  const contentWords = lowerWords.filter((w) => !STOPWORDS.has(w) && w.length > 2);
  const typeTokenRatio = contentWords.length ? new Set(contentWords).size / contentWords.length : 0;
  const avgWordLength = allWords.length ? allWords.reduce((a, w) => a + w.length, 0) / allWords.length : 0;
  const freq = new Map<string, number>();
  for (const w of contentWords) freq.set(w, (freq.get(w) ?? 0) + 1);
  const overused = [...freq.values()].filter((n) => n >= 3).reduce((a, b) => a + b, 0);
  const repetitionRate = contentWords.length ? overused / contentWords.length : 0;

  const topicVocabularyTotal = task.vocabularyBank.length;
  const topicVocabularyHits = task.vocabularyBank.filter((v) =>
    v.word.split(/\s+/).length > 1 ? lower.includes(v.word.toLowerCase()) : containsStem(allWords, v.word),
  ).length;

  const isLetter = task.channel === "gt" && task.taskType === "task-1";
  const greetingSignOff = isLetter
    ? /(^|\n)\s*dear\b/i.test(response) && /\b(yours\s+(faithfully|sincerely)|best\s+wishes|kind\s+regards|take\s+care|warm\s+wishes|love|regards|see\s+you|write\s+back\s+soon)\b/i.test(response)
    : true;

  return {
    wordCount: allWords.length,
    paragraphCount: paragraphs.length,
    sentenceCount: sentences.length,
    avgSentenceWords: Math.round(avgSentenceWords * 10) / 10,
    sentenceLengthSpread: Math.round(Math.sqrt(variance) * 10) / 10,
    shortLongMix: sentenceLengths.some((l) => l <= 10) && sentenceLengths.some((l) => l >= 20),
    requirementCoverage,
    missedRequirements,
    overviewPresent,
    positionPresent,
    figuresMentioned,
    linkerCount,
    linkerVariety: familiesUsed.size,
    linkerDensity: sentences.length ? linkerCount / sentences.length : 0,
    referenceDevices,
    complexMarkers,
    passiveCount,
    errorCount: errorFindings.length,
    errorFindings,
    contractions,
    formalRegisterBreaches,
    typeTokenRatio: Math.round(typeTokenRatio * 1000) / 1000,
    avgWordLength: Math.round(avgWordLength * 100) / 100,
    repetitionRate: Math.round(repetitionRate * 1000) / 1000,
    topicVocabularyHits,
    topicVocabularyTotal,
    greetingSignOff,
  };
}

// ---------------------------------------------------------------------------
// Criterion estimates (educational estimates, 0.5 steps, 4.0–9.0)
// ---------------------------------------------------------------------------

export type CriterionFeedbackLine = { kind: "strength" | "issue" | "neutral"; text: string };
export type WritingCriterionReport = {
  key: WritingCriterionKey;
  name: string;
  /** Band estimate 4.0–9.0, 0.5 steps — an educational estimate. */
  score: number;
  maxScore: 9;
  unit: "band";
  descriptor: string;
  feedback: CriterionFeedbackLine[];
  /** Verbatim quotes from the response backing the strongest findings. */
  evidence: { quote: string; note: string }[];
};

export type WritingEvaluation = {
  criteria: WritingCriterionReport[];
  overall: number;
  overallLabel: string;
  metrics: WritingMetrics;
  strengths: string[];
  improvements: string[];
  disclaimers: string[];
  status: "complete" | "insufficient";
  aiAvailable: boolean;
  aiCommentary: { summary: string; strengths: string[]; improvements: string[]; examinerNote: string } | null;
};

const clampBand = (v: number): number => Math.min(9, Math.max(4, Math.round(v * 2) / 2));

/** Minimum meaningful length for any evaluation (mirrors the house style). */
export function minimumReliableWords(task: WritingBankTask): number {
  return Math.round(task.wordMinimum * 0.4);
}

function quoteFor(response: string, predicate: (sentence: string) => boolean, fallbackIndex = 0): string {
  const sentences = splitSentences(response);
  const hit = sentences.find(predicate);
  return (hit ?? sentences[fallbackIndex] ?? response).slice(0, 300);
}

function buildTaskCriterion(task: WritingBankTask, m: WritingMetrics, response: string): WritingCriterionReport {
  const def = writingCriteriaFor(task)[0];
  const feedback: CriterionFeedbackLine[] = [];
  const evidence: { quote: string; note: string }[] = [];
  let score = 4.0;

  if (task.taskType === "task-1" && task.channel === "academic") {
    // Task Achievement for the visual report.
    score = 4.0 + m.requirementCoverage * 3.0 + (m.overviewPresent ? 1.5 : 0) + (m.figuresMentioned >= 3 ? 0.5 : 0);
    feedback.push(
      m.overviewPresent
        ? { kind: "strength", text: `An overview is present (${m.figuresMentioned} data figures cited) — the highest-value sentence in Task 1.` }
        : { kind: "issue", text: "No overview sentence was detected: a reader must be able to see the chart's whole story from one pattern-level paragraph (open with 'Overall, …')." },
    );
    evidence.push({
      quote: m.overviewPresent
        ? quoteFor(response, (s) => /overall|in general|generally|clear/i.test(s))
        : quoteFor(response, (s) => wc(s) >= 8),
      note: m.overviewPresent ? "The overview claim that decides Task Achievement." : "The closest thing to a summary statement — it does not yet stand as an overview.",
    });
  } else if (task.channel === "gt" && task.taskType === "task-1") {
    // Task Achievement for the letter: purpose, bullets, tone consistency.
    score = 4.0 + m.requirementCoverage * 3.0 + (m.greetingSignOff ? 1.0 : 0) + (m.formalRegisterBreaches === 0 ? 0.5 : 0);
    feedback.push(
      m.greetingSignOff
        ? { kind: "strength", text: "A greeting and a matching sign-off are both present — the letter reads as a letter." }
        : { kind: "issue", text: "The greeting/sign-off pair is incomplete or mismatched: formal letters open 'Dear Sir or Madam' and close 'Yours faithfully'; friends open 'Dear + name' and close warmly." },
    );
    if (m.formalRegisterBreaches > 0) {
      feedback.push({ kind: "issue", text: `${m.formalRegisterBreaches} contraction(s) appear in a formal letter — formal register is written out in full ('I am writing', 'do not').` });
    }
    evidence.push({
      quote: quoteFor(response, (s) => /^(dear|i am writing|just a quick|hi)/i.test(s.trim())),
      note: "The opening that establishes the letter's purpose and register.",
    });
  } else {
    // Task Response for essays.
    score = 4.0 + m.requirementCoverage * 3.0 + (m.positionPresent ? 1.0 : 0);
    feedback.push(
      m.positionPresent
        ? { kind: "strength", text: "A clear position is stated and traceable — the descriptor's 'clear position throughout'." }
        : { kind: "issue", text: "No clear position was detected: state your verdict in the introduction (for example 'I believe…', 'in my view…') and echo it in the conclusion." },
    );
    if (task.channel === "academic") {
      feedback.push({ kind: m.contractions === 0 ? "strength" : "issue", text: m.contractions === 0 ? "The essay keeps the semi-formal academic register (no contractions detected)." : `${m.contractions} contraction(s) detected — the Task 2 essay is written in full forms.` });
    }
    evidence.push({
      quote: m.positionPresent
        ? quoteFor(response, (s) => /i believe|i agree|i disagree|in my (opinion|view)|argue/i.test(s))
        : quoteFor(response, (s) => wc(s) >= 10),
      note: m.positionPresent ? "The thesis that carries the response." : "The introduction, currently without a stated verdict.",
    });
  }

  // Missed requirements drive the biggest penalty and the most useful feedback.
  if (m.missedRequirements.length > 0) {
    for (const miss of m.missedRequirements.slice(0, 3)) {
      feedback.push({ kind: "issue", text: `Not yet covered: ${miss[0].toLowerCase()}${miss.slice(1)}` });
    }
    score -= Math.min(1.5, m.missedRequirements.length * 0.5);
  }

  // Under-length is mechanical and decisive.
  const ratio = m.wordCount / task.wordMinimum;
  if (ratio < 1) {
    feedback.push({ kind: "issue", text: `${m.wordCount} words against the ${task.wordMinimum}-word floor (${Math.round(ratio * 100)}%) — under-length responses are penalised whatever their quality.` });
    score = Math.min(score, ratio >= 0.9 ? 5.5 : ratio >= 0.7 ? 5.0 : 4.0);
  } else {
    feedback.push({ kind: "strength", text: `${m.wordCount} words — comfortably over the ${task.wordMinimum}-word floor.` });
  }

  return { key: def.key, name: def.name, score: clampBand(score), maxScore: 9, unit: "band", descriptor: def.descriptor, feedback, evidence };
}

function buildCcCriterion(task: WritingBankTask, m: WritingMetrics, response: string): WritingCriterionReport {
  const def = writingCriteriaFor(task)[1];
  const feedback: CriterionFeedbackLine[] = [];
  const targetParagraphs = task.taskType === "task-1" ? (task.channel === "gt" ? 4 : 3) : 4;

  let score = 4.5;
  score += Math.min(1.5, (m.paragraphCount / targetParagraphs) * 1.5);
  score += Math.min(1.5, m.linkerVariety * 0.3);
  score += m.referenceDevices >= 4 ? 0.75 : m.referenceDevices >= 2 ? 0.4 : 0;

  feedback.push(
    m.paragraphCount >= targetParagraphs
      ? { kind: "strength", text: `${m.paragraphCount} paragraphs give the response a visible shape (introduction, developed bodies${task.taskType === "task-2" ? ", conclusion" : ""}).` }
      : { kind: "issue", text: `Only ${m.paragraphCount} paragraph(s) — this task needs about ${targetParagraphs} (one idea per paragraph), and paragraphing itself is scored.` },
  );

  if (m.linkerDensity === 0) {
    feedback.push({ kind: "issue", text: "No cohesive devices detected — sentences stand alone instead of signalling their relation (contrast, cause, sequence)." });
  } else if (m.linkerDensity > 0.8) {
    feedback.push({ kind: "issue", text: `Linker density is high (${m.linkerDensity.toFixed(1)} per sentence across ${m.linkerVariety} families) — the descriptor rewards devices used 'appropriately', not in every sentence.` });
  } else {
    feedback.push({ kind: "strength", text: `Cohesive devices are used at a healthy rate (${m.linkerDensity.toFixed(1)} per sentence) across ${m.linkerVariety} functional families.` });
  }

  if (m.referenceDevices < 2 && m.wordCount >= 100) {
    feedback.push({ kind: "issue", text: "Few reference devices (this/these/such/they) — repetition is doing the work reference chains should do." });
  }

  // Paragraph balance: one paragraph must not swallow the response.
  const paragraphs = splitParagraphs(response);
  const longest = paragraphs.reduce((a, p) => Math.max(a, wc(p)), 0);
  if (m.wordCount >= 100 && longest / m.wordCount > 0.6) {
    feedback.push({ kind: "issue", text: "One paragraph carries more than 60% of the response — break it so each idea gets its own home." });
    score -= 0.5;
  }

  return {
    key: def.key,
    name: def.name,
    score: clampBand(score),
    maxScore: 9,
    unit: "band",
    descriptor: def.descriptor,
    feedback,
    evidence: [
      {
        quote: quoteFor(response, (s) => /\b(however|whereas|while|although|therefore|as a result|moreover|for example|first|finally)\b/i.test(s)),
        note: "A representative linking move — the cohesion the reader feels.",
      },
    ],
  };
}

function buildLrCriterion(task: WritingBankTask, m: WritingMetrics, response: string): WritingCriterionReport {
  const def = writingCriteriaFor(task)[2];
  const feedback: CriterionFeedbackLine[] = [];
  let score = 5.0;

  const topicRatio = m.topicVocabularyTotal ? m.topicVocabularyHits / m.topicVocabularyTotal : 0;
  score += Math.min(2.0, topicRatio * 4.0);
  score += m.typeTokenRatio >= 0.62 ? 1.0 : m.typeTokenRatio >= 0.52 ? 0.5 : 0;
  score -= m.repetitionRate > 0.22 ? 1.0 : m.repetitionRate > 0.15 ? 0.5 : 0;
  score -= m.formalRegisterBreaches > 2 ? 0.5 : 0;

  feedback.push(
    m.topicVocabularyHits > 0
      ? { kind: "strength", text: `${m.topicVocabularyHits} of this task's ${m.topicVocabularyTotal} topic-vocabulary items appear (word diversity: ${Math.round(m.typeTokenRatio * 100)}% unique content words).` }
      : { kind: "issue", text: "None of this task's topic vocabulary surfaced — after submission, study the revealed vocabulary bank and re-write one paragraph using it." },
  );
  if (m.repetitionRate > 0.18) {
    feedback.push({ kind: "issue", text: `${Math.round(m.repetitionRate * 100)}% of content words are used three or more times — swap in precise alternatives rather than repeating.` });
  }
  if (m.avgWordLength < 4.2 && m.wordCount >= 100) {
    feedback.push({ kind: "neutral", text: "Average word length is short — precise, specific nouns (commuters, attainment, disposal) read stronger than general ones (people, things, stuff)." });
  }

  const spellingErrors = m.errorFindings.filter((f) => f.pattern === "common misspelling");
  if (spellingErrors.length > 0) {
    feedback.push({ kind: "issue", text: `Misspelling(s) detected: ${spellingErrors.map((e) => e.example).join(", ")} — spelling is scored under this criterion.` });
    score -= 0.5;
  }

  return {
    key: def.key,
    name: def.name,
    score: clampBand(score),
    maxScore: 9,
    unit: "band",
    descriptor: def.descriptor,
    feedback,
    evidence: [
      {
        quote: quoteFor(response, (s) => wc(s) >= 12 && /\w{7,}/.test(s)),
        note: "A lexically representative sentence.",
      },
    ],
  };
}

function buildGraCriterion(task: WritingBankTask, m: WritingMetrics, response: string): WritingCriterionReport {
  void task;
  const def = writingCriteriaFor(task)[3];
  const feedback: CriterionFeedbackLine[] = [];
  let score = 5.0;

  const errorsPer100 = m.wordCount ? (m.errorCount / m.wordCount) * 100 : 0;
  // Range: complex markers per sentence (subordination, relatives, passives, conditionals).
  const complexPerSentence = m.sentenceCount ? m.complexMarkers / m.sentenceCount : 0;

  // Reports and letters carry range through participles, comparatives and
  // passives rather than heavy subordination, so their thresholds sit lower.
  const reportTask = task.taskType === "task-1";
  const richThreshold = reportTask ? 0.4 : 0.5;
  const someThreshold = reportTask ? 0.22 : 0.35;

  score += complexPerSentence >= richThreshold ? 1.5 : complexPerSentence >= someThreshold ? 0.75 : 0;
  score += m.shortLongMix ? 0.75 : 0;
  score -= errorsPer100 > 3 ? 2.0 : errorsPer100 > 1.5 ? 1.0 : errorsPer100 > 0.7 ? 0.5 : 0;

  feedback.push(
    complexPerSentence >= richThreshold
      ? { kind: "strength", text: `A visible range of structures (${m.complexMarkers} markers across ${m.sentenceCount} sentences, including ${m.passiveCount} passive construction(s), participial clauses and comparatives) — the 'range' half of this criterion.` }
      : { kind: "issue", text: `Complex structures are sparse (${m.complexMarkers} markers across ${m.sentenceCount} sentences): add ${reportTask ? "participle clauses (', reaching 38%'), comparatives and passives" : "subordination (although, because, whereas) and relative clauses (which, who)"}.` },
  );
  feedback.push(
    m.shortLongMix
      ? { kind: "strength", text: `Sentence lengths vary (spread ${m.sentenceLengthSpread} words, average ${m.avgSentenceWords}) — variety the examiner can see in thirty seconds.` }
      : { kind: "issue", text: `Sentence lengths are uniform (spread ${m.sentenceLengthSpread} words): mix short declaratives with longer complex sentences.` },
  );
  if (errorsPer100 > 0.7) {
    feedback.push({ kind: "issue", text: `${m.errorCount} mechanical issue(s) detected (~${errorsPer100.toFixed(1)} per 100 words): ${m.errorFindings.slice(0, 3).map((f) => `${f.pattern} ("${f.example}")`).join("; ")}.` });
  } else if (m.errorCount === 0) {
    feedback.push({ kind: "strength", text: "No rule-detectable mechanical errors — accuracy holds up under the engine's pattern checks." });
  }

  return {
    key: def.key,
    name: def.name,
    score: clampBand(score),
    maxScore: 9,
    unit: "band",
    descriptor: def.descriptor,
    feedback,
    evidence: [
      {
        quote: quoteFor(response, (s) => /\b(which|who|although|because|whereas|while|if)\b/i.test(s)),
        note: "A structurally representative sentence.",
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// The AI layer (enrichment only — never overrides deterministic scores)
// ---------------------------------------------------------------------------

async function aiCommentary(
  task: WritingBankTask,
  response: string,
  m: WritingMetrics,
  overall: number,
): Promise<WritingEvaluation["aiCommentary"]> {
  const { getLlmProvider } = await import("@/lib/llm");
  const { withUsageLogging } = await import("@/lib/llm/usage");
  try {
    const provider = withUsageLogging(getLlmProvider(), { feature: "writing-masterclass" });
    const reply = await provider.complete({
      system: [
        "You are an experienced IELTS Writing coach reviewing a practice response.",
        "A rule-based engine has already measured the response and produced criterion estimates; your job is ONLY an encouraging, specific commentary layer — do not assign or imply new scores.",
        "Reply with ONLY a JSON object:",
        `{"summary": "<three sentences: what works, what limits it, the single highest-value revision>", "strengths": ["<two specific strengths, quoting the learner's own words where useful>"], "improvements": ["<three concrete, doable revisions>"], "examinerNote": "<one sentence on how an examiner would read this response, hedged as an estimate>"}`,
      ].join("\n"),
      messages: [
        {
          role: "user",
          content: [
            `TASK (${task.channel} ${task.taskType}, ${task.family}): ${task.prompt}`,
            task.bullets ? `BULLETS: ${task.bullets.join(" | ")}` : "",
            `MEASURED: ${m.wordCount} words (floor ${task.wordMinimum}), ${m.paragraphCount} paragraphs, requirement coverage ${Math.round(m.requirementCoverage * 100)}%, linkers ${m.linkerCount} across ${m.linkerVariety} families, complex markers ${m.complexMarkers}, mechanical findings ${m.errorCount}.`,
            `ENGINE OVERALL ESTIMATE: ${overall.toFixed(1)} band (educational estimate).`,
            `LEARNER RESPONSE:\n${response.slice(0, 6000)}`,
          ]
            .filter(Boolean)
            .join("\n"),
        },
      ],
      timeoutMs: 45_000,
    });
    const fenced = reply.match(/```(?:json)?\s*([\s\S]*?)```/);
    const candidate = fenced ? fenced[1] : reply;
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end === -1) return null;
    const parsed = JSON.parse(candidate.slice(start, end + 1)) as {
      summary?: unknown; strengths?: unknown; improvements?: unknown; examinerNote?: unknown;
    };
    const str = (v: unknown, max = 500): string => (typeof v === "string" ? v.trim().slice(0, max) : "");
    const arr = (v: unknown, cap: number): string[] =>
      Array.isArray(v) ? v.map((x) => str(x, 300)).filter(Boolean).slice(0, cap) : [];
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

export const WRITING_DISCLAIMERS = [
  "All band numbers are educational estimates produced by a rule-based engine against the publicly known descriptor approach — not official IELTS scores.",
  "Deterministic checks measure what machines can see (structure, coverage, variety, patterns); an examiner also judges meaning, nuance and development depth.",
  "The engine cannot read your handwriting of ideas: where it marks a requirement uncovered, check the requirement list revealed after submission.",
];

export async function evaluateWriting(task: WritingBankTask, response: string): Promise<WritingEvaluation> {
  const m = measureWriting(task, response);

  if (m.wordCount < minimumReliableWords(task)) {
    return {
      criteria: [],
      overall: 0,
      overallLabel: "Too short to evaluate",
      metrics: m,
      strengths: [],
      improvements: [`Write a fuller response first — at least ${minimumReliableWords(task)} words before the engine can say anything useful (the task's own floor is ${task.wordMinimum}).`],
      disclaimers: WRITING_DISCLAIMERS,
      status: "insufficient",
      aiAvailable: false,
      aiCommentary: null,
    };
  }

  const criteria = [
    buildTaskCriterion(task, m, response),
    buildCcCriterion(task, m, response),
    buildLrCriterion(task, m, response),
    buildGraCriterion(task, m, response),
  ];
  const overall = clampBand(criteria.reduce((a, c) => a + c.score, 0) / criteria.length);

  const strengths = criteria.flatMap((c) => c.feedback.filter((f) => f.kind === "strength").map((f) => `${c.name}: ${f.text}`)).slice(0, 5);
  const improvements = criteria.flatMap((c) => c.feedback.filter((f) => f.kind === "issue").map((f) => `${c.name}: ${f.text}`)).slice(0, 6);
  if (m.missedRequirements.length > 0) {
    improvements.push(`Task coverage: ${m.missedRequirements.length} of the task's authored requirements are not yet met — see the requirement list in the review panel.`);
  }

  const ai = await aiCommentary(task, response, m, overall);

  return {
    criteria,
    overall,
    overallLabel: `Estimated band ${overall.toFixed(1)} (educational estimate)`,
    metrics: m,
    strengths,
    improvements,
    disclaimers: WRITING_DISCLAIMERS,
    status: "complete",
    aiAvailable: ai !== null,
    aiCommentary: ai,
  };
}
