/**
 * Marketing content gates — keep the public site honest.
 *
 * These tests enforce the content policy in src/lib/marketing/content.ts:
 * real derived numbers, honest feature statuses, no retired brand names,
 * and complete structured data.
 */

import { describe, expect, it } from "bun:test";
import { availableLevels, curriculum, totalLessonCount } from "@/data/curriculum";
import { a1Unit1 } from "@/data/curriculum/a1-unit1";
import { siteStats, liveLevels, plannedLevels } from "@/lib/marketing/stats";
import {
  coreFeatures,
  faqs,
  howItWorksSteps,
  journeyStages,
  landingFaqQuestions,
  learnerProblems,
  pricingPlans,
  tutorFacts,
  dailyPracticeFacts,
} from "@/lib/marketing/content";
import { lessonPreview } from "@/lib/marketing/preview-data";
import { mainNav, footerNav, siteConfig } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Real, derived statistics                                            */
/* ------------------------------------------------------------------ */

describe("site statistics are derived from the real curriculum", () => {
  const lessons = availableLevels.flatMap((l) => l.units.flatMap((u) => u.lessons));

  it("lesson, unit and level counts match the curriculum source", () => {
    expect(siteStats.lessons).toBe(totalLessonCount);
    expect(siteStats.lessons).toBe(lessons.length);
    expect(siteStats.units).toBe(availableLevels.reduce((s, l) => s + l.units.length, 0));
    expect(siteStats.levels).toBe(availableLevels.length);
    expect(siteStats.levelsPlanned).toBe(curriculum.length - availableLevels.length);
  });

  it("exercise and word counts match a fresh reduction", () => {
    const exercises = lessons.reduce((s, l) => s + l.exercises.length, 0);
    const words = lessons.reduce((s, l) => s + l.vocab.length, 0);
    const minutes = lessons.reduce((s, l) => s + (l.minutes ?? 0), 0);
    expect(siteStats.exercises).toBe(exercises);
    expect(siteStats.words).toBe(words);
    expect(siteStats.minutes).toBe(minutes);
    expect(siteStats.hours).toBe(Math.round((minutes / 60) * 10) / 10);
  });

  it("the counts are substantial (a real catalogue, not a placeholder)", () => {
    expect(siteStats.lessons).toBeGreaterThanOrEqual(60);
    expect(siteStats.exercises).toBeGreaterThanOrEqual(400);
    expect(siteStats.words).toBeGreaterThanOrEqual(150);
  });

  it("level listings mirror the curriculum, in path order", () => {
    expect(liveLevels.map((l) => l.code)).toEqual(availableLevels.map((l) => l.code));
    expect(plannedLevels.map((l) => l.code)).toEqual(["B1", "B2", "C1"]);
    for (const level of liveLevels) {
      const source = availableLevels.find((l) => l.code === level.code)!;
      expect(level.unitTitles).toEqual(source.units.map((u) => u.title));
      expect(level.lessonCount).toBe(
        source.units.reduce((s, u) => s + u.lessons.length, 0)
      );
    }
  });
});

/* ------------------------------------------------------------------ */
/* Preview data is real lesson content                                 */
/* ------------------------------------------------------------------ */

describe("product previews use real curriculum content", () => {
  const firstLesson = a1Unit1.lessons[0];

  it("the hero shows the real first A1 lesson", () => {
    expect(lessonPreview.title).toBe(firstLesson.title);
    expect(lessonPreview.subtitle).toBe(firstLesson.subtitle);
    expect(lessonPreview.unitLabel).toContain("Beginner");
  });

  it("vocabulary, dialogue and exercises come from the lesson source", () => {
    for (const word of lessonPreview.vocab) {
      expect(firstLesson.vocab.some((v) => v.term === word.term)).toBe(true);
    }
    const dialogue = firstLesson.dialogue!;
    for (const line of lessonPreview.dialogue.lines) {
      expect(dialogue.lines.some((l) => l.text === line.text && l.speaker === line.speaker)).toBe(true);
    }
    // The sentence builder answer is a real exercise answer.
    expect(firstLesson.exercises).toContainEqual(
      expect.objectContaining({ type: "order", answer: lessonPreview.sentenceBuilder?.answer })
    );
    // The quiz is a real multiple-choice item from the lesson.
    expect(firstLesson.exercises).toContainEqual(
      expect.objectContaining({ type: "mcq", prompt: lessonPreview.quiz?.prompt })
    );
  });

  it("the scrambled words are a permutation of the answer", () => {
    const builder = lessonPreview.sentenceBuilder!;
    expect([...builder.scrambled].sort()).toEqual(builder.answer.split(" ").sort());
  });
});

/* ------------------------------------------------------------------ */
/* Honest feature statuses & required sections                         */
/* ------------------------------------------------------------------ */

