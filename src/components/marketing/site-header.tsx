"use client";

/**
 * Public-site header: sticky, blurred, auth-aware. Uses the same brand
 * lockup, spacing and theme toggle as the app so the site and the product
 * feel like one system. Signed-in visitors see "Open app" instead of the
 * sign-up pair (one lightweight /api/auth/me check, cached by TanStack).
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useQuery } from "@tanstack/react-query";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark, Wordmark } from "@/components/ds/brand";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["public-me"],
    queryFn: async () => {
      const res = await fetch("/api/auth/me");
      // /api/auth/me returns { user } directly (no envelope).
      const json = (await res.json()) as { user: { name: string } | null };
      return json.user ?? null;
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
  const user = data;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4"
            aria-label="TalkSy home"
          >
            <span className="inline-flex select-none items-center gap-2.5">
              <LogoMark size={32} />
              <Wordmark className="text-[1.35rem] leading-none tracking-tight" />
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button>

          {user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Button asChild>
                <Link href="/app">Open app</Link>
              </Button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Start free</Link>
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Contact
            </Link>
            <div className="mt-2 flex gap-2">
              {user ? (
                <Button className="flex-1" asChild>
                  <Link href="/app">Open app</Link>
                </Button>
              ) : (
                <>
                  <Button className="flex-1" variant="outline" asChild>
                    <Link href="/login">Sign in</Link>
                  </Button>
                  <Button className="flex-1" asChild>
                    <Link href="/register">Start free</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
