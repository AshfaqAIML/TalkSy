import { describe, test, expect } from "bun:test";
import {
  JOURNEY,
  PLANNED_JOURNEY,
  SUBJECT_FACETS,
  journeyStageOf,
  subjectsOf,
  unitFacets,
} from "../src/data/curriculum/journey";
import { availableLevels, orderedLessonSlugs, curriculum } from "../src/data/curriculum";
import {
  computeNextLesson,
  deriveInProgressLessons,
} from "../src/lib/curriculum-server";
import {
  buildTodayPlan,
  computeRevisionSchedule,
  deriveSkillActivity,
  exerciseSkillBucket,
  splitRevisionSchedule,
  weeklyTargetOf,
  courseStateOf,
  formatMinutes,
  relativeTime,
} from "../src/lib/learning-stats";
import {
  attemptCountsOf,
  buildCourseDetail,
  buildCourseSummaries,
} from "../src/lib/course-catalogue-server";
import type { CourseExercise as Exercise } from "../src/data/curriculum/types";

/**
 * Learning-environment derivations: every number the dashboard, roadmap and
 * course catalogue shows must come from these pure functions over real
 * content/rows — the tests pin their behaviour.
 */

const liveUnitSlugs = availableLevels.flatMap((l) => l.units.map((u) => u.slug));

describe("journey metadata", () => {
  test("covers exactly the 18 live units", () => {
    expect(JOURNEY.length).toBe(18);
    expect(JOURNEY.map((j) => j.unitSlug).sort()).toEqual([...liveUnitSlugs].sort());
  });

  test("every unit has a stage and 1–3 subject tags from the facet vocabulary", () => {
    const vocabulary = new Set(SUBJECT_FACETS.map((f) => f.tag));
    for (const entry of JOURNEY) {
      expect(entry.stage.length).toBeGreaterThan(0);
      expect(entry.subjects.length).toBeGreaterThanOrEqual(1);
      expect(entry.subjects.length).toBeLessThanOrEqual(3);
      for (const tag of entry.subjects) {
        expect(vocabulary.has(tag)).toBe(true);
      }
    }
  });

  test("lookups return null/empty for unknown slugs", () => {
    expect(journeyStageOf("nope-1")).toBeNull();
    expect(subjectsOf("nope-1")).toEqual([]);
  });

  test("planned journey lists exactly the in-development levels, honestly", () => {
    const plannedCodes = curriculum.filter((l) => l.status !== "available").map((l) => l.code);
    expect(PLANNED_JOURNEY.map((p) => p.levelCode)).toEqual(plannedCodes);
    for (const planned of PLANNED_JOURNEY) {
      expect(planned.description.length).toBeGreaterThan(0);
    }
  });

  test("unit facets are derived from real lesson content", () => {
    const facets = unitFacets();
    const p1Units = curriculum.find((l) => l.code === "P1")!.units;
    const p1_1 = facets.get("p1-1")!;
    expect(p1_1.lessonCount).toBe(5);
    expect(p1_1.minutes).toBe(
      p1Units[0].lessons.reduce((sum, l) => sum + l.minutes, 0)
    );
    expect(p1_1.exerciseCount).toBe(
      p1Units[0].lessons.reduce((sum, l) => sum + l.exercises.length, 0)
    );
    expect(p1_1.vocabCount).toBeGreaterThan(0);
    // skills counts sum ≥ lesson count (lessons list multiple skills)
    const skillTotal = Object.values(p1_1.skills).reduce((s, n) => s + n, 0);
    expect(skillTotal).toBeGreaterThanOrEqual(p1_1.lessonCount);
  });
});

describe("computeNextLesson", () => {
  test("fresh learner starts at the very first lesson", () => {
    const next = computeNextLesson(new Set(), null)!;
    expect(next.slug).toBe("p1-1-1");
    expect(next.indexInLevel).toBe(1);
    expect(next.globalIndex).toBe(0);
    expect(next.unitSlug).toBe("p1-1");
  });

  test("skips completed lessons in order", () => {
    const done = new Set(["p1-1-1", "p1-1-2", "p1-1-3"]);
    const next = computeNextLesson(done, null)!;
    expect(next.slug).toBe("p1-1-4");
    expect(next.indexInLevel).toBe(4);
    expect(next.globalIndex).toBe(3);
  });

  test("honours the learning-plan anchor (earlier lessons are review-only)", () => {
    const next = computeNextLesson(new Set(), "a1-2-1")!;
    expect(next.slug).toBe("a1-2-1");
    expect(next.levelCode).toBe("A1");
  });

  test("returns null when every available lesson is complete", () => {
    const all = new Set(availableLevels.flatMap((l) => l.units.flatMap((u) => u.lessons.map((les) => les.slug))));
    expect(computeNextLesson(all, null)).toBeNull();
  });
});

