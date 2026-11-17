"use client";

/**
 * IELTS Speaking Masterclass — the academy hub (PROMPT 47).
 *
 * #/exams/ielts/speaking with four tabs:
 *   Overview          — what the academy teaches across the six chapters,
 *                       the honest accent-neutral frame, links into the
 *                       curriculum course
 *   Practice library  — the fifty-one original items (Part 8): 19 Part 1
 *                       interview rounds, 11 flagship cue cards, 11 practice
 *                       cue cards and 10 Part 3 discussion sets — filterable
 *                       by part, topic, difficulty, proficiency and skill
 *   Simulator         — the three-part speaking simulation (Part 6): question
 *                       presentation, preparation timer, recording, replay,
 *                       transcription, response history and criterion-based
 *                       feedback; also the deep link target for single-item
 *                       practice
 *   My performance    — the speaking analytics (Parts 6–7): per-criterion
 *                       band averages, part and topic spread, fluency
 *                       discipline, revision chains and lesson
 *                       recommendations derived from actual attempts
 */

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { examApi } from "@/lib/client/exam-api";
import type { SafeSpeakingItem } from "@/lib/exams/speaking-bank/service";
import type { SpeakingPerformanceReport } from "@/lib/exams/speaking-bank/performance";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import {
  AlertTriangle, ArrowRight, BookOpen, ChevronRight, GraduationCap, Languages, Library,
  LineChart, Mic, Radio, Timer,
} from "lucide-react";
import { SpeakingItemRun, SpeakingSimulator } from "./SpeakingSimulator";

type TabId = "overview" | "library" | "simulator" | "performance";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "library", label: "Practice library" },
  { id: "simulator", label: "Simulator" },
  { id: "performance", label: "My performance" },
];

type ItemCard = {
  slug: string;
  title: string;
  kind: "part1" | "cue-card" | "practice-cue-card" | "part3";
  part: 1 | 2 | 3;
  family: string;
  difficulty: number;
  difficultyLabel: string;
  proficiency: string;
  skill: string;
  skillLabel: string;
  questionCount?: number;
  estimatedMinutes: number;
  source: string;
};

const KIND_LABELS: Record<ItemCard["kind"], string> = {
  part1: "Part 1 · interview round",
  "cue-card": "Part 2 · flagship cue card",
  "practice-cue-card": "Part 2 · practice cue card",
  part3: "Part 3 · discussion set",
};

const DIFFICULTY_TINT: Record<number, string> = {
  1: "border-emerald-500/40 text-emerald-300",
  2: "border-emerald-500/40 text-emerald-300",
  3: "border-cyan-500/40 text-cyan-300",
  4: "border-amber-500/40 text-amber-300",
  5: "border-rose-500/40 text-rose-300",
};

const PROFICIENCY_TINT: Record<string, string> = {
  foundation: "border-emerald-500/30 text-emerald-300",
  intermediate: "border-cyan-500/30 text-cyan-300",
  advanced: "border-amber-500/30 text-amber-300",
};

