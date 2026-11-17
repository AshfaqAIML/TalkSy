import type { Metadata } from "next";
import { AuthForm } from "@/components/marketing/auth-form";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Create your free account",
  description:
    "Start learning English free with TalkSy — from your first word to confident communication. No credit card required.",
  path: "/register",
  ogTitle: "Create your free TalkSy account",
});

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
