"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, KeyRound, Loader2, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";

export function AuthView({
  mode,
  token,
  navigate,
}: {
  mode: "login" | "register" | "reset";
  token?: string;
  navigate: (route: AppRoute) => void;
}) {
  const setUser = useAppStore((s) => s.setUser);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (mode === "reset") {
      await submitReset();
      return;
    }
    setLoading(true);
    const response =
      mode === "register"
        ? await api.register({ email, name, password })
        : await api.login({ email, password });
    setLoading(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setUser(response.data.user);
    toast.success(
      mode === "register"
        ? `Welcome to TalkSy, ${response.data.user.name}!`
        : `Welcome back, ${response.data.user.name}!`,
    );
    // First-login gate: staff accounts still on a public default password
    // are sent straight to the staff area to choose their own password.
    if (response.data.user.mustChangePassword) {
      toast.info("For security, please choose your own password before continuing.");
      navigate({ name: "admin" });
      return;
    }
    // Students land on their personal learning workspace.
    navigate({ name: "dashboard" });
  };

  const submitReset = async () => {
    setLoading(true);
    const response = await api.resetPassword({ token: token ?? "", newPassword: password });
    setLoading(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success("Password updated. You can now log in with your new password.");
    navigate({ name: "login" });
  };

  const demoLogin = async () => {
    setLoading(true);
    const response = await api.login({
      email: "demo@talksy.app",
      password: "demo1234",
    });
    setLoading(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setUser(response.data.user);
    toast.success("Signed in as the demo learner.");
    navigate({ name: "dashboard" });
  };

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-12 sm:py-16">
      <Card className="relative overflow-hidden shadow-lg">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-blue-400 to-cyan-400"
        />
        <CardHeader className="text-center">
          <span className="mx-auto mb-2 inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-deep text-white shadow-md">
            {mode === "reset" ? (
              <KeyRound className="size-6" aria-hidden />
            ) : (
              <GraduationCap className="size-6" aria-hidden />
            )}
          </span>
          <CardTitle className="text-xl">
            {mode === "register"
              ? "Create your free account"
              : mode === "reset"
                ? "Choose a new password"
                : "Welcome back"}
          </CardTitle>
          <CardDescription>
            {mode === "register"
              ? "Track your progress, save notes and keep your streak alive."
              : mode === "reset"
                ? "Enter your new password to finish the reset."
                : "Log in to continue your English journey."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="flex flex-col gap-4">
            {mode === "register" ? (
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sofia"
                  required
                  minLength={2}
                  autoComplete="name"
                />
              </div>
            ) : null}
            {mode !== "reset" ? (
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            ) : null}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">
                  {mode === "reset" ? "New password" : "Password"}
                </Label>
                {mode === "login" ? (
                  <button
                    type="button"
                    onClick={() => navigate({ name: "forgot" })}
                    className="text-xs text-primary underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </button>
                ) : null}
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "reset" ? "At least 8 characters" : mode === "register" ? "At least 8 characters" : "Your password"}
                required
                minLength={mode === "login" ? undefined : 8}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
              />
            </div>
            <Button type="submit" disabled={loading} className="gap-2">
              {loading ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : mode === "register" ? (
                <UserPlus className="size-4" aria-hidden />
              ) : mode === "reset" ? (
                <KeyRound className="size-4" aria-hidden />
              ) : (
                <LogIn className="size-4" aria-hidden />
              )}
              {mode === "register" ? "Start learning free" : mode === "reset" ? "Set new password" : "Log in"}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>
          {mode === "login" ? (
            <Button variant="outline" className="w-full" onClick={demoLogin} disabled={loading}>
              Try the demo account
            </Button>
          ) : null}

          <p className="mt-5 text-center text-sm text-muted-foreground">
            {mode === "register" ? (
              <>
                Already have an account?{" "}
                <Link href="#/login" className="font-medium text-primary hover:underline">
                  Log in
                </Link>
              </>
            ) : mode === "reset" ? (
              <>
                Back to{" "}
                <Link href="#/login" className="font-medium text-primary hover:underline">
                  log in
                </Link>
              </>
            ) : (
              <>
                New to TalkSy?{" "}
                <Link href="#/register" className="font-medium text-primary hover:underline">
                  Create a free account
                </Link>
              </>
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
