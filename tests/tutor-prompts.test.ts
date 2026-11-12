/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { buildTutorSystemPrompt } from "@/lib/tutor/prompts";
import { getTutorMode, tutorModes } from "@/data/tutor";
import type { TutorLevel } from "@/data/tutor/types";

const LEVELS: TutorLevel[] = ["beginner", "intermediate", "advanced"];

const BASE_INPUT = {
  mode: getTutorMode("grammar") ?? tutorModes[0],
  level: "beginner" as TutorLevel,
  levelReason: "no graded activity yet",
  learnerName: "Maria",
  contextLines: [
    "Level: beginner (derived from activity — no graded activity yet)",
    "Current lesson: Hello! Everyday Greetings (in-progress)",
    "Learned vocabulary: 8 words met, 2 mastered; recent words: hello, thank you",
    'Recent mistakes: "I am go to school yesterday." → "I went to school yesterday."',
  ],
  lessonLines: [
    "Type: TalkSy curriculum lesson (level pre-a1)",
    "Title: Hello! Everyday Greetings",
  ],
};

describe("tutor system prompt", () => {
  it("is a teacher constitution, not a chatbot prompt", () => {
    const prompt = buildTutorSystemPrompt(BASE_INPUT);
    expect(prompt).toContain("patient, knowledgeable, level-aware English teacher");
    expect(prompt).toContain("NOT a general-purpose chatbot");
    expect(prompt).toContain("Every reply must teach, encourage or guide");
  });

  it("embeds each mode's persona", () => {
    for (const mode of tutorModes) {
      const prompt = buildTutorSystemPrompt({ ...BASE_INPUT, mode });
      expect(prompt).toContain(`TEACHING MODE — ${mode.label}`);
      expect(prompt).toContain(mode.persona);
    }
  });

  it("switches teaching behaviour per level", () => {
    const beginner = buildTutorSystemPrompt({ ...BASE_INPUT, level: "beginner" });
    const intermediate = buildTutorSystemPrompt({ ...BASE_INPUT, level: "intermediate" });
    const advanced = buildTutorSystemPrompt({ ...BASE_INPUT, level: "advanced" });

    expect(beginner).toContain("very simple English");
    expect(beginner).toContain("Explain any difficult word");
    expect(beginner).toContain("ONE short, easy question");

    expect(intermediate).toContain("Encourage longer responses");
    expect(intermediate).toContain("new expressions");
    expect(intermediate).toContain("natural usage");

    expect(advanced).toContain("detailed discussion");
    expect(advanced).toContain("nuanced vocabulary");
    expect(advanced).toContain("professional communication");

    for (const prompt of [beginner, intermediate, advanced]) {
      expect(prompt).toContain("LEVEL RULES");
    }
  });

  it("always carries the corrective teaching protocol", () => {
    for (const level of LEVELS) {
      const prompt = buildTutorSystemPrompt({ ...BASE_INPUT, level });
      expect(prompt).toContain("CORRECTIVE TEACHING");
      expect(prompt).toContain("I am go to school yesterday.");
      expect(prompt).toContain("I went to school yesterday.");
      expect(prompt).toContain("Explain the rule in simple words");
      expect(prompt).toContain("Never rewrite the learner's whole paragraph");
    }
  });

  it("always carries the socratic protocol with its safety valve", () => {
    const prompt = buildTutorSystemPrompt(BASE_INPUT);
    expect(prompt).toContain("SOCRATIC TEACHING");
    expect(prompt).toContain("What word tells us the action?");
    expect(prompt).toContain("at most 2 rounds");
    expect(prompt).toContain("answer it directly");
    expect(prompt).toContain("never like a test");
  });

  it("enforces honesty about AI explanations", () => {
    const prompt = buildTutorSystemPrompt(BASE_INPUT);
    expect(prompt).toContain("Never present an uncertain AI-generated grammar explanation as a verified educational fact");
    expect(prompt).toContain("say so plainly");
    expect(prompt).toContain("say you do not know");
  });

  it("enforces privacy and safety rules", () => {
    const prompt = buildTutorSystemPrompt(BASE_INPUT);
    expect(prompt).toContain("only THIS learner's own learning record");
    expect(prompt).toContain("Never ask for sensitive personal information");
    expect(prompt).toContain("Stay on English learning");
  });

  it("includes the learner context block only when shared", () => {
    const shared = buildTutorSystemPrompt(BASE_INPUT);
    expect(shared).toContain("LEARNER CONTEXT");
    expect(shared).toContain("Recent mistakes");
    expect(shared).toContain("Maria");

    const off = buildTutorSystemPrompt({ ...BASE_INPUT, contextLines: null });
    expect(off).toContain("chosen NOT to share their learning record");
    expect(off).not.toContain("Recent mistakes");
    // Level still guides the teaching even without the record.
    expect(off).toContain("LEVEL RULES — BEGINNER");
  });

  it("includes the lesson reference when one is linked", () => {
    const withLesson = buildTutorSystemPrompt(BASE_INPUT);
    expect(withLesson).toContain("LESSON REFERENCE");
    expect(withLesson).toContain("Hello! Everyday Greetings");

    const withoutLesson = buildTutorSystemPrompt({ ...BASE_INPUT, lessonLines: null });
    expect(withoutLesson).not.toContain("LESSON REFERENCE");
  });

  it("bans markdown soup and sets reply format", () => {
    const prompt = buildTutorSystemPrompt(BASE_INPUT);
    expect(prompt).toContain("No headings, no markdown tables, no emoji");
    expect(prompt).toContain("quote the learner's words");
  });
});
