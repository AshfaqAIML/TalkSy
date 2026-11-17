import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Headphones,
  Layers,
  MessageSquareText,
  Mic,
  Repeat,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { siteStats } from "@/lib/marketing/stats";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Learning methodology",
  description:
    "How TalkSy teaches: communicative practice, spaced repetition, skill acquisition theory and CEFR can-do goals — assembled into a seven-beat lesson arc that mixes all four skills every day.",
  path: "/methodology",
  ogTitle: "The TalkSy learning methodology",
});

const foundations = [
  {
    icon: MessageSquareText,
    approach: "Communicative Language Teaching",
    takeaway: "Language is learned by using it for meaning, not by studying rules in isolation.",
    where: "Every lesson centres on a real-life situation; dialogues and speaking come before grammar abstraction.",
  },
  {
    icon: Repeat,
    approach: "Spaced repetition (Leitner box)",
    takeaway: "Memories strengthen when retrieved at increasing intervals; forgetting is expected and planned for.",
    where: "Vocabulary strength 0–5; practice quizzes resurface weak words first.",
  },
  {
    icon: Timer,
    approach: "Skill acquisition theory",
    takeaway: "Fluency is knowledge made automatic through varied practice.",
    where: "Exercise ladders move recognition → production; retries are free, XP is not farmed.",
  },
  {
    icon: GraduationCap,
    approach: "CEFR action-oriented descriptors",
    takeaway: "Progress is what you can do in the world, not what you know about the language.",
    where: "Level and unit goals are phrased as can-do statements.",
  },
];

const lessonArc = [
  {
    title: "Meet the words",
    text: "Vocabulary cards — term, part of speech, a simple-English definition and an example. Definitions stay within the learner's level vocabulary, so you never need another language to understand them.",
    icon: Layers,
  },
  {
    title: "Hear it in use",
    text: "A natural dialogue using the target words, playable line by line with two voice choices and a slow replay.",
    icon: Headphones,
  },
  {
    title: "See the pattern",
    text: "One to three short grammar points, each with examples. Explanations never exceed a few beginner-friendly sentences.",
    icon: Sparkles,
  },
  {
    title: "Read for meaning",
    text: "Where the lesson calls for it, a short passage in the target language — read for meaning, not translation.",
    icon: GraduationCap,
  },
  {
    title: "Prove it",
    text: "Mixed exercise types: multiple choice, fill-in, word ordering, matching, listening, speaking. Recognition first, production second.",
    icon: ShieldCheck,
  },
  {
    title: "Speak it",
    text: "Every lesson ends with speaking practice, graded by speech recognition when available, honest self-assessment when not.",
    icon: Mic,
  },
  {
    title: "See the truth",
    text: "XP earned, accuracy, words learned — numbers that come from the server's record of what actually happened.",
    icon: ShieldCheck,
  },
];

