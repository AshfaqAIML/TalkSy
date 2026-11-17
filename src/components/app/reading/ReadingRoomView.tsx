"use client";

/**
 * Reading Room — the graded reading library hub.
 *
 * Four levels (Beginner → Advanced), category filters, per-text progress and
 * the learner's accuracy across the seven comprehension skills.
 */

import { useEffect, useState } from "react";
import {
  BookA,
  BookOpen,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SkeletonCard } from "@/components/ui/skeleton";
import { MetaItem, ResourceCard } from "@/components/ui/cards";
import { cn } from "@/lib/utils";
import { api, type ReadingLibraryDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { SKILL_LABELS } from "@/data/reading/types";
import {
  BandRecommendationBanner,
  CurriculumChips,
} from "@/components/app/lab/LabShared";

export function ReadingRoomView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const [library, setLibrary] = useState<ReadingLibraryDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    if (userLoaded && user) {
      void api.readingLibrary().then((response) => {
        if (response.ok) setLibrary(response.data);
        else setError(response.error);
      });
    }
  }, [user, userLoaded]);

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <BookOpen className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-3 text-2xl font-bold">Reading Room</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A graded reading library — from your first words to editorial-style
          passages. Log in to track your progress.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }

  const levels = library?.levels ?? [];
  const categories = (library?.categories ?? []).filter(
    (c) => levelFilter === "all" || c.levels.includes(levelFilter),
  );
  const texts = (library?.texts ?? []).filter(
    (t) =>
      (levelFilter === "all" || t.level === levelFilter) &&
      (categoryFilter === "all" || t.category === categoryFilter),
  );

  const completedCount = (library?.texts ?? []).filter(
    (t) => t.progress?.status === "completed",
  ).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2.5 text-3xl font-bold tracking-tight">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="size-5 text-primary" aria-hidden />
            </span>
            Reading Room
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            A graded reading library across four levels. Tune the text to your
            eyes, tap any word for the dictionary, and prove your understanding
            with comprehension checks.
          </p>
        </div>
        {library ? (
          <div className="flex gap-4 rounded-2xl border bg-secondary/30 px-5 py-3 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{library.texts.length}</p>
              <p className="text-[11px] text-muted-foreground">texts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{completedCount}</p>
              <p className="text-[11px] text-muted-foreground">completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">
                {library.skillStats.reduce((sum, s) => sum + s.attempts, 0)}
              </p>
              <p className="text-[11px] text-muted-foreground">answers</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Comprehension skills performance */}
      {library && library.skillStats.length > 0 ? (
        <Card className="mt-6">
          <CardContent className="p-4 sm:p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <BookA className="size-4 text-primary" aria-hidden /> Your comprehension
              skills
            </h2>
            <div className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {Object.entries(SKILL_LABELS).map(([skill, label]) => {
                const stat = library.skillStats.find((s) => s.skill === skill);
                const percent = stat && stat.attempts > 0 ? Math.round((stat.correct / stat.attempts) * 100) : null;
                return (
                  <div key={skill} className="flex items-center gap-2 text-xs">
                    <span className="w-32 shrink-0 text-muted-foreground">{label}</span>
                    {percent === null ? (
                      <span className="text-muted-foreground">—</span>
                    ) : (
                      <>
                        <Progress value={percent} className="h-2 flex-1" />
                        <span className="w-14 shrink-0 text-right">{percent}% ({stat?.correct}/{stat?.attempts})</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {/* Level recommendation */}
      {library?.recommendation ? (
        <BandRecommendationBanner recommendation={library.recommendation} />
      ) : null}

      {/* Level filter */}
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Reading levels">
        <FilterChip
          active={levelFilter === "all"}
          onClick={() => { setLevelFilter("all"); setCategoryFilter("all"); }}
          label="Filter: all levels"
        >
          All levels
        </FilterChip>
        {levels.map((level) => (
          <FilterChip
            key={level.id}
            active={levelFilter === level.id}
            onClick={() => { setLevelFilter(level.id); setCategoryFilter("all"); }}
            label={`Filter: ${level.name} level`}
          >
            {level.name}
            <span className="ml-1.5 text-[10px] font-normal opacity-70">{level.cefr}</span>
            {library?.recommendation?.recommended === level.id ? (
              <span className="ml-1.5 rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-semibold text-primary-foreground">
                For you
              </span>
            ) : null}
          </FilterChip>
        ))}
      </div>

      {/* Level description */}
      {levelFilter !== "all" ? (
        <p className="mt-3 rounded-xl bg-secondary/50 p-3 text-sm text-muted-foreground">
          {levels.find((l) => l.id === levelFilter)?.description}
        </p>
      ) : null}

      {/* Category filter */}
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Text types">
        <FilterChip
          active={categoryFilter === "all"}
          onClick={() => setCategoryFilter("all")}
          label="Filter: all text types"
        >
          All types
        </FilterChip>
        {categories.map((category) => (
          <FilterChip
            key={category.id}
            active={categoryFilter === category.id}
            onClick={() => setCategoryFilter(category.id)}
            label={`Filter: ${category.name}`}
          >
            {category.name}
          </FilterChip>
        ))}
      </div>

      {/* Texts grid */}
      {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}
      {!library && !error ? (
        <div className="mt-6" aria-busy="true">
          <span className="sr-only" role="status">Loading reading library</span>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <SkeletonCard key={i} className="rounded-2xl" />
            ))}
          </div>
        </div>
      ) : null}

      {library ? (
        <div className="stagger-in mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {texts.map((text, i) => {
            const progress = text.progress;
            const completed = progress?.status === "completed";
            const readPercent =
              progress && progress.totalParagraphs > 0
                ? Math.round((progress.readCount / progress.totalParagraphs) * 100)
                : 0;
            return (
              <div key={text.id} style={{ "--stagger-i": i } as React.CSSProperties} className="flex flex-col">
                <ResourceCard
                  title={text.title}
                  description={text.description}
                  level={text.level}
                  completed={completed}
                  bookmarked={progress?.bookmarked ?? undefined}
                  illustrated={Boolean(text.illustration)}
                  onClick={() => navigate({ name: "reading", slug: text.slug })}
                  meta={
                    <>
                      <MetaItem icon={Clock}>{text.estimatedMinutes} min</MetaItem>
                      <MetaItem>{text.paragraphCount} paragraphs</MetaItem>
                      <MetaItem>{text.questionCount} questions</MetaItem>
                    </>
                  }
                  className="flex-1"
                />
                {progress ? (
                  <div className="-mt-2 px-1 pb-1">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="capitalize">
                        {completed ? "Completed" : `${progress.readCount}/${progress.totalParagraphs} read`}
                      </span>
                      {progress.bestRunScore > 0 ? (
                        <span className="tabular-nums">best check {Math.round(progress.bestRunScore * 100)}%</span>
                      ) : null}
                    </div>
                    <Progress
                      value={completed ? 100 : readPercent}
                      className="mt-1 h-1.5"
                      aria-label={`${text.title} reading progress`}
                    />
                  </div>
                ) : (
                  <p className="-mt-2 px-1 pb-1 text-[11px] text-muted-foreground">Not started yet</p>
                )}
                <div className="px-1 pb-1">
                  <CurriculumChips links={text.links} />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
  label,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      className={cn(
        "press rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-150 ease-out",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-background text-muted-foreground hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}
