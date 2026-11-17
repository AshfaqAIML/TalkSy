/**
 * TALK SY Original Examination Question Bank — curated topic maps for the
 * pre-PROMPT-54 flagship items (PROMPT 54).
 *
 * Every item authored by the PROMPT 54 expansion sets its unified topic
 * domain explicitly. The earlier flagship items (PROMPT 44–47 for IELTS,
 * PROMPT 49–50 for TOEFL) carry only their own finer topic labels, so
 * their domains are resolved through these hand-curated maps — never
 * guessed at runtime.
 */

import type { BankTopicDomain } from "./topics";

// ---------------------------------------------------------------------------
// IELTS Listening — the sixteen PROMPT 44 flagship recordings
// ---------------------------------------------------------------------------

export const IELTS_LISTENING_TOPICS: Record<string, BankTopicDomain> = {
  "ielts-lb-p1-library": "everyday",
  "ielts-lb-p1-course-booking": "everyday",
  "ielts-lb-p1-insurance": "economics",
  "ielts-lb-p1-flat-query": "everyday",
  "ielts-lb-p2-event": "society",
  "ielts-lb-p2-facilities": "workplace",
  "ielts-lb-p2-tour": "culture",
  "ielts-lb-p2-volunteering": "society",
  "ielts-lb-p3-dissertation": "university",
  "ielts-lb-p3-fieldwork": "science",
  "ielts-lb-p3-project": "university",
  "ielts-lb-p3-tutorial": "university",
  "ielts-lb-p4-biology": "science",
  "ielts-lb-p4-environment": "environment",
  "ielts-lb-p4-history": "history",
  "ielts-lb-p4-technology": "technology",
};

// ---------------------------------------------------------------------------
// IELTS Reading — the eighteen PROMPT 45 flagship exercises
// ---------------------------------------------------------------------------

export const IELTS_READING_TOPICS: Record<string, BankTopicDomain> = {
  "ielts-rb-ac-water": "science",
  "ielts-rb-ac-barcode": "technology",
  "ielts-rb-ac-reading-wars": "education",
  "ielts-rb-ac-beavers": "environment",
  "ielts-rb-ac-antikythera": "history",
  "ielts-rb-ac-gorilla": "science",
  "ielts-rb-ac-placebo": "health",
  "ielts-rb-ac-traffic": "economics",
  "ielts-rb-ac-third-places": "society",
  "ielts-rb-ac-tall-wood": "environment",
  "ielts-rb-gt-notices": "everyday",
  "ielts-rb-gt-ads": "economics",
  "ielts-rb-gt-bramble": "everyday",
  "ielts-rb-gt-returns": "workplace",
  "ielts-rb-gt-holidays": "workplace",
  "ielts-rb-gt-warehouse": "workplace",
  "ielts-rb-gt-lighthouses": "history",
  "ielts-rb-gt-denim": "economics",
};

// ---------------------------------------------------------------------------
// IELTS Writing — the twenty-five PROMPT 46 flagship tasks
// ---------------------------------------------------------------------------

export const IELTS_WRITING_TOPICS: Record<string, BankTopicDomain> = {
  "ielts-wb-at1-bar-cycling": "society",
  "ielts-wb-at1-line-energy": "technology",
  "ielts-wb-at1-pie-spending": "economics",
  "ielts-wb-at1-table-cities": "society",
  "ielts-wb-at1-bar-recycling": "environment",
  "ielts-wb-at1-mixed-tourism": "economics",
  "ielts-wb-at1-process-cider": "everyday",
  "ielts-wb-at1-map-harbour": "culture",
  "ielts-wb-at2-opinion-museums": "culture",
  "ielts-wb-at2-discussion-remote-study": "education",
  "ielts-wb-at2-advantages-gig-work": "economics",
  "ielts-wb-at2-problem-solution-fast-fashion": "economics",
  "ielts-wb-at2-cause-effect-sleep": "health",
  "ielts-wb-at2-two-part-urban-farming": "environment",
  "ielts-wb-at2-direct-questions-heritage": "culture",
  "ielts-wb-gt1-complaint-hotel": "everyday",
  "ielts-wb-gt1-request-council": "society",
  "ielts-wb-gt1-explanation-landlord": "everyday",
  "ielts-wb-gt1-suggestion-centre": "society",
  "ielts-wb-gt1-invitation-friend": "everyday",
  "ielts-wb-gt1-apology-neighbour": "everyday",
  "ielts-wb-gt2-opinion-sundays": "society",
  "ielts-wb-gt2-discussion-neighbours": "society",
  "ielts-wb-gt2-advantages-car-free": "environment",
  "ielts-wb-gt2-problem-solution-litter": "environment",
};

