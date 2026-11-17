"use client";

/**
 * Shared evaluation report renderer (PROMPT 52).
 *
 * One report component used everywhere an evaluation is shown: the mock
 * result view's EvaluationPanel and the Evaluation Studio. Renders every
 * feedback element in a fixed order — overall estimate, criterion
 * estimates with quoted evidence, verified checks & rule-based findings
 * (including sentence structure, punctuation, repetition and pace),
 * grammar corrections, vocabulary, sentence feedback, irrelevant content,
 * missing requirements, organisation, pronunciation guidance,
 * development suggestions, recommendations, the learning loop
 * (weaknesses → lessons), the model response, the revision exercise,
 * confidence + limitations + disclaimers, and the teacher's human review
 * note when one exists.
 *
 * Every number and judgement is labelled with its provenance
 * (VERIFIED / RULE_BASED / AI_GENERATED / ESTIMATED / HUMAN_REVIEWED) so
 * the learner can always tell measurement from opinion — and the report
 * never claims to be an official IELTS or ETS score.
 */

import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BookOpen,
  CheckCircle2,
  CircleAlert,
  ClipboardList,
  FileText,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Mic,
  Minus,
  Quote,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type {
  EvaluationComparisonDto,
  EvaluationResultDto,
  EvaluationReviewDto,
  ProvenanceLabel,
} from "@/lib/exams/evaluation/types";
import { PROVENANCE_LEGEND } from "@/lib/exams/evaluation/types";

// ---------------------------------------------------------------------------
// Small presentational pieces
// ---------------------------------------------------------------------------

export function ProvenanceBadge({ label }: { label: ProvenanceLabel }) {
  const styles: Record<ProvenanceLabel, string> = {
    VERIFIED: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    RULE_BASED: "border-sky-500/40 bg-sky-500/10 text-sky-300",
    AI_GENERATED: "border-violet-500/40 bg-violet-500/10 text-violet-300",
    ESTIMATED: "border-amber-500/40 bg-amber-500/10 text-amber-300",
    HUMAN_REVIEWED: "border-teal-500/40 bg-teal-500/10 text-teal-300",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide",
        styles[label],
      )}
    >
      {label.replace("_", " ")}
    </span>
  );
}

export function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
      {icon}
      {children}
    </div>
  );
}

