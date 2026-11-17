"use client";

/**
 * TOEFL Speaking Practice Library — item player (PROMPT 50).
 *
 * Listen and Repeat: the sentence plays through on-device speech synthesis
 * with an accent-matched voice; the repetition window counts down while the
 * learner records; the recording is replayed locally and the learner
 * transcribes what they said (typed, or browser speech recognition). The
 * AUDIO never leaves the browser — only the transcript travels. Submission
 * returns the repetition analysis (word-level accuracy, pacing) plus the
 * revealed reference transcript and analysis hints.
 *
 * Take an Interview: the question card with preparation countdown, the
 * suggested vocabulary and feedback criteria, a guided recording window,
 * transcription, and the four-criterion evaluation — every score an
 * educational estimate — with the optional AI coaching layer and the
 * revealed sample response.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRecorder } from "@/hooks/use-recorder";
import { speak, stopSpeaking, useSpeechRecognition, ttsSupported } from "@/hooks/use-speech";
import type { SafeSpeakingExercise } from "@/lib/exams/toefl-bank/speaking";
import type { RepetitionAnalysis, InterviewEvaluation } from "@/lib/exams/toefl-bank/speaking-evaluate";

type RepeatReview = { analysis: RepetitionAnalysis; review: { transcript: string; analysisHints: string[] } };
type InterviewReview = { evaluation: InterviewEvaluation; review: { sampleResponse: string; analysisNotes: string } };

const ACCENT_LANGS: Record<string, string[]> = {
  "North American": ["en-us", "en-ca", "en_us", "en-us"],
  British: ["en-gb", "en_uk"],
  Australian: ["en-au", "en_au"],
  "New Zealand": ["en-nz", "en_nz"],
};

function pickVoice(accentLabel: string): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return undefined;
  const en = window.speechSynthesis.getVoices().filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const wanted = ACCENT_LANGS[accentLabel] ?? ACCENT_LANGS["North American"];
  return en.find((v) => wanted.some((w) => v.lang.toLowerCase().startsWith(w.slice(0, 5)))) ?? en[0];
}

export function ToeflSpeakingPlayer({ slug, onExit }: { slug: string; onExit: () => void }) {
  const [item, setItem] = useState<SafeSpeakingExercise | null>(null);
  const [review, setReview] = useState<RepeatReview | InterviewReview | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [phase, setPhase] = useState<"ready" | "playing" | "window" | "recorded">("ready");
  const [countdown, setCountdown] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef(Date.now());
  const windowTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const recognition = useSpeechRecognition();
  const recorder = useRecorder(180);

  useEffect(() => {
    let alive = true;
    (async () => {
      const res = await fetch(`/api/exams/toefl/speaking/bank/${slug}`);
      if (!res.ok) { toast.error("Could not load this item."); onExit(); return; }
      const data = await res.json();
      if (!alive) return;
      setItem(data.exercise);
      startedAt.current = Date.now();
    })();
    return () => { alive = false; stopSpeaking(); };
  }, [slug, onExit]);

  // Clean up the window countdown when leaving.
  useEffect(() => () => { if (windowTimer.current) clearInterval(windowTimer.current); }, []);

  const submit = useCallback(async (finalTranscript: string, durationSec: number) => {
    setSubmitting(true);
    try {
      const res = await fetch(`/api/exams/toefl/speaking/bank/${slug}/submit`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ mode: "practice", transcript: finalTranscript, durationSec }),
      });
      if (res.status === 401) { toast.info("Create a free account to have your speaking analysed and tracked."); return; }
      if (!res.ok) { toast.error("Submission failed."); return; }
      const data = await res.json();
      if (item?.taskType === "listen-repeat") {
        setReview({ analysis: data.analysis, review: data.review });
      } else {
        setReview({ evaluation: data.evaluation, review: data.review });
      }
    } finally {
      setSubmitting(false);
    }
  }, [slug, item]);

  if (!item) {
    return (
      <div className="space-y-3 p-4">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-8 w-1/3" />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Listen and Repeat
  // ---------------------------------------------------------------------------
  if (item.taskType === "listen-repeat") {
    const play = () => {
      if (!ttsSupported()) { toast.info("This browser cannot speak the sentence. Use Chrome, Edge or Safari."); return; }
      stopSpeaking();
      const u = new SpeechSynthesisUtterance(item.sentence);
      const v = pickVoice(item.speaker.accent);
      if (v) u.voice = v;
      u.rate = 0.95;
      u.onend = () => { setPhase("window"); startWindow(item.windowSec); };
      setPhase("playing");
      window.speechSynthesis.speak(u);
    };

    const startWindow = (sec: number) => {
      setCountdown(sec);
      setElapsed(0);
      if (windowTimer.current) clearInterval(windowTimer.current);
      const t0 = Date.now();
      windowTimer.current = setInterval(() => {
        const spent = (Date.now() - t0) / 1000;
        setElapsed(Math.round(spent * 10) / 10);
        setCountdown(Math.max(0, Math.ceil(sec - spent)));
        if (spent >= sec + 2) {
          if (windowTimer.current) clearInterval(windowTimer.current);
          setPhase("recorded");
          if (recorder.state === "recording") recorder.stop();
        }
      }, 100);
    };

    return (
      <div className="mx-auto max-w-3xl space-y-4 p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => { stopSpeaking(); onExit(); }}>← Library</Button>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <Badge variant="outline">{item.taskLabel}</Badge>
          <Badge variant="outline">{item.focusLabel}</Badge>
          <Badge variant="outline">d{item.difficulty}/5</Badge>
          <span className="ml-auto text-xs text-slate-500">{item.speaker.name} · {item.accentLabel} voice</span>
        </div>

        {!review ? (
          <>
            <Card>
              <CardContent className="space-y-3 pt-6">
                <p className="text-sm text-slate-500">
                  Listen to the sentence, then say it back <span className="font-semibold">exactly</span> inside the
                  repetition window ({item.windowSec} seconds for {item.wordCount} words). The transcript stays hidden
                  {item.transcriptPolicy === "open-learning" ? " — except in this learning item, where you may read along." : " until you submit."}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {phase === "playing" ? (
                    <Button variant="outline" onClick={() => { stopSpeaking(); setPhase("ready"); }}>Stop audio</Button>
                  ) : (
                    <Button onClick={play} disabled={phase === "window" && recorder.state === "recording"}>
                      {phase === "ready" ? "Play the sentence" : "Replay the sentence"}
                    </Button>
                  )}
                  {phase === "playing" && <span className="text-sm text-slate-500">Speaking…</span>}
                  {phase === "window" && recorder.state !== "recording" && (
                    <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">Repeat now — {countdown}s left</span>
                  )}
                  {recorder.state === "recording" && (
                    <span className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
                      <span className="size-2.5 animate-pulse rounded-full bg-rose-500" aria-hidden /> Recording · {countdown}s left
                    </span>
                  )}
                </div>
                {item.transcriptPolicy === "open-learning" && item.transcript && (
                  <div className="rounded-lg border bg-slate-50 p-3 dark:bg-slate-900">
                    <p className="mb-1 text-xs font-semibold text-slate-500">Learning mode — shadow-read along</p>
                    <p className="text-[15px] font-medium">{item.transcript}</p>
                  </div>
                )}
                {item.transcriptPolicy === "locked-until-submit" && (
                  <p className="text-xs text-slate-400">The transcript is hidden until you submit — repeat from memory, exactly like the test.</p>
                )}
              </CardContent>
            </Card>

            {phase === "window" && recorder.state !== "recording" && (
              <Button className="bg-rose-600 hover:bg-rose-500" onClick={() => void recorder.start()}>Start repeating now</Button>
            )}
            {recorder.state === "recording" && (
              <Button variant="destructive" onClick={() => { recorder.stop(); if (windowTimer.current) clearInterval(windowTimer.current); setPhase("recorded"); }}>
                I finished
              </Button>
            )}

            {phase === "recorded" && (
              <Card>
                <CardContent className="space-y-3 pt-6">
                  <p className="text-sm font-semibold">Replay your take, then write exactly what you said</p>
                  {recorder.audioUrl && <audio controls src={recorder.audioUrl} className="w-full" />}
                  <textarea
                    value={recognition.listening && recognition.transcript ? recognition.transcript : transcript}
                    onChange={(e) => { setTranscript(e.target.value); recognition.setTranscript(""); }}
                    rows={3}
                    placeholder="Type what you said (or use the microphone button to dictate)…"
                    aria-label="What you said"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-6"
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    {recognition.supported && (
                      <Button variant="outline" size="sm" onClick={() => (recognition.listening ? recognition.stop() : recognition.start())}>
                        {recognition.listening ? "Stop dictation" : "Dictate"}
                      </Button>
                    )}
                    <span className="text-xs text-slate-500">Recorded {elapsed}s · window {item.windowSec}s</span>
                    <Button className="ml-auto" disabled={submitting || transcript.trim().length < 2} onClick={() => void submit(transcript.trim(), elapsed)}>
                      {submitting ? "Analysing…" : "Analyse my repetition"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        ) : (
          <RepeatReviewPanel review={review as RepeatReview} />
        )}
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Take an Interview
  // ---------------------------------------------------------------------------
  const prepLeft = item.prepSec - Math.floor((Date.now() - startedAt.current) / 1000);
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => { stopSpeaking(); onExit(); }}>← Library</Button>
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <Badge variant="outline">{item.taskLabel}</Badge>
        <Badge variant="outline">{item.topic}</Badge>
        <Badge variant="outline">d{item.difficulty}/5</Badge>
      </div>

      {!review ? (
        <>
          <Card>
            <CardContent className="space-y-3 pt-6">
              <p className="text-lg font-semibold leading-8">{item.question}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <Badge variant="outline">Prep {item.prepSec}s</Badge>
                <Badge variant="outline">Answer {item.answerSec}s</Badge>
                <Button variant="ghost" size="sm" onClick={() => speak(item.question, { rate: 0.97 })}>Hear the question</Button>
              </div>
              <div className="rounded-lg border bg-slate-50 p-3 dark:bg-slate-900">
                <p className="mb-1 text-xs font-semibold text-slate-500">Words you could use</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.vocabulary.map((v, i) => (
                    <Badge key={i} variant="outline" className="font-normal">{v.word} — {v.gloss}</Badge>
                  ))}
                </div>
              </div>
              <details className="rounded-lg border p-3 text-sm">
                <summary className="cursor-pointer font-medium">How your answer is assessed</summary>
                <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                  {item.feedbackCriteria.map((c) => <li key={c.key}><span className="font-medium">{c.label}:</span> {c.description}</li>)}
                </ul>
              </details>
              {item.followUp && <p className="text-xs text-slate-400">Be ready for a follow-up: {item.followUp}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 pt-6">
              {recorder.state === "idle" || recorder.state === "recorded" ? (
                <Button className="bg-rose-600 hover:bg-rose-500" onClick={() => { recorder.reset(); void recorder.start(); }}>
                  {recorder.state === "recorded" ? "Record again" : `Record my answer (~${item.answerSec}s)`}
                </Button>
              ) : recorder.state === "recording" ? (
                <Button variant="destructive" onClick={recorder.stop}>Finish my answer</Button>
              ) : null}
              {recorder.state === "recording" && (
                <p className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
                  <span className="size-2.5 animate-pulse rounded-full bg-rose-500" aria-hidden /> Recording · {(recorder.durationMs / 1000).toFixed(0)}s · guidance {item.answerSec}s
                </p>
              )}
              {recorder.state === "recorded" && (
                <>
                  <p className="text-sm font-semibold">Replay your answer, then write what you said</p>
                  {recorder.audioUrl && <audio controls src={recorder.audioUrl} className="w-full" />}
                  <textarea
                    value={recognition.listening && recognition.transcript ? recognition.transcript : transcript}
                    onChange={(e) => { setTranscript(e.target.value); recognition.setTranscript(""); }}
                    rows={6}
                    placeholder="Type what you said (or use the microphone button to dictate)…"
                    aria-label="What you said"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-6"
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    {recognition.supported && (
                      <Button variant="outline" size="sm" onClick={() => (recognition.listening ? recognition.stop() : recognition.start())}>
                        {recognition.listening ? "Stop dictation" : "Dictate"}
                      </Button>
                    )}
                    <span className="text-xs text-slate-500">Recorded {(recorder.durationMs / 1000).toFixed(0)}s · guidance {item.answerSec}s</span>
                    <Button className="ml-auto" disabled={submitting || transcript.trim().length < 5}
                      onClick={() => void submit(transcript.trim(), Math.round(recorder.durationMs / 1000))}>
                      {submitting ? "Evaluating…" : "Evaluate my answer"}
                    </Button>
                  </div>
                </>
              )}
              {recorder.state === "unsupported" && (
                <p className="text-sm text-slate-500">This browser cannot record — you can still practise out loud and type what you said.</p>
              )}
              {prepLeft > 0 && recorder.state === "idle" && (
                <p className="text-xs text-slate-400">Preparation time: {item.prepSec}s is the guidance — start when you are ready.</p>
              )}
            </CardContent>
          </Card>
        </>
      ) : (
        <InterviewReviewPanel review={review as InterviewReview} />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Review panels
// ---------------------------------------------------------------------------

function RepeatReviewPanel({ review }: { review: RepeatReview }) {
  const a = review.analysis;
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="space-y-2 pt-6">
          <div className="flex items-baseline justify-between">
            <p className="text-3xl font-bold">{Math.round(a.accuracy * 100)}%</p>
            <Badge className={cn(a.verdict === "test-ready" ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
              : a.verdict === "close" ? "bg-sky-500/15 text-sky-700 dark:text-sky-400"
                : a.verdict === "developing" ? "bg-amber-500/15 text-amber-700 dark:text-amber-400" : "bg-slate-500/15 text-slate-600 dark:text-slate-400")}>
              {a.verdict}
            </Badge>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">{a.verdictNote}</p>
          <p className="text-xs text-slate-400">
            {a.matched}/{a.referenceWords} words in order · longest run {a.longestRun} · spoke {a.spokenWords} words in
            {" "}{a.durationSec}s ({a.withinWindow ? "inside" : "outside"} the {a.windowSec}s window)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6">
          <p className="font-semibold">Reference transcript — now revealed</p>
          <p className="rounded-lg bg-slate-100 p-3 text-[15px] font-medium leading-7 dark:bg-slate-800">{review.review.transcript}</p>
          {a.problemWords.length > 0 && (
            <p className="text-sm text-amber-700 dark:text-amber-400">Watch these words: {a.problemWords.map((p) => p.word).join(" · ")}</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6">
          <p className="font-semibold">Repetition analysis hints</p>
          <ul className="ml-4 list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {review.review.analysisHints.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function InterviewReviewPanel({ review }: { review: InterviewReview }) {
  const ev = review.evaluation;
  return (
    <div className="space-y-4">
      {ev.status === "insufficient" ? (
        <Card><CardContent className="space-y-2 pt-6">
          <p className="font-semibold">Too short to evaluate</p>
          {ev.improvements.map((im, i) => <p key={i} className="text-sm text-slate-600 dark:text-slate-400">{im}</p>)}
        </CardContent></Card>
      ) : (
        <>
          <Card>
            <CardContent className="space-y-2 pt-6">
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">{ev.overall.toFixed(1)}<span className="text-base font-normal text-slate-400">/6</span></p>
                <p className="text-xs text-slate-500">{ev.overallLabel}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {ev.criteria.map((c) => (
                  <div key={c.key} className="rounded-lg border p-3">
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="text-sm text-slate-500">{c.score.toFixed(1)}/6</p>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-sky-500" style={{ width: `${(c.score / 6) * 100}%` }} />
                    </div>
                    <ul className="mt-2 space-y-1">
                      {c.feedback.map((f, i) => (
                        <li key={i} className={cn("text-xs leading-5",
                          f.kind === "strength" ? "text-emerald-700 dark:text-emerald-400" : f.kind === "issue" ? "text-amber-700 dark:text-amber-400" : "text-slate-500")}>
                          {f.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Measured: {ev.metrics.wordCount} words · {ev.metrics.wpm} wpm · {ev.metrics.fillers} fillers · {ev.metrics.sentences} sentences ·
                {" "}{ev.metrics.vocabHits}/{ev.metrics.vocabTotal} suggested words used
              </p>
              {ev.disclaimers.map((d, i) => <p key={i} className="text-xs text-slate-400">{d}</p>)}
            </CardContent>
          </Card>

          {ev.aiCommentary && (
            <Card className="border-sky-200 bg-sky-50/40 dark:border-sky-900 dark:bg-sky-950/20">
              <CardContent className="space-y-3 pt-6">
                <p className="text-sm font-semibold text-sky-800 dark:text-sky-300">AI coaching layer</p>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{ev.aiCommentary.summary}</p>
                {ev.aiCommentary.errors.length > 0 && (
                  <div><p className="text-xs font-semibold text-rose-700 dark:text-rose-400">Errors spotted</p>
                    {ev.aiCommentary.errors.map((e, i) => (
                      <p key={i} className="text-sm text-slate-600 dark:text-slate-400">“{e.original}” → <span className="font-medium text-slate-800 dark:text-slate-200">{e.correction}</span> — {e.note}</p>
                    ))}</div>
                )}
                {ev.aiCommentary.improvedExample && (
                  <div>
                    <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">A stronger version of your answer</p>
                    <p className="mt-1 whitespace-pre-wrap rounded-lg border bg-white p-3 text-sm leading-7 dark:bg-slate-900">{ev.aiCommentary.improvedExample}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </>
      )}

      <Card>
        <CardContent className="space-y-2 pt-6">
          <p className="font-semibold">Sample response — now revealed</p>
          <p className="rounded-lg bg-slate-100 p-3 text-sm leading-7 dark:bg-slate-800">{review.review.sampleResponse}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{review.review.analysisNotes}</p>
        </CardContent>
      </Card>
    </div>
  );
}
