/// <reference types="bun-types" />
/**
 * TOEFL iBT 2026 Complete Masterclass tests (PROMPT 48).
 *
 *   1. Curriculum completeness: the seven-module academy carries all 46
 *      blueprint lessons with exact slugs, titles and minutes; module and
 *      chapter order matches the blueprint (PROMPT 42 structure, batch 8).
 *   2. Mock library integrity: seven new original mocks — section mocks at
 *      official scale, the full four-section mock at official item counts,
 *      and the three-part adaptive simulation family. Raw-point sums match
 *      the seeded TOEFL_IBT/STANDARD scoring scale (Reading 35, Listening
 *      35, Writing 20 + rubric tasks, Speaking 35 + rubric tasks); every
 *      objective item carries a machine-checkable answer key; COMPLETE_WORDS
 *      masks appear in their context and answers extend their mask prefix;
 *      SENTENCE_RECONSTRUCTION keys carry the engine's dual-key contract;
 *      LISTEN_REPEAT windows follow the official 8/8/10/10/10/12/12 pattern;
 *      grouped listening questions resolve to a section recording.
 *   3. Honesty contracts: every mock description declares original practice
 *      material (never an official ETS test); the adaptive simulations state
 *      the fixed 60% threshold is a practice adaptation; no lesson ties a
 *      national accent to a higher score.
 *   4. Adaptive family: Stage 2 upper items are harder than lower items on
 *      average, and Stage 1 mixes difficulties.
 *   5. Pathway: eight phases, every step carries a refId, every curriculum
 *      refId resolves to an authored lesson, every mock refId resolves to a
 *      real mock title in the combined library.
 */

import { describe, expect, it } from "bun:test";
import { TOEFL_MODULES } from "@/data/exam-academy/toefl";
import { TOEFL_COURSES } from "@/data/exams/toefl";
import { TOEFL_MOCK_LIBRARY } from "@/data/exams/toefl/mocks";
import { toeflPathway } from "@/data/exams/toefl/pathway";

type AnyQuestion = {
  order: number;
  type: string;
  stem?: string;
  payload: unknown;
  answer?: unknown;
  points?: number;
  skills?: string[];
  difficulty?: number;
  explanation?: string;
  source?: string;
  contentStatus?: string;
  group?: string;
};
type AnySection = {
  key: string;
  title: string;
  directions?: string;
  timingSec: number;
  questions: AnyQuestion[];
  audioParts?: Array<{ key: string; label: string; script: string }>;
};
type AnyMock = {
  examKey: string;
  variant: string;
  title: string;
  kind: string;
  lengthLabel: string;
  description: string;
  sections: AnySection[];
};

const OBJECTIVE_TYPES = new Set([
  "MCQ_SINGLE",
  "MCQ_MULTI",
  "COMPLETE_WORDS",
  "SENTENCE_RECONSTRUCTION",
  "LISTEN_REPEAT",
  "DICTATION",
  "FILL_BLANK",
  "TFNG",
  "MATCHING",
]);

function sectionRawPoints(section: AnySection): number {
  return section.questions.reduce((sum, q) => sum + (q.points ?? 1), 0);
}

function allQuestions(mock: AnyMock): AnyQuestion[] {
  return mock.sections.flatMap((s) => s.questions);
}

/** Titles of every TOEFL mock that will exist after seeding. */
const ALL_TOEFL_MOCK_TITLES = new Set([
  "TOEFL iBT Sample Mock 1 (2026 format)",
  "TOEFL Speaking Section Mock (2026 format) 1",
  "TOEFL Writing Section Mock (2026 format) 1",
  ...TOEFL_MOCK_LIBRARY.map((m) => m.title),
]);

