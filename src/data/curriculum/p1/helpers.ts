import type { ContentReview, CourseExercise, ExercisePhase, VocabItem } from "../types";

/**
 * Authoring helpers for the P1 Foundations course (and future structured
 * courses). CourseExercise and word ids are assigned automatically in call order,
 * following the stable id rules:
 *   exerciseId: "{lessonSlug}-ex{n}"     wordId: "{lessonSlug}-w{n}"
 *
 * This removes id bookkeeping from content authoring entirely — the author
 * writes exercises in teaching order and the ids follow.
 */
export function makeLessonTools(slug: string) {
  let exCount = 0;
  let wordCount = 0;
  const nextEx = () => `${slug}-ex${(exCount += 1)}`;
  const nextWord = () => `${slug}-w${(wordCount += 1)}`;

  /**
   * Deterministic answer-slot rotation: spreads the correct answer across
   * option positions so learners cannot game "always pick the first".
   * The rotation is derived from the exercise number, so it is stable for
   * persisted content. Authors pass the answer in ANY position; the helper
   * rotates options and the answer index together.
   */
  const rotate = <T>(options: T[], answerIndex: number): { options: T[]; answerIndex: number } => {
    const shift = exCount % options.length;
    if (shift === 0) return { options, answerIndex };
    return {
      options: [...options.slice(shift), ...options.slice(0, shift)],
      answerIndex: (answerIndex - shift + options.length) % options.length,
    };
  };

  return {
    /** vocabulary item: term, part of speech, simple definition, example */
    w: (term: string, pos: string, definition: string, example: string): VocabItem => ({
      id: nextWord(),
      term,
      pos,
      definition,
      example,
    }),

    /** multiple choice — options must have at least 3 entries */
    mcq: (
      phase: ExercisePhase,
      prompt: string,
      options: [string, string, string, ...string[]],
      answerIndex: number,
      explanation?: string
    ): CourseExercise => {
      const slot = rotate(options as string[], answerIndex);
      return {
        id: nextEx(),
        type: "mcq",
        phase,
        prompt,
        options: slot.options,
        answerIndex: slot.answerIndex,
        // reading-phase exercises always work on this lesson's passage
        ...(phase === "reading" ? { passageId: slug } : {}),
        ...(explanation ? { explanation } : {}),
      };
    },

    /**
     * Type-the-answer exercise. The optional fourth argument is a HINT for
     * guided/independent practice and the ANSWER-KEY EXPLANATION for the
     * assessment phase (assessment items give rationale, never hints).
     */
    fill: (
      phase: ExercisePhase,
      prompt: string,
      accepted: string[],
      hintOrExplanation?: string,
      explanation?: string
    ): CourseExercise => {
      const isAssessment = phase === "assessment";
      const hint = !isAssessment && hintOrExplanation ? hintOrExplanation : undefined;
      const rationale =
        isAssessment && hintOrExplanation ? hintOrExplanation : explanation;
      return {
        id: nextEx(),
        type: "fill",
        phase,
        prompt,
        accepted,
        ...(phase === "reading" ? { passageId: slug } : {}),
        ...(hint ? { hint } : {}),
        ...(rationale ? { explanation: rationale } : {}),
      };
    },

    /** word-ordering exercise — answer tokens are separated by spaces */
    order: (phase: ExercisePhase, prompt: string, answer: string, explanation?: string): CourseExercise => ({
      id: nextEx(),
      type: "order",
      phase,
      prompt,
      answer,
      ...(explanation ? { explanation } : {}),
    }),

    /** matching pairs exercise */
    match: (phase: ExercisePhase, prompt: string, pairs: { left: string; right: string }[]): CourseExercise => ({
      id: nextEx(),
      type: "match",
      phase,
      prompt,
      pairs,
    }),

    /** listening with multiple choice */
    listenChoice: (
      phase: ExercisePhase,
      audioText: string,
      prompt: string,
      options: [string, string, string, ...string[]],
      answerIndex: number,
      wordId?: string,
      explanation?: string
    ): CourseExercise => {
      const slot = rotate(options as string[], answerIndex);
      return {
        id: nextEx(),
        type: "listen",
        phase,
        mode: "choice",
        audioText,
        prompt,
        options: slot.options,
        answerIndex: slot.answerIndex,
        ...(wordId ? { wordId } : {}),
        ...(explanation ? { explanation } : {}),
      };
    },

    /** listening with a typed answer */
    listenType: (
      phase: ExercisePhase,
      audioText: string,
      prompt: string,
      accepted: string[],
      wordId?: string
    ): CourseExercise => ({
      id: nextEx(),
      type: "listen",
      phase,
      mode: "type",
      audioText,
      prompt,
      accepted,
      ...(wordId ? { wordId } : {}),
    }),

    /** speaking exercise (always the speaking phase) */
    speak: (prompt: string, targetText: string): CourseExercise => ({
      id: nextEx(),
      type: "speak",
      phase: "speaking",
      prompt,
      targetText,
    }),

    /** writing exercise with a model answer (always the writing phase) */
    write: (prompt: string, modelAnswer: string, hint?: string): CourseExercise => ({
      id: nextEx(),
      type: "write",
      phase: "writing",
      prompt,
      modelAnswer,
      ...(hint ? { hint } : {}),
    }),
  };
}

/**
 * Content governance metadata for P1 lessons. Everything ships as an
 * AI-assisted DRAFT: it must be reviewed by a qualified human ESL teacher
 * before the status may change. The validator (src/data/curriculum/validate.ts)
 * enforces that AI-assisted content is never marked expert-reviewed or
 * published, and tests block the build if it is.
 */
export function draftMeta(catalogueTargets: string[], reviewNotes?: string): ContentReview {
  return {
    status: "draft",
    contentVersion: "1.0.0",
    authoredBy: "TalkSy Content Team — AI-assisted draft (unreviewed)",
    catalogueTargets,
    reviewNotes:
      reviewNotes ??
      "Awaiting review by a qualified ESL teacher before release to learners.",
  };
}
