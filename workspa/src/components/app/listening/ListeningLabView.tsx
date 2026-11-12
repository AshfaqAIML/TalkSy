"use client";

/**
 * Listening Lab — the graded listening hub.
 *
 * Nine progression stages from letter & sound recognition to professional
 * communication, each with activities and the learner's progress.
 */

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Lock,
  LockOpen,
  Mic,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { api, type ListeningLibraryDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";

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
          Graded listening activities — from letter sounds to professional
          meetings, with a player you control. Log in to track your progress.
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
            Nine progression stages. Play, pause, slow down and replay any part
            — transcripts stay hidden until you prove your ears.
          </p>
        </div>
      </div>

      {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}
      {!library && !error ? (
        <div className="mt-8 space-y-4">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
      ) : null}

      {library ? (
        <ol className="mt-8 flex flex-col gap-6">
          {library.stages.map((stage, stageIndex) => {
            const activities = library.activities.filter((a) => a.stage === stage.id);
            const completed = activities.filter((a) => a.progress?.status === "completed").length;
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
                    <h2 className="font-semibold leading-tight">{stage.name}</h2>
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
                          <h3 className="font-semibold leading-snug group-hover:text-primary">
                            {activity.title}
                          </h3>
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
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      ) : null}
    </div>
  );
}
