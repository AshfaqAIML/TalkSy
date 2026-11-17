"use client";

import { useState } from "react";
import { Volume2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type {
  PartOfSpeechModule,
  PosExample,
} from "@/data/grammar/types";
import { ROLE_STYLES } from "@/lib/grammar/roles";
import { speak } from "@/hooks/use-speech";

/**
 * Renders a complete part-of-speech module: definition, purpose, categories,
 * highlighted examples, use in sentences, common mistakes and skill-based
 * activities — the full Grammar School treatment, data-driven.
 */

function HighlightedExample({ example }: { example: PosExample }) {
  let remaining = example.sentence;
  const parts: { text: string; highlight: boolean }[] = [];

  for (const word of example.highlight) {
    const index = remaining.toLowerCase().indexOf(word.toLowerCase());
    if (index === -1) continue;
    if (index > 0) parts.push({ text: remaining.slice(0, index), highlight: false });
    parts.push({ text: remaining.slice(index, index + word.length), highlight: true });
    remaining = remaining.slice(index + word.length);
  }
  parts.push({ text: remaining, highlight: false });

  return (
    <li className="flex items-start gap-2 rounded-lg bg-background px-3 py-2">
      <div className="min-w-0 flex-1 text-sm leading-relaxed">
        {parts.map((part, i) =>
          part.highlight ? (
            <mark
              key={i}
              className="rounded bg-primary/20 px-1 font-semibold text-primary"
            >
              {part.text}
            </mark>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
        {example.note ? (
          <span className="block text-xs text-muted-foreground">{example.note}</span>
        ) : null}
      </div>
      <button
        type="button"
        aria-label={`Listen: ${example.sentence}`}
        className="mt-0.5 text-muted-foreground transition-colors hover:text-primary"
        onClick={() => speak(example.sentence, {})}
      >
        <Volume2 className="size-4" aria-hidden />
      </button>
    </li>
  );
}

export function PosModuleView({ module }: { module: PartOfSpeechModule }) {
  const [mistakeShown, setMistakeShown] = useState<number | null>(null);
  const style = ROLE_STYLES[module.roleKey];

  return (
    <Card className="border-l-4 border-l-primary/70">
      <CardContent className="flex flex-col gap-5 p-4 sm:p-6">
        {/* Header: name + definition + purpose */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-lg border-2 px-2.5 py-1 text-sm font-bold",
                style.tileClass,
              )}
            >
              {module.name}
            </span>
          </div>
          <p className="text-base font-medium leading-relaxed">{module.definition}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground/80">Why we need it: </span>
            {module.purpose}
          </p>
        </div>

        {/* Categories */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Categories
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {module.categories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-border/70 bg-background p-3"
              >
                <p className="text-sm font-semibold text-primary">{category.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-foreground/80">
                  {category.description}
                </p>
                <p className="mt-1.5 font-mono text-xs text-muted-foreground">
                  {category.examples.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            In real sentences
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {module.examples.map((example, i) => (
              <HighlightedExample key={i} example={example} />
            ))}
          </ul>
        </div>

        {/* Use in sentences */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Use in sentences
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {module.useInSentences.map((usage, i) => (
              <div key={i} className="rounded-xl bg-secondary/50 px-3.5 py-2.5">
                <p className="font-mono text-xs font-semibold text-secondary-foreground">
                  {usage.pattern}
                </p>
                {usage.examples.map((example, j) => (
                  <p key={j} className="mt-1 text-sm">
                    {example.english}{" "}
                    <span className="text-muted-foreground">— {example.translation}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Common mistakes */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Common mistakes — tap to reveal the fix
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {module.commonMistakes.map((mistake, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMistakeShown(mistakeShown === i ? null : i)}
                className="rounded-xl border border-border/70 bg-background p-3 text-left transition-colors hover:border-primary/50"
                aria-expanded={mistakeShown === i}
              >
                <p className="text-sm text-destructive line-through decoration-destructive/60">
                  ✗ {mistake.wrong}
                </p>
                {mistakeShown === i ? (
                  <div className="mt-2 border-t border-dashed border-border pt-2">
                    <p className="text-sm font-semibold text-primary">✓ {mistake.right}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {mistake.explanation}
                    </p>
                  </div>
                ) : (
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    <X className="mr-1 inline size-3" aria-hidden />
                    Tap to see the correction
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skill-based activities */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Skill-based activities
          </p>
          <div className="mt-2 flex flex-col gap-1.5">
            {module.skillActivities.map((activity, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 rounded-xl border border-primary/25 bg-primary/5 px-3.5 py-2.5"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                  <Badge variant="secondary" className="mt-1.5 text-[10px]">
                    {activity.target.kind === "lab"
                      ? `Sentence Lab · Stage ${activity.target.stage}`
                      : activity.target.kind === "clinic"
                        ? "Error Clinic"
                        : activity.target.kind === "tenses"
                          ? "Tense Explorer"
                          : "Lesson"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
