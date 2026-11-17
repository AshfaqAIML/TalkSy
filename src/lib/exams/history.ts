/**
 * Examination history: past attempts, trends and same-version comparisons.
 *
 * Every submitted attempt is stored (MockTestAttempt), so this module only
 * reads. Comparisons are only offered between attempts of the same exam type
 * (examKey+variant) and the same specification version — mixing formats
 * would compare apples with oranges, which the engine refuses to do.
 */

import { db } from "@/lib/db";
import { attemptModeLabel, isTimedMode, type ExamKey, type SectionKey, type SectionScore } from "./types";

export type AttemptHistoryEntry = {
  attemptId: string;
  mockTitle: string;
  mockTestId: string;
  examKey: string;
  variant: string;
  specName: string;
  specVersion: number;
  mode: string;
  modeLabel: string;
  timed: boolean;
  status: string;
  /** PROMPT 51: true for in-progress and abandoned (unfinished) attempts. */
  unfinished: boolean;
  startedAt: string | null;
  totalScore: number | null;
  scoreDisplay: string | null;
  submittedAt: string | null;
  durationSec: number | null;
  questionCount: number;
  answeredCount: number;
  sectionScores: SectionScore[];
};

export type TrendPoint = {
  date: string;
  attemptId: string;
  label: string;
  overall: number | null;
  sections: Partial<Record<SectionKey, number>>;
};

export type TrendSeries = {
  examKey: string;
  variant: string;
  points: TrendPoint[];
  firstOverall: number | null;
  lastOverall: number | null;
  bestOverall: number | null;
  improvement: number | null; // last − first (exam-condition runs only)
  attemptsCounted: number;
};

export type HistoryDto = {
  attempts: AttemptHistoryEntry[];
  trends: TrendSeries[];
};

