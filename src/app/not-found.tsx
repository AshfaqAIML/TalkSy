import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark, Wordmark } from "@/components/ds/brand";

/**
 * Root 404 — works for every unmatched path on the site.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex select-none items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4"
            aria-label="TalkSy home"
          >
            <LogoMark size={32} />
            <Wordmark className="text-[1.35rem] leading-none tracking-tight" />
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <Compass className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
          <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">404 — off the path</p>
          <h1 className="mb-3 font-display text-heading-lg text-ink-900">
            This page isn&apos;t on the path
          </h1>
          <p className="mb-8 text-body text-ink-500">
            The address you followed doesn&apos;t exist — but your English journey is still right
            here.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/">
                Back to home <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/courses">Browse courses</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
