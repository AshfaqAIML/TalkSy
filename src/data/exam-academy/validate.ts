/**
 * Exam Academy blueprint — pure structural validation.
 *
 * Used by scripts/validate-exam-blueprint.ts (CLI report) and
 * tests/exam-blueprint.test.ts (test contract). No database access: the
 * "existing lesson" checks import the authored IELTS sources directly, so
 * the blueprint is validated against the same code the seeder ships.
 *
 * Guarantees enforced (PROMPT 42 + PROMPT 41 constraints):
 *   1. Structure: unique module codes/slugs, unique lesson slugs globally,
 *      unique chapter slugs per module, sane minutes and hours.
 *   2. Migration honesty: every `existing` lesson matches the live authored
 *      data (slug AND title AND minutes); all 55 live IELTS lessons are
 *      placed exactly once; nothing is silently dropped or duplicated.
 *   3. Pathway integrity: module lists resolve; shared modules are exactly
 *      the ones both IELTS pathways use; Academic never includes GT Reading/
 *      Writing and vice versa; module numbering follows the PROMPT 42 order.
 *   4. Prerequisites resolve and form no cycles.
 *   5. Topic coverage: every PROMPT-mandated topic is covered by ≥1 lesson
 *      of the module that must teach it.
 *   6. Score pathways reference real modules and real ladder lessons.
 */

import { IELTS_COURSES } from "@/data/exams/ielts";
import { ALL_MODULES, ALL_PATHWAYS, ALL_TOPIC_REQUIREMENTS } from "./index";
import { IELTS_SCORE_TARGETS, TOEFL_SCORE_TARGETS } from "./score-pathways";
import type { ModulePlan } from "./types";

export type ValidationResult = {
  issues: string[];
  stats: {
    modules: number;
    lessons: number;
    existingLessons: number;
    newLessons: number;
    liveIeltsLessonsPlaced: number;
    topicRequirementsChecked: number;
  };
};

type LiveLesson = { slug: string; title: string; minutes: number; moduleSlug: string };

function liveIeltsLessons(): LiveLesson[] {
  const out: LiveLesson[] = [];
  for (const course of IELTS_COURSES) {
    for (const mod of course.modules) {
      for (const unit of mod.units) {
        for (const lesson of unit.lessons) {
          out.push({ slug: lesson.slug, title: lesson.title, minutes: lesson.minutes, moduleSlug: mod.slug });
        }
      }
    }
  }
  return out;
}

/** Sentinel prerequisites that are not module codes. */
const PREREQUISITE_SENTINELS = new Set(["none", "section-modules"]);

