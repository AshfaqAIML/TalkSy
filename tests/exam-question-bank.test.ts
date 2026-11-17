/// <reference types="bun-types" />
/**
 * TALK SY Original Examination Question Bank (PROMPT 54) — the unified
 * registry contract, search, facets and the public API route.
 *
 * The underlying content banks keep their own masterclass suites (original
 * windows, answer honesty, rubric floors); this file asserts the layer
 * PROMPT 54 adds: the fifteen-field unified record, the twelve-domain
 * variety contract, the per-examination size targets, the writing/speaking
 * rubric contract (never ordinary multiple-choice), version honesty, the
 * search/facet engine, and the safe public API projection.
 */

import { describe, expect, it } from "bun:test";
import { GET as bankRoute } from "@/app/api/exams/bank/route";
import {
  QUESTION_BANK,
  BANK_SIZE_TARGETS,
  BANK_TOPIC_DOMAINS,
  bankItemById,
  questionBankFacets,
  questionBankStats,
  searchQuestionBank,
  validateUnifiedBank,
} from "@/data/exams/question-bank";

const BASE = "http://127.0.0.1:3000";

describe("Original Examination Question Bank — the unified registry (PROMPT 54)", () => {
  it("validates with zero issues and hits every initial-content target", () => {
    expect(validateUnifiedBank()).toEqual([]);

    const stats = questionBankStats();
    expect(stats.total).toBe(950);
    for (const [key, target] of Object.entries(BANK_SIZE_TARGETS)) {
      expect(stats.byExamSection[key] ?? 0).toBeGreaterThanOrEqual(target);
    }
    // The PROMPT 54 first-release headline numbers.
    expect(stats.byExamSection["ielts/listening"]).toBe(100);
    expect(stats.byExamSection["ielts/reading"]).toBe(100);
    expect(stats.byExamSection["ielts/writing"]).toBe(100);
    expect(stats.byExamSection["ielts/speaking"]).toBe(150);
    expect(stats.byExamSection["toefl/reading"]).toBe(100);
    expect(stats.byExamSection["toefl/listening"]).toBe(100);
    expect(stats.byExamSection["toefl/writing"]).toBeGreaterThanOrEqual(100);
    expect(stats.byExamSection["toefl/speaking"]).toBe(100);
  });

  it("carries a unique ID and the full fifteen-field record on every item", () => {
    const ids = new Set<string>();
    for (const item of QUESTION_BANK) {
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);

      // 1–15 of the mandated fields.
      expect(item.id).toMatch(/^[a-z0-9-]+$/);
      expect(["ielts", "toefl"]).toContain(item.exam);
      expect(["academic", "general-training", "common", "toefl-2026"]).toContain(item.version);
      expect(["listening", "reading", "writing", "speaking"]).toContain(item.section);
      expect(item.questionType.length).toBeGreaterThan(0);
      expect(item.questionTypeKey).toMatch(/^[a-z0-9-+]+$/);
      expect([1, 2, 3, 4, 5]).toContain(item.difficulty);
      expect(BANK_TOPIC_DOMAINS).toContain(item.topic);
      expect(item.topicDetail.length).toBeGreaterThan(0);
      expect(item.instructions.trim().length).toBeGreaterThan(5);
      expect(item.summary.trim().length).toBeGreaterThan(10);
      expect(item.itemCount).toBeGreaterThan(0);
      expect(["keyed", "rubric"]).toContain(item.answerModel);
      expect(item.hasExplanation).toBe(true);
      expect(item.skills.length).toBeGreaterThan(0);
      expect(item.estimatedMinutes).toBeGreaterThan(0);
      expect(["ai-reviewed", "human-reviewed"]).toContain(item.reviewStatus);
      expect(item.href.startsWith("#/exams/")).toBe(true);
      expect(item.source.toLowerCase()).toContain("original talksy practice material");
    }
  });

  it("never treats Writing and Speaking as ordinary multiple-choice questions", () => {
    for (const item of QUESTION_BANK) {
      if (item.section === "writing" || item.section === "speaking") {
        if (item.answerModel === "rubric") {
          // Rubric-assessed: the scoring criteria travel with the item.
          expect(item.rubricCriteria?.length ?? 0).toBeGreaterThanOrEqual(3);
          // Writing rubrics anchor on the task; speaking rubrics anchor on
          // fluency, language and being easy to understand.
          if (item.section === "writing") {
            expect(item.rubricCriteria!.some((c) => /task|response|achievement/i.test(c))).toBe(true);
          } else {
            expect(item.rubricCriteria!.some((c) => /fluency|coherence/i.test(c))).toBe(true);
            expect(item.rubricCriteria!.some((c) => /lexical|language/i.test(c))).toBe(true);
          }
        } else {
          // The only keyed exceptions are the machine-target tasks
          // (TOEFL Build a Sentence / Listen and Repeat).
          expect(["toefl-wb-sent", "toefl-sb-rep"].some((prefix) => item.id.startsWith(prefix))).toBe(true);
          expect(item.rubricCriteria).toBeUndefined();
        }
      } else {
        // Listening and Reading always carry a server-side answer key.
        expect(item.answerModel).toBe("keyed");
      }
    }
    // IELTS Writing/Teaching payloads are honest about reference examples:
    // every IELTS writing task and speaking item carries one, except the
    // deliberately model-free practice cue cards.
    const ieltsWriting = QUESTION_BANK.filter((i) => i.exam === "ielts" && i.section === "writing");
    expect(ieltsWriting.length).toBe(100);
    expect(ieltsWriting.every((i) => i.hasReferenceExample === true)).toBe(true);
    const practiceCards = QUESTION_BANK.filter((i) => i.id.startsWith("ielts-sb-pc-"));
    expect(practiceCards.length).toBe(50);
    expect(practiceCards.every((i) => i.hasReferenceExample === false)).toBe(true);
  });

  it("covers all twelve mandated topic domains within BOTH examinations", () => {
    for (const exam of ["ielts", "toefl"] as const) {
      const covered = new Set(QUESTION_BANK.filter((i) => i.exam === exam).map((i) => i.topic));
      for (const domain of BANK_TOPIC_DOMAINS) {
        expect(covered.has(domain)).toBe(true);
      }
    }
  });

  it("keeps version honesty: variants split where the tests split", () => {
    for (const item of QUESTION_BANK) {
      if (item.exam === "toefl") {
        expect(item.version).toBe("toefl-2026");
      } else if (item.section === "reading" || item.section === "writing") {
        expect(["academic", "general-training"]).toContain(item.version);
      } else {
        expect(item.version).toBe("common");
      }
    }
    // The IELTS Reading library genuinely splits Academic / General Training.
    expect(QUESTION_BANK.filter((i) => i.exam === "ielts" && i.section === "reading" && i.version === "academic").length).toBe(50);
    expect(QUESTION_BANK.filter((i) => i.exam === "ielts" && i.section === "reading" && i.version === "general-training").length).toBe(50);
  });

  it("deep-links resolve to real players in the owning banks", () => {
    for (const item of QUESTION_BANK) {
      const slug = item.href.split("/").pop()!;
      expect(slug).toBe(item.id);
      expect(bankItemById(item.id)?.href).toBe(item.href);
    }
  });
});

