"use client";

import { useMemo } from "react";
import { Volume2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { speak } from "@/hooks/use-speech";
import { seededShuffle } from "@/lib/engine/normalize";
import type { SafeOf } from "@/data/curriculum/types";
import type { InputProps } from "./choice-inputs";

/**
 * 16th exercise type — sentence building: tap word tiles (correct tokens +
 * distractors) to build a sentence. Multiple grammatically valid answers are
 * supported server-side; the learner can hear their sentence before checking.
 */
export function SentenceBuildInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"sentence-build">>) {
  const poolOrder = useMemo(
    () => seededShuffle(exercise.tiles, `pool:${exercise.id}`),
    [exercise.tiles, exercise.id],
  );

  const chosen: string[] = useMemo(() => {
    if (
      value &&
      typeof value === "object" &&
      "tokens" in value &&
      Array.isArray((value as { tokens?: unknown }).tokens)
    ) {
      return (value as { tokens: unknown[] }).tokens.filter(
        (t): t is string => typeof t === "string",
      );
    }
    return [];
  }, [value]);

  const remaining = useMemo(() => {
    const used = [...chosen];
    return poolOrder.filter((tile) => {
      const idx = used.indexOf(tile);
      if (idx === -1) return true;
      used.splice(idx, 1);
      return false;
    });
  }, [poolOrder, chosen]);

  const add = (tile: string) => {
    if (disabled) return;
    onChange({ tokens: [...chosen, tile] });
  };

  const removeAt = (index: number) => {
    if (disabled) return;
    onChange({ tokens: chosen.filter((_, i) => i !== index) });
  };

  const builtSentence = chosen.join(" ");

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-muted-foreground">
        🧱 Tap the word tiles in order to build the sentence. Some tiles are
        distractors — not every tile belongs in your sentence!
      </p>

      {/* Build area */}
      <div
        className="flex min-h-16 flex-wrap items-center gap-1.5 rounded-xl border-2 border-dashed bg-background p-2.5"
        aria-label="Your sentence"
      >
        {chosen.length === 0 ? (
          <span className="px-2 text-sm text-muted-foreground">
            Your sentence appears here…
          </span>
        ) : (
          chosen.map((tile, i) => (
            <button
              key={`${tile}-${i}`}
              type="button"
              disabled={disabled}
              className="rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1 text-sm font-medium transition-colors hover:border-destructive hover:text-destructive"
              onClick={() => removeAt(i)}
              aria-label={`Remove ${tile}`}
            >
              {tile}
            </button>
          ))
        )}
      </div>

      {/* Controls: hear the current sentence + clear */}
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="h-8 gap-1.5 text-muted-foreground"
          disabled={chosen.length === 0}
          onClick={() => speak(builtSentence, { rate: 0.9 })}
          aria-label="Hear your sentence"
        >
          <Volume2 className="size-4" aria-hidden /> Hear my sentence
        </Button>
        {chosen.length > 0 ? (
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="h-8 gap-1 text-destructive"
            onClick={() => onChange({ tokens: [] })}
            disabled={disabled}
          >
            <X className="size-4" aria-hidden /> Clear
          </Button>
        ) : null}
      </div>

      {/* Tile pool */}
      <div className="flex flex-wrap gap-1.5" aria-label="Word tiles">
        {remaining.map((tile, i) => (
          <button
            key={`${tile}-pool-${i}`}
            type="button"
            disabled={disabled}
            className="min-h-[44px] rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/10"
            onClick={() => add(tile)}
          >
            {tile}
          </button>
        ))}
      </div>
    </div>
  );
}
