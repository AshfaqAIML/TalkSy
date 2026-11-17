/**
 * Achievement & milestone catalog — content as code.
 *
 * INTEGRITY RULES (product law):
 *  - Every requirement is evaluated against VERIFIED application activity
 *    only (graded answers, passed runs, submitted writing, finished
 *    conversations…). Nothing unlocks for opening or viewing content.
 *  - `unlockedAt` is derived from the actual qualifying event whenever the
 *    data supports it, so a badge keeps the real "earned on" date.
 *  - Predicates are pure functions of ProgressFacts → fully unit-testable.
 */

import type { AchievementDef, AchievementState, ProgressFacts } from "./types";
import { courses, grammarCourseIds, courseCompletion } from "./courses";

/** Icon names available to achievements (the UI maps them to lucide icons). */
export const ACHIEVEMENT_ICON_NAMES = [
  "star",
  "medal",
  "trophy",
  "flame",
  "target",
  "zap",
  "brain",
  "book-open",
  "books",
  "feather",
  "pen-line",
  "message-circle",
  "mic",
  "ear",
  "volume-2",
  "languages",
  "lightbulb",
  "check-circle",
  "calendar-check",
  "trending-up",
  "award",
  "graduation-cap",
  "message-square-text",
  "clock",
] as const;

export type AchievementIcon = (typeof ACHIEVEMENT_ICON_NAMES)[number];

// ---------------------------------------------------------------------------
// Helpers (pure)
// ---------------------------------------------------------------------------

function iso(d: Date | null | undefined): string | null {
  return d ? d.toISOString() : null;
}

/** Date of the n-th (1-indexed) item of an ascending-sorted list. */
function nthDate<T>(list: T[], n: number, pick: (item: T) => Date): Date | null {
  return list.length >= n ? pick(list[n - 1]) : null;
}

function countState(count: number, target: number, at: Date | null): AchievementState {
  return {
    unlocked: count >= target,
    unlockedAt: iso(at),
    progress: count < target ? { current: Math.min(count, target), target } : null,
  };
}

/** Date at which cumulative points crossed `target` (events are asc). */
function pointsCrossedAt(facts: ProgressFacts, target: number): Date | null {
  let sum = 0;
  for (const event of facts.events) {
    sum += event.points;
    if (sum >= target) return event.at;
  }
  return null;
}

/** Ascending list of every active day key (YYYY-MM-DD). */
function dayKeysAsc(facts: ProgressFacts): string[] {
  return Object.keys(facts.pointsByDay).sort();
}

