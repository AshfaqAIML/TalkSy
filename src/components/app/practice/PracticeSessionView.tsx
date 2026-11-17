"use client";

/**
 * PROMPT 36 — practice session player + report.
 *
 * Active assessment-style sessions (chapter tests, course assessments, timed
 * challenges) collect answers silently and submit in one batch — hints off.
 * Active practice-style sessions answer question by question through the
 * existing runner (with hints where the mode allows) and finish from the
 * recorded attempts. Completed sessions render the full report.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  BookMarked,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FlagTriangleRight,
  ListChecks,
  RotateCcw,
  Send,
  Trophy,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { api, type PracticeSessionDto } from "@/lib/client/api";
import { ExerciseRunner } from "@/components/app/lesson/exercises/ExerciseRunner";
import type { SafeExercise } from "@/data/curriculum/types";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";

type Navigate = (route: AppRoute) => void;

const MODE_META: Record<string, { label: string; style: "assessment" | "practice" }> = {
  guided: { label: "Guided practice", style: "practice" },
  independent: { label: "Independent practice", style: "practice" },
  revision: { label: "Revision practice", style: "practice" },
  mixed: { label: "Mixed-topic practice", style: "practice" },
  timed: { label: "Timed challenge", style: "assessment" },
  "weak-area": { label: "Weak-area practice", style: "practice" },
  "chapter-test": { label: "Chapter test", style: "assessment" },
  "course-assessment": { label: "Course assessment", style: "assessment" },
};

export function PracticeSessionView({
  id,
  navigate,
}: {
  id: string;
  navigate: Navigate;
}) {
  const [session, setSession] = useState<PracticeSessionDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await api.practiceSession(id);
      if (cancelled) return;
      if (response.ok) setSession(response.data);
      else setError(response.error);
      if (!cancelled) setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="h-8 w-56 animate-pulse rounded-lg bg-muted" />
        <div className="mt-6 h-64 animate-pulse rounded-xl bg-muted/60" />
      </div>
    );
  }
  if (error || !session) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState
          icon={AlertTriangle}
          title="Session unavailable"
          description={error ?? "This session does not exist or belongs to another account."}
          action={
            <Button className="mt-4" onClick={() => navigate({ name: "practice" })}>
              Back to the Practice Zone
            </Button>
          }
        />
      </div>
    );
  }

  const meta = MODE_META[session.mode] ?? { label: session.mode, style: "practice" as const };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8">
      {/* Breadcrumb header */}
      <div className="flex flex-col gap-1.5">
        <Link href="#/practice" className="text-xs font-semibold text-primary hover:underline">
          ← Practice Zone
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{meta.label}</h1>
        <p className="text-sm text-muted-foreground">
          {session.config.chapterSlug
            ? `Chapter ${session.config.chapterSlug}`
            : session.config.courseSlug
              ? `Course ${session.config.courseSlug}`
              : "Mixed scope"}
          {session.status === "completed" ? " · finished" : ""}
        </p>
      </div>

      {session.status === "active" && session.questions ? (
        meta.style === "assessment" ? (
          <AssessmentPlayer key={session.id} session={session} navigate={navigate} />
        ) : (
          <PracticePlayer key={session.id} session={session} navigate={navigate} />
        )
      ) : session.report ? (
        <ReportView report={session.report} mode={session.mode} navigate={navigate} />
      ) : (
        <div className="mt-8">
          <EmptyState
            icon={AlertTriangle}
            title="No report stored"
            description="This session finished before reports were captured."
          />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Assessment-style player (chapter test / course assessment / timed)
// ---------------------------------------------------------------------------

function AssessmentPlayer({
  session,
  navigate,
}: {
  session: PracticeSessionDto;
  navigate: Navigate;
}) {
  const questions = session.questions ?? [];
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(
    session.timeLimitSec ?? null,
  );
  const submittedRef = useRef(false);

  const submit = useCallback(
    async (auto = false) => {
      if (submittedRef.current) return;
      submittedRef.current = true;
      setSubmitting(true);
      if (auto) toast.info("Time is up — submitting what you have answered.");
      const response = await api.submitPractice(
        session.id,
        questions.map((q) => ({ exerciseId: q.question.id, answer: answers[q.question.id] ?? null })),
      );
      setSubmitting(false);
      if (!response.ok) {
        toast.error(response.error);
        submittedRef.current = false;
        return;
      }
      navigate({ name: "practice-session", id: session.id });
      // Reload the view to render the report.
      window.location.hash = `#/practice/s/${session.id}`;
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    },
    [answers, navigate, questions, session.id],
  );

  // Countdown for timed sessions (auto-submit at zero, off the render path).
  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      const fire = setTimeout(() => {
        void submit(true);
      }, 0);
      return () => clearTimeout(fire);
    }
    const timer = setTimeout(() => setTimeLeft((t) => (t === null ? null : t - 1)), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, submit]);

  if (questions.length === 0) {
    return (
      <div className="mt-8">
        <EmptyState
          icon={AlertTriangle}
          title="Empty draw"
          description="The pool could not produce questions for this session."
        />
      </div>
    );
  }

  const current = questions[index];
  const answeredCount = questions.filter((q) => answers[q.question.id] != null).length;
  const isLast = index === questions.length - 1;
  const minutes = timeLeft === null ? null : Math.floor(timeLeft / 60);
  const seconds = timeLeft === null ? null : timeLeft % 60;

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            Question {index + 1} of {questions.length}
          </span>
          {timeLeft !== null ? (
            <span
              className={cn(
                "flex items-center gap-1.5 font-bold tabular-nums",
                timeLeft <= 30 ? "text-destructive" : "text-foreground",
              )}
              role="status"
              aria-label="Time left"
            >
              <Clock className="size-4" aria-hidden />
              {minutes}:{String(seconds).padStart(2, "0")}
            </span>
          ) : (
            <span className="text-muted-foreground">
              {answeredCount}/{questions.length} answered
            </span>
          )}
        </div>
        <Progress value={((index + 1) / questions.length) * 100} aria-label="Session progress" />
      </div>

      {timeLeft !== null ? (
        <p className="text-xs text-muted-foreground">
          Answers are held until you submit — no hints, no feedback until the
          report. Unanswered questions count as incorrect.
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">
          This one counts: hints are off and feedback waits for the report.
          Unanswered questions count as incorrect.
        </p>
      )}

      <ExerciseRunner
        key={current.question.id}
        exercise={current.question as SafeExercise}
        lessonSlug={current.lessonSlug}
        mode="assessment"
        attemptContext={session.mode}
        sessionId={session.id}
        onAnswerChange={(answer) =>
          setAnswers((prev) => ({ ...prev, [current.question.id]: answer }))
        }
      />

      <div className="flex items-center justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="gap-1.5"
        >
          <ChevronLeft className="size-4" aria-hidden /> Previous
        </Button>
        {isLast ? (
          <Button
            type="button"
            onClick={() => submit(false)}
            disabled={submitting}
            className="gap-1.5"
          >
            <Send className="size-4" aria-hidden />
            {submitting ? "Grading…" : "Submit for grading"}
          </Button>
        ) : (
          <Button type="button" onClick={() => setIndex((i) => i + 1)} className="gap-1.5">
            Next <ChevronRight className="size-4" aria-hidden />
          </Button>
        )}
      </div>
      {isLast && answeredCount < questions.length ? (
        <p className="text-center text-xs text-muted-foreground">
          {questions.length - answeredCount} question
          {questions.length - answeredCount === 1 ? "" : "s"} still unanswered.
        </p>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Practice-style player (guided / independent / revision / mixed / weak-area)
// ---------------------------------------------------------------------------

function PracticePlayer({
  session,
  navigate,
}: {
  session: PracticeSessionDto;
  navigate: Navigate;
}) {
  const questions = session.questions ?? [];
  const [index, setIndex] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

  const finish = async () => {
    setFinishing(true);
    const response = await api.finishPractice(session.id);
    setFinishing(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    navigate({ name: "practice-session", id: session.id });
    window.location.hash = `#/practice/s/${session.id}`;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  if (questions.length === 0) {
    return (
      <div className="mt-8">
        <EmptyState
          icon={AlertTriangle}
          title="Empty draw"
          description="The pool could not produce questions for this session."
        />
      </div>
    );
  }

  const current = questions[index];
  const isLast = index === questions.length - 1;
  const allowHints = session.hintsAllowed;

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            Question {index + 1} of {questions.length}
          </span>
          <span className="text-muted-foreground">
            {answeredCount}/{questions.length} checked
          </span>
        </div>
        <Progress value={((index + 1) / questions.length) * 100} aria-label="Session progress" />
      </div>

      <p className="text-xs text-muted-foreground">
        {allowHints
          ? "Answer, check, read the feedback — hints are there if you want them, one at a time."
          : "No hints in this mode: produce your answer, then let the feedback teach."}
      </p>

      <ExerciseRunner
        key={current.question.id}
        exercise={current.question as SafeExercise}
        lessonSlug={current.lessonSlug}
        mode="practice"
        attemptContext={session.mode}
        sessionId={session.id}
        allowHints={allowHints}
        onResult={() => setAnsweredCount((n) => Math.max(n, index + 1))}
      />

      <div className="flex items-center justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="gap-1.5"
        >
          <ChevronLeft className="size-4" aria-hidden /> Previous
        </Button>
        {isLast ? (
          <Button
            type="button"
            onClick={finish}
            disabled={finishing || answeredCount === 0}
            className="gap-1.5"
          >
            <FlagTriangleRight className="size-4" aria-hidden />
            {finishing ? "Building report…" : "Finish & see report"}
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
            className="gap-1.5"
          >
            Next <ChevronRight className="size-4" aria-hidden />
          </Button>
        )}
      </div>
      {isLast && answeredCount === 0 ? (
        <p className="text-center text-xs text-muted-foreground">
          Check at least one answer before finishing — the report is built from
          your recorded attempts.
        </p>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

function ReportView({
  report,
  mode,
  navigate,
}: {
  report: import("@/lib/client/api").PracticeReportDto;
  mode: string;
  navigate: Navigate;
}) {
  const areaRows = report.byArea;
  const topicRows = report.byTopic.slice(0, 8);
  const wrongItems = report.items.filter((i) => !i.correct);

  return (
    <div className="mt-6 flex flex-col gap-5">
      {/* Score header */}
      <Card
        className={cn(
          "border-2",
          report.passed === true
            ? "border-correct/50 bg-correct/5"
            : report.passed === false
              ? "border-destructive/40 bg-destructive/5"
              : "border-primary/40 bg-primary/5",
        )}
      >
        <CardContent className="flex flex-col items-center gap-3 p-6 text-center sm:p-8">
          <span className="text-5xl font-bold tabular-nums text-foreground">
            {report.scorePercent}%
          </span>
          <div>
            <p
              className={cn(
                "text-lg font-semibold",
                report.passed === true
                  ? "text-correct"
                  : report.passed === false
                    ? "text-destructive"
                    : "text-primary",
              )}
            >
              {report.passed === true
                ? "You passed — knowledge demonstrated"
                : report.passed === false
                  ? "Not passed — yet"
                  : "Practice session complete"}
            </p>
            <p className="text-sm text-muted-foreground">
              {report.correct} of {report.total} correct
              {report.passMarkPercent !== null ? ` · pass mark ${report.passMarkPercent}%` : ""}
              {report.hintsUsed > 0 ? ` · ${report.hintsUsed} hint${report.hintsUsed === 1 ? "" : "s"} used` : ""}
            </p>
          </div>
          <p className="max-w-xl text-sm leading-relaxed">{report.recommendation}</p>
        </CardContent>
      </Card>

      {/* Previous attempts */}
      {report.previousAttempts.length > 0 ? (
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-sm font-semibold">Previous attempts</p>
            <div className="mt-2 flex flex-col gap-1.5">
              {report.previousAttempts.map((attempt) => (
                <div key={attempt.id} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {new Date(attempt.completedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-bold tabular-nums">{attempt.scorePercent}%</span>
                    {attempt.passed === true ? (
                      <Badge variant="outline" className="border-correct/30 bg-correct/15 text-correct">
                        passed
                      </Badge>
                    ) : attempt.passed === false ? (
                      <Badge variant="destructive">not yet</Badge>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {/* Breakdowns */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-sm font-semibold">Skill areas</p>
            <div className="mt-2 flex flex-col gap-2">
              {areaRows.map((row) => (
                <div key={row.key} className="flex items-center gap-2 text-sm">
                  <span className="w-40 shrink-0 text-muted-foreground" title={row.label}>
                    {row.label}
                  </span>
                  <Progress value={(row.correct / row.attempts) * 100} className="h-2 flex-1" />
                  <span className="w-12 text-right text-xs tabular-nums text-muted-foreground">
                    {row.correct}/{row.attempts}
                  </span>
                </div>
              ))}
              {report.missingAreas.length > 0 ? (
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Not measured this time (pool had no questions):{" "}
                  {report.missingAreas.join(", ")}.
                </p>
              ) : null}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-sm font-semibold">By difficulty</p>
            <div className="mt-2 flex flex-col gap-2">
              {report.byDifficulty.map((row) => (
                <div key={row.key} className="flex items-center gap-2 text-sm">
                  <span className="w-20 capitalize text-muted-foreground">{row.key}</span>
                  <Progress value={(row.correct / row.attempts) * 100} className="h-2 flex-1" />
                  <span className="w-12 text-right text-xs tabular-nums text-muted-foreground">
                    {row.correct}/{row.attempts}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Topics + mistakes */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-sm font-semibold">Topics</p>
            {topicRows.length === 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">No topics recorded.</p>
            ) : (
              <div className="mt-2 flex flex-col gap-2">
                {topicRows.map((row) => (
                  <div key={row.key} className="flex items-center gap-2 text-sm">
                    <span className="w-36 shrink-0 text-muted-foreground" title={row.label}>
                      {row.label}
                    </span>
                    <Progress value={(row.correct / row.attempts) * 100} className="h-2 flex-1" />
                    <span className="w-12 text-right text-xs tabular-nums text-muted-foreground">
                      {row.correct}/{row.attempts}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-sm font-semibold">Mistake categories</p>
            {report.mistakeCategories.length === 0 ? (
              <p className="mt-2 text-xs text-correct">
                No mistakes this session — nothing to categorise.
              </p>
            ) : (
              <ul className="mt-2 flex flex-col gap-2">
                {report.mistakeCategories.map((cat) => (
                  <li key={cat.category} className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="size-3.5 text-destructive" aria-hidden />
                      <span className="font-medium">{cat.category}</span>
                      <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                        ×{cat.count}
                      </span>
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground">{cat.hint}</p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recommended lessons */}
      {report.recommendedLessons.length > 0 ? (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-4 sm:p-5">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <BookMarked className="size-4 text-primary" aria-hidden />
              Recommended lessons — where to revise first
            </p>
            <ol className="mt-3 flex flex-col divide-y divide-border">
              {report.recommendedLessons.map((lesson) => (
                <li key={lesson.slug} className="flex items-start justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <Link
                      href={`#/course-lesson/${lesson.slug}`}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      {lesson.title}
                    </Link>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {lesson.reason}
                    </p>
                  </div>
                  <Badge variant="secondary" className="shrink-0 text-[11px]">
                    {lesson.missCount} missed
                  </Badge>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ) : null}

      {/* Question review */}
      <Card>
        <CardContent className="p-4 sm:p-5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <ListChecks className="size-4 text-primary" aria-hidden />
            Question review
          </p>
          <ol className="mt-3 flex flex-col divide-y divide-border">
            {report.items.map((item, i) => (
              <li key={item.exerciseId} className="flex flex-col gap-1 py-3">
                <div className="flex items-start gap-2">
                  <span
                    className={cn(
                      "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white",
                      item.correct ? "bg-correct" : "bg-destructive",
                    )}
                    aria-hidden
                  >
                    {item.correct ? "✓" : "✗"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      {i + 1}. {item.prompt}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Your answer:{" "}
                      {item.unanswered
                        ? "— not answered"
                        : item.submitted == null
                          ? "—"
                          : typeof item.submitted === "object"
                            ? formatAnswer(item.submitted)
                            : String(item.submitted)}
                    </p>
                    <p className="text-xs text-primary">Correct: {item.feedback.correctAnswer}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.feedback.explanation}
                    </p>
                    {item.feedback.grammarRule ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground/70">
                          {item.feedback.grammarRule.title}:{" "}
                        </span>
                        {item.feedback.grammarRule.rule}
                      </p>
                    ) : null}
                    {item.feedback.revisionLesson ? (
                      <Link
                        href={`#/course-lesson/${item.feedback.revisionLesson.slug}`}
                        className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <BookMarked className="size-3" aria-hidden />
                        Revise: {item.feedback.revisionLesson.title ?? item.feedback.revisionLesson.slug}
                      </Link>
                    ) : null}
                  </div>
                  <span className="shrink-0 text-[11px] capitalize text-muted-foreground">
                    {item.difficulty}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Footer actions */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="outline" className="gap-1.5" onClick={() => navigate({ name: "practice" })}>
          <RotateCcw className="size-4" aria-hidden /> Practice Zone
        </Button>
        {mode === "chapter-test" || mode === "course-assessment" ? (
          <Button className="gap-1.5" onClick={() => navigate({ name: "practice" })}>
            <Trophy className="size-4" aria-hidden /> Retake later from the hub
          </Button>
        ) : null}
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Every attempt is saved — {wrongItems.length === 0
          ? "a clean sheet this time."
          : `${wrongItems.length} to revise, ${report.recommendedLessons.length} lesson${report.recommendedLessons.length === 1 ? "" : "s"} waiting.`}
      </p>
    </div>
  );
}

function formatAnswer(submitted: object): string {
  const record = submitted as Record<string, unknown>;
  if (typeof record.optionId === "string") return `option ${record.optionId}`;
  if (Array.isArray(record.optionIds)) return `options ${(record.optionIds as string[]).join(", ")}`;
  if (Array.isArray(record.tokens)) return (record.tokens as string[]).join(" ");
  if (Array.isArray(record.pairs)) return `${(record.pairs as unknown[]).length} pairs`;
  if (typeof record.text === "string") return record.text;
  try {
    return JSON.stringify(submitted);
  } catch {
    return "—";
  }
}
