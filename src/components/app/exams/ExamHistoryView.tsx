"use client";

/**
 * Examination history: past attempts, trend lines and same-version
 * comparisons.
 *
 * Trends only count exam-condition runs (timed mocks). Comparisons are
 * offered between attempts of the same examination type AND the same
 * specification version — the server refuses anything else, because
 * scores from different formats are not comparable.
 */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  History as HistoryIcon,
  LineChart as LineChartIcon,
  Scale,
  TrendingUp,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi } from "@/lib/client/exam-api";
import type { ComparisonDto, HistoryDto } from "@/lib/exams/history";

const SECTION_COLORS: Record<string, string> = {
  listening: "#38bdf8",
  reading: "#fbbf24",
  writing: "#a78bfa",
  speaking: "#fb7185",
};

function formatDuration(totalSeconds: number | null): string {
  if (totalSeconds === null) return "—";
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes}m ${String(totalSeconds % 60).padStart(2, "0")}s`;
}

export function ExamHistoryView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [history, setHistory] = useState<HistoryDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [comparing, setComparing] = useState(false);
  const [comparison, setComparison] = useState<ComparisonDto | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await examApi.history();
      if (response.ok) setHistory(response.data.history);
      else toast.error(response.error);
      setLoading(false);
    })();
  }, []);

  const selectedIds = useMemo(
    () => Object.entries(selected).filter(([, on]) => on).map(([id]) => id),
    [selected],
  );

  const comparablePair = useMemo(() => {
    if (selectedIds.length !== 2) return null;
    const [a, b] = selectedIds.map((id) => history?.attempts.find((entry) => entry.attemptId === id));
    if (!a || !b) return null;
    if (a.examKey !== b.examKey || a.variant !== b.variant) return null;
    if (a.specVersion !== b.specVersion) return null;
    return [a, b] as const;
  }, [selectedIds, history]);

  const runCompare = async () => {
    if (!comparablePair) return;
    setComparing(true);
    const response = await examApi.compareAttempts(comparablePair[0].attemptId, comparablePair[1].attemptId);
    setComparing(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setComparison(response.data.comparison);
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-10">
        <div className="mx-auto max-w-4xl space-y-4">
          <Skeleton className="h-24 rounded-xl bg-slate-900" />
          <Skeleton className="h-72 rounded-xl bg-slate-900" />
        </div>
      </div>
    );
  }

  const attempts = history?.attempts ?? [];
  const trends = history?.trends ?? [];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
        <button
          onClick={() => navigate({ name: "exams-mocks" })}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-300"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back to mock library
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">History &amp; trends</h1>
          <p className="mt-1 text-sm text-slate-400">
            Every attempt is stored — including unfinished runs, which keep their saved
            answers but are never scored. Trend lines count exam-condition runs only;
            comparisons require the same examination type and the same specification
            version.
          </p>
        </div>

        {/* Trends */}
        {trends.length === 0 ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="flex items-center gap-3 p-6 text-sm text-slate-400">
              <TrendingUp className="size-5 text-amber-400" aria-hidden />
              No exam-condition runs yet — sit a timed mock to start your trend line.
            </CardContent>
          </Card>
        ) : (
          trends.map((series) => {
            const chartData = series.points.map((point, index) => ({
              index: index + 1,
              label: point.label.length > 18 ? `${point.label.slice(0, 18)}…` : point.label,
              overall: point.overall,
              listening: point.sections.listening ?? null,
              reading: point.sections.reading ?? null,
              writing: point.sections.writing ?? null,
              speaking: point.sections.speaking ?? null,
            }));
            return (
              <Card key={`${series.examKey}-${series.variant}`} className="border-slate-800 bg-slate-900/60">
                <CardHeader className="pb-2">
                  <CardTitle className="flex flex-wrap items-center gap-2 text-base text-white">
                    <LineChartIcon className="size-4 text-amber-400" aria-hidden />
                    {series.examKey === "IELTS" ? "IELTS" : "TOEFL iBT"}
                    <span className="text-slate-500">
                      {series.variant === "GENERAL_TRAINING" ? "General Training" : series.variant === "ACADEMIC" ? "Academic" : ""}
                    </span>
                    <Badge variant="outline" className="border-slate-700 text-slate-400">
                      {series.attemptsCounted} timed run{series.attemptsCounted === 1 ? "" : "s"}
                    </Badge>
                    {series.improvement !== null ? (
                      <Badge
                        variant="outline"
                        className={cn(
                          "border-slate-700",
                          series.improvement > 0
                            ? "text-emerald-300"
                            : series.improvement < 0
                              ? "text-rose-300"
                              : "text-slate-300",
                        )}
                      >
                        {series.improvement > 0 ? "▲" : series.improvement < 0 ? "▼" : "="}{" "}
                        {series.improvement > 0 ? "+" : ""}
                        {series.improvement.toFixed(1)} since first
                      </Badge>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                        <CartesianGrid stroke="#1e293b" />
                        <XAxis dataKey="index" tick={{ fill: "#64748b", fontSize: 12 }} stroke="#334155" />
                        <YAxis
                          domain={[0, series.examKey === "TOEFL_IBT" ? 6 : 9]}
                          tickCount={series.examKey === "TOEFL_IBT" ? 6 : 10}
                          tick={{ fill: "#64748b", fontSize: 12 }}
                          stroke="#334155"
                        />
                        <Tooltip
                          contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 8 }}
                          labelStyle={{ color: "#94a3b8" }}
                        />
                        <Line type="monotone" dataKey="overall" name="Overall" stroke="#fbbf24" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
                        {["listening", "reading", "writing", "speaking"].map((section) => (
                          <Line
                            key={section}
                            type="monotone"
                            dataKey={section}
                            name={section}
                            stroke={SECTION_COLORS[section]}
                            strokeWidth={1.5}
                            strokeDasharray="4 3"
                            dot={false}
                            connectNulls
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span>
                      First <span className="text-slate-300">{series.firstOverall?.toFixed(1) ?? "—"}</span>
                    </span>
                    <span>
                      Best <span className="text-amber-300">{series.bestOverall?.toFixed(1) ?? "—"}</span>
                    </span>
                    <span>
                      Latest <span className="text-slate-300">{series.lastOverall?.toFixed(1) ?? "—"}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}

        {/* Comparison */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base text-white">
              <Scale className="size-4 text-amber-400" aria-hidden /> Compare two attempts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-slate-400">
              Tick two attempts of the same examination and specification version.
              {selectedIds.length === 2 && !comparablePair
                ? " These two are not comparable (different exam or spec version)."
                : ""}
            </p>
            {attempts.length === 0 ? (
              <p className="text-sm text-slate-500">No submitted attempts yet.</p>
            ) : (
              <div className="space-y-1.5">
                {attempts.map((attempt) => {
                  const on = selected[attempt.attemptId] ?? false;
                  // Unfinished attempts keep their answers but have no score —
                  // they cannot take part in comparisons.
                  const ineligible = attempt.unfinished;
                  const disabled = ineligible || (!on && selectedIds.length >= 2);
                  return (
                    <button
                      key={attempt.attemptId}
                      type="button"
                      aria-pressed={on}
                      disabled={disabled && !on}
                      onClick={() =>
                        setSelected((current) => ({ ...current, [attempt.attemptId]: !on }))
                      }
                      className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                        on
                          ? "border-amber-400 bg-amber-400/10"
                          : disabled
                            ? "cursor-not-allowed border-slate-800 bg-slate-950 text-slate-600"
                            : "border-slate-800 bg-slate-950 hover:border-slate-600",
                      )}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-slate-200">{attempt.mockTitle}</span>
                        <span className="block text-xs text-slate-500">
                          {new Date(attempt.submittedAt ?? attempt.startedAt ?? Date.now()).toLocaleString()} ·{" "}
                          {attempt.specName} v{attempt.specVersion} · {attempt.modeLabel.toLowerCase()}
                          {attempt.unfinished
                            ? " (unfinished — not scored)"
                            : attempt.timed
                              ? " (timed)"
                              : " (untimed)"}
                        </span>
                      </span>
                      <span className="shrink-0 font-medium text-amber-300">
                        {attempt.scoreDisplay ?? (attempt.unfinished ? "unfinished" : "—")}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-500">
                {formatDuration(comparison?.ok ? comparison.durationDeltaSec ?? null : null) !== "—"
                  ? `Duration delta: ${formatDuration(comparison?.ok ? comparison.durationDeltaSec ?? null : null)}`
                  : "Duration is compared when both attempts record it."}
              </span>
              <Button
                className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300 disabled:opacity-50"
                disabled={!comparablePair || comparing}
                onClick={() => void runCompare()}
              >
                {comparing ? "Comparing…" : "Compare"}
              </Button>
            </div>

            {comparison?.ok ? (
              <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-950 p-4">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-sm text-slate-300">
                    {comparison.a.scoreDisplay ?? "—"}
                    <span className="mx-1 text-slate-600">→</span>
                    {comparison.b.scoreDisplay ?? "—"}
                  </span>
                  {comparison.overallDelta !== null ? (
                    <Badge
                      variant="outline"
                      className={cn(
                        "border-slate-700",
                        comparison.overallDelta > 0
                          ? "text-emerald-300"
                          : comparison.overallDelta < 0
                            ? "text-rose-300"
                            : "text-slate-300",
                      )}
                    >
                      {comparison.overallDelta > 0 ? "▲ +" : comparison.overallDelta < 0 ? "▼ " : "= "}
                      {comparison.overallDelta.toFixed(1)}
                    </Badge>
                  ) : null}
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {comparison.sectionDeltas.map((entry) => (
                    <div key={entry.section} className="rounded-lg border border-slate-800 p-3 text-sm">
                      <p className="mb-1 font-medium capitalize text-slate-300">{entry.section}</p>
                      <p className="text-slate-400">
                        {entry.a?.toFixed(1) ?? "—"} → {entry.b?.toFixed(1) ?? "—"}
                        {entry.delta !== null ? (
                          <span
                            className={cn(
                              "ml-2",
                              entry.delta > 0 ? "text-emerald-300" : entry.delta < 0 ? "text-rose-300" : "text-slate-400",
                            )}
                          >
                            {entry.delta > 0 ? "+" : ""}
                            {entry.delta.toFixed(1)}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  ))}
                </div>
                {comparison.questionDiff ? (
                  <div className="rounded-lg border border-slate-800 p-3 text-sm">
                    <p className="mb-1 font-medium text-slate-300">
                      Question-level diff (same test)
                    </p>
                    <p className="text-slate-400">
                      <span className="text-emerald-300">{comparison.questionDiff.improved} improved</span>
                      {" · "}
                      <span className="text-rose-300">{comparison.questionDiff.regressed} regressed</span>
                      {" · "}
                      {comparison.questionDiff.stillRight} still correct
                      {" · "}
                      {comparison.questionDiff.stillWrong} still wrong
                      {" · "}
                      {comparison.questionDiff.newlyUnanswered} newly unanswered
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </CardContent>
        </Card>

        <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
          <HistoryIcon className="mt-0.5 size-4 shrink-0 text-amber-400/70" aria-hidden />
          Attempts are stored per learner and pinned to the specification version they
          were sat under, so old results stay interpretable when a provider changes the
          test. All results are estimates from original practice material — not official
          IELTS or ETS scores.
        </p>
      </div>
    </div>
  );
}
