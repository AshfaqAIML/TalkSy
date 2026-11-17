"use client";

/**
 * Personalized examination study planner.
 *
 * One page, one honest pipeline:
 *   1. Initial assessment — exam, version, proficiency, target, date,
 *      daily time, weakest & strongest sections, previous sittings.
 *   2. Baseline diagnostic — per-section estimates with evidence basis and
 *      ranked weaknesses ("most important" called out).
 *   3. The plan — duration of the learner's choosing (7/14/30/60/90/
 *      custom), phases, day-by-day tasks with time estimates, deep links
 *      into existing content, completion tracking, rest days.
 *   4. Adaptation — recent mock evidence re-weights future days; improved
 *      sections step up in difficulty; with no signal it says so.
 *   5. Target monitoring & readiness — estimate vs target, gap analysis,
 *      section readiness, completion, recent mocks, next steps, and the
 *      mandated honesty copy (no guarantees, mocks are not official).
 *   6. Reminders — in-app while a tab is open, scope stated openly.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  AlarmClock,
  ArrowRight,
  BellRing,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Circle,
  ClipboardCheck,
  Clock,
  Gauge,
  ListChecks,
  Plus,
  RefreshCw,
  Sparkles,
  Stethoscope,
  Target,
  TrendingDown,
  TrendingUp,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi } from "@/lib/client/exam-api";
import { buildNotificationFeed } from "@/lib/exams/planner/notifications";
import type {
  NotificationCategory,
  NotificationPrefDto,
  PlannerDayDto,
  PlannerNotificationsDto,
  PlannerPlanDto,
  PlannerStateDto,
  PlannerTaskDto,
  PreviousAttempt,
  ScoreGapDto,
} from "@/lib/exams/planner/types";
import {
  NOTIFICATION_ANTI_SPAM_NOTE,
  NOTIFICATION_CATEGORY_DESCRIPTIONS,
  NOTIFICATION_CATEGORY_LABELS,
  PLANNER_NO_GUARANTEE_NOTE,
  PLANNER_REMINDER_SCOPE_NOTE,
} from "@/lib/exams/planner/types";

const SECTIONS = ["listening", "reading", "writing", "speaking"] as const;
type Section = (typeof SECTIONS)[number];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DURATION_PRESETS = [7, 14, 30, 45, 60, 90] as const;

const SECTION_LABELS: Record<string, string> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
};

const TREND_META: Record<
  string,
  { label: string; className: string; icon: "up" | "down" | "steady" | "unknown" }
> = {
  improving: { label: "Improving", className: "border-emerald-500/40 text-emerald-300", icon: "up" },
  steady: { label: "Steady", className: "border-sky-500/40 text-sky-300", icon: "steady" },
  declining: { label: "Declining", className: "border-red-500/40 text-red-300", icon: "down" },
  insufficient_data: { label: "Not enough data", className: "border-slate-600 text-slate-400", icon: "unknown" },
};

const TYPE_CHIP_STYLES: Record<string, string> = {
  vocabulary: "border-sky-500/40 text-sky-300 bg-sky-500/10",
  grammar: "border-violet-500/40 text-violet-300 bg-violet-500/10",
  reading: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
  listening: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
  writing: "border-amber-500/40 text-amber-300 bg-amber-500/10",
  speaking: "border-rose-500/40 text-rose-300 bg-rose-500/10",
  mock_exam: "border-orange-500/50 text-orange-300 bg-orange-500/10",
  mistake_revision: "border-red-500/40 text-red-300 bg-red-500/10",
  diagnostic: "border-teal-500/40 text-teal-300 bg-teal-500/10",
  lesson: "border-indigo-500/40 text-indigo-300 bg-indigo-500/10",
  review: "border-slate-500/40 text-slate-300 bg-slate-500/10",
};

const READINESS_STYLES: Record<string, string> = {
  NEEDS_FOUNDATIONAL_PREPARATION: "border-red-500/50 bg-red-500/10 text-red-300",
  DEVELOPING: "border-amber-500/50 bg-amber-500/10 text-amber-300",
  APPROACHING_TARGET: "border-sky-500/50 bg-sky-500/10 text-sky-300",
  CONSISTENTLY_PERFORMING_NEAR_TARGET: "border-emerald-500/50 bg-emerald-500/10 text-emerald-300",
};

// ---------------------------------------------------------------------------
// Coach notifications (fire while a tab is open — honestly scoped, capped)
// ---------------------------------------------------------------------------

function useCoachNotifications(state: PlannerStateDto | null) {
  const notifications = state?.notifications ?? null;
  const profile = state?.profile ?? null;
  const plan = state?.plan ?? null;
  // Keep a stable reference for the interval tick (updated post-render).
  const latest = useRef({ notifications, profile, plan });
  useEffect(() => {
    latest.current = { notifications, profile, plan };
  }, [notifications, profile, plan]);

  useEffect(() => {
    const fire = () => {
      const { notifications: prefsState, profile: profileDto, plan: planDto } = latest.current;
      if (!prefsState || !profileDto) return;
      const feed = buildNotificationFeed({
        now: new Date(),
        prefs: prefsState.prefs,
        plan: planDto,
        profile: {
          examDate: profileDto.examDate,
          examName: profileDto.examName,
          targetScore: profileDto.targetScore,
        },
        lastFiredAt: null, // localStorage below enforces the daily cap
      });
      const today = new Date().toISOString().slice(0, 10);
      for (const item of feed) {
        const key = `coach-notif-${item.category}-${today}`;
        try {
          if (localStorage.getItem(key)) continue;
          localStorage.setItem(key, "1");
        } catch {
          return;
        }
        toast(item.title, { description: item.body });
        if (typeof Notification !== "undefined" && Notification.permission === "granted") {
          new Notification("EnglishPath study coach", { body: `${item.title} — ${item.body}` });
        }
      }
    };
    fire();
    const timer = setInterval(fire, 30_000);
    return () => clearInterval(timer);
  }, []);
}

// ---------------------------------------------------------------------------
// View
// ---------------------------------------------------------------------------

export function ExamPlannerView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [state, setState] = useState<PlannerStateDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [setupOpen, setSetupOpen] = useState(false);

  useCoachNotifications(state);

  const reload = useCallback(async () => {
    const response = await examApi.planner();
    if (response.ok) setState(response.data.planner);
    setLoading(false);
  }, []);

  useEffect(() => {
    void (async () => {
      await reload();
    })();
  }, [reload]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl bg-slate-900" />
          ))}
        </div>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-24 text-center text-slate-300">
        Could not load the planner. Please try again.
      </div>
    );
  }

  if (!state.onboarded || !state.profile) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Set your exam goals first</h2>
        <p className="max-w-md text-slate-400">
          The planner builds around your exam, target score, exam date and daily study
          time. Two minutes of onboarding and it is ready.
        </p>
        <Button
          className="bg-amber-400 text-slate-950 hover:bg-amber-300"
          onClick={() => navigate({ name: "exams-onboarding" })}
        >
          Start onboarding <ArrowRight className="ml-1 size-4" aria-hidden />
        </Button>
      </div>
    );
  }

  const { profile, baseline, plan, readiness, scoreGap, notifications, adaptation } = state;
  const showSetup = !plan || setupOpen;

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Study planner</h1>
              {plan ? (
                <Badge variant="outline" className="border-amber-500/40 text-amber-300">
                  {`${plan.effectiveDays}-day plan`}
                </Badge>
              ) : null}
              {profile.examName ? (
                <Badge variant="outline" className="border-slate-700 text-slate-300">
                  {profile.examName}
                </Badge>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-400">
              Target {profile.targetScore.toFixed(1)}
              {profile.examDate ? ` · exam ${profile.examDate}` : " · no exam date set"} ·{" "}
              {profile.dailyMinutes} min/day
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-dashboard" })}
            >
              <Gauge className="size-3.5" aria-hidden /> Dashboard
            </Button>
            {plan ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
                  onClick={async () => {
                    setSetupOpen(true);
                  }}
                >
                  <Plus className="size-3.5" aria-hidden /> New plan
                </Button>
              </>
            ) : null}
          </div>
        </div>

        {showSetup ? (
          <PlannerSetup
            profile={profile}
            hasPlan={Boolean(plan)}
            onCancel={plan ? () => setSetupOpen(false) : null}
            onGenerated={async () => {
              setSetupOpen(false);
              await reload();
              toast.success("Plan generated — day 1 starts today.");
            }}
            navigate={navigate}
          />
        ) : null}

        {baseline ? <BaselineCard baseline={baseline} maxScore={profile.maxSectionScore} /> : null}

        {scoreGap ? <ScoreGapCard scoreGap={scoreGap} /> : null}

        {plan ? (
          <PlanCard
            plan={plan}
            adaptation={adaptation}
            onChanged={reload}
          />
        ) : null}

        {readiness ? <ReadinessCard readiness={readiness} plan={plan} navigate={navigate} /> : null}

        {notifications ? (
          <NotificationsCard notifications={notifications} onChanged={reload} />
        ) : (
          <ReminderCard plan={plan} onChanged={reload} />
        )}

        <p className="pb-4 text-xs leading-relaxed text-slate-500">{PLANNER_NO_GUARANTEE_NOTE}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Initial assessment + plan generation
// ---------------------------------------------------------------------------

function PlannerSetup({
  profile,
  hasPlan,
  onCancel,
  onGenerated,
  navigate,
}: {
  profile: NonNullable<PlannerStateDto["profile"]>;
  hasPlan: boolean;
  onCancel: (() => void) | null;
  onGenerated: () => void | Promise<void>;
  navigate: (route: AppRoute) => void;
}) {
  const [duration, setDuration] = useState<number>(14);
  const [customDays, setCustomDays] = useState<string>("");
  const [strongest, setStrongest] = useState<Section | "">( (profile.strongestSection as Section) ?? "");
  const [weakest, setWeakest] = useState<Section | "">((profile.difficultSections[0] as Section) ?? "");
  const [dailyMinutes, setDailyMinutes] = useState<string>(String(profile.dailyMinutes));
  const [targetScore, setTargetScore] = useState<string>(profile.targetScore.toFixed(1));
  const [currentScore, setCurrentScore] = useState<string>(
    profile.currentScoreEstimate !== null && profile.currentScoreEstimate !== undefined
      ? profile.currentScoreEstimate.toFixed(1)
      : "",
  );
  const [examDate, setExamDate] = useState<string>(profile.examDate ?? "");
  const [previousAttempts, setPreviousAttempts] = useState<PreviousAttempt[]>(
    profile.previousAttempts ?? [],
  );
  const [reminderTime, setReminderTime] = useState<string>("19:30");
  const [reminderDays, setReminderDays] = useState<number[]>([1, 2, 3, 4, 5]);
  const [saving, setSaving] = useState(false);

  const effectiveDuration = duration === -1 ? Number(customDays) : duration;
  const durationValid =
    duration !== -1 || (Number.isInteger(effectiveDuration) && effectiveDuration >= 3 && effectiveDuration <= 120);

  const generate = async () => {
    if (!durationValid) {
      toast.error("Custom duration must be a whole number of days between 3 and 120.");
      return;
    }
    setSaving(true);
    try {
      // Initial assessment fields live on the exam profile — update them
      // first so the plan is generated from what the learner just entered.
      const profileResponse = await examApi.saveProfile({
        targetScore: Number(targetScore),
        currentScoreEstimate: currentScore.trim() === "" ? null : Number(currentScore),
        examDate: examDate || null,
        dailyMinutes: Math.max(10, Math.min(480, Number(dailyMinutes) || 30)),
        difficultSections: weakest ? [weakest] : [],
        strongestSection: strongest || null,
        previousAttempts,
      });
      if (!profileResponse.ok) {
        toast.error("Could not save your assessment — check the values.");
        return;
      }
      const response = await examApi.plannerGenerate({
        durationDays: effectiveDuration as number,
        reminderTime,
        reminderDays,
        strongestSection: strongest || null,
        previousAttempts,
      });
      if (!response.ok) {
        toast.error("Could not generate the plan — please try again.");
        return;
      }
      await onGenerated();
    } finally {
      setSaving(false);
    }
  };

  const toggleDay = (day: number) => {
    setReminderDays((current) =>
      current.includes(day) ? current.filter((entry) => entry !== day) : [...current, day].sort(),
    );
  };

  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <ClipboardCheck className="size-4 text-amber-400" aria-hidden />
          {hasPlan ? "Generate a new plan" : "Initial assessment & plan setup"}
        </CardTitle>
        <p className="text-sm text-slate-400">
          Everything the planner needs: your exam, target, date, daily time and where you
          are strong or weak. The plan adapts to these inputs — two learners with
          different answers get different plans.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Exam identity (read-only; onboarding owns it) */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Examination</p>
            <p className="mt-1 text-sm font-medium text-slate-200">{profile.examName ?? profile.examKey}</p>
            <p className="text-xs text-slate-500">Level {profile.proficiency} · change via onboarding</p>
            <Button
              variant="link"
              size="sm"
              className="h-auto p-0 text-amber-300"
              onClick={() => navigate({ name: "exams-onboarding" })}
            >
              Change exam or level
            </Button>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Previous examinations</p>
            {previousAttempts.length === 0 ? (
              <p className="mt-1 text-xs text-slate-500">
                None recorded. Add any real sittings — the planner uses them as context, never as promises.
              </p>
            ) : (
              <ul className="mt-1 space-y-1">
                {previousAttempts.map((attempt, index) => (
                  <li key={index} className="flex items-center justify-between gap-2 text-xs text-slate-300">
                    <span>
                      {`${attempt.exam} — ${attempt.overall.toFixed(1)}${attempt.date ? ` (${attempt.date})` : ""}`}
                    </span>
                    <button
                      type="button"
                      aria-label={`Remove previous attempt ${attempt.exam}`}
                      onClick={() => setPreviousAttempts((current) => current.filter((_, i) => i !== index))}
                      className="text-slate-500 hover:text-red-300"
                    >
                      <Trash2 className="size-3.5" aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <AddPreviousAttempt onAdd={(entry) => setPreviousAttempts((current) => [...current, entry])} />
          </div>
        </div>

        {/* Editable numbers */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1.5">
            <Label htmlFor="planner-target" className="text-xs text-slate-400">Target score</Label>
            <Input
              id="planner-target"
              value={targetScore}
              onChange={(event) => setTargetScore(event.target.value)}
              inputMode="decimal"
              aria-label="Target score"
              className="border-slate-700 bg-slate-950"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="planner-current" className="text-xs text-slate-400">
              Current score — self-estimate (optional)
            </Label>
            <Input
              id="planner-current"
              value={currentScore}
              onChange={(event) => setCurrentScore(event.target.value)}
              inputMode="decimal"
              placeholder="e.g. 5.5"
              aria-label="Current estimated score"
              className="border-slate-700 bg-slate-950"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="planner-date" className="text-xs text-slate-400">Examination date (optional)</Label>
            <Input
              id="planner-date"
              type="date"
              value={examDate}
              onChange={(event) => setExamDate(event.target.value)}
              aria-label="Examination date"
              className="border-slate-700 bg-slate-950"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="planner-minutes" className="text-xs text-slate-400">Daily study time (minutes)</Label>
            <Input
              id="planner-minutes"
              value={dailyMinutes}
              onChange={(event) => setDailyMinutes(event.target.value)}
              inputMode="numeric"
              aria-label="Daily study time in minutes"
              className="border-slate-700 bg-slate-950"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="planner-reminder-time" className="text-xs text-slate-400">Daily reminder (browser tab open)</Label>
            <Input
              id="planner-reminder-time"
              type="time"
              value={reminderTime}
              onChange={(event) => setReminderTime(event.target.value)}
              aria-label="Daily reminder time"
              className="border-slate-700 bg-slate-950"
            />
          </div>
        </div>

        {/* Strongest / weakest */}
        <div className="grid gap-4 sm:grid-cols-2">
          <SectionPicker
            label="Weakest section (gets the most practice)"
            value={weakest}
            onChange={setWeakest}
            allowEmpty
          />
          <SectionPicker
            label="Strongest section (gets the least, never zero)"
            value={strongest}
            onChange={setStrongest}
            allowEmpty
          />
        </div>

        {/* Reminder weekdays */}
        <div className="space-y-1.5">
          <p className="text-xs text-slate-400">Reminder days</p>
          <div className="flex flex-wrap gap-1.5">
            {WEEKDAYS.map((day, index) => (
              <button
                key={day}
                type="button"
                aria-pressed={reminderDays.includes(index)}
                aria-label={`Remind on ${day}`}
                onClick={() => toggleDay(index)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  reminderDays.includes(index)
                    ? "border-amber-400 bg-amber-400/15 text-amber-300"
                    : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500",
                )}
              >
                {day}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Reminders appear while EnglishPath is open in a browser tab (with optional
            desktop notifications) — they are not push notifications.
          </p>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <p className="text-xs text-slate-400">Plan duration</p>
          <div className="flex flex-wrap gap-2">
            {DURATION_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                aria-pressed={duration === preset}
                onClick={() => setDuration(preset)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                  duration === preset
                    ? "border-amber-400 bg-amber-400/15 text-amber-300"
                    : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500",
                )}
              >
                {preset} days
              </button>
            ))}
            <button
              type="button"
              aria-pressed={duration === -1}
              onClick={() => setDuration(-1)}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                duration === -1
                  ? "border-amber-400 bg-amber-400/15 text-amber-300"
                  : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500",
              )}
            >
              Custom
            </button>
          </div>
          {duration === -1 ? (
            <div className="flex items-center gap-2">
              <Input
                value={customDays}
                onChange={(event) => setCustomDays(event.target.value)}
                inputMode="numeric"
                placeholder="Days (3–120)"
                aria-label="Custom plan duration in days"
                className="w-44 border-slate-700 bg-slate-950"
              />
              <span className="text-xs text-slate-500">whole days, 3–120</span>
            </div>
          ) : null}
          <p className="text-xs text-slate-500">
            If your exam date arrives sooner, the plan honestly ends on that day instead.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            className="bg-amber-400 text-slate-950 hover:bg-amber-300"
            disabled={saving || !durationValid}
            onClick={() => void generate()}
          >
            {saving ? "Generating…" : hasPlan ? "Generate new plan" : "Generate my plan"}
            <ArrowRight className="ml-1 size-4" aria-hidden />
          </Button>
          {onCancel ? (
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400"
              onClick={onCancel}
            >
              Keep current plan
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

function AddPreviousAttempt({ onAdd }: { onAdd: (entry: PreviousAttempt) => void }) {
  const [exam, setExam] = useState("");
  const [overall, setOverall] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <Input
        value={exam}
        onChange={(event) => setExam(event.target.value)}
        placeholder="Exam (e.g. IELTS)"
        aria-label="Previous examination name"
        className="h-8 w-36 border-slate-700 bg-slate-950 text-xs"
      />
      <Input
        value={overall}
        onChange={(event) => setOverall(event.target.value)}
        placeholder="Score"
        inputMode="decimal"
        aria-label="Previous examination overall score"
        className="h-8 w-20 border-slate-700 bg-slate-950 text-xs"
      />
      <Input
        value={date}
        onChange={(event) => setDate(event.target.value)}
        placeholder="When (e.g. 2025-06)"
        aria-label="Previous examination date"
        className="h-8 w-28 border-slate-700 bg-slate-950 text-xs"
      />
      <Button
        variant="outline"
        size="sm"
        className="h-8 border-slate-700 bg-transparent text-xs text-slate-300 hover:bg-slate-900"
        disabled={!exam.trim() || !overall.trim()}
        onClick={() => {
          const score = Number(overall);
          if (!Number.isFinite(score)) {
            toast.error("Score must be a number.");
            return;
          }
          onAdd({ exam: exam.trim(), overall: score, date: date.trim() || undefined });
          setExam("");
          setOverall("");
          setDate("");
        }}
      >
        <Plus className="size-3.5" aria-hidden /> Add
      </Button>
    </div>
  );
}

function SectionPicker({
  label,
  value,
  onChange,
  allowEmpty,
}: {
  label: string;
  value: Section | "";
  onChange: (value: Section | "") => void;
  allowEmpty?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {allowEmpty ? (
          <button
            type="button"
            aria-pressed={value === ""}
            aria-label="No section selected"
            onClick={() => onChange("")}
            className={cn(
              "rounded-full border px-3 py-1 text-xs capitalize transition-colors",
              value === ""
                ? "border-amber-400 bg-amber-400/15 text-amber-300"
                : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500",
            )}
          >
            Not sure
          </button>
        ) : null}
        {SECTIONS.map((section) => (
          <button
            key={section}
            type="button"
            aria-pressed={value === section}
            aria-label={section}
            onClick={() => onChange(value === section ? "" : section)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs capitalize transition-colors",
              value === section
                ? "border-amber-400 bg-amber-400/15 text-amber-300"
                : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500",
            )}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Baseline diagnostic
// ---------------------------------------------------------------------------

function BaselineCard({
  baseline,
  maxScore,
}: {
  baseline: NonNullable<PlannerStateDto["baseline"]>;
  maxScore: number;
}) {
  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <Stethoscope className="size-4 text-amber-400" aria-hidden /> Baseline diagnostic
        </CardTitle>
        <p className="text-sm text-slate-400">{baseline.note}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {baseline.sections.map((section) => (
            <div key={section.section} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium capitalize text-slate-200">{section.section}</span>
                <span className="text-sm font-bold text-amber-300">{section.estimated.toFixed(1)}</span>
              </div>
              <Progress
                value={(section.estimated / maxScore) * 100}
                className="mt-2 h-1.5 bg-slate-800"
              />
              <p className="mt-2 text-xs text-slate-500">{section.evidenceNote}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <Badge variant="outline" className="border-slate-700 text-[10px] text-slate-400">
                  {`Evidence: ${section.basis}`}
                </Badge>
                <Badge variant="outline" className="border-slate-700 text-[10px] text-slate-400">
                  {`Confidence ${Math.round(section.confidence * 100)}%`}
                </Badge>
              </div>
              {section.diagnosticAction ? (
                <a
                  href={section.diagnosticAction.href}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200"
                >
                  {section.diagnosticAction.title}
                  <ChevronRight className="size-3.5" aria-hidden />
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Ranked weaknesses (largest gap first)
          </p>
          <ul className="mt-2 space-y-1.5">
            {baseline.rankedWeaknesses.map((weakness) => (
              <li
                key={weakness.section}
                className="flex items-center justify-between gap-3 rounded-lg bg-slate-950 px-3 py-2 text-xs"
              >
                <span className="capitalize text-slate-200">{weakness.section}</span>
                <span className="flex-1 text-right text-slate-500">{weakness.note}</span>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px]",
                    weakness.priority === "high"
                      ? "border-red-500/40 text-red-300"
                      : weakness.priority === "medium"
                        ? "border-amber-500/40 text-amber-300"
                        : "border-emerald-500/40 text-emerald-300",
                  )}
                >
                  {weakness.priority} priority
                </Badge>
              </li>
            ))}
          </ul>
          {baseline.mostImportant ? (
            <div className="mt-3 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-sm text-amber-200">
              <span className="font-semibold">Most important weakness: </span>
              <span className="capitalize">{baseline.mostImportant.section}</span> —{" "}
              {baseline.mostImportant.note}
            </div>
          ) : null}
        </div>

        {/* PROMPT 53 §2 — weakness areas (grammar, vocabulary, skills, time) */}
        {baseline.weaknessAreas && baseline.weaknessAreas.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Weakness areas — what the evidence says
            </p>
            <div className="mt-2 grid gap-2 lg:grid-cols-2">
              {baseline.weaknessAreas.map((area) => (
                <div
                  key={area.key}
                  className="rounded-lg border border-slate-800 bg-slate-950 p-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-200">{area.label}</span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px]",
                        area.priority === "high"
                          ? "border-red-500/40 text-red-300"
                          : area.priority === "medium"
                            ? "border-amber-500/40 text-amber-300"
                            : area.priority === "low"
                              ? "border-sky-500/40 text-sky-300"
                              : "border-emerald-500/40 text-emerald-300",
                      )}
                    >
                      {area.priority === "clear" ? "clear" : `${area.priority} priority`}
                    </Badge>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-400">
                    {area.findings.map((finding, index) => (
                      <li key={index} className="flex gap-1.5">
                        <span className="text-slate-600" aria-hidden>•</span>
                        {finding}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[10px] uppercase tracking-wide text-slate-600">
                    Sources: {area.sources.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// The plan (phases, today, day list, adaptation)
// ---------------------------------------------------------------------------

function PlanCard({
  plan,
  adaptation,
  onChanged,
}: {
  plan: PlannerPlanDto;
  adaptation: PlannerStateDto["adaptation"];
  onChanged: () => Promise<void>;
}) {
  const [localPlan, setLocalPlan] = useState(plan);
  const [adapting, setAdapting] = useState(false);
  const [adaptMessage, setAdaptMessage] = useState<string | null>(null);

  useEffect(() => {
    setLocalPlan(plan);
  }, [plan]);

  const todayDay =
    localPlan.days.find((day) => day.dayIndex === localPlan.todayDayIndex) ??
    localPlan.days.find((day) => day.date === new Date().toISOString().slice(0, 10)) ??
    null;

  const toggleTask = async (task: PlannerTaskDto) => {
    const next = task.status === "done" ? "todo" : "done";
    // Optimistic toggle.
    setLocalPlan((current) => ({
      ...current,
      days: current.days.map((day) => ({
        ...day,
        tasks: day.tasks.map((entry) => (entry.id === task.id ? { ...entry, status: next } : entry)),
      })),
    }));
    const response = await examApi.plannerTask(task.id, next);
    if (!response.ok) {
      toast.error("Could not update the task.");
      await onChanged();
    }
  };

  const adapt = async () => {
    setAdapting(true);
    setAdaptMessage(null);
    try {
      const response = await examApi.plannerAdapt();
      if (!response.ok) {
        toast.error("Could not adapt the plan.");
        return;
      }
      if (response.data.noChangeReason) {
        setAdaptMessage(response.data.noChangeReason);
        toast.info("No changes needed", { description: response.data.noChangeReason });
      } else {
        setAdaptMessage(response.data.changes.join(" "));
        toast.success("Plan adapted", {
          description: response.data.changes[0] ?? "Future days were rescheduled.",
        });
      }
      await onChanged();
    } finally {
      setAdapting(false);
    }
  };

  const weeks = useMemo(() => {
    const grouped = new Map<number, PlannerDayDto[]>();
    for (const day of localPlan.days) {
      const week = Math.floor((day.dayIndex - 1) / 7) + 1;
      grouped.set(week, [...(grouped.get(week) ?? []), day]);
    }
    return [...grouped.entries()].sort((a, b) => a[0] - b[0]);
  }, [localPlan.days]);

  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="flex items-center gap-2 text-base text-white">
            <CalendarDays className="size-4 text-amber-400" aria-hidden /> My study plan
          </CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            {adaptation?.suggested ? (
              <Badge variant="outline" className="border-sky-500/50 text-sky-300">
                New mock evidence — adapt recommended
              </Badge>
            ) : null}
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
              disabled={adapting}
              onClick={() => void adapt()}
            >
              <RefreshCw className={cn("size-3.5", adapting && "animate-spin")} aria-hidden />
              {adapting ? "Adapting…" : "Adapt my plan"}
            </Button>
          </div>
        </div>

        {/* Phase strip */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
          {localPlan.meta.phases.map((phase, index) => (
            <span key={phase.key} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight className="size-3 text-slate-600" aria-hidden /> : null}
              <span
                className={cn(
                  "rounded-full border px-2.5 py-1",
                  phase.key === "mock_cycle"
                    ? "border-orange-500/40 text-orange-300"
                    : phase.key === "final_review"
                      ? "border-emerald-500/40 text-emerald-300"
                      : phase.key === "foundation"
                        ? "border-slate-600 text-slate-300"
                        : "border-sky-500/40 text-sky-300",
                )}
              >
                {`${phase.label} · days ${phase.fromDay}–${phase.toDay}`}
              </span>
            </span>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              {`Day ${localPlan.todayDayIndex ?? localPlan.progress.daysElapsed} of ${localPlan.progress.daysTotal} · ${localPlan.startDate} → ${localPlan.endDate}`}
            </span>
            <span>
              {`${localPlan.progress.tasksDone + localPlan.progress.tasksSkipped}/${localPlan.progress.tasksTotal} tasks · ${localPlan.progress.percent}%`}
            </span>
          </div>
          <Progress value={localPlan.progress.percent} className="mt-1.5 h-2 bg-slate-800" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Adaptation history + last result */}
        {adaptMessage || localPlan.meta.adaptations.length > 0 ? (
          <div className="rounded-lg border border-sky-500/30 bg-sky-500/5 p-3 text-xs text-sky-200">
            <p className="font-semibold">Adaptive updates</p>
            {adaptMessage ? <p className="mt-1 leading-relaxed">{adaptMessage}</p> : null}
            {localPlan.meta.adaptations.map((entry, index) => (
              <p key={index} className="mt-1 leading-relaxed text-slate-400">
                {new Date(entry.at).toLocaleDateString()}: {entry.changes.join(" ")}
              </p>
            ))}
          </div>
        ) : null}

        {/* Today */}
        {todayDay ? (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-amber-200">
                Today — Day {todayDay.dayIndex}: {todayDay.focus}
              </p>
              <span className="text-xs text-slate-400">
                {`${todayDay.minutes} min planned · ${todayDay.doneCount}/${todayDay.tasks.length} done`}
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {todayDay.tasks.map((task) => (
                <TaskRow key={task.id} task={task} onToggle={() => void toggleTask(task)} />
              ))}
              {todayDay.tasks.length === 0 ? (
                <p className="text-xs text-slate-500">Nothing scheduled today.</p>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Honesty notes */}
        {localPlan.meta.notes.length > 0 ? (
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Plan notes
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-400">
              {localPlan.meta.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Day list grouped by week */}
        <div className="space-y-4">
          {weeks.map(([week, days]) => (
            <div key={week}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Week {week} · days {days[0].dayIndex}–{days[days.length - 1].dayIndex}
              </p>
              <div className="space-y-2">
                {days.map((day) => (
                  <DayCollapsible
                    key={day.id}
                    day={day}
                    defaultOpen={day.dayIndex === todayDay?.dayIndex}
                    onToggleTask={(task) => void toggleTask(task)}
                    refresh={onChanged}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DayCollapsible({
  day,
  defaultOpen,
  onToggleTask,
  refresh,
}: {
  day: PlannerDayDto;
  defaultOpen: boolean;
  onToggleTask: (task: PlannerTaskDto) => void;
  refresh: () => Promise<void>;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isPast = day.doneCount === day.tasks.length && day.tasks.length > 0;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "rounded-lg border",
          day.isRestDay
            ? "border-slate-800 bg-slate-950/50"
            : "border-slate-800 bg-slate-950",
        )}
      >
        <CollapsibleTrigger
          className="flex w-full items-center justify-between gap-3 p-3 text-left"
          aria-expanded={open}
          aria-label={`Day ${day.dayIndex}, ${day.date}, ${day.focus}`}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className={cn("text-sm font-medium", isPast ? "text-slate-400" : "text-slate-100")}>
                Day {day.dayIndex}
              </span>
              <span className="text-xs text-slate-500">{day.date}</span>
              <Badge variant="outline" className="border-slate-700 text-[10px] text-slate-400">
                {day.phaseLabel}
              </Badge>
            </div>
            <p className="mt-0.5 truncate text-xs text-slate-500">{day.focus}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
            <span>{day.minutes}m</span>
            <span>
              {day.doneCount}/{day.tasks.length}
            </span>
            <ChevronRight
              className={cn("size-4 transition-transform", open && "rotate-90")}
              aria-hidden
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-2 border-t border-slate-800 p-3">
            {day.tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onToggle={() => {
                  onToggleTask(task);
                  void refresh;
                }}
              />
            ))}
            {day.tasks.length === 0 ? (
              <p className="text-xs text-slate-500">No tasks this day.</p>
            ) : null}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function TaskRow({ task, onToggle }: { task: PlannerTaskDto; onToggle: () => void }) {
  const done = task.status === "done";
  const skipped = task.status === "skipped";
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border p-3 transition-colors",
        done
          ? "border-emerald-500/30 bg-emerald-500/5"
          : skipped
            ? "border-slate-800 bg-slate-900/40 opacity-60"
            : "border-slate-800 bg-slate-900/40 hover:border-amber-400/40",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={done}
        aria-label={done ? `Mark ${task.title} as not done` : `Mark ${task.title} as done`}
        className="mt-0.5 shrink-0"
      >
        {done ? (
          <CheckCircle2 className="size-5 text-emerald-400" aria-hidden />
        ) : (
          <Circle className="size-5 text-slate-600 hover:text-amber-300" aria-hidden />
        )}
      </button>
      <div className="min-w-0 flex-1">
        <div className={cn("text-sm font-medium", done ? "text-slate-400 line-through" : "text-slate-100")}>
          {task.title}
        </div>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{task.detail}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <Badge
            variant="outline"
            className={cn("text-[10px]", TYPE_CHIP_STYLES[task.type] ?? TYPE_CHIP_STYLES.review)}
          >
            {task.typeLabel}
          </Badge>
          {task.section ? (
            <Badge variant="outline" className="border-slate-700 text-[10px] capitalize text-slate-400">
              {task.section}
            </Badge>
          ) : null}
          <Badge variant="outline" className="border-slate-700 text-[10px] text-slate-400">
            {task.difficulty}
          </Badge>
          <span className="text-[10px] text-slate-500">{task.reason}</span>
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <span className="text-xs text-slate-400">{task.minutes}m</span>
        <a
          href={task.href}
          className="text-xs font-medium text-amber-300 hover:text-amber-200"
          aria-label={`Open ${task.title}`}
        >
          Open <ChevronRight className="inline size-3" aria-hidden />
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Score gap analysis (PROMPT 53 §5)
// ---------------------------------------------------------------------------

function TrendBadge({ trend }: { trend: string }) {
  const meta = TREND_META[trend] ?? TREND_META.insufficient_data;
  return (
    <Badge variant="outline" className={cn("gap-1 text-[10px]", meta.className)}>
      {meta.icon === "up" ? (
        <TrendingUp className="size-3" aria-hidden />
      ) : meta.icon === "down" ? (
        <TrendingDown className="size-3" aria-hidden />
      ) : null}
      {meta.label}
    </Badge>
  );
}

function ScoreGapCard({ scoreGap }: { scoreGap: ScoreGapDto }) {
  const statusStyles: Record<string, string> = {
    at_target: "border-emerald-500/40 text-emerald-300",
    within_reach: "border-sky-500/40 text-sky-300",
    needs_focused_work: "border-amber-500/40 text-amber-300",
  };
  const statusLabels: Record<string, string> = {
    at_target: "At target",
    within_reach: "Within reach",
    needs_focused_work: "Needs focused work",
  };

  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <Gauge className="size-4 text-amber-400" aria-hidden /> Score gap analysis
        </CardTitle>
        <p className="text-sm text-slate-400">{scoreGap.summary}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall row: self-report (context) vs measured vs target vs trend */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Self-reported (context)
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-300">
              {scoreGap.selfReported !== null ? scoreGap.selfReported.toFixed(1) : "Not set"}
            </p>
            <p className="mt-1 text-[10px] text-slate-600">
              {scoreGap.selfReported !== null
                ? "Your onboarding guess — not evidence"
                : "Add it from onboarding or plan setup — used as context only"}
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Measured estimate
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              {scoreGap.current !== null ? scoreGap.current.toFixed(1) : "—"}
            </p>
            <p className="mt-1 text-[10px] text-slate-600">
              {scoreGap.current !== null
                ? `${scoreGap.overallGap !== null && scoreGap.overallGap > 0 ? `${scoreGap.overallGap.toFixed(1)} below target` : "at or above target"}`
                : "Take a diagnostic or mock to measure"}
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Target · improvement trend
            </p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-bold text-amber-300">
              {scoreGap.target.toFixed(1)}
              <TrendBadge trend={scoreGap.overallTrend} />
            </p>
            <p className="mt-1 text-[10px] text-slate-600">{scoreGap.overallTrendNote}</p>
          </div>
        </div>

        {/* Section-wise gap + trend */}
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Section-wise gap (target share {scoreGap.target.toFixed(1)} each)
          </p>
            <div className="mt-3 space-y-2.5">
            {scoreGap.sections.map((section) => (
              <div key={section.section} className="flex flex-wrap items-center gap-2 text-xs">
                <span className="w-16 text-slate-400">{SECTION_LABELS[section.section] ?? section.section}</span>
                <span className="w-8 font-semibold tabular-nums text-slate-200">{section.current.toFixed(1)}</span>
                <span className="text-slate-600">→</span>
                <span className="w-8 font-semibold tabular-nums text-amber-300">{section.target.toFixed(1)}</span>
                <Badge variant="outline" className={cn("text-[10px]", statusStyles[section.status])}>
                  {statusLabels[section.status]}
                </Badge>
                {/* Trend badge only when there is a trend to show — the
                    overall header already carries the insufficient-data note. */}
                <span className="ml-auto">
                  {section.trend !== "insufficient_data" ? <TrendBadge trend={section.trend} /> : null}
                </span>
              </div>
            ))}
            </div>
        </div>

        {/* Which skills require the most work + recent results */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Where to spend your effort
            </p>
            <ol className="mt-2 space-y-2">
              {scoreGap.workPriorities.map((priority) => (
                <li key={priority.section} className="flex gap-2.5 text-xs leading-relaxed">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-700 text-[10px] font-bold text-slate-300">
                    {priority.rank}
                  </span>
                  <span>
                    <span className="font-medium text-slate-200">
                      {SECTION_LABELS[priority.section] ?? priority.section}
                    </span>{" "}
                    <span className="text-slate-400">{priority.reason}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Recent results
            </p>
            {scoreGap.recentResults.length === 0 ? (
              <p className="mt-2 text-xs text-slate-500">
                No completed attempts yet — the trend needs at least two.
              </p>
            ) : (
              <ul className="mt-2 space-y-1.5">
                {scoreGap.recentResults.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between gap-2 text-xs text-slate-300"
                  >
                    <span className="min-w-0">
                      <span className="block truncate">{result.modeLabel}</span>
                      <span className="text-[10px] text-slate-500">
                        {result.date ? new Date(result.date).toLocaleDateString() : "—"}
                        {result.timed ? " · timed" : " · untimed"}
                      </span>
                    </span>
                    <span className="shrink-0 self-center text-sm font-semibold tabular-nums text-amber-300">
                      {result.scoreDisplay ?? "—"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Honest notes */}
        <div className="space-y-1 rounded-lg border border-slate-800 bg-slate-950 p-3">
          {scoreGap.notes.map((note, index) => (
            <p key={index} className="text-[11px] leading-relaxed text-slate-500">
              {note}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Readiness
// ---------------------------------------------------------------------------

function ReadinessCard({
  readiness,
  plan,
  navigate,
}: {
  readiness: NonNullable<PlannerStateDto["readiness"]>;
  plan: PlannerPlanDto | null;
  navigate: (route: AppRoute) => void;
}) {
  const sectionStatusStyles: Record<string, string> = {
    at_target: "border-emerald-500/40 text-emerald-300",
    within_reach: "border-sky-500/40 text-sky-300",
    needs_focused_work: "border-amber-500/40 text-amber-300",
  };
  const sectionStatusLabels: Record<string, string> = {
    at_target: "At target",
    within_reach: "Within reach",
    needs_focused_work: "Needs focused work",
  };

  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <Activity className="size-4 text-amber-400" aria-hidden /> Examination readiness
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Label + evidence */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold",
              READINESS_STYLES[readiness.label],
            )}
          >
            <Target className="size-4" aria-hidden /> {readiness.labelText}
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-500">
            {readiness.evidence.evidenceNote}
          </p>
        </div>
        <p className="text-xs leading-relaxed text-slate-400">{readiness.labelNote}</p>

        {/* Why this label was assigned (PROMPT 53 §7) */}
        {readiness.why && readiness.why.length > 0 ? (
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Why this level was assigned
            </p>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-300">
              {readiness.why.map((reason, index) => (
                <li key={index} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-slate-500" aria-hidden />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Overall + sections */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Gauge className="size-3.5" aria-hidden /> Estimated overall
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Target className="size-3.5" aria-hidden /> Target
              </span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-3xl font-bold text-white">
                {readiness.overall.estimated !== null ? readiness.overall.estimated.toFixed(1) : "—"}
              </span>
              <span className="text-lg font-semibold text-amber-300">
                {readiness.overall.target.toFixed(1)}
              </span>
            </div>
            <p
              className={cn(
                "mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                readiness.overall.onTarget
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-amber-400/10 text-amber-300",
              )}
            >
              <TrendingUp className="size-3.5" aria-hidden />
              {readiness.overall.onTarget
                ? "At or above target"
                : `Gap analysis: ${readiness.overall.gap?.toFixed(1)} below target`}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Section targets are derived from your overall target as an even split —
              official scores weight sections differently.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Section-wise readiness
            </p>
            {readiness.sections.map((section) => (
              <div key={section.section} className="flex items-center gap-2 text-xs">
                <span className="w-16 capitalize text-slate-400">{section.section}</span>
                <Badge
                  variant="outline"
                  className={cn("text-[10px]", sectionStatusStyles[section.status])}
                >
                  {sectionStatusLabels[section.status]}
                </Badge>
                <span className="ml-auto font-medium text-slate-300">
                  {section.estimated.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Completion + recent mocks + next steps */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Completion
            </p>
            <p className="mt-2 text-2xl font-bold text-white">
              {readiness.completion ? `${readiness.completion.percent}%` : "—"}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {readiness.completion
                ? `${readiness.completion.tasksDone} of ${readiness.completion.tasksTotal} plan tasks done`
                : "Generate a plan to track completion"}
            </p>
            {plan ? (
              <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                <ListChecks className="size-3.5" aria-hidden />
                {plan.progress.daysElapsed} of {plan.progress.daysTotal} days elapsed
              </div>
            ) : null}
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Recent mock results
            </p>
            {readiness.recentMocks.length === 0 ? (
              <p className="mt-2 text-xs text-slate-500">No completed attempts yet.</p>
            ) : (
              <ul className="mt-2 space-y-1.5">
                {readiness.recentMocks.map((mock) => (
                  <li key={mock.attemptId}>
                    <button
                      className="flex w-full items-center justify-between gap-2 text-left text-xs hover:text-amber-300"
                      onClick={() => navigate({ name: "exams-result", attemptId: mock.attemptId })}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-slate-300">{mock.mockTitle}</span>
                        <span className="text-[10px] text-slate-500">
                          {mock.submittedAt ? new Date(mock.submittedAt).toLocaleDateString() : "—"}
                          {mock.timed ? " · timed" : " · untimed"}
                        </span>
                      </span>
                      <span className="shrink-0 font-semibold text-amber-300">
                        {mock.scoreDisplay ?? "—"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Recommended next steps
            </p>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-300">
              {readiness.nextSteps.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <Sparkles className="mt-0.5 size-3.5 shrink-0 text-amber-400" aria-hidden />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mandated honesty copy */}
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
            <BellRing className="mt-0.5 size-3.5 shrink-0 text-slate-500" aria-hidden />
            {readiness.disclaimer} {readiness.noGuaranteeNote}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Reminders
// ---------------------------------------------------------------------------

function ReminderCard({ plan, onChanged }: { plan: PlannerPlanDto | null; onChanged: () => Promise<void> }) {
  const [time, setTime] = useState(plan?.reminderTime ?? "19:30");
  const [days, setDays] = useState<number[]>(plan?.reminderDays ?? [1, 2, 3, 4, 5]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTime(plan?.reminderTime ?? "19:30");
    setDays(plan?.reminderDays ?? [1, 2, 3, 4, 5]);
  }, [plan?.reminderTime, plan]);

  if (!plan) return null;

  const save = async () => {
    setSaving(true);
    try {
      const response = await examApi.plannerReminder({
        reminderTime: time || null,
        reminderDays: days,
      });
      if (response.ok) {
        toast.success("Reminder updated.");
        await onChanged();
      } else {
        toast.error("Could not save the reminder.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <AlarmClock className="size-4 text-amber-400" aria-hidden /> Study reminder
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-end gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="reminder-edit-time" className="text-xs text-slate-400">
              Time
            </Label>
            <Input
              id="reminder-edit-time"
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              aria-label="Reminder time"
              className="w-32 border-slate-700 bg-slate-950"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {WEEKDAYS.map((day, index) => (
              <button
                key={day}
                type="button"
                aria-pressed={days.includes(index)}
                aria-label={`Remind on ${day}`}
                onClick={() =>
                  setDays((current) =>
                    current.includes(index)
                      ? current.filter((entry) => entry !== index)
                      : [...current, index].sort(),
                  )
                }
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  days.includes(index)
                    ? "border-amber-400 bg-amber-400/15 text-amber-300"
                    : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500",
                )}
              >
                {day}
              </button>
            ))}
          </div>
          <Button
            size="sm"
            className="bg-amber-400 text-slate-950 hover:bg-amber-300"
            disabled={saving}
            onClick={() => void save()}
          >
            {saving ? "Saving…" : "Save reminder"}
          </Button>
          {typeof Notification !== "undefined" && Notification.permission === "default" ? (
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900"
              onClick={() => void Notification.requestPermission()}
            >
              <BellRing className="size-3.5" aria-hidden /> Enable desktop notifications
            </Button>
          ) : null}
        </div>
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="size-3.5" aria-hidden />
          Reminders appear while EnglishPath is open in a browser tab (with optional desktop
          notifications) — they are not push notifications.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <BookOpenCheck className="size-3.5" aria-hidden />
          Today&apos;s tasks live in the plan above — the reminder simply brings you back.
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Coach notifications (PROMPT 53 §8) — five configurable categories with
// structural anti-spam: one per category per day, small daily total.
// ---------------------------------------------------------------------------

function NotificationsCard({
  notifications,
  onChanged,
}: {
  notifications: PlannerNotificationsDto;
  onChanged: () => Promise<void>;
}) {
  const [prefs, setPrefs] = useState<NotificationPrefDto[]>(notifications.prefs);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setPrefs(notifications.prefs);
  }, [notifications]);

  const setPref = (category: NotificationCategory, patch: Partial<NotificationPrefDto>) => {
    setPrefs((current) =>
      current.map((pref) => (pref.category === category ? { ...pref, ...patch } : pref)),
    );
  };

  const save = async () => {
    setSaving(true);
    try {
      const response = await examApi.plannerNotificationsSave(prefs);
      if (response.ok) {
        toast.success("Notification settings saved.");
        await onChanged();
      } else {
        toast.error("Could not save the notification settings.");
      }
    } finally {
      setSaving(false);
    }
  };

  const dailyStudy = prefs.find((pref) => pref.category === "daily_study");
  const examDate = prefs.find((pref) => pref.category === "exam_date");

  return (
    <Card className="border-slate-800 bg-slate-900/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <BellRing className="size-4 text-amber-400" aria-hidden /> Coach reminders
        </CardTitle>
        <p className="text-sm text-slate-400">
          Five reminder categories, each with its own switch. Capped by design — at most one
          per category per day and a small daily total.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {prefs.map((pref) => (
            <div
              key={pref.category}
              className="flex items-start justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-200">
                  {NOTIFICATION_CATEGORY_LABELS[pref.category]}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  {NOTIFICATION_CATEGORY_DESCRIPTIONS[pref.category]}
                </p>
              </div>
              <Switch
                checked={pref.enabled}
                onCheckedChange={(enabled) => setPref(pref.category, { enabled })}
                aria-label={`Toggle ${NOTIFICATION_CATEGORY_LABELS[pref.category]} reminders`}
                className="data-[state=checked]:bg-amber-400"
              />
            </div>
          ))}
        </div>

        {/* Daily learning config */}
        {dailyStudy ? (
          <div
            className={cn(
              "space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3",
              !dailyStudy.enabled && "opacity-50",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Daily learning — time & days
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Input
                type="time"
                value={dailyStudy.config.time ?? "19:30"}
                onChange={(event) =>
                  setPref("daily_study", {
                    config: { ...dailyStudy.config, time: event.target.value },
                  })
                }
                disabled={!dailyStudy.enabled}
                aria-label="Daily reminder time"
                className="w-32 border-slate-700 bg-slate-950"
              />
              <div className="flex flex-wrap gap-1.5">
                {WEEKDAYS.map((day, index) => {
                  const days = dailyStudy.config.days ?? [1, 2, 3, 4, 5];
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={!dailyStudy.enabled}
                      aria-pressed={days.includes(index)}
                      aria-label={`Remind on ${day}`}
                      onClick={() =>
                        setPref("daily_study", {
                          config: {
                            ...dailyStudy.config,
                            days: days.includes(index)
                              ? days.filter((entry) => entry !== index)
                              : [...days, index].sort(),
                          },
                        })
                      }
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs transition-colors disabled:cursor-not-allowed",
                        days.includes(index)
                          ? "border-amber-400 bg-amber-400/15 text-amber-300"
                          : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500",
                      )}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}

        {/* Exam date countdown config */}
        {examDate ? (
          <div
            className={cn(
              "space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3",
              !examDate.enabled && "opacity-50",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Examination countdown — remind me before
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[1, 3, 7, 14].map((lead) => {
                const leads = examDate.config.leadDays ?? [7, 3, 1];
                return (
                  <button
                    key={lead}
                    type="button"
                    disabled={!examDate.enabled}
                    aria-pressed={leads.includes(lead)}
                    aria-label={`Remind ${lead} day(s) before the exam`}
                    onClick={() =>
                      setPref("exam_date", {
                        config: {
                          ...examDate.config,
                          leadDays: leads.includes(lead)
                            ? leads.filter((entry) => entry !== lead)
                            : [...leads, lead].sort((a, b) => b - a),
                        },
                      })
                    }
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs transition-colors disabled:cursor-not-allowed",
                      leads.includes(lead)
                        ? "border-amber-400 bg-amber-400/15 text-amber-300"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500",
                    )}
                  >
                    {lead} day{lead === 1 ? "" : "s"} before
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Currently due (the rate-limited feed) */}
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Due right now
          </p>
          {notifications.feed.length === 0 ? (
            <p className="mt-1.5 text-xs text-slate-500">
              Nothing due — reminders appear here (and as toasts) when their moment comes.
            </p>
          ) : (
            <ul className="mt-1.5 space-y-1.5">
              {notifications.feed.map((item) => (
                <li key={item.category} className="text-xs leading-relaxed text-slate-300">
                  <span className="font-medium text-amber-300">{item.categoryLabel}: </span>
                  {item.title} — {item.body}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            className="bg-amber-400 text-slate-950 hover:bg-amber-300"
            disabled={saving}
            onClick={() => void save()}
          >
            {saving ? "Saving…" : "Save reminder settings"}
          </Button>
          {typeof Notification !== "undefined" && Notification.permission === "default" ? (
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-900"
              onClick={() => void Notification.requestPermission()}
            >
              <BellRing className="size-3.5" aria-hidden /> Enable desktop notifications
            </Button>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-slate-500">
            <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            {NOTIFICATION_ANTI_SPAM_NOTE}
          </p>
          <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-slate-500">
            <BellRing className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            {PLANNER_REMINDER_SCOPE_NOTE}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
