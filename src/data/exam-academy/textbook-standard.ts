/**
 * The v3 Exam-Academy Textbook Standard (PROMPT 43).
 *
 * PROMPT 43 replaced the "brief orientation page" model of exam lessons with
 * a professional textbook standard. Every published exam lesson must teach
 * in depth; a title plus a paragraph, a list of tips, or questions without
 * explanations are not lessons. This module defines the standard, the
 * production manifest that tracks which blueprint chapters are delivered at
 * that standard, and the mechanical validator behind
 * scripts/validate-exam-textbook.ts + tests/exam-textbook.test.ts.
 *
 * LESSON ANATOMY (mapped onto the existing CMS block vocabulary — no new
 * block types; teaching structure is expressed with the shared renderers):
 *
 *   A. Lesson overview          first block: `lesson-intro` (text ≥ 40 words,
 *                               ≥ 2 "before you start" abilities)
 *   B. Learning outcomes        lesson.objectives — ≥ 3 verb-led can-dos
 *   C. Examination relevance    `table` titled "Examination relevance" with
 *                               the four standard rows (Section / Task &
 *                               question types / What is assessed / Why this
 *                               matters)
 *   D. Detailed concept teach.  `steps` (≥ 3 steps) and/or `grammar-rule`
 *                               plus substantive `text` / `definition` blocks
 *   E. Rules and techniques     inside D: the rules, tables and processes
 *   F. Worked examples          `example` blocks — ≥ 6 items, ≥ 60% with
 *                               teaching notes, ≥ 3 life domains
 *   G. Model answers            `four-skills` (writing tab carries the task,
 *                               guide + model revealed after the learner
 *                               writes) — required where the lesson carries
 *                               an assignment (constructed output)
 *   H. Analytical breakdown     `table` titled "Why this model works" — ≥ 4
 *                               rows (organisation / grammar / vocabulary /
 *                               coherence / task fulfilment)
 *   I. Common mistakes          `mistakes` — ≥ 3 wrong → right → reason items
 *   J. Guided practice          questions WITH progressive hints (auto-split
 *                               into a `practice` variant:"guided" block)
 *   K. Independent practice     questions WITHOUT hints, answers held back
 *                               (auto-split into a `practice`
 *                               variant:"independent" block)
 *   L. Answer explanations      every question's feedback: explanation
 *                               ≥ 15 words + whyWrong on distractor items
 *   M. Examination strategy     `table` titled "Examination strategy" with
 *                               the four moment rows (Before you start /
 *                               While the clock runs / If you are stuck /
 *                               Final minutes)
 *   N. Revision + summary       `revision` ≥ 3 items sourced `from` earlier
 *                               lessons; `summary` ≥ 4 takeaways
 *   O. Homework                 homework ≥ 2 tasks; `assignment` on lessons
 *                               that produce constructed output
 *
 * DEPTH FLOORS (teaching words count every teaching block; practice,
 * assignment and homework blocks are excluded — they are measured by their
 * own rules above):
 *   orientation modules (I-M1, T-M1)  ≥ 350 teaching words, ≥ 10 blocks
 *   all other modules                  ≥ 500 teaching words, ≥ 10 blocks
 * PATCH 3.0.1: block floor 12 → 10 — structural completeness is enforced by
 *   the named-block checks above (intro, relevance table, concept teaching,
 *   examples, mistakes, strategy table, summary, revision); the raw count is
 *   a secondary proxy and 10 = the anatomy plus concept extension.
 *   every lesson                       ≥ 5 questions (≥ 2 guided, ≥ 2
 *                                      independent), ≥ 6 worked examples
 *
 * Honesty rules carried over from the PROMPT 41/42 audits:
 *   - no placeholder phrases ("coming soon", "learn more about this
 *     topic", "practice to improve your skills") anywhere in content;
 *   - no duplicated sentences across delivered lessons;
 *   - model answers are never labelled with official scores they do not
 *     have — band comments must read as illustrative estimates.
 */

import { IELTS_COURSES } from "@/data/exams/ielts";
import { TOEFL_COURSES } from "@/data/exams/toefl";
import type { CmsBlock } from "@/data/cms/types";
import type { ExerciseSpec, LessonSpec } from "@/data/exams/ielts/types";
import { ALL_MODULES } from "./index";

