"use client";

/**
 * Import / export portability + content audit trail.
 *
 * Import is a two-step flow: upload the bundle → server-side validation
 * returns a full preview (counts, errors, warnings, slug renames) → only an
 * explicit "Import" commits, and the commit re-validates before writing.
 */

import { useEffect, useRef, useState } from "react";
import { Download, FileJson, History, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cmsApi, cmsExportCourse } from "@/lib/client/api";
import type { CmsAuditEntryDto, CmsCourseTreeDto, CmsImportPreview } from "@/data/cms/types";

export function PortabilityTab() {
  // -- export --
  const [tree, setTree] = useState<CmsCourseTreeDto | null>(null);
  const [exportId, setExportId] = useState("");

  // -- import --
  const [bundle, setBundle] = useState<unknown>(null);
  const [bundleName, setBundleName] = useState("");
  const [preview, setPreview] = useState<CmsImportPreview | null>(null);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // -- audit --
  const [entries, setEntries] = useState<CmsAuditEntryDto[]>([]);

  useEffect(() => {
    void (async () => {
      const [t, a] = await Promise.all([cmsApi.tree(), cmsApi.audit()]);
      if (t.ok) {
        setTree(t.data);
        setExportId(t.data.courses[0]?.id ?? "");
      }
      if (a.ok) setEntries(a.data.entries);
    })();
  }, []);

  const exportCourse = async () => {
    if (!exportId) {
      toast.error("No course to export yet.");
      return;
    }
    const text = await cmsExportCourse(exportId);
    if (!text) {
      toast.error("Export failed.");
      return;
    }
    const course = tree?.courses.find((c) => c.id === exportId);
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `talksy-${course?.slug ?? "course"}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Course exported (includes its questions with answers — keep the file private).");
  };

  const onFile = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      setBundle(parsed);
      setBundleName(file.name);
      const res = await cmsApi.importPreview(parsed);
      if (res.ok) setPreview(res.data.preview);
      else toast.error(res.error);
    } catch {
      toast.error("That file is not valid JSON.");
    }
  };

  const commit = async () => {
    if (!bundle) return;
    setBusy(true);
    const res = await cmsApi.importCommit(bundle);
    setBusy(false);
    if (res.ok) {
      toast.success(`Imported "${res.data.courseSlug}" as drafts. Review and publish when ready.`);
      setBundle(null);
      setPreview(null);
      setBundleName("");
      if (fileRef.current) fileRef.current.value = "";
      const a = await cmsApi.audit();
      if (a.ok) setEntries(a.data.entries);
    } else toast.error(res.error);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Export */}
      <Card className="h-fit">
        <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <Download className="size-4" /> Export a course
          </p>
          <Select value={exportId} onValueChange={setExportId}>
            <SelectTrigger aria-label="Course to export">
              <SelectValue placeholder="Choose a course" />
            </SelectTrigger>
            <SelectContent>
              {tree?.courses.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.title} ({c.modules.length} modules)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            Downloads a JSON bundle with the course structure, lessons, blocks and all referenced
            questions — including answer keys. Treat export files as confidential teaching material.
          </p>
          <Button onClick={exportCourse} disabled={!exportId} className="w-fit gap-1.5">
            <FileJson className="size-4" /> Download bundle
          </Button>
        </CardContent>
      </Card>

      {/* Import */}
      <Card className="h-fit">
        <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <Upload className="size-4" /> Import a course bundle
          </p>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="text-sm"
            aria-label="Choose a bundle file"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void onFile(f);
            }}
          />
          {bundleName ? <p className="text-xs text-muted-foreground">{bundleName}</p> : null}
          {preview ? (
            <div className="flex flex-col gap-2 rounded-lg border p-3 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                {preview.ok ? (
                  <Badge className="bg-emerald-600">Valid</Badge>
                ) : (
                  <Badge variant="destructive">{preview.errors.length} problems</Badge>
                )}
                <span className="font-medium">{preview.summary.courseTitle}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {preview.summary.modules} modules · {preview.summary.units} units ·{" "}
                {preview.summary.lessons} lessons · {preview.summary.blocks} blocks ·{" "}
                {preview.summary.questions} questions
              </p>
              {preview.summary.renamedSlugs.length > 0 ? (
                <p className="text-xs text-amber-700">
                  Slugs renamed to avoid collisions:{" "}
                  {preview.summary.renamedSlugs
                    .slice(0, 5)
                    .map((r) => `${r.original} → ${r.imported}`)
                    .join(", ")}
                  {preview.summary.renamedSlugs.length > 5 ? "…" : ""}
                </p>
              ) : null}
              {preview.errors.slice(0, 5).map((e, i) => (
                <p key={i} className="text-xs text-destructive">
                  {e.path}: {e.message}
                </p>
              ))}
              {preview.warnings.slice(0, 3).map((w, i) => (
                <p key={i} className="text-xs text-amber-700">
                  {w.path}: {w.message}
                </p>
              ))}
              {preview.ok ? (
                <Button size="sm" onClick={commit} disabled={busy} className="w-fit">
                  {busy ? "Importing…" : "Import as drafts"}
                </Button>
              ) : null}
              <p className="text-xs text-muted-foreground">
                Imports never overwrite existing content — everything arrives as drafts for review.
              </p>
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* Audit trail */}
      <Card className="lg:col-span-2">
        <CardContent className="flex flex-col gap-2 p-4 sm:p-5">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <History className="size-4" /> Content audit trail (latest 100)
          </p>
          <div className="flex max-h-96 flex-col gap-1.5 overflow-y-auto text-sm">
            {entries.length === 0 ? (
              <p className="text-muted-foreground">No changes recorded yet.</p>
            ) : null}
            {entries.map((e) => (
              <div key={e.id} className="flex flex-wrap items-center gap-2 rounded border px-2 py-1 text-xs">
                <Badge variant="secondary">{e.entityType}</Badge>
                <span className="font-medium">{e.action}</span>
                <span className="text-muted-foreground">{e.actorEmail ?? "system"}</span>
                <span className="ml-auto text-muted-foreground">
                  {new Date(e.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
