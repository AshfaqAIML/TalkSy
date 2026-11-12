"use client";

/**
 * Media manager: audio/image uploads with full metadata (transcript,
 * language, pronunciation, licence, source, related lesson). Audio duration
 * is measured client-side by decoding the file before upload.
 */

import { useEffect, useRef, useState } from "react";
import { FileAudio, FileImage, Trash2, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cmsApi } from "@/lib/client/api";
import type { CmsAssetDto } from "@/data/cms/types";

/** Read audio duration by decoding in the browser. */
async function audioDuration(file: File): Promise<number | null> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const audio = new Audio();
    audio.preload = "metadata";
    audio.onloadedmetadata = () => {
      const d = audio.duration;
      URL.revokeObjectURL(url);
      resolve(Number.isFinite(d) && d > 0 ? d : null);
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };
    audio.src = url;
  });
}

export function MediaTab() {
  const [assets, setAssets] = useState<CmsAssetDto[]>([]);
  const [lessons, setLessons] = useState<{ id: string; title: string }[]>([]);
  const [form, setForm] = useState({
    title: "",
    transcript: "",
    language: "en",
    pronunciation: "",
    licence: "",
    source: "",
    relatedLessonId: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      const [a, t] = await Promise.all([cmsApi.assets(), cmsApi.tree()]);
      if (!active) return;
      if (a.ok) setAssets(a.data.assets);
      if (t.ok) {
        const list: { id: string; title: string }[] = [];
        for (const c of t.data.courses) {
          for (const m of c.modules) {
            for (const u of m.units) {
              for (const l of u.lessons) list.push({ id: l.id, title: `${c.title} → ${l.title}` });
            }
          }
        }
        setLessons(list);
      }
    })();
    return () => {
      active = false;
    };
  }, [reloadKey]);

  const reload = () => setReloadKey((k) => k + 1);

  const upload = async () => {
    if (!file) {
      toast.error("Choose a file first.");
      return;
    }
    setBusy(true);
    const data = new FormData();
    data.set("file", file);
    data.set("title", form.title || file.name);
    data.set("transcript", form.transcript);
    data.set("language", form.language);
    data.set("pronunciation", form.pronunciation);
    data.set("licence", form.licence);
    data.set("source", form.source);
    data.set("relatedLessonId", form.relatedLessonId);
    if (file.type.startsWith("audio/")) {
      const duration = await audioDuration(file);
      if (duration) data.set("durationSeconds", String(Math.round(duration * 10) / 10));
    }
    const res = await cmsApi.uploadAsset(data);
    setBusy(false);
    if (res.ok) {
      toast.success("Uploaded.");
      setFile(null);
      setForm({ title: "", transcript: "", language: "en", pronunciation: "", licence: "", source: "", relatedLessonId: "" });
      if (fileRef.current) fileRef.current.value = "";
      reload();
    } else toast.error(res.error);
  };

  const saveAsset = async (id: string, patch: Record<string, unknown>) => {
    const res = await cmsApi.updateAsset(id, patch);
    if (res.ok) toast.success("Saved.");
    else toast.error(res.error);
  };

  const remove = async (asset: CmsAssetDto) => {
    if (!confirm(`Delete "${asset.title}"? Lessons using it will lose the audio.`)) return;
    const res = await cmsApi.deleteAsset(asset.id);
    if (res.ok) {
      toast.success("Deleted.");
      reload();
    } else toast.error(res.error);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      {/* Upload */}
      <Card className="h-fit">
        <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
          <p className="text-sm font-semibold">Upload media</p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="media-file">Audio or image file (max 25 MB)</Label>
            <Input
              id="media-file"
              ref={fileRef}
              type="file"
              accept="audio/*,image/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            {file ? (
              <p className="text-xs text-muted-foreground">
                {file.name} · {(file.size / 1024 / 1024).toFixed(1)} MB · {file.type || "unknown type"}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="media-title">Title</Label>
            <Input
              id="media-title"
              placeholder="Greeting dialogue, slow"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="media-transcript">Transcript (for audio)</Label>
            <Textarea
              id="media-transcript"
              rows={3}
              placeholder="Hello! Good morning!"
              value={form.transcript}
              onChange={(e) => setForm((f) => ({ ...f, transcript: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="media-lang">Language</Label>
              <Input
                id="media-lang"
                value={form.language}
                onChange={(e) => setForm((f) => ({ ...f, language: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="media-pron">Pronunciation (IPA)</Label>
              <Input
                id="media-pron"
                placeholder="hə-ˈlō"
                value={form.pronunciation}
                onChange={(e) => setForm((f) => ({ ...f, pronunciation: e.target.value }))}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="media-licence">Licence</Label>
              <Input
                id="media-licence"
                placeholder="CC-BY-4.0"
                value={form.licence}
                onChange={(e) => setForm((f) => ({ ...f, licence: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="media-source">Source</Label>
              <Input
                id="media-source"
                placeholder="Recorded by school staff"
                value={form.source}
                onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Related lesson (optional)</Label>
            <Select
              value={form.relatedLessonId}
              onValueChange={(v) => setForm((f) => ({ ...f, relatedLessonId: v }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                {lessons.map((l) => (
                  <SelectItem key={l.id} value={l.id}>{l.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={upload} disabled={busy || !file} className="gap-1.5">
            <Upload className="size-4" /> {busy ? "Uploading…" : "Upload"}
          </Button>
        </CardContent>
      </Card>

      {/* Library */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold">Media library ({assets.length})</p>
        {assets.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nothing uploaded yet.</p>
        ) : null}
        {assets.map((a) => (
          <AssetRow key={a.id} asset={a} lessons={lessons} onSave={saveAsset} onDelete={remove} />
        ))}
      </div>
    </div>
  );
}

function AssetRow({
  asset,
  lessons,
  onSave,
  onDelete,
}: {
  asset: CmsAssetDto;
  lessons: { id: string; title: string }[];
  onSave: (id: string, patch: Record<string, unknown>) => Promise<void>;
  onDelete: (asset: CmsAssetDto) => void;
}) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({
    transcript: asset.transcript,
    pronunciation: asset.pronunciation,
    licence: asset.licence,
    source: asset.source,
    language: asset.language,
    relatedLessonId: asset.relatedLessonId ?? "",
  });

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          {asset.kind === "audio" ? (
            <FileAudio className="size-4 text-primary" aria-hidden />
          ) : (
            <FileImage className="size-4 text-primary" aria-hidden />
          )}
          <span className="font-medium">{asset.title}</span>
          <Badge variant="secondary">{asset.kind}</Badge>
          <span className="text-xs text-muted-foreground">
            {asset.fileName} · {(asset.sizeBytes / 1024).toFixed(0)} KB
            {asset.durationSeconds ? ` · ${asset.durationSeconds.toFixed(1)}s` : ""}
            {asset.language ? ` · ${asset.language}` : ""}
          </span>
          <div className="ml-auto flex gap-1.5">
            <Button variant="ghost" size="sm" onClick={() => setOpen((o) => !o)}>
              {open ? "Close" : "Edit metadata"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-destructive"
              aria-label={`Delete ${asset.title}`}
              onClick={() => onDelete(asset)}
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        </div>
        {asset.kind === "audio" ? (
          <audio controls preload="none" src={asset.fileUrl} className="h-8 w-full max-w-md">
            Audio playback is not supported.
          </audio>
        ) : null}
        {asset.transcript ? (
          <p className="text-sm text-muted-foreground">Transcript: “{asset.transcript}”</p>
        ) : null}
        {asset.licence || asset.source ? (
          <p className="text-xs text-muted-foreground">
            {[asset.licence, asset.source].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        {open ? (
          <div className="grid gap-3 rounded-lg border p-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor={`t-${asset.id}`}>Transcript</Label>
              <Textarea
                id={`t-${asset.id}`}
                rows={2}
                value={draft.transcript}
                onChange={(e) => setDraft((d) => ({ ...d, transcript: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`p-${asset.id}`}>Pronunciation</Label>
              <Input
                id={`p-${asset.id}`}
                value={draft.pronunciation}
                onChange={(e) => setDraft((d) => ({ ...d, pronunciation: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`l-${asset.id}`}>Language</Label>
              <Input
                id={`l-${asset.id}`}
                value={draft.language}
                onChange={(e) => setDraft((d) => ({ ...d, language: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`li-${asset.id}`}>Licence</Label>
              <Input
                id={`li-${asset.id}`}
                value={draft.licence}
                onChange={(e) => setDraft((d) => ({ ...d, licence: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`s-${asset.id}`}>Source</Label>
              <Input
                id={`s-${asset.id}`}
                value={draft.source}
                onChange={(e) => setDraft((d) => ({ ...d, source: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Related lesson</Label>
              <Select
                value={draft.relatedLessonId}
                onValueChange={(v) => setDraft((d) => ({ ...d, relatedLessonId: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  {lessons.map((l) => (
                    <SelectItem key={l.id} value={l.id}>{l.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Button
                size="sm"
                onClick={() =>
                  void onSave(asset.id, {
                    ...draft,
                    relatedLessonId: draft.relatedLessonId || null,
                  })
                }
              >
                Save metadata
              </Button>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
