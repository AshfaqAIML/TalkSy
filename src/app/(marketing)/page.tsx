import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Ear,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Layers,
  Mic,
  MessagesSquare,
  PenLine,
  RotateCcw,
  Route as RouteIcon,
  Sparkles,
  SpellCheck,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LevelChip, ProgressRing, StatusBadge } from "@/components/ds";
import { HashAppRedirect } from "@/components/marketing/hash-app-redirect";
import { Reveal } from "@/components/marketing/reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { JourneyPath } from "@/components/marketing/journey-path";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { HeroPreview } from "@/components/marketing/previews/hero-preview";
import { ExperienceTabs } from "@/components/marketing/previews/experience-tabs";
import { lessonPreview } from "@/lib/marketing/preview-data";
import { siteStats, liveLevels, plannedLevels } from "@/lib/marketing/stats";
import {
  coreFeatures,
  faqs,
  howItWorksSteps,
  journeyStages,
  landingFaqQuestions,
  learnerProblems,
  tutorFacts,
  dailyPracticeFacts,
  type CoreFeature,
  type LearnerProblem,
} from "@/lib/marketing/content";
import { siteConfig, absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Learn English — from your first word to confident communication",
    description: siteConfig.heroSub,
    path: "/",
    ogTitle: "TalkSy — Learn English from your first word to confident communication",
  }),
};

const problemIcons: Record<LearnerProblem["icon"], React.ReactNode> = {
  ear: <Ear className="h-5 w-5" aria-hidden="true" />,
  brain: <Brain className="h-5 w-5" aria-hidden="true" />,
  spell: <SpellCheck className="h-5 w-5" aria-hidden="true" />,
  heart: <HeartHandshake className="h-5 w-5" aria-hidden="true" />,
  pen: <PenLine className="h-5 w-5" aria-hidden="true" />,
};

const featureIcons: Record<CoreFeature["icon"], React.ReactNode> = {
  route: <RouteIcon className="h-5 w-5" aria-hidden="true" />,
  book: <BookOpen className="h-5 w-5" aria-hidden="true" />,
  blocks: <Blocks className="h-5 w-5" aria-hidden="true" />,
  cards: <Layers className="h-5 w-5" aria-hidden="true" />,
  mic: <Mic className="h-5 w-5" aria-hidden="true" />,
  headphones: <Headphones className="h-5 w-5" aria-hidden="true" />,
  pen: <PenLine className="h-5 w-5" aria-hidden="true" />,
  coach: <MessagesSquare className="h-5 w-5" aria-hidden="true" />,
};

