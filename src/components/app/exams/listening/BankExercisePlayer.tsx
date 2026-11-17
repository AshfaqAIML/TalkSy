"use client";

/**
 * IELTS Listening Masterclass — the audio-bank exercise player
 * (PROMPT 44, Part 5).
 *
 * Three phases: intro (metadata + mode choice) → listening (the recording
 * plays through on-device speech synthesis with accent-matched voices
 * while the questions stay visible, exactly like the real test) → review
 * (per-item feedback with the masterclass error taxonomy, keywords, trap
 * notes and the revealed transcript).
 *
 * Exam mode plays the recording once; practice mode allows replays and is
 * labelled as a study session, never a simulation.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Headphones,
  Play,
  RotateCcw,
  Send,
  Square,
  Users,
  Volume2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { examApi } from "@/lib/client/exam-api";
import type { GradedExercise, SafeBankExercise, SafeBankQuestion } from "@/lib/exams/listening-bank/service";
import type { AppRoute } from "@/hooks/use-hash-route";
import { ACCENT_LANGS, type AccentTag } from "@/data/exams/ielts/listening-bank/types";

// ---------------------------------------------------------------------------
// Accent-aware multi-voice sequencer
// ---------------------------------------------------------------------------

type VoiceMap = Map<string | undefined, SpeechSynthesisVoice | undefined>;

function pickVoices(speakers: { id: string; accent: string }[]): VoiceMap {
  const map: VoiceMap = new Map();
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return map;
  const all = window.speechSynthesis.getVoices().filter((v) => v.lang?.toLowerCase().startsWith("en"));
  if (all.length === 0) return map;
  for (const speaker of speakers) {
    const wanted = ACCENT_LANGS[(speaker.accent as AccentTag) ?? "british"] ?? ACCENT_LANGS.british;
    const preferred =
      all.find((v) => wanted.some((lang) => v.lang.toLowerCase().replace("_", "-").includes(lang.toLowerCase().replace("_", "-")))) ??
      all[speakers.indexOf(speaker) % all.length];
    map.set(speaker.id, preferred);
  }
  return map;
}

function useBankSequencer(exercise: SafeBankExercise | null) {
  const [status, setStatus] = useState<"idle" | "playing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [plays, setPlays] = useState(0);
  const mounted = useRef(true);
  const speakRef = useRef<(index: number) => void>(() => undefined);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [exercise?.slug]);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setStatus("idle");
  }, []);

  const play = useCallback(() => {
    if (!exercise || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const segments = exercise.segments;
    if (segments.length === 0) return;
    const voices = pickVoices(exercise.speakers.map((s) => ({ id: s.id, accent: s.accent })));
    setStatus("playing");
    setPlays((n) => n + 1);
    const speak = (index: number) => {
      if (!mounted.current) return;
      if (index >= segments.length) {
        setStatus("done");
        setProgress(segments.length);
        return;
      }
      setProgress(index);
      const segment = segments[index];
      const utterance = new SpeechSynthesisUtterance(segment.text);
      const voice = voices.get(segment.speakerId);
      if (voice) utterance.voice = voice;
      utterance.rate = 0.95;
      utterance.onend = () => {
        window.setTimeout(
          () => speak(index + 1),
          (segment.pauseAfterMs ?? 0) + (segment.speakerId ? 240 : 140),
        );
      };
      utterance.onerror = () => {
        if (mounted.current) setStatus("done");
      };
      window.speechSynthesis.speak(utterance);
    };
    speakRef.current = speak;
    window.speechSynthesis.cancel();
    speak(0);
  }, [exercise]);

  return { status, progress, plays, play, stop };
}

// ---------------------------------------------------------------------------
// Question renderers
// ---------------------------------------------------------------------------

type AnswerState = Record<string, unknown>;

function CompletionQuestion({
  q,
  answers,
  setAnswer,
  locked,
}: {
  q: Extract<SafeBankQuestion, { type: "form" | "note" | "table" | "flowchart" | "summary" | "sentence" }>;
  answers: AnswerState;
  setAnswer: (qid: string, value: unknown) => void;
  locked: boolean;
}) {
  const blanks = ((answers[q.id] as { blanks?: Record<string, string> })?.blanks ?? {}) as Record<string, string>;
  const setBlank = (no: number, text: string) =>
    setAnswer(q.id, { format: "completion", blanks: { ...blanks, [String(no)]: text } });
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-amber-300">{q.instruction}</p>
      <div className="space-y-1.5 rounded-lg border border-slate-800 bg-slate-950 p-4">
        {q.layout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {row.map((cell, cellIndex) =>
              cell.kind === "text" ? (
                <span
                  key={cellIndex}
                  className={cn(
                    "text-sm",
                    cellIndex === 0 && row.length === 1 ? "font-semibold text-slate-200" : "text-slate-300",
                  )}
                >
                  {cell.text}
                </span>
              ) : (
                <span key={cellIndex} className="inline-flex items-center gap-1">
                  <span className="text-xs font-bold text-amber-300">{cell.no}</span>
                  <Input
                    value={blanks[String(cell.no)] ?? ""}
                    onChange={(e) => setBlank(cell.no, e.target.value)}
                    disabled={locked}
                    className="h-8 w-36 border-slate-700 bg-slate-900 text-slate-100"
                    aria-label={`Blank ${cell.no}`}
                  />
                </span>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function McqQuestion({
  q,
  answers,
  setAnswer,
  locked,
}: {
  q: Extract<SafeBankQuestion, { type: "mcq-single" | "mcq-multi" }>;
  answers: AnswerState;
  setAnswer: (qid: string, value: unknown) => void;
  locked: boolean;
}) {
  const single = ((answers[q.id] as { option?: number } | undefined)?.option) as number | undefined;
  const multi = ((answers[q.id] as { options?: number[] } | undefined)?.options) ?? [];
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-amber-300">{q.instruction}</p>
      {q.stem ? <p className="text-sm font-medium text-slate-100">{q.stem}</p> : null}
      {q.type === "mcq-single" ? (
        <RadioGroup
          value={single !== undefined ? String(single) : undefined}
          onValueChange={(v) => setAnswer(q.id, { format: "mcq", option: Number(v) })}
          disabled={locked}
          className="gap-2"
        >
          {q.options.map((option, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"
            >
              <RadioGroupItem value={String(index)} id={`${q.id}-${index}`} />
              <Label htmlFor={`${q.id}-${index}`} className="text-sm font-normal leading-snug text-slate-200">
                <span className="mr-1.5 font-bold text-sky-300">{String.fromCharCode(65 + index)}</span>
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-slate-400">Choose {q.choose} answers.</p>
          {q.options.map((option, index) => (
            <label
              key={index}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"
            >
              <Checkbox
                checked={multi.includes(index)}
                onCheckedChange={(checked) => {
                  const next = checked ? [...multi, index] : multi.filter((i) => i !== index);
                  setAnswer(q.id, { format: "mcq-multi", options: next });
                }}
                disabled={locked}
                aria-label={`Option ${String.fromCharCode(65 + index)}`}
              />
              <span className="text-sm leading-snug text-slate-200">
                <span className="mr-1.5 font-bold text-sky-300">{String.fromCharCode(65 + index)}</span>
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function MatchingQuestion({
  q,
  answers,
  setAnswer,
  locked,
}: {
  q: Extract<SafeBankQuestion, { type: "matching" }>;
  answers: AnswerState;
  setAnswer: (qid: string, value: unknown) => void;
  locked: boolean;
}) {
  const pairs = ((answers[q.id] as { pairs?: number[] } | undefined)?.pairs ?? []) as number[];
  const setPair = (index: number, option: number) => {
    const next = [...pairs];
    next[index] = option;
    setAnswer(q.id, { format: "matching", pairs: next });
  };
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-amber-300">{q.instruction}</p>
      <div className="space-y-2">
        {q.items.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 rounded-lg border border-slate-800 bg-slate-950 p-3 sm:flex-row sm:items-center">
            <div className="flex-1 text-sm text-slate-200">{item}</div>
            <Select
              value={pairs[index] !== undefined ? String(pairs[index]) : undefined}
              onValueChange={(v) => setPair(index, Number(v))}
              disabled={locked}
            >
              <SelectTrigger className="w-full border-slate-700 bg-slate-900 text-slate-100 sm:w-48">
                <SelectValue placeholder="Choose…" />
              </SelectTrigger>
              <SelectContent className="border-slate-700 bg-slate-900 text-slate-100">
                {q.options.map((option, optionIndex) => (
                  <SelectItem key={optionIndex} value={String(optionIndex)}>
                    {String.fromCharCode(65 + optionIndex)} — {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapQuestion({
  q,
  answers,
  setAnswer,
  locked,
}: {
  q: Extract<SafeBankQuestion, { type: "map" }>;
  answers: AnswerState;
  setAnswer: (qid: string, value: unknown) => void;
  locked: boolean;
}) {
  const labels = (((answers[q.id] as { labels?: string[] } | undefined)?.labels ?? []) as string[]);
  const blanks = q.plan.grid.flat().filter((c): c is { room: string; label?: string; blank: number } => Boolean(c?.blank));
  const setLabel = (index: number, letter: string) => {
    const next = [...labels];
    while (next.length < blanks.length) next.push("");
    next[index] = letter.toUpperCase().slice(0, 2);
    setAnswer(q.id, { format: "map", labels: next });
  };
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-amber-300">{q.instruction}</p>
      <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
        <p className="mb-1 text-sm font-semibold text-slate-100">{q.plan.title}</p>
        {q.plan.caption ? <p className="mb-3 text-xs text-slate-400">{q.plan.caption}</p> : null}
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${Math.max(...q.plan.grid.map((r) => r.length), 1)}, minmax(0, 1fr))` }}
        >
          {q.plan.grid.flatMap((row, rowIndex) =>
            row.map((cell, colIndex) => {
              if (!cell) {
                return <div key={`${rowIndex}-${colIndex}`} className="min-h-14 rounded-md bg-slate-900/40" aria-hidden />;
              }
              const blankIndex = cell.blank ? blanks.findIndex((b) => b.blank === cell.blank) : -1;
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 rounded-md border p-2 text-center",
                    cell.blank ? "border-amber-500/50 bg-amber-500/5" : "border-slate-700 bg-slate-900",
                  )}
                >
                  {cell.label ? <span className="text-xs font-semibold text-slate-200">{cell.label}</span> : null}
                  {cell.blank ? (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-amber-300">{cell.blank}</span>
                      <Input
                        value={labels[blankIndex] ?? ""}
                        onChange={(e) => setLabel(blankIndex, e.target.value)}
                        disabled={locked}
                        className="h-7 w-12 border-slate-700 bg-slate-900 text-center text-xs uppercase text-slate-100"
                        aria-label={`Blank ${cell.blank} — write a letter`}
                        placeholder="?"
                      />
                    </div>
                  ) : (
                    <span className="text-[11px] leading-tight text-slate-400">{cell.room}</span>
                  )}
                </div>
              );
            }),
          )}
        </div>
      </div>
      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Places</p>
        <div className="flex flex-wrap gap-2">
          {q.options.map((option) => (
            <span key={option.letter} className="rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-200">
              <span className="font-bold text-sky-300">{option.letter.toUpperCase()}</span> — {option.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShortAnswerQuestion({
  q,
  answers,
  setAnswer,
  locked,
}: {
  q: Extract<SafeBankQuestion, { type: "short-answer" }>;
  answers: AnswerState;
  setAnswer: (qid: string, value: unknown) => void;
  locked: boolean;
}) {
  const given = (((answers[q.id] as { answers?: string[] } | undefined)?.answers ?? []) as string[]);
  const setOne = (index: number, text: string) => {
    const next = [...given];
    while (next.length < q.questions.length) next.push("");
    next[index] = text;
    setAnswer(q.id, { format: "short-answer", answers: next });
  };
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-amber-300">{q.instruction}</p>
      <div className="space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-4">
        {q.questions.map((question, index) => (
          <div key={index} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="flex-1 text-sm text-slate-200">{question}</span>
            <Input
              value={given[index] ?? ""}
              onChange={(e) => setOne(index, e.target.value)}
              disabled={locked}
              className="h-8 w-full border-slate-700 bg-slate-900 text-slate-100 sm:w-52"
              aria-label={question}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// The player
// ---------------------------------------------------------------------------

const ERROR_LABELS: Record<string, string> = {
  correct: "Correct",
  spelling: "Spelling",
  "word-limit": "Word limit",
  distractor: "Distractor",
  missed: "Missed",
  wrong: "Wrong",
};

const ERROR_STYLES: Record<string, string> = {
  correct: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  spelling: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  "word-limit": "border-orange-500/40 bg-orange-500/10 text-orange-300",
  distractor: "border-rose-500/40 bg-rose-500/10 text-rose-300",
  missed: "border-slate-500/40 bg-slate-500/10 text-slate-300",
  wrong: "border-rose-500/40 bg-rose-500/10 text-rose-300",
};

export function BankExercisePlayer({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
}) {
  const [exercise, setExercise] = useState<SafeBankExercise | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [phase, setPhase] = useState<"intro" | "listening" | "review">("intro");
  const [mode, setMode] = useState<"exam" | "practice">("exam");
  const [answers, setAnswers] = useState<AnswerState>({});
  const [result, setResult] = useState<GradedExercise | null>(null);
  const [transcript, setTranscript] = useState<{
    speakers: { id: string; name: string; role: string }[];
    segments: { id: string; speakerId?: string; text: string }[];
    note: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedRef = useRef<number>(0);
  const sequencer = useBankSequencer(exercise);

  useEffect(() => {
    void (async () => {
      const response = await examApi.listeningExercise(slug);
      if (response.ok) {
        setExercise(response.data.exercise);
      } else {
        setError(response.error ?? "Could not load this exercise.");
      }
    })();
  }, [slug]);

  useEffect(() => {
    if (phase !== "listening") return;
    const timer = window.setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedRef.current) / 1000));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const setAnswer = (qid: string, value: unknown) =>
    setAnswers((prev) => ({ ...prev, [qid]: value }));

  const start = (chosen: "exam" | "practice") => {
    setMode(chosen);
    setPhase("listening");
    startedRef.current = Date.now();
    setElapsed(0);
  };

  const submit = async () => {
    if (!exercise || submitting) return;
    setSubmitting(true);
    const perQuestion: Record<string, number> = {};
    const even = Math.max(1, Math.round(elapsed / Math.max(1, exercise.questions.length)));
    for (const q of exercise.questions) perQuestion[q.id] = even;
    const response = await examApi.listeningSubmit(slug, {
      mode,
      answers,
      timeSpentSec: elapsed,
      perQuestionSec: perQuestion,
    });
    setSubmitting(false);
    if (response.ok) {
      setResult(response.data.result);
      setTranscript(response.data.transcript);
      setPhase("review");
      sequencer.stop();
    } else {
      setError(response.error ?? "Could not submit.");
    }
  };

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="font-semibold text-slate-100">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "exams-listening", tab: "practice" })}>
          Back to the audio library
        </Button>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-sm text-slate-400">Loading exercise…</div>
    );
  }

  const replayAllowed = mode === "practice";

  // --- Intro ---------------------------------------------------------------
  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Button
          variant="ghost"
          className="mb-4 gap-2 text-slate-400 hover:text-slate-200"
          onClick={() => navigate({ name: "exams-listening", tab: "practice" })}
        >
          <ChevronLeft className="size-4" aria-hidden /> Audio library
        </Button>
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-sky-500/40 text-sky-300">Part {exercise.part}</Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-300">{exercise.difficultyLabel} (level {exercise.difficulty} of 5)</Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                <Clock className="mr-1 size-3" aria-hidden /> {exercise.estimatedMinutes} min
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-white">{exercise.title}</h1>
            <p className="text-sm leading-relaxed text-slate-300">{exercise.intro}</p>
            <div className="grid gap-3 rounded-lg border border-slate-800 bg-slate-950 p-4 sm:grid-cols-2">
              <div>
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <Users className="size-3.5" aria-hidden /> Speakers
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  {exercise.speakers.map((s) => (
                    <li key={s.id}>
                      <span className="font-medium text-slate-100">{s.name}</span>
                      <span className="text-slate-500"> — {s.role} ({s.accent})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">What you will practise</p>
                <div className="flex flex-wrap gap-1.5">
                  {exercise.questions.map((q) => (
                    <Badge key={q.id} variant="secondary" className="bg-slate-800 text-xs text-slate-300">
                      {q.label}
                    </Badge>
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">{exercise.source}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => start("exam")}
                className={cn(
                  "rounded-lg border p-4 text-left transition-colors",
                  mode === "exam" ? "border-amber-400 bg-amber-400/10" : "border-slate-700 bg-slate-950 hover:border-slate-500",
                )}
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Headphones className="size-4 text-amber-300" aria-hidden /> Exam mode
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  The recording plays once — exactly like the test. Questions are visible while it plays.
                </p>
              </button>
              <button
                type="button"
                onClick={() => start("practice")}
                className="rounded-lg border border-slate-700 bg-slate-950 p-4 text-left transition-colors hover:border-slate-500"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <RotateCcw className="size-4 text-sky-300" aria-hidden /> Practice mode
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Replay the recording as you work. A study session — never counted as a simulation.
                </p>
              </button>
            </div>
            <Button size="lg" className="w-full gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => start(mode)}>
              Start — questions appear with the recording
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- Listening -----------------------------------------------------------
  if (phase === "listening") {
    const canPlay = replayAllowed || sequencer.plays === 0;
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <Button variant="ghost" className="gap-2 text-slate-400 hover:text-slate-200" onClick={() => navigate({ name: "exams-listening", tab: "practice" })}>
            <ArrowLeft className="size-4" aria-hidden /> Library
          </Button>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Badge variant="outline" className={mode === "exam" ? "border-amber-500/40 text-amber-300" : "border-sky-500/40 text-sky-300"}>
              {mode === "exam" ? "Exam mode — one play" : "Practice mode — replays allowed"}
            </Badge>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden /> {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Recording panel */}
        <div className="mb-6 rounded-lg border border-sky-500/30 bg-sky-500/5 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-sm font-semibold text-sky-200">
              <Volume2 className="size-4" aria-hidden /> Recording — Part {exercise.part}
            </p>
            {sequencer.status === "playing" ? (
              <span className="text-xs text-slate-400" role="status">
                Playing… {Math.min(sequencer.progress + 1, exercise.segments.length)} of {exercise.segments.length}
              </span>
            ) : sequencer.plays > 0 ? (
              <span className="text-xs text-slate-500">
                {replayAllowed ? "Played — replay available" : "Played — the real test allows no replays"}
              </span>
            ) : (
              <span className="text-xs text-slate-500">Read the questions below, then play.</span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              className="gap-1.5 bg-sky-500 text-slate-950 hover:bg-sky-400"
              onClick={sequencer.status === "playing" ? sequencer.stop : sequencer.play}
              disabled={sequencer.status !== "playing" && !canPlay}
            >
              {sequencer.status === "playing" ? (
                <>
                  <Square className="size-3.5" aria-hidden /> Stop
                </>
              ) : (
                <>
                  <Play className="size-3.5" aria-hidden /> {sequencer.plays > 0 ? "Play again" : "Play recording"}
                </>
              )}
            </Button>
            <span className="text-xs text-slate-500">
              {exercise.speakers.length > 1 ? `${exercise.speakers.length} voices` : "Single speaker"} ·{" "}
              {exercise.accentLabels.join(", ")} accents
            </span>
          </div>
          {/* Segment progress */}
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-800" role="progressbar" aria-valuenow={sequencer.progress} aria-valuemax={exercise.segments.length}>
            <div
              className="h-full rounded-full bg-sky-400 transition-all"
              style={{ width: `${(sequencer.progress / Math.max(1, exercise.segments.length)) * 100}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-5">
          {exercise.questions.map((q) => (
            <Card key={q.id} className="border-slate-800 bg-slate-900/60">
              <CardContent className="space-y-3 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-bold text-white">{q.label}</p>
                  <div className="flex flex-wrap gap-1">
                    {q.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-800 text-[10px] text-slate-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                {q.type === "mcq-single" || q.type === "mcq-multi" ? (
                  <McqQuestion q={q} answers={answers} setAnswer={setAnswer} locked={false} />
                ) : q.type === "matching" ? (
                  <MatchingQuestion q={q} answers={answers} setAnswer={setAnswer} locked={false} />
                ) : q.type === "map" ? (
                  <MapQuestion q={q} answers={answers} setAnswer={setAnswer} locked={false} />
                ) : q.type === "short-answer" ? (
                  <ShortAnswerQuestion q={q} answers={answers} setAnswer={setAnswer} locked={false} />
                ) : (
                  <CompletionQuestion
                    q={q as Extract<SafeBankQuestion, { type: "form" | "note" | "table" | "flowchart" | "summary" | "sentence" }>}
                    answers={answers}
                    setAnswer={setAnswer}
                    locked={false}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            The transcript stays locked until you submit — reading along is not the test.
          </p>
          <Button className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={() => void submit()} disabled={submitting}>
            <Send className="size-4" aria-hidden /> {submitting ? "Checking…" : "Submit for marking"}
          </Button>
        </div>
      </div>
    );
  }

  // --- Review --------------------------------------------------------------
  const accuracy = result && result.totalItems > 0 ? result.correctItems / result.totalItems : 0;
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-2xl font-bold text-white">Your results</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="gap-2 border-slate-700 text-slate-200"
              onClick={() => {
                setAnswers({});
                setResult(null);
                setTranscript(null);
                setElapsed(0);
                setPhase("listening");
                startedRef.current = Date.now();
              }}
            >
              <RotateCcw className="size-4" aria-hidden /> Try again
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-slate-700 text-slate-200"
              onClick={() => navigate({ name: "exams-listening", tab: "practice" })}
            >
              Back to library
            </Button>
          </div>
        </div>
        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className={cn("text-4xl font-bold", accuracy >= 0.7 ? "text-emerald-400" : accuracy >= 0.4 ? "text-amber-400" : "text-rose-400")}>
                {result?.correctItems ?? 0}/{result?.totalItems ?? 0}
              </div>
              <div className="text-sm text-slate-300">
                <p className="font-semibold">{Math.round(accuracy * 100)}% of items correct</p>
                <p className="text-xs text-slate-500">
                  {mode === "exam" ? "Exam mode (one play)" : "Practice mode (replays)"} · {exercise.title}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(result?.errorCounts ?? {})
                .filter(([, count]) => count > 0)
                .map(([type, count]) => (
                  <Badge key={type} variant="outline" className={ERROR_STYLES[type] ?? ""}>
                    {ERROR_LABELS[type] ?? type}: {count}
                  </Badge>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Per-question feedback */}
      <div className="space-y-4">
        {exercise.questions.map((q) => {
          const graded = result?.questions.find((g) => g.questionId === q.id);
          if (!graded) return null;
          return (
            <Card key={q.id} className={cn("border-slate-800", graded.allCorrect ? "bg-emerald-950/20" : "bg-slate-900/60")}>
              <CardContent className="space-y-3 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-bold text-white">{q.label}</p>
                  {graded.allCorrect ? (
                    <Badge variant="outline" className="border-emerald-500/40 text-emerald-300">
                      <CheckCircle2 className="mr-1 size-3" aria-hidden /> All correct
                    </Badge>
                  ) : null}
                </div>
                <div className="space-y-1.5">
                  {graded.items.map((item) => (
                    <div key={item.no} className="flex flex-wrap items-center gap-2 text-sm">
                      <Badge variant="outline" className={cn("shrink-0", ERROR_STYLES[item.errorType] ?? "")}>
                        {item.no}. {ERROR_LABELS[item.errorType] ?? item.errorType}
                      </Badge>
                      <span className="text-slate-300">
                        you: <span className="font-medium text-slate-100">{item.given}</span>
                        {!item.correct ? (
                          <>
                            {" "}· key: <span className="font-medium text-emerald-300">{item.expected}</span>
                          </>
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm leading-relaxed text-slate-300">
                  {graded.explanation}
                </p>
                {graded.trapNote ? (
                  <p className="rounded-lg border border-rose-500/30 bg-rose-500/5 p-3 text-xs leading-relaxed text-rose-200">
                    <span className="font-semibold">Trap ({graded.trapFamily}): </span>
                    {graded.trapNote}
                  </p>
                ) : null}
                <p className="text-xs text-slate-500">Keywords to catch: {graded.keywords.join(", ")}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Transcript */}
      {transcript ? (
        <Card className="mt-6 border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm font-bold text-white">Transcript</p>
            <p className="text-xs leading-relaxed text-amber-200/90">{transcript.note}</p>
            <div className="space-y-2">
              {transcript.segments.map((segment) => {
                const speaker = transcript.speakers.find((s) => s.id === segment.speakerId);
                return (
                  <p key={segment.id} className="text-sm leading-relaxed">
                    {speaker ? <span className="mr-2 font-semibold text-sky-300">{speaker.name}:</span> : null}
                    <span className="text-slate-300">{segment.text}</span>
                  </p>
                );
              })}
            </div>
            <p className="text-xs text-slate-500">{exercise.source}</p>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
