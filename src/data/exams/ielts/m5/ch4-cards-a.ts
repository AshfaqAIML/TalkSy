/**
 * Chapter 4A — Part 2 cue-card families (Part A).
 *
 * The first six family lessons of the cue-card chapter: people, places,
 * events, experiences, objects and activities. Each lesson carries one
 * complete ORIGINAL cue card and its full seven-element teaching payload:
 * the prompt, the author's one-minute note, vocabulary suggestions, a
 * natural sample response, response analysis, alternative approaches and
 * follow-up practice.
 *
 * Honesty rules held throughout: the sample response is a demonstration of
 * method and every lesson warns explicitly against memorising it, because
 * examiners detect rehearsed scripts; the band-style label on each sample
 * is an educational estimate only, never an official score; no national
 * accent is ever treated as scoring higher — the criterion rewards being
 * easy to understand; and every card is original practice material written
 * in the style of the test, never reproduced examination content.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingCueCardLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-people",
    title: "Cue card family: People",
    description:
      "One complete original People card — a person you enjoy spending time with — carried from the printed lines through the one-minute note and the vocabulary to a two-minute sample talk, its move-by-move analysis, four alternative angles and follow-up practice.",
    objectives: [
      "read any people card as four scored lines and give each line its share of the two minutes",
      "fill the four corners of a one-minute note with fragments that can survive nerves",
      "build a people talk on character and shared moments rather than appearance",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Part 2 asks you to speak alone for up to two minutes, and the family you will meet most often is people: someone you enjoy, someone you admire, someone who helped you. This lesson takes one complete card of that family — a person whose company you genuinely like — and walks it from the printed lines to a finished talk. You will see the author's own preparation minute, a full sample response carrying an honest estimate label, and several other people the same card could hold. Treat the sample as a map of the territory, never as a script to recite.",
        beforeYouStart: [
          "You can name the four lines of a cue card: the situation line, the task line, the three prompts and the explain line.",
          "You have used the four-corner note method from the cue-card craft chapter.",
          "You know that the four Speaking criteria carry equal weight and that none of them scores your accent's nationality.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the individual long turn, practised here on a people card"],
          ["Task & question types", "A cue card with a task line, a situation line, three prompts and an explain line; one minute to prepare, up to two minutes of speech"],
          ["What is assessed", "Fluency and coherence across the long turn, lexical range for character and relationship, grammatical range in live speech, ease of understanding"],
          ["Why this matters", "People cards open every candidate's easiest topic bank, so a dependable method here protects marks you can bank on test day"],
        ],
      },
      { type: "heading", text: "What a people card is really asking" },
      {
        type: "text",
        text: "Every people card, whatever its wording, is a relationship question in disguise. The three prompts collect the facts — who, how you know them, what you share — but the explain line asks why this person matters to you, and that is where the stronger performances live. The examiner listening to a people talk is not scoring your friend; they are scoring your ability to move from description to evaluation, from 'he is funny' to 'his humour makes ordinary evenings feel lighter'. Notice, too, that the card never asks what the person looks like. Appearance is available but almost worthless here, because it develops nowhere and steals seconds the final line needs.",
      },
      { type: "heading", text: "The four moves that carry a people talk" },
      {
        type: "text",
        text: "A two-minute people talk runs on four moves, and the good news is that the card prints three of them for you. Open by naming the person and your connection in a single sentence, so the listener can stop guessing. Anchor the relationship with one time marker — the year, the place, the shared class or street. Then spend the middle on moments: two or three concrete scenes you can see with your mind's eye. Close by giving the explain line its own half-minute of protected time, because a talk that ends on the facts stops one move short of what the card asked for.",
      },
      {
        type: "steps",
        title: "From card to talk in four moves",
        intro: "The sequence below fits any person a card might name.",
        steps: [
          {
            title: "Move 1: Choose someone you can illustrate",
            text: "Pick the person you hold the most scenes for, not the most impressive one. A cousin with three funny stories beats a famous laureate you have met once, because the talk runs on moments you can describe, not on status.",
            examples: [
              {
                english: "Chosen: my aunt, because I can describe her kitchen, her laugh and her advice-giving style without pausing to remember.",
                note: "Three ready scenes is the working minimum before you commit to a subject.",
                domain: "study",
              },
            ],
          },
          {
            title: "Move 2: Name and anchor in one breath",
            text: "Your first sentence should carry the name, the relationship and the time it started. 'This is my friend Sami, who I met in a community choir about seven years ago' does three jobs at once and buys you a calm second sentence.",
            examples: [
              {
                english: "I'd like to talk about my grandmother, who moved in with us when I was nine.",
                note: "Name, relationship, year — the examiner now knows who, and since when.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move 3: Trade lists for scenes",
            text: "A list — 'we cook, we walk, we watch films' — fills time without developing anything. One scene told in three sentences, with what was said and how it felt, scores on every criterion at once.",
            examples: [
              {
                english: "Every Thursday we argue about films in the same tiny dumpling place until the owner stacks the chairs.",
                note: "A repeated scene says 'regular time together' more vividly than any list can.",
                domain: "life",
              },
            ],
          },
          {
            title: "Move 4: Save the last half-minute for why",
            text: "When you feel the two-minute mark approaching, stop producing facts and start explaining. Name two reasons the person's company matters, and if you can, rank them — 'mostly because… but also because…' — because ranking is evaluation, and evaluation is the explain line's currency.",
            examples: [
              {
                english: "Mostly it's that she listens without planning her reply; but it's also that she asks the questions nobody else thinks of.",
                note: "Two reasons, clearly separated: the closing line answered in depth.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — People",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "You have drawn a people card in your Part 2 round: one minute to prepare with pencil and paper, then one to two minutes of unbroken speech."],
          ["Task line", "Describe a person you enjoy spending time with"],
          ["Prompt 1", "who this person is"],
          ["Prompt 2", "how you know them"],
          ["Prompt 3", "what you do together"],
          ["Explain line", "…and explain why you enjoy their company"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "Sami · mid-thirties · hospital pharmacist · tenor in choir", "Three identity facts are enough to sketch a person; the talk itself supplies the rest as character."],
          ["Corner two — the anchor", "met 2018, back row of tenors · tissues + lemon tea story", "One dated meeting plus one first impression: the second prompt answered in advance."],
          ["Corner three — the detail bank", "Thursday rehearsals · dumpling-shop debates · 4 a.m. airport run", "Three scenes, none longer than five words; any one can expand into half a minute of talk."],
          ["Corner four — the reason", "listens properly · makes ordinary things funny · honest about hard things", "The explain line gets its own corner so storytelling can never squeeze it out at the end."],
        ],
      },
      {
        type: "table",
        title: "Words that earn their place in a people talk",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["easy company", "Sum up the whole relationship near the end: 'with him it's just easy company' — the phrase evaluates rather than describes, which is explain-line work."],
          ["to click with someone", "Describe the first meeting: 'we clicked the moment we discovered we hated the same film'."],
          ["a dry sense of humour", "Character without cliché: sharper than 'he is funny', because it names the kind of humour."],
          ["down to earth", "Contrast someone's demanding job with their unpretentious manner — a natural pairing sentence."],
          ["to catch up", "Frame the shared routine: 'we catch up over noodles every Thursday' — activity and relationship in one verb."],
          ["to see eye to eye", "Add texture with a small disagreement: 'we never see eye to eye on films, which is half the fun'."],
          ["kindred spirit", "A step above 'close friend'; use it once, late in the talk, where it carries weight."],
          ["to be in stitches", "One moment of shared laughter told as a scene: 'the owner found us in stitches over a film poster'."],
          ["to have someone's back", "Loyalty shown as an event: 'he had my back during a rough month at work'."],
        ],
      },
      {
        type: "example",
        title: "Six moments a people card can carry",
        items: [
          {
            english: "I've chosen my uncle Marek, who has been fixing bicycles in the same shed since before I was born.",
            note: "The name-plus-relationship-plus-history opening that does three jobs in one sentence.",
            domain: "exam",
          },
          {
            english: "We first met at a bus stop in the rain, both of us sheltering the same paperback.",
            note: "A meeting story with a picture in it; chance meetings make the strongest anchors.",
            domain: "life",
          },
          {
            english: "Corner three of my note reads: 'sourdough Sundays · her terrible parking · the podcast argument' — three scenes, six words each.",
            note: "Note fragments stay fragments: words to speak from, never words to read aloud.",
            domain: "study",
          },
          {
            english: "My old supervisor made a five-person team feel like a dinner table, and that is the quality I keep coming back to.",
            note: "A work relationship described through its effect on a group — evaluation arriving early.",
            domain: "work",
          },
          {
            english: "She is the only person I phone instead of text, which says more than any adjective could.",
            note: "A habit used as character evidence: concrete, personal, impossible to borrow from a book.",
            domain: "life",
          },
          {
            english: "Honestly, we bicker about football the way other families discuss politics, and I would not change a minute of it.",
            note: "Affection shown through friction — a mature angle that lifts the closing line.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Where people talks go wrong" },
      {
        type: "mistakes",
        title: "People-card traps corrected",
        items: [
          {
            wrong: "I opened with half a minute of appearance — tall, short beard, always in that green jacket — because looks felt like the natural starting point.",
            right: "Spend at most one sentence on appearance, and make it a character clue: 'the kind of person who irons his shirt to fix a bike'.",
            reason: "The card asks who they are to you, not what they look like; description that develops nowhere burns the seconds the closing line needs.",
          },
          {
            wrong: "I memorised a model answer about a friend and delivered it word for word, pausing in exactly the same places.",
            right: "Memorise the four moves and two or three phrases at most, then build the talk live around your own person.",
            reason: "Examiners hear rehearsed scripts every week and flag them; the fluency criterion scores speech composed in the moment, however imperfect.",
          },
          {
            wrong: "I chose a famous entrepreneur so I could recycle a documentary I had watched, and then had nothing to say for the last forty seconds.",
            right: "Choose someone with three shared scenes you can see in your mind, even if they seem completely ordinary.",
            reason: "'How you know them' collapses with a stranger, and without personal moments the talk runs dry before the clock does.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The people card, end to end",
        reading: {
          text: "When a people card lands in front of you, the examiner starts listening for four things in sequence: a named person, a dated connection, shared moments told as scenes, and a closing that explains the relationship's value rather than restating its facts. Candidates who understand this rhythm give roughly two sentences to the name and connection, a full minute to the middle prompts, and the final half-minute to the explain line. The commonest failure is not running out of English but running out of order — a childhood biography that leaves the reason until the examiner's raised hand ends the turn.",
          task: "Before you draft anything, write the four card lines down the left of a page and one planned move beside each.",
        },
        writing: {
          task: "Draft your own two-minute people talk against this card, using the guide below to open each move, then compare your proportions with the sample model — but never its sentences.",
          guide: [
            "Move one opener: 'The person I've picked is…, who I've known since…'",
            "Anchor sentence: 'We first met when…, and honestly my first impression was…'",
            "Scene sentence: 'What we usually do is…, and there was one evening when…'",
            "Explain opener: 'I enjoy their company mostly because…, but also because…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nOK, so the person I've picked is my friend Sami, who I've known for about six — no, seven years now, since we both joined the same community choir. He's in his mid-thirties, works as a hospital pharmacist, and he sings tenor, which is how we ended up standing next to each other, because the tenors get herded into the back row together.\n\nWe actually met properly at the second rehearsal, when I turned up with a terrible cold and he silently handed me a packet of tissues and a thermos of lemon tea. That tells you a lot about him, really. Since then, Thursdays have basically belonged to him: two hours of rehearsal in a slightly damp community hall, and afterwards the two of us walk to the same tiny dumpling place and argue about films until the owner starts stacking chairs.\n\nWhat do we do together outside Thursdays? Well, we swim on Saturday mornings when we can manage it, and last winter he drove me to the airport at four in the morning without a single complaint, which I still feel guilty about.\n\nSo why do I enjoy his company so much? Mostly it's that he listens — properly, I mean, without glancing at his phone or steering everything back to himself. And he makes ordinary things funny; a boring queue becomes a comedy sketch with Sami standing in it. The third thing, which I admire more than I manage to copy, is that he's honest about what he finds difficult, and somehow that gives everyone around him permission to be honest too. So yes: easy company, generous with his time, and never, ever dull.",
        },
        listening: {
          script:
            "Tutor: I'm going to be honest about your people talk, because the good news came first. Your English was calm, your tenses held, and I heard four linking phrases we had practised. But the content worries me. You gave me her height, her hairstyle and her favourite colour — nearly a minute of it — and then told me she 'is very kind' four separate times. I never learned what she does to you. Give me one scene where her kindness actually happened, and cut the mirror description to a single sentence. Do that, and the same talk is two bands stronger, without a single new word of vocabulary.",
          task: "Note down the two content changes the tutor demands, and the one thing she says needs no new vocabulary.",
        },
        speaking: {
          task: "Run the full cycle on this card: sixty seconds to fill your own four corners from memory, then speak into a recorder for up to two minutes, and finish inside the explain line.",
          frames: [
            "The person I've picked is…, who I've known since…",
            "The moment I realised we'd be friends was when…",
            "What we usually do together is…",
            "I enjoy their company mostly because…, and also because…",
          ],
          checklist: [
            "Did my opening sentence carry the name, the relationship and a time marker?",
            "Did I trade at least one list for a single told scene?",
            "Does the final half-minute belong entirely to the explain line?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, move by move",
        headers: ["Segment of the talk", "What the sample does there"],
        rows: [
          ["The opening", "Names Sami, the choir connection and the seven-year span in the first sentence, then adds age, job and voice part — the 'who' prompt answered with three concrete facts before any story starts."],
          ["The anchor story", "The tissues-and-thermos moment answers 'how you know them' with one dated scene instead of a chronology, and doubles as evidence of character."],
          ["The shared routine", "Thursday rehearsals plus the dumpling-shop ritual answer 'what you do together' as a repeated scene, which communicates regular time together better than a list could."],
          ["The extra scene", "The four-a.m. airport run widens the friendship beyond Thursdays and demonstrates loyalty without ever using the word 'loyal'."],
          ["The explain close", "Two ranked reasons — listening and humour — plus an admired third quality, giving the extension line real depth and a personal verdict."],
          ["The spoken surface", "One deliberate self-correction ('six — no, seven years'), a handful of natural fillers, and short clauses that breathe, so the talk sounds composed live rather than recited."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Four moves in card order — person, connection, shared moments, reason — so the examiner can tick the prompts as they hear them and never wonders where the talk is heading."],
          ["Grammar", "Present perfect for the friendship's duration ('have basically belonged'), past simple for the scenes, and a self-question ('What do we do together?') that relaunches the talk naturally."],
          ["Vocabulary", "Character words earn their place — 'easy company', 'herded into the back row', 'permission to be honest' — and each is shown in action rather than merely asserted."],
          ["Coherence", "The 'Thursdays' motif returns three times as a spine, holding the middle of the talk together while the scenes change around it."],
          ["Task fulfilment", "All three prompts receive dedicated sentences, and the extension owns the final third of the talk, ending on evaluation rather than description."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["A grandparent you lived with as a child", "Shifts the timeline into the past tense and the vocabulary towards care, patience and memory; the explain line gains a note of gratitude and can mention advice you still follow."],
          ["A former colleague from your first job", "Moves the register towards professional respect; anecdotes run on deadlines, shared lunches and covering for each other, and the reason centres on trust built under pressure."],
          ["A younger neighbour you help with homework", "Reverses the usual direction — you are the experienced one — so the explain line becomes surprise at how much the friendship gives back, a fresher angle than plain affection."],
          ["A friend you met while travelling", "Makes the 'how you know' prompt the strongest section: a chance meeting, a language barrier survived, and a bond kept alive across time zones."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do you think it's easier to make friends as an adult or as a child?' — answer in three sentences with one example from your own circle."],
          ["Rounding-off question two", "'How do friendships usually change when people move to a new city?' — give one opinion and one observed example."],
          ["Practice card A", "'Describe a person who has helped you at a difficult moment' — full cycle: note, two-minute talk, self-review against the checklist above."],
          ["Practice card B", "'Describe an old friend you have lost touch with' — notice how the past tense carries most of this talk."],
          ["Practice card C", "'Describe a person you admire but have never met' — use it to practise the boundary between describing achievements and explaining influence."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Use the preparation minute to write fragments, not sentences: three identity facts, one dated meeting, three scenes, two reasons — the four corners in card order."],
          ["While the clock runs", "Keep an ear on your own proportions: if a minute has passed and the reason corner is still unspoken, close the current scene and move."],
          ["If you are stuck", "Return to the detail-bank corner and expand any fragment you have not used; an ordinary scene you own beats an impressive invention you do not."],
          ["Final minutes", "Land the talk inside the explain line with a ranked pair of reasons and a short verdict, so the examiner stops you mid-evaluation rather than mid-description."],
        ],
      },
      {
        type: "summary",
        points: [
          "A people card is a relationship question: the prompts collect the facts, the explain line asks you to evaluate them, and evaluation is where the stronger bands live.",
          "Give appearance one sentence at most — character told through scenes develops; physical description does not.",
          "The four moves — name and anchor, one meeting scene, shared scenes, ranked reasons — fit any person any card might name.",
          "Memorise the moves, never the sentences: examiners recognise recited scripts, and the fluency criterion scores speech composed live.",
          "Your final half-minute belongs to the explain line; a talk that ends on facts has stopped one move short of the card.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick items from the cue-card craft chapter.",
        items: [
          {
            question: "Which single line of a cue card do examiners treat as the highest-value prompt?",
            options: ["The situation line above the task", "The 'and explain' closing line", "The first of the three prompts"],
            correctIndex: 1,
            explanation: "The explain line is where description turns into evaluation, so it carries the most scoring weight and deserves its own protected corner in your note.",
            from: "Understanding cue cards",
          },
          {
            question: "What belongs in the second corner of the four-corner note?",
            options: ["The reasons you will give at the end", "The when-and-where anchor of the subject", "A backup subject in case the first one fails"],
            correctIndex: 1,
            explanation: "Corner two holds the dated anchor — the meeting or starting point — because 'how you know' prompts are answered fastest from a time-and-place fragment.",
            from: "Effective note-taking",
          },
          {
            question: "How long is the long turn in Part 2 after your preparation minute?",
            options: ["Between one and two minutes", "Between two and three minutes", "Exactly two minutes, no more"],
            correctIndex: 0,
            explanation: "You speak for one to two minutes; examiners generally let you pass the one-minute mark and stop you around two.",
            from: "Understanding cue cards",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. The explain line of this card asks why you enjoy the person's company. Which closing strategy answers it most fully?",
        hints: ["Two reasons beat one adjective — and ranking them shows evaluation, not just description."],
        options: [
          { id: "a", text: "Repeat the strongest adjective from the talk — 'kind, really kind' — so the ending matches the middle." },
          { id: "b", text: "Give two named reasons, roughly ranked, and finish with a short verdict on the friendship." },
          { id: "c", text: "Thank the listener and summarise the person's appearance one last time for a tidy close." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Give two named reasons, roughly ranked, and finish with a short verdict on the friendship.",
          "The explain line is an evaluation prompt: a ranked pair of reasons plus a verdict shows the examiner you can judge, not just describe — which is exactly what the higher descriptors reward.",
          "(a) is assertion without content — adjectives name qualities but never demonstrate them; (c) spends the closing seconds on the one element the card never asked for.",
        ),
        tags: ["speaking", "cue-cards", "people"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read what happened to one candidate on this card and answer the question.",
        hints: ["Track the order of her content: what came first, and what never came at all?"],
        passageTitle: "The minute that went missing",
        passage:
          "In her practice round, Lena spoke fluently for the full two minutes about her friend Ada — where they sat in class, the brands Ada preferred, the music Ada listened to, and Ada's plans to study abroad. Her language had almost no errors. When the recording ended, her tutor asked one question: 'Why do you enjoy being with her?' Lena laughed and said, 'I never got to that part.' The tutor wrote two words on the card: 'order, not English'.",
        question: "What does the tutor's note mean?",
        options: [
          { id: "a", text: "Lena's grammar needs rebuilding before she attempts Part 2 again." },
          { id: "b", text: "Lena's English was fine; her content arrived in the wrong order, and the explain line never got its turn." },
          { id: "c", text: "Lena described her friend too positively and needs a more critical view." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Lena's English was fine; her content arrived in the wrong order, and the explain line never got its turn.",
          "The talk spent its whole budget on the first two prompts plus unrequested detail, leaving the highest-value line untouched — a coverage failure rather than a language one, and precisely why the minute is planned before the mouth opens.",
          "(a) contradicts the passage, which says her errors were almost zero; (c) invents a problem the passage never raises — balance was not the issue, order was.",
        ),
        tags: ["speaking", "cue-cards", "people", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer from your own understanding of the method, in one or two sentences.",
        question: "According to this lesson, how much of a two-minute people talk should the explain line receive, and what should those seconds contain?",
        acceptedAnswers: [
          "about thirty seconds, containing two ranked reasons and a verdict",
          "roughly half a minute, with two reasons for valuing the person and a closing judgement",
          "around thirty seconds, given to named reasons rather than adjectives",
          "the final thirty seconds, holding the two reasons and a short evaluation of the friendship",
        ],
        keywords: ["thirty", "reasons"],
        hints: [],
        feedback: fb(
          "Around thirty seconds — the final third of the talk at most, holding two ranked reasons and a short verdict.",
          "The explain line is the card's evaluation prompt, so it needs protected time at the end: two named reasons with a closing judgement show the examiner you can appraise a person, not merely list their features.",
          "Answers that give the line ten seconds or a single adjective have protected the facts and starved the evaluation.",
        ),
        tags: ["speaking", "cue-cards", "people"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. You have drawn this card and your mind goes blank on the 'what you do together' prompt. What is the strongest recovery?",
        hints: [],
        options: [
          { id: "a", text: "Switch to describing the person's appearance, since any fluent English is better than silence." },
          { id: "b", text: "Expand a fragment from your detail-bank corner — one scene told slowly, even an ordinary one." },
          { id: "c", text: "Admit you cannot remember and ask the examiner for a different prompt." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Expand a fragment from your detail-bank corner — one scene told slowly, even an ordinary one.",
          "The preparation minute stocked your note with scenes precisely for this moment: slowing down inside material you own keeps the talk moving and often produces richer language than racing for something impressive.",
          "(a) spends the silence on content the card never asked for; (c) is not available in Part 2 — the card cannot be exchanged, and examiners cannot reissue prompts.",
        ),
        tags: ["speaking", "cue-cards", "people"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a related people card — speak your answer, do not write it.",
        hints: ["Sixty seconds of notes first: subject, anchor, three scenes, two reasons."],
        situation:
          "A second card from the same family: 'Describe a person who has helped you at a difficult moment.' Take up to one minute to prepare, then speak for between one and two minutes, ending inside the explain line.",
        targetPhrases: [
          "The person I'd immediately name is…",
          "What they actually did was…",
          "Looking back, what helped most was…",
        ],
        mustSay: ["helped", "because", "for example"],
        feedback: fb(
          "A one-to-two-minute talk naming the helper, one concrete scene of help, and a reflective reason inside the final third.",
          "This cousin of the original card trains the same four moves with the volume raised: the help scene becomes the anchor story, and the explain line turns into reflection on what the help changed in you — which is where the stronger bands live.",
        ),
        tags: ["speaking", "cue-cards", "people", "long-turn"],
      }),
    ],
    assignment: {
      title: "Your own people-card note and opening",
      instructions:
        "Choose a different person who fits this card — not the one from the sample — and complete two jobs in 40 to 160 words: first, your four-corner note in fragments exactly as you would write it during the minute; second, the opening two sentences you would actually say, carrying the name, the relationship and a time marker.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Record a full two-minute talk on this card without stopping the recording, then listen back twice: once counting how many seconds the explain line received, once marking every sentence that could be replaced by a scene.",
      "Take practice card A from the follow-up table through the whole cycle — note, talk, self-review — and write down which of the four moves felt weakest under time pressure.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-places",
    title: "Cue card family: Places",
    description:
      "One complete original Places card — a place where you feel completely relaxed — worked from the printed lines through a sensory planning note and place vocabulary to a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "pin a place on the listener's mental map within your first two sentences",
      "answer a frequency prompt honestly and use the variation as structure",
      "translate a feeling such as relaxation into sensory evidence rather than stacked adjectives",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Places cards invite you to take the examiner travelling: a city you loved, a room that calms you, a corner of the world you keep returning to. The trap is equally seductive — postcard language. 'Beautiful, peaceful, amazing' describes a million places and therefore none of them. This lesson carries one complete places card about somewhere you feel completely relaxed, shows the author's genuine one-minute note, and demonstrates how warmth, smell and light can do the work that adjectives cannot. The sample response is labelled with an educational estimate and is meant to be borrowed as method, not memorised as text.",
        beforeYouStart: [
          "You can split any cue card into situation line, task line, three prompts and the explain line.",
          "You have practised writing fragments rather than sentences during the preparation minute.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, seen here through a places card"],
          ["Task & question types", "A description prompt with location, frequency and activity prompts plus an explain line about a feeling; one minute of notes, up to two minutes of talk"],
          ["What is assessed", "Coherence while moving the listener through a location, concrete vocabulary for atmosphere, tense control between routines and visits, clear delivery"],
          ["Why this matters", "Place descriptions recur across Part 1 and Part 2 alike, so sensory technique pays twice over in the same test"],
        ],
      },
      { type: "heading", text: "What a places card is really asking" },
      {
        type: "text",
        text: "Before the examiner can feel why a location calms you, they need to stand in it with you: which city, which district, what kind of space, how far from your daily life. A places talk therefore begins with map-making — two clear sentences of location — and only then spends its budget on atmosphere. The classic failure is the postcard answer: a string of glowing adjectives that could describe any beach on earth, followed by an explain line that simply repeats the card's own word back at it. Relaxation, like every feeling the cards ask about, has to be shown as evidence — what your senses register there — and then explained as mechanism: what those sensations do to you.",
      },
      { type: "heading", text: "The sensory method for a relaxation card" },
      {
        type: "text",
        text: "The reliable route into this family is through the body rather than the brochure. Choose two senses your place speaks through — most often temperature and smell, or light and sound — and give each one full sentence. Sensory detail is inexhaustible in a way adjectives are not, because you can always ask yourself what your nose, ears and skin were doing, while 'beautiful' has nowhere to go after the first use. The explain line then links those sensations to the effect: warmth that stays constant, a smell that carries a childhood, a sound the city cannot reach. That chain — sense, then effect — is what turns description into the evaluation the closing line demands.",
      },
      {
        type: "steps",
        title: "Building the place talk, layer by layer",
        intro: "Four layers, in the order the listener needs them.",
        steps: [
          {
            title: "Layer 1: Fix the map first",
            text: "Spend your opening sentences on where: the district, the kind of space, the journey time from your home. 'Twenty minutes by tram' locates a place more vividly than any adjective, because the listener can measure it against their own city.",
            examples: [
              {
                english: "It's a glasshouse at the far end of the botanic gardens, about twenty minutes from my flat by tram.",
                note: "Type of space, position, travel time: the listener is standing at the door before the description begins.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Layer 2: Answer frequency with a split",
            text: "Few of us visit any haven at a constant rate, and saying so gives you free structure: 'in winter, most Sundays; in summer, less, because the crowds arrive'. One honest contrast beats a flat, doubtful 'every week'.",
            examples: [
              {
                english: "How often do I go? In winter, honestly, every week; in summer the tourists take it over and I retreat.",
                note: "The seasonal split answers the prompt and adds a natural complex sentence in the same breath.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Layer 3: Give the place a sensory signature",
            text: "Choose two senses and write one sentence for each in your note — 'condensation on the glass', 'wet earthy smell'. During the talk, expand each fragment with what it does to the mood of the place.",
            examples: [
              {
                english: "Note fragment: 'greenhouse smell — grandfather's tomatoes'. One smell plus one memory is a whole explain paragraph waiting to happen.",
                note: "Senses chained to memories are the strongest material a places talk can carry.",
                domain: "study",
              },
            ],
          },
          {
            title: "Layer 4: Explain the mechanism, not the label",
            text: "The closing line asks why you relax there. Answer with cause: the warmth holds steady whatever the weather, the noise cannot get through the glass, nobody needs anything from you. End on the body — 'my shoulders drop' — and the examiner feels the relaxation arrive.",
            examples: [
              {
                english: "The moment I smell those ferns, my shoulders drop about two centimetres — that's how I know it's working.",
                note: "A physical signal makes the feeling measurable, and measurability reads as sincerity.",
                domain: "life",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Places",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "The card in front of you asks for a place; the examiner has just started your sixty-second preparation clock."],
          ["Task line", "Describe a place where you feel completely relaxed"],
          ["Prompt 1", "where it is"],
          ["Prompt 2", "how often you go there"],
          ["Prompt 3", "what you do there"],
          ["Explain line", "…and explain why it makes you feel relaxed"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "glasshouse café · botanic gardens · end of the tram line", "Location facts first, because the listener's first need is the map, not the mood."],
          ["Corner two — the anchor", "winter: most Sundays · summer: less, crowded", "The frequency prompt is answered in advance with a built-in contrast sentence."],
          ["Corner three — the detail bank", "same table behind the ferns · jasmine tea · condensation · people blurred through glass", "Two rituals and two senses: enough concrete material for the whole middle of the talk."],
          ["Corner four — the reason", "always warm inside · greenhouse smell = grandfather's tomatoes · nobody expects anything", "Three causes of the relaxation, so the explain line can be a chain rather than a shrug."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary that paints a place",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["a haven from", "Frame the place against your week: 'it's a haven from screens and deadlines' — the noun does evaluation work immediately."],
          ["to switch off", "Name what the place lets you stop: 'it's the only place I properly switch off'."],
          ["hushed", "A quiet word for quiet places, worth more than 'very quiet': 'the reading room is hushed in the afternoons'."],
          ["to soak up the atmosphere", "Describe your first minutes there: 'I order, sit down, and just soak up the atmosphere for a while'."],
          ["a weight off my shoulders", "Attach the idiom to arrival: 'crossing the threshold feels like a weight off my shoulders'."],
          ["to while away an hour", "Answer the activity prompt with gentle time language: 'I while away an hour with a paperback'."],
          ["to clear my head", "Give the place a function: 'it's where I clear my head after a heavy week'."],
          ["a little sanctuary", "Reserve for the explain line: 'it's become a little sanctuary, honestly'."],
          ["to shut out the world", "Explain the mechanism in three words: 'the glass shuts out the world'."],
        ],
      },
      {
        type: "example",
        title: "Six place moments that outperform adjectives",
        items: [
          {
            english: "My grandmother's kitchen smells of cardamom and yesterday's bread, which is probably why every café in the world disappoints me slightly.",
            note: "A smell used as the entire explain argument — memory is the strongest evidence a place talk can offer.",
            domain: "life",
          },
          {
            english: "Corner one of my note says only: 'fifth floor, corner window, faces the harbour, 4 p.m. light'.",
            note: "Note fragments carry positions and times; the talk turns them into atmosphere.",
            domain: "study",
          },
          {
            english: "The reading room hums — that particular library hum of pages and radiators that makes whispering feel natural.",
            note: "Naming a specific sound beats naming 'quiet' four times over.",
            domain: "exam",
          },
          {
            english: "After a shift of non-stop notifications, the lake path is the only place my phone stays in my pocket.",
            note: "A work-life contrast gives the relaxation a before-and-after structure the examiner can follow.",
            domain: "work",
          },
          {
            english: "In August I barely go — the tour groups arrive — but from October it's mine again, every Sunday if it's not raining.",
            note: "Honest seasonal frequency: a contrast, an admission and a routine inside two sentences.",
            domain: "exam",
          },
          {
            english: "You buy a token at the gate, you climb ninety-one steps, and suddenly the whole city is a map beneath you.",
            note: "The journey told as a sequence carries the listener there better than any panorama of adjectives.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where places talks go wrong" },
      {
        type: "mistakes",
        title: "Places-card traps corrected",
        items: [
          {
            wrong: "I stacked my best adjectives — 'so beautiful, very peaceful, really amazing' — believing that praise itself was description.",
            right: "Cut each adjective and replace it with one thing your senses registered there: a temperature, a smell, a quality of light.",
            reason: "Adjectives assert; senses demonstrate. The vocabulary criterion rewards precise concrete detail far above enthusiastic labels.",
          },
          {
            wrong: "I described a famous beach I had seen in photographs, so when the frequency prompt came I mumbled 'whenever I can' and my detail ran dry.",
            right: "Choose a place you actually visit, however ordinary — a stairwell window beats a borrowed paradise.",
            reason: "Every prompt after 'where' depends on lived experience; a place you do not go to cannot answer how often, or feed the explain line.",
          },
          {
            wrong: "I finished my list of attractions with thirty seconds still on the clock and just said 'that's all' and stopped.",
            right: "Plan the explain line as its own final section with at least two causes, so the talk always closes inside evaluation.",
            reason: "Ending early hands back the microphone and abandons the card's highest-value line at the exact moment it was needed.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The places card, end to end",
        reading: {
          text: "A relaxation card is scored on a chain of evidence. First the map: two sentences that fix the place in space and travel time. Then the routine: how often, told honestly, ideally with a seasonal or weekday split that gives the answer structure. Then the senses: two at most, expanded into full sentences, because 'warm air and a wet, green smell' paints more than any string of superlatives. Finally the mechanism: why those particular sensations calm this particular speaker. Candidates who memorise a model places talk instead of building their own chain lose twice — the content stops fitting the prompts, and the delivery acquires the flat, recited rhythm that examiners are trained to notice.",
          task: "As you read, mark the four links of the evidence chain, then check that your own planned place can supply all four.",
        },
        writing: {
          task: "Write the first half of your own places talk on this card — map sentences, honest frequency, and one sensory signature — using the guide for openings. The model shows the full length; borrow its shape only, never its sentences, because examiners detect recited text.",
          guide: [
            "Map opener: 'The place I'm thinking of is…, which is…'",
            "Frequency opener: 'How often do I go? Well, it depends on the season…'",
            "Sensory opener: 'What I notice first is…, and there's always…'",
            "Mechanism opener: 'I think it relaxes me because…, and because…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nSo, the place I want to describe is a glasshouse café at the botanic gardens in my city. It's this big Victorian greenhouse at the far end of the gardens, all iron frames and fogged-up windows, and inside it they've kept the plants — enormous ferns, a banana tree, the lot — with maybe twelve little marble tables squeezed between the beds.\n\nIt's about twenty minutes from my flat by tram — well, twenty-five door to door — which is close enough to be realistic and far enough to feel like leaving normal life behind. How often do I go? In winter, honestly, every week; I'm there most Sunday mornings. In summer it's less, because the gardens get crowded and I suppose I get distracted by other plans.\n\nWhat I actually do there is almost embarrassingly simple: I order the same pot of jasmine tea, I take the table in the corner behind the ferns, and I read. Sometimes I don't even read — I just watch condensation running down the glass and people moving on the other side of it, all blurred and silent, like a film with the sound off.\n\nWhy does it relax me so completely? I think it's the combination of warmth and green. It's always summer in there, whatever the weather is doing outside, and there's that thick, wet, earthy smell of a greenhouse that I've loved since I was small — my grandfather grew tomatoes, so maybe that's where it comes from. The light is soft because of the glass, the noise of the city doesn't really reach in, and nobody expects anything of you. You're allowed to just sit. And for me that's become a kind of signal: the moment I smell those ferns, my shoulders drop about two centimetres.",
        },
        listening: {
          script:
            "Tutor: Let's listen to your beach again — no, don't worry, the grammar survived. Here's what didn't. I counted: you said 'beautiful' three times, 'peaceful' twice and 'amazing' twice. Seven adjectives, and I still couldn't smell the sea air, hear the vendors, or feel the wind you keep mentioning. Then I asked how often you go, and you said 'every weekend' — but later you mentioned you'd been twice this year. Pick the bench by the river you actually sit on. Give me its smell, its sound and its mood, and tell me honestly that you go on Thursday evenings. That version will sound like a person talking about a place, not a brochure reading itself aloud.",
          task: "List the three replacements the tutor asks for, and note why she prefers the bench to the beach.",
        },
        speaking: {
          task: "Run the full cycle: one minute of four-corner notes on a place that genuinely relaxes you, a recorded talk of one to two minutes, and a self-check against the list below.",
          frames: [
            "The place I'd take you to is…, which sits…",
            "It depends on the season, but usually…",
            "The first thing I always notice is…",
            "It relaxes me because…, and because…",
          ],
          checklist: [
            "Did my opening fix the place on the map before any mood words arrived?",
            "Did I give at least two senses a full sentence each?",
            "Does my ending explain a mechanism instead of repeating the word 'relaxing'?",
            "Did I keep my own accent and simply slow down for clarity, rather than imitating anyone?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, layer by layer",
        headers: ["Segment of the talk", "What the sample does there"],
        rows: [
          ["The opening", "Fixes the glasshouse, its structure and its contents in two sentences — map-making before mood, exactly as the listener needs."],
          ["The frequency answer", "Splits winter from summer, which answers the prompt, admits an honest 'less', and produces a built-in contrast sentence."],
          ["The activity section", "Ritual detail — same tea, same corner table — plus the blurred figures behind condensation, turning 'I read' into a scene."],
          ["The explain close", "Chains sensation to cause to body: warmth whatever the weather, a smell inherited from a grandfather, and shoulders that measurably drop."],
          ["The spoken surface", "A natural self-correction ('twenty — well, twenty-five door to door'), a rhetorical question used once, and short sentences that let the talk breathe."],
          ["The honesty margin", "Claims nothing the speaker could not repeat to a friend: frequency varies, summer crowds the place out — credibility that recited models never carry."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Map, frequency, activity, mechanism — the card's own order — so each prompt is audible as it is answered and the talk never circles back."],
          ["Grammar", "Present simple carries the routine ('I order, I take, I read'), a concessive structure absorbs the summer exception, and the self-correction shows live editing rather than error."],
          ["Vocabulary", "Concrete nouns do the painting — iron frames, condensation, marble tables — while 'haven'-type evaluation is rationed to the moments it earns."],
          ["Coherence", "The sensory signature (warmth and green) set up early returns in the final paragraph as the explanation, tying the talk's ends together."],
          ["Task fulfilment", "Both location and frequency receive dedicated answers, the activity prompt is honoured with a ritual, and the extension closes on cause and physical effect."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["Your grandmother's kitchen", "Moves the talk towards memory and the past: frequency becomes 'every Sunday of my childhood', and the explain line gains gratitude and a note of loss."],
          ["The rooftop of your building at night", "Keeps everything domestic and slightly comic — a folding chair, a thermos, the city as fairy lights — and explains relaxation as perspective: problems look smaller from six floors up."],
          ["The quiet carriage of a long train", "Offers movement as the relaxing agent: what you do there is watch fields, and the explain line becomes the luxury of being unreachable for three hours."],
          ["A lakeside path in autumn", "Supplies dense seasonal vocabulary — mist, rust, cold air — and lets rhythm of walking carry the explanation instead of stillness."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do you think people found it easier to relax before smartphones?' — take a position and defend it with one personal example."],
          ["Rounding-off question two", "'Are quiet places hard to find in big cities?' — answer with one observation and one suggestion for town planners."],
          ["Practice card A", "'Describe a quiet place where you like to go to think' — full cycle with notes and a recording."],
          ["Practice card B", "'Describe a place you visited as a child that you remember well' — notice how the past tense takes over this talk."],
          ["Practice card C", "'Describe a building or structure that impressed you' — practise the map-making opening with a place you have seen only once."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose the place in the first ten seconds of the minute, then spend the rest writing locations, frequency splits and two sense fragments — not adjectives."],
          ["While the clock runs", "Follow the layers in card order; if you notice yourself stacking praise words, stop and name one thing you can smell or hear there instead."],
          ["If you are stuck", "Return to your sense fragments and expand whichever one you have not used; sense memory keeps producing language when invention dries up."],
          ["Final minutes", "Move deliberately into the mechanism — two causes and one bodily effect — so the examiner's stopwatch catches you mid-explanation, never mid-adjective."],
        ],
      },
      {
        type: "summary",
        points: [
          "A places talk begins with map-making: location, type of space and travel time before any mood language.",
          "Honest frequency — 'more in winter, less in summer' — answers the prompt and hands you a natural contrast structure for free.",
          "Two senses given a full sentence each will always outperform a string of superlatives, because senses demonstrate while adjectives merely assert.",
          "The explain line needs a mechanism: link the place's features to what happens in your body, and end on that effect.",
          "Build your own talk from your own place; a memorised model flattens under questioning and carries the recited rhythm examiners are trained to catch.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from the craft chapter before this one.",
        items: [
          {
            question: "What happens to your written notes once the long turn begins?",
            options: ["You keep them beside the card and may glance at them", "The examiner collects them before you speak", "You must read them aloud as your opening"],
            correctIndex: 0,
            explanation: "The paper stays with you throughout the talk; glancing at fragments is expected, which is exactly why fragments — not full sentences — are what the minute is for.",
            from: "The one-minute preparation",
          },
          {
            question: "Which order should the body of a cue-card talk usually follow?",
            options: ["The card's own order of prompts", "Reverse order, ending with the setting", "Whatever order feels dramatic in the moment"],
            correctIndex: 0,
            explanation: "The printed order matches the examiner's mental checklist, so following it makes your coverage visible — while the explain line always comes last and longest.",
            from: "Organising ideas",
          },
          {
            question: "What is the recommended way to move from one prompt to the next mid-talk?",
            options: ["Fall silent for a few seconds to mark the change", "Signal the move with a small bridging phrase", "Repeat your previous sentence and continue"],
            correctIndex: 1,
            explanation: "Short signposts — 'as for how often…' — keep the sound continuous and show the examiner which prompt you are now serving.",
            from: "Maintaining continuity",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. The explain line of this card asks why the place relaxes you. What does this lesson say will score better than any number of praising adjectives?",
        hints: ["Think in terms of cause: what do warmth and quiet actually do to a person's body?"],
        options: [
          { id: "a", text: "A mechanism: linking the place's features to what they do to you physically." },
          { id: "b", text: "A complete list of the place's facilities and opening hours." },
          { id: "c", text: "A comparison with a more famous place the examiner will recognise." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A mechanism: linking the place's features to what they do to you physically.",
          "The closing line asks for explanation, and explanation runs on cause: warmth that holds, sounds that cannot enter, and a body that visibly settles give the examiner evidence rather than assertion.",
          "(b) invents a task the card never set — facilities describe the place, not your relaxation; (c) hands the spotlight to somewhere you are not being asked about.",
        ),
        tags: ["speaking", "cue-cards", "places"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's beach talk and answer the question.",
        hints: ["Ask what the tutor could have checked against the candidate's own life: the detail, or the frequency claim?"],
        passageTitle: "The postcard problem",
        passage:
          "Theo's place talk flowed without a single hesitation. He described 'turquoise water, golden sand, an amazing sunset' — all of it accurate to the resort's official photographs, which was exactly the problem: he had been there once, three years earlier, on a company trip. Asked afterwards by his practice partner how often he returns, he said 'whenever I can', although the talk itself had claimed 'almost every month'. His explain line ran to one sentence: 'because it is very relaxing'. The tutor circled the word 'postcard' and left it at that.",
        question: "Which pair of weaknesses does the tutor's label point at?",
        options: [
          { id: "a", text: "His pronunciation was unclear and his sentences were too long." },
          { id: "b", text: "The detail was borrowed rather than lived, and the explain line merely echoed the card's own wording." },
          { id: "c", text: "He chose the wrong beach and should have described a colder place." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The detail was borrowed rather than lived, and the explain line merely echoed the card's own wording.",
          "A place you have visited once cannot feed the frequency prompt or the sensory middle, and repeating the card's keyword back at it abandons the explanation entirely — the two failures the postcard label names.",
          "(a) contradicts the passage, which says the talk flowed without hesitation; (c) invents a preference no part of the feedback supports.",
        ),
        tags: ["speaking", "cue-cards", "places", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one sentence, drawing on the sample talk.",
        question: "In the sample response, which two sensory features of the glasshouse café does the speaker use to explain her relaxation?",
        acceptedAnswers: [
          "the constant warmth inside the glass and the earthy smell of the plants",
          "the warmth that never changes with the season and the wet greenhouse smell",
          "the warm air among the ferns and the green, earthy smell she links to her grandfather",
          "the warmth inside the glasshouse and the thick plant smell from childhood",
        ],
        keywords: ["warm", "smell"],
        hints: [],
        feedback: fb(
          "The constant warmth inside the glass, and the wet, earthy greenhouse smell tied to a childhood memory.",
          "Those two senses do the whole explanation: the warmth supplies comfort in the present, and the smell carries a personal history — between them they turn the word 'relaxed' into demonstrated cause.",
          "Answers naming light or sound alone have picked secondary details: the sample uses those for atmosphere, but warmth and smell carry the actual explanation.",
        ),
        tags: ["speaking", "cue-cards", "places"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Your talk claims you visit your place 'every single weekend', but your real pattern is twice a month in winter and rarely in summer. Why does the honest version score better?",
        hints: [],
        options: [
          { id: "a", text: "Examiners fact-check frequency claims in the rounding-off questions, so exaggerations are always caught." },
          { id: "b", text: "Honest variation creates natural contrast, richer grammar, and detail you can actually sustain under questioning." },
          { id: "c", text: "Frequency is the least important prompt on the card, so precision there is wasted effort." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Honest variation creates natural contrast, richer grammar, and detail you can actually sustain under questioning.",
          "A seasonal split answers the prompt and produces a built-in complex sentence, while claimed regularity you do not live soon thins out into vague repetition — the honest version is simply richer material.",
          "(a) describes a policing system that does not exist — the cost of exaggeration is thin content, not detection; (c) undervalues a printed prompt, every one of which is scored.",
        ),
        tags: ["speaking", "cue-cards", "places"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a sibling of this card — speak your answer aloud.",
        hints: ["One minute of notes: the place, when you go, what you do there, and two reasons it helps you think."],
        situation:
          "A related places card: 'Describe a quiet place where you like to go to think.' Prepare for up to one minute, then speak for one to two minutes, closing inside the explain line.",
        targetPhrases: [
          "The place I escape to is…",
          "What I love about it is…",
          "It helps me think because…",
        ],
        mustSay: ["quiet", "think", "because"],
        feedback: fb(
          "A one-to-two-minute talk that fixes the location, gives an honest frequency, and ends by explaining what the quiet does for your thinking.",
          "This card keeps the sensory method but changes the emotion from relaxation to clarity: the strongest versions end by naming what the place lets you figure out — a decision, an apology, a plan — because a result proves the thinking happened.",
        ),
        tags: ["speaking", "cue-cards", "places", "long-turn"],
      }),
    ],
    assignment: {
      title: "A different relaxing place, planned and opened",
      instructions:
        "Pick a second place that genuinely relaxes you — somewhere you could revisit this week if possible — and write 40 to 160 words covering two things: your four-corner note exactly as it would look after the minute, and then the two opening sentences you would say, fixing the place on the listener's map (district, type of space, travel time) before any mood words appear.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Revisit your chosen place once with this lesson in your pocket and record three sensory details you could not have invented from memory — a temperature, a smell, a quality of light or sound.",
      "Record the full two-minute talk, then play it back once with your eyes closed: mark every moment you stack adjectives, and each time, write the sense detail that could replace the pair of them.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-events",
    title: "Cue card family: Events",
    description:
      "One complete original Events card — an event you attended that you will never forget — taught through a timeline method, a demonstrated one-minute note, event vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "stamp any event with a clear date and place in your opening sentences",
      "answer a 'who was there' prompt with named people who have roles",
      "earn the word 'unforgettable' with one held image instead of superlatives",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Events cards cover the calendar of a life: festivals, weddings, finals, first nights, farewells. They look easy, which is exactly why they go wrong — candidates deliver the event's history instead of their own attendance, or bury a genuinely moving night under a heap of superlatives. This lesson carries one complete events card about a night the speaker will never forget, shows the preparation minute as it was actually written, and teaches the timeline method that keeps an events talk upright. The full sample response wears an estimate label; study its architecture, then build your own, because a recited talk reads as recited.",
        beforeYouStart: [
          "You can identify the four scored lines of any cue card within ten seconds of reading it.",
          "You can write note fragments quickly enough to fill four corners inside the preparation minute.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the individual long turn, approached this time through an events card"],
          ["Task & question types", "A narrative description prompt with event, timing and company prompts plus an explain line about memory; one minute to note, up to two to speak"],
          ["What is assessed", "Fluency while narrating, narrative tenses under pressure, atmosphere vocabulary, and the coherence of a story with a beginning, peak and meaning"],
          ["Why this matters", "Storytelling structure transfers to Part 1 anecdotes and Part 3 examples, making this the most reusable family on the list"],
        ],
      },
      { type: "heading", text: "What an events card is really asking" },
      {
        type: "text",
        text: "An events card asks for two things at once: the event as a public thing — what it was, when, where — and the event as your private experience of it. The balance matters. A talk that is all public gives a lecture on the festival's founding year, its organisers and its sponsors; a talk that is all private forgets to say what the event actually was. The strongest answers stamp the public facts in two sentences and then spend their remaining time as an eyewitness: where you stood, who you leaned against, what you heard in the silence. 'Unforgettable' is the card's keyword, and it cannot be asserted — it has to be demonstrated with the one image from that night that still plays in your head.",
      },
      { type: "heading", text: "The timeline method" },
      {
        type: "text",
        text: "Every attended event has the same natural shape: arrival, build-up, peak, aftermath. The timeline gives your two minutes a spine that listeners can lean on, and it protects you from the commonest events-card failure — circling. Candidates without a spine jump from the fireworks back to the parking, forward to the food, back to the fireworks, and the examiner's notes fill with question marks. Walk the timeline once, in order, and give each stage exactly one job: arrival sets the scene, build-up adds people and anticipation, the peak carries the image, the aftermath carries the meaning.",
      },
      {
        type: "steps",
        title: "Four stages of an events talk",
        intro: "One stage, one job — in walking order.",
        steps: [
          {
            title: "Stage 1: Stamp it",
            text: "Your opening sentences must carry a date, a place and the event's name. 'Two Augusts ago, on the last night of my town's river festival' does all three jobs and lets the examiner start their stopwatch of attention from solid ground.",
            examples: [
              {
                english: "This was two years ago, on the closing Sunday of the river festival back home.",
                note: "When plus where plus which event: the public stamp, delivered in one breath.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Stage 2: Cast it",
            text: "'Who was there' deserves real people with roles: two named companions, one relationship noted, and if possible one stranger who mattered. A cast makes the event populated rather than merely described.",
            examples: [
              {
                english: "I was with my two cousins and my aunt, who had flown in from abroad the day before, purely by coincidence.",
                note: "Three people, three roles, one coincidence to sweeten the story.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Stage 3: Build to the peak",
            text: "The peak is the moment the event exists for — the lanterns lit, the final whistle, the vows. Tell it slowly: what you saw, what the crowd did, what the silence felt like. One image told well outweighs five told in passing.",
            examples: [
              {
                english: "For about ten minutes nobody spoke — the whole town went quiet, which almost never happens.",
                note: "Silence is a sound in a talk: describing what stopped is as vivid as describing what started.",
                domain: "life",
              },
            ],
          },
          {
            title: "Stage 4: Land on the meaning",
            text: "The explain line asks why the event stays with you. Split the answer in two: what the peak looked like, and what it meant — to the crowd, to your family, to you since. Events earn their place in memory through meaning, not spectacle alone.",
            examples: [
              {
                english: "The image I keep is a family, briefly in one place, watching a river full of light.",
                note: "A closing sentence that carries both the picture and its meaning in thirteen words.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Events",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "Your Part 2 topic tonight is an event; the pencil and paper are beside the card and the minute has begun."],
          ["Task line", "Describe an event you attended that you will never forget"],
          ["Prompt 1", "what the event was"],
          ["Prompt 2", "when and where it took place"],
          ["Prompt 3", "who was there"],
          ["Explain line", "…and explain why it was unforgettable"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "river festival finale · lantern release · every August", "The event's name and its one-sentence identity: without this, the talk has no anchor."],
          ["Corner two — the anchor", "two years ago · closing Sunday · steps of the old customs house", "The date-and-place stamp, pre-written so the opening sentences never wobble."],
          ["Corner three — the detail bank", "cousins + aunt (flown in by chance) · wishes on paper lanterns · cousin's 400 photos", "A cast with roles and two peak-moment props, ready to expand into the middle stages."],
          ["Corner four — the reason", "a river of lights · whole town silent · last gathering before cousins scattered", "Spectacle plus meaning: the two halves of an 'unforgettable' explanation, separated in advance."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the night it happened",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["a real buzz", "Describe the build-up: 'there was a real buzz along the banks by nine o'clock'."],
          ["packed", "Size without numbers: 'the square was packed, five deep at the barriers'."],
          ["in full swing", "Arrive mid-energy: 'by the time we got there, the concert was in full swing'."],
          ["the highlight of the evening", "Announce your peak before telling it: 'and then came the highlight of the evening'."],
          ["a hush fell over the crowd", "The moment the noise stops deserves its own verb: 'a hush fell over the crowd as the first lanterns caught'."],
          ["a sea of", "Scale as a picture: 'a sea of little flames drifting downstream'."],
          ["once-in-a-lifetime", "Use sparingly and honestly, attached to one specific element rather than the whole night."],
          ["it's etched in my memory", "A stronger claim than 'I remember it'; deploy once, in the final third."],
          ["to this day", "Bridges the event to the present: 'to this day I can't smell candle wax without hearing that silence'."],
        ],
      },
      {
        type: "example",
        title: "Six ways into an events talk",
        items: [
          {
            english: "It was the last Saturday of June, the school's centenary fair, and I only went because my sister had a stall.",
            note: "A reluctant-attendee opening instantly promises a personal story rather than a brochure.",
            domain: "life",
          },
          {
            english: "Corner two of my note reads: 'March, the away end, bucketing rain' — six words that fix when and where forever.",
            note: "Weather fragments are free atmosphere: the talk can spend a whole sentence expanding them later.",
            domain: "study",
          },
          {
            english: "I stood between my best friend from school and a complete stranger who kept explaining the rules to me.",
            note: "One friend and one stranger: the smallest cast that still makes an event feel attended.",
            domain: "exam",
          },
          {
            english: "The launch itself lasted ninety seconds; I have told people about those ninety seconds for three years.",
            note: "Contrasting a short peak with a long afterlife is a ready-made explain line.",
            domain: "exam",
          },
          {
            english: "Our whole department was in one room for the farewell party, which hadn't happened since before the renovations.",
            note: "Work events answer this family too — register stays easy and the cast is built in.",
            domain: "work",
          },
          {
            english: "Nobody warns you that a graduation ceremony is mostly waiting, and that the waiting is the part you miss.",
            note: "An honest counter-expectation gives the talk an opinion to develop, not just a schedule to recite.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where events talks go wrong" },
      {
        type: "mistakes",
        title: "Events-card traps corrected",
        items: [
          {
            wrong: "I opened with the festival's founding year, its organiser and its sponsors, and described the event's history for a minute before mentioning that I was there.",
            right: "Give the event's identity one sentence, then take the listener by the arm and walk them in with you.",
            reason: "The card says 'you attended': the scored content is your presence, your position in the crowd and your companions, none of which appear in a history lecture.",
          },
          {
            wrong: "I jumped from the fireworks to the traffic jam, back to the food stalls, then to the fireworks again because I remembered a detail.",
            right: "Walk the timeline once: arrival, build-up, peak, meaning — and park extra details for the stage they belong to.",
            reason: "Circling breaks the coherence the criterion listens for, and the examiner spends the talk reconstructing order instead of enjoying the event.",
          },
          {
            wrong: "I said 'amazing, incredible, unbelievable' about the finale and moved on, certain that strong adjectives proved how unforgettable it was.",
            right: "Choose the one image you still see when you close your eyes, tell it slowly, and let the image do the asserting.",
            reason: "Superlatives are claims; images are evidence, and the explain line is scored on the quality of the evidence you supply.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The events card, end to end",
        reading: {
          text: "Examiners listening to an events talk are quietly checking a four-slot grid: did they name the event, fix the date and place, populate it with people, and explain its hold on memory? The timeline method fills the grid in walking order, so the checks fall as the talk proceeds. What the grid does not contain is impressiveness — a village lantern night told from the heart outperforms an Olympic opening described from a television. And the grid has a hidden fifth slot: rhythm. Events talks invite speed, because excitement accelerates speech; the deliberate slowing at the peak is what marks a candidate in control of their instrument.",
          task: "Copy the four-slot grid on paper and fill it for an event of your own before you write or speak anything.",
        },
        writing: {
          task: "Draft your own events talk against this card following the four stages, using the guide to open each stage. The model below shows one full performance — analyse how it spends its seconds, then leave its sentences behind, because examiners recognise borrowed text however good it is.",
          guide: [
            "Stamp opener: 'This happened…, at/in…'",
            "Cast opener: 'I was there with…, plus…'",
            "Peak opener: 'And then, right at the end, came…'",
            "Meaning opener: 'I'll never forget it because…, and because…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nOK so the event I want to talk about is the closing night of the river festival in my hometown — specifically the lantern release, which happens on the last Sunday of the festival every August.\n\nA bit of context: my town sits on a wide, slow river, and for one week every summer there are stalls and concerts along the banks. But the finale is the thing everyone waits for. At about ten o'clock, when it's properly dark, thousands of people buy these paper lanterns — they're like little floating candles inside folded paper — and you write a wish on the side, and then everyone releases them onto the river at the same moment.\n\nI went two years ago with my two cousins and my aunt, who was visiting from abroad at the time — she'd actually flown in the day before, completely by coincidence, so it felt as if the festival were a welcome party for her. We got there early and sat on the steps of the old customs house, which is the best spot because the river bends exactly there.\n\nThere must have been two — no, three thousand lanterns, honestly, all drifting downstream in this slow, glowing procession, and for about ten minutes nobody spoke. The whole town just went quiet, which almost never happens. My aunt cried a little, and my cousin took about four hundred photos and then put his phone away, which tells you something.\n\nWhy will I never forget it? Partly just how it looked — the river carrying all those tiny lights under the bridge like a slow fire. But mostly it's what it meant: everyone's wishes floating together, strangers' wishes side by side with ours. And it was the last big thing we did as a group before my cousins moved to different countries. So the image I keep is a family, briefly in one place, watching a river full of light.",
        },
        listening: {
          script:
            "Tutor: Good news first — your festival talk had a real spine, and when the drums started I could genuinely hear the crowd. Two things to fix. First, I never learned who you were with. You said 'we' nine times and named nobody; give me a friend, an uncle, anybody with a role. Second, your ending told me the night was 'unforgettable, amazing, fantastic' — three adjectives doing the job one image should do. Tell me instead about the moment your grandmother grabbed your arm during the fireworks. That single image will carry more weight than every adjective you stacked on it.",
          task: "Name the two repairs the tutor orders, and identify which card prompt each repair serves.",
        },
        speaking: {
          task: "Take this card through the full cycle for an event of your own: one minute of four-corner notes, a recorded talk of one to two minutes, and an honest run through the checklist.",
          frames: [
            "This happened…, at…",
            "I was there with…, who…",
            "And then came the moment everyone had been waiting for…",
            "It stays with me because…, and because…",
          ],
          checklist: [
            "Did my opening stamp the date, the place and the event inside two sentences?",
            "Did at least two named people appear, each with a role?",
            "Did I slow down at the peak instead of speeding up?",
            "Did the talk finish inside the explain line, on meaning rather than adjectives?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, stage by stage",
        headers: ["Segment of the talk", "What the sample does there"],
        rows: [
          ["The opening", "Names the event, narrows it to the lantern release, and fixes its rhythm in the calendar — the public stamp delivered before any atmosphere."],
          ["The context paragraph", "Explains the ritual in plain steps so a listener who has never seen it can picture it — evidence that clear beats exotic."],
          ["The cast and the spot", "Two cousins, an aunt with a story, and the customs-house steps: the 'who' and part of the 'where' answered together through position."],
          ["The peak", "The counted crowd ('two — no, three thousand'), the procession, and above all the silence, told slowly enough to be felt."],
          ["The explain close", "Splits 'unforgettable' into spectacle (a slow fire under the bridge) and meaning (wishes together, a family before parting) — then ends on the held image."],
          ["The spoken surface", "One self-correction used as emphasis rather than error, one 'which tells you something' aside to the listener, and a rhythm that slows exactly where it should."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Arrival, ritual, cast, peak, meaning — a single walk along the timeline, with no circling and no backtracking."],
          ["Grammar", "Past simple narrates, 'must have been' speculates about scale, and a relative clause carries the aunt's coincidence without a detour."],
          ["Vocabulary", "Atmosphere is built from concrete nouns — folded paper, glowing procession, slow fire — while evaluation words appear exactly twice."],
          ["Coherence", "The 'wishes' motif appears in the ritual explanation and returns in the final meaning, stitching the talk's beginning to its end."],
          ["Task fulfilment", "All three prompts are answered in dedicated sentences and the extension receives the final two thirds of the last minute, ending on the image."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["A school sports final you played in", "Adds first-person action and nerves: the 'who' becomes teammates and opponents, and the explain line runs on shared effort rather than spectacle."],
          ["A cousin's wedding held abroad", "Shifts the vocabulary towards ceremony and family politics; the peak is a small human moment — an uncle's speech — and the meaning is belonging."],
          ["The unveiling of a neighbourhood mural", "A quiet, local register: the crowd is tiny, the peak is a sheet falling off a wall, and the explain line honours a neighbour the street lost."],
          ["A meteor shower watched with strangers on a hillside", "Replaces family with strangers, making 'who was there' about brief kinship — the explain line explores connection without acquaintance."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do you think local festivals matter less to young people than they used to?' — give a view and one local example."],
          ["Rounding-off question two", "'Why do many people prefer watching events live rather than on screen?' — offer two reasons, one personal."],
          ["Practice card A", "'Describe a celebration you took part in' — full cycle, then check that your cast has roles."],
          ["Practice card B", "'Describe a live match or performance you watched' — practise slowing down at the peak."],
          ["Practice card C", "'Describe a wedding you attended' — notice how ceremony vocabulary wants rehearsing in advance."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the date-place stamp first, then the cast, then a peak fragment, then two meaning fragments — the timeline as four lines of shorthand."],
          ["While the clock runs", "Trust the timeline's order; when a stray detail surfaces, park it in the stage it belongs to instead of jumping backwards to fetch it."],
          ["If you are stuck", "Slow the peak down — describe the light, the sound or the silence in front of you — because the held image is the part examiners remember."],
          ["Final minutes", "Finish on meaning: what the event meant then, and what it means to you now — never on a list of what else happened that night."],
        ],
      },
      {
        type: "summary",
        points: [
          "An events talk needs its public facts stamped early — event, date, place in two sentences — and then your eyewitness experience on top of them.",
          "Populate the event: named companions with roles, and if possible one stranger who mattered.",
          "The peak moment deserves the slowest sentences in the talk; speed at the peak reads as nerves, not excitement.",
          "'Unforgettable' is proven with one held image and its meaning, not with a tower of superlatives.",
          "Walk the timeline once and never circle it — and build the whole thing yourself, because borrowed event talks carry borrowed rhythms that examiners hear instantly.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft lessons that prepared this chapter.",
        items: [
          {
            question: "A card lands on a topic you know nothing about. What is the taught first move?",
            options: ["Say honestly that you know nothing and stop", "Choose the nearest thing you do know and bend the card towards it", "Invent an elaborate fictional story immediately"],
            correctIndex: 1,
            explanation: "The craft chapter trains honest bridging: name the gap, then talk about the closest experience you own — examiners score the speaking, not the biography.",
            from: "Handling unfamiliar topics",
          },
          {
            question: "How should the preparation minute be spent, broadly?",
            options: [
              "Reading the card over and over until it is memorised",
              "Roughly: choose a subject, then spend the rest filling note fragments",
              "Writing the first two sentences out in full to guarantee a strong opening",
            ],
            correctIndex: 1,
            explanation: "Subject first, fragments after: full sentences eat the minute and then invite reading aloud, which is the fastest way to sound recited.",
            from: "The one-minute preparation",
          },
          {
            question: "Why are fragments written instead of sentences during the minute?",
            options: [
              "Fragments are faster to produce and impossible to read as a script",
              "Fragments hide your ideas from the examiner",
              "Sentences are banned by the test rules",
            ],
            correctIndex: 0,
            explanation: "A fragment triggers memory without dictating wording, keeping the talk live — while a written sentence practically begs to be recited word for word.",
            from: "Effective note-taking",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Where should the peak moment of an events talk normally land?",
        hints: ["A timeline earns its ending — think about what the listener needs before the climax hits."],
        options: [
          { id: "a", text: "First, as an attention-grabbing opener, with the build-up backfilled afterwards." },
          { id: "b", text: "Late: after the stamp and the cast have prepared the ground, so the peak arrives with full weight." },
          { id: "c", text: "Nowhere in particular — peaks are optional if the facts are complete." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Late: after the stamp and the cast have prepared the ground, so the peak arrives with full weight.",
          "The timeline method front-loads date, place and people precisely so the peak can land in the final third, where its slow telling leads straight into the explain line about memory.",
          "(a) spends the strongest card early and forces circling to recover the context; (c) misreads the family — without a peak there is nothing to be unforgettable.",
        ),
        tags: ["speaking", "cue-cards", "events"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's festival talk and answer the question.",
        hints: ["Ask whose voice was missing from the talk — the organisers', or the speaker's?"],
        passageTitle: "The history lecture",
        passage:
          "Iker's talk on the harvest food festival ran a full two minutes without a stumble. He covered the festival's founding in 1962, the three families who still ran the stalls, the dispute over the pastry recipe, and the mayor's traditional opening speech. His facts were accurate; he had read the festival's website twice the night before. He then closed with: 'So I went with friends and ate many things. It was very fun and unforgettable for me.' His tutor slid the card back across the table and asked him one thing: 'Where were you standing?'",
        question: "What had gone wrong with Iker's talk?",
        options: [
          { id: "a", text: "His grammar had broken down under the pressure of the long turn." },
          { id: "b", text: "He had researched the event instead of attending it, so his own experience never appeared." },
          { id: "c", text: "He had chosen an event that was too old-fashioned to interest an examiner." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "He had researched the event instead of attending it, so his own experience never appeared.",
          "The talk answered every question except the printed one — 'you attended': position, companions and personal impression were missing, and the explain line shrank to two borrowed adjectives pasted on at the end.",
          "(a) is contradicted by 'without a stumble'; (c) treats topic choice as the fault when the fault was the missing eyewitness — the tutor's question is about where he stood, not what year it is.",
        ),
        tags: ["speaking", "cue-cards", "events", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in a phrase, using this lesson's terminology.",
        question: "What name does this lesson give to the single image an events talk should build towards and end on?",
        acceptedAnswers: [
          "the peak moment",
          "the peak — the one moment the event is remembered by",
          "the peak moment of the event",
          "the peak, the held image the talk builds towards",
        ],
        keywords: ["peak", "moment"],
        hints: [],
        feedback: fb(
          "The peak moment — the one held image the whole timeline builds towards.",
          "Naming the peak in your note and giving it your slowest sentences is what separates a narrated event from a lived one: the peak is where atmosphere, cast and meaning all arrive together.",
          "Answers offering 'the ending' or 'the summary' confuse position with function — the peak is an image, not a stage of the clock.",
        ),
        tags: ["speaking", "cue-cards", "events"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Mid-talk, you catch yourself describing the fireworks before you have introduced your companions. What is the best repair?",
        hints: [],
        options: [
          { id: "a", text: "Start the whole talk again from the beginning so the order comes out clean." },
          { id: "b", text: "Use a light signpost — 'but I'm ahead of myself; before that, we were still…' — and walk back along the timeline." },
          { id: "c", text: "Carry on in the new order and hope the examiner does not notice the shuffle." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Use a light signpost — 'but I'm ahead of myself; before that, we were still…' — and walk back along the timeline.",
          "A spoken marker repairs the order and demonstrates coherence skill in the same breath: the examiner hears a narrator in control of their material, which is precisely what the criterion rewards.",
          "(a) burns a minute of clock and sound on repetition; (c) leaves the examiner to rebuild your timeline themselves, at cost to your coherence marks.",
        ),
        tags: ["speaking", "cue-cards", "events"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a neighbouring events card — speak it, do not type it.",
        hints: ["Stamp, cast, peak, meaning — four stages, ninety seconds minimum."],
        situation:
          "A related events card: 'Describe a celebration you took part in.' Prepare for up to one minute, then speak for one to two minutes, giving the celebration a date, a place, a cast and one peak image.",
        targetPhrases: [
          "The celebration I'm thinking of is…",
          "Everyone had gathered for…",
          "The moment I still picture is…",
        ],
        mustSay: ["celebration", "together", "because"],
        feedback: fb(
          "A one-to-two-minute celebration talk carrying a clear stamp, a named cast, one slowed-down peak image and a closing reason.",
          "Celebrations keep the timeline but raise the emotional temperature: the best versions find a small imperfect moment — a burnt cake, a lost ring — and explain why perfection was never the point of the day.",
        ),
        tags: ["speaking", "cue-cards", "events", "long-turn"],
      }),
    ],
    assignment: {
      title: "Stamping a second event",
      instructions:
        "Choose a different event you attended that left a mark on you, and write 40 to 160 words on two things: first, your four-corner note in fragments (identity, stamp, cast and props, meaning); second, the exact two sentences you would open with, making sure a listener learns the event's name, the date and the place before anything else.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Tell a friend or family member about your event for two minutes, then ask them afterwards to name the peak image they remember — if they cannot, your peak was told too fast.",
      "Watch ninety seconds of any recorded ceremony and write down the three moments a camera lingers on; those are the peak images professionals choose, and the same instinct works in speech.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-experiences",
    title: "Cue card family: Experiences",
    description:
      "One complete original Experiences card — an experience that pushed you out of your comfort zone — built on a three-part story arc, with the author's one-minute note, courage-and-struggle vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "keep the situation, the entry and the handling of an experience story clearly separate",
      "narrate difficulty honestly, including false starts and failures",
      "close an experience talk with two transferable lessons rather than a summary of events",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Experiences cards are the storyteller's cards: a first time, a challenge accepted reluctantly, a situation that found you despite your plans. What the family actually tests is your handling of narrative time — can you say what happened, how it happened to you, and what you did, without tangling the three? This lesson carries one complete experiences card about a night well outside the speaker's comfort zone, demonstrates the preparation minute, and shows why honest struggle outperforms heroic polish. The sample carries an estimate label and is a demonstration of shape — reciting it would undo everything it teaches.",
        beforeYouStart: [
          "You can mark the four lines of any cue card and know which line carries the most weight.",
          "You can tell a short anecdote in past tenses without switching to the present halfway through.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, worked here on an experiences card"],
          ["Task & question types", "A first-person narrative prompt with situation, entry and handling prompts plus an explain line about lessons; one minute to note, up to two to speak"],
          ["What is assessed", "Narrative tenses and time clauses, fluency through a story with a beginning and an end, vocabulary for emotion and effort, controlled pace"],
          ["Why this matters", "The experience arc is the master template for Part 1 anecdotes and Part 3 illustrations alike — master it once, use it everywhere"],
        ],
      },
      { type: "heading", text: "What an experiences card is really asking" },
      {
        type: "text",
        text: "The card's three prompts are not a list of topics but a three-act structure: act one establishes the situation and its discomfort, act two explains how a cautious person ended up inside it, act three shows the handling — the doing, the stumbling, the surviving. Candidates lose marks by collapsing the acts: the situation and the entry get merged into a single rushed sentence, and the handling gets compressed into 'so anyway I did it'. The examiners reading the band descriptors are listening for development, and development in a story means time spent inside the hard part. Discomfort, told honestly, is not a weakness in your answer; it is the entire value of it.",
      },
      { type: "heading", text: "The three-act arc, and the fourth beat that scores" },
      {
        type: "text",
        text: "After the three printed acts comes the unprinted-but-scored fourth beat: the reflection. 'What it taught you' is where an experience talk stops being a diary entry and becomes analysis, and the strongest answers extract two lessons of different kinds — one about the emotion (fear behaves in a certain way) and one about method (preparation, help, small steps). Two lessons, briefly generalised, fit comfortably in the final forty seconds and give the examiner exactly the evaluation the closing line exists to collect.",
      },
      {
        type: "steps",
        title: "Playing the experience in four acts",
        intro: "Three acts of story, one act of thought.",
        steps: [
          {
            title: "Act 1: Frame the discomfort",
            text: "Name the situation and immediately establish why it sat outside your comfort zone — what, specifically, you were afraid of losing: face, control, silence. The zone must be visible before the leaving of it can matter.",
            examples: [
              {
                english: "I'd kept my writing private for years, so reading it aloud felt like handing strangers my diary.",
                note: "One sentence makes the stakes personal and the discomfort measurable.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Act 2: Explain the entry",
            text: "The 'how you ended up in it' prompt is a gift: it wants a small story of pressure — signed up by a friend, guilt-tripped by family, trapped by your own promise. Honest entries (politeness, accident) are funnier and more convincing than heroic ones.",
            examples: [
              {
                english: "She asked me in front of the whole committee, which made refusing roughly impossible.",
                note: "Social pressure as the door into the experience: relatable, specific, gently comic.",
                domain: "life",
              },
            ],
          },
          {
            title: "Act 3: Handle it — warts and all",
            text: "Give the handling its full minute, and include the false starts: the cancellation email drafted twice, the three rewrites, the shaking hands. Handling shown honestly is character in action; handling claimed smoothly is a press release.",
            examples: [
              {
                english: "I nearly backed out twice, and I cut the story from eight minutes to four on the logic that a shorter disaster beats a longer one.",
                note: "Self-deprecating tactics make the speaker likeable and the talk developed.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Act 4: Teach double",
            text: "Close with two lessons of different types — one emotional truth, one practical method — each in a single sentence. Then, if seconds remain, add the proof that the lesson stuck: what you have done since.",
            examples: [
              {
                english: "The fear peaks before you begin, not during; and preparation isn't the opposite of courage — it's courage's foothold.",
                note: "An emotional law plus a reframe: two lessons that generalise beyond the one night.",
                domain: "study",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Experiences",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "This round's card asks for an experience; you may make notes for one minute before speaking for up to two."],
          ["Task line", "Describe an experience that pushed you out of your comfort zone"],
          ["Prompt 1", "what the situation was"],
          ["Prompt 2", "how you ended up in it"],
          ["Prompt 3", "how you handled it"],
          ["Explain line", "…and explain what it taught you"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "open-mic night · bookshop · 5-minute floor · my writing = private", "The situation plus its one-line danger: private work made public."],
          ["Corner two — the anchor", "Delphine short of readers · asked in front of everyone · politeness trap", "The entry story compressed to three fragments: who pushed, how, and why I couldn't refuse."],
          ["Corner three — the detail bank", "3 rewrites · nearly cancelled ×2 · half-speed practice · shaking hands · front-row nodder", "Five handling beats, ordered from worst to better, so the act builds its own small arc."],
          ["Corner four — the reason", "fear peaks before you start · preparation = courage's foothold · still nervous, don't mind", "Two lessons plus their proof, pre-filtered so the ending never has to improvise."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the uncomfortable hour",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["roped into", "Explain your entry without blame: 'I was roped into it by a friend with a clipboard'."],
          ["cold feet", "Name the wobble: 'I got cold feet twice and drafted a message to cancel'."],
          ["to back out", "The temptation you resisted: 'backing out would have been so easy that morning'."],
          ["my heart was in my mouth", "Physical fear told as a body story: 'from the moment she called my name, my heart was in my mouth'."],
          ["to take the floor", "The formal moment of beginning: 'and then it was time to take the floor'."],
          ["my mind went blank", "The classic comfort-zone event; even the possibility is worth a sentence of honest anticipation."],
          ["to steady yourself", "The turn: 'I gripped the pages, took one breath, and steadied myself'."],
          ["in hindsight", "Open the reflection act: 'in hindsight, the fear was worse than the thing itself'."],
          ["a turning point", "Claim the experience's larger meaning once, at the very end."],
        ],
      },
      {
        type: "example",
        title: "Six ways into a comfort-zone story",
        items: [
          {
            english: "I had never addressed more than four people at once, and the briefing pack said 'all staff, ninety people'.",
            note: "Numbers make the jump in scale — and therefore the discomfort — precise and believable.",
            domain: "work",
          },
          {
            english: "Corner two of my note: 'uncle's taxi, no translator, me with a phrasebook app at 40% battery'.",
            note: "Three fragments that contain an entire entry story — obligation, role, and rising stakes.",
            domain: "study",
          },
          {
            english: "The trouble with being the only swimmer in the family is that nobody warns you about the cold-water race in October.",
            note: "A wry one-liner that establishes both situation and entry in a single breath.",
            domain: "life",
          },
          {
            english: "I coped the way I cope with everything: badly at first, then with a list.",
            note: "A self-aware formula for the handling act — the listener instantly expects honest detail.",
            domain: "exam",
          },
          {
            english: "What I learned wasn't about presentations at all; it was that my voice stops shaking around minute three, every single time.",
            note: "A lesson specific enough to be yours, general enough to matter — the reflection act in one line.",
            domain: "exam",
          },
          {
            english: "My first solo dinner party for twelve: the turkey was late, two guests were vegan, and I learned that guests forgive everything but silence.",
            note: "Domestic stakes count as comfort zones too — and the failures supply the best material.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where experience talks go wrong" },
      {
        type: "mistakes",
        title: "Experiences-card traps corrected",
        items: [
          {
            wrong: "I chose a mountain expedition I had seen in a documentary, because it sounded impressive, and then couldn't supply a single first-person detail.",
            right: "Choose the modest experience you actually lived — the interview, the speech, the favour — where every detail belongs to you.",
            reason: "The card says 'you': borrowed adventures produce vague crowd-scenes where personal moments should be, and the development disappears with them.",
          },
          {
            wrong: "I described how the evening ended — everyone clapped, all fine — and stopped, thinking the outcome was the lesson.",
            right: "Treat the outcome as the doorway to the reflection: what the fear did, what you did about it, and what you now know that transfers.",
            reason: "The explain line asks what it taught you: outcomes are facts, lessons are analysis, and only analysis scores as evaluation.",
          },
          {
            wrong: "I said I stayed completely calm and handled everything perfectly, because admitting nerves felt like admitting weakness.",
            right: "Tell the shaking hands and the drafted escape messages — visible struggle is the evidence that the comfort zone was real.",
            reason: "Flawless handling of a comfort-zone card is self-contradicting, while honest wobbling gives the story its arc and the speaker their character.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The experiences card, end to end",
        reading: {
          text: "Read an experience talk as a budget: roughly thirty seconds to frame the situation and its threat, twenty to explain the entry, a full minute inside the handling, and the last stretch on lessons. The handling act is where fluency is truly tested — it demands past tenses, time clauses and the pacing of small events — which is why examiners listen hardest there. A warning travels with this family: the temptation to memorise a polished experience story from a preparation book is enormous, and the detection rate is high, because rehearsed stories lack the small contradictions (nearly cancelled, rewrote, recovered) that lived ones carry in every sentence.",
          task: "Draw the budget as four boxes and write your own fragment for each before attempting the tasks below.",
        },
        writing: {
          task: "Draft your own four-act experience talk against this card with the guide as scaffolding — then read the model once for its proportions and once for its honesty, and take only the shape into your own version, since copied sentences defeat the whole purpose of the family.",
          guide: [
            "Frame opener: 'The situation was…, and for me that meant…'",
            "Entry opener: 'How did I end up there? Well, …'",
            "Handling opener: 'At first I coped…, and then I…'",
            "Lesson opener: 'What it taught me was…, and also…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nSo I'd like to talk about the night I read one of my own short stories aloud at an open-mic evening in a bookshop — which doesn't sound that dramatic, but for me it was genuinely terrifying, because I'd kept my writing completely private until then.\n\nThe situation: a small independent bookshop near my university runs a monthly open night where anyone can take the floor for five minutes — poems, songs, stand-up, anything. My flatmate, Delphine, was one of the organisers, and one Tuesday she was short of readers and just… signed me up. Well — she asked me first, but she asked me in front of everyone, which made refusing much harder. So yes, I agreed, mostly out of politeness, and then spent four days regretting it.\n\nHow did I handle it? Badly at first. I rewrote the story three times, practised it in the bathroom mirror, and nearly emailed her to cancel twice. But then I did two things that actually helped. First, I cut the story from eight minutes down to four, because I figured a shorter disaster was better than a long one. Second, I practised reading it out loud at about half the speed that felt natural — someone told me nervous people speed up, and they were right.\n\nOn the night my hands shook for the first page — paragraph, really — and my voice did that strange thing where you can hear it wobbling. But the audience was kind, a man in the front row nodded at the exact right moment, and by the last page I was enjoying it.\n\nWhat did it teach me? Two things. One, that the fear peaks before you start, not during — which now seems obvious, but I had to live it to believe it. And two, that preparation isn't the opposite of courage; it's what lets courage get a foothold. I've read at that night four times since, and each time I'm still nervous. I've just stopped minding.",
        },
        listening: {
          script:
            "Tutor: Your talk had a situation, it had an entry, and then — and this is the part we have to fix — it had a miracle. You said: 'I took a deep breath, and after that everything was fine.' Everything was fine? For the person who told me last week they couldn't order coffee in a second language? The handling act is one sentence long, and it's the act the examiner weighs. Where did you stand? What went through your head at the first question? What did you get wrong, and how did you climb out? Give me the version with the mistake in it — that's the version that scores.",
          task: "Write down the act the tutor says is missing in substance, and the two questions she uses to rebuild it.",
        },
        speaking: {
          task: "Run this card end to end for an experience of your own: minute of notes, one to two recorded minutes of speech, then the checklist — and listen specifically for the sentence where you claimed to be calm.",
          frames: [
            "The experience I keep coming back to is…",
            "I ended up in it because…",
            "Honestly, at first I…",
            "Looking back, it taught me…",
          ],
          checklist: [
            "Can a listener tell the situation, the entry and the handling apart?",
            "Did my handling act include at least one thing that went badly?",
            "Do I finish with two lessons — one about feelings, one about method?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, act by act",
        headers: ["Act of the talk", "What the sample does there"],
        rows: [
          ["The framing", "Names the open-mic night and immediately prices the discomfort: private writing, made public — the comfort zone is visible within two sentences."],
          ["The entry", "Delphine's clipboard and the public ask give the entry a small, believable mechanism, with politeness as the trap — more convincing than any heroic choice."],
          ["The handling", "Five beats of honest coping — rewrites, near-cancellation, the half-speed trick, shaking hands, the front-row nodder — build a miniature arc of their own."],
          ["The turning point", "The moment of enjoyment arrives late and briefly, which makes it credible; no miracle recovery is claimed anywhere."],
          ["The reflection", "Two lessons of different kinds — fear's timing, and preparation as courage's foothold — followed by the proof: four further readings, nerves intact."],
          ["The spoken surface", "Pauses marked with dashes, one self-correction ('page — paragraph, really'), and short sentences where the strain belongs, so the delivery matches the story."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Four acts in the card's own order — frame, entry, handling, lesson — each launched by a spoken signpost so the structure is audible."],
          ["Grammar", "Past simple for events, past perfect once ('had kept my writing private') to set the backstory, and a generalising present for the lessons — three tenses, each doing its own job."],
          ["Vocabulary", "Emotion is carried by verbs and nouns — wobbling, foothold, shorter disaster — rather than by tired adjective stacks."],
          ["Coherence", "The fear motif runs through every act: dreaded, mishandled, survived, understood — one thread from first sentence to last."],
          ["Task fulfilment", "The three prompts each own an act, and the explain line receives a two-lesson reflection plus evidence that the learning stuck."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["Your first day teaching a class of adults", "Raises the stakes to professional authority: the entry is a colleague's illness, the handling is a lesson plan held 'like a shield', and the lesson is about pretending less."],
          ["Acting as impromptu translator for a relative in hospital", "Adds responsibility to fear: the situation is linguistic, the handling is triage between two languages, and the reflection centres on what fluency really means."],
          ["A solo hike that went wrong after noon", "Swaps social fear for physical self-reliance: wrong turns, a dying phone, and a lesson about preparation that arrives with mud on it."],
          ["Cooking a first holiday dinner for twelve relatives", "Keeps everything domestic and comic: the zone is hospitality, the handling is triage of ovens and guests, and the lesson is that hosts are forgiven anything but panic."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Should schools deliberately push students out of their comfort zones?' — take a side and give one school-year example."],
          ["Rounding-off question two", "'Why do some people pay to do frightening things, like cold-water swimming?' — offer two contrasting motives."],
          ["Practice card A", "'Describe a time you tried something completely new' — full cycle; watch that the entry act survives."],
          ["Practice card B", "'Describe a difficult decision you made' — borrow the four-act arc and notice what the decision card adds: options."],
          ["Practice card C", "'Describe a time you helped a stranger' — practise the reflection act on someone else's benefit rather than your own."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Pick the experience that gives you the most handling material, then fill the corners: threat, entry mechanism, five handling beats, two lessons."],
          ["While the clock runs", "Watch your act lengths: if the handling act passes a minute, you are borrowing from the reflection — close it and move to the lessons."],
          ["If you are stuck", "Return to the handling beats you have not used; the smallest one (a shaking hand, a deep breath) can carry a full sentence of honest detail."],
          ["Final minutes", "Deliver the two lessons clearly separated — 'one thing… and another…' — and, if the clock allows, one line of proof from your life since."],
        ],
      },
      {
        type: "summary",
        points: [
          "Experiences cards print a three-act structure — situation, entry, handling — and hide the scored fourth act in the explain line: the lessons.",
          "The entry prompt is a story of pressure, not a biography: who pushed you, and why you couldn't refuse.",
          "Handling earns its full minute, and honest struggle is the strongest material the family offers; flawless coping contradicts the card.",
          "Close with two transferable lessons of different kinds, one emotional and one practical, each in a single sentence.",
          "Use the sample's shape and never its sentences — a memorised experience story is the most easily detected of all, because lived stories carry contradictions and borrowed ones don't.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft lessons underneath this family.",
        items: [
          {
            question: "Before planning any talk, what does the craft chapter tell you to count on the card?",
            options: [
              "The number of words you are expected to say",
              "The deliverables: every prompt line plus the explain line is one scored item",
              "The number of sentences per prompt",
            ],
            correctIndex: 1,
            explanation: "Counting the lines converts a card into a checklist of deliverables, and every uncounted line is a mark quietly left on the table.",
            from: "Identifying key requirements",
          },
          {
            question: "You pass the one-minute mark with time left in the long turn. What is the taught instinct?",
            options: [
              "Stop early, since a minute proves you can speak",
              "Keep going into your remaining prompts and the explain line until stopped",
              "Repeat your opening for safety until the examiner interrupts",
            ],
            correctIndex: 1,
            explanation: "The long turn runs one to two minutes, and stopping at one surrender the explain line's time — the strongest candidates are stopped, not finished.",
            from: "Speaking at length",
          },
          {
            question: "What keeps a talk continuous while you move between story stages?",
            options: [
              "Long silences that show you are thinking",
              "Small spoken signposts that announce each new stage",
              "Speaking faster so gaps cannot open",
            ],
            correctIndex: 1,
            explanation: "Signposts — 'so how did I end up there?' — hold the sound together and show the examiner your structure as it happens.",
            from: "Maintaining continuity",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. The explain line of this card asks what the experience taught you. What content fills it best?",
        hints: ["One lesson about feelings, one about method — that combination covers both halves of learning."],
        options: [
          { id: "a", text: "A tidy recap of how the experience ended and who congratulated you." },
          { id: "b", text: "Two transferable lessons of different kinds — one about how the emotion behaved, one about what you actually did to cope." },
          { id: "c", text: "A thank-you to the person who pushed you into the situation." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two transferable lessons of different kinds — one about how the emotion behaved, one about what you actually did to cope.",
          "The closing line wants analysis, and pairing an emotional insight with a practical one shows two modes of thinking in the space where examiners collect their evaluation evidence.",
          "(a) recaps events rather than extracting meaning; (c) is gracious but answers a question the card never printed.",
        ),
        tags: ["speaking", "cue-cards", "experiences"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about Nadia's practice talk and answer the question.",
        hints: ["If everything went smoothly, was she ever really outside her comfort zone?"],
        passageTitle: "The flawless version",
        passage:
          "Nadia's experience talk described her first job interview: the card was about being pushed out of her comfort zone, and she delivered two confident minutes about arriving early, answering every question well, being offered the job on the spot, and feeling 'great about the whole thing'. Her language was accurate and her structure followed the prompts. At the end her tutor wrote one question on the card: 'Where was the zone?' and underlined it twice. Nadia protested that the interview had really gone well. 'Then pick the one before it,' the tutor said, 'the one you told me about over coffee.'",
        question: "What was the tutor's objection?",
        options: [
          { id: "a", text: "Nadia's grammar and vocabulary had failed her during the talk." },
          { id: "b", text: "A story with no discomfort in it cannot answer a card about leaving a comfort zone — and honesty supplies better material anyway." },
          { id: "c", text: "Nadia should have talked about the job itself rather than the interview." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A story with no discomfort in it cannot answer a card about leaving a comfort zone — and honesty supplies better material anyway.",
          "The card's premise is struggle; a flawless account contradicts it and starves the handling act of its content, which is why the tutor reaches for the earlier, wobblier interview Nadia had mentioned over coffee.",
          "(a) is contradicted by the passage's 'accurate' judgement; (c) changes the topic when the problem was the missing difficulty, not the interview framing.",
        ),
        tags: ["speaking", "cue-cards", "experiences", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one sentence using the lesson's act names.",
        question: "After the situation act, which two acts does this lesson teach for an experience talk, and what does each contain?",
        acceptedAnswers: [
          "the entry stage — how you ended up in it — and then the handling stage",
          "entry: how you got into it, and handling: how you dealt with it",
          "the entry (how you were pulled in) and the handling (what you actually did)",
          "entry and handling — how you ended up there, and how you coped once inside",
        ],
        keywords: ["entry", "handling"],
        hints: [],
        feedback: fb(
          "The entry act — how you ended up in it — followed by the handling act: what you did, including what went badly.",
          "Naming the acts keeps them from collapsing into each other: the entry carries the small story of pressure, and the handling carries the minute of honest coping that the examiner weighs most.",
          "Answers that jump from situation to lessons have skipped the middle of the card — precisely the acts the prompts print.",
        ),
        tags: ["speaking", "cue-cards", "experiences"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. You have two candidate experiences: a polar trek you watched a documentary about, and a five-minute speech you gave while shaking. Which should the card get, and why?",
        hints: [],
        options: [
          { id: "a", text: "The polar trek — impressive topics raise the ceiling of your possible band." },
          { id: "b", text: "The speech — a modest lived experience supplies first-person detail that a watched adventure cannot." },
          { id: "c", text: "Neither — comfort-zone cards should be answered with imaginary experiences, which are easier to control." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The speech — a modest lived experience supplies first-person detail that a watched adventure cannot.",
          "Every act of this family runs on personal detail: your shaking hands, your half-speed rehearsal, your recovery — material a documentary cannot lend you, however grand its scenery.",
          "(a) confuses topic glamour with scoring, which runs on development; (c) invites vague, uncheckable storytelling exactly where the criteria reward concrete experience.",
        ),
        tags: ["speaking", "cue-cards", "experiences"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a neighbouring experiences card — out loud, with the clock running.",
        hints: ["Frame, entry, handling, lesson — and keep one failure in the handling act."],
        situation:
          "A related experiences card: 'Describe a time you had to do something you were afraid of.' Prepare for up to one minute, then speak for one to two minutes, ending with what the experience left you with.",
        targetPhrases: [
          "What I was afraid of was…",
          "There was no way out, because…",
          "What I learned from it was…",
        ],
        mustSay: ["afraid", "nervous", "because"],
        feedback: fb(
          "A one-to-two-minute talk that names the fear, explains the trap that kept you in it, copes honestly, and closes on what you now know.",
          "Fear cards reward specificity about the body — where the fear lived, when it peaked, when it faded — because physical detail is the most believable evidence a speaker can offer.",
        ),
        tags: ["speaking", "cue-cards", "experiences", "long-turn"],
      }),
    ],
    assignment: {
      title: "Another comfort zone, another note",
      instructions:
        "Choose a second experience that genuinely pushed you — an occasion with visible discomfort in it — and write 40 to 160 words: first the four-corner note as fragments (threat, entry mechanism, handling beats, two lessons), then the exact sentence you would use to explain how you ended up in the situation, naming who or what applied the pressure.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Record your talk, then transcribe only the handling act and count its beats; if there are fewer than three, your story is smoother than your life and needs the wobble put back in.",
      "Ask someone who was present at your experience what they remember of it, and steal one detail they remember that you had forgotten — witnesses are the best source of concrete material.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-objects",
    title: "Cue card family: Objects",
    description:
      "One complete original Objects card — an object that has been in your family for a long time — taught through the three lives of an heirloom, with the author's one-minute note, heirloom vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "give a family object a body: material, moving parts and one sensory signature",
      "date an heirloom with a year and a count of generations instead of vague duration",
      "tell the transfer story and close on the object's double meaning for the family",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Objects cards ask you to make a thing matter to a stranger in two minutes: a watch, a machine, a notebook, a chair with a dent in it. The family is a gift to candidates who own ordinary houses, because value on this card has nothing to do with price — a plastic flower pot with a real story outperforms an invented dynasty vase every single time. This lesson carries one complete objects card, a preparation minute written as it happened, and a sample response whose band-style label is an educational estimate only. Borrow the anatomy of the sample, not its wording; an heirloom talk recited from a screen sounds exactly like that.",
        beforeYouStart: [
          "You can plan a two-minute talk with four note corners inside a minute.",
          "You can describe physical things with material, colour and part vocabulary rather than only 'beautiful' and 'old'.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, delivered this time on an objects card"],
          ["Task & question types", "A possession prompt with identity, longevity and transfer prompts plus an explain line about family meaning; one minute of notes, up to two of speech"],
          ["What is assessed", "Concrete description vocabulary, tense control across generations, narrative of inheritance, and the depth of the closing evaluation"],
          ["Why this matters", "Describing objects precisely supports Part 1 home and possession questions as well as every future heirloom card"],
        ],
      },
      { type: "heading", text: "What an objects card is really asking" },
      {
        type: "text",
        text: "Every family object lives three lives, and a strong objects talk gives each one a home. The first life is its body: the material it is made of, its colour, its moving parts, the one sense it speaks through — the smell of oiled wood, the sound of a mechanism. The second life is its history inside the family: when it arrived, whose hands it passed through, what work it actually did. The third life is its meaning: what it stands for now, sitting in a hallway or on a shelf. Talks fail by living in only one — all body becomes a catalogue entry, all history becomes a lecture, and meaning without body is a greeting card.",
      },
      { type: "heading", text: "The heirloom method" },
      {
        type: "text",
        text: "The method runs body, dates, transfer, meaning — in that order, because the listener needs to hold the object before they can care who held it. The dating move deserves special practice: vague duration ('a very long time') scores nothing, while one year plus a generation count ('she brought it in 1953, and it has passed through three pairs of hands') scores structure, precision and a sense of family all at once. The transfer story is the card's gift to storytellers — someone claimed it, nobody wanted it, it nearly went to a stranger — and the meaning close should always carry both halves: the work the object did, and what it stands for now.",
      },
      {
        type: "steps",
        title: "Giving an heirloom its talk",
        intro: "Four stations, from touch to meaning.",
        steps: [
          {
            title: "Station 1: Give it a body",
            text: "Spend two sentences on what the object is like to stand next to: material, colour, weight, one moving part, and one sense — usually sound or smell. A body lets the examiner imagine the thing; without it, everything after is abstract.",
            examples: [
              {
                english: "Cast iron, black with gold lettering, and a foot pedal that rocks like a seesaw — it still works.",
                note: "Material, colour, a moving part and a function: four facts that build an image without a single adjective of praise.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Station 2: Date it in generations",
            text: "Anchor the object in time with a year and a chain of hands: when it entered the family, and how many generations it has crossed since. Precision here is free, and vagueness is expensive.",
            examples: [
              {
                english: "She brought it with her in 1953, and it has been passed down through three generations since.",
                note: "One year plus a count of hands: the longevity prompt answered with structure.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Station 3: Tell the transfer story",
            text: "The 'how it came to you' prompt wants a small scene from the object's journey: the estate afternoon, the relative who claimed it as a joke, the van it barely fitted into. Inheritance stories are miniature events — tell them like one.",
            examples: [
              {
                english: "Nobody wanted it because it weighs as much as a person, so my mother claimed it half as a joke — and a year later she was hemming curtains on it.",
                note: "The joke that turned serious: a two-beat transfer story with a built-in turning point.",
                domain: "life",
              },
            ],
          },
          {
            title: "Station 4: Close on double meaning",
            text: "The explain line asks why the object matters to the family, and the strongest answers give two reasons of different kinds: the practical history (what it made, mended or survived) and the symbolic weight (what it stands for, and for whom).",
            examples: [
              {
                english: "It made school uniforms and two wedding dresses — but really it's proof of where the family started: one woman, one machine.",
                note: "The work and the symbol, named in one breath — the explain line answered twice over.",
                domain: "study",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Objects",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "The card you have drawn asks for a family object; your preparation minute runs from the moment you finish reading it."],
          ["Task line", "Describe an object that has been in your family for a long time"],
          ["Prompt 1", "what it is"],
          ["Prompt 2", "how long it has been in the family"],
          ["Prompt 3", "how it came to you"],
          ["Explain line", "…and explain why it matters to your family"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "treadle sewing machine · black cast iron · gold lettering · pedal like a seesaw", "The body of the object, drawn as facts a listener can see and feel."],
          ["Corner two — the anchor", "1953, great-grandmother's move to the city · 3 generations since", "A year and a chain of hands: the longevity prompt pre-answered with numbers."],
          ["Corner three — the detail bank", "aunts' polite fight · nobody wanted the weight · mum claimed it as a joke · curtain-hemming a year later", "The transfer story in four beats, ready to expand into the middle of the talk."],
          ["Corner four — the reason", "made uniforms + 2 wedding dresses · seamstress's living · whirring = childhood sound · already agreed it passes to me", "Work, symbol, memory and future: four pieces of meaning so the close can choose the best two."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the things families keep",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["an heirloom", "The family's own word for the object: 'it's the closest thing we have to an heirloom'."],
          ["to hand down", "The chain of hands: 'it was handed down from her to my grandmother, then to my parents'."],
          ["worn smooth", "Age told through touch: 'the handle is worn smooth where three generations gripped it'."],
          ["craftsmanship", "Respect without price talk: 'the craftsmanship is a level you just don't see now'."],
          ["in working order", "Function as a wonder: 'against all logic, it's still in working order'."],
          ["sentimental value", "Name the currency honestly: 'financially it's worth nothing; the sentimental value is the whole point'."],
          ["to treasure", "A family's behaviour rather than your own: 'my grandmother treasured it more than her jewellery'."],
          ["a link to the past", "The symbol said plainly, once, in the final third."],
          ["to restore", "Care as evidence of feeling: 'my father spent one winter restoring the casing'."],
        ],
      },
      {
        type: "example",
        title: "Six objects and the sentences they earned",
        items: [
          {
            english: "My grandfather's pocket watch is small enough to close your hand around and heavy enough to surprise you every time.",
            note: "Weight and size in one contrast sentence — a body without a brochure.",
            domain: "life",
          },
          {
            english: "Corner two of my note: '1978, grandfather's workshop, still sharp after two owners'.",
            note: "A dated anchor costs six words and returns precision, era and respect in exchange.",
            domain: "study",
          },
          {
            english: "The recipe notebook has butter stains on the sponge-cake page, which is how you know that page is the truth.",
            note: "Damage as evidence of use — stains outperform superlatives on any objects card.",
            domain: "exam",
          },
          {
            english: "When the office closed, the only thing my father took was the brass desk lamp nobody else bid on.",
            note: "A workplace transfer story: objects with careers answer this family too.",
            domain: "work",
          },
          {
            english: "It came to me by accident — I was the only cousin with a flat on the ground floor.",
            note: "An unglamorous inheritance reason, told plainly, is more believable than any solemn ceremony.",
            domain: "exam",
          },
          {
            english: "The cradle has held every baby in my mother's family since the sixties, including me and, last spring, my nephew.",
            note: "One object, two generations of occupants, one sentence — continuity made audible.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where objects talks go wrong" },
      {
        type: "mistakes",
        title: "Objects-card traps corrected",
        items: [
          {
            wrong: "I gave the examiner a museum label — 'a brass telescope, approximately forty centimetres, antique, very valuable' — and never said who held it.",
            right: "Follow the label with the hands: whose it was, when it arrived, and the afternoon it nearly left the family.",
            reason: "The card asks about your family's object, not the object in general; provenance and transfer are the printed prompts a museum label leaves untouched.",
          },
          {
            wrong: "I invented a dynastic jade piece because our real objects seemed too ordinary, and then had no memories to attach to it.",
            right: "Take the dented tin, the wooden spoon, the toolbox — anything with a real story attached — and let the story carry the glamour.",
            reason: "Meaning cannot be faked on this card: the explain line needs actual memories, and invented heirlooms produce invented voices.",
          },
          {
            wrong: "I spent most of the talk on the 1950s — the economy, the fashion, the decade in general — because the object 'came from that era'.",
            right: "Give the era one sentence of background and keep the remaining time inside the family, where the scored prompts actually live.",
            reason: "Historical context is scenery; the card's prompts are all family prompts, and scenery has a way of eating them.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The objects card, end to end",
        reading: {
          text: "An objects talk is scored along the three lives: does the object have a body the listener can picture, a dated history inside the family, and a meaning that is explained rather than assumed? Between the second and third life sits the transfer story — the small scene in which the object reached you — and examiners consistently report it as the most under-used stretch of material in this family. One more reading matters: objects talks are the family most often memorised, because candidates rehearse a 'valuable possession' script in advance. The defence is ownership — describe the thing in your own hallway, with its dents included, and the talk cannot be anyone else's.",
          task: "List the three lives and check that your chosen object can live all of them within two minutes.",
        },
        writing: {
          task: "Write your own objects talk against this card, station by station, with the guide for each opening. Compare your draft with the model on proportions only — the model's words belong to its author's family, and examiners hear borrowed heirlooms immediately.",
          guide: [
            "Body opener: 'It's a…, made of…, with…'",
            "Dating opener: 'It entered the family in…, and since then it has…'",
            "Transfer opener: 'How it came to me is actually a small story…'",
            "Meaning opener: 'It matters to us partly because…, but mostly because…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nThe object I've chosen is my great-grandmother's treadle sewing machine — one of those old black cast-iron ones with gold lettering on the arm and a foot pedal that rocks like a seesaw. It lives in my parents' hallway now, under the stairs, and it still works.\n\nHow long has it been in the family? Well, my great-grandmother brought it with her in 1953 when she moved to the city after marrying my great-grandfather, so that's seventy-odd years, and it's been passed down through three generations since — her, then my grandmother, now my parents.\n\nAs for how it came to me — or to our branch of the family — there's a small story. When my grandmother's house was sold, the aunts and uncles did the usual polite fighting over the good furniture, and nobody wanted the machine because it's enormously heavy; you need two people and a van. My mother claimed it almost as a joke. And then, about a year later, she was hemming curtains on it the way her grandmother used to, and it stopped being a joke.\n\nIt matters to my family for a few reasons. The practical one is that it made things: school uniforms for my grandmother and her sisters, my mother's — actually my mother and my aunt's — wedding dresses, Halloween costumes for me. It's a working object, not a display one; we've never just looked at it. But the deeper reason is what it stands for: my great-grandmother earned her living on that machine as a seamstress, so for us it's proof of where the family started — one woman, one machine, everything from there. And honestly, the sound of it is the sound of my childhood: that soft whirring from behind the sofa while I was supposed to be doing homework. It's already been agreed — gently, not formally — that the machine will pass to me one day, and I've already chosen the corner where it'll sit.",
        },
        listening: {
          script:
            "Student: I described my grandfather's wristwatch and the tutor wrote 'no body' on the sheet. What does that even mean?\nCoach: It means you told her the watch exists, but not what it's like to hold. Did you say how heavy it is?\nStudent: I said it's very precious.\nCoach: Precious is a price tag. Weight is a body. Tell her the strap is worn thin where your grandfather's wrist bent it for forty years, and that the ticking is louder than you'd expect for something so small.\nStudent: And that scores better than 'precious'?\nCoach: Every time. On objects cards, detail is the currency — she can't score an adjective she's heard a hundred times today.",
          task: "Write down the coach's definition of 'a body' and the two replacements he suggests for 'precious'.",
        },
        speaking: {
          task: "Take this card through the whole cycle for an object in your own home: a minute of notes, a recorded talk of one to two minutes, then the checklist — and this time, listen for the transfer story.",
          frames: [
            "The thing I want to describe is…, which…",
            "It entered our family when…, and since then…",
            "How it reached me is…",
            "For my family it stands for…",
          ],
          checklist: [
            "Did my first two sentences give the object a body — material, part, one sense?",
            "Did I date it with a year and a chain of hands rather than 'a long time'?",
            "Did the transfer story arrive as a scene, with at least one person in it?",
            "Did I close with both the work it did and what it stands for?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, station by station",
        headers: ["Station of the talk", "What the sample does there"],
        rows: [
          ["The body", "Cast iron, gold lettering, a seesaw pedal and one location — four facts and a function, so the listener is standing in the hallway by sentence two."],
          ["The dating", "A wedding-year entry (1953), an honest 'seventy-odd years', and a chain of three hands: the longevity prompt answered with numbers, not vibes."],
          ["The transfer story", "The aunts' polite fight, the weight joke, and the curtain-hemming turn a year later — inheritance told as a two-beat story with its own small arc."],
          ["The meaning close", "Practical history (uniforms, two wedding dresses, costumes) and symbol (one woman, one machine) are named separately, then fused into one sentence of family proof."],
          ["The memory signature", "The whirring behind the sofa gives the object a sound and the speaker a childhood — sensory evidence that cannot be borrowed."],
          ["The spoken surface", "One self-correction ('my mother's — actually my mother and my aunt's — wedding dresses'), a spoken rhetorical question, and gentle intensifiers kept well under control."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Body, dates, transfer, meaning — the card's order — with each station announced so the examiner hears the prompts being served."],
          ["Grammar", "Present simple for the object's existence, past simple for its journey, present perfect for the chain of hands — three tenses mapping three kinds of time."],
          ["Vocabulary", "The language of making and keeping — hemming, seamstress, passed down — replaces price talk entirely, which suits a family card."],
          ["Coherence", "The 'joke that stopped being a joke' motif links the transfer story to the meaning close, and the whirring sound links the present hallway to the speaker's childhood."],
          ["Task fulfilment", "Every printed line receives a dedicated stretch, and the extension is answered twice — in work and in symbol — before the final sentence looks to the future."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["A handwritten recipe notebook", "Brings paper, ink and butter stains; the body is fragile, the transfer is a kitchen argument, and the meaning is taste memory and the women who wrote it."],
          ["A brass compass from a seafaring great-uncle", "Adds adventure vocabulary and a travel register; the transfer happens at a dockside, and the meaning is direction — literal and otherwise."],
          ["A wooden cradle that has held every baby since the sixties", "Centres continuity: the body is dented, the dating counts occupants as well as years, and the meaning is the family's shape itself."],
          ["A toolbox inherited from a trade no longer practised", "Keeps a working-class register: rust, labels in faded pencil, and a meaning close about hands and skills skipped by the next generation."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do families keep fewer things for sentimental reasons than they used to?' — argue one side with an example from your own home."],
          ["Rounding-off question two", "'Why do people keep objects that have no practical use at all?' — give two reasons, one psychological."],
          ["Practice card A", "'Describe something old that you or your family own' — full cycle; keep the era background to one sentence."],
          ["Practice card B", "'Describe a gift you received that you still value' — notice how the giver takes over the transfer station."],
          ["Practice card C", "'Describe a photograph that is special to you' — an image instead of a thing: the body station becomes framing, light and moment."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Pick the object with the most hands in its story, then fill the corners: body facts, a year plus generations, transfer beats, work and symbol."],
          ["While the clock runs", "Keep the era out of it: if you catch yourself narrating the decade, pull the talk back to the family with 'but in our house…'."],
          ["If you are stuck", "Return to the body — the object's weight, sound or smell can always carry another sentence, and sensory detail never runs dry."],
          ["Final minutes", "Name the two reasons — the work and the symbol — and if seconds remain, one line about the object's next home."],
        ],
      },
      {
        type: "summary",
        points: [
          "A family object lives three lives in a talk: its body, its history inside the family, and its meaning — give each a home.",
          "Date heirlooms with a year and a count of hands; vague duration is the cheapest thing an objects talk can say.",
          "The transfer story is a miniature event: someone claimed it, nobody wanted it, it nearly left — tell it as a scene.",
          "Close on double meaning: what the object made or mended, and what it stands for now.",
          "Choose your own dented, unglamorous, real object and describe it in your own words — a rehearsed possession script is transparent, and an honest tin with a story outranks it every time.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft chapter beneath this family.",
        items: [
          {
            question: "Which corner of the note is reserved for the explain line's material?",
            options: [
              "Corner one, so it is spoken first",
              "Corner four, so evaluation can never be squeezed out by story",
              "It rotates, depending on the card",
            ],
            correctIndex: 1,
            explanation: "Corner four belongs to the reason: storing it last in the note protects its airtime, because stories expand and reasons get abandoned.",
            from: "Effective note-taking",
          },
          {
            question: "What does the explain line of a cue card convert a talk's content into?",
            options: [
              "Pure description, in greater detail",
              "Evaluation — the speaker's judgement about why the subject matters",
              "A summary of the three prompts",
            ],
            correctIndex: 1,
            explanation: "The closing line turns facts into worth: description fills the prompts, but the explain line is where the band's upper levels listen hardest.",
            from: "Understanding cue cards",
          },
          {
            question: "You draw an objects card and can only think of things you own that feel 'boring'. What is the taught response?",
            options: [
              "Invent a more impressive object on the spot",
              "Take the nearest honest object and excavate its story — transfer, hands, meaning",
              "Ask the examiner whether another card is available",
            ],
            correctIndex: 1,
            explanation: "The craft chapter trains excavation over invention: ordinary objects carry the transfer stories and memories that the criteria actually score, and honesty never runs dry.",
            from: "Handling unfamiliar topics",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. Your tutor says your watch talk 'has no body'. What is the most useful interpretation of that note?",
        hints: ["Think about what your senses could report about the watch, not what it costs."],
        options: [
          { id: "a", text: "The talk needs more emotional language about how much the watch means to you." },
          { id: "b", text: "The talk needs physical description: weight, material, wear and the sound it makes — what it is like to hold." },
          { id: "c", text: "The talk needs a longer history of watchmaking as a craft." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The talk needs physical description: weight, material, wear and the sound it makes — what it is like to hold.",
          "A body lets the examiner stand next to the object, and sensory facts are inexhaustible in a way adjectives are not — 'worn thin where his wrist bent it' paints more than 'precious' ever could.",
          "(a) adds feeling to an object the listener still cannot picture; (c) swaps the family's object for an encyclopaedia's, exactly the lecture trap this family punishes.",
        ),
        tags: ["speaking", "cue-cards", "objects"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's choice of object and answer the question.",
        hints: ["Ask what the explain line needed from the object: provenance, or price?"]
        ,
        passageTitle: "The dynasty vase",
        passage:
          "For his objects card, Ravi described 'a Ming vase from the fifteenth century, worth a great deal of money, kept in a glass case'. He spoke carefully for the full two minutes: the dynasty, the porcelain technique, the auction estimates. When his partner asked how long it had been in his family, he said 'many, many generations' without naming one. Asked how it came to him, he said it was 'inherited, in the usual way'. His tutor then described her own talk on her grandmother's dented aluminium rice pot — bought second-hand, dented on a bus, and used at every family wedding since 1979 — and asked Ravi whose talk he would rather listen to.",
        question: "What point is the tutor making with her rice pot?",
        options: [
          { id: "a", text: "That kitchen objects are always better topics than antiques." },
          { id: "b", text: "That a modest object with real dates, hands and stories outperforms a glamorous object with no family content to feed the prompts." },
          { id: "c", text: "That Ravi's pronunciation suffered because he chose a Chinese topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "That a modest object with real dates, hands and stories outperforms a glamorous object with no family content to feed the prompts.",
          "Every printed prompt after the first demands family material — duration in generations, a transfer scene, a reason it matters — and the vase supplied none of them, while the rice pot supplies all three plus a bus.",
          "(a) overcorrects — the lesson is story over glamour, not kitchens over porcelain; (c) invents a language problem the passage never mentions, and topic nationality has no effect on any criterion.",
        ),
        tags: ["speaking", "cue-cards", "objects", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one sentence, using the lesson's own terms.",
        question: "According to this lesson, what three lives does a family object live inside an objects talk?",
        acceptedAnswers: [
          "its physical body, its history of use in the family, and its meaning",
          "the body — what it's like to hold — the history of whose hands it passed through, and its meaning",
          "its body, its family history, and the meaning it carries now",
          "the body, the history of the object inside the family, and its symbolic meaning",
        ],
        keywords: ["body", "meaning"],
        hints: [],
        feedback: fb(
          "The body, the history, and the meaning — one life for each stretch of the talk.",
          "Splitting the object into three lives guarantees every printed prompt finds content: the body serves the first prompt, the history serves the longevity and transfer prompts, and the meaning answers the explain line.",
          "Answers that name only description and importance have merged the three lives, which is how talks turn into either catalogues or greeting cards.",
        ),
        tags: ["speaking", "cue-cards", "objects"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which is the strongest way to express how long an object has been in the family?",
        hints: [],
        options: [
          { id: "a", text: "'A very, very long time — longer than anyone can remember.'" },
          { id: "b", text: "'It entered the family in 1953 and has passed through three pairs of hands since.'" },
          { id: "c", text: "'The object itself was manufactured sometime in the early twentieth century.'" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'It entered the family in 1953 and has passed through three pairs of hands since.'",
          "A year plus a chain of hands answers the printed prompt with precision and, in the same breath, sketches a family structure — vague duration and manufacturing dates both avoid the actual question.",
          "(a) is the vagueness that scores nothing; (c) dates the object's making rather than its life with your family, which is a different — and unprinted — question.",
        ),
        tags: ["speaking", "cue-cards", "objects"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a cousin of this card — spoken, timed, honest.",
        hints: ["Body, dates, transfer, meaning — in that order, with one sense included in the body."]
        ,
        situation:
          "A related objects card: 'Describe something old that you or your family own.' Prepare for up to one minute, then speak for one to two minutes, giving the object a body, a dated family history, a transfer moment and a closing meaning.",
        targetPhrases: [
          "The oldest thing we own is…",
          "It's been with us since…",
          "What it means to us is…",
        ],
        mustSay: ["old", "family", "because"],
        feedback: fb(
          "A one-to-two-minute talk in which the object can be pictured, its family years are counted, and its meaning is explained rather than assumed.",
          "Old-things cards live or die on specificity: a dated arrival, a named pair of hands and one sensory detail will outscore a museum's worth of vague admiration.",
        ),
        tags: ["speaking", "cue-cards", "objects", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second heirloom, noted and dated",
      instructions:
        "Pick a different object that belongs to your family's story — dents welcome — and write 40 to 160 words: first, your four-corner note as fragments (body facts, year plus generations, transfer beats, work and symbol); second, the exact sentence you would use to date the object, naming the year it entered the family and the hands it has passed through since.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Go and physically hold the object you described, then add one sensory fact to your talk that you could not have remembered without touching it.",
      "Ask the oldest person available in your family one question about the object — who wanted it, who refused it — and add their answer to your transfer station.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-activities",
    title: "Cue card family: Activities",
    description:
      "One complete original Activities card — an activity you do regularly to keep fit — taught as the biography of a habit, with the author's one-minute note, fitness vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "name an activity precisely enough that its details can carry two minutes",
      "give a habit a founding story with a date, a person and a reason",
      "close on effects split between body and mind, with one specific benefit each",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Activities cards ask for the biography of a habit: what you do, how it found you, what it actually involves, and what it does to you. They look like the easiest family in the pack and are quietly one of the hardest, because a routine lived for years resists summarising — either everything sounds the same, or the talk dissolves into a health leaflet. This lesson carries one complete activities card about a weekly swim in cold water, shows the preparation minute as it was actually scribbled, and demonstrates how ritual detail rescues a routine from monotony. The sample response carries an estimate label and exists to be studied, not recited; a memorised habit sounds like nobody's habit.",
        beforeYouStart: [
          "You can build a four-corner note for any card inside the minute.",
          "You can talk about routines in the present simple and past events in the past simple without mixing them.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, this time through an activities card"],
          ["Task & question types", "A routine prompt with identity, origin and content prompts plus an explain line about effects; one minute to note, up to two to speak"],
          ["What is assessed", "Routine tenses and frequency language, concrete vocabulary of equipment and place, narrative of a habit's start, balanced evaluation"],
          ["Why this matters", "Habit language serves Part 1 questions about exercise and routines directly, doubling the return on this practice"],
        ],
      },
      { type: "heading", text: "What an activities card is really asking" },
      {
        type: "text",
        text: "An activity card is a biography request: birth (how it started), daily life (what it involves), and influence (what it does to you). The prompts look like a form to fill in, but the family rewards the same storytelling instincts as events or experiences — the origin prompt wants a founder (a person, a challenge, a doctor's warning) and the involvement prompt wants specifics that only a real practitioner could supply: the times, the numbers, the equipment, the small ceremonies. An activity talk without those specifics answers every prompt and convinces nobody, because 'I go running, it is healthy' could be said by anyone on earth, in any language, about anything.",
      },
      { type: "heading", text: "Routine, ritual and the split close" },
      {
        type: "text",
        text: "Two distinctions carry this family. First, routine versus ritual: a routine is what you do, while a ritual is how it feels — the same coffee from the same kiosk, the bench under the blanket, the retired postman keeping tally. Ritual detail is what makes a habit loveable to a listener, and loveable material is easy to speak. Second, the split close: effects should arrive in two named categories, physical and mental, each with one specific piece of evidence — sleep on Saturday nights, a weekend already won. Health-leaflet effects ('good for the heart, good for the lungs') are true of every activity ever invented and therefore score as if you had said nothing.",
      },
      {
        type: "steps",
        title: "The biography of a habit, in four chapters",
        intro: "Birth, life, ritual, effect.",
        steps: [
          {
            title: "Chapter 1: Name the activity sharply",
            text: "'Swimming' is too wide a target for two minutes; 'outdoor lido swimming, unheated, all year' aims at a thousand details waiting to be told. Sharpen the name until the details start suggesting themselves.",
            examples: [
              {
                english: "Not 'jogging' but 'an easy six-kilometre loop round the industrial canal, before the vans wake up'.",
                note: "The sharpened name contains a route, a distance and a time — three prompts' worth of material in one phrase.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Chapter 2: Give the habit a founder",
            text: "Every habit has a beginning, and beginnings have people in them: the colleague who signed you up, the doctor who frowned at a number, the friend who lent equipment. Name the founder and date the start — 'about four years ago' — and the origin prompt is fully served.",
            examples: [
              {
                english: "A colleague who was already a regular said it would suit me because 'you don't have to be good, you just have to be cold'.",
                note: "A founder, a quotation and a joke: the origin told as a scene rather than a schedule.",
                domain: "work",
              },
            ],
          },
          {
            title: "Chapter 3: Detail the routine, then find the ritual",
            text: "Cover the practical spine first — times, lengths, minutes, breaks — and then add one ceremony and one fellow human. Numbers prove you do it; rituals prove you love it, and both are needed.",
            examples: [
              {
                english: "Forty lengths with the breaks I allow myself, then coffee from the kiosk and ten minutes under a blanket, watching the next shivering people arrive.",
                note: "The measurable routine and the unmeasurable ritual, in one sentence each.",
                domain: "life",
              },
            ],
          },
          {
            title: "Chapter 4: Close on split effects",
            text: "Divide the effects deliberately: one physical, one mental, each with evidence. 'I sleep like a stone on Saturday nights' and 'whatever else goes wrong, I've already won one small battle' — body and mind, both specific, both yours.",
            examples: [
              {
                english: "Body: I sleep like a stone that night. Mind: the weekend starts with a small victory, which sets the tone for everything after it.",
                note: "The split close rehearsed in two sentences — ready to be delivered in the final third.",
                domain: "study",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Activities",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "The topic card in this round is an activity; sixty seconds of note time come before the long turn."],
          ["Task line", "Describe an activity you do regularly to keep fit"],
          ["Prompt 1", "what the activity is"],
          ["Prompt 2", "how and when you started"],
          ["Prompt 3", "what it involves"],
          ["Explain line", "…and explain how it affects you"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "outdoor lido · 50 m · unheated · all year · 6°C in January", "A sharpened name plus one number: the activity identified with precision, not passion."],
          ["Corner two — the anchor", "4 years ago · charity challenge · Ines: 'you just have to be cold'", "The founder, the trigger and her quotation — the origin prompt pre-answered as a scene."],
          ["Corner three — the detail bank", "7:30 arrival · 40 lengths, 45 minutes · kiosk coffee · blanket bench · Bert the postman's tally", "Two numbers, two rituals, one named regular: routine and community in five fragments."],
          ["Corner four — the reason", "sleep like a stone · shoulders stronger · weekend starts with a victory · 20 min of cold-water high", "Two physical and two mental effects, so the close can split them cleanly and pick the best evidence."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the body's weekly appointment",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["to keep fit", "Use once, early, to echo the card — then never again; the talk's job is to go beyond it."],
          ["stamina", "Describe the long-term change: 'the stamina crept up on me over the first winter'."],
          ["to build up gradually", "Honest progression: 'I built up from ten lengths to forty over about a year'."],
          ["a full-body workout", "One phrase answers the 'why this activity' question inside the involvement prompt."],
          ["low-impact", "A precise reason for a choice: 'my knees prefer swimming — it's low-impact'."],
          ["the regulars", "Turn the community into characters: 'the regulars know each other's lengths by heart'."],
          ["invigorating", "The morning-after feeling, said once with conviction instead of three times as filler."],
          ["to stick at something", "The habit's survival: 'the secret was sticking at it through February'."],
          ["aches and pains", "Honest costs raise credibility: 'there are aches and pains on Monday, and I've stopped minding them'."],
        ],
      },
      {
        type: "example",
        title: "Six habits and the sentences that prove them",
        items: [
          {
            english: "Two evenings a week, a sports hall with a leaking roof, and eleven adults who take dodgeball far too seriously.",
            note: "Self-deprecating precision: schedule, place and community in one sentence.",
            domain: "life",
          },
          {
            english: "Corner two of my note: '2021, doctor frowned at a number, brother-in-law lent me a bike'.",
            note: "Three fragments that contain a complete origin: date, trigger, founder and equipment.",
            domain: "study",
          },
          {
            english: "The app calls it a beginner flow; my hamstrings call it a negotiation.",
            note: "A joke that also proves practice — only someone who does yoga has negotiating hamstrings.",
            domain: "exam",
          },
          {
            english: "Our department started a walking meeting on Thursdays, and now the quietest colleagues set the pace.",
            note: "Workplace fitness counts, and the observed change gives the effects prompt its evidence.",
            domain: "work",
          },
          {
            english: "I can tell you the exact week the hill stopped being an enemy: the third week of October.",
            note: "Dated improvement is the most convincing physical effect an activity talk can offer.",
            domain: "exam",
          },
          {
            english: "Rain cancels picnics, not us — the Thursday walking club has only ever been beaten by ice.",
            note: "A rule of the habit proves regularity better than the word 'regularly' ever could.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where activities talks go wrong" },
      {
        type: "mistakes",
        title: "Activities-card traps corrected",
        items: [
          {
            wrong: "I said 'I go running every day, running is healthy, I like running' and filled two minutes with variations on exactly that.",
            right: "Sharpen the name, date the start, and load the middle with numbers and rituals that only a practitioner would know.",
            reason: "The card's prompts are requests for specifics; repeating the activity's name and its health value answers none of them with content.",
          },
          {
            wrong: "I claimed I exercised 'every single morning', then described something that clearly happens at weekends — and the examiner noticed.",
            right: "Name your real rhythm, including its exceptions: 'almost every Saturday, weather permitting, and honestly not in February'.",
            reason: "Exaggerated frequency collapses the moment your own detail contradicts it, and precision with exceptions sounds both honest and fluent.",
          },
          {
            wrong: "For the effects prompt I recited a benefits list — heart, lungs, weight, mood — like the side of a cereal box.",
            right: "Split effects into physical and mental, then give one personal, dated piece of evidence for each.",
            reason: "Generic benefits are true of every activity and therefore describe none; the explain line is scored on evaluation you personally own.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The activities card, end to end",
        reading: {
          text: "An activities talk succeeds on the density of its proof. The examiner is asking, throughout: does this person actually do this? Proof arrives in three currencies — numbers (lengths, kilometres, minutes, years), rituals (the kiosk, the bench, the named regulars), and dated changes (the week the hill stopped hurting, the winter the stamina arrived). A talk with all three currencies feels like testimony; a talk without them feels like a brochure. The effects prompt, meanwhile, is the family's explain line and deserves the same protected half-minute the other families give theirs: physical effect plus mental effect, one piece of evidence each, and ideally a closing sentence that ranks them.",
          task: "Before the tasks below, write one proof of each currency for your own activity: a number, a ritual and a dated change.",
        },
        writing: {
          task: "Write your own activities talk against this card, chapter by chapter, using the guide. The model is a full-length demonstration with an honest estimate label — copy its proportions and its split close, never its sentences, since a recited routine is the least convincing routine there is.",
          guide: [
            "Sharpened name: 'What I do is…, specifically…'",
            "Origin opener: 'It started about… ago, when…'",
            "Routine opener: 'A typical session looks like…'",
            "Split close: 'Physically, it's…; but the bigger effect is…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nSo the activity I want to talk about is swimming, specifically at the outdoor lido near where I live — which sounds like a small difference, but swimming outdoors, in all weather, is a completely different sport from swimming in a warm indoor pool.\n\nWhat it is: a 1930s open-air pool, fifty metres, unheated, open all year round. In January the water gets down to about six degrees; in August it's almost reasonable.\n\nHow did I start? I blame a colleague, honestly. About four years ago, our team did a charity challenge where everyone had to commit to some physical thing for a month, and my colleague Ines — who was already a lido regular — said the Saturday morning swim would suit me because 'you don't have to be good, you just have to be cold'. I went once, mostly out of curiosity, and something in my brain apparently decided it was a good idea, because I've been going almost every Saturday since.\n\nWhat it involves: I'm there for half seven, and I swim — well, I try for — forty lengths, which takes about forty-five minutes with the breaks I allow myself. Then there's the ritual part: a lukewarm shower, coffee from the kiosk, and ten minutes on the bench under a blanket, watching other people arrive and rehearsing their excuses. The regulars are a proper little community — there's a retired postman called Bert who's swum there every week since the eighties and keeps a tally of everyone's lengths.\n\nHow does it affect me? Physically, my shoulders and my sleep are the two things I notice most — I sleep like a stone on Saturday nights. But the bigger effect is mental. Starting the weekend by doing something slightly difficult, in cold water, while everyone else is asleep, sets a kind of tone: whatever else goes wrong that weekend, I've already won one small battle. And the cold-water high afterwards is completely real — twenty minutes of feeling like a slightly better version of yourself.",
        },
        listening: {
          script:
            "Newsletter interviewer: Thanks for talking to me about the lido — how long have the Saturday swimmers been going?\nBert: Since before I retired, and that was a while ago. We start at half seven, which sorts out who means it.\nInterviewer: And what keeps people coming back, would you say?\nBert: Three things, and none of them is fitness, whatever the form says. The coffee urn — that's first. Second, the tally board: I write everyone's lengths up, and nobody likes leaving theirs blank. And third, the bench. Ten minutes under a blanket after cold water, with people you'd never meet anywhere else — that's the actual club. The swimming is just the membership fee.",
          task: "Note the three things Bert says actually keep the swimmers coming, and mark which of them the sample talk borrowed.",
        },
        speaking: {
          task: "Run the full cycle for a fitness habit of your own: one minute of notes, a recorded talk of one to two minutes, then the checklist — and count your proof currencies as you listen back.",
          frames: [
            "What I do, specifically, is…",
            "It started when…, about… ago",
            "A typical session involves…",
            "The physical effect I notice most is…, and mentally…",
          ],
          checklist: [
            "Did I name the activity sharply enough that its details suggested themselves?",
            "Does my talk contain all three proof currencies: a number, a ritual and a dated change?",
            "Did the effects arrive split into physical and mental, with one specific piece of evidence each?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, chapter by chapter",
        headers: ["Chapter of the talk", "What the sample does there"],
        rows: [
          ["The sharpened name", "Chooses lido swimming over swimming in general, and immediately explains the difference — precision that promises detail before it arrives."],
          ["The identity paragraph", "A date, a length, a temperature range: the pool established as a place with a climate, in three flat sentences of fact."],
          ["The origin story", "The charity challenge, Ines and her quotation give the habit a founder, a trigger and a joke — the 'how and when' prompt answered as a scene."],
          ["The routine and ritual", "Half seven, forty lengths, forty-five minutes, then the kiosk, the blanket and Bert's tally: numbers prove the doing, rituals prove the loving."],
          ["The split close", "Physical effects named and evidenced (shoulders, stone-like sleep), then the mental effect ranked above them — a weekend opened with a small victory."],
          ["The spoken surface", "One self-correction ('I swim — well, I try for — forty lengths'), quoted speech, and a closing image that lands the talk inside the explain line."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Name, identity, origin, routine, ritual, effects — the card's own sequence, with the explain line receiving the final two blocks."],
          ["Grammar", "Present simple for the routine, past simple for the founding story, present perfect for the habit's duration — the three tenses of a biography, each in its place."],
          ["Vocabulary", "Practitioner's words — lengths, unheated, cold-water high — replace generic fitness language, marking the speaker as someone who actually goes."],
          ["Coherence", "The cold-water motif runs from the January temperature through Ines's joke to the closing high, holding six paragraphs in one climate."],
          ["Task fulfilment", "All three prompts are answered with dedicated material, and the extension is split, evidenced and ranked — evaluation rather than assertion."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["Lunchtime five-a-side football", "Adds a team: the origin is a works team, the ritual is the post-match sandwich, and the effects gain a social third category."],
          ["Home yoga with a video channel", "Keeps everything domestic and solitary: equipment is a mat and a cat, difficulty is balance, and the mental effect — patience — takes top billing."],
          ["Sunday hill walking with a club", "Shifts vocabulary to boots, weather and routes; the effects arrive as views and conversations, and the founder is usually a map."],
          ["Cycling the daily commute", "Folds fitness into a necessary journey: the origin is a new job, the routine is traffic-shaped, and the effect is arriving before your own temper."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do you think people in your country exercise enough?' — take a position and support it with one observation."],
          ["Rounding-off question two", "'Should companies give employees time during the working day to exercise?' — argue one side with a workplace example."],
          ["Practice card A", "'Describe a healthy habit you have' — full cycle; widen the range beyond fitness if you like."],
          ["Practice card B", "'Describe a sport you would like to try' — flip the tense and borrow the origin chapter for the future."],
          ["Practice card C", "'Describe an outdoor activity you have done' — give the weather a speaking part throughout."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose the habit with the most proof — numbers, rituals, dated changes — and give each corner one of each, plus a founder and a quotation if you have one."],
          ["While the clock runs", "Track your currencies: if a minute passes without a number or a named person, reach into corner three and spend one."],
          ["If you are stuck", "Describe last Saturday in order — arrival, first minute, last stretch, afterwards — because a single session narrated truthfully serves every prompt."],
          ["Final minutes", "Deliver the split close — physical then mental, evidence for each — and rank them in your last sentence so the talk ends inside evaluation."],
        ],
      },
      {
        type: "summary",
        points: [
          "An activities card is a biography request: birth, daily life, ritual and effect — and the prompts are requests for proof, not opinion.",
          "Sharpen the activity's name until details start suggesting themselves; 'swimming' fills no minutes, but an unheated lido fills them all.",
          "Every habit has a founder and a first day: name the person and date the start, and the origin prompt becomes your best story.",
          "Prove the habit with three currencies — numbers, rituals and dated changes — and split the effects into physical and mental, one piece of evidence each.",
          "Speak your own routine at your own pace and in your own accent: the pronunciation criterion rewards being easily understood, never any particular way of sounding, and a recited routine fools nobody.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft lessons under this family.",
        items: [
          {
            question: "What should the four corners of a preparation note contain, in card order?",
            options: [
              "Four complete sentences, one per prompt",
              "Fragments for the subject, the anchor, the details and the reason",
              "Vocabulary items you plan to use",
            ],
            correctIndex: 1,
            explanation: "The corners mirror the card: who or what, the dated anchor, a bank of expandable details, and the reason the explain line will need.",
            from: "Effective note-taking",
          },
          {
            question: "Why does the craft chapter recommend following the card's own prompt order?",
            options: [
              "It is the only order the examiner will accept",
              "It matches the examiner's mental checklist, making coverage visible as the talk proceeds",
              "It prevents grammar mistakes",
            ],
            correctIndex: 1,
            explanation: "The printed order lets the examiner tick each line as it is answered, and it reserves the natural climax — the explain line — for the end.",
            from: "Organising ideas",
          },
          {
            question: "If no subject comes to mind during the preparation minute, what is the taught priority?",
            options: [
              "Spend the whole minute searching for the perfect subject",
              "Commit to the first honest subject you own, then fill the remaining seconds with fragments",
              "Prepare to apologise to the examiner instead of speaking",
            ],
            correctIndex: 1,
            explanation: "An imperfect subject with a full note beats a perfect subject with no material — the clock spends itself whether you decide or not.",
            from: "The one-minute preparation",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. What is this lesson's distinction between a routine and a ritual, and why does it matter for scoring?",
        hints: ["One of the two is what you do; the other is what makes it feel like yours."]
        ,
        options: [
          { id: "a", text: "A routine is done in the morning and a ritual in the evening, so mentioning both covers the whole day." },
          { id: "b", text: "A routine is what you do; a ritual is how it feels — the kiosk coffee, the bench, the named regulars — and rituals supply the loveable detail that proves you truly do it." },
          { id: "c", text: "A ritual is a religious version of exercise, best avoided in the test." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A routine is what you do; a ritual is how it feels — the kiosk coffee, the bench, the named regulars — and rituals supply the loveable detail that proves you truly do it.",
          "Numbers prove regularity but rituals prove attachment, and attached detail is the richest material a habits talk can carry: it is specific, unmemorisable and a pleasure to deliver.",
          "(a) invents a time-of-day rule that exists nowhere; (c) mistakes a study-skills metaphor for a religious category — nothing about the test penalises the word.",
        ),
        tags: ["speaking", "cue-cards", "activities"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's running talk and answer the question.",
        hints: ["Count what the talk contains besides the word 'running'."]
        ,
        passageTitle: "A habit with no habits in it",
        passage:
          "Marek's activity talk ran: 'I go running every day. Running is very healthy. Every morning I run in the park. Running is good for the heart and for the mind. I started running some years ago because it is healthy. I love running very much.' His grammar was nearly perfect and his two minutes were full. His practice partner, a nurse who runs a Tuesday swimming group, listened twice and then asked him three questions: 'Which park? What changed in your body after the first month? And who on earth started you off?' Marek could answer none of them without inventing on the spot.",
        question: "What had Marek's talk failed to include?",
        options: [
          { id: "a", text: "Enough repetition of the word 'running' to prove enthusiasm." },
          { id: "b", text: "Any of the specifics this family scores on: a named place, a founder, a dated change, a ritual — the proofs of a lived habit." },
          { id: "c", text: "A formal training plan with distances and heart rates." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Any of the specifics this family scores on: a named place, a founder, a dated change, a ritual — the proofs of a lived habit.",
          "The partner's three questions map exactly onto the proof currencies — place, origin and effect — and a talk that cannot survive them has answered the prompts with assertion instead of content.",
          "(a) reverses the diagnosis — repetition was the disease; (c) overcorrects into a different failure: medical detail nobody asked for, in place of personal detail the card requested.",
        ),
        tags: ["speaking", "cue-cards", "activities", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one sentence with the lesson's terms.",
        question: "How does this lesson recommend closing an activity talk's effects prompt, and into which two categories are the effects divided?",
        acceptedAnswers: [
          "with a split close: the effects divided into physical and mental, each with evidence",
          "split the effects into physical ones and mental ones, and give one example of each",
          "a split close — physical effects and mental effects, each supported by a specific piece of evidence",
          "divide the effects into the physical and the mental, then rank them in the final sentence",
        ],
        keywords: ["physical", "mental"],
        hints: [],
        feedback: fb(
          "A split close: physical effects and mental effects, each with its own evidence, ideally ranked at the end.",
          "Dividing the effects shows organisation, evidencing each shows ownership, and ranking them shows evaluation — three scored behaviours from one structural choice.",
          "Answers offering a single category, or a generic benefits list, have replaced personal evaluation with the cereal-box voice the lesson warns against.",
        ),
        tags: ["speaking", "cue-cards", "activities"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. You begin your talk with 'I do this every single morning', but your notes describe a Saturday routine with a February break. What is the strongest fix?",
        hints: [],
        options: [
          { id: "a", text: "Keep the claim — examiners cannot check, so the stronger number is the better number." },
          { id: "b", text: "State your real rhythm: 'almost every Saturday, weather permitting — and honestly not in February' — because precision with exceptions is both honest and richer." },
          { id: "c", text: "Avoid frequency altogether and hope the prompt goes unmarked." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "State your real rhythm: 'almost every Saturday, weather permitting — and honestly not in February' — because precision with exceptions is both honest and richer.",
          "A real rhythm generates detail (weather, exceptions, the February gap) and survives your own later sentences, while inflated frequency is contradicted by the very routine you go on to describe.",
          "(a) misreads the risk — the cost of exaggeration is self-contradiction, not detection; (c) abandons a printed prompt, which is paid for in the task criterion.",
        ),
        tags: ["speaking", "cue-cards", "activities"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a future-facing cousin of this card — spoken aloud.",
        hints: ["Name it sharply, say what attracts you, and describe one concrete first session you imagine."]
        ,
        situation:
          "A related activities card: 'Describe a form of exercise you would like to try.' Prepare for up to one minute, then speak for one to two minutes, ending on what you think it would give you.",
        targetPhrases: [
          "The one I keep circling back to is…",
          "What appeals to me is…",
          "I suspect it would give me…",
        ],
        mustSay: ["exercise", "try", "because"],
        feedback: fb(
          "A one-to-two-minute talk naming a specific exercise, its attraction, a concrete imagined first session, and the effect you hope it would have.",
          "Future-facing activity cards still want proof-shaped detail: where you would do it, who would teach you, and what the first sore morning would feel like — imagination with specifics scores like memory.",
        ),
        tags: ["speaking", "cue-cards", "activities", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second habit, noted and founded",
      instructions:
        "Choose a different activity you genuinely do for fitness — the less glamorous the better — and write 40 to 160 words: first, your four-corner note as fragments (sharpened name and numbers, founder and start date, routine plus one ritual, split effects); second, the two sentences that would tell the habit's origin story, naming the person or event that started you off.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Do the activity once with this lesson in mind, then write down one number, one ritual and one dated change you could not have described beforehand — fresh proof is the best proof.",
      "Record your talk and listen back only for exaggerations: every claim your own detail contradicts, rewrite as an honest rhythm and notice how much richer it sounds.",
    ],
  },
];
