import { json } from "@/lib/api-helpers";
import {
  searchQuestionBank,
  questionBankFacets,
  questionBankStats,
  BANK_SIZE_TARGETS,
  type QuestionBankFilters,
  type UnifiedDifficulty,
  type UnifiedExam,
  type UnifiedSection,
  type UnifiedVersion,
  type BankTopicDomain,
} from "@/data/exams/question-bank";

/**
 * GET /api/exams/bank — the searchable TALK SY Original Examination
 * Question Bank index (PROMPT 54).
 *
 * Query parameters:
 *   q           free-text search across id, task family, topic, summary,
 *               instructions and skills
 *   exam        ielts | toefl
 *   version     academic | general-training | common | toefl-2026
 *   section     listening | reading | writing | speaking
 *   type        an official task-family label (e.g. "Matching headings")
 *   difficulty  1–5
 *   topic       one of the twelve unified topic domains
 *   skill       a skill label (case-insensitive)
 *   page        1-based page number (default 1)
 *   pageSize    items per page, 1–100 (default 24)
 *   facets=1    include the facet counts computed for the ACTIVE filters
 *               (each facet dimension excludes its own filter)
 *   stats=1     include the whole-bank statistics block
 *
 * The response is the public-safe projection by construction: no answer
 * keys, models, keyword lists, lures or evidence quotes ever leave the
 * server through this route — writing and speaking items expose their
 * rubric criteria and reference-example markers instead, exactly as the
 * bank's content model prescribes.
 */

const EXAMS = new Set(["ielts", "toefl"]);
const VERSIONS = new Set(["academic", "general-training", "common", "toefl-2026"]);
const SECTIONS = new Set(["listening", "reading", "writing", "speaking"]);
const TOPICS = new Set([
  "science", "technology", "education", "environment", "culture", "society",
  "history", "health", "economics", "everyday", "university", "workplace",
]);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const p = url.searchParams;

  const filters: QuestionBankFilters = {};
  const q = p.get("q");
  if (q && q.trim()) filters.q = q.trim().slice(0, 120);
  const exam = p.get("exam");
  if (exam && EXAMS.has(exam)) filters.exam = exam as UnifiedExam;
  const version = p.get("version");
  if (version && VERSIONS.has(version)) filters.version = version as UnifiedVersion;
  const section = p.get("section");
  if (section && SECTIONS.has(section)) filters.section = section as UnifiedSection;
  const type = p.get("type");
  if (type && type.trim() && type.trim().length <= 80) filters.questionType = type.trim();
  const difficulty = Number(p.get("difficulty"));
  if (Number.isInteger(difficulty) && difficulty >= 1 && difficulty <= 5) {
    filters.difficulty = difficulty as UnifiedDifficulty;
  }
  const topic = p.get("topic");
  if (topic && TOPICS.has(topic)) filters.topic = topic as BankTopicDomain;
  const skill = p.get("skill");
  if (skill && skill.trim()) filters.skill = skill.trim().slice(0, 60);

  const page = Math.max(1, Number(p.get("page")) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(p.get("pageSize")) || 24));

  const result = searchQuestionBank(filters, page, pageSize);

  return json({
    items: result.items,
    total: result.total,
    page: result.page,
    pageSize: result.pageSize,
    pages: result.pages,
    ...(p.get("facets") === "1" ? { facets: questionBankFacets(filters) } : {}),
    ...(p.get("stats") === "1"
      ? { stats: { ...questionBankStats(), sizeTargets: BANK_SIZE_TARGETS } }
      : {}),
  });
}
