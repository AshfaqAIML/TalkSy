"use client";

import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Plus, ShieldCheck, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import type { TutorConversationDto } from "@/data/tutor/types";
import { ModeIcon } from "./ModePicker";

/**
 * Conversation history + privacy controls. Used in the desktop sidebar and
 * inside the mobile sheet — identical content, no hidden state.
 */
export function ConversationList({
  conversations,
  activeId,
  modeIconOf,
  onOpen,
  onDelete,
  onDeleteAll,
  onNew,
  onPrivacy,
  busy,
}: {
  conversations: TutorConversationDto[];
  activeId: string | null;
  modeIconOf: (mode: string) => string;
  onOpen: (conversation: TutorConversationDto) => void;
  onDelete: (id: string) => void;
  onDeleteAll: () => void;
  onNew: () => void;
  onPrivacy: () => void;
  busy: boolean;
}) {
  return (
    <div className="flex h-full flex-col gap-3">
      <Button onClick={onNew} className="w-full gap-2" variant="outline">
        <Plus className="size-4" aria-hidden /> New conversation
      </Button>

      <div className="min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1" role="list" aria-label="Tutor conversations">
        {conversations.length === 0 ? (
          <p className="px-2 py-6 text-center text-xs text-muted-foreground">
            No conversations yet. Pick a tutor to start your first one.
          </p>
        ) : null}
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            role="listitem"
            className={cn(
              "group flex items-center gap-2 rounded-xl border p-2.5 transition-colors",
              conversation.id === activeId
                ? "border-primary/50 bg-primary/5"
                : "border-transparent hover:bg-secondary",
            )}
          >
            <button
              type="button"
              onClick={() => onOpen(conversation)}
              className="flex min-w-0 flex-1 items-center gap-2.5 text-left"
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ModeIcon icon={modeIconOf(conversation.mode)} className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium leading-tight">
                  {conversation.title || conversation.modeLabel}
                </span>
                <span className="block truncate text-[11px] text-muted-foreground">
                  {conversation.modeLabel} ·{" "}
                  {formatDistanceToNow(new Date(conversation.updatedAt), {
                    addSuffix: true,
                  })}
                </span>
              </span>
            </button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="size-7 shrink-0 p-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100 focus-visible:opacity-100"
                  aria-label="Delete conversation"
                >
                  <Trash2 className="size-3.5" aria-hidden />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this conversation?</AlertDialogTitle>
                  <AlertDialogDescription>
                    “{conversation.title || conversation.modeLabel}” and all its
                    messages will be permanently removed. This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep it</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={busy}
                    onClick={() => onDelete(conversation.id)}
                  >
                    Yes, delete it
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>

      <div className="space-y-2 rounded-xl border bg-secondary/40 p-3">
        <p className="flex items-center gap-1.5 text-xs font-semibold">
          <ShieldCheck className="size-3.5 text-primary" aria-hidden /> Your
          privacy
        </p>
        <p className="text-[11px] leading-snug text-muted-foreground">
          Conversations are stored only for you and never shared with other
          learners. Delete them at any time.
        </p>
        <div className="flex flex-col gap-1.5">
          <Button variant="ghost" size="sm" className="justify-start gap-2 px-2 text-xs" onClick={onPrivacy}>
            <MessageSquare className="size-3.5" aria-hidden /> What the tutor sees
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start gap-2 px-2 text-xs text-destructive hover:text-destructive"
                disabled={busy || conversations.length === 0}
              >
                <Trash2 className="size-3.5" aria-hidden /> Delete all
                conversations
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete all tutor conversations?</AlertDialogTitle>
                <AlertDialogDescription>
                  Every conversation and message will be permanently removed.
                  This cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep them</AlertDialogCancel>
                <AlertDialogAction disabled={busy} onClick={onDeleteAll}>
                  Yes, delete everything
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
