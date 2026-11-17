import { textMatches, tokensMatch, similarity } from "@/lib/text-match";

/**
 * Mirror-table vocabularies (plain strings in SQLite — see the Exercise and
 * AnswerKey models in prisma/schema.prisma and the uppercase mapping the
 * admin content sync writes). Kept local so the module has no dependency
 * on generated enums that no longer exist.
 */
export type ExerciseType =
  | "MCQ"
  | "FILL"
  | "ORDER"
  | "MATCH"
  | "LISTEN"
  | "SPEAK"
  | "WRITE";

export type ExercisePhase =
  | "GUIDED"
  | "INDEPENDENT"
  | "SPEAKING"
  | "LISTENING"
  | "READING"
  | "WRITING"
  | "ASSESSMENT";

export type SkillType = "GRAMMAR" | "LISTENING" | "SPEAKING" | "WRITING" | "READING";

/**
 * Server-authoritative exercise evaluation.
 *
 * Answer keys live in the database (AnswerKey) and are NEVER serialized to
 * the client. The client submits an answer; this module decides correctness
 * against the key and returns what may be revealed AFTER the attempt
 * (explanation + correct answer for review).
 */

export type ExerciseWithKeys = {
  id: string;
  exerciseId: string;
  lessonId: string;
  type: ExerciseType;
  phase: ExercisePhase | null;
  prompt: string;
  audioText: string | null;
  wordId: string | null;
  isGradable: boolean;
  payloadJson: string;
  sortOrder: number;
  questions: {
    id: string;
    prompt: string;
    sortOrder: number;
    options: { id: string; content: string; sortOrder: number }[];
    key: {
      keyType: string;
      correctIndex: number | null;
      answerText: string | null;
      acceptedJson: string | null;
      explanation: string | null;
      modelAnswer: string | null;
    } | null;
  }[];
};

/** Client answer payload — single value, per-question values, or nothing. */
export interface AttemptInput {
  answer?: string | number;
  answers?: { question: number; answer: string | number }[];
}

export interface QuestionOutcome {
  question: number; // sortOrder (1-based, stable across client and server)
  correct: boolean;
  revealed: string | null; // the correct answer text, revealed after attempt
}

export interface EvaluationResult {
  /** null for self-assessed exercises (speak/write) — practice only */
  correct: boolean | null;
  explanation: string | null;
  perQuestion: QuestionOutcome[];
  /** self-assessed exercises: the model answer / target text to compare against */
  selfAssessModel: string | null;
  /** similarity score when a transcript was submitted for a speak exercise */
  transcriptSimilarity: number | null;
}

