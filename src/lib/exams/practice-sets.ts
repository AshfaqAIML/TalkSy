/**
 * Practice-set assembly (six classic builders).
 *
 * The engine offers ten modes. Full mocks come from the seeded library;
 * these builders assemble the other sets on demand from the published
 * question pool of a given exam+variant:
 *
 *   - section  : every question of one section (spec timing or untimed)
 *   - timed    : a custom selection under a chosen minute budget
 *   - untimed  : the same selection with no clocks (learning reveal enabled)
 *   - mistakes : the questions this learner previously got wrong or skipped
 *   - custom   : filters on sections / types / difficulty / count
 *
 * The PROMPT 51 builders (topic, weakness, diagnostic, adaptive) live in
 * practice-modes.ts and reuse the shared helpers exported here.
 *
 * Sets are persisted as ordinary MockTest rows (kind: section|timed|untimed|
 * topic|weakness|diagnostic|adaptive|custom|mistakes) so attempts, responses,
 * results and history treat them exactly like any other test. Assembled
 * questions are copies that carry the ORIGINAL payload, answer,
 * explanation, difficulty, source and status.
 */

import { db } from "@/lib/db";
import { toDto } from "./specs";
import { INTEGRITY_CONTENT_NOTE } from "./integrity";
import { ASSEMBLED_SET_KINDS, type ExamKey, type SectionKey } from "./types";

const ASSEMBLED_KINDS = ASSEMBLED_SET_KINDS;

/** Question rows eligible for on-demand assembly, with section context. */
export type PoolQuestion = {
  question: {
    id: string;
    order: number;
    type: string;
    stem: string | null;
    payload: string;
    answer: string | null;
    points: number;
    skills: string;
    difficulty: number;
    explanation: string | null;
    source: string;
    contentStatus: string;
  };
  sectionKey: string;
  sectionOrder: number;
  mockTitle: string;
};

async function loadPoolUnchecked(examKey: ExamKey, variant: string): Promise<PoolQuestion[]> {
  const rows = await db.mockTestQuestion.findMany({
    where: {
      contentStatus: "published",
      section: {
        mockTest: {
          examKey,
          variant,
          status: "published",
          kind: { notIn: ASSEMBLED_KINDS as unknown as string[] },
        },
      },
    },
    include: {
      section: { select: { key: true, order: true, mockTest: { select: { title: true } } } },
    },
    orderBy: [{ section: { order: "asc" } }, { order: "asc" }],
  });
  return rows.map((row) => ({
    question: {
      id: row.id,
      order: row.order,
      type: row.type,
      stem: row.stem,
      payload: row.payload,
      answer: row.answer,
      points: row.points,
      skills: row.skills,
      difficulty: row.difficulty,
      explanation: row.explanation,
      source: row.source,
      contentStatus: row.contentStatus,
    },
    sectionKey: row.section.key,
    sectionOrder: row.section.order,
    mockTitle: row.section.mockTest.title,
  }));
}

/** Published question pool of an exam+variant (shared with practice-modes). */
export async function loadPool(examKey: ExamKey, variant: string): Promise<PoolQuestion[]> {
  return loadPoolUnchecked(examKey, variant);
}

function assembleTitle(kind: string): string {
  const stamp = new Date();
  const label =
    kind === "mistakes"
      ? "Previous mistakes practice"
      : kind === "section"
        ? "Section practice"
        : kind === "timed"
          ? "Timed practice"
          : kind === "untimed"
            ? "Untimed learning practice"
            : kind === "topic"
              ? "Topic-specific practice"
              : kind === "weakness"
                ? "Weakness-based practice"
                : kind === "diagnostic"
                  ? "Diagnostic assessment"
                  : kind === "adaptive"
                    ? "Adaptive practice"
                    : "Custom practice";
  return `${label} · ${stamp.toISOString().slice(0, 16).replace("T", " ")} · ${Math.random().toString(36).slice(2, 6)}`;
}

/** Persist an assembled set (shared with practice-modes). `timingSecBySection`
 *  carries the chosen section clocks (spec timing, or a proportional split of
 *  a custom budget). */
