/**
 * Section mocks — one section at official timing, for time-budget training.
 *
 * Listening and Speaking are identical tests across variants, so both
 * variants' libraries carry their own twins with different material.
 * Reading and Writing are variant-specific by nature.
 */

import type { MockSeed } from "./mocks";
import { mockDescription } from "./mocks";

export const listeningSectionMockAcademic: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Section Mock (Academic) 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "All four Listening parts in one section mock at official timing, with corrections, distractors and word-limit completion. Official section: 30 minutes for 40 questions; this sample has 7 items.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening (Parts 1–4)",
      directions:
        "Play each recording once. Parts 1–2 social; Part 3 a seminar; Part 4 a lecture. Watch the word limits: they change between blocks.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the booking form. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            audioScript:
              "CLERK: Fernside Activity Centre — the holiday club? PARENT: Yes — booking for my daughter, the February week. She wants the climbing course, not swimming this time. CLERK: Climbing it is — that's the course with the equipment provided, so no hire charge, though we do need a contact. PARENT: Oh-seven-nine-double-four, six-six-two, one-nine-three. CLERK: And a name for the register? PARENT: Anja Pettersen — that's P-E-double-T-E-R-S-E-N. CLERK: The coach leaves at eight forty-five, and I stress it is NOT nine o'clock as last term — the traffic got worse. Climbing week: the ___ (1) course — no hire charge\nContact: 07944 662 193\nChild: Anja ___ , P-E-double-T-E-R-S-E-N (2)\nCoach leaves: ___ (3), not 9:00",
            context:
              "Fernside Activity Centre — February holiday club\nCourse: ___ (1) — equipment provided, no hire charge\nChild: Anja ___ , P-E-double-T-E-R-S-E-N (2)\nCoach leaves: ___ (3), not 9:00",
            blanks: [
              { answer: "climbing", alternatives: [] },
              { answer: "Pettersen", alternatives: ["pettersen"] },
              { answer: "eight forty-five", alternatives: ["8:45", "845", "eight forty five", "quarter to nine"] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "climbing" }, { answer: "Pettersen" }, { answer: "eight forty-five", numbers: true }] },
          points: 3,
          skills: ["spelling", "numbers", "corrections"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "WARDEN: Welcome to the reserve. Three things before we set out. The hides — the wooden viewing towers — are open all day, but the visitor centre now closes at four, not five as the website says; the website is being fixed. Dogs are welcome on the main track but must stay on leads near the nesting meadow until July. And if you hear the fire bell, assemble at the car park, not at the lake — the old instructions said the lake, which was a mistake.",
            options: [
              "The visitor centre closes at four, and the fire assembly point is the car park.",
              "The visitor centre closes at five, and the fire assembly point is the lake.",
              "Dogs may run free near the nesting meadow until July.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 3,
          type: "MATCHING",
          stem: "Questions 5–6. Who raises each point? Match each concern to the speaker.",
          payload: {
            audioScript:
              "SUPERVISOR: Before you start the placement — any questions? STUDENT: One thing: the report deadlines. If my supervisor at the firm wants weekly notes and the university wants one final reflective piece, which comes first? SUPERVISOR: Good question — the firm's weekly notes are internal to them; the university piece is yours alone. So no conflict, just two documents. STUDENT: Then my worry is different: I'll be commuting four hours a day. STUDENT 2: That's mine too — and the travel costs. The bursary covers fares only if I keep every receipt, which nobody told us in the induction.",
            prompt: "Match each concern to the speaker who raises it.",
            items: [
              { id: "c1", text: "The conflict between two writing requirements" },
              { id: "c2", text: "Commuting time and travel costs" },
            ],
            options: [
              { id: "S1", text: "Student 1" },
              { id: "S2", text: "Student 2" },
              { id: "SUP", text: "The supervisor" },
            ],
          },
          answer: { pairs: { c1: "S1", c2: "S2" } },
          points: 2,
          skills: ["matching", "attribution"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Question 7. Complete the note. Write ONE WORD ONLY.",
          payload: {
            audioScript:
              "LECTURER: ...and this is where the economics of desalination bite. A plant can make fresh water from the sea at a price a city can afford, but only if the city sits beside the plant — pumping the water uphill for a hundred kilometres costs more than making it. That is why the biggest plants cluster on coasts near their customers, and why inland cities, the ones that most need the technology, can least use it. Engineers summarize the problem with a curve every student should recognise: the cost per litre is low where the water is made and rises with every kilometre of ___ it must travel.",
            context: "Desalination: cost per litre is low at the plant and rises with every kilometre of ___ the water must travel.",
            blanks: [{ answer: "pipe", alternatives: ["piping", "pipeline", "transport"] }],
            words: 1,
          },
          answer: { blanks: [{ answer: "pipe" }] },
          skills: ["detail", "academic-vocab"],
        },
        {
          order: 5,
          type: "MCQ_MULTI",
          stem: "Questions 8–9. Which TWO factors does the lecturer say push costs UP? Choose TWO letters, A–E.",
          payload: {
            audioScript:
              "LECTURER: So what makes desalination expensive? Not the chemistry — the membranes are mass-produced now. The real drivers are energy, which is why plants follow cheap electricity around the world, and brine disposal: the concentrated salt has to go somewhere, and somewhere is usually an outfall pipe with a permit attached. I would not blame labour costs — plants employ fewer people than a supermarket. And although the public blames subsidies for the price, subsidies if anything push the price down, not up.",
            options: [
              "Energy prices.",
              "Membrane chemistry.",
              "Brine disposal and its permits.",
              "Labour costs.",
              "Subsidies.",
            ],
            choose: 2,
          },
          answer: { options: [0, 2] },
          points: 2,
          skills: ["main-idea", "distractors"],
        },
        {
          order: 6,
          type: "MCQ_SINGLE",
          stem: "Question 10. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "LIBRARIAN: For the archive project, one correction to the briefing pack. It says documents can be consulted on Saturdays. That was true last year; from this term the reading room opens Tuesday to Friday only, and Saturdays are reserved for school visits. If you planned weekend work, re-plan — the online catalogue, of course, is available whenever you are.",
            options: [
              "The reading room is open Tuesday to Friday; Saturdays are for school visits.",
              "The reading room is open on Saturdays.",
              "The online catalogue is closed at weekends.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 7,
          type: "FILL_BLANK",
          stem: "Question 11. Complete the sentence. Write NO MORE THAN TWO WORDS.",
          payload: {
            audioScript:
              "GUIDE: ...last item: parking. The multi-storey on Duke Street is being demolished — it closed on Monday, so if the sat-nav still offers it, ignore it. Until the new one opens in the spring, use the open-air site at the station; it's a ten-minute walk, flat all the way, and the first two hours are free for library members — show your card at the barrier. The old arrangement, where members parked free all day, ended in March.",
            context: "Until the new car park opens, members should use the open-air site at the ___ , where the first two hours are free.",
            blanks: [{ answer: "station", alternatives: [] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "station" }] },
          skills: ["detail", "corrections"],
        },
      ],
    },
  ],
};

