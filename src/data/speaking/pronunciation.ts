/**
 * Pronunciation practice — word stress, sound differences (minimal pairs),
 * sentence rhythm and intonation. Model audio is synthesised on-device from
 * `targetText`; the transcript match is an honest intelligibility signal
 * (what a recogniser heard), never a phoneme-level accuracy claim.
 */

import type { PronunciationItem } from "./types";

export const pronunciationItems: PronunciationItem[] = [
  // ---------------------------------------------------------------------------
  // Word stress
  // ---------------------------------------------------------------------------
  {
    id: "pron-stress-photograph",
    category: "stress",
    title: "PHO-to-graph family",
    explanation:
      "One word family, three stress maps. Say each form slowly — the stressed syllable must clearly land louder and longer.",
    targetText: "photograph, photography, photographic",
    visualCue: "PHO-to-graph · pho-TO-gra-phy · pho-to-GRAPH-ic",
    tip: "Stress moves as the word grows. Record all three in one take and listen for the moving beat.",
  },
  {
    id: "pron-stress-record",
    category: "stress",
    title: "RE-cord vs re-CORD",
    explanation:
      "Many two-syllable pairs shift stress between noun and verb. Noun: first syllable. Verb: second syllable.",
    targetText: "a record, to record, a present, to present",
    visualCue: "RE-cord (n.) · re-CORD (v.) · PRE-sent (n.) · pre-SENT (v.)",
    tip: "Say 'I got a RE-cord' then 'I will re-CORD it' back to back — feel the jump.",
  },
  {
    id: "pron-stress-banana",
    category: "stress",
    title: "Three-syllable rhythm",
    explanation:
      "English words usually stress exactly one syllable. Under-stressing makes words hard to recognise even when every sound is right.",
    targetText: "banana, tomorrow, important, computer",
    visualCue: "ba-NA-na · to-MOR-row · im-POR-tant · com-PU-ter",
    tip: "Clap on the capital syllable, whisper the others. Then say it naturally.",
  },
  {
    id: "pron-stress-numbers",
    category: "stress",
    title: "THIRteen vs thirTEEN disasters",
    explanation:
      "Compound numbers stress the first part; the '-teen' numbers stress the end. Mixing them up causes classic confusions (thirteen/thirty).",
    targetText: "thirteen, thirty, fourteen, forty",
    visualCue: "thir-TEEN · THIR-ty · four-TEEN · FOR-ty",
    tip: "Stretch the stressed vowel: 'thir-TEEEEEN' vs 'THIIIR-ty'.",
  },
  {
    id: "pron-stress-schwa",
    category: "stress",
    title: "The disappearing schwa",
    explanation:
      "Unstressed syllables often reduce to the schwa (ə) — the laziest sound in English. Stress survives, the rest relaxes.",
    targetText: "chocolate, comfortable, vegetable, family",
    visualCue: "CHOC-lət · COMF-tə-bəl · VEJ-tə-bəl · FAM-lee",
    tip: "Do not pronounce every vowel spelling. 'Chocolate' has three syllables at most.",
  },
  {
    id: "pron-stress-suffix",
    category: "stress",
    title: "The -graph, -ic and -ity patterns",
    explanation:
      "Some suffixes pull stress onto the syllable right before them (-ic, -ity), others push it earlier. Patterns beat memorising.",
    targetText: "economy, economic, economy, electric, electricity",
    visualCue: "e-CON-o-my · e-co-NOM-ic · e-lec-TRIC · e-lec-TRI-ci-ty",
    tip: "The suffix '-ic' and '-ity' always stress the syllable just before them.",
  },
  {
    id: "pron-stress-phrases",
    category: "stress",
    title: "Stress carries meaning",
    explanation:
      "In phrases, one word carries the news. 'A BIG house' vs 'a big HOUSE' answer different questions.",
    targetText: "It was a big house. It was a big house.",
    visualCue: "it was a BIG house (size is the news) · it was a big HOUSE (thing is the news)",
    tip: "Say the sentence twice, changing only which word rings. The recogniser check uses the words — your ears do the rest.",
  },

  // ---------------------------------------------------------------------------
  // Sound differences (minimal pairs)
  // ---------------------------------------------------------------------------
  {
    id: "pron-sound-ship-sheep",
    category: "sounds",
    title: "/ɪ/ vs /iː/ — ship & sheep",
    explanation:
      "Short /ɪ/ is quick and relaxed; long /iː/ stretches and tenses. Say both words — the recogniser check shows which one it heard.",
    targetText: "ship, sheep, sit, seat, live, leave",
    visualCue: "ship ✂ sheep · sit ✂ seat · live ✂ leave",
    tip: "For /iː/ smile slightly and hold the sound twice as long.",
    minimalPairs: [
      { word: "ship / sheep", meaning: "boat / animal", contrast: "short & relaxed vs long & tense" },
      { word: "live / leave", meaning: "reside / depart", contrast: "'I live here' vs 'I leave now'" },
    ],
  },
  {
    id: "pron-sound-th",
    category: "sounds",
    title: "/θ/ & /ð/ — think & this",
    explanation:
      "Both 'th' sounds need the tongue tip lightly between the teeth. /θ/ is voiceless (think), /ð/ voiced (this).",
    targetText: "think, this, three, mother, birthday, weather",
    visualCue: "θ = airy (think) · ð = buzzing (this)",
    tip: "Watch in a mirror: if your tongue never shows, you are saying /s/ or /d/.",
    minimalPairs: [
      { word: "think / sink", meaning: "consider / drain", contrast: "tongue out vs tongue in" },
      { word: "they / day", meaning: "people / date word", contrast: "buzzing th vs d" },
    ],
  },
  {
    id: "pron-sound-vw",
    category: "sounds",
    title: "/v/ vs /w/ — vine & wine",
    explanation:
      "/v/ touches top teeth to bottom lip; /w/ rounds both lips and never touches teeth.",
    targetText: "vine, wine, very, well, vest, west",
    visualCue: "v = teeth on lip · w = rounded lips",
    tip: "Overdo it: bite your lip for every v, kiss the air for every w.",
    minimalPairs: [
      { word: "vest / west", meaning: "clothing / direction", contrast: "lip-bite vs lip-round" },
      { word: "veil / whale", meaning: "cloth / animal", contrast: "the classic v/w test" },
    ],
  },
  {
    id: "pron-sound-lr",
    category: "sounds",
    title: "/l/ vs /r/ — light & right",
    explanation:
      "/l/ lets air past the tongue tip on the ridge; /r/ curls the tongue back with the tip touching nothing.",
    targetText: "light, right, collect, correct, play, pray",
    visualCue: "l = tongue up on ridge · r = tongue curled back",
    tip: "For /r/, the tongue tip must not touch the roof of the mouth.",
    minimalPairs: [
      { word: "light / right", meaning: "lamp / correct", contrast: "tongue on vs tongue back" },
      { word: "collect / correct", meaning: "gather / fix", contrast: "same position difference mid-word" },
    ],
  },
  {
    id: "pron-sound-bp",
    category: "sounds",
    title: "/b/ vs /p/ — voice on vs off",
    explanation:
      "Same mouth position: /b/ uses voice from the first millisecond, /p/ starts silent with a little puff of air.",
    targetText: "bear, pear, cap, cab, rope, robe",
    visualCue: "b = voice (neck buzzes) · p = puff (hold a tissue, it moves)",
    tip: "Put two fingers on your throat: buzz = b, no buzz = p.",
    minimalPairs: [
      { word: "cap / cab", meaning: "hat / taxi", contrast: "final puff vs final buzz" },
      { word: "rope / robe", meaning: "string / clothing", contrast: "final consonant changes the word" },
    ],
  },
  {
    id: "pron-sound-final-s",
    category: "sounds",
    title: "Final -s: /s/, /z/ or /ɪz/",
    explanation:
      "Plural and verb endings have three pronunciations. After voiceless sounds it is /s/ (books), after voiced /z/ (dogs), after sibilants an extra vowel appears (/ɪz/ — buses).",
    targetText: "books, dogs, buses, works, plays, watches",
    visualCue: "books /s/ · dogs /z/ · buses /ɪz/",
    tip: "Decide by the sound before the -s, not the spelling.",
    minimalPairs: [
      { word: "book / books", meaning: "one / many", contrast: "final /s/ has no voice" },
      { word: "bus / buses", meaning: "one / many", contrast: "the extra little vowel /ɪz/" },
    ],
  },
  {
    id: "pron-sound-ed",
    category: "sounds",
    title: "Past -ed: /t/, /d/ or /ɪd/",
    explanation:
      "The past ending also has three faces: /t/ after voiceless (worked), /d/ after voiced (played), /ɪd/ only after t or d (wanted).",
    targetText: "worked, played, wanted, stopped, cleaned, needed",
    visualCue: "worked /t/ · played /d/ · wanted /ɪd/",
    tip: "'Good' and 'bad' endings never add a vowel. Only t/d-endings do.",
  },
  {
    id: "pron-sound-hdropping",
    category: "sounds",
    title: "/h/ — the honest consonant",
    explanation:
      "English /h/ is just breath — no scratch in the throat. It disappears entirely in weak pronouns (him, her, them) but stays strong at the start of stressed words.",
    targetText: "he, him, her, hello, hear, hand",
    visualCue: "strong: Hello, HAND · weak: give 'em, tell 'er",
    tip: "Say 'Give it to her' fast — the h vanishes. Say 'HER book' — it returns.",
  },

  // ---------------------------------------------------------------------------
  // Sentence rhythm
  // ---------------------------------------------------------------------------
  {
    id: "pron-rhythm-content",
    category: "rhythm",
    title: "Content words ring",
    explanation:
      "English is stress-timed: nouns, verbs, adjectives and adverbs are stressed; articles, prepositions and pronouns shrink.",
    targetText: "The CAT sat ON the MAT.",
    visualCue: "the CAT · sat · on · the MAT (CAPS = long, lowercase = fast)",
    tip: "Record it twice: once robot-flat, once with the beat. Hear the difference.",
  },
  {
    id: "pron-rhythm-weak-forms",
    category: "rhythm",
    title: "Weak forms keep the beat",
    explanation:
      "'Can', 'for', 'to', 'and' reduce to almost nothing in connected speech: 'fish and chips' becomes 'fish 'n' chips'.",
    targetText: "I want to go to the bank, and I can do it for you.",
    visualCue: "I WAN-na GO · to · the BANK · n · I CAN do it · fer · you",
    tip: "Do not pronounce weak words fully — it breaks the rhythm and slows you down.",
  },
  {
    id: "pron-rhythm-linking",
    category: "rhythm",
    title: "Linking: words melt together",
    explanation:
      "Consonant-to-vowel linking is the signature of natural English: 'an apple' becomes 'a-napple'.",
    targetText: "This is an easy exercise.",
    visualCue: "thi-SI-sa-NEA-sy-EX-er-cise",
    tip: "Try saying the whole sentence as one long word with only four beats.",
  },
  {
    id: "pron-rhythm-contrast",
    category: "rhythm",
    title: "Rhythm changes meaning",
    explanation:
      "The same words, different beat, different message. Stress marks what is new.",
    targetText: "I didn't say she stole my money.",
    visualCue: "I didn't SAY it · I didn't say SHE did · she didn't STEAL it",
    tip: "Say the sentence three times, stressing say, she and stole. Three different accusations!",
  },
  {
    id: "pron-rhythm-pace",
    category: "rhythm",
    title: "Pace: neither sprint nor crawl",
    explanation:
      "A comfortable speaking pace is about 120–150 words per minute. Pauses at punctuation are free fluency.",
    targetText: "I usually work from home, but on Tuesdays, I go to the office, which takes about forty minutes.",
    visualCue: "steady beat · pause at commas · longer pause at the full stop",
    tip: "Aim to land exactly on the commas — pausing IS fluency.",
  },

  // ---------------------------------------------------------------------------
  // Intonation
  // ---------------------------------------------------------------------------
  {
    id: "pron-int-questions",
    category: "intonation",
    title: "Rising for yes/no, falling for wh-",
    explanation:
      "Yes/no questions rise at the end; wh- questions (what, where, why) fall. Statement intonation on a question sounds cold or uncertain.",
    targetText: "Are you ready? What time is it? Do you like it? Where do you live?",
    visualCue: "Are you ready? ↗ · What time is it? ↘",
    tip: "Exaggerate the arrows first; natural comes later.",
  },
  {
    id: "pron-int-lists",
    category: "intonation",
    title: "List intonation: rise, rise, fall",
    explanation:
      "Lists rise on every item except the last, which falls — the signal that the list is finished.",
    targetText: "I need eggs, milk, bread, and coffee.",
    visualCue: "eggs ↗ milk ↗ bread ↗ and coffee ↘",
    tip: "The last fall is the period. Without it you sound unfinished.",
  },
  {
    id: "pron-int-choices",
    category: "intonation",
    title: "Choice questions: or splits the tune",
    explanation:
      "'Tea or coffee?' rises before 'or' and falls after it — two melodies in one question.",
    targetText: "Would you like tea or coffee? Are we meeting today or tomorrow?",
    visualCue: "tea ↗ or coffee ↘",
    tip: "Same rise-fall shape on any choice question.",
  },
  {
    id: "pron-int-emotion",
    category: "intonation",
    title: "Emotion lives in the tune",
    explanation:
      "The words 'That's great' can be delight, disappointment or sarcasm — the melody decides. Record one sentence, three feelings.",
    targetText: "That's great. That's great. That's great.",
    visualCue: "delight ↑high · disappointment ↓low · surprise big-then-small",
    tip: "Record all three deliveries in one take; play them back and label which is which.",
  },
  {
    id: "pron-int-tag",
    category: "intonation",
    title: "Question tags: checking vs confirming",
    explanation:
      "A rising tag really asks ('You're coming, aren't you? ↗'). A falling tag expects agreement ('It's cold, isn't it? ↘').",
    targetText: "You're coming, aren't you? It's cold today, isn't it?",
    visualCue: "aren't you? ↗ (real question) · isn't it? ↘ (expecting yes)",
    tip: "Decide your intention FIRST, then let the melody follow.",
  },
  {
    id: "pron-int-contrast",
    category: "intonation",
    title: "Falling tunes sound confident",
    explanation:
      "Statements and commands fall at the end. A rising statement sounds unsure — useful when you mean it, costly when you don't.",
    targetText: "I finished the report. Send me the file. We need to talk.",
    visualCue: "report ↘ · file ↘ · talk ↘",
    tip: "Practice ending every statement with a clear fall — it reads as competence.",
  },
];
