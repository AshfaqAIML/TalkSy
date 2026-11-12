"use client";

/**
 * Writing Studio — the hub: four progressive tiers of writing assignments
 * with the learner's progress, plus the studio's own stats block (drafts,
 * submissions, completions) — deliberately separate from general
 * proficiency counters.
 */

import { useEffect, useState } from "react";
import { CheckCircle2, PenLine, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { api, type WritingLibraryDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { TIER_META, type WritingTier } from "@/data/writing/types";

const TIERS: WritingTier[] = ["beginner", "elementary", "intermediate", "advanced"];

export function WritingStudioView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const [library, setLibrary] = useState<WritingLibraryDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userLoaded && user) {
      void api.writingLibrary().then((response) => {
        if (response.ok) setLibrary(response.data);
        else setError(response.error);
      });
    }
  }, [user, userLoaded]);

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <PenLine className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-3 text-2xl font-bold">Writing Studio</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Progressive writing assignments from your first letters to professional
          reports — with autosave, a structured feedback engine and revision
          history. Log in to start writing.
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
              <PenLine className="size-5 text-primary" aria-hidden />
            </span>
            Writing Studio
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            From your first letters to professional reports. Every submission is
            scored on a ten-dimension writing rubric, coached issue by issue, and
            kept as a version you can revise and compare.
          </p>
        </div>
        {library ? (
          <div className="flex gap-3 text-center text-sm">
            <div className="rounded-xl border bg-card px-4 py-2">
              <p className="text-xl font-bold">{library.stats.submissions}</p>
              <p className="text-xs text-muted-foreground">submissions</p>
            </div>
            <div className="rounded-xl border bg-card px-4 py-2">
              <p className="text-xl font-bold">{library.stats.assignmentsCompleted}</p>
              <p className="text-xs text-muted-foreground">completed</p>
            </div>
          </div>
        ) : null}
      </div>

      <p className="mt-3 rounded-lg border border-primary/30 bg-primary/5 p-3 text-xs text-muted-foreground">
        Writing scores are kept separate from your general proficiency
        statistics — they describe this text, in this genre, today.
      </p>

      {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}

      {!library && !error ? (
        <div className="mt-8 space-y-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
      ) : null}

      {library ? (
        <ol className="mt-8 flex flex-col gap-8">
          {TIERS.map((tier, tierIndex) => {
            const assignments = library.assignments.filter((a) => a.tier === tier);
            const completed = assignments.filter((a) => a.progress?.status === "completed").length;
            const meta = TIER_META[tier];
            return (
              <li key={tier} className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                      completed === assignments.length && assignments.length > 0
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        : "border-primary/30 bg-primary/5 text-primary",
                    )}
                    aria-hidden
                  >
                    {completed === assignments.length && assignments.length > 0 ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      tierIndex + 1
                    )}
                  </span>
                  <div>
                    <h2 className="font-bold">
                      {meta.name}{" "}
                      <span className="ml-1 text-xs font-medium text-muted-foreground">
                        {meta.cefr}
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground">{meta.tagline}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto shrink-0">
                    {completed}/{assignments.length} completed
                  </Badge>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {assignments.map((assignment) => (
                    <button
                      key={assignment.id}
                      type="button"
                      onClick={() =>
                        navigate({ name: "writing", view: "assignment", slug: assignment.slug })
                      }
                      className="group rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          {assignment.taskCount} task{assignment.taskCount === 1 ? "" : "s"} ·{" "}
                          {assignment.estimatedMinutes} min
                        </p>
                        {assignment.progress?.status === "completed" ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="size-3.5" aria-hidden /> Done
                          </span>
                        ) : assignment.progress ? (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Send className="size-3" aria-hidden />{" "}
                            {assignment.progress.submissionsCount} submission
                            {assignment.progress.submissionsCount === 1 ? "" : "s"}
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Not started</span>
                        )}
                      </div>
                      <h3 className="mt-1 font-semibold group-hover:text-primary">
                        {assignment.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {assignment.description}
                      </p>
                      {assignment.progress && assignment.progress.submissionsCount > 0 ? (
                        <Progress
                          value={assignment.progress.bestScore * 100}
                          className="mt-2.5 h-1.5"
                        />
                      ) : null}
                    </button>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      ) : null}

      <p className="mt-10 flex items-start gap-2 text-xs text-muted-foreground">
        <Sparkles className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
        Tip: write in the editor and let autosave keep your draft — then submit,
        read the feedback, and revise. Writing improves on the second version.
      </p>
    </div>
  );
}