export function Delta({ value }: { value: number }) {
  if (value > 0) {
    return (
      <span className="inline-flex items-center gap-0.5 text-emerald-300">
        <ArrowUp className="size-3" aria-hidden /> +{value.toFixed(1)}
      </span>
    );
  }
  if (value < 0) {
    return (
      <span className="inline-flex items-center gap-0.5 text-rose-300">
        <ArrowDown className="size-3" aria-hidden /> {value.toFixed(1)}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-slate-400">
      <Minus className="size-3" aria-hidden /> 0.0
    </span>
  );
}

// ---------------------------------------------------------------------------
// The report
// ---------------------------------------------------------------------------

export function EvaluationReport({
  result,
  review,
}: {
  result: EvaluationResultDto;
  review?: EvaluationReviewDto;
}) {
  const isSpeaking = result.section === "speaking";
  return (
    <div className="space-y-4">
      {/* Human review (teacher note) — shown first when present: the layer the learner should trust most */}
      {review && review.status === "human_reviewed" ? (
        <div className="rounded-lg border border-teal-500/40 bg-teal-500/5 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <UserCheck className="size-4 text-teal-300" aria-hidden />
              <span className="text-sm font-semibold text-teal-200">
                Reviewed by a {review.reviewerRole === "admin" ? "senior teacher" : review.reviewerRole}
              </span>
            </div>
            <ProvenanceBadge label="HUMAN_REVIEWED" />
          </div>
          {review.reviewerNote ? (
            <p className="mt-1.5 text-xs leading-relaxed text-teal-100/90">{review.reviewerNote}</p>
          ) : null}
          <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500">
            This note was written by a human teacher after reading your response and the AI report. Where the
            teacher and the AI disagree, the teacher&rsquo;s judgement comes first.
          </p>
        </div>
      ) : null}

      {/* Overall */}
      {result.overall ? (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Scale className="size-4 text-amber-400" aria-hidden />
              <span className="text-sm font-semibold text-amber-300">{result.overall.label}</span>
            </div>
            <ProvenanceBadge label={result.overall.provenance} />
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{result.overall.explanation}</p>
        </div>
      ) : null}

      {/* Criteria */}
      {result.criteria.length > 0 ? (
        <div>
          <SectionTitle icon={<GraduationCap className="size-3.5" aria-hidden />}>
            Criterion estimates
          </SectionTitle>
          <div className="space-y-2">
            {result.criteria.map((criterion) => (
              <div key={criterion.key} className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium text-slate-200">{criterion.name}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-300">
                      {criterion.score.toFixed(1)}
                      <span className="font-normal text-slate-500"> / {criterion.maxScore}</span>
                    </span>
                    <ProvenanceBadge label={criterion.provenance} />
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{criterion.explanation}</p>
                {criterion.evidence.map((item, index) => (
                  <p key={index} className="mt-1.5 border-l-2 border-violet-500/40 pl-2 text-xs italic text-slate-400">
                    &ldquo;{item.quote}&rdquo;{item.note ? <span className="not-italic text-slate-500"> — {item.note}</span> : null}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Verified checks & rule-based findings (incl. sentence structure, punctuation, repetition, pace) */}
      {result.checks.length > 0 ? (
        <div>
          <SectionTitle icon={<ListChecks className="size-3.5" aria-hidden />}>
            Verified checks &amp; rule-based findings
          </SectionTitle>
          <ul className="space-y-1.5">
            {result.checks.map((check) => (
              <li key={check.id} className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs">
                {check.passed ? (
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-400" aria-hidden />
                ) : (
                  <XCircle className="mt-0.5 size-3.5 shrink-0 text-rose-400" aria-hidden />
                )}
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-1.5">
                    <span className={check.passed ? "text-slate-300" : "text-rose-200"}>{check.label}</span>
                    <ProvenanceBadge label={check.provenance} />
                  </span>
                  <span className="mt-0.5 block leading-relaxed text-slate-500">{check.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Grammar corrections */}
      {result.grammarCorrections.length > 0 ? (
        <div>
          <SectionTitle icon={<CircleAlert className="size-3.5" aria-hidden />}>Grammar corrections</SectionTitle>
          <ul className="space-y-1.5">
            {result.grammarCorrections.map((correction, index) => (
              <li key={index} className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-rose-300 line-through">{correction.original}</span>
                  <ArrowRight className="size-3 text-slate-500" aria-hidden />
                  <span className="text-emerald-300">{correction.corrected}</span>
                  <ProvenanceBadge label={correction.provenance} />
                </div>
                <p className="mt-1 leading-relaxed text-slate-500">{correction.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Vocabulary */}
      {result.vocabulary.length > 0 ? (
        <div>
          <SectionTitle icon={<BookOpen className="size-3.5" aria-hidden />}>Vocabulary improvements</SectionTitle>
          <ul className="space-y-1.5">
            {result.vocabulary.map((item, index) => (
              <li key={index} className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs">
                <span className="text-slate-300">{item.original}</span>
                <ArrowRight className="mx-1.5 inline size-3 text-slate-500" aria-hidden />
                <span className="text-emerald-300">{item.suggestion}</span>
                <p className="mt-1 leading-relaxed text-slate-500">{item.reason}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Sentence-level feedback */}
      {result.sentenceFeedback.length > 0 ? (
        <div>
          <SectionTitle icon={<Quote className="size-3.5" aria-hidden />}>Sentence-level feedback</SectionTitle>
          <ul className="space-y-1.5">
            {result.sentenceFeedback.map((item, index) => (
              <li key={index} className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs">
                <span
                  className={cn(
                    "font-medium",
                    item.kind === "strength" ? "text-emerald-300" : item.kind === "issue" ? "text-amber-300" : "text-slate-300",
                  )}
                >
                  {item.kind === "strength" ? "Works well" : item.kind === "issue" ? "To improve" : "Note"}:
                </span>
                <span className="mt-0.5 block italic text-slate-300">&ldquo;{item.quote}&rdquo;</span>
                <span className="mt-0.5 block leading-relaxed text-slate-500">{item.comment}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Irrelevant content */}
      {result.irrelevantContent.length > 0 ? (
        <div>
          <SectionTitle icon={<AlertTriangle className="size-3.5 text-amber-400" aria-hidden />}>
            Off-task content
          </SectionTitle>
          <ul className="space-y-1.5">
            {result.irrelevantContent.map((item, index) => (
              <li key={index} className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-2 text-xs">
                <p className="italic text-amber-100/90">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-1 leading-relaxed text-slate-500">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Missing requirements + organisation */}
      {result.missingRequirements.length > 0 ? (
        <div>
          <SectionTitle icon={<AlertTriangle className="size-3.5 text-amber-400" aria-hidden />}>
            Missing task requirements
          </SectionTitle>
          <ul className="space-y-1 text-xs text-rose-200">
            {result.missingRequirements.map((item, index) => (
              <li key={index}>· {item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {result.organisation.length > 0 ? (
        <div>
          <SectionTitle icon={<AlertTriangle className="size-3.5 text-amber-400" aria-hidden />}>
            Organisation problems
          </SectionTitle>
          <ul className="space-y-1.5">
            {result.organisation.map((item, index) => (
              <li key={index} className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs">
                <span className="text-amber-200">{item.issue}</span>
                <span className="mt-0.5 block text-slate-500">Fix: {item.suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Speaking extras */}
      {isSpeaking ? (
        <>
          {result.pronunciation.length > 0 ? (
            <div>
              <SectionTitle icon={<Mic className="size-3.5" aria-hidden />}>Pronunciation guidance</SectionTitle>
              <ul className="space-y-1.5">
                {result.pronunciation.map((item, index) => (
                  <li key={index} className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs">
                    <span className="font-medium text-sky-300">{item.aspect}:</span>{" "}
                    <span className="leading-relaxed text-slate-400">{item.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                Accent note: accents and World English varieties are never treated as errors — guidance targets
                intelligibility only.
              </p>
            </div>
          ) : null}
          {result.developmentSuggestions.length > 0 ? (
            <div>
              <SectionTitle icon={<Sparkles className="size-3.5" aria-hidden />}>Develop your response</SectionTitle>
              <ul className="space-y-1 text-xs text-slate-400">
                {result.developmentSuggestions.map((item, index) => (
                  <li key={index}>· {item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {result.transcript ? (
            <div>
              <SectionTitle icon={<Quote className="size-3.5" aria-hidden />}>
                Transcript used ({result.transcriptSource === "browser-stt" || result.transcriptSource === "server-stt" ? "speech recognition" : result.transcriptSource === "typed" ? "typed" : "source not recorded"})
              </SectionTitle>
              <p className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-xs italic leading-relaxed text-slate-400">
                {result.transcript}
              </p>
            </div>
          ) : null}
        </>
      ) : null}

      {/* Model response */}
      {result.modelResponse ? (
        <div>
          <SectionTitle icon={<FileText className="size-3.5" aria-hidden />}>Model response (study example)</SectionTitle>
          <div className="rounded-lg border border-violet-500/25 bg-violet-500/5 p-2.5">
            <p className="whitespace-pre-wrap text-xs leading-relaxed text-slate-200">{result.modelResponse.text}</p>
            <div className="mt-2 flex items-start justify-between gap-2 border-t border-violet-500/20 pt-2">
              <p className="text-[10px] leading-relaxed text-violet-200/80">{result.modelResponse.note}</p>
              <ProvenanceBadge label={result.modelResponse.provenance} />
            </div>
            <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500">
              A study example for this task type — not the only correct answer, and not a rewrite of your response.
            </p>
          </div>
        </div>
      ) : null}

      {/* Recommendations */}
      {result.recommendations.length > 0 ? (
        <div>
          <SectionTitle icon={<Lightbulb className="size-3.5" aria-hidden />}>Improvement recommendations</SectionTitle>
          <ul className="space-y-1 text-xs text-slate-400">
            {result.recommendations.map((item, index) => (
              <li key={index}>· {item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Learning loop: weaknesses → lessons */}
      {result.weaknesses.length > 0 ? (
        <div>
          <SectionTitle icon={<GraduationCap className="size-3.5" aria-hidden />}>
            Your learning loop
          </SectionTitle>
          <div className="space-y-2">
            {result.weaknesses.map((weakness) => (
              <div key={weakness.area} className="rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-slate-200">{weakness.label}</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      "px-1.5 py-0 text-[9px]",
                      weakness.severity === "major"
                        ? "border-rose-500/40 text-rose-300"
                        : weakness.severity === "moderate"
                          ? "border-amber-500/40 text-amber-300"
                          : "border-slate-600 text-slate-400",
                    )}
                  >
                    {weakness.severity}
                  </Badge>
                </div>
                <p className="mt-1 leading-relaxed text-slate-500">{weakness.evidence}</p>
                {weakness.lessons.length > 0 ? (
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {weakness.lessons.map((lesson) => (
                      <button
                        key={lesson.href}
                        type="button"
                        onClick={() => {
                          window.location.hash = lesson.href.startsWith("#") ? lesson.href.slice(1) : lesson.href;
                        }}
                        className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300 transition-colors hover:bg-sky-500/20"
                      >
                        {lesson.title} · {lesson.minutes}m
                      </button>
                    ))}
                  </div>
                ) : null}
                <ul className="mt-1.5 space-y-0.5 text-[10px] text-slate-500">
                  {weakness.practice.slice(0, 2).map((item, index) => (
                    <li key={index}>▸ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Revision exercise */}
      {result.revisionExercise ? (
        <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
            <ClipboardList className="size-3.5" aria-hidden /> {result.revisionExercise.title}
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{result.revisionExercise.instructions}</p>
          {result.revisionExercise.focusAreas.length > 0 ? (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {result.revisionExercise.focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200">
                  {area}
                </span>
              ))}
            </div>
          ) : null}
          <ol className="mt-2 space-y-1.5">
            {result.revisionExercise.steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 text-[9px] font-semibold text-emerald-300">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {/* Confidence */}
      <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
            <ShieldCheck className="size-3.5 text-slate-400" aria-hidden /> Confidence in these estimates
          </div>
          <Badge
            variant="outline"
            className={cn(
              "px-1.5 py-0 text-[9px]",
              result.confidence.level === "higher"
                ? "border-emerald-500/40 text-emerald-300"
                : result.confidence.level === "moderate"
                  ? "border-amber-500/40 text-amber-300"
                  : "border-rose-500/40 text-rose-300",
            )}
          >
            {result.confidence.level}
          </Badge>
        </div>
        <ul className="mt-1.5 space-y-1 text-[10px] leading-relaxed text-slate-500">
          {result.confidence.reasons.map((reason, index) => (
            <li key={index}>· {reason}</li>
          ))}
        </ul>
      </div>

      {/* Limitations + disclaimers */}
      {result.limitations.length > 0 ? (
        <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-2.5">
          <SectionTitle icon={<AlertTriangle className="size-3.5 text-sky-400" aria-hidden />}>Limitations</SectionTitle>
          <ul className="space-y-1 text-[11px] leading-relaxed text-slate-400">
            {result.limitations.map((item, index) => (
              <li key={index}>· {item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="space-y-1 border-t border-slate-800/60 pt-2">
        {result.disclaimers.map((item, index) => (
          <p key={index} className="text-[10px] leading-relaxed text-slate-600">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Comparison (revision vs base)
// ---------------------------------------------------------------------------

export function ComparisonReport({ comparison }: { comparison: EvaluationComparisonDto }) {
  return (
    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
        <RotateCcw className="size-3.5" aria-hidden /> Improvement tracked
      </div>
      <div className="mt-2 grid gap-1.5 text-xs">
        {comparison.overallDelta !== null ? (
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-400">Overall</span>
            <span className="flex items-center gap-2 text-slate-300">
              {comparison.overallBefore?.toFixed(1) ?? "—"} → {comparison.overallAfter?.toFixed(1) ?? "—"}
              <Delta value={comparison.overallDelta} />
            </span>
          </div>
        ) : null}
        {comparison.criteria.map((criterion) => (
          <div key={criterion.key} className="flex items-center justify-between gap-2">
            <span className="text-slate-400">{criterion.name}</span>
            <span className="flex items-center gap-2 text-slate-300">
              {criterion.before.toFixed(1)} → {criterion.after.toFixed(1)}
              <Delta value={criterion.delta} />
            </span>
          </div>
        ))}
        {comparison.resolvedWeaknesses.length > 0 ? (
          <p className="mt-1 text-emerald-300">
            Resolved: {comparison.resolvedWeaknesses.join(", ")}
          </p>
        ) : null}
        {comparison.remainingWeaknesses.length > 0 ? (
          <p className="text-amber-300">Still to work on: {comparison.remainingWeaknesses.join(", ")}</p>
        ) : null}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Provenance legend (shared by panel + studio)
// ---------------------------------------------------------------------------

export function ProvenanceLegend() {
  return (
    <div className="border-t border-slate-800/60 pt-2">
      <p className="mb-1.5 text-[10px] uppercase tracking-wide text-slate-500">How to read these labels</p>
      <ul className="space-y-1">
        {PROVENANCE_LEGEND.map((entry) => (
          <li key={entry.label} className="flex items-start gap-2 text-[10px] leading-relaxed text-slate-500">
            <ProvenanceBadge label={entry.label} />
            <span>{entry.meaning}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
