/**
 * IELTS Writing Masterclass — the performance engine (PROMPT 46, Parts
 * F–G follow-through).
 *
 * Aggregates stored attempts into one report: attempts and words written,
 * per-criterion band averages, per channel / task type / family, word-count
 * discipline (under-length rate), time discipline (against the official
 * 20/40 clocks), revision history (version chains and whether each
 * revision improved), and the lesson recommendations derived from the
 * learner's actual weaknesses — each resolving to a real authored
 * masterclass lesson under its real title (the PROMPT 44 lesson: no
 * raw-slug fallbacks, contract-tested).
 */

import type { WritingCriterionKey } from "@/data/exams/ielts/writing-bank/types";
import type { WritingAttemptDto } from "./service";

// ---------------------------------------------------------------------------
// Row shapes (from Prisma)
// ---------------------------------------------------------------------------

export type PerformanceAttemptRow = {
  id: string;
  taskSlug: string;
  channel: string;
  taskType: string;
  family: string;
  register: string | null;
  mode: string;
  timed: boolean;
  version: number;
  wordCount: number;
  timeSpentSec: number;
  overall: number;
  criteria: string;
  aiAvailable: boolean;
  createdAt: Date;
};

// ---------------------------------------------------------------------------
// The report
// ---------------------------------------------------------------------------

