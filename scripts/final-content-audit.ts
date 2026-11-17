/**
 * FINAL EXAMINATION CONTENT AUDIT (PROMPT 56 §1 + §6).
 *
 * The complete, measured audit of every IELTS and TOEFL course, chapter and
 * lesson in the TalkSy Examination Academy, run against the database the
 * live site serves (DATABASE_URL, default db/custom.db):
 *
 *   1. Six-category content classification per lesson and per chapter
 *      (Placeholder / Incomplete / Substantive / Practice-ready / Reviewed
 *      / Published) — measured, never assumed.
 *   2. Placeholder and stub scan across every block and question payload.
 *   3. Chapter-level verification dimensions (PROMPT 56 §1): lesson
 *      completeness, explanation depth, examples, examination strategies,
 *      original practice questions, answer keys, answer explanations,
 *      difficulty, assessments.
 *   4. The PROMPT 55 question-validation engine (8 categories, full scope).
 *   5. Question-bank QC summary (the 950 PROMPT 54 items).
 *   6. Mock library audit (per exam: counts, keys, explanations, timing).
 *   7. Test-specification audit (structure vs the official values verified
 *      on 2026-11-16 against ielts.org and ets.org).
 *   8. Band-descriptor rubric audit.
 *
 * Machine output: docs/exam-academy/data/final-audit.json (consumed by
 * CONTENT_COMPLETENESS_REPORT.md and the two final audit docs).
 *
 * Run: bun scripts/final-content-audit.ts
 */

import { PrismaClient } from "@prisma/client";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { QUESTION_BANK } from "../src/data/exams/question-bank";
import { IELTS_COURSES } from "../src/data/exams/ielts";
import { TOEFL_COURSES } from "../src/data/exams/toefl";
import { runQuestionValidation } from "../src/lib/exams/governance/validate";
import { classifyLesson } from "../src/lib/exams/governance/completeness";

const db = new PrismaClient();
const AUDIT_DATE = "2026-11-16";

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

const wordCount = (text: string): number => (text.trim() ? text.trim().split(/\s+/).length : 0);

type BlockJson = Record<string, unknown>;

function blockWords(data: BlockJson): number {
  let words = 0;
  const add = (v: unknown): void => {
    if (typeof v === "string") words += wordCount(v);
    else if (Array.isArray(v)) v.forEach(add);
    else if (v && typeof v === "object") Object.values(v).forEach(add);
  };
  add(Object.values(data));
  return words;
}

function blockText(data: BlockJson): string {
  let text = "";
  const add = (v: unknown): void => {
    if (typeof v === "string") text += ` ${v}`;
    else if (Array.isArray(v)) v.forEach(add);
    else if (v && typeof v === "object") Object.values(v).forEach(add);
  };
  add(Object.values(data));
  return text;
}

function parseJson<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

const PLACEHOLDER_PATTERNS: Array<{ re: RegExp; label: string; stubOnly?: boolean }> = [
  { re: /\bTODO\b/, label: "TODO" }, // case-sensitive: Spanish "todo" is legitimate
  { re: /\bFIXME\b/, label: "FIXME" },
  { re: /\bTBD\b/, label: "TBD" },
  { re: /\bTBC\b/, label: "TBC" },
  { re: /\bcoming soon\b/i, label: "coming soon" },
  { re: /\bplaceholder\b/i, label: "placeholder" },
  { re: /lorem ipsum/i, label: "lorem ipsum" },
  // Idiomatic prose ("a scene waiting to be written") is legitimate — only
  // short stub-like fields count as placeholders.
  { re: /\b(?<!waiting )to be (added|written|completed)\b/i, label: "to be added", stubOnly: true },
  { re: /\bunder construction\b/i, label: "under construction" },
  { re: /\bin a future (release|version)\b/i, label: "future release" },
  { re: /\bnot yet (available|written)\b/i, label: "not yet available", stubOnly: true },
  { re: /\bxxx+\b/i, label: "xxx" },
];

