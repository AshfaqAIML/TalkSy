/**
 * TOEFL iBT Academy — Module 3, Listening (T-M3, PROMPT 48 blueprint).
 * Chapter 3: Listening skills (unit `toefl-listening-skills`, 5 lessons).
 *
 * The five cross-task abilities the section draws on:
 *   1. Speaker intent and stance — why something is said: suggesting,
 *      conceding, objecting, hedging
 *   2. Main ideas and supporting details — the spine of a talk plus the
 *      numbers, names and examples items target
 *   3. Inference — what follows from what was said, and the boundary
 *      between implication and assumption
 *   4. Note-taking — a two-column system built for forward-only delivery
 *   5. Natural spoken English — reductions, contractions, hesitations and
 *      discourse markers at conversational speed
 *
 * Practice audio is original material in the style of the test; nothing
 * here reproduces official ETS content. Recordings across the section use
 * a range of native-speaker accents, and no accent is scored higher than
 * another — the lessons train across accents, not around them.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T3_CH3: LessonSpec[] = [
  {
    slug: "toefl-listening-intent",
    title: "Speaker intent and stance",
    description:
      "Listening for why something is said, not only what: the language cues that mark suggesting, conceding, objecting and hedging, how stance shifts across an exchange, and how to answer intent items by quoting the cue phrase that carries the move.",
    objectives: [
      "identify the intent behind an utterance — the move it performs — rather than only its literal content",
      "recognise suggesting, conceding, objecting and hedging from their characteristic cue phrases",
      "track a speaker's stance as it shifts across an exchange, including reversals and reluctant agreements",
      "answer intent items by anchoring the choice in a quoted cue phrase from the audio",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every recording in the section says things twice over: once in its words and once in its moves. 'You could always submit a draft early' is, in content, a sentence about drafts; in intent, a suggestion. 'I see your point, but…' is, in content, an acknowledgement; in intent, an objection wearing a coat of courtesy. This lesson trains your ear on the second channel — the cue phrases that mark moves, the concessions that reposition speakers, and the hedges that calibrate how strongly a claim is being offered.",
        beforeYouStart: [
          "You can follow two-voice exchanges and short talks from the earlier task lessons.",
          "You are ready to listen for function words and markers, not just information words.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — intent and stance run through all four task families"],
          ["Task & question types", "Purpose and attitude items on conversations; stance and function items on talks; the 'why did the speaker say this' family across the section"],
          ["What is assessed", "Whether you can recover the conversational move behind an utterance and the strength at which a position is held"],
          ["Why this matters", "Content-only listeners misread politeness as agreement and hedging as weakness — two errors intent items are specifically built to catch"],
        ],
      },
      { type: "heading", text: "Intent: the move beneath the message" },
      {
        type: "text",
        text: "Speakers perform moves: they suggest, concede, object, hedge, invite, warn, reassure, commit. English marks these moves with a remarkably stable set of cues — 'you could always', 'how about', 'fair enough', 'to be fair', 'I'd rather not', 'arguably', 'sort of'. Content words carry the topic; cue words carry the move. The task's intent items live entirely on the second channel, which is why a listener with a strong memory for facts can still lose them: the question is not what was said about the deadline but what the speaker was doing when she mentioned it.",
      },
      {
        type: "definition",
        term: "concession",
        partOfSpeech: "noun",
        definition: "A move in which a speaker grants a point to the other side — often flagged by 'fair enough', 'to be fair', 'granted' or 'I'll give you that' — usually immediately before objecting, so that the objection lands as balanced rather than hostile.",
        example: {
          english: "'Fair enough, the plan is cheap — but cheap won't help us if it fails in week one' grants the cost point to sharpen the reliability objection.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "Naming the move in three beats",
        intro: "A one-second routine for any utterance whose function might be tested.",
        steps: [
          {
            title: "Beat 1: Catch the cue phrase",
            text: "Move words cluster at the front and the joints of an utterance: 'how about', 'to be fair', 'I suppose', 'though', 'I mean'. Train your ear to spike on them the way it spikes on numbers — they are the intent equivalent of correction markers in conversations.",
          },
          {
            title: "Beat 2: Name the move in one word",
            text: "Suggest, concede, object, hedge, invite, warn, reassure, commit. The single word forces you off the content channel; you can hold it in working memory even when the topic details have already faded.",
          },
          {
            title: "Beat 3: Test the alternative reading",
            text: "Ask whether the utterance could plausibly perform the opposite move. 'I see your point, but…' fails the agreement test because the 'but' clause carries the weight; if no alternative survives, your label is safe to answer from.",
          },
        ],
      },
      {
        type: "usage",
        title: "Intent cues in daily speech",
        text: "The cue system this lesson teaches is ordinary spoken English, not test dialect — you hear it wherever people negotiate.",
        items: [
          { situation: "Softening a request at work", example: "I don't suppose you've got five minutes to look at this?", note: "'I don't suppose' converts a request into an enquiry; the intent is still 'please do this', and colleagues answer the intent, not the grammar." },
          { situation: "Hedging a claim in a seminar", example: "The data sort of points that way, at least for the first cohort.", note: "'Sort of' and 'at least for' shrink the claim to what the evidence carries — calibrated strength, not vagueness." },
          { situation: "Objecting without conflict", example: "That's one way to run it, but have you costed the overtime?", note: "The objection hides inside a question, so the relationship survives while the disagreement lands." },
          { situation: "Conceding after a dispute", example: "Granted, my estimate was optimistic — the delay wasn't mine alone, though.", note: "A concession followed by 'though' reopens the argument on narrower, safer ground." },
        ],
      },
      {
        type: "comparison",
        title: "Content listening against intent listening",
        columns: ["The content listener", "The intent listener"],
        rows: [
          { aspect: "Attention", left: "Spikes on facts, figures and names", right: "Spikes on cue phrases and move markers" },
          { aspect: "Hears 'I see your point, but…' as", left: "Agreement, because the first clause is positive", right: "Objection, because the 'but' clause carries the position" },
          { aspect: "Hears 'it's arguably the best design'", left: "A best-design claim, full stop", right: "An endorsement at hedged strength — arguable, not proven" },
          { aspect: "Answering stance items", left: "Reconstructs from remembered facts and gut feel", right: "Quotes the cue phrase and lets the move decide" },
        ],
        verdict: "Facts answer what items; moves answer why items — and the section asks both.",
      },
      {
        type: "dialogue",
        title: "A study group negotiating a split",
        context: "Practice material in the task's style: three students dividing a presentation, every move cued.",
        lines: [
          { speaker: "Jo", text: "I could take the methods section again, if that helps things along." },
          { speaker: "Sam", text: "To be fair, you did carry it last time — but Ravi's barely spoken yet, no offence to anyone." },
          { speaker: "Ravi", text: "I'd rather not do methods, honestly — two deadlines land that week. I can manage the introduction, I suppose." },
          { speaker: "Jo", text: "So that's Ravi on the introduction, me on methods again, and Sam takes results. Does that settle it?" },
          { speaker: "Sam", text: "Settled — though if the results section runs long, we agree to swap, right?" },
        ],
      },
      {
        type: "example",
        title: "Moves and their cues",
        items: [
          { english: "Heard: 'You could always ask the final-years — they've sat this paper twice.' Move: suggestion, cued by 'you could always'.", note: "Suggestions often arrive disguised as statements about third parties; the cue phrase, not the content, files them.", domain: "campus" },
          { english: "Heard: 'Fair point, the budget overrun was my mess — but the timeline wasn't mine alone.' Move: concession plus objection.", note: "The concessive clause buys credibility for the objection that follows; items ask for both halves of the move.", domain: "work" },
          { english: "Heard: 'I see what you're getting at, though I'm not sure the analogy holds water.' Move: polite objection, cued by 'though'.", note: "The warmer the opening, the more the 'though' clause matters — politeness is packaging, not position.", domain: "education" },
          { english: "Heard: 'It's arguably the strongest design we've tested, at least on speed.' Move: hedged endorsement with a bounded scope.", note: "Two hedges in one line: 'arguably' limits the claim's strength, 'at least on speed' limits its scope.", domain: "exam" },
          { english: "Heard: 'How about we split the reading — you take the first three chapters?' Move: suggestion with a concrete proposal attached.", note: "'How about' invites a decision, and the concrete split makes acceptance cheap — a complete negotiating move.", domain: "everyday" },
          { english: "Heard: 'I was going to say no, but actually, yes — count me in.' Move: stance reversal on reflection.", note: "Reversals are stance items in miniature: the first position is stated, then replaced, and the item keys to the second.", domain: "everyday" },
        ],
      },
      {
        type: "mistakes",
        title: "Intent errors corrected",
        items: [
          { wrong: "'I see your point, but…' means the speaker agrees with me.", right: "The clause after 'but' carries the real position — an objection delivered with courtesy.", reason: "English buries the operative position after the contrast marker; reading the warm half as the verdict is the single costliest intent error in the section." },
          { wrong: "People hedge because they don't know their subject.", right: "Hedges mark calibrated strength: a deliberate limit on how far a claim is being pushed.", reason: "Expert speakers hedge more, not less, because they know exactly where the evidence runs out — and attitude items reward hearing that precision." },
          { wrong: "A concession means the speaker has lost the argument.", right: "Concessions reposition: ceding one point cheaply strengthens the objection that follows it.", reason: "Concede-then-object is a strengthening pattern, and items that ask how the speaker responds to a challenge often key to exactly that structure." },
        ],
      },
      {
        type: "four-skills",
        title: "One negotiation, four skills",
        reading: {
          text: "Annotated exchange: 'Well, I hear you on the noise — and yes, my music was too loud last night. (concession) Still, thin walls cut both ways: your blender at seven is no whisper either. (objection) What if we agreed quiet hours from eleven to eight? (suggestion) I think you'd actually sleep better, and so would I. (hedged projection)'",
          task: "The four moves are labelled — verify each label against its cue phrase, then find the one hedge word limiting the projection.",
        },
        writing: {
          task: "Write a four-turn exchange between two flatmates about an unwashed-dishes dispute in which the first speaker concedes a point, then objects to the main complaint, using at least three cue phrases from this lesson (50–110 words).",
          guide: [
            "Turn one, the complaint — make it concrete and fair…",
            "Turn two, the concession — 'Fair enough…' before the pivot…",
            "Turn three, the objection — '…but', and the counter-evidence…",
            "Turn four, the suggestion — 'How about…' with a concrete rule…",
          ],
          model: "Aya: Look, last night's pans were mine, and fair enough, that's twice this week. Sam: Twice, and the sink's been full since Tuesday. Aya: Granted — but the drying rack has held your coffee things since Monday, so the sink isn't a one-person problem. Sam: That's… also true, I suppose. Aya: How about a same-night rule for both of us — nothing sleeps in the sink, ever? Sam: Deal. Though I'm still washing my blender at seven.",
        },
        listening: {
          script: "Supervisor: I hear your concerns about the roster, and honestly, the weekend rotation has been uneven — that's on me. That said, swapping to fixed shifts would freeze the flexibility the part-timers chose this job for. What if I cap weekends at one per person per month instead, and publish the rotation two weeks ahead?",
          task: "Name the three moves the supervisor performs, in order, and quote the cue that opens each.",
        },
        speaking: {
          task: "Deliver two moves aloud from a prompt card — one polite objection and one suggestion — then have a partner name your moves from your cue phrases alone.",
          frames: [
            "I see the case for…, but…",
            "Fair enough on…, though…",
            "How about we…",
            "It's arguably…, at least when…",
          ],
          checklist: [
            "Did my objection land after 'but' or 'though', not before?",
            "Did my suggestion carry a concrete proposal?",
            "Could a listener name both moves without seeing the card?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Move density", "The model packs a concession, an objection, a counter-concession and a suggestion into four turns, so every cue phrase taught in the lesson performs real work in context."],
          ["Cue visibility", "Each move is carried by an audible cue — 'fair enough', 'but', 'I suppose', 'how about', 'though' — making the exchange answerable as an intent item would be."],
          ["Stance arc", "The speakers start apart, converge on a rule, and keep one reservation alive at the close, mirroring how stance items ask about endings as well as openings."],
          ["Register truth", "The dispute stays warm because flatmates negotiate relationships as well as facts — the register intent items are written to test."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Prime your cue list — suggestion, concession, objection, hedge — so a spike on 'to be fair' or 'arguably' lands in a waiting category."],
          ["While the clock runs", "Label moves in the margin as they happen: one word per move, no sentences, because the audio keeps moving whether you write or not."],
          ["If you are stuck", "Reread the stem for its channel — 'why did she say this' wants the move, not the fact — and prefer the option that quotes a cue phrase you actually heard."],
          ["Final minutes", "For stance items, check reversals: the last position a speaker holds outranks every earlier one they voiced."],
        ],
      },
      {
        type: "summary",
        points: [
          "Utterances carry two channels: content words carry the topic, cue phrases carry the move — and intent items live entirely on the second channel.",
          "Core moves and their cues: suggest ('you could always', 'how about'), concede ('fair enough', 'granted'), object ('but', 'though', 'I'd rather not'), hedge ('arguably', 'sort of', 'at least').",
          "The clause after 'but' or 'though' holds the operative position; warm openings are packaging, not verdicts.",
          "Concessions strengthen the objections that follow them, and reversals replace earlier positions — stance items key to the final state.",
          "Answer intent items by quoting the cue phrase, not by reconstructing the gist from remembered facts.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from earlier lessons of this module.",
        items: [
          { question: "The talk lesson asked you to record conclusions with their hedges. An intent extension of that rule is…", options: ["Hedges calibrate how strongly a position is held, which stance items test directly", "Hedges mean the speaker is lying", "Hedges should be deleted from notes"], correctIndex: 0, explanation: "Suggestion, argument and proof are different strengths; the hedge word preserves the difference, on talks and in dialogue alike.", from: "toefl-listening-academic-talk" },
          { question: "In the conversation lesson's stance tracking, whose position went where?", options: ["Into separate speaker columns, because attitude items ask who held which view", "Into one shared summary, since positions merge", "Into the margins, since positions are rarely tested"], correctIndex: 0, explanation: "Concessions and reversals make speaker ownership decisive — merged notes cannot answer who conceded what.", from: "toefl-listening-conversation" },
          { question: "The overview lesson's prediction habit applies to intent because…", options: ["Expected moves are caught faster than surprise moves, like expected facts", "Intent cannot be predicted at all", "Prediction only works for numbers"], correctIndex: 0, explanation: "A listener primed with the cue list hears 'to be fair' as a flag the moment it starts, rather than reconstructing the move after the sentence ends.", from: "toefl-listening-overview" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the exchange with the tutor, then answer.",
        hints: ["'You could always…' opens a suggestion — what does it propose?"],
        audioText:
          "Tutor: You could always submit a draft early — I'd flag the weak sections before the deadline. Student: Would that count against me if it's rough? Tutor: Not at all; that's exactly what drafts are for.",
        question: "What does the tutor invite the student to do?",
        acceptedAnswers: ["submit a draft early", "submit a draft early — I'd flag the weak sections"],
        keywords: ["draft"],
        feedback: fb(
          "Submit a draft early",
          "The cue 'you could always' marks a suggestion, and its propositional content is the early draft — a two-channel catch in which the move and its object are both testable.",
          "Answering 'flag the weak sections' takes the tutor's follow-up offer rather than the suggestion itself, a content-right, move-wrong slip intent items punish.",
        ),
        tags: ["toefl", "listening", "intent"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "Heard: 'I'd rather not, if it's all the same to you.' What move does this perform?",
        hints: ["The grammar is conditional; the move is not."],
        options: [
          { id: "a", text: "A polite refusal" },
          { id: "b", text: "Enthusiastic agreement" },
          { id: "c", text: "A request for repetition" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A polite refusal",
          "'I'd rather not' states a preference against, softened by the conditional clause — refusal at courteous strength, which stance items expect you to register as refusal nonetheless.",
          "Reading it as agreement hears the softness and misses the position, and reading it as a repetition request confuses politeness markers with repair requests like 'sorry, come again?'",
        ),
        tags: ["toefl", "listening", "stance"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "Fair enough, the estimate was mine, but the delay wasn't.",
        acceptedAnswers: ["Fair enough, the estimate was mine, but the delay wasn't."],
        feedback: fb(
          "Fair enough, the estimate was mine, but the delay wasn't.",
          "One sentence, two moves: 'fair enough' opens a concession, and 'but' pivots to the objection — the concede-then-object pattern in its most compact form.",
          "Losing 'fair enough' deletes the concession and leaves a bare accusation; losing 'but' merges two positions into one, and both slips change the stance the sentence records.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the shift negotiation, then answer.",
        hints: [],
        audioText:
          "Sam: How about I take the morning shift and you close? Lee: Fine by me, as long as you're here by eight.",
        question: "Which shift does Sam propose to take?",
        acceptedAnswers: ["the morning shift", "the morning shift and you close"],
        keywords: ["morning"],
        feedback: fb(
          "The morning shift",
          "The suggestion cue 'how about' delivers a concrete proposal, and the conditional acceptance that follows attaches a condition — proposal and condition are separate testable layers of the same exchange.",
          "Answering 'the closing shift' swaps the owners, the classic stance-tracking error when two roles change hands in one sentence.",
        ),
        tags: ["toefl", "listening", "suggestion"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Read the exchange, then answer.",
        hints: [],
        passageTitle: "A schedule dispute",
        passage:
          "Marta: I see the appeal of the later start, honestly I do. But if we shift to ten, the lab bookings collapse for everyone who teaches after us. Nico: So you're saying the change is selfish? Marta: I'm saying it isn't free — someone pays for our extra hour in bed.",
        question: "What is Marta's position on the later start?",
        options: [
          { id: "a", text: "She concedes its appeal but objects on the cost it imposes on others" },
          { id: "b", text: "She fully supports the change once Nico explains it" },
          { id: "c", text: "She asks Nico to rebook the labs himself" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "She concedes its appeal but objects on the cost it imposes on others",
          "Marta's first clause grants the appeal ('I see the appeal, honestly I do') and her 'but' clause carries the objection about lab bookings — the concede-then-object pattern, answered by naming both halves.",
          "Option (b) ignores the pivot entirely, and option (c) converts Marta's objection into a request she never makes — both are content-adjacent but move-blind readings.",
        ),
        tags: ["toefl", "listening", "concession"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "A speaker says: 'Well, I mean, it's not exactly wrong…' What is the strongest reading of this stance?",
        hints: ["The sentence trails where the position lives."],
        options: [
          { id: "a", text: "Hedged disagreement — the speaker sees a problem but softens the blow" },
          { id: "b", text: "Wholehearted agreement expressed modestly" },
          { id: "c", text: "A request to change the subject" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Hedged disagreement — the speaker sees a problem but softens the blow",
          "'Not exactly' is understatement doing the work of 'no': the markers 'well' and 'I mean' buy thinking time while the double-negative hedge refuses endorsement — disagreement at its most English.",
          "Option (b) hears the modesty and misses the negation, and option (c) confuses discourse markers with topic management — 'well' opens a position here, it does not close one.",
        ),
        tags: ["toefl", "listening", "hedging"],
      }),
    ],
    homework: [
      "Collect five cue phrases from any English audio this week — one each for suggesting, conceding, objecting, hedging and reassuring — and write the sentence each appeared in.",
      "Write two versions of the same objection to a friend's plan: one direct, one cued with a concession; note in one sentence how the relationship reading changes.",
    ],
  },
  {
    slug: "toefl-listening-ideas-details",
    title: "Main ideas and supporting details",
    description:
      "Holding both layers of a recording at once: the spine — thesis, purpose, segment claims — and the details that hang from it, the numbers, names, dates and examples that detail items target. A split-page habit keeps each layer where its questions can find it.",
    objectives: [
      "separate a recording's spine — its thesis and segment claims — from the details that support it",
      "capture numbers, names and dates in a form detail items can be answered from",
      "attach each detail to the claim or segment it supports rather than to a flat list",
      "recognise which layer a question targets from its stem before choosing",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every recording in the section runs on two layers. The spine is the architecture: the topic, the purpose, the claims each segment exists to make. The details are the fittings: the figures, names, dates and examples bolted onto that architecture. Items query both layers, and the stems tell you which — 'What is the talk mainly about?' reads the spine, while 'According to the speaker, how many…?' reads a fitting. This lesson builds a split-page habit that keeps the two layers separate and attached, so neither kind of item ever has to be answered from the wrong shelf.",
        beforeYouStart: [
          "You can follow a three-minute talk and note its main segments.",
          "You can catch numbers and dates in fluent speech without losing the sentence around them.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — spine-and-detail items appear in every task family"],
          ["Task & question types", "Main-idea and purpose items against detail, fact and example items; stems decide which layer to read"],
          ["What is assessed", "Whether you can hold a recording's organisation and its specifics simultaneously, without letting one crowd out the other"],
          ["Why this matters", "Spine-only listeners fail detail items they heard; detail-only listeners fail main-idea items they transcribed — the split page prevents both failures"],
        ],
      },
      { type: "heading", text: "Spine and ornament" },
      {
        type: "text",
        text: "Think of a talk as a building: the spine is the load-bearing frame, the details are everything hung on it. Spine sentences are general and structural — 'the second factor is light', 'the study had two aims'. Detail sentences are specific and evidential — 'eighty participants', 'over six years', 'the 2019 recall'. The layers sound different, and trained ears hear the difference as the sentence begins: a spine sentence opens with a claim word, a detail sentence opens with a specifier. Your notes should give them different homes, because items read only one home at a time.",
      },
      {
        type: "definition",
        term: "spine",
        partOfSpeech: "noun (of a talk)",
        definition: "The load-bearing line of a recording: its framing topic, its purpose and the claim of each segment — the layer from which main-idea, purpose and organisation items are answered, and to which every detail is attached.",
        example: {
          english: "For a talk on urban gardens, 'cities are rediscovering food growing for social reasons' is spine; 'the Berlin project began with nine plots in 2011' is ornament attached to it.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "Main-idea items against detail items",
        columns: ["Main-idea and purpose items", "Detail and fact items"],
        rows: [
          { aspect: "Stem signals", left: "'Mainly about', 'primarily concerned with', 'why does the speaker'", right: "'According to the speaker', 'how many', 'which year', 'what does the example show'" },
          { aspect: "Where the answer lives", left: "In the framing and the concluding claim", right: "In the specifier clusters hung on the spine" },
          { aspect: "Note that answers it", left: "A one-line spine label written during the roadmap", right: "An abbreviation with its owner and unit attached" },
          { aspect: "Standard failure", left: "Choosing an example promoted to a claim", right: "Grabbing a number without its unit, owner or correction" },
        ],
        verdict: "Read the stem's layer before touching your notes — most wrong answers are right answers read from the wrong shelf.",
      },
      {
        type: "steps",
        title: "The split-page catch",
        intro: "One page, two zones, three rules of attachment.",
        steps: [
          {
            title: "Rule 1: Spine on the left, details on the right",
            text: "Draw the page in half before the audio starts. Left receives claims and segment labels; right receives figures, names, dates and examples. The physical split makes layer errors visible when you revise.",
          },
          {
            title: "Rule 2: Details carry owners and units",
            text: "A bare '9%' answers nothing — nine per cent of what, found by whom, changing in which direction? Write '9% ↑ yield (Perez)' and the detail item becomes a lookup instead of a memory test.",
          },
          {
            title: "Rule 3: Arrows attach detail to claim",
            text: "When a detail lands, draw a short arrow from the right-hand entry to the claim it evidences on the left. Example items ask what an example showed, and only the arrow remembers.",
          },
        ],
      },
      {
        type: "dialogue",
        title: "A tutor audits a split page",
        context: "A tutor reviews a student's notes after a practice talk on sleep research.",
        lines: [
          { speaker: "Tutor", text: "Your left column reads 'sleep debt — two studies' and then trails off — so where did the second study's figure go?" },
          { speaker: "Student", text: "Right column: '40 hrs wk, reaction ×2 slower'. Is that enough?" },
          { speaker: "Tutor", text: "Almost — attach the owner. Was the ×2 finding the second study's claim or the tutor's aside?" },
          { speaker: "Student", text: "The study's. I'll add an arrow to its spine line so the link survives the week." },
          { speaker: "Tutor", text: "Do that, and note the direction too — slower reactions are a cost, and attitude items love a cost the speaker downplays." },
        ],
      },
      {
        type: "example",
        title: "Two layers, one recording",
        items: [
          { english: "Spine: 'Enrolment pressures are reshaping how departments timetable.' Detail: 'first-year intake rose nine per cent while staffing stayed flat.'", note: "The claim is the spine; the two figures are its evidence — write them on the right with an arrow to the claim, not as a new claim.", domain: "education" },
          { english: "Spine: 'The archive's cataloguing is the bottleneck, not its collecting.' Detail: 'forty thousand photographs held, one fifth catalogued, eight thousand digitised.'", note: "Three numbers serve one claim; the unit — photographs — belongs in every entry or the detail item becomes guesswork.", domain: "work" },
          { english: "Spine: 'Noise changes animal behaviour more than light does.' Detail: 'great tit pitch shift persisting on quiet Sunday mornings.'", note: "The example exists to carry the claim; without the arrow, an example item asks what the birds proved and your notes answer nothing.", domain: "science" },
          { english: "Spine: 'The refund policy exists to protect the box office, not the buyer.' Detail: 'forty-eight-hour claim window, original card only.'", note: "Details that specify a rule's mechanics are classic detail-item fodder; the spine explains why the rule is shaped that way.", domain: "everyday" },
          { english: "Spine: 'Two founders, two philosophies.' Detail: 'the 1937 trolley and the hired models who normalised it.'", note: "A paired-spine talk doubles the risk of hanging an example under the wrong founder — the arrow discipline earns its keep here.", domain: "history" },
          { english: "Spine: 'Preparation beats talent in recall tasks.' Detail: 'spaced practice outperforming cramming by roughly a third in the cited trials.'", note: "The hedge 'roughly' travels with the figure; a detail item asking how large the gap was keys to the hedged size, not a rounded-up one.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Layer errors corrected",
        items: [
          { wrong: "I filled two pages with figures, so the main-idea item was easy.", right: "Write the spine first — one line per segment claim — and let details accumulate on the right with arrows.", reason: "Volume of detail is not evidence of understanding; main-idea items are answered from the frame, and a page of unattached numbers hides the frame it should be supporting." },
          { wrong: "A striking example is obviously what the talk was about.", right: "Test the striking example against the framing sentence: if the roadmap names three factors, the example illustrates one of them, not all.", reason: "Examples are memorable by design — that is their job — which is exactly why promoting one to the main idea is the most common wrong answer on main-idea items." },
          { wrong: "I caught the number, so I caught the detail.", right: "Capture numbers with owner, unit and direction; a value without its frame answers nothing.", reason: "Detail items rarely ask the bare value — they ask the value under its correct description, and 'nine per cent of what' is where unanchored numbers fall apart." },
        ],
      },
      {
        type: "four-skills",
        title: "One market report, four skills",
        reading: {
          text: "Mini-talk in the task's style: 'Let's look at why the farmers' market doubled its stall count this season. First, the city's pedestrian scheme made the square reachable again — footfall on Saturdays is up by a quarter. Second, the waiting list itself did marketing: people heard the market was hard to get into, and hard-to-get-into reads as good. The lesson, I'd argue, is that access and reputation feed each other.'",
          task: "Mark the spine sentence, the two supporting claims, and the two details — then find the hedge in the concluding claim.",
        },
        writing: {
          task: "From the mini-talk above, write a split-page summary in 50–110 words: the spine on the left (framing plus the concluding claim with its hedge), and the details on the right with owners, units and arrows named.",
          guide: [
            "Spine line: the question the talk sets out to answer…",
            "Claim one plus its detail: pedestrian scheme, footfall figure…",
            "Claim two plus its detail: the waiting list, what it signalled…",
            "Boxed conclusion with hedge: access and reputation…",
          ],
          model: "Spine: why the market doubled its stalls this season. Claim one, access: the pedestrian scheme reopened the square, with Saturday footfall up by a quarter (detail → claim one). Claim two, reputation: the waiting list advertised scarcity, and scarcity read as quality (detail → claim two). Boxed conclusion, hedged: access and reputation feed each other — 'I'd argue' marks the claim as the speaker's position rather than a measured finding, so the summary keeps the hedge rather than rounding it up.",
        },
        listening: {
          script: "Trainer: Two numbers tell this quarter's story. Returns fell to four per cent — that's the policy fix working. But average handling time rose to eleven minutes, and that's the fix's cost: staff now explain the policy instead of just applying it. So the policy worked, but we paid for it in time.",
          task: "Which figure is the win, which is the cost, and what links them according to the trainer?",
        },
        speaking: {
          task: "Summarise any talk you heard this week — lecture, podcast, meeting — in three sentences: spine, one detail with its owner, spine again for the close.",
          frames: [
            "The talk's frame was…",
            "One detail that carried it: [figure] with its owner…",
            "The speaker's closing claim was…",
          ],
          checklist: [
            "Did my summary name the spine before any detail?",
            "Did the detail keep its owner and unit?",
            "Did the close return to the spine rather than a detail?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Layer separation", "The model is written as the split page itself — spine lines and detail lines with explicit arrows — so the summary demonstrates the habit rather than describing it."],
          ["Anchor discipline", "Each detail carries owner, unit and direction — 'up by a quarter', 'four per cent, the policy fix' — which is the anchoring detail items demand."],
          ["Hedge preservation", "The boxed conclusion keeps 'I'd argue' visible, treating stance as part of the spine rather than decoration around it."],
          ["Compactness", "A hundred-odd words hold the whole talk because attachment, not transcription, is what makes notes answerable."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rule the page in half and label the zones — spine left, details right — so the recording pours into a ready structure."],
          ["While the clock runs", "Write claims as one-line labels, details as anchored abbreviations, and arrow every detail to its claim the moment it lands."],
          ["If you are stuck", "Read the stem's layer first: 'mainly about' reads the left zone, 'according to the speaker' reads the right — never answer one layer from the other shelf."],
          ["Final minutes", "Before confirming a main-idea answer, check it against the framing sentence, not the most memorable example you noted."],
        ],
      },
      {
        type: "summary",
        points: [
          "Recordings run on two layers — the spine of claims and the details of evidence — and item stems announce which layer they read.",
          "The split page keeps layers separate: claims and segment labels left, anchored details right, arrows between.",
          "Details are captured with owner, unit and direction; bare numbers answer nothing.",
          "Examples are evidence, not main ideas — the most memorable example is the most dangerous wrong answer on main-idea items.",
          "Hedges belong to the spine: a concluding claim's strength is part of what items test.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier lessons of this module.",
        items: [
          { question: "The talk lesson's bracket system and this lesson's split page share which principle?", options: ["Structure is drawn first and content pours into it", "Notes should mirror the speaker's exact words", "Details outrank claims"], correctIndex: 0, explanation: "Whether brackets on a spine or a page ruled in half, the prepared shape is what turns one play into an answerable record.", from: "toefl-listening-academic-talk" },
          { question: "How did the intent lesson tell you to treat 'arguably' in a concluding claim?", options: ["As a hedge that calibrates the claim's strength", "As a filler to ignore", "As a signal the talk is ending"], correctIndex: 0, explanation: "'Arguably' limits how far the speaker pushes the claim, and both talk items and summary writing must carry that limit.", from: "toefl-listening-intent" },
          { question: "Which single play rule makes the split page worth drawing before the audio starts?", options: ["Each recording plays once and items never reopen, so notes must be answerable on first writing", "Notes are collected by the invigilator", "The section clock pauses for note-taking"], correctIndex: 0, explanation: "One play with no return means there is no second pass to reorganise — the page must be right the first time.", from: "toefl-listening-overview" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the archive report, then answer.",
        hints: ["The large number is the collection; listen for the catalogued portion."],
        audioText:
          "Guide: The archive holds some forty thousand photographs, though only a fifth are catalogued — about eight thousand, digitised over the last three years.",
        question: "How many of the photographs are digitised?",
        acceptedAnswers: ["about eight thousand", "eight thousand"],
        keywords: ["eight thousand"],
        feedback: fb(
          "About eight thousand",
          "The talk's numbers stack — total held, share catalogued, count digitised — and the question targets the bottom of the stack, where the qualifier 'about' belongs to the answer.",
          "Answering 'forty thousand' takes the collection size, and 'a fifth' takes the proportion — both are true numbers serving the wrong slot, which is what detail items are built to catch.",
        ),
        tags: ["toefl", "listening", "details"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "A talk on urban gardens contains the sentence: 'The Berlin project began with nine plots in 2011, and now runs two hundred.' For a main-idea item, this sentence should be treated as…",
        hints: ["Ask what layer the sentence serves."],
        options: [
          { id: "a", text: "A supporting detail attached to whatever claim it evidences" },
          { id: "b", text: "The talk's main idea, because it carries the topic words" },
          { id: "c", text: "A digression to be marked with a 'D'" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A supporting detail attached to whatever claim it evidences",
          "Specific figures with dates are evidence by shape — they hang on a claim about growth or spread, and main-idea items are answered from that claim, not from the numbers illustrating it.",
          "Option (b) promotes ornament to spine, the costliest main-idea error, and option (c) misfiles evidence as digression, which would delete it from the answering record entirely.",
        ),
        tags: ["toefl", "listening", "layers"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "Enrolment rose by nine per cent, but staffing stayed flat.",
        acceptedAnswers: ["Enrolment rose by nine per cent, but staffing stayed flat."],
        feedback: fb(
          "Enrolment rose by nine per cent, but staffing stayed flat.",
          "A textbook anchored detail: value, direction and owner in the first clause, and the contrast clause that gives the figure its meaning — pressure — in the second.",
          "Swapping 'rose' for 'fell' reverses the pressure, and dropping 'flat' removes the tension the spine sentence elsewhere in that talk would be claiming.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the tutor's comment, then answer.",
        hints: [],
        audioText:
          "Tutor: Your strongest evidence is the Perez study — two hundred participants over six years, which is rare in this field.",
        question: "How long did the Perez study run?",
        acceptedAnswers: ["over six years", "six years"],
        keywords: ["six years"],
        feedback: fb(
          "Over six years",
          "The detail arrives in a cluster — author, sample size, duration, rarity — and the question pulls the duration, with its preposition 'over' doing real work in the answer's shape.",
          "Answering 'two hundred' grabs the sample size, the neighbouring number placed first precisely to catch listeners who anchor on whatever lands earliest.",
        ),
        tags: ["toefl", "listening", "clusters"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Read the mini-talk opening, then answer.",
        hints: [],
        passageTitle: "A talk opening",
        passage:
          "Today I want to make a case that will annoy the equipment enthusiasts among you: in language learning, consistency beats intensity. Ten minutes daily outperforms a two-hour weekend binge — and I'll show you three studies that found exactly that gap, plus what they miss.",
        question: "Which sentence carries the talk's spine?",
        options: [
          { id: "a", text: "In language learning, consistency beats intensity" },
          { id: "b", text: "Ten minutes daily outperforms a two-hour weekend binge" },
          { id: "c", text: "I'll show you three studies" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "In language learning, consistency beats intensity",
          "The spine is the general claim the talk exists to defend, announced in the framing; the ten-minute figure is its evidence and the study count is its roadmap.",
          "Option (b) is a detail doing spine work only if you mistake specificity for importance, and option (c) is the roadmap — structure, not claim.",
        ),
        tags: ["toefl", "listening", "main-idea"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "Why do detail items disproportionately target numbers, names and dates?",
        hints: ["Think about how these details differ from opinions."],
        options: [
          { id: "a", text: "They are objectively checkable and cannot be reconstructed from gist" },
          { id: "b", text: "They occur rarely, so they are precious" },
          { id: "c", text: "They test handwriting speed on paper tests" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "They are objectively checkable and cannot be reconstructed from gist",
          "A gist listener can reconstruct a speaker's attitude from fragments, but no amount of general understanding recovers 'eight thousand' — checkable specifics make fair, hard items that reward anchored capture.",
          "Option (b) has it backwards — such details are dense in academic speech — and option (c) describes an era and a medium the current test does not use.",
        ),
        tags: ["toefl", "listening", "design"],
      }),
    ],
    assignment: {
      title: "The spine-and-detail audit",
      instructions:
        "Choose a three-minute talk, lecture or podcast segment and listen once only. In 50–120 words, write your split page as prose: the spine first (framing question and the concluding claim with any hedge), then three details, each with its owner, unit or date, and a note of which claim it evidences. Mark which of your three details a detail item would most likely target, and why.",
      minWords: 50,
      maxWords: 120,
    },
    homework: [
      "Take last week's notes from any class or meeting and re-draw them as a split page: claims left, anchored details right, arrows between — then note what the redraw surfaced.",
      "Listen once to a news bulletin and capture every number with its owner and unit; score yourself on how many were answerable the next morning.",
    ],
  },
  {
    slug: "toefl-listening-inference",
    title: "Inference",
    description:
      "Answering from what follows rather than what is stated: the discipline of supported inference, the boundary between implication and assumption, and the three-beat evidence routine — quote, paraphrase, check — that keeps world knowledge out of answers the audio never earned.",
    objectives: [
      "distinguish what a recording states from what it implies",
      "draw inferences that the spoken evidence supports, at the strength it supports them",
      "reject options that are true in the world but absent from the audio",
      "answer inference items with the three-beat routine: quote the evidence, paraphrase it, check the option",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Some of the section's questions are answered by sentences the recording never says. A landlord mentions the smoke alarm 'passed its check in March'; the item asks whether the alarm is currently working, and the answer is yes — not because anyone said so, but because it follows. This lesson is about that 'follows': what the evidence of an exchange supports, what it merely permits, and what it forbids. The boundary is the skill, because inference items are designed around options that feel true in the world yet were never earned by the audio.",
        beforeYouStart: [
          "You can summarise what was said before deciding what it meant.",
          "You have completed the intent lesson and can hear stance and hedging.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — inference items appear in every task family, most densely on conversations and talks"],
          ["Task & question types", "'What can be inferred', 'What does the speaker imply', 'What will the speaker probably do' — the family that reads between lines"],
          ["What is assessed", "Whether you can derive unstated conclusions from spoken evidence alone, at the strength the evidence carries"],
          ["Why this matters", "Inference distractors are built from world knowledge — the most tempting wrong answers in the section are simply facts the audio never mentioned"],
        ],
      },
      { type: "heading", text: "Reading the second line" },
      {
        type: "text",
        text: "Spoken English runs on implication because speakers assume more than they state: a host who says 'we're out of the good coffee' is offering information, an apology and an alternative all at once. Inference items ask you to operate the same machinery the speakers do. The discipline is evidential: an inference is supported when the audio's content, taken as true, makes it unreasonable to doubt — and it is an assumption the moment it needs help from your world knowledge, your hopes or your stereotypes to survive.",
      },
      {
        type: "definition",
        term: "supported inference",
        partOfSpeech: "noun phrase",
        definition: "A conclusion that the stated content of a recording makes necessary or highly probable, without addition from outside knowledge — the only kind of conclusion inference items credit.",
        example: {
          english: "If the clerk says the returns hatch stays open until eight and the borrower says 'I can drop them after my shift after all', the borrower's shift ends before eight — stated by neither, supported by both.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "Implication against assumption",
        columns: ["Implication (supported)", "Assumption (invented)"],
        rows: [
          { aspect: "Source", left: "The audio's own content, taken as true", right: "World knowledge, expectation or wish" },
          { aspect: "Test", left: "Deny it and the audio becomes incoherent or contradictory", right: "Deny it and the audio remains perfectly consistent" },
          { aspect: "Strength", left: "Carried at the evidence's strength — probable, not certain, where the audio is tentative", right: "Inflated to certainty by the listener's confidence" },
          { aspect: "On an item", left: "The keyed option, usually modest in wording", right: "The tempting option, usually vivid, absolute or story-shaped" },
        ],
        verdict: "Before confirming an inference answer, try denying it: a supported inference drags the audio into contradiction; an assumption shrugs.",
      },
      {
        type: "steps",
        title: "The three-beat evidence routine",
        intro: "Run it on every inference item, every time.",
        steps: [
          {
            title: "Beat 1: Quote the evidence",
            text: "From memory or notes, put your finger on the exact words that will carry the inference — a condition, a contrast, an action announced. No quote, no answer: an inference without a home sentence is a guess in better clothes.",
          },
          {
            title: "Beat 2: Paraphrase the evidence neutrally",
            text: "Restate the quote in plain words without adding anything. 'The hatch is open until eight' becomes 'evening returns are possible' — nothing about the borrower's plans yet, just the fact's plain meaning.",
          },
          {
            title: "Beat 3: Check each option against the evidence",
            text: "Read options as conclusions from your paraphrase: supported ones follow, weak ones merely fit the topic, and world-true ones import facts the audio never supplied. Choose the conclusion the evidence earns, at the strength it earns it.",
          },
        ],
      },
      {
        type: "dialogue",
        title: "An exchange with a second line",
        context: "Practice material in the task's style: nothing is stated, everything follows.",
        lines: [
          { speaker: "Receptionist", text: "The projector in room four has been repaired twice this term." },
          { speaker: "Presenter", text: "Then I'll bring my own slides on a memory stick — and my own laptop, actually." },
          { speaker: "Receptionist", text: "Smart. Room four's HDMI port has opinions, too." },
          { speaker: "Presenter", text: "Noted. I'll test everything during the break before mine." },
        ],
      },
      {
        type: "example",
        title: "Inferences earned and inferences imagined",
        items: [
          { english: "Heard: 'The returns hatch stays open until eight.' Speaker then: 'I can drop them after my shift after all.' Supported: the shift ends before eight.", note: "The denial test seals it — if the shift ended after eight, the speaker's plan would make no sense.", domain: "everyday" },
          { english: "Heard: 'I'd offer you the afternoon slot, but the assessor only flies out Thursday morning.' Supported: no afternoon assessment exists this cycle.", note: "The constraint, not the speaker's goodwill, blocks the request — an inference about scheduling, not about feelings.", domain: "exam" },
          { english: "Heard: 'My co-author handled the statistics, which is why the tables finally make sense.' Supported: the speaker did not produce the tables themselves.", note: "Praise carries attribution; the implication is about authorship, and it survives however warm the compliment sounds.", domain: "work" },
          { english: "Heard: 'The deadline's Friday, though extensions are granted for documented illness.' World-tempting but unsupported: the speaker thinks illness excuses are overused.", note: "The second clause states policy availability; attitude toward its use is imported by the listener, not the audio.", domain: "campus" },
          { english: "Heard: 'We've stopped serving the morning pastries — the bakery closed and nobody's replaced them.' Supported: pastries cannot currently be bought there.", note: "An inference about supply, at the evidence's strength — nothing follows about why no replacement was found.", domain: "everyday" },
          { english: "Heard: 'Half the committee has already emailed support.' Supported: the proposal is likely to pass, stated by no one.", note: "Probability, not certainty — the strength word 'likely' matches the arithmetic of the evidence, and items test that calibration.", domain: "work" },
        ],
      },
      {
        type: "mistakes",
        title: "Inference errors corrected",
        items: [
          { wrong: "If an option is factually true in real life, it's the right inference.", right: "Choose the conclusion the audio earns; a true fact the recording never touches is a distractor, not an answer.", reason: "Item writers source distractors from plausible world knowledge precisely because familiarity feels like evidence — only the audio is evidence on inference items." },
          { wrong: "Inference items are harder than detail items, so I look for the strangest option.", right: "Keyed inferences are usually modest — 'probably', 'likely', 'can' — because evidence supports degrees, not dramas.", reason: "The strangest option is almost always the assumption: vivid, absolute and unanchored to any home sentence in the audio." },
          { wrong: "A restatement of what was said counts as an inference.", right: "A paraphrase of stated content answers detail items; an inference adds a conclusion the speaker never voiced.", reason: "Confusing restatement with inference sends candidates hunting new content when the item wanted a derived one — both errors read the same wrong shelf." },
        ],
      },
      {
        type: "four-skills",
        title: "The evidence ledger, four ways",
        reading: {
          text: "Exchange, transcribed: 'Librarian: The reading room is open to everyone during the day, but the glass carrels behind the partition are graduate-only until four. Undergraduate: Good — I'll draft in the reading room and move my things before the tour group arrives at three.'",
          task: "List one supported inference, one mere restatement, and one tempting assumption a listener might import — each in a single sentence.",
        },
        writing: {
          task: "From the exchange above, write an evidence ledger in 40–120 words: one supported inference with its quoted evidence, one inference you reject with the reason (world knowledge, not audio), and one strength word that calibrates your supported claim.",
          guide: [
            "Supported: what does the student's plan imply about their status or timing? Quote the words…",
            "Rejected: what might a listener assume about graduate-only rules or tour groups that the audio never says?…",
            "Calibration: does 'will' overstate what the evidence carries? Would 'probably' fit better?…",
          ],
          model: "Supported inference: the student is an undergraduate — they plan to 'draft in the reading room' and to be gone 'before the tour group arrives at three', which only matters to someone excluded from the graduate carrels. Evidence quoted: 'glass carrels… are graduate-only'. Rejected inference: that the tour group will be noisy or disruptive — the audio states arrival time only; any claim about behaviour is imported world knowledge about tours. Calibration: 'probably an undergraduate' is the defensible strength, since a graduate student could have other reasons to avoid carrels — the evidence makes the conclusion likely, not certain.",
        },
        listening: {
          script: "Coach: The pitch is booked for Tuesday, but the ground staff have it for repairs, so Tuesday's off. We'll train Thursday instead, same time, seven sharp. Player: So I can keep the Tuesday evening slot at the clinic after all. Coach: Lucky you — bring the paperwork Thursday, the club needs it for insurance.",
          task: "What follows about the clinic appointment, and what follows about what the player must bring — quote the words that support each.",
        },
        speaking: {
          task: "State one supported inference aloud from any recording you heard this week, then defend it with the two-beat test: quote the evidence, then deny the inference and show the audio breaking.",
          frames: [
            "The speaker never says it, but…",
            "The evidence is the line where they say…",
            "If I deny my inference, the audio would have to…",
            "So the defensible strength is 'probably', because…",
          ],
          checklist: [
            "Did my inference have a quoted home sentence?",
            "Did I survive the denial test?",
            "Did my strength word match the evidence, not my confidence?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Evidence anchoring", "Every claim in the ledger is pinned to quoted words from the exchange, modelling the first beat of the routine — quote before conclude."],
          ["Rejection practice", "The model rejects a tempting inference and names its source as world knowledge, the exact move that defeats the section's most attractive distractors."],
          ["Calibrated strength", "The closing sentence argues for 'probably' over certainty, showing that strength words are part of the answer, not hedging the answer."],
          ["Compact form", "Forty to a hundred and twenty words, the ledger is the size of a margin note — evidence that rigorous and brief are the same skill here."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Treat every stem containing 'infer', 'imply' or 'probably' as a separate category — its answers are derived, not located."],
          ["While the clock runs", "Mark candidate evidence lines in your notes with a star: conditions, contrasts and announced plans are where inferences are born."],
          ["If you are stuck", "Run the denial test on each remaining option: the one whose denial contradicts the audio is the inference the audio supports."],
          ["Final minutes", "Prefer modest wording over vivid wording on inference items — evidence supports degrees, and keyed options are calibrated to it."],
        ],
      },
      {
        type: "summary",
        points: [
          "Inference items are answered from the audio's own content: a supported inference is one whose denial makes the recording incoherent.",
          "Assumptions are conclusions that need world knowledge to survive — the source of the section's most tempting wrong options.",
          "The three-beat routine — quote, paraphrase, check — converts inference from intuition into procedure.",
          "Strength travels from evidence to answer: probable stays probable, and absolute options overstate what one exchange can carry.",
          "Restatements answer detail items, not inference items — derived content, not repeated content, is what the stem is asking for.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier lessons of this module.",
        items: [
          { question: "Which intent cue most often signals that an inference is coming?", options: ["Contrast markers like 'but' and 'though', which set up unstated positions", "Polite greetings", "Numbers and dates"], correctIndex: 0, explanation: "Contrast markers open the gap between what is said and what is meant — the natural habitat of implication.", from: "toefl-listening-intent" },
          { question: "The split-page lesson's arrows exist so that…", options: ["Evidence stays attached to the claim it supports, ready for inference items", "Notes look organised for the invigilator", "Details can be promoted to main ideas"], correctIndex: 0, explanation: "An inference item about what an example showed is answered by the attachment, which is why the arrow outranks the detail itself.", from: "toefl-listening-ideas-details" },
          { question: "In the registrar dialogue's arc, which zone carries the material inference items use?", options: ["The negotiated middle and the closing commitments, where positions and conditions meet", "The greeting only", "The topic label"], correctIndex: 0, explanation: "Purpose items read the opening, but implication grows where offers meet constraints — the middle — and where commitments land, the close.", from: "toefl-listening-conversation" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the office exchange, then answer.",
        hints: ["What does the intern infer needs doing, in the intern's own words?"],
        audioText:
          "Manager: The printer's fine for drafts, and it's a shame about the colour cartridge. Intern: I'll pick one up on my lunch break, then.",
        question: "What does the intern decide to do?",
        acceptedAnswers: ["pick one up", "pick one up on my lunch break", "pick one up on my lunch break, then"],
        keywords: ["pick", "lunch"],
        feedback: fb(
          "Pick one up (a colour cartridge) on the lunch break",
          "The intern's offer is a pure inference made audible: the manager never requests anything, and the conclusion — a cartridge is needed and will be bought — follows from the apology framed around it.",
          "Answering 'fix the printer' misses the inference entirely; the manager states the printer is fine, and only the cartridge is in play.",
        ),
        tags: ["toefl", "listening", "inference"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "Heard: 'The library's quiet floor is open to all, though the carrels behind the glass are graduate-only.' What can be inferred?",
        hints: ["Apply the denial test to each option."],
        options: [
          { id: "a", text: "Undergraduates may use the quiet floor but not the glass carrels" },
          { id: "b", text: "Graduates prefer the quiet floor" },
          { id: "c", text: "The library is planning to change its policy" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Undergraduates may use the quiet floor but not the glass carrels",
          "Deny it and the audio breaks: 'open to all' plus 'graduate-only carrels' leaves undergraduates exactly that combination of access and exclusion — a supported inference at exact strength.",
          "Option (b) imports a preference the audio never touches, and option (c) invents a plan — both are world-shaped assumptions wearing the topic's clothes.",
        ),
        tags: ["toefl", "listening", "denial-test"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "So the meeting's off, then, since neither of them can make Wednesday.",
        acceptedAnswers: ["So the meeting's off, then, since neither of them can make Wednesday."],
        feedback: fb(
          "So the meeting's off, then, since neither of them can make Wednesday.",
          "The sentence performs an inference out loud: 'so' announces a conclusion, and 'since' hands over the evidence — the two markers your notes should star on any recording.",
          "Losing 'so' turns a conclusion into a bare statement, and losing 'neither' destroys the evidence the conclusion rests on — the two halves of an inference item in one breath.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the library exchange, then answer.",
        hints: [],
        audioText:
          "Clerk: We close at six on weekdays, but the returns hatch stays open until eight, so evening returns are still same-day. Borrower: Good — I can drop them after my shift after all.",
        question: "What can the borrower do after work, in their own words?",
        acceptedAnswers: ["drop them", "drop them after my shift", "drop them after my shift after all"],
        keywords: ["drop", "shift"],
        feedback: fb(
          "Drop the books off after the shift",
          "The borrower's plan is the inference made audible: 'after all' signals a revised conclusion drawn from the hatch hours — a shift-time problem solved by a service detail.",
          "Answering 'close at six' returns the stated fact, not the derived plan, which is the difference between a detail item and an inference item in miniature.",
        ),
        tags: ["toefl", "listening", "implication"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Read the exchange, then answer.",
        hints: [],
        passageTitle: "The shared kitchen",
        passage:
          "Kim: I wiped the counters before I left, so whatever happened next happened after me. Dev: I got in at eleven and the bin was already overflowing — I changed the bag, no big deal. Kim: Well, someone was here between us, because I emptied it at nine.",
        question: "What can be inferred from the exchange?",
        options: [
          { id: "a", text: "A third person used the kitchen between nine and eleven" },
          { id: "b", text: "Dev caused the overflow and is covering it up" },
          { id: "c", text: "Kim never actually cleaned the counters" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A third person used the kitchen between nine and eleven",
          "Kim emptied the bin at nine; Dev found it overflowing at eleven — the denial test makes the third visitor necessary, since the two named speakers cannot account for the state of the bin between those times.",
          "Option (b) invents a cover-up the dialogue never supports, and option (c) contradicts rather than follows — accusation is assumption, not inference.",
        ),
        tags: ["toefl", "listening", "reasoning"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "What separates an assumption from an implication in this lesson's terms?",
        hints: ["Ask what each one needs in order to survive."],
        options: [
          { id: "a", text: "An assumption needs outside knowledge to survive; an implication follows from the audio alone" },
          { id: "b", text: "An assumption is always negative; an implication is always positive" },
          { id: "c", text: "An assumption is stated; an implication is denied" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "An assumption needs outside knowledge to survive; an implication follows from the audio alone",
          "The dependency test is the boundary: strip away world knowledge and an assumption collapses, while an implication stands on the recording's own content — which is why only the latter earns credit.",
          "Options (b) and (c) describe moods and speech acts, not evidential standing — the difference that inference items are engineered to measure.",
        ),
        tags: ["toefl", "listening", "boundary"],
      }),
    ],
    assignment: {
      title: "The evidence ledger",
      instructions:
        "Choose any short exchange from a podcast, series or a dialogue you write with a classmate. In 40–120 words, produce your ledger: one supported inference with the quoted words that carry it, one tempting inference you reject as world knowledge rather than audio, and the strength word ('probably', 'likely', 'can') that calibrates your supported claim. Apply the denial test explicitly in your final sentence.",
      minWords: 40,
      maxWords: 120,
    },
    homework: [
      "Collect three real implications from conversations around you this week — sentences where nobody said the thing everyone understood — and write the evidence line under each.",
      "Take one news headline, list two things it implies and two things it merely permits, and mark which is which with the denial test.",
    ],
  },
  {
    slug: "toefl-listening-note-taking",
    title: "Note-taking",
    description:
      "A note system built for forward-only delivery: two columns, an abbreviation kit that earns its space, and the discipline of answering notes — lines shaped like the questions rather than like the audio. Notes are the only replay the format allows, so they are engineered, not transcribed.",
    objectives: [
      "set up a two-column page that separates structure from values before the audio starts",
      "abbreviate at a rate that keeps pace with live speech without losing answerable detail",
      "write answering notes — owner, value, action — rather than transcript fragments",
      "recover gracefully when notes fall behind a fast recording",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Because the section plays each recording once and never reopens an item, your notes are the only replay you will ever have — a private second hearing you manufacture in real time. That is why note-taking here is engineering rather than transcription: a page designed before the audio, filled in abbreviations, and shaped around the questions the task actually asks. This lesson builds the two-column system piece by piece, then stress-tests it against the moment every note-taker fears, the moment the audio pulls ahead of the pen.",
        beforeYouStart: [
          "You have completed the task lessons and know the shape of each family's questions.",
          "You can write quickly by hand or type without watching the keys.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — notes serve all four task families and every item type"],
          ["Task & question types", "Notes are not scored, but every scored item is answered against them once the audio is gone"],
          ["What is assessed", "Nothing directly; indirectly, whether your one play of each recording was converted into an answerable record"],
          ["Why this matters", "Forward-only delivery means an unrecorded fact is an unanswerable fact — notes are where single-play listening stores its evidence"],
        ],
      },
      { type: "heading", text: "Notes as an answering machine" },
      {
        type: "text",
        text: "A transcript records what was said; an answering note records what will be asked. The difference is shape: transcripts follow the audio's order and grammar, while answering notes follow the task's questions — who wanted what, which values changed, what must happen by when. Every habit in this lesson serves that inversion. Two columns separate structure from values; abbreviations buy back the seconds that full sentences spend; and the review beat between items spends three seconds checking that your lines could answer an owner, a value and an action question, the three shapes most items take.",
      },
      {
        type: "definition",
        term: "answering note",
        partOfSpeech: "noun phrase",
        definition: "A note line written in the shape of the questions a task asks — owner, value, action, with corrections struck and newest values kept — rather than in the shape of the audio's own sentences.",
        example: {
          english: "'st → fine $32 → bar-code err → off, hold ~1hr' answers four items a transcript of the same exchange would only hint at.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The two-column method",
        intro: "Setup, fill and review — the full cycle for any recording in this section.",
        steps: [
          {
            title: "Setup: rule the page before the audio",
            text: "A vertical line down the page. Left column, narrower, receives structure — purpose labels, segment names, speaker initials. Right column receives values — numbers, dates, names, conditions, actions. The ruling takes five seconds and pays for itself by the second exchange.",
          },
          {
            title: "Fill: left for who and why, right for what and when",
            text: "As the audio runs, structure goes left and values go right, joined by arrows when a value serves a claim or an owner. Corrections are struck through, never erased: the strike preserves the correction pattern that items love to test.",
          },
          {
            title: "Review: the three-second audit between items",
            text: "Before confirming an item, glance at your lines: could they answer who, what and by-when for this recording? A line that cannot is flagged mentally, so you answer from the best fragment rather than from an untested memory.",
          },
        ],
      },
      {
        type: "table",
        title: "An abbreviation kit that earns its space",
        headers: ["Shorthand", "Stands for", "Example line"],
        rows: [
          ["→", "leads to, results in, then", "rain → cancel'd"],
          ["↑ / ↓", "increase / decrease", "footfall ↑ 25%"],
          ["b/c", "because", "moved b/c repairs"],
          ["w/", "with", "2 desks w/ lamps"],
          ["~", "approximately, roughly", "hold ~1hr"],
          ["×2", "doubled", "fee ×2 since March"],
          ["st / sf", "student / staff", "st disputes, sf checks"],
          ["!", "speaker emphasis or surprise", "no late fee !"],
        ],
        caption: "Adopt the kit whole at first, then personalise — an abbreviation you invent yourself is the one you will not forget.",
      },
      {
        type: "comparison",
        title: "Transcript notes against two-column notes",
        columns: ["The transcriber", "The two-column note-taker"],
        rows: [
          { aspect: "Goal", left: "Record what was said", right: "Record what will be asked" },
          { aspect: "Speed", left: "Loses the audio by the second exchange", right: "Keeps pace because structure is cheap and values are short" },
          { aspect: "Corrections", left: "Erase or overwrite, losing the change", right: "Strike and keep, preserving the correction pattern" },
          { aspect: "After the audio", left: "Rereads prose hunting for answers", right: "Looks up owners, values and actions in labelled zones" },
        ],
        verdict: "The section does not mark your prose; it marks your answers — write the page the items will read.",
      },
      {
        type: "dialogue",
        title: "A tutor trims a candidate's page",
        context: "After a practice conversation task, a tutor reviews what the candidate wrote.",
        lines: [
          { speaker: "Tutor", text: "You wrote 'the man said he wanted to change his booking' — that's seven words for a label the left column holds in two: 'bk chg'." },
          { speaker: "Candidate", text: "And the fee change went where? I lost it in the sentence." },
          { speaker: "Tutor", text: "Right column, next to his initial: 'fee $15 → $9 b/c online'. The because-clause is a free inference item waiting to be written." },
          { speaker: "Candidate", text: "So full sentences are costing me the values." },
          { speaker: "Tutor", text: "Exactly — the audio forgives slow labels, never slow values. And strike, don't erase: the fifteen dollars is the trap half the items are set on." },
        ],
      },
      {
        type: "example",
        title: "Answering notes across the families",
        items: [
          { english: "Response task: 'req: slides? → yes, tonite' — one line catches the function, the object and the commitment.", note: "Even the shortest recordings deserve a line; two-word items are answered from two-word notes.", domain: "exam" },
          { english: "Conversation: 'st: hold $32 · sf: barcode err · off now · retry after lunch' — the registrar exchange reduced to four answering units.", note: "Owner, error, outcome and next step: the four shapes conversation items are written from.", domain: "campus" },
          { english: "Announcement: 'west entr CLOSED Mon 12 · all → north · wknd too · ~3 wks' — the whole notice in one grid line.", note: "The strike on CLOSED's opposite would sit beside it: the change is old→new, and both halves matter.", domain: "everyday" },
          { english: "Talk: 'road noise → birdsong pitch ↑ · persists quiet mornings !' — claim left, finding right, surprise flagged.", note: "The exclamation mark is a stance marker: persistence is the finding that overturned the classical account.", domain: "science" },
          { english: "Fast service call: 'router ↓ 2x this wk · eng Thurs AM · keep ticket # open' — three values and an action in under a dozen marks.", note: "When speech runs fast, values outrank sentences; the ticket number is testable, the pleasantries are not.", domain: "work" },
          { english: "Numbers drill: '9% ↑ enrol · staff flat' — value, direction and owner in five marks.", note: "Anchoring in the abbreviation itself: the direction arrow is what makes the figure answerable days later.", domain: "education" },
        ],
      },
      {
        type: "mistakes",
        title: "Note-taking errors corrected",
        items: [
          { wrong: "I write everything so nothing is lost.", right: "Write what will be asked — owners, values, actions — and let the rest of the audio pass.", reason: "Total capture loses more than it keeps: while the pen transcribes one sentence, the next two values arrive and die unrecorded, and the page ends up rich in topic and poor in answers." },
          { wrong: "Notes should be proper sentences so I can reread them.", right: "Abbreviate in the kit's shorthand; readability is for after the section, pace is for during it.", reason: "Full sentences cost three to five times the marks they preserve, and the section gives no time to spend on grammar nobody scores." },
          { wrong: "I fell behind, so I stopped taking notes for the rest of the recording.", right: "Drop to spine-only — owners and outcomes — and resume values when the pen catches up.", reason: "Abandoning the page converts a local failure into a total one; the spine alone still answers purpose, stance and outcome items, which are most of the set." },
        ],
      },
      {
        type: "four-skills",
        title: "The page, four ways",
        reading: {
          text: "A candidate's page after a two-minute service conversation, transcribed: LEFT: 'plan chg · fee · deadline'. RIGHT: 'monthly → weekly · $30 → $18 b/c autopay · pay by Fri 5pm ! · keep ref #A17'. A strike runs through 'monthly' and through '$30'. Arrows link '$18' to 'autopay' and 'Fri 5pm' to 'deadline'.",
          task: "Reconstruct the conversation the page records — who wanted what, what changed, what must happen by when — then name the item each zone would answer.",
        },
        writing: {
          task: "Turn the following transcript summary into a two-column answering page, then explain your choices in 40–110 words: a caller asks to move a delivery from Tuesday to Thursday; the agent says Thursday carries a two-pound surcharge, but the caller's loyalty tier waives it this once; delivery lands Thursday between nine and noon, and the caller must reply to the confirmation text by Monday.",
          guide: [
            "Left column first: purpose label and the two speakers…",
            "Right column: the day change, the surcharge and its waiver, the window, the deadline…",
            "Strikes: what value was replaced, and why the old one stays visible…",
            "Then explain: which zone answers the fee item, and which the outcome item?…",
          ],
          model: "LEFT: deliv chg (caller → agent). RIGHT: Tue → Thu · +£2 srchg → waived (loyalty, this once) · Thu 9–12 · confirm txt by Mon !. Explanation: the fee item is answered from the right column's strike chain — surcharge proposed, then waived — with the waiver's condition attached, because conditions ride with values. The outcome item reads the same column's tail: new day, delivery window, and the Monday deadline flagged with an exclamation mark as the caller's one outstanding action. The left column keeps who-wanted-what for any purpose or stance item, so no zone has to do the other's job.",
        },
        listening: {
          script: "Nurse: Take the tablets twice a day with food, morning and evening, and book your review in three weeks — not two, the bloods need the extra week. Patient: Morning and evening, with food. Three weeks for the review — should I book it now? Nurse: Book it now, yes, and bring your yellow card to it.",
          task: "Which four facts must your answering line hold, and which single word signals the correction your notes must strike?",
        },
        speaking: {
          task: "Brief a partner aloud from your note page for the delivery conversation, without adding any detail your page does not hold — then let them quiz you on what is missing.",
          frames: [
            "The purpose line says…",
            "The values that changed were…, struck through because…",
            "The outstanding action, flagged with an exclamation mark, is…",
            "What my page cannot answer is…, and that is because…",
          ],
          checklist: [
            "Did the briefing read from zones rather than memory?",
            "Did I name at least one strike and what it preserved?",
            "Did I admit a gap instead of inventing a detail?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Zone discipline", "The model keeps purpose on the left and values on the right, so the fee item and the outcome item each have a named home — no answer is hunted across a wall of prose."],
          ["Strike preservation", "Old values stay visible under strikes, keeping the correction pattern — the most tested structure in conversations — available to the items that target it."],
          ["Condition attachment", "The waiver rides with the surcharge and the deadline carries its flag, honouring the rule that conditions and units travel with their values."],
          ["Honesty about limits", "The model names what the page cannot answer, teaching that a known gap is recoverable while an imagined detail is a wrong answer with confidence."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rule the page and set the two column headings, so the first words of audio pour into a waiting structure instead of a blank sheet."],
          ["While the clock runs", "Left for structure, right for values, arrows between, strikes not erasures — and when the audio sprints, drop to spine-only and rejoin."],
          ["If you are stuck", "Answer from the strongest zone you hold: purpose items read the left, detail items the right, outcome items the tail of both."],
          ["Final minutes", "Run the three-second audit on the recording you just finished — who, what, by when — before the next one takes the clock from you."],
        ],
      },
      {
        type: "summary",
        points: [
          "Notes are the only replay forward-only delivery permits — a manufactured second hearing, engineered rather than transcribed.",
          "Two columns divide labour: structure and owners left, values and conditions right, arrows attaching evidence to claims.",
          "The abbreviation kit buys seconds; strikes preserve correction patterns; exclamation marks flag emphasis and surprise.",
          "Answering notes take the shape of questions — owner, value, action — not the shape of the audio's sentences.",
          "When the pen falls behind, drop to spine-only rather than abandoning the page: purpose, stance and outcome items survive on structure alone.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier lessons of this module and its foundation.",
        items: [
          { question: "How does the split-page lesson's rule — details carry owners and units — appear in the note kit?", options: ["As arrows and initials joining values to their sources", "As full sentences restating each figure", "As a ban on numbers in notes"], correctIndex: 0, explanation: "The arrow attaches value to claim exactly as the split page demands, and the owner initial answers the who that units alone cannot.", from: "toefl-listening-ideas-details" },
          { question: "Why do inference items depend on this lesson's notes more than any others?", options: ["Because inference is answered from quoted evidence that must survive past the audio", "Because inference items are answered before listening", "Because inferences cannot be wrong"], correctIndex: 0, explanation: "The three-beat routine starts with a quote; a page that struck values and kept conditions is where those quotes live after the recording ends.", from: "toefl-listening-inference" },
          { question: "The module on pacing recommends what when a section runs ahead of your plan?", options: ["Recover the rhythm on the next item rather than fighting the last one", "Stop and restart the section", "Skip every second item"], correctIndex: 0, explanation: "The same logic governs the pen: drop to spine-only, rejoin the audio, and let the next item — not the lost one — restore the rhythm.", from: "toefl-time-management" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "What makes a note line an 'answering note' rather than a transcript fragment?",
        hints: ["Ask whose shape the line follows."],
        options: [
          { id: "a", text: "It is written in the shape of the questions — owner, value, action — rather than in the shape of the audio" },
          { id: "b", text: "It records the speaker's exact grammar for later rereading" },
          { id: "c", text: "It uses complete sentences with correct punctuation" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It is written in the shape of the questions — owner, value, action — rather than in the shape of the audio",
          "Answering notes invert the transcript's logic: instead of following the audio's order and grammar, they pre-build the slots items will read — which is why a dozen marks can outperform a paragraph of prose.",
          "Options (b) and (c) describe transcription, the habit that loses the audio by the second exchange while the pen finishes a sentence nobody scores.",
        ),
        tags: ["toefl", "listening", "notes"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the nurse's instructions, then answer.",
        hints: ["A correction follows the first review window named."],
        audioText:
          "Nurse: Take the tablets twice a day with food, morning and evening, and book your review in three weeks — not two, the bloods need the extra week.",
        question: "By when should the review be booked?",
        acceptedAnswers: ["in three weeks", "three weeks"],
        keywords: ["three weeks"],
        feedback: fb(
          "In three weeks",
          "The correction marker 'not two' kills the first value, and the newest window — three weeks, with its reason — is the answer any item will key to, exactly as the strike-through rule predicts.",
          "Answering 'two weeks' takes the abandoned value; it is the bait placed early for listeners who stop tracking after the first number lands.",
        ),
        tags: ["toefl", "listening", "corrections"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "Write less than you hear, but never less than the questions need.",
        acceptedAnswers: ["Write less than you hear, but never less than the questions need."],
        feedback: fb(
          "Write less than you hear, but never less than the questions need.",
          "The maxim balances the two failure modes of note-taking: transcription, which drowns, and minimalism, which starves — the two-column page exists to hold both limits at once.",
          "Reversing the clauses ('never less than you hear') describes transcription, and softening 'never' to 'rarely' quietly licenses the gaps that cost detail items.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the coach's message, then answer.",
        hints: [],
        audioText:
          "Coach: We're off the pitch Tuesday, the ground's booked for repairs, so we'll train Thursday at the usual time instead.",
        question: "When will training happen this week?",
        acceptedAnswers: ["Thursday at the usual time", "Thursday"],
        keywords: ["Thursday"],
        feedback: fb(
          "Thursday, at the usual time",
          "The replacement value arrives after the cause, and 'instead' marks it as the operative fact — a one-line answering note reads 'Tue → Thu, usual time', with the strike on Tuesday preserving the change.",
          "Answering 'Tuesday' takes the cancelled slot, and 'the pitch' takes the location of the repairs — both are audio-true values sitting in the wrong slot.",
        ),
        tags: ["toefl", "listening", "notes"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Read the candidate's page, then answer.",
        hints: [],
        passageTitle: "A page after the audio",
        passage:
          "LEFT: 'the man wanted to change his booking and the woman said there was a fee and then he said the fee was surprising and then she said the fee is standard since March and then he asked whether the fee could be avoided and then she said that autopay removes it and then he said he would think about it'. RIGHT: empty.",
        question: "What is the strongest criticism of this page?",
        options: [
          { id: "a", text: "It is transcription: everything is structure-free prose, so no owner, value or action can be located when the items come" },
          { id: "b", text: "It is too short to answer anything" },
          { id: "c", text: "It uses too many abbreviations that the candidate will forget" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It is transcription: everything is structure-free prose, so no owner, value or action can be located when the items come",
          "The page holds the content but not the answer: with no zones, no owners and no separated values, every item becomes a reread of a paragraph — the exact cost the two-column method exists to prevent.",
          "Option (b) misdiagnoses length — the page is long, and that is the problem — and option (c) describes the opposite failure, since no abbreviations were used at all.",
        ),
        tags: ["toefl", "listening", "diagnosis"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "Mid-recording, the audio is clearly outrunning your pen. What does the two-column method direct you to do?",
        hints: ["Which items survive on structure alone?"],
        options: [
          { id: "a", text: "Drop to spine-only — owners and outcomes on the left — and resume values when the pen catches up" },
          { id: "b", text: "Stop listening until the current sentence is finished on the page" },
          { id: "c", text: "Write faster in full sentences to capture everything" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Drop to spine-only — owners and outcomes on the left — and resume values when the pen catches up",
          "The spine alone still answers purpose, stance and outcome items, so the drop converts a total loss into a partial one — the designed recovery for the moment every note-taker meets.",
          "Option (b) trades the live audio for the dead sentence, and option (c) doubles down on the habit causing the problem — both leave the page and the recording permanently out of sync.",
        ),
        tags: ["toefl", "listening", "recovery"],
      }),
    ],
    assignment: {
      title: "Notes under one pass",
      instructions:
        "Record or choose a two-minute exchange — a service call, an interview, a podcast dialogue — and listen once only while taking two-column notes. Then close the audio. In 40–120 words, submit your page as prose (left zone, right zone, strikes and flags named), followed by two questions your page answers confidently and one question it cannot — with one sentence on what you would capture differently next time.",
      minWords: 40,
      maxWords: 120,
    },
    homework: [
      "Build your personal abbreviation list this week: adopt the kit's eight marks, then add five of your own from the audio you actually hear.",
      "Re-run last week's notes for one recording through the three-second audit, and note which of the who-what-by-when questions your old page could not answer.",
    ],
  },
  {
    slug: "toefl-listening-natural-speech",
    title: "Natural spoken English",
    description:
      "The sound of real English at speed: reductions like gonna, wanna and 'cause, contractions, hesitations and the discourse markers — well, so, anyway, I mean — that organise speech without carrying content. Learn to hear through the surface distortion, and to use the markers as structure signals rather than noise.",
    objectives: [
      "recognise the common reductions of fast English and map them back to their full forms",
      "hear hesitations and fillers as timing signals rather than content to be transcribed",
      "use discourse markers as structure cues — openings, pivots, closings — in note-taking",
      "listen effectively across the range of native-speaker accents the section's recordings use",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Real English at conversational speed is not English written down and read aloud: words fuse, shed sounds and vanish entirely. 'Going to' becomes gonna, 'want to' becomes wanna, 'because' shrinks to 'cause, and a question like 'What do you want to do?' races past as three blurred syllables. The recordings in this section use natural speech of exactly this kind — contractions, reductions, hesitations and all — so the final skill of the module is hearing through the distortion. The good news: the distortion is systematic, and the markers that clutter the stream are the same ones that organise it.",
        beforeYouStart: [
          "You have completed the note-taking lesson and can hold a split-page structure while listening.",
          "You are comfortable with ordinary contractions like 'don't' and 'she's'.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — natural-speed speech runs through all four task families and both adaptive stages"],
          ["Task & question types", "Every item type, because every recording is delivered in connected, unrehearsed-feeling speech"],
          ["What is assessed", "Comprehension of spoken English as it is actually produced — reduced, contracted, hesitating and marked — not its written ghost"],
          ["Why this matters", "Listeners trained only on careful, read-aloud English lose words they know, simply because those words arrived in an unfamiliar shape"],
        ],
      },
      { type: "heading", text: "Why fast English resists word-by-word listening" },
      {
        type: "text",
        text: "Spoken English optimises for the speaker's effort, not the listener's dictionary. High-frequency words fuse with their neighbours — 'going to' loses a vowel and a consonant on its way to gonna — and whole stretches of grammatical scaffolding compress into single bursts: 'I don't know' to I dunno, 'What do you' to whaddaya. None of this is sloppiness; it is the systematic sound of a language at speed, and fluent listeners decode it by expectation. The lesson of this module applies one last time: predict the words, and the blur resolves into them.",
      },
      {
        type: "grammar-rule",
        title: "Reduction patterns in connected speech",
        rule: "At conversational speed, high-frequency words and phrases fuse and shed sounds: going to → gonna, want to → wanna, got to → gotta, because → 'cause, kind of → kinda, sort of → sorta, don't know → dunno, let me → lemme, give me → gimme, what do you → whaddaya.",
        explanation: "The reduced forms are not a separate vocabulary: each is the full phrase with its weak vowels dropped and its consonants blended. Mapping back is mechanical once you have heard each reduction a dozen times, and hearing them is trainable with any natural-speed audio.",
        examples: [
          { english: "I'm gonna submit the form tonight, I promise.", translation: "" },
          { english: "You wanna see the lab before you choose?", translation: "" },
          { english: "We've kinda hit a wall with chapter two.", translation: "" },
          { english: "'Cause the bus was late, I missed the intro.", translation: "" },
        ],
        exceptions: [
          "Careful and formal speech — announcements read from a script, lectures at a podium — keeps more full forms, so the response and announcement tasks reduce less than rapid conversations.",
          "Reductions blur but rarely delete meaning: 'gonna' still marks the future, and a listener who misses the reduction misses the tense along with it.",
        ],
      },
      {
        type: "definition",
        term: "discourse marker",
        partOfSpeech: "noun phrase",
        definition: "A small word or phrase — well, so, anyway, right, I mean, you know, okay — that organises the flow of speech by signalling a move: opening, shifting, refocusing or closing, while contributing no propositional content of its own.",
        example: {
          english: "'So, anyway, the results were mixed' uses two markers to reopen a stalled topic before the content arrives — structure first, substance after.",
          translation: "",
        },
      },
      {
        type: "table",
        title: "Markers and the signals they send",
        headers: ["Marker", "Signal", "Note cue"],
        rows: [
          ["Well…", "Hedged or delayed response — thinking before answering", "Expect a softened position to follow"],
          ["So…", "A conclusion or a new topic built from the last one", "Spine line: wrap-up or bridge"],
          ["Anyway… / Anyhow…", "Closing a digression and returning to the thread", "End the 'D' in the margin"],
          ["Right / Okay, now…", "Section boundary — the speaker re-anchors the audience", "New bracket on the spine"],
          ["I mean…", "Self-repair or clarification coming", "Star the upcoming restatement"],
          ["You know…", "Assumed common ground, rarely new content", "Low value; keep listening"],
          ["Like…", "Filler or example introducer — context decides", "Content only if an example follows"],
        ],
        caption: "Markers are the signposts of unplanned speech — the talk lesson's lexicon, spoken by everyone.",
      },
      {
        type: "dialogue",
        title: "A natural-speed arrangement",
        context: "Practice material at conversational speed: reductions, fillers and markers working as they do in the real task.",
        lines: [
          { speaker: "Mia", text: "I was gonna call you last night, but the Wi-Fi went down again, so…" },
          { speaker: "Theo", text: "No worries — I was kinda buried in the lab report anyway." },
          { speaker: "Mia", text: "Right, so, the reading group — d'you still wanna host Thursday?" },
          { speaker: "Theo", text: "Well, I dunno… my flat's a state, and the neighbours are drilling. I mean, your place is bigger, no?" },
          { speaker: "Mia", text: "Gimme till tomorrow — I'll check with my flatmate and let you know." },
        ],
      },
      { type: "heading", text: "Accents and the honest rule" },
      {
        type: "warning",
        title: "No accent is the scoring accent",
        text: "The section's recordings use a range of native-speaker accents, and none of them is scored higher than another — nor is any of them easier by design. Train across accents rather than around them: alternate your practice audio week by week, and treat an unfamiliar vowel pattern as a reduction problem, soluble by prediction and context, not as a barrier. Candidates who claim one accent is the 'correct' or 'high-scoring' one are repeating folklore, and folklore costs practice time.",
      },
      {
        type: "example",
        title: "Reductions in the wild",
        items: [
          { english: "Heard: 'I'm gonna submit the form tonight.' Full form: 'I am going to submit the form tonight.' — the future marker survives the compression intact.", note: "Tense rides on the reduction: a listener who misses gonna misses the commitment's timing.", domain: "campus" },
          { english: "Heard: 'Cause the bus was late, I missed the intro.' Full form: 'Because the bus was late…' — the causal link is the answer to a why-item.", note: "A one-syllable 'cause carries the whole cause-effect relation; treat it as a structure word with content weight.", domain: "everyday" },
          { english: "Heard: 'We've kinda hit a wall with chapter two.' Full form: 'We have kind of hit a wall…' — the hedge softens the obstacle.", note: "Kinda calibrates the claim's strength, exactly like arguably in a talk's conclusion.", domain: "education" },
          { english: "Heard: 'Lemme see what I can do.' Full form: 'Let me see what I can do.' — a service provider buying time before an offer.", note: "Lemme opens a checking move; the real answer — what can be done — follows it.", domain: "work" },
          { english: "Heard: 'Well, I dunno, maybe the Tuesday slot?' — three markers before a hedged proposal.", note: "Well delays, I dunno hedges, maybe softens: the proposal is still a proposal, at deliberately low pressure.", domain: "exam" },
          { english: "Heard: 'Anyway, the point is the deadline moved.' Full form: the digression ends and the spine resumes.", note: "Anyway closes a 'D' in the margin and returns the audio to answerable ground.", domain: "everyday" },
        ],
      },
      {
        type: "mistakes",
        title: "Natural-speech errors corrected",
        items: [
          { wrong: "Reductions like gonna are slang, so the test will avoid them.", right: "Reductions are standard spoken English at speed, and the section's conversational recordings use them freely.", reason: "The task measures comprehension of natural speech, not of read-aloud prose; expecting written forms leaves a listener decoding unfamiliar shapes for familiar words at the worst possible moment." },
          { wrong: "Fillers like 'um' and 'like' are content I should be catching.", right: "Hesitations are timing signals: they buy the speaker a second and flag that content is coming, but they carry none of it.", reason: "Transcribing fillers spends your pace budget on words that answer nothing; the trained move is to hear a filler as a heads-up, not a payload." },
          { wrong: "I'll just wait for the speaker to say it more clearly.", right: "There is no clearer version coming — resolve the blur with prediction, context and the grammar around it.", reason: "One-play delivery means the unclear moment is the only moment; the listener who expects 'going to' hears gonna correctly, which is prediction serving pronunciation." },
        ],
      },
      {
        type: "four-skills",
        title: "One blurred exchange, four skills",
        reading: {
          text: "Transcribed at natural speed: 'So, anyway, I was gonna ask — d'you wanna split the presentation? You'd take the theory half, I'd kinda own the data stuff. Well, unless you'd rather swap, I mean, whatever works.'",
          task: "Mark every reduction and map it to its full form; then mark the two markers and say what each does to the exchange's structure.",
        },
        writing: {
          task: "Write a six-line arrangement between two friends using at least four reductions and two discourse markers, then write the same exchange in careful full-form English beneath it (60–130 words total).",
          guide: [
            "Plan the deal first: what is being proposed, hedged and agreed…",
            "Natural version: let gonna, wanna, kinda and 'cause do their ordinary work…",
            "Markers: open with 'so', pivot with 'well' or 'I mean'…",
            "Careful version: same content, full forms — and notice what the speed was doing to the tone…",
          ],
          model: "Natural: 'So I was thinking — wanna do the road trip in May? We could kinda split the driving, and I'm gonna borrow my brother's van, 'cause trains are a nightmare now. Well, if May's bad, June works too, I mean, whatever suits you.' Careful: 'So I was thinking — do you want to do the road trip in May? We could split the driving between us, and I am going to borrow my brother's van, because trains are a nightmare now. Well, if May is bad, June works too — I mean, whatever suits you.' The careful version shows the tone shift: the same proposal in full forms sounds like an agenda item, while the reductions make it low-pressure and friendly — register carried by speed itself.",
        },
        listening: {
          script: "Ravi: So, yeah, the landlord's gonna replace the boiler — next month, he says. Ana: Finally! D'you believe him this time? Ravi: Well, he kinda put it in writing, so… I mean, it's not nothing. Ana: Okay, so heating by December. I'm gonna hold you to that.",
          task: "What has changed about the boiler promise, and which two markers carry Ravi's hedged confidence?",
        },
        speaking: {
          task: "Read a formal sentence aloud, then say it again at natural speed with reductions — and have a partner transcribe what they hear.",
          frames: [
            "Careful: 'Do you want to review the draft together?' Natural: 'D'you wanna…'",
            "Careful: 'I am going to check with the office.' Natural: 'I'm gonna…'",
            "Careful: 'I do not know about Friday.' Natural: 'I dunno…'",
            "Open your natural version with 'Well' or 'So' and hear what it does…",
          ],
          checklist: [
            "Did my reductions stay intelligible to my partner?",
            "Did the markers structure what I said rather than pad it?",
            "Did the natural version keep the careful version's meaning intact?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Systematic reductions", "The natural version uses gonna, wanna, kinda and 'cause in their ordinary jobs — future, proposal, hedge and cause — so the mapping back to full forms is mechanical, not guesswork."],
          ["Marker structure", "So opens the proposal, well hedges the alternative, I mean softens the close: the exchange's skeleton is carried by its markers, as natural speech organises itself."],
          ["Register contrast", "Placing the careful version beside the natural one makes the register difference audible — speed itself signals friendliness, a fact the response task scores."],
          ["Prediction demonstrated", "The model shows a listener predicting 'going to' and hearing gonna correctly, the exact resolution strategy the module has taught since its first lesson."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Warm the ear: thirty seconds of natural-speed English before the section starts, so the first reduction is not also the first shock."],
          ["While the clock runs", "When a word blurs, trust grammar and context to resolve it — the verb you expected is usually the verb you heard, compressed."],
          ["If you are stuck", "Reconstruct from the structure around the blur: markers, tense markers and the task type together recover most missed words faster than replay-thinking does."],
          ["Final minutes", "Spend review seconds on meanings, not spellings of what you think you heard — the items test what was meant, and meaning survives compression."],
        ],
      },
      {
        type: "summary",
        points: [
          "Natural spoken English is systematic: going to → gonna, want to → wanna, got to → gotta, because → 'cause, kind of → kinda — and the mapping back is mechanical.",
          "Hesitations and fillers are timing signals, not content: hear them as heads-ups that substance is coming.",
          "Discourse markers — well, so, anyway, right, I mean — organise the stream; treat them as the signposts of unplanned speech in your notes.",
          "Prediction resolves blur: a listener expecting 'going to' hears gonna correctly, the module's first skill serving its last.",
          "Recordings use a range of native-speaker accents, none scored higher than another — train across accents, not around them.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier lessons of this module.",
        items: [
          { question: "How does the note lesson's kit handle a marker like 'anyway'?", options: ["As the end of a digression — the 'D' in the margin closes", "As a value to transcribe in full", "As a speaker error to ignore completely"], correctIndex: 0, explanation: "Markers are structure, and structure is the left column's job: anyway returns the audio to the spine, which is exactly what the margin note records.", from: "toefl-listening-note-taking" },
          { question: "In the conversation family, which recordings reduce the most?", options: ["Fast two-party exchanges between peers", "Scripted announcements", "Formal talks at a podium"], correctIndex: 0, explanation: "Reduction tracks speed and intimacy; peer conversations blur most, while scripted announcements keep fuller forms.", from: "toefl-listening-conversation" },
          { question: "Why does prediction, the overview lesson's core skill, also fix reductions?", options: ["Because an expected word is recognised even when its sounds are compressed", "Because prediction slows the audio down", "Because reductions only occur in predictable words"], correctIndex: 0, explanation: "Fluent listeners decode blur by expectation; the module's first habit — predict before you listen — is the same habit that resolves gonna, kinda and 'cause.", from: "toefl-listening-overview" },
        ],
      },
    ],
    questions: [
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: ["The first word is the reduced form of 'going to'."],
        audioText: "I was gonna email you, but the Wi-Fi went down again.",
        acceptedAnswers: ["I was gonna email you, but the Wi-Fi went down again."],
        feedback: fb(
          "I was gonna email you, but the Wi-Fi went down again.",
          "The sentence pairs the module's signature reduction with a causal structure: gonna carries the future plan, the 'but' clause carries the reason it failed — two layers a single blur can hide.",
          "Typing 'going to' where the audio said gonna is the half-error: the meaning survives, but the dictation keys to the form actually spoken, reductions included.",
        ),
        tags: ["toefl", "listening", "reductions"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "At conversational speed, 'What do you want to do?' most often sounds like…",
        hints: ["Four weak words compress into one burst."],
        options: [
          { id: "a", text: "Whaddaya wanna do?" },
          { id: "b", text: "What do you want to do, precisely?" },
          { id: "c", text: "Which activity is preferred by you?" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Whaddaya wanna do?",
          "Two reductions stack in one question: 'what do you' fuses into whaddaya and 'want to' into wanna — the systematic compression that makes fast English sound like fewer words than it is.",
          "Options (b) and (c) are careful written forms; expecting them leaves a listener hunting for syllables the speaker never produced.",
        ),
        tags: ["toefl", "listening", "reductions"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the speaker's suggestion, then answer.",
        hints: [],
        audioText:
          "Speaker: We've kinda hit a wall with the second chapter, so I dunno — maybe we should just skip to the conclusion?",
        question: "What does the speaker suggest doing with the second chapter?",
        acceptedAnswers: ["skip to the conclusion", "just skip to the conclusion", "skip"],
        keywords: ["skip"],
        feedback: fb(
          "Skip it and move to the conclusion",
          "Under two hedges — kinda and I dunno — sits a concrete proposal introduced by maybe and just: abandon chapter two and jump to the conclusion, low-pressure phrasing carrying a definite plan.",
          "Answering 'hit a wall' reports the problem the proposal exists to solve, a content-right, move-wrong reading of a heavily reduced line.",
        ),
        tags: ["toefl", "listening", "hedged-suggestion"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Read the transcript fragment, then answer.",
        hints: [],
        passageTitle: "A results update",
        passage:
          "So, anyway, the results were, um, well, mixed — I mean, group one improved, but the second cohort, you know, barely moved.",
        question: "Which pair of markers frames the speaker's main message rather than carrying content?",
        options: [
          { id: "a", text: "'Anyway' and 'I mean' — one closes the digression, one opens the clarification" },
          { id: "b", text: "'Results' and 'cohort' — the topic words" },
          { id: "c", text: "'Improved' and 'moved' — the verbs of change" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "'Anyway' and 'I mean' — one closes the digression, one opens the clarification",
          "The markers do structural work around the payload: anyway returns to the thread, I mean announces the restatement that makes 'mixed' concrete — organisation carried by words that name nothing.",
          "Options (b) and (c) list content words, which is precisely the confusion this lesson corrects: markers organise, content words mean, and notes must treat them differently.",
        ),
        tags: ["toefl", "listening", "markers"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "Which statement about accents in the Listening section is true?",
        hints: ["Think about what the format facts actually say."],
        options: [
          { id: "a", text: "Recordings use a range of native-speaker accents, and no accent is scored higher than another" },
          { id: "b", text: "One preferred accent is used throughout, and others are rare" },
          { id: "c", text: "Speaking with a particular accent earns extra credit" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Recordings use a range of native-speaker accents, and no accent is scored higher than another",
          "The honest rule: the section samples a range of native-speaker accents and scores comprehension, not conformity — so preparation means alternating practice audio across accents rather than hunting for a 'scoring' one.",
          "Options (b) and (c) are folklore of the kind that wastes practice time; no accent is the scoring accent, and none is easier by design.",
        ),
        tags: ["toefl", "listening", "accents"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the fast exchange, then answer.",
        hints: [],
        audioText:
          "Ravi: So the landlord's gonna replace the boiler next month, and he kinda put it in writing this time. Ana: Okay, so heating by December — I'm gonna hold you to that.",
        question: "What has changed about the boiler promise, in Ravi's words?",
        acceptedAnswers: ["put it in writing", "put it in writing this time", "he kinda put it in writing this time"],
        keywords: ["writing"],
        feedback: fb(
          "He put it in writing this time",
          "The change is evidential, not just verbal: the promise now exists in writing, which is why Ravi's hedged 'kinda' still leaves Ana confident enough to commit to December — structure words carrying a stance shift.",
          "Answering 'next month' takes the timeline rather than the change, missing the writing detail that makes this promise different from earlier ones.",
        ),
        tags: ["toefl", "listening", "natural-speech"],
      }),
    ],
    homework: [
      "Choose one minute of natural-speed audio each day this week; transcribe every reduction you hear and write its full form beside it — ten mappings and the system is yours.",
      "Record yourself saying three careful sentences, then say them again at natural speed; listen back and check which reductions survived intelligibly.",
    ],
  },
];
