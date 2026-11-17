/**
 * GT Task 1 letters — purposes part B plus the cross-cutting craft (W-L10, set B).
 *
 * Five letter lessons: apologies, explanations, suggestions, tone and the
 * organisation skeleton that runs under every letter. Each lesson follows the
 * eight-component anatomy: the craft defined, reading the situation, the
 * skeleton, the language shelf, the worked model letter, why the model works,
 * the trap catalogue and a fully planned second situation. Every situation,
 * name, bullet set and model letter in this file is original TalkSy teaching
 * material; no official examination content is reproduced, and every
 * descriptor comment reads as an educational estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingLettersLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  // Lesson 1 — Apologies
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-apology",
    title: "Apologies",
    description:
      "The four moves of a credible apology: acknowledge the fault plainly, explain without excusing, offer a repair you can describe, and promise only what you can deliver — taught across all three registers with a complete worked model.",
    objectives: [
      "acknowledge a fault plainly in the letter's first breath, with no 'but' anywhere near the apology",
      "explain what happened while owning your share of the causes, so the account reads as honesty rather than defence",
      "offer a repair that matches the harm — replace, repay, fix or make it up — and prove it is real",
      "close with a promise calibrated to what you can actually deliver",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "An apology letter is written after damage: something was broken, missed, delayed or forgotten, and the person reading your letter is the one who paid for it. Most candidates respond by either grovelling or defending, and both read badly. This lesson builds the four moves of a credible apology — acknowledge the fault plainly, explain what happened without excusing it, offer a real repair, and promise only what you can deliver — and shows how the same four moves sound from a formal note to a manager all the way down to a rueful message to a friend.",
        beforeYouStart: [
          "You can match a greeting-and-sign-off pair to the three registers before writing.",
          "You can plan a letter as one paragraph per printed bullet.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — apology situations, set for neighbours, friends, landlords and employers with equal frequency"],
          ["Task & question types", "The 20-minute letter of 150 words or more, built from a situation plus three bullets that typically ask you to apologise, explain and put things right"],
          ["What is assessed", "Task Achievement through full bullet coverage, and tone through an apology that sounds sincere at a register the recipient expects"],
          ["Why this matters", "Examiners read for the acknowledgement, the repair and the promise; an apology that argues with itself weakens both criteria at once"],
        ],
      },
      { type: "heading", text: "Component 1 — The craft defined" },
      {
        type: "text",
        text: "An apology is a transaction, not a feeling. The reader was harmed in some measurable way — a broken machine, an empty chair, a week of silence — and the letter is your first payment towards the debt. Four moves, always in the same order. Acknowledge the fault plainly, in your first breath, with no 'but' anywhere near the sorry: 'I'm sorry, but…' is a defence wearing an apology's coat. Explain what happened, owning your share of the causes, because the reader is quietly deciding whether the damage was bad luck or bad behaviour. Offer repair — fix it, replace it, repay it or make it up — and be specific about which. Close with a promise calibrated to what you can actually deliver: 'it will never happen again' is a wish, while 'I'll read the manual before touching borrowed tools' is a plan. Regret without repair is sentiment; repair without a promise leaves the reader wondering whether next month holds a repeat.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "text",
        text: "Before drafting, answer three questions on the plan. First, what exactly did you do or fail to do? Name the act in one line — 'returned the shredder with a burnt-out motor' — because a vague apology ('sorry about the weekend') apologises for nothing in particular. Second, who was harmed and how? The size and shape of the harm decides the repair: broken property wants replacing, a missed occasion wants making up, wasted time wants repayment in kind. Third, what does the reader need from you — acknowledgement, an explanation, a repair, or all three? The printed bullets usually answer this for you. Then set the register from the recipient: a manager takes the formal end of the dial, a neighbour addressed by surname sits semi-formal, a friend takes informal — and the apology's intensity stays constant while its language changes.",
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The apology skeleton, bullet by bullet",
        intro: "Five slots, roughly 170 words, in the order the reader needs them.",
        steps: [
          {
            title: "Step 1: The acknowledgement sentence",
            text: "Open with purpose and fault fused into one sentence, so the reader never wonders why the letter exists. Place it immediately after the greeting, before any warmth, weather or background.",
            examples: [
              {
                english: "I'm writing to apologise for returning your shredder with a burnt-out motor.",
                note: "Purpose, fault and object in fourteen words — no build-up, no softening, no 'but'.",
              },
            ],
          },
          {
            title: "Step 2: The explanation paragraph",
            text: "Give the sequence and the causes in three or four sentences, owning your share explicitly. The reader is deciding between bad luck and carelessness, so hand them the honest version rather than the flattering one.",
          },
          {
            title: "Step 3: The repair paragraph",
            text: "Name one concrete remedy — replace, repay, repair or make it up — with a detail that proves it is real: a quote obtained, a shop named, a date set.",
          },
          {
            title: "Step 4: The calibrated promise",
            text: "Promise the behaviour change you control, not the outcome you don't, and attach it to the specific failure you explained earlier in the letter.",
          },
          {
            title: "Step 5: The forward close and sign-off",
            text: "One line that looks ahead — 'I'll let you know by Friday' or 'see you at the next one' — then the greeting's matched pair to close the frame.",
          },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The apology shelf across the registers",
        items: [
          {
            english: "FORMAL: Please accept my sincere apologies for the error in the figures I submitted on Monday; I take full responsibility for the mistake.",
            note: "Latinate vocabulary, no contractions and an explicit ownership clause — the formal apology's three fingerprints.",
            domain: "work",
          },
          {
            english: "SEMI-FORMAL: I'm so sorry about the ladder — I should have checked the catch before carrying it down the stairs.",
            note: "A contraction, a dash and an owned fault: warm, tidy and specific at once.",
            domain: "everyday",
          },
          {
            english: "INFORMAL: I feel awful about Saturday — no excuses, I just got the date wrong.",
            note: "'No excuses' does the owning in two words; informal apologies are allowed to be blunt.",
            domain: "everyday",
          },
          {
            english: "REPAIR, FORMAL: I will of course bear the cost of a replacement motor, and I have already requested a quotation from the service centre.",
            note: "The repair sentence proves itself with evidence — a quotation already requested, not a vague intention.",
            domain: "exam",
          },
          {
            english: "REPAIR, INFORMAL: Let me buy you a new one this week — honestly, it's the least I can do.",
            note: "The same move at the other end of the dial: phrasal rhythm, contraction, direct offer.",
            domain: "everyday",
          },
          {
            english: "CALIBRATED PROMISE: I'll call you the moment the shop replies, and I won't leave you chasing me.",
            note: "Two promises, both inside the writer's control: speed of contact, and no silence.",
            domain: "study",
          },
          {
            english: "DRILL: take one fault — a missed meeting — and write its acknowledgement sentence at all three registers, changing nothing except the language.",
            note: "The fault and the four moves stay constant; only the register vocabulary moves. That is the whole dial.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model: the neighbour's shredder",
        reading: {
          text: "Examiners read apology letters with three questions in mind. Does the acknowledgement arrive early and plainly, or is it buried under warm-up prose? Does the explanation own its causality, or does it quietly point at the weather, the traffic or the victim's own property? And is the repair concrete enough to act on — a named remedy with a date attached? A letter that passes all three reads as sincere in any register, because sincerity on paper is structural: it is built from position, ownership and specifics, not from intensifiers like 'terribly' and 'deeply'.",
          task: "Read the model letter, then cover it and check: which sentence owns the fault, and which sentence proves the repair is real?",
        },
        writing: {
          task: "You borrowed your neighbour's garden shredder last weekend and returned it with a burnt-out motor. Write a letter to your neighbour, Mrs Ferreira. In your letter: apologise for the damage, explain how it happened, and say what you will do to put things right. Write about 150–190 words in a semi-formal register.",
          guide: [
            "I'm writing to apologise for…",
            "Let me explain what happened: I was…, and by the time…",
            "As for putting things right, I've already…",
            "If the motor can't be saved, I'll…",
            "Once again, I'm so sorry…",
          ],
          model:
            "Dear Mrs Ferreira,\n\nI'm writing to apologise for returning your garden shredder with a burnt-out motor. I feel dreadful about it, especially since you lent it to me so generously.\n\nLet me explain what happened. I was clearing a far bigger pile of branches than I had expected, and instead of letting the machine rest between loads, I kept feeding it for the best part of an hour. Halfway through, it began to smell of hot metal, and by the time I switched it off, the motor had cut out for good. The manual does recommend a cool-down pause after every ten minutes, and I'm afraid I ignored it.\n\nAs for putting things right, I've already asked a repair shop for a quote. If the motor can't be saved, I'll replace the machine with the same model, so you won't be left out of pocket. I should have the shop's answer by Friday, and I'll drop a note through your door either way.\n\nOnce again, I'm so sorry for the trouble this has caused you.\n\nYours sincerely,\nDaniel Okafor",
        },
        listening: {
          script:
            "Listen to how the four moves sound when you plan them out loud. Move one, acknowledgement — 'I'm writing to apologise for the shredder.' Not 'about the shredder situation', not 'if the shredder seems damaged' — for the damage, my damage, first sentence. Move two, explanation — sequence plus my share: I fed it for an hour, the manual said ten minutes, so the overheating is on me. Notice what isn't there: the branches weren't too wet, the machine wasn't too old — those are defences wearing explanation's clothes. Move three, repair — a quote from a real shop, plus a replacement promise if the quote fails. Move four, the calibrated promise — 'I'll drop a note through your door by Friday', something I control completely. That is the whole letter: four moves, one register, and no 'but' anywhere.",
          task: "Listen and answer: which two possible defences does the tutor refuse to use, and what does the Friday promise have in common with the acknowledgement?",
        },
        speaking: {
          task:
            "Apologise out loud for something small and real — a late reply, a missed call — using all four moves in under sixty seconds.",
          frames: [
            "I owe you an apology for…",
            "The honest version is that I…",
            "Here's what I'd like to do about it: …",
            "Next time, I'll…",
          ],
          checklist: [
            "Did the fault arrive in my first sentence?",
            "Did I own my share of the cause?",
            "Is my repair specific enough to act on?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["The fault arrives in sentence one", "Purpose and apology open together, so the reader's first question is answered before it is asked — the position Task Achievement rewards."],
          ["The explanation owns the causality", "'I'm afraid I ignored it' names the writer's own choice as the cause, which reads as honesty rather than damage control."],
          ["The repair carries evidence", "A quotation already requested and a same-model replacement promise make the remedy concrete and checkable."],
          ["The promise is calibrated", "'A note through your door either way' commits only to what the writer controls — speed of contact, not the shop's verdict."],
          ["The register holds semi-formal throughout", "Contractions and dashes keep it warm while 'Yours sincerely' keeps it tidy — one dial position, no slips."],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The apology trap catalogue",
        items: [
          {
            wrong: "I'm sorry, but the shredder was quite old and probably on its last legs anyway.",
            right: "The motor failed while the machine was in my hands, and the way I used it is the reason why.",
            reason: "'Sorry, but' converts an apology into a defence mid-sentence; the reader stops hearing regret and starts hearing a case for the defence.",
          },
          {
            wrong: "I most humbly and profusely apologise for this most regrettable and unfortunate occurrence.",
            right: "I'm truly sorry for the damage to your machine.",
            reason: "Inflated apology language reads as insincerity and often as the wrong register; plain words at the right dial position carry more weight than intensifiers.",
          },
          {
            wrong: "I promise with all my heart that this will never, ever happen again.",
            right: "From now on I'll read the instructions before using anything I borrow, and I'll follow the cool-down pauses to the minute.",
            reason: "A promise nobody can guarantee is worth nothing; a calibrated promise names the behaviour the writer actually controls.",
          },
          {
            wrong: "Unfortunately the branches were damp and the design of the hopper is frankly asking for jams.",
            right: "The damp branches made the job slower, but the overheating came from running the machine without a pause — that was my call.",
            reason: "Blaming the victim's property or the manufacturer is excuse territory; an explanation leads with the writer's own share of the cause.",
          },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Practice planning: the housewarming no-show",
        intro: "A second apology situation, planned end to end in four moves.",
        steps: [
          {
            title: "Step 1: Name the act and the harm",
            text: "The situation: you promised to cook for your friend's housewarming and cancelled by text that same morning. The plan line reads: 'act — cancelled morning-of; harm — an empty table at seven and a host short of a cook.' The harm, not the act, sets the repair.",
            examples: [
              {
                english: "Plan note: 'empty table at seven' — the repair must involve food or the evening itself, not just words.",
                note: "Harm analysis decides the currency of the repair before any sentence is drafted.",
              },
            ],
          },
          {
            title: "Step 2: Set the dial and the pair",
            text: "The reader is a friend, so the register is informal and the pair runs 'Dear Marco' to 'Take care'. The plan lists the markers to deploy: contractions throughout, phrasal verbs, one exclamation, and no formal vocabulary anywhere.",
          },
          {
            title: "Step 3: Map the bullets to the skeleton",
            text: "The bullets — apologise, explain, suggest how you'll make it up — become three paragraphs: the acknowledgement sentence fused with the purpose, a two-sentence explanation that owns the double-booking, and a make-it-up offer that names a date.",
          },
          {
            title: "Step 4: Budget the words and check the promise",
            text: "The budget: fifteen words of acknowledgement, forty of explanation, fifty of repair and promise, fifteen of close — about 120 of the 150-word floor before the greeting and sign-off are counted. The promise under audit: 'I'll put your party dates in my phone with two alarms' passes; 'I'll never double-book again' fails, because nobody controls the future that tightly.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the act, the harm and the reader's need in one plan line each, then set the register from the recipient before writing a sentence."],
          ["While the clock runs", "Hold the four-move order — acknowledge, explain, repair, promise — and keep every 'but' out of the apology sentence."],
          ["If you are stuck", "Ask what the reader lost, and offer it back: the repair that matches the harm is always the strongest paragraph."],
          ["Final minutes", "Audit the promise for anything you cannot control, and check that the sign-off pair matches the greeting you actually used."],
        ],
      },
      {
        type: "summary",
        points: [
          "An apology letter runs on four moves — acknowledge, explain, repair, promise — always in that order.",
          "The acknowledgement sentence opens the letter: fault and purpose fused, with no 'but' in sight.",
          "An explanation owns your share of the cause; an excuse argues your share away.",
          "The repair matches the harm — replace, repay, fix or make it up — and carries evidence it is real.",
          "A calibrated promise names behaviour you control, and the register holds one setting from greeting to sign-off.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on lessons you have already met.",
        items: [
          {
            question: "A letter task prints three bullets: apologise, explain, offer to put things right. What does the analysis habit say each bullet is?",
            options: [
              "One deliverable with its own paragraph",
              "A menu to choose the easiest item from",
              "Three sentences inside one paragraph",
            ],
            correctIndex: 0,
            explanation:
              "Each printed bullet is a deliverable that owns visible space; the paragraph map is decided before drafting, not discovered during it.",
            from: "Analysing question requirements",
          },
          {
            question: "You missed a shift and are writing to your manager, Ms Osei. Which greeting and sign-off pair fits?",
            options: [
              "Dear Ms Osei → Yours sincerely",
              "Hi there → Cheers",
              "Dear Sir or Madam → Yours faithfully",
            ],
            correctIndex: 0,
            explanation:
              "A named manager addressed by surname takes the semi-formal pair; the unknown-recipient pair belongs to letters that never name a person.",
            from: "Semi-formal letters",
          },
          {
            question: "The formal-letters lesson taught one order for stating facts. Which order does an apology explanation borrow?",
            options: [
              "Facts first, then causes, then what follows next",
              "Feelings first, then facts, then a demand",
              "An apology first, then a complaint, then a warning",
            ],
            correctIndex: 0,
            explanation:
              "The facts-then-consequences order keeps the account honest and unemotional, which is exactly what an explanation inside an apology needs.",
            from: "Formal letters",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which opening sentence acknowledges the fault plainly?",
        hints: ["The fault should arrive before any explanation or softening."],
        options: [
          { id: "a", text: "I'm writing about the unfortunate incident with your garden equipment last weekend." },
          { id: "b", text: "I'm writing to apologise for returning your shredder with a burnt-out motor." },
          { id: "c", text: "I was shocked and saddened to discover that your shredder had stopped working." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I'm writing to apologise for returning your shredder with a burnt-out motor.",
          "The strongest acknowledgement names the act, the object and the fault in one sentence, fused with the letter's purpose so nothing delays it.",
          "(a) wraps the fault in vague incident language; (c) describes the writer's surprise as if the damage happened to someone else.",
        ),
        tags: ["gwriting", "t1", "apology", "acknowledgement"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which sentence explains without drifting into excuse?",
        hints: ["An explanation owns the writer's share of the cause."],
        options: [
          { id: "a", text: "The machine jammed because the branches were wet and the hopper design is poor." },
          { id: "b", text: "The motor overheated because I kept feeding it without a pause, which the manual advises against." },
          { id: "c", text: "Anyone would have done the same, the pile looked far smaller from the road." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The motor overheated because I kept feeding it without a pause, which the manual advises against.",
          "The accepted explanation names the writer's own decision as the cause, which is the honesty an apology runs on.",
          "(a) points at the branches and the manufacturer; (c) borrows the crowd's permission instead of accounting for a choice.",
        ),
        tags: ["gwriting", "t1", "apology", "explanation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Find the sentence that turns the apology into a defence.",
        hints: ["Look for the word that arrives mid-sentence and reverses the regret."],
        passageTitle: "A broken apology",
        passage:
          "Dear Mr Halvorsen, I'm writing to apologise for missing the inspection on Tuesday. I'm sorry, but the bus replacement service added an hour to my journey, and my phone battery died before I could warn you. I know the visit mattered to you, and I feel bad about the wasted morning. I'd like to offer you the first appointment next week, Tuesday or Thursday, whichever suits you better.",
        question: "Which sentence most damages the letter's sincerity?",
        options: [
          { id: "a", text: "I'm writing to apologise for missing the inspection on Tuesday." },
          { id: "b", text: "I'm sorry, but the bus replacement service added an hour to my journey, and my phone battery died before I could warn you." },
          { id: "c", text: "I'd like to offer you the first appointment next week, Tuesday or Thursday, whichever suits you better." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I'm sorry, but the bus replacement service added an hour to my journey, and my phone battery died before I could warn you.",
          "'Sorry, but' converts regret into a defence: everything after the 'but' argues the fault away rather than accounting for it.",
          "(a) is the acknowledgement doing its job; (c) is the repair, which is concrete and generous — exactly what the defence sentence threatens.",
        ),
        tags: ["gwriting", "t1", "apology", "sorry-but"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the repair offer in a semi-formal register.",
        sentence: "If the motor cannot be saved, I ___ the machine with the same model, so you will not be left out of pocket.",
        acceptedAnswers: ["will replace", "shall replace"],
        hints: [],
        feedback: fb(
          "will replace (or shall replace)",
          "The repair sentence names one concrete remedy — replacement — and the future form commits the writer to it on the record.",
          "Answers like 'would consider replacing' weaken the commitment into a possibility, which is the opposite of what a repair sentence is for.",
        ),
        tags: ["gwriting", "t1", "apology", "repair"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Draw the line between the two in one sentence.",
        question: "What is the difference between an explanation and an excuse in an apology letter? One sentence.",
        acceptedAnswers: [
          "an explanation states the causes and owns the writer's share, while an excuse argues the writer's share away",
          "an explanation accounts for what happened and accepts responsibility, whereas an excuse shifts the responsibility elsewhere",
          "an explanation gives the honest causes including your own fault, while an excuse blames circumstances or other people",
        ],
        keywords: ["own", "responsibility"],
        hints: [],
        feedback: fb(
          "An explanation states the causes and owns the writer's share of them; an excuse argues that share away.",
          "The line is ownership: explanations account for causes and accept the writer's part in them, while excuses transfer that part onto circumstances, other people or the victim.",
          "Answers about length or detail miss the line — an excuse can be brief and an explanation long; the difference is who ends up holding the fault.",
        ),
        tags: ["gwriting", "t1", "apology", "excuse"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which closing promise is calibrated to what the writer can deliver?",
        hints: [],
        options: [
          { id: "a", text: "I give you my absolute word that nothing like this will ever happen again." },
          { id: "b", text: "I'll drop a note through your door on Friday with the shop's answer, whatever it turns out to be." },
          { id: "c", text: "I promise the replacement will be delivered before the end of the month." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I'll drop a note through your door on Friday with the shop's answer, whatever it turns out to be.",
          "The calibrated promise commits only to actions inside the writer's control — the message and the date — while leaving the shop's verdict honestly open.",
          "(a) guarantees an outcome nobody controls; (c) promises a delivery date that depends on a shop and a courier the writer does not manage.",
        ),
        tags: ["gwriting", "t1", "apology", "promise"],
      }),
    ],
    assignment: {
      title: "Four moves, one letter",
      instructions:
        "Write the complete informal apology to Marco for the housewarming no-show planned in this lesson: acknowledge in your first sentence, explain the double-booking without excusing it, offer a make-it-up plan with a date, and close with a promise you control. Keep the register informal throughout and land between 150 and 190 words.",
      minWords: 150,
      maxWords: 200,
    },
    homework: [
      "Write the acknowledgement sentence for one real fault from your week three times — formal, semi-formal and informal — changing nothing except the register vocabulary.",
      "Collect two 'sorry, but' sentences from messages you have sent or received, and rewrite each so the apology survives the whole sentence.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Lesson 2 — Explanations
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-explanation",
    title: "Explanations",
    description:
      "Explaining a situation or a decision to a reader who needs to understand it: profiling what they already know, sequencing events with their causes, and answering what happened, why and what now — while holding the line between explanation and excuse.",
    objectives: [
      "profile the reader before drafting: what they already know, and what they need next",
      "sequence events and their causes so the reader can follow without drowning in detail",
      "build the letter around the reader's three questions: what happened, why, and what now",
      "hold the line between explanation and excuse by owning your share of every cause",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Some letters answer for a decision: why you are leaving a team, why the rent will arrive late, why the spare room is suddenly full of boxes. The reader is not necessarily angry — they are puzzled, affected, or in charge of what happens next — and the letter's job is to replace confusion with understanding. This lesson teaches explanations as reader management: working out what they already know, giving them what they need next, and building the letter around their three questions. The craft's sharpest edge is the line between explaining a decision and excusing it, and that line is where the letter's credibility lives.",
        beforeYouStart: [
          "You can state a letter's purpose in the opening sentence and hold one register throughout.",
          "You can map three printed bullets to three paragraphs before drafting.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — explanation situations, commonest in letters to organisers, landlords and employers who control what happens next"],
          ["Task & question types", "The 20-minute letter of 150 words or more, with bullets that ask you to state the decision or event, give the reasons, and describe what you will do next"],
          ["What is assessed", "Task Achievement through the three-part coverage, and Coherence through a sequence the reader can rebuild from the letter alone"],
          ["Why this matters", "Examiners check whether the account answers what happened, why and what now; a letter that stops at why leaves the task half finished"],
        ],
      },
      { type: "heading", text: "Component 1 — The craft defined" },
      {
        type: "text",
        text: "An explanation is a bridge across a knowledge gap, and the reader stands on the near side. They know something — usually the situation's outline, because the prompt has told you so — and they need the rest: the sequence, the causes, the consequences. Two disciplines follow. First, run a two-sided ledger before drafting: on the left, what the reader already knows, which you never re-tell; on the right, what they need next, which you deliver in the order they would ask for it. Their questions come in a fixed order — what happened, why did it happen, what happens now — and the strongest letters give each question its own paragraph, in that order. Second, ration the detail: an explanation is a sequence plus its causes, not a transcript. Three dated events and two causes will carry any situation this test sets; a minute-by-minute account drowns the reader in exactly the material they trusted you to sort for them.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "text",
        text: "Start on the reader's side of the desk. What do they already know from their own records and the prompt's situation line — that you joined in spring, that the meeting was missed, that the flat is being vacated? Everything on that list is shared ground and never needs restating. What do they need next: the decision itself if they do not have it, the reasons they cannot infer, and above all the consequences for them, because an explanation ends when the reader knows what to expect. Then classify the task: are you justifying a decision you chose, or clarifying events that happened to you? Decisions need reasons and a share of ownership; events need sequence and effects. The register follows the recipient — an organiser you address by surname sits at semi-formal, an employer may sit higher — and the register decides the vocabulary of cause: 'the determining factor was' at one end of the dial, 'basically it came down to' at the other.",
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The explanation skeleton: three questions, three paragraphs",
        intro: "The reader's questions arrive in a fixed order; so do the paragraphs.",
        steps: [
          {
            title: "Step 1: The purpose sentence names the decision or event",
            text: "Open with the thing itself, not the background. If the reader must wait three paragraphs to learn what the letter is about, every sentence before that one is working against you.",
            examples: [
              {
                english: "I am writing to explain why the flat will be empty from the fourteenth, and what I have arranged with the agency about the viewings.",
                note: "Decision, date and the reader's stake — all in the first breath.",
              },
            ],
          },
          {
            title: "Step 2: The 'what happened' paragraph",
            text: "Give the sequence in three or four steps the reader cannot reconstruct themselves, marking time clearly: the announcement, the change, the consequence. This paragraph establishes facts; reasons wait their turn.",
          },
          {
            title: "Step 3: The 'why' paragraph",
            text: "Deliver the causes in order of weight, main reason first, and own your share where you have one — 'I agreed to both before checking the dates' is the sentence that keeps this an explanation.",
          },
          {
            title: "Step 4: The 'what now' paragraph",
            text: "Convert the account into consequences and offers: what the reader can expect, what you will do, what you can still contribute. This is the paragraph candidates forget, and it is the one the reader most needs.",
          },
          {
            title: "Step 5: The forward close",
            text: "One sentence that points onward — availability, thanks, an invitation to ask more — then the matched sign-off pair.",
          },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The explanation shelf, ranked causes and all",
        items: [
          {
            english: "FORMAL PURPOSE: I am writing to explain the circumstances that have led me to withdraw my child from the afternoon programme.",
            note: "'Circumstances that have led me to' signals a reasoned account in formal dress; the decision arrives in the same breath as the purpose.",
            domain: "exam",
          },
          {
            english: "SEQUENCE, COMPRESSED: The rota changed on the fifth, my weekends moved a week later, and by the end of the month the two commitments could no longer share a Saturday.",
            note: "Three events, three clauses, one sentence — the reader gets the whole arc without a timeline.",
            domain: "everyday",
          },
          {
            english: "CAUSE MARKERS: 'The main reason is that…', 'This meant that…', 'As a result…' — ranked causes, not a heap of them.",
            note: "Rank your causes before drafting: the marker sentence tells the reader which cause carries the most weight.",
            domain: "study",
          },
          {
            english: "OWNING YOUR SHARE: Part of this is my own doing — I accepted the Saturday course before reading the fixture list.",
            note: "The ownership clause draws the explanation-versus-excuse line in words; it costs a sentence and buys the letter's credibility.",
            domain: "work",
          },
          {
            english: "WHAT NOW, SEMI-FORMAL: From next month I can cover Sunday sessions only, so the early fixtures would still have a goalkeeper.",
            note: "The consequences paragraph converts the account into something the reader can plan around — a constraint and an offer in one sentence.",
            domain: "work",
          },
          {
            english: "INFORMAL, THREE BEATS: Short version — my hours changed, Saturdays are gone, and I hated telling you.",
            note: "The informal dial keeps the same three questions; it just compresses them into a rhythm a friend would recognise.",
            domain: "everyday",
          },
          {
            english: "DRILL: take a decision you actually made this year and write its 'what now' paragraph first, then the 'why', then the 'what happened'.",
            note: "Writing the consequences first forces you to notice what the reader actually needs, which usually reshapes the other two paragraphs.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model: leaving the five-a-side team",
        reading: {
          text: "An explanation succeeds when the reader could retell it accurately afterwards. Test any model letter that way: cover it, and try to say back the decision, the main cause and what the reader has been offered. Weak explanations fail the retell in a consistent pattern — the reader can repeat the background in detail but cannot say what the writer decided or what happens next, because the letter spent its words on the parts the reader already knew. The model below is built to survive the retell: one sentence of decision, one paragraph of sequence, one paragraph of ranked causes, one paragraph of consequences, and nothing the organiser could have worked out alone.",
          task: "Read the model, then retell it from memory: what was decided, for what main reason, and what was offered?",
        },
        writing: {
          task: "You have played goalkeeper for a local five-a-side team for two seasons, but your new job now includes Saturday shifts. Write a letter to the team organiser, Mr Kaur. In your letter: explain your decision to leave, describe what has changed at work, and say what you will do to help the team before you go. Write about 150–190 words in a semi-formal register.",
          guide: [
            "I'm writing to explain why I have to…",
            "As you know, I started… What I didn't expect was…",
            "I asked about… twice, but…",
            "Before I go, I'd like to…",
          ],
          model:
            "Dear Mr Kaur,\n\nI'm writing to explain why I have to leave the Riverside five-a-side team at the end of this month. It's not a decision I've taken lightly, and I wanted you to hear the reasons directly from me.\n\nAs you know, I started at the logistics depot in March. What I didn't expect was the shift pattern: since the spring rota came in, I've been scheduled for most Saturday afternoons, which is exactly when our matches are played. I asked about moving to weekday shifts twice, but the early deliveries only run at weekends, so there's no way around it.\n\nBefore I go, I'd like to make the handover easy. I can write up the subscription records for whoever takes the gloves, and I'd happily play one last fixture on the twenty-ninth if you're short of numbers.\n\nThank you for two genuinely enjoyable seasons — Thursday training has been the best hour of my week, and I hope to see you all at the summer barbecue.\n\nYours sincerely,\nTomas Weber",
        },
        listening: {
          script:
            "Three questions drive every explanation letter — what happened, why, what now — so let's hear the model answer them. What happened: new job in March, rota changed in spring, Saturdays gone. Notice the compression: three events, one sentence, no dates beyond the month. Why: the early deliveries only run at weekends, so the shift move is structural — and notice the honesty in 'what I didn't expect', which admits the miscalculation without dwelling on it. What now: records written up, a farewell fixture offered, thanks given. If you can retell that in ten seconds, the letter has done its work. And listen for what is not there — no complaints about the depot, no blame on the roster clerk, no appeals to fairness. An explanation that argues stops explaining.",
          task: "Listen and answer: which question does 'the early deliveries only run at weekends' answer, and what does the tutor say an arguing explanation stops doing?",
        },
        speaking: {
          task:
            "Explain aloud, in sixty seconds, a decision you have made this year — a course dropped, a move, a purchase — answering the three questions in order.",
          frames: [
            "The short version is that I decided to…",
            "What happened was: first…, then…",
            "The main reason is that…, and part of it is that I…",
            "From here on, what I can offer is…",
          ],
          checklist: [
            "Did the decision arrive in my first sentence?",
            "Did I rank my causes, main one first?",
            "Did the listener end up knowing what happens next?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["The decision opens the letter", "Purpose and decision share sentence one, so the organiser never reads blind — the first move Task Achievement ticks."],
          ["Shared knowledge is carried, not retold", "'As you know' handles the March start in three words, spending the paragraph budget on what the reader genuinely lacks."],
          ["Causes are ranked, not heaped", "The structural reason leads and the failed requests follow, so the reader hears the decisive fact first."],
          ["The 'what now' paragraph is concrete", "Records and a farewell fixture are offers the organiser can act on, not vague goodwill."],
          ["No complaint vocabulary anywhere", "The account names the depot's constraints without blaming them, which keeps the letter an explanation rather than a grievance."],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The explanation trap catalogue",
        items: [
          {
            wrong: "As you may be aware, I joined the team some time ago, and over the years the team has meant a great deal to me, and there have been many enjoyable moments.",
            right: "I'm writing to explain why I have to leave the team at the end of this month.",
            reason: "Background-first openings bury the decision; warmth belongs in the close, once the reader knows what the letter is about.",
          },
          {
            wrong: "On Tuesday the fourth at 9:14 my supervisor called a meeting, which finished at 11:40, and then at 12:05 the rota was posted on the noticeboard.",
            right: "The rota changed in the second week of April, and my Saturdays moved with it.",
            reason: "Minute-by-minute detail drowns the sequence the reader needs; an explanation compresses events until the arc is visible.",
          },
          {
            wrong: "It's hardly my fault that deliveries only run at weekends — I'd work weekdays if they let me.",
            right: "The weekend deliveries are fixed, and I accepted the job before checking what the rota would mean — that part is on me.",
            reason: "Defensive language converts the account into a plea; owning your share of the cause is what separates explaining from excusing.",
          },
          {
            wrong: "So that's why I'm leaving. Thanks for everything.",
            right: "Before I go, I can write up the records and play one last fixture if you're short of numbers.",
            reason: "An explanation without a 'what now' paragraph leaves the reader unable to plan; the consequences are the part the reader most needs.",
          },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Practice planning: leaving the choir",
        intro: "A second explanation situation, planned move by move.",
        steps: [
          {
            title: "Step 1: Build the reader's ledger",
            text: "The situation: you have sung alto with a community choir for three years, but the evening classes you need for a diploma now clash with rehearsals, and you must withdraw before the winter concert. Left side of the ledger, what the director knows: you have sung alto for three years, rehearsals run Thursday evenings, the concert is in December. Right side, what she needs: the withdrawal, the clash, and whether the alto section loses its programme notes. The plan crosses out the left side — none of it earns a sentence.",
            examples: [
              {
                english: "Plan note: 'she knows the concert date — do not tell her; she does not know about the diploma — that is the paragraph's spine.'",
                note: "The ledger is crossed out, not just listed: deciding what not to say is half the planning.",
              },
            ],
          },
          {
            title: "Step 2: Order the three questions",
            text: "The bullets — explain your decision, describe what has changed, say what you will do about the concert — arrive already in reader order: what happened, why, what now. The plan labels each paragraph with its question so the order survives drafting.",
          },
          {
            title: "Step 3: Ration the detail",
            text: "Three facts from the diploma story make the cut: classes are Thursday evenings, they run until June, the exam is in May. The enrolment saga, the tutor's name and the waiting list do not — the plan writes 'three facts, then stop' in the margin.",
          },
          {
            title: "Step 4: Draft the purpose sentence and the close first",
            text: "'I'm writing to explain why I have to step down from the choir before the winter concert' and 'I could still sing at the concert itself if you need numbers, since the classes pause that week' — the ends of the letter are drafted before its middle, because they are what the reader keeps.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the reader's ledger — what they know, what they need next — and cross out the left side before it costs you a sentence."],
          ["While the clock runs", "One question per paragraph, in reader order: what happened, why, what now; three or four facts per paragraph, main cause first."],
          ["If you are stuck", "Draft the 'what now' paragraph first; knowing what the reader needs to plan with usually unblocks the causes that matter."],
          ["Final minutes", "Hunt for defensive language — 'not my fault', 'anyone would' — and for detail the reader already has; both get cut on sight."],
        ],
      },
      {
        type: "summary",
        points: [
          "Profile the reader first: what they already know never gets restated; what they need next gets the word budget.",
          "The reader's questions come in a fixed order — what happened, why, what now — and each owns a paragraph.",
          "An explanation is a sequence plus its causes, rationed: three or four facts and the main cause carry any situation.",
          "Owning your share of the cause is the line between explaining and excusing; defensive language crosses it.",
          "The 'what now' paragraph converts the account into consequences the reader can plan around — never skip it.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on lessons you have already met.",
        items: [
          {
            question: "The analysis habit assigns each printed bullet one home. In 'explain your decision / describe what has changed / say what you will do', what are the three homes?",
            options: [
              "Three paragraphs in the printed order",
              "One combined paragraph ordered by importance",
              "Whichever order feels natural while drafting",
            ],
            correctIndex: 0,
            explanation:
              "Each bullet is a deliverable with its own paragraph, kept in the printed order so the examiner's tick-list and the letter's shape agree.",
            from: "Analysing question requirements",
          },
          {
            question: "A letter goes to a landlord you address as Mr Achebe. Which register and pair fit?",
            options: [
              "Formal, 'Dear Sir or Madam' → 'Yours faithfully'",
              "Semi-formal, 'Dear Mr Achebe' → 'Yours sincerely'",
              "Informal, 'Dear Achebe' → 'Cheers'",
            ],
            correctIndex: 1,
            explanation:
              "A named recipient addressed by surname takes the semi-formal pair, whatever the letter's purpose happens to be.",
            from: "Semi-formal letters",
          },
          {
            question: "The planning habit writes the paragraph map before drafting. Where does an explanation letter's plan put the consequences?",
            options: [
              "In the final body paragraph, after the causes",
              "In the opening paragraph, before the decision",
              "Nowhere — consequences belong to essays, not letters",
            ],
            correctIndex: 0,
            explanation:
              "The plan gives 'what now' its own slot after the causes, because the reader needs it last and remembers it longest.",
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
        prompt: "Which opening sentence states the situation for the reader fastest?",
        hints: ["The decision should share sentence one with the purpose."],
        options: [
          { id: "a", text: "I have been meaning to write for some time about various matters connected with the choir." },
          { id: "b", text: "I'm writing to explain why I have to step down from the choir before the winter concert." },
          { id: "c", text: "Music has always been an important part of my life, as you may perhaps know." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I'm writing to explain why I have to step down from the choir before the winter concert.",
          "Purpose and decision arrive together in the first breath, so the reader starts the letter already knowing its subject.",
          "(a) postpones the news behind vague preamble; (c) offers background the reader could supply themselves.",
        ),
        tags: ["gwriting", "t1", "explanation", "purpose"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Spot where this explanation drowns.",
        hints: ["Count how many facts the reader actually needs."],
        passageTitle: "The late rent",
        passage:
          "Dear Ms Petrova, I'm writing to explain why March's rent will reach you on the twentieth instead of the first. On the twenty-sixth of February my employer moved the payroll date from the last Friday to the fifteenth of the following month, after a system change that was announced in a staff email on the Monday and discussed in a meeting I attended on the Tuesday, where our team leader also mentioned that the payslip portal would be down for a week. The money is confirmed for the fifteenth, and the transfer will go out that evening.",
        question: "Which part of the account should be cut first?",
        options: [
          { id: "a", text: "The payroll move from the last Friday to the fifteenth" },
          { id: "b", text: "The staff email on the Monday and the meeting on the Tuesday, including the portal detail" },
          { id: "c", text: "The promise that the transfer goes out on the evening of the fifteenth" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The staff email on the Monday and the meeting on the Tuesday, including the portal detail",
          "The reader needs the cause and the new date; the announcement trail and the portal outage are detail the account can live without.",
          "(a) is the cause itself and must stay; (c) is the 'what now' — the sentence the landlord plans around.",
        ),
        tags: ["gwriting", "t1", "explanation", "detail"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which sentence keeps the account on the explanation side of the line?",
        hints: ["The line is drawn by ownership."],
        options: [
          { id: "a", text: "It's not my fault the classes moved to Thursdays — I enrolled in good faith." },
          { id: "b", text: "The classes moved to Thursdays, and I hadn't checked the rehearsal day before enrolling — that misjudgement is mine." },
          { id: "c", text: "Anyone in my position would have done exactly the same thing." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The classes moved to Thursdays, and I hadn't checked the rehearsal day before enrolling — that misjudgement is mine.",
          "The ownership clause keeps the account honest: the fact is stated, and the writer's share of the cause is accepted in the same breath.",
          "(a) pleads faultlessness before anyone has accused; (c) borrows the crowd's verdict instead of giving the reader a reason.",
        ),
        tags: ["gwriting", "t1", "explanation", "ownership"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the ranked-cause sentence.",
        sentence: "The main ___ is that the evening classes run until June, so the clash cannot be worked around this season.",
        acceptedAnswers: ["reason"],
        hints: [],
        feedback: fb(
          "reason",
          "'The main reason is that…' ranks this cause ahead of all others, telling the reader which fact decided the matter.",
          "Words like 'issue' or 'problem' label the situation without ranking its causes, which is the job this sentence frame exists to do.",
        ),
        tags: ["gwriting", "t1", "explanation", "cause"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the paragraph logic.",
        question: "What are the reader's three questions, in the order an explanation letter answers them?",
        acceptedAnswers: [
          "what happened, why, what now",
          "what happened, why did it happen, what happens next",
          "what happened, why it happened, and what happens now",
        ],
        keywords: ["what happened", "why", "what"],
        hints: [],
        feedback: fb(
          "What happened, why, what now — in that order.",
          "The three questions arrive in a fixed order because each depends on the one before it: no cause makes sense without the event, and no consequence makes sense without the cause.",
          "Orders that start with 'why' leave the reader reconstructing the event from the reasons; orders that end with 'what happened' bury the news the reader most needed.",
        ),
        tags: ["gwriting", "t1", "explanation", "structure"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Your 'why' paragraph is written and the clock allows one more paragraph only. Which paragraph earns those minutes?",
        hints: [],
        options: [
          { id: "a", text: "A second 'why' paragraph, giving the two smaller causes you left out." },
          { id: "b", text: "The 'what now' paragraph: consequences and what you will do about them." },
          { id: "c", text: "A paragraph of thanks and warm feelings about the past three years." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The 'what now' paragraph: consequences and what you will do about them.",
          "The reader can plan around consequences; extra causes and extra warmth cannot be acted on, and the missing 'what now' is the gap examiners most often record.",
          "(a) feeds the reader detail you already rationed; (c) is pleasant material, but it cannot replace the paragraph the reader needs most.",
        ),
        tags: ["gwriting", "t1", "explanation", "what-now"],
      }),
    ],
    assignment: {
      title: "The choir letter in full",
      instructions:
        "Write the complete semi-formal letter to the choir director planned in this lesson: explain your decision to withdraw before the winter concert, describe the clash between the diploma classes and rehearsals, and say what you will do about the concert programme. Answer the three questions in reader order, ration yourself to three facts per paragraph, and land between 150 and 190 words.",
      minWords: 150,
      maxWords: 200,
    },
    homework: [
      "Write the reader's ledger for a real letter or email you owe someone — two columns, what they already know and what they need next — then cross out the left column and check your draft for any sentence that repeats it.",
      "Take a decision from your own life and write its 'what now' paragraph first, then the 'why' paragraph, and notice what the consequences paragraph forced you to keep and to cut.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Lesson 3 — Suggestions
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-suggestion",
    title: "Suggestions",
    description:
      "Proposing improvements to someone with the power to make them: genuine credit first, proposals specific enough to cost, objections answered before they are raised, and real help offered at the close.",
    objectives: [
      "open a suggestion letter with specific, checkable credit for what already works",
      "propose concrete improvements a reader could cost and act on from the sentence alone",
      "anticipate the objections of cost and disruption before the reader can raise them",
      "close with an offer of real help, converting a wish list into a workable plan",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every suggestion letter is written uphill: the reader has the power, the budget and the crowded inbox, and your proposal arrives as one more claim on all three. The letters that succeed share a shape — genuine credit first, specific proposals second, the reader's objections answered third, and an offer of your own labour last. This lesson builds that shape and, just as important, kills its two famous failures: the vague wish list and the complaint wearing a suggestion's coat. You will practise turning 'improve' into install, extend, light and reserve — changes a decision-maker can put a price against.",
        beforeYouStart: [
          "You can hold a formal or semi-formal register across a whole letter.",
          "You can support a point with a concrete detail rather than an opinion.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — suggestion situations, typically addressed to councils, managers and organisers who control budgets and calendars"],
          ["Task & question types", "The 20-minute letter of 150 words or more, with bullets that ask you to describe the current situation, suggest improvements and explain the benefits or offer help"],
          ["What is assessed", "Task Achievement through specific, developed proposals, and tone through a constructive register even when the current state is frustrating"],
          ["Why this matters", "A suggestion the reader could act on scores as a developed response; a vague wish reads as an undeveloped one at the same word count"],
        ],
      },
      { type: "heading", text: "Component 1 — The craft defined" },
      {
        type: "text",
        text: "A suggestion is a gift with a price tag attached: someone must pay for it in money, time or disruption, and the reader is usually the one holding the wallet. That single fact organises the whole letter. Begin with credit — not flattery, but named things that already work — because a reader who feels accused defends the status quo instead of changing it. Follow with proposals specific enough to cost: 'a drinking fountain beside the playground, where the supply pipe already runs' can be priced; 'better facilities' cannot. Then answer the objections you would raise if the letter arrived on your own desk — the cost, the disruption, the upkeep — because a proposal that has survived its own objections reads as thought through. Close with an offer of help that is real work, not good wishes: signatures gathered, a rota joined, an evening given. Two proposals, fully developed, beat a list of seven; a decision-maker acts on a short list and files a long one.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "text",
        text: "Ask four questions of the prompt. Who holds the power to make this change — a council officer, a manager, a coach — and how formal must the letter therefore be? What already works, in detail, because your credit paragraph needs specifics rather than general praise? What exactly would you change, and can you describe it so precisely that a stranger could draw or cost it — the item, the place, sometimes even the mechanism? And who benefits besides you, since a proposal that serves only its author is a request, while one that serves a visible group is a suggestion in the reader's own interest? Note the prompt's arithmetic: if it asks for two improvements, give two, not three — the number printed is part of the task. The answers become the plan: credit line, proposal one, proposal two, objection-and-benefit, offer of help.",
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The suggestion skeleton: credit, proposal, objection, offer",
        intro: "Five slots from greeting to sign-off; the middle three do the persuading.",
        steps: [
          {
            title: "Step 1: The purpose sentence with standing",
            text: "State who you are in relation to the subject — 'as a daily visitor' — because your standing is your evidence base; the reader weighs a regular user's proposal above a stranger's.",
            examples: [
              {
                english: "I am writing as one of the many residents who use Hollow Lane park daily, and as a parent of two of its keener climbers.",
                note: "Standing in the first breath: the reader now knows the proposals come from observed need, not imagination.",
              },
            ],
          },
          {
            title: "Step 2: The credit paragraph",
            text: "Name two or three things that genuinely work — the path, the Saturday run, the playground — in specific terms. This is not politeness: it proves you have watched the place over time.",
          },
          {
            title: "Step 3: The proposal paragraph",
            text: "Give each improvement its own sentence or two: the item, the place and the reason it goes there. Match the printed number of improvements exactly, and let each proposal carry its own detail.",
          },
          {
            title: "Step 4: The objection paragraph",
            text: "Raise the reader's likely cost or disruption objection yourself and answer it in the same sentence: 'the running cost is low, because the wiring already reaches the pavilion.'",
          },
          {
            title: "Step 5: The offer and forward close",
            text: "Offer work you would actually do — signatures, a rota, a trial evening — then close forward: 'I look forward to hearing from you' at the formal end, 'let me know what you think' further down the dial.",
          },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The suggestion shelf, hedges and cost answers",
        items: [
          {
            english: "CREDIT, FORMAL: The centre's evening classes are one of the borough's quiet successes, and the new booking system has made attendance visibly easier.",
            note: "Credit with a named mechanism — the booking system — reads as observation; 'the centre is wonderful' reads as butter.",
            domain: "exam",
          },
          {
            english: "PROPOSAL, FORMAL: I would suggest installing a drinking fountain beside the playground, where the pavilion's water supply already runs.",
            note: "Item, position and the fact that makes it cheap: a sentence a council officer could forward to a contractor unchanged.",
            domain: "exam",
          },
          {
            english: "IT MIGHT BE WORTH: It might be worth extending Saturday opening to the morning hours, when the study rooms stand empty but demand is highest.",
            note: "'It might be worth' proposes without instructing — the formal-politeness sweet spot for suggestions.",
            domain: "study",
          },
          {
            english: "HAVE YOU CONSIDERED, SEMI-FORMAL: Have you considered reserving the two corner tables for quiet study between three and six?",
            note: "A question can carry a proposal; 'have you considered' plants the idea while handing the decision back to the reader.",
            domain: "work",
          },
          {
            english: "INFORMAL: Why don't we put a bench by the gate? I'd happily help dig it in one Saturday.",
            note: "At the friendly end of the dial the proposal and the offer of labour compress into two clauses — the whole craft in miniature.",
            domain: "everyday",
          },
          {
            english: "OBJECTION ANSWERED: I realise new lighting carries a cost, although solar bollards would keep both the bill and the digging to a minimum.",
            note: "'I realise' raises the objection in the reader's voice, and the same sentence disarms it — the move that separates proposals from wishes.",
            domain: "exam",
          },
          {
            english: "OFFER OF HELP: If a volunteer rota would help, I would be glad to add my name to its first month.",
            note: "Real help with a date on it: offers of labour persuade in proportion to their specificity.",
            domain: "work",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model: two improvements for Miller's Field",
        reading: {
          text: "Suggestion letters are read by decision-makers with budgets, which means they are read for feasibility. The examiner, standing in for that reader, looks for four things: credit that proves observation, proposals specific enough to cost, an acknowledgement that changes cost money, and an offer that reduces the reader's workload rather than adding to it. Vague warmth and vague wishes fail the same test from opposite directions — neither can be acted on. As you read the model, notice how little space the letter spends on problems and how much on mechanism: the fountain's pipe, the lights' running cost, the signatures already promised. That ratio — a little diagnosis, a great deal of buildable plan — is the genre's signature.",
          task: "Read the model, then price both proposals in your head: what fact in each makes it cheaper than it sounds?",
        },
        writing: {
          task: "You live beside Miller's Field, a public park you use daily. Write a letter to the town council. In your letter: describe how you and your neighbours use the park, suggest two improvements, and explain how you could help put them in place. Write about 150–190 words in a formal register.",
          guide: [
            "I am writing as a…",
            "The park already does a great deal right: …",
            "The first improvement I would suggest is…",
            "I realise that…, although…",
            "I would be glad to…",
          ],
          model:
            "Dear Sir or Madam,\n\nI am writing as a daily visitor to Miller's Field, and as one of many neighbours who would like to see the park serve the area even better.\n\nThe park already does a great deal right. Families fill the playground through the weekend, the pond path has become a popular evening walk, and the Saturday running group now counts over a hundred regulars. These successes are worth building on, and two additions would extend them.\n\nThe first is a drinking fountain beside the playground, where families spend the warmest hours; at present there is no water within a ten-minute walk, and the pavilion's supply runs close by, so installation would be modest. The second is lighting along the pond path, which is dark and uneven underfoot after dusk; solar bollard lights would cost very little to run.\n\nI realise that budgets are tight, so I would gladly help: I could gather signatures of support from the running group and walk the path with your engineers one evening to test positions.\n\nI look forward to hearing from you.\n\nYours faithfully,\nAna Beltrán",
        },
        listening: {
          script:
            "Before the examiner reads your suggestions, a council officer would read them, so build the letter the officer needs. Credit first — and specific credit: the pond path and the Saturday runners, because general praise reads as flattery while named praise reads as attendance. Then the proposals: notice both are quotable — 'a fountain beside the playground, near the existing supply' could go straight into a works order. Now the money question. You cannot answer it with figures you do not have, but you can answer its shape: the pipe is nearby, the lights are solar, so both proposals are cheap for their kind. Then close with labour you will actually provide — signatures, an evening walk with the engineers. An officer holding a proposal, a cost argument and two offers of help is an officer with a file she can open.",
          task: "Listen and answer: what does the tutor say named praise proves, and what shape does the cost answer take?",
        },
        speaking: {
          task:
            "Propose one real improvement to a place you use — gym, library, bus route — in sixty seconds: credit, proposal, objection answered, offer of help.",
          frames: [
            "One thing that already works well is…",
            "What I'd suggest is…, placed…",
            "I know the concern would be the cost, and…",
            "I'd be happy to…",
          ],
          checklist: [
            "Did my credit name something specific?",
            "Could a stranger cost my proposal from the sentence alone?",
            "Did I offer work, not just good wishes?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["Standing leads the purpose sentence", "'As a daily visitor' tells the reader the proposals come from observed need, which weighs more than any adjective could."],
          ["Credit is specific before any proposal appears", "The playground, the pond path and the running group are named, proving long observation rather than a drive-by opinion."],
          ["Both proposals can be costed from their own sentences", "Item, position and the cheapness fact — nearby pipe, solar power — arrive together, so the reader never asks 'how much?' unanswered."],
          ["The objection paragraph answers the budget", "'I realise that budgets are tight' raises the reader's own thought and answers it with cheapness facts and offers of help."],
          ["The register stays formal and constructive", "No complaint vocabulary anywhere: the letter treats the park's gaps as chances to extend successes, not as faults to list."],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The suggestion trap catalogue",
        items: [
          {
            wrong: "The park could be improved in so many ways, and honestly something should be done about the whole area.",
            right: "The first improvement I would suggest is a drinking fountain beside the playground, where the pavilion's supply already runs.",
            reason: "A vague wish cannot be costed, scheduled or acted on; the task reads it as an undeveloped idea at full word price.",
          },
          {
            wrong: "The council has ignored Miller's Field for years, and residents are frankly tired of empty promises.",
            right: "The park already does a great deal right, and two additions would build on that success.",
            reason: "Accusation makes the reader defend the status quo; credit keeps them reading as an ally of the proposals.",
          },
          {
            wrong: "These changes must be made immediately, whatever the cost, because the community deserves nothing less.",
            right: "Installation would be modest because the supply pipe runs nearby, and the lights would cost almost nothing to run.",
            reason: "Ignoring cost reads as naivety in a letter to a budget holder; acknowledging it and answering its shape reads as seriousness.",
          },
          {
            wrong: "Here are seven ideas: a fountain, lights, benches, a café, a pond stage, a bike shed and a flower show.",
            right: "Two improvements, each with two sentences of detail: the fountain by the supply, the bollards along the dark stretch.",
            reason: "Seven shallow proposals split the word budget seven ways; two developed ones let each carry a place, a reason and a cost answer.",
          },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Practice planning: the break room",
        intro: "A workplace suggestion, planned slot by slot.",
        steps: [
          {
            title: "Step 1: Fix the standing and the credit",
            text: "The situation: the staff break room at your workplace is cramped and disorganised, and you are writing to the office manager, Mr Adeyemi, to describe how colleagues use it, suggest two changes and offer to help. Standing: you eat lunch there four days a week. The credit list writes itself from observation — the room hosts every birthday, the noticeboard works, the coffee machine earns its keep.",
            examples: [
              {
                english: "Plan note: 'credit — birthday gatherings, the noticeboard, the machine; each named, none praised.'",
                note: "Credit built from observed specifics cannot slide into flattery, because every item is checkable.",
              },
            ],
          },
          {
            title: "Step 2: Choose two proposals that can be drawn",
            text: "The shortlist runs to five ideas; the plan keeps the two that survive the drawing test — a shelf above the counter for mugs, and a lunch-hour rota for the two small tables — because both can be described in one sentence each, with a place and a mechanism.",
          },
          {
            title: "Step 3: Write the objection before the manager does",
            text: "Mr Adeyemi will ask what it costs and who cleans it: the plan answers in advance — the shelf is one bracket-and-board job for maintenance, and the rota is a sheet of paper with names on it. Objections answered on paper never arrive in the reply.",
          },
          {
            title: "Step 4: Attach real labour and a forward close",
            text: "The offer: 'I'll build the rota sheet and pin it up myself, and I can clear the counter with maintenance any Friday.' The close points forward — 'I'd be glad to hear what you think' — and the pair is 'Dear Mr Adeyemi' with 'Yours sincerely', the semi-formal setting a known manager requires.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Decide the power holder and the register, list two or three observed successes for credit, and choose exactly as many proposals as the prompt prints."],
          ["While the clock runs", "Give every proposal its item, its place and its cheapness fact; raise the cost objection yourself and answer it in the same sentence."],
          ["If you are stuck", "Ask what the reader would say at the kitchen table — who pays, who cleans, who benefits — and write the paragraph that answers those three."],
          ["Final minutes", "Cut any proposal without a place and any sentence that complains rather than builds; check the offer of help is work you have described."],
        ],
      },
      {
        type: "summary",
        points: [
          "Credit comes first and stays specific: named successes prove observation and keep the reader an ally.",
          "A proposal is buildable when its sentence carries the item, the place and the fact that makes it affordable.",
          "Raise the reader's objections yourself — cost, disruption, upkeep — and answer them inside the same sentence.",
          "Offer real labour with a date on it; help you can describe persuades in proportion to its specificity.",
          "Match the printed number of improvements exactly, and keep the register constructive from greeting to sign-off.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on lessons you have already met.",
        items: [
          {
            question: "A task asks you to write to an unnamed council officer. Which pair does the formal-letters lesson prescribe?",
            options: [
              "'Dear Sir or Madam' → 'Yours faithfully'",
              "'Dear Sir or Madam' → 'Yours sincerely'",
              "'To whom it may concern' → 'Regards'",
            ],
            correctIndex: 0,
            explanation:
              "The unknown-recipient letter opens 'Dear Sir or Madam' and closes 'Yours faithfully' — the one pair the formal-letters lesson fixes by rule.",
            from: "Formal letters",
          },
          {
            question: "The requests lesson demands one thing above all from every request. What does a suggestion letter add on top of it?",
            options: [
              "A specific action, plus credit, objection-handling and an offer of help",
              "Stronger emotion, so the reader feels the urgency",
              "A longer word count, since suggestions are more complex than requests",
            ],
            correctIndex: 0,
            explanation:
              "Both letters name an actionable step; the suggestion letter surrounds it with credit, cost answers and labour, because it asks a budget holder rather than a helper.",
            from: "Requests",
          },
          {
            question: "The planning habit writes the paragraph map before drafting. In a suggestion letter, what fills the map?",
            options: [
              "Credit, proposal, objection, offer — one job per paragraph",
              "A list of everything wrong, then everything wanted",
              "Whatever order the ideas arrive in while drafting",
            ],
            correctIndex: 0,
            explanation:
              "The plan assigns each persuasive job its paragraph before any sentence is written, so the word budget is shared out deliberately.",
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
        prompt: "Which sentence opens a suggestion letter with credit that proves observation?",
        hints: ["Specific and checkable beats warm and general."],
        options: [
          { id: "a", text: "Your gym is absolutely wonderful and I love every single thing about it." },
          { id: "b", text: "The Saturday morning class has filled steadily since it moved to the main hall, and the new booking system has clearly helped." },
          { id: "c", text: "Things at the gym are not what they used to be, in my humble opinion." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The Saturday morning class has filled steadily since it moved to the main hall, and the new booking system has clearly helped.",
          "Named, checkable successes prove the writer has watched the place over time — the observation credit that earns proposals a hearing.",
          "(a) is flattery no reader can verify or use; (c) opens with a complaint, putting the reader on the defensive before any proposal arrives.",
        ),
        tags: ["gwriting", "t1", "suggestion", "credit"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which proposal can be costed from its own sentence?",
        hints: ["Could a contractor act on it without asking a follow-up question?"],
        options: [
          { id: "a", text: "The break room needs to be much nicer for everyone who uses it." },
          { id: "b", text: "A shelf above the counter would take the mugs off the drying rack — one bracket-and-board job for maintenance." },
          { id: "c", text: "Perhaps some kind of storage solution might be considered at some point." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A shelf above the counter would take the mugs off the drying rack — one bracket-and-board job for maintenance.",
          "Item, place, purpose and an order-of-magnitude cost all arrive in one sentence: a reader could forward it to maintenance unchanged.",
          "(a) states a feeling, not a change; (c) hedges the proposal twice until nothing actionable survives the sentence.",
        ),
        tags: ["gwriting", "t1", "suggestion", "specificity"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Find the sentence that answers the objection before it is raised.",
        hints: ["Look for the sentence that names the reader's likely worry and answers it in the same breath."],
        passageTitle: "A proposal for the library",
        passage:
          "Dear Ms Whitfield, I am writing as one of the two hundred or so regulars at Ashfield branch library. The Tuesday rhyme-time is a genuine success, and the study desks are full most evenings. I would suggest opening the ground-floor room on Saturday mornings, when the desks upstairs fill by ten o'clock. I know that staffing Saturdays is expensive, although the room needs no more than one desk, and the volunteers who run rhyme-time have already asked about extra hours. I would be glad to help set the room up each week.",
        question: "Which sentence raises and answers the cost objection?",
        options: [
          { id: "a", text: "I would suggest opening the ground-floor room on Saturday mornings, when the desks upstairs fill by ten o'clock." },
          { id: "b", text: "I know that staffing Saturdays is expensive, although the room needs no more than one desk, and the volunteers who run rhyme-time have already asked about extra hours." },
          { id: "c", text: "I would be glad to help set the room up each week." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I know that staffing Saturdays is expensive, although the room needs no more than one desk, and the volunteers who run rhyme-time have already asked about extra hours.",
          "The sentence names the reader's worry — staffing cost — and answers it twice over: minimal staffing need, and volunteers already willing.",
          "(a) is the proposal itself, which carries no cost argument; (c) is the offer of help, which supports the answer but does not name the objection.",
        ),
        tags: ["gwriting", "t1", "suggestion", "objections"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the hedged proposal in a formal register.",
        sentence: "It ___ be worth reserving the two corner tables for quiet study between three and six.",
        acceptedAnswers: ["might"],
        hints: [],
        feedback: fb(
          "might",
          "'It might be worth…' proposes without instructing: the hedge is the politeness that lets a formal reader consider the idea without feeling directed.",
          "Stronger forms like 'must' or 'should' turn the proposal into an instruction, which sits badly in a letter to someone who outranks the writer.",
        ),
        tags: ["gwriting", "t1", "suggestion", "hedging"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the test in one sentence.",
        question: "What must a suggestion sentence contain for a reader to be able to act on it? One sentence.",
        acceptedAnswers: [
          "the item, the place and the fact that makes it affordable, so it can be costed and scheduled from the sentence alone",
          "a specific change with its location and a cost or feasibility fact, so the reader can act without follow-up questions",
          "the improvement itself, where it would go, and why it is cheap or easy — enough to put a price against it",
        ],
        keywords: ["specific", "place"],
        hints: [],
        feedback: fb(
          "The item, the place and the fact that makes it affordable — a sentence a reader could cost and schedule without asking a follow-up question.",
          "Actionable proposals carry their own feasibility: what to install, where, and the nearby pipe, existing rota or cheap mechanism that keeps the price down.",
          "Answers about politeness or length miss the test — hedged language and short sentences are worthless if the reader still has to ask 'what, exactly, and where?'",
        ),
        tags: ["gwriting", "t1", "suggestion", "actionability"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. You have used 190 words and there is a third idea you love. What does the craft say?",
        hints: [],
        options: [
          { id: "a", text: "Squeeze all three proposals in — more ideas show more engagement with the task." },
          { id: "b", text: "Cut the third idea and deepen the two you have, letting each carry a place and a cost answer." },
          { id: "c", text: "Keep the third idea and delete the credit paragraph to make room." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Cut the third idea and deepen the two you have, letting each carry a place and a cost answer.",
          "Two developed proposals — each with item, place and cheapness fact — read as a plan; three thin ones read as a list, and lists do not survive contact with a budget.",
          "(a) splits the word budget until no proposal carries its cost answer; (c) trades the paragraph that makes the reader an ally for the paragraph that makes the letter longer.",
        ),
        tags: ["gwriting", "t1", "suggestion", "development"],
      }),
    ],
    assignment: {
      title: "Two improvements, fully built",
      instructions:
        "Write the complete semi-formal letter to Mr Adeyemi planned in this lesson: describe how colleagues use the break room, suggest two changes specific enough to cost, and offer help you would genuinely give. Answer the cost objection inside the letter, match the printed number of proposals, and land between 150 and 190 words.",
      minWords: 150,
      maxWords: 200,
    },
    homework: [
      "Choose a place you visit weekly and write its credit paragraph — three named successes, no adjectives of praise — then check every item is one a stranger could verify.",
      "Take one vague wish ('the gym should be better') and rebuild it into a proposal sentence with an item, a place and a cheapness fact; then do the same for 'the buses should be more frequent'.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Lesson 4 — Tone
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-tone",
    title: "Tone",
    description:
      "The tone dial across the whole spectrum: setting the register from the recipient, deploying the marker sets at every level, holding one position from greeting to sign-off, and repairing the mid-letter slips that break a letter's single voice.",
    objectives: [
      "set the tone dial from the recipient and the purpose's weight before writing the first sentence",
      "deploy the marker sets of each register: greeting pairs, contraction policy, verb class, exclamation budget",
      "hold one register from greeting to sign-off, catching the mid-letter slip before it lands",
      "re-render any sentence at a different distance on demand, and repair tone breaks in a draft",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every letter you write in this test is judged twice on tone: once for the dial position you chose, and once for how steadily you held it. Choosing is the easier half — the recipient tells you formal, semi-formal or informal before you write a word. Holding is where letters fail: the formal complaint that ends 'cheers', the friendly note that suddenly thanks the reader 'for your kind consideration of this matter'. This lesson walks the whole dial, marker by marker, then trains the diagnostic eye — spotting the break, naming the marker that gave it away, and repairing the sentence without starting the letter again.",
        beforeYouStart: [
          "You can name the three registers and their greeting-and-sign-off pairs.",
          "You can write a letter's purpose sentence and keep its bullets in paragraph order.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — tone is assessed in every letter task, whatever purpose the bullets print"],
          ["Task & question types", "The 20-minute letter of 150 words or more, in which the recipient named by the prompt fixes the register the letter must hold"],
          ["What is assessed", "Tone: consistent, appropriate register — a letter that reads as written to its actual recipient, from first word to sign-off"],
          ["Why this matters", "A mid-letter register slip is among the most visible errors an examiner can record, because it breaks the fiction that the letter has a real reader"],
        ],
      },
      { type: "heading", text: "Component 1 — The craft defined" },
      {
        type: "text",
        text: "Tone is distance management. Every marker in a letter — greeting, verb class, contraction, exclamation, sign-off — either widens the gap between writer and reader or narrows it, and the three registers are simply three distances. Formal keeps the gap wide: no contractions, latinate verbs where plain ones exist ('postpone' rather than 'put off'), full politeness routines, and feelings reported rather than displayed. Informal closes the gap: contractions everywhere, phrasal verbs, exclamations, dashes, and the shared assumptions of a friendship. Semi-formal sits deliberately between — warm vocabulary inside a tidy frame, contractions permitted, ceremony dropped. Two laws follow. The dial is set by the recipient and the purpose's weight: bad news raises formality, good news lowers it, and an authority figure holds the high end whatever the news. And the dial holds one position for the whole letter: the examiner's tone question is not 'was it formal?' but 'was it consistently anything?'. A letter that slips reads as two writers arguing over one page.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "text",
        text: "Before the first sentence, run the three-step dial reading. Step one: who is the recipient, in relationship terms — unknown authority, person known by surname or role, or friend and family? That alone fixes the register band. Step two: how heavy is the purpose? Telling a friend you have lost their book is bad news and pulls the dial one notch up from pure chat; telling a landlord the good news that you want to renew pulls it one notch down from full ceremony. Step three: what has the relationship's history been — the prompt's little clues ('your friend and former neighbour', 'the manager you have met twice') are dial instructions in disguise. Write the resulting position at the top of the plan — 'informal, warm', 'formal, cool' — and check every marker you draft against that note, because the slip the examiner catches is always a marker that drifted while the writer's attention was somewhere else.",
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The tone protocol: set, stock, write, audit",
        intro: "Four passes, the last one written into your final two minutes.",
        steps: [
          {
            title: "Step 1: Set the dial",
            text: "From recipient, purpose weight and history, write the dial position on the plan before any sentence exists — a note specific enough to audit against later.",
            examples: [
              {
                english: "Plan note for a letter to a former teacher: 'semi-formal, respectful — contractions allowed, slang never.'",
                note: "The dial note names what is allowed and what is banned, which is exactly what an auditor needs.",
              },
            ],
          },
          {
            title: "Step 2: Stock the shelf at that position",
            text: "Choose the greeting-and-sign-off pair, the contraction policy, the verb class and the exclamation budget — zero at the formal end, one or two at the informal end — and write them on the plan as a list.",
          },
          {
            title: "Step 3: Write inside the list",
            text: "Draft the letter using only the markers you stocked; when a sentence needs a new marker, check it against the dial note before it enters the draft.",
          },
          {
            title: "Step 4: Audit sentence by sentence",
            text: "In the final minutes, read for markers only: contractions consistent, verbs of one class, exclamation count within budget, politeness routines at one distance. Repair slips by re-rendering the sentence at the dial position, not by redrafting the paragraph.",
          },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The dial in motion: one favour, three distances",
        items: [
          {
            english: "FORMAL: I would be grateful if you could water the plants in my flat during the first week of June.",
            note: "No contraction, latinate gratitude, a full politeness routine — every marker holds the gap wide.",
            domain: "exam",
          },
          {
            english: "SEMI-FORMAL: Could you possibly water the plants in my flat during the first week of June? I'd owe you a favour.",
            note: "A question softens the request and one contraction arrives; the gap narrows but the frame stays tidy.",
            domain: "work",
          },
          {
            english: "INFORMAL: Any chance you could pop in and water my plants the first week of June? You'd be a lifesaver!",
            note: "Phrasal verb, contraction, exclamation and friendly idiom — the gap is closed to friendship distance.",
            domain: "everyday",
          },
          {
            english: "VERB CLASS SWAP: 'the delay was caused by a signal failure' becomes 'the hold-up came down to a signal failure' at the informal end.",
            note: "Latinate 'caused by' holds formality; phrasal 'came down to' releases it — the same fact at two distances.",
            domain: "study",
          },
          {
            english: "FEELING, TWO DISTANCES: 'I was delighted to learn of your engagement.' beside 'I was so happy when I heard the news — congratulations!'",
            note: "Formal letters report feelings; informal letters display them. The exclamation is a distance marker, not enthusiasm leaking.",
            domain: "everyday",
          },
          {
            english: "SLIP REPAIR: 'I am writing to request a replacement kettle. Cheers, and don't be a stranger!' becomes 'I am writing to request a replacement kettle. I look forward to hearing from you. Yours sincerely,'.",
            note: "The repair keeps the letter's content and re-renders only its broken sentences at the dial position.",
            domain: "exam",
          },
          {
            english: "DRILL: say one request — 'lend me your notes' — at all three distances in thirty seconds, changing greeting, verb and sign-off each time.",
            note: "Speed forces the marker sets to become instinct; hesitation is where slips are born.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model: shift changes, told to a friend",
        reading: {
          text: "Tone is easiest to study in a letter where the register is under pressure — bad news for the writer, a good-humoured telling of it, and a friend on the receiving end who still needs the information. The model below holds the informal dial under exactly that pressure. As you read, audit it the way the final two minutes of the test should: count the contractions and notice they never lapse; notice the phrasal verbs carrying the workload of every formal verb the letter does not use; notice that the exclamation budget is spent twice, not five times; and notice that even at friendship distance, the letter still opens on purpose and still closes looking forward. Informal is a register with rules, and the model keeps all of them while sounding like a person.",
          task: "Read the model, then list its informal markers in the margin — contractions, phrasal verbs, exclamations — and check the count.",
        },
        writing: {
          task: "The hotel where you work has moved you onto evening shifts, so you now finish at eleven most nights and sleep through Saturday mornings. Write a letter to your friend Sam. In your letter: tell him about the change, explain how it affects your Saturday football, and suggest a new regular day to meet. Write about 150–190 words in an informal register.",
          guide: [
            "Guess what — …!",
            "It's good news for…, but it's wrecked…",
            "So here's my idea: how about…?",
            "If that works for you, write back soon!",
            "Take care, / Love,",
          ],
          model:
            "Dear Sam,\n\nGuess what — my shifts at the hotel have completely changed! I'm on evenings now, clocking off at eleven most nights.\n\nIt's good news for my bank balance, because evenings pay more, but it's wrecked our Saturday football. I'm on lates every weekend, which means I sleep until midday and miss the kick-off completely. I know you were counting on me for the five-a-side, and I feel bad about dropping you in it.\n\nSo here's my idea: how about we switch to Sundays? I'm free from two o'clock, we could grab lunch at that noodle place you like, and I might even last to the evening match. If Sundays work for you, write back soon and I'll book a table!\n\nHope the family's well — say hi to everyone from me.\n\nTake care,\nRavi",
        },
        listening: {
          script:
            "One sentence, three distances — watch the markers move. 'I would be grateful if you could look after the flat in June.' Formal: no contraction, grateful, the full routine. Now: 'Could you possibly keep an eye on the flat in June?' — question form, phrasal verb, the gap narrows. Now: 'Any chance you could pop over and water things in June?' — contraction, phrasal verb, friendly idiom, gap closed. Notice what never changed: the fact and the request underneath it. Register is clothing; the body underneath is the same. That is why re-rendering is a repair you can always afford — you are changing the clothes, not the person. In the test, that means a slipped sentence never needs a new paragraph; it needs the same sentence in the right clothes.",
          task: "Listen and answer: which three things changed between the first and third versions, and what stayed the same underneath?",
        },
        speaking: {
          task:
            "Take one sentence — 'I need to borrow your bike on Friday' — and say it at all three distances, then explain which markers you moved.",
          frames: [
            "I would be grateful if…",
            "Could you possibly…?",
            "Any chance you could…?",
            "The thing that changed was…, and the thing that stayed was…",
          ],
          checklist: [
            "Did I move greeting, verb class and sign-off together?",
            "Did the underlying request stay constant?",
            "Could a listener name my dial position?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["The dial is set informal in the first three words", "'Guess what' announces friendship distance before any content arrives, so the reader never has to guess the register."],
          ["Contractions are policy, not decoration", "Every eligible verb contracts — I'm, it's, I'll, can't — because a policy applied consistently is the register's proof."],
          ["Phrasal verbs carry the formal vocabulary's workload", "'Clocked off', 'wrecked' and 'dropping you in it' do the work of 'finished my shift', 'affected' and 'inconvenienced' at friendship distance."],
          ["The exclamation budget is spent exactly", "Two exclamations in 160 words: enough to sound alive, few enough to sound like a writer in control of the dial."],
          ["Informal never means unstructured", "Purpose in sentence one, one job per paragraph, a close that looks forward — the skeleton survives every register intact."],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The tone trap catalogue",
        items: [
          {
            wrong: "Dear Mr Farrell, I am writing to give notice of a leak in the bathroom. Anyway, must dash — catch you later!",
            right: "Dear Mr Farrell, I am writing to give notice of a leak in the bathroom. I look forward to hearing from you. Yours sincerely,",
            reason: "A mid-letter slip breaks the letter's one fiction — that a real reader exists at a real distance; the repair re-renders the slipped sentences only.",
          },
          {
            wrong: "Dear Sam, I am writing to inform you of a modification to my occupational schedule, effective immediately.",
            right: "Dear Sam, guess what — my shifts at work have completely changed!",
            reason: "Over-formal language to a friend mismanages distance in the other direction; the reader hears either coldness or comedy.",
          },
          {
            wrong: "I am writing to let you know that I can't attend, and I hope you will accept my apologies for the inconvenience caused.",
            right: "I am writing to let you know that I will be unable to attend, and I hope you will accept my apologies for the inconvenience caused.",
            reason: "One contraction inside a full-formal sentence is a policy break; formal means zero contractions, not a few tasteful ones.",
          },
          {
            wrong: "What a fantastic opportunity! I am so excited! Please accept my enthusiastic application!!",
            right: "I was delighted to learn of the vacancy, and I would like to submit my application with genuine enthusiasm.",
            reason: "Exclamations at the formal end display feeling where formal letters report it; the doubled exclamation mark adds error to error.",
          },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Practice planning: the letting-agent repair",
        intro: "A broken letter, diagnosed and planned back to one dial position.",
        steps: [
          {
            title: "Step 1: Mark every marker in the broken draft",
            text: "The situation: a letter to a letting agency about a broken heating system, drafted in a hurry. The draft opens 'Dear Greenway Lettings' and asks for a boiler repair, then slips three times: 'the heating has gone kaput', 'I would be most obliged if this matter could receive your prompt attention', and a sign-off that reads 'Cheers, Dan'. The plan underlines all three and labels each with its marker type: slang idiom, over-ceremony, informal close.",
            examples: [
              {
                english: "Plan note: 'kaput = slang at semi-formal; most obliged = ceremony one notch too high; Cheers = wrong close for a business.'",
                note: "Naming the marker type is what turns a feeling of wrongness into a repairable list.",
              },
            ],
          },
          {
            title: "Step 2: Fix the dial position from the recipient",
            text: "A letting agency is a business you know but do not socialise with: semi-formal, warm-tidy. The pair becomes 'Dear Greenway Lettings' with 'Kind regards' — or 'Yours sincerely' if a name exists — the contraction policy becomes 'allowed but sparing', and the exclamation budget is zero.",
          },
          {
            title: "Step 3: Re-render the three slipped sentences",
            text: "'Kaput' becomes 'stopped working entirely'; 'most obliged' becomes 'I would be grateful'; 'Cheers, Dan' becomes 'Kind regards, Dan Whitlock'. Nothing else in the letter changes — repair is sentence surgery, not a redraft.",
          },
          {
            title: "Step 4: Audit the repaired whole",
            text: "A full read for markers only: contractions now consistent, verb class steady, politeness at one distance, sign-off matching the greeting. The audit takes ninety seconds and is the difference between a letter that is informal and a letter that is merely friendly.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the recipient and the purpose's weight, write the dial position on the plan, and stock your marker list — pair, contractions, verb class, exclamation budget."],
          ["While the clock runs", "Write inside the stocked list; when a new marker tempts you mid-draft, check it against the dial note before it enters a sentence."],
          ["If you are stuck", "Re-render a sentence you know at the right distance — same fact, new clothes — and the paragraph usually restarts itself around it."],
          ["Final minutes", "Audit markers only: contractions, verb class, exclamation count, politeness distance, sign-off pair. Repair slipped sentences, not paragraphs."],
        ],
      },
      {
        type: "summary",
        points: [
          "Tone is distance management: every marker either widens or narrows the gap, and the three registers are three distances.",
          "The dial is set before writing — recipient, purpose weight, relationship history — and written at the top of the plan.",
          "Markers travel in sets: greeting pair, contraction policy, verb class, exclamation budget, all consistent.",
          "The examiner's tone question is consistency: a letter that slips registers reads as two writers arguing over one page.",
          "Repair is sentence surgery: re-render the slipped sentences at the dial position and leave the rest of the letter standing.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on lessons you have already met.",
        items: [
          {
            question: "The formal-letters lesson fixes a rule about contractions. What is it?",
            options: [
              "Formal letters use none at all",
              "Formal letters allow contractions in the close only",
              "Formal letters allow one contraction per paragraph",
            ],
            correctIndex: 0,
            explanation:
              "Formal distance excludes contractions entirely; the zero-contraction policy is the easiest marker to audit and the easiest slip to catch.",
            from: "Formal letters",
          },
          {
            question: "The informal-letters lesson lists the friendship markers. Which set belongs at that end of the dial?",
            options: [
              "Contractions, phrasal verbs, exclamations, chat openers",
              "Latinate verbs, reported feelings, full politeness routines",
              "Nominalisation, passive voice, formal connectors",
            ],
            correctIndex: 0,
            explanation:
              "The informal marker set is contractions, phrasal verbs, exclamations and chat openers — the vocabulary of closed distance.",
            from: "Informal letters",
          },
          {
            question: "A semi-formal letter goes to a landlord known as Ms Osei. Which pair and policy fit?",
            options: [
              "'Dear Ms Osei' → 'Yours sincerely', contractions sparingly",
              "'Dear Ms Osei' → 'Love from', contractions throughout",
              "'Dear Sir or Madam' → 'Yours faithfully', no contractions",
            ],
            correctIndex: 0,
            explanation:
              "A named recipient addressed by surname takes the semi-formal pair, and its contraction policy is 'allowed but sparing' — the middle distance in every marker.",
            from: "Semi-formal letters",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which sentence sits correctly at the formal end of the dial?",
        hints: ["Formal letters report feelings rather than display them."],
        options: [
          { id: "a", text: "I was over the moon to hear about the funding — brilliant news!!" },
          { id: "b", text: "I was delighted to learn that the project has received its funding." },
          { id: "c", text: "Great news about the funding — I'm made up for you all!" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I was delighted to learn that the project has received its funding.",
          "No contraction, no exclamation, feeling reported in 'delighted to learn' — the formal distance held by every marker in the sentence.",
          "(a) displays the feeling twice and punctuates it twice; (c) closes the distance with slang and a contraction, both informal markers.",
        ),
        tags: ["gwriting", "t1", "tone", "formal"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Find the tone break in this letter.",
        hints: ["Read for markers only: contractions, verb class, politeness distance, sign-off."],
        passageTitle: "A letter with a slip",
        passage:
          "Dear Ms Odell, I am writing to request a repair to the kitchen tap, which has dripped steadily since Tuesday. I have turned off the valve under the sink in the meantime, and I can be present any weekday afternoon. I realise that your engineers are busy at this time of year. Cheers, and speak soon! Yours sincerely, R. Achterberg",
        question: "Which line breaks the letter's register?",
        options: [
          { id: "a", text: "I am writing to request a repair to the kitchen tap, which has dripped steadily since Tuesday." },
          { id: "b", text: "I realise that your engineers are busy at this time of year." },
          { id: "c", text: "Cheers, and speak soon!" },
        ],
        correctOptionId: "c",
        feedback: fb(
          "Cheers, and speak soon!",
          "The close is friendship distance inside a full-formal letter — the most visible slip an examiner can record, sitting right beside the correct sign-off it displaces.",
          "(a) and (b) hold the formal distance the greeting established, which is what makes the final line so loud against them.",
        ),
        tags: ["gwriting", "t1", "tone", "slip"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. A draft to a friend opens: 'Dear Marco, I am writing to inform you of my change of address.' What is the fastest repair?",
        hints: ["Repair is sentence surgery — the same information, at the right distance."],
        options: [
          { id: "a", text: "Delete the sentence entirely and start with the new address in a list." },
          { id: "b", text: "Re-render it at friendship distance: 'Dear Marco, quick one — we've finally moved!'" },
          { id: "c", text: "Keep it, because letters should open formally whatever the recipient." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Re-render it at friendship distance: 'Dear Marco, quick one — we've finally moved!'",
          "Re-rendering keeps the information and changes only its clothes — contraction, chat opener, exclamation — which is the whole repair method in one sentence.",
          "(a) throws away the purpose sentence the letter needs; (c) ignores the recipient, who is the dial's first instruction.",
        ),
        tags: ["gwriting", "t1", "tone", "repair"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Re-render the formal request at semi-formal distance by completing it.",
        sentence: "___ you possibly look after the flat for a week in June? I'd owe you a favour.",
        acceptedAnswers: ["Could"],
        hints: [],
        feedback: fb(
          "Could",
          "The question form 'Could you possibly…' carries the request at semi-formal distance — softer than a statement, warmer than a full routine.",
          "Formal openers like 'I would be grateful if' would push the sentence past the dial position; a bare imperative like 'Look' would drop it below.",
        ),
        tags: ["gwriting", "t1", "tone", "re-render"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the marker sets.",
        question: "Name any three markers an auditor checks when testing a letter's register. Three items, one line.",
        acceptedAnswers: [
          "contractions, verb class (phrasal versus latinate), exclamation count",
          "greeting and sign-off pair, contraction policy, politeness distance",
          "contractions, exclamations, the greeting-and-sign-off pair",
        ],
        keywords: ["contractions"],
        hints: [],
        feedback: fb(
          "Contractions, verb class and exclamation count — or the greeting pair and politeness distance, all of them auditable.",
          "The audit checks the marker sets the letter chose: pairs, contractions, verb class, exclamation budget and politeness distance, each consistent from first word to last.",
          "Answers about spelling, paragraph count or word count belong to other criteria; tone is audited through its markers alone.",
        ),
        tags: ["gwriting", "t1", "tone", "audit"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Mid-letter, a formal request letter to a library manager needs a sentence asking for a reply. Which line holds the dial?",
        hints: [],
        options: [
          { id: "a", text: "Drop me a line whenever you get a chance — no rush!" },
          { id: "b", text: "I look forward to hearing from you at your convenience." },
          { id: "c", text: "I would be most sincerely and profoundly grateful for the bountiful gift of your earliest reply." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I look forward to hearing from you at your convenience.",
          "The standard formal forward-close holds the established distance exactly: polite, complete, and free of either chat or ceremony inflation.",
          "(a) closes the distance the letter had opened; (c) over-ceremonialises past the dial position — inflation is a slip even when it slips upward.",
        ),
        tags: ["gwriting", "t1", "tone", "consistency"],
      }),
    ],
    assignment: {
      title: "One letter, re-rendered",
      instructions:
        "You have had to pull out of a weekend trip with your friend Jo at short notice because of work. Write the complete informal letter to Jo: tell her the news, explain what happened with your shifts, and suggest a new date for the trip. Hold the informal dial from 'Dear Jo' to the sign-off, then re-render your opening sentence and your closing line only, at formal distance, and note the three markers you changed in each.",
      minWords: 150,
      maxWords: 200,
    },
    homework: [
      "Take one request you actually need to make this week and write it three times — formal, semi-formal, informal — changing nothing except the marker sets.",
      "Find the register slips in a message you have already sent (they are almost always there), name each slipped marker, and re-render only the broken sentences.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Lesson 5 — Letter organisation
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-letter-organisation",
    title: "Letter organisation",
    description:
      "The universal skeleton under every letter: purpose in the first breath, one paragraph per printed bullet in the printed order, a close that looks forward, and the word budget that keeps the letter between 150 and 190 words — with a method for the bullet that feels like two paragraphs.",
    objectives: [
      "state the letter's purpose in the opening sentence, at whatever distance the register sets",
      "map one paragraph to each printed bullet, in the order the bullets are printed",
      "close with a forward-looking line and the greeting's matched sign-off",
      "budget the letter to land between 150 and 190 words by assigning each slot its share before drafting",
      "split a compound bullet across two sentences without hiding the one-tick-per-bullet map",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Strip away the register, the purpose and the personality, and every letter this test asks for has the same bones: a greeting, a purpose sentence, one paragraph per printed bullet in the printed order, a forward-looking close, and a sign-off that matches the greeting. Letters fail organisation in the same four ways everywhere: the warm-up that delays the purpose, the reordered bullets, the one-paragraph-everything letter, and the close that never comes. This lesson installs the skeleton so firmly that content becomes the only decision left — and it answers the question that troubles careful writers most: what to do when a single bullet quietly contains two ideas.",
        beforeYouStart: [
          "You can classify a letter's register from its recipient.",
          "You can identify each printed bullet's job — describe, explain, request, suggest, apologise, thank.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — the skeleton runs under every letter task, from complaint to thank-you, formal to informal"],
          ["Task & question types", "The 20-minute letter of 150 words or more, built from a situation and three printed bullets the letter must cover visibly"],
          ["What is assessed", "Task Achievement through visible bullet coverage, and Coherence and Cohesion through paragraphing the examiner can tick against the task"],
          ["Why this matters", "The printed bullets are the examiner's tick-list; a letter whose paragraphs mirror them makes full coverage visible at a glance"],
        ],
      },
      { type: "heading", text: "Component 1 — The craft defined" },
      {
        type: "text",
        text: "The skeleton has five slots. The greeting sets the register before a word of content. The purpose sentence states why the letter exists in its first breath — the reader should never wonder, even briefly, what this is about; the slot survives every register, from 'I am writing to apply' down to 'just a quick one about'. The body is one paragraph per printed bullet, in the printed order, because the examiner holds the task's tick-list in that order and a letter that mirrors it makes every tick easy — and because bullets often build on each other, so the printed order is usually the reader's order too. The close looks forward: a reply expected, a meeting proposed, a thanks renewed, because letters are links in a conversation rather than monologues. The sign-off matches the greeting's register, closing the frame the greeting opened. Around it all sits the budget: 150 words is the floor, about 190 a sensible ceiling, and the surest way to land inside it is to assign each slot its share before drafting begins.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "text",
        text: "Organisation planning starts with three counts. Count the bullets: that number is your body-paragraph count, whatever the purpose. Label each bullet's job in one word — describe, explain, request, suggest, apologise, thank — because the job names the paragraph's opening move. Then hunt the compound bullet: one bullet carrying two instructions, such as 'describe the jacket and say when you bought it', wants two sentences inside one paragraph, not two paragraphs — the map stays at one tick per bullet, and the paragraph simply does its work twice. Finally, budget the words: roughly fifteen to twenty for the purpose sentence, forty to fifty for each bullet paragraph, fifteen to twenty for the close, which lands the letter near 170 with room for the greeting and sign-off. Write the budget numbers beside the bullet labels — an over-weight plan is the cheapest possible place to discover that a paragraph cannot be written in the space allowed.",
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "Building the letter slot by slot",
        intro: "Five slots, in build order — which is not quite reading order.",
        steps: [
          {
            title: "Step 1: Draft the purpose sentence first",
            text: "Before the greeting, before any paragraph, write the sentence that names the letter's reason for existing; everything else in the letter will be measured against it.",
            examples: [
              {
                english: "I'm just writing to say a huge thank you for having Miso while I was away.",
                note: "Purpose plus register in one sentence: the whole letter's tone and reason, drafted before its paragraphs exist.",
              },
            ],
          },
          {
            title: "Step 2: Number the bullets and label their jobs",
            text: "Write 1, 2, 3 down the plan margin, each with its one-word job: thank, tell, ask. The labels are the examiner's tick-list translated into a plan.",
          },
          {
            title: "Step 3: Attach the budget to each slot",
            text: "Fifteen words of purpose, three forties or fifties of body, fifteen of close: write the numbers next to the labels so the draft has a spending plan before it has sentences.",
          },
          {
            title: "Step 4: Draft the close before the last body paragraph",
            text: "Writing the forward-looking close early guarantees the letter ends looking forward; a close drafted at the clock's end tends to vanish, taking the letter's last tick with it.",
          },
          {
            title: "Step 5: Check the map before polishing",
            text: "One tick per bullet, in printed order, one visible paragraph per tick; only when the map is clean does word choice deserve any attention.",
          },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The organisation shelf: openers, closers, budget lines",
        items: [
          {
            english: "PURPOSE, THREE DISTANCES: 'I am writing to apply for the weekend supervisor role.' / 'I'm writing to let you know about a change of plan.' / 'Quick one — I wanted to ask you something.'",
            note: "The same slot at three distances: purpose always leads, whatever clothes it wears.",
            domain: "exam",
          },
          {
            english: "FORWARD CLOSES, THREE DISTANCES: 'I look forward to hearing from you.' / 'Do let me know what you think.' / 'Write back soon!'",
            note: "Every close points onward — the register changes the wording, never the direction.",
            domain: "exam",
          },
          {
            english: "BULLET-OPENING MOVE: 'As for the colour, I'd chosen the sage green because it matches the hallway.'",
            note: "'As for…' picks up the bullet's noun and opens its paragraph, making the tick visible without announcing it.",
            domain: "study",
          },
          {
            english: "THE COMPOUND BULLET SPLIT: 'describe the jacket and say when you bought it' becomes one sentence on the jacket, one on the purchase, inside one paragraph.",
            note: "Two sentences, one paragraph, one tick: the compound bullet doubles the work without doubling the map.",
            domain: "study",
          },
          {
            english: "WORKPLACE: 'This note does three things: confirms Friday's date, lists what to bring, and asks for numbers by Wednesday.'",
            note: "Work emails run the same skeleton — a purpose line, one block per item, an action close — which is why the habit outlives the exam.",
            domain: "work",
          },
          {
            english: "EVERYDAY: 'Dear Naini, the parcels arrived — thank you. The recipes are below, the dates that suit me are the ninth and the tenth, and could you bring the big bowl?'",
            note: "Even a three-line message to a relative carries purpose, one beat per item and a forward ask; the skeleton is how people actually write.",
            domain: "everyday",
          },
          {
            english: "DRILL: take any letter you have written and mark its slots — P, B1, B2, B3, C — then count the words per slot against the budget.",
            note: "The slot audit takes two minutes and reveals exactly which paragraph eats the letter.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model: the cat, the trip and the favour",
        reading: {
          text: "A well-organised letter can be checked mechanically, and the examiner's check is mechanical: greeting, purpose, one paragraph per printed bullet in the printed order, close, sign-off. Run that check on the model below. The three bullets — thank, tell, ask — become three paragraphs, in the order printed. The purpose sentence arrives inside the first sentence, not after a warm-up. The close looks forward to the reply the letter needs. And the word count lands near 170 because the plan assigned each slot its share before drafting began. Notice, too, how the 'ask' bullet stays one paragraph: the favour is asked, sweetened and answered for in a single block, because two paragraphs for one bullet would blur the map the examiner is ticking.",
          task: "Read the model, then mark the five slots in the margin — P, B1, B2, B3, C — and give each slot its word count.",
        },
        writing: {
          task: "While you were away for two weeks, your friend Farah looked after your cat, Miso. Write a letter to your friend. In your letter: thank her for taking such good care of Miso, tell her your news from the trip, and ask whether she could help again next month. Write about 150–190 words in an informal register.",
          guide: [
            "I'm just writing to…",
            "She's clearly been… — thank you also for…",
            "The trip itself was…, and the big news is…",
            "And now the cheeky bit: …",
            "Hope you're free — write back soon!",
          ],
          model:
            "Dear Farah,\n\nI'm just writing to say a huge thank you for having Miso while I was away — you're a lifesaver, and the photos you sent made the whole trip better.\n\nShe's clearly been spoiled rotten: she came home, inspected every room and went straight to sleep on her new cushion, so I'd say she misses your sofa already. Thank you for the vet visit too — I've paid you back through the app, but shout if it didn't go through.\n\nThe trip itself was chaos, but the good kind. The conference ran long, I got lost twice, and I somehow came home with a job offer from the Lisbon office — I'll tell you everything over dinner.\n\nAnd now the cheeky bit: I'm in Berlin for three days from the eleventh. Any chance Miso could come to you again? I'd return the favour with that dinner and a proper bottle of wine.\n\nHope you're free — write back soon!\n\nLove,\nPetra",
        },
        listening: {
          script:
            "Build the letter like a builder builds a house — frame first, decoration later. Slot one, the purpose sentence, and here is the strange trick: draft it before anything else, because a letter that knows why it exists organises itself around that sentence. Slot two, the bullet map — count the ticks, label the jobs. Our three jobs are thank, tell, ask, and the order printed is the order written, always. Slot three, the budget — fifteen words of purpose, forty or fifty per bullet, fifteen of close. If the thank-you paragraph eats ninety words, the trip news will starve, and the reader meets an unbalanced letter. Slot four, the close — draft it early, make it look forward. And the final check is purely mechanical: one tick per bullet, printed order. When that check passes, the letter is organised, whatever its content happens to be.",
          task: "Listen and answer: why is the purpose sentence drafted first, and what happens to a letter whose thank-you paragraph eats ninety words?",
        },
        speaking: {
          task:
            "Describe the five-slot skeleton out loud in forty-five seconds, then apply it to a letter you owe someone real: name each slot's content in one phrase.",
          frames: [
            "Every letter opens with…",
            "The bullets become…, in the order…",
            "The close always looks…",
            "The budget splits into…",
          ],
          checklist: [
            "Did I name all five slots?",
            "Did I give the bullet-order rule?",
            "Did I mention the word budget?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["The purpose arrives in sentence one", "'I'm just writing to say a huge thank you' tells the reader why the letter exists before any anecdote — the tick the purpose slot exists for."],
          ["Three bullets, three paragraphs, printed order", "Thank, tell, ask: the reader meets the letter's jobs in the order the task printed them, so every tick is visible."],
          ["Each paragraph opens on its own job", "'The trip itself was chaos' and 'And now the cheeky bit' announce their paragraphs' business in the first three words."],
          ["The close looks forward", "'Hope you're free — write back soon' converts the letter into the next conversation, which is what the close slot is for."],
          ["The budget lands at about 170", "Purpose and close spend around fifteen words each, the three bodies around forty-five each — inside the floor and the ceiling without counting mid-draft."],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The organisation trap catalogue",
        items: [
          {
            wrong: "Dear Farah, How are you? It feels like ages since we last spoke, and I keep meaning to write, life has been so busy lately, hasn't it? Anyway, I'm writing about Miso.",
            right: "Dear Farah, I'm just writing to say a huge thank you for having Miso while I was away.",
            reason: "The warm-up spends the letter's most valuable sentence on material the purpose slot exists to deliver; warmth woven into working sentences costs nothing extra.",
          },
          {
            wrong: "The favour first, since it is urgent — then the thanks, then the trip news, ending with the job offer.",
            right: "Thank, tell, ask — the printed order, whatever the urgency feels like from the writer's chair.",
            reason: "Reordering bullets hides the examiner's tick-list and usually wrong-foots the reader; the printed order is the tested order.",
          },
          {
            wrong: "One 140-word block containing the thanks, the trip, the job offer and the favour.",
            right: "One paragraph per bullet, each opening on its job in three words.",
            reason: "The one-block letter makes the examiner hunt for ticks; paragraphing is the visibility the Coherence descriptor rewards.",
          },
          {
            wrong: "The letter ends on the favour: '…so let me know about the eleventh. Love, Petra.'",
            right: "'Hope you're free — write back soon! Love, Petra.'",
            reason: "A letter that stops on its last bullet has no close; the forward-looking line is a slot with a job, not a decoration.",
          },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Practice planning: the first week in the new job",
        intro: "A fresh three-bullet situation, planned down to the word budget.",
        steps: [
          {
            title: "Step 1: Count, label, budget",
            text: "The situation: you have just finished your first week in a new job in another city, and you are writing to your friend and former colleague Dawn. The bullets: describe your first week in the role, tell her one thing you miss about the old office, ask her advice about something the new city has confused you about. Three bullets, three jobs: describe, tell, ask. The plan writes P15, B1-50, B2-35, B3-50, C15 — the second bullet is naturally the shortest, and the budget admits that rather than pretending all paragraphs are equal.",
            examples: [
              {
                english: "Plan note: 'B2 is one thing I miss — 35 words, one item, no list; the trap is nostalgia sprawl.'",
                note: "Budgets may differ per bullet; what matters is that the totals were decided before drafting.",
              },
            ],
          },
          {
            title: "Step 2: Draft the purpose sentence",
            text: "'Quick one from the new city — week one is done, and I owe you a proper debrief' carries purpose and register together, and the letter's informality is fixed by its ninth word.",
          },
          {
            title: "Step 3: Draft the close before the bodies",
            text: "'Tell me everything about the old place — and yes, I need your tram advice before Friday' does both forward-looking jobs at once: it invites the reply and it parks the advice-ask where Dawn will find it.",
          },
          {
            title: "Step 4: Write the bodies to their budgets and check the map",
            text: "B1 spends its fifty words on the week's shape — the desk, the team, the commute; B2 gives its thirty-five to the biscuit tin, one item as planned; B3 gives its fifty to the tram-ticket confusion, ending on the advice-ask. Final check: three ticks, printed order, close in place — organised before it is polished.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Count the bullets, label each job in one word, hunt the compound bullet, and write the word budget beside the labels."],
          ["While the clock runs", "Purpose sentence first, close drafted early, bodies written to their budgets — and the printed order kept whatever the content's urgency."],
          ["If you are stuck", "Draft the close: knowing where the letter lands usually reveals what the last body paragraph must contain to earn that landing."],
          ["Final minutes", "Run the mechanical check — one tick per bullet, printed order, close present, sign-off matched to greeting — before touching a single word choice."],
        ],
      },
      {
        type: "summary",
        points: [
          "Five slots under every letter: greeting, purpose sentence, one paragraph per bullet, forward close, matched sign-off.",
          "The purpose arrives in the first breath, at whatever distance the register sets.",
          "Bullets are covered in the printed order, one paragraph each — the examiner's tick-list mirrored on the page.",
          "The close looks forward, and the sign-off closes the frame the greeting opened.",
          "The budget — roughly fifteen, forty-five, forty-five, forty-five, fifteen — keeps the letter between 150 and 190 words without mid-draft counting.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on lessons you have already met.",
        items: [
          {
            question: "The paragraph-organisation principle gives each paragraph one job. How does the letter apply it?",
            options: [
              "One printed bullet per paragraph, in the printed order",
              "All bullets in one long paragraph, for momentum",
              "Two bullets per paragraph, alternating with asides",
            ],
            correctIndex: 0,
            explanation:
              "The one-job rule maps directly onto the bullet list: each printed instruction becomes exactly one paragraph, and the map stays visible.",
            from: "Paragraph organisation",
          },
          {
            question: "The analysis habit counts deliverables before planning. A letter prints three bullets, one of which contains two instructions. How many deliverables?",
            options: [
              "Three — the compound bullet is one deliverable done twice",
              "Four — each instruction counts separately",
              "Two — the compound bullet collapses into one",
            ],
            correctIndex: 0,
            explanation:
              "The tick-list follows the printed bullets: a compound bullet is one tick with two sentences of work, not a second paragraph.",
            from: "Analysing question requirements",
          },
          {
            question: "The planning habit budgets words per paragraph before drafting. What is the letter's version of that budget?",
            options: [
              "About fifteen words of purpose, forty to fifty per bullet, fifteen of close",
              "Exactly one hundred words per paragraph, however many there are",
              "No budget — the letter runs to wherever the content ends",
            ],
            correctIndex: 0,
            explanation:
              "The slot budget lands the letter near 170 words, inside the floor and the ceiling, with the spending decided before drafting.",
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
        prompt: "Where must the letter's purpose sentence appear?",
        hints: ["Think about the reader's first question."],
        options: [
          { id: "a", text: "In the final paragraph, where it rounds the letter off." },
          { id: "b", text: "In the first sentence, immediately after the greeting." },
          { id: "c", text: "In the middle of the first body paragraph, after some context." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "In the first sentence, immediately after the greeting.",
          "The reader's first question is why the letter exists, and the purpose sentence answers it in the first breath — in every register, for every purpose.",
          "(a) leaves the reader guessing through the whole letter; (c) delays the purpose behind context that only makes sense once the purpose is known.",
        ),
        tags: ["gwriting", "t1", "organisation", "purpose"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Audit this opening against the skeleton.",
        hints: ["Find the purpose sentence's actual position."],
        passageTitle: "A buried purpose",
        passage:
          "Dear Mireille, I hope you are well and that the allotment survived the August heat. We are fine here, though the children go back to school next week and the house has become a stationery shop. My brother visited at the weekend and stayed rather longer than planned. Anyway, the reason I'm writing is that I'd like to borrow the trailer again for the move on the fourteenth.",
        question: "How many sentences pass before the purpose arrives?",
        options: [
          { id: "a", text: "One — the letter opens on its purpose." },
          { id: "b", text: "Four — the purpose arrives in the fifth sentence, after the warm-up." },
          { id: "c", text: "None — this letter needs no purpose sentence because the reader is a friend." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Four — the purpose arrives in the fifth sentence, after the warm-up.",
          "The warm-up spends four sentences of budget on material the reader did not need first; the purpose slot exists precisely so that never happens.",
          "(a) miscounts the paragraph's structure; (c) invents an exemption — friends need purposes too, and examiners tick friends' letters exactly the same way.",
        ),
        tags: ["gwriting", "t1", "organisation", "warm-up"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. One bullet reads: 'describe the item and say when you bought it.' What does the skeleton do with it?",
        hints: ["The tick-list follows the printed bullets."],
        options: [
          { id: "a", text: "Split it into two paragraphs, one for the item and one for the purchase date." },
          { id: "b", text: "Write two sentences inside one paragraph — one tick, two jobs." },
          { id: "c", text: "Cover whichever half feels easier and fold the other into the close." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Write two sentences inside one paragraph — one tick, two jobs.",
          "The paragraph map mirrors the printed bullets, so a compound bullet doubles the sentences without doubling the paragraphs.",
          "(a) blurs the map by creating a paragraph the tick-list cannot see; (c) halves a deliverable, which Task Achievement counts as a miss.",
        ),
        tags: ["gwriting", "t1", "organisation", "compound-bullet"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the forward-looking close.",
        sentence: "I look ___ to hearing from you.",
        acceptedAnswers: ["forward"],
        hints: [],
        feedback: fb(
          "forward",
          "'I look forward to hearing from you' is the standard forward close at formal distance — it converts the letter into the next exchange.",
          "Words like 'ahead' or 'soon' break the fixed phrase the register expects; the collocation is learned as one block, not assembled.",
        ),
        tags: ["gwriting", "t1", "organisation", "close"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Give the budget arithmetic.",
        question: "A five-slot letter budgets roughly how many words to each slot? Give the five numbers in one line.",
        acceptedAnswers: [
          "fifteen for the purpose, forty-five for each of the three bodies, fifteen for the close",
          "15, 45, 45, 45, 15",
          "about fifteen, then three paragraphs of forty to fifty, then fifteen",
        ],
        keywords: ["fifteen", "forty"],
        hints: [],
        feedback: fb(
          "Roughly fifteen words of purpose, forty-five for each of the three bullet paragraphs, fifteen of close.",
          "The 15-45-45-45-15 split lands the letter near 170 words — inside the floor of 150 and the ceiling of about 190, without counting mid-draft.",
          "Answers that give a single total for the letter describe the outcome, not the budget; the budget is the per-slot spending plan written before drafting.",
        ),
        tags: ["gwriting", "t1", "organisation", "budget"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A draft covers all three bullets accurately, but bullet two comes before bullet one, for better narrative flow. What does the mechanical check say?",
        hints: [],
        options: [
          { id: "a", text: "Pass — all three bullets are covered, so order is a style choice." },
          { id: "b", text: "Fix the order: the examiner ticks against the printed sequence, and the map must mirror it." },
          { id: "c", text: "Fix it only if the letter is formal; informal letters may reorder freely." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Fix the order: the examiner ticks against the printed sequence, and the map must mirror it.",
          "Bullet order is part of visible organisation: the printed sequence is the tick-list's sequence, and mirroring it makes full coverage legible at a glance.",
          "(a) treats a scored convention as a preference; (c) invents a register exemption that no criterion supports.",
        ),
        tags: ["gwriting", "t1", "organisation", "order"],
      }),
    ],
    assignment: {
      title: "The five-slot letter",
      instructions:
        "Write the complete informal letter to Dawn planned in this lesson — your first week in the new job, the one thing you miss about the old office, and your request for tram advice — using the five-slot skeleton: purpose in the first sentence, one paragraph per bullet in the printed order, and a close that looks forward. Land between 150 and 190 words, then mark each slot in the margin with its word count.",
      minWords: 150,
      maxWords: 200,
    },
    homework: [
      "Take any letter you have written for this course and run the slot audit: mark P, B1, B2, B3, C, count the words per slot, and rebalance any paragraph eating more than its budget.",
      "Find a real email you have sent with several requests in it and rewrite it as a five-slot letter, giving every request its own paragraph and adding a forward close.",
    ],
  },
];