const TEACHING_TYPES = new Set([
  "text", "heading", "definition", "example", "table", "grammar-table",
  "vocabulary-list", "grammar-rule", "dialogue", "sentence-diagram", "image",
  "audio", "video", "passage", "transcript", "model-answer", "lesson-intro",
  "steps", "usage", "comparison", "mistakes", "four-skills", "note", "warning",
]);
const EXAMPLE_TYPES = new Set(["example", "model-answer", "dialogue", "comparison"]);
const STRATEGY_RE =
  /\b(strateg\w+|approach|technique|tacti\w+|time(?:ing)? management|process of elimination|skim\w*|scan\w*|paraphras\w+|keyword\w*|eliminat\w+|note[- ]tak\w+|plan (your|the) answer|check(ing)? (your|the)? ?work)\b/i;

// The six PROMPT 56 §6 categories, mutually exclusive, highest stage wins.
type ContentStage = "placeholder" | "incomplete" | "substantive" | "practice-ready" | "reviewed" | "published";

// ---------------------------------------------------------------------------
// 1. Lessons: the six-category classification
// ---------------------------------------------------------------------------

type LessonRow = {
  slug: string;
  title: string;
  course: string;
  moduleSlug: string;
  unitSlug: string;
  live: boolean;
  archived: boolean;
  minutes: number;
  reviewStatus: string;
  publishedVersion: number | null;
  blocks: Array<{ type: string; data: BlockJson }>;
  exerciseIds: string[];
};

type LessonAudit = {
  slug: string;
  title: string;
  course: string;
  moduleSlug: string;
  unitSlug: string;
  live: boolean;
  archived: boolean;
  words: number;
  blockCount: number;
  exerciseCount: number;
  stage: ContentStage;
  reasons: string[];
};

