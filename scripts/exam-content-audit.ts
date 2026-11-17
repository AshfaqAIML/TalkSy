/**
 * PROMPT 41 audit tool — IELTS / TOEFL examination content audit.
 *
 * Quantifies every examination content item in the database and in the
 * authored source files, so the content-substance classification
 * (A Placeholder / B Incomplete / C Substantive / D Examination-ready /
 * E Reviewed) is based on measured facts, not impressions.
 *
 * Run: bun scripts/exam-content-audit.ts
 * Output: structured report on stdout (consumed by the PROMPT 41 audit docs).
 */

import { PrismaClient } from "@prisma/client";
import { IELTS_COURSES } from "../src/data/exams/ielts";
import { IELTS_MOCK_LIBRARY } from "../src/data/exams/ielts/mocks";
import { ieltsAcademicPathway, ieltsGeneralPathway } from "../src/data/exams/ielts/pathways";
import type { CmsBlock } from "../src/data/cms/types";

const db = new PrismaClient();

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

const wordCount = (text: string): number => (text.trim() ? text.trim().split(/\s+/).length : 0);

function blockWords(block: CmsBlock): number {
  const b = block as unknown as Record<string, unknown>;
  let words = 0;
  const add = (v: unknown): void => {
    if (typeof v === "string") words += wordCount(v);
    else if (Array.isArray(v)) v.forEach(add);
    else if (v && typeof v === "object") Object.values(v).forEach(add);
  };
  switch (b.type) {
    case "table":
      add(b.headers);
      add(b.rows);
      break;
    case "example":
      add((b.items as unknown[]) ?? []);
      break;
    case "dialogue":
      add((b.lines as unknown[]) ?? []);
      break;
    case "vocabulary-list":
      add((b.items as unknown[]) ?? []);
      break;
    case "steps":
      add(b.title);
      add(b.steps);
      break;
    case "comparison":
      add(b.rows);
      add(b.title);
      break;
    default:
      add(b.text ?? b.definition ?? b.tasks ?? b.title);
      add(b.term);
      add(b.partOfSpeech);
  }
  return words;
}

function parseJson<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// 1. Test specifications
// ---------------------------------------------------------------------------

async function auditSpecs() {
  console.log("\n==================================================================");
  console.log("1. TEST SPECIFICATIONS");
  console.log("==================================================================");
  const specs = await db.testSpecification.findMany({
    orderBy: [{ examKey: "asc" }, { variant: "asc" }, { version: "desc" }],
  });
  for (const s of specs) {
    const sections = parseJson<{ key: string; timingSec?: number; items?: number }[]>(s.sections);
    const taskTypes = parseJson<unknown[]>(s.taskTypes);
    const sourceRefs = parseJson<unknown[]>(s.sourceRefs);
    const scoring = parseJson<Record<string, unknown>>(s.scoringModel);
    console.log(
      `${s.examKey}/${s.variant} v${s.version} [${s.status}] effective=${s.effectiveDate?.toISOString().slice(0, 10)} reviewed=${s.lastReviewedAt?.toISOString().slice(0, 10) ?? "never"}`,
    );
    console.log(
      `   sections=${sections?.length ?? 0} (${(sections ?? []).map((x) => `${x.key}:${x.timingSec ?? "?"}s`).join(", ")}) taskTypes=${taskTypes?.length ?? 0} sourceRefs=${sourceRefs?.length ?? 0} scoringKeys=${scoring ? Object.keys(scoring).length : 0}`,
    );
  }
}

// ---------------------------------------------------------------------------
// 2. Mock tests + questions
// ---------------------------------------------------------------------------

type MockQ = {
  id: string;
  type: string;
  answer: string | null;
  explanation: string | null;
  difficulty: number;
  points: number;
  contentStatus: string;
  payload: string;
};

