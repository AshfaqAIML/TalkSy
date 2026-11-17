/**
 * Chapter 1A — Speaking foundations (Part A).
 *
 * The first five lessons of the Speaking Masterclass foundations chapter:
 * the examination format, the four criteria decoded, answer development,
 * natural fluency and the case against memorised responses. Every strategy
 * is taught on original practice material written in the shape of the test —
 * never reproduced exam content — every band reference reads as an estimate,
 * and the stance on accent is neutral throughout: the pronunciation criterion
 * rewards being easy to understand, never sounding like a particular country.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingFoundationsLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-format",
    title: "The Speaking examination format",
    description:
      "The test's true shape: an 11–14 minute recorded conversation with a certified examiner, in three parts — a familiar-topic interview, a cue-card long turn built on one minute of preparation, and a two-way discussion — and the distinct speaking job each part gives you.",
    objectives: [
      "hold the architecture in your head: the three parts, their timings, and the job each one gives your speech",
      "treat the recording and the examiner's role as facts you can prepare around rather than threats to fear",
      "match your speaking style to the part you are in — conversational, sustained, then analytical",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every other section of IELTS happens on paper or a screen; Speaking happens to you, live, with a professional listener trained to notice everything your English does in real time. The test runs somewhere between eleven and fourteen minutes, it is recorded from first word to last, and it moves through three parts that each ask for a different kind of talking. Candidates who own this shape walk in calm; candidates who meet it on the day spend their attention on surprise instead of English. This lesson fixes the architecture so firmly that nothing about the appointment can feel like new information.",
        beforeYouStart: [
          "You met the four section names and the band arithmetic in the Fundamentals module.",
          "You know that Academic and General Training candidates sit exactly the same Speaking test.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the whole test, from identity check to the final discussion question"],
          ["Task & question types", "A 4–5 minute interview on familiar topics, a 3–4 minute cue-card turn with one minute of preparation, and a 4–5 minute two-way discussion"],
          ["What is assessed", "All four criteria, continuously — the format decides which speaking behaviours each part gives you room to show"],
          ["Why this matters", "Misreading the shape means playing the wrong part in the wrong style: essays inside the interview, conversations inside the long turn"],
        ],
      },
      { type: "heading", text: "Component 1 — One conversation, eleven to fourteen minutes" },
      {
        type: "text",
        text: "Speaking is the only section that arrives as a conversation: one candidate, one certified examiner, and eleven to fourteen minutes of recorded talk. Nothing is written and nothing is typed — your entire band is built from what the microphone hears. The conversation splits into three parts with their own timings and their own character: a short interview about familiar things, a longer solo turn built from a task card, and a discussion that climbs from daily life towards ideas. Because the whole test is this short, every answer you give is a proportionally large piece of the evidence the examiner scores — there is no second page to rescue a thin first one.",
      },
      { type: "heading", text: "Component 2 — The three parts and their separate demands" },
      {
        type: "table",
        title: "The three parts at a glance",
        headers: ["Part", "Length", "What happens", "What it asks of your speech"],
        rows: [
          ["Part 1 — the interview", "4–5 minutes", "Identity check, settling chat, then short questions on familiar ground: home, work, study, interests", "Conversational answers of two to four sentences that stay natural while giving the examiner plenty to hear"],
          ["Part 2 — the long turn", "3–4 minutes in all", "A task card on a familiar subject, sixty seconds to prepare with pencil and paper, then one to two minutes of speech, closed by a rounding question or two", "Sustained, organised talking without a partner to lean on — your notes, your structure, your stamina"],
          ["Part 3 — the discussion", "4–5 minutes", "Questions linked to the card's theme but aimed at more abstract ground — causes, changes, futures", "Reasoned opinions, speculation and the ability to defend or adjust a position in live exchange"],
        ],
      },
      { type: "heading", text: "Component 3 — Meeting each part on its own terms" },
      {
        type: "steps",
        title: "Meeting each part on its own terms",
        steps: [
          {
            title: "Step 1: Part 1 — answer like a person, not a form",
            text: "The interview is about you, and its register is the register of pleasant small talk. Answer each question in two to four sentences — enough to show range, short enough to stay conversational — and let the examiner set the pace and the topics. Warmth is not scored directly, but the relaxed voice it produces is the one fluency rewards.",
            examples: [
              { english: "Asked about her typical morning, a candidate describes waking at six, the market she walks through, and why she prefers it before the crowds — three sentences, then she stops and lets the next question come.", note: "Conversational length, personal content, floor handed back." },
            ],
          },
          {
            title: "Step 2: Part 2 — build the long turn from notes",
            text: "The card arrives with a topic and three or four prompts, and the format gives you sixty seconds and a pencil. Use the minute for keywords — nouns and arrows, not sentences — and speak from those notes for one to two minutes. If the examiner raises a hand at the two-minute mark, that is the format closing the turn, not a judgement on it.",
            examples: [
              { english: "A card asks him to describe a skill he would like to learn; his notes read 'guitar — cousin's band — winter evenings — online lessons', and each note-group becomes a stretch of speech.", note: "Four note-groups, four stretches: the card's prompts are the skeleton." },
            ],
          },
          {
            title: "Step 3: Part 3 — follow the topic upward",
            text: "The discussion keeps the theme of your card but exchanges the personal for the general: why people do it, how it is changing, what might happen next. Your answers here can be shorter than the long turn, but they must reason — a claim, a because, perhaps a small concession — because interaction at this level is what the part exists to hear.",
            examples: [
              { english: "After a card about learning guitar, the discussion asks whether schools should teach music; the candidate answers with one main claim and a reason drawn from his own school years.", note: "Personal material, redeployed as evidence for an abstract claim." },
            ],
          },
          {
            title: "Step 4: The joints between parts",
            text: "Between the parts sit small scored moments: the identity check and settling chat that open the recording, the one or two short rounding questions that close the card, and the transitions the examiner narrates. Treat them as part of the performance — they are the easiest English of the day, and they set the voice the whole test hears.",
            examples: [
              { english: "Asked whether his instrument was expensive, the guitar candidate gives two light sentences about second-hand prices and his cousin's staff discount, still smiling, still in English.", note: "Rounding questions are conversation, not a second examination." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — The recording and the two delivery modes" },
      {
        type: "text",
        text: "Everything you say is captured on a recording that exists for quality monitoring and result security: it lets the test provider audit how sessions are conducted and re-check a result if a candidate asks for one. That is a protection, not a second judge — the score comes from the certified examiner in the room with you. Delivery comes in two modes: face to face at a test centre, or by live video call with a certified examiner on screen. The parts, the timings and the criteria are the same in both modes; what changes is practical — you look at the camera when you speak, you may wear a headset, and your preparation should include a few live calls so that a screen between you and the examiner feels ordinary rather than unsettling.",
      },
      {
        type: "example",
        title: "The shape, met in the wild",
        items: [
          { english: "Asked whether she works or is a student, a candidate replies that she is a trainee accountant, mentions the firm's two offices, and says why she chose audit — three sentences, then silence, waiting for the next question.", note: "Interview register: personal, developed just enough, floor returned.", domain: "everyday" },
          { english: "A cue card about a memorable journey; the candidate writes five words in the minute — 'night train, mountains, lost ticket, kind guard, sunrise' — and speaks for a minute and three-quarters.", note: "Notes as nouns and moments, never script; the turn fills itself.", domain: "travel" },
          { english: "Two classmates drill the discussion: one asks whether tourism is good for small towns, the other answers with a claim, a reason and a concession, then asks the question back.", note: "Part 3 is an exchange — practising it alone trains only half the skill.", domain: "study" },
          { english: "A nurse compares the discussion's pressure to a hospital handover: questions arrive live, reasoning is expected on the spot, and 'I'll think about it tomorrow' is not an available answer.", note: "Professional speech is full of Part 3 moments.", domain: "work" },
          { english: "Before a video-call test, a candidate raises the laptop so the camera sits at eye level, checks the light, and runs one practice question with a friend over a call to make the mode familiar.", note: "Delivery mode is a preparation choice, not a surprise.", domain: "everyday" },
          { english: "A learner writes the three timings on a card — four to five, three to four, four to five — and rehearses a whole simulated test against a kitchen timer.", note: "The shape practised becomes the shape expected.", domain: "study" },
          { english: "Told that every word is captured, a candidate decides in advance to speak as if to one friendly listener — because the recording hears everything and judges nothing by itself.", note: "One listener, relaxed voice: the only useful relationship with the microphone.", domain: "everyday" },
        ],
      },
      { type: "heading", text: "Component 5 — Format myths that cost calm" },
      {
        type: "mistakes",
        title: "Format myths corrected",
        items: [
          { wrong: "Speaking is a one-question-one-answer interrogation, so the safest strategy is one-sentence replies.", right: "It is a conversation built to hear your English: two to four sentences in the interview, a full turn on the card, reasoned exchanges in the discussion — silence starves every criterion at once.", reason: "The examiner can only score what reaches the microphone, and minimal answers make a thin evidence base however accurate their grammar is." },
          { wrong: "Part 2 ends when the examiner stops me, so I should keep talking until cut off at three or four minutes.", right: "The long turn is designed for one to two minutes of speech; reaching the two-minute mark and closing naturally is the target, and a polite signal from the examiner is procedure, not failure.", reason: "Overrunning usually means padding — repetition and slowing ideas arrive long before the extra minutes produce any new evidence." },
          { wrong: "The recording means a second judge is listening, so I must perform for the machine as well as the person.", right: "One certified examiner scores the test; the recording is there to keep sessions auditable and results re-checkable, and the second ear it provides protects you rather than threatening you.", reason: "Fearing the microphone produces stiff, guarded speech, which is the opposite of what the fluency criterion rewards." },
        ],
      },
      {
        type: "four-skills",
        title: "The appointment, walked end to end",
        reading: {
          text: "Practice description in the style of a mock briefing. The appointment opens with the examiner introducing the recording, checking your identity document and asking what you prefer to be called. The first four to five minutes are the interview: short questions about where you live, what you do, and the familiar things around your daily life. Then comes the card — a topic with prompts, sixty seconds of silence for notes, and a stretch of speech that you own alone until the examiner signals the two-minute mark and asks a rounding question or two. The final stretch lifts the same theme into a discussion of ideas, and the microphone runs through all of it.",
          task: "From the briefing, name the four stages a candidate passes through after the identity check, in order.",
        },
        writing: {
          task: "A friend believes the Speaking test is a ten-minute talk about academic articles delivered into a headset. Correct the picture in 60–90 words: who the conversation is with, how long it lasts, what the three parts are, and what the recording is for.",
          guide: [
            "Open with the human fact: a certified examiner, live, for eleven to fourteen minutes.",
            "Give each part one sentence — interview, cue-card turn with its minute of preparation, discussion.",
            "State plainly that the whole conversation is recorded, and say what the recording protects.",
            "Close with one sentence on what the shape means for practice: speaking, not reading about speaking.",
          ],
          model: "The Speaking test is a live conversation with a certified examiner, lasting eleven to fourteen minutes, and it comes in three parts. The first is an interview about familiar things — your home, work, study and interests. The second hands you a task card: one minute to prepare with notes, then a turn of speech that you carry alone for up to two minutes. The third develops the same theme into a two-way discussion of ideas. Everything is recorded, mainly for quality control and any re-check of your result — which is one more reason relaxed, natural speech is the right strategy.",
        },
        listening: {
          script: "Tutor: Before your mock, three timings, because they decide how you spend your energy. The interview runs four to five minutes — warm, quick exchanges, no monologues needed. The long turn gives you a total of three to four minutes: sixty silent seconds of preparation, then one to two minutes of speech from your notes, then a short question or two to round the card off. The discussion at the end is another four to five minutes, and it is where the thinking gets hardest. Four, three, four — roughly the shape of your quarter hour.",
          task: "Which three timings does the tutor name, and what happens inside the three-to-four-minute block?",
        },
        speaking: {
          task: "Describe the Speaking test's three parts to a partner in under ninety seconds, using only facts you own: the timings, what happens in each part, and the recording.",
          frames: [
            "The whole test is a conversation of about…",
            "Part 1 interviews me on…",
            "Part 2 hands me a card, one minute to…",
            "Part 3 takes the topic into…",
          ],
          checklist: [
            "Did I give all three part lengths?",
            "Did I say what each part demands of the speaker?",
            "Did I mention the recording and why it exists?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The correction moves from the human fact to the three parts in order, then lands on the recording and closes on practice — each sentence answers the question the previous one plants."],
          ["Task fulfilment", "Every element of the mistaken picture is replaced with its true version: the headset becomes a recorded conversation, the ten minutes become the real range, the articles become familiar topics."],
          ["Vocabulary", "Testing words are used in their plain sense — interview, task card, turn of speech, discussion — the vocabulary of the format itself rather than invented jargon."],
          ["Coherence", "The three parts arrive in the order the candidate will meet them, so the description doubles as a mental rehearsal of the day."],
          ["Accuracy", "Timings are stated as ranges exactly as the format defines them, with no false precision and no dramatised difficulty."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Learn the architecture as cold facts — three parts, three timings, one recording — until describing the test feels as easy as describing your street."],
          ["While the clock runs", "Ask, as each part opens, what this part wants from your speech right now: conversation, a sustained turn, or reasoning out loud."],
          ["If you are stuck", "Ask the examiner to repeat or rephrase a question you did not catch; one clarified question answered well beats a guessed one answered badly."],
          ["Final minutes", "Keep your level through the last exchanges: the closing discussion is scored on exactly the same criteria as the opening interview."],
        ],
      },
      {
        type: "summary",
        points: [
          "The Speaking test is one recorded conversation of eleven to fourteen minutes with a certified examiner, delivered face to face or by live video call — with the same parts and criteria in both modes.",
          "Part 1 (4–5 minutes) interviews you on familiar topics; Part 2 (3–4 minutes) gives you a card, one minute of preparation and a one-to-two-minute turn; Part 3 (4–5 minutes) opens a two-way discussion on the same theme.",
          "Each part demands a different register: conversational warmth, then sustained organisation, then analytical reasoning.",
          "The recording serves quality monitoring and result security — speak to the examiner, never to the machine.",
          "Knowing the shape converts test-day attention into English: nothing you meet should be structurally new.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item each from the Fundamentals and Listening modules.",
        items: [
          { question: "In the overall IELTS result, how does the Speaking band sit among the four sections?", options: ["It counts for half of the overall band", "It is one of four equally averaged section scores", "It is reported separately and excluded from the overall band"], correctIndex: 1, explanation: "The Fundamentals module averaged four section scores into one overall result, and Speaking contributes a full quarter of that average.", from: "The band scoring system" },
          { question: "Which statement about the criteria for productive sections is true?", options: ["Speaking is scored on the same four criteria as Writing", "Speaking has four criteria of its own, equally weighted", "Speaking is scored holistically with no named criteria"], correctIndex: 1, explanation: "Both productive sections are scored on four named, equally weighted criteria — but the two lists differ, and the Speaking set is decoded in the next lesson.", from: "How Writing and Speaking are assessed" },
          { question: "The Listening test and the Speaking test differ in one basic way. Which?", options: ["Listening is delivered live; Speaking is played from a recording", "Listening plays recordings answered on screen or paper; Speaking is a live exchange with a certified examiner", "Both sections are live conversations with an examiner"], correctIndex: 1, explanation: "Listening is a fixed recording with no interaction, while Speaking is the one section conducted as a conversation — which is why spoken practice, not reading, moves its band.", from: "Understanding the Listening test" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. How is the Speaking test built?",
        hints: ["Think three parts, three timings, one conversation."],
        options: [
          { id: "a", text: "One continuous interview on random topics, running eleven to fourteen minutes." },
          { id: "b", text: "Three parts: a 4–5 minute interview, a 3–4 minute cue-card turn with one minute of preparation, and a 4–5 minute two-way discussion." },
          { id: "c", text: "A recorded monologue prepared at home and delivered to a computer terminal." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Three parts: a 4–5 minute interview, a 3–4 minute cue-card turn with one minute of preparation, and a 4–5 minute two-way discussion.",
          "Each part gives a different kind of speaking its own stage — conversation with the examiner, a sustained turn alone, then reasoning in exchange — and the whole recorded conversation finishes inside fourteen minutes.",
          "(a) flattens the three distinct stages into one undifferentiated interview; (c) describes a format that does not exist, since the test is always a live exchange with a certified examiner, in person or by video call.",
        ),
        tags: ["speaking", "format", "structure"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the account and answer.",
        hints: ["Watch what happens at the two-minute mark of the long turn."],
        passageTitle: "Daniel's first full mock",
        passage:
          "Daniel booked a full mock speaking session to test his stamina. The examiner greeted him, checked his identity, and opened with questions about his neighbourhood, which he answered in single breaths, wondering whether that was enough. Then came the task card about a market he enjoys visiting; he took his sixty seconds, wrote four word-groups, and talked until the examiner raised a hand at the two-minute mark and thanked him. Two short follow-up questions followed. The closing discussion ranged from local shopping habits to whether cities should close their centres to cars, and the session ended at thirteen minutes in all.",
        question: "What did the raised hand at the two-minute mark most likely mean?",
        options: [
          { id: "a", text: "Daniel had failed the long turn, and the examiner was closing it early." },
          { id: "b", text: "The long turn is built to end around the two-minute mark, so the stop was the format working normally." },
          { id: "c", text: "The examiner wanted the discussion to begin without the follow-up questions." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The long turn is built to end around the two-minute mark, so the stop was the format working normally.",
          "The card allows one to two minutes of speech, and the examiner's raised hand simply closes the turn at its designed end — which is why the two follow-up questions and the discussion then arrived in their ordinary order.",
          "(a) invents a failure the account never reports; (c) contradicts the passage, which places two short follow-up questions after the stop.",
        ),
        tags: ["speaking", "format", "part2"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Why is the whole test recorded?",
        hints: [],
        options: [
          { id: "a", text: "A second examiner in another country scores the recording, so candidates must perform for two audiences." },
          { id: "b", text: "The recording exists for quality monitoring and security — it allows a review of the session and a re-check of a result if one is requested — while one certified examiner scores the live conversation." },
          { id: "c", text: "The recording replaces the examiner in the video-call mode, which is why that mode feels easier." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The recording exists for quality monitoring and security — it allows a review of the session and a re-check of a result if one is requested — while one certified examiner scores the live conversation.",
          "Capturing every word lets the test provider audit how sessions are conducted and re-mark a result on request, which protects the candidate as much as the system; the score still comes from the one certified examiner in the room or on the screen.",
          "(a) invents a remote second marker who does not exist; (c) turns a delivery detail into a difficulty claim — the criteria are the same whichever mode delivers the test.",
        ),
        tags: ["speaking", "format", "recording"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer from your knowledge of the format.",
        hints: [],
        question: "During the minute before your Part 2 speech, what are you given to prepare with — and what may you do with it?",
        acceptedAnswers: [
          "pencil and paper to make notes during the one minute, and i may keep the notes with me while i speak",
          "a pencil and paper: i write notes for one minute and use them during my long turn",
          "note-making tools — i jot notes in the minute of preparation and glance at them while talking",
          "paper and a pencil; the notes i make in that minute stay with me through the speech",
        ],
        keywords: ["notes", "minute"],
        feedback: fb(
          "Pencil and paper for keyword notes in the minute of preparation, kept with you through the speech.",
          "The format hands you sixty seconds and writing materials precisely because it wants organised speech rather than improvisation — the notes are yours to keep, and glancing at them mid-turn is expected, not penalised.",
          "Answers describing a hidden script, a memorised text or help from a partner describe a different examination altogether.",
        ),
        tags: ["speaking", "format", "preparation-minute"],
      }),
      ex({
        type: "speak-response",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided speaking practice. Greet the examiner and settle into the interview.",
        hints: ["Open with a greeting and the words: my name is…", "Say what you currently do, and add one true reason."],
        situation:
          "The test has just begun. The examiner says good afternoon, asks for your full name, and asks whether you are working or studying at the moment. Record your check-in: greet in return, introduce yourself with the words 'my name is', say what you currently do, and add one small true reason or detail. Keep it to three or four sentences.",
        targetPhrases: [
          "Good afternoon. My name is…",
          "At the moment I'm working as a… / I'm currently studying…",
          "I chose that mainly because…",
        ],
        mustSay: ["my name is", "currently", "because"],
        feedback: fb(
          "A calm greeting, your full name, a natural statement of what you currently do, and one true reason.",
          "The check-in is the friendliest English of the whole appointment — using it well starts the recording with an organised, comfortable voice and settles the nerves that later parts will test.",
          "Whispered names, one-word answers or recited identity cards waste a minute the format gives you for free.",
        ),
        tags: ["speaking", "format", "part1"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. What sets Part 3 apart from Part 1?",
        hints: [],
        options: [
          { id: "a", text: "Part 3 repeats the interview questions in a firmer tone to check consistency." },
          { id: "b", text: "Part 3 keeps the theme of the long turn but pushes it into abstract territory, turning the interview into a two-way discussion of ideas." },
          { id: "c", text: "Part 3 is a listening task in which the examiner reads out statements to agree or disagree with." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Part 3 keeps the theme of the long turn but pushes it into abstract territory, turning the interview into a two-way discussion of ideas.",
          "The discussion deliberately links back to the card's subject while lifting it away from personal experience — towards causes, society, change and the future — because reasoning under abstraction is the last behaviour the test needs to hear before it closes.",
          "(a) confuses a consistency check with the actual design; (c) describes no part of Speaking, which never becomes a listening exercise.",
        ),
        tags: ["speaking", "format", "part3"],
      }),
    ],
    assignment: {
      title: "The mock-eve message",
      instructions:
        "A classmate messages you the night before her first speaking mock: 'Tomorrow is my speaking mock — what actually happens in there?' In 40–160 words, write the reply: the total length, who runs it and the fact of the recording, the three parts with their timings and what each demands, and the one part you advise her to practise tonight, with a reason.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Run one full-length simulation this week at true architecture: four minutes of interview questions, one silent minute of notes, two minutes of speech, four minutes of discussion — recorded start to finish without pausing the recorder.",
      "Recite the test's shape from memory to someone at home this week — parts, timings, recording, delivery modes — then check yourself against this lesson for anything you dropped.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-assessed",
    title: "What the examiner assesses",
    description:
      "The four equally weighted criteria decoded into observable behaviour: what Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation actually reward — and the three ordinary conversational moves, from repetition requests to self-correction, that examiners do not punish.",
    objectives: [
      "translate each of the four criteria into behaviours you can hear in a recording of yourself",
      "work the averaging arithmetic: how four criterion scores combine, and why balance beats brilliance",
      "retire the three great fears — repetition requests, accent, self-correction — that cost candidates more calm than the feared things cost bands",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Half of all speaking anxiety comes from imagining an invisible judge with secret standards. In reality the test is scored against four published criteria, each carrying exactly the same weight, each describing behaviour you can hear, train and replay. This lesson decodes them honestly — what earns credit, how the four scores merge into one band, and which ordinary conversational moves candidates wrongly believe are punished. When you know what is actually being listened for, practice stops being guessing and becomes engineering.",
        beforeYouStart: [
          "You can describe the test's three parts and their timings from the previous lesson.",
          "You met the four criteria's names in the Fundamentals module; here the names become behaviours.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — every answer of all three parts, scored continuously from check-in to close"],
          ["Task & question types", "The criteria apply identically to interview answers, the cue-card long turn and the two-way discussion"],
          ["What is assessed", "Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation — four scores of equal weight averaged into the whole band"],
          ["Why this matters", "Training the wrong behaviour is expensive: a year spent polishing grammar while spoken vocabulary never grows leaves a quarter of the band untouched"],
        ],
      },
      { type: "heading", text: "Component 1 — Four scores, one band, equal weights" },
      {
        type: "text",
        text: "Every word you speak, in all three parts, is scored four times over — once per criterion: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation. Each carries exactly a quarter of the whole band: no priority order, no hidden fifth judge, no bonus for wit. The four scores average into your whole Speaking band, which makes balance the winning profile — estimates reading 7, 7, 6 and 6 finish stronger than a candidate who reaches 8 on grammar while pronunciation sits at 5 and the others at 6, because the average follows the holes, not the peaks. Band numbers anywhere in this course are informed estimates, never promises; the equal-weight arithmetic, by contrast, is simple fact.",
      },
      { type: "heading", text: "Component 2 — What each criterion listens for" },
      {
        type: "table",
        title: "The four criteria, decoded",
        headers: ["Criterion", "What it listens for", "Behaviour it rewards"],
        rows: [
          ["Fluency and Coherence", "How continuously and how logically you speak", "Keeping going at a natural pace, linking each idea to the last, pausing to plan content rather than freezing for words"],
          ["Lexical Resource", "The range and precision of your words", "The exact word over the safe word, natural collocations, calm paraphrase when the first choice fails"],
          ["Grammatical Range and Accuracy", "The variety of your structures and their correctness", "Simple and complex sentences mixed freely, with errors rare enough never to obscure the message"],
          ["Pronunciation", "How easily the speech can be followed", "Stress, rhythm and intonation that track the meaning — an accent kept clear, whatever its origin"],
        ],
      },
      { type: "heading", text: "Component 3 — Turning criteria into trainable behaviour" },
      {
        type: "steps",
        title: "From criterion to drillable behaviour",
        steps: [
          {
            title: "Step 1: Fluency — train continuity, not speed",
            text: "The drillable behaviour is unbroken speech at your comfortable pace. Record two-minute answers and count the long silences; a falling count is the training working, whatever your speed does. Nothing in the criterion mentions velocity, and everything in it mentions keeping going.",
            examples: [
              { english: "A learner records the same topic three times in a week; the long silences fall from five to two while her pace never changes.", note: "Continuity is countable; speed is not the target." },
            ],
          },
          {
            title: "Step 2: Vocabulary — bank precision, not parade words",
            text: "Collect the exact words and partnerships for the topics you actually live with — work, study, hometown, hobbies — and deploy them when a relevant question appears. Precision used where it belongs earns more credit than rare words forced into every answer.",
            examples: [
              { english: "For photography, a candidate banks 'landscape shots', 'edit on my phone' and 'golden hour' — and uses two of the three when the hobby topic arrives.", note: "Topic-fit precision, not display vocabulary." },
            ],
          },
          {
            title: "Step 3: Grammar — vary on purpose",
            text: "Before a practice answer, choose two structures to mix in — a because-clause, a conditional, a 'used to' — and let the rest stay simple. Range is a decision, not an accident, and errors stay rarest when only the structures you own are volunteered.",
            examples: [
              { english: "One interview answer carries a simple fact, a because-clause and one 'used to' — three shapes, no wrecks.", note: "Three controlled structures outweigh one ambitious collapse." },
            ],
          },
          {
            title: "Step 4: Pronunciation — make yourself easy to follow",
            text: "Work on the features that carry meaning across any accent: stress on the words that matter, rhythm that groups words into chunks, intonation that rises for new things and settles for finished ones. An accent kept clear is fully compatible with a high estimate; imitation of another country's speech is not the exercise.",
            examples: [
              { english: "A candidate marks the one most important word in each sentence of a practice take; listeners stop asking her to repeat.", note: "Intelligibility is the criterion's whole subject." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — The moves that are not penalised" },
      {
        type: "text",
        text: "Three ordinary moves are feared far more than they cost. Asking the examiner to repeat or clarify a question is normal conversation — it costs nothing and beats answering a question that was never asked; asking once or twice in a test is human, while confidently answering the wrong question throughout is a genuine criterion problem. Your accent is not a penalty either: the Pronunciation criterion rewards being easy to follow, and no national variety of English is scored above another — clarity of stress, rhythm and intonation is what travels. And self-correction — 'I go… I went' — is simply what speakers do; an occasional repair even shows a monitoring ear, though a restart every other sentence will eventually erode the fluency evidence.",
      },
      {
        type: "example",
        title: "The criteria, overheard in one mock",
        items: [
          { english: "Mid-answer, a speaker swaps 'very big' for 'enormous' and keeps going — one precision upgrade the vocabulary criterion hears on the spot.", note: "Range shows in live choices, never in lists recited.", domain: "everyday" },
          { english: "Asked about her course, a candidate says the syllabus is 'pretty demanding, but brilliantly taught' — collocations doing work that 'hard' and 'good' cannot.", note: "Lexical credit lives in word partnerships.", domain: "study" },
          { english: "Describing a delayed flight, a speaker moves through three tenses in four sentences — what happened, what had gone wrong before boarding, and what she does now when she travels.", note: "Range becomes visible when structures change because the content demands it.", domain: "travel" },
          { english: "Explaining a missed deadline, a project manager keeps a steady rhythm and marks the turn with 'however' and 'as a result' — coherence and pronunciation working in one breath.", note: "Linking done aloud serves two criteria at once.", domain: "work" },
          { english: "A candidate hears a question about weekends as one about weekdays, answers confidently about his office routine, and never notices the exchange drift off its rails.", note: "Guessing, not asking, is the failure repetition requests prevent.", domain: "everyday" },
          { english: "A speaker with a strong regional accent groups his words into clear chunks and lands the stress where the meaning sits; nothing he says needs a second hearing.", note: "Intelligibility is the whole target — and he hits it with his own accent intact.", domain: "travel" },
          { english: "A learner charts her four mock subscores on paper, sees the lowest quarter plainly, and gives it the next fortnight's practice time.", note: "The averaging arithmetic turns self-assessment into a training plan.", domain: "study" },
        ],
      },
      { type: "heading", text: "Component 5 — Misreadings that cost candidates months" },
      {
        type: "mistakes",
        title: "Criterion misreadings corrected",
        items: [
          { wrong: "Grammar is the most important criterion, so I will speak in short, safe sentences and avoid every error.", right: "Mix structures at your honest level and accept occasional slips: the criterion has two halves, and range dies inside all-simple answers just as surely as accuracy dies inside reckless ones.", reason: "Perfectly safe sentences cap Grammatical Range while doing nothing for Fluency — the cautious strategy loses two criteria to protect one." },
          { wrong: "My accent will hold my pronunciation score down, so I'm learning to imitate a British accent before test day.", right: "Keep your own accent and make it easy to follow: work on word stress, sentence stress and chunking, because intelligibility — not any national variety — is what the criterion measures.", reason: "No variety of English scores above another, and an adopted accent performed under pressure usually reduces clarity rather than raising it." },
          { wrong: "If I self-correct or ask the examiner to repeat, the examiner will note a failure.", right: "Ask when you genuinely did not catch the question, and repair briefly when you catch your own slip — both are ordinary conversational behaviour the test is built around.", reason: "The genuinely costly moves are guessing at half-heard questions and restarting every sentence — panic wearing the mask of caution." },
        ],
      },
      {
        type: "four-skills",
        title: "A debrief sheet, read like a mirror",
        reading: {
          text: "A mock debrief sheet works like a mirror with four panels. The assessor scores Fluency and Coherence by listening for continuity and connection: does the speech keep going, and does each idea follow the last? Lexical Resource reads the words: precision, partnership, and recovery when the first choice fails. Grammatical Range and Accuracy counts both variety and error — a simple sentence beside a complex one, slips that stay rare. Pronunciation asks one question on repeat: how much effort does following this speaker cost? Four panels, one conversation, and no panel weighs more than another.",
          task: "Which single question does the sheet say Pronunciation keeps asking?",
        },
        writing: {
          task: "Write your own four-line audit: one line per criterion, each naming the specific behaviour you will train this month and the evidence a recording would show when it improves.",
          guide: [
            "Fluency and Coherence — name one continuity behaviour, such as fewer mid-clause freezes.",
            "Lexical Resource — name one precision habit, such as banking topic collocations.",
            "Grammatical Range and Accuracy — name one structure you will mix in on purpose.",
            "Pronunciation — name one clarity feature, such as stress on the key word of each sentence.",
          ],
          model: "Fluency and Coherence: this month I keep talking through small stalls — behaviour trained, fewer mid-sentence stops, and the recording will show shorter silences. Lexical Resource: I bank five exact collocations per familiar topic and aim to use two per answer; the recording will catch them arriving naturally. Grammatical Range and Accuracy: I deliberately mix a because-clause and one conditional into every long answer, keeping errors rare. Pronunciation: I stress the one word that matters in each sentence and let the voice rise and fall with meaning; the recording will simply sound less flat.",
        },
        listening: {
          script: "Tutor: Look at the four numbers before you read any comments. Seven, six and a half, six and a half, five and a half. Equal weights, so the mean sits where it sits because of that five and a half — pronunciation. Now the comment: your words land clearly, but every sentence arrives on the same flat drumbeat, and the important words sink. That is not your accent — your accent is fine, and no examiner scores it. That is rhythm, and rhythm is trainable. Give it four weeks, then re-record.",
          task: "What does the tutor say the five and a half is not — and what does she name as the actual problem?",
        },
        speaking: {
          task: "Explain to a partner, in one minute and without notes, how the test is scored: the four criteria, the equal weighting, and the one fear you are retiring today.",
          frames: [
            "The examiner scores everything four times over:…",
            "Each criterion carries exactly…",
            "The behaviour I will train first is…",
            "And the thing I am officially stopping worrying about is…",
          ],
          checklist: [
            "Did I name all four criteria in full?",
            "Did I say equal weight, and what it means for a balanced profile?",
            "Did I retire one false fear with its reason?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "One line per criterion keeps the audit parallel to the scoring sheet itself, so no quarter of the band can hide from the plan."],
          ["Task fulfilment", "Each line pairs a behaviour with the recorded evidence of its improvement, converting criteria from abstractions into a month's project list."],
          ["Vocabulary", "Criterion language is used precisely — continuity, precision, intelligibility — the same vocabulary the descriptors themselves trade in."],
          ["Coherence", "The audit's order matches the criteria's own order, so the reader moves between the debrief sheet and the training plan without translation."],
          ["Balance", "By giving every criterion its own line, the model refuses the commonest error in preparation: training one quarter of the band and hoping for the rest."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Turn the four criteria into your own four-line audit, and make the weakest quarter this month's single project."],
          ["While the clock runs", "Let the criteria run in the background, not the foreground: speak to the examiner, not to a checklist in your head."],
          ["If you are stuck", "Use the free moves — ask for the question again, repair a slip and continue — and treat both as the normal conversation they are."],
          ["Final minutes", "Answer the closing questions with the same range you opened with: the last minute is scored by the same four judges as the first."],
        ],
      },
      {
        type: "summary",
        points: [
          "Four criteria — Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation — each carry a quarter of the whole band.",
          "The averaging arithmetic makes the weakest criterion the best investment: balanced profiles beat brilliant-but-lopsided ones.",
          "Fluency rewards continuity and connection; vocabulary rewards precision and recovery; grammar rewards range with rare error; pronunciation rewards clarity a listener can follow without effort.",
          "Asking for repetition, keeping your accent, and self-correcting are not penalised — guessing at half-heard questions and restarting every sentence are the real problems.",
          "Every band number in this lesson is an estimate: the criteria are facts, the scores are judgements.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks from the lessons this course has already given you.",
        items: [
          { question: "What is the total length of a Speaking test?", options: ["Seven to ten minutes", "Eleven to fourteen minutes", "Twenty-five to thirty minutes"], correctIndex: 1, explanation: "The format lesson fixed the range at eleven to fourteen minutes — short enough that every answer is a large share of the evidence, which is why criteria-aware practice matters.", from: "The Speaking examination format" },
          { question: "How many criteria score a productive section, and how are they weighted?", options: ["Two criteria, with the language one weighted double", "Four criteria, equally weighted", "Four criteria, with grammar weighted double"], correctIndex: 1, explanation: "Both productive sections are scored on four named criteria of equal weight — the design that makes a balanced speaking profile the strongest one.", from: "How Writing and Speaking are assessed" },
          { question: "How does your Speaking band enter the overall result?", options: ["It replaces your weakest section score", "It averages together with Listening, Reading and Writing, each carrying a quarter", "It is doubled if the other three sections are strong"], correctIndex: 1, explanation: "The overall result averages four section scores equally — a weak speaking band drags the mean exactly as far as a weak listening one.", from: "The band scoring system" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. How do the four Speaking criteria combine into your whole band?",
        hints: ["Imagine four numbers arriving on one result sheet."],
        options: [
          { id: "a", text: "The examiner awards your strongest criterion as the whole band, to reward your best skill." },
          { id: "b", text: "Each criterion carries equal weight, and the four scores are averaged into one whole band." },
          { id: "c", text: "Grammar counts double because it is the oldest criterion." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Each criterion carries equal weight, and the four scores are averaged into one whole band.",
          "Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation each own a quarter of the result, which is why a balanced profile usually finishes above a brilliant-but-lopsided one.",
          "(a) would let one strong skill mask three weak ones, which the averaging design exists to prevent; (c) invents a weighting no published criterion list supports.",
        ),
        tags: ["speaking", "criteria", "scoring"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the feedback sheet and answer.",
        hints: ["Which number did the tutor circle?"],
        passageTitle: "Four numbers on one page",
        passage:
          "Maya received her mock feedback as four numbers on a single page. Fluency and Coherence: 6.5, with a note praising her willingness to keep talking and to link one idea to the next. Lexical Resource: 6.0 — 'good everyday range, imprecise on abstract topics'. Grammatical Range and Accuracy: 6.5, the note mentioning varied structures with rare slips. Pronunciation: 5.5, the single comment reading 'words arrive clearly; sentence rhythm flattens and key words lose their stress'. Her tutor circled the last number and wrote: this quarter is your month's project.",
        question: "Which criterion is Maya's project for the month, and what behaviour did its comment single out?",
        options: [
          { id: "a", text: "Grammatical Range and Accuracy — varied structures with rare slips." },
          { id: "b", text: "Pronunciation — the flattening sentence rhythm that lets key words lose their stress." },
          { id: "c", text: "Fluency and Coherence — the habit of linking one idea to the next." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Pronunciation — the flattening sentence rhythm that lets key words lose their stress.",
          "The tutor circled the lowest of four equally weighted numbers, and the comment names a specific, trainable behaviour — rhythm and stress — rather than any verdict about accent, which the criterion does not score.",
          "(a) and (c) name numbers the sheet reports as strengths, not the one the tutor circled as the month's project.",
        ),
        tags: ["speaking", "criteria", "feedback"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. What does the Pronunciation criterion actually reward?",
        hints: [],
        options: [
          { id: "a", text: "Sounding as close as possible to a British or American speaker." },
          { id: "b", text: "Being easy to understand — clear stress, rhythm and intonation — whatever national accent the speaker carries." },
          { id: "c", text: "Speaking with no accent at all, in perfectly neutral vowels." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Being easy to understand — clear stress, rhythm and intonation — whatever national accent the speaker carries.",
          "The criterion's subject is intelligibility: word stress, sentence stress and the tunes of intonation that carry meaning, all of which sit on top of any accent on earth; and no variety of English outranks another.",
          "(a) and (c) both treat imitation as the goal, when an accent performed under pressure usually makes speech less clear, not more — the descriptors never name a target country.",
        ),
        tags: ["speaking", "criteria", "pronunciation"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one short sentence.",
        hints: [],
        question: "What two things does the Grammatical Range and Accuracy criterion judge at the same time?",
        acceptedAnswers: [
          "the range of structures you use and how much accuracy they carry",
          "range — how varied your structures are — and accuracy — how error-free",
          "range of structures, simple and complex mixed, and accuracy in producing them",
          "range on one side and accuracy on the other",
        ],
        keywords: ["range", "accuracy"],
        feedback: fb(
          "Range — the variety of structures — and accuracy — their correctness.",
          "The criterion's own name carries its two halves: variety shows in mixed simple and complex sentences, and accuracy shows in errors rare enough never to obscure meaning; neither half can be sacrificed for the other.",
          "Answers naming only errors or only complexity have kept half the criterion and lost the band the other half carries.",
        ),
        tags: ["speaking", "criteria", "grammar"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Ask for repetition, then answer.",
        hints: ["A natural request names what you need — the whole question, or just one word."],
        situation:
          "Part 1. The examiner asks a question about your weekends that you only half hear — the word 'weekend' arrives blurred. Ask naturally for the question again, confirm what you understood, then answer with two developed sentences about a typical weekend.",
        targetPhrases: [
          "Sorry, could you repeat that?",
          "Do you mean what I usually do at weekends?",
          "Most weekends I…",
        ],
        mustSay: ["could you", "weekend", "usually"],
        feedback: fb(
          "A natural request for repetition, a quick confirmation of the question, then a two-sentence answer about your usual weekend.",
          "Asking to hear a question again is a normal conversational move that costs nothing under the criteria, and it protects two things at once: the content of your answer and the coherence of the exchange.",
          "Guessing at half-heard questions produces the classic mismatch — an answer to a question nobody asked — which costs far more than any repetition request ever could.",
        ),
        tags: ["speaking", "criteria", "clarification"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Two mock profiles, one arithmetic lesson. Profile A reads 7, 7, 6, 6; profile B reads 8, 6, 6, 5. Which statement follows?",
        hints: [],
        options: [
          { id: "a", text: "Profile B wins because the 8 shows what the candidate can really do." },
          { id: "b", text: "Profile A averages higher — 6.5 against roughly 6.25 — because four equal weights let the low quarter drag the mean more than a single peak lifts it." },
          { id: "c", text: "Both profiles produce the same band, since the totals are close enough to cancel out." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Profile A averages higher — 6.5 against roughly 6.25 — because four equal weights let the low quarter drag the mean more than a single peak lifts it.",
          "Equal weighting makes the arithmetic honest: the single 8 could not pay for the 5, so lifting the weakest criterion is the cheapest point on the whole sheet — and every number here is an estimate, not a prediction.",
          "(a) mistakes a peak for a mean; (c) hides a quarter-band distance inside the word 'close' — the means differ by more than the totals suggest.",
        ),
        tags: ["speaking", "criteria", "strategy"],
      }),
    ],
    assignment: {
      title: "Retiring three fears",
      instructions:
        "A nervous friend believes three things: that her accent will fail her, that asking the examiner to repeat a question loses marks, and that any self-correction is fatal. In 40–160 words, write the message that retires all three fears — naming the criterion each fear belongs to, what that criterion actually rewards, and the genuinely costly behaviour each fear distracts her from.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Record a two-minute answer tonight and grade it yourself in four separate listens, one criterion per listen — the pass that looks for one thing finds it, while the pass that looks for everything finds nothing.",
      "Start a collocation bank for the three interview topics you are most likely to meet — work, study, hometown — with five precise pairings each, gathered from anything you read or hear this week.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-answer-development",
    title: "Answer development",
    description:
      "The layer method — direct answer, reason, detail — that turns one-line replies into developed ones: calibrating Part 1 answers to two-to-four sentences, hearing what developed actually sounds like, and knowing where extension ends and rambling begins.",
    objectives: [
      "build answers in layers: a direct reply, a reason for it, and a detail, example or feeling that grounds it",
      "calibrate interview answers to two to four sentences without drifting into monologue",
      "recognise the boundary between extension that serves the question and rambling that abandons it",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "A one-sentence answer is honest but starving: it gives the examiner almost nothing to score, however accurate its single clause. The cure is not longer words — it is layers. This lesson installs a three-layer habit that grows every answer from a bare reply into a small, complete piece of speech: answer first, reason second, grounded detail third. You will calibrate the habit to the interview's two-to-four-sentence scale, hear what developed actually sounds like, and learn to stop extending before extension turns into wandering.",
        beforeYouStart: [
          "You know what each part of the test demands, from the format lesson.",
          "You can name the four criteria and know that every extra sentence is fresh evidence for at least two of them.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — most visibly Part 1, and the habit underneath every Part 2 and Part 3 answer"],
          ["Task & question types", "Familiar-topic interview questions on home, work, study and hobbies, plus the prompts printed on a cue card"],
          ["What is assessed", "Development feeds Fluency and Coherence and Lexical Resource together — a layered answer shows linking and word range in the same breath"],
          ["Why this matters", "Bare answers are the commonest reason able candidates sound below their level: the examiner can only score the English that actually gets spoken"],
        ],
      },
      { type: "heading", text: "Component 1 — Why one sentence is never enough" },
      {
        type: "text",
        text: "An interview question is doing two jobs at once: it asks about your life, and it invites your English. 'Do you cook at home?' answered with 'Yes, sometimes' completes the first job and ignores the second — the examiner has two words to score and a shrug the microphone cannot even hear. All four criteria feed on connected speech, so a bare answer starves all four at once. The failure mode at the other extreme is just as real: a five-sentence lecture on cookery turns a conversation into a presentation and forces the examiner to interrupt. Development is proportional — enough layers to feed the criteria, few enough to leave the conversational floor open.",
      },
      { type: "heading", text: "Component 2 — The layer method" },
      {
        type: "steps",
        title: "The layer method, in order",
        steps: [
          {
            title: "Layer 1 — the direct answer",
            text: "Answer the actual question first, plainly and fast. No review of the question, no throat-clearing, no preamble about how interesting it is — the listener is waiting for a verdict, and every second before it reads as bought time.",
            examples: [
              { english: "'Do you cook at home?' — 'Yes, I do, most evenings.'", note: "Direct, short, honest: the layer every listener waits for." },
            ],
          },
          {
            title: "Layer 2 — the reason",
            text: "Follow the verdict with why it is true. A because-clause is the cheapest range in speech: one link word, one new structure, and the answer suddenly has a spine. Reasons can also arrive as preferences, causes or small explanations — the grammar matters less than the move.",
            examples: [
              { english: "'…mainly because it's cheaper than eating out, and I like knowing what's in my food.'", note: "One link word, two fresh ideas, instant depth." },
            ],
          },
          {
            title: "Layer 3 — the grounding detail",
            text: "Prove the reason with something specific: an example, a name, a place, a feeling, a small story. One concrete detail does the work of three abstract sentences, and it is where your personal vocabulary — the words only you own — gets its airtime.",
            examples: [
              { english: "'Last week I made a lentil soup that lasted three days — my flatmate has asked for the recipe twice.'", note: "One specific proves the reason; two specifics start a monologue." },
            ],
          },
          {
            title: "Layer 4 (occasional) — the turn-back",
            text: "Close at a natural edge with a short contrast, a closing feeling, or a sentence that visibly hands the floor back. Not every answer needs it — but when one does, the turn-back keeps your speech conversational instead of running until interrupted.",
            examples: [
              { english: "'Though at weekends I usually let someone else do the work.'", note: "A light contrast that ends the answer at an edge, not a dead stop." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Calibrating length to the part" },
      {
        type: "text",
        text: "The layers scale with the part. In the interview, two to four sentences is the working range — roughly twenty to forty seconds of speech — and not every question deserves the full four: a question about your favourite colour does not need a childhood anecdote. Read the examiner's rhythm; if the next question arrives early, you have still banked enough. On the cue card, the same three layers stretch across the card's prompts — each prompt gets its own mini-answer with reason and detail, and the one-to-two minutes fill themselves. In the discussion, the reason layer grows fat and the story layer thins: analysis — causes, comparisons, consequences — is the development that part rewards.",
      },
      { type: "heading", text: "Component 4 — Extension versus rambling" },
      {
        type: "table",
        title: "Extension and rambling, side by side",
        headers: ["Signal", "Extension", "Rambling"],
        rows: [
          ["Relation to the question", "Every sentence adds something new about the subject asked", "The subject drifts — a cooking question ends up at a cousin's wedding"],
          ["Shape", "Layers stack in order and close at an edge", "Sentences circle, and the same idea returns wearing new clothes"],
          ["Floor management", "Ends by handing the floor back", "Runs until interrupted, or trails into a mumbled 'so… yeah'"],
          ["Clock feel", "Twenty to forty seconds on an interview question", "Past the minute mark, the interview has quietly become a speech"],
        ],
      },
      {
        type: "example",
        title: "Layers across a life",
        items: [
          { english: "'Do you like the area where you live?' — 'I do, mostly. It's a quiet street, and the park at the end is a real benefit for the dog.'", note: "Answer, reason, detail inside three lines — no because required.", domain: "everyday" },
          { english: "'What are you studying?' — 'Pharmacy, third year now. I chose it because my grandmother ran a village clinic, and I grew up watching what medicine shortages do to people.'", note: "The reason layer carrying a whole inheritance.", domain: "study" },
          { english: "'Do you work or study?' — 'I work in logistics, coordinating imports for a furniture company. Busy, but I like that every day has a puzzle in it.'", note: "Verdict, context, feeling — three layers in two sentences.", domain: "work" },
          { english: "'Do you enjoy travelling?' — 'Honestly, yes, though I'm a nervous flyer. I take trains where I can, like the overnight one to the mountains last spring.'", note: "A concession opening the answer, a specific closing it.", domain: "travel" },
          { english: "'Do you cook?' — 'Yes. My brother also cooks. He lives in another city. Their football team is terrible this year.'", note: "Each link is plausible; none serves the question — rambling in the costume of detail.", domain: "everyday" },
          { english: "A learner labels three practice recordings L1, L2 and L3, and discovers she always stops after the first layer on opinion questions.", note: "The audit that reveals which layer you habitually skip.", domain: "study" },
          { english: "Answering 'what do you do?' at a conference, an engineer gives the verdict, the reason and one current project — then asks the question straight back.", note: "The turn-back as professional small talk performs it.", domain: "work" },
          { english: "Describing a trip that went wrong, a speaker answers 'was it a disaster?' with 'a comedy, really — we missed the ferry, ate airport cake, and laughed about it for a year.'", note: "Feeling as the grounding layer: not every detail is a fact.", domain: "travel" },
        ],
      },
      { type: "heading", text: "Component 5 — Where development goes wrong" },
      {
        type: "mistakes",
        title: "Thin answers, corrected",
        items: [
          { wrong: "'Do you enjoy reading?' — 'Yes, I like it.'", right: "'Yes, I do — mostly fiction in the evenings, because it's the one hour my phone can't reach me.'", reason: "The thin reply answers the question but not the test: three layers of evidence vanish, and the examiner must fish for every clause you could have offered freely." },
          { wrong: "'Do you like sport?' — a ninety-second tour of every sport the speaker has ever watched, ending where the examiner interrupts.", right: "'I do — cricket mainly, ever since my uncle took me to a match. I don't play now, but I still follow the summer series.'", reason: "Development stops being development when it stops being conversational; four layered sentences carry more evidence than ninety unstructured seconds." },
          { wrong: "Opening every answer with 'That's a very interesting question' before any content arrives.", right: "Answer first: give the direct reply in your opening words, and let the reason and detail follow it.", reason: "Padded openings delay the layer that matters and read as time-buying — the listener wants a verdict, not a review of the question." },
        ],
      },
      {
        type: "four-skills",
        title: "One question, two answers",
        reading: {
          text: "A tutor's newsletter keeps one worked example each month. This month it shows two replies to a single interview question — do you enjoy your weekends? One candidate says: 'Yes, I do.' The other says: 'Mostly, yes — Saturdays are for the market and the laundry, and Sundays I protect completely for the lake and a long swim, because the week is all screens and I need one empty morning.' The newsletter's comment under the pair reads: the first reply answered the question, the second answered it and showed a life, and the examiner can only score the one that exists.",
          task: "What does the newsletter say the examiner can only score, and what did the second reply show that the first did not?",
        },
        writing: {
          task: "Take the thin reply 'I like music' and write the spoken version you would give: the direct answer opened up, the reason, and one grounding detail — then one line naming where you would stop and hand the floor back.",
          guide: [
            "Layer one: answer plainly — what kind of music, and how it fits your week.",
            "Layer two: the reason — what listening actually does for you.",
            "Layer three: one specific — an artist, a song, a ritual, a moment.",
            "Close: mark the natural edge — the sentence after which anything more would be padding.",
          ],
          model: "Yes, I listen to music most days — older jazz while I work, because there are no lyrics to distract the language part of my brain. On Friday evenings the playlist turns loud and guitar-shaped for cooking, and my neighbour has learned the schedule. That's about the shape of it.",
        },
        listening: {
          script: "Tutor: Let's count the moves in what you just said. 'Definitely — cricket, mainly.' That's your verdict, and it arrived in four words, which is perfect. 'I've followed it since my uncle took me to a match when I was nine.' That's a reason wearing a story — also fine. Now, where was the detail? You told me about the uncle twice, but never about what a match day actually feels like. One specific — the noise, the long lunch, the scoreboard — and this answer finishes itself.",
          task: "Which layer does the tutor say is missing, and what does she suggest filling it with?",
        },
        speaking: {
          task: "Answer these three interview questions aloud, each with all three layers and each inside forty seconds: where you live, what you do, and what you do to relax. Record the third answer only.",
          frames: [
            "Layer one, plainly: …",
            "The reason is simple: …",
            "For instance, last…",
            "…and that's about it.",
          ],
          checklist: [
            "Did the direct answer arrive in my first sentence?",
            "Did a because-reason follow, and one specific after that?",
            "Did each answer stop before a minute was up?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Verdict, reason, specific, closing edge — the moves arrive in the order listeners digest them, so nothing hangs unsupported."],
          ["Task fulfilment", "The answer opens with a direct reply and develops the question's own subject until a marked stopping point, which is what developed means in practice."],
          ["Vocabulary", "Precise pairings — guitar-shaped Fridays, no lyrics to distract — carry lexical weight a bare reply could never display."],
          ["Coherence", "The Friday detail only works because the reason established what music is for; each layer leans on the one before it."],
          ["Calibration", "The closing line hands the floor back, keeping the whole answer inside the interview's conversational bounds."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Drill the order — answer, reason, detail — until the first sentence of any reply starts a pattern you can finish under pressure."],
          ["While the clock runs", "After the direct reply, ask yourself 'why is that true?' once and 'such as what?' once; two silent questions, two layers, then stop."],
          ["If you are stuck", "Return to the question's key noun and add one true concrete thing about it — a single specific beats ten seconds of abstract circling."],
          ["Final minutes", "In the late discussion, keep the layers but feed the reason layer first — analysis is the development Part 3 rewards most."],
        ],
      },
      {
        type: "summary",
        points: [
          "A developed answer stacks three layers in order: the direct reply, the reason, and a detail, example or feeling that grounds it.",
          "Interview calibration is two to four sentences — enough to feed all four criteria, brief enough to keep the exchange conversational.",
          "Extension serves the question on the table; rambling drifts away from it and never buys its way back.",
          "The layers scale across the test: they stretch across the cue card's prompts in Part 2 and fatten into analysis in Part 3.",
          "A turn-back line — a small contrast or a closing feeling — finishes an answer cleanly instead of running it into a dead stop.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks from the lessons behind you.",
        items: [
          { question: "How long does Part 1 run?", options: ["One to two minutes", "Four to five minutes", "Ten minutes"], correctIndex: 1, explanation: "The interview lasts four to five minutes of quick exchanges — which is why its answers are calibrated short rather than essay-length.", from: "The Speaking examination format" },
          { question: "Which criterion most directly reads whether your sentences connect logically?", options: ["Fluency and Coherence", "Lexical Resource", "Pronunciation"], correctIndex: 0, explanation: "Coherence is the second half of that criterion's name: a layered answer whose reason follows its verdict is coherence made audible.", from: "What the examiner assesses" },
          { question: "What does the equal weighting of the four criteria imply about developing your answers?", options: ["A developed answer feeds several criteria at once, making it the highest-yield habit per second spoken", "Only the fluency criterion notices extra sentences", "Longer answers risk automatic penalties"], correctIndex: 0, explanation: "One layered sentence can show linking, vocabulary and structure together — a rare move in the test that pays in three currencies at once.", from: "How Writing and Speaking are assessed" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. In the layer method, what arrives in your first sentence?",
        hints: ["The listener is waiting for a verdict before anything else."],
        options: [
          { id: "a", text: "A review of the question, to show you understood it." },
          { id: "b", text: "The direct answer — a plain reply to exactly what was asked." },
          { id: "c", text: "A childhood memory that might connect to the topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The direct answer — a plain reply to exactly what was asked.",
          "Layer one answers the question asked, plainly and quickly, because every later layer — reason, detail, contrast — only makes sense hanging from a reply the listener already holds.",
          "(a) delays the verdict and reads as bought time; (c) starts at layer three, leaving the listener waiting for the answer itself.",
        ),
        tags: ["speaking", "development", "layers"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the coaching log and answer.",
        hints: ["Count the moves inside attempt two, not its word count."],
        passageTitle: "Aleksy, twice",
        passage:
          "The coaching log records two attempts by the same candidate, Aleksy, at one Part 1 question: do you like the city you live in? Attempt one reads: 'Yes, it is nice, I like it.' Attempt two reads: 'On the whole, yes — the river side is beautiful in the evening, and everything I need is within walking distance. The traffic is the one thing I would change; the rush hour on the bridge can add half an hour to a short trip.' The tutor's note under attempt two says: three moves, one small contrast, and he still stopped inside forty seconds.",
        question: "What made the tutor's note call attempt two a three-move answer?",
        options: [
          { id: "a", text: "It used three rare words the examiner would reward." },
          { id: "b", text: "It gave a direct reply, a reason grounded in specifics, and a small contrast — then stopped inside forty seconds." },
          { id: "c", text: "It ran for three minutes without interruption." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It gave a direct reply, a reason grounded in specifics, and a small contrast — then stopped inside forty seconds.",
          "Attempt two stacks the layers in working order: the verdict (on the whole, yes), the reason with its concrete picture (the riverside, walking distance), and the honest reservation (traffic), all inside the interview's time frame.",
          "(a) counts vocabulary the passage never mentions; (c) misstates the timing the note actually praises — he stopped inside forty seconds.",
        ),
        tags: ["speaking", "development", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which behaviour is rambling rather than extension?",
        hints: [],
        options: [
          { id: "a", text: "Adding a reason that explains your direct answer." },
          { id: "b", text: "Adding a specific example that proves the reason." },
          { id: "c", text: "Sliding from the question's subject onto a related story that never returns to it." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "Sliding from the question's subject onto a related story that never returns to it.",
          "Extension keeps serving the question actually asked; rambling is movement without a return ticket — each link can sound plausible, but the subject quietly changes underneath and the answer loses its centre.",
          "(a) and (b) are the second and third layers doing exactly the jobs the method assigns them.",
        ),
        tags: ["speaking", "development", "rambling"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Name the layers from memory.",
        hints: [],
        question: "In order, what are the three layers of a developed answer?",
        acceptedAnswers: [
          "a direct answer, then a reason, then a detail, example or feeling",
          "first the plain reply, second the reason, third a grounding detail",
          "answer the question directly, give the reason, then a concrete detail or feeling",
          "the direct answer first, the reason second, and one specific detail third",
        ],
        keywords: ["reason", "detail"],
        feedback: fb(
          "Direct answer, reason, detail — in that order.",
          "The order matches how listeners digest speech: verdict first, cause second, evidence third, so no sentence arrives before the support it leans on exists; the optional fourth layer hands the floor back.",
          "Answers that begin with stories or examples have the layers stacked upside down — which is the shape rambling grows from.",
        ),
        tags: ["speaking", "development", "method"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Build the layers aloud.",
        hints: ["Say where you live and whether you like it, then open the reason with 'because', and add a detail with 'for instance'."],
        situation:
          "Part 1. The examiner asks: do you like the area where you live? Open your answer by saying where you live or what the area is like, give your reason with the word 'because', and add one specific detail with 'for instance'. Finish inside forty seconds.",
        targetPhrases: [
          "I live in…, and on the whole I like it because…",
          "For instance, just near my building there's…",
          "The one thing I'd change is…",
        ],
        mustSay: ["i live", "because", "for instance"],
        feedback: fb(
          "Three sentences: where you live and whether you like it, the reason introduced by because, and one specific introduced by for instance.",
          "The two signal words are the layer method made audible — because opens the reason layer and for instance opens the detail — and the answer they organise feeds two criteria at once.",
          "Answers missing either signal word have skipped a layer: no because means no reason given, and no for instance usually means no evidence.",
        ),
        tags: ["speaking", "development", "layers"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. An interview question asks about your favourite colour. How long should the answer run?",
        hints: [],
        options: [
          { id: "a", text: "Two or three sentences are plenty for a question this light." },
          { id: "b", text: "The full four-layer treatment, regardless of the question's size." },
          { id: "c", text: "One word is enough — colour is not an important topic." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Two or three sentences are plenty for a question this light.",
          "Calibration means matching weight to weight: a light personal-preference question needs a reply, a reason and perhaps one small detail, while heavier questions earn the fuller stack — and the examiner paces the interview either way.",
          "(b) turns an interview into a series of speeches; (c) starves the criteria, because even a light question deserves its reason.",
        ),
        tags: ["speaking", "development", "calibration"],
      }),
    ],
    assignment: {
      title: "Layers on paper",
      instructions:
        "Write developed spoken answers to three interview questions — 'Do you cook?', 'Do you enjoy your work or studies?' and 'Do you like the place where you live?' — each showing all three layers and ending at a marked stopping edge. Then add a final line naming the layer you habitually skip, and one moment this week where you will practise replacing it.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Record yourself answering five everyday questions tonight with full layers; replay each answer and count the layers out loud — the count, not the feeling, is the data.",
      "Catch one real conversation this week — with a colleague, neighbour or family member — and notice when the other person hands the floor back; borrow whatever signal they use for your own turn-back layer.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-fluency",
    title: "Natural fluency",
    description:
      "What fluency genuinely is — speech at your own natural pace, pauses placed for meaning rather than panic, English fillers instead of silence — plus the recorded self-review routine that finds and fixes your personal hesitation patterns.",
    objectives: [
      "separate the two kinds of pause: pauses that plan content and pauses that hunt for language",
      "hold the floor with natural English fillers instead of silence or your first language",
      "run a recorded self-review that names your three most frequent hesitation patterns",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Ask candidates what fluency means and most say 'fast'. Ask examiners and they describe something else entirely: speech that keeps moving at a comfortable pace, pausing where the meaning pauses, never freezing mid-clause in search of a word. This lesson rebuilds fluency from its true parts — pace, pause, fillers, repair — and installs the single most productive fluency habit in existence: recording yourself, listening back, and naming exactly where and why you stopped.",
        beforeYouStart: [
          "You can build layered answers, so a next sentence is always waiting somewhere.",
          "You know from the criteria lesson that Fluency and Coherence scores continuity and logic, not speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — fluency is scored continuously across all three parts, not measured at isolated moments"],
          ["Task & question types", "Every question type rewards it, but the unbroken one-to-two minutes of the Part 2 long turn depend on it most"],
          ["What is assessed", "The Fluency half of Fluency and Coherence: continuity, natural pace, and hesitation that serves meaning rather than betraying panic"],
          ["Why this matters", "Long silences and mid-clause freezes depress an otherwise strong band estimate faster than almost anything else — and they are among the most trainable behaviours in the test"],
        ],
      },
      { type: "heading", text: "Component 1 — Pace with a pulse, not speed" },
      {
        type: "text",
        text: "Fluency in this test is continuity at your own natural pace — the speed your voice moves when you are relaxed, not the speed of sports commentary. Speaking fast earns nothing: the criterion never mentions velocity, and speed bought at the cost of grammar and linkage usually costs two criteria while flattering none. Speaking artificially slowly is equally expensive: word-by-word delivery breaks sentences into lists and starves coherence. Your target is the pace you would use explaining your job to an interested stranger on a train — steady, alive, punctuated by pauses that belong to the meaning.",
      },
      { type: "heading", text: "Component 2 — The two kinds of pause" },
      {
        type: "table",
        title: "What the microphone does with silence",
        headers: ["What you hear", "Which pause it is", "How the criterion reads it"],
        rows: [
          ["A silence at a clause boundary, then a planned continuation", "For meaning — content being chosen", "Natural planning; fluent speakers do this constantly in every language"],
          ["A freeze halfway through a clause, mouth open, hunting a word", "For language — a missing word stopping the sentence", "Hesitation that erodes the fluency evidence when it repeats"],
          ["'Well…' or 'let me think…', then the answer resumes", "A voiced pause — planning spoken in English", "Floor held, English still arriving; a legitimate tool, not a confession"],
          ["A long unbroken silence after a question", "The stall — thinking with no sound at all", "Dead air: the microphone cannot score effort, only speech"],
        ],
      },
      { type: "heading", text: "Component 3 — Fillers: the sound of thinking in English" },
      {
        type: "text",
        text: "A filler is a planning second made audible in English. 'Well…', 'let me think…', 'I mean…', 'you know…' — each holds the floor, signals to the listener that thought is happening, and keeps your voice inside the language being scored. The alternative to a filler is usually silence, which scores nothing, or a first-language sound, which breaks the English the microphone is collecting. Used sparingly — one per stall, not one per clause — fillers are what natural speech actually sounds like; every relaxed speaker in every language uses them. The habit to build is small: when a word will not come, voice the search in English, and the pause stops being dead air and becomes living speech.",
      },
      { type: "heading", text: "Component 4 — Restarts and repairs as normal speech" },
      {
        type: "text",
        text: "Listen to any relaxed conversation between fluent speakers and you will hear restarts, abandoned clauses and mid-sentence repairs — real speech is drafted aloud, not recited. 'I go… I went to the coast last summer' is a speaker catching a tense slip and fixing it inside a second; the criterion reads that as monitoring, not failure. What separates healthy repair from breakdown is frequency and recovery: one restart per answer, repaired and left behind, is ordinary speech behaviour; a restart every sentence, or a repair followed by an apology and a full stop, reads as a system losing confidence. Repair briefly, continue immediately, and never apologise — the examiner is scoring your English, not your self-esteem.",
      },
      { type: "heading", text: "Component 5 — The recorded self-review" },
      {
        type: "steps",
        title: "The self-review, listen by listen",
        steps: [
          {
            title: "Listen 1 — record two minutes on a familiar topic",
            text: "Choose a topic you could talk about happily — your street, your job, a dish you cook — and record two uninterrupted minutes. The topic's familiarity is deliberate: hesitation patterns show most clearly when content is easy, because whatever stalls remain belong to speech, not to thinking.",
            examples: [
              { english: "A learner records two minutes on his morning routine, phone on the table, no preparation.", note: "Easy topic, hard evidence: the freezes left behind are speech habits." },
            ],
          },
          {
            title: "Listen 2 — mark every long silence",
            text: "Play the recording back and mark each silence longer than about two seconds. Count them, and note where they cluster: at the start, after grammar slips, or on particular topics. The map matters more than the total — three freezes on past-tense questions is a diagnosis, while three scattered freezes is noise.",
            examples: [
              { english: "A tally sheet shows four long silences; three sit directly after verbs that needed a past tense.", note: "Clusters convert a vague bad habit into a named drill." },
            ],
          },
          {
            title: "Listen 3 — classify each pause",
            text: "For every marked silence, ask the two-part question: was this a pause for meaning, deciding what to say next — or a pause for language, hunting for how to say it? Meaning pauses need no repair; language pauses name the exact vocabulary to bank this week.",
            examples: [
              { english: "Two of the four silences were choosing between stories; one was the word for a kettle. Only the kettle goes on the vocabulary list.", note: "Classification turns counting into training." },
            ],
          },
          {
            title: "Listen 4 — count fillers and repairs",
            text: "Count your natural fillers and your self-corrections. Too few fillers alongside many freezes means the silence habit; fillers crowding every clause means the noise habit. A healthy recording sounds like someone thinking in English, out loud.",
            examples: [
              { english: "One 'well', one 'I mean' and two quick repairs in two minutes — the balance sheet of relaxed speech.", note: "Fillers and repairs in moderation are the texture fluency recognises." },
            ],
          },
          {
            title: "Re-record once, changing only the biggest pattern",
            text: "Record the same topic again, working on the single largest pattern you found — nothing else. One variable per week keeps the routine honest and finishable; the count you track should fall before you add a new one.",
            examples: [
              { english: "Week one's four long silences become week two's one; the vocabulary list waits its turn.", note: "The falling count, not the feeling of improvement, is the evidence." },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Fluency, caught on a recording",
        items: [
          { english: "Asked about mornings, a speaker pauses at the end of a clause — 'I get up at six… and the first thing I do is walk the dog' — the pause plans what comes next, not how to say it.", note: "A meaning pause: silence placed where a comma would live.", domain: "everyday" },
          { english: "A candidate freezes mid-clause on the word 'syllabus', restarts the sentence, and lands on 'course load' instead — repair, then movement.", note: "The restart is the recovery, not the failure.", domain: "study" },
          { english: "Describing a missed connection, a speaker marks time with 'well, let me think… there were two of us, and…' and the story assembles itself inside the fillers.", note: "Voiced planning keeps the narrative alive while the words arrive.", domain: "travel" },
          { english: "In a team meeting, an engineer thinks aloud: 'I mean, the deadline is fixed, so the real question is scope.' — fillers doing professional work.", note: "Meetings are fluency practice with witnesses.", domain: "work" },
          { english: "A learner's recording shows nine 'you know' in ninety seconds; week two's target is four.", note: "The filler audit: a count you can train down.", domain: "study" },
          { english: "A self-review log entry reads: 'freezes cluster on past-tense questions — this week, three past-tense topic recordings.'", note: "The pattern is the diagnosis; the topic is the prescription.", domain: "everyday" },
          { english: "Two candidates describe the same journey; the faster one stops twice for words, the steadier one never stops — and the steadier recording carries the better fluency evidence.", note: "Pace with continuity beats speed with freezes.", domain: "travel" },
        ],
      },
      { type: "heading", text: "Component 6 — What fluency is not" },
      {
        type: "mistakes",
        title: "Fluency traps corrected",
        items: [
          { wrong: "Fluent speakers never pause, so I must fill every second with sound.", right: "Pause where the meaning pauses — at clause boundaries, before a new point — and voice your planning pauses in English when a word is missing.", reason: "The criterion reads continuity of meaning, not absence of silence; pauses placed like punctuation are exactly what natural pace sounds like." },
          { wrong: "When I notice a grammar slip, the safest move is to stop, apologise and start the whole answer again.", right: "Repair in a breath — repeat the corrected fragment, not the answer — and keep moving.", reason: "Full restarts convert one small error into a fluency event; brief self-correction is the behaviour fluent speech is actually made of." },
          { wrong: "To sound fluent I have trained myself to speak as fast as the newsreaders I listen to.", right: "Speak at the pace you think at: fast enough for rhythm, slow enough for word choice and grammar to survive.", reason: "Speed is not on the criterion, and the errors speed produces sit on two others — grammatical range and accuracy, and coherence." },
        ],
      },
      {
        type: "four-skills",
        title: "One recording, reviewed honestly",
        reading: {
          text: "A fluency log entry keeps a thirty-second transcript of one candidate answering a discussion question about why people find small talk difficult. The transcript shows four pauses — two at clause boundaries before new points, one mid-clause while the word 'awkward' was hunted, and one voiced as 'I mean…' before a successful second attempt at the idea. The log's conclusion reads: the balance is nearly right; the word hunt is the only pattern worth training this week, and the prescription is a bank of ten social-feeling adjectives.",
          task: "Which single pattern does the log identify for this week's training, and what is prescribed for it?",
        },
        writing: {
          task: "Transcribe thirty seconds of your own recorded answer. Mark every pause with a slash, label each one M for meaning or L for language, and write a two-line conclusion: your dominant pause type and this week's single drill.",
          guide: [
            "Play your recording at half speed and write exactly what you hear, silences included.",
            "Mark each pause: a single slash for short, a double slash for long.",
            "Label: M where you were choosing content, L where you were hunting a word.",
            "Conclude: which type dominates, and one drill that answers it directly.",
          ],
          model: "Transcribed thirty seconds: 'I think // the best day / of that whole summer / was the one we… the one we spent on the island // I mean, the ferry was late, / but that almost helped.' Findings: four pauses; two M at clause edges, two L on the repeated 'the one we…' fragment. Conclusion: language pauses dominate when the story gets emotional; this week's drill — retell three emotional moments a day with a feelings-word bank open beside me.",
        },
        listening: {
          script: "Tutor: Two things about this take. First, the silence before 'the ferry was late' — that's a comma, not a collapse; you were choosing the next beat of the story, and every good storyteller does exactly that. Second, the repetition on 'the one we… the one we'. That's a language pause with a restart wrapped around it. So: keep the first kind, and for the second, we build you a bank of feeling words, because the stall came exactly where the emotion arrived.",
          task: "Which pause does the tutor call 'a comma, not a collapse', and what does she prescribe for the language pauses?",
        },
        speaking: {
          task: "Answer the same question twice with a ten-second gap between takes: first take naturally, second take replacing every long silence with an English filler. Then say one line about which take kept more English arriving.",
          frames: [
            "Well, the thing I remember most is…",
            "Let me think for a second — …",
            "I mean, it wasn't the money so much as…",
            "You know how some days just…",
          ],
          checklist: [
            "Did every stall get voiced in English?",
            "Did I pause at clause edges rather than inside clauses?",
            "Did the second take keep moving without gaining speed?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The transcription separates what was said from how it moved — words on the line, pauses marked on the same line — so pattern and speech can be compared honestly."],
          ["Task fulfilment", "Every requirement of the review is present: verbatim capture, pause marks, M-and-L classification, and a conclusion that names one drill."],
          ["Accuracy", "The model labels rather than judges: the repeated fragment is recorded as data about emotional moments, not as an embarrassment to hide."],
          ["Coherence", "The conclusion follows from its evidence — two L-pauses on one repeated fragment become a prescription aimed at exactly that situation."],
          ["Discipline", "One drill per week, named at the end, keeps the routine sustainable — the review exists to improve the speaker, not the review."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Build the recording habit in practice weeks: two minutes recorded, four listens, one named pattern — the routine itself is the training."],
          ["While the clock runs", "Ride your natural pace and place pauses where the sense changes; when a word is missing, voice the search — 'well', 'I mean' — instead of going silent."],
          ["If you are stuck", "Say the stall aloud in English ('let me think for a second'), then return to your last completed clause and continue from solid ground."],
          ["Final minutes", "Late in the discussion, fatigue invites silence; keep the voice moving with slightly shorter sentences rather than stopping altogether."],
        ],
      },
      {
        type: "summary",
        points: [
          "Fluency is continuity at a natural pace, not speed — velocity appears nowhere in the criterion.",
          "Pauses at clause boundaries plan content; freezes mid-clause hunt for words; only the second kind erodes the evidence.",
          "Natural fillers voice the pause in English and hold the floor; dead air and first-language sounds score nothing.",
          "Restarts and self-corrections are normal speech behaviour — repair briefly and continue, without apology.",
          "The recorded self-review — transcribe, mark, classify, re-record — finds the exact hesitation patterns worth training.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "From the foundations you already own.",
        items: [
          { question: "What does the Fluency half of Fluency and Coherence score?", options: ["Continuity and pace that feel natural, with hesitation judged by type and frequency", "Grammatical accuracy while speaking quickly", "How few words you need per idea"], correctIndex: 0, explanation: "The criterion describes continuous speech without effortful searching — pace, not speed, and pauses read according to what they were for.", from: "What the examiner assesses" },
          { question: "How do prepared layers protect you when a word goes missing mid-answer?", options: ["They give you a next sentence waiting, so one stall never becomes a full stop", "They let you change the subject legally", "They make vocabulary unnecessary"], correctIndex: 0, explanation: "Knowing your next layer — reason, then detail — means a missing word costs a filler, not the whole turn.", from: "Answer development" },
          { question: "Which part makes continuous fluency hardest to keep?", options: ["The identity check", "The one-to-two unbroken minutes of the long turn", "The rounding questions after the card"], correctIndex: 1, explanation: "The long turn is the only stretch with no partner to hand the floor to — which is why it rewards the self-review training this lesson builds.", from: "The Speaking examination format" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. What is fluency in this test?",
        hints: ["It is not a speed limit."],
        options: [
          { id: "a", text: "Speaking as fast as you can manage without stopping." },
          { id: "b", text: "Continuity at a natural pace — speech that keeps moving and pauses where the meaning pauses." },
          { id: "c", text: "Reproducing a memorised passage without hesitation." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Continuity at a natural pace — speech that keeps moving and pauses where the meaning pauses.",
          "Fluency is continuity of speech and thought: a comfortable pace, silences placed like punctuation rather than panic, and ideas that keep arriving — none of which has anything to do with velocity.",
          "(a) confuses speed with smoothness, usually at the cost of grammar and linkage; (c) describes recitation, which the fluency criterion is specifically designed to see through.",
        ),
        tags: ["speaking", "fluency", "definition"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the transcript and answer.",
        hints: ["Look at where each long silence sits in its clause."],
        passageTitle: "Ines and the pet question",
        passage:
          "A fluency log keeps a thirty-second transcript of Ines answering a Part 3 question about why people keep pets. 'I think // the real reason / is company // a dog is… a dog becomes / part of the family, / especially for people who // live alone / let me think // for older people / the routine matters too, / the walking, / the feeding.' The log's margin note reads: two long silences, both at the same spot — deciding who benefits — and one restart, 'dog becomes', repaired in half a second.",
        question: "What does the margin note identify as the two long silences' shared cause?",
        options: [
          { id: "a", text: "Vocabulary gaps — the words for animals were missing." },
          { id: "b", text: "Deciding who benefits from pets — content selection, not language hunting." },
          { id: "c", text: "Nervousness about the examiner's opinion of the answer." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Deciding who benefits from pets — content selection, not language hunting.",
          "Both long silences sit at the same spot — choosing which group to talk about next — which makes them pauses for meaning: planning content at a clause boundary, exactly where natural speech stops to think.",
          "(a) contradicts the note, which reports the words arriving; (c) invents an emotion the transcript cannot show.",
        ),
        tags: ["speaking", "fluency", "pauses"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. What job does a natural filler do?",
        hints: [],
        options: [
          { id: "a", text: "It hides the fact that you are thinking, which examiners penalise." },
          { id: "b", text: "It holds the floor in English while a word or an idea is found, keeping the voice inside the language being scored." },
          { id: "c", text: "It fills the recording so that no second of tape is wasted." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It holds the floor in English while a word or an idea is found, keeping the voice inside the language being scored.",
          "A filler voices the pause: 'well', 'let me think' and 'I mean' tell the listener that thought is happening, buy a planning second, and keep the speech inside English rather than inside silence or another language.",
          "(a) reverses the truth — voiced planning is normal and unpenalised, while hidden panic usually becomes dead air; (c) treats the microphone as the audience, when the audience is the examiner.",
        ),
        tags: ["speaking", "fluency", "fillers"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. The self-review question.",
        hints: [],
        question: "When you replay a recording of yourself and hit a pause, which two-part question do you ask about it?",
        acceptedAnswers: [
          "was the pause for meaning — choosing content — or for language — hunting a word",
          "meaning or language: was i choosing the idea, or hunting the word",
          "did it serve meaning, planning the next point, or language, finding a missing word",
          "was that silence about meaning or about language — content selection or vocabulary search",
        ],
        keywords: ["meaning", "language"],
        feedback: fb(
          "Was the pause for meaning, or for language?",
          "The classification is the diagnosis: meaning pauses are natural planning and need no repair, while language pauses cluster on missing vocabulary and tell you exactly which words to bank this week.",
          "Unsorted pauses cannot be trained — counting them without classifying them produces anxiety instead of drills.",
        ),
        tags: ["speaking", "fluency", "self-review"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Think aloud, in English.",
        hints: ["Open with 'well' or 'let me think' — then reason with 'because'."],
        situation:
          "Part 3. The examiner asks why so many people prefer streaming films at home to going to the cinema. You have never considered the question. Open with a natural filler to buy a second, reason your way to one main cause with the word 'because', and support it with a small example from your own household — all inside thirty seconds.",
        targetPhrases: [
          "Well, I've never really thought about it, but…",
          "Let me think for a second…",
          "…probably because…",
          "I mean, in my own family…",
        ],
        mustSay: ["well", "i mean", "because"],
        feedback: fb(
          "A voiced opener, a cause introduced with because, and a small supporting example — inside half a minute.",
          "This is the fluency cycle in miniature: the filler keeps English arriving, because opens the reasoning, and the example grounds it — nothing was prepared, and everything was scoreable.",
          "Silence after an unfamiliar question, or a flat 'I don't know', gives the recorder nothing; the voiced search gives it continuous, organised speech.",
        ),
        tags: ["speaking", "fluency", "think-aloud"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Mid-answer you hear yourself say 'I go' where the past tense belongs. What is the trained response?",
        hints: [],
        options: [
          { id: "a", text: "Stop, apologise to the examiner, and begin the whole answer again at a slower speed." },
          { id: "b", text: "Repeat the corrected fragment in one breath — 'I went' — and carry on with the sentence." },
          { id: "c", text: "Ignore tense from this point on, protecting your pace at any cost." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Repeat the corrected fragment in one breath — 'I went' — and carry on with the sentence.",
          "A brief self-correction is what fluent speech is made of: the repair shows the monitoring ear the grammar criterion likes, and the immediate continuation is what the fluency criterion rewards — two behaviours, one second.",
          "(a) converts a minor slip into a fluency event and an unnecessary apology; (c) trades a small accuracy loss for a growing one, since tenses will keep mattering.",
        ),
        tags: ["speaking", "fluency", "repair"],
      }),
    ],
    assignment: {
      title: "The balance count",
      instructions:
        "Record two minutes on a familiar topic, then listen back only for the balance sheet: how many natural fillers, how many long silences, and how many self-corrections. In 40–160 words, report the three counts, name which of the three balances is off — silence habit, noise habit or restart habit — and write the one drill you will run this week to move that number.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Record the same two-minute topic answer three days running without changing anything else, and listen back only for the count of long silences — the falling count is the training working.",
      "Collect five English fillers from real listening this week — programmes, podcasts, colleagues — noting who says them and when; borrow only the two that feel most natural in your own mouth.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-memorised",
    title: "Avoiding memorised responses",
    description:
      "Why examiners hear a memorised script within seconds — recited rhythm, answers that miss the actual question, flawless grammar with zero repair — and the honest alternative: prepared ideas, vocabulary and shapes, spoken live from notes rather than recited from a page.",
    objectives: [
      "recognise the three signals that expose a memorised answer: rhythm, mismatch and the absence of repair",
      "prepare ideas, vocabulary and answer shapes — and understand why whole sentences cannot be prepared safely",
      "rehearse from keyword notes so every take comes out different, and run the recovery sequence when you blank",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "The temptation is ancient: write the perfect answer, learn it by heart, deliver it. The plan collapses on contact with a live examiner, because memorised speech carries three signatures no candidate can hide — a recited rhythm, an answer to a question that was not quite the one asked, and perfection itself, the eerie absence of the repairs real speech is made of. This lesson shows why detection is close to inevitable, where safe preparation ends and dangerous memorisation begins, and how to speak live from nothing but ideas and notes.",
        beforeYouStart: [
          "You build answers in layers rather than fixed sentences, and you know how fluency behaves under pressure.",
          "You understand the four criteria well enough to see which ones a scripted answer quietly betrays.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the whole test, with the Part 2 long turn the classic scene of the crime"],
          ["Task & question types", "Rehearsed cue-card turns and over-prepared interview topics — and the follow-up questions no script can anticipate"],
          ["What is assessed", "All four criteria at once: a detected script flattens fluency, breaks the coherence of the exchange, and answers a question the examiner never fully asked"],
          ["Why this matters", "Memorised material gives the examiner less usable evidence, not more — the exact opposite of what the candidate hoped while learning it"],
        ],
      },
      { type: "heading", text: "Component 1 — How a script betrays itself" },
      {
        type: "text",
        text: "Examiners are professional listeners, and memorised speech announces itself in three ways. First, rhythm: recited language arrives in even, unbroken blocks, delivered at a single speed with intonation that never responds to meaning — the voice of reading aloud, not thinking aloud. Second, mismatch: live questions are rarely phrased exactly as rehearsed ones, so a scripted answer starts drifting from the actual question — the words answer something adjacent, and the examiner hears the gap. Third, and most damning, the missing repair: genuine speech corrects itself, restarts phrases, changes direction mid-thought. A passage delivered without a single stumble or self-correction is not evidence of fluency; it is evidence of rehearsal.",
      },
      { type: "heading", text: "Component 2 — The bright line: prepared ideas, never prepared sentences" },
      {
        type: "table",
        title: "Two kinds of preparation, side by side",
        headers: ["What you prepare", "Safe — ideas and language", "Dangerous — sentences"],
        rows: [
          ["Content", "Topic idea banks: people, places and stories you can deploy wherever they fit", "A word-for-word answer built for one exact phrasing of a question"],
          ["Vocabulary", "Collocations and topic words that attach to any relevant question", "Showcase sentences rehearsed as fixed strings around those words"],
          ["Structure", "Shapes: layer order, card-prompt coverage, openings you own", "Scripts that must survive unchanged in order to make sense"],
          ["Rehearsal", "Speaking from notes, every take different from the last", "Repeating one take until it is identical every time"],
          ["On the day", "Ideas recombine to fit whatever phrasing arrives", "The script runs until interrupted, then the speech collapses"],
        ],
      },
      { type: "heading", text: "Component 3 — Why ideas flex and sentences snap" },
      {
        type: "text",
        text: "An idea is modular; a sentence is welded. The story of learning to swim — the cold pool, the patient uncle, the first unaided length — can serve a question about a person who influenced you, a skill worth learning, a childhood memory, or a moment of persistence, each time with different sentences assembling around it. Vocabulary behaves the same way: a bank of precise words attaches itself wherever the topic appears. A polished sentence enjoys no such freedom — it was built for one exact question, and when the examiner's phrasing arrives from a slightly different angle, the sentence answers the question you prepared rather than the question you were asked. The one or two rounding questions after the long turn, and every discussion exchange after them, live precisely in the space no script can reach.",
      },
      { type: "heading", text: "Component 4 — Speaking from notes, not from a page" },
      {
        type: "steps",
        title: "The note-based rehearsal method",
        steps: [
          {
            title: "Step 1: Reduce every prepared answer to keywords",
            text: "Take any answer you have rehearsed and strip it to five to eight words — nouns, a verb or two, arrows between them. If you cannot perform the answer again from those words, you had memorised it; the reduction is the diagnostic as much as the method.",
            examples: [
              { english: "A prepared paragraph about learning to swim becomes: 'uncle — cold pool — Saturdays — first length — still swimming'.", note: "Five notes, no sentence survives — and every idea does." },
            ],
          },
          {
            title: "Step 2: Rehearse only from the notes",
            text: "Speak the topic from the keywords alone, twice, on different days. The two takes must come out different; if they come out identical, the notes have quietly become a script and need cutting further.",
            examples: [
              { english: "Monday's take opens with the uncle, Thursday's with the pool — both cover all five notes, neither shares a sentence.", note: "Different order, different wording, same ground: exactly right." },
            ],
          },
          {
            title: "Step 3: Vary the question, not just the answer",
            text: "Point the same notes at three phrasings: a person who taught you something, a skill worth learning, a childhood memory. The notes flex; a sentence cannot.",
            examples: [
              { english: "The swim notes serve all three phrasings — the uncle leads in the first, the skill in the second, the memory in the third.", note: "One bank, many questions: the definition of flexible." },
            ],
          },
          {
            title: "Step 4: Keep the notes honest on test day",
            text: "The sixty seconds before the long turn are this method miniaturised: the card's prompts become your headings, and your keywords sit under them. Nothing you write in that minute should be a sentence, and nothing needs to be.",
            examples: [
              { english: "Under the card's four prompts she writes two words each, glances at them twice while speaking, and closes at the two-minute mark.", note: "The preparation minute produces ideas in writing and sentences in speech." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 5 — When you blank" },
      {
        type: "text",
        text: "Even well-prepared speakers blank: the idea dissolves mid-sentence, and the silence starts to grow. The recovery is a sequence, not a miracle. Buy the second audibly — 'well, let me think' — because voiced planning is still English arriving. Return to the question's key noun and say anything true about it; the smallest true statement ('swimming… I started quite late, actually') is a handhold. Shrink the claim until you can support it — 'I'm no expert, but my impression is…' — because a modest position you can finish outranks an ambitious one you cannot. One completed honest sentence almost always restarts the engine; switching to some prepared answer on a nearby topic is the one move that turns a blank into a detection.",
      },
      {
        type: "example",
        title: "Preparation, done both ways",
        items: [
          { english: "For the topic 'a person you admire', a candidate banks three people, three stories and a handful of words — then flexes the grandmother story across four different question phrasings in one week of practice.", note: "Idea banks answer many questions; that is their whole value.", domain: "study" },
          { english: "Asked to describe a city worth visiting, a speaker unspools a polished tribute to her hometown — never noticing the card said another country — and the mismatch is audible within two sentences.", note: "Answering a nearby question is the surest script signal of all.", domain: "travel" },
          { english: "A long turn delivered at clockwork rhythm with no pauses draws a follow-up question; two sentences later the recital has become fragments, and the recording catches the change.", note: "Zero repair, then collapse: the sequence examiners know by heart.", domain: "everyday" },
          { english: "A sales director rehearses her launch pitch from slide keywords only; when a client redirects mid-meeting, she recombines the same points in a new order without pausing.", note: "Note-based rehearsal is exactly this resilience, trained in advance.", domain: "work" },
          { english: "Two takes of the same practice card, an hour apart: the note-based speaker's wording differs between takes while the ground covered stays identical.", note: "Different words, same idea — the proof of honest preparation.", domain: "study" },
          { english: "Blanking on a question about a long journey, a candidate says 'well, the longest one I can talk about is…', and finishes with a train ride she had never once rehearsed.", note: "The recovery sequence doing what scripts cannot: generating speech.", domain: "travel" },
          { english: "Telling a friend about a film, nobody recites a review — the retelling bends to the friend's interruptions, and the test is asking for exactly that bend.", note: "Natural retelling is the register the whole examination wants.", domain: "everyday" },
        ],
      },
      { type: "heading", text: "Component 6 — The mistakes scripts are made of" },
      {
        type: "mistakes",
        title: "Script-building mistakes corrected",
        items: [
          { wrong: "I'll write a perfect Part 2 answer for each topic and memorise it — that guarantees my grammar.", right: "Prepare the idea bank, the topic vocabulary and the shape of the turn; let the sentences assemble live from notes, the way they do in your own language.", reason: "A memorised answer risks detection on three signals at once and collapses at the first unscripted follow-up — the guarantee runs backwards." },
          { wrong: "The examiner asked about weekend habits, but my prepared essay on hobbies covers something close — I'll deliver that.", right: "Anchor to the actual words of the question: answer weekends, even simply, and deploy hobby ideas only where they genuinely fit.", reason: "Answering a nearby prepared topic is the mismatch examiners hear most easily, and it costs the coherence of the exchange as well as the direct answer." },
          { wrong: "I went completely blank, so the only honest option was to say 'I don't know' and wait for the next question.", right: "Voice the stall in English, shrink the claim to something true and small, and finish one honest sentence — the restart is the move.", reason: "Silence scores nothing and a blank is recoverable; abandoning the turn converts a pause into a lost stretch of scored time." },
        ],
      },
      {
        type: "four-skills",
        title: "Two candidates, one card",
        reading: {
          text: "Two preparation desks, two outcomes. The first desk holds a notebook of finished paragraphs, one per likely topic, rehearsed until they ran identically. The second holds index cards: a person, a place, a skill, a meal, each with six words and an arrow or two. When a practice card asked both candidates to describe something new they had learned recently, the first desk searched its paragraphs and found nothing that fit, while the second desk laid three cards on the table and started talking within five seconds.",
          task: "What could the second desk do that the first could not, and why?",
        },
        writing: {
          task: "Take this word-for-word plan — 'One skill I would love to learn is pottery, because working with clay looks wonderfully calming' — and reduce it to honest preparation: five keyword notes plus one idea sentence about why the topic matters to you, with no phrase you would deliver unchanged.",
          guide: [
            "Strip each clause to its nouns and verbs: skill, pottery, clay, calming.",
            "Keep the reason as an idea, not a phrase: why does calm matter in your life?",
            "Add one note for reuse — which other question could the same bank serve?",
            "Check: could you say it three different ways from these notes alone?",
          ],
          model: "Notes: pottery — clay — calming — after screens — aunt's shelves. Idea sentence: pottery appeals because my days are all screens and hurry, and an evening of clay would slow my hands down. Reuse note: the same bank answers a 'hobby worth trying' question and a 'relaxing activity' question, with different sentences each time.",
        },
        listening: {
          script: "Tutor: I played both of your Part 2 takes back to back, and the difference is not quality — it is kind. Nadia's was word-perfect and completely still: one speed, no pauses, no repairs, and when I asked whether the skill was common in her country, she had nothing. Karim's take had two pauses and one corrected verb — and his follow-up answer was the strongest minute of the whole session. Perfect and still is what rehearsal sounds like. Pauses and repairs are what speech sounds like. Guess which one gives me something to score.",
          task: "Which three features does the tutor say separate Karim's take from Nadia's?",
        },
        speaking: {
          task: "Take one idea you know well — a person, a place or a skill — and answer three differently worded questions about it from the same five keyword notes, letting each answer come out different.",
          frames: [
            "First phrasing — my notes say: …",
            "Same idea, new angle: …",
            "The detail I keep is…, but this time I'd say it differently because…",
            "Third phrasing — shorter, because the question is narrower.",
          ],
          checklist: [
            "Did every answer stay anchored to the question actually asked?",
            "Did at least one answer contain a repair or a voiced pause?",
            "Were the three takes different in wording while sharing the idea?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The notes fall in the order speech will need them — topic, reason, personal anchor, reuse — so the turn has a shape before it has sentences."],
          ["Task fulfilment", "The reduction removes every fixed sentence while keeping every prepared idea, which is exactly the bright line this lesson draws."],
          ["Vocabulary", "The precise image — screens and hurry — survives the reduction, even though the sentence around it has been dissolved."],
          ["Flexibility", "The reuse note forces the bank to answer more than one question, which is the property scripts lack and ideas own."],
          ["Honesty", "An idea sentence about why the topic matters gives the speaker something true to return to whenever wording fails."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Build idea banks and vocabulary banks per topic — never sentence banks — and rehearse only from keyword notes."],
          ["While the clock runs", "Listen to the whole question before your first word, then let your notes and ideas answer that question rather than its rehearsed cousin."],
          ["If you are stuck", "Voice the stall in English, return to the question's key noun, shrink the claim — one finished true sentence restarts everything."],
          ["Final minutes", "Trust your ideas in the late discussion exchanges, where questions are least predictable and improvisation is the only honest strategy."],
        ],
      },
      {
        type: "summary",
        points: [
          "Examiners detect scripts through three signals: recited rhythm, answers that miss the actual question, and the total absence of repair.",
          "Prepared ideas, topic vocabulary and answer shapes are legitimate and powerful; word-for-word sentences are the one unsafe preparation.",
          "Ideas recombine to fit any phrasing; sentences are welded to one exact question — and the follow-up questions live where scripts cannot go.",
          "Rehearse from keyword notes and let every take come out different; sameness is the alarm bell.",
          "When you blank: voice the stall in English, return to the question's key noun, shrink the claim, finish one honest sentence.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "The foundations, recalled under pressure.",
        items: [
          { question: "Why does the layer method survive question phrasings that a script cannot?", options: ["Because the layers are built after the question is heard, answering what was actually asked", "Because layers use simpler vocabulary", "Because scripts are banned and layers are not"], correctIndex: 0, explanation: "A layered answer is assembled live: the direct reply is chosen for this question, so the reason and detail hang from the right hook every time.", from: "Answer development" },
          { question: "Why is the total absence of self-correction a warning rather than a triumph?", options: ["Because genuinely fluent speech always contains some repair, so perfection suggests recitation", "Because examiners award a bonus for visible corrections", "Because corrections add useful seconds to the recording"], correctIndex: 0, explanation: "The fluency lesson established repair as normal speech behaviour — so a stretch containing none of it anywhere sounds rehearsed rather than gifted.", from: "Natural fluency" },
          { question: "What arrives immediately after the long turn — exactly where a script runs out?", options: ["One or two short rounding questions, then the linked discussion", "A second, harder cue card", "A written summary of your own answer"], correctIndex: 0, explanation: "The format lesson placed the rounding questions and the discussion right after the turn — the unscriptable minutes that reward prepared ideas over prepared sentences.", from: "The Speaking examination format" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. What are the three signals that expose a memorised answer?",
        hints: ["Think rhythm, relevance and repair."],
        options: [
          { id: "a", text: "Loud volume, slow speech and long pauses." },
          { id: "b", text: "A recited rhythm, an answer that misses the actual question, and the total absence of repair." },
          { id: "c", text: "Regional accent, formal vocabulary and perfect grammar." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A recited rhythm, an answer that misses the actual question, and the total absence of repair.",
          "Examiners hear scripts through the three signatures no candidate can hide: delivery that runs in unwavering blocks, content that answers a nearby rehearsed question instead of the one asked, and perfection itself — speech with no restarts or self-corrections anywhere in it.",
          "(a) lists delivery features that say nothing about memorisation; (c) names ordinary traits, and grammar accuracy alone is never evidence of a script.",
        ),
        tags: ["speaking", "memorised", "detection"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the account and answer.",
        hints: ["Compare what each candidate had on their card."],
        passageTitle: "One card, two preparations",
        passage:
          "Two candidates sat the same practice card, which asked them to describe a skill they would like to learn. Vesna had written a complete answer the night before and delivered it without a single pause, at one unchanging speed, eyes fixed above the examiner's head. When the follow-up question arrived — is this skill popular in your country? — she produced two broken sentences and stopped. Ravi had five words on his card: piano, grandfather, winter, online lessons, patient. His first take ran differently from every rehearsal, he paused twice, corrected a verb once, and answered the follow-up without hesitation.",
        question: "Why did Vesna's performance collapse at the follow-up question?",
        options: [
          { id: "a", text: "The follow-up was harder than the card, and she was tired." },
          { id: "b", text: "The follow-up was unscripted — and her fluency had been rehearsal rather than speech, so there was nothing behind the performance to fall back on." },
          { id: "c", text: "She had prepared the wrong topic and never recovered from the mismatch." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The follow-up was unscripted — and her fluency had been rehearsal rather than speech, so there was nothing behind the performance to fall back on.",
          "A recital has no engine for questions it never met: the clockwork rhythm, the fixed eyes and the two broken sentences after the interruption form the classic sequence — fluency that lives only inside the script dies outside it.",
          "(a) offers a difficulty explanation the passage never supports; (c) misreads the card — she had prepared the right topic in the wrong way.",
        ),
        tags: ["speaking", "memorised", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why can perfect, error-free delivery actually count against a candidate?",
        hints: [],
        options: [
          { id: "a", text: "Because examiners distrust anyone whose grammar is better than their vocabulary." },
          { id: "b", text: "Because genuinely spontaneous speech always contains some repair, so a stretch with none reads as recited — and recited material is discounted as evidence." },
          { id: "c", text: "Because the criteria deduct marks for speaking too accurately under pressure." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because genuinely spontaneous speech always contains some repair, so a stretch with none reads as recited — and recited material is discounted as evidence.",
          "Real speech is drafted aloud: speakers restart, correct and change direction, so a passage without a single stumble is not more fluent — it is less spontaneous, and the examiner discounts whatever sounds memorised when judging the live evidence.",
          "(a) invents a cross-criterion suspicion the scoring does not contain; (c) states a penalty that exists nowhere in the criteria.",
        ),
        tags: ["speaking", "memorised", "repair"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. State the bright line.",
        hints: [],
        question: "According to this lesson, what is safe to prepare — and what is not?",
        acceptedAnswers: [
          "ideas, topic vocabulary and answer shapes are safe; word-for-word sentences are not",
          "prepare ideas, word banks and structures — never whole sentences to recite",
          "ideas, collocations and shapes yes; scripted sentences no",
          "you may walk in with ideas and language prepared, but not with sentences to deliver unchanged",
        ],
        keywords: ["ideas", "sentences"],
        feedback: fb(
          "Prepare ideas, vocabulary and shapes — never sentences to deliver word for word.",
          "The bright line runs between modular material that can recombine to fit any phrasing and welded strings that answer one exact question; ideas flex, sentences snap, and the follow-up questions live in the space scripts cannot reach.",
          "Answers that ban preparation altogether waste the legitimate power of idea banks, while answers permitting full sentences have kept the one dangerous half.",
        ),
        tags: ["speaking", "memorised", "preparation"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Run the blank-recovery sequence.",
        hints: ["First move: voice the stall in English. Then name the smallest true thing you can say."],
        situation:
          "Part 1. The examiner asks what you like doing in your free time — and your mind goes completely blank. Do not go silent: begin with 'well, let me think', then say the smallest true thing about your free time, and build one reason around it with 'because'. Around twenty seconds in total.",
        targetPhrases: [
          "Well, let me think…",
          "The one thing I always make time for is…",
          "I suppose that's mainly because…",
        ],
        mustSay: ["well", "let me think", "because"],
        feedback: fb(
          "A voiced stall, one small true statement, and a reason — with no silence at any point.",
          "The sequence works because each move produces English: the filler holds the floor, the modest claim gives the answer something to stand on, and because restarts the engine almost every time.",
          "Silence or a flat 'I don't know' converts a two-second gap into a lost stretch of scored time — the one outcome entirely within your control to avoid.",
        ),
        tags: ["speaking", "memorised", "recovery"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. During the one minute before your long turn, what do honest notes look like?",
        hints: [],
        options: [
          { id: "a", text: "The full sentences you intend to say, written small." },
          { id: "b", text: "A few keywords — nouns, arrows, the card's own prompts — that different sentences could be built from on every take." },
          { id: "c", text: "Nothing at all, since writing is banned in the preparation minute." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A few keywords — nouns, arrows, the card's own prompts — that different sentences could be built from on every take.",
          "Keyword notes are the format's own invitation: the card gives you sixty seconds and a pencil precisely because it wants organised speech rather than recitation, and notes made of ideas can flex into whatever sentences the moment asks for.",
          "(a) is a script in miniature, which is exactly what the minute is not for; (c) states a ban the format does not impose — the materials are provided on purpose.",
        ),
        tags: ["speaking", "memorised", "notes"],
      }),
    ],
    assignment: {
      title: "The case against scripts",
      instructions:
        "A friend is memorising complete Part 2 answers, one per likely topic, and defends it as insurance. In 40–160 words, write the reply: the three detection signals, why prepared ideas work where prepared sentences fail, and the note-based alternative you would put in their place — ending with the one instruction you would give their next practice session.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Take one idea bank through five differently phrased questions this week, speaking from notes only; if any two takes come out word-for-word identical, the bank has quietly become a script — reduce it further.",
      "Practise the blank-recovery sequence deliberately: have a partner spring an unprepared question on you each day, and run buy-time, key-noun, shrink-the-claim, one-honest-sentence until the sequence is reflex.",
    ],
  },
];
