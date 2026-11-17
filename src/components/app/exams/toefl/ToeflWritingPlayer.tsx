"use client";

/**
 * TOEFL Writing Practice Library — exercise player (PROMPT 50).
 *
 * Build a Sentence: items render as reorder chips (click segments in order)
 * or text inputs; submission is graded server-side with the focus-based
 * error taxonomy, and the per-item review plus the full teaching kit
 * (model response, analysis, expressions, grammar, common mistakes,
 * independent assignment) is revealed afterwards.
 *
 * Write an Email / Academic Discussion: the scenario card, requirements
 * checklist, live word count against the task's band, a session timer, a
 * drafts autosave loop, and on submission the four-criterion evaluation —
 * every score an educational estimate — with the optional AI coaching layer
 * (strengths, weaknesses, errors, improvements, improved example) and the
 * revealed model response.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { SafeSentenceExercise, SafeWritingExercise, GradedSentenceExercise, RevealedWritingKit } from "@/lib/exams/toefl-bank/writing";
import type { WritingEvaluation } from "@/lib/exams/toefl-bank/writing-evaluate";

type Review =
  | { kind: "sentence"; attemptId: string; result: GradedSentenceExercise; kit: RevealedWritingKit }
  | { kind: "evaluated"; attemptId: string; evaluation: WritingEvaluation; kit: RevealedWritingKit };

const fmt = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

export function ToeflWritingPlayer({ slug, onExit }: { slug: string; onExit: () => void }) {
  const [exercise, setExercise] = useState<SafeWritingExercise | null>(null);
  const [review, setReview] = useState<Review | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Sentence state
  const [orders, setOrders] = useState<Record<number, number[]>>({});
  const [texts, setTexts] = useState<Record<number, string>>({});

  // Email/discussion state
  const [response, setResponse] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [draftSaved, setDraftSaved] = useState<string | null>(null);
  const startedAt = useRef(Date.now());
  const lastSaved = useRef("");

  const load = useCallback(async () => {
    const res = await fetch(`/api/exams/toefl/writing/bank/${slug}`);
    if (!res.ok) { toast.error("Could not load this exercise."); onExit(); return; }
    const data = await res.json();
    setExercise(data.exercise);
    startedAt.current = Date.now();
    if (data.exercise.taskType !== "build-sentence") {
      const d = await fetch(`/api/exams/toefl/writing/bank/${slug}/draft`);
      if (d.ok) {
        const dj = await d.json();
        if (dj.draft?.content) { setResponse(dj.draft.content); lastSaved.current = dj.draft.content; }
      }
    }
  }, [slug, onExit]);

  useEffect(() => { void load(); }, [load]);

  // Session timer + drafts autosave (email/discussion).
  useEffect(() => {
    if (!exercise || exercise.taskType === "build-sentence" || review) return;
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, [exercise, review]);

  useEffect(() => {
    if (!exercise || exercise.taskType === "build-sentence" || review) return;
    const t = setInterval(async () => {
      if (response === lastSaved.current || response.length < 10) return;
      lastSaved.current = response;
      const res = await fetch(`/api/exams/toefl/writing/bank/${slug}/draft`, {
        method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: response }),
      });
      if (res.ok) setDraftSaved(new Date().toLocaleTimeString());
    }, 8000);
    return () => clearInterval(t);
  }, [exercise, response, review, slug]);

  const wordCount = useMemo(() => (response.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) ?? []).length, [response]);

  const submit = async () => {
    if (!exercise) return;
    setSubmitting(true);
    try {
      const body =
        exercise.taskType === "build-sentence"
          ? {
              mode: "practice",
              answers: Object.fromEntries(
                (exercise as SafeSentenceExercise).items.map((it) =>
                  [String(it.no), it.kind === "reorder" ? (orders[it.no] ?? []) : (texts[it.no] ?? "")],
                ),
              ),
              timeSpentSec: Math.floor((Date.now() - startedAt.current) / 1000),
            }
          : { mode: "practice", response, timeSpentSec: Math.floor((Date.now() - startedAt.current) / 1000) };
      const res = await fetch(`/api/exams/toefl/writing/bank/${slug}/submit`, {
        method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body),
      });
      if (res.status === 401) { toast.info("Create a free account to have your writing checked and tracked."); return; }
      if (!res.ok) { toast.error("Submission failed."); return; }
      const data = await res.json();
      setReview(exercise.taskType === "build-sentence"
        ? { kind: "sentence", attemptId: data.attemptId, result: data.result, kit: data.kit }
        : { kind: "evaluated", attemptId: data.attemptId, evaluation: data.evaluation, kit: data.kit });
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

  const isSentence = exercise.taskType === "build-sentence";
  const allAnswered = isSentence
    ? (exercise as SafeSentenceExercise).items.every((it) => (it.kind === "reorder" ? (orders[it.no]?.length ?? 0) === (it.segments?.length ?? 0) : (texts[it.no] ?? "").trim().length > 0))
    : wordCount >= 15;

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onExit}>← Library</Button>
        <h2 className="text-lg font-semibold">{exercise.title}</h2>
        <Badge variant="outline">{exercise.taskLabel}</Badge>
        {"focusLabel" in exercise && <Badge variant="outline">{exercise.focusLabel}</Badge>}
        {"purpose" in exercise && <Badge variant="outline">{exercise.purpose}</Badge>}
        {"discipline" in exercise && <Badge variant="outline">{exercise.discipline}</Badge>}
        <Badge variant="outline">Difficulty {exercise.difficulty}/5</Badge>
        <span className="ml-auto text-xs text-slate-500">{!review && !isSentence ? `⏱ ${fmt(elapsed)}` : `~${exercise.estimatedMinutes} min`}</span>
      </div>

      {!review && (
        <Card>
          <CardContent className="space-y-3 pt-6">
            <p className="text-[15px] leading-7 text-slate-700 dark:text-slate-300">{exercise.instructions}</p>
            <ul className="ml-4 list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {exercise.taskRequirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <p className="text-sm text-slate-500">⏱ {exercise.timeGuidance}</p>
            {!isSentence && "keyPoints" in exercise && (
              <div className="rounded-lg border bg-slate-50 p-3 dark:bg-slate-900">
                <p className="mb-1 text-xs font-semibold text-slate-500">Your response must cover</p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {exercise.keyPoints.map((k, i) => <li key={i}>{k}</li>)}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* ---------- Scenario / board ---------- */}
      {!isSentence && "scenario" in exercise && (
        <Card><CardContent className="space-y-2 pt-6">
          <p className="text-xs font-semibold text-slate-500">THE SITUATION</p>
          <p className="text-[15px] leading-7 text-slate-700 dark:text-slate-300">{exercise.scenario}</p>
          <p className="text-xs text-slate-400">Recipient: {exercise.recipient} · Target {exercise.wordBand.min}–{exercise.wordBand.max} words</p>
        </CardContent></Card>
      )}
      {!isSentence && "professorPrompt" in exercise && (
        <Card><CardContent className="space-y-3 pt-6">
          <p className="rounded-lg bg-slate-100 p-3 text-[15px] leading-7 dark:bg-slate-800">{exercise.professorPrompt}</p>
          {exercise.studentPosts.map((s, i) => (
            <div key={i} className="rounded-lg border p-3">
              <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">{s.name}</p>
              <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{s.post}</p>
            </div>
          ))}
          <p className="text-xs text-slate-400">Target {exercise.wordBand.min}–{exercise.wordBand.max} words</p>
        </CardContent></Card>
      )}

      {/* ---------- Sentence builder ---------- */}
      {isSentence && !review && (exercise as SafeSentenceExercise).items.map((it) => (
        <Card key={it.no}>
          <CardContent className="space-y-3 pt-6">
            <p className="text-[15px] font-medium text-slate-800 dark:text-slate-200">{it.no}. {it.prompt} <span className="ml-2 text-xs font-normal text-slate-400">{it.kindLabel}</span></p>
            {it.kind === "reorder" && it.segments ? (
              <>
                <div className="flex min-h-11 flex-wrap items-center gap-2 rounded-lg border-2 border-dashed border-slate-300 p-2 dark:border-slate-700">
                  {(orders[it.no] ?? []).map((segIdx, pos) => (
                    <button key={pos} type="button"
                      onClick={() => setOrders((o) => ({ ...o, [it.no]: (o[it.no] ?? []).filter((_, p) => p !== pos) }))}
                      className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white dark:bg-slate-100 dark:text-slate-900">
                      {it.segments![segIdx]}
                    </button>
                  ))}
                  {(orders[it.no] ?? []).length === 0 && <span className="px-2 text-sm text-slate-400">Click the pieces below in order…</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {it.segments.map((seg, idx) => {
                    const used = (orders[it.no] ?? []).includes(idx);
                    return (
                      <button key={idx} type="button" disabled={used}
                        onClick={() => setOrders((o) => ({ ...o, [it.no]: [...(o[it.no] ?? []), idx] }))}
                        className={cn("rounded-md border px-3 py-1.5 text-sm transition",
                          used ? "opacity-30" : "border-slate-300 hover:border-slate-500 dark:border-slate-700")}>
                        {seg}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                {it.source && <p className="rounded-lg bg-slate-100 p-3 font-mono text-sm dark:bg-slate-800">{it.source}</p>}
                <input
                  value={texts[it.no] ?? ""}
                  onChange={(e) => setTexts((t) => ({ ...t, [it.no]: e.target.value }))}
                  placeholder="Write the corrected sentence…"
                  aria-label={`Item ${it.no} answer`}
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                />
              </>
            )}
          </CardContent>
        </Card>
      ))}

      {/* ---------- Email / discussion editor ---------- */}
      {!isSentence && !review && (
        <Card>
          <CardContent className="space-y-3 pt-6">
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              rows={12}
              placeholder={exercise.taskType === "write-email" ? "Dear …" : "Write your discussion post…"}
              aria-label="Your response"
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-7"
            />
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className={cn(wordCount < (exercise.wordBand?.min ?? 0) ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400")}>
                {wordCount} words · target {exercise.wordBand?.min}–{exercise.wordBand?.max}
              </span>
              {draftSaved && <span>draft saved at {draftSaved}</span>}
            </div>
            <Button onClick={submit} disabled={submitting || !allAnswered}>
              {submitting ? "Evaluating…" : "Submit for evaluation"}
            </Button>
            {!allAnswered && <p className="text-sm text-slate-500">Write at least 15 words to submit.</p>}
          </CardContent>
        </Card>
      )}

      {isSentence && !review && (
        <Button onClick={submit} disabled={submitting || !allAnswered}>
          {submitting ? "Checking…" : "Submit answers"}
        </Button>
      )}

      {/* ---------- Review: sentence ---------- */}
      {review?.kind === "sentence" && (
        <div className="space-y-4">
          <Card>
            <CardContent className="space-y-1 pt-6">
              <p className="text-2xl font-bold">{Math.round((review.result.correctItems / review.result.totalItems) * 100)}%</p>
              <p className="text-sm text-slate-500">{review.result.correctItems} of {review.result.totalItems} items correct · {review.result.items[0]?.focus} focus</p>
            </CardContent>
          </Card>
          {review.result.items.map((it) => (
            <Card key={it.no} className={it.correct ? "border-emerald-200 dark:border-emerald-900" : "border-rose-200 dark:border-rose-900"}>
              <CardContent className="space-y-2 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={cn("text-sm font-semibold", it.correct ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400")}>
                    {it.no}. {it.correct ? "Correct" : it.errorType}
                  </span>
                  {!it.correct && <span className="text-sm text-slate-500">You: {it.given}</span>}
                  <Badge variant="outline" className="ml-auto">{it.kind}</Badge>
                </div>
                {!it.correct && <p className="rounded-lg bg-slate-100 p-2 text-sm font-medium dark:bg-slate-800">Key: {it.expected}</p>}
                <p className="text-[15px] leading-7 text-slate-700 dark:text-slate-300">{it.explanation}</p>
                <p className="text-sm text-slate-500">Grammar: {it.grammarNote}</p>
              </CardContent>
            </Card>
          ))}
          <KitPanel kit={review.kit} />
        </div>
      )}

      {/* ---------- Review: evaluated ---------- */}
      {review?.kind === "evaluated" && (
        <div className="space-y-4">
          {review.evaluation.status === "insufficient" ? (
            <Card><CardContent className="space-y-2 pt-6">
              <p className="font-semibold">Too short to evaluate</p>
              {review.evaluation.improvements.map((im, i) => <p key={i} className="text-sm text-slate-600 dark:text-slate-400">{im}</p>)}
            </CardContent></Card>
          ) : (
            <>
              <Card>
                <CardContent className="space-y-2 pt-6">
                  <div className="flex items-baseline justify-between">
                    <p className="text-2xl font-bold">{review.evaluation.overall.toFixed(1)}<span className="text-base font-normal text-slate-400">/6</span></p>
                    <p className="text-xs text-slate-500">{review.evaluation.overallLabel}</p>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {review.evaluation.criteria.map((c) => (
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
                </CardContent>
              </Card>

              {review.evaluation.aiCommentary && (
                <Card className="border-sky-200 bg-sky-50/40 dark:border-sky-900 dark:bg-sky-950/20">
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-sky-800 dark:text-sky-300">AI coaching layer</p>
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{review.evaluation.aiCommentary.summary}</p>
                    {review.evaluation.aiCommentary.strengths.length > 0 && (
                      <div><p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Strengths</p>
                        {review.evaluation.aiCommentary.strengths.map((s, i) => <p key={i} className="text-sm text-slate-600 dark:text-slate-400">· {s}</p>)}</div>
                    )}
                    {review.evaluation.aiCommentary.weaknesses.length > 0 && (
                      <div><p className="text-xs font-semibold text-amber-700 dark:text-amber-400">Weaknesses</p>
                        {review.evaluation.aiCommentary.weaknesses.map((s, i) => <p key={i} className="text-sm text-slate-600 dark:text-slate-400">· {s}</p>)}</div>
                    )}
                    {review.evaluation.aiCommentary.errors.length > 0 && (
                      <div><p className="text-xs font-semibold text-rose-700 dark:text-rose-400">Errors spotted</p>
                        {review.evaluation.aiCommentary.errors.map((e, i) => (
                          <p key={i} className="text-sm text-slate-600 dark:text-slate-400">“{e.original}” → <span className="font-medium text-slate-800 dark:text-slate-200">{e.correction}</span> — {e.note}</p>
                        ))}</div>
                    )}
                    {review.evaluation.aiCommentary.improvements.length > 0 && (
                      <div><p className="text-xs font-semibold text-sky-700 dark:text-sky-400">Improvements</p>
                        {review.evaluation.aiCommentary.improvements.map((s, i) => <p key={i} className="text-sm text-slate-600 dark:text-slate-400">· {s}</p>)}</div>
                    )}
                    {review.evaluation.aiCommentary.improvedExample && (
                      <div>
                        <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">An improved version of your response</p>
                        <p className="mt-1 whitespace-pre-wrap rounded-lg border bg-white p-3 text-sm leading-7 dark:bg-slate-900">{review.evaluation.aiCommentary.improvedExample}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <Card><CardContent className="space-y-1 pt-6">
                <p className="text-xs text-slate-400">Measured: {review.evaluation.metrics.wordCount} words · {review.evaluation.metrics.paragraphCount} paragraphs · {review.evaluation.metrics.coveredKeyPoints}/{review.evaluation.metrics.totalKeyPoints} key points · {review.evaluation.metrics.linkerVariety} linkers</p>
                {review.evaluation.disclaimers.map((d, i) => <p key={i} className="text-xs text-slate-400">{d}</p>)}
              </CardContent></Card>
            </>
          )}
          <KitPanel kit={review.kit} />
        </div>
      )}
    </div>
  );
}

function KitPanel({ kit }: { kit: RevealedWritingKit }) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <p className="font-semibold">Teaching kit — revealed after submission</p>
        <div>
          <p className="text-xs font-semibold text-slate-500">MODEL RESPONSE</p>
          <p className="mt-1 whitespace-pre-wrap rounded-lg bg-slate-100 p-3 text-sm leading-7 dark:bg-slate-800">{kit.modelResponse}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500">RESPONSE ANALYSIS</p>
          <p className="mt-1 text-sm leading-7 text-slate-700 dark:text-slate-300">{kit.responseAnalysis}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-slate-500">USEFUL EXPRESSIONS</p>
            <ul className="mt-1 ml-4 list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {kit.usefulExpressions.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">COMMON MISTAKES</p>
            <ul className="mt-1 ml-4 list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {kit.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500">GRAMMAR OBSERVATIONS</p>
          <ul className="mt-1 ml-4 list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {kit.grammarObservations.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </div>
        {kit.vocabulary.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-slate-500">VOCABULARY</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {kit.vocabulary.map((v, i) => (
                <Badge key={i} variant="outline">{v.word} ({v.partOfSpeech}) — {v.definition}</Badge>
              ))}
            </div>
          </div>
        )}
        <div className="rounded-lg border border-sky-200 bg-sky-50/50 p-3 dark:border-sky-900 dark:bg-sky-950/20">
          <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">INDEPENDENT ASSIGNMENT</p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{kit.independentAssignment}</p>
        </div>
      </CardContent>
    </Card>
  );
}
