/**
 * TOEFL Reading and Listening Practice Library — adaptive engine (PROMPT 49).
 *
 * Tracks performance across the seven mandated dimensions — Vocabulary,
 * Comprehension, Inference, Main ideas, Details, Speaker intention and
 * Academic listening — from the recorded attempts, and recommends exercises
 * that target the learner's weakest dimensions at their current level.
 */

import { db } from "@/lib/db";
import { LIBRARY_SKILLS, LIBRARY_SKILL_LABELS, type LibrarySkill } from "@/data/exams/toefl/library-skills";
import { TOEFL_READING_BANK, readingExerciseBySlug } from "@/data/exams/toefl/reading-bank";
import { TOEFL_LISTENING_BANK, listeningExerciseBySlug, TOEFL_LISTENING_TASK_LABELS } from "@/data/exams/toefl/listening-bank";
import { TOEFL_READING_TASK_LABELS } from "@/data/exams/toefl/reading-bank";

// ---------------------------------------------------------------------------
// Row shapes (from Prisma)
// ---------------------------------------------------------------------------

export type AttemptRow = {
  id: string;
  exerciseSlug: string;
  taskType: string;
  difficulty: number;
  mode: string;
  totalQuestions: number;
  correctCount: number;
  skillCounts: string; // JSON
  errorCounts: string; // JSON
  timeSpentSec: number;
  createdAt: Date;
};

// ---------------------------------------------------------------------------
// The report
// ---------------------------------------------------------------------------

export type SkillProfile = {
  skill: LibrarySkill;
  label: string;
  total: number;
  correct: number;
  accuracy: number;
};

export type TaskBreakdown = { section: "reading" | "listening"; taskType: string; label: string; total: number; correct: number; accuracy: number };

export type ExerciseRecommendation = {
  slug: string;
  title: string;
  section: "reading" | "listening";
  taskType: string;
  taskLabel: string;
  difficulty: number;
  reason: string;
};

export type ToeflLibraryReport = {
  attempts: number;
  itemsAnswered: number;
  itemsCorrect: number;
  accuracy: number;
  skills: SkillProfile[];
  byTask: TaskBreakdown[];
  errorCounts: Record<string, number>;
  timeSpentSec: number;
  recentAttempts: {
    id: string;
    exerciseSlug: string;
    section: "reading" | "listening";
    taskType: string;
    mode: string;
    correct: number;
    total: number;
    createdAt: string;
  }[];
  recommendations: ExerciseRecommendation[];
};

function emptySkillCounts(): Record<LibrarySkill, { total: number; correct: number }> {
  const out = {} as Record<LibrarySkill, { total: number; correct: number }>;
  for (const s of LIBRARY_SKILLS) out[s] = { total: 0, correct: 0 };
  return out;
}

