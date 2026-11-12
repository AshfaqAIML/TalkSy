"use client";

/**
 * Question bank: filters, list with workflow states and per-question
 * statistics, and a full editor covering all 16 exercise types. The editor
 * submits the flat payload the server validates and turns into the shared
 * Exercise model — the same model that grades and renders learner exercises.
 */

import { useEffect, useMemo, useState } from "react";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cmsApi } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { CmsQuestionDto } from "@/data/cms/types";

const SKILLS = ["vocabulary", "grammar", "listening", "speaking", "reading", "writing"];
const DIFFICULTIES = ["easy", "medium", "hard", "challenge"];
const TYPES = [
  ["mcq", "Multiple choice"],
  ["multi-select", "Multiple select"],
  ["fill-blank", "Fill in the blank"],
  ["match", "Match the pairs"],
  ["drag-drop", "Drag and drop"],
  ["rearrange", "Rearrange words"],
  ["sentence-build", "Sentence building"],
  ["complete-sentence", "Complete the sentence"],
  ["correct-mistake", "Correct the mistake"],
  ["translate", "Translation"],
  ["short-answer", "Short answer"],
  ["listen-answer", "Listen and answer"],
  ["dictation", "Dictation"],
  ["read-answer", "Read and answer"],
  ["write-response", "Write a response"],
  ["speak-response", "Speak a response"],
] as const;

const STATUS_STYLE: Record<string, string> = {
  draft: "bg-secondary text-secondary-foreground",
  review: "bg-amber-600 text-white",
  approved: "bg-emerald-600 text-white",
  published: "bg-emerald-700 text-white",
  retired: "bg-muted text-muted-foreground line-through",
};

/** Fields shown per exercise type (flat payload keys). */
function fieldsFor(type: string): string[] {
  switch (type) {
    case "mcq":
      return ["options", "correctOptionId"];
    case "read-answer":
      return ["passage", "passageTitle", "question", "options", "correctOptionId"];
    case "multi-select":
      return ["options", "correctOptionIds"];
    case "fill-blank":
      return ["sentence", "acceptedAnswers"];
    case "match":
      return ["leftItems", "rightItems", "pairs"];
    case "drag-drop":
      return ["categories", "items"];
    case "rearrange":
      return ["correctTokens", "correctSentence"];
    case "sentence-build":
      return ["tiles", "acceptedSentences"];
    case "complete-sentence":
      return ["sentenceStart", "sentenceEnd", "acceptedAnswers", "keywords"];
    case "correct-mistake":
      return ["incorrectSentence", "acceptedAnswers"];
    case "translate":
      return ["direction", "source", "acceptedAnswers"];
    case "short-answer":
      return ["question", "acceptedAnswers", "keywords"];
    case "listen-answer":
      return ["audioText", "question", "acceptedAnswers"];
    case "dictation":
      return ["audioText", "acceptedAnswers"];
    case "write-response":
      return ["situation", "minWords", "mustInclude"];
    case "speak-response":
      return ["situation", "targetPhrases", "mustSay"];
    default:
      return [];
  }
}

interface OptionRow {
  id: string;
  text: string;
  translation?: string;
}

type Form = Record<string, unknown>;

