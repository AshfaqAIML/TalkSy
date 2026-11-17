import { describe, test, expect } from "bun:test";
import {
  evaluateAttempt,
  safeExercisePayload,
  skillForExercise,
  type ExerciseWithKeys,
} from "../src/server/core/evaluation";

/**
 * Server-authoritative exercise evaluation tests.
 *
 * These mirror the semantics of the stage-1 client grader (textMatches
 * semantics, order-token comparison, match per-question keys, self-assessed
 * speak/write) against the v1 database key shapes.
 */

function fixture(overrides: Partial<ExerciseWithKeys> & { questions: ExerciseWithKeys["questions"] }): ExerciseWithKeys {
  return {
    id: "ex-row-1",
    exerciseId: "p1-1-1-ex1",
    lessonId: "lesson-row-1",
    type: "MCQ",
    phase: "GUIDED",
    prompt: "Test prompt",
    audioText: null,
    wordId: null,
    isGradable: true,
    payloadJson: "{}",
    sortOrder: 1,
    ...overrides,
  };
}

describe("evaluation — MCQ (OPTION_INDEX)", () => {
  const mcq = fixture({
    type: "MCQ",
    questions: [
      {
        id: "q1",
        prompt: "Which word is a noun?",
        sortOrder: 1,
        options: [
          { id: "o1", content: "teacher", sortOrder: 0 },
          { id: "o2", content: "run", sortOrder: 1 },
          { id: "o3", content: "happy", sortOrder: 2 },
        ],
        key: { keyType: "OPTION_INDEX", correctIndex: 0, answerText: null, acceptedJson: null, explanation: "Teacher names a person.", modelAnswer: null },
      },
    ],
  });

  test("correct index passes", () => {
    const result = evaluateAttempt(mcq, { answer: 0 });
    expect(result.correct).toBe(true);
    expect(result.explanation).toBe("Teacher names a person.");
    expect(result.perQuestion[0].revealed).toBe("teacher");
  });

  test("wrong index fails and reveals the answer", () => {
    const result = evaluateAttempt(mcq, { answer: 2 });
    expect(result.correct).toBe(false);
    expect(result.perQuestion[0].revealed).toBe("teacher");
  });

  test("missing answer fails safe", () => {
    const result = evaluateAttempt(mcq, {});
    expect(result.correct).toBe(false);
  });

  test("safe payload never contains the key", () => {
    const payload = JSON.stringify(safeExercisePayload(mcq));
    expect(payload).not.toContain("correctIndex");
    expect(payload).not.toContain("Teacher names a person.");
    expect(payload).toContain("teacher"); // option contents are fine to show
  });
});

describe("evaluation — fill (ACCEPTED_LIST with textMatches semantics)", () => {
  const fill = fixture({
    type: "FILL",
    questions: [
      {
        id: "q1",
        prompt: "Type the word: H-E-L-L-O spells ______.",
        sortOrder: 1,
        options: [],
        key: { keyType: "ACCEPTED_LIST", correctIndex: null, answerText: null, acceptedJson: JSON.stringify(["hello"]), explanation: null, modelAnswer: null },
      },
    ],
  });

  test("case and punctuation tolerant", () => {
    expect(evaluateAttempt(fill, { answer: "Hello" }).correct).toBe(true);
    expect(evaluateAttempt(fill, { answer: "  HELLO! " }).correct).toBe(true);
  });

  test("wrong word fails", () => {
    expect(evaluateAttempt(fill, { answer: "helo" }).correct).toBe(false);
    expect(evaluateAttempt(fill, { answer: "goodbye" }).correct).toBe(false);
  });
});

describe("evaluation — order (ANSWER_TEXT token sequence)", () => {
  const order = fixture({
    type: "ORDER",
    questions: [
      {
        id: "q1",
        prompt: "Put the words in order.",
        sortOrder: 1,
        options: [],
        key: { keyType: "ANSWER_TEXT", correctIndex: null, answerText: "My name is Ana", acceptedJson: null, explanation: null, modelAnswer: null },
      },
    ],
  });

  test("exact order passes", () => {
    expect(evaluateAttempt(order, { answer: "My name is Ana" }).correct).toBe(true);
  });

  test("case/punctuation tolerated, order enforced", () => {
    expect(evaluateAttempt(order, { answer: "my name is ana" }).correct).toBe(true);
    expect(evaluateAttempt(order, { answer: "Ana name my is" }).correct).toBe(false);
  });
});

