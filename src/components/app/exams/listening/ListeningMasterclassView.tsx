"use client";

/**
 * The IELTS Listening Masterclass hub (PROMPT 44).
 *
 * One surface with four tabs: the curriculum overview (linking the 31-lesson
 * Module 2 course), the original audio question bank, the practice-test
 * ladder (progressive preparation, timed part tests, full 40-question
 * simulations) and the personal performance dashboard whose lesson
 * recommendations are driven by the learner's actual mistakes.
 *
 * All recordings and questions are original TalkSy practice material in the
 * style of the test — never official IELTS examination content.
 */

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  GraduationCap,
  Headphones,
  Layers,
  ListChecks,
  Lock,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import { examApi } from "@/lib/client/exam-api";
import type { ListeningPerformanceReport } from "@/lib/exams/listening-bank/performance";
import { LISTENING_MASTERCLASS_MOCK_TITLES } from "@/data/exams/ielts/mock-titles";
import { BankExercisePlayer } from "./BankExercisePlayer";

type MockCard = {
  id: string;
  title: string;
  kind: string;
  lengthLabel: string;
  description: string | null;
  questionCount: number;
  attempts: Array<{ id: string; status: string; scoreDisplay: string | null }>;
};

type BankCard = {
  slug: string;
  title: string;
  part: 1 | 2 | 3 | 4;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  accentLabels: string[];
  speakers: string[];
  questionTypes: string[];
  itemCount: number;
  source: string;
};

const TABS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "practice", label: "Audio practice", icon: Headphones },
  { id: "tests", label: "Practice tests", icon: ClipboardList },
  { id: "performance", label: "My performance", icon: BarChart3 },
] as const;

const PART_LABELS: Record<number, string> = {
  1: "Part 1 — everyday conversation",
  2: "Part 2 — individual speaker",
  3: "Part 3 — educational discussion",
  4: "Part 4 — academic monologue",
};

const STAGES = [
  {
    icon: Layers,
    title: "1 · Examination fundamentals",
    body: "Six lessons on the format facts: the four parts, the one-hearing rule, instructions and answer limits, spelling, numbers and dates, accents, and the section clock.",
    lessons: 6,
  },
  {
    icon: Target,
    title: "2 · The twelve core skills",
    body: "One lesson per ability behind every mark — prediction, keywords, synonyms, paraphrase, distractors, speaker tracking, corrections, number perception, opinions, intention, specific information and overall meaning.",
    lessons: 12,
  },
  {
    icon: ListChecks,
    title: "3 · Every question type in depth",
    body: "Nine lessons, one per official task family, each on the seven-component structure: explanation, solving method, worked example, trap catalogue, guided practice, independent practice and per-item explanations.",
    lessons: 9,
  },
  {
    icon: GraduationCap,
    title: "4 · The four parts, prepared",
    body: "A chapter per recording part with increasing complexity — from the everyday conversation of Part 1 to the ten-gap academic monologue of Part 4.",
    lessons: 4,
  },
];

