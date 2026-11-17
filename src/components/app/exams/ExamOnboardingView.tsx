"use client";

/**
 * Exam-preparation onboarding wizard. Collects the goal questions:
 * which exam, which variant, current proficiency, target score, exam
 * date, daily study time and most difficult sections. Answers can be
 * changed at any time from the dashboard ("Change my goals").
 */

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, GraduationCap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi, type ExamCard } from "@/lib/client/exam-api";

type SectionKey = "listening" | "reading" | "writing" | "speaking";

const CEFR_OPTIONS: Array<{ value: string; label: string; hint: string }> = [
  { value: "A1", label: "A1 — Beginner", hint: "I know basic words and simple phrases." },
  { value: "A2", label: "A2 — Elementary", hint: "I can handle simple, everyday exchanges." },
  { value: "B1", label: "B1 — Intermediate", hint: "I can deal with most situations while travelling." },
  { value: "B2", label: "B2 — Upper-intermediate", hint: "I can interact with fluency and spontaneity." },
  { value: "C1", label: "C1 — Advanced", hint: "I use English flexibly for academic and professional purposes." },
  { value: "C2", label: "C2 — Proficient", hint: "I express myself with ease on complex topics." },
];

export function ExamOnboardingView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const [exams, setExams] = useState<ExamCard[]>([]);
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Wizard state.
  const [examKey, setExamKey] = useState<"IELTS" | "TOEFL_IBT" | null>(null);
  const [variant, setVariant] = useState<string>("ACADEMIC");
  const [delivery, setDelivery] = useState<"STANDARD" | "UKVI">("STANDARD");
  const [ukviInfo, setUkviInfo] = useState<{
    label: string;
    summary: string;
    guidance: readonly string[];
    sourceLabel: string;
    sourceUrl: string;
  } | null>(null);
  const [proficiency, setProficiency] = useState<string>("B1");
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [targetScore, setTargetScore] = useState<number>(6.5);
  const [examDate, setExamDate] = useState<string>("");
  const [dailyMinutes, setDailyMinutes] = useState<number>(30);
  const [difficult, setDifficult] = useState<SectionKey[]>([]);

  useEffect(() => {
    (async () => {
      const [overview, profile] = await Promise.all([examApi.overview(), examApi.profile()]);
      if (overview.ok) {
        setExams(overview.data.exams);
        if (overview.data.ukvi) setUkviInfo(overview.data.ukvi);
      }
      if (profile.ok && profile.data.profile) {
        const p = profile.data.profile;
        if (p.onboarded) {
          setExamKey(p.examKey as "IELTS" | "TOEFL_IBT");
          setVariant(p.variant);
          setDelivery(p.delivery === "UKVI" ? "UKVI" : "STANDARD");
          setProficiency(p.proficiency);
          setCurrentScore(p.currentScoreEstimate ?? null);
          setTargetScore(p.targetScore);
          setExamDate(p.examDate ?? "");
          setDailyMinutes(p.dailyMinutes);
          setDifficult(p.difficultSections.filter((s): s is SectionKey => !!s));
        }
      }
      setLoaded(true);
    })();
  }, []);

  const selectedExam = useMemo(
    () => exams.find((e) => e.examKey === examKey && e.variant === variant) ?? null,
    [exams, examKey, variant],
  );
  const variantsForExam = useMemo(
    () => exams.filter((e) => e.examKey === examKey),
    [exams, examKey],
  );
  const isIelts = examKey === "IELTS";
  const maxScore = isIelts ? 9 : 6;
  const minScore = isIelts ? 4 : 2;
  const scoreStep = 0.5;

  const steps = useMemo(
    () =>
      isIelts
        ? [
            "Which examination?",
            "Which variant?",
            "UKVI delivery",
            "Current proficiency",
            "Current estimated score",
            "Target score",
            "Exam date",
            "Daily study time",
            "Difficult sections",
          ]
        : [
            "Which examination?",
            "Which variant?",
            "Current proficiency",
            "Current estimated score",
            "Target score",
            "Exam date",
            "Daily study time",
            "Difficult sections",
          ],
    [isIelts],
  );
  const stepCount = steps.length; // the variant step is informational for TOEFL
  const currentLabel = steps[step] ?? "";

  const canContinue = (): boolean => {
    if (currentLabel === "Which examination?") return examKey !== null;
    if (currentLabel === "Which variant?") return isIelts ? variant !== "" : true;
    if (currentLabel === "UKVI delivery") return true;
    if (currentLabel === "Current proficiency") return proficiency !== "UNKNOWN";
    if (currentLabel === "Target score") return targetScore >= minScore;
    return true;
  };

  const save = async () => {
    if (!examKey) return;
    setSaving(true);
    const response = await examApi.saveProfile({
      examKey,
      variant: isIelts ? variant : "STANDARD",
      delivery: isIelts ? delivery : "STANDARD",
      proficiency: proficiency as "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "UNKNOWN",
      currentScoreEstimate: currentScore,
      targetScore,
      examDate: examDate || null,
      dailyMinutes,
      difficultSections: difficult,
    });
    setSaving(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success("Preparation goals saved. Welcome to the Academy.");
    navigate({ name: "exams-dashboard" });
  };

  if (!loaded) {
    return (
      <div className="mx-auto flex max-w-2xl items-center justify-center px-4 py-24">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <button
          onClick={() => navigate({ name: "exams" })}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-300"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back to the Academy
        </button>

        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-amber-300">
              Step {Math.min(step + 1, stepCount)} of {stepCount}
            </span>
            <span className="text-slate-400">{steps[step]}</span>
          </div>
          <Progress
            value={((step + 1) / stepCount) * 100}
            className="h-1.5 bg-slate-800"
          />
        </div>

        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="p-6 sm:p-8">
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Which examination are you preparing for?
                </h2>
                <div className="grid gap-3">
                  {(["IELTS", "TOEFL_IBT"] as const).map((key) => {
                    const cards = exams.filter((e) => e.examKey === key);
                    const primary = cards[0];
                    if (!primary) return null;
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setExamKey(key);
                          setVariant(key === "IELTS" ? "ACADEMIC" : "STANDARD");
                          setTargetScore(key === "IELTS" ? 6.5 : 4.5);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-xl border p-4 text-left transition-colors",
                          examKey === key
                            ? "border-amber-400 bg-amber-400/10"
                            : "border-slate-800 bg-slate-900 hover:border-slate-600",
                        )}
                      >
                        <div>
                          <div className="font-semibold text-white">{primary.examLabel}</div>
                          <div className="text-sm text-slate-400">
                            {primary.scoringKind === "IELTS_BAND"
                              ? "Band scale 0–9 · 2h45m"
                              : "Band scale 1–6 (2026 format) · ~90 min"}
                          </div>
                        </div>
                        {examKey === key && <Check className="size-5 text-amber-400" aria-hidden />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Which {isIelts ? "IELTS variant" : "test"} are you taking?
                </h2>
                {!isIelts ? (
                  <div className="space-y-3">
                    <p className="text-sm text-slate-400">
                      The TOEFL iBT has a single standard variant. Since 21 January 2026 it
                      runs the shorter partly-adaptive format with the 1–6 band scale.
                    </p>
                    <div className="rounded-xl border border-amber-400 bg-amber-400/10 p-4 font-medium text-amber-200">
                      TOEFL iBT — standard (2026 format) <Check className="ml-2 inline size-4" aria-hidden />
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {variantsForExam.map((card) => (
                      <button
                        key={card.variant}
                        onClick={() => setVariant(card.variant)}
                        className={cn(
                          "flex items-center justify-between rounded-xl border p-4 text-left transition-colors",
                          variant === card.variant
                            ? "border-amber-400 bg-amber-400/10"
                            : "border-slate-800 bg-slate-900 hover:border-slate-600",
                        )}
                      >
                        <div>
                          <div className="font-semibold text-white">IELTS {card.variantLabel}</div>
                          <div className="text-sm text-slate-400">
                            {card.variant === "ACADEMIC"
                              ? "For university admission and professional registration."
                              : "For migration, work and secondary education."}
                          </div>
                        </div>
                        {variant === card.variant && <Check className="size-5 text-amber-400" aria-hidden />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentLabel === "UKVI delivery" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Are you taking IELTS for a UK visa (UKVI)?
                </h2>
                <p className="text-sm text-slate-400">
                  IELTS for UKVI is the same test — identical format, timing and difficulty —
                  taken in person at an official UKVI centre as a Secure English Language
                  Test. It changes how you book and where you sit it, not how you prepare.
                </p>
                <div className="grid gap-3">
                  {(
                    [
                      {
                        value: "STANDARD",
                        title: "Standard IELTS",
                        hint: "For university admission, work or migration where a SELT is not required.",
                      },
                      {
                        value: "UKVI",
                        title: "IELTS for UKVI",
                        hint: "When your visa route requires a Secure English Language Test — in person at an official UKVI centre.",
                      },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setDelivery(option.value)}
                      className={cn(
                        "flex items-center justify-between rounded-xl border p-4 text-left transition-colors",
                        delivery === option.value
                          ? "border-amber-400 bg-amber-400/10"
                          : "border-slate-800 bg-slate-900 hover:border-slate-600",
                      )}
                    >
                      <span>
                        <span className="block font-semibold text-white">{option.title}</span>
                        <span className="block text-sm text-slate-400">{option.hint}</span>
                      </span>
                      {delivery === option.value && <Check className="size-5 text-amber-400" aria-hidden />}
                    </button>
                  ))}
                </div>
                {delivery === "UKVI" && ukviInfo ? (
                  <div className="space-y-2 rounded-xl border border-amber-500/40 bg-amber-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                      Official UKVI guidance
                    </p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-slate-300">
                      {ukviInfo.guidance.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500">
                      Source: {ukviInfo.sourceLabel}
                    </p>
                  </div>
                ) : null}
              </div>
            )}

            {currentLabel === "Current proficiency" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">What is your current proficiency?</h2>
                <p className="text-sm text-slate-400">
                  Your best guess is fine — we refine this estimate from your practice and
                  mock results as you go.
                </p>
                <div className="grid gap-2.5">
                  {CEFR_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setProficiency(option.value)}
                      className={cn(
                        "rounded-xl border p-3.5 text-left transition-colors",
                        proficiency === option.value
                          ? "border-amber-400 bg-amber-400/10"
                          : "border-slate-800 bg-slate-900 hover:border-slate-600",
                      )}
                    >
                      <div className="font-medium text-white">{option.label}</div>
                      <div className="text-sm text-slate-400">{option.hint}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentLabel === "Current estimated score" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">
                  If you sat the exam today, what overall score would you expect?
                </h2>
                <p className="text-sm text-slate-400">
                  Your honest guess — it is used as context only. Measured evidence comes
                  from your practice and mock attempts, and the coach separates the two.
                </p>
                {currentScore === null ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setCurrentScore(isIelts ? 5.5 : 3)}
                      className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition-colors hover:border-amber-400"
                    >
                      <span className="block font-semibold text-white">I have a rough idea</span>
                      <span className="mt-1 block text-sm text-slate-400">
                        Pick a number on the {isIelts ? "0–9" : "1–6"} band scale.
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentScore(null)}
                      disabled
                      className="rounded-xl border border-amber-400 bg-amber-400/10 p-4 text-left"
                    >
                      <span className="flex items-center justify-between font-semibold text-amber-200">
                        I&apos;m not sure yet
                        <Check className="size-4 text-amber-400" aria-hidden />
                      </span>
                      <span className="mt-1 block text-sm text-slate-400">
                        Skip it — the coach measures you as you practise.
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center">
                      <div className="text-4xl font-bold text-amber-300">{currentScore.toFixed(1)}</div>
                      <p className="mt-1 text-sm text-slate-400">
                        {isIelts
                          ? "Overall band on the IELTS 0–9 scale."
                          : "Overall band on the TOEFL 1–6 scale (2026 format)."}
                      </p>
                    </div>
                    <div>
                      <Label className="text-slate-300">
                        Current estimate: {currentScore.toFixed(1)} / {maxScore.toFixed(1)}
                      </Label>
                      <Slider
                        value={[currentScore]}
                        min={minScore}
                        max={maxScore}
                        step={scoreStep}
                        onValueChange={(values) => setCurrentScore(values[0])}
                        className="pt-4"
                      />
                      <div className="mt-1 flex justify-between text-xs text-slate-500">
                        <span>{minScore.toFixed(1)}</span>
                        <span>{maxScore.toFixed(1)}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setCurrentScore(null)}
                      className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      Actually, I&apos;m not sure — skip this
                    </Button>
                  </>
                )}
              </div>
            )}

            {currentLabel === "Target score" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">What score are you targeting?</h2>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-4xl font-bold text-amber-300">
                    <Target className="size-7" aria-hidden />
                    {targetScore.toFixed(1)}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {isIelts
                      ? "IELTS overall band (0–9, half steps). Most universities ask 6.0–7.5."
                      : "TOEFL band (1–6, half steps). Band 5 aligns with CEFR C1."}
                  </p>
                </div>
                <div>
                  <Label className="text-slate-300">
                    Target: {targetScore.toFixed(1)} / {maxScore.toFixed(1)}
                  </Label>
                  <Slider
                    value={[targetScore]}
                    min={minScore}
                    max={maxScore}
                    step={scoreStep}
                    onValueChange={(values) => setTargetScore(values[0])}
                    className="pt-4"
                  />
                  <div className="mt-1 flex justify-between text-xs text-slate-500">
                    <span>{minScore.toFixed(1)}</span>
                    <span>{maxScore.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            )}

            {currentLabel === "Exam date" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  When do you plan to take the examination?
                </h2>
                <p className="text-sm text-slate-400">
                  Your study plan counts down to this date. You can skip it and add it later.
                </p>
                <Input
                  type="date"
                  value={examDate}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(event) => setExamDate(event.target.value)}
                  className="border-slate-700 bg-slate-950 text-slate-100"
                />
              </div>
            )}

            {currentLabel === "Daily study time" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">
                  How much time can you study daily?
                </h2>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center">
                  <div className="text-4xl font-bold text-amber-300">{dailyMinutes} min</div>
                  <p className="mt-1 text-sm text-slate-400">per day</p>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[15, 30, 45, 60, 90].map((minutes) => (
                    <button
                      key={minutes}
                      onClick={() => setDailyMinutes(minutes)}
                      className={cn(
                        "rounded-lg border py-2.5 text-sm font-medium transition-colors",
                        dailyMinutes === minutes
                          ? "border-amber-400 bg-amber-400/10 text-amber-200"
                          : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600",
                      )}
                    >
                      {minutes}m
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentLabel === "Difficult sections" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Which sections are most difficult?</h2>
                <p className="text-sm text-slate-400">
                  Pick any — these get priority in your daily plan. Change this any time.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {(selectedExam?.sections ?? []).map((section) => {
                    const key = section.key as SectionKey;
                    const active = difficult.includes(key);
                    return (
                      <button
                        key={section.key}
                        onClick={() =>
                          setDifficult((current) =>
                            active ? current.filter((s) => s !== key) : [...current, key],
                          )
                        }
                        className={cn(
                          "rounded-xl border p-4 text-left transition-colors",
                          active
                            ? "border-amber-400 bg-amber-400/10"
                            : "border-slate-800 bg-slate-900 hover:border-slate-600",
                        )}
                      >
                        <div className="font-medium text-white">{section.label}</div>
                        {active && <Check className="mt-2 size-4 text-amber-400" aria-hidden />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <Button
                variant="outline"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <ArrowLeft className="mr-1 size-4" aria-hidden /> Back
              </Button>
              {step < stepCount - 1 ? (
                <Button
                  disabled={!canContinue()}
                  onClick={() => setStep((s) => s + 1)}
                  className="bg-amber-400 text-slate-950 hover:bg-amber-300"
                >
                  Continue <ArrowRight className="ml-1 size-4" aria-hidden />
                </Button>
              ) : (
                <Button
                  disabled={saving || !examKey}
                  onClick={save}
                  className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
                >
                  <GraduationCap className="size-4" aria-hidden />
                  {saving ? "Saving…" : "Create my plan"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
