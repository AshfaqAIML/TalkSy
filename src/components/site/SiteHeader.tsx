"use client";

/**
 * The global site header (PROMPT 31): logo, six category mega menus, the
 * Ctrl/Cmd+K search trigger, theme toggle, account area and the mobile
 * navigation trigger.
 */

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, LogOut, Menu, Search } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "sonner";
import { useHashRoute, type AppRoute } from "@/hooks/use-hash-route";
import { api } from "@/lib/client/api";
import type { SessionUser } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { NAV_CATEGORIES } from "@/lib/navigation";
import { CategoryMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { CommandPalette } from "./CommandPalette";
import { cn } from "@/lib/utils";

export function TalkSyLogo() {
  return (
    <Link
      href="#/"
      className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      aria-label="TalkSy home"
    >
      <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-deep text-white shadow-sm">
        <GraduationCap className="size-5" aria-hidden />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">
        Talk<span className="text-brand-blue">Sy</span>
      </span>
    </Link>
  );
}

/** Detect the platform once so the shortcut hint matches the keyboard.
 *  useSyncExternalStore keeps SSR and hydration consistent (server always
 *  renders "Ctrl K"). */
function useShortcutLabel(): string {
  return useSyncExternalStore(
    () => () => {},
    () =>
      typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform)
        ? "⌘K"
        : "Ctrl K",
    () => "Ctrl K",
  );
}

export function SiteHeader() {
  const { route, navigate } = useHashRoute();
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const setUser = useAppStore((s) => s.setUser);

  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shortcut = useShortcutLabel();

  // Global Ctrl+K / Cmd+K.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const logout = async () => {
    await api.logout();
    setUser(null);
    toast.success("Logged out. See you soon!");
    navigate({ name: "home" });
  };

  const isStaff = Boolean(user && ["editor", "teacher", "admin"].includes(user.role));

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-3 sm:px-6">
          <TalkSyLogo />

          {/* Desktop mega menus (≥lg) — shrink-0 so the search trigger
              yields space first, never the nav labels */}
          <nav
            className="ml-3 hidden shrink-0 grow items-center gap-0.5 lg:flex"
            aria-label="Main"
          >
            {NAV_CATEGORIES.map((category) => (
              <CategoryMenu key={`${category.id}-${route.name}`} category={category} routeName={route.name} />
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            {/* Search trigger → command palette (shrinks before the nav does) */}
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Search TalkSy (opens the command palette)"
              className={cn(
                "inline-flex h-9 min-w-0 shrink items-center gap-2 overflow-hidden rounded-lg border bg-muted/40 px-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                "xl:w-52 xl:justify-start",
              )}
            >
              <Search className="size-4 shrink-0" aria-hidden />
              <span className="hidden truncate text-sm xl:inline">Search…</span>
              <kbd className="ml-auto hidden shrink-0 whitespace-nowrap rounded border bg-background px-1.5 py-0.5 font-mono text-[10px] font-semibold lg:inline">
                {shortcut}
              </kbd>
            </button>

            <ThemeToggle />

            {userLoaded && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2" aria-label="Account menu">
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {(user.name ?? user.email).charAt(0).toUpperCase()}
                    </span>
                    <span className="hidden max-w-28 truncate sm:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>
                    <p className="truncate text-sm font-semibold">{user.name}</p>
                    <p className="truncate text-xs font-normal text-muted-foreground">
                      {user.email}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate({ name: "dashboard" })}>
                    My Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate({ name: "library" })}>
                    Learning path
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate({ name: "progress" })}>
                    My Progress
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPaletteOpen(true)}>
                    Search (Ctrl K)
                  </DropdownMenuItem>
                  {isStaff ? (
                    <DropdownMenuItem onClick={() => navigate({ name: "admin" })}>
                      Admin
                    </DropdownMenuItem>
                  ) : null}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="gap-2">
                    <LogOut className="size-4" aria-hidden /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : userLoaded ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden xl:inline-flex"
                  onClick={() => navigate({ name: "login" })}
                >
                  Sign in
                </Button>
                <Button size="sm" className="gap-1.5" onClick={() => navigate({ name: "register" })}>
                  Start Learning <ArrowRight className="size-3.5" aria-hidden />
                </Button>
              </>
            ) : null}

            {/* Mobile navigation trigger (<lg) */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        onOpenSearch={() => setPaletteOpen(true)}
        routeName={route.name}
        signedIn={Boolean(user)}
        onNavigate={(to: AppRoute) => navigate(to)}
      />

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        user={user}
        route={route}
      />
    </>
  );
}