export type WritingLessonRecommendation = {
  lessonSlug: string;
  lessonTitle: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

export type WritingPerformanceReport = {
  attempts: number;
  wordsWritten: number;
  overallAvg: number;
  criterionAvg: { key: WritingCriterionKey; label: string; avg: number | null; attempts: number }[];
  byChannel: { channel: string; attempts: number; avg: number }[];
  byTaskType: { taskType: string; attempts: number; avg: number }[];
  byFamily: { family: string; label: string; attempts: number; avg: number }[];
  underLengthRate: number;
  underLengthAttempts: number;
  /** Attempts that used less than 60% of the official clock while timed. */
  rushedRate: number;
  /** Attempts that ran over the official clock. */
  overTimeRate: number;
  revisionChains: {
    taskSlug: string;
    versions: { version: number; overall: number; createdAt: string }[];
    improved: boolean;
    delta: number;
  }[];
  recentAttempts: WritingAttemptDto[];
  recommendations: WritingLessonRecommendation[];
};

// ---------------------------------------------------------------------------
// Masterclass lesson map — mirrors the authored m4a/m4g courses. A contract
// test walks the authored modules and asserts every slug below resolves to
// a real lesson under its real title (no raw-slug fallback).
// ---------------------------------------------------------------------------

export const WRITING_LESSONS: Record<string, string> = {
  // Academic foundations (shared craft, authored for the Academic track)
  "ielts-awriting-instructions": "Understanding task instructions",
  "ielts-awriting-requirements": "Analysing question requirements",
  "ielts-awriting-planning": "Planning",
  "ielts-awriting-paragraphs": "Paragraph organisation",
  "ielts-awriting-grammar": "Grammar accuracy",
  "ielts-awriting-vocabulary": "Vocabulary",
  "ielts-awriting-cohesion": "Cohesion",
  "ielts-awriting-coherence": "Coherence",
  "ielts-awriting-punctuation": "Punctuation",
  "ielts-awriting-sentence-variety": "Sentence variety",
  "ielts-awriting-time": "Time management",
  // Academic Task 1 families
  "ielts-awriting-t1-bar": "Task 1 — Bar charts",
  "ielts-awriting-t1-line": "Task 1 — Line graphs",
  "ielts-awriting-t1-pie": "Task 1 — Pie charts",
  "ielts-awriting-t1-table": "Task 1 — Tables",
  "ielts-awriting-t1-mixed": "Task 1 — Mixed charts",
  "ielts-awriting-t1-process": "Task 1 — Process diagrams",
  "ielts-awriting-t1-map": "Task 1 — Maps",
  // Academic Task 2 families
  "ielts-awriting-t2-opinion": "Task 2 — Opinion essays",
  "ielts-awriting-t2-discussion": "Task 2 — Discussion essays",
  "ielts-awriting-t2-advantages": "Task 2 — Advantages and disadvantages",
  "ielts-awriting-t2-problem-solution": "Task 2 — Problem and solution",
  "ielts-awriting-t2-cause-effect": "Task 2 — Cause and effect",
  "ielts-awriting-t2-two-part": "Task 2 — Two-part questions",
  "ielts-awriting-t2-direct": "Task 2 — Direct questions",
  // Academic assessment
  "ielts-awriting-criteria": "How examiners score your writing",
  "ielts-awriting-models": "Studying model answers at different levels",
  // GT foundations
  "ielts-gwriting-instructions": "Understanding task instructions",
  "ielts-gwriting-requirements": "Analysing question requirements",
  "ielts-gwriting-planning": "Planning",
  "ielts-gwriting-paragraphs": "Paragraph organisation",
  "ielts-gwriting-grammar": "Grammar accuracy",
  "ielts-gwriting-vocabulary": "Vocabulary",
  "ielts-gwriting-cohesion": "Cohesion",
  "ielts-gwriting-coherence": "Coherence",
  "ielts-gwriting-punctuation": "Punctuation",
  "ielts-gwriting-sentence-variety": "Sentence variety",
  "ielts-gwriting-time": "Time management",
  // GT letters
  "ielts-gwriting-formal": "Formal letters",
  "ielts-gwriting-semi-formal": "Semi-formal letters",
  "ielts-gwriting-informal": "Informal letters",
  "ielts-gwriting-complaint": "Writing complaints",
  "ielts-gwriting-request": "Making requests",
  "ielts-gwriting-invitation": "Invitations",
  "ielts-gwriting-apology": "Apologies",
  "ielts-gwriting-explanation": "Explanations",
  "ielts-gwriting-suggestion": "Suggestions",
  "ielts-gwriting-tone": "Tone",
  "ielts-gwriting-letter-organisation": "Letter organisation",
  // GT Task 2 + assessment
  "ielts-gwriting-t2-opinion": "GT Task 2 — Opinion essays",
  "ielts-gwriting-t2-discussion": "GT Task 2 — Discussion essays",
  "ielts-gwriting-t2-advantages": "GT Task 2 — Advantages and disadvantages",
  "ielts-gwriting-t2-problem-solution": "GT Task 2 — Problem and solution",
  "ielts-gwriting-t2-cause-effect": "GT Task 2 — Cause and effect",
  "ielts-gwriting-t2-two-part": "GT Task 2 — Two-part questions",
  "ielts-gwriting-t2-direct": "GT Task 2 — Direct questions",
  "ielts-gwriting-criteria": "How examiners score your letter and essay",
};

/** Family weakness → the lesson that teaches that family, per channel. */
const FAMILY_LESSON: Record<string, { academic: string; gt: string }> = {
  bar: { academic: "ielts-awriting-t1-bar", gt: "ielts-awriting-t1-bar" },
  line: { academic: "ielts-awriting-t1-line", gt: "ielts-awriting-t1-line" },
  pie: { academic: "ielts-awriting-t1-pie", gt: "ielts-awriting-t1-pie" },
  table: { academic: "ielts-awriting-t1-table", gt: "ielts-awriting-t1-table" },
  mixed: { academic: "ielts-awriting-t1-mixed", gt: "ielts-awriting-t1-mixed" },
  process: { academic: "ielts-awriting-t1-process", gt: "ielts-awriting-t1-process" },
  map: { academic: "ielts-awriting-t1-map", gt: "ielts-awriting-t1-map" },
  opinion: { academic: "ielts-awriting-t2-opinion", gt: "ielts-gwriting-t2-opinion" },
  discussion: { academic: "ielts-awriting-t2-discussion", gt: "ielts-gwriting-t2-discussion" },
  "advantages-disadvantages": { academic: "ielts-awriting-t2-advantages", gt: "ielts-gwriting-t2-advantages" },
  "problem-solution": { academic: "ielts-awriting-t2-problem-solution", gt: "ielts-gwriting-t2-problem-solution" },
  "cause-effect": { academic: "ielts-awriting-t2-cause-effect", gt: "ielts-gwriting-t2-cause-effect" },
  "two-part": { academic: "ielts-awriting-t2-two-part", gt: "ielts-gwriting-t2-two-part" },
  "direct-questions": { academic: "ielts-awriting-t2-direct", gt: "ielts-gwriting-t2-direct" },
  complaint: { academic: "ielts-gwriting-complaint", gt: "ielts-gwriting-complaint" },
  request: { academic: "ielts-gwriting-request", gt: "ielts-gwriting-request" },
  invitation: { academic: "ielts-gwriting-invitation", gt: "ielts-gwriting-invitation" },
  apology: { academic: "ielts-gwriting-apology", gt: "ielts-gwriting-apology" },
  explanation: { academic: "ielts-gwriting-explanation", gt: "ielts-gwriting-explanation" },
  suggestion: { academic: "ielts-gwriting-suggestion", gt: "ielts-gwriting-suggestion" },
};

const FAMILY_LABELS: Record<string, string> = {
  bar: "Bar chart", line: "Line graph", pie: "Pie chart", table: "Table", mixed: "Mixed charts",
  process: "Process diagram", map: "Map",
  opinion: "Opinion essay", discussion: "Discussion essay", "advantages-disadvantages": "Advantages and disadvantages",
  "problem-solution": "Problem and solution", "cause-effect": "Cause and effect", "two-part": "Two-part question",
  "direct-questions": "Direct questions",
  complaint: "Complaint letter", request: "Request letter", invitation: "Invitation letter",
  apology: "Apology letter", explanation: "Explanation letter", suggestion: "Suggestion letter",
};

const CRITERION_LABELS: Record<WritingCriterionKey, string> = {
  task: "Task Achievement / Response",
  cc: "Coherence and Cohesion",
  lr: "Lexical Resource",
  gra: "Grammatical Range and Accuracy",
};

const FLOOR_BY_TASK_TYPE: Record<string, number> = { "task-1": 150, "task-2": 250 };
const CLOCK_BY_TASK_TYPE: Record<string, number> = { "task-1": 1200, "task-2": 2400 };

type CriterionScores = Partial<Record<WritingCriterionKey, number>>;

function parseCriteria(raw: string): CriterionScores {
  try {
    const parsed = JSON.parse(raw) as Record<string, { score?: number }>;
    const out: CriterionScores = {};
    for (const key of ["task", "cc", "lr", "gra"] as WritingCriterionKey[]) {
      const v = parsed[key]?.score;
      if (typeof v === "number" && v > 0) out[key] = v;
    }
    return out;
  } catch {
    return {};
  }
}

// ---------------------------------------------------------------------------
// Aggregation
// ---------------------------------------------------------------------------

export function buildWritingPerformanceReport(rows: PerformanceAttemptRow[]): WritingPerformanceReport {
  const criterionTotals: Record<WritingCriterionKey, { sum: number; n: number }> = { task: { sum: 0, n: 0 }, cc: { sum: 0, n: 0 }, lr: { sum: 0, n: 0 }, gra: { sum: 0, n: 0 } };
  const channelMap = new Map<string, { attempts: number; sum: number }>();
  const taskTypeMap = new Map<string, { attempts: number; sum: number }>();
  const familyMap = new Map<string, { attempts: number; sum: number }>();
  const chainMap = new Map<string, PerformanceAttemptRow[]>();

  let wordsWritten = 0;
  let overallSum = 0;
  let underLength = 0;
  let rushed = 0;
  let overTime = 0;
  let timedCount = 0;

  for (const row of rows) {
    wordsWritten += row.wordCount;
    overallSum += row.overall;

    const scores = parseCriteria(row.criteria);
    for (const key of Object.keys(criterionTotals) as WritingCriterionKey[]) {
      const s = scores[key];
      if (s !== undefined) {
        criterionTotals[key].sum += s;
        criterionTotals[key].n += 1;
      }
    }

    const c = channelMap.get(row.channel) ?? { attempts: 0, sum: 0 };
    channelMap.set(row.channel, { attempts: c.attempts + 1, sum: c.sum + row.overall });

    const t = taskTypeMap.get(row.taskType) ?? { attempts: 0, sum: 0 };
    taskTypeMap.set(row.taskType, { attempts: t.attempts + 1, sum: t.sum + row.overall });

    const f = familyMap.get(row.family) ?? { attempts: 0, sum: 0 };
    familyMap.set(row.family, { attempts: f.attempts + 1, sum: f.sum + row.overall });

    if (row.wordCount < (FLOOR_BY_TASK_TYPE[row.taskType] ?? 150)) underLength += 1;
    if (row.timed) {
      timedCount += 1;
      const clock = CLOCK_BY_TASK_TYPE[row.taskType] ?? 1200;
      if (row.timeSpentSec < clock * 0.6) rushed += 1;
      if (row.timeSpentSec > clock) overTime += 1;
    }

    const chain = chainMap.get(row.taskSlug) ?? [];
    chain.push(row);
    chainMap.set(row.taskSlug, chain);
  }

  const revisionChains = [...chainMap.entries()]
    .filter(([, chain]) => chain.length >= 2)
    .map(([taskSlug, chain]) => {
      const sorted = [...chain].sort((a, b) => a.version - b.version);
      const first = sorted[0];
      const last = sorted[sorted.length - 1];
      return {
        taskSlug,
        versions: sorted.map((r) => ({ version: r.version, overall: r.overall, createdAt: r.createdAt.toISOString() })),
        improved: last.overall > first.overall,
        delta: Math.round((last.overall - first.overall) * 10) / 10,
      };
    })
    .sort((a, b) => b.versions.length - a.versions.length);

  const report: WritingPerformanceReport = {
    attempts: rows.length,
    wordsWritten,
    overallAvg: rows.length ? Math.round((overallSum / rows.length) * 10) / 10 : 0,
    criterionAvg: (Object.keys(criterionTotals) as WritingCriterionKey[]).map((key) => ({
      key,
      label: CRITERION_LABELS[key],
      avg: criterionTotals[key].n ? Math.round((criterionTotals[key].sum / criterionTotals[key].n) * 10) / 10 : null,
      attempts: criterionTotals[key].n,
    })),
    byChannel: [...channelMap.entries()].map(([channel, v]) => ({ channel, attempts: v.attempts, avg: Math.round((v.sum / v.attempts) * 10) / 10 })).sort((a, b) => b.attempts - a.attempts),
    byTaskType: [...taskTypeMap.entries()].map(([taskType, v]) => ({ taskType, attempts: v.attempts, avg: Math.round((v.sum / v.attempts) * 10) / 10 })).sort((a, b) => b.attempts - a.attempts),
    byFamily: [...familyMap.entries()]
      .map(([family, v]) => ({ family, label: FAMILY_LABELS[family] ?? family, attempts: v.attempts, avg: Math.round((v.sum / v.attempts) * 10) / 10 }))
      .sort((a, b) => b.attempts - a.attempts),
    underLengthRate: rows.length ? Math.round((underLength / rows.length) * 100) / 100 : 0,
    underLengthAttempts: underLength,
    rushedRate: timedCount ? Math.round((rushed / timedCount) * 100) / 100 : 0,
    overTimeRate: timedCount ? Math.round((overTime / timedCount) * 100) / 100 : 0,
    revisionChains,
    recentAttempts: rows
      .slice(0, 8)
      .map((r) => ({
        id: r.id,
        version: r.version,
        wordCount: r.wordCount,
        overall: r.overall,
        criteriaScores: parseCriteria(r.criteria),
        timeSpentSec: r.timeSpentSec,
        mode: r.mode,
        timed: r.timed,
        aiAvailable: r.aiAvailable,
        createdAt: r.createdAt.toISOString(),
      })),
    recommendations: [],
  };

  report.recommendations = recommendWritingLessons(report);
  return report;
}

// ---------------------------------------------------------------------------
// Weakness-driven lesson recommendations
// ---------------------------------------------------------------------------

export function recommendWritingLessons(report: WritingPerformanceReport): WritingLessonRecommendation[] {
  const out: WritingLessonRecommendation[] = [];
  const push = (slug: string, reason: string, severity: WritingLessonRecommendation["severity"]) => {
    if (out.some((r) => r.lessonSlug === slug)) return;
    out.push({ lessonSlug: slug, lessonTitle: WRITING_LESSONS[slug] ?? slug, reason, severity });
  };
  if (report.attempts === 0) return out;

  // 1. Under-length is mechanical and decisive — the highest severity.
  if (report.underLengthRate >= 0.25 || (report.underLengthAttempts >= 1 && report.attempts <= 3)) {
    push(
      "ielts-awriting-time",
      `${report.underLengthAttempts} of ${report.attempts} attempts sat under the word floor — the time-management lesson's word-count protocol and under-length mathematics attack exactly this.`,
      "high",
    );
  }

  // 2. Weakest criterion drives the relevant craft lesson.
  const scored = report.criterionAvg.filter((c) => c.avg !== null);
  if (scored.length > 0) {
    const weakest = [...scored].sort((a, b) => (a.avg ?? 9) - (b.avg ?? 9))[0];
    if ((weakest.avg ?? 9) <= 5.5) {
      const lessons: Record<WritingCriterionKey, { academic: string; gt: string }> = {
        task: { academic: "ielts-awriting-requirements", gt: "ielts-gwriting-requirements" },
        cc: { academic: "ielts-awriting-cohesion", gt: "ielts-gwriting-cohesion" },
        lr: { academic: "ielts-awriting-vocabulary", gt: "ielts-gwriting-vocabulary" },
        gra: { academic: "ielts-awriting-grammar", gt: "ielts-gwriting-grammar" },
      };
      const dominantChannel = report.byChannel[0]?.channel ?? "academic";
      const lesson = dominantChannel === "gt" ? lessons[weakest.key].gt : lessons[weakest.key].academic;
      push(
        lesson,
        `${weakest.label} averages ${weakest.avg?.toFixed(1)} across ${weakest.attempts} attempts — the weakest criterion, and the craft lesson teaches exactly its mechanics.`,
        "high",
      );
    } else if ((weakest.avg ?? 9) <= 6.5) {
      const lessons: Record<WritingCriterionKey, { academic: string; gt: string }> = {
        task: { academic: "ielts-awriting-planning", gt: "ielts-gwriting-planning" },
        cc: { academic: "ielts-awriting-coherence", gt: "ielts-gwriting-coherence" },
        lr: { academic: "ielts-awriting-vocabulary", gt: "ielts-gwriting-vocabulary" },
        gra: { academic: "ielts-awriting-sentence-variety", gt: "ielts-gwriting-sentence-variety" },
      };
      const dominantChannel = report.byChannel[0]?.channel ?? "academic";
      const lesson = dominantChannel === "gt" ? lessons[weakest.key].gt : lessons[weakest.key].academic;
      push(
        lesson,
        `${weakest.label} is the lowest criterion at ${weakest.avg?.toFixed(1)} — one focused revision of that craft usually moves it half a band.`,
        "medium",
      );
    }
  }

  // 3. Weak families get their family lesson (channel-aware).
  for (const f of report.byFamily) {
    if (f.attempts >= 2 && f.avg < 6.0) {
      const lesson = FAMILY_LESSON[f.family]?.[f.avg === 0 ? "academic" : (report.byChannel[0]?.channel ?? "academic")];
      const channel = report.byChannel[0]?.channel ?? "academic";
      const chosen = FAMILY_LESSON[f.family]
        ? channel === "gt"
          ? FAMILY_LESSON[f.family].gt
          : FAMILY_LESSON[f.family].academic
        : undefined;
      void lesson;
      if (chosen) {
        push(chosen, `${f.label} attempts average ${f.avg.toFixed(1)} across ${f.attempts} submissions — the family lesson rebuilds the method from the visual or question up.`, "medium");
      }
    }
  }

  // 4. Rushed timed attempts → the time lesson.
  if (report.rushedRate >= 0.5 && report.attempts >= 2) {
    const channel = report.byChannel[0]?.channel ?? "academic";
    push(
      channel === "gt" ? "ielts-gwriting-time" : "ielts-awriting-time",
      `${Math.round(report.rushedRate * 100)}% of timed attempts used under 60% of the official clock — the budget lesson's checking protocol reclaims those minutes.`,
      "medium",
    );
  }

  // 5. Revision improvement — encourage the study loop.
  if (report.revisionChains.length > 0) {
    const improved = report.revisionChains.filter((c) => c.improved).length;
    const stagnated = report.revisionChains.length - improved;
    if (stagnated > improved) {
      push("ielts-awriting-models", `${stagnated} revision chain(s) did not improve on the first attempt — the model-study lesson's annotate-then-rewrite loop targets exactly this.`, "medium");
    }
  }

  // 6. Strong overall → the assessment lessons and harder material.
  if (report.attempts >= 3 && report.overallAvg >= 7.0) {
    push(
      report.byChannel[0]?.channel === "gt" ? "ielts-gwriting-criteria" : "ielts-awriting-criteria",
      `Averaging ${report.overallAvg.toFixed(1)} across ${report.attempts} attempts — the criteria lesson shows how to push 7 to 8 on each criterion (educational estimates, honestly framed).`,
      "low",
    );
  }

  const severityRank = { high: 0, medium: 1, low: 2 } as const;
  return out.sort((a, b) => severityRank[a.severity] - severityRank[b.severity]).slice(0, 8);
}
