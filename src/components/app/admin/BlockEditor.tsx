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
      const items = (b.items as { english: string; translation: string }[]) ?? [];
      return (
        <div className="flex flex-col gap-3">
          <Field label="Title (optional)">
            <Input value={String(b.title ?? "")} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          {items.map((it, i) => (
            <div key={i} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-2">
              <Field label={`Example ${i + 1} (English)`}>
                <Input
                  value={it.english}
                  onChange={(e) =>
                    set({ items: items.map((x, j) => (j === i ? { ...x, english: e.target.value } : x)) })
                  }
                />
              </Field>
              <Field label="Translation">
                <Input
                  value={it.translation}
                  onChange={(e) =>
                    set({ items: items.map((x, j) => (j === i ? { ...x, translation: e.target.value } : x)) })
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
            onClick={() => set({ items: [...items, { english: "", translation: "" }] })}
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
  }
}
