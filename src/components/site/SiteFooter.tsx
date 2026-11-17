"use client";

/**
 * Sitemap footer — PROMPT 31 columns aligned with the navigation IA.
 * Links mirror the nav categories; counts only where content backs them.
 */

import Link from "next/link";
import { TalkSyLogo } from "./SiteHeader";
import { PLATFORM_STATS } from "@/lib/generated/platform-stats";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Learn",
    links: [
      { label: "Learning paths", href: "#/paths" },
      { label: "Course catalogue", href: "#/courses" },
      { label: "Grammar School", href: "#/grammar" },
      { label: "AI Tutor", href: "#/tutor" },
      { label: "Learning Tips", href: "#/tips" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Reading Room", href: "#/reading" },
      { label: "Listening Lab", href: "#/listening" },
      { label: "Speaking Lab", href: "#/speaking" },
      { label: "Writing Studio", href: "#/writing" },
      { label: "Sentence Lab", href: "#/lab" },
    ],
  },
  {
    title: "Category hubs",
    links: [
      { label: "Beginner English", href: "#/hub/beginner-english" },
      { label: "Grammar", href: "#/hub/grammar" },
      { label: "Vocabulary", href: "#/hub/vocabulary" },
      { label: "Spoken English", href: "#/hub/spoken-english" },
      { label: "Pronunciation", href: "#/hub/pronunciation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Grammar guides", href: "#/hub/grammar" },
      { label: "Vocabulary lists", href: "#/vocabulary/explore" },
      { label: "Everyday English course", href: "#/course/everyday-english-foundations" },
      { label: "Exam Academy", href: "#/exams" },
      { label: "My Progress", href: "#/progress" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#/about" },
      { label: "Contact", href: "#/contact" },
      { label: "Privacy", href: "#/privacy" },
      { label: "Terms", href: "#/terms" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <TalkSyLogo />
            <p className="mt-4 text-sm font-medium">
              Learn. Practice. Speak. Excel.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A complete English-learning platform: structured lessons, six
              practice laboratories, a personal AI tutor and honest assessments —
              from your first English word to confident communication.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {PLATFORM_STATS.lessons} live lessons · {PLATFORM_STATS.words}{" "}
              words · {PLATFORM_STATS.readingTexts} reading texts ·{" "}
              {PLATFORM_STATS.listeningActivities} listening activities ·{" "}
              {PLATFORM_STATS.speakingActivities} speaking activities ·{" "}
              {PLATFORM_STATS.writingAssignments} writing assignments ·{" "}
              {PLATFORM_STATS.tutorModes} tutor modes · IELTS &amp; TOEFL
              Academy
            </p>
          </div>
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-1.5 border-t pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} TalkSy — Learn. Practice. Speak. Excel.</p>
          <p>From your first English word to confident communication.</p>
        </div>
      </div>
    </footer>
  );
}
