"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Check, Lightbulb, PenLine, Quote, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { SentenceDto, SentenceSubmitDto } from "@/lib/vocab/dto";
import type { VocabEntry } from "@/data/vocabulary/types";
import { vocabWords } from "@/data/vocabulary";
import { describeDue } from "@/lib/vocab/srs";
import { displayForms } from "@/lib/vocab/sentences";
import { cn } from "@/lib/utils";
import { DifficultyBadge, ErrorText, LoginPrompt, SectionHeading, SpeakButton } from "./shared";

/**
 * Sentence practice: learners write their own sentences with a target word.
 * The checker verifies real usage (inflections accepted), blocks copied
 * examples and coaches on capitals & punctuation. Valid sentences count as
 * a successful spaced-repetition review.
 */
export function SentencesTab({
  initialWordId,
  navigate,
}: {
  initialWordId?: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  // Deep-linked word comes in via props; the parent remounts on param change.
  const [word, setWord] = useState<VocabEntry | null>(
    () =>
      (initialWordId ? vocabWords.find((w) => w.id === initialWordId) : undefined) ??
      vocabWords.find((w) => w.id === "buy") ??
      vocabWords[0] ??
      null,
  );
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState<SentenceSubmitDto | null>(null);
  const [history, setHistory] = useState<SentenceDto[]>([]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Word picker source: due/learning words first (via search), else library.
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return vocabWords
      .filter((w) => w.word.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!user || !word) return;
    let cancelled = false;
    (async () => {
      const res = await api.vocabSentences(word.id);
      if (!cancelled && res.ok) setHistory(res.data.sentences);
    })();
    return () => {
      cancelled = true;
    };
  }, [user, word]);

  if (!user) {
    return (
      <LoginPrompt
        message="Sentence practice saves your sentences and schedules the words you use."
        navigate={navigate}
      />
    );
  }

  const submit = async () => {
    if (!word || !sentence.trim()) return;
    setSubmitting(true);
    setResult(null);
    const res = await api.vocabSubmitSentence(word.id, sentence);
    if (res.ok) {
      setResult(res.data);
      setHistory((prev) => [res.data.sentence, ...prev].slice(0, 30));
      if (res.data.valid) setSentence("");
    } else {
      setError(res.error);
    }
    setSubmitting(false);
  };

  const issues = result?.issues ?? [];
  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        icon={<PenLine className="size-5 text-primary" aria-hidden />}
        title="Sentence practice"
        description="Use it or lose it — write your own sentence with each word. Real usage counts as a review."
      />

      {/* Word picker */}
      <div className="relative max-w-md">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a word to practice…"
          aria-label="Search a word to practice"
          className="flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm"
        />
        {suggestions.length > 0 ? (
          <div className="absolute z-10 mt-1 w-full rounded-xl border bg-popover p-1 shadow-md">
            {suggestions.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setWord(s);
                  setQuery("");
                  setResult(null);
                }}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-secondary"
              >
                <span className="font-semibold">{s.word}</span>
                <span className="text-xs text-muted-foreground">{s.translation}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <ErrorText>{error}</ErrorText>

      {word ? (
        <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
          {/* Practice card */}
          <Card>
            <CardContent className="flex flex-col gap-4 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-2xl font-bold">{word.word}</h3>
                  <SpeakButton text={word.word} label={`Listen to ${word.word}`} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {word.pronunciation}
                  </span>
                </div>
                <DifficultyBadge difficulty={word.difficulty} />
              </div>
              <p className="text-sm text-muted-foreground">
                {word.meaning} · <span className="text-primary">{word.translation}</span>
              </p>

              {/* Inspiration: example + collocations + accepted forms */}
              <div className="flex flex-col gap-2 rounded-xl border bg-secondary/30 p-3">
                <p className="flex items-start gap-2 text-sm">
                  <SpeakButton text={word.example.english} label="Listen to the example" className="size-8" />
                  <span>
                    <Quote className="mr-1 inline size-3.5 text-muted-foreground" aria-hidden />
                    {word.example.english}
                    {showTranslations ? (
                      <span className="block text-xs text-muted-foreground">
                        {word.example.translation}
                      </span>
                    ) : null}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  <Lightbulb className="mr-1 inline size-3.5" aria-hidden />
                  Try a collocation: {word.collocations.map((c) => c.phrase).join(" · ")}
                </p>
                <p className="text-xs text-muted-foreground">
                  Accepted forms: {displayForms(word.word).join(", ")}
                </p>
              </div>

              <div>
                <label htmlFor="sentence-input" className="text-sm font-semibold">
                  Your own sentence with “{word.word}”
                </label>
                <Textarea
                  id="sentence-input"
                  value={sentence}
                  onChange={(e) => setSentence(e.target.value)}
                  placeholder={`Write your own sentence — don't copy the example!`}
                  rows={3}
                  className="mt-1.5"
                  maxLength={400}
                />
                <p className="mt-1 text-right text-xs text-muted-foreground">
                  {sentence.trim().split(/\s+/).filter(Boolean).length} words
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button onClick={submit} disabled={submitting || !sentence.trim()} className="gap-1.5">
                  <Wand2 className="size-4" aria-hidden />
                  {submitting ? "Checking…" : "Check my sentence"}
                </Button>
                {result ? (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-semibold",
                      result.valid ? "text-primary" : "text-destructive",
                    )}
                    role="status"
                  >
                    {result.valid ? (
                      <>
                        <Check className="size-4" aria-hidden /> Saved! This word is scheduled{" "}
                        {describeDue(result.progress?.dueAt ? new Date(result.progress.dueAt) : null)}
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="size-4" aria-hidden /> Not yet — fix the issues
                        below.
                      </>
                    )}
                  </span>
                ) : null}
              </div>

              {/* Checker feedback */}
              {issues.length > 0 ? (
                <ul className="flex flex-col gap-2" aria-label="Sentence feedback">
                  {errors.map((issue) => (
                    <li key={issue.code} className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm">
                      <p className="font-semibold">{issue.message}</p>
                      {issue.hint ? (
                        <p className="mt-0.5 text-muted-foreground">{issue.hint}</p>
                      ) : null}
                    </li>
                  ))}
                  {warnings.map((issue) => (
                    <li key={issue.code} className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
                      <p className="font-semibold">{issue.message}</p>
                      {issue.hint ? (
                        <p className="mt-0.5 text-muted-foreground">{issue.hint}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </CardContent>
          </Card>

          {/* History */}
          <Card>
            <CardContent className="flex flex-col gap-2 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                My sentences for “{word.word}”
              </p>
              {history.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Nothing yet — your checked sentences appear here.
                </p>
              ) : (
                <div className="flex max-h-96 flex-col gap-2 overflow-y-auto">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className={cn(
                        "rounded-xl border p-3 text-sm",
                        item.valid ? "border-primary/30" : "border-dashed",
                      )}
                    >
                      <p>{item.sentence}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.valid ? "✓ valid" : "✗ needs work"} ·{" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