// ---------------------------------------------------------------------------
// Versioning
// ---------------------------------------------------------------------------

export const TEXTBOOK_VERSION = "3.0.1";
export const TEXTBOOK_DATE = "2026-11-14";

// ---------------------------------------------------------------------------
// Production manifest — which blueprint chapters are delivered at v3
// ---------------------------------------------------------------------------

export type TextbookChapterStatus = "planned" | "delivered";

export type TextbookChapterRow = {
  moduleCode: string;
  chapterSlug: string;
  chapterTitle: string;
  academy: "ielts" | "toefl";
  lessons: string[];
  standard: "v3-textbook";
  status: TextbookChapterStatus;
  batch: number | null;
  deliveredAt: string | null;
};

/**
 * Chapters delivered at the v3 standard, keyed `"<module code>/<chapter slug>"`.
 * A chapter is only listed here after its batch passed: complete lessons,
 * original exercises, validated answer keys, progression review, save,
 * database-persistence verification, honest status update.
 */
const DELIVERED: Record<string, { batch: number; date: string }> = {
  // Batch 1 — I-M1 IELTS Fundamentals (4 chapters, 13 lessons)
  "I-M1/orientation": { batch: 1, date: "2026-11-14" },
  "I-M1/scores-and-assessment": { batch: 1, date: "2026-11-14" },
  "I-M1/strategy-and-time": { batch: 1, date: "2026-11-14" },
  "I-M1/delivery-and-test-day": { batch: 1, date: "2026-11-14" },
  // Batch 2 — I-M2 Listening Mastery (superseded by batch 4 — the PROMPT 44
  // masterclass restructure absorbed these five chapters into four deeper ones)
  // Batch 3 — T-M1 TOEFL Fundamentals (3 chapters, 8 lessons)
  "T-M1/toefl-orientation": { batch: 3, date: "2026-11-14" },
  "T-M1/toefl-scores": { batch: 3, date: "2026-11-14" },
  "T-M1/toefl-strategy": { batch: 3, date: "2026-11-14" },
  // Batch 4 — I-M2 Listening Masterclass (PROMPT 44): 4 chapters, 31 lessons
  "I-M2/exam-fundamentals": { batch: 4, date: "2026-11-14" },
  "I-M2/core-skills": { batch: 4, date: "2026-11-14" },
  "I-M2/question-types": { batch: 4, date: "2026-11-14" },
  "I-M2/parts-in-depth": { batch: 4, date: "2026-11-14" },
  // Batch 5 — I-M3A Reading Masterclass (PROMPT 45): 2 chapters, 28 lessons
  "IA-M3/reading-foundations": { batch: 5, date: "2026-11-14" },
  "IA-M3/question-types": { batch: 5, date: "2026-11-14" },
  // Batch 5 — I-M3G GT Reading (PROMPT 45): 1 chapter, 7 lessons
  "IG-M3/gt-reading-practical": { batch: 5, date: "2026-11-14" },
  // Batch 6 — IELTS Writing Masterclass (PROMPT 46)
  "IA-M4/awriting-foundations": { batch: 6, date: "2026-11-14" },
  "IA-M4/awriting-task1": { batch: 6, date: "2026-11-14" },
  "IA-M5/awriting-task2": { batch: 6, date: "2026-11-14" },
  "IA-M5/awriting-assessment": { batch: 6, date: "2026-11-14" },
  "IG-M4/gwriting-foundations": { batch: 6, date: "2026-11-14" },
  "IG-M4/gwriting-letters": { batch: 6, date: "2026-11-14" },
  "IG-M5/gwriting-task2": { batch: 6, date: "2026-11-14" },
  "IG-M5/gwriting-assessment": { batch: 6, date: "2026-11-14" },
  // Batch 7 — IELTS Speaking Masterclass (PROMPT 47): 6 chapters, 69 lessons
  "I-M6/speaking-foundations": { batch: 7, date: "2026-11-15" },
  "I-M6/speaking-part1-topics": { batch: 7, date: "2026-11-15" },
  "I-M7/speaking-part2-craft": { batch: 7, date: "2026-11-15" },
  "I-M7/speaking-part2-cards": { batch: 7, date: "2026-11-15" },
  "I-M8/speaking-part3-discussion": { batch: 7, date: "2026-11-15" },
  "I-M8/speaking-pronunciation": { batch: 7, date: "2026-11-15" },
  // Batch 8 — TOEFL iBT 2026 Masterclass (PROMPT 48): T-M2–T-M7, 18 chapters,
  // 38 lessons — the complete Reading, Listening, Writing, Speaking, language
  // and full-practice modules on the format in force since 21 January 2026.
  "T-M2/toefl-reading-overview": { batch: 8, date: "2026-11-15" },
  "T-M2/toefl-reading-tasks": { batch: 8, date: "2026-11-15" },
  "T-M2/toefl-reading-skills": { batch: 8, date: "2026-11-15" },
  "T-M3/toefl-listening-overview": { batch: 8, date: "2026-11-15" },
  "T-M3/toefl-listening-tasks": { batch: 8, date: "2026-11-15" },
  "T-M3/toefl-listening-skills": { batch: 8, date: "2026-11-15" },
  "T-M4/toefl-writing-overview": { batch: 8, date: "2026-11-15" },
  "T-M4/toefl-build-sentence": { batch: 8, date: "2026-11-15" },
  "T-M4/toefl-email": { batch: 8, date: "2026-11-15" },
  "T-M4/toefl-discussion": { batch: 8, date: "2026-11-15" },
  "T-M5/toefl-speaking-overview": { batch: 8, date: "2026-11-15" },
  "T-M5/toefl-listen-repeat": { batch: 8, date: "2026-11-15" },
  "T-M5/toefl-interview": { batch: 8, date: "2026-11-15" },
  "T-M6/toefl-language-words": { batch: 8, date: "2026-11-15" },
  "T-M6/toefl-language-sentences": { batch: 8, date: "2026-11-15" },
  "T-M6/toefl-language-expression": { batch: 8, date: "2026-11-15" },
  "T-M7/toefl-practice-system": { batch: 8, date: "2026-11-15" },
  "T-M7/toefl-adaptive-practice": { batch: 8, date: "2026-11-15" },
  "T-M7/toefl-performance": { batch: 8, date: "2026-11-15" },
};

