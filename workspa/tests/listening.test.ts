/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  getListeningActivity,
  getListeningExercise,
  listeningActivities,
  listeningStages,
  validateListeningLibrary,
} from "@/data/listening";
import { gradeListeningExercise, toSafeListeningExercise } from "@/lib/listening/grade";
import {
  FORMAT_LABELS,
  LISTENING_FORMATS,
  type ArrangeListeningExercise,
  type ChoiceListeningExercise,
  type CompleteListeningExercise,
  type TextListeningExercise,
} from "@/data/listening/types";

function activity_exercise(activity: ReturnType<typeof getListeningActivity>, format: string) {
  return activity!.exercises.find((e) => e.format === format)!;
}

describe("listening library integrity", () => {
  it("passes the full integrity validation", () => {
    const report = validateListeningLibrary();
    expect(report.errors).toEqual([]);
    expect(report.ok).toBe(true);
  });

  it("has nine progression stages, each with at least two activities", () => {
    expect(listeningStages.map((s) => s.id)).toEqual([
      "sounds",
      "vocabulary",
      "phrases",
      "sentences",
      "conversations",
      "stories",
      "discussions",
      "natural",
      "professional",
    ]);
    expect(listeningActivities.length).toBeGreaterThanOrEqual(18);
    for (const stage of listeningStages) {
      const activities = listeningActivities.filter((a) => a.stage === stage.id);
      expect(activities.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("uses all eight exercise formats at least twice", () => {
    const counts = new Map<string, number>();
    for (const activity of listeningActivities) {
      for (const exercise of activity.exercises) {
        counts.set(exercise.format, (counts.get(exercise.format) ?? 0) + 1);
      }
    }
    for (const format of LISTENING_FORMATS) {
      expect(counts.get(format) ?? 0).toBeGreaterThanOrEqual(2);
    }
    expect(Object.keys(FORMAT_LABELS)).toHaveLength(8);
  });

  it("keeps speaker identification inside multi-speaker activities with matching voices", () => {
    for (const activity of listeningActivities) {
      const speakerIds = new Set((activity.speakers ?? []).map((s) => s.id));
      for (const exercise of activity.exercises) {
        if (exercise.format === "speaker-identify") {
          expect(
            activity.speakers,
            `${activity.slug}: speaker-identify needs speakers`,
          ).toBeDefined();
          expect(speakerIds.size).toBeGreaterThanOrEqual(2);
        }
        for (const segmentId of exercise.segmentIds) {
          expect(
            activity.segments.some((s) => s.id === segmentId),
            `${activity.slug} exercise ${exercise.id} references unknown segment`,
          ).toBe(true);
        }
      }
      for (const segment of activity.segments) {
        if (segment.speakerId) {
          expect(speakerIds.has(segment.speakerId)).toBe(true);
        }
      }
    }
  });

  it("locks transcripts for comprehension-assessing stages and reveals them per exercise", () => {
    for (const activity of listeningActivities) {
      if (activity.stage === "sounds" && activity.slug === "first-letter-sounds") {
        expect(activity.transcriptPolicy).toBe("open");
      } else {
        expect(activity.transcriptPolicy).toBe("locked");
      }
      // Every exercise reveals its audio lines in the feedback.
      for (const exercise of activity.exercises) {
        expect(exercise.feedback.revealSegments.length).toBeGreaterThan(0);
      }
    }
  });

  it("looks activities up by slug and exercises by activity+id", () => {
    const activity = getListeningActivity("ordering-at-a-cafe");
    expect(activity?.title).toBe("Ordering at a Café");
    expect(activity?.exercises.length).toBeGreaterThan(0);
    expect(getListeningExercise(activity!.id, activity!.exercises[0].id)).not.toBeNull();
    expect(getListeningActivity("nope")).toBeNull();
    expect(getListeningExercise(activity!.id, "nope")).toBeNull();
  });
});

describe("listening grading", () => {
  it("grades choice-shaped formats (listen-select, speaker-identify, specific-info, overall-meaning)", () => {
    const activity = getListeningActivity("ordering-at-a-cafe")!;
    const exercise = activity.exercises.find(
      (e) => e.format === "speaker-identify",
    ) as ChoiceListeningExercise;
    const correct = gradeListeningExercise(exercise, {
      format: "choice",
      optionId: exercise.correctOptionId,
    });
    expect(correct).toEqual({ correct: true, score: 1, invalid: false });

    const wrong = exercise.options.find((o) => o.id !== exercise.correctOptionId)!;
    expect(gradeListeningExercise(exercise, { format: "choice", optionId: wrong.id }).correct).toBe(false);
    expect(gradeListeningExercise(exercise, { format: "choice", optionId: "zzz" }).invalid).toBe(true);
    expect(gradeListeningExercise(exercise, { format: "text", text: "barista" }).invalid).toBe(true);
  });

  it("grades listen-and-complete blanks with partial credit", () => {
    const activity = getListeningActivity("what-time-is-it")!;
    const exercise = activity.exercises.find(
      (e) => e.format === "listen-complete",
    ) as CompleteListeningExercise;
    const [blank] = exercise.blanks;
    const correct = gradeListeningExercise(exercise, {
      format: "complete",
      blanks: { [blank.id]: blank.acceptedAnswers[0] },
    });
    expect(correct).toEqual({ correct: true, score: 1, invalid: false });

    const wrong = gradeListeningExercise(exercise, {
      format: "complete",
      blanks: { [blank.id]: "quarter past nine" },
    });
    expect(wrong.correct).toBe(false);
    expect(wrong.score).toBe(0);

    // Empty submissions are invalid.
    expect(gradeListeningExercise(exercise, { format: "complete", blanks: {} }).invalid).toBe(true);

    // Multi-blank partial credit.
    const multi = getListeningActivity("weekend-plans")!.exercises.find(
      (e) => e.format === "listen-complete",
    ) as CompleteListeningExercise;
    const half = multi.blanks.map((b, i) => [b.id, i === 0 ? b.acceptedAnswers[0] : "???"]);
    const partial = gradeListeningExercise(multi, {
      format: "complete",
      blanks: Object.fromEntries(half),
    });
    expect(partial.correct).toBe(false);
    expect(partial.score).toBeGreaterThan(0);
    expect(partial.score).toBeLessThan(1);
  });

  it("grades listen-and-arrange with position-based partial credit", () => {
    const activity = getListeningActivity("daily-routines")!;
    const exercise = activity.exercises.find(
      (e) => e.format === "listen-arrange",
    ) as ArrangeListeningExercise;
    const correct = gradeListeningExercise(exercise, {
      format: "arrange",
      order: exercise.correctOrder,
    });
    expect(correct).toEqual({ correct: true, score: 1, invalid: false });

    const rotated = [...exercise.correctOrder.slice(1), exercise.correctOrder[0]];
    const partial = gradeListeningExercise(exercise, { format: "arrange", order: rotated });
    expect(partial.correct).toBe(false);
    expect(partial.invalid).toBe(false);

    expect(gradeListeningExercise(exercise, { format: "arrange", order: ["x"] }).invalid).toBe(true);
  });

  it("grades dictation strictly and listen-answer by keywords", () => {
    const dictationActivity = getListeningActivity("greeting-phrases")!;
    const dictation = activity_exercise(dictationActivity, "dictation") as TextListeningExercise;
    const exact = gradeListeningExercise(dictation, {
      format: "text",
      text: dictation.acceptedAnswers[0],
    });
    expect(exact.correct).toBe(true);
    // Different content is wrong.
    expect(gradeListeningExercise(dictation, { format: "text", text: "see you later" }).correct).toBe(false);

    // Word-level typo tolerance applies to longer words (fourtten ≈ fourteen).
    const numbers = getListeningActivity("numbers-you-hear")!;
    const numbersDictation = activity_exercise(numbers, "dictation") as TextListeningExercise;
    expect(
      gradeListeningExercise(numbersDictation, { format: "text", text: "fourtten" }).correct,
    ).toBe(true);
    expect(
      gradeListeningExercise(numbersDictation, { format: "text", text: "fourty" }).correct,
    ).toBe(false);

    const phoneActivity = getListeningActivity("making-plans-on-the-phone")!;
    const keywordsExercise = phoneActivity.exercises.find(
      (e) => e.format === "listen-answer" && e.keywords,
    ) as TextListeningExercise;
    const byKeywords = gradeListeningExercise(keywordsExercise, {
      format: "text",
      text: "They will eat at the new noodle place round the corner, I've been dying to try it",
    });
    expect(byKeywords.correct).toBe(true);
    expect(
      gradeListeningExercise(keywordsExercise, { format: "text", text: "at home" }).correct,
    ).toBe(false);
    expect(
      gradeListeningExercise(keywordsExercise, { format: "text", text: "" }).invalid,
    ).toBe(true);
  });

  it("sanitises exercises: no grading data or feedback leaks", () => {
    for (const activity of listeningActivities) {
      for (const exercise of activity.exercises) {
        const safe = toSafeListeningExercise(exercise, "seed-1") as unknown as Record<string, unknown>;
        expect(safe["correctOptionId"]).toBeUndefined();
        expect(safe["correctOrder"]).toBeUndefined();
        expect(safe["acceptedAnswers"]).toBeUndefined();
        expect(safe["keywords"]).toBeUndefined();
        expect(safe["feedback"]).toBeUndefined();
        expect(Array.isArray(safe["hints"])).toBe(true);
        if (exercise.format === "listen-complete") {
          const blanks = safe["blanks"] as { id: string }[];
          expect(blanks.every((b) => Object.keys(b).length === 1)).toBe(true);
        }
      }
    }
  });
});
