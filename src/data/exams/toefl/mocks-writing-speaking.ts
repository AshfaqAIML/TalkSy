/**
 * TOEFL iBT Writing + Speaking mock bank (PROMPT 48, Task 10) — original
 * practice content for the 2026 format (in force since 21 January 2026).
 *
 * Three authored exports:
 *
 *   1. toeflWritingSectionMock2 — standalone official-count Writing section
 *      mock: the official 12 items (ten sentence-reconstruction items worth
 *      2 raw points each = 20 raw points, plus one Write-an-Email task and
 *      one Academic Discussion response, both rubric-graded).
 *   2. toeflFullMock1Writing    — the Writing section of Full Mock 1
 *      (same official structure, completely fresh sentences/scenarios).
 *   3. toeflFullMock1Speaking   — the Speaking section of Full Mock 1
 *      (official 11 items: seven Listen-and-Repeat sentences on the
 *      8/8/10/10/10/12/12-second windows, 5 raw points each = 35, then a
 *      four-question rubric-graded interview).
 *
 * The two MockSectionSeed exports are designed to compose into "TOEFL iBT
 * Full Mock 1" alongside toeflFullMock1Reading (mocks-reading.ts) and
 * toeflFullMock1Listening (mocks-listening.ts).
 *
 * Every sentence, email scenario, discussion question and interview prompt
 * below is original material written for this platform in the style of the
 * current test; no official ETS item, paper or preparation book is
 * reproduced anywhere in this file. Content deliberately avoids the
 * scenarios already used by the seeded Speaking Mock 1 (library hours,
 * flight change, registrar's office, contaminated samples, statistics
 * course, postponed deadline, assessment survey, relax-place / books /
 * skill-learning / exams-motivation interviews) and Writing Mock 1
 * (registrar approval, sleep and emotional memories, committee decision,
 * revision planning, countershading, commuters and cycling, the
 * seminar-moved-online email, the live-on-campus discussion).
 *
 * Engine contracts honored exactly (src/lib/exams/types.ts +
 * src/lib/exams/mock-engine.ts):
 *   SENTENCE_RECONSTRUCTION  payload {cue, scrambled, answer} — all-or-nothing
 *                            normalized comparison; the answer key carries
 *                            BOTH {text, answer} shapes (the gold-standard
 *                            seed writes .text; mock-engine reads .answer —
 *                            the duplicate key keeps both paths working and
 *                            keeps an empty submission from scoring full).
 *   LISTEN_REPEAT            payload {sentence, windowSec} — exact match
 *                            against answer.text (the typed transcript).
 *   EMAIL_WRITING / DISCUSSION_TASK / SPEAKING_TASK — answer: null,
 *                            points: 0 (rubric-graded on submission).
 */

import type { MockSeed, MockSectionSeed } from "../ielts/mocks";

// ---------------------------------------------------------------------------
// 1. Writing Section Mock 2 — standalone, official 12 items (20 raw points)
// ---------------------------------------------------------------------------

