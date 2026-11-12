"use client";

/**
 * Curriculum manager: the full content tree with inline creation dialogs,
 * rename/delete, and workflow actions (submit/approve/publish) per course
 * and lesson. Selecting a lesson opens the LessonEditor.
 */

import { useCallback, useEffect, useState } from "react";
import { BookOpen, ChevronRight, Layers, Plus, Settings2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cmsApi } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { WorkflowBadge } from "./LessonEditor";
import type { CmsCourseTreeDto } from "@/data/cms/types";

type CreateKind = "level" | "course" | "module" | "unit" | "lesson";

export function CurriculumTab({ onOpenLesson }: { onOpenLesson: (id: string) => void }) {
  const user = useAppStore((s) => s.user);
  const role = user?.role ?? "student";
  const [tree, setTree] = useState<CmsCourseTreeDto | null>(null);
  const [dialog, setDialog] = useState<{ kind: CreateKind; parentId?: string } | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [reloadKey, setReloadKey] = useState(0);
  const reload = () => setReloadKey((k) => k + 1);

  useEffect(() => {
    let active = true;
    (async () => {
      const res = await cmsApi.tree();
      if (active) {
        if (res.ok) setTree(res.data);
        else toast.error(res.error);
      }
    })();
    return () => {
      active = false;
    };
  }, [reloadKey]);

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const courseAction = async (id: string, action: string) => {
    const res = await cmsApi.courseAction(id, action);
    if (res.ok) {
      toast.success(action === "publish" ? "Course published." : `Course → ${res.data.course.status}.`);
      reload();
    } else toast.error(res.error);
  };

  const remove = async (kind: string, id: string, label: string) => {
    if (!confirm(`Delete ${kind} "${label}"? This also deletes everything inside it.`)) return;
    const res =
      kind === "level"
        ? await cmsApi.deleteLevel(id)
        : kind === "course"
          ? await cmsApi.deleteCourse(id)
          : kind === "module"
            ? await cmsApi.deleteModule(id)
            : kind === "unit"
              ? await cmsApi.deleteUnit(id)
              : await cmsApi.deleteLesson(id);
    if (res.ok) {
      toast.success("Deleted.");
      reload();
    } else toast.error(res.error);
  };

  if (!tree) return <div className="py-20 text-center text-sm text-muted-foreground">Loading curriculum…</div>;

  return (
    <div className="flex flex-col gap-6">
      {/* Levels */}
      <Card>
        <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-sm font-semibold">
              <Layers className="size-4" /> Learning levels
            </p>
            <Button variant="outline" size="sm" onClick={() => setDialog({ kind: "level" })} className="gap-1.5">
              <Plus className="size-4" /> Add level
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tree.levels.length === 0 ? (
              <p className="text-sm text-muted-foreground">No levels yet. Levels organise courses (e.g. A1 Beginner).</p>
            ) : null}
            {tree.levels.map((l) => (
              <div key={l.id} className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm">
                <span className="font-medium">{l.name}</span>
                <span className="text-xs text-muted-foreground">{l.slug}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-6 text-destructive"
                  aria-label={`Delete level ${l.name}`}
                  onClick={() => remove("level", l.id, l.name)}
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Courses */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Courses</h2>
        <Button size="sm" onClick={() => setDialog({ kind: "course" })} className="gap-1.5">
          <Plus className="size-4" /> New course
        </Button>
      </div>

      {tree.courses.length === 0 ? (
        <p className="text-sm text-muted-foreground">No courses yet — create your first course.</p>
      ) : null}

      {tree.courses.map((course) => {
        const open = expanded.has(course.id);
        return (
          <Card key={course.id}>
            <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggle(course.id)}
                  className="flex items-center gap-1.5 text-left"
                  aria-expanded={open}
                >
                  <ChevronRight className={`size-4 transition-transform ${open ? "rotate-90" : ""}`} />
                  <BookOpen className="size-4 text-primary" />
                  <span className="font-semibold">{course.title}</span>
                </button>
                <WorkflowBadge status={course.status} live={course.live} />
                {course.levelName ? <Badge variant="secondary">{course.levelName}</Badge> : null}
                <Badge variant="outline">{course.enrolmentCount} enrolled</Badge>
                <div className="ml-auto flex flex-wrap items-center gap-1.5">
                  {course.status === "draft" ? (
                    <Button size="sm" variant="outline" onClick={() => courseAction(course.id, "submit")}>
                      Submit for review
                    </Button>
                  ) : null}
                  {course.status === "review" && (role === "teacher" || role === "admin") ? (
                    <>
                      <Button size="sm" onClick={() => courseAction(course.id, "approve")}>Approve</Button>
                      <Button size="sm" variant="outline" onClick={() => courseAction(course.id, "reject")}>
                        Request changes
                      </Button>
                    </>
                  ) : null}
                  {course.status === "approved" && role === "admin" && !course.live ? (
                    <Button size="sm" onClick={() => courseAction(course.id, "publish")}>Publish</Button>
                  ) : null}
                  {course.live && role === "admin" ? (
                    <Button size="sm" variant="outline" onClick={() => courseAction(course.id, "unpublish")}>
                      Unpublish
                    </Button>
                  ) : null}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 text-destructive"
                    aria-label={`Delete course ${course.title}`}
                    onClick={() => remove("course", course.id, course.title)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              {course.description ? (
                <p className="text-sm text-muted-foreground">{course.description}</p>
              ) : null}

              {open ? (
                <div className="flex flex-col gap-3 border-l-2 border-border pl-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Modules</p>
                    <Button variant="outline" size="sm" onClick={() => setDialog({ kind: "module", parentId: course.id })} className="gap-1.5">
                      <Plus className="size-3.5" /> Add module
                    </Button>
                  </div>
                  {course.modules.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No modules yet.</p>
                  ) : null}
                  {course.modules.map((mod) => {
                    const modOpen = expanded.has(mod.id);
                    return (
                      <div key={mod.id} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => toggle(mod.id)}
                            className="flex items-center gap-1.5 text-sm font-medium"
                            aria-expanded={modOpen}
                          >
                            <ChevronRight className={`size-3.5 transition-transform ${modOpen ? "rotate-90" : ""}`} />
                            {mod.title}
                          </button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-6 text-destructive"
                            aria-label={`Delete module ${mod.title}`}
                            onClick={() => remove("module", mod.id, mod.title)}
                          >
                            <Trash2 className="size-3" />
                          </Button>
                        </div>
                        {modOpen ? (
                          <div className="flex flex-col gap-2 border-l border-border pl-4">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Units</p>
                              <Button variant="outline" size="sm" onClick={() => setDialog({ kind: "unit", parentId: mod.id })} className="gap-1.5">
                                <Plus className="size-3.5" /> Add unit
                              </Button>
                            </div>
                            {mod.units.length === 0 ? (
                              <p className="text-sm text-muted-foreground">No units yet.</p>
                            ) : null}
                            {mod.units.map((unit) => (
                              <div key={unit.id} className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium">{unit.title}</span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="size-6 text-destructive"
                                    aria-label={`Delete unit ${unit.title}`}
                                    onClick={() => remove("unit", unit.id, unit.title)}
                                  >
                                    <Trash2 className="size-3" />
                                  </Button>
                                </div>
                                <div className="flex flex-col gap-1 pl-4">
                                  {unit.lessons.map((lesson) => (
                                    <div
                                      key={lesson.id}
                                      className="flex flex-wrap items-center gap-2 rounded-lg border px-3 py-1.5 text-sm"
                                    >
                                      <button
                                        type="button"
                                        className="font-medium hover:underline"
                                        onClick={() => onOpenLesson(lesson.id)}
                                      >
                                        <Settings2 className="mr-1 inline size-3.5 text-primary" />
                                        {lesson.title}
                                      </button>
                                      <WorkflowBadge status={lesson.status} live={lesson.live} />
                                      <span className="text-xs text-muted-foreground">
                                        {lesson.blockCount} blocks · v{lesson.version}
                                      </span>
                                      {lesson.prerequisiteSlugs.length > 0 ? (
                                        <Badge variant="outline">
                                          needs {lesson.prerequisiteSlugs.length}
                                        </Badge>
                                      ) : null}
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="ml-auto size-6 text-destructive"
                                        aria-label={`Delete lesson ${lesson.title}`}
                                        onClick={() => remove("lesson", lesson.id, lesson.title)}
                                      >
                                        <Trash2 className="size-3" />
                                      </Button>
                                    </div>
                                  ))}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-fit gap-1.5"
                                    onClick={() => setDialog({ kind: "lesson", parentId: unit.id })}
                                  >
                                    <Plus className="size-3.5" /> Add lesson
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </CardContent>
          </Card>
        );
      })}

      {dialog ? (
        <CreateDialog
          kind={dialog.kind}
          parentId={dialog.parentId}
          levels={tree.levels.map((l) => ({ id: l.id, name: l.name }))}
          onDone={() => {
            setDialog(null);
            reload();
          }}
          onCancel={() => setDialog(null)}
        />
      ) : null}
    </div>
  );
}

function CreateDialog({
  kind,
  parentId,
  levels,
  onDone,
  onCancel,
}: {
  kind: CreateKind;
  parentId?: string;
  levels: { id: string; name: string }[];
  onDone: () => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [levelId, setLevelId] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setBusy(true);
    const body =
      kind === "level"
        ? { name: title, description }
        : kind === "course"
          ? { title, description, levelId: levelId || null }
          : kind === "module"
            ? { courseId: parentId, title, description }
            : kind === "unit"
              ? { moduleId: parentId, title, description }
              : { unitId: parentId, title, description };
    const res =
      kind === "level"
        ? await cmsApi.createLevel(body as { name: string; description?: string })
        : kind === "course"
          ? await cmsApi.createCourse(body as { title: string })
          : kind === "module"
            ? await cmsApi.createModule(body as { courseId: string; title: string })
            : kind === "unit"
              ? await cmsApi.createUnit(body as { moduleId: string; title: string })
              : await cmsApi.createLesson(body as { unitId: string; title: string });
    setBusy(false);
    if (res.ok) {
      toast.success("Created.");
      onDone();
    } else toast.error(res.error);
  };

  const labels: Record<CreateKind, string> = {
    level: "learning level",
    course: "course",
    module: "module",
    unit: "unit",
    lesson: "lesson",
  };

  return (
    <Dialog open onOpenChange={(o) => (o ? null : onCancel())}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New {labels[kind]}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="entity-title">{kind === "level" ? "Name" : "Title"}</Label>
            <Input
              id="entity-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={kind === "level" ? "A1 Beginner" : "My new title"}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="entity-desc">Description (optional)</Label>
            <Textarea id="entity-desc" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          {kind === "course" ? (
            <div className="flex flex-col gap-1.5">
              <Label>Level (optional)</Label>
              <Select value={levelId} onValueChange={setLevelId}>
                <SelectTrigger>
                  <SelectValue placeholder="No level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((l) => (
                    <SelectItem key={l.id} value={l.id}>
                      {l.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={submit} disabled={busy || title.trim().length < 3}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