async function auditMocks() {
  console.log("\n==================================================================");
  console.log("2. MOCK LIBRARY (MockTest + MockTestQuestion)");
  console.log("==================================================================");
  const mocks = await db.mockTest.findMany({
    include: {
      sections: {
        orderBy: { order: "asc" },
        include: { questions: { orderBy: { order: "asc" } } },
      },
    },
    orderBy: [{ examKey: "asc" }, { variant: "asc" }, { title: "asc" }],
  });

  const byExam = new Map<string, { mocks: number; questions: number }>();
  for (const m of mocks) {
    const k = `${m.examKey}/${m.variant}`;
    const agg = byExam.get(k) ?? { mocks: 0, questions: 0 };
    agg.mocks += 1;
    agg.questions += m.sections.reduce((n, s) => n + s.questions.length, 0);
    byExam.set(k, agg);
  }
  for (const [k, agg] of byExam) console.log(`${k}: ${agg.mocks} mocks, ${agg.questions} questions`);

  console.log("\n-- per-mock depth --");
  for (const m of mocks) {
    const qs = m.sections.flatMap((s) => s.questions) as unknown as MockQ[];
    const objective = qs.filter((q) => !["WRITING_TASK", "SPEAKING_TASK", "EMAIL_WRITING", "ACADEMIC_DISCUSSION"].includes(q.type));
    const objWithKey = objective.filter((q) => q.answer && JSON.parse(q.answer ?? "null") !== null).length;
    const withExpl = qs.filter((q) => (q.explanation ?? "").trim().length > 0).length;
    const timing = m.sections.reduce((n, s) => n + s.timingSec, 0);
    // content-depth probes
    let listenWords = 0;
    let readWords = 0;
    const writingTasks: string[] = [];
    for (const q of qs) {
      const p = parseJson<Record<string, unknown>>(q.payload) ?? {};
      if (typeof p.audioScript === "string") listenWords += wordCount(p.audioScript);
      if (typeof p.passage === "string") readWords += wordCount(p.passage);
      if (p.rubricKey && p.minWords) writingTasks.push(`${q.type}(min ${p.minWords}w)`);
    }
    console.log(
      `[${m.examKey}/${m.variant}] ${m.title} | kind=${m.kind} status=${m.status} | sections=${m.sections.length} timing=${Math.round(timing / 60)}min | Q=${qs.length} | objective key ${objWithKey}/${objective.length} | explanations ${withExpl}/${qs.length} | listenScript ${listenWords}w | readingPassages ${readWords}w | ${writingTasks.join(", ") || "no constructed tasks"}`,
    );
    // question type histogram
    const hist = new Map<string, number>();
    for (const q of qs) hist.set(q.type, (hist.get(q.type) ?? 0) + 1);
    console.log(`   types: ${[...hist.entries()].map(([t, n]) => `${t}×${n}`).join(" ")}`);
  }
  return mocks;
}

// ---------------------------------------------------------------------------
// 3. Rubrics
// ---------------------------------------------------------------------------

async function auditRubrics() {
  console.log("\n==================================================================");
  console.log("3. ASSESSMENT RUBRICS (ExamRubric)");
  console.log("==================================================================");
  const rubrics = await db.examRubric.findMany({ orderBy: [{ examKey: "asc" }, { taskKey: "asc" }] });
  for (const r of rubrics) {
    const scale = parseJson<{ score: number; criteria?: Array<{ name?: string; descriptor?: string }> }[]>(r.scale);
    const steps = scale ?? [];
    const criteria = steps[0]?.criteria?.length ?? 0;
    const fullyWorded = steps.filter((s) => (s.criteria ?? []).every((c) => (c.descriptor ?? "").trim().length > 10)).length;
    const ladderGap = steps.some((s, i) => i > 0 && s.score !== steps[i - 1].score - 1)
      ? " — LADDER GAP (non-consecutive scores)"
      : "";
    console.log(
      `${r.examKey} ${r.taskKey}: ${steps.length} levels (${steps.map((s) => s.score).join("→") || "none"}), ${criteria} criteria/step, fully-worded ${fullyWorded}/${steps.length}${ladderGap}`,
    );
  }
}

