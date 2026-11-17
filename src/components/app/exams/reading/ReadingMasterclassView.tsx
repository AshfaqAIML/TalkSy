"use client";

/**
 * IELTS Reading Masterclass — the academy hub (PROMPT 45).
 *
 * #/exams/ielts/reading with four tabs:
 *   Overview        — what the academy teaches, both pathways, honest links
 *   Passage library — the eighteen original passages (Part D) with variant
 *                     and section filters (Academic / General Training)
 *   Timed practice  — per-passage timed runs + the three full simulations
 *                     (Part E)
 *   My performance  — the mistake analytics and lesson recommendations,
 *                     with past-attempt review deep links (Part F)
 */

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { examApi } from "@/lib/client/exam-api";
import type { ReadingPerformanceReport } from "@/lib/exams/reading-bank/performance";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import { BookOpen, ChevronRight, GraduationCap, Library, LineChart, Lock, RefreshCcw, RotateCcw, Timer } from "lucide-react";
import { PastAttemptReview, ReadingExercisePlayer, type SimConfig } from "./ReadingExercisePlayer";

type TabId = "overview" | "library" | "practice" | "performance";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "library", label: "Passage library" },
  { id: "practice", label: "Timed practice" },
  { id: "performance", label: "My performance" },
];

type BankCard = {
  slug: string;
  title: string;
  variant: "academic" | "gt";
  section: number;
  subject: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  wordCount: number;
  objective: string;
  questionTypes: string[];
  itemCount: number;
  glossarySize: number;
  source: string;
};

type SimCard = {
  slug: string;
  title: string;
  variant: "academic" | "gt";
  passageSlugs: string[];
  timeLimitSec: number;
  description: string;
  passages: number;
  questions: number;
};

const DIFFICULTY_TINT: Record<number, string> = {
  1: "border-emerald-500/40 text-emerald-300",
  2: "border-emerald-500/40 text-emerald-300",
  3: "border-cyan-500/40 text-cyan-300",
  4: "border-amber-500/40 text-amber-300",
  5: "border-rose-500/40 text-rose-300",
};

export function ReadingMasterclassView({
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
    navigate(next.slug ? { name: "exams-reading", tab: next.tab, slug: next.slug } : { name: "exams-reading", tab: next.tab });

  // Deep links under the practice tab: `sim:<slug>` opens a full simulation,
  // `timed:<slug>` a single-passage timed run.
  if (activeTab === "practice" && slug?.startsWith("sim:")) {
    return <SimLoader simSlug={slug.slice(4)} navigate={navigate} />;
  }
  if (slug?.startsWith("timed:") || (activeTab === "library" && slug && !slug.includes(":"))) {
    const passageSlug = slug.replace("timed:", "");
    return <ReadingExercisePlayer slug={passageSlug} mode={slug.startsWith("timed:") ? "timed" : "practice"} navigate={navigate} />;
  }
  if (tab === "review" && slug) {
    return <PastAttemptReview attemptId={slug} navigate={navigate} />;
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      {/* Hero */}
      <div>
        <Badge variant="outline" className="border-cyan-500/40 text-cyan-300">IELTS · Reading</Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ten subjects, eighteen original passages, both pathways — one Reading band.
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          The complete Reading academy: the fifteen foundation skills, every one of the thirteen official question
          types taught on a seven-step structure, distinct Academic and General Training libraries, timed simulations
          on the official clock — and a performance dashboard that recommends lessons from your actual mistakes.
        </p>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Reading masterclass sections" className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={activeTab === t.id}
            onClick={() => go({ tab: t.id })}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === t.id ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/40" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" ? <OverviewTab navigate={navigate} /> : null}
      {activeTab === "library" ? <LibraryTab go={go} /> : null}
      {activeTab === "practice" ? <PracticeTab user={user} go={go} navigate={navigate} /> : null}
      {activeTab === "performance" ? <PerformanceTab user={user} go={go} /> : null}
    </div>
  );
}

