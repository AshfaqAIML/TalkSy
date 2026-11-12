"use client";

/**
 * Revision tab — the learner's personal revision schedule.
 * Every item explains WHY it is scheduled now, quoting the actual factors
 * (performance, attempts, days since last practice, difficulty, confidence).
 * Confidence ratings are the learner's own input and are clearly labelled.
 */

import { useState } from "react";
import { CalendarClock, Info, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import type { ProgressOverviewDto, RevisionItem } from "@/data/progress";
import { EmptyState, RevisionKindBadge, SectionCard } from "./bits";

const CONFIDENCE_LABELS: Record<string, string> = {
  "1": "1 · Shaky",
  "2": "2 · Unsure",
  "3": "3 · Okay",
  "4": "4 · Solid",
  "5": "5 · Confident",
};

function RevisionRow({ item }: { item: RevisionItem }) {
  return (
    <a
      href={item.href}
      className="flex flex-col gap-2 rounded-xl border p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <RevisionKindBadge kind={item.kind} />
          <p className="truncate font-semibold">{item.title}</p>
        </div>
        <Badge
          variant="secondary"
          className={
            item.status === "due"
              ? "shrink-0 border-0 bg-rose-500/15 text-rose-600 dark:text-rose-400"
              : "shrink-0 border-0 bg-amber-500/15 text-amber-600 dark:text-amber-400"
          }
        >
          {item.status === "due" ? "Due now" : "Coming up"}
        </Badge>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{item.reason}</p>
      <div className="flex items-center gap-3">
        <Progress className="h-1.5 max-w-40" value={item.urgency} />
        <span className="text-xs tabular-nums text-muted-foreground">
          priority {item.urgency}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {item.factors.performance !== null ? (
          <Badge variant="outline" className="text-[10px]">best {item.factors.performance}%</Badge>
        ) : null}
        {item.factors.attempts > 0 ? (
          <Badge variant="outline" className="text-[10px]">
            {item.factors.attempts} attempt{item.factors.attempts === 1 ? "" : "s"}
          </Badge>
        ) : null}
        {item.factors.daysSince !== null ? (
          <Badge variant="outline" className="text-[10px]">
            {item.factors.daysSince === 0 ? "today" : `${item.factors.daysSince}d since`}
          </Badge>
        ) : null}
        {item.factors.confidence !== null ? (
          <Badge variant="outline" className="text-[10px]">confidence {item.factors.confidence}/5</Badge>
        ) : null}
        {item.factors.dueAt ? (
          <Badge variant="outline" className="text-[10px]">
            due {new Date(item.factors.dueAt).toLocaleDateString()}
          </Badge>
        ) : null}
        {item.factors.difficulty ? (
          <Badge variant="outline" className="text-[10px]">{item.factors.difficulty}</Badge>
        ) : null}
      </div>
    </a>
  );
}

function ConfidencePanel({
  lessons,
  onSaved,
}: {
  lessons: { slug: string; title: string; confidence: number | null }[];
  onSaved: () => void;
}) {
  const [savingSlug, setSavingSlug] = useState<string | null>(null);

  const rate = async (slug: string, value: string) => {
    setSavingSlug(slug);
    const response = await api.setLessonConfidence({
      lessonSlug: slug,
      confidence: Number(value),
    });
    setSavingSlug(null);
    if (response.ok) {
      toast.success("Confidence saved — the revision scheduler uses it right away.");
      onSaved();
    } else {
      toast.error(response.error);
    }
  };

  if (lessons.length === 0) {
    return (
      <EmptyState
        title="Complete a lesson first"
        body="After you complete a lesson, you can rate how confident you feel about it. Low confidence raises its revision priority."
      />
    );
  }

  return (
    <ul className="flex max-h-96 flex-col divide-y divide-border overflow-y-auto">
      {lessons.map((lesson) => (
        <li key={lesson.slug} className="flex items-center justify-between gap-3 py-2.5">
          <span className="min-w-0 truncate text-sm">{lesson.title}</span>
          <Select
            value={lesson.confidence ? String(lesson.confidence) : undefined}
            onValueChange={(value) => rate(lesson.slug, value)}
            disabled={savingSlug === lesson.slug}
          >
            <SelectTrigger className="h-8 w-36 text-xs" aria-label={`Confidence for ${lesson.title}`}>
              <SelectValue placeholder="Rate yourself" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(CONFIDENCE_LABELS).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </li>
      ))}
    </ul>
  );
}

export function RevisionTab({
  overview,
  onRefresh,
}: {
  overview: ProgressOverviewDto;
  onRefresh: () => void;
}) {
  const { revision } = overview;
  const nothingScheduled = revision.due.length === 0 && revision.soon.length === 0;

  return (
    <div className="flex flex-col gap-6">
      <SectionCard title="How your revision is scheduled" icon={Info}>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>
            The scheduler looks at five things for every item you have practised:{" "}
            <span className="font-medium text-foreground">previous performance</span>,{" "}
            <span className="font-medium text-foreground">number of attempts</span>,{" "}
            <span className="font-medium text-foreground">time since your last revision</span>,{" "}
            <span className="font-medium text-foreground">difficulty</span> and your{" "}
            <span className="font-medium text-foreground">self-reported confidence</span>.
          </p>
          <p>
            Vocabulary follows the spaced-repetition engine; everything else is re-scheduled when
            scores drop, confidence is low, or too much time has passed. Nothing is scheduled for
            content you have only opened.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="Due now"
        icon={CalendarClock}
        action={
          <span className="text-xs text-muted-foreground">
            {revision.counts.due} item{revision.counts.due === 1 ? "" : "s"}
          </span>
        }
      >
        {revision.due.length === 0 ? (
          <EmptyState
            title="Nothing due right now"
            body="You are on top of your revision. New items appear here when words come due, scores dip, or confidence drops."
          />
        ) : (
          <div className="flex flex-col gap-3">
            {revision.due.map((item) => (
              <RevisionRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </SectionCard>

      <SectionCard
        title="Coming up"
        icon={CalendarClock}
        action={
          <span className="text-xs text-muted-foreground">
            {revision.counts.soon} item{revision.counts.soon === 1 ? "" : "s"}
          </span>
        }
      >
        {revision.soon.length === 0 ? (
          <EmptyState
            title="Nothing scheduled ahead"
            body="Maintenance items — re-reading good texts, keeping speaking warm — appear here as your history grows."
          />
        ) : (
          <div className="flex flex-col gap-3">
            {revision.soon.map((item) => (
              <RevisionRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </SectionCard>

      <SectionCard title="How confident do you feel?" icon={Star}>
        <p className="mb-3 text-xs text-muted-foreground">
          Your own rating — never shown as a performance score, and never shared. It only helps the
          scheduler decide what to bring back and when.
        </p>
        <ConfidencePanel lessons={revision.confidenceLessons} onSaved={onRefresh} />
      </SectionCard>
    </div>
  );
}
