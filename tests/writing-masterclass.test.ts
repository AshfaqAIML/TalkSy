/// <reference types="bun-types" />
/**
 * IELTS Writing Masterclass tests (PROMPT 46).
 *
 *   1. Task-bank integrity: all 25 authored tasks pass validateWritingBank
 *      (structure, arithmetic honesty, teaching completeness).
 *   2. Coverage: the 7 Academic Task 1 visual families, the 7 Task 2 essay
 *      families, the 6 GT letter purposes across all 3 registers, and the
 *      GT everyday essays.
 *   3. Safe projection: model answers, planning notes, analyses, level
 *      samples, requirement keywords and vocabulary banks never reach the
 *      client payload.
 *   4. Evaluation engine: the deterministic layer scores every authored
 *      model answer in the 6.5–9.0 window, ranks every weak level sample
 *      below its model, refuses too-short responses, and uses the correct
 *      first criterion per task type (Task Achievement vs Task Response).
 *   5. Evidence honesty: quoted evidence appears verbatim in the response.
 *   6. Curriculum: the 57 masterclass lessons land in the authored modules
 *      with the four separated channels.
 *   7. Performance engine: aggregation + weakness-driven recommendations
 *      that resolve to authored lessons under their real titles.
 */

import { describe, expect, it } from "bun:test";
import {
  WRITING_BANK,
  validateWritingBank,
  writingTaskBySlug,
  writingBankStats,
} from "@/data/exams/ielts/writing-bank";
import { writingCriteriaFor } from "@/data/exams/ielts/writing-bank/types";
import { module4aWriting } from "@/data/exams/ielts/m4a-writing";
import { module4gWriting } from "@/data/exams/ielts/m4g-writing";
import { setLlmProviderOverride, type LlmProvider } from "@/lib/llm";
import {
  evaluateWriting,
  measureWriting,
  minimumReliableWords,
  splitParagraphs,
} from "@/lib/exams/writing-bank/evaluate";
import { toSafeWritingTask } from "@/lib/exams/writing-bank/service";
import {
  buildWritingPerformanceReport,
  recommendWritingLessons,
  WRITING_LESSONS,
  type PerformanceAttemptRow,
  type WritingPerformanceReport,
} from "@/lib/exams/writing-bank/performance";

// The AI commentary layer is enrichment-only; tests pin the deterministic
// report by making the provider deterministically unavailable.
const unavailable: LlmProvider = {
  name: "test-unavailable",
  async complete() {
    throw new Error("provider unavailable in tests");
  },
  async *stream() {
    throw new Error("provider unavailable in tests");
  },
};
setLlmProviderOverride(unavailable);