export async function persistAssembledSet(options: {
  examKey: ExamKey;
  variant: string;
  kind: string;
  items: PoolQuestion[];
  timingSecBySection: Record<string, number>;
  summary: string;
}): Promise<string> {
  const { examKey, variant, kind, items, timingSecBySection, summary } = options;
  const spec = await db.testSpecification.findFirst({
    where: { examKey, variant, status: "active" },
    orderBy: { version: "desc" },
  });
  if (!spec) throw new Error(`No active spec for ${examKey} ${variant}`);

  const mock = await db.mockTest.create({
    data: {
      examKey,
      variant,
      specId: spec.id,
      title: assembleTitle(kind),
      kind,
      lengthLabel: "assembled set",
      status: "published",
      description: `${summary} ${INTEGRITY_CONTENT_NOTE}`,
    },
  });

  // Group by section key, ordered by the spec's section order.
  const specSections = toDto(spec).sections;
  const bySection = new Map<string, PoolQuestion[]>();
  for (const item of items) {
    const list = bySection.get(item.sectionKey) ?? [];
    list.push(item);
    bySection.set(item.sectionKey, list);
  }
  const orderedKeys = [
    ...specSections.map((section) => section.key),
    ...[...bySection.keys()].filter((key) => !specSections.some((s) => s.key === key)),
  ];

  let sectionOrder = 0;
  for (const key of orderedKeys) {
    const sectionItems = bySection.get(key);
    if (!sectionItems || sectionItems.length === 0) continue;
    sectionOrder += 1;
    const section = await db.mockTestSection.create({
      data: {
        mockTestId: mock.id,
        key,
        title: specSections.find((s) => s.key === key)?.label ?? key,
        directions: null,
        timingSec: timingSecBySection[key] ?? 600,
        order: sectionOrder,
      },
    });
    let questionOrder = 0;
    for (const item of sectionItems) {
      questionOrder += 1;
      const source = item.question;
      await db.mockTestQuestion.create({
        data: {
          sectionId: section.id,
          order: questionOrder,
          type: source.type,
          stem: source.stem,
          payload: source.payload,
          answer: source.answer,
          points: source.points,
          skills: source.skills,
          difficulty: source.difficulty,
          explanation: source.explanation,
          source: source.source,
          contentStatus: source.contentStatus,
        },
      });
    }
  }
  return mock.id;
}

/** Spec section clocks for the active spec of an exam+variant. */
export async function specTimings(examKey: ExamKey, variant: string): Promise<Record<string, number>> {
  const spec = await db.testSpecification.findFirst({
    where: { examKey, variant, status: "active" },
    orderBy: { version: "desc" },
  });
  if (!spec) return {};
  const out: Record<string, number> = {};
  for (const section of toDto(spec).sections) {
    out[section.key] = section.timingSec;
  }
  return out;
}

/** Proportional minute-budget split across the chosen sections. */
export function budgetTimings(minutes: number, countsBySection: Record<string, number>): Record<string, number> {
  const total = Object.values(countsBySection).reduce((sum, value) => sum + value, 0);
  const out: Record<string, number> = {};
  for (const [key, count] of Object.entries(countsBySection)) {
    const share = total > 0 ? (count / total) * minutes * 60 : minutes * 60;
    out[key] = Math.max(60, Math.round(share));
  }
  return out;
}

