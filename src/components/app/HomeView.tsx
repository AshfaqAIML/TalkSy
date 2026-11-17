"use client";

/**
 * TalkSy public homepage — the premium front door.
 *
 * Honesty contract (PROMPT 30): every number on this page is verifiable
 * against the shipped content files or the live database. No student
 * counts, no testimonials, no ratings, no success statistics, no invented
 * course counts. Course cards are database-backed via the CMS catalogue
 * API; every category card links to a real application route.
 *
 * Motion: Reveal / StaggerGroup / Float from the shared motion system —
 * transform & opacity only, reduced-motion aware.
 */

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Compass,
  GraduationCap,
  Headphones,
  History,
  Layers,
  Library as LibraryIcon,
  Mic,
  PenLine,
  Play,
  Quote,
  Sparkles,
  Target,
  Trophy,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CourseCard,
  MetaItem,
  MetaRow,
} from "@/components/ui/cards";
import { SkeletonGrid } from "@/components/ui/skeleton";
import {
  Float,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import { useAppStore } from "@/lib/client/store";
import { cmsLearnerApi } from "@/lib/client/api";
import { tutorModes } from "@/data/tutor/modes";
import { PLATFORM_STATS } from "@/lib/generated/platform-stats";
import { MODE_ICONS } from "@/components/app/tutor/ModePicker";
import type { CmsPublicCatalogueCourseDto } from "@/data/cms/types";
import type { AppRoute } from "@/hooks/use-hash-route";
import { cn } from "@/lib/utils";

type Navigate = (route: AppRoute) => void;

/* ================================================================== */
/* SECTION 2 — Hero                                                     */
/* ================================================================== */

/** The product preview panel: the real learning path, a real word and the
 *  real AI Tutor lesson-doubt strip — the actual UI rendered with actual
 *  shipped content, never a fabricated conversation. */
function ProductPreview() {
  const lessons = [
    { title: "Hello! Everyday Greetings", minutes: 15, state: "completed" as const },
    { title: "Numbers 1–10", minutes: 12, state: "current" as const },
    { title: "Colors All Around", minutes: 15, state: "todo" as const },
    { title: "My Family", minutes: 15, state: "todo" as const },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="gradient-border-animated rounded-2xl p-1.5 shadow-glow-blue">
        <div className="overflow-hidden rounded-xl bg-card">
          {/* App chrome */}
          <div className="flex items-center gap-2.5 border-b bg-secondary/40 px-4 py-3">
            <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GraduationCap className="size-3.5" aria-hidden />
            </span>
            <p className="text-xs font-semibold">TalkSy</p>
            <span className="ml-auto flex items-center gap-1 rounded-md bg-background px-2 py-1 text-[11px] font-medium text-muted-foreground">
              <BookOpen className="size-3 text-primary" aria-hidden /> Learning path
            </span>
          </div>

          {/* Learning path — Pre-A1, real lesson titles */}
          <div className="px-4 pb-1 pt-4">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                Pre-A1 · First Words
              </p>
              <p className="text-[11px] tabular-nums text-muted-foreground">
                Level 1 of 4
              </p>
            </div>
            <ul className="mt-2.5 space-y-1.5">
              {lessons.map((lesson) => (
                <li
                  key={lesson.title}
                  className="flex items-center gap-2.5 rounded-lg border bg-background px-3 py-2"
                >
                  {lesson.state === "completed" ? (
                    <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="Completed" />
                  ) : (
                    <span
                      aria-hidden
                      className={cn(
                        "size-4 shrink-0 rounded-full border-2",
                        lesson.state === "current"
                          ? "border-primary"
                          : "border-border",
                      )}
                    />
                  )}
                  <span className="min-w-0 flex-1 truncate text-xs font-medium">
                    {lesson.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-[11px] tabular-nums text-muted-foreground">
                    <Clock className="size-3" aria-hidden />
                    {lesson.minutes} min
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Word World card — a real word entry (hello /həˈloʊ/) */}
          <div className="mx-4 mt-3 flex items-center gap-3 rounded-xl border bg-secondary/40 px-3.5 py-3">
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-skill-vocabulary/10 text-skill-vocabulary">
              <Volume2 className="size-4" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold leading-tight">
                hello <span className="font-mono text-[11px] text-muted-foreground">/həˈloʊ/</span>
              </p>
              <p className="truncate text-[11px] text-muted-foreground">
                the word you say when you meet someone
              </p>
            </div>
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Play className="size-3.5 translate-x-px" aria-hidden />
            </span>
          </div>

          {/* AI Tutor strip — lesson-doubt mode is a real supported interaction */}
          <div className="m-4 mt-3 flex items-center gap-3 rounded-xl border bg-background px-3.5 py-3">
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-skill-grammar/10 text-skill-grammar">
              <Brain className="size-4" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold leading-tight">AI Tutor · Lesson doubts</p>
              <p className="truncate text-[11px] text-muted-foreground">
                Ask anything about “Anna meets Ben”
              </p>
            </div>
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ArrowRight className="size-3.5" aria-hidden />
            </span>
          </div>
        </div>
      </div>

      {/* Floating proof chips — real facts, decorative drift only ≥sm */}
      <Float className="absolute -top-3 left-6 hidden sm:block" amplitude={4} duration={5}>
        <div className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium shadow-md">
          20 lessons live
        </div>
      </Float>
      <Float
        className="absolute -bottom-3 right-8 hidden sm:block"
        amplitude={4}
        duration={5}
        delay={1.2}
      >
        <div className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium shadow-md">
          135 words with audio
        </div>
      </Float>
    </div>
  );
}

function Hero({ navigate }: { navigate: Navigate }) {
  const user = useAppStore((s) => s.user);
  return (
    <section className="ambient-glow section-enter relative overflow-hidden border-b">
      {/* Signature background: subtle brand mesh + drifting gradient blobs */}
      <div className="mesh-subtle pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-10 hidden size-96 rounded-full bg-brand-blue/10 blur-3xl lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 hidden size-96 rounded-full bg-brand-violet/10 blur-3xl lg:block"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* min-w-0 on both tracks: the preview card's mono IPA token
            (/həˈloʊ/ cannot wrap) would otherwise force the implicit grid
            column past small viewports and clip the hero copy. */}
        <div className="flex min-w-0 flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-success pulse-soft" aria-hidden />
            A complete English platform — free while we grow
          </span>
          <h1 className="max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Your Journey to{" "}
            <span className="text-gradient">Confident English</span> Starts Here.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Build your vocabulary, master grammar, improve pronunciation and develop
            the confidence to communicate in English.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="press gap-2 shadow-md"
              onClick={() => navigate(user ? { name: "library" } : { name: "register" })}
            >
              Start Learning Free <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30"
              onClick={() => navigate({ name: "library" })}
            >
              Explore Learning Paths
            </Button>
          </div>
          <MetaRow className="text-xs">
            <MetaItem icon={BookOpen}>{PLATFORM_STATS.lessons} live lessons</MetaItem>
            <MetaItem icon={Layers}>{PLATFORM_STATS.exerciseTypes} exercise types</MetaItem>
            <MetaItem icon={Brain}>{PLATFORM_STATS.tutorModes} tutor modes</MetaItem>
            <MetaItem icon={GraduationCap}>IELTS &amp; TOEFL Academy</MetaItem>
          </MetaRow>
        </div>
        <div className="min-w-0">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* SECTION 3 — Learning pathways                                        */
/* ================================================================== */

const PATHWAYS = [
  {
    icon: GraduationCap,
    tint: "bg-primary/10 text-primary",
    step: "01",
    title: "Learn English from Zero",
    audience: "Absolute beginners — even if you cannot read English words yet.",
    outcomes: [
      "Your first 135 words with audio — greetings, everyday phrases, family",
      "Numbers 1–10, colors and “the verb to be” in real conversations",
      "The Everyday English Foundations course, taught lesson by lesson",
    ],
    primary: { label: "Start from lesson one", route: { name: "library" } as AppRoute },
    secondary: {
      label: "Everyday English Foundations",
      route: { name: "course", slug: "everyday-english-foundations" } as AppRoute,
    },
    featured: true,
  },
  {
    icon: Mic,
    tint: "bg-skill-speaking/10 text-skill-speaking",
    step: "02",
    title: "Improve Spoken English",
    audience: "Learners who understand English but hesitate the moment they speak.",
    outcomes: [
      "Repeat, read aloud and record — from single words to full turns",
      "Role-play 11 real scenarios: ordering food, the doctor, an interview…",
      "Word stress, rhythm and intonation with four pronunciation sets",
    ],
    primary: {
      label: "Open the Speaking Lab",
      route: { name: "speaking", view: "hub" } as AppRoute,
    },
    secondary: {
      label: "Browse the 11 scenarios",
      route: { name: "speaking", view: "hub", tab: "conversations" } as AppRoute,
    },
    featured: false,
  },
  {
    icon: PenLine,
    tint: "bg-skill-grammar/10 text-skill-grammar",
    step: "03",
    title: "Master English Grammar and Writing",
    audience: "Learners who need accuracy — for exams, work email and study.",
    outcomes: [
      "All 8 parts of speech and 12 tenses, compared side by side",
      "The Error Clinic corrects your own sentences and tracks your patterns",
      `${PLATFORM_STATS.writingAssignments} writing assignments graded on a ten-dimension rubric`,
    ],
    primary: { label: "Enter Grammar School", route: { name: "grammar" } as AppRoute },
    secondary: { label: "Writing Studio", route: { name: "writing", view: "hub" } as AppRoute },
    featured: false,
  },
] as const;

function Pathways({ navigate }: { navigate: Navigate }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal mode="mount">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Three learning pathways
        </p>
        <h2 className="mt-1 max-w-2xl font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Where do you want your English to go?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Each pathway says who it is for and what you will actually work on —
          then links straight into the live content.
        </p>
      </Reveal>
      <StaggerGroup className="mt-8 grid gap-4 lg:grid-cols-3">
        {PATHWAYS.map((path, i) => (
          <StaggerItem key={path.title} index={i} className="h-full">
            <Card
              className={cn(
                "card-interactive group flex h-full flex-col gap-4 p-5 shadow-xs hover:shadow-md sm:p-6",
                path.featured
                  ? "border-primary/40 bg-primary/[0.04] hover:border-primary/60"
                  : "hover:border-primary/40",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={cn("inline-flex size-11 items-center justify-center rounded-xl", path.tint)}>
                  <path.icon className="size-5" aria-hidden />
                </span>
                <span className="font-mono text-3xl font-bold text-muted-foreground/25 transition-colors group-hover:text-primary/30">
                  {path.step}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold leading-snug">{path.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground/80">Best for: </span>
                  {path.audience}
                </p>
              </div>
              <ul className="space-y-2">
                {path.outcomes.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2 border-t pt-4">
                <Button
                  className="press w-full justify-between gap-2"
                  onClick={() => navigate(path.primary.route)}
                >
                  {path.primary.label}
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-muted-foreground hover:text-foreground"
                  onClick={() => navigate(path.secondary.route)}
                >
                  {path.secondary.label}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Button>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

/* ================================================================== */
/* SECTION 4 — The four language skills                                 */
/* ================================================================== */

const SKILL_SECTION = [
  {
    icon: Mic,
    skill: "speaking" as const,
    title: "Speaking",
    href: "#/speaking",
    eyebrow: "22 activities · 11 role-plays",
    practises: [
      "Repeat words and sentences aloud, then record yourself",
      "Role-play 11 scenarios with your AI partner — food, doctor, interview",
      "Train word stress, rhythm and intonation",
      "Compare your recording against the model, phrase by phrase",
    ],
  },
  {
    icon: PenLine,
    skill: "writing" as const,
    title: "Writing",
    href: "#/writing",
    eyebrow: "31 assignments · 10-dimension rubric",
    practises: [
      "From the alphabet to professional reports, in four tiers",
      "Autosaving editor with live word counts",
      "Issue-by-issue coaching that teaches — never rewrites for you",
      "Revision mode with version comparison",
    ],
  },
  {
    icon: Headphones,
    skill: "listening" as const,
    title: "Listening",
    href: "#/listening",
    eyebrow: "18 activities · 9 stages",
    practises: [
      "From letter sounds to professional meetings",
      "Play, pause, slow down and replay any part",
      "Transcripts unlock only after you prove your ears",
      "Dictation with word-level feedback",
    ],
  },
  {
    icon: BookOpen,
    skill: "reading" as const,
    title: "Reading",
    href: "#/reading",
    eyebrow: "21 texts · 4 levels",
    practises: [
      "Graded texts you can tune to your eyes — size and spacing",
      "Dictionary lookup and pronunciation on any word",
      "Comprehension checks across seven reading skills",
      "Bookmarks, notes and progress per text",
    ],
  },
] as const;

/** Skill chip recipe reused from the card library (kept in sync by hand). */
const SKILL_CHIP: Record<string, string> = {
  speaking: "bg-skill-speaking/10 text-skill-speaking",
  writing: "bg-skill-writing/10 text-skill-writing",
  listening: "bg-skill-listening/10 text-skill-listening",
  reading: "bg-skill-reading/10 text-skill-reading",
};

function FourSkills() {
  return (
    <section className="border-t bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal mode="mount">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            The four language skills
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Every skill gets its own practice environment
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Not one “practice” button — four dedicated laboratories, each built
            around what that skill actually needs.
          </p>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SKILL_SECTION.map((item, i) => (
            <StaggerItem key={item.title} index={i} className="h-full">
              <Card className="card-interactive group flex h-full flex-col gap-3.5 rounded-2xl p-5 shadow-xs hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className={cn("inline-flex size-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105", SKILL_CHIP[item.skill])}>
                    <item.icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold">{item.title}</h3>
                    <p className="text-[11px] font-medium text-muted-foreground tabular-nums">
                      {item.eyebrow}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                  What you&apos;ll practise
                </p>
                <ul className="space-y-2">
                  {item.practises.map((line) => (
                    <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.href}
                  className="press mt-auto inline-flex items-center gap-1.5 self-start rounded-lg px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Practise {item.title.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
                </a>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ================================================================== */
/* SECTION 5 — Explore learning content (8 real categories)             */
/* ================================================================== */

/** Counts marked dynamic come from the course fetch; the rest are shipped
 *  content counts verified against the data files. */
function ExploreSection({ courseCount }: { courseCount: number | null }) {
  const categories = [
    {
      icon: Compass,
      tint: "bg-primary/10 text-primary",
      title: "Guided Learning Paths",
      count: "5 curated paths · 20 lessons",
      line: "The structured route from your first word to full conversations.",
      href: "#/paths",
    },
    {
      icon: LibraryIcon,
      tint: "bg-skill-vocabulary/10 text-skill-vocabulary",
      title: "Complete Courses",
      count:
        courseCount === null
          ? "From our teaching team"
          : `${courseCount} published ${courseCount === 1 ? "course" : "courses"}`,
      line: "Enrol to track progress lesson by lesson, with prerequisite locks.",
      href: "#/courses",
    },
    {
      icon: BookOpen,
      tint: "bg-skill-reading/10 text-skill-reading",
      title: "Short Lessons",
      count: "20 lessons · 15 min each",
      line: "Vocabulary, dialogues, grammar and challenges in one sitting.",
      href: "#/library",
    },
    {
      icon: ClipboardCheck,
      tint: "bg-skill-grammar/10 text-skill-grammar",
      title: "Grammar Guides",
      count: "10 reference guides",
      line: "Parts of speech and every tense, compared side by side.",
      href: "#/hub/grammar",
    },
    {
      icon: Target,
      tint: "bg-skill-listening/10 text-skill-listening",
      title: "Practice Activities",
      count: "16 exercise types",
      line: "From multiple choice to dictation, sentence building and speaking.",
      href: "#/lab",
    },
    {
      icon: Mic,
      tint: "bg-skill-speaking/10 text-skill-speaking",
      title: "Speaking Simulations",
      count: "11 role-play scenarios",
      line: "Order food, see the doctor, survive the interview — with an AI partner.",
      href: "#/speaking/conversations",
    },
    {
      icon: Headphones,
      tint: "bg-skill-writing/10 text-skill-writing",
      title: "Learning Resources",
      count: "21 texts · 18 audios",
      line: "Graded reading with lookup and pronunciation, graded listening.",
      href: "#/reading",
    },
    {
      icon: Trophy,
      tint: "bg-primary/10 text-primary",
      title: "Completed Courses",
      count: "Your record & awards",
      line: "Finished lessons, awards and your revision queue in one dashboard.",
      href: "#/progress",
    },
  ] as const;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal mode="mount">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Explore learning content
        </p>
        <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Every format English is learned in
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Paths, courses, lessons, guides, activities, simulations and resources —
          every tile opens a real, live section of the platform.
        </p>
      </Reveal>
      <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <StaggerItem key={cat.title} index={i} className="h-full">
            <a
              href={cat.href}
              className="card-interactive group flex h-full flex-col gap-2.5 rounded-xl border bg-card p-4 shadow-xs hover:border-primary/40 hover:shadow-md"
            >
              <span className={cn("inline-flex size-9 items-center justify-center rounded-lg", cat.tint)}>
                <cat.icon className="size-4.5" aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                {cat.title}
              </p>
              <p className="text-xs tabular-nums leading-snug">
                <b className="font-bold text-foreground">{cat.count.split(" · ")[0]}</b>
                {cat.count.includes(" · ") ? (
                  <span className="text-muted-foreground">
                    {" · "}
                    {cat.count.split(" · ").slice(1).join(" · ")}
                  </span>
                ) : null}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">{cat.line}</p>
              <span
                className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden
              >
                Open <ArrowRight className="size-3.5" />
              </span>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

/* ================================================================== */
/* SECTION 6 — Popular courses (database-backed)                        */
/* ================================================================== */

function PopularCourses({ navigate }: { navigate: Navigate }) {
  const [courses, setCourses] = useState<CmsPublicCatalogueCourseDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const res = await cmsLearnerApi.publicCatalogue();
      if (!alive) return;
      if (res.ok) setCourses(res.data.courses);
      else setError(res.error);
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="border-t bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal mode="mount">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Popular courses
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Structured courses from our teaching team
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Enrolment and lesson counts come from the live database — nothing on
            these cards is invented.
          </p>
        </Reveal>

        {error ? (
          <p className="mt-8 text-sm text-muted-foreground">
            Courses are unavailable right now. Please refresh in a moment.
          </p>
        ) : courses === null ? (
          <div aria-busy="true" className="mt-8">
            <span className="sr-only" role="status">
              Loading courses
            </span>
            <SkeletonGrid count={4} className="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        ) : courses.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            No courses are published yet — our teaching team is working on it.
          </p>
        ) : (
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => (
              <StaggerItem key={course.slug} index={i} className="h-full">
                <CourseCard
                  title={course.title}
                  description={course.description}
                  level={course.levelName ?? undefined}
                  lessonCount={course.lessonCount}
                  learnerCount={course.learnerCount}
                  cta="View course"
                  icon={GraduationCap}
                  onClick={() => navigate({ name: "course", slug: course.slug })}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
    </section>
  );
}

/* ================================================================== */
/* SECTION 7 — AI English Tutor                                         */
/* ================================================================== */

/** Three starters taken verbatim from the shipped mode data — real
 *  supported interactions, not fabricated chat messages. */
const TUTOR_STARTER_PICKS = [
  { modeId: "grammar", text: tutorModes.find((m) => m.id === "grammar")!.starters[0] },
  { modeId: "conversation", text: tutorModes.find((m) => m.id === "conversation")!.starters[0] },
  { modeId: "interview", text: tutorModes.find((m) => m.id === "interview")!.starters[0] },
] as const;

function AiTutorSection({ navigate }: { navigate: Navigate }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal mode="mount">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                AI English Tutor
              </p>
              <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                A personalised learning assistant
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The tutor knows your lessons, your learned words and your recent
                mistakes, so every reply is about <em>your</em> English. It guides
                before it tells — honest, Socratic teaching in ten modes.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                Real questions it answers today
              </p>
              {TUTOR_STARTER_PICKS.map((pick) => (
                <button
                  key={pick.text}
                  type="button"
                  onClick={() => navigate({ name: "tutor" })}
                  className="card-interactive group flex items-start gap-3 rounded-xl border bg-card p-3.5 text-left shadow-xs hover:border-primary/40 hover:shadow-md"
                >
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Quote className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-snug">
                      “{pick.text}”
                    </span>
                    <span className="mt-0.5 block text-[11px] text-muted-foreground">
                      {tutorModes.find((m) => m.id === pick.modeId)!.label} · one of the
                      clickable starters in the app
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="press gap-2" onClick={() => navigate({ name: "tutor" })}>
                Meet your tutor <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button variant="outline" onClick={() => navigate({ name: "tutor" })}>
                See all ten modes
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Your conversations stay private and you can delete them any time.
            </p>
          </div>

          {/* The nine real modes with their real taglines */}
          <StaggerGroup className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {tutorModes.map((mode, i) => {
              const Icon = MODE_ICONS[mode.icon] ?? Sparkles;
              return (
                <StaggerItem key={mode.id} index={i} className="h-full">
                  <button
                    type="button"
                    onClick={() => navigate({ name: "tutor" })}
                    className="card-interactive group flex h-full flex-col gap-2 rounded-xl border bg-card p-4 text-left shadow-xs hover:border-primary/40 hover:shadow-md"
                  >
                    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                      {mode.label}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {mode.tagline}
                    </span>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Reveal>
    </section>
  );
}

/* ================================================================== */
/* SECTION 8 — Daily learning routine                                   */
/* ================================================================== */

const ROUTINE = [
  {
    icon: Brain,
    tint: "bg-skill-vocabulary/10 text-skill-vocabulary",
    title: "Vocabulary practice",
    text: "Clear today's review queue in Word World — spaced repetition decides what you revise.",
    href: "#/vocabulary",
  },
  {
    icon: BookOpen,
    tint: "bg-skill-grammar/10 text-skill-grammar",
    title: "Grammar learning",
    text: "One Grammar School module or a Tense Explorer comparison — meaning before form.",
    href: "#/grammar",
  },
  {
    icon: Headphones,
    tint: "bg-skill-listening/10 text-skill-listening",
    title: "Listening",
    text: "One audio activity: play, slow down, replay — transcripts unlock after the tasks.",
    href: "#/listening",
  },
  {
    icon: Mic,
    tint: "bg-skill-speaking/10 text-skill-speaking",
    title: "Speaking",
    text: "Record a drill or role-play a scenario with your AI conversation partner.",
    href: "#/speaking",
  },
  {
    icon: PenLine,
    tint: "bg-skill-writing/10 text-skill-writing",
    title: "Writing",
    text: "One guided assignment; the coach grades issue by issue, never rewriting for you.",
    href: "#/writing",
  },
  {
    icon: History,
    tint: "bg-primary/10 text-primary",
    title: "Revision",
    text: "Six challenge games keep words alive — then check your progress dashboard.",
    href: "#/vocabulary/challenges",
  },
] as const;

function DailyRoutine() {
  return (
    <section className="border-t bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal mode="mount">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Daily learning
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            A sample day, shaped around you
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            One habit that touches every skill. Every lab is open all day — do it
            in twenty minutes or spread it out.
          </p>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {ROUTINE.map((step, i) => (
            <StaggerItem key={step.title} index={i} className="h-full">
              <a
                href={step.href}
                className="card-interactive group flex h-full flex-col gap-2.5 rounded-xl border bg-card p-4 shadow-xs hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={cn("inline-flex size-9 items-center justify-center rounded-lg", step.tint)}>
                    <step.icon className="size-4.5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs font-bold text-muted-foreground/40 transition-colors group-hover:text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                  {step.title}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.text}</p>
                <span
                  className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden
                >
                  Open <ArrowRight className="size-3.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ================================================================== */
/* SECTION 9 — Learning progress                                        */
/* ================================================================== */

function ProgressSection({ navigate }: { navigate: Navigate }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal mode="mount">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Learning progress
        </p>
        <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Progress you can measure — and trust
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          TalkSy never marks a lesson done because you opened it. Improvement is
          measured by the same engine that teaches you.
        </p>
      </Reveal>

      <StaggerGroup className="mt-8 grid gap-4 lg:grid-cols-3">
        {[
          {
            icon: ClipboardCheck,
            title: "Lessons complete only when you pass",
            text: "Finish every section, then clear the end-of-lesson assessment. Your performance summary shows exactly which exercise types still need work.",
          },
          {
            icon: BarChart3,
            title: "Every skill has its own record",
            text: "Speaking, writing, listening, reading, vocabulary and grammar each keep their own history — with tabs for overview, skills, activity, revision and awards.",
          },
          {
            icon: History,
            title: "Nothing slips through",
            text: "Spaced repetition keeps shaky words in rotation, the Error Clinic tracks your recurring mistake patterns, and writing keeps full version history.",
          },
        ].map((card, i) => (
          <StaggerItem key={card.title} index={i} className="h-full">
            <Card className="card-interactive h-full rounded-2xl p-5 shadow-xs hover:border-primary/40 hover:shadow-md">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <card.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-semibold leading-snug">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal mode="mount" className="mt-6">
        <Card className="rounded-2xl bg-secondary/40">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">Measured honestly, end to end</p>
              <MetaRow className="mt-2">
                <MetaItem>assessment pass scores</MetaItem>
                <MetaItem>exercise accuracy</MetaItem>
                <MetaItem>comprehension checks</MetaItem>
                <MetaItem>10-dimension writing rubric</MetaItem>
                <MetaItem>review retention</MetaItem>
                <MetaItem>mock band estimates</MetaItem>
              </MetaRow>
            </div>
            <Button
              variant="outline"
              className="press shrink-0 gap-2 border-primary/30"
              onClick={() => navigate({ name: "progress" })}
            >
              Open your dashboard <ArrowRight className="size-4" aria-hidden />
            </Button>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}

/* ================================================================== */
/* SECTION 10 — Final call to action                                    */
/* ================================================================== */

function FinalCta({ navigate }: { navigate: Navigate }) {
  const user = useAppStore((s) => s.user);
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-4 sm:px-6">
      <Reveal mode="mount">
        <div className="gradient-pan bg-gradient-deep relative overflow-hidden rounded-3xl p-8 text-center text-white shadow-xl sm:p-14">
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-brand-blue/30 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-28 -right-16 size-64 rounded-full bg-brand-violet/25 blur-3xl" aria-hidden />
          <div className="relative flex flex-col items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <Sparkles className="size-3.5 text-brand-gold" aria-hidden />
              Learn. Practice. Speak. Excel.
            </span>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Every Fluent Speaker Started Somewhere.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Your first lesson takes about fifteen minutes and costs nothing.
              Begin today — from your very first English word.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="press gap-2 bg-white text-brand-navy shadow-md hover:bg-white/90"
                onClick={() => navigate(user ? { name: "library" } : { name: "register" })}
              >
                Start Learning Free <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="press border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                onClick={() => navigate({ name: "library" })}
              >
                Explore Learning Paths
              </Button>
            </div>
            <p className="text-xs text-white/70">
              Free while we grow · no credit card · your data stays yours
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ================================================================== */
/* View assembly                                                        */
/* ================================================================== */

export function HomeView({ navigate }: { navigate: Navigate }) {
  const [courses, setCourses] = useState<CmsPublicCatalogueCourseDto[] | null>(null);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const res = await cmsLearnerApi.publicCatalogue();
      if (!alive) return;
      if (res.ok) setCourses(res.data.courses);
      // Explore tile degrades to “Published by our team” on failure — never a guess.
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Hero navigate={navigate} />
      <Pathways navigate={navigate} />
      <FourSkills />
      <ExploreSection courseCount={courses ? courses.length : null} />
      <PopularCourses navigate={navigate} />
      <AiTutorSection navigate={navigate} />
      <DailyRoutine />
      <ProgressSection navigate={navigate} />
      <FinalCta navigate={navigate} />
    </div>
  );
}
