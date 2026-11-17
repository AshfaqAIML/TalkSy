"use client";

/**
 * TOEFL Reading Practice Library — exercise player (PROMPT 49).
 *
 * Renders all three task types: masked-word inputs for Complete the Words,
 * multiple choice for Daily Life and Academic Passages. Submits to the
 * grading endpoint; review shows per-item feedback with the passage
 * evidence, the vocabulary glossary and the grammar observations.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { SafeReadingExercise } from "@/lib/exams/toefl-bank/reading";

type ReviewItem = {
  no: number;
  kind: "words" | "mcq";
  skill: string;
  given: string;
  expected: string;
  errorType: string;
  correct: boolean;
  explanation: string;
  grammarNote: string | null;
  evidence: { block: number; paragraph: number; quote: string }[];
  trapNote: string | null;
  whyWrong: string[];
};

type Review = {
  attemptId: string;
  result: { totalItems: number; correctItems: number; items: ReviewItem[] };
  vocabulary: { word: string; partOfSpeech: string; definition: string }[];
  grammar: string[];
};

const letter = (i: number) => String.fromCharCode(65 + i);

export function ToeflReadingPlayer({ slug, onExit }: { slug: string; onExit: () => void }) {
  const [exercise, setExercise] = useState<SafeReadingExercise | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [review, setReview] = useState<Review | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const started = useRef(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      const res = await fetch(`/api/exams/toefl/reading/bank/${slug}`);
      if (!res.ok) { toast.error("Could not load this exercise."); onExit(); return; }
      const data = await res.json();
      if (!alive) return;
      setExercise(data.exercise);
      started.current = Date.now();
    })();
    return () => { alive = false; };
  }, [slug]);

  useEffect(() => {
    if (!exercise || review) return;
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - started.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, [exercise, review]);

  const allAnswered = useMemo(
    () => exercise ? exercise.questions.every((q) => q.kind === "words" ? String(answers[q.no] ?? "").trim() !== "" : typeof answers[q.no] === "number") : false,
    [exercise, answers],
  );

  const submit = async () => {
    if (!exercise) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/exams/toefl/reading/bank/${slug}/submit`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          mode: "practice",
          answers,
          timeSpentSec: Math.floor((Date.now() - started.current) / 1000),
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
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-8 w-1/3" />
      </div>
    );
  }

  const passageNode =
    exercise.taskType === "complete-words" ? (
      <p className="whitespace-pre-line text-[15px] leading-7 text-slate-700 dark:text-slate-300">{exercise.passage as string}</p>
    ) : exercise.taskType === "daily-life" ? (
      <div className="space-y-4">
        {(exercise.passage as { heading: string; paragraphs: string[] }[]).map((b, i) => (
          <div key={i}>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{b.heading}</p>
            {b.paragraphs.map((p, j) => (
              <p key={j} className="whitespace-pre-line text-[15px] leading-7 text-slate-700 dark:text-slate-300">{p}</p>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <div>
        <p className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{(exercise.passage as { heading: string }).heading}</p>
        {(exercise.passage as { paragraphs: string[] }).paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-[15px] leading-7 text-slate-700 dark:text-slate-300">{p}</p>
        ))}
      </div>
    );

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onExit}>← Library</Button>
        <h2 className="text-lg font-semibold">{exercise.title}</h2>
        <Badge variant="outline">{exercise.taskLabel}</Badge>
        <Badge variant="outline">{exercise.topic}</Badge>
        <Badge variant="outline">Difficulty {exercise.difficulty}/5</Badge>
        {!review && <span className="ml-auto tabular-nums text-sm text-slate-500">{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}</span>}
      </div>

      <Card>
        <CardContent className="space-y-3 pt-6">{passageNode}</CardContent>
      </Card>

      {!review ? (
        <Card>
          <CardContent className="space-y-5 pt-6">
            {exercise.taskType === "complete-words" && (
              <p className="text-sm text-slate-500">Type the completion for each masked word (the visible stem is given — type the whole word or just the completion; either is accepted).</p>
            )}
            {exercise.questions.map((q) =>
              q.kind === "words" ? (
                <div key={q.no} className="flex items-center gap-3">
                  <span className="w-8 shrink-0 text-sm font-semibold text-slate-500">{q.no}.</span>
                  <span className="font-mono text-[15px]">{extractStem(exercise.passage as string, q.no)}</span>
                  <input
                    aria-label={`Completion for question ${q.no}`}
                    className="w-40 rounded-md border border-input bg-transparent px-2 py-1 text-sm"
                    value={String(answers[q.no] ?? "")}
                    onChange={(e) => setAnswers((a) => ({ ...a, [q.no]: e.target.value }))}
                    placeholder="completion"
                  />
                </div>
              ) : (
                <div key={q.no} className="space-y-2">
                  <p className="text-[15px] font-medium text-slate-800 dark:text-slate-200">{q.no}. {q.stem}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {(q.options ?? []).map((opt, i) => (
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
              ),
            )}
            <Button onClick={submit} disabled={submitting || !allAnswered} className="w-full sm:w-auto">
              {submitting ? "Checking…" : "Submit answers"}
            </Button>
            {!allAnswered && <p className="text-sm text-slate-500">Answer every question to submit.</p>}
          </CardContent>
        </Card>
      ) : (
        <ReviewPanel review={review} />
      )}
    </div>
  );
}

/** Finds the masked token for question n in the passage (for the words input row). */
function extractStem(passage: string, no: number): string {
  const re = /([A-Za-z]{3,})___/g;
  const all = [...passage.matchAll(re)];
  // The masks appear in passage order; question no maps to the n-th mask of this exercise.
  return all[no - 1] ? `${all[no - 1][1]}___` : "____";
}

function ReviewPanel({ review }: { review: Review }) {
  const pct = Math.round((review.result.correctItems / review.result.totalItems) * 100);
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="space-y-1 pt-6">
          <p className="text-2xl font-bold">{pct}%</p>
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
            {it.grammarNote && <p className="text-sm text-slate-500">Grammar: {it.grammarNote}</p>}
            {it.evidence.map((ev, i) => (
              <p key={i} className="border-l-2 border-slate-300 pl-3 text-sm italic text-slate-600 dark:text-slate-400">“{ev.quote}”</p>
            ))}
            {it.trapNote && <p className="text-sm text-amber-700 dark:text-amber-400">Trap: {it.trapNote}</p>}
            {it.whyWrong.map((w, i) => (
              <p key={i} className="text-sm text-slate-500">Why not: {w}</p>
            ))}
          </CardContent>
        </Card>
      ))}
      {review.vocabulary.length > 0 && (
        <Card>
          <CardContent className="space-y-2 pt-6">
            <p className="font-semibold">Vocabulary from this exercise</p>
            <ul className="space-y-1">
              {review.vocabulary.map((v) => (
                <li key={v.word} className="text-sm"><span className="font-semibold">{v.word}</span> <span className="text-slate-500">({v.partOfSpeech})</span> — {v.definition}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {review.grammar.length > 0 && (
        <Card>
          <CardContent className="space-y-2 pt-6">
            <p className="font-semibold">Grammar observations</p>
            <ul className="list-disc space-y-1 pl-5">
              {review.grammar.map((g, i) => <li key={i} className="text-sm text-slate-700 dark:text-slate-300">{g}</li>)}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
