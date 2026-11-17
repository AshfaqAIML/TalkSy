/**
 * Full IELTS simulations (sample length, full four-section structure).
 * Academic and General Training versions with completely separate banks.
 */

import type { MockSeed } from "./mocks";
import { mockDescription } from "./mocks";

// ---------------------------------------------------------------------------
// Shared passages (original, written for this platform)
// ---------------------------------------------------------------------------

const PRICE_OF_FREE_SHIPPING = `The Price of Free Shipping

When an online retailer promises "free returns", the cost has not vanished; it has moved. Every garment that is ordered in three sizes so one can be kept, every sofa that arrives in the wrong shade and goes back, generates a chain of labour, transport and disposal whose bill is settled somewhere — just not at the checkout.

The scale surprises even people in the trade. Industry surveys suggest that around a third of online fashion is returned, against roughly a tenth of goods bought in physical stores. Each returned parcel is handled several times: collected, sorted, graded, repackaged or liquidated. A meaningful share never returns to the shelf at all — if the item is out of season when it arrives back, it is often cheaper to sell it in bulk to discounters, and a slice is simply destroyed.

Retailers respond by quietly adjusting prices to cover expected returns, which means shoppers who keep what they buy subsidise shoppers who do not. Some have begun publishing the carbon cost of a return next to the return label, on the theory that customers who can see the footprint will send fewer things back. Early trials cut returns by several per cent — helpful, but hardly a transformation.

The deeper problem is structural. Competition on search pages rewards generosity, because a liberal returns policy raises conversion, and conversion is what the ranking algorithm measures. A retailer that unilaterally tightened its rules would watch its position sink. Only collective action or regulation, of the kind that fixed takeaway packaging in several countries, seems able to change the arithmetic — and that, history suggests, arrives slowly.`;

const COUNTING_BY_CROWDS = `Counting by Crowds

In the summer of 2007, a team of biologists asked the public to look at photographs of the Milky Way and classify the shapes they saw. Within a day, volunteers had produced more classifications than the team's own experts had managed in years. That project folded soon afterwards, but the model it proved — distribute a task that machines find hard across thousands of people who find it easy — has since spread from astronomy to medicine, ecology and history.

The appeal is not only cheap labour, though it is certainly cheap. Human eyes still outperform algorithms at the awkward middle ground of pattern recognition: the smudged cell in a slide, the whale fluke in a holiday photograph, the faint difference between one medieval hand and another. Projects typically ask participants to answer a small structured question, then cross-check novices against known answers so that a reliable accuracy score can be attached to each contributor.

Sceptics worry about quality, and the worry is not foolish. But the evidence so far points the other way: when thousands of independent guesses are averaged, the errors of individuals cancel out, and the crowd's aggregate judgement is frequently indistinguishable from a panel of specialists. One medicine project found its volunteers identified early signs of a condition in images as reliably as trained staff — and considerably faster.

The open question is what happens to the volunteers themselves. Organisers report that a small core does most of the work, and surveys of that core describe something old-fashioned: the pleasure of being useful with one's eyes and attention. Whether that satisfaction survives as projects migrate to phone screens — where sessions are shorter and attention thinner — is the subject of current study.`;

const HIGH_STREET_RETURN = `The Return of the High Street

For twenty years the story of the high street was a story of subtraction: the butcher closed, then the bank, then the shoe shop, and each departure made the street a little less worth visiting, which took the next shop with it. Planners responded with the only tools they had — parking discounts, late-opening events, grants for new façades — and the decline slowed, but nobody claimed it had stopped.

What has changed recently is more interesting than the subsidies. Small traders began selling what the internet could not stock: presence. A shop is now as likely to be a stage as a warehouse. The baker teaches sourdough on Monday nights; the bookshop charges for an evening of reading recommendations and wine; the bike shop makes most of its margin on repairs and club rides, and keeps two walls of stock mainly to have something to talk about.

Rent has followed. Landlords who once demanded long leases from national chains now prefer short, flexible terms with independents — lower income per square metre, but a street that changes monthly, which is precisely what footfall research says people will travel for. Some councils have begun treating vacancy itself as the product: a pop-up market of five empty units draws more visitors than one permanent shop that nobody visits twice.

None of this restores the high street of 1985, and the nostalgia that expects it to is chasing the wrong thing. What appears to be emerging is narrower but sturdier: fewer shops, doing more things, in buildings whose use changes as often as the weather. The question no longer answered by the market alone is who pays for the parts of a street that produce no revenue — the bench, the tree, the sense that it is safe to walk slowly — and the early evidence is that places which answer it well are busy, and places which do not are quiet, whatever they sell.`;

// ---------------------------------------------------------------------------
// IELTS Academic — Full Mock 1
// ---------------------------------------------------------------------------

