/**
 * TOEFL Writing and Speaking Practice Library — performance tracking
 * (PROMPT 50): aggregates the recorded attempts into the reports the
 * library surfaces — accuracy per sentence focus, criteria trends for the
 * evaluated writing and interview tasks, repetition accuracy by tier and
 * focus, recent history, and weakness-driven recommendations.
 *
 * Everything here tracks PRACTICE performance; nothing predicts or promises
 * an official ETS score.
 */

import { db } from "@/lib/db";
import {
  TOEFL_WRITING_BANK,
  TOEFL_SENTENCE_FOCUS_LABELS,
  type ToeflSentenceFocus,
} from "@/data/exams/toefl/writing-bank";
import {
  TOEFL_SPEAKING_BANK,
  TOEFL_REPEAT_FOCUS_LABELS,
  type ToeflRepeatFocus,
} from "@/data/exams/toefl/speaking-bank";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

type WritingAttemptRow = {
  id: string;
  exerciseSlug: string;
  taskType: string;
  difficulty: number;
  mode: string;
  totalQuestions: number;
  correctCount: number;
  focusCounts: string;
  errorCounts: string;
  measured: string;
  overall: number;
  criteria: string;
  timeSpentSec: number;
  createdAt: Date;
};

type SpeakingAttemptRow = {
  id: string;
  itemSlug: string;
  kind: string;
  topic: string;
  difficulty: number;
  mode: string;
  wordCount: number;
  durationSec: number;
  measured: string;
  overall: number;
  criteria: string;
  timeSpentSec: number;
  createdAt: Date;
};

function parseJson<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// ---------------------------------------------------------------------------
// Writing performance
// ---------------------------------------------------------------------------

export type WritingFocusProfile = {
  focus: ToeflSentenceFocus;
  label: string;
  total: number;
  correct: number;
  accuracy: number;
};

export type WritingCriterionTrend = {
  key: string;
  name: string;
  attempts: number;
  meanScore: number;
  lastScore: number | null;
};

export type WritingPerformanceReport = {
  attempts: number;
  sentenceAttempts: number;
  evaluatedAttempts: number;
  itemsAnswered: number;
  itemsCorrect: number;
  accuracy: number;
  errorCounts: Record<string, number>;
  focusProfile: WritingFocusProfile[];
  criteriaTrend: WritingCriterionTrend[];
  evaluatedOverall: { mean: number; attempts: number };
  byTask: { taskType: string; attempts: number; correct: number; total: number }[];
  recentAttempts: { id: string; exerciseSlug: string; taskType: string; correct: number; total: number; overall: number; createdAt: string }[];
  recommendations: { slug: string; title: string; taskType: string; difficulty: number; reason: string }[];
};

const CRITERION_NAMES: Record<string, string> = {
  task: "Task response",
  organization: "Organization & development",
  accuracy: "Language accuracy",
  lexis: "Lexical range",
};

