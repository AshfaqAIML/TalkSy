/**
 * IELTS Writing Masterclass — GT Task 1 practice batch D (PROMPT 54
 * question-bank expansion).
 *
 * Ten original General Training Task 1 practice letters at the practice
 * tier: three suggestions (a neglected neighbourhood park, an office
 * canteen and a library talk series), two complaints (a delayed flight
 * with a damaged suitcase and an evening course that was never delivered
 * as promised), two requests (cat-sitting from a close friend and details
 * of a heritage volunteering programme), an invitation to a housewarming,
 * an apology for a missed birthday dinner and an explanation of a late
 * rent payment. Every task carries the full rubric (situation + three
 * bullets), planning notes, a complete model letter, the compact
 * practice-tier analysis and a topic vocabulary bank. All content is
 * original TalkSy practice material written in the style of the test —
 * never official IELTS examination content.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

export const gt1DPracticeTasks: WritingBankTask[] = [
// ---------------------------------------------------------------------------
// 1. Suggestion — improving Riverside Park (semi-formal, environment)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-suggestion-local-park",
  title: "Improving Riverside Park",
  channel: "gt",
  taskType: "task-1",
  family: "suggestion",
  tier: "practice",
  topic: "environment",
  register: "semi-formal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The park in your neighbourhood, Riverside Park, has become increasingly neglected: benches are broken, flowerbeds are overgrown, and litter collects around the pond.\n\nWrite a letter to Ms Okafor, the council officer responsible for parks, whom you met at a residents' meeting. In your letter:\n\n• describe the problems you have noticed\n• suggest two or three improvements\n• explain how residents could help\n\nBegin your letter as follows: Dear Ms Okafor,",
  situation:
    "The candidate lives two streets from Riverside Park and has watched it decline over the past year; the letter goes to the council's parks officer, met once at a residents' meeting and therefore addressed by name and title.",
  bullets: [
    "Describe the problems you have noticed",
    "Suggest two or three improvements",
    "Explain how residents could help",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets in order: the problems noticed, the suggested improvements, and the offer of resident help.",
      keywords: ["broken", "benches", "improvements", "volunteer", "help"],
    },
    {
      key: "purpose-opening",
      description:
        "States the letter's purpose in the opening lines, tied to the earlier residents' meeting.",
      keywords: ["writing", "park", "meeting", "neighbours"],
    },
    {
      key: "specific-improvements",
      description:
        "Names concrete improvements — repaired seating, replanted beds, lidded bins — rather than vague wishes.",
      keywords: ["repair", "seating", "beds", "bins"],
    },
    {
      key: "concrete-offer",
      description:
        "Closes with a genuine offer the officer could act on, such as coordinating a volunteer rota or a fundraising drive.",
      keywords: ["rota", "volunteer", "fundraising", "meeting"],
    },
    {
      key: "semi-formal-register",
      description:
        "Pairs the titled greeting with Yours sincerely and keeps the tone courteous but personal.",
      keywords: ["dear ms", "sincerely", "would", "neighbours"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader, register and purpose (1 minute)",
      notes: [
        "Ms Okafor is known from the residents' meeting, so 'Dear Ms Okafor' pairs with 'Yours sincerely' — personal but respectful.",
        "The purpose is constructive: a resident offering solutions to a council officer, not a customer demanding a refund.",
      ],
    },
    {
      heading: "Step 2 — Bullets, shape and budget (4 minutes)",
      notes: [
        "Bullet 1 lists three visible problems in the order a walker would meet them — benches, beds, pond — with a detail each.",
        "Bullet 2 attaches an action to every problem: repair the seating, replant with low-maintenance shrubs, install lidded bins.",
        "Bullet 3 offers tasks the council could actually delegate: a rota, a fundraising drive, a short meeting.",
        "Four paragraphs, 170–215 words; every improvement must stay small enough for a council budget.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Ms Okafor,\n\nI am writing about Riverside Park, which I raised with you briefly after the residents' meeting in March. Over the past year the park has grown steadily more neglected, and several neighbours have asked me to set down what we have noticed and what might be done.",
      "The decline is easy to see. Three of the benches along the main path have been broken and taped off since spring, the flowerbeds by the Elm Street gate are waist-high in weeds, and litter gathers around the pond faster than the bins are emptied. The young families who used to picnic there on Saturdays have drifted away, and last weekend I noticed that the swings have now been cordoned off as well.",
      "Three improvements would make an immediate difference: repairing or replacing the broken seating, clearing and replanting the beds with low-maintenance shrubs, and installing two lidded bins beside the pond. None of these need be expensive, and together they would signal that the park is still cared for.",
      "If it would help, a small group of us could form a rota to weed the beds monthly, and I would gladly organise a modest fundraising drive towards the benches. Please let me know whether a short meeting would be useful.\n\nYours sincerely,\nDaniel Osei",
    ],
    wordCount: 215,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The titled greeting matches an officer met in person, and the purpose sentence anchors the letter in that shared meeting before announcing the two jobs the letter will do — what has been noticed and what might be done.",
      },
      {
        role: "Bullet 1 — the problems noticed",
        analysis:
          "Three problems are listed in the order a walker would meet them, each with visible evidence — taped-off benches, waist-high weeds, litter outrunning the bins — and the closing image of cordoned-off swings raises the stakes without a word of blame.",
      },
      {
        role: "Bullet 2 — the suggested improvements",
        analysis:
          "One improvement answers each problem already named, and all three are kept deliberately small-scale so the council cannot dismiss them as unaffordable; 'None of these need be expensive' pre-empts the budget objection.",
      },
      {
        role: "Bullet 3 — residents' help, close and sign-off",
        analysis:
          "The offer is stated as tasks — a weeding rota, a fundraising drive — rather than vague goodwill, and the suggestion of a short meeting invites a reply; the Yours sincerely pairing matches the titled greeting.",
      },
    ],
    vocabulary: [
      {
        term: "neglected",
        note: "The neutral word for a space no one looks after — factual rather than angry, which suits an officer you have met.",
      },
      {
        term: "waist-high in weeds",
        note: "A vivid measurement instead of 'very overgrown'; the reader can see the beds without visiting.",
      },
      {
        term: "low-maintenance shrubs",
        note: "A suggestion that answers the council's real worry — who will do the upkeep after the clearing.",
      },
      {
        term: "a rota",
        note: "The administrative word for a taking-turns schedule; it turns vague goodwill into a plan with names on it.",
      },
      {
        term: "a fundraising drive",
        note: "A short, organised push for money; 'drive' promises energy and an end date.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect passive",
        example: "Three of the benches … have been broken and taped off since spring",
        note: "The passive keeps the council's role unspoken while the perfect tense shows the damage is ongoing, not a one-off.",
      },
      {
        feature: "Comparative with than",
        example: "litter gathers around the pond faster than the bins are emptied",
        note: "A than-clause comparing two rates does the work of a whole complaint sentence without pointing a finger.",
      },
      {
        feature: "Semi-modal need",
        example: "None of these need be expensive",
        note: "'Need be' without 'to' is the formal, quietly persuasive form — polite pressure on the budget objection.",
      },
    ],
    coherence:
      "One thread runs through the letter: the park is judged by what a visitor can see. The problems in paragraph two are all visible — taped benches, high weeds, pond litter — the improvements in paragraph three answer those three problems one by one, and the offer in paragraph four takes on the single job (upkeep) that the improvements cannot cover, so each paragraph hands the next its reason to exist.",
    alternativeExpressions: [
      { insteadOf: "grown steadily more neglected", use: "been allowed to deteriorate year on year" },
      { insteadOf: "waist-high in weeds", use: "choked with weeds" },
      { insteadOf: "drifted away", use: "stopped coming / gone elsewhere" },
      { insteadOf: "a modest fundraising drive", use: "a small local appeal for funds" },
    ],
    commonMistakes: [
      {
        wrong: "The park is a disgrace and the council should be ashamed.",
        right: "Over the past year the park has grown steadily more neglected.",
        reason: "Insulting the reader of a suggestion letter guarantees a defensive reply; the facts alone are damaging enough.",
      },
      {
        wrong: "You should fix everything as soon as possible.",
        right:
          "Three improvements would make an immediate difference: repairing the seating, replanting the beds and installing lidded bins.",
        reason:
          "The bullet asks for specific improvements; 'fix everything' is a wish that gives the officer nothing to cost or approve.",
      },
      {
        wrong: "Dear Okafor, / Hi Ms Okafor,",
        right: "Dear Ms Okafor,",
        reason: "Dropping or prefixing the title breaks the semi-formal contract with an officer you know only slightly, by name.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "neglected", partOfSpeech: "adjective", meaning: "Not cared for or maintained over time." },
    { word: "flowerbed", partOfSpeech: "noun", meaning: "A patch of garden soil planted with flowers." },
    { word: "overgrown", partOfSpeech: "adjective", meaning: "Covered in uncontrolled plants or weeds." },
    { word: "rota", partOfSpeech: "noun", meaning: "A list showing who does a task on which day or turn." },
    { word: "fundraising", partOfSpeech: "noun", meaning: "The activity of collecting money for a cause." },
    { word: "cordon off", partOfSpeech: "phrasal verb", meaning: "To block an area off with tape or barriers." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Suggestion — ideas for the staff canteen (formal, workplace)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-suggestion-canteen",
  title: "Ideas for the staff canteen",
  channel: "gt",
  taskType: "task-1",
  family: "suggestion",
  tier: "practice",
  topic: "workplace",
  register: "formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The staff canteen at your workplace serves the same limited menu every week, closes too early for the late shift, and offers almost nothing for vegetarian colleagues.\n\nWrite a letter to the catering manager. In your letter:\n\n• describe the problems with the current service\n• suggest changes to the menu and opening hours\n• explain how these changes would benefit staff\n\nBegin your letter as follows: Dear Sir or Madam,",
  situation:
    "The candidate works an afternoon-to-evening shift at a distribution centre whose canteen rotates five dishes, closes at two o'clock and offers vegetarians only a jacket potato; the letter goes to a catering manager who is not known by name, so the register is formal.",
  bullets: [
    "Describe the problems with the current service",
    "Suggest changes to the menu and opening hours",
    "Explain how these changes would benefit staff",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the current problems, the suggested menu and hours changes, and the benefits for staff.",
      keywords: ["menu", "hours", "vegetarian", "shift", "staff"],
    },
    {
      key: "purpose-opening",
      description:
        "Opens by stating who the writer is, where they work and why the letter is being sent.",
      keywords: ["writing", "canteen", "work", "suggest"],
    },
    {
      key: "mechanised-suggestions",
      description:
        "Attaches a mechanism to each suggestion — a weekly meat-free special, a soup and salad bar, a later counter or pre-ordered rolls.",
      keywords: ["special", "salad", "soup", "counter", "rolls"],
    },
    {
      key: "benefits-case",
      description:
        "Argues the benefits in the employer's own terms — staff staying on site, fairer breaks, less waste.",
      keywords: ["staff", "site", "break", "waste"],
    },
    {
      key: "formal-register",
      description:
        "Uses the formal pairing Dear Sir or Madam with Yours faithfully, with full forms throughout.",
      keywords: ["dear sir", "faithfully", "would", "provide"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "The catering manager is unknown, so 'Dear Sir or Madam' pairs with 'Yours faithfully'; full forms and no contractions.",
        "The writer is an employee making suggestions, not a customer demanding refunds — a compliment to the serving staff first keeps the tone constructive.",
      ],
    },
    {
      heading: "Step 2 — Bullets, mechanism and budget (4 minutes)",
      notes: [
        "Bullet 1 names two problems the manager can verify: a five-dish rotation with one vegetarian option, and a two o'clock close that shuts out the late shift.",
        "Bullet 2 answers each with a mechanism — a weekly meat-free special plus a soup and salad bar, and either a later counter or pre-ordered filled rolls.",
        "Bullet 3 argues benefits the employer cares about: staff staying on site, fairer breaks, and less waste from over-catering.",
        "Four paragraphs, 180–230 words; every suggestion must be cheap enough to appear on next quarter's budget.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sir or Madam,\n\nI am writing to suggest some changes to the staff canteen at the Ashford Distribution Centre, where I have worked the afternoon shift for the past two years. The serving team could not be more helpful; it is the menu and the hours that no longer fit the people who rely on them.",
      "At present the same five hot dishes are rotated every week, and the only vegetarian option on the counter is a jacket potato, so colleagues who do not eat meat are left with sandwiches from the vending machine or an expensive trip off site. The hours are the larger problem: the counter closes at two o'clock, an hour before my shift ends, which means the canteen effectively does not exist for anyone working until three or later.",
      "Two changes would address both issues. A weekly rotating special that is always meat-free, alongside a small soup and salad bar, would give every colleague a proper hot meal; and keeping the hot counter open until three — or at least offering filled rolls that late-shift staff could collect and heat later — would cover the final hour of the working day.",
      "I believe these adjustments would keep more staff on site at lunchtime, make the afternoon break fairer for the late shift, and reduce the food that is cooked for customers who cannot be there to eat it. I would be happy to discuss our shift patterns if that would help.\n\nYours faithfully,\nHelena Marsh",
    ],
    wordCount: 248,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The formal greeting to an unknown manager is followed by two sentences that locate the writer precisely — workplace, shift, length of service — and a compliment to the serving staff that makes clear the target is the system, not the people.",
      },
      {
        role: "Bullet 1 — the problems with the service",
        analysis:
          "Two problems are proved rather than asserted: the five-dish rotation leaves vegetarians a jacket potato or the vending machine, and a two o'clock close writes off the final hour of every late shift. 'Effectively does not exist' is the letter's sharpest line and its calmest.",
      },
      {
        role: "Bullet 2 — menu and hours changes",
        analysis:
          "Each problem receives its own remedy with a mechanism attached: the meat-free special and salad bar answer the menu, and the later counter — with the filled-roll fallback — answers the hours, so the manager is offered a choice even within the suggestion.",
      },
      {
        role: "Bullet 3 — the benefits, close and sign-off",
        analysis:
          "The closing paragraph argues in the employer's currency — staff kept on site, a fairer break, less waste — and the offer to discuss shift patterns hands the manager the next move; the Yours faithfully pairing completes the formal frame.",
      },
    ],
    vocabulary: [
      {
        term: "rotated",
        note: "The canteen manager's own word for a repeating menu cycle; it makes the criticism sound operational rather than personal.",
      },
      {
        term: "a jacket potato",
        note: "The single concrete vegetarian option — naming it proves the point better than any adjective could.",
      },
      {
        term: "off site",
        note: "Two flat words that mean lost trade for the canteen and a shorter break for staff; the argument writes itself.",
      },
      {
        term: "meat-free",
        note: "The modern menu term for dishes without meat — neutral, practical and increasingly expected in workplace catering.",
      },
      {
        term: "filled rolls",
        note: "The low-cost fallback that lets the manager say yes to the hours problem even if she cannot staff a later counter.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect for tenure",
        example: "where I have worked the afternoon shift for the past two years",
        note: "The perfect tense with 'for' establishes the writer's standing before a single complaint is made.",
      },
      {
        feature: "Cleft sentence with it is",
        example: "it is the menu and the hours that no longer fit",
        note: "The it-cleft separates the helpful staff from the failing system — emphasis by grammar, not by insult.",
      },
      {
        feature: "Gerund subjects for proposals",
        example: "keeping the hot counter open until three — or at least offering filled rolls",
        note: "Gerunds turn actions into packages the manager can approve or reject one by one.",
      },
    ],
    coherence:
      "The letter keeps two threads and braids them: the menu thread (five dishes, jacket potato, meat-free special, salad bar) and the hours thread (two o'clock close, one-hour gap, later counter, filled rolls). Paragraph two proves both problems, paragraph three solves both in the same order, and paragraph four converts both solutions into benefits the employer measures — so the reader ends where the writer began, with the shift pattern that frames everything.",
    alternativeExpressions: [
      { insteadOf: "could not be more helpful", use: "are unfailingly friendly and efficient" },
      { insteadOf: "the only vegetarian option", use: "the sole choice for colleagues who avoid meat" },
      { insteadOf: "effectively does not exist", use: "is of no practical use to us" },
      { insteadOf: "I would be happy to discuss", use: "I would be glad to talk through" },
    ],
    commonMistakes: [
      {
        wrong: "The canteen food is terrible and overpriced.",
        right: "The same five hot dishes are rotated every week, and the only vegetarian option is a jacket potato.",
        reason: "Adjectives without evidence read as rudeness; a counted menu is a fact the manager must answer.",
      },
      {
        wrong: "You must stay open later.",
        right: "Keeping the hot counter open until three would cover the final hour of the working day.",
        reason: "A suggestion letter proposes; 'you must' turns it into a demand and loses the formal courtesy the register requires.",
      },
      {
        wrong: "Dear Manager, / Hi there,",
        right: "Dear Sir or Madam,",
        reason: "When no name is known, the fixed formal greeting pairs with 'Yours faithfully'; invented greetings cost marks for format.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "canteen", partOfSpeech: "noun", meaning: "A restaurant provided for staff in a workplace." },
    { word: "shift", partOfSpeech: "noun", meaning: "A scheduled period of work during the day or night." },
    { word: "rotate", partOfSpeech: "verb", meaning: "To repeat items in a fixed cycle, one after another." },
    { word: "vegetarian", partOfSpeech: "adjective", meaning: "Containing no meat or fish." },
    { word: "vending machine", partOfSpeech: "noun", meaning: "A machine that sells snacks and drinks automatically." },
    { word: "adjustment", partOfSpeech: "noun", meaning: "A small change made to improve something." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Complaint — the delayed flight and the damaged suitcase (formal, everyday)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-complaint-flight",
  title: "A damaged suitcase",
  channel: "gt",
  taskType: "task-1",
  family: "complaint",
  tier: "practice",
  topic: "everyday",
  register: "formal",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "On a recent flight home from holiday, your plane was delayed overnight and, when you finally collected your luggage, you discovered that your suitcase had been badly damaged.\n\nWrite a letter to the customer relations department of the airline. In your letter:\n\n• describe the delay and how it affected you\n• explain the damage to your suitcase\n• state what compensation you expect\n\nBegin your letter as follows: Dear Sir or Madam,",
  situation:
    "The candidate's evening flight home from Lisbon was pushed to the following morning with no hotel offered, and the suitcase that finally appeared on the carousel had a cracked shell and a wheel torn away; the letter goes to a faceless customer relations department, so the register is formal.",
  bullets: [
    "Describe the delay and how it affected you",
    "Explain the damage to your suitcase",
    "State what compensation you expect",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the overnight delay and its effects, the damage to the suitcase, and the compensation expected.",
      keywords: ["delay", "suitcase", "damage", "compensation"],
    },
    {
      key: "booking-details",
      description:
        "Quotes the flight number, date and baggage reference so the department can open a file.",
      keywords: ["flight", "reference", "date", "luggage"],
    },
    {
      key: "quantified-demand",
      description:
        "States each claim as a figure with its supporting receipt, not as general displeasure.",
      keywords: ["refund", "receipt", "cost", "policy"],
    },
    {
      key: "firm-courteous",
      description:
        "Stays courteous but firm, setting a reply deadline tied to the airline's own published policy.",
      keywords: ["expect", "reply", "policy", "enclose"],
    },
    {
      key: "formal-register",
      description:
        "Uses Dear Sir or Madam with Yours faithfully and full forms throughout.",
      keywords: ["dear sir", "faithfully", "complain", "would"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Customer relations is a department, not a person: 'Dear Sir or Madam' with 'Yours faithfully', no contractions and no warmth wasted.",
        "The tone is firm but controlled — every sentence must be quotable in the claim file the airline will open.",
      ],
    },
    {
      heading: "Step 2 — Evidence, demand and shape (4 minutes)",
      notes: [
        "Bullet 1 fixes the delay in checkable facts: flight number, times, the missing hotel, the essentials bought at dawn.",
        "Bullet 2 describes the suitcase as an inventory — cracked shell, torn wheel, unusable — plus the reference issued at the baggage desk.",
        "Bullet 3 separates the two claims: £38 of essentials and £140 for the case, each with a receipt, and a fourteen-day reply window.",
        "Four paragraphs, 180–215 words; anger costs marks, precision earns compensation.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sir or Madam,\n\nI am writing to complain about flight AV604 from Lisbon to Manchester on 14 May, which was delayed overnight, and about the condition of my suitcase when it finally arrived.",
      "The flight was due to leave at 21:15, but boarding did not begin until 6:40 the following morning. Beyond the phrase 'operational reasons', no explanation was offered, and although a voucher for a cold drink was handed out, no hotel accommodation was provided, so I spent the night in the terminal and had to buy toiletries and a change of clothes in the morning.",
      "When my luggage finally reached the carousel, the hard shell of my suitcase was cracked down one side and one of the wheels had been torn away, leaving the case impossible to pull. I reported the damage at the baggage desk before leaving the airport and was given reference MR4471. The case cost £140 eighteen months ago; a copy of the receipt is enclosed.",
      "I therefore request reimbursement of the £38 spent on essential items during the delay and compensation for the suitcase in line with your published baggage policy. I look forward to your reply within the fourteen days that policy allows.\n\nYours faithfully,\nPeter Vanek",
    ],
    wordCount: 205,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The formal greeting to a department is followed by one sentence that carries every fact the claim needs — flight number, route, date, the overnight delay, the damaged suitcase — so the file can be opened before paragraph two begins.",
      },
      {
        role: "Bullet 1 — the delay and its effects",
        analysis:
          "The delay is fixed in clock times a computer can verify, from the 21:15 slot to 6:40 boarding; the missing hotel and the dawn purchases are stated flatly, because the facts carry the anger so the writer does not have to.",
      },
      {
        role: "Bullet 2 — the damage to the suitcase",
        analysis:
          "The suitcase is described as an assessor would: cracked shell, wheel torn away, case impossible to pull, reference number in hand — and the £140 price with its enclosed receipt converts damage into a claim.",
      },
      {
        role: "Bullet 3 — the compensation, close and sign-off",
        analysis:
          "The demand separates the two sums — £38 for essentials, the case 'in line with your published baggage policy' — and the fourteen-day deadline quotes the airline's own rule back at it; Yours faithfully closes the formal frame.",
      },
    ],
    vocabulary: [
      {
        term: "operational reasons",
        note: "The airline's stock excuse, quoted in quotation marks — the punctuation quietly shows the writer has not accepted it.",
      },
      {
        term: "the carousel",
        note: "The precise travel word for the luggage belt; small technical nouns signal an experienced traveller who will pursue a claim.",
      },
      {
        term: "reimbursement",
        note: "The formal claim word for money paid back — heavier and more official than 'pay me back'.",
      },
      {
        term: "in line with your published baggage policy",
        note: "The demand is anchored in the airline's own document, which is harder to refuse than any amount the writer might invent.",
      },
      {
        term: "reference MR4471",
        note: "The baggage desk's own number, quoted back; it proves the damage was reported before the writer left the airport.",
      },
    ],
    grammar: [
      {
        feature: "Past perfect passive",
        example: "one of the wheels had been torn away",
        note: "The past perfect shows the damage happened before the case was seen, and the passive leaves blame to be inferred.",
      },
      {
        feature: "Negative subject + passive",
        example: "no hotel accommodation was provided",
        note: "Making 'no hotel' the subject of a passive verb turns a complaint into a plain record of omission.",
      },
      {
        feature: "Request + noun phrase for demands",
        example: "I therefore request reimbursement of the £38",
        note: "'Request' followed by a noun phrase is the formal register's way of demanding without raising its voice.",
      },
    ],
    coherence:
      "The letter is built like a claim file: paragraph one carries the identifiers, paragraph two the delay in verifiable clock times, paragraph three the damage with its reference and receipt, paragraph four the two sums and the deadline. Nothing emotional appears until the structure is complete, and even then the strongest feeling is expressed by inventory — the toiletries, the change of clothes — so every paragraph ends with something the airline can check.",
    alternativeExpressions: [
      { insteadOf: "boarding did not begin until", use: "we were not called to the gate before" },
      { insteadOf: "no hotel accommodation was provided", use: "the airline offered nowhere to sleep" },
      { insteadOf: "impossible to pull", use: "could not be wheeled any further" },
      { insteadOf: "I look forward to your reply", use: "I await your response" },
    ],
    commonMistakes: [
      {
        wrong: "Your airline ruined my holiday and I am disgusted.",
        right: "The flight was due to leave at 21:15, but boarding did not begin until 6:40 the following morning.",
        reason: "Insults invite form letters; times and dates invite compensation — the formal complaint lives on verifiable facts.",
      },
      {
        wrong: "My suitcase is broken, it was expensive.",
        right: "The hard shell of my suitcase was cracked down one side and one of the wheels had been torn away; the case cost £140.",
        reason: "Without a described fault and a stated price, the airline cannot assess the claim, so nothing gets paid.",
      },
      {
        wrong: "I want compensation immediately.",
        right: "I look forward to your reply within the fourteen days that policy allows.",
        reason: "A deadline tied to the airline's own policy is enforceable; a bare demand is only venting.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "delay", partOfSpeech: "noun", meaning: "A period of waiting because something happens late." },
    { word: "terminal", partOfSpeech: "noun", meaning: "The building at an airport where passengers wait." },
    { word: "carousel", partOfSpeech: "noun", meaning: "The moving belt that delivers checked luggage." },
    { word: "voucher", partOfSpeech: "noun", meaning: "A paper or code that can be exchanged for goods." },
    { word: "reimbursement", partOfSpeech: "noun", meaning: "Money paid back for something you spent." },
    { word: "enclose", partOfSpeech: "verb", meaning: "To put a document inside the same envelope or email." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Complaint — not the course I paid for (semi-formal, education)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-complaint-course",
  title: "Not the course I paid for",
  channel: "gt",
  taskType: "task-1",
  family: "complaint",
  tier: "practice",
  topic: "education",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You enrolled in an evening language course at your local college, but you have been placed in a class that is too advanced for you, and the course materials you were promised have never been provided.\n\nWrite a letter to the director of the college, Mr Whitfield. In your letter:\n\n• explain what went wrong with your enrolment\n• describe the problems this has caused you\n• say what you would like the college to do\n\nBegin your letter as follows: Dear Mr Whitfield,",
  situation:
    "The candidate paid in full for a lower-intermediate evening Spanish course but a clerical error placed her in the advanced group, and the coursebook and online audio pack promised in the prospectus have never arrived; the director took her enrolment call in person, so he is addressed by name.",
  bullets: [
    "Explain what went wrong with your enrolment",
    "Describe the problems this has caused you",
    "Say what you would like the college to do",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the enrolment error, the problems it has caused, and the remedy the writer wants.",
      keywords: ["enrol", "error", "group", "materials", "refund"],
    },
    {
      key: "evidence-specifics",
      description:
        "Quotes the course code, the fee paid and the promised materials, so the college can check its own records.",
      keywords: ["course", "code", "fee", "coursebook"],
    },
    {
      key: "clear-remedy",
      description:
        "Asks for one of two clear outcomes — a move to the right group with materials, or a full refund.",
      keywords: ["move", "group", "refund", "materials"],
    },
    {
      key: "constructive-tone",
      description:
        "Keeps the tone constructive by naming a preferred outcome and past goodwill towards the college.",
      keywords: ["prefer", "enjoyed", "option", "autumn"],
    },
    {
      key: "semi-formal-register",
      description:
        "Pairs Dear Mr Whitfield with Yours sincerely — a named director the writer has spoken to by telephone.",
      keywords: ["dear mr", "sincerely", "college", "would"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Mr Whitfield took the enrolment call, so he is known by name: 'Dear Mr Whitfield' pairs with 'Yours sincerely'.",
        "The writer wants to stay at the college, so the voice is a disappointed customer giving the college a chance to put things right.",
      ],
    },
    {
      heading: "Step 2 — Facts, consequences and remedy (4 minutes)",
      notes: [
        "Bullet 1 separates the two failures: the clerical error that changed the group, and the coursebook and audio pack that were never issued.",
        "Bullet 2 shows the consequences — two hours lost each week, no way to prepare at home, and a fee already paid in full.",
        "Bullet 3 offers the college two doors out: a transfer with immediate materials, or a refund so the writer can enrol elsewhere.",
        "Four paragraphs, 170–220 words; every claim needs a number or document behind it.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mr Whitfield,\n\nI am writing about the lower-intermediate Spanish evening course (code LS2) that I enrolled in at Kelsey College last month, because two things promised at enrolment have not been delivered and the class I am attending is not the one I paid for.",
      "When I telephoned the office in September, I was assured a place in the Tuesday group for learners with a basic grasp of the language. Owing to what the office now describes as a clerical error, I was placed instead in the Thursday advanced group, where the tutor conducts the entire lesson in fast, idiomatic Spanish. I spend two hours understanding very little and contributing nothing.",
      "At the same time, the coursebook and the online audio pack that the prospectus promises every learner have never been issued to me, so I cannot even prepare at home. I have paid the full fee of £180 in good faith, and a third of the term has now gone.",
      "I would therefore ask the college either to move me into the correct group for the remaining eight weeks, with the materials supplied immediately, or to refund the fee in full so that I can enrol elsewhere in the autumn. I have enjoyed Kelsey's courses before and would much prefer the first of these options.\n\nYours sincerely,\nAmira Haddad",
    ],
    wordCount: 221,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The titled greeting to a director the writer has spoken to is followed by a purpose sentence that names the course, its code and the double failure — wrong group, missing materials — so the whole letter is summarised before it begins.",
      },
      {
        role: "Bullet 1 — the enrolment error",
        analysis:
          "The error is told as a story with the office's own words — 'a clerical error' — and the price of the mistake is shown from the learner's side: two hours of fast, idiomatic Spanish, understanding little, contributing nothing.",
      },
      {
        role: "Bullet 2 — the problems caused",
        analysis:
          "The second failure is quieter but just as costly: no coursebook and no audio pack means no way to prepare at home, and the paragraph closes with the two facts a director cannot argue with — the full £180 paid and a third of the term gone.",
      },
      {
        role: "Bullet 3 — the remedy, close and sign-off",
        analysis:
          "The remedy is offered as two doors — a transfer with immediate materials, or a full refund — and the stated preference for the first keeps the relationship alive; the Yours sincerely pairing matches the named director.",
      },
    ],
    vocabulary: [
      {
        term: "a clerical error",
        note: "The office's own phrase for the mistake, quoted back without comment — the most courteous way possible of fixing blame where it belongs.",
      },
      {
        term: "a basic grasp of the language",
        note: "The measured way of describing a beginner's level; it makes the advanced placement sound absurd without calling it so.",
      },
      {
        term: "in good faith",
        note: "The legal flavour of the phrase reminds the college that the writer trusted a promise and paid for it.",
      },
      {
        term: "idiomatic Spanish",
        note: "The precise learner's term for the language native speakers actually use — the exact thing a lower-intermediate student cannot follow.",
      },
    ],
    grammar: [
      {
        feature: "Passive with two objects",
        example: "I was assured a place in the Tuesday group",
        note: "The passive reports the promise without naming who made it, keeping the office's dignity intact.",
      },
      {
        feature: "Owing to + free relative",
        example: "Owing to what the office now describes as a clerical error",
        note: "'What the office now describes as' embeds a whole reported clause inside a preposition — blame delivered with precision.",
      },
      {
        feature: "Correlative either/or",
        example: "either to move me into the correct group … or to refund the fee in full",
        note: "The either/or structure makes the remedy look like a fair choice the college controls, not an ultimatum.",
      },
    ],
    coherence:
      "The letter follows the money: the promise is quoted, the fee of £180 is paid, a third of the term has gone, and the remedy is expressed as exactly two ways for the college to repay the debt — in kind with a transfer and materials, or in cash with a refund. Each paragraph adds one layer of cost — the wasted lessons, the evenings that cannot be prepared for, the spent fee — so the final request arrives with its full weight already assembled.",
    alternativeExpressions: [
      { insteadOf: "have not been delivered", use: "have not materialised" },
      { insteadOf: "a basic grasp of the language", use: "a basic command of the language" },
      { insteadOf: "in good faith", use: "on the strength of that promise" },
      { insteadOf: "would much prefer the first of these options", use: "would far rather have the first" },
    ],
    commonMistakes: [
      {
        wrong: "Your college is a total shambles.",
        right: "Owing to what the office now describes as a clerical error, I was placed in the Thursday advanced group.",
        reason: "A semi-formal letter to a named director must attack the error, never the institution, if it wants a remedy.",
      },
      {
        wrong: "The class is too hard for me.",
        right: "The tutor conducts the entire lesson in fast, idiomatic Spanish, and I spend two hours understanding very little.",
        reason: "'Too hard' claims a feeling; a described lesson lets the director see the mismatch and act on it.",
      },
      {
        wrong: "Give me my money back now.",
        right:
          "I would therefore ask the college either to move me into the correct group … or to refund the fee in full.",
        reason:
          "The bullet asks what you would like the college to do; a stated choice with a preference reads as reasonable, a bare demand as rude.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "enrol", partOfSpeech: "verb", meaning: "To officially register for a course." },
    { word: "prospectus", partOfSpeech: "noun", meaning: "A booklet describing a college and its courses." },
    { word: "clerical", partOfSpeech: "adjective", meaning: "Relating to office paperwork and records." },
    { word: "idiomatic", partOfSpeech: "adjective", meaning: "Using expressions natural to native speakers." },
    { word: "coursebook", partOfSpeech: "noun", meaning: "The textbook that accompanies a course." },
    { word: "refund", partOfSpeech: "noun", meaning: "Money returned when a service fails." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Request — could you look after Milly? (informal, everyday)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-request-neighbour-help",
  title: "Could you look after Milly?",
  channel: "gt",
  taskType: "task-1",
  family: "request",
  tier: "practice",
  topic: "everyday",
  register: "informal",
  difficulty: 1,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You are going away for five days to attend a family wedding, and you need someone to look after your cat, Milly, while you are gone.\n\nWrite a letter to your friend and neighbour, Sana. In your letter:\n\n• explain where you are going and when\n• ask her to feed Milly, giving any instructions she needs\n• offer to return the favour\n\nBegin your letter as follows: Dear Sana,",
  situation:
    "The candidate is travelling to a cousin's wedding from Thursday morning to Monday evening and asks Sana, a close friend from next door, to feed Milly the cat; the two chat over the garden fence most weeks, so the letter is warm, chatty and informal.",
  bullets: [
    "Explain where you are going and when",
    "Ask her to feed Milly, giving any instructions she needs",
    "Offer to return the favour",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the trip and its dates, the cat-care request with instructions, and the offer to return the favour.",
      keywords: ["wedding", "feed", "milly", "favour"],
    },
    {
      key: "instructions-specific",
      description:
        "Gives instructions a first-time cat-sitter could follow: food twice a day, water, the vet's number, the key's hiding place.",
      keywords: ["biscuits", "water", "vet", "key"],
    },
    {
      key: "easy-to-say-yes",
      description:
        "Makes saying yes easy — the cat is no trouble, everything is ready and backup help is nearby.",
      keywords: ["trouble", "mum", "ring", "pot"],
    },
    {
      key: "informal-register",
      description:
        "Writes to a close friend: contractions, dashes, a joke, first names and a warm sign-off.",
      keywords: ["could you", "love", "fingers", "thanks"],
    },
    {
      key: "offer-return",
      description:
        "Closes by offering something back — wedding cake and future pet-sitting or plant-watering.",
      keywords: ["cake", "plants", "away", "happy"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Sana is a close friend as well as a neighbour: first names, contractions, in-jokes and an ending that begs a reply.",
        "A request to a friend must be easy to refuse — the letter asks for a favour, never assumes the answer.",
      ],
    },
    {
      heading: "Step 2 — The favour, the instructions, the return (3 minutes)",
      notes: [
        "Bullet 1 is the trip in one sentence: cousin Ravi's wedding, Leeds, Thursday morning to Monday evening.",
        "Bullet 2 gives the whole routine as five instructions: biscuits morning and evening, water, the vet's number, the key under the plant pot.",
        "Bullet 3 pays the favour forward: cake from the wedding, plant-watering and pet-sitting whenever Sana needs them.",
        "Four short paragraphs, 160–195 words; chatty does not mean careless.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sana,\n\nI hope you're well — and I hope the balcony tomatoes survived that storm last week! I'm writing to ask an enormous favour: could you look after Milly while I'm away?",
      "It's my cousin Ravi's wedding up in Leeds, and I'll be off from Thursday morning until Monday evening — four nights in total. Milly really is no trouble: she needs a scoop of biscuits in the morning and another in the evening, and her water bowl topped up whenever you're there. I'd be so grateful if you could pop in twice a day. The vet's number is on the fridge, and my mum lives ten minutes away if anything at all worries you.",
      "The spare key is under the blue plant pot by the back door, and honestly, feel free to raid the biscuit tin while you're in there. I'll bring you back a slice of wedding cake, and of course I'll happily water your plants or feed Bingo whenever you're next away — you only have to say the word.",
      "Give me a ring if that's all okay — Milly will miss you even if she pretends not to. Fingers crossed!\n\nLove,\nJosh",
    ],
    wordCount: 193,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the favour",
        analysis:
          "The letter opens with a friendly aside about the storm — proof the friendship is alive — before the request lands in its clearest form: a question, not an instruction, which is how a favour between friends is asked.",
      },
      {
        role: "Bullet 1 — the trip, and Bullet 2 — the instructions",
        analysis:
          "The trip is fixed in one sentence (Ravi's wedding, Leeds, Thursday to Monday), and the cat's routine arrives in five short instructions a first-time sitter could follow, ending with the vet's number and a nearby mum as safety nets.",
      },
      {
        role: "Bullet 3 — returning the favour",
        analysis:
          "The thank-you is paid in the friendship's own currency: cake from the wedding, plant-watering, dog-sitting 'whenever you're next away', and the running joke about the biscuit tin keeps the ledger light.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "The close asks for a reply in the friendliest possible way — a ring, a joke about Milly's pride, crossed fingers — and the single-word 'Love' sign-off is the informal register at its most natural.",
      },
    ],
    vocabulary: [
      {
        term: "an enormous favour",
        note: "Naming the size of the favour is itself polite — it warns the friend the request is real while the joke that follows softens it.",
      },
      {
        term: "a scoop of biscuits",
        note: "The exact measure a sitter needs; informal letters still work best when the practical parts are precise.",
      },
      {
        term: "pop in twice a day",
        note: "The phrasal verb 'pop in' makes the task sound as small as possible — the kindest way to ask.",
      },
      {
        term: "raid the biscuit tin",
        note: "A standing joke in an instruction: the letter trusts the friend with the house and jokes about it in the same breath.",
      },
    ],
    grammar: [
      {
        feature: "Second conditional",
        example: "I'd be so grateful if you could pop in twice a day",
        note: "'Would … if you could' asks without pressure, leaving the friend a graceful way to say no.",
      },
      {
        feature: "Whenever as a free relative",
        example: "whenever you're next away",
        note: "'Whenever' turns a single offer into a standing one — grammar doing the work of loyalty.",
      },
      {
        feature: "Softened imperative",
        example: "Give me a ring if that's all okay",
        note: "The bare imperative is softened by the attached condition — instructions between friends must not sound like orders.",
      },
    ],
    coherence:
      "The letter is held together by the twice-a-day visit: paragraph two trains the sitter for it, paragraph three hands over the key and jokes about the rewards of the visit, and paragraph four asks for the phone call that confirms the visits can happen. Even the digression about the storm returns to the theme of care — the writer worries about the friend's tomatoes, the friend is asked to worry about the cat — so the favour arrives inside a friendship rather than out of the blue.",
    alternativeExpressions: [
      { insteadOf: "an enormous favour", use: "a really big ask" },
      { insteadOf: "she needs a scoop of biscuits", use: "she gets a scoop of dried food" },
      { insteadOf: "pop in twice a day", use: "call round morning and evening" },
      { insteadOf: "you only have to say the word", use: "just let me know" },
    ],
    commonMistakes: [
      {
        wrong: "You must feed Milly from Thursday to Monday.",
        right: "I'd be so grateful if you could pop in twice a day.",
        reason: "A friend is asked, not instructed; 'must' turns a favour into a duty and the register formal.",
      },
      {
        wrong: "She eats some food and you should give her water.",
        right: "She needs a scoop of biscuits in the morning and another in the evening, and her water bowl topped up.",
        reason: "Vague instructions saddle the friend with decisions; a sitter needs times and amounts.",
      },
      {
        wrong: "Yours sincerely, Josh",
        right: "Love, Josh",
        reason: "'Yours sincerely' with a first-name greeting mixes registers; an informal letter ends with a warm, unstiff sign-off.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "favour", partOfSpeech: "noun", meaning: "A kind act done for someone, free of charge." },
    { word: "sitter", partOfSpeech: "noun", meaning: "Someone who looks after a pet or child briefly." },
    { word: "vet", partOfSpeech: "noun", meaning: "An animal doctor." },
    { word: "top up", partOfSpeech: "phrasal verb", meaning: "To refill something part-way empty." },
    { word: "raid", partOfSpeech: "verb", meaning: "To take food from somewhere in a hungry, cheerful way." },
    { word: "fingers crossed", partOfSpeech: "idiom", meaning: "Hoping strongly for a yes or for good luck." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Request — the summer volunteer programme (formal, society)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-request-information",
  title: "The summer volunteer programme",
  channel: "gt",
  taskType: "task-1",
  family: "request",
  tier: "practice",
  topic: "society",
  register: "formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You have seen a notice inviting volunteers to help at your town's museum this summer, but it gave almost no details about what the work would involve.\n\nWrite a letter to the museum's volunteer coordinator. In your letter:\n\n• explain why you are interested in volunteering\n• ask about the tasks, training and time commitment involved\n• inquire about how to apply\n\nBegin your letter as follows: Dear Sir or Madam,",
  situation:
    "The candidate, a recently retired bank clerk and long-standing member of the local history society, wants to spend summer days at the town museum, but the poster said nothing about duties, training or hours; the coordinator is not known by name, so the register is formal.",
  bullets: [
    "Explain why you are interested in volunteering",
    "Ask about the tasks, training and time commitment involved",
    "Inquire about how to apply",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the motivation, the questions about tasks, training and hours, and the application process.",
      keywords: ["volunteer", "training", "hours", "apply"],
    },
    {
      key: "credible-introduction",
      description:
        "Introduces the writer with evidence — retirement, the history society, exhibition stewarding.",
      keywords: ["retired", "history", "society", "exhibition"],
    },
    {
      key: "specific-questions",
      description:
        "Asks precise, answerable questions rather than a vague request for more information.",
      keywords: ["duties", "steward", "front desk", "week"],
    },
    {
      key: "availability-stated",
      description:
        "States availability in concrete terms — two full days or their equivalent, from June to August.",
      keywords: ["two", "days", "june", "august"],
    },
    {
      key: "formal-register",
      description:
        "Uses Dear Sir or Madam with Yours faithfully, full forms and courteous indirect questions.",
      keywords: ["dear sir", "faithfully", "grateful", "look forward"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "The volunteer coordinator is unknown: 'Dear Sir or Madam' with 'Yours faithfully', and every question asked indirectly.",
        "The writer is offering time, not asking for a job — the letter sells reliability without ever bragging.",
      ],
    },
    {
      heading: "Step 2 — Credentials, questions, close (4 minutes)",
      notes: [
        "Paragraph 2 gives the credentials in one breath: thirty years with a bank, the history society since 1998, stewarding at its annual exhibition.",
        "Paragraph 3 turns the poster's silence into three answerable questions — duties, training, weekly hours — then states availability before the coordinator has to ask.",
        "The close asks for the application route and references, the two things the poster left out.",
        "Four paragraphs, 180–200 words; every question should be one the coordinator can answer in a single reply.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sir or Madam,\n\nI am writing to ask for further details about the summer volunteering programme advertised on the notice board outside the museum, as the poster gave very little information about what the work would involve.",
      "By way of introduction, I retired last year after thirty years with a high-street bank, and I have been a member of the local history society since I moved to the town in 1998. I enjoy meeting the public, and I have helped to steward the society's annual exhibition for the last six years, so I would be glad to offer my time to the museum over the summer.",
      "Before I commit, I would be grateful if you could tell me what duties volunteers are given — stewarding the galleries, helping with school visits, or working at the front desk, for instance — whether any training is provided, and how many hours a week you would expect. I could offer two full days, or their equivalent, each week from June to August.",
      "Could you also let me know how to apply formally, and whether references are required? I look forward to hearing from you.\n\nYours faithfully,\nMargaret Cullen",
    ],
    wordCount: 194,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The formal greeting to an unnamed coordinator is followed by a purpose sentence that names exactly where the notice was seen and what it failed to say, so the questions that follow have a visible reason.",
      },
      {
        role: "Bullet 1 — why the writer is interested",
        analysis:
          "The self-introduction is written like a reference: thirty years with a bank, the history society since 1998, six years stewarding the annual exhibition — reliability proven, not claimed, in three sentences.",
      },
      {
        role: "Bullet 2 — tasks, training and time",
        analysis:
          "The three questions arrive in a single sentence — duties, training, weekly hours — with the duties guessed in a list that shows the writer knows what museum volunteering is; availability is then offered before the coordinator can ask.",
      },
      {
        role: "Bullet 3 — how to apply, close and sign-off",
        analysis:
          "The final questions cover the application route and references, the two facts every poster omits, and 'I look forward to hearing from you' closes the formal frame politely without pressing.",
      },
    ],
    vocabulary: [
      {
        term: "By way of introduction",
        note: "The formal frame that says 'here is who I am' without a line of bragging — the phrase itself keeps the tone modest.",
      },
      {
        term: "to steward",
        note: "The museum word for looking after a room and its visitors; using it shows the writer belongs in the building.",
      },
      {
        term: "or their equivalent",
        note: "Three words that offer flexibility — two full days, or the same hours split differently — and make the writer easy to place.",
      },
      {
        term: "commit",
        note: "The verb promises seriousness: the writer will not vanish halfway through the summer, which is a coordinator's first fear.",
      },
    ],
    grammar: [
      {
        feature: "Reduced passive participle",
        example: "the summer volunteering programme advertised on the notice board",
        note: "The participle 'advertised' replaces a whole relative clause — compact and formal in one move.",
      },
      {
        feature: "Indirect questions",
        example: "I would be grateful if you could tell me what duties volunteers are given",
        note: "Questions folded into a request stay polite where direct questions would sound like an interview.",
      },
      {
        feature: "Whether-clause",
        example: "whether references are required",
        note: "'Whether' presents the alternatives without assuming an answer — the grammar of courtesy.",
      },
    ],
    coherence:
      "The letter is ordered like an application: who is asking, why they can be trusted, what they need to know, what happens next. The credentials in paragraph two — the bank, the history society, the exhibition stewarding — are all evidence for the unstated claim 'I will be reliable', and the three questions in paragraph three map one-to-one onto the poster's three silences — duties, training, hours — so by the final request for an application form the coordinator already has every reason to send one.",
    alternativeExpressions: [
      { insteadOf: "By way of introduction", use: "Let me briefly introduce myself" },
      { insteadOf: "I enjoy meeting the public", use: "I like dealing with visitors" },
      { insteadOf: "Before I commit", use: "Before I make a firm promise" },
      { insteadOf: "I look forward to hearing from you", use: "I shall look forward to your reply" },
    ],
    commonMistakes: [
      {
        wrong: "I want to volunteer, send me the details.",
        right: "I am writing to ask for further details about the summer volunteering programme advertised on the notice board.",
        reason: "A demand for information reads as laziness; the formal register states the source and the gap politely.",
      },
      {
        wrong: "Tell me what the job is and how much it pays.",
        right:
          "I would be grateful if you could tell me what duties volunteers are given and how many hours a week you would expect.",
        reason:
          "Volunteering is unpaid, and direct interrogatives sound like an interview; indirect questions keep the formal courtesy.",
      },
      {
        wrong: "I can work whenever, just let me know.",
        right: "I could offer two full days, or their equivalent, each week from June to August.",
        reason: "Open-ended availability creates work for the coordinator; a stated window makes the writer easy to place.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "volunteer", partOfSpeech: "noun", meaning: "A person who works without payment." },
    { word: "coordinator", partOfSpeech: "noun", meaning: "The person who organises a programme or team." },
    { word: "steward", partOfSpeech: "verb", meaning: "To supervise a room or event for visitors." },
    { word: "commit", partOfSpeech: "verb", meaning: "To promise time or loyalty to something." },
    { word: "reference", partOfSpeech: "noun", meaning: "A letter vouching for a person's character." },
    { word: "exhibition", partOfSpeech: "noun", meaning: "A public display of objects or works." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Invitation — a housewarming party (informal, everyday)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-invitation-celebration",
  title: "A housewarming party",
  channel: "gt",
  taskType: "task-1",
  family: "invitation",
  tier: "practice",
  topic: "everyday",
  register: "informal",
  difficulty: 1,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You have just moved into your first flat, and you want to celebrate by inviting a close friend who lives in another city to your housewarming party.\n\nWrite a letter to your friend, Tomasz. In your letter:\n\n• describe your new flat and how you feel about it\n• invite him to the party, with the details\n• tell him what to bring and how to get there\n\nBegin your letter as follows: Dear Tomasz,",
  situation:
    "The candidate has bought a small top-floor flat with a roof terrace after three years of saving and is throwing a first-ever housewarming party; the guest is a university friend two hours away by train, so the letter is enthusiastic, jokey and informal.",
  bullets: [
    "Describe your new flat and how you feel about it",
    "Invite him to the party, with the details",
    "Tell him what to bring and how to get there",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the flat and the writer's pride in it, the invitation with date and time, and the practicalities of what to bring and the journey.",
      keywords: ["flat", "party", "saturday", "bring"],
    },
    {
      key: "details-specific",
      description:
        "Gives party details a guest can act on — the date, the start time, the offer of a tour and somewhere to sleep.",
      keywords: ["21st", "seven", "tour", "mattress"],
    },
    {
      key: "practicalities",
      description:
        "Handles travel and luggage: trains into the city, the walk or bus from the station, the speaker and a bottle.",
      keywords: ["train", "station", "speaker", "bottle"],
    },
    {
      key: "informal-register",
      description:
        "Writes to a best friend: contractions, exclamations, jokes and a warm spoken-style sign-off.",
      keywords: ["guess", "can't", "see you", "text"],
    },
    {
      key: "warm-personal",
      description:
        "Keeps the shared history in view — the playlist joke and the promised tour make it personal, not a flyer.",
      keywords: ["playlist", "speaker", "tour", "believe"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Tomasz is an old university friend: contractions, exclamation marks, one running joke — and a sign-off that still sounds like speech.",
        "An invitation should sound like the party itself: bright, specific and impossible to refuse without feeling rude.",
      ],
    },
    {
      heading: "Step 2 — The flat, the party, the plan (3 minutes)",
      notes: [
        "Bullet 1 sells the flat in three details — top floor, two bedrooms, roof terrace — plus one honest confession about the kitchen.",
        "Bullet 2 fixes the facts a guest needs: Saturday the 21st, from seven, with a private tour from six.",
        "Bullet 3 answers the guest's real questions: bring a speaker and a bottle, stay on the blow-up mattress, trains every half hour.",
        "Four paragraphs, 160–200 words; end with a text-me prompt so the reply is easy.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Tomasz,\n\nGuess what — after three years of saving every penny, I've finally got the keys to a flat of my very own! I'm writing to invite you to the housewarming, because it honestly wouldn't be the same without you.",
      "It's a top-floor place on Denmark Road with two bedrooms and, best of all, a little roof terrace looking out over the church spires. The kitchen is still stuck somewhere in the 1980s and the shower takes ten minutes to warm up, but it's mine, and some mornings I still can't quite believe it.",
      "The party is on Saturday the 21st, from seven in the evening until the neighbours complain. Come any time from six if you want the grand tour first. You know what you're like with playlists, so please bring your speaker — and a bottle of something fizzy. There's a blow-up mattress with your name on it, so there'll be no question of you catching the last train home.",
      "Trains from your side run into Temple Meads every half hour, and it's a ten-minute walk or a short bus ride from there. Just text me when you're setting off.\n\nSee you soon,\nKasia",
    ],
    wordCount: 195,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the news",
        analysis:
          "The letter opens with the shout before the invitation — three years of saving, keys at last — so the invitation that follows feels like the natural overflow of the news, and 'it wouldn't be the same without you' makes refusal almost impossible.",
      },
      {
        role: "Bullet 1 — the flat and the feeling",
        analysis:
          "The flat is sold in three details — top floor, two bedrooms, roof terrace over the spires — and then deliberately undercut by the 1980s kitchen and the slow shower, because honest flaws make the pride believable.",
      },
      {
        role: "Bullet 2 — the invitation and details",
        analysis:
          "The party facts are fixed in one sentence (Saturday the 21st, from seven, until the neighbours complain), and the practicalities follow — tour from six, speaker, bottle, mattress — so the guest knows the party and the whole weekend in a single paragraph.",
      },
      {
        role: "Bullet 3 — what to bring and how to get there, close",
        analysis:
          "Travel is solved in two sentences — trains every half hour, a ten-minute walk or a short bus ride — and the request to text when setting off ends the letter with a next action, the informal equivalent of 'I look forward to hearing from you'.",
      },
    ],
    vocabulary: [
      {
        term: "saved every penny",
        note: "The idiom makes three years of discipline visible in three words — the flat is earned, not given.",
      },
      {
        term: "stuck somewhere in the 1980s",
        note: "A joke with a date inside it: the self-mockery keeps the bragging about the terrace harmless.",
      },
      {
        term: "the grand tour",
        note: "An ironic title for a two-bedroom flat; the mock-grandeur is exactly the voice of old friends.",
      },
      {
        term: "with your name on it",
        note: "The idiom turns a blow-up mattress into a welcome — the strongest invitation a letter can make.",
      },
    ],
    grammar: [
      {
        feature: "Fronted prepositional phrase",
        example: "after three years of saving every penny, I've finally got the keys",
        note: "The delay before the subject builds the drumroll the news deserves.",
      },
      {
        feature: "No question of + gerund",
        example: "there'll be no question of you catching the last train home",
        note: "The phrase rules out an option entirely — hospitality expressed as grammar.",
      },
      {
        feature: "Until-clause as a joke",
        example: "from seven in the evening until the neighbours complain",
        note: "An ordinary time clause delivers the punchline; informal letters let humour live inside structure.",
      },
    ],
    coherence:
      "The letter moves from possession to party to plan: the keys in paragraph one earn the flat described in paragraph two, the flat hosts the party fixed in paragraph three, and the party's last problem — the guest's journey home — is solved in paragraph four alongside the journey there. Every practical fact (date, time, mattress, trains, bus) is attached to a feeling that justifies it, so the logistics never read as a timetable.",
    alternativeExpressions: [
      { insteadOf: "a flat of my very own", use: "a place that's finally mine" },
      { insteadOf: "looking out over the church spires", use: "with a view across the church towers" },
      { insteadOf: "a bottle of something fizzy", use: "a bottle of bubbles" },
      { insteadOf: "Just text me when you're setting off", use: "Drop me a message before you leave" },
    ],
    commonMistakes: [
      {
        wrong: "You are invited to my housewarming party on the 21st.",
        right: "I'm writing to invite you to the housewarming, because it honestly wouldn't be the same without you.",
        reason:
          "Passive party-formula language is colder than the informal register allows; friends are invited in their friend's own voice.",
      },
      {
        wrong: "The party starts at 7 pm and ends at 11 pm.",
        right: "The party is on Saturday the 21st, from seven in the evening until the neighbours complain.",
        reason: "A timesheet is accurate but joyless; the informal register prefers details with a joke attached.",
      },
      {
        wrong: "Please confirm your attendance.",
        right: "Just text me when you're setting off.",
        reason: "Formal admin phrases break the friendly tone; the reply is invited, never demanded.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "housewarming", partOfSpeech: "noun", meaning: "A party held to celebrate moving into a new home." },
    { word: "terrace", partOfSpeech: "noun", meaning: "A flat outdoor area, often on a roof." },
    { word: "spire", partOfSpeech: "noun", meaning: "A pointed church tower." },
    { word: "fizzy", partOfSpeech: "adjective", meaning: "Full of bubbles, like sparkling drinks." },
    { word: "blow-up mattress", partOfSpeech: "noun", meaning: "An inflatable bed for guests." },
    { word: "grand tour", partOfSpeech: "noun", meaning: "A joking name for a guided look around a home." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Apology — I can't come after all (informal, everyday)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-apology-party",
  title: "I can't come after all",
  channel: "gt",
  taskType: "task-1",
  family: "apology",
  tier: "practice",
  topic: "everyday",
  register: "informal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You have just discovered that you cannot attend your close friend's birthday dinner next weekend because of an unexpected and unavoidable work commitment.\n\nWrite a letter to your friend, Beatriz. In your letter:\n\n• apologise and explain why you cannot come\n• say how you feel about missing the celebration\n• suggest how you could make it up to her\n\nBegin your letter as follows: Dear Beatriz,",
  situation:
    "The candidate discovers that a major client has moved a contract presentation to the Monday morning of a weekend trip abroad, colliding with a best friend's thirtieth-birthday dinner; the letter to a close friend is openly disappointed, apologetic and informal.",
  bullets: [
    "Apologise and explain why you cannot come",
    "Say how you feel about missing the celebration",
    "Suggest how you could make it up to her",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the apology with its reason, the writer's genuine disappointment, and a concrete way to make up for it.",
      keywords: ["sorry", "presentation", "dinner", "make"],
    },
    {
      key: "reason-genuine",
      description:
        "Explains the work collision honestly, including that the writer fought it and lost.",
      keywords: ["client", "rotterdam", "flights", "director"],
    },
    {
      key: "feelings-honest",
      description:
        "Names the disappointment in a friend's own words — gutted, the empty chair, the present already wrapped.",
      keywords: ["gutted", "thirtieth", "card", "chair"],
    },
    {
      key: "remedy-concrete",
      description:
        "Offers a make-up plan with a name, a date and an action — dinner booked tonight.",
      keywords: ["dinner", "basque", "table", "book"],
    },
    {
      key: "informal-register",
      description:
        "Writes to a best friend: contractions, dashes, direct questions and a warm sign-off.",
      keywords: ["i'm", "love", "say yes", "sorry"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Beatriz is a best friend, so the apology sounds like speech: contractions, dashes, one question that demands a reply.",
        "The reason must be real and unbeatable — a client presentation moved by the director — or the apology reads as an excuse.",
      ],
    },
    {
      heading: "Step 2 — Apology, feeling, repair (3 minutes)",
      notes: [
        "Paragraph 1 apologises before it explains; the reason follows, never leads.",
        "Paragraph 2 shows the collision from the inside: the director's decision, the pre-booked flights, the fight the writer lost.",
        "Paragraph 3 makes the disappointment physical — the wrapped present on the desk, the empty chair — and paragraph 4 repairs it with a named dinner on a named weekend.",
        "Four paragraphs, 170–200 words; an apology letter must end looking forward, not backward.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Beatriz,\n\nI'm so sorry to do this by letter — I'd rather have rung, but I wanted you to have it in writing before you do the shopping: I can't come to your birthday dinner on Saturday after all.",
      "You know the client I've been working with since January? They've moved their contract presentation to Monday morning, and it has to be me who flies to their Rotterdam office this weekend — my director made it clear before I got a word in, and the flights were booked while I was still arguing. I fought it as hard as I could, honestly.",
      "I'm gutted, properly gutted. It's your thirtieth, I've been looking forward to it for weeks, and I hate the thought of you raising a glass with an empty chair where I should be sitting. Your card and present are already wrapped on my desk, so you'll just have to open them a week late.",
      "Let me make it up to you: dinner at that Basque place you keep mentioning, on me, the weekend after you're back — and I'll book the table tonight. Say yes?\n\nAll my love,\nNoor",
    ],
    wordCount: 189,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting, apology and reason",
        analysis:
          "The apology arrives before the reason — 'I'm so sorry' opens the letter — and the medium itself is explained and excused, with the practical kindness of telling a host before she shops for the dinner she is cooking.",
      },
      {
        role: "Bullet 1 — why the writer cannot come",
        analysis:
          "The work collision is told as a small drama: the January client, the Monday presentation, the director's decision, flights booked mid-argument — and the closing 'I fought it as hard as I could, honestly' answers the question every reader is already asking.",
      },
      {
        role: "Bullet 2 — how the writer feels",
        analysis:
          "The disappointment is doubled ('gutted, properly gutted') and then made physical: the thirtieth birthday, the weeks of looking forward, the empty chair, the wrapped present on the desk — feelings carried by objects rather than adjectives.",
      },
      {
        role: "Bullet 3 — the make-up plan, close and sign-off",
        analysis:
          "The repair is concrete to the point of being bookable — a named restaurant, a named weekend, the table promised 'tonight' — and the two-word question 'Say yes?' hands the final word, warmly, to the friend.",
      },
    ],
    vocabulary: [
      {
        term: "I'd rather have rung",
        note: "Admitting the letter is second-best shows the writer knows how big the news is — courtesy by confession.",
      },
      {
        term: "gutted, properly gutted",
        note: "The repetition turns up the volume of the informal register; 'properly' is the intensifier friends actually use.",
      },
      {
        term: "an empty chair where I should be sitting",
        note: "The picture does the apologising: the writer sees the dinner table from the friend's side of it.",
      },
      {
        term: "on me",
        note: "Two words that promise to pay; the informal register settles the bill before it arrives.",
      },
    ],
    grammar: [
      {
        feature: "Would rather + perfect infinitive",
        example: "I'd rather have rung",
        note: "The perfect infinitive after 'rather' expresses regret about a past choice — compressed apology grammar.",
      },
      {
        feature: "It-cleft with relative clause",
        example: "it has to be me who flies to their Rotterdam office",
        note: "The cleft stresses that no substitute exists, which is what makes the absence forgivable.",
      },
      {
        feature: "Make it clear + reported clause",
        example: "my director made it clear before I got a word in",
        note: "The reported clause shows the decision was closed before the writer could object — blame placed without a complaint.",
      },
    ],
    coherence:
      "The letter is sequenced like a good apology: the 'sorry' before the reason, the reason before the feeling, the feeling before the repair. Paragraph two answers 'why couldn't you refuse?', paragraph three answers 'do you even care?', and paragraph four answers 'what now?' — so by the time the Basque restaurant is named, every question the friend might ask on reading has already been answered inside the letter.",
    alternativeExpressions: [
      { insteadOf: "I can't come after all", use: "I won't be able to make it" },
      { insteadOf: "I fought it as hard as I could", use: "I did everything I could to get out of it" },
      { insteadOf: "I'm gutted", use: "I'm devastated / really upset" },
      { insteadOf: "make it up to you", use: "treat you properly to make up for it" },
    ],
    commonMistakes: [
      {
        wrong: "Sorry, something came up.",
        right: "They've moved their contract presentation to Monday morning, and my director made it clear before I got a word in.",
        reason: "A vague reason reads as a fob-off; the apology only works if the excuse is visibly unbeatable.",
      },
      {
        wrong: "I'm really busy that weekend.",
        right: "It's your thirtieth, I've been looking forward to it for weeks, and I hate the thought of you raising a glass with an empty chair.",
        reason: "Stress on being busy makes the party sound trivial; the letter must show the celebration mattered.",
      },
      {
        wrong: "Maybe we can meet some other time.",
        right: "Dinner at that Basque place you keep mentioning, on me, the weekend after you're back — and I'll book the table tonight.",
        reason: "'Some other time' postpones the repair forever; a named plan with a booked table is a real apology.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "apologise", partOfSpeech: "verb", meaning: "To say sorry for something done wrong." },
    { word: "commitment", partOfSpeech: "noun", meaning: "A duty or arrangement that cannot easily be dropped." },
    { word: "gutted", partOfSpeech: "adjective", meaning: "Deeply disappointed (informal British English)." },
    { word: "make it up to someone", partOfSpeech: "idiom", meaning: "To do something kind to balance a disappointment." },
    { word: "presentation", partOfSpeech: "noun", meaning: "A formal talk to a client or audience." },
    { word: "wrapped", partOfSpeech: "adjective", meaning: "Covered in decorative paper as a gift." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Explanation — a late rent payment (semi-formal, everyday)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-explanation-tenant",
  title: "A late rent payment",
  channel: "gt",
  taskType: "task-1",
  family: "explanation",
  tier: "practice",
  topic: "everyday",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You always pay your rent on the first of the month, but a problem with your bank means that this month's payment will arrive several days late.\n\nWrite a letter to your landlord, Mrs Ballantyne. In your letter:\n\n• explain what has happened with your bank\n• say exactly when the payment will arrive\n• ask how she would like to handle any late fee\n\nBegin your letter as follows: Dear Mrs Ballantyne,",
  situation:
    "The candidate has rented the same flat from Mrs Ballantyne for four years without a late payment, but the bank has frozen the account while it investigates two fraudulent card charges; the letter gives early notice, a firm payment date and a semi-formal voice.",
  bullets: [
    "Explain what has happened with your bank",
    "Say exactly when the payment will arrive",
    "Ask how she would like to handle any late fee",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the bank's fraud freeze, the exact payment date, and the question of any late fee.",
      keywords: ["bank", "freeze", "rent", "fee"],
    },
    {
      key: "early-notice",
      description:
        "Writes before the payment date passes, not after it — the first sign of respect shown to the landlord.",
      keywords: ["before", "let you know", "first", "month"],
    },
    {
      key: "specific-date",
      description:
        "Names the exact amount, the source of the money and the date the payment will arrive.",
      keywords: ["675", "friday", "savings", "transfer"],
    },
    {
      key: "responsible-tone",
      description:
        "Takes control of the problem: an expedited case, a savings transfer and an offer to cover any inconvenience.",
      keywords: ["expedite", "savings", "cover", "temporary"],
    },
    {
      key: "semi-formal-register",
      description:
        "Pairs Dear Mrs Ballantyne with Yours sincerely — a landlord known personally, courteous but not stiff.",
      keywords: ["dear mrs", "sincerely", "sorry", "please"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Mrs Ballantyne is known personally after four years: title and surname, 'Yours sincerely', warm but organised.",
        "The letter's one job is trust: every sentence must show the problem is temporary, contained and already being solved.",
      ],
    },
    {
      heading: "Step 2 — Facts, date, fee (4 minutes)",
      notes: [
        "Paragraph 2 gives the freeze in bank language — two fraudulent charges, £310, a five-day review — and one action already taken: asking for the case to be expedited.",
        "Paragraph 3 answers the landlord's real question before she can ask it: the full £675 arrives from savings on Friday the 9th.",
        "The fee question is raised by the writer first, with two ways to settle it offered — never assumed away.",
        "Four paragraphs, 170–205 words; a payment letter must be built from dates, figures and actions.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mrs Ballantyne,\n\nI am writing to let you know, before the date rather than after it, that this month's rent will reach you a few days late — the first time in four years that this has been necessary.",
      "On Tuesday my bank froze my current account while it investigates two fraudulent card payments that appeared overnight, together worth £310. Until the review closes, no payments can leave the account, including the standing order to you. The bank tells me the standard review takes five working days, and I have already asked for the case to be expedited.",
      "Rather than let the payment drift, I have arranged a transfer from my savings account, so the full rent of £675 will reach you on Friday the 9th, six days later than usual. If a late fee applies under our agreement, please tell me the amount and I will add it to the payment, or cover any inconvenience separately if you prefer.",
      "I am sorry for the disruption, and I hope this shows that the difficulty sits entirely with the bank and not with my own finances. Please do call if you would like to talk it through.\n\nYours sincerely,\nDev Malhotra",
    ],
    wordCount: 200,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The titled greeting to a landlord of four years is followed by the letter's whole strategy in one line — notice 'before the date rather than after it' — and the record ('the first time in four years') is offered as the trust the writer is trading on.",
      },
      {
        role: "Bullet 1 — what has happened with the bank",
        analysis:
          "The freeze is described in the bank's own terms — two fraudulent payments worth £310, a five-day review, a standing order caught inside it — and the paragraph ends with an action already taken ('asked for the case to be expedited'), which is what separates a victim from a problem-solver.",
      },
      {
        role: "Bullet 2 — exactly when the payment will arrive",
        analysis:
          "The landlord's real question is answered before she can ask it: the full £675, from savings, on Friday the 9th — and the late-fee question of bullet three is raised by the writer first, with two ways to settle it offered.",
      },
      {
        role: "Reassurance, close and sign-off",
        analysis:
          "The final paragraph places the fault where it belongs ('entirely with the bank and not with my own finances') and ends with an offer to talk; the Yours sincerely pairing matches four years of a courteous tenancy.",
      },
    ],
    vocabulary: [
      {
        term: "before the date rather than after it",
        note: "The letter's thesis in seven words: early notice is the respect a good tenant pays.",
      },
      {
        term: "froze my current account",
        note: "The bank's exact verb for a blocked account; precision here proves the story is true.",
      },
      {
        term: "the standing order",
        note: "The named mechanism of payment — using its proper name shows the writer knows exactly what has failed.",
      },
      {
        term: "expedited",
        note: "The formal verb for speeding up a process; it tells the landlord the writer is already pushing the bank.",
      },
      {
        term: "rather than let the payment drift",
        note: "'Drift' is what bad tenants let happen; refusing the behaviour in the same breath defines the writer against it.",
      },
    ],
    grammar: [
      {
        feature: "Fronted before-clause with ellipsis",
        example: "before the date rather than after it",
        note: "The ellipted comparison ('after it') compresses the whole argument of early notice into one clause.",
      },
      {
        feature: "Fronted until-clause with negative can",
        example: "Until the review closes, no payments can leave the account",
        note: "Fronting 'until the review closes' explains the freeze as a locked door rather than a choice.",
      },
      {
        feature: "Conditional if + offer",
        example: "If a late fee applies under our agreement, please tell me the amount",
        note: "The conditional raises the landlord's own rule for her, politely assuming nothing and conceding everything.",
      },
    ],
    coherence:
      "The letter is built on the difference between delay and default: every sentence works to show that the money exists, the date is fixed and the fault is the bank's. The freeze in paragraph two is answered line by line in paragraph three — the frozen standing order by a savings transfer, the five-day review by Friday the 9th, the possible penalty by an offered fee — and paragraph four states the conclusion the evidence has already reached: the difficulty sits with the bank, not the writer.",
    alternativeExpressions: [
      { insteadOf: "let you know", use: "give you advance warning" },
      { insteadOf: "froze my current account", use: "blocked access to my account" },
      { insteadOf: "asked for the case to be expedited", use: "asked for the case to be dealt with as a priority" },
      { insteadOf: "rather than let the payment drift", use: "rather than leave the payment hanging" },
    ],
    commonMistakes: [
      {
        wrong: "I can't pay rent this month, sorry.",
        right: "The full rent of £675 will reach you on Friday the 9th, six days later than usual.",
        reason: "Silence about the date turns a delay into a default; the landlord needs the exact amount and day to trust the promise.",
      },
      {
        wrong: "It's not my fault, the bank did everything.",
        right: "I have already asked for the case to be expedited, and I have arranged a transfer from my savings account.",
        reason: "Blame alone reassures nobody; the actions already taken are what show the problem is contained.",
      },
      {
        wrong: "I don't think there should be a late fee.",
        right: "If a late fee applies under our agreement, please tell me the amount and I will add it to the payment.",
        reason: "Disputing the fee unasked sounds defensive; offering to pay it sounds like a tenant protecting a four-year record.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "landlord", partOfSpeech: "noun", meaning: "The person who owns a property you rent." },
    { word: "rent", partOfSpeech: "noun", meaning: "The regular payment for living in a property." },
    { word: "standing order", partOfSpeech: "noun", meaning: "An automatic monthly bank payment to someone." },
    { word: "fraudulent", partOfSpeech: "adjective", meaning: "Dishonest and illegal, especially about money." },
    { word: "freeze", partOfSpeech: "verb", meaning: "To stop an account from making payments." },
    { word: "expedite", partOfSpeech: "verb", meaning: "To make a process happen faster." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Suggestion — talks at the local library (semi-formal, culture)
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt1-suggestion-library-talks",
  title: "Talks at the local library",
  channel: "gt",
  taskType: "task-1",
  family: "suggestion",
  tier: "practice",
  topic: "culture",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You are a regular visitor to your local library, and you think it should hold a monthly evening talk series for the community.\n\nWrite a letter to the head librarian, Mrs Adeyemi. In your letter:\n\n• explain why the library would benefit from such a series\n• suggest what kinds of talks could be offered\n• offer to help get the series started\n\nBegin your letter as follows: Dear Mrs Adeyemi,",
  situation:
    "The candidate belongs to the library's Thursday reading group, which Mrs Adeyemi herself runs, and has noticed the hall standing empty on winter evenings; the letter to a librarian known by name is courteous, practical and semi-formal.",
  bullets: [
    "Explain why the library would benefit from such a series",
    "Suggest what kinds of talks could be offered",
    "Offer to help get the series started",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Covers all three bullets: the benefits to the library, the kinds of talks suggested, and the offer of practical help.",
      keywords: ["talks", "speakers", "benefit", "help"],
    },
    {
      key: "purpose-connection",
      description:
        "Opens by linking the idea to the reading group and the empty hall, not out of nowhere.",
      keywords: ["reading group", "hall", "evening", "series"],
    },
    {
      key: "suggestions-costed",
      description:
        "Shows the series is affordable: free local speakers, a collection for refreshments, an otherwise unused night.",
      keywords: ["free", "collection", "refreshments", "wednesday"],
    },
    {
      key: "concrete-offer",
      description:
        "Offers named tasks — approaching the first speakers, arranging chairs and the urn with the Friends.",
      keywords: ["approach", "speakers", "friends", "urn"],
    },
    {
      key: "semi-formal-register",
      description:
        "Pairs Dear Mrs Adeyemi with Yours sincerely — courteous, personal, never stiff.",
      keywords: ["dear mrs", "sincerely", "would", "appeals"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (1 minute)",
      notes: [
        "Mrs Adeyemi runs the reading group the writer attends: 'Dear Mrs Adeyemi' with 'Yours sincerely', warm but respectful of her budget.",
        "The letter proposes, never instructs — every sentence leaves the decision with the librarian.",
      ],
    },
    {
      heading: "Step 2 — Benefit, programme, offer (4 minutes)",
      notes: [
        "Paragraph 2 argues the benefit in the library's own currency: new visitors, a higher profile, an event the Friends can point to.",
        "Paragraph 3 names three speakers who would come free — a record-office historian, a retired doctor, a local novelist — and a first-Wednesday slot the hall does not use.",
        "Paragraph 4 offers the two jobs the librarian cannot easily do herself: approaching speakers and marshalling the Friends on the night.",
        "Four paragraphs, 180–215 words; a proposal is a wish with a plan attached.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mrs Adeyemi,\n\nYou may remember me from the Thursday reading group. I am writing with an idea that several of us have discussed after our meetings: a monthly evening talk series in the hall, which stands empty most nights of the week.",
      "The library already brings people together around books, and a short programme of talks would build on that. It would draw in residents who rarely borrow anything but would happily come to hear a speaker, raise the library's profile at a time of tight budgets, and give the Friends of the Library an event to organise and be proud of.",
      "The talks need not cost much. Local speakers would usually come for nothing: a historian from the county record office on the town's mills, a retired doctor on medicine before the health service, perhaps a novelist from the university reading from her book about the street market. A small collection could cover tea and biscuits, and a first-Wednesday slot would use an evening the hall never books.",
      "If the idea appeals, I would gladly approach the first few speakers, and the Friends could help with the chairs and the urn on the night. I would be very glad to hear what you think.\n\nYours sincerely,\nGwen Llewelyn",
    ],
    wordCount: 210,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The greeting places the writer inside the library's own community ('the Thursday reading group') before the idea appears, and the proposal is anchored to a visible fact — the hall standing empty most nights — which makes it a plan, not a whim.",
      },
      {
        role: "Bullet 1 — why the library would benefit",
        analysis:
          "The benefits are argued in the library's own currency: new visitors who 'rarely borrow anything', a raised profile 'at a time of tight budgets', and an event for the Friends — three audiences served by one series.",
      },
      {
        role: "Bullet 2 — what kinds of talks",
        analysis:
          "Three named speakers answer the unspoken question 'who would come for free?' — a record-office historian, a retired doctor, a local novelist — and the costing is completed with a collection for refreshments and a first-Wednesday slot the hall never books.",
      },
      {
        role: "Bullet 3 — the offer to help, close and sign-off",
        analysis:
          "The offer names the two jobs a librarian cannot easily do herself — approaching the first speakers, marshalling the Friends on the night — and the close hands the judgement to her; Yours sincerely matches the titled greeting.",
      },
    ],
    vocabulary: [
      {
        term: "raise the library's profile",
        note: "The management phrase for becoming better known — it speaks the language of the budget meetings the librarian attends.",
      },
      {
        term: "at a time of tight budgets",
        note: "Six words that name the librarian's world and promise the series will not cost it anything.",
      },
      {
        term: "a first-Wednesday slot",
        note: "The programme word for a regular time; regularity is what turns one talk into a series.",
      },
      {
        term: "the urn",
        note: "The very British kettle of village halls; the small noun shows the writer has actually run an event.",
      },
    ],
    grammar: [
      {
        feature: "May for possibility",
        example: "You may remember me from the Thursday reading group",
        note: "'May' offers the memory instead of assuming it — the softest possible opening to a proposal.",
      },
      {
        feature: "Reduced relative clause",
        example: "a historian from the county record office on the town's mills",
        note: "The speaker, the institution and the topic are packed into one noun phrase — programme-building in a sentence.",
      },
      {
        feature: "Need not + verb",
        example: "The talks need not cost much",
        note: "'Need not' denies necessity quietly, answering the budget objection before the librarian can raise it.",
      },
    ],
    coherence:
      "The letter is a proposal in the true sense: each paragraph removes one reason to say no. Paragraph two answers 'why bother' with three benefits, paragraph three answers 'how would we afford it' with free speakers, a collection and an unused evening, and paragraph four answers 'who will do the work' with the offer of the speaker-hunting and the night itself. The empty hall of the opening line is filled by the end — chairs, urn, audience — so the picture the librarian is left holding is the series already running.",
    alternativeExpressions: [
      { insteadOf: "draw in residents", use: "attract local people" },
      { insteadOf: "raise the library's profile", use: "make the library better known" },
      { insteadOf: "need not cost much", use: "should involve very little expense" },
      { insteadOf: "If the idea appeals", use: "If you like the sound of it" },
    ],
    commonMistakes: [
      {
        wrong: "The library is boring and nobody comes any more.",
        right: "The hall stands empty most nights of the week, and a monthly talk series could change that.",
        reason: "Criticising the institution you are petitioning closes the door; the empty hall states the same fact without a single enemy.",
      },
      {
        wrong: "You should get famous speakers.",
        right:
          "Local speakers would usually come for nothing: a historian from the county record office, a retired doctor, perhaps a novelist from the university.",
        reason:
          "The bullet asks what kinds of talks; fame is a wish, while named local speakers are a programme a librarian could actually book.",
      },
      {
        wrong: "I will organise everything and let you know.",
        right: "I would gladly approach the first few speakers, and the Friends could help with the chairs and the urn on the night.",
        reason: "Taking over the library's programme oversteps a volunteer's place; offering named tasks leaves the decision with the librarian.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "librarian", partOfSpeech: "noun", meaning: "The person in charge of a library." },
    { word: "series", partOfSpeech: "noun", meaning: "A set of events held regularly over time." },
    { word: "profile", partOfSpeech: "noun", meaning: "Public visibility or reputation of an organisation." },
    { word: "collection", partOfSpeech: "noun", meaning: "Money gathered from an audience for costs." },
    { word: "refreshments", partOfSpeech: "noun", meaning: "Drinks and light snacks at an event." },
    { word: "urn", partOfSpeech: "noun", meaning: "A large container for making tea in quantity." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},
];
