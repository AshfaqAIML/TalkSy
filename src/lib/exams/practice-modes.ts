/**
 * PROMPT 51 practice-mode builders: topic-specific, weakness-based,
 * diagnostic and adaptive practice.
 *
 * All four reuse the published question pool of an exam+variant (the same
 * original, machine-checked material as the mock library) and persist as
 * ordinary assembled MockTest rows, so attempts, grading, results and history
 * treat them exactly like any other set.
 *
 * Honesty rules enforced here:
 *   - The adaptive builder is TalkSy's own accuracy heuristic. It never
 *     claims to reproduce ETS's proprietary adaptive algorithm
 *     (INTEGRITY_ADAPTIVE_NOTE travels with every adaptive set).
 *   - Diagnostic profiles are practice estimates, never official scores.
 */

import { db } from "@/lib/db";
import { toDto } from "./specs";
import { rawToSectionScore } from "./scoring";
import { INTEGRITY_ADAPTIVE_NOTE, INTEGRITY_CONTENT_NOTE } from "./integrity";
import type { ExamKey, ScoringModel, SectionKey, SkillStat, TaskPerformance } from "./types";
import {
  budgetTimings,
  loadPool,
  persistAssembledSet,
  pickVariety,
  specTimings,
  type PoolQuestion,
} from "./practice-sets";

// ---------------------------------------------------------------------------
// Topic labels — humanised names for the skill tags carried by pool items
// ---------------------------------------------------------------------------

/** Curated labels for skill tags used across the IELTS/TOEFL pools. */
const TOPIC_LABELS: Record<string, string> = {
  "academic-vocab": "Academic vocabulary",
  "academic-vocabulary": "Academic vocabulary",
  vocabulary: "Everyday vocabulary",
  detail: "Detail spotting",
  paraphrase: "Paraphrase recognition",
  numbers: "Numbers and figures",
  coherence: "Coherence and cohesion",
  spelling: "Spelling",
  grammar: "Grammar",
  fluency: "Fluency",
  "note-taking": "Note-taking",
  "distractor-awareness": "Distractor awareness",
  distractors: "Distractor awareness",
  conditions: "Condition tracking",
  "writer-claims": "Writer claims",
  tone: "Tone and register",
  corrections: "Corrections and changes",
  lexical: "Lexical range",
  "not-given": "Not Given judgement",
  "task-response": "Task response",
  opinion: "Opinion and position",
  attribution: "Attribution",
  "task-achievement": "Task achievement",
  "main-idea": "Main ideas",
  mainideas: "Main ideas",
  hedging: "Hedging language",
  overview: "Overview writing",
  "direction-language": "Direction language",
  dates: "Dates and times",
  times: "Dates and times",
  "teen-ty": "Teen vs ty numbers",
  inference: "Inference",
  pragmatics: "Pragmatics and function",
  sentence: "Sentence building",
  context: "Context clues",
  purpose: "Speaker purpose",
  delivery: "Delivery",
  organization: "Organisation",
  pronunciation: "Pronunciation",
  attitude: "Speaker attitude",
  argument: "Argument development",
  "word-limit": "Word-limit discipline",
};

