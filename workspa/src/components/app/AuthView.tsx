"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Loader2, LogIn, UserPlus } from "lucide-react";
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
  navigate,
}: {
  mode: "login" | "register";
  navigate: (route: AppRoute) => void;
}) {
  const setUser = useAppStore((s) => s.setUser);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
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
    navigate({ name: "library" });
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
    navigate({ name: "library" });
  };

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-12 sm:py-16">
      <Card>
        <CardHeader className="text-center">
          <span className="mx-auto mb-2 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
            <GraduationCap className="size-6 text-primary" aria-hidden />
          </span>
          <CardTitle className="text-xl">
            {mode === "register" ? "Create your free account" : "Welcome back"}
          </CardTitle>
          <CardDescription>
            {mode === "register"
              ? "Track your progress, save notes and keep your streak alive."
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
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "register" ? "At least 8 characters" : "Your password"}
                required
                minLength={mode === "register" ? 8 : undefined}
                autoComplete={mode === "register" ? "new-password" : "current-password"}
              />
            </div>
            <Button type="submit" disabled={loading} className="gap-2">
              {loading ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : mode === "register" ? (
                <UserPlus className="size-4" aria-hidden />
              ) : (
                <LogIn className="size-4" aria-hidden />
              )}
              {mode === "register" ? "Start learning free" : "Log in"}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>
          <Button variant="outline" className="w-full" onClick={demoLogin} disabled={loading}>
            Try the demo account
          </Button>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            {mode === "register" ? (
              <>
                Already have an account?{" "}
                <Link href="#/login" className="font-medium text-primary hover:underline">
                  Log in
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
