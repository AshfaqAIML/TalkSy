"use client";

/**
 * Per-type edit forms for CMS lesson blocks. One editor component per block
 * kind, sharing small primitives (text field, list-of-strings, options list).
 */

import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CmsBlock } from "@/data/cms/types";

export type BlockState = CmsBlock & { id: string };

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

export function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs font-semibold">{label}</Label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function StringList({
  label,
  values,
  onChange,
  placeholder,
  hint,
}: {
  label: string;
  values: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <Field label={label} hint={hint}>
      <div className="flex flex-col gap-2">
        {values.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <Input
              value={v}
              placeholder={placeholder}
              onChange={(e) => onChange(values.map((x, j) => (j === i ? e.target.value : x)))}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove ${label} ${i + 1}`}
              onClick={() => onChange(values.filter((_, j) => j !== i))}
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
          onClick={() => onChange([...values, ""])}
        >
          <Plus className="size-4" /> Add
        </Button>
      </div>
    </Field>
  );
}

interface OptionRow {
  id: string;
  text: string;
  translation?: string;
}

export function OptionsEditor({
  label,
  options,
  onChange,
  withTranslation = false,
}: {
  label: string;
  options: OptionRow[];
  onChange: (next: OptionRow[]) => void;
  withTranslation?: boolean;
}) {
  const update = (i: number, patch: Partial<OptionRow>) =>
    onChange(options.map((o, j) => (j === i ? { ...o, ...patch } : o)));
  return (
    <Field label={label}>
      <div className="flex flex-col gap-2">
        {options.map((o, i) => (
          <div key={o.id || i} className="flex items-center gap-2">
            <Input
              value={o.text}
              placeholder={`Option ${i + 1}`}
              onChange={(e) => update(i, { text: e.target.value })}
            />
            {withTranslation ? (
              <Input
                value={o.translation ?? ""}
                placeholder="Translation (optional)"
                onChange={(e) => update(i, { translation: e.target.value })}
              />
            ) : null}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove option ${i + 1}`}
              onClick={() => onChange(options.filter((_, j) => j !== i))}
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
          onClick={() => {
            const nextId =
              "abcdefghijklmnop".split("").find((l) => !options.some((o) => o.id === l)) ??
              crypto.randomUUID().slice(0, 8);
            onChange([...options, { id: nextId, text: "" }]);
          }}
        >
          <Plus className="size-4" /> Add option
        </Button>
      </div>
    </Field>
  );
}

