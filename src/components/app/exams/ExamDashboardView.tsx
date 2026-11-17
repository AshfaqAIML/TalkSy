"use client";

/**
 * The examination dashboard. Renders every widget the Academy promises:
 * available examinations, selected examination (+spec version), target
 * score, current estimated performance, examination date, preparation
 * completion, section-wise strengths, section-wise weaknesses,
 * recommended lessons, daily study plan, upcoming mock tests and recent
 * mock-test results.
 */

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileCheck2,
  Gauge,
  History,
  ListChecks,
  PencilLine,
  PlayCircle,
  RefreshCw,
  Sparkles,
  Brain,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi } from "@/lib/client/exam-api";
import type { ExamDashboardDto } from "@/lib/exams/dashboard";

function daysLabel(days: number | null): string {
  if (days === null) return "Not set";
  if (days < 0) return "Past";
  if (days === 0) return "Today";
  return `${days} days`;
}

export function ExamDashboardView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [dashboard, setDashboard] = useState<ExamDashboardDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      const response = await examApi.dashboard();
      if (response.ok) setDashboard(response.data.dashboard);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-44 rounded-xl bg-slate-900" />
          ))}
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-24 text-center text-slate-300">
        Could not load the dashboard. Please try again.
      </div>
    );
  }

  if (!dashboard.onboarded) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Set your exam goals first</h2>
        <p className="max-w-md text-slate-400">
          The dashboard is built around your exam, target score and exam date.
          Two minutes of questions and it is ready.
        </p>
        <Button
          className="bg-amber-400 text-slate-950 hover:bg-amber-300"
          onClick={() => navigate({ name: "exams-onboarding" })}
        >
          Start onboarding <ArrowRight className="ml-1 size-4" aria-hidden />
        </Button>
      </div>
    );
  }

  if (!dashboard.selected) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">No active test specification</h2>
        <p className="max-w-md text-slate-400">
          Your selected examination has no active specification. Please contact an
          administrator or choose another exam.
        </p>
        <Button
          variant="outline"
          className="border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900"
          onClick={() => navigate({ name: "exams" })}
        >
          Back to the Academy
        </Button>
      </div>
    );
  }

  const { selected, goals, estimates, completion, strengths, weaknesses } = dashboard;
  const onTarget =
    estimates?.overall !== null &&
    estimates?.overall !== undefined &&
    goals &&
    estimates.overall >= goals.targetScore;

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        {/* Header row: selected exam + quick actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-white">{selected.name}</h1>
              <Badge variant="outline" className="border-amber-500/40 text-amber-300">
                spec v{selected.specVersion}
              </Badge>
              {dashboard.delivery === "UKVI" ? (
                <Badge variant="outline" className="border-sky-500/40 text-sky-300">
                  IELTS for UKVI — same test, SELT delivery
                </Badge>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-400">
              Format effective {selected.effectiveDate} · reviewed {selected.lastReviewedAt} ·
              scores valid {selected.validityMonths} months
              {selected.transitionNote ? " · transition dual-reporting active" : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-planner" })}
            >
              <ClipboardCheck className="size-3.5" aria-hidden /> Study planner
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-onboarding" })}
            >
              <PencilLine className="size-3.5" aria-hidden /> Change my goals
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-course", examKey: selected.examKey, variant: selected.variant })}
            >
              <BookOpenCheck className="size-3.5" aria-hidden /> Course
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-violet-500/40 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:text-white"
              onClick={() => navigate({ name: "exams-evaluator" })}
            >
              <Brain className="size-3.5" aria-hidden /> Evaluation Studio
            </Button>
            <Button
              size="sm"
              className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
              onClick={() => navigate({ name: "exams-mocks" })}
            >
              <PlayCircle className="size-3.5" aria-hidden /> Mock tests
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-history" })}
            >
              <History className="size-3.5" aria-hidden /> History
            </Button>
          </div>
        </div>

        {/* Row 1: target + estimate + date + completion */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                <Gauge className="size-3.5" aria-hidden /> Current estimate
              </div>
              <div className="mt-2 text-3xl font-bold text-white">
                {estimates?.scoreDisplay ?? "—"}
              </div>
              {goals && estimates ? (
                <div
                  className={cn(
                    "mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                    onTarget
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "bg-amber-400/10 text-amber-300",
                  )}
                >
                  {onTarget ? (
                    <TrendingUp className="size-3.5" aria-hidden />
                  ) : (
                    <TrendingDown className="size-3.5" aria-hidden />
                  )}
                  target {goals.targetScore.toFixed(1)} ·{" "}
                  {onTarget
                    ? "on target"
                    : `${(goals.targetScore - (estimates.overall ?? 0)).toFixed(1)} to go`}
                </div>
              ) : null}
              {estimates ? (
                <div className="mt-4 space-y-1.5">
                  {estimates.sections.map((section) => {
                    const max = selected.name.startsWith("TOEFL") ? 6 : 9;
                    return (
                      <div key={section.section} className="flex items-center gap-2 text-xs">
                        <span className="w-16 capitalize text-slate-400">{section.section}</span>
                        <Progress
                          value={(section.estimated / max) * 100}
                          className="h-1.5 flex-1 bg-slate-800"
                        />
                        <span className="w-8 text-right font-medium text-slate-200">
                          {section.estimated.toFixed(1)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                <CalendarDays className="size-3.5" aria-hidden /> Examination date
              </div>
              <div className="mt-2 text-2xl font-bold text-white">
                {goals?.examDate ?? "Not set"}
              </div>
              <div
                className={cn(
                  "mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                  (goals?.daysRemaining ?? 999) <= 30
                    ? "bg-amber-400/10 text-amber-300"
                    : "bg-slate-800 text-slate-300",
                )}
              >
                <Clock className="size-3.5" aria-hidden /> {daysLabel(goals?.daysRemaining ?? null)}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {goals?.dailyMinutes ?? 30} minutes of study per day · level {goals?.proficiency}
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                <ListChecks className="size-3.5" aria-hidden /> Preparation completion
              </div>
              <div className="mt-2 text-3xl font-bold text-white">{completion?.percent ?? 0}%</div>
              <Progress value={completion?.percent ?? 0} className="mt-3 h-2 bg-slate-800" />
              <p className="mt-2 text-xs text-slate-400">
                {completion?.completedSteps ?? 0} of {completion?.totalSteps ?? 0} pathway steps ·{" "}
                {completion?.planTasksDone ?? 0} of {completion?.planTasksTotal ?? 0} plan tasks
              </p>
              <Button
                variant="link"
                size="sm"
                className="mt-1 h-auto p-0 text-amber-300"
                onClick={() => navigate({ name: "exams-course", examKey: selected.examKey, variant: selected.variant })}
              >
                Open my pathway <ChevronRight className="size-3.5" aria-hidden />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                <Sparkles className="size-3.5" aria-hidden /> Strengths &amp; weaknesses
              </div>
              <div className="mt-3 space-y-1.5">
                {strengths.map((strength) => (
                  <div
                    key={strength.section}
                    className="rounded-lg bg-emerald-400/10 px-2.5 py-1.5 text-xs text-emerald-300"
                  >
                    <span className="font-semibold capitalize">{strength.section}</span> · {strength.note}
                  </div>
                ))}
                {weaknesses.map((weakness) => (
                  <div
                    key={weakness.section}
                    className="rounded-lg bg-amber-400/10 px-2.5 py-1.5 text-xs text-amber-300"
                  >
                    <span className="font-semibold capitalize">{weakness.section}</span> · {weakness.note}
                  </div>
                ))}
                {strengths.length === 0 && weaknesses.length === 0 ? (
                  <p className="text-xs text-slate-500">
                    Take a mock test to unlock section analysis.
                  </p>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 2: daily plan + recommendations */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <CalendarDays className="size-4 text-amber-400" aria-hidden /> Daily study plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dashboard.todayPlan ? (
                <div className="space-y-2">
                  <p className="text-xs text-slate-400">
                    {dashboard.todayPlan.date} · focus: {dashboard.todayPlan.focus} ·{" "}
                    {dashboard.todayPlan.tasks.reduce((sum, task) => sum + task.minutes, 0)} min
                  </p>
                  {dashboard.todayPlan.tasks.length === 0 ? (
                    <p className="text-sm text-slate-500">
                      Nothing scheduled today — rest is part of the plan.
                    </p>
                  ) : (
                    dashboard.todayPlan.tasks.map((task, index) => (
                      <a
                        key={index}
                        href={task.href}
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-lg border p-3 transition-colors",
                          task.done
                            ? "border-emerald-500/30 bg-emerald-500/5"
                            : "border-slate-800 bg-slate-950 hover:border-amber-400/50",
                        )}
                      >
                        <div className="min-w-0">
                          <div
                            className={cn(
                              "truncate text-sm font-medium",
                              task.done ? "text-slate-400 line-through" : "text-slate-100",
                            )}
                          >
                            {task.title}
                          </div>
                          {task.reason ? (
                            <div className="truncate text-xs text-slate-500">{task.reason}</div>
                          ) : null}
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <span className="text-xs text-slate-500">{task.minutes}m</span>
                          {task.done ? (
                            <CheckCircle2 className="size-4 text-emerald-400" aria-hidden />
                          ) : (
                            <ChevronRight className="size-4 text-slate-500" aria-hidden />
                          )}
                        </div>
                      </a>
                    ))
                  )}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No plan yet — try regenerating.</p>
              )}
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <BookOpenCheck className="size-4 text-amber-400" aria-hidden /> Recommended lessons
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dashboard.recommendations.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Recommendations appear once we know your strengths and weaknesses —
                  sit a mock test or keep practising in the common curriculum.
                </p>
              ) : (
                <div className="space-y-2">
                  {dashboard.recommendations.map((rec, index) => (
                    <a
                      key={index}
                      href={rec.href}
                      className="block rounded-lg border border-slate-800 bg-slate-950 p-3 transition-colors hover:border-amber-400/50"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-slate-100">{rec.title}</span>
                        <span className="shrink-0 text-xs text-slate-500">{rec.minutes}m</span>
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500">
                        {rec.source} · {rec.reason}
                      </div>
                    </a>
                  ))}
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="mt-3 gap-1.5 text-slate-400 hover:text-amber-300"
                onClick={async () => {
                  const response = await examApi.dashboard();
                  if (response.ok) setDashboard(response.data.dashboard);
                  toast.success("Recommendations refreshed.");
                }}
              >
                <RefreshCw className="size-3.5" aria-hidden /> Refresh recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Row 3: upcoming mocks + recent results */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <FileCheck2 className="size-4 text-amber-400" aria-hidden /> Upcoming mock tests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {dashboard.upcomingMocks.length === 0 ? (
                <p className="text-sm text-slate-500">No mocks published yet for this exam.</p>
              ) : (
                dashboard.upcomingMocks.map((mock) => (
                  <button
                    key={mock.id}
                    onClick={() => navigate({ name: "exams-mocks" })}
                    className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3 text-left transition-colors hover:border-amber-400/50"
                  >
                    <div>
                      <div className="text-sm font-medium text-slate-100">{mock.title}</div>
                      <div className="text-xs text-slate-500">
                        {mock.lengthLabel} length ·{" "}
                        {mock.scheduledDate ? `scheduled ${mock.scheduledDate}` : "not scheduled yet"}
                      </div>
                    </div>
                    <ChevronRight className="size-4 text-slate-500" aria-hidden />
                  </button>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <History className="size-4 text-amber-400" aria-hidden /> Recent mock results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {dashboard.recentResults.length === 0 ? (
                <p className="text-sm text-slate-500">No completed mocks yet.</p>
              ) : (
                dashboard.recentResults.map((result) => (
                  <button
                    key={result.attemptId}
                    onClick={() => navigate({ name: "exams-result", attemptId: result.attemptId })}
                    className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3 text-left transition-colors hover:border-amber-400/50"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-slate-100">
                        {result.mockTitle}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                        <span>
                          {result.submittedAt ? new Date(result.submittedAt).toLocaleDateString() : "—"}
                          {result.status !== "scored" ? " · awaiting review" : ""}
                        </span>
                        <span
                          className={cn(
                            "rounded border px-1 py-0.5 text-[10px]",
                            result.timed
                              ? "border-emerald-500/40 text-emerald-300"
                              : "border-sky-500/40 text-sky-300",
                          )}
                        >
                          {result.modeLabel.toLowerCase()}
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-amber-300">
                      {result.scoreDisplay ?? "—"}
                    </span>
                  </button>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Available examinations (switch anytime) */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-white">Available examinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-3">
              {dashboard.availableExams.map((exam) => (
                <button
                  key={`${exam.examKey}-${exam.variant}`}
                  onClick={() => {
                    if (exam.examKey === selected.examKey && exam.variant === selected.variant) return;
                    toast.info(
                      "Switching exams? Use “Change my goals” — your plan and progress follow your choice.",
                    );
                    navigate({ name: "exams-onboarding" });
                  }}
                  className={cn(
                    "rounded-xl border p-4 text-left transition-colors",
                    exam.examKey === selected.examKey && exam.variant === selected.variant
                      ? "border-amber-400 bg-amber-400/10"
                      : "border-slate-800 bg-slate-950 hover:border-slate-600",
                  )}
                >
                  <div className="text-sm font-semibold text-white">{exam.name}</div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    v{exam.version} · {exam.mockCount} mocks
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
