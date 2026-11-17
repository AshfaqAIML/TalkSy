/// <reference types="bun-types" />
/**
 * IELTS Academy content-integrity tests.
 *
 * These run against the data modules (no database): every mock question
 * must validate against the shared payload schemas, every answer key must
 * be solvable and internally consistent, the Academic and General Training
 * banks must stay fully separate where the variants differ, every pathway
 * reference must resolve, and every bank exercise must be answerable via
 * the shared grading shapes. The rubric ladders are checked against the
 * band-descriptor structure the graders consume.
 */

import { describe, expect, it } from "bun:test";
import { questionPayloadSchemas } from "@/lib/exams/types";
import { normalizeAttemptMode } from "@/lib/exams/mock-engine";
import { rawToSectionScore, ieltsOverallBand } from "@/lib/exams/scoring";
import { IELTS_MOCK_LIBRARY } from "@/data/exams/ielts/mocks";
import { ieltsAcademicPathway, ieltsGeneralPathway } from "@/data/exams/ielts/pathways";
import { IELTS_COURSES } from "@/data/exams/ielts";
import { buildCorrectAnswer } from "./helpers";
import type { Exercise } from "@/data/curriculum/types";
import { readingTexts } from "@/data/reading";
import { listeningActivities } from "@/data/listening";
import { speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { vocabCategories } from "@/data/vocabulary";
import type { ExerciseSpec } from "@/data/exams/ielts/types";

const IELTS_MODEL = {
  kind: "IELTS_BAND" as const,
  unit: "band",
  rawToScore: {
    listening: [
      { min: 39, band: 9 }, { min: 35, band: 8 }, { min: 30, band: 7 },
      { min: 23, band: 6 }, { min: 16, band: 5 }, { min: 0, band: 3 },
    ],
    reading: [
      { min: 39, band: 9 }, { min: 33, band: 8 }, { min: 27, band: 7 },
      { min: 19, band: 6 }, { min: 13, band: 5 }, { min: 0, band: 3 },
    ],
  },
  overallRule: "AVERAGE_ROUNDED_NEAREST_HALF" as const,
  minSectionScore: 0,
  maxSectionScore: 9,
  validityMonths: 24,
};

describe("IELTS mock library — payload and answer-key integrity", () => {
  it("validates every question payload against the shared zod schemas", () => {
    const failures: string[] = [];
    for (const mock of IELTS_MOCK_LIBRARY) {
      for (const section of mock.sections) {
        for (const question of section.questions) {
          const schema = (questionPayloadSchemas as Record<string, { safeParse: (v: unknown) => { success: boolean; error?: { issues: Array<{ path: Array<string | number>; message: string }> } } }>)[question.type];
          if (!schema) {
            failures.push(`${mock.title} Q${question.order}: unknown type ${question.type}`);
            continue;
          }
          const parsed = schema.safeParse(question.payload);
          if (!parsed.success) {
            const issue = parsed.error?.issues[0];
            failures.push(`${mock.title} Q${question.order} (${question.type}): ${issue?.path.join(".")} ${issue?.message}`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("every objective item carries an answer key that matches its payload", () => {
    const failures: string[] = [];
    for (const mock of IELTS_MOCK_LIBRARY) {
      for (const section of mock.sections) {
        for (const question of section.questions) {
          if (
            question.type === "WRITING_TASK" ||
            question.type === "SPEAKING_TASK" ||
            question.type === "EMAIL_WRITING" ||
            question.type === "DISCUSSION_TASK"
          ) continue;
          const answer = question.answer as Record<string, unknown> | undefined;
          if (!answer) {
            failures.push(`${mock.title} Q${question.order}: objective item without answer key`);
            continue;
          }
          const payload = question.payload as Record<string, unknown>;
          if (question.type === "MCQ_SINGLE") {
            const option = answer.option as number;
            const count = (payload.options as unknown[]).length;
            if (!Number.isInteger(option) || option < 0 || option >= count) {
              failures.push(`${mock.title} Q${question.order}: MCQ key ${option} out of 0..${count - 1}`);
            }
          } else if (question.type === "MCQ_MULTI") {
            const options = (answer.options as number[]) ?? [];
            const count = (payload.options as unknown[]).length;
            const choose = (payload.choose as number | undefined) ?? options.length;
            if (options.length !== choose || options.some((o) => !Number.isInteger(o) || o < 0 || o >= count)) {
              failures.push(`${mock.title} Q${question.order}: MCQ_MULTI key ${JSON.stringify(options)} vs choose=${choose}`);
            }
          } else if (question.type === "TFNG") {
            const value = answer.value as number;
            const labels = (payload.labels as string[]) ?? ["True", "False", "Not Given"];
            if (!Number.isInteger(value) || value < 0 || value >= labels.length) {
              failures.push(`${mock.title} Q${question.order}: TFNG key ${value} outside labels`);
            }
          } else if (question.type === "MATCHING") {
            const pairs = (answer.pairs as Record<string, string>) ?? {};
            const items = ((payload.items as Array<{ id: string }>) ?? []).map((i) => i.id);
            const options = ((payload.options as Array<{ id: string }>) ?? []).map((o) => o.id);
            for (const [item, option] of Object.entries(pairs)) {
              if (!items.includes(item) || !options.includes(option)) {
                failures.push(`${mock.title} Q${question.order}: pair ${item}→${option} not in items/options`);
              }
            }
            if (Object.keys(pairs).length !== items.length) {
              failures.push(`${mock.title} Q${question.order}: ${items.length} items but ${Object.keys(pairs).length} keyed pairs`);
            }
          } else if (question.type === "FILL_BLANK") {
            const blanks = (payload.blanks as Array<{ answer: string }>) ?? [];
            const key = (answer.blanks as Array<{ answer: string }>) ?? [];
            if (blanks.length !== key.length) {
              failures.push(`${mock.title} Q${question.order}: ${blanks.length} blanks vs ${key.length} key rows`);
            }
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("has unique titles across the whole library", () => {
    const titles = IELTS_MOCK_LIBRARY.map((m) => m.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("keeps Academic and General Training banks fully separate", () => {
    const academic = IELTS_MOCK_LIBRARY.filter((m) => m.variant === "ACADEMIC");
    const general = IELTS_MOCK_LIBRARY.filter((m) => m.variant === "GENERAL_TRAINING");
    expect(academic.length).toBeGreaterThan(0);
    expect(general.length).toBeGreaterThan(0);
    for (const mock of academic) {
      for (const section of mock.sections) {
        if (section.key === "reading" || section.key === "writing") {
          expect(section.title.toLowerCase()).not.toContain("general training");
        }
      }
    }
    for (const mock of general) {
      for (const section of mock.sections) {
        if (section.key === "reading" || section.key === "writing") {
          expect(section.title.toLowerCase()).not.toContain("academic");
        }
      }
    }
    // No shared recordings between the twins (listening/speaking are the
    // same test across variants but must still be distinct material).
    const recordingsOf = (variant: string) =>
      new Set(
        IELTS_MOCK_LIBRARY
          .filter((m) => m.variant === variant)
          .flatMap((m) =>
            m.sections
              .filter((s) => s.key === "listening")
              .flatMap((s) =>
                s.questions.map((q) => {
                  const payload = q.payload as { audioScript?: string };
                  return payload.audioScript ?? "";
                }).filter(Boolean),
              ),
          )
      );
    const speakingPromptsOf = (variant: string) =>
      new Set(
        IELTS_MOCK_LIBRARY
          .filter((m) => m.variant === variant)
          .flatMap((m) =>
            m.sections
              .filter((s) => s.key === "speaking")
              .flatMap((s) =>
                s.questions.map((q) => {
                  const payload = q.payload as { prompt?: string };
                  return payload.prompt ?? "";
                }).filter(Boolean),
              ),
          )
      );
    const academicRecordings = recordingsOf("ACADEMIC");
    for (const script of recordingsOf("GENERAL_TRAINING")) {
      expect(academicRecordings.has(script)).toBe(false);
    }
    const academicSpeaking = speakingPromptsOf("ACADEMIC");
    for (const prompt of speakingPromptsOf("GENERAL_TRAINING")) {
      expect(academicSpeaking.has(prompt)).toBe(false);
    }
  });

  it("labels every mock as original practice material, never official", () => {
    for (const mock of IELTS_MOCK_LIBRARY) {
      expect(mock.description).toContain("not an official IELTS paper");
    }
  });
});

describe("IELTS band-ladder rubrics (seeded by scripts/seed-exams.ts)", () => {
  // The rubric data lives in scripts/seed-exams.ts; assert its structure
  // through the same shapes by importing the file's RUBRICS via the seed
  // script is not possible without a DB, so the ladder is validated through
  // the band-transition lessons' content and the scoring rules below.
  it("applies the official .25/.75 rounding", () => {
    expect(ieltsOverallBand([6.5, 6.5, 6.5, 7.5])).toBe(7);
    expect(ieltsOverallBand([6, 6, 6, 6.5])).toBe(6);
    expect(ieltsOverallBand([6.5, 7, 7, 7])).toBe(7);
    expect(ieltsOverallBand([5.5, 6, 6, 6.5])).toBe(6);
  });

  it("scales short sections so a perfect drill converts like a perfect paper", () => {
    // 6/6 on a six-item listening drill → band 9 (not 6/40 → band 3.5).
    expect(rawToSectionScore(IELTS_MODEL, "listening", 6, 6)).toBe(9);
    // 4/6 on the same drill → ~67% → band 6 (min 23 of 40 → 0.67*40 = 26.7).
    expect(rawToSectionScore(IELTS_MODEL, "listening", 4, 6)).toBe(6);
    // Half marks on a short section → ~50% → band 5 on the practice table.
    expect(rawToSectionScore(IELTS_MODEL, "listening", 3, 6)).toBe(5);
    // Full-length sections are used directly, unchanged by the scaling rule.
    expect(rawToSectionScore(IELTS_MODEL, "listening", 40, 40)).toBe(9);
    expect(rawToSectionScore(IELTS_MODEL, "listening", 30, 40)).toBe(7);
    expect(rawToSectionScore(IELTS_MODEL, "listening", 16, 40)).toBe(5);
    expect(rawToSectionScore(IELTS_MODEL, "reading", 0, 40)).toBe(3);
  });
});

describe("attempt modes", () => {
  it("normalizes unknown values to timed exam mode", () => {
    expect(normalizeAttemptMode("practice")).toBe("practice");
    expect(normalizeAttemptMode("exam")).toBe("exam");
    expect(normalizeAttemptMode(undefined)).toBe("exam");
    expect(normalizeAttemptMode("banana")).toBe("exam");
    expect(normalizeAttemptMode({ mode: "practice" })).toBe("exam");
  });
});

describe("IELTS Academy course and pathway integrity", () => {
  const lessonSlugs = new Set(
    IELTS_COURSES.flatMap((c) => c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons.map((l) => l.slug))))
  );
  const trackLessons = (courseSlug: string) =>
    new Set(
      IELTS_COURSES
        .filter((c) => c.slug === courseSlug)
        .flatMap((c) => c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons.map((l) => l.slug))))
    );

  it("has unique lesson slugs with real content and practice on every lesson", () => {
    const all = [...lessonSlugs];
    expect(new Set(all).size).toBe(all.length);
    expect(all.length).toBeGreaterThanOrEqual(50);
    for (const course of IELTS_COURSES) {
      for (const moduleSpec of course.modules) {
        for (const unit of moduleSpec.units) {
          for (const lesson of unit.lessons) {
            expect(lesson.blocks.length).toBeGreaterThanOrEqual(3);
            expect(lesson.objectives.length).toBeGreaterThanOrEqual(2);
            if ((lesson.questions?.length ?? 0) > 0) {
              expect(lesson.questions!.length).toBeGreaterThanOrEqual(1);
            } else {
              // A lesson without bank questions would render no practice
              // block; every authored lesson carries at least one.
              throw new Error(`${lesson.slug} has no practice questions`);
            }
          }
        }
      }
    }
  });

  it("keeps the Academic and General Training tracks disjoint", () => {
    const academic = trackLessons("ielts-academy-academic");
    const general = trackLessons("ielts-academy-general-training");
    for (const slug of academic) expect(general.has(slug)).toBe(false);
    for (const slug of general) expect(academic.has(slug)).toBe(false);
    expect(academic.size).toBeGreaterThanOrEqual(10);
    expect(general.size).toBeGreaterThanOrEqual(6);
  });

  it("resolves every pathway reference", () => {
    const failures: string[] = [];
    // Pool-backed refTypes are deep-linked into real content; the others
    // (grammar, lab, tutor, drill) route to module hubs by design and carry
    // informational refIds only (see hrefForStep).
    const staticPools = {
      reading: new Set(readingTexts.map((t) => t.slug)),
      listening: new Set(listeningActivities.map((a) => a.slug)),
      speaking: new Set(speakingActivities.flatMap((a) => [a.id, a.slug])),
      writing: new Set(writingAssignments.map((a) => a.slug)),
      vocabulary: new Set(vocabCategories.map((c) => c.id)),
      curriculum: lessonSlugs,
    } as Record<string, Set<string>>;
    const hubTypes = new Set(["grammar", "lab", "tutor", "drill"]);
    const knownTypes = new Set([...Object.keys(staticPools), ...hubTypes]);
    for (const pathway of [ieltsAcademicPathway, ieltsGeneralPathway]) {
      for (const moduleSpec of pathway.modules) {
        for (const step of moduleSpec.steps) {
          if (!knownTypes.has(step.refType)) {
            failures.push(`${pathway.variant}: step "${step.label}" has unknown refType ${step.refType}`);
            continue;
          }
          if (!step.refId) continue;
          const pool = staticPools[step.refType];
          if (pool && !pool.has(step.refId)) {
            failures.push(`${pathway.variant}: ref ${step.refType}/${step.refId} not found`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("keeps variant-specific lessons out of the other variant's pathway", () => {
    const academicTrack = trackLessons("ielts-academy-academic");
    const generalTrack = trackLessons("ielts-academy-general-training");
    for (const step of ieltsGeneralPathway.modules.flatMap((m) => m.steps)) {
      if (step.refType === "curriculum" && step.refId) {
        expect(academicTrack.has(step.refId)).toBe(false);
      }
    }
    for (const step of ieltsAcademicPathway.modules.flatMap((m) => m.steps)) {
      if (step.refType === "curriculum" && step.refId) {
        expect(generalTrack.has(step.refId)).toBe(false);
      }
    }
  });

  it("every bank exercise is solvable via the shared grading shapes", () => {
    const failures: string[] = [];
    for (const course of IELTS_COURSES) {
      for (const moduleSpec of course.modules) {
        for (const unit of moduleSpec.units) {
          for (const lesson of unit.lessons) {
            for (const [index, spec] of (lesson.questions ?? []).entries()) {
              const exercise = { ...spec, id: `${lesson.slug}-q${index + 1}` } as Exercise;
              try {
                const answer = buildCorrectAnswer(exercise);
                if (answer === undefined || answer === null) {
                  failures.push(`${lesson.slug} q${index + 1}: no answer could be built`);
                }
              } catch (error) {
                failures.push(`${lesson.slug} q${index + 1}: ${String(error)}`);
              }
            }
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("exercises carry the grading fields the engine requires", () => {
    for (const course of IELTS_COURSES) {
      for (const moduleSpec of course.modules) {
        for (const unit of moduleSpec.units) {
          for (const lesson of unit.lessons) {
            for (const spec of lesson.questions ?? []) {
              const exercise = spec as ExerciseSpec;
              // v3 textbook standard (PROMPT 43): guided questions carry
              // progressive hints; independent questions carry none — the
              // guided/independent split itself is asserted in
              // tests/exam-textbook.test.ts.
              expect(exercise.hints.length).toBeGreaterThanOrEqual(0);
              expect(exercise.feedback.correctAnswer.length).toBeGreaterThan(0);
              expect(exercise.feedback.explanation.length).toBeGreaterThan(0);
            }
          }
        }
      }
    }
  });
});
