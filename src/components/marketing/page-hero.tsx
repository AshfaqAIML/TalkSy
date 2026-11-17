import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";

/**
 * Editorial page header for the public subpages: breadcrumb, overline,
 * display title and lede — the rhythm every inner page shares.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumb,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Current page crumb; the TalkSy home crumb is prepended automatically. */
  breadcrumb: string;
  className?: string;
}) {
  return (
    <header className={cn("border-b bg-paper-dots", className)}>
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-caption text-ink-500">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-ink-700 dark:text-ink-600">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          <p className="overline-label mb-2 text-brand-700 dark:text-brand-600">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-display-lg leading-tight tracking-tight text-ink-900 text-balance sm:text-display-xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-4 max-w-2xl text-body-lg text-ink-600 dark:text-ink-500">{lede}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
