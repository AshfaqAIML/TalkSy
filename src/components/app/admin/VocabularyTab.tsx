"use client";

/**
 * PROMPT 39 §6 — managed vocabulary (bulk import + editing).
 *
 * Every row is validated server-side on create, edit AND import (the seven
 * required fields). Imports report per-row errors; nothing is approved
 * implicitly — approval is a separate editorial action, and only approved
 * entries are visible to learners (Word Explorer, "Extension" bucket).
 */

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Download,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { request } from "@/lib/client/api";

interface EntryRow {
  id: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
  translation: string;
  difficulty: string;
  categoryId: string;
  status: string;
  source: string;
  note: string;
}

interface ListResponse {
  entries: EntryRow[];
  totals: { all: number; draft: number; approved: number };
}

interface ImportReport {
  total: number;
  imported: number;
  skippedDuplicates: number;
  rejected: number;
  rejectedRows: { row: number; word: string; errors: string[] }[];
}

const EMPTY_FORM = {
  word: "",
  partOfSpeech: "noun",
  definition: "",
  pronunciation: "",
  example: "",
  exampleTranslation: "",
  translation: "",
  difficulty: "medium",
  note: "",
};

const POS_OPTIONS = [
  "noun", "verb", "adjective", "adverb", "phrase", "preposition",
  "conjunction", "pronoun", "interjection", "expression", "noun phrase", "verb phrase",
];

