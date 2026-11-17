"use client";

/**
 * Skills tab — every major skill gets its own honest progress profile:
 * practice volume, accuracy (only where objectively graded), completion,
 * trend, strengths, focus areas and caveats. A learner with strong reading
 * and weak speaking sees exactly that — no blended "English score".
 */

import {
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Crosshair, Lightbulb, Minus } from "lucide-react";
import type { ProgressOverviewDto, SkillProfile } from "@/data/progress";
import { EmptyState, SectionCard, SKILL_COLORS, StatusBadge, TrendBadge } from "./bits";

function practiceMixRadar(skills: SkillProfile[]) {
  const max = Math.max(...skills.map((s) => s.practiceEvents), 10);
  return skills.map((s) => ({
    skill: s.label,
    events: s.practiceEvents,
    // Radar with a shared 0-max scale: shows where practice TIME goes.
    level: Math.round((s.practiceEvents / max) * 100),
  }));
}

function AccuracyLine({ profile }: { profile: SkillProfile }) {
  if (!profile.accuracy) return <span className="text-sm text-muted-foreground">—</span>;
  const { correct, total, pct, basis } = profile.accuracy;
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-2xl font-bold tabular-nums">{pct}%</span>
      <span className="text-xs text-muted-foreground">
        {correct}/{total} · {basis}
      </span>
    </div>
  );
}

function SkillCard({ profile }: { profile: SkillProfile }) {
  const color = SKILL_COLORS[profile.skill];
  return (
    <div className="flex flex-col gap-3 rounded-xl border p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="size-3 rounded-full" style={{ background: color }} aria-hidden />
          <h3 className="font-semibold">{profile.label}</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <TrendBadge trend={profile.trend} />
          <StatusBadge status={profile.status} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Accuracy</p>
          <div className="mt-0.5">
            <AccuracyLine profile={profile} />
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Practice</p>
          <p className="mt-0.5 text-2xl font-bold tabular-nums">{profile.practiceEvents}</p>
          <p className="text-xs text-muted-foreground">
            {profile.daysSinceActive === null
              ? "never practised"
              : profile.daysSinceActive === 0
                ? "active today"
                : `last active ${profile.daysSinceActive} day${profile.daysSinceActive === 1 ? "" : "s"} ago`}
          </p>
        </div>
      </div>

      {profile.completion && profile.completion.total > 0 ? (
        <div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{profile.completion.label}</span>
            <span className="tabular-nums text-muted-foreground">
              {profile.completion.done}/{profile.completion.total}
            </span>
          </div>
          <Progress
            className="mt-1.5 h-1.5"
            value={(profile.completion.done / profile.completion.total) * 100}
          />
        </div>
      ) : null}

      {profile.strengths.length > 0 ? (
        <ul className="flex flex-col gap-1">
          {profile.strengths.map((strength) => (
            <li key={strength} className="flex items-start gap-1.5 text-xs">
              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {profile.focus.length > 0 ? (
        <ul className="flex flex-col gap-1">
          {profile.focus.map((focus) => (
            <li key={focus} className="flex items-start gap-1.5 text-xs">
              <Crosshair className="mt-0.5 size-3.5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
              <span>{focus}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {profile.status === "not-started" ? (
        <div className="flex items-start gap-1.5 rounded-lg bg-muted/50 p-2.5 text-xs text-muted-foreground">
          <Minus className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>No verified practice yet — this skill is shown as “not started”, never as 0%.</span>
        </div>
      ) : null}

      {profile.notes.map((note) => (
        <p key={note} className="flex items-start gap-1.5 rounded-lg bg-secondary p-2.5 text-xs leading-relaxed text-muted-foreground">
          <Lightbulb className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>{note}</span>
        </p>
      ))}
    </div>
  );
}

export function SkillsTab({ overview }: { overview: ProgressOverviewDto }) {
  const radarData = practiceMixRadar(overview.skills);
  const hasAnyActivity = overview.skills.some((s) => s.practiceEvents > 0);

  return (
    <div className="flex flex-col gap-6">
      <SectionCard title="Where your practice goes" icon={Crosshair}>
        {!hasAnyActivity ? (
          <EmptyState
            title="No practice data yet"
            body="The chart shows how your verified practice is spread across skills. Start any activity and it will appear here."
          />
        ) : (
          <>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="78%">
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
                  <Radar
                    dataKey="level"
                    name="Practice share"
                    stroke="var(--color-primary)"
                    fill="var(--color-primary)"
                    fillOpacity={0.35}
                  />
                  <Tooltip
                    formatter={(value: number | string) => [`${value}`, "Relative practice"]}
                    contentStyle={{ fontSize: 12, borderRadius: 8 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Each axis is this skill&apos;s verified practice compared with your most-practised skill.
              It shows where your <span className="font-semibold">time</span> goes — not how good you are.
            </p>
          </>
        )}
      </SectionCard>

      <div className="grid gap-4 lg:grid-cols-2">
        {overview.skills.map((profile) => (
          <SkillCard key={profile.skill} profile={profile} />
        ))}
      </div>
    </div>
  );
}