export function buildToeflLibraryReport(reading: AttemptRow[], listening: AttemptRow[]): ToeflLibraryReport {
  const skills = emptySkillCounts();
  const taskMap = new Map<string, { section: "reading" | "listening"; taskType: string; label: string; total: number; correct: number }>();
  const errorCounts: Record<string, number> = {};
  let itemsAnswered = 0;
  let itemsCorrect = 0;
  let timeSpentSec = 0;

  const ingest = (rows: AttemptRow[], section: "reading" | "listening") => {
    for (const row of rows) {
      timeSpentSec += row.timeSpentSec;
      itemsAnswered += row.totalQuestions;
      itemsCorrect += row.correctCount;
      const label = section === "reading" ? (TOEFL_READING_TASK_LABELS[row.taskType as keyof typeof TOEFL_READING_TASK_LABELS] ?? row.taskType) : (TOEFL_LISTENING_TASK_LABELS[row.taskType as keyof typeof TOEFL_LISTENING_TASK_LABELS] ?? row.taskType);
      const tb = taskMap.get(`${section}:${row.taskType}`) ?? { section, taskType: row.taskType, label, total: 0, correct: 0 };
      tb.total += row.totalQuestions;
      tb.correct += row.correctCount;
      taskMap.set(`${section}:${row.taskType}`, tb);
      try {
        const sc = JSON.parse(row.skillCounts) as Record<string, { total: number; correct: number }>;
        for (const [k, v] of Object.entries(sc)) {
          const skill = k as LibrarySkill;
          if (skill in skills && v && typeof v.total === "number") {
            skills[skill].total += v.total;
            skills[skill].correct += v.correct;
          }
        }
      } catch { /* malformed JSON — skip */ }
      try {
        const ec = JSON.parse(row.errorCounts) as Record<string, number>;
        for (const [k, v] of Object.entries(ec)) {
          if (k === "correct") continue;
          errorCounts[k] = (errorCounts[k] ?? 0) + (v ?? 0);
        }
      } catch { /* skip */ }
    }
  };
  ingest(reading, "reading");
  ingest(listening, "listening");

  const recent = [...reading, ...listening]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 10)
    .map((r) => {
      const section: "reading" | "listening" = reading.includes(r) ? "reading" : "listening";
      return {
        id: r.id,
        exerciseSlug: r.exerciseSlug,
        section,
        taskType: r.taskType,
        mode: r.mode,
        correct: r.correctCount,
        total: r.totalQuestions,
        createdAt: r.createdAt.toISOString(),
      };
    });

  const report: ToeflLibraryReport = {
    attempts: reading.length + listening.length,
    itemsAnswered,
    itemsCorrect,
    accuracy: itemsAnswered ? itemsCorrect / itemsAnswered : 0,
    skills: LIBRARY_SKILLS.map((s) => ({
      skill: s,
      label: LIBRARY_SKILL_LABELS[s],
      total: skills[s].total,
      correct: skills[s].correct,
      accuracy: skills[s].total ? skills[s].correct / skills[s].total : 0,
    })),
    byTask: [...taskMap.values()].map((t) => ({ ...t, accuracy: t.total ? t.correct / t.total : 0 })).sort((a, b) => b.total - a.total),
    errorCounts,
    timeSpentSec,
    recentAttempts: recent,
    recommendations: [],
  };
  report.recommendations = recommendExercises(report, new Set([...reading, ...listening].map((r) => r.exerciseSlug)));
  return report;
}

// ---------------------------------------------------------------------------
// Weakness-driven exercise recommendations
// ---------------------------------------------------------------------------

/** Dimensions are ranked by accuracy; only those with ≥ 6 answered items count. */
export function weakestSkills(report: ToeflLibraryReport, limit = 3): SkillProfile[] {
  return report.skills
    .filter((s) => s.total >= 6)
    .sort((a, b) => a.accuracy - b.accuracy || a.total - b.total)
    .slice(0, limit);
}

export function learnerLevel(report: ToeflLibraryReport): 1 | 2 | 3 | 4 | 5 {
  if (report.attempts === 0) return 2;
  if (report.accuracy >= 0.8 && report.attempts >= 8) return 4;
  if (report.accuracy >= 0.8 && report.attempts >= 16) return 5;
  if (report.accuracy >= 0.6) return 3;
  if (report.accuracy >= 0.4) return 2;
  return 1;
}

