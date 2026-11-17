/**
 * Deterministic evaluation layer — facts and rules before AI.
 *
 * Everything in this file is reproducible and explainable:
 *   - VERIFIED checks are exact measurements (word count, greeting present,
 *     transcript-match accuracy against the target sentence).
 *   - RULE_BASED checks are heuristics (bullet-coverage keywords, overview
 *     detection, opinion markers, the grammar rule engine, fillers).
 *
 * The AI layer receives these results as context and must not contradict
 * them; the report shows them separately so the learner can always tell
 * measurement from opinion.
 *
 * Reuses the shared engines: the Grammar Clinic rule checker
 * (src/lib/grammar/checker.ts) and the Speaking Lab transcript metrics
 * (src/lib/speaking/measure.ts, scoreMatch from feedback.ts).
 */

import { checkSentence } from "@/lib/grammar/checker";
import type { GrammarIssue } from "@/data/grammar/types";
import { scoreMatch } from "@/lib/speaking/feedback";
import { fillersPerMinute, measureTranscript, wordsPerMinute } from "@/lib/speaking/measure";
import type { EmailPayload } from "../types";
import type { EvaluationCheck, GrammarCorrection, TranscriptSource } from "./types";
import type { ResolvedTask } from "./tasks";
import {
  analyzePace,
  analyzePunctuation,
  analyzeRepetition,
  analyzeSentenceStructure,
  hesitationMarkers,
} from "./analysis";

// ---------------------------------------------------------------------------
// Metrics
// ---------------------------------------------------------------------------

export type ResponseMetrics = {
  wordCount: number;
  sentenceCount: number;
  paragraphCount: number;
  uniqueWordRatio: number;
  fillerCount: number;
  fillersFound: string[];
  repeatedPhrases: string[];
  wordsPerMinute: number | null;
  fillersPerMinute: number | null;
  avgSentenceWords: number;
};

export type MatchAnalysis = {
  target: string;
  matchScore: number; // 0–1
  missedWords: string[];
  extraWords: string[];
} | null;

export type DeterministicAnalysis = {
  checks: EvaluationCheck[];
  metrics: ResponseMetrics;
  /** Rule-engine grammar corrections (RULE_BASED provenance). */
  grammar: GrammarCorrection[];
  match: MatchAnalysis;
  /** Sentence-structure / punctuation / repetition (writing) + pace (speaking). */
  language: LanguageAnalysis;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "of", "to", "in", "on", "for", "with", "at", "by",
  "from", "about", "as", "is", "are", "was", "were", "be", "been", "being", "have", "has",
  "had", "do", "does", "did", "will", "would", "can", "could", "should", "may", "might",
  "your", "you", "i", "we", "they", "he", "she", "it", "my", "our", "their", "this", "that",
  "any", "all", "if", "not", "so", "one", "two", "three", "what", "how", "why", "when",
]);

/** Content words of a bullet (for coverage heuristics). */
function contentWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));
}

function normalize(text: string): string {
  return ` ${text.toLowerCase().replace(/\s+/g, " ").trim()} `;
}

/** Fraction of the bullet's content words that appear in the response. */
function bulletCoverage(bullet: string, response: string): { covered: boolean; ratio: number; missing: string[] } {
  const haystack = normalize(response);
  const words = contentWords(bullet);
  if (words.length === 0) return { covered: true, ratio: 1, missing: [] };
  const found = words.filter((word) => haystack.includes(word));
  const missing = words.filter((word) => !haystack.includes(word));
  return { covered: found.length / words.length >= 0.5, ratio: found.length / words.length, missing };
}

const SPEECH_ARTEFACT_CATEGORIES = new Set(["capitalization", "punctuation"]);

function ruleGrammar(text: string, speech: boolean): GrammarCorrection[] {
  const result = checkSentence(text);
  return result.issues
    .filter((issue: GrammarIssue) => (speech ? !SPEECH_ARTEFACT_CATEGORIES.has(issue.category) : true))
    .slice(0, 6)
    .map((issue: GrammarIssue) => ({
      original: issue.original,
      corrected: issue.suggestion,
      explanation: issue.explanation,
      provenance: "RULE_BASED" as const,
    }));
}

function expectedSpokenWords(speakSec: number | undefined | null): number | null {
  if (!speakSec || speakSec <= 0) return null;
  // Conversational English ≈ 2–2.5 words/second; use a conservative floor.
  return Math.round(speakSec * 1.6);
}

