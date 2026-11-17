/// <reference types="bun-types" />
/**
 * Exam-Academy textbook-standard tests (PROMPT 43).
 *
 * The v3 standard (src/data/exam-academy/textbook-standard.ts) is validated
 * for every chapter the manifest marks delivered: structure floors (lesson
 * anatomy A–O), answer-key verification per exercise type, guided/independent
 * practice split, placeholder bans, duplicate-content bans across delivered
 * lessons, and honest band-comment language. TOEFL bank exercises are also
 * checked for solvability via the shared grading shapes.
 */

import { describe, expect, it } from "bun:test";
import { validateTextbook, TEXTBOOK_MANIFEST } from "@/data/exam-academy/textbook-standard";
import { IELTS_COURSES } from "@/data/exams/ielts";
import { TOEFL_COURSES } from "@/data/exams/toefl";
import { buildCorrectAnswer } from "./helpers";
import type { Exercise } from "@/data/curriculum/types";

describe("Exam Academy textbook standard (PROMPT 43, v3)", () => {
  it("every delivered chapter passes the v3 lesson validator with zero issues", () => {
    const result = validateTextbook();
    expect(result.issues).toEqual([]);
  });

  it("the manifest is resolved against the blueprint with at least the delivered set", () => {
    // PROMPT 44: the five old I-M2 chapters became the four masterclass
    // chapters — 11 delivered chapters (4 I-M1 + 4 I-M2 + 3 T-M1).
    expect(TEXTBOOK_MANIFEST.length).toBeGreaterThanOrEqual(11);
    expect(TEXTBOOK_MANIFEST.filter((r) => r.status === "delivered").length).toBeGreaterThanOrEqual(11);
  });

  it("TOEFL bank exercises are solvable via the shared grading shapes", () => {
    const failures: string[] = [];
    for (const course of TOEFL_COURSES) {
      for (const mod of course.modules) {
        for (const unit of mod.units) {
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

  it("Academic and GT tracks stay disjoint; TOEFL never mixes into IELTS courses", () => {
    const academic = new Set(
      IELTS_COURSES.filter((c) => c.slug === "ielts-academy-academic").flatMap((c) => c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons.map((l) => l.slug)))),
    );
    const general = new Set(
      IELTS_COURSES.filter((c) => c.slug === "ielts-academy-general-training").flatMap((c) => c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons.map((l) => l.slug)))),
    );
    const toefl = new Set(
      TOEFL_COURSES.flatMap((c) => c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons.map((l) => l.slug)))),
    );
    for (const slug of academic) expect(general.has(slug)).toBe(false);
    for (const slug of general) expect(academic.has(slug)).toBe(false);
    for (const slug of toefl) {
      expect(academic.has(slug)).toBe(false);
      expect(general.has(slug)).toBe(false);
    }
  });

  it("guided/independent practice split exists on every delivered v3 lesson", () => {
    const deliveredSlugs = new Set(TEXTBOOK_MANIFEST.filter((r) => r.status === "delivered").flatMap((r) => r.lessons));
    for (const course of [...IELTS_COURSES, ...TOEFL_COURSES]) {
      for (const mod of course.modules) {
        for (const unit of mod.units) {
          for (const lesson of unit.lessons) {
            if (!deliveredSlugs.has(lesson.slug)) continue;
            const questions = lesson.questions ?? [];
            if (questions.length === 0) continue;
            const guided = questions.filter((q) => (q.hints ?? []).length > 0).length;
            const independent = questions.length - guided;
            // v3 floor: at least 2 guided and 2 independent on any lesson with 5+ questions
            if (questions.length >= 5) {
              expect(`${lesson.slug} guided count ${guided}`).toBe(`${lesson.slug} guided count ${Math.max(guided, 2)}`);
              expect(`${lesson.slug} independent count ${independent}`).toBe(`${lesson.slug} independent count ${Math.max(independent, 2)}`);
            }
          }
        }
      }
    }
  });
});
