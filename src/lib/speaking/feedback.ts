/**
 * Speaking feedback engine — the authoritative, deterministic grader.
 *
 * Two clearly separated layers:
 *  1. MEASURED results (this file): rubric scores computed from the
 *     transcript + recording duration against the authored task target.
 *  2. AI coach suggestions (conversation.ts / stt.ts): language-model text,
 *     always labeled, never part of a score.
 *
 * Grammar checking reuses the Grammar Error Clinic's rule engine, with
 * capitalisation/punctuation issues excluded — those are transcription
 * artefacts, not speech errors.
 */

import type {
  FeedbackDimension,
  MeasuredFeedback,
  OpenSpeakingTask,
  MatchSpeakingTask,
  SpeakingTask,
} from "@/data/speaking/types";
import { checkSentence } from "@/lib/grammar/checker";
import type { GrammarIssue } from "@/data/grammar/types";
import {
  fillersPerMinute,
  measureTranscript,
  wordsPerMinute,
} from "./measure";

// ---------------------------------------------------------------------------
// Text helpers (reuse the shared engine normalisation)
// ---------------------------------------------------------------------------

import { normalizeWord } from "@/lib/engine/normalize";

function normalisedTokens(text: string): string[] {
  return text
    .split(/\s+/)
    .map((token) => normalizeWord(token))
    .filter(Boolean);
}

function containsPhrase(lowerTranscript: string, phrase: string): boolean {
  const normalised = phrase.toLowerCase().trim();
  if (!normalised) return false;
  return lowerTranscript.includes(normalised);
}

// ---------------------------------------------------------------------------
// Match tasks (repeat / read aloud)
// ---------------------------------------------------------------------------

export interface MatchResult {
  /** 0–1 similarity between the transcript and the target text. */
  matchScore: number;
  /** Target words the recogniser did not appear to hear. */
  missedWords: string[];
  extraWords: string[];
}

/**
 * Bag-of-words F1 between transcript and target, with an order bonus.
 * Deliberately simple and explainable: this is an intelligibility signal
 * ("could a machine understand you"), NOT a pronunciation score.
 */
export function scoreMatch(targetText: string, transcript: string): MatchResult {
  const target = normalisedTokens(targetText);
  const spoken = normalisedTokens(transcript);
  if (target.length === 0) return { matchScore: 0, missedWords: [], extraWords: [] };
  if (spoken.length === 0) {
    return { matchScore: 0, missedWords: [...target], extraWords: [] };
  }

  const remaining = [...spoken];
  const matched: string[] = [];
  for (const word of target) {
    const index = remaining.indexOf(word);
    if (index !== -1) {
      matched.push(word);
      remaining.splice(index, 1);
    }
  }

  const precision = matched.length / spoken.length;
  const recall = matched.length / target.length;
  const f1 = precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);

  return {
    matchScore: Math.round(f1 * 100) / 100,
    missedWords: target.filter((word) => !matched.includes(word)),
    extraWords: remaining.slice(0, 5),
  };
}

// ---------------------------------------------------------------------------
// Checklist / keyword coverage
// ---------------------------------------------------------------------------

export interface ChecklistCoverage {
  covered: { id: string; label: string; covered: boolean; matched: string[] }[];
  coverage: number;
}

export function scoreChecklist(
  checklist: OpenSpeakingTask["checklist"],
  transcript: string,
): ChecklistCoverage {
  const lower = ` ${transcript.toLowerCase().replace(/\s+/g, " ").trim()} `;
  const covered = checklist.map((point) => {
    const matched = point.anyOf.filter((phrase) => containsPhrase(lower, phrase));
    return {
      id: point.id,
      label: point.label,
      covered: matched.length > 0,
      matched,
    };
  });
  const hit = covered.filter((c) => c.covered).length;
  return {
    covered,
    coverage: checklist.length === 0 ? 0 : Math.round((hit / checklist.length) * 100) / 100,
  };
}

export function keywordHits(keywords: string[], transcript: string): string[] {
  const lower = ` ${transcript.toLowerCase().replace(/\s+/g, " ").trim()} `;
  return keywords.filter((keyword) => containsPhrase(lower, keyword));
}

// ---------------------------------------------------------------------------
// Grammar (rule engine, speech-artefact rules filtered out)
// ---------------------------------------------------------------------------

const SPEECH_ARTEFACT_CATEGORIES = new Set(["capitalization", "punctuation"]);

export interface GrammarSummary {
  issues: {
    original: string;
    corrected: string;
    explanation: string;
    category: string;
  }[];
  /** Issues per 40 spoken words. */
  issueRate: number;
}

export function grammarForSpeech(transcript: string, wordCount: number): GrammarSummary {
  const result = checkSentence(transcript);
  const issues = result.issues
    .filter((issue: GrammarIssue) => !SPEECH_ARTEFACT_CATEGORIES.has(issue.category))
    .slice(0, 6)
    .map((issue: GrammarIssue) => ({
      original: issue.original,
      corrected: issue.suggestion,
      explanation: issue.explanation,
      category: issue.category,
    }));
  const denominator = Math.max(wordCount, 10) / 40;
  return {
    issues,
    issueRate: Math.round((issues.length / denominator) * 10) / 10,
  };
}

