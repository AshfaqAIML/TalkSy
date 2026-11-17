"use client";

/**
 * IELTS Writing Masterclass — the academy hub (PROMPT 46).
 *
 * #/exams/ielts/writing with four tabs:
 *   Overview        — what the academy teaches, the four separated channels,
 *                     honest links into the curriculum courses
 *   Task library    — the twenty-five original assignments (Part E): 8
 *                     Academic Task 1 visuals, 7 Academic Task 2 essay
 *                     families, 6 GT letters (all purposes × registers) and
 *                     4 GT everyday essays — with channel and task-type
 *                     filters
 *   Writing studio  — deep link target: one task, the full timed/untimed
 *                     writing lifecycle (Part F) with drafts, submission,
 *                     feedback (Part G), revision and history
 *   My performance  — the writing analytics (Part F/G): per-criterion band
 *                     averages, family weaknesses, word-count and clock
 *                     discipline, revision chains, lesson recommendations
 */

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { examApi } from "@/lib/client/exam-api";
import type { WritingPerformanceReport } from "@/lib/exams/writing-bank/performance";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import { AlertTriangle, ArrowRight, BookOpen, ChevronRight, GraduationCap, Library, LineChart, PenLine, RotateCcw, Timer } from "lucide-react";
import { TaskStudio } from "./TaskStudio";

type TabId = "overview" | "library" | "performance";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "library", label: "Task library" },
  { id: "performance", label: "My performance" },
];

type TaskCard = {
  slug: string;
  title: string;
  channel: "academic" | "gt";
  taskType: "task-1" | "task-2";
  family: string;
  register?: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  wordMinimum: number;
  timeLimitSec: number;
  hasVisual: boolean;
  hasLevelSamples: boolean;
  source: string;
};

const FAMILY_LABELS: Record<string, string> = {
  bar: "Bar chart", line: "Line graph", pie: "Pie chart", table: "Table", mixed: "Mixed charts",
  process: "Process diagram", map: "Map",
  opinion: "Opinion essay", discussion: "Discussion essay", "advantages-disadvantages": "Advantages and disadvantages",
  "problem-solution": "Problem and solution", "cause-effect": "Cause and effect", "two-part": "Two-part question",
  "direct-questions": "Direct questions",
  complaint: "Complaint letter", request: "Request letter", invitation: "Invitation letter",
  apology: "Apology letter", explanation: "Explanation letter", suggestion: "Suggestion letter",
};

const DIFFICULTY_TINT: Record<number, string> = {
  1: "border-emerald-500/40 text-emerald-300",
  2: "border-emerald-500/40 text-emerald-300",
  3: "border-cyan-500/40 text-cyan-300",
  4: "border-amber-500/40 text-amber-300",
  5: "border-rose-500/40 text-rose-300",
};