describe("evaluation — match (per-question OPTION_INDEX)", () => {
  const match = fixture({
    type: "MATCH",
    questions: [
      {
        id: "q1",
        prompt: "teacher",
        sortOrder: 1,
        options: [
          { id: "o1", content: "a place", sortOrder: 0 },
          { id: "o2", content: "a person", sortOrder: 1 },
        ],
        key: { keyType: "OPTION_INDEX", correctIndex: 1, answerText: null, acceptedJson: null, explanation: null, modelAnswer: null },
      },
      {
        id: "q2",
        prompt: "school",
        sortOrder: 2,
        options: [
          { id: "o1", content: "a place", sortOrder: 0 },
          { id: "o2", content: "a person", sortOrder: 1 },
        ],
        key: { keyType: "OPTION_INDEX", correctIndex: 0, answerText: null, acceptedJson: null, explanation: null, modelAnswer: null },
      },
    ],
  });

  test("all pairs correct passes", () => {
    const result = evaluateAttempt(match, {
      answers: [
        { question: 1, answer: 1 },
        { question: 2, answer: 0 },
      ],
    });
    expect(result.correct).toBe(true);
  });

  test("one wrong pair fails the exercise", () => {
    const result = evaluateAttempt(match, {
      answers: [
        { question: 1, answer: 1 },
        { question: 2, answer: 1 },
      ],
    });
    expect(result.correct).toBe(false);
    expect(result.perQuestion).toHaveLength(2);
    expect(result.perQuestion[0].correct).toBe(true);
    expect(result.perQuestion[1].correct).toBe(false);
  });

  test("unanswered question counts as wrong", () => {
    const result = evaluateAttempt(match, { answers: [{ question: 1, answer: 1 }] });
    expect(result.correct).toBe(false);
    expect(result.perQuestion[1].correct).toBe(false);
  });
});

describe("evaluation — listen (choice and type modes)", () => {
  test("listen choice behaves like mcq", () => {
    const listen = fixture({
      type: "LISTEN",
      audioText: undefined,
      questions: [
        {
          id: "q1",
          prompt: "Listen. What do you hear?",
          sortOrder: 1,
          options: [
            { id: "o1", content: "Hello", sortOrder: 0 },
            { id: "o2", content: "Yes", sortOrder: 1 },
            { id: "o3", content: "No", sortOrder: 2 },
          ],
          key: { keyType: "OPTION_INDEX", correctIndex: 0, answerText: null, acceptedJson: null, explanation: null, modelAnswer: null },
        },
      ],
    });
    expect(evaluateAttempt(listen, { answer: 0 }).correct).toBe(true);
  });

  test("listen type uses accepted list", () => {
    const listenType = fixture({
      type: "LISTEN",
      questions: [
        {
          id: "q1",
          prompt: "Listen and type the phrase.",
          sortOrder: 1,
          options: [],
          key: { keyType: "ACCEPTED_LIST", correctIndex: null, answerText: null, acceptedJson: JSON.stringify(["nice to meet you"]), explanation: null, modelAnswer: null },
        },
      ],
    });
    expect(evaluateAttempt(listenType, { answer: "Nice to meet you!" }).correct).toBe(true);
  });
});

describe("evaluation — speak and write are never graded", () => {
  test("speak records practice with target text for self-assessment", () => {
    const speak = fixture({
      type: "SPEAK",
      isGradable: false,
      phase: "SPEAKING",
      questions: [
        {
          id: "q1",
          prompt: "Say the sentence.",
          sortOrder: 1,
          options: [],
          key: { keyType: "TARGET_TEXT", correctIndex: null, answerText: "Hello! My name is Ana.", acceptedJson: null, explanation: null, modelAnswer: null },
        },
      ],
    });
    const result = evaluateAttempt(speak, {});
    expect(result.correct).toBeNull();
    expect(result.selfAssessModel).toBe("Hello! My name is Ana.");
  });

  test("speak with transcript computes similarity", () => {
    const speak = fixture({
      type: "SPEAK",
      isGradable: false,
      phase: "SPEAKING",
      questions: [
        {
          id: "q1",
          prompt: "Say the sentence.",
          sortOrder: 1,
          options: [],
          key: { keyType: "TARGET_TEXT", correctIndex: null, answerText: "Hello! My name is Ana.", acceptedJson: null, explanation: null, modelAnswer: null },
        },
      ],
    });
    const result = evaluateAttempt(speak, { answer: "hello my name is Ana" });
    expect(result.correct).toBeNull();
    expect(result.transcriptSimilarity).toBeGreaterThan(0.8);
  });

  test("write reveals the model answer after submission", () => {
    const write = fixture({
      type: "WRITE",
      isGradable: false,
      phase: "WRITING",
      questions: [
        {
          id: "q1",
          prompt: "Write your introduction.",
          sortOrder: 1,
          options: [],
          key: { keyType: "MODEL_ANSWER", correctIndex: null, answerText: null, acceptedJson: null, explanation: null, modelAnswer: "Hello! My name is Ana." },
        },
      ],
    });
    const result = evaluateAttempt(write, { answer: "hello my name" });
    expect(result.correct).toBeNull();
    expect(result.selfAssessModel).toBe("Hello! My name is Ana.");
  });
});

describe("evaluation — skill bucketing", () => {
  test("phases and types map to skill buckets", () => {
    expect(skillForExercise({ type: "MCQ", phase: "READING" })).toBe("READING");
    expect(skillForExercise({ type: "LISTEN", phase: null })).toBe("LISTENING");
    expect(skillForExercise({ type: "SPEAK", phase: "SPEAKING" })).toBe("SPEAKING");
    expect(skillForExercise({ type: "WRITE", phase: "WRITING" })).toBe("WRITING");
    expect(skillForExercise({ type: "MCQ", phase: "GUIDED" })).toBe("GRAMMAR");
    expect(skillForExercise({ type: "FILL", phase: null })).toBe("GRAMMAR");
  });
});
