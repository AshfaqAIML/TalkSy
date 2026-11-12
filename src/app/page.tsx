"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GraduationCap, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import { useHashRoute } from "@/hooks/use-hash-route";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { HomeView } from "@/components/app/HomeView";
import { LibraryView } from "@/components/app/LibraryView";
import { AuthView } from "@/components/app/AuthView";
import { ProgressDashboardView } from "@/components/app/progress/ProgressDashboardView";
import { GrammarHubView } from "@/components/app/grammar/GrammarHubView";
import { TenseExplorerView } from "@/components/app/grammar/TenseExplorerView";
import { ErrorClinicView } from "@/components/app/grammar/ErrorClinicView";
import { SentenceLabView } from "@/components/app/lab/SentenceLabView";
import { LessonPlayer } from "@/components/app/lesson/LessonPlayer";
import { VocabularyView } from "@/components/app/vocabulary/VocabularyView";
import { ReadingRoomView } from "@/components/app/reading/ReadingRoomView";
import { ReaderView } from "@/components/app/reading/ReaderView";
import { ListeningLabView } from "@/components/app/listening/ListeningLabView";
import { ActivityView } from "@/components/app/listening/ActivityView";
import { SpeakingLabView } from "@/components/app/speaking/SpeakingLabView";
import { SpeakingActivityView } from "@/components/app/speaking/ActivityView";
import { ConversationView } from "@/components/app/speaking/ConversationView";
import { WritingStudioView } from "@/components/app/writing/WritingStudioView";
import { WritingEditorView } from "@/components/app/writing/WritingEditorView";
import { TutorView } from "@/components/app/tutor/TutorView";
import { CoursesCatalogueView, CourseOutlineView, CmsLessonPlayerView } from "@/components/app/courses/CoursesViews";
import { AdminView } from "@/components/app/admin/AdminView";
import { cn } from "@/lib/utils";

function TalkSyLogo() {
  return (
    <Link href="#/" className="flex items-center gap-2" aria-label="TalkSy home">
      <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <GraduationCap className="size-5" aria-hidden />
      </span>
      <span className="text-lg font-bold tracking-tight">
        Talk<span className="text-primary">Sy</span>
      </span>
    </Link>
  );
}

