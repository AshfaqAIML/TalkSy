"use client";

/**
 * Public information pages — About, Contact, Privacy, Terms.
 *
 * Every statement here describes behaviour that exists in the codebase
 * (data models, service layers and content files). No invented company
 * details, addresses, emails or legal entities; where the app has no
 * corresponding feature, the page says so instead of inventing one.
 */

import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Brain,
  ClipboardCheck,
  CreditCard,
  Database,
  FileText,
  Headphones,
  KeyRound,
  Lock,
  Mic,
  PenLine,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import type { AppRoute } from "@/hooks/use-hash-route";

/* ------------------------------------------------------------------ */
/* Shared shell                                                         */
/* ------------------------------------------------------------------ */

function PageShell({
  eyebrow,
  icon: Icon,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Reveal mode="mount" className="flex flex-col gap-4">
        <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
          <Icon className="size-3.5" aria-hidden /> {eyebrow}
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{lede}</p>
      </Reveal>
      <div className="mt-10 flex flex-col gap-10">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-heading text-xl font-bold tracking-tight">{children}</h2>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
  );
}

/** Definition-style rows: icon + term + honest description. */
function FactList({
  items,
  className,
}: {
  items: { icon?: LucideIcon; term: string; text: React.ReactNode }[];
  className?: string;
}) {
  return (
    <ul className={cn("mt-4 space-y-4", className)}>
      {items.map((item) => (
        <li key={item.term} className="flex gap-3.5">
          {item.icon ? (
            <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="size-4" aria-hidden />
            </span>
          ) : null}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">{item.term}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

export function AboutView({ navigate }: { navigate: (route: AppRoute) => void }) {
  return (
    <PageShell
      eyebrow="About TalkSy"
      icon={Sparkles}
      title="A complete English-learning platform — not a grammar website"
      lede="TalkSy takes you from your first English word to confident communication: structured lessons, six practice laboratories, a personal AI tutor and honest assessments that only count when you pass them."
    >
      <Reveal mode="mount">
        <SectionTitle>What that means in practice</SectionTitle>
        <Prose>
          <p>
            Most English sites explain rules and stop there. TalkSy is built the other way
            round: every explanation lives inside a lesson you work through, every skill has a
            dedicated practice environment, and the AI tutor knows your lessons, your learned
            words and your recent mistakes — so help is always about <em>your</em> English, not
            generic examples.
          </p>
          <p>
            Nothing on this platform is a mock-up. The counts below are the content that ships
            in the application today, and progress is earned by finishing sections and passing
            end-of-lesson assessments — never by opening a page.
          </p>
        </Prose>
        <FactList
          items={[
            {
              icon: BookOpen,
              term: "A guided learning path",
              text: "Four levels from Pre-A1 “First Words” upwards, 20 live lessons with 20 block types — vocabulary, dialogues, grammar rules, tense comparisons, sentence diagrams and challenges.",
            },
            {
              icon: Database,
              term: "Courses from a teaching team",
              text: "Structured courses published through the built-in content system — published, versioned and live, with enrolments and lesson counts tracked in the database.",
            },
            {
              icon: Mic,
              term: "Six practice laboratories",
              text: "Word World (135 words), Grammar School (8 modules · 12 tenses), Sentence Lab, Reading Room (21 texts), Listening Lab (18 activities) and Speaking Lab (22 activities · 11 role-play scenarios).",
            },
            {
              icon: PenLine,
              term: "A writing studio with real feedback",
              text: "31 guided assignments from the alphabet to professional reports, graded issue by issue against a ten-dimension rubric — coaching that teaches instead of rewriting.",
            },
            {
              icon: Brain,
              term: "One AI tutor, ten teachers",
              text: "Grammar, vocabulary, sentence formation, speaking, conversation simulation, writing, listening, reading, interview practice and lesson doubts — one assistant that adapts to your level.",
            },
            {
              icon: ClipboardCheck,
              term: "Exam preparation built in",
              text: "An IELTS & TOEFL Academy with adaptive study plans, 24 mock exams and AI writing & speaking evaluation.",
            },
          ]}
        />
      </Reveal>
      <Reveal mode="mount">
        <Card className="gradient-pan bg-gradient-deep relative overflow-hidden rounded-2xl p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-brand-blue/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-40 rounded-full bg-brand-violet/20 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-heading text-xl font-bold">Learn. Practice. Speak. Excel.</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80">
              The best way to judge a learning platform is to use it. Create a free account —
              no credit card, no ratings theatre — and start at lesson one.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                className="press gap-2 bg-white text-brand-navy hover:bg-white/90"
                onClick={() => navigate({ name: "register" })}
              >
                Start Learning Free
              </Button>
              <Button
                variant="outline"
                className="press border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                onClick={() => navigate({ name: "library" })}
              >
                Explore the learning path
              </Button>
            </div>
          </div>
        </Card>
      </Reveal>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

export function ContactView({ navigate }: { navigate: (route: AppRoute) => void }) {
  return (
    <PageShell
      eyebrow="Contact"
      icon={FileText}
      title="Help lives inside the app"
      lede="TalkSy is a self-contained learning platform: instead of a support inbox, every kind of help you need is a feature you can open right now."
    >
      <Reveal mode="mount">
        <SectionTitle>Where to get help</SectionTitle>
        <Prose>
          <p>
            We deliberately kept support inside the product — the fastest answer to “why is my
            English wrong?” is a teacher who can see the sentence. These are the real support
            surfaces, each one a working part of the app:
          </p>
        </Prose>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {(
            [
              {
                icon: Brain,
                title: "AI Tutor · ten teachers",
                text: "Grammar, vocabulary, sentence formation, speaking, conversation simulation, writing, listening, reading, interviews and lesson doubts — ask anything, any time.",
                cta: "Open the tutor",
                route: { name: "tutor" } as AppRoute,
              },
              {
                icon: ClipboardCheck,
                title: "Grammar Error Clinic",
                text: "Submit your own sentences and get corrections with an explanation of the rule behind each fix.",
                cta: "Visit the clinic",
                route: { name: "grammar-clinic" } as AppRoute,
              },
              {
                icon: KeyRound,
                title: "Account & password help",
                text: "Password resets are self-service: use “Forgot password?” on the sign-in page and we email you a reset link.",
                cta: "Go to sign in",
                route: { name: "login" } as AppRoute,
              },
              {
                icon: ScrollText,
                title: "This very page set",
                text: "About, Privacy and Terms describe exactly what the platform stores and how it behaves — no fine print.",
                cta: "Read the terms",
                route: { name: "terms" } as AppRoute,
              },
            ] as const
          ).map((item) => (
            <Card key={item.title} className="card-interactive h-full hover:border-primary/40 hover:shadow-md">
              <CardContent className="flex h-full flex-col gap-2 p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-4.5" aria-hidden />
                </span>
                <h3 className="mt-1 font-semibold leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-auto w-fit gap-1.5 px-2 text-primary"
                  onClick={() => navigate(item.route)}
                >
                  {item.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
      <Reveal mode="mount">
        <SectionTitle>For content editors &amp; staff</SectionTitle>
        <Prose>
          <p>
            Courses are published, versioned and reviewed by the teaching team through the
            built-in CMS, and administrators manage accounts and content from the admin area —
            both are inside the app, behind staff accounts. TalkSy does not operate a public
            email inbox, a phone line or social channels, so this page will never point you at
            one.
          </p>
        </Prose>
      </Reveal>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Privacy                                                              */
/* ------------------------------------------------------------------ */

export function PrivacyView() {
  return (
    <PageShell
      eyebrow="Privacy"
      icon={ShieldCheck}
      title="What TalkSy stores — and what it never keeps"
      lede="This page describes the data model as it is implemented: what is saved, what stays in your browser, and what you can delete yourself."
    >
      <Reveal mode="mount">
        <SectionTitle>Your account</SectionTitle>
        <Prose>
          <p>
            A TalkSy account stores your name, email address and role. Passwords are hashed
            with scrypt and a per-password salt — the plain text is never stored or logged.
            Sessions use opaque tokens; you can log out any time, which ends the session.
          </p>
        </Prose>
        <FactList
          items={[
            {
              icon: UserRound,
              term: "Learning records",
              text: "Lesson progress, assessment results, exercise attempts, notes and bookmarks, vocabulary reviews, reading/listening/speaking/writing progress — all tied to your account so the platform can resume where you left off.",
            },
            {
              icon: Lock,
              term: "Writing drafts",
              text: "Drafts autosave while you write, and submissions keep a version history so you can compare revisions. They are visible only to your account.",
            },
            {
              icon: Brain,
              term: "AI Tutor conversations",
              text: "Tutor chats are saved per account so you can continue them later. You can delete a single conversation or all of them at any time from the tutor’s history panel — deletion is immediate and permanent.",
            },
            {
              icon: Mic,
              term: "Speech recordings — never stored",
              text: "Speaking practice audio lives in your browser. When you explicitly submit a recording, the server sends it to a speech provider to transcribe it, keeps only the transcript (according to your retention setting) and never persists the audio itself.",
            },
            {
              icon: Sparkles,
              term: "AI-generated replies",
              text: "When you use the AI Tutor, your message and the relevant learning context (your level, recent lessons, learned words) are sent to the AI service that generates the reply. That is the only external processing in normal use.",
            },
            {
              icon: CreditCard,
              term: "No payments, no trackers",
              text: "TalkSy is free while it grows: there is no payment system, no advertising and no third-party analytics. The platform does not sell or share your data — there is nothing to sell it to.",
            },
          ]}
        />
      </Reveal>
      <Reveal mode="mount">
        <Card className="rounded-2xl border-dashed">
          <CardContent className="flex flex-col gap-3 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-success/10 text-success">
                <Trash2 className="size-4" aria-hidden />
              </span>
              <h2 className="font-heading text-lg font-bold">Deleting things yourself</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You can delete your AI Tutor conversations yourself (single or all at once). To
              close an account entirely, contact the platform administrator — the admin area
              includes account management for this purpose. There is no automated
              self-service account deletion yet; we would rather say that plainly than imply a
              button that does not exist.
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Terms                                                                */
/* ------------------------------------------------------------------ */

export function TermsView() {
  return (
    <PageShell
      eyebrow="Terms"
      icon={ScrollText}
      title="Plain-language terms of use"
      lede="TalkSy is provided as a free learning platform while it grows. These terms describe what you can expect from it — and what it expects from you — without legal fog."
    >
      <Reveal mode="mount">
        <FactList
          items={[
            {
              icon: Headphones,
              term: "1 · The service",
              text: "TalkSy provides English lessons, practice environments, an AI tutor and exam preparation material. Content is educational; it is not a substitute for accredited certification, and no exam outcome is guaranteed.",
            },
            {
              icon: UserRound,
              term: "2 · Your account",
              text: "Keep your password to yourself. You are responsible for activity under your account. Staff roles (editor, teacher, admin) are granted by administrators and can be revoked.",
            },
            {
              icon: PenLine,
              term: "3 · Your content",
              text: "Sentences you submit, drafts you write and recordings you make remain yours. TalkSy stores them only to provide the service back to you — grading, feedback, version history and spaced repetition.",
            },
            {
              icon: ShieldCheck,
              term: "4 · Our content",
              text: "Lessons, courses, texts, exercises and grammar guides are published by the TalkSy teaching team. You may use them through the platform; please don’t redistribute them as your own teaching materials.",
            },
            {
              icon: ClipboardCheck,
              term: "5 · Honest progress",
              text: "Lessons are completed by finishing sections and passing assessments. We will never inflate a score, sell a “certificate of completion” that the work did not earn, or show ratings that learners did not give.",
            },
            {
              icon: Database,
              term: "6 · Availability",
              text: "The platform is provided as-is. We work to keep content accurate and the service available, but we do not promise uninterrupted access, and features may evolve as the platform grows.",
            },
          ]}
        />
      </Reveal>
      <Reveal mode="mount">
        <Prose>
          <p className="text-xs leading-relaxed">
            If any part of these terms conflicts with rights you have under your local
            consumer law, your local law wins. Questions about any clause? The Contact page
            explains where each kind of help lives.
          </p>
        </Prose>
      </Reveal>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Learning Tips                                                        */
/* ------------------------------------------------------------------ */

/**
 * Study guidance for using TalkSy well. Every tip describes behaviour that
 * really exists (spaced-repetition scheduling, verified completions, the
 * six labs, lesson-linked tutor modes) — no generic listicle filler.
 */
export function TipsView({ navigate }: { navigate: (route: AppRoute) => void }) {
  return (
    <PageShell
      eyebrow="Resources · Learning Tips"
      icon={BookOpen}
      title="How to learn here — routines, repetition and honest measurement"
      lede="TalkSy gives you a path, six practice laboratories and an AI tutor. These tips show how to combine them into a routine that actually moves your English forward."
    >
      <Reveal mode="mount">
        <SectionTitle>1 · Start at your true level</SectionTitle>
        <Prose>
          <p>
            The learning path begins at Pre-A1 — lesson one assumes no English at all. Open
            the <strong>Learning path</strong>, try the first lesson of a level, and skip
            forward when a level feels easy. Lessons record the sections you finish, so
            jumping ahead never breaks your progress.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>2 · Twenty focused minutes beat two distracted hours</SectionTitle>
        <Prose>
          <p>
            A routine that works inside this platform: five minutes reviewing due words in{" "}
            <strong>Word World</strong>, ten minutes on your next lesson, five minutes in one
            lab of your choice — reading, listening, speaking or writing. Consistency is the
            whole trick; the spaced-repetition scheduler does the planning for your words.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>3 · Pair every lesson with a skill</SectionTitle>
        <Prose>
          <p>
            After a lesson, use the same language actively: read a text at your level in the{" "}
            <strong>Reading Room</strong>, then listen to a related activity in the{" "}
            <strong>Listening Lab</strong>. Receptive input (reading and listening) with
            today's vocabulary makes new language stick.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>4 · Make mistakes, then get them corrected</SectionTitle>
        <Prose>
          <p>
            Write your own sentences and submit them to the{" "}
            <strong>Grammar Error Clinic</strong> — instant corrections come with the rule
            explained, and the clinic remembers which errors you make most. Use it after
            writing, not before, so the correction lands on real attempts.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>5 · Speak out loud every day</SectionTitle>
        <Prose>
          <p>
            The <strong>Speaking Lab</strong> measures pronunciation and fluency from real
            recordings, and its role-play scenarios put you in everyday situations with an AI
            partner. Record, listen back, repeat — progress there is measured, never guessed.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>6 · Ask the tutor about your own lesson</SectionTitle>
        <Prose>
          <p>
            The AI Tutor has ten teaching modes, and lesson-linked conversations use the
            lesson you just studied as their material. Stuck on a section? Open the tutor from
            the lesson instead of searching the web — the answer will be about your content.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>7 · Trust only measured progress</SectionTitle>
        <Prose>
          <p>
            Lessons are completed by finishing sections and passing end-of-lesson
            assessments; every graded attempt is recorded. The{" "}
            <strong>My Progress</strong> dashboard shows verified completions, skill
            breakdowns and revision queues — a truthful picture, not a vanity score.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <SectionTitle>8 · Preparing for IELTS or TOEFL? Use the Academy last</SectionTitle>
        <Prose>
          <p>
            Exam preparation works best on a base of general English. When you are ready, the{" "}
            <strong>Exam Academy</strong> builds an adaptive study plan, walks you through
            every module and measures readiness with six-mode mock exams — start it when
            conversation feels comfortable, not before.
          </p>
        </Prose>
      </Reveal>

      <Reveal mode="mount">
        <div className="mt-2 flex flex-wrap gap-3">
          <Button onClick={() => navigate({ name: "library" })}>
            Open the learning path
          </Button>
          <Button variant="outline" onClick={() => navigate({ name: "progress" })}>
            See your progress
          </Button>
        </div>
      </Reveal>
    </PageShell>
  );
}
