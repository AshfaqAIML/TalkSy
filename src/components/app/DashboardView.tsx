"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Flame,
  Lightbulb,
  Target,
  Timer,
  Trophy,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { api, type ProgressItem, type StatsDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";

export function DashboardView({
  onOpenLesson,
}: {
  onOpenLesson: (slug: string) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [stats, setStats] = useState<StatsDto | null>(null);
  const [progress, setProgress] = useState<ProgressItem[]>([]);

  useEffect(() => {
    if (!user) return;
    let active = true;
    (async () => {
      const [statsRes, progressRes] = await Promise.all([api.stats(), api.progress()]);
      if (!active) return;
      if (statsRes.ok) setStats(statsRes.data);
      if (progressRes.ok) setProgress(progressRes.data.items);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  if (!user) return null;

  const inProgress = progress.filter((p) => !p.completion.completed);
  const completed = progress.filter((p) => p.completion.completed);
  const totals = stats?.totals;

  const statCards = [
    {
      icon: Target,
      label: "Accuracy",
      value: totals ? `${totals.accuracy}%` : "—",
      hint: totals ? `${totals.correct} of ${totals.attempts} answers` : "",
    },
    {
      icon: Flame,
      label: "Day streak",
      value: totals ? String(totals.streakDays) : "—",
      hint: totals?.streakDays ? "Keep it going!" : "Practise today to start",
    },
    {
      icon: Lightbulb,
      label: "Hints used",
      value: totals ? String(totals.hintsUsed) : "—",
      hint: "Hints are always free",
    },
    {
      icon: Timer,
      label: "Time practising",
      value: totals ? `${totals.timeSpentMinutes} min` : "—",
      hint: "Across all exercises",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Hi {user.name ?? user.email} 👋
      </h1>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Your performance across the beginner library.
      </p>

      {/* Stat cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.label}>
            <CardContent className="flex flex-col gap-1 p-4 sm:p-5">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="size-4.5 text-primary" aria-hidden />
              </span>
              <p className="mt-1 text-2xl font-bold">{card.value}</p>
              <p className="text-xs font-medium text-muted-foreground">
                {card.label}
                {card.hint ? ` · ${card.hint}` : ""}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Per-skill accuracy */}
      {stats && Object.keys(stats.bySkill).length > 0 ? (
        <Card className="mt-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="size-4 text-primary" aria-hidden />
              Accuracy by skill
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {Object.entries(stats.bySkill)
              .sort((a, b) => b[1].attempts - a[1].attempts)
              .map(([skill, bucket]) => (
                <div key={skill} className="flex items-center gap-3 text-sm">
                  <span className="w-20 capitalize text-muted-foreground">{skill}</span>
                  <Progress
                    value={(bucket.correct / bucket.attempts) * 100}
                    className="h-2.5 flex-1"
                  />
                  <span className="w-16 text-right text-xs text-muted-foreground">
                    {bucket.correct}/{bucket.attempts}
                  </span>
                </div>
              ))}
          </CardContent>
        </Card>
      ) : null}

      {/* Lessons in progress */}
      <Card className="mt-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Continue learning</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {inProgress.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No lessons in progress — pick your next lesson in the{" "}
              <a href="#/library" className="font-medium text-primary hover:underline">
                learning path
              </a>
              .
            </p>
          ) : (
            inProgress.map((item) => (
              <button
                key={item.lessonSlug}
                type="button"
                onClick={() => onOpenLesson(item.lessonSlug)}
                className="flex items-center gap-3 rounded-xl border p-3.5 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{item.lessonTitle}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <Progress
                      value={
                        (item.completion.sectionsDone / item.completion.sectionsTotal) * 100
                      }
                      className="h-1.5 max-w-48 flex-1"
                    />
                    <span className="text-[11px] text-muted-foreground">
                      {item.completion.sectionsDone}/{item.completion.sectionsTotal} sections
                    </span>
                  </div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              </button>
            ))
          )}
        </CardContent>
      </Card>

      {/* Completed + assessments */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="size-4 text-primary" aria-hidden />
              Completed lessons ({completed.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {completed.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Complete all sections and pass the assessment to finish a lesson.
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {completed.map((item) => (
                  <li
                    key={item.lessonSlug}
                    className="flex items-center justify-between gap-2 text-sm"
                  >
                    <button
                      type="button"
                      className="font-medium hover:text-primary"
                      onClick={() => onOpenLesson(item.lessonSlug)}
                    >
                      {item.lessonTitle}
                    </button>
                    {item.bestAssessment ? (
                      <span className="text-xs text-muted-foreground">
                        best {Math.round(item.bestAssessment.score * 100)}%
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Trophy className="size-4 text-primary" aria-hidden />
              Recent assessments
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!stats || stats.assessments.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Take a final assessment at the end of any lesson to see your
                results here.
              </p>
            ) : (
              <ul className="flex flex-col divide-y divide-border">
                {stats.assessments.map((assessment) => (
                  <li
                    key={assessment.id}
                    className="flex items-center justify-between gap-2 py-2 text-sm"
                  >
                    <span className="capitalize">{assessment.lessonSlug}</span>
                    <span
                      className={
                        assessment.passed
                          ? "font-medium text-primary"
                          : "font-medium text-destructive"
                      }
                    >
                      {Math.round(assessment.score * 100)}%{" "}
                      {assessment.passed ? "✓" : "✗"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent attempts */}
      {stats && stats.recentAttempts.length > 0 ? (
        <Card className="mt-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent answers</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Exercise</th>
                  <th className="py-2 pr-4 font-medium">Type</th>
                  <th className="py-2 pr-4 font-medium">Level</th>
                  <th className="py-2 pr-4 font-medium">Result</th>
                  <th className="py-2 font-medium">Hints</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentAttempts.slice(0, 8).map((attempt, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-mono text-xs">{attempt.exerciseId}</td>
                    <td className="py-2 pr-4">{attempt.type}</td>
                    <td className="py-2 pr-4 capitalize">{attempt.difficulty}</td>
                    <td className="py-2 pr-4">
                      <span
                        className={
                          attempt.isCorrect
                            ? "font-medium text-primary"
                            : "text-destructive"
                        }
                      >
                        {attempt.isCorrect ? "✓ correct" : "✗ incorrect"}
                      </span>
                    </td>
                    <td className="py-2">{attempt.hintsUsed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