export function recommendExercises(report: ToeflLibraryReport, attemptedSlugs: Set<string>): ExerciseRecommendation[] {
  const out: ExerciseRecommendation[] = [];
  if (report.attempts === 0) {
    // Cold start: one foundation exercise of each task family.
    const picks = [
      readingExerciseBySlug("toefl-rb-words-01"),
      readingExerciseBySlug("toefl-rb-daily-01"),
      readingExerciseBySlug("toefl-rb-acad-01"),
      listeningExerciseBySlug("toefl-lb-resp-01"),
      listeningExerciseBySlug("toefl-lb-conv-01"),
      listeningExerciseBySlug("toefl-lb-ann-01"),
      listeningExerciseBySlug("toefl-lb-talk-01"),
    ];
    for (const ex of picks) {
      if (!ex) continue;
      out.push({
        slug: ex.slug,
        title: ex.title,
        section: ex.slug.startsWith("toefl-rb") ? "reading" : "listening",
        taskType: ex.taskType,
        taskLabel: ex.slug.startsWith("toefl-rb") ? (TOEFL_READING_TASK_LABELS[ex.taskType as keyof typeof TOEFL_READING_TASK_LABELS] ?? ex.taskType) : (TOEFL_LISTENING_TASK_LABELS[ex.taskType as keyof typeof TOEFL_LISTENING_TASK_LABELS] ?? ex.taskType),
        difficulty: ex.difficulty,
        reason: "Start here: a foundation exercise from every task family.",
      });
    }
    return out;
  }

  const weak = weakestSkills(report, 3);
  const level = learnerLevel(report);
  const pool = [
    ...TOEFL_READING_BANK.map((ex) => ({ ex, section: "reading" as const, label: TOEFL_READING_TASK_LABELS[ex.taskType] })),
    ...TOEFL_LISTENING_BANK.map((ex) => ({ ex, section: "listening" as const, label: TOEFL_LISTENING_TASK_LABELS[ex.taskType] })),
  ];

  for (const w of weak) {
    // Exercises whose questions test this dimension, at or one below the
    // learner's level, not already attempted.
    const matching = pool.filter(({ ex, section }) => {
      if (attemptedSlugs.has(ex.slug)) return false;
      if (ex.difficulty > level + 1) return false;
      if (section === "listening" && ex.targetSkill === w.skill) return true;
      return ex.questions.some((q) => q.meta.skills.includes(w.skill));
    });
    matching.sort((a, b) => Math.abs(a.ex.difficulty - level) - Math.abs(b.ex.difficulty - level));
    const chosen = new Set<string>();
    for (const m of matching) {
      if (chosen.size >= 3) break;
      if (chosen.has(m.ex.taskType)) continue;
      chosen.add(m.ex.taskType);
      out.push({
        slug: m.ex.slug,
        title: m.ex.title,
        section: m.section,
        taskType: m.ex.taskType,
        taskLabel: m.label,
        difficulty: m.ex.difficulty,
        reason: `${w.label} accuracy is ${Math.round(w.accuracy * 100)}% across ${w.total} items — this exercise targets it directly.`,
      });
    }
  }

  if (out.length === 0) {
    // No weakness with enough data, or everything attempted: level-up pick.
    const next = pool
      .filter(({ ex }) => !attemptedSlugs.has(ex.slug) && ex.difficulty === Math.min(5, level + 1))
      .slice(0, 3);
    for (const m of next) {
      out.push({
        slug: m.ex.slug,
        title: m.ex.title,
        section: m.section,
        taskType: m.ex.taskType,
        taskLabel: m.label,
        difficulty: m.ex.difficulty,
        reason: `No dominant weakness yet at ${Math.round(report.accuracy * 100)}% — move up a tier.`,
      });
    }
  }

  const rank = { high: 0, medium: 1, low: 2 } as const;
  return out.slice(0, 9);
}

// ---------------------------------------------------------------------------
// Data access for the API route
// ---------------------------------------------------------------------------

export async function loadUserToeflLibraryData(userId: string): Promise<{ reading: AttemptRow[]; listening: AttemptRow[] }> {
  const [readingRaw, listeningRaw] = await Promise.all([
    db.toeflReadingBankAttempt.findMany({ where: { userId }, orderBy: { createdAt: "asc" } }),
    db.toeflListeningBankAttempt.findMany({ where: { userId }, orderBy: { createdAt: "asc" } }),
  ]);
  return { reading: readingRaw as unknown as AttemptRow[], listening: listeningRaw as unknown as AttemptRow[] };
}
