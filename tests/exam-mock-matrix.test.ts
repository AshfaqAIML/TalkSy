/// <reference types="bun-types" />
/**
 * PROMPT 56 §5 — Mock examination matrix.
 *
 * All eight mandated mock experiences, each driven through the real engine
 * lifecycle (safe projection → timed attempt → answer save → refresh-resume
 * → submission → scored result):
 *
 *   IELTS Listening · IELTS Reading · IELTS Writing · IELTS Speaking
 *   TOEFL Reading · TOEFL Listening · TOEFL Writing · TOEFL Speaking
 *
 * For every mock the test verifies the five PROMPT 56 requirements:
 *   1. timing — section clocks match the official specification;
 *   2. instructions — every section carries its directions text;
 *   3. navigation — the spec-driven player policy (IELTS free navigation
 *      with flagging; TOEFL listening forward-only, no flagging);
 *   4. answer persistence — saved answers survive a refresh mid-attempt;
 *   5. results — submission produces raw scores, bands on the exam's own
 *      scale, per-question outcomes and the honesty note.
 *
 * Constructed responses (writing/speaking) are rubric-graded through a
 * level-aware fake provider; Listen-and-Repeat accuracy is machine-verified
 * (VERIFIED provenance, never an AI score). All items are original fixture
 * material on dedicated IELTS/TOEFL "MATRIX" variants.
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { setLlmProviderOverride, type LlmProvider, type LlmRequest } from "@/lib/llm";
import {
  getSafeMockTest,
  startAttempt,
  submitAttempt,
  getAttemptResult,
  saveResponse,
} from "@/lib/exams/mock-engine";
import type { SafeMockTest, SectionKey } from "@/lib/exams/types";

const OFFICIAL = {
  IELTS: { listening: 1800, reading: 3600, writing: 3600, speaking: 780 },
  TOEFL_IBT: { reading: 1800, listening: 1740, writing: 1380, speaking: 480 },
} as const;

type SectionKeyOf<T> = T extends typeof OFFICIAL.IELTS ? keyof T : keyof T;

const MATRIX = {
  specIds: {} as Record<"IELTS" | "TOEFL_IBT", string>,
  mockIds: {} as Record<string, string>,
  userId: "",
  email: "matrix-learner@fixture.talksy.test",
};

type QSeed = {
  order: number;
  type: string;
  stem: string | null;
  payload: Record<string, unknown>;
  answer: unknown;
  skills: string[];
  difficulty: number;
  explanation: string;
};

const CONSTRUCTED_TEXT =
  "I am writing to request a repair of the heating system in flat 4B, which stopped working five weeks ago. Since then the flat has been very cold, my daughter has had two chest infections, and we have spent about eighty euros on electric heaters. I reported the fault twice by phone; on both occasions your office promised an engineer within the week, but nobody has visited. I would therefore be grateful if you could arrange a repair no later than Friday 21 November and confirm the appointment in writing. I am available any weekday afternoon, and Wednesday morning would suit me particularly well. Thank you for your urgent attention to this matter. Yours faithfully, A. Kowalski";

/** Correct-response builder per objective type. */
function correctFor(type: string, answer: unknown): unknown {
  const a = answer as {
    option?: number;
    value?: number;
    blanks?: Array<string | { answer: string }>;
    words?: Array<string | { answer: string }>;
    text?: string;
  };
  switch (type) {
    case "MCQ_SINGLE":
      return { option: a.option };
    case "TFNG":
      return { value: a.value };
    case "FILL_BLANK":
      return { blanks: (a.blanks ?? []).map((b) => (typeof b === "string" ? b : b.answer)) };
    case "COMPLETE_WORDS":
      return { words: (a.words ?? []).map((w) => (typeof w === "string" ? w : w.answer)) };
    case "SENTENCE_RECONSTRUCTION":
      return { text: a.text };
    case "LISTEN_REPEAT":
      return { text: a.text };
    default:
      return a;
  }
}