describe("Original Examination Question Bank — search and facets", () => {
  it("paginates and sorts by examination, section, then difficulty", () => {
    const all = searchQuestionBank({}, 1, 100);
    expect(all.total).toBe(950);
    expect(all.pages).toBe(10);
    const first = all.items;
    for (let i = 1; i < first.length; i += 1) {
      const a = first[i - 1];
      const b = first[i];
      if (a.exam !== b.exam) expect(a.exam).toBe("ielts");
      else if (a.section === b.section) expect(a.difficulty).toBeLessThanOrEqual(b.difficulty);
    }
    const page2 = searchQuestionBank({}, 2, 100);
    expect(page2.page).toBe(2);
    expect(page2.items[0].id).not.toBe(all.items[0].id);
  });

  it("filters by examination, version, section, task family, difficulty and topic", () => {
    const ielts = searchQuestionBank({ exam: "ielts" });
    expect(ielts.total).toBe(450);

    const gtReading = searchQuestionBank({ exam: "ielts", section: "reading", version: "general-training" });
    expect(gtReading.total).toBe(50);
    expect(gtReading.items.every((i) => i.version === "general-training")).toBe(true);

    const headings = searchQuestionBank({ questionType: "Matching headings" });
    expect(headings.total).toBeGreaterThan(10);
    expect(headings.items.every((i) => i.questionType.includes("Matching headings"))).toBe(true);

    // The same official family unifies across banks: Sentence completion
    // spans the Listening and Reading libraries under one label.
    const sentence = searchQuestionBank({ questionType: "Sentence completion" });
    expect(sentence.total).toBeGreaterThan(30);
    expect(sentence.items.some((i) => i.section === "listening")).toBe(true);
    expect(sentence.items.some((i) => i.section === "reading")).toBe(true);

    const history = searchQuestionBank({ topic: "history" });
    expect(history.total).toBeGreaterThan(10);
    expect(history.items.every((i) => i.topic === "history")).toBe(true);

    const d5 = searchQuestionBank({ difficulty: 5 });
    expect(d5.items.every((i) => i.difficulty === 5)).toBe(true);
  });

  it("free-text search matches ids, task families, topics and summaries", () => {
    const cue = searchQuestionBank({ q: "cue card" });
    expect(cue.total).toBeGreaterThan(50);

    const emails = searchQuestionBank({ q: "email" });
    expect(emails.total).toBeGreaterThanOrEqual(60); // the TOEFL email bank alone
    expect(emails.items.some((i) => i.id.startsWith("toefl-wb-email"))).toBe(true);

    const byId = searchQuestionBank({ q: "ielts-rb-ac-pencil" });
    expect(byId.total).toBe(1);

    const beavers = searchQuestionBank({ q: "beavers" });
    expect(beavers.items.some((i) => i.id === "ielts-rb-ac-beavers")).toBe(true);
  });

  it("computes facets against the active filters", () => {
    const all = questionBankFacets({});
    expect(all.exams.find((e) => e.value === "ielts")?.count).toBe(450);
    expect(all.exams.find((e) => e.value === "toefl")?.count).toBe(500);
    expect(all.topics.length).toBe(12);
    expect(all.difficulties).toHaveLength(5);
    // Facet labels are the official family names — one entry per family,
    // never duplicated across banks.
    const labels = all.questionTypes.map((t) => t.label);
    expect(new Set(labels).size).toBe(labels.length);
    expect(labels).toContain("Sentence completion");
    expect(labels).toContain("Matching headings");
    expect(labels).toContain("Build a Sentence");

    // Facet counts exclude their own dimension: with the exam pinned to
    // TOEFL, the IELTS-only variants disappear from the version facet.
    const toefl = questionBankFacets({ exam: "toefl" });
    expect(toefl.versions.map((v) => v.value)).toEqual(["toefl-2026"]);

    // Section facet under an active exam filter counts only that exam.
    const ielts = questionBankFacets({ exam: "ielts" });
    expect(ielts.sections.find((s) => s.value === "speaking")?.count).toBe(150);
  });
});