describe("marketing content is complete and honest", () => {
  it("has the eight core features from the product brief, with honest statuses", () => {
    const requiredTitles = [
      "Structured English courses",
      "Grammar lessons",
      "Sentence builder",
      "Vocabulary flashcards",
      "Speaking practice",
      "Listening comprehension",
      "Writing correction",
      "AI English tutor",
    ];
    expect(coreFeatures.map((f) => f.title)).toEqual(requiredTitles);
    for (const feature of coreFeatures) {
      expect(["live", "planned"]).toContain(feature.status);
      expect(feature.text.length).toBeGreaterThan(40);
    }
    // The tutor is API-only today — the public claim must say "planned".
    const tutor = coreFeatures.find((f) => f.icon === "coach")!;
    expect(tutor.status).toBe("planned");
    expect(tutor.statusNote).toBeTruthy();
  });

  it("covers the five learner difficulties from the brief", () => {
    expect(learnerProblems).toHaveLength(5);
    for (const problem of learnerProblems) {
      expect(problem.quote.length).toBeGreaterThan(10);
      expect(problem.response.length).toBeGreaterThan(40);
    }
  });

  it("shows the seven-step journey from alphabet to fluency", () => {
    expect(journeyStages.map((s) => s.title)).toEqual([
      "Alphabet",
      "Words",
      "Sentences",
      "Grammar",
      "Paragraphs",
      "Conversations",
      "Fluency",
    ]);
    // Only the final stage (B1+ territory) is honestly not yet available.
    expect(journeyStages.filter((s) => !s.available).map((s) => s.title)).toEqual(["Fluency"]);
  });

  it("has the six how-it-works steps", () => {
    expect(howItWorksSteps.map((s) => s.n)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("answers the six required FAQ questions and more", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(10);
    for (const item of faqs) {
      expect(item.question.endsWith("?")).toBe(true);
      expect(item.answer.length).toBeGreaterThan(60);
    }
    const questions = faqs.map((f) => f.question);
    for (const required of landingFaqQuestions) {
      expect(questions).toContain(required);
    }
    // The landing subset resolves to real FAQ entries.
    expect(landingFaqQuestions.length).toBe(6);
  });

  it("frames the tutor honestly (rule-based coach, no AI hype)", () => {
    expect(tutorFacts.coach.signature).toContain("rule-based");
    // The in-app chat is not shipped — the copy must say so explicitly.
    expect(tutorFacts.coach.title).toContain("rolling out");
    expect(tutorFacts.coach.text).toContain("rule-based");
    expect(tutorFacts.coach.text).toMatch(/next releases|in development|not yet shipped/);
    expect(tutorFacts.coach.badgeNote).toContain("Example");
    expect(tutorFacts.heading.toLowerCase()).not.toContain("magic");
  });

  it("describes daily practice with the real streak rules", () => {
    const streakPoint = dailyPracticeFacts.points.find((p) => p.title.includes("integrity"))!;
    expect(streakPoint.text).toContain("one lesson or three exercises");
  });
});

/* ------------------------------------------------------------------ */
/* Pricing honesty                                                     */
/* ------------------------------------------------------------------ */

describe("pricing architecture is honest", () => {
  it("offers a live free plan and clearly-planned premium tiers", () => {
    const free = pricingPlans.find((p) => p.id === "free")!;
    expect(free.status).toBe("live");
    expect(free.priceLabel.toLowerCase()).toBe("free");
    for (const plan of pricingPlans) {
      if (plan.id !== "free") {
        expect(plan.status).toBe("planned");
        // No invented prices for future tiers.
        expect(plan.priceLabel.toLowerCase()).not.toMatch(/\$|€|£|₹|\d+\/(mo|month)/);
      }
    }
  });

  it("guarantees the beginner path stays free", () => {
    const free = pricingPlans.find((p) => p.id === "free")!;
    expect(free.footnote?.toLowerCase()).toContain("free forever");
  });
});

/* ------------------------------------------------------------------ */
/* Brand & navigation integrity                                        */
/* ------------------------------------------------------------------ */

describe("brand and navigation integrity", () => {
  it("never uses the retired EnglishPath name in marketing data", () => {
    const serialized = JSON.stringify({
      siteConfig,
      mainNav,
      footerNav,
      faqs,
      coreFeatures,
      learnerProblems,
      journeyStages,
      howItWorksSteps,
      pricingPlans,
      tutorFacts,
      dailyPracticeFacts,
    });
    expect(serialized).not.toContain("EnglishPath");
  });

  it("uses the exact TalkSy tagline", () => {
    expect(siteConfig.tagline).toBe(
      "From your first English word to confident communication."
    );
  });

  it("navigation links point at real public routes", () => {
    const validRoutes = new Set([
      "/",
      "/about",
      "/courses",
      "/methodology",
      "/features",
      "/pricing",
      "/faq",
      "/contact",
      "/login",
      "/register",
      "/app",
    ]);
    const links = [
      ...mainNav.map((n) => n.href),
      ...footerNav.learn.map((n) => n.href),
      ...footerNav.company.map((n) => n.href),
      ...footerNav.account.map((n) => n.href),
    ];
    for (const href of links) expect(validRoutes.has(href)).toBe(true);
  });
});