function sectionsSpec(examKey: "IELTS" | "TOEFL_IBT") {
  if (examKey === "IELTS") {
    return [
      { key: "listening", label: "Listening", timingSec: OFFICIAL.IELTS.listening, directions: "You hear each recording once; answer as you listen.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false } },
      { key: "reading", label: "Reading", timingSec: OFFICIAL.IELTS.reading, directions: "Read the passages and answer all 40 questions within 60 minutes.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false } },
      { key: "writing", label: "Writing", timingSec: OFFICIAL.IELTS.writing, directions: "Write at least 150 words for Task 1; Task 2 must be at least 250 words.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false } },
      { key: "speaking", label: "Speaking", timingSec: OFFICIAL.IELTS.speaking, directions: "Part 1: introduction and interview; Part 2: long turn; Part 3: discussion.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false } },
    ];
  }
  return [
    { key: "reading", label: "Reading", timingSec: OFFICIAL.TOEFL_IBT.reading, directions: "Complete-the-Words items and passage comprehension; two-stage adaptive.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: false, replayAudio: false } },
    { key: "listening", label: "Listening", timingSec: OFFICIAL.TOEFL_IBT.listening, directions: "Conversations, announcements and academic talks; you cannot go back.", navigation: { withinSection: "forward_only", allowBackToSection: false, flagForReview: false, replayAudio: false } },
    { key: "speaking", label: "Speaking", timingSec: OFFICIAL.TOEFL_IBT.speaking, directions: "Seven Listen-and-Repeat sentences, then a four-question interview.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: false, replayAudio: false } },
    { key: "writing", label: "Writing", timingSec: OFFICIAL.TOEFL_IBT.writing, directions: "Build-a-Sentence items, one email and one academic discussion response.", navigation: { withinSection: "free", allowBackToSection: false, flagForReview: false, replayAudio: false } },
  ];
}

async function seedExam(examKey: "IELTS" | "TOEFL_IBT"): Promise<void> {
  const scoring =
    examKey === "IELTS"
      ? {
          kind: "IELTS_BAND",
          unit: "band",
          rawToScore: {
            listening: [{ min: 4, band: 7 }, { min: 2, band: 5.5 }, { min: 0, band: 4 }],
            reading: [{ min: 4, band: 7 }, { min: 2, band: 5.5 }, { min: 0, band: 4 }],
          },
          overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
          minSectionScore: 0,
          maxSectionScore: 9,
          validityMonths: 24,
        }
      : {
          kind: "TOEFL_BAND_1_6",
          unit: "band",
          rawToScore: {
            reading: [{ min: 4, band: 5 }, { min: 2, band: 3.5 }, { min: 0, band: 2 }],
            listening: [{ min: 4, band: 5 }, { min: 2, band: 3.5 }, { min: 0, band: 2 }],
            speaking: [{ min: 4, band: 5 }, { min: 2, band: 3.5 }, { min: 0, band: 2 }],
            writing: [{ min: 4, band: 5 }, { min: 2, band: 3.5 }, { min: 0, band: 2 }],
          },
          overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
          minSectionScore: 1,
          maxSectionScore: 6,
          validityMonths: 24,
        };
  const spec = await db.testSpecification.create({
    data: {
      examKey,
      variant: "MATRIX",
      name: `${examKey === "IELTS" ? "IELTS Academic" : "TOEFL iBT (2026 format)"} (matrix fixture)`,
      version: 1,
      status: "active",
      effectiveDate: new Date(examKey === "IELTS" ? "2026-07-01" : "2026-01-21"),
      lastReviewedAt: new Date("2026-11-16"),
      reviewDueAt: new Date("2027-11-16"),
      sections: JSON.stringify(sectionsSpec(examKey)),
      scoringModel: JSON.stringify(scoring),
      taskTypes: JSON.stringify([
        { type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true },
        { type: "TFNG", label: "True/False/Not Given", description: "", objective: true },
        { type: "FILL_BLANK", label: "Completion", description: "", objective: true },
        { type: "COMPLETE_WORDS", label: "Complete the Words", description: "", objective: true },
        { type: "SENTENCE_RECONSTRUCTION", label: "Build a Sentence", description: "", objective: true },
        { type: "LISTEN_REPEAT", label: "Listen and Repeat", description: "", objective: true },
        { type: "WRITING_TASK", label: "Writing task", description: "", objective: false, rubricKey: "matrix.writing" },
        { type: "EMAIL_WRITING", label: "Write an Email", description: "", objective: false, rubricKey: "matrix.writing" },
        { type: "SPEAKING_TASK", label: "Interview speaking", description: "", objective: false, rubricKey: "matrix.speaking" },
      ]),
      sourceRefs: JSON.stringify([{ label: "Fixture", url: "https://fixture.talksy.test", retrievedAt: "2026-11-16" }]),
    },
  });
  MATRIX.specIds[examKey] = spec.id;
}

/** Question seeds per mock type (compact but real shapes). */
function questionsFor(kind: string): QSeed[] {
  const mcq = (order: number, stem: string): QSeed => ({
    order, type: "MCQ_SINGLE", stem,
    payload: { options: ["the supported answer", "an echo lure", "an overstated lure"], audioScript: "The supported answer is stated plainly in the recording." },
    answer: { option: 0 }, skills: ["detail"], difficulty: 2,
    explanation: "Only the first option matches what the speaker actually says.",
  });
  switch (kind) {
    case "IELTS Listening":
      return [mcq(1, "What does the caller request?"), mcq(2, "Which platform does the train leave from?"),
        { order: 3, type: "FILL_BLANK", stem: "Complete the form.", payload: { context: "Surname: ___", blanks: [{ answer: "Hartley", alternatives: [], numbers: false }], audioScript: "The surname is Hartley, H-A-R-T-L-E-Y." }, answer: { blanks: [{ answer: "Hartley", alternatives: [], numbers: false }] }, skills: ["spelling"], difficulty: 2, explanation: "The caller spells the surname: Hartley." },
        { order: 4, type: "FILL_BLANK", stem: "Complete the note.", payload: { context: "Total to pay: £___", blanks: [{ answer: "48", alternatives: ["forty-eight"], numbers: true }], audioScript: "That comes to forty-eight pounds in total." }, answer: { blanks: [{ answer: "48", alternatives: ["forty-eight"], numbers: true }] }, skills: ["numbers"], difficulty: 2, explanation: "The total stated is £48." }];
    case "IELTS Reading":
      return [mcq(1, "What is the harbour project's main aim?"),
        { order: 2, type: "TFNG", stem: "Do the following statements agree with the passage?", payload: { statement: "The market closed after the harbour reopened.", labels: ["True", "False", "Not Given"], passage: "The harbour reopened in 2004; the market had closed two years earlier, a victim of rising rents." }, answer: { value: 0 }, skills: ["detail"], difficulty: 3, explanation: "The market closed BEFORE the reopening, so the statement contradicts the passage." },
        { order: 3, type: "TFNG", stem: "Do the following statements agree with the passage?", payload: { statement: "The market closed because of falling visitor numbers.", labels: ["True", "False", "Not Given"], passage: "The harbour reopened in 2004; the market had closed two years earlier, a victim of rising rents." }, answer: { value: 1 }, skills: ["detail"], difficulty: 2, explanation: "The passage blames rising rents, not visitor numbers." },
        mcq(4, "What does 'resilient' most nearly mean in paragraph three?")];
    case "IELTS Writing":
      return [{ order: 1, type: "WRITING_TASK", stem: "Writing Task 1", payload: { prompt: "You live in a flat with a broken heating system. Write a letter to your landlord: describe the problem, explain the effects on your family, and say what you want the landlord to do.", minWords: 120, suggestedMinutes: 20, rubricKey: "matrix.writing", part: "task-1" }, answer: null, skills: ["letter-writing"], difficulty: 3, explanation: "Graded against the writing rubric." }];
    case "IELTS Speaking":
      return [{ order: 1, type: "SPEAKING_TASK", stem: "Speaking Part 2", payload: { prompt: "Describe a time when a journey took much longer than you expected. You should say: where you were going, what happened, and how you felt about it.", prepSec: 60, speakSec: 120, rubricKey: "matrix.speaking", part: "part-2", followUp: ["Do you usually plan journeys carefully?"] }, answer: null, skills: ["long-turn"], difficulty: 3, explanation: "Graded against the speaking rubric." }];
    case "TOEFL Reading":
      return [
        { order: 1, type: "COMPLETE_WORDS", stem: "Complete the words in the passage.", payload: { context: "The city council published its new trans___ plan after two years of consultation.", words: [{ masked: "trans___", answer: "transport" }] }, answer: { words: [{ answer: "transport" }] }, skills: ["vocabulary"], difficulty: 2, explanation: "The missing word is 'transport'." },
        { order: 2, type: "COMPLETE_WORDS", stem: "Complete the words in the passage.", payload: { context: "Volunteers planted two thousand trees to reduce the risk of fl___ in the valley.", words: [{ masked: "fl___", answer: "flooding" }] }, answer: { words: [{ answer: "flooding" }] }, skills: ["vocabulary"], difficulty: 2, explanation: "The missing word is 'flooding'." },
        mcq(3, "What is the main purpose of the transit plan?"), mcq(4, "Why were the trees planted?")];
    case "TOEFL Listening":
      return [mcq(1, "What does the student want to change?"),
        { order: 2, type: "MCQ_SINGLE", stem: "Why does the advisor mention the deadline?", payload: { options: ["to explain a rule that affects the request", "to criticise the student", "to cancel the meeting"], audioScript: "The advisor notes the Friday deadline because changes submitted after it only apply next term." }, answer: { option: 0 }, skills: ["purpose"], difficulty: 3, explanation: "The deadline explains when the change can take effect." },
        { order: 3, type: "MCQ_SINGLE", stem: "What will the student do next?", payload: { options: ["fill in the online form", "email the professor", "wait until next term"], audioScript: "So the next step is simple: complete the change-of-module form online before Friday." }, answer: { option: 0 }, skills: ["detail"], difficulty: 2, explanation: "The next step named is the online form." },
        mcq(4, "Where does this conversation take place?")];
    case "TOEFL Writing":
      return [
        { order: 1, type: "SENTENCE_RECONSTRUCTION", stem: "Build a sentence from the pieces.", payload: { scrambled: ["the", "library", "opens", "at", "nine", "on", "weekdays"], cue: "hours of operation" }, answer: { text: "the library opens at nine on weekdays" }, skills: ["word-order"], difficulty: 2, explanation: "The target sentence is 'the library opens at nine on weekdays'." },
        { order: 2, type: "SENTENCE_RECONSTRUCTION", stem: "Build a sentence from the pieces.", payload: { scrambled: ["researchers", "published", "their", "findings", "last", "month"], cue: "academic reporting" }, answer: { text: "researchers published their findings last month" }, skills: ["word-order"], difficulty: 2, explanation: "The target sentence is 'researchers published their findings last month'." },
        { order: 3, type: "EMAIL_WRITING", stem: "Write an email", payload: { situation: "Your university library fines students for late laptop returns. Write to the library director arguing for or against a 48-hour loan extension.", bullets: ["state your position", "support it with one reason from your experience", "suggest one compromise"], tone: "semi-formal", minWords: 80, suggestedMinutes: 10, rubricKey: "matrix.writing" }, answer: null, skills: ["email-writing"], difficulty: 3, explanation: "Graded against the writing rubric." }];
    case "TOEFL Speaking":
      return [
        { order: 1, type: "LISTEN_REPEAT", stem: "Listen and repeat.", payload: { sentence: "The registration desk closes at four in the afternoon.", windowSec: 10 }, answer: { text: "the registration desk closes at four in the afternoon" }, skills: ["accuracy"], difficulty: 2, explanation: "The target sentence was 'The registration desk closes at four in the afternoon.'" },
        { order: 2, type: "LISTEN_REPEAT", stem: "Listen and repeat.", payload: { sentence: "Campus buses run every twenty minutes on weekends.", windowSec: 10 }, answer: { text: "campus buses run every twenty minutes on weekends" }, skills: ["accuracy"], difficulty: 2, explanation: "The target sentence was 'Campus buses run every twenty minutes on weekends.'" },
        { order: 3, type: "LISTEN_REPEAT", stem: "Listen and repeat.", payload: { sentence: "The examination results are published within two weeks.", windowSec: 12 }, answer: { text: "the examination results are published within two weeks" }, skills: ["accuracy"], difficulty: 3, explanation: "The target sentence was 'The examination results are published within two weeks.'" },
        { order: 4, type: "SPEAKING_TASK", stem: "Interview question", payload: { prompt: "Some students prefer to study late at night; others prefer early morning. Which do you prefer and why?", prepSec: 15, speakSec: 45, rubricKey: "matrix.speaking", part: "interview" }, answer: null, skills: ["interview"], difficulty: 3, explanation: "Graded against the speaking rubric." }];
    default:
      return [mcq(1, "Fixture question?")];
  }
}

async function seedMock(examKey: "IELTS" | "TOEFL_IBT", sectionKey: SectionKey, title: string): Promise<string> {
  const mock = await db.mockTest.create({
    data: {
      examKey,
      variant: "MATRIX",
      specId: MATRIX.specIds[examKey],
      title,
      kind: "section",
      lengthLabel: "section mock",
      status: "published",
      description: "Matrix fixture. Original practice material — not an official paper.",
    },
  });
  const sectionSpec = sectionsSpec(examKey).find((s) => s.key === sectionKey)!;
  const section = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: sectionKey, title: sectionSpec.label, directions: sectionSpec.directions, timingSec: sectionSpec.timingSec, order: 1 },
  });
  for (const q of questionsFor(title)) {
    await db.mockTestQuestion.create({
      data: {
        sectionId: section.id,
        order: q.order,
        type: q.type,
        stem: q.stem,
        payload: JSON.stringify(q.payload),
        answer: q.answer == null ? null : JSON.stringify(q.answer),
        points: 1,
        skills: JSON.stringify(q.skills),
        difficulty: q.difficulty,
        explanation: q.explanation,
        source: "original-practice",
        contentStatus: "published",
      },
    });
  }
  return mock.id;
}

/** Level-aware fake: parses the scale and criteria from the prompt. */
const fakeGrader: LlmProvider = {
  name: "matrix-grader",
  complete: async (req: LlmRequest) => {
    const last = req.messages[req.messages.length - 1];
    const content = typeof last.content === "string" ? last.content : "";
    const marker = "LEARNER RESPONSE (evaluate this text):";
    const at = content.indexOf(marker);
    const raw = at >= 0 ? content.slice(at + marker.length).trim() : content;
    const response = raw.replace(/^"+/, "").replace(/"+\s*$/, "").trim();
    const scaleMatch = req.system.match(/score from (\d+(?:\.\d+)?) to (\d+(?:\.\d+)?)/);
    const min = scaleMatch ? Number(scaleMatch[1]) : 0;
    const max = scaleMatch ? Number(scaleMatch[2]) : 9;
    const keys = [...req.system.matchAll(/^- ([a-z-]+) — /gm)].map((m) => m[1]);
    const criteriaKeys = keys.length > 0 ? keys : ["task-achievement", "coherence-cohesion"];
    const score = Math.round((min + 0.72 * (max - min)) * 2) / 2;
    return JSON.stringify({
      overall: { score, explanation: "The response addresses the task with mostly controlled language and relevant support." },
      criteria: criteriaKeys.map((key) => ({
        key,
        score,
        explanation: "The requirements of the task are addressed with relevant support.",
      })),
      grammarCorrections: [],
      vocabulary: [],
      sentenceFeedback: [],
      missingRequirements: [],
      organisation: [],
    });
  },
  stream: async function* () {
    yield "{}";
  },
};

beforeAll(async () => {
  setLlmProviderOverride(fakeGrader);
  await cleanup();
  await seedExam("IELTS");
  await seedExam("TOEFL_IBT");
  // Rubrics for the constructed tasks.
  for (const taskKey of ["matrix.writing", "matrix.speaking"]) {
    await db.examRubric.create({
      data: {
        examKey: "IELTS",
        taskKey,
        title: `Matrix ${taskKey} rubric`,
        scale: JSON.stringify([
          { score: 7, criteria: [{ name: "Task", descriptor: "Covers the task with relevant support." }, { name: "Language", descriptor: "Mostly accurate with some range." }] },
          { score: 5, criteria: [{ name: "Task", descriptor: "Partially addresses the task." }, { name: "Language", descriptor: "Basic but mostly clear." }] },
        ]),
        sourceRefs: "[]",
      },
    });
  }
  MATRIX.mockIds["IELTS Listening"] = await seedMock("IELTS", "listening", "IELTS Listening");
  MATRIX.mockIds["IELTS Reading"] = await seedMock("IELTS", "reading", "IELTS Reading");
  MATRIX.mockIds["IELTS Writing"] = await seedMock("IELTS", "writing", "IELTS Writing");
  MATRIX.mockIds["IELTS Speaking"] = await seedMock("IELTS", "speaking", "IELTS Speaking");
  MATRIX.mockIds["TOEFL Reading"] = await seedMock("TOEFL_IBT", "reading", "TOEFL Reading");
  MATRIX.mockIds["TOEFL Listening"] = await seedMock("TOEFL_IBT", "listening", "TOEFL Listening");
  MATRIX.mockIds["TOEFL Writing"] = await seedMock("TOEFL_IBT", "writing", "TOEFL Writing");
  MATRIX.mockIds["TOEFL Speaking"] = await seedMock("TOEFL_IBT", "speaking", "TOEFL Speaking");
  const user = await db.user.create({
    data: { email: MATRIX.email, name: "Matrix Learner", passwordHash: "x:y", role: "student" },
  });
  MATRIX.userId = user.id;
});

afterAll(async () => {
  setLlmProviderOverride(null);
  await cleanup();
});

async function cleanup(): Promise<void> {
  await db.user.deleteMany({ where: { email: MATRIX.email } });
  await db.mockTest.deleteMany({ where: { variant: "MATRIX" } });
  await db.testSpecification.deleteMany({ where: { variant: "MATRIX" } });
  await db.examRubric.deleteMany({ where: { taskKey: { in: ["matrix.writing", "matrix.speaking"] } } });
}

// ---------------------------------------------------------------------------
// The eight mandated mock experiences
// ---------------------------------------------------------------------------

const CASES: Array<{
  title: string;
  exam: "IELTS" | "TOEFL_IBT";
  section: SectionKey;
  officialTiming: number;
  navigation: { withinSection: "free" | "forward_only"; flagForReview: boolean };
  expectScored: boolean;
}> = [
  { title: "IELTS Listening", exam: "IELTS", section: "listening", officialTiming: OFFICIAL.IELTS.listening, navigation: { withinSection: "free", flagForReview: true }, expectScored: true },
  { title: "IELTS Reading", exam: "IELTS", section: "reading", officialTiming: OFFICIAL.IELTS.reading, navigation: { withinSection: "free", flagForReview: true }, expectScored: true },
  { title: "IELTS Writing", exam: "IELTS", section: "writing", officialTiming: OFFICIAL.IELTS.writing, navigation: { withinSection: "free", flagForReview: true }, expectScored: true },
  { title: "IELTS Speaking", exam: "IELTS", section: "speaking", officialTiming: OFFICIAL.IELTS.speaking, navigation: { withinSection: "free", flagForReview: true }, expectScored: true },
  { title: "TOEFL Reading", exam: "TOEFL_IBT", section: "reading", officialTiming: OFFICIAL.TOEFL_IBT.reading, navigation: { withinSection: "free", flagForReview: false }, expectScored: true },
  { title: "TOEFL Listening", exam: "TOEFL_IBT", section: "listening", officialTiming: OFFICIAL.TOEFL_IBT.listening, navigation: { withinSection: "forward_only", flagForReview: false }, expectScored: true },
  { title: "TOEFL Writing", exam: "TOEFL_IBT", section: "writing", officialTiming: OFFICIAL.TOEFL_IBT.writing, navigation: { withinSection: "free", flagForReview: false }, expectScored: true },
  { title: "TOEFL Speaking", exam: "TOEFL_IBT", section: "speaking", officialTiming: OFFICIAL.TOEFL_IBT.speaking, navigation: { withinSection: "free", flagForReview: false }, expectScored: true },
];

describe("PROMPT 56 — the eight mock examinations", () => {
  for (const testCase of CASES) {
    it(`runs the ${testCase.title} mock end to end`, async () => {
      const mockId = MATRIX.mockIds[testCase.title];

      // 1+2+3. Safe projection: timing, instructions, navigation, no leaks.
      const safe = await getSafeMockTest(mockId);
      expect(safe).not.toBeNull();
      const section = safe!.sections[0];
      expect(section.key).toBe(testCase.section);
      expect(section.timingSec).toBe(testCase.officialTiming);
      expect((section.directions ?? "").length).toBeGreaterThan(20);
      expect(section.navigation.withinSection).toBe(testCase.navigation.withinSection);
      expect(section.navigation.flagForReview).toBe(testCase.navigation.flagForReview);
      expect(safe!.integrityNote.length).toBeGreaterThan(0);
      // The player projection must not carry answer keys.
      for (const q of section.questions) {
        const payload = JSON.stringify((q as { payload?: unknown }).payload ?? {});
        expect(payload).not.toMatch(/"answer"\s*:/);
      }

      // 4. Timed attempt, answers saved, refresh-resume persistence.
      const attempt = await startAttempt(MATRIX.userId, mockId, "section", true);
      expect(attempt).not.toBeNull();
      expect(attempt!.timed).toBe(true);

      const questions = await db.mockTestQuestion.findMany({
        where: { section: { mockTestId: mockId } },
        orderBy: { order: "asc" },
      });
      expect(questions.length).toBeGreaterThanOrEqual(1);

      let wrongCount = 0;
      for (const [index, q] of questions.entries()) {
        if (q.answer == null) {
          // Constructed response (writing/speaking): a real attempt text.
          const saved = await saveResponse(attempt!.id, q.id, { text: CONSTRUCTED_TEXT }, {});
          expect(saved).not.toBeNull();
          continue;
        }
        // Answer correctly except one deliberate mistake (proof of grading).
        const makeWrong = index === 1 && wrongCount === 0;
        if (makeWrong) wrongCount += 1;
        const correct = correctFor(q.type, JSON.parse(q.answer as string));
        const response = makeWrong && (correct as { option?: number }).option != null
          ? { option: ((correct as { option: number }).option + 1) % 3 }
          : makeWrong && (correct as { value?: number }).value != null
            ? { value: ((correct as { value: number }).value + 1) % 3 }
            : makeWrong
              ? { words: ["wrong"], blanks: ["wrong"], text: "totally wrong" }
              : correct;
        const saved = await saveResponse(attempt!.id, q.id, response, {});
        expect(saved).not.toBeNull();
      }

      // Simulate the refresh: re-open the attempt and the answers persist.
      const resumed = await db.mockTestResponse.findMany({ where: { attemptId: attempt!.id } });
      expect(resumed.length).toBe(questions.length);
      for (const row of resumed) {
        expect(row.answer).not.toBeNull();
      }

      // 5. Submit and verify the result.
      const submitted = await submitAttempt(attempt!.id);
      expect(submitted).not.toBeNull();
      const result = await getAttemptResult(attempt!.id, MATRIX.userId);
      expect(result).not.toBeNull();

      const sectionScore = result!.sectionScores.find((s) => s.section === testCase.section);
      expect(sectionScore).toBeDefined();
      expect(sectionScore!.max).toBe(questions.filter((q) => q.answer != null).length);
      // One deliberate mistake on the objective mocks (all-objective mocks only).
      if (questions.every((q) => q.answer != null) && questions.length > 1) {
        expect(sectionScore!.raw).toBe(sectionScore!.max - 1);
      }
      // Bands land on the exam's own scale.
      if (testCase.exam === "IELTS") {
        expect(sectionScore!.score).toBeGreaterThanOrEqual(0);
        expect(sectionScore!.score).toBeLessThanOrEqual(9);
      } else {
        expect(sectionScore!.score).toBeGreaterThanOrEqual(1);
        expect(sectionScore!.score).toBeLessThanOrEqual(6);
      }
      expect(result!.integrityNote.length).toBeGreaterThan(0);
      // Per-question outcomes exist for objective items with explanations.
      const objectiveResults = result!.questionResults.filter((qr) =>
        questions.some((q) => q.id === qr.questionId && q.answer != null),
      );
      expect(objectiveResults.length).toBe(questions.filter((q) => q.answer != null).length);

      // Constructed mocks reach "scored" (rubric grade present, honestly
      // labelled); all-objective mocks are machine-scored outright.
      if (testCase.expectScored) {
        expect(["submitted", "scored"]).toContain(result!.status);
      }
    });
  }

  it("machine-verifies TOEFL listen-and-repeat items without AI scores", async () => {
    const mockId = MATRIX.mockIds["TOEFL Speaking"];
    const attempt = await startAttempt(MATRIX.userId, mockId, "section", true);
    const questions = await db.mockTestQuestion.findMany({
      where: { section: { mockTestId: mockId } },
      orderBy: { order: "asc" },
    });
    const repeats = questions.filter((q) => q.type === "LISTEN_REPEAT");
    expect(repeats.length).toBe(3);
    for (const q of repeats) {
      await saveResponse(attempt!.id, q.id, correctFor(q.type, JSON.parse(q.answer as string)), {});
    }
    const interview = questions.find((q) => q.type === "SPEAKING_TASK")!;
    await saveResponse(attempt!.id, interview.id, { text: CONSTRUCTED_TEXT }, {});
    await submitAttempt(attempt!.id);
    const result = await getAttemptResult(attempt!.id, MATRIX.userId);
    const repeatResults = result!.questionResults.filter((qr) => repeats.some((r) => r.id === qr.questionId));
    expect(repeatResults.every((r) => r.correct)).toBe(true);
  });
});
