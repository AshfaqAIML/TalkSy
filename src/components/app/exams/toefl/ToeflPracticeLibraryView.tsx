"use client";

/**
 * TOEFL Practice Library hub (PROMPT 49 + PROMPT 50).
 *
 * One surface with three tabs: the searchable practice library (400 original
 * exercises and items across the current-format task types of all four
 * sections — 100 Reading, 100 Listening, 200 Writing exercises and 100
 * Speaking items — filterable by section, task, difficulty and focus), the
 * skills profile with weakness-driven recommendations for the active
 * section, and an overview of the library's coverage. Players open inline
 * from the library cards.
 */

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Headphones,
  Library,
  Sparkles,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ToeflReadingPlayer } from "./ToeflReadingPlayer";
import { ToeflListeningPlayer } from "./ToeflListeningPlayer";
import { ToeflWritingPlayer } from "./ToeflWritingPlayer";
import { ToeflSpeakingPlayer } from "./ToeflSpeakingPlayer";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";

type Card = {
  slug: string; title: string; taskType: string; taskLabel: string;
  difficulty: number; difficultyLabel: string; estimatedMinutes: number;
  topic?: string; focus?: string; focusLabel?: string; itemCount?: number;
  purpose?: string; recipient?: string; discipline?: string; wordBand?: { min: number; max: number };
  scene?: string; targetSkill?: string; learningMode?: boolean;
  windowSec?: number; wordCount?: number; accentLabel?: string; answerSec?: number;
};
type Rec = { slug: string; title: string; section?: string; taskType?: string; kind?: string; taskLabel?: string; difficulty: number; reason: string };
type Report = {
  attempts: number; accuracy?: number; repeatMeanAccuracy?: number;
  repeatAttempts?: number; repeatWithinWindowRate?: number;
  skills?: { skill: string; label: string; total: number; correct: number; accuracy: number }[];
  byTask?: { section: string; taskType: string; label: string; total: number; correct: number; accuracy: number }[];
  focusProfile?: { label: string; total: number; correct: number; accuracy: number }[];
  criteriaTrend?: { key: string; name: string; attempts: number; meanScore: number; lastScore: number | null }[];
  byTier?: { tier: number; attempts: number; meanAccuracy: number }[];
  recentAttempts: { id: string; exerciseSlug?: string; itemSlug?: string; section?: string; taskType?: string; kind?: string; correct: number; total: number; overall?: number; createdAt: string }[];
  recommendations: Rec[];
};

const TABS = [
  { id: "library", label: "Practice library", icon: Library },
  { id: "skills", label: "My skills", icon: BarChart3 },
  { id: "about", label: "About", icon: BookOpen },
] as const;

