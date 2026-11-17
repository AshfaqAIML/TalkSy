"use client";

/**
 * Teaching-structure block views (PROMPT 35 lesson standard).
 *
 * These blocks turn a lesson page into a taught classroom: a proper
 * introduction, step-by-step teaching, real-life usage, comparisons,
 * common mistakes with reasons, a four-skills practice card (with local
 * record/playback for speaking), summary, self-checked revision quiz and
 * validated Urdu/Hindi language support.
 */

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Eye,
  EyeOff,
  Footprints,
  Lightbulb,
  ListChecks,
  Mic,
  MicOff,
  Pause,
  PenLine,
  Play,
  RotateCcw,
  Scale,
  Square,
  Target,
  Volume2,
  X,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/lib/client/store";
import { speak, ttsSupported } from "@/hooks/use-speech";
import { SpeakButton } from "./content-blocks";
import type {
  ComparisonBlock,
  FourSkillsBlock,
  LanguageSupportBlock,
  LessonIntroBlock,
  MistakesBlock,
  RevisionBlock,
  StepsBlock,
  SummaryBlock,
  UsageBlock,
} from "@/data/curriculum/types";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Lesson introduction
// ---------------------------------------------------------------------------

export function LessonIntroBlockView({ block }: { block: LessonIntroBlock }) {
  return (
    <Card className="overflow-hidden border-primary/25 bg-gradient-to-br from-primary/[0.07] via-card to-card">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <BookOpen className="size-4" aria-hidden />
          </span>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {block.title ?? "In this lesson"}
          </p>
        </div>
        <p className="text-base leading-relaxed text-foreground/90">{block.text}</p>
        {block.beforeYouStart && block.beforeYouStart.length > 0 ? (
          <div className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Before you start
            </p>
            <ul className="flex flex-col gap-1">
              {block.beforeYouStart.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Step-by-step teaching
// ---------------------------------------------------------------------------

export function StepsBlockView({ block }: { block: StepsBlock }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Footprints className="size-4 text-primary" aria-hidden />
          {block.title}
        </CardTitle>
        {block.intro ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{block.intro}</p>
        ) : null}
      </CardHeader>
      <CardContent>
        <ol className="relative flex flex-col gap-0">
          {block.steps.map((step, i) => (
            <li key={i} className="relative flex gap-3.5 pb-5 last:pb-0">
              {/* connector line */}
              {i < block.steps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-[13px] top-8 h-[calc(100%-2rem)] w-px bg-border"
                />
              ) : null}
              <span className="relative z-10 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <p className="text-sm font-semibold leading-snug">{step.title}</p>
                <p className="text-sm leading-relaxed text-foreground/85">{step.text}</p>
                {step.examples && step.examples.length > 0 ? (
                  <div className="flex flex-col gap-1 rounded-lg bg-secondary/40 px-3 py-2">
                    {step.examples.map((ex, j) => (
                      <div key={j} className="flex items-center justify-between gap-2 text-sm">
                        <span className="flex flex-wrap items-baseline gap-1.5">
                          <span className="font-medium">{ex.english}</span>
                          {ex.translation ? (
                            <span className="text-muted-foreground">— {ex.translation}</span>
                          ) : null}
                        </span>
                        <SpeakButton text={ex.english} label="" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Real-life usage
// ---------------------------------------------------------------------------

export function UsageBlockView({ block }: { block: UsageBlock }) {
  return (
    <Card className="border-accent/40">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Target className="size-4 text-accent-foreground" aria-hidden />
          {block.title ?? "Where you will use this"}
        </CardTitle>
        {block.text ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        {block.items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-xl border border-border/70 bg-background px-3.5 py-2.5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="font-medium">
                {item.situation}
              </Badge>
              <SpeakButton text={item.example} label="" className="ml-auto" />
            </div>
            <p className="text-sm font-medium leading-relaxed">{item.example}</p>
            {item.note ? (
              <p className="text-xs leading-relaxed text-muted-foreground">{item.note}</p>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Comparison
// ---------------------------------------------------------------------------

export function ComparisonBlockView({ block }: { block: ComparisonBlock }) {
  return (
    <Card className="border-secondary">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Scale className="size-4 text-primary" aria-hidden />
          {block.title}
        </CardTitle>
        {block.intro ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{block.intro}</p>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="overflow-x-auto rounded-xl border border-border/70">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="w-[26%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Aspect
                </th>
                <th className="px-3 py-2 text-left font-semibold">{block.columns[0]}</th>
                <th className="px-3 py-2 text-left font-semibold">{block.columns[1]}</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-secondary/20" : ""}>
                  <td className="px-3 py-2 align-top font-medium">{row.aspect}</td>
                  <td className="px-3 py-2 align-top">{row.left}</td>
                  <td className="px-3 py-2 align-top">{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.verdict ? (
          <p className="flex items-start gap-2 rounded-lg bg-primary/[0.06] px-3.5 py-2.5 text-sm leading-relaxed">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <span>{block.verdict}</span>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Common mistakes
// ---------------------------------------------------------------------------

export function MistakesBlockView({ block }: { block: MistakesBlock }) {
  return (
    <Card className="border-destructive/30">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <XCircle className="size-4 text-destructive" aria-hidden />
          {block.title ?? "Common mistakes"}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Study each correction carefully — the reason matters more than the answer.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {block.items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1.5 rounded-xl border border-border/70 bg-background p-3.5"
          >
            <div className="flex flex-wrap items-start gap-2 text-sm">
              <Badge className="gap-1 bg-destructive/10 text-destructive hover:bg-destructive/10">
                <X className="size-3" aria-hidden /> Incorrect
              </Badge>
              <p className="min-w-0 flex-1 leading-relaxed text-foreground/80 line-through decoration-destructive/50">
                {item.wrong}
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-2 text-sm">
              <Badge className="gap-1 bg-success/15 text-success hover:bg-success/15">
                <Check className="size-3" aria-hidden /> Correct
              </Badge>
              <p className="min-w-0 flex-1 font-medium leading-relaxed">{item.right}</p>
              <SpeakButton text={item.right} label="" />
            </div>
            <p className="rounded-lg bg-secondary/50 px-3 py-2 text-sm leading-relaxed text-secondary-foreground">
              <span className="font-semibold">Why: </span>
              {item.reason}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Four skills (tabbed classroom card)
// ---------------------------------------------------------------------------

/** Local microphone recording with playback — nothing leaves the browser. */
function useLocalRecording() {
  const [state, setState] = useState<"idle" | "recording" | "done" | "unsupported">("idle");
  const [url, setUrl] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const unsupported =
      typeof window === "undefined" ||
      !window.MediaRecorder ||
      !navigator.mediaDevices?.getUserMedia;
    if (unsupported) {
      // Deferred so the first client render matches the server render.
      queueMicrotask(() => setState((s) => (s === "idle" ? "unsupported" : s)));
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [url]);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        setUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return URL.createObjectURL(blob);
        });
        setState("done");
      };
      recorder.start();
      recorderRef.current = recorder;
      setState("recording");
    } catch {
      setState("unsupported");
    }
  };

  const stop = () => {
    recorderRef.current?.stop();
    recorderRef.current = null;
  };

  const reset = () => {
    setUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setState("idle");
  };

  return { state, url, start, stop, reset };
}

export function FourSkillsBlockView({ block }: { block: FourSkillsBlock }) {
  const speechRate = useAppStore((s) => s.speechRate);
  const [playing, setPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [writing, setWriting] = useState("");
  const [showModel, setShowModel] = useState(false);
  const recording = useLocalRecording();

  const playScript = () => {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const ok = speak(block.listening.script, {
      rate: 0.85,
      onEnd: () => setPlaying(false),
    });
    setPlaying(ok);
  };

  const wordCount = writing.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

  return (
    <Card className="border-primary/25">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <ListChecks className="size-4 text-primary" aria-hidden />
          {block.title ?? "Practise all four skills"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="reading">
          <TabsList className="mb-3 grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4">
            <TabsTrigger value="reading" className="gap-1.5">
              <BookOpen className="size-3.5" aria-hidden /> Reading
            </TabsTrigger>
            <TabsTrigger value="writing" className="gap-1.5">
              <PenLine className="size-3.5" aria-hidden /> Writing
            </TabsTrigger>
            <TabsTrigger value="listening" className="gap-1.5">
              <Volume2 className="size-3.5" aria-hidden /> Listening
            </TabsTrigger>
            <TabsTrigger value="speaking" className="gap-1.5">
              <Mic className="size-3.5" aria-hidden /> Speaking
            </TabsTrigger>
          </TabsList>

          {/* Reading */}
          <TabsContent value="reading" className="mt-0">
            <div className="rounded-xl bg-secondary/30 p-4">
              <p className="whitespace-pre-line text-sm leading-relaxed">{block.reading.text}</p>
            </div>
            {block.reading.task ? (
              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{block.reading.task}</span>
              </p>
            ) : null}
          </TabsContent>

          {/* Writing */}
          <TabsContent value="writing" className="mt-0">
            <p className="flex items-start gap-2 text-sm font-medium leading-relaxed">
              <PenLine className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>{block.writing.task}</span>
            </p>
            {block.writing.guide && block.writing.guide.length > 0 ? (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {block.writing.guide.map((g, i) => (
                  <Badge key={i} variant="secondary" className="font-normal">
                    {g}
                  </Badge>
                ))}
              </div>
            ) : null}
            <Textarea
              value={writing}
              onChange={(e) => setWriting(e.target.value)}
              placeholder="Write your answer here…"
              rows={5}
              className="mt-3"
              aria-label="Writing task answer"
            />
            <div className="mt-1.5 flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">{wordCount} words</span>
              {block.writing.model ? (
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-7 gap-1.5 text-xs"
                  onClick={() => setShowModel((v) => !v)}
                >
                  {showModel ? (
                    <>
                      <EyeOff className="size-3.5" aria-hidden /> Hide model answer
                    </>
                  ) : (
                    <>
                      <Eye className="size-3.5" aria-hidden /> Show model answer
                    </>
                  )}
                </Button>
              ) : null}
            </div>
            {showModel && block.writing.model ? (
              <p className="mt-2 rounded-lg border border-dashed border-primary/40 bg-primary/[0.05] px-3.5 py-2.5 text-sm leading-relaxed">
                <span className="font-semibold text-primary">Model: </span>
                {block.writing.model}
              </p>
            ) : null}
          </TabsContent>

          {/* Listening */}
          <TabsContent value="listening" className="mt-0">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Listen first without reading. Play it as many times as you need.
            </p>
            {block.listening.task ? (
              <p className="mt-2 flex items-start gap-2 text-sm font-medium leading-relaxed">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{block.listening.task}</span>
              </p>
            ) : null}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button type="button" size="sm" onClick={playScript} className="gap-1.5">
                {playing ? (
                  <>
                    <Square className="size-4" aria-hidden /> Stop
                  </>
                ) : (
                  <>
                    <Play className="size-4" aria-hidden /> Play
                  </>
                )}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="secondary"
                onClick={() =>
                  speak(block.listening.script, { rate: 0.6, onEnd: () => setPlaying(false) })
                }
              >
                🐢 Slow
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="gap-1.5"
                onClick={() => setShowTranscript((v) => !v)}
                aria-expanded={showTranscript}
              >
                <ChevronDown
                  className={cn("size-4 transition-transform", showTranscript && "rotate-180")}
                  aria-hidden
                />
                {showTranscript ? "Hide transcript" : "Show transcript"}
              </Button>
              {!ttsSupported() ? (
                <span className="text-xs text-muted-foreground">
                  Audio is unavailable in this browser — use the transcript.
                </span>
              ) : null}
            </div>
            {showTranscript ? (
              <p className="mt-2.5 rounded-lg bg-secondary/40 px-3.5 py-2.5 text-sm italic leading-relaxed text-secondary-foreground">
                {block.listening.script}
              </p>
            ) : null}
            <p className="sr-only">Playback speed {speechRate}</p>
          </TabsContent>

          {/* Speaking */}
          <TabsContent value="speaking" className="mt-0">
            <p className="flex items-start gap-2 text-sm font-medium leading-relaxed">
              <Mic className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>{block.speaking.task}</span>
            </p>
            {block.speaking.frames && block.speaking.frames.length > 0 ? (
              <div className="mt-2.5 flex flex-col gap-1.5 rounded-xl bg-secondary/30 p-3.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Sentence frames — say these out loud
                </p>
                {block.speaking.frames.map((frame, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 text-sm">
                    <span className="font-medium">{frame}</span>
                    <SpeakButton text={frame} label="" />
                  </div>
                ))}
              </div>
            ) : null}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {recording.state === "recording" ? (
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={recording.stop}
                  className="gap-1.5"
                >
                  <Square className="size-4" aria-hidden /> Stop recording
                </Button>
              ) : (
                <Button
                  type="button"
                  size="sm"
                  onClick={recording.start}
                  disabled={recording.state === "unsupported"}
                  className="gap-1.5"
                >
                  <Mic className="size-4" aria-hidden />
                  {recording.state === "done" ? "Record again" : "Record yourself"}
                </Button>
              )}
              {recording.state === "recording" ? (
                <span className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                  <span className="inline-block size-2 animate-pulse rounded-full bg-destructive" />
                  Recording…
                </span>
              ) : null}
              {recording.state === "unsupported" ? (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MicOff className="size-3.5" aria-hidden />
                  Microphone unavailable — say the frames out loud anyway.
                </span>
              ) : null}
              {recording.url ? (
                <>
                  <audio controls preload="metadata" src={recording.url} className="h-8">
                    Your browser does not support audio playback.
                  </audio>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={recording.reset}
                    className="gap-1.5"
                  >
                    <RotateCcw className="size-4" aria-hidden /> Delete
                  </Button>
                </>
              ) : null}
            </div>
            {block.speaking.checklist && block.speaking.checklist.length > 0 ? (
              <div className="mt-3 rounded-xl border border-border/70 bg-background px-3.5 py-3">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Self-check after speaking
                </p>
                <ul className="flex flex-col gap-1">
                  {block.speaking.checklist.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="mt-2.5 text-xs text-muted-foreground">
              Your recording stays on your device — it is never uploaded.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

export function SummaryBlockView({ block }: { block: SummaryBlock }) {
  return (
    <Card className="border-success/30 bg-success/[0.04]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <CheckCircle2 className="size-4 text-success" aria-hidden />
          {block.title ?? "Lesson summary"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {block.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-[11px] font-bold text-success">
                {i + 1}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Revision quiz (self-checked, immediate feedback)
// ---------------------------------------------------------------------------

export function RevisionBlockView({ block }: { block: RevisionBlock }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    block.items.map(() => null),
  );

  const answered = answers.filter((a) => a !== null).length;
  const correct = answers.filter((a, i) => a === block.items[i].correctIndex).length;

  return (
    <Card className="border-accent/40">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <RotateCcw className="size-4 text-accent-foreground" aria-hidden />
          {block.title ?? "Revision — do you remember?"}
        </CardTitle>
        {block.intro ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{block.intro}</p>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {block.items.map((item, qi) => {
          const chosen = answers[qi];
          return (
            <div
              key={qi}
              className="flex flex-col gap-2 rounded-xl border border-border/70 bg-background p-3.5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="text-sm font-medium leading-relaxed">
                  {qi + 1}. {item.question}
                </p>
                {item.from ? (
                  <Badge variant="outline" className="shrink-0 text-[11px] font-normal">
                    {item.from}
                  </Badge>
                ) : null}
              </div>
              <div
                role="radiogroup"
                aria-label={`Revision question ${qi + 1}`}
                className="grid gap-1.5 sm:grid-cols-2"
              >
                {item.options.map((option, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = item.correctIndex === oi;
                  const showState = chosen !== null;
                  return (
                    <button
                      key={oi}
                      type="button"
                      role="radio"
                      aria-checked={isChosen}
                      disabled={chosen !== null}
                      onClick={() =>
                        setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))
                      }
                      className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm leading-snug transition-colors",
                        !showState &&
                          "border-border/80 bg-background hover:border-primary/50 hover:bg-primary/[0.04]",
                        showState && isCorrect && "border-success/60 bg-success/10 font-medium",
                        showState &&
                          isChosen &&
                          !isCorrect &&
                          "border-destructive/60 bg-destructive/10",
                        showState && !isChosen && !isCorrect && "border-border/60 opacity-60",
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold",
                          showState && isCorrect
                            ? "border-success bg-success text-success-foreground"
                            : showState && isChosen
                              ? "border-destructive bg-destructive text-destructive-foreground"
                              : "border-border",
                        )}
                        aria-hidden
                      >
                        {showState && isCorrect ? (
                          <Check className="size-3" />
                        ) : showState && isChosen ? (
                          <X className="size-3" />
                        ) : (
                          String.fromCharCode(65 + oi)
                        )}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
              {chosen !== null ? (
                <p
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm leading-relaxed",
                    chosen === item.correctIndex
                      ? "bg-success/10 text-foreground"
                      : "bg-secondary/50 text-foreground",
                  )}
                >
                  <span className="font-semibold">
                    {chosen === item.correctIndex ? "Correct. " : "Not quite. "}
                  </span>
                  {item.explanation}
                </p>
              ) : null}
            </div>
          );
        })}
        {answered > 0 ? (
          <div className="flex items-center justify-between rounded-lg bg-secondary/40 px-3.5 py-2.5 text-sm">
            <span className="text-muted-foreground">
              {answered} of {block.items.length} answered
            </span>
            <span className="font-semibold">{correct} correct</span>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Language support (validated Urdu / Hindi glosses)
// ---------------------------------------------------------------------------

export function LanguageSupportBlockView({ block }: { block: LanguageSupportBlock }) {
  const [visible, setVisible] = useState(true);
  return (
    <Card className="border-secondary bg-secondary/20">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Volume2 className="size-4 text-primary" aria-hidden />
            {block.title ?? "Language support"}
          </CardTitle>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="h-7 gap-1.5 text-xs"
            onClick={() => setVisible((v) => !v)}
            aria-expanded={visible}
          >
            {visible ? (
              <>
                <EyeOff className="size-3.5" aria-hidden /> Hide translations
              </>
            ) : (
              <>
                <Eye className="size-3.5" aria-hidden /> Show translations
              </>
            )}
          </Button>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {block.note ??
            "English is your learning language. These checked translations are only a bridge — try to stay in English."}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        {block.entries.map((entry, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-xl border border-border/60 bg-background px-3.5 py-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-relaxed">{entry.english}</p>
              <SpeakButton text={entry.english} label="" />
            </div>
            {visible ? (
              <div className="flex flex-col gap-0.5 border-t border-dashed border-border/70 pt-1.5 text-sm leading-relaxed">
                {entry.ur ? (
                  <p dir="rtl" lang="ur" className="text-right font-medium">
                    {entry.ur}
                  </p>
                ) : null}
                {entry.hi ? (
                  <p dir="ltr" lang="hi">
                    {entry.hi}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