export const toeflWritingSectionMock2: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Writing Section Mock (2026 format) 2",
  kind: "section",
  lengthLabel: "full-length",
  description:
    "Full-length Writing simulation of the 2026 format with the official 12 items: ten sentence-reconstruction items plus one Write-an-Email task and one Academic Discussion response. Reconstruction is exact-marked (20 raw points in total); the email and the discussion are rubric-graded. Original EnglishPath practice material — not an official ETS test.",
  sections: [
    {
      key: "writing",
      title: "Writing (2026 format: official 12 items)",
      directions:
        "Official: about 23 minutes, 12 items — ten sentence-reconstruction items, one email and one academic discussion response. Budget the section honestly: roughly 10 minutes for the ten reconstruction items (about one minute each), about 5 minutes for the email and about 10 minutes for the discussion. Reconstruction items are exact-marked (2 raw points each, 20 in total); the email and the discussion are rubric-graded.",
      timingSec: 1380,
      questions: [
        {
          order: 1,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 1. Reconstruct the sentence.",
          payload: {
            cue: "Original: The campus bookstore offers discounts on used textbooks every semester.",
            scrambled: [
              "discounts",
              "the campus",
              "every semester",
              "offers",
              "on used",
              "the campus bookstore",
              "on used textbooks",
            ],
            answer: "the campus bookstore offers discounts on used textbooks every semester",
          },
          answer: {
            text: "the campus bookstore offers discounts on used textbooks every semester",
            answer: "the campus bookstore offers discounts on used textbooks every semester",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 2,
          explanation:
            "Correct: 'The campus bookstore offers discounts on used textbooks every semester.' Third-person '-s' on 'offers' is the agreement cue, and the prepositional phrase 'on used textbooks' must stay whole — 'on used' is the distractor chunk that ends mid-phrase, and 'the campus' stops short of 'bookstore'.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 2. Reconstruct the sentence.",
          payload: {
            cue: "Original: Online lectures are more flexible than traditional classroom sessions.",
            scrambled: [
              "traditional classroom sessions",
              "are",
              "more flexible than",
              "online lectures",
              "flexible than",
              "than",
              "more flexible",
            ],
            answer: "online lectures are more flexible than traditional classroom sessions",
          },
          answer: {
            text: "online lectures are more flexible than traditional classroom sessions",
            answer: "online lectures are more flexible than traditional classroom sessions",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 2,
          explanation:
            "Correct: 'Online lectures are more flexible than traditional classroom sessions.' The comparative frame 'more … than' is split across two chunks, and plural 'are' agrees with 'online lectures'; the trap chunks 'more flexible than' and 'flexible than' both end mid-phrase, before the noun being compared.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 3. Reconstruct the sentence.",
          payload: {
            cue: "Original: The lights went out while we were reviewing the lab results.",
            scrambled: [
              "were reviewing",
              "the lights",
              "while we were",
              "the lab",
              "went out",
              "while we",
              "the lab results",
            ],
            answer: "the lights went out while we were reviewing the lab results",
          },
          answer: {
            text: "the lights went out while we were reviewing the lab results",
            answer: "the lights went out while we were reviewing the lab results",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'The lights went out while we were reviewing the lab results.' The interruption takes simple past ('went out') and the longer background action takes past continuous ('were reviewing') inside the while-clause; 'while we were' ends mid-phrase before 'reviewing', and 'the lab' stops short of 'results'.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 4,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 4. Reconstruct the sentence.",
          payload: {
            cue: "Original: The campus gym has extended its opening hours since the spring term began.",
            scrambled: [
              "since the spring term",
              "its opening hours",
              "has extended its",
              "the campus gym",
              "began",
              "has extended",
              "since the spring",
            ],
            answer: "the campus gym has extended its opening hours since the spring term began",
          },
          answer: {
            text: "the campus gym has extended its opening hours since the spring term began",
            answer: "the campus gym has extended its opening hours since the spring term began",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'The campus gym has extended its opening hours since the spring term began.' Present perfect 'has extended' (singular 'has') pairs with past simple 'began' inside the since-clause; the trap chunks 'has extended its' and 'since the spring' both end mid-phrase and would strand the object or the time noun.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 5,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 5. Reconstruct the sentence.",
          payload: {
            cue: "Original: The orientation tour will begin at noon if the rain stops.",
            scrambled: [
              "if the rain stops",
              "at noon if",
              "will begin",
              "the orientation tour",
              "stops",
              "at noon",
              "if the rain",
            ],
            answer: "the orientation tour will begin at noon if the rain stops",
          },
          answer: {
            text: "the orientation tour will begin at noon if the rain stops",
            answer: "the orientation tour will begin at noon if the rain stops",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'The orientation tour will begin at noon if the rain stops.' First conditional: present simple 'stops' stays in the if-clause and 'will begin' in the main clause; 'at noon if' glues the time phrase to the wrong clause, while the ready-made 'if the rain stops' chunk hides the main-clause-first order.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 6,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 6. Reconstruct the sentence.",
          payload: {
            cue: "Original: The footbridge behind the science building was designed by architecture students.",
            scrambled: [
              "by architecture students",
              "behind the science",
              "the footbridge",
              "was designed by",
              "was designed",
              "behind the science building",
              "by",
            ],
            answer: "the footbridge behind the science building was designed by architecture students",
          },
          answer: {
            text: "the footbridge behind the science building was designed by architecture students",
            answer: "the footbridge behind the science building was designed by architecture students",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 4,
          explanation:
            "Correct: 'The footbridge behind the science building was designed by architecture students.' In the passive, 'was designed' must precede the agent phrase 'by architecture students', and the location phrase 'behind the science building' sits inside the subject — 'was designed by' ends mid-phrase before the agent, and 'behind the science' stops short of 'building'.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 7,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 7. Reconstruct the sentence.",
          payload: {
            cue: "Original: The engineer who inspected the bridge recommended immediate repairs.",
            scrambled: [
              "recommended immediate",
              "who inspected",
              "immediate repairs",
              "the engineer",
              "the bridge",
              "recommended",
              "who inspected the",
            ],
            answer: "the engineer who inspected the bridge recommended immediate repairs",
          },
          answer: {
            text: "the engineer who inspected the bridge recommended immediate repairs",
            answer: "the engineer who inspected the bridge recommended immediate repairs",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 4,
          explanation:
            "Correct: 'The engineer who inspected the bridge recommended immediate repairs.' The relative clause 'who inspected the bridge' must close before the main verb 'recommended' — both verbs are past simple — so the clause order is the whole puzzle; 'who inspected the' and 'recommended immediate' each end mid-phrase and blur that boundary.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 8,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 8. Reconstruct the sentence.",
          payload: {
            cue: "Original: Regular exercise improves concentration by increasing blood flow to the brain.",
            scrambled: [
              "by increasing blood",
              "blood flow",
              "improves concentration by",
              "regular exercise",
              "to the brain",
              "improves concentration",
              "by increasing",
            ],
            answer: "regular exercise improves concentration by increasing blood flow to the brain",
          },
          answer: {
            text: "regular exercise improves concentration by increasing blood flow to the brain",
            answer: "regular exercise improves concentration by increasing blood flow to the brain",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 4,
          explanation:
            "Correct: 'Regular exercise improves concentration by increasing blood flow to the brain.' The means phrase 'by increasing' takes the gerund, and singular 'improves' agrees with 'regular exercise'; the trap chunks 'improves concentration by' and 'by increasing blood' both cut the sentence at the wrong joint.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 9,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 9. Reconstruct the sentence.",
          payload: {
            cue: "Original: The findings matched earlier studies closely although the sample size was small.",
            scrambled: [
              "was small",
              "closely",
              "matched earlier",
              "the findings",
              "although the sample",
              "earlier studies",
              "although the sample size",
              "matched",
            ],
            answer: "the findings matched earlier studies closely although the sample size was small",
          },
          answer: {
            text: "the findings matched earlier studies closely although the sample size was small",
            answer: "the findings matched earlier studies closely although the sample size was small",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 5,
          explanation:
            "Correct: 'The findings matched earlier studies closely although the sample size was small.' The concessive although-clause trails the main clause, and the adverb 'closely' follows its object 'earlier studies'; both trap chunks ('matched earlier', 'although the sample') end mid-phrase, so the two clause boundaries are the whole challenge.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 10,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 10. Reconstruct the sentence.",
          payload: {
            cue: "Original: The lecture hall filled up so quickly that dozens of students had to stand.",
            scrambled: [
              "had to stand",
              "filled up so",
              "that dozens",
              "the lecture hall",
              "so quickly",
              "that dozens of students",
              "filled up",
              "so quickly that",
            ],
            answer: "the lecture hall filled up so quickly that dozens of students had to stand",
          },
          answer: {
            text: "the lecture hall filled up so quickly that dozens of students had to stand",
            answer: "the lecture hall filled up so quickly that dozens of students had to stand",
          },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 5,
          explanation:
            "Correct: 'The lecture hall filled up so quickly that dozens of students had to stand.' The correlative 'so … that' wraps around the result: 'so quickly' modifies 'filled up', then the that-clause carries the consequence. All three trap chunks ('filled up so', 'so quickly that', 'that dozens') end mid-phrase at a different joint of that frame.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 11,
          type: "EMAIL_WRITING",
          stem: "Item 11. Write an Email (about 5 minutes).",
          payload: {
            situation:
              "Your university housing office has scheduled a pest-control treatment for the shared kitchens of your hall and has asked residents to clear all surfaces the evening before. Write a formal email to the housing office.",
            bullets: [
              "request a precise time window for the treatment",
              "explain why the current clearing deadline is difficult for you",
              "suggest one practical arrangement for residents who cannot comply in time",
            ],
            tone: "formal",
            minWords: 100,
            suggestedMinutes: 5,
            rubricKey: "toefl.writing",
            part: "Write an Email — kitchen pest-control treatment",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "tone", "coherence"],
          difficulty: 3,
          explanation:
            "A strong formal email opens 'Dear Housing Office team' (or 'Dear Sir or Madam') and states its purpose in the first line ('I am writing regarding…'), covers the three bullets in order — request, explanation, suggestion — and closes politely ('I look forward to your reply' / 'Yours faithfully'). No contractions in this register; about 120 words inside 5 minutes.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 12,
          type: "DISCUSSION_TASK",
          stem: "Item 12. Academic Discussion (about 10 minutes).",
          payload: {
            prompt:
              "Professor Haddad asks: 'Should first-year university courses be graded pass/fail instead of with letter grades?' Add your post to the discussion.",
            posts: [
              {
                author: "Ingrid",
                text: "First-year grades mostly measure how quickly students adjust to university, not what they actually learn. Pass/fail grading would let them take challenging courses without being punished for a slow start.",
              },
              {
                author: "Tomás",
                text: "Employers and scholarship committees read first-year transcripts closely. Take away letter grades and the students who worked hardest have nothing to show for it, so motivation slides.",
              },
            ],
            minWords: 100,
            suggestedMinutes: 10,
            rubricKey: "toefl.writing",
            part: "Academic discussion response",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "coherence", "argument"],
          difficulty: 4,
          explanation:
            "The strong response states a position in its first line, engages at least one classmate by name ('Tomás is right that transcripts matter, but…'), supports the position with one reason of its own, and ends with a wrap-up sentence — about 120–150 words inside the 10 minutes.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 2. Full Mock 1 — Writing section (official 12 items, 20 raw points)
// ---------------------------------------------------------------------------

export const toeflFullMock1Writing: MockSectionSeed = {
  key: "writing",
  title: "Writing (2026 format: official 12 items)",
  directions:
    "The official Writing section gives you about 23 minutes and 12 items. This practice section carries the official structure: ten sentence-reconstruction items worth 2 raw points each (exact-marked, 20 in total), one Write-an-Email task and one Academic Discussion response, both rubric-graded. Keep to exam cadence — about one minute per reconstruction item, about 5 minutes on the email and about 10 minutes on the discussion — and hold back a final minute to reread what you have written.",
  timingSec: 1380,
  questions: [
    {
      order: 1,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 1. Reconstruct the sentence.",
      payload: {
        cue: "Original: There are several quiet study lounges on the third floor.",
        scrambled: [
          "quiet study lounges",
          "there are several",
          "several",
          "on the third",
          "there are",
          "on the third floor",
        ],
        answer: "there are several quiet study lounges on the third floor",
      },
      answer: {
        text: "there are several quiet study lounges on the third floor",
        answer: "there are several quiet study lounges on the third floor",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 2,
      explanation:
        "Correct: 'There are several quiet study lounges on the third floor.' Plural 'there are' agrees with 'quiet study lounges', and the location phrase 'on the third floor' reassembles as one unit — 'on the third' is the incomplete distractor, and 'there are several' ends before the noun it quantifies.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 2,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 2. Reconstruct the sentence.",
      payload: {
        cue: "Original: My roommate borrowed three novels from the department library yesterday.",
        scrambled: [
          "three novels",
          "from the department",
          "borrowed",
          "my roommate",
          "yesterday",
          "borrowed three",
          "from the department library",
        ],
        answer: "my roommate borrowed three novels from the department library yesterday",
      },
      answer: {
        text: "my roommate borrowed three novels from the department library yesterday",
        answer: "my roommate borrowed three novels from the department library yesterday",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 2,
      explanation:
        "Correct: 'My roommate borrowed three novels from the department library yesterday.' Past simple 'borrowed' pairs with the end-position time adverb 'yesterday', and the source phrase 'from the department library' stays whole — the trap chunks 'borrowed three' and 'from the department' both end mid-phrase.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 3,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 3. Reconstruct the sentence.",
      payload: {
        cue: "Original: The field trip was called off because the mountain road was blocked.",
        scrambled: [
          "the mountain road",
          "was called off",
          "because the mountain",
          "the field trip",
          "was blocked",
          "was called",
          "because",
        ],
        answer: "the field trip was called off because the mountain road was blocked",
      },
      answer: {
        text: "the field trip was called off because the mountain road was blocked",
        answer: "the field trip was called off because the mountain road was blocked",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 3,
      explanation:
        "Correct: 'The field trip was called off because the mountain road was blocked.' The passive phrasal verb 'was called off' is indivisible — 'was called' is the distractor that strands the particle — and the because-clause carries its own passive, 'was blocked'.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 4,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 4. Reconstruct the sentence.",
      payload: {
        cue: "Original: She arrived early to reserve a seat near the front row.",
        scrambled: [
          "near the front row",
          "to reserve a",
          "arrived early",
          "she",
          "a seat",
          "arrived early to",
          "to reserve",
        ],
        answer: "she arrived early to reserve a seat near the front row",
      },
      answer: {
        text: "she arrived early to reserve a seat near the front row",
        answer: "she arrived early to reserve a seat near the front row",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 3,
      explanation:
        "Correct: 'She arrived early to reserve a seat near the front row.' The purpose infinitive 'to reserve' follows the completed past action 'arrived early', and the location phrase 'near the front row' closes the sentence; the trap chunks 'arrived early to' and 'to reserve a' both end mid-phrase.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 5,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 5. Reconstruct the sentence.",
      payload: {
        cue: "Original: Volunteers have been monitoring the coral reef since last spring.",
        scrambled: [
          "since last",
          "monitoring",
          "have been",
          "the coral reef",
          "since last spring",
          "have been monitoring the",
          "volunteers",
        ],
        answer: "volunteers have been monitoring the coral reef since last spring",
      },
      answer: {
        text: "volunteers have been monitoring the coral reef since last spring",
        answer: "volunteers have been monitoring the coral reef since last spring",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 3,
      explanation:
        "Correct: 'Volunteers have been monitoring the coral reef since last spring.' The present perfect continuous 'have been monitoring' spans two chunks — plural 'have', never 'has' — and the duration phrase 'since last spring' is one indivisible time unit; 'have been monitoring the' and 'since last' both end mid-phrase.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 6,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 6. Reconstruct the sentence.",
      payload: {
        cue: "Original: The students waiting outside the lab were told to come back later.",
        scrambled: [
          "waiting outside",
          "were told to",
          "were told",
          "to come back later",
          "waiting outside the lab",
          "the students",
        ],
        answer: "the students waiting outside the lab were told to come back later",
      },
      answer: {
        text: "the students waiting outside the lab were told to come back later",
        answer: "the students waiting outside the lab were told to come back later",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 4,
      explanation:
        "Correct: 'The students waiting outside the lab were told to come back later.' The reduced relative 'waiting outside the lab' (there is no 'who were') must precede the passive 'were told'; 'waiting outside' stops short of 'the lab', and 'were told to' ends before 'come back later'.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 7,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 7. Reconstruct the sentence.",
      payload: {
        cue: "Original: This is one of the oldest observatories still in operation.",
        scrambled: [
          "still in",
          "the oldest",
          "this is",
          "observatories",
          "one of the oldest",
          "one of",
          "still in operation",
        ],
        answer: "this is one of the oldest observatories still in operation",
      },
      answer: {
        text: "this is one of the oldest observatories still in operation",
        answer: "this is one of the oldest observatories still in operation",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 4,
      explanation:
        "Correct: 'This is one of the oldest observatories still in operation.' The frame 'one of the + superlative' forces a plural noun ('observatories'), and 'still in operation' is an indivisible trailing phrase — the trap chunks 'one of the oldest' and 'still in' both end mid-phrase.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 8,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 8. Reconstruct the sentence.",
      payload: {
        cue: "Original: The organizers would have postponed the match if the storm had arrived earlier.",
        scrambled: [
          "if the storm had",
          "the match",
          "had arrived earlier",
          "the organizers",
          "would have postponed",
          "would have",
          "if the storm",
        ],
        answer: "the organizers would have postponed the match if the storm had arrived earlier",
      },
      answer: {
        text: "the organizers would have postponed the match if the storm had arrived earlier",
        answer: "the organizers would have postponed the match if the storm had arrived earlier",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 4,
      explanation:
        "Correct: 'The organizers would have postponed the match if the storm had arrived earlier.' Third conditional: 'would have postponed' belongs to the unreal result and past perfect 'had arrived' to the condition; the trap chunks 'would have' and 'if the storm had' both end mid-phrase inside the verb chains, inviting the halves to swap forms.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 9,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 9. Reconstruct the sentence.",
      payload: {
        cue: "Original: The quality of the recordings from that expedition remains uncertain.",
        scrambled: [
          "the quality of",
          "remains",
          "of the recordings from",
          "from that expedition",
          "uncertain",
          "of the recordings",
          "the quality",
        ],
        answer: "the quality of the recordings from that expedition remains uncertain",
      },
      answer: {
        text: "the quality of the recordings from that expedition remains uncertain",
        answer: "the quality of the recordings from that expedition remains uncertain",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 5,
      explanation:
        "Correct: 'The quality of the recordings from that expedition remains uncertain.' Agreement skips the plural nouns: the head subject 'the quality' takes singular 'remains' even though 'recordings' sits closer to the verb; the trap chunks 'the quality of' and 'of the recordings from' both end mid-phrase and misbind the subject to the wrong noun.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 10,
      type: "SENTENCE_RECONSTRUCTION",
      stem: "Item 10. Reconstruct the sentence.",
      payload: {
        cue: "Original: Rarely does a first draft survive the editing stage unchanged.",
        scrambled: [
          "does a first draft",
          "a first draft survive",
          "survive",
          "rarely does",
          "the editing stage",
          "rarely",
          "unchanged",
        ],
        answer: "rarely does a first draft survive the editing stage unchanged",
      },
      answer: {
        text: "rarely does a first draft survive the editing stage unchanged",
        answer: "rarely does a first draft survive the editing stage unchanged",
      },
      points: 2,
      skills: ["sentence", "grammar"],
      difficulty: 5,
      explanation:
        "Correct: 'Rarely does a first draft survive the editing stage unchanged.' Fronted 'rarely' forces inversion — 'does a first draft survive', never 'a first draft survives' — and 'survive' stays a bare infinitive after the auxiliary 'does'; the trap chunks 'rarely does' and 'a first draft survive' both end mid-phrase at exactly the inverted word order.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 11,
      type: "EMAIL_WRITING",
      stem: "Item 11. Write an Email (about 5 minutes).",
      payload: {
        situation:
          "Your classmate Devi lent you her carefully handwritten lecture notes last week, and you left the folder on the bus on the way home. Write an informal email to Devi.",
        bullets: [
          "apologize for losing the notes",
          "explain exactly how it happened",
          "offer to replace the notes in a way that suits her",
        ],
        tone: "informal",
        minWords: 100,
        suggestedMinutes: 5,
        rubricKey: "toefl.writing",
        part: "Write an Email — lost lecture notes",
      },
      answer: null,
      points: 0,
      skills: ["task-response", "tone", "coherence"],
      difficulty: 3,
      explanation:
        "A strong informal email opens 'Hi Devi,' and reaches the apology in line one ('I'm so sorry — I've lost your notes'), then tells the story briefly, offers a concrete fix (photocopying another classmate's set, or redoing them together) and signs off informally ('Thanks again for lending them to me'). Contractions are natural in this register; all three bullets still appear in order.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 12,
      type: "DISCUSSION_TASK",
      stem: "Item 12. Academic Discussion (about 10 minutes).",
      payload: {
        prompt:
          "Professor Nakamura asks: 'Should every undergraduate be required to complete a course in public speaking?' Add your post to the discussion.",
        posts: [
          {
            author: "Ravi",
            text: "Public speaking terrifies most students precisely because they never practice it. A required course turns a fear into an ordinary skill before graduation, in a room where everyone is equally nervous.",
          },
          {
            author: "Elena",
            text: "Not every career involves standing in front of a room. A graduation requirement should serve every student equally, and electives already exist for those who actually want the stage.",
          },
        ],
        minWords: 100,
        suggestedMinutes: 10,
        rubricKey: "toefl.writing",
        part: "Academic discussion response",
      },
      answer: null,
      points: 0,
      skills: ["task-response", "coherence", "argument"],
      difficulty: 4,
      explanation:
        "Open with your position, name the classmate you are responding to ('Unlike Ravi, I think…'), add one supporting reason with a concrete touch of your own, then close with a one-sentence summary — roughly 120–150 words inside the 10 minutes.",
      source: "original-practice",
      contentStatus: "published",
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Full Mock 1 — Speaking section (official 11 items, 35 raw points)
// ---------------------------------------------------------------------------

export const toeflFullMock1Speaking: MockSectionSeed = {
  key: "speaking",
  title: "Speaking (2026 format: official 11 items)",
  directions:
    "Official: about 8 minutes, 11 items — seven Listen-and-Repeat sentences and a four-question interview. Listen to each sentence once and repeat it aloud inside the window: 8-second windows for items 1–2, 10 seconds for items 3–5 and 12 seconds for items 6–7; in this practice version you type what you said so it can be marked. The interview questions give you 5 seconds to prepare and about 30 seconds to speak, and are rubric-graded on Delivery, Language use and Topic development.",
  timingSec: 480,
  questions: [
    {
      order: 1,
      type: "LISTEN_REPEAT",
      stem: "Item 1. Listen and repeat (8-second window).",
      payload: { sentence: "The campus tour starts at the main gate.", windowSec: 8 },
      answer: { text: "The campus tour starts at the main gate." },
      points: 5,
      skills: ["delivery", "pronunciation"],
      difficulty: 2,
      explanation:
        "Correct: 'The campus tour starts at the main gate.' The starting point takes 'at the main gate' — repeating 'from the main gate' is the usual slip — and the window is only 8 seconds, so begin speaking the moment the audio ends.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 2,
      type: "LISTEN_REPEAT",
      stem: "Item 2. Listen and repeat (8-second window).",
      payload: { sentence: "I'd rather meet after class than at noon.", windowSec: 8 },
      answer: { text: "I'd rather meet after class than at noon." },
      points: 5,
      skills: ["delivery", "pronunciation", "grammar"],
      difficulty: 2,
      explanation:
        "Correct: 'I'd rather meet after class than at noon.' The contraction 'I'd' must survive — it sounds identical to 'I would' — and the comparison frame 'rather … than' needs both halves; 'at noon' is the tail most often dropped inside the 8 seconds.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 3,
      type: "LISTEN_REPEAT",
      stem: "Item 3. Listen and repeat (10-second window).",
      payload: { sentence: "Could you tell me whether the printing stations stay open on weekends?", windowSec: 10 },
      answer: { text: "Could you tell me whether the printing stations stay open on weekends?" },
      points: 5,
      skills: ["delivery", "pronunciation", "grammar"],
      difficulty: 3,
      explanation:
        "Correct: 'Could you tell me whether the printing stations stay open on weekends?' The indirect question keeps statement order — 'whether the printing stations stay open', never 'whether do the printing stations stay open' — and that embedded word order is the point of this item.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 4,
      type: "LISTEN_REPEAT",
      stem: "Item 4. Listen and repeat (10-second window).",
      payload: { sentence: "The vaccine works by teaching the immune system to fight the virus.", windowSec: 10 },
      answer: { text: "The vaccine works by teaching the immune system to fight the virus." },
      points: 5,
      skills: ["delivery", "academic-vocab"],
      difficulty: 3,
      explanation:
        "Correct: 'The vaccine works by teaching the immune system to fight the virus.' 'Immune system' is the technical phrase this item tests — paraphrases like 'the body's defenses' lose the exact wording — and the means frame 'by teaching … to fight' holds the two halves of the sentence together.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 5,
      type: "LISTEN_REPEAT",
      stem: "Item 5. Listen and repeat (10-second window).",
      payload: { sentence: "The scholarship covers full tuition for students who have completed two semesters.", windowSec: 10 },
      answer: { text: "The scholarship covers full tuition for students who have completed two semesters." },
      points: 5,
      skills: ["delivery", "grammar"],
      difficulty: 4,
      explanation:
        "Correct: 'The scholarship covers full tuition for students who have completed two semesters.' The relative clause carries present perfect 'have completed', and 'full' before 'tuition' is the small word that disappears under time pressure — 'covers tuition' is not the sentence you heard.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 6,
      type: "LISTEN_REPEAT",
      stem: "Item 6. Listen and repeat (12-second window).",
      payload: { sentence: "The training session that was planned for Tuesday evening has been rescheduled for the Monday after next.", windowSec: 12 },
      answer: { text: "The training session that was planned for Tuesday evening has been rescheduled for the Monday after next." },
      points: 5,
      skills: ["delivery", "detail"],
      difficulty: 4,
      explanation:
        "Correct: 'The training session that was planned for Tuesday evening has been rescheduled for the Monday after next.' Two time expressions — 'Tuesday evening' and 'the Monday after next' — must both survive, and 'rescheduled for' (not 'rescheduled to') is the preposition this item is listening for.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 7,
      type: "LISTEN_REPEAT",
      stem: "Item 7. Listen and repeat (12-second window).",
      payload: { sentence: "The article argues that remote internships teach students more practical skills than many short-term campus jobs.", windowSec: 12 },
      answer: { text: "The article argues that remote internships teach students more practical skills than many short-term campus jobs." },
      points: 5,
      skills: ["delivery", "detail", "academic-vocab"],
      difficulty: 5,
      explanation:
        "Correct: 'The article argues that remote internships teach students more practical skills than many short-term campus jobs.' Longest sentence in the set: the reporting frame 'The article argues that' and the comparison 'more … than' are the two halves people drop under the 12-second clock.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 8,
      type: "SPEAKING_TASK",
      stem: "Item 8. Interview item 1 — personal (about 30 seconds).",
      payload: {
        prompt: "Tell me about a meal that you remember well. Where were you, and what made it special?",
        prepSec: 5,
        speakSec: 30,
        rubricKey: "toefl.speaking",
        part: "Interview item 1 — personal",
      },
      answer: null,
      points: 0,
      skills: ["fluency", "vocabulary"],
      difficulty: 3,
      explanation:
        "A 30-second personal answer names the meal in the first sentence, adds two concrete details (the place, the occasion or one taste you still remember) and closes with a short line about why it stuck with you — no slow warm-up about how hard the question is.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 9,
      type: "SPEAKING_TASK",
      stem: "Item 9. Interview item 2 — opinion (about 30 seconds).",
      payload: {
        prompt: "Some people prefer to live in a big city; others prefer a small town. Which do you prefer, and why?",
        prepSec: 5,
        speakSec: 30,
        rubricKey: "toefl.speaking",
        part: "Interview item 2 — opinion",
      },
      answer: null,
      points: 0,
      skills: ["fluency", "coherence"],
      difficulty: 3,
      explanation:
        "Pick a side in sentence one ('I'd rather live in a small town because…'), give one reason and one everyday example, then stop — 'it depends on the person' hedging is the classic way to waste the whole 30 seconds.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 10,
      type: "SPEAKING_TASK",
      stem: "Item 10. Interview item 3 — narrative (about 30 seconds).",
      payload: {
        prompt: "Describe a time when you helped someone solve a problem. What did you do, and how did it end?",
        prepSec: 5,
        speakSec: 30,
        rubricKey: "toefl.speaking",
        part: "Interview item 3 — narrative",
      },
      answer: null,
      points: 0,
      skills: ["fluency", "coherence"],
      difficulty: 3,
      explanation:
        "Keep the story in past tense from start to finish, chain it with 'first', 'then' and 'in the end', and finish with a one-sentence outcome — the sequence markers and the tense hold the narrative marks together.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 11,
      type: "SPEAKING_TASK",
      stem: "Item 11. Interview item 4 — abstract (about 30 seconds).",
      payload: {
        prompt: "Is it better to become an expert in one field or to know a little about many fields? Explain your view.",
        prepSec: 5,
        speakSec: 30,
        rubricKey: "toefl.speaking",
        part: "Interview item 4 — abstract",
      },
      answer: null,
      points: 0,
      skills: ["fluency", "coherence", "argument"],
      difficulty: 4,
      explanation:
        "The abstract item is judged on argument shape: state your choice, defend it with one reason, concede the other side ('although breadth helps at the start…'), then restate your position in the final sentence — exactly 30 seconds of material.",
      source: "original-practice",
      contentStatus: "published",
    },
  ],
};
