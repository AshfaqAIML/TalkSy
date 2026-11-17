"use client";

/**
 * Public contact form → POST /api/contact (stored in ContactMessage).
 * Client-side validation mirrors the server's zod rules; server errors
 * surface inline.
 */

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters).").max(80),
  email: z.string().trim().email("Please enter a valid email address."),
  topic: z.enum(["general", "bug", "content", "partnership", "other"]),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters so we can help properly.")
    .max(4000, "That message is too long (4000 characters max)."),
});

type ContactForm = z.infer<typeof contactSchema>;

const topics: { value: ContactForm["topic"]; label: string }[] = [
  { value: "general", label: "General question" },
  { value: "bug", label: "Something isn't working" },
  { value: "content", label: "Feedback on lesson content" },
  { value: "partnership", label: "Partnership / classrooms" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", topic: "general", message: "" },
  });

  async function onSubmit(values: ContactForm) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setServerError(json.error ?? "Sending failed — please try again in a moment.");
        return;
      }
      setSent(true);
    } catch {
      setServerError("Network error — please check your connection and try again.");
    }
  }

  if (sent) {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-grove-50 p-10 text-center dark:bg-grove-600/10"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-grove-600 text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="font-display text-heading-md text-ink-900">Message received</h2>
        <p className="max-w-sm text-body-sm leading-relaxed text-ink-500">
          Thank you — your message is stored and will be read by the people building TalkSy. We
          reply to the email address you provided.
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  const busy = form.formState.isSubmitting;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {serverError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{serverError}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(form.formState.errors.name)}
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(form.formState.errors.email)}
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-topic">What is this about?</Label>
        <Controller
          control={form.control}
          name="topic"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="contact-topic" className="w-full">
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message">Your message</Label>
        <Textarea
          id="contact-message"
          rows={6}
          placeholder="Tell us what's on your mind — where you are in your learning, what you need, or what caught your eye."
          aria-invalid={Boolean(form.formState.errors.message)}
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="gap-2" disabled={busy}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {busy ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