export const academicFullMock1: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Academic Full Mock 1 (sample length)",
  kind: "full",
  lengthLabel: "sample",
  description: mockDescription(
    "A complete four-section simulation at sample length: Listening Parts 1–4, one Academic Reading passage with mixed question types, Academic Writing Tasks 1–2, and Speaking Parts 1–3.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening (Parts 1–4, sample)",
      directions:
        "You will hear a gym enrolment conversation (Part 1), a community announcement (Part 2), a seminar discussion (Part 3) and an academic lecture (Part 4). Play each recording once, then answer. Official section: 30 minutes for 40 questions; this sample has 4 items.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            audioScript:
              "RECEPTIONIST: Greenacres Sports Centre, good morning — are you calling about membership? CALLER: Yes, please. I'd like the one with the classes included. RECEPTIONIST: That's our gold membership — thirty-five a month, and it includes every scheduled class. Can I take a few details? Your name? CALLER: Rita Harper — that's H-A-R-P-E-R. RECEPTIONIST: Thank you. And a contact number? CALLER: Oh seven seven double six, four one five, two nine eight. RECEPTIONIST: Lovely. You can start any time — shall we say the first of March? CALLER: Actually I'm away that weekend. Could we make it the fourth? RECEPTIONIST: The fourth of March, that's fine. See you then, Ms Harper.",
            context:
              "Greenacres Sports Centre — new membership\nName: Rita ___ (1)\nMembership: ___ (2) — includes classes\nContact: 07766 415 298\nStart date: the ___ of March (3)",
            blanks: [
              { answer: "Harper", alternatives: ["harper"] },
              { answer: "gold", alternatives: [] },
              { answer: "fourth", alternatives: ["4th", "four"] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "Harper" }, { answer: "gold" }, { answer: "fourth", numbers: true }] },
          points: 3,
          skills: ["spelling", "detail", "numbers"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "ORGANISER: Hello volunteers — quick changes to Saturday's tree planting in Miller Park. It was going to be a nine o'clock start, but the ground crew can't unlock the storage container before half past nine, so we'll gather at nine thirty at the side gate — not the main gate, which stays locked all weekend. Bring your own gloves; we provide everything else. Lunch is now soup and bread — the caterer's van broke down — and it's still free. One last thing: the park's car park is closed for resurfacing, so please come by bus if you can.",
            options: [
              "The start time has moved from 9:00 to 9:30, and volunteers meet at the side gate.",
              "The main gate opens at 9:30 and the start time is unchanged.",
              "The event now begins at 9:00 at the side gate, with lunch after.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 3,
          type: "MCQ_MULTI",
          stem: "Question 5. The seminar pair agree on TWO things. Choose TWO letters, A–E.",
          payload: {
            audioScript:
              "TUTOR: So, for your project — any worries? STUDENT A: The sample size. If we only interview twenty people, can we really say anything? STUDENT B: I think we can, as long as we're honest about the limits. What worries me is the reading load — everyone else seems to have found ten articles and I've found forty. STUDENT A: That's a time problem, not a quality problem. TUTOR: Both points are fair. What I'd add is the deadline for ethics approval — that's the one that actually stops projects, because without it you can't interview anyone at all. STUDENT A: True — that's the hard constraint. STUDENT B: Agreed. And for the record, I don't think the software licence is an issue; the department has spare seats.",
            options: [
              "The ethics approval deadline is the binding constraint on the project.",
              "The reading load is unevenly distributed between them.",
              "The software licence is unavailable to students.",
              "Twenty interviews are enough if the limits are stated honestly.",
              "The tutor will find the extra articles for them.",
            ],
            choose: 2,
          },
          answer: { options: [0, 3] },
          points: 2,
          skills: ["agreement", "distractors"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Questions 6–7. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            audioScript:
              "LECTURER: ...what still surprises researchers is how much of the journey happens in the dark. The bar-tailed godwit flies the length of the Pacific in a single non-stop flight, and radar tracking shows the birds climb at dusk, hold their bearing through the night, and descend to feed at first light over mudflats. They navigate, as far as we can tell, by a combination of star patterns, the earth's magnetic field, and an internal clock that keeps them oriented — distances covered in one season can exceed twelve thousand kilometres. What they cannot do is swim: lose the timing, and a bird that lands on open water is, in effect, stranded...",
            context:
              "Migration notes — the bar-tailed godwit\n· climbs at dusk, feeds at first light over ___ (6)\n· navigates by stars, the earth's magnetic field and an internal ___ (7)",
            blanks: [
              { answer: "mudflats", alternatives: ["mud flats"] },
              { answer: "clock", alternatives: [] },
            ],
            words: 1,
          },
          answer: { blanks: [{ answer: "mudflats" }, { answer: "clock" }] },
          points: 2,
          skills: ["detail", "academic-vocab"],
        },
      ],
    },
    {
      key: "reading",
      title: "Academic Reading (1 passage, sample)",
      directions:
        "Read the passage and answer questions 1–9. Official section: 60 minutes for 40 questions over three passages; this sample has one passage with mixed types.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Question 1. Choose the correct letter, A, B, C or D.",
          payload: {
            passage: PRICE_OF_FREE_SHIPPING,
            options: [
              "Only fashion retailers offer free returns.",
              "Around a third of online fashion is returned, against roughly a tenth of goods bought in shops.",
              "Returned goods are always destroyed rather than resold.",
              "Retailers have stopped adjusting prices to cover returns.",
            ],
          },
          answer: { option: 1 },
          skills: ["detail", "numbers"],
        },
        {
          order: 2,
          type: "TFNG",
          stem: "Questions 2–3. Do the following statements agree with the information given in the passage? TRUE if the statement agrees with the information; FALSE if it contradicts the information; NOT GIVEN if there is no information on this.",
          payload: {
            passage: PRICE_OF_FREE_SHIPPING,
            statement: "Publishing the carbon cost of a return next to the return label has had no measurable effect on return rates.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 3,
          type: "TFNG",
          payload: {
            statement: "Shoppers who keep what they buy help pay for the returns of shoppers who do not.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 4,
          type: "TFNG",
          stem: "Questions 4–5. Do the following statements reflect the claims of the writer? YES if the statement reflects the writer's views; NO if it contradicts them; NOT GIVEN if there is no view on this.",
          payload: {
            passage: PRICE_OF_FREE_SHIPPING,
            statement: "Search-page competition actively rewards generous returns policies.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["writer-claims", "paraphrase"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: {
            statement: "The writer believes online shopping should be banned for environmental reasons.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["writer-claims", "not-given"],
        },
        {
          order: 6,
          type: "MATCHING",
          stem: "Questions 6–7. Which paragraph (A–D) contains the following information? Choose ONE paragraph for each statement.",
          payload: {
            passage: PRICE_OF_FREE_SHIPPING,
            prompt: "Two statements; one paragraph each.",
            items: [
              { id: "s1", text: "A destination for returned goods that never return to the shelf" },
              { id: "s2", text: "A measure whose effect on return rates was real but modest" },
            ],
            options: [
              { id: "A", text: "Paragraph A (introduction — the cost has moved)" },
              { id: "B", text: "Paragraph B (scale of returns and what happens to them)" },
              { id: "C", text: "Paragraph C (carbon labelling and its limits)" },
              { id: "D", text: "Paragraph D (structural competition and regulation)" },
            ],
          },
          answer: { pairs: { s1: "B", s2: "C" } },
          points: 2,
          skills: ["scan", "detail"],
        },
        {
          order: 7,
          type: "FILL_BLANK",
          stem: "Questions 7–8. Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          payload: {
            context:
              "Online retailers compete on search pages, where a generous returns policy improves ___ (7) — the figure the ranking system rewards. Because no single retailer can tighten its rules alone, the writer argues that only ___ (8) or regulation can change the economics.",
            blanks: [
              { answer: "conversion", alternatives: [] },
              { answer: "collective action", alternatives: ["collective action"] },
            ],
            words: 2,
          },
          answer: { blanks: [{ answer: "conversion" }, { answer: "collective action" }] },
          points: 2,
          skills: ["paraphrase", "detail"],
        },
      ],
    },
    {
      key: "writing",
      title: "Academic Writing (Tasks 1–2)",
      directions:
        "You have 60 minutes for both tasks. Spend about 20 minutes on Task 1 and 40 on Task 2. Task 2 carries twice the weight.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "The graph below shows cinema admissions (in millions) in one country between 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            supporting:
              "Cinema admissions (millions)\n1990: 97\n1995: 114\n2000: 156\n2005: 129\n2010: 171\n2015: 165\n2020: 44 (theatres closed for much of the year)",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — line graph",
          },
          points: 0,
          skills: ["task-achievement", "coherence", "lexical", "grammar"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Many employers now allow staff to work from home for most of the week. Some people think this mainly benefits workers; others think it damages teamwork and company culture. Discuss both these views and give your own opinion.",
            minWords: 250,
            suggestedMinutes: 40,
            rubricKey: "ielts.writing",
            part: "Task 2 — discussion essay",
          },
          points: 0,
          skills: ["task-response", "coherence", "lexical", "grammar"],
        },
      ],
    },
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions:
        "This sample records your answers as notes/transcripts and grades them against the speaking band descriptors. In the real test you speak to an examiner for 11–14 minutes.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 1 — Let's talk about where you live and about food. Do you live in a house or an apartment? What do you like about the area? Do you enjoy cooking, or do you prefer eating out?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — introduction and interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe an object you use every day. You should say: what it is · how long you have had it · what you use it for · and explain why it matters to you. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — individual long turn",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Do you think people own too many things these days? Why do some people become attached to objects? Should schools teach children to repair things rather than replace them?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — two-way discussion",
          },
          points: 0,
          skills: ["coherence", "grammar"],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// IELTS Academic — Full Mock 2