export function WritingMasterclassView({
  tab,
  slug,
  navigate,
}: {
  tab?: string;
  slug?: string;
  navigate: (route: AppRoute) => void;
}) {
  const activeTab = TABS.some((t) => t.id === tab) ? (tab as TabId) : "overview";
  const user = useAppStore((s) => s.user);
  const go = (next: { tab?: string; slug?: string }) =>
    navigate(next.slug ? { name: "exams-writing", tab: next.tab, slug: next.slug } : { name: "exams-writing", tab: next.tab });

  // The studio deep link: #/exams/ielts/writing/studio/<slug>
  if (tab === "studio" && slug) {
    return <TaskStudio slug={slug} navigate={navigate} />;
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      {/* Hero */}
      <div>
        <Badge variant="outline" className="border-violet-500/40 text-violet-300">IELTS · Writing</Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Four channels, twenty-five original tasks, one writing studio — the complete Writing academy.
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          The Writing Masterclass separates Academic Task 1, Academic Task 2, General Training Task 1 and General Training
          Task 2 completely: eleven foundation crafts, every visual family and every essay family taught on a ten-point
          structure, the full letter course — and a studio with timed and untimed writing, autosaved drafts, four-criterion
          feedback, revisions and history. All band numbers are educational estimates, honestly labelled.
        </p>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Writing masterclass sections" className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={activeTab === t.id}
            onClick={() => go({ tab: t.id })}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === t.id ? "bg-violet-500/15 text-violet-200 ring-1 ring-violet-500/40" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" ? <OverviewTab go={go} navigate={navigate} /> : null}
      {activeTab === "library" ? <LibraryTab go={go} /> : null}
      {activeTab === "performance" ? <PerformanceTab navigate={navigate} loggedIn={Boolean(user)} /> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------

function OverviewTab({ go, navigate }: { go: (next: { tab?: string; slug?: string }) => void; navigate: (route: AppRoute) => void }) {
  const channels = [
    {
      title: "Academic Task 1 — the visual report",
      body: "Twenty minutes, 150+ words, no opinions. One masterclass lesson per family — bar, line, pie, table, mixed, process, map — each on the ten-component method from analysing the visual to avoiding irrelevant data.",
      lessons: "18 lessons",
      count: "8 studio tasks",
    },
    {
      title: "Academic Task 2 — the essay that decides the band",
      body: "Forty minutes, 250+ words, double weight. The seven essay families — opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part, direct questions — plus the assessment lessons.",
      lessons: "9 lessons",
      count: "7 studio tasks",
    },
    {
      title: "General Training Task 1 — the letter",
      body: "Three registers, six purposes: formal, semi-formal and informal letters; complaints, requests, invitations, apologies, explanations and suggestions — plus the cross-cutting crafts of tone and organisation.",
      lessons: "22 lessons",
      count: "6 studio tasks",
    },
    {
      title: "General Training Task 2 — the everyday essay",
      body: "The same seven families on everyday topics in a semi-formal register, authored fresh for the GT track, closing with the assessment lesson on the GT criteria.",
      lessons: "8 lessons",
      count: "4 studio tasks",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {channels.map((c) => (
          <Card key={c.title} className="border-slate-700/70 bg-slate-900/60">
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-white">{c.title}</h3>
                <Badge variant="outline" className="border-violet-500/30 text-[10px] text-violet-300">{c.lessons}</Badge>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{c.body}</p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                <PenLine className="h-3.5 w-3.5 text-violet-300" /> {c.count} in the studio library
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5 text-center">
            <Timer className="mx-auto h-6 w-6 text-violet-300" />
            <p className="mt-2 text-sm font-semibold text-white">Timed and untimed writing</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">The official 20/40-minute clocks with auto-submit, or a stopwatch for study writing — drafts autosave throughout.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5 text-center">
            <LineChart className="mx-auto h-6 w-6 text-violet-300" />
            <p className="mt-2 text-sm font-semibold text-white">Four-criterion feedback</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Task Achievement (Task 1) or Task Response (Task 2), Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy — detailed per criterion.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5 text-center">
            <RotateCcw className="mx-auto h-6 w-6 text-violet-300" />
            <p className="mt-2 text-sm font-semibold text-white">Revision and history</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Every attempt is versioned; revise from your previous text and watch each criterion move across versions.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button className="bg-violet-600 hover:bg-violet-500" onClick={() => go({ tab: "library" })}>
          Browse the task library <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={() => navigate({ name: "exams-course", examKey: "IELTS", variant: "academic" })}>
          <BookOpen className="mr-2 h-4 w-4" /> Academic Writing course
        </Button>
        <Button variant="outline" onClick={() => navigate({ name: "exams-course", examKey: "IELTS", variant: "general-training" })}>
          <BookOpen className="mr-2 h-4 w-4" /> General Training Writing course
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Library
// ---------------------------------------------------------------------------

function LibraryTab({ go }: { go: (next: { tab?: string; slug?: string }) => void }) {
  const [tasks, setTasks] = useState<TaskCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [channel, setChannel] = useState<"all" | "academic" | "gt">("all");
  const [taskType, setTaskType] = useState<"all" | "task-1" | "task-2">("all");

  useEffect(() => {
    examApi
      .writingBank()
      .then((res) => {
        if (res.ok) setTasks(res.data.tasks);
        else setError(res.error);
      })
      .catch((e: Error) => setError(e.message || "Could not load the library."));
  }, []);

  if (error) return <p className="text-sm text-rose-300">{error}</p>;
  if (!tasks) return <p className="text-sm text-slate-400">Loading the library…</p>;

  const filtered = tasks.filter(
    (t) => (channel === "all" || t.channel === channel) && (taskType === "all" || t.taskType === taskType),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {([["all", "Both channels"], ["academic", "Academic"], ["gt", "General Training"]] as const).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setChannel(id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              channel === id ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
        <span className="mx-1 h-6 w-px bg-slate-700" />
        {([["all", "Both tasks"], ["task-1", "Task 1"], ["task-2", "Task 2"]] as const).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTaskType(id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              taskType === id ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((t) => (
          <Card key={t.slug} className="group border-slate-700/70 bg-slate-900/60 transition-colors hover:border-violet-500/50">
            <CardContent className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className={`text-[10px] ${t.channel === "academic" ? "border-cyan-500/40 text-cyan-300" : "border-amber-500/40 text-amber-300"}`}>
                  {t.channel === "academic" ? "Academic" : "GT"}
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-[10px] text-slate-400">
                  Task {t.taskType === "task-1" ? "1" : "2"} · {FAMILY_LABELS[t.family] ?? t.family}
                </Badge>
                {t.register ? <Badge variant="outline" className="border-slate-600 text-[10px] text-slate-400">{t.register}</Badge> : null}
                <Badge variant="outline" className={`text-[10px] ${DIFFICULTY_TINT[t.difficulty]}`}>{t.difficultyLabel}</Badge>
              </div>
              <h3 className="mt-2.5 text-sm font-bold leading-snug text-white">{t.title}</h3>
              <p className="mt-1.5 text-[11px] text-slate-500">
                {t.estimatedMinutes} min · {t.wordMinimum}+ words{t.hasVisual ? " · visual provided" : ""}{t.hasLevelSamples ? " · level samples" : ""}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full group-hover:border-violet-500/50 group-hover:text-violet-200"
                onClick={() => go({ tab: "studio", slug: t.slug })}
              >
                Open in the studio <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-[11px] text-slate-600">
        All tasks are original practice material written in the style of the test — never official IELTS examination content.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Performance
// ---------------------------------------------------------------------------

function PerformanceTab({ navigate, loggedIn }: { navigate: (route: AppRoute) => void; loggedIn: boolean }) {
  const [report, setReport] = useState<WritingPerformanceReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loggedIn) return;
    examApi
      .writingPerformance()
      .then((res) => {
        if (res.ok) setReport(res.data.report);
        else setError(res.error);
      })
      .catch((e: Error) => setError(e.message || "Could not load your analytics."));
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <Card className="border-slate-700/70 bg-slate-900/60">
        <CardContent className="p-8 text-center">
          <LineChart className="mx-auto h-8 w-8 text-slate-500" />
          <p className="mt-3 text-sm font-semibold text-white">Your writing analytics live here</p>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-400">
            Submit studio tasks and this dashboard fills with per-criterion band averages, family weaknesses, word-count and
            clock discipline, revision chains, and lesson recommendations derived from your actual attempts.
          </p>
          <Button className="mt-4" onClick={() => navigate({ name: "login" })}>Log in</Button>
        </CardContent>
      </Card>
    );
  }

  if (error) return <p className="text-sm text-rose-300">{error}</p>;
  if (!report) return <p className="text-sm text-slate-400">Loading your analytics…</p>;

  if (report.attempts === 0) {
    return (
      <Card className="border-slate-700/70 bg-slate-900/60">
        <CardContent className="p-8 text-center">
          <PenLine className="mx-auto h-8 w-8 text-slate-500" />
          <p className="mt-3 text-sm font-semibold text-white">No writing attempts yet</p>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-400">
            Write your first task in the studio — the feedback report arrives immediately and this dashboard builds from it.
          </p>
          <Button className="mt-4 bg-violet-600 hover:bg-violet-500" onClick={() => navigate({ name: "exams-writing", tab: "library" })}>
            Open the task library
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold tabular-nums text-white">{report.attempts}</p>
            <p className="mt-1 text-[11px] text-slate-500">attempts</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold tabular-nums text-violet-200">{report.overallAvg.toFixed(1)}</p>
            <p className="mt-1 text-[11px] text-slate-500">avg band estimate</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4 text-center">
            <p className={`text-2xl font-bold tabular-nums ${report.underLengthRate > 0 ? "text-amber-300" : "text-emerald-300"}`}>{Math.round(report.underLengthRate * 100)}%</p>
            <p className="mt-1 text-[11px] text-slate-500">under length</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold tabular-nums text-white">{report.wordsWritten.toLocaleString()}</p>
            <p className="mt-1 text-[11px] text-slate-500">words written</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-700/70 bg-slate-900/60">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold text-white">Per-criterion averages (educational estimates)</h3>
          <div className="mt-4 space-y-3">
            {report.criterionAvg.map((c) => (
              <div key={c.key}>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{c.label}</span>
                  <span className="font-semibold tabular-nums text-violet-200">{c.avg !== null ? c.avg.toFixed(1) : "—"}<span className="text-slate-500">/9</span></span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400" style={{ width: `${((c.avg ?? 0) / 9) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {report.recommendations.length > 0 ? (
        <Card className="border-violet-500/30 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-white"><GraduationCap className="h-4 w-4 text-violet-300" /> Lessons recommended from your attempts</h3>
            <ul className="mt-3 space-y-2.5">
              {report.recommendations.map((r) => (
                <li key={r.lessonSlug} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-violet-200">{r.lessonTitle}</span>
                    <Badge variant="outline" className={`text-[10px] ${r.severity === "high" ? "border-rose-500/40 text-rose-300" : r.severity === "medium" ? "border-amber-500/40 text-amber-300" : "border-slate-600 text-slate-400"}`}>
                      {r.severity} priority
                    </Badge>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{r.reason}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {report.byFamily.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="text-sm font-bold text-white">By task family</h3>
            <ul className="mt-3 space-y-1.5">
              {report.byFamily.map((f) => (
                <li key={f.family} className="flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-xs">
                  <span className="text-slate-300">{f.label}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-slate-500">{f.attempts} attempt{f.attempts === 1 ? "" : "s"}</span>
                    <span className={`font-bold tabular-nums ${f.avg < 6 ? "text-amber-300" : "text-violet-200"}`}>{f.avg.toFixed(1)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {report.revisionChains.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="text-sm font-bold text-white">Revision chains</h3>
            <ul className="mt-3 space-y-2">
              {report.revisionChains.map((c) => (
                <li key={c.taskSlug} className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2.5 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-slate-400">{c.taskSlug}</span>
                    <span className={`font-bold ${c.improved ? "text-emerald-300" : "text-amber-300"}`}>
                      {c.delta >= 0 ? "+" : ""}{c.delta.toFixed(1)} across {c.versions.length} versions
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {c.versions.map((v) => (
                      <span key={v.version} className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[10px] tabular-nums text-slate-400">
                        v{v.version}: {v.overall.toFixed(1)}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {report.underLengthRate > 0 || report.rushedRate > 0 ? (
        <Card className="border-amber-500/30 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-white"><AlertTriangle className="h-4 w-4 text-amber-300" /> Discipline watch</h3>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              {report.underLengthRate > 0 ? <li>{report.underLengthAttempts} attempt(s) sat under the official word floor — a mechanical penalty no quality can offset.</li> : null}
              {report.rushedRate > 0 ? <li>{Math.round(report.rushedRate * 100)}% of timed attempts used under 60% of the official clock — the checking minutes are where bands move.</li> : null}
              {report.overTimeRate > 0 ? <li>{Math.round(report.overTimeRate * 100)}% of timed attempts ran past the official clock.</li> : null}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {report.recentAttempts.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="text-sm font-bold text-white">Recent attempts</h3>
            <ul className="mt-3 space-y-1.5">
              {report.recentAttempts.map((a) => (
                <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-xs">
                  <span className="font-mono text-[11px] text-slate-400">{a.id.slice(-8)}</span>
                  <span className="text-slate-500">{a.wordCount} words · {a.mode === "exam" ? "timed" : "untimed"}</span>
                  <span className="font-bold text-violet-300">{a.overall.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