export function ListeningMasterclassView({
  tab,
  slug,
  navigate,
}: {
  tab?: string;
  slug?: string;
  navigate: (route: AppRoute) => void;
}) {
  const activeTab = TABS.some((t) => t.id === tab) ? (tab as (typeof TABS)[number]["id"]) : "overview";
  const user = useAppStore((s) => s.user);

  const go = (next: { tab?: string; slug?: string }) =>
    navigate(next.slug ? { name: "exams-listening", tab: next.tab, slug: next.slug } : { name: "exams-listening", tab: next.tab });

  // An exercise deep-link goes straight to the player.
  if (activeTab === "practice" && slug) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
        <BankExercisePlayer slug={slug} navigate={navigate} />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-500/20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(56,189,248,0.16) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-12 text-center sm:px-6 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-300">
            <Headphones className="size-3.5" aria-hidden />
            IELTS LISTENING MASTERCLASS
          </span>
          <h1 className="max-w-3xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Thirty-one lessons, sixteen original recordings, two full simulations — one Listening band.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            The complete Listening academy: the examination fundamentals, the twelve core listening
            skills, every official question type taught to mastery, part-by-part preparation, an
            audio library with accent metadata and per-item error analysis, and a performance
            dashboard that recommends lessons from your actual mistakes.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => go({ tab: "practice" })}>
              <Headphones className="size-4" aria-hidden /> Open the audio library
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white"
              onClick={() => go({ tab: "tests" })}
            >
              <ClipboardList className="size-4" aria-hidden /> Practice tests
            </Button>
          </div>
          <p className="max-w-xl text-xs text-slate-500">
            Every recording is original TalkSy practice material written in the style of the test —
            never official IELTS examination content.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Tabs value={activeTab} onValueChange={(next) => go({ tab: next })}>
          <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1 bg-slate-900 p-1">
            {TABS.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="flex items-center gap-1.5 px-4 py-2 text-xs data-[state=active]:bg-amber-400 data-[state=active]:text-slate-950 sm:text-sm"
              >
                <t.icon className="size-3.5" aria-hidden />
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">The four study stages</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {STAGES.map((stage) => (
                  <Card key={stage.title} className="border-slate-800 bg-slate-900/60">
                    <CardContent className="space-y-2 p-5">
                      <p className="flex items-center gap-2 text-sm font-bold text-white">
                        <stage.icon className="size-4 text-amber-300" aria-hidden />
                        {stage.title}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300">{stage.body}</p>
                      <Badge variant="secondary" className="bg-slate-800 text-xs text-slate-400">
                        {stage.lessons} lessons
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="border-amber-500/30 bg-amber-500/5">
                <CardContent className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-amber-200">Open the full course</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      The 31 lessons live in Module 2 of the IELTS Academy core programme, with
                      guided practice, independent practice and answer explanations in every lesson.
                    </p>
                  </div>
                  <Button className="shrink-0 gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => navigate({ name: "exams-course", examKey: "IELTS", variant: "ACADEMIC" })}>
                    Module 2 — Listening Mastery <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">How the masterclass works</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Headphones,
                    title: "Audio first",
                    body: "Sixteen original recordings across the four parts, three difficulty tiers and four accents. The transcript stays locked until you submit — reading along is not the test.",
                  },
                  {
                    icon: Sparkles,
                    title: "Error taxonomy, not just scores",
                    body: "Every wrong answer is classified: spelling, word limit, distractor family, missed keyword or wrong. A misspelled answer scores zero — but you are told it was spelling, not comprehension.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Mistake-driven study",
                    body: "The performance dashboard converts your actual errors into specific lesson recommendations, so the next study hour lands where the marks are.",
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-slate-800 bg-slate-900/60">
                    <CardContent className="space-y-2 p-5">
                      <p className="flex items-center gap-2 text-sm font-bold text-white">
                        <item.icon className="size-4 text-sky-300" aria-hidden /> {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="practice">
            <AudioLibrary navigate={navigate} />
          </TabsContent>

          <TabsContent value="tests">
            <PracticeTests user={user} navigate={navigate} />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceTab user={user} navigate={navigate} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Audio library
// ---------------------------------------------------------------------------

function AudioLibrary({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [cards, setCards] = useState<BankCard[] | null>(null);
  const [partFilter, setPartFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");

  useEffect(() => {
    void (async () => {
      const response = await examApi.listeningBank();
      if (response.ok) setCards(response.data.exercises);
    })();
  }, []);

  const visible = useMemo(
    () =>
      (cards ?? []).filter(
        (c) =>
          (partFilter === "all" || String(c.part) === partFilter) &&
          (difficultyFilter === "all" || c.difficultyLabel === difficultyFilter),
      ),
    [cards, partFilter, difficultyFilter],
  );

  if (!cards) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-44 rounded-xl bg-slate-900" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">The audio question bank</h2>
          <p className="mt-1 text-sm text-slate-400">
            {cards.length} original recordings · {cards.reduce((a, c) => a + c.itemCount, 0)} answerable items ·
            accents: British, Australian, New Zealand, North American
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={partFilter} onValueChange={setPartFilter}>
            <SelectTrigger className="w-44 border-slate-700 bg-slate-900 text-slate-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-slate-700 bg-slate-900 text-slate-100">
              <SelectItem value="all">All parts</SelectItem>
              <SelectItem value="1">Part 1</SelectItem>
              <SelectItem value="2">Part 2</SelectItem>
              <SelectItem value="3">Part 3</SelectItem>
              <SelectItem value="4">Part 4</SelectItem>
            </SelectContent>
          </Select>
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-40 border-slate-700 bg-slate-900 text-slate-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-slate-700 bg-slate-900 text-slate-100">
              <SelectItem value="all">All levels</SelectItem>
              <SelectItem value="foundation">Foundation</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((card) => (
          <Card key={card.slug} className="flex flex-col border-slate-800 bg-slate-900/60">
            <CardContent className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-sky-500/40 text-sky-300">Part {card.part}</Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">{card.difficultyLabel}</Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  <Clock className="mr-1 size-3" aria-hidden /> {card.estimatedMinutes} min
                </Badge>
              </div>
              <div>
                <p className="font-semibold text-white">{card.title}</p>
                <p className="mt-1 text-xs text-slate-500">{PART_LABELS[card.part]}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {card.questionTypes.map((type) => (
                  <Badge key={type} variant="secondary" className="bg-slate-800 text-[10px] text-slate-400">
                    {type}
                  </Badge>
                ))}
              </div>
              <p className="flex items-center gap-1.5 text-xs text-slate-500">
                <Users className="size-3.5" aria-hidden /> {card.speakers.join(" · ")} — {card.accentLabels.join(", ")}
              </p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                <span className="text-xs text-slate-500">{card.itemCount} items</span>
                <Button
                  size="sm"
                  className="gap-1.5 bg-sky-500 text-slate-950 hover:bg-sky-400"
                  onClick={() => navigate({ name: "exams-listening", tab: "practice", slug: card.slug })}
                >
                  <Play className="size-3.5" aria-hidden /> Open
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Practice tests
// ---------------------------------------------------------------------------

function PracticeTests({
  user,
  navigate,
}: {
  user: { name?: string | null } | null;
  navigate: (route: AppRoute) => void;
}) {
  const [mocks, setMocks] = useState<MockCard[] | null>(null);
  const [starting, setStarting] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await examApi.mocks();
      if (response.ok) {
        const all = response.data.mocks as MockCard[];
        setMocks(
          LISTENING_MASTERCLASS_MOCK_TITLES.map((title) => all.find((m) => m.title === title)).filter(
            (m): m is MockCard => Boolean(m),
          ),
        );
      } else {
        setMocks([]); // anonymous: the ladder renders from titles, start buttons ask for login
      }
    })();
  }, []);

  const start = async (mockId: string, full: boolean) => {
    if (!user) {
      toast.info("Log in to sit a timed test — attempts are saved to your account.");
      navigate({ name: "login" });
      return;
    }
    setStarting(mockId);
    const response = await examApi.startAttempt(mockId, full ? "full_mock" : "untimed", full);
    setStarting(null);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
  };

  if (!mocks) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-xl bg-slate-900" aria-hidden />
        ))}
      </div>
    );
  }

  const prep = mocks.filter((m) => m.title.includes("Preparation"));
  const timed = mocks.filter((m) => m.title.includes("Timed Test"));
  const sims = mocks.filter((m) => m.title.includes("Full Simulation"));

  const anonCard = (title: string) => (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardContent className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-white">{title}</p>
        <Button
          size="sm"
          variant="outline"
          className="shrink-0 gap-1.5 border-amber-500/40 text-amber-300"
          onClick={() => navigate({ name: "login" })}
        >
          <Lock className="size-3.5" aria-hidden /> Log in to sit this test
        </Button>
      </CardContent>
    </Card>
  );

  // Anonymous visitors see the ladder from the static titles; starting a
  // test asks for an account (attempts are saved per learner).
  if (mocks.length === 0) {
    return (
      <div className="space-y-8">
        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardContent className="flex items-center gap-3 p-4">
            <Lock className="size-4 text-amber-300" aria-hidden />
            <p className="text-sm text-amber-200">
              Log in to sit a timed test — every attempt, its clock and its explanations are saved to your account.
            </p>
          </CardContent>
        </Card>
        {[
          { heading: "Progressive preparation", titles: LISTENING_MASTERCLASS_MOCK_TITLES.filter((t) => t.includes("Preparation")) },
          { heading: "Timed part tests", titles: LISTENING_MASTERCLASS_MOCK_TITLES.filter((t) => t.includes("Timed Test")) },
          { heading: "Full-length simulations", titles: LISTENING_MASTERCLASS_MOCK_TITLES.filter((t) => t.includes("Full Simulation")) },
        ].map((group) => (
          <section key={group.heading} className="space-y-3">
            <h2 className="text-lg font-bold text-white">{group.heading}</h2>
            {group.titles.map((title) => anonCard(title))}
          </section>
        ))}
      </div>
    );
  }

  const MockRow = ({ mock, full }: { mock: MockCard; full: boolean }) => {
    const best = mock.attempts.find((a) => a.scoreDisplay);
    return (
      <Card className="border-slate-800 bg-slate-900/60">
        <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-white">{mock.title}</p>
            <p className="line-clamp-2 max-w-2xl text-xs leading-relaxed text-slate-400">{mock.description}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Badge variant="outline" className="border-slate-600 text-slate-400">{mock.questionCount} questions</Badge>
              {best ? <Badge variant="outline" className="border-emerald-500/40 text-emerald-300">Best: {best.scoreDisplay}</Badge> : null}
              {mock.attempts.length > 0 ? <span>{mock.attempts.length} attempt(s)</span> : null}
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button size="sm" className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300" disabled={starting === mock.id} onClick={() => void start(mock.id, full)}>
              <Timer className="size-3.5" aria-hidden /> Start timed
            </Button>
            <Button size="sm" variant="outline" className="gap-1.5 border-slate-700 text-slate-200" disabled={starting === mock.id} onClick={() => void start(mock.id, false)}>
              <RotateCcw className="size-3.5" aria-hidden /> Untimed
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-bold text-white">Progressive preparation</h2>
          <p className="mt-1 text-sm text-slate-400">
            Climb the ladder: beginner (Parts 1–2), intermediate (Parts 1–3), advanced (all four
            parts, heavier paraphrase). Untimed runs are study sessions; timed runs behave like the test.
          </p>
        </div>
        {prep.map((mock) => (
          <MockRow key={mock.id} mock={mock} full />
        ))}
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-bold text-white">Timed part tests</h2>
          <p className="mt-1 text-sm text-slate-400">
            One recording part, ten questions, eight minutes on the clock — the pacing discipline
            for each part in isolation.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {timed.map((mock) => (
            <MockRow key={mock.id} mock={mock} full />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-bold text-white">Full-length simulations</h2>
          <p className="mt-1 text-sm text-slate-400">
            Four parts, forty questions, thirty minutes, one hearing per part — the complete
            Listening test. Raw scores convert to an indicative band on your result page.
          </p>
        </div>
        {sims.map((mock) => (
          <MockRow key={mock.id} mock={mock} full />
        ))}
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Performance dashboard
// ---------------------------------------------------------------------------

const ERROR_COLORS: Record<string, string> = {
  correct: "text-emerald-400",
  spelling: "text-violet-400",
  "word-limit": "text-orange-400",
  distractor: "text-rose-400",
  missed: "text-slate-400",
  wrong: "text-rose-400",
};

function PerformanceTab({
  user,
  navigate,
}: {
  user: { name?: string | null } | null;
  navigate: (route: AppRoute) => void;
}) {
  const [report, setReport] = useState<ListeningPerformanceReport | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!user) return;
    void (async () => {
      const response = await examApi.listeningPerformance();
      if (response.ok) setReport(response.data.report);
      setLoaded(true);
    })();
  }, [user]);

  if (!user) {
    return (
      <Card className="border-slate-800 bg-slate-900/60">
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <Lock className="size-8 text-slate-600" aria-hidden />
          <div>
            <p className="font-semibold text-slate-100">Your Listening performance lives here</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Log in to track correct answers, spelling mistakes, missed keywords, distractor
              errors by family, question-type accuracy and time — and get lessons recommended
              from your actual mistakes.
            </p>
          </div>
          <Button className="bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => navigate({ name: "login" })}>
            Log in
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!loaded) return <Skeleton className="h-64 rounded-xl bg-slate-900" />;

  if (!report || report.attempts === 0) {
    return (
      <Card className="border-slate-800 bg-slate-900/60">
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <Activity className="size-8 text-slate-600" aria-hidden />
          <div>
            <p className="font-semibold text-slate-100">No Listening practice recorded yet</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Complete an audio-bank exercise or a practice test and this dashboard fills with
              your error profile: spelling, word limits, distractor families, missed keywords
              and per-type accuracy.
            </p>
          </div>
          <Button className="gap-2 bg-sky-500 text-slate-950 hover:bg-sky-400" onClick={() => navigate({ name: "exams-listening", tab: "practice" })}>
            <Headphones className="size-4" aria-hidden /> Start an exercise
          </Button>
        </CardContent>
      </Card>
    );
  }

  const pct = (v: number) => `${Math.round(v * 100)}%`;

  return (
    <div className="space-y-6">
      {/* Headline */}
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Accuracy", value: pct(report.accuracy), sub: `${report.itemsCorrect}/${report.itemsAnswered} items` },
          { label: "Exercises", value: String(report.attempts), sub: "bank attempts" },
          { label: "Time practised", value: `${Math.round(report.timeSpentSec / 60)}m`, sub: `${report.avgSecPerItem}s per question` },
          { label: "Mock sections", value: String(report.mockSections.length), sub: "listening tests sat" },
        ].map((stat) => (
          <Card key={stat.label} className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Error profile */}
      <Card className="border-slate-800 bg-slate-900/60">
        <CardContent className="space-y-3 p-5">
          <p className="text-sm font-bold text-white">Error profile</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(report.errorCounts)
              .filter(([, count]) => count > 0)
              .map(([type, count]) => (
                <Badge key={type} variant="outline" className="border-slate-700 text-slate-300">
                  <span className={cn("mr-1 font-bold", ERROR_COLORS[type])}>{count}</span>
                  {type === "word-limit" ? "word limit" : type}
                </Badge>
              ))}
            {report.errorCounts.correct === 0 && Object.values(report.errorCounts).every((c) => c === 0) ? (
              <span className="text-sm text-slate-500">No items recorded yet.</span>
            ) : null}
          </div>
          {report.spellingMistakes.length > 0 ? (
            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Spelling log (latest)</p>
              <div className="flex flex-wrap gap-1.5">
                {report.spellingMistakes.slice(-12).map((m, i) => (
                  <span key={i} className="rounded-md border border-violet-500/30 bg-violet-500/10 px-2 py-1 text-xs text-violet-200">
                    {m.given} → <span className="font-semibold">{m.expected}</span>
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {report.missedKeywords.length > 0 ? (
            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Keywords you missed</p>
              <div className="flex flex-wrap gap-1.5">
                {report.missedKeywords.map((k) => (
                  <span key={k.keyword} className="rounded-md border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-xs text-orange-200">
                    {k.keyword} ×{k.count}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {Object.keys(report.distractorFamilies).length > 0 ? (
            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Distractor traps taken</p>
              <div className="flex flex-wrap gap-1.5">
                {Object.entries(report.distractorFamilies).map(([family, count]) => (
                  <span key={family} className="rounded-md border border-rose-500/30 bg-rose-500/10 px-2 py-1 text-xs text-rose-200">
                    {family} ×{count}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* By type / by part */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-3 p-5">
            <p className="text-sm font-bold text-white">Question-type performance</p>
            {report.byType.length === 0 ? <p className="text-sm text-slate-500">No data yet.</p> : null}
            {report.byType.map((t) => (
              <div key={t.type} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{t.type}</span>
                  <span className="text-slate-500">
                    {t.correct}/{t.total} · <span className={t.accuracy >= 0.6 ? "text-emerald-400" : "text-rose-400"}>{pct(t.accuracy)}</span>
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={cn("h-full rounded-full", t.accuracy >= 0.6 ? "bg-emerald-400" : "bg-rose-400")}
                    style={{ width: pct(t.accuracy) }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-3 p-5">
            <p className="text-sm font-bold text-white">Performance by part</p>
            {report.byPart.length === 0 ? <p className="text-sm text-slate-500">No data yet.</p> : null}
            {report.byPart.map((p) => (
              <div key={p.part} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{PART_LABELS[p.part]}</span>
                  <span className="text-slate-500">
                    {p.correct}/{p.total} · <span className={p.accuracy >= 0.6 ? "text-emerald-400" : "text-rose-400"}>{pct(p.accuracy)}</span>
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={cn("h-full rounded-full", p.accuracy >= 0.6 ? "bg-emerald-400" : "bg-rose-400")}
                    style={{ width: pct(p.accuracy) }}
                  />
                </div>
              </div>
            ))}
            {report.mockSections.length > 0 ? (
              <div className="space-y-1 border-t border-slate-800 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mock Listening sections</p>
                {report.mockSections.map((m) => (
                  <div key={m.attemptId} className="flex items-center justify-between text-xs">
                    <span className="truncate text-slate-300">{m.title}</span>
                    <span className="shrink-0 text-slate-400">
                      {m.raw}/{m.max} · band {m.score}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      {report.recommendations.length > 0 ? (
        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardContent className="space-y-3 p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-amber-200">
              <Sparkles className="size-4" aria-hidden /> Recommended from your mistakes
            </p>
            <div className="space-y-2">
              {report.recommendations.map((rec) => (
                <button
                  key={rec.lessonSlug}
                  type="button"
                  onClick={() => navigate({ name: "lesson", slug: rec.lessonSlug })}
                  className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3 text-left transition-colors hover:border-amber-500/50"
                >
                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                      {rec.lessonTitle}
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px]",
                          rec.severity === "high"
                            ? "border-rose-500/40 text-rose-300"
                            : rec.severity === "medium"
                              ? "border-amber-500/40 text-amber-300"
                              : "border-emerald-500/40 text-emerald-300",
                        )}
                      >
                        {rec.severity}
                      </Badge>
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{rec.reason}</p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-slate-500" aria-hidden />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-emerald-500/30 bg-emerald-500/5">
          <CardContent className="flex items-center gap-3 p-5">
            <CheckCircle2 className="size-5 text-emerald-400" aria-hidden />
            <p className="text-sm text-emerald-200">
              No weak pattern detected yet — keep practising, or move up a difficulty tier in the audio library.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Recent attempts */}
      {report.recentAttempts.length > 0 ? (
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-2 p-5">
            <p className="text-sm font-bold text-white">Recent bank exercises</p>
            {report.recentAttempts.map((a) => (
              <div key={a.id} className="flex items-center justify-between gap-3 text-xs">
                <span className="truncate text-slate-300">
                  Part {a.part} · {a.exerciseSlug.replace("ielts-lb-p", "").replace("-", " · ")}
                </span>
                <span className="shrink-0 text-slate-500">
                  {a.correct}/{a.total} · {pct(a.accuracy)} · {a.mode}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