// ---------------------------------------------------------------------------
// 4. Pathways
// ---------------------------------------------------------------------------

async function auditPathways() {
  console.log("\n==================================================================");
  console.log("4. PATHWAYS (ExamPathway → steps)");
  console.log("==================================================================");
  const pathways = await db.examPathway.findMany({
    include: { modules: { orderBy: { order: "asc" }, include: { steps: { orderBy: { order: "asc" } } } } },
  });
  for (const p of pathways) {
    const steps = p.modules.flatMap((m) => m.steps);
    const noRef = steps.filter((s) => !s.refId);
    const refTypes = new Map<string, number>();
    for (const s of steps) refTypes.set(s.refType, (refTypes.get(s.refType) ?? 0) + 1);
    console.log(
      `${p.examKey}/${p.variant} "${p.title}" status=${p.status}: ${p.modules.length} modules, ${steps.length} steps | refTypes: ${[...refTypes.entries()].map(([t, n]) => `${t}×${n}`).join(" ")} | steps WITHOUT refId (free-text): ${noRef.length}`,
    );
    for (const s of noRef) console.log(`   · no-refId step: "${s.label}" (${s.refType}) → #/exams/mocks`);
  }
}

// ---------------------------------------------------------------------------
// 5. IELTS Academy CMS courses — per-lesson substance metrics
// ---------------------------------------------------------------------------

async function auditIeltsCourses() {
  console.log("\n==================================================================");
  console.log("5. IELTS ACADEMY CMS COURSES (lesson-by-lesson substance)");
  console.log("==================================================================");
  const courses = await db.cmsCourse.findMany({
    where: { slug: { in: ["ielts-academy-core", "ielts-academy-academic", "ielts-academy-general-training"] } },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          units: {
            orderBy: { order: "asc" },
            include: {
              lessons: { orderBy: { order: "asc" }, include: { blocks: { orderBy: { order: "asc" } } } },
            },
          },
        },
      },
    },
  });
  for (const c of courses) {
    const lessons = c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons));
    const totalMinutes = lessons.reduce((n, l) => n + l.estimatedMinutes, 0);
    const live = lessons.filter((l) => l.status === "approved" && l.live);
    console.log(`\n### ${c.slug} — ${c.title}`);
    console.log(
      `   status=${c.status} | ${c.modules.length} modules | ${lessons.length} lessons (${live.length} approved+live) | ${totalMinutes} min total`,
    );
    for (const l of lessons) {
      const blocks = l.blocks.flatMap((row) => {
        const parsed = parseJson<CmsBlock>(row.data);
        return parsed ? [parsed] : [];
      });
      const byType = new Map<string, number>();
      let words = 0;
      for (const b of blocks) {
        byType.set(b.type, (byType.get(b.type) ?? 0) + 1);
        words += blockWords(b);
      }
      // lesson-attached bank questions use stable slugs `<lesson>-qN`
      const practiceQ = await db.cmsQuestion.count({ where: { slug: { startsWith: `${l.slug}-q` } } });
      const teachingBlocks = blocks.filter((b) => !["practice", "assignment", "homework"].includes(b.type)).length;
      console.log(
        `${l.status === "approved" && l.live ? " ✓" : ` ${l.status}/${l.live ? "live" : "off"}`} ${l.slug} [${l.reviewStatus}] | ${l.estimatedMinutes}m | blocks ${teachingBlocks}t+${blocks.length - teachingBlocks}app | words ${words} | Q ${practiceQ} | ${[...byType.entries()].map(([t, n]) => `${t}×${n}`).join(" ")}`,
      );
    }
  }
}

// ---------------------------------------------------------------------------
// 6. Question pool by exam (practice assembly source)
// ---------------------------------------------------------------------------