describe("TOEFL Academy curriculum (PROMPT 48)", () => {
  const course = TOEFL_COURSES.find((c) => c.slug === "toefl-ibt-academy");
  expect(course).toBeDefined();

  it("registers all seven modules in blueprint order", () => {
    expect(course!.modules.map((m) => m.slug)).toEqual(TOEFL_MODULES.map((m) => m.slug));
  });

  it("carries all 46 blueprint lessons with exact slug, title and minutes", () => {
    const authored = new Map(
      course!.modules.flatMap((m) =>
        m.units.flatMap((u) => u.lessons.map((l) => [l.slug, l] as const)),
      ),
    );
    expect(authored.size).toBe(46);
    const failures: string[] = [];
    for (const mod of TOEFL_MODULES) {
      for (const chapter of mod.chapters) {
        for (const lesson of chapter.lessons) {
          const hit = authored.get(lesson.slug);
          if (!hit) failures.push(`${mod.code}/${lesson.slug}: missing from authored course`);
          else if (hit.title !== lesson.title) failures.push(`${lesson.slug}: title drift`);
          else if (hit.minutes !== lesson.minutes) failures.push(`${lesson.slug}: minutes drift`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("places every lesson under its blueprint chapter (unit slug and order)", () => {
    const failures: string[] = [];
    for (const [index, mod] of TOEFL_MODULES.entries()) {
      const authoredModule = course!.modules[index];
      expect(authoredModule.slug).toBe(mod.slug);
      for (const [chapterIndex, chapter] of mod.chapters.entries()) {
        const unit = authoredModule.units[chapterIndex];
        if (!unit || unit.slug !== chapter.slug) {
          failures.push(`${mod.code} chapter ${chapterIndex + 1}: expected unit ${chapter.slug}`);
          continue;
        }
        if (unit.lessons.length !== chapter.lessons.length) {
          failures.push(`${mod.code}/${chapter.slug}: ${unit.lessons.length} lessons, blueprint wants ${chapter.lessons.length}`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("lesson counts per module: 8/8/10/6/5/6/3", () => {
    const counts = course!.modules.map((m) => m.units.reduce((sum, u) => sum + u.lessons.length, 0));
    expect(counts).toEqual([8, 8, 10, 6, 5, 6, 3]);
  });

  it("keeps pronunciation teaching accent-neutral across the Speaking module", () => {
    const speakingModule = course!.modules.find((m) => m.slug === "toefl-module-5-speaking");
    expect(speakingModule).toBeDefined();
    const text = JSON.stringify(speakingModule).toLowerCase();
    const banned = [
      "british accent is better",
      "american accent is better",
      "native accent scores higher",
      "adopt a native accent",
      "score higher with an american",
      "score higher with a british",
    ];
    for (const phrase of banned) expect(text.includes(phrase)).toBe(false);
  });
});

describe("TOEFL mock library (PROMPT 48)", () => {
  it("ships seven mocks: three section mocks, one full mock, three adaptive stages", () => {
    expect(TOEFL_MOCK_LIBRARY.map((m) => m.title)).toEqual([
      "TOEFL Reading Section Mock (2026 format) 1",
      "TOEFL Listening Section Mock (2026 format) 1",
      "TOEFL Writing Section Mock (2026 format) 2",
      "TOEFL iBT Full Mock (2026 format) 1",
      "TOEFL Adaptive Simulation — Stage 1: Routing module",
      "TOEFL Adaptive Simulation — Stage 2: Upper module",
      "TOEFL Adaptive Simulation — Stage 2: Lower module",
    ]);
    expect(TOEFL_MOCK_LIBRARY.filter((m) => m.kind === "full")).toHaveLength(1);
    expect(TOEFL_MOCK_LIBRARY.filter((m) => m.kind === "section")).toHaveLength(6);
  });

  it("declares original practice material in every description (never an official ETS test)", () => {
    for (const mock of TOEFL_MOCK_LIBRARY) {
      expect(mock.description).toContain("Original EnglishPath practice material");
      expect(mock.description).toContain("not an official ETS test");
      expect(mock.description.length).toBeGreaterThan(80);
    }
  });

  it("raw-point sums match the specification scale", () => {
    const byTitle = new Map(TOEFL_MOCK_LIBRARY.map((m) => [m.title, m] as const));
    const reading = byTitle.get("TOEFL Reading Section Mock (2026 format) 1")!;
    const listening = byTitle.get("TOEFL Listening Section Mock (2026 format) 1")!;
    const writing = byTitle.get("TOEFL Writing Section Mock (2026 format) 2")!;
    const full = byTitle.get("TOEFL iBT Full Mock (2026 format) 1")!;
    const stage1 = byTitle.get("TOEFL Adaptive Simulation — Stage 1: Routing module")!;
    const upper = byTitle.get("TOEFL Adaptive Simulation — Stage 2: Upper module")!;
    const lower = byTitle.get("TOEFL Adaptive Simulation — Stage 2: Lower module")!;

    const raw = (mock: AnyMock, key: string) =>
      sectionRawPoints(mock.sections.find((s) => s.key === key)!);

    expect(raw(reading, "reading")).toBe(35);
    expect(raw(listening, "listening")).toBe(35);
    expect(raw(writing, "writing")).toBe(20);
    expect(raw(full, "reading")).toBe(35);
    expect(raw(full, "listening")).toBe(35);
    expect(raw(full, "writing")).toBe(20);
    expect(raw(full, "speaking")).toBe(35);
    expect(raw(stage1, "reading")).toBe(13);
    expect(raw(stage1, "listening")).toBe(10);
    expect(raw(upper, "reading")).toBe(18);
    expect(raw(upper, "listening")).toBe(8);
    expect(raw(lower, "reading")).toBe(18);
    expect(raw(lower, "listening")).toBe(8);
  });

  it("full mock carries official item counts in official section order", () => {
    const full = TOEFL_MOCK_LIBRARY.find((m) => m.title === "TOEFL iBT Full Mock (2026 format) 1")!;
    expect(full.sections.map((s) => s.key)).toEqual(["reading", "listening", "writing", "speaking"]);
    const reading = full.sections[0];
    // 3 Complete-the-Words texts × 10 masked words = 30 items + 18 comprehension.
    const ctw = reading.questions.filter((q) => q.type === "COMPLETE_WORDS");
    expect(ctw).toHaveLength(3);
    for (const q of ctw) {
      expect(((q.payload as { words?: unknown[] }).words ?? []).length).toBe(10);
    }
    expect(reading.questions.filter((q) => q.type === "MCQ_SINGLE" || q.type === "MCQ_MULTI")).toHaveLength(18);
    const writing = full.sections[2];
    expect(writing.questions.filter((q) => q.type === "SENTENCE_RECONSTRUCTION")).toHaveLength(10);
    expect(writing.questions.filter((q) => q.type === "EMAIL_WRITING")).toHaveLength(1);
    expect(writing.questions.filter((q) => q.type === "DISCUSSION_TASK")).toHaveLength(1);
    const speaking = full.sections[3];
    expect(speaking.questions.filter((q) => q.type === "LISTEN_REPEAT")).toHaveLength(7);
    expect(speaking.questions.filter((q) => q.type === "SPEAKING_TASK")).toHaveLength(4);
  });

  it("every objective question carries a usable answer key and teaching explanation", () => {
    const failures: string[] = [];
    for (const mock of TOEFL_MOCK_LIBRARY as unknown as AnyMock[]) {
      for (const section of mock.sections) {
        for (const q of section.questions) {
          if (OBJECTIVE_TYPES.has(q.type) && !["EMAIL_WRITING", "DISCUSSION_TASK", "SPEAKING_TASK"].includes(q.type)) {
            if (q.answer === null || q.answer === undefined) {
              failures.push(`${mock.title} #${q.order} (${q.type}): no answer key`);
            }
          }
          if (!q.explanation || q.explanation.length < 20) {
            failures.push(`${mock.title} #${q.order}: missing/short explanation`);
          }
          if (q.source !== "original-practice" || q.contentStatus !== "published") {
            failures.push(`${mock.title} #${q.order}: bad source/status`);
          }
          const difficulty = q.difficulty ?? 0;
          if (difficulty < 1 || difficulty > 5) {
            failures.push(`${mock.title} #${q.order}: difficulty ${difficulty} out of 1–5`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("COMPLETE_WORDS items: masks occur in context and answers extend their mask prefix", () => {
    const failures: string[] = [];
    for (const mock of TOEFL_MOCK_LIBRARY as unknown as AnyMock[]) {
      for (const section of mock.sections) {
        for (const q of section.questions.filter((q) => q.type === "COMPLETE_WORDS")) {
          const context = String((q.payload as { context?: string }).context ?? "");
          const words = ((q.payload as { words?: Array<{ masked: string; answer: string }> }).words ?? []);
          const answer = q.answer as { words?: string[]; answer?: string };
          for (const w of words) {
            if (!context.includes(w.masked)) failures.push(`${mock.title} #${q.order}: mask ${w.masked} not in context`);
            if (!w.answer.toLowerCase().startsWith(w.masked.replace(/_+/g, "").toLowerCase())) {
              failures.push(`${mock.title} #${q.order}: answer ${w.answer} does not extend ${w.masked}`);
            }
          }
          if (answer.words?.join(" ") !== words.map((w) => w.answer).join(" ")) {
            failures.push(`${mock.title} #${q.order}: answer.words does not match payload words`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("SENTENCE_RECONSTRUCTION keys satisfy the engine contract (answer.answer present and reassemblable)", () => {
    const failures: string[] = [];
    for (const mock of TOEFL_MOCK_LIBRARY as unknown as AnyMock[]) {
      for (const section of mock.sections) {
        for (const q of section.questions.filter((q) => q.type === "SENTENCE_RECONSTRUCTION")) {
          const answer = q.answer as { answer?: string; text?: string } | null;
          const target = answer?.answer;
          if (!target) {
            failures.push(`${mock.title} #${q.order}: missing answer.answer (engine reads answer.answer ?? answer.words)`);
            continue;
          }
          if (answer?.text && answer.text !== target) {
            failures.push(`${mock.title} #${q.order}: text/answer mismatch`);
          }
          if (String((q.payload as { answer?: string }).answer ?? "") !== target) {
            failures.push(`${mock.title} #${q.order}: payload.answer mismatch`);
          }
          if (((q.payload as { scrambled?: string[] }).scrambled ?? []).length < 5) {
            failures.push(`${mock.title} #${q.order}: fewer than 5 scrambled chunks`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("LISTEN_REPEAT windows follow the official 8/8/10/10/10/12/12 pattern", () => {
    const full = TOEFL_MOCK_LIBRARY.find((m) => m.title === "TOEFL iBT Full Mock (2026 format) 1")!;
    const speaking = full.sections.find((s) => s.key === "speaking")!;
    const windows = speaking.questions
      .filter((q) => q.type === "LISTEN_REPEAT")
      .map((q) => (q.payload as { windowSec: number }).windowSec);
    expect(windows).toEqual([8, 8, 10, 10, 10, 12, 12]);
    for (const q of speaking.questions.filter((q) => q.type === "LISTEN_REPEAT")) {
      const answer = q.answer as { text?: string };
      expect(answer.text).toBe((q.payload as { sentence: string }).sentence);
    }
  });

  it("grouped listening questions resolve to a section recording and carry no stray audioScript", () => {
    const failures: string[] = [];
    for (const mock of TOEFL_MOCK_LIBRARY as unknown as AnyMock[]) {
      for (const section of mock.sections.filter((s) => s.key === "listening")) {
        const partKeys = new Set((section.audioParts ?? []).map((p) => p.key));
        for (const q of section.questions) {
          if (q.group) {
            if (!partKeys.has(q.group)) failures.push(`${mock.title} #${q.order}: group ${q.group} has no audioPart`);
            if ((q.payload as { audioScript?: string }).audioScript !== undefined) {
              failures.push(`${mock.title} #${q.order}: grouped question carries its own audioScript`);
            }
          } else if (q.type === "MCQ_SINGLE" && (q.payload as { audioScript?: string }).audioScript === undefined) {
            failures.push(`${mock.title} #${q.order}: standalone listening item has no audioScript`);
          }
        }
        for (const part of section.audioParts ?? []) {
          if (!part.script || part.script.length < 40) failures.push(`${mock.title}: audioPart ${part.key} has no script`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("MCQ answer indices are in range and multi-select carries choose: 2", () => {
    const failures: string[] = [];
    for (const mock of TOEFL_MOCK_LIBRARY as unknown as AnyMock[]) {
      for (const section of mock.sections) {
        for (const q of section.questions.filter((q) => q.type === "MCQ_SINGLE" || q.type === "MCQ_MULTI")) {
          const options = ((q.payload as { options?: string[] }).options ?? []) as string[];
          if (options.length < 3) failures.push(`${mock.title} #${q.order}: ${options.length} options`);
          if (q.type === "MCQ_SINGLE") {
            const answer = q.answer as { option: number };
            if (answer.option < 0 || answer.option >= options.length) {
              failures.push(`${mock.title} #${q.order}: option index ${answer.option} out of range`);
            }
          } else {
            const answer = q.answer as { options: number[] };
            if (((q.payload as { choose?: number }).choose ?? 0) !== 2) failures.push(`${mock.title} #${q.order}: multi not choose-2`);
            for (const index of answer.options ?? []) {
              if (index < 0 || index >= options.length) failures.push(`${mock.title} #${q.order}: multi index out of range`);
            }
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("adaptive family: upper module is harder than lower, stage 1 mixes, and the routing rule is stated honestly", () => {
    const byTitle = new Map(TOEFL_MOCK_LIBRARY.map((m) => [m.title, m] as const));
    const stage1 = byTitle.get("TOEFL Adaptive Simulation — Stage 1: Routing module")!;
    const upper = byTitle.get("TOEFL Adaptive Simulation — Stage 2: Upper module")!;
    const lower = byTitle.get("TOEFL Adaptive Simulation — Stage 2: Lower module")!;

    const avgDifficulty = (mock: AnyMock) => {
      const items = allQuestions(mock).filter((q) => q.answer);
      return items.reduce((sum, q) => sum + (q.difficulty ?? 2), 0) / items.length;
    };
    expect(avgDifficulty(upper)).toBeGreaterThan(avgDifficulty(lower) + 0.5);
    const stage1Difficulties = new Set(allQuestions(stage1).map((q) => q.difficulty));
    expect(stage1Difficulties.size).toBeGreaterThanOrEqual(3); // mixed routing module

    for (const mock of [stage1, upper, lower]) {
      expect(mock.description).toContain("practice adaptation");
    }
    const stage1Directions = stage1.sections.map((s) => s.directions ?? "").join(" ");
    expect(stage1Directions).toContain("60%");
  });

  it("constructed tasks (email, discussion, interview) are rubric-graded with points 0 and correct rubric keys", () => {
    const failures: string[] = [];
    for (const mock of TOEFL_MOCK_LIBRARY as unknown as AnyMock[]) {
      for (const section of mock.sections) {
        for (const q of section.questions) {
          if (q.type === "EMAIL_WRITING" || q.type === "DISCUSSION_TASK") {
            if (((q.payload as { rubricKey?: string }).rubricKey ?? "") !== "toefl.writing") failures.push(`${mock.title} #${q.order}: wrong writing rubricKey`);
            if ((q.points ?? 1) !== 0) failures.push(`${mock.title} #${q.order}: constructed task carries points`);
          }
          if (q.type === "SPEAKING_TASK") {
            if (((q.payload as { rubricKey?: string }).rubricKey ?? "") !== "toefl.speaking") failures.push(`${mock.title} #${q.order}: wrong speaking rubricKey`);
            if ((q.points ?? 1) !== 0) failures.push(`${mock.title} #${q.order}: interview item carries points`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });
});

describe("TOEFL pathway (PROMPT 48)", () => {
  it("has eight phases with a goal each", () => {
    expect(toeflPathway.modules).toHaveLength(8);
    for (const mod of toeflPathway.modules) {
      expect(mod.title.startsWith("Phase ")).toBe(true);
      expect(mod.goal.length).toBeGreaterThan(20);
      expect(mod.steps.length).toBeGreaterThan(0);
    }
  });

  it("every step carries a refId (no free-text steps)", () => {
    const missing = toeflPathway.modules.flatMap((m) =>
      m.steps.filter((s) => !s.refId).map((s) => `${m.title}: ${s.label}`),
    );
    expect(missing).toEqual([]);
  });

  it("every curriculum refId resolves to an authored TOEFL lesson", () => {
    const authoredSlugs = new Set(
      TOEFL_COURSES.flatMap((c) => c.modules.flatMap((m) => m.units.flatMap((u) => u.lessons.map((l) => l.slug)))),
    );
    const dangling = toeflPathway.modules.flatMap((m) =>
      m.steps
        .filter((s) => s.refType === "curriculum" && s.refId)
        .filter((s) => !authoredSlugs.has(s.refId!))
        .map((s) => `${m.title}: ${s.refId}`),
    );
    expect(dangling).toEqual([]);
    // Coverage: all 46 authored lessons are referenced by the pathway.
    const referenced = new Set(
      toeflPathway.modules.flatMap((m) =>
        m.steps.filter((s) => s.refType === "curriculum").map((s) => s.refId!),
      ),
    );
    expect([...authoredSlugs].filter((slug) => !referenced.has(slug))).toEqual([]);
  });

  it("every mock refId resolves to a real TOEFL mock title", () => {
    const dangling = toeflPathway.modules.flatMap((m) =>
      m.steps
        .filter((s) => s.refType === "mock" && s.refId)
        .filter((s) => !ALL_TOEFL_MOCK_TITLES.has(s.refId!))
        .map((s) => `${m.title}: ${s.refId}`),
    );
    expect(dangling).toEqual([]);
  });
});