export default function LandingPage() {
  const landingFaqs = landingFaqQuestions
    .map((q) => faqs.find((f) => f.question === q))
    .filter((f): f is (typeof faqs)[number] => Boolean(f));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TalkSy",
          url: absoluteUrl("/"),
          logo: absoluteUrl("/icon.svg"),
          description: siteConfig.description,
          slogan: siteConfig.tagline,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "TalkSy",
          url: absoluteUrl("/"),
          description: siteConfig.description,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: landingFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <HashAppRedirect />

      {/* ============================================================ */}
      {/* 1 — HERO                                                     */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b bg-paper-dots">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
          <div>
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-caption font-semibold text-ink-600 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              CEFR-aligned · Pre-A1 to A2 available today
            </p>
            <h1 className="font-display text-balance text-display-lg leading-tight tracking-tight sm:text-display-xl">
              Your journey to{" "}
              <em className="text-primary">confident English</em> starts here.
            </h1>
            <p className="mt-5 max-w-lg text-body-lg text-ink-600 dark:text-ink-500">
              {siteConfig.heroSub}
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button size="lg" asChild className="text-base">
                <Link href="/register">
                  Start Learning Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/courses">Explore Learning Path</Link>
              </Button>
            </div>
            <p className="mt-4 max-w-sm text-balance text-caption text-ink-500">
              Free while in public preview · No credit card · Progress saved to your account
            </p>
          </div>
          <HeroPreview lesson={lessonPreview} />
        </div>

        {/* Trust bar — every number derived from the real curriculum */}
        <div className="border-t border-line bg-background/70 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                {siteStats.lessons}
              </dd>
              <dt className="text-caption text-ink-500">structured lessons, Pre-A1 → A2</dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                {siteStats.exercises.toLocaleString("en-US")}
              </dd>
              <dt className="text-caption text-ink-500">interactive exercises</dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                {siteStats.words.toLocaleString("en-US")}
              </dd>
              <dt className="text-caption text-ink-500">words with strength tracking</dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums text-ink-900">
                {siteStats.hours}
              </dd>
              <dt className="text-caption text-ink-500">hours of study, all four skills</dt>
            </div>
          </dl>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2 — PROBLEM RECOGNITION                                      */}
      {/* ============================================================ */}
      <section aria-labelledby="problems-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">Sound familiar?</p>
          <h2 id="problems-heading" className="max-w-2xl font-display text-display-lg text-ink-900 text-balance">
            Learning English is hard. Most apps make it harder.
          </h2>
          <p className="mt-3 max-w-2xl text-body text-ink-600 dark:text-ink-500">
            If any of these feel like your story, TalkSy was built for you — each one shaped a
            piece of how the platform works.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learnerProblems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 0.06}>
              <Card className="h-full border-line shadow-xs transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800">
                    {problemIcons[problem.icon]}
                  </span>
                  <h3 className="mb-3 font-semibold text-ink-900">{problem.title}</h3>
                  <blockquote className="mb-4 border-l-2 border-line-strong pl-3 text-body-sm italic leading-relaxed text-ink-500">
                    “{problem.quote}”
                  </blockquote>
                  <p className="mt-auto flex gap-2 text-body-sm leading-relaxed text-ink-700 dark:text-ink-600">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {problem.response}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 — LEARNING JOURNEY                                         */}
      {/* ============================================================ */}
      <section aria-labelledby="journey-heading" className="border-y bg-secondary/30 bg-paper-dots py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">The learning journey</p>
            <h2 id="journey-heading" className="max-w-2xl font-display text-display-lg text-ink-900 text-balance">
              From the alphabet to fluency — one deliberate step at a time
            </h2>
            <p className="mt-3 max-w-2xl text-body text-ink-600 dark:text-ink-500">
              TalkSy&apos;s curriculum is one continuous path. Nothing is skipped, nothing is
              assumed — each stage only starts when the previous one is solid.
            </p>
          </Reveal>
          <Reveal className="mt-12" delay={0.1}>
            <JourneyPath />
          </Reveal>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journeyStages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.05}>
                <li
                  className={
                    stage.available
                      ? "h-full rounded-xl border border-line bg-card p-4 shadow-xs"
                      : "h-full rounded-xl border border-dashed border-line-strong bg-card/60 p-4"
                  }
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="font-display text-heading-md text-ink-300 dark:text-ink-400">
                      {String(stage.step).padStart(2, "0")}
                    </span>
                    {!stage.available && <StatusBadge tone="neutral">In development</StatusBadge>}
                  </div>
                  <h3 className="font-semibold text-ink-900">{stage.title}</h3>
                  <p className="mt-1 text-caption leading-relaxed text-ink-500">{stage.description}</p>
                  <p className="mt-2 text-micro uppercase tracking-wide text-brand-700 dark:text-brand-600">
                    {stage.where}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 — CORE LEARNING FEATURES                                   */}
      {/* ============================================================ */}
      <section aria-labelledby="features-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">Core learning features</p>
          <h2 id="features-heading" className="max-w-2xl font-display text-display-lg text-ink-900 text-balance">
            Everything a learner needs — and nothing that fakes progress
          </h2>
          <p className="mt-3 max-w-2xl text-body text-ink-600 dark:text-ink-500">
            Each feature trains a real skill. Statuses are honest: what you can use today,
            and what is being built.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 0.06}>
              <Card className="h-full border-line shadow-xs transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col p-5">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800">
                      {featureIcons[feature.icon]}
                    </span>
                    {feature.status === "live" ? (
                      <StatusBadge tone="success">Live</StatusBadge>
                    ) : (
                      <StatusBadge tone="warning">In development</StatusBadge>
                    )}
                  </div>
                  <h3 className="mb-2 font-semibold text-ink-900">{feature.title}</h3>
                  <p className="text-caption leading-relaxed text-ink-500">{feature.text}</p>
                  {feature.statusNote && (
                    <p className="mt-auto pt-3 text-micro uppercase tracking-wide text-ink-400">
                      {feature.statusNote}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-primary hover:text-brand-700"
          >
            See the features in detail <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* ============================================================ */}
      {/* 5 — HOW IT WORKS                                             */}
      {/* ============================================================ */}
      <section aria-labelledby="how-heading" className="border-y bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">How it works</p>
            <h2 id="how-heading" className="max-w-2xl font-display text-display-lg text-ink-900 text-balance">
              Six steps from today to a working habit
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {howItWorksSteps.map((step, i) => (
              <Reveal key={step.n} delay={(i % 3) * 0.07}>
                <li className="relative h-full rounded-xl border border-line bg-card p-6 shadow-xs">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-base font-bold text-primary-foreground">
                    {step.n}
                  </span>
                  <h3 className="mb-2 font-semibold text-ink-900">{step.title}</h3>
                  <p className="text-body-sm leading-relaxed text-ink-500">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6 — LEARNING EXPERIENCE PREVIEW                              */}
      {/* ============================================================ */}
      <section aria-labelledby="experience-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">The learning experience</p>
          <h2 id="experience-heading" className="max-w-2xl font-display text-display-lg text-ink-900 text-balance">
            Look inside the app — real screens, real lesson content
          </h2>
          <p className="mt-3 max-w-2xl text-body text-ink-600 dark:text-ink-500">
            These are recreations of the actual interface, built from the same components and
            the same curriculum data as the product. The sentence builder above is a real
            exercise from Lesson 1 — it works.
          </p>
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <ExperienceTabs lesson={lessonPreview} />
        </Reveal>
      </section>

      {/* ============================================================ */}
      {/* 7 — COURSE LEVELS                                            */}
      {/* ============================================================ */}
      <section aria-labelledby="levels-heading" className="border-y bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">Course levels</p>
            <h2 id="levels-heading" className="max-w-2xl font-display text-display-lg text-ink-900 text-balance">
              A complete beginner-to-elementary path today, the full ladder tomorrow
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {liveLevels.map((level, i) => (
              <Reveal key={level.code} delay={(i % 3) * 0.07}>
                <Card className="h-full border-line shadow-xs transition-shadow hover:shadow-md">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <LevelChip code={level.code} />
                        <div>
                          <h3 className="font-semibold text-ink-900">{level.name}</h3>
                          <p className="text-caption text-ink-500">{level.cefrLabel}</p>
                        </div>
                      </div>
                      <StatusBadge tone="success">{level.lessonCount} lessons</StatusBadge>
                    </div>
                    <p className="text-body-sm leading-relaxed text-ink-500">{level.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {level.unitTitles.map((unit) => (
                        <li
                          key={unit}
                          className="rounded-full border border-line bg-sand-50 px-2.5 py-1 text-micro font-medium text-ink-600"
                        >
                          {unit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            {plannedLevels.map((level, i) => (
              <Reveal key={level.code} delay={i * 0.07}>
                <Card className="h-full border-dashed opacity-80 shadow-xs">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-dashed border-line-strong text-sm font-bold text-ink-400">
                          {level.code}
                        </span>
                        <div>
                          <h3 className="font-semibold text-ink-600 dark:text-ink-500">{level.name}</h3>
                          <p className="text-caption text-ink-400">{level.cefrLabel}</p>
                        </div>
                      </div>
                      <StatusBadge tone="neutral">In development</StatusBadge>
                    </div>
                    <p className="text-body-sm leading-relaxed text-ink-500">{level.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/courses">
                Explore the full curriculum <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8 — AI TUTOR                                                 */}
      {/* ============================================================ */}
      <section aria-labelledby="tutor-heading" className="bg-[#062b28] py-20 text-[#e8fbf7]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="overline-label mb-2 text-[#7dd2c5]">Personalised practice</p>
            <h2 id="tutor-heading" className="font-display text-display-lg text-balance text-[#e8fbf7]">
              {tutorFacts.heading}
            </h2>
            <p className="mt-4 text-body text-[#d9f2ee]/90">{tutorFacts.intro}</p>
            <ul className="mt-8 space-y-5">
              {tutorFacts.live.map((fact) => (
                <li key={fact.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7dd2c5]" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-[#e8fbf7]">{fact.title}</h3>
                    <p className="mt-1 text-body-sm leading-relaxed text-[#d9f2ee]/80">{fact.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-[#0f524d] bg-[#0c443f]/60 p-6 shadow-xl backdrop-blur-sm sm:p-7">
              <div className="mb-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <h3 className="font-display text-heading-sm text-[#e8fbf7]">{tutorFacts.coach.title}</h3>
                <StatusBadge tone="warning">Chat in development</StatusBadge>
              </div>
              <p className="mb-5 text-body-sm leading-relaxed text-[#d9f2ee]/85">{tutorFacts.coach.text}</p>
              {/* Coach chat — the real reply format of the rule engine */}
              <div className="space-y-3 rounded-xl bg-[#04211e] p-4">
                <div className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[#177e76] px-4 py-2.5 text-body-sm text-white">
                    Hello! What should I practise today?
                  </p>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-[#0f524d] bg-[#0c443f] px-4 py-3">
                    <p className="whitespace-pre-line text-body-sm leading-relaxed text-[#e8fbf7]">
                      {tutorFacts.coach.sampleMessage}
                    </p>
                    <p className="mt-2 text-caption italic text-[#7dd2c5]">{tutorFacts.coach.signature}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-micro uppercase tracking-wide text-[#7dd2c5]/80">
                {tutorFacts.coach.badgeNote}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9 — DAILY PRACTICE                                           */}
      {/* ============================================================ */}
      <section aria-labelledby="daily-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal>
            <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">Daily practice</p>
            <h2 id="daily-heading" className="font-display text-display-lg text-ink-900 text-balance">
              {dailyPracticeFacts.heading}
            </h2>
            <p className="mt-3 text-body text-ink-600 dark:text-ink-500">{dailyPracticeFacts.intro}</p>
            <ul className="mt-8 space-y-5">
              {dailyPracticeFacts.points.map((point) => (
                <li key={point.title} className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800">
                    {point.title.includes("sized") ? (
                      <Target className="h-4.5 w-4.5" aria-hidden="true" />
                    ) : point.title.includes("goal") ? (
                      <Target className="h-4.5 w-4.5" aria-hidden="true" />
                    ) : point.title.includes("integrity") ? (
                      <CalendarCheck className="h-4.5 w-4.5" aria-hidden="true" />
                    ) : (
                      <RotateCcw className="h-4.5 w-4.5" aria-hidden="true" />
                    )}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{point.title}</h3>
                    <p className="mt-1 text-body-sm leading-relaxed text-ink-500">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <Card className="border-2 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="overline-label mb-1 text-brand-700 dark:text-brand-600">Thursday, 13 November</p>
                    <h3 className="font-display text-heading-md text-ink-900">Your day at a glance</h3>
                  </div>
                  <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <div className="flex flex-wrap items-center justify-around gap-8">
                  <ProgressRing value={70} size="lg" tone="brand" label="Daily goal progress">
                    <span className="flex flex-col items-center">
                      <span className="text-xl font-bold tabular-nums leading-none">7 min</span>
                      <span className="text-micro text-ink-500">of 10 today</span>
                    </span>
                  </ProgressRing>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-sand-50 px-4 py-3 dark:bg-sand-100/40">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sun-100 text-sun-700 dark:bg-sun-500/15">
                        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-body-sm font-bold text-ink-900">Day 6</p>
                        <p className="text-caption text-ink-500">one lesson completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-sand-50 px-4 py-3 dark:bg-sand-100/40">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-600/20">
                        <Mic className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-body-sm font-bold text-ink-900">Speaking done</p>
                        <p className="text-caption text-ink-500">graded by speech recognition</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-sand-50 px-4 py-3 dark:bg-sand-100/40">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-grove-100 text-grove-900 dark:bg-grove-600/15">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-body-sm font-bold text-ink-900">12 words reviewed</p>
                        <p className="text-caption text-ink-500">weakest first, always</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 — FAQ                                                     */}
      {/* ============================================================ */}
      <section aria-labelledby="faq-heading" className="border-y bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">Questions</p>
            <h2 id="faq-heading" className="font-display text-display-lg text-ink-900 text-balance">
              Honest answers, before you ask
            </h2>
          </Reveal>
          <Reveal className="mt-8" delay={0.1}>
            <FaqAccordion items={landingFaqs} className="rounded-2xl border border-line bg-card px-5 shadow-xs sm:px-6" />
          </Reveal>
          <Reveal className="mt-6">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-primary hover:text-brand-700"
            >
              All questions, including pricing and content review <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11 — FINAL CTA                                               */}
      {/* ============================================================ */}
      <section aria-labelledby="cta-heading" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h2 id="cta-heading" className="font-display text-display-lg text-balance">
              Your first English word is one tap away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-primary-foreground/85">
              Create a free account and start Lesson 1 today — the alphabet, if that&apos;s
              where your journey begins. Every word, every streak and every step of the path
              is saved as you go.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link href="/register">
                  Start Learning Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/courses">Explore Learning Path</Link>
              </Button>
            </div>
            <p className="mt-5 text-caption text-primary-foreground/70">
              Free while in public preview · Beginner path free forever · No credit card
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
