"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { SentenceStructure } from "@/data/curriculum/types";
import { speak } from "@/hooks/use-speech";
import { LEGEND_ROLES, ROLE_STYLES } from "@/lib/grammar/roles";

/**
 * Colour-coded sentence diagram: each token is a tile coloured by its
 * grammatical role. Clicking a token reveals its job in THIS sentence, and a
 * button reads the whole sentence aloud.
 */
export function SentenceAnatomy({
  sentence,
  title,
  compact = false,
  showLegend = true,
}: {
  sentence: SentenceStructure;
  title?: string;
  compact?: boolean;
  showLegend?: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const plain = sentence.tokens.map((t) => t.text).join(" ");

  const usedRoles = new Set(sentence.tokens.map((t) => t.role));

  return (
    <Card className={cn("border-border/80 bg-card", compact && "border-0 bg-transparent shadow-none")}>
      {!compact && title ? (
        <p className="px-4 pt-4 text-sm font-semibold sm:px-5">🔬 {title}</p>
      ) : null}
      <CardContent className={cn("flex flex-col gap-3", compact ? "p-0" : "p-4 sm:p-5")}>
        {/* Pattern label */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-bold tracking-wider text-primary">
            {sentence.pattern}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto h-7 gap-1.5 px-2 text-muted-foreground"
            onClick={() => speak(plain, { rate: 0.9 })}
            aria-label="Hear the sentence"
          >
            <Volume2 className="size-3.5" aria-hidden /> Hear the sentence
          </Button>
        </div>

        {/* The colour-coded sentence */}
        <div className="flex flex-wrap items-center gap-1.5" aria-label="Sentence words with grammatical roles">
          {sentence.tokens.map((token, i) => {
            const style = ROLE_STYLES[token.role];
            const isPunctuation = token.role === "punctuation";
            const isSelected = selected === i;
            return (
              <button
                key={i}
                type="button"
                aria-label={`${token.text} — ${style.label}`}
                aria-pressed={isSelected}
                onClick={() => setSelected(isSelected ? null : i)}
                className={cn(
                  "rounded-lg border-2 px-2.5 py-1 text-sm font-medium transition-all sm:text-base",
                  isPunctuation && "px-1.5",
                  style.tileClass,
                  isSelected && "ring-2 ring-primary ring-offset-1",
                )}
              >
                {token.text}
              </button>
            );
          })}
        </div>

        {/* Selected token explanation */}
        {selected !== null ? (
          <div
            className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3"
            role="status"
          >
            <p className="flex items-center gap-2 text-sm">
              <span
                className={cn(
                  "rounded-md border px-2 py-0.5 text-xs font-semibold",
                  ROLE_STYLES[sentence.tokens[selected].role].chipClass,
                )}
              >
                {ROLE_STYLES[sentence.tokens[selected].role].label}
              </span>
              <span className="font-mono text-base font-bold">
                {sentence.tokens[selected].text}
              </span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/85">
              {sentence.tokens[selected].note ??
                `This word works as the ${ROLE_STYLES[sentence.tokens[selected].role].label.toLowerCase()} in this sentence.`}
            </p>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">
            👆 Tap any word to inspect its grammatical role.
          </p>
        )}

        {/* Legend */}
        {showLegend ? (
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 border-t border-border/60 pt-2.5">
            {LEGEND_ROLES.filter((role) => usedRoles.has(role)).map((role) => (
              <span
                key={role}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <span className={cn("size-2.5 rounded-sm", ROLE_STYLES[role].dotClass)} aria-hidden />
                {ROLE_STYLES[role].label}
              </span>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
