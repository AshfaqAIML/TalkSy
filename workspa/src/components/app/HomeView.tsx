"use client";

import {
  ArrowRight,
  BookOpen,
  Brain,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  Mic,
  PenLine,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";

export function HomeView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);

  const features = [
    {
      icon: BookOpen,
      title: "Structured lessons",
      text: "20 block types — vocabulary, dialogues, grammar rules, tense comparisons, sentence diagrams and challenges — rendered by one reusable engine.",
    },
    {
      icon: Brain,
      title: "16 exercise types",
      text: "From multiple choice to dictation, drag-and-drop, sentence building and speaking — every answer graded with full feedback.",
    },
    {
      icon: Headphones,
      title: "Listen & speak daily",
      text: "Audio for every dialogue and word, dictation and speaking practice built on your browser's voice.",
    },
    {
      icon: ClipboardCheck,
      title: "Real assessments",
      text: "End-of-lesson tests drawn from approved question banks, with a personal performance summary.",
    },
    {
      icon: PenLine,
      title: "Notes & bookmarks",
      text: "Bookmark lessons, keep per-section notes, toggle translations — your workspace, your rules.",
    },
    {
      icon: Trophy,
      title: "Progress that counts",
      text: "Lessons are completed by finishing sections and passing assessments — never just by opening a page.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <GraduationCap className="size-3.5" aria-hidden />
            From your first English word to confident communication.
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Your journey to confident English starts here.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn English step by step, practise every day, and build the
            confidence to communicate in real life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => navigate(user ? { name: "library" } : { name: "register" })}
            >
              Start Learning Free <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ name: "library" })}
            >
              Explore Learning Path
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Free while we grow · no credit card · 20 lessons, Grammar School and a 135-word vocabulary world live today
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          A complete learning engine
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          Everything below is live in the app right now — built for beginners,
          ready for every level.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col gap-2.5 p-5">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="size-5 text-primary" aria-hidden />
                </span>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Word World */}
      <section className="border-t bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                New · Vocabulary system
              </p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                Word World — learn words that stick
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A complete vocabulary system: explore 135 words with
                pronunciation and audio, meet them in short dialogues, write
                your own sentences, play six challenge games — and remember
                everything with smart spaced repetition that never forgets a
                word you still need.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2" onClick={() => navigate({ name: "vocabulary" })}>
                  Explore Word World <ArrowRight className="size-4" aria-hidden />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate({ name: "vocabulary", tab: "explore" })}
                >
                  Browse all 135 words
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "135", label: "words with audio, IPA & Spanish support" },
                { value: "12", label: "categories from Home to Social English" },
                { value: "6", label: "challenge types, generated fresh every run" },
                { value: "0", label: "words forgotten — spaced repetition schedules them all" },
              ].map((stat) => (
                <Card key={stat.label} className="bg-card">
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grammar School & Lab */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Grammar School &amp; Sentence Lab
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Two connected systems: understand the rules, then build sentences
            with your own hands.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => navigate({ name: "grammar" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                8 modules · 12 tenses
              </p>
              <h3 className="mt-1 font-semibold">Grammar School</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Every part of speech, tense comparisons and colour-coded
                sentence diagrams.
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate({ name: "grammar-clinic" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Instant corrections
              </p>
              <h3 className="mt-1 font-semibold">Grammar Error Clinic</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Submit your own sentences, get corrections and track your
                recurring error patterns.
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate({ name: "lab" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                7 stages · challenges
              </p>
              <h3 className="mt-1 font-semibold">Sentence Lab</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Build sentences from word tiles — from “I read.” to passive
                transformations.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* AI Tutor */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/15 via-card to-card p-6 sm:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                New · Central AI intelligence
              </p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                Your AI Tutor — nine teachers, always patient
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A level-aware English teacher that knows your lessons, your
                learned words and your recent mistakes. Ask grammar questions,
                learn vocabulary, build sentences, practise conversations and
                interviews, or get doubts about a specific lesson solved —
                with streaming replies and honest, Socratic teaching that
                guides before it tells.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2" onClick={() => navigate({ name: "tutor" })}>
                  <Mic className="size-4" aria-hidden /> Meet your tutor
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate({ name: "tutor" })}
                >
                  Choose from 9 teaching modes
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Grammar · Vocabulary · Sentences · Conversation · Writing ·
                Listening · Reading · Interviews · Lesson doubts — your
                conversations stay private and deletable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Room, Listening Lab, Speaking Lab & Writing Studio */}
      <section className="border-t bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Reading · Listening · Speaking · Writing
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Four dedicated skill environments: graded texts you can tune to your
            eyes, graded audio you control like a media player, speaking
            practice with your own voice, and a writing studio with structured
            feedback.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => navigate({ name: "reading" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                21 texts · 4 levels
              </p>
              <h3 className="mt-1 flex items-center gap-2 font-semibold">
                <BookOpen className="size-4 text-primary" aria-hidden /> Reading Room
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                From first words to editorial-style passages. Adjustable text
                size and spacing, dictionary lookup, pronunciation, bookmarks
                and comprehension checks across seven reading skills.
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate({ name: "listening" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                18 activities · 9 stages
              </p>
              <h3 className="mt-1 flex items-center gap-2 font-semibold">
                <Headphones className="size-4 text-primary" aria-hidden /> Listening Lab
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                From letter sounds to professional meetings. Play, pause, slow
                down and replay any part — with transcripts that unlock only
                after you prove your ears.
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate({ name: "speaking", view: "hub" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                22 activities · 11 conversations · 4 pronunciation sets
              </p>
              <h3 className="mt-1 flex items-center gap-2 font-semibold">
                <Mic className="size-4 text-primary" aria-hidden /> Speaking Lab
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Record yourself from first words to debates, role-play real
                scenarios with an AI partner, and train word stress, rhythm and
                intonation. Your audio is never stored.
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate({ name: "writing", view: "hub" })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                31 assignments · 4 tiers · 10-dimension rubric
              </p>
              <h3 className="mt-1 flex items-center gap-2 font-semibold">
                <PenLine className="size-4 text-primary" aria-hidden /> Writing Studio
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                From the alphabet to professional reports: autosaving editor,
                word counters, issue-by-issue coaching that teaches instead of
                rewriting, revision mode and version comparison.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Your learning path
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                level: "Pre-A1 · First Words",
                lessons: "4 lessons live",
                text: "Greetings, numbers, colors and family — your very first words.",
                live: true,
              },
              {
                level: "A1 · Building Blocks",
                lessons: "2 lessons live",
                text: "The verb 'to be' and your first real café conversation.",
                live: true,
              },
              {
                level: "A2 · Growing Skills",
                lessons: "Coming soon",
                text: "Past tense, travel English and longer conversations.",
                live: false,
              },
            ].map((item) => (
              <Card
                key={item.level}
                className={item.live ? "" : "border-dashed opacity-70"}
              >
                <CardContent className="flex flex-col gap-1.5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.lessons}
                  </p>
                  <h3 className="font-semibold">{item.level}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