// ---------------------------------------------------------------------------
// Dimension scoring (open tasks)
// ---------------------------------------------------------------------------

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function relevanceScore(hits: number, total: number): number {
  if (total === 0) return 70; // no authored keywords: neutral-positive default
  return clampScore((hits / total) * 100);
}

function constructionScore(
  sentenceCount: number,
  avgSentenceWords: number,
  wordCount: number,
): number {
  let score = 100;
  if (avgSentenceWords > 22) score -= 25;
  if (avgSentenceWords > 34) score -= 25; // run-on territory
  if (wordCount > 30 && sentenceCount < 2) score -= 35; // one giant sentence
  if (wordCount > 60 && sentenceCount < 3) score -= 15;
  return clampScore(score);
}

function grammarScore(issueRate: number): number {
  // 0 issues/40w → 100; each ~0.5 issues/40w costs ~15 points.
  return clampScore(100 - issueRate * 30);
}

function vocabularyScore(
  uniqueRatio: number,
  wordCount: number,
  targetWordsUsed: string[],
  targetWordsTotal: number,
  advancedMarkers: string[],
): number {
  let score = 55;
  if (targetWordsTotal > 0) {
    score += 25 * (targetWordsUsed.length / targetWordsTotal);
  } else {
    score += 12; // no target vocabulary authored: credit neutral
  }
  if (wordCount >= 25 && uniqueRatio >= 0.45) score += 10;
  if (advancedMarkers.length > 0) score += 10;
  return clampScore(score);
}

function completenessScore(checklistCoverage: number, wordCount: number, minWords: number): number {
  const wordScore = minWords <= 0 ? 100 : Math.min(100, (wordCount / minWords) * 100);
  return clampScore(checklistCoverage * 60 + wordScore * 0.4);
}

function fluencyScore(
  wpm: number,
  fillersPerMin: number,
  repeatedPhrases: string[],
): number {
  let pace = 70; // unknown duration: neutral score
  if (wpm > 0) {
    if (wpm >= 100 && wpm <= 170) pace = 100;
    else if (wpm >= 85 && wpm < 100) pace = 85;
    else if (wpm > 170 && wpm <= 190) pace = 85;
    else if (wpm >= 70 && wpm < 85) pace = 70;
    else if (wpm > 190 && wpm <= 215) pace = 65;
    else pace = 50;
  }
  let score = pace;
  if (fillersPerMin > 3) score -= 10;
  if (fillersPerMin > 6) score -= 15;
  if (fillersPerMin > 10) score -= 10;
  score -= Math.min(15, repeatedPhrases.length * 5);
  return clampScore(score);
}

const OPEN_WEIGHTS: Record<FeedbackDimension, number> = {
  relevance: 0.15,
  construction: 0.15,
  grammar: 0.2,
  vocabulary: 0.15,
  completeness: 0.2,
  fluency: 0.15,
};

// ---------------------------------------------------------------------------
// Public grading API
// ---------------------------------------------------------------------------

export const OPEN_PASS_SCORE = 60;
export const MATCH_PASS_SCORE = 70;

export interface GradedAttempt {
  measured: MeasuredFeedback;
  /** Overall 0–100 (match score for match tasks, weighted rubric for open). */
  overall: number;
  passed: boolean;
}

function selfAssessedMeasured(durationMs: number): MeasuredFeedback {
  return {
    durationMs,
    wordCount: 0,
    sentenceCount: 0,
    avgSentenceWords: 0,
    wordsPerMinute: 0,
    fillerCount: 0,
    fillersPerMinute: 0,
    fillersFound: [],
    repeatedPhrases: [],
    uniqueWordRatio: 0,
    checklistCovered: [],
    checklistCoverage: 0,
    topicKeywordHits: [],
    targetWordsUsed: [],
    grammarIssues: [],
    intelligibility: null,
    scores: {},
    overall: 0,
    selfAssessed: true,
  };
}

/**
 * Grade one attempt of a task from its transcript (provider ran) — fully
 * deterministic. `transcriptFromStt` distinguishes real speech recognition
 * ("server"/"browser") from typed input ("manual"): only real recognition
 * results may carry the intelligibility proxy, because only then did a
 * machine genuinely listen.
 */
export function gradeSpeakingAttempt(
  task: SpeakingTask,
  transcript: string,
  durationMs: number,
  transcriptFromStt: boolean,
): GradedAttempt {
  const metrics = measureTranscript(transcript);
  const grammar = grammarForSpeech(transcript, metrics.wordCount);

  if (task.type === "match") {
    return gradeMatchTask(task, transcript, durationMs, transcriptFromStt, metrics, grammar);
  }
  return gradeOpenTask(task, transcript, durationMs, metrics, grammar);
}