const SECTIONS = [
  { id: "reading", label: "Reading · 100" },
  { id: "listening", label: "Listening · 100" },
  { id: "writing", label: "Writing · 200" },
  { id: "speaking", label: "Speaking · 100" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export function ToeflPracticeLibraryView({ tab, slug, navigate }: { tab?: string; slug?: string; navigate: (r: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);
  const [active, setActive] = useState<"library" | "skills" | "about">(tab === "skills" ? "skills" : tab === "about" ? "about" : "library");
  const [cards, setCards] = useState<Record<SectionId, Card[] | null>>({ reading: null, listening: null, writing: null, speaking: null });
  const [report, setReport] = useState<Report | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(slug ?? null);
  const [section, setSection] = useState<SectionId>("reading");
  const [taskFilter, setTaskFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const [r, l, w, s] = await Promise.all([
        fetch("/api/exams/toefl/reading/bank").then((x) => x.json()),
        fetch("/api/exams/toefl/listening/bank").then((x) => x.json()),
        fetch("/api/exams/toefl/writing/bank").then((x) => x.json()),
        fetch("/api/exams/toefl/speaking/bank").then((x) => x.json()),
      ]);
      setCards({ reading: r.exercises, listening: l.exercises, writing: w.exercises, speaking: s.exercises });
    })();
  }, []);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const url = section === "writing"
        ? "/api/exams/toefl/writing/performance"
        : section === "speaking"
          ? "/api/exams/toefl/speaking/performance"
          : "/api/exams/toefl/library/performance";
      const res = await fetch(url);
      if (res.ok) setReport((await res.json()).report);
    })();
  }, [user, section, openSlug]);

  const list = useMemo(() => {
    let out = cards[section] ?? [];
    if (taskFilter) out = out.filter((c) => c.taskType === taskFilter);
    if (difficultyFilter) out = out.filter((c) => String(c.difficulty) === difficultyFilter);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      out = out.filter((c) =>
        [c.title, c.taskLabel, c.topic, c.focusLabel, c.recipient, c.discipline, c.scene].filter(Boolean).join(" ").toLowerCase().includes(q),
      );
    }
    return out;
  }, [section, cards, taskFilter, difficultyFilter, query]);

  const taskOptions = useMemo(() => {
    const all = cards[section] ?? [];
    const seen = new Map<string, string>();
    for (const c of all) if (!seen.has(c.taskType)) seen.set(c.taskType, c.taskLabel);
    return [...seen.entries()];
  }, [section, cards]);

  // An exercise is open: render the matching player.
  if (openSlug) {
    const player = openSlug.startsWith("toefl-rb") ? "reading"
      : openSlug.startsWith("toefl-lb") ? "listening"
        : openSlug.startsWith("toefl-wb") ? "writing" : "speaking";
    const onExit = () => { setOpenSlug(null); navigate({ name: "exams-toefl-library" }); };
    if (player === "reading") return <ToeflReadingPlayer slug={openSlug} onExit={onExit} />;
    if (player === "listening") return <ToeflListeningPlayer slug={openSlug} onExit={onExit} />;
    if (player === "writing") return <ToeflWritingPlayer slug={openSlug} onExit={onExit} />;
    return <ToeflSpeakingPlayer slug={openSlug} onExit={onExit} />;
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-700 dark:text-sky-300">
            <Headphones className="size-3.5" aria-hidden /> TOEFL PRACTICE LIBRARY
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Four hundred original exercises. Every task type of the current test.</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            One hundred Reading exercises and one hundred Listening exercises with locked transcripts; two hundred Writing
            exercises — Build a Sentence across five focuses, Write an Email across six purposes, and Academic Discussion
            boards; and one hundred Speaking items — Listen and Repeat with repetition analysis, and Take an Interview
            with AI-assisted feedback, all labelled educational estimates.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Tabs value={active} onValueChange={(v) => { setActive(v as typeof active); navigate({ name: "exams-toefl-library", tab: v }); }}>
          <TabsList>
            {TABS.map((t) => (
              <TabsTrigger key={t.id} value={t.id}><t.icon className="mr-1 size-4" aria-hidden />{t.label}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="library" className="space-y-4 pt-4">
            {report && report.recommendations.length > 0 && (
              <Card className="border-sky-200 bg-sky-50/50 dark:border-sky-900 dark:bg-sky-950/30">
                <CardContent className="space-y-2 pt-6">
                  <p className="flex items-center gap-2 text-sm font-semibold"><Sparkles className="size-4 text-sky-600" aria-hidden /> Targeted for you — {section}</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {report.recommendations.slice(0, 6).map((r) => (
                      <button key={r.slug} type="button" onClick={() => setOpenSlug(r.slug)}
                        className="rounded-lg border border-sky-200 bg-white p-3 text-left transition hover:border-sky-400 dark:border-sky-900 dark:bg-slate-900">
                        <p className="text-sm font-semibold">{r.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{r.taskLabel ?? r.taskType} · d{r.difficulty}</p>
                        <p className="mt-1 text-xs text-sky-700 dark:text-sky-400">{r.reason}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap rounded-lg border p-1 dark:border-slate-700">
                {SECTIONS.map((s) => (
                  <button key={s.id} type="button" onClick={() => { setSection(s.id); setTaskFilter(""); }}
                    className={cn("rounded-md px-3 py-1 text-sm font-medium capitalize transition",
                      section === s.id ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "text-slate-600 dark:text-slate-400")}>
                    {s.label}
                  </button>
                ))}
              </div>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search titles, topics, recipients…"
                aria-label="Search the library" className="w-56 rounded-md border border-input bg-transparent px-3 py-1.5 text-sm" />
              <select value={taskFilter} onChange={(e) => setTaskFilter(e.target.value)} aria-label="Task type" className="rounded-md border border-input bg-transparent px-2 py-1.5 text-sm">
                <option value="">All task types</option>
                {taskOptions.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} aria-label="Difficulty" className="rounded-md border border-input bg-transparent px-2 py-1.5 text-sm">
                <option value="">All difficulties</option>
                {[1, 2, 3, 4, 5].map((d) => <option key={d} value={d}>Difficulty {d}</option>)}
              </select>
              <span className="ml-auto text-sm text-slate-500">{list.length} exercises</span>
            </div>

            {cards[section] === null ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[0, 1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="h-28 rounded-xl" />)}</div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c, i) => (
                  <button key={c.slug} type="button" onClick={() => setOpenSlug(c.slug)}
                    className="card-interactive rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900"
                    style={{ "--stagger-i": i } as React.CSSProperties}>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{c.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {c.focusLabel ?? c.topic ?? c.recipient ?? c.discipline ?? c.scene ?? ""}
                      {"wordCount" in c && c.wordCount !== undefined ? ` · ${c.wordCount} words` : ""}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline">{c.taskLabel}</Badge>
                      <Badge variant="outline">d{c.difficulty}</Badge>
                      {"itemCount" in c && c.itemCount !== undefined && <Badge variant="outline">{c.itemCount} items</Badge>}
                      {"windowSec" in c && c.windowSec !== undefined && <Badge variant="outline">{c.windowSec}s window</Badge>}
                      {c.learningMode && <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">learning mode</Badge>}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="skills" className="space-y-4 pt-4">
            {!user ? (
              <Card><CardContent className="pt-6 text-center">
                <p className="text-slate-600 dark:text-slate-400">Log in to track your skills profile and get weakness-driven recommendations.</p>
                <Button className="mt-3" onClick={() => navigate({ name: "login" })}>Log in</Button>
              </CardContent></Card>
            ) : !report ? (
              <div className="space-y-3">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-16 rounded-xl" />)}</div>
            ) : (
              <>
                {section === "reading" || section === "listening" ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(report.skills ?? []).map((s) => (
                      <Card key={s.skill}>
                        <CardContent className="pt-6">
                          <div className="flex items-baseline justify-between">
                            <p className="font-semibold">{s.label}</p>
                            <p className="text-sm text-slate-500">{s.total > 0 ? `${Math.round(s.accuracy * 100)}% of ${s.total}` : "no data yet"}</p>
                          </div>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${s.total ? s.accuracy * 100 : 0}%` }} />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : section === "writing" ? (
                  <>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(report.focusProfile ?? []).map((f) => (
                        <Card key={f.label}>
                          <CardContent className="pt-6">
                            <div className="flex items-baseline justify-between">
                              <p className="font-semibold">{f.label}</p>
                              <p className="text-sm text-slate-500">{f.total > 0 ? `${Math.round(f.accuracy * 100)}% of ${f.total}` : "no data yet"}</p>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                              <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${f.total ? f.accuracy * 100 : 0}%` }} />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    {(report.criteriaTrend ?? []).length > 0 && (
                      <Card>
                        <CardContent className="space-y-2 pt-6">
                          <p className="font-semibold">Evaluated writing tasks — criteria (educational estimates)</p>
                          {(report.criteriaTrend ?? []).map((c) => (
                            <p key={c.key} className="text-sm text-slate-600 dark:text-slate-400">
                              {c.name}: mean {c.meanScore.toFixed(1)}/6 over {c.attempts} attempts{c.lastScore !== null ? ` · last ${c.lastScore.toFixed(1)}` : ""}
                            </p>
                          ))}
                        </CardContent>
                      </Card>
                    )}
                  </>
                ) : (
                  <>
                    <Card>
                      <CardContent className="space-y-2 pt-6">
                        <p className="font-semibold">Listen and Repeat</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Mean repetition accuracy: {report.repeatAttempts ? `${Math.round((report.repeatMeanAccuracy ?? 0) * 100)}% over ${report.repeatAttempts} attempts` : "no attempts yet"}
                          {report.repeatAttempts ? ` · inside the window ${Math.round((report.repeatWithinWindowRate ?? 0) * 100)}% of the time` : ""}
                        </p>
                        {(report.byTier ?? []).map((t) => (
                          <p key={t.tier} className="text-sm text-slate-600 dark:text-slate-400">Difficulty {t.tier}: {Math.round(t.meanAccuracy * 100)}% over {t.attempts} attempts</p>
                        ))}
                      </CardContent>
                    </Card>
                    {(report.criteriaTrend ?? []).length > 0 && (
                      <Card>
                        <CardContent className="space-y-2 pt-6">
                          <p className="font-semibold">Interview answers — criteria (educational estimates)</p>
                          {(report.criteriaTrend ?? []).map((c) => (
                            <p key={c.key} className="text-sm text-slate-600 dark:text-slate-400">
                              {c.name}: mean {c.meanScore.toFixed(1)}/6 over {c.attempts} attempts{c.lastScore !== null ? ` · last ${c.lastScore.toFixed(1)}` : ""}
                            </p>
                          ))}
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}
              </>
            )}
          </TabsContent>

          <TabsContent value="about" className="space-y-4 pt-4">
            <Card><CardContent className="space-y-3 pt-6">
              <p className="flex items-center gap-2 font-semibold"><BadgeCheck className="size-4 text-sky-600" aria-hidden /> What this library is</p>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                Four hundred original exercises and items written for the current TOEFL iBT format (in force since
                21 January 2026). Reading: Complete the Words, Read in Daily Life and Read an Academic Passage.
                Listening: all four task families with original recordings. Writing: Build a Sentence across word
                order, grammar, clause structure, completeness and punctuation; Write an Email across six purposes
                and twenty-three recipients; and Academic Discussion boards across nineteen disciplines. Speaking:
                Listen and Repeat with progressive difficulty and repetition windows, and Take an Interview with
                response-time guidance, sample answers and feedback criteria.
              </p>
              <p className="flex items-center gap-2 font-semibold"><Headphones className="size-4 text-sky-600" aria-hidden /> How the audio works</p>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                Every listening exercise and repeat sentence is an original recording authored as a script, spoken
                through your device's speech synthesis with accent-matched voices and natural pacing. Transcripts
                stay hidden until you submit — exactly like the test — except in designated foundation learning
                exercises, where reading along is the point. Your own speaking recordings never leave the browser:
                you transcribe what you said, and the engine reads the transcript.
              </p>
              <p className="flex items-center gap-2 font-semibold"><Target className="size-4 text-sky-600" aria-hidden /> AI evaluation — honest labels</p>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                Email, discussion and interview responses are measured by a deterministic engine first (length, key
                points, register, pace, fillers), with an optional AI coaching layer that adds strengths,
                weaknesses, error spotting and an improved example of your own response. Every automated score is
                an educational estimate produced by TalkSy's practice engine — none of it is an official ETS score,
                and nothing here replicates or promises ETS scoring.
              </p>
              <p className="flex items-center gap-2 font-semibold"><CheckCircle2 className="size-4 text-sky-600" aria-hidden /> Originality</p>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                All scenarios, sentences, questions, model responses and sample answers are original TalkSy practice
                material written in the style of the test — never official ETS examination content. The bank is
                machine-checked for integrity: solvability, rubric honesty, teaching depth, substance and
                cross-exercise originality.
              </p>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
