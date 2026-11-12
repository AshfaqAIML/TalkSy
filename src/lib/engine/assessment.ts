/**
 * Assessment engine: draws a fixed-size assessment from an approved question
 * bank, grades a full submission, and builds the learner's performance
 * summary (overall score, per-difficulty / per-skill breakdown, targeted
 * recommendations).
 *
 * Selection is deterministic for a given (user, lesson, attempt) so a refresh
 * mid-assessment returns the same questions, but different attempts shuffle
 * the draw.
 */

import type {
  Difficulty,
  Exercise,
  Skill,
} from "@/data/curriculum/types";
import { seededShuffle } from "./normalize";
import { validateAnswer } from "./validators";

export interface AssessmentQuestionPick {
  exerciseIds: string[];
  seed: string;
}

/**
 * Pick `questionCount` exercises from the approved bank.
 * Guarantees: no duplicates, stable within a seed, prefers a difficulty mix
 * (easy → challenge) when the bank is large enough.
 */
export function selectAssessmentQuestions(
  bank: readonly Exercise[],
  questionCount: number,
  seed: string,
): AssessmentQuestionPick {
  const unique = new Map(bank.map((ex) => [ex.id, ex]));
  const ids = [...unique.keys()];
  if (ids.length === 0) return { exerciseIds: [], seed };

  const shuffled = seededShuffle(ids, `assessment:${seed}`);
  const count = Math.min(questionCount, shuffled.length);

  // Stratify by difficulty when the bank supports it: at least one easy (if
  // available) and one hard/challenge (if available), remainder shuffled.
  const byDifficulty = new Map<Difficulty, string[]>();
  for (const id of shuffled) {
    const ex = unique.get(id)!;
    const list = byDifficulty.get(ex.difficulty) ?? [];
    list.push(id);
    byDifficulty.set(ex.difficulty, list);
  }

  const picked: string[] = [];
  const takeFrom = (difficulty: Difficulty) => {
    const list = byDifficulty.get(difficulty);
    if (list && list.length > 0) picked.push(list.shift()!);
  };

  if (count >= 4) {
    takeFrom("easy");
    takeFrom("hard");
  }
  for (const difficulty of ["easy", "medium", "hard", "challenge"] as Difficulty[]) {
    while (picked.length < count) {
      const list = byDifficulty.get(difficulty);
      if (!list || list.length === 0) break;
      picked.push(list.shift()!);
    }
    if (picked.length >= count) break;
  }
  // Fill any remainder (small banks).
  for (const id of shuffled) {
    if (picked.length >= count) break;
    if (!picked.includes(id)) picked.push(id);
  }

  return { exerciseIds: picked.slice(0, count), seed };
}

export interface AssessmentGradedQuestion {
  exerciseId: string;
  type: string;
  difficulty: Difficulty;
  skill: Skill;
  correct: boolean;
  score: number;
  invalid: boolean;
}

export interface AssessmentGrade {
  total: number;
  correct: number;
  score: number; // 0–1
  passed: boolean;
  questions: AssessmentGradedQuestion[];
}

/** Grade every submitted answer against the bank exercises. */
export function gradeAssessment(
  questions: readonly Exercise[],
  answers: { exerciseId: string; answer: unknown }[],
  passScore: number,
): AssessmentGrade {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const answerMap = new Map(answers.map((a) => [a.exerciseId, a.answer]));

  const graded: AssessmentGradedQuestion[] = questions.map((q) => {
    const result = validateAnswer(q, answerMap.get(q.id));
    return {
      exerciseId: q.id,
      type: q.type,
      difficulty: q.difficulty,
      skill: q.skill,
      correct: result.correct,
      score: result.score,
      invalid: result.invalid,
    };
  });

  const total = graded.length;
  const correct = graded.filter((q) => q.correct).length;
  const score = total === 0 ? 0 : correct / total;
  return {
    total,
    correct,
    score: Math.round(score * 1000) / 1000,
    passed: total > 0 && score >= passScore,
    questions: graded,
  };
}

export interface SkillBreakdown {
  skill: string;
  attempts: number;
  correct: number;
}

export interface DifficultyBreakdown {
  difficulty: string;
  attempts: number;
  correct: number;
}

export interface AssessmentSummary {
  scorePercent: number;
  passed: boolean;
  total: number;
  correct: number;
  passMarkPercent: number;
  byDifficulty: DifficultyBreakdown[];
  bySkill: SkillBreakdown[];
  /** Exercise ids answered incorrectly — for the review panel. */
  wrongExerciseIds: string[];
  recommendation: string;
}

/** Build the human-facing performance summary from a graded assessment. */
export function buildAssessmentSummary(
  grade: AssessmentGrade,
  passScore: number,
): AssessmentSummary {
  const group = <K extends keyof AssessmentGradedQuestion>(key: K) => {
    const map = new Map<string, { attempts: number; correct: number }>();
    for (const q of grade.questions) {
      const k = String(q[key]);
      const entry = map.get(k) ?? { attempts: 0, correct: 0 };
      entry.attempts += 1;
      if (q.correct) entry.correct += 1;
      map.set(k, entry);
    }
    return map;
  };

  const byDifficultyMap = group("difficulty");
  const bySkillMap = group("skill");

  const byDifficulty: DifficultyBreakdown[] = [
    "easy",
    "medium",
    "hard",
    "challenge",
  ]
    .filter((d) => byDifficultyMap.has(d))
    .map((d) => ({ difficulty: d, ...byDifficultyMap.get(d)! }));

  const bySkill: SkillBreakdown[] = [...bySkillMap.entries()]
    .map(([skill, v]) => ({ skill, ...v }))
    .sort((a, b) => b.attempts - a.attempts);

  const wrongExerciseIds = grade.questions
    .filter((q) => !q.correct)
    .map((q) => q.exerciseId);

  const scorePercent = Math.round(grade.score * 100);
  const passMarkPercent = Math.round(passScore * 100);

  let recommendation: string;
  if (grade.passed && scorePercent === 100) {
    recommendation =
      "Perfect score. You have mastered this lesson — move on to the next lesson in the path.";
  } else if (grade.passed) {
    recommendation = `You passed with ${scorePercent}%. Review the ${
      wrongExerciseIds.length
    } question${wrongExerciseIds.length === 1 ? "" : "s"} you missed, then continue to the next lesson.`;
  } else if (scorePercent >= passMarkPercent - 20) {
    recommendation = `You scored ${scorePercent}%, just below the ${passMarkPercent}% pass mark. Review the sections linked to the questions you missed and retake the assessment.`;
  } else {
    recommendation = `You scored ${scorePercent}%. Work through the lesson sections again, especially the grammar rules and vocabulary lists, then retake the assessment.`;
  }

  return {
    scorePercent,
    passed: grade.passed,
    total: grade.total,
    correct: grade.correct,
    passMarkPercent,
    byDifficulty,
    bySkill,
    wrongExerciseIds,
    recommendation,
  };
}