export function VocabularyTab() {
  const [data, setData] = useState<ListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [editing, setEditing] = useState<EntryRow | null>(null);
  const [importText, setImportText] = useState("");
  const [importing, setImporting] = useState(false);
  const [report, setReport] = useState<ImportReport | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const res = await request<ListResponse>("/api/cms/admin/vocabulary");
      if (cancelled) return;
      if (res.ok) setData(res.data);
      else toast.error(res.error);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const load = async () => {
    const res = await request<ListResponse>("/api/cms/admin/vocabulary");
    if (res.ok) setData(res.data);
    else toast.error(res.error);
    setLoading(false);
  };

  const entries = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.entries.filter((row) => {
      if (statusFilter !== "all" && row.status !== statusFilter) return false;
      if (q) {
        const hay = [row.word, row.definition, row.translation].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [data, statusFilter, query]);

  const submitForm = async () => {
    const body = editing
      ? { ...form, status: editing.status }
      : form;
    const res = editing
      ? await request<{ entry: EntryRow }>(`/api/cms/admin/vocabulary/${editing.id}`, {
          method: "PATCH",
          body: JSON.stringify(body),
        })
      : await request<{ entry: EntryRow }>("/api/cms/admin/vocabulary", {
          method: "POST",
          body: JSON.stringify(body),
        });
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    toast.success(editing ? "Entry updated." : "Entry created as a draft.");
    setForm({ ...EMPTY_FORM });
    setEditing(null);
    void load();
  };

  const remove = async (id: string) => {
    const res = await request(`/api/cms/admin/vocabulary/${id}`, { method: "DELETE" });
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    toast.success("Entry deleted.");
    void load();
  };

  const setStatus = async (row: EntryRow, status: "draft" | "approved") => {
    const res = await request(`/api/cms/admin/vocabulary/${row.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        word: row.word,
        partOfSpeech: row.partOfSpeech,
        definition: row.definition,
        pronunciation: row.pronunciation,
        example: row.example,
        exampleTranslation: row.exampleTranslation,
        translation: row.translation,
        difficulty: row.difficulty,
        note: row.note,
        status,
      }),
    });
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    toast.success(status === "approved" ? "Approved — visible in the Word Explorer." : "Reverted to draft.");
    void load();
  };

  const runImport = async () => {
    let rows: unknown;
    try {
      rows = JSON.parse(importText);
    } catch {
      toast.error("The import text is not valid JSON.");
      return;
    }
    setImporting(true);
    const res = await request<ImportReport>("/api/cms/admin/vocabulary/import", {
      method: "POST",
      body: JSON.stringify(rows),
    });
    setImporting(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    setReport(res.data);
    toast.success(
      `Imported ${res.data.imported} of ${res.data.total} (${res.data.skippedDuplicates} duplicates, ${res.data.rejected} rejected).`,
    );
    void load();
  };

  const exportJson = async () => {
    const res = await request<{ rows: unknown[] }>("/api/cms/admin/vocabulary/export");
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    const blob = new Blob([JSON.stringify(res.data.rows, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "talksy-vocabulary-export.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center gap-2 text-base">
            Vocabulary management
            {data ? (
              <>
                <Badge variant="secondary">{data.totals.all} total</Badge>
                <Badge variant="outline">{data.totals.approved} approved</Badge>
                <Badge variant="outline">{data.totals.draft} draft</Badge>
              </>
            ) : null}
            <span className="ml-auto flex gap-2">
              <Button variant="ghost" size="sm" onClick={load} aria-label="Refresh">
                <RefreshCw className="size-4" aria-hidden />
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={exportJson}>
                <Download className="size-4" aria-hidden /> Export
              </Button>
            </span>
          </CardTitle>
          <CardDescription>
            Extension words for the Word Explorer. Every row is validated on
            create, edit and import; approval is a separate editorial step —
            only approved entries are visible to learners.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-56 flex-1">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" aria-hidden />
              <Input
                className="pl-8"
                placeholder="Search word, definition, translation…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search entries"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-36" aria-label="Status filter">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-2/3" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-2 pr-3 font-medium">Word</th>
                    <th className="py-2 pr-3 font-medium">POS</th>
                    <th className="py-2 pr-3 font-medium">Definition</th>
                    <th className="py-2 pr-3 font-medium">Difficulty</th>
                    <th className="py-2 pr-3 font-medium">Status</th>
                    <th className="py-2 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-6 text-center text-muted-foreground">
                        No entries yet — add one below or run a bulk import.
                      </td>
                    </tr>
                  ) : null}
                  {entries.map((row) => (
                    <tr key={row.id} className="border-b last:border-0 align-top">
                      <td className="py-2 pr-3 font-medium">{row.word}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{row.partOfSpeech}</td>
                      <td className="max-w-72 py-2 pr-3 text-muted-foreground">
                        <span className="line-clamp-2">{row.definition}</span>
                      </td>
                      <td className="py-2 pr-3">
                        <Badge variant="outline" className="capitalize">
                          {row.difficulty}
                        </Badge>
                      </td>
                      <td className="py-2 pr-3">
                        <Badge variant={row.status === "approved" ? "default" : "secondary"}>
                          {row.status}
                        </Badge>
                      </td>
                      <td className="py-2 text-right">
                        <span className="inline-flex flex-wrap justify-end gap-1">
                          {row.status === "approved" ? (
                            <Button variant="ghost" size="sm" onClick={() => setStatus(row, "draft")}>
                              Revert
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm" className="gap-1" onClick={() => setStatus(row, "approved")}>
                              <BadgeCheck className="size-4" aria-hidden /> Approve
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditing(row);
                              setForm({
                                word: row.word,
                                partOfSpeech: row.partOfSpeech,
                                definition: row.definition,
                                pronunciation: row.pronunciation,
                                example: row.example,
                                exampleTranslation: row.exampleTranslation,
                                translation: row.translation,
                                difficulty: row.difficulty,
                                note: row.note,
                              });
                            }}
                          >
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive" onClick={() => remove(row.id)}>
                            <Trash2 className="size-4" aria-hidden />
                          </Button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {editing ? `Edit “${editing.word}”` : "Add an entry"}
          </CardTitle>
          <CardDescription>
            The seven fields are validated server-side on save (word, part of
            speech, definition, example, pronunciation, translation, difficulty).
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="v-word">Word</Label>
              <Input id="v-word" value={form.word} onChange={(e) => setForm({ ...form, word: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="v-pos">Part of speech</Label>
              <Select value={form.partOfSpeech} onValueChange={(v) => setForm({ ...form, partOfSpeech: v })}>
                <SelectTrigger id="v-pos">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {POS_OPTIONS.map((pos) => (
                    <SelectItem key={pos} value={pos} className="capitalize">
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="v-def">Definition (simple English)</Label>
              <Input id="v-def" value={form.definition} onChange={(e) => setForm({ ...form, definition: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="v-pron">Pronunciation (stress notation, e.g. im-PO-tant)</Label>
              <Input id="v-pron" value={form.pronunciation} onChange={(e) => setForm({ ...form, pronunciation: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="v-tr">Translation (support language)</Label>
              <Input id="v-tr" value={form.translation} onChange={(e) => setForm({ ...form, translation: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="v-ex">Example sentence</Label>
              <Input id="v-ex" value={form.example} onChange={(e) => setForm({ ...form, example: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="v-extr">Example translation</Label>
              <Input id="v-extr" value={form.exampleTranslation} onChange={(e) => setForm({ ...form, exampleTranslation: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="v-diff">Difficulty</Label>
              <Select value={form.difficulty} onValueChange={(v) => setForm({ ...form, difficulty: v })}>
                <SelectTrigger id="v-diff">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={submitForm} className="gap-1.5">
              <Plus className="size-4" aria-hidden /> {editing ? "Save changes" : "Add entry (draft)"}
            </Button>
            {editing ? (
              <Button
                variant="ghost"
                onClick={() => {
                  setEditing(null);
                  setForm({ ...EMPTY_FORM });
                }}
              >
                Cancel
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Bulk import</CardTitle>
          <CardDescription>
            Paste a JSON array (max 500 rows). Each row is validated
            independently; invalid rows are rejected with their errors and
            duplicates are skipped. Valid rows import as drafts.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Textarea
            rows={7}
            placeholder={'[\n  { "word": "reliable", "partOfSpeech": "adjective", "definition": "someone you can trust", "pronunciation": "re-LY-a-ble", "example": "She is a reliable friend.", "exampleTranslation": "…", "translation": "…", "difficulty": "medium" }\n]'}
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            aria-label="Bulk import JSON"
            className="font-mono text-xs"
          />
          <Button onClick={runImport} disabled={importing} className="w-fit gap-1.5">
            <Upload className="size-4" aria-hidden /> {importing ? "Importing…" : "Import batch"}
          </Button>
          {report ? (
            <div className="rounded-lg border bg-secondary/30 p-3 text-xs">
              <p className="font-semibold">
                {report.total} rows: {report.imported} imported · {report.skippedDuplicates} duplicates ·{" "}
                {report.rejected} rejected
              </p>
              {report.rejectedRows.length > 0 ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                  {report.rejectedRows.slice(0, 10).map((row) => (
                    <li key={row.row}>
                      Row {row.row}
                      {row.word ? ` (“${row.word}”)` : ""}: {row.errors.join("; ")}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