export default function Page() {
  const { route, navigate } = useHashRoute();
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const setUser = useAppStore((s) => s.setUser);

  useEffect(() => {
    (async () => {
      const response = await api.me();
      if (response.ok) setUser(response.data.user);
    })();
  }, [setUser]);

  const logout = async () => {
    await api.logout();
    setUser(null);
    toast.success("Logged out. See you soon!");
    navigate({ name: "home" });
  };

  const openLesson = (slug: string) => {
    if (slug) navigate({ name: "lesson", slug });
    else navigate({ name: "library" });
  };

  const navLinks = (
    <>
      <Link
        href="#/library"
        className={cn(
          "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-secondary sm:px-3",
          route.name === "library" && "bg-secondary",
        )}
      >
        Learning path
      </Link>
      <Link
        href="#/courses"
        className={cn(
          "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-secondary sm:px-3",
          ["courses", "course", "course-lesson"].includes(route.name) && "bg-secondary",
        )}
      >
        Courses
      </Link>
      <Link
        href="#/vocabulary"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "vocabulary" && "bg-secondary",
        )}
      >
        Word World
      </Link>
      <Link
        href="#/grammar"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          ["grammar", "grammar-tenses", "grammar-clinic"].includes(route.name) && "bg-secondary",
        )}
      >
        Grammar School
      </Link>
      <Link
        href="#/lab"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "lab" && "bg-secondary",
        )}
      >
        Sentence Lab
      </Link>
      <Link
        href="#/reading"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "reading" && "bg-secondary",
        )}
      >
        Reading Room
      </Link>
      <Link
        href="#/listening"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "listening" && "bg-secondary",
        )}
      >
        Listening Lab
      </Link>
      <Link
        href="#/speaking"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "speaking" && "bg-secondary",
        )}
      >
        Speaking Lab
      </Link>
      <Link
        href="#/writing"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "writing" && "bg-secondary",
        )}
      >
        Writing Studio
      </Link>
      <Link
        href="#/tutor"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          route.name === "tutor" && "bg-secondary",
        )}
      >
        AI Tutor
      </Link>
      {user ? (
        <Link
          href="#/progress"
          className={cn(
            "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
            route.name === "progress" && "bg-secondary",
          )}
        >
          My Progress
        </Link>
      ) : null}
      {user && ["editor", "teacher", "admin"].includes(user.role) ? (
        <Link
          href="#/admin"
          className={cn(
            "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
            route.name === "admin" && "bg-secondary",
          )}
        >
          Admin
        </Link>
      ) : null}
    </>
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Skip to content for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-3 sm:px-6">
          <TalkSyLogo />

          <nav
            className="ml-4 hidden min-w-0 flex-1 items-center gap-0.5 overflow-x-auto md:flex [&>a]:whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Main"
          >
            {navLinks}
          </nav>

          <div className="ml-auto flex items-center gap-2">
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
                  <DropdownMenuItem onClick={() => navigate({ name: "library" })}>
                    Learning path
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate({ name: "progress" })}>
                    My Progress
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="gap-2">
                    <LogOut className="size-4" aria-hidden /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : userLoaded ? (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate({ name: "login" })}>
                  Log in
                </Button>
                <Button size="sm" onClick={() => navigate({ name: "register" })}>
                  Start free
                </Button>
              </>
            ) : null}

            {/* Mobile nav */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="px-1">
                  <TalkSyLogo />
                </SheetTitle>
                <nav className="mt-6 flex flex-col gap-1 px-1" aria-label="Mobile">
                  <Link href="#/" className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">
                    Home
                  </Link>
                  {navLinks}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="main-content" className="flex-1">
        {route.name === "home" ? <HomeView navigate={navigate} /> : null}
        {route.name === "library" ? <LibraryView onOpenLesson={openLesson} /> : null}
        {route.name === "grammar" ? <GrammarHubView /> : null}
        {route.name === "grammar-tenses" ? <TenseExplorerView /> : null}
        {route.name === "grammar-clinic" ? <ErrorClinicView navigate={navigate} /> : null}
        {route.name === "lab" ? <SentenceLabView /> : null}
        {route.name === "vocabulary" ? (
          <VocabularyView route={route} navigate={navigate} />
        ) : null}
        {route.name === "reading" ? (
          route.slug ? (
            <ReaderView key={route.slug} slug={route.slug} navigate={navigate} />
          ) : (
            <ReadingRoomView navigate={navigate} />
          )
        ) : null}
        {route.name === "listening" ? (
          route.slug ? (
            <ActivityView key={route.slug} slug={route.slug} navigate={navigate} />
          ) : (
            <ListeningLabView navigate={navigate} />
          )
        ) : null}
        {route.name === "speaking" ? (
          route.view === "activity" && route.slug ? (
            <SpeakingActivityView key={route.slug} slug={route.slug} navigate={navigate} />
          ) : route.view === "conversation" && route.slug ? (
            <ConversationView key={route.slug} slug={route.slug} navigate={navigate} />
          ) : (
            <SpeakingLabView navigate={navigate} tab={route.tab} />
          )
        ) : null}
        {route.name === "writing" ? (
          route.view === "assignment" && route.slug ? (
            <WritingEditorView key={route.slug} slug={route.slug} navigate={navigate} />
          ) : (
            <WritingStudioView navigate={navigate} />
          )
        ) : null}
        {route.name === "tutor" ? (
          <TutorView
            key={route.id ?? route.lessonRef ?? "hub"}
            navigate={navigate}
            routeId={route.id}
            lessonRef={route.lessonRef}
          />
        ) : null}
        {route.name === "login" ? <AuthView mode="login" navigate={navigate} /> : null}
        {route.name === "register" ? <AuthView mode="register" navigate={navigate} /> : null}
        {route.name === "courses" ? <CoursesCatalogueView navigate={navigate} /> : null}
        {route.name === "course" ? (
          <CourseOutlineView key={route.slug} slug={route.slug} navigate={navigate} />
        ) : null}
        {route.name === "course-lesson" ? (
          <CmsLessonPlayerView key={route.slug} slug={route.slug} navigate={navigate} />
        ) : null}
        {route.name === "admin" ? (
          user && ["editor", "teacher", "admin"].includes(user.role) ? (
            <AdminView />
          ) : (
            <div className="mx-auto max-w-md px-4 py-20 text-center">
              <p className="font-semibold">Staff access only.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Log in with a content editor, teacher or administrator account.
              </p>
              <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
                Go to login
              </Button>
            </div>
          )
        ) : null}
        {route.name === "progress" ? (
          user ? (
            <ProgressDashboardView key={route.tab ?? "overview"} tab={route.tab} navigate={navigate} />
          ) : (
            <div className="mx-auto max-w-md px-4 py-20 text-center">
              <p className="font-semibold">Please log in to see your progress.</p>
              <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
                Go to login
              </Button>
            </div>
          )
        ) : null}
        {route.name === "lesson" ? (
          <LessonPlayer
            key={route.slug}
            slug={route.slug}
            onNavigateLesson={openLesson}
          />
        ) : null}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-secondary/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>
            <span className="font-semibold text-foreground">TalkSy</span> — From your
            first English word to confident communication.
          </p>
          <p>Pre-A1 &amp; A1 lessons · 21 reading texts · 18 listening activities · 22 speaking activities · 31 writing assignments · 9 tutor modes · staff-managed courses</p>
        </div>
      </footer>
    </div>
  );
}
