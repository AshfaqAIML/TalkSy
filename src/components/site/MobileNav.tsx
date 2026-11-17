"use client";

/**
 * The mobile navigation sheet (PROMPT 31).
 *
 * Compact, touch-first: one accordion per navigation category (44px rows,
 * icon + label + difficulty badge), a search entry point, auth CTAs and
 * quick links. Dismissal is explicit and reliable: the sheet is controlled
 * and closes on any link tap, on route change, on Escape and on the
 * overlay/close button (Radix).
 */

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NAV_CATEGORIES } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { CATEGORY_ICONS, NAV_ITEM_ICONS, SKILL_ICONS, SKILL_TINTS } from "./nav-icons";
import { TalkSyLogo } from "./SiteHeader";

export function MobileNav({
  open,
  onOpenChange,
  onOpenSearch,
  routeName,
  signedIn,
  onNavigate,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenSearch: () => void;
  routeName: string;
  signedIn: boolean;
  onNavigate: (route: { name: "login" } | { name: "register" }) => void;
}) {
  // Dismiss on route change: navigating away must close the menu.
  useEffect(() => {
    onOpenChange(false);
  }, [routeName, onOpenChange]);

  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-[19rem] flex-col gap-0 overflow-y-auto p-0"
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <SheetTitle>
            <TalkSyLogo />
          </SheetTitle>
        </div>

        {/* Search entry point */}
        <div className="border-b p-3">
          <button
            type="button"
            onClick={() => {
              close();
              onOpenSearch();
            }}
            className="flex h-11 w-full items-center gap-2.5 rounded-lg border bg-muted/40 px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary"
          >
            <Search className="size-4 shrink-0" aria-hidden />
            <span className="truncate">Search lessons, grammar, words…</span>
          </button>
        </div>

        <nav className="flex-1 px-3 py-3" aria-label="Mobile">
          <Accordion type="single" collapsible defaultValue="learn">
            {NAV_CATEGORIES.map((category) => {
              const CategoryIcon = CATEGORY_ICONS[category.id];
              const active = category.items.some((item) =>
                item.activeWhen.includes(routeName),
              );
              return (
                <AccordionItem key={category.id} value={category.id} className="border-b-0">
                  <AccordionTrigger
                    className={cn(
                      "min-h-11 rounded-lg px-2 py-2 text-sm font-semibold hover:no-underline hover:bg-secondary [&[data-state=open]]:bg-secondary",
                      active && "text-primary",
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <CategoryIcon className="size-4" aria-hidden />
                      {category.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col">
                      {category.items.map((item) => {
                        const Icon = NAV_ITEM_ICONS[item.icon ?? ""] ?? SKILL_ICONS[item.skill];
                        return (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            onClick={close}
                            aria-current={item.activeWhen.includes(routeName) ? "page" : undefined}
                            className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-secondary"
                          >
                            <span
                              className={cn(
                                "inline-flex size-8 shrink-0 items-center justify-center rounded-lg",
                                SKILL_TINTS[item.skill],
                              )}
                            >
                              <Icon className="size-4" aria-hidden />
                            </span>
                            <span className="flex min-w-0 flex-col gap-0.5">
                              <span className="flex flex-wrap items-center gap-1.5">
                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    item.activeWhen.includes(routeName) && "text-primary",
                                  )}
                                >
                                  {item.label}
                                </span>
                                <Badge
                                  variant="secondary"
                                  className="shrink-0 px-1.5 py-0 text-[10px] font-semibold uppercase"
                                >
                                  {item.difficulty}
                                </Badge>
                              </span>
                              <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Quick links */}
          <p className="px-2 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Quick links
          </p>
          <div className="flex flex-col">
            {[
              { label: "My Dashboard", href: "#/dashboard" },
              { label: "My Progress", href: "#/progress" },
              { label: "Exam Academy", href: "#/exams" },
              { label: "Learning Tips", href: "#/tips" },
              { label: "About", href: "#/about" },
              { label: "Contact", href: "#/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <ChevronRight className="size-4 text-muted-foreground" aria-hidden />
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {!signedIn ? (
          <div className="border-t p-3">
            <div className="flex flex-col gap-2">
              <Button onClick={() => { close(); onNavigate({ name: "register" }); }} className="gap-1.5">
                Start Learning <ChevronRight className="size-3.5" aria-hidden />
              </Button>
              <Button variant="outline" onClick={() => { close(); onNavigate({ name: "login" }); }}>
                Sign in
              </Button>
            </div>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
