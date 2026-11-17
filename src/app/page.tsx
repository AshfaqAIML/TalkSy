"use client";

import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useHashRoute, type AppRoute } from "@/hooks/use-hash-route";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HomeView } from "@/components/app/HomeView";
import { LibraryView } from "@/components/app/LibraryView";
import { AuthView } from "@/components/app/AuthView";
import { ForgotPasswordView } from "@/components/app/ForgotPasswordView";
import {
  AboutView,
  ContactView,
  PrivacyView,
  TermsView,
  TipsView,
} from "@/components/app/StaticPages";
import { ProgressDashboardView } from "@/components/app/progress/ProgressDashboardView";
import { StudentDashboardView } from "@/components/app/dashboard/StudentDashboardView";
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
import {
  CourseOutlineView,
  CmsLessonPlayerView,
} from "@/components/app/courses/CoursesViews";
import { CatalogueView } from "@/components/app/catalogue/CatalogueView";
import { HubView } from "@/components/app/catalogue/HubView";
import { PathsView, PathDetailView } from "@/components/app/catalogue/PathsViews";
import { AdminView } from "@/components/app/admin/AdminView";
import { ExamAcademyView } from "@/components/app/exams/ExamAcademyView";
import { ExamOnboardingView } from "@/components/app/exams/ExamOnboardingView";
import { ExamDashboardView } from "@/components/app/exams/ExamDashboardView";
import { ExamPlannerView } from "@/components/app/exams/ExamPlannerView";
import { ExamCourseView } from "@/components/app/exams/ExamCourseView";
import { ExamMocksView } from "@/components/app/exams/ExamMocksView";
import { ListeningMasterclassView } from "@/components/app/exams/listening/ListeningMasterclassView";
import { ReadingMasterclassView } from "@/components/app/exams/reading/ReadingMasterclassView";
import { WritingMasterclassView } from "@/components/app/exams/writing/WritingMasterclassView";
import { SpeakingMasterclassView } from "@/components/app/exams/speaking/SpeakingMasterclassView";
import { ToeflPracticeLibraryView } from "@/components/app/exams/toefl/ToeflPracticeLibraryView";
import { ExamsQuestionBankView } from "@/components/app/exams/ExamsQuestionBankView";
import { MockPlayerView } from "@/components/app/exams/MockPlayerView";
import { MockResultView } from "@/components/app/exams/MockResultView";
import { ExamHistoryView } from "@/components/app/exams/ExamHistoryView";
import { EvaluationStudioView } from "@/components/app/exams/EvaluationStudioView";
import { PracticeView } from "@/components/app/practice/PracticeView";
import { PracticeSessionView } from "@/components/app/practice/PracticeSessionView";
import { RouteTransition } from "@/components/motion";

