/**
 * TOEFL iBT Reading mock library — original practice content (PROMPT 48, Task 5).
 *
 * Five authored exports for the 2026 format (in force since 21 January 2026):
 *
 *   1. toeflFullMock1Reading    — the Reading section of Full Mock 1
 *                                 (official item count: 48 items, 35 raw points)
 *   2. toeflReadingSectionMock1 — standalone official-count section mock
 *                                 (48 items, 35 raw points, fresh content)
 *   3. adaptiveStage1Reading    — Stage 1 routing module of the two-stage
 *                                 adaptive practice simulation (13 raw points)
 *   4. adaptiveUpperReading     — Stage 2 upper module (18 raw points)
 *   5. adaptiveLowerReading     — Stage 2 lower module (18 raw points)
 *
 * Every passage, item, option and explanation below is original material
 * written for this platform in the style of the current test; no official ETS
 * item, paper or preparation book is reproduced anywhere in this file.
 *
 * Honesty rules observed throughout:
 *   - Official Reading: up to ~30 minutes, up to 50 items, two adaptive
 *     modules. The full-count practice sections here are LINEAR and carry
 *     48 items (30 Complete-the-Words words + 18 comprehension questions)
 *     worth 35 raw points; every section's directions state this plainly.
 *   - The adaptive simulations state that TalkSy's fixed 60% routing
 *     threshold is a practice adaptation of ETS's two-stage design — ETS
 *     does not publish its official routing algorithm.
 *
 * Engine contracts honored exactly (src/lib/exams/types.ts):
 *   COMPLETE_WORDS  payload {context, words:[{masked, answer}]}
 *                   answer {words:[answers], answer:"joined"} — all-or-nothing
 *   MCQ_SINGLE      payload {options, passage?}   answer {option:index}
 *   MCQ_MULTI       payload {options, choose: 2}  answer {options:[i, j]} — partial credit
 */

import type { MockSeed, MockSectionSeed } from "../ielts/mocks";

// ---------------------------------------------------------------------------
// Full Mock 1 — Reading passages (original, authored for this platform)
// ---------------------------------------------------------------------------

/** Read in Daily Life text 1 — campus notice (library study rooms). */
const FULL1_LIBRARY_NOTICE = `HARTWELL LIBRARY — GROUP STUDY ROOMS

Starting Monday, October 6, all group study rooms on the second floor must be reserved online at least one hour in advance. Same-day walk-in use will no longer be allowed, because the library has received repeated complaints about groups occupying rooms all day without booking. A reserved room that stays empty for more than fifteen minutes after the start time will be given to another group. Whiteboard markers may be borrowed at the front desk with a student ID. — Library Services`;

/** Read in Daily Life text 2 — schedule-style announcement (writing center). */
const FULL1_WRITING_CENTER = `WRITING CENTER — AUTUMN WORKSHOPS

All workshops are free and take place in Room 214 of the Student Union. No registration is required; seats are first come, first served. Tuesday workshops run 5:00–6:00 p.m.; Thursday workshops run 12:30–1:30 p.m. October 7 — Organizing a Research Paper. October 9 — Grammar Boot Camp: Fixing Common Errors. October 14 — Citing Sources Without Plagiarism. October 16 — From Reading Notes to Speaking Notes. Graduate students may instead book a one-to-one consultation on any weekday from 9 a.m. to noon at the front office.`;

/** Academic passage (≈455 words) — urban heat islands. */
const FULL1_HEAT_ISLAND = `Walk out of an air-conditioned building on a summer evening and the city often feels several degrees warmer than the countryside you passed through on the way in. This is not imagination. For more than two centuries, observers have measured cities running consistently hotter than the fields and forests that surround them, a phenomenon so dependable that it earned a name over a hundred years ago: the urban heat island.

The causes are built into the fabric of the city itself. Concrete, asphalt and brick absorb the sun's energy all day and release it slowly after sunset, whereas vegetation and moist soil spend much of that same energy evaporating water, a process that leaves the surface cooler. Street canyons — narrow rows of tall buildings facing one another — trap the radiated warmth between their walls, and the wind-sheltering effect of skylines stops the heat from escaping into the open sky. Every engine, air conditioner and power line adds waste heat of its own. The result is a bubble of warm air, strongest in the densest central districts and weakest in leafy suburbs, which is why the temperature gap between city and countryside typically reaches its maximum not at midday but a few hours after dark.

The consequences reach well beyond discomfort. Extreme heat is among the deadliest forms of severe weather, and the urban heat island stacks the odds against precisely the people least able to escape it: the elderly, outdoor workers, and residents of neighborhoods where air conditioning is a luxury. Hotter city air also speeds the chemical reactions that produce ground-level smog, so heat islands worsen the very air quality that makes outdoor activity risky in the first place. Nighttime warming may do the deepest damage of all: human bodies depend on cooler nights to recover from hot days, and a city that stays warm past midnight quietly takes that relief away for an entire season.

Cities are not helpless, and the most effective fixes are refreshingly ordinary. Painting dark roofs white, or replacing conventional shingles with reflective materials, keeps the surfaces of buildings measurably cooler, and the change pays for itself in lower summer electricity bills. Trees remain the most elegant instrument of all: a mature street tree cools the air beneath it by transpiring water and casting shade, and evaluations of planting programs find detectable temperature reductions within a few years. Some planners go further, converting disused railway lines into linear parks and requiring new developments to reserve a share of unpaved, planted ground. None of these measures erases the heat island entirely, but together they narrow the gap between the city and the fields around it — and as summers grow hotter everywhere, the value of that difference keeps rising.`;

// ---------------------------------------------------------------------------
// 1. Full Mock 1 — Reading section (official item count, 35 raw points)
// ---------------------------------------------------------------------------

