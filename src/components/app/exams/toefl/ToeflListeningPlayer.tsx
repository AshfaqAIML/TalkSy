"use client";

/**
 * TOEFL Listening Practice Library — exercise player (PROMPT 49).
 *
 * The recording is the exercise's segment list, spoken through on-device
 * speech synthesis with accent-matched voices, natural base rate (0.95)
 * and per-segment pauses. In exam mode the audio plays once; in practice
 * mode replay is allowed. The transcript is locked until submission — the
 * only exception is learningMode exercises, where reading along is the
 * point. Review shows per-item feedback plus the revealed transcript.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { SafeListeningExercise } from "@/lib/exams/toefl-bank/listening";

type ReviewItem = {
  no: number;
  skill: string;
  given: string;
  expected: string;
  errorType: string;
  correct: boolean;
  explanation: string;
  trapNote: string | null;
  keywords: string[];
};

type Review = {
  attemptId: string;
  result: { totalItems: number; correctItems: number; items: ReviewItem[] };
  transcript: {
    speakers: { id: string; name: string; role: string }[];
    segments: { id: string; speakerId?: string; text: string; pauseAfterMs?: number }[];
    note: string;
  };
};

const ACCENT_LANGS: Record<string, string[]> = {
  "North American": ["en-US", "en CA", "en US"],
  British: ["en-GB", "en UK"],
  Australian: ["en-AU", "en AU"],
  "New Zealand": ["en-NZ", "en NZ"],
};

function pickVoice(speakers: { accent: string }[]): Map<string, SpeechSynthesisVoice> {
  const map = new Map<string, SpeechSynthesisVoice>();
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return map;
  const en = window.speechSynthesis.getVoices().filter((v) => v.lang?.toLowerCase().startsWith("en"));
  for (const sp of speakers) {
    const wanted = ACCENT_LANGS[sp.accent] ?? ACCENT_LANGS["North American"];
    map.set(sp.accent, en.find((v) => wanted.some((w) => v.lang.toLowerCase().startsWith(w.toLowerCase().slice(0, 5)))) ?? en[0]);
  }
  return map;
}

const letter = (i: number) => String.fromCharCode(65 + i);

export function ToeflListeningPlayer({ slug, onExit }: { slug: string; onExit: () => void }) {
  const [exercise, setExercise] = useState<SafeListeningExercise | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [review, setReview] = useState<Review | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [phase, setPhase] = useState<"ready" | "playing" | "done">("ready");
  const [playedOnce, setPlayedOnce] = useState(false);
  const [currentSeg, setCurrentSeg] = useState(0);
  const startedAt = useRef(Date.now());
  const audio = useRef<{ cancel: boolean } | null>(null);
  const voicesRef = useRef<Map<string, SpeechSynthesisVoice>>(new Map());

  useEffect(() => {
    let alive = true;
    (async () => {
      const res = await fetch(`/api/exams/toefl/listening/bank/${slug}`);
      if (!res.ok) { toast.error("Could not load this exercise."); onExit(); return; }
      const data = await res.json();
      if (!alive) return;
      setExercise(data.exercise);
      startedAt.current = Date.now();
    })();
    return () => { alive = false; stopAudio(); };
  }, [slug]);

  useEffect(() => {
    if (!exercise || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const assign = () => { voicesRef.current = pickVoice(exercise.speakers); };
    assign();
    window.speechSynthesis.addEventListener("voiceschanged", assign);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", assign);
  }, [exercise]);

  const stopAudio = useCallback(() => {
    if (audio.current) audio.current.cancel = true;
    audio.current = null;
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setPhase("ready");
  }, []);

  const play = useCallback(() => {
    if (!exercise || phase === "playing") return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      toast.info("This browser cannot speak the recording. Use Chrome, Edge or Safari.");
      return;
    }
    const state = { cancel: false };
    audio.current = state;
    setPhase("playing");
    setPlayedOnce(true);
    setCurrentSeg(0);

    const speakNext = (i: number) => {
      if (state.cancel || i >= exercise.segments.length) {
        if (!state.cancel) setPhase("done");
        return;
      }
      setCurrentSeg(i);
      const seg = exercise.segments[i];
      const u = new SpeechSynthesisUtterance(seg.text);
      const sp = seg.speakerId ? exercise.speakers.find((s) => s.id === seg.speakerId) : undefined;
      if (sp) {
        const v = voicesRef.current.get(sp.accent);
        if (v) u.voice = v;
        u.rate = 0.95;
      }
      const pause = seg.pauseAfterMs ?? 350;
      u.onend = () => setTimeout(() => speakNext(i + 1), pause);
      u.onerror = () => setTimeout(() => speakNext(i + 1), pause);
      window.speechSynthesis.speak(u);
    };
    speakNext(0);
  }, [exercise, phase]);

  const submit = async () => {
    if (!exercise) return;
    setSubmitting(true);
    stopAudio();
    try {
      const res = await fetch(`/api/exams/toefl/listening/bank/${slug}/submit`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          mode: "practice",
          answers,
          timeSpentSec: Math.floor((Date.now() - startedAt.current) / 1000),
        }),
      });
      if (res.status === 401) { toast.info("Create a free account to have your answers checked and tracked."); return; }
      if (!res.ok) { toast.error("Submission failed."); return; }
      setReview(await res.json());
    } finally {
      setSubmitting(false);
    }
  };

  if (!exercise) {
    return (
      <div className="space-y-3 p-4">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-8 w-1/3" />
      </div>
    );
  }

  const speakerName = (id?: string) => (id ? exercise.speakers.find((s) => s.id === id)?.name ?? "" : "");
  const allAnswered = exercise.questions.every((q) => typeof answers[q.no] === "number");

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => { stopAudio(); onExit(); }}>← Library</Button>
        <h2 className="text-lg font-semibold">{exercise.title}</h2>
        <Badge variant="outline">{exercise.taskLabel}</Badge>
        <Badge variant="outline">{exercise.scene}</Badge>
        <Badge variant="outline">Difficulty {exercise.difficulty}/5</Badge>
        <span className="ml-auto text-xs text-slate-500">{exercise.accentLabels.join(" · ")} voices</span>
      </div>

      <Card>
        <CardContent className="space-y-3 pt-6">
          <p className="text-sm text-slate-500">{exercise.intro}</p>
          <p className="text-sm text-slate-500">
            {exercise.speakers.map((s) => `${s.name} (${s.role}, ${s.accent})`).join(" · with ")}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {phase === "ready" || phase === "done" ? (
              <Button onClick={play}>
                {playedOnce ? "Replay recording" : "Play recording"}
              </Button>
            ) : (
              <Button variant="outline" onClick={stopAudio}>Stop</Button>
            )}
            <span className="text-sm text-slate-500">
              {phase === "playing" ? `Speaking… segment ${currentSeg + 1} of ${exercise.segments.length}` : playedOnce ? "Recording finished — answer below." : "Press play when ready."}
            </span>
          </div>
          {exercise.transcriptPolicy === "open-learning" && exercise.transcript && (
            <div className="rounded-lg border bg-slate-50 p-3 dark:bg-slate-900">
              <p className="mb-1 text-xs font-semibold text-slate-500">Learning mode — follow the transcript while you listen</p>
              {exercise.transcript.lines.map((l, i) => (
                <p key={i} className="text-sm"><span className="font-semibold">{l.speaker}:</span> {l.text}</p>
              ))}
            </div>
          )}
          {exercise.transcriptPolicy === "locked-until-submit" && (
            <p className="text-xs text-slate-400">The transcript is hidden until you submit — exactly like the test.</p>
          )}
        </CardContent>
      </Card>

      {!review ? (
        <Card>
          <CardContent className="space-y-5 pt-6">
            {exercise.questions.map((q) => (
              <div key={q.no} className="space-y-2">
                <p className="text-[15px] font-medium text-slate-800 dark:text-slate-200">{q.no}. {q.stem}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setAnswers((a) => ({ ...a, [q.no]: i }))}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-left text-sm transition",
                        answers[q.no] === i
                          ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                          : "border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500",
                      )}
                    >
                      <span className="mr-2 font-semibold">{letter(i)}</span>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <Button onClick={submit} disabled={submitting || !allAnswered}>
              {submitting ? "Checking…" : "Submit answers"}
            </Button>
            {!allAnswered && <p className="text-sm text-slate-500">Answer every question to submit.</p>}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card>
            <CardContent className="space-y-1 pt-6">
              <p className="text-2xl font-bold">{Math.round((review.result.correctItems / review.result.totalItems) * 100)}%</p>
              <p className="text-sm text-slate-500">{review.result.correctItems} of {review.result.totalItems} items correct.</p>
            </CardContent>
          </Card>
          {review.result.items.map((it) => (
            <Card key={it.no} className={it.correct ? "border-emerald-200 dark:border-emerald-900" : "border-rose-200 dark:border-rose-900"}>
              <CardContent className="space-y-2 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={cn("text-sm font-semibold", it.correct ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400")}>
                    {it.no}. {it.correct ? "Correct" : it.errorType}
                  </span>
                  {!it.correct && <span className="text-sm text-slate-500">You: {it.given} · Key: {it.expected}</span>}
                  <Badge variant="outline" className="ml-auto">{it.skill}</Badge>
                </div>
                <p className="text-[15px] leading-7 text-slate-700 dark:text-slate-300">{it.explanation}</p>
                {it.trapNote && <p className="text-sm text-amber-700 dark:text-amber-400">Trap: {it.trapNote}</p>}
                {!it.correct && it.keywords.length > 0 && (
                  <p className="text-sm text-slate-500">Listen for: {it.keywords.join(" · ")}</p>
                )}
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardContent className="space-y-2 pt-6">
              <p className="font-semibold">Transcript — for post-attempt review</p>
              {review.transcript.segments.filter((s) => s.speakerId).map((s, i) => (
                <p key={i} className="text-sm"><span className="font-semibold">{speakerName(s.speakerId)}:</span> {s.text}</p>
              ))}
              <p className="mt-2 text-sm text-slate-500">{review.transcript.note}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
