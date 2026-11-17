/**
 * Section-performance diagnostics.
 *
 * Estimates are built from three evidence layers, most authoritative last:
 *   1. Onboarding self-rating (CEFR) — always available, low confidence.
 *   2. Common-curriculum attempts (Reading Room, Listening Lab, Writing
 *      Studio, Speaking Lab) — reuses data the platform already records.
 *      This is the common-English-foundation bridge working in reverse:
 *      everyday practice informs exam readiness without a separate test.
 *   3. Mock-test results — exam-format evidence, highest weight.
 *
 * Estimates are stored per user+exam+section (ExamSectionEstimate) and
 * re-read by the dashboard, recommendation engine and study planner.
 */

import { db } from "@/lib/db";
import { cefrToSectionBaseline } from "./scoring";
import {
  SECTION_KEYS,
  type ExamKey,
  type SectionEstimateDto,
  type SectionKey,
  type SpecDto,
} from "./types";

type Evidence = {
  /** 0..1 quality signal for the section. */
  ratio: number;
  /** How many observations back the ratio. */
  count: number;
  label: string;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function roundHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

async function readingEvidence(userId: string): Promise<Evidence | null> {
  const attempts = await db.readingAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 60,
    select: { isCorrect: true },
  });
  if (attempts.length < 5) return null;
  const correct = attempts.filter((a) => a.isCorrect).length;
  return {
    ratio: correct / attempts.length,
    count: attempts.length,
    label: `${attempts.length} reading answers, ${Math.round((correct / attempts.length) * 100)}% correct`,
  };
}

async function listeningEvidence(userId: string): Promise<Evidence | null> {
  const attempts = await db.listeningAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 60,
    select: { isCorrect: true },
  });
  if (attempts.length < 5) return null;
  const correct = attempts.filter((a) => a.isCorrect).length;
  return {
    ratio: correct / attempts.length,
    count: attempts.length,
    label: `${attempts.length} listening answers, ${Math.round((correct / attempts.length) * 100)}% correct`,
  };
}

async function writingEvidence(userId: string): Promise<Evidence | null> {
  const submissions = await db.writingSubmission.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 8,
    select: { overall: true, wordCount: true },
  });
  if (submissions.length === 0) return null;
  const avg = submissions.reduce((sum, s) => sum + s.overall, 0) / submissions.length;
  if (avg <= 0) return null;
  return {
    ratio: clamp(avg / 100, 0, 1),
    count: submissions.length,
    label: `${submissions.length} writing submissions, avg score ${Math.round(avg)}/100`,
  };
}

async function speakingEvidence(userId: string): Promise<Evidence | null> {
  const attempts = await db.speakingAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 12,
    select: { score: true },
  });
  if (attempts.length === 0) return null;
  const scored = attempts.filter((a) => a.score > 0);
  if (scored.length === 0) return null;
  const avg = scored.reduce((sum, a) => sum + a.score, 0) / scored.length;
  return {
    ratio: clamp(avg / 100, 0, 1),
    count: scored.length,
    label: `${scored.length} speaking attempts, avg match ${Math.round(avg)}%`,
  };
}

const EVIDENCE_LOADERS: Record<
  SectionKey,
  (userId: string) => Promise<Evidence | null>
> = {
  listening: listeningEvidence,
  reading: readingEvidence,
  writing: writingEvidence,
  speaking: speakingEvidence,
};

export type EstimateInput = {
  userId: string;
  spec: SpecDto;
  cefr: string;
  difficultSections: SectionKey[];
};

/**
 * Recompute and persist all four section estimates. Returns DTOs for the
 * dashboard. Mock evidence (latest scored attempt) is layered on top of
 * curriculum evidence and the CEFR baseline.
 */