async function auditLessons(): Promise<{
  lessons: LessonAudit[];
  chapters: Array<{
    course: string; moduleSlug: string; unitSlug: string; title: string;
    lessons: number; liveLessons: number; worstStage: ContentStage;
    dimensions: Record<string, boolean | number | string>;
    lessonStages: ContentStage[];
  }>;
}> {
  const courseSlugs = [
    ...IELTS_COURSES.map((c) => c.slug),
    ...TOEFL_COURSES.map((c) => c.slug),
  ];
  const courses = await db.cmsCourse.findMany({
    where: { slug: { in: courseSlugs } },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          units: {
            orderBy: { order: "asc" },
            include: {
              lessons: {
                orderBy: { order: "asc" },
                include: { blocks: { orderBy: { order: "asc" } } },
              },
            },
          },
        },
      },
    },
    orderBy: { order: "asc" },
  });

  // All published CMS questions once (id → row) for practice verification.
  const questions = await db.cmsQuestion.findMany({
    where: { slug: { in: ["__none__"] } },
  });
  void questions;

  const allQuestions = await db.cmsQuestion.findMany();
  const qById = new Map(allQuestions.map((q) => [q.id, q]));

  // Human-review evidence: governance overrides with humanApproved=true.
  const overrides = await db.examContentReview.findMany({
    where: { entityType: "lesson", humanApproved: true },
    select: { entityKey: true },
  });
  const humanReviewedSlugs = new Set(overrides.map((o) => o.entityKey));

  const lessonAudits: LessonAudit[] = [];
  const chapters: Array<{
    course: string; moduleSlug: string; unitSlug: string; title: string;
    lessons: number; liveLessons: number; worstStage: ContentStage;
    dimensions: Record<string, boolean | number | string>;
    lessonStages: ContentStage[];
  }> = [];

  for (const course of courses) {
    for (const mod of course.modules) {
      for (const unit of mod.units) {
        const liveLessonsHere = unit.lessons.filter((l) => l.live);
        const stages: ContentStage[] = [];

        for (const lesson of unit.lessons) {
          const blocks = lesson.blocks.map((b) => ({
            type: b.type,
            data: parseJson<BlockJson>(b.data) ?? {},
          }));
          const exerciseIds = blocks
            .filter((b) => b.type === "practice")
            .flatMap((b) => (Array.isArray(b.data.exerciseIds) ? (b.data.exerciseIds as string[]) : []));
          const attached = exerciseIds.map((id) => qById.get(id)).filter((q) => q != null);
          const publishedExercises = attached.filter((q) => q!.status === "published");

          const words = blocks.reduce((n, b) => n + (TEACHING_TYPES.has(b.type) ? blockWords(b.data) : 0), 0);

          // Stage 1–2: reuse the PROMPT 55 classifier (same rules as the
          // governance dashboard — one definition of "complete").
          const objectives = parseJson<string[]>(lesson.objectives) ?? [];
          const resolvable = exerciseIds.filter((id) => {
            const q = qById.get(id);
            return q != null && q.status === "published";
          });
          const classification = classifyLesson({
            slug: lesson.slug,
            title: lesson.title,
            live: lesson.live,
            estimatedMinutes: lesson.estimatedMinutes,
            objectives,
            blocks,
            resolvableExerciseIds: resolvable,
            humanApproved: humanReviewedSlugs.has(lesson.slug),
          });

          const reasons: string[] = [...classification.reasons];
          let stage: ContentStage;
          if (classification.completeness === "placeholder") {
            stage = "placeholder";
          } else if (classification.completeness === "partial") {
            stage = "incomplete";
          } else {
            // Substantive: content-complete. Practice-ready additionally
            // requires verified practice: published exercises with answer
            // keys, explanations and difficulty — all machine-checked.
            let practiceReady = true;
            if (classification.exerciseCount === 0 && !blocks.some((b) => b.type === "assignment" || b.type === "homework" || b.type === "revision")) {
              practiceReady = false;
              reasons.push("No answerable practice attached.");
            }
            for (const q of attached) {
              const payload = parseJson<Record<string, unknown>>(q!.data) ?? {};
              const fb = payload.feedback as Record<string, unknown> | undefined;
              if (!fb || typeof fb.correctAnswer !== "string" || !fb.correctAnswer.trim()) {
                practiceReady = false;
                reasons.push(`Exercise ${q!.slug} has no correct-answer key.`);
              }
              if (!fb || typeof fb.explanation !== "string" || wordCount(fb.explanation) < 5) {
                practiceReady = false;
                reasons.push(`Exercise ${q!.slug} has no detailed answer explanation.`);
              }
              if (!q!.difficulty || ["easy", "medium", "hard"].indexOf(q!.difficulty) === -1) {
                practiceReady = false;
                reasons.push(`Exercise ${q!.slug} has no valid difficulty.`);
              }
            }
            if (attached.length > 0 && publishedExercises.length !== attached.length) {
              practiceReady = false;
              reasons.push(`${attached.length - publishedExercises.length} attached exercise(s) not published.`);
            }
            stage = practiceReady ? "practice-ready" : "substantive";
          }

          // Reviewed: human sign-off evidence (governance override or the
          // legacy human review states). Never granted to bare ai-reviewed.
          const hasHumanReview =
            humanReviewedSlugs.has(lesson.slug) ||
            lesson.reviewStatus === "human-reviewed" ||
            lesson.reviewStatus === "approved";
          if (stage === "practice-ready" && hasHumanReview) stage = "reviewed";
          // Published: reviewed AND delivered live with a published snapshot.
          if (stage === "reviewed" && lesson.live && lesson.publishedVersion != null) stage = "published";

          lessonAudits.push({
            slug: lesson.slug,
            title: lesson.title,
            course: course.slug,
            moduleSlug: mod.slug,
            unitSlug: unit.slug,
            live: lesson.live,
            archived: !lesson.live,
            words,
            blockCount: blocks.length,
            exerciseCount: attached.length,
            stage,
            reasons,
          });
          if (lesson.live) stages.push(stage);
        }

        // Chapter-level §1 dimensions over the LIVE lessons.
        const live = unit.lessons.filter((l) => l.live);
        const liveBlocks = live.flatMap((l) =>
          l.blocks.map((b) => ({ type: b.type, data: parseJson<BlockJson>(b.data) ?? {}, lesson: l })),
        );
        const chapterText = liveBlocks.map((b) => blockText(b.data)).join(" ");
        const words = liveBlocks
          .filter((b) => TEACHING_TYPES.has(b.type))
          .reduce((n, b) => n + blockWords(b.data), 0);
        const attachedQ = live
          .flatMap((l) =>
            l.blocks
              .filter((b) => b.type === "practice")
              .flatMap((b) =>
                Array.isArray((parseJson<BlockJson>(b.data) ?? {}).exerciseIds)
                  ? ((parseJson<BlockJson>(b.data)!.exerciseIds as string[]).map((id) => qById.get(id)).filter((q) => q != null))
                  : [],
              ),
          )
          .filter((q) => q!.status === "published");
        const hasKeys = attachedQ.every((q) => {
          const fb = (parseJson<Record<string, unknown>>(q!.data) ?? {}).feedback as Record<string, unknown> | undefined;
          return fb != null && typeof fb.correctAnswer === "string" && fb.correctAnswer.trim().length > 0;
        });
        const hasExplanations = attachedQ.every((q) => {
          const fb = (parseJson<Record<string, unknown>>(q!.data) ?? {}).feedback as Record<string, unknown> | undefined;
          return fb != null && typeof fb.explanation === "string" && wordCount(fb.explanation) >= 5;
        });
        const hasDifficulty = attachedQ.every((q) => ["easy", "medium", "hard"].includes(q!.difficulty));
        const difficultyMix = new Set(attachedQ.map((q) => q!.difficulty));
        const examples = liveBlocks.filter((b) => EXAMPLE_TYPES.has(b.type)).length;
        const strategies = liveBlocks.filter((b) => STRATEGY_RE.test(blockText(b.data))).length;
        const assessments =
          liveBlocks.filter((b) => b.type === "assignment" || b.type === "revision" || b.type === "assessment").length +
          attachedQ.length;

        const worst = (list: ContentStage[]): ContentStage => {
          const order: ContentStage[] = ["placeholder", "incomplete", "substantive", "practice-ready", "reviewed", "published"];
          let worstStage: ContentStage = "published";
          for (const s of list) if (order.indexOf(s) < order.indexOf(worstStage)) worstStage = s;
          return worstStage;
        };

        chapters.push({
          course: course.slug,
          moduleSlug: mod.slug,
          unitSlug: unit.slug,
          title: unit.title,
          lessons: unit.lessons.length,
          liveLessons: live.length,
          worstStage: live.length === 0 ? "placeholder" : worst(stages),
          lessonStages: stages,
          dimensions: {
            "lessons-complete": live.length > 0 && !stages.includes("placeholder") && !stages.includes("incomplete"),
            "teaching-words": words,
            "explanation-depth": live.every((l) => wordCount(l.description ?? "") >= 0) && words >= live.length * 80,
            examples: examples,
            "examples-present": examples > 0,
            "strategies-present": strategies > 0,
            "strategy-blocks": strategies,
            "practice-questions": attachedQ.length,
            "answer-keys-verified": attachedQ.length === 0 ? false : hasKeys,
            "answer-explanations": attachedQ.length === 0 ? false : hasExplanations,
            "difficulty-set": attachedQ.length === 0 ? false : hasDifficulty,
            "difficulty-mix": [...difficultyMix].join("+") || "n/a",
            "assessments": assessments,
          },
        });
      }
    }
  }

  return { lessons: lessonAudits, chapters };
}

