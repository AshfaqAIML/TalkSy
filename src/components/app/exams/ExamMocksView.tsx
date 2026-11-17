"use client";

/**
 * Mock-test library + practice-mode launcher (PROMPT 51 engine surface).
 *
 * The engine offers ten modes over one spec-driven examination engine:
 *   1. Full mock examination   — sit a library mock under official section clocks
 *   2. Section-wise mock test  — one section, assembled from the question pool
 *   3. Timed practice          — a custom selection under a minute budget
 *   4. Untimed practice        — no clocks; per-item answer checking enabled
 *   5. Topic-specific practice — items sharing one topic/skill tag
 *   6. Weakness-based practice — targets the learner's measured weak spots
 *   7. Diagnostic assessment   — balanced timed sample + level profile
 *   8. Adaptive practice       — difficulty calibrated to recent accuracy
 *                               (TalkSy heuristic — never claimed to be ETS's)
 *   9. Previous mistakes       — retry exactly what went wrong or was skipped
 *  10. Custom practice         — filters on sections, task types, difficulty
 *
 * Every assembled set is original practice material and is labelled as such.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  ChevronRight,
  Crosshair,
  History,
  Infinity as InfinityIcon,
  RotateCcw,
  ScanSearch,
  Settings2,
  ShieldAlert,
  SlidersHorizontal,
  Stethoscope,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi } from "@/lib/client/exam-api";
import { ATTEMPT_MODE_DESCRIPTIONS } from "@/lib/exams/types";

type MockListItem = {
  id: string;
  examKey: "IELTS" | "TOEFL_IBT";
  variant: string;
  title: string;
  kind: string;
  lengthLabel: string;
  description: string | null;
  spec: { name: string; version: number };
  questionCount: number;
  attempts: Array<{
    id: string;
    status: string;
    mode: string;
    modeLabel: string;
    timed: boolean;
    startedAt: string;
    scoreDisplay: string | null;
    submittedAt: string | null;
  }>;
};

type PracticeMode =
  | "full"
  | "section"
  | "timed"
  | "untimed"
  | "topic"
  | "weakness"
  | "diagnostic"
  | "adaptive"
  | "mistakes"
  | "custom";

const MODE_TABS: Array<{ id: PracticeMode; label: string; icon: typeof Timer }> = [
  { id: "full", label: "Full mock", icon: Timer },
  { id: "section", label: "Section-wise", icon: Crosshair },
  { id: "timed", label: "Timed", icon: Timer },
  { id: "untimed", label: "Untimed", icon: InfinityIcon },
  { id: "topic", label: "Topic", icon: ScanSearch },
  { id: "weakness", label: "Weakness", icon: Activity },
  { id: "diagnostic", label: "Diagnostic", icon: Stethoscope },
  { id: "adaptive", label: "Adaptive", icon: RotateCcw },
  { id: "mistakes", label: "Mistakes", icon: RotateCcw },
  { id: "custom", label: "Custom", icon: SlidersHorizontal },
];

const ASSEMBLED_KINDS = new Set([
  "section", "timed", "untimed", "topic", "weakness", "diagnostic", "adaptive", "mistakes", "custom",
]);

const ADAPTIVE_HONESTY_NOTE =
  "Adaptive practice here is TalkSy's own difficulty-targeting heuristic based on your recent accuracy. It is not ETS's proprietary adaptive algorithm.";

type ExamConfigCard = {
  examKey: "IELTS" | "TOEFL_IBT";
  variant: string;
  variantLabel: string;
  name: string;
  specVersion: number;
  sections: Array<{ key: string; label: string; timingSec: number }>;
};

export function ExamMocksView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [mocks, setMocks] = useState<MockListItem[] | null>(null);
  const [filter, setFilter] = useState<string>("ALL");
  const [starting, setStarting] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  // PROMPT 51: the launcher is configured by each examination's own pinned
  // specification (sections, clocks, task types) — not by whatever mocks
  // happen to exist. Fetched once from the overview endpoint.
  const [configExams, setConfigExams] = useState<ExamConfigCard[]>([]);

  // Practice launcher state
  const [mode, setMode] = useState<PracticeMode>("full");
  const [examChoice, setExamChoice] = useState<string>("");
  const [sectionChoice, setSectionChoice] = useState<string>("listening");
  const [count, setCount] = useState(12);
  const [minutes, setMinutes] = useState(15);
  const [difficultyMin, setDifficultyMin] = useState(1);
  const [difficultyMax, setDifficultyMax] = useState(5);
  const [sectionsOn, setSectionsOn] = useState<Record<string, boolean>>({});
  const [typesOn, setTypesOn] = useState<Record<string, boolean>>({});
  const [launching, setLaunching] = useState(false);

  // Topic mode
  const [topics, setTopics] = useState<Array<{ skill: string; label: string; count: number; sections: string[] }>>([]);
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [topicChoice, setTopicChoice] = useState<string>("");
  const [topicTimed, setTopicTimed] = useState(false);

  // Weakness mode
  const [weakness, setWeakness] = useState<{
    evidenceItems: number;
    hasEnoughEvidence: boolean;
    weakestSkills: Array<{ skill: string; label: string; total: number; correct: number; accuracy: number }>;
    weakestTasks: Array<{ type: string; label: string; total: number; correct: number; accuracy: number }>;
    weakestSections: Array<{ section: string; total: number; correct: number; accuracy: number }>;
  } | null>(null);
  const [weaknessLoading, setWeaknessLoading] = useState(false);

  // Adaptive mode
  const [adaptiveSection, setAdaptiveSection] = useState<string>("all");
  const [adaptiveTimed, setAdaptiveTimed] = useState(true);

  useEffect(() => {
    void (async () => {
      const response = await examApi.mocks();
      if (response.ok) setMocks(response.data.mocks);
    })();
    void (async () => {
      const response = await examApi.overview();
      if (response.ok) {
        setConfigExams(
          response.data.exams.map((exam) => ({
            examKey: exam.examKey,
            variant: exam.variant,
            variantLabel: exam.variantLabel,
            name: exam.name,
            specVersion: exam.specVersion,
            sections: exam.sections.map((section) => ({
              key: section.key,
              label: section.label,
              timingSec: section.timingSec,
            })),
          })),
        );
      }
    })();
  }, [reloadKey]);

  // Source pool exams (never re-pool assembled sets).
  const poolExams = useMemo(() => {
    const seen = new Set<string>();
    const out: Array<{ key: "IELTS" | "TOEFL_IBT"; variant: string; label: string }> = [];
    for (const mock of mocks ?? []) {
      if (ASSEMBLED_KINDS.has(mock.kind)) continue;
      const id = `${mock.examKey}::${mock.variant}`;
      if (seen.has(id)) continue;
      seen.add(id);
      out.push({
        key: mock.examKey,
        variant: mock.variant,
        label:
          mock.examKey === "IELTS"
            ? mock.variant === "GENERAL_TRAINING"
              ? "IELTS General Training"
              : "IELTS Academic"
            : "TOEFL iBT",
      });
    }
    return out;
  }, [mocks]);

  // Launcher exam options: spec-driven configuration first, falling back to
  // the pool exams derived from the library when specs have not loaded yet.
  const launcherExams: Array<{ key: "IELTS" | "TOEFL_IBT"; variant: string; label: string; sections: string[] }> =
    configExams.length > 0
      ? configExams.map((exam) => ({
          key: exam.examKey,
          variant: exam.variant,
          label: `${exam.name} (${exam.variantLabel})`,
          sections: exam.sections.map((section) => section.key),
        }))
      : poolExams.map((exam) => ({
          key: exam.key,
          variant: exam.variant,
          label: exam.label,
          sections: ["listening", "reading", "writing", "speaking"],
        }));

  // Sections of the currently chosen examination — from its own spec.
  const chosenSections = useMemo(() => {
    const chosen = launcherExams.find((exam) => `${exam.key}::${exam.variant}` === examChoice);
    return chosen?.sections?.length ? chosen.sections : ["listening", "reading", "writing", "speaking"];
  }, [launcherExams, examChoice]);

  // Keep the section choice valid for the chosen exam's configuration.
  useEffect(() => {
    if (!chosenSections.includes(sectionChoice)) setSectionChoice(chosenSections[0] ?? "listening");
  }, [chosenSections, sectionChoice]);

  // Default the exam choice to the first configured examination.
  useEffect(() => {
    if (launcherExams.length > 0 && !launcherExams.some((e) => `${e.key}::${e.variant}` === examChoice)) {
      setExamChoice(`${launcherExams[0].key}::${launcherExams[0].variant}`);
    }
  }, [launcherExams, examChoice]);

  // Topic catalogue for the chosen exam.
  useEffect(() => {
    if (mode !== "topic" || !examChoice) return;
    const [examKey, variant] = examChoice.split("::");
    setTopicsLoading(true);
    void (async () => {
      const response = await examApi.practiceTopics(examKey, variant);
      setTopicsLoading(false);
      if (response.ok) {
        setTopics(response.data.topics);
        setTopicChoice((current) =>
          response.data.topics.some((t) => t.skill === current)
            ? current
            : (response.data.topics[0]?.skill ?? ""),
        );
      }
    })();
  }, [mode, examChoice]);

  // Weakness preview for the chosen exam.
  const loadWeakness = useCallback(async () => {
    if (!examChoice) return;
    const [examKey, variant] = examChoice.split("::");
    setWeaknessLoading(true);
    const response = await examApi.weaknessPreview(examKey, variant);
    setWeaknessLoading(false);
    if (response.ok) setWeakness(response.data.profile);
  }, [examChoice]);

  useEffect(() => {
    if (mode !== "weakness") return;
    setWeakness(null);
    void loadWeakness();
  }, [mode, loadWeakness]);

  const availableTypes = useMemo(() => {
    const set = new Set<string>();
    for (const type of [
      "MCQ_SINGLE", "MCQ_MULTI", "TFNG", "MATCHING", "FILL_BLANK",
      "COMPLETE_WORDS", "SENTENCE_RECONSTRUCTION", "DICTATION", "LISTEN_REPEAT",
      "WRITING_TASK", "EMAIL_WRITING", "DISCUSSION_TASK", "SPEAKING_TASK",
    ]) {
      set.add(type);
    }
    return [...set];
  }, []);

  const start = async (mockId: string, timed: boolean) => {
    setStarting(mockId);
    const response = await examApi.startAttempt(mockId, timed ? "full_mock" : "untimed", timed);
    setStarting(null);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
  };

  const launch = async () => {
    if (mode === "full") {
      toast.info("Pick a mock from the library below — Start timed or Untimed.");
      return;
    }
    const [examKey, variant] = examChoice.split("::");
    setLaunching(true);
    try {
      if (mode === "section") {
        const response = await examApi.practiceSection({ examKey, variant, section: sectionChoice, count: Math.max(4, count), timed: true });
        if (!response.ok) throw new Error(response.error);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      } else if (mode === "topic") {
        if (!topicChoice) throw new Error("Choose a topic first.");
        const response = await examApi.practiceTopic({
          examKey,
          variant,
          topic: topicChoice,
          count: Math.max(4, count),
          timed: topicTimed,
        });
        if (!response.ok) throw new Error(response.error);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      } else if (mode === "weakness") {
        const response = await examApi.practiceWeakness({ examKey, variant, count: Math.max(6, count) });
        if (!response.ok) throw new Error(response.error);
        toast.success(`Assembled ${response.data.itemCount} items targeting your weakest skills.`);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      } else if (mode === "diagnostic") {
        const response = await examApi.practiceDiagnostic({ examKey, variant });
        if (!response.ok) throw new Error(response.error);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      } else if (mode === "adaptive") {
        const response = await examApi.practiceAdaptive({
          examKey,
          variant,
          count: Math.max(4, count),
          timed: adaptiveTimed,
          ...(adaptiveSection !== "all" ? { section: adaptiveSection } : {}),
        });
        if (!response.ok) throw new Error(response.error);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      } else if (mode === "mistakes") {
        const response = await examApi.practiceMistakes({ examKey: examKey as "IELTS" | "TOEFL_IBT", variant, limit: Math.max(4, count) });
        if (!response.ok) throw new Error(response.error);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      } else {
        const timed = mode === "timed";
        const sections = Object.entries(sectionsOn).filter(([, on]) => on).map(([key]) => key);
        const types = Object.entries(typesOn).filter(([, on]) => on).map(([key]) => key);
        const response = await examApi.practiceCustom({
          examKey,
          variant,
          count: Math.max(4, count),
          minutes: timed ? minutes : undefined,
          timed,
          ...(sections.length > 0 ? { sections } : {}),
          ...(types.length > 0 && mode === "custom" ? { types } : {}),
          ...(mode === "custom" ? { difficultyMin, difficultyMax } : {}),
        });
        if (!response.ok) throw new Error(response.error);
        navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not start the practice set.");
    } finally {
      setLaunching(false);
    }
  };

  const visible = (mocks ?? []).filter((mock) => filter === "ALL" || mock.examKey === filter);

  const modeDescription =
    mode === "full"
      ? "Sit an entire library mock under official section clocks. Choose a mock below — “Start timed” runs the real section limits; “Untimed” never locks anything."
      : ATTEMPT_MODE_DESCRIPTIONS[mode] ?? "";

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <button
              onClick={() => navigate({ name: "exams" })}
              className="mb-2 text-sm text-slate-400 transition-colors hover:text-amber-300"
            >
              ← Academy
            </button>
            <h1 className="text-2xl font-bold text-white">Mock examination engine</h1>
            <p className="mt-1 text-sm text-slate-400">
              Ten practice modes over one spec-driven engine: full simulations, section
              sets, timed and untimed drills, topic targeting, weakness remediation,
              diagnostics, adaptive calibration, mistake retries and custom filters.
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-1.5 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white"
            onClick={() => navigate({ name: "exams-history" })}
          >
            <History className="size-4" aria-hidden /> History &amp; trends
          </Button>
        </div>

        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="bg-slate-900">
            {["ALL", "IELTS", "TOEFL_IBT"].map((value) => (
              <TabsTrigger
                key={value}
                value={value}
                className="data-[state=active]:bg-slate-800 data-[state=active]:text-white"
              >
                {value === "TOEFL_IBT" ? "TOEFL iBT" : value === "ALL" ? "All" : "IELTS"}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Practice-mode launcher */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="size-4 text-amber-400" aria-hidden />
              <h2 className="text-sm font-semibold text-white">Start an examination session</h2>
            </div>
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Practice modes">
              {MODE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={mode === tab.id}
                  onClick={() => setMode(tab.id)}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                    mode === tab.id
                      ? "border-amber-400 bg-amber-400/15 text-amber-200"
                      : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-600",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="text-xs leading-relaxed text-slate-400">{modeDescription}</p>

            {mode !== "full" ? (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="practice-exam" className="text-xs text-slate-400">Examination</Label>
                  <select
                    id="practice-exam"
                    value={examChoice}
                    onChange={(event) => setExamChoice(event.target.value)}
                    className="h-9 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm text-slate-200"
                  >
                    {launcherExams.map((exam) => (
                      <option key={`${exam.key}::${exam.variant}`} value={`${exam.key}::${exam.variant}`}>
                        {exam.label}
                      </option>
                    ))}
                  </select>
                </div>
                {mode === "section" ? (
                  <div className="space-y-1.5">
                    <Label htmlFor="practice-section" className="text-xs text-slate-400">Section</Label>
                    <select
                      id="practice-section"
                      value={sectionChoice}
                      onChange={(event) => setSectionChoice(event.target.value)}
                      className="h-9 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm capitalize text-slate-200"
                    >
                      {chosenSections.map((key) => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>
                  </div>
                ) : mode === "topic" ? (
                  <div className="space-y-1.5">
                    <Label htmlFor="practice-topic" className="text-xs text-slate-400">Topic</Label>
                    {topicsLoading ? (
                      <Skeleton className="h-9 w-full bg-slate-800" />
                    ) : topics.length === 0 ? (
                      <p className="text-xs text-slate-500">No topics with enough published items yet.</p>
                    ) : (
                      <select
                        id="practice-topic"
                        value={topicChoice}
                        onChange={(event) => setTopicChoice(event.target.value)}
                        className="h-9 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm text-slate-200"
                      >
                        {topics.map((topic) => (
                          <option key={topic.skill} value={topic.skill}>
                            {topic.label} ({topic.count} items)
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ) : mode === "adaptive" ? (
                  <div className="space-y-1.5">
                    <Label htmlFor="adaptive-section" className="text-xs text-slate-400">Focus section (optional)</Label>
                    <select
                      id="adaptive-section"
                      value={adaptiveSection}
                      onChange={(event) => setAdaptiveSection(event.target.value)}
                      className="h-9 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm capitalize text-slate-200"
                    >
                      <option value="all">All sections</option>
                      {chosenSections.map((key) => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>
                  </div>
                ) : mode === "weakness" || mode === "diagnostic" ? null : (
                  <div className="space-y-1.5">
                    <Label htmlFor="practice-count" className="text-xs text-slate-400">
                      Questions ({mode === "mistakes" ? "up to" : "about"})
                    </Label>
                    <Input
                      id="practice-count"
                      type="number"
                      min={4}
                      max={40}
                      value={count}
                      onChange={(event) => setCount(Math.max(4, Math.min(40, Number(event.target.value) || 4)))}
                      className="h-9 border-slate-700 bg-slate-950 text-slate-200"
                    />
                  </div>
                )}
                {mode === "timed" ? (
                  <div className="space-y-1.5">
                    <Label htmlFor="practice-minutes" className="text-xs text-slate-400">Minutes</Label>
                    <Input
                      id="practice-minutes"
                      type="number"
                      min={3}
                      max={180}
                      value={minutes}
                      onChange={(event) => setMinutes(Math.max(3, Math.min(180, Number(event.target.value) || 15)))}
                      className="h-9 border-slate-700 bg-slate-950 text-slate-200"
                    />
                  </div>
                ) : null}
                {mode === "topic" ? (
                  <div className="flex items-center gap-2 pt-5">
                    <label htmlFor="topic-timed" className="text-xs text-slate-400">Run under a clock</label>
                    <button
                      id="topic-timed"
                      type="button"
                      role="switch"
                      aria-checked={topicTimed}
                      onClick={() => setTopicTimed((v) => !v)}
                      className={cn(
                        "relative h-5 w-9 rounded-full transition-colors",
                        topicTimed ? "bg-amber-400" : "bg-slate-700",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute top-0.5 size-4 rounded-full bg-white transition-all",
                          topicTimed ? "left-4" : "left-0.5",
                        )}
                      />
                    </button>
                  </div>
                ) : null}
                {mode === "adaptive" ? (
                  <div className="flex items-center gap-2 pt-5">
                    <label htmlFor="adaptive-timed" className="text-xs text-slate-400">Run under a clock</label>
                    <button
                      id="adaptive-timed"
                      type="button"
                      role="switch"
                      aria-checked={adaptiveTimed}
                      onClick={() => setAdaptiveTimed((v) => !v)}
                      className={cn(
                        "relative h-5 w-9 rounded-full transition-colors",
                        adaptiveTimed ? "bg-amber-400" : "bg-slate-700",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute top-0.5 size-4 rounded-full bg-white transition-all",
                          adaptiveTimed ? "left-4" : "left-0.5",
                        )}
                      />
                    </button>
                  </div>
                ) : null}
                {mode === "custom" ? (
                  <>
                    <div className="space-y-1.5">
                      <span className="text-xs text-slate-400">Sections (any)</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["listening", "reading", "writing", "speaking"].map((key) => (
                          <button
                            key={key}
                            type="button"
                            aria-pressed={sectionsOn[key] ?? false}
                            onClick={() => setSectionsOn((current) => ({ ...current, [key]: !current[key] }))}
                            className={cn(
                              "rounded-md border px-2 py-1 text-xs capitalize",
                              sectionsOn[key]
                                ? "border-amber-400 bg-amber-400/15 text-amber-200"
                                : "border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-600",
                            )}
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs text-slate-400">Task types (any)</span>
                      <div className="flex max-h-24 flex-wrap gap-1.5 overflow-y-auto">
                        {availableTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            aria-pressed={typesOn[type] ?? false}
                            onClick={() => setTypesOn((current) => ({ ...current, [type]: !current[type] }))}
                            className={cn(
                              "rounded-md border px-2 py-1 text-[10px]",
                              typesOn[type]
                                ? "border-amber-400 bg-amber-400/15 text-amber-200"
                                : "border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-600",
                            )}
                          >
                            {type.replace(/_/g, " ").toLowerCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs text-slate-400">Difficulty range</span>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Input
                          type="number"
                          min={1}
                          max={5}
                          value={difficultyMin}
                          onChange={(event) => setDifficultyMin(Math.max(1, Math.min(5, Number(event.target.value) || 1)))}
                          className="h-8 w-14 border-slate-700 bg-slate-950 text-slate-200"
                          aria-label="Minimum difficulty"
                        />
                        <span>to</span>
                        <Input
                          type="number"
                          min={1}
                          max={5}
                          value={difficultyMax}
                          onChange={(event) => setDifficultyMax(Math.max(1, Math.min(5, Number(event.target.value) || 5)))}
                          className="h-8 w-14 border-slate-700 bg-slate-950 text-slate-200"
                          aria-label="Maximum difficulty"
                        />
                        <span className="text-xs text-slate-500">(1 = foundation … 5 = advanced)</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}

            {/* Weakness preview panel */}
            {mode === "weakness" ? (
              weaknessLoading ? (
                <Skeleton className="h-28 w-full bg-slate-800" />
              ) : weakness ? (
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  {weakness.hasEnoughEvidence ? (
                    <>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Your measured weak spots — {weakness.evidenceItems} graded items analysed
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {weakness.weakestSkills.slice(0, 4).map((skill) => (
                          <Badge key={skill.skill} variant="outline" className="border-rose-500/40 text-rose-300">
                            {skill.label} · {Math.round(skill.accuracy * 100)}%
                          </Badge>
                        ))}
                        {weakness.weakestTasks.slice(0, 2).map((task) => (
                          <Badge key={task.type} variant="outline" className="border-amber-500/40 text-amber-300">
                            {task.label} · {Math.round(task.accuracy * 100)}%
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        The set is assembled untimed from items that test these exact skills and task types — remediation, not simulation.
                      </p>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-400">
                      Not enough graded history yet ({weakness.evidenceItems} items analysed; at
                      least 12 are needed). Sit the <strong className="text-amber-300">Diagnostic</strong> assessment
                      or a section test first — weakness-based practice then assembles itself from your results.
                    </p>
                  )}
                </div>
              ) : null
            ) : null}

            {/* Diagnostic explainer */}
            {mode === "diagnostic" ? (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs leading-relaxed text-slate-400">
                A balanced timed sample (up to 8 items per section, every task family probed,
                section clocks scaled to the sample length). On submission you get a level
                profile: estimated section bands, per-skill accuracy and your weakest task
                types — the recommended starting point of any preparation plan. Practice
                estimates only, never official scores.
              </div>
            ) : null}

            {/* Adaptive honesty note */}
            {mode === "adaptive" ? (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs leading-relaxed text-slate-400">
                {ADAPTIVE_HONESTY_NOTE} Each new set is calibrated to your recent accuracy
                (or to the previous adaptive set when you continue from its result page), and
                steers one difficulty tier up or down.
              </div>
            ) : null}

            {mode !== "full" ? (
              <div className="flex flex-wrap items-center justify-between gap-2">
                {mode === "untimed" ? (
                  <span className="flex items-center gap-1.5 text-xs text-sky-300">
                    <InfinityIcon className="size-3.5" aria-hidden /> Learning mode — answer checking is enabled in the player.
                  </span>
                ) : mode === "mistakes" ? (
                  <span className="flex items-center gap-1.5 text-xs text-rose-300">
                    <RotateCcw className="size-3.5" aria-hidden /> Untimed by default — retry for learning, not for a score.
                  </span>
                ) : mode === "diagnostic" ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <Stethoscope className="size-3.5" aria-hidden /> Always timed — a diagnostic is an assessment.
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Settings2 className="size-3.5" aria-hidden /> Assembled from the published pool of this exam+variant.
                  </span>
                )}
                <Button
                  className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
                  disabled={
                    launching ||
                    launcherExams.length === 0 ||
                    (mode === "topic" && (!topicChoice || topics.length === 0)) ||
                    (mode === "weakness" && (weaknessLoading || !weakness?.hasEnoughEvidence))
                  }
                  onClick={() => void launch()}
                >
                  {launching ? "Assembling…" : mode === "diagnostic" ? "Start assessment" : "Start session"}
                  <ChevronRight className="size-4" aria-hidden />
                </Button>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Library */}
        {!mocks ? (
          <div className="space-y-4">
            {[0, 1].map((i) => (
              <Skeleton key={i} className="h-40 rounded-xl bg-slate-900" />
            ))}
          </div>
        ) : visible.length === 0 ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-8 text-center text-sm text-slate-400">
              No published mock tests for this exam yet.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {visible.map((mock) => {
              const inProgress = mock.attempts.find((a) => a.status === "in_progress");
              const assembled = ASSEMBLED_KINDS.has(mock.kind);
              return (
                <Card key={mock.id} className="border-slate-800 bg-slate-900/60">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-white">{mock.title}</h3>
                          <Badge variant="outline" className="border-slate-700 text-slate-300">
                            {assembled ? "assembled set" : mock.lengthLabel}
                          </Badge>
                          {assembled ? (
                            <Badge variant="outline" className="border-sky-500/40 text-sky-300 capitalize">
                              {mock.kind}
                            </Badge>
                          ) : null}
                        </div>
                        <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-400">
                          {mock.description}
                        </p>
                        <p className="mt-1.5 text-xs text-slate-500">
                          {mock.spec.name} spec v{mock.spec.version} · {mock.questionCount} questions
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        {inProgress ? (
                          <Button
                            className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
                            disabled={starting === mock.id}
                            onClick={() => navigate({ name: "exams-mock", attemptId: inProgress.id })}
                          >
                            Resume <ChevronRight className="size-4" aria-hidden />
                          </Button>
                        ) : (
                          <div className="flex flex-col items-end gap-1.5">
                            <Button
                              className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
                              disabled={starting === mock.id}
                              onClick={() => void start(mock.id, true)}
                            >
                              <Timer className="size-4" aria-hidden />
                              {starting === mock.id ? "Starting…" : "Start timed"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-1.5 border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
                              disabled={starting === mock.id}
                              onClick={() => void start(mock.id, false)}
                            >
                              <InfinityIcon className="size-3.5" aria-hidden /> Untimed
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {mock.attempts.length > 0 ? (
                      <div className="mt-4 border-t border-slate-800 pt-3">
                        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                          <History className="size-3.5" aria-hidden /> Your attempts
                        </div>
                        <div className="space-y-1.5">
                          {mock.attempts.slice(0, 3).map((attempt) => {
                            const abandoned = attempt.status === "abandoned";
                            return (
                              <button
                                key={attempt.id}
                                type="button"
                                onClick={() => {
                                  if (abandoned) return; // unfinished: no report exists
                                  navigate({
                                    name: attempt.status === "in_progress" ? "exams-mock" : "exams-result",
                                    attemptId: attempt.id,
                                  });
                                }}
                                className={cn(
                                  "flex w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-left text-sm transition-colors",
                                  abandoned ? "cursor-default opacity-70" : "hover:border-amber-400/50",
                                )}
                              >
                                <span className="flex items-center gap-2 text-slate-300">
                                  {attempt.status === "in_progress"
                                    ? "In progress"
                                    : new Date(attempt.submittedAt ?? attempt.startedAt).toLocaleString()}
                                  <Badge
                                    variant="outline"
                                    className={cn(
                                      "border-slate-700 text-[10px]",
                                      abandoned ? "text-slate-500" : attempt.timed ? "text-emerald-300" : "text-sky-300",
                                    )}
                                  >
                                    {abandoned ? "unfinished" : attempt.modeLabel.toLowerCase()}
                                  </Badge>
                                </span>
                                <span className="font-medium text-amber-300">
                                  {abandoned
                                    ? "Unfinished — not scored"
                                    : attempt.scoreDisplay ?? (attempt.status === "in_progress" ? "Resume" : "Scoring…")}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber-400/70" aria-hidden />
          Under exam timing the player follows the real test: sections lock when
          finished or expired, the clock cannot be paused, audio plays once, and where
          the real examination offers no control (replays, going back in TOEFL
          Listening) none is given. Untimed runs are always labelled as
          non-exam-condition. Objective items are marked instantly; writing and
          speaking are graded against the public band descriptors (AI-assisted,
          teacher-reviewed where available). All questions are original EnglishPath
          practice materials — not official test questions, and no mock result is an
          official IELTS or ETS score.
        </p>
      </div>
    </div>
  );
}
