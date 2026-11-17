import type { Metadata } from "next";
import { AuthForm } from "@/components/marketing/auth-form";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Sign in",
    description: "Sign in to your TalkSy account and continue your English learning path.",
    path: "/login",
  }),
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
