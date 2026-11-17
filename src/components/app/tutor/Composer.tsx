"use client";

import { type KeyboardEvent } from "react";
import { CornerDownLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Composer({
  value,
  onChange,
  onSend,
  disabled,
  streaming,
  maxChars,
}: {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
  streaming: boolean;
  maxChars: number;
}) {
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!disabled) onSend();
    }
  };

  const over = value.length > maxChars;

  return (
    <div className="border-t bg-card/95 p-3 sm:p-4">
      <div className="flex items-end gap-2">
        <label htmlFor="tutor-message" className="sr-only">
          Message
        </label>
        <textarea
          id="tutor-message"
          name="tutor-message"
          aria-label="Message"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          disabled={disabled}
          placeholder={
            streaming ? "The tutor is writing…" : "Write to your tutor… (Enter to send)"
          }
          className="min-h-[52px] max-h-40 flex-1 resize-none rounded-xl border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
        />
        <Button
          onClick={onSend}
          disabled={disabled || value.trim().length === 0 || over}
          className="gap-1.5"
          aria-label="Send message"
        >
          <Send className="size-4" aria-hidden />
          <span className="hidden sm:inline">Send</span>
        </Button>
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <CornerDownLeft className="size-3" aria-hidden /> Send · Shift+Enter for a new line
        </span>
        <span className={cn(over && "font-semibold text-destructive")}>
          {value.length}/{maxChars}
        </span>
      </div>
    </div>
  );
}