// ---------------------------------------------------------------------------
// Main entry
// ---------------------------------------------------------------------------

export function runDeterministicAnalysis(
  resolved: ResolvedTask,
  response: string,
  options: { audioSec?: number | null; transcriptSource?: TranscriptSource; answerKey?: unknown } = {},
): DeterministicAnalysis {
  const { profile, payload } = resolved;
  const text = response.trim();
  const checks: EvaluationCheck[] = [];

  const measured = measureTranscript(text);
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const metrics: ResponseMetrics = {
    wordCount: countWords(text),
    sentenceCount: measured.sentenceCount,
    paragraphCount: paragraphs.length,
    uniqueWordRatio: measured.uniqueWordRatio,
    fillerCount: measured.fillerCount,
    fillersFound: measured.fillersFound,
    repeatedPhrases: measured.repeatedPhrases,
    wordsPerMinute: options.audioSec ? wordsPerMinute(measured.wordCount, options.audioSec * 1000) : null,
    fillersPerMinute: options.audioSec ? fillersPerMinute(measured.fillerCount, options.audioSec * 1000) : null,
    avgSentenceWords: measured.avgSentenceWords,
  };

  // ---- VERIFIED: word count against the task minimum --------------------
  const minWords =
    typeof payload.minWords === "number" && payload.minWords > 0
      ? payload.minWords
      : profile.minWordsDefault;
  if (minWords !== null) {
    checks.push({
      id: "word-count",
      label: `Length (${metrics.wordCount} words vs ${minWords} expected)`,
      passed: metrics.wordCount >= minWords,
      detail:
        metrics.wordCount >= minWords
          ? `Verified: ${metrics.wordCount} words — at or above the ${minWords}-word expectation.`
          : `Verified: ${metrics.wordCount} words — under the ${minWords}-word expectation. Under-length responses lose marks on task requirements.`,
      provenance: "VERIFIED",
    });
  }

  // ---- Per-task checks ---------------------------------------------------
  switch (profile.key) {
    case "IELTS_WRITING_ACADEMIC_T1": {
      const hasOverview = /\b(overall|in general|as a whole|generally|broadly|the (main|key) (trend|feature))\b/i.test(text);
      checks.push({
        id: "overview",
        label: "Clear overview statement",
        passed: hasOverview,
        detail: hasOverview
          ? "A summarising overview phrase was found — Academic Task 1 reports need one."
          : "No overview phrase found ('Overall…', 'In general…'). Academic Task 1 reports must summarise the main trend/stages — its absence caps Task achievement.",
        provenance: "RULE_BASED",
      });
      const hasData = /\d|\b(per cent|percent|percentage)\b|\b(half|third|quarter|double|twice)\b|\b(higher|lower|larger|smaller|rose|fell|increased|decreased)\b/i.test(text);
      checks.push({
        id: "data-reference",
        label: "References the data",
        passed: hasData,
        detail: hasData
          ? "The response references figures or comparative language typical of report writing."
          : "No figures or comparative language detected — a Task 1 report must report the data, not describe the topic in general terms.",
        provenance: "RULE_BASED",
      });
      checks.push({
        id: "paragraphing",
        label: "Sensible paragraphing",
        passed: paragraphs.length >= 2,
        detail:
          paragraphs.length >= 2
            ? `Verified: ${paragraphs.length} paragraphs.`
            : "The response is a single block. Task 1 reports read better split into overview + detail paragraphs.",
        provenance: "RULE_BASED",
      });
      break;
    }

    case "IELTS_WRITING_ACADEMIC_T2":
    case "IELTS_WRITING_GT_T2": {
      const hasPosition = /\b(in my opinion|i believe|i (strongly )?agree|i disagree|this essay will (argue|discuss|look at)|my view|from my perspective)\b/i.test(text);
      checks.push({
        id: "position",
        label: "Clear position / opinion",
        passed: hasPosition,
        detail: hasPosition
          ? "An explicit position or opinion marker was found."
          : "No clear position marker found. Task 2 answers must state where you stand — examiners look for a consistent, visible opinion.",
        provenance: "RULE_BASED",
      });
      checks.push({
        id: "paragraphing",
        label: "Essay paragraphing (intro + body + conclusion)",
        passed: paragraphs.length >= 3,
        detail:
          paragraphs.length >= 3
            ? `Verified: ${paragraphs.length} paragraphs.`
            : `Only ${paragraphs.length} paragraph(s) detected. Task 2 essays normally need an introduction, body paragraphs and a conclusion (4+ paragraphs).`,
        provenance: "RULE_BASED",
      });
      break;
    }

    case "IELTS_WRITING_GT_T1":
    case "TOEFL_WRITING_EMAIL": {
      const email = payload as unknown as EmailPayload;
      const lower = normalize(text);
      const hasGreeting = /\b(dear|hi|hello|hey)\b/.test(lower);
      const hasSignoff = /\b(yours (sincerely|faithfully)|best regards|kind regards|warm regards|best wishes|best|sincerely|cheers|thank you)\b/.test(lower);
      const hasPurpose = /\b(i am writing|i'm writing|i am pleased|i would like to (ask|request|invite|complain)|i write to)\b/i.test(text);
      checks.push({
        id: "greeting",
        label: "Opens with a greeting",
        passed: hasGreeting,
        detail: hasGreeting
          ? "A greeting ('Dear…' / 'Hi…') is present."
          : "No greeting found. Letters and emails must open with one (e.g. 'Dear Sir or Madam,' or 'Hi Anna,').",
        provenance: "RULE_BASED",
      });
      checks.push({
        id: "signoff",
        label: "Closes with a sign-off",
        passed: hasSignoff,
        detail: hasSignoff
          ? "A closing phrase ('Best regards,' …) is present."
          : "No sign-off found. Letters and emails must end with one (e.g. 'Yours faithfully,' / 'Best regards,').",
        provenance: "RULE_BASED",
      });
      checks.push({
        id: "purpose",
        label: "States its purpose early",
        passed: hasPurpose,
        detail: hasPurpose
          ? "A purpose statement ('I am writing to…') was found near the response."
          : "No purpose statement found ('I am writing to…'). Examiners expect the letter's reason up front.",
        provenance: "RULE_BASED",
      });
      const bullets = Array.isArray(email.bullets) ? email.bullets : [];
      bullets.forEach((bullet, index) => {
        const coverage = bulletCoverage(bullet, text);
        checks.push({
          id: `bullet-${index + 1}`,
          label: `Bullet ${index + 1} covered (${bullet.slice(0, 48)}${bullet.length > 48 ? "…" : ""})`,
          passed: coverage.covered,
          detail: coverage.covered
            ? "Heuristic match: most content words from this bullet appear in your response (paraphrase may hide full coverage)."
            : `Heuristic match found little of this bullet in your response. Missing content words: ${coverage.missing.slice(0, 6).join(", ")}. Uncovered bullets directly lower the task score.`,
          provenance: "RULE_BASED",
        });
      });
      if (profile.key === "TOEFL_WRITING_EMAIL" && metrics.wordCount > 250) {
        checks.push({
          id: "email-brevity",
          label: "Email stays concise",
          passed: false,
          detail: `Verified: ${metrics.wordCount} words. The real Write-an-Email task allows about 5 minutes — much longer drafts will not fit the timing.`,
          provenance: "VERIFIED",
        });
      }
      break;
    }

    case "TOEFL_WRITING_DISCUSSION": {
      const posts = Array.isArray(payload.posts) ? (payload.posts as Array<{ author: string; text: string }>) : [];
      const lower = normalize(text);
      const engaged = posts.some((post) => {
        const name = post.author.toLowerCase().trim();
        return name.length > 1 && lower.includes(name);
      });
      checks.push({
        id: "discussion-engagement",
        label: "Engages with a classmate's post",
        passed: engaged,
        detail: engaged
          ? "At least one classmate's name from the discussion appears in your response."
          : "No classmate post is addressed. A strong Academic Discussion contribution refers to at least one classmate (agree, extend or respectfully challenge).",
        provenance: "RULE_BASED",
      });
      const hasPosition = /\b(i believe|in my opinion|i agree|i disagree|in my view|from my perspective|i think that)\b/i.test(text);
      checks.push({
        id: "position",
        label: "States your own position",
        passed: hasPosition,
        detail: hasPosition
          ? "An explicit position marker was found."
          : "No clear position marker found. State where you stand on the professor's question.",
        provenance: "RULE_BASED",
      });
      break;
    }

    case "TOEFL_WRITING_SENTENCE": {
      // Target: payload answer (server-side only) or the answer column.
      const fromPayload =
        payload.answer && typeof payload.answer === "object"
          ? String((payload.answer as { text?: unknown }).text ?? "")
          : "";
      const fromKey =
        options.answerKey && typeof options.answerKey === "object"
          ? String((options.answerKey as { text?: unknown }).text ?? "")
          : "";
      const target = (fromPayload || fromKey).trim();
      if (target) {
        const match = scoreMatch(target, text);
        checks.push({
          id: "sentence-match",
          label: `Machine-checked sentence match (${Math.round(match.matchScore * 100)}%)`,
          passed: match.matchScore >= 0.99,
          detail:
            match.matchScore >= 0.99
              ? "Verified: your sentence contains every target word — exact match."
              : `Verified against the target sentence. Missed: ${match.missedWords.join(", ") || "—"}. Extra: ${match.extraWords.join(", ") || "—"}.`,
          provenance: "VERIFIED",
        });
      }
      break;
    }

    case "TOEFL_SPEAKING_LISTEN_REPEAT": {
      const target = String(payload.sentence ?? "").trim();
      if (target) {
        const match = scoreMatch(target, text);
        checks.push({
          id: "repeat-match",
          label: `Repeated-sentence match (${Math.round(match.matchScore * 100)}%)`,
          passed: match.matchScore >= 0.99,
          detail:
            match.matchScore >= 0.99
              ? "Verified: every word of the target sentence appears in your transcript."
              : `Verified from the transcript. Missed: ${match.missedWords.join(", ") || "—"}. Extra: ${match.extraWords.join(", ") || "—"}. Words the recogniser missed may have been unclear — or simply mis-recognised.`,
          provenance: "VERIFIED",
        });
      }
      break;
    }

    case "IELTS_SPEAKING":
    case "TOEFL_SPEAKING_INTERVIEW": {
      const speakSec =
        typeof payload.speakSec === "number" ? payload.speakSec : null;
      const expected = expectedSpokenWords(speakSec);
      if (expected !== null) {
        checks.push({
          id: "spoken-length",
          label: `Response length (${metrics.wordCount} words, ~${expected} expected for ${speakSec}s)`,
          passed: metrics.wordCount >= expected,
          detail:
            metrics.wordCount >= expected
              ? "Your transcript is long enough for the allotted speaking time."
              : `Your transcript is short for the allotted time (~${expected} words expected). Short answers limit fluency and development scores.`,
          provenance: "RULE_BASED",
        });
      }
      if (metrics.fillerCount > 0) {
        // Rate-aware: with a duration use fillers/minute (≤3/min is natural);
        // without one, more than two fillers in a short answer is a signal.
        const fillerRate = metrics.fillersPerMinute;
        const fillerOk = fillerRate !== null ? fillerRate <= 3 : metrics.fillerCount <= 2;
        checks.push({
          id: "fillers",
          label: `Filler words (${metrics.fillersFound.slice(0, 5).join(", ")})`,
          passed: fillerOk,
          detail: fillerOk
            ? "Few filler words detected in the transcript — good."
            : `${metrics.fillerCount} fillers detected${
                fillerRate !== null ? ` (about ${Math.round(fillerRate)} per minute)` : ""
              }. Occasional fillers are natural; frequent ones interrupt flow.`,
          provenance: "RULE_BASED",
        });
      }
      if (metrics.repeatedPhrases.length > 0) {
        checks.push({
          id: "repetition",
          label: "Self-repetition",
          passed: false,
          detail: `Repeated phrases detected: ${metrics.repeatedPhrases.slice(0, 3).join("; ")}. Repeating yourself signals effort — aim to keep moving forward.`,
          provenance: "RULE_BASED",
        });
      }
      if (metrics.avgSentenceWords > 25) {
        checks.push({
          id: "run-on",
          label: "Very long spoken sentences",
          passed: false,
          detail: `Average spoken sentence ≈ ${metrics.avgSentenceWords} words. Spoken run-ons are hard to follow — break ideas into shorter sentences.`,
          provenance: "RULE_BASED",
        });
      }
      break;
    }
  }

  // ---- Rule-based grammar (shared) ---------------------------------------
  const grammar = ruleGrammar(text, profile.section === "speaking");

  // ---- Language-analysis dimensions (PROMPT 52) ---------------------------
  const language = runLanguageAnalysis(profile.key, text, metrics, options.audioSec ?? null);
  const languageChecks = languageAnalysisChecks(language);

  return {
    checks: [...checks, ...languageChecks],
    metrics,
    grammar,
    match: null, // filled by the engine for match tasks (below)
    language,
  };
}

/** Match analysis for sentence/repeat tasks (target known). */
export function matchAgainstTarget(resolved: ResolvedTask, response: string, answerKey?: unknown): MatchAnalysis {
  const { payload, profile } = resolved;
  let target = "";
  if (profile.key === "TOEFL_SPEAKING_LISTEN_REPEAT") {
    target = String(payload.sentence ?? "").trim();
  } else if (profile.key === "TOEFL_WRITING_SENTENCE") {
    const fromPayload =
      payload.answer && typeof payload.answer === "object"
        ? String((payload.answer as { text?: unknown }).text ?? "")
        : "";
    const fromKey =
      answerKey && typeof answerKey === "object"
        ? String((answerKey as { text?: unknown }).text ?? "")
        : "";
    target = (fromPayload || fromKey).trim();
  }
  if (!target) return null;
  const match = scoreMatch(target, response.trim());
  return {
    target,
    matchScore: match.matchScore,
    missedWords: match.missedWords,
    extraWords: match.extraWords,
  };
}

// ---------------------------------------------------------------------------
// Language-analysis dimensions (writing) and pace/pauses (speaking)
// ---------------------------------------------------------------------------

/** Full-text writing profiles that receive the sentence/punctuation/repetition analyses. */
const WRITING_ANALYSIS_PROFILES = new Set([
  "IELTS_WRITING_ACADEMIC_T1",
  "IELTS_WRITING_ACADEMIC_T2",
  "IELTS_WRITING_GT_T1",
  "IELTS_WRITING_GT_T2",
  "TOEFL_WRITING_EMAIL",
  "TOEFL_WRITING_DISCUSSION",
]);

/** Long-form speaking profiles that receive pace/pause analysis. */
const PACE_ANALYSIS_PROFILES = new Set(["IELTS_SPEAKING", "TOEFL_SPEAKING_INTERVIEW"]);

export type LanguageAnalysis = {
  sentenceStructure: ReturnType<typeof analyzeSentenceStructure>;
  punctuation: ReturnType<typeof analyzePunctuation>;
  repetition: ReturnType<typeof analyzeRepetition>;
  pace: ReturnType<typeof analyzePace>;
  hesitationMarkers: number;
};

export function runLanguageAnalysis(
  profileKey: string,
  text: string,
  metrics: ResponseMetrics,
  audioSec: number | null,
): LanguageAnalysis {
  const sentenceStructure = WRITING_ANALYSIS_PROFILES.has(profileKey)
    ? analyzeSentenceStructure(text)
    : {
        check: null,
        longestSentenceWords: 0,
        fragmentCount: 0,
        runOnCount: 0,
        repeatedOpenings: null as string | null,
        complexSentenceRatio: null as number | null,
      };
  const punctuation = WRITING_ANALYSIS_PROFILES.has(profileKey)
    ? analyzePunctuation(text)
    : {
        check: null,
        missingTerminal: 0,
        lowercaseStarts: 0,
        commaSplices: 0,
        missingApostrophes: [] as string[],
        doubleExclamations: 0,
      };
  const repetition = WRITING_ANALYSIS_PROFILES.has(profileKey)
    ? analyzeRepetition(text)
    : { check: null, repeatedPhrases: [] as string[], overusedWords: [] as Array<{ word: string; count: number }> };
  const pace = PACE_ANALYSIS_PROFILES.has(profileKey)
    ? analyzePace(metrics, audioSec)
    : { check: null, wpm: null as number | null, interpretation: "no-duration" as const };
  return {
    sentenceStructure,
    punctuation,
    repetition,
    pace,
    hesitationMarkers: PACE_ANALYSIS_PROFILES.has(profileKey) ? hesitationMarkers(text) : 0,
  };
}

/** Collect the language-analysis checks (order: structure → punctuation → repetition → pace). */
export function languageAnalysisChecks(analysis: LanguageAnalysis): EvaluationCheck[] {
  return [
    analysis.sentenceStructure.check,
    analysis.punctuation.check,
    analysis.repetition.check,
    analysis.pace.check,
  ].filter((check): check is EvaluationCheck => check !== null);
}

/** Minimum response length (words) below which evaluation is unreliable. */
export function minimumReliableWords(profileKey: string): number {
  return profileKey === "TOEFL_SPEAKING_LISTEN_REPEAT" || profileKey === "TOEFL_WRITING_SENTENCE"
    ? 2
    : 15;
}
