"use client";

/**
 * The Evaluation Studio (PROMPT 52): the integrated AI-assisted
 * examination writing and speaking evaluator.
 *
 * Any response, any supported task — the learner picks one of the ten
 * evaluator profiles (IELTS Academic T1/T2, GT T1/T2, Speaking; TOEFL
 * Build a Sentence, Email, Academic Discussion, Listen and Repeat, Take
 * an Interview), optionally pastes the task prompt they were given, and
 * submits a written response — or speaks it with browser speech
 * recognition (which also captures the recording duration for pace and
 * pause analysis). The full report then renders through the shared
 * EvaluationReport with the revision loop attached.
 *
 * The "My evaluations" tab tracks improvement: every past evaluation,
 * grouped per evaluator with first → latest estimated results, and each
 * report expandable in place.
 *
 * Honesty rules carried through every screen: practice estimates, never
 * official IELTS or ETS scores; accents are never errors; uncertain
 * cases say so and recommend human review.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpenCheck,
  Brain,
  ChevronDown,
  ClipboardCheck,
  History as HistoryIcon,
  Keyboard,
  Mic,
  PenLine,
  RefreshCw,
  RotateCcw,
  Sparkles,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useSpeechRecognition } from "@/hooks/use-speech";
import { examApi } from "@/lib/client/exam-api";
import {
  EVALUATOR_KEYS,
  EVALUATOR_PROFILES,
  type EvaluatorKey,
} from "@/lib/exams/evaluation/tasks";
import type {
  EvaluationComparisonDto,
  EvaluationOverviewDto,
  StoredEvaluationDto,
} from "@/lib/exams/evaluation/types";
import {
  ComparisonReport,
  EvaluationReport,
  ProvenanceLegend,
} from "./evaluation/EvaluationReport";

type Tab = "evaluate" | "history";

const EVALUATOR_GROUPS: Array<{ label: string; keys: EvaluatorKey[] }> = [
  { label: "IELTS Writing", keys: ["IELTS_WRITING_ACADEMIC_T1", "IELTS_WRITING_ACADEMIC_T2", "IELTS_WRITING_GT_T1", "IELTS_WRITING_GT_T2"] },
  { label: "IELTS Speaking", keys: ["IELTS_SPEAKING"] },
  { label: "TOEFL Writing (2026 format)", keys: ["TOEFL_WRITING_SENTENCE", "TOEFL_WRITING_EMAIL", "TOEFL_WRITING_DISCUSSION"] },
  { label: "TOEFL Speaking (2026 format)", keys: ["TOEFL_SPEAKING_LISTEN_REPEAT", "TOEFL_SPEAKING_INTERVIEW"] },
];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ---------------------------------------------------------------------------
// View
// ---------------------------------------------------------------------------

export function EvaluationStudioView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [tab, setTab] = useState<Tab>("evaluate");
  const [evaluatorKey, setEvaluatorKey] = useState<EvaluatorKey>("IELTS_WRITING_ACADEMIC_T2");
  const [taskPrompt, setTaskPrompt] = useState("");
  /** The edited response; null = use the recognised transcript untouched. */
  const [manualText, setManualText] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [evaluation, setEvaluation] = useState<StoredEvaluationDto | null>(null);
  const [comparison, setComparison] = useState<EvaluationComparisonDto | null>(null);
  const [revisionOpen, setRevisionOpen] = useState(false);
  const [revisionText, setRevisionText] = useState("");
  const [overview, setOverview] = useState<EvaluationOverviewDto | null>(null);
  const [overviewLoading, setOverviewLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [audioSec, setAudioSec] = useState<number | null>(null);

  const profile = EVALUATOR_PROFILES[evaluatorKey];
  const isSpeaking = profile.section === "speaking";
  const recognition = useSpeechRecognition();
  const listenStartRef = useRef<number | null>(null);

  // Derived: the response text is either the recognised transcript or the
  // learner's edit — no state mirroring, no effects.
  const responseText = manualText ?? recognition.transcript;
  const sttUsed = !isSpeaking ? false : recognition.transcript.trim().length > 0 && manualText === null ? true : manualText !== null ? manualText.trim().length > 0 && recognition.transcript.trim().length > 0 : false;
  const setResponseText = (value: string) => setManualText(value);

  const toggleRecording = () => {
    if (recognition.listening) {
      recognition.stop();
      if (listenStartRef.current !== null) {
        const seconds = (Date.now() - listenStartRef.current) / 1000;
        listenStartRef.current = null;
        if (seconds >= 1) setAudioSec(Math.round(seconds * 10) / 10);
      }
    } else {
      listenStartRef.current = Date.now();
      setAudioSec(null);
      setManualText(null); // let the fresh transcript flow into the editor
      recognition.start();
    }
  };

  const loadOverview = useCallback(async () => {
    setOverviewLoading(true);
    const response = await examApi.evaluationOverview();
    if (response.ok) setOverview(response.data);
    setOverviewLoading(false);
  }, []);

  const openTab = (next: Tab) => {
    setTab(next);
    if (next === "history" && !overview && !overviewLoading) void loadOverview();
  };

  const resetForEvaluator = (key: EvaluatorKey) => {
    setEvaluatorKey(key);
    setEvaluation(null);
    setComparison(null);
    setManualText(null);
    setTaskPrompt("");
    setAudioSec(null);
  };

  const submit = async () => {
    if (responseText.trim().length === 0) return;
    setBusy(true);
    const response = await examApi.evaluate({
      evaluatorKey,
      taskPrompt: taskPrompt.trim() || undefined,
      text: responseText,
      transcriptSource: isSpeaking ? (sttUsed ? "browser-stt" : "typed") : "typed",
      audioSec: isSpeaking && sttUsed ? (audioSec ?? undefined) : undefined,
    });
    setBusy(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setEvaluation(response.data.evaluation);
    setComparison(null);
    setRevisionText(response.data.evaluation.inputText);
    setRevisionOpen(false);
    toast.success("Evaluation complete — scroll down for the full report.");
    if (overview) void loadOverview();
  };

  const submitRevision = async () => {
    if (!evaluation || revisionText.trim().length === 0) return;
    setBusy(true);
    const response = await examApi.reviseEvaluation(evaluation.id, {
      text: revisionText,
      transcriptSource: isSpeaking ? (sttUsed ? "browser-stt" : "typed") : "typed",
      audioSec: isSpeaking && sttUsed ? (audioSec ?? undefined) : undefined,
    });
    setBusy(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setEvaluation(response.data.evaluation);
    setComparison(response.data.comparison);
    setRevisionOpen(false);
    toast.success("Revision evaluated — improvement tracked against the same rubric.");
    void loadOverview();
  };

  const grouped = useMemo(
    () =>
      EVALUATOR_GROUPS.map((group) => ({
        ...group,
        keys: group.keys.filter((key) => EVALUATOR_KEYS.includes(key)),
      })).filter((group) => group.keys.length > 0),
    [],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Button
            variant="outline"
            size="sm"
            className="mb-2 h-7 border-slate-700 bg-transparent px-2 text-[11px] text-slate-300 hover:bg-slate-900"
            onClick={() => navigate({ name: "exams-dashboard" })}
          >
            <ArrowLeft className="mr-1 size-3" aria-hidden /> Exam dashboard
          </Button>
          <h1 className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
            <Brain className="size-6 text-violet-400" aria-hidden /> Evaluation Studio
          </h1>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-400">
            Submit any writing or speaking response for examiner-style feedback: criterion estimates with quoted
            evidence, verified checks, corrections, a model response and a revision exercise — for every IELTS and
            TOEFL 2026 writing/speaking task. Practice estimates only, never official IELTS or ETS scores.
          </p>
        </div>
        <div className="flex rounded-lg border border-slate-800 bg-slate-900 p-0.5">
          <button
            type="button"
            onClick={() => setTab("evaluate")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              tab === "evaluate" ? "bg-violet-500 text-white" : "text-slate-400 hover:text-slate-200",
            )}
          >
            <PenLine className="size-3.5" aria-hidden /> Evaluate
          </button>
          <button
            type="button"
            onClick={() => openTab("history")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              tab === "history" ? "bg-violet-500 text-white" : "text-slate-400 hover:text-slate-200",
            )}
          >
            <HistoryIcon className="size-3.5" aria-hidden /> My evaluations
          </button>
        </div>
      </div>

      {tab === "evaluate" ? (
        <div className="mt-5 space-y-5">
          {/* Step 1: evaluator picker */}
          <section aria-labelledby="evaluator-pick">
            <h2 id="evaluator-pick" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-200">
              <ClipboardCheck className="size-4 text-amber-400" aria-hidden /> 1 — Choose the task you are practising
            </h2>
            <div className="space-y-3">
              {grouped.map((group) => (
                <div key={group.label}>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{group.label}</p>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {group.keys.map((key) => {
                      const entry = EVALUATOR_PROFILES[key];
                      const active = key === evaluatorKey;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => resetForEvaluator(key)}
                          aria-pressed={active}
                          className={cn(
                            "rounded-lg border p-2.5 text-left transition-colors",
                            active
                              ? "border-violet-500/60 bg-violet-500/10"
                              : "border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900",
                          )}
                        >
                          <span className={cn("block text-xs font-medium", active ? "text-violet-200" : "text-slate-200")}>
                            {entry.taskLabel}
                          </span>
                          <span className="mt-0.5 block text-[10px] leading-relaxed text-slate-500">
                            {entry.criteria.map((c) => c.name).join(" · ")}
                          </span>
                          <span className="mt-1 block text-[10px] text-slate-600">
                            {entry.scale.kind === "BAND"
                              ? "Bands 0–9"
                              : entry.scale.kind === "TOEFL_LEVEL"
                                ? "Levels 1–5"
                                : "Machine-measured accuracy"}
                            {entry.minWordsDefault ? ` · ${entry.minWordsDefault}+ words` : ""}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 2: the task + response */}
          <section aria-labelledby="evaluator-submit">
            <h2 id="evaluator-submit" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-200">
              <BookOpenCheck className="size-4 text-amber-400" aria-hidden /> 2 — Your task and response
            </h2>
            <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/60 p-3 sm:p-4">
              <div>
                <label htmlFor="task-prompt" className="mb-1 block text-[11px] font-medium text-slate-300">
                  Task prompt (optional — paste the question you were given)
                </label>
                <Textarea
                  id="task-prompt"
                  value={taskPrompt}
                  onChange={(event) => setTaskPrompt(event.target.value)}
                  rows={3}
                  placeholder={
                    isSpeaking
                      ? "e.g. Describe a place you like to visit on weekends. You should say…"
                      : evaluatorKey.includes("T1")
                        ? "e.g. The charts show… Summarise the information by selecting and reporting the main features."
                        : "e.g. Some people believe… Discuss both views and give your own opinion."
                  }
                  className="border-slate-700 bg-slate-900 text-xs text-slate-200"
                />
                <p className="mt-1 text-[10px] text-slate-500">
                  With the prompt, task-fit feedback follows your exact task. Without it, the standard format of
                  {` ${profile.taskLabel}`} is used.
                </p>
              </div>

              {isSpeaking ? (
                <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                      <Mic className="size-3.5 text-rose-400" aria-hidden /> Speak your answer
                      {recognition.supported ? null : (
                        <span className="text-slate-500">(not supported in this browser — type instead)</span>
                      )}
                    </div>
                    {audioSec !== null ? (
                      <Badge variant="outline" className="border-emerald-500/40 text-[9px] text-emerald-300">
                        {audioSec.toFixed(0)}s recorded — pace analysis on
                      </Badge>
                    ) : null}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Button
                      size="sm"
                      className={cn(
                        "h-7 gap-1 px-3 text-[11px] text-white",
                        recognition.listening ? "bg-rose-500 hover:bg-rose-400" : "bg-violet-500 hover:bg-violet-400",
                      )}
                      disabled={!recognition.supported}
                      onClick={toggleRecording}
                    >
                      <Mic className="size-3" aria-hidden />
                      {recognition.listening ? "Stop recording" : "Record with speech recognition"}
                    </Button>
                    <span className="text-[10px] text-slate-500">
                      {recognition.listening ? "Listening… speak now." : "The transcript fills the editor below; you can edit it."}
                    </span>
                  </div>
                  {recognition.error ? (
                    <p className="mt-1.5 text-[10px] text-amber-300">{recognition.error}</p>
                  ) : null}
                </div>
              ) : null}

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label htmlFor="response-text" className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                    <Keyboard className="size-3.5 text-slate-500" aria-hidden />
                    {isSpeaking ? "Transcript (edit what was heard, or type your answer)" : "Your response"}
                  </label>
                  <span className={cn("text-[10px]", countWords(responseText) >= (profile.minWordsDefault ?? 0) ? "text-emerald-400" : "text-slate-500")}>
                    {countWords(responseText)} words{profile.minWordsDefault ? ` / ${profile.minWordsDefault} expected` : ""}
                  </span>
                </div>
                <Textarea
                  id="response-text"
                  value={responseText}
                  onChange={(event) => setResponseText(event.target.value)}
                  rows={isSpeaking ? 5 : 10}
                  placeholder={
                    isSpeaking
                      ? "Record above, or type your spoken answer here…"
                      : "Write your response to the task…"
                  }
                  className="border-slate-700 bg-slate-900 text-xs leading-relaxed text-slate-200"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="max-w-md text-[10px] leading-relaxed text-slate-500">
                  {isSpeaking
                    ? "Speech recognition is used where available; accents are never treated as errors. The recording duration enables pace and pause analysis."
                    : "The evaluation runs verified checks and rule-based analysis first, then AI feedback on top — each labelled by its source."}
                </p>
                <Button
                  className="gap-1.5 bg-violet-500 px-4 text-xs text-white hover:bg-violet-400"
                  disabled={busy || responseText.trim().length === 0}
                  onClick={() => void submit()}
                >
                  {busy ? <RefreshCw className="size-3.5 animate-spin" aria-hidden /> : <Brain className="size-3.5" aria-hidden />}
                  {busy ? "Evaluating…" : "Evaluate my response"}
                </Button>
              </div>
            </div>
          </section>

          {/* Step 3: the report */}
          {evaluation ? (
            <section aria-labelledby="evaluator-report">
              <h2 id="evaluator-report" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-200">
                <Sparkles className="size-4 text-amber-400" aria-hidden /> 3 — Your evaluation report
              </h2>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-3 sm:p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[10px] text-slate-500">
                    Rubric applied: {evaluation.result.taskLabel} — {evaluation.result.taskTitle} · {new Date(evaluation.createdAt).toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1.5">
                    {evaluation.review.status === "human_reviewed" ? (
                      <Badge variant="outline" className="border-teal-500/40 px-1.5 py-0 text-[9px] text-teal-300">
                        <UserCheck className="mr-1 size-3" aria-hidden /> human-reviewed
                      </Badge>
                    ) : null}
                    <Badge
                      variant="outline"
                      className={cn(
                        "px-1.5 py-0 text-[9px]",
                        evaluation.status === "complete"
                          ? "border-emerald-500/40 text-emerald-300"
                          : evaluation.status === "partial"
                            ? "border-amber-500/40 text-amber-300"
                            : "border-rose-500/40 text-rose-300",
                      )}
                    >
                      {evaluation.status === "complete"
                        ? "AI + verified checks"
                        : evaluation.status === "partial"
                          ? "checks only — AI unavailable"
                          : "too short to evaluate"}
                    </Badge>
                  </div>
                </div>

                <EvaluationReport result={evaluation.result} review={evaluation.review} />

                {/* Revision loop */}
                {evaluation.result.revisionGuidance || evaluation.result.revisionExercise ? (
                  <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                    <button
                      type="button"
                      onClick={() => setRevisionOpen((open) => !open)}
                      className="flex w-full items-center justify-between gap-2 text-left"
                      aria-expanded={revisionOpen}
                    >
                      <span className="flex items-center gap-1.5 text-xs font-medium text-violet-300">
                        <RotateCcw className="size-3.5" aria-hidden /> Revise and re-submit
                      </span>
                      <ChevronDown className={cn("size-3.5 text-slate-500 transition-transform", revisionOpen && "rotate-180")} aria-hidden />
                    </button>
                    {!revisionOpen ? (
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                        {evaluation.result.revisionExercise
                          ? `${evaluation.result.revisionExercise.title}: ${evaluation.result.revisionExercise.steps.length} steps in the report above — work through them, then open this to submit your revision.`
                          : evaluation.result.revisionGuidance}
                      </p>
                    ) : (
                      <div className="mt-2 space-y-2">
                        {evaluation.result.revisionGuidance ? (
                          <p className="text-[11px] leading-relaxed text-slate-500">{evaluation.result.revisionGuidance}</p>
                        ) : null}
                        <Textarea
                          value={revisionText}
                          onChange={(event) => setRevisionText(event.target.value)}
                          rows={isSpeaking ? 5 : 10}
                          className="border-slate-700 bg-slate-900 text-xs text-slate-200"
                          aria-label="Revised response"
                        />
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] text-slate-600">{countWords(revisionText)} words</span>
                          <Button
                            size="sm"
                            className="h-7 bg-violet-500 px-3 text-[11px] text-white hover:bg-violet-400"
                            disabled={busy || revisionText.trim().length === 0}
                            onClick={() => void submitRevision()}
                          >
                            {busy ? "Re-evaluating…" : "Submit revision for re-evaluation"}
                          </Button>
                        </div>
                      </div>
                    )}
                    {comparison ? <div className="mt-2"><ComparisonReport comparison={comparison} /></div> : null}
                  </div>
                ) : null}

                <div className="mt-3">
                  <ProvenanceLegend />
                </div>
              </div>
            </section>
          ) : null}
        </div>
      ) : (
        /* --------------------------------------------------------------- */
        /* History tab                                                     */
        /* --------------------------------------------------------------- */
        <div className="mt-5 space-y-4">
          {overviewLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-20 w-full bg-slate-800" />
              <Skeleton className="h-20 w-full bg-slate-800" />
            </div>
          ) : !overview || overview.totalEvaluations === 0 ? (
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-6 text-center">
              <HistoryIcon className="mx-auto size-8 text-slate-600" aria-hidden />
              <p className="mt-2 text-sm font-medium text-slate-300">No evaluations yet</p>
              <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-slate-500">
                Evaluate your first response on the Evaluate tab — every evaluation is kept here so you can
                re-read reports, compare attempts and watch your estimated results move.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 h-7 border-slate-700 bg-transparent px-3 text-[11px] text-slate-300 hover:bg-slate-900"
                onClick={() => setTab("evaluate")}
              >
                <PenLine className="mr-1 size-3" aria-hidden /> Evaluate a response
              </Button>
            </div>
          ) : (
            <>
              {/* Improvement rollup */}
              <section aria-labelledby="improvement-heading">
                <h2 id="improvement-heading" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-200">
                  <TrendingUp className="size-4 text-emerald-400" aria-hidden /> Improvement by task
                  <span className="font-normal text-[10px] text-slate-500">
                    {overview.totalEvaluations} evaluation{overview.totalEvaluations === 1 ? "" : "s"} · practice estimates, never official scores
                  </span>
                </h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {overview.improvement.map((item) => (
                    <div key={item.evaluatorKey} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-slate-200">{item.label}</span>
                        <Badge variant="outline" className="px-1.5 py-0 text-[9px] text-slate-400">
                          {item.attempts} attempt{item.attempts === 1 ? "" : "s"} · {item.chains} chain{item.chains === 1 ? "" : "s"}
                        </Badge>
                      </div>
                      {item.firstOverall !== null && item.latestOverall !== null ? (
                        <p className="mt-1.5 text-[11px] text-slate-400">
                          First <span className="font-semibold text-slate-300">{item.firstOverall.toFixed(1)}</span>
                          {" → latest "}
                          <span className="font-semibold text-amber-300">{item.latestOverall.toFixed(1)}</span>
                          {item.overallDelta !== null ? (
                            <span className={cn("ml-1.5 font-semibold", item.overallDelta > 0 ? "text-emerald-400" : item.overallDelta < 0 ? "text-rose-400" : "text-slate-500")}>
                              {item.overallDelta > 0 ? `+${item.overallDelta.toFixed(1)}` : item.overallDelta.toFixed(1)} {item.unit}s
                            </span>
                          ) : null}
                        </p>
                      ) : (
                        <p className="mt-1.5 text-[11px] text-slate-500">
                          {item.attempts} evaluation{item.attempts === 1 ? "" : "s"} recorded — no comparable estimate yet.
                        </p>
                      )}
                      <p className="mt-0.5 text-[10px] text-slate-600">Last: {new Date(item.lastAt).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Evaluation list */}
              <section aria-labelledby="evaluation-list-heading">
                <h2 id="evaluation-list-heading" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-200">
                  <HistoryIcon className="size-4 text-sky-400" aria-hidden /> Recent reports
                </h2>
                <div className="space-y-2">
                  {overview.evaluations.map((item) => {
                    const open = expandedId === item.id;
                    return (
                      <div key={item.id} className="rounded-lg border border-slate-800 bg-slate-950">
                        <button
                          type="button"
                          onClick={() => setExpandedId(open ? null : item.id)}
                          className="flex w-full flex-wrap items-center justify-between gap-2 p-3 text-left"
                          aria-expanded={open}
                        >
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-medium text-slate-200">{item.result.taskLabel}</span>
                            {item.isRevision ? (
                              <Badge variant="outline" className="px-1.5 py-0 text-[9px] text-violet-300">revision</Badge>
                            ) : null}
                            {item.review.status === "human_reviewed" ? (
                              <Badge variant="outline" className="border-teal-500/40 px-1.5 py-0 text-[9px] text-teal-300">human-reviewed</Badge>
                            ) : null}
                            <Badge
                              variant="outline"
                              className={cn(
                                "px-1.5 py-0 text-[9px]",
                                item.status === "complete" ? "border-emerald-500/40 text-emerald-300" : item.status === "partial" ? "border-amber-500/40 text-amber-300" : "border-rose-500/40 text-rose-300",
                              )}
                            >
                              {item.status}
                            </Badge>
                          </span>
                          <span className="flex items-center gap-2 text-[10px] text-slate-500">
                            {item.result.overall ? <span className="font-semibold text-amber-300">{item.result.overall.score.toFixed(1)}</span> : null}
                            {item.result.wordCount} words · {new Date(item.createdAt).toLocaleDateString()}
                            <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden />
                          </span>
                        </button>
                        {open ? (
                          <div className="border-t border-slate-800 p-3">
                            <EvaluationReport result={item.result} review={item.review} />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            </>
          )}
        </div>
      )}
    </div>
  );
}
