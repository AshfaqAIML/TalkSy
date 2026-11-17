"use client";

/**
 * Catalogue filters (PROMPT 32 §4): level, topic, skill, difficulty,
 * duration and completion status. Pure client-side filtering over the
 * fetched catalogue — every option derives from the real items, so a
 * filter with no results never appears.
 */

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  DURATION_BUCKETS,
  SKILL_LABELS,
  type CatalogueItem,
  type CatalogueSkill,
  type CompletionStatus,
  type DurationBucketId,
  type HubId,
} from "@/lib/catalogue/types";
import { HUBS } from "@/lib/catalogue/hubs";

export interface CatalogueFilters {
  level: string | null;
  topic: HubId | null;
  skill: CatalogueSkill | null;
  difficulty: string | null;
  duration: DurationBucketId | null;
  completion: CompletionStatus | null;
}

export const EMPTY_FILTERS: CatalogueFilters = {
  level: null,
  topic: null,
  skill: null,
  difficulty: null,
  duration: null,
  completion: null,
};

/** Derive the selectable options from the actual item data. */
export function deriveFilterOptions(items: CatalogueItem[]) {
  const levels = [...new Set(items.map((i) => i.level).filter((l): l is string => Boolean(l)))]
    .filter((l) => l !== "Beg–Adv")
    .sort();
  const skills = [...new Set(items.flatMap((i) => i.skills))].filter((s) => s !== "general");
  const difficulties = [...new Set(items.map((i) => i.difficulty).filter((d): d is string => Boolean(d)))];
  return { levels, skills, difficulties };
}

export function filterItems(
  items: CatalogueItem[],
  filters: CatalogueFilters,
  signedIn: boolean,
): CatalogueItem[] {
  return items.filter((item) => {
    if (filters.level && item.level !== filters.level && item.level !== "Beg–Adv") return false;
    if (filters.topic && !item.topics.includes(filters.topic)) return false;
    if (filters.skill && !item.skills.includes(filters.skill)) return false;
    if (filters.difficulty && !(item.difficulty ?? "").includes(filters.difficulty)) return false;
    if (filters.duration) {
      const bucket = DURATION_BUCKETS.find((b) => b.id === filters.duration);
      if (item.durationMinutes === null || !bucket || !bucket.test(item.durationMinutes)) {
        return false;
      }
    }
    if (signedIn && filters.completion) {
      if ((item.completion ?? "not-started") !== filters.completion) return false;
    }
    return true;
  });
}

function FilterSelect({
  label,
  value,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  value: string | null;
  options: { value: string; label: string }[];
  placeholder: string;
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <span className="px-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <Select
        value={value ?? "all"}
        onValueChange={(next) => onChange(next === "all" ? null : next)}
      >
        <SelectTrigger size="sm" className="w-full gap-1 bg-card">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{placeholder}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function FilterBar({
  items,
  filters,
  onChange,
  signedIn,
  resultCount,
  totalCount,
}: {
  items: CatalogueItem[];
  filters: CatalogueFilters;
  onChange: (filters: CatalogueFilters) => void;
  signedIn: boolean;
  resultCount: number;
  totalCount: number;
}) {
  const { levels, skills, difficulties } = deriveFilterOptions(items);
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="rounded-xl border bg-secondary/30 p-3">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        <FilterSelect
          label="Level"
          placeholder="All levels"
          value={filters.level}
          options={levels.map((l) => ({ value: l, label: l }))}
          onChange={(level) => onChange({ ...filters, level })}
        />
        <FilterSelect
          label="Topic"
          placeholder="All topics"
          value={filters.topic}
          options={HUBS.map((h) => ({ value: h.id, label: h.title }))}
          onChange={(topic) => onChange({ ...filters, topic: topic as HubId | null })}
        />
        <FilterSelect
          label="Skill"
          placeholder="All skills"
          value={filters.skill}
          options={skills.map((s) => ({ value: s, label: SKILL_LABELS[s as CatalogueSkill] ?? s }))}
          onChange={(skill) => onChange({ ...filters, skill: skill as CatalogueSkill | null })}
        />
        <FilterSelect
          label="Difficulty"
          placeholder="Any difficulty"
          value={filters.difficulty}
          options={difficulties.map((d) => ({ value: d, label: d }))}
          onChange={(difficulty) => onChange({ ...filters, difficulty })}
        />
        <FilterSelect
          label="Duration"
          placeholder="Any length"
          value={filters.duration}
          options={DURATION_BUCKETS.map((b) => ({ value: b.id, label: b.label }))}
          onChange={(duration) => onChange({ ...filters, duration: duration as DurationBucketId | null })}
        />
        {signedIn ? (
          <FilterSelect
            label="Completion"
            placeholder="Any status"
            value={filters.completion}
            options={[
              { value: "not-started", label: "Not started" },
              { value: "in-progress", label: "In progress" },
              { value: "completed", label: "Completed" },
            ]}
            onChange={(completion) =>
              onChange({ ...filters, completion: completion as CompletionStatus | null })
            }
          />
        ) : (
          <div className="flex min-w-0 flex-col gap-1">
            <span className="px-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Completion
            </span>
            <p
              className="flex h-8 items-center rounded-md border border-dashed px-2.5 text-xs text-muted-foreground"
              title="Sign in to filter by your completion status"
            >
              Sign in to track
            </p>
          </div>
        )}
      </div>
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t pt-2.5">
        <p className="text-xs text-muted-foreground" role="status">
          Showing <span className="font-semibold text-foreground">{resultCount}</span> of{" "}
          {totalCount} items
        </p>
        {activeCount > 0 ? (
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1.5 px-2 text-xs"
            onClick={() => onChange({ ...EMPTY_FILTERS })}
          >
            <X className="size-3.5" aria-hidden /> Clear {activeCount}{" "}
            {activeCount === 1 ? "filter" : "filters"}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
