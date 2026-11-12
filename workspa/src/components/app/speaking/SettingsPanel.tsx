"use client";

/**
 * Speaking settings & privacy — the STT provider picker, transcript
 * retention control, consent status, and the delete-all-history button.
 */

import { useState } from "react";
import { CheckCircle2, Mic, ShieldAlert, ShieldCheck, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { api, type SpeakingSettingsDto } from "@/lib/client/api";
import type { SttProviderSetting } from "@/data/speaking/types";
import { RETENTION_OPTIONS } from "@/data/speaking/types";
import { ConsentDialog } from "./ConsentDialog";

const PROVIDERS: { id: SttProviderSetting; title: string; body: string }[] = [
  {
    id: "auto",
    title: "Automatic (recommended)",
    body: "Use server transcription, and fall back to typing when it is unavailable.",
  },
  {
    id: "server",
    title: "Server transcription",
    body: "Your recording is sent once to the TalkSy server, transcribed, and immediately discarded. Best accuracy.",
  },
  {
    id: "browser",
    title: "In-browser recognition",
    body: "Your browser's own speech recognition transcribes live, where supported. Audio never leaves your device.",
  },
  {
    id: "manual",
    title: "Typed responses only",
    body: "No microphone at all: you speak out loud, then type what you said. Every exercise still works.",
  },
];

export function SettingsPanel({
  settings,
  onChanged,
}: {
  settings: SpeakingSettingsDto;
  onChanged: (settings: SpeakingSettingsDto) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [consentOpen, setConsentOpen] = useState(false);

  const save = async (patch: {
    provider?: SttProviderSetting;
    retentionDays?: number;
    consent?: boolean;
  }) => {
    setBusy(true);
    const response = await api.speakingUpdateSettings(patch);
    setBusy(false);
    if (response.ok) {
      onChanged(response.data.settings);
      toast.success("Speaking settings saved.");
    } else {
      toast.error(response.error);
    }
  };

  const deleteHistory = async () => {
    setBusy(true);
    const response = await api.speakingDeleteHistory();
    setBusy(false);
    if (response.ok) {
      toast.success("All speaking attempts, conversations and pronunciation takes deleted.");
      onChanged(settings);
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Consent status */}
      <section className="rounded-xl border bg-card p-4 sm:p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
          <Mic className="size-4 text-primary" aria-hidden /> Microphone &amp; privacy
        </h3>
        <div className="mt-3 space-y-2 text-sm">
          <p className="flex items-start gap-2">
            {settings.consented ? (
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
            ) : (
              <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
            )}
            <span>
              {settings.consented
                ? "You have accepted the microphone & privacy notice. Recording still starts only when you press Record."
                : "The microphone is disabled until you accept the microphone & privacy notice."}
            </span>
          </p>
          <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
            <li>Recording starts only from an explicit press of the Record button.</li>
            <li>Audio is never stored on the TalkSy server — it is transcribed once and discarded.</li>
            <li>With in-browser recognition, audio never leaves your device.</li>
            <li>Only transcripts (text) may be saved, per your retention setting below.</li>
          </ul>
          {!settings.consented ? (
            <Button size="sm" className="mt-1" onClick={() => setConsentOpen(true)}>
              Review &amp; accept the notice
            </Button>
          ) : null}
        </div>
      </section>

      {/* Provider */}
      <section className="rounded-xl border bg-card p-4 sm:p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide">Speech-to-text provider</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          How your spoken answers become text for feedback.
        </p>
        <RadioGroup
          value={settings.provider}
          onValueChange={(value) => save({ provider: value as SttProviderSetting })}
          className="mt-3 gap-3"
          disabled={busy}
        >
          {PROVIDERS.map((provider) => (
            <Label
              key={provider.id}
              htmlFor={`provider-${provider.id}`}
              className="flex cursor-pointer items-start gap-3 rounded-lg border p-3 font-normal hover:border-primary/50 has-[[state=checked]]:border-primary"
            >
              <RadioGroupItem
                value={provider.id}
                id={`provider-${provider.id}`}
                className="mt-0.5"
              />
              <span>
                <span className="block font-semibold">{provider.title}</span>
                <span className="block text-sm text-muted-foreground">{provider.body}</span>
              </span>
            </Label>
          ))}
        </RadioGroup>
      </section>

      {/* Retention */}
      <section className="rounded-xl border bg-card p-4 sm:p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide">Transcript retention</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          How long TalkSy keeps the text of what you said. There is nothing else to
          delete — audio is never stored.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Select
            value={String(settings.retentionDays)}
            onValueChange={(value) => save({ retentionDays: Number(value) })}
            disabled={busy}
          >
            <SelectTrigger className="w-72" aria-label="Transcript retention">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {RETENTION_OPTIONS.map((option) => (
                <SelectItem key={option.days} value={String(option.days)}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-emerald-600" aria-hidden />
          &ldquo;Do not store transcripts&rdquo; keeps scores and progress but never
          saves the words you said.
        </p>
      </section>

      {/* Delete history */}
      <section className="rounded-xl border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/20 sm:p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-red-700 dark:text-red-400">
          Delete my speaking history
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Removes every speaking attempt, conversation report and pronunciation take.
          Progress counters are reset for the Speaking Lab. This cannot be undone.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="mt-3 gap-2" disabled={busy}>
              <Trash2 className="size-4" aria-hidden /> Delete everything
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete your entire speaking history?</AlertDialogTitle>
              <AlertDialogDescription>
                All speaking attempts, conversation sessions and pronunciation takes
                will be permanently deleted. There is no audio to delete — audio was
                never stored.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep my history</AlertDialogCancel>
              <AlertDialogAction onClick={deleteHistory}>Delete everything</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      <ConsentDialog
        open={consentOpen}
        onOpenChange={setConsentOpen}
        onConsented={onChanged}
      />
    </div>
  );
}