// ---------------------------------------------------------------------------
// 2. Placeholder scan (blocks + question payloads + lesson metadata)
// ---------------------------------------------------------------------------

function scanText(where: string, text: string, hits: Array<{ where: string; label: string; excerpt: string }>, isStubField: boolean): void {
  for (const p of PLACEHOLDER_PATTERNS) {
    if (p.stubOnly && !isStubField) continue;
    if (p.re.test(text)) {
      hits.push({ where, label: p.label, excerpt: text.trim().slice(0, 140) });
    }
  }
}

async function scanPlaceholders(): Promise<Array<{ where: string; label: string; excerpt: string }>> {
  const hits: Array<{ where: string; label: string; excerpt: string }> = [];
  const courseSlugs = [...IELTS_COURSES.map((c) => c.slug), ...TOEFL_COURSES.map((c) => c.slug)];

  const lessons = await db.cmsLesson.findMany({
    where: { unit: { module: { course: { slug: { in: courseSlugs } } } } },
    include: { blocks: true },
  });
  const walkFields = (obj: unknown, visit: (text: string) => void): void => {
    if (typeof obj === "string") visit(obj);
    else if (Array.isArray(obj)) obj.forEach((v) => walkFields(v, visit));
    else if (obj && typeof obj === "object") for (const v of Object.values(obj)) walkFields(v, visit);
  };
  for (const lesson of lessons) {
    for (const block of lesson.blocks) {
      const data = parseJson<BlockJson>(block.data) ?? {};
      walkFields(data, (text) =>
        scanText(`${lesson.slug} · block #${block.order} (${block.type})`, text, hits, text.trim().length < 120),
      );
    }
    scanText(`${lesson.slug} · title`, lesson.title, hits, lesson.title.trim().length < 120);
  }

  // Question bank (CMS exercises of the academies + mock questions).
  const acadQuestions = await db.cmsQuestion.findMany({
    where: { OR: [{ slug: { startsWith: "ielts-" } }, { slug: { startsWith: "toefl-" } }] },
  });
  for (const q of acadQuestions) {
    scanText(`question ${q.slug}`, q.prompt, hits, true);
    walkFields(parseJson<BlockJson>(q.data) ?? {}, (text) => scanText(`question ${q.slug}`, text, hits, text.trim().length < 120));
  }
  const mockQuestions = await db.mockTestQuestion.findMany({ include: { section: { include: { mockTest: true } } } });
  for (const q of mockQuestions) {
    const where = `mock-question ${q.section?.mockTest?.title ?? q.sectionId}/${q.order}`;
    scanText(where, q.stem ?? "", hits, (q.stem ?? "").trim().length < 120);
    scanText(where, q.explanation ?? "", hits, (q.explanation ?? "").trim().length < 120);
    walkFields(parseJson<BlockJson>(q.payload) ?? {}, (text) => scanText(where, text, hits, text.trim().length < 120));
  }
  return hits;
}

