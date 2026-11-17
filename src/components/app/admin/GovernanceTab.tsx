"use client";

/**
 * Examination content governance (admin, PROMPT 55).
 *
 * One console over both academies:
 *   - Overview: the ten mandated analytics metrics, the review-queue strip,
 *     learner error patterns and the specification versions with their
 *     review-due dates.
 *   - Completeness: the course readiness dashboard — a course is ready only
 *     when its lessons, practice, answer keys, assessments, outcomes and
 *     human review genuinely pass, never merely because chapter records
 *     exist.
 *   - Validation: the eight-category question validation report.
 *   - Registry: every governed entity (examinations, versions, pathways,
 *     courses, modules, chapters, lessons, exercises, questions, audio,
 *     passages, model answers, rubrics, mocks) with its pipeline status and
 *     the six-stage approval actions.
 *
 * Pipeline: draft → educational review → examination review → answer
 * validation → approved → published. AI-generated content starts at draft
 * no matter how live it is, and only explicit staff actions (editor submits,
 * teachers sign off, admin publishes) move it forward.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  History,
  ListChecks,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { request } from "@/lib/client/api";
import type { CmsRole } from "@/data/cms/types";
import {
  GOVERNANCE_ACTION_FROM,
  GOVERNANCE_ACTION_LABELS,
  GOVERNANCE_ACTION_MIN_ROLE,
  GOVERNANCE_ACTIONS,
  GOVERNANCE_ENTITY_LABELS,
  GOVERNANCE_ENTITY_TYPES,
  GOVERNANCE_STATUSES,
  GOVERNANCE_STATUS_LABELS,
  GOVERNANCE_NOTE_MIN_LENGTH,
  type CourseReadinessDto,
  type GovernanceAction,
  type GovernanceAnalyticsDto,
  type GovernanceEntityDto,
  type GovernanceEntityType,
  type GovernanceStatus,
  type ValidationCategory,
  VALIDATION_CATEGORIES,
} from "@/lib/exams/governance/types";

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const STATUS_STYLE: Record<GovernanceStatus, string> = {
  draft: "bg-amber-500/15 text-amber-600 dark:text-amber-300",
  "educational-review": "bg-sky-500/15 text-sky-600 dark:text-sky-300",
  "examination-review": "bg-indigo-500/15 text-indigo-600 dark:text-indigo-300",
  "answer-validation": "bg-violet-500/15 text-violet-600 dark:text-violet-300",
  approved: "bg-teal-500/15 text-teal-600 dark:text-teal-300",
  published: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
};

const READINESS_STYLE: Record<CourseReadinessDto["readiness"], string> = {
  ready: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  "needs-attention": "bg-amber-500/15 text-amber-600 dark:text-amber-300",
  "not-ready": "bg-red-500/15 text-red-600 dark:text-red-300",
};

const SEVERITY_STYLE = {
  blocking: "bg-red-500/15 text-red-600 dark:text-red-300",
  warning: "bg-amber-500/15 text-amber-600 dark:text-amber-300",
} as const;

// ---------------------------------------------------------------------------
// Data shapes
// ---------------------------------------------------------------------------

type OverviewDto = {
  analytics: GovernanceAnalyticsDto;
  readiness: CourseReadinessDto[];
  validation: {
    byCategory: Record<ValidationCategory, number>;
    blockingCount: number;
    warningCount: number;
  };
};

type RegistryDto = {
  entities: GovernanceEntityDto[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
  countsByType: Record<GovernanceEntityType, number>;
  countsByStatus: Record<GovernanceStatus, number>;
};

type ValidationReportDto = {
  issues: Array<{
    category: ValidationCategory;
    severity: "blocking" | "warning";
    entityType: string;
    entityKey: string;
    title: string;
    evidence: string;
    suggestion: string;
  }>;
  blockingCount: number;
  warningCount: number;
  checked: Record<string, number>;
};

const ADVANCING_ACTIONS: readonly GovernanceAction[] = [
  "educational-approve",
  "examination-approve",
  "validate-answers",
  "publish",
];

function roleRank(role: string): number {
  return { student: 0, editor: 1, teacher: 2, admin: 3 }[role] ?? 0;
}

// ---------------------------------------------------------------------------
// The tab
// ---------------------------------------------------------------------------

export function GovernanceTab({ role }: { role: CmsRole }) {
  const [section, setSection] = useState<"overview" | "completeness" | "validation" | "registry">("overview");
  const [overview, setOverview] = useState<OverviewDto | null>(null);
  const [loadingOverview, setLoadingOverview] = useState(true);

  const [registry, setRegistry] = useState<RegistryDto | null>(null);
  const [registryFilters, setRegistryFilters] = useState<{
    entityType: GovernanceEntityType | "all";
    status: GovernanceStatus | "all";
    liveUnapprovedOnly: boolean;
    q: string;
    page: number;
  }>({ entityType: "all", status: "all", liveUnapprovedOnly: false, q: "", page: 1 });
  const [loadingRegistry, setLoadingRegistry] = useState(false);

  const [validation, setValidation] = useState<ValidationReportDto | null>(null);
  const [loadingValidation, setLoadingValidation] = useState(false);

  const [actionTarget, setActionTarget] = useState<{ entity: GovernanceEntityDto; action: GovernanceAction } | null>(null);
  const [actionNote, setActionNote] = useState("");
  const [actionBusy, setActionBusy] = useState(false);

  // Established admin-tab pattern: effects fetch inline (setState only after
  // awaits); handlers bump reload keys.
  const [overviewReload, setOverviewReload] = useState(0);
  const [registryReload, setRegistryReload] = useState(0);
  const [validationReload, setValidationReload] = useState(0);

  useEffect(() => {
    void (async () => {
      const res = await request<OverviewDto>("/api/exams/admin/governance");
      setLoadingOverview(false);
      if (res.ok) setOverview(res.data);
      else toast.error(res.error);
    })();
  }, [overviewReload]);

  useEffect(() => {
    if (section !== "registry") return;
    void (async () => {
      const params = new URLSearchParams();
      if (registryFilters.entityType !== "all") params.set("entityType", registryFilters.entityType);
      if (registryFilters.status !== "all") params.set("status", registryFilters.status);
      if (registryFilters.liveUnapprovedOnly) params.set("liveUnapprovedOnly", "1");
      if (registryFilters.q.trim()) params.set("q", registryFilters.q.trim());
      params.set("page", String(registryFilters.page));
      params.set("pageSize", "25");
      const res = await request<RegistryDto>(`/api/exams/admin/governance/registry?${params.toString()}`);
      setLoadingRegistry(false);
      if (res.ok) setRegistry(res.data);
      else toast.error(res.error);
    })();
  }, [section, registryFilters, registryReload]);

  useEffect(() => {
    if (section !== "validation" || validation) return;
    void (async () => {
      const res = await request<ValidationReportDto>("/api/exams/admin/governance/validation");
      setLoadingValidation(false);
      if (res.ok) setValidation(res.data);
      else toast.error(res.error);
    })();
  }, [section, validation, validationReload]);

  const refreshAll = () => {
    setOverviewReload((key) => key + 1);
    setRegistryReload((key) => key + 1);
    setValidation(null);
    setValidationReload((key) => key + 1);
  };

  const submitAction = async () => {
    if (!actionTarget) return;
    setActionBusy(true);
    const res = await request<{ result: { status: GovernanceStatus } }>(
      `/api/exams/admin/governance/${actionTarget.entity.entityType}/${encodeURIComponent(actionTarget.entity.entityKey)}/action`,
      { method: "POST", body: JSON.stringify({ action: actionTarget.action, note: actionNote }) },
    );
    setActionBusy(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    toast.success(
      `${GOVERNANCE_ACTION_LABELS[actionTarget.action]} — now "${GOVERNANCE_STATUS_LABELS[res.data.result.status]}".`,
    );
    setActionTarget(null);
    setActionNote("");
    setOverviewReload((key) => key + 1);
    setRegistryReload((key) => key + 1);
  };

  const availableActions = useCallback(
    (entity: GovernanceEntityDto): GovernanceAction[] =>
      GOVERNANCE_ACTIONS.filter(
        (action) =>
          GOVERNANCE_ACTION_FROM[action].includes(entity.status) &&
          roleRank(role) >= roleRank(GOVERNANCE_ACTION_MIN_ROLE[action]) &&
          (action !== "unpublish" || entity.humanApproved),
      ),
    [role],
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Section switcher */}
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["overview", "Overview", <TrendingUp key="i" className="size-4" />],
            ["completeness", "Completeness", <ListChecks key="i" className="size-4" />],
            ["validation", "Validation", <FileSearch key="i" className="size-4" />],
            ["registry", "Content registry", <History key="i" className="size-4" />],
          ] as const
        ).map(([key, label, icon]) => (
          <Button
            key={key}
            type="button"
            size="sm"
            variant={section === key ? "default" : "outline"}
            className="gap-1.5"
            onClick={() => setSection(key)}
          >
            {icon}
            {label}
          </Button>
        ))}
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="ml-auto gap-1.5"
          onClick={refreshAll}
          disabled={loadingOverview || loadingRegistry}
        >
          <RefreshCw className={cn("size-4", (loadingOverview || loadingRegistry) && "animate-spin")} /> Refresh
        </Button>
      </div>

      {loadingOverview && !overview ? (
        <p className="text-sm text-muted-foreground">Loading governance data…</p>
      ) : null}

      {section === "overview" && overview ? (
        <OverviewSection overview={overview} />
      ) : null}
      {section === "completeness" && overview ? (
        <CompletenessSection readiness={overview.readiness} />
      ) : null}
      {section === "validation" ? (
        <ValidationSection
          report={validation}
          loading={loadingValidation}
          onRun={() => {
            setValidation(null);
            setValidationReload((key) => key + 1);
          }}
        />
      ) : null}
      {section === "registry" ? (
        <RegistrySection
          registry={registry}
          loading={loadingRegistry}
          filters={registryFilters}
          onFilters={(next) => setRegistryFilters((prev) => ({ ...prev, ...next, page: next.page ?? 1 }))}
          availableActions={availableActions}
          onAction={(entity, action) => {
            setActionTarget({ entity, action });
            setActionNote("");
          }}
          role={role}
        />
      ) : null}

      {/* Action dialog */}
      <Dialog open={actionTarget !== null} onOpenChange={(open) => !open && setActionTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{actionTarget ? GOVERNANCE_ACTION_LABELS[actionTarget.action] : ""}</DialogTitle>
            <DialogDescription>
              {actionTarget
                ? `${GOVERNANCE_ENTITY_LABELS[actionTarget.entity.entityType]} · ${actionTarget.entity.title} — currently "${GOVERNANCE_STATUS_LABELS[actionTarget.entity.status]}".`
                : ""}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="gov-note">Reviewer note</Label>
              <Textarea
                id="gov-note"
                rows={3}
                value={actionNote}
                onChange={(e) => setActionNote(e.target.value)}
                placeholder={
                  actionTarget && ADVANCING_ACTIONS.includes(actionTarget.action)
                    ? `Required — at least ${GOVERNANCE_NOTE_MIN_LENGTH} characters. What did you check?`
                    : "Optional — why is this being sent back?"
                }
              />
              {actionTarget && ADVANCING_ACTIONS.includes(actionTarget.action) ? (
                <p className="text-xs text-muted-foreground">
                  Advancing actions need an accountable note — this is what keeps human approval human.
                </p>
              ) : null}
              {actionTarget && actionTarget.entity.provenance === "ai-generated" ? (
                <p className="text-xs text-muted-foreground">
                  This content is AI-generated: it reaches human-approved status only through explicit staff
                  sign-off, never automatically.
                </p>
              ) : null}
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setActionTarget(null)} disabled={actionBusy}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={submitAction}
              disabled={
                actionBusy ||
                (actionTarget !== null &&
                  ADVANCING_ACTIONS.includes(actionTarget.action) &&
                  actionNote.trim().length < GOVERNANCE_NOTE_MIN_LENGTH)
              }
            >
              {actionBusy ? "Applying…" : actionTarget ? GOVERNANCE_ACTION_LABELS[actionTarget.action] : ""}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Overview: the ten mandated metrics + error patterns + spec versions
