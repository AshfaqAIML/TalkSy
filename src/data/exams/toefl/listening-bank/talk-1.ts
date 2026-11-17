/**
 * TOEFL Listening Practice Library — Listen to an Academic Talk, batch 1
 * (PROMPT 49). Difficulty 1: five clearly signposted mini-lectures. The
 * talks follow the family style — signposts, examples, emphasis and a
 * concluding claim — at gentle pace.
 *
 * All scripts are original TalkSy practice material; established knowledge
 * only, with uncertainty stated as uncertainty.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const talk1Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-talk-01", title: "Why cities are hotter", taskType: "academic-talk",
    scene: "first-year environmental lecture", difficulty: 1, estimatedMinutes: 6,
    intro: "You will hear part of a lecture on urban climate. Answer the questions about the content.",
    speakers: [{ id: "pr", name: "Professor", role: "lecturer in environmental science", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "pr", text: "Walk out of an air-conditioned building on a summer evening and the city often feels several degrees warmer than the countryside you passed on the way in. This is not imagination." },
      { id: "s2", speakerId: "pr", text: "For more than two centuries, observers have measured cities running consistently hotter than the fields around them, and the effect earned a name over a hundred years ago: the urban heat island." },
      { id: "s3", speakerId: "pr", text: "The causes are built into the fabric of the city. Concrete and brick absorb the sun's energy all day and release it slowly after sunset, while vegetation spends that same energy evaporating water, which leaves the surface cooler." },
      { id: "s4", speakerId: "pr", text: "Narrow streets lined with tall buildings trap the radiated warmth between their walls, and every engine and air conditioner adds waste heat of its own. The result is strongest in dense central districts and weakest in leafy suburbs." },
      { id: "s5", speakerId: "pr", text: "Here is the detail I want you to remember, because it is counter-intuitive: the temperature gap typically reaches its maximum not at midday but a few hours after dark, because the stored heat keeps leaving the walls all night." },
      { id: "s6", speakerId: "pr", text: "The consequences reach beyond discomfort. Hotter city air speeds the reactions that produce ground-level smog, and nighttime warming may do the deepest damage, since bodies recover from hot days only if nights cool." },
      { id: "s7", speakerId: "pr", text: "The fixes are ordinary: painting dark roofs white keeps surfaces measurably cooler, and a mature street tree cools the air beneath it by transpiring water and casting shade. Some planners go further, converting old railway lines into linear parks." },
      { id: "s8", speakerId: "pr", text: "So the concluding claim: none of these measures erases the heat island, but together they narrow the gap between the city and the fields — and as summers grow hotter everywhere, the value of that difference keeps rising." },
    ],
    transcriptNote: "The lecture's structure: phenomenon, causes, the counter-intuitive timing, consequences, remedies, closing claim. The emphasised detail is the post-sunset maximum.",
    targetSkill: "academic-listening",
    questions: [
      {
        no: 1, stem: "What is the lecture mainly about?",
        options: ["Air-conditioning technology", "The urban heat island: why cities run hotter than the countryside, and what narrows the gap", "Building materials", "Weather forecasting"],
        correct: 1,
        meta: { skills: ["academic-listening", "main-ideas"], keywords: ["urban heat island", "narrow the gap"], explanation: "The whole talk serves one phenomenon and its remedies. The item checks the topic as framed by the opening and closing." },
      },
      {
        no: 2, stem: "Why do concrete and brick make cities hotter, according to the lecture?",
        options: ["They reflect all sunlight", "They absorb the sun's energy by day and release it slowly after sunset", "They are white", "They burn"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["absorb the sun's energy all day and release it slowly after "], explanation: "The materials store then re-radiate heat. The item checks the mechanism as stated in the causes paragraph. Listen for \u201cabsorb the sun's energy all day and release it slowly after \u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What does vegetation do with the same energy?",
        options: ["Stores it deeper", "Spends it evaporating water, leaving the surface cooler", "Reflects it into space", "Conducts it away"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["vegetation spends that same energy evaporating water, which "], explanation: "Evaporation is the plants' alternative. The item checks the contrast the lecture draws in one sentence. Answer anchored in the recording: \u201cvegetation spends that same energy evaporating water, which \u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What counter-intuitive detail does the professor emphasise?",
        options: ["The gap peaks at midday", "The temperature gap typically peaks a few hours after dark, as walls keep releasing stored heat", "Cities cool faster than fields", "The effect vanishes at night"],
        correct: 1,
        meta: { skills: ["details", "comprehension"], keywords: ["reaches its maximum not at midday but a few hours after dark"], explanation: "The emphasised fact is the post-sunset peak. The item checks the detail the professor flags as the one to remember." },
      },
      {
        no: 5, stem: "Why does night-time warming do the deepest damage?",
        options: ["Nights are noisier", "Bodies recover from hot days only if nights cool", "Smog is worse then", "Buildings open"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["bodies recover from hot days only if nights cool"], explanation: "The health mechanism is failed night-time recovery. The item checks the reason attached to the consequence. The audible clue is \u201cbodies recover from hot days only if nights cool\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 6, stem: "What does the concluding claim assert about the fixes?",
        options: ["They erase the heat island", "None erases it, but together they narrow the gap — and the value of the difference keeps rising", "They only work in suburbs", "They cost too much"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["none of these measures erases the heat island, but together "], explanation: "The closing claim is deliberately modest and cumulative. The item checks it as worded, including the rising-value point. Listen for \u201cnone of these measures erases the heat island, but together \u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-talk-02", title: "How plants make food from air", taskType: "academic-talk",
    scene: "school biology lecture", difficulty: 1, estimatedMinutes: 6,
    intro: "You will hear part of a lecture on photosynthesis. Answer the questions about the content.",
    speakers: [{ id: "pr", name: "Professor", role: "lecturer in plant biology", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "pr", text: "Today's question sounds impossible: where does the mass of a tree come from? A mature oak is tonnes of wood, and the answer is that almost all of it was carbon dioxide in the air." },
      { id: "s2", speakerId: "pr", text: "The process is photosynthesis, and it runs in two linked stages inside the green parts of the plant." },
      { id: "s3", speakerId: "pr", text: "In the first stage, light is captured and its energy splits water, releasing oxygen as a by-product. That oxygen, by the way, is where the oxygen in this room came from, accumulated over billions of years." },
      { id: "s4", speakerId: "pr", text: "In the second stage, the energy carriers from stage one fix carbon dioxide into sugars. Those sugars become everything: fuel, structure, and the starting point of nearly every food chain on land." },
      { id: "s5", speakerId: "pr", text: "Now the design point I want you to carry away. Leaves are structured like solar farms: broad surfaces angled toward light, pores that let carbon dioxide in, and internal plumbing that brings water up from the roots." },
      { id: "s6", speakerId: "pr", text: "The same pores that let carbon in let water out, and the plant manages this trade by widening or narrowing them, so a leaf is always balancing two budgets at once." },
      { id: "s7", speakerId: "pr", text: "A striking number to close the lecture: a mature tree moves a very large volume of water over a season, and almost all of it simply passes through and evaporates. The fraction split chemically is small; the throughput is enormous." },
      { id: "s8", speakerId: "pr", text: "So the summary sentence for your notes: plants build their bodies from the sky, pay for the construction with water, and release the waste product that every animal in this room is breathing." },
    ],
    transcriptNote: "The lecture carries one emphasised design point (leaves as solar farms balancing two budgets) and one striking closing number (water throughput).",
    targetSkill: "academic-listening",
    questions: [
      {
        no: 1, stem: "Where does almost all the mass of a tree come from?",
        options: ["The soil", "Carbon dioxide in the air", "Water alone", "Fertiliser"],
        correct: 1,
        meta: { skills: ["academic-listening", "details"], keywords: ["almost all of it was carbon dioxide in the air"], explanation: "The opening states the counter-intuitive thesis. The item checks it, since the whole lecture elaborates this claim. Answer anchored in the recording: \u201calmost all of it was carbon dioxide in the air\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "What is released as a by-product of the first stage?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Sugar"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["splits water, releasing oxygen as a by-product"], explanation: "Water splitting releases oxygen. The item checks the by-product and its stage. The audible clue is \u201csplits water, releasing oxygen as a by-product\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "What happens in the second stage?",
        options: ["Water is split", "Energy carriers fix carbon dioxide into sugars", "Leaves fall", "Roots grow"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the energy carriers from stage one fix carbon dioxide into s"], explanation: "Stage two is carbon fixation. The item checks the division of labour between stages. Listen for \u201cthe energy carriers from stage one fix carbon dioxide into s\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "How are leaves described, and what are the pores doing?",
        options: ["Like sponges, absorbing everything", "Like solar farms — surfaces angled to light, pores letting carbon in while managing the water that escapes", "Like pipes, sealed", "Like roofs, closed"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["leaves are structured like solar farms", "the same pores that let carbon in let water out"], explanation: "The emphasised design point is solar-farm structure with a two-budget trade. The item checks the metaphor and the trade together." },
      },
      {
        no: 5, stem: "What striking number closes the lecture?",
        options: ["Trees split most of the water they move", "A tree moves a very large volume of water over a season, almost all passing through and evaporating", "Leaves live one day", "Photosynthesis stops at noon"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["moves a very large volume of water over a season", "simply passes through and evaporates"], explanation: "The contrast is tiny fraction used chemically versus enormous throughput. The item checks the number's shape, not just its size." },
      },
      {
        no: 6, stem: "What is the summary sentence for notes?",
        options: ["Plants eat soil", "Plants build their bodies from the sky, pay with water, and release the waste product every animal breathes", "Trees grow at night", "Water is food"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["build their bodies from the sky, pay for the construction wi"], explanation: "The closing sentence compresses the lecture into three clauses. The item checks the compression as delivered. Answer anchored in the recording: \u201cbuild their bodies from the sky, pay for the construction wi\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-talk-03", title: "The invention of the printing press", taskType: "academic-talk",
    scene: "history survey lecture", difficulty: 1, estimatedMinutes: 6,
    intro: "You will hear part of a lecture on printing. Answer the questions about the content.",
    speakers: [{ id: "pr", name: "Professor", role: "lecturer in history", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "pr", text: "Before printing, a book cost roughly what a house costs a worker today. Copyists in monasteries produced perhaps two manuscripts a year, so a library of a hundred volumes was a princely treasury." },
      { id: "s2", speakerId: "pr", text: "The press changed the economics of the page. Within fifty years, printed workshops had spread through two hundred European cities and millions of books were in circulation." },
      { id: "s3", speakerId: "pr", text: "The change I want to stress today is not quantity but correction. Errors that copyists had reproduced faithfully for centuries could now be fixed in one edition and stay fixed in every copy after it." },
      { id: "s4", speakerId: "pr", text: "A second effect followed quietly: scholars could cite exact pages, because every copy of an edition had the same pages. Disagreement became a conversation carried on in print, with the participants able to check each other's references." },
      { id: "s5", speakerId: "pr", text: "Think about what that does to authority. When any reader can compare the same passage in the same place in two copies, the argument shifts from who owns the book to what the book says." },
      { id: "s6", speakerId: "pr", text: "There is a favourite example of mine from the period: the printer's colophon, the note at the end recording who printed the book, where, and when — the first time in history that ordinary information carried its own birth certificate." },
      { id: "s7", speakerId: "pr", text: "Within a century the price of ideas had detached from the price of sheepskin, and reading had stopped being a profession. The scribes did not disappear; they became editors, correcting proofs instead of copying texts." },
      { id: "s8", speakerId: "pr", text: "So the concluding claim: the press did not mainly make books cheaper; it made them identical, and identical is what made them checkable, and checkable is what made argument about them productive." },
    ],
    transcriptNote: "The lecture's thesis is qualitative, not quantitative: correction and sameness, then citability. The colophon example carries the birth-certificate point.",
    targetSkill: "academic-listening",
    questions: [
      {
        no: 1, stem: "What is stressed as the most important change?",
        options: ["The number of books", "Correction: errors fixed in one edition stay fixed in every copy", "The speed of presses", "The weight of volumes"],
        correct: 1,
        meta: { skills: ["academic-listening", "details"], keywords: ["not quantity but correction"], explanation: "The professor marks the pivot explicitly. The item checks the stressed change, not the obvious one. The audible clue is \u201cnot quantity but correction\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What could scholars newly do, and why?",
        options: ["Read faster", "Cite exact pages, because every copy of an edition had the same pages", "Own more books", "Travel less"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["scholars could cite exact pages, because every copy of an ed"], explanation: "Sameness enables citation. The item checks the new capability and its cause together. Listen for \u201cscholars could cite exact pages, because every copy of an ed\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What does the professor say happens to authority?",
        options: ["It strengthens", "The argument shifts from who owns the book to what the book says", "It disappears entirely", "It moves to kings"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the argument shifts from who owns the book to what the book "], explanation: "Authority relocates from possession to content. The item checks the shift as formulated. Answer anchored in the recording: \u201cthe argument shifts from who owns the book to what the book \u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What is a colophon?",
        options: ["A decoration", "The note at the end recording who printed the book, where and when — information carrying its own birth certificate", "An index", "A binding"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the printer's colophon, the note at the end recording who pr"], explanation: "The term is glossed in the lecture. The item checks the gloss, including the birth-certificate image. The audible clue is \u201cthe printer's colophon, the note at the end recording who pr\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What became of the scribes?",
        options: ["They vanished", "They became editors, correcting proofs instead of copying texts", "They printed books", "They taught"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["they became editors, correcting proofs instead of copying te"], explanation: "The profession transformed rather than died. The item checks the conversion as stated. Listen for \u201cthey became editors, correcting proofs instead of copying te\u201d — that phrase in the script settles the item." },
      },
      {
        no: 6, stem: "What is the concluding claim?",
        options: ["The press made books cheaper", "The press made books identical; identical made them checkable; checkable made argument about them productive", "Printing ended copying", "Books became art"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["it made them identical, and identical is what made them chec"], explanation: "The final sentence chains three clauses. The item checks the chain, which is the lecture's thesis. Answer anchored in the recording: \u201cit made them identical, and identical is what made them chec\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-talk-04", title: "Sleep and the sorting brain", taskType: "academic-talk",
    scene: "introduction to neuroscience lecture", difficulty: 1, estimatedMinutes: 6,
    intro: "You will hear part of a lecture on sleep. Answer the questions about the content.",
    speakers: [{ id: "pr", name: "Professor", role: "lecturer in neuroscience", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "pr", text: "A question to open: why do all animals with nervous systems sleep, given that sleeping looks like the most dangerous thing an animal can afford to do?" },
      { id: "s2", speakerId: "pr", text: "Part of the answer is that sleep is not a pause. During deep sleep the brain replays the day's learning at compressed speed, and this replay is not decoration." },
      { id: "s3", speakerId: "pr", text: "Neurons that fired together while you practised fire again while you sleep, strengthening the connections between them. Practice during the day is a deposit; sleep is the bank that keeps it." },
      { id: "s4", speakerId: "pr", text: "Here is the experiment I want you to remember. Two groups learned the same finger sequence; the group allowed to sleep improved significantly more than the group kept awake, with the same hours away from the task." },
      { id: "s5", speakerId: "pr", text: "And the effect extends to insight: volunteers puzzling over a hidden rule were about twice as likely to spot it after eight hours of sleep." },
      { id: "s6", speakerId: "pr", text: "The practical lesson follows directly, and it is uncomfortable: revision that costs sleep is not revision. The night is part of the work, and the exam rewards the sleeper as much as the swotter." },
      { id: "s7", speakerId: "pr", text: "A note of honesty before I close: nobody fully understands the machinery. But the direction of the evidence is consistent — sleep is functional, and treating it as optional is a modern error with ancient consequences." },
      { id: "s8", speakerId: "pr", text: "So the sentence for your notes: the brain that sleeps is not the brain resting; it is the brain filing, and the filing is what makes the next day's finding possible." },
    ],
    transcriptNote: "The structure: question, mechanism, the two-group experiment, insight finding, uncomfortable lesson, honest caveat, closing compression.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What happens during deep sleep, according to the lecture?",
        options: ["Nothing happens", "The brain replays the day's learning at compressed speed, and the replay strengthens connections", "Memories are erased", "The brain cools"],
        correct: 1,
        meta: { skills: ["academic-listening", "details"], keywords: ["replays the day's learning at compressed speed"], explanation: "Replay is the mechanism. The item checks both the replay and its effect in one answer. The audible clue is \u201creplays the day's learning at compressed speed\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "In the finger-sequence experiment, what was found?",
        options: ["Both groups improved equally", "The group allowed to sleep improved significantly more, with the same hours away from the task", "Neither improved", "Awake groups improved more"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the group allowed to sleep improved significantly more than "], explanation: "The control is equal time away; the difference is sleep. The item checks the finding with its fairness condition. Listen for \u201cthe group allowed to sleep improved significantly more than \u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What happened with the hidden-rule puzzle?",
        options: ["Sleep made no difference", "Volunteers were about twice as likely to spot the rule after eight hours of sleep", "The puzzle was withdrawn", "Awake volunteers solved it first"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["about twice as likely to spot it after eight hours of sleep"], explanation: "The insight finding doubles after sleep. The item checks the effect size as stated. Answer anchored in the recording: \u201cabout twice as likely to spot it after eight hours of sleep\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What is the uncomfortable practical lesson?",
        options: ["Revise all night", "Revision that costs sleep is not revision — the night is part of the work", "Sleep before learning only", "Naps are useless"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["revision that costs sleep is not revision"], explanation: "The lesson converts the finding into advice. The item checks the aphorism as delivered. The audible clue is \u201crevision that costs sleep is not revision\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What note of honesty does the professor add?",
        options: ["The results are fabricated", "Nobody fully understands the machinery, though the evidence's direction is consistent", "The experiments were never repeated", "Sleep research is ending"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["nobody fully understands the machinery"], explanation: "The caveat is stated plainly before the close. The item checks the honest boundary of the claim. Listen for \u201cnobody fully understands the machinery\u201d — that phrase in the script settles the item." },
      },
      {
        no: 6, stem: "What is the closing sentence for notes?",
        options: ["Sleep is rest", "The sleeping brain is filing, and the filing makes the next day's finding possible", "Sleep is optional", "Brains shut down at night"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the brain filing, and the filing is what makes the next day'"], explanation: "The compression reframes sleep as activity. The item checks the final formulation. Answer anchored in the recording: \u201cthe brain filing, and the filing is what makes the next day'\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-talk-05", title: "Maps that lie to help you", taskType: "academic-talk",
    scene: "cartography survey lecture", difficulty: 1, estimatedMinutes: 6,
    intro: "You will hear part of a lecture on map design. Answer the questions about the content.",
    speakers: [{ id: "pr", name: "Professor", role: "lecturer in cartography", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "pr", text: "Every map is a lie, and the art is choosing which lies help. A map that showed everything at true scale would be the territory itself, which fits in no pocket and answers no question." },
      { id: "s2", speakerId: "pr", text: "So cartographers simplify on purpose. Roads become wider than they are; small towns appear while smaller ones vanish; hills shrink or grow depending on whether the map's job is driving or hiking." },
      { id: "s3", speakerId: "pr", text: "The interesting cases are the distortions nobody announces. On almost every world map, Europe is larger than truth allows and the tropics smaller, because most projections stretch the poles." },
      { id: "s4", speakerId: "pr", text: "A comparison worth carrying: on a common world map, Greenland looks about the size of Africa. On the globe, Africa is roughly fourteen times larger — and generations have grown up with the wrong picture by default." },
      { id: "s5", speakerId: "pr", text: "Now the design principle I want you to keep. A good map lies for a purpose it declares: a subway map abandons distance entirely, and because everyone knows it does, nobody is misled." },
      { id: "s6", speakerId: "pr", text: "The rule, put plainly: distortion is acceptable when the reader knows the kind of distortion being used, and unacceptable when the reader assumes truth." },
      { id: "s7", speakerId: "pr", text: "This is why mapmakers publish their projections in the small print — the projection is the terms and conditions of the map, and reading them is the difference between using a map and being used by one." },
      { id: "s8", speakerId: "pr", text: "So the closing claim for your notes: maps are arguments about what matters, drawn at the scale of what matters to the mapmaker — and the first skill of a map reader is asking whose question the map was built to answer." },
    ],
    transcriptNote: "The lecture's spine: purposeful lying, the Greenland-Africa comparison, then the declared-distortion rule and the projection as terms and conditions.",
    targetSkill: "academic-listening",
    questions: [
      {
        no: 1, stem: "Why must every map lie?",
        options: ["Cartographers are careless", "A map showing everything at true scale would be the territory itself, which answers no question", "Paper is too glossy", "All maps are old"],
        correct: 1,
        meta: { skills: ["academic-listening", "comprehension"], keywords: ["A map that showed everything at true scale would be the terr"], explanation: "The opening premise is the impossibility of total truth. The item checks the premise as stated. The audible clue is \u201cA map that showed everything at true scale would be the terr\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What happens to Europe and the tropics on most world maps?",
        options: ["They are accurate", "Europe is larger than truth allows, the tropics smaller, because projections stretch the poles", "Europe is omitted", "The tropics are enlarged"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["Europe is larger than truth allows and the tropics smaller, "], explanation: "The systematic distortion is named with its cause. The item checks both halves. Listen for \u201cEurope is larger than truth allows and the tropics smaller, \u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What comparison does the professor ask students to carry?",
        options: ["London and Paris", "Greenland looks about the size of Africa on common maps; on the globe Africa is roughly fourteen times larger", "Asia and Europe", "Two atlases"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["Africa is roughly fourteen times larger"], explanation: "The comparison carries a number. The item checks the pair and the ratio as stated. Answer anchored in the recording: \u201cAfrica is roughly fourteen times larger\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What is the design principle the professor wants kept?",
        options: ["Distortion is always wrong", "Distortion is acceptable when the reader knows the kind of distortion being used, and unacceptable when the reader assumes truth", "All maps should be globes", "Colours matter most"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["distortion is acceptable when the reader knows the kind of d"], explanation: "The rule is about declared distortion. The item checks the principle as the lecture's centrepiece. The audible clue is \u201cdistortion is acceptable when the reader knows the kind of d\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "Why do mapmakers publish projections in the small print?",
        options: ["Tradition", "The projection is the map's terms and conditions, separating using a map from being used by one", "Legal requirement only", "To fill space"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["the projection is the terms and conditions of the map"], explanation: "The projection is the honesty clause. The item checks the metaphor and its purpose. Listen for \u201cthe projection is the terms and conditions of the map\u201d — that phrase in the script settles the item." },
      },
      {
        no: 6, stem: "What is the closing claim?",
        options: ["Maps are neutral", "Maps are arguments about what matters, drawn at the scale of what matters to the mapmaker — and the first skill is asking whose question the map answers", "Maps should be beautiful", "Globes are better"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["maps are arguments about what matters"], explanation: "The final sentence reframes maps as arguments. The item checks the claim as worded, including the reader's first skill. Answer anchored in the recording: \u201cmaps are arguments about what matters\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