const exerciseRules = [
  {
    title: "Recognition before production",
    text: "Within a lesson, choosing an answer always precedes constructing one, and speaking comes after both.",
  },
  {
    title: "Forgiving, never arbitrary",
    text: "Typing accepts case-insensitive, punctuation-tolerant input; missing articles and curly apostrophes never fail an honest attempt.",
  },
  {
    title: "Speaking is practice, not a quiz",
    text: "Speaking is excluded from accuracy scores so microphone quality never lies about a learner's grammar.",
  },
  {
    title: "Retries are free; XP is not",
    text: "Repeat any exercise until it's correct — but XP credits the first correct attempt only.",
  },
  {
    title: "Every exercise trains a word or pattern",
    text: "Listening exercises link to a specific vocabulary word, so answers update that word's strength.",
  },
  {
    title: "Feedback follows the answer",
    text: "Explanations arrive at the moment of evaluation — after you answer, never before.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "TalkSy learning methodology",
          url: absoluteUrl("/methodology"),
          description:
            "How TalkSy teaches: communicative practice, spaced repetition, skill acquisition theory and CEFR can-do goals.",
        }}
      />
      <PageHero
        eyebrow="Methodology"
        title="How TalkSy teaches — the pedagogy behind every lesson"
        lede={`TalkSy's method is a pragmatic synthesis of four well-established approaches, chosen for one thing: what demonstrably moves beginners toward communication. All ${siteStats.lessons} lessons follow it.`}
        breadcrumb="Methodology"
      />

      {/* Foundations */}
      <section aria-labelledby="foundations-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 id="foundations-heading" className="font-display text-heading-lg text-ink-900">
            Four foundations
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {foundations.map((f, i) => (
            <Reveal key={f.approach} delay={(i % 2) * 0.07}>
              <Card className="h-full border-line shadow-xs">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800">
                      <f.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-ink-900">{f.approach}</h3>
                  </div>
                  <p className="mb-3 text-body-sm font-medium text-ink-700 dark:text-ink-600">{f.takeaway}</p>
                  <p className="text-caption leading-relaxed text-ink-500">
                    <span className="font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-600">
                      Where it shows up:{" "}
                    </span>
                    {f.where}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lesson arc */}
      <section aria-labelledby="arc-heading" className="border-y bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 id="arc-heading" className="font-display text-heading-lg text-ink-900">
              The seven-beat lesson arc
            </h2>
            <p className="mt-2 max-w-2xl text-body text-ink-600 dark:text-ink-500">
              Every lesson follows the same arc. Predictability lowers cognitive load — the
              content varies, the shape never does.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {lessonArc.map((beat, i) => (
              <Reveal key={beat.title} delay={(i % 4) * 0.06}>
                <li className="relative h-full rounded-xl border border-line bg-card p-5 shadow-xs">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <beat.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-heading-md text-ink-300 dark:text-ink-400">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold text-ink-900">{beat.title}</h3>
                  <p className="text-caption leading-relaxed text-ink-500">{beat.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Exercise rules */}
      <section aria-labelledby="rules-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal>
            <h2 id="rules-heading" className="font-display text-heading-lg text-ink-900">
              Six exercise design rules
            </h2>
            <p className="mt-3 text-body leading-relaxed text-ink-600 dark:text-ink-500">
              These rules are enforced by the platform&apos;s evaluation engine and its test
              suite — they govern every one of the {siteStats.exercises.toLocaleString("en-US")}{" "}
              exercises, and every one still to come.
            </p>
          </Reveal>
          <ol className="space-y-4">
            {exerciseRules.map((rule, i) => (
              <Reveal key={rule.title} delay={i * 0.05}>
                <li className="flex gap-4 rounded-xl border border-line bg-card p-4 shadow-xs sm:p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{rule.title}</h3>
                    <p className="mt-1 text-body-sm leading-relaxed text-ink-500">{rule.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Vocabulary + streaks */}
      <section aria-labelledby="vocab-heading" className="border-t bg-secondary/30 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 id="vocab-heading" className="font-display text-heading-lg text-ink-900">
              The vocabulary system
            </h2>
            <div className="mt-4 space-y-4 text-body leading-relaxed text-ink-600 dark:text-ink-500">
              <p>
                Words enter the system at strength 1 when their lesson is completed. Correct
                answers in lessons and practice raise strength by one; wrong answers lower it by
                one. The range is 0–5.
              </p>
              <p>
                A word counts as <strong className="text-ink-800 dark:text-ink-600">learned</strong>{" "}
                at strength 2 or higher — answered correctly at least once outside its lesson
                cards. Practice always serves your weakest, least-recently-reviewed words first.
              </p>
            </div>
            {/* Strength scale visual */}
            <div className="mt-6 rounded-xl border border-line bg-card p-5 shadow-xs">
              <p className="mb-4 text-caption font-semibold uppercase tracking-wide text-ink-500">
                Strength scale (example: the word “hello”)
              </p>
              <div className="flex items-center gap-2" aria-label="Strength 4 of 5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    aria-hidden="true"
                    className={
                      n <= 4
                        ? "h-3 w-10 rounded-full bg-primary"
                        : "h-3 w-10 rounded-full border-2 border-dashed border-line-strong"
                    }
                  />
                ))}
                <span className="ml-2 text-body-sm font-bold tabular-nums text-ink-900">4/5</span>
              </div>
              <p className="mt-3 text-caption text-ink-500">
                Due for review tomorrow — scheduled automatically by the spaced-repetition engine.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-heading-lg text-ink-900">Streaks & goals, without manipulation</h2>
            <div className="mt-4 space-y-4 text-body leading-relaxed text-ink-600 dark:text-ink-500">
              <p>
                A day counts only when you do real work: at least one lesson or three exercises.
                Opening the app is not practice.
              </p>
              <p>
                The daily goal is minutes-based and learner-set (10 minutes by default). The
                dashboard ring fills from the practice the server records.
              </p>
              <p>
                There are no loss-aversion mechanics — no “your streak will die!” nagging, no
                variable-reward loot. The reward loop is competence, visibly earned.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-line bg-card p-5 shadow-xs">
              <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-ink-500">
                Curriculum integrity, enforced
              </p>
              <p className="text-body-sm leading-relaxed text-ink-500">
                The curriculum ships with an automated test suite that checks unique IDs, valid
                answers, that listening and speaking are present in every lesson, and that every
                exercise&apos;s word links resolve to real vocabulary. Content that fails review
                never reaches learners marked as reviewed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-heading-lg text-balance">See the method in motion</h2>
            <p className="mx-auto mt-3 max-w-xl text-body text-primary-foreground/85">
              One lesson is worth a thousand words of methodology — and lesson one starts where
              every journey does: the letter A.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">
                  Start Learning Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/courses">Browse all courses</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
