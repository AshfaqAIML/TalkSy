"use client";

/**
 * Speaking practice history: a timeline of recent takes (score, duration,
 * transcript preview where retention allows) plus a per-activity rollup.
 * Transcripts are shown only when the learner's retention setting kept them.
 */

import { useEffect, useState } from "react";
import { CheckCircle2, History, Mic, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { api, type SpeakingHistoryDto } from "@/lib/client/api";
import type { AppRoute } from "@/hooks/use-hash-route";
import { TIER_META, type SpeakingTier } from "@/data/speaking/types";

function formatDuration(ms: number): string {
  const seconds = Math.round(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const PROVIDER_LABELS: Record<string, string> = {
  server: "Server transcription",
  browser: "In-browser recognition",
  manual: "Typed",
  self: "Self-assessed",
};

export function SpeakingHistoryPanel({ navigate }: { navigate?: (route: AppRoute) => void }) {
  const [history, setHistory] = useState<SpeakingHistoryDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void api.speakingHistory().then((response) => {
      if (cancelled) return;
      if (response.ok) setHistory(response.data);
      else setError(response.error);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return <p className="text-sm text-destructive">{error}</p>;
  }

  if (!history) {
    return (
      <div className="space-y-3" aria-busy="true">
        <span className="sr-only" role="status">Loading your speaking history</span>
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-20 rounded-2xl" />
        ))}
      </div>
    );
  }

  const totalAttempts = history.attempts.length;
  const avgScore =
    history.attempts.length > 0
      ? Math.round(
          (history.attempts.reduce((sum, a) => sum + a.score, 0) / history.attempts.length) * 100,
        )
      : null;

  if (totalAttempts === 0 && history.activities.length === 0) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center">
        <History className="mx-auto size-8 text-muted-foreground" aria-hidden />
        <h2 className="mt-2 font-semibold">No practice history yet</h2>
        <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
          Every take you record lands here — score, duration and (if your
          retention setting allows) a transcript preview. Record your first
          take to start the timeline.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Rollup by activity */}
      <section aria-labelledby="speaking-history-activities">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="speaking-history-activities" className="flex items-center gap-1.5 font-bold">
            <TrendingUp className="size-4 text-primary" aria-hidden /> Activities in progress
          </h2>
          {avgScore !== null ? (
            <Badge variant="secondary">avg score {avgScore}%</Badge>
          ) : null}
        </div>
        <ul className="mt-3 space-y-2.5">
          {history.activities.map((activity) => {
            const meta = activity.tier ? TIER_META[activity.tier as SpeakingTier] : null;
            const done = activity.status === "completed";
            return (
              <li key={activity.activityId}>
                <button
                  type="button"
                  disabled={!activity.activitySlug || !navigate}
                  onClick={
                    activity.activitySlug && navigate
                      ? () =>
                          navigate({ name: "speaking", view: "activity", slug: activity.activitySlug! })
                      : undefined
                  }
                  className={cn(
                    "flex w-full flex-wrap items-center gap-x-3 gap-y-1.5 rounded-2xl border bg-card px-4 py-3 text-left",
                    activity.activitySlug && navigate && "transition-colors hover:border-primary/50",
                  )}
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
                      {meta ? `${meta.name} · ` : ""}
                      {`${activity.passedCount}/${activity.totalTasks} tasks passed · ${activity.attemptsCount} takes · best ${Math.round(activity.bestScore * 100)}%`}
                    </span>
                  </span>
                  <span className="w-28 shrink-0">
                    <Progress
                      value={activity.totalTasks > 0 ? (activity.passedCount / activity.totalTasks) * 100 : 0}
                      className="h-1.5"
                      aria-label={`${activity.title} progress`}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Recent takes */}
      <section aria-labelledby="speaking-history-takes">
        <h2 id="speaking-history-takes" className="flex items-center gap-1.5 font-bold">
          <Mic className="size-4 text-primary" aria-hidden /> Recent takes
        </h2>
        {totalAttempts === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No individual takes recorded yet — your per-activity summary appears above as soon as you record.
          </p>
        ) : (
          <ol className="mt-3 space-y-2.5">
            {history.attempts.map((attempt) => (
              <li
                key={attempt.id}
                className="rounded-2xl border bg-card px-4 py-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <p className="min-w-0 truncate text-sm font-medium">
                    {attempt.activityTitle}
                    {attempt.taskTitle ? (
                      <span className="text-muted-foreground">{` · ${attempt.taskTitle}`}</span>
                    ) : null}
                  </p>
                  <p className="shrink-0 text-xs text-muted-foreground">
                    {formatDate(attempt.createdAt)}
                  </p>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span
                    className={cn(
                      "font-semibold",
                      attempt.score >= 0.7
                        ? "text-emerald-600 dark:text-emerald-400"
                        : attempt.score >= 0.4
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-destructive",
                    )}
                  >
                    {`${Math.round(attempt.score * 100)}%`}
                  </span>
                  <span>{formatDuration(attempt.durationMs)}</span>
                  <span>{`${attempt.wordCount} words`}</span>
                  <span>{PROVIDER_LABELS[attempt.provider] ?? attempt.provider}</span>
                </div>
                {attempt.transcriptPreview ? (
                  <p className="mt-2 line-clamp-2 rounded-lg bg-secondary/50 px-3 py-1.5 text-xs italic text-muted-foreground">
                    “{attempt.transcriptPreview}”
                  </p>
                ) : (
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    Transcript not kept (per your retention setting) — the score and metrics remain.
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