describe("deriveInProgressLessons", () => {
  const now = new Date("2026-11-11T10:00:00Z");

  test("counts attempts on incomplete lessons, excludes completed + practice", () => {
    const rows = [
      { lessonSlug: "p1-1-1", exerciseId: "p1-1-1-ex1", correct: true, createdAt: now },
      { lessonSlug: "p1-1-1", exerciseId: "p1-1-1-ex2", correct: false, createdAt: new Date(now.getTime() + 1000) },
      { lessonSlug: "p1-1-2", exerciseId: "p1-1-2-ex1", correct: true, createdAt: now },
      { lessonSlug: "practice", exerciseId: "practice-x-w1", correct: true, createdAt: now },
    ];
    const completed = new Set(["p1-1-2"]);
    const list = deriveInProgressLessons(rows, completed);
    expect(list.length).toBe(1);
    expect(list[0].slug).toBe("p1-1-1");
    expect(list[0].attemptedCount).toBe(2);
    expect(list[0].totalExercises).toBeGreaterThan(0);
  });

  test("returns empty for learners with no attempts", () => {
    expect(deriveInProgressLessons([], new Set())).toEqual([]);
  });
});

describe("skill bucket mapping", () => {
  test("maps exercise types to the four dashboard buckets + reading", () => {
    const listen: Exercise = { id: "x1", type: "listen", mode: "choice", audioText: "hi", prompt: "?", options: ["hi"], answerIndex: 0 };
    expect(exerciseSkillBucket(listen)).toBe("listening");
    const speak: Exercise = { id: "x2", type: "speak", prompt: "?", targetText: "hi" };
    expect(exerciseSkillBucket(speak)).toBe("speaking");
    const write: Exercise = { id: "x3", type: "write", prompt: "?", modelAnswer: "hi" };
    expect(exerciseSkillBucket(write)).toBe("writing");
    const reading: Exercise = { id: "x4", type: "mcq", phase: "reading", prompt: "?", options: ["a", "b", "c"], answerIndex: 0, passageId: "p1-1-1" };
    expect(exerciseSkillBucket(reading)).toBe("reading");
    const passageFill: Exercise = { id: "x5", type: "fill", prompt: "?", accepted: ["a"], passageId: "p1-1-1" };
    expect(exerciseSkillBucket(passageFill)).toBe("reading");
    const grammar: Exercise = { id: "x6", type: "mcq", prompt: "?", options: ["a", "b", "c"], answerIndex: 0 };
    expect(exerciseSkillBucket(grammar)).toBe("grammar");
    const order: Exercise = { id: "x7", type: "order", prompt: "?", answer: "a b" };
    expect(exerciseSkillBucket(order)).toBe("grammar");
  });

  test("derives per-bucket activity from attempts (accuracy is exercise-based)", () => {
    const listenId = "p1-1-1-ex8"; // real content: a listening exercise (ex8)
    const exercises = new Map<string, Exercise>();
    for (const level of availableLevels) {
      for (const unit of level.units) {
        for (const lesson of unit.lessons) {
          for (const ex of lesson.exercises) exercises.set(ex.id, ex);
        }
      }
    }
    expect(exercises.has(listenId)).toBe(true);

    const attempts = [
      { exerciseId: listenId, correct: true, createdAt: new Date() },
      { exerciseId: listenId, correct: false, createdAt: new Date() }, // retry: still 1 exercise attempted
      { exerciseId: "p1-1-1-ex1", correct: true, createdAt: new Date() },
      { exerciseId: "retired-exercise", correct: true, createdAt: new Date() }, // unknown → grammar
    ];
    const activity = deriveSkillActivity(attempts, exercises);
    const listening = activity.find((a) => a.bucket === "listening")!;
    expect(listening.attempts).toBe(2);
    expect(listening.exercisesAttempted).toBe(1);
    expect(listening.exercisesCorrect).toBe(1);
    expect(listening.accuracy).toBe(1);

    const grammar = activity.find((a) => a.bucket === "grammar")!;
    // p1-1-1-ex1 (guided mcq) + the unknown retired id
    expect(grammar.exercisesAttempted).toBe(2);
    expect(grammar.exercisesCorrect).toBe(2);
  });
});

