"use client";

/**
 * The desktop mega menu system (PROMPT 31).
 *
 * Every top-level category opens a rich menu: a tagline, the category's
 * destinations with difficulty labels and colour-coded skill icons, a
 * featured rail (live catalogue data for Courses) and quick links. Built on
 * Radix DropdownMenu for full keyboard support: arrow keys, Home/End,
 * typeahead and Escape; menus close automatically on hash navigation
 * (remount keyed by route name).
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { NavCategory, NavDestination, NavFeatured } from "@/lib/navigation";
import { activeCategoryId } from "@/lib/navigation";
import { NAV_ITEM_ICONS, SKILL_ICONS, SKILL_TINTS } from "./nav-icons";

/** One destination row inside a mega menu. */
function MegaMenuItem({ item, active }: { item: NavDestination; active: boolean }) {
  const Icon = NAV_ITEM_ICONS[item.icon ?? ""] ?? SKILL_ICONS[item.skill];
  return (
    <DropdownMenuItem asChild>
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors duration-150"
      >
        <span
          className={cn(
            "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg",
            SKILL_TINTS[item.skill],
          )}
        >
          <Icon className="size-4" aria-hidden />
        </span>
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="flex flex-wrap items-center gap-1.5">
            <span
              className={cn(
                "text-sm font-medium leading-tight",
                active && "font-semibold text-primary",
              )}
            >
              {item.label}
            </span>
            <Badge
              variant="secondary"
              className="shrink-0 px-1.5 py-0 text-[10px] font-semibold uppercase tracking-wide"
            >
              {item.difficulty}
            </Badge>
          </span>
          <span className="break-words text-xs leading-snug text-muted-foreground">
            {item.description}
          </span>
        </span>
      </Link>
    </DropdownMenuItem>
  );
}

/** Featured rail entries rendered from the live catalogue (Courses menu). */
function CatalogueRail({ fallback }: { fallback: NavFeatured[] }) {
  const [courses, setCourses] = useState<
    { title: string; levelName: string | null; lessonCount: number; slug: string }[] | null
  >(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const res = await fetch("/api/cms/courses/public");
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as {
          courses: {
            slug: string;
            title: string;
            levelName: string | null;
            lessonCount: number;
          }[];
        };
        if (!active) return;
        setCourses(data.courses.slice(0, 2));
      } catch {
        if (active) setCourses([]);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  if (courses === null) {
    return (
      <div className="flex flex-col gap-2" aria-busy="true" aria-label="Loading courses">
        <span className="sr-only" role="status">Loading courses</span>
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  const list =
    courses.length > 0
      ? courses.map((c) => ({
          label: c.title,
          meta: `${c.levelName ? `${c.levelName} · ` : ""}${c.lessonCount} lessons`,
          href: `#/course/${c.slug}`,
        }))
      : fallback;

  return (
    <>
      {list.map((f) => (
        <DropdownMenuItem key={f.href + f.label} asChild>
          <Link
            href={f.href}
            className="group flex items-start gap-2 rounded-lg px-2 py-2 transition-colors duration-150"
          >
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-sm font-medium leading-tight">{f.label}</span>
              <span className="text-xs leading-snug text-muted-foreground">{f.meta}</span>
            </span>
            <ArrowRight
              className="ml-auto mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  );
}

/** Static featured rail (all categories except Courses). */
function FeaturedRail({ label, featured }: { label: string; featured: NavFeatured[] }) {
  return (
    <>
      {featured.map((f) => (
        <DropdownMenuItem key={f.href + f.label} asChild>
          <Link
            href={f.href}
            className="group flex items-start gap-2 rounded-lg px-2 py-2 transition-colors duration-150"
          >
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-sm font-medium leading-tight">{f.label}</span>
              <span className="text-xs leading-snug text-muted-foreground">{f.meta}</span>
            </span>
            <ArrowRight
              className="ml-auto mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  );
}

/** A mega menu for one navigation category. */
export function CategoryMenu({
  category,
  routeName,
}: {
  category: NavCategory;
  routeName: string;
}) {
  const [open, setOpen] = useState(false);
  const active = activeCategoryId(routeName) === category.id;
  const wide = category.items.length >= 6;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-haspopup="menu"
          aria-current={active ? "page" : undefined}
          className={cn(
            "inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-150 ease-out hover:bg-secondary xl:px-3",
            active && "bg-primary/10 font-semibold text-primary",
          )}
        >
          {category.label}
          <ChevronDown
            className="size-3.5 opacity-70 transition-transform duration-200 [[data-state=open]>&]:rotate-180"
            aria-hidden
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[44rem] max-w-[calc(100vw-1.5rem)] p-4"
      >
        <div className="flex gap-4">
          <div className="min-w-0 flex-1">
            <p className="px-2 pb-2 text-xs leading-snug text-muted-foreground">
              {category.tagline}
            </p>
            <div className={cn("grid gap-x-2 gap-y-0.5 sm:grid-cols-2", wide && "sm:grid-cols-2")}>
              {category.items.map((item) => (
                <MegaMenuItem
                  key={item.href + item.label}
                  item={item}
                  active={item.activeWhen.includes(routeName)}
                />
              ))}
            </div>
          </div>
          <aside className="flex w-56 shrink-0 flex-col border-l pl-4">
            <p className="px-2 pb-1 pt-0.5 text-[11px] font-semibold uppercase tracking-wide text-foreground/60">
              {category.featuredLabel}
            </p>
            {category.id === "courses" ? (
              <CatalogueRail fallback={category.featured} />
            ) : (
              <FeaturedRail label={category.featuredLabel} featured={category.featured} />
            )}
            <DropdownMenuSeparator className="my-2" />
            <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-foreground/60">
              Quick links
            </p>
            {category.quickLinks.map((link) => (
              <DropdownMenuItem key={link.href + link.label} asChild>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </aside>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Compact sign-in / start-learning buttons reused by header and mobile nav. */
export function AuthButtons({
  onSignIn,
  onStart,
}: {
  onSignIn: () => void;
  onStart: () => void;
}) {
  return (
    <>
      <Button variant="ghost" size="sm" onClick={onSignIn}>
        Sign in
      </Button>
      <Button size="sm" className="gap-1.5" onClick={onStart}>
        Start Learning <ArrowRight className="size-3.5" aria-hidden />
      </Button>
    </>
  );
}