export const TEXTBOOK_MANIFEST: TextbookChapterRow[] = ALL_MODULES.flatMap((m) =>
  m.chapters.map((ch) => {
    const key = `${m.code}/${ch.slug}`;
    const hit = DELIVERED[key];
    return {
      moduleCode: m.code,
      chapterSlug: ch.slug,
      chapterTitle: ch.title,
      academy: m.academy,
      lessons: ch.lessons.map((l) => l.slug),
      standard: "v3-textbook" as const,
      status: hit ? ("delivered" as const) : ("planned" as const),
      batch: hit?.batch ?? null,
      deliveredAt: hit?.date ?? null,
    };
  }),
);

// ---------------------------------------------------------------------------
// Authored-lesson resolution
// ---------------------------------------------------------------------------

export type AuthoredLessonRef = {
  lesson: LessonSpec;
  courseSlug: string;
  moduleSlug: string;
  unitSlug: string;
};

function authoredLessons(): Map<string, AuthoredLessonRef> {
  const map = new Map<string, AuthoredLessonRef>();
  for (const course of [...IELTS_COURSES, ...TOEFL_COURSES]) {
    for (const mod of course.modules) {
      for (const unit of mod.units) {
        for (const lesson of unit.lessons) {
          map.set(lesson.slug, { lesson, courseSlug: course.slug, moduleSlug: mod.slug, unitSlug: unit.slug });
        }
      }
    }
  }
  return map;
}

// ---------------------------------------------------------------------------
// Teaching-word accounting (A–E, F, I, M–N blocks; excludes practice,
// assignment and homework, which are measured by their own rules)
// ---------------------------------------------------------------------------

const WORD_RE = /[A-Za-z0-9'’]+(?:-[A-Za-z0-9'’]+)*/g;
const words = (s: string): number => (s ? (s.match(WORD_RE) ?? []).length : 0);