function acceptedList(key: NonNullable<ExerciseWithKeys["questions"][number]["key"]>): string[] {
  try {
    const parsed = JSON.parse(key.acceptedJson ?? "[]");
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function optionContent(
  question: ExerciseWithKeys["questions"][number],
  index: number | null
): string | null {
  if (index == null) return null;
  const opt = question.options.find((o) => o.sortOrder === index);
  return opt?.content ?? null;
}

/** Evaluates a single question against its key. */
function evaluateQuestion(
  question: ExerciseWithKeys["questions"][number],
  answer: string | number | undefined
): { correct: boolean; revealed: string | null } {
  const key = question.key;

  // Missing answer ⇒ incorrect (client must always send an answer for gradable types)
  if (answer === undefined) {
    return { correct: false, revealed: revealFor(question) };
  }
  // No key stored (mis-synced content) — fail safe, never crash a learner.
  if (!key) return { correct: false, revealed: null };

  switch (key.keyType) {
    case "OPTION_INDEX": {
      const idx = typeof answer === "number" ? answer : Number.parseInt(String(answer), 10);
      const correct = Number.isInteger(idx) && idx === key.correctIndex;
      return { correct, revealed: optionContent(question, key.correctIndex) };
    }
    case "ACCEPTED_LIST": {
      const accepted = acceptedList(key);
      const correct = typeof answer === "string" && accepted.some((a) => textMatches(answer, a));
      return { correct, revealed: accepted[0] ?? null };
    }
    case "ANSWER_TEXT": {
      const correct = typeof answer === "string" && tokensMatch(answer, key.answerText ?? "");
      return { correct, revealed: key.answerText };
    }
    default:
      // TARGET_TEXT / MODEL_ANSWER are self-assessed — handled by caller
      return { correct: false, revealed: key.modelAnswer ?? key.answerText ?? null };
  }
}

function revealFor(question: ExerciseWithKeys["questions"][number]): string | null {
  const key = question.key;
  if (!key) return null;
  if (key.keyType === "OPTION_INDEX") return optionContent(question, key.correctIndex);
  if (key.keyType === "ACCEPTED_LIST") return acceptedList(key)[0] ?? null;
  return key.answerText ?? key.modelAnswer ?? null;
}

/**
 * Evaluates a whole exercise attempt.
 *
 * speak/write: never graded (correct = null). The model answer / target text
 * is revealed for self-assessment, exactly like the stage-1 player.
 */
export function evaluateAttempt(
  exercise: ExerciseWithKeys,
  input: AttemptInput
): EvaluationResult {
  const perQuestion: QuestionOutcome[] = [];
  let transcriptSimilarity: number | null = null;

  // --- self-assessed practice (speak, write) ---------------------------
  if (!exercise.isGradable) {
    let selfAssessModel: string | null = null;
    for (const q of exercise.questions) {
      if (q.key?.modelAnswer) selfAssessModel = q.key.modelAnswer;
      if (q.key?.answerText) selfAssessModel = q.key.answerText; // speak target text
    }
    if (exercise.type === "SPEAK" && typeof input.answer === "string") {
      const target = exercise.questions[0]?.key?.answerText ?? "";
      transcriptSimilarity = target ? similarity(input.answer, target) : null;
    }
    return {
      correct: null,
      explanation: exercise.questions[0]?.key?.explanation ?? null,
      perQuestion: [],
      selfAssessModel,
      transcriptSimilarity,
    };
  }

  // --- graded exercises ------------------------------------------------
  if (exercise.type === "MATCH") {
    const byQuestion = new Map<number, string | number>();
    for (const a of input.answers ?? []) byQuestion.set(a.question, a.answer);
    for (const q of exercise.questions) {
      const outcome = evaluateQuestion(q, byQuestion.get(q.sortOrder));
      perQuestion.push({ question: q.sortOrder, correct: outcome.correct, revealed: outcome.revealed });
    }
  } else {
    const q = exercise.questions[0];
    if (q) {
      const outcome = evaluateQuestion(q, input.answer);
      perQuestion.push({ question: q.sortOrder, correct: outcome.correct, revealed: outcome.revealed });
    }
  }

  const correct = perQuestion.length > 0 && perQuestion.every((p) => p.correct);
  const explanation =
    exercise.questions.find((q) => q.key?.explanation)?.key?.explanation ?? null;

  return { correct, explanation, perQuestion, selfAssessModel: null, transcriptSimilarity };
}

/**
 * The safe (answer-free) exercise payload for GET endpoints: display data
 * only — options, prompts, audio text, shuffled order tokens. Never keys.
 */
export function safeExercisePayload(exercise: ExerciseWithKeys): unknown {
  const payload = JSON.parse(exercise.payloadJson || "{}") as Record<string, unknown>;
  return {
    exerciseId: exercise.exerciseId,
    type: exercise.type,
    phase: exercise.phase,
    prompt: exercise.prompt,
    audioText: exercise.audioText,
    isGradable: exercise.isGradable,
    ...payload,
    questions: exercise.questions.map((q) => ({
      question: q.sortOrder,
      prompt: q.prompt,
      options: q.options
        .slice()
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((o) => ({ index: o.sortOrder, content: o.content })),
    })),
  };
}

/** Which skill bucket does an exercise feed (SkillProgress)? */
export function skillForExercise(exercise: {
  type: ExerciseType;
  phase: ExercisePhase | null;
}): SkillType {
  if (exercise.phase === "READING") return "READING";
  switch (exercise.type) {
    case "LISTEN":
      return "LISTENING";
    case "SPEAK":
      return "SPEAKING";
    case "WRITE":
      return "WRITING";
    default:
      return "GRAMMAR";
  }
}
