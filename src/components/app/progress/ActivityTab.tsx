"use client";

/**
 * Activity tab — development over time, with honest visualisations:
 *  - 12-week activity heatmap (learning points per day)
 *  - weekly points bar chart
 *  - exercise accuracy & word-review retention trend lines (weekly, labelled
 *    with sample sizes; weeks without data are simply missing, never zero)
 *  - vocabulary status donut
 *  - writing score progression across submitted versions
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Activity, CalendarDays, Feather, Languages, LineChart as LineChartIcon } from "lucide-react";
import type { ProgressOverviewDto } from "@/data/progress";
import { EmptyState, SectionCard, SKILL_COLORS } from "./bits";

const VOCAB_COLORS = { learning: "#3b82f6", reviewing: "#f59e0b", mastered: "#10b981" };

function weekLabel(weekStart: string): string {
  return new Date(`${weekStart}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function ActivityHeatmap({ days }: { days: { day: string; points: number }[] }) {
  const max = Math.max(...days.map((d) => d.points), 1);
  const weeks: { day: string; points: number }[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  const intensity = (points: number): string => {
    if (points === 0) return "bg-muted";
    const ratio = points / max;
    if (ratio > 0.75) return "bg-emerald-600";
    if (ratio > 0.5) return "bg-emerald-500";
    if (ratio > 0.25) return "bg-emerald-400";
    return "bg-emerald-300 dark:bg-emerald-700";
  };
  return (
    <div>
      <div className="flex gap-1 overflow-x-auto pb-1" role="img" aria-label="Daily learning points over the last 12 weeks">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <span
                key={day.day}
                title={`${day.day}: ${day.points} points`}
                className={`size-3.5 rounded-sm ${intensity(day.points)}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
        <span>Less</span>
        <span className="size-3 rounded-sm bg-muted" />
        <span className="size-3 rounded-sm bg-emerald-300 dark:bg-emerald-700" />
        <span className="size-3 rounded-sm bg-emerald-400" />
        <span className="size-3 rounded-sm bg-emerald-500" />
        <span className="size-3 rounded-sm bg-emerald-600" />
        <span>More</span>
      </div>
    </div>
  );
}

export function ActivityTab({ overview }: { overview: ProgressOverviewDto }) {
  const { weekly, writing, vocabulary } = overview.series;
  const hasActivity = overview.points.total > 0;

  const weeklyBars = weekly.map((w) => ({
    name: weekLabel(w.weekStart),
    points: w.points,
    events: w.events,
  }));

  const trendRows = weekly
    .map((w) => ({
      name: weekLabel(w.weekStart),
      exerciseAccuracy: w.exerciseAccuracy,
      exerciseAttempts: w.exerciseAttempts,
      reviewRetention: w.reviewRetention,
      reviewCount: w.reviewCount,
    }))
    .filter((w) => w.exerciseAttempts > 0 || w.reviewCount > 0);

  const vocabPie = [
    { name: "Learning", value: vocabulary.statusCounts.learning, color: VOCAB_COLORS.learning },
    { name: "Reviewing", value: vocabulary.statusCounts.reviewing, color: VOCAB_COLORS.reviewing },
    { name: "Mastered", value: vocabulary.statusCounts.mastered, color: VOCAB_COLORS.mastered },
  ].filter((slice) => slice.value > 0);

  const writingPoints = writing.flatMap((assignment) =>
    assignment.submissions.map((s) => ({
      at: new Date(s.at).getTime(),
      score: s.overall,
      passed: s.passed,
      title: assignment.title,
    })),
  ).sort((a, b) => a.at - b.at);

  return (
    <div className="flex flex-col gap-6">
      {!hasActivity ? (
        <EmptyState
          title="Your charts start with your first activity"
          body="Every point on these charts comes from a verified action — an answer, a review, a submission. Nothing is estimated."
        />
      ) : null}

      <SectionCard title="Activity over the last 12 weeks" icon={CalendarDays}>
        <ActivityHeatmap days={overview.points.byDay} />
      </SectionCard>

      <SectionCard title="Learning points per week" icon={Activity}>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyBars}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} interval="preserveStartEnd" />
              <YAxis tick={{ fontSize: 11 }} width={32} allowDecimals={false} />
              <Tooltip
                formatter={(value: number | string, name: string) =>
                  name === "points" ? [`${value} points`, "Points"] : [value, "Events"]
                }
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Bar dataKey="points" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      <SectionCard title="Accuracy over time (weekly)" icon={LineChartIcon}>
        {trendRows.length === 0 ? (
          <EmptyState
            title="Not enough graded answers yet"
            body="Exercise accuracy and word-review retention appear here once you have graded activity. Weeks without data are left blank on purpose — never shown as 0%."
          />
        ) : (
          <>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendRows}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} interval="preserveStartEnd" />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} width={32} />
                  <Tooltip
                    formatter={(value: number | string, name: string) => {
                      if (value === null || value === undefined) return ["no data", name];
                      return [`${value}%`, name === "exerciseAccuracy" ? "Exercise accuracy" : "Review retention"];
                    }}
                    labelFormatter={(_label, payload) => {
                      const row = payload?.[0]?.payload as
                        | { exerciseAttempts: number; reviewCount: number }
                        | undefined;
                      return row
                        ? `${_label} · ${row.exerciseAttempts} exercises · ${row.reviewCount} reviews`
                        : String(_label);
                    }}
                    contentStyle={{ fontSize: 12, borderRadius: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="exerciseAccuracy"
                    name="Exercise accuracy"
                    stroke={SKILL_COLORS.grammar}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    connectNulls
                  />
                  <Line
                    type="monotone"
                    dataKey="reviewRetention"
                    name="Review retention"
                    stroke={SKILL_COLORS.vocabulary}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Exercise accuracy = correct graded exercise answers that week. Review retention = correct
              graded word reviews that week. Sample sizes are shown on hover.
            </p>
          </>
        )}
      </SectionCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Vocabulary retention" icon={Languages}>
          {vocabPie.length === 0 ? (
            <EmptyState
              title="No words in review yet"
              body="Words enter the spaced-repetition system on their first graded review — learn a few in Word World to start."
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={vocabPie}
                      dataKey="value"
                      nameKey="name"
                      innerRadius="62%"
                      outerRadius="85%"
                      paddingAngle={2}
                    >
                      {vocabPie.map((slice) => (
                        <Cell key={slice.name} fill={slice.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number | string, name: string) => [`${value} words`, name]}
                      contentStyle={{ fontSize: 12, borderRadius: 8 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                {vocabPie.map((slice) => (
                  <span key={slice.name} className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full" style={{ background: slice.color }} aria-hidden />
                    {slice.name}: {slice.value}
                  </span>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Overall retention:{" "}
                {vocabulary.retention.pct === null
                  ? "no reviews yet"
                  : `${vocabulary.retention.pct}% of ${vocabulary.retention.total} graded reviews`}
                {vocabulary.dueNow > 0 ? ` · ${vocabulary.dueNow} due now` : ""}
              </p>
            </div>
          )}
        </SectionCard>

        <SectionCard title="Writing improvement" icon={Feather}>
          {writing.length === 0 ? (
            <EmptyState
              title="No writing submitted yet"
              body="Submit a piece of writing in the Writing Studio and your rubric scores across versions will chart here."
            />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={writingPoints.map((p, i) => ({ i, score: p.score, passed: p.passed, title: p.title }))}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="i" hide />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} width={32} />
                    <Tooltip
                      formatter={(value: number | string) => [`${value}/100`, "Rubric score"]}
                      labelFormatter={(_label, payload) => {
                        const row = payload?.[0]?.payload as { title: string } | undefined;
                        return row?.title ?? "";
                      }}
                      contentStyle={{ fontSize: 12, borderRadius: 8 }}
                    />
                    <Line type="monotone" dataKey="score" stroke={SKILL_COLORS.writing} strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <ul className="flex max-h-44 flex-col gap-2 overflow-y-auto">
                {writing.map((assignment) => (
                  <li key={assignment.assignmentId} className="flex items-center justify-between gap-2 text-sm">
                    <span className="min-w-0 truncate">{assignment.title}</span>
                    <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                      {assignment.firstScore} → {assignment.lastScore}
                      <Badge
                        variant="secondary"
                        className={
                          assignment.delta > 0
                            ? "border-0 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : assignment.delta < 0
                              ? "border-0 bg-amber-500/15 text-amber-600 dark:text-amber-400"
                              : "border-0"
                        }
                      >
                        {assignment.delta > 0 ? `+${assignment.delta}` : assignment.delta}
                      </Badge>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Scores are the Writing Studio rubric (0-100) — kept separate from exercise accuracy by design.
              </p>
            </div>
          )}
        </SectionCard>
      </div>
    </div>
  );
}
