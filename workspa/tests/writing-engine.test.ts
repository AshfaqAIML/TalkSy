/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  analyzeWriting,
  gradeGuidedItem,
  splitParagraphs,
  splitSentencesStrict,
} from "@/lib/writing/analyze";
import { getWritingAssignment } from "@/data/writing";
import type { FreeWritingTask, WritingIssue } from "@/data/writing/types";
import { coercePublic, } from "@/lib/writing/ai";

const freeTask = (slug: string, taskId?: string): FreeWritingTask => {
  const assignment = getWritingAssignment(slug);
  if (!assignment) throw new Error(`missing ${slug}`);
  const task =
    assignment.tasks.find((t) => t.id === taskId) ??
    assignment.tasks.find((t) => t.type === "free");
  if (!task || task.type !== "free") throw new Error("no free task");
  return task;
};

describe("text segmentation", () => {
  it("splits paragraphs on blank lines", () => {
    expect(splitParagraphs("One.\n\nTwo.\n\n\nThree.")).toHaveLength(3);
    expect(splitParagraphs("Just one block.")).toHaveLength(1);
  });
  it("splits sentences on terminal punctuation", () => {
    const sentences = splitSentencesStrict("First one. Second one? Third!");
    expect(sentences).toHaveLength(3);
  });
});

describe("the deterministic rubric", () => {
  const task = freeTask("self-introduction-writing");

  it("scores a strong model answer highly and deterministically", () => {
    const good =
      "My name is Sofia and I am twenty-four years old. I come from Lima, the capital of Peru, where I live with my parents and my two brothers. I like reading novels and I love cooking with my grandmother on Sundays. At the moment I am learning English because I want to study medicine abroad.";
    const first = analyzeWriting(good, task);
    const second = analyzeWriting(good, task);

    expect(first.measured.wordCount).toBeGreaterThan(50);
    expect(first.measured.checklistCoverage).toBe(1);
    expect(first.measured.overall).toBeGreaterThanOrEqual(70);
    expect(first.measured.overall).toBe(second.measured.overall); // deterministic
    // All ten dimensions present.
    expect(Object.keys(first.measured.scores)).toHaveLength(10);
  });

  it("penalises a short, off-topic text across the rubric", () => {
    const weak = "The cat is on the mat.";
    const result = analyzeWriting(weak, task);
    // The completion factor + relevance keep a clean but empty text low.
    expect(result.measured.overall).toBeLessThan(50);
    expect(result.measured.scores.relevance).toBeLessThan(50);
    expect(result.measured.topicKeywordHits).toHaveLength(0);
  });

  it("detects grammar, spelling, word-choice and structure issues — each teaching, never rewriting", () => {
    const messy =
      "i are student and i has two brother. Yesterday i recieve a letter from my uncle wich was very, very interesting. My mother said me to answer it and i should of written sooner but i was busy becouse of exams. I want to explain you the hole story about the letter that i am going to write tommorow when i have more time and energy for writing it.";
    const result = analyzeWriting(messy, freeTask("family-descriptions"));

    const dims = new Set(result.issues.map((i) => i.dimension));
    expect(dims.has("grammar")).toBe(true); // "i are", "i has"
    expect(dims.has("spelling")).toBe(true); // recieve / becouse / tommorow
    expect(dims.has("word-choice")).toBe(true); // said me / should of / explain me

    // The six-field teaching contract on every issue.
    for (const issue of result.issues as WritingIssue[]) {
      expect(issue.original.length).toBeGreaterThan(0);
      expect(issue.correction.length).toBeGreaterThan(0);
      expect(issue.explanation.length).toBeGreaterThan(0);
      expect(issue.concept.length).toBeGreaterThan(0);
      expect(issue.example.length).toBeGreaterThan(0);
      expect(issue.exercise.length).toBeGreaterThan(0);
    }
    // No issue may return a rewritten paragraph: corrections stay small.
    const longCorrections = result.issues.filter((i) => i.correction.split(/\s+/).length > 25);
    expect(longCorrections).toHaveLength(0);
  });

  it("flags run-on sentences and monotonous rhythm", () => {
    const runOn =
      "Breakfast matters because it gives energy and it helps concentration and it stops snacking and it improves mood and it starts the metabolism and everyone knows this and science agrees and my own experience confirms it completely.";
    const result = analyzeWriting(runOn, freeTask("paragraph-construction"));
    expect(
      result.issues.some((i) => i.dimension === "sentence-structure"),
    ).toBe(true);

    const monotone = "I wake up. I drink water. I eat breakfast. I catch the bus. I start work. I eat lunch. I finish work.";
    const mono = analyzeWriting(monotone, freeTask("daily-routine-writing"));
    expect(mono.issues.some((i) => i.dimension === "clarity")).toBe(true);
  });

  it("scores organisation against the expected paragraph shape", () => {
    const oneBlock =
      "Firstly, phones help research. For example, students check maps. However, critics say they distract. Secondly, they teach self-control. In conclusion, rules beat bans.";
    const blocked = oneBlock.replace(/(However,|Secondly,)/g, "\n\n$1");
    expect(splitParagraphs(blocked).length).toBeGreaterThan(1); // sanity
    const flat = analyzeWriting(oneBlock, freeTask("short-essays"));
    const structured = analyzeWriting(blocked, freeTask("short-essays"));
    expect(structured.measured.scores.organisation).toBeGreaterThan(
      flat.measured.scores.organisation,
    );
  });

  it("measures checklist and topic coverage", () => {
    const text =
      "My name is Ana. I am nineteen years old. I am from Colombia. I like dancing and I want to learn medicine.";
    const result = analyzeWriting(text, freeTask("self-introduction-writing"));
    expect(result.measured.checklistCovered.every((c) => c.covered)).toBe(true);
    expect(result.measured.checklistCoverage).toBe(1);
  });
});

