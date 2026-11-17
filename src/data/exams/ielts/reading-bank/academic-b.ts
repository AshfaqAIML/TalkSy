/**
 * Academic passage library B (PROMPT 45, Parts B and D).
 *
 *   ielts-rb-ac-reading-wars — Education,    Section 3, advanced (d4)
 *   ielts-rb-ac-beavers      — Environment,  Section 2, standard  (d3)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acReadingWars: ReadingExercise = {
  slug: "ielts-rb-ac-reading-wars",
  title: "The reading wars",
  variant: "academic",
  section: 3,
  subject: "Education",
  difficulty: 4,
  estimatedMinutes: 17,
  objective: "Track a contested argument through its evidence: two teaching philosophies, what research actually found, a compromise and its critics, and a conclusion about the cost of ideology.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "The reading wars",
      paragraphs: [
        "Children acquire spoken language with almost no explicit instruction: they listen, they babble, they imitate, and by school age most can hold a conversation. Reading is different. No child learns to decode print simply by being surrounded by it, because that ability is not part of our evolutionary inheritance. Every reader must be taught, and the question of exactly how has produced one of the longest-running arguments in education — one fought in faculties, in newspapers and, most expensively of all, in classrooms.",
        "One camp puts its faith in the code. English spelling represents the sounds of speech: letters and letter combinations stand for phonemes, and beginners who are taught these relationships explicitly — grapheme by grapheme, sound by sound — can then blend them into words. Advocates of phonics argue that this instruction should be systematic, following a planned sequence rather than depending on whatever words happen to appear in a story.",
        "The other camp puts its faith in meaning. Whole-language classrooms surround children with genuine, complete books from the first day, on the principle that reading grows naturally when it is purposeful. Decoding is treated as one cue among several: children are encouraged to guess unfamiliar words from pictures, from the story so far and from the shape of the word on the page, with accuracy expected to follow engagement.",
        "For decades each camp had its anecdote and its philosophy. What settled the argument, as far as it has been settled, was evidence: large comparative studies, and later syntheses of them, reported that systematic phonics instruction produced measurably stronger early word reading than the alternatives. The same body of work undermined a cherished belief about guessing: examination of readers' eye movements showed that skilled readers rarely guess from context at all. Guessing from context, it turned out, is what weak readers do — a symptom of difficulty, not a strategy that produces fluency.",
        "Schools tried to end the war with a compromise called balanced literacy, which promised the best of both: real books, and some phonics where needed. Critics replied that in practice the phonics was often thin and the cueing habits survived untouched, so the balance was mostly nominal. Whether a classroom is genuinely balanced, those critics argued, is decided by what the teacher does when a child is stuck on a word — teach the code, or invite a guess.",
        "Policy has oscillated with the fashion. Some education authorities mandated phonics screening for young children and funded retraining for teachers; others relaxed requirements again within a few years. Where systematic instruction was implemented seriously, with training and materials rather than slogans, improvements in early reading were reported — though how much of any gain survives the transition to reading for meaning remains debated. Teachers, meanwhile, pointed out that neither the screening nor the training came with extra hours, and that a method is only as good as the person delivering it.",
        "The fairest conclusion is blunt: the argument was never as even as its rhetoric suggested. The evidence favoured code-based beginnings decades before practice moved, and the delay was ideological rather than scientific. Its cost was not measured in research grants or conference speeches but in children who reached the middle years of school still unable to read the words in front of them. That, in the end, is what the reading wars were about.",
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
          text: "Spoken language normally develops without deliberate teaching.",
          answer: "YES",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Children acquire spoken language with almost no explicit instruction" }],
            explanation: "The opening paragraph presents spoken language as acquired through listening, babbling and imitation — with almost no explicit instruction. The writer presents this as background fact, so a statement paraphrasing it agrees with the passage.",
          },
        },
        {
          text: "The research evidence supports systematic phonics for early word reading.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "systematic phonics instruction produced measurably stronger early word reading than the alternatives" }],
            explanation: "Paragraph D reports the comparative findings approvingly and the final paragraph says the evidence favoured code-based beginnings decades before practice moved. The writer accepts the finding, so the statement is YES.",
          },
        },
        {
          text: "In the writer's view, skilled readers routinely guess unfamiliar words from context.",
          answer: "NO",
          lure: "NOT GIVEN",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "skilled readers rarely guess from context at all" }],
            explanation: "Paragraph D states the opposite: eye-movement evidence shows skilled readers rarely guess, and guessing is what weak readers do. The writer endorses this finding, so the statement contradicts the writer's view.",
            trap: { family: "boundary", note: "Guessing is discussed at length — but as a marker of weak reading, so the claim is contradicted, not absent." },
            whyWrong: ["NOT GIVEN: the passage does take a position — the eye-movement research and the writer's endorsement of it make the claim clearly contradicted."],
          },
        },
        {
          text: "The writer has taught reading in a primary school.",
          answer: "NOT GIVEN",
          lure: "NO",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 0, paragraph: 6, quote: "The fairest conclusion is blunt: the argument was never as even as its rhetoric suggested." }],
            explanation: "Nothing in the passage describes the writer's biography — classroom experience, research career or otherwise. A confident NO would import outside reasoning about who usually writes such articles; the text itself is silent.",
            trap: { family: "boundary", note: "The writer's expertise in the argument is easy to assume; assumptions never earn YES or NO." },
            whyWrong: ["NO: the passage never denies teaching experience either — biography is simply absent."],
          },
        },
        {
          text: "Ideology rather than evidence delayed changes in teaching practice.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 6, quote: "the delay was ideological rather than scientific" }],
            explanation: "The concluding paragraph names the delay as ideological rather than scientific, decades long, and costly for children. The statement restates that judgement, so it agrees with the writer.",
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
          text: "an explanation of how written symbols relate to spoken sounds",
          correct: 1,
          lure: 2,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "letters and letter combinations stand for phonemes, and beginners who are taught these relationships explicitly" }],
            explanation: "Paragraph B explains the code itself: letters and letter combinations (graphemes) stand for phonemes, and blending them produces words. That is the explanation the statement asks for.",
            trap: { family: "mention-lure", note: "Paragraph C mentions decoding too, but as one cue among several — it never explains the letter-sound mechanism." },
          },
        },
        {
          text: "findings from studies that compared teaching methods",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "large comparative studies, and later syntheses of them, reported that systematic phonics instruction produced measurably stronger early word reading" }],
            explanation: "Paragraph D is the evidence paragraph: comparative studies and their syntheses, plus the eye-movement findings. The statement's 'studies that compared' paraphrases 'comparative studies'.",
          },
        },
        {
          text: "a compromise and the criticism it attracted",
          correct: 4,
          meta: {
            skills: ["scanning", "structure"],
            evidence: [{ block: 0, paragraph: 4, quote: "Schools tried to end the war with a compromise called balanced literacy" }],
            explanation: "Paragraph E introduces balanced literacy as the compromise and immediately reports the critics' reply that the phonics was thin and the cueing survived. Both halves of the statement live there.",
          },
        },
        {
          text: "an assessment of what the long disagreement ultimately cost",
          correct: 6,
          meta: {
            skills: ["scanning", "inference"],
            evidence: [{ block: 0, paragraph: 6, quote: "Its cost was not measured in research grants or conference speeches but in children who reached the middle years of school still unable to read" }],
            explanation: "The final paragraph prices the delay: children reaching the middle years of school unable to read the words in front of them. The statement's 'what it cost' matches 'its cost'.",
          },
        },
      ],
      options: ["A", "B", "C", "D", "E", "F", "G"],
    },
    {
      id: "q3",
      type: "multiple-choice-multi",
      label: "Questions 10–11",
      instruction: "Which TWO of the following are described in the passage as features of whole-language classrooms? Choose TWO letters, A–E.",
      stem: "Which TWO of the following are described in the passage as features of whole-language classrooms?",
      options: [
        "immersion in genuine, complete books from the beginning",
        "daily explicit lessons in letter-sound relationships",
        "the use of pictures, storyline and word shape as cues",
        "government screening of young children's reading",
        "pupils blending sounds together to decode words",
      ],
      correct: [0, 2],
      lures: [1, 4],
      meta: {
        skills: ["detail", "paraphrase"],
        evidence: [
          { block: 0, paragraph: 2, quote: "Whole-language classrooms surround children with genuine, complete books from the first day" },
          { block: 0, paragraph: 2, quote: "children are encouraged to guess unfamiliar words from pictures, from the story so far and from the shape of the word on the page" },
        ],
        explanation: "Paragraph C names exactly two classroom features: children are surrounded by genuine complete books from the first day, and they are encouraged to guess using pictures, the story so far and word shape. Those are options A and C.",
        trap: { family: "attribution", note: "Options B and E describe the phonics camp's practice from paragraph B — right technique, wrong classroom." },
        whyWrong: [
          "B and E: systematic letter-sound lessons and blending belong to the phonics camp described in paragraph B, not to whole-language classrooms.",
          "D: screening is a policy response in paragraph F, not a classroom feature of either approach.",
        ],
      },
    },
    {
      id: "q4",
      type: "multiple-choice",
      label: "Questions 12–13",
      instruction: "Choose the correct letter, A, B, C or D.",
      items: [
        {
          stem: "In the final paragraph, the cost of the reading wars is said to be measured in",
          options: [
            "the public money spent on failed programmes",
            "children who were still unable to read years later",
            "the careers of teachers who left the profession",
            "the research time lost to arguing",
          ],
          correct: 1,
          lure: 3,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 6, quote: "Its cost was not measured in research grants or conference speeches but in children who reached the middle years of school still unable to read the words in front of them." }],
            explanation: "The final sentence names the true measure: children in the middle years of school still unable to read the words in front of them. The passage explicitly rejects research spending as the measure, which is the lure's ground.",
            trap: { family: "mention-lure", note: "Research grants and conference speeches appear in the sentence — as what the cost is NOT measured in." },
            whyWrong: ["A: public money on programmes is never mentioned as the cost.", "C: teachers leaving is not discussed anywhere in the passage.", "D: research grants and speeches are named only to be rejected as measures of the cost."],
          },
        },
        {
          stem: "What is the writer's overall purpose in the passage?",
          options: [
            "to describe how children acquire spoken language",
            "to argue that evidence should have changed teaching practice sooner",
            "to compare reading policies in two different countries",
            "to prove that balanced literacy has succeeded",
          ],
          correct: 1,
          meta: {
            skills: ["opinion", "structure"],
            evidence: [{ block: 0, paragraph: 6, quote: "The evidence favoured code-based beginnings decades before practice moved, and the delay was ideological rather than scientific." }],
            explanation: "The passage builds from the two camps through the evidence to a verdict: the evidence favoured code-based beginnings decades before practice moved, and the delay was ideological. The organising purpose is that argument about lost time.",
            whyWrong: ["A: spoken language appears only as the opening contrast.", "C: no countries are compared; policy is described generically.", "D: balanced literacy's critics are reported without rebuttal, and the conclusion does not endorse it."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "decode", partOfSpeech: "verb", definition: "to turn written symbols into spoken words; children must be taught to decode print, unlike speech." },
    { word: "phonemes", partOfSpeech: "noun (plural)", definition: "the smallest units of sound in a language that distinguish one word from another; letters stand for phonemes." },
    { word: "grapheme", partOfSpeech: "noun", definition: "a letter or letter combination representing one phoneme, such as 'sh'; phonics teaches grapheme-sound relationships explicitly." },
    { word: "anecdote", partOfSpeech: "noun", definition: "a personal story used as evidence; for decades each camp argued from anecdotes rather than studies." },
    { word: "syntheses", partOfSpeech: "noun (plural)", definition: "combined analyses of many separate studies; syntheses reported the advantage of systematic phonics." },
    { word: "cueing", partOfSpeech: "noun", definition: "the practice of prompting a reader with cues — pictures, storyline, word shape; critics said it survived balanced literacy." },
    { word: "oscillated", partOfSpeech: "verb (past)", definition: "swung back and forth between positions; policy oscillated with educational fashion." },
  ],
  passageNote: "The passage argues in layers: description (B, C), evidence (D), compromise (E), policy (F), verdict (G). Verdict questions (Yes/No/Not Given) test paragraph G's claims; location questions test the layers.",
  source: READING_BANK_SOURCE_NOTE,
};

export const acBeavers: ReadingExercise = {
  slug: "ielts-rb-ac-beavers",
  title: "Re-wilding the rivers",
  variant: "academic",
  section: 2,
  subject: "Environment",
  difficulty: 3,
  estimatedMinutes: 15,
  objective: "Read a re-wilding case study: what beavers did to rivers, what the trial measured, who objected and why, and the regulatory question their return raises.",
  intro: "Read the passage below and answer Questions 1–13.",
  blocks: [
    {
      heading: "Re-wilding the rivers",
      paragraphs: [
        "For millions of years, European rivers were shaped by an animal that no longer lives in most of them. Beavers built dams across streams, creating networks of ponds and wetlands that stored water, trapped sediment and sheltered fish, birds and insects. By the sixteenth century, hunting for fur and for castoreum — a gland oil once prized as medicine — had exterminated the beaver from Britain, and its absence came to look, to generations of landowners, like the natural order.",
        "Reintroduction began cautiously. Licensed releases in Scotland were followed by a trial on an English river, where a family of escaped beavers was permitted to stay and be studied rather than removed. The animals spread along the watercourse, damming as they went, and public enthusiasm ran ahead of official policy: riverside cameras became minor television attractions, and schoolchildren learned the names of individual animals.",
        "A beaver's dam is not a wall but a filter. Built of branches, stones and mud, it slows the current enough that water spreads sideways into shallow ponds fringed by reeds. Because the structure leaks constantly, the pond behind it rises and falls gently rather than flashing from flood to flood. Hydrologists describe the effect as attenuation: the flood peak arriving downstream is lower and later than it would have been without the dam.",
        "Measurements from the English trial were striking. Ponds created by the beavers held back hundreds of thousands of litres in storm weather; sediment and agricultural nutrients settled out of the slow water instead of travelling to the sea; and counts around the wetlands recorded rising numbers of amphibians, dragonflies and breeding birds. Water leaving the ponds ran clearer and cooler than the water entering them. Fish passed the dams through gaps and over the crest in all but the driest weeks, and juvenile trout grew faster in the warmer, food-rich ponds than in the bare main channel.",
        "Not everyone celebrated. Some farmers watched drainage ditches back up and seedlings drown; others reported burrows undermining field banks and farm tracks. Angling groups worried that dams would block the upstream migration of salmon. Mitigation proved possible — flow devices fitted through problem dams, and the licensed removal of animals that persisted in the wrong place — but each remedy cost money and goodwill, and the arguments over who should pay were never purely ecological.",
        "The regulatory machinery, meanwhile, creaked under a question it was never designed for: is a returning native a wild animal to be protected or a liability to be managed? Government agencies granted and revoked licences, sometimes within the same year, while conservationists argued that the species' engineering benefits whole catchments and objectors replied that the benefits arrive on other people's land. The beaver's future in Britain now depends less on the animal's behaviour than on whether its neighbours can agree on a rulebook.",
        "Other countries offer working previews of that rulebook. On parts of the European mainland, where beavers were never fully lost or returned earlier, landowners are compensated for verified damage, and problem dams are modified before animals are ever moved. The lesson drawn by many observers is unromantic: coexistence is an administrative achievement, not a mood. Rivers will be re-engineered either way — the only open question is whether the engineers are given a licence, a compensation scheme, or a trap.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-features",
      label: "Questions 1–5",
      instruction: "Look at the following findings and opinions and the list of groups below. Match each statement with the group connected with it. You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "Dams lower and delay the flood peak arriving downstream.",
          correct: 0,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "Hydrologists describe the effect as attenuation: the flood peak arriving downstream is lower and later than it would have been without the dam." }],
            explanation: "The flood-peak finding belongs to the hydrologists — the specialists who measure water movement — quoted in paragraph C. Flood scientists is the plain-English label for that group.",
          },
        },
        {
          text: "Dams may prevent salmon from migrating upstream.",
          correct: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Angling groups worried that dams would block the upstream migration of salmon." }],
            explanation: "Paragraph E attributes the salmon worry directly to angling groups. Matching features is attribution work: find who holds the view, not just where the topic appears.",
          },
        },
        {
          text: "Licences for keeping or removing the animals have been granted and withdrawn.",
          correct: 2,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 5, quote: "Government agencies granted and revoked licences, sometimes within the same year" }],
            explanation: "The licensing activity sits with government agencies in paragraph F — the regulators. The trial trust and farmers appear nearby, so attribution discipline (who grants licences?) decides the letter.",
          },
        },
        {
          text: "Counts showed rising numbers of amphibians, dragonflies and breeding birds.",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "counts around the wetlands recorded rising numbers of amphibians, dragonflies and breeding birds" }],
            explanation: "The wildlife counts came from the measurements taken on the English trial — the conservation trust's project. The statement moves the finding to plain words, but its owner stays the organisation that ran the study.",
          },
        },
        {
          text: "Burrows have weakened field banks, and ditches have flooded young crops.",
          correct: 4,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "Some farmers watched drainage ditches back up and seedlings drown; others reported burrows undermining field banks and farm tracks." }],
            explanation: "Paragraph E gives the damage reports to farmers: backed-up ditches, drowned seedlings and undermined banks. Landowners is the matching label for the group making these reports.",
          },
        },
      ],
      options: [
        "Flood scientists",
        "Angling groups",
        "Government regulators",
        "The conservation trust running the trial",
        "Farmers and landowners",
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 6–9",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Demand for castoreum was one reason beavers were hunted in Britain.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "vocabulary"],
            evidence: [{ block: 0, paragraph: 0, quote: "hunting for fur and for castoreum — a gland oil once prized as medicine — had exterminated the beaver from Britain" }],
            explanation: "Paragraph A lists two hunting motives, fur and castoreum, so the statement's 'one reason' is directly supported. The glossary carries castoreum because the word is exactly the kind of unknown noun a definition helps with.",
          },
        },
        {
          text: "A beaver dam completely stops the flow of water along a stream.",
          answer: "FALSE",
          lure: "NOT GIVEN",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 2, quote: "Because the structure leaks constantly, the pond behind it rises and falls gently" }],
            explanation: "Paragraph C says the opposite of a complete stop: the dam is a filter that leaks constantly, and water keeps passing through gaps and over the crest (paragraph D). A located contradiction makes the statement FALSE.",
            trap: { family: "extreme-language", note: "'Completely' is the trap word — the passage's dam slows and leaks, it never seals." },
            whyWrong: ["NOT GIVEN: the passage does describe the dam's behaviour, and that description contradicts 'completely stops'."],
          },
        },
        {
          text: "All farmers opposed the return of beavers.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 4, quote: "Some farmers watched drainage ditches back up and seedlings drown" }],
            explanation: "Paragraph E reports that some farmers raised damage — 'some', not all. The statement's 'all' outruns the text, and the passage itself shows opposition was divided by interest, not universal.",
            trap: { family: "extreme-language", note: "All/every/never statements must be checked against the passage's quantifier — here 'some'." },
            whyWrong: ["TRUE: the paragraph's own word is 'some farmers', which rules out 'all'."],
          },
        },
        {
          text: "The beavers in the English trial were deliberately released by the researchers.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 1, quote: "a family of escaped beavers was permitted to stay and be studied rather than removed" }],
            explanation: "Paragraph B says the English animals had escaped and were then allowed to stay — the researchers permitted and studied, they did not release. The Scottish releases were licensed, but the trial family arrived on its own.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "flowchart-completion",
      label: "Questions 10–13",
      instruction: "Complete the flow-chart below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Beavers build dams of branches, stones and" }, { kind: "blank", no: 10 }],
        [{ kind: "text", text: "The dam slows the current, and water spreads into shallow ponds fringed by reeds." }],
        [{ kind: "text", text: "Because the dam leaks, the pond rises and falls gently — the flood peak downstream is lower and later, an effect hydrologists call" }, { kind: "blank", no: 11 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "Sediment and agricultural" }, { kind: "blank", no: 12 }, { kind: "text", text: "settle out of the slow water instead of reaching the sea." }],
        [{ kind: "text", text: "Fish pass the dams through gaps and over the" }, { kind: "blank", no: 13 }, { kind: "text", text: "of each structure." }],
      ],
      blanks: [
        {
          no: 10,
          answer: "mud",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "Built of branches, stones and mud, it slows the current" }],
            explanation: "The dam's materials are listed in paragraph C: branches, stones and mud. The flowchart keeps two of the three, so the missing material is mud.",
          },
        },
        {
          no: 11,
          answer: "attenuation",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 2, quote: "Hydrologists describe the effect as attenuation" }],
            explanation: "The technical term for the lower, later flood peak is attenuation, named in paragraph C and defined in the glossary. A one-word gap after 'hydrologists call' asks for exactly that term.",
          },
        },
        {
          no: 12,
          answer: "nutrients",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "sediment and agricultural nutrients settled out of the slow water instead of travelling to the sea" }],
            explanation: "Paragraph D pairs sediment with agricultural nutrients as the two things that settle out. The flowchart keeps 'sediment' and asks for its partner.",
          },
        },
        {
          no: 13,
          answer: "crest",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 3, quote: "Fish passed the dams through gaps and over the crest in all but the driest weeks" }],
            explanation: "Fish passage happens two ways: through gaps and over the crest. The flowchart supplies the gaps and asks for the second route, both words carried by the glossary-adjacent sentence in paragraph D.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "castoreum", partOfSpeech: "noun", definition: "an oily substance from a beaver's scent glands, once used in medicine and perfume; hunting for it helped exterminate the British beaver." },
    { word: "exterminated", partOfSpeech: "verb (past)", definition: "killed off entirely in a place; beavers were exterminated from Britain by the sixteenth century." },
    { word: "fringed", partOfSpeech: "verb (past participle)", definition: "bordered along the edge; beaver ponds are fringed by reeds." },
    { word: "attenuation", partOfSpeech: "noun", definition: "the weakening or slowing of a force as it passes through something; dams attenuate floods, making the downstream peak lower and later." },
    { word: "hydrologists", partOfSpeech: "noun (plural)", definition: "scientists who study water movement through rivers and land; they named the attenuation effect." },
    { word: "mitigation", partOfSpeech: "noun", definition: "actions that reduce the harm of something; flow devices through problem dams are one mitigation." },
    { word: "catchments", partOfSpeech: "noun (plural)", definition: "the areas of land drained by a river system; conservationists argue beavers benefit whole catchments." },
  ],
  passageNote: "A stakeholder passage: each paragraph advances one interest group's relationship to the animal. Feature-matching questions ride on the attribution; the flowchart rides on paragraph C and D's process description.",
  source: READING_BANK_SOURCE_NOTE,
};
