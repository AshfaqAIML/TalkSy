/**
 * Academic passage library H (PROMPT 54 question-bank expansion, Academic
 * batch H).
 *
 * Eight further original Academic passages in the style of the IELTS Reading
 * test, each with a complete question set, per-item evidence, explanations,
 * why-wrong notes and a vocabulary glossary, and each mapped to one of the
 * unified question-bank topic domains.
 *
 *   ielts-rb-ac-crowds          — social physics,        section 3, advanced (d5)
 *   ielts-rb-ac-sleep-cultures  — anthropology,          section 2, standard (d3)
 *   ielts-rb-ac-desalination    — water engineering,     section 3, advanced (d4)
 *   ielts-rb-ac-rosetta         — archaeology,           section 2, advanced (d4)
 *   ielts-rb-ac-attention       — cognitive science,     section 3, advanced (d5)
 *   ielts-rb-ac-wildfire        — land management,       section 2, advanced (d4)
 *   ielts-rb-ac-queues          — sociology,             section 1, standard (d3)
 *   ielts-rb-ac-dyes            — history of chemistry,  section 3, advanced (d4)
 *
 * Every passage is original TalkSy practice material written in the style of
 * the test — never official IELTS examination content.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acadHExercises: ReadingExercise[] = [
  // ---------------------------------------------------------------------------
  // 1. Social physics — Section 3, advanced
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-crowds",
    title: "Tipping points: how crowds move",
    variant: "academic",
    section: 3,
    subject: "social physics",
    topic: "society",
    difficulty: 5,
    estimatedMinutes: 18,
    objective: "Follow a physical-science argument: why dense crowds change state abruptly, why compression rather than trampling kills, and how models and design keep flows below the danger thresholds.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Tipping points: how crowds move",
        paragraphs: [
          "Stand on a bridge above a busy railway concourse and you are watching a substance flow. Pedestrians pour down the stairways, divide around obstacles, eddy behind slow luggage and recombine into smooth streams with a regularity that nobody involved intends or notices. Observations of this kind, repeated since the 1960s, gave rise to a research field sometimes called social physics: the study of collective human behaviour using the mathematics of gases, liquids and granular materials. The individual walker is gloriously unpredictable; the crowd, somehow, is not.",
          "The field's raw material is footage. Overhead cameras at stations, stadiums and pilgrimage sites record thousands of trajectories per hour, and tracking software reduces each pedestrian to a moving point whose behaviour can be measured like a particle's. Among the first and most striking findings concerned two streams moving in opposite directions along the same corridor. Instead of dissolving into chaos, the streams sort themselves into lanes: a walker in the middle of a dense counterflow will find, within a few steps, that nearly everyone around them is heading the same way. Nobody plans the pattern; it emerges, and it keeps traffic moving where a shapeless scrum would jam.",
          "Density is the variable that matters most, and its effects arrive in steps rather than slopes. Below roughly two people per square metre, a crowd flows freely, each walker adjusting speed and angle without visible friction. Past a first threshold, the flow breaks into stop-and-go waves that roll backwards through the mass, as braking at the front compresses everyone behind. Past a second threshold, movement becomes turbulent: bodies jostle in every direction, and individuals lose the power to choose their own steps. Researchers describe these abrupt changes as phase transitions, borrowing the physics term for a sudden change of state, such as water snapping into ice.",
          "The transitions explain why crowd disasters are so sudden. Accounts of stadium and festival catastrophes describe crowds that were uncomfortable but stable one minute and lethal a few minutes later. Contrary to the popular imagination, trampling is rarely the killer; compression is. Under crushing pressure the chest cannot expand, a failure known as compression asphyxia, and victims can die standing upright without ever falling. The trigger is rarely a single panicked individual — more often it is simply a flow that crossed a threshold while the exits were still open.",
          "The physics analogy can be made literal in a model. A formulation published in the 1990s treats each pedestrian as a particle subject to forces: an attraction towards the destination, a repulsion from neighbours and walls, and a small random term standing in for individual choice. Run on a computer, the model reproduces the self-organised lanes of real corridors and, at bottlenecks such as doorways, the arching effect — bodies jamming into a wedge that seals the gap, much as grains of sugar arch above the neck of a funnel.",
          "The models earn their keep in design. Counter-intuitively, a wider exit is not always a safer one, because it invites denser approach flows; some engineers argue that an obstacle — a pillar placed a few metres upstream of a doorway — can raise throughput by interrupting the arching wedge before it seals. More common now is software that estimates crowd density from closed-circuit cameras in real time and raises an alarm before a threshold is crossed, buying stewards a few minutes to slow the inflow. Major events increasingly rehearse these systems as carefully as the fireworks.",
          "Researchers are also the first to admit the analogy's limits. People are not molecules: they anticipate, they read signage, they copy one another's fear, and they sometimes accelerate into danger rather than away from it. Physics therefore works best as a guardrail — a way of knowing how dense a crowd can safely become — rather than as a prophecy of what the crowd will actually do. A crowd is a substance with opinions, and the mathematics of flow is only the beginning of managing one.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction: "Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "paraphrase", "structure"],
              evidence: [{ block: 0, paragraph: 1, quote: "Instead of dissolving into chaos, the streams sort themselves into lanes" }],
              explanation: "Paragraph B is organised around one discovery: two opposing streams separate into lanes with nobody planning it. Heading ii paraphrases exactly that finding, turning 'sort themselves into lanes' into 'lanes that organise themselves'.",
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Researchers describe these abrupt changes as phase transitions" }],
              explanation: "Paragraph C walks density upwards through free flow, stop-and-go waves and turbulence, calling the abrupt changes phase transitions. Heading iii compresses that ladder into one line: small density rises, sudden changes of state.",
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Contrary to the popular imagination, trampling is rarely the killer; compression is." }],
              explanation: "Paragraph D explains crowd deaths, and its central correction is that compression, not trampling, kills. Heading iv ('Why crowds kill without trampling') lifts that correction without reusing its exact words.",
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            lure: 0,
            meta: {
              skills: ["skimming", "paraphrase", "structure"],
              evidence: [{ block: 0, paragraph: 4, quote: "treats each pedestrian as a particle subject to forces" }],
              explanation: "Paragraph E presents the computer model: each pedestrian becomes a particle subject to forces, which reproduces lanes and arching. Heading v names that modelling move precisely, so it is the paragraph's heading.",
              trap: { family: "mention-lure", note: "The unused heading about science borrowed from gases and grains echoes paragraph E's sugar-funnel comparison, but the borrowing itself is paragraph A's opening move." },
              whyWrong: ["i: gases, liquids and grains are named in paragraph A as the field's borrowed toolkit; paragraph E's job is the specific force model, not the borrowing."],
            },
          },
          {
            text: "Paragraph F",
            correct: 5,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Counter-intuitively, a wider exit is not always a safer one" }],
              explanation: "Paragraph F turns the models into design advice, and its opening word 'Counter-intuitively' signals advice that cuts against instinct — wider exits, pillars that help. Heading vi collects those examples under one idea.",
            },
          },
          {
            text: "Paragraph G",
            correct: 6,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 6, quote: "People are not molecules: they anticipate, they read signage" }],
              explanation: "Paragraph G is the concession: people are not molecules, they anticipate and copy fear, so the analogy has limits. Heading vii names exactly where the molecule comparison breaks down, which is the paragraph's whole job.",
            },
          },
        ],
        options: [
          "A science borrowed from gases and grains",
          "Filming crowds reveals lanes that organise themselves",
          "Small rises in density, sudden changes of state",
          "Why crowds kill without trampling",
          "Pedestrians as particles subject to forces",
          "Design lessons that cut against intuition",
          "Where the molecule analogy breaks down",
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 7–10",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "The writer's main point in the first paragraph is that",
            options: [
              "individual walkers are erratic, yet crowds behave with striking regularity",
              "railway stations are the best places to study pedestrian movement",
              "pedestrians coordinate their movements by conscious agreement",
              "crowd behaviour is too irregular for mathematical study",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "The individual walker is gloriously unpredictable; the crowd, somehow, is not." }],
              explanation: "Paragraph A closes on the founding contrast of the field: the gloriously unpredictable walker against the somehow regular crowd. That contrast, not any recommendation about research sites, is the paragraph's organising point.",
              trap: { family: "mention-lure", note: "Stations appear in the paragraph's opening image, which tempts candidates to promote an example into the main idea." },
              whyWrong: ["B: the station is only the opening scene; footage-gathering sites belong to paragraph B and are never ranked.", "C: the paragraph stresses that nobody involved intends or notices the pattern — the opposite of conscious agreement.", "D: the entire passage argues that collective behaviour is regular enough to measure and model."],
            },
          },
          {
            stem: "According to the passage, stop-and-go waves appear",
            options: [
              "once density passes a first threshold, but before turbulence sets in",
              "only after movement has already become turbulent",
              "when walkers divide themselves into opposing lanes",
              "when stewards close the exits to slow the inflow",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "structure"],
              evidence: [
                { block: 0, paragraph: 2, quote: "Past a first threshold, the flow breaks into stop-and-go waves that roll backwards through the mass" },
                { block: 0, paragraph: 2, quote: "Past a second threshold, movement becomes turbulent" },
              ],
              explanation: "Paragraph C ranks the states by density: free flow first, stop-and-go waves after the first threshold, and turbulence only past a second threshold. The waves therefore occupy the middle band of density, not the worst one.",
              trap: { family: "order", note: "Both states are described in the same paragraph; the item tests whether candidates keep the two thresholds in the right sequence." },
              whyWrong: ["B: turbulence belongs beyond the second threshold; the waves arrive earlier, at the first.", "C: lane formation happens in counterflows at lower density and is described in paragraph B.", "D: stewards slowing the inflow is a management measure from paragraph F, not a cause of the waves."],
            },
          },
          {
            stem: "Most deaths in crowd disasters, the passage says, result from",
            options: [
              "pressure on the chest that prevents victims from breathing",
              "trampling beneath a panicked rush of feet",
              "a single individual rushing towards the exits",
              "the collapse of barriers near the exits",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Under crushing pressure the chest cannot expand, a failure known as compression asphyxia" }],
              explanation: "Paragraph D states that trampling is rarely the killer and names the real mechanism: under crushing pressure the chest cannot expand — compression asphyxia. Option A paraphrases that mechanism, while the lure quotes the popular myth the paragraph dismisses.",
              trap: { family: "mention-lure", note: "Trampling does appear in the passage — but only to be ruled out as the usual explanation." },
              whyWrong: ["B: the passage explicitly says trampling is rarely the killer; compression is.", "C: the trigger is described as rarely a single panicked individual, and no deaths are attributed to one.", "D: no collapsing barriers are mentioned anywhere in the passage."],
            },
          },
          {
            stem: "What does the writer conclude about the physics of crowds?",
            options: [
              "it sets safety limits but cannot predict everything a crowd will do",
              "it has made human stewards unnecessary at major events",
              "it fails to reproduce real pedestrian behaviour in simulations",
              "it applies only to stadiums and pilgrimage sites",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "Physics therefore works best as a guardrail — a way of knowing how dense a crowd can safely become — rather than as a prophecy of what the crowd will actually do." }],
              explanation: "The closing paragraph gives physics the status of a guardrail — a way of knowing how dense a crowd can safely become — while denying it the power of prophecy. That is exactly a tool with limits, which option A restates.",
              whyWrong: ["B: paragraph F has stewards acting on the alarms the software raises; they are supported, not replaced.", "C: paragraph E reports that the model reproduces lanes and arching successfully, the opposite of failure.", "D: stations, stadiums and pilgrimage sites are listed as examples of one general behaviour, not the limits of it."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "concourse", partOfSpeech: "noun", definition: "a large open space inside a station or airport where crowds move and gather; the writer watches one from a bridge." },
      { word: "trajectories", partOfSpeech: "noun (plural)", definition: "the curved or winding paths that moving objects or people follow; cameras record thousands of them per hour." },
      { word: "turbulent", partOfSpeech: "adjective", definition: "moving irregularly and violently in many directions at once; crowds become turbulent past the second density threshold." },
      { word: "asphyxia", partOfSpeech: "noun", definition: "the state of being unable to breathe; compression asphyxia is how most crowd-disaster victims die." },
      { word: "arching", partOfSpeech: "noun", definition: "the jamming of bodies or grains into a wedge that seals the neck of a container; it blocks doorways as it blocks funnels." },
      { word: "stewards", partOfSpeech: "noun (plural)", definition: "people employed to manage crowds at events; density alarms buy them time to slow the inflow." },
    ],
    passageNote: "Hold on to the density ladder — free flow, stop-and-go waves, turbulence — because both question groups test where each threshold sits and what happens above it. The headings follow paragraphs B–G in order.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 2. Anthropology — Section 2, standard
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-sleep-cultures",
    title: "Sleep around the world",
    variant: "academic",
    section: 2,
    subject: "anthropology",
    topic: "culture",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Compare sleep across cultures: siestas, segmented nights, family beds, and how industrial time compressed humanity's many sleeping habits into one eight-hour block.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Sleep around the world",
        paragraphs: [
          "Ask a city office worker to describe a normal night's sleep and you will hear a familiar story: one long unbroken block, taken alone or in pairs, in a dark and silent room, ending at the sound of an alarm. Anthropologists who study sleep across cultures describe this pattern as one society's habit rather than human nature. Where people sleep, when, with whom and in how many installments varies enormously — and the industrial eight-hour night turns out to be the outlier rather than the rule. What follows is a short tour of the alternatives, from the midday siesta to the shared bed, and of the century that swept most of them away.",
          "The most familiar alternative is the midday nap. Across the Mediterranean, Latin America and much of South and East Asia, the long lunch and the shaded siesta were, until recently, the ordinary rhythm of the day, aligned with the hottest hours rather than the clock. In parts of Andalusia the afternoon pause could stretch to three hours, shops drawing their shutters while families ate and slept. The habit has physiological logic: a shallow dip in alertness in the early afternoon appears to be built into human biology, and many sleep researchers argue that a brief nap exploits that dip rather than fighting it.",
          "More surprising is the evidence that the single block itself is recent. A historian of pre-industrial Europe combed through hundreds of diaries, court records and medical texts and found a recurring pattern: a first sleep of a few hours, then an hour or more of quiet wakefulness — for prayer, conversation, sex or simply reflection — followed by a second sleep. Laboratory experiments in which volunteers lived for weeks without electric light reported something similar: rest arrived in two stretches with a calm interlude between. Sleep scientists suggest that under natural darkness, broken sleep may be the default setting of the species.",
          "Sleep also varies in its company. In Japan, babies traditionally sleep beside their mothers, sometimes for years, and the family bed remains the norm across much of the world; the Western infant's solitary crib strikes many societies as lonely to the point of cruelty. Anthropologists connect the arrangement to values: cultures that prize independence move children out early, while cultures that emphasise interdependence keep them close. Each side finds the other's custom remarkable, which is precisely the anthropological point.",
          "The compressed night, in other words, was manufactured. Gaslight lengthened the working evening; the electric bulb abolished it; factory shifts and the railway timetable imposed a common clock on towns that had kept time by the sun. Segmented sleep, which depends on a long dark period, had no room in the new schedule, and the midday nap fared little better: in several countries the statutory right to an afternoon break has been repealed or quietly ignored as urban work intensified. What biology had spaced out, industry squeezed together.",
          "None of this means the eight-hour night is a mistake; it means it is a choice, with jet lag, shift work and the retreat of the siesta among its costs. Sleep researchers increasingly treat the timing of sleep, governed by light and the hormone melatonin, as more consequential than its exact shape, and they advise fixing a wake-up time rather than a bedtime. The lesson of anthropology is modest but useful: when a magazine prescribes one correct way to sleep, it is describing one culture's answer to a question that every society has answered differently.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "true-false-not-given",
        label: "Questions 1–5",
        instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Shops in some Mediterranean regions traditionally closed during the afternoon.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "In parts of Andalusia the afternoon pause could stretch to three hours, shops drawing their shutters while families ate and slept." }],
              explanation: "Paragraph B describes Andalusia's afternoon pause, with shops drawing their shutters while families ate and slept. The statement's 'closed during the afternoon' paraphrases that detail, and 'some Mediterranean regions' matches 'parts of Andalusia'.",
            },
          },
          {
            text: "Historical records suggest that pre-industrial Europeans often woke during the night.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "A historian of pre-industrial Europe combed through hundreds of diaries, court records and medical texts" }],
              explanation: "Paragraph C's historian found the same pattern across diaries, court records and medical texts: a first sleep, an hour or more of wakefulness, then a second sleep. Records therefore do show night waking as the norm, making the statement TRUE.",
            },
          },
          {
            text: "The writer states that sleeping in one unbroken block is healthier than segmented sleep.",
            answer: "NOT GIVEN",
            lure: "TRUE",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "None of this means the eight-hour night is a mistake; it means it is a choice" }],
              explanation: "The writer defends the eight-hour night only as a choice with costs, never as a health ranking. No comparison of health value between the single block and segmented sleep appears anywhere, so the writer's opinion on that question cannot be known.",
              trap: { family: "boundary", note: "The writer says something positive about the eight-hour night — 'not a mistake' — which tempts candidates to upgrade it into a health claim." },
              whyWrong: ["TRUE: 'not a mistake' accepts the pattern without ranking it; acceptance is not a claim of superior health.", "FALSE: equally unsupported — the writer never says the block is less healthy either."],
            },
          },
          {
            text: "In Japan it is traditional for babies to sleep beside their mothers.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "In Japan, babies traditionally sleep beside their mothers, sometimes for years" }],
              explanation: "Paragraph D states the custom directly: in Japan babies traditionally sleep beside their mothers, sometimes for years, and the family bed remains the norm across much of the world. The statement lifts that sentence almost word for word.",
            },
          },
          {
            text: "Workers in every country have lost the legal right to an afternoon nap.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "in several countries the statutory right to an afternoon break has been repealed or quietly ignored" }],
              explanation: "Paragraph E locates the loss of the statutory afternoon break in several countries, not in every country. The statement's word 'every' widens a located detail, and a located detail that contradicts the statement makes it FALSE.",
              trap: { family: "extreme-language", note: "'Every' overstates 'in several countries' — the classic extreme word stretched over a passage-sized fact." },
              whyWrong: ["NOT GIVEN: the passage does state what happened to the statutory right, so the information exists — and its scope ('several') contradicts 'every'."],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "summary-completion",
        label: "Questions 6–10",
        instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Anthropology shows that the modern night is unusual. In hotter regions the day pauses for a midday 6" }, { kind: "blank", no: 6 }, { kind: "text", text: ". Pre-industrial sleepers rested in two blocks separated by a period of quiet 7" }, { kind: "blank", no: 7 }, { kind: "text", text: ". Sleeping alone is also unusual: where interdependence is valued, babies stay in the 8" }, { kind: "blank", no: 8 }, { kind: "text", text: " bed. Gaslight, factory shifts and the railway 9" }, { kind: "blank", no: 9 }, { kind: "text", text: " then compressed night rest into a single block. Researchers now regard the 10" }, { kind: "blank", no: 10 }, { kind: "text", text: " of sleep, controlled by light and melatonin, as more important than its shape." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "nap",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "The most familiar alternative is the midday nap." }],
              explanation: "Paragraph B introduces the midday nap as the familiar alternative to the single block. The summary keeps the adjective 'midday' and asks for the noun that completes the phrase in the passage.",
            },
          },
          {
            no: 7,
            answer: "wakefulness",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "then an hour or more of quiet wakefulness" }],
              explanation: "The pre-industrial pattern in paragraph C is a first sleep, then an hour or more of quiet wakefulness, then a second sleep. The summary keeps 'quiet' and needs the noun the passage attaches to it.",
            },
          },
          {
            no: 8,
            answer: "family",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "the family bed remains the norm across much of the world" }],
              explanation: "Paragraph D names the arrangement where interdependent cultures keep babies close: the family bed. The summary keeps 'bed' and asks for the adjective the passage places in front of it.",
            },
          },
          {
            no: 9,
            answer: "timetable",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "factory shifts and the railway timetable imposed a common clock on towns" }],
              explanation: "Paragraph E lists the agents of compression: gaslight, the electric bulb, factory shifts and the railway timetable. The summary names three of them and asks for the noun that completes the fourth.",
            },
          },
          {
            no: 10,
            answer: "timing",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Sleep researchers increasingly treat the timing of sleep, governed by light and the hormone melatonin, as more consequential than its exact shape" }],
              explanation: "The closing paragraph ranks the timing of sleep, governed by light and melatonin, above its exact shape. The summary reuses 'controlled by light and melatonin' and asks for the governing noun the researchers name.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "installments", partOfSpeech: "noun (plural)", definition: "the separate parts into which something is divided; the passage asks how many installments sleep comes in." },
      { word: "siesta", partOfSpeech: "noun", definition: "a rest or sleep taken in the early afternoon, especially in hot countries; once the ordinary rhythm of the Mediterranean day." },
      { word: "physiological", partOfSpeech: "adjective", definition: "relating to how the body works; the early-afternoon dip in alertness is a physiological fact." },
      { word: "interlude", partOfSpeech: "noun", definition: "a short period between two events; the calm interlude between the two stretches of natural sleep." },
      { word: "solitary", partOfSpeech: "adjective", definition: "alone, without company; the Western infant's solitary crib puzzles many societies." },
      { word: "melatonin", partOfSpeech: "noun", definition: "the hormone that helps time sleep to the cycle of light and darkness; researchers rank its timing above sleep's shape." },
    ],
    passageNote: "The passage tours alternatives culture by culture — the nap (B), the two sleeps (C), the company we keep (D) — before the industrial squeeze (E) and the closing verdict (F). Every answer lives in exactly one of those paragraphs.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 3. Water engineering — Section 3, advanced
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-desalination",
    title: "Drinking the sea",
    variant: "academic",
    section: 3,
    subject: "water engineering",
    topic: "technology",
    difficulty: 4,
    estimatedMinutes: 17,
    objective: "Follow an engineering explanation: how distillation gave way to reverse osmosis, what membranes and energy-recovery devices do, and where the energy and brine bills come due.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Drinking the sea",
        paragraphs: [
          "Every litre of seawater holds roughly thirty-five grams of dissolved salt, which makes it useless for drinking and ruinous for crops. For most of history the sea's saltiness was simply a fact to be lived with, and cities grew where rivers ran. That settlement logic is weakening. Driven by drought, falling groundwater and coastal population growth, dry regions from the Mediterranean to Australia and the Gulf have turned to the ocean itself, and desalination — stripping the salt out of seawater — by some estimates now supplies fresh water to hundreds of millions of people.",
          "The first industrial plants worked like kettles. Seawater was boiled, the vapour condensed on chilled pipes, and the salt stayed behind; refinements cascaded the process through successive chambers at falling pressure so that water flashed into steam without constant reheating. This thermal distillation is brutally energy-hungry, but it made sense where fuel was cheap and water was not, which is why its early strongholds were the oil-rich states of the Persian Gulf, several of which now depend on desalination for almost all their drinking water.",
          "The technology that changed the economics is reverse osmosis. Ordinary osmosis moves water through a membrane towards the saltier side; reverse osmosis fights the process, driving seawater at high pressure against a semi-permeable membrane whose pores admit water and reject dissolved salt. Roughly half of what enters emerges as fresh water — permeate, in the engineers' vocabulary — while the rest leaves as concentrated brine. Because that brine is still under pressure, energy-recovery devices transfer its push to incoming seawater, reclaiming much of the work the pumps did. Reverse osmosis now dominates new construction, and engineering reports suggest its energy use has fallen by more than half since the 1990s.",
          "Cheaper, however, is not the same as clean. Even the best plants need several kilowatt-hours of electricity for every cubic metre of fresh water, and where the grid burns gas or coal, every litre carries a hidden carbon cost. Some utilities now pair plants with renewable contracts — an Australian plant famous in the industry matches its draw against a wind farm — but marrying a constant flow to an intermittent source is its own engineering puzzle. Critics add that treating the sea as an infinite supply quietly licenses waste: the cheapest litre, several economists have noted, is the one never desalinated.",
          "The other bill is paid at the outfall. A plant that draws two tonnes of seawater returns about one tonne of brine roughly twice as salty as the sea, laced with the chemicals used to keep the membranes from fouling. Pumped back through a single pipe, that plume sinks along the seabed, and surveys of discharge zones report lower oxygen and damaged bottom-dwelling communities within a few hundred metres of the outlet. The harm is local rather than oceanic, but it is real, and it concentrates where plants cluster. Modern outfalls increasingly fit diffusers and high-velocity nozzles that scatter the brine into faster-moving water above.",
          "Cost, meanwhile, has fallen far enough to solve a city's crisis but not a farm's. On a dry coast, desalinated water can be a competitive source of household supply, yet agriculture takes the overwhelming share of water nearly everywhere, and no wheat or alfalfa field can pay desalination prices at scale. Where plants multiply, water markets bend around them: households and industry drink the sea while irrigation keeps mining aquifers — a division of labour that shifts scarcity rather than ending it.",
          "The sober position is neither dismissal nor enchantment. The sea is effectively inexhaustible; energy and brine are not free; and a plant standing idle between droughts is an expensive insurance policy. Planners who treat desalination as one instrument among several — alongside repaired pipes, water recycling and honest pricing — tend to spend less and risk less than those who reach for it first. Drinking the sea has become routine; the craft lies in knowing when to lift the glass.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "note-completion",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Desalination — study notes" }],
          [{ kind: "text", text: "• Early method: boiling seawater and condensing the vapour — thermal 1" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "• Modern method: seawater driven at high 2" }, { kind: "blank", no: 2 }, { kind: "text", text: " against a semi-permeable membrane" }],
          [{ kind: "text", text: "• Yield: about half arrives as fresh water; the rest leaves as concentrated 3" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "• Energy saving: recovery devices pass the brine's push on to 4" }, { kind: "blank", no: 4 }, { kind: "text", text: " seawater" }],
          [{ kind: "text", text: "• Outfall harm: limited by fitting 5" }, { kind: "blank", no: 5 }, { kind: "text", text: " that scatter the discharge" }],
          [{ kind: "text", text: "• Overall role: an expensive 6" }, { kind: "blank", no: 6 }, { kind: "text", text: " for the dry years, not an everyday source" }],
        ],
        blanks: [
          {
            no: 1,
            answer: "distillation",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "This thermal distillation is brutally energy-hungry, but it made sense where fuel was cheap and water was not" }],
              explanation: "Paragraph B names the early method thermal distillation — boiling seawater and condensing the vapour in successive chambers. The note keeps the adjective 'thermal' and asks for the noun that follows it in the passage.",
            },
          },
          {
            no: 2,
            answer: "pressure",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "driving seawater at high pressure against a semi-permeable membrane whose pores admit water and reject dissolved salt" }],
              explanation: "Reverse osmosis, paragraph C explains, works by driving seawater at high pressure against a semi-permeable membrane. The note keeps the membrane detail and asks for the noun the pumps supply.",
            },
          },
          {
            no: 3,
            answer: "brine",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "while the rest leaves as concentrated brine" }],
              explanation: "The engineers' vocabulary names the salty remainder: roughly half of the intake becomes fresh water and the rest leaves as concentrated brine. The note's missing noun comes straight from that clause of paragraph C.",
            },
          },
          {
            no: 4,
            answer: "incoming",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "energy-recovery devices transfer its push to incoming seawater, reclaiming much of the work the pumps did" }],
              explanation: "Because the brine leaves the membranes still under pressure, energy-recovery devices transfer its push to the incoming seawater. The note keeps 'seawater' and asks for the adjective the passage attaches to it.",
            },
          },
          {
            no: 5,
            answer: "diffusers",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "Modern outfalls increasingly fit diffusers and high-velocity nozzles that scatter the brine into faster-moving water above" }],
              explanation: "Paragraph E names the hardware that limits the discharge damage: diffusers and high-velocity nozzles fitted to modern outfalls. The note keeps the idea of scattering and asks for the fittings themselves.",
            },
          },
          {
            no: 6,
            answer: "insurance",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "a plant standing idle between droughts is an expensive insurance policy" }],
              explanation: "The closing paragraph likens an idle plant to an expensive insurance policy — cover for the dry years rather than an everyday source. The note reuses the metaphor and asks for its noun.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 7–10",
        instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "Thermal plants were a sensible choice for countries with abundant cheap fuel.",
            answer: "YES",
            meta: {
              skills: ["paraphrase", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "it made sense where fuel was cheap and water was not" }],
              explanation: "Paragraph B concedes that although thermal distillation is brutally energy-hungry, it made sense where fuel was cheap and water was not — hence its Gulf strongholds. The statement paraphrases that concession, so it agrees with the writer's view.",
            },
          },
          {
            text: "Reverse osmosis now uses less energy than any other way of producing fresh water.",
            answer: "NOT GIVEN",
            lure: "YES",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "engineering reports suggest its energy use has fallen by more than half since the 1990s" }],
              explanation: "The passage compares reverse osmosis only with its own past and, implicitly, with thermal distillation. It never ranks reverse osmosis against every other way of producing fresh water — recycling is discussed as cheaper, not as more or less energy-hungry — so the writer's view on the ranking cannot be known.",
              trap: { family: "extreme-language", note: "'Any other way' stretches a comparison the passage never makes; falling energy use is not a world record claim." },
              whyWrong: ["YES: the passage praises reverse osmosis only relative to distillation and to its own history, never against all methods.", "NO: nothing contradicts the statement either — the ranking is simply never attempted."],
            },
          },
          {
            text: "In the writer's view, desalinated water is generally too expensive for irrigation at scale.",
            answer: "YES",
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "no wheat or alfalfa field can pay desalination prices at scale" }],
              explanation: "Paragraph F states that cost has fallen far enough to solve a city's crisis but not a farm's, and that no wheat or alfalfa field can pay desalination prices at scale. The statement restates that verdict, so it agrees with the writer's view.",
            },
          },
          {
            text: "Brine discharges have destroyed fisheries along entire coastlines.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "The harm is local rather than oceanic, but it is real" }],
              explanation: "Paragraph E states the scale of the damage plainly: lower oxygen and damaged bottom-dwelling communities within a few hundred metres of the outlet — harm that is local rather than oceanic. A claim of destruction along entire coastlines contradicts that measured scope.",
              trap: { family: "extreme-language", note: "'Entire coastlines' inflates damage the passage deliberately confines to a few hundred metres." },
              whyWrong: ["NOT GIVEN: the passage does state the scale of the harm, so the information exists — and its confined scope contradicts the statement."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "distillation", partOfSpeech: "noun", definition: "purifying a liquid by boiling it and condensing the vapour; the first industrial desalination method." },
      { word: "permeate", partOfSpeech: "noun", definition: "the engineers' name for the fresh water that passes through a reverse-osmosis membrane; roughly half of what enters." },
      { word: "brine", partOfSpeech: "noun", definition: "water that is extremely salty; the concentrated waste a desalination plant returns to the sea." },
      { word: "fouling", partOfSpeech: "noun", definition: "the build-up of deposits that clogs a membrane; plants dose chemicals to keep membranes from fouling." },
      { word: "outfall", partOfSpeech: "noun", definition: "the place where waste water is discharged, or the pipe that carries it; the brine bill is paid at the outfall." },
      { word: "diffusers", partOfSpeech: "noun (plural)", definition: "devices fitted to outfalls that scatter a discharge into the surrounding water instead of concentrating it in one plume." },
    ],
    passageNote: "Two running costs structure the whole argument — energy and brine. The notes walk the technology in paragraph order; the verdict items then police the passage's carefully hedged claims about scope and price.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 4. Archaeology — Section 2, advanced
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-rosetta",
    title: "The Rosetta Stone's afterlife",
    variant: "academic",
    section: 2,
    subject: "archaeology",
    topic: "history",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Read the biography of an object: a dull priestly decree that became the key to hieroglyphs, a museum celebrity and a common metaphor — and now a dispute about ownership.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "The Rosetta Stone's afterlife",
        paragraphs: [
          "There is a joke hiding inside the British Museum's most visited object. The Rosetta Stone's fame rests on what it allowed scholars to do, not on what it says — and what it says is administrative tedium. The text is a decree issued by an assembly of Egyptian priests in 196 BC, affirming the royal cult of the young Ptolemy V: essentially a tax-and-temple arrangement dressed in flattering language. Its importance was never the message. It was the medium — one text copied out in three scripts, two of which no living person could read when the slab was dug up.",
          "The stone's early biography is well worn. In the summer of 1799, French soldiers rebuilding a fort near the Nile mouth at Rosetta — Rashid in Arabic — prised a cracked slab of granodiorite from an old wall. Officers sent it to scholars in Cairo, and ink impressions of its three scripts soon circulated in Europe. Two years later the French army in Egypt capitulated, and under the terms of the Alexandria surrender the stone passed to the British, who presented it to the British Museum. It has stood there, with brief interruptions, since 1802.",
          "The decipherment that followed has become a legend of rivalry. The Greek text could simply be read, and it revealed the key fact: all three scripts carried the same decree. Thomas Young, a British polymath, made the first inroads, showing that the groups of signs ringed by an oval outline — cartouches — enclosed royal names, and that some signs within them worked alphabetically, spelling out the name Ptolemy. It was a French scholar, Jean-François Champollion, who in 1822 leapt from that foothold to the whole system. Hieroglyphs, he argued, were neither pure picture-writing nor a pure alphabet but a hybrid, mixing sound-signs and meaning-signs, capable of rendering any Egyptian sentence, not just foreign names. A civilisation three thousand years silent began to speak.",
          "Once read, the stone settled into a quieter afterlife as an exhibit. It has been on near-continuous public display for more than two centuries and has become one of the most visited, most photographed objects in any museum. A painted inscription along one side, added after its capture, records its transfer to the British crown — a label the victors fixed to the vanquished slab. During the First World War, when aircraft first menaced London, the stone was carried down into a disused postal railway tunnel fifty feet beneath the city and stored there for two years beside other national treasures.",
          "Meanwhile the name detached itself from the object. 'A Rosetta stone' is now a common noun in many languages for any bilingual key that unlocks an unreadable code — applied to undeciphered scripts, to genome databases, to the wiring diagrams of brains, and, half-jokingly, to anything that translates between two closed worlds. Few artefacts have crossed so completely from museum catalogue to vocabulary. There is an irony here that linguists enjoy: the phrase survives as a metaphor precisely because the original job was finished. A key that fitted no remaining lock would never have earned the name.",
          "The afterlife has also grown contested. Egyptian archaeologists and ministers have repeatedly requested the stone's return — at minimum a loan to anchor the opening of the country's new museums — and public feeling in Egypt treats the slab as a touchstone of cultural restitution. The museum answers that the transfer was lawful under a treaty, that the stone anchors a universal collection, and that its fragility makes travel unwise. Both positions are argued with conviction, and neither side shows much sign of movement. The object has become an exhibit in a second debate, about ownership, that no decipherment can settle.",
          "And the story keeps accruing quiet additions. Casts, replicas and high-resolution scans now circulate freely, so that a text once traded between empires is available to any schoolchild with a phone. The slab itself waits behind glass, doing what it has done since 1802: carrying a dull decree in one live script and two dead ones, for anyone patient enough to learn the difference. The message turned out to be ordinary. The afterlife, so far, is not.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "sentence-completion",
        label: "Questions 1–5",
        instruction: "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        wordLimit: 3,
        layout: [
          [{ kind: "text", text: "1. The stone carries the same decree in three scripts, one of them ancient " }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "2. Young showed that oval-ringed groups of signs called " }, { kind: "blank", no: 2 }, { kind: "text", text: " enclose royal names." }],
          [{ kind: "text", text: "3. Champollion argued that hieroglyphs were a hybrid, mixing sound-signs and " }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. The decree's contents amounted to a tax-and-temple arrangement agreed by an assembly of " }, { kind: "blank", no: 4 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "5. During the First World War, the stone was stored in a disused postal railway " }, { kind: "blank", no: 5 }, { kind: "text", text: " beneath London." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "Greek",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "The Greek text could simply be read, and it revealed the key fact: all three scripts carried the same decree" }],
              explanation: "Paragraph C names the readable script: the Greek text, whose translation revealed that all three scripts carry the same decree. The sentence keeps 'three scripts' and asks for the one scholars could already read.",
            },
          },
          {
            no: 2,
            answer: "cartouches",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "the groups of signs ringed by an oval outline — cartouches — enclosed royal names" }],
              explanation: "Paragraph C gives the technical name for the oval-ringed groups of signs: cartouches, which enclosed royal names. The sentence reuses the description and asks for the term the passage defines inside its dashes.",
            },
          },
          {
            no: 3,
            answer: "meaning-signs",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "a hybrid, mixing sound-signs and meaning-signs" }],
              explanation: "Champollion's claim in paragraph C is that hieroglyphs form a hybrid mixing sound-signs and meaning-signs. The sentence keeps 'sound-signs and' and asks for the partner term, which appears verbatim in the passage.",
            },
          },
          {
            no: 4,
            answer: "Egyptian priests",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "a decree issued by an assembly of Egyptian priests in 196 BC" }],
              explanation: "Paragraph A identifies the decree's authors: an assembly of Egyptian priests, meeting in 196 BC. The sentence keeps 'an assembly of' and asks for the group that issued the tax-and-temple arrangement.",
            },
          },
          {
            no: 5,
            answer: "tunnel",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "the stone was carried down into a disused postal railway tunnel fifty feet beneath the city" }],
              explanation: "Paragraph D records the wartime precaution: the stone was carried into a disused postal railway tunnel fifty feet beneath the city and stored there for two years. The sentence keeps 'disused postal railway' and needs the final noun.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "matching-information",
        label: "Questions 6–9",
        instruction: "The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "the progress towards the code achieved by the two rival scholars",
            correct: 2,
            meta: {
              skills: ["scanning", "structure"],
              evidence: [{ block: 0, paragraph: 2, quote: "Thomas Young, a British polymath, made the first inroads" }],
              explanation: "Paragraph C is the decipherment paragraph: Young's first inroads through the cartouches, then Champollion's leap to the whole system in 1822. The statement's 'two rival scholars' points straight at that pairing.",
            },
          },
          {
            text: "the way the stone became the property of Britain",
            correct: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "under the terms of the Alexandria surrender the stone passed to the British" }],
              explanation: "Paragraph B covers the handover: the French capitulation in Egypt and the Alexandria surrender terms under which the stone passed to the British, who presented it to the British Museum. That is the ownership story the statement asks for.",
            },
          },
          {
            text: "uses of the stone's name that have nothing to do with Egypt",
            correct: 4,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "applied to undeciphered scripts, to genome databases, to the wiring diagrams of brains" }],
              explanation: "Paragraph E follows the name into other fields — genome databases, brain wiring diagrams, anything that translates between closed worlds. The statement's 'nothing to do with Egypt' matches those non-Egyptian borrowings.",
            },
          },
          {
            text: "the museum's reasons for keeping the stone in London",
            correct: 5,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "The museum answers that the transfer was lawful under a treaty, that the stone anchors a universal collection, and that its fragility makes travel unwise" }],
              explanation: "Paragraph F gives the museum's three answers to the return requests: lawful transfer under a treaty, the universal collection, and the fragility of the object. The statement asks for exactly that side of the dispute.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F", "G"],
      },
      {
        id: "q3",
        type: "multiple-choice",
        label: "Questions 10–11",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "In the first paragraph, the writer's main point is that the stone's value lies in",
            options: [
              "what it made possible, not in what it actually says",
              "the beauty of its carved hieroglyphic inscription",
              "the tax-and-temple information it preserves for historians",
              "the mystery of how it survived being broken",
            ],
            correct: 0,
            lure: 2,
            meta: {
              skills: ["skimming", "opinion"],
              evidence: [{ block: 0, paragraph: 0, quote: "The Rosetta Stone's fame rests on what it allowed scholars to do, not on what it says — and what it says is administrative tedium." }],
              explanation: "Paragraph A opens with the joke: the fame rests on what the stone allowed scholars to do, while the text itself is administrative tedium. Option A restates that contrast between usefulness and content, which is the paragraph's organising idea.",
              trap: { family: "mention-lure", note: "The tax-and-temple arrangement is quoted from the passage — but as the tedium the fame does not rest on." },
              whyWrong: ["B: the paragraph never praises the carving or mentions beauty; the appeal is textual, not artistic.", "C: the tax-and-temple content is named only to be dismissed as administrative tedium.", "D: the crack in the slab is mentioned in paragraph B as biography, never as a mystery or a source of value."],
            },
          },
          {
            stem: "The writer's view of the dispute over the stone's ownership is that",
            options: [
              "Egypt has already agreed to leave the stone in London permanently",
              "the museum has promised a long-term loan to the new museums",
              "both sides argue with conviction and the deadlock continues",
              "the dispute is really about where the stone was excavated",
            ],
            correct: 2,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "Both positions are argued with conviction, and neither side shows much sign of movement." }],
              explanation: "Paragraph F reports the requests from Egypt and the museum's answers, then sums up: both positions are argued with conviction and neither side shows much sign of movement. The writer's verdict is a continuing deadlock, which option C restates.",
              whyWrong: ["A: the passage says Egyptian officials keep requesting return or loan — no agreement is reported.", "B: the loan is what Egypt requests at minimum; the museum's answer is refusal on fragility grounds.", "D: the location of excavation is settled history in paragraph B; the dispute concerns ownership, not archaeology."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "decree", partOfSpeech: "noun", definition: "an official order or decision issued by an authority; the stone carries a priestly decree of 196 BC." },
      { word: "granodiorite", partOfSpeech: "noun", definition: "a hard, coarse-grained igneous rock; the material of the cracked slab prised from the wall." },
      { word: "capitulated", partOfSpeech: "verb (past)", definition: "surrendered to an enemy on stated terms; the French army in Egypt capitulated in 1801." },
      { word: "polymath", partOfSpeech: "noun", definition: "a person of wide learning across many fields; Thomas Young, physician and physicist, was one." },
      { word: "cartouches", partOfSpeech: "noun (plural)", definition: "oval outlines enclosing royal names in Egyptian inscriptions; Young first broke ground inside them." },
      { word: "restitution", partOfSpeech: "noun", definition: "the return of something to its rightful owner; in Egypt the slab is a touchstone of cultural restitution." },
    ],
    passageNote: "A biography in seven stages: the joke about the message (A), discovery and transfer (B), the two rivals (C), the exhibit and its wartime exile (D), the metaphor (E), the ownership dispute (F), the quiet present (G). Both location questions and the completions follow that map.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 5. Cognitive science — Section 3, advanced
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-attention",
    title: "The task-switching brain",
    variant: "academic",
    section: 3,
    subject: "cognitive science",
    topic: "science",
    difficulty: 5,
    estimatedMinutes: 18,
    objective: "Follow a cognitive-science argument: what switch costs and task-sets are, what the multitasker studies really found, and why interruption is expensive far beyond the laboratory.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "The task-switching brain",
        paragraphs: [
          "The modern working day presents itself as a juggling act. Messages arrive while a report is half-drafted; a call interrupts a calculation; every open browser tab lodges a small claim on the mind. Most people feel that they are doing several things at once, and the feeling is sincere. Cognitive science has spent three decades testing that feeling, and the results are uncomfortable: the brain gives a convincing impression of parallel processing while doing something much closer to rapid serial traffic.",
          "The central measurement is the switch cost. In a typical experiment, volunteers alternate between two simple judgements — whether a number is odd or even, and whether it is larger or smaller than five — sometimes in blocks, sometimes unpredictably. The result is among the most replicated in psychology: responses immediately after a switch are slower and more error-prone than responses to the same task performed in an unbroken block, even when the change is announced in advance and the volunteer has seconds to prepare. Knowing that a switch is coming does not abolish the toll of switching.",
          "The explanation is that each task carries a mental rulebook. Psychologists call it a task-set: the goal, the relevant information, the key mappings, the criterion for finishing. Switching tasks means rebuilding the rulebook, and the rebuilding is never instant. Traces of the old set linger — researchers call this task-set inertia — so the first attempts at a new task are contaminated by the previous one, like the first corner taken in a borrowed car. Each individual cost is measured in milliseconds, but a normal working day may contain hundreds of switches.",
          "An influential study published in 2009 reported a further twist. University students who described themselves as heavy media multitaskers, keeping many streams open at once out of habit, performed worse on tests of task-switching and filtering than lighter users — not better, as common boasts would predict. The finding travelled far, usually stripped of its caution. Later attempts to replicate it have produced a patchier picture, and the original authors themselves were careful to note correlation rather than cause: it remains unclear whether juggling screens erodes focus, whether more distractible people simply drift towards richer streams, or both.",
          "A related effect follows the switcher into the next job. Studies of attention residue report that after switching away from an unfinished task, part of a person's processing remains occupied with it: the unresolved project keeps intruding, draining capacity from the task now officially in hand. Unfinished business, in this account, is not merely a worry but a running tax. The effect explains a familiar experience — reading the same paragraph three times while mentally drafting an unanswered email.",
          "Outside the laboratory the stakes rise. Field studies of office work report that once interrupted, people often take well over twenty minutes to return to the original task, having detoured through several others on the way. Driving research points the same way: phone conversations measurably impair reaction times, and hands-free kits remove the handheld phone but not the load, because the competition is for attention rather than hands. The interruption economy, critics argue, is not a nuisance but a safety problem wearing a friendly interface.",
          "The practical advice is unfashionable rather than clever. Grouping similar tasks into batches reduces the number of rulebook changes; silencing alerts for defined stretches protects the deepest work; and finishing, or explicitly parking, a task before moving on appears to shrink its residue. Some roles genuinely demand rapid alternation — emergency dispatchers and air-traffic control build their procedures around it — but they achieve it through checklists and handovers rather than heroic multitasking. On the current evidence, the brain is a serial machine in a parallel costume, and the skills worth training are the ones that respect the machinery.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "summary-completion",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Laboratory work shows a reliable dip in speed and accuracy when people 1" }, { kind: "blank", no: 1 }, { kind: "text", text: " between tasks instead of working in blocks. Every task depends on a mental rulebook, or task 2" }, { kind: "blank", no: 2 }, { kind: "text", text: ", which must be rebuilt after each change, and the lingering traces of the previous rulebook are known as task-set 3" }, { kind: "blank", no: 3 }, { kind: "text", text: ". A widely reported 2009 study found that heavy media 4" }, { kind: "blank", no: 4 }, { kind: "text", text: " performed worse at switching than lighter users, although later replications were mixed. When someone moves on from unfinished work, part of their attention stays behind — an effect called attention 5" }, { kind: "blank", no: 5 }, { kind: "text", text: ". Useful countermeasures include grouping similar tasks into 6" }, { kind: "blank", no: 6 }, { kind: "text", text: " and silencing alerts for fixed periods." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "alternate",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "responses immediately after a switch are slower and more error-prone than responses to the same task performed in an unbroken block" }],
              explanation: "Paragraph B reports the core finding: responses right after a switch are slower and more error-prone than the same task performed in an unbroken block. The summary's 'dip in speed and accuracy' paraphrases that, and the missing verb is the one the experiment uses — alternate.",
            },
          },
          {
            no: 2,
            answer: "set",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "Psychologists call it a task-set: the goal, the relevant information, the key mappings, the criterion for finishing." }],
              explanation: "Paragraph C names the mental rulebook a task-set, defined as the goal, the relevant information, the key mappings and the criterion for finishing. The summary keeps 'task' and asks for the second half of the term the psychologists coined.",
            },
          },
          {
            no: 3,
            answer: "inertia",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "Traces of the old set linger — researchers call this task-set inertia" }],
              explanation: "The lingering traces of the abandoned rulebook have their own name in paragraph C: task-set inertia, which contaminates the first attempts at the new task. The summary keeps 'task-set' and asks for the noun that completes the term.",
            },
          },
          {
            no: 4,
            answer: "multitaskers",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "University students who described themselves as heavy media multitaskers" }],
              explanation: "Paragraph D reports the 2009 finding about heavy media multitaskers — students keeping many streams open out of habit — who performed worse on switching and filtering tests than lighter users. The summary asks for the group's name in the passage.",
            },
          },
          {
            no: 5,
            answer: "residue",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "Studies of attention residue report that after switching away from an unfinished task, part of a person's processing remains occupied with it" }],
              explanation: "Paragraph E names the effect of unfinished work tagging along: attention residue, the part of a person's processing that stays occupied with the abandoned task. The summary keeps 'attention' and asks for the noun the studies use.",
            },
          },
          {
            no: 6,
            answer: "batches",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 6, quote: "Grouping similar tasks into batches reduces the number of rulebook changes" }],
              explanation: "The final paragraph's first remedy is grouping similar tasks into batches, which reduces the number of rulebook changes. The summary keeps 'grouping similar tasks into' and asks for the noun the passage completes it with.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 7–9",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "What is meant by a switch cost?",
            options: [
              "the slowing and extra errors seen immediately after a change of task",
              "the warning volunteers receive before a task changes",
              "the payment made to volunteers in switching experiments",
              "the advantage gained by practising one task in a block",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "responses immediately after a switch are slower and more error-prone than responses to the same task performed in an unbroken block" }],
              explanation: "Paragraph B defines the switch cost through its measurement: responses immediately after a switch are slower and more error-prone than the same task in a block. Option A paraphrases that definition in plain words, and even announcing the switch does not abolish it.",
              trap: { family: "mention-lure", note: "The advance warning is mentioned in the same sentence — but as something that fails to remove the cost, not as the cost itself." },
              whyWrong: ["B: the announcement is the condition the experiment controls for; it does not remove the toll being measured.", "C: no payment to volunteers is mentioned anywhere in the passage.", "D: block performance is the baseline against which the cost is measured, not the cost itself."],
            },
          },
          {
            stem: "How does the passage present the 2009 study of media multitaskers?",
            options: [
              "as decisive proof that screens damage concentration",
              "as an influential finding whose interpretation remains unsettled",
              "as an experiment on office workers rather than students",
              "as a study that found no differences between user groups",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "Later attempts to replicate it have produced a patchier picture" }],
              explanation: "Paragraph D calls the study influential and reports its finding, but immediately adds the caution: replications are patchier, the authors noted correlation rather than cause, and the direction of the link remains unclear. That is a striking finding held open, not a settled proof.",
              trap: { family: "attribution", note: "The causal reading belongs to the popular retellings that stripped the caution away, not to the researchers who did the work." },
              whyWrong: ["A: the passage explicitly says correlation rather than cause; the causal claim is the distorted version that travelled.", "C: the participants were university students, as the paragraph states.", "D: the study did report differences; it is the later replications that produced a patchier picture."],
            },
          },
          {
            stem: "In the final paragraph, the writer suggests that interruption-heavy professions stay safe by",
            options: [
              "selecting people whose attention splits naturally",
              "building checklists and handovers into their procedures",
              "bidding for longer recovery periods after each interruption",
              "training staff to multitask heroically under pressure",
            ],
            correct: 1,
            lure: 3,
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "they achieve it through checklists and handovers rather than heroic multitasking" }],
              explanation: "The final paragraph names dispatching and air-traffic control as roles that genuinely demand rapid alternation, then says they achieve it through checklists and handovers rather than heroic multitasking. Option B lifts that mechanism; the lure quotes the very phrase the writer rejects.",
              trap: { family: "mention-lure", note: "'Heroic multitasking' appears verbatim — as the approach the writer says these professions avoid." },
              whyWrong: ["A: no natural selection of splittable attention is mentioned; the passage credits procedures, not personnel.", "C: recovery periods are never proposed for these roles.", "D: the writer's point is precisely that these professions succeed without heroic multitasking."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "task-set inertia", partOfSpeech: "noun phrase", definition: "the lingering traces of a just-abandoned task's rulebook, which contaminate the first attempts at the next task." },
      { word: "multitaskers", partOfSpeech: "noun (plural)", definition: "people who habitually handle several activities or media streams at once; the heavy ones performed worse in the 2009 study." },
      { word: "replicate", partOfSpeech: "verb", definition: "to repeat an experiment to check whether its result holds; later replications of the 2009 study were patchier." },
      { word: "residue", partOfSpeech: "noun", definition: "what remains behind after something is removed; attention residue is the share of the mind left on an unfinished task." },
      { word: "criterion", partOfSpeech: "noun", definition: "the standard on which a judgement or decision is based; part of every task-set is the criterion for finishing." },
      { word: "dispatchers", partOfSpeech: "noun (plural)", definition: "staff who coordinate emergency responses by radio and telephone; their procedures are built for rapid alternation." },
    ],
    passageNote: "Every question hangs on the field's vocabulary — switch cost, task-set, inertia, residue — so locate each term's definition sentence first. The summary is assembled from those definitions in passage order, and the multiple choice polices the passage's hedges.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 6. Land management — Section 2, advanced
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-wildfire",
    title: "Learning to live with fire",
    variant: "academic",
    section: 2,
    subject: "land management",
    topic: "environment",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Read a land-management argument: how a century of suppression backfired, what fire does for ecosystems, and how managers now reintroduce mild fire instead of banning it.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Learning to live with fire",
        paragraphs: [
          "For much of the twentieth century, the world's land agencies shared a single motto: put it out. Fires were enemies to be extinguished by ten o'clock the following morning wherever they started, and public campaigns taught generations of park visitors that any flame in a forest was a failure. The doctrine was briefly triumphant — and then, ecologists now argue, it quietly made the problem worse. Excluding fire from landscapes that had evolved with it did not remove fire; it postponed the burning, and it changed what there was to burn.",
          "Fire, in many of the world's forests, grasslands and shrublands, is not an accident but a habit of the ecosystem. Some pine cones are sealed with resin and open only when heat passes through; some grasses flower best after a burn; ash releases nutrients that seedlings queue to use. Frequent, mild fires creep along the ground, clearing litter without killing the canopy. When suppression keeps flames out for decades, the litter accumulates, shade-tolerant seedlings crowd in, and the fuel load builds until the fire that finally arrives runs hot enough to reach the crowns. The quiet years, in other words, were the preparation.",
          "The longest evidence against blanket suppression is older than the agencies themselves. Indigenous peoples on several continents have lit cool, patchy burns for many thousands of years — in chosen seasons, at chosen hours, to open pathways, manage game, protect settlements and regenerate food plants. In Australia this practice, sometimes called fire-stick farming, was curtailed by colonial authorities, who banned Aboriginal and settler burning alike. The consequences are now openly acknowledged: country that had been kept open and grassy grew dense and hazardous, and with the dense scrub went both safety and a living tradition of land knowledge.",
          "Today's land managers call the practice prescribed burning: fire lit deliberately, under mild weather, consuming accumulated fuel at a chosen intensity. The complications are practical rather than philosophical. The window of safe conditions — cool enough, damp enough, wind light enough — narrows as the climate warms; smoke drifting into towns draws complaints and, occasionally, lawsuits; and a small number of prescribed burns have escaped their boundaries, each escape undermining public trust for a decade. Managers must therefore weigh a modest, controlled risk against an uncontrolled one that grows with every deferred year.",
          "A further frontier is the place where houses meet the trees. At the wildland-urban interface, planners now insist on defensible space — cleared zones around buildings — and on construction details such as ember-resistant roofing and screened vents, because most homes ignite not from walls of flame but from wind-blown embers settling in gutters and under eaves. Evacuation planning has become as central as suppression itself: in several fire-prone regions, the standing advice has shifted from stay-and-defend to leave early, because residents who wait too long block the roads for everyone.",
          "Extreme fire behaviour has forced the deepest rethinking. Under severe drought and wind, large fires can generate their own weather — columns of smoke and heat that condense into storm clouds, throwing out lightning and violent local gusts. Once a fire begins to make its own wind, suppression is, in one fire researcher's blunt phrase, off the table. Such events are becoming more frequent, and their cost is the reason the twentieth century's promise — that engineering could banish fire from flammable landscapes — is rarely repeated aloud.",
          "The emerging doctrine stitches the threads together: reintroduce good fire where it can be handled, prepare communities where it cannot, treat fuels continuously rather than in emergencies, and return burning to the people who practised it longest. Some jurisdictions have begun restoring limited Indigenous burning rights, though restrictions still bind in many places. Fire agencies themselves now use the phrase learning to live with fire — an admission that the question is not whether a landscape will burn, but when, how hot, and on whose terms.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-features",
        label: "Questions 1–4",
        instruction: "Look at the following statements and the list of people and groups below. Match each statement with the correct person or group. You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "Ordered that every fire be extinguished quickly, wherever it started.",
            correct: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Fires were enemies to be extinguished by ten o'clock the following morning wherever they started" }],
              explanation: "The deadline policy belongs to the twentieth century's land agencies, whose motto paragraph A reports as 'put it out'. Matching features is attribution work: the question is who held the policy, not merely where fire is discussed.",
            },
          },
          {
            text: "Used fire itself as a tool of land care over many generations.",
            correct: 0,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Indigenous peoples on several continents have lit cool, patchy burns for many thousands of years" }],
              explanation: "Paragraph C credits Indigenous peoples with the longest practice: cool, patchy burns lit for many thousands of years to open pathways, manage game and regenerate food plants. The statement paraphrases that use of fire as a tool.",
            },
          },
          {
            text: "Warned that excluding flames ultimately makes the eventual fire worse.",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "The doctrine was briefly triumphant — and then, ecologists now argue, it quietly made the problem worse" }],
              explanation: "Paragraph A attaches the verdict to the ecologists: suppression, they argue, quietly made the problem worse, and paragraph B explains the mechanism — fuel loading towards crown fire. The statement paraphrases that warning.",
            },
          },
          {
            text: "Must weigh a small, planned risk against a larger deferred one.",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Managers must therefore weigh a modest, controlled risk against an uncontrolled one that grows with every deferred year" }],
              explanation: "Paragraph D ends with the managers' dilemma: weighing a modest, controlled risk against an uncontrolled one that grows with every deferred year. The statement paraphrases that calculation, which the passage assigns to today's land managers.",
            },
          },
        ],
        options: [
          "Indigenous fire practitioners",
          "Suppression-era land agencies",
          "Fire ecologists",
          "Present-day land managers",
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 5–9",
        instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Twentieth-century fire policy reduced the severity of the fires that eventually occurred.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "the fuel load builds until the fire that finally arrives runs hot enough to reach the crowns" }],
              explanation: "The passage's whole argument is the reverse: suppression postponed burning while fuel accumulated, so the eventual fire runs hot enough to reach the crowns. A located, explicit reversal of the statement makes it FALSE.",
              trap: { family: "boundary", note: "Candidates who remember only 'fewer fires' drift to Not Given; the passage states the eventual severity plainly." },
              whyWrong: ["NOT GIVEN: the information does exist — quiet years were the preparation, and the fuel load builds until the delayed fire reaches the crowns — so the claim is contradicted, not absent."],
            },
          },
          {
            text: "Some pine cones only release their seeds after fire has passed.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Some pine cones are sealed with resin and open only when heat passes through" }],
              explanation: "Paragraph B states that some pine cones are sealed with resin and open only when heat passes through — that is, fire's heat is the trigger for them to open and shed their seeds. The statement paraphrases that dependency, so it is TRUE.",
            },
          },
          {
            text: "A few deliberately lit burns have got out of control.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "a small number of prescribed burns have escaped their boundaries" }],
              explanation: "Paragraph D concedes that a small number of prescribed burns have escaped their boundaries, with each escape undermining public trust for a decade. The statement's 'deliberately lit' matches 'prescribed', and 'got out of control' matches 'escaped their boundaries'.",
            },
          },
          {
            text: "Most houses at the wildland-urban interface are destroyed by advancing walls of flame.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "most homes ignite not from walls of flame but from wind-blown embers settling in gutters and under eaves" }],
              explanation: "Paragraph E states the ignition routes directly: most homes ignite not from walls of flame but from wind-blown embers settling in gutters and under eaves. The statement reverses that sentence, so the information exists and contradicts it.",
              trap: { family: "mention-lure", note: "'Walls of flame' appears in the passage — inside the very sentence that denies it is the usual cause." },
              whyWrong: ["NOT GIVEN: the passage does state the cause of most home ignitions, so the claim is contradicted rather than unstated."],
            },
          },
          {
            text: "Prescribed burning costs more than mechanically thinning forests.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "Managers must therefore weigh a modest, controlled risk against an uncontrolled one that grows with every deferred year" }],
              explanation: "Paragraph D compares a modest, controlled risk with an uncontrolled, deferred one — a comparison of risk, not of money. Mechanical thinning is never mentioned, and no price is put on either method, so the costing claim cannot be judged.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "suppression", partOfSpeech: "noun", definition: "the act of putting a stop to something; fire suppression meant extinguishing every blaze by a deadline." },
      { word: "canopy", partOfSpeech: "noun", definition: "the upper layer of branches and leaves in a forest; mild fires clear litter without killing it." },
      { word: "curtailed", partOfSpeech: "verb (past)", definition: "reduced or cut short; colonial authorities curtailed Indigenous burning." },
      { word: "defensible space", partOfSpeech: "noun phrase", definition: "a cleared zone maintained around a building to slow a fire's approach; now required at the wildland-urban interface." },
      { word: "embers", partOfSpeech: "noun (plural)", definition: "small glowing fragments blown from a fire; the usual cause of house ignitions, landing in gutters and under eaves." },
      { word: "fuel load", partOfSpeech: "noun phrase", definition: "the amount of burnable material standing in a landscape; it builds during decades of suppression." },
    ],
    passageNote: "Track who claims what: the agencies wanted every fire out, the ecologists explain the fuel debt, Indigenous practitioners model good fire, and today's managers weigh risks against each other. The features set tests exactly that attribution, and the verdict items sit on the paragraph claims.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 7. Sociology — Section 1, standard
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-queues",
    title: "Please wait here: the sociology of queues",
    variant: "academic",
    section: 1,
    subject: "sociology",
    topic: "society",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Read an accessible sociology text: why queues work without law, why jumping them provokes moral anger, and how design and technology reshape the waiting line.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Please wait here: the sociology of queues",
        paragraphs: [
          "Every day, in banks and bakeries, airports and clinics, human beings perform a small act of invisible cooperation: they form a queue. Nobody drafted a law requiring it; no official supervises it. A painted line on the floor and a sign asking customers to wait their turn are all the equipment involved — and people submit to an arrangement that keeps them standing still, often for many minutes. Sociologists find the queue fascinating precisely because it works without force. It is a contract that everyone honours and nobody signs, and the pages that follow look at its fairness rule, its psychology, its design and its price.",
          "The contract's central clause is fairness: first come, first served. The queue is one of the few institutions that treats a bank manager and a student identically, and people defend it fiercely. Experiments and everyday observation agree on the result: someone who joins at the front provokes anger far out of proportion to the minutes involved, and bystanders who lose nothing personally will still challenge a queue-jumper they have never met. The anger, researchers suggest, is about the rule rather than the delay — a violation of the moral order, not merely of the schedule.",
          "Psychologists of waiting have established that time in a queue is elastic. Unoccupied time feels longer than occupied time; anxiety stretches it further; and a wait of unknown length is harder to bear than one with a visible end. This is why theme parks post signs announcing the wait from each point in the line, why lifts have mirrors, and why a restaurant that hands out menus in the doorway has already softened the delay ahead. Operators cannot always shorten the wait, but they can reliably shorten the experience of it.",
          "Design changes the mathematics as well as the mood. A single serpentine line feeding several counters — now standard at airports and banks — is statistically fairer than a queue for each till, because nobody is punished for picking the slow lane, and the particular irritation of watching a neighbour overtake disappears. The numbered ticket goes further and dissolves the line altogether: customers take a place in the sequence and are then free to sit, browse or run an errand while the numbers climb on a screen. The queue becomes virtual; only the order survives.",
          "Markets, however, keep testing the queue's egalitarian promise. Priority boarding, fast passes and business-class lanes sell the front of the line to those who can pay, and the sight of a late arrival strolling past a long queue has become a small recurring theatre of air travel. Defenders answer that such schemes fund better service for everyone; critics see the quiet conversion of a shared norm into a private asset. Priority for disabled travellers and families with small children, by contrast, is widely accepted as fair — evidence, students of the subject suggest, that queueing rules are judgements about desert, not just arithmetic.",
          "Digital systems are now dissolving the queue's physical form — appointments, callbacks, phone-based virtual lines — but not its logic: the sequence survives, only the standing is optional. And the queue keeps its oldest role as a moral stage. Travellers' accounts have long read an orderly line as a portrait of a healthy society and a collapsing queue as a portrait of collapse. Waiting, it turns out, is one of the things a community does together — and one of the things it is judged by.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–5",
        instruction: "Choose the correct heading for paragraphs B–F from the list of headings below. Write the correct number, i–vi, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 1,
            lure: 0,
            meta: {
              skills: ["skimming", "paraphrase", "structure"],
              evidence: [{ block: 0, paragraph: 1, quote: "someone who joins at the front provokes anger far out of proportion to the minutes involved" }],
              explanation: "Paragraph B is organised around the defence of the fairness rule: disproportionate anger at queue-jumpers and intervention by bystanders who lose nothing. Heading ii names that moral fury, which is the paragraph's real subject.",
              trap: { family: "mention-lure", note: "The unused heading about unforced cooperation suits paragraph A; paragraph B is about defending the rule, not forming it." },
              whyWrong: ["i: cooperation without force is paragraph A's opening idea — the queue forming at all — while paragraph B concerns the fury when the rule is broken."],
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "a wait of unknown length is harder to bear than one with a visible end" }],
              explanation: "Paragraph C is the psychology of perceived waiting: unoccupied time drags, anxiety stretches, unknown waits hurt most — and operators exploit all three with signs, mirrors and menus. Heading iii compresses that whole idea into one line.",
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "A single serpentine line feeding several counters" }],
              explanation: "Paragraph D presents two design solutions: the single serpentine line feeding several counters, and the numbered ticket that dissolves the line. Heading iv ('One line, many counters') names the first and signals the design theme that organises the paragraph.",
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "Priority boarding, fast passes and business-class lanes sell the front of the line to those who can pay" }],
              explanation: "Paragraph E is about money buying position: priority boarding, fast passes and business-class lanes, against the accepted fairness of disability priority. Heading v names that market testing of the queue's promise, which is the paragraph's organising contrast.",
            },
          },
          {
            text: "Paragraph F",
            correct: 5,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 5, quote: "the sequence survives, only the standing is optional" }],
              explanation: "Paragraph F carries the queue into digital systems — appointments, callbacks, virtual lines — while insisting the logic survives: the sequence endures, only the standing is optional. Heading vi names exactly that survival of the old rule in a new medium.",
            },
          },
        ],
        options: [
          "A daily act of unforced cooperation",
          "Moral fury at those who cheat",
          "Making a wait feel shorter than it is",
          "One line, many counters",
          "When priority can be bought",
          "An old rule in a new medium",
        ],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–10",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. The queue's basic promise of fairness is the principle of first come, first " }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "7. Anger at queue-jumping is far out of proportion to the " }, { kind: "blank", no: 7 }, { kind: "text", text: " involved." }],
          [{ kind: "text", text: "8. Theme parks post signs giving the expected " }, { kind: "blank", no: 8 }, { kind: "text", text: " from each point in the line." }],
          [{ kind: "text", text: "9. With a numbered ticket, customers are free to sit, " }, { kind: "blank", no: 9 }, { kind: "text", text: " or run an errand." }],
          [{ kind: "text", text: "10. Critics object that paid priority turns a shared norm into a private " }, { kind: "blank", no: 10 }, { kind: "text", text: "." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "served",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "The contract's central clause is fairness: first come, first served." }],
              explanation: "Paragraph B states the fairness clause in a fixed phrase: first come, first served. The sentence reuses 'first come, first' and asks for the final word of the principle as the passage words it.",
            },
          },
          {
            no: 7,
            answer: "minutes",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "someone who joins at the front provokes anger far out of proportion to the minutes involved" }],
              explanation: "The passage measures the disproportion in minutes: anger far out of proportion to the minutes involved. The sentence keeps 'far out of proportion to the' and asks for the noun that follows it.",
            },
          },
          {
            no: 8,
            answer: "wait",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "theme parks post signs announcing the wait from each point in the line" }],
              explanation: "Paragraph C explains the signs: they announce the wait from each point in the line, converting an unknown wait into one with a visible end. The sentence keeps 'from each point in the line' and asks for the announced quantity.",
            },
          },
          {
            no: 9,
            answer: "browse",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "customers take a place in the sequence and are then free to sit, browse or run an errand" }],
              explanation: "Paragraph D lists the freedoms a numbered ticket buys: to sit, browse or run an errand while the numbers climb. The sentence keeps two of the three verbs and asks for the middle one, straight from the list.",
            },
          },
          {
            no: 10,
            answer: "asset",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "critics see the quiet conversion of a shared norm into a private asset" }],
              explanation: "Paragraph E gives the critics' objection in one clause: the quiet conversion of a shared norm into a private asset. The sentence keeps 'shared norm into a private' and asks for the closing noun.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "serpentine", partOfSpeech: "adjective", definition: "winding back and forth like a snake; the single serpentine line feeds several counters fairly." },
      { word: "errand", partOfSpeech: "noun", definition: "a short journey made to do something useful; ticket holders are free to run one while they wait." },
      { word: "egalitarian", partOfSpeech: "adjective", definition: "treating everyone as equal; the queue makes an egalitarian promise that markets keep testing." },
      { word: "desert", partOfSpeech: "noun", definition: "what a person deserves; queueing rules are judgements about desert, not just arithmetic." },
      { word: "virtual", partOfSpeech: "adjective", definition: "existing in effect rather than physical form; a ticket system makes the queue virtual." },
      { word: "bystanders", partOfSpeech: "noun (plural)", definition: "people present but not directly involved; they will still challenge a queue-jumper they have never met." },
    ],
    passageNote: "An accessible concept tour: the fairness rule and its defence (B), the psychology of waiting (C), line design and tickets (D), priority markets (E), and digital queues (F). The headings follow that map, and every completion answer sits inside one clearly signposted sentence.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 8. History of chemistry — Section 3, advanced
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-rb-ac-dyes",
    title: "Ancient dyes, modern chemistry",
    variant: "academic",
    section: 3,
    subject: "history of chemistry",
    topic: "history",
    difficulty: 4,
    estimatedMinutes: 17,
    objective: "Follow a chemistry history: how snails, leaves, insects and roots produced the ancient palette, why a laboratory accident replaced them all, and how modern chemistry returns to the old molecules.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Ancient dyes, modern chemistry",
        paragraphs: [
          "For most of history, colour was expensive. Cloth dyed a deep, fast shade was a form of wealth that could be worn, taxed, gifted and forbidden, and the knowledge of how to produce it was guarded as closely as any trade secret. The dyers worked empirically, with recipes passed from master to apprentice: they knew what worked centuries before anyone could say why. Modern chemistry, reading back through those recipes, has found the ancient colour trades to be an unexpected laboratory.",
          "The extreme case was the purple of the ancient Mediterranean. It came not from a plant but from sea snails, whose glands yield a few drops of a colourless fluid that turns royal purple on exposure to air and sunlight. The process stank, and the yield was pitiless: by the usual estimates, thousands of snails went into a single gram of dye. Rome reserved the deepest shades for its highest officials, and the colour's price made the restriction almost self-enforcing. The industry died with the empire it dressed, and the secret of the molecule died with it — until 1909, when a chemist repeated the extraction at scale and identified the pigment as a brominated cousin of indigo.",
          "Indigo, the other great ancient colour, is a masterclass in practical chemistry. The dye is insoluble in water, so it cannot simply be washed into cloth. Instead, dyers ferment indigo leaves in a vat, where bacteria strip oxygen from the pigment and render it soluble and yellow-green. Cloth is dipped in this liquor and hauled out still green; as air re-oxidises the pigment on the fibres, the colour turns blue in front of the dyer's eyes. Europe grew its own blue in woad, a cabbage relative, and when tropical indigo arrived with a stronger colour, woad interests fought a long rearguard action of tariffs and bans to keep the import out.",
          "Reds came from beetles and roots. Cochineal, a scale insect farmed on prickly pear cactus in the Americas, yields a scarlet of astonishing intensity; after 1500 it crossed the oceans and became one of the pillars of colonial trade. Madder, grown across Europe and the Near East, gave a warmer, cheaper red that clothed armies — the British infantry coat owed its colour to madder root. Between them, the insect and the root supplied most of the red in the early modern world.",
          "Then, in 1856, an eighteen-year-old laboratory assistant working through a holiday at home in London tried to make quinine, a malaria medicine, from coal-tar waste — and produced, instead, a dark sludge that stained a scrap of silk a brilliant purple. The dye he had stumbled on, mauveine, was the first synthetic dye, and within a year it was colouring fashion from London to Paris. The floodgates opened: chemists synthesised the red of madder in 1869, worked out indigo's structure by 1883, and by the First World War had rebuilt almost the entire palette from coal tar. The natural dye economies — Bengal's indigo among them — collapsed within a generation and never revived.",
          "Modern chemistry has come full circle to meet the old molecules. The structure of indigo — two ring systems locked together by a double bond — explains both its stubborn insolubility and why jeans fade gracefully: each wash strips a little pigment from the fibre's surface rather than flushing colour from the core. Laboratories have since engineered bacteria to produce indigo directly from sugar, skipping the vat's fermentation entirely, and the snail-purple molecule, now synthesised in the laboratory, is being studied as a pigment for advanced materials, where its stability would justify the cost. Sustainability researchers, meanwhile, are quietly replanting the old dye crops.",
          "The symmetry is neat enough to please a chemist. Ancient dyers found molecules that industry now re-derives from first principles; a nineteenth-century accident built an industry that a twenty-first-century one is trying to soften. The colours in a wardrobe still come, for the most part, from benzene rings, as they have since the 1850s. Only the route has changed: from snail and leaf, to coal tar, to engineered cell.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "table-completion",
        label: "Questions 1–5",
        instruction: "Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Dye" }, { kind: "text", text: "Source" }, { kind: "text", text: "Chemical note" }],
          [{ kind: "text", text: "Tyrian purple" }, { kind: "text", text: "sea snails" }, { kind: "text", text: "identified in 1909 as a brominated cousin of 1" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Indigo" }, { kind: "text", text: "fermented 2" }, { kind: "blank", no: 2 }, { kind: "text", text: " in a vat" }, { kind: "text", text: "turns blue on the fibres as air re-oxidises it" }],
          [{ kind: "text", text: "Cochineal" }, { kind: "text", text: "an insect on prickly 3" }, { kind: "blank", no: 3 }, { kind: "text", text: " cactus" }, { kind: "text", text: "a scarlet of astonishing intensity" }],
          [{ kind: "text", text: "Madder" }, { kind: "text", text: "the 4" }, { kind: "blank", no: 4 }, { kind: "text", text: " of a plant" }, { kind: "text", text: "a warmer, cheaper red used for army coats" }],
          [{ kind: "text", text: "Mauveine" }, { kind: "text", text: "made by accident from coal-tar 5" }, { kind: "blank", no: 5 }, { kind: "text", text: "the first synthetic dye" }],
        ],
        blanks: [
          {
            no: 1,
            answer: "indigo",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "a chemist repeated the extraction at scale and identified the pigment as a brominated cousin of indigo" }],
              explanation: "Paragraph B closes with the 1909 identification: the snail pigment is a brominated cousin of indigo. The table keeps 'brominated cousin of' and asks for the molecule it names, which the next paragraph then explores.",
            },
          },
          {
            no: 2,
            answer: "leaves",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "dyers ferment indigo leaves in a vat" }],
              explanation: "Paragraph C describes the vat's raw material: dyers ferment indigo leaves, whose bacteria-rendered pigment then turns blue on the fibres. The table keeps 'fermented' and 'in a vat' and asks for the part of the plant.",
            },
          },
          {
            no: 3,
            answer: "pear",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "Cochineal, a scale insect farmed on prickly pear cactus in the Americas" }],
              explanation: "Paragraph D gives the cochineal insect's host plant: prickly pear cactus, farmed in the Americas. The table keeps 'prickly' and 'cactus' and asks for the middle word of the plant's name.",
            },
          },
          {
            no: 4,
            answer: "root",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "the British infantry coat owed its colour to madder root" }],
              explanation: "Paragraph D names madder's useful part: the British infantry coat owed its colour to madder root. The table keeps 'of a plant' and asks for the part that carried the red.",
            },
          },
          {
            no: 5,
            answer: "waste",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "tried to make quinine, a malaria medicine, from coal-tar waste" }],
              explanation: "Paragraph E gives mauveine's accidental origin: the young chemist was working with coal-tar waste when the sludge stained his silk. The table keeps 'coal-tar' and asks for the noun that completes the source.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 6–10",
        instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "Producing even a small quantity of Tyrian purple required great numbers of sea snails.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "thousands of snails went into a single gram of dye" }],
              explanation: "Paragraph B quantifies the pitiless yield: thousands of snails went into a single gram of dye. The statement's 'great numbers' for 'a small quantity' paraphrases that ratio, so it agrees with the passage's account.",
            },
          },
          {
            text: "Before indigo can be taken up by cloth, its molecules must be chemically changed.",
            answer: "YES",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "bacteria strip oxygen from the pigment and render it soluble and yellow-green" }],
              explanation: "Paragraph C explains that indigo is insoluble in water and cannot be washed into cloth; only after bacteria strip oxygen and render it soluble can the fibres take it up. The statement paraphrases that necessary chemical change, so it agrees.",
              trap: { family: "paraphrase-gap", note: "The statement rewords the vat's chemistry — 'chemically changed' for oxygen stripped and solubility granted — without reusing its words." },
              whyWrong: ["NO: the passage describes a genuine transformation before dipping, so the necessity of a change is stated, not denied."],
            },
          },
          {
            text: "European woad growers welcomed the arrival of stronger tropical indigo.",
            answer: "NO",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "woad interests fought a long rearguard action of tariffs and bans to keep the import out" }],
              explanation: "Paragraph C says the opposite of welcome: woad interests fought a long rearguard action of tariffs and bans to keep the imported dye out. A deliberate campaign to exclude the newcomer contradicts the statement's welcome.",
            },
          },
          {
            text: "The young chemist who discovered mauveine had set out to make a medicine.",
            answer: "YES",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "tried to make quinine, a malaria medicine, from coal-tar waste" }],
              explanation: "Paragraph E states the purpose of the 1856 holiday experiment: the eighteen-year-old tried to make quinine, a malaria medicine, and stumbled on the purple sludge instead. The statement reports that aim, so it agrees with the passage.",
            },
          },
          {
            text: "Bengal's indigo trade soon recovered from the arrival of synthetic dyes.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "The natural dye economies — Bengal's indigo among them — collapsed within a generation and never revived" }],
              explanation: "Paragraph E states the trade's fate outright: the natural dye economies, Bengal's indigo among them, collapsed within a generation and never revived. A stated failure to revive contradicts a recovery, however soon it is claimed to have come.",
              trap: { family: "boundary", note: "Recovery is never discussed as an open question — 'never revived' closes it, so the claim is contradicted rather than unstated." },
              whyWrong: ["NOT GIVEN: the passage does address Bengal's indigo and its fate, so the information exists and contradicts the statement."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "empirically", partOfSpeech: "adverb", definition: "by trial and observation rather than theory; the old dyers worked empirically, knowing what worked before anyone knew why." },
      { word: "pitiless", partOfSpeech: "adjective", definition: "showing no mercy; the snail-dye yield was pitiless — thousands of shells per gram." },
      { word: "ferment", partOfSpeech: "verb", definition: "to break down a substance through the action of bacteria or yeasts; indigo leaves are fermented in a vat." },
      { word: "soluble", partOfSpeech: "adjective", definition: "able to dissolve in a liquid; indigo must be rendered soluble before cloth can take it up." },
      { word: "rearguard action", partOfSpeech: "noun phrase", definition: "a delaying fight against an advance that cannot be stopped; woad interests fought one with tariffs and bans." },
      { word: "benzene", partOfSpeech: "noun", definition: "the ring-shaped hydrocarbon at the base of coal-tar chemistry; most wardrobe colours still come from benzene rings." },
    ],
    passageNote: "The table walks the four natural dyes and the accidental synthetic, so scan for the dye names first; each blank sits in the same sentence as its dye. The verdict items then test the chemistry claims — snail yields, vat chemistry, woad's resistance and Bengal's collapse.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
