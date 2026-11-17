/// <reference types="bun-types" />
/**
 * Core English Programme test suite (PROMPT 34): validates the complete
 * 56-chapter curriculum blueprint as authored data, then seeds it into the
 * CMS (test database) and verifies the database reflects the blueprint —
 * levels, courses, modules, chapters, lessons, blocks, questions and the
 * prerequisite chain — plus the catalogue integration (flagship path,
 * level labels, chapter grouping).
 *
 * CEFR levels are used as a curriculum reference only — never as a claim
 * of official certification.
 */

import { beforeAll, describe, expect, it } from "bun:test";
import { spawnSync } from "node:child_process";
import {
  PROGRAMME_CHAPTERS,
  PROGRAMME_LEVELS,
  PROGRAMME_LESSONS,
  chapterById,
  programmeTotals,
  strandCoverage,
  validateProgramme,
} from "@/data/programme";
import { STRANDS, levelById } from "@/data/programme";
import { db } from "@/lib/db";
import { buildCatalogue } from "@/lib/catalogue/service";
import { LEARNING_PATHS } from "@/lib/catalogue/paths";

const totals = programmeTotals();

describe("programme — the 56-chapter blueprint", () => {
  it("passes every data guarantee", () => {
    const issues = validateProgramme();
    expect(issues).toEqual([]);
  });

  it("is exactly six levels with the specified chapter counts", () => {
    expect(PROGRAMME_LEVELS).toHaveLength(6);
    expect(PROGRAMME_LEVELS.map((l) => l.cefr)).toEqual(["Pre-A1", "A1", "A2", "B1", "B2", "C1"]);
    expect(PROGRAMME_CHAPTERS).toHaveLength(56);
    const counts: Record<string, number> = { "pre-a1": 0, a1: 0, a2: 0, b1: 0, b2: 0, c1: 0 };
    for (const chapter of PROGRAMME_CHAPTERS) counts[chapter.levelId] += 1;
    expect(counts).toEqual({ "pre-a1": 8, a1: 10, a2: 10, b1: 10, b2: 10, c1: 8 });
    expect(PROGRAMME_CHAPTERS.map((c) => c.number)).toEqual(
      Array.from({ length: 56 }, (_, i) => i + 1),
    );
  });

  it("numbers chapters CH-01..CH-56 with matching slugs", () => {
    for (const chapter of PROGRAMME_CHAPTERS) {
      expect(chapter.id).toBe(`CH-${String(chapter.number).padStart(2, "0")}`);
      expect(chapter.slug).toBe(`ch-${String(chapter.number).padStart(2, "0")}`);
    }
  });

  it("keeps prerequisites strictly earlier and the sequence educational", () => {
    const first = chapterById("CH-01")!;
    expect(first.prerequisites).toEqual([]);
    // Spot checks: the sequence honours real dependency logic.
    expect(chapterById("CH-13")!.prerequisites).toContain("CH-12"); // present simple needs be/have/do
    expect(chapterById("CH-20")!.prerequisites).toContain("CH-19"); // past continuous needs past simple
    expect(chapterById("CH-22")!.prerequisites).toContain("CH-19"); // present perfect needs past forms
    expect(chapterById("CH-32")!.prerequisites).toContain("CH-31"); // conditionals need aspect control
    expect(chapterById("CH-40")!.prerequisites).toContain("CH-32"); // third conditional needs conditionals
    expect(chapterById("CH-56")!.prerequisites).toContain("CH-55");
    for (const chapter of PROGRAMME_CHAPTERS) {
      for (const prereq of chapter.prerequisites) {
        const target = chapterById(prereq)!;
        expect(target.number).toBeLessThan(chapter.number);
      }
    }
  });

  it("is never a shell: every chapter and lesson is complete", () => {
    for (const chapter of PROGRAMME_CHAPTERS) {
      expect(chapter.description.length).toBeGreaterThanOrEqual(80);
      expect(chapter.objectives.length).toBeGreaterThanOrEqual(3);
      expect(chapter.assessmentRequirements.length).toBeGreaterThanOrEqual(40);
      expect(chapter.completionCriteria.length).toBeGreaterThanOrEqual(40);
      expect(chapter.lessons.length).toBeGreaterThanOrEqual(4);
      expect(chapter.lessonCount).toBe(chapter.lessons.length);
    }
    for (const lesson of PROGRAMME_LESSONS) {
      expect(lesson.outcomes.length).toBeGreaterThanOrEqual(2);
      expect(lesson.blocks.length).toBeGreaterThanOrEqual(3);
      expect(lesson.assignment).toBeDefined();
      expect(lesson.minutes).toBeGreaterThanOrEqual(15);
    }
  });

  it("contains no near-identical cloned lessons", () => {
    const titles = PROGRAMME_LESSONS.map((l) => l.title);
    expect(new Set(titles).size).toBe(titles.length); // globally unique titles
    for (const chapter of PROGRAMME_CHAPTERS) {
      const prompts = chapter.lessons.flatMap((l) => l.questions.map((q) => q.prompt));
      expect(new Set(prompts).size).toBe(prompts.length); // no duplicated questions
    }
  });

  it("carries real bank questions and totals that add up", () => {
    expect(totals.lessons).toBeGreaterThan(250);
    expect(totals.questions).toBeGreaterThanOrEqual(160);
    expect(totals.assignments).toBe(totals.lessons);
    expect(totals.hours).toBeGreaterThan(90);
    expect(totals.blocks).toBeGreaterThan(2000);
    // Chapter durations cover their lessons (+ review allowance).
    for (const chapter of PROGRAMME_CHAPTERS) {
      const minutes = chapter.lessons.reduce((sum, l) => sum + l.minutes, 0);
      expect(chapter.estimatedHours).toBeGreaterThanOrEqual(minutes / 60 - 0.25);
      expect(chapter.estimatedHours).toBeLessThanOrEqual(minutes / 60 + 1.5);
    }
  });

  it("practises all seven parallel strands at every level", () => {
    for (const level of PROGRAMME_LEVELS) {
      const coverage = strandCoverage(level.id);
      for (const strand of STRANDS) {
        expect(coverage[strand]).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("uses CEFR as a reference only, never a certification claim", () => {
    for (const level of PROGRAMME_LEVELS) {
      expect(level.cefrNote).toContain("curriculum reference only");
    }
  });
});

describe("programme — seeded into the CMS database", () => {
  beforeAll(() => {
    // The test chain seeds the programme before bun test; run it directly
    // so this file is self-sufficient even when executed alone.
    const result = spawnSync("bun", ["scripts/seed-programme.ts"], {
      env: { ...process.env, DATABASE_URL: process.env.DATABASE_URL ?? "file:/home/z/my-project/db/test.db" },
    });
    if (result.status !== 0) {
      throw new Error(`programme seed failed: ${result.stderr.toString()}`);
    }
  });

  it("seeds six levels, courses, modules and 56 chapters", async () => {
    const levels = await db.cmsLevel.count({
      where: { slug: { in: PROGRAMME_LEVELS.map((l) => l.slug) } },
    });
    expect(levels).toBe(6);
    const courses = await db.cmsCourse.count({
      where: { slug: { in: PROGRAMME_LEVELS.map((l) => l.courseSlug) }, live: true },
    });
    expect(courses).toBe(6);
    const modules = await db.cmsModule.count({
      where: { slug: { in: PROGRAMME_LEVELS.flatMap((l) => l.modules.map((m) => m.slug)) } },
    });
    expect(modules).toBe(PROGRAMME_LEVELS.reduce((sum, l) => sum + l.modules.length, 0));
    const units = await db.cmsUnit.count({ where: { slug: { startsWith: "ch-" } } });
    expect(units).toBe(56);
  });

  it("seeds every lesson live with objectives, blocks, assignment and questions", async () => {
    const lessons = await db.cmsLesson.findMany({
      where: { slug: { startsWith: "ch-" }, live: true },
      include: { blocks: true },
    });
    expect(lessons).toHaveLength(totals.lessons);
    for (const lesson of lessons) {
      expect(lesson.objectives.length).toBeGreaterThan(2); // JSON array of outcomes
      const hasAssignment = lesson.blocks.some((b) => b.type === "assignment");
      expect(hasAssignment).toBe(true);
      expect(lesson.blocks.length).toBeGreaterThanOrEqual(4);
      expect(lesson.publishedVersion).not.toBeNull();
    }
    // Lesson practice-set questions only — the PROMPT 36 chapter practice
    // bank (ch-XX-pq-NN) is counted separately in tests/practice.test.ts.
    const lessonQuestions = await db.cmsQuestion.count({
      where: { slug: { startsWith: "ch-", contains: "-l-" }, status: "published" },
    });
    expect(lessonQuestions).toBe(totals.questions);
  });

  it("wires the prerequisite chain: lessons sequential, chapters gated", async () => {
    const prereqs = await db.cmsPrerequisite.count({
      where: { lesson: { slug: { startsWith: "ch-" } } },
    });
    // Within-chapter chains (266 lessons - 56 chapter-entry lessons) + chapter gates.
    expect(prereqs).toBeGreaterThanOrEqual(totals.lessons - 56);
    const chapter2 = await db.cmsLesson.findUnique({ where: { slug: "ch-02-l-01" } });
    const chapter1Last = await db.cmsLesson.findUnique({ where: { slug: "ch-01-l-05" } });
    expect(chapter2).not.toBeNull();
    expect(chapter1Last).not.toBeNull();
    const gate = await db.cmsPrerequisite.findFirst({
      where: { lessonId: chapter2!.id, requiresLessonId: chapter1Last!.id },
    });
    expect(gate).not.toBeNull(); // CH-02's first lesson is gated by CH-01's last lesson
  });

  it("enrols the demo learner with honest progress through the programme", async () => {
    const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
    if (!demo) return; // fresh test database without the demo account — enrolment is skipped
    const enrolments = await db.cmsEnrolment.count({
      where: { userId: demo.id, course: { slug: { in: PROGRAMME_LEVELS.map((l) => l.courseSlug) } } },
    });
    expect(enrolments).toBe(6);
    const completed = await db.cmsLessonProgress.count({
      where: { userId: demo.id, status: "completed", lesson: { slug: { startsWith: "ch-" } } },
    });
    expect(completed).toBeGreaterThan(40);
    const inProgress = await db.cmsLessonProgress.findFirst({
      where: { userId: demo.id, status: "in-progress", lesson: { slug: { startsWith: "ch-" } } },
    });
    expect(inProgress).not.toBeNull();
  });

  it("integrates with the catalogue: flagship path, levels and grouping", async () => {
    const payload = await buildCatalogue();
    // The flagship path exists and resolves the six programme courses.
    const flagship = payload.paths.find((p) => p.id === "complete-english-programme")!;
    expect(flagship).toBeDefined();
    expect(flagship.chapterCount).toBe(56);
    expect(flagship.lessonCount).toBe(totals.lessons);
    const courseSteps = flagship.steps.filter((s) => s.kind === "cms-course");
    expect(courseSteps).toHaveLength(6);
    for (const step of courseSteps) {
      expect(step.chapters).not.toBeNull();
      expect(step.chapters!.length).toBeGreaterThan(0);
    }
    // The six programme courses appear with their CEFR labels.
    for (const level of PROGRAMME_LEVELS) {
      const item = payload.items.find((i) => i.id === `course:${level.courseSlug}`);
      expect(item).toBeDefined();
      expect(item!.level).toBe(level.cefr);
      expect(item!.chapterCount).toBeGreaterThan(0);
      expect(item!.lessonCount).toBeGreaterThan(0);
      expect(item!.difficulty).not.toBeNull();
      expect(item!.difficulty!.length).toBeGreaterThan(0);
    }
    // Chapter titles carry the "Chapter NN · Title" convention.
    const preA1 = flagship.steps.find(
      (s) => s.kind === "cms-course" && s.title === "English from Zero",
    )!;
    expect(preA1.chapters!.some((c) => c.title.startsWith("Chapter 01"))).toBe(true);
  });

  it("lists the programme first in the courses catalogue (negative order)", async () => {
    const payload = await buildCatalogue();
    const courseSlugs = payload.items
      .filter((i) => i.format === "course")
      .map((i) => i.href.replace("#/course/", ""));
    const programmeSlugs = PROGRAMME_LEVELS.map((l) => l.courseSlug);
    const firstSix = courseSlugs.slice(0, 6);
    expect(firstSix.every((slug) => programmeSlugs.includes(slug))).toBe(true);
  });

  it("keeps every path definition honest after the programme addition", () => {
    for (const def of LEARNING_PATHS) {
      expect(def.outcomes.length).toBeGreaterThanOrEqual(4);
    }
    // The five original curated paths still exist alongside the flagship.
    const titles = LEARNING_PATHS.map((p) => p.title);
    expect(titles).toContain("English from Zero to Confident Communication");
    expect(titles).toContain("Complete English Grammar");
    expect(titles).toContain("Academic and Professional Writing");
  });

  it("level helper lookups stay consistent", () => {
    for (const chapter of PROGRAMME_CHAPTERS) {
      expect(levelById(chapter.levelId).courseSlug).toBeTruthy();
    }
    expect(levelById("c1").chapterRange).toEqual([49, 56]);
  });
});