export function pickVariety<T>(items: T[], count: number): T[] {
  if (items.length <= count) return items;
  // Evenly spaced sample across the pool — mixes sources and difficulties.
  const step = items.length / count;
  const out: T[] = [];
  for (let index = 0; index < count; index += 1) {
    out.push(items[Math.floor(index * step)]);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Builders
// ---------------------------------------------------------------------------

export type PracticeSetResult = { mockId: string; itemCount: number };

export async function buildSectionPractice(input: {
  examKey: ExamKey;
  variant: string;
  section: SectionKey;
  count?: number;
  timed?: boolean;
}): Promise<PracticeSetResult | null> {
  const pool = (await loadPool(input.examKey, input.variant)).filter(
    (item) => item.sectionKey === input.section,
  );
  if (pool.length === 0) return null;
  const items = input.count ? pickVariety(pool, input.count) : pool;
  const timings = await specTimings(input.examKey, input.variant);
  const mockId = await persistAssembledSet({
    examKey: input.examKey,
    variant: input.variant,
    kind: "section",
    items,
    timingSecBySection: timings,
    summary: `Section-wise practice on ${input.section} (${items.length} items).`,
  });
  return { mockId, itemCount: items.length };
}

export async function buildCustomPractice(input: {
  examKey: ExamKey;
  variant: string;
  sections?: SectionKey[];
  types?: string[];
  difficultyMin?: number;
  difficultyMax?: number;
  count: number;
  minutes?: number;
  timed?: boolean;
}): Promise<PracticeSetResult | null> {
  let pool = await loadPool(input.examKey, input.variant);
  if (input.sections && input.sections.length > 0) {
    pool = pool.filter((item) => input.sections!.includes(item.sectionKey as SectionKey));
  }
  if (input.types && input.types.length > 0) {
    pool = pool.filter((item) => input.types!.includes(item.question.type));
  }
  const min = input.difficultyMin ?? 1;
  const max = input.difficultyMax ?? 5;
  pool = pool.filter((item) => item.question.difficulty >= min && item.question.difficulty <= max);
  if (pool.length === 0) return null;
  const items = pickVariety(pool, input.count);
  const counts: Record<string, number> = {};
  for (const item of items) counts[item.sectionKey] = (counts[item.sectionKey] ?? 0) + 1;
  const timings =
    input.timed !== false && input.minutes
      ? budgetTimings(input.minutes, counts)
      : await specTimings(input.examKey, input.variant);
  const kind = input.timed === false ? "untimed" : "timed";
  const mockId = await persistAssembledSet({
    examKey: input.examKey,
    variant: input.variant,
    kind,
    items,
    timingSecBySection: timings,
    summary: `Custom practice set (${items.length} items${input.minutes ? `, ${input.minutes} minutes` : ""}).`,
  });
  return { mockId, itemCount: items.length };
}

export async function buildMistakesPractice(input: {
  userId: string;
  examKey?: ExamKey;
  variant?: string;
  limit?: number;
  timed?: boolean;
}): Promise<PracticeSetResult | { empty: true }> {
  const limit = Math.min(Math.max(input.limit ?? 20, 4), 30);
  const attempts = await db.mockTestAttempt.findMany({
    where: {
      userId: input.userId,
      status: { in: ["submitted", "scored"] },
      ...(input.examKey ? { mockTest: { examKey: input.examKey, ...(input.variant ? { variant: input.variant } : {}) } } : {}),
    },
    orderBy: { submittedAt: "desc" },
    take: 40,
    select: { id: true },
  });
  if (attempts.length === 0) return { empty: true };

  // Scoring models per spec (for constructed-response thresholds).
  const specCache = new Map<string, number>(); // specId → maxSectionScore
  async function maxScoreForSpecId(specId: string): Promise<number> {
    const cached = specCache.get(specId);
    if (cached !== undefined) return cached;
    const row = await db.testSpecification.findUnique({ where: { id: specId } });
    const value = row ? toDto(row).scoringModel.maxSectionScore : 6;
    specCache.set(specId, value);
    return value;
  }

  const seen = new Set<string>();
  const picked: Array<{ attemptId: string; questionId: string; reason: string }> = [];
  for (const attempt of attempts) {
    if (picked.length >= limit) break;
    const responses = await db.mockTestResponse.findMany({
      where: { attemptId: attempt.id },
      include: {
        question: {
          select: {
            id: true,
            type: true,
            points: true,
            answer: true,
            section: {
              select: {
                key: true,
                order: true,
                mockTest: { select: { specId: true, title: true, examKey: true, variant: true } },
              },
            },
          },
        },
      },
    });
    // Questions with no response row at all are also mistakes.
    const allQuestions = await db.mockTestQuestion.findMany({
      where: { section: { mockTest: { attempts: { some: { id: attempt.id } } } } },
      select: { id: true },
    });
    const respondedIds = new Set(responses.map((r) => r.questionId));
    for (const q of allQuestions) {
      if (respondedIds.has(q.id)) continue;
      if (!seen.has(q.id)) {
        seen.add(q.id);
        picked.push({ attemptId: attempt.id, questionId: q.id, reason: "unanswered" });
      }
    }
    for (const response of responses) {
      if (picked.length >= limit) break;
      const question = response.question;
      if (seen.has(question.id)) continue;
      let isMistake = false;
      let reason = "wrong";
      const specMax = await maxScoreForSpecId(question.section.mockTest.specId);
      const constructed = ["WRITING_TASK", "EMAIL_WRITING", "DISCUSSION_TASK", "SPEAKING_TASK"].includes(question.type);
      if (constructed) {
        // Stored answers may be the literal "null" (unanswered or clobbered) — parse defensively.
        let text = "";
        try {
          const parsed = response.answer ? (JSON.parse(response.answer) as { text?: string } | null) : null;
          text = parsed?.text ?? "";
        } catch {
          text = "";
        }
        if (!text.trim()) {
          isMistake = true;
          reason = "no response";
        } else if (response.rubricScore == null) {
          isMistake = true;
          reason = "not yet graded";
        } else if (response.rubricScore <= specMax * 0.6) {
          isMistake = true;
          reason = `rubric ${response.rubricScore.toFixed(1)}`;
        }
      } else {
        if (response.autoScore == null || response.autoScore < question.points) {
          isMistake = true;
          reason = response.autoScore == null ? "unanswered" : `${response.autoScore}/${question.points}`;
        }
      }
      if (isMistake) {
        seen.add(question.id);
        picked.push({ attemptId: attempt.id, questionId: question.id, reason });
      }
    }
  }
  if (picked.length === 0) return { empty: true };

  // Load full rows for the picked ids (pool includes only published sources).
  const ids = picked.map((entry) => entry.questionId);
  const pool = (await loadPool(
    (input.examKey ?? "IELTS") as ExamKey,
    input.variant ?? (input.examKey === "TOEFL_IBT" ? "STANDARD" : "ACADEMIC"),
  )).filter((item) => ids.includes(item.question.id));
  // Mistakes may span exams: pool filter above may miss cross-exam picks.
  const extra: PoolQuestion[] = [];
  const poolIds = new Set(pool.map((item) => item.question.id));
  for (const id of ids) {
    if (poolIds.has(id)) continue;
    const row = await db.mockTestQuestion.findUnique({
      where: { id },
      include: { section: { select: { key: true, order: true, mockTest: { select: { title: true } } } } },
    });
    if (!row || row.contentStatus !== "published") continue;
    extra.push({
      question: {
        id: row.id,
        order: row.order,
        type: row.type,
        stem: row.stem,
        payload: row.payload,
        answer: row.answer,
        points: row.points,
        skills: row.skills,
        difficulty: row.difficulty,
        explanation: row.explanation,
        source: row.source,
        contentStatus: row.contentStatus,
      },
      sectionKey: row.section.key,
      sectionOrder: row.section.order,
      mockTitle: row.section.mockTest.title,
    });
  }
  const all = [...pool, ...extra];
  // Order by the first section order, then original question order.
  const orderIndex = new Map(ids.map((id, index) => [id, index]));
  all.sort((a, b) => (orderIndex.get(a.question.id) ?? 0) - (orderIndex.get(b.question.id) ?? 0));

  // Section timings: spec clocks (or proportional for cross-exam mixes).
  const counts: Record<string, number> = {};
  for (const item of all) counts[item.sectionKey] = (counts[item.sectionKey] ?? 0) + 1;
  const primaryExam = input.examKey ?? "IELTS" as ExamKey;
  const primaryVariant = input.variant ?? "ACADEMIC";
  const timings = await specTimings(primaryExam, primaryVariant);
  for (const key of Object.keys(counts)) {
    if (!timings[key]) timings[key] = 600;
  }
  const mockId = await persistAssembledSet({
    examKey: primaryExam,
    variant: primaryVariant,
    kind: "mistakes",
    items: all,
    timingSecBySection: timings,
    summary: `Retry of ${all.length} items you previously got wrong or skipped.`,
  });
  return { mockId, itemCount: all.length };
}
