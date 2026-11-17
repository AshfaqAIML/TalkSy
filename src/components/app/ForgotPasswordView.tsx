"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, MailQuestion } from "lucide-react";
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
import type { AppRoute } from "@/hooks/use-hash-route";

/**
 * S2 — request a password reset link. The API answers identically whether
 * or not the account exists (anti-enumeration); the link itself travels
 * through the server log in this deployment (see docs/DEPLOYMENT.md).
 */
export function ForgotPasswordView({
  navigate: _navigate,
}: {
  navigate: (route: AppRoute) => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await api.requestPasswordReset({ email });
    setLoading(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setMessage(response.data.message);
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
            <MailQuestion className="size-6" aria-hidden />
          </span>
          <CardTitle className="text-xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter your email and we will create a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {message ? (
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed" role="status">
                {message}
              </p>
              <p className="text-sm text-muted-foreground">
                The link stays valid for 30 minutes and can be used only once.
              </p>
              <Link
                href="#/login"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden /> Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
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
              <Button type="submit" disabled={loading} className="gap-2">
                {loading ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : (
                  <MailQuestion className="size-4" aria-hidden />
                )}
                Create reset link
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                <Link href="#/login" className="font-medium text-primary hover:underline">
                  Back to login
                </Link>
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