// ---------------------------------------------------------------------------
// IELTS Speaking — the fifty-one PROMPT 47 flagship items
// ---------------------------------------------------------------------------

/** Part 1 taught topic → unified domain (also used by the second rounds). */
export const SPEAKING_PART1_TOPIC_DOMAINS: Record<string, BankTopicDomain> = {
  introduction: "everyday",
  work: "workplace",
  study: "education",
  hometown: "society",
  accommodation: "everyday",
  family: "everyday",
  friends: "everyday",
  hobbies: "everyday",
  food: "everyday",
  travel: "everyday",
  technology: "technology",
  education: "education",
  "daily-routines": "everyday",
  shopping: "economics",
  weather: "environment",
  books: "culture",
  music: "culture",
  sports: "health",
  "social-activities": "society",
};

/** Cue-card family → unified domain (flagship and practice cards). */
export const SPEAKING_CUE_FAMILY_DOMAINS: Record<string, BankTopicDomain> = {
  people: "society",
  places: "everyday",
  events: "culture",
  experiences: "everyday",
  objects: "everyday",
  activities: "health",
  achievements: "society",
  books: "culture",
  films: "culture",
  travel: "everyday",
  learning: "education",
};

/** The ten flagship Part 3 set themes (by slug). */
export const IELTS_SPEAKING_PART3_TOPICS: Record<string, BankTopicDomain> = {
  "ielts-sb-p3-technology": "technology",
  "ielts-sb-p3-environment": "environment",
  "ielts-sb-p3-education": "education",
  "ielts-sb-p3-work": "workplace",
  "ielts-sb-p3-health": "health",
  "ielts-sb-p3-culture": "culture",
  "ielts-sb-p3-society": "society",
  "ielts-sb-p3-transport": "society",
  "ielts-sb-p3-food": "health",
  "ielts-sb-p3-media": "technology",
};

// ---------------------------------------------------------------------------
// TOEFL — keyword classifier for the banks' own free-form topic labels
// ---------------------------------------------------------------------------

/**
 * Deterministic keyword classifier for TOEFL topic labels (subjects, text
 * kinds, scenes, disciplines). Ordered rules, first match wins; the final
 * fallback is "everyday" because the TOEFL banks are campus- and
 * daily-life-centred by design.
 */
const TOEFL_TOPIC_RULES: [BankTopicDomain, string[]][] = [
  ["science", ["science", "biology", "chemistry", "physics", "geology", "astronomy", "psychology", "marine", "animal", "wildlife", "ecology", "environment", "climate", "sustainab", "recycl", "energy", "nature"]],
  ["technology", ["technolog", "computer", "software", "engineer", "robot", "data", "digital", "app ", "internet", "online platform", "innovat"]],
  ["education", ["educat", "school", "course", "class", "teach", "learn", "study", "student", "exam", "homework", "lecture", "professor", "academic skill", "tutor", "library service", "registration", "enrol"]],
  ["environment", ["environment", "green", "waste", "pollut", "conservat"]],
  ["culture", ["culture", "art", "music", "literature", "history", "museum", "theatre", "film", "tradition", "heritage", "language", "book club", "festival"]],
  ["society", ["society", "community", "volunteer", "neighbour", "social", "citizen", "public service", "charity"]],
  ["history", ["history", "historical", "ancient", "century", "past"]],
  ["health", ["health", "medical", "medicine", "doctor", "clinic", "hospital", "fitness", "gym", "sport", "exercise", "nutrition", "diet", "wellness", "counsel"]],
  ["economics", ["econom", "business", "market", "finance", "money", "budget", "price", "shopping", "commerce", "trade", "management", "marketing", "entrepreneur"]],
  ["university", ["campus", "university", "college", "dorm", "residence", "cafeteria", "student union", "career service", "faculty", "advisor", "semester", "tuition", "scholarship", "campus job", "roommate"]],
  ["workplace", ["work", "job", "office", "manager", "employee", "staff", "meeting", "workplace", "interview", "colleague", "supervisor", "schedule shift", "training session", "customer"]],
];

export function classifyToeflTopic(...texts: string[]): BankTopicDomain {
  const haystack = texts.join(" ").toLowerCase();
  for (const [domain, keywords] of TOEFL_TOPIC_RULES) {
    if (keywords.some((k) => haystack.includes(k))) return domain;
  }
  return "everyday";
}