describe("IELTS Writing Masterclass — task bank (PROMPT 46, Part E; PROMPT 54 expansion)", () => {
  it("all one hundred tasks pass integrity validation", () => {
    const issues = validateWritingBank(WRITING_BANK);
    expect(issues).toEqual([]);
  });

  it("covers the four separated channels and every taught family", () => {
    const stats = writingBankStats();
    // PROMPT 54 target: 100 writing assignments — 25 flagship (full level
    // ladder) plus 75 practice-tier tasks.
    expect(stats.total).toBe(100);
    expect(stats.academicTask1).toBe(28);
    expect(stats.academicTask2).toBe(25);
    expect(stats.gtTask1).toBe(26);
    expect(stats.gtTask2).toBe(21);
    expect(stats.withLevelSamples).toBe(25);

    const at1 = WRITING_BANK.filter((t) => t.channel === "academic" && t.taskType === "task-1");
    for (const family of ["bar", "line", "pie", "table", "mixed", "process", "map"]) {
      expect(at1.some((t) => t.family === family)).toBe(true);
    }
    const at2 = WRITING_BANK.filter((t) => t.channel === "academic" && t.taskType === "task-2");
    for (const family of [
      "opinion", "discussion", "advantages-disadvantages", "problem-solution",
      "cause-effect", "two-part", "direct-questions",
    ]) {
      expect(at2.some((t) => t.family === family)).toBe(true);
    }
    const letters = WRITING_BANK.filter((t) => t.channel === "gt" && t.taskType === "task-1");
    for (const purpose of ["complaint", "request", "invitation", "apology", "explanation", "suggestion"]) {
      expect(letters.some((t) => t.family === purpose)).toBe(true);
    }
    for (const register of ["formal", "semi-formal", "informal"]) {
      expect(letters.some((t) => t.register === register)).toBe(true);
    }
  });

  it("safe projection strips every teaching payload and answer-side hint", () => {
    for (const task of WRITING_BANK) {
      const safe = toSafeWritingTask(task);
      const serialised = JSON.stringify(safe);
      expect(serialised).not.toContain('"modelAnswer"');
      expect(serialised).not.toContain('"planningNotes"');
      expect(serialised).not.toContain('"analysis"');
      expect(serialised).not.toContain('"levelSamples"');
      expect(serialised).not.toContain('"vocabularyBank"');
      expect(serialised).not.toContain('"keywords"');
      expect(serialised).not.toContain("Band 8.0–8.5 estimate");
      // The prompt itself travels (it IS the task).
      expect(safe.prompt).toBe(task.prompt);
      if (task.visual) expect(safe.visual).toBeDefined();
      if (task.bullets) expect(safe.bullets).toEqual(task.bullets);
    }
  });

  it("model answers match their declared word counts and stay over the floor", () => {
    for (const task of WRITING_BANK) {
      expect(task.modelAnswer.wordCount).toBeGreaterThanOrEqual(task.wordMinimum);
    }
  });
});