/* ---------------------------------------------------------------------------
 * Page — the single public route. Everything below the header switches on
 * the hash route; navigation and search live in the site components
 * (SiteHeader, MobileNav, CommandPalette) driven by src/lib/navigation.ts.
 * ------------------------------------------------------------------------- */

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

  // Scroll to top on view-level navigation (tab switches inside a view keep
  // their scroll position because the route key does not change).
  const routeKey = useMemo(() => {
    const r = route as Record<string, string | undefined>;
    const param = r.slug ?? r.attemptId ?? r.id ?? r.examKey ?? r.level ?? "";
    return `${route.name}:${param}`;
  }, [route]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [routeKey]);

  const openLesson = (slug: string) => {
    if (slug) navigate({ name: "lesson", slug });
    else navigate({ name: "library" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Skip to content for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />

      {/* Main */}
      <main id="main-content" className="flex-1">
        <RouteTransition routeKey={routeKey}>
          {route.name === "home" ? <HomeView navigate={navigate} /> : null}
          {route.name === "library" ? (
            <LibraryView key={route.level ?? "all"} onOpenLesson={openLesson} level={route.level} />
          ) : null}
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
              key={route.id ?? route.lessonRef ?? route.mode ?? "hub"}
              navigate={navigate}
              routeId={route.id}
              lessonRef={route.lessonRef}
              initialMode={route.mode}
            />
          ) : null}
          {route.name === "login" ? <AuthView mode="login" navigate={navigate} /> : null}
          {route.name === "forgot" ? <ForgotPasswordView navigate={navigate} /> : null}
          {route.name === "register" ? <AuthView mode="register" navigate={navigate} /> : null}
          {route.name === "reset" ? (
            <AuthView key={route.token} mode="reset" token={route.token} navigate={navigate} />
          ) : null}
          {route.name === "courses" ? (
            <CatalogueView key={route.level ?? "all"} navigate={navigate} levelPreset={route.level} />
          ) : null}
          {route.name === "paths" ? (
            route.slug ? (
              <PathDetailView key={route.slug} slug={route.slug} />
            ) : (
              <PathsView />
            )
          ) : null}
          {route.name === "hub" ? <HubView key={route.hubId} hubId={route.hubId} /> : null}
          {route.name === "practice" ? (
            user ? (
              <PracticeView key={route.tab ?? "hub"} tab={route.tab} navigate={navigate} />
            ) : (
              <div className="mx-auto max-w-md px-4 py-20 text-center">
                <p className="font-semibold">Please log in to open the Practice Zone.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every answer you give is saved to your account — that is what
                  powers the feedback, reports and mastery estimates.
                </p>
                <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
                  Go to login
                </Button>
              </div>
            )
          ) : null}
          {route.name === "practice-session" ? (
            user ? (
              <PracticeSessionView key={route.id} id={route.id} navigate={navigate} />
            ) : (
              <div className="mx-auto max-w-md px-4 py-20 text-center">
                <p className="font-semibold">Please log in to continue this session.</p>
                <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
                  Go to login
                </Button>
              </div>
            )
          ) : null}
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
          {route.name === "exams" ? <ExamAcademyView navigate={navigate} /> : null}
          {route.name === "exams-onboarding" ? <ExamOnboardingView navigate={navigate} /> : null}
          {route.name === "exams-dashboard" ? <ExamDashboardView navigate={navigate} /> : null}
          {route.name === "exams-planner" ? <ExamPlannerView navigate={navigate} /> : null}
          {route.name === "exams-course" ? (
            <ExamCourseView
              key={`${route.examKey}-${route.variant ?? ""}`}
              examKey={route.examKey}
              variant={route.variant}
              navigate={navigate}
            />
          ) : null}
          {route.name === "exams-mocks" ? <ExamMocksView navigate={navigate} /> : null}
          {route.name === "exams-listening" ? (
            <ListeningMasterclassView key={`${route.tab ?? "overview"}-${route.slug ?? ""}`} tab={route.tab} slug={route.slug} navigate={navigate} />
          ) : null}
          {route.name === "exams-reading" ? (
            <ReadingMasterclassView key={`${route.tab ?? "overview"}-${route.slug ?? ""}`} tab={route.tab} slug={route.slug} navigate={navigate} />
          ) : null}
          {route.name === "exams-writing" ? (
            <WritingMasterclassView key={`${route.tab ?? "overview"}-${route.slug ?? ""}`} tab={route.tab} slug={route.slug} navigate={navigate} />
          ) : null}
          {route.name === "exams-speaking" ? (
            <SpeakingMasterclassView key={`${route.tab ?? "overview"}-${route.slug ?? ""}`} tab={route.tab} slug={route.slug} navigate={navigate} />
          ) : null}
          {route.name === "exams-toefl-library" ? (
            <ToeflPracticeLibraryView key={`${route.tab ?? "library"}-${route.slug ?? ""}`} tab={route.tab} slug={route.slug} navigate={navigate} />
          ) : null}
          {route.name === "exams-bank" ? <ExamsQuestionBankView navigate={navigate} /> : null}
          {route.name === "exams-history" ? <ExamHistoryView navigate={navigate} /> : null}
          {route.name === "exams-evaluator" ? <EvaluationStudioView navigate={navigate} /> : null}
          {route.name === "exams-mock" ? (
            <MockPlayerView key={route.attemptId} attemptId={route.attemptId} navigate={navigate} />
          ) : null}
          {route.name === "exams-result" ? (
            <MockResultView key={route.attemptId} attemptId={route.attemptId} navigate={navigate} />
          ) : null}
          {route.name === "dashboard" ? (
            user ? (
              <StudentDashboardView navigate={navigate} />
            ) : (
              <div className="mx-auto max-w-md px-4 py-20 text-center">
                <p className="font-semibold">Please log in to see your dashboard.</p>
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
          {route.name === "about" ? <AboutView navigate={navigate} /> : null}
          {route.name === "contact" ? <ContactView navigate={navigate} /> : null}
          {route.name === "privacy" ? <PrivacyView /> : null}
          {route.name === "terms" ? <TermsView /> : null}
          {route.name === "tips" ? <TipsView navigate={navigate} /> : null}
        </RouteTransition>
      </main>

      <SiteFooter />
    </div>
  );
}
