"use client";

/**
 * Conversation simulator — a role-play with an AI partner (or the authored
 * offline script when the AI is unreachable). The partner never interrupts
 * with corrections: all coaching arrives in the end-of-conversation report
 * (measured stats + clearly labeled AI coach feedback).
 */

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Bot,
  Flag,
  Keyboard,
  Lightbulb,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSpeech } from "@/hooks/use-speech";
import { useRecorder } from "@/hooks/use-recorder";
import { useSpeechRecognition } from "@/hooks/use-speech";
import { blobToWavBase64 } from "@/lib/speaking/wav";
import {
  api,
  type SpeakingConversationFinish,
  type SpeakingConversationStart,
  type SpeakingScenarioBundle,
  type SpeakingSettingsDto,
} from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { ConsentDialog } from "./ConsentDialog";
import { ACCENT_DISCLAIMER } from "@/data/speaking/types";

const LEVELS = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export function ConversationView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const speech = useSpeech();
  const recorder = useRecorder(120);
  const recognition = useSpeechRecognition();

  const [scenarioBundle, setScenarioBundle] = useState<SpeakingScenarioBundle | null>(null);
  const [settings, setSettings] = useState<SpeakingSettingsDto | null>(null);
  const [level, setLevel] = useState("beginner");
  const [session, setSession] = useState<SpeakingConversationStart | null>(null);
  const [turns, setTurns] = useState<{ role: "partner" | "learner"; text: string }[]>([]);
  const [typed, setTyped] = useState("");
  const [busy, setBusy] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [report, setReport] = useState<SpeakingConversationFinish | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPhrases, setShowPhrases] = useState(false);
  const [consentOpen, setConsentOpen] = useState(false);
  const [voiceMode, setVoiceMode] = useState(true);
  const [transcribing, setTranscribing] = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!userLoaded || !user) return;
    void Promise.all([
      api.speakingScenario(slug),
      api.speakingLibrary(),
    ]).then(([scenarioRes, libraryRes]) => {
      if (scenarioRes.ok) setScenarioBundle(scenarioRes.data);
      else setError(scenarioRes.error);
      if (libraryRes.ok) {
        setSettings(libraryRes.data.settings);
        setVoiceMode(libraryRes.data.settings.provider !== "manual");
      }
    });
  }, [slug, user, userLoaded]);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight });
  }, [turns, report]);

  const scenario = scenarioBundle?.scenario ?? null;

  const startSession = async () => {
    if (!scenario) return;
    setBusy(true);
    setError(null);
    setReport(null);
    setTurns([]);
    const response = await api.speakingStartConversation({ slug: scenario.slug, level });
    setBusy(false);
    if (response.ok) {
      setSession(response.data);
      setTurns(response.data.session.turns);
      // Speak the opening line.
      if (speech.playing) speech.stop();
      speech.play(response.data.session.turns[0]?.text ?? "");
    } else {
      setError(response.error);
    }
  };

  const sendTurn = async (text: string) => {
    if (!session || text.trim().length === 0) return;
    setBusy(true);
    setError(null);
    setTyped("");
    const response = await api.speakingConversationTurn(session.session.id, text.trim());
    setBusy(false);
    if (response.ok) {
      setTurns((previous) => [
        ...previous,
        { role: "learner", text: text.trim() },
        { role: "partner", text: response.data.reply },
      ]);
      if (speech.playing) speech.stop();
      speech.play(response.data.reply);
    } else {
      setError(response.error);
    }
  };

  const finish = async () => {
    if (!session) return;
    setFinishing(true);
    setError(null);
    const response = await api.speakingConversationFinish(session.session.id);
    setFinishing(false);
    if (response.ok) {
      setReport(response.data);
      if (speech.playing) speech.stop();
    } else {
      setError(response.error);
    }
  };

  /** Voice reply flow: stop → (transcribe if server) → send. */
  const submitRecording = async () => {
    if (!settings || !session) return;
    if (!settings.consented) {
      setConsentOpen(true);
      return;
    }
    const blob = recorder.getBlob();
    if (!blob) return;
    setTranscribing(true);
    if (settings.provider === "browser" && recognition.transcript) {
      setTranscribing(false);
      await sendTurn(recognition.transcript);
      recorder.reset();
      return;
    }
    const base64 = await blobToWavBase64(blob);
    if (!base64) {
      setTranscribing(false);
      setError("This recording could not be converted — type your reply instead.");
      setVoiceMode(false);
      return;
    }
    const response = await api.speakingTranscribe(base64);
    setTranscribing(false);
    recorder.reset();
    if (!response.ok) {
      setError(response.error);
      setVoiceMode(false);
      return;
    }
    if (response.data.error || !response.data.transcript) {
      setError(
        response.data.message ?? "Transcription failed — type your reply instead.",
      );
      setVoiceMode(false);
      return;
    }
    await sendTurn(response.data.transcript);
  };

  // Live browser recognition while the conversation recorder runs.
  useEffect(() => {
    if (
      settings?.provider === "browser" &&
      recognition.supported &&
      recorder.state === "recording" &&
      !recognition.listening
    ) {
      recognition.start();
    }
    if (recorder.state !== "recording" && recognition.listening) {
      recognition.stop();
    }
  }, [recorder.state, settings?.provider]);

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Conversation simulator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to practise real conversations.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }

  if (!scenario || !settings) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="mt-4 h-52 rounded-2xl" />
        {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
      </div>
    );
  }

  const levelSpec =
    scenario.levels.find((spec) => spec.level === level) ?? scenario.levels[0];
  const learnerTurnCount = turns.filter((turn) => turn.role === "learner").length;

  // ---------------- Pre-session setup ----------------
  if (!session && !report) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 gap-2 text-muted-foreground"
          onClick={() => navigate({ name: "speaking", view: "hub" })}
        >
          <ArrowLeft className="size-4" aria-hidden /> Speaking Lab
        </Button>

        <div className="mt-2 flex items-start gap-3">
          <span className="text-4xl" aria-hidden>{scenario.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{scenario.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{scenario.description}</p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
          <p className="text-sm">
            <span className="font-semibold">Your partner:</span> {scenario.partner.name},{" "}
            {scenario.partner.role}.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{scenario.setting}</p>
          <p className="mt-3 rounded-lg bg-secondary/50 p-3 text-sm">
            <Sparkles className="mr-1.5 inline size-4 text-primary" aria-hidden />
            <span className="font-semibold">Your goal:</span> {scenario.learnerGoal}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Choose the difficulty — the partner adapts to your level
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {LEVELS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setLevel(option.id)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  level === option.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:border-primary/50",
                )}
                aria-pressed={level === option.id}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <Button className="mt-6" size="lg" onClick={startSession} disabled={busy}>
          <MessageCircle className="size-5" aria-hidden />
          {busy ? "Starting…" : "Start the conversation"}
        </Button>
        {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

        <p className="mt-6 max-w-xl text-xs text-muted-foreground">
          The partner plays their role without interrupting you — corrections,
          better expressions and new vocabulary all arrive in the
          end-of-conversation report.
        </p>
      </div>
    );
  }

  // ---------------- Finished: the report ----------------
  if (report) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 gap-2 text-muted-foreground"
          onClick={() => navigate({ name: "speaking", view: "hub" })}
        >
          <ArrowLeft className="size-4" aria-hidden /> Speaking Lab
        </Button>
        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Conversation report
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {scenario.emoji} {scenario.title} · {level} level ·{" "}
          {report.engine === "ai" ? "AI partner" : "offline script partner"}
        </p>

        {/* Measured stats */}
        <section className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide">Measured results</h2>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Your turns", value: report.measured.learnerTurns },
              { label: "Words spoken", value: report.measured.wordCount },
              {
                label: "Avg words / turn",
                value: report.measured.avgWordsPerTurn,
              },
              { label: "Questions asked", value: report.measured.questionsAsked },
            ].map((chip) => (
              <div key={chip.label} className="rounded-lg bg-secondary/60 p-2.5 text-center">
                <p className="text-lg font-bold leading-tight">{chip.value}</p>
                <p className="text-[11px] text-muted-foreground">{chip.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm">
            Goal coverage:{" "}
            <span className="font-bold">
              {Math.round(report.measured.goalCoverage * 100)}%
            </span>{" "}
            {report.measured.goalKeywordsHit.length > 0 ? (
              <span className="text-muted-foreground">
                (covered: {report.measured.goalKeywordsHit.join(", ")})
              </span>
            ) : null}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{ACCENT_DISCLAIMER}</p>
        </section>

        {/* Coach feedback */}
        <section className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
            <Bot className="size-4 text-primary" aria-hidden /> Coach feedback
            <span className="ml-auto rounded-full bg-background px-2 py-0.5 text-[11px] font-medium normal-case tracking-normal text-muted-foreground">
              {report.feedbackSource === "ai"
                ? "AI-generated from your conversation"
                : "generated from measured data (AI unavailable)"}
            </span>
          </h2>

          {report.feedback.strongPoints.length > 0 ? (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                Strong points
              </p>
              <ul className="mt-1.5 space-y-1 text-sm">
                {report.feedback.strongPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {report.feedback.mistakes.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                Mistakes to fix
              </p>
              <ul className="mt-1.5 space-y-2 text-sm">
                {report.feedback.mistakes.map((mistake, index) => (
                  <li key={index} className="rounded-lg border bg-background p-2.5">
                    <p className="text-muted-foreground line-through">{mistake.said}</p>
                    <p className="font-semibold">{mistake.correction}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{mistake.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {report.feedback.betterAlternatives.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Better expressions
              </p>
              <ul className="mt-1.5 space-y-1.5 text-sm">
                {report.feedback.betterAlternatives.map((item, index) => (
                  <li key={index} className="rounded-lg border bg-background p-2.5">
                    {item.instead ? (
                      <p className="text-muted-foreground">Instead of: “{item.instead}”</p>
                    ) : null}
                    <p className="font-semibold">Try: “{item.say}”</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {report.feedback.newVocabulary.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                New vocabulary
              </p>
              <ul className="mt-1.5 grid gap-2 sm:grid-cols-2">
                {report.feedback.newVocabulary.map((word, index) => (
                  <li key={index} className="rounded-lg border bg-background p-2.5 text-sm">
                    <p className="font-semibold">{word.word}</p>
                    <p className="text-muted-foreground">{word.meaning}</p>
                    <p className="mt-0.5 text-xs italic">“{word.example}”</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {report.feedback.revisionFocus.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Revise next
              </p>
              <ul className="mt-1.5 space-y-1 text-sm">
                {report.feedback.revisionFocus.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {report.feedback.followUpTask ? (
            <div className="mt-4 rounded-lg border border-dashed bg-background p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Follow-up practice task
              </p>
              <p className="mt-1 text-sm">{report.feedback.followUpTask}</p>
            </div>
          ) : null}
        </section>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button onClick={() => { setSession(null); setReport(null); setTurns([]); }}>
            <MessageCircle className="size-4" aria-hidden /> Practise this scenario again
          </Button>
          <Button variant="outline" onClick={() => navigate({ name: "speaking", view: "hub" })}>
            Back to the Speaking Lab
          </Button>
        </div>
      </div>
    );
  }

  // ---------------- Active conversation ----------------
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 gap-2 text-muted-foreground"
          onClick={() => navigate({ name: "speaking", view: "hub" })}
        >
          <ArrowLeft className="size-4" aria-hidden /> Exit
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            {session?.session.engine === "ai" ? "AI partner" : "Offline script partner"}
          </Badge>
          <Badge variant="outline" className="capitalize">{level}</Badge>
        </div>
      </div>

      <h1 className="mt-1 text-xl font-bold sm:text-2xl">
        {scenario.emoji} {scenario.title}
      </h1>

      {/* Thread */}
      <div
        ref={threadRef}
        className="mt-4 max-h-[46vh] space-y-3 overflow-y-auto rounded-xl border bg-card p-4"
        aria-live="polite"
      >
        {turns.map((turn, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-2.5",
              turn.role === "learner" ? "flex-row-reverse" : "",
            )}
          >
            <span
              className={cn(
                "mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full",
                turn.role === "partner"
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary text-foreground",
              )}
              aria-hidden
            >
              {turn.role === "partner" ? (
                <Bot className="size-4" />
              ) : (
                <User className="size-4" />
              )}
            </span>
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                turn.role === "partner"
                  ? "rounded-tl-sm bg-secondary"
                  : "rounded-tr-sm bg-primary text-primary-foreground",
              )}
            >
              {turn.text}
              {turn.role === "partner" ? (
                <button
                  type="button"
                  className="mt-1.5 block text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                  onClick={() =>
                    speech.playing ? speech.stop() : speech.play(turn.text)
                  }
                >
                  <Play className="mr-1 inline size-3" aria-hidden />
                  {speech.playing ? "Stop" : "Listen"}
                </button>
              ) : null}
            </div>
          </div>
        ))}
        {busy ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block size-2 animate-pulse rounded-full bg-primary" aria-hidden />
            {scenario.partner.name} is thinking…
          </p>
        ) : null}
      </div>

      {/* Turn counter + suggested phrases */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
        <span>
          {learnerTurnCount}/{session?.scenario.turnsTarget ?? levelSpec.turnsTarget} of your
          turns
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          onClick={() => setShowPhrases((v) => !v)}
        >
          <Lightbulb className="size-4" aria-hidden />
          {showPhrases ? "Hide phrases" : "Useful phrases"}
        </Button>
      </div>
      {showPhrases ? (
        <ul className="mt-2 flex flex-wrap gap-2">
          {levelSpec.suggestedPhrases.map((phrase, index) => (
            <li
              key={index}
              className="rounded-full border bg-secondary/50 px-3 py-1 text-xs"
            >
              {phrase}
            </li>
          ))}
        </ul>
      ) : null}

      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

      {/* Reply area */}
      {voiceMode ? (
        <div className="mt-4 rounded-xl border bg-card p-4">
          <div className="flex flex-col items-center gap-3">
            {recorder.state === "idle" || recorder.state === "recorded" ? (
              <>
                {recorder.state === "recorded" ? (
                  <div className="flex flex-col items-center gap-2">
                    {recorder.audioUrl ? (
                      <audio controls src={recorder.audioUrl} aria-label="Replay your reply" />
                    ) : null}
                    <Button onClick={submitRecording} disabled={transcribing || busy}>
                      {transcribing
                        ? "Transcribing…"
                        : settings.provider === "browser"
                          ? "Send what I said"
                          : "Transcribe & send"}
                    </Button>
                  </div>
                ) : (
                  <Button
                    size="lg"
                    className="h-12 gap-2 rounded-full px-6"
                    onClick={async () => {
                      if (!settings.consented) {
                        setConsentOpen(true);
                        return;
                      }
                      await recorder.start();
                    }}
                    disabled={busy || transcribing}
                  >
                    <Send className="size-5" aria-hidden /> Speak your reply
                  </Button>
                )}
              </>
            ) : (
              <div className="flex w-full flex-col items-center gap-3">
                <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                  <span className="inline-block size-2.5 animate-pulse rounded-full bg-red-500" aria-hidden />
                  Recording your reply… speak naturally.
                </p>
                {settings.provider === "browser" && recognition.listening ? (
                  <p className="text-sm text-muted-foreground">
                    {recognition.transcript || "Listening…"}
                  </p>
                ) : null}
                <Button onClick={recorder.stop} className="gap-2">
                  Stop &amp; send
                </Button>
              </div>
            )}
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground"
              onClick={() => setVoiceMode(false)}
            >
              <Keyboard className="size-4" aria-hidden /> Type my reply instead
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-xl border bg-card p-4">
          <Textarea
            value={typed}
            onChange={(event) => setTyped(event.target.value)}
            placeholder={`Your reply to ${scenario.partner.name}…`}
            rows={3}
            aria-label="Your typed reply"
            disabled={busy}
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground"
              onClick={() => setVoiceMode(true)}
            >
              Speak instead
            </Button>
            <Button onClick={() => sendTurn(typed)} disabled={busy || typed.trim().length === 0}>
              <Send className="size-4" aria-hidden /> Send
            </Button>
          </div>
        </div>
      )}

      {/* Finish */}
      <div className="mt-4 flex justify-center">
        <Button
          variant="outline"
          className="gap-2"
          onClick={finish}
          disabled={finishing || learnerTurnCount < 2}
        >
          <Flag className="size-4" aria-hidden />
          {finishing ? "Building your report…" : "End conversation & get feedback"}
        </Button>
      </div>
      {learnerTurnCount < 2 ? (
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Say at least two lines before ending, so the coach has something to work with.
        </p>
      ) : null}

      <ConsentDialog
        open={consentOpen}
        onOpenChange={setConsentOpen}
        onConsented={(next) => setSettings({ ...settings, consented: next.consented })}
      />
    </div>
  );
}