function blockTeachingWords(b: CmsBlock): number {
  switch (b.type) {
    case "text":
    case "heading":
    case "note":
    case "warning":
      return words(b.text);
    case "lesson-intro":
      return words(b.text) + (b.beforeYouStart ?? []).reduce((a, s) => a + words(s), 0);
    case "definition":
      return (
        words(b.term) + words(b.partOfSpeech ?? "") + words(b.definition) +
        words(b.example?.english ?? "") + words(b.example?.translation ?? "")
      );
    case "example":
      return (
        words(b.title ?? "") +
        b.items.reduce(
          (a, it) => a + words(it.english) + words(it.translation ?? "") + words(it.note ?? ""),
          0,
        ) +
        words(b.note ?? "")
      );
    case "table":
      return (
        words(b.title ?? "") + (b.headers ?? []).reduce((a, s) => a + words(s), 0) +
        (b.rows ?? []).reduce((a, r) => a + (r ?? []).reduce((x, s) => x + words(s), 0), 0) +
        words(b.caption ?? "")
      );
    case "grammar-rule":
      return (
        words(b.title) + words(b.rule) + words(b.explanation ?? "") +
        b.examples.reduce((a, p) => a + words(p.english) + words(p.translation), 0) +
        (b.exceptions ?? []).reduce((a, s) => a + words(s), 0)
      );
    case "vocabulary-list":
      return (
        words(b.title ?? "") +
        b.words.reduce(
          (a, w) =>
            a + words(w.word) + words(w.partOfSpeech) + words(w.definition) +
            words(w.translation) + words(w.example?.english ?? ""),
          0,
        )
      );
    case "dialogue":
      return (
        words(b.title ?? "") + words(b.context ?? "") +
        b.lines.reduce((a, l) => a + words(l.speaker) + words(l.text) + words(l.translation ?? ""), 0)
      );
    case "audio":
      return words(b.label ?? "") + words(b.text ?? "") + words(b.translation ?? "");
    case "sentence-diagram":
      return words(b.sentence) + words(b.translation ?? "") + b.parts.reduce((a, p) => a + words(p.label) + words(p.text), 0);
    case "usage":
      return (
        words(b.title ?? "") + words(b.text ?? "") +
        b.items.reduce((a, i) => a + words(i.situation) + words(i.example) + words(i.note ?? ""), 0)
      );
    case "steps":
      return (
        words(b.title) + words(b.intro ?? "") +
        b.steps.reduce(
          (a, s) => a + words(s.title) + words(s.text) + (s.examples ?? []).reduce((x, e) => x + words(e.english), 0),
          0,
        )
      );
    case "comparison":
      return (
        words(b.title) + words(b.intro ?? "") + words(b.columns[0]) + words(b.columns[1]) +
        b.rows.reduce((a, r) => a + words(r.aspect) + words(r.left) + words(r.right), 0) +
        words(b.verdict ?? "")
      );
    case "mistakes":
      return (
        words(b.title ?? "") +
        b.items.reduce((a, m) => a + words(m.wrong) + words(m.right) + words(m.reason), 0)
      );
    case "four-skills":
      return (
        words(b.title ?? "") + words(b.reading.text) + words(b.reading.task ?? "") +
        words(b.writing.task) + (b.writing.guide ?? []).reduce((a, s) => a + words(s), 0) +
        words(b.writing.model ?? "") + words(b.listening.script) + words(b.listening.task ?? "") +
        words(b.speaking.task) + (b.speaking.frames ?? []).reduce((a, s) => a + words(s), 0) +
        (b.speaking.checklist ?? []).reduce((a, s) => a + words(s), 0)
      );
    case "summary":
      return words(b.title ?? "") + b.points.reduce((a, s) => a + words(s), 0);
    case "revision":
      return (
        words(b.title ?? "") + words(b.intro ?? "") +
        b.items.reduce(
          (a, i) =>
            a + words(i.question) + i.options.reduce((x, s) => x + words(s), 0) +
            words(i.explanation) + words(i.from ?? ""),
          0,
        )
      );
    case "language-support":
      return words(b.title ?? "") + b.entries.reduce((a, e) => a + words(e.english) + words(e.ur ?? "") + words(e.hi ?? ""), 0);
    case "image":
      return words(b.alt) + words(b.caption ?? "");
    case "video":
      return words(b.title) + words(b.note ?? "");
    default:
      return 0; // practice / assignment / homework / asset blocks are not teaching prose
  }
}

