"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { tenses, tensesByGroup } from "@/data/grammar/tenses";
import { TenseComparison } from "./TenseComparison";

/**
 * The interactive Tense Explorer: pick any two of the twelve tenses and
 * compare all nine aspects side by side. Meaning first — no formula
 * memorisation required.
 */
export function TenseExplorerView() {
  const [selected, setSelected] = useState<string[]>([
    "present-simple",
    "present-continuous",
  ]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev;
        return prev.filter((t) => t !== id);
      }
      // Keep at most two: replace the older one.
      return prev.length >= 2 ? [prev[1], id] : [...prev, id];
    });
  };

  const left = tenses.find((t) => t.id === selected[0]);
  const right = tenses.find((t) => t.id === selected[1]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Tense Explorer</h1>
      <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
        Choose two tenses to compare meaning, structure, verb forms, helping
        verbs, examples, questions and time expressions — side by side.
      </p>

      {/* Tense picker */}
      <div className="mt-6 flex flex-col gap-4">
        {(["present", "past", "future"] as const).map((group) => (
          <div key={group}>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {group} tenses
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tensesByGroup(group).map((tense) => {
                const active = selected.includes(tense.id);
                return (
                  <button
                    key={tense.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(tense.id)}
                    className={cn(
                      "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition-all",
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-background hover:border-primary/50 hover:bg-primary/5",
                    )}
                  >
                    {active ? "✓ " : ""}
                    {tense.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <ArrowLeftRight className="size-3.5" aria-hidden />
        Select exactly two tenses ({selected.length}/2 selected) — picking a
        third replaces the first.
      </p>

      {/* Comparison */}
      <div className="mt-6">
        {left && right ? (
          <TenseComparison left={left} right={right} />
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              Select two tenses above to see the side-by-side comparison.
            </CardContent>
          </Card>
        )}
      </div>

      {/* Jump to the tense lessons */}
      <div className="mt-8 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={() => (window.location.hash = "#/lesson/grammar-tenses-present")}>
          Present tenses lesson
        </Button>
        <Button variant="outline" size="sm" onClick={() => (window.location.hash = "#/lesson/grammar-tenses-past")}>
          Past tenses lesson
        </Button>
        <Button variant="outline" size="sm" onClick={() => (window.location.hash = "#/lesson/grammar-tenses-future")}>
          Future tenses lesson
        </Button>
      </div>
    </div>
  );
}
