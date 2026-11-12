"use client";

/**
 * The Writing Editor — a clean writing environment per assignment:
 * assignment instructions beside the writing area, live word/character
 * counters, debounced autosave with a "Saved" indicator, draft restore,
 * version history, revision mode (edit again with the previous feedback
 * visible), and the submit → feedback → revise loop.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  History,
  Lightbulb,
  Loader2,
  Play,
  Save,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSpeech } from "@/hooks/use-speech";
import {
  api,
  type FreeSubmitResult,
  type GuidedSubmitResult,
  type WritingAssignmentBundle,
} from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { SafeWritingTask } from "@/data/writing/types";
import { WritingFeedbackPanel } from "./FeedbackPanel";

const AUTOSAVE_DELAY_MS = 1500;

export function WritingEditorView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const speech = useSpeech();

  const [bundle, setBundle] = useState<WritingAssignmentBundle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [taskIndex, setTaskIndex] = useState(0);

  // Free-writing state.
  const [content, setContent] = useState("");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FreeSubmitResult | null>(null);
  const [revisionMode, setRevisionMode] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const dirtyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Guided state.
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [guidedResult, setGuidedResult] = useState<GuidedSubmitResult | null>(null);

  const loadBundle = useCallback((targetSlug: string) => {
    void api.writingAssignment(targetSlug).then((response) => {
      if (response.ok) {
        setBundle(response.data);
        setContent(response.data.draft.content);
        setSavedAt(response.data.draft.updatedAt);
        setTaskIndex(0);
      } else {
        setError(response.error);
      }
    });
  }, []);

  useEffect(() => {
    if (!userLoaded || !user) return;
    loadBundle(slug);
  }, [user, userLoaded, loadBundle, slug]);

  // Debounced autosave (free tasks only).
  const scheduleSave = useCallback(
    (value: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      dirtyRef.current = true;
      timerRef.current = setTimeout(async () => {
        setSaveState("saving");
        const response = await api.writingSaveDraft(slug, value);
        if (response.ok) {
          setSaveState("saved");
          setSavedAt(response.data.savedAt);
        } else {
          setSaveState("error");
        }
      }, AUTOSAVE_DELAY_MS);
    },
    [slug],
  );

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const wordCount = useMemo(
    () => content.trim().split(/\s+/).filter((w) => w.length > 0).length,
    [content],
  );
  const charCount = content.length;

  const assignment = bundle?.assignment ?? null;
  const task: SafeWritingTask | null = assignment?.tasks[taskIndex] ?? null;

  const submitFree = async () => {
    if (!assignment || !task || task.type !== "free") return;
    setSubmitting(true);
    setError(null);
    const response = await api.writingSubmitFree({
      slug: assignment.slug,
      taskId: task.id,
      content,
    });
    setSubmitting(false);
    if (response.ok) {
      setFeedback(response.data);
      setRevisionMode(false);
      setBundle((previous) =>
        previous
          ? { ...previous, submissions: response.data.submissions, progress: response.data.progress }
          : previous,
      );
    } else {
      setError(response.error);
    }
  };

  const submitGuided = async () => {
    if (!assignment || !task || task.type !== "guided") return;
    setSubmitting(true);
    setError(null);
    const response = await api.writingSubmitGuided({
      slug: assignment.slug,
      taskId: task.id,
      answers,
    });
    setSubmitting(false);
    if (response.ok) {
      setGuidedResult(response.data);
      setBundle((previous) =>
        previous ? { ...previous, progress: response.data.progress } : previous,
      );
    } else {
      setError(response.error);
    }
  };

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Writing Studio</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to write, get feedback and track your revisions.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }

  if (error && !assignment) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-sm text-destructive">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "writing", view: "hub" })}>
          <ArrowLeft className="size-4" aria-hidden /> Back to the Writing Studio
        </Button>
      </div>
    );
  }

  if (!assignment || !task) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="mt-4 h-72 rounded-2xl" />
      </div>
    );
  }

  const isFree = task.type === "free";
  const totalTasks = assignment.tasks.length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-2 gap-2 text-muted-foreground"
            onClick={() => navigate({ name: "writing", view: "hub" })}
          >
            <ArrowLeft className="size-4" aria-hidden /> Writing Studio
          </Button>
          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            {assignment.title}
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{assignment.description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="secondary" className="capitalize">{assignment.tier}</Badge>
          {bundle?.progress?.status === "completed" ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-4" aria-hidden /> Completed
            </span>
          ) : null}
        </div>
      </div>

      {/* Task tabs */}
      {totalTasks > 1 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {assignment.tasks.map((t, index) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTaskIndex(index);
                setFeedback(null);
                setGuidedResult(null);
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
      ) : null}

      <div className={cn("mt-5 grid gap-5", isFree && "lg:grid-cols-[1fr_20rem]")}>
        {/* ------------------------------------------------ LEFT: the editor */}
        <div className="min-w-0">
          {/* Instructions */}
          <div className="rounded-xl border bg-card p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {isFree ? "Your assignment" : "Guided practice"}
            </p>
            <p className="mt-2 text-base leading-relaxed">{task.prompt}</p>

            {isFree && task.type === "free" ? (
              <>
                <ul className="mt-3 space-y-1.5">
                  {task.instructions.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border bg-secondary/50 px-3 py-1">
                    {`${task.minWords}–${task.maxWords} words`}
                  </span>
                  <span className="rounded-full border bg-secondary/50 px-3 py-1">
                    {`≈ ${task.targetMinutes} min`}
                  </span>
                  <span className="rounded-full border bg-secondary/50 px-3 py-1">
                    {`pass: ${assignment.passThreshold}%`}
                  </span>
                </div>
                {/* Checklist */}
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Aim to cover
                  </p>
                  <ul className="mt-1.5 flex flex-wrap gap-2">
                    {task.checklist.map((point) => (
                      <li key={point.id} className="rounded-full border bg-secondary/40 px-3 py-1 text-xs">
                        {point.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}

            <div className="mt-3">
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
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground" onClick={() => setShowHints(true)}>
                  <Lightbulb className="size-4" aria-hidden /> Show hints
                </Button>
              )}
            </div>
          </div>

          {/* ---------- GUIDED editor ---------- */}
          {!isFree && task.type === "guided" ? (
            <div className="mt-5 space-y-4">
              {task.items.map((item, index) => {
                const result = guidedResult?.results.find((r) => r.itemId === item.id);
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "rounded-xl border bg-card p-4",
                      result && (result.correct
                        ? "border-emerald-300 dark:border-emerald-800"
                        : "border-amber-300 dark:border-amber-800"),
                    )}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Item {index + 1} of {task.items.length}
                        </p>
                        <p className="mt-1 font-medium">{item.prompt}</p>
                      </div>
                      {item.audioText ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="gap-2"
                          onClick={() =>
                            speech.playing ? speech.stop() : speech.play(item.audioText ?? "")
                          }
                          aria-label={`Listen to item ${index + 1}`}
                        >
                          <Play className="size-4" aria-hidden />
                          {speech.playing ? "Stop" : "Listen"}
                        </Button>
                      ) : null}
                    </div>
                    {item.display ? (
                      <p className="mt-3 rounded-lg bg-secondary/50 p-3 text-center text-2xl font-bold tracking-[0.3em]">
                        {item.display}
                      </p>
                    ) : null}
                    <input
                      type="text"
                      value={answers[item.id] ?? ""}
                      onChange={(event) =>
                        setAnswers((previous) => ({ ...previous, [item.id]: event.target.value }))
                      }
                      disabled={!!guidedResult}
                      placeholder="Type your answer…"
                      aria-label={`Answer for item ${index + 1}`}
                      className="mt-3 w-full rounded-lg border bg-background px-3 py-2 text-base outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                    />
                    {result ? (
                      <div
                        className={cn(
                          "mt-3 rounded-lg p-3 text-sm",
                          result.correct
                            ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                            : "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
                        )}
                      >
                        <p className="font-semibold">
                          {result.correct ? "Correct!" : result.feedback}
                        </p>
                        <p className="mt-1">{result.reveal}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <div className="flex flex-wrap gap-2">
                {guidedResult ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setGuidedResult(null);
                        setAnswers({});
                      }}
                    >
                      Try again
                    </Button>
                    {guidedResult.passed && taskIndex < totalTasks - 1 ? (
                      <Button
                        onClick={() => {
                          setTaskIndex((i) => i + 1);
                          setGuidedResult(null);
                          setAnswers({});
                        }}
                      >
                        Next task
                      </Button>
                    ) : null}
                  </>
                ) : (
                  <Button
                    onClick={submitGuided}
                    disabled={submitting || Object.keys(answers).length < task.items.length}
                    className="gap-2"
                  >
                    {submitting ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
                    Check my answers
                  </Button>
                )}
              </div>

              {guidedResult ? (
                <div className="rounded-xl border bg-card p-4">
                  <p className="font-semibold">
                    {`${guidedResult.correctCount}/${guidedResult.total} correct — ${guidedResult.overall}%${guidedResult.passed ? " (passed ✓)" : ` (${guidedResult.passThreshold}% needed)`}`}
                  </p>
                  <Progress value={guidedResult.overall} className="mt-2 h-2" />
                </div>
              ) : null}
            </div>
          ) : null}

          {/* ---------- FREE editor ---------- */}
          {isFree && task.type === "free" ? (
            <>
              <div className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-sm font-bold uppercase tracking-wide">Writing area</h2>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="tabular-nums">{`${wordCount} words`}</span>
                    <span aria-hidden>·</span>
                    <span className="tabular-nums">{`${charCount} characters`}</span>
                    <span aria-hidden>·</span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1",
                        saveState === "saved" && "text-emerald-600 dark:text-emerald-400",
                        saveState === "error" && "text-destructive",
                      )}
                    >
                      {saveState === "saving" ? (
                        <>
                          <Loader2 className="size-3 animate-spin" aria-hidden /> Saving…
                        </>
                      ) : saveState === "saved" ? (
                        <>
                          <Save className="size-3" aria-hidden /> Saved
                          {savedAt ? ` ${new Date(savedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : ""}
                        </>
                      ) : saveState === "error" ? (
                        "Autosave failed"
                      ) : (
                        <>
                          <Clock className="size-3" aria-hidden /> Autosave on
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Word target bar */}
                <Progress
                  value={Math.min(100, (wordCount / task.minWords) * 100)}
                  className="mt-2 h-1.5"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  {wordCount < task.minWords
                    ? `${task.minWords - wordCount} more words to reach the minimum`
                    : wordCount > task.maxWords
                      ? `${wordCount - task.maxWords} words over the suggested maximum`
                      : "Good length."}
                </p>
                <Textarea
                  value={content}
                  onChange={(event) => {
                    setContent(event.target.value);
                    scheduleSave(event.target.value);
                  }}
                  placeholder="Start writing — your draft saves itself as you type…"
                  className="mt-3 min-h-[18rem] text-base leading-relaxed"
                  aria-label="Writing area"
                  disabled={submitting || (!!feedback && !revisionMode)}
                />

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {feedback && !revisionMode ? (
                    <Button onClick={() => setRevisionMode(true)} className="gap-2">
                      <Sparkles className="size-4" aria-hidden /> Revise this piece
                    </Button>
                  ) : (
                    <Button
                      onClick={submitFree}
                      disabled={submitting || content.trim().length === 0}
                      className="gap-2"
                    >
                      {submitting ? (
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                      ) : (
                        <Send className="size-4" aria-hidden />
                      )}
                      {feedback ? "Submit revised version" : "Submit for feedback"}
                    </Button>
                  )}
                  {saveState === "error" ? (
                    <Button
                      variant="outline"
                      onClick={() => void api.writingSaveDraft(slug, content)}
                      className="gap-2"
                    >
                      <Save className="size-4" aria-hidden /> Save now
                    </Button>
                  ) : null}
                </div>

                {revisionMode && feedback ? (
                  <p className="mt-2 rounded-lg bg-secondary/60 p-2.5 text-xs text-muted-foreground">
                    Revision mode: your previous feedback stays visible below while you edit.
                    Submitting creates version {feedback.submission.version + 1} with a
                    side-by-side comparison.
                  </p>
                ) : null}
              </div>

              {/* Feedback */}
              {feedback ? (
                <WritingFeedbackPanel
                  measured={feedback.measured}
                  issues={feedback.issues}
                  aiFeedback={feedback.aiFeedback}
                  overall={feedback.overall}
                  passed={feedback.passed}
                  passThreshold={feedback.passThreshold}
                  comparison={feedback.comparison}
                  submissions={feedback.submissions}
                  onRevise={() => {
                    setRevisionMode(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              ) : null}

              {/* Version history */}
              {bundle && bundle.submissions.length > 0 ? (
                <section className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
                    <History className="size-4 text-primary" aria-hidden /> Submission history
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {[...bundle.submissions].reverse().map((sub) => (
                      <li
                        key={sub.id}
                        className="flex flex-wrap items-center justify-between gap-2 rounded-lg border bg-secondary/30 px-3 py-2 text-sm"
                      >
                        <span className="font-medium">
                          {`Version ${sub.version}`}
                          {sub.passed ? (
                            <span className="ml-2 text-emerald-600 dark:text-emerald-400">passed ✓</span>
                          ) : null}
                        </span>
                        <span className="text-muted-foreground">
                          {sub.wordCount} words · {sub.overall}/100 · {sub.issueCount} issue
                          {sub.issueCount === 1 ? "" : "s"} ·{" "}
                          {new Date(sub.createdAt).toLocaleString([], {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </>
          ) : null}
        </div>

        {/* -------------------------------------------- RIGHT: side panel */}
        {isFree && task.type === "free" ? (
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border bg-card p-4">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
                <BookOpen className="size-4 text-primary" aria-hidden /> How you'll be scored
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Ten writing dimensions, computed by fixed rules from your text — kept
                separate from your general proficiency scores. The AI coach adds
                labeled suggestions, never scores.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide">Revising</h3>
              <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                <li>Every submission is saved as a new version.</li>
                <li>After feedback, choose “Revise this piece” and edit with the report visible.</li>
                <li>Resubmitting shows a before/after comparison per dimension.</li>
              </ul>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
