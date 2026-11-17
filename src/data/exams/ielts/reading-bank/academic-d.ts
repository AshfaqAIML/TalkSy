/**
 * Academic passage library D (PROMPT 45, Parts B and D).
 *
 *   ielts-rb-ac-placebo   — Medicine,    Section 3, advanced (d4)
 *   ielts-rb-ac-traffic   — Economics,   Section 2, standard  (d3)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acPlacebo: ReadingExercise = {
  slug: "ielts-rb-ac-placebo",
  title: "The honest placebo",
  variant: "academic",
  section: 3,
  subject: "Medicine",
  difficulty: 4,
  estimatedMinutes: 17,
  objective: "Follow a medical argument into paradox: why pills openly labelled as placebos still help some patients, what the mechanism might be, and where the sceptics draw the line.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "The honest placebo",
      paragraphs: [
        "Medicine has known for centuries that treatment can help even when the treatment does nothing. Give a patient a pill made of sugar, say nothing, and some of them will feel better: pain eases, sleep improves, appetite returns. Modern research made the phenomenon inescapable. Careful trials comparing a new drug against an inert pill — a placebo identical in size, colour and taste — found that a slice of patients on the inert pill improved too. To this day, the placebo arm remains the yardstick every new medicine must beat before it can be sold.",
        "What produces the effect is still debated. Expectation is the classic candidate: believing a treatment will work, the argument runs, changes how the brain regulates symptoms. Conditioning is a second: bodies that have learned to associate a capsule with relief may start the relief on cue. And hovering over both explanations is a humbler one — many symptoms simply improve on their own, and a well-timed sugar pill takes the credit.",
        "The sugar pill's honesty problem was the next frontier. Giving a placebo has always meant lying — the doctor hands over an inert pill and lets the patient believe it is medicine — and deception sits badly with modern medical ethics. Trials in the past two decades therefore tried something that sounds like a contradiction: the open-label placebo, where patients are told, plainly and in writing, that the capsules they are taking contain no active ingredient at all.",
        "The results were not what the textbooks predicted. In studies with patients suffering from irritable bowel syndrome, chronic low-back pain and similar conditions, a meaningful share of those knowingly taking placebos still reported relief — sometimes matching patients who received no treatment at all and sometimes edging close to hidden-placebo groups. The studies were small and far from perfect, but they kept pointing the same way: something about the treatment context helps even when the pill is discounted to zero.",
        "What is that something? Researchers point to the consultation itself: the act of being listened to, examined, handed a bottle and given a schedule. The ritual of care, on this reading, carries part of the healing — expectation may work through channels that do not require a consciously held belief. A patient who doubts the pill can still respond to being treated, because hope and attention arrive by a different route than logic. In plain language, the mind does not need to believe in the medicine for the encounter to help; it only needs the encounter.",
        "Sceptics raise a boundary that matters. The clearest open-label effects cluster in symptoms the patients themselves report — pain, fatigue, nausea, mood — rather than in objective measures such as tumour size or infection markers. That is not nothing: those symptoms are why many patients see doctors. But it rules out the fantasy version of the finding, in which honest sugar pills shrink cancers or clear infections. Nobody serious in the field proposes that.",
        "Even the cautious version changes the conversation. If part of a medicine's power is the context around it, then clinic time, attention and honest explanation are not courtesies bolted onto treatment — they are part of the treatment. The placebo effect, one researcher put it, is not about fooling the body; it is the measurable trace of care. The honest placebo simply removes the lie and finds that a surprising amount of the trace survives.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "yes-no-not-given",
      label: "Questions 1–5",
      instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
      statements: [
        {
          text: "Improvements among patients taking inert pills are a recognised part of medical research.",
          answer: "YES",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Careful trials comparing a new drug against an inert pill — a placebo identical in size, colour and taste — found that a slice of patients on the inert pill improved too." }],
            explanation: "The opening paragraph treats the placebo effect as inescapable and institutionalised: the placebo arm is the yardstick every new medicine must beat. The writer presents the phenomenon as recognised fact, so the statement is YES.",
          },
        },
        {
          text: "Deceiving the patient is essential for a placebo to have any effect.",
          answer: "NO",
          lure: "NOT GIVEN",
          meta: {
            skills: ["opinion", "inference"],
            evidence: [{ block: 0, paragraph: 3, quote: "a meaningful share of those knowingly taking placebos still reported relief" }],
            explanation: "The open-label studies are the passage's centrepiece: patients who knew the pills were inert still reported relief. The writer treats those results as genuine evidence against the necessity of deception, so the statement contradicts the writer's view.",
            trap: { family: "boundary", note: "The textbook prediction says deception is essential — the passage's point is that the prediction failed." },
            whyWrong: ["NOT GIVEN: the writer does take a position — the open-label evidence is presented as pointing 'the same way' even with the lie removed."],
          },
        },
        {
          text: "The writer has prescribed open-label placebos in their own clinic.",
          answer: "NOT GIVEN",
          lure: "NO",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 0, paragraph: 2, quote: "Trials in the past two decades therefore tried something that sounds like a contradiction: the open-label placebo" }],
            explanation: "The passage reports on trials and researchers but never states the writer's own clinical practice. Assuming the writer is a clinician — or denying it — imports outside knowledge; the text is silent.",
            trap: { family: "boundary", note: "Writers on medical topics are often doctors, but the passage never says so." },
            whyWrong: ["NO: the passage never denies clinical experience either — biography is simply absent."],
          },
        },
        {
          text: "The way a consultation is conducted can contribute to the patient's improvement.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "the ritual of care, on this reading, carries part of the healing" }],
            explanation: "Paragraph E argues that the consultation itself — being listened to, examined, given a schedule — carries part of the healing, and paragraph G draws the same conclusion about clinic time and attention. The statement agrees with the writer.",
          },
        },
        {
          text: "The clearest open-label effects appear in measurements made by doctors rather than reports by patients.",
          answer: "NO",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 5, quote: "The clearest open-label effects cluster in symptoms the patients themselves report" }],
            explanation: "Paragraph F states the reverse of the statement: the effects cluster in patient-reported symptoms, not in objective measures such as tumour size. The writer endorses that boundary, so the statement is NO.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "matching-sentence-endings",
      label: "Questions 6–9",
      instruction: "Complete each sentence with the correct ending, A–E, below. There are more endings than sentences, so you will not use them all.",
      extraOption: true,
      items: [
        {
          text: "In a conventional trial, patients receiving the placebo are unaware",
          correct: 0,
          meta: {
            skills: ["detail", "structure"],
            evidence: [{ block: 0, paragraph: 0, quote: "Give a patient a pill made of sugar, say nothing, and some of them will feel better" }],
            explanation: "The classical design depends on blindness: the placebo arm exists precisely so that neither group knows which pill is which. Ending A completes that point, while the endings about honest labelling describe the opposite design.",
          },
        },
        {
          text: "Open-label studies produced surprising results because patients reported benefits",
          correct: 1,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "the open-label placebo, where patients are told, plainly and in writing, that the capsules they are taking contain no active ingredient at all" }],
            explanation: "The paradox of the open-label design is that the disclosure is total and relief is still reported. Ending B captures both halves — the telling and the benefit.",
          },
        },
        {
          text: "The ritual explanation suggests that expectation can operate",
          correct: 3,
          meta: {
            skills: ["paraphrase", "inference"],
            evidence: [{ block: 0, paragraph: 4, quote: "expectation may work through channels that do not require a consciously held belief" }],
            explanation: "Paragraph E proposes that being treated helps even when the pill is doubted, because hope arrives by a route other than logic. Ending D paraphrases that channel idea; the objective-measures ending belongs to the sceptics' boundary in paragraph F.",
          },
        },
        {
          text: "Sceptics observe that the strongest evidence involves",
          correct: 4,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "The clearest open-label effects cluster in symptoms the patients themselves report — pain, fatigue, nausea, mood" }],
            explanation: "The sceptics' boundary line is exactly the one ending E draws: the effects concentrate in symptoms patients themselves report. Ending C tempts by mentioning objective measures, which is where the effects do NOT cluster.",
          },
        },
      ],
      options: [
        "of whether their capsule is the real medicine or the inert one.",
        "even after being told openly that the pills were inert.",
        "in objective measures such as tumour size.",
        "through channels that need no consciously held belief.",
        "symptoms the patients themselves report feeling.",
      ],
    },
    {
      id: "q3",
      type: "sentence-completion",
      label: "Questions 10–13",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "10. An inert pill is one that contains no active" }, { kind: "blank", no: 10 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "11. Handing over a placebo in the traditional way meant that the doctor had to engage in" }, { kind: "blank", no: 11 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "12. The most convincing open-label studies recruited patients with conditions such as chronic low-back pain and irritable" }, { kind: "blank", no: 12 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "13. Even patients who knowingly took placebos still reported" }, { kind: "blank", no: 13 }, { kind: "text", text: "of their symptoms." }],
      ],
      blanks: [
        {
          no: 10,
          answer: "ingredient",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 2, quote: "that the capsules they are taking contain no active ingredient at all" }],
            explanation: "The passage twice describes inert pills as containing no active ingredient — in paragraph C's description of the open-label disclosure. The sentence lifts that phrase, so the missing noun is ingredient.",
          },
        },
        {
          no: 11,
          answer: "deception",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "Giving a placebo has always meant lying — the doctor hands over an inert pill and lets the patient believe it is medicine — and deception sits badly with modern medical ethics." }],
            explanation: "Paragraph C names the problem directly: giving a placebo in the old way meant lying, and the noun for that lying in the same sentence is deception. The sentence asks what the doctor had to engage in.",
          },
        },
        {
          no: 12,
          answer: "bowel syndrome",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "In studies with patients suffering from irritable bowel syndrome, chronic low-back pain and similar conditions" }],
            explanation: "Paragraph D lists the conditions studied: irritable bowel syndrome and chronic low-back pain among them. The sentence keeps the adjective irritable and asks for the two-word name that follows it.",
          },
        },
        {
          no: 13,
          answer: "relief",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "a meaningful share of those knowingly taking placebos still reported relief" }],
            explanation: "The key result sentence says patients knowingly taking placebos still reported relief. The sentence reuses 'reported' and asks for the noun that completes it.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "inert", partOfSpeech: "adjective", definition: "having no pharmacological effect; an inert pill is a placebo identical in appearance to the real medicine." },
    { word: "yardstick", partOfSpeech: "noun", definition: "a standard used for comparison; the placebo arm is the yardstick every new medicine must beat." },
    { word: "conditioning", partOfSpeech: "noun", definition: "learning by association; a body conditioned to link capsules with relief may start the relief on cue." },
    { word: "open-label", partOfSpeech: "adjective", definition: "describing a study in which everyone knows what is being taken; open-label placebos are given with honest labelling." },
    { word: "consultation", partOfSpeech: "noun", definition: "the meeting between doctor and patient; the ritual of the consultation may itself carry part of the healing." },
    { word: "cluster", partOfSpeech: "verb", definition: "to concentrate in one place; the clearest effects cluster in patient-reported symptoms." },
    { word: "nausea", partOfSpeech: "noun", definition: "the feeling of wanting to vomit; one of the subjective symptoms where placebo effects appear." },
  ],
  passageNote: "The argument alternates evidence and objection: phenomenon (A), mechanisms (B), the ethics problem (C), the open-label surprise (D), the ritual explanation (E), the sceptics' boundary (F), the conclusion about care (G). Yes/No items test the writer's stance at those hinges.",
  source: READING_BANK_SOURCE_NOTE,
};

export const acTraffic: ReadingExercise = {
  slug: "ielts-rb-ac-traffic",
  title: "The cost of congestion",
  variant: "academic",
  section: 2,
  subject: "Economics",
  difficulty: 3,
  estimatedMinutes: 15,
  objective: "Read an economics argument: congestion as the absence of a price, road pricing as the remedy, the equity objection, and what happens to travel habits when the price sticks.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "The cost of congestion",
      paragraphs: [
        "Every working day, the world's cities perform the same slow experiment. Roads built to carry traffic at speed fill until they carry it at a crawl; journeys that took twenty minutes at dawn take an hour at nine. The cost is usually counted in hours — time that could be worked, slept or spent — but the tail is longer: engines idling in queues burn fuel without moving anyone, and the exhaust settles on the streets the queue occupies. What looks like a traffic problem is, to an economist, a pricing problem: a queue is what happens when a scarce thing is given away.",
        "The reasoning comes from an old economic parable about common pasture. When a resource is open to all and free at the point of use, each user gains the full benefit of consuming it while paying only a sliver of the cost — the cost being the delay imposed on everyone else. Rational individuals therefore overuse the pasture until it collapses, and rational drivers likewise crowd the road until nobody moves. The road, in the economist's phrase, is a commons, and congestion is its tragedy.",
        "The remedy follows from the diagnosis: make drivers pay for the delay they cause. Singapore tried first, in 1975, requiring motorists to buy a daily licence before entering the city centre at peak hours. London followed in 2003 with a flat daily charge for driving into the central zone, the revenue earmarked for improving buses. The early results were consistent with the theory: the volume of traffic entering the zone fell noticeably in the first year, bus speeds rose, and journey times for the remaining cars improved. Other cities studied the numbers and a handful — though only a handful — copied the scheme.",
        "Modern versions refine the price rather than the principle. Instead of a flat daily fee, charges can vary by hour, rising with the height of the peak and falling to nothing at midnight; sensors and number-plate cameras have made such variable pricing administratively possible. In economic terms the move is from a rough average towards something closer to the marginal cost of each trip — the actual delay each additional car imposes on all the others at that moment.",
        "Fairness is where the argument bites hardest. A flat charge takes the same money from a wealthy driver as from a shift worker with no alternative, which is why critics call congestion charging regressive. Defenders answer with the uses of the revenue: London's bus investment, funded by the charge, served largely the riders least likely to own a car at all. The equity case, they argue, depends not on the price of the road but on what the price pays for.",
        "What happens to behaviour is the question economists watch most closely. In the short weeks after a charge appears, traffic falls as discretionary trips are dropped or retimed. The deeper adjustment comes over months and years: commuters shift permanently to buses and trains, firms move deliveries to off-peak windows, and some households conclude that a second car is no longer worth its keep. Measured this way, the price elasticity of driving grows with time — habits bend, but they bend slowly.",
        "None of this makes congestion pricing a cure for urban life. Cities grow, freight must move, and any price high enough to empty the roads completely would be a price nobody would vote for. What the pricing cities have shown is narrower and more useful: a queue responds to a price, the revenue can be recycled to those the price hurts, and the honest alternative — free roads, paid for in hours — is not free at all.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-headings",
      label: "Questions 1–6",
      instruction: "Choose the correct heading for paragraphs A–F from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
      extraOption: true,
      reuseNote: "There are more headings than paragraphs, so you will not use them all.",
      items: [
        {
          text: "Paragraph A",
          correct: 0,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 0, quote: "What looks like a traffic problem is, to an economist, a pricing problem: a queue is what happens when a scarce thing is given away." }],
            explanation: "Paragraph A describes the cost of queues and closes by reframing them: a queue is what happens when something scarce is given away. Heading i ('A queue with no price tag') paraphrases that reframing.",
          },
        },
        {
          text: "Paragraph B",
          correct: 1,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "The road, in the economist's phrase, is a commons, and congestion is its tragedy." }],
            explanation: "Paragraph B recounts the parable of the common pasture and applies it to roads: open access plus zero price leads to collapse. Heading ii ('When everyone owns the road, nobody can use it') compresses the tragedy idea without quoting it.",
          },
        },
        {
          text: "Paragraph C",
          correct: 2,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "Singapore tried first, in 1975, requiring motorists to buy a daily licence before entering the city centre at peak hours. London followed in 2003" }],
            explanation: "Paragraph C is the history of implementation: Singapore 1975, London 2003, and the early measured effects. Heading iii ('Pioneering cities put a price on the queue') names the pioneers and the policy.",
          },
        },
        {
          text: "Paragraph D",
          correct: 3,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "charges can vary by hour, rising with the height of the peak and falling to nothing at midnight" }],
            explanation: "Paragraph D explains the technical refinement: charges that move with the clock towards marginal cost. Heading iv ('Prices that move with the clock') captures the variable pricing at the paragraph's centre.",
          },
        },
        {
          text: "Paragraph E",
          correct: 4,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 4, quote: "A flat charge takes the same money from a wealthy driver as from a shift worker with no alternative" }],
            explanation: "Paragraph E stages the equity argument: who pays the charge and who gains from the revenue. Heading v ('Who pays, and who gains') names both sides of the exchange.",
          },
        },
        {
          text: "Paragraph F",
          correct: 5,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "habits bend, but they bend slowly" }],
            explanation: "Paragraph F tracks behaviour over time: short-term trip dropping, long-term modal shift, and the conclusion that habits bend slowly. Heading vi ('Habits bend, given time') lifts the paragraph's own conclusion.",
          },
        },
      ],
      options: [
        "A queue with no price tag",
        "When everyone owns the road, nobody can use it",
        "Pioneering cities put a price on the queue",
        "Prices that move with the clock",
        "Who pays, and who gains",
        "Habits bend, given time",
        "Why buses are faster than cars",
      ],
    },
    {
      id: "q2",
      type: "note-completion",
      label: "Questions 7–10",
      instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "Congestion charging — the essentials" }],
        [{ kind: "text", text: "• A free road at rush hour suffers the overuse typical of a shared" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "• Singapore 1975: a daily licence was needed to enter the city" }, { kind: "blank", no: 8 }, { kind: "text", text: "at peak hours." }],
        [{ kind: "text", text: "• London 2003: charge revenue was earmarked for improving" }, { kind: "blank", no: 9 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "• Over months, drivers adapt permanently: retiming trips, sharing cars or shifting to buses and" }, { kind: "blank", no: 10 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 7,
          answer: "pasture",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "The reasoning comes from an old economic parable about common pasture." }],
            explanation: "Paragraph B's parable is about common pasture — the shared resource whose fate the road repeats. The notes keep the word 'shared' and ask for the noun the parable used.",
          },
        },
        {
          no: 8,
          answer: "centre",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "requiring motorists to buy a daily licence before entering the city centre at peak hours" }],
            explanation: "Singapore's licence covered entry to the city centre at peak hours, paragraph C states. The note keeps 'city' and needs the noun that completes the place name.",
          },
        },
        {
          no: 9,
          answer: "buses",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "London followed in 2003 with a flat daily charge for driving into the central zone, the revenue earmarked for improving buses" }],
            explanation: "The 2003 clause says the revenue was earmarked for improving buses. The note reuses 'earmarked' and asks for the thing improved.",
          },
        },
        {
          no: 10,
          answer: "trains",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "commuters shift permanently to buses and trains" }],
            explanation: "The long-term adjustment paragraph names the permanent shift: commuters move to buses and trains. The note keeps 'buses and' and asks for the partner noun, both words taken straight from the sentence.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "multiple-choice",
      label: "Questions 11–13",
      instruction: "Choose the correct letter, A, B, C or D.",
      items: [
        {
          stem: "The writer uses the parable of the common pasture to explain why",
          options: [
            "pastures are more productive than roads",
            "a free resource ends up overused by rational individuals",
            "drivers prefer public transport at peak times",
            "cities should build fewer roads",
          ],
          correct: 1,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "Rational individuals therefore overuse the pasture until it collapses, and rational drivers likewise crowd the road until nobody moves." }],
            explanation: "The parable's job in paragraph B is to explain the logic of overuse: each user gains the full benefit and pays only a sliver of the cost, so rational individuals crowd the resource. The writer applies the mechanism, not the farming.",
            whyWrong: ["A: no comparison of productivity is made.", "C: preferences are not the point; the mechanism of crowding is.", "D: the passage never argues for building fewer roads."],
          },
        },
        {
          stem: "According to the passage, the defenders of congestion charges answer the fairness objection by pointing to",
          options: [
            "exemptions for shift workers",
            "the falling price of sensors and cameras",
            "what the revenue is spent on",
            "the reduction in exhaust pollution",
          ],
          correct: 2,
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 4, quote: "The equity case, they argue, depends not on the price of the road but on what the price pays for." }],
            explanation: "Paragraph E reports the defenders' reply in their own formula: the equity case depends on what the price pays for — the bus investment funded by the charge. Exemptions and sensors appear nowhere in the argument.",
            whyWrong: ["A: no exemptions are mentioned.", "B: cheap sensors explain variable pricing, not fairness.", "D: pollution is counted in paragraph A, not in the fairness exchange."],
          },
        },
        {
          stem: "What is the writer's overall conclusion about congestion pricing?",
          options: [
            "It is a cure for most urban problems",
            "It works only in cities with excellent public transport",
            "It is a narrower but genuinely useful tool, since free roads have hidden costs",
            "It should be replaced by building more road capacity",
          ],
          correct: 2,
          lure: 0,
          meta: {
            skills: ["opinion", "structure"],
            evidence: [{ block: 0, paragraph: 6, quote: "What the pricing cities have shown is narrower and more useful: a queue responds to a price, the revenue can be recycled to those the price hurts, and the honest alternative — free roads, paid for in hours — is not free at all." }],
            explanation: "The final paragraph explicitly rejects the cure framing ('none of this makes congestion pricing a cure') and settles for the narrower, useful finding: queues respond to prices and the free alternative is paid for in hours. The statement must carry that same moderation.",
            trap: { family: "extreme-language", note: "'Cure for most urban problems' overstates a conclusion the paragraph itself calls narrower." },
            whyWrong: ["A: the paragraph opens by denying that pricing is a cure for urban life.", "B: public transport quality is never stated as a condition of success.", "D: more capacity is never proposed."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "congestion", partOfSpeech: "noun", definition: "the state of roads so full of traffic that movement slows to a crawl; the passage's subject." },
    { word: "idling", partOfSpeech: "verb (present participle)", definition: "of an engine: running while the vehicle is not moving; queueing engines idle and burn fuel." },
    { word: "pasture", partOfSpeech: "noun", definition: "grassland where animals feed; the shared pasture of the parable is destroyed by overuse." },
    { word: "earmarked", partOfSpeech: "verb (past)", definition: "officially set aside for a particular purpose; London's revenue was earmarked for buses." },
    { word: "regressive", partOfSpeech: "adjective", definition: "taking a larger share of a poor person's income than a rich person's; critics call flat charges regressive." },
    { word: "discretionary", partOfSpeech: "adjective", definition: "optional, done by choice rather than necessity; discretionary trips are dropped when a charge appears." },
    { word: "elasticity", partOfSpeech: "noun", definition: "in economics, how strongly demand responds to a change in price; driving's elasticity grows with time." },
  ],
  passageNote: "An economics argument in seven moves: symptom (A), mechanism (B), history (C), refinement (D), objection and reply (E), behaviour over time (F), verdict (G). The headings ride the moves; the notes ride paragraphs B, C and F.",
  source: READING_BANK_SOURCE_NOTE,
};