// ---------------------------------------------------------------------------

export const academicFullMock2: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Academic Full Mock 2 (sample length)",
  kind: "full",
  lengthLabel: "sample",
  description: mockDescription(
    "A second complete Academic simulation with entirely different material: mixed Listening parts, a citizen-science reading passage, a table-based Task 1 with a two-part Task 2, and new speaking prompts.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening (Parts 1–4, sample)",
      directions:
        "You will hear a repair-booking call (Part 1), a library tour talk (Part 2), a tutorial discussion (Part 3) and a lecture on urban heat (Part 4). Play each recording once. Official section: 30 minutes for 40 questions; this sample has 4 items.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the note below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            audioScript:
              "AGENT: Hallam Repairs, how can I help? CALLER: My washing machine's leaking. It's a Continuum 300 — about six years old, out of guarantee, I'm afraid. AGENT: No problem. We can send an engineer on Thursday the twenty-second — morning or afternoon? CALLER: Afternoon. I'm at 15 Beacon Road — that's B-E-A-C-O-N, and it's the flat above the bakery. AGENT: Beacon Road, above the bakery — and a contact number? CALLER: 0-3-1 446 2090 — that's a work number; I'm there till six. AGENT: And what seems to be wrong, so he can bring the right parts? CALLER: Water under the door and the drum won't finish its cycle. AGENT: Understood — he'll call before three on the day.",
            context:
              "Hallam Repairs — visit booking\nItem: Continuum 300 washing machine (out of guarantee)\nVisit: Thursday the ___ (1), afternoon\nAddress: 15 ___ Road, flat above the bakery (2)\nFault: water under the door; the ___ won't finish its cycle (3)",
            blanks: [
              { answer: "twenty-second", alternatives: ["22nd", "twenty second"] },
              { answer: "Beacon", alternatives: ["beacon"] },
              { answer: "drum", alternatives: [] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "twenty-second", numbers: true }, { answer: "Beacon" }, { answer: "drum" }] },
          points: 3,
          skills: ["spelling", "numbers", "detail"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "LIBRARIAN: ...and finally the collections themselves. Fiction stays here on the ground floor, as it always was. The DVDs you'll now find on the second floor — they used to share the ground floor with the newspapers, but we needed the space for the children's zone. Newspapers and magazines moved to the first floor, next to the quiet study room. If anything isn't where this map says, do ask: the map is printed monthly and even we can't always keep up.",
            options: [
              "The DVDs are now on the second floor, having moved from the ground floor.",
              "The DVDs remain on the ground floor beside the newspapers.",
              "The newspapers are now kept on the second floor.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 3,
          type: "MCQ_MULTI",
          stem: "Question 5. Which TWO warnings does the tutor give? Choose TWO letters, A–E.",
          payload: {
            audioScript:
              "TUTOR: Before you write the questionnaire — two warnings. First, don't ask people to rank more than five items; past that, answers are noise, and you'll build your whole analysis on noise. Second, avoid leading questions — 'how much do you enjoy the service' assumes enjoyment; run a pilot on five friends and see if any question forces an answer. And a practical one: the ethics committee needs the final wording, not a draft, and they meet fortnightly, so work backwards from your deadline. What I would NOT worry about is length — one page is plenty if every question earns its place.",
            options: [
              "Ranking more than five items produces unreliable data.",
              "Questionnaires should be at least four pages long.",
              "Leading questions can force answers — pilot them on a few people.",
              "The ethics committee needs the final wording, not a draft.",
              "The pilot should be run instead of the ethics application.",
            ],
            choose: 2,
          },
          answer: { options: [0, 2] },
          points: 2,
          skills: ["main-idea", "distractors"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Questions 6–7. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            audioScript:
              "LECTURER: Cities, it turns out, run hot — sometimes two or three degrees hotter than the fields around them, and at night the gap widens. The cause is not mystery but arithmetic: dark surfaces drink in the day's sunlight and give it back slowly after dark, and every air conditioner pumps the heat it removes from a room out into the street. Engineers call the effect an urban heat island, and the cheapest medicine is old-fashioned shade — trees cool by evaporation as well as shadow, which is why a street lined with them can be measurably cooler at dusk than a plaza of stone. The hard part is who pays for a tree: it lowers bills for everyone and earns revenue for no one...",
            context:
              "Urban heat islands — lecture notes\n· Cities can run 2–3°C hotter than nearby ___ (6)\n· Cheapest remedy: shade — trees cool by evaporation as well as ___ (7)",
            blanks: [
              { answer: "fields", alternatives: [] },
              { answer: "shadow", alternatives: ["shade"] },
            ],
            words: 1,
          },
          answer: { blanks: [{ answer: "fields" }, { answer: "shadow" }] },
          points: 2,
          skills: ["detail", "academic-vocab"],
        },
      ],
    },
    {
      key: "reading",
      title: "Academic Reading (1 passage, sample)",
      directions: "One passage, mixed types, official 60-minute timing context.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "MATCHING",
          stem: "Questions 1–2. Choose the most suitable heading (i–vi) for each paragraph. TWO headings will not be used.",
          payload: {
            passage: COUNTING_BY_CROWDS,
            prompt: "Match paragraphs B and D to their headings.",
            items: [
              { id: "pB", text: "Paragraph B" },
              { id: "pD", text: "Paragraph D" },
            ],
            options: [
              { id: "i", text: "i — A proof of concept from astronomy" },
              { id: "ii", text: "ii — Why human eyes beat algorithms at awkward patterns" },
              { id: "iii", text: "iii — Quality fears that the evidence does not support" },
              { id: "iv", text: "iv — What the volunteers get out of it" },
              { id: "v", text: "v — The crowd pays for its own training" },
              { id: "vi", text: "vi — Machines have now caught up in medicine" },
            ],
          },
          answer: { pairs: { pB: "ii", pD: "iv" } },
          points: 2,
          skills: ["main-idea", "paraphrase"],
        },
        {
          order: 2,
          type: "TFNG",
          stem: "Questions 3–4. Do the following statements agree with the information in the passage?",
          payload: {
            passage: COUNTING_BY_CROWDS,
            statement: "Projects cross-check volunteers' answers against known results to score each contributor's reliability.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 3,
          type: "TFNG",
          payload: {
            statement: "Volunteer classifications are generally less accurate than those of specialist panels.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 4,
          type: "TFNG",
          stem: "Questions 5–6. Do the following statements reflect the claims of the writer?",
          payload: {
            passage: COUNTING_BY_CROWDS,
            statement: "The writer expects the satisfaction volunteers report to disappear as projects move to phones.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["writer-claims", "not-given"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: {
            statement: "The writer regards the crowd model as cheaper than the alternative.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["writer-claims"],
        },
        {
          order: 6,
          type: "FILL_BLANK",
          stem: "Questions 7–8. Complete the summary. Choose NO MORE THAN TWO WORDS from the passage.",
          payload: {
            context:
              "In the original 2007 project, the public classified images faster than the team's own ___ (7) had managed. Averaging thousands of guesses cancels individual errors, so the crowd's aggregate judgement is often hard to distinguish from that of ___ (8).",
            blanks: [
              { answer: "experts", alternatives: [] },
              { answer: "specialists", alternatives: ["a panel of specialists", "trained staff"] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "experts" }, { answer: "specialists" }] },
          points: 2,
          skills: ["paraphrase", "detail"],
        },
      ],
    },
    {
      key: "writing",
      title: "Academic Writing (Tasks 1–2)",
      directions: "60 minutes total: ≈20 on Task 1, ≈40 on Task 2. Task 2 weighted double.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "The table below shows visitor numbers (in thousands) for four museums in one city during the last quarter of 2024 and the same quarter of 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            supporting:
              "Museum | Q4 2024 | Q4 2025\nCity History | 82 | 96\nScience Centre | 145 | 151\nPortrait Gallery | 61 | 48\nOpen-Air Museum | 38 | 57\n(Average stay: 78 minutes in 2024, 94 minutes in 2025)",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — table",
          },
          points: 0,
          skills: ["task-achievement", "coherence", "lexical", "grammar"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "In many countries, people are living longer than ever before. What problems does this cause for families? What can governments do to help? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            minWords: 250,
            suggestedMinutes: 40,
            rubricKey: "ielts.writing",
            part: "Task 2 — two-part question",
          },
          points: 0,
          skills: ["task-response", "coherence", "lexical", "grammar"],
        },
      ],
    },
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions: "Answer as you would with an examiner; your transcript is graded against the band descriptors.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 1 — Let's talk about your studies or work, and about technology. What are you studying (or what do you do)? Do you use the internet more for work or for leisure? Has your routine changed in the last few years?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — introduction and interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe an event you attended that you enjoyed. You should say: what the event was · who you went with · what happened on the day · and explain why you enjoyed it. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — individual long turn",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Why do some events bring people together more than others? Have public celebrations changed in your country over the last fifty years? Should governments spend money on festivals when there are other priorities?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — two-way discussion",
          },
          points: 0,
          skills: ["coherence", "grammar"],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// IELTS General Training — Full Mock 1
