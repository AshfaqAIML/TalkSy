import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { LogoMark, Wordmark } from "@/components/ds/brand";
import { siteStats } from "@/lib/marketing/stats";

/**
 * Auth pages (sign in / create account): a focused split layout — brand
 * panel with real product facts on the left, the form on the right.
 */
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#062b28] p-10 text-[#e8fbf7] lg:flex">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(125,210,197,0.25) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <Link
          href="/"
          className="relative inline-flex select-none items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-4"
          aria-label="TalkSy home"
        >
          <LogoMark size={34} />
          <Wordmark className="text-[1.4rem] leading-none tracking-tight text-[#e8fbf7]" />
        </Link>

        <div className="relative max-w-md">
          <p className="overline-label mb-3 text-[#7dd2c5]">From your first English word</p>
          <p className="font-display text-display-lg leading-tight text-[#e8fbf7]">
            …to confident communication.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              `${siteStats.lessons} structured lessons from the alphabet to everyday conversation`,
              "Listening, speaking, reading and writing in every lesson",
              "Progress computed on the server from your real answers",
            ].map((point) => (
              <li key={point} className="flex gap-3 text-body-sm leading-relaxed text-[#d9f2ee]/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7dd2c5]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-caption text-[#7dd2c5]/80">
          Free while in public preview · Beginner path free forever
        </p>
      </div>

      {/* Form panel */}
      <div className="flex flex-col bg-background">
        <div className="flex items-center justify-between p-4 sm:p-6 lg:justify-end">
          <Link
            href="/"
            className="inline-flex select-none items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 lg:hidden"
            aria-label="TalkSy home"
          >
            <LogoMark size={30} />
            <Wordmark className="text-[1.25rem] leading-none tracking-tight" />
          </Link>
          <Link
            href="/"
            className="text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to talksy.app
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-4 pb-16 sm:px-6">{children}</div>
      </div>
    </div>
  );
}
