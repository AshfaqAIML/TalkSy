/**
 * The nine Listening Masterclass mock titles (PROMPT 44).
 *
 * A deliberate leaf module (no imports): the masterclass hub imports this
 * list to present its practice-test ladder without dragging the mock seed
 * data — which lives server-side and contains answer keys — into the
 * client bundle. Titles must match the seeds in mocks-listening*.ts
 * exactly (the seeder is idempotent by title).
 */

export const LISTENING_MASTERCLASS_MOCK_TITLES = [
  "IELTS Listening Preparation — Beginner (Parts 1–2)",
  "IELTS Listening Preparation — Intermediate (Parts 1–3)",
  "IELTS Listening Preparation — Advanced (Parts 1–4)",
  "IELTS Listening Timed Test — Part 1 (everyday conversation)",
  "IELTS Listening Timed Test — Part 2 (individual speaker)",
  "IELTS Listening Timed Test — Part 3 (educational conversation)",
  "IELTS Listening Timed Test — Part 4 (academic monologue)",
  "IELTS Listening Full Simulation 1 (40 questions)",
  "IELTS Listening Full Simulation 2 (40 questions)",
] as const;