function addDays(day: string, n: number): string {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** Date when a run of `runLength` consecutive active days first completed. */
function streakRunAt(facts: ProgressFacts, runLength: number): Date | null {
  const days = dayKeysAsc(facts);
  let run = 1;
  for (let i = 0; i < days.length; i++) {
    if (i > 0) run = days[i - 1] === addDays(days[i], -1) ? run + 1 : 1;
    if (run >= runLength) return new Date(`${days[i]}T00:00:00Z`);
  }
  return null;
}

/** Completed lessons, ascending by completion date. */
function completedLessonsAsc(facts: ProgressFacts) {
  return facts.lessons
    .filter((l) => l.completedAt)
    .sort((a, b) => a.completedAt!.getTime() - b.completedAt!.getTime());
}

/** Completed rows of any progress list, ascending by completedAt. */
function completedAsc<T extends { completedAt: Date | null }>(rows: T[]): T[] {
  return rows
    .filter((r) => r.completedAt)
    .sort((a, b) => a.completedAt!.getTime() - b.completedAt!.getTime());
}

/** Earliest-completing course among the given ids (null when none complete). */
function earliestCompletedCourse(
  facts: ProgressFacts,
  ids: string[],
): { courseId: string; completedAt: Date } | null {
  const done = new Set(completedLessonsAsc(facts).map((l) => l.slug));
  let best: { courseId: string; completedAt: Date } | null = null;
  for (const course of courses) {
    if (!ids.includes(course.id)) continue;
    const completion = courseCompletion(course, done);
    if (!completion.done) continue;
    const lessonDates = course.lessonSlugs
      .map((slug) => facts.lessons.find((l) => l.slug === slug)?.completedAt ?? null)
      .filter((d): d is Date => d !== null);
    const completedAt = new Date(Math.max(...lessonDates.map((d) => d.getTime())));
    if (!best || completedAt < best.completedAt) best = { courseId: course.id, completedAt };
  }
  return best;
}

// ---------------------------------------------------------------------------
// Catalog
// ---------------------------------------------------------------------------

function defineMilestones(): AchievementDef[] {
  return [
    {
      id: "first-lesson",
      kind: "milestone",
      title: "First Lesson",
      description: "Complete your very first lesson.",
      requirement: "Verified when every section of a lesson is completed (and its assessment passed, if it has one).",
      category: "milestones",
      icon: "star",
      verify: (facts) => {
        const list = completedLessonsAsc(facts);
        return countState(list.length, 1, list[0]?.completedAt ?? null);
      },
    },
    {
      id: "first-assessment",
      kind: "milestone",
      title: "First Assessment Passed",
      description: "Pass your first end-of-lesson assessment.",
      requirement: "Verified by a submitted assessment run marked as passed.",
      category: "milestones",
      icon: "check-circle",
      verify: (facts) =>
        countState(facts.assessmentsPassed.length, 1, facts.assessmentsPassed[0]?.completedAt ?? null),
    },
    {
      id: "first-100-words",
      kind: "milestone",
      title: "First 100 Words",
      description: "Learn your first 100 words.",
      requirement: "Verified when 100 different words each have at least one graded review.",
      category: "milestones",
      icon: "languages",
      verify: (facts) =>
        countState(facts.vocabWords.length, 100, nthDate(facts.vocabWords, 100, (w) => w.firstSeenAt)),
    },
    {
      id: "first-50-sentences",
      kind: "milestone",
      title: "First 50 Sentences",
      description: "Build your first 50 sentences.",
      requirement: "Verified by correct sentence-building exercises and checker-approved practice sentences.",
      category: "milestones",
      icon: "message-square-text",
      verify: (facts) =>
        countState(facts.sentenceConstructions.length, 50, facts.sentenceConstructions[49] ?? null),
    },
    {
      id: "first-paragraph",
      kind: "milestone",
      title: "First Paragraph",
      description: "Write your first paragraph (3+ sentences).",
      requirement: "Verified by a submitted piece of writing containing at least three sentences.",
      category: "milestones",
      icon: "feather",
      verify: (facts) => {
        const first = facts.writingSubmissions.find((s) => s.sentenceCount >= 3);
        return countState(first ? 1 : 0, 1, first?.createdAt ?? null);
      },
    },
    {
      id: "first-conversation",
      kind: "milestone",
      title: "First Conversation",
      description: "Finish your first role-play conversation.",
      requirement: "Verified by a conversation session you finished (partner turns and yours).",
      category: "milestones",
      icon: "message-circle",
      verify: (facts) =>
        countState(facts.conversationsCompleted.length, 1, facts.conversationsCompleted[0]?.completedAt ?? null),
    },
    {
      id: "first-writing-assignment",
      kind: "milestone",
      title: "First Writing Assignment",
      description: "Complete your first writing assignment.",
      requirement: "Verified when a submission meets the assignment's pass threshold on the writing rubric.",
      category: "milestones",
      icon: "pen-line",
      verify: (facts) => {
        const list = completedAsc(facts.writingProgress);
        return countState(list.length, 1, list[0]?.completedAt ?? null);
      },
    },
    {
      id: "first-grammar-course",
      kind: "milestone",
      title: "First Grammar Course",
      description: "Complete a full Grammar School or Sentence Lab course.",
      requirement: "Verified when every lesson in the course has a verified completion.",
      category: "milestones",
      icon: "book-open",
      verify: (facts) => {
        const best = earliestCompletedCourse(facts, grammarCourseIds());
        return countState(best ? 1 : 0, 1, best?.completedAt ?? null);
      },
    },
    {
      id: "first-speaking-task",
      kind: "milestone",
      title: "First Independent Speaking Task",
      description: "Complete a speaking activity on your own.",
      requirement: "Verified when every task in a speaking activity has a passing attempt (or an honest self-assessed pass).",
      category: "milestones",
      icon: "mic",
      verify: (facts) => {
        const list = completedAsc(facts.speakingProgress);
        return countState(list.length, 1, list[0]?.completedAt ?? null);
      },
    },
    {
      id: "first-reading-text",
      kind: "milestone",
      title: "First Reading Text",
      description: "Complete your first reading text.",
      requirement: "Verified by reading every paragraph and passing the comprehension check.",
      category: "milestones",
      icon: "book-open",
      verify: (facts) => {
        const list = completedAsc(facts.readingProgress);
        return countState(list.length, 1, list[0]?.completedAt ?? null);
      },
    },
    {
      id: "first-listening-activity",
      kind: "milestone",
      title: "First Listening Activity",
      description: "Complete your first listening activity.",
      requirement: "Verified when every exercise in the activity has been answered correctly at least once.",
      category: "milestones",
      icon: "ear",
      verify: (facts) => {
        const list = completedAsc(facts.listeningProgress);
        return countState(list.length, 1, list[0]?.completedAt ?? null);
      },
    },
  ];
}

function defineAchievements(): AchievementDef[] {
  const list: AchievementDef[] = [
    // --- practice ---
    {
      id: "points-100",
      kind: "achievement",
      title: "Century Club",
      description: "Earn 100 learning points.",
      requirement: "Points come only from verified activity — answers, reviews, submissions and completions.",
      category: "practice",
      icon: "zap",
      verify: (facts) => countState(facts.pointsTotal, 100, pointsCrossedAt(facts, 100)),
    },
    {
      id: "points-500",
      kind: "achievement",
      title: "Point Collector",
      description: "Earn 500 learning points.",
      requirement: "Points come only from verified activity — answers, reviews, submissions and completions.",
      category: "practice",
      icon: "zap",
      verify: (facts) => countState(facts.pointsTotal, 500, pointsCrossedAt(facts, 500)),
    },
    {
      id: "points-2000",
      kind: "achievement",
      title: "Learning Marathon",
      description: "Earn 2,000 learning points.",
      requirement: "Points come only from verified activity — answers, reviews, submissions and completions.",
      category: "practice",
      icon: "trophy",
      verify: (facts) => countState(facts.pointsTotal, 2000, pointsCrossedAt(facts, 2000)),
    },
    {
      id: "correct-50",
      kind: "achievement",
      title: "Fifty Correct",
      description: "Answer 50 exercises correctly.",
      requirement: "Verified by graded exercise submissions marked correct.",
      category: "practice",
      icon: "target",
      verify: (facts) => {
        const correct = facts.exerciseAttempts.filter((a) => a.isCorrect);
        return countState(correct.length, 50, nthDate(correct, 50, (a) => a.createdAt));
      },
    },
    {
      id: "correct-250",
      kind: "achievement",
      title: "250 Correct Answers",
      description: "Answer 250 exercises correctly.",
      requirement: "Verified by graded exercise submissions marked correct.",
      category: "practice",
      icon: "target",
      verify: (facts) => {
        const correct = facts.exerciseAttempts.filter((a) => a.isCorrect);
        return countState(correct.length, 250, nthDate(correct, 250, (a) => a.createdAt));
      },
    },
    {
      id: "active-days-10",
      kind: "achievement",
      title: "Ten Active Days",
      description: "Learn on ten different days — they don't need to be consecutive.",
      requirement: "Verified by days with at least one graded answer, review or submission.",
      category: "practice",
      icon: "calendar-check",
      verify: (facts) => {
        const days = dayKeysAsc(facts);
        return countState(days.length, 10, days[9] ? new Date(`${days[9]}T00:00:00Z`) : null);
      },
    },
    {
      id: "active-days-50",
      kind: "achievement",
      title: "Fifty Active Days",
      description: "Learn on fifty different days — at your own pace.",
      requirement: "Verified by days with at least one graded answer, review or submission.",
      category: "practice",
      icon: "calendar-check",
      verify: (facts) => {
        const days = dayKeysAsc(facts);
        return countState(days.length, 50, days[49] ? new Date(`${days[49]}T00:00:00Z`) : null);
      },
    },

    // --- streaks (celebratory, never punitive) ---
    {
      id: "streak-3",
      kind: "achievement",
      title: "Three in a Row",
      description: "Practise on 3 consecutive days.",
      requirement: "Verified by consecutive active days. A missed day never removes any progress or points.",
      category: "streaks",
      icon: "flame",
      verify: (facts) => countState(facts.streak.longest, 3, streakRunAt(facts, 3)),
    },
    {
      id: "streak-7",
      kind: "achievement",
      title: "Week Streak",
      description: "Practise on 7 consecutive days.",
      requirement: "Verified by consecutive active days. A missed day never removes any progress or points.",
      category: "streaks",
      icon: "flame",
      verify: (facts) => countState(facts.streak.longest, 7, streakRunAt(facts, 7)),
    },
    {
      id: "streak-30",
      kind: "achievement",
      title: "Month Streak",
      description: "Practise on 30 consecutive days.",
      requirement: "Verified by consecutive active days. A missed day never removes any progress or points.",
      category: "streaks",
      icon: "flame",
      verify: (facts) => countState(facts.streak.longest, 30, streakRunAt(facts, 30)),
    },

    // --- vocabulary ---
    {
      id: "words-25",
      kind: "achievement",
      title: "Word Starter",
      description: "Learn 25 words.",
      requirement: "Verified when 25 different words each have at least one graded review.",
      category: "vocabulary",
      icon: "languages",
      verify: (facts) =>
        countState(facts.vocabWords.length, 25, nthDate(facts.vocabWords, 25, (w) => w.firstSeenAt)),
    },
    {
      id: "words-250",
      kind: "achievement",
      title: "Word Collector",
      description: "Learn 250 words.",
      requirement: "Verified when 250 different words each have at least one graded review.",
      category: "vocabulary",
      icon: "languages",
      verify: (facts) =>
        countState(facts.vocabWords.length, 250, nthDate(facts.vocabWords, 250, (w) => w.firstSeenAt)),
    },
    {
      id: "mastered-25",
      kind: "achievement",
      title: "25 Words Mastered",
      description: "Reach mastered status on 25 words.",
      requirement: "Verified by the spaced-repetition engine after enough consecutive correct reviews.",
      category: "vocabulary",
      icon: "brain",
      verify: (facts) => {
        const mastered = facts.vocabWords
          .filter((w) => w.status === "mastered")
          .sort((a, b) => (a.lastReviewedAt?.getTime() ?? 0) - (b.lastReviewedAt?.getTime() ?? 0));
        return countState(mastered.length, 25, nthDate(mastered, 25, (w) => w.lastReviewedAt ?? w.firstSeenAt));
      },
    },
    {
      id: "mastered-100",
      kind: "achievement",
      title: "100 Words Mastered",
      description: "Reach mastered status on 100 words.",
      requirement: "Verified by the spaced-repetition engine after enough consecutive correct reviews.",
      category: "vocabulary",
      icon: "brain",
      verify: (facts) => {
        const mastered = facts.vocabWords
          .filter((w) => w.status === "mastered")
          .sort((a, b) => (a.lastReviewedAt?.getTime() ?? 0) - (b.lastReviewedAt?.getTime() ?? 0));
        return countState(mastered.length, 100, nthDate(mastered, 100, (w) => w.lastReviewedAt ?? w.firstSeenAt));
      },
    },
    {
      id: "reviews-250",
      kind: "achievement",
      title: "250 Reviews",
      description: "Complete 250 graded word reviews.",
      requirement: "Verified by graded flashcard, challenge and sentence reviews.",
      category: "vocabulary",
      icon: "clock",
      verify: (facts) =>
        countState(facts.vocabGradedReviews.length, 250, nthDate(facts.vocabGradedReviews, 250, (r) => r.createdAt)),
    },
    {
      id: "retention-90",
      kind: "achievement",
      title: "Reliable Memory",
      description: "Keep 90%+ correct across your 50 most recent word reviews.",
      requirement: "Verified on the trailing 50 graded reviews — real retention, not a single lucky run.",
      category: "vocabulary",
      icon: "trending-up",
      verify: (facts) => {
        const reviews = facts.vocabGradedReviews;
        if (reviews.length < 50) {
          return { unlocked: false, unlockedAt: null, progress: reviews.length >= 20 ? { current: Math.round((reviews.filter((r) => r.correct).length / reviews.length) * 100), target: 90 } : null };
        }
        const window = reviews.slice(-50);
        const pct = Math.round((window.filter((r) => r.correct).length / window.length) * 100);
        return {
          unlocked: pct >= 90,
          unlockedAt: pct >= 90 ? iso(reviews[reviews.length - 1].createdAt) : null,
          progress: pct < 90 ? { current: pct, target: 90 } : null,
        };
      },
    },

    // --- grammar ---
    {
      id: "clinic-25",
      kind: "achievement",
      title: "Clinic Regular",
      description: "Bring 25 sentences to the Error Clinic.",
      requirement: "Verified by submitted clinic sentences (corrected or clean).",
      category: "grammar",
      icon: "lightbulb",
      verify: (facts) =>
        countState(facts.clinicSentences.length, 25, nthDate(facts.clinicSentences, 25, (s) => s.createdAt)),
    },
    {
      id: "clinic-clean-10",
      kind: "achievement",
      title: "Clean Slate",
      description: "Write 10 sentences the Error Clinic finds no issues in.",
      requirement: "Verified by clinic submissions with zero detected issues.",
      category: "grammar",
      icon: "check-circle",
      verify: (facts) => {
        const clean = facts.clinicSentences.filter((s) => s.issuesCount === 0);
        return countState(clean.length, 10, nthDate(clean, 10, (s) => s.createdAt));
      },
    },
    {
      id: "grammar-accurate-100",
      kind: "achievement",
      title: "Grammar Sharp",
      description: "Answer 100 grammar exercises correctly.",
      requirement: "Verified by graded grammar-skill exercise submissions marked correct.",
      category: "grammar",
      icon: "book-open",
      verify: (facts) => {
        const correct = facts.exerciseAttempts.filter((a) => a.skill === "grammar" && a.isCorrect);
        return countState(correct.length, 100, nthDate(correct, 100, (a) => a.createdAt));
      },
    },

    // --- reading ---
    {
      id: "texts-5",
      kind: "achievement",
      title: "Regular Reader",
      description: "Complete 5 reading texts.",
      requirement: "Verified by full-text reads with passed comprehension checks.",
      category: "reading",
      icon: "book-open",
      verify: (facts) => {
        const list = completedAsc(facts.readingProgress);
        return countState(list.length, 5, list[4]?.completedAt ?? null);
      },
    },
    {
      id: "texts-15",
      kind: "achievement",
      title: "Bookworm",
      description: "Complete 15 reading texts.",
      requirement: "Verified by full-text reads with passed comprehension checks.",
      category: "reading",
      icon: "books",
      verify: (facts) => {
        const list = completedAsc(facts.readingProgress);
        return countState(list.length, 15, list[14]?.completedAt ?? null);
      },
    },
    {
      id: "reading-accuracy-85",
      kind: "achievement",
      title: "Sharp Comprehension",
      description: "Answer 85%+ of 30+ reading comprehension questions correctly.",
      requirement: "Verified on graded comprehension answers across all your reading runs.",
      category: "reading",
      icon: "target",
      verify: (facts) => {
        const attempts = facts.readingAttempts;
        if (attempts.length < 30) {
          return {
            unlocked: false,
            unlockedAt: null,
            progress: attempts.length >= 10
              ? {
                  current: Math.round((attempts.filter((a) => a.isCorrect).length / attempts.length) * 100),
                  target: 85,
                }
              : null,
          };
        }
        const pct = Math.round((attempts.filter((a) => a.isCorrect).length / attempts.length) * 100);
        return {
          unlocked: pct >= 85,
          unlockedAt: pct >= 85 ? iso(attempts[attempts.length - 1].createdAt) : null,
          progress: pct < 85 ? { current: pct, target: 85 } : null,
        };
      },
    },

    // --- listening ---
    {
      id: "listening-5",
      kind: "achievement",
      title: "Good Ear",
      description: "Complete 5 listening activities.",
      requirement: "Verified when every exercise in an activity is answered correctly at least once.",
      category: "listening",
      icon: "ear",
      verify: (facts) => {
        const list = completedAsc(facts.listeningProgress);
        return countState(list.length, 5, list[4]?.completedAt ?? null);
      },
    },
    {
      id: "listening-15",
      kind: "achievement",
      title: "Attentive Listener",
      description: "Complete 15 listening activities.",
      requirement: "Verified when every exercise in an activity is answered correctly at least once.",
      category: "listening",
      icon: "volume-2",
      verify: (facts) => {
        const list = completedAsc(facts.listeningProgress);
        return countState(list.length, 15, list[14]?.completedAt ?? null);
      },
    },
    {
      id: "first-try-15",
      kind: "achievement",
      title: "First Try",
      description: "Get 15 listening exercises right on your first attempt.",
      requirement: "Verified per exercise: its earliest attempt is the correct one.",
      category: "listening",
      icon: "zap",
      verify: (facts) => {
        const firstByExercise = new Map<string, { isCorrect: boolean; createdAt: Date }>();
        for (const a of facts.listeningAttempts) {
          const existing = firstByExercise.get(a.exerciseId);
          if (!existing || a.createdAt < existing.createdAt) {
            firstByExercise.set(a.exerciseId, { isCorrect: a.isCorrect, createdAt: a.createdAt });
          }
        }
        const firstTryCorrect = [...firstByExercise.values()]
          .filter((v) => v.isCorrect)
          .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        return countState(firstTryCorrect.length, 15, nthDate(firstTryCorrect, 15, (v) => v.createdAt));
      },
    },

    // --- speaking ---
    {
      id: "speaking-5",
      kind: "achievement",
      title: "Finding Your Voice",
      description: "Complete 5 speaking activities.",
      requirement: "Verified when every task in an activity has a passing attempt.",
      category: "speaking",
      icon: "mic",
      verify: (facts) => {
        const list = completedAsc(facts.speakingProgress);
        return countState(list.length, 5, list[4]?.completedAt ?? null);
      },
    },
    {
      id: "conversations-5",
      kind: "achievement",
      title: "Conversation Starter",
      description: "Finish 5 role-play conversations.",
      requirement: "Verified by completed conversation sessions.",
      category: "speaking",
      icon: "message-circle",
      verify: (facts) =>
        countState(facts.conversationsCompleted.length, 5, nthDate(facts.conversationsCompleted, 5, (c) => c.completedAt)),
    },
    {
      id: "pronunciation-30",
      kind: "achievement",
      title: "Mouth Gym",
      description: "Complete 30 pronunciation practice attempts.",
      requirement: "Verified by submitted pronunciation practices (playback + compare or recognition).",
      category: "speaking",
      icon: "volume-2",
      verify: (facts) =>
        countState(facts.pronunciationAttempts.length, 30, nthDate(facts.pronunciationAttempts, 30, (a) => a.createdAt)),
    },
    {
      id: "speaking-minutes-30",
      kind: "achievement",
      title: "Half Hour Spoken",
      description: "Record 30 minutes of speaking practice.",
      requirement: "Verified by the recorded duration of your speaking submissions.",
      category: "speaking",
      icon: "clock",
      verify: (facts) => {
        const targetMs = 30 * 60_000;
        let sum = 0;
        let crossed: Date | null = null;
        for (const a of facts.speakingAttempts) {
          sum += a.durationMs;
          if (sum >= targetMs) {
            crossed = a.createdAt;
            break;
          }
        }
        return countState(sum, targetMs, crossed);
      },
    },

    // --- writing ---
    {
      id: "writing-5",
      kind: "achievement",
      title: "Assignment Finisher",
      description: "Complete 5 writing assignments.",
      requirement: "Verified by submissions that meet each assignment's pass threshold.",
      category: "writing",
      icon: "pen-line",
      verify: (facts) => {
        const list = completedAsc(facts.writingProgress);
        return countState(list.length, 5, list[4]?.completedAt ?? null);
      },
    },
    {
      id: "writing-drafts-25",
      kind: "achievement",
      title: "Dedicated Drafter",
      description: "Submit 25 pieces of writing.",
      requirement: "Verified by submitted writing versions (drafts alone never count).",
      category: "writing",
      icon: "feather",
      verify: (facts) =>
        countState(facts.writingSubmissions.length, 25, nthDate(facts.writingSubmissions, 25, (s) => s.createdAt)),
    },
    {
      id: "writing-improvement-10",
      kind: "achievement",
      title: "Growth Mindset",
      description: "Improve a writing score by 10+ points between your first and latest version of an assignment.",
      requirement: "Verified by comparing the rubric scores of your submitted versions — your own before/after.",
      category: "writing",
      icon: "trending-up",
      verify: (facts) => {
        const byAssignment = new Map<string, typeof facts.writingSubmissions>();
        for (const s of facts.writingSubmissions) {
          const list = byAssignment.get(s.assignmentId) ?? [];
          list.push(s);
          byAssignment.set(s.assignmentId, list);
        }
        let best: { delta: number; at: Date | null } = { delta: 0, at: null };
        for (const list of byAssignment.values()) {
          if (list.length < 2) continue;
          const sorted = [...list].sort((a, b) => a.version - b.version);
          const first = sorted[0];
          for (const s of sorted.slice(1)) {
            const delta = Math.round(s.overall - first.overall);
            if (delta > best.delta) best = { delta, at: s.createdAt };
          }
        }
        return countState(best.delta, 10, best.at);
      },
    },

    // --- courses (levels) ---
    {
      id: "course-pre-a1",
      kind: "achievement",
      title: "Pre-A1 Graduate",
      description: "Complete every Pre-A1 lesson.",
      requirement: "Verified by completed lessons across the whole level — a certificate is issued too.",
      category: "courses",
      icon: "graduation-cap",
      verify: (facts) => {
        const best = earliestCompletedCourse(facts, ["pre-a1"]);
        return countState(best ? 1 : 0, 1, best?.completedAt ?? null);
      },
    },
    {
      id: "course-a1",
      kind: "achievement",
      title: "A1 Graduate",
      description: "Complete every A1 lesson.",
      requirement: "Verified by completed lessons across the whole level — a certificate is issued too.",
      category: "courses",
      icon: "graduation-cap",
      verify: (facts) => {
        const best = earliestCompletedCourse(facts, ["a1"]);
        return countState(best ? 1 : 0, 1, best?.completedAt ?? null);
      },
    },
    {
      id: "course-grammar-core",
      kind: "achievement",
      title: "Grammar Core Graduate",
      description: "Complete every Grammar School and Sentence Lab lesson.",
      requirement: "Verified by completed lessons across the whole level — a certificate is issued too.",
      category: "courses",
      icon: "graduation-cap",
      verify: (facts) => {
        const best = earliestCompletedCourse(facts, ["grammar-core"]);
        return countState(best ? 1 : 0, 1, best?.completedAt ?? null);
      },
    },
  ];

  return list;
}

export const achievements: AchievementDef[] = [...defineMilestones(), ...defineAchievements()];

const achievementById = new Map(achievements.map((a) => [a.id, a]));

export function getAchievement(id: string): AchievementDef | undefined {
  return achievementById.get(id);
}

export const MILESTONE_IDS = achievements.filter((a) => a.kind === "milestone").map((a) => a.id);
