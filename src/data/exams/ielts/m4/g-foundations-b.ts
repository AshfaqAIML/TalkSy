/**
 * GT Writing Masterclass — foundations, Part B (General Training track).
 *
 * Five craft lessons that sit beneath every GT script: cohesion (the joints
 * that hold a letter together), coherence (the one-thread message),
 * punctuation (the marks a letter lives by), sentence variety (register-true
 * range) and time management (the sixty-minute arithmetic of letter and
 * essay). Every example is GT territory — letters and everyday essays.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingFoundationsLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-cohesion",
    title: "Cohesion",
    description:
      "The joints that hold a letter together: linkers chosen by job and register, hinges between the bullet paragraphs, reference chains that spare the addressee's name, and the same machinery at essay length.",
    objectives: [
      "choose each linking device for the job the joint performs, dressed in the register the greeting set",
      "hinge the three bullet paragraphs together so the letter reads as one message, not three",
      "build reference chains that carry the topic forward without repeating the addressee's name",
      "run the same joint-control through the everyday essay's paragraphs",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "A letter arrives as one message for one reader, and cohesion is the craft that makes it read that way: the 'furthermore' that adds a second fault to a complaint, the 'anyway' that swings a friendly note back to its real business, the 'this' that saves your reader's name from a third appearance. General Training examiners read for connection directly — it has a named place among the four Writing scoring areas — and in a letter the joints carry a second burden: they must speak the same register as the greeting and the sign-off. A stiff 'moreover' inside a note to a friend is a costume; a breezy 'anyway' inside a formal complaint is a leak. This lesson installs the joints function by function, at all three letter registers, and then carries them into the essay, where the same jobs are done in a quieter voice.",
        beforeYouStart: [
          "You can plan a letter around its three bullet points, one paragraph each.",
          "You know which register — formal, semi-formal or informal — each kind of recipient calls for.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both GT tasks: the letter and the everyday essay"],
          ["Task & question types", "Task 1 letters to companies, officials, neighbours and friends; Task 2 essays on everyday topics across the five families"],
          ["What is assessed", "How sentences and paragraphs connect: linking devices, reference, and the fit of each with the letter's chosen tone"],
          ["Why this matters", "The joints are the most visible craft on a letter's short page — and a linker in the wrong register breaks tone and connection at once"],
        ],
      },
      { type: "heading", text: "Component 1 — One message, not three" },
      {
        type: "text",
        text: "Cohesion is the surface machinery of a text: the linking words, the reference words, the small phrases that hand one sentence to the next. In a General Training letter that machinery has a second duty. The tone you set in your first line — formal for a company, warm for a friend — has to survive every joint that follows, because a linker carries register as surely as a greeting does. A complaint that opens 'Dear Sir or Madam' and then pivots with 'anyway' has changed voice mid-message, and the examiner hears it as two letters sharing one envelope. The letter's shortness makes all of this louder: at 150 to 190 words, with one paragraph per bullet point, every joint sits in plain view, and the three paragraph breaks are three joints the reader crosses in under a minute. Coherence, the subject of the next lesson, is the journey the joints serve; build the hinges here.",
      },
      { type: "heading", text: "Component 2 — Linkers by job, at the letter's three registers" },
      {
        type: "table",
        title: "The five jobs and their carriers",
        headers: ["Job at the joint", "Formal letter", "Semi-formal letter", "Informal letter"],
        rows: [
          ["Sequence", "firstly; subsequently; finally", "first; then; lastly", "first off; after that; one last thing"],
          ["Contrast", "however; nevertheless; whereas", "although; still; on the other hand", "but; mind you; having said that"],
          ["Cause", "owing to; since; for this reason", "because; which is why", "seeing as; the reason being"],
          ["Addition", "furthermore; in addition; I would also point out", "what is more; besides that", "also; on top of that; and another thing"],
          ["Back to the purpose", "I am writing with reference to", "anyway, back to the matter in hand", "anyway, the reason I'm writing"],
        ],
      },
      { type: "heading", text: "Component 3 — Four moves that bind a letter" },
      {
        type: "steps",
        title: "Four moves that bind a letter",
        steps: [
          {
            title: "Move one: name the job, then choose the clothes",
            text: "Before any linking word is written, ask what the next sentence does to the one before it: adds to it, pulls against it, explains its cause, orders events, or returns the letter to its business. Only when that job is named do you reach for a carrier — and the carrier comes from the column that matches the greeting. A linker that mislabels the relation misleads the reader twice; a linker in the wrong register breaks the voice. Job first, register second, word third.",
            examples: [
              {
                english: "A complaint adds a second fault: 'The heater failed on the day of arrival. Furthermore, no manual was enclosed with the replacement.'",
                note: "Addition in formal dress: the job names the family, the register names the word.",
              },
            ],
          },
          {
            title: "Move two: hinge every bullet paragraph",
            text: "The three bullet paragraphs are the letter's middle, and each one needs a phrase at its opening that grips the paragraph before — a repeated keyword, a light sequence signal, or a purpose return such as 'that brings me to'. Without hinges, the letter reads as three separate notes stapled together; with them, the reader crosses each break without noticing it. The hinge can be tiny: two or three words doing the work a full linking sentence would do clumsily.",
            examples: [
              {
                english: "A noise complaint's second paragraph opens: 'That brings me to the stairwell, which is my second concern.'",
                note: "One hinge phrase carries the reader over the paragraph break and announces the new subject.",
              },
            ],
          },
          {
            title: "Move three: chain the topic, spare the name",
            text: "Reference words — it, this plus a noun, these, that — carry a key idea forward so it need not be repeated in full. Nowhere is the discipline more visible than with names: a letter to Mrs Ferrante that opens four sentences in a row with 'Mrs Ferrante' reads like a summons rather than a message, while a chain — the boiler, the fault, this problem — reads like two people talking about a shared object. Give every reference one clear antecedent, and when this opens a sentence, give it a summary noun to hold: this delay, this arrangement, this fault.",
            examples: [
              {
                english: "A landlord letter chains its topic: 'The boiler stopped on Tuesday. The fault returned twice that week, and this pattern has left three rooms unheated.'",
                note: "The boiler, the fault, this pattern: one problem, three mentions, no repetition and no guessing.",
              },
            ],
          },
          {
            title: "Move four: audit in the recipient's voice",
            text: "The final audit is read aloud, in the recipient's voice. Read the draft as the manager, the landlord or the friend would hear it: joints that sound natural stay; joints that trip — two signals stacked on one joint, a stiff carrier in a warm note, a friendly filler in a formal one — get one repair each. The audit deletes and re-voices; it never adds. A letter that survives a read-aloud in the recipient's voice has joints the examiner will not stumble on either.",
            examples: [
              {
                english: "Read as the hotel manager, 'Anyway, the room was a let-down' is re-voiced as 'I must add that the room fell short of the description on your website.'",
                note: "The audit re-voices the joint; it does not multiply the machinery.",
              },
            ],
          },
        ],
      },
      {
        type: "text",
        text: "The everyday essay runs the same machinery at lower volume. Its joints live at paragraph openings and mid-sentence, and its carriers stay semi-formal: 'however' and 'in contrast' rather than 'but' and 'mind you'. The four jobs are unchanged — a body paragraph on weekend work for teenagers still sequences, contrasts, causes and adds — but each signal is marked once, and paragraphs connect by gripping each other's content rather than by stacking linkers. The essay's version of the hinge is an opening that both announces the paragraph's step and echoes the one before it; the essay's version of the reference chain is the summary noun that lets a key idea travel from introduction to conclusion without wearing out. One signal per joint is the ceiling in both tasks — enough to steer the reader, never enough to crowd the message.",
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Joints on the letter's page",
        items: [
          {
            english: "Formal complaint, addition at work: 'The outer box was undamaged. Furthermore, the invoice enclosed lists an item I never ordered.'",
            note: "Furthermore carries a second fault into the complaint — formal register, one signal, no stacking.",
            domain: "exam",
          },
          {
            english: "Informal letter, back to the purpose: 'Anyway, the real news — I finally handed in my notice at the bakery!'",
            note: "The friendly pivot word returns the note to its business without a moment of ceremony.",
            domain: "exam",
          },
          {
            english: "Essay body, contrast at mid-sentence: 'Families who eat together most evenings report calmer mealtimes. Households with rotating shifts, in contrast, rarely manage it at all.'",
            note: "The essay's version of the friendly 'but': same job, semi-formal dress.",
            domain: "exam",
          },
          {
            english: "Reference chain in a letter to a manager: 'I returned the key on 3 May. This date is confirmed by the reception log, which your colleague signed.'",
            note: "This date: a summary noun with one antecedent — nothing left for the reader to guess.",
            domain: "exam",
          },
          {
            english: "A learner keeps three columns — formal, semi-formal, informal — for each linker family, and drafts one complaint sentence in all three voices before choosing.",
            note: "The three-column drill turns register from a habit into a decision.",
            domain: "study",
          },
          {
            english: "An email to a supplier: 'The shipment arrived on schedule. The outer cartons, however, showed water damage on two sides.'",
            note: "One joint, one signal: the same ceiling a letter obeys, in working clothes.",
            domain: "work",
          },
          {
            english: "A note left on a kitchen table: 'Bins go out tonight. Also, we're out of coffee — sorry!'",
            note: "Also is the everyday twin of furthermore: same job, no costume.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The letter-joints catalogue",
        items: [
          {
            wrong: "Opening every sentence with a linker is how I make the letter look connected.",
            right: "Mark roughly every second joint at most, and let well-ordered sentences pass unmarked.",
            reason: "A linker on every sentence turns the machinery into background noise, and on a letter's short page the stacking is visible from the first read.",
          },
          {
            wrong: "One list of linking words works for every letter I write.",
            right: "Keep your carriers sorted into three columns — formal, semi-formal, informal — and take the word from the column the greeting set.",
            reason: "The examiner reads tone as one continuous choice; a breezy filler inside a formal complaint undoes the register the first line promised.",
          },
          {
            wrong: "Repeating the recipient's name keeps the letter personal.",
            right: "Use the name once or twice, then carry the topic forward with reference words — this fault, the arrangement, it.",
            reason: "Name repetition reads as a form letter, and it throws away the reference machinery that the connection reading is built to reward.",
          },
          {
            wrong: "The bullet points already connect the letter, so my paragraphs can start cold.",
            right: "Give each bullet paragraph a short hinge — a repeated keyword, a purpose return — that grips the paragraph before it.",
            reason: "The bullets organise the writer's plan, not the reader's experience; without hinges the letter arrives as three separate messages.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Cohesion across all four skills",
        reading: {
          text: "Dear Mr Halvorsen, The bicycle shed has been locked since Friday. As a result, four residents have been carrying their bikes up the stairwell. This arrangement is unsafe in an emergency, and it is also testing everyone's patience. I would therefore ask that the key cupboard be reopened this week. Yours sincerely, R. Mensah",
          task: "Find the four joints — as a result, this arrangement, it, therefore — and name the job each one performs.",
        },
        writing: {
          task: "The five sentences below are a scrambled paragraph from a semi-formal letter. Decide the job each joint performs, choose one semi-formal carrier per joint, and write the paragraph in a sensible order. (1) I have paid the same invoice twice this month. (2) The first payment left my account on 3 March. (3) The second, identical amount left it nine days later. (4) I would be grateful if one payment could be refunded. (5) This double charge appears to be an error in your system.",
          guide: [
            "Decide which sentence is the letter's purpose and which pair must run in time order.",
            "Give the two payments one sequence joint, and the system fault one cause joint.",
            "Chain the topic forward with a summary-noun reference — this double charge or a close cousin.",
            "Close with the request, signalled once; check that no joint carries two carriers.",
          ],
          model:
            "The first payment left my account on 3 March, and a second, identical amount left it nine days later. This double charge appears to be an error in your system, since the invoice was settled in full on the first occasion. I have therefore paid the same invoice twice this month. I would be grateful if one of these payments could be refunded.",
        },
        listening: {
          script: "So, the good news first: the hall is confirmed for the ninth. The bad news is the piano — it still hasn't arrived. Still, the school has offered us theirs, and that solves the biggest problem. Anyway, the reason I'm calling: we need two more volunteers for the door.",
          task: "Catch the joints — still, that solves, anyway — and name the job each performs: contrast, result, or return to purpose.",
        },
        speaking: {
          task: "Tell a friend about a problem with something you bought recently: what went wrong, what you did about it, and what you want the shop to do.",
          frames: [
            "The first thing that went wrong was ...",
            "Because of that, ...",
            "This is the part that annoyed me most: ...",
            "Anyway, what I'd like them to do is ...",
          ],
          checklist: [
            "I used at least three different joint jobs, not one job three times.",
            "My carriers matched how formal the situation was.",
            "I never opened two sentences in a row with a linker.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Puts the timeline in order before any linker is chosen", "Cohesion displays a plan; a sequence word cannot manufacture one, so the ordering comes first"],
          ["Gives each joint exactly one carrier — and, since, therefore", "Every relation is marked once and correctly: the examiner sees control, not decoration"],
          ["Chains the topic with 'this double charge'", "A summary noun carries the issue forward so the invoice need never be named again"],
          ["Holds the request for the close, signalled by one therefore", "The final sentence lands as the letter's destination rather than as one more event in the list"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Bank two carriers per job — sequence, contrast, cause, addition, purpose return — in each of your three register columns, and nothing beyond them."],
          ["While the clock runs", "Name the joint's job, dress it in the register the greeting set, and hinge every bullet paragraph with one short phrase."],
          ["If you are stuck", "If two sentences refuse to connect, suspect the logic before the vocabulary — check that the second truly follows from the first."],
          ["Final minutes", "Re-read in the recipient's voice, repairing stacked signals and any carrier that breaks the letter's tone."],
        ],
      },
      {
        type: "summary",
        points: [
          "Cohesion is the visible machinery — linkers, hinges, reference — that makes a letter read as one message rather than three.",
          "Choose every carrier by the joint's job (sequence, contrast, cause, addition, purpose return) and then by the register the greeting set.",
          "Bullet paragraphs need hinges: one short phrase at each opening that grips the paragraph before.",
          "Reference chains carry the topic forward and spare the addressee's name; each reference keeps a single clear antecedent.",
          "The essay runs the same jobs in quieter carriers, and one signal per joint is the ceiling in both tasks.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "A GT Task 1 prompt gives a situation, a recipient and three bullet points. Which earlier lesson taught you to find all three before writing?",
            options: ["Letter foundations: situation, bullets, tone", "Cohesion", "Understanding task instructions"],
            correctIndex: 0,
            explanation: "The foundations lesson named recipient, purpose and bullets as the letter's three givens; the register decision that governs every linker starts there.",
            from: "Letter foundations: situation, bullets, tone",
          },
          {
            question: "What is the ceiling of signals on a single joint between two sentences?",
            options: ["Exactly one, correctly chosen", "Two, for safety", "As many as the word count allows"],
            correctIndex: 0,
            explanation: "The audit rule keeps one carrier per joint: a second signal on the same joint is deleted on sight, because stacking turns machinery into noise.",
            from: "Four moves that bind a letter",
          },
          {
            question: "Before drafting, your plan names the recipient and the purpose. Which earlier lesson built that plan?",
            options: ["Planning", "Coherence", "Vocabulary"],
            correctIndex: 0,
            explanation: "The plan names recipient and purpose first, and the register choice follows from them — cohesion inherits the letter's voice, it never invents one.",
            from: "Planning",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "You are writing a formal complaint, and the next sentence adds a second fault. What comes first in choosing the linker?",
        hints: ["Decide the job before the word — then think about tone."],
        options: [
          { id: "a", text: "Pick the longest linker you know, because formal letters reward long words." },
          { id: "b", text: "Name the joint's job — addition — then take a formal carrier such as 'furthermore'." },
          { id: "c", text: "Reuse the linker that appeared in a model letter you once admired." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Name the joint's job — addition — then take a formal carrier such as 'furthermore'.",
          "The job names the family and the register names the word: addition in a formal letter points to carriers like furthermore or in addition, and only once the job is certain.",
          "(a) judges length rather than function; (c) borrows another script's logic instead of reading the joint in front of you.",
        ),
        tags: ["gwriting", "cohesion", "register"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the letter extract and audit its joints.",
        hints: ["Look for a joint carrying two signals at once, then check every reference."],
        passageTitle: "Joint audit",
        passage:
          "Dear Mrs Adeyemi, I am writing about the parking space I rent at Marlow Court. However, the space has been occupied by a delivery van for the past fortnight. Moreover, furthermore, the van's driver has ignored two polite notes. This is unacceptable, and I would ask for your help in clearing the bay.",
        question: "Which fault should be repaired first?",
        options: [
          { id: "a", text: "The double addition signal — 'Moreover, furthermore' — sitting on a single joint." },
          { id: "b", text: "The contrast marker 'however' in the second sentence, which should be removed." },
          { id: "c", text: "The closing request, which is too soft for a complaint." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The double addition signal — 'Moreover, furthermore' — sitting on a single joint.",
          "One joint is carrying two carriers from the same family, and the audit rule keeps exactly one: delete either word and the joint still announces addition clearly.",
          "(b) removes a legitimate contrast between the rental and the occupation; (c) confuses politeness with weakness — a courteous request is correct at semi-formal register.",
        ),
        tags: ["gwriting", "cohesion", "audit"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the joint in this informal letter with one contrast carrier at friendly register.",
        sentence: "The course got off to a rough start, ___ the second week was a huge improvement, to be honest.",
        acceptedAnswers: ["but", "though", "although", "having said that"],
        hints: ["The second half swings against the first — which family fits, at friendly register?"],
        feedback: fb(
          "But (or though, although, having said that).",
          "The two halves pull in opposite directions, so the joint carries contrast; a friendly letter gives the job to plain carriers — but, though — where a formal complaint would use however.",
          "An addition carrier such as also would tell your friend the two statements agree, when the second one clearly corrects the first.",
        ),
        tags: ["gwriting", "cohesion", "contrast"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A letter to a close friend moves from holiday news to the real reason for writing. Which pivot does the job?",
        hints: [],
        options: [
          { id: "a", text: "Furthermore, I would like to draw your attention to the purpose of this correspondence." },
          { id: "b", text: "Anyway, the reason I'm writing is that I need a small favour." },
          { id: "c", text: "Consequently, the purpose of this letter shall now be stated." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Anyway, the reason I'm writing is that I need a small favour.",
          "Anyway is the friendly pivot that returns a note to its business; the formal carriers in the other options arrive in the wrong clothes for a letter that opened with a friend's first name.",
          "(a) and (c) wear formal dress in a warm letter — register breaks that undo the tone the greeting promised.",
        ),
        tags: ["gwriting", "cohesion", "register"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the rule for the addressee's name.",
        question: "How often should a letter repeat the recipient's name, and what carries the topic forward instead?",
        acceptedAnswers: [
          "once or twice only, then reference words such as this issue or it",
          "use it once or twice, then chain the topic with reference words",
          "once or twice, carrying the topic forward with this, it or the key noun",
        ],
        keywords: ["once", "twice", "reference"],
        hints: [],
        feedback: fb(
          "Use the name once or twice, then let reference words — this issue, the arrangement, it — carry the topic forward.",
          "A name repeated at every sentence turn reads as a summons; the reference chain does the connecting work while keeping the letter's voice personal.",
          "Deleting the name entirely is the opposite error — one early mention anchors the register, and the chain takes over from there.",
        ),
        tags: ["gwriting", "cohesion", "reference"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Which sentence opens a bullet paragraph with a hinge?",
        hints: [],
        options: [
          { id: "a", text: "That brings me to my second concern — the noise from the extractor fan." },
          { id: "b", text: "I am writing to complain about the extractor fan, and I am also writing about the noise." },
          { id: "c", text: "The extractor fan. The noise. My second concern." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "That brings me to my second concern — the noise from the extractor fan.",
          "The hinge grips the previous paragraph (my second concern) while announcing the new one, so the reader crosses the break without a jolt.",
          "(b) repeats the letter's opening formula instead of moving the message forward; (c) offers fragments with no joint of any kind.",
        ),
        tags: ["gwriting", "cohesion", "hinges"],
      }),
    ],
    homework: [
      "Build the three-column linker bank — formal, semi-formal, informal — for the five jobs, two carriers per cell, then write one complaint sentence in all three voices.",
      "Take a letter you wrote in an earlier lesson, highlight every joint, and label each with its job; mark any carrier that breaks the letter's register.",
    ],
    assignment: {
      title: "Re-hinge a letter",
      instructions:
        "Choose a letter you have written in an earlier lesson or practice task. Label the job of every joint it contains — sequence, contrast, cause, addition, purpose return, or nothing where two sentences sit side by side unconnected. Then rewrite the letter so each bullet paragraph opens with a hinge to the paragraph before, every joint carries exactly one carrier in the letter's register, and every reference keeps a single clear antecedent. Submit the rewritten letter with the joint labels beside it.",
      minWords: 150,
      maxWords: 220,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-coherence",
    title: "Coherence",
    description:
      "The one-thread letter: purpose stated in the opening line and never lost, bullet paragraphs that each do one job, the reader's-questions test, and the essay's general-to-specific flow.",
    objectives: [
      "state a letter's purpose in its opening line and keep every paragraph in its service",
      "give each bullet paragraph exactly one job, so the letter advances instead of circling",
      "run the reader's-questions test over every paragraph, in both tasks",
      "build essay paragraphs on one controlling idea, moving from general claim to specific support",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Ask the person who has just read your letter to say, in one sentence, what it wanted. Their answer is your coherence, made audible. A General Training letter is a short document with a single job — to complain and request, to invite and inform, to explain and apologise — and the reader should meet that job in the first line and never lose sight of it. The examiner runs the same experiment at speed: a first sentence read for purpose, a skim for progression, a check that every paragraph is pulling the same cart. This lesson builds the invisible half of the connection score for the GT tasks: the thread stated once, the reader's-questions test that keeps each paragraph earning its place, and, in the essay, the controlling idea that turns a page of opinions into an argument.",
        beforeYouStart: [
          "You can plan a letter as one paragraph per bullet point, plus an opening line and a close.",
          "You have worked through cohesion, so the joints between your sentences are already under control.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both GT tasks: the letter's message and the essay's argument"],
          ["Task & question types", "Task 1 letters across the purpose families — complaints, requests, invitations, explanations, suggestions; Task 2 everyday essays in all five question families"],
          ["What is assessed", "Coherence: a purpose clear from the start, progression between paragraphs, information arranged for the reader's convenience"],
          ["Why this matters", "A letter is read once, quickly, often by a busy person; a message that has to be hunted for fails as a message, whatever its grammar"],
        ],
      },
      { type: "heading", text: "Component 1 — The thread, spoken in line one" },
      {
        type: "text",
        text: "A letter's thread is its single job, expressed in one sentence: what you want, from whom, by when, and why it matters. The thread belongs in the first sentence after the greeting, in words that match the register — 'I am writing to request a refund for the cooker hood delivered on 4 April' in a formal letter; 'Just a quick note to say we have moved — and to invite you to the housewarming' in a friendly one. Everything after that sentence is the thread being delivered: background that supports it, bullets that advance it, a close that returns to it. A letter that opens with three sentences of scenery before its purpose makes the reader excavate the message; a letter that states its business first lets every later sentence be read in its light. In the essay, the same craft appears as the position sentence — your answer to the question, stated in the introduction and never abandoned.",
      },
      { type: "heading", text: "Component 2 — Four tests of a one-thread letter" },
      {
        type: "steps",
        title: "Four tests of a one-thread letter",
        steps: [
          {
            title: "Test one: the first-line test",
            text: "Cover every sentence of your draft except the first. Can a stranger say what the letter wants? If not, the purpose is buried, and the repair is to move it up — the background can follow the request, but the request cannot follow the background. The test costs ten seconds and rescues the whole letter, because first impressions of a letter form exactly where the reader expects its business.",
            examples: [
              {
                english: "A semi-formal opening that passes: 'I am writing to ask whether the small hall is free on the evening of 14 June.'",
                note: "The reader knows the letter's business before knowing anything else about the writer.",
              },
            ],
          },
          {
            title: "Test two: the reader's-questions test",
            text: "Before drafting each paragraph, ask what the recipient would actually ask next. A complaint about a late parcel raises three questions in order — what happened, what it cost you, and what you want done — and the bullet points usually already are those questions. A paragraph that answers a question nobody asked is decoration, however well written; a letter that answers them out of order forces the reader to hold answers while still waiting for their questions. Write the reader's questions on the plan, in asking order, and give each one a paragraph.",
            examples: [
              {
                english: "An invitation's natural questions — when is it, where is it, what should I bring — become the letter's three bullet paragraphs, in exactly that order.",
                note: "The bullets are the reader's curiosity, itemised; the letter simply answers it in sequence.",
              },
            ],
          },
          {
            title: "Test three: the one-job test",
            text: "Each bullet paragraph does exactly one job: describes one problem, makes one request, explains one consequence. A paragraph that describes the broken hinge and then demands a refund is two paragraphs compressed — split it, or give the demand its own home in the close. The test is the letter-shaped version of the essay's rule that a paragraph carries one controlling idea: one job per paragraph means the reader can file each one under a single heading as they read.",
            examples: [
              {
                english: "A letter about a faulty gate splits its second half: the description ('the hinge has dropped a centimetre in a week') stays in body one, and the request ('I would ask that a fitter visit before the month ends') moves to its own closing paragraph.",
                note: "One job per paragraph, and the letter's plan becomes visible on the page.",
              },
            ],
          },
          {
            title: "Test four: the general-to-specific test",
            text: "This one belongs mostly to the essay. A body paragraph opens with its claim and descends to the specific: the everyday example, the named detail, the small scene that proves the general point. A paragraph that opens with an anecdote makes the reader hold it in suspense until the claim arrives, and suspense is the wrong instrument for argument. Claim above, evidence below — the reader always knows where they are standing.",
            examples: [
              {
                english: "Essay paragraph on shared housework: the claim first ('Children who cook one family meal a week learn planning, budgeting and timing'), then the specific scene ('a twelve-year-old scaling a recipe for four teaches more arithmetic than a worksheet').",
                note: "The general claim is cashed in at the kitchen counter — exactly where a GT essay wants it.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Two shapes, one thread" },
      {
        type: "text",
        text: "Both shapes end by returning to their thread. A letter's final sentence repeats the purpose in fresh words — the request made politely again, the invitation confirmed, the thanks restated — never a new topic, and never a bare sign-off with the business left hanging. An essay's conclusion restates the position in fresh words and stops; a conclusion that introduces a new argument confesses that the paragraphs above never settled the question. The return is what makes a short document feel complete: the reader ends where they began, knowing exactly what was asked of them.",
      },
      {
        type: "table",
        title: "Two shapes, one thread",
        headers: ["Move", "The letter", "The everyday essay"],
        rows: [
          ["Opening", "Greeting, then the purpose in the first line", "The question paraphrased, then the position in one sentence"],
          ["Body", "One paragraph per bullet, each answering a question the reader holds", "One controlling idea per paragraph, general claim to specific support"],
          ["Handovers", "A hinge phrase carries the reader across each paragraph break", "Each body opening echoes the paragraph before and announces its step"],
          ["Close", "The purpose returns in fresh words — request, invitation or thanks", "The position restated, with nothing new added"],
        ],
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Threads at work",
        items: [
          {
            english: "A formal first line that carries the whole letter: 'I am writing to request a refund for the cooker hood delivered on 4 April, which arrived with a cracked casing.'",
            note: "Purpose, item, date and fault in one sentence — the thread announces itself and every later paragraph serves it.",
            domain: "exam",
          },
          {
            english: "An invitation letter's three paragraphs answer, in order: when — Saturday the 12th; where — the riverside park by the café; what to bring — a dish and a chair.",
            note: "The reader's questions, asked and answered in asking order: the letter as a conversation.",
            domain: "exam",
          },
          {
            english: "An essay paragraph running general to specific: 'Local markets survive because they sell familiarity as much as produce. The stallholder who keeps a bag of plums aside for a regular is selling something no self-service checkout can.'",
            note: "The abstract noun — familiarity — is cashed in at one concrete stall: the paragraph's engine room.",
            domain: "exam",
          },
          {
            english: "A repaired opening: a draft that reached its request in paragraph four is rewritten so the same request opens the letter and the news follows it.",
            note: "When the thread leads, the background stops being a maze and becomes support.",
            domain: "exam",
          },
          {
            english: "A learner writes the recipient's three likely questions above the plan before drafting, and ticks each one off as its paragraph closes.",
            note: "The questions become a completeness check that costs thirty seconds and catches missing bullets.",
            domain: "study",
          },
          {
            english: "A shift-handover note: 'Three things for the next team: delivery at six, the freezer alarm is temperamental, the new starter begins Monday.'",
            note: "Purpose and plan in one line — the first-line rule in workplace clothes.",
            domain: "work",
          },
          {
            english: "A text about a visit: 'Coming on the 14th — one question: do you still have the spare key?' The purpose and its one question travel together.",
            note: "Everyday messages obey the first-line rule hardest of all, because their readers are standing on a pavement.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The coherence catalogue",
        items: [
          {
            wrong: "Some friendly warm-up before the purpose makes the letter feel natural.",
            right: "Announce the letter's business in the first sentence, at the register you have chosen, and let the warmth live inside the message.",
            reason: "In a letter of 170 words, three sentences of warm-up spend a fifth of the budget before the reader knows why the envelope was opened.",
          },
          {
            wrong: "Covering the topic from several angles makes the letter feel thorough.",
            right: "Run one thread and let each paragraph answer one question the recipient actually holds.",
            reason: "Coverage without a purpose reads as a collection of remarks; the scoring area is measuring a message, not an inventory.",
          },
          {
            wrong: "Two bullets can share a paragraph if they are related.",
            right: "Give every bullet its own paragraph, in the order the reader's questions arise.",
            reason: "The bullets are the task's own completeness list, and a paragraph that fuses two of them hides half of one from the examiner's tick-list.",
          },
          {
            wrong: "A strong conclusion will pull a wandering essay together.",
            right: "State the position in the introduction and let every paragraph advance it; conclusions close threads, they cannot create them.",
            reason: "A final paragraph that produces the essay's first clear position simply confesses that the four paragraphs before it had none.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Coherence across all four skills",
        reading: {
          text: "The notice said the community hall would stay closed for repairs until further notice. Twenty-two people still arrived for the Tuesday class. The tutor held the session on the steps outside, and it went so well that the group asked to keep meeting there in fine weather. When the council heard about it, the repairs were finally scheduled — and finished within a month.",
          task: "State the passage's thread in one sentence of your own, then name the sentence that carries it most directly.",
        },
        writing: {
          task: "A letter from a friend contains these notes: 'thanks for last weekend / we have moved! / new flat is tiny but sunny / housewarming on the 27th? / please bring your guitar'. Turn the notes into a plan: write the thread sentence, list the reader's likely questions in asking order, and draft the letter's opening and closing lines.",
          guide: [
            "Write the thread first: the letter's single job, in one sentence, at friendly register.",
            "List the questions a friend would ask next — where have you moved, what is the flat like, when exactly is the party, what should she bring.",
            "Give each question its own paragraph, in the order the friend would ask them.",
            "Close by returning to the thread in fresh words — the invitation confirmed, not a new topic.",
          ],
          model:
            "Thread: thank Julia for last weekend, announce the move, and invite her to the housewarming on the 27th. Her likely questions, in order: where have you moved to; what is the new flat like; when exactly is the party; what should she bring. Opening: 'Dear Julia, Huge thanks for last weekend — and I have news: we have finally moved!' Closing: 'So — the 27th, our place, seven o'clock, and the guitar is non-negotiable. Love, Tomas'",
        },
        listening: {
          script: "Right, quick one about Saturday. The market is on, that's settled. The question is the time — the stalls open at nine, but the good bread is gone by half past. So if we meet at the entrance at nine sharp, we get both. Oh, and wear boots; it has rained all week and the lane is a river.",
          task: "Which sentence carries the speaker's main thread, and which questions does the rest of the message answer in order?",
        },
        speaking: {
          task: "Give a one-minute answer to 'Should shops in your town open on Sundays?', holding one position from the first sentence to the last.",
          frames: [
            "My position in one sentence is ...",
            "The main reason is ...",
            "One step further: ...",
            "That is why ...",
          ],
          checklist: [
            "My first sentence carried a position, not just a topic.",
            "Each reason advanced the position by one step of its own.",
            "My closing sentence carried the position home in different words.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Writes the thread sentence before any part of the letter", "The thread decides the paragraph map; without it the notes stay a list of remarks"],
          ["Turns the friend's likely questions into paragraphs, in asking order", "Each paragraph then answers a curiosity the reader genuinely holds — which is what progression means"],
          ["Keeps the invitation for the close and confirms it in fresh words", "The ending returns to the thread instead of raising a new one, so the letter lands complete"],
          ["Holds the friendly register across every planned line", "Coherence in a letter includes tonal consistency — the plan holds the voice as well as the content"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the letter's purpose beside the bullets — complaint plus request, invitation plus details — before drafting a single sentence."],
          ["While the clock runs", "Open each paragraph by answering the reader's next question, and keep one job per paragraph."],
          ["If you are stuck", "If a paragraph refuses to behave, ask what the recipient would ask next; the missing question usually names the missing paragraph."],
          ["Final minutes", "Re-read only the first and the last sentences: if they state the same business in different words, the thread held."],
        ],
      },
      {
        type: "summary",
        points: [
          "Coherence is the logic beneath the machinery: a letter with one job, held from the first line to the last.",
          "The purpose belongs in the opening sentence, at the register the greeting set — never buried under warm-up.",
          "The reader's-questions test: every paragraph answers a question the recipient would actually ask, in asking order.",
          "One job per bullet paragraph; a paragraph doing two jobs is two paragraphs compressed, and one of them is hiding.",
          "Essay paragraphs run one controlling idea from general claim to specific support, and the close returns to the position without adding anything new.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What is the difference between cohesion and coherence?",
            options: ["Cohesion is the surface machinery; coherence is the logic it serves", "They are two names for the same craft", "Cohesion is vocabulary; coherence is handwriting"],
            correctIndex: 0,
            explanation: "Cohesion covers the visible signals — linkers, hinges, reference — while coherence is the single job those signals serve: one thread, felt from the first line.",
            from: "Cohesion",
          },
          {
            question: "In the essay, the printed task words — 'discuss', 'give reasons', 'do you agree' — set your deliverables. Which earlier lesson taught you to find them?",
            options: ["Analysing question requirements", "Planning", "Vocabulary"],
            correctIndex: 0,
            explanation: "The deliverables you circled at analysis time become the paragraphs that must all serve the essay's thread; a paragraph with no deliverable has no job.",
            from: "Analysing question requirements",
          },
          {
            question: "Where does a letter's purpose belong?",
            options: ["In the first sentence after the greeting", "In the final paragraph, as a conclusion", "Spread evenly across the whole letter"],
            correctIndex: 0,
            explanation: "The first-line test puts the purpose where the reader looks for it; everything after the first sentence is detail in its service.",
            from: "Four tests of a one-thread letter",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Where should a GT letter state its purpose?",
        hints: ["Think about the reader opening the envelope with no idea what is inside."],
        options: [
          { id: "a", text: "In the first sentence after the greeting, in words that match the register." },
          { id: "b", text: "In the final paragraph, so the request is the last thing the reader holds." },
          { id: "c", text: "In the middle, once enough background has been given." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "In the first sentence after the greeting, in words that match the register.",
          "A busy reader decides within one line why the letter exists; the purpose up front lets every following paragraph be read as its servant.",
          "(b) makes the reader excavate the message through a page of background; (c) spends scarce words on scenery before the letter's business is even known.",
        ),
        tags: ["gwriting", "coherence", "thread"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the letter opening and judge its thread.",
        hints: ["Cover everything after the first sentence: what does the reader know?"],
        passageTitle: "Where is the thread?",
        passage:
          "Dear Ms Duarte, I hope this letter finds you well. The weather here has been extraordinary lately, and the garden has never looked better. My sister visited last weekend with the twins, and we spent all of Sunday by the lake. Anyway, I am writing to ask whether the garage could be repainted before the winter, as we agreed in March.",
        question: "What is the clearest coherence fault?",
        options: [
          { id: "a", text: "The purpose arrives only in the final sentence, after four lines of warm-up that serve it." },
          { id: "b", text: "The letter mentions the weather, which is never allowed in a semi-formal letter." },
          { id: "c", text: "The greeting 'Dear Ms Duarte' is too warm for a request." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The purpose arrives only in the final sentence, after four lines of warm-up that serve it.",
          "The thread — the garage repaint agreed in March — is real but buried; the first-line test would move it to sentence one and let the family news follow it or go.",
          "(b) invents a ban that does not exist; (c) misreads the greeting, which suits a known landlord or manager perfectly.",
        ),
        tags: ["gwriting", "coherence", "first-line"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the formal opening so the purpose arrives in line one.",
        sentence: "Dear Sir or Madam, I am ___ to report that the bicycle I ordered (item 4021) arrived with a bent frame.",
        acceptedAnswers: ["writing"],
        hints: ["Two words in total: the standard formal purpose formula."],
        feedback: fb(
          "Writing — 'I am writing to report ...'.",
          "The formal formula places the letter's whole business in the first line, and report names the job precisely: a fault the company must be told about and act on.",
          "An informal opener such as 'just a quick note' would break the register the Dear-Sir-or-Madam greeting has just set.",
        ),
        tags: ["gwriting", "coherence", "register"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. An essay paragraph opens: 'My neighbour's daughter earns her pocket money walking dogs.' The paragraph's claim is that part-time work teaches responsibility. What is the fault?",
        hints: [],
        options: [
          { id: "a", text: "The example arrives before the claim, so the reader holds it in suspense." },
          { id: "b", text: "Dogs are too everyday a subject for a GT essay." },
          { id: "c", text: "The paragraph lacks a linking word at the opening." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The example arrives before the claim, so the reader holds it in suspense.",
          "General-to-specific flow means the claim leads and the example supports; reversed, the anecdote forces the reader to guess the point it serves until the paragraph's end.",
          "(b) is exactly backwards — GT essays live on everyday material; (c) confuses the two lessons: the fault is order, not linkage.",
        ),
        tags: ["gwriting", "coherence", "flow"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the test that decides whether a paragraph earns its place.",
        question: "Which test checks that every paragraph of a letter answers something the recipient would actually ask?",
        acceptedAnswers: [
          "the reader's questions test",
          "the reader's-questions test",
          "the readers questions test",
          "the reader's question test",
        ],
        keywords: ["reader", "question"],
        hints: [],
        feedback: fb(
          "The reader's-questions test.",
          "Each paragraph is checked against a question the recipient genuinely holds — what happened, what it cost, what you want — and a paragraph answering an unasked question is decoration.",
          "No other test in this lesson consults the recipient; audits that only reread your own taste cannot tell a necessary paragraph from a pleasing one.",
        ),
        tags: ["gwriting", "coherence", "reader"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. A letter must thank a weekend host and invite them to a return dinner. How should the two jobs be arranged?",
        hints: [],
        options: [
          { id: "a", text: "One thread: the thanks opens the letter, the invitation is where the letter travels, and the close confirms it." },
          { id: "b", text: "Both jobs in one long paragraph, to keep the letter compact." },
          { id: "c", text: "The invitation first, with the thanks filling the rest of the page." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "One thread: the thanks opens the letter, the invitation is where the letter travels, and the close confirms it.",
          "Two purposes form one thread when the opening names the first and the letter moves to the second; the close then confirms the destination in fresh words.",
          "(b) fuses two jobs into one paragraph, hiding the second; (c) buries the thanks the letter exists to give beneath its own destination.",
        ),
        tags: ["gwriting", "coherence", "thread"],
      }),
    ],
    homework: [
      "Take three GT letter prompts and, for each, write the reader's three likely questions before anything else; compare your questions with the printed bullets.",
      "Write one essay body paragraph on an everyday topic — pocket money, family meals, walking to school — with the claim in the first sentence and one specific, named example in the second half.",
    ],
    assignment: {
      title: "Lead with the thread",
      instructions:
        "Take a letter you have written in an earlier lesson or a practice task. First write its thread sentence — the letter's single job in one line. Then rewrite the letter so the thread opens it, each bullet paragraph answers one question the recipient would ask, in asking order, and the close returns to the thread in fresh words. Submit the thread sentence above the rewritten letter.",
      minWords: 150,
      maxWords: 220,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-punctuation",
    title: "Punctuation",
    description:
      "The marks a letter lives by: greeting and sign-off commas, sentence boundaries in both tasks, the comma splice and its three repairs, apostrophes at two registers, capitals, and the final-mark sweep.",
    objectives: [
      "place the commas that greetings and sign-offs require, and end every sentence with its proper mark",
      "repair a comma splice with one of three tools — full stop, semicolon or conjunction — chosen by register",
      "use apostrophes for possession everywhere and for contraction in informal letters, never confusing the two",
      "run the final-mark sweep — capitals, end marks, apostrophes, frame commas — in the last checking minutes",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Punctuation is grammar made visible, and in General Training Writing part of it is on display before the first sentence even begins: a letter's greeting and sign-off each demand their comma, and their absence is the first thing a trained reader notices. Inside the script, the marks carry meaning — a missing full stop fuses two thoughts, a stray apostrophe changes who owns what — and the boundaries they keep are scored wherever grammar is scored. This lesson works the GT writer's territory: the frame commas every letter needs, the sentence boundaries both tasks live by, the comma splice and its three repairs, the apostrophe's two jobs at two registers, and the final sweep that catches the marks writers drop when the clock is loudest.",
        beforeYouStart: [
          "You can write complete sentences with capital letters and end marks already under control.",
          "You know the three letter registers and the greeting and sign-off each one uses.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both GT tasks, every script, from the first comma to the last full stop"],
          ["Task & question types", "Task 1 letters, whose greeting and sign-off add frame punctuation no essay has; Task 2 essays in formal punctuation throughout"],
          ["What is assessed", "Punctuation is read as part of grammatical accuracy, and boundary errors are among the most visible errors a script can carry"],
          ["Why this matters", "A splice or a missing mark interrupts the examiner's reading at exactly the moments control is being judged, and every repair in this lesson costs seconds"],
        ],
      },
      { type: "heading", text: "Component 1 — Boundaries before decoration" },
      {
        type: "text",
        text: "A sentence is one complete thought with its own subject and verb, and the end mark is its gate: a full stop for statements, a question mark for real questions, an exclamation mark — informal letters only — for genuine surprise or warmth. The discipline is to write boundaries you can hear: read a sentence in your head at speaking speed, and where a speaker would stop, the sentence needs its gate. The commonest boundary failure in learner letters is the comma splice: two complete sentences sharing one comma, as if a comma could hold up a gate made for a full stop. It cannot. The splice shouts from the page, it multiplies when writers are tired, and — like every fault in this lesson — it has repairs that take less time than the error took to make.",
      },
      { type: "heading", text: "Component 2 — Five stations on the proofread" },
      {
        type: "steps",
        title: "Five stations on the proofread",
        steps: [
          {
            title: "Station one: the frame — commas at both edges",
            text: "Every English letter is framed by two commas that belong to convention, not style: one after the greeting (Dear Sam, / Dear Mr Ferreira, / Dear Sir or Madam,) and one after the sign-off (Yours sincerely, / Warm regards, / Take care,) before the name begins. The greeting and sign-off sit on their own lines, which fools writers into leaving the commas out; the lines are layout, but the commas are punctuation, and they are required in every register from the stiffest complaint to the warmest note.",
            examples: [
              {
                english: "A friendly letter's frame, complete: 'Dear Priya,' on the top line and 'Take care,' above the name — two commas, one convention, no exceptions.",
                note: "Frame commas are the letter's handshake: tiny, expected, and missed when absent.",
              },
            ],
          },
          {
            title: "Station two: the end of every sentence",
            text: "Check that every sentence ends with the right gate: a full stop for statements, a question mark for questions — including polite request questions such as 'Could you confirm the date?' — and, in informal letters only, an exclamation mark where genuine feeling earns it, at most once or twice. In essays the exclamation mark simply does not appear, and rhetorical questions are rare enough to avoid. Letters to friends are the one GT script where a warm exclamation reads as voice rather than as error.",
            examples: [
              {
                english: "A formal request question punctuated correctly: 'Could you arrange for an engineer to visit before 20 June?'",
                note: "The question mark carries the courtesy — a full stop would turn the request into an instruction.",
              },
            ],
          },
          {
            title: "Station three: the splice, and its three repairs",
            text: "When you find two complete sentences sharing one comma — 'The heating failed on Monday, the engineer came on Wednesday' — three tools repair it. A full stop makes two sentences and is never wrong, in any register. A semicolon claims a close bond between the two, and suits formal letters and essays best. A conjunction (and, but, so, because, while) builds one sentence that carries the relation openly, and fits every register there is. Choose by the relation and the register; when in doubt, take the full stop — nothing plain was ever marked down for it.",
            examples: [
              {
                english: "Three repairs of one splice: 'The heating failed on Monday. The engineer came on Wednesday.' / '...on Monday; the engineer came on Wednesday.' / '...on Monday, and the engineer came on Wednesday.'",
                note: "Same two events, three legal joins — the writer chooses how tightly to bind them.",
              },
            ],
          },
          {
            title: "Station four: apostrophes — two jobs, one mark",
            text: "The apostrophe does exactly two jobs. It contracts — standing where letters left a shortened form: I'm, can't, we've — and it possesses — marking ownership: the landlord's reply, my parents' flat. Register decides how visible the contraction job is: informal letters welcome contractions; formal letters and the essay usually spell both words out (I am, cannot). The two classic confusions are its versus it's — its already owns, no mark; it's always means it is or it has — and simple plurals, which never take an apostrophe at all.",
            examples: [
              {
                english: "Both jobs in one friendly line: 'We've settled in, and the neighbours' dog has already adopted our sofa as its second home.'",
                note: "A contraction, a plural possessive and a possessive its — three correct apostrophe decisions in thirty words.",
              },
            ],
          },
          {
            title: "Station five: capitals and the final-mark sweep",
            text: "Capitals begin every sentence, name every person, street, company, day and month, and ride on the pronoun I wherever it appears — including inside contractions (I'd, I'll). The final-mark sweep is a scanning habit, not a re-read: run your eye down the finished script looking only for marks — a capital at every opening, a gate at every close, an apostrophe decision wherever the mark appears, and the two frame commas. The sweep takes under a minute, reads marks rather than meaning, and routinely catches what admiring a finished draft never will.",
            examples: [
              {
                english: "A sweep over a finished letter finds one sign-off comma missing and a 'cant' without its apostrophe — two fixes, ten seconds.",
                note: "The sweep hunts marks, not style: that narrowness is exactly why it works in the last minutes.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The apostrophe and the capital" },
      {
        type: "table",
        title: "Apostrophes: two jobs, one mark",
        headers: ["Use", "The rule", "In a script"],
        rows: [
          ["Contraction, informal", "The mark stands where letters left: I'm, can't, won't", "I'd love to visit — let's fix a weekend in June."],
          ["Contraction expanded", "Formal letters and essays spell both words: I am, cannot", "I am unable to attend, as the meeting was moved."],
          ["Possession, singular", "Add 's to one owner", "The landlord's reply arrived within the hour."],
          ["Possession, plural", "The mark follows the plural s", "The tenants' committee meets on Thursdays."],
          ["Its and it's", "Its owns; it's contracts it is or it has", "The hall has its own kitchen; it's booked for the 14th."],
          ["Plurals", "Plain plurals never take the mark", "Two weekends, three keys, no apostrophes anywhere."],
        ],
      },
      {
        type: "text",
        text: "Capital letters are small decisions made constantly: names of people and places, streets and companies, days and months (but not seasons), the first word of every sentence, the pronoun I, and the Dear that opens every greeting. In letters, the recipient's name and the company's exact registered name deserve their capitals checked — writing to 'dear sir' or 'the ashcroft letting agency' undoes in one line the care a letter elsewhere shows. The exclamation mark, finally, is the one mark formal scripts leave at home: one or two in a letter to a friend is voice, but in a formal complaint or an essay it reads as volume the register never licensed. When in doubt in the formal scripts, leave it out.",
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Marks at work and under repair",
        items: [
          {
            english: "A splice repaired in a formal letter: 'The window has leaked twice, the original seal dates from 2019' becomes 'The window has leaked twice; the original seal dates from 2019.'",
            note: "The semicolon suits the formal register and claims the close bond the two faults share.",
            domain: "exam",
          },
          {
            english: "Contractions at home in an informal letter: 'I'd love to come, and I'll bring the salad — just don't expect anything hotter than that.'",
            note: "Three contractions in one warm sentence: correct at friendly register, wrong one register up.",
            domain: "exam",
          },
          {
            english: "An essay sentence in formal punctuation: 'When families eat together, children learn patience and turn-taking; those habits rarely survive a meal eaten alone with a screen.'",
            note: "No contractions, one semicolon, an opener comma: the essay's punctuation uniform.",
            domain: "exam",
          },
          {
            english: "A possessive pair audited: 'The applicants' files were complete, but one applicant's signature was missing.'",
            note: "Plural possession and singular possession in one sentence — the mark moves, and the meaning moves with it.",
            domain: "exam",
          },
          {
            english: "A learner taps the desk at every sentence-final mark while reading a finished letter; three sentences in a row end bare, and all three get their gates.",
            note: "The tapping drill hears boundaries faster than a tired eye sees them.",
            domain: "study",
          },
          {
            english: "A staff message repaired: 'The van's loaded, it leaves at six' becomes 'The van is loaded, and it leaves at six.'",
            note: "The cheapest repair in the box — one conjunction — used where a semicolon would sound stiff.",
            domain: "work",
          },
          {
            english: "A card to a neighbour, fully framed: 'Dear Mr and Mrs Nowak, Thank you for watering the plants — they're thriving! Best wishes, Ines'",
            note: "Frame commas, one contraction, one licensed exclamation: a whole letter's punctuation in two lines.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The punctuation catalogue",
        items: [
          {
            wrong: "A comma can join two complete sentences; it keeps the letter flowing.",
            right: "Join two full sentences only with a full stop, a semicolon or a conjunction — never with a bare comma.",
            reason: "Splices shout from the page in exactly the scripts that can least afford them, and every repair in the toolkit takes less time than the error took to write.",
          },
          {
            wrong: "Contractions are always too casual, so I avoid them everywhere.",
            right: "Welcome contractions in informal letters, and spell both words out in formal letters and the essay.",
            reason: "Register decides, not fear: a friendly letter without contractions sounds stiff, and a formal letter full of them sounds hurried.",
          },
          {
            wrong: "Its is the possessive of it, so it needs an apostrophe like the landlord's.",
            right: "Its already owns and takes no mark; it's is always a contraction of it is or it has.",
            reason: "Possessive pronouns never carry the apostrophe; adding one to its creates the exact error the final-mark sweep exists to catch.",
          },
          {
            wrong: "The greeting and the sign-off stand on their own lines, so they need no commas.",
            right: "Every greeting and every sign-off takes its comma, in every register: Dear Sara, and Yours sincerely, alike.",
            reason: "The frame commas are fixed convention at the letter's two edges — the first and last places a trained reader looks.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Punctuation across all four skills",
        reading: {
          text: "Dear Mr Baptiste, I am writing about the bicycle parked in hallway B. It has been locked to the railings since Friday, and it is blocking the fire door. The building's rules are clear on this point, and I would rather solve it with a note than with a fine. Could you move the bicycle by tomorrow evening? Yours sincerely, L. Farrow",
          task: "Find the frame commas, the direct question with its mark, and the possessive — then say what each contributes to the letter's tone.",
        },
        writing: {
          task: "The extract below comes from a semi-formal letter to a landlord and contains four punctuation faults: two splices, one missing frame comma and one possessive without its apostrophe. Find and repair all four. 'Dear Mr Iqbal, The boiler stopped again on Tuesday, the kitchen was freezing by morning. My sons room is the coldest one, it faces north. I would be grateful if you could send an engineer this week. Yours sincerely D. Whitfield'",
          guide: [
            "Read for gates first: two sentence pairs have been fused with bare commas.",
            "Choose repairs that suit a landlord letter — conjunctions or full stops rather than dashes.",
            "Check the possessive: whose room is the cold one?",
            "Check the frame: what does every sign-off line in English end with?",
          ],
          model:
            "Dear Mr Iqbal, The boiler stopped again on Tuesday, and the kitchen was freezing by the following morning. My son's room is the coldest one, since it faces north. I would be grateful if you could send an engineer this week. Yours sincerely, D. Whitfield",
        },
        listening: {
          script: "Okay, so the party's on the fifth — that's a Friday. Don't bring anything except yourselves; we've got it covered. Oh, and it's my brother's birthday too, so bring your loudest singing voice. See you there!",
          task: "Catch party's, don't, we've, it's and brother's — and decide for each whether it is a contraction or a possessive.",
        },
        speaking: {
          task: "Complain politely for one minute about a delivery that arrived three days late and damaged, as if speaking to the company's manager.",
          frames: [
            "I am writing to express ...",
            "I would be grateful if ...",
            "To make matters worse, ...",
            "I look forward to ...",
          ],
          checklist: [
            "I used no contractions, because my register was formal.",
            "My three faults arrived as a properly punctuated list.",
            "My request closed with its rising question intonation where I asked one.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Repairs each splice with the plain tools — and, since", "Conjunctions restore the boundary while keeping a landlord letter courteous; no dashes, no ceremony"],
          ["Restores the possessive in 'son's room'", "One son, one cold room: the apostrophe's position settles who owns what"],
          ["Adds the comma after 'Yours sincerely,'", "The frame convention is repaired at the letter's edge, where readers look first"],
          ["Keeps every contraction out of the semi-formal script", "Spelled-out forms match the tone of a request to someone addressed by surname"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Settle the register first: it decides your contractions, your semicolons and whether an exclamation mark is allowed at all."],
          ["While the clock runs", "End each sentence as you write it — a gate made on the spot costs nothing, and a gate added later costs a proofread."],
          ["If you are stuck", "If a sentence refuses to end cleanly, split it at the comma you keep writing; two short sentences beat one fused pair."],
          ["Final minutes", "Run the final-mark sweep: capitals at openings, gates at closings, apostrophe decisions, and the two frame commas."],
        ],
      },
      {
        type: "summary",
        points: [
          "Boundaries first: every sentence ends with a full stop or a question mark; exclamation marks live in informal letters only.",
          "The letter's frame takes commas on both edges — Dear Sara, at the top, Yours sincerely, at the foot — in every register.",
          "The comma splice has three repairs: full stop, semicolon or conjunction, chosen by the bond and the register.",
          "Apostrophes do two jobs — contraction in informal letters, possession everywhere — its owns, it's contracts, and plurals never take the mark.",
          "The final-mark sweep — capitals, gates, apostrophes, frame commas — reads marks, not meaning, and is the cheapest proofread the hour offers.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "The splice repairs borrow their conjunctions from which earlier lesson's linker families?",
            options: ["Cohesion", "Coherence", "Planning"],
            correctIndex: 0,
            explanation: "The conjunction that repairs a splice is chosen exactly as a linker is: by the relation between the two sentences, then by the register of the script.",
            from: "Cohesion",
          },
          {
            question: "Where does a letter's purpose belong, and therefore its first full stop?",
            options: ["In the first sentence after the greeting", "In the final paragraph", "In the sign-off"],
            correctIndex: 0,
            explanation: "The coherence lesson put the letter's business in line one; punctuation then gives that line its gate, and every later boundary follows it.",
            from: "Coherence",
          },
          {
            question: "Which earlier lesson built your bank of formal and friendly word pairs, so that register choices are ready before you write?",
            options: ["Vocabulary", "Cohesion", "Punctuation"],
            correctIndex: 0,
            explanation: "The vocabulary bank pairs formal and friendly carriers; the apostrophe's contraction-or-spelled-out choice is that bank's punctuation wing.",
            from: "Vocabulary",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What punctuation does every English letter's greeting and sign-off require?",
        hints: ["Look at the two edges of the letter, top and bottom."],
        options: [
          { id: "a", text: "A comma after each: Dear Sara, at the top and Yours sincerely, at the foot, in every register." },
          { id: "b", text: "A full stop after the greeting, because it stands as a complete line." },
          { id: "c", text: "Nothing at all — separate lines make commas unnecessary." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A comma after each: Dear Sara, at the top and Yours sincerely, at the foot, in every register.",
          "The frame is convention, not style: both edges take the comma whether the letter complains to a company or hugs a friend, and readers notice the marks' absence first.",
          "(b) treats a salutation as a sentence; (c) confuses layout with punctuation — the lines are visual, the commas are grammar.",
        ),
        tags: ["gwriting", "punctuation", "frame"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the letter extract and find the boundary fault.",
        hints: ["Look for two complete sentences sharing one comma."],
        passageTitle: "Splice hunt",
        passage:
          "Dear Ms Reyes, Thank you for the replacement key, it arrived on Thursday morning. The lock itself is still stiff, the door needs two hands and a shoulder. I would be grateful if the locksmith could look at it once more. Yours sincerely, P. Ashworth",
        question: "Which sentence contains the clearest boundary fault?",
        options: [
          { id: "a", text: "The second: 'The lock itself is still stiff, the door needs two hands and a shoulder' fuses two full sentences with one comma." },
          { id: "b", text: "The first, because 'Thursday morning' is too precise for a letter." },
          { id: "c", text: "The third, because requests must never be a single sentence." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The second: 'The lock itself is still stiff, the door needs two hands and a shoulder' fuses two full sentences with one comma.",
          "Two independent sentences cannot share one comma; the repair is a full stop, a semicolon or a conjunction — and 'two hands and a shoulder' already belongs inside the second sentence.",
          "(b) mistakes precision for a fault; (c) invents a length rule that no letter obeys.",
        ),
        tags: ["gwriting", "punctuation", "splice"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Repair the splice by completing it with one contrast conjunction.",
        sentence: "The hall is booked for the 14th, ___ the manager has not confirmed the chairs.",
        acceptedAnswers: ["but", "yet", "though"],
        hints: ["The second half works against the first — which conjunction repairs the join?"],
        feedback: fb(
          "But (or yet, though).",
          "The two clauses pull in opposite directions, so a contrast conjunction repairs the splice while making the relation explicit — something the bare comma never did.",
          "A cause carrier such as because would mislabel the join, telling the reader the booking caused the chair problem.",
        ),
        tags: ["gwriting", "punctuation", "splice"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence uses the apostrophe correctly for both of its jobs?",
        hints: [],
        options: [
          { id: "a", text: "My parents' flat is small, but it's the sunniest one in the building." },
          { id: "b", text: "My parent's flat is small, but its the sunniest one in the building." },
          { id: "c", text: "My parents flat is small, but it's the sunniest one in they're building." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "My parents' flat is small, but it's the sunniest one in the building.",
          "Parents' marks plural possession — two parents, one flat — and it's contracts it is: the apostrophe's two jobs, each done once and done right.",
          "(b) loses the plural and then mistakes its for it's; (c) drops the possessive mark entirely and pairs it's with the wrong homophone.",
        ),
        tags: ["gwriting", "punctuation", "apostrophe"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the splice rule.",
        question: "Name the three tools that repair a comma splice.",
        acceptedAnswers: [
          "a full stop, a semicolon and a conjunction",
          "full stop, semicolon, conjunction",
          "a period, a semicolon and a joining word",
          "a full stop, a semicolon or a conjunction",
        ],
        keywords: ["full stop", "semicolon", "conjunction"],
        hints: [],
        feedback: fb(
          "A full stop, a semicolon and a conjunction.",
          "The three repairs restore the boundary differently — separation, formal partnership, or an openly carried relation — and the choice follows the bond between the sentences and the register of the script.",
          "Re-reading the sentence or adding a second comma only decorates the fault; the boundary stays broken until one of the three tools arrives.",
        ),
        tags: ["gwriting", "punctuation", "splice"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Which decision is register-correct?",
        hints: [],
        options: [
          { id: "a", text: "A formal complaint that spells out 'I am' and 'cannot' from first line to last." },
          { id: "b", text: "A letter to a close friend that spells out 'I am' and 'cannot' from first line to last." },
          { id: "c", text: "An essay that uses 'can't' and 'it's' to sound warm." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A formal complaint that spells out 'I am' and 'cannot' from first line to last.",
          "Formal scripts expand their contractions; friendly letters welcome them, and the essay keeps the formal habit even on the friendliest everyday topic.",
          "(b) sounds stiff in a note to a close friend; (c) imports a letter's warmth into a genre whose punctuation uniform has no contractions.",
        ),
        tags: ["gwriting", "punctuation", "register"],
      }),
    ],
    homework: [
      "Write the same three-sentence complaint twice — once as a formal letter paragraph with every contraction expanded, once as a friendly note full of them — and mark every apostrophe in both.",
      "Take one page of your own writing and run the final-mark sweep: capitals, gates, apostrophes, frame commas; log what it finds in your error list.",
    ],
    assignment: {
      title: "The punctuation repair shop",
      instructions:
        "The letter below contains six punctuation faults: two comma splices, one missing frame comma, one possessive without its apostrophe, one bare 'its' that should be 'it's', and one sentence with no final mark. Repair all six with the tools this lesson teaches, then write one sentence beside each repair saying why it suits the letter's semi-formal register. 'Dear Mr Osei, The spare key you left at reception does not work, the lock was changed in March. My sisters flat is upstairs, its the one with the blue door. I will be out until six, the neighbour has the spare Yours sincerely R. Boateng'",
      minWords: 120,
      maxWords: 220,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-sentence-variety",
    title: "Sentence variety",
    description:
      "Range that keeps the letter's voice intact: short warm sentences beside longer ones, genuine questions to a friend, relative clauses and conditionals in the essay, and fronted phrases that link as they vary.",
    objectives: [
      "alternate short warm sentences with longer complex ones inside one register",
      "use genuine questions in informal letters and request-shaped questions in formal ones",
      "extend essay sentences with relative clauses and conditionals that stay controlled",
      "front adverbial phrases to vary openings and link paragraphs without stacking linkers",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Range is what the grammar area of the scoring rewards in visible, countable form: short sentences beside long ones, questions beside statements, clauses that extend a thought without losing it. In General Training Writing, range has a keeper — the voice. A friendly letter made of uniform twenty-word sentences loses its warmth; an essay of eight-word sentences loses its maturity; and a warm letter suddenly wearing 'notwithstanding' has not gained range but lost register. This lesson installs four moves that vary the shapes a script can hold — alternating lengths, the genuine question, the controlled clause, the fronted phrase — each one reversible, each one priced for accuracy, and each one working inside the register the greeting or the essay question has already set.",
        beforeYouStart: [
          "You can write simple, compound and complex sentences with their boundaries under control.",
          "You know the three letter registers and the essay's semi-formal register.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both GT tasks, every script"],
          ["Task & question types", "Task 1 letters at all three registers; Task 2 essays, where complex sentences are expected but must stay controlled"],
          ["What is assessed", "Grammatical range and accuracy: the mix of sentence types, lengths and openings, deployed without breaking tone or correctness"],
          ["Why this matters", "Range is the most countable thing an examiner sees, and the riskiest — every added clause is a new chance to err — so this lesson prices every upgrade"],
        ],
      },
      { type: "heading", text: "Component 1 — Range inside one voice" },
      {
        type: "text",
        text: "The first law of variety in GT Writing is that the voice outranks the range. Every move in this lesson must pass a register test before it earns its place: a short sentence is warm in a friendly letter and blunt in a formal one; a question is an invitation to a friend, a courtesy in a formal request, and an oddity in an essay. The natural rhythm of a friendly letter alternates — a few warm words, then a longer sentence carrying the detail — and the natural rhythm of an essay works at greater length, with clauses that carry conditions and consequences. Uniformity fails in both directions: a page of identical short sentences reads as a list, and a page of identical long ones reads as effort. Variety is the mix between them, chosen on purpose.",
      },
      { type: "heading", text: "Component 2 — Four moves for a letter-shaped range" },
      {
        type: "steps",
        title: "Four moves for a letter-shaped range",
        steps: [
          {
            title: "Move one: alternate the lengths",
            text: "Take any paragraph of a friendly letter and check its breathing: a short sentence (three to eight words) followed by a longer one (fifteen to twenty-five) reads as a person talking, because speech runs in exactly that rhythm. If every sentence is long, split one; if every sentence is short, join two with a conjunction or a relative clause. The pair is what shows — one short sentence alone is just a short sentence, but a short sentence beside a long one is visible range.",
            examples: [
              {
                english: "A friendly pair: 'We loved the weekend. The children are still talking about the bonfire, and I have promised them a return trip before the summer ends.'",
                note: "Four words, then twenty-two — the letter breathes, and the examiner can see it.",
              },
            ],
          },
          {
            title: "Move two: ask the friend a real question",
            text: "A genuine question — 'How have you been?' 'Did the course finish in June?' — is the informal letter's own variety move: it changes the sentence's shape, invites the reply the letter exists to continue, and costs no accuracy at all. In formal letters the same shape softens a request ('Could you possibly send someone before the 20th?'); in the essay, questions are left at home — the essay asks and answers in statements. One question per friendly letter is usually enough; three in a row turns a note into an interrogation.",
            examples: [
              {
                english: "Three shapes in three lines: 'How have you been since the move? We still owe you a dinner. Name any weekend in May.'",
                note: "A question, a statement, an invitation — three shapes, one friendly voice.",
              },
            ],
          },
          {
            title: "Move three: extend with relatives and conditionals",
            text: "The essay's complexity workhorses are the relative clause, which adds detail inside a sentence ('residents who live alone', 'the bus that circles the estate'), and the conditional, which carries an everyday argument's if-and-then ('if the service disappears, the pharmacy becomes a forty-minute walk'). Deploy one of each per sentence at most, and read the result back once: a controlled clause earns its place, a wobbling one is split without regret. These are the shapes the essay's range is read for, and they cost nothing when both halves arrive.",
            examples: [
              {
                english: "An essay sentence with both workhorses: 'Older residents who live alone often depend on the bus that circles the estate; if that service disappears, the pharmacy becomes a forty-minute walk.'",
                note: "Two relative clauses and one conditional — complexity the reader can still ride.",
              },
            ],
          },
          {
            title: "Move four: lead with a fronted phrase",
            text: "Move a time, place or condition phrase to the front of the sentence — 'After the market closes, the square fills with teenagers' — and two jobs are done at once: the opening shape varies (the third 'The' in a row never arrives), and the phrase links the sentence to the scene before it, doing cohesion work without a linker. One fronted phrase per paragraph is plenty; two in a row becomes a pattern of its own, which is the very monotony fronting exists to break.",
            examples: [
              {
                english: "A fronted time phrase in an essay: 'When the lifts fail, the tower's elderly residents climb six storeys with their shopping.'",
                note: "The front position belongs to the pressure, not the actor — variety and linkage in one move.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Where each shape earns its keep" },
      {
        type: "table",
        title: "The shapes and their territories",
        headers: ["Shape", "In a letter", "In the essay"],
        rows: [
          ["The short sentence", "Warmth and rhythm in friendly letters: 'It was grand to meet her.'", "The emphatic close of a paragraph: 'The cost is real.'"],
          ["The genuine question", "An invitation to reply: 'How have you been?'", "Left at home — essays ask and answer in statements"],
          ["The request question", "Formal courtesy: 'Could you possibly confirm the date?'", "Rare to the point of absence"],
          ["The relative clause", "Detail inside one sentence: 'the path that runs behind the garages is unlit'", "The argument's connective tissue: 'residents who live alone'"],
          ["The conditional", "Everyday reasoning: 'If the part arrives by Friday, I can fit it myself.'", "Proposal grammar: 'if the service disappears, the walk doubles'"],
          ["The fronted phrase", "Scene-setting: 'After the party, we found your scarf.'", "Linkage without linkers: 'When the lifts fail, ...'"],
        ],
      },
      {
        type: "text",
        text: "The audit takes one minute and two colours of pen. Underline the first word of every sentence in a paragraph: if three or more open with the same word or the same subject, front one phrase and leave the rest standing. Count the words in each sentence: if they all sit within three of each other, split the longest or join the two shortest. Then read the paragraph aloud once: any sentence that trips the tongue gets the cheapest repair available, which is usually to cut it in two. The ceiling is two upgrades per paragraph — more becomes performance, and performance in a second language is where accuracy goes to be lost.",
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Shapes at work",
        items: [
          {
            english: "A friendly letter's rhythm: 'You would have laughed. My first attempt at the birthday cake collapsed into something between a pudding and a landslide, and the dog supervised the whole disaster from the sofa.'",
            note: "Four words, then twenty-eight: visible range, unbroken warmth.",
            domain: "exam",
          },
          {
            english: "A formal request in question shape: 'Could you possibly arrange for someone to inspect the meter before the end of the month?'",
            note: "The question mark is doing courtesy work — request shape at formal register.",
            domain: "exam",
          },
          {
            english: "Essay conditionals on an everyday topic: 'A teenager who earns a little on Saturdays learns what an hour costs; if the wage disappears, the lesson disappears with it.'",
            note: "One relative clause, one conditional: the essay's two workhorses in a single sentence.",
            domain: "exam",
          },
          {
            english: "A fronted phrase opening an essay paragraph: 'After the mill closed, the high street emptied shop by shop; the library, however, grew busier.'",
            note: "Fronted time phrase plus a mid-sentence contrast: two shapes, no stacked openers.",
            domain: "exam",
          },
          {
            english: "A learner highlights the first word of every sentence in a draft — The, The, The, I — and rewrites one opening with a fronted time phrase.",
            note: "The highlighter sees opening monotony faster than a tired ear hears it.",
            domain: "study",
          },
          {
            english: "A note to colleagues: 'The deadline stands. Anyone who needs an extension should email me by Thursday, when the schedule is finalised.'",
            note: "A short sentence, then a relative clause: the two-shape pair workplace prose uses daily.",
            domain: "work",
          },
          {
            english: "A message to a neighbour: 'If the rain holds off, we are painting the fence on Sunday; there will be coffee for anyone who helps.'",
            note: "A conditional and a relative clause in one friendly line — variety is not an exam costume.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The variety catalogue",
        items: [
          {
            wrong: "Long, complicated sentences throughout the letter are how I show the examiner my range.",
            right: "Alternate lengths and shapes; one complex sentence earns its keep only when a short one stands beside it.",
            reason: "Uniform complexity reads as effort rather than control, and every extra clause is a fresh chance for error — examiners reward range they can read.",
          },
          {
            wrong: "A direct question suits every letter and even the essay, because it keeps things lively.",
            right: "Ask real questions of friends, shape requests as questions in formal letters, and keep the essay in statements.",
            reason: "The question shape carries register: an essay that interrogates its reader has borrowed a letter's instrument, and the voice breaks.",
          },
          {
            wrong: "Every sentence should start with its subject, because that is how English works.",
            right: "Front a time, place or condition phrase in one sentence per paragraph, ahead of the subject.",
            reason: "Opening shape is the most countable form of variety, and one fronted phrase changes the page without touching the meaning.",
          },
          {
            wrong: "Contractions and exclamation marks make my English sound natural, so I use them in every script.",
            right: "Keep them inside informal letters, one exclamation at most, and keep formal letters and the essay without them.",
            reason: "Range includes register range: variety that crosses genres reads as lost control of tone, not as fluency.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Sentence variety across all four skills",
        reading: {
          text: "We kept the allotment for one more summer. The soil was tired and the fees had risen again, but nobody wanted to be the one to let it go. In June, when the first beans came up, all the arguing seemed silly. If you have never grown something you plan to eat, start with beans; they forgive almost everything.",
          task: "Find one short sentence, one fronted time phrase and one conditional, and say what each adds to the paragraph's rhythm.",
        },
        writing: {
          task: "The three sentences below come from a stiff draft of a friendly letter. Upgrade the paragraph with two of this lesson's moves — one genuine question and one short-then-long pair — without changing the register. (1) I received your card on Tuesday. (2) I was very happy to hear about the new job. (3) We should celebrate when I visit in August.",
          guide: [
            "Open with a genuine question — the friend's news invites one.",
            "Let one sentence stay short and warm, and let the next carry the detail.",
            "Keep the contractions in: this is a friendly letter, and spelling them out would stiffen it.",
            "Read the result aloud once: the short sentence should sound spoken, not telegraphic.",
          ],
          model:
            "Your card made it here on Tuesday — a new job, honestly, how did you keep it quiet for so long? I am delighted for you. We celebrated with a cake that sank in the middle, which seemed only right, and August just can't come soon enough.",
        },
        listening: {
          script: "So here's the plan. Saturday morning, we take the early train — that's the seven fifteen — and we walk in from the station. If the weather turns, there's a museum by the harbour, the one with the boat shed. Either way, we're back by six. Sound good?",
          task: "Catch the conditional ('If the weather turns...'), the relative clause ('the one with the boat shed') and the two-word question at the end.",
        },
        speaking: {
          task: "Describe in one minute how your town has changed in the last ten years, using at least one fronted time phrase and one full conditional.",
          frames: [
            "Ten years ago, ...",
            "When the new ... opened, ...",
            "If you visit today, you will find ...",
            "Now, ...",
          ],
          checklist: [
            "I fronted at least one time phrase ahead of the subject.",
            "My conditional had both halves — the if and the result.",
            "My sentence lengths varied without my voice changing register.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Opens with a genuine question about the friend's news", "The question is the informal letter's own variety move, and it changes the shape before any clause is added"],
          ["Pairs a short sentence with a long one", "Six words beside thirty: length displayed as a choice, which is what the range reading rewards"],
          ["Keeps the contraction and the warm aside ('which seemed only right')", "The register holds while the range grows — the voice always outranks the variety"],
          ["Lets the long sentence carry the content a short one could not hold", "The sunken cake, the wait for August: complexity earns its keep by carrying detail"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Bank your four moves — alternate lengths, genuine question, controlled clause, fronted phrase — and decide which the register licenses before drafting."],
          ["While the clock runs", "Deploy at most two upgrades per paragraph, and read each new clause back once for control before moving on."],
          ["If you are stuck", "If a long sentence wobbles, cut it in two; two accurate sentences beat one broken complex one under every criterion."],
          ["Final minutes", "Highlight sentence openings: if three start the same way, front one phrase — and resist upgrading anything else."],
        ],
      },
      {
        type: "summary",
        points: [
          "The voice outranks the range: any shape that breaks the letter's or essay's register is an error, not variety.",
          "Alternate short warm sentences with longer ones; the pair is what shows, not either alone.",
          "Questions belong to friends; formal letters shape requests as questions; the essay keeps to statements.",
          "Relative clauses and conditionals are the essay's complexity workhorses — one of each per sentence, both halves present.",
          "One fronted phrase per paragraph varies the opening and does linkage work at no extra cost.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Which lesson taught you that contractions belong in informal letters and are expanded in formal scripts?",
            options: ["Punctuation", "Cohesion", "Planning"],
            correctIndex: 0,
            explanation: "The apostrophe lesson set the contraction rule; every variety move that warms a friendly letter depends on it.",
            from: "Punctuation",
          },
          {
            question: "A fronted phrase such as 'When the lifts fail, ...' does two jobs at once. Which earlier lesson owned the second job?",
            options: ["Cohesion", "Sentence variety", "Coherence"],
            correctIndex: 0,
            explanation: "Fronting links the sentence to what came before — cohesion work — while changing the opening shape, which is variety's business.",
            from: "Cohesion",
          },
          {
            question: "Which lesson taught you to read the printed task words — 'write a letter', 'give reasons' — as deliverables that decide your shapes?",
            options: ["Understanding task instructions", "Coherence", "Punctuation"],
            correctIndex: 0,
            explanation: "The deliverables decide what variety is for: a letter that must invite reaches for a question, and an essay that must explain reaches for its clauses.",
            from: "Understanding task instructions",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What is the first law of sentence variety in GT Writing?",
        hints: ["Range is a servant, not the master."],
        options: [
          { id: "a", text: "Make every sentence as complex as possible, to display grammatical range." },
          { id: "b", text: "Vary lengths and shapes only inside the register the script has set, so the voice never breaks." },
          { id: "c", text: "Keep one sentence shape throughout, for consistency." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Vary lengths and shapes only inside the register the script has set, so the voice never breaks.",
          "Range is rewarded only when it stays register-true: a friendly note in formal complexity, or an essay in grins, loses more tone than it gains variety.",
          "(a) trades voice for display and multiplies error chances; (c) is the opposite fault — uniformity that reads as a limited toolkit.",
        ),
        tags: ["gwriting", "sentence-variety", "register"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the friendly-letter extract and judge its range.",
        hints: ["Count the sentence lengths before judging anything else."],
        passageTitle: "Range audit",
        passage:
          "Dear Noah, I hope you are well. I am writing to tell you about my new job. I started in January. The office is near the canal. The team is very friendly. I cycle there every day. My manager is called Priya. The canteen does very good soup. Write back soon.",
        question: "What is the clearest variety fault?",
        options: [
          { id: "a", text: "Nine sentences of almost identical length and shape — the letter reads as a list rather than a voice." },
          { id: "b", text: "The letter contains a comma splice in every sentence." },
          { id: "c", text: "The register is far too formal for a letter to Noah." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Nine sentences of almost identical length and shape — the letter reads as a list rather than a voice.",
          "Every sentence is subject-verb-short; joining two pairs and asking one genuine question would give the letter a pulse while keeping its friendly voice intact.",
          "(b) misnames the fault — the boundaries are clean and the rhythm is dead; (c) mistakes plainness for formality.",
        ),
        tags: ["gwriting", "sentence-variety", "audit"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Front the time phrase: complete the sentence with one fronting word.",
        sentence: "___ the market closes, the square fills with teenagers and their bikes.",
        acceptedAnswers: ["After", "When", "Once"],
        hints: ["One word moves the time phrase ahead of the subject and keeps the meaning."],
        feedback: fb(
          "After (or when, once).",
          "Fronting the time phrase varies the opening and ties the sentence to the scene before it — one small word doing two jobs at once.",
          "Leaving the phrase after the subject keeps the meaning but wastes the move; an addition linker such as moreover would mislabel the relation entirely.",
        ),
        tags: ["gwriting", "sentence-variety", "fronting"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. An essay paragraph argues that Saturday jobs teach teenagers the value of an hour. Which sentence adds controlled complexity?",
        hints: [],
        options: [
          { id: "a", text: "A teenager who stacks shelves on Saturdays knows exactly what an hour of standing earns, and prices pocket money and free time differently from a classmate who has never worked." },
          { id: "b", text: "Saturday jobs. Teenagers. Money. Hours. Value. Lessons." },
          { id: "c", text: "A teenager stacks shelves, and a teenager earns money, and a teenager learns hours, and a teenager values time." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A teenager who stacks shelves on Saturdays knows exactly what an hour of standing earns, and prices pocket money and free time differently from a classmate who has never worked.",
          "Two relative clauses carry their detail inside one sentence at essay register — complexity the reader can still ride, and both halves of every clause present.",
          "(b) offers fragments rather than sentences; (c) repeats one coordinated shape four times — length without range.",
        ),
        tags: ["gwriting", "sentence-variety", "clauses"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the question rule across the GT tasks.",
        question: "Where are direct questions welcome, where do they become request-shaped, and where are they avoided?",
        acceptedAnswers: [
          "informal letters; formal letters as could you possibly; avoided in essays",
          "direct questions in informal letters, request questions in formal letters, none in essays",
          "friendly letters for direct questions, formal letters for request questions, essays avoid them",
        ],
        keywords: ["informal", "formal", "essay"],
        hints: [],
        feedback: fb(
          "Direct questions in informal letters; request-shaped questions (Could you possibly...?) in formal letters; statements only in the essay.",
          "The question shape carries register weight — it invites a friend, softens a request to an authority, and would lend an essay a borrowed voice.",
          "Sprinkling questions evenly across all three scripts ignores the register each one sets; variety never outranks the voice.",
        ),
        tags: ["gwriting", "sentence-variety", "questions"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Which friendly-letter pair shows range without losing the voice?",
        hints: [],
        options: [
          { id: "a", text: "You'd love it here. The river has frozen from the bridge to the boathouse, and the ducks have taken up residence in the car park, looking deeply offended." },
          { id: "b", text: "You would love it here. The river has frozen from the bridge to the boathouse. The ducks have taken up residence in the car park." },
          { id: "c", text: "It is lovely here, and it is cold here, and the ducks are here, and the river is frozen here." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "You'd love it here. The river has frozen from the bridge to the boathouse, and the ducks have taken up residence in the car park, looking deeply offended.",
          "A three-word warm opener beside a long sentence with two clauses and a participial aside — contraction intact, humour intact, range visible.",
          "(b) is accurate but uniform: four clean sentences and no pulse; (c) repeats one coordinated shape until it becomes a drone.",
        ),
        tags: ["gwriting", "sentence-variety", "rhythm"],
      }),
    ],
    homework: [
      "Write one piece of everyday news four times — two sentences each — for a friend, a landlord, a manager and an essay reader, and label the move each version makes.",
      "Take a page of your own writing, highlight the first word of every sentence, and rewrite three openings with fronted phrases or question shapes.",
    ],
    assignment: {
      title: "One piece of news, four voices",
      instructions:
        "Choose one piece of everyday news — a move, a new job, a small accident, a plan. Write it four times, two or three sentences each: first to a close friend, using a short-then-long pair and one genuine question; second to a landlord or manager, with one relative clause and no contractions; third as a single sentence of a formal letter, opening with a fronted phrase; fourth as one essay-style sentence on the general topic, carrying a full conditional. Label the move each version performs and the register it keeps.",
      minWords: 80,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-time",
    title: "Time management",
    description:
      "The GT hour as arithmetic: essay first at roughly double weight, the 5-29-4-2 and 2-15-2-1 budgets, the bullet sweep, the under-length mathematics and the emergency protocols at ten, five and one minute.",
    objectives: [
      "split the GT hour as 40 minutes for the essay and 20 for the letter, essay first, with the switch honestly inside the budget",
      "hold the phase budgets — 5-29-4-2 for the essay, 2-15-2-1 for the letter — without renegotiating them mid-task",
      "run the bullet sweep and the word count inside every sitting",
      "execute the ten-, five- and one-minute protocols without negotiating",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "The GT Writing hour is arithmetic before it is English: one clock, two tasks, and an essay worth roughly twice the letter. Every timing failure is the same failure — minutes spent where the marks are thinner. The letter is a 150-word sprint inside twenty minutes; the essay is a 250-word build inside forty; and because the essay carries the double weight, many candidates give it the first, fresher block of the hour and keep the letter for the efficient twenty at the end. The schedule in this lesson is deliberately unromantic: five planning minutes for the essay, a named-error check, a counting protocol that costs almost nothing, a bullet sweep that guards the letter's completeness, and emergency protocols for the moments when the plan breaks.",
        beforeYouStart: [
          "You have written at least one letter and one essay, untimed.",
          "You know the letter's three bullets and the essay's question families from the earlier lessons.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the single shared hour, letter and essay together"],
          ["Task & question types", "Task 1 letter (150+ words, about 20 minutes) and Task 2 essay (250+ words, about 40 minutes), in whichever order you choose"],
          ["What is assessed", "No minute is scored directly: what the clock produces is judged, and unfinished or under-length scripts bleed marks on every area at once"],
          ["Why this matters", "A letter missing a bullet or an essay missing its ending cannot be rescued by polish elsewhere; a rehearsed schedule makes finishing the norm"],
        ],
      },
      { type: "heading", text: "Component 1 — The arithmetic" },
      {
        type: "text",
        text: "Sixty minutes, two tasks, one honest accounting. The recommended shape is essay first: at roughly double the weight, it deserves the longer block and the fresher mind, while the shorter letter — a familiar, formulaic shape — fills the tired twenty minutes well. The forty splits as 5 plan, 29 write, 4 check, 2 count; the twenty splits as 2 read-and-plan, 15 write, 2 check, 1 count. The switch between tasks costs a real minute — a cold new prompt read with a mind already half-spent — and honest accounting means that minute lives inside the letter's twenty, not stolen from the essay's checking. On the computer-delivered test a word counter runs under the answer box, which turns counting into a glance; on paper, count the words in three average lines and multiply by the lines used.",
      },
      { type: "heading", text: "Component 2 — The hour in two halves" },
      {
        type: "steps",
        title: "The hour in two halves",
        steps: [
          {
            title: "Minutes 1–5: plan the essay on the question",
            text: "Read the question twice and underline its task words. Write the position sentence in full, then note two reasons in five words or fewer each, with one everyday example apiece. Nothing else: no introduction drafted, no vocabulary rehearsed, no second thoughts entertained. Five planning minutes is the cheapest insurance the hour sells, and the plan's brevity is what protects the twenty-nine writing minutes that follow it.",
            examples: [
              {
                english: "A five-minute plan for an agree-or-disagree question on school holidays: position sentence, 'reason 1: parents work', 'reason 2: meals and exercise', 'example: the summer club at the community centre'.",
                note: "Twenty-odd words of notes writing the next half hour of essay.",
              },
            ],
          },
          {
            title: "Minutes 6–34: build the essay out of the notes",
            text: "Four paragraphs, straight from the notes, with the clock consulted only at phase boundaries. If minute 34 arrives with the conclusion unwritten, compress the conclusion to two sentences rather than overrun — a plain ending at 260 words reads better than an elegant ending the clock never lets arrive. Writing minutes are for writing: every structural decision was made at minute five, and second decisions are how phases leak.",
            examples: [
              {
                english: "At minute 34 a candidate compresses a planned three-sentence conclusion into two and crosses 250 words with ninety seconds of the phase to spare.",
                note: "Compressing the close beats overrunning it: the boundary held, and so did the hour.",
              },
            ],
          },
          {
            title: "Minutes 35–40: check, then count",
            text: "The check phase carries a wanted list of exactly three errors — the three your own practice log accuses you of most often (many candidates' lists name articles, plural -s and the comma splice). One fast read, three targets, fixes only. Then count: a glance at the on-screen counter, or the three-line hand count on paper. If the count says short, spend the leftover minute writing, not polishing — the under-length rule below prices the repair.",
            examples: [
              {
                english: "A top-3 pass over a 270-word essay finds two dropped plurals and one splice — three fixes inside four minutes, zero rewrites started.",
                note: "Named-error hunting catches more than admiring a finished draft ever will.",
              },
            ],
          },
          {
            title: "Minutes 41–60: the letter, in its four phases",
            text: "Two minutes of reading: recipient, register, purpose, and the three bullets turned into three questions. Fifteen minutes of writing: the purpose in line one, one paragraph per bullet, a close that returns to the purpose in fresh words. Two minutes of checking: the same top-3 errors, plus the bullet sweep. One final minute: count, finish the last sentence, confirm the sign-off, and stop writing when the display reaches zero.",
            examples: [
              {
                english: "The two-minute read produces three notes — 'manager, formal, refund' and the bullets as questions — and the fifteen writing minutes follow them paragraph by paragraph.",
                note: "The letter is a rehearsed shape; the reading minutes choose its register, and the writing minutes fill it.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "The GT sixty minutes, phase by phase",
        headers: ["Phase", "Minutes", "The discipline"],
        rows: [
          ["Essay — plan", "5", "Position, two reasons, one everyday example each — notes, never prose"],
          ["Essay — write", "29", "Four paragraphs out of the notes; at minute 34 the conclusion shrinks rather than the clock"],
          ["Essay — check", "4", "Hunt your named three errors only — no rewrites, no new ideas, no sightseeing"],
          ["Essay — count", "2", "A glance at the on-screen counter, or three average lines counted by hand and multiplied"],
          ["Letter — read & plan", "2", "Recipient to register, purpose to first line, bullets to questions"],
          ["Letter — write", "15", "Purpose in line one, one paragraph per bullet, close in fresh words"],
          ["Letter — check", "2", "Top-3 errors plus the bullet sweep: each bullet against its paragraph"],
          ["Letter — count & close", "1", "Count, finish the final sentence, confirm the sign-off, stop at zero"],
        ],
      },
      {
        type: "text",
        text: "The bullet sweep is the letter's own completeness check, and it belongs to the letter's two checking minutes. Read each printed bullet in turn and find the paragraph that answers it: bullet one, paragraph two; bullet two, paragraph three; bullet three, paragraph four. A bullet with no paragraph is a hole in the task's own tick-list and the commonest letter penalty there is; a paragraph serving no bullet is decoration wearing a paragraph's clothes. The sweep costs twenty seconds, can be run with the prompt in one hand and the script in the other, and has one job: to make certain the examiner's checklist and your paragraph map are the same document.",
      },
      {
        type: "text",
        text: "Under length is arithmetic, not opinion. Scripts below the minimum — 150 for the letter, 250 for the essay — lose ground on the task criteria whatever their quality, and the missing words are almost always cheaper to write than the penalty is to absorb. At a writing pace of a dozen words a minute, thirty missing essay words cost under three minutes of production, and they are exactly three minutes' worth of repair that polish cannot substitute for. Hence the rule the count enforces: if the count says short, write — one planned reason paragraph, or two sentences added to the bullet paragraphs — and if the count says safe, check. Counting is what converts an invisible penalty into a three-minute repair.",
      },
      { type: "heading", text: "Component 3 — When the plan breaks" },
      {
        type: "steps",
        title: "Three emergency protocols",
        steps: [
          {
            title: "At ten minutes: touch every bullet",
            text: "Whichever task is unfinished now receives only its load-bearing parts. If the letter is barely started, write the purpose line and then one plain sentence per remaining bullet — every bullet touched beats one bullet perfect, because an incomplete script is scored on presence, not depth. If the essay is still running, write its two-sentence conclusion at once and switch. The skeleton is chosen calmly at minute fifty only if it was rehearsed calmly at home.",
            examples: [
              {
                english: "At minute 50 with only the letter's opening written, a candidate drafts one sentence per bullet and lands the sign-off at 59 — a letter that reads complete, if thin.",
                note: "Completeness is the cheapest form of quality the last ten minutes sell.",
              },
            ],
          },
          {
            title: "At five minutes: land the closing line",
            text: "Finish the sentence you are in, then write one closing line that completes the shape: for the letter, a return to the purpose in fresh words; for the essay, a two-sentence conclusion restating the position. Stop adding bullets, reasons or examples — everything not yet written is now officially unnecessary. A short ending that closes cleanly reads as competence; a clause abandoned mid-thought reads as the clock winning.",
            examples: [
              {
                english: "Mid-paragraph at minute 55, a candidate closes with 'That, in short, is what I am asking for.' and the letter lands finished.",
                note: "One sentence of closure buys the impression of a completed design.",
              },
            ],
          },
          {
            title: "At one minute: the last mark wins",
            text: "No new words. Confirm the final sentence carries its end mark, confirm the letter's sign-off line exists and carries its comma, confirm nothing the task requires is blank — and let the clock run out with the script complete in form. The difference between 279 words and 290 has never decided a band; a trailing half-sentence has decided many a reader.",
            examples: [
              {
                english: "The final sixty seconds of a sitting: one full stop confirmed, one sign-off checked, zero new words — the hour ends on the writer's terms.",
                note: "The final minute belongs to the final mark alone.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "The hour, logged and stress-tested",
        items: [
          {
            english: "A full sitting logged against the schedule: essay 5-29-4-2, the switch inside the letter's opening minute, letter 2-15-2-1 — both tasks finished, both counts cleared, twenty seconds to spare.",
            note: "The log proves the arithmetic fits: the hour holds both tasks with the switch honestly paid.",
            domain: "exam",
          },
          {
            english: "The bullet sweep earns its keep: the invitation's second bullet — directions to the new house — has no paragraph, and two sentences are written in the final check minute.",
            note: "Twenty seconds of ticking bullets saves the letter from its commonest penalty.",
            domain: "exam",
          },
          {
            english: "Under-length mathematics executed once: a 225-word essay, caught by the count, gains a 40-word reason paragraph inside three minutes of the check window.",
            note: "Counting first converts a hidden penalty into a three-minute repair.",
            domain: "exam",
          },
          {
            english: "The ten-minute protocol run live: with the complaint letter half-written at minute 52, the candidate writes one plain sentence per uncovered bullet and lands the sign-off at 59.",
            note: "Skeleton thinking under pressure is a rehearsed reflex, never an inspiration.",
            domain: "exam",
          },
          {
            english: "A learner drills the letter's two-minute plan five times in a week — recipient, register, purpose, bullets as questions — until the three notes take ninety seconds flat.",
            note: "The reading phase is a reflex built at home, not a decision made on the day.",
            domain: "study",
          },
          {
            english: "A receptionist answering a supplier query: two minutes finding exactly what was asked, a quarter hour replying, a last check of the three requests before sending.",
            note: "Plan, write, check in working clothes — the exam's rhythm is any busy person's rhythm.",
            domain: "work",
          },
          {
            english: "Hosting on a Saturday: the marinade goes in first because it needs the long stretch, and the salad is dressed in the final five minutes.",
            note: "The long, weighty job claims the early minutes — the essay-first logic, in a kitchen.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The timing catalogue",
        items: [
          {
            wrong: "I write the letter first because it is printed first and feels like a warm-up.",
            right: "Give the essay the first forty minutes — double weight deserves the fresh mind — or keep your order but hold the twenty-minute wall around the letter.",
            reason: "The order follows the weighting, not the pagination; whichever order you choose, a letter that overruns is stealing essay minutes at roughly double the exchange rate.",
          },
          {
            wrong: "I will spend the check minutes improving my sentences until they sound better.",
            right: "Hunt your three named errors at speed, fix what appears, and stop — style was settled when the sentence was written.",
            reason: "The check pass has one job, and it is mechanical repair; rewriting belongs to drafting, and drafting is over.",
          },
          {
            wrong: "The word count is a guideline; a slightly short letter will not be noticed.",
            right: "Treat 150 and 250 as walls: count on schedule, and if the count says short, write — production repairs length, polish cannot.",
            reason: "Under-length scripts lose ground on the task criteria whatever their quality, and the missing words cost minutes, not marks, to produce.",
          },
          {
            wrong: "If time runs out, one excellent paragraph counts for more than covering everything.",
            right: "Touch every bullet and close both tasks: completeness is the cheapest quality the hour sells.",
            reason: "A missing bullet or a missing conclusion is scored as absence, not as depth elsewhere; thin-and-complete beats brilliant-and-unfinished at every sitting.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Time management across all four skills",
        reading: {
          text: "The community centre's timetable runs on one rule: the room that earns the most bookings claims the prime evening slot. The yoga class, twenty strong for a decade, holds seven o'clock on Tuesdays. The new coding club meets at nine, when the building is quiet, because its members come off late shifts. The manager says the clock does half her administration for her: everyone knows which hour belongs to whom, and nobody negotiates on the doorstep.",
          task: "Which principle decides the timetable, and where else in this lesson does the same principle appear?",
        },
        writing: {
          task: "A candidate's log of a practice hour reads: 'essay planned 0–7, written 7–38, checked 38–40, no count; letter started at 41, first paragraph rewritten three times, letter abandoned at 60 with the third bullet barely started; final count after time: letter 132 words.' Diagnose the two costliest faults, then write the corrected schedule for the next sitting, phase by phase, with the minute each phase starts.",
          guide: [
            "Compare each logged phase against the 5-29-4-2 essay budget and name where the minutes went.",
            "Note what the missing count cost: a 132-word letter sat under the 150 wall and was never discovered.",
            "Rebuild the hour with the letter's 2-15-2-1 intact and the switch inside the letter's first minute.",
            "Add the bullet sweep to the letter's check minutes so the next sitting ends complete.",
          ],
          model:
            "Fault one: the plan ran to seven minutes and the writing to thirty-one, so six minutes leaked before the letter began. Fault two: no count was ever run, so a 132-word letter — under the 150 wall — was never caught and repaired. Corrected sitting: essay plan 0–5, write 5–34, check 34–38, count 38–40; letter read-and-plan 41–43, write 43–58, check with bullet sweep 58–59, count and close 59–60. Under-length rule armed: if a count says short, write — do not polish.",
        },
        listening: {
          script: "Right, the exam's on Saturday, so this week we drill the clock. Essay first: five minutes of planning — I'll call time — then twenty-nine of writing. Four to check your own three errors, two to count. Then the letter: two to read the situation and turn the bullets into questions, fifteen to write, and the last three for the check, the bullet sweep and the count. If you finish a phase early, bank the seconds. Don't spend them.",
          task: "Note the coach's minute budgets for both tasks, and the one instruction about finishing a phase early.",
        },
        speaking: {
          task: "Explain to a partner, in one minute, how you will spend your GT Writing hour and why the essay claims the first forty minutes.",
          frames: [
            "My hour splits as ...",
            "The essay goes first because ...",
            "The letter's twenty minutes break into ...",
            "If the clock catches me at ten minutes, I will ...",
          ],
          checklist: [
            "I named both budgets with their numbers.",
            "I gave the weighting reason, not just the habit.",
            "I stated the ten-minute protocol without checking my notes.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Diagnoses the log against the budget before prescribing anything", "A clock cannot be fixed until the leak is measured; the comparison names the thief in minutes"],
          ["Rebuilds the hour with a start minute on every phase", "A schedule with numbers on its phases is checkable at a glance while it runs"],
          ["Arms the under-length rule and the missing count", "The 132-word letter was a counting failure, not a writing one — the repair is procedural, not creative"],
          ["Puts the bullet sweep inside the letter's check minutes", "Completeness is audited by list in the minutes when memory is least trustworthy"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Memorise both budgets — 5-29-4-2 and 2-15-2-1 — and your top-3 error list; the hour should contain no new decisions."],
          ["While the clock runs", "Consult the clock at phase boundaries only; when a boundary arrives, obey it — compress, never overrun."],
          ["If you are stuck", "Out of ideas in the essay? Write the planned paragraph, not a better one. Stuck in the letter? Re-read the bullet — it names the next paragraph."],
          ["Final minutes", "Ten minutes left: skeleton — one sentence per uncovered bullet. Five: land the closing line. One: last mark, sign-off, stop."],
        ],
      },
      {
        type: "summary",
        points: [
          "The GT hour is 40 plus 20, with the essay usually first at roughly double weight and the switch paid inside the letter's twenty.",
          "The budgets: essay 5 plan, 29 write, 4 check, 2 count; letter 2 read-and-plan, 15 write, 2 check, 1 count.",
          "The bullet sweep — each printed bullet against its paragraph — is the letter's completeness check and costs twenty seconds.",
          "Under-length mathematics: count on schedule, and if the count says short, write — three minutes of production beats any polish.",
          "The protocols are rehearsed, not improvised: touch every bullet at ten, land the closing line at five, the last mark at one.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "The letter's check phase ends with the bullet sweep. Which lesson taught you to give each bullet its own paragraph?",
            options: ["Coherence", "Time management", "Punctuation"],
            correctIndex: 0,
            explanation: "The one-thread letter planned one paragraph per bullet; the sweep simply audits that plan against the finished script in twenty seconds.",
            from: "Coherence",
          },
          {
            question: "A top-3 error list that includes comma splices owes its repair to which lesson?",
            options: ["Punctuation", "Cohesion", "Sentence variety"],
            correctIndex: 0,
            explanation: "The splice's three repairs are mechanical fixes — exactly the kind a two-minute check pass can safely make with the clock running.",
            from: "Punctuation",
          },
          {
            question: "The essay's five planning minutes produce which artefact from an earlier lesson?",
            options: ["A position, two reasons and one example each — the plan built in Planning", "A finished introduction, drafted in full prose", "A list of impressive vocabulary to sprinkle later"],
            correctIndex: 0,
            explanation: "The plan lesson built the position-and-reasons note; the five minutes fill it in, and the twenty-nine writing minutes follow it.",
            from: "Planning",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Why do many GT candidates write the essay before the letter?",
        hints: ["Think about what each task is worth to the final result."],
        options: [
          { id: "a", text: "The essay is worth roughly twice the letter, so it claims the long block and the fresh mind." },
          { id: "b", text: "The essay is printed first in the question booklet." },
          { id: "c", text: "The letter should be written last because it does not matter." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The essay is worth roughly twice the letter, so it claims the long block and the fresh mind.",
          "Weighting, not pagination, sets the order: the double-weighted essay takes the fresh mind and the long block, and the shorter letter fills the tired twenty minutes well.",
          "(b) reverses the booklet — the letter is Task 1 and appears first; (c) is wrong twice over: the letter is scored in full, just on a lighter scale.",
        ),
        tags: ["gwriting", "time", "order"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the practice log and find where the hour broke.",
        hints: ["Compare each logged phase against the budget table before judging."],
        passageTitle: "The broken hour",
        passage:
          "Practice log, Saturday: essay planned 0–7, written 7–38, checked 38–40, no count run. Letter started at 41; situation read twice; first paragraph rewritten three times; letter abandoned at 60 with the third bullet barely started. Final count, after time: letter 132 words.",
        question: "What is the costliest single fault in the log?",
        options: [
          { id: "a", text: "The third bullet was barely started — a completeness hole the bullet sweep exists to prevent." },
          { id: "b", text: "The letter reached 132 words, which is comfortably over the minimum." },
          { id: "c", text: "The essay plan ran to seven minutes instead of five." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The third bullet was barely started — a completeness hole the bullet sweep exists to prevent.",
          "An uncovered bullet is the letter's heaviest avoidable penalty, and the log shows its causes plainly: six leaked minutes, three rewrites of one paragraph, and no skeleton protocol at minute fifty.",
          "(b) misreads the arithmetic — 132 sits under the 150 wall, not over it; (c) is a real leak, but a two-minute one beside a whole missing bullet.",
        ),
        tags: ["gwriting", "time", "bullet-sweep"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the letter's budget with the missing number of writing minutes.",
        sentence: "The letter's twenty minutes split as 2 read-and-plan, ___ write, 2 check, 1 count.",
        acceptedAnswers: ["15", "fifteen"],
        hints: ["The four phases must add up to twenty."],
        feedback: fb(
          "15 (fifteen).",
          "The letter budget is 2-15-2-1: two to read the situation and turn bullets into questions, fifteen to write the five short paragraphs, two to check and sweep the bullets, and the final minute to count and close.",
          "Fourteen or sixteen breaks the total: the four phases are a promise that adds to twenty, not a set of suggestions.",
        ),
        tags: ["gwriting", "time", "budget"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. At minute 50 the letter has an opening and one bullet paragraph, and two bullets remain. What does the ten-minute protocol command?",
        hints: [],
        options: [
          { id: "a", text: "One plain sentence for each remaining bullet, then the close — every bullet touched before the clock stops." },
          { id: "b", text: "Polish the existing paragraph, since quality outweighs coverage." },
          { id: "c", text: "Abandon the letter and return to improve the essay's conclusion." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "One plain sentence for each remaining bullet, then the close — every bullet touched before the clock stops.",
          "The skeleton protocol chooses completeness: two serviceable sentences close the open bullets, and a short close lands the letter as finished rather than abandoned.",
          "(b) is scored as absence — untouched bullets cost more than thin sentences do; (c) spends the last ten minutes where no new marks live.",
        ),
        tags: ["gwriting", "time", "emergency"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the under-length rule.",
        question: "The count says your essay is 225 words. What do the final minutes do about it, and why?",
        acceptedAnswers: [
          "write a short planned paragraph, because under-length loses more than polish gains",
          "add words: write one planned reason paragraph, since missing words cost more than the penalty",
          "write, not polish — production repairs the shortfall and editing cannot",
        ],
        keywords: ["write", "paragraph"],
        hints: [],
        feedback: fb(
          "Write one short planned paragraph — if the count says short, write; if it says safe, check.",
          "The missing twenty-five words cost about two minutes at writing pace, far less than the task-criteria penalty they prevent; polish adds no words at all.",
          "Improving existing sentences changes no number: only production moves the count, so the minutes go to writing.",
        ),
        tags: ["gwriting", "time", "under-length"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Which habit belongs in the letter's final minute?",
        hints: [],
        options: [
          { id: "a", text: "Count the words, finish the final sentence, confirm the sign-off — and stop writing at zero." },
          { id: "b", text: "Re-read the letter for style and lift any flat sentences." },
          { id: "c", text: "Add a postscript of extra news so the letter feels warmer." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Count the words, finish the final sentence, confirm the sign-off — and stop writing at zero.",
          "The last minute is procedural: the count confirms the 150 wall, the completed sentence and sign-off confirm the form, and words written after that risk leaving the script mid-thought.",
          "(b) invites re-writing — the fastest way to leave a finished letter unfinished; (c) spends the final seconds on material no bullet asked for.",
        ),
        tags: ["gwriting", "time", "final-minute"],
      }),
    ],
    homework: [
      "Drill the letter's two-minute plan five times: recipient, register, purpose in one line, bullets as three questions — log your times and watch them fall.",
      "Sit one full hour under the 40-20 arithmetic, then log every phase against the budget and mark every boundary you crossed.",
    ],
    assignment: {
      title: "Log and repair an hour",
      instructions:
        "Sit one full GT Writing hour — essay first, letter second — and keep a phase log as you go: the start and end time of every plan, write, check and count phase, plus any boundary you crossed. After the hour, write a short diagnosis: which phase leaked, what the count showed for each task, and which protocol you had to invoke, if any. Finish with the corrected schedule for your next sitting, phase by phase, with the minute each phase starts.",
      minWords: 120,
      maxWords: 250,
    },
  },
];