describe("revision schedule", () => {
  const now = new Date("2026-11-11T12:00:00Z");

  test("weak old words are due now; fresh strong words are not", () => {
    const schedule = computeRevisionSchedule(
      [
        { wordId: "w-weak", strength: 0, lastReviewedAt: new Date("2026-11-10T12:00:00Z") }, // 1 day ago, interval 1 → due
        { wordId: "w-strong", strength: 5, lastReviewedAt: now }, // interval 30 → not due
      ],
      now
    );
    const weak = schedule.find((s) => s.wordId === "w-weak")!;
    const strong = schedule.find((s) => s.wordId === "w-strong")!;
    expect(weak.dueNow).toBe(true);
    expect(strong.dueNow).toBe(false);
    expect(strong.dueAt.getTime() - now.getTime()).toBe(30 * 86_400_000);
  });

  test("split schedules due-now vs upcoming", () => {
    const schedule = computeRevisionSchedule(
      [
        { wordId: "a", strength: 0, lastReviewedAt: new Date("2026-11-01T00:00:00Z") },
        { wordId: "b", strength: 3, lastReviewedAt: now },
      ],
      now
    );
    const { dueNow, upcoming } = splitRevisionSchedule(schedule);
    expect(dueNow.map((s) => s.wordId)).toEqual(["a"]);
    expect(upcoming.map((s) => s.wordId)).toEqual(["b"]);
  });
});

describe("weekly target", () => {
  test("extends the learner's own daily goal over 7 days", () => {
    const week = [
      { xp: 100, lessons: 1 },
      { xp: 0, lessons: 0 },
      { xp: 60, lessons: 1 },
      { xp: 0, lessons: 0 },
      { xp: 0, lessons: 0 },
      { xp: 40, lessons: 0 },
      { xp: 0, lessons: 0 },
    ];
    const target = weeklyTargetOf(10, week);
    expect(target.xpTarget).toBe(700);
    expect(target.minutesTarget).toBe(70);
    expect(target.xpActual).toBe(200);
    expect(target.lessonsThisWeek).toBe(2);
    expect(target.activeDays).toBe(3);
    expect(target.percent).toBe(29);
  });

  test("clamps above 100 when the learner exceeds the target", () => {
    const target = weeklyTargetOf(10, Array.from({ length: 7 }, () => ({ xp: 200, lessons: 2 })));
    expect(target.percent).toBe(100);
  });
});

describe("today's plan", () => {
  test("resumes an in-progress lesson and schedules reviews", () => {
    const plan = buildTodayPlan({
      inProgress: { slug: "p1-2-2", title: "Reading words", attempted: 6, totalExercises: 16 },
      nextLesson: { slug: "p1-2-2", title: "Reading words", minutes: 12 },
      dueReviewCount: 3,
      todayXp: 20,
      dailyTargetXp: 100,
    });
    expect(plan.map((p) => p.kind)).toEqual(["resume", "review", "goal"]);
    expect(plan[0].href).toBe("/lesson/p1-2-2");
    expect(plan[1].title).toBe("Review 3 words");
    expect(plan[2].detail).toContain("20 of 100");
  });

  test("falls back to start-next-lesson with no in-progress work", () => {
    const plan = buildTodayPlan({
      inProgress: null,
      nextLesson: { slug: "a1-1-1", title: "Hello and Goodbye", minutes: 8 },
      dueReviewCount: 0,
      todayXp: 120,
      dailyTargetXp: 100,
    });
    expect(plan.map((p) => p.kind)).toEqual(["lesson", "goal"]);
    expect(plan[1].title).toBe("Daily goal reached");
  });
});

