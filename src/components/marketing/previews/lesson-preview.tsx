"use client";

/**
 * Hero product preview — a faithful recreation of the real lesson player,
 * populated with the real "Hello and Goodbye" lesson (A1 · Unit 1 ·
 * Lesson 1). The sentence builder is genuinely interactive: tap the words,
 * build the sentence, check it — the same exercise a learner gets in the
 * app. The vocabulary rail speaks real audio via the browser speech engine.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Volume2, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StepDots, PhaseBadge } from "@/components/ds";
import { speak, speechSupported } from "@/lib/speech";
import type { LessonPreview } from "@/lib/marketing/preview-data";
import { cn } from "@/lib/utils";

type BuilderState = "building" | "correct" | "incorrect";

export function LessonPreview({ lesson }: { lesson: LessonPreview }) {
  const builder = lesson.sentenceBuilder;
  const [bank, setBank] = useState<string[] | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [state, setState] = useState<BuilderState>("building");
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const scrambled = bank ?? builder?.scrambled ?? [];

  function tapWord(word: string, index: number) {
    if (state !== "building") return;
    setBank(scrambled.filter((_, i) => i !== index));
    setBuilt((b) => [...b, word]);
  }

  function untapWord(index: number) {
    if (state !== "building") return;
    const word = built[index];
    setBuilt(built.filter((_, i) => i !== index));
    setBank([...scrambled, word]);
  }

  function check() {
    if (!builder) return;
    const attempt = built.join(" ");
    setState(attempt.toLowerCase() === builder.answer.toLowerCase() ? "correct" : "incorrect");
  }

  function reset() {
    setBank(null);
    setBuilt([]);
    setState("building");
  }

  function playWord(term: string) {
    if (!speechSupported()) return;
    setPlayingWord(term);
    speak(term, { onEnd: () => setPlayingWord(null) });
  }

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Main lesson column */}
      <div className="min-w-0 flex-1 p-4 sm:p-6">
        {/* Lesson top bar — mirrors the real player */}
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md text-ink-500" aria-hidden="true">
            <ArrowLeft className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="truncate text-caption font-semibold text-ink-600">{lesson.unitLabel}</span>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-sun-100 px-2 py-0.5 text-caption font-bold text-sun-700 dark:bg-sun-500/15">
                <Zap className="h-3 w-3" aria-hidden="true" /> 240 XP
              </span>
            </div>
            <Progress value={42} aria-label="Lesson progress" />
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <StepDots total={9} active={4} label="Lesson steps" />
          <span className="text-caption tabular-nums text-ink-500">step 5 of 9</span>
        </div>

        {/* Exercise card — the real sentence-builder exercise */}
        {builder && (
          <div className="rounded-xl border-2 border-line bg-card p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <PhaseBadge phase="guided" />
              <span className="text-caption text-ink-500">Sentence builder</span>
            </div>
            <p className="mb-5 text-body font-semibold text-ink-900">{builder.prompt}</p>

            {/* Answer row */}
            <div
              className={cn(
                "mb-4 flex min-h-[3.25rem] flex-wrap items-center gap-2 rounded-lg border-2 p-2.5 transition-colors",
                state === "correct" && "border-grove-600 bg-grove-50 dark:bg-grove-600/10",
                state === "incorrect" && "border-clay-500 bg-clay-50 dark:bg-clay-500/10",
                state === "building" && "border-dashed border-line-strong bg-sand-50"
              )}
              aria-label="Your sentence"
            >
              {built.length === 0 && state === "building" && (
                <span className="px-1.5 text-body-sm text-ink-400">Tap the words below…</span>
              )}
              <AnimatePresence>
                {built.map((word, i) => (
                  <motion.button
                    key={`${word}-${i}`}
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    onClick={() => untapWord(i)}
                    className="rounded-lg border border-line bg-background px-3 py-1.5 text-body-sm font-medium text-ink-800 shadow-xs transition-colors hover:border-clay-400"
                    aria-label={`Remove word ${word}`}
                  >
                    {word}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Word bank */}
            <div className="mb-5 flex flex-wrap gap-2" aria-label="Available words">
              {scrambled.map((word, i) => (
                <button
                  key={`${word}-bank-${i}`}
                  onClick={() => tapWord(word, i)}
                  className="rounded-lg border-2 border-line bg-sand-100 px-3.5 py-1.5 text-body-sm font-medium text-ink-800 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-sm"
                  aria-label={`Add word ${word}`}
                >
                  {word}
                </button>
              ))}
            </div>

            {/* Feedback + controls */}
            {state === "building" ? (
              <div className="flex items-center justify-between gap-3">
                <p className="hidden text-caption text-ink-500 sm:block">Try it — tap the words in order.</p>
                <Button onClick={check} disabled={built.length === 0} className="gap-1.5">
                  Check <Check className="h-4 w-4" />
                </Button>
              </div>
            ) : state === "correct" ? (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-grove-50 p-3.5 dark:bg-grove-600/10"
              >
                <p className="flex items-center gap-2 text-body-sm font-semibold text-grove-700 dark:text-grove-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Correct — “{builder.answer}.”
                </p>
                <Button size="sm" variant="outline" onClick={reset} className="gap-1.5">
                  Try again <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-clay-50 p-3.5 dark:bg-clay-500/10"
              >
                <p className="text-body-sm font-semibold text-clay-700 dark:text-clay-400">
                  Not quite — tap the words in the answer to remove them and try again.
                </p>
                <Button size="sm" variant="outline" onClick={reset}>
                  Reset
                </Button>
              </motion.div>
            )}
          </div>
        )}

        {/* Footer controls — mirrors the real player */}
        <div className="mt-5 flex items-center justify-between">
          <Button variant="ghost" className="gap-1.5" aria-hidden="true" tabIndex={-1}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button size="lg" className="gap-1.5" aria-hidden="true" tabIndex={-1}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Vocabulary rail — mirrors the real xl rail */}
      <aside className="w-full shrink-0 border-t border-line bg-sand-50 p-4 dark:bg-sand-100/40 sm:w-64 sm:border-l sm:border-t-0 sm:p-5">
        <p className="mb-1 flex items-center gap-1.5 overline-label text-brand-700 dark:text-brand-600">
          <Sparkles className="h-3 w-3" aria-hidden="true" /> Words in this lesson
        </p>
        <p className="mb-4 text-caption text-ink-500">Tap a word to hear it.</p>
        <ul className="space-y-2.5">
          {lesson.vocab.map((v) => (
            <li key={v.term}>
              <button
                onClick={() => playWord(v.term)}
                className={cn(
                  "group flex w-full items-start gap-2.5 rounded-lg border border-line bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-sm",
                  playingWord === v.term && "border-primary shadow-sm"
                )}
                aria-label={`Play ${v.term}`}
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-ink-900">{v.term}</span>
                  <span className="block text-caption leading-snug text-ink-500">{v.definition}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
