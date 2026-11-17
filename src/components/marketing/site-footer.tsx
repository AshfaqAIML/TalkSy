import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/ds/brand";
import { footerNav, siteConfig } from "@/lib/site";
import { siteStats } from "@/lib/marketing/stats";

/**
 * Public-site footer. Sticky-bottom behaviour comes from the marketing
 * layout (min-h-screen flex column, footer at the end with mt-auto).
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <span className="inline-flex select-none items-center gap-2.5">
              <LogoMark size={30} />
              <Wordmark className="text-[1.3rem] leading-none tracking-tight" />
            </span>
            <p className="text-body-sm text-ink-500">{siteConfig.tagline}</p>
            <p className="text-caption text-ink-500">
              {siteStats.lessons} lessons · {siteStats.exercises} exercises · {siteStats.words} words
              — Pre-A1 to A2 available today, B1–C1 in development.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <nav aria-label="Learn">
              <h3 className="mb-3 font-semibold">Learn</h3>
              <ul className="space-y-2 text-muted-foreground">
                {footerNav.learn.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-foreground" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="TalkSy">
              <h3 className="mb-3 font-semibold">TalkSy</h3>
              <ul className="space-y-2 text-muted-foreground">
                {footerNav.company.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-foreground" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Account">
              <h3 className="mb-3 font-semibold">Account</h3>
              <ul className="space-y-2 text-muted-foreground">
                {footerNav.account.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-foreground" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-caption text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} TalkSy. All educational content is original material,
          labelled honestly while it moves through review.
        </p>
      </div>
    </footer>
  );
}