function formatClock(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.max(0, sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function SpeakingMasterclassView({
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
    navigate(next.slug ? { name: "exams-speaking", tab: next.tab, slug: next.slug } : { name: "exams-speaking", tab: next.tab });

  // Practice deep link: #/exams/ielts/speaking/practice/<slug>
  if (tab === "practice" && slug) {
    return <SingleItemPractice slug={slug} navigate={navigate} />;
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      {/* Hero */}
      <div>
        <Badge variant="outline" className="border-teal-500/40 text-teal-300">IELTS · Speaking</Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Three parts, sixty-nine lessons, a live simulator — the complete Speaking academy.
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          The Speaking Masterclass teaches all three parts end to end: the ten foundations, the nineteen Part 1 topic sets,
          the eight-step cue-card craft with all eleven description families, the eleven discussion skills, and the
          accent-neutral pronunciation programme — then puts you in front of a realistic three-part simulator with recording,
          replay and criterion-based feedback. Taught as ideas and language, never scripts; and no accent is worth more
          than another — the criterion rewards being easy to understand.
        </p>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Speaking masterclass sections" className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={activeTab === t.id}
            onClick={() => go({ tab: t.id })}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === t.id ? "bg-teal-500/15 text-teal-200 ring-1 ring-teal-500/40" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" ? <OverviewTab go={go} navigate={navigate} /> : null}
      {activeTab === "library" ? <LibraryTab go={go} /> : null}
      {activeTab === "simulator" ? <SpeakingSimulator navigate={navigate} goPractice={(s) => go({ tab: "practice", slug: s })} /> : null}
      {activeTab === "performance" ? <PerformanceTab navigate={navigate} loggedIn={Boolean(user)} /> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Single-item practice (deep link from the library)
// ---------------------------------------------------------------------------

function SingleItemPractice({ slug, navigate }: { slug: string; navigate: (route: AppRoute) => void }) {
  const [item, setItem] = useState<SafeSpeakingItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    examApi.speakingItem(slug).then((res) => {
      if (res.ok) setItem(res.data.item);
      else setError(res.error);
    }).catch((e: Error) => setError(e.message || "Could not load this item."));
  }, [slug]);

  if (error) return <p className="text-sm text-rose-300">{error}</p>;
  if (!item) return <p className="text-sm text-slate-400">Loading your practice item…</p>;

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Badge variant="outline" className="border-teal-500/40 text-teal-300">Practice · Part {item.part}</Badge>
          <h1 className="mt-2 text-2xl font-bold text-white">{item.title}</h1>
          <p className="mt-1 text-xs text-slate-500">
            {item.topicLabel} · {item.difficultyLabel} · {item.proficiency} · trains {item.skillLabel.toLowerCase()}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate({ name: "exams-speaking", tab: "library" })}>
          <Library className="mr-2 h-4 w-4" /> Back to the library
        </Button>
      </div>
      <SpeakingItemRun item={item} mode="practice" navigate={navigate} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------

function OverviewTab({ go, navigate }: { go: (next: { tab?: string; slug?: string }) => void; navigate: (route: AppRoute) => void }) {
  const chapters = [
    {
      title: "Speaking foundations — the ten crafts",
      body: "The examination format, what the examiner assesses, answer development, natural fluency, avoiding memorised responses, pronunciation as a criterion, vocabulary, grammar in speech, extending answers naturally, handling unfamiliar questions.",
      lessons: "10 lessons",
      count: "the base under every part",
    },
    {
      title: "Part 1 — the nineteen topic sets",
      body: "Introduction, work, study, hometown, accommodation, family, friends, hobbies, food, travel, technology, education, daily routines, shopping, weather, books, music, sports and social activities — question patterns, development, vocabulary, natural expressions, weak-versus-improved pairs.",
      lessons: "19 lessons",
      count: "19 interview rounds in the library",
    },
    {
      title: "Part 2 — the cue-card craft and the eleven families",
      body: "Understanding cue cards, key requirements, the one-minute preparation, note-taking, organising, continuity, speaking at length, unfamiliar topics — then one complete worked cue card per family: people, places, events, experiences, objects, activities, achievements, books, films, travel, learning.",
      lessons: "19 lessons",
      count: "22 cue cards in the library",
    },
    {
      title: "Part 3 and Pronunciation",
      body: "The eleven discussion skills — abstract discussion, opinions, reasons, comparing, evaluating, speculating, social changes, future possibilities, supporting arguments, nuance — plus the ten-lesson accent-neutral pronunciation programme.",
      lessons: "21 lessons",
      count: "10 discussion sets in the library",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {chapters.map((c) => (
          <Card key={c.title} className="border-slate-700/70 bg-slate-900/60">
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-white">{c.title}</h3>
                <Badge variant="outline" className="border-teal-500/30 text-[10px] text-teal-300">{c.lessons}</Badge>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{c.body}</p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                <Mic className="h-3.5 w-3.5 text-teal-300" /> {c.count}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5 text-center">
            <Radio className="mx-auto h-6 w-6 text-teal-300" />
            <p className="mt-2 text-sm font-semibold text-white">A realistic three-part simulation</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Examiner scripts, the timed one-minute preparation, recording and replay — your audio never leaves the browser.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5 text-center">
            <LineChart className="mx-auto h-6 w-6 text-teal-300" />
            <p className="mt-2 text-sm font-semibold text-white">Four-criterion feedback</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation — with sentence corrections, vocabulary suggestions and replay checks. Educational estimates, clearly labelled.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5 text-center">
            <Languages className="mx-auto h-6 w-6 text-teal-300" />
            <p className="mt-2 text-sm font-semibold text-white">Accent-neutral, always</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">No national accent is treated as worth more than another — intelligibility is what the criterion rewards, and that is what the academy trains.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button className="bg-teal-600 hover:bg-teal-500" onClick={() => go({ tab: "simulator" })}>
          Run the simulator <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={() => go({ tab: "library" })}>
          <Library className="mr-2 h-4 w-4" /> Browse the practice library
        </Button>
        <Button variant="outline" onClick={() => navigate({ name: "exams-course", examKey: "IELTS", variant: "academic" })}>
          <BookOpen className="mr-2 h-4 w-4" /> The Speaking course (core programme)
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Practice library (Part 8 — five dimensions)
// ---------------------------------------------------------------------------

function LibraryTab({ go }: { go: (next: { tab?: string; slug?: string }) => void }) {
  const [items, setItems] = useState<ItemCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [part, setPart] = useState<"all" | 1 | 2 | 3>("all");
  const [proficiency, setProficiency] = useState<"all" | "foundation" | "intermediate" | "advanced">("all");
  const [skill, setSkill] = useState<string>("all");

  useEffect(() => {
    examApi.speakingBank().then((res) => {
      if (res.ok) setItems(res.data.items);
      else setError(res.error);
    }).catch((e: Error) => setError(e.message || "Could not load the library."));
  }, []);

  if (error) return <p className="text-sm text-rose-300">{error}</p>;
  if (!items) return <p className="text-sm text-slate-400">Loading the library…</p>;

  const skills = ["all", ...new Set(items.map((i) => i.skill))];
  const filtered = items.filter(
    (i) =>
      (part === "all" || i.part === part) &&
      (proficiency === "all" || i.proficiency === proficiency) &&
      (skill === "all" || i.skill === skill),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {([["all", "All parts"], [1, "Part 1"], [2, "Part 2"], [3, "Part 3"]] as const).map(([id, label]) => (
          <button
            key={String(id)}
            onClick={() => setPart(id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              part === id ? "border-teal-500/50 bg-teal-500/15 text-teal-200" : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
        <span className="mx-1 h-6 w-px bg-slate-700" />
        {(["all", "foundation", "intermediate", "advanced"] as const).map((id) => (
          <button
            key={id}
            onClick={() => setProficiency(id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize transition-colors ${
              proficiency === id ? "border-teal-500/50 bg-teal-500/15 text-teal-200" : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            {id === "all" ? "Any level" : id}
          </button>
        ))}
        <span className="mx-1 h-6 w-px bg-slate-700" />
        {skills.map((s) => (
          <button
            key={s}
            onClick={() => setSkill(s)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              skill === s ? "border-teal-500/50 bg-teal-500/15 text-teal-200" : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            {s === "all" ? "Any skill" : s}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-500">{filtered.length} of {items.length} items — every question, card and model is original practice material, and difficulty is marked on each card.</p>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((t) => (
          <Card key={t.slug} className="group border-slate-700/70 bg-slate-900/60 transition-colors hover:border-teal-500/50">
            <CardContent className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-teal-500/40 text-[10px] text-teal-300">{KIND_LABELS[t.kind]}</Badge>
                <Badge variant="outline" className={`text-[10px] ${DIFFICULTY_TINT[t.difficulty]}`}>difficulty {t.difficulty} · {t.difficultyLabel}</Badge>
                <Badge variant="outline" className={`text-[10px] ${PROFICIENCY_TINT[t.proficiency] ?? "border-slate-600 text-slate-400"}`}>{t.proficiency}</Badge>
              </div>
              <h3 className="mt-2.5 text-sm font-bold leading-snug text-white">{t.title}</h3>
              <p className="mt-1.5 text-[11px] text-slate-500">
                {t.family.replace(/-/g, " ")} · ~{t.estimatedMinutes} min{t.questionCount ? ` · ${t.questionCount} questions` : " · 1–2 min talk"} · trains {t.skillLabel.toLowerCase()}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full group-hover:border-teal-500/50 group-hover:text-teal-200"
                onClick={() => go({ tab: "practice", slug: t.slug })}
              >
                Practise this <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-[11px] text-slate-600">
        All items are original practice material written in the style of the test — never official IELTS examination content.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Performance
// ---------------------------------------------------------------------------

function PerformanceTab({ navigate, loggedIn }: { navigate: (route: AppRoute) => void; loggedIn: boolean }) {
  const [report, setReport] = useState<SpeakingPerformanceReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loggedIn) return;
    examApi.speakingPerformance().then((res) => {
      if (res.ok) setReport(res.data.report);
      else setError(res.error);
    }).catch((e: Error) => setError(e.message || "Could not load your analytics."));
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <Card className="border-slate-700/70 bg-slate-900/60">
        <CardContent className="p-8 text-center">
          <LineChart className="mx-auto h-8 w-8 text-slate-500" />
          <p className="mt-3 text-sm font-semibold text-white">Your speaking analytics live here</p>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-400">
            Submit simulator runs or practice items and this dashboard fills with per-criterion band averages, part and topic
            spread, fluency discipline, revision chains and lesson recommendations derived from your actual attempts.
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
          <Mic className="mx-auto h-8 w-8 text-slate-500" />
          <p className="mt-3 text-sm font-semibold text-white">No speaking attempts yet</p>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-400">
            Run the three-part simulator or practise a single item — the feedback report arrives immediately and this
            dashboard builds from it.
          </p>
          <Button className="mt-4 bg-teal-600 hover:bg-teal-500" onClick={() => navigate({ name: "exams-speaking", tab: "simulator" })}>
            Open the simulator
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
            <p className="text-2xl font-bold tabular-nums text-teal-200">{report.overallAvg.toFixed(1)}</p>
            <p className="mt-1 text-[11px] text-slate-500">avg band estimate</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold tabular-nums text-white">{report.wordsSpoken.toLocaleString()}</p>
            <p className="mt-1 text-[11px] text-slate-500">words spoken</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold tabular-nums text-white">{formatClock(report.totalSpeakingSec)}</p>
            <p className="mt-1 text-[11px] text-slate-500">speaking time</p>
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
                  <span className="font-semibold tabular-nums text-teal-200">{c.avg !== null ? c.avg.toFixed(1) : "—"}<span className="text-slate-500">/9</span></span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400" style={{ width: `${((c.avg ?? 0) / 9) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-3 md:grid-cols-2">
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="text-sm font-bold text-white">By part</h3>
            <ul className="mt-3 space-y-1.5">
              {report.byPart.map((p) => (
                <li key={p.part} className="flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-xs">
                  <span className="text-slate-300">Part {p.part} — {p.part === 1 ? "interview" : p.part === 2 ? "long turn" : "discussion"}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-slate-500">{p.attempts} attempt{p.attempts === 1 ? "" : "s"}</span>
                    <span className={`font-bold tabular-nums ${p.avg < 6 ? "text-amber-300" : "text-teal-200"}`}>{p.avg > 0 ? p.avg.toFixed(1) : "—"}</span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="text-sm font-bold text-white">By topic or family</h3>
            <ul className="mt-3 space-y-1.5">
              {report.byFamily.map((f) => (
                <li key={f.family} className="flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-xs">
                  <span className="capitalize text-slate-300">{f.family.replace(/-/g, " ")}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-slate-500">{f.attempts}</span>
                    <span className={`font-bold tabular-nums ${f.avg < 6 ? "text-amber-300" : "text-teal-200"}`}>{f.avg > 0 ? f.avg.toFixed(1) : "—"}</span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {report.recommendations.length > 0 ? (
        <Card className="border-teal-500/30 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-white"><GraduationCap className="h-4 w-4 text-teal-300" /> Lessons recommended from your attempts</h3>
            <ul className="mt-3 space-y-2.5">
              {report.recommendations.map((r) => (
                <li key={r.lessonSlug} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      className="text-xs font-bold text-teal-200 hover:underline"
                      onClick={() => navigate({ name: "lesson", slug: r.lessonSlug })}
                    >
                      {r.lessonTitle}
                    </button>
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

      {report.revisionChains.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="text-sm font-bold text-white">Re-attempt chains</h3>
            <ul className="mt-3 space-y-2">
              {report.revisionChains.map((c) => (
                <li key={c.itemSlug} className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2.5 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-slate-400">{c.itemSlug}</span>
                    <span className={`font-bold ${c.improved ? "text-emerald-300" : "text-amber-300"}`}>
                      {c.delta >= 0 ? "+" : ""}{c.delta.toFixed(1)} across {c.versions.length} attempts
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

      {report.shortTurnRate > 0 || report.offPaceRate > 0 ? (
        <Card className="border-amber-500/30 bg-slate-900/60">
          <CardContent className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-white"><AlertTriangle className="h-4 w-4 text-amber-300" /> Fluency discipline watch</h3>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              {report.shortTurnRate > 0 ? <li>{report.shortTurns} Part 2 long turn(s) stopped before the one-minute mark — stopping early starves every criterion.</li> : null}
              {report.offPaceRate > 0 ? <li>{Math.round(report.offPaceRate * 100)}% of attempts sit outside the natural pace band (roughly 90–170 wpm; you average {Math.round(report.avgWpm)}).</li> : null}
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
                  <span className="text-slate-400">Part {a.part} · v{a.version} · {a.mode === "simulation" ? "simulation" : "practice"}</span>
                  <span className="text-slate-500">{a.wordCount} words · {formatClock(a.durationSec)} · {Math.round(a.wpm)} wpm</span>
                  <span className="font-bold text-teal-300">{a.overall > 0 ? a.overall.toFixed(1) : "—"}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
