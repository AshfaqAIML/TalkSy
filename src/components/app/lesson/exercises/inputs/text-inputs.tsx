"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSpeech } from "@/hooks/use-speech";
import type { SafeOf } from "@/data/curriculum/types";
import type { InputProps } from "./choice-inputs";

function textOf(value: unknown): string {
  if (value && typeof value === "object" && "text" in value) {
    const text = (value as { text?: unknown }).text;
    return typeof text === "string" ? text : "";
  }
  return "";
}

// ---------------------------------------------------------------------------
// 3. Fill in the blank — inline input inside the sentence
// ---------------------------------------------------------------------------

export function FillBlankInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"fill-blank">>) {
  const [before, after] = exercise.sentence.split("___");
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base leading-loose">
        {before}
        <Input
          type="text"
          value={textOf(value)}
          disabled={disabled}
          aria-label="Fill in the blank"
          onChange={(e) => onChange({ type: "fill-blank", text: e.target.value })}
          className="mx-1.5 inline-block h-9 w-32 align-middle text-center"
          placeholder="…"
        />
        {after}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 7. Complete the sentence
// ---------------------------------------------------------------------------

export function CompleteSentenceInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"complete-sentence">>) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-1.5 text-base leading-loose">
        <span className="rounded bg-secondary px-2 py-0.5">{exercise.sentenceStart}</span>
        <Input
          type="text"
          value={textOf(value)}
          disabled={disabled}
          aria-label="Complete the sentence"
          onChange={(e) => onChange({ type: "complete-sentence", text: e.target.value })}
          className="h-9 w-44"
          placeholder="your words…"
        />
        {exercise.sentenceEnd ? (
          <span className="rounded bg-secondary px-2 py-0.5">{exercise.sentenceEnd}</span>
        ) : null}
      </div>
      <p className="text-xs text-muted-foreground">
        Several answers can be correct — write your own.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 8. Correct the mistake
// ---------------------------------------------------------------------------

export function CorrectMistakeInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"correct-mistake">>) {
  return (
    <div className="flex flex-col gap-2">
      <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm line-through decoration-destructive/70">
        {exercise.incorrectSentence}
      </p>
      <Textarea
        value={textOf(value)}
        disabled={disabled}
        aria-label="Write the corrected sentence"
        onChange={(e) => onChange({ type: "correct-mistake", text: e.target.value })}
        placeholder="Write the correct sentence…"
        rows={2}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 9. Translate
// ---------------------------------------------------------------------------

export function TranslateInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"translate">>) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2.5">
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          {exercise.direction === "to-english" ? "ES → EN" : "EN → ES"}
        </span>
        <span className="text-sm font-medium">{exercise.source}</span>
      </div>
      <Input
        type="text"
        value={textOf(value)}
        disabled={disabled}
        aria-label="Your translation"
        onChange={(e) => onChange({ type: "translate", text: e.target.value })}
        placeholder={
          exercise.direction === "to-english" ? "Write in English…" : "Escribe en español…"
        }
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 10. Short answer
// ---------------------------------------------------------------------------

export function ShortAnswerInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"short-answer">>) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{exercise.question}</p>
      <Input
        type="text"
        value={textOf(value)}
        disabled={disabled}
        aria-label="Your answer"
        onChange={(e) => onChange({ type: "short-answer", text: e.target.value })}
        placeholder="Your answer…"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 11. Listen and answer
// ---------------------------------------------------------------------------

export function ListenAnswerInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"listen-answer">>) {
  const { playing, play, stop } = useSpeech();
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          className="gap-1.5"
          onClick={() => (playing ? stop() : play(exercise.audioText, 0.85))}
        >
          {playing ? "⏹ Stop" : "🎧 Listen"}
        </Button>
        <Button type="button" size="sm" variant="ghost" onClick={() => play(exercise.audioText, 0.6)}>
          🐢 Slow
        </Button>
      </div>
      <p className="text-sm font-medium">{exercise.question}</p>
      <Input
        type="text"
        value={textOf(value)}
        disabled={disabled}
        aria-label="Your answer"
        onChange={(e) => onChange({ type: "listen-answer", text: e.target.value })}
        placeholder="Your answer…"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 12. Dictation — listen and type exactly what you hear
// ---------------------------------------------------------------------------

export function DictationInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"dictation">>) {
  const { playing, play, stop } = useSpeech();
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          className="gap-1.5"
          onClick={() => (playing ? stop() : play(exercise.audioText, 0.85))}
        >
          {playing ? "⏹ Stop" : "🎧 Listen"}
        </Button>
        <Button type="button" size="sm" variant="ghost" onClick={() => play(exercise.audioText, 0.55)}>
          🐢 Slow
        </Button>
        <span className="text-xs text-muted-foreground">
          Type the sentence you hear, word for word.
        </span>
      </div>
      <Textarea
        value={textOf(value)}
        disabled={disabled}
        aria-label="What do you hear?"
        onChange={(e) => onChange({ type: "dictation", text: e.target.value })}
        placeholder="Type what you hear…"
        rows={2}
      />
    </div>
  );
}
