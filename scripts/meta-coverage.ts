/** PROMPT 41: verify EXAM_META enrichment covers every library question. */
import { IELTS_MOCK_LIBRARY } from "../src/data/exams/ielts/mocks";
import { EXAM_META } from "../scripts/exam-content-meta";

let total = 0, covered = 0, noMeta = 0;
const gaps: string[] = [];
for (const m of IELTS_MOCK_LIBRARY) {
  const meta = EXAM_META[m.title];
  for (const s of m.sections) {
    for (const q of s.questions) {
      total += 1;
      const hasInline = (q.explanation ?? "").trim().length > 0;
      const entry = meta?.[`${s.key}:${q.order}`];
      if (hasInline || entry) covered += 1;
      else { noMeta += 1; gaps.push(`${m.title} → ${s.key}:${q.order} (${q.type})`); }
    }
  }
}
console.log(`Library questions: ${total}, with explanation (inline or meta): ${covered}, WITHOUT: ${noMeta}`);
for (const g of gaps) console.log(`  MISSING: ${g}`);
// also count inline TOEFL mocks inside seed-exams
