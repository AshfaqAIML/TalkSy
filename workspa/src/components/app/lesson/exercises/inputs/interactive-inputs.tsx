"use client";

import { useMemo, useState } from "react";
import { Link2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { SafeOf } from "@/data/curriculum/types";
import { seededShuffle } from "@/lib/engine/normalize";
import type { InputProps } from "./choice-inputs";

// ---------------------------------------------------------------------------
// 4. Match the following — tap a left item, then its right partner
// ---------------------------------------------------------------------------

export function MatchInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"match">>) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);

  const pairs: { leftId: string; rightId: string }[] = useMemo(() => {
    if (value && typeof value === "object" && "pairs" in value && Array.isArray((value as { pairs?: unknown }).pairs)) {
      return (value as { pairs: unknown[] }).pairs.filter(
        (p): p is { leftId: string; rightId: string } => {
          const pair = p as { leftId?: unknown; rightId?: unknown };
          return typeof pair?.leftId === "string" && typeof pair?.rightId === "string";
        },
      );
    }
    return [];
  }, [value]);

  const pairedRight = new Set(pairs.map((p) => p.rightId));

  const assign = (leftId: string, rightId: string) => {
    const next = [
      ...pairs.filter((p) => p.leftId !== leftId && p.rightId !== rightId),
      { leftId, rightId },
    ];
    onChange({ pairs: next });
    setSelectedLeft(null);
  };

  const unpair = (leftId: string) => {
    onChange({ pairs: pairs.filter((p) => p.leftId !== leftId) });
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-muted-foreground">
        Tap an item on the left, then tap its match on the right.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-6">
        <div className="flex flex-col gap-2">
          {exercise.leftItems.map((item) => {
            const paired = pairs.find((p) => p.leftId === item.id);
            const selected = selectedLeft === item.id;
            return (
              <button
                key={item.id}
                type="button"
                disabled={disabled}
                aria-pressed={selected}
                className={cn(
                  "min-h-[44px] rounded-xl border px-3 py-2.5 text-left text-sm transition-all",
                  paired
                    ? "border-primary/50 bg-primary/10"
                    : selected
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border bg-background hover:border-primary/50",
                )}
                onClick={() => setSelectedLeft(selected ? null : item.id)}
              >
                <span className="font-medium">{item.text}</span>
                {paired ? (
                  <span className="mt-1 flex items-center gap-1 text-xs text-primary">
                    <Link2 className="size-3" aria-hidden />
                    {exercise.rightItems.find((r) => r.id === paired.rightId)?.text}
                    <span
                      role="button"
                      tabIndex={disabled ? -1 : 0}
                      aria-label={`Unpair ${item.text}`}
                      className="ml-auto inline-flex size-5 items-center justify-center rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!disabled) unpair(item.id);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.stopPropagation();
                          if (!disabled) unpair(item.id);
                        }
                      }}
                    >
                      <X className="size-3" aria-hidden />
                    </span>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {exercise.rightItems.map((item) => {
            const paired = pairedRight.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                disabled={disabled || !selectedLeft || paired}
                className={cn(
                  "min-h-[44px] rounded-xl border px-3 py-2.5 text-left text-sm transition-all",
                  paired
                    ? "border-border bg-muted text-muted-foreground"
                    : selectedLeft
                      ? "border-primary/60 bg-primary/5 hover:bg-primary/15"
                      : "border-border bg-background",
                )}
                onClick={() => selectedLeft && assign(selectedLeft, item.id)}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. Drag and drop — categorize items (click or drag)
// ---------------------------------------------------------------------------

export function DragDropInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"drag-drop">>) {
  const placements: Record<string, string> = useMemo(() => {
    const map: Record<string, string> = {};
    if (value && typeof value === "object" && "placements" in value && Array.isArray((value as { placements?: unknown }).placements)) {
      for (const p of (value as { placements: unknown[] }).placements) {
        const placement = p as { itemId?: unknown; categoryId?: unknown };
        if (typeof placement?.itemId === "string" && typeof placement?.categoryId === "string") {
          map[placement.itemId] = placement.categoryId;
        }
      }
    }
    return map;
  }, [value]);

  const [pickedItem, setPickedItem] = useState<string | null>(null);

  const place = (itemId: string, categoryId: string) => {
    const next = { ...placements, [itemId]: categoryId };
    onChange({
      placements: Object.entries(next).map(([id, cat]) => ({
        itemId: id,
        categoryId: cat,
      })),
    });
    setPickedItem(null);
  };

  const remove = (itemId: string) => {
    const next = { ...placements };
    delete next[itemId];
    onChange({
      placements: Object.entries(next).map(([id, cat]) => ({
        itemId: id,
        categoryId: cat,
      })),
    });
  };

  const pool = exercise.items.filter((item) => !placements[item.id]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-muted-foreground">
        Tap an item, then tap the group it belongs to (or drag it).
      </p>
      <div
        className="flex min-h-16 flex-wrap items-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/40 p-3"
        aria-label="Items to sort"
      >
        {pool.length === 0 ? (
          <span className="text-xs text-muted-foreground">
            All items sorted — great!
          </span>
        ) : (
          pool.map((item) => (
            <button
              key={item.id}
              type="button"
              draggable={!disabled}
              disabled={disabled}
              aria-pressed={pickedItem === item.id}
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", item.id);
              }}
              onClick={() => setPickedItem(pickedItem === item.id ? null : item.id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
                pickedItem === item.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/40 bg-primary/10 text-primary-foreground bg-card text-foreground hover:border-primary",
              )}
            >
              {item.label}
            </button>
          ))
        )}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {exercise.categories.map((category) => {
          const itemsIn = exercise.items.filter(
            (item) => placements[item.id] === category.id,
          );
          return (
            <div
              key={category.id}
              className={cn(
                "flex min-h-28 flex-col gap-2 rounded-xl border-2 p-3 transition-colors",
                pickedItem
                  ? "border-primary/60 bg-primary/5"
                  : "border-border bg-background",
              )}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData("text/plain");
                if (itemId && !disabled) place(itemId, category.id);
              }}
            >
              <button
                type="button"
                disabled={disabled || !pickedItem}
                className="text-left text-sm font-semibold text-primary"
                onClick={() => pickedItem && place(pickedItem, category.id)}
              >
                {category.text}
              </button>
              <div className="flex flex-wrap gap-1.5">
                {itemsIn.map((item) => (
                  <span
                    key={item.id}
                    className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {item.label}
                    <button
                      type="button"
                      disabled={disabled}
                      aria-label={`Remove ${item.label}`}
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => remove(item.id)}
                    >
                      <X className="size-3" aria-hidden />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 6. Rearrange words — tap tokens in order
// ---------------------------------------------------------------------------

export function RearrangeInput({
  exercise,
  value,
  onChange,
  disabled,
}: InputProps<SafeOf<"rearrange">>) {
  // Display pool order: stable per exercise, tokens not yet used.
  const poolOrder = useMemo(
    () => seededShuffle(exercise.tokens, `pool:${exercise.id}`),
    [exercise.tokens, exercise.id],
  );

  const chosen: string[] = useMemo(() => {
    if (value && typeof value === "object" && "tokens" in value && Array.isArray((value as { tokens?: unknown }).tokens)) {
      return (value as { tokens: unknown[] }).tokens.filter(
        (t): t is string => typeof t === "string",
      );
    }
    return [];
  }, [value]);

  const remaining = useMemo(() => {
    const used = [...chosen];
    return poolOrder.filter((token) => {
      const idx = used.indexOf(token);
      if (idx === -1) return true;
      used.splice(idx, 1);
      return false;
    });
  }, [poolOrder, chosen]);

  const add = (token: string) => {
    onChange({ tokens: [...chosen, token] });
  };

  const removeAt = (index: number) => {
    onChange({ tokens: chosen.filter((_, i) => i !== index) });
  };

  const reset = () => onChange({ tokens: [] });

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-muted-foreground">
        Tap the words in the correct order to build the sentence.
      </p>
      <div
        className="flex min-h-14 flex-wrap items-center gap-1.5 rounded-xl border-2 bg-background p-2.5"
        aria-label="Your sentence"
      >
        {chosen.length === 0 ? (
          <span className="px-2 text-sm text-muted-foreground">
            Your sentence appears here…
          </span>
        ) : (
          chosen.map((token, i) => (
            <button
              key={`${token}-${i}`}
              type="button"
              disabled={disabled}
              className="rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1 text-sm font-medium hover:border-destructive hover:text-destructive"
              onClick={() => removeAt(i)}
              aria-label={`Remove ${token}`}
            >
              {token}
            </button>
          ))
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {remaining.map((token, i) => (
          <button
            key={`${token}-pool-${i}`}
            type="button"
            disabled={disabled}
            className="min-h-[44px] rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/10"
            onClick={() => add(token)}
          >
            {token}
          </button>
        ))}
      </div>
      {chosen.length > 0 ? (
        <Button type="button" variant="ghost" size="sm" className="self-start" onClick={reset} disabled={disabled}>
          Clear sentence
        </Button>
      ) : null}
    </div>
  );
}
