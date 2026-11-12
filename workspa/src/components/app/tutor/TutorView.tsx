"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GraduationCap, History, Info, Sparkles, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { api, tutorSendMessage } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type {
  SafeTutorMode,
  TutorConversationDto,
  TutorMessageDto,
  TutorUsageDto,
} from "@/data/tutor/types";
import { ChatBubble } from "./ChatBubble";
import { Composer } from "./Composer";
import { ModePicker, ModeIcon } from "./ModePicker";
import { ConversationList } from "./ConversationList";

const STREAM_ID = "local-stream";

/**
 * AI Tutor — nine teaching modes, streaming chat, conversation history and
 * privacy controls. Route-driven mounting (page.tsx keys this view by the
 * conversation id) keeps state simple: each mount loads exactly what the
 * hash asks for.
 */
export function TutorView({
  navigate,
  routeId,
  lessonRef,
}: {
  navigate: (route: AppRoute) => void;
  routeId?: string;
  lessonRef?: string;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);

  const [modes, setModes] = useState<SafeTutorMode[] | null>(null);
  const [usage, setUsage] = useState<TutorUsageDto | null>(null);
  const [maxChars, setMaxChars] = useState(2000);
  const [conversations, setConversations] = useState<TutorConversationDto[]>([]);
  const [active, setActive] = useState<TutorConversationDto | null>(null);
  const [messages, setMessages] = useState<TutorMessageDto[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [streamError, setStreamError] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [privacyText, setPrivacyText] = useState<string | null>(null);
  const [privacyLoading, setPrivacyLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initial load: modes + usage + history (+ the routed conversation).
  useEffect(() => {
    if (!userLoaded || !user) return;
    let cancelled = false;
    const load = async () => {
      const [modesRes, convosRes] = await Promise.all([
        api.tutorModes(),
        api.tutorConversations(),
      ]);
      if (cancelled) return;
      if (modesRes.ok) {
        setModes(modesRes.data.modes);
        setUsage(modesRes.data.usage);
        setMaxChars(modesRes.data.limits.maxMessageChars);
      } else {
        setStreamError(modesRes.error);
      }
      if (convosRes.ok) setConversations(convosRes.data.conversations);

      if (routeId) {
        const convoRes = await api.tutorGetConversation(routeId);
        if (cancelled) return;
        if (convoRes.ok) {
          setActive(convoRes.data.conversation);
          setMessages(convoRes.data.messages);
        } else {
          setStreamError(convoRes.error);
          navigate({ name: "tutor" });
        }
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user, userLoaded, routeId, navigate]);

  // Keep the newest message in view while streaming.
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  const activeMode = useMemo(
    () => modes?.find((mode) => mode.id === active?.mode) ?? null,
    [modes, active],
  );
  const lessonTitle = active?.lessonTitle;
  const showStarters =
    active !== null && activeMode !== null && messages.every((m) => m.role !== "learner");

  const modeIconOf = (modeId: string): string =>
    modes?.find((mode) => mode.id === modeId)?.icon ?? "help-circle";

  const startConversation = async (mode: SafeTutorMode) => {
    setBusy(true);
    const res = await api.tutorCreateConversation({
      mode: mode.id,
      lessonRef: lessonRef ?? undefined,
    });
    setBusy(false);
    if (!res.ok) {
      setStreamError(res.error);
      return;
    }
    navigate({ name: "tutor", id: res.data.conversation.id });
  };

  const send = async () => {
    const text = draft.trim();
    if (!active || !text || streaming || text.length > maxChars) return;
    setDraft("");
    setStreamError(null);

    const learnerId = `local-learner-${Date.now()}`;
    const nowIso = new Date().toISOString();
    setMessages((prev) => [
      ...prev,
      { id: learnerId, role: "learner", content: text, greeting: false, createdAt: nowIso },
      { id: STREAM_ID, role: "tutor", content: "", greeting: false, createdAt: nowIso },
    ]);
    setStreaming(true);

    const ids: { learner: string | null; tutor: string | null } = {
      learner: null,
      tutor: null,
    };
    let acc = "";
    let doneUsage: TutorUsageDto | null = null;

    const result = await tutorSendMessage(active.id, text, {
      onMeta: (meta) => {
        ids.learner = meta.learnerMessageId;
      },
      onDelta: (chunk) => {
        acc += chunk;
        setMessages((prev) =>
          prev.map((m) => (m.id === STREAM_ID ? { ...m, content: acc } : m)),
        );
      },
      onDone: (done) => {
        ids.tutor = done.tutorMessageId;
        doneUsage = {
          day: new Date().toISOString().slice(0, 10),
          requests: done.requestsUsedToday,
          limit: done.dailyLimit,
        };
      },
    });

    setStreaming(false);

    if (!result.ok) {
      // The server already removed the failed learner message — restore the
      // draft so nothing the learner wrote is lost.
      setMessages((prev) => prev.filter((m) => m.id !== STREAM_ID && m.id !== learnerId));
      setDraft(text);
      setStreamError(result.error ?? "The tutor could not answer.");
      return;
    }

    setMessages((prev) =>
      prev.map((m) => {
        if (m.id === learnerId && ids.learner) return { ...m, id: ids.learner };
        if (m.id === STREAM_ID && ids.tutor) return { ...m, id: ids.tutor };
        return m;
      }),
    );
    if (doneUsage) setUsage(doneUsage);

    // Refresh history (title + ordering).
    const convosRes = await api.tutorConversations();
    if (convosRes.ok) {
      setConversations(convosRes.data.conversations);
      setActive((prev) =>
        prev ? convosRes.data.conversations.find((c) => c.id === prev.id) ?? prev : prev,
      );
    }
  };

  const toggleContext = async (value: boolean) => {
    if (!active) return;
    const previous = active;
    setActive({ ...active, includeContext: value });
    const res = await api.tutorSetContextFlag(active.id, value);
    if (!res.ok) {
      setActive(previous);
      toast.error(res.error);
    }
  };

  const removeConversation = async (id: string) => {
    setBusy(true);
    const res = await api.tutorDeleteConversation(id);
    setBusy(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (active?.id === id) navigate({ name: "tutor" });
  };

  const deleteActive = () => {
    if (active) void removeConversation(active.id);
  };

  const removeAllConversations = async () => {
    setBusy(true);
    const res = await api.tutorDeleteAllConversations();
    setBusy(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    setConversations([]);
    toast.success(`Deleted ${res.data.deleted} conversation${res.data.deleted === 1 ? "" : "s"}.`);
    if (active) navigate({ name: "tutor" });
  };

  const openPrivacy = async () => {
    setPrivacyOpen(true);
    setPrivacyLoading(true);
    const res = await api.tutorContextPreview(active?.mode ?? "grammar", active?.lessonRef ?? undefined);
    setPrivacyLoading(false);
    setPrivacyText(res.ok ? res.data.text : res.error);
  };

  // ---------------------------------------------------------------------
  // Gates
  // ---------------------------------------------------------------------

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <GraduationCap className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-4 text-2xl font-bold">Your AI Tutor</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Nine patient English teachers — one for grammar, one for vocabulary,
          one for conversations and more. Log in to start chatting.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => navigate({ name: "login" })}>Log in</Button>
          <Button variant="outline" onClick={() => navigate({ name: "register" })}>
            Start free
          </Button>
        </div>
      </div>
    );
  }

  if (!modes) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Skeleton className="h-9 w-56" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton key={index} className="h-28" />
          ))}
        </div>
      </div>
    );
  }

  const sidebar = (
    <ConversationList
      conversations={conversations}
      activeId={active?.id ?? null}
      modeIconOf={modeIconOf}
      onOpen={(conversation) => navigate({ name: "tutor", id: conversation.id })}
      onDelete={removeConversation}
      onDeleteAll={removeAllConversations}
      onNew={() => navigate({ name: "tutor" })}
      onPrivacy={openPrivacy}
      busy={busy}
    />
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      {/* Section header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
            <Sparkles className="size-6 text-primary" aria-hidden /> AI Tutor
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A patient, level-aware English teacher — not a chatbot.
          </p>
        </div>
        {usage ? (
          <span className="rounded-full border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            {`${usage.requests}/${usage.limit} tutor messages today`}
          </span>
        ) : null}
      </div>

      <div className="mt-6 grid items-start gap-5 lg:grid-cols-[290px_1fr]">
        {/* Desktop sidebar */}
        <Card className="hidden max-h-[78vh] lg:flex">
          <CardContent className="h-full p-3">{sidebar}</CardContent>
        </Card>

        {/* Main column */}
        {active === null ? (
          <div className="py-4">
            <ModePicker
              modes={modes}
              lessonTitle={lessonRef ? lessonTitleFromRef(lessonRef, active) : null}
              onPick={startConversation}
              busy={busy}
            />
          </div>
        ) : (
          <Card className="flex max-h-[78vh] flex-col overflow-hidden">
            {/* Chat header */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b bg-secondary/30 px-4 py-3">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ModeIcon icon={activeMode?.icon ?? "help-circle"} className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{active.modeLabel}</p>
                {lessonTitle ? (
                  <p className="truncate text-xs text-muted-foreground">Lesson: {lessonTitle}</p>
                ) : null}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <label
                  htmlFor="tutor-context-switch"
                  className="flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground"
                >
                  <Switch
                    id="tutor-context-switch"
                    aria-label="Share my learning context"
                    checked={active.includeContext}
                    onCheckedChange={toggleContext}
                    disabled={streaming}
                  />
                  Share my learning context
                </label>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5 text-muted-foreground hover:text-destructive"
                      disabled={busy || streaming}
                      aria-label="Delete this conversation"
                    >
                      <Trash2 className="size-4" aria-hidden />
                      <span className="hidden sm:inline">Delete</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete this conversation?</AlertDialogTitle>
                      <AlertDialogDescription>
                        The conversation and all its messages will be permanently
                        removed. This cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep it</AlertDialogCancel>
                      <AlertDialogAction disabled={busy} onClick={deleteActive}>
                        Yes, delete it
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
              aria-label="Tutor conversation"
            >
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message}
                  modeLabel={active.modeLabel}
                  streaming={streaming && message.id === STREAM_ID}
                />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Starters */}
            {showStarters && activeMode ? (
              <div className="flex flex-wrap gap-2 border-t bg-secondary/20 px-4 py-2.5">
                {activeMode.starters.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => setDraft(starter)}
                    className="rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            ) : null}

            {streamError ? (
              <p role="alert" className="border-t bg-destructive/10 px-4 py-2 text-xs text-destructive">
                {streamError}
              </p>
            ) : null}

            <Composer
              value={draft}
              onChange={setDraft}
              onSend={send}
              disabled={streaming}
              streaming={streaming}
              maxChars={maxChars}
            />
          </Card>
        )}
      </div>

      {/* Mobile history */}
      <div className="mt-4 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full gap-2">
              <History className="size-4" aria-hidden /> Conversation history (
              {conversations.length})
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
            <SheetTitle className="px-1">Conversations</SheetTitle>
            <div className="mt-4 px-1">{sidebar}</div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Privacy: exactly what the tutor sees */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[70vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>What the tutor sees</DialogTitle>
            <DialogDescription>
              The exact learning context sent with your messages in this mode
              (level, current lesson, recent mistakes, vocabulary, goals,
              assessments). Turn it off any time with the switch in a
              conversation. Only your own record is ever used.
            </DialogDescription>
          </DialogHeader>
          <pre className="whitespace-pre-wrap rounded-lg border bg-secondary/30 p-3 text-xs leading-relaxed">
            {privacyLoading ? "Loading…" : privacyText ?? ""}
          </pre>
          <p className="flex items-start gap-2 text-[11px] text-muted-foreground">
            <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            AI replies are teaching suggestions, not verified facts. The tutor
            is instructed to say when it is unsure.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/**
 * For the mode picker we only have the raw lessonRef (no conversation yet);
 * the banner text comes from the ref itself. The conversation DTO carries the
 * resolved title once created.
 */
function lessonTitleFromRef(ref: string, active: TutorConversationDto | null): string | null {
  if (active) return active.lessonTitle;
  const separator = ref.indexOf(":");
  const kind = separator === -1 ? ref : ref.slice(0, separator);
  const labels: Record<string, string> = {
    lesson: "your lesson",
    reading: "your reading text",
    listening: "your listening activity",
    speaking: "your speaking activity",
    writing: "your writing assignment",
  };
  return labels[kind] ?? "your lesson";
}