async function auditPools() {
  console.log("\n==================================================================");
  console.log("6. PUBLISHED QUESTION POOL (assembly source, by exam/variant/section)");
  console.log("==================================================================");
  const rows = await db.mockTestQuestion.findMany({
    where: { contentStatus: "published" },
    include: { section: { include: { mockTest: { select: { examKey: true, variant: true, kind: true, status: true } } } } },
  });
  const lib = rows.filter((r) => !["section", "timed", "untimed", "custom", "mistakes"].includes(r.section.mockTest.kind));
  const agg = new Map<string, Map<string, number>>();
  for (const r of lib) {
    const k = `${r.section.mockTest.examKey}/${r.section.mockTest.variant}`;
    const m = agg.get(k) ?? new Map<string, number>();
    m.set(r.section.key, (m.get(r.section.key) ?? 0) + 1);
    agg.set(k, m);
  }
  for (const [k, m] of agg) console.log(`${k}: ${[...m.entries()].map(([s, n]) => `${s}×${n}`).join(" ")} — total ${[...m.values()].reduce((a, b) => a + b, 0)}`);
}

// ---------------------------------------------------------------------------
// 7. Authored source: mock library (src/data) cross-check
// ---------------------------------------------------------------------------

function auditAuthoredMocks() {
  console.log("\n==================================================================");
  console.log("7. AUTHORED MOCK LIBRARY SOURCE (src/data/exams/ielts)");
  console.log("==================================================================");
  for (const m of IELTS_MOCK_LIBRARY) {
    const qs = m.sections.flatMap((s) => s.questions);
    const withExpl = qs.filter((q) => (q.explanation ?? "").trim().length > 0).length;
    const objWithKey = qs.filter((q) => q.type !== "WRITING_TASK" && q.type !== "SPEAKING_TASK" && q.answer != null).length;
    const objTotal = qs.filter((q) => q.type !== "WRITING_TASK" && q.type !== "SPEAKING_TASK").length;
    console.log(`${m.examKey}/${m.variant} "${m.title}" kind=${m.kind}: ${qs.length} Q, keys ${objWithKey}/${objTotal}, explanations ${withExpl}/${qs.length}`);
  }
}

// ---------------------------------------------------------------------------
// 8. Authored source: IELTS lesson specs (per-lesson, before CMS append)
// ---------------------------------------------------------------------------

