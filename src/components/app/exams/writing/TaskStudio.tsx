"use client";

/**
 * IELTS Writing Masterclass — the Task Studio (PROMPT 46, Parts F–G).
 *
 * One task, the whole writing lifecycle:
 *   - the brief: prompt, visual (SVG), letter situation and bullets
 *   - timed writing (official 20/40-minute countdown, auto-submit at zero)
 *     or untimed study writing (stopwatch)
 *   - live word count against the official floor + autosaved drafts
 *   - submission → the four-criterion feedback report (detailed per
 *     criterion, honest estimate labelling) + the revealed teaching
 *     content: requirements verdicts, planning notes, the model answer
 *     with paragraph-by-paragraph analysis, vocabulary and grammar
 *     analysis, alternative expressions, common mistakes, level samples
 *   - revision: re-open the editor with the previous attempt loaded,
 *     versioned; historical attempts listed with before/after deltas
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { examApi } from "@/lib/client/exam-api";
import { useAppStore } from "@/lib/client/store";
import type { SafeWritingTask, WritingAttemptDto, WritingDraftDto, WritingSubmissionResult } from "@/lib/exams/writing-bank/service";
import type { WritingVisual } from "@/data/exams/ielts/writing-bank/types";
import type { AppRoute } from "@/hooks/use-hash-route";
import { AlertTriangle, ArrowLeft, CheckCircle2, Clock, FileText, History, PenLine, Save, Sparkles, Timer, XCircle } from "lucide-react";
import { WritingVisualView } from "./WritingVisual";

const fmtClock = (sec: number): string => {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

const countWords = (text: string): number =>
  (text.trim().match(/[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g) ?? []).length;

type StudioPhase = "brief" | "writing" | "feedback";

export function TaskStudio({ slug, navigate }: { slug: string; navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);
  const [task, setTask] = useState<SafeWritingTask | null>(null);
  const [draft, setDraft] = useState<WritingDraftDto | null>(null);
  const [attempts, setAttempts] = useState<WritingAttemptDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [phase, setPhase] = useState<StudioPhase>("brief");
  const [mode, setMode] = useState<"exam" | "practice">("exam");
  const [content, setContent] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<WritingSubmissionResult | null>(null);
  const [reviewTab, setReviewTab] = useState("report");

  const contentRef = useRef("");
  const elapsedRef = useRef(0);
  const autosaveTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Keep the refs current for the autosave/submit closures without touching
  // them during render.
  useEffect(() => {
    contentRef.current = content;
    elapsedRef.current = elapsed;
  }, [content, elapsed]);

  useEffect(() => {
    let alive = true;
    void (async () => {
      setLoading(true);
      const res = await examApi.writingTask(slug);
      if (!alive) return;
      if (!res.ok) {
        setLoadError(res.error);
        setLoading(false);
        return;
      }
      setTask(res.data.task);
      setDraft(res.data.draft);
      setAttempts(res.data.attempts);
      if (res.data.draft && res.data.draft.content && countWords(res.data.draft.content) > 0) {
        setContent(res.data.draft.content);
      }
      setLoadError(null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [slug]);

  // The clock: elapsed always runs while writing; in exam mode the countdown
  // governs and auto-submits at zero.
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const timeLimit = task?.timeLimitSec ?? 1200;
  const remaining = mode === "exam" ? Math.max(0, timeLimit - elapsed) : elapsed;
  const overTime = mode === "exam" && elapsed > timeLimit;

  const doSubmit = useCallback(
    (auto: boolean) => {
      if (!task || submitting) return;
      const words = countWords(contentRef.current);
      if (words < 1) return;
      if (auto && words < 10) return; // an essentially empty auto-submit is ignored
      setSubmitting(true);
      setRunning(false);
      if (autosaveTimer.current) clearInterval(autosaveTimer.current);
      examApi
        .writingSubmit(task.slug, { mode, content: contentRef.current, timeSpentSec: Math.round(elapsedRef.current) })
        .then((res) => {
          if (!res.ok) {
            setRunning(true);
            setLoadError(res.error);
            return;
          }
          setResult(res.data);
          setAttempts(res.data.history);
          setPhase("feedback");
          setReviewTab("report");
          window.scrollTo({ top: 0, behavior: "smooth" });
        })
        .catch(() => {
          // Network failure: keep the writing phase alive so nothing is lost.
          setRunning(true);
        })
        .finally(() => setSubmitting(false));
    },
    [mode, submitting, task],
  );

  // Auto-submit at zero in exam mode — deferred to a macrotask so no state
  // is set synchronously inside the effect body.
  useEffect(() => {
    if (!(running && mode === "exam" && elapsed >= timeLimit)) return;
    const t = window.setTimeout(() => {
      void doSubmit(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, [elapsed, mode, running, timeLimit, doSubmit]);

  // Autosave every 10 seconds while writing (logged in).
  useEffect(() => {
    if (phase !== "writing" || !user) return;
    autosaveTimer.current = setInterval(() => {
      const text = contentRef.current;
      if (countWords(text) === 0) return;
      examApi
        .writingSaveDraft(slug, text)
        .then((d) => {
          if (d.ok && d.data.draft.updatedAt) setSavedAt(new Date(d.data.draft.updatedAt).toLocaleTimeString());
        })
        .catch(() => undefined);
    }, 10000);
    return () => {
      if (autosaveTimer.current) clearInterval(autosaveTimer.current);
    };
  }, [phase, slug, user]);

  const wordCount = useMemo(() => countWords(content), [content]);
  const floor = task?.wordMinimum ?? 150;
  const floorRatio = Math.min(1.5, wordCount / floor);

  const startWriting = (chosenMode: "exam" | "practice") => {
    setMode(chosenMode);
    setElapsed(0);
    setRunning(true);
    setPhase("writing");
  };

  const beginRevision = () => {
    // The editor keeps the submitted text; the clock restarts and the next
    // submission becomes version n+1 on the same task.
    setContent(contentRef.current);
    setElapsed(0);
    setResult(null);
    setPhase("writing");
    setRunning(true);
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center text-sm text-slate-400">Loading the task…</div>
    );
  }
  if (loadError || !task) {
    return (
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-center">
        <p className="text-sm text-slate-400">{loadError ?? "Task not found."}</p>
        <Button variant="outline" onClick={() => navigate({ name: "exams-writing" })}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to the library
        </Button>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Brief phase
  // -------------------------------------------------------------------------
  if (phase === "brief") {
    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <Button variant="ghost" className="text-slate-400" onClick={() => navigate({ name: "exams-writing" })}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Task library
          </Button>
          <Badge variant="outline" className="border-violet-500/40 text-violet-300">
            {task.channel === "academic" ? "Academic" : "General Training"} · {task.taskType === "task-1" ? "Task 1" : "Task 2"} · {task.familyLabel}
          </Badge>
        </div>

        <Card className="border-slate-700/70 bg-slate-900/60">
          <CardContent className="space-y-5 p-6">
            <div>
              <h1 className="text-xl font-bold text-white sm:text-2xl">{task.title}</h1>
              <p className="mt-1 text-xs text-slate-500">
                {task.difficultyLabel} difficulty · {task.estimatedMinutes} minutes official timing · write at least {task.wordMinimum} words · {task.source}
              </p>
            </div>

            {task.situation ? (
              <div className="rounded-lg border border-slate-700/70 bg-slate-800/40 p-4 text-sm leading-relaxed text-slate-300">{task.situation}</div>
            ) : null}

            <div className="space-y-2 whitespace-pre-line text-sm leading-relaxed text-slate-200">{task.prompt}</div>

            {task.bullets ? (
              <ul className="space-y-1.5">
                {task.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}

            {task.visual ? <WritingVisualView visual={task.visual as WritingVisual} /> : null}

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What a complete response covers</p>
              <ul className="mt-2 space-y-1">
                {task.requirementDescriptions.map((r) => (
                  <li key={r} className="flex gap-2 text-xs text-slate-400">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {draft && countWords(draft.content) > 0 ? (
              <p className="flex items-center gap-2 text-xs text-amber-300/90">
                <Save className="h-3.5 w-3.5" /> A saved draft ({countWords(draft.content)} words) will load when you start writing.
              </p>
            ) : null}
          </CardContent>
        </Card>

        {!user ? (
          <Card className="border-slate-700/70 bg-slate-900/60">
            <CardContent className="p-6 text-center text-sm text-slate-400">
              Log in to write against the clock, autosave drafts and receive the four-criterion feedback report.
              <div className="mt-4 flex justify-center gap-2">
                <Button onClick={() => navigate({ name: "login" })}>Log in</Button>
                <Button variant="outline" onClick={() => navigate({ name: "register" })}>Register</Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            <Card className="border-violet-500/30 bg-slate-900/60 transition-colors hover:border-violet-500/60">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-violet-300"><Timer className="h-4 w-4" /><span className="text-sm font-semibold">Timed writing</span></div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  The official {task.estimatedMinutes}-minute clock counts down and the response auto-submits at zero — exam conditions.
                </p>
                <Button className="mt-4 w-full" onClick={() => startWriting("exam")}>Start the clock</Button>
              </CardContent>
            </Card>
            <Card className="border-slate-700/70 bg-slate-900/60 transition-colors hover:border-slate-500/60">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-slate-300"><Clock className="h-4 w-4" /><span className="text-sm font-semibold">Untimed study writing</span></div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  A stopwatch runs, the clock never cuts you off — study conditions for method practice and revision work.
                </p>
                <Button variant="outline" className="mt-4 w-full" onClick={() => startWriting("practice")}>Write untimed</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {attempts.length > 0 ? (
          <Card className="border-slate-700/70 bg-slate-900/60">
            <CardContent className="p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <History className="h-3.5 w-3.5" /> Your attempts on this task
              </p>
              <ul className="mt-3 space-y-2">
                {attempts.map((a) => (
                  <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-xs">
                    <span className="font-semibold text-slate-300">Version {a.version}</span>
                    <span className="text-slate-400">{a.wordCount} words · {fmtClock(a.timeSpentSec)} · {a.mode === "exam" ? "timed" : "untimed"}</span>
                    <span className="font-bold text-violet-300">{a.overall.toFixed(1)} band estimate</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : null}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Writing phase
  // -------------------------------------------------------------------------
  if (phase === "writing") {
    return (
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="ghost" className="text-slate-400" onClick={() => { setRunning(false); setPhase("brief"); }}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to the brief
          </Button>
          <div className="flex items-center gap-3">
            {savedAt ? <span className="text-[11px] text-slate-500">Draft saved {savedAt}</span> : null}
            <div className={`rounded-lg border px-4 py-2 font-mono text-lg font-bold tabular-nums ${overTime ? "border-rose-500/50 text-rose-300" : remaining <= 120 && mode === "exam" ? "border-amber-500/50 text-amber-300" : "border-slate-600 text-slate-200"}`}>
              {mode === "exam" ? (overTime ? `+${fmtClock(elapsed - timeLimit)}` : fmtClock(remaining)) : fmtClock(elapsed)}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
          <Card className="border-slate-700/70 bg-slate-900/60">
            <CardContent className="p-4">
              <div className="mb-3 space-y-2 text-sm leading-relaxed text-slate-300">
                {task.situation ? <p className="text-slate-400">{task.situation}</p> : null}
                <p className="whitespace-pre-line">{task.prompt}</p>
                {task.bullets ? (
                  <ul className="space-y-1">
                    {task.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-xs text-slate-400">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {task.visual ? <WritingVisualView visual={task.visual as WritingVisual} /> : null}
            </CardContent>
          </Card>

          <Card className="flex flex-col border-slate-700/70 bg-slate-900/60">
            <CardContent className="flex flex-1 flex-col p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <PenLine className="h-4 w-4 text-violet-300" /> Your response
                </span>
                <span className={`text-xs font-semibold tabular-nums ${wordCount >= floor ? "text-emerald-400" : wordCount >= floor * 0.8 ? "text-amber-400" : "text-slate-400"}`}>
                  {wordCount} / {floor} words
                </span>
              </div>
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all ${wordCount >= floor ? "bg-emerald-500" : "bg-violet-500"}`}
                  style={{ width: `${Math.min(100, (floorRatio / 1.1) * 100)}%` }}
                />
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                spellCheck
                placeholder={task.channel === "gt" && task.taskType === "task-1" ? "Dear …" : "Begin your introduction…"}
                className="min-h-[420px] flex-1 resize-y rounded-lg border border-slate-700 bg-slate-950/60 p-4 font-serif text-sm leading-relaxed text-slate-100 outline-none focus:border-violet-500/60"
                aria-label="Your written response"
              />
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-[11px] text-slate-500">
                  {mode === "exam" ? "Timed — auto-submits at 00:00" : "Untimed study session"} · drafts autosave every 10 s
                </span>
                <Button
                  onClick={() => doSubmit(false)}
                  disabled={submitting || wordCount < 1}
                  className="bg-violet-600 hover:bg-violet-500"
                >
                  {submitting ? "Evaluating…" : "Submit for feedback"}
                </Button>
              </div>
              {overTime ? (
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-rose-300">
                  <AlertTriangle className="h-3.5 w-3.5" /> Over the official clock — finish and submit; the overtime is recorded honestly.
                </p>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Feedback phase
  // -------------------------------------------------------------------------
  const ev = result?.evaluation;
  const review = result?.review;
  const TABS = [
    { id: "report", label: "Feedback report" },
    { id: "requirements", label: "Requirements" },
    { id: "planning", label: "Planning notes" },
    { id: "model", label: "Model answer" },
    { id: "analysis", label: "Analysis" },
    { id: "levels", label: "Level samples" },
    { id: "vocabulary", label: "Vocabulary bank" },
    { id: "history", label: "History" },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-5 px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" className="text-slate-400" onClick={() => navigate({ name: "exams-writing" })}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Task library
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={beginRevision}>
            <PenLine className="mr-2 h-4 w-4" /> Revise and resubmit
          </Button>
        </div>
      </div>

      {ev ? (
        <>
          <Card className="border-violet-500/40 bg-gradient-to-b from-violet-950/40 to-slate-900/60">
            <CardContent className="p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">Version {result?.version} · {result?.attempt.wordCount} words · {fmtClock(result?.attempt.timeSpentSec ?? 0)} · {result?.attempt.mode === "exam" ? "timed" : "untimed"}</p>
              <p className="mt-2 text-5xl font-bold tabular-nums text-white">{ev.overall.toFixed(1)}</p>
              <p className="mt-1 text-sm text-slate-300">{ev.overallLabel}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {ev.criteria.map((c) => (
                  <div key={c.key} className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-2 py-3">
                    <p className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-slate-500">{c.name}</p>
                    <p className="mt-1 text-xl font-bold tabular-nums text-violet-200">{c.score.toFixed(1)}</p>
                  </div>
                ))}
              </div>
              {ev.aiCommentary ? (
                <div className="mt-4 rounded-lg border border-violet-500/30 bg-violet-950/30 p-4 text-left">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-violet-300"><Sparkles className="h-3.5 w-3.5" /> Coach commentary</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{ev.aiCommentary.summary}</p>
                  {ev.aiCommentary.examinerNote ? <p className="mt-2 text-xs italic text-slate-400">{ev.aiCommentary.examinerNote}</p> : null}
                </div>
              ) : null}
              <p className="mt-4 text-[11px] leading-relaxed text-slate-500">{ev.disclaimers[0]}</p>
            </CardContent>
          </Card>

          <div role="tablist" aria-label="Review sections" className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={reviewTab === t.id}
                onClick={() => setReviewTab(t.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  reviewTab === t.id ? "bg-violet-500/15 text-violet-200 ring-1 ring-violet-500/40" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {reviewTab === "report" ? (
            <div className="space-y-4">
              {ev.criteria.map((c) => (
                <Card key={c.key} className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-white">{c.name}</h3>
                        <p className="mt-0.5 max-w-2xl text-[11px] leading-snug text-slate-500">{c.descriptor}</p>
                      </div>
                      <span className="shrink-0 rounded-lg border border-violet-500/40 bg-violet-950/30 px-3 py-1.5 text-lg font-bold tabular-nums text-violet-200">
                        {c.score.toFixed(1)}<span className="text-xs text-slate-500">/9</span>
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {c.feedback.map((f, i) => (
                        <li key={i} className="flex gap-2 text-xs leading-relaxed">
                          {f.kind === "strength" ? <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          : f.kind === "issue" ? <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                          : <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />}
                          <span className={f.kind === "strength" ? "text-slate-300" : f.kind === "issue" ? "text-slate-300" : "text-slate-400"}>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                    {c.evidence.length > 0 ? (
                      <blockquote className="mt-3 border-l-2 border-violet-500/40 pl-3 text-xs italic leading-relaxed text-slate-400">
                        “{c.evidence[0].quote}” — <span className="not-italic text-slate-500">{c.evidence[0].note}</span>
                      </blockquote>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}

          {reviewTab === "requirements" && review ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-white">Requirement checklist</h3>
                <p className="mt-1 text-xs text-slate-500">What the engine checked a complete response covers — each verdict is a keyword-level check, not a full reading.</p>
                <ul className="mt-4 space-y-2">
                  {review.requirements.map((r) => (
                    <li key={r.key} className="flex items-start gap-2.5 rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2.5">
                      {r.met ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />}
                      <span className={`text-xs leading-relaxed ${r.met ? "text-slate-300" : "text-slate-300"}`}>{r.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          {reviewTab === "planning" && review ? (
            <div className="space-y-3">
              {review.planningNotes.map((p) => (
                <Card key={p.heading} className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-white"><FileText className="h-4 w-4 text-violet-300" /> {p.heading}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {p.notes.map((n, i) => (
                        <li key={i} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}

          {reviewTab === "model" && review ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-white">Model answer</h3>
                  <Badge variant="outline" className="border-amber-500/40 text-[10px] text-amber-300">{review.modelAnswer.bandEstimate}</Badge>
                </div>
                <div className="mt-4 space-y-3">
                  {review.modelAnswer.paragraphs.map((p, i) => (
                    <div key={i}>
                      <p className="font-serif text-sm leading-relaxed text-slate-200">{p}</p>
                      {review.analysis.paragraphByParagraph[i] ? (
                        <p className="mt-1.5 border-l-2 border-slate-700 pl-3 text-[11px] leading-relaxed text-slate-500">
                          <span className="font-semibold text-slate-400">{review.analysis.paragraphByParagraph[i].role}:</span> {review.analysis.paragraphByParagraph[i].analysis}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] text-slate-500">{review.modelAnswer.wordCount} words. Use it as scaffolding — never memorise it.</p>
              </CardContent>
            </Card>
          ) : null}

          {reviewTab === "analysis" && review ? (
            <div className="space-y-3">
              <Card className="border-slate-700/70 bg-slate-900/60">
                <CardContent className="p-5">
                  <h3 className="text-sm font-bold text-white">Coherence analysis</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{review.analysis.coherence}</p>
                </CardContent>
              </Card>
              <div className="grid gap-3 md:grid-cols-2">
                <Card className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-bold text-white">Vocabulary explanation</h3>
                    <ul className="mt-3 space-y-2">
                      {review.analysis.vocabulary.map((v) => (
                        <li key={v.term} className="text-xs leading-relaxed"><span className="font-semibold text-violet-300">{v.term}</span> <span className="text-slate-400">— {v.note}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-bold text-white">Grammar analysis</h3>
                    <ul className="mt-3 space-y-2.5">
                      {review.analysis.grammar.map((g) => (
                        <li key={g.feature} className="text-xs leading-relaxed">
                          <span className="font-semibold text-violet-300">{g.feature}</span>
                          <span className="mt-0.5 block italic text-slate-300">“{g.example}”</span>
                          <span className="text-slate-500">{g.note}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-bold text-white">Alternative expressions</h3>
                    <ul className="mt-3 space-y-1.5">
                      {review.analysis.alternativeExpressions.map((a) => (
                        <li key={a.insteadOf} className="text-xs text-slate-400">
                          <span className="line-through">{a.insteadOf}</span> → <span className="font-semibold text-emerald-300">{a.use}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-bold text-white">Common mistakes on this task</h3>
                    <ul className="mt-3 space-y-2.5">
                      {review.analysis.commonMistakes.map((m, i) => (
                        <li key={i} className="text-xs leading-relaxed">
                          <span className="text-rose-300">✗ {m.wrong}</span>
                          <span className="mt-0.5 block text-emerald-300">✓ {m.right}</span>
                          <span className="text-slate-500">{m.reason}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : null}

          {reviewTab === "levels" && review ? (
            <div className="space-y-4">
              {review.levelSamples.length === 0 ? (
                <p className="rounded-lg border border-slate-700/60 bg-slate-900/60 p-4 text-xs leading-relaxed text-slate-400">
                  This is a practice-tier task: it carries the model answer, planning notes and analysis, but no
                  level ladder. The flagship tasks in the library show responses at two further proficiency levels.
                </p>
              ) : null}
              {review.levelSamples.map((s, si) => (
                <Card key={si} className="border-slate-700/70 bg-slate-900/60">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-white">Another learner&apos;s attempt — {s.bandEstimate}</h3>
                      <span className="text-[11px] text-slate-500">{s.wordCount} words</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="font-serif text-sm leading-relaxed text-slate-300">{p}</p>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-slate-700/60 bg-slate-800/40 p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Why this level (educational estimates)</p>
                      <ul className="mt-2 space-y-1.5">
                        {s.justification.map((j, i) => (
                          <li key={i} className="text-[11px] leading-relaxed text-slate-400">
                            <span className="font-semibold text-slate-300">{j.criterion}:</span> {j.note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}

          {reviewTab === "vocabulary" && review ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-white">Topic vocabulary bank</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {review.vocabularyBank.map((v) => (
                    <li key={v.word} className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-2">
                      <span className="text-xs font-bold text-violet-300">{v.word}</span> <span className="text-[10px] italic text-slate-500">{v.partOfSpeech}</span>
                      <p className="mt-0.5 text-[11px] leading-snug text-slate-400">{v.meaning}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          {reviewTab === "history" ? (
            <Card className="border-slate-700/70 bg-slate-900/60">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-white">Historical attempts on this task</h3>
                <ul className="mt-3 space-y-2">
                  {result?.history.map((a) => (
                    <li key={a.id} className={`flex flex-wrap items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-xs ${a.id === result?.attemptId ? "border-violet-500/50 bg-violet-950/20" : "border-slate-700/60 bg-slate-800/40"}`}>
                      <span className="font-semibold text-slate-300">Version {a.version}{a.id === result?.attemptId ? " · this attempt" : ""}</span>
                      <span className="text-slate-400">{a.wordCount} words · {fmtClock(a.timeSpentSec)} · {a.mode === "exam" ? "timed" : "untimed"}</span>
                      <span className="flex items-center gap-2">
                        {Object.entries(a.criteriaScores).map(([k, v]) => (
                          <span key={k} className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[10px] tabular-nums text-slate-400">{k} {v.toFixed(1)}</span>
                        ))}
                        <span className="font-bold text-violet-300">{a.overall.toFixed(1)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] text-slate-500">Every revision is versioned — compare versions to see which criterion moved.</p>
              </CardContent>
            </Card>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
