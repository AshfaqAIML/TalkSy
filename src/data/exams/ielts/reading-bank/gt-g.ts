/**
 * General Training text library G (PROMPT 54 question-bank expansion).
 *
 * GT batch G — Section 2 courses, schemes and instructions. Six original
 * Section 2 text sets written in the style of the test:
 *
 *   ielts-rb-gt-product-manual   — appliance manual (technology, d3)
 *   ielts-rb-gt-course-guide     — college prospectus extract (education, d2)
 *   ielts-rb-gt-workplace-safety — safety handbook (workplace, d3)
 *   ielts-rb-gt-cycling-scheme   — community scheme leaflet (society, d2)
 *   ielts-rb-gt-library-terms    — service terms (culture, d3)
 *   ielts-rb-gt-allotment        — council guidance (environment, d3)
 *
 * Every text is TalkSy original practice material: the rules of a real
 * manual, prospectus, handbook or leaflet, never a copied one.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtGExercises: ReadingExercise[] = [
  // 1 — Using your coffee machine (appliance manual) ------------------------
  {
    slug: "ielts-rb-gt-product-manual",
    title: "Using your coffee machine",
    variant: "gt",
    section: 2,
    subject: "appliance manual",
    topic: "technology",
    difficulty: 3,
    estimatedMinutes: 13,
    objective:
      "Follow an appliance manual for settings, sequence and care — what the machine does, in what order, and what must never be done.",
    intro: "Read the instructions below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Getting to know your machine",
        paragraphs: [
          "Unpacking and first use. Your machine was tested with water at the factory, so run one rinsing cycle before the very first drink. Lift the lid and fill the tank with fresh cold water up to the 1.8 litre mark; never fill the tank with milk, juice or any flavoured liquid. The bean hopper holds 250 g of beans — check the roast date on the bag, because beans older than a month taste flat. The lights stop flashing when the machine is warm, which takes about forty seconds. Warm your cups on the warming plate above the brew head while you wait.",
          "Strength and size. The grind dial runs from 1 to 7: lower numbers give a coarser grind and a lighter cup; higher numbers grind finer and make a stronger espresso. Turn the dial only while the machine is grinding — moving it when the machine is idle can jam the mechanism. The cup sizes are set at the factory, but you can change them: hold down the espresso or lungo button during a brew, and the machine memorises the volume you stop at. Hold both buttons for five seconds to go back to the defaults of 30 ml and 110 ml.",
        ],
      },
      {
        heading: "Daily use, cleaning and descaling",
        paragraphs: [
          "Making a drink. Fill the tank with fresh cold water and warm your cups on the warming plate. Press the power switch and wait until the lights stop flashing. Choose espresso or lungo; the machine then grinds the beans, brews, and drops the used grounds into the grounds container. Empty the container after every ten drinks — the display counts the cups for you — and rinse it under the tap; the drip tray slides out for the same reason. The steam wand foams milk for cappuccino: purge it into a jug for three seconds before the first drink of the day, and wipe it with a damp cloth afterwards.",
          "Cleaning and care. Never immerse the machine in water or put any part of it in a dishwasher; the milk jug and the grounds container are the only parts that may be washed by hand. A red light and the word descale appear every three months or after about two hundred drinks. Follow the steps on the bottle with the descaling solution supplied; never use vinegar, which attacks the seals inside the boiler. Weak coffee usually means the grind is too coarse or the beans went stale; if no steam comes from the wand, the nozzle is blocked — unscrew it and clear it with the pin provided.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart-completion",
        label: "Questions 1–5",
        instruction: "Complete the flow-chart below. Choose ONE WORD ONLY from the texts for each answer.",
        wordLimit: 1,
        layout: [
          [{ kind: "text", text: "Making your first cup" }],
          [{ kind: "text", text: "Fill the water" }, { kind: "blank", no: 1 }, { kind: "text", text: "with fresh cold water." }],
          [{ kind: "text", text: "Warm your cups on the warming" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "Press the power" }, { kind: "blank", no: 3 }, { kind: "text", text: "and wait until the lights stop flashing." }],
          [{ kind: "text", text: "Choose espresso or" }, { kind: "blank", no: 4 }, { kind: "text", text: "; the machine then grinds and brews." }],
          [{ kind: "text", text: "After ten drinks, empty the grounds" }, { kind: "blank", no: 5 }, { kind: "text", text: "and rinse it under the tap." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "tank",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Fill the tank with fresh cold water and warm your cups on the warming plate" }],
              explanation:
                "The making-a-drink sequence opens with the tank: fill it with fresh cold water before anything else happens. The flowchart keeps 'water' and needs the container it goes in, a word printed in both sections of the manual.",
            },
          },
          {
            no: 2,
            answer: "plate",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "warm your cups on the warming plate" }],
              explanation:
                "Step two borrows the same sentence almost word for word: warm your cups on the warming plate while the machine heats. The chart keeps 'warming' and asks for the surface the cups sit on.",
            },
          },
          {
            no: 3,
            answer: "switch",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Press the power switch and wait until the lights stop flashing" }],
              explanation:
                "The sequence then moves from water to power: press the power switch and wait until the lights stop flashing. The chart's third box keeps 'power' and needs the noun that follows it.",
            },
          },
          {
            no: 4,
            answer: "lungo",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 1, paragraph: 0, quote: "Choose espresso or lungo; the machine then grinds the beans" }],
              explanation:
                "The choice at the heart of the drink step is espresso or lungo — the two factory sizes whose defaults are re-set in the dial paragraph. The chart keeps 'espresso' and needs its longer partner.",
            },
          },
          {
            no: 5,
            answer: "container",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "drops the used grounds into the grounds container" }],
              explanation:
                "After ten drinks the used grounds have somewhere to go: the grounds container, which is emptied and rinsed under the tap. The chart keeps 'grounds' and asks for the receptacle named in the same sentence.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 6–9",
        instruction:
          "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "The tank may be filled with milk when making milky drinks.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "never fill the tank with milk, juice or any flavoured liquid" }],
              explanation:
                "The manual bans everything except water in the tank, and milk is the first thing named and excluded. Milk reaches the cup through the steam wand, so the statement contradicts the tank rule outright.",
              trap: {
                family: "mention-lure",
                note: "Milk is mentioned elsewhere in the manual — foamed by the wand, washed from the jug — which tempts a TRUE; the tank rule is an outright ban.",
              },
              whyWrong: ["TRUE: the manual is firm — the tank takes fresh cold water only, and the wand is where milk belongs."],
            },
          },
          {
            text: "The grind dial should be turned only while the machine is grinding.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Turn the dial only while the machine is grinding — moving it when the machine is idle can jam the mechanism" }],
              explanation:
                "The dial paragraph is explicit: turn it only while the machine is grinding, because moving it while idle can jam the mechanism. The statement restates the warning with its qualifier intact.",
            },
          },
          {
            text: "The machine tells the user when descaling is due.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "A red light and the word descale appear every three months or after about two hundred drinks" }],
              explanation:
                "The care section gives the machine a voice of its own: a red light and the word descale appear every three months or after two hundred drinks. That light is the signal the statement describes.",
            },
          },
          {
            text: "The manual recommends one particular brand of coffee beans.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "check the roast date on the bag, because beans older than a month taste flat" }],
              explanation:
                "The passage discusses beans in real detail — the roast date, the month limit, the flat taste of stale beans. What it never does is name, recommend or exclude a brand, and an unstated preference is Not Given, not FALSE.",
              trap: {
                family: "boundary",
                note: "Plenty of bean talk sits close by, which pulls candidates towards FALSE; nothing is contradicted, it is simply never said.",
              },
              whyWrong: ["FALSE: nothing in the manual argues against any maker — it never raises the question of brands at all."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "hopper", partOfSpeech: "noun", definition: "the container that holds the beans; the hopper on this machine holds 250 g." },
      { word: "grind", partOfSpeech: "noun", definition: "how finely the beans are cut; the dial runs from 1, coarse, to 7, fine." },
      { word: "grounds", partOfSpeech: "noun", definition: "the used coffee powder left after brewing; it drops into the grounds container." },
      { word: "purge", partOfSpeech: "verb", definition: "to run steam through the wand to clean it; purge it before the first drink of the day." },
      { word: "descale", partOfSpeech: "verb", definition: "to remove the limescale that builds up inside; the red light asks for it every three months." },
    ],
    passageNote:
      "Manuals move between three registers — naming the parts, sequencing the drink, and banning the rest. The flowchart checks the order; the verdict items check the bans and the things the manual never says.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // 2 — A course guide for adult learners (college prospectus extract) ------
  {
    slug: "ielts-rb-gt-course-guide",
    title: "A course guide for adult learners",
    variant: "gt",
    section: 2,
    subject: "college prospectus extract",
    topic: "education",
    difficulty: 2,
    estimatedMinutes: 12,
    objective:
      "Find your way around a college prospectus: levels, fees, attendance and the support offered to adult learners.",
    intro: "Read the prospectus pages below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Before you enrol",
        paragraphs: [
          "Choosing your level. Every new learner has a friendly chat with a tutor and takes a short initial assessment — twenty minutes, with no pass mark — so that we can suggest the right level. If you are torn between two levels, our advice is to start at the easier one: you can move up at half term, and confidence matters more than speed. Advice sessions run on Wednesday evenings and Saturday mornings at the learning centre; drop in, or book a time by phone.",
          "Fees and help with paying. Most courses cost £150 a term, paid when you enrol. You can spread the cost in three monthly instalments, and learners on low incomes pay a reduced fee of £40. Courses are free for anyone receiving certain benefits — ask at reception for the fee waiver form. We also keep a small fund for travel and childcare costs; requests are treated in confidence, and the forms are at reception.",
          "Coming to class. Courses run for one morning or one evening a week for ten weeks. If you miss a session, your tutor emails you the worksheets, and the homework waits on the class page. Please tell reception if you will be away for more than one week — a quick message keeps your place open, and it stops the office chasing you by post.",
        ],
      },
      {
        heading: "Once your course starts",
        paragraphs: [
          "Progress and what you gain. At the end of the course you receive a college certificate, and the English and maths courses lead to a nationally recognised qualification. Your tutor writes a short report on your progress each term, and in the last week you agree the next step together at a review meeting — many learners move up a level; others repeat a term to consolidate, which is a normal part of learning rather than a setback.",
          "Extra support. Tell us in confidence about anything that makes studying harder — dyslexia, anxiety, sight or hearing difficulties. We can arrange a screening, extra time in assessments, one-to-one study-skills sessions and assistive software. Two of our tutors are trained to teach adults who had bad experiences at school, and classroom assistants sit in on most beginner groups. Ask for the learner support leaflet at any point in the year.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction: "The guide has five sections, A–E. Which section contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        options: ["A", "B", "C", "D", "E"],
        items: [
          {
            text: "the circumstances in which a course costs nothing",
            correct: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Courses are free for anyone receiving certain benefits" }],
              explanation:
                "Section B holds the money answers, and the free cases are stated plainly: courses are free for anyone receiving certain benefits. The word 'circumstances' is the paraphrase of that benefits rule.",
            },
          },
          {
            text: "advice on which level to begin at",
            correct: 0,
            meta: {
              skills: ["scanning", "structure"],
              evidence: [{ block: 0, paragraph: 0, quote: "If you are torn between two levels, our advice is to start at the easier one" }],
              explanation:
                "Section A is the level-advice paragraph: start at the easier of two levels and move up at half term. The statement's 'advice on which level' points straight at the tutor's recommendation.",
            },
          },
          {
            text: "what a learner receives at the end of a course",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "At the end of the course you receive a college certificate" }],
              explanation:
                "Section D lists the endings: a college certificate, plus a nationally recognised qualification for English and maths. 'Receives' is the exact verb the paragraph uses, so the match needs no paraphrase at all.",
            },
          },
          {
            text: "help offered for learners who find study difficult",
            correct: 4,
            lure: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 1, paragraph: 1, quote: "We can arrange a screening, extra time in assessments, one-to-one study-skills sessions and assistive software" }],
              explanation:
                "Section E is the support section: screening, extra time, study-skills sessions and assistive software for dyslexia, anxiety and sensory difficulties. Section B is the lure — help with paying is a different kind of help from help with studying.",
              trap: {
                family: "mention-lure",
                note: "Section B is full of the word 'help' — help with paying — but the statement asks about help with studying, which lives in E.",
              },
              whyWrong: ["B: section B helps with money — instalments, reduced fees and waivers — not with the difficulty of studying itself."],
            },
          },
          {
            text: "what happens when a learner cannot attend",
            correct: 2,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "If you miss a session, your tutor emails you the worksheets, and the homework waits on the class page" }],
              explanation:
                "Section C covers absence: the tutor emails worksheets, homework waits on the class page, and reception keeps the place open. That sequence is what the statement asks about.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–9",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the guide for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. New learners take a short initial" }, { kind: "blank", no: 6 }, { kind: "text", text: "of twenty minutes." }],
          [{ kind: "text", text: "7. The termly fee of £150 can be spread in three monthly" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "8. A learner who will be absent for over a week should tell" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "9. In the last week, learners agree their next step at a review" }, { kind: "blank", no: 9 }, { kind: "text", text: "." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "assessment",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "takes a short initial assessment — twenty minutes, with no pass mark" }],
              explanation:
                "The joining routine in section A is a friendly chat plus a short initial assessment of twenty minutes with no pass mark. The sentence keeps 'initial' and needs the noun that follows it.",
            },
          },
          {
            no: 7,
            answer: "instalments",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "You can spread the cost in three monthly instalments" }],
              explanation:
                "Section B's payment options are the reduced fee, the waiver and the instalment plan: three monthly instalments spread the term's cost. The sentence keeps 'three monthly' and asks for the arrangement itself.",
            },
          },
          {
            no: 8,
            answer: "reception",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Please tell reception if you will be away for more than one week" }],
              explanation:
                "The absence rule names who to tell: reception, for any gap longer than one week. A quick message keeps the place open, which is why the sentence asks for the recipient rather than the reason.",
            },
          },
          {
            no: 9,
            answer: "meeting",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "in the last week you agree the next step together at a review meeting" }],
              explanation:
                "The last week of term ends in a review meeting where tutor and learner agree the next step together. The sentence keeps 'review' and wants the event that the paragraph names in the same breath.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "enrol", partOfSpeech: "verb", definition: "to register on a course; the fee is paid when you enrol." },
      { word: "instalments", partOfSpeech: "noun", definition: "the parts of a payment spread over time; the termly fee can be split into three." },
      { word: "waiver", partOfSpeech: "noun", definition: "an official cancellation of a charge; ask at reception for the fee waiver form." },
      { word: "assessment", partOfSpeech: "noun", definition: "a short check of level; the initial one lasts twenty minutes and has no pass mark." },
      { word: "dyslexia", partOfSpeech: "noun", definition: "a difficulty with reading and spelling; support includes screening and assistive software." },
    ],
    passageNote:
      "A prospectus answers three questions in the order families ask them — what it costs, what it involves, and what comes out of it. Matching items hunt for a paragraph's job, not its topic word.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // 3 — Warehouse safety induction (safety handbook) ------------------------
  {
    slug: "ielts-rb-gt-workplace-safety",
    title: "Warehouse safety induction",
    variant: "gt",
    section: 2,
    subject: "safety handbook",
    topic: "workplace",
    difficulty: 3,
    estimatedMinutes: 14,
    objective:
      "Read a safety handbook for its rules and their boundaries: who may do what, where, and how big a job must be before someone else takes over.",
    intro: "Read the handbook extract below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Your first fortnight on site",
        paragraphs: [
          "Welcome and induction. In your first fortnight, your shift supervisor shows you round the site, and you sign for a copy of this handbook at the end of the walk-round. The safety officer is Ruth Okafor; her office is by the main gate, and the green noticeboard opposite reception lists the current first aiders and fire wardens. Nothing in this handbook replaces your training sessions, and if a rule here seems to clash with what you were taught, the training session wins — then tell the safety officer, so the page can be corrected.",
          "Racking and storage. Never climb the racking, and never use a pallet or a stack of boxes as a step ladder — order pickers are provided at the end of each gangway. Report every damaged upright to the safety officer: nobody straightens a damaged beam, and nothing goes back on the level above it until the maintenance crew has signed the repair. Store heavy and fast-moving lines between knee and shoulder height, and keep the top beam clear of anything an order picker cannot reach safely. Goods must not overhang the pallet edge, because a torn corner on a moving pallet becomes a trip hazard for the next person.",
        ],
      },
      {
        heading: "Two areas to learn before your first month",
        paragraphs: [
          "The battery charging bay. The charging bay is ventilated continuously, and its door must stay open while any charger is connected — closed doors let hydrogen build up to dangerous levels. Only staff who hold a current licence may change or connect a battery; the licence is renewed every three years after a refresher morning. Wear the gloves and the goggles stored in the yellow box whenever you are inside the painted lines, and leave matches, lighters and e-cigarettes at the peg board outside. A charging battery is always warm: that is normal, but report any battery that smells of rotten eggs to the duty engineer at once.",
          "Spills, chemicals and noise. Spill kits hang at the ends of the gangways: a small spill may be cleared by whoever finds it, using the absorbent granules and the bag in the kit. Anything larger than a bucket must be reported to the duty supervisor and left for the trained responders — keep people away rather than mopping up yourself. All chemicals live in the bunded store by the loading doors and travel only on the trolleys provided, never in open containers. The compactors are loud enough to damage hearing: ear defenders are mandatory within two metres of either machine, and the zone is marked on the floor with white discs.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "yes-no-not-given",
        label: "Questions 1–5",
        instruction:
          "Do the following statements agree with the views of the writer of the handbook? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "Only licensed staff may connect a battery in the charging bay.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 1, paragraph: 0, quote: "Only staff who hold a current licence may change or connect a battery" }],
              explanation:
                "The bay paragraph reserves battery work for licence holders: only staff who hold a current licence may change or connect a battery. The statement agrees, with 'licensed' paraphrasing 'hold a current licence'.",
            },
          },
          {
            text: "A small spill should always be left for the trained responders.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 1, quote: "a small spill may be cleared by whoever finds it, using the absorbent granules and the bag in the kit" }],
              explanation:
                "The spill paragraph splits the work in two: small spills belong to whoever finds them, using the kit; only larger ones wait for the trained responders. 'Always' erases the split the handbook is careful to make.",
              trap: {
                family: "extreme-language",
                note: "The responders are real and nearby in the text, but they exist for anything larger than a bucket — not for every spill.",
              },
              whyWrong: ["YES: the granules and the bag in the kit exist precisely so that the finder of a small spill can act at once."],
            },
          },
          {
            text: "When a handbook rule conflicts with the training, the training takes priority.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "if a rule here seems to clash with what you were taught, the training session wins" }],
              explanation:
                "The induction paragraph settles the hierarchy outright: where a handbook rule seems to clash with the training, the training session wins, and the safety officer is told so the page can be corrected.",
            },
          },
          {
            text: "Any member of staff may straighten a damaged upright if they are strong enough.",
            answer: "NO",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "nobody straightens a damaged beam, and nothing goes back on the level above it until the maintenance crew has signed the repair" }],
              explanation:
                "The racking paragraph removes the job from everyone: nobody straightens a damaged beam, and nothing is loaded above it until the maintenance crew signs the repair. Strength is not a qualification here.",
            },
          },
          {
            text: "The company plans to replace the compactors with quieter machines.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 1, quote: "The compactors are loud enough to damage hearing: ear defenders are mandatory within two metres of either machine" }],
              explanation:
                "The passage says plenty about the compactors — loud enough to damage hearing, ear defenders mandatory within two metres. What it never says is anything about replacing them, and an unstated plan is Not Given.",
              trap: {
                family: "boundary",
                note: "The machines are described in close detail, which pulls candidates towards NO; silence about a plan is Not Given, not a denial.",
              },
              whyWrong: ["NO: the handbook reports the noise and the protection rule around it, but says nothing about buying new machines."],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "note-completion",
        label: "Questions 6–9",
        instruction: "Complete the notes below. Choose ONE WORD ONLY from the handbook for each answer.",
        wordLimit: 1,
        layout: [
          [{ kind: "text", text: "Safety notes for the first month" }],
          [{ kind: "text", text: "6. Keep the bay door open while any" }, { kind: "blank", no: 6 }, { kind: "text", text: "is connected." }],
          [{ kind: "text", text: "7. Inside the painted lines, wear the gloves and the" }, { kind: "blank", no: 7 }, { kind: "text", text: "from the yellow box." }],
          [{ kind: "text", text: "8. Chemicals travel only on the" }, { kind: "blank", no: 8 }, { kind: "text", text: "provided." }],
          [{ kind: "text", text: "9. Ear defenders are mandatory within two" }, { kind: "blank", no: 9 }, { kind: "text", text: "of the compactors." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "charger",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "its door must stay open while any charger is connected" }],
              explanation:
                "The bay's door rule is tied to the charger: it must stay open while any charger is connected, because closed doors let hydrogen build up. The note keeps 'connected' and asks for the equipment.",
            },
          },
          {
            no: 7,
            answer: "goggles",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Wear the gloves and the goggles stored in the yellow box" }],
              explanation:
                "Inside the painted lines the rule comes from the yellow box: wear the gloves and the goggles stored there. The note keeps 'gloves' and needs the eye protection that sits beside them.",
            },
          },
          {
            no: 8,
            answer: "trolleys",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 1, paragraph: 1, quote: "travel only on the trolleys provided, never in open containers" }],
              explanation:
                "Chemicals live in the bunded store and travel only on the trolleys provided, never in open containers. The note keeps the travel verb and asks for the carrier named in the same clause.",
            },
          },
          {
            no: 9,
            answer: "metres",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "ear defenders are mandatory within two metres of either machine" }],
              explanation:
                "The noise rule is a distance: ear defenders are mandatory within two metres of either compactor, and the zone is marked with white discs. The note keeps 'two' and needs the unit that follows it.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "upright", partOfSpeech: "noun", definition: "one of the vertical posts of the racking; damaged uprights are reported, never straightened." },
      { word: "gangway", partOfSpeech: "noun", definition: "the walking lane between the storage racks; spill kits hang at the ends of the gangways." },
      { word: "bunded", partOfSpeech: "adjective", definition: "built with a surrounding wall to catch leaks; the chemicals live in the bunded store." },
      { word: "granules", partOfSpeech: "noun", definition: "the coarse powder in a spill kit that soaks up liquid." },
      { word: "defenders", partOfSpeech: "noun", definition: "short for ear defenders; mandatory within two metres of the compactors." },
    ],
    passageNote:
      "Safety handbooks give every rule an owner, a place and a size. The verdict items test the edges of the bans — who, where, and how big — while the notes collect the kit and the distances.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // 4 — The family cycling scheme (community scheme leaflet) ----------------
  {
    slug: "ielts-rb-gt-cycling-scheme",
    title: "The family cycling scheme",
    variant: "gt",
    section: 2,
    subject: "community scheme leaflet",
    topic: "society",
    difficulty: 2,
    estimatedMinutes: 12,
    objective:
      "Read a community leaflet for offers, eligibility and the rules of the day: what is free, who qualifies, and what the conditions are.",
    intro: "Read the leaflet below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Ride Further — what your family gets",
        paragraphs: [
          "Ride Further is a council scheme that helps families with children to cycle together instead of taking the car on short trips. Every Saturday morning from ten to twelve, trained instructors run free sessions at the park cycling hub: balance-bike games for four- to six-year-olds, off-road skills for seven to elevens, and route planning for teenagers moving onto quiet roads. Adults can join a parallel course of subsidised lessons in confident road riding — six sessions for the price of two, with a helmet and a bright jacket lent to you for the course.",
          "Who can join. The scheme is open to families living in the borough with children aged four to sixteen. Each family group needs at least one adult for every two children, and that adult stays with the group for the whole session. There is no charge for children's sessions; the adult course costs £12, remitted in full for families on low incomes — tick the box on the booking form and no proof is needed at this stage. Places are limited to twenty families each term, and the waiting list moves quickly in the spring.",
        ],
      },
      {
        heading: "Booking and taking part",
        paragraphs: [
          "Booking and bikes. Book online through the council page; a confirmation email arrives within a day. If you do not own a bike, borrow one at the hub — we hold forty adult and child machines, checked over each Friday evening by our Dr Bike volunteer. A refundable deposit of £5 is held per borrowed bike and returned when the machine comes back with its lock. Helmets can be borrowed too, in sizes from toddler upwards, though we cannot promise a colour.",
          "On the day. Under-16s must wear helmets whenever they ride — no helmet, no session, and the instructors check at the gate. Adults are strongly encouraged to do the same, and every instructor sets the example. Family groups stay on the marked practice loops during sessions; the instructors lead a short park ride only in dry weather. If heavy rain is forecast, sessions are called off by 8 am and a message goes to the booking page, so check it before you set out. Bikes borrowed for the morning must be back at the hub by half past twelve.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "sentence-completion",
        label: "Questions 1–4",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the leaflet for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "1. Sessions run every" }, { kind: "blank", no: 1 }, { kind: "text", text: "morning from ten to twelve at the park cycling hub." }],
          [{ kind: "text", text: "2. The adult course costs £12 but is remitted for families on low" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "3. Each borrowed bike carries a refundable" }, { kind: "blank", no: 3 }, { kind: "text", text: "of £5." }],
          [{ kind: "text", text: "4. If heavy rain is forecast, a cancellation message goes to the" }, { kind: "blank", no: 4 }, { kind: "text", text: "page by 8 am." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "Saturday",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Every Saturday morning from ten to twelve, trained instructors run free sessions at the park cycling hub" }],
              explanation:
                "The sessions run every Saturday morning from ten to twelve at the park cycling hub. The sentence keeps 'morning from ten to twelve' and asks for the day of the week that opens the leaflet.",
            },
          },
          {
            no: 2,
            answer: "incomes",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "the adult course costs £12, remitted in full for families on low incomes" }],
              explanation:
                "The adult course costs £12, remitted in full for families on low incomes — tick the box, and no proof is needed at this stage. The sentence keeps 'low' and needs the noun it measures.",
            },
          },
          {
            no: 3,
            answer: "deposit",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "A refundable deposit of £5 is held per borrowed bike" }],
              explanation:
                "Borrowed bikes take a refundable deposit of £5, returned when the machine comes back with its lock. The sentence keeps 'refundable' and asks for the money arrangement named in the same clause.",
            },
          },
          {
            no: 4,
            answer: "booking",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "sessions are called off by 8 am and a message goes to the booking page" }],
              explanation:
                "In heavy rain the sessions are called off by 8 am and a message goes to the booking page, which is why families are told to check before setting out. The sentence keeps 'page' and needs its qualifier.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 5–9",
        instruction:
          "Do the following statements agree with the information given in the leaflet? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Children may ride without a helmet if their parents agree.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 1, quote: "Under-16s must wear helmets whenever they ride — no helmet, no session, and the instructors check at the gate" }],
              explanation:
                "The helmet rule for riders under sixteen is printed as absolute: no helmet, no session, and the instructors check at the gate. No parental consent clause exists anywhere in the leaflet, so the statement contradicts it.",
            },
          },
          {
            text: "Every adult taking part must wear a helmet.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [
                { block: 1, paragraph: 1, quote: "Under-16s must wear helmets whenever they ride" },
                { block: 1, paragraph: 1, quote: "Adults are strongly encouraged to do the same, and every instructor sets the example" },
              ],
              explanation:
                "The leaflet separates the two rules carefully: under-16s must wear helmets, while adults are strongly encouraged to do the same. 'Must' turns encouragement into law, which the text never does for adults.",
              trap: {
                family: "extreme-language",
                note: "Helmets appear three times in the same paragraph, but only one of those mentions carries the word 'must'.",
              },
              whyWrong: ["TRUE: 'strongly encouraged' is advice, not compulsion — the must rule is printed for riders under sixteen only."],
            },
          },
          {
            text: "One adult may accompany up to two children.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Each family group needs at least one adult for every two children" }],
              explanation:
                "The ratio is one adult for every two children, and that adult stays with the group for the whole session. 'Up to two children' is the same ratio read from the children's side of it.",
            },
          },
          {
            text: "Sessions are cancelled when heavy rain is forecast.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 1, paragraph: 1, quote: "If heavy rain is forecast, sessions are called off by 8 am" }],
              explanation:
                "The weather rule is plain: if heavy rain is forecast, sessions are called off by 8 am and the message goes to the booking page. 'Cancelled' paraphrases 'called off', and the deadline makes the promise checkable.",
            },
          },
          {
            text: "The scheme has reduced car journeys in the borough.",
            answer: "NOT GIVEN",
            lure: "TRUE",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "helps families with children to cycle together instead of taking the car on short trips" }],
              explanation:
                "The leaflet opens with the scheme's aim — cycling together instead of taking the car on short trips. An aim is not a measurement; no figure for car journeys appears anywhere, so the claim is Not Given.",
              trap: {
                family: "mention-lure",
                note: "Car trips are mentioned in the first sentence, which reads like evidence; an aim stated in a mission line is not a reported outcome.",
              },
              whyWrong: ["TRUE: 'instead of taking the car on short trips' is the scheme's purpose, never a report of what has happened since it began."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "borough", partOfSpeech: "noun", definition: "the local council area; the scheme is open to families living in the borough." },
      { word: "subsidised", partOfSpeech: "adjective", definition: "partly paid for with public money; adults pay for two of six lessons." },
      { word: "deposit", partOfSpeech: "noun", definition: "a sum held as security and returned later; £5 per borrowed bike." },
      { word: "helmet", partOfSpeech: "noun", definition: "the hard head protection riders wear; under-16s must wear one whenever they ride." },
      { word: "instructor", partOfSpeech: "noun", definition: "the trained person who leads a session; every instructor sets the helmet example." },
    ],
    passageNote:
      "Leaflets sell the scheme first and set its conditions afterwards. Every question turns on one qualifier: strongly encouraged against must, at least one adult per two children, called off by 8 am.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // 5 — Library membership terms and conditions (service terms) -------------
  {
    slug: "ielts-rb-gt-library-terms",
    title: "Library membership terms and conditions",
    variant: "gt",
    section: 2,
    subject: "service terms",
    topic: "culture",
    difficulty: 3,
    estimatedMinutes: 14,
    objective:
      "Read service terms for limits and exceptions: what a member may borrow, reserve and use, and what any of it costs.",
    intro: "Read the terms and conditions below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Joining, borrowing and returning",
        paragraphs: [
          "Joining. Membership is free to anyone who lives, works or studies in the county; bring one proof of address and a photo ID to any branch, or register online and collect your card the next day. Under-18s need a parent or guardian to sign the form. Cards expire after three years and are renewed on the spot at any desk. Tell us at once if your card is lost or stolen: the named holder is responsible for everything borrowed on the card up to the moment it is reported, and a replacement card costs £1.",
          "Borrowing and overdue items. Adults may borrow up to twenty items at a time and keep them for three weeks; children's tickets carry fifteen. Renewals are free and can be made twice online or by phone, as long as nobody else has reserved the item. Overdue notices go out by email after seven days, and borrowing stops until the items come back — children's items carry no overdue charges at all, and adult charges stop at £6 per item. Long-lost items are billed at the replacement price after eight weeks, and the bill is cancelled if the item turns up within a year.",
          "Reserving items. Any item on loan can be reserved from the catalogue for free; you may hold two reservations at a time, and each one waits at the desk for a week after we email you. The reservation fee is waived for large-print and spoken-word editions — ask staff to place those for you. If what you want is not in the catalogue, fill in a stock request form: we buy what we can, and when we cannot, we try to borrow a copy from a neighbouring county for a £2 inter-library charge.",
        ],
      },
      {
        heading: "The e-library and the building",
        paragraphs: [
          "The e-library. Your card number and a four-digit PIN open the e-library: e-books, e-magazines and streamed language courses, all free and all returning themselves on the due date. Downloads work offline, so reading continues on the bus, and the app remembers where you stopped. The e-library never closes and never charges late fees; if a title is unavailable, reserve it in the app and you will be emailed when a copy is returned.",
          "In the building. Please keep drinks in lidded cups away from the computers, and set phones to silent in the reading rooms. Reference-only items — the local history collection and today's newspapers — stay in the building; ask at the desk about photographing pages for study. Two-hour study rooms can be booked free at the desk or online. We welcome babies and buggies; noisy play, however, belongs in the children's corner, and the staff will always point you somewhere a crying baby is welcome.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction: "The terms have five sections, A–E. Which section contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        options: ["A", "B", "C", "D", "E"],
        items: [
          {
            text: "the charge made when a membership card is replaced",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "a replacement card costs £1" }],
              explanation:
                "Section A carries the card money: the named holder is responsible for everything borrowed on the card until it is reported, and a replacement card costs £1. The charge and its amount live there.",
            },
          },
          {
            text: "the limit on how many items an adult may have out at once",
            correct: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Adults may borrow up to twenty items at a time and keep them for three weeks" }],
              explanation:
                "Section B sets the adult ceiling at twenty items at a time for three weeks, with children's tickets carrying fifteen. 'How many items an adult may have out at once' is the ceiling in plainer words.",
            },
          },
          {
            text: "a fee that is dropped for certain formats",
            correct: 2,
            lure: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "The reservation fee is waived for large-print and spoken-word editions" }],
              explanation:
                "Section C is where a fee is dropped: the reservation fee is waived for large-print and spoken-word editions. Section D is the lure — the e-library never charges late fees, but that is a different fee being dropped in a different place.",
              trap: {
                family: "mention-lure",
                note: "Section D also drops a charge — late fees on downloads — but the statement asks about formats, and formats are printed editions.",
              },
              whyWrong: ["D: the e-library's dropped charges are late fees on downloads, not reservation fees on large-print and spoken-word editions."],
            },
          },
          {
            text: "materials that may not be taken home",
            correct: 4,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "Reference-only items — the local history collection and today's newspapers — stay in the building" }],
              explanation:
                "Section E names what stays: reference-only items — the local history collection and today's newspapers — stay in the building, with the desk arranging photographs for study instead.",
            },
          },
          {
            text: "how to keep reading when the library is shut",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 1, paragraph: 0, quote: "Downloads work offline, so reading continues on the bus, and the app remembers where you stopped" }],
              explanation:
                "Section D is the answer to closed doors: the e-library never closes, downloads work offline on the bus, and the app remembers where you stopped. 'Shut' is the paraphrase of 'never closes'.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 6–9",
        instruction:
          "Do the following statements agree with the views of the writer of the terms and conditions? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "There are no overdue charges on items borrowed by children.",
            answer: "YES",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "children's items carry no overdue charges at all, and adult charges stop at £6 per item" }],
              explanation:
                "Section B states it outright: children's items carry no overdue charges at all, while adult charges stop at £6 per item. The statement agrees with the children's half of that sentence.",
            },
          },
          {
            text: "Members must pay to reserve an item from the catalogue.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "Any item on loan can be reserved from the catalogue for free" }],
              explanation:
                "Catalogue reservations are free, two at a time. The only money in that section is the £2 inter-library charge for copies the county does not hold, which is borrowing from elsewhere, not reserving from the catalogue.",
              trap: {
                family: "mention-lure",
                note: "A £2 charge really does appear in the reservations section, but it belongs to a different service from the one the statement names.",
              },
              whyWrong: ["YES: the £2 inter-library charge is for copies borrowed from a neighbouring county — a different service from reserving from the catalogue."],
            },
          },
          {
            text: "E-books return themselves and never run up late fees.",
            answer: "YES",
            meta: {
              skills: ["detail"],
              evidence: [
                { block: 1, paragraph: 0, quote: "all free and all returning themselves on the due date" },
                { block: 1, paragraph: 0, quote: "The e-library never closes and never charges late fees" },
              ],
              explanation:
                "The e-library paragraph makes the promise twice: everything is free and returns itself on the due date, and the service never charges late fees. The statement bundles both halves into one claim.",
            },
          },
          {
            text: "The library is planning to extend its opening hours.",
            answer: "NOT GIVEN",
            lure: "YES",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "The e-library never closes and never charges late fees" }],
              explanation:
                "The passage describes the e-library as never closing and says nothing at all about the branches' hours or any plan to extend them. A plan that is never mentioned can be neither agreed with nor contradicted.",
              trap: {
                family: "boundary",
                note: "'Never closes' sits one sentence away, which pulls candidates towards YES; it describes the online service today, not a plan for the buildings.",
              },
              whyWrong: ["YES: 'never closes' is a description of the online service as it is — it is not a promise about the buildings and not a plan to change anything."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "renewals", partOfSpeech: "noun", definition: "extensions of a loan period; free twice, unless someone else has reserved the item." },
      { word: "overdue", partOfSpeech: "adjective", definition: "later than the due date; notices go out by email after seven days." },
      { word: "reservation", partOfSpeech: "noun", definition: "a hold placed on an item on loan; two may be held at a time, for free." },
      { word: "reference-only", partOfSpeech: "adjective", definition: "for use inside the building only; the local history collection and today's newspapers." },
      { word: "PIN", partOfSpeech: "noun", definition: "a four-digit number that, with the card number, opens the e-library." },
    ],
    passageNote:
      "Terms and conditions run on numbers and exceptions — free but, up to, as long as. Each verdict item turns on one of those qualifiers rather than on the topic words.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // 6 — Allotment rules and guidance (council guidance) ---------------------
  {
    slug: "ielts-rb-gt-allotment",
    title: "Allotment rules and guidance",
    variant: "gt",
    section: 2,
    subject: "council guidance",
    topic: "environment",
    difficulty: 3,
    estimatedMinutes: 14,
    objective:
      "Read council allotment guidance for its thresholds: cultivation shares, structure heights, watering hours and bonfire days.",
    intro: "Read the rules below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Your plot",
        paragraphs: [
          "Rent and cultivation. The yearly rent is £35 a plot, due on 1 October, and a plot may be handed back at any time with a month's notice. At least half of the plot must be under cultivation by the first of June — grass paths count, but a plot left mainly to weeds will receive a first warning and, two months later, a notice to quit. Sub-letting is not allowed, and the tenant named on the agreement must be the person who mainly works the plot. The site shop's seed sales hold the rent down, so please use it.",
          "Sheds and structures. You may put up a shed, a greenhouse or a fruit cage within the size limit — one structure per plot, with a floor area no greater than four square metres. Anything taller than 1.5 metres needs the written agreement of the allotment officer before building starts, and no part of any structure may shade a neighbour's beds. Concrete is out: sheds must sit on soil or on slabs laid loose, so the plot can be returned clear when the tenancy ends. Fruit trees may be planted only on dwarfing rootstock, and never along the northern edge, where they would shade half a plot.",
        ],
      },
      {
        heading: "Water, fires and waste",
        paragraphs: [
          "Water. The site taps are fed from a metered supply, so use a watering can wherever you can. Hand-held hoses may be used only in the evening, between seven and nine, and every hose must fit a trigger nozzle that stops the flow when you let go. Sprinklers and soaking hoses are banned at all times, and the last person leaving must turn the taps off at the lockable valve. Most tenants fit a water butt to their shed gutter; the committee sells butts at cost, and a full one carries a plot through a dry week.",
          "Fires and waste. Bonfires are permitted on the first Sunday of the month, between sunrise and dusk, and only for dry plant matter that cannot be composted — painted or treated timber, plastics and rubbish must go home in your own bin. A bonfire must be attended the whole time, with a fork or a can of water to hand. Everything compostable goes on the communal heaps at the top of the site: weeds, spent crops and autumn leaves, layered with the straw the shop gives away. Taking soil away from the site is not allowed.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "true-false-not-given",
        label: "Questions 1–5",
        instruction:
          "Do the following statements agree with the information given in the rules? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "At least half of each plot must be cultivated by early June.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "At least half of the plot must be under cultivation by the first of June" }],
              explanation:
                "The cultivation rule is dated: at least half of the plot must be under cultivation by the first of June, with grass paths counting towards it. 'Early June' paraphrases 'the first of June'.",
            },
          },
          {
            text: "Hoses may be used at any time of day.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "Hand-held hoses may be used only in the evening, between seven and nine" }],
              explanation:
                "The water paragraph restricts hoses twice: hand-held only, and only in the evening between seven and nine. 'At any time of day' removes both limits at once, so the statement contradicts the rule.",
              trap: {
                family: "extreme-language",
                note: "Hoses genuinely may be used — the ban is on sprinklers — but 'at any time' strips the evening-only window the rule sets.",
              },
              whyWrong: ["TRUE: the rule is doubly restricted — hand-held only, and evenings only, between seven and nine."],
            },
          },
          {
            text: "A structure taller than 1.5 metres needs the officer's written agreement before building starts.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Anything taller than 1.5 metres needs the written agreement of the allotment officer before building starts" }],
              explanation:
                "The structures paragraph sets the threshold exactly: anything taller than 1.5 metres needs the written agreement of the allotment officer before building starts. The statement copies the rule with the height attached.",
            },
          },
          {
            text: "Every structure, whatever its size, requires the officer's written agreement.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "You may put up a shed, a greenhouse or a fruit cage within the size limit" }],
              explanation:
                "Within the size limit a tenant may put up a shed, a greenhouse or a fruit cage without asking; agreement is triggered by height, not by structures as such. 'Whatever its size' sweeps away the threshold the text is careful to set.",
              trap: {
                family: "extreme-language",
                note: "The words 'written agreement' really do appear — but only above the height threshold, which 'every structure' abolishes.",
              },
              whyWrong: ["NOT GIVEN: the text does answer the question directly — agreement turns on the height threshold, so the statement contradicts it rather than escaping it."],
            },
          },
          {
            text: "The council plans to raise the yearly rent.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "The yearly rent is £35 a plot, due on 1 October" }],
              explanation:
                "The passage states the rent and its due date and says nothing about any change to it. Rises and freezes are equally unmentioned, which is exactly the case Not Given exists for.",
              trap: {
                family: "boundary",
                note: "A rent figure is printed, which feels like an answer; a stated current price says nothing about next year's plans.",
              },
              whyWrong: ["FALSE: the current rent and its due date are stated, but nothing anywhere speaks about a change — an unmentioned plan is Not Given."],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "table-completion",
        label: "Questions 6–9",
        instruction: "Complete the table below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the rules for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Allotment rules at a glance" }],
          [{ kind: "text", text: "Water" }, { kind: "text", text: "Hand-held hoses only, in the" }, { kind: "blank", no: 6 }, { kind: "text", text: ", seven to nine." }],
          [{ kind: "text", text: "Structures" }, { kind: "text", text: "Maximum height without written agreement:" }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "Bonfires" }, { kind: "text", text: "Held on the first" }, { kind: "blank", no: 8 }, { kind: "text", text: "of the month, sunrise to dusk." }],
          [{ kind: "text", text: "Cultivation" }, { kind: "text", text: "Minimum share of the plot under cultivation by the first of June:" }, { kind: "blank", no: 9 }],
        ],
        blanks: [
          {
            no: 6,
            answer: "evening",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Hand-held hoses may be used only in the evening, between seven and nine" }],
              explanation:
                "The hose rule names its window: only in the evening, between seven and nine, with a trigger nozzle on every hose. The table keeps 'seven to nine' and needs the part of the day it belongs to.",
            },
          },
          {
            no: 7,
            answer: "1.5 metres",
            alternatives: ["1.5 m", "1.5m"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Anything taller than 1.5 metres needs the written agreement of the allotment officer" }],
              explanation:
                "The height threshold is printed exactly once: anything taller than 1.5 metres needs the written agreement of the allotment officer. The table's structures row asks for that number together with its unit.",
            },
          },
          {
            no: 8,
            answer: "Sunday",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "Bonfires are permitted on the first Sunday of the month, between sunrise and dusk" }],
              explanation:
                "Bonfires are permitted on the first Sunday of the month, between sunrise and dusk, and only for dry plant matter. The table keeps 'the first ... of the month' and asks for the day itself.",
            },
          },
          {
            no: 9,
            answer: "half",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "At least half of the plot must be under cultivation by the first of June" }],
              explanation:
                "The cultivation floor is a share: at least half of the plot under cultivation by the first of June, with grass paths counting. The table keeps 'minimum share' and needs the fraction it names.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "tenancy", partOfSpeech: "noun", definition: "the rental agreement for the plot; it ends with the plot returned clear." },
      { word: "nozzle", partOfSpeech: "noun", definition: "the fitting on the end of a hose; every hose must fit a trigger nozzle." },
      { word: "rootstock", partOfSpeech: "noun", definition: "the root part a fruit tree is grafted onto; dwarfing rootstock keeps trees small." },
      { word: "bonfire", partOfSpeech: "noun", definition: "an open fire for burning waste; permitted on the first Sunday of the month." },
      { word: "compost", partOfSpeech: "verb", definition: "to rot plant matter down into soil food; everything compostable goes on the communal heaps." },
    ],
    passageNote:
      "Council guidance pairs every permission with a threshold — a height, a date, an hour. The table collects the thresholds; the verdict items test the edges of the permissions.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
