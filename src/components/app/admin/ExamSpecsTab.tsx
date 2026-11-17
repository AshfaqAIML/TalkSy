"use client";

/**
 * Exam administration: test-specification management (the format
 * versioning system) and mock-test lifecycle control.
 *
 * Workflow for a format change (e.g. a provider updates the test):
 *   1. Admin creates a new draft spec (or duplicates the current one's
 *      JSON as a starting point) — version auto-increments.
 *   2. Edits the draft's sections/timing/scoring/source references.
 *   3. Activates it — the previous active spec retires automatically,
 *      and new mocks pin the new version. Existing attempts keep their
 *      pinned spec, so historical results stay interpretable.
 * Every change is audit-logged (CMS audit trail).
 */

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  ExternalLink,
  FileCheck2,
  History,
  ListChecks,
  PlusCircle,
  RefreshCw,
  ShieldCheck,
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
import type { SpecDto } from "@/lib/exams/types";

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

export function ExamSpecsTab({ role }: { role: string }) {
  const [specs, setSpecs] = useState<SpecDto[]>([]);
  const [mocks, setMocks] = useState<MockAdminRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  // Create-draft form state.
  const [examKey, setExamKey] = useState<"IELTS" | "TOEFL_IBT">("IELTS");
  const [variant, setVariant] = useState("ACADEMIC");
  const [name, setName] = useState("");
  const [effectiveDate, setEffectiveDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState("");
  const [payloadJson, setPayloadJson] = useState("");

  const [reloadKey, setReloadKey] = useState(0);

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

  const load = () => setReloadKey((key) => key + 1);

  const activeSpec = (key: string, specVariant: string) =>
    specs.find((s) => s.examKey === key && s.variant === specVariant && s.status === "active");

  const openCreate = () => {
    const template = activeSpec(examKey, variant) ?? specs.find((s) => s.examKey === examKey);
    setPayloadJson(
      template
        ? JSON.stringify(
            {
              sections: template.sections,
              scoringModel: template.scoringModel,
              taskTypes: template.taskTypes,
              sourceRefs: template.sourceRefs,
            },
            null,
            2,
          )
        : "{\n  \"sections\": [],\n  \"scoringModel\": {},\n  \"taskTypes\": [],\n  \"sourceRefs\": []\n}",
    );
    setCreateOpen(true);
  };

  const createDraft = async () => {
    setBusy(true);
    let payload: unknown;
    try {
      payload = JSON.parse(payloadJson);
    } catch {
      toast.error("The specification JSON is not valid JSON.");
      setBusy(false);
      return;
    }
    const response = await request<{ spec: SpecDto }>("/api/exams/admin/specs", {
      method: "POST",
      body: JSON.stringify({ examKey, variant, name, effectiveDate, notes, payload }),
    });
    setBusy(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success(`Draft v${response.data.spec.version} created.`);
    setCreateOpen(false);
    await load();
  };

  const specAction = async (id: string, action: "activate" | "retire") => {
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
        ? `v${response.data.spec.version} is now active — the previous version retired.`
        : `v${response.data.spec.version} retired. The previous version (if any) is active again.`,
    );
    await load();
  };

  const setMockStatus = async (id: string, status: string) => {
    const response = await request<{ mock: { id: string; status: string } }>("/api/exams/admin/mocks", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
    });
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success(`Mock is now ${status}.`);
    await load();
  };

  return (
    <div className="space-y-6">
      {/* Test specifications */}
      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <ListChecks className="size-4 text-primary" aria-hidden /> Test specifications
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Versioned examination formats — sections, timing, task types, scoring and
              official sources. One <em>active</em> version per exam; history is kept.
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
                      {spec.sections.map((section) => section.key).join(" · ")}
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
                      {role === "admin" && spec.status === "draft" ? (
                        <Button size="sm" variant="outline" className="mr-1.5" onClick={() => specAction(spec.id, "activate")}>
                          Activate
                        </Button>
                      ) : null}
                      {role === "admin" && spec.status === "active" ? (
                        <Button size="sm" variant="outline" onClick={() => specAction(spec.id, "retire")}>
                          Retire
                        </Button>
                      ) : null}
                      {spec.status === "retired" ? (
                        <span className="text-xs text-muted-foreground">history</span>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
            Rule of the house: exam rules are data, never code. When a provider changes
            the test, create a new version here — components follow the active spec.
            Existing mock attempts keep the version they were built with.
          </p>
        </CardContent>
      </Card>

      {/* Mock tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <FileCheck2 className="size-4 text-primary" aria-hidden /> Mock tests
          </CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Lifecycle control for mock examinations. Publishing requires an
            administrator; question content ships with the seed or via import.
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
                {mocks.map((mock) => (
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
                        <Button size="sm" variant="outline" className="mr-1.5" onClick={() => setMockStatus(mock.id, "published")}>
                          Publish
                        </Button>
                      ) : null}
                      {mock.status === "published" ? (
                        <Button size="sm" variant="outline" onClick={() => setMockStatus(mock.id, "archived")}>
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

      {/* Create-draft dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>New specification draft</DialogTitle>
            <DialogDescription>
              Creates the next version for the chosen exam+variant. The JSON is
              pre-filled with the current active spec as a starting point — edit what
              the provider changed (sections, timing, task types, scoring, sources),
              then activate when verified.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="spec-exam">Exam</Label>
                <select
                  id="spec-exam"
                  value={examKey}
                  onChange={(event) => {
                    const next = event.target.value as "IELTS" | "TOEFL_IBT";
                    setExamKey(next);
                    setVariant(next === "IELTS" ? "ACADEMIC" : "STANDARD");
                  }}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="IELTS">IELTS</option>
                  <option value="TOEFL_IBT">TOEFL iBT</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="spec-variant">Variant</Label>
                <select
                  id="spec-variant"
                  value={variant}
                  onChange={(event) => setVariant(event.target.value)}
                  disabled={examKey === "TOEFL_IBT"}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm disabled:opacity-50"
                >
                  {examKey === "IELTS" ? (
                    <>
                      <option value="ACADEMIC">Academic</option>
                      <option value="GENERAL_TRAINING">General Training</option>
                    </>
                  ) : (
                    <option value="STANDARD">Standard</option>
                  )}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="spec-name">Name</Label>
                <Input
                  id="spec-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. IELTS Academic (2027 update)"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="spec-date">Effective date</Label>
                <Input
                  id="spec-date"
                  type="date"
                  value={effectiveDate}
                  onChange={(event) => setEffectiveDate(event.target.value)}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="spec-notes">Change notes</Label>
              <Input
                id="spec-notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="What did the provider change?"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="spec-payload">Specification JSON (validated on save)</Label>
              <Textarea
                id="spec-payload"
                value={payloadJson}
                onChange={(event) => setPayloadJson(event.target.value)}
                className="min-h-64 font-mono text-xs"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              Cancel
            </Button>
            <Button onClick={createDraft} disabled={busy || name.trim().length < 3}>
              <BadgeCheck className="mr-1.5 size-4" aria-hidden />
              {busy ? "Creating…" : "Create draft"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