export async function refreshSectionEstimates(input: EstimateInput): Promise<SectionEstimateDto[]> {
  const { userId, spec, cefr, difficultSections } = input;
  const model = spec.scoringModel;
  const min = model.minSectionScore;
  const max = model.maxSectionScore;
  const results: SectionEstimateDto[] = [];

  // Prefer exam-condition (timed) evidence: an untimed practice run is a
  // useful signal but not exam-condition proof, so it is used only when no
  // timed attempt exists yet.
  const mockTestFilter = { examKey: spec.examKey, variant: spec.variant } as const;
  let lastScoredAttempt = await db.mockTestAttempt.findFirst({
    where: { userId, status: "scored", mode: "exam", mockTest: mockTestFilter },
    orderBy: { submittedAt: "desc" },
    select: { sectionScores: true },
  });
  if (!lastScoredAttempt) {
    lastScoredAttempt = await db.mockTestAttempt.findFirst({
      where: { userId, status: "scored", mockTest: mockTestFilter },
      orderBy: { submittedAt: "desc" },
      select: { sectionScores: true },
    });
  }
  let mockScores: Partial<Record<SectionKey, number>> = {};
  if (lastScoredAttempt?.sectionScores) {
    try {
      const parsed = JSON.parse(lastScoredAttempt.sectionScores) as Array<{
        section: SectionKey;
        score: number;
      }>;
      mockScores = Object.fromEntries(parsed.map((s) => [s.section, s.score]));
    } catch {
      mockScores = {};
    }
  }

  for (const section of SECTION_KEYS) {
    const baseline = cefrToSectionBaseline(model.kind, cefr);
    let estimate = baseline;
    let confidence = 0.25;
    const evidence: string[] = [`Self-rated ${cefr === "UNKNOWN" ? "level unknown" : `level ${cefr}`}`];
    let weaknesses: string[] = [];
    const strengths: string[] = [];

    const curriculum = await EVIDENCE_LOADERS[section](userId);
    if (curriculum) {
      // Accuracy maps onto the band range above the midpoint: getting
      // ~70% right is a solid mid-band performance, not a top one.
      const evidenceScore = clamp(
        min + curriculum.ratio * (max - min) * 0.9,
        min,
        max,
      );
      const evidenceConfidence = clamp(0.2 + curriculum.count / 100, 0.2, 0.6);
      estimate = baseline * (1 - evidenceConfidence) + evidenceScore * evidenceConfidence;
      confidence = 0.25 + evidenceConfidence * 0.5;
      evidence.push(curriculum.label);
      if (curriculum.ratio < 0.55) {
        weaknesses.push(`${section} accuracy ${Math.round(curriculum.ratio * 100)}% in everyday practice`);
      } else if (curriculum.ratio > 0.8) {
        strengths.push(`Strong ${section} fundamentals (${Math.round(curriculum.ratio * 100)}% correct)`);
      }
    }

    const mockScore = mockScores[section];
    if (typeof mockScore === "number") {
      estimate = mockScore; // exam-format evidence wins outright
      confidence = 0.9;
      evidence.push(`Latest mock ${model.kind === "IELTS_BAND" ? "band" : "band"} ${mockScore.toFixed(1)}`);
    }

    if (difficultSections.includes(section)) {
      weaknesses.push(`You flagged ${section} as difficult`);
    }

    const estimated = roundHalf(clamp(estimate, min, max));
    if (weaknesses.length === 0 && estimated >= (min + max) / 2 + 0.5) {
      strengths.push(`Estimated above the mid range for ${spec.name}`);
    }

    results.push({
      section,
      estimated,
      confidence: Number(confidence.toFixed(2)),
      strengths,
      weaknesses,
    });

    await db.examSectionEstimate.upsert({
      where: { userId_examKey_section: { userId, examKey: spec.examKey, section } },
      create: {
        userId,
        examKey: spec.examKey,
        section,
        estimated,
        confidence: Number(confidence.toFixed(2)),
        evidence: JSON.stringify({ sources: evidence, strengths, weaknesses }),
      },
      update: {
        estimated,
        confidence: Number(confidence.toFixed(2)),
        evidence: JSON.stringify({ sources: evidence, strengths, weaknesses }),
      },
    });
  }

  return results;
}

export async function getSectionEstimates(
  userId: string,
  examKey: ExamKey,
): Promise<SectionEstimateDto[]> {
  const rows = await db.examSectionEstimate.findMany({
    where: { userId, examKey },
  });
  const bySection = new Map(rows.map((row) => [row.section, row]));
  return SECTION_KEYS.map((section) => {
    const row = bySection.get(section);
    if (!row) {
      return { section, estimated: 0, confidence: 0, strengths: [], weaknesses: [] };
    }
    let strengths: string[] = [];
    let weaknesses: string[] = [];
    try {
      const evidence = JSON.parse(row.evidence) as {
        sources?: string[];
        strengths?: string[];
        weaknesses?: string[];
      };
      strengths = evidence.strengths ?? [];
      weaknesses = evidence.weaknesses ?? [];
    } catch {
      strengths = [];
      weaknesses = [];
    }
    return {
      section,
      estimated: row.estimated,
      confidence: row.confidence,
      strengths,
      weaknesses,
    };
  });
}