/** Resolves a simulation deep link to its config and opens the sim player. */
function SimLoader({ simSlug, navigate }: { simSlug: string; navigate: (route: AppRoute) => void }) {
  const [sim, setSim] = useState<SimConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await examApi.readingBank();
      if (response.ok) {
        const found = response.data.simulations.find((s) => s.slug === simSlug);
        if (found) {
          setSim({
            slug: found.slug,
            title: found.title,
            passageSlugs: found.passageSlugs,
            timeLimitSec: found.timeLimitSec,
            questions: found.questions,
          });
        } else {
          setError("Simulation not found.");
        }
      } else {
        setError(response.error ?? "Could not load this simulation.");
      }
    })();
  }, [simSlug]);

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="font-semibold text-slate-100">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "exams-reading", tab: "practice" })}>
          Back to practice tests
        </Button>
      </div>
    );
  }
  if (!sim) {
    return (
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-12">
        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-slate-900" />
        <div className="h-64 animate-pulse rounded-xl bg-slate-900" />
      </div>
    );
  }
  return <ReadingExercisePlayer slug={sim.passageSlugs[0]} mode="sim" sim={sim} navigate={navigate} />;
}

// ---------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------

function OverviewTab({ navigate }: { navigate: (route: AppRoute) => void }) {
  const stages = [
    {
      icon: GraduationCap,
      title: "Academic pathway — Module 3",
      body: "Twenty-eight lessons: the fifteen foundation skills (from skimming to paragraph organisation), then one lesson per official question type, each with a worked example, trap catalogue and practice sets. Academic passages across the ten subjects — science to architecture — with no specialist knowledge assumed.",
      route: { name: "exams-course", examKey: "IELTS", variant: "ACADEMIC" } as AppRoute,
      cta: "Open the Academic Reading course",
    },
    {
      icon: BookOpen,
      title: "General Training pathway — Module 3 (GT)",
      body: "The GT paper's own module: notices and advertisements, instructions, workplace documents, informational texts and the longer Section 3 passages — with the 15/20/25 minute budget and the practical-reading habits the variant rewards.",
      route: { name: "exams-course", examKey: "IELTS", variant: "GENERAL_TRAINING" } as AppRoute,
      cta: "Open the GT Reading course",
    },
    {
      icon: Library,
      title: "The passage library",
      body: "Eighteen original exercises: ten Academic passages (one per taught subject, sections 1–3) and eight GT text sets. Every passage carries difficulty, word count, topic, a reading objective, full question sets with keyed answers, per-item evidence and a vocabulary glossary revealed on review.",
      route: { name: "exams-reading", tab: "library" } as AppRoute,
      cta: "Browse the passage library",
    },
    {
      icon: LineChart,
      title: "Performance and review",
      body: "Every attempt is graded item by item: correct, spelling, word limit, designed traps, inference over-reads, vocabulary gaps and blanks. The dashboard converts those mistakes into lesson recommendations, and every past attempt reopens for review with the passage evidence highlighted.",
      route: { name: "exams-reading", tab: "performance" } as AppRoute,
      cta: "See my performance",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white">The four study stages</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {stages.map((s) => (
            <Card key={s.title} className="border-slate-800 bg-slate-900/60">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center gap-2 text-cyan-300">
                  <s.icon className="size-5" aria-hidden />
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
                <Button variant="outline" size="sm" className="gap-1.5 border-cyan-500/40 text-cyan-300" onClick={() => navigate(s.route)}>
                  {s.cta} <ChevronRight className="size-3.5" aria-hidden />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">How the masterclass works</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Read, don't recite", "The passage is always on screen beside the questions — you practise the real two-panel discipline of the computer-delivered test."],
            ["One honest clock", "Timed runs use the real budgets: twenty minutes a passage, sixty for a full simulation. Practice runs are labelled study sessions, never timed."],
            ["Evidence, always", "Every answer carries the passage lines that settle it. Review highlights the exact paragraph — no answer is ever just announced."],
            ["Original material only", "Every passage is original TalkSy material written in the style of the test — nothing here is an official IELTS examination passage."],
          ].map(([title, body]) => (
            <Card key={title} className="border-slate-800 bg-slate-900/60">
              <CardContent className="space-y-1.5 p-4">
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="text-xs leading-relaxed text-slate-400">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Passage library (Part D)
// ---------------------------------------------------------------------------

function LibraryTab({ go }: { go: (next: { tab?: string; slug?: string }) => void }) {
  const [cards, setCards] = useState<BankCard[] | null>(null);
  const [variant, setVariant] = useState<"all" | "academic" | "gt">("all");

  useEffect(() => {
    void (async () => {
      const response = await examApi.readingBank();
      setCards(response.ok ? response.data.exercises : []);
    })();
  }, []);

  const filtered = useMemo(() => (cards ?? []).filter((c) => variant === "all" || c.variant === variant), [cards, variant]);

  if (!cards) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-slate-900" aria-hidden />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 p-1">
          {(["all", "academic", "gt"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              aria-pressed={variant === v}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                variant === v ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/40" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {v === "all" ? "Both pathways" : v === "academic" ? "Academic" : "General Training"}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          {cards.length} original passages · {cards.reduce((a, c) => a + c.itemCount, 0)} answerable questions ·{" "}
          {cards.reduce((a, c) => a + c.glossarySize, 0)} glossary entries
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((c) => (
          <Card key={c.slug} className="border-slate-800 bg-slate-900/60">
            <CardContent className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge variant="outline" className={c.variant === "gt" ? "border-orange-500/40 text-orange-300" : "border-cyan-500/40 text-cyan-300"}>
                  {c.variant === "gt" ? "GT" : "Academic"} · Section {c.section}
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-400">{c.subject}</Badge>
                <Badge variant="outline" className={DIFFICULTY_TINT[c.difficulty] ?? "border-slate-600 text-slate-400"}>
                  {c.difficultyLabel}
                </Badge>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{c.objective}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500">
                <span className="rounded bg-slate-800/80 px-2 py-0.5">{c.wordCount} words</span>
                <span className="rounded bg-slate-800/80 px-2 py-0.5">{c.itemCount} questions</span>
                <span className="rounded bg-slate-800/80 px-2 py-0.5">≈{c.estimatedMinutes} min</span>
                <span className="rounded bg-slate-800/80 px-2 py-0.5">{c.glossarySize}-word glossary</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">{c.questionTypes.join(" · ")}</p>
              <div className="flex gap-2">
                <Button size="sm" className="gap-1.5 bg-cyan-500 text-slate-950 hover:bg-cyan-400" onClick={() => go({ tab: "library", slug: c.slug })}>
                  <BookOpen className="size-3.5" aria-hidden /> Open passage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xs italic leading-relaxed text-slate-500">
        All passages are original TalkSy practice material written in the style of the IELTS Reading test — not official
        IELTS examination passages.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Timed practice (Part E)
// ---------------------------------------------------------------------------

function PracticeTab({
  user,
  go,
  navigate,
}: {
  user: { name?: string | null } | null;
  go: (next: { tab?: string; slug?: string }) => void;
  navigate: (route: AppRoute) => void;
}) {
  const [sims, setSims] = useState<SimCard[] | null>(null);
  const [cards, setCards] = useState<BankCard[] | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await examApi.readingBank();
      if (response.ok) {
        setSims(response.data.simulations);
        setCards(response.data.exercises);
      } else {
        setSims([]);
        setCards([]);
      }
    })();
  }, []);

  if (!sims || !cards) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-slate-900" aria-hidden />
        ))}
      </div>
    );
  }

  const openSim = (sim: SimCard) => {
    if (!user) {
      navigate({ name: "login" });
      return;
    }
    go({ tab: "practice", slug: `sim:${sim.slug}` });
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-bold text-white">Full simulations — the official 60-minute clock</h2>
          <p className="mt-1 text-sm text-slate-400">
            Composed from library passages in official section order. You move freely between passages and submit each
            one as you finish; when the clock hits zero, everything typed so far is submitted automatically.
          </p>
        </div>
        {sims.map((s) => (
          <Card key={s.slug} className="border-slate-800 bg-slate-900/60">
            <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="font-semibold text-white">{s.title}</p>
                <p className="max-w-2xl text-xs leading-relaxed text-slate-400">{s.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <Badge variant="outline" className={s.variant === "gt" ? "border-orange-500/40 text-orange-300" : "border-cyan-500/40 text-cyan-300"}>
                    {s.variant === "gt" ? "General Training" : "Academic"}
                  </Badge>
                  <span>{s.passages} passages</span>
                  <span>· {s.questions} questions</span>
                  <span>· 60 minutes</span>
                </div>
              </div>
              <div className="shrink-0">
                {user ? (
                  <Button size="sm" className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => openSim(s)}>
                    <Timer className="size-3.5" aria-hidden /> Start simulation
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="gap-1.5 border-amber-500/40 text-amber-300" onClick={() => openSim(s)}>
                    <Lock className="size-3.5" aria-hidden /> Log in to start
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-bold text-white">Timed passage tests — twenty minutes each</h2>
          <p className="mt-1 text-sm text-slate-400">
            The per-passage budget the courses teach. Any library passage, one 20-minute clock, full review afterwards.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {cards.map((c) => (
            <Card key={c.slug} className="border-slate-800 bg-slate-900/60">
              <CardContent className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-white">{c.title}</p>
                  <p className="text-xs text-slate-500">
                    {c.variant === "gt" ? "GT" : "Academic"} · Section {c.section} · {c.itemCount} questions · {c.difficultyLabel}
                  </p>
                </div>
                <div className="shrink-0">
                  {user ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 border-cyan-500/40 text-cyan-300"
                      onClick={() => go({ tab: "practice", slug: `timed:${c.slug}` })}
                    >
                      <Timer className="size-3.5" aria-hidden /> Timed run
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="gap-1.5 border-amber-500/40 text-amber-300" onClick={() => navigate({ name: "login" })}>
                      <Lock className="size-3.5" aria-hidden /> Log in
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// My performance (Part E analytics + Part F review links)
// ---------------------------------------------------------------------------

function PerformanceTab({
  user,
  go,
}: {
  user: { name?: string | null } | null;
  go: (next: { tab?: string; slug?: string }) => void;
}) {
  const [report, setReport] = useState<ReadingPerformanceReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      if (!user) return;
      const response = await examApi.readingPerformance();
      if (response.ok) {
        setReport(response.data.report);
      } else {
        setError(response.error ?? "Could not load your performance.");
      }
    })();
  }, [user]);

  if (!user) {
    return (
      <Card className="border-amber-500/30 bg-amber-500/5">
        <CardContent className="flex items-start gap-3 p-5">
          <Lock className="mt-0.5 size-4 shrink-0 text-amber-300" aria-hidden />
          <div className="space-y-1 text-sm">
            <p className="font-semibold text-amber-200">Your Reading performance lives in your account.</p>
            <p className="leading-relaxed text-amber-200/80">
              Log in to see accuracy by question type, your vocabulary and inference logs, simulation history — and the
              lessons recommended from your actual mistakes.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return <p className="text-sm font-semibold text-rose-300">{error}</p>;
  }
  if (!report) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-xl bg-slate-900" aria-hidden />
        ))}
      </div>
    );
  }
  if (report.attempts === 0) {
    return (
      <Card className="border-slate-800 bg-slate-900/60">
        <CardContent className="space-y-3 p-6 text-center">
          <RefreshCcw className="mx-auto size-8 text-slate-600" aria-hidden />
          <p className="font-semibold text-white">No Reading attempts yet</p>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
            Take a passage from the library or sit a timed test — every answer feeds the dashboard, and every attempt
            stays open for review with its passage evidence.
          </p>
          <div className="flex justify-center gap-2">
            <Button size="sm" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400" onClick={() => go({ tab: "library" })}>
              Browse the library
            </Button>
            <Button size="sm" variant="outline" className="gap-1.5 border-slate-600 text-slate-200" onClick={() => go({ tab: "practice" })}>
              <Timer className="size-3.5" aria-hidden /> Timed tests
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Headline */}
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          ["Accuracy", `${Math.round(report.accuracy * 100)}%`, `${report.itemsCorrect} of ${report.itemsAnswered} items`],
          ["Attempts", String(report.attempts), report.byVariant.map((v) => `${v.variant === "gt" ? "GT" : "Academic"} ${Math.round(v.accuracy * 100)}%`).join(" · ") || "—"],
          ["Avg time per item", `${report.avgSecPerItem}s`, `${Math.round(report.timeSpentSec / 60)} min total`],
          ["Left blank", String(report.unanswered), "the never-blank protocol"],
        ].map(([label, value, sub]) => (
          <Card key={label} className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-1 text-2xl font-bold text-white">{value}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">{sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Error taxonomy */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">What went wrong, item by item</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {(
            [
              ["Correct", report.errorCounts.correct, "text-emerald-400"],
              ["Spelling", report.errorCounts.spelling, "text-violet-400"],
              ["Word limit", report.errorCounts["word-limit"], "text-orange-400"],
              ["Traps taken", report.errorCounts.trap, "text-rose-400"],
              ["Inference", report.errorCounts.inference, "text-sky-400"],
              ["Vocabulary", report.errorCounts.vocabulary, "text-amber-400"],
              ["Blank", report.errorCounts.missed, "text-slate-400"],
            ] as const
          ).map(([label, value, tint]) => (
            <Card key={label} className="border-slate-800 bg-slate-900/60">
              <CardContent className="p-3 text-center">
                <p className={`text-xl font-bold ${tint}`}>{value}</p>
                <p className="text-[11px] text-slate-500">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      {report.recommendations.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">Recommended from your mistakes</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {report.recommendations.map((rec) => (
              <button
                key={rec.lessonSlug}
                type="button"
                onClick={() => go({ tab: "library" })}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-left transition-colors hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={rec.severity === "high" ? "border-rose-500/40 text-rose-300" : rec.severity === "medium" ? "border-amber-500/40 text-amber-300" : "border-emerald-500/40 text-emerald-300"}
                  >
                    {rec.severity}
                  </Badge>
                  <p className="text-sm font-bold text-white">{rec.lessonTitle}</p>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{rec.reason}</p>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* By type */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">By question type</h2>
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="divide-y divide-slate-800 p-2">
              {report.byType.map((t) => (
                <div key={t.type} className="flex items-center gap-3 px-3 py-2.5">
                  <p className="flex-1 truncate text-sm text-slate-300">{t.label}</p>
                  <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-800">
                    <div className={`h-full rounded-full ${t.accuracy >= 0.6 ? "bg-emerald-400" : "bg-amber-400"}`} style={{ width: `${Math.round(t.accuracy * 100)}%` }} />
                  </div>
                  <p className="w-20 text-right text-xs text-slate-400">
                    {t.correct}/{t.total} · {Math.round(t.accuracy * 100)}%
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Vocabulary + traps + inference */}
        <div className="space-y-6">
          {report.vocabularyDifficulties.length > 0 ? (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">Vocabulary difficulties</h2>
              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="flex flex-wrap gap-2 p-4">
                  {report.vocabularyDifficulties.map((v) => (
                    <Badge key={v.word} variant="outline" className="border-amber-500/40 text-amber-200">
                      {v.word} ×{v.count}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </section>
          ) : null}
          {Object.keys(report.trapFamilies).length > 0 ? (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">Trap families taken</h2>
              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="flex flex-wrap gap-2 p-4">
                  {Object.entries(report.trapFamilies).map(([family, count]) => (
                    <Badge key={family} variant="outline" className="border-rose-500/40 text-rose-200">
                      {family.replace(/-/g, " ")} ×{count}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </section>
          ) : null}
          {report.simHistory.length > 0 ? (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">Simulation history</h2>
              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="divide-y divide-slate-800 p-2">
                  {report.simHistory.map((s) => (
                    <div key={s.runId} className="px-3 py-2.5">
                      <p className="text-sm font-semibold text-white">
                        {s.simSlug === "reading-sim-academic-1" || s.simSlug === "reading-sim-academic-2"
                          ? "Academic simulation"
                          : s.simSlug === "reading-sim-gt-1"
                            ? "GT simulation"
                            : s.simSlug}
                      </p>
                      <p className="text-xs text-slate-500">
                        {s.passages} passages · {s.itemsCorrect}/{s.itemsAnswered} correct · {Math.round(s.accuracy * 100)}% ·{" "}
                        {Math.round(s.timeSpentSec / 60)} min
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          ) : null}
        </div>
      </div>

      {/* Recent attempts with review links (Part F) */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Recent attempts — reopen any for review</h2>
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="divide-y divide-slate-800 p-2">
            {report.recentAttempts.map((a) => (
              <div key={a.id} className="flex flex-wrap items-center gap-3 px-3 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-200">{a.exerciseSlug}</p>
                  <p className="text-[11px] text-slate-500">
                    {a.variant === "gt" ? "GT" : "Academic"} · Section {a.section} · {a.mode === "practice" ? "practice" : "timed"} ·{" "}
                    {new Date(a.createdAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-slate-300">
                  {a.correctCount}/{a.totalQuestions}
                </p>
                <Button size="sm" variant="outline" className="gap-1.5 border-cyan-500/40 text-cyan-300" onClick={() => go({ tab: "review", slug: a.id })}>
                  <RotateCcw className="size-3.5" aria-hidden /> Review
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
