import { json } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { buildSimulationBundle, speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";
import { toSafeSpeakingItem, listSpeakingAttempts } from "@/lib/exams/speaking-bank/service";
import { SPEAKING_BANK_SOURCE_NOTE } from "@/data/exams/ielts/speaking-bank/types";

/**
 * GET /api/exams/speaking/simulation?difficulty=3 — the three-part
 * simulation bundle (PROMPT 47, Part 6): one Part 1 interview round, one
 * Part 2 cue card and one Part 3 discussion set matched to the requested
 * difficulty, as safe projections (question presentation only). The
 * simulator runs the official flow: examiner script, Part 1 questions,
 * the one-minute preparation, the two-minute long turn, rounding-off
 * questions, and the Part 3 discussion.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const difficultyRaw = Number(url.searchParams.get("difficulty") ?? "3");
  const difficulty = Number.isFinite(difficultyRaw) ? Math.min(5, Math.max(1, Math.round(difficultyRaw))) : 3;

  const bundle = buildSimulationBundle(difficulty);
  const [part1, part2, part3] = [bundle.part1, bundle.part2, bundle.part3].map((slug) => speakingItemBySlug(slug));

  if (!part1 || !part2 || !part3) return json({ error: "Simulation bundle unavailable." }, 500);

  const user = await getSessionUser(req);
  const attempts = user
    ? await Promise.all([listSpeakingAttempts(user.id, part1.slug), listSpeakingAttempts(user.id, part2.slug), listSpeakingAttempts(user.id, part3.slug)])
    : null;

  return json({
    bundle: {
      part1: toSafeSpeakingItem(part1),
      part2: toSafeSpeakingItem(part2),
      part3: toSafeSpeakingItem(part3),
    },
    // Examiner framing lines for the realistic interaction.
    examiner: {
      opening:
        "Good morning. My name is Rachel. Can you tell me your full name, please? And what shall I call you?",
      part1Lead: "First, I'd like to ask you some questions about yourself.",
      part2Lead: "Now, I'm going to give you a topic. You'll have one minute to prepare, and then you'll speak for one to two minutes.",
      part3Lead: "We've been talking about your topic. Now I'd like to discuss with you one or two more general questions related to it.",
      closing: "Thank you. That is the end of the speaking test.",
    },
    attempts: attempts ? { part1: attempts[0], part2: attempts[1], part3: attempts[2] } : null,
    source: SPEAKING_BANK_SOURCE_NOTE,
  });
}
