"use client";

/**
 * Speaking activity player — walks the learner through an activity's tasks:
 * prompt (with TTS model for match tasks, cue cards / picture for open
 * tasks), the recorder, the two-layer feedback report, and progress with
 * no auto-completion (every task needs a passing take).
 */

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Lightbulb,
  ListChecks,
  Play,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSpeech } from "@/hooks/use-speech";
import {
  api,
  type SpeakingActivityBundle,
  type SpeakingAttemptResult,
  type SpeakingProgressDto,
  type SpeakingSettingsDto,
} from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { SafeSpeakingTask } from "@/data/speaking/types";
import { RecorderPanel } from "./RecorderPanel";
import { FeedbackReport } from "./FeedbackReport";

export function SpeakingActivityView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const speech = useSpeech();

  const [bundle, setBundle] = useState<SpeakingActivityBundle | null>(null);
  const [settings, setSettings] = useState<SpeakingSettingsDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [taskIndex, setTaskIndex] = useState(0);
  const [result, setResult] = useState<SpeakingAttemptResult | null>(null);
  const [progress, setProgress] = useState<SpeakingProgressDto | null>(null);
  const [busy, setBusy] = useState(false);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    if (!userLoaded || !user) return;
    void Promise.all([
      api.speakingActivity(slug),
      api.speakingLibrary(),
    ]).then(([activityRes, libraryRes]) => {
      if (activityRes.ok) setBundle(activityRes.data);
      else setError(activityRes.error);
      if (libraryRes.ok) {
        setSettings(libraryRes.data.settings);
        const summary = libraryRes.data.activities.find((a) => a.slug === slug);
        if (summary?.progress) {
          setProgress({
            activityId: summary.id,
            status: summary.progress.status === "completed" ? "completed" : "in-progress",
            tasksAttempted: [],
            tasksPassed: [],
            selfAssessedPassed: [],
            passedCount: summary.progress.passedCount,
            totalTasks: summary.progress.totalTasks,
            bestScore: summary.progress.bestScore,
            attemptsCount: 0,
            completedAt: summary.progress.completedAt,
          });
        }
      }
    });
  }, [slug, user, userLoaded]);

  const activity = bundle?.activity ?? null;
  const task: SafeSpeakingTask | null = activity?.tasks[taskIndex] ?? null;

  const submitAttempt = async (payload: {
    mode: "transcript" | "self-assessed";
    provider: "server" | "browser" | "manual" | "self";
    transcript?: string;
    durationMs?: number;
  }) => {
    if (!activity || !task) return;
    setBusy(true);
    const response = await api.speakingAttempt({
      slug: activity.slug,
      taskId: task.id,
      ...payload,
    });
    setBusy(false);
    if (response.ok) {
      setResult(response.data);
      setProgress(response.data.progress);
    } else {
      setError(response.error);
    }
  };

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Speaking practice</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to practise speaking with feedback.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }

  if (error && !activity) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-sm text-destructive">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "speaking", view: "hub" })}>
          <ArrowLeft className="size-4" aria-hidden /> Back to Speaking Lab
        </Button>
      </div>
    );
  }

  if (!activity || !task || !settings) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="mt-4 h-48 rounded-2xl" />
        <Skeleton className="mt-4 h-32 rounded-2xl" />
      </div>
    );
  }

  const totalTasks = activity.tasks.length;
  const passedCount = progress?.passedCount ?? 0;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-2 gap-2 text-muted-foreground"
            onClick={() => navigate({ name: "speaking", view: "hub" })}
          >
            <ArrowLeft className="size-4" aria-hidden /> Speaking Lab
          </Button>
          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            {activity.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
        </div>
        <Badge variant="secondary" className="shrink-0 capitalize">
          {activity.tier}
        </Badge>
      </div>

      {/* Task progress */}
      <div className="mt-5 rounded-xl border bg-card p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            {`Task ${taskIndex + 1} of ${totalTasks}: ${task.title}`}
          </span>
          <span className="text-muted-foreground">
            {`${passedCount}/${totalTasks} tasks passed`}
            {progress?.status === "completed" ? " · activity completed ✓" : ""}
          </span>
        </div>
        <Progress value={(passedCount / totalTasks) * 100} className="mt-2 h-2" />
        <div className="mt-3 flex flex-wrap gap-2">
          {activity.tasks.map((t, index) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTaskIndex(index);
                setResult(null);
                setShowHints(false);
              }}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                index === taskIndex
                  ? "border-primary bg-primary text-primary-foreground"
                  : "hover:border-primary/50",
              )}
              aria-current={index === taskIndex ? "step" : undefined}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt */}
      <div className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {task.type === "match" ? "Say it as accurately as you can" : "Your task"}
        </p>
        <p className="mt-2 text-base leading-relaxed">{task.prompt}</p>

        {/* Match task: the target text, with TTS model */}
        {task.type === "match" ? (
          <div className="mt-4">
            <div className="rounded-lg border bg-secondary/40 p-4 text-center">
              <p className="text-xl font-semibold leading-relaxed sm:text-2xl">
                {task.targetText}
              </p>
              {task.translation ? (
                <p className="mt-1 text-sm text-muted-foreground">{task.translation}</p>
              ) : null}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 gap-2"
              onClick={() =>
                speech.playing ? speech.stop() : speech.play(task.type === "match" ? task.targetText : "")
              }
            >
              <Play className="size-4" aria-hidden />
              {speech.playing ? "Stop model" : "Hear the model"}
            </Button>
          </div>
        ) : null}

        {/* Open task: cues, picture, checklist */}
        {task.type === "open" ? (
          <div className="mt-4 space-y-4">
            {task.image ? (
              <figure className="overflow-hidden rounded-lg border bg-white">
                <div
                  className="flex justify-center p-2 [&>svg]:h-auto [&>svg]:max-h-72 [&>svg]:w-auto [&>svg]:max-w-full"
                  // Original TalkSy SVG scene, authored inline in the data files.
                  dangerouslySetInnerHTML={{ __html: task.image.svg }}
                />
                <figcaption className="border-t bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground">
                  {task.image.alt}
                </figcaption>
              </figure>
            ) : null}

            {task.cues && task.cues.length > 0 ? (
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <ListChecks className="size-3.5" aria-hidden /> Talking points
                </p>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {task.cues.map((cue) => (
                    <li
                      key={cue.id}
                      className="rounded-lg border bg-secondary/40 px-3 py-2 text-sm"
                    >
                      {cue.label}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Target className="size-3.5" aria-hidden /> Aim to cover
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {task.checklist.map((point) => (
                  <li
                    key={point.id}
                    className="rounded-full border bg-secondary/40 px-3 py-1 text-xs"
                  >
                    {point.label}
                  </li>
                ))}
              </ul>
            </div>

            {task.targetWords && task.targetWords.length > 0 ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Vocabulary to try
                </p>
                <p className="mt-1.5 flex flex-wrap gap-1.5">
                  {task.targetWords.map((word) => (
                    <span
                      key={word}
                      className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Hints */}
        <div className="mt-4">
          {showHints ? (
            <ul className="space-y-1.5 rounded-lg border border-dashed p-3">
              {task.hints.map((hint, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                  {hint}
                </li>
              ))}
            </ul>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground"
              onClick={() => setShowHints(true)}
            >
              <Lightbulb className="size-4" aria-hidden /> Show hints
            </Button>
          )}
        </div>
      </div>

      {/* Recorder */}
      <div className="mt-5">
        <RecorderPanel
          settings={settings}
          maxSeconds={task.maxSeconds}
          targetSeconds={task.targetSeconds}
          busy={busy}
          onSubmitted={submitAttempt}
        />
      </div>

      {/* Feedback */}
      {result ? (
        <>
          <FeedbackReport
            measured={result.measured}
            overall={result.overall}
            passed={result.passed}
            passThreshold={result.passThreshold}
            suggestions={result.suggestions}
            modelAnswer={result.modelAnswer}
            taskPrompt={task.prompt}
          />
          <div className="mt-4 flex flex-wrap justify-between gap-2">
            <Button
              variant="outline"
              onClick={() => setResult(null)}
              disabled={busy}
            >
              <Circle className="size-4" aria-hidden /> Try this task again
            </Button>
            {taskIndex < totalTasks - 1 ? (
              <Button
                onClick={() => {
                  setTaskIndex((index) => index + 1);
                  setResult(null);
                  setShowHints(false);
                }}
              >
                Next task <ArrowRight className="size-4" aria-hidden />
              </Button>
            ) : progress?.status === "completed" ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <CheckCircle2 className="size-4" aria-hidden /> Activity completed
              </span>
            ) : (
              <Button
                variant="secondary"
                onClick={() => navigate({ name: "speaking", view: "hub" })}
              >
                Back to the Speaking Lab
              </Button>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
