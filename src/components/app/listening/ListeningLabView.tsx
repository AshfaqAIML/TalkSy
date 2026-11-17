"use client";

/**
 * Listening Lab — the graded listening hub.
 *
 * Sixteen progression stages grouped into four proficiency bands, from
 * letter & sound recognition to academic listening, each with activities,
 * the learner's progress, a listening history, and a band recommendation.
 */

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  History,
  Lock,
  LockOpen,
  Mic,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { api, type ListeningHistoryDto, type ListeningLibraryDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { BandRecommendationBanner, CurriculumChips } from "@/components/app/lab/LabShared";

const BAND_ORDER = ["beginner", "elementary", "intermediate", "advanced"] as const;
const BAND_META: Record<string, { name: string; tagline: string; cefr: string }> = {
  beginner: { name: "Beginner", tagline: "Sounds, letters, words and simple sentences.", cefr: "Pre-A1 – A1" },
  elementary: { name: "Elementary", tagline: "Short conversations, instructions, stories and Q&A.", cefr: "A1 – A2" },
  intermediate: { name: "Intermediate", tagline: "Longer conversations, narratives, interviews and information.", cefr: "A2 – B1" },
  advanced: { name: "Advanced", tagline: "Presentations, academic English and natural speech.", cefr: "B2 – C1" },
};

export function ListeningLabView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const [library, setLibrary] = useState<ListeningLibraryDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userLoaded && user) {
      void api.listeningLibrary().then((response) => {
        if (response.ok) setLibrary(response.data);
        else setError(response.error);
      });
    }
  }, [user, userLoaded]);

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <Headphones className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-3 text-2xl font-bold">Listening Lab</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Graded listening activities — from letter sounds to academic
          passages, with a player you control. Log in to track your progress.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2.5 text-3xl font-bold tracking-tight">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Headphones className="size-5 text-primary" aria-hidden />
            </span>
            Listening Lab
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Sixteen stages across four bands. Play, pause, slow down and replay
            any part — transcripts stay hidden until you prove your ears.
          </p>
        </div>
      </div>

      {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}

      {library?.recommendation ? (
        <BandRecommendationBanner recommendation={library.recommendation} />
      ) : null}

      {!library && !error ? (
        <div className="mt-8 space-y-4">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
      ) : null}

      {library ? (
        <div className="mt-8 space-y-10">
          {BAND_ORDER.map((band) => {
            const stages = library.stages.filter((s) => s.band === band);
            const bandActivities = library.activities.filter((a) => a.band === band);
            const bandCompleted = bandActivities.filter(
              (a) => a.progress?.status === "completed",
            ).length;
            const isRecommended = library.recommendation?.recommended === band;
            const meta = BAND_META[band];
            return (
              <section key={band} aria-labelledby={`band-${band}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 id={`band-${band}`} className="flex flex-wrap items-center gap-2 font-bold">
                    {meta.name}
                    <span className="text-xs font-medium text-muted-foreground">{meta.cefr}</span>
                    {isRecommended ? (
                      <Badge className="bg-primary text-[10px]">Recommended for you</Badge>
                    ) : null}
                  </h2>
                  <p className="w-full text-sm text-muted-foreground sm:w-auto">{meta.tagline}</p>
                  <Badge variant="secondary" className="ml-auto shrink-0">
                    {bandCompleted}/{bandActivities.length} done
                  </Badge>
                </div>

                <ol className="mt-4 flex flex-col gap-6">
                  {stages.map((stage, stageIndex) => {
                    const activities = library.activities.filter((a) => a.stage === stage.id);
                    const completed = activities.filter(
                      (a) => a.progress?.status === "completed",
                    ).length;
                    return (
                      <li key={stage.id} className="relative">
                        {/* Stage header */}
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                              completed === activities.length && activities.length > 0
                                ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                                : "border-primary/30 bg-primary/5 text-primary",
                            )}
                          >
                            {completed === activities.length && activities.length > 0 ? (
                              <CheckCircle2 className="size-5" aria-hidden />
                            ) : (
                              stageIndex + 1
                            )}
                          </span>
                          <div className="flex-1">
                            <h3 className="font-semibold leading-tight">{stage.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {stage.tagline} · {stage.cefr}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {completed}/{activities.length} done
                          </p>
                        </div>

                        {/* Activities */}
                        <div className="mt-3 grid gap-3 pl-1 sm:grid-cols-2 sm:pl-12">
                          {activities.map((activity) => {
                            const progress = activity.progress;
                            const isCompleted = progress?.status === "completed";
                            return (
                              <button
                                key={activity.id}
                                type="button"
                                onClick={() => navigate({ name: "listening", slug: activity.slug })}
                                className="group flex flex-col rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <h4 className="font-semibold leading-snug group-hover:text-primary">
                                    {activity.title}
                                  </h4>
                                  {isCompleted ? (
                                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" aria-label="Completed" />
                                  ) : null}
                                </div>
                                <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted-foreground">
                                  {activity.description}
                                </p>
                                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                                  <span className="inline-flex items-center gap-1">
                                    <Headphones className="size-3" aria-hidden /> {activity.segmentCount}{" "}
                                    audio parts
                                  </span>
                                  <span>{activity.exerciseCount} exercises</span>
                                  {activity.speakerCount > 1 ? (
                                    <span className="inline-flex items-center gap-1">
                                      <Users className="size-3" aria-hidden /> {activity.speakerCount}{" "}
                                      voices
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1">
                                      <Mic className="size-3" aria-hidden /> 1 voice
                                    </span>
                                  )}
                                  <span
                                    className="inline-flex items-center gap-1"
                                    title={
                                      activity.transcriptPolicy === "locked"
                                        ? "Transcript unlocks after completing the exercises"
                                        : "Read-along transcript available"
                                    }
                                  >
                                    {activity.transcriptPolicy === "locked" ? (
                                      <Lock className="size-3" aria-hidden />
                                    ) : (
                                      <LockOpen className="size-3" aria-hidden />
                                    )}
                                  </span>
                                </div>
                                {progress ? (
                                  <div className="mt-3">
                                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                                      <span className="capitalize">
                                        {isCompleted
                                          ? `Completed · ${progress.scorePercent}%`
                                          : `${progress.completedCount}/${progress.totalExercises} solved`}
                                      </span>
                                      {!isCompleted && progress.completedCount > 0 ? (
                                        <span className="inline-flex items-center gap-0.5">
                                          Continue <ArrowRight className="size-3" aria-hidden />
                                        </span>
                                      ) : null}
                                    </div>
                                    <Progress
                                      value={
                                        (progress.completedCount / Math.max(1, progress.totalExercises)) *
                                        100
                                      }
                                      className="mt-1 h-1.5"
                                    />
                                  </div>
                                ) : (
                                  <p className="mt-3 text-[11px] text-muted-foreground">Not started yet</p>
                                )}
                                <CurriculumChips links={activity.links} />
                              </button>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}

          {/* Listening history */}
          <ListeningHistorySection navigate={navigate} />
        </div>
      ) : null}
    </div>
  );
}

function ListeningHistorySection({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [history, setHistory] = useState<ListeningHistoryDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void api.listeningHistory().then((response) => {
      if (cancelled) return;
      if (response.ok) setHistory(response.data);
      else setError(response.error);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section aria-labelledby="listening-history">
      <h2 id="listening-history" className="flex items-center gap-1.5 font-bold">
        <History className="size-4 text-primary" aria-hidden /> Listening history
      </h2>
      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
      {!history && !error ? (
        <div className="mt-3 space-y-2" aria-busy="true">
          <span className="sr-only" role="status">Loading your listening history</span>
          <Skeleton className="h-16 rounded-2xl" />
          <Skeleton className="h-16 rounded-2xl" />
        </div>
      ) : null}
      {history && history.activities.length === 0 ? (
        <p className="mt-3 rounded-2xl border bg-card p-4 text-sm text-muted-foreground">
          Nothing here yet — every exercise you answer is recorded with its
          result, so your history builds itself as you listen.
        </p>
      ) : null}
      {history && history.activities.length > 0 ? (
        <>
          <ul className="mt-3 space-y-2.5">
            {history.activities.slice(0, 8).map((activity) => {
              const done = activity.status === "completed";
              return (
                <li key={activity.activityId}>
                  <button
                    type="button"
                    disabled={!activity.activitySlug}
                    onClick={
                      activity.activitySlug
                        ? () => navigate({ name: "listening", slug: activity.activitySlug! })
                        : undefined
                    }
                    className="flex w-full flex-wrap items-center gap-x-3 gap-y-1.5 rounded-2xl border bg-card px-4 py-3 text-left transition-colors hover:border-primary/50"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="truncate font-medium">{activity.title}</span>
                        {done ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="size-3.5" aria-hidden /> Completed
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {activity.stageName ?? ""}
                        {` · ${activity.completedCount}/${activity.totalExercises} solved · first-try score ${activity.scorePercent}%`}
                      </span>
                    </span>
                    <span className="w-24 shrink-0">
                      <Progress
                        value={
                          activity.totalExercises > 0
                            ? (activity.completedCount / activity.totalExercises) * 100
                            : 0
                        }
                        className="h-1.5"
                        aria-label={`${activity.title} progress`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {history.attempts.length > 0 ? (
            <details className="mt-4 rounded-2xl border bg-card px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium">
                Recent answers ({history.attempts.length})
              </summary>
              <ol className="mt-3 space-y-1.5">
                {history.attempts.slice(0, 12).map((attempt) => (
                  <li
                    key={attempt.id}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t px-1 py-2 text-xs first:border-t-0"
                  >
                    <span
                      className={cn(
                        "font-semibold",
                        attempt.isCorrect
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-destructive",
                      )}
                    >
                      {attempt.isCorrect ? "Correct" : "Missed"}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-muted-foreground">
                      {attempt.exercisePrompt ?? "Exercise"}
                    </span>
                    {!attempt.isCorrect && attempt.correctAnswer ? (
                      <span className="text-muted-foreground">
                        answer: <span className="font-medium text-foreground">{attempt.correctAnswer}</span>
                      </span>
                    ) : null}
                    <span className="shrink-0 text-muted-foreground">
                      {new Date(attempt.createdAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </li>
                ))}
              </ol>
            </details>
          ) : null}
        </>
      ) : null}
    </section>
  );
}