export function topicLabel(skill: string): string {
  return TOPIC_LABELS[skill] ?? skill.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---------------------------------------------------------------------------
// Topic-specific practice
// ---------------------------------------------------------------------------

export type TopicCatalogEntry = {
  skill: string;
  label: string;
  count: number;
  sections: SectionKey[];
};

/** Topics with at least three published items in this exam+variant's pool. */
export async function topicCatalog(examKey: ExamKey, variant: string): Promise<TopicCatalogEntry[]> {
  const pool = await loadPool(examKey, variant);
  const stats = new Map<string, { count: number; sections: Set<string> }>();
  for (const item of pool) {
    let skills: string[] = [];
    try {
      skills = JSON.parse(item.question.skills) as string[];
    } catch {
      skills = [];
    }
    for (const skill of skills) {
      const entry = stats.get(skill) ?? { count: 0, sections: new Set<string>() };
      entry.count += 1;
      entry.sections.add(item.sectionKey);
      stats.set(skill, entry);
    }
  }
  return [...stats.entries()]
    .filter(([, value]) => value.count >= 3)
    .map(([skill, value]) => ({
      skill,
      label: topicLabel(skill),
      count: value.count,
      sections: [...value.sections].sort() as SectionKey[],
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export type PracticeSetResult = { mockId: string; itemCount: number };

/** Topic-specific practice: every published item tagged with one topic. */
export async function buildTopicPractice(input: {
  examKey: ExamKey;
  variant: string;
  topic: string;
  count?: number;
  timed?: boolean;
}): Promise<PracticeSetResult | null> {
  const pool = (await loadPool(input.examKey, input.variant)).filter((item) => {
    try {
      return (JSON.parse(item.question.skills) as string[]).includes(input.topic);
    } catch {
      return false;
    }
  });
  if (pool.length === 0) return null;
  const count = input.count ?? pool.length;
  const items = pickVariety(pool, Math.min(Math.max(count, 4), 40));
  const counts: Record<string, number> = {};
  for (const item of items) counts[item.sectionKey] = (counts[item.sectionKey] ?? 0) + 1;
  // Clocks only on request: ~90 tracked seconds per item, split by section.
  const timings = input.timed
    ? budgetTimings(Math.max(5, Math.round((items.length * 9) / 10)), counts)
    : await specTimings(input.examKey, input.variant);
  const mockId = await persistAssembledSet({
    examKey: input.examKey,
    variant: input.variant,
    kind: "topic",
    items,
    timingSecBySection: timings,
    summary: `Topic-specific practice on ${topicLabel(input.topic)} (${items.length} items).`,
  });
  return { mockId, itemCount: items.length };
}

// ---------------------------------------------------------------------------
// Weakness profile (shared by weakness practice and the launcher preview)
// ---------------------------------------------------------------------------

export type WeaknessProfile = {
  /** Answered objective items the profile is built from. */
  evidenceItems: number;
  /** True when there is enough history for targeted assembly. */
  hasEnoughEvidence: boolean;
  skills: SkillStat[];
  weakestSkills: SkillStat[];
  weakestTasks: Array<{ type: string; label: string; total: number; correct: number; accuracy: number }>;
  weakestSections: Array<{ section: SectionKey; total: number; correct: number; accuracy: number }>;
  /** Task-type labels resolved from the active spec's catalogue. */
};

type ResponseRow = {
  autoScore: number | null;
  question: {
    id: string;
    type: string;
    points: number;
    skills: string;
    section: { key: string; mockTest: { specId: string } };
  };
};

/** Minimum answered items before a skill/task counts as evidence. */
const EVIDENCE_MIN = 3;
/** Minimum total answered items before weakness assembly is offered. */
const EVIDENCE_TOTAL_MIN = 12;

export async function weaknessProfile(
  userId: string,
  examKey: ExamKey,
  variant: string,
): Promise<WeaknessProfile> {
  const attempts = await db.mockTestAttempt.findMany({
    where: {
      userId,
      status: { in: ["submitted", "scored"] },
      mockTest: { examKey, variant },
    },
    orderBy: { submittedAt: "desc" },
    take: 40,
    select: { id: true },
  });
  const attemptIds = new Set(attempts.map((a) => a.id));

  const responses = (await db.mockTestResponse.findMany({
    where: { attemptId: { in: [...attemptIds] } },
    include: {
      question: {
        select: {
          id: true,
          type: true,
          points: true,
          skills: true,
          section: { select: { key: true, mockTest: { select: { specId: true } } } },
        },
      },
    },
  })) as unknown as ResponseRow[];

  // Task-type labels from the active spec catalogue (official-format names).
  const specRow = await db.testSpecification.findFirst({
    where: { examKey, variant, status: "active" },
    orderBy: { version: "desc" },
  });
  const taskLabels = new Map<string, string>();
  if (specRow) {
    for (const task of toDto(specRow).taskTypes) taskLabels.set(task.type, task.label);
  }
  const typeLabel = (type: string) => taskLabels.get(type) ?? type.replace(/_/g, " ").toLowerCase();

  const skillStats = new Map<string, { total: number; correct: number }>();
  const taskStats = new Map<string, { total: number; correct: number }>();
  const sectionStats = new Map<string, { total: number; correct: number }>();

  for (const response of responses) {
    const points = response.question.points || 1;
    const correct = response.autoScore != null && response.autoScore >= points;
    for (const skill of safeSkills(response.question.skills)) {
      const entry = skillStats.get(skill) ?? { total: 0, correct: 0 };
      entry.total += 1;
      if (correct) entry.correct += 1;
      skillStats.set(skill, entry);
    }
    const task = taskStats.get(response.question.type) ?? { total: 0, correct: 0 };
    task.total += 1;
    if (correct) task.correct += 1;
    taskStats.set(response.question.type, task);
    const section = sectionStats.get(response.question.section.key) ?? { total: 0, correct: 0 };
    section.total += 1;
    if (correct) section.correct += 1;
    sectionStats.set(response.question.section.key, section);
  }

  const evidenceItems = [...taskStats.values()].reduce((sum, t) => sum + t.total, 0);
  const skills: SkillStat[] = [...skillStats.entries()]
    .map(([skill, value]) => ({
      skill,
      label: topicLabel(skill),
      total: value.total,
      correct: value.correct,
      accuracy: value.total ? value.correct / value.total : 0,
    }))
    .sort((a, b) => b.total - a.total);

  const weakestSkills = skills
    .filter((s) => s.total >= EVIDENCE_MIN)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 4);

  const weakestTasks = [...taskStats.entries()]
    .filter(([, value]) => value.total >= EVIDENCE_MIN)
    .map(([type, value]) => ({
      type,
      label: typeLabel(type),
      total: value.total,
      correct: value.correct,
      accuracy: value.total ? value.correct / value.total : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 3);

  const weakestSections = [...sectionStats.entries()]
    .filter(([, value]) => value.total >= EVIDENCE_MIN)
    .map(([section, value]) => ({
      section: section as SectionKey,
      total: value.total,
      correct: value.correct,
      accuracy: value.total ? value.correct / value.total : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 2);

  return {
    evidenceItems,
    hasEnoughEvidence: evidenceItems >= EVIDENCE_TOTAL_MIN && weakestSkills.length > 0,
    skills,
    weakestSkills,
    weakestTasks,
    weakestSections,
  };
}

function safeSkills(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed.filter((s) => typeof s === "string") as string[]) : [];
  } catch {
    return [];
  }
}

/**
 * Weakness-based practice: assemble items that test the learner's weakest
 * skill tags first, then their weakest task types, then weakest sections.
 * Untimed by design — this is remediation, not simulation.
 */
export async function buildWeaknessPractice(input: {
  userId: string;
  examKey: ExamKey;
  variant: string;
  count?: number;
}): Promise<PracticeSetResult | { empty: true; reason: string; evidenceItems: number }> {
  const profile = await weaknessProfile(input.userId, input.examKey, input.variant);
  if (!profile.hasEnoughEvidence) {
    return {
      empty: true,
      reason:
        "Not enough graded history yet — sit a diagnostic assessment or a section test first, then weakness-based practice assembles itself from your results.",
      evidenceItems: profile.evidenceItems,
    };
  }
  const target = Math.min(Math.max(input.count ?? 16, 6), 30);
  const pool = await loadPool(input.examKey, input.variant);

  const weakSkills = new Set(profile.weakestSkills.map((s) => s.skill));
  const weakTasks = new Set(profile.weakestTasks.map((t) => t.type));
  const weakSections = new Set(profile.weakestSections.map((s) => s.section));

  const bySkill = pool.filter((item) => safeSkills(item.question.skills).some((s) => weakSkills.has(s)));
  const byTask = pool.filter(
    (item) => weakTasks.has(item.question.type) && !bySkill.includes(item),
  );
  const bySection = pool.filter(
    (item) => weakSections.has(item.sectionKey as SectionKey) && !bySkill.includes(item) && !byTask.includes(item),
  );

  const items = [
    ...pickVariety(bySkill, Math.min(bySkill.length, Math.max(4, Math.ceil(target * 0.6)))),
    ...pickVariety(byTask, Math.max(0, target - 4)),
    ...pickVariety(bySection, target),
  ].slice(0, target);
  if (items.length === 0) {
    return {
      empty: true,
      reason: "Your weakest areas have no published items in this exam's pool yet.",
      evidenceItems: profile.evidenceItems,
    };
  }

  const counts: Record<string, number> = {};
  for (const item of items) counts[item.sectionKey] = (counts[item.sectionKey] ?? 0) + 1;
  const timings = await specTimings(input.examKey, input.variant);
  const mockId = await persistAssembledSet({
    examKey: input.examKey,
    variant: input.variant,
    kind: "weakness",
    items,
    timingSecBySection: timings,
    summary: `Weakness-based practice targeting ${profile.weakestSkills
      .slice(0, 3)
      .map((s) => s.label.toLowerCase())
      .join(", ")} (${items.length} items).`,
  });
  return { mockId, itemCount: items.length };
}

// ---------------------------------------------------------------------------
// Diagnostic assessment
// ---------------------------------------------------------------------------

/**
 * Diagnostic assessment: a balanced, timed cross-section sample. Up to eight
 * items per section, round-robined across that section's task types and
 * spread over the difficulty range, so every skill family is probed. Section
 * clocks are the official spec clocks scaled to the shortened length
 * (minimum two minutes) — a diagnostic is always sat under timing.
 */
export async function buildDiagnosticAssessment(input: {
  examKey: ExamKey;
  variant: string;
  perSection?: number;
}): Promise<PracticeSetResult | null> {
  const pool = await loadPool(input.examKey, input.variant);
  if (pool.length === 0) return null;
  const perSection = Math.min(Math.max(input.perSection ?? 8, 4), 12);

  const specRow = await db.testSpecification.findFirst({
    where: { examKey: input.examKey, variant: input.variant, status: "active" },
    orderBy: { version: "desc" },
  });
  if (!specRow) return null;
  const spec = toDto(specRow);

  const items: PoolQuestion[] = [];
  const counts: Record<string, number> = {};
  for (const section of spec.sections) {
    const sectionPool = pool.filter((item) => item.sectionKey === section.key);
    if (sectionPool.length === 0) continue;
    // Round-robin across task types so every family is probed.
    const byType = new Map<string, PoolQuestion[]>();
    for (const item of sectionPool) {
      const list = byType.get(item.question.type) ?? [];
      list.push(item);
      byType.set(item.question.type, list);
    }
    const picked: PoolQuestion[] = [];
    const queues = [...byType.values()].map((list) =>
      [...list].sort((a, b) => a.question.difficulty - b.question.difficulty),
    );
    let guard = 0;
    while (picked.length < perSection && guard < 200) {
      guard += 1;
      const queue = queues.shift();
      if (!queue) break;
      // Take from alternating ends of the difficulty-sorted queue.
      const item = picked.length % 2 === 0 ? queue.shift() : queue.pop();
      if (item) picked.push(item);
      if (queue.length > 0) queues.push(queue);
    }
    if (picked.length === 0) continue;
    items.push(...picked);
    counts[section.key] = picked.length;
  }
  if (items.length === 0) return null;

  // Official clocks scaled to the shortened diagnostic length (min 2 min).
  const timings: Record<string, number> = {};
  for (const section of spec.sections) {
    const count = counts[section.key];
    if (!count) continue;
    const official = section.timingSec;
    const scale = section.questionCount > 0 ? Math.min(1, count / section.questionCount) : 1;
    timings[section.key] = Math.max(120, Math.round(official * scale));
  }

  const mockId = await persistAssembledSet({
    examKey: input.examKey,
    variant: input.variant,
    kind: "diagnostic",
    items,
    timingSecBySection: timings,
    summary: `Diagnostic assessment — a balanced timed sample across ${Object.keys(counts).length} sections (${items.length} items) that profiles your level and weakest skills.`,
  });
  return { mockId, itemCount: items.length };
}

// ---------------------------------------------------------------------------
// Adaptive practice (TalkSy heuristic — never claimed to be ETS's)
// ---------------------------------------------------------------------------

export type AdaptiveCalibration = {
  /** Difficulty tier (1–5) the next set is aimed at. */
  targetDifficulty: number;
  /** Recent objective accuracy this calibration came from. */
  recentAccuracy: number;
  /** Answered items the calibration is based on. */
  evidenceItems: number;
  /** Human explanation, shown to the learner with the honesty note. */
  reason: string;
};

function clampDifficulty(value: number): number {
  return Math.min(5, Math.max(1, Math.round(value)));
}

/**
 * Calibrate the next adaptive set. With `continueFromAttemptId`, the accuracy
 * of that specific attempt shifts difficulty up or down from the difficulty
 * the learner actually sat; otherwise the learner's whole recent history for
 * the exam sets the baseline.
 */
export async function calibrateAdaptive(
  userId: string,
  examKey: ExamKey,
  variant: string,
  continueFromAttemptId?: string,
): Promise<AdaptiveCalibration> {
  if (continueFromAttemptId) {
    const attempt = await db.mockTestAttempt.findUnique({
      where: { id: continueFromAttemptId },
      include: {
        responses: {
          include: {
            question: { select: { type: true, difficulty: true, points: true } },
          },
        },
      },
    });
    if (attempt && attempt.userId === userId) {
      let total = 0;
      let correct = 0;
      let difficultySum = 0;
      let difficultyCount = 0;
      for (const response of attempt.responses) {
        const points = response.question.points || 1;
        // Only objective items with a graded response inform calibration.
        if (response.autoScore == null) continue;
        total += 1;
        if (response.autoScore >= points) correct += 1;
        difficultySum += response.question.difficulty;
        difficultyCount += 1;
      }
      if (total >= 4) {
        const accuracy = correct / total;
        const satDifficulty = difficultyCount ? difficultySum / difficultyCount : 2.5;
        // Classic target-band steering: below target → easier, above → harder.
        const shift = accuracy < 0.5 ? -1 : accuracy > 0.85 ? 1 : 0;
        const target = clampDifficulty(satDifficulty + shift);
        return {
          targetDifficulty: target,
          recentAccuracy: accuracy,
          evidenceItems: total,
          reason: `You answered ${Math.round(accuracy * 100)}% correctly at difficulty ${satDifficulty.toFixed(1)} in the last set — the next set is aimed at difficulty ${target}.`,
        };
      }
    }
  }

  // Whole-history calibration for the exam.
  const attempts = await db.mockTestAttempt.findMany({
    where: {
      userId,
      status: { in: ["submitted", "scored"] },
      mockTest: { examKey, variant },
    },
    orderBy: { submittedAt: "desc" },
    take: 20,
    select: { id: true },
  });
  const attemptIds = new Set(attempts.map((a) => a.id));
  const responses = await db.mockTestResponse.findMany({
    where: { attemptId: { in: [...attemptIds] } },
    select: { autoScore: true, question: { select: { points: true } } },
  });
  let total = 0;
  let correct = 0;
  for (const response of responses) {
    if (response.autoScore == null) continue;
    total += 1;
    if (response.autoScore >= (response.question.points || 1)) correct += 1;
  }
  const accuracy = total >= 6 ? correct / total : 0.55;
  const target = accuracy >= 0.8 ? 4 : accuracy >= 0.6 ? 3 : accuracy >= 0.4 ? 2 : 1;
  return {
    targetDifficulty: target,
    recentAccuracy: accuracy,
    evidenceItems: total,
    reason:
      total >= 6
        ? `Your recent accuracy on this exam is ${Math.round(accuracy * 100)}% across ${total} graded items — starting at difficulty ${target}.`
        : "Not much history yet — starting at a mid-low difficulty and adjusting from your results.",
  };
}

/**
 * Adaptive practice: difficulty is calibrated to the learner (see
 * calibrateAdaptive), items are chosen closest to that tier, and the honesty
 * note travels with the set. This is TalkSy's own heuristic.
 */
export async function buildAdaptivePractice(input: {
  userId: string;
  examKey: ExamKey;
  variant: string;
  section?: SectionKey;
  count?: number;
  timed?: boolean;
  continueFromAttemptId?: string;
}): Promise<PracticeSetResult | null> {
  const calibration = await calibrateAdaptive(
    input.userId,
    input.examKey,
    input.variant,
    input.continueFromAttemptId,
  );
  let pool = await loadPool(input.examKey, input.variant);
  if (input.section) pool = pool.filter((item) => item.sectionKey === input.section);
  if (pool.length === 0) return null;

  const count = Math.min(Math.max(input.count ?? 12, 4), 30);
  // Closest to the target tier first; variety spreads sources within a tier.
  const ranked = [...pool].sort(
    (a, b) =>
      Math.abs(a.question.difficulty - calibration.targetDifficulty) -
        Math.abs(b.question.difficulty - calibration.targetDifficulty) || a.question.order - b.question.order,
  );
  const window = ranked.slice(0, Math.max(count * 2, count));
  const items = pickVariety(window, count).sort(
    (a, b) => a.question.difficulty - b.question.difficulty,
  );

  const counts: Record<string, number> = {};
  for (const item of items) counts[item.sectionKey] = (counts[item.sectionKey] ?? 0) + 1;
  const timings = input.timed
    ? budgetTimings(Math.max(5, Math.round((items.length * 9) / 10)), counts)
    : await specTimings(input.examKey, input.variant);

  const mockId = await persistAssembledSet({
    examKey: input.examKey,
    variant: input.variant,
    kind: "adaptive",
    items,
    timingSecBySection: timings,
    summary: `Adaptive practice (difficulty ${calibration.targetDifficulty}/5): ${calibration.reason} ${INTEGRITY_ADAPTIVE_NOTE} ${INTEGRITY_CONTENT_NOTE}`,
  });
  return { mockId, itemCount: items.length };
}

// ---------------------------------------------------------------------------
// Diagnostic profile computation (used by the result engine)
// ---------------------------------------------------------------------------

/**
 * Build the diagnostic profile shown on a diagnostic attempt's result:
 * per-section practice band estimates, per-skill accuracy, weakest skills
 * and tasks, plus a plain-language summary. Estimates only — never official.
 */
export function buildDiagnosticProfile(input: {
  model: ScoringModel;
  sections: Array<{ section: SectionKey; raw: number; max: number }>;
  taskPerformance: TaskPerformance[];
  skills: SkillStat[];
}): {
  sections: Array<{ section: SectionKey; estimatedScore: number; raw: number; max: number; accuracy: number; measurable: boolean }>;
  skills: SkillStat[];
  weakestSkills: SkillStat[];
  weakestTasks: TaskPerformance[];
  summary: string;
} {
  const sectionRows = input.sections.map((section) => {
    const score =
      section.max > 0
        ? rawToSectionScore(input.model, section.section, section.raw, section.max)
        : input.model.minSectionScore;
    return {
      section: section.section,
      estimatedScore: score,
      raw: section.raw,
      max: section.max,
      accuracy: section.max > 0 ? section.raw / section.max : 0,
      /** Sections without objective items cannot be estimated from this sample. */
      measurable: section.max > 0,
    };
  });
  const weakestSkills = input.skills
    .filter((s) => s.total >= 2)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 3);
  const weakestTasks = [...input.taskPerformance]
    .filter((t) => t.total >= 2 && t.correct < t.total)
    .sort((a, b) => a.correct / a.total - b.correct / b.total)
    .slice(0, 3);

  // Best/worst judgements need objective evidence; rubric-only sections are
  // reported as unmeasured instead of being called "zero".
  const measurable = sectionRows.filter((s) => s.measurable);
  const unmeasured = sectionRows.filter((s) => !s.measurable).map((s) => s.section);
  const best = [...measurable].sort((a, b) => b.accuracy - a.accuracy)[0];
  const worst = [...measurable].sort((a, b) => a.accuracy - b.accuracy)[0];
  const unit = input.model.kind === "IELTS_BAND" ? "band" : "band (1–6)";
  const summaryParts: string[] = [];
  if (best && worst && best.section !== worst.section) {
    summaryParts.push(
      `Strongest area: ${best.section} (${Math.round(best.accuracy * 100)}% correct, estimated ${best.estimatedScore.toFixed(1)} ${unit}); most in need of work: ${worst.section} (${Math.round(worst.accuracy * 100)}%, estimated ${worst.estimatedScore.toFixed(1)} ${unit}).`,
    );
  } else if (best) {
    summaryParts.push(
      `Estimated ${best.estimatedScore.toFixed(1)} ${unit} on ${best.section} (${Math.round(best.accuracy * 100)}% correct).`,
    );
  }
  if (unmeasured.length > 0) {
    summaryParts.push(
      `${unmeasured.join(" and ")} ${unmeasured.length > 1 ? "carry only rubric-graded tasks" : "carries only rubric-graded tasks"} in this sample — no objective estimate is shown; read the rubric feedback on those responses below.`,
    );
  }
  if (weakestSkills.length > 0) {
    summaryParts.push(
      `Focus first on ${weakestSkills.map((s) => s.label.toLowerCase()).join(", ")} — these skills cost you the most marks.`,
    );
  }
  summaryParts.push(
    "Take a full mock examination once your targeted practice feels comfortable; this diagnostic is a practice estimate, not an official score.",
  );

  return {
    sections: sectionRows,
    skills: input.skills,
    weakestSkills,
    weakestTasks,
    summary: summaryParts.join(" "),
  };
}