function parseSectionScores(raw: string | null): SectionScore[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as SectionScore[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function listAttemptHistory(
  userId: string,
  filters: { examKey?: ExamKey; variant?: string } = {},
): Promise<HistoryDto> {
  const attempts = await db.mockTestAttempt.findMany({
    where: {
      userId,
      status: { in: ["in_progress", "submitted", "scored", "abandoned"] },
      ...(filters.examKey
        ? { mockTest: { examKey: filters.examKey, ...(filters.variant ? { variant: filters.variant } : {}) } }
        : {}),
    },
    // Unfinished attempts have no submittedAt — order by startedAt and
    // re-sort in JS so abandoned/in-progress rows land chronologically.
    orderBy: { startedAt: "asc" },
    take: 150,
    include: {
      mockTest: { select: { title: true, examKey: true, variant: true, spec: { select: { name: true, version: true } } } },
      responses: { select: { answer: true } },
    },
  });

  const entries: AttemptHistoryEntry[] = [];
  for (const attempt of attempts) {
    // Answered count: responses whose stored answer is real content.
    const answered = attempt.responses.filter((response) => {
      if (!response.answer) return false;
      try {
        const parsed = JSON.parse(response.answer) as { text?: string; option?: number; blanks?: string[]; words?: string[]; value?: number; options?: number[]; pairs?: Record<string, string> };
        if (parsed && typeof parsed === "object") {
          if (typeof parsed.text === "string" && parsed.text.trim()) return true;
          if (typeof parsed.option === "number") return true;
          if (Array.isArray(parsed.options) && parsed.options.length > 0) return true;
          if (typeof parsed.value === "number") return true;
          if (Array.isArray(parsed.blanks) && parsed.blanks.some((b) => b && b.trim())) return true;
          if (Array.isArray(parsed.words) && parsed.words.some((w) => w && w.trim())) return true;
          if (parsed.pairs && Object.keys(parsed.pairs).length > 0) return true;
        }
        return false;
      } catch {
        return false;
      }
    }).length;
    const questionCount = await db.mockTestQuestion.count({
      where: { section: { mockTest: { attempts: { some: { id: attempt.id } } } } },
    });
    entries.push({
      attemptId: attempt.id,
      mockTitle: attempt.mockTest.title,
      mockTestId: attempt.mockTestId,
      examKey: attempt.mockTest.examKey,
      variant: attempt.mockTest.variant,
      specName: attempt.mockTest.spec.name,
      specVersion: attempt.mockTest.spec.version,
      mode: attempt.mode,
      modeLabel: attemptModeLabel(attempt.mode),
      timed: isTimedMode(attempt.mode, attempt.timed),
      status: attempt.status,
      unfinished: attempt.status === "in_progress" || attempt.status === "abandoned",
      startedAt: attempt.startedAt.toISOString(),
      totalScore: attempt.totalScore,
      scoreDisplay: attempt.scoreDisplay,
      submittedAt: attempt.submittedAt?.toISOString() ?? null,
      durationSec: attempt.submittedAt
        ? Math.max(0, Math.round((attempt.submittedAt.getTime() - attempt.startedAt.getTime()) / 1000))
        : null,
      questionCount,
      answeredCount: answered,
      sectionScores: parseSectionScores(attempt.sectionScores),
    });
  }
  entries.reverse(); // newest first for the list

  // Trends per (examKey, variant): exam-condition runs only (timed mock
  // examinations); untimed practice runs and unfinished attempts are
  // excluded from improvement math.
  const groups = new Map<string, AttemptHistoryEntry[]>();
  for (const entry of entries) {
    if (!entry.timed) continue;
    if (entry.unfinished || entry.totalScore == null) continue;
    if (entry.mode !== "full_mock" && entry.mode !== "exam" && entry.mode !== "section" && entry.mode !== "diagnostic") continue;
    const key = `${entry.examKey}::${entry.variant}`;
    const list = groups.get(key) ?? [];
    list.push(entry);
    groups.set(key, list);
  }
  const trends: TrendSeries[] = [];
  for (const [key, list] of groups) {
    // chronological
    const chrono = [...list].sort((a, b) => (a.submittedAt ?? "").localeCompare(b.submittedAt ?? ""));
    const points: TrendPoint[] = chrono.map((entry) => ({
      date: entry.submittedAt ?? "",
      attemptId: entry.attemptId,
      label: entry.mockTitle,
      overall: entry.totalScore,
      sections: Object.fromEntries(entry.sectionScores.map((s) => [s.section, s.score])) as Partial<Record<SectionKey, number>>,
    }));
    const overalls = points.map((p) => p.overall).filter((v): v is number => typeof v === "number");
    trends.push({
      examKey: key.split("::")[0],
      variant: key.split("::")[1] ?? "",
      points,
      firstOverall: overalls.length > 0 ? overalls[0] : null,
      lastOverall: overalls.length > 0 ? overalls[overalls.length - 1] : null,
      bestOverall: overalls.length > 0 ? Math.max(...overalls) : null,
      improvement:
        overalls.length >= 2
          ? Math.round((overalls[overalls.length - 1] - overalls[0]) * 2) / 2
          : null,
      attemptsCounted: points.length,
    });
  }

  return { attempts: entries, trends };
}

export type QuestionDiff = {
  sameMock: boolean;
  improved: number;
  regressed: number;
  stillWrong: number;
  stillRight: number;
  newlyUnanswered: number;
};

export type ComparisonDto = {
  ok: true;
  a: AttemptHistoryEntry;
  b: AttemptHistoryEntry;
  overallDelta: number | null;
  sectionDeltas: Array<{ section: SectionKey; a: number | null; b: number | null; delta: number | null }>;
  durationDeltaSec: number | null;
  questionDiff: QuestionDiff | null;
} | { ok: false; reason: string };

/**
 * Compare two attempts. Only permitted within the same exam type AND the
 * same specification version — anything else is refused.
 */
export async function compareAttempts(userId: string, idA: string, idB: string): Promise<ComparisonDto> {
  const rows = await db.mockTestAttempt.findMany({
    where: { userId, id: { in: [idA, idB] }, status: { in: ["submitted", "scored"] } },
    include: {
      mockTest: { select: { title: true, examKey: true, variant: true, spec: { select: { name: true, version: true } } } },
      responses: { select: { questionId: true, answer: true, autoScore: true } },
    },
  });
  const a = rows.find((row) => row.id === idA);
  const b = rows.find((row) => row.id === idB);
  if (!a || !b) return { ok: false, reason: "Both attempts must exist and be submitted." };

  if (a.mockTest.examKey !== b.mockTest.examKey || a.mockTest.variant !== b.mockTest.variant) {
    return { ok: false, reason: "Attempts must be from the same examination type." };
  }
  if (a.mockTest.spec.version !== b.mockTest.spec.version) {
    return {
      ok: false,
      reason: `Attempts must share a specification version (v${a.mockTest.spec.version} vs v${b.mockTest.spec.version}) — formats differ.`,
    };
  }

  const toEntry = (row: (typeof rows)[number]): AttemptHistoryEntry => {
    const answered = row.responses.filter((response) => response.answer && response.answer !== "null").length;
    const durationSec = row.submittedAt
      ? Math.max(0, Math.round((row.submittedAt.getTime() - row.startedAt.getTime()) / 1000))
      : null;
    return {
      attemptId: row.id,
      mockTitle: row.mockTest.title,
      mockTestId: row.mockTestId,
      examKey: row.mockTest.examKey,
      variant: row.mockTest.variant,
      specName: row.mockTest.spec.name,
      specVersion: row.mockTest.spec.version,
      mode: row.mode,
      modeLabel: attemptModeLabel(row.mode),
      timed: isTimedMode(row.mode, row.timed),
      status: row.status,
      unfinished: false,
      startedAt: row.startedAt.toISOString(),
      totalScore: row.totalScore,
      scoreDisplay: row.scoreDisplay,
      submittedAt: row.submittedAt?.toISOString() ?? null,
      durationSec,
      questionCount: 0,
      answeredCount: answered,
      sectionScores: parseSectionScores(row.sectionScores),
    };
  };
  const entryA = toEntry(a);
  const entryB = toEntry(b);

  const sections = new Set<SectionKey>([
    ...entryA.sectionScores.map((s) => s.section),
    ...entryB.sectionScores.map((s) => s.section),
  ]);
  const sectionDeltas = [...sections].map((section) => {
    const scoreA = entryA.sectionScores.find((s) => s.section === section)?.score ?? null;
    const scoreB = entryB.sectionScores.find((s) => s.section === section)?.score ?? null;
    return {
      section,
      a: scoreA,
      b: scoreB,
      delta: scoreA !== null && scoreB !== null ? Math.round((scoreB - scoreA) * 2) / 2 : null,
    };
  });

  const overallDelta =
    entryA.totalScore != null && entryB.totalScore != null
      ? Math.round((entryB.totalScore - entryA.totalScore) * 2) / 2
      : null;
  const durationDeltaSec =
    entryA.durationSec != null && entryB.durationSec != null ? entryB.durationSec - entryA.durationSec : null;

  let questionDiff: QuestionDiff | null = null;
  if (a.mockTestId === b.mockTestId) {
    // Same test: a true question-level diff.
    const mapA = new Map(a.responses.map((r) => [r.questionId, r]));
    const mapB = new Map(b.responses.map((r) => [r.questionId, r]));
    const questionIds = new Set([...mapA.keys(), ...mapB.keys()]);
    let improved = 0;
    let regressed = 0;
    let stillWrong = 0;
    let stillRight = 0;
    let newlyUnanswered = 0;
    for (const questionId of questionIds) {
      const responseA = mapA.get(questionId);
      const responseB = mapB.get(questionId);
      const rightA = (responseA?.autoScore ?? 0) > 0;
      const rightB = (responseB?.autoScore ?? 0) > 0;
      const answeredA = Boolean(responseA?.answer && responseA.answer !== "null");
      const answeredB = Boolean(responseB?.answer && responseB.answer !== "null");
      if (!answeredA && answeredB) {
        improved += 1;
      } else if (answeredA && !answeredB) {
        newlyUnanswered += 1;
      } else if (!answeredA && !answeredB) {
        stillWrong += 1;
      } else if (rightA && rightB) {
        stillRight += 1;
      } else if (!rightA && rightB) {
        improved += 1;
      } else if (rightA && !rightB) {
        regressed += 1;
      } else {
        stillWrong += 1;
      }
    }
    questionDiff = { sameMock: true, improved, regressed, stillWrong, stillRight, newlyUnanswered };
  }

  return {
    ok: true,
    a: entryA,
    b: entryB,
    overallDelta,
    sectionDeltas,
    durationDeltaSec,
    questionDiff,
  };
}
