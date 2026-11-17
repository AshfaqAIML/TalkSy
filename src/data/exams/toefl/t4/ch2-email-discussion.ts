/**
 * TOEFL iBT Academy — Module 4, Writing · Chapter file 2 (T-M4, PROMPT 48).
 *
 * Chapter coverage of `t4-writing.ts`:
 *   · toefl-email       (unit "Write an Email")                        — 1 lesson
 *   · toefl-discussion  (unit "Write for an Academic Discussion")      — 2 lessons
 *
 * Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts). Format facts verified
 * against ETS's published 2026 pages: the Write an Email task allows ~5
 * minutes for an everyday or campus situation with points to cover, in a
 * formal, semi-formal or informal tone fitted to the recipient; the Write
 * for an Academic Discussion task allows ~10 minutes for a post of 100+
 * words answering a professor's question and engaging classmates' posts.
 * Both are rated against scoring guides organised around Development,
 * Organization and Language use on the 1.0–6.0 band scale. Band labels in
 * these lessons are practice estimates for study purposes — never official
 * ETS scores — and nothing here reproduces official ETS content.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T4_CH2: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  // Unit 3 — Write an Email
  // ---------------------------------------------------------------------------
  {
    slug: "toefl-writing-email",
    title: "Write an Email: structure and tone",
    description:
      "The ~5-minute email in four moves — greeting, purpose, request, close — with the tone dial that matches register to recipient across formal, semi-formal and informal situations, and a complete model email taken apart move by move.",
    objectives: [
      "choose the greeting-and-sign-off pair that matches the recipient before any body sentence exists",
      "state the email's purpose in its opening line and cover every listed point in the printed order",
      "hold one register — formal, semi-formal or informal — from greeting to sign-off",
      "finish the whole email inside about five minutes with one tone sweep at the end",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "The email arrives eleventh, after ten reconstructions and with about five minutes on the clock. The task is short and completely public in its demands: a situation, a recipient, a list of points to cover, and a tone the recipient decides. This lesson installs the four moves every exam email is built from, sets the tone dial that matches greeting to reader, and walks a complete model from prompt to sign-off — because the marks live in fit, not in length.",
        beforeYouStart: [
          "You know the email's ~5-minute allowance from 'Understanding the Writing section'.",
          "You can write a grammatical sentence with a because-clause and a which-clause.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the Write an Email task, item eleven of twelve"],
          ["Task & question types", "One constructed response: an everyday or campus situation with listed points, written to a specified recipient in ~5 minutes"],
          ["What is assessed", "Tone consistency with the recipient, coverage of every listed point, and clean organisation through the four moves"],
          ["Why this matters", "Register breaks and missed points are the two fastest ways to lose band on this task — and both are prevented before the body is written"],
        ],
      },
      { type: "heading", text: "The four moves" },
      {
        type: "text",
        text: "Every exam email, whatever the situation, is built from the same four moves. Move one, the greeting: the reader's identity fixes it before you write anything else. Move two, the purpose: one line, straight after the greeting, that states why the email exists. Move three, the request: one or two sentences per listed point, in the order the situation prints them — the ask the email exists to make, whether that ask is a question, a report or a proposal. Move four, the close: a forward-looking line — a request for a reply, a thanks, a next step — and the sign-off that completes the pair the greeting began. Fit beats length: a five-sentence email that covers every point in the right tone outperforms a rambling page every time.",
      },
      {
        type: "steps",
        title: "The five-minute email plan",
        intro: "Five minutes is enough when each move owns its slice of the clock:",
        steps: [
          {
            title: "Read for reader and points (fifteen seconds)",
            text: "Name the recipient — office, professor, housemate — and count the listed points. Each point is a scored job, and the count tells you how long the body may run.",
            examples: [{ english: "A prompt listing three points for a housing office: reader unknown, so the formal dial position; body = three jobs.", note: "The count is a coverage checklist before it is a writing plan." }],
          },
          {
            title: "Set the pair (ten seconds)",
            text: "Greeting and sign-off are chosen together: 'Dear Sir or Madam' closes 'Yours faithfully'; 'Dear Ms Havel' closes 'Yours sincerely'; 'Hi Sam' closes 'Thanks,' or 'See you soon'. Fixing the pair now prevents the most visible tone break in the task.",
            examples: [{ english: "Pair chosen in the margin before the body exists: Dear Professor Ibarra → Yours sincerely.", note: "The pair is a frame decision, not a finishing decision." }],
          },
          {
            title: "State the purpose (twenty seconds)",
            text: "One sentence, first after the greeting: 'I am writing to report...' to an office, 'I'm writing because...' to a friend. The reader should never reach sentence three wondering why the email exists.",
            examples: [{ english: "'I am writing to propose my topic for the final presentation.' — the business arrives before any background.", note: "The purpose line is the email's spine, exactly as the subject–verb pair is a rebuild's spine." }],
          },
          {
            title: "Cover the request (about two minutes)",
            text: "One or two sentences per listed point, printed order, no extras. A point that asks a question ends in a question mark; a point that asks for action gets a sentence that makes the action easy to take.",
            examples: [{ english: "Point three asks one question about the time limit — so the sentence ends in a question mark, not a statement of hope.", note: "Match the sentence shape to what the point demands." }],
          },
          {
            title: "Close, sign and sweep (about ninety seconds)",
            text: "A forward-looking line, the pair's second half, your name — then one sweep: every point covered, no register drift, no stray contractions in a formal email.",
            examples: [{ english: "The sweep catches 'I'm' in an email that opened 'Dear Sir or Madam' — one pass, one repair, band protected.", note: "The sweep is cheaper than the fault it removes." }],
          },
        ],
      },
      { type: "heading", text: "The tone dial" },
      {
        type: "text",
        text: "Register is a dial with three working positions, and the recipient sets it. Formal is for readers you have never met — offices, companies, unnamed officials: no contractions, no first names, fixed phrases like 'I would be grateful if you could'. Semi-formal is for named professionals — professors, landlords, employers: title and surname, 'Yours sincerely' or 'Best regards', contractions rare. Informal is for people you actually know — housemates, classmates, friends: 'Hi' plus first name, natural contractions, phrasal verbs welcome, a sign-off like 'Thanks,' or 'See you soon'. The dial is locked before the first sentence exists; the sweep at the end simply confirms it never moved.",
      },
      {
        type: "comparison",
        title: "The dial at its two ends",
        columns: ["A formal email (unknown reader)", "An informal email (a friend)"],
        rows: [
          { aspect: "Greeting", left: "'Dear Sir or Madam,' — no name exists, so none is invented", right: "'Hi Sam,' — the first name you actually use" },
          { aspect: "Purpose line", left: "I am writing to report a fault with the heater in room 214.", right: "I'm writing because the heater in our flat has died." },
          { aspect: "Request", left: "I would be grateful if you could arrange a repair this week.", right: "Could you chase the landlord about the heater this week?" },
          { aspect: "Contractions", left: "None anywhere — every shortened form is edited out", right: "Natural and welcome — the email should sound like you" },
          { aspect: "Sign-off", left: "'Yours faithfully,' over the full name", right: "'Thanks,' or 'See you soon,' over the first name" },
        ],
        verdict: "Same situation, same points, same four moves — the dial alone changes the furniture.",
      },
      {
        type: "definition",
        term: "register",
        partOfSpeech: "noun",
        definition: "The level of formality a piece of writing adopts, fixed by the reader and the situation; on the exam email it runs from formal (unknown officials) through semi-formal (named professionals) to informal (friends and housemates), and it must hold from greeting to sign-off.",
        example: {
          english: "A housing office and a housemate can receive the same news on the same day in two completely different registers.",
          translation: "",
        },
      },
      {
        type: "example",
        title: "Email lines across the dial",
        items: [
          { english: "Dear Sir or Madam, I am writing to report that the heater in room 214 has not worked since Monday.", note: "The formal pair plus a purpose line that reaches the business in one breath — the reader never waits.", domain: "campus" },
          { english: "Dear Professor Ibarra, I am writing to propose my topic for the final presentation.", note: "Semi-formal: title and surname, no contraction, but no ceremony either — the purpose still comes first.", domain: "campus" },
          { english: "Hi Sam, I'm writing because our internet bill has gone up again and I think we should look at other plans.", note: "Informal: first name, contraction, and a purpose line that talks like a person.", domain: "everyday" },
          { english: "I would be grateful if you could confirm whether the repair can happen before the weekend.", note: "The all-purpose formal request chunk — one fixed pattern carries the whole ask without modal gymnastics.", domain: "work" },
          { english: "The current plan costs us forty pounds a month; switching would save about ten, but the new provider caps the data.", note: "One listed point covered with fact, benefit and drawback in a single developed sentence — economy the five-minute cap demands.", domain: "everyday" },
          { english: "Thank you for your time — I look forward to your reply. Yours sincerely, Ana Duarte", note: "The close that looks forward, and the sincere pair's second half over the full name.", domain: "exam" },
          { english: "An email that opens 'Dear Ms Havel,' and signs off 'See you soon!' has broken its dial halfway — the pair is chosen together or not at all.", note: "The most visible tone break in exam emails, and the cheapest to prevent.", domain: "exam" },
        ],
      },
      {
        type: "four-skills",
        title: "Worked model — the presentation-topic email",
        reading: {
          text: "The prompt as printed: 'Your professor has asked each student to email a proposed topic for the final presentation. In your email: state the topic you propose; explain why it fits the course; ask one question about the time limit.'",
          task: "Before writing: name the dial position, the greeting-and-sign-off pair, and the job of each body sentence.",
        },
        writing: {
          task: "Write the email for the prompt in the reading tab — about five minutes, covering all three listed points in the printed order.",
          guide: [
            "Pair first: 'Dear Professor Ibarra' closes 'Yours sincerely' — decided before the body exists.",
            "Purpose line: 'I am writing to propose my topic for the final presentation.'",
            "Point one: the topic itself, in one clear sentence.",
            "Point two: why it fits — connect it to something the course actually did.",
            "Point three: one question about the time limit, ending in a question mark.",
            "Close forward-looking, then sign with the pair's second half and your name.",
          ],
          model:
            "Dear Professor Ibarra,\n\nI am writing to propose my topic for the final presentation: how campus food waste could be reduced in the dining halls.\n\nThe topic fits the course because it connects the sustainability unit with the survey methods we practised in week six, and I can collect real data from my own hall in time.\n\nCould you let me know whether the presentation has a strict ten-minute limit, or whether questions are counted inside that time?\n\nThank you for your time. I look forward to your reply.\n\nYours sincerely,\nAna Duarte",
        },
        listening: {
          script:
            "Fifteen seconds on the prompt: a professor, named — so the dial sits semi-formal, title and surname, 'Yours sincerely' to close. Three listed points, so the body is three jobs: topic, fit, question. Purpose line next — 'I am writing to propose' — and then the points in the printed order, one or two sentences each. The fit sentence works because it names something the course actually did: the week-six survey methods. The question ends in a question mark, which sounds obvious until you read drafts where it doesn't. Close looking forward, sign the pair, sweep once for contractions — there should be none — and the five minutes are up with seconds to spare.",
          task: "Listen once, then say what the sweep checks and why this email contains no contractions.",
        },
        speaking: {
          task: "Tell a partner your four moves for this prompt in thirty seconds: pair, purpose line, the three point-jobs, close.",
          frames: [
            "The reader is..., so the pair is...",
            "My purpose line will be...",
            "Point one is..., point two is..., point three asks...",
            "My close looks forward because...",
          ],
          checklist: [
            "Did I choose the pair before the body?",
            "Did I give each listed point its own job?",
            "Did my close invite the reply the prompt needs?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register fit", "One dial position held from 'Dear Professor Ibarra' to 'Yours sincerely' — no contractions, no ceremony, no drift"],
          ["Point coverage", "Topic, fit and time-limit question each own a sentence block, in the printed order — nothing asked for is missing and nothing extra is volunteered"],
          ["Purpose first", "The opening line states the business, so the reader never wonders why the email exists"],
          ["Answerable detail", "The fit sentence anchors itself in something real — the week-six survey methods — which makes the proposal credible"],
          ["Forward-looking close", "The last line invites the reply the situation actually needs, and the sign-off completes the pair the greeting began"],
        ],
      },
      {
        type: "mistakes",
        title: "Email faults, corrected",
        items: [
          { wrong: "Hey Professor, I'm writing about my presentation topic.", right: "Dear Professor Ibarra, I am writing to propose my topic for the final presentation.", reason: "'Hey' plus a contraction breaks the semi-formal register a named professional reader sets; the title and surname are the dial's flag." },
          { wrong: "Dear Sir or Madam, ... Best wishes, Ana", right: "Dear Sir or Madam, ... Yours faithfully, Ana Duarte", reason: "The sign-off must complete the pair the greeting began; 'Best wishes' is informal furniture standing in a formal room." },
          { wrong: "Covering two of the three listed points and hoping the third is implied.", right: "Give every listed point its own sentence — the prompt's list is a coverage checklist, not a menu.", reason: "Point coverage is scored development: an implied point is an uncovered point, whatever the prose quality." },
          { wrong: "Spending two of the five minutes polishing the greeting line.", right: "Fix the pair in ten seconds and spend the minutes on the body, where the points live.", reason: "The greeting carries register, not content; over-polishing it starves the sentences the development area actually reads." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rehearse the three dial positions and their pairs until the greeting names its sign-off automatically — the frame is free marks once it is automatic"],
          ["While the clock runs", "Watch the move clock: purpose line by minute one, points by minute four, close and sweep inside five"],
          ["If you are stuck", "Write the point you can already phrase — usually the easiest listed point — and let its sentence suggest the purpose line backwards"],
          ["Final minutes", "Sweep for the pair, the point count and the contractions: greeting and sign-off agree, every point present, register never drifted"],
        ],
      },
      {
        type: "summary",
        points: [
          "Four moves build every exam email: greeting, purpose, request, close and sign-off.",
          "The recipient sets the register before the first sentence: formal for unknown readers, semi-formal for named professionals, informal for people you know.",
          "Greeting and sign-off are chosen as a pair — 'Dear Sir or Madam' with 'Yours faithfully', 'Dear Ms Havel' with 'Yours sincerely', 'Hi Sam' with 'Thanks'.",
          "Every listed point owns a sentence in the printed order; coverage is scored development, and an implied point is an uncovered point.",
          "Five minutes is enough: fifteen seconds of reading, ten for the pair, twenty for the purpose, two minutes for the points, ninety seconds to close and sweep.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions from earlier lessons.",
        items: [
          { question: "How long does the exam email get, and what must it cover?", options: ["About five minutes; every point the situation lists", "Ten minutes; one long paragraph", "Two minutes; only the greeting and sign-off"], correctIndex: 0, explanation: "Five minutes and full point coverage — the email is short by design and scored on fit and completeness.", from: "Understanding the Writing section" },
          { question: "A verb chunk reading 'were' can only follow which subject chunk?", options: ["A plural subject", "A singular subject", "Any subject"], correctIndex: 0, explanation: "Agreement is ordering evidence: plural subjects take plural verb forms, and mismatches rule chunks out of the spine.", from: "Grammar and syntax for reconstruction" },
          { question: "What does the final minute of the whole Writing section belong to?", options: ["A register sweep of both constructed responses", "A fifth re-read of the reconstruction items", "Writing the email greeting"], correctIndex: 0, explanation: "The last minute repairs the cheapest faults — tone slips and missing engagement — before the section closes.", from: "Understanding the Writing section" },
        ],
      },
    ],
    questions: [
      ex({
        type: "write-response",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Write the email described in the situation — about 50–90 words, four moves, one register.",
        situation:
          "Your classmate Jin, who organises your study group, missed you at yesterday's meeting — you were at a doctor's appointment. Write the email to Jin. You know each other well. Cover: why you missed the meeting, what you will send the group before the next one, and one question about the next meeting.",
        minWords: 40,
        mustInclude: ["Jin", "appointment", "meeting"],
        hints: [
          "Set the tone dial before the greeting: a classmate you know well means the informal end.",
          "Three listed points means three jobs — reason, offer, question — one or two sentences each.",
        ],
        feedback: fb(
          "An informal email: 'Hi Jin,' a purpose line, one short paragraph per point, 'Thanks,' and your first name.",
          "The reader is a friend, so the dial sits informal: contractions are natural, the purpose line can talk like a person, and each of the three points still owns its own sentence before 'Thanks,' closes.",
          "A formal pair here — 'Dear Sir or Madam' to a housemate-level friend — breaks the register the relationship sets, and the sweep at the end exists to catch exactly that slip.",
        ),
        tags: ["toefl", "writing", "email", "tone"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "The situation asks you to email the university housing office about a broken heater; the prompt gives no name. Which opening fits?",
        hints: ["No name anywhere means the reader is unknown — which end of the dial is that?"],
        options: [
          { id: "a", text: "Hey, my heater's broken — can someone look at it?" },
          { id: "b", text: "Dear Sir or Madam, I am writing to report that the heater in my room has stopped working." },
          { id: "c", text: "Dear Mr Heater Department, greetings and salutations!" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Dear Sir or Madam, I am writing to report that the heater in my room has stopped working.",
          "An unnamed office takes the formal position: the no-name greeting, the impersonal purpose line, and later 'Yours faithfully' over the full name — the whole frame decided in the first ten seconds.",
          "(a) is a text message in costume, and (c) invents a title no real letter uses — both break the register before the report even starts.",
        ),
        tags: ["toefl", "writing", "email", "register"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "An email to a close friend opens 'Hi Marta,'. Which close keeps the register consistent?",
        hints: [],
        options: [
          { id: "a", text: "Yours faithfully," },
          { id: "b", text: "Thanks so much — see you at class on Thursday!" },
          { id: "c", text: "I remain, most sincerely yours," },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Thanks so much — see you at class on Thursday!",
          "The informal greeting pairs with warm, spoken-sounding furniture: a natural sign-off territory that matches how friends actually write to each other.",
          "(a) belongs to the no-name formal pair, and (c) is Victorian ceremony — both send the dial spinning after 'Hi Marta' promised something else.",
        ),
        tags: ["toefl", "writing", "email", "register"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Read the draft, then answer.",
        hints: [],
        passageTitle: "A draft with a fault",
        passage:
          "Dear Professor Osei, Hey, quick one — I'm super busy this week so I was wondering if maybe the presentation could like move to next week? Thx!",
        question: "Which fix matters most?",
        options: [
          { id: "a", text: "The register is broken: chat vocabulary and contractions sit inside a formal greeting and sign-off" },
          { id: "b", text: "The email is too short to be graded" },
          { id: "c", text: "The email asks two questions instead of one" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The register is broken: chat vocabulary and contractions sit inside a formal greeting and sign-off",
          "The greeting promises a semi-formal email to a named professor, and every phrase after it breaks that promise — tone consistency is what the sweep exists to protect.",
          "Short can still score if every point is covered, and the draft asks exactly one question, so neither (b) nor (c) names the real fault.",
        ),
        tags: ["toefl", "writing", "email", "register"],
      }),
      ex({
        type: "short-answer",
        difficulty: "easy",
        skill: "writing",
        prompt: "Independent practice. Four words are enough.",
        question: "Name the four moves of the exam email, in order.",
        acceptedAnswers: [
          "greeting, purpose, request, close",
          "greeting, purpose line, request, close and sign-off",
          "greeting purpose request close",
        ],
        keywords: ["greeting", "purpose", "close"],
        hints: [],
        feedback: fb(
          "Greeting, purpose, request, close.",
          "The four moves run in that fixed order — reader set, business stated, points covered, reply invited — and each owns its slice of the five minutes.",
          "Answers that begin with the purpose line or end with the request have the right ingredients in the wrong order, and order is most of what this task grades.",
        ),
        tags: ["toefl", "writing", "email", "structure"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Two minutes into the email you have a polished opening line and one of three points covered. What does the lesson train you to do?",
        hints: [],
        options: [
          { id: "a", text: "Keep polishing the opening — first impressions decide the band" },
          { id: "b", text: "Move to the remaining points; a fit-for-purpose email covers every listed point, and the opening is already good enough" },
          { id: "c", text: "Drop the close to save time" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Move to the remaining points; a fit-for-purpose email covers every listed point, and the opening is already good enough",
          "Coverage is scored development: an unfinished point costs more than an unpolished greeting, and the move clock exists precisely to stop the polish loop.",
          "The opening carries register, not the marks — and dropping the close removes the forward-looking line the reply depends on.",
        ),
        tags: ["toefl", "writing", "email", "pacing"],
      }),
    ],
    homework: [
      "Collect five practice email prompts and write only their frames — greeting, purpose line, close, sign-off — ninety seconds each, until the pair is automatic.",
      "Take one informal email you have actually sent and rewrite it twice: once semi-formal for a named professional, once formal for an unnamed office, changing nothing but the register furniture.",
    ],
    assignment: {
      title: "Write the exam email",
      instructions:
        "Fresh situation: your landlord has asked you to report a plumbing problem in the flat you rent. Write the email in five minutes against the clock — greeting and sign-off chosen as a pair, a purpose line that states the business, one or two sentences for each point (what is wrong, when it started, one request for action), and a close that invites the reply you need. Then sweep once for tone consistency before you call it finished.",
      minWords: 60,
      maxWords: 160,
    },
  },
  // ---------------------------------------------------------------------------
  // Unit 4 — Write for an Academic Discussion
  // ---------------------------------------------------------------------------
  {
    slug: "toefl-writing-discussion",
    title: "Write for an Academic Discussion",
    description:
      "The ~10-minute discussion post in three moves: state a position, engage a classmate's actual argument, and support your view with reasons that explain themselves — in the academic-but-conversational register the forum expects, with a complete model post taken apart.",
    objectives: [
      "state a clear position in the post's first sentence and keep every later sentence in its service",
      "engage at least one classmate by name, answering their reasoning rather than mentioning them",
      "support the position with reasons that explain themselves, using because-chains and concrete examples",
      "write 100+ words in the academic-but-conversational register inside ten minutes",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "The discussion post arrives last, with the largest single allowance in the section: about ten minutes and a hundred-word floor to join an academic conversation. The prompt gives you a professor's question and classmates' posts — real positions to agree with, extend or push back on. This lesson teaches the three moves that make a post substantive: state your position, engage a classmate's argument directly, and support your view with reasons that explain themselves — all in a register that is academic without being ceremonial.",
        beforeYouStart: [
          "You know the discussion task's ~10-minute allowance and 100-word floor from 'Understanding the Writing section'.",
          "You can hold a register from greeting to sign-off in the exam email.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the Write for an Academic Discussion task, item twelve of twelve"],
          ["Task & question types", "One constructed response: a professor's question plus classmates' posts, answered in ~10 minutes with at least 100 words"],
          ["What is assessed", "A stated position, genuine engagement with classmates, and supported reasons — development, organisation and language use in the discussion register"],
          ["Why this matters", "The post carries the heaviest constructed weight in the section, and engagement with classmates is a scored requirement many candidates never notice"],
        ],
      },
      { type: "heading", text: "What the prompt gives you" },
      {
        type: "text",
        text: "The screen shows three things: a professor's question — usually a choice, a prediction or a judgement call from the course's territory — and two classmates' posts taking positions on it. Your post joins that thread. The professor's question is the task's spine: read it twice and underline what it actually asks, because a beautiful answer to a different question is development wasted. The classmates' posts are not decoration — the prompt asks you to respond to the discussion, and a post that ignores them is incomplete however well argued. Ten minutes, a hundred-word floor, and a reader grading how well you join an academic conversation.",
      },
      { type: "heading", text: "The three moves" },
      {
        type: "text",
        text: "Move one: state your position in the first sentence. Agree, disagree or partly agree — but commit, because the development area starts looking for a stance immediately, and hedging spends your strongest sentence saying nothing. Move two: engage a classmate by name. Paraphrase their actual argument, then agree with it, extend it, or push back on its reasoning — mention is not engagement, and 'I agree with Dana' alone leaves her argument unmet. Move three: support your position with reasons that explain themselves. A because-chain — position, because reason, because evidence — does more development work than a stack of bare assertions, and one concrete example from the course's territory beats three abstractions.",
      },
      {
        type: "steps",
        title: "The ten-minute plan",
        intro: "Ten minutes divides cleanly when each move owns its share:",
        steps: [
          {
            title: "Read the question twice (one minute)",
            text: "Underline the professor's actual ask — choose, predict, judge — and restate it to yourself in plain words; a post that answers a neighbouring question reads as off-task however fluent it is.",
            examples: [{ english: "'Should universities replace printed textbooks?' is a choice question — the post must choose a side, not survey the field.", note: "The question's shape dictates the position sentence's shape." }],
          },
          {
            title: "Choose your engagement (one minute)",
            text: "Read both posts and pick the one you can meet honestly: full agreement to extend, partial agreement to refine, or reasoned disagreement. Note the classmate's actual argument in five words.",
            examples: [{ english: "Marcus, five words: 'digital is cheaper and portable' — an argument ready to be met.", note: "A five-word note keeps the engagement honest and fast." }],
          },
          {
            title: "Draft the position sentence (one minute)",
            text: "One sentence, committing: 'My position is that...' or 'I would argue that...'. Every later sentence serves this one, so write it before anything else exists.",
            examples: [{ english: "'My position is that both formats should stay available' — stance, topic and room for a because-chain, all in one line.", note: "The position sentence is the post's spine." }],
          },
          {
            title: "Write the body (six minutes)",
            text: "Engagement first, reason second, development third: meet the classmate's argument, give your because-chain, and add one concrete example if the words allow.",
            examples: [{ english: "Body shape: meet Marcus → because-chain → corridor kitchen example → synthesising close.", note: "Four jobs, six minutes, no paragraph ceremony required." }],
          },
          {
            title: "Sweep (one minute)",
            text: "Four checks: position stated in sentence one, classmate engaged by name, reasons doing real work, register academic but conversational — and the word count past a hundred.",
            examples: [{ english: "The sweep catches a post with a strong position but no classmate named — a completed-looking draft that is still an incomplete task.", note: "Engagement is the most commonly missed requirement." }],
          },
        ],
      },
      {
        type: "definition",
        term: "engagement",
        partOfSpeech: "noun",
        definition: "Answering a classmate's actual argument — agreeing with it, extending it or pushing back on its reasoning — as distinct from merely mentioning their name; the discussion task expects it and the scoring guides reward it.",
        example: {
          english: "'Dana's friendship argument is strong, but friendship also grows in clubs, which no housing policy controls' meets her reasoning; 'I agree with Dana' does not.",
          translation: "",
        },
      },
      {
        type: "example",
        title: "Post sentences that do the three moves",
        items: [
          { english: "My position is that both formats should stay available, because cost and comprehension pull in different directions.", note: "The first sentence commits — stance, topic and reason-shape all announced at once.", domain: "academic" },
          { english: "Marcus is right that digital copies are cheaper, and for commuters that saving matters every single week.", note: "Engagement by extension: agree with the classmate's reasoning, then add the angle it missed.", domain: "academic" },
          { english: "I share Iris's concern about screen fatigue, yet I would keep the digital option for courses that change editions yearly.", note: "Partly agreeing is still a position — the concession sharpens rather than replaces the stance.", domain: "academic" },
          { english: "First-year students on my corridor made friends in the shared kitchen, not in their rooms — which is where housing policy cannot reach.", note: "A concrete example that does argument-work: it answers a friendship claim with evidence from real life.", domain: "campus" },
          { english: "There are many different opinions about this important topic, and everyone's view deserves respect.", note: "The anti-model: no position, no engagement, no reason — the most expensive opening sentence in the task.", domain: "exam" },
          { english: "Taken together, the cost argument and the reading research point to a digital-first policy with a printed opt-out.", note: "A closing sentence that synthesises instead of repeating — organisation a rater can see.", domain: "academic" },
          { english: "tbh dorms are just better lol — a post that fails the register before it fails the argument.", note: "Text-message spelling is a language-use fault here; the forum wants academic but conversational, not chat.", domain: "exam" },
        ],
      },
      {
        type: "four-skills",
        title: "Worked model — the textbook-format post",
        reading: {
          text: "The prompt as printed: Professor Lindqvist writes, 'This week's question: should universities replace printed textbooks with digital versions? Post your view and respond to at least one classmate.' Marcus has posted that digital copies are cheaper and easier to carry; Iris has posted that she remembers more from printed pages.",
          task: "Before writing: name the professor's actual ask, the classmate you will engage, and the position you will open with.",
        },
        writing: {
          task: "Write the post: state a position on Professor Lindqvist's question, engage Marcus or Iris directly, and support your position with at least one developed reason — at least 100 words.",
          guide: [
            "Open with the position in one sentence: 'My position is that...'",
            "Engage by name: agree, partly agree, or push back on the classmate's reasoning.",
            "Give one reason and develop it with a because-chain or a concrete example.",
            "Close with a sentence that synthesises — what the class should weigh next.",
            "Sweep: position, engagement, reasons, register, word count.",
          ],
          model:
            "Professor Lindqvist asks whether universities should replace printed textbooks with digital versions, and my position is that both formats should stay available. Marcus is right that digital copies are cheaper and easier to carry, and for commuters like me that matters daily. But his convenience argument overlooks how many courses ask students to annotate as they read, and heavy annotation still works better on paper. Iris's experience matches what I have seen this term: plenty of students simply retain more from printed pages. Cost is a real constraint, so a digital-first policy with a printed option for those who need it seems the fair settlement.",
        },
        listening: {
          script:
            "Ten minutes for the discussion post, and the first two are not writing. Minute one: read the professor's question twice and underline the actual ask — is it a choice, a prediction, a judgement? Minute two: read the classmates' posts and choose the one you can engage honestly — agree, partly agree, or disagree with the reasoning, never with the person. Then write: position sentence first, engagement second, reason third, and develop the reason until it explains itself. The last minute belongs to the sweep: position stated, classmate engaged, reasons doing work, register academic but conversational, word count past a hundred.",
          task: "Listen once, then say what the first two minutes are for.",
        },
        speaking: {
          task: "Tell a partner your position and engagement plan for Professor Lindqvist's question in thirty seconds.",
          frames: [
            "My position in one sentence is...",
            "I am engaging [classmate], because their point about...",
            "My strongest reason is... — it matters because...",
            "If I have words left, I will close by...",
          ],
          checklist: [
            "Did my position sentence stand alone?",
            "Did I name the classmate and their actual argument?",
            "Did my reason explain itself with a because-chain?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Position first", "The opening sentence commits to a stance the reader can hold onto — exactly what the development area looks for first"],
          ["Real engagement", "Marcus and Iris are answered by name, with their reasoning extended and used rather than merely mentioned"],
          ["Developed support", "The annotation reason explains itself, and Iris's experience is deployed as evidence instead of decoration"],
          ["Register control", "Measured but conversational phrasing throughout — no slang, no stiffness, no essay ceremony"],
          ["Synthesising close", "The final sentence weighs both sides' real constraint and proposes a settlement, showing organisation the rater can see"],
        ],
      },
      {
        type: "mistakes",
        title: "Post faults, corrected",
        items: [
          { wrong: "Opening the post with 'There are many different opinions about this topic.'", right: "Open with the position: 'My position is that both formats should stay available.'", reason: "The scoring guides reward a stated stance, and a topic announcement spends the post's most valuable sentence saying nothing." },
          { wrong: "Ignoring the classmates and writing a private essay.", right: "Name at least one classmate and answer their actual argument — agree with it, extend it or push back.", reason: "Responding to the discussion is part of the task the professor set; a post that never meets it is incomplete however well written." },
          { wrong: "tbh Mei is right, dorms r just better lol", right: "Mei is right that shared housing speeds up friendships, though quieter floors would help late-night studiers.", reason: "Text-message register is a language-use fault in this forum — academic but conversational is the target, and chat spelling misses it entirely." },
          { wrong: "Stacking bare assertions: 'Campus housing is cheap. It is safe. It is convenient. It is friendly.'", right: "State one position and develop it: give a reason and let it explain itself with a because-chain.", reason: "A list is undeveloped content — the guides reward one supported claim over five unsupported ones." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Memorise the three moves — position, engagement, support — as a checklist the post must satisfy before it counts as finished"],
          ["While the clock runs", "Write the position sentence first and keep it visible; every later paragraph must serve it"],
          ["If you are stuck", "Borrow structure from a classmate: agree with their reason, then extend it with one more because — partly agreeing is still a position"],
          ["Final minutes", "Sweep for the three moves and the word count: position stated, classmate named, reasons developed, at least a hundred words"],
        ],
      },
      {
        type: "summary",
        points: [
          "The prompt gives a professor's question and classmates' posts; the task is to join that discussion, not to write a private essay.",
          "State your position in the first sentence — agree, disagree or partly agree, but commit before anything else exists.",
          "Engage at least one classmate by name and answer their reasoning; mention is not engagement.",
          "Support the position with reasons that explain themselves — because-chains and concrete examples beat stacked assertions.",
          "The register is academic but conversational: measured stance, no slang, no essay ceremony, 100+ words inside ten minutes.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions from earlier lessons.",
        items: [
          { question: "How many minutes and what minimum length does the discussion task carry?", options: ["About ten minutes and at least 100 words", "About five minutes and at least 150 words", "About two minutes and one sentence"], correctIndex: 0, explanation: "Ten minutes and a hundred-word floor — the heaviest constructed allowance in the section.", from: "Understanding the Writing section" },
          { question: "On the email lesson's tone dial, which greeting suits a professor you address by surname?", options: ["Dear Professor Ibarra", "Hey there", "Dear Sir or Madam"], correctIndex: 0, explanation: "A named professional reader takes a title and surname — the semi-formal position on the dial.", from: "Write an Email: structure and tone" },
          { question: "How is the overall band calculated?", options: ["The average of the four section bands, rounded to the nearest half", "The highest section band", "The Writing band alone"], correctIndex: 0, explanation: "All four sections feed the overall average, which is then rounded to the nearest half step.", from: "The 1–6 band scale" },
        ],
      },
    ],
    questions: [
      ex({
        type: "write-response",
        difficulty: "hard",
        skill: "writing",
        prompt: "Guided practice. Write the discussion post described in the situation — at least 60 words in the exercise, three moves, one register.",
        situation:
          "Professor Barre's discussion question: 'Should first-year students be required to live on campus?' Dana has posted that campus housing helps new students make friends quickly. Wei has posted that living off campus teaches budgeting. Write your post: state your own position, respond directly to Dana's point about friendship, and support your position with at least one reason.",
        minWords: 50,
        mustInclude: ["Dana", "because", "campus"],
        hints: [
          "Open with your own position in one sentence — agree, disagree or partly agree.",
          "Name Dana and answer her friendship argument directly, then give your because-chain.",
        ],
        feedback: fb(
          "A post that opens with a position sentence, meets Dana's friendship argument by name, and supports your stance with a developed reason.",
          "The three moves are the scored job: stance in sentence one, engagement that answers her actual reasoning, and a because-chain that lets your reason explain itself in the academic-but-conversational register.",
          "A post that only announces the topic or only agrees without reasoning leaves the two heaviest moves undone — engagement and support are where the development marks live.",
        ),
        tags: ["toefl", "writing", "discussion", "engagement"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which sentence actually engages a classmate's post rather than ignoring it?",
        hints: ["Engagement answers the argument, not the atmosphere."],
        options: [
          { id: "a", text: "Housing is expensive and universities should build more of it." },
          { id: "b", text: "Dana's point about friendship is real, but friendship does not require shared housing — clubs do that work too." },
          { id: "c", text: "I agree with everything that has been said so far in this discussion." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Dana's point about friendship is real, but friendship does not require shared housing — clubs do that work too.",
          "The sentence names the classmate, states her actual claim, and pushes back on the reasoning with a counter-example — all three engagement jobs in one line.",
          "(a) never meets a classmate's argument, and (c) agrees with everything, which answers nothing and supports no position.",
        ),
        tags: ["toefl", "writing", "discussion", "engagement"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which sentence fits the academic discussion register?",
        hints: [],
        options: [
          { id: "a", text: "tbh dorm life is overrated lol" },
          { id: "b", text: "While I share Wei's concern about budgeting, I would argue that first-year students gain more from campus support services." },
          { id: "c", text: "It is hereby resolved that the aforementioned students shall reside on campus." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "While I share Wei's concern about budgeting, I would argue that first-year students gain more from campus support services.",
          "Measured stance, a named classmate, a concession and a position — academic but conversational is exactly this pitch, and it does three moves in one sentence.",
          "(a) is chat register and (c) is legal ceremony; both miss the forum's pitch from opposite ends.",
        ),
        tags: ["toefl", "writing", "discussion", "register"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Read the post, then answer.",
        hints: [],
        passageTitle: "A post with a weakness",
        passage:
          "I think first-years should live on campus. Campus is convenient. There is a dining hall. My cousin liked it. Some students may disagree. In conclusion, campus is good.",
        question: "What is the post's strongest weakness?",
        options: [
          { id: "a", text: "It is too short by a few words" },
          { id: "b", text: "It states a position but develops nothing and engages no classmate — development is the thinnest scoring area here" },
          { id: "c", text: "It uses too many connectors" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It states a position but develops nothing and engages no classmate — development is the thinnest scoring area here",
          "Every sentence is a bare assertion: no because-chain, no example doing argument-work, no classmate met — the three moves shrink to one, and the band follows the moves.",
          "Word count is close to adequate, and the post barely uses any connectors at all, so neither (a) nor (c) names the fault that costs the marks.",
        ),
        tags: ["toefl", "writing", "discussion", "development"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. One phrase is enough.",
        question: "What must a discussion post do that a private essay need not?",
        acceptedAnswers: [
          "engage with classmates' posts",
          "respond to classmates",
          "answer a classmate's argument",
          "engage with classmates",
        ],
        keywords: ["classmate", "respond"],
        hints: [],
        feedback: fb(
          "Engage with classmates' posts.",
          "The forum is a conversation: naming a classmate and answering their actual argument is part of the professor's task, and no private essay carries that requirement.",
          "Answers about structure or length name real demands, but they apply to essays too — engagement is the requirement unique to the discussion.",
        ),
        tags: ["toefl", "writing", "discussion", "engagement"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "In the ten-minute plan, what should the first two minutes produce?",
        hints: [],
        options: [
          { id: "a", text: "A finished first draft" },
          { id: "b", text: "The professor's question in your own words, and the classmate whose argument you will meet" },
          { id: "c", text: "A full outline with every reason numbered" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The professor's question in your own words, and the classmate whose argument you will meet",
          "Reading twice and choosing the engagement are the two decisions every later sentence depends on; drafting before they are made wastes the body minutes on unforced errors.",
          "A draft in two minutes has not yet answered the actual question, and a numbered outline spends planning time the hundred-word post does not need.",
        ),
        tags: ["toefl", "writing", "discussion", "pacing"],
      }),
    ],
    homework: [
      "Find any discussion forum in your own course or study group and write one 100-word post that does all three moves — position, engagement, support — before you post it.",
      "Take the anti-model post from this lesson and rewrite it twice: once adding engagement, once adding a because-chain, and note which repair lifts the development more.",
    ],
    assignment: {
      title: "Write a discussion post",
      instructions:
        "Professor Haddad asks: 'Should student assessment rely more on coursework or on final exams?' Priya has posted that coursework rewards steady effort; Marco has posted that exams are fairer because everyone sits the same paper. Write your post — at least a hundred words — stating your position, engaging directly with Priya or Marco, and supporting your view with at least two reasons. Finish with the sweep: position stated, classmate engaged, reasons developed, register academic but conversational.",
      minWords: 100,
      maxWords: 220,
    },
  },
  // ---------------------------------------------------------------------------
  // Unit 4 (continued) — academic vocabulary for the written tasks
  // ---------------------------------------------------------------------------
  {
    slug: "toefl-writing-language",
    title: "Academic vocabulary for the written tasks",
    description:
      "The language shelf both constructed tasks draw from: precise verbs that report and argue without overclaiming, stance language that shows where you stand, and connectors that make logic visible — plus the register awareness that keeps the same logic dressed differently in an email and a post.",
    objectives: [
      "choose reporting and stance verbs that match the strength of your evidence",
      "signal position with stance phrases instead of padding or hedging",
      "deploy connectors that keep the promises their meanings make",
      "avoid the overclaiming and register-breaking vocabulary faults the language-use area penalises",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Reconstruction tests your syntax; the email and the discussion post test your word choice under a clock. This lesson stocks one shelf that serves both: precise verbs that report and argue without overclaiming, stance language that shows where you stand, and connectors that make the logic visible. Every phrase here is chosen for the written tasks of this section — small, learnable as whole chunks, and safe to reuse on test day.",
        beforeYouStart: [
          "You can build the four-move email and the three-move post from the two previous lessons.",
          "You know what register means and can hold one from first line to last.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the language-use area of both constructed tasks, email and discussion post"],
          ["Task & question types", "No new task types; this lesson upgrades the vocabulary, stance and connectors inside the two constructed responses"],
          ["What is assessed", "Precision and appropriacy of vocabulary, stance signalling, and cohesive devices that organise rather than decorate"],
          ["Why this matters", "Language use is one of the three scoring-guide areas, and overclaiming or register-breaking vocabulary costs it directly"],
        ],
      },
      { type: "heading", text: "Precise verbs carry your claims" },
      {
        type: "text",
        text: "Weak writing leans on a small set of all-purpose verbs — is, has, makes, says — and on vague nouns like thing and stuff. The language-use area rewards the opposite: verbs that carry the claim's exact weight. Suggest reports evidence without certainty; argue announces a position you will defend; acknowledge concedes a real point before you counter it; demonstrate claims proof you can actually show. Choose the verb first and let the sentence assemble around it. One warning travels with the shelf: match the verb to the evidence. 'The survey suggests' fits forty responses from one faculty; 'the survey proves' does not — and overclaiming is a language-use fault as real as a grammar slip.",
      },
      { type: "heading", text: "The stance shelf" },
      {
        type: "table",
        title: "Stance moves, phrases and watch-outs",
        headers: ["Stance move", "Phrases that do it", "Watch out for"],
        rows: [
          ["Reporting evidence", "suggests, indicates, points to, appears to", "prove, undoubtedly, beyond all doubt — overclaiming what the evidence cannot carry"],
          ["Stating a position", "I would argue, my position is, I am convinced that", "I feel like, maybe, sort of — hedging that hides the stance the task asks for"],
          ["Conceding then countering", "Admittedly..., I share this concern, and yet", "Conceding without countering, which leaves the post with no position of its own"],
          ["Adding support", "Moreover, In addition, What is more", "Stacking four add-ons in a row, which reads as padding rather than development"],
          ["Showing contrast", "However, By contrast, That said", "But at a sentence start is grammatical yet casual — the written tasks prefer the measured connectors"],
        ],
        caption: "Learn each row as one chunk — verb or phrase plus its limitation — so assembly under the clock is arrangement, not search.",
      },
      { type: "heading", text: "Connectors that earn their place" },
      {
        type: "text",
        text: "A connector is a promise about the next sentence: however promises a turn, moreover promises more of the same, that said promises a concession, therefore promises a consequence. Broken promises confuse a reader more than no connectors at all — a however followed by agreement, or a moreover followed by a contradiction, reads as machinery misfiring. One connector per logical link is enough: two in a row double-signpost the same turn, and three make the writing feel stitched. In the five-minute email, connectors are nearly invisible furniture; in the discussion post they are the organisation a rater can actually see.",
      },
      {
        type: "comparison",
        title: "One idea, two registers",
        columns: ["In an informal email", "In the discussion post"],
        rows: [
          { aspect: "Making a request", left: "Could you send me the notes from Thursday?", right: "I would ask whether the readings are compulsory for the presentation." },
          { aspect: "Showing stance", left: "I reckon the plan is worth a try.", right: "I would argue that the plan deserves a trial run." },
          { aspect: "Adding a point", left: "Also, the new plan is cheaper.", right: "Moreover, the new plan is cheaper to maintain." },
          { aspect: "Disagreeing", left: "I'm not so sure about that.", right: "I am not convinced that this follows from the data." },
          { aspect: "Closing", left: "Thanks a million — see you Monday!", right: "Taken together, these points suggest a compromise is possible." },
        ],
        verdict: "The logic is shared; the furniture is not — borrow the register, never the phrasing, across tasks.",
      },
      {
        type: "definition",
        term: "stance",
        partOfSpeech: "noun",
        definition: "The writer's visible position toward a claim — certainty, doubt, agreement or resistance — expressed through verbs and stance phrases rather than declared outright; the discussion task asks for a clear one.",
        example: {
          english: "'The findings suggest' shows cautious stance; 'the findings prove' shows a stance the evidence may not support.",
          translation: "",
        },
      },
      {
        type: "example",
        title: "The shelf in use",
        items: [
          { english: "The class survey suggests that most students prefer afternoon tutorials, though the sample was small.", note: "Suggest plus an honest limitation — evidence reported at exactly its weight.", domain: "academic" },
          { english: "I would argue that first-year students benefit more from campus services than from campus housing rules.", note: "The position verb announces a defended claim — the stance the discussion post must show.", domain: "academic" },
          { english: "Admittedly, digital textbooks are cheaper; that said, annotation still works better on paper for many readers.", note: "Concede, then counter — two stance moves in one breath, and the position survives the concession.", domain: "academic" },
          { english: "Could you confirm the room number for Thursday's meeting? Also, I will bring the printed handouts.", note: "An informal email where 'also' is the right-sized connector — no ceremony needed between colleagues who know each other.", domain: "work" },
          { english: "The library extended its hours during exams; as a result, complaints about late-night study spaces fell sharply.", note: "The consequence connector shows the logical link — organisation made visible for the rater.", domain: "campus" },
          { english: "I am writing to ask whether the deposit could be returned before the end of the month.", note: "Semi-formal precision: one polite verb phrase does the asking that a paragraph of politeness would blur.", domain: "everyday" },
          { english: "The data prove that everyone prefers digital copies — an overclaim five survey responses cannot carry.", note: "Overclaiming is a language-use fault: report at the evidence's weight and let the position verb carry the conviction.", domain: "study" },
        ],
      },
      {
        type: "four-skills",
        title: "The language workbench",
        reading: {
          text: "Two versions of one sentence from a discussion draft: (A) 'The library thing is good because it has more stuff for studying.' (B) 'The extended library hours support late-night study because the reading rooms stay open past midnight.'",
          task: "Name what changed: the nouns, the verb, and the evidence the second version adds.",
        },
        writing: {
          task: "Write three sentences reporting an imaginary class survey — one with a reporting verb at the evidence's weight, one with a stance phrase stating a position, one with a connector showing a logical link — then check each against the shelf's watch-outs.",
          guide: [
            "Sentence one: report the finding with suggest or indicate, plus its honest limitation.",
            "Sentence two: state your position with 'I would argue' or 'my position is'.",
            "Sentence three: link two ideas with however, moreover or as a result — one link only.",
            "Sweep: no overclaiming, no hedging that hides the stance, no doubled connectors.",
          ],
          model:
            "The survey of forty first-year students suggests that afternoon tutorials are preferred, though the sample covered only one faculty. My position is that tutorial times should follow the survey, because attendance is the outcome the policy exists to improve. Moreover, the same survey found that evening library use rises during tutorials, which supports keeping both services open late.",
        },
        listening: {
          script:
            "Choose the verb before the sentence, and let the sentence assemble around it. If the evidence is five responses, the verb is suggests; if it is a controlled study, the verb can be stronger — but prove is a word almost no classroom evidence can carry. Stance works the same way: 'I would argue' announces a defended position, while 'I feel like' hides the very stance the task asks you to show. And connectors are promises — however promises a turn, moreover promises more of the same — so keep one promise per link and never double-signpost a turn.",
          task: "Listen once, then say which verb fits five survey responses, and why.",
        },
        speaking: {
          task: "Read your three survey sentences aloud, stressing the verb or connector that carries each stance move.",
          frames: [
            "My reporting sentence is..., and the verb I chose is... because...",
            "My stance sentence uses...",
            "My connector promises a..., and the next sentence keeps that promise.",
            "The watch-out I checked for was...",
          ],
          checklist: [
            "Did the stressed word land on the stance carrier?",
            "Did each connector's promise match what followed it?",
            "Could a listener hear the difference between suggest and prove?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Weight-matched verbs", "Suggest reports forty responses honestly, and the limitation clause keeps the claim at the evidence's own weight"],
          ["Visible stance", "The position sentence commits in plain words — exactly what the development area looks for in a stance"],
          ["Promising connectors", "Moreover links two genuine supports without doubling — organisation the rater can see"],
          ["Register discipline", "All three sentences sit in the discussion register, so the shelf transfers to the post without translation"],
        ],
      },
      {
        type: "mistakes",
        title: "Vocabulary faults, corrected",
        items: [
          { wrong: "The data prove that printed textbooks are better for everyone.", right: "The data suggest that printed textbooks serve some readers better.", reason: "Proof is a heavyweight claim; evidence reported beyond its weight reads as a language-use fault even when the grammar is perfect." },
          { wrong: "I am agree with Dana that campus housing helps new students.", right: "I agree with Dana that campus housing helps new students.", reason: "Agree is already a verb in English; adding 'am' builds a form that exists in several other languages but not in this one." },
          { wrong: "Moreover, furthermore, in addition, the plan is cheaper.", right: "Moreover, the plan is cheaper.", reason: "Three add-on connectors signpost the same turn three times — machinery misfiring where one word did the whole job." },
          { wrong: "Notwithstanding the foregoing, I remain of the opinion that dormitories are preferable.", right: "That said, I still think campus housing is the better option for first-years.", reason: "Legal-register furniture in a class discussion is stiffness, not formality — the post wants academic but conversational." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Learn the shelf as chunks — verb plus limitation, stance phrase plus because, connector plus promise — so under-clock assembly is arrangement, not search"],
          ["While the clock runs", "Choose each sentence's verb first and let the sentence assemble around it; the verb is the engine and the rest follows"],
          ["If you are stuck", "Downgrade rather than overclaim: if suggest feels weak, the honest fix is more evidence in the next clause, not a stronger verb"],
          ["Final minutes", "Sweep for the three watch-outs — overclaimed verbs, hidden stance, doubled connectors — one pass over both constructed responses"],
        ],
      },
      {
        type: "summary",
        points: [
          "Precise verbs carry claims at the evidence's weight: suggest and indicate report, argue and maintain defend, and prove is a word classroom evidence almost never earns.",
          "Stance language shows where you stand — I would argue, admittedly, that said — without padding or hedging the position into hiding.",
          "Connectors are promises about the next sentence: keep one promise per link and never double-signpost a turn.",
          "The shelf is register-aware: the same logic dresses differently in an informal email and a discussion post.",
          "Overclaiming, hidden stance and connector misfires are language-use faults — as real as grammar slips and far cheaper to repair.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions from earlier lessons.",
        items: [
          { question: "What are the two constructed tasks in the Writing section?", options: ["An email and an academic discussion post", "Two essays", "A letter and a report"], correctIndex: 0, explanation: "One email and one discussion post carry the constructed weight after the ten reconstruction items.", from: "Understanding the Writing section" },
          { question: "A which-chunk in a rebuild must sit…", options: ["Beside the noun it describes", "At the very start of the sentence", "After the full stop"], correctIndex: 0, explanation: "Relative chunks attach to their noun — placement is grammar, and grammar is ordering evidence.", from: "Grammar and syntax for reconstruction" },
          { question: "Where does a stance phrase like 'I would argue' belong in a discussion post?", options: ["Early, attached to the position sentence", "Only in the final sentence", "Nowhere — stance is discouraged"], correctIndex: 0, explanation: "The post opens by showing where its writer stands, and stance language is how a position sounds academic.", from: "Write for an Academic Discussion" },
        ],
      },
    ],
    questions: [
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "writing",
        prompt: "Guided practice. Complete the reporting verb.",
        sentence: "The survey findings ___ that library use rises during exam weeks.",
        acceptedAnswers: ["suggest", "indicate", "show"],
        hints: ["Which verb reports a finding without claiming proof?"],
        feedback: fb(
          "suggest / indicate / show",
          "A survey's findings are evidence, not proof, so the reporting verb sits at the evidence's weight — suggest and indicate are the safest, and show works when the pattern is plainly visible in the data.",
          "'Prove' would overclaim what a survey can carry, and 'demand' is not a reporting verb at all.",
        ),
        tags: ["toefl", "writing", "vocabulary"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which sentence reports a finding without overclaiming?",
        hints: ["Match the verb's strength to what the evidence can carry."],
        options: [
          { id: "a", text: "The data prove that everyone prefers digital textbooks." },
          { id: "b", text: "The responses suggest that many students still prefer printed textbooks." },
          { id: "c", text: "It is a fact that printed textbooks are better." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The responses suggest that many students still prefer printed textbooks.",
          "Suggest reports survey responses at exactly their weight, and 'many' keeps the claim inside what the data can hold — precision the language-use area rewards.",
          "(a) overclaims proof for a preference question, and (c) declares a fact with no evidence attached — both are the overclaiming fault in different costumes.",
        ),
        tags: ["toefl", "writing", "vocabulary"],
      }),
      ex({
        type: "vocab-match",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Match each stance verb with the move it makes.",
        hints: [],
        words: [
          { id: "w1", word: "suggest", partOfSpeech: "verb" },
          { id: "w2", word: "concede", partOfSpeech: "verb" },
          { id: "w3", word: "advocate", partOfSpeech: "verb" },
          { id: "w4", word: "acknowledge", partOfSpeech: "verb" },
        ],
        meanings: [
          { id: "m1", meaning: "present evidence as probable rather than certain" },
          { id: "m2", meaning: "admit that an opposing point has some force" },
          { id: "m3", meaning: "argue publicly in favour of a proposal" },
          { id: "m4", meaning: "recognise a fact or contribution openly" },
        ],
        pairs: [
          { wordId: "w1", meaningId: "m1" },
          { wordId: "w2", meaningId: "m2" },
          { wordId: "w3", meaningId: "m3" },
          { wordId: "w4", meaningId: "m4" },
        ],
        feedback: fb(
          "suggest → probable evidence; concede → admit an opposing point; advocate → argue in favour; acknowledge → recognise openly.",
          "Each verb occupies a different stance position on the shelf, and choosing between them is choosing how much weight your claim can honestly carry.",
          "Conceding and acknowledging look similar, but conceding yields ground to an argument while acknowledging simply recognises a fact — swapping them misstates your stance.",
        ),
        tags: ["toefl", "writing", "vocabulary"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Choose the contrast connector.",
        sentence: "The email should stay short; ___, the discussion post needs developed reasons and a hundred words.",
        acceptedAnswers: ["however", "by contrast", "in contrast"],
        hints: [],
        feedback: fb(
          "however / by contrast / in contrast",
          "The second half turns against the first — short versus developed — so a contrast connector is the promise that fits, and any of the three keeps it in one word.",
          "'Moreover' would promise more of the same, and 'therefore' would promise a consequence neither half causes.",
        ),
        tags: ["toefl", "writing", "connectors"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which connector belongs in an informal email to a housemate?",
        hints: [],
        options: [
          { id: "a", text: "Notwithstanding the foregoing," },
          { id: "b", text: "That said," },
          { id: "c", text: "In accordance with the above," },
        ],
        correctOptionId: "b",
        feedback: fb(
          "That said,",
          "'That said' makes a concession at conversational pitch — the right register furniture for a reader who shares your kitchen, and it still keeps the logical promise.",
          "(a) and (c) are legal and administrative furniture; they dress a housemate email in a borrowed suit and break the register for no gain.",
        ),
        tags: ["toefl", "writing", "register"],
      }),
      ex({
        type: "correct-mistake",
        difficulty: "easy",
        skill: "writing",
        prompt: "Independent practice. Repair the verb form.",
        incorrectSentence: "I am agree with Dana that campus housing helps new students.",
        acceptedAnswers: ["I agree with Dana that campus housing helps new students."],
        hints: [],
        feedback: fb(
          "I agree with Dana that campus housing helps new students.",
          "Agree is already a verb in English, so it takes no auxiliary — the extra 'am' builds a form that belongs to several other languages but not to this one.",
          "If you want the auxiliary, the verb must change shape entirely: 'I do agree' is possible for emphasis, but 'I am agree' is always wrong.",
        ),
        tags: ["toefl", "writing", "vocabulary"],
      }),
    ],
    homework: [
      "Collect five verbs from the stance shelf and write one sentence of your own for each, at three different registers — one formal, one semi-formal, one informal.",
      "Take the last discussion post you wrote and sweep it once for the three watch-outs: overclaimed verbs, hidden stance, doubled connectors — repair whatever the sweep finds.",
    ],
    assignment: {
      title: "Rewrite with precise academic language",
      instructions:
        "Take three sentences from any draft you have written this week — an email, a post or a note — and rewrite each one twice: once with a more precise reporting or stance verb (suggest, argue, acknowledge, concede), and once with a connector that shows the logical link (however, moreover, that said, as a result). Keep the register of each original. Submit the three pairs with the originals, so the upgrade is visible sentence by sentence.",
      minWords: 60,
      maxWords: 160,
    },
  },
];