describe("Original Examination Question Bank — public API route", () => {
  it("serves the safe projection with search, facets and stats", async () => {
    const res = await bankRoute(
      new Request(`${BASE}/api/exams/bank?exam=toefl&section=speaking&facets=1&stats=1&pageSize=10`),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      items: Array<{ id: string; rubricCriteria?: string[]; instructions: string; summary: string }>;
      total: number;
      page: number;
      pageSize: number;
      facets: { sections: { value: string; count: number }[] };
      stats: { total: number; byExamSection: Record<string, number> };
    };
    expect(body.total).toBe(100);
    expect(body.pageSize).toBe(10);
    expect(body.items).toHaveLength(10);
    expect(body.items.every((i) => i.id.startsWith("toefl-sb-"))).toBe(true);

    // The writing/speaking rubric travels; no answer content does.
    const rubricItem = body.items.find((i) => i.id.startsWith("toefl-sb-int"));
    expect(rubricItem?.rubricCriteria?.length).toBeGreaterThanOrEqual(3);

    // Facets and stats blocks are present when requested.
    expect(body.stats.total).toBe(950);
    expect(body.stats.byExamSection["ielts/speaking"]).toBe(150);
    expect(body.facets.sections.find((s) => s.value === "speaking")?.count).toBe(100);
  });

  it("rejects malformed filter values without crashing", async () => {
    const res = await bankRoute(
      new Request(`${BASE}/api/exams/bank?exam=gre&difficulty=99&topic=nonsense&page=-3`),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as { total: number; page: number; items: unknown[] };
    expect(body.total).toBe(950); // every malformed value was ignored
    expect(body.page).toBe(1);
    expect(body.items.length).toBeGreaterThan(0);
  });

  it("never leaks answer-side content in any projection", async () => {
    const res = await bankRoute(new Request(`${BASE}/api/exams/bank?q=answer&pageSize=100`));
    const text = await res.text();
    for (const banned of ["\"correct\"", "\"answer\":", "\"blanks\"", "\"keywords\"", "\"lure\"", "\"accepted\"", "\"modelAnswer\""]) {
      expect(text.includes(banned)).toBe(false);
    }
  });
});
