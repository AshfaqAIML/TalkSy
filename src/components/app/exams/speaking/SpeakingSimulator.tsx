"use client";

/**
 * IELTS Speaking Masterclass — the Speaking Simulator (PROMPT 47, Part 6).
 *
 * A realistic three-part speaking simulation, and the same engine reused
 * for single-item practice from the library:
 *
 *   Question presentation  — examiner-style scripts and questions, spoken
 *                            through browser speech synthesis (text always
 *                            shown alongside; the voice is optional)
 *   Preparation timer      — Part 2's official one-minute countdown before
 *                            the recording starts
 *   Recording              — the learner's microphone via the shared
 *                            use-recorder hook (explicit start only,
 *                            permission errors handled, never uploaded —
 *                            the audio stays in the browser)
 *   Audio replay           — the recording plays back locally before
 *                            transcription
 *   Transcription          — the learner types what they said (or uses the
 *                            browser's speech recognition where available);
 *                            the transcript is editable — it is what the
 *                            engine reads
 *   Response history       — every attempt versioned per item
 *   Feedback               — the four-criterion report (Part 7) with
 *                            sentence corrections, vocabulary suggestions,
 *                            fluency feedback, pronunciation replay checks
 *                            and improved response examples — all clearly
 *                            labelled educational estimates
 *
 * The three-part simulation chains Part 1 (interview round), Part 2 (cue
 * card with the one-minute preparation and two-minute window) and Part 3
 * (the escalating discussion), each submitted and evaluated separately,
 * then summarised.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { examApi } from "@/lib/client/exam-api";
import { useRecorder } from "@/hooks/use-recorder";
import { useSpeech, useSpeechRecognition } from "@/hooks/use-speech";
import type { SpeakingEvaluation } from "@/lib/exams/speaking-bank/evaluate";
import type { SafeSpeakingItem, SpeakingSubmissionResult } from "@/lib/exams/speaking-bank/service";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import {
  AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, CircleStop, Info, Mic, MicOff, Pause,
  Play, RotateCcw, SkipForward, Timer as TimerIcon, Volume2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Shared small pieces
// ---------------------------------------------------------------------------

function formatClock(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.max(0, sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function ExaminerLine({ text, onSpeak }: { text: string; onSpeak?: () => void }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-700/60 bg-slate-800/40 p-3.5">
      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-teal-500/15 text-sm font-bold text-teal-300">E</div>
      <p className="text-sm leading-relaxed text-slate-200">{text}</p>
      {onSpeak ? (
        <Button variant="ghost" size="sm" className="ml-auto flex-none text-slate-400 hover:text-teal-200" onClick={onSpeak} aria-label="Listen to the examiner">
          <Volume2 className="h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The recorder panel (recording + replay) for one spoken turn
// ---------------------------------------------------------------------------

function TurnRecorder({
  maxSeconds,
  minSeconds,
  label,
  onDone,
}: {
  maxSeconds: number;
  minSeconds?: number;
  label: string;
  onDone: (durationSec: number) => void;
}) {
  const recorder = useRecorder(maxSeconds);
  const level = recorder.level;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (recorder.state === "unsupported") {
    return (
      <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
        <p className="flex items-center gap-2 font-semibold"><MicOff className="h-4 w-4" /> This browser cannot record audio</p>
        <p className="mt-1 text-xs leading-relaxed text-amber-200/80">
          You can still do the whole exercise by speaking out loud and typing what you said in the transcription step —
          the evaluation reads the transcript.
        </p>
        <Button size="sm" className="mt-3" variant="outline" onClick={() => onDone(0)}>Continue without a recording <ChevronRight className="ml-1 h-3.5 w-3.5" /></Button>
      </div>
    );
  }

  const durationSec = Math.round(recorder.durationMs / 1000);
  const tooShort = minSeconds !== undefined && recorder.state === "recorded" && durationSec < minSeconds;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        {recorder.state === "idle" ? (
          <Button className="bg-teal-600 hover:bg-teal-500" onClick={() => void recorder.start()}>
            <Mic className="mr-2 h-4 w-4" /> Start recording
          </Button>
        ) : null}
        {recorder.state === "recording" ? (
          <>
            <Button variant="destructive" onClick={recorder.stop}>
              <CircleStop className="mr-2 h-4 w-4" /> Stop ({formatClock(durationSec)})
            </Button>
            {recorder.canPause ? (
              <Button variant="outline" onClick={recorder.pause}><Pause className="mr-1 h-4 w-4" /> Pause</Button>
            ) : null}
          </>
        ) : null}
        {recorder.state === "paused" ? (
          <>
            <Button className="bg-teal-600 hover:bg-teal-500" onClick={recorder.resume}><Play className="mr-2 h-4 w-4" /> Resume</Button>
            <Button variant="destructive" onClick={recorder.stop}><CircleStop className="mr-1 h-4 w-4" /> Stop</Button>
          </>
        ) : null}
        {recorder.state === "recording" ? (
          <div className="flex h-8 w-28 items-end gap-0.5" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => {
              const wave = Math.abs(Math.sin(i * 0.9 + level * 8)) * level;
              return <div key={i} className="w-1.5 rounded-sm bg-teal-400" style={{ height: `${Math.max(3, wave * 28 + 3)}px` }} />;
            })}
          </div>
        ) : null}
      </div>

      {recorder.error ? <p className="text-xs text-rose-300">{recorder.error.message}</p> : null}
      {recorder.state === "recording" ? (
        <p className="text-xs text-slate-500">{label} — the recording stays in your browser; nothing is uploaded.</p>
      ) : null}

      {recorder.state === "recorded" ? (
        <div className="space-y-3 rounded-lg border border-slate-700/60 bg-slate-900/70 p-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="border-teal-500/40 text-teal-300">{formatClock(durationSec)} recorded</Badge>
            {recorder.audioUrl ? (
              <Button variant="outline" size="sm" onClick={() => audioRef.current?.play()}>
                <Play className="mr-1 h-3.5 w-3.5" /> Replay
              </Button>
            ) : null}
            <Button variant="ghost" size="sm" onClick={recorder.reset}><RotateCcw className="mr-1 h-3.5 w-3.5" /> Record again</Button>
          </div>
          {recorder.audioUrl ? <audio ref={audioRef} src={recorder.audioUrl} controls className="w-full" /> : null}
          {tooShort ? (
            <p className="flex items-start gap-2 text-xs leading-relaxed text-amber-300">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-none" />
              Under the {formatClock(minSeconds ?? 0)} floor — in the real test the examiner keeps listening; keep going or record again.
            </p>
          ) : null}
          <Button
            className="bg-teal-600 hover:bg-teal-500"
            onClick={() => onDone(durationSec)}
            disabled={!recorder.audioUrl && durationSec === 0}
          >
            Continue to transcription <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Transcription step
// ---------------------------------------------------------------------------

function TranscriptionStep({
  prompts,
  durationSec,
  onSubmit,
  submitting,
  submitError,
  loggedIn,
  onLogin,
}: {
  prompts: string[];
  durationSec: number;
  onSubmit: (answers: string[]) => void;
  submitting: boolean;
  submitError: string | null;
  loggedIn: boolean;
  onLogin: () => void;
}) {
  const [answers, setAnswers] = useState<string[]>(() => prompts.map(() => ""));
  const recognition = useSpeechRecognition();
  const [activeField, setActiveField] = useState(0);

  const wordCount = answers.reduce(
    (a, t) => a + (t.trim().match(/[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g) ?? []).length,
    0,
  );

  return (
    <div className="space-y-4">
      <Card className="border-teal-500/30 bg-slate-900/60">
        <CardContent className="p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-white"><Info className="h-4 w-4 text-teal-300" /> Transcribe what you said</p>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
            Type (or paste) what you actually said for each prompt — this transcript is what the evaluation engine reads.
            {recognition.supported ? " Your browser can dictate: click the microphone on a field and speak again." : " Your browser has no built-in dictation, so typing is the way."}
            {" "}You spoke for {formatClock(durationSec)}.
          </p>
        </CardContent>
      </Card>

      {prompts.map((prompt, i) => (
        <div key={i} className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-slate-300">{prompts.length > 1 ? `Answer ${i + 1}` : "Your answer"}</p>
            {recognition.supported ? (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-[11px] text-slate-400"
                onClick={() => {
                  setActiveField(i);
                  if (recognition.listening) recognition.stop();
                  else recognition.start();
                }}
              >
                <Mic className={`mr-1 h-3.5 w-3.5 ${recognition.listening && activeField === i ? "text-rose-400" : ""}`} />
                {recognition.listening && activeField === i ? "Listening… (speak now)" : "Dictate"}
              </Button>
            ) : null}
          </div>
          {prompts.length > 1 ? <p className="text-[11px] leading-snug text-slate-500">{prompt}</p> : null}
          <textarea
            value={recognition.listening && activeField === i && recognition.transcript ? recognition.transcript : answers[i]}
            onChange={(e) => {
              const next = [...answers];
              next[i] = e.target.value;
              setAnswers(next);
            }}
            onBlur={() => {
              if (recognition.transcript && activeField === i) {
                const next = [...answers];
                next[i] = (next[i] ? `${next[i]} ` : "") + recognition.transcript;
                setAnswers(next);
                recognition.setTranscript("");
              }
            }}
            rows={prompts.length > 1 ? 4 : 9}
            placeholder="Type what you said…"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-teal-500/60 focus:outline-none"
          />
        </div>
      ))}

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-700/60 bg-slate-900/70 p-3.5">
        <p className="text-xs text-slate-500">{wordCount} words transcribed</p>
        {loggedIn ? (
          <Button
            className="bg-teal-600 hover:bg-teal-500"
            disabled={submitting || answers.some((a) => a.trim().length === 0)}
            onClick={() => onSubmit(answers)}
          >
            {submitting ? "Evaluating…" : "Submit for evaluation"} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={onLogin}>Log in to get feedback <ArrowRight className="ml-1 h-4 w-4" /></Button>
        )}
      </div>
      {submitError ? <p className="text-xs text-rose-300">{submitError}</p> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The feedback report (Part 7) — all extras, honestly labelled
// ---------------------------------------------------------------------------

export function SpeakingFeedbackReport({ result }: { result: SpeakingSubmissionResult }) {
  const evaluation: SpeakingEvaluation = result.evaluation;
  const [tab, setTab] = useState<"report" | "review" | "history">("report");

  if (evaluation.status === "insufficient") {
    return (
      <Card className="border-amber-500/40 bg-slate-900/60">
        <CardContent className="p-6">
          <p className="flex items-center gap-2 text-sm font-bold text-amber-300"><AlertTriangle className="h-4 w-4" /> {evaluation.overallLabel}</p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-400">
            {evaluation.improvements.map((im, i) => <li key={i}>{im}</li>)}
          </ul>
        </CardContent>
      </Card>
    );
  }

  const extras = evaluation.extras;

  return (
    <div className="space-y-4">
      <Card className="border-teal-500/30 bg-gradient-to-br from-slate-900/80 to-slate-900/40">
        <CardContent className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-300">Criterion-based feedback</p>
              <p className="mt-1 text-2xl font-bold text-white">{evaluation.overallLabel}</p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <p>{evaluation.metrics.wordCount} words · {formatClock(evaluation.metrics.durationSec)} · {Math.round(evaluation.metrics.wpm)} wpm</p>
              <p>Attempt v{result.attempt.version}</p>
            </div>
          </div>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {evaluation.criteria.map((c) => (
              <div key={c.key} className="rounded-lg border border-slate-700/60 bg-slate-900/60 p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold text-white">{c.name}</p>
                  <p className="text-sm font-bold tabular-nums text-teal-300">{c.score.toFixed(1)}<span className="text-[10px] text-slate-500">/9</span></p>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400" style={{ width: `${(c.score / 9) * 100}%` }} />
                </div>
                <ul className="mt-2 space-y-1.5">
                  {c.feedback.slice(0, 4).map((f, i) => (
                    <li key={i} className={`text-[11px] leading-relaxed ${f.kind === "strength" ? "text-emerald-300/90" : f.kind === "issue" ? "text-amber-300/90" : "text-slate-400"}`}>
                      {f.kind === "strength" ? "✓ " : f.kind === "issue" ? "! " : "· "}{f.text}
                    </li>
                  ))}
                </ul>
                {c.evidence[0] ? (
                  <blockquote className="mt-2 border-l-2 border-slate-600 pl-2.5 text-[11px] italic leading-relaxed text-slate-400">
                    “{c.evidence[0].quote}” <span className="not-italic text-slate-600">— {c.evidence[0].note}</span>
                  </blockquote>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-600">
            {evaluation.disclaimers.join(" · ")}
          </p>
        </CardContent>
      </Card>

      <div role="tablist" aria-label="Feedback detail" className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5">
        {([["report", "Detailed feedback"], ["review", "Model & teaching"], ["history", "History"]] as const).map(([id, label]) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${tab === id ? "bg-teal-500/15 text-teal-200 ring-1 ring-teal-500/40" : "text-slate-400 hover:text-slate-200"}`}>
            {label}
          </button>
        ))}
      </div>

      {tab === "report" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {extras.fluencyFeedback.length > 0 ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-4">
                <h4 className="text-xs font-bold text-white">Fluency feedback</h4>
                <ul className="mt-2 space-y-1.5 text-[11px] leading-relaxed text-slate-400">
                  {extras.fluencyFeedback.map((f, i) => <li key={i}>· {f}</li>)}
                </ul>
              </CardContent>
            </Card>
          ) : null}
          {extras.sentenceCorrections.length > 0 ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-4">
                <h4 className="text-xs font-bold text-white">Sentence corrections</h4>
                <ul className="mt-2 space-y-2">
                  {extras.sentenceCorrections.map((c, i) => (
                    <li key={i} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-2.5 text-[11px] leading-relaxed">
                      <p className="text-rose-300/90">✗ {c.wrong}</p>
                      <p className="mt-1 text-emerald-300/90">✓ {c.right}</p>
                      <p className="mt-1 text-slate-500">{c.reason}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}
          {extras.vocabularySuggestions.length > 0 ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-4">
                <h4 className="text-xs font-bold text-white">Vocabulary suggestions</h4>
                <ul className="mt-2 space-y-1.5">
                  {extras.vocabularySuggestions.map((v, i) => (
                    <li key={i} className="text-[11px] leading-relaxed text-slate-400">
                      Instead of {v.insteadOf} → <span className="font-semibold text-teal-300">{v.use}</span> <span className="text-slate-600">— {v.why}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}
          {extras.pronunciationObservations.length > 0 ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-4">
                <h4 className="text-xs font-bold text-white">Pronunciation replay checks</h4>
                <p className="mt-1 text-[10px] text-slate-600">The engine cannot hear your audio — replay your recording and check these words yourself.</p>
                <ul className="mt-2 space-y-1.5">
                  {extras.pronunciationObservations.map((o, i) => (
                    <li key={i} className="text-[11px] leading-relaxed text-slate-400">
                      <span className="font-mono font-semibold text-teal-300">{o.riskWord}</span> — {o.checkThis}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}
          {extras.improvedResponses.length > 0 ? (
            <Card className="border-slate-700/70 bg-slate-900/60 md:col-span-2">
              <CardContent className="p-4">
                <h4 className="text-xs font-bold text-white">Improved response examples</h4>
                <ul className="mt-2 space-y-2.5">
                  {extras.improvedResponses.map((r, i) => (
                    <li key={i} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 text-[11px] leading-relaxed">
                      <p className="text-slate-500">Your answer: {r.original}</p>
                      <p className="mt-1.5 text-emerald-300/90">Improved: {r.improved}</p>
                      <p className="mt-1 text-slate-600">{r.note}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}
        </div>
      ) : null}

      {tab === "review" ? <ReviewPanel result={result} /> : null}

      {tab === "history" ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4">
            <h4 className="text-xs font-bold text-white">Your attempts on this item</h4>
            <ul className="mt-2 space-y-1.5">
              {result.history.map((a) => (
                <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-[11px]">
                  <span className="text-slate-400">v{a.version} · {new Date(a.createdAt).toLocaleDateString()}</span>
                  <span className="text-slate-500">{a.wordCount} words · {formatClock(a.durationSec)}</span>
                  <span className="font-bold tabular-nums text-teal-300">{a.overall > 0 ? `Estimated band ${a.overall.toFixed(1)}` : "insufficient"}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

function ReviewPanel({ result }: { result: SpeakingSubmissionResult }) {
  const review = result.review;
  return (
    <div className="space-y-3">
      <Card className="border-slate-700/70 bg-slate-900/60">
        <CardContent className="p-4">
          <h4 className="text-xs font-bold text-white">Requirement coverage</h4>
          <ul className="mt-2 space-y-1.5">
            {review.requirements.map((r, i) => (
              <li key={i} className={`flex items-start gap-2 text-[11px] leading-relaxed ${r.met ? "text-slate-400" : "text-amber-300/90"}`}>
                {r.met ? <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-emerald-400" /> : <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-none" />}
                <span>{r.met ? r.description : `${r.description} — not visibly covered`}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {review.weakImproved && review.weakImproved.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4">
            <h4 className="text-xs font-bold text-white">Weak → improved → model (per question)</h4>
            <p className="mt-1 text-[10px] text-slate-600">Borrow the shape, never the words — examiners hear memorised scripts instantly.</p>
            <div className="mt-2 space-y-3">
              {review.weakImproved.map((w, i) => (
                <div key={i} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 text-[11px] leading-relaxed">
                  <p className="text-rose-300/80">Weak: {w.weak}</p>
                  <p className="mt-1 text-amber-300/90">Improved: {w.improved}</p>
                  <p className="mt-1 text-emerald-300/90">Model: {w.modelAnswer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {review.sampleResponse ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4">
            <h4 className="text-xs font-bold text-white">The bank&apos;s sample response</h4>
            <p className="mt-1 text-[10px] text-slate-600">{review.sampleResponse.bandEstimate}</p>
            <p className="mt-2 whitespace-pre-wrap text-[11px] leading-relaxed text-slate-300">{review.sampleResponse.transcript}</p>
            {review.responseAnalysis && review.responseAnalysis.length > 0 ? (
              <ul className="mt-3 space-y-1.5">
                {review.responseAnalysis.map((a, i) => (
                  <li key={i} className="text-[11px] leading-relaxed text-slate-400"><span className="font-semibold text-teal-300">{a.aspect}:</span> {a.note}</li>
                ))}
              </ul>
            ) : null}
          </CardContent>
        </Card>
      ) : null}

      {review.planningNotes && review.planningNotes.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4">
            <h4 className="text-xs font-bold text-white">The one-minute note, demonstrated</h4>
            <ul className="mt-2 space-y-2">
              {review.planningNotes.map((n, i) => (
                <li key={i} className="text-[11px] leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-200">{n.heading}:</span> {n.notes.join(" · ")}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {review.perQuestion && review.perQuestion.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4">
            <h4 className="text-xs font-bold text-white">Per-question models</h4>
            <div className="mt-2 space-y-3">
              {review.perQuestion.map((q, i) => (
                <div key={i} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 text-[11px] leading-relaxed">
                  <p className="font-semibold text-slate-200">{q.question}</p>
                  {q.level ? <Badge variant="outline" className="mt-1 border-slate-600 text-[9px] text-slate-400">{q.level}</Badge> : null}
                  <p className="mt-1.5 text-emerald-300/90">{q.modelAnswer}</p>
                  <p className="mt-1 text-slate-500">{q.analysis}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {review.vocabulary.length > 0 ? (
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-4">
            <h4 className="text-xs font-bold text-white">Topic vocabulary</h4>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {review.vocabulary.map((v, i) => (
                <li key={i} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-2.5 text-[11px] leading-relaxed">
                  <span className="font-semibold text-teal-300">{v.word}</span>
                  {v.partOfSpeech ? <span className="text-slate-600"> ({v.partOfSpeech})</span> : null}
                  {v.meaning ? <p className="mt-0.5 text-slate-400">{v.meaning}</p> : null}
                  {v.example ? <p className="mt-0.5 italic text-slate-500">“{v.example}”</p> : null}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// A single item run (practice mode) — the heart reused by the simulation
// ---------------------------------------------------------------------------

type RunPhase = "present" | "transcribe" | "done";

export function SpeakingItemRun({
  item,
  mode,
  onFinished,
  navigate,
}: {
  item: SafeSpeakingItem;
  mode: "simulation" | "practice";
  onFinished?: (result: SpeakingSubmissionResult | null) => void;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const speech = useSpeech();
  const [phase, setPhase] = useState<RunPhase>("present");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [durationSec, setDurationSec] = useState(0);
  const [result, setResult] = useState<SpeakingSubmissionResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [prepLeft, setPrepLeft] = useState<number | null>(null);

  // Part 2 preparation countdown.
  useEffect(() => {
    if (prepLeft === null || prepLeft <= 0) return;
    const t = setTimeout(() => setPrepLeft((s) => (s !== null ? s - 1 : null)), 1000);
    return () => clearTimeout(t);
  }, [prepLeft]);

  const submit = useCallback(
    async (answers: string[]) => {
      setSubmitting(true);
      setSubmitError(null);
      const res = await examApi.speakingSubmit(item.slug, { mode, answers, durationSec });
      setSubmitting(false);
      if (res.ok) {
        setResult(res.data);
        setPhase("done");
        onFinished?.(res.data);
      } else {
        setSubmitError(res.error);
      }
    },
    [item.slug, mode, durationSec, onFinished],
  );

  const prompts = useMemo(
    () => (item.questions ? item.questions.map((q) => q.question) : [item.card?.task ?? ""]),
    [item],
  );

  // ---------------------------------------------------------------- presenting
  if (phase === "present") {
    if (item.card) {
      // Part 2 — the cue card with the official one-minute preparation.
      const card = item.card;
      return (
        <div className="space-y-4">
          <ExaminerLine
            text={`Now, I'm going to give you a topic. You'll have one minute to prepare, and then you'll speak for one to two minutes. ${card.task}`}
            onSpeak={() => speech.play(`Now I'm going to give you a topic. You'll have one minute to prepare, and then you'll speak for one to two minutes. ${card.task}`)}
          />
          <Card className="border-teal-500/40 bg-slate-900/70">
            <CardContent className="p-5">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">{card.situation}</p>
              <h3 className="mt-2 text-base font-bold leading-snug text-white">{card.task}</h3>
              <p className="mt-3 text-xs font-semibold text-teal-300">You should say:</p>
              <ul className="mt-1.5 space-y-1">
                {card.bullets.map((b, i) => <li key={i} className="text-sm text-slate-300">· {b}</li>)}
              </ul>
              <p className="mt-3 text-sm italic text-slate-300">…{card.extension}</p>
              {prepLeft === null ? (
                <Button className="mt-5 bg-teal-600 hover:bg-teal-500" onClick={() => setPrepLeft(card.prepSec)}>
                  <TimerIcon className="mr-2 h-4 w-4" /> Start my one-minute preparation
                </Button>
              ) : (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-teal-500/50 text-xl font-bold tabular-nums text-teal-300">
                    {prepLeft}
                  </div>
                  <div className="text-xs text-slate-400">
                    <p className="font-semibold text-slate-200">Preparing — make fragment notes, not sentences.</p>
                    <p className="mt-1 text-slate-500">When the clock reaches zero, record your talk.</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setPrepLeft(0)}>
                    <SkipForward className="mr-1 h-3.5 w-3.5" /> Ready now
                  </Button>
                </div>
              )}
              {prepLeft !== null && prepLeft <= 0 ? (
                <div className="mt-4 space-y-3 border-t border-slate-700/60 pt-4">
                  <p className="text-sm font-semibold text-white">Your turn — speak for one to two minutes.</p>
                  <TurnRecorder
                    maxSeconds={card.speakMaxSec}
                    minSeconds={card.speakMinSec}
                    label={`Your Part 2 talk on “${card.task}”`}
                    onDone={(sec) => { setDurationSec(sec); setPhase("transcribe"); }}
                  />
                </div>
              ) : null}
            </CardContent>
          </Card>
          <p className="text-[11px] text-slate-600">Nothing you record is uploaded — the audio stays in this browser and only your typed transcript is submitted.</p>
        </div>
      );
    }

    // Part 1 / Part 3 — the question stepper.
    const questions = item.questions ?? [];
    const q = questions[questionIndex];
    return (
      <div className="space-y-4">
        {questionIndex === 0 && item.framing ? (
          <ExaminerLine
            text={item.part === 1 ? `First, I'd like to ask you some questions about yourself. ${item.framing}` : `We've been talking about your topic. ${item.framing}`}
            onSpeak={() => speech.play(item.part === 1 ? `First, I'd like to ask you some questions about yourself. ${item.framing}` : `We've been talking about your topic. ${item.framing}`)}
          />
        ) : null}
        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="p-5">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="outline" className="border-teal-500/40 text-[10px] text-teal-300">
                Part {item.part} · Question {questionIndex + 1} of {questions.length}
              </Badge>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-200" onClick={() => speech.play(q?.question ?? "")} aria-label="Listen to the question">
                <Volume2 className="mr-1 h-4 w-4" /> Listen
              </Button>
            </div>
            <p className="mt-3 text-lg font-semibold leading-snug text-white">{q?.question}</p>
            <div className="mt-5">
              <TurnRecorder
                maxSeconds={120}
                label={`Your answer to “${q?.question ?? ""}”`}
                onDone={(sec) => {
                  setDurationSec((prev) => prev + sec);
                  if (questionIndex < questions.length - 1) setQuestionIndex(questionIndex + 1);
                  else setPhase("transcribe");
                }}
              />
            </div>
          </CardContent>
        </Card>
        <p className="text-[11px] text-slate-600">Answer, stop, move on — two to four sentences per question. Nothing is uploaded; the audio stays in this browser.</p>
      </div>
    );
  }

  // ------------------------------------------------------------- transcription
  if (phase === "transcribe") {
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-white">
          {item.card ? "Transcribe your two-minute talk" : `Transcribe your ${prompts.length} answer${prompts.length === 1 ? "" : "s"}`}
        </h3>
        <TranscriptionStep
          prompts={item.card ? [item.card.task] : prompts}
          durationSec={durationSec}
          onSubmit={(answers) => void submit(answers)}
          submitting={submitting}
          submitError={submitError}
          loggedIn={Boolean(user)}
          onLogin={() => navigate({ name: "login" })}
        />
      </div>
    );
  }

  // ---------------------------------------------------------------------- done
  if (result) {
    return (
      <div className="space-y-4">
        <SpeakingFeedbackReport result={result} />
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setPhase("present");
              setQuestionIndex(0);
              setDurationSec(0);
              setResult(null);
              setPrepLeft(null);
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Try this item again
          </Button>
          {onFinished ? (
            <Button className="bg-teal-600 hover:bg-teal-500" onClick={() => onFinished(null)}>
              Continue <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
  return null;
}

// ---------------------------------------------------------------------------
// The full three-part simulation (Part 6: realistic examiner interaction)
// ---------------------------------------------------------------------------

type SimPhase = "intro" | "part1" | "part2" | "part3" | "summary";

export function SpeakingSimulator({
  navigate,
  goPractice,
}: {
  navigate: (route: AppRoute) => void;
  goPractice: (slug: string) => void;
}) {
  const [difficulty, setDifficulty] = useState(3);
  const [bundle, setBundle] = useState<{ part1: SafeSpeakingItem; part2: SafeSpeakingItem; part3: SafeSpeakingItem } | null>(null);
  const [examiner, setExaminer] = useState<Record<string, string> | null>(null);
  const [phase, setPhase] = useState<SimPhase>("intro");
  const [scores, setScores] = useState<{ part: number; overall: number }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const speech = useSpeech();

  useEffect(() => {
    let cancelled = false;
    examApi.speakingSimulation(difficulty)
      .then((res) => {
        if (cancelled) return;
        if (res.ok) {
          setBundle(res.data.bundle);
          setExaminer(res.data.examiner);
          setError(null);
        } else setError(res.error);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message || "Could not load the simulation.");
      });
    return () => {
      cancelled = true;
    };
  }, [difficulty]);

  if (error) return <p className="text-sm text-rose-300">{error}</p>;
  if (!bundle || !examiner) return <p className="text-sm text-slate-400">Assembling your simulation…</p>;

  const onPartFinished = (part: number) => (result: SpeakingSubmissionResult | null) => {
    if (result) {
      setScores((prev) => [...prev.filter((s) => s.part !== part), { part, overall: result.evaluation.overall }]);
    } else if (part === 1) setPhase("part2");
    else if (part === 2) setPhase("part3");
    else setPhase("summary");
  };

  if (phase === "intro") {
    return (
      <Card className="border-teal-500/40 bg-slate-900/70">
        <CardContent className="p-6">
          <h3 className="text-base font-bold text-white">The full three-part simulation</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            One sitting, eleven to fourteen minutes, exactly like the recorded test: the interview, the cue card with its
            one-minute preparation, and the two-way discussion. Your audio never leaves this browser — you transcribe
            each turn, and the engine evaluates the transcript with clearly-labelled estimates.
          </p>
          <div className="mt-4"><ExaminerLine text={examiner.opening} onSpeak={() => speech.play(examiner.opening)} /></div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-500">Difficulty:</span>
            {([1, 2, 3, 4, 5] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`h-8 w-8 rounded-full border text-xs font-bold transition-colors ${difficulty === d ? "border-teal-500/60 bg-teal-500/15 text-teal-200" : "border-slate-700 text-slate-500 hover:text-slate-300"}`}
                aria-label={`Difficulty ${d}`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-2 text-xs text-slate-400 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3">Part 1 · {bundle.part1.title}</div>
            <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3">Part 2 · {bundle.part2.title}</div>
            <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3">Part 3 · {bundle.part3.title}</div>
          </div>
          <Button className="mt-5 bg-teal-600 hover:bg-teal-500" onClick={() => setPhase("part1")}>
            Begin the speaking test <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (phase === "part1") {
    return (
      <div className="space-y-4">
        <Badge variant="outline" className="border-teal-500/40 text-teal-300">Simulation · Part 1 of 3 — the interview</Badge>
        <SpeakingItemRun item={bundle.part1} mode="simulation" onFinished={onPartFinished(1)} navigate={navigate} />
      </div>
    );
  }
  if (phase === "part2") {
    return (
      <div className="space-y-4">
        <Badge variant="outline" className="border-teal-500/40 text-teal-300">Simulation · Part 2 of 3 — the long turn</Badge>
        <SpeakingItemRun item={bundle.part2} mode="simulation" onFinished={onPartFinished(2)} navigate={navigate} />
      </div>
    );
  }
  if (phase === "part3") {
    return (
      <div className="space-y-4">
        <Badge variant="outline" className="border-teal-500/40 text-teal-300">Simulation · Part 3 of 3 — the discussion</Badge>
        <SpeakingItemRun item={bundle.part3} mode="simulation" onFinished={onPartFinished(3)} navigate={navigate} />
      </div>
    );
  }

  // Summary
  const parts = [bundle.part1, bundle.part2, bundle.part3];
  return (
    <Card className="border-teal-500/40 bg-slate-900/70">
      <CardContent className="p-6">
        <div className="mb-4"><ExaminerLine text={examiner.closing} onSpeak={() => speech.play(examiner.closing)} /></div>
        <h3 className="text-base font-bold text-white">That is the end of the simulation</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
          Each part was evaluated separately. All numbers are educational estimates produced by the rule-based engine.
        </p>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
          {scores
            .sort((a, b) => a.part - b.part)
            .map((s) => (
              <div key={s.part} className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-4 text-center">
                <p className="text-[11px] text-slate-500">Part {s.part}</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-teal-300">{s.overall > 0 ? `Band ${s.overall.toFixed(1)} est.` : "—"}</p>
              </div>
            ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => { setScores([]); setPhase("intro"); }}>
            <RotateCcw className="mr-2 h-4 w-4" /> New simulation
          </Button>
          <Button variant="outline" onClick={() => navigate({ name: "exams-speaking", tab: "performance" })}>
            My performance dashboard <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 space-y-1.5">
          {parts.map((p) => (
            <button key={p.slug} onClick={() => goPractice(p.slug)} className="flex w-full items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-left text-xs text-slate-300 hover:border-teal-500/50">
              <span>Practise “{p.title}” on its own</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
