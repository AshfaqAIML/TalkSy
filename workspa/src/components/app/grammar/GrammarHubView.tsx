"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Scale,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { partsOfSpeech, POS_LESSON_MAP } from "@/data/grammar/parts-of-speech";
import { ROLE_STYLES } from "@/lib/grammar/roles";
import { cn } from "@/lib/utils";

/**
 * Grammar School hub: entry points to the parts-of-speech modules, the
 * Tense Explorer, the Grammar Error Clinic and the Sentence Construction
 * Laboratory.
 */
export function GrammarHubView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
          <GraduationCap className="size-6 text-primary" aria-hidden />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grammar School</h1>
          <p className="text-sm text-muted-foreground">
            Understand the system behind English — then build with it.
          </p>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          href="#/grammar/tenses"
          className="group rounded-2xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Scale className="size-5 text-primary" aria-hidden />
          </span>
          <h2 className="mt-3 font-semibold">Tense Explorer</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Compare all 12 tenses side by side — meaning, structure, verb
            forms, questions and time expressions.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Open explorer <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </Link>

        <Link
          href="#/grammar/clinic"
          className="group rounded-2xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Stethoscope className="size-5 text-primary" aria-hidden />
          </span>
          <h2 className="mt-3 font-semibold">Grammar Error Clinic</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Submit your own sentences and get instant corrections with
            explanations — the clinic remembers your error patterns.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Open clinic <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </Link>

        <Link
          href="#/lab"
          className="group rounded-2xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <FlaskConical className="size-5 text-primary" aria-hidden />
          </span>
          <h2 className="mt-3 font-semibold">Sentence Lab</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Seven construction stages with word tiles, structure inspection
            and challenge rounds.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Enter the lab <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </Link>
      </div>

      {/* Parts of speech */}
      <h2 className="mt-12 flex items-center gap-2 text-xl font-semibold">
        <BookOpen className="size-5 text-primary" aria-hidden />
        The eight parts of speech
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Every module includes definition, purpose, categories, examples,
        sentence use, common mistakes and skill activities.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {partsOfSpeech.map((module) => {
          const style = ROLE_STYLES[module.roleKey];
          return (
            <Card key={module.id} className="group transition-all hover:border-primary/40 hover:shadow-md">
              <CardContent className="flex flex-col gap-2 p-4">
                <span
                  className={cn(
                    "w-fit rounded-lg border-2 px-2.5 py-1 text-sm font-bold",
                    style.tileClass,
                  )}
                >
                  {module.name}
                </span>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {module.definition}
                </p>
                <p className="text-xs text-muted-foreground">
                  {module.categories.length} categories ·{" "}
                  {module.commonMistakes.length} common mistakes
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-1 justify-between"
                >
                  <Link href={`#/lesson/${POS_LESSON_MAP[module.id]}`}>
                    Open lesson
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
