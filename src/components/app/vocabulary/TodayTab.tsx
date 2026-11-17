"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookMarked,
  CalendarDays,
  CircleCheck,
  Flame,
  Layers,
  PenLine,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { DailyWordDto } from "@/lib/client/api";
import type { VocabOverviewDto } from "@/lib/vocab/dto";
import {
  DifficultyBadge,
  LoginPrompt,
  ProgressInfo,
  SectionHeading,
  SpeakButton,
  StatusBadge,
  WordCard,
} from "./shared";

/**
 * The "Today" hub: Daily Word hero, revision-queue summary, learner stats,
 * recent words and shortcuts into every vocabulary mode.
 */
export function TodayTab({
  navigate,
  onOpenWord,
}: {
  navigate: (route: AppRoute) => void;
  onOpenWord: (wordId: string) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  const [daily, setDaily] = useState<DailyWordDto | null>(null);
  const [archive, setArchive] = useState<DailyWordDto[]>([]);
  const [overview, setOverview] = useState<VocabOverviewDto | null>(null);

  useEffect(() => {
    (async () => {
      const res = await api.vocabDaily();
      if (res.ok) {
        setDaily(res.data.today);
        setArchive(res.data.archive);
      }
    })();
  }, []);

  useEffect(() => {
    if (!user) {
      setOverview(null);
      return;
    }
    (async () => {
      const res = await api.vocabOverview();
      if (res.ok) setOverview(res.data);
    })();
  }, [user]);

  const markKnown = async () => {
    if (!daily) return;
    const res = await api.vocabReview({
      action: "known",
      wordId: daily.word.id,
      source: "daily",
    });
    if (res.ok) {
      const { toast } = await import("sonner");
      toast.success(`Great! “${daily.word.word}” comes back ${res.data.dueLabel}.`);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Daily Word */}
      <section aria-labelledby="daily-word">
        <SectionHeading
          icon={<CalendarDays className="size-5 text-primary" aria-hidden />}
          title="Word of the day"
          description="A new useful word, every single day."
        />
        {daily ? (
          <Card className="mt-4 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card">
            <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {daily.word.word}
                  </span>
                  <SpeakButton text={daily.word.word} label={`Listen to ${daily.word.word}`} />
                </div>
                <div className="flex items-center gap-2">
                  <DifficultyBadge difficulty={daily.word.difficulty} />
                  {daily.progress ? <StatusBadge status={daily.progress.status} /> : null}
                </div>
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                {daily.word.pronunciation} · <span className="italic">{daily.word.partOfSpeech}</span>
              </p>
              <div>
                <p className="text-lg leading-relaxed">{daily.word.meaning}</p>
                <p className="mt-0.5 text-lg font-medium text-primary">{daily.word.translation}</p>
              </div>
              <div className="flex items-start gap-2 rounded-xl border bg-background/60 p-3">
                <SpeakButton text={daily.word.example.english} label="Listen to the example" className="mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{daily.word.example.english}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {daily.word.example.translation}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button className="gap-1.5" onClick={markKnown} disabled={!user}>
                  <CircleCheck className="size-4" aria-hidden /> I learned this today
                </Button>
                <Button
                  variant="outline"
                  className="gap-1.5"
                  onClick={() => onOpenWord(daily.word.id)}
                >
                  <Sparkles className="size-4" aria-hidden /> Full word card
                </Button>
                <Button
                  variant="ghost"
                  className="gap-1.5"
                  onClick={() =>
                    navigate({ name: "vocabulary", tab: "sentences", param: daily.word.id })
                  }
                  disabled={!user}
                >
                  <PenLine className="size-4" aria-hidden /> Use it in a sentence
                </Button>
              </div>
              {archive.length > 0 ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Earlier this week
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {archive.map((item) => (
                      <button
                        key={item.dateKey}
                        type="button"
                        onClick={() => onOpenWord(item.word.id)}
                        className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:border-primary/60"
                        title={item.dateKey}
                      >
                        {item.word.word}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">Loading today&apos;s word…</p>
        )}
      </section>

      {/* Learner snapshot */}
      {user ? (
        <section aria-labelledby="vocab-stats">
          <SectionHeading
            icon={<Flame className="size-5 text-primary" aria-hidden />}
            title="Your words"
            description="Spaced repetition keeps every word coming back until it sticks."
          />
          {overview ? (
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardContent className="flex flex-col gap-4 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-2xl font-bold">
                        {overview.due.total} word{overview.due.total === 1 ? "" : "s"} due
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {overview.due.learning} learning · {overview.due.reviews} to review
                      </p>
                    </div>
                    <Button
                      className="gap-1.5"
                      onClick={() => navigate({ name: "vocabulary", tab: "flashcards" })}
                    >
                      <Layers className="size-4" aria-hidden /> Start review
                    </Button>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Today&apos;s new-word budget</span>
                      <span>
                        {overview.totals.library - overview.newRemaining}/{overview.totals.library}{" "}
                        library · {overview.newRemaining} new left today
                      </span>
                    </div>
                    <Progress
                      value={
                        overview.newToday === 0
                          ? 0
                          : Math.min(100, (overview.newToday / (overview.newToday + overview.newRemaining)) * 100)
                      }
                      aria-label="New word budget used today"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: "Learning", value: overview.totals.learning },
                      { label: "Reviewing", value: overview.totals.reviewing },
                      { label: "Mastered", value: overview.totals.mastered },
                      { label: "Difficult", value: overview.totals.difficult },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl border bg-secondary/30 p-3 text-center">
                        <p className="text-xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Review accuracy: {Math.round(overview.accuracy.ratio * 100)}% over{" "}
                    {overview.accuracy.reviews} recent grades · {overview.totals.sentences} own
                    sentences · {overview.totals.challengesCompleted} challenges completed
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-2 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Recently learned
                  </p>
                  {overview.recentWords.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No words yet — open the Flashcards tab to start your first review.
                    </p>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {overview.recentWords.slice(0, 5).map((item) => (
                        <button
                          key={item.word.id}
                          type="button"
                          onClick={() => onOpenWord(item.word.id)}
                          className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left transition-colors hover:border-primary/50"
                        >
                          <span className="text-sm font-semibold">{item.word.word}</span>
                          <ProgressInfo progress={item.progress} />
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">Loading your stats…</p>
          )}
        </section>
      ) : (
        <LoginPrompt
          message="Flashcards, spaced repetition, word lists and challenges all live in your free account."
          navigate={navigate}
        />
      )}

      {/* Category coverage */}
      {overview ? (
        <section aria-labelledby="vocab-categories">
          <SectionHeading
            icon={<Trophy className="size-5 text-primary" aria-hidden />}
            title="Category coverage"
            description="Tap a category to explore its words."
          />
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {overview.categories.map((category) => {
              const pct = category.total === 0 ? 0 : Math.round((category.seen / category.total) * 100);
              return (
                <button
                  key={category.categoryId}
                  type="button"
                  onClick={() =>
                    navigate({ name: "vocabulary", tab: "explore", param: category.categoryId })
                  }
                  className="rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold">{category.name}</p>
                    <span className="text-xs text-muted-foreground">
                      {category.seen}/{category.total}
                    </span>
                  </div>
                  <Progress value={pct} className="mt-2 h-1.5" aria-label={`${category.name} coverage`} />
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {category.mastered} mastered
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Mode shortcuts */}
      <section aria-labelledby="vocab-modes" className="pb-4">
        <SectionHeading
          icon={<ArrowRight className="size-5 text-primary" aria-hidden />}
          title="All vocabulary modes"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              tab: "explore",
              icon: Sparkles,
              title: "Word Explorer",
              text: "135 words with pronunciation, audio, meanings, examples, families and collocations.",
            },
            {
              tab: "flashcards",
              icon: Layers,
              title: "Flashcards",
              text: "Flip, listen, grade yourself — the scheduler does the rest.",
            },
            {
              tab: "context",
              icon: BookMarked,
              title: "Context learning",
              text: "Short dialogues and paragraphs that teach words naturally.",
            },
            {
              tab: "challenges",
              icon: Trophy,
              title: "Challenges",
              text: "Six game types: quizzes, spelling, arrangement, matching and more.",
            },
          ].map((mode) => (
            <button
              key={mode.tab}
              type="button"
              onClick={() => navigate({ name: "vocabulary", tab: mode.tab })}
              className="group rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <mode.icon className="size-5 text-primary" aria-hidden />
              </span>
              <h3 className="mt-3 font-semibold">{mode.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{mode.text}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Open <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </button>
          ))}
        </div>
      </section>
      {showTranslations ? null : null}
    </div>
  );
}
