/**
 * Recommendation engine — explains WHAT to do next and WHY.
 *
 * Rules are deterministic and every recommendation carries a `purpose` that
 * quotes the learner's own history ("you reviewed 12 of these words
 * yesterday…"). No black box: same history → same recommendations.
 */

import { getCurriculumPath, getLesson } from "@/data/curriculum";
import { CATEGORY_LESSONS } from "@/lib/grammar/checker";
import { speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import {
  type ProgressFacts,
  type ProgressSkill,
  type Recommendation,
  type RevisionPlan,
  SKILL_LABELS,
} from "@/data/progress";

const SKILL_HUBS: Record<ProgressSkill, { href: string; place: string }> = {
  vocabulary: { href: "#/vocabulary", place: "Word World" },
  grammar: { href: "#/grammar", place: "Grammar School" },
  reading: { href: "#/reading", place: "Reading Room" },
  listening: { href: "#/listening", place: "Listening Lab" },
  speaking: { href: "#/speaking", place: "Speaking Lab" },
  writing: { href: "#/writing", place: "Writing Studio" },
};

export function buildRecommendations(
  facts: ProgressFacts,
  revision: RevisionPlan,
): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const knownSlugs = new Set(facts.lessons.map((l) => l.slug));
  const completedSlugs = new Set(
    facts.lessons.filter((l) => l.completedAt).map((l) => l.slug),
  );

  // --- 1. Continue / start the next lesson on the path ----------------------
  const inProgress = facts.lessons
    .filter((l) => !l.completedAt)
    .sort((a, b) => b.sectionsDone - a.sectionsDone || b.updatedAt.getTime() - a.updatedAt.getTime())[0];
  if (inProgress && inProgress.sectionsDone > 0) {
    recommendations.push({
      kind: "next-lesson",
      id: "continue-lesson",
      title: `Continue: ${inProgress.title}`,
      action: `Finish the remaining ${inProgress.sectionsTotal - inProgress.sectionsDone} section${inProgress.sectionsTotal - inProgress.sectionsDone === 1 ? "" : "s"}${inProgress.sectionsTotal > 0 ? ` (${inProgress.sectionsDone}/${inProgress.sectionsTotal} done)` : ""}.`,
      purpose: `You are already ${inProgress.sectionsDone} of ${inProgress.sectionsTotal} sections in — finishing now costs the least effort because the earlier sections are still fresh.`,
      href: `#/lesson/${inProgress.slug}`,
      weight: 100,
    });
  } else {
    const nextSlug = getCurriculumPath().find((slug) => !completedSlugs.has(slug));
    const lesson = nextSlug ? getLesson(nextSlug) : undefined;
    if (lesson) {
      const started = knownSlugs.has(lesson.slug);
      recommendations.push({
        kind: "next-lesson",
        id: "next-lesson",
        title: `${started ? "Continue" : "Start"}: ${lesson.title}`,
        action: `${started ? "Pick up where you left off" : "Begin the next lesson"} on your learning path.`,
        purpose: `The next step on your path — it builds on the ${completedSlugs.size} lesson${completedSlugs.size === 1 ? "" : "s"} you have already completed.`,
        href: `#/lesson/${lesson.slug}`,
        weight: 90,
      });
    }
  }

  // --- 2. Vocabulary review ---------------------------------------------------
  const dueWords = facts.vocabWords.filter(
    (w) => w.dueAt !== null && w.dueAt.getTime() <= facts.now.getTime(),
  ).length;
  if (dueWords > 0) {
    recommendations.push({
      kind: "vocabulary",
      id: "vocab-due",
      title: `Review ${dueWords} due word${dueWords === 1 ? "" : "s"}`,
      action: "Run today's spaced-repetition reviews in Word World.",
      purpose: `Spaced repetition only moves words into long-term memory if you review them near the due date — ${dueWords} word${dueWords === 1 ? " is" : "s are"} due right now.`,
      href: "#/vocabulary/today",
      weight: 85,
    });
  } else if (facts.vocabWords.length < 25) {
    recommendations.push({
      kind: "vocabulary",
      id: "vocab-learn",
      title: "Learn new words",
      action: "Add a few new words from today's curated selection.",
      purpose: `You have learned ${facts.vocabWords.length} word${facts.vocabWords.length === 1 ? "" : "s"} so far — small daily batches stick better than big cram sessions.`,
      href: "#/vocabulary/today",
      weight: 45,
    });
  }

  // --- 3. Additional grammar practice (driven by real errors) -----------------
  const categoryCounts = new Map<string, number>();
  for (const sentence of facts.clinicSentences) {
    for (const category of sentence.categories) {
      categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
    }
  }
  const topError = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])[0];
  if (topError && topError[1] >= 2) {
    const [category, count] = topError;
    const lessonSlug = CATEGORY_LESSONS[category as keyof typeof CATEGORY_LESSONS];
    const lesson = lessonSlug ? getLesson(lessonSlug) : undefined;
    if (lesson) {
      recommendations.push({
        kind: "grammar-practice",
        id: `grammar-error-${category}`,
        title: `Practise: ${lesson.title}`,
        action: "Work through the lesson that targets this exact mistake pattern.",
        purpose: `Your Error Clinic history shows “${category}” in ${count} of your sentence${count === 1 ? "" : "s"} — this lesson teaches that pattern directly.`,
        href: `#/lesson/${lesson.slug}`,
        weight: 80,
      });
    } else {
      recommendations.push({
        kind: "grammar-practice",
        id: `grammar-clinic-${category}`,
        title: "Bring sentences to the Error Clinic",
        action: "Write a few sentences and let the clinic pinpoint the mistakes.",
        purpose: `“${category}” has appeared ${count} time${count === 1 ? "" : "s"} in your clinic history — practising it deliberately is faster than hoping it fixes itself.`,
        href: "#/grammar/clinic",
        weight: 60,
      });
    }
  } else {
    const weakGrammarLesson = revision.due.find((item) => item.kind === "grammar-lesson");
    if (weakGrammarLesson) {
      recommendations.push({
        kind: "grammar-practice",
        id: `grammar-revise-${weakGrammarLesson.id}`,
        title: weakGrammarLesson.title,
        action: "Revise this grammar lesson.",
        purpose: weakGrammarLesson.reason,
        href: weakGrammarLesson.href,
        weight: 70,
      });
    }
  }

  // --- 4. Speaking challenge ----------------------------------------------------
  const speakingDone = new Set(
    facts.speakingProgress.filter((p) => p.completedAt).map((p) => p.activityId),
  );
  const lastSpeakingTier = facts.speakingProgress[0]?.tier ?? "beginner";
  const tierOrder = ["beginner", "intermediate", "advanced"];
  const nextSpeaking =
    speakingActivities.find(
      (a) => a.tier === lastSpeakingTier && !speakingDone.has(a.id),
    ) ??
    speakingActivities.find(
      (a) =>
        a.tier === tierOrder[Math.min(tierOrder.indexOf(lastSpeakingTier) + 1, 2)] &&
        !speakingDone.has(a.id),
    );
  if (nextSpeaking) {
    const speakingEvents = facts.speakingAttempts.length + facts.conversationsCompleted.length;
    const isUnexplored = speakingEvents === 0;
    recommendations.push({
      kind: "speaking-challenge",
      id: `speaking-${nextSpeaking.id}`,
      title: `${isUnexplored ? "Try your first speaking activity" : `Challenge: ${nextSpeaking.title}`}`,
      action: isUnexplored
        ? `Start with “${nextSpeaking.title}” — short, guided tasks with instant feedback.`
        : "Complete this activity's tasks with a passing score.",
      purpose: isUnexplored
        ? "You have not recorded any speaking practice yet — using new language out loud is what makes it stick, and your first attempt only takes a few minutes."
        : `You have completed ${speakingDone.size} of ${speakingActivities.length} speaking activities — this one matches the level you are working at.`,
      href: `#/speaking/activity/${nextSpeaking.slug}`,
      weight: isUnexplored ? 75 : 55,
    });
  }

  // --- 5. Writing assignment ------------------------------------------------------
  const writingDone = new Set(
    facts.writingProgress.filter((p) => p.completedAt).map((p) => p.assignmentId),
  );
  const belowThreshold = facts.writingProgress.find(
    (p) => !p.completedAt && p.submissionsCount > 0,
  );
  if (belowThreshold) {
    const assignment = writingAssignments.find((a) => a.id === belowThreshold.assignmentId);
    recommendations.push({
      kind: "writing-assignment",
      id: `writing-revise-${belowThreshold.assignmentId}`,
      title: `Revise: ${belowThreshold.title}`,
      action: "Read the structured feedback on your last version and submit an improved one.",
      purpose: `Your latest version scored ${Math.round(belowThreshold.bestScore * 100)}% — revising your own writing (instead of starting something new) is the single fastest way to improve.`,
      href: `#/writing/a/${assignment?.slug ?? ""}`,
      weight: 72,
    });
  } else {
    const lastTier = facts.writingProgress[0]?.tier ?? "beginner";
    const nextAssignment = writingAssignments.find((a) => a.tier === lastTier && !writingDone.has(a.id));
    if (nextAssignment) {
      recommendations.push({
        kind: "writing-assignment",
        id: `writing-next-${nextAssignment.id}`,
        title: `Write: ${nextAssignment.title}`,
        action: "Draft, submit and get structured feedback on every dimension.",
        purpose: `You have completed ${writingDone.size} of ${writingAssignments.length} writing assignments — writing consolidates the vocabulary and grammar you already know.`,
        href: `#/writing/a/${nextAssignment.slug}`,
        weight: 50,
      });
    }
  }

  // --- 6. Revision (top scheduled item not already recommended) -------------------
  const recommendedHrefs = new Set(recommendations.map((r) => r.href));
  const topRevision = [...revision.due, ...revision.soon].find(
    (item) => !recommendedHrefs.has(item.href),
  );
  if (topRevision) {
    recommendations.push({
      kind: "revision",
      id: `revision-${topRevision.id}`,
      title: topRevision.title,
      action: "A short, scheduled revision session.",
      purpose: topRevision.reason,
      href: topRevision.href,
      weight: Math.min(topRevision.urgency, 65),
    });
  }

  // --- 7. Skill balance ---------------------------------------------------------
  const skillEvents: Record<ProgressSkill, number> = {
    vocabulary: facts.vocabGradedReviews.length + facts.vocabChallenges.length,
    grammar: facts.exerciseAttempts.filter((a) => a.skill === "grammar").length + facts.clinicSentences.length,
    reading: facts.readingAttempts.length,
    listening: facts.listeningAttempts.length,
    speaking: facts.speakingAttempts.length + facts.conversationsCompleted.length + facts.pronunciationAttempts.length,
    writing: facts.writingSubmissions.length,
  };
  const entries = Object.entries(skillEvents) as [ProgressSkill, number][];
  const strongest = entries.sort((a, b) => b[1] - a[1])[0];
  // With ties at the bottom, prefer productive skills (speaking, writing) —
  // they are what learners most often avoid and most benefit from starting.
  const PRODUCTIVE_FIRST: ProgressSkill[] = ["speaking", "writing", "listening", "vocabulary", "grammar", "reading"];
  const minCount = Math.min(...entries.map(([, count]) => count));
  const weakest = entries
    .filter(([, count]) => count === minCount)
    .sort((a, b) => PRODUCTIVE_FIRST.indexOf(a[0]) - PRODUCTIVE_FIRST.indexOf(b[0]))[0];
  if (strongest[1] >= 15 && weakest[1] <= 2 && weakest[0] !== strongest[0]) {
    const hub = SKILL_HUBS[weakest[0]];
    recommendations.push({
      kind: "skill-balance",
      id: `balance-${weakest[0]}`,
      title: `Give ${SKILL_LABELS[weakest[0]]} a try`,
      action: `Open the ${hub.place} and do one short activity.`,
      purpose: `Your ${SKILL_LABELS[strongest[0]]} practice is well ahead (${strongest[1]} activities vs ${weakest[1]} for ${SKILL_LABELS[weakest[0]]}). Balanced skills are what make English feel useful in real conversations — one short activity is enough to start.`,
      href: hub.href,
      weight: 65,
    });
  }

  return recommendations.sort((a, b) => b.weight - a.weight).slice(0, 6);
}
