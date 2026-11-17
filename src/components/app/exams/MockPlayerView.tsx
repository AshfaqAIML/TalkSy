"use client";

/**
 * The mock-test player: a distraction-free examination environment.
 *
 * One section at a time with official timings from the pinned (sanitized)
 * test specification; within a section, one question at a time. Every
 * answer change, review flag and per-question second is persisted
 * server-side, so a refresh resumes the attempt exactly where it left off.
 *
 * Realism rules (spec-driven, never hardcoded here):
 *   - Under exam timing, a finished or expired section stays locked, the
 *     clock cannot be paused, and section audio can be played once only.
 *   - TOEFL Listening moves forward only; IELTS allows free movement and
 *     mark-for-review. Untimed learning runs relax navigation and replay,
 *     and every report labels them as non-exam-condition.
 *   - The answer key never reaches this component — grading is server-side.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Lock,
  LogOut,
  Mic,
  Play,
  RotateCcw,
  Send,
  Square,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useRecorder } from "@/hooks/use-recorder";
import { recognitionSupported, useSpeechRecognition } from "@/hooks/use-speech";
import { examApi } from "@/lib/client/exam-api";
import { DEFAULT_NAVIGATION, effectivePolicy } from "@/lib/exams/navigation";
import type { PlayerPolicy } from "@/lib/exams/navigation";
import type { SafeMockQuestion, SafeMockTest } from "@/lib/exams/types";

// ---------------------------------------------------------------------------
// Audio playback (policy-aware: once only under exam timing)
// ---------------------------------------------------------------------------

/** One spoken line: a speaker-tagged turn or unattributed narration. */
type ScriptSegment = { speaker: string | null; text: string };

/** Split "NAME: text" scripts into per-speaker segments (names are never
 *  read aloud — each speaker gets a distinct browser voice instead). */
export function parseAudioScript(script: string): ScriptSegment[] {
  return script
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = /^([^.:!?]{2,30}):\s+(.+)$/.exec(line);
      return match ? { speaker: match[1].trim(), text: match[2] } : { speaker: null, text: line };
    });
}

/** Deterministic multi-voice assignment: distinct English voices per
 *  speaker, British first, then spread across the accent range the
 *  browser offers. Falls back to a single voice when that is all there is. */
function voicesBySpeaker(segments: ScriptSegment[]): Map<string | null, SpeechSynthesisVoice | undefined> {
  const map = new Map<string | null, SpeechSynthesisVoice | undefined>();
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return map;
  const all = window.speechSynthesis.getVoices().filter((v) => v.lang?.toLowerCase().startsWith("en"));
  if (all.length === 0) return map;
  const byPreference = [
    (v: SpeechSynthesisVoice) => /en[-_]GB/i.test(v.lang),
    (v: SpeechSynthesisVoice) => /en[-_]AU/i.test(v.lang),
    (v: SpeechSynthesisVoice) => /en[-_]US/i.test(v.lang),
    (v: SpeechSynthesisVoice) => /en[-_]NZ/i.test(v.lang),
    () => true,
  ];
  const speakers = [...new Set(segments.map((s) => s.speaker))];
  const pool = [...all];
  // Greedy: give each speaker the next voice from a different accent bucket
  // when the browser has one, otherwise cycle the available voices.
  speakers.forEach((speaker, index) => {
    const wanted = byPreference[index % byPreference.length];
    const pick = pool.find((v) => wanted(v)) ?? pool[index % pool.length];
    map.set(speaker, pick);
  });
  map.set(null, pool[0]);
  return map;
}