describe("course state + catalogue", () => {
  const noAttempts = new Map<string, number>();

  test("courseStateOf derives the four states from lesson rows", () => {
    expect(courseStateOf([
      { completed: true, unlocked: true, attemptedCount: 4 },
      { completed: true, unlocked: true, attemptedCount: 2 },
    ])).toBe("completed");
    expect(courseStateOf([
      { completed: false, unlocked: true, attemptedCount: 1 },
      { completed: false, unlocked: true, attemptedCount: 0 },
    ])).toBe("in-progress");
    expect(courseStateOf([
      { completed: false, unlocked: true, attemptedCount: 0 },
    ])).toBe("available");
    expect(courseStateOf([
      { completed: false, unlocked: false, attemptedCount: 0 },
    ])).toBe("locked");
  });

  test("catalogue lists 18 courses in journey order", () => {
    const courses = buildCourseSummaries(new Set(), new Map(), noAttempts, null);
    expect(courses.length).toBe(18);
    expect(courses[0].slug).toBe("p1-1");
    expect(courses[0].state).toBe("available");
    expect(courses[17].slug).toBe("a2-6");
    expect(courses[17].state).toBe("locked");
    // every course exposes real facet counts
    for (const course of courses) {
      expect(course.minutes).toBeGreaterThan(0);
      expect(course.lessonCount).toBeGreaterThanOrEqual(3);
      expect(course.exerciseCount).toBeGreaterThan(0);
      expect(course.subjects.length).toBeGreaterThan(0);
      expect(course.stage.length).toBeGreaterThan(0);
    }
  });

  test("completion flips states: done unit, unlocked next, locked rest", () => {
    const p1Unit1 = new Set(orderedLessonSlugs("P1").slice(0, 5));
    const best = new Map([...p1Unit1].map((slug) => [slug, 86]));
    const courses = buildCourseSummaries(p1Unit1, best, noAttempts, null);
    expect(courses.find((c) => c.slug === "p1-1")!.state).toBe("completed");
    expect(courses.find((c) => c.slug === "p1-1")!.bestAvg).toBe(86);
    expect(courses.find((c) => c.slug === "p1-2")!.state).toBe("available");
    expect(courses.find((c) => c.slug === "p1-3")!.state).toBe("locked");
    // next lesson of p1-2 is its first lesson; completed courses review from #1
    expect(courses.find((c) => c.slug === "p1-2")!.nextLessonSlug).toBe("p1-2-1");
  });

  test("attempts on a unit mark it in-progress and set a resume target", () => {
    const attempts = new Map([["p1-2-2", 6]]);
    const courses = buildCourseSummaries(new Set(), new Map(), attempts, null);
    const p1_2 = courses.find((c) => c.slug === "p1-2")!;
    expect(p1_2.state).toBe("in-progress");
    expect(p1_2.attemptedCount).toBe(6);
    expect(p1_2.nextLessonSlug).toBe("p1-2-1"); // first incomplete unlocked lesson
  });

  test("course detail carries objectives, prerequisite, modules and assessment", () => {
    // p1-1 completed so p1-2 is unlocked (Start CTA) — matches real learner flow.
    const p1Unit1 = new Set(orderedLessonSlugs("P1").slice(0, 5));
    const detail = buildCourseDetail("p1-2", p1Unit1, new Map(), noAttempts, null)!;
    expect(detail).not.toBeNull();
    expect(detail.title).toBe("First Words");
    expect(detail.objectives.length).toBeGreaterThan(0); // P1 lessons carry objectives
    expect(detail.prerequisite.unitSlug).toBe("p1-1");
    expect(detail.prerequisite.label).toContain("First Steps with English");
    expect(detail.lessons.length).toBe(5);
    expect(detail.assessment.assessmentExercises).toBeGreaterThan(0);
    expect(detail.state).toBe("available");
    expect(detail.nextAction?.label).toBe("Start");
    expect(detail.nextAction?.slug).toBe("p1-2-1");
    expect(detail.minutes).toBe(detail.lessons.reduce((s, l) => s + l.minutes, 0));
  });

  test("locked courses show no CTA (prerequisite gate is honest)", () => {
    const detail = buildCourseDetail("p1-2", new Set(), new Map(), noAttempts, null)!;
    expect(detail.state).toBe("locked");
    expect(detail.nextAction).toBeNull();
  });

  test("course detail prerequisite completes honestly", () => {
    const p1Unit1 = new Set(orderedLessonSlugs("P1").slice(0, 5));
    const detail = buildCourseDetail("p1-2", p1Unit1, new Map(), noAttempts, null)!;
    expect(detail.prerequisite.state).toBe("completed");
    expect(detail.prerequisite.lessonsToGo).toBe(0);
  });

  test("legacy A1 units fall back to topics (no authored objectives)", () => {
    const detail = buildCourseDetail("a1-1", new Set(), new Map(), noAttempts, null)!;
    expect(detail.objectives).toEqual([]);
    expect(detail.topics.length).toBe(3);
    expect(detail.assessment.hasAssessmentPhase).toBe(false);
    expect(detail.assessment.totalExercises).toBeGreaterThan(0);
  });

  test("attemptCountsOf drops practice rows", () => {
    const counts = attemptCountsOf([
      { lessonSlug: "p1-1-1" },
      { lessonSlug: "p1-1-1" },
      { lessonSlug: "practice" },
    ]);
    expect(counts.get("p1-1-1")).toBe(2);
    expect(counts.has("practice")).toBe(false);
  });

  test("unknown course slug returns null", () => {
    expect(buildCourseDetail("nope-9", new Set(), new Map(), noAttempts, null)).toBeNull();
  });
});

describe("formatting helpers", () => {
  test("formatMinutes renders friendly durations", () => {
    expect(formatMinutes(45)).toBe("45 min");
    expect(formatMinutes(60)).toBe("1 hr");
    expect(formatMinutes(75)).toBe("1 hr 15 min");
  });

  test("relativeTime labels past moments", () => {
    const now = new Date("2026-11-11T12:00:00Z");
    expect(relativeTime(new Date("2026-11-11T11:59:30Z"), now)).toBe("just now");
    expect(relativeTime(new Date("2026-11-11T11:30:00Z"), now)).toBe("30 min ago");
    expect(relativeTime(new Date("2026-11-11T09:00:00Z"), now)).toBe("3 hr ago");
    expect(relativeTime(new Date("2026-11-08T12:00:00Z"), now)).toBe("3 days ago");
    expect(relativeTime(new Date("2026-09-11T12:00:00Z"), now)).toBe("2 months ago");
  });
});
