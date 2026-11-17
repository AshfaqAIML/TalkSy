"use client";

/**
 * Examination analytics dashboard (admin).
 *
 * Every number comes from /api/exams/admin/stats — real database
 * aggregates only. Percentages show "—" when there is no data (never a
 * guessed value). Surfaces: published lessons, questions by review state,
 * mock examinations, content awaiting review, outdated content, most
 * frequently attempted sections, average learner performance and common
 * examination weaknesses.
 */

import { useEffect, useState } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BookOpenCheck,
  Clock,
  FileCheck2,
  FileQuestion,
  TrendingDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { request } from "@/lib/client/api";
import type { ExamAdminStatsDto } from "@/lib/exams/admin/types";

function pct(value: number | null): string {
  if (value === null) return "—";
  return `${Math.round(value * 100)}%`;
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          {icon}
          <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
        </div>
        <p className="text-2xl font-bold">{value}</p>
        {sub ? <p className="text-xs text-muted-foreground">{sub}</p> : null}
      </CardContent>
    </Card>
  );
}

export function ExamAnalyticsTab() {
  const [stats, setStats] = useState<ExamAdminStatsDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await request<{ stats: ExamAdminStatsDto }>("/api/exams/admin/stats");
      if (response.ok) setStats(response.data.stats);
      else setError(response.error);
    })();
  }, []);

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-sm text-destructive">{error}</CardContent>
      </Card>
    );
  }
  if (!stats) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  const maxSectionAttempts = Math.max(1, ...stats.sections.map((section) => section.attempts));
  const maxWeakness = Math.max(1, ...stats.weaknesses.map((weakness) => weakness.occurrences));

  return (
    <div className="flex flex-col gap-6">
      {/* Headline stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          icon={<BookOpenCheck className="size-4" aria-hidden />}
          label="Published lessons"
          value={stats.content.publishedLessons}
          sub={`${stats.content.lessonsByCollection.length} collections`}
        />
        <StatCard
          icon={<FileQuestion className="size-4" aria-hidden />}
          label="Total questions"
          value={stats.content.questionsTotal}
          sub={`${stats.content.questionsByStatus.published} published · ${stats.content.questionsByStatus["in-review"]} in review`}
        />
        <StatCard
          icon={<FileCheck2 className="size-4" aria-hidden />}
          label="Mock examinations"
          value={stats.content.curatedMockCount}
          sub={`${stats.content.mocksByStatus.published ?? 0} published · ${stats.content.rubrics} rubrics`}
        />
        <StatCard
          icon={<Clock className="size-4" aria-hidden />}
          label="Awaiting review"
          value={stats.review.awaitingTotal}
          sub={`${stats.review.questionsInReview} in review · ${stats.review.questionsApproved} approved · ${stats.review.draftSpecs} draft specs`}
        />
        <StatCard
          icon={<AlertTriangle className="size-4" aria-hidden />}
          label="Outdated content"
          value={stats.outdated.outdatedTotal}
          sub={`${stats.outdated.mocksOnRetiredSpecs.length} mocks on old specs · ${stats.outdated.questionsWithRetiredTypes} questions with retired types`}
        />
      </div>

      {/* Review pipeline */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Question review pipeline</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-5">
          {(
            [
              ["draft", "Draft"],
              ["in-review", "In review"],
              ["approved", "Approved"],
              ["published", "Published"],
              ["retired", "Retired"],
            ] as const
          ).map(([state, label]) => (
            <div key={state} className="rounded-lg border p-3 text-center">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
              <p className="mt-1 text-xl font-bold">{stats.content.questionsByStatus[state]}</p>
              <Progress
                value={
                  stats.content.questionsTotal > 0
                    ? (stats.content.questionsByStatus[state] / stats.content.questionsTotal) * 100
                    : 0
                }
                className="mt-2 h-1.5"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Most attempted sections */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="size-4 text-primary" aria-hidden /> Most frequently attempted sections
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stats.sections.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No mock attempts recorded yet.
              </p>
            ) : (
              <div className="space-y-2.5">
                {stats.sections.map((section) => (
                  <div key={section.section}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium capitalize">{section.section}</span>
                      <span className="text-muted-foreground">
                        {`${section.attempts} attempts · ${section.distinctLearners} learner${section.distinctLearners === 1 ? "" : "s"}`}
                      </span>
                    </div>
                    <Progress
                      value={(section.attempts / maxSectionAttempts) * 100}
                      className="mt-1 h-2"
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Average performance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Activity className="size-4 text-primary" aria-hidden /> Average learner performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-muted-foreground">Objective-item accuracy</p>
              <p className="text-2xl font-bold">{pct(stats.performance.averageAccuracy)}</p>
            </div>
            <p className="text-xs text-muted-foreground">
              {`${stats.performance.attempts} attempts · ${stats.performance.responses} graded responses`}
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>By section</TableHead>
                  <TableHead className="text-right">Accuracy</TableHead>
                  <TableHead className="text-right">Responses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.performance.bySection.map((section) => (
                  <TableRow key={section.section}>
                    <TableCell className="text-sm capitalize">{section.section}</TableCell>
                    <TableCell className="text-right text-sm font-medium">{pct(section.accuracy)}</TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">{section.responses}</TableCell>
                  </TableRow>
                ))}
                {stats.performance.byExam.map((exam) => (
                  <TableRow key={exam.exam}>
                    <TableCell className="text-sm font-medium">{exam.exam === "IELTS" ? "IELTS overall" : "TOEFL iBT overall"}</TableCell>
                    <TableCell className="text-right text-sm font-medium">{pct(exam.accuracy)}</TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">{exam.responses}</TableCell>
                  </TableRow>
                ))}
                {stats.performance.bySection.length === 0 && stats.performance.byExam.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="py-4 text-center text-sm text-muted-foreground">
                      No graded responses yet.
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Accuracy is the mean of awarded/possible points on machine-marked items — a
              practice measure, not an official score.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Common weaknesses */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingDown className="size-4 text-primary" aria-hidden /> Common examination weaknesses
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stats.weaknesses.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No wrong answers recorded yet — weaknesses appear as learners practise.
              </p>
            ) : (
              <div className="space-y-2.5">
                {stats.weaknesses.map((weakness) => (
                  <div key={weakness.tag}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium">{weakness.tag}</span>
                      <span className="text-muted-foreground">
                        {`${weakness.occurrences} wrong answers (e.g. ${weakness.sampleSection})`}
                      </span>
                    </div>
                    <Progress
                      value={(weakness.occurrences / maxWeakness) * 100}
                      className="mt-1 h-2"
                    />
                  </div>
                ))}
              </div>
            )}
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Skill tags come from questions learners answered incorrectly — they point at
              what to teach next, not at official sub-scores.
            </p>
          </CardContent>
        </Card>

        {/* Outdated content + spec health */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="size-4 text-primary" aria-hidden /> Outdated content &amp; spec health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Mocks pinned to non-active specifications
              </p>
              {stats.outdated.mocksOnRetiredSpecs.length === 0 ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  Every published mock runs on its examination&apos;s active specification.
                </p>
              ) : (
                <ul className="mt-1 space-y-1">
                  {stats.outdated.mocksOnRetiredSpecs.slice(0, 6).map((mock) => (
                    <li key={mock.id} className="flex items-center justify-between gap-2 text-xs">
                      <span className="truncate">{mock.title}</span>
                      <Badge variant="outline" className="shrink-0 text-[10px]">
                        {`v${mock.specVersion} · ${mock.status}`}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Specifications not reviewed in 12 months
              </p>
              {stats.outdated.specsStaleReview.length === 0 ? (
                <p className="mt-1 text-xs text-muted-foreground">All active specifications reviewed recently.</p>
              ) : (
                <ul className="mt-1 space-y-1">
                  {stats.outdated.specsStaleReview.map((spec) => (
                    <li key={spec.id} className="flex items-center justify-between gap-2 text-xs">
                      <span className="truncate">{`${spec.name} (v${spec.version})`}</span>
                      <span className="shrink-0 text-muted-foreground">
                        {`reviewed ${spec.lastReviewedAt.slice(0, 10)}`}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Questions with retired task types
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stats.outdated.questionsWithRetiredTypes === 0
                  ? "No published question uses a type outside the active catalogs."
                  : `${stats.outdated.questionsWithRetiredTypes} published question(s) use task types no longer in the active specification — review them from the blueprint workflow.`}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              {`Generated ${new Date(stats.generatedAt).toLocaleString()} — every number is a live database aggregate.`}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
