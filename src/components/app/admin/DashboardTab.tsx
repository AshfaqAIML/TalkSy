"use client";

/**
 * Admin dashboard: every number comes from /api/cms/admin/stats, which only
 * computes real database aggregates. Percentages show "—" when there is no
 * data (never a guessed or cached value).
 */

import { useEffect, useState } from "react";
import { Activity, BookOpenCheck, CheckCircle2, GraduationCap, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cmsApi } from "@/lib/client/api";
import type { CmsStatsDto } from "@/data/cms/types";

function pct(v: number | null): string {
  if (v === null) return "—";
  return `${Math.round(v * 100)}%`;
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

export function DashboardTab() {
  const [stats, setStats] = useState<CmsStatsDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const res = await cmsApi.stats();
      if (res.ok) setStats(res.data);
      else setError(res.error);
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Learners */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<GraduationCap className="size-4" />}
          label="Registered learners"
          value={stats.totalLearners}
          sub="student accounts"
        />
        <StatCard
          icon={<Activity className="size-4" />}
          label="Active (7 days)"
          value={stats.activeLearners7d}
          sub={`${stats.activeLearners30d} active in 30 days`}
        />
        <StatCard
          icon={<BookOpenCheck className="size-4" />}
          label="Course enrolments"
          value={stats.courseEnrolments}
          sub="CMS courses"
        />
        <StatCard
          icon={<CheckCircle2 className="size-4" />}
          label="Lessons completed"
          value={stats.cmsLessonsCompleted + stats.coreLessonsCompleted}
          sub={`${stats.cmsLessonsCompleted} CMS · ${stats.coreLessonsCompleted} core path`}
        />
      </div>

      {/* Performance */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<TrendingUp className="size-4" />}
          label="Graded answers"
          value={stats.platformAttempts}
          sub={`accuracy ${pct(stats.platformAccuracy)}`}
        />
        <StatCard
          icon={<TrendingUp className="size-4" />}
          label="Assessment pass rate"
          value={pct(stats.assessmentPassRate)}
          sub="completed assessments"
        />
        <StatCard
          icon={<TrendingUp className="size-4" />}
          label="CMS question accuracy"
          value={pct(stats.cmsQuestionAccuracy)}
          sub="question-bank attempts"
        />
        <StatCard
          icon={<Activity className="size-4" />}
          label="Answers / active learner"
          value={stats.engagement.avgAttemptsPerActiveLearner ?? "—"}
          sub="30-day average"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Student engagement (last 30 days)</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <div>
              <p className="text-xl font-bold">{stats.engagement.attempts30d}</p>
              <p className="text-xs text-muted-foreground">graded answers</p>
            </div>
            <div>
              <p className="text-xl font-bold">{stats.engagement.writingSubmissions30d}</p>
              <p className="text-xs text-muted-foreground">writing submissions</p>
            </div>
            <div>
              <p className="text-xl font-bold">{stats.engagement.speakingAttempts30d}</p>
              <p className="text-xs text-muted-foreground">speaking attempts</p>
            </div>
            <div>
              <p className="text-xl font-bold">{stats.engagement.tutorMessages30d}</p>
              <p className="text-xs text-muted-foreground">tutor messages</p>
            </div>
          </CardContent>
        </Card>

        {/* Content review status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Content review status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 text-sm">
            <StatusRow
              label="Courses"
              items={[
                ["draft", stats.contentStatus.courses.draft],
                ["review", stats.contentStatus.courses.review],
                ["approved", stats.contentStatus.courses.approved],
                ["published", stats.contentStatus.courses.live],
              ]}
            />
            <StatusRow
              label="Lessons"
              items={[
                ["draft", stats.contentStatus.lessons.draft],
                ["review", stats.contentStatus.lessons.review],
                ["approved", stats.contentStatus.lessons.approved],
                ["published", stats.contentStatus.lessons.live],
              ]}
            />
            <StatusRow
              label="Questions"
              items={[
                ["draft", stats.contentStatus.questions.draft],
                ["review", stats.contentStatus.questions.review],
                ["approved", stats.contentStatus.questions.approved],
                ["published", stats.contentStatus.questions.published],
                ["retired", stats.contentStatus.questions.retired],
              ]}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Popular lessons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular lessons</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            {stats.popularCmsLessons.length === 0 && stats.popularCoreLessons.length === 0 ? (
              <p className="text-muted-foreground">No lesson activity yet.</p>
            ) : null}
            {stats.popularCmsLessons.map((l) => (
              <div key={l.slug} className="flex items-center justify-between gap-2 rounded-lg border px-3 py-1.5">
                <span className="truncate">
                  <Badge variant="secondary" className="mr-1.5">CMS</Badge>
                  {l.title}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {l.learners} learners · {l.completions} completed
                </span>
              </div>
            ))}
            {stats.popularCoreLessons.map((l) => (
              <div key={l.slug} className="flex items-center justify-between gap-2 rounded-lg border px-3 py-1.5">
                <span className="truncate">
                  <Badge variant="outline" className="mr-1.5">core</Badge>
                  {l.slug}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {l.learners} learners · {l.completions} completed
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Enrolments by course */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Enrolments by course</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            {stats.enrolmentsByCourse.length === 0 ? (
              <p className="text-muted-foreground">No enrolments yet.</p>
            ) : null}
            {stats.enrolmentsByCourse.map((e) => {
              const max = Math.max(...stats.enrolmentsByCourse.map((x) => x.learners), 1);
              return (
                <div key={e.courseTitle} className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="truncate">{e.courseTitle}</span>
                    <span className="text-xs text-muted-foreground">{e.learners}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${Math.round((e.learners / max) * 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground">
        All figures are live database aggregates. Percentages show “—” when no data exists yet.
      </p>
    </div>
  );
}

function StatusRow({ label, items }: { label: string; items: [string, number][] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-20 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
      {items.map(([name, count]) => (
        <Badge key={name} variant={count > 0 ? "default" : "outline"} className="font-normal">
          {name}: {count}
        </Badge>
      ))}
    </div>
  );
}
