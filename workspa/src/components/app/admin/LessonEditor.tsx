"use client";

/**
 * Structured visual lesson editor.
 *
 * Left: ordered block list (add from palette, reorder, delete).
 * Right: per-block edit form (BlockEditor) with live preview.
 * Plus: metadata (objectives, minutes), prerequisites, workflow actions,
 * revision history with restore, and a full preview mode.
 */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Eye,
  History,
  Pencil,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cmsApi } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { CmsBlockView } from "@/components/app/cms/CmsBlockViews";
import { BlockEditor, Field, StringList, type BlockState } from "./BlockEditor";
import {
  CMS_BLOCK_META,
  CMS_BLOCK_TYPES,
  defaultCmsBlock,
  type CmsBlockType,
  type CmsLessonDetailDto,
  type CmsQuestionDto,
} from "@/data/cms/types";
import type { Exercise, SafeExercise } from "@/data/curriculum/types";
import { cn } from "@/lib/utils";

export function LessonEditor({
  lessonId,
  onBack,
}: {
  lessonId: string;
  onBack: () => void;
}) {
  const user = useAppStore((s) => s.user);
  const role = user?.role ?? "student";
  const [detail, setDetail] = useState<CmsLessonDetailDto | null>(null);
  const [questions, setQuestions] = useState<CmsQuestionDto[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState<string[]>([]);
  const [minutes, setMinutes] = useState(10);
  const [blocks, setBlocks] = useState<BlockState[]>([]);
  const [prereqIds, setPrereqIds] = useState<string[]>([]);
  const [changeNote, setChangeNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      const res = await cmsApi.lesson(lessonId);
      if (!active) return;
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      const d = res.data;
      setDetail(d);
      setTitle(d.title);
      setDescription(d.description);
      setObjectives(d.objectives);
      setMinutes(d.estimatedMinutes);
      setBlocks(d.blocks);
      setPrereqIds(d.prerequisites.map((p) => p.id));
      setDirty(false);
    })();
    return () => {
      active = false;
    };
  }, [lessonId, reloadKey]);

  const reload = () => setReloadKey((k) => k + 1);

  useEffect(() => {
    void (async () => {
      const res = await cmsApi.questions({});
      if (res.ok) setQuestions(res.data.questions);
    })();
  }, []);

  const questionOptions = useMemo(
    () =>
      questions.map((q) => ({
        id: q.id,
        label: `${q.prompt.slice(0, 60)}${q.prompt.length > 60 ? "…" : ""} (${q.type})`,
        status: q.status,
      })),
    [questions],
  );

  // Asset list for image/audio pickers.
  const [assets, setAssets] = useState<{ id: string; title: string; kind: string }[]>([]);
  useEffect(() => {
    void (async () => {
      const res = await cmsApi.assets();
      if (res.ok) setAssets(res.data.assets.map((a) => ({ id: a.id, title: a.title, kind: a.kind })));
    })();
  }, []);

  const exercisesById = useMemo(() => {
    const map: Record<string, SafeExercise> = {};
    for (const ex of (detail?.exercises ?? []) as Exercise[]) map[ex.id] = ex as unknown as SafeExercise;
    return map;
  }, [detail]);

  const touch = () => setDirty(true);

  const save = async () => {
    setSaving(true);
    const res = await cmsApi.saveLesson(lessonId, {
      title,
      description,
      objectives,
      estimatedMinutes: minutes,
      blocks,
      prerequisiteIds: prereqIds,
      changeNote,
    });
    setSaving(false);
    if (res.ok) {
      toast.success(`Saved as version ${res.data.lesson.version}.`);
      setChangeNote("");
      setDetail(res.data.detail);
      setBlocks(res.data.detail.blocks);
      setDirty(false);
    } else {
      toast.error(res.error);
    }
  };

  const act = async (action: string) => {
    const res = await cmsApi.lessonAction(lessonId, action);
    if (res.ok) {
      toast.success(
        action === "publish"
          ? "Lesson published — learners see this version now."
          : action === "unpublish"
            ? "Lesson unpublished."
            : `Lesson moved to ${res.data.lesson.status}.`,
      );
      reload();
    } else {
      toast.error(res.error);
    }
  };

  const restore = async (version: number) => {
    const res = await cmsApi.restoreLessonVersion(lessonId, version);
    if (res.ok) {
      toast.success(`Restored version ${version} as new version ${res.data.lesson.version}.`);
      reload();
    } else {
      toast.error(res.error);
    }
  };

  if (!detail) {
    return <div className="py-20 text-center text-sm text-muted-foreground">Loading lesson…</div>;
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
          <ArrowLeft className="size-4" /> Curriculum
        </Button>
        <h1 className="text-xl font-bold">{title || detail.title}</h1>
        <WorkflowBadge status={detail.status} live={detail.live} />
        <span className="text-xs text-muted-foreground">
          v{detail.version}
          {detail.publishedVersion ? ` · published v${detail.publishedVersion}` : ""}
        </span>
        {dirty ? <Badge variant="destructive">Unsaved changes</Badge> : null}
        <div className="ml-auto flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreview((p) => !p)} className="gap-1.5">
            <Eye className="size-4" /> {preview ? "Edit" : "Preview"}
          </Button>
          {detail.status === "draft" ? (
            <Button size="sm" variant="outline" onClick={() => act("submit")} disabled={blocks.length === 0}>
              Submit for review
            </Button>
          ) : null}
          {detail.status === "review" ? (
            <>
              {(role === "teacher" || role === "admin") && (
                <Button size="sm" onClick={() => act("approve")}>
                  Approve
                </Button>
              )}
              {(role === "teacher" || role === "admin") && (
                <Button size="sm" variant="outline" onClick={() => act("reject")}>
                  Request changes
                </Button>
              )}
            </>
          ) : null}
          {detail.status === "approved" && role === "admin" ? (
            <Button size="sm" onClick={() => act("publish")}>
              Publish
            </Button>
          ) : null}
          {detail.live && role === "admin" ? (
            <Button size="sm" variant="outline" onClick={() => act("unpublish")}>
              Unpublish
            </Button>
          ) : null}
        </div>
      </div>

      {preview ? (
        /* ------------------------- PREVIEW ------------------------- */
        <Card>
          <CardContent className="flex flex-col gap-6 p-4 py-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <Badge variant="secondary" className="w-fit">Preview · {detail.courseTitle}</Badge>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
              {objectives.length > 0 ? (
                <div className="rounded-lg bg-secondary/50 p-4">
                  <p className="mb-2 text-sm font-semibold">In this lesson you will learn to:</p>
                  <ul className="list-disc pl-5 text-sm">
                    {objectives.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            {blocks.map((b) => (
              <CmsBlockView
                key={b.id}
                block={b}
                mode="preview"
                exercisesById={exercisesById}
              />
            ))}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* ------------------------- LEFT: block list ------------------------- */}
          <div className="flex flex-col gap-3">
            <Card>
              <CardContent className="flex flex-col gap-2 p-4">
                <p className="text-sm font-semibold">Content blocks ({blocks.length})</p>
                <div className="flex flex-col gap-1.5">
                  {blocks.map((b, i) => (
                    <div
                      key={b.id}
                      className={cn(
                        "flex items-center gap-1 rounded-lg border px-2 py-1.5 text-sm",
                        detail && b.id === blocks[i]?.id ? "bg-background" : "",
                      )}
                    >
                      <span className="flex-1 truncate">
                        {CMS_BLOCK_META[b.type as CmsBlockType]?.label ?? b.type}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7"
                        aria-label={`Move block ${i + 1} up`}
                        disabled={i === 0}
                        onClick={() => {
                          const next = [...blocks];
                          [next[i - 1], next[i]] = [next[i], next[i - 1]];
                          setBlocks(next);
                          touch();
                        }}
                      >
                        <ArrowUp className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7"
                        aria-label={`Move block ${i + 1} down`}
                        disabled={i === blocks.length - 1}
                        onClick={() => {
                          const next = [...blocks];
                          [next[i + 1], next[i]] = [next[i], next[i + 1]];
                          setBlocks(next);
                          touch();
                        }}
                      >
                        <ArrowDown className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-destructive"
                        aria-label={`Remove block ${i + 1}`}
                        onClick={() => {
                          setBlocks(blocks.filter((_, j) => j !== i));
                          touch();
                        }}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2 p-4">
                <p className="text-sm font-semibold">Add a block</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {CMS_BLOCK_TYPES.map((t) => (
                    <Button
                      key={t}
                      variant="outline"
                      size="sm"
                      className="h-auto flex-col items-start gap-0 px-2 py-1.5 text-left"
                      title={CMS_BLOCK_META[t].description}
                      onClick={() => {
                        setBlocks([
                          ...blocks,
                          { ...defaultCmsBlock(t), id: crypto.randomUUID() } as BlockState,
                        ]);
                        touch();
                      }}
                    >
                      <span className="text-xs font-semibold leading-tight">{CMS_BLOCK_META[t].label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ------------------------- RIGHT: editors ------------------------- */}
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  <Pencil className="size-4" /> Lesson details
                </p>
                <Field label="Title">
                  <Input value={title} onChange={(e) => (setTitle(e.target.value), touch())} />
                </Field>
                <Field label="Short description">
                  <Textarea rows={2} value={description} onChange={(e) => (setDescription(e.target.value), touch())} />
                </Field>
                <StringList
                  label="Learning objectives"
                  values={objectives}
                  onChange={(next) => (setObjectives(next), touch())}
                  placeholder="Greet people at different times of day"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Estimated minutes">
                    <Input
                      type="number"
                      min="1"
                      max="180"
                      value={minutes}
                      onChange={(e) => (setMinutes(Number(e.target.value)), touch())}
                    />
                  </Field>
                  <Field label="Lesson slug" hint="Read-only identifier.">
                    <Input value={detail.slug} disabled />
                  </Field>
                </div>
                <Field
                  label="Prerequisites"
                  hint="Learners must complete these lessons first. Only lessons in the same course are sensible."
                >
                  <div className="flex max-h-40 flex-col gap-1.5 overflow-y-auto rounded-lg border p-3">
                    {questions === null ? null : null}
                    <PrereqPicker
                      lessonId={lessonId}
                      courseSlug={detail.courseSlug}
                      selected={prereqIds}
                      onChange={(next) => (setPrereqIds(next), touch())}
                    />
                  </div>
                </Field>
              </CardContent>
            </Card>

            {blocks.map((b, i) => (
              <Card key={b.id}>
                <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      Block {i + 1}: {CMS_BLOCK_META[b.type as CmsBlockType]?.label ?? b.type}
                    </p>
                    <X
                      className="size-4 cursor-pointer text-muted-foreground hover:text-destructive"
                      aria-label={`Close block ${i + 1} editor`}
                      onClick={() => {
                        setBlocks(blocks.filter((_, j) => j !== i));
                        touch();
                      }}
                    />
                  </div>
                  <BlockEditor
                    block={b}
                    questions={questionOptions}
                    assets={assets}
                    onChange={(next) => {
                      setBlocks(blocks.map((x, j) => (j === i ? next : x)));
                      touch();
                    }}
                  />
                </CardContent>
              </Card>
            ))}

            {/* Save bar */}
            <Card className="sticky bottom-4 border-primary/40">
              <CardContent className="flex flex-wrap items-center gap-3 p-4">
                <Input
                  className="min-w-48 flex-1"
                  placeholder="Change note (e.g. 'Added vocabulary block')"
                  value={changeNote}
                  onChange={(e) => setChangeNote(e.target.value)}
                />
                <Button onClick={save} disabled={saving || !dirty} className="gap-1.5">
                  <Save className="size-4" /> {saving ? "Saving…" : "Save new version"}
                </Button>
              </CardContent>
            </Card>

            {/* Version history */}
            <Card>
              <CardContent className="flex flex-col gap-2 p-4 sm:p-5">
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  <History className="size-4" /> Revision history
                </p>
                <div className="flex max-h-64 flex-col gap-2 overflow-y-auto">
                  {detail.versions.map((v) => (
                    <div
                      key={v.id}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">
                          v{v.version} {v.version === detail.publishedVersion ? "· published" : ""}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {v.changeNote} — {v.changedByEmail ?? "system"} ·{" "}
                          {new Date(v.createdAt).toLocaleString()}
                        </span>
                      </div>
                      {v.version !== detail.version ? (
                        <Button variant="outline" size="sm" onClick={() => restore(v.version)}>
                          Restore
                        </Button>
                      ) : (
                        <Badge variant="secondary">current</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function PrereqPicker({
  lessonId,
  courseSlug,
  selected,
  onChange,
}: {
  lessonId: string;
  courseSlug: string;
  selected: string[];
  onChange: (next: string[]) => void;
}) {
  const [options, setOptions] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    void (async () => {
      const res = await cmsApi.tree();
      if (!res.ok) return;
      const course = res.data.courses.find((c) => c.slug === courseSlug);
      if (!course) return;
      const list: { id: string; title: string }[] = [];
      for (const m of course.modules) {
        for (const u of m.units) {
          for (const l of u.lessons) {
            if (l.id !== lessonId) list.push({ id: l.id, title: l.title });
          }
        }
      }
      setOptions(list);
    })();
  }, [courseSlug, lessonId]);
  if (options.length === 0) {
    return <p className="text-xs text-muted-foreground">No other lessons in this course yet.</p>;
  }
  return (
    <>
      {options.map((o) => (
        <label key={o.id} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={selected.includes(o.id)}
            onChange={(e) =>
              onChange(e.target.checked ? [...selected, o.id] : selected.filter((x) => x !== o.id))
            }
          />
          {o.title}
        </label>
      ))}
    </>
  );
}

export function WorkflowBadge({ status, live }: { status: string; live: boolean }) {
  if (live) return <Badge className="bg-emerald-600">Published</Badge>;
  if (status === "approved") return <Badge className="bg-amber-600">Approved</Badge>;
  if (status === "review") return <Badge variant="destructive">In review</Badge>;
  return <Badge variant="secondary">Draft</Badge>;
}