export const listeningSectionMockGeneral: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS Listening Section Mock (General Training) 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "All four Listening parts (identical test to Academic — fresh material): everyday arrangements, a facilities talk, a course discussion and a lecture extract.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening (Parts 1–4)",
      directions: "Play each recording once. Official section: 30 minutes for 40 questions; this sample has 6 items.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            audioScript:
              "ASSISTANT: Vista Travel, insurance desk — good morning. CALLER: Hello — I need travel insurance for a trip to Portugal, leaving on the ninth of June for ten days. ASSISTANT: Single-trip or annual? Annual covers every trip up to thirty-five days each and works out cheaper from the third trip. CALLER: Just this one, I think. What do you need from me? ASSISTANT: Date of birth and any medical conditions declared in the last two years — the quote changes with those, not with your job, whatever the old form said. CALLER: Twenty-second of April, nineteen ninety-one — that's D-O-B sorted — and one condition: asthma, mild. ASSISTANT: Fine — the premium is twenty-nine pounds for single trip, and that includes your inhalers. Shall I hold it until Friday?",
            context:
              "Vista Travel — insurance quote\nTrip: Portugal, 10 days from the ___ of June (1)\nPolicy: ___ -trip (2)\nApplicant DOB: 22 April 1991; declared condition: asthma\nPremium: £29 (includes ___ ) (3)",
            blanks: [
              { answer: "ninth", alternatives: ["9th", "9"] },
              { answer: "single", alternatives: [] },
              { answer: "inhalers", alternatives: ["inhaler"] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "ninth", numbers: true }, { answer: "single" }, { answer: "inhalers" }] },
          points: 3,
          skills: ["numbers", "detail", "spelling"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "HOSTEL: A quick word about the self-catering kitchens. They're open all night now — that's new; last year they closed at eleven. What hasn't changed: you bring your own food, we provide the cookware, and the fridge shelves are labelled by room number. The one rule that trips people up: after 10 p.m. the extractor fans go off with the building's night mode, so anything fried after ten sets the alarm off — the alarm, not the fire brigade, but you'll meet everyone in the corridor.",
            options: [
              "Kitchens are open all night, and cookware is provided.",
              "Kitchens close at eleven as they did last year.",
              "Guests must bring their own cookware.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "corrections"],
        },
        {
          order: 3,
          type: "MCQ_MULTI",
          stem: "Questions 5–6. The tutor mentions TWO things the library can no longer do. Choose TWO letters, A–E.",
          payload: {
            audioScript:
              "TUTOR: Two limitations to plan around, I'm afraid. Inter-library loans: still possible, but the guarantee is gone — items can take three weeks, so order in the first fortnight or design around them. And we've lost the evening scanning service; staff will still scan a chapter on request during the day, which for most of you is the same thing. What the library still does well is the online repository — instant, no queues — and the study rooms, which you can book yourself; nobody needs my permission any more.",
            options: [
              "Guaranteed fast inter-library loans.",
              "Evening scanning service.",
              "Access to the online repository.",
              "Booking study rooms without permission.",
              "Lending laptops overnight.",
            ],
            choose: 2,
          },
          answer: { options: [0, 1] },
          points: 2,
          skills: ["detail", "negation"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Question 7. Complete the note. Write ONE WORD ONLY.",
          payload: {
            audioScript:
              "LECTURER: The honeybee's waggle dance is usually described as a map, and it is, but the subtler part is the timetable. A returning dancer points the way to a flower patch and, by the vigour of the figure-eight, says how rich the patch is; the information decays within an hour, because a patch that was worth visiting at nine may be stripped by ten. So the dance is less a map than a ___ with an expiry time — and the colony's scouts, who check the patch, reset the message if it is still true.",
            context: "The waggle dance works like a map with an expiry time — less a map than a ___ .",
            blanks: [{ answer: "timetable", alternatives: ["message"] }],
            words: 1,
          },
          answer: { blanks: [{ answer: "timetable" }] },
          skills: ["detail", "academic-vocab"],
        },
        {
          order: 5,
          type: "MCQ_SINGLE",
          stem: "Question 8. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "RECRUITER: For the warehouse night shift — the pattern is four nights on, three off, and the 'three off' can move at busy times, which the advert calls flexible, and I'll call it what it is: they change. The rate is time-and-a-half after midnight, and — this is the part people miss — the transport allowance of four pounds a shift is paid only to staff who start after eight in the evening. If your shift starts at seven, the allowance is not yours, however you get to work.",
            options: [
              "The transport allowance is paid only to staff starting after 8 p.m.",
              "The transport allowance is paid to everyone on nights.",
              "The shift pattern never changes.",
            ],
          },
          answer: { option: 0 },
          skills: ["conditions", "detail"],
        },
        {
          order: 6,
          type: "FILL_BLANK",
          stem: "Question 9. Complete the note. Write NO MORE THAN TWO WORDS.",
          payload: {
            audioScript:
              "ADVISER: Last thing about the grant. The deadline everyone quotes is the thirty-first, but that's the deadline for the FULL application. The draft outline has to be in a fortnight earlier, by the seventeenth, or the whole submission slides to the next round — and the next round is after the holidays, so in practice you lose a term. Get the outline in by the ___ and treat the thirty-first as the final date for everything else.",
            context: "The draft outline is due by the ___ , two weeks before the full application deadline of the 31st.",
            blanks: [{ answer: "seventeenth", alternatives: ["17th", "17"] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "seventeenth", numbers: true }] },
          skills: ["numbers", "detail"],
        },
      ],
    },
  ],
};