export function buildWritingPerformanceReport(rows: WritingAttemptRow[]): WritingPerformanceReport {
  const errorCounts: Record<string, number> = {};
  const focusTotals = new Map<string, { total: number; correct: number }>();
  const criteriaAcc = new Map<string, { scores: number[]; name: string }>();
  const taskAcc = new Map<string, { attempts: number; correct: number; total: number }>();
  let itemsAnswered = 0;
  let itemsCorrect = 0;
  let evaluatedSum = 0;
  let evaluatedCount = 0;

  for (const row of rows) {
    const isSentence = row.taskType === "build-sentence";
    if (isSentence) {
      itemsAnswered += row.totalQuestions;
      itemsCorrect += row.correctCount;
      for (const [focus, v] of Object.entries(parseJson<Record<string, { total: number; correct: number }>>(row.focusCounts, {}))) {
        const agg = focusTotals.get(focus) ?? { total: 0, correct: 0 };
        agg.total += v?.total ?? 0;
        agg.correct += v?.correct ?? 0;
        focusTotals.set(focus, agg);
      }
      for (const [k, v] of Object.entries(parseJson<Record<string, number>>(row.errorCounts, {}))) {
        if (k === "correct") continue;
        errorCounts[k] = (errorCounts[k] ?? 0) + (v ?? 0);
      }
      const t = taskAcc.get(row.taskType) ?? { attempts: 0, correct: 0, total: 0 };
      t.attempts += 1;
      t.correct += row.correctCount;
      t.total += row.totalQuestions;
      taskAcc.set(row.taskType, t);
    } else {
      evaluatedSum += row.overall;
      evaluatedCount += 1;
      const t = taskAcc.get(row.taskType) ?? { attempts: 0, correct: 0, total: 0 };
      t.attempts += 1;
      taskAcc.set(row.taskType, t);
      for (const c of parseJson<{ key: string; name: string; score: number }[]>(row.criteria, [])) {
        if (typeof c?.score !== "number") continue;
        const agg = criteriaAcc.get(c.key) ?? { scores: [], name: c.name ?? CRITERION_NAMES[c.key] ?? c.key };
        agg.scores.push(c.score);
        criteriaAcc.set(c.key, agg);
      }
    }
  }

  const focusProfile: WritingFocusProfile[] = (Object.keys(TOEFL_SENTENCE_FOCUS_LABELS) as ToeflSentenceFocus[]).map((focus) => {
    const agg = focusTotals.get(focus) ?? { total: 0, correct: 0 };
    return {
      focus,
      label: TOEFL_SENTENCE_FOCUS_LABELS[focus],
      total: agg.total,
      correct: agg.correct,
      accuracy: agg.total ? agg.correct / agg.total : 0,
    };
  });

  const criteriaTrend: WritingCriterionTrend[] = [...criteriaAcc.entries()].map(([key, agg]) => ({
    key,
    name: agg.name || CRITERION_NAMES[key] || key,
    attempts: agg.scores.length,
    meanScore: agg.scores.reduce((a, b) => a + b, 0) / agg.scores.length,
    lastScore: agg.scores.length ? agg.scores[agg.scores.length - 1] : null,
  }));

  const attempted = new Set(rows.map((r) => r.exerciseSlug));
  const sentenceAccuracy = itemsAnswered ? itemsCorrect / itemsAnswered : 0;
  const recommendations: WritingPerformanceReport["recommendations"] = [];

  // Weakness-driven: weakest sentence focus with data.
  const weakFocus = focusProfile.filter((f) => f.total >= 6).sort((a, b) => a.accuracy - b.accuracy)[0];
  if (weakFocus) {
    const pool = TOEFL_WRITING_BANK.filter(
      (ex) => ex.taskType === "build-sentence" && ex.focus === weakFocus.focus && !attempted.has(ex.slug),
    ).slice(0, 3);
    for (const ex of pool) {
      recommendations.push({
        slug: ex.slug,
        title: ex.title,
        taskType: ex.taskType,
        difficulty: ex.difficulty,
        reason: `${weakFocus.label} accuracy is ${Math.round(weakFocus.accuracy * 100)}% across ${weakFocus.total} items — this exercise targets it directly.`,
      });
    }
  }
  // Weakest evaluated criterion.
  const weakCriterion = [...criteriaTrend].filter((c) => c.attempts >= 2).sort((a, b) => a.meanScore - b.meanScore)[0];
  if (weakCriterion) {
    const pool = TOEFL_WRITING_BANK.filter((ex) => ex.taskType !== "build-sentence" && !attempted.has(ex.slug)).slice(0, 3);
    for (const ex of pool) {
      recommendations.push({
        slug: ex.slug,
        title: ex.title,
        taskType: ex.taskType,
        difficulty: ex.difficulty,
        reason: `${weakCriterion.name} averages ${weakCriterion.meanScore.toFixed(1)}/6 across your evaluated tasks — more practice writing lifts it.`,
      });
    }
  }
  if (recommendations.length === 0 && rows.length === 0) {
    const starters = ["toefl-wb-sent-01", "toefl-wb-email-01", "toefl-wb-disc-01"];
    for (const slug of starters) {
      const ex = TOEFL_WRITING_BANK.find((e) => e.slug === slug);
      if (ex) recommendations.push({ slug: ex.slug, title: ex.title, taskType: ex.taskType, difficulty: ex.difficulty, reason: "Start here: a foundation exercise from the writing library." });
    }
  } else if (recommendations.length === 0) {
    // Not enough data for a weakness verdict yet: continue at the current level.
    const sentenceDone = rows.filter((r) => r.taskType === "build-sentence").length;
    const preferSentence = sentenceDone <= rows.filter((r) => r.taskType !== "build-sentence").length;
    const pool = TOEFL_WRITING_BANK.filter((ex) => !attempted.has(ex.slug) && (preferSentence ? ex.taskType === "build-sentence" : ex.taskType !== "build-sentence")).slice(0, 3);
    for (const ex of pool) {
      recommendations.push({ slug: ex.slug, title: ex.title, taskType: ex.taskType, difficulty: ex.difficulty, reason: "No dominant weakness in your data yet — keep practising to build your profile." });
    }
  }

  return {
    attempts: rows.length,
    sentenceAttempts: rows.filter((r) => r.taskType === "build-sentence").length,
    evaluatedAttempts: evaluatedCount,
    itemsAnswered,
    itemsCorrect,
    accuracy: sentenceAccuracy,
    errorCounts,
    focusProfile,
    criteriaTrend,
    evaluatedOverall: { mean: evaluatedCount ? evaluatedSum / evaluatedCount : 0, attempts: evaluatedCount },
    byTask: [...taskAcc.entries()].map(([taskType, t]) => ({ taskType, ...t })),
    recentAttempts: [...rows]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 10)
      .map((r) => ({ id: r.id, exerciseSlug: r.exerciseSlug, taskType: r.taskType, correct: r.correctCount, total: r.totalQuestions, overall: r.overall, createdAt: r.createdAt.toISOString() })),
    recommendations: recommendations.slice(0, 6),
  };
}