// ---------------------------------------------------------------------------

export const generalFullMock1: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS General Training Full Mock 1 (sample length)",
  kind: "full",
  lengthLabel: "sample",
  description: mockDescription(
    "A complete General Training simulation: Listening Parts 1–4 (identical test to Academic — new material), GT Reading across all three sections, a GT letter and everyday essay, and Speaking Parts 1–3.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening (Parts 1–4, sample)",
      directions:
        "You will hear a clinic appointment call (Part 1), a community centre talk (Part 2), a course discussion (Part 3) and a lecture on the sense of smell (Part 4). Play each recording once. Official section: 30 minutes for 40 questions; this sample has 4 items.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the appointment card. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            audioScript:
              "CLINIC: Riverside Physiotherapy, good morning. PATIENT: Hello, I've hurt my shoulder — I saw Dr Kaur last week and she said to book physio. CLINIC: Of course. We have Tuesday the eleventh at ten, or Thursday the thirteenth at four — which suits? PATIENT: Thursday afternoon, please. CLINIC: Can I take a mobile number in case we need to reach you? PATIENT: It's oh-seven-nine-nine, double-six-oh, two-one-four. CLINIC: And can you spell your surname for the notes? PATIENT: Yes — Wojcik, W-O-J-C-I-K. CLINIC: Thank you — and bring shorts and a T-shirt; we don't have changing time spare. PATIENT: Will do.",
            context:
              "Riverside Physiotherapy — appointment card\nPractitioner: physiotherapy (referred by Dr Kaur)\nAppointment: Thursday the 13th, at ___ (1)\nPatient surname: ___ , W-O-J-C-I-K (2)\nBring: shorts and a ___ (3)",
            blanks: [
              { answer: "four", alternatives: ["4", "16:00", "four pm"] },
              { answer: "Wojcik", alternatives: ["wojcik"] },
              { answer: "T-shirt", alternatives: ["t shirt", "tshirt"] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "four", numbers: true }, { answer: "Wojcik" }, { answer: "T-shirt" }] },
          points: 3,
          skills: ["spelling", "numbers", "detail"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "CENTRE MANAGER: A few announcements about the autumn programme at Bridgeview Community Centre. The pottery class moves from Tuesdays to Wednesdays — same time, seven o'clock, but the fee goes up from four pounds to five to cover new kilns. The badminton sessions are unchanged. And a correction to the printed leaflet: the trip to the ceramics fair is on the nineteenth, not the ninth as the leaflet says — please tell anyone who booked on the strength of the leaflet.",
            options: [
              "The pottery class moves to Wednesdays at 7, and the fee rises to £5.",
              "The pottery class stays on Tuesdays and the fee stays at £4.",
              "The badminton sessions move to Wednesdays at 7.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 3,
          type: "MCQ_MULTI",
          stem: "Question 5. Which TWO things did the students find hardest about the course, according to the conversation? Choose TWO letters, A–E.",
          payload: {
            audioScript:
              "ADVISER: So — the word-processing module. How was it? STUDENT: Honestly? The timed test at the end was fine — I type all day anyway. What nearly broke me was the section on report layout: where the numbers go, how to reference figures in the text. STUDENT 2: For me it was the same section, plus the file-management unit — losing track of versions, that sort of thing. The good news is the tutor let us resubmit the layout exercise, and the second version passed. The spreadsheets, which everyone fears, turned out to be the easiest part — basic formulas only.",
            options: [
              "The timed typing test.",
              "The report-layout section.",
              "Managing file versions.",
              "The spreadsheet formulas.",
              "Sending emails with attachments.",
            ],
            choose: 2,
          },
          answer: { options: [1, 2] },
          points: 2,
          skills: ["detail", "distractors"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Questions 6–7. Complete the notes. Write ONE WORD ONLY for each answer.",
          payload: {
            audioScript:
              "LECTURER: Smell is the sense we understand least, and the one we trust least — yet it reaches the brain by a private corridor that bypasses the relay station every other sense passes through. That is why a scent can summon a whole afternoon: the system wires directly into the regions that file memory and emotion. Perfumers are not simply mixing pleasant things; they work with accords — combinations that behave differently together than apart — and their raw materials number in the thousands. What continues to defeat the industry is reproduction: no device yet built can capture a smell the way a microphone captures a ___ , and every attempt to store one in a library of smells has to fall back on description, which is why the perfumer's basic tool remains the ___ , not the machine.",
            context:
              "The sense of smell — lecture notes\n· Smell bypasses the relay station that other senses pass through, wiring into the brain's filing of ___ and emotion\n· No device can yet capture a smell the way a microphone captures a ___ (6)\n· The perfumer's basic tool remains the ___ (7), not the machine",
            blanks: [
              { answer: "sound", alternatives: ["voice", "song"] },
              { answer: "nose", alternatives: [] },
            ],
            words: 1,
          },
          answer: { blanks: [{ answer: "sound" }, { answer: "nose" }] },
          points: 2,
          skills: ["detail", "academic-vocab"],
        },
      ],
    },
    {
      key: "reading",
      title: "General Training Reading (Sections 1–3, sample)",
      directions:
        "Section 1: two short texts. Section 2: two workplace texts. Section 3: one longer passage. Official section: 60 minutes for 40 questions; this sample has 11 questions.",
      timingSec: 3600,
      questions: [
        // ---- Section 1 -----------------------------------------------------
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Section 1, Questions 1–2. Read the notice and answer.",
          payload: {
            passage:
              "HARBURRY COLLEGE — SPRING COURSES\nEnrol in person or at harbury.example/courses. All courses run for eight weeks from the week of 14 April. Fees: pottery £95 (clay included; tools deposit £10, refundable), family history £60, digital photography £75 (bring your own camera; a limited number of loan cameras available, ask at the office). Concessions (over 65, students, jobseekers): 25% off ONE course per person per term. No courses on public holidays — missed sessions are rescheduled, not refunded.",
            options: [
              "A 67-year-old learner pays 25% less for one course per term.",
              "Everyone over 65 pays nothing.",
              "Missed sessions are refunded in cash.",
            ],
          },
          answer: { option: 0 },
          skills: ["conditions", "detail"],
        },
        {
          order: 2,
          type: "TFNG",
          payload: {
            passage:
              "HARBURRY COLLEGE — SPRING COURSES\nEnrol in person or at harbury.example/courses. All courses run for eight weeks from the week of 14 April. Fees: pottery £95 (clay included; tools deposit £10, refundable), family history £60, digital photography £75 (bring your own camera; a limited number of loan cameras available, ask at the office). Concessions (over 65, students, jobseekers): 25% off ONE course per person per term. No courses on public holidays — missed sessions are rescheduled, not refunded.",
            statement: "Photography learners must pay a refundable deposit.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["conditions"],
        },
        // ---- Section 2 -----------------------------------------------------
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Section 2, Questions 3–5. Read the job advertisement and answer.",
          payload: {
            passage:
              "TEAM LEADER — CANTEEN (permanent, 35 hours)\nDuties: opening and closing the canteen, leading a team of four, weekly stock ordering, cash reconciliation.\nYou must hold a food-hygiene certificate dated within the last two years (we will fund renewal for the right candidate). Team leaders are entitled to 28 days' leave plus bank holidays, a free meal on every shift, and may swap duties with the deputy provided a supervisor approves in writing 48 hours ahead; verbal swaps will not be accepted. Uniforms should be collected from the office before the first shift.",
            options: [
              "A candidate whose certificate is three years old can still be hired, with the company funding renewal.",
              "Only candidates with a current certificate may apply.",
              "Verbal duty swaps are accepted if the deputy agrees.",
            ],
          },
          answer: { option: 0 },
          skills: ["conditions", "modals"],
        },
        {
          order: 4,
          type: "TFNG",
          payload: {
            passage:
              "TEAM LEADER — CANTEEN (permanent, 35 hours)\nDuties: opening and closing the canteen, leading a team of four, weekly stock ordering, cash reconciliation.\nYou must hold a food-hygiene certificate dated within the last two years (we will fund renewal for the right candidate). Team leaders are entitled to 28 days' leave plus bank holidays, a free meal on every shift, and may swap duties with the deputy provided a supervisor approves in writing 48 hours ahead; verbal swaps will not be accepted. Uniforms should be collected from the office before the first shift.",
            statement: "Team leaders get a free meal on every shift.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: {
            passage:
              "TEAM LEADER — CANTEEN (permanent, 35 hours)\nDuties: opening and closing the canteen, leading a team of four, weekly stock ordering, cash reconciliation.\nYou must hold a food-hygiene certificate dated within the last two years (we will fund renewal for the right candidate). Team leaders are entitled to 28 days' leave plus bank holidays, a free meal on every shift, and may swap duties with the deputy provided a supervisor approves in writing 48 hours ahead; verbal swaps will not be accepted. Uniforms should be collected from the office before the first shift.",
            statement: "The canteen is closed on Sundays.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["not-given"],
        },
        // ---- Section 3 -----------------------------------------------------
        {
          order: 6,
          type: "MCQ_SINGLE",
          stem: "Section 3, Questions 6–8. Read the passage and answer.",
          payload: {
            passage: HIGH_STREET_RETURN,
            options: [
              "Landlords now often prefer short flexible leases with independents because a street that changes draws visitors.",
              "Landlords refuse all leases with independent shops.",
              "Councils have banned national chains.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 7,
          type: "TFNG",
          payload: {
            passage: HIGH_STREET_RETURN,
            statement: "The baker and the bookshop make most of their money from what they sell on the premises.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["inference", "detail"],
        },
        {
          order: 8,
          type: "TFNG",
          stem: "Questions 9–11. Do the following statements reflect the claims of the writer?",
          payload: {
            passage: HIGH_STREET_RETURN,
            statement: "The writer considers nostalgia for the high street of 1985 a useful guide to policy.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["writer-claims", "tone"],
        },
        {
          order: 9,
          type: "TFNG",
          payload: {
            passage: HIGH_STREET_RETURN,
            statement: "Vacant units have been used for pop-up markets.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["writer-claims"],
        },
        {
          order: 10,
          type: "TFNG",
          payload: {
            passage: HIGH_STREET_RETURN,
            statement: "Busy streets sell more goods than quiet ones.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["writer-claims", "not-given"],
        },
        {
          order: 11,
          type: "FILL_BLANK",
          stem: "Question 11. Complete the sentence. Choose NO MORE THAN TWO WORDS from the passage.",
          payload: {
            context:
              "What is emerging is narrower but sturdier: fewer shops, doing more things, in buildings whose ___ changes as often as the weather.",
            blanks: [{ answer: "use", alternatives: [] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "use" }] },
          skills: ["paraphrase", "detail"],
        },
      ],
    },
    {
      key: "writing",
      title: "General Training Writing (Tasks 1–2)",
      directions:
        "You have 60 minutes. Spend about 20 minutes on Task 1 (at least 150 words) and 40 on Task 2. Task 2 carries twice the weight.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "You ordered a celebration cake from a bakery for a family occasion. When it arrived, the inscription was misspelled and the wrong flavour had been used. Write a letter to the bakery manager. In your letter: describe what you ordered and what went wrong · say what you want the bakery to do · explain why the mistake matters to you. Write at least 150 words. You do NOT need to write any addresses.",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — formal letter (complaint)",
          },
          points: 0,
          skills: ["task-achievement", "tone", "lexical", "grammar"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Some people think it is better to live in a big city. Others think life is healthier and happier in the countryside. Discuss both these views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            minWords: 250,
            suggestedMinutes: 40,
            rubricKey: "ielts.writing",
            part: "Task 2 — discussion essay",
          },
          points: 0,
          skills: ["task-response", "coherence", "lexical", "grammar"],
        },
      ],
    },
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions: "Answer as you would with an examiner; your transcript is graded against the band descriptors.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 1 — Let's talk about your home town and about music. Where is your home town? Has it changed much since you were a child? Do you listen to music while you work or study?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — introduction and interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe a piece of music you like. You should say: what it is · when you first heard it · how it makes you feel · and explain why it means something to you. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — individual long turn",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Should governments fund music education? Why do some songs last for generations while others are forgotten in a year? Does technology make it easier or harder for new musicians to be heard?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — two-way discussion",
          },
          points: 0,
          skills: ["coherence", "grammar"],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// IELTS General Training — Full Mock 2
// ---------------------------------------------------------------------------

export const generalFullMock2: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS General Training Full Mock 2 (sample length)",
  kind: "full",
  lengthLabel: "sample",
  description: mockDescription(
    "A second General Training simulation with fresh material: new Listening scripts, all three GT Reading sections, a semi-formal letter to a neighbour, and new speaking prompts.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening (Parts 1–4, sample)",
      directions: "Four recordings, played once each. Official section: 30 minutes for 40 questions; this sample has 4 items.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the library form. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            audioScript:
              "LIBRARIAN: Central Library, renewals desk — how can I help? CALLER: Hello, I'd like to join. I've just moved to the area. LIBRARIAN: You'll need one document with your address — a bank statement or utility bill, no more than three months old — and photo ID. The card itself is free. CALLER: What about the borrowing limits? LIBRARIAN: Standard members take out six items for three weeks; if you pay the twelve-pound annual upgrade, it's twelve items and you can reserve popular titles at no charge. CALLER: I'll take the upgrade — can I start today? LIBRARIAN: Almost: the system syncs overnight, so your card will be live from tomorrow morning, the sixth. CALLER: Fine. It's Mora Ellis — that's M-O-R-A, and my surname is spelled N-A-Y-L-O-R.",
            context:
              "Central Library — new member\nDocuments needed: proof of address + photo ID\nCard free; upgrade: £12 a year (12 items, free reservations)\nName: Mora ___ , N-A-Y-L-O-R (1)\nBorrowing limit (standard): ___ items (2)\nCard live from: the ___ (3)",
            blanks: [
              { answer: "Naylor", alternatives: ["naylor"] },
              { answer: "six", alternatives: ["6"] },
              { answer: "sixth", alternatives: ["6th", "6"] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "Naylor" }, { answer: "six", numbers: true }, { answer: "sixth", numbers: true }] },
          points: 3,
          skills: ["spelling", "numbers", "detail"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "MUSEUM GUIDE: If you're volunteering this season, three notes. The storage room key now hangs in the office, not the ticket desk — the desk got too crowded. Second, school groups must be met at the side entrance, because the front steps are being repaired until June. And for anyone who was told the training evening was on the twelfth: it isn't — it's the twentieth, in the lecture room, and it lasts two hours, not one. That's everything; the coffee is free and so, still, is the parking.",
            options: [
              "The training evening is on the twentieth and lasts two hours.",
              "The training evening is on the twelfth and lasts one hour.",
              "School groups must be met at the front entrance until June.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 3,
          type: "MCQ_MULTI",
          stem: "Question 5. Which TWO activities does the speaker recommend for new volunteers? Choose TWO letters, A–E.",
          payload: {
            audioScript:
              "GUIDE: ...so what should you actually put your name down for? If you like people, take the welcome desk — you'll learn the museum in a week. I'd genuinely recommend the school workshops: exhausting, but you will never learn the collection faster, and the children ask the questions researchers forget. The cataloguing room suits the quiet — accurate work, no public. What I'd steer you away from, at least at first, is the fundraising calls; the staff struggle with those, never mind volunteers. And skip the evening openings till you've done a season — they need people who already know where everything is.",
            options: [
              "The welcome desk.",
              "The school workshops.",
              "The fundraising calls.",
              "The evening openings.",
              "The staff canteen rota.",
            ],
            choose: 2,
          },
          answer: { options: [0, 1] },
          points: 2,
          skills: ["recommendation", "distractors"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Questions 6–7. Complete the notes. Write ONE WORD ONLY for each answer.",
          payload: {
            audioScript:
              "LECTURER: Tea arrived everywhere late and changed everything it met. The plant itself is stubborn — it wants altitude, mist and acid soil, which is why the leaf travelled further than the bush ever could. Processing splits at a single fork: leaves destined for black tea are rolled, which breaks their cells and starts oxidation, while green tea is heated within hours of picking to keep the leaf as it was. The trade that grew around those two drinks reordered empires: wars were fought over a ___ that could not be grown at home, and the word for it in your language probably arrived by sea, which is why coastal ___ often keep the older pronunciation while inland ones do not...",
            context:
              "Tea — lecture notes\n· Black tea leaves are rolled; green tea is heated within hours to stop ___ (6)\n· Wars were fought over a drink that could not be grown at home; coastal ___ often keep older pronunciations (7)",
            blanks: [
              { answer: "oxidation", alternatives: [] },
              { answer: "ports", alternatives: ["port towns", "towns"] },
            ],
            words: 1,
          },
          answer: { blanks: [{ answer: "oxidation" }, { answer: "ports" }] },
          points: 2,
          skills: ["detail", "academic-vocab"],
        },
      ],
    },
    {
      key: "reading",
      title: "General Training Reading (Sections 1–3, sample)",
      directions: "All three GT sections with mixed types; official 60-minute timing context.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Section 1, Questions 1–3. Read the notice and answer.",
          payload: {
            passage:
              "COUNTY BUSES — SERVICE CHANGES FROM 6 MAY\nRoute 14: withdrawn between the market and the hospital; passengers should use Route 3, which runs every 20 minutes and accepts Route 14 tickets for one month. Route 22: evening services (after 19:30) discontinued Monday–Thursday; Friday and Saturday evenings unchanged. All Sunday services now start two hours later (first bus 09:00). Refunds on season tickets: available at the travel shop for any ticket with a month or more remaining; no refunds at the driver's window.",
            options: [
              "Route 14 passengers can use Route 3 with their existing tickets for one month.",
              "Route 14 now runs every 20 minutes all day.",
              "Sunday services start two hours earlier.",
            ],
          },
          answer: { option: 0 },
          skills: ["conditions", "detail"],
        },
        {
          order: 2,
          type: "TFNG",
          payload: {
            passage:
              "COUNTY BUSES — SERVICE CHANGES FROM 6 MAY\nRoute 14: withdrawn between the market and the hospital; passengers should use Route 3, which runs every 20 minutes and accepts Route 14 tickets for one month. Route 22: evening services (after 19:30) discontinued Monday–Thursday; Friday and Saturday evenings unchanged. All Sunday services now start two hours later (first bus 09:00). Refunds on season tickets: available at the travel shop for any ticket with a month or more remaining; no refunds at the driver's window.",
            statement: "Route 22 runs after 19:30 on Fridays.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["conditions"],
        },
        {
          order: 3,
          type: "TFNG",
          payload: {
            passage:
              "COUNTY BUSES — SERVICE CHANGES FROM 6 MAY\nRoute 14: withdrawn between the market and the hospital; passengers should use Route 3, which runs every 20 minutes and accepts Route 14 tickets for one month. Route 22: evening services (after 19:30) discontinued Monday–Thursday; Friday and Saturday evenings unchanged. All Sunday services now start two hours later (first bus 09:00). Refunds on season tickets: available at the travel shop for any ticket with a month or more remaining; no refunds at the driver's window.",
            statement: "Season-ticket refunds are available from the driver.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["conditions"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Section 2, Questions 4–6. Read the staff policy and answer.",
          payload: {
            passage:
              "LEARN-ON-THE-JOB SCHEME — EMPLOYER NOTES\nApprentices work four days a week and study on the fifth; the study day is paid and fixed — Tuesday for this intake, and it may not be swapped to save the day for production. Employers must release apprentices for exams regardless of workload; a missed exam counts as a missed opportunity, not holiday. Travel between sites is paid at 45p per mile; travel between home and the single assigned site is not. If an apprentice is unwell on a study day, the absence is recorded like any other; if they are unwell on an exam day, they must inform the provider before nine o'clock to qualify for a resit.",
            options: [
              "The study day is fixed and may not be moved to suit production.",
              "Study days can be swapped with agreement.",
              "Home-to-site travel is paid at 45p per mile.",
            ],
          },
          answer: { option: 0 },
          skills: ["conditions", "modals"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: {
            passage:
              "LEARN-ON-THE-JOB SCHEME — EMPLOYER NOTES\nApprentices work four days a week and study on the fifth; the study day is paid and fixed — Tuesday for this intake, and it may not be swapped to save the day for production. Employers must release apprentices for exams regardless of workload; a missed exam counts as a missed opportunity, not holiday. Travel between sites is paid at 45p per mile; travel between home and the single assigned site is not. If an apprentice is unwell on a study day, the absence is recorded like any other; if they are unwell on an exam day, they must inform the provider before nine o'clock to qualify for a resit.",
            statement: "An apprentice who reports illness before 9:00 on an exam day can qualify for a resit.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["conditions"],
        },
        {
          order: 6,
          type: "TFNG",
          payload: {
            passage:
              "LEARN-ON-THE-JOB SCHEME — EMPLOYER NOTES\nApprentices work four days a week and study on the fifth; the study day is paid and fixed — Tuesday for this intake, and it may not be swapped to save the day for production. Employers must release apprentices for exams regardless of workload; a missed exam counts as a missed opportunity, not holiday. Travel between sites is paid at 45p per mile; travel between home and the single assigned site is not. If an apprentice is unwell on a study day, the absence is recorded like any other; if they are unwell on an exam day, they must inform the provider before nine o'clock to qualify for a resit.",
            statement: "Apprentices get extra pay for working at weekends.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["not-given"],
        },
        {
          order: 7,
          type: "MCQ_SINGLE",
          stem: "Section 3, Questions 7–9. Read the passage and answer.",
          payload: {
            passage:
              "FINDING THE WAY WITHOUT A SCREEN\nNavigation apps have quietly atrophied a skill that travellers once took for granted. Ask anyone over fifty how they managed before the blue dot and the answer is a shrug: you read signs, counted junctions, kept a rough map in your head and asked when lost — being lost was a normal state with a known cure. Psychologists who study wayfinding describe two kinds of navigator: those who assemble an internal map, and those who learn a route as a sequence of turns. The first group copes when a road closes; the second group, studies suggest, is more prone to what researchers call teleport errors — arriving somewhere without any sense of the space in between. Neither strategy is fixed. Small trials in three cities taught volunteers to orient by landmarks and the sun, and within weeks their sketch maps improved, with the largest gains among the people who had been most screen-dependent. The lesson seems to be that the sense of direction behaves like a muscle: it weakens unused and responds to deliberate exercise, which is perhaps why the best navigators in the trials were, unexpectedly, the ones who got lost most often as children — and were allowed to find their own way back.",
            options: [
              "'Teleport errors' happen to route-as-sequence navigators who arrive somewhere with no sense of the space in between.",
              "Route-sequence navigators cope better when a road closes.",
              "The sense of direction is fixed and cannot be trained.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 8,
          type: "TFNG",
          payload: {
            passage:
              "FINDING THE WAY WITHOUT A SCREEN\nNavigation apps have quietly atrophied a skill that travellers once took for granted. Ask anyone over fifty how they managed before the blue dot and the answer is a shrug: you read signs, counted junctions, kept a rough map in your head and asked when lost — being lost was a normal state with a known cure. Psychologists who study wayfinding describe two kinds of navigator: those who assemble an internal map, and those who learn a route as a sequence of turns. The first group copes when a road closes; the second group, studies suggest, is more prone to what researchers call teleport errors — arriving somewhere without any sense of the space in between. Neither strategy is fixed. Small trials in three cities taught volunteers to orient by landmarks and the sun, and within weeks their sketch maps improved, with the largest gains among the people who had been most screen-dependent. The lesson seems to be that the sense of direction behaves like a muscle: it weakens unused and responds to deliberate exercise, which is perhaps why the best navigators in the trials were, unexpectedly, the ones who got lost most often as children — and were allowed to find their own way back.",
            statement: "In the trials, the biggest improvements came from the most screen-dependent volunteers.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 9,
          type: "TFNG",
          stem: "Questions 10–11. Do the following statements reflect the claims of the writer?",
          payload: {
            passage:
              "FINDING THE WAY WITHOUT A SCREEN\nNavigation apps have quietly atrophied a skill that travellers once took for granted. Ask anyone over fifty how they managed before the blue dot and the answer is a shrug: you read signs, counted junctions, kept a rough map in your head and asked when lost — being lost was a normal state with a known cure. Psychologists who study wayfinding describe two kinds of navigator: those who assemble an internal map, and those who learn a route as a sequence of turns. The first group copes when a road closes; the second group, studies suggest, is more prone to what researchers call teleport errors — arriving somewhere without any sense of the space in between. Neither strategy is fixed. Small trials in three cities taught volunteers to orient by landmarks and the sun, and within weeks their sketch maps improved, with the largest gains among the people who had been most screen-dependent. The lesson seems to be that the sense of direction behaves like a muscle: it weakens unused and responds to deliberate exercise, which is perhaps why the best navigators in the trials were, unexpectedly, the ones who got lost most often as children — and were allowed to find their own way back.",
            statement: "The writer thinks navigation apps should be uninstalled.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["writer-claims", "not-given"],
        },
        {
          order: 10,
          type: "TFNG",
          payload: {
            passage:
              "FINDING THE WAY WITHOUT A SCREEN\nNavigation apps have quietly atrophied a skill that travellers once took for granted. Ask anyone over fifty how they managed before the blue dot and the answer is a shrug: you read signs, counted junctions, kept a rough map in your head and asked when lost — being lost was a normal state with a known cure. Psychologists who study wayfinding describe two kinds of navigator: those who assemble an internal map, and those who learn a route as a sequence of turns. The first group copes when a road closes; the second group, studies suggest, is more prone to what researchers call teleport errors — arriving somewhere without any sense of the space in between. Neither strategy is fixed. Small trials in three cities taught volunteers to orient by landmarks and the sun, and within weeks their sketch maps improved, with the largest gains among the people who had been most screen-dependent. The lesson seems to be that the sense of direction behaves like a muscle: it weakens unused and responds to deliberate exercise, which is perhaps why the best navigators in the trials were, unexpectedly, the ones who got lost most often as children — and were allowed to find their own way back.",
            statement: "The writer considers the sense of direction trainable, like a muscle.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["writer-claims"],
        },
        {
          order: 11,
          type: "FILL_BLANK",
          stem: "Complete the summary. Choose ONE WORD from the passage.",
          payload: {
            context:
              "The two navigator types: those who build an internal map, and those who learn a route as a ___ of turns. The second group is more prone to 'teleport errors'.",
            blanks: [{ answer: "sequence", alternatives: [] }],
            words: 1,
          },
          answer: { blanks: [{ answer: "sequence" }] },
          skills: ["paraphrase", "detail"],
        },
      ],
    },
    {
      key: "writing",
      title: "General Training Writing (Tasks 1–2)",
      directions: "≈20 minutes on Task 1 (at least 150 words); ≈40 on Task 2. Task 2 weighted double.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Your neighbour practises the drums late in the evening, and it is disturbing your household. You have spoken once before and nothing changed. Write a letter to your neighbour. In your letter: describe the situation and its effect · suggest a compromise about times or sound-proofing · offer to help in some way. Write at least 150 words. You do NOT need to write any addresses.",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — semi-formal letter (request)",
          },
          points: 0,
          skills: ["task-achievement", "tone", "lexical", "grammar"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "In many families, grandparents help look after young children while parents work. Do the advantages of this arrangement outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            minWords: 250,
            suggestedMinutes: 40,
            rubricKey: "ielts.writing",
            part: "Task 2 — advantages/disadvantages essay",
          },
          points: 0,
          skills: ["task-response", "coherence", "lexical", "grammar"],
        },
      ],
    },
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions: "Answer as you would with an examiner; your transcript is graded against the band descriptors.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 1 — Let's talk about your daily routine and about travel. What does a typical morning look like for you? Do you prefer travelling by car, by train or by bus? Is there a place you would like to visit in the next few years?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — introduction and interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe a person who has taught you something important. You should say: who the person is · what they taught you · how they taught it · and explain what difference it has made. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — individual long turn",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Do you think some subjects can only be taught by certain kinds of people? Should teachers be trained in how to teach, or is knowing their subject enough? How might teaching change over the next twenty years?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — two-way discussion",
          },
          points: 0,
          skills: ["coherence", "grammar"],
        },
      ],
    },
  ],
};