export function QuestionsTab() {
  const user = useAppStore((s) => s.user);
  const role = user?.role ?? "student";
  const [questions, setQuestions] = useState<CmsQuestionDto[]>([]);
  const [filter, setFilter] = useState({ status: "all", type: "all", skill: "all", search: "" });
  const [editing, setEditing] = useState<CmsQuestionDto | null>(null);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      const res = await cmsApi.questions(filter);
      if (!active) return;
      if (res.ok) setQuestions(res.data.questions);
      else toast.error(res.error);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [filter, reloadKey]);

  const reload = () => setReloadKey((k) => k + 1);

  const act = async (id: string, action: string) => {
    const res = await cmsApi.questionAction(id, action);
    if (res.ok) {
      toast.success(`Question ${res.data.question.status}.`);
      reload();
    } else toast.error(res.error);
  };

  const remove = async (q: CmsQuestionDto) => {
    if (!confirm("Delete this question? (Impossible once learners have answered it.)")) return;
    const res = await cmsApi.deleteQuestion(q.id);
    if (res.ok) {
      toast.success("Deleted.");
      reload();
    } else toast.error(res.error);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex items-center gap-2">
          <Search className="size-4 text-muted-foreground" aria-hidden />
          <Input
            className="w-56"
            placeholder="Search prompts…"
            value={filter.search}
            onChange={(e) => setFilter((f) => ({ ...f, search: e.target.value }))}
            aria-label="Search questions"
          />
        </div>
        <Select value={filter.status} onValueChange={(v) => setFilter((f) => ({ ...f, status: v }))}>
          <SelectTrigger className="w-36" aria-label="Filter by status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {["all", "draft", "review", "approved", "published", "retired"].map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filter.type} onValueChange={(v) => setFilter((f) => ({ ...f, type: v }))}>
          <SelectTrigger className="w-44" aria-label="Filter by type">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All types</SelectItem>
            {TYPES.map(([t, label]) => (
              <SelectItem key={t} value={t}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filter.skill} onValueChange={(v) => setFilter((f) => ({ ...f, skill: v }))}>
          <SelectTrigger className="w-36" aria-label="Filter by skill">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All skills</SelectItem>
            {SKILLS.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="ml-auto gap-1.5" onClick={() => setCreating(true)}>
          <Plus className="size-4" /> New question
        </Button>
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-muted-foreground">Loading…</p>
      ) : questions.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">
          No questions match. Create one — it can be reused across lessons.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {questions.map((q) => (
            <Card key={q.id}>
              <CardContent className="flex flex-wrap items-center gap-2 p-3 sm:p-4">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="truncate text-sm font-medium">{q.prompt}</span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    <Badge className={STATUS_STYLE[q.status] ?? ""}>{q.status}</Badge>
                    <Badge variant="outline">{q.type}</Badge>
                    <span>{q.skill} · {q.difficulty} · v{q.version}</span>
                    {q.attemptCount > 0 ? (
                      <span>
                        · {q.attemptCount} attempts · {Math.round((q.correctCount / q.attemptCount) * 100)}% correct
                      </span>
                    ) : null}
                    {q.tags.slice(0, 3).map((t) => (
                      <Badge key={t} variant="secondary" className="font-normal">#{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {q.status === "draft" ? (
                    <Button size="sm" variant="outline" onClick={() => act(q.id, "submit")}>Submit</Button>
                  ) : null}
                  {q.status === "review" && (role === "teacher" || role === "admin") ? (
                    <>
                      <Button size="sm" onClick={() => act(q.id, "approve")}>Approve</Button>
                      <Button size="sm" variant="outline" onClick={() => act(q.id, "reject")}>Reject</Button>
                    </>
                  ) : null}
                  {q.status === "approved" && role === "admin" ? (
                    <Button size="sm" onClick={() => act(q.id, "publish")}>Publish</Button>
                  ) : null}
                  {q.status === "published" && role === "admin" ? (
                    <Button size="sm" variant="outline" onClick={() => act(q.id, "unpublish")}>Unpublish</Button>
                  ) : null}
                  {role === "admin" && q.status !== "retired" && q.attemptCount > 0 ? (
                    <Button size="sm" variant="outline" onClick={() => act(q.id, "retire")}>Retire</Button>
                  ) : null}
                  <Button size="icon" variant="ghost" aria-label={`Edit question ${q.prompt.slice(0, 30)}`} onClick={() => setEditing(q)}>
                    <Pencil className="size-4" />
                  </Button>
                  {q.attemptCount === 0 ? (
                    <Button size="icon" variant="ghost" className="text-destructive" aria-label={`Delete question ${q.prompt.slice(0, 30)}`} onClick={() => remove(q)}>
                      <Trash2 className="size-4" />
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {creating ? (
        <QuestionDialog
          onDone={() => {
            setCreating(false);
            reload();
          }}
          onCancel={() => setCreating(false)}
        />
      ) : null}
      {editing ? (
        <QuestionDialog
          question={editing}
          onDone={() => {
            setEditing(null);
            reload();
          }}
          onCancel={() => setEditing(null)}
        />
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Question editor dialog
// ---------------------------------------------------------------------------

function QuestionDialog({
  question,
  onDone,
  onCancel,
}: {
  question?: CmsQuestionDto;
  onDone: () => void;
  onCancel: () => void;
}) {
  const initialType = question?.type ?? "mcq";
  const [form, setForm] = useState<Form>(() => {
    const base: Form = {
      type: initialType,
      skill: question?.skill ?? "vocabulary",
      difficulty: question?.difficulty ?? "easy",
      prompt: question?.prompt ?? "",
      tags: (question?.tags ?? []).join(", "),
      changeNote: "",
    };
    if (question) {
      // Flatten the exercise payload into the edit form.
      for (const [k, v] of Object.entries(question.exercise as unknown as Record<string, unknown>)) {
        if (k === "id" || k === "type" || k === "difficulty" || k === "skill" || k === "prompt" || k === "tags") continue;
        base[k] = v;
      }
      const fb = (question.exercise as unknown as { feedback?: Record<string, unknown> }).feedback;
      if (fb) {
        base.correctAnswer = fb.correctAnswer ?? "";
        base.explanation = fb.explanation ?? "";
        base.whyWrong = fb.whyWrong ?? "";
        base.grammarRuleTitle = (fb.grammarRule as { title?: string } | undefined)?.title ?? "";
        base.grammarRuleRule = (fb.grammarRule as { rule?: string } | undefined)?.rule ?? "";
        base.similarExampleEnglish = (fb.similarExample as { english?: string } | undefined)?.english ?? "";
        base.similarExampleTranslation = (fb.similarExample as { translation?: string } | undefined)?.translation ?? "";
      }
    } else {
      base.hints = [];
      // Choice questions start with two empty options for a quick start.
      if (initialType === "mcq" || initialType === "read-answer" || initialType === "multi-select") {
        base.options = [
          { id: "a", text: "" },
          { id: "b", text: "" },
        ];
      }
    }
    return base;
  });
  const [busy, setBusy] = useState(false);

  const set = (patch: Form) => setForm((f) => ({ ...f, ...patch }));
  const type = String(form.type);
  const fields = useMemo(() => new Set(fieldsFor(type)), [type]);

  const submit = async () => {
    setBusy(true);
    const payload: Form = { ...form };
    // hints/tags/multi-line lists: split textareas into arrays
    for (const key of ["hints", "mustInclude", "targetPhrases", "mustSay", "keywords", "acceptedAnswers", "correctTokens", "tiles", "acceptedSentences", "tasks"] as const) {
      if (typeof payload[key] === "string") {
        (payload as Record<string, unknown>)[key] = (payload[key] as string)
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean);
      }
    }
    if (typeof payload.tags === "string") {
      payload.tags = (payload.tags as string).split(",").map((s) => s.trim()).filter(Boolean);
    }
    const res = question
      ? await cmsApi.updateQuestion(question.id, payload)
      : await cmsApi.createQuestion(payload);
    setBusy(false);
    if (res.ok) {
      toast.success(question ? "Question updated (new version created)." : "Question created as draft.");
      onDone();
    } else toast.error(res.error);
  };

  const text = (key: string, label: string, placeholder?: string, rows = 2) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={`q-${key}`}>{label}</Label>
      {rows > 1 ? (
        <Textarea
          id={`q-${key}`}
          rows={rows}
          value={String(form[key] ?? "")}
          placeholder={placeholder}
          onChange={(e) => set({ [key]: e.target.value })}
        />
      ) : (
        <Input
          id={`q-${key}`}
          value={String(form[key] ?? "")}
          placeholder={placeholder}
          onChange={(e) => set({ [key]: e.target.value })}
        />
      )}
    </div>
  );

  const listText = (key: string, label: string, hint?: string) => {
    const value = Array.isArray(form[key])
      ? (form[key] as string[]).join("\n")
      : String(form[key] ?? "");
    return (
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`q-${key}`}>{label}</Label>
        <Textarea
          id={`q-${key}`}
          rows={3}
          value={value}
          placeholder={"One per line"}
          onChange={(e) => set({ [key]: e.target.value.split("\n") })}
        />
        {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      </div>
    );
  };

  const optionsEditor = (key: "options" | "leftItems" | "rightItems" | "categories", label: string) => {
    const options = ((form[key] as OptionRow[]) ?? []).map((o, i) => ({
      id: o.id || String.fromCharCode(97 + i),
      text: o.text ?? "",
    }));
    const update = (next: OptionRow[]) => set({ [key]: next });
    const nextLetterId = () =>
      "abcdefghijklmnop".split("").find((l) => !options.some((o) => o.id === l)) ??
      crypto.randomUUID().slice(0, 8);
    return (
      <div className="flex flex-col gap-1.5">
        <Label>{label}</Label>
        <div className="flex flex-col gap-2">
          {options.map((o, i) => (
            <div key={o.id} className="flex items-center gap-2">
              <span className="w-6 text-xs font-bold text-muted-foreground">{o.id}</span>
              <Input
                value={o.text}
                placeholder={`Option ${i + 1}`}
                onChange={(e) =>
                  update(options.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)))
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`Remove option ${i + 1}`}
                onClick={() => update(options.filter((_, j) => j !== i))}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => update([...options, { id: nextLetterId(), text: "" }])}
          >
            <Plus className="size-4" /> Add
          </Button>
        </div>
      </div>
    );
  };

  const correctSingle = (optionsKey: "options") => {
    const options = (form[optionsKey] as OptionRow[]) ?? [];
    return (
      <div className="flex flex-col gap-1.5">
        <Label>Correct answer</Label>
        <div className="flex flex-col gap-1.5">
          {options.map((o) => (
            <label key={o.id} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="correct-option"
                checked={form.correctOptionId === o.id}
                onChange={() => set({ correctOptionId: o.id })}
              />
              <span className="font-mono text-xs text-muted-foreground">{o.id})</span> {o.text}
            </label>
          ))}
          {options.length === 0 ? (
            <p className="text-xs text-muted-foreground">Add options first.</p>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <Dialog open onOpenChange={(o) => (o ? null : onCancel())}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{question ? `Edit question (v${question.version})` : "New question"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3 flex flex-col gap-1.5">
              <Label htmlFor="q-type">Question type</Label>
              <Select value={type} onValueChange={(v) => set({ type: v })}>
                <SelectTrigger id="q-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TYPES.map(([t, label]) => (
                    <SelectItem key={t} value={t}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Skill</Label>
              <Select value={String(form.skill)} onValueChange={(v) => set({ skill: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {SKILLS.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Difficulty</Label>
              <Select value={String(form.difficulty)} onValueChange={(v) => set({ difficulty: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {DIFFICULTIES.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="q-tags">Topics</Label>
              <Input
                id="q-tags"
                placeholder="greetings, verb to be"
                value={String(form.tags ?? "")}
                onChange={(e) => set({ tags: e.target.value })}
              />
            </div>
          </div>

          {text("prompt", "Prompt / instruction", "Choose the best word to complete the sentence.")}

          {/* Type-specific fields */}
          {fields.has("passage") ? text("passage", "Reading passage (read-answer)", undefined, 4) : null}
          {fields.has("passageTitle") ? text("passageTitle", "Passage title (optional)") : null}
          {fields.has("question") ? text("question", "Question") : null}
          {fields.has("audioText") ? text("audioText", "Audio text (spoken aloud to the learner)") : null}
          {fields.has("sentence") ? text("sentence", "Sentence — use ___ for the blank", "My name ___ Ana.") : null}
          {fields.has("options") ? optionsEditor("options", "Answer options") : null}
          {fields.has("correctOptionId") ? correctSingle("options") : null}

          {fields.has("correctOptionIds") ? (
            <div className="flex flex-col gap-1.5">
              <Label>Correct answers (select all that apply)</Label>
              {((form.options as OptionRow[]) ?? []).map((o) => (
                <label key={o.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={Array.isArray(form.correctOptionIds) && (form.correctOptionIds as string[]).includes(o.id)}
                    onChange={(e) => {
                      const current = (form.correctOptionIds as string[]) ?? [];
                      set({
                        correctOptionIds: e.target.checked
                          ? [...current, o.id]
                          : current.filter((x) => x !== o.id),
                      });
                    }}
                  />
                  <span className="font-mono text-xs text-muted-foreground">{o.id})</span> {o.text}
                </label>
              ))}
            </div>
          ) : null}

          {fields.has("acceptedAnswers") ? listText("acceptedAnswers", "Accepted answers", "Every accepted variant, one per line — the learner's answer is matched case-insensitively.") : null}
          {fields.has("keywords") ? listText("keywords", "Keywords (optional)", "All keywords must appear for full credit.") : null}

          {fields.has("leftItems") ? optionsEditor("leftItems", "Left items") : null}
          {fields.has("rightItems") ? optionsEditor("rightItems", "Right items") : null}
          {fields.has("pairs") ? <PairsForm form={form} set={set} /> : null}

          {fields.has("categories") ? optionsEditor("categories", "Categories") : null}
          {fields.has("items") ? <ItemsForm form={form} set={set} /> : null}

          {fields.has("correctTokens") ? listText("correctTokens", "Correct word order", "One word per line.") : null}
          {fields.has("correctSentence") ? text("correctSentence", "Full correct sentence") : null}
          {fields.has("tiles") ? listText("tiles", "Word tiles (correct words + distractors)") : null}
          {fields.has("acceptedSentences") ? listText("acceptedSentences", "Accepted sentences", "One per line; alternatives allowed.") : null}

          {fields.has("sentenceStart") ? text("sentenceStart", "Sentence start", "My name") : null}
          {fields.has("sentenceEnd") ? text("sentenceEnd", "Sentence end (optional)", "and I am a student.") : null}
          {fields.has("incorrectSentence") ? text("incorrectSentence", "Incorrect sentence", "She have two brothers.") : null}
          {fields.has("source") ? text("source", "Source sentence to translate") : null}
          {fields.has("direction") ? (
            <div className="flex flex-col gap-1.5">
              <Label>Direction</Label>
              <Select
                value={String(form.direction ?? "to-english")}
                onValueChange={(v) => set({ direction: v })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="to-english">Learner's language → English</SelectItem>
                  <SelectItem value="from-english">English → learner's language</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : null}
          {fields.has("situation") ? text("situation", "Situation", "You meet your new neighbour. Greet them.", 3) : null}
          {fields.has("minWords") ? (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="q-minWords">Minimum words</Label>
              <Input
                id="q-minWords"
                type="number"
                min="1"
                value={Number(form.minWords ?? 30)}
                onChange={(e) => set({ minWords: Number(e.target.value) })}
              />
            </div>
          ) : null}
          {fields.has("mustInclude") ? listText("mustInclude", "Must include (optional)", "Words/phrases required for full credit.") : null}
          {fields.has("targetPhrases") ? listText("targetPhrases", "Target phrases", "Shown to the learner after submission.") : null}
          {fields.has("mustSay") ? listText("mustSay", "Must say", "Grading: the transcript must contain all of these.") : null}

          <div className="rounded-lg border p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Feedback shown after answering
            </p>
            <div className="flex flex-col gap-3">
              {text("correctAnswer", "Correct answer (summary)", "My name is Ana. / is")}
              {text("explanation", "Explanation", "With 'name' we always use 'is'.", 3)}
              {text("whyWrong", "Why a typical wrong answer is wrong (optional)", undefined, 2)}
              <div className="grid gap-3 sm:grid-cols-2">
                {text("grammarRuleTitle", "Related rule title (optional)")}
                {text("grammarRuleRule", "Rule statement (optional)")}
                {text("similarExampleEnglish", "Similar example — English (optional)")}
                {text("similarExampleTranslation", "Similar example — translation (optional)")}
              </div>
            </div>
          </div>

          {listText("hints", "Hints (optional)", "Revealed one at a time; each use is recorded.")}
          {text("changeNote", "Change note (for the version history)")}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={submit} disabled={busy}>
            {busy ? "Saving…" : question ? "Save new version" : "Create draft"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PairsForm({ form, set }: { form: Form; set: (patch: Form) => void }) {
  const left = (form.leftItems as OptionRow[]) ?? [];
  const right = (form.rightItems as OptionRow[]) ?? [];
  const pairs = (form.pairs as { leftId: string; rightId: string }[]) ?? [];
  return (
    <div className="flex flex-col gap-1.5">
      <Label>Correct pairings</Label>
      {left.map((l) => {
        const current = pairs.find((p) => p.leftId === l.id);
        return (
          <div key={l.id} className="flex items-center gap-2">
            <span className="w-28 truncate text-sm font-medium">{l.text || l.id}</span>
            <Select
              value={current?.rightId ?? ""}
              onValueChange={(v) =>
                set({
                  pairs: [...pairs.filter((p) => p.leftId !== l.id), { leftId: l.id, rightId: v }],
                })
              }
            >
              <SelectTrigger className="w-40" aria-label={`Pair for ${l.text}`}>
                <SelectValue placeholder="Choose…" />
              </SelectTrigger>
              <SelectContent>
                {right.map((r) => (
                  <SelectItem key={r.id} value={r.id}>{r.text || r.id}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      })}
    </div>
  );
}

function ItemsForm({ form, set }: { form: Form; set: (patch: Form) => void }) {
  const categories = (form.categories as OptionRow[]) ?? [];
  const items =
    (form.items as { id: string; label: string; categoryId: string }[]) ?? [];
  return (
    <div className="flex flex-col gap-2">
      <Label>Items to sort</Label>
      {items.map((it, i) => (
        <div key={it.id || i} className="flex items-center gap-2">
          <Input
            value={it.label}
            placeholder={`Item ${i + 1}`}
            onChange={(e) =>
              set({
                items: items.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)),
              })
            }
          />
          <Select
            value={it.categoryId}
            onValueChange={(v) =>
              set({ items: items.map((x, j) => (j === i ? { ...x, categoryId: v } : x)) })
            }
          >
            <SelectTrigger className="w-36" aria-label={`Category for ${it.label}`}>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.id}>{c.text || c.id}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Remove item ${i + 1}`}
            onClick={() => set({ items: items.filter((_, j) => j !== i) })}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-fit"
        onClick={() =>
          set({
            items: [
              ...items,
              { id: crypto.randomUUID().slice(0, 8), label: "", categoryId: categories[0]?.id ?? "" },
            ],
          })
        }
      >
        <Plus className="size-4" /> Add item
      </Button>
    </div>
  );
}
