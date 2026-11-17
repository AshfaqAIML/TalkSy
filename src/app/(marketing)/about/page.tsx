import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Compass,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Speech,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { siteStats } from "@/lib/marketing/stats";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About TalkSy",
  description:
    "Why TalkSy exists: an English learning platform built on honest progress, structured practice and real production of language — from your first word to confident communication.",
  path: "/about",
});

const failures = [
  {
    icon: Speech,
    title: "Shallow gamification",
    text: "Apps optimised for streaks and notifications teach recognition, not production. Learners tap correct answers for months and still cannot hold a two-minute conversation.",
  },
  {
    icon: Compass,
    title: "Unstructured content",
    text: "Video libraries and grammar references have no ordered path. Learners don't know what to study next, gaps go unnoticed, and motivation decays.",
  },
  {
    icon: Eye,
    title: "Fake progress signals",
    text: "Badges and percentage bars disconnected from real ability. Learners cannot tell what they actually know.",
  },
];

const answers = [
  "Every lesson mixes all four skills; speaking and writing are first-class, graded exercises — not stickers.",
  "A strictly ordered curriculum: level → unit → lesson, sequentially unlocked, with a visible CEFR ladder.",
  "XP, accuracy and vocabulary strength are computed server-side from real answers and can never be inflated.",
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Honest progress",
    text: "If a number is shown to a learner, it is derived from real, recorded work. Speaking practice never pretends to be a quiz score.",
  },
  {
    icon: Compass,
    title: "One clear next step",
    text: "At any moment the learner knows exactly what to do next: the next unlocked lesson, the weakest words to review, today's goal.",
  },
  {
    icon: Speech,
    title: "Skills, not screens",
    text: "Design decisions are judged by whether they produce reading, writing, listening or speaking practice — never by time-on-app.",
  },
  {
    icon: HeartHandshake,
    title: "Respect the learner",
    text: "Simple-English explanations, no dark patterns, no artificial paywalls on core learning, graceful fallbacks when a browser feature is unavailable.",
  },
  {
    icon: BookOpenCheck,
    title: "Content as craft",
    text: "All curriculum material is original, level-appropriate and versioned like source code — reviewed before it loses its “Draft content” label, never scraped filler.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About TalkSy",
          url: absoluteUrl("/about"),
          mainEntity: {
            "@type": "Organization",
            name: "TalkSy",
            url: absoluteUrl("/"),
            slogan: "From your first English word to confident communication.",
          },
        }}
      />
      <PageHero
        eyebrow="About TalkSy"
        title="A learning platform that respects how language is actually built"
        lede="TalkSy exists because most English products fail learners in the same three ways — and because building the honest alternative is a design problem we can solve."
        breadcrumb="About"
      />

      {/* The problem */}
      <section aria-labelledby="why-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 id="why-heading" className="font-display text-heading-lg text-ink-900">
            The three failures we set out to fix
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {failures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <Card className="h-full border-line shadow-xs">
                <CardContent className="p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-clay-100 text-clay-700 dark:bg-clay-500/15 dark:text-clay-700">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 font-semibold text-ink-900">{f.title}</h3>
                  <p className="text-body-sm leading-relaxed text-ink-500">{f.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-line bg-card p-6 shadow-xs sm:p-8">
            <h3 className="mb-4 font-display text-heading-sm text-ink-900">The TalkSy answer</h3>
            <ul className="space-y-3">
              {answers.map((answer) => (
                <li key={answer} className="flex gap-3 text-body text-ink-700 dark:text-ink-600">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-heading" className="border-y bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 id="principles-heading" className="font-display text-heading-lg text-ink-900">
              Five principles behind every screen
            </h2>
            <p className="mt-2 max-w-2xl text-body text-ink-600 dark:text-ink-500">
              These are written down in the product documentation and enforced in code — any
              proposed feature must state which principle it serves.
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.07}>
                <li className="h-full rounded-xl border border-line bg-card p-6 shadow-xs">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 font-semibold text-ink-900">
                    <span className="mr-2 font-display text-ink-300 dark:text-ink-400">{i + 1}</span>
                    {p.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-ink-500">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How it's built */}
      <section aria-labelledby="built-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 id="built-heading" className="font-display text-heading-lg text-ink-900">
              Built in the open, labelled honestly
            </h2>
            <div className="mt-4 space-y-4 text-body leading-relaxed text-ink-600 dark:text-ink-500">
              <p>
                TalkSy&apos;s curriculum — {siteStats.lessons} lessons, {siteStats.exercises.toLocaleString("en-US")}{" "}
                exercises and {siteStats.words.toLocaleString("en-US")} words today — is original
                material, written and versioned like source code. Nothing is licensed filler.
              </p>
              <p>
                Beginner-track lessons currently carry a visible “Draft content” badge while they
                move through our review pipeline. We label that state instead of hiding it, and a
                lesson only loses the badge once it has passed review. You will never see a fake
                “expert-approved” stamp on TalkSy.
              </p>
              <p>
                Progress numbers are computed on the server from recorded answers. The client
                cannot inflate them — which also means the numbers you see are the numbers you
                earned.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-card p-5 shadow-xs">
                <p className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                  {siteStats.lessons}
                </p>
                <p className="mt-1 text-caption text-ink-500">lessons live today, Pre-A1 → A2</p>
              </div>
              <div className="rounded-xl border border-line bg-card p-5 shadow-xs">
                <p className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                  {siteStats.hours}
                </p>
                <p className="mt-1 text-caption text-ink-500">hours of structured study</p>
              </div>
              <div className="rounded-xl border border-line bg-card p-5 shadow-xs">
                <p className="font-display text-3xl font-semibold tabular-nums text-ink-900">4</p>
                <p className="mt-1 text-caption text-ink-500">skills practised in every lesson</p>
              </div>
              <div className="rounded-xl border border-line bg-card p-5 shadow-xs">
                <p className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                  {siteStats.levels + siteStats.levelsPlanned}
                </p>
                <p className="mt-1 text-caption text-ink-500">
                  CEFR levels on the roadmap — 3 live, 3 in development
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section aria-labelledby="for-heading" className="border-t bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 id="for-heading" className="font-display text-heading-lg text-ink-900">
              Who TalkSy is for
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal>
              <Card className="h-full border-line shadow-xs">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-grove-700 dark:text-grove-600">Made for</h3>
                  <ul className="space-y-2.5 text-body-sm leading-relaxed text-ink-600 dark:text-ink-500">
                    <li className="flex gap-2.5">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-grove-600" aria-hidden="true" />
                      Adults and young adults (16+) learning English as a second language
                    </li>
                    <li className="flex gap-2.5">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-grove-600" aria-hidden="true" />
                      Absolute beginners — including learners who cannot read English yet
                    </li>
                    <li className="flex gap-2.5">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-grove-600" aria-hidden="true" />
                      Self-paced learners without a tutor, and classroom learners who want
                      structured practice between lessons
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full border-line shadow-xs">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-ink-500">Not (yet) for</h3>
                  <ul className="space-y-2.5 text-body-sm leading-relaxed text-ink-500">
                    <li className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-line-strong" />
                      Children under 13
                    </li>
                    <li className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-line-strong" />
                      Certification exam prep (IELTS/TOEFL-specific modules are a future decision)
                    </li>
                    <li className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-line-strong" />
                      Schools needing class administration tools (on the roadmap, later)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="max-w-xl text-body text-ink-600 dark:text-ink-500">
                If that sounds like you, the first lesson is ready — it starts with the letter A.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/register">
                    Start Learning Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/methodology">Read the methodology</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