export async function loadUserWritingAttempts(userId: string): Promise<WritingAttemptRow[]> {
  const rows = await db.toeflWritingBankAttempt.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });
  return rows as unknown as WritingAttemptRow[];
}

// ---------------------------------------------------------------------------
// Speaking performance
// ---------------------------------------------------------------------------

export type RepeatFocusProfile = {
  focus: ToeflRepeatFocus;
  label: string;
  attempts: number;
  meanAccuracy: number;
  withinWindowRate: number;
};

export type SpeakingCriterionTrend = {
  key: string;
  name: string;
  attempts: number;
  meanScore: number;
  lastScore: number | null;
};

export type SpeakingPerformanceReport = {
  attempts: number;
  repeatAttempts: number;
  interviewAttempts: number;
  repeatMeanAccuracy: number;
  repeatWithinWindowRate: number;
  focusProfile: RepeatFocusProfile[];
  criteriaTrend: SpeakingCriterionTrend[];
  interviewOverall: { mean: number; attempts: number };
  byTier: { tier: number; attempts: number; meanAccuracy: number }[];
  recentAttempts: { id: string; itemSlug: string; kind: string; topic: string; overall: number; accuracy: number | null; createdAt: string }[];
  recommendations: { slug: string; title: string; kind: string; difficulty: number; reason: string }[];
};

const SPEAKING_CRITERION_NAMES: Record<string, string> = {
  response: "Answer & relevance",
  development: "Development & support",
  language: "Language control",
  delivery: "Fluency & pace",
};