function auditAuthoredLessons() {
  console.log("\n==================================================================");
  console.log("8. AUTHORED IELTS LESSON SPECS (teaching substance per lesson)");
  console.log("==================================================================");
  for (const course of IELTS_COURSES) {
    console.log(`\n### ${course.slug}`);
    for (const mod of course.modules) {
      for (const unit of mod.units) {
        for (const l of unit.lessons) {
          const words = l.blocks.reduce((n, b) => n + blockWords(b), 0);
          const types = new Map<string, number>();
          for (const b of l.blocks) types.set(b.type, (types.get(b.type) ?? 0) + 1);
          const qWithFb = (l.questions ?? []).filter((q) => {
            const f = (q as unknown as { feedback?: { explanation?: string } }).feedback;
            return !!f && (f.explanation ?? "").trim().length > 0;
          }).length;
          console.log(
            `${l.slug} ${l.minutes}m | teach-words ${words} | Q ${(l.questions ?? []).length} (feedback ${qWithFb}) | assign ${l.assignment ? `${l.assignment.minWords}-${l.assignment.maxWords}w` : "—"} | hw ${(l.homework ?? []).length} | ${[...types.entries()].map(([t, n]) => `${t}×${n}`).join(" ")}`,
          );
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// 9. Pathway authored source (IELTS) — step targets
// ---------------------------------------------------------------------------

function auditAuthoredPathways() {
  console.log("\n==================================================================");
  console.log("9. AUTHORED IELTS PATHWAYS (step targets)");
  console.log("==================================================================");
  for (const p of [ieltsAcademicPathway, ieltsGeneralPathway]) {
    console.log(`\n### ${p.examKey}/${p.variant} — ${p.title}`);
    for (const m of p.modules) {
      console.log(`  ${m.title}`);
      for (const s of m.steps) {
        console.log(`    · ${s.refType}${s.refId ? `:${s.refId}` : " (NO refId)"} — ${s.label}`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// 10. Red flags — honest summary
// ---------------------------------------------------------------------------

async function auditRedFlags(mocks: Awaited<ReturnType<typeof auditMocks>>) {
  console.log("\n==================================================================");
  console.log("10. RED FLAGS / HONEST SUMMARY");
  console.log("==================================================================");
  const toeflMocks = mocks.filter((m) => m.examKey === "TOEFL_IBT");
  const ieltsMockQ = mocks.filter((m) => m.examKey === "IELTS").flatMap((m) => m.sections.flatMap((s) => s.questions));
  const toeflMockQ = toeflMocks.flatMap((m) => m.sections.flatMap((s) => s.questions));

  // TOEFL lessons?
  const toeflCourses = await db.cmsCourse.count({ where: { OR: [{ title: { contains: "TOEFL" } }, { slug: { contains: "toefl" } }] } });
  const toeflLessons = await db.cmsLesson.count({
    where: { OR: [{ slug: { contains: "toefl" } }, { title: { contains: "TOEFL" } }] },
  });

  console.log(`TOEFL: courses=${toeflCourses}, lessons=${toeflLessons}, mocks=${toeflMocks.length} (${toeflMockQ.length} questions)`);
  console.log(
    `IELTS mocks: ${mocks.filter((m) => m.examKey === "IELTS").length} mocks, ${ieltsMockQ.length} questions | explanations ${ieltsMockQ.filter((q) => (q.explanation ?? "").trim()).length}/${ieltsMockQ.length} | difficulty set ${ieltsMockQ.filter((q) => q.difficulty > 0).length}/${ieltsMockQ.length}`,
  );
  console.log(
    `TOEFL mock questions: explanations ${toeflMockQ.filter((q) => (q.explanation ?? "").trim()).length}/${toeflMockQ.length} | difficulty set ${toeflMockQ.filter((q) => q.difficulty > 0).length}/${toeflMockQ.length}`,
  );

  // Attempt evidence (has anyone actually taken them?)
  const attempts = await db.mockTestAttempt.groupBy({ by: ["status"], _count: true });
  console.log(`Attempts by status: ${attempts.map((a) => `${a.status}×${a._count}`).join(" ") || "none"}`);

  // Review chain state for exam questions
  const byReview = await db.mockTestQuestion.groupBy({ by: ["contentStatus"], _count: true });
  console.log(`Mock questions by contentStatus: ${byReview.map((r) => `${r.contentStatus}×${r._count}`).join(" ")}`);

  // Rubric coverage vs mocks
  const rubrics = await db.examRubric.findMany();
  const rubricKeys = new Set(rubrics.map((r) => r.taskKey));
  const tasksNeedingRubric = mocks
    .flatMap((m) => m.sections.flatMap((s) => s.questions))
    .filter((q) => JSON.stringify(q.payload).includes("rubricKey"));
  const missingRubric = tasksNeedingRubric.filter((q) => {
    const p = parseJson<Record<string, unknown>>(q.payload) ?? {};
    return p.rubricKey && !rubricKeys.has(String(p.rubricKey));
  });
  console.log(`Constructed tasks referencing rubricKey: ${tasksNeedingRubric.length}, unresolved: ${missingRubric.length}`);
}

// ---------------------------------------------------------------------------

await auditSpecs();
const mocks = await auditMocks();
await auditRubrics();
await auditPathways();
await auditIeltsCourses();
await auditPools();
auditAuthoredMocks();
auditAuthoredLessons();
auditAuthoredPathways();
await auditRedFlags(mocks);
console.log("\n— end of audit —");
await db.$disconnect();