export function lessonTeachingWords(lesson: LessonSpec): number {
  return lesson.blocks.reduce((a, b) => a + blockTeachingWords(b as CmsBlock), 0);
}

// ---------------------------------------------------------------------------
// Placeholder and duplicate detection
// ---------------------------------------------------------------------------

const PLACEHOLDER_PHRASES = [
  "coming soon",
  "learn more about this topic",
  "practice to improve your skills",
  "to be added",
  "placeholder",
];

const norm = (s: string): string =>
  s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();

function blockSentences(b: CmsBlock): string[] {
  const out: string[] = [];
  const push = (s: string) => {
    for (const part of s.split(/[.!?]+/)) {
      const t = norm(part);
      if (t.split(" ").length >= 8) out.push(t);
    }
  };
  switch (b.type) {
    case "text":
      push(b.text);
      break;
    case "example":
      b.items.forEach((it) => push(it.english));
      break;
    case "steps":
      b.steps.forEach((s) => push(s.text));
      break;
    case "mistakes":
      b.items.forEach((m) => push(m.wrong));
      break;
    case "table":
      (b.rows ?? []).forEach((r) => (r ?? []).forEach(push));
      break;
    default:
      break;
  }
  return out;
}

// ---------------------------------------------------------------------------
// The lesson validator
// ---------------------------------------------------------------------------

export type TextbookValidationResult = {
  issues: string[];
  stats: {
    chaptersDelivered: number;
    chaptersPlanned: number;
    lessonsChecked: number;
    questionsChecked: number;
    teachingWords: number;
    exampleItems: number;
  };
};

const ORIENTATION_MODULES = new Set(["I-M1", "T-M1"]);

const RELEVANCE_ROWS = ["Section", "Task & question types", "What is assessed", "Why this matters"];
const STRATEGY_ROWS = ["Before you start", "While the clock runs", "If you are stuck", "Final minutes"];

function hasTitledTable(blocks: CmsBlock[], title: string, rowLabels: string[]): boolean {
  return blocks.some((b) => {
    if (b.type !== "table") return false;
    if (b.title !== title) return false;
    const labels = new Set((b.rows ?? []).map((r) => (r?.[0] ?? "").trim()));
    return rowLabels.every((l) => labels.has(l));
  });
}