export function buildSpeakingPerformanceReport(rows: SpeakingAttemptRow[]): SpeakingPerformanceReport {
  const focusAcc = new Map<string, { attempts: number; accuracySum: number; withinWindow: number }>();
  const criteriaAcc = new Map<string, { scores: number[]; name: string }>();
  const tierAcc = new Map<number, { attempts: number; accuracySum: number }>();
  let repeatAccuracySum = 0;
  let repeatCount = 0;
  let withinWindowCount = 0;
  let interviewSum = 0;
  let interviewCount = 0;

  for (const row of rows) {
    if (row.kind === "listen-repeat") {
      const measured = parseJson<{ accuracy?: number; withinWindow?: boolean }>(row.measured, {});
      const accuracy = typeof measured.accuracy === "number" ? measured.accuracy : row.overall;
      repeatAccuracySum += accuracy;
      repeatCount += 1;
      if (measured.withinWindow) withinWindowCount += 1;
      const agg = focusAcc.get(row.topic) ?? { attempts: 0, accuracySum: 0, withinWindow: 0 };
      agg.attempts += 1;
      agg.accuracySum += accuracy;
      if (measured.withinWindow) agg.withinWindow += 1;
      focusAcc.set(row.topic, agg);
      const t = tierAcc.get(row.difficulty) ?? { attempts: 0, accuracySum: 0 };
      t.attempts += 1;
      t.accuracySum += accuracy;
      tierAcc.set(row.difficulty, t);
    } else {
      interviewSum += row.overall;
      interviewCount += 1;
      for (const c of parseJson<{ key: string; name: string; score: number }[]>(row.criteria, [])) {
        if (typeof c?.score !== "number") continue;
        const agg = criteriaAcc.get(c.key) ?? { scores: [], name: c.name ?? SPEAKING_CRITERION_NAMES[c.key] ?? c.key };
        agg.scores.push(c.score);
        criteriaAcc.set(c.key, agg);
      }
    }
  }

  const focusProfile: RepeatFocusProfile[] = [...focusAcc.entries()]
    .filter(([focus]) => focus in TOEFL_REPEAT_FOCUS_LABELS)
    .map(([focus, agg]) => ({
      focus: focus as ToeflRepeatFocus,
      label: TOEFL_REPEAT_FOCUS_LABELS[focus as ToeflRepeatFocus],
      attempts: agg.attempts,
      meanAccuracy: agg.attempts ? agg.accuracySum / agg.attempts : 0,
      withinWindowRate: agg.attempts ? agg.withinWindow / agg.attempts : 0,
    }))
    .sort((a, b) => a.meanAccuracy - b.meanAccuracy);

  const criteriaTrend: SpeakingCriterionTrend[] = [...criteriaAcc.entries()].map(([key, agg]) => ({
    key,
    name: agg.name || SPEAKING_CRITERION_NAMES[key] || key,
    attempts: agg.scores.length,
    meanScore: agg.scores.reduce((a, b) => a + b, 0) / agg.scores.length,
    lastScore: agg.scores.length ? agg.scores[agg.scores.length - 1] : null,
  }));

  const attempted = new Set(rows.map((r) => r.itemSlug));
  const recommendations: SpeakingPerformanceReport["recommendations"] = [];
  const weakTag = focusProfile.filter((f) => f.attempts >= 3).sort((a, b) => a.meanAccuracy - b.meanAccuracy)[0];
  if (weakTag) {
    const pool = TOEFL_SPEAKING_BANK.filter(
      (ex) => ex.taskType === "listen-repeat" && ex.focus === weakTag.focus && !attempted.has(ex.slug),
    ).slice(0, 3);
    for (const ex of pool) {
      recommendations.push({
        slug: ex.slug,
        title: ex.title,
        kind: ex.taskType,
        difficulty: ex.difficulty,
        reason: `${weakTag.label} repetition accuracy averages ${Math.round(weakTag.meanAccuracy * 100)}% — practise the same skill on fresh sentences.`,
      });
    }
  }
  const weakCriterion = [...criteriaTrend].filter((c) => c.attempts >= 2).sort((a, b) => a.meanScore - b.meanScore)[0];
  if (weakCriterion) {
    const pool = TOEFL_SPEAKING_BANK.filter((ex) => ex.taskType === "take-interview" && !attempted.has(ex.slug)).slice(0, 3);
    for (const ex of pool) {
      recommendations.push({
        slug: ex.slug,
        title: ex.title,
        kind: ex.taskType,
        difficulty: ex.difficulty,
        reason: `${weakCriterion.name} averages ${weakCriterion.meanScore.toFixed(1)}/6 across your interview answers — another interview item lifts it.`,
      });
    }
  }
  if (recommendations.length === 0 && rows.length === 0) {
    for (const slug of ["toefl-sb-rep-01", "toefl-sb-int-01"]) {
      const ex = TOEFL_SPEAKING_BANK.find((e) => e.slug === slug);
      if (ex) recommendations.push({ slug: ex.slug, title: ex.title, kind: ex.taskType, difficulty: ex.difficulty, reason: "Start here: a foundation item from the speaking library." });
    }
  } else if (recommendations.length === 0) {
    // Not enough data for a weakness verdict yet: continue at the current level.
    const preferRepeat = repeatCount <= interviewCount;
    const pool = TOEFL_SPEAKING_BANK.filter((ex) => ex.taskType === (preferRepeat ? "listen-repeat" : "take-interview") && !attempted.has(ex.slug)).slice(0, 3);
    for (const ex of pool) {
      recommendations.push({ slug: ex.slug, title: ex.title, kind: ex.taskType, difficulty: ex.difficulty, reason: "No dominant weakness in your data yet — keep practising to build your profile." });
    }
  }

  return {
    attempts: rows.length,
    repeatAttempts: repeatCount,
    interviewAttempts: interviewCount,
    repeatMeanAccuracy: repeatCount ? repeatAccuracySum / repeatCount : 0,
    repeatWithinWindowRate: repeatCount ? withinWindowCount / repeatCount : 0,
    focusProfile,
    criteriaTrend,
    interviewOverall: { mean: interviewCount ? interviewSum / interviewCount : 0, attempts: interviewCount },
    byTier: [...tierAcc.entries()].map(([tier, t]) => ({ tier, attempts: t.attempts, meanAccuracy: t.attempts ? t.accuracySum / t.attempts : 0 })).sort((a, b) => a.tier - b.tier),
    recentAttempts: [...rows]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 10)
      .map((r) => ({
        id: r.id,
        itemSlug: r.itemSlug,
        kind: r.kind,
        topic: r.topic,
        overall: r.overall,
        accuracy: r.kind === "listen-repeat" ? parseJson<{ accuracy?: number }>(r.measured, {}).accuracy ?? null : null,
        createdAt: r.createdAt.toISOString(),
      })),
    recommendations: recommendations.slice(0, 6),
  };
}

export async function loadUserSpeakingAttempts(userId: string): Promise<SpeakingAttemptRow[]> {
  const rows = await db.toeflSpeakingBankAttempt.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });
  return rows as unknown as SpeakingAttemptRow[];
}