// ---------------------------------------------------------------------------
// 3. Mock library audit
// ---------------------------------------------------------------------------

async function auditMocks() {
  const mocks = await db.mockTest.findMany({
    include: { sections: { include: { questions: true } } },
    orderBy: [{ examKey: "asc" }, { title: "asc" }],
  });
  const perExam = new Map<string, { mocks: number; questions: number; keyed: number; explained: number; timingOk: number; timingTotal: number }>();
  for (const m of mocks) {
    const k = `${m.examKey}/${m.variant}`;
    const agg = perExam.get(k) ?? { mocks: 0, questions: 0, keyed: 0, explained: 0, timingOk: 0, timingTotal: 0 };
    agg.mocks += 1;
    const qs = m.sections.flatMap((s) => s.questions);
    agg.questions += qs.length;
    const objective = qs.filter((q) => q.answer !== null);
    agg.keyed += objective.filter((q) => {
      try {
        return JSON.parse(q.answer as string) != null;
      } catch {
        return false;
      }
    }).length;
    agg.explained += qs.filter((q) => (q.explanation ?? "").trim().length > 20).length;
    const timed = m.sections.filter((s) => s.timingSec > 0).length;
    agg.timingOk += timed;
    agg.timingTotal += m.sections.length;
    perExam.set(k, agg);
  }
  return { total: mocks.length, perExam: [...perExam.entries()].map(([k, v]) => ({ exam: k, ...v })) };
}

// ---------------------------------------------------------------------------
// 4. Specs audit (vs official values verified 2026-11-16)
// ---------------------------------------------------------------------------