function validateLesson(
  ref: AuthoredLessonRef,
  moduleCode: string,
  issues: string[],
  stats: { lessonsChecked: number; questionsChecked: number },
): void {
  const { lesson } = ref;
  const tag = lesson.slug;
  const blocks = lesson.blocks as CmsBlock[];
  stats.lessonsChecked += 1;

  // A — lesson-intro first
  const first = blocks[0];
  if (!first || first.type !== "lesson-intro") {
    issues.push(`${tag}: first block must be lesson-intro (found ${first?.type ?? "none"})`);
  } else {
    if (words((first as { text: string }).text) < 40) issues.push(`${tag}: lesson-intro text under 40 words`);
    if (((first as { beforeYouStart?: string[] }).beforeYouStart ?? []).length < 2) {
      issues.push(`${tag}: lesson-intro needs ≥ 2 before-you-start abilities`);
    }
  }

  // B — objectives
  if (lesson.objectives.length < 3) issues.push(`${tag}: fewer than 3 objectives`);
  if (lesson.objectives.some((o) => !/^[a-z]/.test(o.trim()))) issues.push(`${tag}: objectives should start with a verb (lowercase)`);

  // C — examination relevance table
  if (!hasTitledTable(blocks, "Examination relevance", RELEVANCE_ROWS)) {
    issues.push(`${tag}: missing "Examination relevance" table with rows ${RELEVANCE_ROWS.join(" / ")}`);
  }

  // D+E — concept teaching
  const steps = blocks.filter((b): b is Extract<CmsBlock, { type: "steps" }> => b.type === "steps");
  const hasConcept =
    steps.length >= 1 ||
    blocks.some((b) => b.type === "grammar-rule") ||
    blocks.some((b) => b.type === "comparison") ||
    blocks.filter((b) => b.type === "definition").length >= 2 ||
    blocks.filter((b) => b.type === "table" && (b.title !== "Examination relevance" && b.title !== "Examination strategy" && b.title !== "Why this model works") && (b.rows ?? []).length >= 3).length >= 2 ||
    blocks.filter((b) => b.type === "text" && words((b as { text: string }).text) >= 40).length >= 3;
  if (!hasConcept) issues.push(`${tag}: no concept teaching (steps / grammar-rule / substantive text)`);
  if (steps.length > 0 && steps.some((s) => s.steps.length < 3)) {
    issues.push(`${tag}: a steps block has fewer than 3 steps`);
  }

  // F — worked examples
  const exampleItems = blocks.flatMap((b) => (b.type === "example" ? (b as { items: { english: string; note?: string }[] }).items : []));
  if (exampleItems.length < 6) issues.push(`${tag}: ${exampleItems.length} worked examples (need ≥ 6)`);
  const noted = exampleItems.filter((i) => (i.note ?? "").length > 0).length;
  if (exampleItems.length > 0 && noted / exampleItems.length < 0.6) {
    issues.push(`${tag}: only ${noted}/${exampleItems.length} examples carry teaching notes (need ≥ 60%)`);
  }

  // G+H — model answers where the lesson produces constructed output
  if (lesson.assignment) {
    const fourSkills = blocks.find((b): b is Extract<CmsBlock, { type: "four-skills" }> => b.type === "four-skills");
    if (!fourSkills) {
      issues.push(`${tag}: lesson carries an assignment but no four-skills model block`);
    } else if (!fourSkills.writing.model && !fourSkills.speaking.frames?.length) {
      issues.push(`${tag}: four-skills block carries no model answer / frames`);
    }
    if (!hasTitledTable(blocks, "Why this model works", [])) {
      // H is required together with G — table with the analysis rows
      const analysis = blocks.find(
        (b) =>
          b.type === "table" &&
          b.title === "Why this model works" &&
          (b.rows ?? []).length >= 4,
      );
      if (!analysis) issues.push(`${tag}: missing "Why this model works" analytical table (≥ 4 rows)`);
    }
  }

  // I — common mistakes
  const mistakes = blocks.filter((b): b is Extract<CmsBlock, { type: "mistakes" }> => b.type === "mistakes");
  if (mistakes.length === 0 || mistakes.some((m) => m.items.length < 3)) {
    issues.push(`${tag}: needs a mistakes block with ≥ 3 wrong→right→reason items`);
  }

  // M — examination strategy table
  if (!hasTitledTable(blocks, "Examination strategy", STRATEGY_ROWS)) {
    issues.push(`${tag}: missing "Examination strategy" table with rows ${STRATEGY_ROWS.join(" / ")}`);
  }

  // N — summary + revision
  const summary = blocks.find((b): b is Extract<CmsBlock, { type: "summary" }> => b.type === "summary");
  if (!summary || summary.points.length < 4) issues.push(`${tag}: needs a summary block with ≥ 4 points`);
  const revision = blocks.find((b): b is Extract<CmsBlock, { type: "revision" }> => b.type === "revision");
  if (!revision || revision.items.length < 3) {
    issues.push(`${tag}: needs a revision block with ≥ 3 items`);
  } else if (revision.items.some((i) => !(i.from ?? "").trim()) && !["ielts-what-and-why", "toefl-what-and-why"].includes(tag)) {
    issues.push(`${tag}: revision items must say which earlier lesson each comes from`);
  }

  // O — homework
  if ((lesson.homework ?? []).length < 2) issues.push(`${tag}: fewer than 2 homework tasks`);

  // Depth floors
  const teachingWords = lessonTeachingWords(lesson);
  const floor = ORIENTATION_MODULES.has(moduleCode) ? 350 : 500;
  if (teachingWords < floor) {
    issues.push(`${tag}: ${teachingWords} teaching words (floor ${floor} for ${moduleCode})`);
  }
  if (blocks.length < 10) issues.push(`${tag}: only ${blocks.length} blocks (floor 10)`);

  // J/K/L — practice quantity and feedback quality
  const questions = lesson.questions ?? [];
  stats.questionsChecked += questions.length;
  if (questions.length < 5) issues.push(`${tag}: only ${questions.length} questions (need ≥ 5)`);
  const guided = questions.filter((q) => (q.hints ?? []).length > 0);
  const independent = questions.filter((q) => (q.hints ?? []).length === 0);
  if (guided.length < 2) issues.push(`${tag}: need ≥ 2 guided questions (with hints)`);
  if (independent.length < 2) issues.push(`${tag}: need ≥ 2 independent questions (no hints)`);
  for (const [qi, q] of questions.entries()) {
    const qtag = `${tag}-q${qi + 1}`;
    const fbk = q.feedback;
    if (!fbk) { issues.push(`${qtag}: missing feedback`); continue; }
    if (words(fbk.explanation) < 15) issues.push(`${qtag}: feedback explanation under 15 words`);
    const qany = q as Record<string, unknown>;
    const distractorTypes = new Set(["mcq", "read-answer", "grammar-identify", "short-answer"]);
    if (distractorTypes.has(String(qany.type)) && !fbk.whyWrong) {
      issues.push(`${qtag}: needs whyWrong (distractor feedback)`);
    }
    // Answer-key verification per type
    switch (qany.type) {
      case "mcq":
      case "read-answer":
      case "grammar-identify": {
        const opts = (qany.options ?? []) as { id: string; text: string }[];
        const correctId = qany.correctOptionId as string;
        if (opts.length < 3) issues.push(`${qtag}: MCQ needs ≥ 3 options`);
        const correct = opts.find((o) => o.id === correctId);
        if (!correct) { issues.push(`${qtag}: correctOptionId not among options`); break; }
        if (fbk.correctAnswer !== correct.text) issues.push(`${qtag}: feedback.correctAnswer does not match the keyed option`);
        break;
      }
      case "multi-select": {
        const opts = (qany.options ?? []) as { id: string; text: string }[];
        const ids = qany.correctOptionIds as string[];
        if (ids.length < 2) issues.push(`${qtag}: multi-select needs ≥ 2 correct options`);
        if (ids.some((id) => !opts.some((o) => o.id === id))) issues.push(`${qtag}: correctOptionIds outside options`);
        break;
      }
      case "match":
      case "vocab-match": {
        const lefts = (qany.leftItems ?? qany.words ?? []) as { id: string }[];
        const pairs = (qany.pairs ?? []) as { leftId: string; rightId?: string; wordId?: string }[];
        if (pairs.length < 3) issues.push(`${qtag}: match needs ≥ 3 pairs`);
        if (pairs.some((p) => !lefts.some((l) => l.id === (p.leftId ?? p.wordId)))) {
          issues.push(`${qtag}: pair references unknown left item`);
        }
        break;
      }
      case "fill-blank":
      case "complete-sentence":
      case "correct-mistake":
      case "translate":
      case "short-answer":
      case "listen-answer":
      case "dictation":
      case "spelling": {
        const accepted = (qany.acceptedAnswers ?? []) as string[];
        if (accepted.length < 1) issues.push(`${qtag}: no acceptedAnswers`);
        if (qany.type === "spelling") {
          const sentence = qany.sentence as string;
          if (!sentence.includes(qany.misspelled as string)) issues.push(`${qtag}: misspelled form not present in sentence`);
        }
        if (qany.type === "fill-blank" && !(qany.sentence as string).includes("___")) {
          issues.push(`${qtag}: fill-blank sentence lacks ___`);
        }
        break;
      }
      case "write-response": {
        if (((qany.minWords as number) ?? 0) < 20) issues.push(`${qtag}: write-response minWords under 20`);
        if (((qany.mustInclude ?? []) as string[]).length < 3) issues.push(`${qtag}: write-response needs ≥ 3 mustInclude keywords`);
        break;
      }
      case "speak-response": {
        if (((qany.mustSay ?? []) as string[]).length < 3) issues.push(`${qtag}: speak-response needs ≥ 3 mustSay phrases`);
        if (((qany.targetPhrases ?? []) as string[]).length < 2) issues.push(`${qtag}: speak-response needs ≥ 2 targetPhrases`);
        break;
      }
      default:
        break;
    }
  }

  // Placeholders
  const allText = JSON.stringify(blocks).toLowerCase();
  for (const phrase of PLACEHOLDER_PHRASES) {
    if (allText.includes(phrase)) issues.push(`${tag}: placeholder phrase "${phrase}"`);
  }
}

