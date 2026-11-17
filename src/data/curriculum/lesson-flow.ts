import type {
  CommonMistake,
  ConceptSection,
  Dialogue,
  CourseExercise,
  ExercisePhase,
  ExampleBank,
  GrammarSection,
  HomeworkSection,
  CourseLesson,
  Passage,
  RealLifeSection,
  RevisionSection,
  StructuredCourseLesson,
  TeachingStepCard,
  VocabItem,
} from "./types";
import { isStructuredLesson } from "./types";

/**
 * CourseLesson flow: turns a CourseLesson into the ordered list of player steps.
 *
 * Legacy lessons (A1/A2) keep their exact original flow:
 *   vocab cards → dialogue → grammar → passage → exercises
 *
 * Structured lessons (the 17-section beginner template) flow in full
 * teaching order:
 *
 *   1. introduction (+ objectives + prerequisites)
 *   2. vocabulary cards
 *   3. concept explanation                      (section 4)
 *   4. step-by-step teaching, one card per step  (section 5)
 *   5. example bank                              (section 6)
 *   6. dialogue
 *   7. real-life application                     (section 7)
 *   8. guided practice exercises                 (section 8)
 *   9. independent practice exercises            (section 9)
 *  10. speaking exercises                        (section 10)
 *  11. listening exercises                       (section 11)
 *  12. reading passage + reading exercises       (section 12)
 *  13. writing exercises                         (section 13)
 *  14. common mistakes                           (section 14)
 *  15. revision                                  (section 15)
 *  16. assessment exercises                      (section 16)
 *  17. homework                                  (section 17)
 */

export type FlowStep =
  | { kind: "intro"; lesson: CourseLesson }
  | { kind: "vocab"; word: VocabItem }
  | { kind: "concept"; concept: ConceptSection }
  | { kind: "teach"; step: TeachingStepCard; index: number; total: number }
  | { kind: "examples"; bank: ExampleBank }
  | { kind: "dialogue"; dialogue: Dialogue }
  | { kind: "reallife"; realLife: RealLifeSection }
  | { kind: "grammar"; grammar: GrammarSection }
  | { kind: "passage"; passage: Passage }
  | { kind: "exercise"; exercise: CourseExercise; phaseLabel?: string }
  | { kind: "mistakes"; mistakes: CommonMistake[] }
  | { kind: "revision"; revision: RevisionSection }
  | { kind: "homework"; homework: HomeworkSection };

/** Learner-facing labels for the exercise phases of a structured lesson. */
export const PHASE_LABELS: Record<ExercisePhase, string> = {
  guided: "Guided practice",
  independent: "Practice on your own",
  speaking: "Speaking exercise",
  listening: "Listening exercise",
  reading: "Reading exercise",
  writing: "Writing exercise",
  assessment: "Lesson check",
};

/** Template order of the exercise phases inside a structured lesson. */
const PHASE_ORDER: ExercisePhase[] = [
  "guided",
  "independent",
  "speaking",
  "listening",
  "reading",
  "writing",
  "assessment",
];

export function buildLessonFlow(lesson: CourseLesson): FlowStep[] {
  if (!isStructuredLesson(lesson)) {
    return legacyFlow(lesson);
  }
  return structuredFlow(lesson);
}

/* ------------------------------------------------------------------ */
/* Legacy flow (A1/A2) — unchanged behaviour                           */
/* ------------------------------------------------------------------ */

function legacyFlow(lesson: CourseLesson): FlowStep[] {
  const out: FlowStep[] = [];
  for (const word of lesson.vocab) out.push({ kind: "vocab", word });
  if (lesson.dialogue) out.push({ kind: "dialogue", dialogue: lesson.dialogue });
  if (lesson.grammar) out.push({ kind: "grammar", grammar: lesson.grammar });
  if (lesson.passage) out.push({ kind: "passage", passage: lesson.passage });
  for (const exercise of lesson.exercises) out.push({ kind: "exercise", exercise });
  return out;
}

/* ------------------------------------------------------------------ */
/* Structured flow (17-section template)                               */
/* ------------------------------------------------------------------ */

function structuredFlow(lesson: StructuredCourseLesson): FlowStep[] {
  const out: FlowStep[] = [];

  // 1 — introduction + objectives + prerequisites
  out.push({ kind: "intro", lesson });

  // 2 — vocabulary cards
  for (const word of lesson.vocab) out.push({ kind: "vocab", word });

  // 3 — concept explanation
  if (lesson.concept) out.push({ kind: "concept", concept: lesson.concept });

  // 4 — step-by-step teaching, one card per step
  const steps = lesson.teachingSteps ?? [];
  steps.forEach((step, i) => out.push({ kind: "teach", step, index: i + 1, total: steps.length }));

  // 5 — example bank
  if (lesson.exampleBank) out.push({ kind: "examples", bank: lesson.exampleBank });

  // 6 — dialogue
  if (lesson.dialogue) out.push({ kind: "dialogue", dialogue: lesson.dialogue });

  // 7 — real-life application
  if (lesson.realLife) out.push({ kind: "reallife", realLife: lesson.realLife });

  // 8–13 + 16 — exercises in template order, with the reading passage
  // inserted before the first reading exercise, and the common-mistakes and
  // revision cards inserted before the assessment block.
  let passageShown = false;
  let preAssessmentShown = false;
  let currentPhase: ExercisePhase | undefined;
  for (const exercise of lesson.exercises) {
    const phase = exercise.phase ?? "guided";

    if (phase === "reading" && !passageShown && lesson.passage) {
      out.push({ kind: "passage", passage: lesson.passage });
      passageShown = true;
    }
    if (phase === "assessment" && !preAssessmentShown) {
      if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
        out.push({ kind: "mistakes", mistakes: lesson.commonMistakes });
      }
      if (lesson.revision) out.push({ kind: "revision", revision: lesson.revision });
      preAssessmentShown = true;
    }

    const phaseLabel =
      phase !== currentPhase && exercise.phase != null ? PHASE_LABELS[phase] : undefined;
    out.push({ kind: "exercise", exercise, ...(phaseLabel ? { phaseLabel } : {}) });
    currentPhase = phase;
  }

  // 17 — homework
  if (lesson.homework) out.push({ kind: "homework", homework: lesson.homework });

  return out;
}

/**
 * Validation helper: the phases of a lesson's exercises must appear in
 * template order (guided → independent → speaking → listening → reading →
 * writing → assessment), because the player renders them in array order.
 */
export function exercisePhasesInOrder(lesson: CourseLesson): boolean {
  let lastRank = -1;
  for (const exercise of lesson.exercises) {
    if (exercise.phase == null) continue;
    const rank = PHASE_ORDER.indexOf(exercise.phase);
    if (rank === -1) return false;
    if (rank < lastRank) return false;
    lastRank = rank;
  }
  return true;
}