describe("IELTS Writing Masterclass — evaluation engine (Part G)", () => {
  it("scores every authored model answer as a complete evaluation in a sane band window", async () => {
    for (const task of WRITING_BANK) {
      const result = await evaluateWriting(task, task.modelAnswer.paragraphs.join("\n\n"));
      expect(result.status).toBe("complete");
      expect(result.criteria).toHaveLength(4);
      expect(result.overall).toBeGreaterThanOrEqual(6.5);
      expect(result.overall).toBeLessThanOrEqual(9);
      for (const criterion of result.criteria) {
        expect(criterion.score).toBeGreaterThanOrEqual(4);
        expect(criterion.score).toBeLessThanOrEqual(9);
        expect((criterion.score * 2) % 1).toBe(0); // 0.5 steps
        expect(criterion.feedback.length).toBeGreaterThan(0);
      }
    }
  }, 60000);

  it("uses Task Achievement for Task 1 (both channels) and Task Response for Task 2", () => {
    const at1 = writingTaskBySlug("ielts-wb-at1-bar-cycling")!;
    const letter = writingTaskBySlug("ielts-wb-gt1-complaint-hotel")!;
    const essay = writingTaskBySlug("ielts-wb-at2-opinion-museums")!;
    const gtEssay = writingTaskBySlug("ielts-wb-gt2-opinion-sundays")!;
    expect(writingCriteriaFor(at1)[0].name).toBe("Task Achievement");
    expect(writingCriteriaFor(letter)[0].name).toBe("Task Achievement");
    expect(writingCriteriaFor(essay)[0].name).toBe("Task Response");
    expect(writingCriteriaFor(gtEssay)[0].name).toBe("Task Response");
    for (const task of [at1, letter, essay, gtEssay]) {
      const names = writingCriteriaFor(task).map((c) => c.name);
      expect(names.slice(1)).toEqual(["Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy"]);
    }
  });

  it("ranks every weak level sample below its model answer", async () => {
    // PROMPT 54: practice-tier tasks carry no level ladder by design —
    // only the flagship tasks do.
    const flagship = WRITING_BANK.filter((t) => t.levelSamples.length > 0);
    expect(flagship.length).toBe(25);
    for (const task of flagship) {
      const model = (await evaluateWriting(task, task.modelAnswer.paragraphs.join("\n\n"))).overall;
      const weak = task.levelSamples[0];
      const weakScore = (await evaluateWriting(task, weak.paragraphs.join("\n\n"))).overall;
      expect(weakScore).toBeLessThan(model);
    }
  }, 90000);

  it("caps under-length responses and refuses evaluations below the reliability floor", async () => {
    const task = writingTaskBySlug("ielts-wb-at2-opinion-museums")!;
    const short = "I agree with the statement because museums are important for education and culture, so governments should pay for them.";
    const result = await evaluateWriting(task, short);
    // 24 words < 40% of 250 → insufficient, no criteria.
    expect(result.status).toBe("insufficient");
    expect(result.criteria).toHaveLength(0);

    const floor = minimumReliableWords(task);
    expect(floor).toBe(100);

    // A fuller but still under-length response evaluates, with the
    // under-length cap applied to the task criterion.
    const underLength = `${"Museums preserve what societies decide to remember, and that choice shapes how the next generation understands itself. ".repeat(3)}I believe governments should keep funding them. Public museums anchor civic identity: school classes walk through local history in the afternoon, and families return on weekends because entry stays free. When funding stops, ticket prices rise and exactly the visitors who benefit most — children and low-income households — are priced out. A country that funds its shared memory invests in its own future.`;
    const partial = await evaluateWriting(task, underLength);
    expect(partial.status).toBe("complete");
    expect(partial.metrics.wordCount).toBeLessThan(250);
    const taskCriterion = partial.criteria[0];
    expect(taskCriterion.score).toBeLessThanOrEqual(5.5);
    expect(taskCriterion.feedback.some((f) => f.text.includes("under the 250-word floor") || f.text.includes("words against the 250-word floor"))).toBe(true);
  }, 30000);

  it("quotes evidence verbatim from the response", async () => {
    const task = writingTaskBySlug("ielts-wb-at1-bar-cycling")!;
    const response = task.modelAnswer.paragraphs.join("\n\n");
    const result = await evaluateWriting(task, response);
    for (const criterion of result.criteria) {
      for (const item of criterion.evidence) {
        const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ");
        expect(norm(response)).toContain(norm(item.quote.slice(0, 60)));
      }
    }
  });

  it("detects letter register: formal contractions counted, greeting and sign-off recognised", () => {
    const formal = writingTaskBySlug("ielts-wb-gt1-complaint-hotel")!;
    const formalMetrics = measureWriting(formal, formal.modelAnswer.paragraphs.join("\n\n"));
    expect(formalMetrics.formalRegisterBreaches).toBe(0);
    expect(formalMetrics.greetingSignOff).toBe(true);

    const informal = writingTaskBySlug("ielts-wb-gt1-apology-neighbour")!;
    const informalMetrics = measureWriting(informal, informal.modelAnswer.paragraphs.join("\n\n"));
    // Informal letters legitimately contract; no breach is recorded.
    expect(informalMetrics.formalRegisterBreaches).toBe(0);

    const breach = measureWriting(formal, "Dear Sir or Madam,\n\nI'm writing to complain. I can't believe the room. It wasn't clean and there's no view at all.\n\nYours faithfully,\nA. Guest");
    expect(breach.formalRegisterBreaches).toBeGreaterThan(0);
  });

  it("disclaimers make clear every number is an educational estimate", async () => {
    const task = writingTaskBySlug("ielts-wb-gt2-opinion-sundays")!;
    const result = await evaluateWriting(task, task.modelAnswer.paragraphs.join("\n\n"));
    expect(result.disclaimers.length).toBeGreaterThanOrEqual(3);
    expect(result.disclaimers.some((d) => d.includes("educational estimates"))).toBe(true);
    expect(result.overallLabel).toContain("educational estimate");
    expect(result.aiAvailable).toBe(false); // provider unavailable in tests
  });

  it("splitParagraphs handles blank-line separation only", () => {
    expect(splitParagraphs("One.\n\nTwo.\n\nThree.")).toHaveLength(3);
    expect(splitParagraphs("Dear Sara,\n\nHow are you?\n\nYours,\nKim")).toHaveLength(3);
  });
});