export const academicReadingSectionMock1: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Academic Reading Section Mock 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "One full-style passage with the complete question-type mix: MCQ, TFNG, YNNG, matching headings, matching information and summary completion. Official section: 60 minutes for 40 questions over three passages; this sample has one passage and 7 items.",
  ),
  sections: [
    {
      key: "reading",
      title: "Academic Reading",
      directions: "One passage, official types, 60-minute timing context.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "MATCHING",
          stem: "Questions 1–2. Choose the most suitable heading (i–v) for paragraphs B and C. ONE heading will not be used.",
          payload: {
            passage:
              "THE SLOW SCIENCE OF SOIL\nA. Soil is the least glamorous subject in ecology and the one on which most of the rest depends. A handful of healthy soil contains more individual organisms than there are people in Europe, arranged in food webs nobody has fully mapped, performing services — breaking down waste, storing water, trading nutrients with roots — that no technology reproduces at any price.\nB. What changed in the last century was the pace, not the fact, of disturbance. Ploughing is ancient; the tractor made it instant and repeated, and the invention of soluble nitrogen, which let farmers feed crops without feeding the soil, quietly redefined a field as a factory floor. Yields rose everywhere the package travelled, and everywhere it travelled the biological fraction of the ground thinned.\nC. Restoration is possible and, on the evidence so far, cheaper than expected. Farmers who stop digging and keep living roots in the ground year-round report organic matter climbing back within a decade, with the fastest gains on the poorest land — precisely the fields conventional agronomy had written off. The mechanism is unglamorous: roots leak sugars, sugars feed fungi, fungi assemble the aggregates that hold water through drought.\nD. The obstacle is measurement. Carbon in soil is real but slow, and a market that pays for it must verify it, which costs, and verification invites both fraud and honest error. Every serious review of the last five years reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade — not because the carbon is absent, but because attributing one year's change to one actor's conduct defeats the arithmetic of audits.",
            prompt: "Match paragraphs B and C to headings.",
            items: [
              { id: "pB", text: "Paragraph B" },
              { id: "pC", text: "Paragraph C" },
            ],
            options: [
              { id: "i", text: "i — Accelerated disturbance and the factory field" },
              { id: "ii", text: "ii — Restoration, cheaper than expected" },
              { id: "iii", text: "iii — The problem of paying for what cannot be measured" },
              { id: "iv", text: "iv — A handful of more organisms than people" },
              { id: "v", text: "v — The glamour of ecology" },
            ],
          },
          answer: { pairs: { pB: "i", pC: "ii" } },
          points: 2,
          skills: ["main-idea", "paraphrase"],
        },
        {
          order: 2,
          type: "TFNG",
          stem: "Questions 3–4. Do the following statements agree with the information in the passage?",
          payload: {
            passage:
              "THE SLOW SCIENCE OF SOIL\nA. Soil is the least glamorous subject in ecology and the one on which most of the rest depends. A handful of healthy soil contains more individual organisms than there are people in Europe, arranged in food webs nobody has fully mapped, performing services — breaking down waste, storing water, trading nutrients with roots — that no technology reproduces at any price.\nB. What changed in the last century was the pace, not the fact, of disturbance. Ploughing is ancient; the tractor made it instant and repeated, and the invention of soluble nitrogen, which let farmers feed crops without feeding the soil, quietly redefined a field as a factory floor. Yields rose everywhere the package travelled, and everywhere it travelled the biological fraction of the ground thinned.\nC. Restoration is possible and, on the evidence so far, cheaper than expected. Farmers who stop digging and keep living roots in the ground year-round report organic matter climbing back within a decade, with the fastest gains on the poorest land — precisely the fields conventional agronomy had written off. The mechanism is unglamorous: roots leak sugars, sugars feed fungi, fungi assemble the aggregates that hold water through drought.\nD. The obstacle is measurement. Carbon in soil is real but slow, and a market that pays for it must verify it, which costs, and verification invites both fraud and honest error. Every serious review of the last five years reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade — not because the carbon is absent, but because attributing one year's change to one actor's conduct defeats the arithmetic of audits.",
            statement: "No existing technology can reproduce the services healthy soil performs.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 3,
          type: "TFNG",
          payload: {
            passage:
              "THE SLOW SCIENCE OF SOIL\nA. Soil is the least glamorous subject in ecology and the one on which most of the rest depends. A handful of healthy soil contains more individual organisms than there are people in Europe, arranged in food webs nobody has fully mapped, performing services — breaking down waste, storing water, trading nutrients with roots — that no technology reproduces at any price.\nB. What changed in the last century was the pace, not the fact, of disturbance. Ploughing is ancient; the tractor made it instant and repeated, and the invention of soluble nitrogen, which let farmers feed crops without feeding the soil, quietly redefined a field as a factory floor. Yields rose everywhere the package travelled, and everywhere it travelled the biological fraction of the ground thinned.\nC. Restoration is possible and, on the evidence so far, cheaper than expected. Farmers who stop digging and keep living roots in the ground year-round report organic matter climbing back within a decade, with the fastest gains on the poorest land — precisely the fields conventional agronomy had written off. The mechanism is unglamorous: roots leak sugars, sugars feed fungi, fungi assemble the aggregates that hold water through drought.\nD. The obstacle is measurement. Carbon in soil is real but slow, and a market that pays for it must verify it, which costs, and verification invites both fraud and honest error. Every serious review of the last five years reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade — not because the carbon is absent, but because attributing one year's change to one actor's conduct defeats the arithmetic of audits.",
            statement: "The fastest improvements in organic matter have come on land previously considered hopeless.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 4,
          type: "TFNG",
          stem: "Questions 5–6. Do the following statements reflect the claims of the writer?",
          payload: {
            passage:
              "THE SLOW SCIENCE OF SOIL\nA. Soil is the least glamorous subject in ecology and the one on which most of the rest depends. A handful of healthy soil contains more individual organisms than there are people in Europe, arranged in food webs nobody has fully mapped, performing services — breaking down waste, storing water, trading nutrients with roots — that no technology reproduces at any price.\nB. What changed in the last century was the pace, not the fact, of disturbance. Ploughing is ancient; the tractor made it instant and repeated, and the invention of soluble nitrogen, which let farmers feed crops without feeding the soil, quietly redefined a field as a factory floor. Yields rose everywhere the package travelled, and everywhere it travelled the biological fraction of the ground thinned.\nC. Restoration is possible and, on the evidence so far, cheaper than expected. Farmers who stop digging and keep living roots in the ground year-round report organic matter climbing back within a decade, with the fastest gains on the poorest land — precisely the fields conventional agronomy had written off. The mechanism is unglamorous: roots leak sugars, sugars feed fungi, fungi assemble the aggregates that hold water through drought.\nD. The obstacle is measurement. Carbon in soil is real but slow, and a market that pays for it must verify it, which costs, and verification invites both fraud and honest error. Every serious review of the last five years reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade — not because the carbon is absent, but because attributing one year's change to one actor's conduct defeats the arithmetic of audits.",
            statement: "The writer believes soil carbon markets should be closed down.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["writer-claims", "not-given"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: {
            passage:
              "THE SLOW SCIENCE OF SOIL\nA. Soil is the least glamorous subject in ecology and the one on which most of the rest depends. A handful of healthy soil contains more individual organisms than there are people in Europe, arranged in food webs nobody has fully mapped, performing services — breaking down waste, storing water, trading nutrients with roots — that no technology reproduces at any price.\nB. What changed in the last century was the pace, not the fact, of disturbance. Ploughing is ancient; the tractor made it instant and repeated, and the invention of soluble nitrogen, which let farmers feed crops without feeding the soil, quietly redefined a field as a factory floor. Yields rose everywhere the package travelled, and everywhere it travelled the biological fraction of the ground thinned.\nC. Restoration is possible and, on the evidence so far, cheaper than expected. Farmers who stop digging and keep living roots in the ground year-round report organic matter climbing back within a decade, with the fastest gains on the poorest land — precisely the fields conventional agronomy had written off. The mechanism is unglamorous: roots leak sugars, sugars feed fungi, fungi assemble the aggregates that hold water through drought.\nD. The obstacle is measurement. Carbon in soil is real but slow, and a market that pays for it must verify it, which costs, and verification invites both fraud and honest error. Every serious review of the last five years reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade — not because the carbon is absent, but because attributing one year's change to one actor's conduct defeats the arithmetic of audits.",
            statement: "In the writer's view, the science is trustworthy at field level even though it does not serve trade.",
            labels: ["Yes", "No", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["writer-claims"],
        },
        {
          order: 6,
          type: "MCQ_SINGLE",
          stem: "Question 7. Choose the correct letter, A, B, C or D.",
          payload: {
            passage:
              "THE SLOW SCIENCE OF SOIL\nA. Soil is the least glamorous subject in ecology and the one on which most of the rest depends. A handful of healthy soil contains more individual organisms than there are people in Europe, arranged in food webs nobody has fully mapped, performing services — breaking down waste, storing water, trading nutrients with roots — that no technology reproduces at any price.\nB. What changed in the last century was the pace, not the fact, of disturbance. Ploughing is ancient; the tractor made it instant and repeated, and the invention of soluble nitrogen, which let farmers feed crops without feeding the soil, quietly redefined a field as a factory floor. Yields rose everywhere the package travelled, and everywhere it travelled the biological fraction of the ground thinned.\nC. Restoration is possible and, on the evidence so far, cheaper than expected. Farmers who stop digging and keep living roots in the ground year-round report organic matter climbing back within a decade, with the fastest gains on the poorest land — precisely the fields conventional agronomy had written off. The mechanism is unglamorous: roots leak sugars, sugars feed fungi, fungi assemble the aggregates that hold water through drought.\nD. The obstacle is measurement. Carbon in soil is real but slow, and a market that pays for it must verify it, which costs, and verification invites both fraud and honest error. Every serious review of the last five years reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade — not because the carbon is absent, but because attributing one year's change to one actor's conduct defeats the arithmetic of audits.",
            options: [
              "Soluble nitrogen allowed crops to be fed without the soil being fed.",
              "Soluble nitrogen was invented to restore thinned soil.",
              "The tractor was invented after soluble nitrogen.",
              "Yields fell wherever the new package travelled.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail", "paraphrase"],
        },
      ],
    },
  ],
};

export const generalReadingSectionMock1: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS General Training Reading Section Mock 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "All three GT sections: a notice and an advert (Section 1), a staff policy (Section 2), and a longer general-interest passage (Section 3). Official section: 60 minutes for 40 questions; this sample has 9 items.",
  ),
  sections: [
    {
      key: "reading",
      title: "General Training Reading (Sections 1–3)",
      directions: "Everyday texts, a workplace text, and one longer passage. 60-minute timing context.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Section 1, Questions 1–3. Read the notice and answer.",
          payload: {
            passage:
              "VILLAGE HALL — HIRERS' NOTES\nKeys: collect from the shop by 6 p.m.; return through the letterbox by 10 a.m. the next day at the latest. Heating: the hall is warmed from one hour before your booking; earlier arrivals will be cold and switching the boiler yourself is not permitted — it is inspected monthly and mis-setting it has twice emptied the oil tank. Cleaning: sweep and stack chairs; the cleaner comes at dawn, not after your event. Deposit: £50, returned within a fortnight provided nothing is broken and the key is back on time — late keys forfeit the deposit entirely, which the committee regrets and the insurers insist on.",
            options: [
              "The deposit is lost if the key is returned late.",
              "The deposit is lost only if something is broken.",
              "Hirers may set the boiler an hour before the booking.",
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
              "VILLAGE HALL — HIRERS' NOTES\nKeys: collect from the shop by 6 p.m.; return through the letterbox by 10 a.m. the next day at the latest. Heating: the hall is warmed from one hour before your booking; earlier arrivals will be cold and switching the boiler yourself is not permitted — it is inspected monthly and mis-setting it has twice emptied the oil tank. Cleaning: sweep and stack chairs; the cleaner comes at dawn, not after your event. Deposit: £50, returned within a fortnight provided nothing is broken and the key is back on time — late keys forfeit the deposit entirely, which the committee regrets and the insurers insist on.",
            statement: "The hall is heated for one hour before each booking.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 3,
          type: "TFNG",
          payload: {
            passage:
              "VILLAGE HALL — HIRERS' NOTES\nKeys: collect from the shop by 6 p.m.; return through the letterbox by 10 a.m. the next day at the latest. Heating: the hall is warmed from one hour before your booking; earlier arrivals will be cold and switching the boiler yourself is not permitted — it is inspected monthly and mis-setting it has twice emptied the oil tank. Cleaning: sweep and stack chairs; the cleaner comes at dawn, not after your event. Deposit: £50, returned within a fortnight provided nothing is broken and the key is back on time — late keys forfeit the deposit entirely, which the committee regrets and the insurers insist on.",
            statement: "Hirers must pay the cleaner extra for dawn visits.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["not-given"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Section 2, Questions 4–6. Read the job advert and answer.",
          payload: {
            passage:
              "HOME VISIT SUPPORT WORKER (part-time, mornings)\nYou will accompany older clients to appointments, help with shopping, and keep brief written notes after each visit. Experience is preferred but aptitude outranks it: we will train the right candidate from scratch, including a paid first-aid certificate. You must be comfortable working alone and confident with a smartphone — the rostering app is how shifts are offered and accepted, and phoning the office to ask for shifts is discouraged; the app exists precisely so the office can spend its time on clients. Mileage between visits is paid; mileage from home to the first visit is not, as is standard. Uniforms should be collected before your first shift.",
            options: [
              "Shifts are offered and accepted through an app; calling the office for shifts is discouraged.",
              "Shifts are allocated by the office by phone each morning.",
              "Mileage from home to the first visit is paid.",
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
              "HOME VISIT SUPPORT WORKER (part-time, mornings)\nYou will accompany older clients to appointments, help with shopping, and keep brief written notes after each visit. Experience is preferred but aptitude outranks it: we will train the right candidate from scratch, including a paid first-aid certificate. You must be comfortable working alone and confident with a smartphone — the rostering app is how shifts are offered and accepted, and phoning the office to ask for shifts is discouraged; the app exists precisely so the office can spend its time on clients. Mileage between visits is paid; mileage from home to the first visit is not, as is standard. Uniforms should be collected before your first shift.",
            statement: "The employer will pay for the first-aid certificate.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 6,
          type: "TFNG",
          payload: {
            passage:
              "HOME VISIT SUPPORT WORKER (part-time, mornings)\nYou will accompany older clients to appointments, help with shopping, and keep brief written notes after each visit. Experience is preferred but aptitude outranks it: we will train the right candidate from scratch, including a paid first-aid certificate. You must be comfortable working alone and confident with a smartphone — the rostering app is how shifts are offered and accepted, and phoning the office to ask for shifts is discouraged; the app exists precisely so the office can spend its time on clients. Mileage between visits is paid; mileage from home to the first visit is not, as is standard. Uniforms should be collected before your first shift.",
            statement: "Workers may bring their children on visits if clients agree.",
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
              "THE QUIET TRIUMPH OF THE LIBRARY CARD\nPublic libraries were predicted to die twice: first by television, which was going to keep everyone at home, then by the internet, which was going to keep everyone anywhere. The second prophecy has aged worst. In the decade after cheap broadband reached the poorest districts, lending held up better than anyone modelled, and the busiest counters in many towns are now those of the library, which finds itself running services no one planned for it: warm rooms in winter, homework tables at four o'clock, printers for people who have no printer and forms for people who have no one to explain the forms.\nThe institution survived by refusing to be only a book warehouse. Where councils measured loans alone, branches closed; where they measured visits and asked what the visits were for, the same buildings filled. The difference, staff say, is treating the front desk as a service point rather than a checkpoint — a change in posture, not in budget, though budget follows use and the argument to funders is easier when the footfall figures are already rising.\nWhat has not survived is the quiet. A library used to be the one indoor public space where silence was enforced, and the loss divides its users. Parents want noise because noise means children are using the place; readers want hush and have, in many branches, been given a room of their own again, glass-walled, which suggests the future is a building of zones rather than a single hush — a street indoors, with rooms off it, some loud and some not, open the hours the street around them keeps.",
            options: [
              "Where councils measured visits and their purposes, libraries filled; where only loans were counted, branches closed.",
              "The internet closed most branches in the decade after broadband arrived.",
              "The library no longer runs any services beyond lending.",
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
              "THE QUIET TRIUMPH OF THE LIBRARY CARD\nPublic libraries were predicted to die twice: first by television, which was going to keep everyone at home, then by the internet, which was going to keep everyone anywhere. The second prophecy has aged worst. In the decade after cheap broadband reached the poorest districts, lending held up better than anyone modelled, and the busiest counters in many towns are now those of the library, which finds itself running services no one planned for it: warm rooms in winter, homework tables at four o'clock, printers for people who have no printer and forms for people who have no one to explain the forms.\nThe institution survived by refusing to be only a book warehouse. Where councils measured loans alone, branches closed; where they measured visits and asked what the visits were for, the same buildings filled. The difference, staff say, is treating the front desk as a service point rather than a checkpoint — a change in posture, not in budget, though budget follows use and the argument to funders is easier when the footfall figures are already rising.\nWhat has not survived is the quiet. A library used to be the one indoor public space where silence was enforced, and the loss divides its users. Parents want noise because noise means children are using the place; readers want hush and have, in many branches, been given a room of their own again, glass-walled, which suggests the future is a building of zones rather than a single hush — a street indoors, with rooms off it, some loud and some not, open the hours the street around them keeps.",
            statement: "Lending fell in the decade after broadband reached poor districts.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["detail"],
        },
        {
          order: 9,
          type: "FILL_BLANK",
          stem: "Complete the sentence. Choose ONE WORD from the passage.",
          payload: {
            context:
              "The future library is described as a street indoors, with rooms off it — a building of ___ rather than a single hush.",
            blanks: [{ answer: "zones", alternatives: [] }],
            words: 1,
          },
          answer: { blanks: [{ answer: "zones" }] },
          skills: ["paraphrase", "detail"],
        },
      ],
    },
  ],
};

export const academicWritingSectionMock1: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Academic Writing Section Mock 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "Task 1 (mixed chart families) and Task 2 (opinion essay) under the 20/40 split. Rubric-graded against the public writing band descriptors.",
  ),
  sections: [
    {
      key: "writing",
      title: "Academic Writing (Tasks 1–2)",
      directions: "≈20 minutes on Task 1 (at least 150 words), ≈40 on Task 2 (at least 250). Task 2 weighted double.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "The two charts below show, for one company: (a) the share of each product family in total sales in 2015 and 2025, and (b) total sales in millions for those two years. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            supporting:
              "(a) Product family share of sales\nFamily | 2015 | 2025\nCameras | 61% | 22%\nAudio | 24% | 18%\nServices (repair, training) | 8% | 31%\nAccessories | 7% | 29%\n\n(b) Total sales\n2015: £410m · 2025: £688m",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — pie charts + totals",
          },
          points: 0,
          skills: ["task-achievement", "coherence", "lexical", "grammar"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Some people believe that students should be required to study a foreign language at secondary school. Others think secondary schools should focus on subjects with clearer career applications. Discuss both these views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
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
  ],
};

export const generalWritingSectionMock1: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS General Training Writing Section Mock 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "A formal request letter and an everyday opinion essay under the 20/40 split, rubric-graded against the public writing band descriptors.",
  ),
  sections: [
    {
      key: "writing",
      title: "General Training Writing (Tasks 1–2)",
      directions: "≈20 minutes on Task 1 (at least 150 words), ≈40 on Task 2. Task 2 weighted double.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "You have just moved to a new area and want to join a local sports club, but the website is out of date. Write a letter to the club secretary. In your letter: introduce yourself and say which activities interest you · ask about membership fees, times and what equipment is provided · explain what information on the website needs updating. Write at least 150 words. You do NOT need to write any addresses.",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — formal letter (request)",
          },
          points: 0,
          skills: ["task-achievement", "tone", "lexical", "grammar"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Some people think shops should be allowed to open on public holidays. Others think workers deserve these days off. Do you think the advantages of holiday opening outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
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
  ],
};

export const speakingSectionMockAcademic: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Speaking Section Mock (Academic) 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "A full three-part speaking simulation: interview, cue-card long turn with preparation, and abstract discussion. Graded against the public speaking band descriptors.",
  ),
  sections: [
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions: "11–14 minute format; your transcript is graded against the four speaking criteria.",
      timingSec: 780,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Part 1 — Let's talk about work and study, and about sport. Do you work, or are you a student? What did you want to be as a child? Do you play any sport, or watch it?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe a journey that took longer than you expected. You should say: where you were going · what happened · how you passed the time · and explain how you felt by the end. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — long turn",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Does cheap travel make people more or less patient? Should long journeys be engineered away, or is some waiting good for us? Why might future generations travel less than ours?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — discussion",
          },
          points: 0,
          skills: ["coherence", "grammar"],
        },
        {
          order: 4,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Part 1 (second round) — Do you like cooking? What did you eat for breakfast today? Is any food from your childhood special to you?",
            prepSec: 0,
            speakSec: 75,
            rubricKey: "ielts.speaking",
            part: "Part 1 — interview (second round)",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 5,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 (extended) — Some people say cooking is a life skill everyone should leave school with. Do you agree? Should schools or families be responsible for teaching it?",
            prepSec: 10,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 3 — discussion (extension)",
          },
          points: 0,
          skills: ["coherence", "argument"],
        },
      ],
    },
  ],
};

