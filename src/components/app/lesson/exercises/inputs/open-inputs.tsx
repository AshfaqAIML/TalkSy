"use client";

import { useEffect } from "react";
import { Mic, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSpeechRecognition } from "@/hooks/use-speech";
import type { SafeOf } from "@/data/curriculum/types";
import type { InputProps } from "./choice-inputs";

function textOf(value: unknown): string {
  if (value && typeof value === "object" && "text" in value) {
    const text = (value as { text?: unknown }).text;
    return typeof text === "string" ? text : "";
  }
  return "";
}

function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

// ---------------------------------------------------------------------------
// 14. Write a response — free writing with live word count
// ---------------------------------------------------------------------------

export function WriteResponseInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"write-response">>) {
  const text = textOf(value);
  const words = countWords(text);
  const enough = words >= exercise.minWords;

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-secondary/60 px-3 py-2.5 text-sm">
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          ✍️ Situation
        </span>
        <p className="mt-0.5">{exercise.situation}</p>
      </div>
      <Textarea
        value={text}
        disabled={disabled}
        aria-label="Your writing"
        onChange={(e) => onChange({ type: "write-response", text: e.target.value })}
        placeholder={`Write at least ${exercise.minWords} words…`}
        rows={4}
      />
      <div className="flex items-center justify-between text-xs">
        <span
          className={cn(
            "font-medium",
            enough ? "text-primary" : "text-muted-foreground",
          )}
        >
          {words} / {exercise.minWords} words {enough ? "✓" : ""}
        </span>
        <span className="text-muted-foreground">Spelling counts — take your time.</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 15. Speak a response — microphone (Web Speech) with typed fallback
// ---------------------------------------------------------------------------

export function SpeakResponseInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"speak-response">>) {
  const recognition = useSpeechRecognition();
  const text = textOf(value);

  // Auto-apply the transcript as the answer once recognition finishes.
  useEffect(() => {
    if (recognition.transcript) {
      onChange({ type: "speak-response", text: recognition.transcript });
    }
  }, [recognition.transcript]);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="rounded-lg bg-secondary/60 px-3 py-2.5 text-sm">
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          🎤 Situation
        </span>
        <p className="mt-0.5">{exercise.situation}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {recognition.supported ? (
          <Button
            type="button"
            size="sm"
            className="gap-1.5"
            disabled={disabled}
            aria-label={recognition.listening ? "Stop recording" : "Record answer"}
            onClick={() =>
              recognition.listening ? recognition.stop() : recognition.start()
            }
          >
            {recognition.listening ? (
              <>
                <Square className="size-4" aria-hidden /> Stop recording
              </>
            ) : (
              <>
                <Mic className="size-4" aria-hidden /> Record answer
              </>
            )}
          </Button>
        ) : (
          <span className="text-xs text-muted-foreground">
            🎤 Microphone is not available in this browser — type your answer below.
          </span>
        )}
      </div>
      {recognition.listening ? (
        <p className="animate-pulse text-sm text-primary" role="status">
          Listening… speak now.
        </p>
      ) : null}
      {recognition.error ? (
        <p className="text-sm text-destructive" role="alert">
          {recognition.error}
        </p>
      ) : null}
      {recognition.transcript && !text ? (
        <p className="rounded-lg bg-primary/10 px-3 py-2 text-sm italic">
          “{recognition.transcript}”
        </p>
      ) : null}
      <Textarea
        value={text}
        disabled={disabled}
        aria-label="Your spoken answer (or type it)"
        onChange={(e) => onChange({ type: "speak-response", text: e.target.value })}
        placeholder={
          recognition.supported
            ? "Record above, or type what you will say…"
            : "Type what you will say…"
        }
        rows={2}
      />
      <p className="text-xs text-muted-foreground">
        Target phrases: {exercise.targetPhrases.join(" · ")}
      </p>
    </div>
  );
}