describe("IELTS Writing Masterclass — curriculum (Parts A–D)", () => {
  it("module 4A delivers 27 lessons across four units (11 foundations + 7 visual families + 7 essay families + 2 assessment)", () => {
    expect(module4aWriting.units).toHaveLength(4);
    const [foundations, task1, task2, assessment] = module4aWriting.units;
    expect(foundations.lessons).toHaveLength(11);
    expect(task1.lessons).toHaveLength(7);
    expect(task2.lessons).toHaveLength(7);
    expect(assessment.lessons).toHaveLength(2);
    const slugs = new Set(module4aWriting.units.flatMap((u) => u.lessons.map((l) => l.slug)));
    expect(slugs.size).toBe(27);
  });

  it("module 4G delivers 30 lessons across four units (11 foundations + 11 letters + 7 essays + 1 assessment)", () => {
    expect(module4gWriting.units).toHaveLength(4);
    const [foundations, letters, task2, assessment] = module4gWriting.units;
    expect(foundations.lessons).toHaveLength(11);
    expect(letters.lessons).toHaveLength(11);
    expect(task2.lessons).toHaveLength(7);
    expect(assessment.lessons).toHaveLength(1);
    const slugs = new Set(module4gWriting.units.flatMap((u) => u.lessons.map((l) => l.slug)));
    expect(slugs.size).toBe(30);
  });

  it("keeps the Academic and General Training writing tracks disjoint", () => {
    const academic = module4aWriting.units.flatMap((u) => u.lessons.map((l) => l.slug));
    const gt = module4gWriting.units.flatMap((u) => u.lessons.map((l) => l.slug));
    for (const slug of academic) expect(gt.includes(slug)).toBe(false);
    for (const slug of gt) expect(academic.includes(slug)).toBe(false);
  });
});

