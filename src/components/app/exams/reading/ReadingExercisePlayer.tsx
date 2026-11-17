"use client";

/**
 * IELTS Reading Masterclass — the passage player (PROMPT 45, Parts B–F).
 *
 * One component, three ways to run a passage:
 *   practice — untimed study session (timer counts up, labelled as such)
 *   timed    — one passage against the 20-minute per-passage budget
 *   sim      — a full simulation: several passages, one shared 60-minute
 *              clock, passage-by-passage submission under a run id
 *
 * The review phase (shared with the hub's past-attempt review) shows every
 * item's given/keyed answer, the passage EVIDENCE that settles it — the
 * cited paragraph highlights in place — the revealed glossary, and the
 * why-wrong notes where a plausible alternative exists (Part F).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { examApi } from "@/lib/client/exam-api";
import type { GradedReadingExercise, SafeReadingExercise } from "@/lib/exams/reading-bank/service";
import type { ReadingGlossaryEntry } from "@/data/exams/ielts/reading-bank/types";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import { toast } from "sonner";
import { AlertTriangle, ArrowLeft, BookOpen, CheckCircle2, Clock, FileText, Lock, Timer, XCircle } from "lucide-react";

// ---------------------------------------------------------------------------
// Answer state
// ---------------------------------------------------------------------------

type AnswerValue =
  | { format: "completion"; blanks: Record<string, string> }
  | { format: "mcq"; options: number[] }
  | { format: "mcq-multi"; options: number[] }
  | { format: "verdict"; choices: string[] }
  | { format: "matching"; pairs: number[] };

type AnswerMap = Record<string, AnswerValue>;

const fmtClock = (sec: number): string => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

const PARAGRAPH_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function paragraphLettersFor(exercise: SafeReadingExercise): { block: number; paragraph: number; letter: string }[] {
  const out: { block: number; paragraph: number; letter: string }[] = [];
  let n = 0;
  exercise.blocks.forEach((b, bi) =>
    b.paragraphs.forEach((_p, pi) => {
      out.push({ block: bi, paragraph: pi, letter: PARAGRAPH_LETTERS[n] ?? String(n) });
      n += 1;
    }),
  );
  return out;
}

// ---------------------------------------------------------------------------
// The review panel — shared by the player and the past-attempt review (Part F)
// ---------------------------------------------------------------------------

export function ReadingReviewPanel({
  exercise,
  result,
  glossary,
}: {
  exercise: SafeReadingExercise;
  result: GradedReadingExercise;
  glossary: ReadingGlossaryEntry[];
}) {
  const [highlight, setHighlight] = useState<{ block: number; paragraph: number } | null>(null);
  const passageRef = useRef<HTMLDivElement | null>(null);
  const paragraphRefs = useRef<Map<string, HTMLParagraphElement>>(new Map());
  const letters = useMemo(() => paragraphLettersFor(exercise), [exercise]);
  const safeById = useMemo(
    () => new Map(exercise.questions.map((q) => [q.id, q] as const)),
    [exercise],
  );

  const letterOf = useCallback(
    (block: number, paragraph: number): string => {
      const hit = letters.find((l) => l.block === block && l.paragraph === paragraph);
      return hit?.letter ?? "";
    },
    [letters],
  );

  const showEvidence = (block: number, paragraph: number) => {
    setHighlight({ block, paragraph });
    const el = paragraphRefs.current.get(`${block}-${paragraph}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      passageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const counts = result.errorCounts;

  return (
    <div className="space-y-6">
      {/* Headline score */}
      <Card className="border-slate-800 bg-slate-900/60">
        <CardContent className="flex flex-wrap items-center gap-x-8 gap-y-3 p-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Score</p>
            <p className="text-2xl font-bold text-white">
              {result.correctItems}<span className="text-base font-medium text-slate-400"> / {result.totalItems}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {counts.spelling > 0 ? <Badge variant="outline" className="border-violet-500/40 text-violet-300">{counts.spelling} spelling</Badge> : null}
            {counts["word-limit"] > 0 ? <Badge variant="outline" className="border-orange-500/40 text-orange-300">{counts["word-limit"]} word limit</Badge> : null}
            {counts.trap > 0 ? <Badge variant="outline" className="border-rose-500/40 text-rose-300">{counts.trap} trap taken</Badge> : null}
            {counts.inference > 0 ? <Badge variant="outline" className="border-sky-500/40 text-sky-300">{counts.inference} inference</Badge> : null}
            {counts.vocabulary > 0 ? <Badge variant="outline" className="border-amber-500/40 text-amber-300">{counts.vocabulary} vocabulary</Badge> : null}
            {counts.missed > 0 ? <Badge variant="outline" className="border-slate-600 text-slate-400">{counts.missed} blank</Badge> : null}
          </div>
          <p className="ml-auto max-w-md text-xs leading-relaxed text-slate-400">{exercise.passageNote}</p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Passage with evidence highlighting */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
            <BookOpen className="size-4 text-cyan-400" aria-hidden /> The passage — click an item to see its evidence
          </div>
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="max-h-[32rem] space-y-4 overflow-y-auto p-5" ref={passageRef}>
              {exercise.blocks.map((block, bi) => (
                <div key={bi} className="space-y-3">
                  {exercise.blocks.length > 1 || block.heading !== exercise.title ? (
                    <p className="text-xs font-bold uppercase tracking-wide text-cyan-300">{block.heading}</p>
                  ) : null}
                  {block.paragraphs.map((p, pi) => {
                    const isHot = highlight?.block === bi && highlight?.paragraph === pi;
                    return (
                      <p
                        key={pi}
                        ref={(el) => {
                          if (el) paragraphRefs.current.set(`${bi}-${pi}`, el);
                        }}
                        className={`text-sm leading-7 text-slate-300 transition-colors ${isHot ? "rounded-md bg-amber-400/15 p-2 text-amber-100 ring-1 ring-amber-400/40" : ""}`}
                      >
                        <span className="mr-2 font-mono text-xs font-bold text-cyan-400">{letterOf(bi, pi)}</span>
                        {p}
                      </p>
                    );
                  })}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Glossary — revealed only now (Part D + F) */}
          {glossary.length > 0 ? (
            <Card className="mt-4 border-slate-800 bg-slate-900/60">
              <CardContent className="p-5">
                <p className="mb-3 text-sm font-semibold text-white">Vocabulary from this passage</p>
                <dl className="space-y-2.5">
                  {glossary.map((g) => (
                    <div key={g.word} className="text-sm">
                      <dt className="font-semibold text-cyan-200">
                        {g.word} <span className="font-normal italic text-slate-400">({g.partOfSpeech})</span>
                      </dt>
                      <dd className="text-slate-300">{g.definition}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ) : null}
        </div>

        {/* Per-item feedback */}
        <div className="space-y-4">
          {result.questions.map((q) => {
          const safe = safeById.get(q.questionId);
          return (
          <Card key={q.questionId} className="border-slate-800 bg-slate-900/60">
            <CardContent className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-white">{safe?.label ?? q.questionId}</p>
                <Badge variant="outline" className="border-slate-600 text-slate-400">{q.typeLabel}</Badge>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{safe?.instruction}</p>
                {q.items.map((item) => (
                  <div key={item.no} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
                    <button
                      type="button"
                      onClick={() => {
                        const first = item.evidence[0];
                        if (first) showEvidence(first.block, first.paragraph);
                      }}
                      className="flex w-full items-start gap-2 text-left"
                    >
                      {item.correct ? (
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden />
                      ) : (
                        <XCircle className="mt-0.5 size-4 shrink-0 text-rose-400" aria-hidden />
                      )}
                      <span className="text-sm">
                        <span className="font-semibold text-white">{item.no}.</span>{" "}
                        <span className="text-slate-300">
                          You: <span className={item.correct ? "text-emerald-300" : "text-rose-300"}>{item.given}</span>
                          {!item.correct ? (
                            <>
                              {" "}· Key: <span className="text-emerald-300">{item.expected}</span>
                            </>
                          ) : null}
                        </span>
                      </span>
                    </button>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.explanation}</p>
                    {item.trapNote && !item.correct ? (
                      <p className="mt-2 flex items-start gap-1.5 text-xs text-rose-300">
                        <AlertTriangle className="mt-0.5 size-3.5 shrink-0" aria-hidden /> {item.trapNote}
                      </p>
                    ) : null}
                    {item.whyWrong.length > 0 && !item.correct ? (
                      <ul className="mt-2 space-y-1.5">
                        {item.whyWrong.map((w, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs leading-relaxed text-slate-400">
                            <span className="mt-1 size-1 shrink-0 rounded-full bg-slate-500" aria-hidden /> {w}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {item.evidence.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          const first = item.evidence[0];
                          if (first) showEvidence(first.block, first.paragraph);
                        }}
                        className="mt-2.5 w-full rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-left text-xs italic leading-relaxed text-cyan-200 transition-colors hover:bg-cyan-500/20"
                      >
                        {item.evidence.map((ev, i) => (
                          <span key={i} className="block">
                            <span className="font-mono font-bold not-italic text-cyan-300">{letterOf(ev.block, ev.paragraph)}</span>{" "}
                            “{ev.quote}”
                          </span>
                        ))}
                      </button>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Question renderers (answering phase)
// ---------------------------------------------------------------------------

function CompletionGroup({
  q,
  value,
  onChange,
  disabled,
}: {
  q: Extract<SafeReadingExercise["questions"][number], { type: "sentence-completion" | "summary-completion" | "note-completion" | "table-completion" | "flowchart-completion" }>;
  value: AnswerMap[string] | undefined;
  onChange: (v: AnswerValue) => void;
  disabled: boolean;
}) {
  const blanks = value?.format === "completion" ? value.blanks : {};
  return (
    <div className="space-y-2">
      {q.layout.map((row, ri) => (
        <div key={ri} className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1.5">
          {row.map((cell, ci) =>
            cell.kind === "text" ? (
              <span key={ci} className="text-sm leading-7 text-slate-300">{cell.text}</span>
            ) : (
              <span key={ci} className="inline-flex items-center gap-1">
                <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] font-bold text-cyan-300">{cell.no}</span>
                <input
                  type="text"
                  disabled={disabled}
                  value={blanks[String(cell.no)] ?? ""}
                  onChange={(e) =>
                    onChange({
                      format: "completion",
                      blanks: { ...blanks, [String(cell.no)]: e.target.value },
                    })
                  }
                  className="w-36 rounded-md border border-slate-600 bg-slate-950 px-2 py-1 text-sm text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none disabled:opacity-60"
                  placeholder={`max ${q.wordLimit} ${q.wordLimit === 1 ? "word" : "words"}`}
                  aria-label={`Answer ${cell.no}`}
                />
              </span>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

function DiagramGroup({
  q,
  value,
  onChange,
  disabled,
}: {
  q: Extract<SafeReadingExercise["questions"][number], { type: "diagram-labelling" }>;
  value: AnswerMap[string] | undefined;
  onChange: (v: AnswerValue) => void;
  disabled: boolean;
}) {
  const blanks = value?.format === "completion" ? value.blanks : {};
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-cyan-200">{q.plan.title}</p>
      <p className="text-xs italic text-slate-400">{q.plan.caption}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {q.plan.grid.flat().map((cell, i) =>
          cell === null ? (
            <div key={i} className="hidden sm:block" aria-hidden />
          ) : (
            <div key={i} className="rounded-lg border border-slate-700 bg-slate-950/60 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-cyan-300">{cell.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{cell.caption}</p>
              {cell.blank ? (
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] font-bold text-cyan-300">{cell.blank}</span>
                  <input
                    type="text"
                    disabled={disabled}
                    value={blanks[String(cell.blank)] ?? ""}
                    onChange={(e) =>
                      onChange({
                        format: "completion",
                        blanks: { ...blanks, [String(cell.blank)]: e.target.value },
                      })
                    }
                    className="w-full rounded-md border border-slate-600 bg-slate-950 px-2 py-1 text-sm text-white focus:border-cyan-400 focus:outline-none disabled:opacity-60"
                    aria-label={`Answer ${cell.blank}`}
                  />
                </div>
              ) : null}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function McqGroup({
  q,
  value,
  onChange,
  disabled,
}: {
  q: Extract<SafeReadingExercise["questions"][number], { type: "multiple-choice" }>;
  value: AnswerMap[string] | undefined;
  onChange: (v: AnswerValue) => void;
  disabled: boolean;
}) {
  const options = value?.format === "mcq" ? value.options : [];
  const pick = (itemIndex: number, optionIndex: number) => {
    const next = [...options];
    next[itemIndex] = optionIndex;
    onChange({ format: "mcq", options: next });
  };
  return (
    <div className="space-y-4">
      {q.items.map((item, i) => (
        <div key={i} className="space-y-1.5">
          <p className="text-sm font-medium leading-6 text-slate-200">
            <span className="font-mono font-bold text-cyan-300">{options[i] !== undefined ? "" : ""}</span>
            {item.stem}
          </p>
          <div className="grid gap-1.5 sm:grid-cols-2">
            {item.options.map((opt, oi) => {
              const active = options[i] === oi;
              return (
                <button
                  key={oi}
                  type="button"
                  disabled={disabled}
                  onClick={() => pick(i, oi)}
                  className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm leading-5 transition-colors ${
                    active ? "border-cyan-400 bg-cyan-500/15 text-white" : "border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${active ? "border-cyan-400 text-cyan-300" : "border-slate-500 text-slate-400"}`}>
                    {String.fromCharCode(65 + oi)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function McqMultiGroup({
  q,
  value,
  onChange,
  disabled,
}: {
  q: Extract<SafeReadingExercise["questions"][number], { type: "multiple-choice-multi" }>;
  value: AnswerMap[string] | undefined;
  disabled: boolean;
  onChange: (v: AnswerValue) => void;
}) {
  const options = value?.format === "mcq-multi" ? value.options : [];
  const toggle = (oi: number) => {
    const next = options.includes(oi) ? options.filter((x) => x !== oi) : [...options, oi];
    onChange({ format: "mcq-multi", options: next });
  };
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium leading-6 text-slate-200">{q.stem}</p>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {q.options.map((opt, oi) => {
          const active = options.includes(oi);
          return (
            <button
              key={oi}
              type="button"
              disabled={disabled}
              onClick={() => toggle(oi)}
              className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm leading-5 transition-colors ${
                active ? "border-cyan-400 bg-cyan-500/15 text-white" : "border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500"
              }`}
            >
              <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border text-[11px] font-bold ${active ? "border-cyan-400 text-cyan-300" : "border-slate-500 text-slate-400"}`}>
                {active ? "✓" : String.fromCharCode(65 + oi)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-slate-500">Choose {q.choose} letters.</p>
    </div>
  );
}

function VerdictGroup({
  q,
  value,
  onChange,
  disabled,
}: {
  q: Extract<SafeReadingExercise["questions"][number], { type: "true-false-not-given" | "yes-no-not-given" }>;
  value: AnswerMap[string] | undefined;
  onChange: (v: AnswerValue) => void;
  disabled: boolean;
}) {
  const choices = value?.format === "verdict" ? value.choices : [];
  return (
    <div className="space-y-3">
      {q.statements.map((s, i) => (
        <div key={i} className="space-y-1.5">
          <p className="text-sm leading-6 text-slate-200">
            <span className="font-mono font-bold text-cyan-300">{i + 1 + ". "}</span>
            {s}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {q.choices.map((c) => {
              const active = (choices[i] ?? "") === c;
              return (
                <button
                  key={c}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    const next = [...choices];
                    next[i] = c;
                    onChange({ format: "verdict", choices: next });
                  }}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    active ? "border-cyan-400 bg-cyan-500/20 text-white" : "border-slate-600 bg-slate-950/40 text-slate-300 hover:border-slate-400"
                  }`}
                  aria-pressed={active}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchingGroup({
  q,
  value,
  onChange,
  disabled,
}: {
  q: Extract<
    SafeReadingExercise["questions"][number],
    { type: "matching-headings" | "matching-information" | "matching-features" | "matching-sentence-endings" }
  >;
  value: AnswerMap[string] | undefined;
  onChange: (v: AnswerValue) => void;
  disabled: boolean;
}) {
  const pairs = value?.format === "matching" ? value.pairs : [];
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {q.items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm leading-6 text-slate-200">
              <span className="font-mono font-bold text-cyan-300">{i + 1 + ". "}</span>
              {item}
            </p>
            <select
              disabled={disabled}
              value={pairs[i] ?? ""}
              onChange={(e) => {
                const next = [...pairs];
                next[i] = e.target.value === "" ? -1 : Number(e.target.value);
                onChange({ format: "matching", pairs: next });
              }}
              className="rounded-md border border-slate-600 bg-slate-950 px-2.5 py-1.5 text-sm text-white focus:border-cyan-400 focus:outline-none disabled:opacity-60"
              aria-label={`Answer ${i + 1}`}
            >
              <option value="">Choose…</option>
              {q.options.map((opt, oi) => (
                <option key={oi} value={oi}>
                  {String.fromCharCode(65 + oi)} — {opt.length > 46 ? opt.slice(0, 46) + "…" : opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-slate-400">Options</p>
        <ul className="space-y-1">
          {q.options.map((opt, oi) => (
            <li key={oi} className="text-xs leading-relaxed text-slate-300">
              <span className="font-mono font-bold text-cyan-300">{String.fromCharCode(65 + oi)}</span> — {opt}
            </li>
          ))}
        </ul>
        {q.reuseNote ? <p className="mt-2 text-xs italic text-amber-300">{q.reuseNote}</p> : null}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// The player
// ---------------------------------------------------------------------------

export type PlayerMode = "practice" | "timed" | "sim";

export type SimConfig = {
  slug: string;
  title: string;
  passageSlugs: string[];
  timeLimitSec: number;
  questions: number;
  description?: string;
};

type SimPassageResult = {
  slug: string;
  title: string;
  attemptId: string;
  result: GradedReadingExercise;
  glossary: ReadingGlossaryEntry[];
  exercise: SafeReadingExercise;
  reviewOpen: boolean;
};

export function ReadingExercisePlayer({
  slug,
  mode: initialMode,
  sim,
  navigate,
}: {
  slug: string;
  mode?: PlayerMode;
  sim?: SimConfig;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [mode, setMode] = useState<PlayerMode>(initialMode ?? "practice");
  const [phase, setPhase] = useState<"intro" | "reading" | "review" | "sim-summary">("intro");
  const [exercise, setExercise] = useState<SafeReadingExercise | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [result, setResult] = useState<GradedReadingExercise | null>(null);
  const [glossary, setGlossary] = useState<ReadingGlossaryEntry[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState<number | null>(null);
  const startedRef = useRef<number>(0);

  // Simulation state.
  const simRunIdRef = useRef<string>("");
  const [simIndex, setSimIndex] = useState(0);
  const [simResults, setSimResults] = useState<SimPassageResult[]>([]);

  const currentSlug = mode === "sim" && sim ? sim.passageSlugs[simIndex] : slug;

  useEffect(() => {
    void (async () => {
      setExercise(null);
      setError(null);
      const response = await examApi.readingExercise(currentSlug);
      if (response.ok) {
        setExercise(response.data.exercise);
      } else {
        setError(response.error ?? "Could not load this passage.");
      }
    })();
  }, [currentSlug]);

  const submitCurrent = useCallback(
    async (advance: boolean): Promise<void> => {
      if (!exercise || submitting) return;
      if (!user) {
        toast.info("Log in to have your answers checked and tracked.");
        return;
      }
      setSubmitting(true);
      const perQuestion: Record<string, number> = {};
      const even = Math.max(1, Math.round(elapsed / Math.max(1, exercise.questions.length)));
      for (const q of exercise.questions) perQuestion[q.id] = even;
      const isSim = mode === "sim" && sim;
      const response = await examApi.readingSubmit(exercise.slug, {
        mode: isSim || mode === "timed" ? "exam" : "practice",
        answers,
        timeSpentSec: elapsed,
        perQuestionSec: perQuestion,
        ...(isSim ? { simRunId: simRunIdRef.current, simSlug: sim.slug, simPart: simIndex + 1 } : {}),
      });
      setSubmitting(false);
      if (!response.ok) {
        setError(response.error ?? "Could not submit.");
        return;
      }
      if (isSim && sim) {
        setSimResults((prev) => [
          ...prev,
          {
            slug: exercise.slug,
            title: exercise.title,
            attemptId: response.data.attemptId,
            result: response.data.result,
            glossary: response.data.glossary,
            exercise: response.data.exercise,
            reviewOpen: false,
          },
        ]);
        setAnswers({});
        if (advance && simIndex + 1 < sim.passageSlugs.length) {
          setSimIndex(simIndex + 1);
        } else {
          setPhase("sim-summary");
        }
      } else {
        setResult(response.data.result);
        setGlossary(response.data.glossary);
        setExercise(response.data.exercise);
        setPhase("review");
      }
    },
    [answers, elapsed, exercise, mode, sim, simIndex, submitting, user],
  );

  // Clocks — and the timed run's expiry auto-submit, fired from the interval
  // callback (an external-system callback) rather than the effect body.
  useEffect(() => {
    if (phase !== "reading") return;
    const timer = window.setInterval(() => {
      const now = Math.floor((Date.now() - startedRef.current) / 1000);
      setElapsed(now);
      if (mode !== "practice") {
        const limit = mode === "sim" && sim ? sim.timeLimitSec : 20 * 60;
        setRemaining(Math.max(0, limit - now));
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase, mode, sim]);

  // Auto-submit when a timed run expires — deferred to a macrotask so no
  // state is set synchronously inside the effect body.
  useEffect(() => {
    if (phase !== "reading" || remaining === null || remaining > 0 || submitting) return;
    const t = window.setTimeout(() => {
      void submitCurrent(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, [phase, remaining, submitting, submitCurrent]);

  // Keep a stable ref to the submit callback so the clock effect never
  // re-subscribes (and never re-fires) mid-run.
  const start = (chosen: PlayerMode) => {
    setMode(chosen);
    setPhase("reading");
    startedRef.current = Date.now();
    setElapsed(0);
    setRemaining(chosen === "practice" ? null : chosen === "sim" && sim ? sim.timeLimitSec : 20 * 60);
    if (chosen === "sim") {
      simRunIdRef.current =
        typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `run-${Date.now()}`;
    }
  };

  const backToLibrary = () =>
    navigate({ name: "exams-reading", tab: mode === "sim" ? "practice" : "library" });

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="font-semibold text-slate-100">{error}</p>
        <Button className="mt-4" variant="outline" onClick={backToLibrary}>
          Back to the passage library
        </Button>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-12">
        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-slate-900" />
        <div className="h-64 animate-pulse rounded-xl bg-slate-900" />
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Intro
  // ------------------------------------------------------------------
  if (phase === "intro") {
    const isSimStart = mode === "sim" && sim;
    return (
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
        <Button variant="ghost" className="gap-2 text-slate-300" onClick={backToLibrary}>
          <ArrowLeft className="size-4" aria-hidden /> Back
        </Button>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-cyan-500/40 text-cyan-300">
              {exercise.variant === "gt" ? "General Training" : "Academic"} · Section {exercise.section}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">{exercise.subject}</Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">{exercise.difficultyLabel}</Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">{exercise.wordCount} words</Badge>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{isSimStart ? sim.title : exercise.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {isSimStart
              ? sim.description ?? `A full-length simulation: ${sim.passageSlugs.length} passages under one 60-minute clock.`
              : exercise.objective}
          </p>
        </div>
        {isSimStart ? (
          <Card className="border-cyan-500/30 bg-cyan-500/5">
            <CardContent className="space-y-2 p-5 text-sm text-slate-300">
              <p className="flex items-center gap-2 font-semibold text-white">
                <Timer className="size-4 text-cyan-300" aria-hidden /> {sim.passageSlugs.length} passages · {sim.questions} questions · one shared 60-minute clock
              </p>
              <p>You move between passages freely and submit each one as you finish it. When the clock reaches zero, everything you have typed is submitted automatically.</p>
              <p className="text-xs text-slate-400">Passage 1 of {sim.passageSlugs.length}: {exercise.title}</p>
            </CardContent>
          </Card>
        ) : null}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-3 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <FileText className="size-4 text-cyan-300" aria-hidden /> {exercise.intro}
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              The passage and questions are shown side by side. Answers are typed as you read — exactly like the
              computer-delivered test.
            </p>
            {!user ? (
              <p className="flex items-center gap-2 text-xs text-amber-300">
                <Lock className="size-3.5" aria-hidden /> Attempts are saved to your account — log in to have your answers checked and tracked.
              </p>
            ) : null}
            <div className="flex flex-wrap gap-2 pt-1">
              {isSimStart ? (
                <Button className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => start("sim")}>
                  <Timer className="size-4" aria-hidden /> Start the simulation
                </Button>
              ) : mode === "timed" ? (
                <Button className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => start("timed")}>
                  <Timer className="size-4" aria-hidden /> Start the 20-minute timed run
                </Button>
              ) : (
                <>
                  <Button className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => start("timed")}>
                    <Timer className="size-4" aria-hidden /> Timed run — 20 minutes
                  </Button>
                  <Button variant="outline" className="gap-2 border-slate-600 text-slate-200" onClick={() => start("practice")}>
                    <Clock className="size-4" aria-hidden /> Practice — untimed study session
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
        <p className="text-xs italic leading-relaxed text-slate-500">{exercise.source}</p>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Simulation summary
  // ------------------------------------------------------------------
  if (phase === "sim-summary" && sim) {
    const total = simResults.reduce((a, r) => a + r.result.totalItems, 0);
    const correct = simResults.reduce((a, r) => a + r.result.correctItems, 0);
    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
        <Button variant="ghost" className="gap-2 text-slate-300" onClick={backToLibrary}>
          <ArrowLeft className="size-4" aria-hidden /> Back to practice tests
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{sim.title} — finished</h1>
          <p className="mt-2 text-sm text-slate-400">
            {correct} of {total} questions correct across {simResults.length} passage{simResults.length === 1 ? "" : "s"} — every part is
            open for review below.
          </p>
        </div>
        {simResults.map((r, i) => (
          <Card key={r.slug} className="border-slate-800 bg-slate-900/60">
            <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Passage {i + 1}</p>
                <p className="font-semibold text-white">{r.title}</p>
                <p className="text-sm text-slate-400">
                  {r.result.correctItems} / {r.result.totalItems} correct
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 gap-1.5 border-cyan-500/40 text-cyan-300"
                onClick={() => setSimResults((prev) => prev.map((p, pi) => (pi === i ? { ...p, reviewOpen: !p.reviewOpen } : p)))}
              >
                <BookOpen className="size-3.5" aria-hidden /> {r.reviewOpen ? "Hide review" : "Review this passage"}
              </Button>
            </CardContent>
          </Card>
        ))}
        {simResults.map(
          (r, i) =>
            r.reviewOpen ? (
              <div key={`${r.slug}-review`} className="space-y-4">
                <p className="text-sm font-bold text-white">{r.title}</p>
                <ReadingReviewPanel exercise={r.exercise} result={r.result} glossary={r.glossary} />
              </div>
            ) : null,
        )}
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Reading + answering
  // ------------------------------------------------------------------
  const letters = paragraphLettersFor(exercise);
  const answeredCount = Object.values(answers).filter((a) => {
    switch (a.format) {
      case "completion":
        return Object.values(a.blanks).some((b) => b.trim());
      case "mcq":
        return a.options.some((o) => o !== undefined && o >= 0);
      case "mcq-multi":
        return a.options.length > 0;
      case "verdict":
        return a.choices.some((c) => c);
      case "matching":
        return a.pairs.some((p) => p !== undefined && p >= 0);
    }
  }).length;
  const isSim = mode === "sim" && sim;

  return (
    <div className="mx-auto max-w-7xl space-y-4 px-4 py-8">
      {/* Status bar */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Button variant="ghost" size="sm" className="gap-2 text-slate-300" onClick={backToLibrary}>
          <ArrowLeft className="size-4" aria-hidden /> Exit
        </Button>
        <p className="text-sm font-semibold text-white">{exercise.title}</p>
        {isSim ? (
          <Badge variant="outline" className="border-cyan-500/40 text-cyan-300">
            Passage {simIndex + 1} of {sim.passageSlugs.length}
          </Badge>
        ) : null}
        <div className="ml-auto flex items-center gap-3 text-sm">
          {remaining !== null ? (
            <span className={`font-mono text-lg font-bold ${remaining <= 120 ? "text-rose-400" : "text-white"}`} aria-live="off">
              {fmtClock(remaining)}
            </span>
          ) : (
            <span className="font-mono text-slate-400">{fmtClock(elapsed)} · study session</span>
          )}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_1fr]">
        {/* Passage panel */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="max-h-[75vh] space-y-4 overflow-y-auto p-6">
            {exercise.blocks.map((block, bi) => (
              <div key={bi} className="space-y-3">
                {exercise.blocks.length > 1 || block.heading !== exercise.title ? (
                  <p className="text-xs font-bold uppercase tracking-wide text-cyan-300">{block.heading}</p>
                ) : null}
                {block.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-[15px] leading-8 text-slate-300">
                    <span className="mr-2 font-mono text-xs font-bold text-cyan-400">
                      {letters.find((l) => l.block === bi && l.paragraph === pi)?.letter ?? ""}
                    </span>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Questions panel */}
        <div className="space-y-4">
          {exercise.questions.map((q) => {
            const value = answers[q.id];
            const onChange = (v: AnswerValue) => setAnswers((prev) => ({ ...prev, [q.id]: v }));
            return (
              <Card key={q.id} className="border-slate-800 bg-slate-900/60">
                <CardContent className="space-y-3 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{q.label}</p>
                    <Badge variant="outline" className="border-slate-600 text-slate-400">{q.typeLabel}</Badge>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">{q.instruction}</p>
                  {(() => {
                    switch (q.type) {
                      case "multiple-choice":
                        return <McqGroup q={q} value={value} onChange={onChange} disabled={false} />;
                      case "multiple-choice-multi":
                        return <McqMultiGroup q={q} value={value} onChange={onChange} disabled={false} />;
                      case "true-false-not-given":
                      case "yes-no-not-given":
                        return <VerdictGroup q={q} value={value} onChange={onChange} disabled={false} />;
                      case "diagram-labelling":
                        return <DiagramGroup q={q} value={value} onChange={onChange} disabled={false} />;
                      case "matching-headings":
                      case "matching-information":
                      case "matching-features":
                      case "matching-sentence-endings":
                        return <MatchingGroup q={q} value={value} onChange={onChange} disabled={false} />;
                      default:
                        return <CompletionGroup q={q} value={value} onChange={onChange} disabled={false} />;
                    }
                  })()}
                </CardContent>
              </Card>
            );
          })}

          <div className="flex flex-wrap items-center gap-3 pb-4">
            <p className="text-xs text-slate-400">
              {answeredCount} of {exercise.questions.length} question groups started
            </p>
            <div className="ml-auto flex gap-2">
              {isSim && simIndex + 1 < (sim?.passageSlugs.length ?? 0) ? (
                <Button className="gap-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400" disabled={submitting} onClick={() => void submitCurrent(true)}>
                  Submit and go to passage {simIndex + 2}
                </Button>
              ) : null}
              <Button
                className={`gap-2 ${isSim ? "border border-cyan-500/40 bg-transparent text-cyan-300 hover:bg-cyan-500/10" : "bg-amber-400 text-slate-950 hover:bg-amber-300"}`}
                disabled={submitting}
                onClick={() => void submitCurrent(false)}
              >
                {submitting ? "Checking…" : isSim ? "Finish the simulation" : "Check my answers"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs italic text-slate-500">{exercise.source}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Past-attempt review (opened from the performance tab)
// ---------------------------------------------------------------------------

export function PastAttemptReview({ attemptId, navigate }: { attemptId: string; navigate: (route: AppRoute) => void }) {
  const [data, setData] = useState<{
    attempt: { exerciseSlug: string; variant: string; section: number; mode: string; totalQuestions: number; correctCount: number; timeSpentSec: number; createdAt: string };
    exercise: SafeReadingExercise;
    result: GradedReadingExercise;
    glossary: ReadingGlossaryEntry[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await examApi.readingReview(attemptId);
      if (response.ok) {
        setData(response.data);
      } else {
        setError(response.error ?? "Could not reopen this attempt.");
      }
    })();
  }, [attemptId]);

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="font-semibold text-slate-100">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "exams-reading", tab: "performance" })}>
          Back to my performance
        </Button>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-12">
        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-slate-900" />
        <div className="h-64 animate-pulse rounded-xl bg-slate-900" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 py-10">
      <Button variant="ghost" className="gap-2 text-slate-300" onClick={() => navigate({ name: "exams-reading", tab: "performance" })}>
        <ArrowLeft className="size-4" aria-hidden /> Back to my performance
      </Button>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="border-cyan-500/40 text-cyan-300">
            {data.attempt.variant === "gt" ? "General Training" : "Academic"} · Section {data.attempt.section}
          </Badge>
          <Badge variant="outline" className="border-slate-600 text-slate-300">
            {data.attempt.mode === "practice" ? "Practice session" : "Timed run"}
          </Badge>
          <Badge variant="outline" className="border-slate-600 text-slate-300">{fmtClock(data.attempt.timeSpentSec)}</Badge>
        </div>
        <h1 className="mt-3 text-2xl font-bold text-white">{data.exercise.title} — review</h1>
        <p className="mt-1 text-sm text-slate-400">
          {data.attempt.correctCount} of {data.attempt.totalQuestions} correct · taken {new Date(data.attempt.createdAt).toLocaleString()}
        </p>
      </div>
      <ReadingReviewPanel exercise={data.exercise} result={data.result} glossary={data.glossary} />
    </div>
  );
}
