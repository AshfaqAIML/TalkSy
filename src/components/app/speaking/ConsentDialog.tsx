"use client";

/**
 * Microphone + privacy consent dialog. Recording is impossible until the
 * learner has explicitly accepted this notice, and acceptance is recorded
 * server-side (SpeakingSettings.consentedAt).
 */

import { useState } from "react";
import { Mic, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/client/api";
import { toast } from "sonner";
import type { SpeakingSettingsDto } from "@/lib/client/api";

export function ConsentDialog({
  open,
  onOpenChange,
  onConsented,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConsented: (settings: SpeakingSettingsDto) => void;
}) {
  const [busy, setBusy] = useState(false);

  const accept = async () => {
    setBusy(true);
    const response = await api.speakingUpdateSettings({ consent: true });
    setBusy(false);
    if (response.ok) {
      onConsented(response.data.settings);
      toast.success("Microphone enabled. You control every recording.");
      onOpenChange(false);
    } else {
      toast.error(response.error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mic className="size-5 text-primary" aria-hidden /> Before you record
          </DialogTitle>
          <DialogDescription>
            TalkSy records your voice only when you press the record button.
            Here is exactly what happens:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 text-sm">
          <div className="flex gap-3 rounded-lg border bg-secondary/40 p-3">
            <Mic className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <p>
              <span className="font-semibold">The microphone is yours.</span>{" "}
              Recording starts only when you explicitly press{" "}
              <span className="font-medium">Record</span> — never automatically —
              and stops when you stop it.
            </p>
          </div>
          <div className="flex gap-3 rounded-lg border bg-secondary/40 p-3">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <div>
              <p>
                <span className="font-semibold">Your audio is never stored.</span>{" "}
                With server transcription, the recording is sent once to convert
                it to text and is then immediately discarded — only the text
                comes back. With in-browser recognition, audio never leaves your
                device at all.
              </p>
              <p className="mt-2 text-muted-foreground">
                Transcripts (text only) are saved to your history according to
                your retention setting, which you can change or reduce to
                &ldquo;do not store&rdquo; at any time. You can also delete your
                entire speaking history with one click.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-2 gap-2 sm:gap-0">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Not now
          </Button>
          <Button onClick={accept} disabled={busy}>
            {busy ? "Saving…" : "I understand — enable the microphone"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
