"use client";

/**
 * Examination content management (admin).
 *
 * Two surfaces:
 *   - The four independent content collections (IELTS Academic, IELTS
 *     General Training, IELTS UKVI preparation, TOEFL iBT) with their
 *     content inventory and official sources.
 *   - The question bank with the human-approval review workflow:
 *     draft → in-review → approved → published. Editors author and
 *     submit; teachers approve or reject; admins publish and retire.
 *     Publishing a question requires approval, and editing published
 *     content sends it back to review — nothing goes live silently.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BookOpenCheck,
  ExternalLink,
  FileQuestion,
  Filter,
  FolderTree,
  Pencil,
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
import type {
  AdminQuestionDto,
  CollectionInventoryDto,
  QuestionReviewState,
} from "@/lib/exams/admin/types";

const STATUS_STYLE: Record<string, string> = {
  draft: "bg-amber-500/15 text-amber-600 dark:text-amber-300",
  "in-review": "bg-sky-500/15 text-sky-600 dark:text-sky-300",
  approved: "bg-violet-500/15 text-violet-600 dark:text-violet-300",
  published: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  retired: "bg-slate-500/15 text-slate-500 line-through",
};

const STATUS_ORDER: QuestionReviewState[] = ["draft", "in-review", "approved", "published", "retired"];

type EditableMock = {
  id: string;
  title: string;
  examKey: string;
  variant: string;
  sections: Array<{ id: string; key: string; title: string }>;
};

type EditorForm = {
  id: string | null;
  sectionId: string;
  type: string;
  stem: string;
  payloadJson: string;
  answerJson: string;
  points: string;
  difficulty: string;
  skills: string;
  explanation: string;
  source: string;
  status: string;
};

function emptyForm(sectionId: string): EditorForm {
  return {
    id: null,
    sectionId,
    type: "MCQ_SINGLE",
    stem: "",
    payloadJson: '{\n  "options": ["", "", ""]\n}',
    answerJson: '{\n  "option": 0\n}',
    points: "1",
    difficulty: "2",
    skills: "",
    explanation: "",
    source: "original-practice",
    status: "draft",
  };
}

export function ExamContentTab({ role }: { role: string }) {
  const [collections, setCollections] = useState<CollectionInventoryDto[]>([]);
  const [questions, setQuestions] = useState<AdminQuestionDto[]>([]);
  const [targets, setTargets] = useState<EditableMock[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterExam, setFilterExam] = useState("all");
  const [search, setSearch] = useState("");
  const [editor, setEditor] = useState<EditorForm | null>(null);
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const load = useCallback(() => setReloadKey((key) => key + 1), []);

  useEffect(() => {
    void (async () => {
      const [collectionsResponse, questionsResponse, targetsResponse] = await Promise.all([
        request<{ collections: CollectionInventoryDto[] }>("/api/exams/admin/collections"),
        request<{ questions: AdminQuestionDto[] }>("/api/exams/admin/questions"),
        request<{ mocks: EditableMock[] }>("/api/exams/admin/questions/targets"),
      ]);
      if (collectionsResponse.ok) setCollections(collectionsResponse.data.collections);
      if (questionsResponse.ok) setQuestions(questionsResponse.data.questions);
      if (targetsResponse.ok) setTargets(targetsResponse.data.mocks);
      setLoading(false);
    })();
  }, [reloadKey]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return questions.filter((question) => {
      if (filterStatus !== "all" && question.contentStatus !== filterStatus) return false;
      if (filterExam !== "all" && question.examKey !== filterExam) return false;
      if (term) {
        const haystack = `${question.preview} ${question.type} ${question.mockTitle} ${question.stem ?? ""}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }
      return true;
    });
  }, [questions, filterStatus, filterExam, search]);

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const question of questions) {
      counts[question.contentStatus] = (counts[question.contentStatus] ?? 0) + 1;
    }
    return counts;
  }, [questions]);

  const openCreate = () => {
    const first = targets[0];
    if (!first || first.sections.length === 0) {
      toast.error("No curated mock sections available — seed or create a mock first.");
      return;
    }
    setEditor(emptyForm(first.sections[0].id));
  };

  const openEdit = (question: AdminQuestionDto) => {
    setEditor({
      id: question.id,
      sectionId: question.sectionId,
      type: question.type,
      stem: question.stem ?? "",
      payloadJson: JSON.stringify(question.payload ?? {}, null, 2),
      answerJson: question.answer ? JSON.stringify(question.answer, null, 2) : "",
      points: String(question.points),
      difficulty: String(question.difficulty),
      skills: question.skills.join(", "),
      explanation: question.explanation ?? "",
      source: question.source,
      status: question.contentStatus,
    });
  };

  const saveQuestion = async () => {
    if (!editor) return;
    let payload: unknown;
    let answer: unknown = null;
    try {
      payload = JSON.parse(editor.payloadJson || "{}");
    } catch {
      toast.error("The payload is not valid JSON.");
      return;
    }
    if (editor.answerJson.trim()) {
      try {
        answer = JSON.parse(editor.answerJson);
      } catch {
        toast.error("The answer key is not valid JSON.");
        return;
      }
    }
    setSaving(true);
    try {
      const body = {
        sectionId: editor.sectionId,
        type: editor.type.trim(),
        stem: editor.stem || null,
        payload,
        answer,
        points: Number(editor.points || 1),
        difficulty: Number(editor.difficulty || 2),
        skills: editor.skills
          .split(",")
          .map((entry) => entry.trim())
          .filter(Boolean),
        explanation: editor.explanation || null,
        source: editor.source.trim() || "original-practice",
      };
      const response = editor.id
        ? await request<{ question: AdminQuestionDto }>(`/api/exams/admin/questions/${editor.id}`, {
            method: "PATCH",
            body: JSON.stringify(body),
          })
        : await request<{ question: AdminQuestionDto }>("/api/exams/admin/questions", {
            method: "POST",
            body: JSON.stringify(body),
          });
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      toast.success(
        editor.id
          ? `Question saved${response.data.question.contentStatus === "in-review" ? " — returned to review for re-approval." : "."}`
          : "Draft question created.",
      );
      setEditor(null);
      await load();
    } finally {
      setSaving(false);
    }
  };

  const transition = async (question: AdminQuestionDto, action: string) => {
    setBusyId(question.id);
    try {
      const response = await request<{ question: AdminQuestionDto }>(
        `/api/exams/admin/questions/${question.id}/action`,
        { method: "POST", body: JSON.stringify({ action }) },
      );
      if (!response.ok) {
        toast.error(response.error);
        return;
      }
      const labels: Record<string, string> = {
        submit: "submitted for review",
        approve: "approved",
        reject: "sent back to draft",
        publish: "published",
        unpublish: "unpublished",
        retire: "retired",
      };
      toast.success(`Question ${labels[action] ?? action}.`);
      await load();
    } finally {
      setBusyId(null);
    }
  };

  const canTransition = (action: string) => {
    if (action === "submit") return true; // editor+
    if (action === "approve" || action === "reject") return role === "teacher" || role === "admin";
    return role === "admin";
  };

  return (
    <div className="space-y-6">
      {/* Collections */}
      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <FolderTree className="size-4 text-primary" aria-hidden /> Content collections
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Four independent collections organise the examination material: lessons,
              exercises, mock tests, answer keys and evaluation rubrics.
            </p>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={load}>
            <RefreshCw className="size-3.5" aria-hidden /> Refresh
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="py-6 text-center text-sm text-muted-foreground">Loading…</p>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {collections.map((collection) => (
                <div key={collection.key} className="rounded-lg border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-medium">{collection.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{collection.description}</p>
                    </div>
                    <a
                      href={collection.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-sky-600 hover:underline dark:text-sky-400"
                    >
                      {collection.sourceLabel} <ExternalLink className="size-3" aria-hidden />
                    </a>
                  </div>
                  <dl className="mt-3 grid grid-cols-3 gap-2 text-center text-xs sm:grid-cols-6">
                    {(
                      [
                        ["Mocks", collection.counts.publishedMocks],
                        ["Questions", collection.counts.publishedQuestions],
                        ["In review", collection.counts.reviewQuestions],
                        ["Lessons", collection.counts.liveLessons],
                        ["Rubrics", collection.counts.rubrics],
                        ["Spec", collection.counts.specVersion === null ? "—" : `v${collection.counts.specVersion}`],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label} className="rounded-md bg-muted/60 px-1.5 py-1.5">
                        <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</dt>
                        <dd className="font-semibold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {collection.courses.length > 0 ? (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <BookOpenCheck className="size-3.5 shrink-0" aria-hidden />
                      {collection.courses.map((course) => course.title).join(" · ")}
                    </p>
                  ) : null}
                  {collection.note ? (
                    <p className="mt-2 rounded-md bg-muted/60 px-2 py-1.5 text-xs leading-relaxed text-muted-foreground">
                      {collection.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Question review queue */}
      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <FileQuestion className="size-4 text-primary" aria-hidden /> Question review
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Draft → Review → Approved → Published. Human approval always precedes
              publication: editors submit, teachers approve, admins publish. Editing
              published content returns it to review.
            </p>
          </div>
          <Button size="sm" className="gap-1.5" onClick={openCreate}>
            <PlusCircle className="size-3.5" aria-hidden /> New question
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Filters */}
          <div className="flex flex-wrap items-end gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="q-filter-status" className="text-xs">
                Status
              </Label>
              <select
                id="q-filter-status"
                value={filterStatus}
                onChange={(event) => setFilterStatus(event.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="all">All ({questions.length})</option>
                {STATUS_ORDER.map((status) => (
                  <option key={status} value={status}>
                    {status} ({statusCounts[status] ?? 0})
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="q-filter-exam" className="text-xs">
                Examination
              </Label>
              <select
                id="q-filter-exam"
                value={filterExam}
                onChange={(event) => setFilterExam(event.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="all">All</option>
                <option value="IELTS">IELTS</option>
                <option value="TOEFL_IBT">TOEFL iBT</option>
              </select>
            </div>
            <div className="min-w-52 space-y-1.5">
              <Label htmlFor="q-filter-search" className="text-xs">
                Search
              </Label>
              <div className="relative">
                <Filter className="pointer-events-none absolute left-2.5 top-2.5 size-4 text-muted-foreground" aria-hidden />
                <Input
                  id="q-filter-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Prompt, type or mock title…"
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          {loading ? (
            <p className="py-6 text-center text-sm text-muted-foreground">Loading…</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Question</TableHead>
                    <TableHead>Mock · Section</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Review actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.slice(0, 100).map((question) => (
                    <TableRow key={question.id}>
                      <TableCell className="max-w-80">
                        <p className="truncate text-sm font-medium" title={question.preview}>
                          {question.preview}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {`difficulty ${question.difficulty}/5 · ${question.points} pt · ${question.source}`}
                        </p>
                      </TableCell>
                      <TableCell className="max-w-52">
                        <p className="truncate text-xs font-medium">{question.mockTitle}</p>
                        <p className="text-xs capitalize text-muted-foreground">{question.section}</p>
                      </TableCell>
                      <TableCell className="text-xs">{question.typeLabel}</TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-xs font-medium",
                            STATUS_STYLE[question.contentStatus] ?? "bg-slate-500/15 text-slate-500",
                          )}
                        >
                          {question.contentStatus}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex flex-wrap justify-end gap-1.5">
                          {question.contentStatus !== "retired" ? (
                            <Button
                              size="sm"
                              variant="ghost"
                              aria-label={`Edit question ${question.preview.slice(0, 30)}`}
                              onClick={() => openEdit(question)}
                            >
                              <Pencil className="size-3.5" aria-hidden />
                            </Button>
                          ) : null}
                          {question.contentStatus === "draft" && canTransition("submit") ? (
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={busyId === question.id}
                              onClick={() => void transition(question, "submit")}
                            >
                              Submit
                            </Button>
                          ) : null}
                          {question.contentStatus === "in-review" && canTransition("approve") ? (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={busyId === question.id}
                                onClick={() => void transition(question, "approve")}
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                disabled={busyId === question.id}
                                onClick={() => void transition(question, "reject")}
                              >
                                Reject
                              </Button>
                            </>
                          ) : null}
                          {question.contentStatus === "approved" && canTransition("publish") ? (
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={busyId === question.id}
                              onClick={() => void transition(question, "publish")}
                            >
                              Publish
                            </Button>
                          ) : null}
                          {question.contentStatus === "published" && canTransition("retire") ? (
                            <Button
                              size="sm"
                              variant="ghost"
                              disabled={busyId === question.id}
                              onClick={() => void transition(question, "retire")}
                            >
                              Retire
                            </Button>
                          ) : null}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="py-8 text-center text-sm text-muted-foreground">
                        No questions match the filters.
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
              {filtered.length > 100 ? (
                <p className="mt-2 text-xs text-muted-foreground">
                  Showing the first 100 of {filtered.length} — narrow the filters to see more.
                </p>
              ) : null}
            </div>
          )}
          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
            Publishing a mock examination additionally requires every one of its questions
            to be published — the gate lives on the blueprint tab.
          </p>
        </CardContent>
      </Card>

      {/* Question editor */}
      <Dialog open={editor !== null} onOpenChange={(open) => !open && setEditor(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          {editor ? (
            <>
              <DialogHeader>
                <DialogTitle>{editor.id ? "Edit question" : "New question (draft)"}</DialogTitle>
                <DialogDescription>
                  Payloads and answer keys validate against the same schemas the learner
                  engine uses. The answer key is required for objective types before
                  publishing; constructed-response tasks (writing, speaking) take none.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="q-edit-target">Mock section</Label>
                    <select
                      id="q-edit-target"
                      value={editor.sectionId}
                      onChange={(event) => setEditor({ ...editor, sectionId: event.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {targets.flatMap((mock) =>
                        mock.sections.map((section) => (
                          <option key={section.id} value={section.id}>
                            {`${mock.title} — ${section.key}`}
                          </option>
                        )),
                      )}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-edit-type">Question type</Label>
                    <Input
                      id="q-edit-type"
                      value={editor.type}
                      onChange={(event) => setEditor({ ...editor, type: event.target.value })}
                      placeholder="MCQ_SINGLE"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-edit-stem">Stem (optional heading above the task)</Label>
                  <Input
                    id="q-edit-stem"
                    value={editor.stem}
                    onChange={(event) => setEditor({ ...editor, stem: event.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-edit-payload">Payload (JSON, validated on save)</Label>
                  <Textarea
                    id="q-edit-payload"
                    value={editor.payloadJson}
                    onChange={(event) => setEditor({ ...editor, payloadJson: event.target.value })}
                    className="min-h-40 font-mono text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-edit-answer">Answer key (JSON; empty for writing/speaking)</Label>
                  <Textarea
                    id="q-edit-answer"
                    value={editor.answerJson}
                    onChange={(event) => setEditor({ ...editor, answerJson: event.target.value })}
                    className="min-h-20 font-mono text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="q-edit-points">Points</Label>
                    <Input
                      id="q-edit-points"
                      inputMode="numeric"
                      value={editor.points}
                      onChange={(event) => setEditor({ ...editor, points: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-edit-difficulty">Difficulty (1–5)</Label>
                    <Input
                      id="q-edit-difficulty"
                      inputMode="numeric"
                      value={editor.difficulty}
                      onChange={(event) => setEditor({ ...editor, difficulty: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-edit-source">Source</Label>
                    <Input
                      id="q-edit-source"
                      value={editor.source}
                      onChange={(event) => setEditor({ ...editor, source: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-edit-skills">Skill tags (comma-separated)</Label>
                    <Input
                      id="q-edit-skills"
                      value={editor.skills}
                      onChange={(event) => setEditor({ ...editor, skills: event.target.value })}
                      placeholder="detail, paraphrase"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-edit-explanation">Post-submission explanation</Label>
                  <Textarea
                    id="q-edit-explanation"
                    value={editor.explanation}
                    onChange={(event) => setEditor({ ...editor, explanation: event.target.value })}
                    className="min-h-16 text-xs"
                  />
                </div>
                {editor.id && editor.status !== "draft" ? (
                  <p className="rounded-md bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
                    {editor.status === "published"
                      ? "This question is published — saving content changes returns it to review for re-approval."
                      : `Current status: ${editor.status}.`}
                  </p>
                ) : null}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setEditor(null)}>
                  Cancel
                </Button>
                <Button onClick={() => void saveQuestion()} disabled={saving || !editor.type.trim()}>
                  {saving ? "Saving…" : editor.id ? "Save question" : "Create draft"}
                </Button>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