const OFFICIAL = {
  IELTS: {
    // Speaking is 11–14 minutes officially: 660–780s all valid.
    sections: { listening: { sec: 1800, q: 40, secMax: 1800 }, reading: { sec: 3600, q: 40, secMax: 3600 }, writing: { sec: 3600, q: 2, secMax: 3600 }, speaking: { sec: 660, q: 3, secMax: 780 } },
    scale: "0–9 bands, half steps; overall = mean of four, rounded to nearest half (.25/.75 up)",
    writingWeight: "Task 2 twice Task 1",
  },
  TOEFL: {
    sections: { reading: { sec: 1800, q: 50 }, listening: { sec: 1740, q: 47 }, writing: { sec: 1380, q: 12 }, speaking: { sec: 480, q: 11 } },
    scale: "1–6 bands, half steps; overall = mean of four, rounded to nearest half; 0–120 comparable overall during the two-year transition",
    families: { reading: ["Complete the Words", "Read in Daily Life", "Read an Academic Passage"], listening: ["Listen and Choose a Response", "Listen to a Conversation", "Listen to an Announcement", "Listen to an Academic Talk"], writing: ["Build a Sentence", "Write an Email", "Write for an Academic Discussion"], speaking: ["Listen and Repeat", "Take an Interview"] },
  },
} as const;

async function auditSpecs() {
  const specs = await db.testSpecification.findMany({ orderBy: [{ examKey: "asc" }, { version: "desc" }] });
  return specs.map((s) => {
    const sections = parseJson<Array<{ key: string; timingSec: number; questionCount?: number }>>(s.sections) ?? [];
    const official = s.examKey === "IELTS" ? OFFICIAL.IELTS.sections : OFFICIAL.TOEFL.sections;
    const checks = sections.map((sec) => {
      const want = (official as Record<string, { sec: number; q?: number; secMax?: number }>)[sec.key];
      const timingOk = want != null ? sec.timingSec >= want.sec && sec.timingSec <= (want.secMax ?? want.sec) : null;
      return {
        key: sec.key,
        timingSec: sec.timingSec,
        officialTimingSec: want?.sec ?? null,
        timingOk,
        items: sec.questionCount ?? null,
        officialItems: want?.q ?? null,
        itemsOk: want?.q != null ? sec.questionCount === want.q : null,
      };
    });
    return {
      id: s.id,
      examKey: s.examKey,
      variant: s.variant,
      name: s.name,
      version: s.version,
      status: s.status,
      effectiveDate: s.effectiveDate?.toISOString().slice(0, 10) ?? null,
      lastReviewedAt: s.lastReviewedAt?.toISOString().slice(0, 10) ?? null,
      sections: checks,
      allTimingOk: checks.every((c) => c.timingOk !== false),
      allItemsOk: checks.every((c) => c.itemsOk !== false),
      sourceRefs: (parseJson<unknown[]>(s.sourceRefs) ?? []).length,
    };
  });
}

// ---------------------------------------------------------------------------
// 5. Rubrics (band descriptors)
// ---------------------------------------------------------------------------

