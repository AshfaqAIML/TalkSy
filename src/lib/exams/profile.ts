/**
 * Learner exam profile (onboarding answers + goal changes).
 */

import { db } from "@/lib/db";
import { examProfileInputSchema, type ExamProfileInput } from "./types";

export type ExamProfileRow = {
  id: string;
  userId: string;
  examKey: string;
  variant: string;
  delivery: string;
  proficiency: string;
  targetScore: number;
  examDate: Date | null;
  dailyMinutes: number;
  difficultSections: string;
  strongestSection: string | null;
  previousAttempts: string;
  currentScoreEstimate: number | null;
  onboardedAt: Date | null;
};

export type ExamProfileDto = {
  examKey: string;
  variant: string;
  delivery: string;
  proficiency: string;
  targetScore: number;
  examDate: string | null;
  dailyMinutes: number;
  difficultSections: string[];
  strongestSection: string | null;
  previousAttempts: Array<{ exam: string; overall: number; date?: string }>;
  /** Self-reported current score from onboarding (honest context, not evidence). */
  currentScoreEstimate: number | null;
  onboarded: boolean;
};

export function toProfileDto(row: ExamProfileRow): ExamProfileDto {
  let difficultSections: string[] = [];
  try {
    difficultSections = JSON.parse(row.difficultSections) as string[];
  } catch {
    difficultSections = [];
  }
  let previousAttempts: Array<{ exam: string; overall: number; date?: string }> = [];
  try {
    previousAttempts = JSON.parse(row.previousAttempts ?? "[]") as Array<{
      exam: string;
      overall: number;
      date?: string;
    }>;
  } catch {
    previousAttempts = [];
  }
  return {
    examKey: row.examKey,
    variant: row.variant,
    delivery: row.delivery ?? "STANDARD",
    proficiency: row.proficiency,
    targetScore: row.targetScore,
    examDate: row.examDate ? row.examDate.toISOString().slice(0, 10) : null,
    dailyMinutes: row.dailyMinutes,
    difficultSections,
    strongestSection: row.strongestSection ?? null,
    previousAttempts,
    currentScoreEstimate: row.currentScoreEstimate ?? null,
    onboarded: Boolean(row.onboardedAt),
  };
}

export async function getProfile(userId: string): Promise<ExamProfileDto | null> {
  const row = await db.examProfile.findUnique({ where: { userId } });
  return row ? toProfileDto(row as ExamProfileRow) : null;
}

/**
 * Create or update the profile (onboarding wizard and "change my goals").
 * Switching exam/variant resets pathway progress so the plan stays honest.
 */
export async function upsertProfile(
  userId: string,
  input: ExamProfileInput,
): Promise<ExamProfileDto> {
  const parsed = examProfileInputSchema.parse(input);
  const existing = await db.examProfile.findUnique({ where: { userId } });
  const switchingExam =
    existing && (existing.examKey !== parsed.examKey || existing.variant !== parsed.variant);

  const row = await db.examProfile.upsert({
    where: { userId },
    create: {
      userId,
      examKey: parsed.examKey,
      variant: parsed.variant,
      delivery: parsed.delivery,
      proficiency: parsed.proficiency,
      targetScore: parsed.targetScore,
      examDate: parsed.examDate ? new Date(parsed.examDate) : null,
      dailyMinutes: parsed.dailyMinutes,
      difficultSections: JSON.stringify(parsed.difficultSections),
      strongestSection: parsed.strongestSection ?? null,
      previousAttempts: JSON.stringify(parsed.previousAttempts ?? []),
      currentScoreEstimate: parsed.currentScoreEstimate ?? null,
      onboardedAt: new Date(),
    },
    update: {
      examKey: parsed.examKey,
      variant: parsed.variant,
      delivery: parsed.delivery,
      proficiency: parsed.proficiency,
      targetScore: parsed.targetScore,
      examDate: parsed.examDate ? new Date(parsed.examDate) : null,
      dailyMinutes: parsed.dailyMinutes,
      difficultSections: JSON.stringify(parsed.difficultSections),
      strongestSection: parsed.strongestSection ?? null,
      previousAttempts: JSON.stringify(parsed.previousAttempts ?? []),
      currentScoreEstimate: parsed.currentScoreEstimate ?? null,
      onboardedAt: existing?.onboardedAt ?? new Date(),
    },
  });

  if (switchingExam) {
    // Fresh start for the new exam: estimates and pathway progress belong
    // to the previous exam's scale and structure.
    await db.examSectionEstimate.deleteMany({ where: { userId, examKey: parsed.examKey } });
    await db.examStudyPlan.deleteMany({ where: { userId, examKey: parsed.examKey } });
    await db.examPathwayStepProgress.deleteMany({
      where: {
        userId,
        step: { module: { pathway: { examKey: parsed.examKey, variant: parsed.variant } } },
      },
    });
  }

  return toProfileDto(row as ExamProfileRow);
}