export const speakingSectionMockGeneral: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS Speaking Section Mock (General Training) 1",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "A full three-part speaking simulation (identical test to Academic — fresh prompts): interview, cue-card long turn, and everyday-life discussion.",
  ),
  sections: [
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions: "11–14 minute format; your transcript is graded against the four speaking criteria.",
      timingSec: 780,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Part 1 — Let's talk about family and about weekends. Do you live with relatives or on your own? What do you usually do at the weekend? Did your weekends change over the years?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe a time when you helped someone. You should say: who you helped · what the situation was · what you did · and explain how you felt afterwards. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — long turn",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Should neighbours help each other more than they do? Why do some communities feel close and others do not? Does social media make helping easier or lazier?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — discussion",
          },
          points: 0,
          skills: ["coherence", "grammar"],
        },
        {
          order: 4,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Part 1 (second round) — Do you use many apps? Which one would you keep if you could have only one? Have your habits with phones changed?",
            prepSec: 0,
            speakSec: 75,
            rubricKey: "ielts.speaking",
            part: "Part 1 — interview (second round)",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 5,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 (extended) — Should children learn to use technology at school, or is that a job for families? What did people do before household machines, and was life better or simply harder?",
            prepSec: 10,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 3 — discussion (extension)",
          },
          points: 0,
          skills: ["coherence", "argument"],
        },
      ],
    },
  ],
};