export const toeflFullMock1Reading: MockSectionSeed = {
  key: "reading",
  title: "Reading (2026 format: official item count)",
  directions:
    "The official TOEFL iBT Reading section lasts up to about 30 minutes and delivers up to 50 items in two adaptive modules. This linear practice version keeps the official item count — 48 items: 30 Complete-the-Words words across three texts, plus 18 comprehension questions on two Read in Daily Life texts and one academic passage — for a total of 35 raw points. You may move freely between questions within this section.",
  timingSec: 1800,
  questions: [
    // ---- Complete the Words, texts 1–3 -------------------------------------
    {
      order: 1,
      type: "COMPLETE_WORDS",
      stem: "Item 1. Text 1 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "According to legend, coffee was discovered by an Ethiopian goat___ named Kaldi, who noticed that his goats grew strangely energ___ after eating the red berries of a certain shr___. Monks nearby began boi___ the berries into a bitter brew that kept them aw___ through long nights of prayer. From Ethiopia the drink crossed the Red Sea to Yemen, where farmers cult___ it on terraced hillsides and guar___ their plants jealously. By the fifteenth century, merch___ at Mocha were shipping beans across the Arab world, and coffeeh___ soon flourished in Cairo and Istanbul — crowded rooms where men talked, recited poetry, and played chess over cups of a dark, fragr___ liquid.",
        words: [
          { masked: "goat___", answer: "goatherd" },
          { masked: "energ___", answer: "energetic" },
          { masked: "shr___", answer: "shrub" },
          { masked: "boi___", answer: "boiling" },
          { masked: "aw___", answer: "awake" },
          { masked: "cult___", answer: "cultivated" },
          { masked: "guar___", answer: "guarded" },
          { masked: "merch___", answer: "merchants" },
          { masked: "coffeeh___", answer: "coffeehouses" },
          { masked: "fragr___", answer: "fragrant" },
        ],
      },
      answer: {
        words: ["goatherd", "energetic", "shrub", "boiling", "awake", "cultivated", "guarded", "merchants", "coffeehouses", "fragrant"],
        answer: "goatherd energetic shrub boiling awake cultivated guarded merchants coffeehouses fragrant",
      },
      points: 5,
      difficulty: 3,
      skills: ["academic-vocab", "context"],
      explanation:
        "Every missing word is fixed by its neighbors: 'goatherd' follows 'Ethiopian' and sits in the same sentence as 'his goats'; 'boiling' is forced by 'began … the berries into a bitter brew'; and 'fragrant' completes the sensory description of the dark liquid in the cups. Read each masked word with the two or three words on either side before committing.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 2,
      type: "COMPLETE_WORDS",
      stem: "Item 2. Text 2 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "Professional scientists cannot be everywhere at once, so researchers increasingly invite the public to gath___ data. In one project, volunt___ photographed wild plants, and their observations hel___ botanists track how flowering times shift as the clim___ warms. Projects like this rely on simple rules: each volunteer foll___ the same steps, photographs the same species, and uploads the images to a shared databas___. The results can be astonishing — one bird-counting surv___ received over one hundred thousand reports in a single weekend. Critics once doubted that amateurs could produce reliab___ data, but when thousands of independent observations are combi___, individual err___ tend to cancel out, leaving patterns that professionals can trust.",
        words: [
          { masked: "gath___", answer: "gather" },
          { masked: "volunt___", answer: "volunteers" },
          { masked: "hel___", answer: "helped" },
          { masked: "clim___", answer: "climate" },
          { masked: "foll___", answer: "follows" },
          { masked: "databas___", answer: "database" },
          { masked: "surv___", answer: "survey" },
          { masked: "reliab___", answer: "reliable" },
          { masked: "combi___", answer: "combined" },
          { masked: "err___", answer: "errors" },
        ],
      },
      answer: {
        words: ["gather", "volunteers", "helped", "climate", "follows", "database", "survey", "reliable", "combined", "errors"],
        answer: "gather volunteers helped climate follows database survey reliable combined errors",
      },
      points: 5,
      difficulty: 3,
      skills: ["academic-vocab", "context"],
      explanation:
        "Grammar and collocation restore most items: 'gather data' is the standard collocation; 'foll___ the same steps' must be 'follows' because the subject 'each volunteer' is singular; and 'err___ … tend to cancel out' points to 'errors', since only a plural noun fits between 'individual' and 'tend'.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 3,
      type: "COMPLETE_WORDS",
      stem: "Item 3. Text 3 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "In 1984 a researcher named Katharine Payne stood near an elephant encl___ and felt a thr___ in the air. The keepers insisted the animals were sil___, yet Payne suspected they were commun___ with sounds too deep for human ears. Special instruments conf___ her hunch: elephants produce infras___, calls pitched far below the range of human hear___, that travel for miles through forest and grassland. These low rumbles let separated family members stay in contact, coord___ their movements, and warn distant relat___ of danger. A mother calling to a calf several kilom___ away may seem silent to us, yet to the calf she is as clear as a ringing bell.",
        words: [
          { masked: "encl___", answer: "enclosure" },
          { masked: "thr___", answer: "throbbing" },
          { masked: "sil___", answer: "silent" },
          { masked: "commun___", answer: "communicating" },
          { masked: "conf___", answer: "confirmed" },
          { masked: "infras___", answer: "infrasound" },
          { masked: "hear___", answer: "hearing" },
          { masked: "coord___", answer: "coordinate" },
          { masked: "relat___", answer: "relatives" },
          { masked: "kilom___", answer: "kilometers" },
        ],
      },
      answer: {
        words: ["enclosure", "throbbing", "silent", "communicating", "confirmed", "infrasound", "hearing", "coordinate", "relatives", "kilometers"],
        answer: "enclosure throbbing silent communicating confirmed infrasound hearing coordinate relatives kilometers",
      },
      points: 5,
      difficulty: 3,
      skills: ["academic-vocab", "context"],
      explanation:
        "The contrast structure restores three items: the keepers say the animals are 'sil___' while Payne suspects they are 'commun___' — 'silent' and 'communicating' are the natural pair. 'Infras___' is then defined in place ('calls pitched far below the range of human hearing'), and 'kilom___' matches the scale implied by 'travel for miles'.",
      source: "original-practice",
      contentStatus: "published",
    },

    // ---- Read in Daily Life, text 1: campus notice --------------------------
    {
      order: 4,
      type: "MCQ_SINGLE",
      stem: "Item 4. Read in Daily Life — campus notice. What is this notice mainly about?",
      payload: {
        passage: FULL1_LIBRARY_NOTICE,
        options: [
          "A change in the library's weekday opening hours",
          "A new rule requiring online reservations for group study rooms",
          "New equipment for loan at the second-floor front desk",
          "A plan to close the second floor for cleaning",
        ],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 2,
      skills: ["main-idea"],
      explanation:
        "Every sentence supports the new booking rule: who must reserve, why walk-ins are ending, and what happens to unused rooms. The opening-hours option is tempting but the notice never mentions hours; the front desk and the second floor appear only as details of the booking rule.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 5,
      type: "MCQ_SINGLE",
      stem: "Item 5. Campus notice — what happens to a reserved room that stays empty for more than fifteen minutes?",
      payload: {
        passage: FULL1_LIBRARY_NOTICE,
        options: [
          "It is locked for the rest of the day.",
          "The group loses borrowing privileges at the desk.",
          "It is given to another group.",
          "The reservation is extended by one hour.",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "The notice says such a room 'will be given to another group'. Losing privileges is the strongest distractor — a penalty sounds natural, but the notice sets no punishment, only a reallocation of the room.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 6,
      type: "MCQ_SINGLE",
      stem: "Item 6. Campus notice — why does the library mention complaints from students?",
      payload: {
        passage: FULL1_LIBRARY_NOTICE,
        options: [
          "To apologize for noise on the second floor",
          "To warn groups that they will be fined",
          "To suggest that staff ignored the booking system",
          "To explain the reason for ending walk-in access",
        ],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 2,
      skills: ["purpose"],
      explanation:
        "The sentence beginning 'because' gives the cause of the new rule: complaints about groups occupying rooms without booking. No fine or apology is mentioned anywhere, so those options add information the notice does not contain.",
      source: "original-practice",
      contentStatus: "published",
    },

    // ---- Read in Daily Life, text 2: schedule/announcement ------------------
    {
      order: 7,
      type: "MCQ_SINGLE",
      stem: "Item 7. Read in Daily Life — announcement. What is the main purpose of this announcement?",
      payload: {
        passage: FULL1_WRITING_CENTER,
        options: [
          "To advertise free workshops and explain how to attend them",
          "To require graduate students to book consultations",
          "To announce new opening hours for the Student Union",
          "To explain how to register online for a workshop",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 2,
      skills: ["main-idea", "purpose"],
      explanation:
        "The announcement lists the workshops, their times and the attendance rules. The registration option is contradicted directly: the text says 'No registration is required.'",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 8,
      type: "MCQ_SINGLE",
      stem: "Item 8. Announcement — what is the topic of the October 9 workshop?",
      payload: {
        passage: FULL1_WRITING_CENTER,
        options: [
          "Organizing the parts of a research paper",
          "Correcting frequent grammar mistakes",
          "Citing sources correctly",
          "Turning reading notes into speaking notes",
        ],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "October 9 is 'Grammar Boot Camp: Fixing Common Errors'. The other three options name real workshops from the schedule, which is exactly what makes them tempting — always match the date before answering.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 9,
      type: "MCQ_SINGLE",
      stem: "Item 9. Announcement — what can be inferred about the workshops?",
      payload: {
        passage: FULL1_WRITING_CENTER,
        options: [
          "Each workshop is repeated on a second day.",
          "Graduate students are not allowed to attend.",
          "A student who arrives late may find no seat available.",
          "Workshop leaders are paid by the Students' Union.",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 3,
      skills: ["inference"],
      explanation:
        "'First come, first served' means seats can run out — that is the inference. The graduate-student option misreads the last line: consultations are an extra service offered to graduate students, not a ban on attending.",
      source: "original-practice",
      contentStatus: "published",
    },

    // ---- Academic passage: the urban heat island ----------------------------
    {
      order: 10,
      type: "MCQ_SINGLE",
      stem: "Item 10. Academic passage — what is this passage mainly about?",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: [
          "The history of temperature measurement in cities",
          "Why extreme heat has replaced storms as the deadliest weather",
          "How reflective roofing materials are manufactured",
          "Why cities run hotter than the countryside around them, and what can be done about it",
        ],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 3,
      skills: ["main-idea"],
      explanation:
        "The passage moves from cause (paragraphs 1–2) to consequence (paragraph 3) to remedies (paragraph 4). The deadliest-weather option is the strongest distractor: deadly heat is discussed, but only as one consequence of the heat island, not as the passage's organizing subject.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 11,
      type: "MCQ_SINGLE",
      stem: "Item 11. Paragraph 2 is mainly concerned with —",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: [
          "the physical features of cities that create and hold heat",
          "the health effects of nighttime warming",
          "the chemical reactions that form smog",
          "the temperature differences between inner cities and suburbs",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 3,
      skills: ["main-idea"],
      explanation:
        "Paragraph 2 lists heat-storing materials, street canyons, wind shelter and waste heat — the mechanisms that build the warm bubble. The suburbs option is the trap: suburbs appear only in the closing sentence to say where the bubble is weakest, not as the paragraph's focus.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 12,
      type: "MCQ_SINGLE",
      stem: "Item 12. In paragraph 2, the word 'radiated' is closest in meaning to —",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: ["taken in", "given off", "carried away by wind", "spread evenly"],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 3,
      skills: ["vocabulary"],
      explanation:
        "Materials 'release' stored energy after sunset, and that 'radiated warmth' is what street canyons trap — so the word describes energy being emitted, 'given off'. 'Taken in' reverses the direction of the process.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 13,
      type: "MCQ_SINGLE",
      stem: "Item 13. In paragraph 3, the phrase 'stacks the odds against' is closest in meaning to —",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: ["raises the temperature of", "removes the risk from", "puts at a serious disadvantage", "gathers statistics about"],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 4,
      skills: ["vocabulary"],
      explanation:
        "The idiom comes from gambling: the heat island makes things harder for the people listed right after it — the elderly, outdoor workers, residents without cooling. 'Raises the temperature' is literal and ignores the figurative meaning.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 14,
      type: "MCQ_SINGLE",
      stem: "Item 14. According to paragraph 2, what happens to much of the sun's energy where vegetation and moist soil are present?",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: [
          "It is stored in the ground until nightfall.",
          "It is reflected back into the sky by leaves.",
          "It is converted into waste heat.",
          "It is spent evaporating water.",
        ],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "The text says vegetation and moist soil 'spend much of that same energy evaporating water, a process that leaves the surface cooler'. Waste heat belongs to engines, air conditioners and power lines, not to plants.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 15,
      type: "MCQ_SINGLE",
      stem: "Item 15. According to the passage, the temperature difference between a city and the surrounding countryside is usually greatest —",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: ["a few hours after dark.", "at midday.", "just before sunrise.", "during heavy rain."],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "Paragraph 2 ends by saying the gap 'typically reaches its maximum not at midday but a few hours after dark'. Midday is mentioned precisely in order to be rejected — a classic contrast signal.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 16,
      type: "MCQ_SINGLE",
      stem: "Item 16. According to paragraph 4, what benefit of reflective roofing is mentioned in addition to cooler building surfaces?",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: ["Longer roof lifespans", "Lower summer electricity bills", "Higher property values", "Quieter interiors"],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "'The change pays for itself in lower summer electricity bills.' Lifespans and property values sound plausible for building work, but neither appears in the paragraph.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 17,
      type: "MCQ_SINGLE",
      stem: "Item 17. What can be inferred about residents of neighborhoods where air conditioning is a luxury?",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: [
          "They are usually protected by city planting programs.",
          "They recover faster on warm nights.",
          "They face greater danger from heat islands than other residents.",
          "They mostly work outdoors.",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 4,
      skills: ["inference"],
      explanation:
        "The passage says the heat island 'stacks the odds against precisely the people least able to escape it' and names this group — greater danger follows logically. The outdoor-workers option confuses two separate entries in the same list.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 18,
      type: "MCQ_SINGLE",
      stem: "Item 18. What can be inferred from the final paragraph about the measures it describes?",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: [
          "They have already erased heat islands in many cities.",
          "They work only in cities with disused railway lines.",
          "They are too costly for most city governments.",
          "Their value increases as summers grow hotter.",
        ],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 4,
      skills: ["inference"],
      explanation:
        "The closing words say that 'as summers grow hotter everywhere, the value of that difference keeps rising'. The 'erased' option contradicts the paragraph's own statement that none of the measures erases the heat island entirely.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 19,
      type: "MCQ_SINGLE",
      stem: "Item 19. Which sentence best expresses the essential information in the following sentence from paragraph 3: 'Human bodies depend on cooler nights to recover from hot days, and a city that stays warm past midnight quietly takes that relief away for an entire season.'?",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        options: [
          "Because hot cities deny people cool nights, they remove a recovery the body needs.",
          "People in cities recover from heat more quickly after midnight.",
          "Cool days are more important to health than cool nights.",
          "Cities cool down quickly once the sun sets in summer.",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 4,
      skills: ["paraphrase"],
      explanation:
        "The original links two ideas: bodies need cool nights, and warm cities remove them. The recovery option reverses the direction of the sentence, turning the removal of relief into faster recovery.",
      source: "original-practice",
      contentStatus: "published",
    },

    // ---- Select-two questions on the academic passage ----------------------
    {
      order: 20,
      type: "MCQ_MULTI",
      stem: "Item 20. Select the TWO causes of the urban heat island that paragraph 2 identifies. Choose 2 answers.",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        choose: 2,
        options: [
          "Chemical reactions that produce ground-level smog",
          "Building materials that store the sun's energy and release it after sunset",
          "Cooling breezes that blow in from surrounding farmland",
          "Waste heat from engines, air conditioners and power lines",
          "The disappearance of nighttime cloud cover over cities",
        ],
      },
      answer: { options: [1, 3] },
      points: 2,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "Paragraph 2 names heat-storing materials, street canyons, wind-sheltering skylines and waste heat. Smog is a consequence discussed in paragraph 3, not a cause in paragraph 2 — the strongest distractor here.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 21,
      type: "MCQ_MULTI",
      stem: "Item 21. Select the TWO measures that paragraph 4 presents as reducing the heat island effect. Choose 2 answers.",
      payload: {
        passage: FULL1_HEAT_ISLAND,
        choose: 2,
        options: [
          "Banning private cars from city centers on hot days",
          "Painting roads darker so they match rooftops",
          "Roofs surfaced with reflective materials",
          "Installing more air conditioners in older buildings",
          "Requiring new developments to keep unpaved, planted ground",
        ],
      },
      answer: { options: [2, 4] },
      points: 2,
      difficulty: 4,
      skills: ["detail", "inference"],
      explanation:
        "Reflective roofs and reserved unpaved ground are both in the paragraph, along with street trees and linear parks. More air conditioning would add waste heat — paragraph 2 explains why that would deepen the problem rather than reduce it.",
      source: "original-practice",
      contentStatus: "published",
    },
  ],
};

// ---------------------------------------------------------------------------
// Section Mock 1 — fresh passages (original, authored for this platform)
// ---------------------------------------------------------------------------

/** Read in Daily Life text 1 — course message (geology field trip). */
const SEC1_QUARRY_MESSAGE = `MESSAGE TO GEOLOGY 201 — SATURDAY QUARRY TRIP

Students who signed up for Saturday's quarry trip: departure has moved from 8:00 a.m. to 7:15 a.m., because the quarry operator needs our group underground before a blasting crew arrives at ten. Meet at the east parking lot; the bus cannot turn at the science building. Wear closed-toe boots and bring the signed safety form; anyone without a form will stay above ground. We expect to return to campus by 2:00 p.m. Check your university email Friday evening for weather cancellations. — Prof. Adeyemi`;

/** Read in Daily Life text 2 — announcement (university museum). */
const SEC1_MUSEUM_ANNOUNCEMENT = `UNIVERSITY MUSEUM — AUTUMN SEASON

The Rivers Building galleries are open Tuesday to Sunday, 10 a.m. to 5 p.m., and until 8 p.m. on Thursdays. Admission is free for students; the public pays eight dollars. Two exhibitions open this month: 'Silk and Spice', textiles and trade goods, runs to December 14 in Gallery 1, and 'Light Before Lamps' runs to January 11 in Gallery 2. Free guided tours leave the front desk every Saturday at noon and last about forty minutes. School groups must book at least two weeks ahead.`;

/** Academic passage (≈450 words) — the longitude problem. */
const SEC1_LONGITUDE = `For eighteenth-century sailors, finding a ship's north–south position was the easier half of navigation: the height of the sun or the pole star above the horizon, measured with a brass instrument, gave the latitude almost anywhere on the ocean. Longitude — the east–west position — was another matter, and the price of not knowing it was counted in shipwrecks. In 1707, some two thousand sailors drowned off the Isles of Scilly when a British fleet miscalculated how far east it had sailed. Parliament responded with the Longitude Act of 1714, offering a prize of twenty thousand pounds, a fortune at the time, to anyone who could find a method of fixing longitude at sea with sufficient accuracy.

The astronomers' answer was the Moon. Draw up tables predicting exactly where the Moon would stand in relation to certain stars at every hour of every night, and a navigator could measure the angle between them, consult the tables, and obtain the time at a reference place such as Greenwich. From the difference between that time and the local time aboard ship, longitude followed by arithmetic. The method was sound, and by the 1760s the necessary tables existed. In practice, however, it demanded roughly four hours of calculation, clear skies, a steady hand with delicate instruments, and a level of mathematics that most officers never mastered.

A carpenter's son from Yorkshire proposed an entirely different route. John Harrison believed the problem was mechanical: if a clock could be built to keep perfect time at sea, a navigator need only compare its reading with local noon to learn how far east or west the ship had traveled. Pendulum clocks, the standard of the age, failed hopelessly on a rolling deck, so Harrison abandoned pendulums and designed balance-spring mechanisms that consumed almost no energy and needed no oiling. Over more than forty years he produced a succession of ever-smaller sea clocks — the last resembling an oversized pocket watch — and on trial voyages to Jamaica and Barbados they kept time to within a few seconds a day, far beyond what the prize required.

Yet the full payment was not made until 1773, and then only partly and by special act of Parliament, because the commissioners overseeing the prize included astronomers who favored lunar tables and kept raising the standard of proof. Harrison was eventually recognized, but the delay exposed something the prize's authors had not anticipated: a solution from an untrained outsider could be resisted not on its merits but on the prestige of its rivals. Sea clocks were soon mass-produced and became cheap enough for every merchant ship, while lunar tables remained the backup of choice for navies that distrusted machinery. The two methods, rivals and partners at once, made the ocean legible at last.`;

// ---------------------------------------------------------------------------
// 2. Standalone Reading section mock (official item count, fresh content)
// ---------------------------------------------------------------------------

export const toeflReadingSectionMock1: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Reading Section Mock (2026 format) 1",
  kind: "section",
  lengthLabel: "full-length",
  description:
    "A full-length, official-item-count simulation of the TOEFL iBT Reading section in the 2026 format: three Complete-the-Words texts (30 words), two Read in Daily Life texts, and one academic passage with 18 comprehension questions — 48 items worth 35 raw points in about 30 minutes, delivered here as one linear practice module. Original EnglishPath practice material — not an official ETS test.",
  sections: [
    {
      key: "reading",
      title: "Reading (2026 format: official item count)",
      directions:
        "The official TOEFL iBT Reading section lasts up to about 30 minutes and delivers up to 50 items in two adaptive modules. This linear practice version keeps the official item count — 48 items: 30 Complete-the-Words words across three texts, plus 18 comprehension questions on two Read in Daily Life texts and one academic passage — for a total of 35 raw points. You may move freely between questions within this section.",
      timingSec: 1800,
      questions: [
        // ---- Complete the Words, texts 1–3 ---------------------------------
        {
          order: 1,
          type: "COMPLETE_WORDS",
          stem: "Item 1. Text 1 — read the passage and complete the ten masked words.",
          payload: {
            context:
              "High inside an Arctic mount___ on the Norwegian island of Spitsbergen lies a vau___ cut into the permafrost that stor___ duplicate seeds from gene banks around the world. The building is deliberately remote, cold and dry — conditions that keep seeds viab___ for decades without electr___. Each nation depos___ samples of its crop vari___, from Mexican maize to Indian rice, so that if war, flood or disease destr___ a collection at home, a back___ survives. The vault has already served this purpose: when fighting destroyed a seed bank in the Middle East, researchers withdr___ copies of lost wheat and bean lines and restarted their breeding programs.",
            words: [
              { masked: "mount___", answer: "mountain" },
              { masked: "vau___", answer: "vault" },
              { masked: "stor___", answer: "stores" },
              { masked: "viab___", answer: "viable" },
              { masked: "electr___", answer: "electricity" },
              { masked: "depos___", answer: "deposits" },
              { masked: "vari___", answer: "varieties" },
              { masked: "destr___", answer: "destroyed" },
              { masked: "back___", answer: "backup" },
              { masked: "withdr___", answer: "withdrew" },
            ],
          },
          answer: {
            words: ["mountain", "vault", "stores", "viable", "electricity", "deposits", "varieties", "destroyed", "backup", "withdrew"],
            answer: "mountain vault stores viable electricity deposits varieties destroyed backup withdrew",
          },
          points: 5,
          difficulty: 3,
          skills: ["academic-vocab", "context"],
          explanation:
            "'Vau___' is defined immediately afterwards ('cut into the permafrost that stores duplicate seeds'); 'viab___' is pinned by the cold, dry conditions that keep seeds alive for decades; and 'back___' is explained by the whole conditional sentence — if the home collection is destroyed, a spare survives.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "COMPLETE_WORDS",
          stem: "Item 2. Text 2 — read the passage and complete the ten masked words.",
          payload: {
            context:
              "The octopus is a lonely gen___. It hunts al___, solves problems that would embarr___ many backboned animals, and esc___ from containers that look sealed. In laboratory tanks, octopuses have unscr___ jars from the inside and learned to recog___ individual human keep___, squirting water at one researcher while greeting another. Two thirds of an octopus's neur___ are not in its brain at all but distributed in its arms, which means each arm can taste, touch and part___ decide on its own. Some scientists argue that octopus intelligence evolved independ___ from our own, which makes the animal less a cousin than an experiment nature ran twice.",
            words: [
              { masked: "gen___", answer: "genius" },
              { masked: "al___", answer: "alone" },
              { masked: "embarr___", answer: "embarrass" },
              { masked: "esc___", answer: "escapes" },
              { masked: "unscr___", answer: "unscrewed" },
              { masked: "recog___", answer: "recognize" },
              { masked: "keep___", answer: "keepers" },
              { masked: "neur___", answer: "neurons" },
              { masked: "part___", answer: "partly" },
              { masked: "independ___", answer: "independently" },
            ],
          },
          answer: {
            words: ["genius", "alone", "embarrass", "escapes", "unscrewed", "recognize", "keepers", "neurons", "partly", "independently"],
            answer: "genius alone embarrass escapes unscrewed recognize keepers neurons partly independently",
          },
          points: 5,
          difficulty: 3,
          skills: ["academic-vocab", "context"],
          explanation:
            "Grammar restores 'esc___' — it must parallel 'hunts' and 'solves', so it takes the third-person form 'escapes'. 'Unscr___ jars from the inside' describes the classic jar-opening escape, and 'neur___ … not in its brain but distributed in its arms' points to the nerve cells themselves.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "COMPLETE_WORDS",
          stem: "Item 3. Text 3 — read the passage and complete the ten masked words.",
          payload: {
            context:
              "Before the fifteenth century, every book in Europe was cop___ by hand. Monks in quiet workshops spent entire winters producing a sing___ volume, which made books rare, expen___ and chained to library shel___. Around 1450, a goldsmith named Johannes Gutenberg combined movab___ metal type, oily ink and a conver___ wine press into a working printing system. Within fifty years, presses in hundreds of tow___ had produced more books than European scrib___ had copied in the previous thous___. Prices fell, liter___ spread, and ideas that once traveled at the speed of a horse now moved with every wagonload of paper.",
            words: [
              { masked: "cop___", answer: "copied" },
              { masked: "sing___", answer: "single" },
              { masked: "expen___", answer: "expensive" },
              { masked: "shel___", answer: "shelves" },
              { masked: "movab___", answer: "movable" },
              { masked: "conver___", answer: "converted" },
              { masked: "tow___", answer: "towns" },
              { masked: "scrib___", answer: "scribes" },
              { masked: "thous___", answer: "thousand" },
              { masked: "liter___", answer: "literacy" },
            ],
          },
          answer: {
            words: ["copied", "single", "expensive", "shelves", "movable", "converted", "towns", "scribes", "thousand", "literacy"],
            answer: "copied single expensive shelves movable converted towns scribes thousand literacy",
          },
          points: 5,
          difficulty: 3,
          skills: ["academic-vocab", "context"],
          explanation:
            "'Cop___ by hand' is the passive of copy; 'scrib___' names the people who copied books before printing, in contrast with 'presses' in the next sentence; and 'liter___ spread' pairs with 'prices fell' to describe what cheap books made possible.",
          source: "original-practice",
          contentStatus: "published",
        },

        // ---- Read in Daily Life, text 1: course message ---------------------
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Item 4. Read in Daily Life — course message. What is this message mainly about?",
          payload: {
            passage: SEC1_QUARRY_MESSAGE,
            options: [
              "Safety rules for working at an operating quarry",
              "A cancellation caused by bad weather",
              "Changes to the arrangements for a class field trip",
              "How to sign up for the geology field trip",
            ],
          },
          answer: { option: 2 },
          points: 1,
          difficulty: 2,
          skills: ["main-idea"],
          explanation:
            "The message centers on the new departure time, the new meeting place and what to bring. The weather option is the trap: bad weather is something to watch for on Friday evening, not a decision already made.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 5,
          type: "MCQ_SINGLE",
          stem: "Item 5. Course message — why did the departure time change?",
          payload: {
            passage: SEC1_QUARRY_MESSAGE,
            options: [
              "The group must finish its visit before a blasting crew arrives.",
              "The bus broke down and a replacement was found.",
              "Students asked to return to campus earlier.",
              "The east parking lot is closed until 8 a.m.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          difficulty: 2,
          skills: ["detail"],
          explanation:
            "The professor states the cause directly: the group must be underground before the blasting crew arrives at ten. The parking lot appears in a different sentence about where to meet, not why the time moved.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 6,
          type: "MCQ_SINGLE",
          stem: "Item 6. Course message — what can be inferred about a student who forgets the safety form?",
          payload: {
            passage: SEC1_QUARRY_MESSAGE,
            options: [
              "That student must write an extra report.",
              "That student will not be allowed underground.",
              "That student will be driven back to campus.",
              "That student can sign the form on the bus.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          difficulty: 2,
          skills: ["inference"],
          explanation:
            "'Anyone without a form will stay above ground' implies exclusion from the underground part of the trip. Nothing is said about reports, rides or signing late — resist adding penalties the message never states.",
          source: "original-practice",
          contentStatus: "published",
        },

        // ---- Read in Daily Life, text 2: museum announcement ----------------
        {
          order: 7,
          type: "MCQ_SINGLE",
          stem: "Item 7. Read in Daily Life — announcement. What is this announcement mainly about?",
          payload: {
            passage: SEC1_MUSEUM_ANNOUNCEMENT,
            options: [
              "The history of the international silk trade",
              "Volunteer opportunities at the university museum",
              "Evening art classes offered on Thursdays",
              "Visiting arrangements for a museum's autumn exhibitions",
            ],
          },
          answer: { option: 3 },
          points: 1,
          difficulty: 2,
          skills: ["main-idea"],
          explanation:
            "Hours, prices, exhibitions and tours are all visiting information. Silk is mentioned only as the subject of one exhibition — an exhibition title is not the announcement's topic.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 8,
          type: "MCQ_SINGLE",
          stem: "Item 8. Announcement — what does the public pay to visit the galleries?",
          payload: {
            passage: SEC1_MUSEUM_ANNOUNCEMENT,
            options: ["Eight dollars", "Nothing at all", "Eight dollars, but only on Thursdays", "Forty dollars for a guided tour"],
          },
          answer: { option: 0 },
          points: 1,
          difficulty: 2,
          skills: ["detail"],
          explanation:
            "Admission is free for students; the public pays eight dollars. The nothing-at-all option borrows the student price, and the Thursday option confuses extended closing time with a price change.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 9,
          type: "MCQ_SINGLE",
          stem: "Item 9. Announcement — what can be inferred about visiting on a Thursday?",
          payload: {
            passage: SEC1_MUSEUM_ANNOUNCEMENT,
            options: [
              "Both exhibitions stay closed for maintenance.",
              "Visitors get three extra evening hours in the galleries.",
              "Guided tours run every hour until 8 p.m.",
              "Admission is half price after 5 p.m.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          difficulty: 3,
          skills: ["inference"],
          explanation:
            "Thursdays close at 8 p.m. instead of 5 p.m. — three additional hours. Tours are tied to Saturdays at noon, so the hourly-tour option contradicts the schedule.",
          source: "original-practice",
          contentStatus: "published",
        },

        // ---- Academic passage: the longitude problem -------------------------
        {
          order: 10,
          type: "MCQ_SINGLE",
          stem: "Item 10. Academic passage — what is the passage mainly about?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "The life and training of Britain's leading eighteenth-century clockmakers",
              "Why the British fleet sank off the Isles of Scilly in 1707",
              "How the longitude problem was solved, and why recognition of one solution was delayed",
              "Differences between measuring latitude and measuring local time",
            ],
          },
          answer: { option: 2 },
          points: 1,
          difficulty: 3,
          skills: ["main-idea"],
          explanation:
            "The passage follows the problem, the lunar method, Harrison's clocks and the delayed prize. The 1707 disaster opens the story, but the passage continues long past it — that option stays at the opening anecdote.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 11,
          type: "MCQ_SINGLE",
          stem: "Item 11. Paragraph 2 is mainly concerned with —",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "why pendulum clocks failed on rolling decks",
              "how Parliament funded scientific research",
              "the mathematics training of naval officers",
              "how the position of the Moon could be used to calculate longitude",
            ],
          },
          answer: { option: 3 },
          points: 1,
          difficulty: 3,
          skills: ["main-idea"],
          explanation:
            "Paragraph 2 walks through the lunar method step by step: tables, angle measurements, the time difference, arithmetic. Pendulum clocks belong to paragraph 3 and Harrison's story.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 12,
          type: "MCQ_SINGLE",
          stem: "Item 12. In paragraph 2, the word 'sound' is closest in meaning to —",
          payload: {
            passage: SEC1_LONGITUDE,
            options: ["based on good reasoning", "free of noise", "physically strong", "officially approved"],
          },
          answer: { option: 0 },
          points: 1,
          difficulty: 3,
          skills: ["vocabulary"],
          explanation:
            "'The method was sound' is followed by evidence that it worked — the tables existed and the arithmetic followed. Here 'sound' means logically solid, not quiet; the sentence is about navigation, not acoustics.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 13,
          type: "MCQ_SINGLE",
          stem: "Item 13. In the final paragraph, 'legible' is closest in meaning to —",
          payload: {
            passage: SEC1_LONGITUDE,
            options: ["profitable", "readable", "measurable", "borderless"],
          },
          answer: { option: 1 },
          points: 1,
          difficulty: 4,
          skills: ["vocabulary"],
          explanation:
            "To make the ocean 'legible' is to make it something sailors can read — that is, determine their position on it. 'Measurable' tempts because the passage discusses measurement, but the metaphor is about reading.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 14,
          type: "MCQ_SINGLE",
          stem: "Item 14. According to paragraph 1, what happened in 1707?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "Parliament offered a twenty-thousand-pound prize for a navigation method.",
              "Astronomers published the first complete lunar tables.",
              "A British fleet miscalculated its position and some two thousand sailors drowned.",
              "Harrison built his first sea clock.",
            ],
          },
          answer: { option: 2 },
          points: 1,
          difficulty: 3,
          skills: ["detail"],
          explanation:
            "The 1707 event is the wreck off the Isles of Scilly. The prize followed in 1714 — the prize option takes its date and wording from the next sentence.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 15,
          type: "MCQ_SINGLE",
          stem: "Item 15. According to paragraph 2, what made the lunar method difficult to use in practice?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "The tables it depended on were not published until 1773.",
              "It worked only while the ship was motionless.",
              "It required a clock that kept perfect time at sea.",
              "It required long calculations, clear skies and mathematics most officers lacked.",
            ],
          },
          answer: { option: 3 },
          points: 1,
          difficulty: 3,
          skills: ["detail"],
          explanation:
            "The paragraph lists four hours of calculation, clear skies, a steady hand and advanced mathematics. The perfect-timekeeping option describes the rival method — Harrison's clock — not the lunar tables.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 16,
          type: "MCQ_SINGLE",
          stem: "Item 16. Why did Harrison abandon pendulum clocks?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "Pendulums could not keep time on a moving ship.",
              "They consumed too much energy.",
              "The prize commissioners had rejected them.",
              "Pendulums required constant oiling.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          difficulty: 3,
          skills: ["detail"],
          explanation:
            "'Pendulum clocks … failed hopelessly on a rolling deck.' Energy use and oiling appear in the next clause as advantages of his balance-spring design — the opposite of the energy option's claim.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 17,
          type: "MCQ_SINGLE",
          stem: "Item 17. What can be inferred about the prize commissioners?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "They tested each sea clock personally on trial voyages.",
              "Their preference for lunar methods helped delay Harrison's payment.",
              "They reduced the prize amount after 1773.",
              "They lacked the legal authority to award the prize.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          difficulty: 4,
          skills: ["inference"],
          explanation:
            "The commissioners 'included astronomers who favored lunar tables and kept raising the standard of proof', and payment came only by special act of Parliament. The reduced-prize option is the trap — the payment was delayed, but the passage never says the prize was cut.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 18,
          type: "MCQ_SINGLE",
          stem: "Item 18. What can be inferred about navigation after Harrison's clocks were mass-produced?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "Navies abandoned lunar tables completely.",
              "Most ships still navigated without any instruments.",
              "Ordinary merchant ships could afford reliable timekeepers.",
              "Sea clocks were too delicate for long voyages.",
            ],
          },
          answer: { option: 2 },
          points: 1,
          difficulty: 4,
          skills: ["inference"],
          explanation:
            "'Cheap enough for every merchant ship' is the clue — affordability for ordinary vessels follows directly. The abandoned-tables option is contradicted: navies that distrusted machinery kept lunar tables as their backup.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 19,
          type: "MCQ_SINGLE",
          stem: "Item 19. Which sentence best expresses the essential information in the final sentence: 'The two methods, rivals and partners at once, made the ocean legible at last.'?",
          payload: {
            passage: SEC1_LONGITUDE,
            options: [
              "The two methods competed until only one of them survived.",
              "Cooperation between astronomers ended the rivalry over the prize.",
              "The ocean became easier to cross once maps replaced tables.",
              "Two competing approaches together made it possible to know a ship's position at sea.",
            ],
          },
          answer: { option: 3 },
          points: 1,
          difficulty: 4,
          skills: ["paraphrase"],
          explanation:
            "The sentence holds two ideas in balance — the methods were rivals yet partners, and together they made position knowable. The rivalry-only option picks up half the meaning but drops the partnership.",
          source: "original-practice",
          contentStatus: "published",
        },

        // ---- Select-two questions on the academic passage ------------------
        {
          order: 20,
          type: "MCQ_MULTI",
          stem: "Item 20. Select the TWO things the lunar method required, according to paragraph 2. Choose 2 answers.",
          payload: {
            passage: SEC1_LONGITUDE,
            choose: 2,
            options: [
              "A pendulum clock in good repair",
              "Clear skies for measuring the Moon against the stars",
              "Permission from the prize commissioners",
              "A trial voyage to Jamaica or Barbados",
              "Roughly four hours of calculation",
            ],
          },
          answer: { options: [1, 4] },
          points: 2,
          difficulty: 3,
          skills: ["detail"],
          explanation:
            "Paragraph 2 lists clear skies and four hours of calculation among the method's practical demands. The Jamaica and Barbados voyages were trials of Harrison's clocks, not requirements of the lunar method.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 21,
          type: "MCQ_MULTI",
          stem: "Item 21. Select the TWO statements about Harrison's sea clocks that the passage supports. Choose 2 answers.",
          payload: {
            passage: SEC1_LONGITUDE,
            choose: 2,
            options: [
              "They ran on pendulums that needed no oiling.",
              "They kept time to within a few seconds a day on trial voyages.",
              "They earned the full twenty-thousand-pound prize in 1765.",
              "They eventually became affordable for ordinary merchant ships.",
              "They were designed by a trained royal astronomer.",
            ],
          },
          answer: { options: [1, 3] },
          points: 2,
          difficulty: 4,
          skills: ["detail"],
          explanation:
            "The passage states the accuracy achieved on the Jamaica and Barbados voyages and the later affordability for merchant ships. The prize option is the trap — the full payment was never made outright, and Harrison was a carpenter's son, not an astronomer.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Adaptive simulation — Stage 1 passages
// ---------------------------------------------------------------------------

/** Daily-life text — health center notice (flu clinics). */
const ADAPT1_FLU_NOTICE = `STUDENT HEALTH CENTER — FREE FLU VACCINE CLINICS

Free flu shots are available to all enrolled students every weekday next week. Clinics run from 9 a.m. to 4 p.m. in the Health Center basement; no appointment is needed, but you must bring your student card. Students allergic to eggs should see a nurse first to arrange an alternative vaccine. Wear a short-sleeved shirt and expect to stay fifteen minutes after the injection. Vaccination records are updated automatically in the student portal.`;

/** Short academic passage (≈300 words) — autumn leaf color. */
const ADAPT1_LEAVES = `The Red and Gold of Autumn

Every autumn the deciduous forests of the temperate zones perform the most visible chemistry on Earth: green canopies turn to scarlet, amber and brown within a few weeks. The transformation is not damage but withdrawal. As days shorten, a thin layer of cells at the base of each leaf stem weakens and begins to block the passages that carried water up and sugars down. Cut off from the branch, the leaf dismantles its green pigments and recovers their valuable nitrogen for storage in the tree, in much the same way that a landlord strips a building of its fixtures before closing it.

What is left behind is mostly residue — and color. Chlorophyll, the pigment that captures sunlight for photosynthesis, is expensive to build and the first to be dismantled; once it fades, the yellow pigments that were present all summer, merely hidden, finally show through. They belong to the same carotenoid family that colors carrots and corn, and they assist photosynthesis quietly during the growing season. Red is different: many species manufacture it fresh, from sugars trapped in the dying leaf, apparently as a sunscreen that protects the dismantling process from being overwhelmed by bright autumn light.

Why trees invest in a pigment they will throw away three weeks later remains genuinely unsettled. The leading explanation is defense: autumn leaves often carry insect eggs and fungal spores, and brilliant red may warn egg-laying insects that this particular tree is chemically well armed, persuading them to lay elsewhere. Field studies in Finland and New England have produced evidence both for and against this idea, and the debate continues. Whatever the answer, the colors are not a message to us; we simply happen to be standing near a conversation between trees and insects that began long before our species learned to look.`;

// ---------------------------------------------------------------------------
// 3. Adaptive simulation — Stage 1 routing module (13 raw points)
// ---------------------------------------------------------------------------

export const adaptiveStage1Reading: MockSectionSeed = {
  key: "reading",
  title: "Reading — Stage 1 routing module",
  directions:
    "This is the routing stage of TalkSy's two-stage adaptive Reading simulation. The official TOEFL iBT delivers Reading in two stages — a first module, then an easier or harder second module — but ETS does not publish its routing rule; TalkSy's fixed 60% threshold on this module is a practice adaptation of that design, not the official algorithm. Items are of mixed difficulty and the module is worth 13 raw points (8 questions). You may move freely between questions.",
  timingSec: 480,
  questions: [
    {
      order: 1,
      type: "COMPLETE_WORDS",
      stem: "Item 1. Read the text and complete the ten masked words.",
      payload: {
        context:
          "A geyser is a hot spring that erup___ on a schedule of its own. It forms where groundwater see___ down through cracks in volc___ rock, meets superh___ magma, and turns to steam faster than the steam can escape. In a narr___ plumbing system, the weight of cold water above holds the press___ down until a rising bub___ lifts a little water out of the top; the pressure beneath drops inst___, and the whole column flashes into steam, blast___ water high into the air. Famous geysers like Old Faithful erupt so regularly that tourists can almost set their watches by them, although earthqu___ can change the timing overnight.",
        words: [
          { masked: "erup___", answer: "erupts" },
          { masked: "see___", answer: "seeps" },
          { masked: "volc___", answer: "volcanic" },
          { masked: "superh___", answer: "superheated" },
          { masked: "narr___", answer: "narrow" },
          { masked: "press___", answer: "pressure" },
          { masked: "bub___", answer: "bubble" },
          { masked: "inst___", answer: "instantly" },
          { masked: "blast___", answer: "blasting" },
          { masked: "earthqu___", answer: "earthquakes" },
        ],
      },
      answer: {
        words: ["erupts", "seeps", "volcanic", "superheated", "narrow", "pressure", "bubble", "instantly", "blasting", "earthquakes"],
        answer: "erupts seeps volcanic superheated narrow pressure bubble instantly blasting earthquakes",
      },
      points: 5,
      difficulty: 3,
      skills: ["academic-vocab", "context"],
      explanation:
        "'Superh___' is pinned by the sequence 'meets … magma, and turns to steam'; 'press___' anchors the whole causal chain, appearing again a sentence later as 'the pressure beneath'; and 'earthqu___' is the only natural event that could 'change the timing overnight'.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 2,
      type: "MCQ_SINGLE",
      stem: "Item 2. Read in Daily Life — health center notice. What is this notice mainly about?",
      payload: {
        passage: ADAPT1_FLU_NOTICE,
        options: [
          "How to book a medical appointment online",
          "How and where students can get a free flu vaccination",
          "Symptoms of egg allergy and their treatment",
          "New features of the student portal",
        ],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 2,
      skills: ["main-idea"],
      explanation:
        "Every sentence serves the vaccination clinics: eligibility, hours, place, what to bring and what to expect. The portal appears in one closing detail, not as the subject of the notice.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 3,
      type: "MCQ_SINGLE",
      stem: "Item 3. Health center notice — what must students bring to the clinic?",
      payload: {
        passage: ADAPT1_FLU_NOTICE,
        options: ["Their student card", "A printed vaccination record", "A doctor's note about allergies", "An appointment confirmation"],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "'No appointment is needed, but you must bring your student card' states the requirement directly. Records are updated automatically afterward, so no proof needs to be carried in.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 4,
      type: "MCQ_SINGLE",
      stem: "Item 4. Academic passage — according to paragraph 1, what happens at the base of the leaf stem in autumn?",
      payload: {
        passage: ADAPT1_LEAVES,
        options: [
          "The leaf builds fresh red pigment as a sunscreen.",
          "Chlorophyll is transported into the branch for storage.",
          "A layer of cells begins to block the flow of water and sugars.",
          "Nitrogen is released into the air around the tree.",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "The weakening cells 'begin to block the passages that carried water up and sugars down'. The sunscreen idea belongs to paragraph 2, and it is nitrogen — not chlorophyll — that is recovered for storage.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 5,
      type: "MCQ_SINGLE",
      stem: "Item 5. In paragraph 1, the word 'dismantles' is closest in meaning to —",
      payload: {
        passage: ADAPT1_LEAVES,
        options: ["burns up", "takes apart", "seals off", "copies exactly"],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 3,
      skills: ["vocabulary"],
      explanation:
        "The leaf 'dismantles its green pigments and recovers their valuable nitrogen' — it breaks the pigments down in order to salvage parts of them, exactly like taking something apart. 'Seals off' describes the cells at the stem, not the pigments.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 6,
      type: "MCQ_SINGLE",
      stem: "Item 6. What can be inferred about yellow leaf color?",
      payload: {
        passage: ADAPT1_LEAVES,
        options: [
          "It develops only after the first frost.",
          "It is produced from sugars trapped in the leaf.",
          "It signals that the tree is diseased.",
          "It requires no new pigment production in autumn.",
        ],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 4,
      skills: ["inference"],
      explanation:
        "Paragraph 2 says yellow pigments 'were present all summer, merely hidden' — showing them requires only chlorophyll's disappearance. Production from trapped sugars describes red, not yellow.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 7,
      type: "MCQ_SINGLE",
      stem: "Item 7. Why does the author refer to 'a conversation between trees and insects'?",
      payload: {
        passage: ADAPT1_LEAVES,
        options: [
          "To suggest that autumn colors probably serve a purpose unrelated to human observers",
          "To argue that insects taught trees to change color",
          "To show that scientists have settled the question of red leaves",
          "To imply that trees communicate through sounds",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 4,
      skills: ["inference", "purpose"],
      explanation:
        "The metaphor frames leaf color as a signal exchanged long before humans existed — the point of the closing paragraph. The sounds option is the trap: the author explicitly says the colors are 'not a message to us', and the signal is chemical, not acoustic.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 8,
      type: "MCQ_MULTI",
      stem: "Item 8. Select the TWO statements about leaf pigments that the passage supports. Choose 2 answers.",
      payload: {
        passage: ADAPT1_LEAVES,
        choose: 2,
        options: [
          "Chlorophyll is the cheapest pigment for a tree to build.",
          "Yellow pigments exist in the leaf throughout the summer.",
          "Carotenoids are produced from trapped sugars in dying leaves.",
          "All pigments are stored in the trunk over winter.",
          "Red pigment is manufactured newly in autumn by many species.",
        ],
      },
      answer: { options: [1, 4] },
      points: 2,
      difficulty: 4,
      skills: ["detail"],
      explanation:
        "Yellow was 'present all summer, merely hidden', and red is 'manufactured … fresh'. Chlorophyll is described as expensive to build — the chlorophyll option reverses the text, which is what makes it the strongest distractor.",
      source: "original-practice",
      contentStatus: "published",
    },
  ],
};

// ---------------------------------------------------------------------------
// Adaptive simulation — upper module passages
// ---------------------------------------------------------------------------

/** Upper module academic passage (≈470 words) — quorum sensing in bacteria. */
const ADAPT_UP_QUORUM = `Talking Bacteria: Quorum Sensing

Bacteria were long assumed to be solitary and mindless — single cells drifting toward food and multiplying without reference to their neighbors. That assumption collapsed in the 1970s, when microbiologists studying a luminous marine bacterium found that the organisms glowed only when crowded. The cells were releasing a small signaling molecule into the water while simultaneously monitoring its concentration; once the accumulated signal revealed that the local population had crossed a threshold density, every cell switched on its light-producing genes at once. The behavior amounted to counting — an ability nobody had expected in an organism without a nucleus. Microbiologists named the process quorum sensing, borrowing the language of committee meetings.

The mechanism turned out to be near-universal among bacteria, and it governs far more than glow. Pathogens use it to time their attacks: many harmful species delay releasing toxins until their numbers are high enough to overwhelm the host's defenses, because an early strike by a small population would merely alert the immune system and achieve nothing. Biofilms — the structured, slime-encased communities that coat ship hulls, catheters and water pipes — are likewise assembled by quorum signals that coordinate attachment, matrix production, and the release of free-swimming cells to found new colonies. Even benign residents of the human gut appear to use similar signals to negotiate their position on the intestinal wall, releasing mucus-binding proteins only when their neighbors indicate that space is available.

The discovery has been followed by a pharmacological ambition: if virulence is collective behavior, it might be suppressed without killing anything. Anti-quorum drugs would jam the signaling molecules or their receptors, leaving bacteria alive but effectively deaf, and thus unable to mount a coordinated attack. Such an approach would impose far less selective pressure than conventional antibiotics, which kill susceptible cells and thereby hand resistance to whatever mutants survive. Laboratory results are encouraging — researchers have already identified compounds that mute the cholera pathogen's signals — though two hard problems remain. Signals differ from species to species, so jamming one channel may leave others open; and any molecule that slows bacteria without stopping them invites the question of whether it merely delays the infection it was meant to prevent.

Bacteria, for their part, appear to eavesdrop on other species' signals and even on their hosts, and some have learned to falsify them — releasing fake signals that trick rival populations into misjudging their own density. What began as an oddity of glowing seawater has become a general account of how organisms without brains perceive, decide and act collectively, and the account is still being extended: plant pathologists now study quorum blockers as crop protection, and engineers have built simple circuits in which bacteria sense a pollutant and report it by glowing. The microbes, it turns out, never were mute; we simply lacked the instruments to hear them.`;

// ---------------------------------------------------------------------------
// 4. Adaptive simulation — Stage 2 upper module (18 raw points)
// ---------------------------------------------------------------------------

export const adaptiveUpperReading: MockSectionSeed = {
  key: "reading",
  title: "Reading — Stage 2 upper module",
  directions:
    "The upper-difficulty second stage of TalkSy's two-stage adaptive Reading simulation, reached by scoring 60% or higher on the Stage 1 routing module. Vocabulary is harder and the prose denser than in the lower module — and, as on the real test, the module you receive sets a ceiling on the band you can reach. (TalkSy's fixed 60% threshold is a practice adaptation of ETS's two-stage design; ETS does not publish its official routing algorithm.) Worth 18 raw points (9 questions). You may move freely between questions.",
  timingSec: 600,
  questions: [
    {
      order: 1,
      type: "COMPLETE_WORDS",
      stem: "Item 1. Text 1 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "Feathers pred___ flight by tens of millions of years. The earliest known feathered dinosaurs carried simple fil___ — hollow, unbranched fibers — that could not have aid___ flight in any meaningful sense, which implies that insul___ or disp___ came first and that aerodynamic function arrived later, retrof___ by evolution onto structures built for other purposes. The fossil sequence from Liaoning preserves the transi___ in stages: filaments, then tufts joined at a base, then a central shaft with paired branches, and finally the interloc___, zipper-like microstructure of the modern flight feather. Each stage had util___ of its own; only the last perm___ powered flight.",
        words: [
          { masked: "pred___", answer: "predate" },
          { masked: "fil___", answer: "filaments" },
          { masked: "aid___", answer: "aided" },
          { masked: "insul___", answer: "insulation" },
          { masked: "disp___", answer: "display" },
          { masked: "retrof___", answer: "retrofitted" },
          { masked: "transi___", answer: "transition" },
          { masked: "interloc___", answer: "interlocking" },
          { masked: "util___", answer: "utility" },
          { masked: "perm___", answer: "permitted" },
        ],
      },
      answer: {
        words: ["predate", "filaments", "aided", "insulation", "display", "retrofitted", "transition", "interlocking", "utility", "permitted"],
        answer: "predate filaments aided insulation display retrofitted transition interlocking utility permitted",
      },
      points: 5,
      difficulty: 4,
      skills: ["academic-vocab", "context"],
      explanation:
        "'Pred___ flight' asks for a verb meaning 'came before' — predate. 'Insul___ or disp___' are the two classic early functions of feathers, warmth and show; and 'interloc___, zipper-like microstructure' describes the barbules that zip a feather back together, the hallmark of the flight feather.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 2,
      type: "COMPLETE_WORDS",
      stem: "Item 2. Text 2 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "The lighthouse is economics' favorite parab___ because its beam is impossible to sell select___: every ship within sight benef___ whether or not it has paid, which makes the service a textbook publ___ good. Historians have complic___ the story. Many were in fact financ___ by ports and by fees levi___ on ships that docked nearby — not by passing vessels — so excl___ was possible after all, if only at the harb___ rather than at sea. The revised account matters because it suggests that property-like solutions to public-good problems are more feas___ than the parable allows, provided the toll can be collected at a bottleneck rather than along the open coast.",
        words: [
          { masked: "parab___", answer: "parable" },
          { masked: "select___", answer: "selectively" },
          { masked: "benef___", answer: "benefits" },
          { masked: "publ___", answer: "public" },
          { masked: "complic___", answer: "complicated" },
          { masked: "financ___", answer: "financed" },
          { masked: "levi___", answer: "levied" },
          { masked: "excl___", answer: "exclusion" },
          { masked: "harb___", answer: "harbor" },
          { masked: "feas___", answer: "feasible" },
        ],
      },
      answer: {
        words: ["parable", "selectively", "benefits", "public", "complicated", "financed", "levied", "exclusion", "harbor", "feasible"],
        answer: "parable selectively benefits public complicated financed levied exclusion harbor feasible",
      },
      points: 5,
      difficulty: 5,
      skills: ["academic-vocab", "context"],
      explanation:
        "'Parab___' is the economist's teaching story, pinned by 'The lighthouse is economics' favorite …'; 'publ___ good' is the technical term the sentence itself defines (no payer can be excluded); and 'excl___' is recoverable because charging ships at the next port makes non-payers excludable — exclusion was possible after all.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 3,
      type: "MCQ_SINGLE",
      stem: "Item 3. Academic passage — what is the passage mainly about?",
      payload: {
        passage: ADAPT_UP_QUORUM,
        options: [
          "Why marine bacteria evolved the ability to glow at night",
          "The differences between bacteria and organisms that have nuclei",
          "How bacteria coordinate group behavior with chemical signals, and the medical possibilities that follow",
          "How engineers build simple circuits from living cells",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 4,
      skills: ["main-idea"],
      explanation:
        "The passage runs from the discovery of quorum sensing, through its roles in pathogens, biofilms and the gut, to anti-quorum medicine. The glowing-bacteria option stays at the opening anecdote instead of the passage's organizing subject.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 4,
      type: "MCQ_SINGLE",
      stem: "Item 4. According to paragraph 1, when do the marine bacteria switch on their light genes?",
      payload: {
        passage: ADAPT_UP_QUORUM,
        options: [
          "When the accumulated signaling molecule shows the population has crossed a threshold",
          "As soon as nutrients in the surrounding water run low",
          "When each cell detects a host's immune system",
          "After their receptors are destroyed by rivals",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 4,
      skills: ["detail"],
      explanation:
        "The cells monitor the signal's concentration, and 'once the accumulated signal revealed that the local population had crossed a threshold density, every cell switched on'. Nutrients and immune systems belong to later paragraphs about other behaviors.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 5,
      type: "MCQ_SINGLE",
      stem: "Item 5. In paragraph 2, the word 'mount' is closest in meaning to —",
      payload: {
        passage: ADAPT_UP_QUORUM,
        options: ["climb onto", "carry out", "increase slowly", "detect early"],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 4,
      skills: ["vocabulary"],
      explanation:
        "Bacteria made 'deaf' by the new drugs are 'unable to mount a coordinated attack' — to mount an attack is to launch or carry it out. The literal climbing sense is the distractor.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 6,
      type: "MCQ_SINGLE",
      stem: "Item 6. What can be inferred about conventional antibiotics from paragraph 3?",
      payload: {
        passage: ADAPT_UP_QUORUM,
        options: [
          "They kill bacteria by blocking their signaling receptors.",
          "They are permanently deaf to bacterial signals.",
          "They slow infections without ever stopping them.",
          "They give resistant mutants a survival advantage over other bacteria.",
        ],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 5,
      skills: ["inference"],
      explanation:
        "Antibiotics 'kill susceptible cells and thereby hand resistance to whatever mutants survive' — the survivors inherit the field. The 'slow infections' option describes the risk attached to the hoped-for anti-quorum drugs, not today's antibiotics.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 7,
      type: "MCQ_SINGLE",
      stem: "Item 7. Which sentence best expresses the essential information in: 'Such an approach would impose far less selective pressure than conventional antibiotics, which kill susceptible cells and thereby hand resistance to whatever mutants survive.'?",
      payload: {
        passage: ADAPT_UP_QUORUM,
        options: [
          "By not killing susceptible bacteria, anti-quorum drugs should spread resistance more slowly than antibiotics do.",
          "Conventional antibiotics kill only the mutants that survive treatment.",
          "Selective pressure makes bacteria mutate into resistant forms.",
          "Anti-quorum drugs fail whenever susceptible cells are present.",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 5,
      skills: ["paraphrase"],
      explanation:
        "The sentence contrasts killing, which selects for resistant survivors, with non-killing interference, which does not. The mutation option is the classic misreading — the passage says selection favors existing mutants, not that it causes mutation.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 8,
      type: "MCQ_SINGLE",
      stem: "Item 8. According to paragraph 2, why do pathogens delay releasing toxins?",
      payload: {
        passage: ADAPT_UP_QUORUM,
        options: [
          "Toxins are lethal to the bacteria that produce them.",
          "Toxins work only against competing bacterial species.",
          "An attack by a small population would only alert the host's defenses.",
          "The toxins need quorum signals to become chemically active.",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 4,
      skills: ["detail"],
      explanation:
        "'An early strike by a small population would merely alert the immune system and achieve nothing' — hence the wait for numbers. The passage never suggests the toxins are chemically inactive until a signal arrives.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 9,
      type: "MCQ_MULTI",
      stem: "Item 9. Select the TWO remaining difficulties for anti-quorum drugs that paragraph 3 names. Choose 2 answers.",
      payload: {
        passage: ADAPT_UP_QUORUM,
        choose: 2,
        options: [
          "Bacteria develop resistance to quorum drugs faster than to antibiotics",
          "The drugs also jam signals produced by the host's own cells",
          "Different species use different signals, so one jammed channel may not be enough",
          "Regulators have banned clinical trials of quorum blockers",
          "A drug that slows bacteria without stopping them may only postpone disease",
        ],
      },
      answer: { options: [2, 4] },
      points: 2,
      difficulty: 5,
      skills: ["detail", "inference"],
      explanation:
        "The paragraph names exactly two hard problems: species-specific signals and the risk of mere delay. Resistance is the problem anti-quorum drugs are hoped to avoid, and neither host-cell jamming nor regulatory bans appears in the text.",
      source: "original-practice",
      contentStatus: "published",
    },
  ],
};

// ---------------------------------------------------------------------------
// Adaptive simulation — lower module passages
// ---------------------------------------------------------------------------

/** Lower module academic passage (≈310 words) — beavers as ecosystem engineers. */
const ADAPT_LOW_BEAVER = `The Beaver: Nature's Engineer

Few animals change their surroundings as deliberately as the beaver. Using its strong front teeth to cut down small trees, a beaver family builds a dam across a shallow stream, raising the water level until a pond forms behind it. A single family can raise the water by a meter or more, turning a trickle into a small lake. In the middle of the pond stands the family lodge, a mound of sticks and mud with underwater entrances, and beneath the pond's surface the beavers store a winter supply of branches. The pond is not an accident; it is the point of the whole construction.

The effects reach far beyond one family of rodents. Beaver ponds slow the flow of a stream, letting mud and sand settle to the bottom, so the water downstream runs clearer. The still water soaks into the ground, raising the water table and keeping the stream alive during dry summers. Frogs, fish, ducks, insects and migrating birds move in quickly; otters hunt in the deeper channels, and herons fish where the shallows warm in the sun. Beaver wetlands become some of the richest wildlife habitat in temperate regions.

This engineering is not always welcome. Beavers flood roads, kill orchard trees by stripping their bark, and block culverts that road crews must clear again and again. In the nineteenth century, trapping for fur had nearly wiped beavers out across much of North America and Europe, and many streams that once held ponds ran straight and fast, cutting deeper channels and draining the land beside them. Today many regions are bringing beavers back, sometimes by truck and sometimes by law, and the results have usually matched what scientists predicted: wetter ground, more wildlife, occasional complaints from farmers, and a landscape that holds water in exactly the years when water is most scarce.`;

// ---------------------------------------------------------------------------
// 5. Adaptive simulation — Stage 2 lower module (18 raw points)
// ---------------------------------------------------------------------------

export const adaptiveLowerReading: MockSectionSeed = {
  key: "reading",
  title: "Reading — Stage 2 lower module",
  directions:
    "The lower-difficulty second stage of TalkSy's two-stage adaptive Reading simulation, reached by scoring below 60% on the Stage 1 routing module. Texts are clearer and vocabulary more frequent, so you can rebuild accuracy and pacing before trying the upper module — remember that on the real test the module you receive also sets the ceiling on the band you can reach. (TalkSy's fixed 60% threshold is a practice adaptation of ETS's two-stage design; ETS does not publish its official routing algorithm.) Worth 18 raw points (9 questions). You may move freely between questions.",
  timingSec: 600,
  questions: [
    {
      order: 1,
      type: "COMPLETE_WORDS",
      stem: "Item 1. Text 1 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "The salmon spends its life traveling between two worlds. It hat___ in a cold, gravel-bottomed stream, where the young fish, called fry, hide from pred___ among the stones. After a year or more, the growing fish drift downstream to the oce___, where food is plent___ and it may mult___ its weight many times. When it is fully grown, an urg___ older than memory draws it back: the salmon swims hund___ of miles upriver, leaping up waterf___ and past hun___ bears, guided by the smell of its home stream. There it lays its eggs on the same grav___ where it was born, and, its work finished, it dies.",
        words: [
          { masked: "hat___", answer: "hatches" },
          { masked: "pred___", answer: "predators" },
          { masked: "oce___", answer: "ocean" },
          { masked: "plent___", answer: "plentiful" },
          { masked: "mult___", answer: "multiply" },
          { masked: "urg___", answer: "urge" },
          { masked: "hund___", answer: "hundreds" },
          { masked: "waterf___", answer: "waterfalls" },
          { masked: "hun___", answer: "hungry" },
          { masked: "grav___", answer: "gravel" },
        ],
      },
      answer: {
        words: ["hatches", "predators", "ocean", "plentiful", "multiply", "urge", "hundreds", "waterfalls", "hungry", "gravel"],
        answer: "hatches predators ocean plentiful multiply urge hundreds waterfalls hungry gravel",
      },
      points: 5,
      difficulty: 2,
      skills: ["academic-vocab", "context"],
      explanation:
        "'Hat___' is restored by the logic of birth in the stream — eggs hatch where the story begins; 'pred___' is what the young fry hide from among the stones; and 'grav___' appears spelled out earlier in the paragraph ('a cold, gravel-bottomed stream'), so the last sentence hands you the answer.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 2,
      type: "COMPLETE_WORDS",
      stem: "Item 2. Text 2 — read the passage and complete the ten masked words.",
      payload: {
        context:
          "The first bicycles had no ped___ at all: rid___ pushed the ground with their feet on wood___ machines nicknamed 'hobby horses'. Pedals arrived in the 1840s on machines with enorm___ front wheels, which made them fast but shockingly dang___ — a stone in the road could throw the rider over the handle___. The breakthrough was the 'safety' bicycle of 1885, with two equ___-sized wheels, a chain drive and pneum___ tires. Suddenly the bicycle was safe enough for everyone, cheap enough for workers, and lib___ enough that it swept across the world within a dec___. Historians argue that women's clothing changed faster because of the bicycle than because of any reformer.",
        words: [
          { masked: "ped___", answer: "pedals" },
          { masked: "rid___", answer: "riders" },
          { masked: "wood___", answer: "wooden" },
          { masked: "enorm___", answer: "enormous" },
          { masked: "dang___", answer: "dangerous" },
          { masked: "handle___", answer: "handlebars" },
          { masked: "equ___", answer: "equal" },
          { masked: "pneum___", answer: "pneumatic" },
          { masked: "lib___", answer: "liberating" },
          { masked: "dec___", answer: "decade" },
        ],
      },
      answer: {
        words: ["pedals", "riders", "wooden", "enormous", "dangerous", "handlebars", "equal", "pneumatic", "liberating", "decade"],
        answer: "pedals riders wooden enormous dangerous handlebars equal pneumatic liberating decade",
      },
      points: 5,
      difficulty: 3,
      skills: ["academic-vocab", "context"],
      explanation:
        "'Ped___' is given away later in the text ('Pedals arrived in the 1840s'); 'dang___' is confirmed by the image of a rider thrown over the handlebars; and 'dec___' means ten years — the time in which the safety bicycle 'swept across the world'.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 3,
      type: "MCQ_SINGLE",
      stem: "Item 3. Academic passage — what is the passage mainly about?",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        options: [
          "How to raise beavers on a farm for their fur",
          "How beavers transform streams, and the good and bad results of that work",
          "Why beavers nearly disappeared in the nineteenth century",
          "How beavers protect their young from predators",
        ],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 2,
      skills: ["main-idea"],
      explanation:
        "The passage moves from how beavers build, to the ecological benefits, to the conflicts and the comeback. Trapping is covered, but only inside the final paragraph — it is part of the story, not the story itself.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 4,
      type: "MCQ_SINGLE",
      stem: "Item 4. According to paragraph 1, why do beavers build dams?",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        options: [
          "To create a pond that protects the lodge and stores food",
          "To stop floods caused by heavy rain",
          "To make the stream easier to cross",
          "To keep the water cool in summer",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "The pond holds the lodge with its underwater entrances and covers the winter supply of branches. The paragraph says plainly that the pond 'is the point of the whole construction'.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 5,
      type: "MCQ_SINGLE",
      stem: "Item 5. According to paragraph 2, how do beaver ponds make the water downstream clearer?",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        options: [
          "They filter water through the lodge walls.",
          "They cause fish to eat floating plants.",
          "They slow the stream so mud and sand sink to the bottom.",
          "They warm the water so mud dissolves.",
        ],
      },
      answer: { option: 2 },
      points: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "'Letting mud and sand settle to the bottom' is the mechanism. Options about lodge walls and dissolving mud add details the passage never mentions — a favorite wrong-answer pattern.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 6,
      type: "MCQ_SINGLE",
      stem: "Item 6. In paragraph 3, the phrase 'wiped out' is closest in meaning to —",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        options: ["driven to another region", "protected by law", "counted for the first time", "killed off"],
      },
      answer: { option: 3 },
      points: 1,
      difficulty: 3,
      skills: ["vocabulary"],
      explanation:
        "Trapping 'nearly wiped beavers out' — it almost eliminated them entirely. 'Driven away' sounds close, but the near-total loss described by the following sentences (empty ponds, drained land) points to killing, not relocation.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 7,
      type: "MCQ_SINGLE",
      stem: "Item 7. What can be inferred about streams after the beavers were removed?",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        options: [
          "They flooded more often in rainy years.",
          "They flowed faster and the land beside them grew drier.",
          "They became richer wildlife habitat.",
          "They were soon occupied by other rodents.",
        ],
      },
      answer: { option: 1 },
      points: 1,
      difficulty: 3,
      skills: ["inference"],
      explanation:
        "Without ponds, streams 'ran straight and fast, cutting deeper channels and draining the land beside them'. The richer-habitat option reverses the paragraph's point — ponds, not fast streams, create habitat.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 8,
      type: "MCQ_SINGLE",
      stem: "Item 8. What does the passage suggest about bringing beavers back?",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        options: [
          "It has mostly produced the benefits scientists predicted, along with some problems.",
          "It has failed wherever farmers complained.",
          "It works only in regions where trapping is illegal.",
          "It has made water scarcer in dry years.",
        ],
      },
      answer: { option: 0 },
      points: 1,
      difficulty: 3,
      skills: ["inference"],
      explanation:
        "The results 'matched what scientists predicted: wetter ground, more wildlife, occasional complaints'. The complaints are real, but they sit inside a generally positive outcome, not a failure.",
      source: "original-practice",
      contentStatus: "published",
    },
    {
      order: 9,
      type: "MCQ_MULTI",
      stem: "Item 9. Select the TWO effects of beaver ponds that paragraph 2 mentions. Choose 2 answers.",
      payload: {
        passage: ADAPT_LOW_BEAVER,
        choose: 2,
        options: [
          "They raise the level of underground water.",
          "They cut deeper channels into the land.",
          "They strip bark from orchard trees.",
          "They provide habitat for many animals.",
          "They keep streams from freezing in winter.",
        ],
      },
      answer: { options: [0, 3] },
      points: 2,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "Paragraph 2 credits ponds with raising the water table and attracting wildlife. Deeper channels and stripped bark are costs described in paragraph 3 — costs of beavers, not effects of the ponds themselves.",
      source: "original-practice",
      contentStatus: "published",
    },
  ],
};
