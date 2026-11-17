/**
 * Academic passage library C (PROMPT 45, Parts B and D).
 *
 *   ielts-rb-ac-antikythera — History,     Section 3, advanced (d4)
 *   ielts-rb-ac-gorilla     — Psychology,  Section 2, standard  (d3)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acAntikythera: ReadingExercise = {
  slug: "ielts-rb-ac-antikythera",
  title: "The Antikythera mechanism",
  variant: "academic",
  section: 3,
  subject: "History",
  difficulty: 4,
  estimatedMinutes: 17,
  objective: "Follow the biography of an artefact: discovery by sponge divers, decades of speculation, radiography that revealed the gearing, and the astronomical cycles the dials computed.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "The Antikythera mechanism",
      paragraphs: [
        "At the turn of the twentieth century, a storm forced a crew of Greek sponge divers to shelter off the small island of Antikythera, between Crete and the mainland. When the sea calmed, one of the divers descended to the seabed and returned with reports of statues lying on the bottom. Over the following months, working at dangerous depths with the help of a navy ship, salvage crews recovered bronze and marble figures, glassware, coins and jewellery from what proved to be a merchant ship wrecked in antiquity.",
        "Among the finds was a shapeless lump of corroded bronze, a few hands wide, that attracted no particular attention until it began to dry and split apart in the museum. Through the broken crust, conservators saw the edges of gear wheels — teeth cut precisely in metal, wheels layered behind wheels. Nothing of the kind had ever been recovered from the ancient world: a machine, apparently, from an age of sailing ships and hand tools. Speculation began at once and ran for decades. A navigational instrument? An astrolabe? A child's toy? The object kept its silence while the pieces, more than eighty fragments in all, lay in a drawer.",
        "The silence broke in the middle of the century, when Derek de Solla Price, a historian of science, became convinced that the fragments were the remains of a geared astronomical calculator and set out to see inside them. In 1971, working with a Greek radiographer, Price arranged for the fragments to be X-rayed and gamma-radiographed. The plates revealed a compact gearbox: some thirty interlocking gear wheels, their teeth cut with a fineness that would not disgrace a modern instrument, along with plates covered in inscriptions.",
        "Reconstructions based on those images, and on sharper scans made decades later by international teams, explain what the machine computed. On the front, pointers for the Sun and Moon travelled around a dial marked with the twelve signs of the zodiac, against an outer ring calibrated to the Egyptian calendar of 365 days. A clever pin-and-slot arrangement between two of the gears reproduced the Moon's varying speed across the sky, a refinement astronomers once thought impossible for the period. On the back, two large spirals — one tracking the nineteen-year Metonic calendar cycle, the other the 223-lunar-month Saros cycle — allowed the user to read off past and future eclipses. All of this was driven by turning a single hand crank: the operator rotated the handle, and the whole sky swept forward or backward to a chosen date.",
        "The mechanism is generally dated to the second or first century BC, and its maker remains unknown. Some scholars trace its lineage to the workshops of Corinth and its colonies, in the tradition of the mathematician Archimedes, who was credited in antiquity with building a comparable device; others treat it as the work of a school whose other products are simply lost. Nothing in the inscriptions names an author — the texts are a manual, telling the user what each dial shows and how to read it, not who built the instrument.",
        "Whatever its pedigree, the mechanism stands alone in the archaeological record. Nothing comparably complex — compact, differential-grade gearwork driving a mechanical model of the sky — is known again until the astronomical clocks of medieval Europe, more than a thousand years later. Historians once read that gap as proof that the device was a one-off miracle; many now suspect the opposite, that it was the surviving member of a tradition whose other machines corroded away or were melted down.",
        "Research has not finished. Three-dimensional scanning of the fragments, begun in the 2000s, has recovered thousands of letters of inscription that radiography could not resolve, settling disputes about the dial layouts and hinting at features — a possible planetary display among them — that reconstructions are still trying to accommodate. The shipwreck, too, continues to yield finds to modern divers. A corroded shoebox of bronze has kept a century of researchers employed, and there is no sign that it intends to stop.",
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
        title: "The Antikythera mechanism — what the user saw",
        caption: "A reconstruction of the instrument's main features, from the radiographic and three-dimensional scans.",
        grid: [
          [
            { label: "Front dial", caption: "Sun and Moon pointers travel through the twelve signs of the —", blank: 1 },
            { label: "Calendar ring", caption: "an outer ring calibrated to the 365-day —", blank: 2 },
            null,
          ],
          [
            { label: "Lunar gearing", caption: "a clever — — between two gears reproduces the Moon's varying speed", blank: 3 },
            { label: "Drive", caption: "the whole display advanced by turning a single hand —", blank: 4 },
            { label: "Rear spirals", caption: "Metonic and Saros cycles for reading off eclipses" },
          ],
          [
            { label: "Inscriptions", caption: "a user's manual telling the owner what each dial shows" },
            null,
            null,
          ],
        ],
      },
      blanks: [
        {
          no: 1,
          answer: "zodiac",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "pointers for the Sun and Moon travelled around a dial marked with the twelve signs of the zodiac" }],
            explanation: "The front dial is marked with the twelve signs of the zodiac, paragraph D states directly. The diagram's front-dial blank asks for that band's name.",
          },
        },
        {
          no: 2,
          answer: "Egyptian",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "an outer ring calibrated to the Egyptian calendar of 365 days" }],
            explanation: "The outer ring is calibrated to the Egyptian calendar of 365 days — the adjective the calendar-ring blank needs. The 365-day figure printed on the diagram points straight to this clause.",
          },
        },
        {
          no: 3,
          answer: "pin-and-slot",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 3, quote: "A clever pin-and-slot arrangement between two of the gears reproduced the Moon's varying speed across the sky" }],
            explanation: "The gearing detail that reproduces the Moon's varying speed is named in paragraph D: a pin-and-slot arrangement. The hyphenated compound counts as one term and is glossed in the notes.",
          },
        },
        {
          no: 4,
          answer: "crank",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "All of this was driven by turning a single hand crank" }],
            explanation: "The drive is described in the same paragraph: everything was driven by turning a single hand crank. The diagram's drive cell wants the noun that completes 'a single hand ___'.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 5–8",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The wreck was found after divers took shelter from a storm.",
          answer: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "a storm forced a crew of Greek sponge divers to shelter off the small island of Antikythera" }],
            explanation: "Paragraph A opens with exactly this sequence: a storm forced the divers to shelter off Antikythera, and the discovery followed. The statement is a plain paraphrase of the discovery story.",
          },
        },
        {
          text: "The purpose of the mechanism was settled soon after the fragments were cleaned.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 1, quote: "Speculation began at once and ran for decades." }],
            explanation: "Paragraph B states that speculation ran for decades after the lump split open, and paragraph C dates the decisive radiography to 1971 — two generations after the find. 'Settled soon' contradicts that timeline.",
            trap: { family: "order", note: "The discovery and the explanation are separated by decades in the passage — timeline questions reward readers who track the dates." },
            whyWrong: ["TRUE: the passage explicitly says speculation ran for decades, and the decisive imaging came in 1971."],
          },
        },
        {
          text: "The mechanism reproduced the fact that the Moon moves across the sky at varying speed.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "A clever pin-and-slot arrangement between two of the gears reproduced the Moon's varying speed across the sky" }],
            explanation: "Paragraph D credits the pin-and-slot gearing with reproducing the Moon's varying speed. The statement restates that function without the technical label, so it agrees with the passage.",
          },
        },
        {
          text: "The inscriptions name the craftsman who built the instrument.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Nothing in the inscriptions names an author" }],
            explanation: "Paragraph E states the opposite in so many words: nothing in the inscriptions names an author — they form a user's manual, not a maker's signature. A located contradiction makes the statement FALSE.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "table-completion",
      label: "Questions 9–13",
      instruction: "Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "Discovery and study of the mechanism" }],
        [{ kind: "text", text: "Turn of the 20th century" }, { kind: "text", text: "divers salvage finds from a Roman-era" }, { kind: "blank", no: 9 }],
        [{ kind: "text", text: "Mid-century to 1971" }, { kind: "text", text: "Price's radiographs reveal the compact" }, { kind: "blank", no: 10 }],
        [{ kind: "text", text: "Second or first century BC" }, { kind: "text", text: "the period to which the mechanism is generally" }, { kind: "blank", no: 11 }],
        [{ kind: "text", text: "19 years" }, { kind: "text", text: "the Metonic cycle, displayed as one of the rear" }, { kind: "blank", no: 12 }],
        [{ kind: "text", text: "223 lunar months" }, { kind: "text", text: "the" }, { kind: "blank", no: 13 }, { kind: "text", text: "cycle, used for reading off eclipses" }],
      ],
      blanks: [
        {
          no: 9,
          answer: "shipwreck",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 0, quote: "salvage crews recovered bronze and marble figures, glassware, coins and jewellery from what proved to be a merchant ship wrecked in antiquity" }],
            explanation: "The salvage took place on a merchant ship wrecked in antiquity — the noun the table needs is shipwreck, which appears in paragraph G's 'The shipwreck, too, continues to yield finds'.",
          },
        },
        {
          no: 10,
          answer: "gearbox",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "The plates revealed a compact gearbox: some thirty interlocking gear wheels" }],
            explanation: "Paragraph C names what the radiographs revealed: a compact gearbox of some thirty interlocking wheels. The table's 1971 row quotes the sentence almost word for word.",
          },
        },
        {
          no: 11,
          answer: "dated",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "The mechanism is generally dated to the second or first century BC" }],
            explanation: "The dating sentence in paragraph E supplies the passive verb the table needs: the mechanism is generally dated to that period. The gap after 'generally' takes dated.",
          },
        },
        {
          no: 12,
          answer: "spirals",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "On the back, two large spirals — one tracking the nineteen-year Metonic calendar cycle" }],
            explanation: "Paragraph D describes the rear displays as two large spirals, one of which tracks the Metonic cycle. The table asks what kind of display carries the nineteen-year cycle.",
          },
        },
        {
          no: 13,
          answer: "Saros",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 3, quote: "the other the 223-lunar-month Saros cycle — allowed the user to read off past and future eclipses" }],
            explanation: "The eclipse cycle's name is given beside its length in paragraph D: the 223-lunar-month Saros cycle. The table keeps the length and the function, asking for the name.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "antiquity", partOfSpeech: "noun", definition: "the distant past, especially the period of the ancient Mediterranean civilisations; the ship was wrecked in antiquity." },
    { word: "conservators", partOfSpeech: "noun (plural)", definition: "museum specialists who clean, stabilise and preserve artefacts; they saw the first gear edges." },
    { word: "astrolabe", partOfSpeech: "noun", definition: "an ancient instrument for showing the positions of the stars and planets; one early but wrong guess about the mechanism." },
    { word: "radiographed", partOfSpeech: "verb (past)", definition: "examined with penetrating radiation such as X-rays or gamma rays to reveal the inside; the fragments were radiographed in 1971." },
    { word: "zodiac", partOfSpeech: "noun", definition: "the belt of twelve constellations the Sun and planets appear to pass through; the front dial is marked with its signs." },
    { word: "pedigree", partOfSpeech: "noun", definition: "a record of origins or ancestry; whatever its pedigree, the mechanism stands alone among finds." },
    { word: "corroded", partOfSpeech: "verb (past participle)", definition: "eaten away gradually by chemical action, as bronze is by seawater; other machines of the tradition corroded away entirely." },
  ],
  passageNote: "Every question hangs on the timeline: discovery (A), recognition (B), radiography (C), function (D), dating and origin (E), uniqueness (F), ongoing work (G). Track the dates as you read and half the answer locating is done for you.",
  source: READING_BANK_SOURCE_NOTE,
};

export const acGorilla: ReadingExercise = {
  slug: "ielts-rb-ac-gorilla",
  title: "The invisible gorilla",
  variant: "academic",
  section: 2,
  subject: "Psychology",
  difficulty: 3,
  estimatedMinutes: 15,
  objective: "Read a classic psychology finding and its consequences: why focused attention makes us miss the obvious, and what that means for memory, testimony and expertise.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "The invisible gorilla",
      paragraphs: [
        "The experiment takes less than two minutes to describe. Volunteers watch a short film of two teams passing basketballs — one team in white shirts, one in dark — and are given a single job: count the passes made by the players in white. Halfway through, a person in a gorilla suit walks into the middle of the game, turns to face the camera, thumps their chest, and strolls off. Afterwards, the researchers ask the question that made the study famous: did you see the gorilla? Roughly half of the viewers, intent on their counting, had no idea any such thing had happened.",
        "The result made the gorilla a byword, but the deeper finding was about attention itself. We experience seeing as a wide-angle recording: the eyes take in the room, the mind files it, and later we can consult the file. The experiment suggests instead that perception is closer to a spotlight with a very narrow beam. Whatever falls outside the beam of attention is, for practical purposes, not there — even when it is a chest-thumping ape in the centre of the frame.",
        "Psychologists call the effect inattentional blindness: the failure to perceive a fully visible, unexpected stimulus because attention is engaged elsewhere. It is one of a family of attention limits that also includes change blindness, in which viewers fail to notice when a detail of a scene is swapped between camera shots. Both effects are robust, easy to demonstrate, and deeply counter-intuitive — people are consistently bad at predicting how much they themselves will miss, which makes the limits feel, from the inside, impossible.",
        "The courtroom implications were the first to be spelled out. Eyewitnesses are, in effect, volunteers counting passes: their attention lands on the gun, the shout, the crash — and the surrounding scene falls outside the beam. Later, asked what they saw, they report with full sincerity and great confidence, and juries tend to believe them. Studies of wrongful convictions have repeatedly found confident, honest witnesses who were simply attending to the wrong thing.",
        "Everyday failures of the same machinery are easier to forgive. The driver who 'looked right at' the motorcyclist and pulled out anyway was not lying; the beam was on the cars, and the bike never entered it. The colleague who walks past you in the corridor while composing a text message is not being rude on purpose. Once the spotlight model is accepted, a remarkable number of everyday mysteries dissolve into ordinary physics of the mind.",
        "There is a brighter side to the narrow beam. Expertise, several studies suggest, is partly a matter of aiming the spotlight well: chess masters extract more from a single glance at a board because decades of practice have taught them which features deserve the beam. Attention, in other words, is not just a limitation to be worked around but the engine of skilled performance. The same selectivity that hides the gorilla lets the surgeon ignore everything but the field of view that matters.",
        "The researchers themselves, it should be said, have continued to complicate the picture. Later experiments varying the conditions found that noticing is not a fixed lottery: salient distractions, expectations and even the observer's mood shift the odds. But the headline has survived every replication: we see far less than we believe, and the first step towards honest perception is knowing it.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      label: "Questions 1–3",
      instruction: "Choose the correct letter, A, B, C or D.",
      items: [
        {
          stem: "The volunteers' task in the experiment was to",
          options: [
            "report anything unusual in the film",
            "count the passes made by one team",
            "describe the gorilla's behaviour",
            "compare the two teams' playing styles",
          ],
          correct: 1,
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "count the passes made by the players in white" }],
            explanation: "The opening paragraph assigns the volunteers one job: counting the passes made by the players in white shirts. Options mentioning the gorilla describe what the researchers asked about afterwards, not the task itself.",
            whyWrong: ["A: reporting the unusual is the opposite of the design — the counting task is what hid the gorilla.", "C: only viewers who noticed the gorilla could describe it, and half did not notice.", "D: playing styles are never mentioned."],
          },
        },
        {
          stem: "What did the researchers conclude about perception?",
          options: [
            "The eyes record everything the mind can later consult",
            "Attention works like a narrow spotlight",
            "Unexpected events are always noticed eventually",
            "People are good judges of what they themselves have missed",
          ],
          correct: 1,
          lure: 0,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "perception is closer to a spotlight with a very narrow beam" }],
            explanation: "Paragraph B replaces the wide-angle recording model with the spotlight model: perception is a narrow beam, and what falls outside it is practically not there. The first option quotes the folk model the paragraph rejects.",
            trap: { family: "mention-lure", note: "The wide-angle recording is described in the passage — as the wrong model the experiment disproved." },
            whyWrong: ["A: that is the intuitive model the experiment undermines.", "C: half the viewers never saw the gorilla at all.", "D: paragraph C says people are consistently bad at predicting how much they will miss."],
          },
        },
        {
          stem: "The writer's attitude towards the 'brighter side' of attention is",
          options: [
            "dismissive, because the costs outweigh the benefits",
            "cautiously positive, because selectivity also powers expertise",
            "enthusiastic, because training removes inattentional blindness",
            "neutral, because the research is still too new to judge",
          ],
          correct: 1,
          meta: {
            skills: ["opinion", "inference"],
            evidence: [{ block: 0, paragraph: 5, quote: "Attention, in other words, is not just a limitation to be worked around but the engine of skilled performance." }],
            explanation: "Paragraph F argues that the same selectivity that hides the gorilla powers the surgeon's focus — a genuine benefit, stated with care ('partly a matter of aiming the spotlight well'). The writer is positive but measured.",
            whyWrong: ["A: the paragraph opens by calling the brighter side real.", "C: no claim is made that training eliminates blindness — the final paragraph even says noticing shifts with conditions, not that it can be guaranteed.", "D: the writer draws a clear conclusion rather than suspending judgement."],
          },
        },
      ],
    },
    {
      id: "q2",
      type: "matching-sentence-endings",
      label: "Questions 4–7",
      instruction: "Complete each sentence with the correct ending, A–E, below. There are more endings than sentences, so you will not use them all.",
      extraOption: true,
      items: [
        {
          text: "The volunteers in the famous experiment were asked to",
          correct: 0,
          meta: {
            skills: ["detail", "structure"],
            evidence: [{ block: 0, paragraph: 0, quote: "count the passes made by the players in white" }],
            explanation: "The sentence beginning needs the infinitive completion that names the task: counting the passes of one team. Grammar and meaning both rule out the endings about gorillas and recordings.",
          },
        },
        {
          text: "Roughly half of the viewers failed to",
          correct: 1,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "Roughly half of the viewers, intent on their counting, had no idea any such thing had happened." }],
            explanation: "The gorilla walked through the middle of the game and half the viewers missed it entirely. The ending 'notice a person in a gorilla suit' completes the failed action.",
          },
        },
        {
          text: "The writer compares human attention to a",
          correct: 3,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "perception is closer to a spotlight with a very narrow beam" }],
            explanation: "The spotlight comparison is the passage's central image: attention as a narrow beam. Ending D — a filter admitting only a fraction — paraphrases the same idea, while the recording option is the model the writer rejects.",
          },
        },
        {
          text: "Eyewitnesses can be confident and sincere even when",
          correct: 4,
          meta: {
            skills: ["inference", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "they report with full sincerity and great confidence, and juries tend to believe them" }],
            explanation: "Paragraph D explains that witnesses attend to the gun, the shout, the crash — and miss what the question turns on. Their confidence survives the gap, which is what the ending completes.",
          },
        },
      ],
      options: [
        "count the passes made by one team of players.",
        "notice a person in a gorilla suit stroll through the action.",
        "record everything that happens in front of them.",
        "filter that admits only a fraction of what is out there.",
        "the witness has missed exactly what the case turns on.",
      ],
    },
    {
      id: "q3",
      type: "summary-completion",
      label: "Questions 8–10",
      instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Psychologists gave the gorilla finding its scientific name: inattentional 8" }, { kind: "blank", no: 8 }, { kind: "text", text: ". The effect is related to change blindness, in which a detail is 9" }, { kind: "blank", no: 9 }, { kind: "text", text: "between camera shots without the viewer noticing. Later work showed that noticing depends on conditions, but the 10" }, { kind: "blank", no: 10 }, { kind: "text", text: "finding — we see far less than we believe — has survived every replication." }],
      ],
      blanks: [
        {
          no: 8,
          answer: "blindness",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 2, quote: "Psychologists call the effect inattentional blindness" }],
            explanation: "The technical term is coined in paragraph C: inattentional blindness, the failure to perceive a fully visible stimulus when attention is engaged elsewhere. The summary keeps the adjective and asks for the noun.",
          },
        },
        {
          no: 9,
          answer: "swapped",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "change blindness, in which viewers fail to notice when a detail of a scene is swapped between camera shots" }],
            explanation: "Paragraph C defines change blindness with the verb swapped: a detail is swapped between camera shots and viewers fail to notice. The summary's passive gap takes the same verb.",
          },
        },
        {
          no: 10,
          answer: "headline",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 6, quote: "But the headline has survived every replication" }],
            explanation: "The final paragraph says the headline finding has survived every replication. The summary's final gap asks for the noun the passage pairs with 'finding' in that closing claim.",
          },
        },
      ],
    },
    {
      id: "q4",
      type: "true-false-not-given",
      label: "Questions 11–13",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The drivers described in paragraph E were aware of the motorcyclist before pulling out.",
          answer: "FALSE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "The driver who 'looked right at' the motorcyclist and pulled out anyway was not lying; the beam was on the cars, and the bike never entered it." }],
            explanation: "The paragraph's point is that the driver's eyes moved over the rider but the bike never entered the beam of attention — awareness of the motorcyclist is exactly what did not happen. The statement is therefore FALSE.",
          },
        },
        {
          text: "Chess masters perform better partly because they aim their attention more effectively.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "chess masters extract more from a single glance at a board because decades of practice have taught them which features deserve the beam" }],
            explanation: "Paragraph F attributes the masters' advantage to knowing which features deserve the attentional beam — aiming the spotlight well, as the statement paraphrases it. The passage presents this as the suggested explanation.",
          },
        },
        {
          text: "People who notice the gorilla tend to be more intelligent than people who do not.",
          answer: "NOT GIVEN",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 0, paragraph: 6, quote: "Later experiments varying the conditions found that noticing is not a fixed lottery: salient distractions, expectations and even the observer's mood shift the odds." }],
            explanation: "The passage lists what shifts the odds of noticing — conditions, expectations, mood — but never compares the intelligence of noticers and non-noticers. The statement is untested by the text.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "byword", partOfSpeech: "noun", definition: "a person or thing famous as the clearest example of something; the invisible gorilla became a byword for missed evidence." },
    { word: "stimulus", partOfSpeech: "noun", definition: "something that causes a reaction in a perceiving system; inattentional blindness is failure to perceive a fully visible, unexpected stimulus." },
    { word: "counter-intuitive", partOfSpeech: "adjective", definition: "opposite to what common sense would predict; the finding that people cannot predict their own misses is counter-intuitive." },
    { word: "replication", partOfSpeech: "noun", definition: "repeating an experiment to check its result; the headline finding survived every replication." },
    { word: "salient", partOfSpeech: "adjective", definition: "standing out and catching attention; salient distractions increase the chance of being noticed." },
    { word: "sincerity", partOfSpeech: "noun", definition: "honesty of belief; witnesses report with full sincerity even when their attention was elsewhere." },
    { word: "spotlight", partOfSpeech: "noun", definition: "the passage's central image for attention — a narrow beam that illuminates only part of the scene." },
  ],
  passageNote: "The argument builds in pairs: experiment and interpretation (A–B), naming the family of effects (C), consequences in courtrooms and daily life (D–E), the benefit of selectivity (F), and the refinements (G). Sentence-ending and summary questions both ride on those load-bearing nouns.",
  source: READING_BANK_SOURCE_NOTE,
};