async function auditRubrics() {
  const rubrics = await db.examRubric.findMany();
  return rubrics.map((r) => {
    const scale = parseJson<Array<{ score: number; criteria?: Array<{ name?: string; descriptor?: string }> }>>(r.scale) ?? [];
    const steps = scale.length;
    const criteriaCount = scale[0]?.criteria?.length ?? 0;
    const fullyWorded = scale.filter((s) => (s.criteria ?? []).every((c) => (c.descriptor ?? "").trim().length > 10)).length;
    const scores = scale.map((s) => s.score).sort((a, b) => b - a);
    const contiguous = scores.every((v, i) => i === 0 || v === scores[i - 1] - 1);
    return {
      key: `${r.examKey}/${r.taskKey}`,
      steps,
      criteriaPerStep: criteriaCount,
      fullyWordedSteps: fullyWorded,
      scores,
      complete: (r.examKey === "IELTS" ? steps >= 9 : steps >= 6) && criteriaCount >= 3 && fullyWorded === steps && contiguous,
    };
  });
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`TALKSY FINAL EXAMINATION CONTENT AUDIT — ${AUDIT_DATE}`);
  console.log("=".repeat(72));

  // 1+3. lessons & chapters
  const { lessons, chapters } = await auditLessons();
  const live = lessons.filter((l) => l.live);
  const archived = lessons.filter((l) => !l.live);
  const stageOrder: ContentStage[] = ["placeholder", "incomplete", "substantive", "practice-ready", "reviewed", "published"];
  const byStage = Object.fromEntries(stageOrder.map((s) => [s, 0])) as Record<ContentStage, number>;
  for (const l of live) byStage[l.stage] += 1;

  console.log(`\n[1] LESSONS — six-category classification (live delivery)`);
  for (const courseSlug of [...IELTS_COURSES.map((c) => c.slug), ...TOEFL_COURSES.map((c) => c.slug)]) {
    const courseLessons = live.filter((l) => l.course === courseSlug);
    const counts = stageOrder.map((s) => `${s}=${courseLessons.filter((l) => l.stage === s).length}`).join(" ");
    console.log(`  ${courseSlug.padEnd(34)} ${String(courseLessons.length).padStart(3)} live  ${counts}`);
  }
  console.log(`  TOTAL live=${live.length}  archived(superseded)=${archived.length}`);
  const problems = live.filter((l) => l.stage === "placeholder" || l.stage === "incomplete" || l.stage === "substantive");
  if (problems.length === 0) console.log("  ✓ every live lesson is practice-ready or better");
  else {
    console.log(`  ✗ ${problems.length} live lesson(s) below practice-ready:`);
    for (const p of problems) console.log(`     - ${p.slug} [${p.stage}] ${p.reasons.slice(0, 2).join("; ")}`);
  }

  console.log(`\n[2] CHAPTERS — PROMPT 56 §1 verification dimensions`);
  const dimFailures: string[] = [];
  for (const ch of chapters.filter((c) => c.liveLessons > 0)) {
    const d = ch.dimensions;
    const fails = Object.entries(d)
      .filter(([k, v]) => k.endsWith("-present") || k.startsWith("answer-") || k === "lessons-complete" || k === "difficulty-set")
      .filter(([, v]) => v === false)
      .map(([k]) => k);
    if (fails.length) dimFailures.push(`${ch.course}/${ch.unitSlug}: ${fails.join(", ")}`);
  }
  const activeChapters = chapters.filter((c) => c.liveLessons > 0);
  console.log(`  active chapters (with live lessons): ${activeChapters.length}/${chapters.length}`);
  console.log(`  chapters with all §1 dimensions passing: ${activeChapters.length - dimFailures.length}/${activeChapters.length}`);
  if (dimFailures.length) for (const f of dimFailures) console.log(`  ✗ ${f}`);
  else console.log("  ✓ every active chapter passes every §1 dimension");

  // 2. placeholders
  const placeholderHits = await scanPlaceholders();
  console.log(`\n[3] PLACEHOLDER SCAN — ${placeholderHits.length} marker hit(s)`);
  for (const h of placeholderHits.slice(0, 20)) console.log(`  ✗ ${h.where}: [${h.label}] ${h.excerpt}`);
  if (placeholderHits.length === 0) console.log("  ✓ no placeholder markers in any lesson block, exercise or mock question");

  // 4. validation engine
  console.log(`\n[4] QUESTION VALIDATION ENGINE (PROMPT 55, full scope)`);
  const validation = await runQuestionValidation();
  console.log(`  checked: ${JSON.stringify(validation.checked)}`);
  console.log(`  blocking=${validation.blockingCount} warnings=${validation.warningCount}`);
  for (const [cat, n] of Object.entries(validation.byCategory)) if (n > 0) console.log(`  ${cat}: ${n}`);
  for (const issue of validation.issues.filter((i) => i.severity === "blocking").slice(0, 10))
    console.log(`  ✗ [${issue.category}] ${issue.title} — ${issue.evidence}`);

  // 5. question bank
  console.log(`\n[5] QUESTION BANK (PROMPT 54) — ${QUESTION_BANK.length} items`);
  const bankByExam = new Map<string, number>();
  const reviewByStatus = new Map<string, number>();
  for (const item of QUESTION_BANK) {
    bankByExam.set(item.exam, (bankByExam.get(item.exam) ?? 0) + 1);
    reviewByStatus.set(item.reviewStatus, (reviewByStatus.get(item.reviewStatus) ?? 0) + 1);
  }
  for (const [k, n] of bankByExam) console.log(`  ${k}: ${n}`);
  console.log(`  review status: ${[...reviewByStatus.entries()].map(([k, n]) => `${k}=${n}`).join(", ")}`);

  // 6. mocks
  const mocks = await auditMocks();
  console.log(`\n[6] MOCK LIBRARY — ${mocks.total} mocks`);
  for (const e of mocks.perExam)
    console.log(
      `  ${e.exam.padEnd(24)} mocks=${String(e.mocks).padStart(2)} questions=${String(e.questions).padStart(3)} objective-keys=${e.keyed} explanations=${e.explained}/${e.questions} timed-sections=${e.timingOk}/${e.timingTotal}`,
    );

  // 7. specs
  const specs = await auditSpecs();
  console.log(`\n[7] TEST SPECIFICATIONS vs official structure (verified ${AUDIT_DATE})`);
  for (const s of specs) {
    console.log(
      `  ${s.name} v${s.version} [${s.status}] effective=${s.effectiveDate} sections=${s.sections.length} timing-ok=${s.allTimingOk} items-ok=${s.allItemsOk} sources=${s.sourceRefs}`,
    );
    for (const c of s.sections)
      console.log(
        `     ${c.key.padEnd(10)} timing ${c.timingSec}s (official ${c.officialTimingSec}s ${c.timingOk ? "OK" : "MISMATCH"}) items ${c.items ?? "—"} (official ${c.officialItems ?? "—"} ${c.itemsOk === null ? "" : c.itemsOk ? "OK" : "MISMATCH"})`,
      );
  }

  // 8. rubrics
  const rubrics = await auditRubrics();
  console.log(`\n[8] BAND-DESCRIPTOR RUBRICS`);
  for (const r of rubrics)
    console.log(`  ${r.key.padEnd(26)} steps=${r.steps} criteria/step=${r.criteriaPerStep} fully-worded=${r.fullyWordedSteps}/${r.steps} ${r.complete ? "COMPLETE" : "INCOMPLETE"}`);

  // JSON artifact
  const artifact = {
    auditDate: AUDIT_DATE,
    lessons: {
      totalLive: live.length,
      archived: archived.length,
      byStage,
      belowPracticeReady: problems.map((p) => ({ slug: p.slug, stage: p.stage, reasons: p.reasons })),
    },
    chapters: chapters.filter((c) => c.liveLessons > 0),
    placeholderHits,
    validation: {
      blockingCount: validation.blockingCount,
      warningCount: validation.warningCount,
      byCategory: validation.byCategory,
      checked: validation.checked,
      blockingIssues: validation.issues.filter((i) => i.severity === "blocking"),
      warnings: validation.issues.filter((i) => i.severity !== "blocking"),
    },
    questionBank: { total: QUESTION_BANK.length, byExam: Object.fromEntries(bankByExam), byReviewStatus: Object.fromEntries(reviewByStatus) },
    mocks,
    specs,
    rubrics,
  };
  const out = "docs/exam-academy/data/final-audit.json";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(artifact, null, 2));
  console.log(`\nwrote ${out}`);

  const hardFail =
    problems.length > 0 ||
    placeholderHits.length > 0 ||
    validation.blockingCount > 0 ||
    specs.some((s) => !s.allTimingOk) ||
    rubrics.some((r) => !r.complete);
  console.log(hardFail ? "\nAUDIT RESULT: ✗ findings above need fixing" : "\nAUDIT RESULT: ✓ clean");
  process.exitCode = hardFail ? 1 : 0;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