// ---------------------------------------------------------------------------

function MetricCard({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string | number;
  hint?: string;
  tone?: "warn" | "bad" | "good";
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-1 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
        <span
          className={cn(
            "text-2xl font-bold tabular-nums",
            tone === "bad" && "text-red-600 dark:text-red-400",
            tone === "warn" && "text-amber-600 dark:text-amber-300",
            tone === "good" && "text-emerald-600 dark:text-emerald-400",
          )}
        >
          {value}
        </span>
        {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      </CardContent>
    </Card>
  );
}

function OverviewSection({ overview }: { overview: OverviewDto }) {
  const { analytics, validation } = overview;
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard label="Total lessons" value={analytics.lessons.total} hint="Across the academy courses" />
        <MetricCard
          label="Complete lessons"
          value={analytics.lessons.complete}
          hint="Teaching + practice + outcomes + summary"
          tone="good"
        />
        <MetricCard
          label="Placeholder lessons"
          value={analytics.lessons.placeholder}
          hint="Records with no real content"
          tone={analytics.lessons.placeholder > 0 ? "bad" : undefined}
        />
        <MetricCard
          label="Pending reviews"
          value={analytics.pendingReviews}
          hint="In the three review stages"
          tone={analytics.pendingReviews > 0 ? "warn" : undefined}
        />
        <MetricCard
          label="Published questions"
          value={analytics.publishedQuestions.total}
          hint={`${analytics.publishedQuestions.mockQuestions} mock + ${analytics.publishedQuestions.cmsExercises} lesson exercises`}
        />
        <MetricCard
          label="Missing answer keys"
          value={analytics.missingAnswerKeys}
          hint="Found by the validation engine"
          tone={analytics.missingAnswerKeys > 0 ? "bad" : "good"}
        />
        <MetricCard
          label="Outdated content"
          value={analytics.outdatedContent.total}
          hint={`${analytics.outdatedContent.mocksOnRetiredSpecs} retired-spec mocks · ${analytics.outdatedContent.questionsWithRetiredTypes} retired-type items · ${analytics.outdatedContent.specsPastReviewDate} specs past review date`}
          tone={analytics.outdatedContent.total > 0 ? "warn" : "good"}
        />
        <MetricCard
          label="Audio without transcripts"
          value={`${analytics.audioWithoutTranscripts}/${analytics.audioTotal}`}
          hint="Uploaded assets (bank audio is synthesized with transcripts)"
          tone={analytics.audioWithoutTranscripts > 0 ? "warn" : "good"}
        />
        <MetricCard
          label="Mock examinations"
          value={analytics.mockExaminations.total}
          hint={`${analytics.mockExaminations.published} published · ${analytics.mockExaminations.draft} draft`}
        />
        <MetricCard
          label="Live, never human-approved"
          value={analytics.liveWithoutHumanApproval}
          hint="AI-generated content served to learners — flagged for retrospective review"
          tone={analytics.liveWithoutHumanApproval > 0 ? "warn" : "good"}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Review queue */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ClipboardCheck className="size-4 text-primary" aria-hidden /> Approval pipeline
            </CardTitle>
            <CardDescription>
              Effective status across every governed entity. The three middle stages are the pending review queue.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {GOVERNANCE_STATUSES.map((status) => (
              <div key={status} className="flex items-center justify-between gap-2">
                <Badge className={cn("font-normal", STATUS_STYLE[status])}>{GOVERNANCE_STATUS_LABELS[status]}</Badge>
                <span className="text-sm font-semibold tabular-nums">{analytics.statusDistribution[status]}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learner error patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="size-4 text-primary" aria-hidden /> Learner error patterns
            </CardTitle>
            <CardDescription>
              Skill gaps on wrongly-answered mock questions, the reading/listening error taxonomies and evaluator
              weakness areas — most frequent first.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {analytics.learnerErrorPatterns.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No learner errors recorded yet — patterns appear once learners attempt content.
              </p>
            ) : (
              analytics.learnerErrorPatterns.map((pattern) => (
                <div key={pattern.pattern} className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium">{pattern.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {[pattern.exam, pattern.section].filter(Boolean).join(" · ") || "platform-wide"}
                    </span>
                  </div>
                  <span className="text-sm font-semibold tabular-nums">{pattern.occurrences}</span>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Validation summary strip */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ShieldAlert className="size-4 text-primary" aria-hidden /> Question validation — eight categories
          </CardTitle>
          <CardDescription>
            {validation.blockingCount} blocking · {validation.warningCount} warning
            {validation.blockingCount > 0
              ? " — blocking issues prevent answer-validation sign-off."
              : " — no blocking issues."}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(validation.byCategory) as ValidationCategory[]).map((category) => (
            <div key={category} className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
              <span className="text-xs font-medium">{category}</span>
              <span
                className={cn(
                  "text-sm font-bold tabular-nums",
                  validation.byCategory[category] > 0 ? "text-amber-600 dark:text-amber-300" : "text-muted-foreground",
                )}
              >
                {validation.byCategory[category]}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Completeness dashboard
// ---------------------------------------------------------------------------

function CompletenessSection({ readiness }: { readiness: CourseReadinessDto[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        A course is labelled ready only when all six dimensions genuinely pass — chapter records existing is never
        enough. AI-generated lessons count as unreviewed until staff sign them off.
      </p>
      {readiness.length === 0 ? (
        <p className="text-sm text-muted-foreground">No academy courses found.</p>
      ) : (
        readiness.map((course) => (
          <Card key={course.courseSlug}>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-base">{course.courseTitle}</CardTitle>
                <Badge className={cn("font-normal", READINESS_STYLE[course.readiness])}>
                  {course.readiness === "ready"
                    ? "Genuinely ready"
                    : course.readiness === "needs-attention"
                      ? "Needs attention"
                      : "Not ready"}
                </Badge>
                {course.live ? <Badge variant="secondary">live</Badge> : null}
              </div>
              <CardDescription>
                {course.collectionName} · {course.lessons.total} lessons ({course.lessons.complete} complete ·{" "}
                {course.lessons.partial} partial · {course.lessons.placeholder} placeholder)
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {course.dimensions.map((dimension) => (
                  <div
                    key={dimension.key}
                    className={cn(
                      "flex flex-col gap-1 rounded-lg border p-3",
                      dimension.pass ? "border-emerald-500/30" : "border-red-500/40",
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      {dimension.pass ? (
                        <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
                      ) : (
                        <AlertTriangle className="size-3.5 text-red-600 dark:text-red-400" aria-hidden />
                      )}
                      <span className="text-xs font-semibold">{dimension.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{dimension.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">{course.summary}</p>
              {course.blockers.length > 0 ? (
                <div className="flex flex-col gap-1 rounded-lg border bg-secondary/40 p-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Blockers ({course.blockers.length})
                  </span>
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    {course.blockers.slice(0, 8).map((blocker, i) => (
                      <li key={i}>{blocker}</li>
                    ))}
                    {course.blockers.length > 8 ? (
                      <li className="text-muted-foreground">+{course.blockers.length - 8} more…</li>
                    ) : null}
                  </ul>
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Validation report
// ---------------------------------------------------------------------------

function ValidationSection({
  report,
  loading,
  onRun,
}: {
  report: ValidationReportDto | null;
  loading: boolean;
  onRun: () => void;
}) {
  const [category, setCategory] = useState<ValidationCategory | "all">("all");
  const issues = useMemo(
    () => (report ? report.issues.filter((issue) => category === "all" || issue.category === category) : []),
    [report, category],
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Select value={category} onValueChange={(value) => setCategory(value as ValidationCategory | "all")}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {VALIDATION_CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
                {report ? ` (${report.issues.filter((issue) => issue.category === cat).length})` : ""}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="button" size="sm" variant="outline" className="gap-1.5" onClick={onRun} disabled={loading}>
          <RefreshCw className={cn("size-4", loading && "animate-spin")} />
          {report ? "Re-run" : "Run"} validation
        </Button>
        {report ? (
          <span
            className={cn(
              "text-sm font-medium",
              report.blockingCount > 0 ? "text-red-600 dark:text-red-400" : "text-muted-foreground",
            )}
          >
            {report.blockingCount} blocking · {report.warningCount} warning
            {report.blockingCount > 0
              ? " — blocking issues prevent answer-validation sign-off"
              : " — no blocking issues"}
          </span>
        ) : null}
      </div>
      {report ? (
        <p className="text-sm text-muted-foreground">
          Checked {report.checked.mockQuestions ?? 0} mock questions · {report.checked.cmsExercises ?? 0} lesson
          exercises · {report.checked.lessons ?? 0} lessons · {report.checked.audioAssets ?? 0} audio assets ·{" "}
          {report.checked.practiceLibraryItems ?? 0} practice-library items (machine-validated upstream)
        </p>
      ) : null}

      {!report && loading ? <p className="text-sm text-muted-foreground">Running the validation engine…</p> : null}
      {report && issues.length === 0 ? (
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <ShieldCheck className="size-5 text-emerald-600 dark:text-emerald-400" aria-hidden />
            <p className="text-sm">
              No issues in this view — every answer key present and valid, audio playable, references intact, no
              duplicates, formats current.
            </p>
          </CardContent>
        </Card>
      ) : null}

      <div className="flex flex-col gap-2">
        {issues.slice(0, 60).map((issue, i) => (
          <Card key={`${issue.entityType}-${issue.entityKey}-${i}`}>
            <CardContent className="flex flex-col gap-1.5 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={cn("font-normal", SEVERITY_STYLE[issue.severity])}>{issue.severity}</Badge>
                <Badge variant="outline" className="font-normal">
                  {issue.category}
                </Badge>
                <span className="text-sm font-semibold">{issue.title}</span>
              </div>
              <p className="text-sm text-muted-foreground">{issue.evidence}</p>
              <p className="text-sm">Fix: {issue.suggestion}</p>
              <p className="text-xs text-muted-foreground">
                {issue.entityType}:{issue.entityKey}
              </p>
            </CardContent>
          </Card>
        ))}
        {issues.length > 60 ? (
          <p className="text-sm text-muted-foreground">+{issues.length - 60} more issues…</p>
        ) : null}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Content registry
// ---------------------------------------------------------------------------

function RegistrySection({
  registry,
  loading,
  filters,
  onFilters,
  availableActions,
  onAction,
  role,
}: {
  registry: RegistryDto | null;
  loading: boolean;
  filters: {
    entityType: GovernanceEntityType | "all";
    status: GovernanceStatus | "all";
    liveUnapprovedOnly: boolean;
    q: string;
    page: number;
  };
  onFilters: (next: Partial<typeof filters>) => void;
  availableActions: (entity: GovernanceEntityDto) => GovernanceAction[];
  onAction: (entity: GovernanceEntityDto, action: GovernanceAction) => void;
  role: CmsRole;
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Filters */}
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs font-semibold">Entity type</Label>
          <Select
            value={filters.entityType}
            onValueChange={(value) => onFilters({ entityType: value as GovernanceEntityType | "all" })}
          >
            <SelectTrigger className="w-56">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                All types ({registry ? Object.values(registry.countsByType).reduce((a, b) => a + b, 0) : "…"})
              </SelectItem>
              {GOVERNANCE_ENTITY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {GOVERNANCE_ENTITY_LABELS[type]} ({registry?.countsByType[type] ?? 0})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs font-semibold">Pipeline status</Label>
          <Select value={filters.status} onValueChange={(value) => onFilters({ status: value as GovernanceStatus | "all" })}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any status</SelectItem>
              {GOVERNANCE_STATUSES.map((status) => (
                <SelectItem key={status} value={status}>
                  {GOVERNANCE_STATUS_LABELS[status]} ({registry?.countsByStatus[status] ?? 0})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex min-w-48 flex-1 flex-col gap-1.5">
          <Label className="text-xs font-semibold" htmlFor="gov-registry-q">
            Search
          </Label>
          <Input
            id="gov-registry-q"
            value={filters.q}
            placeholder="Title, context or key…"
            onChange={(e) => onFilters({ q: e.target.value })}
          />
        </div>
        <Button
          type="button"
          size="sm"
          variant={filters.liveUnapprovedOnly ? "default" : "outline"}
          onClick={() => onFilters({ liveUnapprovedOnly: !filters.liveUnapprovedOnly })}
        >
          Live, never human-approved
        </Button>
      </div>

      {loading && !registry ? <p className="text-sm text-muted-foreground">Loading the registry…</p> : null}

      {registry ? (
        <>
          <p className="text-sm text-muted-foreground">
            {registry.total} entit{registry.total === 1 ? "y" : "ies"} match — page {registry.page} of{" "}
            {registry.pageCount}.
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-64">Content</TableHead>
                  <TableHead className="min-w-28">Pipeline</TableHead>
                  <TableHead className="min-w-24">Provenance</TableHead>
                  <TableHead className="min-w-20">Delivery</TableHead>
                  <TableHead className="min-w-56">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registry.entities.map((entity) => {
                  const actions = availableActions(entity);
                  return (
                    <TableRow key={`${entity.entityType}:${entity.entityKey}`}>
                      <TableCell>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium">{entity.title || entity.entityKey}</span>
                          <span className="text-xs text-muted-foreground">{entity.subtitle}</span>
                          <span className="text-xs text-muted-foreground">
                            {GOVERNANCE_ENTITY_LABELS[entity.entityType]} · {entity.entityKey}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <Badge className={cn("font-normal", STATUS_STYLE[entity.status])}>
                            {GOVERNANCE_STATUS_LABELS[entity.status]}
                          </Badge>
                          {entity.humanApproved ? (
                            <Badge variant="outline" className="w-fit font-normal">
                              <ShieldCheck className="mr-1 size-3" /> human-approved
                            </Badge>
                          ) : null}
                          {entity.meta.staleOverride ? (
                            <Badge variant="outline" className="w-fit font-normal text-amber-600 dark:text-amber-300">
                              edited since approval
                            </Badge>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs">{entity.provenance}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-0.5">
                          <span className={cn("text-xs font-medium", entity.live ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground")}>
                            {entity.live ? "live" : "not live"}
                          </span>
                          <span className="text-xs text-muted-foreground">{entity.sourceStatus}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1.5">
                          {entity.entityType === "spec" || entity.entityType === "examination" ? (
                            <span className="text-xs text-muted-foreground">
                              Managed in Exam blueprints
                            </span>
                          ) : actions.length === 0 ? (
                            <span className="text-xs text-muted-foreground">
                              {role === "editor" && entity.status !== "draft"
                                ? "Awaiting teacher/admin"
                                : "No action available"}
                            </span>
                          ) : (
                            actions.map((action) => (
                              <Button
                                key={action}
                                type="button"
                                size="sm"
                                variant={action === "reject" ? "outline" : "secondary"}
                                className="h-7 gap-1 px-2 text-xs"
                                onClick={() => onAction(entity, action)}
                              >
                                {GOVERNANCE_ACTION_LABELS[action]}
                              </Button>
                            ))
                          )}
                          {entity.href ? (
                            <a
                              href={entity.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-7 items-center rounded-md border px-2 text-xs hover:bg-secondary"
                            >
                              Open
                            </a>
                          ) : null}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={registry.page <= 1 || loading}
              onClick={() => onFilters({ page: filters.page - 1 })}
            >
              <ChevronLeft className="size-4" /> Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {registry.page} / {registry.pageCount}
            </span>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={registry.page >= registry.pageCount || loading}
              onClick={() => onFilters({ page: filters.page + 1 })}
            >
              Next <ChevronRight className="size-4" />
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}