function gradeMatchTask(
  task: MatchSpeakingTask,
  transcript: string,
  durationMs: number,
  transcriptFromStt: boolean,
  metrics: ReturnType<typeof measureTranscript>,
  grammar: GrammarSummary,
): GradedAttempt {
  const match = scoreMatch(task.targetText, transcript);
  const overall = Math.round(match.matchScore * 100);
  const measured: MeasuredFeedback = {
    durationMs,
    wordCount: metrics.wordCount,
    sentenceCount: metrics.sentenceCount,
    avgSentenceWords: metrics.avgSentenceWords,
    wordsPerMinute: wordsPerMinute(metrics.wordCount, durationMs),
    fillerCount: metrics.fillerCount,
    fillersPerMinute: fillersPerMinute(metrics.fillerCount, durationMs),
    fillersFound: metrics.fillersFound,
    repeatedPhrases: metrics.repeatedPhrases,
    uniqueWordRatio: metrics.uniqueWordRatio,
    checklistCovered: [],
    checklistCoverage: 0,
    topicKeywordHits: [],
    targetWordsUsed: [],
    grammarIssues: grammar.issues,
    intelligibility: {
      available: transcriptFromStt,
      heard: transcript,
      matchScore: match.matchScore,
      note: transcriptFromStt
        ? "Transcript match, not phoneme accuracy: this compares the text a recogniser heard with the target. Words it missed may have been unclear — or simply mis-recognised. Accents are not penalised."
        : "Typed input — no recognition was run, so there is no intelligibility signal.",
    },
    scores: {},
    overall,
    selfAssessed: false,
  };
  return { measured, overall, passed: overall >= MATCH_PASS_SCORE };
}

function gradeOpenTask(
  task: OpenSpeakingTask,
  transcript: string,
  durationMs: number,
  metrics: ReturnType<typeof measureTranscript>,
  grammar: GrammarSummary,
): GradedAttempt {
  const lower = ` ${transcript.toLowerCase()} `;
  const checklist = scoreChecklist(task.checklist, transcript);
  const topicHits = keywordHits(task.topicKeywords, lower);
  const targetUsed =
    task.targetWords?.filter((word) => containsPhrase(lower, word)) ?? [];

  const scores: Partial<Record<FeedbackDimension, number>> = {
    relevance: relevanceScore(topicHits.length, task.topicKeywords.length),
    construction: constructionScore(
      metrics.sentenceCount,
      metrics.avgSentenceWords,
      metrics.wordCount,
    ),
    grammar: grammarScore(grammar.issueRate),
    vocabulary: vocabularyScore(
      metrics.uniqueWordRatio,
      metrics.wordCount,
      targetUsed,
      task.targetWords?.length ?? 0,
      metrics.advancedMarkers,
    ),
    completeness: completenessScore(checklist.coverage, metrics.wordCount, task.minWords),
    fluency: fluencyScore(
      wordsPerMinute(metrics.wordCount, durationMs),
      fillersPerMinute(metrics.fillerCount, durationMs),
      metrics.repeatedPhrases,
    ),
  };

  const overall = Math.round(
    (Object.keys(OPEN_WEIGHTS) as FeedbackDimension[]).reduce(
      (sum, dimension) => sum + (scores[dimension] ?? 0) * OPEN_WEIGHTS[dimension],
      0,
    ),
  );

  const measured: MeasuredFeedback = {
    durationMs,
    wordCount: metrics.wordCount,
    sentenceCount: metrics.sentenceCount,
    avgSentenceWords: metrics.avgSentenceWords,
    wordsPerMinute: wordsPerMinute(metrics.wordCount, durationMs),
    fillerCount: metrics.fillerCount,
    fillersPerMinute: fillersPerMinute(metrics.fillerCount, durationMs),
    fillersFound: metrics.fillersFound,
    repeatedPhrases: metrics.repeatedPhrases,
    uniqueWordRatio: metrics.uniqueWordRatio,
    checklistCovered: checklist.covered,
    checklistCoverage: checklist.coverage,
    topicKeywordHits: topicHits,
    targetWordsUsed: targetUsed,
    grammarIssues: grammar.issues,
    intelligibility: null,
    scores,
    overall,
    selfAssessed: false,
  };

  return { measured, overall, passed: overall >= OPEN_PASS_SCORE };
}

/** Self-assessed attempt (no transcript): passed by the learner's own ear. */
export function selfAssessedAttempt(durationMs: number): GradedAttempt {
  return { measured: selfAssessedMeasured(durationMs), overall: 0, passed: true };
}

// ---------------------------------------------------------------------------
// Pronunciation match (same honest proxy, reused)
// ---------------------------------------------------------------------------

export function gradePronunciationMatch(
  targetText: string,
  transcript: string,
  hadStt: boolean,
): { matchScore: number; note: string } {
  const match = scoreMatch(targetText, transcript);
  return {
    matchScore: hadStt ? match.matchScore : -1,
    note: hadStt
      ? "Transcript match, not phoneme accuracy. Listen to the model, then to your own recording, and judge the difference yourself — your ears are the real pronunciation teacher here."
      : "No recognition was used, so this is a self-assessed practice take.",
  };
}
