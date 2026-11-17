"use client";

/**
 * Public sign-in / registration form (the /login and /register pages).
 * Talks to the same session API as the app (/api/auth/login|register),
 * validates with the same rules (react-hook-form + zod, mirrored
 * server-side), then hands off to the app at /app.
 */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, Lock, UserRound, AlertCircle, ArrowRight } from "lucide-react";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(1, "Enter your password."),
});

const registerSchema = z.object({
  name: z.string().trim().min(2, "Your name needs at least 2 characters.").max(60, "That name is too long."),
  email: z.string().trim().email("Enter a valid email address."),
  password: z
    .string()
    .min(8, "Use at least 8 characters.")
    .max(128, "That password is too long."),
});

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

/** Response shape of /api/auth/*: { user } on success, { error } on failure. */
interface ApiEnvelope {
  user?: { name: string };
  error?: string;
}

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const isLogin = mode === "login";
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  // Already signed in? Straight to the app.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        const json = (await res.json()) as ApiEnvelope;
        if (!cancelled && json.user) {
          router.replace("/app");
          return;
        }
      } catch {
        /* offline — just show the form */
      }
      if (!cancelled) setChecking(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  const form = useForm<LoginForm & RegisterForm>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema) as never,
    defaultValues: { name: "", email: "", password: "" },
  });

  async function onSubmit(values: LoginForm & RegisterForm) {
    setServerError(null);
    try {
      const res = await fetch(isLogin ? "/api/auth/login" : "/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isLogin ? { email: values.email, password: values.password } : values
        ),
      });
      const json = (await res.json()) as ApiEnvelope;
      if (!res.ok || !json.user) {
        setServerError(json.error ?? (isLogin ? "Sign-in failed. Please try again." : "Account creation failed. Please try again."));
        return;
      }
      // Full navigation so the app boots fresh with the new session cookie.
      // New sessions land on the guided welcome; sign-ins go to the app.
      window.location.assign(isLogin ? "/app#/dashboard" : "/app#/welcome");
    } catch {
      setServerError("Network error — please check your connection and try again.");
    }
  }

  if (checking) {
    return (
      <div className="flex items-center justify-center py-16" role="status" aria-live="polite">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
      </div>
    );
  }

  const busy = form.formState.isSubmitting;

  return (
    <div className="w-full max-w-md">
      <h1 className="font-display text-heading-lg text-ink-900">
        {isLogin ? "Welcome back" : "Create your free account"}
      </h1>
      <p className="mb-6 mt-2 text-body text-ink-500">
        {isLogin
          ? "Sign in to continue your path — your streak is waiting."
          : "Start from your first English word. Free while in public preview, no credit card."}
      </p>

      <div className="mb-6 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1" role="tablist">
        <Link
          href="/login"
          role="tab"
          aria-selected={isLogin}
          className={`rounded-md py-2 text-center text-sm font-medium transition-colors ${
            isLogin ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Sign in
        </Link>
        <Link
          href="/register"
          role="tab"
          aria-selected={!isLogin}
          className={`rounded-md py-2 text-center text-sm font-medium transition-colors ${
            !isLogin ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Create account
        </Link>
      </div>

      {serverError && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{serverError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {!isLogin && (
          <Field
            label="Name"
            icon={<UserRound className="h-4 w-4" />}
            error={form.formState.errors.name?.message}
            {...form.register("name")}
            type="text"
            autoComplete="name"
            placeholder="Your name"
          />
        )}
        <Field
          label="Email"
          icon={<Mail className="h-4 w-4" />}
          error={form.formState.errors.email?.message}
          {...form.register("email")}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
        <Field
          label={isLogin ? "Password" : "Password (8+ characters)"}
          icon={<Lock className="h-4 w-4" />}
          error={form.formState.errors.password?.message}
          {...form.register("password")}
          type="password"
          autoComplete={isLogin ? "current-password" : "new-password"}
          placeholder={isLogin ? "Your password" : "Choose a strong password"}
        />
        {isLogin && (
          <div className="flex justify-end">
            <a
              href="#/forgot"
              className="text-caption text-primary underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        )}
        <Button type="submit" className="w-full gap-1.5" size="lg" disabled={busy}>
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {isLogin ? "Sign in" : "Create account"}
          {!busy && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </Button>
      </form>

      <p className="mt-6 text-center text-caption text-muted-foreground">
        Your progress is stored securely. Passwords are hashed and never stored in plain text.
      </p>
    </div>
  );
}

function Field({
  label,
  icon,
  error,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={inputProps.id ?? inputProps.name}>{label}</Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        <Input className="pl-9" aria-invalid={Boolean(error)} {...inputProps} />
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