function AudioStimulus({
  script,
  replayAllowed,
  label = "Play recording",
}: {
  script: string;
  replayAllowed: boolean;
  label?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [timesPlayed, setTimesPlayed] = useState(0);
  const [progress, setProgress] = useState(0);
  const blocked = !replayAllowed && timesPlayed > 0;

  const segments = useMemo(() => parseAudioScript(script), [script]);
  const indexRef = useRef(0);
  const mountedRef = useRef(true);
  const speakNextRef = useRef<(index: number) => void>(() => undefined);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setPlaying(false);
  }, []);

  const play = () => {
    if (playing || blocked || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const voiceMap = voicesBySpeaker(segments);
    const speakNext = (index: number) => {
      if (!mountedRef.current) return;
      if (index >= segments.length) {
        setPlaying(false);
        setProgress(segments.length);
        return;
      }
      indexRef.current = index;
      setProgress(index);
      const segment = segments[index];
      const utterance = new SpeechSynthesisUtterance(segment.text);
      const voice = voiceMap.get(segment.speaker);
      if (voice) utterance.voice = voice;
      utterance.rate = 0.95;
      utterance.onend = () => {
        // Natural turn-taking gap between speakers.
        window.setTimeout(() => speakNext(index + 1), segment.speaker ? 260 : 140);
      };
      utterance.onerror = () => {
        if (mountedRef.current) setPlaying(false);
      };
      window.speechSynthesis.speak(utterance);
    };
    speakNextRef.current = speakNext;
    setPlaying(true);
    setTimesPlayed((n) => n + 1);
    window.speechSynthesis.cancel();
    speakNext(0);
  };

  const multiVoice = segments.length > 1 && segments.some((s) => s.speaker);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        className="gap-1.5 border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
        onClick={playing ? stop : play}
        disabled={blocked}
      >
        {playing ? (
          <>
            <Square className="size-3.5" aria-hidden /> Stop
          </>
        ) : (
          <>
            <Play className="size-3.5" aria-hidden /> {label}
          </>
        )}
      </Button>
      {playing && segments.length > 1 ? (
        <span className="text-xs text-slate-500" role="status">
          {Math.min(progress + 1, segments.length)} of {segments.length}
        </span>
      ) : null}
      {multiVoice ? <span className="text-xs text-slate-500">Multi-voice recording</span> : null}
      {blocked ? (
        <span className="text-xs text-slate-500">Played — the real test does not allow replays.</span>
      ) : replayAllowed && timesPlayed > 0 ? (
        <span className="text-xs text-slate-500">Replay available in untimed practice.</span>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Question renderers (value shapes match the server grader exactly)
// ---------------------------------------------------------------------------

function McqSingle({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as { options: string[]; passage?: string; audioScript?: string };
  const selected = typeof (value as { option?: number } | null)?.option === "number"
    ? (value as { option: number }).option
    : null;
  return (
    <RadioGroup
      value={selected !== null ? String(selected) : undefined}
      onValueChange={(next) => onChange({ option: Number(next) })}
    >
      {payload.options.map((option, index) => (
        <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3">
          <RadioGroupItem value={String(index)} id={`${question.id}-${index}`} />
          <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer font-normal text-slate-200">
            <span className="mr-1.5 font-semibold text-slate-400">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function McqMulti({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as { options: string[]; choose?: number };
  const chosen = Array.isArray((value as { options?: number[] })?.options)
    ? (value as { options: number[] }).options
    : [];
  const toggle = (index: number) => {
    const next = chosen.includes(index)
      ? chosen.filter((i) => i !== index)
      : [...chosen, index];
    onChange({ options: next });
  };
  return (
    <div className="space-y-2">
      {payload.choose ? (
        <p className="text-xs font-medium text-amber-300">Select {payload.choose} answers.</p>
      ) : null}
      {payload.options.map((option, index) => (
        <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3">
          <Checkbox
            checked={chosen.includes(index)}
            onCheckedChange={() => toggle(index)}
            id={`${question.id}-${index}`}
          />
          <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer font-normal text-slate-200">
            <span className="mr-1.5 font-semibold text-slate-400">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </Label>
        </div>
      ))}
    </div>
  );
}

function Tfng({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as { statement: string; labels: string[] };
  const selected = typeof (value as { value?: number } | null)?.value === "number"
    ? (value as { value: number }).value
    : null;
  return (
    <div className="space-y-3">
      <p className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm leading-relaxed text-slate-200">
        {payload.statement}
      </p>
      <div className="flex flex-wrap gap-2">
        {payload.labels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => onChange({ value: index })}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              selected === index
                ? "border-amber-400 bg-amber-400/10 text-amber-200"
                : "border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-600",
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Matching({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as {
    items: Array<{ id: string; text: string }>;
    options: Array<{ id: string; text: string }>;
    prompt?: string;
  };
  const pairs = ((value as { pairs?: Record<string, string> })?.pairs ?? {}) as Record<string, string>;
  return (
    <div className="space-y-3">
      {payload.prompt ? <p className="text-sm text-slate-300">{payload.prompt}</p> : null}
      {payload.items.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 rounded-lg border border-slate-800 bg-slate-950 p-3 sm:flex-row sm:items-center">
          <div className="flex-1 text-sm text-slate-200">{item.text}</div>
          <Select
            value={pairs[item.id] ?? ""}
            onValueChange={(next) => onChange({ pairs: { ...pairs, [item.id]: next } })}
          >
            <SelectTrigger className="w-full border-slate-700 bg-slate-900 text-slate-100 sm:w-44">
              <SelectValue placeholder="Choose…" />
            </SelectTrigger>
            <SelectContent className="border-slate-700 bg-slate-900 text-slate-100">
              {payload.options.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
}

function FillBlank({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as { context: string; blanks: unknown[]; words?: number; audioScript?: string };
  const answers = Array.isArray((value as { blanks?: string[] })?.blanks)
    ? (value as { blanks: string[] }).blanks
    : [];
  const parts = payload.context.split(/_{3,}/);
  const blankCount = payload.blanks.length;
  const inline = parts.length - 1 === blankCount;
  const setBlank = (index: number, text: string) => {
    const next = [...answers];
    while (next.length < blankCount) next.push("");
    next[index] = text;
    onChange({ blanks: next });
  };

  const inputFor = (index: number) => (
    <Input
      value={answers[index] ?? ""}
      onChange={(event) => setBlank(index, event.target.value)}
      className="mx-1 inline-flex h-8 w-32 border-slate-700 bg-slate-900 text-center text-slate-100"
      aria-label={`Blank ${index + 1}`}
    />
  );

  return (
    <div className="space-y-3">
      {payload.words ? (
        <p className="text-xs font-medium text-amber-300">
          Write NO MORE THAN {payload.words === 1 ? "ONE WORD" : `${payload.words} WORDS`}
          {payload.words === 1 ? "" : " AND/OR A NUMBER"} for each answer.
        </p>
      ) : null}
      <div className="whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-loose text-slate-200">
        {inline
          ? parts.map((part, index) => (
              <span key={index}>
                {part}
                {index < blankCount ? inputFor(index) : null}
              </span>
            ))
          : parts[0]}
      </div>
      {!inline ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {Array.from({ length: blankCount }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-6 text-sm font-semibold text-slate-400">{index + 1}.</span>
              {inputFor(index)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** PROMPT 44: IELTS plan/map labelling — a grid plan with numbered blanks
 *  and lettered place options; the learner writes one letter per blank. */
function MapLabel({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as {
    plan: {
      title: string;
      caption?: string;
      grid: Array<Array<{ room: string; label?: string; blank?: number } | null>>;
    };
    options: Array<{ letter: string; text: string }>;
  };
  const labels = Array.isArray((value as { labels?: string[] })?.labels)
    ? (value as { labels: string[] }).labels
    : [];
  const blankCells = payload.plan.grid.flat().filter((c): c is { room: string; label?: string; blank: number } => Boolean(c?.blank));
  const setLabel = (blankIndex: number, letter: string) => {
    const next = [...labels];
    while (next.length < blankCells.length) next.push("");
    next[blankIndex] = letter.toUpperCase().slice(0, 2);
    onChange({ labels: next });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
        <p className="mb-1 text-sm font-semibold text-slate-100">{payload.plan.title}</p>
        {payload.plan.caption ? <p className="mb-3 text-xs text-slate-400">{payload.plan.caption}</p> : null}
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${Math.max(...payload.plan.grid.map((r) => r.length), 1)}, minmax(0, 1fr))` }}
        >
          {payload.plan.grid.flatMap((row, rowIndex) =>
            row.map((cell, colIndex) => {
              if (!cell) {
                return <div key={`${rowIndex}-${colIndex}`} className="min-h-14 rounded-md bg-slate-900/40" aria-hidden />;
              }
              const blankIndex = cell.blank ? blankCells.findIndex((c) => c.blank === cell.blank) : -1;
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
                        onChange={(event) => setLabel(blankIndex, event.target.value)}
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
          {payload.options.map((option) => (
            <span
              key={option.letter}
              className="rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-200"
            >
              <span className="font-bold text-sky-300">{option.letter.toUpperCase()}</span> — {option.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompleteWords({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as { context: string; words: Array<{ masked: string }> };
  const answers = Array.isArray((value as { words?: string[] })?.words)
    ? (value as { words: string[] }).words
    : [];
  return (
    <div className="space-y-3">
      <p className="whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-loose text-slate-200">
        {payload.context}
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {payload.words.map((word, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-16 font-mono text-sm text-amber-300">{word.masked}</span>
            <Input
              value={answers[index] ?? ""}
              onChange={(event) => {
                const next = [...answers];
                while (next.length < payload.words.length) next.push("");
                next[index] = event.target.value;
                onChange({ words: next });
              }}
              className="h-8 border-slate-700 bg-slate-900 text-slate-100"
              aria-label={`Word ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SentenceReconstruction({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as { scrambled: string[]; cue?: string };
  const built = Array.isArray((value as { text?: string[] })?.text)
    ? (value as { text: string[] }).text
    : typeof (value as { text?: string })?.text === "string"
      ? ((value as { text: string }).text as string).split(" ")
      : [];
  const remaining = useMemo(() => {
    const pool = [...payload.scrambled];
    for (const word of built) {
      const index = pool.indexOf(word);
      if (index !== -1) pool.splice(index, 1);
    }
    return pool;
  }, [payload.scrambled, built]);

  return (
    <div className="space-y-3">
      {payload.cue ? <p className="text-sm text-slate-400">{payload.cue}</p> : null}
      <div className="min-h-16 rounded-lg border border-dashed border-slate-700 bg-slate-950 p-3">
        {built.length === 0 ? (
          <span className="text-sm text-slate-600">Tap the words below to build the sentence…</span>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {built.map((word, index) => (
              <button
                key={`${word}-${index}`}
                type="button"
                onClick={() => onChange({ text: built.filter((_, i) => i !== index).join(" ") })}
                className="rounded-md bg-amber-400/15 px-2 py-1 text-sm text-amber-200 hover:bg-amber-400/25"
              >
                {word}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {remaining.map((word, index) => (
          <button
            key={`${word}-${index}`}
            type="button"
            onClick={() => onChange({ text: [...built, word].join(" ") })}
            className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-sm text-slate-200 hover:border-amber-400/60"
          >
            {word}
          </button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="gap-1.5 text-slate-400 hover:text-amber-300"
        onClick={() => onChange({ text: "" })}
      >
        <RotateCcw className="size-3.5" aria-hidden /> Reset
      </Button>
    </div>
  );
}

function Dictation({
  question,
  value,
  onChange,
  replayAllowed,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
  replayAllowed: boolean;
}) {
  const payload = question.payload as { audioScript: string; prompt?: string };
  const text = typeof (value as { text?: string })?.text === "string" ? (value as { text: string }).text : "";
  return (
    <div className="space-y-3">
      <AudioStimulus script={payload.audioScript} replayAllowed={replayAllowed} label="Play the sentence (once)" />
      <Textarea
        value={text}
        onChange={(event) => onChange({ text: event.target.value })}
        placeholder="Type the sentence exactly as you hear it — every word, number and name."
        className="min-h-24 border-slate-700 bg-slate-950 text-slate-100"
        aria-label="Dictation transcript"
      />
      <p className="text-xs text-slate-500">
        Marking ignores punctuation and capitalisation; wording must be exact.
      </p>
    </div>
  );
}

function ListenRepeat({
  question,
  value,
  onChange,
  replayAllowed,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
  replayAllowed: boolean;
}) {
  const payload = question.payload as { sentence: string; windowSec: number; context?: string };
  const text = typeof (value as { text?: string })?.text === "string" ? (value as { text: string }).text : "";
  const recorder = useRecorder(30);
  const recognition = useSpeechRecognition();
  const [stage, setStage] = useState<"listen" | "countdown" | "done">("listen");
  const [windowLeft, setWindowLeft] = useState(payload.windowSec);
  const windowTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startWindow = () => {
    setStage("countdown");
    setWindowLeft(payload.windowSec);
    void recorder.start();
    if (recognition.supported) recognition.start();
    windowTimer.current = setInterval(() => {
      setWindowLeft((current) => {
        if (current <= 1) {
          if (windowTimer.current) clearInterval(windowTimer.current);
          recorder.stop();
          recognition.stop();
          setStage("done");
          return 0;
        }
        return current - 1;
      });
    }, 1000);
  };

  const playThenRepeat = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(payload.sentence);
    utterance.rate = 0.95;
    utterance.onend = () => startWindow();
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      if (windowTimer.current) clearInterval(windowTimer.current);
    };
  }, []);

  useEffect(() => {
    if (recognition.transcript && stage === "done" && !text) {
      onChange({ text: recognition.transcript });
    }
  }, [recognition.transcript, stage, text, onChange]);

  return (
    <div className="space-y-3">
      {payload.context ? <p className="text-sm text-slate-400">{payload.context}</p> : null}
      {stage === "listen" ? (
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            className="gap-1.5 bg-sky-500/15 text-sky-300 hover:bg-sky-500/25"
            onClick={playThenRepeat}
          >
            <Volume2 className="size-3.5" aria-hidden /> Play sentence, then repeat
          </Button>
          <span className="text-xs text-slate-500">
            Recording starts the moment the audio ends — you have {payload.windowSec} seconds.
          </span>
        </div>
      ) : stage === "countdown" ? (
        <div className="flex items-center gap-3 rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-3" aria-live="polite">
          <Mic className="size-5 animate-pulse text-rose-300" aria-hidden />
          <span className="font-mono text-lg font-bold text-rose-300">{windowLeft}s</span>
          <span className="text-xs text-slate-300">Repeat the sentence aloud now.</span>
          {recorder.level > 0 ? (
            <span className="ml-2 h-2 w-16 overflow-hidden rounded-full bg-slate-700">
              <span className="block h-full bg-rose-400" style={{ width: `${Math.round(recorder.level * 100)}%` }} />
            </span>
          ) : null}
        </div>
      ) : (
        <div className="space-y-2">
          {recorder.audioUrl ? (
            <audio controls src={recorder.audioUrl} className="w-full" aria-label="Your recording" />
          ) : (
            <p className="text-xs text-amber-300">
              No recording was captured{recorder.error ? ` — ${recorder.error.message}` : ""}. You can still type what you said.
            </p>
          )}
          <Textarea
            value={text}
            onChange={(event) => onChange({ text: event.target.value })}
            placeholder="Type what you said — your transcript is marked for exact repetition."
            className="min-h-20 border-slate-700 bg-slate-950 text-slate-100"
            aria-label="Repetition transcript"
          />
        </div>
      )}
    </div>
  );
}

function WritingTask({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as {
    prompt: string;
    supporting?: string;
    minWords: number;
    suggestedMinutes: number;
    part?: string;
  };
  const text = typeof (value as { text?: string })?.text === "string" ? (value as { text: string }).text : "";
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <div className="space-y-3">
      {payload.part ? (
        <Badge variant="outline" className="border-violet-500/40 text-violet-300">
          {payload.part}
        </Badge>
      ) : null}
      <p className="text-sm leading-relaxed text-slate-200">{payload.prompt}</p>
      {payload.supporting ? (
        <pre className="whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950 p-3 font-sans text-xs leading-relaxed text-slate-300">
          {payload.supporting}
        </pre>
      ) : null}
      <Textarea
        value={text}
        onChange={(event) => onChange({ text: event.target.value })}
        placeholder="Write your response…"
        aria-label="Your essay response"
        className="min-h-64 border-slate-700 bg-slate-950 text-slate-100"
      />
      <div className="flex items-center justify-between text-xs">
        <span className={cn(words >= payload.minWords ? "text-emerald-300" : "text-slate-400")}>
          {words} words (minimum {payload.minWords})
        </span>
        <span className="text-slate-500">suggested {payload.suggestedMinutes} minutes</span>
      </div>
    </div>
  );
}

function EmailWritingTask({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as {
    situation: string;
    bullets: string[];
    tone: string;
    minWords: number;
    suggestedMinutes: number;
    part?: string;
  };
  const text = typeof (value as { text?: string })?.text === "string" ? (value as { text: string }).text : "";
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <div className="space-y-3">
      {payload.part ? (
        <Badge variant="outline" className="border-violet-500/40 text-violet-300">
          {payload.part}
        </Badge>
      ) : null}
      <Badge variant="outline" className="border-amber-500/40 text-amber-300 capitalize">
        {payload.tone} tone
      </Badge>
      <p className="text-sm leading-relaxed text-slate-200">{payload.situation}</p>
      <ul className="space-y-1 rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm text-slate-300">
        <li className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">In your letter, you must:</li>
        {payload.bullets.map((bullet, index) => (
          <li key={index} className="flex gap-2">
            <span className="font-mono text-amber-300">{index + 1}.</span>
            {bullet}
          </li>
        ))}
      </ul>
      <Textarea
        value={text}
        onChange={(event) => onChange({ text: event.target.value })}
        placeholder="Write your letter…"
        aria-label="Your letter"
        className="min-h-64 border-slate-700 bg-slate-950 text-slate-100"
      />
      <div className="flex items-center justify-between text-xs">
        <span className={cn(words >= payload.minWords ? "text-emerald-300" : "text-slate-400")}>
          {words} words (minimum {payload.minWords})
        </span>
        <span className="text-slate-500">suggested {payload.suggestedMinutes} minutes</span>
      </div>
    </div>
  );
}

function DiscussionTask({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as {
    prompt: string;
    posts: Array<{ author: string; text: string }>;
    minWords: number;
    suggestedMinutes: number;
    part?: string;
  };
  const text = typeof (value as { text?: string })?.text === "string" ? (value as { text: string }).text : "";
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <div className="space-y-3">
      {payload.part ? (
        <Badge variant="outline" className="border-violet-500/40 text-violet-300">
          {payload.part}
        </Badge>
      ) : null}
      <p className="text-sm leading-relaxed text-slate-200">{payload.prompt}</p>
      <div className="space-y-2">
        {payload.posts.map((post, index) => (
          <div key={index} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-xs font-semibold text-sky-300">{post.author}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-300">{post.text}</p>
          </div>
        ))}
      </div>
      <Textarea
        value={text}
        onChange={(event) => onChange({ text: event.target.value })}
        placeholder="Write your post for the discussion…"
        aria-label="Your discussion post"
        className="min-h-56 border-slate-700 bg-slate-950 text-slate-100"
      />
      <div className="flex items-center justify-between text-xs">
        <span className={cn(words >= payload.minWords ? "text-emerald-300" : "text-slate-400")}>
          {words} words (aim for {payload.minWords}+)
        </span>
        <span className="text-slate-500">suggested {payload.suggestedMinutes} minutes</span>
      </div>
    </div>
  );
}

function SpeakingTaskItem({
  question,
  value,
  onChange,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
}) {
  const payload = question.payload as {
    prompt: string;
    prepSec: number;
    speakSec: number;
    part?: string;
    followUp?: string[];
  };
  const text = typeof (value as { text?: string })?.text === "string" ? (value as { text: string }).text : "";
  const [phase, setPhase] = useState<"idle" | "prep" | "speak" | "done">("idle");
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(0);
  const recorder = useRecorder(120);
  const recognition = useSpeechRecognition();
  const phaseTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase === "idle" || phase === "done") return;
    secondsRef.current = 0;
    const target = phase === "prep" ? payload.prepSec : payload.speakSec;
    const nextPhase = phase === "prep" ? "speak" : "done";
    phaseTimer.current = setInterval(() => {
      secondsRef.current += 1;
      setSeconds(secondsRef.current);
      if (secondsRef.current >= target) {
        if (phaseTimer.current) clearInterval(phaseTimer.current);
        if (phase === "speak") {
          recorder.stop();
          recognition.stop();
        }
        if (phase === "prep") {
          setPhase("speak");
          void recorder.start();
          if (recognition.supported) recognition.start();
        } else {
          setPhase("done");
        }
        setSeconds(0);
      }
    }, 1000);
    return () => {
      if (phaseTimer.current) clearInterval(phaseTimer.current);
    };
     
  }, [phase, payload.prepSec, payload.speakSec]);

  useEffect(() => {
    if (recognition.transcript && phase === "done" && !text) {
      onChange({ text: recognition.transcript });
    }
  }, [recognition.transcript, phase, text, onChange]);

  return (
    <div className="space-y-3">
      {payload.part ? (
        <Badge variant="outline" className="border-rose-500/40 text-rose-300">
          {payload.part}
        </Badge>
      ) : null}
      <p className="text-sm leading-relaxed text-slate-200">{payload.prompt}</p>
      {payload.followUp && payload.followUp.length > 0 ? (
        <p className="text-xs text-slate-500">Follow-up: {payload.followUp.join(" ")}</p>
      ) : null}
      {phase === "idle" ? (
        <Button
          size="sm"
          variant="outline"
          className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900"
          onClick={() => {
            setPhase(payload.prepSec > 0 ? "prep" : "speak");
            if (payload.prepSec === 0) {
              void recorder.start();
              if (recognition.supported) recognition.start();
            }
            setSeconds(0);
          }}
        >
          <Play className="size-3.5" aria-hidden />
          {payload.prepSec > 0 ? `Start prep (${payload.prepSec}s)` : `Speak (${payload.speakSec}s)`}
        </Button>
      ) : phase === "prep" ? (
        <div className="flex items-center gap-3 rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-3" aria-live="polite">
          <Clock className="size-5 text-sky-300" aria-hidden />
          <span className="font-mono text-lg font-bold text-sky-300">
            Prep: {Math.max(0, payload.prepSec - seconds)}s
          </span>
          <span className="text-xs text-slate-300">The recording starts automatically.</span>
        </div>
      ) : phase === "speak" ? (
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-3" aria-live="polite">
          <Mic className="size-5 animate-pulse text-rose-300" aria-hidden />
          <span className="font-mono text-lg font-bold text-rose-300">
            Speaking: {Math.max(0, payload.speakSec - seconds)}s
          </span>
          <button
            type="button"
            className="ml-2 text-xs text-slate-300 underline underline-offset-2 hover:text-white"
            onClick={() => {
              if (phaseTimer.current) clearInterval(phaseTimer.current);
              recorder.stop();
              recognition.stop();
              setPhase("done");
              setSeconds(0);
            }}
          >
            stop now
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {recorder.audioUrl ? (
            <audio controls src={recorder.audioUrl} className="w-full" aria-label="Your recording" />
          ) : (
            <p className="text-xs text-amber-300">
              No recording was captured{recorder.error ? ` — ${recorder.error.message}` : ""}. You can still type what you said.
            </p>
          )}
          <Textarea
            value={text}
            onChange={(event) => onChange({ text: event.target.value })}
            placeholder="Speak your answer out loud, then type what you said (your transcript is graded against the speaking rubric)."
            className="min-h-40 border-slate-700 bg-slate-950 text-slate-100"
          />
          <p className="text-xs text-slate-500">
            {text.trim() ? text.trim().split(/\s+/).length : 0} words recorded
          </p>
        </div>
      )}
    </div>
  );
}

function QuestionRenderer({
  question,
  value,
  onChange,
  policy,
}: {
  question: SafeMockQuestion;
  value: unknown;
  onChange: (answer: unknown) => void;
  policy: PlayerPolicy;
}) {
  const payload = question.payload as { passage?: string; audioScript?: string };
  return (
    <div className="space-y-4">
      {payload.audioScript ? (
        <AudioStimulus script={payload.audioScript} replayAllowed={policy.replayAudio} />
      ) : null}
      {question.stem ? (
        <p className="text-sm font-medium leading-relaxed text-slate-100">{question.stem}</p>
      ) : null}
      {payload.passage ? (
        <div className="max-h-72 overflow-y-auto whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-relaxed text-slate-300">
          {payload.passage}
        </div>
      ) : null}
      {question.type === "MCQ_SINGLE" ? <McqSingle question={question} value={value} onChange={onChange} /> : null}
      {question.type === "MCQ_MULTI" ? <McqMulti question={question} value={value} onChange={onChange} /> : null}
      {question.type === "TFNG" ? <Tfng question={question} value={value} onChange={onChange} /> : null}
      {question.type === "MATCHING" ? <Matching question={question} value={value} onChange={onChange} /> : null}
      {question.type === "MAP_LABEL" ? <MapLabel question={question} value={value} onChange={onChange} /> : null}
      {question.type === "FILL_BLANK" ? <FillBlank question={question} value={value} onChange={onChange} /> : null}
      {question.type === "COMPLETE_WORDS" ? <CompleteWords question={question} value={value} onChange={onChange} /> : null}
      {question.type === "SENTENCE_RECONSTRUCTION" ? (
        <SentenceReconstruction question={question} value={value} onChange={onChange} />
      ) : null}
      {question.type === "DICTATION" ? (
        <Dictation question={question} value={value} onChange={onChange} replayAllowed={policy.replayAudio} />
      ) : null}
      {question.type === "LISTEN_REPEAT" ? (
        <ListenRepeat question={question} value={value} onChange={onChange} replayAllowed={policy.replayAudio} />
      ) : null}
      {question.type === "WRITING_TASK" ? <WritingTask question={question} value={value} onChange={onChange} /> : null}
      {question.type === "EMAIL_WRITING" ? <EmailWritingTask question={question} value={value} onChange={onChange} /> : null}
      {question.type === "DISCUSSION_TASK" ? <DiscussionTask question={question} value={value} onChange={onChange} /> : null}
      {question.type === "SPEAKING_TASK" ? <SpeakingTaskItem question={question} value={value} onChange={onChange} /> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Player
// ---------------------------------------------------------------------------

function formatClock(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

type RevealData = {
  verdict: "correct" | "incorrect";
  awarded: number;
  points: number;
  explanation: string | null;
  correctAnswer: string | null;
};

type QueueEntry = { answer?: unknown; flagged?: boolean; timeDeltaSec?: number };

export function MockPlayerView({
  attemptId,
  navigate,
}: {
  attemptId: string;
  navigate: (route: AppRoute) => void;
}) {
  const [mock, setMock] = useState<SafeMockTest | null>(null);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [timed, setTimed] = useState(true);
  const [modeLabel, setModeLabel] = useState("Full mock examination");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [phase, setPhase] = useState<"directions" | "active">("directions");
  const [remaining, setRemaining] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [lockedSections, setLockedSections] = useState<Set<number>>(new Set());
  const [reveals, setReveals] = useState<Record<string, RevealData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [abandonOpen, setAbandonOpen] = useState(false);
  const [abandoning, setAbandoning] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const saveQueue = useRef(new Map<string, QueueEntry>());
  const timeAccum = useRef(new Map<string, number>());

  useEffect(() => {
    (async () => {
      const attemptResponse = await examApi.attempt(attemptId);
      if (!attemptResponse.ok) {
        setNotFound(true);
        return;
      }
      if (attemptResponse.data.attempt.status !== "in_progress") {
        navigate({ name: "exams-result", attemptId });
        return;
      }
      setTimed(attemptResponse.data.attempt.timed);
      setModeLabel(attemptResponse.data.attempt.modeLabel);
      setAnswers(attemptResponse.data.answers);
      setFlags(attemptResponse.data.flags ?? {});
      const mockResponse = await examApi.mock(attemptResponse.data.attempt.mockTestId);
      if (!mockResponse.ok) {
        setNotFound(true);
        return;
      }
      setMock(mockResponse.data.mock);
    })();
  }, [attemptId, navigate]);

  const section = mock?.sections[sectionIndex] ?? null;
  const policy: PlayerPolicy = useMemo(
    () => effectivePolicy(section?.navigation ?? DEFAULT_NAVIGATION, timed),
    [section, timed],
  );
  const questions = section?.questions ?? [];
  const question = questions[questionIndex] ?? null;

  const isAnswered = useCallback((questionId: string) => {
    const answer = answers[questionId];
    if (answer === null || answer === undefined) return false;
    if (typeof answer === "object") {
      const record = answer as { text?: string; option?: number; value?: number; options?: number[]; blanks?: string[]; words?: string[]; pairs?: Record<string, string> };
      if (typeof record.text === "string") return record.text.trim().length > 0;
      if (typeof record.option === "number") return true;
      if (typeof record.value === "number") return true;
      if (Array.isArray(record.options)) return record.options.length > 0;
      if (Array.isArray(record.blanks)) return record.blanks.some((b) => b && b.trim());
      if (Array.isArray(record.words)) return record.words.some((w) => w && w.trim());
      if (record.pairs) return Object.keys(record.pairs).length > 0;
    }
    return false;
  }, [answers]);

  const doSubmit = useCallback(
    async (auto = false) => {
      setSubmitting(true);
      // Final flush of queued saves before grading.
      for (const [qid, secs] of timeAccum.current.entries()) {
        if (secs <= 0) continue;
        const entry = saveQueue.current.get(qid) ?? {};
        entry.timeDeltaSec = (entry.timeDeltaSec ?? 0) + secs;
        saveQueue.current.set(qid, entry);
      }
      timeAccum.current.clear();
      for (const [qid, entry] of saveQueue.current.entries()) {
        await examApi.saveAnswer(attemptId, qid, entry.answer, {
          ...(entry.flagged !== undefined ? { flagged: entry.flagged } : {}),
          ...(entry.timeDeltaSec ? { timeDeltaSec: entry.timeDeltaSec } : {}),
        });
      }
      saveQueue.current.clear();
      const response = await examApi.submitAttempt(attemptId);
      setSubmitting(false);
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      if (!auto) toast.success("Submitted — grading complete.");
      navigate({ name: "exams-result", attemptId });
    },
    [attemptId, navigate],
  );

  /** PROMPT 51: abandon the attempt — flush every queued save first so all
   *  responses are preserved, then record the run as unfinished. */
  const doAbandon = useCallback(async () => {
    setAbandoning(true);
    for (const [qid, secs] of timeAccum.current.entries()) {
      if (secs <= 0) continue;
      const entry = saveQueue.current.get(qid) ?? {};
      entry.timeDeltaSec = (entry.timeDeltaSec ?? 0) + secs;
      saveQueue.current.set(qid, entry);
    }
    timeAccum.current.clear();
    for (const [qid, entry] of saveQueue.current.entries()) {
      await examApi.saveAnswer(attemptId, qid, entry.answer, {
        ...(entry.flagged !== undefined ? { flagged: entry.flagged } : {}),
        ...(entry.timeDeltaSec ? { timeDeltaSec: entry.timeDeltaSec } : {}),
      });
    }
    saveQueue.current.clear();
    const response = await examApi.abandonAttempt(attemptId);
    setAbandoning(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.info(`Attempt recorded as unfinished — ${response.data.savedResponses} saved responses preserved.`);
    navigate({ name: "exams-mocks" });
  }, [attemptId, navigate]);

  const handleSectionExpired = useCallback(() => {
    if (!mock || !section) return;
    toast.warning(`Time is up for ${section.title}. The section is now locked.`);
    window.speechSynthesis?.cancel();
    setLockedSections((current) => new Set([...current, sectionIndex]));
    if (sectionIndex >= mock.sections.length - 1) {
      void doSubmit(true);
    } else {
      setSectionIndex(sectionIndex + 1);
      setQuestionIndex(0);
      setPhase("directions");
    }
  }, [mock, section, sectionIndex, doSubmit]);

  // Master clock: section countdown/count-up + per-question time accrual.
  useEffect(() => {
    if (phase !== "active" || !section || !question) return;
    const tick = setInterval(() => {
      timeAccum.current.set(question.id, (timeAccum.current.get(question.id) ?? 0) + 1);
      if (timed) {
        setRemaining((current) => {
          if (current <= 1) {
            clearInterval(tick);
            handleSectionExpired();
            return 0;
          }
          return current - 1;
        });
      } else {
        setElapsed((current) => current + 1);
      }
    }, 1000);
    return () => clearInterval(tick);
  }, [phase, section, question, timed, handleSectionExpired]);

  // Flush queued answer/flag/time saves.
  useEffect(() => {
    const flush = setInterval(() => {
      if (saveQueue.current.size === 0 && timeAccum.current.size === 0) return;
      // Fold accrued seconds into the queue. Entries created here carry time
      // only — the server leaves the stored answer untouched when the request
      // has no answer field.
      for (const [qid, secs] of timeAccum.current.entries()) {
        if (secs <= 0) continue;
        const entry = saveQueue.current.get(qid) ?? {};
        entry.timeDeltaSec = (entry.timeDeltaSec ?? 0) + secs;
        saveQueue.current.set(qid, entry);
      }
      timeAccum.current.clear();
      for (const [qid, entry] of saveQueue.current.entries()) {
        void examApi.saveAnswer(attemptId, qid, entry.answer, {
          ...(entry.flagged !== undefined ? { flagged: entry.flagged } : {}),
          ...(entry.timeDeltaSec ? { timeDeltaSec: entry.timeDeltaSec } : {}),
        });
      }
      saveQueue.current.clear();
    }, 1500);
    return () => clearInterval(flush);
  }, [attemptId]);

  const setAnswer = useCallback(
    (questionId: string, answer: unknown) => {
      setAnswers((current) => ({ ...current, [questionId]: answer }));
      const entry = saveQueue.current.get(questionId) ?? {};
      entry.answer = answer;
      saveQueue.current.set(questionId, entry);
      setReveals((current) => {
        if (!(questionId in current)) return current;
        const next = { ...current };
        delete next[questionId];
        return next;
      });
    },
    [],
  );

  const toggleFlag = useCallback((questionId: string) => {
    setFlags((current) => {
      const next = { ...current, [questionId]: !current[questionId] };
      const entry = saveQueue.current.get(questionId) ?? {};
      entry.flagged = next[questionId];
      saveQueue.current.set(questionId, entry);
      return next;
    });
  }, []);

  const startSection = () => {
    if (!section) return;
    setRemaining(section.timingSec);
    setElapsed(0);
    setPhase("active");
  };

  const goToSection = (index: number) => {
    if (lockedSections.has(index)) return;
    if (timed) {
      // Leaving a section forward locks it, exactly like the real exam.
      setLockedSections((current) => new Set([...current, sectionIndex]));
    }
    setSectionIndex(index);
    setQuestionIndex(0);
    setPhase("directions");
    window.speechSynthesis?.cancel();
  };

  const goToQuestion = (index: number) => {
    if (policy.withinSection === "forward_only" && index < questionIndex) return;
    setQuestionIndex(index);
  };

  const nextQuestion = () => {
    if (!question) return;
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (policy.withinSection === "forward_only") return;
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  };

  const checkAnswer = async (questionId: string) => {
    const response = await examApi.revealAnswer(attemptId, questionId);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setReveals((current) => ({ ...current, [questionId]: response.data.reveal }));
  };

  if (notFound) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Attempt not found</h2>
        <Button
          variant="outline"
          className="border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900"
          onClick={() => navigate({ name: "exams-mocks" })}
        >
          Back to mock tests
        </Button>
      </div>
    );
  }

  if (!mock || !section || !question) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-24 text-center text-slate-400">
        Loading mock…
      </div>
    );
  }

  const isLastSection = sectionIndex === mock.sections.length - 1;
  const isLastQuestion = questionIndex === questions.length - 1;
  const answeredInSection = questions.filter((q) => isAnswered(q.id)).length;
  const flaggedInSection = questions.filter((q) => flags[q.id]).length;
  const totalQuestions = mock.sections.reduce((sum, s) => sum + s.questions.length, 0);
  const answeredOverall = mock.sections.reduce(
    (sum, s) => sum + s.questions.filter((q) => isAnswered(q.id)).length,
    0,
  );
  const unansweredOverall = totalQuestions - answeredOverall;
  const statusLine = `Question ${questionIndex + 1} of ${questions.length} · ${section.title}`;
  const progressLine = `${answeredInSection} answered · ${flaggedInSection} flagged · ${answeredOverall}/${totalQuestions} overall`;
  const objectiveTypes = new Set([
    "MCQ_SINGLE", "MCQ_MULTI", "TFNG", "MATCHING", "FILL_BLANK",
    "COMPLETE_WORDS", "SENTENCE_RECONSTRUCTION", "DICTATION", "LISTEN_REPEAT",
  ]);
  const canReveal = !timed && objectiveTypes.has(question.type) && isAnswered(question.id);
  const reveal = reveals[question.id] ?? null;

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      {/* Exam chrome */}
      <div className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <button
                onClick={() => navigate({ name: "exams-mocks" })}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white"
                aria-label="Exit to mock library"
              >
                <ArrowLeft className="size-4" aria-hidden />
              </button>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-white">{mock.title}</div>
                <div className="text-xs text-slate-500">
                  {mock.spec.name} · spec v{mock.spec.version} · practice simulation
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className={cn(
                  "hidden sm:inline-flex",
                  timed ? "border-emerald-500/40 text-emerald-300" : "border-sky-500/40 text-sky-300",
                )}
              >
                {modeLabel}
              </Badge>
              <button
                type="button"
                onClick={() => setAbandonOpen(true)}
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-900 hover:text-rose-300"
                aria-label="Abandon this attempt (responses are preserved)"
                title="Abandon this attempt — responses are preserved"
              >
                <LogOut className="size-4" aria-hidden />
              </button>
              {phase === "active" ? (
                timed ? (
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1.5 font-mono text-sm font-bold",
                      remaining < 60 ? "bg-rose-500/15 text-rose-300" : "bg-slate-800 text-amber-300",
                    )}
                    aria-live="polite"
                  >
                    {formatClock(remaining)}
                  </div>
                ) : (
                  <div
                    className="rounded-lg bg-sky-500/15 px-3 py-1.5 font-mono text-sm font-bold text-sky-300"
                    aria-live="off"
                  >
                    {formatClock(elapsed)} elapsed
                  </div>
                )
              ) : null}
            </div>
          </div>
          {/* Section navigation */}
          <div className="mt-2 flex items-center gap-1 overflow-x-auto pb-1" role="navigation" aria-label="Sections">
            {mock.sections.map((s, index) => {
              const locked = lockedSections.has(index);
              const isCurrent = index === sectionIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => (isCurrent ? undefined : goToSection(index))}
                  disabled={locked && !isCurrent}
                  className={cn(
                    "flex shrink-0 items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors",
                    isCurrent
                      ? "bg-amber-400/15 text-amber-300"
                      : locked
                        ? "cursor-not-allowed text-slate-600"
                        : "text-slate-500 hover:text-slate-300",
                  )}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {locked ? <Lock className="size-3" aria-hidden /> : null}
                  {s.key}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-4 px-4 py-6 sm:px-6">
        {phase === "directions" ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="space-y-4 p-6 sm:p-8">
              <Badge variant="outline" className="border-amber-500/40 text-amber-300">
                Section {sectionIndex + 1} of {mock.sections.length} · {Math.round(section.timingSec / 60)} minutes
              </Badge>
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              {section.directions ? (
                <p className="text-sm leading-relaxed text-slate-300">{section.directions}</p>
              ) : null}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Flag className="size-3.5" aria-hidden /> {section.questions.length} questions
                </span>
                <span className="flex items-center gap-1">
                  <AlertTriangle className="size-3.5 text-amber-400/70" aria-hidden />
                  {timed
                    ? "The clock runs once you start and cannot be paused. When time is up the section locks — exactly like the real test."
                    : "Untimed learning practice: no locks, replays allowed, and you can check answers as you go."}
                </span>
              </div>
              {policy.withinSection === "forward_only" ? (
                <p className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-200">
                  In this section the real test only moves forward: once you leave a question you cannot
                  return to it. The player behaves the same way.
                </p>
              ) : null}
              <Button className="bg-amber-400 text-slate-950 hover:bg-amber-300" onClick={startSection}>
                {timed ? `Start section — ${formatClock(section.timingSec)}` : "Start section (untimed)"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Progress + question navigation */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold uppercase tracking-wide text-slate-500">
                  {statusLine}
                </span>
                <span className="flex items-center gap-3 text-slate-400">
                  <span>{progressLine}</span>
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800" role="progressbar" aria-valuenow={answeredInSection} aria-valuemin={0} aria-valuemax={questions.length}>
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{ width: `${(answeredInSection / Math.max(1, questions.length)) * 100}%` }}
                />
              </div>
              {policy.withinSection === "free" ? (
                <div className="flex flex-wrap gap-1.5" role="navigation" aria-label="Questions">
                  {questions.map((q, index) => {
                    const answered = isAnswered(q.id);
                    const flagged = flags[q.id];
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => goToQuestion(index)}
                        aria-label={`Question ${index + 1}${answered ? " (answered)" : ""}${flagged ? " (flagged for review)" : ""}`}
                        className={cn(
                          "relative size-8 rounded-md border text-xs font-semibold transition-colors",
                          index === questionIndex
                            ? "border-amber-400 bg-amber-400/15 text-amber-200"
                            : answered
                              ? "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500"
                              : "border-slate-800 bg-slate-950 text-slate-600 hover:border-slate-600",
                        )}
                      >
                        {index + 1}
                        {flagged ? (
                          <span
                            className="absolute -right-1 -top-1 size-2.5 rounded-full bg-sky-400"
                            aria-hidden
                          />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* Question card */}
            <Card className="border-slate-800 bg-slate-900/60">
              <CardContent className="space-y-4 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-slate-700 text-[10px] text-slate-400">
                      {question.type.replace(/_/g, " ").toLowerCase()}
                    </Badge>
                    <span className="text-[10px] text-slate-500">difficulty {question.difficulty}/5</span>
                  </div>
                  {policy.flagForReview ? (
                    <button
                      type="button"
                      onClick={() => toggleFlag(question.id)}
                      aria-pressed={flags[question.id] ?? false}
                      className={cn(
                        "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors",
                        flags[question.id]
                          ? "border-sky-400 bg-sky-400/15 text-sky-300"
                          : "border-slate-700 bg-transparent text-slate-400 hover:text-slate-200",
                      )}
                    >
                      <Flag className="size-3.5" aria-hidden />
                      {flags[question.id] ? "Flagged for review" : "Flag for review"}
                    </button>
                  ) : null}
                </div>
                {/* PROMPT 44: part-level recording shared by this question's
                    group — one play per part under exam timing, state kept
                    while the learner moves between that part's questions. */}
                {(() => {
                  const part = section.audioParts?.find((p) => p.key === question.group);
                  if (!part) return null;
                  return (
                    <div
                      key={part.key}
                      className="rounded-lg border border-sky-500/30 bg-sky-500/5 p-4"
                    >
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-sky-200">{part.label}</p>
                        <Badge variant="outline" className="border-sky-500/40 text-sky-300">
                          {policy.replayAudio ? "Recording (replay allowed in practice)" : "Recording — one play only"}
                        </Badge>
                      </div>
                      {part.directions ? (
                        <p className="mb-3 text-xs leading-relaxed text-slate-400">{part.directions}</p>
                      ) : null}
                      <AudioStimulus
                        script={part.script}
                        replayAllowed={policy.replayAudio}
                        label={`Play ${part.label}`}
                      />
                    </div>
                  );
                })()}
                <QuestionRenderer
                  question={question}
                  value={answers[question.id] ?? null}
                  onChange={(answer) => setAnswer(question.id, answer)}
                  policy={policy}
                />

                {/* Untimed learning reveal */}
                {canReveal && !reveal ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5 border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                    onClick={() => void checkAnswer(question.id)}
                  >
                    <CheckCircle2 className="size-3.5" aria-hidden /> Check this answer
                  </Button>
                ) : null}
                {reveal ? (
                  <div
                    className={cn(
                      "space-y-2 rounded-lg border p-4",
                      reveal.verdict === "correct"
                        ? "border-emerald-500/40 bg-emerald-500/5"
                        : "border-rose-500/40 bg-rose-500/5",
                    )}
                    aria-live="polite"
                  >
                    <p className={cn("text-sm font-semibold", reveal.verdict === "correct" ? "text-emerald-300" : "text-rose-300")}>
                      {reveal.verdict === "correct"
                        ? `Correct — ${reveal.awarded}/${reveal.points} marks.`
                        : `Not quite — ${reveal.awarded}/${reveal.points} marks.`}
                    </p>
                    {reveal.correctAnswer ? (
                      <p className="text-sm text-slate-200">
                        <span className="text-slate-400">Answer: </span>
                        {reveal.correctAnswer}
                      </p>
                    ) : null}
                    {reveal.explanation ? (
                      <p className="text-sm leading-relaxed text-slate-300">{reveal.explanation}</p>
                    ) : null}
                  </div>
                ) : null}
              </CardContent>
            </Card>

            {/* Movement + submit */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-8">
              <div className="flex gap-2">
                {policy.withinSection === "free" && questionIndex > 0 ? (
                  <Button
                    variant="outline"
                    onClick={prevQuestion}
                    className="gap-1 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
                  >
                    <ChevronLeft className="size-4" aria-hidden /> Previous
                  </Button>
                ) : null}
                {!isLastQuestion ? (
                  <Button onClick={nextQuestion} className="gap-1 bg-amber-400 text-slate-950 hover:bg-amber-300">
                    Next question <ChevronRight className="size-4" aria-hidden />
                  </Button>
                ) : isLastSection ? (
                  <Button
                    className="gap-1.5 bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    disabled={submitting}
                    onClick={() => setConfirmOpen(true)}
                  >
                    <Send className="size-4" aria-hidden />
                    {submitting ? "Grading…" : "Submit for grading"}
                  </Button>
                ) : (
                  <Button
                    onClick={() => goToSection(sectionIndex + 1)}
                    className="gap-1 bg-amber-400 text-slate-950 hover:bg-amber-300"
                  >
                    Next section <ChevronRight className="size-4" aria-hidden />
                  </Button>
                )}
              </div>
              {isLastSection && !isLastQuestion ? (
                <Button
                  variant="outline"
                  className="gap-1.5 border-emerald-500/40 bg-transparent text-emerald-300 hover:bg-emerald-500/10"
                  disabled={submitting}
                  onClick={() => setConfirmOpen(true)}
                >
                  <Send className="size-4" aria-hidden /> Submit early
                </Button>
              ) : null}
            </div>
          </>
        )}
      </div>

      {/* Submit confirmation */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit for grading?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  {answeredOverall} of {totalQuestions} answered
                  {unansweredOverall > 0 ? ` — ${unansweredOverall} will be marked unanswered` : ""}.
                </p>
                <p>
                  {Object.values(flags).filter(Boolean).length} flagged for review
                  {timed ? ". Once submitted, the section locks and answers cannot change." : "."}
                </p>
                <p className="text-xs text-slate-500">{mock.integrityNote}</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep working</AlertDialogCancel>
            <AlertDialogAction
              className="bg-amber-400 text-slate-950 hover:bg-amber-300"
              onClick={() => void doSubmit(false)}
            >
              Submit for grading
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* PROMPT 51: abandon (record as unfinished) confirmation */}
      <AlertDialog open={abandonOpen} onOpenChange={setAbandonOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Abandon this attempt?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  The attempt will be recorded in your history as <strong>unfinished</strong> —
                  every answer you have saved ({answeredOverall} of {totalQuestions}) is
                  preserved, but the run is never scored and cannot be resumed.
                </p>
                <p className="text-xs text-slate-500">
                  Walking away from a timed simulation without submitting never reveals the
                  answer key — an unfinished attempt has no result report.
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep working</AlertDialogCancel>
            <AlertDialogAction
              className="bg-rose-500 text-white hover:bg-rose-400"
              disabled={abandoning}
              onClick={() => void doAbandon()}
            >
              {abandoning ? "Recording…" : "Abandon — keep my answers"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
