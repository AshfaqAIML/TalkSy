"use client";

/**
 * Reading Room — the graded reading library hub.
 *
 * Four levels (Beginner → Advanced), category filters, per-text progress and
 * the learner's accuracy across the seven comprehension skills.
 */

import { useEffect, useState } from "react";
import {
  BookMarked,
  BookOpen,
  CircleCheck,
  Clock,
  BookA,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { api, type ReadingLibraryDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { SKILL_LABELS } from "@/data/reading/types";

const LEVEL_STYLES: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  elementary: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  intermediate: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  advanced: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

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
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-44 rounded-2xl" />
          ))}
        </div>
      ) : null}

      {library ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {texts.map((text) => {
            const progress = text.progress;
            const completed = progress?.status === "completed";
            const readPercent =
              progress && progress.totalParagraphs > 0
                ? Math.round((progress.readCount / progress.totalParagraphs) * 100)
                : 0;
            return (
              <button
                key={text.id}
                type="button"
                onClick={() => navigate({ name: "reading", slug: text.slug })}
                className="group flex flex-col rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize",
                      LEVEL_STYLES[text.level] ?? "bg-secondary",
                    )}
                  >
                    {text.level}
                  </span>
                  <span className="flex items-center gap-1">
                    {text.illustration ? (
                      <ImageIcon className="size-4 text-muted-foreground" aria-label="Illustrated text" />
                    ) : null}
                    {progress?.bookmarked ? (
                      <BookMarked className="size-4 fill-primary text-primary" aria-label="Bookmarked" />
                    ) : null}
                    {completed ? (
                      <CircleCheck className="size-4 text-emerald-600" aria-label="Completed" />
                    ) : null}
                  </span>
                </div>
                <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary">
                  {text.title}
                </h3>
                <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {text.description}
                </p>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden /> {text.estimatedMinutes} min
                  </span>
                  <span>{text.paragraphCount} paragraphs</span>
                  <span>{text.questionCount} questions</span>
                </div>
                {progress ? (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="capitalize">
                        {completed ? "Completed" : `${progress.readCount}/${progress.totalParagraphs} read`}
                      </span>
                      {progress.bestRunScore > 0 ? (
                        <span>best check {Math.round(progress.bestRunScore * 100)}%</span>
                      ) : null}
                    </div>
                    <Progress
                      value={completed ? 100 : readPercent}
                      className="mt-1 h-1.5"
                    />
                  </div>
                ) : (
                  <p className="mt-3 text-[11px] text-muted-foreground">Not started yet</p>
                )}
              </button>
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
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-background text-muted-foreground hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}
