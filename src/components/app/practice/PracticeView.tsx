"use client";

/**
 * PROMPT 36 — the Practice Zone hub.
 *
 * Tabs: Practice modes (7) · Chapter tests (56) · Course assessments (6) ·
 * History (reports + previous attempts). Everything on the page comes from
 * /api/practice/overview — real DB state, no invented counts.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  ChevronRight,
  Clock,
  Gauge,
  History,
  Lightbulb,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAppStore } from "@/lib/client/store";
import {
  api,
  type PracticeOverviewChapter,
  type PracticeOverviewDto,
  type PracticeSessionListItemDto,
} from "@/lib/client/api";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";

type Navigate = (route: AppRoute) => void;

const TABS = ["modes", "chapters", "courses", "history"] as const;
type Tab = (typeof TABS)[number];

const MODE_ICON: Record<string, typeof Target> = {
  guided: Lightbulb,
  independent: BookOpen,
  revision: History,
  mixed: Sparkles,
  timed: Clock,
  "weak-area": TrendingUp,
  "chapter-test": Trophy,
  "course-assessment": Award,
};

export function PracticeView({
  tab,
  navigate,
}: {
  tab?: string;
  navigate: Navigate;
}) {
  const user = useAppStore((s) => s.user);
  const activeTab: Tab = (TABS as readonly string[]).includes(tab ?? "")
    ? (tab as Tab)
    : "modes";
  const [overview, setOverview] = useState<PracticeOverviewDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await api.practiceOverview();
      if (cancelled) return;
      if (response.ok) setOverview(response.data);
      else toast.error(response.error);
      if (!cancelled) setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const startMode = useCallback(
    async (mode: string, config: Record<string, unknown>) => {
      const response = await api.startPractice(mode, config);
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      navigate({ name: "practice-session", id: response.data.id });
    },
    [navigate],
  );

  if (!user) return null;
  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="h-8 w-64 animate-pulse rounded-lg bg-muted" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl bg-muted/60" />
          ))}
        </div>
      </div>
    );
  }
  if (!overview) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <EmptyState
          icon={Target}
          title="Practice Zone"
          description="The overview could not be loaded. Please refresh."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Practice &amp; assessment engine
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Practice Zone</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Eight practice modes, 56 chapter tests and six course milestone
          assessments. Every answer is graded on the server, saved to your
          history, and measured — viewing a lesson never counts as mastery.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-wrap gap-1.5" role="tablist" aria-label="Practice sections">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={t === activeTab}
            onClick={() => navigate({ name: "practice", tab: t === "modes" ? undefined : t })}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              t === activeTab
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {t === "modes" ? "Practice modes" : t === "chapters" ? "Chapter tests" : t === "courses" ? "Course assessments" : "History & reports"}
          </button>
        ))}
      </div>

      {/* Mastery strip */}
      <MasteryStrip overview={overview} />

      {/* PROMPT 38 §7 — adaptive difficulty suggestion */}
      <AdaptiveCard overview={overview} onStart={startMode} />

      {activeTab === "modes" ? (
        <ModesTab overview={overview} onStart={startMode} />
      ) : null}
      {activeTab === "chapters" ? (
        <ChaptersTab overview={overview} onStart={startMode} />
      ) : null}
      {activeTab === "courses" ? (
        <CoursesTab overview={overview} onStart={startMode} />
      ) : null}
      {activeTab === "history" ? <HistoryTab navigate={navigate} /> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------

/**
 * PROMPT 38 §7 — adaptive difficulty, surfaced honestly. The suggestion is
 * derived from multiple recent attempts (never one), the reason quotes the
 * actual numbers, and the button starts a Mixed session at the suggested
 * level. When there is not enough evidence yet, the card says exactly that.
 */
function AdaptiveCard({
  overview,
  onStart,
}: {
  overview: PracticeOverviewDto;
  onStart: (mode: string, config: Record<string, unknown>) => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const adaptive = overview.adaptive;
  const bandLabels: Record<string, string> = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    challenge: "Challenge",
  };

  const startAdaptive = async () => {
    if (!adaptive.suggestion) return;
    setBusy(true);
    await onStart("mixed", { difficulty: [adaptive.suggestion], count: 8 });
    setBusy(false);
  };

  return (
    <Card className="mt-4 border-primary/25">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Gauge className="size-4 text-primary" aria-hidden />
            <p className="text-sm font-bold">Adaptive difficulty</p>
          </div>
          {adaptive.suggestion ? (
            <Badge className="capitalize">{bandLabels[adaptive.suggestion] ?? adaptive.suggestion}</Badge>
          ) : (
            <Badge variant="outline">Not enough evidence yet</Badge>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{adaptive.reason}</p>
        {adaptive.suggestion ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Adjusts your practice level from demonstrated performance — one
              attempt never decides anything.
            </p>
            <Button
              type="button"
              size="sm"
              disabled={busy}
              onClick={startAdaptive}
              className="gap-1.5"
            >
              {busy ? "Preparing…" : `Start a Mixed session at ${bandLabels[adaptive.suggestion] ?? adaptive.suggestion}`}
              <ChevronRight className="size-4" aria-hidden />
            </Button>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">
            The suggestion appears once you have five graded attempts — judging a
            level from less would be unfair to you.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function MasteryStrip({ overview }: { overview: PracticeOverviewDto }) {
  return (
    <Card className="mt-6 border-primary/25 bg-primary/5">
      <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <Award className="size-4 text-primary" aria-hidden />
            <p className="text-sm font-semibold">
              {overview.mastery.chaptersDemonstrated}
              <span className="text-muted-foreground"> / 56 chapters demonstrated</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-primary" aria-hidden />
            <p className="text-sm font-semibold">
              {overview.mastery.chaptersCompleted}
              <span className="text-muted-foreground"> / 56 chapters completed</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <History className="size-4 text-primary" aria-hidden />
            <p className="text-sm font-semibold">
              {overview.sessionTotals.completed}
              <span className="text-muted-foreground"> sessions · {overview.sessionTotals.testsPassed} tests passed</span>
            </p>
          </div>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {overview.mastery.skills.map((skill) => (
            <div key={skill.skill} className="rounded-xl border bg-background p-3">
              <p className="text-xs font-semibold capitalize text-foreground">{skill.skill}</p>
              {skill.weightedAccuracy === null ? (
                <p className="mt-1 text-xs text-muted-foreground">{skill.bandLabel}</p>
              ) : (
                <>
                  <div className="mt-1.5 flex items-baseline justify-between">
                    <span className="text-lg font-bold tabular-nums">{skill.weightedAccuracy}%</span>
                    <span className="text-[11px] text-muted-foreground">
                      {skill.correct}/{skill.attempts}
                    </span>
                  </div>
                  <Progress value={skill.weightedAccuracy} className="mt-1 h-1.5" />
                  <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{skill.bandLabel}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs italic text-muted-foreground">{overview.mastery.note}</p>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------

function ModesTab({
  overview,
  onStart,
}: {
  overview: PracticeOverviewDto;
  onStart: (mode: string, config: Record<string, unknown>) => Promise<void>;
}) {
  const [busy, setBusy] = useState<string | null>(null);
  /** Chapters that can scope a guided/independent session. */
  const scoping = overview.chapters.filter(
    (c) => c.lessonsViewed > 0 || c.lessonsCompleted > 0,
  );
  const [scopeChapter, setScopeChapter] = useState<string>("");
  const scoped = useMemo(
    () => (scopeChapter ? scoping.find((c) => c.slug === scopeChapter) : undefined),
    [scopeChapter, scoping],
  );

  const freeModes = overview.modes.filter((m) =>
    ["revision", "mixed", "weak-area", "timed"].includes(m.id),
  );
  const scopedModes = overview.modes.filter((m) =>
    ["guided", "independent"].includes(m.id),
  );

  const run = async (mode: string, config: Record<string, unknown>) => {
    setBusy(mode);
    await onStart(mode, config);
    setBusy(null);
  };

  return (
    <div className="mt-6 flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {scopedModes.map((mode) => {
          const Icon = MODE_ICON[mode.id] ?? Target;
          return (
            <Card key={mode.id} className="flex flex-col">
              <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/15">
                    <Icon className="size-4 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{mode.label}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {mode.hints ? "hints offered" : "no hints"} · immediate feedback
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{mode.description}</p>
                <div className="mt-auto flex flex-col gap-2">
                  {scoping.length === 0 ? (
                    <p className="text-xs text-muted-foreground">
                      Open a lesson from any chapter first — guided practice draws from
                      chapters you have started.
                    </p>
                  ) : (
                    <Select value={scopeChapter} onValueChange={setScopeChapter}>
                      <SelectTrigger className="h-9 w-full" aria-label="Chapter scope">
                        <SelectValue placeholder="Pick a chapter…" />
                      </SelectTrigger>
                      <SelectContent>
                        {scoping.map((chapter) => (
                          <SelectItem key={chapter.slug} value={chapter.slug}>
                            CH-{String(chapter.number).padStart(2, "0")} · {chapter.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <Button
                    type="button"
                    disabled={scoping.length === 0 || !scoped || busy === mode.id}
                    onClick={() => scoped && run(mode.id, { chapterSlug: scoped.slug, count: 8 })}
                    className="gap-1.5"
                  >
                    {busy === mode.id ? "Preparing…" : scoped ? `Start · CH-${String(scoped.number).padStart(2, "0")}` : "Pick a chapter first"}
                    <ChevronRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {freeModes.map((mode) => {
          const Icon = MODE_ICON[mode.id] ?? Target;
          const disabled = mode.id === "weak-area" && !overview.weakAreas.hasData;
          return (
            <Card key={mode.id} className="flex flex-col">
              <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/15">
                    <Icon className="size-4 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{mode.label}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {mode.gradedStyle === "assessment" ? "answers held to the end" : mode.hints ? "hints offered" : "no hints"}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{mode.description}</p>
                {mode.id === "weak-area" && overview.weakAreas.hasData ? (
                  <div className="flex flex-wrap gap-1.5">
                    {overview.weakAreas.weakSkills.slice(0, 3).map((skill) => (
                      <Badge key={skill.skill} variant="secondary" className="text-[11px]">
                        {skill.skill} · {skill.accuracy}%
                      </Badge>
                    ))}
                    {overview.weakAreas.weakChapters.slice(0, 2).map((chapter) => (
                      <Badge key={chapter.chapterSlug} variant="outline" className="text-[11px]">
                        {chapter.chapterSlug} · {chapter.wrongs} wrong
                      </Badge>
                    ))}
                  </div>
                ) : null}
                {mode.id === "timed" ? (
                  <p className="text-xs text-muted-foreground">12 questions · 6 minutes on the clock.</p>
                ) : null}
                <Button
                  type="button"
                  className="mt-auto gap-1.5"
                  disabled={disabled || busy === mode.id}
                  onClick={() => run(mode.id, mode.id === "timed" ? { count: 12, timeLimitSec: 360 } : { count: 10 })}
                >
                  {busy === mode.id ? "Preparing…" : disabled ? "Needs answer history first" : "Start session"}
                  <ChevronRight className="size-4" aria-hidden />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function ChaptersTab({
  overview,
  onStart,
}: {
  overview: PracticeOverviewDto;
  onStart: (mode: string, config: Record<string, unknown>) => Promise<void>;
}) {
  const [busyChapter, setBusyChapter] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const levels = useMemo(() => {
    const seen = new Map<string, string>();
    for (const chapter of overview.chapters) seen.set(chapter.levelName, chapter.courseSlug);
    return [...seen.entries()];
  }, [overview.chapters]);
  const chapters = useMemo(
    () =>
      levelFilter === "all"
        ? overview.chapters
        : overview.chapters.filter((c) => c.courseSlug === levelFilter),
    [overview.chapters, levelFilter],
  );

  const runTest = async (chapter: PracticeOverviewChapter) => {
    setBusyChapter(chapter.slug);
    await onStart("chapter-test", { chapterSlug: chapter.slug, count: 8 });
    setBusyChapter(null);
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Each test covers its chapter&apos;s own lessons — no questions from
          outside the chapter, no tricks.
        </p>
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="h-9 w-52" aria-label="Level filter">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All levels · 56 chapters</SelectItem>
            {levels.map(([name, slug]) => (
              <SelectItem key={slug} value={slug}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => {
          const locked = !chapter.unlocked;
          return (
            <Card
              key={chapter.slug}
              className={cn(
                "flex flex-col",
                locked ? "opacity-70" : chapter.demonstrated ? "border-correct/40" : undefined,
              )}
            >
              <CardContent className="flex flex-col gap-2.5 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      CH-{String(chapter.number).padStart(2, "0")} · {chapter.levelName}
                    </p>
                    <p className="truncate text-sm font-bold" title={chapter.title}>
                      {chapter.title}
                    </p>
                  </div>
                  {chapter.demonstrated ? (
                    <Badge variant="outline" className="shrink-0 border-correct/30 bg-correct/15 text-correct">
                      demonstrated
                    </Badge>
                  ) : locked ? (
                    <Lock className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                  <span>
                    {chapter.lessonsCompleted}/{chapter.lessonsTotal} lessons
                  </span>
                  <span>· {chapter.questionCount} questions</span>
                  {chapter.bestTestPercent !== null ? (
                    <span>· best {chapter.bestTestPercent}%</span>
                  ) : null}
                  {chapter.testsTaken > 0 ? <span>· {chapter.testsTaken} attempt(s)</span> : null}
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant={chapter.demonstrated ? "outline" : "default"}
                  className="mt-auto gap-1.5"
                  disabled={locked || busyChapter === chapter.slug}
                  onClick={() => runTest(chapter)}
                >
                  {busyChapter === chapter.slug
                    ? "Preparing…"
                    : chapter.demonstrated
                      ? "Retake test"
                      : "Take the chapter test"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function CoursesTab({
  overview,
  onStart,
}: {
  overview: PracticeOverviewDto;
  onStart: (mode: string, config: Record<string, unknown>) => Promise<void>;
}) {
  const [busyCourse, setBusyCourse] = useState<string | null>(null);
  return (
    <div className="mt-6 flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Course assessments measure all seven skill areas — grammar
        understanding, vocabulary, sentence formation, reading, writing,
        listening and speaking — across the whole course. They unlock at the
        course milestone: half the chapters completed.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        {overview.courses.map((course) => {
          const disabled = !course.unlocked;
          return (
            <Card key={course.slug} className={cn("flex flex-col", disabled && "opacity-80")}>
              <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {course.levelName}
                    </p>
                    <p className="text-base font-bold">{course.title}</p>
                  </div>
                  {disabled ? <Lock className="size-4 text-muted-foreground" aria-hidden /> : null}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                  <span>
                    {course.chaptersCompleted}/{course.chaptersTotal} chapters completed
                  </span>
                  <span>{course.chaptersDemonstrated} demonstrated</span>
                  <span>{course.questionCount} questions in the bank</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Milestone</span>
                    <span>{course.unlockProgress}%</span>
                  </div>
                  <Progress value={course.unlockProgress} className="h-2" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{course.unlockReason}</p>
                <Button
                  type="button"
                  className="mt-auto gap-1.5"
                  disabled={disabled || busyCourse === course.slug}
                  onClick={async () => {
                    setBusyCourse(course.slug);
                    await onStart("course-assessment", { courseSlug: course.slug, count: 14 });
                    setBusyCourse(null);
                  }}
                >
                  {busyCourse === course.slug ? "Preparing…" : "Start course assessment"}
                  <ChevronRight className="size-4" aria-hidden />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function HistoryTab({ navigate }: { navigate: Navigate }) {
  type SessionRow = PracticeSessionListItemDto;
  const [sessions, setSessions] = useState<SessionRow[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await api.practiceSessions();
      if (cancelled) return;
      if (response.ok) setSessions(response.data.sessions);
      else toast.error(response.error);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (sessions === null) {
    return <div className="mt-6 h-40 animate-pulse rounded-xl bg-muted/60" />;
  }
  if (sessions.length === 0) {
    return (
      <div className="mt-6">
        <EmptyState
          icon={History}
          title="No sessions yet"
          description="Start any practice mode or chapter test — every finished session appears here with its full report."
        />
      </div>
    );
  }

  const modeLabel: Record<string, string> = {
    guided: "Guided practice",
    independent: "Independent practice",
    revision: "Revision practice",
    mixed: "Mixed-topic practice",
    timed: "Timed challenge",
    "weak-area": "Weak-area practice",
    "chapter-test": "Chapter test",
    "course-assessment": "Course assessment",
  };

  return (
    <div className="mt-6 flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">
        Previous attempts — click any row to reopen its full report (answers,
        accuracy, topic-wise performance, mistake categories and recommended
        lessons).
      </p>
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-2.5 font-semibold">Session</th>
              <th className="px-4 py-2.5 font-semibold">Score</th>
              <th className="px-4 py-2.5 font-semibold">Result</th>
              <th className="px-4 py-2.5 font-semibold">When</th>
              <th className="px-4 py-2.5" aria-label="Open" />
            </tr>
          </thead>
          <tbody className="divide-y">
            {sessions.map((session) => (
              <tr
                key={session.id}
                className="cursor-pointer transition-colors hover:bg-muted/30"
                onClick={() => navigate({ name: "practice-session", id: session.id })}
              >
                <td className="px-4 py-3">
                  <p className="font-medium">{modeLabel[session.mode] ?? session.mode}</p>
                  <p className="text-xs text-muted-foreground">
                    {session.config.chapterSlug
                      ? `chapter ${session.config.chapterSlug}`
                      : session.config.courseSlug
                        ? `course ${session.config.courseSlug}`
                        : "mixed scope"}
                    {" · "}
                    {session.correct}/{session.total} correct
                  </p>
                </td>
                <td className="px-4 py-3 font-bold tabular-nums">
                  {session.scorePercent === null ? "—" : `${session.scorePercent}%`}
                </td>
                <td className="px-4 py-3">
                  {session.passed === true ? (
                    <Badge variant="outline" className="border-correct/30 bg-correct/15 text-correct">
                      passed
                    </Badge>
                  ) : session.passed === false ? (
                    <Badge variant="destructive">not yet</Badge>
                  ) : (
                    <span className="text-xs text-muted-foreground">practice</span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {session.completedAt ? new Date(session.completedAt).toLocaleDateString() : "—"}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`#/practice/s/${session.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Open report
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