describe("IELTS Writing Masterclass — performance engine (Part F)", () => {
  const row = (over: Partial<PerformanceAttemptRow>): PerformanceAttemptRow => ({
    id: "a1",
    taskSlug: "ielts-wb-at1-bar-cycling",
    channel: "academic",
    taskType: "task-1",
    family: "bar",
    register: null,
    mode: "exam",
    timed: true,
    version: 1,
    wordCount: 160,
    timeSpentSec: 1100,
    overall: 6.5,
    criteria: JSON.stringify({ task: { score: 6 }, cc: { score: 6.5 }, lr: { score: 6.5 }, gra: { score: 7 } }),
    aiAvailable: false,
    createdAt: new Date("2026-11-14T10:00:00Z"),
    ...over,
  });

  it("aggregates criteria, families, discipline and revision chains", () => {
    const report = buildWritingPerformanceReport([
      row({}),
      row({ id: "a2", version: 2, overall: 7.5, criteria: JSON.stringify({ task: { score: 8 }, cc: { score: 7 }, lr: { score: 7 }, gra: { score: 8 } }), createdAt: new Date("2026-11-14T11:00:00Z") }),
      row({ id: "a3", taskSlug: "ielts-wb-gt1-complaint-hotel", channel: "gt", family: "complaint", register: "formal", wordCount: 120, overall: 5.5, timeSpentSec: 400, criteria: JSON.stringify({ task: { score: 5 }, cc: { score: 5.5 }, lr: { score: 6 }, gra: { score: 5.5 } }) }),
    ]);
    expect(report.attempts).toBe(3);
    expect(report.criterionAvg.find((c) => c.key === "task")?.avg).toBeCloseTo(6.33, 1);
    expect(report.byFamily.some((f) => f.family === "bar")).toBe(true);
    expect(report.byFamily.some((f) => f.family === "complaint")).toBe(true);
    expect(report.underLengthAttempts).toBe(1);
    expect(report.revisionChains).toHaveLength(1);
    expect(report.revisionChains[0].improved).toBe(true);
    expect(report.revisionChains[0].delta).toBeCloseTo(1.0, 1);
    expect(report.recentAttempts).toHaveLength(3);
  });

  it("recommends the under-length and weakest-criterion lessons from actual attempts", () => {
    const base = buildWritingPerformanceReport([
      row({ wordCount: 100 }),
      row({ id: "a2", wordCount: 110, overall: 5.0 }),
    ]);
    const recs = recommendWritingLessons(base);
    const slugs = recs.map((r) => r.lessonSlug);
    expect(slugs).toContain("ielts-awriting-time"); // under-length → time protocol
    expect(recs.every((r) => r.reason.match(/\d/))).toBe(true);
  });

  it("every recommendation resolves to an authored masterclass lesson under its real title (no raw-slug fallback)", () => {
    const authored = new Map<string, string>();
    for (const moduleSpec of [module4aWriting, module4gWriting]) {
      for (const unit of moduleSpec.units) {
        for (const lesson of unit.lessons) authored.set(lesson.slug, lesson.title);
      }
    }
    // Maximal weakness profile across every family and criterion.
    const families = ["bar", "line", "pie", "table", "mixed", "process", "map", "opinion", "discussion", "advantages-disadvantages", "problem-solution", "cause-effect", "two-part", "direct-questions", "complaint", "request", "invitation", "apology", "explanation", "suggestion"];
    const weak = buildWritingPerformanceReport([
      row({ wordCount: 90, overall: 4.5, criteria: JSON.stringify({ task: { score: 4.5 }, cc: { score: 4.5 }, lr: { score: 4.5 }, gra: { score: 4.5 } }) }),
      ...families.map((family, i) =>
        row({
          id: `f${i}`,
          taskSlug: `task-${i}`,
          channel: family === "complaint" || family === "request" || family === "invitation" || family === "apology" || family === "explanation" || family === "suggestion" ? "gt" : "academic",
          taskType: ["opinion", "discussion", "advantages-disadvantages", "problem-solution", "cause-effect", "two-part", "direct-questions"].includes(family) ? "task-2" : "task-1",
          family,
          wordCount: 120,
          overall: 5.0,
          timeSpentSec: 400,
          criteria: JSON.stringify({ task: { score: 5 }, cc: { score: 5 }, lr: { score: 5 }, gra: { score: 5 } }),
        }),
      ),
    ] as WritingPerformanceReport extends never ? never : PerformanceAttemptRow[]);
    const maximal = recommendWritingLessons(weak);
    expect(maximal.length).toBeGreaterThanOrEqual(3);
    for (const r of maximal) {
      expect(authored.has(r.lessonSlug)).toBe(true);
      expect(authored.get(r.lessonSlug)).toBe(r.lessonTitle);
      expect(r.lessonTitle).not.toBe(r.lessonSlug);
      expect(WRITING_LESSONS[r.lessonSlug]).toBe(r.lessonTitle);
    }
  });

  it("a clean profile yields no high-severity recommendations", () => {
    const clean = buildWritingPerformanceReport([
      row({ overall: 7.5, criteria: JSON.stringify({ task: { score: 7.5 }, cc: { score: 7.5 }, lr: { score: 7.5 }, gra: { score: 7.5 } }) }),
      row({ id: "a2", version: 2, overall: 8, criteria: JSON.stringify({ task: { score: 8 }, cc: { score: 8 }, lr: { score: 8 }, gra: { score: 8 } }), createdAt: new Date("2026-11-14T11:00:00Z") }),
    ]);
    const out = recommendWritingLessons(clean);
    expect(out.every((r) => r.severity !== "high")).toBe(true);
  });
});