export function validateTextbook(): TextbookValidationResult {
  const issues: string[] = [];
  const authored = authoredLessons();
  const stats = { lessonsChecked: 0, questionsChecked: 0, teachingWords: 0, exampleItems: 0 };

  // 1. Every delivered chapter: all its lessons are authored at v3 depth.
  for (const row of TEXTBOOK_MANIFEST.filter((r) => r.status === "delivered")) {
    for (const slug of row.lessons) {
      const ref = authored.get(slug);
      if (!ref) {
        issues.push(`${row.moduleCode}/${row.chapterSlug}: lesson ${slug} is delivered but not in the authored data`);
        continue;
      }
      validateLesson(ref, row.moduleCode, issues, stats);
      stats.teachingWords += lessonTeachingWords(ref.lesson);
      stats.exampleItems += (ref.lesson.blocks as CmsBlock[]).flatMap(
        (b) => (b.type === "example" ? (b as { items: unknown[] }).items : []),
      ).length;
    }
  }

  // 2. Delivered lessons must not duplicate each other's sentences.
  const seen = new Map<string, string>();
  for (const row of TEXTBOOK_MANIFEST.filter((r) => r.status === "delivered")) {
    for (const slug of row.lessons) {
      const ref = authored.get(slug);
      if (!ref) continue;
      for (const b of ref.lesson.blocks as CmsBlock[]) {
        for (const sentence of blockSentences(b)) {
          const owner = seen.get(sentence);
          if (owner) {
            issues.push(`duplicate sentence in ${slug} (also in ${owner}): "${sentence.slice(0, 60)}…"`);
          } else {
            seen.set(sentence, slug);
          }
        }
      }
    }
  }

  const delivered = TEXTBOOK_MANIFEST.filter((r) => r.status === "delivered");
  return {
    issues,
    stats: {
      chaptersDelivered: delivered.length,
      chaptersPlanned: TEXTBOOK_MANIFEST.length,
      lessonsChecked: stats.lessonsChecked,
      questionsChecked: stats.questionsChecked,
      teachingWords: stats.teachingWords,
      exampleItems: stats.exampleItems,
    },
  };
}