export function validateBlueprint(): ValidationResult {
  const issues: string[] = [];
  const byCode = new Map<string, ModulePlan>();

  // --- 1. Structure ------------------------------------------------------
  const moduleSlugs = new Set<string>();
  const lessonSlugs = new Map<string, string>(); // slug → module code
  for (const mod of ALL_MODULES) {
    if (byCode.has(mod.code)) issues.push(`Duplicate module code: ${mod.code}`);
    byCode.set(mod.code, mod);
    if (moduleSlugs.has(mod.slug)) issues.push(`Duplicate module slug: ${mod.slug}`);
    moduleSlugs.add(mod.slug);
    if (mod.chapters.length === 0) issues.push(`${mod.code}: no chapters`);
    const chapterSlugs = new Set<string>();
    for (const ch of mod.chapters) {
      if (chapterSlugs.has(ch.slug)) issues.push(`${mod.code}: duplicate chapter slug ${ch.slug}`);
      chapterSlugs.add(ch.slug);
      if (ch.lessons.length === 0) issues.push(`${mod.code}/${ch.slug}: no lessons`);
      for (const lesson of ch.lessons) {
        const owner = lessonSlugs.get(lesson.slug);
        if (owner) issues.push(`Lesson ${lesson.slug} appears in both ${owner} and ${mod.code}`);
        lessonSlugs.set(lesson.slug, mod.code);
        if (lesson.minutes < 5 || lesson.minutes > 60) {
          issues.push(`${lesson.slug}: minutes ${lesson.minutes} outside 5–60`);
        }
        if (lesson.topics.length === 0) issues.push(`${lesson.slug}: no topics tagged`);
      }
    }
    const lessonMinutes = mod.chapters.flatMap((c) => c.lessons).reduce((a, l) => a + l.minutes, 0);
    if (mod.estimatedHours < lessonMinutes / 60) {
      issues.push(`${mod.code}: estimatedHours ${mod.estimatedHours} below lesson minutes ${lessonMinutes}`);
    }
    if (mod.description.length < 80) issues.push(`${mod.code}: description too thin`);
    if (mod.learningObjectives.length < 4) issues.push(`${mod.code}: fewer than 4 learning objectives`);
    if (mod.practiceActivities.length < 2) issues.push(`${mod.code}: fewer than 2 practice activities`);
    if (mod.assessments.length < 1) issues.push(`${mod.code}: no assessments`);
    if (mod.completionCriteria.length < 2) issues.push(`${mod.code}: fewer than 2 completion criteria`);
  }

  // --- 2. Migration honesty (existing lessons vs live authored data) -----
  const live = liveIeltsLessons();
  const liveBySlug = new Map(live.map((l) => [l.slug, l]));
  const blueprintLessons = ALL_MODULES.flatMap((m) => m.chapters.flatMap((c) => c.lessons));
  const placedLive = new Set<string>();

  for (const lesson of blueprintLessons.filter((l) => l.origin === "existing")) {
    if (lesson.slug.startsWith("toefl-")) continue; // TOEFL authored data is checked by the textbook validator
    const match = liveBySlug.get(lesson.slug);
    if (!match) {
      issues.push(`Existing lesson ${lesson.slug} does not exist in the live IELTS data`);
      continue;
    }
    if (match.title !== lesson.title) {
      issues.push(`Existing lesson ${lesson.slug}: title drift (live "${match.title}" vs blueprint "${lesson.title}")`);
    }
    if (match.minutes !== lesson.minutes) {
      issues.push(`Existing lesson ${lesson.slug}: minutes drift (live ${match.minutes} vs blueprint ${lesson.minutes})`);
    }
    if (placedLive.has(lesson.slug)) issues.push(`Live lesson ${lesson.slug} placed twice in the blueprint`);
    placedLive.add(lesson.slug);
  }
  for (const l of live) {
    if (!placedLive.has(l.slug)) {
      issues.push(`Live IELTS lesson ${l.slug} (${l.moduleSlug}) is NOT placed in the blueprint — nothing may be dropped`);
    }
  }
  for (const mod of ALL_MODULES.filter((m) => m.academy === "toefl")) {
    for (const lesson of mod.chapters.flatMap((c) => c.lessons)) {
      if (lesson.origin === "existing" && !lesson.slug.startsWith("toefl-")) {
        issues.push(`TOEFL lesson ${lesson.slug} marked existing without authored data`);
      }
    }
  }

  // --- 3. Pathway integrity ----------------------------------------------
  const ieltsAcademic = ALL_PATHWAYS.find((p) => p.key === "ielts-academic");
  const ieltsGeneral = ALL_PATHWAYS.find((p) => p.key === "ielts-general-training");
  const toefl = ALL_PATHWAYS.find((p) => p.key === "toefl-ibt");
  if (!ieltsAcademic || !ieltsGeneral || !toefl) {
    issues.push("Missing pathway (need ielts-academic, ielts-general-training, toefl-ibt)");
  } else {
    for (const pathway of ALL_PATHWAYS) {
      for (const code of pathway.modules) {
        if (!byCode.has(code)) issues.push(`Pathway ${pathway.key}: unknown module ${code}`);
      }
    }
    if (ieltsAcademic.modules.some((c) => c.startsWith("IG-"))) {
      issues.push("Academic pathway must not include GT track modules");
    }
    if (ieltsGeneral.modules.some((c) => c.startsWith("IA-"))) {
      issues.push("General Training pathway must not include Academic track modules");
    }
    // Module.pathways must agree with pathway membership.
    for (const mod of ALL_MODULES) {
      for (const key of mod.pathways) {
        const pathway = ALL_PATHWAYS.find((p) => p.key === key);
        if (!pathway) {
          issues.push(`${mod.code}: unknown pathway key ${key}`);
        } else if (!pathway.modules.includes(mod.code)) {
          issues.push(`${mod.code}: claims pathway ${key} but the pathway does not list it`);
        }
      }
      const listedIn = ALL_PATHWAYS.filter((p) => p.modules.includes(mod.code)).map((p) => p.key);
      for (const key of listedIn) {
        if (!mod.pathways.includes(key as ModulePlan["pathways"][number])) {
          issues.push(`${mod.code}: listed in pathway ${key} but module does not declare it`);
        }
      }
    }
    // Prompt-mandated module sets and order.
    const academicTitles = ieltsAcademic.modules.map((c) => byCode.get(c)?.title ?? "");
    const expectedAcademicNumbering = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const academicNumbers = academicTitles.map((t) => Number(/^Module (\d+) — /.exec(t)?.[1] ?? 0));
    if (JSON.stringify(academicNumbers) !== JSON.stringify(expectedAcademicNumbering)) {
      issues.push(`Academic pathway module numbering/order wrong: ${academicNumbers.join(",")}`);
    }
    if (academicTitles[0] !== "Module 1 — IELTS Fundamentals") issues.push("Academic M1 must be IELTS Fundamentals");
    if (academicTitles[2] !== "Module 3 — Academic Reading Mastery") issues.push("Academic M3 must be Academic Reading Mastery");
    if (academicTitles[3] !== "Module 4 — Academic Writing Task 1") issues.push("Academic M4 must be Academic Writing Task 1");
    if (academicTitles[4] !== "Module 5 — Academic Writing Task 2") issues.push("Academic M5 must be Academic Writing Task 2");
    if (academicTitles[9] !== "Module 10 — Full Examination Practice") issues.push("Academic M10 must be Full Examination Practice");

    const toeflTitles = toefl.modules.map((c) => byCode.get(c)?.title ?? "");
    const expectedToefl = [
      "Module 1 — TOEFL Fundamentals",
      "Module 2 — Reading",
      "Module 3 — Listening",
      "Module 4 — Writing",
      "Module 5 — Speaking",
      "Module 6 — TOEFL Grammar and Vocabulary",
      "Module 7 — Full TOEFL Practice",
    ];
    if (JSON.stringify(toeflTitles) !== JSON.stringify(expectedToefl)) {
      issues.push(`TOEFL pathway module set/order wrong: ${toeflTitles.join(" | ")}`);
    }
    // Shared modules must be exactly those in both IELTS pathways.
    const shared = new Set(ieltsAcademic.modules.filter((c) => ieltsGeneral.modules.includes(c)));
    for (const mod of ALL_MODULES.filter((m) => m.academy === "ielts")) {
      const isShared = mod.pathways.length === 2;
      if (isShared !== shared.has(mod.code)) {
        issues.push(`${mod.code}: shared-module declaration inconsistent with pathway membership`);
      }
    }
  }

  // --- 4. Prerequisites ----------------------------------------------------
  for (const mod of ALL_MODULES) {
    if (mod.prerequisites.length === 0) issues.push(`${mod.code}: no prerequisites declared`);
    for (const pre of mod.prerequisites) {
      if (PREREQUISITE_SENTINELS.has(pre)) continue;
      if (!byCode.has(pre)) issues.push(`${mod.code}: unknown prerequisite ${pre}`);
    }
  }
  // Cycle detection (DFS).
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const visit = (code: string, stack: string[]) => {
    if (visited.has(code)) return;
    if (visiting.has(code)) {
      issues.push(`Prerequisite cycle: ${[...stack, code].join(" → ")}`);
      return;
    }
    visiting.add(code);
    const mod = byCode.get(code);
    if (mod) {
      for (const pre of mod.prerequisites) {
        if (!PREREQUISITE_SENTINELS.has(pre) && byCode.has(pre)) visit(pre, [...stack, code]);
      }
    }
    visiting.delete(code);
    visited.add(code);
  };
  for (const mod of ALL_MODULES) visit(mod.code, []);

  // --- 5. Prompt topic coverage --------------------------------------------
  for (const req of ALL_TOPIC_REQUIREMENTS) {
    const mod = byCode.get(req.moduleCode);
    if (!mod) {
      issues.push(`Topic requirement references unknown module ${req.moduleCode}`);
      continue;
    }
    const covered = new Set(mod.chapters.flatMap((c) => c.lessons).flatMap((l) => l.topics));
    for (const topic of req.topics) {
      if (!covered.has(topic)) {
        issues.push(`${req.moduleCode}: required topic "${topic}" (${req.source}) is not covered by any lesson`);
      }
    }
  }

  // --- 6. Score pathway references -----------------------------------------
  for (const target of IELTS_SCORE_TARGETS) {
    for (const code of target.emphasisModules) {
      if (!byCode.has(code)) issues.push(`IELTS target ${target.band}: unknown emphasis module ${code}`);
    }
    for (const slug of target.ladderLessons) {
      if (!lessonSlugs.has(slug)) issues.push(`IELTS target ${target.band}: ladder lesson ${slug} not defined`);
    }
  }
  for (const target of TOEFL_SCORE_TARGETS) {
    for (const code of target.emphasisModules) {
      if (!byCode.has(code)) issues.push(`TOEFL target ${target.band}: unknown emphasis module ${code}`);
    }
  }
  const ieltsBands = IELTS_SCORE_TARGETS.map((t) => t.band);
  const expectedIeltsBands = ["5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5+"];
  if (JSON.stringify(ieltsBands) !== JSON.stringify(expectedIeltsBands)) {
    issues.push(`IELTS score targets must cover ${expectedIeltsBands.join(", ")} — found ${ieltsBands.join(", ")}`);
  }
  const toeflBands = TOEFL_SCORE_TARGETS.map((t) => t.band);
  const expectedToeflBands = ["3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0"];
  if (JSON.stringify(toeflBands) !== JSON.stringify(expectedToeflBands)) {
    issues.push(`TOEFL score targets must cover ${expectedToeflBands.join(", ")} — found ${toeflBands.join(", ")}`);
  }

  const allLessons = ALL_MODULES.flatMap((m) => m.chapters.flatMap((c) => c.lessons));
  return {
    issues,
    stats: {
      modules: ALL_MODULES.length,
      lessons: allLessons.length,
      existingLessons: allLessons.filter((l) => l.origin === "existing").length,
      newLessons: allLessons.filter((l) => l.origin === "new").length,
      liveIeltsLessonsPlaced: placedLive.size,
      topicRequirementsChecked: ALL_TOPIC_REQUIREMENTS.reduce((a, r) => a + r.topics.length, 0),
    },
  };
}