function PairEditor({
  left,
  right,
  pairs,
  onChange,
}: {
  left: OptionRow[];
  right: OptionRow[];
  pairs: { leftId: string; rightId: string }[];
  onChange: (next: { leftId: string; rightId: string }[]) => void;
}) {
  return (
    <Field label="Correct pairings" hint="Match every left item to its right answer.">
      <div className="flex flex-col gap-2">
        {left.map((l) => {
          const current = pairs.find((p) => p.leftId === l.id);
          return (
            <div key={l.id} className="flex items-center gap-2">
              <span className="w-32 truncate text-sm font-medium">{l.text || l.id}</span>
              <Select
                value={current?.rightId ?? ""}
                onValueChange={(v) =>
                  onChange([
                    ...pairs.filter((p) => p.leftId !== l.id),
                    { leftId: l.id, rightId: v },
                  ])
                }
              >
                <SelectTrigger className="w-44" aria-label={`Answer for ${l.text}`}>
                  <SelectValue placeholder="Choose…" />
                </SelectTrigger>
                <SelectContent>
                  {right.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.text || r.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        })}
      </div>
    </Field>
  );
}

// ---------------------------------------------------------------------------
// The block editor
// ---------------------------------------------------------------------------

export function BlockEditor({
  block,
  onChange,
  questions,
  assets,
}: {
  block: BlockState;
  onChange: (next: BlockState) => void;
  questions: { id: string; label: string; status: string }[];
  assets: { id: string; title: string; kind: string }[];
}) {
  const set = (patch: Record<string, unknown>) =>
    onChange({ ...block, ...patch } as BlockState);
  const b = block as unknown as Record<string, unknown>;

  switch (block.type) {
    case "heading":
      return (
        <Field label="Heading text">
          <Input value={String(b.text ?? "")} onChange={(e) => set({ text: e.target.value })} />
        </Field>
      );
    case "text":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Paragraph text">
            <Textarea
              rows={4}
              value={String(b.text ?? "")}
              onChange={(e) => set({ text: e.target.value })}
            />
          </Field>
          <Field label="Translation (optional)">
            <Input
              value={String(b.translation ?? "")}
              onChange={(e) => set({ translation: e.target.value })}
            />
          </Field>
        </div>
      );
    case "definition":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Term">
            <Input value={String(b.term ?? "")} onChange={(e) => set({ term: e.target.value })} />
          </Field>
          <Field label="Part of speech">
            <Input
              placeholder="noun / verb / phrase…"
              value={String(b.partOfSpeech ?? "")}
              onChange={(e) => set({ partOfSpeech: e.target.value })}
            />
          </Field>
          <Field label="Definition">
            <Textarea
              rows={2}
              value={String(b.definition ?? "")}
              onChange={(e) => set({ definition: e.target.value })}
            />
          </Field>
          <Field label="Translation (optional)">
            <Input
              value={String(b.translation ?? "")}
              onChange={(e) => set({ translation: e.target.value })}
            />
          </Field>
        </div>
      );
    case "example": {
      const items =
        (b.items as { english: string; translation?: string; note?: string; domain?: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          {items.map((it, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <div className="grid gap-2 sm:grid-cols-2">
                <Field label={`Example ${i + 1} (English)`}>
                  <Input
                    value={it.english}
                    onChange={(e) =>
                      set({ items: items.map((x, j) => (j === i ? { ...x, english: e.target.value } : x)) })
                    }
                  />
                </Field>
                <Field label="Translation (optional)">
                  <Input
                    value={it.translation ?? ""}
                    onChange={(e) =>
                      set({ items: items.map((x, j) => (j === i ? { ...x, translation: e.target.value } : x)) })
                    }
                  />
                </Field>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <Field label="Why it works (optional)" hint="Teaching note shown under the example">
                  <Input
                    value={it.note ?? ""}
                    onChange={(e) =>
                      set({ items: items.map((x, j) => (j === i ? { ...x, note: e.target.value } : x)) })
                    }
                  />
                </Field>
                <Field label="Life domain (optional)" hint="e.g. everyday, school, work, travel">
                  <Input
                    value={it.domain ?? ""}
                    onChange={(e) =>
                      set({ items: items.map((x, j) => (j === i ? { ...x, domain: e.target.value } : x)) })
                    }
                  />
                </Field>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ items: [...items, { english: "" }] })}
          >
            <Plus className="size-4" /> Add example
          </Button>
        </div>
      );
    }
    case "table": {
      const headers = (b.headers as string[]) ?? [];
      const rows = (b.rows as string[][]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Column headers (comma-separated)">
            <Input
              value={headers.join(", ")}
              onChange={(e) => set({ headers: e.target.value.split(",").map((s) => s.trim()) })}
            />
          </Field>
          {rows.map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <Input
                value={row.join(" | ")}
                placeholder={`Row ${i + 1}: value | value`}
                onChange={(e) =>
                  set({
                    rows: rows.map((r, j) =>
                      j === i ? e.target.value.split("|").map((s) => s.trim()) : r,
                    ),
                  })
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`Remove row ${i + 1}`}
                onClick={() => set({ rows: rows.filter((_, j) => j !== i) })}
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
            onClick={() => set({ rows: [...rows, headers.map(() => "")] })}
          >
            <Plus className="size-4" /> Add row
          </Button>
        </div>
      );
    }
    case "vocabulary-list": {
      const words =
        (b.words as {
          word: string;
          partOfSpeech: string;
          definition: string;
          translation: string;
        }[]) ?? [];
      const update = (i: number, patch: Partial<(typeof words)[number]>) =>
        set({ words: words.map((w, j) => (j === i ? { ...w, ...patch } : w)) });
      return (
        <div className="flex flex-col gap-3">
          <Field label="List title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          {words.map((w, i) => (
            <div key={i} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-2">
              <Field label="Word">
                <Input value={w.word} onChange={(e) => update(i, { word: e.target.value })} />
              </Field>
              <Field label="Part of speech">
                <Input value={w.partOfSpeech} onChange={(e) => update(i, { partOfSpeech: e.target.value })} />
              </Field>
              <Field label="Definition">
                <Input value={w.definition} onChange={(e) => update(i, { definition: e.target.value })} />
              </Field>
              <Field label="Translation">
                <Input value={w.translation} onChange={(e) => update(i, { translation: e.target.value })} />
              </Field>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit"
                onClick={() => set({ words: words.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-4" /> Remove word
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
                words: [...words, { word: "", partOfSpeech: "", definition: "", translation: "" }],
              })
            }
          >
            <Plus className="size-4" /> Add word
          </Button>
        </div>
      );
    }
    case "grammar-rule": {
      const examples = (b.examples as { english: string; translation: string }[]) ?? [];
      const exceptions = (b.exceptions as string[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Rule (one sentence)">
            <Input value={String(b.rule ?? "")} onChange={(e) => set({ rule: e.target.value })} />
          </Field>
          <Field label="Explanation (optional)">
            <Textarea
              rows={2}
              value={String(b.explanation ?? "")}
              onChange={(e) => set({ explanation: e.target.value })}
            />
          </Field>
          {examples.map((ex, i) => (
            <div key={i} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-2">
              <Field label={`Example ${i + 1}`}>
                <Input
                  value={ex.english}
                  onChange={(e) =>
                    set({ examples: examples.map((x, j) => (j === i ? { ...x, english: e.target.value } : x)) })
                  }
                />
              </Field>
              <Field label="Translation">
                <Input
                  value={ex.translation}
                  onChange={(e) =>
                    set({ examples: examples.map((x, j) => (j === i ? { ...x, translation: e.target.value } : x)) })
                  }
                />
              </Field>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ examples: [...examples, { english: "", translation: "" }] })}
          >
            <Plus className="size-4" /> Add example
          </Button>
          <StringList
            label="Exceptions (optional)"
            values={exceptions}
            onChange={(next) => set({ exceptions: next })}
          />
        </div>
      );
    }
    case "grammar-table": {
      const headers = (b.headers as string[]) ?? [];
      const rows = (b.rows as string[][]) ?? [];
      const headerCount = Math.max(headers.length, 1);
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Column headers" hint="e.g. Person / Affirmative / Negative / Question">
            <div className="flex flex-col gap-2">
              {Array.from({ length: headerCount }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    value={headers[i] ?? ""}
                    placeholder={`Column ${i + 1}`}
                    onChange={(e) => {
                      const next = [...headers];
                      while (next.length < headerCount) next.push("");
                      next[i] = e.target.value;
                      set({ headers: next });
                    }}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove column ${i + 1}`}
                    disabled={headerCount <= 2}
                    onClick={() => {
                      set({
                        headers: headers.filter((_, j) => j !== i),
                        rows: rows.map((row) => row.filter((_, j) => j !== i)),
                      });
                    }}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-fit"
                onClick={() => set({ headers: [...headers, ""], rows: rows.map((row) => [...row, ""]) })}
              >
                <Plus className="size-4" /> Add column
              </Button>
            </div>
          </Field>
          {rows.map((row, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${headerCount}, minmax(0, 1fr))` }}>
                {Array.from({ length: headerCount }).map((_, j) => (
                  <Input
                    key={j}
                    value={row[j] ?? ""}
                    placeholder={headers[j] || `Cell ${j + 1}`}
                    onChange={(e) => {
                      const next = rows.map((r, k) => {
                        if (k !== i) return r;
                        const copy = [...r];
                        while (copy.length < headerCount) copy.push("");
                        copy[j] = e.target.value;
                        return copy;
                      });
                      set({ rows: next });
                    }}
                  />
                ))}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ rows: rows.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove row
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ rows: [...rows, Array.from({ length: headerCount }, () => "")] })}
          >
            <Plus className="size-4" /> Add row
          </Button>
          <Field label="Teaching note (optional)">
            <Textarea rows={2} value={String(b.note ?? "")} onChange={(e) => set({ note: e.target.value })} />
          </Field>
        </div>
      );
    }
    case "passage": {
      const paragraphs = (b.paragraphs as string[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Passage title">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Source line (optional)" hint='e.g. "Adapted from a museum guidebook" — provenance shown to learners'>
            <Input value={String(b.source ?? "")} onChange={(e) => set({ source: e.target.value })} />
          </Field>
          <Field label="Paragraphs">
            <div className="flex flex-col gap-2">
              {paragraphs.map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Textarea
                    rows={3}
                    value={p}
                    placeholder={`Paragraph ${i + 1}`}
                    onChange={(e) => set({ paragraphs: paragraphs.map((x, j) => (j === i ? e.target.value : x)) })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove paragraph ${i + 1}`}
                    onClick={() => set({ paragraphs: paragraphs.filter((_, j) => j !== i) })}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-fit"
                onClick={() => set({ paragraphs: [...paragraphs, ""] })}
              >
                <Plus className="size-4" /> Add paragraph
              </Button>
            </div>
          </Field>
          <Field label="Note (optional)">
            <Textarea rows={2} value={String(b.note ?? "")} onChange={(e) => set({ note: e.target.value })} />
          </Field>
        </div>
      );
    }
    case "model-answer": {
      const body = (b.body as string[]) ?? [];
      const annotations = (b.annotations as string[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Level label" hint='e.g. "Band 8.0 model answer" or "High-scoring sample"'>
            <Input value={String(b.label ?? "")} onChange={(e) => set({ label: e.target.value })} />
          </Field>
          <StringList
            label="Response paragraphs"
            values={body}
            onChange={(next) => set({ body: next })}
            placeholder="One paragraph per entry"
          />
          <StringList
            label="Annotations — why this response works (optional)"
            values={annotations}
            onChange={(next) => set({ annotations: next })}
            placeholder="Examiner-style commentary"
          />
          <Field label="Task reference (optional)" hint="Which task this exemplar answers (for cross-linking)">
            <Input value={String(b.taskRef ?? "")} onChange={(e) => set({ taskRef: e.target.value })} />
          </Field>
        </div>
      );
    }
    case "transcript": {
      const lines = (b.lines as { speaker?: string; text: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Audio asset (optional)" hint="Links the transcript to a recording from the media manager">
            <Select
              value={String(b.audioAssetId ?? "none")}
              onValueChange={(value) => set({ audioAssetId: value === "none" ? undefined : value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="No linked audio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No linked audio</SelectItem>
                {assets
                  .filter((a) => a.kind === "audio")
                  .map((a) => (
                    <SelectItem key={a.id} value={a.id}>
                      {a.title}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </Field>
          {lines.map((line, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <div className="grid gap-2 sm:grid-cols-[1fr_3fr]">
                <Field label={`Speaker ${i + 1} (optional)`}>
                  <Input
                    value={line.speaker ?? ""}
                    placeholder="e.g. Presenter"
                    onChange={(e) =>
                      set({ lines: lines.map((x, j) => (j === i ? { ...x, speaker: e.target.value } : x)) })
                    }
                  />
                </Field>
                <Field label="Line text">
                  <Textarea
                    rows={2}
                    value={line.text}
                    onChange={(e) =>
                      set({ lines: lines.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)) })
                    }
                  />
                </Field>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ lines: lines.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove line
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ lines: [...lines, { speaker: "", text: "" }] })}
          >
            <Plus className="size-4" /> Add line
          </Button>
        </div>
      );
    }
    case "dialogue": {
      const lines = (b.lines as { speaker: string; text: string; translation?: string }[]) ?? [];
      const update = (i: number, patch: Partial<(typeof lines)[number]>) =>
        set({ lines: lines.map((l, j) => (j === i ? { ...l, ...patch } : l)) });
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Context (optional)">
            <Input value={String(b.context ?? "")} onChange={(e) => set({ context: e.target.value })} />
          </Field>
          {lines.map((l, i) => (
            <div key={i} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-3">
              <Field label="Speaker">
                <Input value={l.speaker} onChange={(e) => update(i, { speaker: e.target.value })} />
              </Field>
              <Field label="Line">
                <Input value={l.text} onChange={(e) => update(i, { text: e.target.value })} />
              </Field>
              <Field label="Translation">
                <Input value={l.translation ?? ""} onChange={(e) => update(i, { translation: e.target.value })} />
              </Field>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ lines: [...lines, { speaker: "", text: "" }] })}
          >
            <Plus className="size-4" /> Add line
          </Button>
        </div>
      );
    }
    case "sentence-diagram": {
      const parts = (b.parts as { label: string; text: string }[]) ?? [];
      const updatePart = (i: number, patch: Partial<{ label: string; text: string }>) =>
        set({ parts: parts.map((p, j) => (j === i ? { ...p, ...patch } : p)) });
      return (
        <div className="flex flex-col gap-3">
          <Field label="Full sentence">
            <Input
              value={String(b.sentence ?? "")}
              onChange={(e) => set({ sentence: e.target.value })}
              placeholder="She works in a hospital."
            />
          </Field>
          <Field label="Translation (optional)">
            <Input
              value={String(b.translation ?? "")}
              onChange={(e) => set({ translation: e.target.value })}
            />
          </Field>
          {parts.map((p, i) => (
            <div key={i} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-3">
              <Field label="Part label">
                <Input value={p.label} onChange={(e) => updatePart(i, { label: e.target.value })} />
              </Field>
              <Field label="Text">
                <Input value={p.text} onChange={(e) => updatePart(i, { text: e.target.value })} />
              </Field>
              <div className="flex items-end">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-destructive"
                  onClick={() => set({ parts: parts.filter((_, j) => j !== i) })}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ parts: [...parts, { label: "", text: "" }] })}
          >
            <Plus className="size-4" /> Add part
          </Button>
        </div>
      );
    }
    case "video":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title">
            <Input
              value={String(b.title ?? "")}
              onChange={(e) => set({ title: e.target.value })}
              placeholder="Pronunciation: the schwa sound"
            />
          </Field>
          <Field label="Video URL (YouTube/Vimeo links embed automatically)">
            <Input
              placeholder="https://…"
              value={String(b.url ?? "")}
              onChange={(e) => set({ url: e.target.value })}
            />
          </Field>
          <Field label="Note (optional)">
            <Input
              value={String(b.note ?? "")}
              onChange={(e) => set({ note: e.target.value })}
            />
          </Field>
        </div>
      );
    case "image":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Image URL or uploaded file">
            <Select
              value={(b.assetId as string) ?? ""}
              onValueChange={(v) => {
                const asset = assets.find((a) => a.id === v);
                if (asset) {
                  set({ assetId: v, src: `/api/cms/assets/${v}/file` });
                } else {
                  set({ assetId: undefined });
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Use an uploaded image…" />
              </SelectTrigger>
              <SelectContent>
                {assets.filter((a) => a.kind === "image").length === 0 ? (
                  <div className="px-3 py-2 text-xs text-muted-foreground">
                    No images uploaded yet — upload in the Media tab.
                  </div>
                ) : null}
                {assets
                  .filter((a) => a.kind === "image")
                  .map((a) => (
                    <SelectItem key={a.id} value={a.id}>
                      {a.title}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Or paste an image URL">
            <Input
              placeholder="https://…"
              value={String(b.src ?? "")}
              onChange={(e) => set({ src: e.target.value, assetId: undefined })}
            />
          </Field>
          <Field label="Alt text (required for screen readers)">
            <Input value={String(b.alt ?? "")} onChange={(e) => set({ alt: e.target.value })} />
          </Field>
          <Field label="Caption (optional)">
            <Input value={String(b.caption ?? "")} onChange={(e) => set({ caption: e.target.value })} />
          </Field>
        </div>
      );
    case "audio": {
      const mode = (b.mode as "tts" | "asset") ?? "tts";
      return (
        <div className="flex flex-col gap-3">
          <Field label="Audio source">
            <Select value={mode} onValueChange={(v) => set({ mode: v as "tts" | "asset" })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tts">Read text aloud (speech synthesis)</SelectItem>
                <SelectItem value="asset">Uploaded audio file</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Label (optional)">
            <Input value={String(b.label ?? "")} onChange={(e) => set({ label: e.target.value })} />
          </Field>
          {mode === "tts" ? (
            <>
              <Field label="Text to read aloud">
                <Textarea rows={3} value={String(b.text ?? "")} onChange={(e) => set({ text: e.target.value })} />
              </Field>
              <Field label="Speech rate" hint="0.6 = slow, 1 = normal">
                <Input
                  type="number"
                  step="0.1"
                  min="0.5"
                  max="1.5"
                  value={Number(b.rate ?? 0.9)}
                  onChange={(e) => set({ rate: Number(e.target.value) })}
                />
              </Field>
            </>
          ) : (
            <Field label="Uploaded audio file">
              <Select
                value={(b.audioAssetId as string) ?? ""}
                onValueChange={(v) => {
                  const asset = assets.find((a) => a.id === v);
                  set({ audioAssetId: v, assetTitle: asset?.title });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose an audio file…" />
                </SelectTrigger>
                <SelectContent>
                  {assets.filter((a) => a.kind === "audio").length === 0 ? (
                    <div className="px-3 py-2 text-xs text-muted-foreground">
                      No audio uploaded yet — upload in the Media tab.
                    </div>
                  ) : null}
                  {assets
                    .filter((a) => a.kind === "audio")
                    .map((a) => (
                      <SelectItem key={a.id} value={a.id}>
                        {a.title}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </Field>
          )}
        </div>
      );
    }
    case "practice": {
      const ids = (b.exerciseIds as string[]) ?? [];
      const eligible = questions.filter((q) => q.status === "approved" || q.status === "published");
      return (
        <div className="flex flex-col gap-3">
          <Field label="Exercise set title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field
            label="Attached questions"
            hint="Only approved or published questions can be attached."
          >
            <div className="flex max-h-64 flex-col gap-2 overflow-y-auto rounded-lg border p-3">
              {questions.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  No questions yet — create them in the Question bank tab.
                </p>
              ) : null}
              {questions.map((q) => {
                const checked = ids.includes(q.id);
                const disabled = !checked && !eligible.some((e) => e.id === q.id);
                return (
                  <label
                    key={q.id}
                    className={`flex items-start gap-2 text-sm ${disabled ? "opacity-50" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={(e) =>
                        set({
                          exerciseIds: e.target.checked
                            ? [...ids, q.id]
                            : ids.filter((x) => x !== q.id),
                        })
                      }
                      className="mt-0.5"
                    />
                    <span className="flex flex-col">
                      <span className="font-medium">{q.label}</span>
                      <span className="text-xs text-muted-foreground">{q.status}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </Field>
        </div>
      );
    }
    case "assignment":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Assignment title">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Instructions for the learner">
            <Textarea
              rows={3}
              value={String(b.instructions ?? "")}
              onChange={(e) => set({ instructions: e.target.value })}
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Minimum words">
              <Input
                type="number"
                min="1"
                value={Number(b.minWords ?? 40)}
                onChange={(e) => set({ minWords: Number(e.target.value) })}
              />
            </Field>
            <Field label="Maximum words">
              <Input
                type="number"
                min="1"
                value={Number(b.maxWords ?? 150)}
                onChange={(e) => set({ maxWords: Number(e.target.value) })}
              />
            </Field>
          </div>
        </div>
      );
    case "homework":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <StringList
            label="Tasks"
            values={(b.tasks as string[]) ?? []}
            onChange={(tasks) => set({ tasks })}
            placeholder="Practise the new words…"
          />
        </div>
      );
    case "note":
    case "warning":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Text">
            <Textarea rows={3} value={String(b.text ?? "")} onChange={(e) => set({ text: e.target.value })} />
          </Field>
        </div>
      );
    case "lesson-intro": {
      const before = (b.beforeYouStart as string[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Introduction text" hint="What is the learner about to study?">
            <Textarea rows={3} value={String(b.text ?? "")} onChange={(e) => set({ text: e.target.value })} />
          </Field>
          <StringList
            label="Before you start (prerequisite abilities)"
            values={before}
            onChange={(beforeYouStart) => set({ beforeYouStart })}
            placeholder="You can say the days of the week…"
          />
        </div>
      );
    }
    case "steps": {
      const steps = (b.steps as { title: string; text: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Block title">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Intro (optional)">
            <Textarea rows={2} value={String(b.intro ?? "")} onChange={(e) => set({ intro: e.target.value })} />
          </Field>
          {steps.map((st, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <Field label={`Step ${i + 1} title`}>
                <Input
                  value={st.title}
                  onChange={(e) => set({ steps: steps.map((x, j) => (j === i ? { ...x, title: e.target.value } : x)) })}
                />
              </Field>
              <Field label={`Step ${i + 1} text`}>
                <Textarea
                  rows={2}
                  value={st.text}
                  onChange={(e) => set({ steps: steps.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)) })}
                />
              </Field>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ steps: steps.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove step
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ steps: [...steps, { title: "", text: "" }] })}
          >
            <Plus className="size-4" /> Add step
          </Button>
        </div>
      );
    }
    case "usage": {
      const items = (b.items as { situation: string; example: string; note?: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Intro text (optional)">
            <Textarea rows={2} value={String(b.text ?? "")} onChange={(e) => set({ text: e.target.value })} />
          </Field>
          {items.map((it, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <div className="grid gap-2 sm:grid-cols-2">
                <Field label="Situation" hint="e.g. At work, Shopping, Online">
                  <Input
                    value={it.situation}
                    onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, situation: e.target.value } : x)) })}
                  />
                </Field>
                <Field label="Example sentence">
                  <Input
                    value={it.example}
                    onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, example: e.target.value } : x)) })}
                  />
                </Field>
              </div>
              <Field label="Note (optional)">
                <Input
                  value={it.note ?? ""}
                  onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, note: e.target.value } : x)) })}
                />
              </Field>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ items: items.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ items: [...items, { situation: "", example: "" }] })}
          >
            <Plus className="size-4" /> Add situation
          </Button>
        </div>
      );
    }
    case "comparison": {
      const columns = (b.columns as [string, string]) ?? ["", ""];
      const rows = (b.rows as { aspect: string; left: string; right: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Intro (optional)">
            <Textarea rows={2} value={String(b.intro ?? "")} onChange={(e) => set({ intro: e.target.value })} />
          </Field>
          <div className="grid gap-2 sm:grid-cols-2">
            <Field label="Left column">
              <Input
                value={columns[0] ?? ""}
                onChange={(e) => set({ columns: [e.target.value, columns[1] ?? ""] })}
              />
            </Field>
            <Field label="Right column">
              <Input
                value={columns[1] ?? ""}
                onChange={(e) => set({ columns: [columns[0] ?? "", e.target.value] })}
              />
            </Field>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <div className="grid gap-2 sm:grid-cols-3">
                <Field label="Aspect">
                  <Input
                    value={row.aspect}
                    onChange={(e) => set({ rows: rows.map((x, j) => (j === i ? { ...x, aspect: e.target.value } : x)) })}
                  />
                </Field>
                <Field label={columns[0] || "Left"}>
                  <Input
                    value={row.left}
                    onChange={(e) => set({ rows: rows.map((x, j) => (j === i ? { ...x, left: e.target.value } : x)) })}
                  />
                </Field>
                <Field label={columns[1] || "Right"}>
                  <Input
                    value={row.right}
                    onChange={(e) => set({ rows: rows.map((x, j) => (j === i ? { ...x, right: e.target.value } : x)) })}
                  />
                </Field>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ rows: rows.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove row
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ rows: [...rows, { aspect: "", left: "", right: "" }] })}
          >
            <Plus className="size-4" /> Add row
          </Button>
          <Field label="Verdict (optional)" hint="One-sentence takeaway after the table">
            <Textarea rows={2} value={String(b.verdict ?? "")} onChange={(e) => set({ verdict: e.target.value })} />
          </Field>
        </div>
      );
    }
    case "mistakes": {
      const items = (b.items as { wrong: string; right: string; reason: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          {items.map((it, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <Field label="Incorrect sentence">
                <Input
                  value={it.wrong}
                  onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, wrong: e.target.value } : x)) })}
                />
              </Field>
              <Field label="Correct sentence">
                <Input
                  value={it.right}
                  onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, right: e.target.value } : x)) })}
                />
              </Field>
              <Field label="Reason for the correction">
                <Textarea
                  rows={2}
                  value={it.reason}
                  onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, reason: e.target.value } : x)) })}
                />
              </Field>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ items: items.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ items: [...items, { wrong: "", right: "", reason: "" }] })}
          >
            <Plus className="size-4" /> Add mistake
          </Button>
        </div>
      );
    }
    case "four-skills": {
      const reading = (b.reading as { text: string; task?: string }) ?? { text: "" };
      const writing = (b.writing as { task: string; guide?: string[]; model?: string }) ?? { task: "" };
      const listening = (b.listening as { script: string; task?: string }) ?? { script: "" };
      const speaking = (b.speaking as { task: string; frames?: string[]; checklist?: string[] }) ?? { task: "" };
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Reading — short passage">
            <Textarea
              rows={4}
              value={reading.text}
              onChange={(e) => set({ reading: { ...reading, text: e.target.value } })}
            />
          </Field>
          <Field label="Reading — task (optional)">
            <Input
              value={reading.task ?? ""}
              onChange={(e) => set({ reading: { ...reading, task: e.target.value } })}
            />
          </Field>
          <Field label="Writing — task">
            <Textarea
              rows={2}
              value={writing.task}
              onChange={(e) => set({ writing: { ...writing, task: e.target.value } })}
            />
          </Field>
          <StringList
            label="Writing — guide / sentence starters (optional)"
            values={writing.guide ?? []}
            onChange={(guide) => set({ writing: { ...writing, guide } })}
          />
          <Field label="Writing — model answer (optional)">
            <Textarea
              rows={2}
              value={writing.model ?? ""}
              onChange={(e) => set({ writing: { ...writing, model: e.target.value } })}
            />
          </Field>
          <Field label="Listening — script (spoken to the learner)">
            <Textarea
              rows={3}
              value={listening.script}
              onChange={(e) => set({ listening: { ...listening, script: e.target.value } })}
            />
          </Field>
          <Field label="Listening — task (optional)">
            <Input
              value={listening.task ?? ""}
              onChange={(e) => set({ listening: { ...listening, task: e.target.value } })}
            />
          </Field>
          <Field label="Speaking — task">
            <Textarea
              rows={2}
              value={speaking.task}
              onChange={(e) => set({ speaking: { ...speaking, task: e.target.value } })}
            />
          </Field>
          <StringList
            label="Speaking — sentence frames (optional)"
            values={speaking.frames ?? []}
            onChange={(frames) => set({ speaking: { ...speaking, frames } })}
          />
          <StringList
            label="Speaking — self-check points (optional)"
            values={speaking.checklist ?? []}
            onChange={(checklist) => set({ speaking: { ...speaking, checklist } })}
          />
        </div>
      );
    }
    case "summary":
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <StringList
            label="Key takeaways"
            values={(b.points as string[]) ?? []}
            onChange={(points) => set({ points })}
            placeholder="Capital letters start sentences…"
          />
        </div>
      );
    case "revision": {
      const items =
        (b.items as { question: string; options: string[]; correctIndex: number; explanation: string; from?: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          {items.map((it, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <Field label={`Question ${i + 1}`}>
                <Input
                  value={it.question}
                  onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, question: e.target.value } : x)) })}
                />
              </Field>
              <StringList
                label="Options"
                values={it.options}
                onChange={(options) => set({ items: items.map((x, j) => (j === i ? { ...x, options } : x)) })}
              />
              <div className="grid gap-2 sm:grid-cols-2">
                <Field label="Correct option number">
                  <Input
                    type="number"
                    min={1}
                    max={it.options.length}
                    value={it.correctIndex + 1}
                    onChange={(e) =>
                      set({
                        items: items.map((x, j) =>
                          j === i
                            ? { ...x, correctIndex: Math.max(0, Number(e.target.value) - 1) }
                            : x,
                        ),
                      })
                    }
                  />
                </Field>
                <Field label="From (optional)" hint="e.g. Chapter 02 · English Alphabet">
                  <Input
                    value={it.from ?? ""}
                    onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, from: e.target.value } : x)) })}
                  />
                </Field>
              </div>
              <Field label="Explanation shown after answering">
                <Textarea
                  rows={2}
                  value={it.explanation}
                  onChange={(e) => set({ items: items.map((x, j) => (j === i ? { ...x, explanation: e.target.value } : x)) })}
                />
              </Field>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ items: items.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ items: [...items, { question: "", options: ["", ""], correctIndex: 0, explanation: "" }] })}
          >
            <Plus className="size-4" /> Add question
          </Button>
        </div>
      );
    }
    case "language-support": {
      const entries = (b.entries as { english: string; ur?: string; hi?: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Note (optional)" hint="Shown above the entries">
            <Textarea rows={2} value={String(b.note ?? "")} onChange={(e) => set({ note: e.target.value })} />
          </Field>
          {entries.map((it, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
              <Field label="English sentence">
                <Input
                  value={it.english}
                  onChange={(e) => set({ entries: entries.map((x, j) => (j === i ? { ...x, english: e.target.value } : x)) })}
                />
              </Field>
              <div className="grid gap-2 sm:grid-cols-2">
                <Field label="Urdu gloss (optional)" hint="Hand-checked translation only">
                  <Input
                    dir="rtl"
                    value={it.ur ?? ""}
                    onChange={(e) => set({ entries: entries.map((x, j) => (j === i ? { ...x, ur: e.target.value } : x)) })}
                  />
                </Field>
                <Field label="Hindi gloss (optional)" hint="Hand-checked translation only">
                  <Input
                    value={it.hi ?? ""}
                    onChange={(e) => set({ entries: entries.map((x, j) => (j === i ? { ...x, hi: e.target.value } : x)) })}
                  />
                </Field>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-fit text-destructive"
                onClick={() => set({ entries: entries.filter((_, j) => j !== i) })}
              >
                <Trash2 className="size-3.5" /> Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            onClick={() => set({ entries: [...entries, { english: "" }] })}
          >
            <Plus className="size-4" /> Add entry
          </Button>
        </div>
      );
    }
  }
}
