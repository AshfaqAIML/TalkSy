"use client";

/**
 * Examination blueprint management (admin).
 *
 * Everything a specification must carry, managed in one place:
 * examination name, type, version, effective date, section names and
 * timing, task types, question formats, scoring configuration, test
 * instructions, official source references and the last review date.
 *
 * The seven-step format-change workflow runs from here:
 *   1. New draft version (button)          — version auto-increments
 *   2/3. Structured editor: sections, timing, instructions, task types,
 *        scoring, sources, review date     — drafts only
 *   4. "Review questions" — impact report (types that disappeared, the
 *      questions using them)
 *   5. "Update mocks" — repoint mocks to the new version
 *   6. "Publish" — activate (previous version retires automatically)
 *   7. History — retired versions stay, attempts keep their pinned spec,
 *      active/retired specs refuse edits (never silently changed).
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ExternalLink,
  FileCheck2,
  GitBranch,
  History,
  ListChecks,
  Pencil,
  PlusCircle,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import type { SpecDto, SpecSection, SourceRef, TaskType } from "@/lib/exams/types";
import type { SpecImpactDto } from "@/lib/exams/admin/types";

type MockAdminRow = {
  id: string;
  examKey: string;
  variant: string;
  title: string;
  kind: string;
  lengthLabel: string;
  status: string;
  spec: { name: string; version: number; status: string };
  sectionCount: number;
  questionCount: number;
  attemptCount: number;
  updatedAt: string;
};

const STATUS_STYLES: Record<string, string> = {
  active: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  draft: "bg-amber-500/15 text-amber-600 dark:text-amber-300",
  retired: "bg-slate-500/15 text-slate-500",
  published: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  archived: "bg-slate-500/15 text-slate-500",
};

// ---------------------------------------------------------------------------
// Structured spec editor state
// ---------------------------------------------------------------------------

type SectionRow = {
  key: string;
  label: string;
  minutes: string;
  questionCount: string;
  taskTypes: string;
  directions: string;
  preserved: Partial<SpecSection>;
};

type TaskTypeRow = {
  type: string;
  label: string;
  objective: boolean;
  preserved: Partial<TaskType>;
};

type SourceRow = {
  label: string;
  url: string;
  retrievedAt: string;
  note: string;
  preserved: Partial<SourceRef>;
};

type EditorState = {
  specId: string | null; // null = create
  examKey: "IELTS" | "TOEFL_IBT";
  variant: string;
  name: string;
  effectiveDate: string;
  lastReviewedAt: string;
  notes: string;
  sections: SectionRow[];
  taskTypes: TaskTypeRow[];
  sources: SourceRow[];
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  minScore: string;
  maxScore: string;
  validityMonths: string;
  transitionNote: string;
  base: {
    scoringModel: Record<string, unknown>;
    sections: SpecSection[];
    taskTypes: TaskType[];
    sourceRefs: SourceRef[];
  };
};

function editorFromSpec(spec: SpecDto): EditorState {
  return {
    specId: spec.id,
    examKey: spec.examKey,
    variant: spec.variant,
    name: spec.name,
    effectiveDate: spec.effectiveDate.slice(0, 10),
    lastReviewedAt: spec.lastReviewedAt.slice(0, 10),
    notes: spec.notes ?? "",
    sections: spec.sections.map((section) => ({
      key: section.key,
      label: section.label,
      minutes: String(Math.round(section.timingSec / 60)),
      questionCount: String(section.questionCount ?? 0),
      taskTypes: (section.taskTypes ?? []).join(", "),
      directions: section.directions ?? "",
      preserved: section,
    })),
    taskTypes: spec.taskTypes.map((task) => ({
      type: task.type,
      label: task.label,
      objective: task.objective,
      preserved: task,
    })),
    sources: spec.sourceRefs.map((ref) => ({
      label: ref.label,
      url: ref.url,
      retrievedAt: ref.retrievedAt?.slice(0, 10) ?? "",
      note: ref.note ?? "",
      preserved: ref,
    })),
    scoringKind: spec.scoringModel.kind,
    minScore: String(spec.scoringModel.minSectionScore),
    maxScore: String(spec.scoringModel.maxSectionScore),
    validityMonths: String(spec.scoringModel.validityMonths ?? 24),
    transitionNote: spec.scoringModel.transitionNote ?? "",
    base: {
      scoringModel: spec.scoringModel as unknown as Record<string, unknown>,
      sections: spec.sections,
      taskTypes: spec.taskTypes,
      sourceRefs: spec.sourceRefs,
    },
  };
}

function payloadFromEditor(state: EditorState): Record<string, unknown> {
  const sections = state.sections.map((row) => ({
    ...state.base.sections.find((section) => section.key === row.key),
    ...row.preserved,
    key: row.key.trim(),
    label: row.label.trim(),
    timingSec: Math.max(60, Math.round(Number(row.minutes || 0) * 60)),
    questionCount: Number(row.questionCount || 0),
    taskTypes: row.taskTypes
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean),
    directions: row.directions,
  }));
  const taskTypes = state.taskTypes.map((row) => ({
    ...state.base.taskTypes.find((task) => task.type === row.type),
    ...row.preserved,
    type: row.type.trim(),
    label: row.label.trim(),
    objective: row.objective,
  }));
  const sourceRefs = state.sources.map((row) => ({
    ...state.base.sourceRefs.find((ref) => ref.url === row.url),
    ...row.preserved,
    label: row.label.trim(),
    url: row.url.trim(),
    retrievedAt: row.retrievedAt,
    ...(row.note ? { note: row.note } : {}),
  }));
  return {
    sections,
    scoringModel: {
      ...state.base.scoringModel,
      kind: state.scoringKind,
      minSectionScore: Number(state.minScore || 0),
      maxSectionScore: Number(state.maxScore || 9),
      validityMonths: Number(state.validityMonths || 24),
      ...(state.transitionNote ? { transitionNote: state.transitionNote } : {}),
    },
    taskTypes,
    sourceRefs,
  };
}

// ---------------------------------------------------------------------------
// Tab
// ---------------------------------------------------------------------------

export function ExamBlueprintsTab({ role }: { role: string }) {
  const [specs, setSpecs] = useState<SpecDto[]>([]);
  const [mocks, setMocks] = useState<MockAdminRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editor, setEditor] = useState<EditorState | null>(null);
  const [saving, setSaving] = useState(false);
  const [impactFor, setImpactFor] = useState<SpecDto | null>(null);
  const [impact, setImpact] = useState<SpecImpactDto | null>(null);
  const [busy, setBusy] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const load = useCallback(() => setReloadKey((key) => key + 1), []);

  useEffect(() => {
    void (async () => {
      const [specsResponse, mocksResponse] = await Promise.all([
        request<{ specs: SpecDto[] }>("/api/exams/admin/specs"),
        request<{ mocks: MockAdminRow[] }>("/api/exams/admin/mocks"),
      ]);
      if (specsResponse.ok) setSpecs(specsResponse.data.specs);
      if (mocksResponse.ok) setMocks(mocksResponse.data.mocks);
      setLoading(false);
    })();
  }, [reloadKey]);

  const activeSpec = (key: string, specVariant: string) =>
    specs.find((s) => s.examKey === key && s.variant === specVariant && s.status === "active");

  const openCreate = () => {
    const template =
      activeSpec("IELTS", "ACADEMIC") ?? specs.find((s) => s.examKey === "IELTS");
    if (!template) {
      toast.error("Create the first specification from a seed before drafting new versions.");
      return;
    }
    const state = editorFromSpec({ ...template, notes: "" });
    state.specId = null;
    state.name = `${template.name} (update)`;
    state.notes = "";
    state.effectiveDate = new Date().toISOString().slice(0, 10);
    setEditor(state);
  };

  const openEdit = (spec: SpecDto) => setEditor(editorFromSpec(spec));

  const saveEditor = async () => {
    if (!editor) return;
    setSaving(true);
    try {
      const payload = payloadFromEditor(editor);
      const response = editor.specId
        ? await request<{ spec: SpecDto }>(`/api/exams/admin/specs/${editor.specId}`, {
            method: "PATCH",
            body: JSON.stringify({
              name: editor.name,
              effectiveDate: editor.effectiveDate,
              lastReviewedAt: editor.lastReviewedAt,
              notes: editor.notes,
              payload,
            }),
          })
        : await request<{ spec: SpecDto }>("/api/exams/admin/specs", {
            method: "POST",
            body: JSON.stringify({
              examKey: editor.examKey,
              variant: editor.variant,
              name: editor.name,
              effectiveDate: editor.effectiveDate,
              notes: editor.notes,
              payload,
            }),
          });
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      toast.success(
        editor.specId
          ? "Draft updated."
          : `Draft v${response.data.spec.version} created for ${response.data.spec.name}.`,
      );
      setEditor(null);
      await load();
    } finally {
      setSaving(false);
    }
  };

  const specAction = async (id: string, action: "activate" | "retire") => {
    setBusy(true);
    try {
      const response = await request<{ spec: SpecDto }>(`/api/exams/admin/specs/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ action }),
      });
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      toast.success(
        action === "activate"
          ? `v${response.data.spec.version} is now active — the previous version retired and history is kept.`
          : `v${response.data.spec.version} retired. The previous version (if any) is active again.`,
      );
      await load();
    } finally {
      setBusy(false);
    }
  };

  const openImpact = async (spec: SpecDto) => {
    setImpactFor(spec);
    setImpact(null);
    const response = await request<{ impact: SpecImpactDto }>(
      `/api/exams/admin/specs/${spec.id}/impact`,
    );
    if (response.ok) setImpact(response.data.impact);
    else toast.error(response.error);
  };

  const relinkMocks = async (specId: string) => {
    setBusy(true);
    try {
      const response = await request<{ relinked: number; specVersion: number }>(
        `/api/exams/admin/specs/${specId}/relink-mocks`,
        { method: "POST" },
      );
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      toast.success(
        `${response.data.relinked} mock(s) now run on v${response.data.specVersion}. Historical attempts keep their pinned version.`,
      );
      await openImpact(specs.find((spec) => spec.id === specId) ?? impactFor!);
      await load();
    } finally {
      setBusy(false);
    }
  };

  const setMockStatus = async (id: string, status: string) => {
    const response = await request<{ mock: { id: string; status: string } }>(
      "/api/exams/admin/mocks",
      { method: "PATCH", body: JSON.stringify({ id, status }) },
    );
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success(`Mock is now ${status}.`);
    await load();
  };

  const curatorMocks = useMemo(
    () => mocks.filter((mock) => !["section", "timed", "untimed", "custom", "mistakes"].includes(mock.kind)),
    [mocks],
  );

  return (
    <div className="space-y-6">
      {/* Test specifications */}
      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <ListChecks className="size-4 text-primary" aria-hidden /> Examination blueprints
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Versioned specifications — name, type, effective date, sections, timing, task
              types, question formats, scoring, instructions, official sources and the last
              review date. One <em>active</em> version per exam; history is kept.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1.5" onClick={load}>
              <RefreshCw className="size-3.5" aria-hidden /> Refresh
            </Button>
            {role === "admin" ? (
              <Button size="sm" className="gap-1.5" onClick={openCreate}>
                <PlusCircle className="size-3.5" aria-hidden /> New draft version
              </Button>
            ) : null}
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="py-6 text-center text-sm text-muted-foreground">Loading…</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Examination</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Effective</TableHead>
                  <TableHead>Reviewed</TableHead>
                  <TableHead>Sections</TableHead>
                  <TableHead>Sources</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specs.map((spec) => (
                  <TableRow key={spec.id}>
                    <TableCell>
                      <div className="font-medium">{spec.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {spec.examKey}
                        {spec.variant !== "STANDARD" ? ` · ${spec.variant}` : ""}
                      </div>
                    </TableCell>
                    <TableCell>v{spec.version}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          STATUS_STYLES[spec.status] ?? "bg-slate-500/15 text-slate-500",
                        )}
                      >
                        {spec.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs">{spec.effectiveDate.slice(0, 10)}</TableCell>
                    <TableCell className="text-xs">{spec.lastReviewedAt.slice(0, 10)}</TableCell>
                    <TableCell className="text-xs">
                      {spec.sections.map((section) => `${section.key} (${Math.round(section.timingSec / 60)}m)`).join(" · ")}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        {spec.sourceRefs.slice(0, 2).map((ref) => (
                          <a
                            key={ref.url}
                            href={ref.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex max-w-52 items-center gap-1 truncate text-xs text-sky-600 hover:underline dark:text-sky-400"
                          >
                            {ref.label} <ExternalLink className="size-3 shrink-0" aria-hidden />
                          </a>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-wrap justify-end gap-1.5">
                        {spec.status === "draft" ? (
                          <>
                            <Button size="sm" variant="outline" onClick={() => openEdit(spec)}>
                              <Pencil className="mr-1 size-3.5" aria-hidden /> Edit
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => void openImpact(spec)}>
                              <Workflow className="mr-1 size-3.5" aria-hidden /> Workflow
                            </Button>
                            {role === "admin" ? (
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={busy}
                                onClick={() => void specAction(spec.id, "activate")}
                              >
                                Publish
                              </Button>
                            ) : null}
                          </>
                        ) : null}
                        {spec.status === "active" && role === "admin" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={busy}
                            onClick={() => void specAction(spec.id, "retire")}
                          >
                            Retire
                          </Button>
                        ) : null}
                        {spec.status === "retired" ? (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <History className="size-3.5" aria-hidden /> history
                          </span>
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
            Exam rules are data, never code. A specification that is active or retired is
            immutable — it may carry historical learner attempts. To change the test, create
            a new version; existing attempts keep the version they were built with.
          </p>
        </CardContent>
      </Card>

      {/* Mock tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <FileCheck2 className="size-4 text-primary" aria-hidden /> Mock examinations
          </CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Lifecycle control for curated mock examinations. Publishing requires an
            administrator and every question published (review → approval → publish).
          </p>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="py-6 text-center text-sm text-muted-foreground">Loading…</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mock</TableHead>
                  <TableHead>Spec</TableHead>
                  <TableHead>Sections</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Attempts</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {curatorMocks.map((mock) => (
                  <TableRow key={mock.id}>
                    <TableCell>
                      <div className="font-medium">{mock.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {mock.examKey} · {mock.lengthLabel}
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      {mock.spec.name} v{mock.spec.version}
                    </TableCell>
                    <TableCell>{mock.sectionCount}</TableCell>
                    <TableCell>{mock.questionCount}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <History className="size-3.5" aria-hidden /> {mock.attemptCount}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          STATUS_STYLES[mock.status] ?? "bg-slate-500/15 text-slate-500",
                        )}
                      >
                        {mock.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {mock.status !== "published" && role === "admin" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="mr-1.5"
                          onClick={() => void setMockStatus(mock.id, "published")}
                        >
                          Publish
                        </Button>
                      ) : null}
                      {mock.status === "published" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => void setMockStatus(mock.id, "archived")}
                        >
                          Archive
                        </Button>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Structured spec editor */}
      <Dialog open={editor !== null} onOpenChange={(open) => !open && setEditor(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          {editor ? (
            <>
              <DialogHeader>
                <DialogTitle>
                  {editor.specId ? `Edit draft — ${editor.name}` : "New specification draft"}
                </DialogTitle>
                <DialogDescription>
                  The structured editor writes the validated specification JSON: sections
                  and timing, task-type catalog, scoring configuration, test instructions
                  and official sources. Optional fields (navigation policies, raw-score
                  tables) are preserved from the base version.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="spec-edit-name">Examination name</Label>
                    <Input
                      id="spec-edit-name"
                      value={editor.name}
                      onChange={(event) => setEditor({ ...editor, name: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="spec-edit-type">Examination type</Label>
                    <Input
                      id="spec-edit-type"
                      value={`${editor.examKey}${editor.variant !== "STANDARD" ? ` · ${editor.variant}` : ""}`}
                      disabled
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="spec-edit-effective">Effective date</Label>
                    <Input
                      id="spec-edit-effective"
                      type="date"
                      value={editor.effectiveDate}
                      onChange={(event) => setEditor({ ...editor, effectiveDate: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="spec-edit-reviewed">Last review date</Label>
                    <Input
                      id="spec-edit-reviewed"
                      type="date"
                      value={editor.lastReviewedAt}
                      onChange={(event) => setEditor({ ...editor, lastReviewedAt: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="spec-edit-notes">Change notes</Label>
                    <Input
                      id="spec-edit-notes"
                      value={editor.notes}
                      onChange={(event) => setEditor({ ...editor, notes: event.target.value })}
                      placeholder="What did the provider change?"
                    />
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Sections &amp; timing</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setEditor({
                          ...editor,
                          sections: [
                            ...editor.sections,
                            {
                              key: "",
                              label: "",
                              minutes: "20",
                              questionCount: "10",
                              taskTypes: "",
                              directions: "",
                              preserved: {},
                            },
                          ],
                        })
                      }
                    >
                      <PlusCircle className="mr-1 size-3.5" aria-hidden /> Add section
                    </Button>
                  </div>
                  {editor.sections.map((row, index) => (
                    <div key={index} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <Label htmlFor={`section-key-${index}`} className="text-xs">
                          Section key
                        </Label>
                        <Input
                          id={`section-key-${index}`}
                          value={row.key}
                          onChange={(event) => {
                            const sections = [...editor.sections];
                            sections[index] = { ...row, key: event.target.value };
                            setEditor({ ...editor, sections });
                          }}
                          placeholder="listening"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`section-label-${index}`} className="text-xs">
                          Section name
                        </Label>
                        <Input
                          id={`section-label-${index}`}
                          value={row.label}
                          onChange={(event) => {
                            const sections = [...editor.sections];
                            sections[index] = { ...row, label: event.target.value };
                            setEditor({ ...editor, sections });
                          }}
                          placeholder="Listening"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`section-minutes-${index}`} className="text-xs">
                          Timing (minutes)
                        </Label>
                        <Input
                          id={`section-minutes-${index}`}
                          inputMode="numeric"
                          value={row.minutes}
                          onChange={(event) => {
                            const sections = [...editor.sections];
                            sections[index] = { ...row, minutes: event.target.value };
                            setEditor({ ...editor, sections });
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`section-count-${index}`} className="text-xs">
                          Question count
                        </Label>
                        <Input
                          id={`section-count-${index}`}
                          inputMode="numeric"
                          value={row.questionCount}
                          onChange={(event) => {
                            const sections = [...editor.sections];
                            sections[index] = { ...row, questionCount: event.target.value };
                            setEditor({ ...editor, sections });
                          }}
                        />
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <Label htmlFor={`section-types-${index}`} className="text-xs">
                          Task types (comma-separated)
                        </Label>
                        <Input
                          id={`section-types-${index}`}
                          value={row.taskTypes}
                          onChange={(event) => {
                            const sections = [...editor.sections];
                            sections[index] = { ...row, taskTypes: event.target.value };
                            setEditor({ ...editor, sections });
                          }}
                          placeholder="MCQ_SINGLE, MATCHING, FILL_BLANK"
                        />
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <Label htmlFor={`section-directions-${index}`} className="text-xs">
                          Test instructions (directions)
                        </Label>
                        <Textarea
                          id={`section-directions-${index}`}
                          value={row.directions}
                          onChange={(event) => {
                            const sections = [...editor.sections];
                            sections[index] = { ...row, directions: event.target.value };
                            setEditor({ ...editor, sections });
                          }}
                          className="min-h-16 text-xs"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-destructive"
                          aria-label={`Remove section ${row.key || index + 1}`}
                          onClick={() =>
                            setEditor({
                              ...editor,
                              sections: editor.sections.filter((_, i) => i !== index),
                            })
                          }
                        >
                          Remove section
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Task types */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Task types &amp; question formats</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setEditor({
                          ...editor,
                          taskTypes: [
                            ...editor.taskTypes,
                            { type: "", label: "", objective: true, preserved: {} },
                          ],
                        })
                      }
                    >
                      <PlusCircle className="mr-1 size-3.5" aria-hidden /> Add task type
                    </Button>
                  </div>
                  {editor.taskTypes.map((row, index) => (
                    <div key={index} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-3">
                      <div className="space-y-1">
                        <Label htmlFor={`task-type-${index}`} className="text-xs">
                          Type code
                        </Label>
                        <Input
                          id={`task-type-${index}`}
                          value={row.type}
                          onChange={(event) => {
                            const taskTypes = [...editor.taskTypes];
                            taskTypes[index] = { ...row, type: event.target.value };
                            setEditor({ ...editor, taskTypes });
                          }}
                          placeholder="MCQ_SINGLE"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`task-label-${index}`} className="text-xs">
                          Label
                        </Label>
                        <Input
                          id={`task-label-${index}`}
                          value={row.label}
                          onChange={(event) => {
                            const taskTypes = [...editor.taskTypes];
                            taskTypes[index] = { ...row, label: event.target.value };
                            setEditor({ ...editor, taskTypes });
                          }}
                        />
                      </div>
                      <div className="flex items-end justify-between gap-2">
                        <label className="flex items-center gap-2 text-xs" htmlFor={`task-objective-${index}`}>
                          <input
                            id={`task-objective-${index}`}
                            type="checkbox"
                            checked={row.objective}
                            onChange={(event) => {
                              const taskTypes = [...editor.taskTypes];
                              taskTypes[index] = { ...row, objective: event.target.checked };
                              setEditor({ ...editor, taskTypes });
                            }}
                            className="size-4"
                          />
                          Objective (machine-marked)
                        </label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-destructive"
                          aria-label={`Remove task type ${row.type || index + 1}`}
                          onClick={() =>
                            setEditor({
                              ...editor,
                              taskTypes: editor.taskTypes.filter((_, i) => i !== index),
                            })
                          }
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scoring */}
                <div className="space-y-2 rounded-lg border p-3">
                  <p className="text-sm font-semibold">Scoring configuration</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="scoring-kind" className="text-xs">
                        Model
                      </Label>
                      <select
                        id="scoring-kind"
                        value={editor.scoringKind}
                        onChange={(event) =>
                          setEditor({
                            ...editor,
                            scoringKind: event.target.value as "IELTS_BAND" | "TOEFL_BAND_1_6",
                          })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="IELTS_BAND">IELTS band (0–9)</option>
                        <option value="TOEFL_BAND_1_6">TOEFL band (1–6)</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="scoring-min" className="text-xs">
                        Min section score
                      </Label>
                      <Input
                        id="scoring-min"
                        inputMode="decimal"
                        value={editor.minScore}
                        onChange={(event) => setEditor({ ...editor, minScore: event.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="scoring-max" className="text-xs">
                        Max section score
                      </Label>
                      <Input
                        id="scoring-max"
                        inputMode="decimal"
                        value={editor.maxScore}
                        onChange={(event) => setEditor({ ...editor, maxScore: event.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="scoring-validity" className="text-xs">
                        Score validity (months)
                      </Label>
                      <Input
                        id="scoring-validity"
                        inputMode="numeric"
                        value={editor.validityMonths}
                        onChange={(event) =>
                          setEditor({ ...editor, validityMonths: event.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="scoring-transition" className="text-xs">
                      Transition note (optional)
                    </Label>
                    <Input
                      id="scoring-transition"
                      value={editor.transitionNote}
                      onChange={(event) =>
                        setEditor({ ...editor, transitionNote: event.target.value })
                      }
                      placeholder="e.g. dual-reported with the legacy 0–120 scale until 2028"
                    />
                  </div>
                </div>

                {/* Sources */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Official source references</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setEditor({
                          ...editor,
                          sources: [
                            ...editor.sources,
                            {
                              label: "",
                              url: "https://",
                              retrievedAt: new Date().toISOString().slice(0, 10),
                              note: "",
                              preserved: {},
                            },
                          ],
                        })
                      }
                    >
                      <PlusCircle className="mr-1 size-3.5" aria-hidden /> Add source
                    </Button>
                  </div>
                  {editor.sources.map((row, index) => (
                    <div key={index} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-3">
                      <div className="space-y-1">
                        <Label htmlFor={`source-label-${index}`} className="text-xs">
                          Label
                        </Label>
                        <Input
                          id={`source-label-${index}`}
                          value={row.label}
                          onChange={(event) => {
                            const sources = [...editor.sources];
                            sources[index] = { ...row, label: event.target.value };
                            setEditor({ ...editor, sources });
                          }}
                          placeholder="IELTS official"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`source-url-${index}`} className="text-xs">
                          URL
                        </Label>
                        <Input
                          id={`source-url-${index}`}
                          value={row.url}
                          onChange={(event) => {
                            const sources = [...editor.sources];
                            sources[index] = { ...row, url: event.target.value };
                            setEditor({ ...editor, sources });
                          }}
                          placeholder="https://ielts.org/"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`source-date-${index}`} className="text-xs">
                          Retrieved at
                        </Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id={`source-date-${index}`}
                            type="date"
                            value={row.retrievedAt}
                            onChange={(event) => {
                              const sources = [...editor.sources];
                              sources[index] = { ...row, retrievedAt: event.target.value };
                              setEditor({ ...editor, sources });
                            }}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="shrink-0 text-destructive"
                            aria-label={`Remove source ${row.label || index + 1}`}
                            onClick={() =>
                              setEditor({
                                ...editor,
                                sources: editor.sources.filter((_, i) => i !== index),
                              })
                            }
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setEditor(null)}>
                  Cancel
                </Button>
                <Button onClick={() => void saveEditor()} disabled={saving || editor.name.trim().length < 3}>
                  {saving ? "Saving…" : editor.specId ? "Save draft" : "Create draft"}
                </Button>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      {/* Version workflow / impact dialog */}
      <Dialog open={impactFor !== null} onOpenChange={(open) => !open && setImpactFor(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          {impactFor ? (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Workflow className="size-4" aria-hidden />
                  {`Version workflow — ${impactFor.name} v${impactFor.version}`}
                </DialogTitle>
                <DialogDescription>
                  The format-change checklist. Steps 2–3 run in the structured editor;
                  steps 4–5 below; step 6 publishes; step 7 is automatic (history kept,
                  attempts pinned).
                </DialogDescription>
              </DialogHeader>
              {impact ? (
                <div className="space-y-4 text-sm">
                  <ol className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5 bg-emerald-600">1</Badge>
                      <span>Draft v{impact.spec.version} created{impact.previousActive ? ` (current active: v${impact.previousActive.version})` : ""}.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5 bg-emerald-600">2–3</Badge>
                      <span>Sections, timing, instructions and scoring editable in the structured editor while the draft is open.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className={impact.affectedQuestionCount > 0 ? "mt-0.5 bg-amber-600" : "mt-0.5 bg-emerald-600"}>
                        4
                      </Badge>
                      <div>
                        <p>
                          {impact.affectedQuestionCount === 0
                            ? "No existing questions use task types missing from this version's catalog."
                            : `${impact.affectedQuestionCount} question(s) use task types that are no longer in this version's catalog:`}
                        </p>
                        {impact.affectedQuestions.length > 0 ? (
                          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-muted-foreground">
                            {impact.removedTaskTypes.map((entry) => (
                              <li key={entry.type}>
                                {entry.type} — {entry.questionCount} question(s)
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className={impact.staleMockCount > 0 ? "mt-0.5 bg-amber-600" : "mt-0.5 bg-emerald-600"}>
                        5
                      </Badge>
                      <div>
                        <p>
                          {impact.staleMockCount === 0
                            ? "All published mocks already run on this version."
                            : `${impact.staleMockCount} published mock(s) still run on an older version:`}
                        </p>
                        {impact.staleMockCount > 0 ? (
                          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-muted-foreground">
                            {impact.staleMocks.slice(0, 6).map((mock) => (
                              <li key={mock.id}>
                                {mock.title} — on v{mock.specVersion}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {impact.staleMockCount > 0 && role === "admin" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2"
                            disabled={busy}
                            onClick={() => void relinkMocks(impact.spec.id)}
                          >
                            <GitBranch className="mr-1.5 size-3.5" aria-hidden />
                            Repoint mocks to v{impact.spec.version}
                          </Button>
                        ) : null}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5 bg-slate-600">6</Badge>
                      <div>
                        <p>Publish (activate) when the checklist is clear.</p>
                        {impactFor.status === "draft" && role === "admin" ? (
                          <Button
                            size="sm"
                            className="mt-2"
                            disabled={busy}
                            onClick={() => void specAction(impactFor.id, "activate")}
                          >
                            Publish v{impact.spec.version}
                          </Button>
                        ) : null}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5 bg-slate-600">7</Badge>
                      <p>
                        History retained: {impact.attemptsOnPreviousSpec} attempt(s) live on
                        the previous version and keep it — their results stay interpretable.
                      </p>
                    </li>
                  </ol>
                </div>
              ) : (
                <p className="py-6 text-center text-sm text-muted-foreground">Loading impact…</p>
              )}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
