/**
 * Academic passage library E (PROMPT 45, Parts B and D).
 *
 *   ielts-rb-ac-third-places — Society,      Section 3, advanced (d4)
 *   ielts-rb-ac-tall-wood    — Architecture, Section 3, advanced (d4)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acThirdPlaces: ReadingExercise = {
  slug: "ielts-rb-ac-third-places",
  title: "Third places",
  variant: "academic",
  section: 3,
  subject: "Society",
  difficulty: 4,
  estimatedMinutes: 16,
  objective: "Read a sociological argument: what third places are, why they declined, what the decline cost, and whether coffee chains, libraries or online spaces can replace them.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "Third places",
      paragraphs: [
        "A sociologist once observed that a good life needs three addresses. The first is home, the second is work, and the third — the bar, the barbershop, the corner café, the library reading room, the park bench — is where a community keeps its own company. He gave the category its name: third places, the settings neither domestic nor economic where people gather because they choose to, not because they must. In his account, these places do quiet structural work: they knit strangers into neighbours, and they give the resident without family nearby a sense of belonging.",
        "The classic third place has recognisable features. Entry asks for little or no money, and the door treats a regular and a first-timer exactly alike. Inside, the mood is playful rather than earnest, and conversation is the main activity — the chessboard or the newspaper exists mainly to start one. Free of obligation, it demands no schedule, no task and no performance; a visitor may buy nothing and still keep a seat. The place itself is unremarkable — plain chairs, tolerant staff — because the attraction is the company, not the decor.",
        "By that description, third places have been thinning for decades. Suburbs scattered the corner shop and the local beyond walking distance; the car made distance feel trivial and the street feel dangerous; working hours lengthened, especially for the households that once staffed the daytime café. Television moved the evening from the bar to the sofa, and the screen in every pocket finished the job. The institutions did not close overnight; they simply emptied, one unnoticed regular at a time.",
        "The costs of the emptying have a literature of their own. A well-known study of civic life found club memberships, association memberships and even regular card games declining together, and argued that a whole stock of social connection — the trust, favours and acquaintanceship that make neighbourhoods work — had been drawn down with them. Loneliness statistics, gathered later and contested as they are, point the same direction. What the third place did for free, its absence now needs programmes to replace.",
        "Commerce has tried to supply the missing rooms. The coffee chains perfected a third-place costume — sofas, warmth, the laptop-friendly table — and for many customers it works. Critics of the formula note two gaps: the seat is rented by the cup, which quietly excludes anyone unwilling to keep paying, and the atmosphere discourages the stranger-to-stranger talk that was the point of the original. The public library, by contrast, is regularly named the last genuine third place in many towns: free at the door, tolerant of long occupancy, and full of exactly the accidental meetings the sociologist described.",
        "Online spaces have their advocates in the same argument. A game server has regulars and newcomers, an in-joke culture and a corner table of its own; a discussion forum runs for years on the same handful of personalities. The counter-case rests on what the digital version lacks: bodies, chance, and the cost-free lingering that lets an acquaintance become a friendship. A platform, the argument runs, is a place you visit through a doorway that closes the moment you look away.",
        "The debate matters because third places behave like infrastructure — invisible until missing, expensive to rebuild, and cheap to maintain while they still stand. A bench, a reading room and a café table with no time limit are, on this reading, not amenities but load-bearing parts of a town's social structure, to be planned and protected as deliberately as its roads.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-information",
      label: "Questions 1–5",
      instruction: "The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "the defining characteristics shared by classic third places",
          correct: 1,
          meta: {
            skills: ["scanning", "structure"],
            evidence: [{ block: 0, paragraph: 1, quote: "Entry asks for little or no money, and the door treats a regular and a first-timer exactly alike." }],
            explanation: "Paragraph B is the feature list: cheap entry, equal treatment, playful mood, conversation as the main activity, no obligation. The statement's 'defining characteristics' is the paraphrase of that inventory.",
          },
        },
        {
          text: "an explanation of the term third place and its two counterparts",
          correct: 0,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "The first is home, the second is work, and the third — the bar, the barbershop, the corner café" }],
            explanation: "Paragraph A introduces the term through its numbering: home first, work second, and the chosen gathering places third. The statement asks for exactly that introduction.",
          },
        },
        {
          text: "a famous investigation into falling civic participation",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "A well-known study of civic life found club memberships, association memberships and even regular card games declining together" }],
            explanation: "Paragraph D reports the study of declining memberships and the stock of social connection it measured. The statement's 'famous investigation' paraphrases 'well-known study'.",
          },
        },
        {
          text: "an institution described as still functioning as a true third place",
          correct: 4,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "The public library, by contrast, is regularly named the last genuine third place in many towns" }],
            explanation: "Paragraph E names the public library as the surviving genuine third place, free at the door and tolerant of long occupancy. That is the institution the statement asks about.",
          },
        },
        {
          text: "an evaluation of online spaces as possible third places",
          correct: 5,
          meta: {
            skills: ["scanning", "structure"],
            evidence: [{ block: 0, paragraph: 5, quote: "A game server has regulars and newcomers, an in-joke culture and a corner table of its own" }],
            explanation: "Paragraph F weighs the digital candidates — servers, forums — against the counter-case of bodies and chance. The statement's 'evaluation of online spaces' covers both halves of that paragraph.",
          },
        },
      ],
      options: ["A", "B", "C", "D", "E", "F", "G"],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 6–9",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "In a classic third place, entering costs little or nothing.",
          answer: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Entry asks for little or no money, and the door treats a regular and a first-timer exactly alike." }],
            explanation: "Paragraph B opens the feature list with the cost of entry: little or no money. The statement is a direct paraphrase of that first feature.",
          },
        },
        {
          text: "The writer believes coffee chains fully satisfy the definition of a third place.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Critics of the formula note two gaps: the seat is rented by the cup, which quietly excludes anyone unwilling to keep paying" }],
            explanation: "Paragraph E concedes the costume works for many customers but endorses the critics' two gaps — the seat rented by the cup and the absence of stranger-to-stranger talk. 'Fully satisfies' contradicts that measured verdict.",
            trap: { family: "mention-lure", note: "The chains 'perfected a third-place costume' — quoting the passage's phrase while missing its point." },
            whyWrong: ["TRUE: the paragraph explicitly lists two gaps between the chain café and the definition."],
          },
        },
        {
          text: "Online communities can host both long-standing members and newcomers.",
          answer: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 5, quote: "A game server has regulars and newcomers, an in-joke culture and a corner table of its own" }],
            explanation: "Paragraph F grants the digital case its regulars and newcomers before raising the counter-argument, which concerns bodies and chance rather than membership mix. The statement reports the granted point.",
          },
        },
        {
          text: "The sociologist who coined the term later withdrew his definition.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "He gave the category its name: third places, the settings neither domestic nor economic" }],
            explanation: "The passage reports the original definition and never mentions any withdrawal or revision of it. Neither confirming nor denying the claim is possible from the text, so the answer is Not Given.",
            trap: { family: "boundary", note: "The passage's later criticisms of substitutes are easy to misread as criticisms of the definition itself." },
            whyWrong: ["FALSE: nothing in the passage says he changed his mind — the definition stands unchallenged in the text."],
          },
        },
      ],
    },
    {
      id: "q3",
      type: "summary-completion",
      label: "Questions 10–13",
      instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "The third place is a home away from home. Unlike work, it is free of 10" }, { kind: "blank", no: 10 }, { kind: "text", text: ", demanding no schedule and no task. The mood is 11" }, { kind: "blank", no: 11 }, { kind: "text", text: " rather than earnest, and conversation is the main activity. A visitor may buy 12" }, { kind: "blank", no: 12 }, { kind: "text", text: " and still keep a seat, because the attraction is the company. Returning to the same corner, morning after morning, gives the regular a sense of 13" }, { kind: "blank", no: 13 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 10,
          answer: "obligation",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Free of obligation, it demands no schedule, no task and no performance" }],
            explanation: "The paragraph contrasts the third place with work through one noun: free of obligation, demanding no schedule and no task. The summary reuses both demands and asks for the governing noun.",
          },
        },
        {
          no: 11,
          answer: "playful",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "the mood is playful rather than earnest" }],
            explanation: "The mood word is given as playful rather than earnest. The summary keeps 'rather than earnest' and asks for the adjective that opens the contrast.",
          },
        },
        {
          no: 12,
          answer: "nothing",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "a visitor may buy nothing and still keep a seat" }],
            explanation: "The cost rule of the classic third place is stated exactly: a visitor may buy nothing and still keep a seat. The summary keeps the verb 'buy' and asks for its object.",
          },
        },
        {
          no: 13,
          answer: "belonging",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "they give the resident without family nearby a sense of belonging" }],
            explanation: "Paragraph A defines the third place's gift as a sense of belonging for the resident without family nearby; the summary's closing noun comes straight from that phrase. The repetition of the same corner points back to the regular's membership.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "domestic", partOfSpeech: "adjective", definition: "relating to the home; third places are neither domestic nor economic settings." },
    { word: "regulars", partOfSpeech: "noun (plural)", definition: "customers who visit a place habitually; the door treats regulars and first-timers alike." },
    { word: "suburbs", partOfSpeech: "noun (plural)", definition: "residential areas on the edge of cities; suburban scatter pushed the local café beyond walking distance." },
    { word: "civic", partOfSpeech: "adjective", definition: "relating to the life of a community and its institutions; the study tracked civic membership." },
    { word: "acquaintanceship", partOfSpeech: "noun", definition: "the state of knowing people casually; the stock of favours and acquaintanceship makes neighbourhoods work." },
    { word: "occupancy", partOfSpeech: "noun", definition: "the state of using or staying in a place; the library is tolerant of long occupancy." },
    { word: "infrastructure", partOfSpeech: "noun", definition: "the basic systems a place depends on; third places behave like social infrastructure." },
  ],
  passageNote: "A concept essay: definition (A), features (B), decline (C), costs (D), substitutes and their gaps (E–F), the planning conclusion (G). Location questions follow the paragraph map; the summary lives entirely in paragraph B.",
  source: READING_BANK_SOURCE_NOTE,
};

export const acTallWood: ReadingExercise = {
  slug: "ielts-rb-ac-tall-wood",
  title: "Tall wood",
  variant: "academic",
  section: 3,
  subject: "Architecture",
  difficulty: 4,
  estimatedMinutes: 17,
  objective: "Read an architectural argument: how cross-laminated timber works, why it builds fast and stores carbon, how the fire question is answered, and what still stands in the way of the timber tower.",
  intro: "Read the passage below and answer Questions 1–14.",
  blocks: [
    {
      heading: "Tall wood",
      paragraphs: [
        "For a century, the skyline has been a story of two materials. Steel frames carried buildings up; concrete gave them floors and cores. Both are formidable, and both are expensive in a currency that only began appearing on the invoice recently: carbon. Cement production alone is estimated to account for a share of global carbon dioxide emissions in the high single digits — a burden each new tower adds to the atmosphere before a single occupant arrives. That accounting is what reopened the oldest building question of all: how high can wood go?",
        "The material answering it is not the plank of the carpenter's yard but an engineered product: cross-laminated timber. Boards are sawn, dried, stacked into layers, and glued under heat and pressure into solid panels — with each layer rotated ninety degrees relative to its neighbour, like a sandwich of crossed grain. The crossing cancels wood's old weaknesses: the panel shrinks and swells far less than ordinary timber, and for its weight it rivals steel in strength. The finished material leaves the factory as prefabricated panels, floors and stair cores, cut to shape with holes for windows and services already in place.",
        "Construction with these panels runs on a different rhythm from concrete. A concrete pour needs formwork, curing days and a small army on site; a timber tower arrives as flat-pack, and crews lift room-sized panels into place with a single crane, assembling floors like oversized furniture. The work is quiet, generates little site waste, and needs fewer workers, and because the structure weighs so much less, the foundations above soft ground shrink accordingly. Tower blocks of ten storeys and more have been assembled this way, and taller ones are on drawing boards worldwide.",
        "The first objection is always fire. Wood burns, and a public raised on images of timber cities remembers it. The engineering answer is that cross-laminated timber does not behave like kindling: exposed to flame, its outer surface chars, and the char layer insulates the load-bearing core, which continues to carry the building while sprinklers and firefighters do their work. Tests on assembled timber compartments persuaded several regulators to rewrite height limits; others remain to be convinced, and the rules still vary sharply between countries.",
        "The environmental ledger is the argument that launched the movement, and it is more intricate than a slogan. A tree builds its trunk from carbon drawn from the air, so a standing building of timber is, in effect, a carbon store; steel and concrete, by contrast, emit carbon to be made. The complications follow quickly: the forest must be harvested at a sustainable rate and replanted, the glue and transport carry their own footprints, and a building is a carbon bank only for as long as it stands. Honest advocates concede each caveat and still find the sums favourable.",
        "Meanwhile the built list grows: offices, schools, apartment blocks and towers of a dozen storeys and more, scattered across Europe, North America and the Pacific, each one a demonstration that the physics and the paperwork can both be satisfied. Insurers, lenders and fire authorities have been slower company than architects — premiums and approvals are negotiated building by building — and cost remains the quiet gatekeeper wherever timber must travel far or compete with concrete poured next door.",
        "None of the obstacles looks permanent, and none of the advocates argues that steel and concrete are finished; the likely future is a mixed skyline in which timber takes the mid-rise and teams with steel in the towers. What has already changed is the question. 'How high can wood go?' began as an engineering tease; it is now a serious entry in the climate account of every city that builds.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "diagram-labelling",
      label: "Questions 1–4",
      instruction: "Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
      plan: {
        title: "Manufacturing cross-laminated timber",
        caption: "From log to panel — the four steps described in the passage.",
        grid: [
          [
            { label: "Step 1", caption: "logs are sawn and dried into flat", blank: 1 },
            { label: "Step 2", caption: "each layer is rotated — degrees to its neighbour", blank: 2 },
            null,
          ],
          [
            { label: "Step 3", caption: "the stack is — under heat and pressure", blank: 3 },
            { label: "Step 4", caption: "the finished material ships as prefabricated", blank: 4 },
            null,
          ],
        ],
      },
      blanks: [
        {
          no: 1,
          answer: "boards",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Boards are sawn, dried, stacked into layers, and glued under heat and pressure into solid panels" }],
            explanation: "The manufacturing sequence opens with boards: sawn, dried and stacked. The diagram's first step keeps the sawing and drying and asks for the flat pieces they produce.",
          },
        },
        {
          no: 2,
          answer: "ninety",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "with each layer rotated ninety degrees relative to its neighbour" }],
            explanation: "The crossing that defines the product is measured in the same sentence: each layer is rotated ninety degrees to its neighbour. The diagram's degree blank takes the number word.",
          },
        },
        {
          no: 3,
          answer: "glued",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "glued under heat and pressure into solid panels" }],
            explanation: "Step three is the bonding: the stack is glued under heat and pressure. The diagram keeps 'under heat and pressure' and asks for the verb.",
          },
        },
        {
          no: 4,
          answer: "panels",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "The finished material leaves the factory as prefabricated panels" }],
            explanation: "The product ships as prefabricated panels — the noun the fourth step needs. The same sentence adds that holes for windows and services are already cut, which is the prefab advantage paragraph C amplifies.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "matching-information",
      label: "Questions 5–9",
      instruction: "The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "an estimate of the emissions attributed to making cement",
          correct: 0,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Cement production alone is estimated to account for a share of global carbon dioxide emissions in the high single digits" }],
            explanation: "Paragraph A carries the carbon accounting that motivates the whole argument: cement's share of global emissions is put in the high single digits. The statement's 'estimate' matches 'is estimated to account for'.",
          },
        },
        {
          text: "how the material behaves when exposed to fire",
          correct: 3,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "exposed to flame, its outer surface chars, and the char layer insulates the load-bearing core" }],
            explanation: "Paragraph D is the fire paragraph: charring, insulation of the core, and the regulatory follow-on. The statement asks for the behaviour, which is the paragraph's opening half.",
          },
        },
        {
          text: "the environmental argument together with its complications",
          correct: 4,
          meta: {
            skills: ["scanning", "structure"],
            evidence: [{ block: 0, paragraph: 4, quote: "The complications follow quickly: the forest must be harvested at a sustainable rate and replanted" }],
            explanation: "Paragraph E holds both halves: the carbon-store argument that launched the movement and the caveats — sustainable harvesting, glue, transport, building lifetime — that honest advocates concede.",
          },
        },
        {
          text: "practical advantages during the construction phase",
          correct: 2,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "crews lift room-sized panels into place with a single crane, assembling floors like oversized furniture" }],
            explanation: "Paragraph C is the construction-phase paragraph: flat-pack delivery, one crane, quiet work, little waste, fewer workers, smaller foundations. The statement gathers those practical advantages.",
          },
        },
        {
          text: "the parties who have been slower to accept the material than architects",
          correct: 5,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 5, quote: "Insurers, lenders and fire authorities have been slower company than architects" }],
            explanation: "Paragraph F names the laggards explicitly: insurers, lenders and fire authorities, with approvals negotiated building by building. The statement paraphrases that sentence.",
          },
        },
      ],
      options: ["A", "B", "C", "D", "E", "F", "G"],
    },
    {
      id: "q3",
      type: "true-false-not-given",
      label: "Questions 10–12",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Relative to its weight, cross-laminated timber rivals steel in strength.",
          answer: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "for its weight it rivals steel in strength" }],
            explanation: "Paragraph B makes the comparison in exactly the qualified form the statement keeps: for its weight, the panel rivals steel. The qualifier is the substance of the claim — remove it and the claim would outrun the text.",
          },
        },
        {
          text: "Every country has now rewritten its building codes to permit tall timber buildings.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 3, quote: "Tests on assembled timber compartments persuaded several regulators to rewrite height limits; others remain to be convinced, and the rules still vary sharply between countries." }],
            explanation: "Paragraph D says several regulators rewrote limits while others remain unconvinced and rules vary sharply between countries. 'Every country has now' contradicts that picture of partial, uneven adoption.",
            trap: { family: "extreme-language", note: "'Every' and 'now' outrun a paragraph about several regulators and remaining sceptics." },
            whyWrong: ["TRUE: the passage's own wording is 'several regulators', with others 'yet to be convinced' — far from universal."],
          },
        },
        {
          text: "The writer predicts that timber will replace concrete and steel entirely within a decade.",
          answer: "NOT GIVEN",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 0, paragraph: 6, quote: "the likely future is a mixed skyline in which timber takes the mid-rise and teams with steel in the towers" }],
            explanation: "The final paragraph expects a mixed skyline with timber taking the mid-rise and teaming with steel — a projection of coexistence with no decade-long timetable and no total replacement. The specific claim in the statement is neither made nor dated.",
          },
        },
      ],
    },
    {
      id: "q4",
      type: "multiple-choice",
      label: "Questions 13–14",
      instruction: "Choose the correct letter, A, B, C or D.",
      items: [
        {
          stem: "The main environmental argument for building with timber is that",
          options: [
            "timber buildings are always cheaper to heat than concrete ones",
            "the material stores carbon while steel and cement release it in production",
            "timber plantations remove the need for old-growth forest protection",
            "transporting panels produces no emissions at all",
          ],
          correct: 1,
          lure: 3,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "a standing building of timber is, in effect, a carbon store; steel and concrete, by contrast, emit carbon to be made" }],
            explanation: "The ledger in paragraph E sets the carbon store of a standing timber building against the production emissions of steel and concrete. The statement must keep both halves of that contrast.",
            trap: { family: "extreme-language", note: "The passage concedes that transport carries its own footprint — 'no emissions at all' is the fantasy version." },
            whyWrong: ["A: heating costs are never discussed.", "C: the passage requires sustainable harvesting and replanting, not the removal of forest protection.", "D: paragraph E explicitly lists transport among the complications."],
          },
        },
        {
          stem: "What is the writer's concluding view of tall wood?",
          options: [
            "It has already replaced steel and concrete in the tallest towers",
            "Its future role looks real but partial — a mixed skyline rather than a wooden monopoly",
            "Its success depends entirely on reducing the price of glue",
            "It is unlikely to move beyond demonstration buildings",
          ],
          correct: 1,
          meta: {
            skills: ["opinion", "structure"],
            evidence: [{ block: 0, paragraph: 6, quote: "the likely future is a mixed skyline in which timber takes the mid-rise and teams with steel in the towers" }],
            explanation: "The conclusion is deliberately moderate: not a takeover ('nobody argues steel and concrete are finished') but a genuine, partial role in a mixed skyline. The correct option preserves both the confidence and the moderation.",
            whyWrong: ["A: the passage says steel and concrete are not finished.", "C: glue is one cited footprint item, not the decisive variable.", "D: paragraph F lists built offices, schools and towers of a dozen storeys — well beyond demonstrations."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "skyline", partOfSpeech: "noun", definition: "the outline of a city's buildings against the sky; for a century the skyline was a story of steel and concrete." },
    { word: "engineered", partOfSpeech: "adjective", definition: "designed and manufactured for performance rather than found in nature; cross-laminated timber is an engineered product." },
    { word: "chars", partOfSpeech: "verb (third person)", definition: "burns to a blackened crust; the char layer insulates the core beneath it." },
    { word: "regulators", partOfSpeech: "noun (plural)", definition: "official bodies that set and enforce rules; some rewrote height limits after the fire tests." },
    { word: "ledger", partOfSpeech: "noun", definition: "a book of accounts; the environmental ledger balances carbon stored against footprints made." },
    { word: "premiums", partOfSpeech: "noun (plural)", definition: "the amounts charged for insurance; timber buildings' premiums are negotiated case by case." },
    { word: "mid-rise", partOfSpeech: "noun", definition: "buildings of moderate height, between low-rise and high-rise; timber's likeliest territory in the mixed skyline." },
  ],
  passageNote: "The argument runs: carbon problem (A), material (B), construction (C), fire (D), environment (E), adoption (F), verdict (G). Diagram questions live in paragraph B; the location questions spread across the map.",
  source: READING_BANK_SOURCE_NOTE,
};