// ---------------------------------------------------------------------------
// Standalone batch checking (PROMPT 44 authoring workflow)
// ---------------------------------------------------------------------------

/**
 * Validate a batch of authored lessons outside the manifest — used by
 * scripts/check-lesson-file.ts while a production batch is being written,
 * so authors get the full v3 rule set per file before integration.
 * Includes the duplicate-sentence check within the batch (cross-file
 * duplicates are caught by validateTextbook at integration time).
 */
export function validateLessonsStandalone(
  lessons: LessonSpec[],
  moduleCode: string,
): { issues: string[]; stats: { lessonsChecked: number; questionsChecked: number; teachingWords: number; exampleItems: number } } {
  const issues: string[] = [];
  const stats = { lessonsChecked: 0, questionsChecked: 0, teachingWords: 0, exampleItems: 0 };
  const seen = new Map<string, string>();

  for (const lesson of lessons) {
    const ref: AuthoredLessonRef = {
      lesson,
      courseSlug: "batch-check",
      moduleSlug: "batch-check",
      unitSlug: "batch-check",
    };
    validateLesson(ref, moduleCode, issues, stats);
    stats.teachingWords += lessonTeachingWords(lesson);
    stats.exampleItems += (lesson.blocks as CmsBlock[]).flatMap(
      (b) => (b.type === "example" ? (b as { items: unknown[] }).items : []),
    ).length;
    for (const b of lesson.blocks as CmsBlock[]) {
      for (const sentence of blockSentences(b)) {
        const owner = seen.get(sentence);
        if (owner) {
          issues.push(`duplicate sentence in ${lesson.slug} (also in ${owner}): "${sentence.slice(0, 60)}…"`);
        } else {
          seen.set(sentence, lesson.slug);
        }
      }
    }
  }
  return { issues, stats };
}