describe("guided grading (beginner micro-skills)", () => {
  it("accepts exact, case-insensitive and end-punctuated answers", () => {
    expect(gradeGuidedItem(["hello"], "hello").correct).toBe(true);
    expect(gradeGuidedItem(["hello"], "Hello").correct).toBe(true);
    expect(gradeGuidedItem(["hello"], "hello.").correct).toBe(true);
    expect(gradeGuidedItem(["she doesn't work here"], "She doesn't work here.").correct).toBe(true);
  });

  it("rejects wrong answers with an encouraging, specific near-miss message", () => {
    expect(gradeGuidedItem(["hello"], "yellow").correct).toBe(false);
    const near = gradeGuidedItem(["banana"], "banan");
    expect(near.correct).toBe(false);
    expect(near.feedback).toContain("close");
  });
});

describe("AI coach payload parsing (defensive)", () => {
  it("accepts fenced JSON with a full teaching payload", () => {
    const parsed = coercePublic(
      '```json\n{"strengths": ["Clear topic sentence"], "notes": ["Vary openers"], "issues": [{"dimension": "grammar", "original": "i are", "correction": "I am", "explanation": "Subjects and verbs must agree.", "concept": "Subject-verb agreement", "example": "He is / They are.", "exercise": "Fix five agreement errors."}]}\n```',
    );
    expect(parsed).not.toBeNull();
    expect(parsed?.issues[0].source).toBe("ai");
    expect(parsed?.issues[0].concept).toBe("Subject-verb agreement");
  });

  it("rejects malformed or empty payloads", () => {
    expect(coercePublic("not json at all")).toBeNull();
    expect(coercePublic('{"strengths": [], "notes": [], "issues": []}')).toBeNull();
    // Issues missing the required teaching fields are dropped.
    const partial = coercePublic('{"issues": [{"original": "x", "correction": "y"}]}');
    expect(partial?.issues ?? []).toHaveLength(0);
  });
});
