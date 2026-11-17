/**
 * Chapter 6A — Pronunciation (Part A).
 *
 * The first five lessons of the Speaking Masterclass pronunciation chapter:
 * individual sounds, word stress, sentence stress, intonation and connected
 * speech. The stance throughout is accent-neutral: any national accent can
 * reach the top of the criterion when the speaker is easy to understand, and
 * every drill targets intelligibility rather than imitation. All practice
 * material is original, and every band reference reads as an estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingPronunciationLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-sounds",
    title: "Individual sounds",
    description:
      "The small set of sound contrasts that most often decide whether an examiner follows you — think/sink, ship/sheep, vet/wet and swallowed endings — plus the honest rule that your accent itself is never the problem.",
    objectives: [
      "produce the five contrast pairs that most often block understanding across language backgrounds",
      "keep word endings audible instead of letting them vanish at speed",
      "explain why intelligibility, not a particular national accent, is what the criterion scores",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "The pronunciation criterion is the most misunderstood line in the band scale, because candidates assume it measures how close you sound to a British or American speaker. It measures nothing of the kind. What it rewards is being easy to follow, and a very small number of sound contrasts do most of that work. This lesson isolates those contrasts, drills them in pairs, and clears the accent myth out of the way before anything else.",
        beforeYouStart: [
          "You have met the four Speaking criteria and the shape of all three parts in the foundations chapter.",
          "You can record and replay your own voice on your phone — the whole chapter is built on that habit.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Parts 1, 2 and 3, plus Listening, where the same contrasts separate one answer word from another"],
          ["Task & question types", "Part 1 everyday answers, the Part 2 long turn and Part 3 discussion — any moment where a single word carries the meaning"],
          ["What is assessed", "Pronunciation — whether your individual sounds and word endings let the examiner identify words without effort"],
          ["Why this matters", "A collapsed contrast turns one word into a different one, and the examiner can only score the word they actually heard"],
        ],
      },
      { type: "heading", text: "Component 1 — The accent myth, cleared away first" },
      {
        type: "text",
        text: "Begin with the sentence this whole chapter stands on: an Indian, Nigerian, Brazilian, Chinese or Spanish accent — or any other accent on earth — can sit at the very top of the pronunciation scale, provided the speaker is easy to understand. Examiners are trained to reward intelligibility, never imitation: the published descriptors talk about stress, intonation and the way words connect, and they never mention a target country's vowels. What actually costs marks is a contrast that collapses. When think arrives as sink, the sentence the examiner heard is not the sentence you meant, and their attention goes to repair work instead of your ideas. Everything in this lesson is therefore about contrasts, not about replacing your accent with someone else's.",
      },
      { type: "heading", text: "Component 2 — Five contrasts that change words" },
      {
        type: "text",
        text: "Most of your first language transfers into English without any problem at all, and interferes in only a handful of places. The contrasts below are the ones that most often turn one English word into a different English word. Learn them as pairs rather than as isolated sounds: the ear learns a difference faster than it learns a sound, because a pair gives it something to compare against. Phonetic symbols appear here only as labels — the plain-language mouth descriptions carry the real teaching, and plenty of speakers reach the top of the criterion without ever reading a symbol.",
      },
      {
        type: "table",
        title: "The five contrast pairs, in plain language",
        headers: ["Contrast", "What your mouth does", "Where it goes wrong", "Words that ride on it"],
        rows: [
          ["think vs sink (θ vs s)", "For the first, rest the tongue tip lightly between the teeth and push air out; for the second, keep the tongue behind the teeth", "The tongue retreats behind the teeth, so every think lands as sink", "think, three, path, birthday"],
          ["ship vs sheep (ɪ vs iː)", "The first is short and relaxed with the jaw slightly open; the second is long and tense with the lips spread wide", "Both vowels get the same length, so live and leave quietly trade places", "ship, live, full, cheap"],
          ["vet vs wet (v vs w)", "For v, touch the top teeth to the lower lip and let the voice buzz; for w, round both lips and never touch the teeth", "The v loses its tooth contact and drifts into w", "vet, vine, verse, video"],
          ["final consonants", "Give the last consonant of a word its full moment before the next word starts", "The ending is clipped off, so cost becomes cos and world becomes worl", "cost, worked, worlds, stopped"],
          ["the -ed ending", "A quiet t after quiet sounds, a d after voiced sounds, and a small extra syllable after t and d", "Every -ed is pronounced the same way, or dropped entirely", "walked, played, wanted, decided"],
        ],
      },
      {
        type: "audio",
        label: "Listen: the think/sink contrast, slowly",
        mode: "tts",
        text: "think — sink — think. three — free — three. path — pass — path.",
        rate: 0.8,
      },
      {
        type: "audio",
        label: "Listen: short and long vowels side by side",
        mode: "tts",
        text: "ship — sheep — ship. live — leave — live. full — fool — full.",
        rate: 0.8,
      },
      {
        type: "steps",
        title: "The minimal-pair training loop",
        intro: "Four passes, ten minutes a day, one pair at a time.",
        steps: [
          {
            title: "Step 1: Hear and judge",
            text: "Play one of the pair audios and say aloud which member you heard — sheep or ship, think or sink. Score yourself out of ten. Your ear must notice the difference before your mouth can produce it reliably, and isolated pairs remove the context that normally rescues you in real conversation.",
            examples: [
              { english: "The audio says sheep; you answer sheep and mark a tally — no guessing from the sentence around it.", note: "Judgement without context is the purest test of whether the contrast exists for your ear." },
            ],
          },
          {
            title: "Step 2: Shape and exaggerate",
            text: "Say the pair with the contrast made as wide as your mouth allows: tongue far between the teeth, vowel held twice its normal length, teeth firmly on the lip. Exaggeration is scaffolding, not the final product — it builds the muscle memory that natural pace will later soften.",
          },
          {
            title: "Step 3: Drop the word into a sentence",
            text: "Alternate the two words three times each, then place one of them inside a sentence from a real Part 1 topic. A word you have only ever said alone will disappear again under test pressure, because speed is where old habits ambush new sounds.",
            examples: [
              { english: "Pair practised: ship and sheep. Carrier sentence: 'Last summer I took a long trip on a sheep — corrected to ship — with my cousins.'", note: "The correction moment is the lesson: notice how the wrong vowel changes the animal." },
            ],
          },
          {
            title: "Step 4: Record, replay, fix one thing",
            text: "Record the carrier sentence, play it back against the model audio, and choose exactly one thing to repair on the next take. One fix per recording keeps the feedback honest and the loop finishable in ten minutes; a list of five fixes is a list you will abandon by Thursday.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: three -ed endings in one breath",
        mode: "tts",
        text: "walked, played, wanted. I walked to the market, played a match, and wanted some rest.",
        rate: 0.85,
      },
      { type: "heading", text: "Component 3 — Triage: fix only what changes meaning" },
      {
        type: "text",
        text: "You do not have time to rebuild your entire sound system before test day, and you do not need to. Sort your habits into two piles. The first pile holds contrasts that create a different English word: think as sink, ship as sheep, vet as wet, endings that vanish and take the tense or the plural with them. The second pile holds habits that merely mark where you grew up: a rolled r, a darker l, a slightly different quality in vowels that never confuses one word with another. The first pile is worth hours of drilling; the second pile is your accent, and no descriptor asks you to remove it. Ten minutes a day on three pairs for a fortnight changes more than a month of vague pronunciation practice — and every band claim anywhere in this chapter is an estimate, never a promise.",
      },
      {
        type: "example",
        title: "The contrasts inside real answers — seven moments",
        items: [
          { english: "Part 1: 'I usually walk by the river, because it helps me think.' — delivered with the tongue tip visibly between the teeth on think.", note: "One careful consonant is all that keeps think from landing as sink.", domain: "exam" },
          { english: "Part 2, describing a memorable teacher: 'She was strict, but every student liked her classes.' — the final d of liked given its full moment.", note: "The past tense lives or dies at the word ending; like her quietly moves the story to the present.", domain: "exam" },
          { english: "A candidate says 'I have lived here for ten years' with the short, relaxed vowel, and the examiner hears leave — rescued only by the surrounding words.", note: "Context often saves the meaning, but the criterion listens to the sound itself.", domain: "exam" },
          { english: "Ordering at a café: 'a large hot chocolate, please' — where a swallowed t turns hot into a word the barista does not serve.", note: "Final consonants matter most exactly where the next word is arriving fast.", domain: "life" },
          { english: "A client call: 'we'll review the vine figures on Friday' — where a v that lost its teeth contact sends the wrong product line.", note: "The vet/wet pair is invisible in writing and expensive in speech.", domain: "work" },
          { english: "A learner drills ship and sheep for ten minutes each morning for a week, then notices the long vowel arriving on its own in a practice mock.", note: "Short daily contrast work beats one long weekend session, every time.", domain: "study" },
          { english: "Telling a friend 'I watched three films last night' with both endings intact: watched with its quiet t, three with air between the teeth.", note: "Two endings, two contrasts, one sentence that a stranger can follow at speed.", domain: "life" },
        ],
      },
      {
        type: "mistakes",
        title: "Sound-level mistakes corrected",
        items: [
          { wrong: "'I sink it's a good idea.' — the meaning word think arriving as sink.", right: "'I think it's a good idea.' — tongue tip resting lightly between the teeth for the very first sound.", reason: "The examiner hears a verb that fits nowhere in the sentence and must work backwards to guess your word — effort the criterion is designed to notice." },
          { wrong: "'Yesterday I visit the old town.' — the -ed of visited swallowed at speed.", right: "'Yesterday I visited the old town.' — the ending adding its small extra syllable after the t and the d.", reason: "Endings carry grammar: without them the listener repairs your timeline while you speak, and repair work is precisely the effort being measured." },
          { wrong: "'One day I want to leave this city.' — said with the short vowel, so the sentence sounds like the opposite wish.", right: "'One day I want to leave this city.' — the long, tense vowel of leave held noticeably longer than ship's vowel.", reason: "Vowel length is what the ear keys on for this pair; holding the long vowel makes the contrast safe even inside a strong accent." },
        ],
      },
      {
        type: "four-skills",
        title: "One Part 1 answer, sound-proofed",
        reading: {
          text: "Material written in the style of the test. A Part 1 question asks: 'Do you enjoy cooking?' A candidate answers: 'Yes, I cook almost every evening. I usually make soup with vegetables, because it's cheap and I think it tastes better than restaurant food. Last week I cooked a big dinner for my family and they liked it.' Hidden inside the answer are four meaning-carrying contrasts: the think-word, the long vowel of cheap, the -ed endings of cooked and liked, and the final consonant of soup.",
          task: "Underline the four places where a collapsed contrast would change or hide a word, and name the pair at each place.",
        },
        writing: {
          task: "Write the answer out once, marking your own danger spots in capitals (TH, the long vowel of cheap, the -ed endings, the final sound of soup). Then add three lines of practice plan saying which pair you would drill first, and why that pair earns the first fortnight.",
          guide: [
            "Mark the think-word: I THINK it tastes better.",
            "Mark the long vowel and the endings: chEEP, cookED, likED.",
            "Rank the pairs by how often they appear across Part 1 topics.",
            "Name your first drill pair and the daily ten-minute slot you will give it.",
          ],
          model: "Marked copy: 'Yes — I really do cook almost every evening. I usually make soUP with vegetables, because it's chEEP and I THINK it tastes better than restaurant food. Last week I cookED a big dinner for my family and they likED it.' Drill order: the think pair first, because th-words surface in almost every Part 1 answer; the -ed pair second, because past forms carry the timeline of every story question; the long vowel third, because cheap and taste return constantly in food and money topics.",
        },
        listening: {
          script: "Tutor: Play your recording back and listen for one thing at a time. First pass: endings only. Did cooked keep its t? Did liked finish with the same quiet t and no extra syllable? Second pass: th-words only. Did think come through with air between your teeth? Third pass: the long vowel of cheap. One pair per pass — a recording listened to three times, once per contrast, is worth ten unfocused replays.",
          task: "List the three things the tutor asks the candidate to check, and say why one pass per contrast beats general listening.",
        },
        speaking: {
          task: "Read the four sentences aloud twice: once slowly with every contrast exaggerated, once at your normal test speed. Record both passes and compare them.",
          frames: [
            "Slow pass: 'I THINK it tastes better…'",
            "Test-speed pass: 'Last week I cookED a big dinner…'",
            "Self-report: 'The pair that survived best at speed was … because …'",
          ],
          checklist: [
            "Did think keep its tongue-between-teeth start in both passes?",
            "Did cooked and liked land their endings at full speed?",
            "Did cheap keep its long vowel when the sentence sped up?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Intelligibility first", "It targets the handful of contrasts that turn one English word into another, which is exactly what decides whether the examiner identifies your words without effort."],
          ["Accent kept, contrast added", "The speaker keeps their own vowels and rhythm everywhere else, so the answer still sounds like a person rather than a performance of someone else."],
          ["Muscle before speed", "Exaggeration first and natural pace second gives the mouth a path from clumsy to comfortable, instead of a single impossible leap on test day."],
          ["Evidence over feeling", "Recording and one fix per replay turns practice into a loop the learner can feel improving, which is what keeps the daily ten minutes alive for a fortnight."],
          ["Descriptor alignment", "Every drill maps onto the published language of the criterion — easy to follow, words identifiable — rather than onto resembling a newsreader from one particular country."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "List your three personal danger pairs from your last recording and write them at the top of your practice page, where your eyes will fall before every take."],
          ["While the clock runs", "Give meaning words their full sounds — the th of think, the long vowel of leave, the final consonant of worked — and take the speed out of the small words instead."],
          ["If you are stuck", "When a word's sound escapes you mid-answer, say it once at half speed and keep going: a slow clear word always beats a fast collapsed one."],
          ["Final minutes", "After any practice or mock, replay one recording purely for endings and log the endings that vanished at speed; that log is next week's drill list."],
        ],
      },
      {
        type: "summary",
        points: [
          "No national accent outranks another on this criterion: an Indian, Nigerian, Brazilian, Chinese, Spanish or any other accent can reach the top of the scale when the speaker is easy to understand.",
          "Five contrasts carry most of the risk: think/sink, ship/sheep, vet/wet, final consonants and the three -ed endings.",
          "Train contrasts in pairs, because the ear learns a difference faster than it learns a sound in isolation.",
          "Move through three stages — hear and judge, exaggerate, then say it at test speed — and record the final stage every single time.",
          "Fix only the habits that change words; habits that merely mark your first language are your accent and cost you nothing.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the foundations chapter and one from the orientation module.",
        items: [
          { question: "What does the Speaking pronunciation criterion actually reward?", options: ["Sounding as close as possible to a standard British or American accent", "Features that make you easy to understand — stress, intonation and connected speech — whatever your accent", "Speaking with no trace of a first language anywhere in your sounds"], correctIndex: 1, explanation: "The descriptors describe intelligibility features and never name a region: an examiner scores how effortlessly you can be followed, so any accent can reach the top of the scale.", from: "Pronunciation: what the criterion really rewards" },
          { question: "A candidate's accent is strong but every word is identifiable on first hearing. Where does that sit on the criterion?", options: ["It caps the score, because a strong accent always lowers pronunciation", "It can sit anywhere up to full marks, because identifiability is what counts", "It depends on whether the accent is from a country where English is official"], correctIndex: 1, explanation: "Strength of accent is not a band descriptor; what the criterion measures is the listener's effort, and effortless identification is compatible with every accent on earth.", from: "Pronunciation: what the criterion really rewards" },
          { question: "How long does the whole Speaking test run, start to finish?", options: ["About 11 to 14 minutes", "About 25 to 30 minutes", "Exactly 20 minutes"], correctIndex: 0, explanation: "The three parts together take roughly eleven to fourteen minutes, which is why every minute of pronunciation preparation has a chance to show itself.", from: "The examination format, section by section" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. According to the triage principle, which habits deserve your drilling hours before the test?",
        hints: ["Ask of each habit: does it ever turn one English word into a different one?"],
        options: [
          { id: "a", text: "Anything that sounds different from a British newsreader, because every difference is a lost mark." },
          { id: "b", text: "Contrasts that change one word into another — think/sink, ship/sheep, vet/wet and swallowed endings — because they force the examiner to guess." },
          { id: "c", text: "The newest vocabulary topics, because unknown words are where pronunciation breaks down most." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Contrasts that change one word into another — think/sink, ship/sheep, vet/wet and swallowed endings — because they force the examiner to guess.",
          "The triage principle sends your hours to the contrasts that create real repair work for the listener, while habits that merely mark your background stay untouched and unpenalised.",
          "(a) confuses difference with error and would have everyone erasing their accent; (c) is about vocabulary range, not the sound contrasts this criterion scores.",
        ),
        tags: ["speaking", "pronunciation", "sounds", "triage"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the coaching note and decide what should be drilled first.",
        hints: ["Look for the habit that changes one word into another, not the habits that merely sound distinctive."],
        passageTitle: "The one-habit fortnight",
        passage: "Tomas records a two-minute answer about a market he visits. His log reads: 'My r is rolled, my l is dark, the word three came out as free both times I said it, and my syllables are all the same length.' His teacher has room for one habit in the schedule before the next mock.",
        question: "Which habit belongs in that slot, and for what reason?",
        options: [
          { id: "a", text: "The rolled r, because it is the most noticeable feature of his speech." },
          { id: "b", text: "The three/free collapse, because it turns one English word into another and creates real repair work for the listener." },
          { id: "c", text: "The even syllables, because rhythm affects every sentence he will speak." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The three/free collapse, because it turns one English word into another and creates real repair work for the listener.",
          "Noticability and penalty are different things: a rolled r and a dark l mark Tomas's background but change no words, while three becoming free sends a wrong number to the examiner's ear.",
          "(a) picks the loudest habit rather than the costly one; (c) names a genuine rhythm issue, but it belongs to a different lesson and does not exchange words for each other.",
        ),
        tags: ["speaking", "pronunciation", "sounds", "triage"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory of the contrast table.",
        hints: [],
        question: "What are the three possible pronunciations of the written -ed ending, and which one of them adds an extra syllable?",
        acceptedAnswers: [
          "a t sound after quiet sounds, a d sound after voiced sounds, and a small ih syllable after t and d — only the third adds a syllable",
          "t, d or a small ed syllable, and only the ed syllable adds an extra beat",
          "a quiet t, a voiced d, or an extra syllable after t and d endings — the extra syllable is the only new beat",
          "t after sounds like k, d after sounds like n, and id after t or d, with only id adding a syllable",
        ],
        keywords: ["t", "d", "syllable"],
        feedback: fb(
          "A t sound, a d sound, or a small extra syllable after t and d — only the third adds a beat.",
          "The ending copies the quietness or the voice of the sound before it, and only inserts its own syllable when the stem already ends in t or d, which is why wanted has one more beat than walked.",
          "Answers that give every -ed the same sound, or that add a syllable after all stems, have replaced the rule with a single habit.",
        ),
        tags: ["speaking", "pronunciation", "sounds", "endings"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. In the minimal-pair training loop, why does hearing and judging come before any speaking?",
        hints: [],
        options: [
          { id: "a", text: "Because the ear must be able to notice the contrast before the mouth can reliably produce it, and isolated judgement can be scored out of ten." },
          { id: "b", text: "Because listening is easier than speaking, so the lesson should begin with the comfortable half." },
          { id: "c", text: "Because examiners listen to candidates before asking them to speak, so the order mirrors the test." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because the ear must be able to notice the contrast before the mouth can reliably produce it, and isolated judgement can be scored out of ten.",
          "You cannot hold a target sound in your mind that your ear cannot yet detect, so the scored judgement pass creates the perceptual anchor for every later exaggeration and recording.",
          "(b) orders the loop by comfort rather than by dependence; (c) invents a connection to test procedure that does not exist.",
        ),
        tags: ["speaking", "pronunciation", "sounds", "method"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Say each pair three times, alternating slowly, then deliver the closing sentence at your normal test speed.",
        hints: ["Make the contrast wide: tongue between the teeth for think, and a much longer vowel for sheep than for ship."],
        situation: "Read-aloud drill for the two most valuable pairs. Alternate the members of each pair slowly, then say the carrier sentence once at the pace you would use in Part 2.",
        targetPhrases: ["think — sink — think", "ship — sheep — ship", "I think we sailed on a big ship for three days."],
        mustSay: ["think", "ship", "sheep", "three"],
        feedback: fb(
          "A recording that contains think, sink, ship, sheep and three, with the contrasts at their widest in the slow pairs.",
          "The slow alternation builds the muscle shapes, and the carrier sentence tests whether those shapes survive speed — which is the exact order the training loop installs.",
          "Recordings that blur both members of a pair into one sound, or that keep the slow pairs clear but collapse the carrier sentence, show the habit still lives at pace.",
        ),
        tags: ["speaking", "pronunciation", "sounds", "drill"],
      }),
    ],
    assignment: {
      title: "My three pairs, in writing",
      instructions:
        "From your latest recorded answer — or the four sentences in this lesson — choose your three danger pairs. Write down each pair with a carrier sentence taken from a real Part 1 topic, describe what your mouth must do differently for the second member of each pair, and give the order in which you will drill them this fortnight with your reason for putting the first one first.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Record a forty-second answer to 'Do you enjoy cooking?', then listen once only for endings and once only for th-words, and write down everything that vanished.",
      "Give one minimal pair from this lesson ten slow repetitions every morning for a week, in a mirror, watching your mouth make the two different shapes.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-word-stress",
    title: "Word stress",
    description:
      "The beat inside a word: how PHOtograph, phoTOgrapher and photoGRAPHic shift their stress, how the schwa swallows unstressed syllables, and why a mis-stressed word hides even when every sound in it is right.",
    objectives: [
      "mark the stressed syllable in the word families that shift it between relatives",
      "produce the schwa in unstressed syllables instead of giving every vowel full weight",
      "repair the words your own first language tends to re-stress before test day",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "A word can be pronounced sound by sound with total accuracy and still not be recognised, because English listeners identify words partly by their rhythm template — which syllable is long, loud and high. Put the beat on the wrong floor and the listener searches the wrong shelf of their mental dictionary, then gives up and waits for the next word. This lesson trains your ear onto the stressed syllable, shows how families move the beat around, and introduces the lazy little vowel that makes the whole system run.",
        beforeYouStart: [
          "You can use the recording habit from the previous lesson: today it captures syllables instead of single sounds.",
          "You can hear the difference between a stressed and an unstressed syllable when a model says them slowly.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — most damage in Part 2, where key topic nouns repeat throughout the long turn"],
          ["Task & question types", "Cue-card answers built around nouns like photograph, comfortable and economy; work and study answers full of noun/verb twins"],
          ["What is assessed", "Pronunciation — stress at word level sits in the descriptors' very first banding language, before intonation even appears"],
          ["Why this matters", "A mis-stressed keyword is heard as an unknown word, so the examiner loses exactly the content you worked hardest to include"],
        ],
      },
      { type: "heading", text: "Component 1 — Every sound right, and the word still lost" },
      {
        type: "text",
        text: "Listeners do not decode words letter by letter; they match what they hear against a stored pattern in which one syllable is stronger than the rest — longer, louder, pitched higher. When the beat lands on the expected syllable, recognition is instant even if the surrounding vowels are unusual. When the beat lands elsewhere, the same sounds stop matching anything: the listener hears a string of noise shaped like no word they know, blinks, and moves on. This is why wrong stress is more expensive than an unusual vowel: an unusual vowel still lands inside the right template, while wrong stress moves the template itself. The examiner is never guessing what sound you made — they are guessing what word you meant.",
      },
      { type: "heading", text: "Component 2 — Families that move the beat" },
      {
        type: "text",
        text: "English builds families by adding endings, and the endings often drag the stress with them. The photograph family walks the beat across three homes: PHOtograph parks it on the first syllable, phoTOgrapher moves it to the second, photoGRAPHic pushes it to the third. The economy family does the same in two steps: EConomy beats on the second syllable, ecoNOMic on the third. Then there are the noun/verb twins, where the grammar of the word decides the beat all by itself: a REcord is a thing you keep, to reCORD is a thing you do; a PREsent is something you unwrap, to preSENT is something you perform. Learn families as chains, never as isolated members — the mouth remembers a route better than a spot.",
      },
      {
        type: "table",
        title: "Stress routes you will actually travel",
        headers: ["Family chain", "The beat's journey", "In a sentence"],
        rows: [
          ["PHOtograph → phoTOgrapher → photoGRAPHic", "First syllable, then second, then third", "The photographic exhibition hired a photographer for its opening photograph."],
          ["EConomy → ecoNOMic", "Second syllable, then third", "The island's economy depends on the economic tide of summer visitors."],
          ["a REcord → to reCORD", "Noun takes the first beat, verb takes the second", "I record my hours and keep the record in a drawer."],
          ["a PREsent → to preSENT", "Same twin rule: earlier beat for the noun, later for the verb", "They present the prize to whoever wrote the best presentation."],
          ["Japan → JAPanese", "Second syllable, then third", "My colleague is Japanese, and she studied design in Japan."],
        ],
      },
      {
        type: "audio",
        label: "Listen: one family, three beat homes",
        mode: "tts",
        text: "photograph — photographer — photographic",
        rate: 0.85,
      },
      {
        type: "audio",
        label: "Listen: a noun and its verb twin",
        mode: "tts",
        text: "a record player. to record a song. a birthday present. to present an award.",
        rate: 0.85,
      },
      { type: "heading", text: "Component 3 — The schwa: the sound of no stress" },
      {
        type: "text",
        text: "When a syllable loses the beat, its vowel loses its job and collapses into the schwa — the short, relaxed 'uh' that the symbol ə labels but plain speech has always contained. The middle of photograph is not a full o: it is PHO-tuh-grarf, two crisp beats around a shrug. This reduction is not carelessness; it is the engine of the rhythm, because the syllables that step aside are what make the stressed one stand out. Speakers who give every vowel its written value — photograph as PHO-TOH-GRAHF — produce syllables too heavy to compress, and the word's template disappears under their precision. Say the beat syllable generously, and let every other vowel rest into uh.",
      },
      {
        type: "steps",
        title: "Hear it, hum it, mark it, chain it",
        intro: "A four-move routine that finds any word's beat in under a minute.",
        steps: [
          {
            title: "Move 1: Hear the beat land",
            text: "Play the model audio for a word family and listen only for the syllable that is longer and higher than its neighbours. Do not imitate yet — just name the position: first, second, third. Naming the position builds the map before the mouth starts driving.",
            examples: [
              { english: "Audio plays photographer; you say only 'second' before attempting the word.", note: "Locating before producing stops the mouth from rehearsing the wrong template." },
            ],
          },
          {
            title: "Move 2: Hum the word",
            text: "Hum the word with no consonants at all — mm-MM-mm — and the stressed syllable becomes a note you cannot miss. Humming strips away every sound you are worried about and leaves nothing but the beat, which is why choir trainers use it for exactly this purpose.",
          },
          {
            title: "Move 3: Mark and read",
            text: "Write the word with the stressed syllable in capitals — phoTOgrapher — and read it back at half speed, giving the capital letters their extra length and height. Your eyes now support your ears, and the mark stays on the page for revision.",
            examples: [
              { english: "Card reads: comfortable = COMF-tuh-bul, three spoken beats, first one capital.", note: "The spelling has four syllables; the mouth says three, with the middle resting on uh." },
            ],
          },
          {
            title: "Move 4: Chain the family",
            text: "Say the whole family in one breath — PHOtograph, phoTOgrapher, photoGRAPHic — so the mouth practises the journey rather than the destination. Chained families survive test pressure far better than words drilled alone, because the route is what gets remembered.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: the beat and the shrug together",
        mode: "tts",
        text: "economy — economic. Japan — Japanese. comfortable, comfortable.",
        rate: 0.85,
      },
      {
        type: "example",
        title: "Stress at work in real answers — seven sightings",
        items: [
          { english: "Part 2, describing a person: 'My uncle worked as a phoTOgrapher for a newspaper.' — the beat on the middle syllable, and the word is recognised on first hearing.", note: "Move the beat to PHO and the examiner hears a word that does not exist.", domain: "exam" },
          { english: "Part 1, work topic: 'I keep a REcord of everything I spend.' — the noun's early beat, distinct from the verb twin used in the next sentence.", note: "The noun/verb pair lands twice in one answer without either word hiding.", domain: "exam" },
          { english: "Part 3, tourism: 'The ecoNOMic effect has been enormous.' — the family's third-syllable beat carrying a heavy idea.", note: "Heavy ideas deserve keywords that arrive on the first try.", domain: "exam" },
          { english: "At the chemist's: 'I need to pick up a preSCRIPtion.' — the second-syllable beat that the counter staff are listening for.", note: "A first-syllable prescription sends the assistant searching the wrong shelf.", domain: "life" },
          { english: "On a project call: 'I'll send you the deTAILS this afternoon.' — the second-syllable beat that most colleagues never notice you got right.", note: "Nobody comments on correct stress; they simply never ask you to repeat.", domain: "work" },
          { english: "A learner writes five family chains on cards, capitals on the beat, and runs one chain aloud every morning with coffee.", note: "One chain a day is a routine; five chains a day is a chore that dies by Wednesday.", domain: "study" },
          { english: "Describing a hotel: 'The beds were really COMfortable.' — three spoken syllables, beat at the front, middle vowel resting on uh.", note: "The four-syllable spelling quietly becomes a three-beat word in every fluent mouth.", domain: "life" },
        ],
      },
      {
        type: "mistakes",
        title: "Word-stress mistakes corrected",
        items: [
          { wrong: "'My sister is a PHOtographer.' — the beat parked on the first syllable.", right: "'My sister is a phoTOgrapher.' — the beat on the middle syllable, where the family stores it.", reason: "First-syllable stress produces a template that matches no English word, so the examiner loses a whole profession from your answer while every consonant stays perfect." },
          { wrong: "'Please keep a reCORD of the repairs.' — the verb's beat borrowed for a noun.", right: "'Please keep a REcord of the repairs.' — the noun carrying its earlier beat.", reason: "The twins swap meaning through stress alone, so the swapped beat announces the wrong part of speech and the sentence's grammar wobbles." },
          { wrong: "'The journey was comforTAble.' — the beat pushed to the end, every vowel at full strength.", right: "'The journey was COMfortable.' — the beat on the first syllable, the middle resting into uh.", reason: "Late stress plus full vowels makes a four-syllable monument out of a three-syllable word, and the listener spends the next two words catching up." },
        ],
      },
      {
        type: "four-skills",
        title: "A cue-card answer, beat-mapped",
        reading: {
          text: "A practice cue card in the style of the test reads: 'Describe a photograph that means something to you. You should say what it shows, when it was taken, who took it, and explain why it matters to you.' A candidate plans an answer around four keywords: photograph, photographer, Japanese (the cousin who took it), and comfortable (the old chair her grandfather sits in, in the picture).",
          task: "Mark the stressed syllable of each keyword with capitals, then say where the beat travels inside the photograph family.",
        },
        writing: {
          task: "Write the four keywords with their beat marked, then draft the two sentences of your answer that carry the most family words, and finish with one line on which keyword your first language is most likely to re-stress.",
          guide: [
            "Mark the chains: PHOtograph, phoTOgrapher, JAPanese, COMfortable.",
            "Draft the family-heavy sentences first — they carry the recognition risk.",
            "Name your personal re-stressing habit honestly, with one past example.",
            "End with the chain you will drill in the morning slot this week.",
          ],
          model: "Marked keywords: PHOtograph, phoTOgrapher, JAPanese, COMfortable. Family-heavy sentences: 'It's an old photograph of my grandfather, taken by my cousin, who was training to be a photographer at the time.' and 'He sits in the same comfortable chair today, though the Japanese camera has long since been replaced.' Personal note: my language stresses the last syllable of borrowed words, so comfortable is my likeliest re-stress, and that chain gets the morning slot.",
        },
        listening: {
          script: "Tutor: You said the photograph family three times, and each time the beat went back to the first syllable — that's one habit, not three mistakes. Here's the fix: hum the word before you say it. Mm-MM-mm for photographer. Feel where the note rises? That's the syllable your mouth has to hold longer. Now say it with the hum still fresh, and put everything else — the consonants, the vowels — into second place behind that beat.",
          task: "What does the tutor identify as the single underlying habit, and what two-step fix does she prescribe?",
        },
        speaking: {
          task: "Deliver the two family-heavy sentences from the writing task twice: once with the beat exaggerated, once at test pace. Record the second take only.",
          frames: [
            "Exaggerated pass: 'It's an old PHOtograph… taken by a phoTOgrapher…'",
            "Test-pace pass, recorded: the same sentences at speaking-test speed.",
            "Self-report: 'The keyword whose beat moved when I sped up was …'",
          ],
          checklist: [
            "Did photograph keep its first-syllable beat at full speed?",
            "Did photographer land its middle beat without slowing the sentence?",
            "Did comfortable stay a three-beat word with the middle resting on uh?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Recognition engineering", "It puts the beat where listeners actually search, so keywords are identified on first hearing instead of being repaired from context."],
          ["Family routing", "Chaining relatives together drills the stress journey itself, which is more durable under pressure than any single word drilled in isolation."],
          ["Load balancing", "Unstressed syllables rest into the schwa, which lightens every word and leaves the mouth more energy for the syllables that matter."],
          ["Accent compatibility", "The speaker's own vowel qualities stay in place inside the template, so intelligibility rises without erasing where the speaker is from."],
          ["Self-diagnosis", "Humming and capital-marking give the learner tools that work without a teacher or a dictionary, which is what test-day preparation actually runs on."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Take the three or four keywords your planned answer will repeat most, and mark their beats in capitals on your notes where your glance will catch them."],
          ["While the clock runs", "If a keyword comes out mis-stressed, re-say it immediately with the beat corrected — a quick second attempt reads as precision, not error."],
          ["If you are stuck", "Swap in the family member you can stress confidently: photograph instead of photographer costs less than a keyword the examiner cannot identify at all."],
          ["Final minutes", "Keep a running list of the words you avoided because of their stress, and give the list one hum-and-chain session after every mock."],
        ],
      },
      {
        type: "summary",
        points: [
          "Listeners recognise words by their stress template before their individual sounds, so a mis-stressed keyword is heard as an unknown word.",
          "Families move the beat as they grow: PHOtograph, phoTOgrapher, photoGRAPHic walk it across three syllables, and noun/verb twins like REcord and reCORD swap it by grammar.",
          "Unstressed syllables collapse into the schwa, the relaxed 'uh' that makes the beat stand out — precision on every vowel destroys the very pattern the listener needs.",
          "Run the four moves — hear the beat, hum the word, mark it in capitals, chain the family — and the routine finishes inside a minute per word.",
          "Re-say a mis-stressed keyword with the beat corrected rather than avoiding it; examiners hear repair as control, and avoidance as a shrinking vocabulary.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the sounds lesson and one from the foundations chapter.",
        items: [
          { question: "Where does the tongue tip go for the first sound of think?", options: ["Behind the top teeth, like an s", "Lightly between the teeth, with air pushed out", "Curled back, away from the teeth entirely"], correctIndex: 1, explanation: "The think sound needs the tongue tip resting between the teeth with air flowing over it; retreating behind the teeth is exactly how think collapses into sink.", from: "Individual sounds" },
          { question: "After a voiced sound like n, what does the written -ed of a word such as planned become?", options: ["A quiet t with no voice", "A voiced d sound", "A full extra syllable"], correctIndex: 1, explanation: "The ending copies the voice of the sound before it, so voiced stems take a voiced d; only stems ending in t or d earn the extra syllable.", from: "Individual sounds" },
          { question: "How many criteria score the Speaking test, and is pronunciation one of them?", options: ["Two, and pronunciation is not one of them", "Four, and pronunciation is one of them", "Six, with pronunciation split across two of them"], correctIndex: 1, explanation: "Four criteria share the speaking score — fluency and coherence, lexical resource, grammatical range and accuracy, and pronunciation — each worth a quarter of the band.", from: "Pronunciation: what the criterion really rewards" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Why can a word with every sound pronounced correctly still fail to be recognised?",
        hints: ["Think about what the listener is matching your word against in their mental dictionary."],
        options: [
          { id: "a", text: "Because listeners identify words partly by their stress template, and a beat on the wrong syllable matches no stored pattern." },
          { id: "b", text: "Because correct individual sounds sound artificial, and listeners expect small errors." },
          { id: "c", text: "Because unfamiliar accents always slow recognition, whatever the sounds inside them." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because listeners identify words partly by their stress template, and a beat on the wrong syllable matches no stored pattern.",
          "Recognition runs on rhythm before detail: the stressed syllable is the address the listener searches, and all your accurate consonants cannot deliver a word posted to the wrong address.",
          "(b) reverses the direction of the problem entirely; (c) contradicts the accent-neutral truth that unfamiliar accents are followed easily when templates and contrasts are in place.",
        ),
        tags: ["speaking", "pronunciation", "word-stress"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the examiner's note and diagnose what actually happened.",
        hints: ["The sounds were fine — so what else does a listener need to identify a word?"],
        passageTitle: "The missing profession",
        passage: "Mei answered a Part 2 card about an interesting relative. She said: 'My uncle is a photographer. He works for a travel magazine.' Afterwards the examiner noted: 'The profession was unclear on first mention; the candidate then repeated it with a different rhythm and I understood.' Mei's individual sounds, recorded later in the session, were accurate throughout.",
        question: "What most likely happened at the first mention of the profession?",
        options: [
          { id: "a", text: "Mei's vowels were so unusual that the word needed a second hearing." },
          { id: "b", text: "Mei stressed the wrong syllable the first time — probably the first — and the second attempt placed the beat correctly, which is what unlocked recognition." },
          { id: "c", text: "The examiner was unfamiliar with the word photographer." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Mei stressed the wrong syllable the first time — probably the first — and the second attempt placed the beat correctly, which is what unlocked recognition.",
          "A rhythm change between two attempts of the same word is the fingerprint of a stress repair: the sounds were stable and accurate, but only the correctly beaten version matched the listener's stored template.",
          "(a) is contradicted by the accurate recording made later in the session; (c) is not plausible for a routine profession word in a trained examiner's ear.",
        ),
        tags: ["speaking", "pronunciation", "word-stress"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer without looking back at the table.",
        hints: [],
        question: "Name the stressed syllable in each of these three words: photographer, economic, and record when it is the verb.",
        acceptedAnswers: [
          "TO in photographer, NOM in economic, and CORD in the verb record",
          "the second syllable of photographer, the third of economic, and the second of the verb record",
          "phoTOgrapher, ecoNOMic, reCORD — middle, third and second beats",
          "TO, NOM and CORD",
        ],
        keywords: ["TO", "NOM", "CORD"],
        feedback: fb(
          "TO in photographer, NOM in economic, CORD in the verb record.",
          "The family routes put photographer's beat on the middle syllable, economic's on the third, and the verb twin record takes its later beat while the noun keeps the earlier one.",
          "Answers that give the noun beat to the verb, or park economic on its second syllable, have swapped two members of the families the table drilled.",
        ),
        tags: ["speaking", "pronunciation", "word-stress", "families"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. In natural English, what happens to the vowels of unstressed syllables?",
        hints: [],
        options: [
          { id: "a", text: "They keep their written values, so that every syllable stays clear and equal." },
          { id: "b", text: "They rest into the relaxed schwa sound, which is what lets the stressed syllable stand out." },
          { id: "c", text: "They disappear completely, leaving only the stressed syllable of each word." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "They rest into the relaxed schwa sound, which is what lets the stressed syllable stand out.",
          "Reduction is the engine of the rhythm rather than a sign of carelessness: the shrugging uh of the middle syllable in photograph is precisely what makes its first beat audible from across a room.",
          "(a) describes the habit that buries templates under heavy syllables; (c) overstates the case — reduction softens vowels, it does not delete syllables outright.",
        ),
        tags: ["speaking", "pronunciation", "word-stress", "schwa"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Chain the families aloud, then deliver the carrier sentence at test pace.",
        hints: ["Hum each chain once before saying it — mm-MM-mm for photographer — so the beat is fresh before the consonants arrive."],
        situation: "Family-chain drill. Say each chain in one breath with the beat exaggerated, then say the closing sentence at the pace of a Part 2 answer.",
        targetPhrases: ["photograph — photographer — photographic", "a record — to record", "My uncle, a photographer, keeps a record of every photograph he has ever taken."],
        mustSay: ["photographer", "record", "photograph"],
        feedback: fb(
          "A recording that contains all three family members with their beats on the right syllables, plus the carrier sentence at test pace.",
          "The chained families practise the beat's journey, and the carrier sentence tests whether the journey survives speed — the two halves of the hum-and-chain routine in one take.",
          "Recordings where the isolated chains are perfect but the carrier sentence flattens the beat show the classic gap between drill and delivery that only pace exposes.",
        ),
        tags: ["speaking", "pronunciation", "word-stress", "drill"],
      }),
    ],
    assignment: {
      title: "My stress blacklist",
      instructions:
        "List five English words you use often but secretly avoid or mis-stress — words from your work, your studies or your planned Part 2 answers. Write each one with its stressed syllable in capitals, say which family or twin it belongs to, and finish with the one chain you commit to drilling in your morning slot this week and the reason it comes first.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Record the three family chains from this lesson once a day for a week, and listen back only for the beat — not the sounds — marking any chain whose stress drifts when you speed up.",
      "Build five word-family cards: the chain on one side, capitals on the beat, and an original carrier sentence on the other; carry them for a fortnight.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-sentence-stress",
    title: "Sentence stress",
    description:
      "The beat of the whole sentence: which words carry the meaning and which glide past, how moving one stressed word changes the message, and how contrastive stress corrects a listener without repeating everything.",
    objectives: [
      "separate content words from grammar words and give only the content words the beat",
      "use contrastive stress to correct a misunderstanding in a single word",
      "deliver prepared answers so the stressed words still stand out at test speed",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Inside every English sentence, a handful of words do the meaning-carrying and the rest are scaffolding: join it all with equal weight and the sentence becomes a wall of noise. Native and fluent speakers alike hammer the carriers and hurry the scaffolding, and the listener rides those peaks like stepping stones across a stream. This lesson teaches you to choose the stones deliberately — and to move a single stone when the message itself needs to change.",
        beforeYouStart: [
          "You can find the stressed syllable inside a word from the previous lesson's hum-and-chain routine.",
          "You can record yourself and listen back without judging everything at once.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — all three parts, and especially Part 3, where examiners push back and expect you to hold your ground"],
          ["Task & question types", "Opinion answers, disagreements with the examiner's framing, clarifications after a misunderstood word, comparisons"],
          ["What is assessed", "Pronunciation for stress placement and, through the same behaviour, fluency and coherence for how easily the message travels"],
          ["Why this matters", "When every word gets equal weight, the listener cannot tell which part of the sentence was the point — and the strongest ideas sound like background"],
        ],
      },
      { type: "heading", text: "Component 1 — Carriers and scaffolding" },
      {
        type: "text",
        text: "Sort the words of any sentence into two families. The carriers are the words you could not rebuild the message without: nouns, main verbs, adjectives, most adverbs, question words and negations like never and nothing. The scaffolding holds the sentence's grammar together but adds little information: articles, prepositions, pronouns, conjunctions and auxiliary verbs. English gives the carriers length, loudness and pitch, and compresses the scaffolding until some of it is barely a whisper — the of in cup of tea is closer to 'uhv', the for in for ten years closer to 'fer'. A useful test: delete the word in your head, and if the sentence's core message survives, the word was scaffolding; if the message collapses, it was a carrier.",
      },
      {
        type: "table",
        title: "The two word families, sorted",
        headers: ["Family", "Members", "What happens to them in speech"],
        rows: [
          ["Carriers", "Nouns, main verbs, adjectives, most adverbs, question words, negations", "Longer, louder, pitched higher — the stepping stones the listener crosses on"],
          ["Scaffolding", "Articles, prepositions, pronouns, conjunctions, auxiliary verbs", "Compressed towards a whisper, vowels resting into uh — felt rather than heard"],
          ["New information", "Whichever carrier carries information the listener does not yet have", "Takes the strongest beat of the sentence, even over words that are normally heavy"],
          ["Old information", "Words repeating something already established in the conversation", "Loses its beat to the new information arriving beside it"],
        ],
      },
      {
        type: "audio",
        label: "Listen: carriers taking the beat",
        mode: "tts",
        text: "I'd REALLY like a cup of COFFEE right NOW.",
        rate: 0.85,
      },
      { type: "heading", text: "Component 2 — One sentence, five messages" },
      {
        type: "text",
        text: "Take the sentence 'I didn't say he stole it' and move the beat around. Stress HE and you deny that accusation while leaving another open — somebody took it, just not him. Stress STOLE and you concede he took it but dispute the crime — he borrowed it. Stress IT and he stole something, but not the thing under discussion. Stress SAY and you imply the words were never yours — perhaps you only suggested it. Stress I and the blame shifts to whoever else was talking. Not one word of the sentence changes, yet the message bends each time the beat lands somewhere new. This is contrastive stress: the single most efficient correction tool English owns, because one hammer blow replaces a whole restated sentence.",
      },
      {
        type: "table",
        title: "Where the beat lands, what the listener concludes",
        headers: ["Stressed word", "The message the listener takes away"],
        rows: [
          ["I didn't say HE stole it", "Someone else took it — the accusation names the wrong person"],
          ["I didn't say he STOLE it", "He took it, but taking it was not stealing — perhaps borrowing"],
          ["I didn't say he stole IT", "He stole something — the discussion is about the wrong object"],
          ["I didn't SAY he stole it", "The words were never spoken — perhaps implied, perhaps invented"],
          ["I DIDN'T say he stole it", "A flat denial of the whole claim, from the speaker's own mouth"],
        ],
      },
      {
        type: "audio",
        label: "Listen: one sentence, two different messages",
        mode: "tts",
        text: "I didn't say HE stole it — she did. I didn't say he STOLE it — he only borrowed it.",
        rate: 0.85,
      },
      {
        type: "steps",
        title: "Mark, hammer, glide, keep",
        intro: "The four-pass routine that installs sentence stress into a prepared answer.",
        steps: [
          {
            title: "Pass 1: Mark the carriers",
            text: "Take a two-sentence answer you have already written — a Part 1 favourite works well — and underline every carrier word. Read it silently and check each underline against the deletion test: message collapses, carrier stays; message survives, unmark it.",
            examples: [
              { english: "'I've lived in the same flat for ten years.' Underlined: lived, same, flat, ten, years.", note: "Five stones across a seven-word span — scaffolding fills the gaps." },
            ],
          },
          {
            title: "Pass 2: Hammer only the underlined",
            text: "Read the sentence aloud hitting the underlined words hard and saying nothing between them — let the scaffolding fall silent. The result is not natural speech, and that is the point: you are teaching the mouth where the peaks live before teaching it the valleys.",
          },
          {
            title: "Pass 3: Glide the scaffolding back in",
            text: "Read again at normal speed, letting the unmarked words return as light, fast bridges: 'fer ten YEARS', 'uhv the FLAT'. The contrast between peak and valley is what the listener rides; equal effort on both flattens the path into noise.",
            examples: [
              { english: "'I've LIVED in the same FLAT fer TEN YEARS' — the scaffolding arriving as bridges, not bricks.", note: "Speed and softness belong together on the unstretched words." },
            ],
          },
          {
            title: "Pass 4: Record and keep the peaks",
            text: "Record the answer at true test pace and listen only for the peaks. If a carrier has sunk back into the stream, mark it again and repeat pass three for that sentence alone. Peaks that survive speed are installed; peaks that need slowness are still on probation.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: corrections with contrastive stress",
        mode: "tts",
        text: "No, the interview is on THURSDAY, not Tuesday. I asked for still water, not SPARKLING.",
        rate: 0.85,
      },
      {
        type: "example",
        title: "Sentence stress in the wild — seven deliveries",
        items: [
          { english: "Part 1, hometown: 'I've LIVED in the same FLAT for TEN years.' — two numbers and two nouns carrying the whole biography.", note: "The listener crosses the sentence on four stones and misses nothing.", domain: "exam" },
          { english: "Part 2, a festival: 'The STREETS fill with THOUSANDS of people from DAWN.' — carriers beating, of and with barely surviving.", note: "The scale of the festival arrives through the peaks, not the grammar.", domain: "exam" },
          { english: "Part 3, pushed back on: 'No, I wouldn't call it EXPENSIVE — I'd call it OVERPRICED.' — one stressed correction doing the work of a whole paragraph.", note: "Disagreeing politely is mostly a stress placement exercise.", domain: "exam" },
          { english: "The examiner hears 'twice a week' where the candidate said 'twice a MONTH'; the candidate replies 'No, twice a MONTH' with the beat on month — and the record is set straight in one word.", note: "The correction lands only because the new information took the strongest beat.", domain: "exam" },
          { english: "Rescheduling on a work call: 'The client moved it to FRIDAY' — and the whole team re-plans because one word carried the change.", note: "Meetings turn on stressed words; the scaffolding never makes the calendar move.", domain: "work" },
          { english: "A learner highlights the carriers in one transcript a day and reads it aloud twice: once hammering, once gliding.", note: "Two minutes a day on real transcripts builds the peaks faster than invented sentences.", domain: "study" },
          { english: "At a restaurant table: 'I ordered the CHICKEN' — spoken to a waiter delivering the wrong plate, and the single stressed word completes the correction.", note: "Everyday service interactions run on exactly this contrast.", domain: "life" },
        ],
      },
      {
        type: "mistakes",
        title: "Sentence-stress mistakes corrected",
        items: [
          { wrong: "'I have been living in this city for about ten years now.' — every word given the same weight and the same length.", right: "'I've been LIVING in this CITY for about TEN YEARS now.' — carriers beating, the rest bridging.", reason: "Equal effort produces a flat wall of sound in which the listener cannot find the point, so even a strong idea arrives as background noise." },
          { wrong: "A correction delivered flat: 'No, I said Tuesday.' — with no beat anywhere and the misunderstanding surviving.", right: "'No — I said TUESday.' — the corrected word taking the strongest beat in the sentence.", reason: "Corrections work by contrast: without a peak on the new information, the listener's original understanding simply continues standing." },
          { wrong: "Meaning to defend the accused ('somebody else took it'), the speaker hammers STOLE — and the listener now believes it was only borrowed.", right: "Hammer HE: 'I didn't say HE took it' — the beat naming the wrong suspect.", reason: "The stressed word tells the listener which part of your sentence to revise, so a misplaced peak revises the wrong part." },
        ],
      },
      {
        type: "four-skills",
        title: "A Part 3 answer, peak-mapped",
        reading: {
          text: "A Part 3 discussion prompt, in the style of the test, asks: 'Should governments spend public money on museums?' A candidate answers: 'I think they should, because museums keep a country's memory in one place. If everything moves online, we lose the experience of standing in front of something real.' The answer holds eleven carrier words and a chain of scaffolding around them.",
          task: "Underline the eleven carriers, then mark which single word should take the strongest beat of the whole answer.",
        },
        writing: {
          task: "Write the two sentences with carriers in capitals, then add one sentence explaining where you would place the single strongest beat and what that placement tells the listener to focus on.",
          guide: [
            "Mark the nouns and verbs first: THINK, MUSEUMS, KEEP, MEMORY.",
            "Then the adjectives and adverbs: PUBLIC, ONLINE, REAL.",
            "Choose your strongest beat — the word the argument turns on.",
            "Explain in one sentence what a listener does with that peak.",
          ],
          model: "Marked answer: 'I THINK they SHOULD, because MUSeums KEEP a COUNTRY'S MEMORY in one place. If everything moves onLINE, we LOSE the EXPERIENCE of standing in front of something REAL.' Strongest beat: MEMORY, because the whole argument turns on museums as guardians of collective memory — the listener hangs every other word on that peak, and the follow-up discussion will orbit it too.",
        },
        listening: {
          script: "Tutor: In Part 3 I will sometimes disagree with you on purpose — not to be unkind, but to see whether you can hold a position. When I said museums were a luxury, you answered 'no' and then restarted your whole sentence. You don't need the restart. Put the beat on the word that contradicts me — 'museums are a NECESSITY, not a luxury' — and the disagreement is finished in four words. Practise the single-word correction: it is the cheapest fluency there is.",
          task: "What does the tutor say the examiner's disagreement is really testing, and what four-word pattern does she recommend instead of restarting?",
        },
        speaking: {
          task: "Deliver the museum answer twice — once hammering only the capitals, once at test pace — then run the correction drill: respond to 'So you think museums are a luxury?' with one contrastive sentence.",
          frames: [
            "Hammering pass: 'because MUSeums KEEP a COUNTRY'S MEMORY…'",
            "Test-pace pass: the full two sentences at speaking-test speed.",
            "Correction drill: 'I'd call them a NECESSITY, not a luxury.'",
          ],
          checklist: [
            "Did the strongest beat land on the word your argument turns on?",
            "Did the scaffolding stay light when you sped up?",
            "Did your correction sentence stress the contrasting word rather than everything?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Message visibility", "Peaks on carrier words show the listener exactly where the point of each sentence lies, so ideas register on first hearing."],
          ["Effort economy", "Compressed scaffolding saves mouth energy for the words that carry meaning, which keeps long Part 2 turns from exhausting the speaker."],
          ["Argument control", "Contrastive stress lets a candidate disagree, correct or refine in a single word — fluency that examiners recognise as control, not evasion."],
          ["Fluency support", "A clear peak-and-valley pattern gives speech its forward motion, feeding the fluency criterion from inside the pronunciation work."],
          ["Accent independence", "Peak placement works inside every accent on earth, because it is a property of English rhythm rather than of any country's vowels."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Underline the carriers in any prepared Part 1 or Part 2 material, so the peaks are decided before the pressure of delivery arrives."],
          ["While the clock runs", "Trust your prepared peaks and let the scaffolding run light and quick — hunting for vocabulary mid-sentence is where peaks flatten first."],
          ["If you are stuck", "If a word refuses to come, finish the sentence from the peaks you already have and start the next sentence on a fresh stone."],
          ["Final minutes", "Review one recorded answer and ask only: could a listener say which word in each sentence mattered most? If not, re-mark and re-record it."],
        ],
      },
      {
        type: "summary",
        points: [
          "Sentences divide into carriers — nouns, main verbs, adjectives, adverbs, question words, negations — and scaffolding: articles, prepositions, pronouns, conjunctions and auxiliaries.",
          "Carriers take length, loudness and pitch; scaffolding compresses towards a whisper, and new information takes the strongest beat of all.",
          "The same sentence carries different messages depending on which word is stressed: 'I didn't say HE stole it' and 'I didn't say he STOLE it' are different statements.",
          "Contrastive stress is the cheapest correction tool in English: one hammered word replaces a restated sentence and rescues a misunderstanding instantly.",
          "Run the four passes — mark, hammer, glide, keep — and judge the final recording by one question: do the peaks survive at test speed?",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the word-stress lesson and one from the sounds lesson.",
        items: [
          { question: "Where does the beat travel in the chain PHOtograph → phoTOgrapher → photoGRAPHic?", options: ["It stays on the first syllable of every family member", "It moves from the first syllable to the second, then to the third", "It moves backwards, from third to second to first"], correctIndex: 1, explanation: "Endings drag the stress with them as the family grows, which is why relatives must be learned as chains rather than as isolated words.", from: "Word stress" },
          { question: "What is the schwa, as this programme uses the word?", options: ["The stressed syllable of a long word", "The relaxed 'uh' that unstressed vowels collapse into", "A punctuation mark used to show pauses"], correctIndex: 1, explanation: "Unstressed syllables rest into that neutral vowel, and their lightness is precisely what makes the stressed syllable stand out for the listener.", from: "Word stress" },
          { question: "Which of these habits genuinely turns one English word into another?", options: ["A rolled r at the start of words", "An even rhythm across all syllables", "Saying sink where the word was think"], correctIndex: 2, explanation: "Only contrasts that create a different English word force the listener into repair work; the other two are accent features that change no meanings.", from: "Individual sounds" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Which sentence shows correct English sentence stress?",
        hints: ["Apply the deletion test: which words would the message collapse without?"],
        options: [
          { id: "a", text: "'I've been LIVING in this CITY for about TEN YEARS' — with the underlined words longer, louder and higher than the rest." },
          { id: "b", text: "'I've been living in this city for about ten years' — every word given equal length and weight for maximum clarity." },
          { id: "c", text: "'i've BEEN living IN this city FOR about ten years' — with the beat on the small grammar words so the sentence flows." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "'I've been LIVING in this CITY for about TEN YEARS' — with the underlined words longer, louder and higher than the rest.",
          "The carriers take the peaks because they hold the message, while equal weight flattens the sentence into a wall of noise and beats on grammar words actively hide the point.",
          "(b) is the classic flat delivery that buries the message; (c) reverses the system entirely by stressing exactly the words that should compress.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the exchange and explain what the examiner now believes.",
        hints: ["Ask what the single hammered word tells the listener to revise."],
        passageTitle: "The borrowing defence",
        passage: "In a Part 3 discussion about workplace trust, the examiner summarises: 'So your colleague basically admitted stealing the equipment.' The candidate replies: 'I didn't say he STOLE it — he took it home to finish a job, and he brought it back on Monday.' The examiner writes a note and moves on to the next question without correcting anything.",
        question: "Why did the candidate's reply work without restating the whole story?",
        options: [
          { id: "a", text: "Because the beat on STOLE told the examiner exactly which part of the summary to revise — the taking was never in dispute, only the word for it." },
          { id: "b", text: "Because the candidate spoke for longer, which always wins a disagreement in Part 3." },
          { id: "c", text: "Because the examiner gave up arguing, which candidates should treat as a victory." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because the beat on STOLE told the examiner exactly which part of the summary to revise — the taking was never in dispute, only the word for it.",
          "Contrastive stress points the listener's attention at the single element being denied, so the Monday detail only has to confirm an understanding that the beat already repaired.",
          "(b) mistakes length for persuasion; (c) misreads a routine discussion move — the examiner was summarising, not surrendering.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress", "contrast"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the word-family table in this lesson.",
        hints: [],
        question: "If you say 'I didn't say he stole IT' with the beat on IT, what does the listener conclude?",
        acceptedAnswers: [
          "that he stole something, but not the object under discussion",
          "the theft happened, but it involved a different thing",
          "he stole something else — the wrong item is being discussed",
          "the object is wrong: he may have stolen one thing, but not this one",
        ],
        keywords: ["something", "different"],
        feedback: fb(
          "That he stole something, but not the object under discussion.",
          "The peak on IT revises the object of the verb while leaving the action and the person standing, so the conversation's error is located rather than the whole claim destroyed.",
          "Answers claiming the person or the action is denied have moved the peak onto HE or STOLE, which are different messages from the same sentence.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress", "contrast"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why does new information take the strongest beat, even over normally heavy words?",
        hints: [],
        options: [
          { id: "a", text: "Because listeners need to notice what they did not know yet, and the peak is the notice board." },
          { id: "b", text: "Because new words are physically harder to say, so they naturally come out louder." },
          { id: "c", text: "Because older words have already been stressed once and cannot be stressed again." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because listeners need to notice what they did not know yet, and the peak is the notice board.",
          "English spends its loudest resource on whatever updates the listener's picture of the world, which is why a correction hammers the corrected detail and repetition glides past itself.",
          "(b) invents a physical cause for a communicative rule; (c) suggests a quota that does not exist — a word can be re-stressed whenever it again carries the news.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress", "new-information"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Deliver the carrier sentence, then correct two false summaries with contrastive stress.",
        hints: ["Put the beat on the word the false summary gets wrong — that word and nothing else."],
        situation: "Peak-and-correction drill. Say the carrier sentence with its peaks, then respond to each false summary in a single sentence whose beat lands on the corrected word.",
        targetPhrases: ["I said the meeting is on THURSDAY", "I ordered still water, not sparkling", "The course starts in SEPTEMBER, not October"],
        mustSay: ["Thursday", "still", "September"],
        feedback: fb(
          "A recording containing Thursday, still and September, each taking the strongest beat in its correction sentence.",
          "The drill trains the mouth to spend its one loud resource on the corrected word, which is the entire mechanism of contrastive stress in everyday use.",
          "Recordings that correct with flat delivery force the listener to compare whole sentences, which is exactly the repair work the peak exists to prevent.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress", "drill"],
      }),
    ],
    assignment: {
      title: "Peak-mapped and defended",
      instructions:
        "Choose a two-sentence opinion answer you have prepared for Part 3. Write it out with the carrier words in capitals, name the single word that should take the strongest beat, and explain in two or three sentences what a listener should understand when you place that beat — including one contrastive correction you could deliver with the same answer if the examiner summarised your view wrongly.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Highlight the carriers in one short article paragraph each day and read it aloud twice — once hammering the peaks, once gliding — recording the second reading only.",
      "Write three one-sentence corrections for imaginary misunderstandings about your own schedule, each with the corrected word in capitals, and say them aloud until the peak survives speed.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-intonation",
    title: "Intonation",
    description:
      "The melody that rides above the words: falling tones that close statements, rising tones that open questions and lists, the fall-rise of qualified agreement — and why a flat monotone is the single biggest intelligibility risk in the test.",
    objectives: [
      "close statements and wh-questions with a falling tone and open yes/no questions with a rise",
      "use the fall-rise tone to signal qualification, hesitation or an unfinished point",
      "keep your voice moving so attitude — interest, politeness, doubt — arrives with your words",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Words carry propositions; melody carries the relationship between you, the words and the listener. English moves its pitch constantly, and every listener reads that movement — for whether you finished, whether you are sure, whether you care. The good news is that your first language already has melody; the work here is learning where English expects its rises and falls, and noticing when your nerves flatten your voice into the single pattern that costs the most: monotone.",
        beforeYouStart: [
          "You can place the beat on a word and on a sentence's carrier words from the two previous lessons.",
          "You are willing to hum, exaggerate and generally perform while practising — intonation cannot be installed quietly.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the whole test, with the highest stakes in Part 2's two minutes and Part 3's opinion exchanges"],
          ["Task & question types", "Long-turn narration, listing several points, agreeing with reservations, answering yes/no questions directly"],
          ["What is assessed", "Pronunciation — intonation is named alongside stress throughout the descriptors, and monotone delivery keeps the band low regardless of vocabulary"],
          ["Why this matters", "A listener who cannot hear where your sentences finish, or how committed you are to them, does hard work for every line you speak"],
        ],
      },
      { type: "heading", text: "Component 1 — Three tones that run English" },
      {
        type: "text",
        text: "English runs mostly on three tunes. The falling tone steps down at the end of the unit and closes it: statements, wh-questions and final decisions all fall, and the fall tells the listener that the thought is complete and you stand behind it. The rising tone steps up and leaves the door open: yes/no questions rise, items in a list rise one after another, and a rise on a statement invites the listener to respond or continue. The fall-rise falls and then lifts — the 'yes, but' tune — and it colours a word with reservation: something is true, and something else qualifies it. Say 'well' with a fall-rise and your listener already knows a qualification is coming before you have chosen the words for it.",
      },
      {
        type: "table",
        title: "The three tunes and their day jobs",
        headers: ["Tone", "What it tells the listener", "Where it works"],
        rows: [
          ["Falling (steps down)", "The thought is finished, and I am settled about it", "Statements, wh-questions, the last item of any list, final decisions"],
          ["Rising (steps up)", "The thought stays open, and I want your involvement", "Yes/no questions, non-final list items, polite offers, requests for a response"],
          ["Fall-rise (down, then up)", "Partly yes — a reservation is on its way", "Qualified agreement, hedged opinions, signalling that more of the point is still to come"],
          ["Level and flat (no movement)", "Very little — and that silence is the problem", "Reserve it for the small joins between idea groups, never for whole answers"],
        ],
      },
      {
        type: "audio",
        label: "Listen: falling tones closing thoughts",
        mode: "tts",
        text: "I grew up near the coast. Where did you grow up?",
        rate: 0.85,
      },
      {
        type: "audio",
        label: "Listen: rising tones keeping doors open",
        mode: "tts",
        text: "Do you work near here? Would you like the window seat?",
        rate: 0.85,
      },
      { type: "heading", text: "Component 2 — Monotone, and what it costs" },
      {
        type: "text",
        text: "Under exam pressure, voices flatten. The pitch range shrinks until every sentence arrives on the same narrow band, and the listener loses three signals at once: where sentences end, which words mattered, and how the speaker feels about the content. A monotone two-minute turn can be perfectly grammatical, ambitious in vocabulary and completely exhausting to follow — the listener must supply all the structure the voice refused to carry. Examiners hear flat delivery constantly, and whatever band estimate it invites, the cause is always the same: the melody stopped doing its share of the meaning. The repair is not performing; it is letting your voice do what it does in your first language when you care about a topic. Attitude travels on pitch: interest lifts it, doubt bends it, politeness softens its edges — and none of that costs a single word of your prepared language.",
      },
      {
        type: "steps",
        title: "Track the melody until it is yours",
        intro: "Four moves from hearing a tune to owning it.",
        steps: [
          {
            title: "Move 1: Hum the sentence",
            text: "Take any model sentence and hum it without words — da-DA-da-dum — letting your hum trace where the pitch rises and falls. Humming removes every sound-level worry and isolates the tune, which is the thing this lesson is actually teaching.",
            examples: [
              { english: "The three-city list hummed without words: three rising humps and one final drop.", note: "The list's shape is easier to feel than to describe." },
            ],
          },
          {
            title: "Move 2: Shadow the model",
            text: "Play the audio and speak along a half-second behind it, copying the rises and falls as exactly as you can, exaggeration welcome. Shadowing borrows a melody the way copying handwriting borrows a style — your own hand keeps it afterwards.",
          },
          {
            title: "Move 3: Mark arrows on your script",
            text: "Draw a small ↘ at the end of closing sentences, ↗ at open questions and non-final list items, and ↘↗ on words you want to colour with reservation. The arrows turn melody into something your eyes can check while the mouth rehearses.",
            examples: [
              { english: "Script line: 'I like the idea ↘↗ … but the cost worries me ↘.'", note: "The reservation tune before the but, the closing fall after it." },
            ],
          },
          {
            title: "Move 4: Record against your arrows",
            text: "Record the script at test pace and listen only for pitch movement: does the voice actually rise where the arrows rise? Arrows that the recording ignores are wishes, not habits — re-shadow that sentence and record it again until the tune survives speed.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: a list that rises, rises, then falls",
        mode: "tts",
        text: "We visited Rome, Vienna, and finally Prague.",
        rate: 0.85,
      },
      {
        type: "audio",
        label: "Listen: the fall-rise of a qualified yes",
        mode: "tts",
        text: "Well, I like the idea… but the cost worries me.",
        rate: 0.85,
      },
      {
        type: "example",
        title: "Melody doing meaning — seven tunes at work",
        items: [
          { english: "Part 1: 'I usually cycle to work ↘.' — the fall telling the examiner the sentence is complete and you are settled about it.", note: "The closing fall is the full stop of spoken English.", domain: "exam" },
          { english: "Part 2, a trip: 'We saw temples ↗, night markets ↗, and a huge lake ↘.' — the list rising twice and landing on the final item.", note: "Listeners count your points by your rises; the fall tells them the list is over.", domain: "exam" },
          { english: "Part 3: 'Technology helps, I suppose ↘↗ … though it leaves people more isolated ↘.' — the reservation tune preparing the contrast before the word 'though' arrives.", note: "The fall-rise buys a moment of thought and signals that half the opinion is still in transit.", domain: "exam" },
          { english: "Opening a Part 3 turn with 'Oh, that's an interesting question ↗' — genuine interest carried by the lift at the end.", note: "Attitude is audible before vocabulary is; a flat 'interesting' says the opposite.", domain: "exam" },
          { english: "A work call opening: 'Would you be able to send it today ↗?' — the rise that turns an instruction into a request.", note: "Politeness in English lives largely in the melody, not the words.", domain: "work" },
          { english: "A learner shadows one minute of a talk-show host each evening, matching the host's rises and falls at half volume.", note: "Borrowing a melody daily is faster than inventing one under pressure.", domain: "study" },
          { english: "Telling a friend 'Really? ↗' about good news and 'Really. ↘' about a rumour — two words, two tunes, two meanings.", note: "English listeners trust the tune over the dictionary when the two disagree.", domain: "life" },
        ],
      },
      {
        type: "mistakes",
        title: "Intonation mistakes corrected",
        items: [
          { wrong: "A two-minute Part 2 turn delivered on one narrow band of pitch — every sentence landing where the last one ended.", right: "The same turn with rises on the build-up and a clear fall on each closing sentence.", reason: "Monotone forces the listener to rebuild the sentence structure and the speaker's attitude from vocabulary alone, which is the heaviest listening work there is." },
          { wrong: "'I definitely prefer working from home ↗?' — the statement closing with a rise, as if asking permission for the opinion.", right: "'I definitely prefer working from home ↘.' — the statement closing with a fall.", reason: "A rising close turns commitment into a question, so examiners hear opinions you are not sure of even when your words are firm." },
          { wrong: "Qualifying with a flat tone — 'it is convenient, but lonely' — so the reservation arrives as a second, unrelated fact.", right: "Colouring 'convenient' with a fall-rise before the 'but' clause closes with a fall.", reason: "The fall-rise tells the listener that a but is coming, so the two halves of the sentence arrive as one connected thought instead of two separate announcements." },
        ],
      },
      {
        type: "four-skills",
        title: "One Part 3 opinion, tuned and closed",
        reading: {
          text: "Question material in the style of the test: a Part 3 examiner asks, 'Is remote work better for teams?' A candidate answers: 'It depends on the team ↘↗. Remote work saves hours of commuting ↗, gives people quiet time for deep tasks ↗, and lets companies hire from anywhere ↘. But I think teams still need to meet in person ↘↗, because trust is built face to face ↘.'",
          task: "Name the tone on each sentence ending, and say what the two fall-rises prepare the listener for.",
        },
        writing: {
          task: "Write your own three-sentence answer to the same question with ↘, ↗ and ↘↗ arrows placed, then add two lines explaining why your closing sentence must end in a fall for the examiner to hear a finished opinion.",
          guide: [
            "Open with a qualified position and mark the fall-rise.",
            "Build a list of two or three benefits with rises on the non-final items.",
            "Close with a committed final sentence and mark the fall.",
            "Explain what the final fall tells the examiner about your commitment.",
          ],
          model: "Marked answer: 'For me, it mostly depends on the person ↘↗. Remote work suits writers ↗, analysts ↗, and anyone whose day is deep focus ↘. Still, I would not run a whole company that way ↘↗, because new people learn by watching others ↘.' The final fall matters because it closes the whole turn: an examiner hearing it knows the position is finished and held, while a rise at that moment would leave the opinion sounding borrowed or uncertain.",
        },
        listening: {
          script: "Tutor: Your Part 2 was fluent — good vocabulary, clear structure — but I want you to hear what I heard. Play your recording with the volume low, so you cannot catch the words. Notice anything? You cannot tell where your sentences end. Every line sits on the same pitch, so the examiner has to find your full stops by grammar alone. Now record the first thirty seconds again and let your voice drop on the last word of every sentence — just that. The information is already good; give it the shape it is missing.",
          task: "What does the tutor ask the candidate to notice at low volume, and what single change does she prescribe?",
        },
        speaking: {
          task: "Read the remote-work answer from this lesson's reading block aloud twice: once exaggerating every arrow, once at test pace. Then answer 'Do you prefer studying alone or with others?' in two sentences, ending with a clear fall.",
          frames: [
            "Exaggerated pass: 'It depends on the TEAM ↘↗…'",
            "Test-pace pass: the full four sentences at speaking-test speed.",
            "Fresh answer closing: '…and that is why I prefer studying with others ↘.'",
          ],
          checklist: [
            "Did your list items rise and the final item fall?",
            "Did your qualified opinions show the fall-rise before the contrasting word?",
            "Did your final sentence close with a fall you could hear from the next room?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Structure made audible", "Falls mark where thoughts end and rises mark where they continue, so the listener hears the sentence boundaries instead of deducing them."],
          ["Commitment made audible", "Closing opinions with a fall shows the examiner a held position, while the fall-rise honestly marks the qualifications every complex idea deserves."],
          ["Attitude made audible", "Lifted pitch carries interest and warmth, which colours the whole answer before a single content word lands."],
          ["Nerves managed", "Exaggerated rehearsal gives the voice a wider range to shrink from under pressure, so even a nervous delivery keeps some movement."],
          ["Accent neutrality", "The tunes live on relative pitch movement, not on any country's exact pitches, so they transfer into every accent without changing it."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose the closing sentence of your prepared Part 2 in advance and mark its final fall, so the long turn always ends on a note of completion."],
          ["While the clock runs", "Let lists rise until their last item, and let opinions close with falls; when you qualify, colour the qualifying word with a fall-rise instead of apologising in words."],
          ["If you are stuck", "Buy thinking time with a fall-rise 'Well…' — the tone honestly signals 'more is coming' and keeps the floor with you."],
          ["Final minutes", "Replay one recording with the volume low enough to lose the words, and check you can still hear the ends of your sentences."],
        ],
      },
      {
        type: "summary",
        points: [
          "English runs on three tunes: the falling tone closes statements, wh-questions and final list items; the rising tone opens yes/no questions and non-final list items; the fall-rise marks qualification and unfinished business.",
          "Monotone is the single biggest intelligibility risk in the test, because it deletes sentence boundaries, emphasis and attitude all at once.",
          "Attitude travels on pitch: interest lifts the voice, doubt bends it, politeness softens it — before any vocabulary is heard.",
          "Track a melody in four moves — hum it, shadow it, mark arrows, record against the arrows — and treat arrows the recording ignores as wishes rather than habits.",
          "Test the finished product at low volume: if you can still hear where sentences end, your melody is carrying its share of the meaning.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the sentence-stress lesson and one from the word-stress lesson.",
        items: [
          { question: "What is contrastive stress for, as the previous lesson used it?", options: ["Making every sentence louder for the back of the room", "Correcting or contradicting a listener with one hammered word", "Slowing the speaker down when vocabulary runs short"], correctIndex: 1, explanation: "One peak on the corrected word revises exactly the right part of the listener's understanding, which is cheaper than restating the whole sentence.", from: "Sentence stress" },
          { question: "Which words take the beat in a normal English sentence?", options: ["The grammar words: articles, prepositions and pronouns", "The carriers: nouns, main verbs, adjectives, most adverbs and negations", "Whichever word is spelled with the most letters"], correctIndex: 1, explanation: "Carriers hold the message, so they take length, loudness and pitch while the scaffolding compresses to bridges between them.", from: "Sentence stress" },
          { question: "How do the twins REcord and reCORD divide their stress?", options: ["Both take the early beat", "The noun beats early and the verb beats late", "Both take the late beat"], correctIndex: 1, explanation: "Grammar decides the beat: things you keep are REcords, and the action of recording is reCORDed, which is why the pair is worth learning together.", from: "Word stress" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Your Part 3 opinion is finished and you are committed to it. Which closing tone does the job?",
        hints: ["Which tune tells the listener 'this thought is complete and I stand behind it'?"],
        options: [
          { id: "a", text: "A falling tone, stepping down at the end of the sentence." },
          { id: "b", text: "A rising tone, stepping up at the end of the sentence." },
          { id: "c", text: "A completely level tone, holding the same pitch to the last syllable." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A falling tone, stepping down at the end of the sentence.",
          "The fall is the spoken full stop of English: it closes statements, wh-questions and final decisions, telling the examiner the position is finished and genuinely held.",
          "(b) turns the statement into a question or an invitation, undermining the commitment your words just made; (c) removes the boundary entirely and leaves the listener hunting for the sentence's end.",
        ),
        tags: ["speaking", "pronunciation", "intonation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the examiner's comment and identify the pattern behind it.",
        hints: ["Listen in your head for where each sentence ends — can you hear any ends at all?"],
        passageTitle: "The uncertain-sounding candidate",
        passage: "After a Part 3 discussion about city transport, the examiner wrote: 'Good range of ideas and relevant examples. Delivery somewhat unclear in intention: several strong opinions sounded like questions, and I could not always hear where one point finished and the next began.' The candidate had used ambitious vocabulary throughout and reported feeling confident about every opinion she expressed.",
        question: "What delivery habit most likely produced that comment?",
        options: [
          { id: "a", text: "A rising tone at the end of statements, so firm opinions arrived as questions and sentence boundaries stayed invisible." },
          { id: "b", text: "Vocabulary that was too ambitious for a spoken discussion." },
          { id: "c", text: "Speaking too quietly for the examiner to hear the endings." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A rising tone at the end of statements, so firm opinions arrived as questions and sentence boundaries stayed invisible.",
          "The comment names both symptoms of one habit: opinions sounding like questions is the rising close, and invisible boundaries is what happens when no sentence ends in a fall.",
          "(b) is contradicted by the examiner praising her ideas and examples; (c) would produce a complaint about audibility, not about intention and boundaries.",
        ),
        tags: ["speaking", "pronunciation", "intonation"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the tone table.",
        hints: [],
        question: "Name the three main English tones and give each one's core job in a single phrase.",
        acceptedAnswers: [
          "falling closes statements, rising opens questions and lists, fall-rise signals reservation",
          "fall = finished and certain, rise = open and inviting, fall-rise = yes-but qualified",
          "a fall ends thoughts, a rise continues or asks, a fall-rise prepares a qualification",
          "falling for completion, rising for openness, fall-rise for partly-yes with a but coming",
        ],
        keywords: ["falling", "rising", "fall-rise"],
        feedback: fb(
          "Falling closes and commits, rising opens and invites, fall-rise qualifies.",
          "Three tunes cover nearly all of English melody: endings drop, doors rise, and reservations dip before they lift — the listener hears which of the three you chose before processing your words.",
          "Answers that give the rise the closing job, or the fall the questioning job, have swapped the two most basic tunes the table drilled.",
        ),
        tags: ["speaking", "pronunciation", "intonation", "tones"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why does this programme call monotone the biggest intelligibility risk rather than merely a stylistic weakness?",
        hints: [],
        options: [
          { id: "a", text: "Because flat delivery deletes sentence boundaries, emphasis and attitude at once, forcing the listener to rebuild all three from vocabulary alone." },
          { id: "b", text: "Because examiners are instructed to penalise quiet speakers more than loud ones." },
          { id: "c", text: "Because a monotone voice makes grammar mistakes more likely as the answer continues." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because flat delivery deletes sentence boundaries, emphasis and attitude at once, forcing the listener to rebuild all three from vocabulary alone.",
          "Melody carries structural and emotional meaning that words alone must then replace; removing it multiplies the listener's workload even when every sentence is grammatical and well chosen.",
          "(b) invents an instruction about volume, which is a different matter entirely; (c) reverses cause and effect — monotone follows pressure, it does not create errors.",
        ),
        tags: ["speaking", "pronunciation", "intonation", "monotone"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Perform the three tunes on their home ground, then close with a committed fall.",
        hints: ["Exaggerate the tunes past what feels natural — rehearsal range is wider than performance range."],
        situation: "Three-tune drill. Say the reservation with a fall-rise, deliver the list with rising items and a falling final item, then answer the question with a sentence that ends in a clear fall.",
        targetPhrases: ["Well, I like cities ↘↗ … but they tire me out", "I visited Lisbon ↗, Porto ↗, and finally Madrid ↘", "On balance, I would rather live near the sea ↘"],
        mustSay: ["Well", "Lisbon", "sea"],
        feedback: fb(
          "A recording containing the reservation, the three-city list and the closing statement, each on its home tune.",
          "Practising the three tunes on their natural home grounds — qualification, list, commitment — builds the default settings your voice will fall back on when the test starts.",
          "Recordings where every sentence lands on one pitch show the rehearsal range has not yet been spent; exaggerate further and re-record.",
        ),
        tags: ["speaking", "pronunciation", "intonation", "drill"],
      }),
    ],
    assignment: {
      title: "Tuning a real answer",
      instructions:
        "Take a four-sentence Part 3 answer you have already written on any topic. Write it out with ↘, ↗ and ↘↗ arrows marking the tune you want on each sentence ending, record it at test pace, and then report: which arrows survived the recording, which were ignored, and what the final sentence's tone tells the examiner about how you hold that opinion.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Shadow one minute of any lively English speaker daily — podcast host, commentator, interviewer — matching their rises and falls at half volume, then record thirty seconds of your own speech and listen for borrowed melody.",
      "Record the same short answer twice in one sitting: once deliberately flat, once with full tune, and listen back to back until you can hear what the flat version costs.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-connected",
    title: "Connected speech",
    description:
      "Why natural English sounds like one long word: consonant-to-vowel linking, sounds softening into their neighbours, and sounds vanishing altogether — plus how to hear joins in others and use them lightly yourself.",
    objectives: [
      "recognise linking, assimilation and elision when fluent speakers use them",
      "join final consonants to following vowels so your speech flows instead of hopping",
      "use connected speech lightly, keeping it a by-product of accuracy rather than a performance",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every learner has had the experience: a sentence made entirely of words they know arrives at full speed and sounds like a single unknown word. The words did not change — the seams between them did. Fluent English speakers run words together, soften sounds to match their neighbours and quietly drop others entirely, and this lesson names those three processes so they stop being mysteries. You will learn to hear them in others first, then invite them lightly into your own speech, where they arrive as the natural result of relaxation rather than as something you perform.",
        beforeYouStart: [
          "You can already hear where a sentence's stressed peaks fall, from the sentence-stress lesson.",
          "You can transcribe or shadow short stretches of fast English without panicking about missing words.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking for delivery, and Listening as a direct beneficiary — the examiner's questions join exactly like everyone else's English"],
          ["Task & question types", "Understanding Part 3 questions at first hearing; delivering Part 2 turns that flow; catching linked words in all four Listening parts"],
          ["What is assessed", "Pronunciation — the descriptors' top bands explicitly expect connected speech features, used flexibly and without costing clarity"],
          ["Why this matters", "Speech delivered as isolated words reads as effortful even when accurate, and joined questions you cannot parse cost you a whole answer"],
        ],
      },
      { type: "heading", text: "Component 1 — Three things that happen at the seams" },
      {
        type: "text",
        text: "When one word ends and the next begins, English refuses to leave a gap. Linking is the simplest case: a final consonant hops over to start the next word when that word begins with a vowel, so an apple becomes a-napple and turn it off becomes tur-ni-toff. Assimilation goes further and changes the consonant to suit its new neighbour: the n of ten moves towards the b of bikes and comes out as m, because m and b share the same lip position — ten bikes arrives as tem bikes. Elision is the boldest: a sound simply disappears when the mouth finds it inconvenient, so the t of most vanishes before people and the t of next vanishes before station, which is why the announcement says nex-station. None of this is laziness; it is English saving effort at the seams while spending lavishly on the stressed peaks.",
      },
      {
        type: "table",
        title: "The three seam processes",
        headers: ["Process", "Careful version", "Connected version", "What happens"],
        rows: [
          ["Linking", "an apple", "a-napple", "The final consonant attaches to the vowel that follows it"],
          ["Linking", "turn it off", "tur-ni-toff", "Every seam between consonant and vowel closes"],
          ["Assimilation", "ten bikes", "tem bikes", "The final sound changes to match the place of the next sound"],
          ["Assimilation", "green park", "greem park", "The n shifts to m before another lip sound"],
          ["Elision", "most people", "mos people", "A final consonant, usually t or d, is dropped as too costly to say"],
        ],
      },
      {
        type: "audio",
        label: "Listen: words joining at the seams",
        mode: "tts",
        text: "an apple. turn it off. next station, please.",
        rate: 0.85,
      },
      {
        type: "audio",
        label: "Listen: sounds softening into their neighbours",
        mode: "tts",
        text: "ten bikes. green park. good boy.",
        rate: 0.85,
      },
      { type: "heading", text: "Component 2 — Why this lesson pays you twice" },
      {
        type: "text",
        text: "First, your ear. Every question the examiner asks you is delivered at natural speed with all three processes running, and a candidate who has never studied joins mishears 'What are the main causes?' as a single mysterious word starting with whad. Training your ear on the seams is listening training disguised as pronunciation training, and it shows up in the Listening paper too, where answer words arrive welded to their neighbours. Second, your mouth. A light touch of linking — final consonants joining forward, nothing forced — makes delivery flow, and flow is what the fluency criterion listens for. But note the word lightly: connected speech in your own mouth should emerge from relaxed accuracy, never from dropping endings or mumbling. The rule of thumb is simple: let seams close where they naturally close, and never sacrifice a consonant that carries meaning, like the d of played or the s of works.",
      },
      {
        type: "steps",
        title: "Hear it, mark it, say it, keep only the light joins",
        intro: "A routine that trains the ear first and the mouth second.",
        steps: [
          {
            title: "Step 1: Hunt the joins in real audio",
            text: "Take thirty seconds of any natural English recording — a podcast, an interview, this programme's own audio blocks — and listen only for seams: moments where two words melt into one sound. Do not transcribe yet; just count the joins. Counting forces the ear to attend to boundaries instead of vocabulary.",
            examples: [
              { english: "Thirty seconds of a travel podcast yields eight counted joins, including 'lo-da places' for 'loads of places'.", note: "The count matters more than the phonetics at this stage." },
            ],
          },
          {
            title: "Step 2: Mark the seams on the transcript",
            text: "Read along with the transcript and draw a small join mark between every pair of words that melted: tur-ni-toff, a-napple. Now the eye can check what the ear found, and the three processes start sorting themselves into their categories.",
          },
          {
            title: "Step 3: Say the joined version slowly",
            text: "Read the transcript aloud with the joins in place but at slow speed, letting every consonant-vowel seam close gently. Slow joining teaches the movement without the blur; the blur comes later from speed, not from effort.",
            examples: [
              { english: "The station sentence practised as 'I a-sked fer a cu-pof tea a-the nex-station' at half pace.", note: "Half pace keeps every meaning consonant alive while the seams close." },
            ],
          },
          {
            title: "Step 4: Speed up and keep only the light joins",
            text: "Return to normal pace and let the joins that survive be the ones that cost nothing: final consonants meeting initial vowels. If speeding up makes any ending vanish — the d of a past tense, the s of a plural — slow back down, because a lost meaning consonant is a grammar error wearing a fluency costume.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: a full sentence of joins at natural pace",
        mode: "tts",
        text: "I asked for a cup of tea at the next station.",
        rate: 0.9,
      },
      {
        type: "example",
        title: "Joins in the wild — seven sightings",
        items: [
          { english: "A Part 3 question arrives as 'Wha-dya think abou-dhat?' — and a candidate trained on joins hears 'What do you think about that?' on the first pass.", note: "Ear training on seams converts mysterious words into known words instantly.", domain: "exam" },
          { english: "A candidate delivers 'It was a bi-dof a shock, honestly' with one light join in Part 2, and the turn flows without a single ending lost.", note: "Light linking adds flow; the endings stay alive, which is the whole trick.", domain: "exam" },
          { english: "The station announcement says 'nex-station: Central' — and a traveller who knows elision hears the stop and stands up in time.", note: "Elision is public infrastructure: announcements drop their t's everywhere.", domain: "life" },
          { english: "A fast colleague says 'gimme a couple-a minutes' on a call, and the learner who studied joins laughs at the joke instead of asking for a repeat.", note: "Casual speech at work runs on exactly these seams.", domain: "work" },
          { english: "A learner transcribes one podcast paragraph a day and marks the joins in pencil, watching the marked count climb as the ear tunes.", note: "Daily seam-marking is measurable, which keeps the habit alive.", domain: "study" },
          { english: "'A lot of work' arrives as 'a-lotta work' from a friend, and the phrase stops sounding like a vocabulary gap.", note: "Common chunks wear their joined forms permanently in real speech.", domain: "life" },
          { english: "In a Listening task, 'eighteenth' and 'eightieth' arrive welded to neighbouring words, and the trained ear still separates them.", note: "Joins trained on purpose stop destroying exactly the words that carry answers.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Connected-speech mistakes corrected",
        items: [
          { wrong: "'It was. A really. Interesting. Trip.' — every word an island, with a small silence at every seam.", right: "'It was a-rea-lly an-interesting trip.' — final consonants closing gently into the vowels that follow.", reason: "Word-island delivery makes the speaker work hard for no meaning gain, and listeners experience the constant stopping as effortful rather than careful." },
          { wrong: "Overdoing the joins until endings die: 'I ask-er for help' with the -ed of asked gone and the help barely breathing.", right: "'I asked her for help.' — the seam closes lightly and both meaning consonants survive it.", reason: "Connected speech in your own mouth is a by-product of relaxation, and a dropped past-tense ending is a grammar loss, not a fluency gain." },
          { wrong: "Missing a linked examiner question and concluding 'the examiner used words I don't know'.", right: "Replaying the question and finding the join: 'Wha-d'you think?' was four known words travelling together.", reason: "Most fast-speech comprehension failures are seam failures, not vocabulary failures, and the ear can be trained on joins in weeks rather than years." },
        ],
      },
      {
        type: "four-skills",
        title: "One announcement, decoded and re-worn",
        reading: {
          text: "Listening material in the style of the test: a recorded announcement says, at natural speed, 'The next station is Riverside. Passengers for the museum should change at the following stop, where connections are available to the city centre.' A learner writes down what she heard: 'nex-station is Riverside… Passengers for the museum should change at the following stop, where connections are available to the ci-city centre.'",
          task: "Find the elision and the link in her transcript, and name which process each one shows.",
        },
        writing: {
          task: "Write the announcement's first two sentences out in careful form, then write them again with join marks and softened sounds marked, and finish with one sentence on which joins you would actually keep in your own delivery.",
          guide: [
            "Careful form first: 'The next station is Riverside.'",
            "Mark the elision: nex-station.",
            "Mark the vowel links: station-is, Riverside (check its final sound).",
            "Decide which joins are light enough to keep at test pace.",
          ],
          model: "Careful: 'The next station is Riverside. Passengers for the museum should change at the following stop.' Connected: 'The nex-station i-ZRiverside. Passengers fer the museum should change a-the following stop.' In my own delivery I keep the consonant-vowel links — station is, change at — because they cost nothing and add flow, and I leave the elision of nex-station to the announcers, whose job is speed rather than clarity.",
        },
        listening: {
          script: "Tutor: Let's replay the question you missed in Part 3. Listen once more — 'So wha-d'you think makes a city livable?' Three joins in seven words: the so glues to the what, the do melts into you, and think pulls makes across the seam. Now that you can see the seams, play it again. Notice how the words you knew all along are sitting right there inside the joined sounds? That is what ear training does: it returns your own vocabulary to you at speed.",
          task: "Which three joins does the tutor identify in the question, and what does she say ear training gives back?",
        },
        speaking: {
          task: "Say the announcement's two sentences twice: once in careful island form with tiny breaks, once with light consonant-to-vowel links at test pace. Record the second take and check every meaning consonant survived.",
          frames: [
            "Island pass: 'The. Next. Station. Is. Riverside.'",
            "Linked pass: 'The nex-station is Riverside.'",
            "Self-report: 'The join that felt most natural was …'",
          ],
          checklist: [
            "Did station is close its seam without the s vanishing?",
            "Did change at join lightly in the fast pass?",
            "Did every plural and past-tense ending survive the speed?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Two-way payoff", "The same knowledge that lets you join words lightly also lets you decode fast questions, so one routine feeds both the speaking and the listening sides of the test."],
          ["Seams first, speed second", "Practising joins slowly keeps every meaning consonant alive while the mouth learns the movement, so fluency never arrives at grammar's expense."],
          ["Natural, not performed", "Light linking mirrors what relaxed accurate speakers do anyway, which is why it sounds like ease rather than an accent costume."],
          ["Measurable practice", "Counting and marking joins turns a vague listening habit into a daily score the learner can watch climb."],
          ["Boundary protection", "The routine explicitly bans joins that swallow endings, keeping plurals and past tenses audible no matter how fast the delivery becomes."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Warm up with one sentence of light linking so your mouth arrives at the test already running words together a little."],
          ["While the clock runs", "Let final consonants lean into following vowels as you speak, and if an examiner's question arrives welded together, replay it in your head as known words travelling in a group."],
          ["If you are stuck", "Say 'Sorry, could you say that again?' without apology — even native speakers miss joined fast speech, and asking once costs less than guessing."],
          ["Final minutes", "After practice sessions, check one recording for two things at once: are the seams closing, and are all the endings still alive?"],
        ],
      },
      {
        type: "summary",
        points: [
          "Three processes run at the seams of natural English: linking (a final consonant attaches to a following vowel), assimilation (a final sound shifts to match its neighbour) and elision (a costly consonant, usually t or d, disappears).",
          "Fast English sounds like one long word because the seams close — not because the vocabulary changed.",
          "Connected speech pays twice: the same training that lets you decode fast questions also lets your own delivery flow.",
          "Use joins lightly and let them grow from relaxed accuracy; a dropped ending is a grammar loss dressed as fluency.",
          "Train in the order hear, mark, say slowly, then speed up — and keep only the joins that never eat a meaning consonant.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the intonation lesson and one from the sentence-stress lesson.",
        items: [
          { question: "Which tone does English use to signal a reservation before the words say so?", options: ["A high flat tone", "The fall-rise — dipping down and lifting at the end of the key word", "A rising tone held for two full seconds"], correctIndex: 1, explanation: "The fall-rise is the 'yes, but' tune: it colours a word with qualification and warns the listener that more of the point is still coming.", from: "Intonation" },
          { question: "According to the intonation lesson, what does a listener lose when delivery is monotone?", options: ["Only the vocabulary", "Sentence boundaries, emphasis and attitude all at once", "Nothing, as long as the grammar holds"], correctIndex: 1, explanation: "Flat delivery deletes three signals simultaneously, forcing the listener to reconstruct structure and feeling from the words alone.", from: "Intonation" },
          { question: "In sentence stress, which information takes the strongest beat of all?", options: ["The oldest information in the exchange", "The newest information the listener does not yet have", "The longest word in the sentence"], correctIndex: 1, explanation: "English spends its loudest resource on whatever updates the listener, which is why corrections hammer the corrected detail specifically.", from: "Sentence stress" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. 'Most people' arrives from a fast speaker as 'mos people'. Which process is at work?",
        hints: ["Ask whether a sound changed shape, moved house, or left entirely."],
        options: [
          { id: "a", text: "Elision — the final t of most is dropped because it costs too much effort before the p of people." },
          { id: "b", text: "Linking — the t of most attaches to the vowel of people." },
          { id: "c", text: "Assimilation — the t of most changes into a completely different sound to match people." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Elision — the final t of most is dropped because it costs too much effort before the p of people.",
          "Elision deletes a consonant outright when the mouth finds it inconvenient, and t is its favourite victim, especially when the next word begins with another consonant.",
          "(b) misfires because people begins with a consonant, leaving the t nothing to attach to; (c) describes a sound changing shape rather than vanishing.",
        ),
        tags: ["speaking", "pronunciation", "connected-speech"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the coaching note and diagnose the real problem.",
        hints: ["Compare the words the candidate heard with the words the examiner actually said."],
        passageTitle: "The mystery question",
        passage: "In a Part 3 discussion about holidays, the examiner asked: 'What do you think makes a trip memorable?' The candidate froze and later told her tutor: 'She used some phrase I have never learned — something like whad-yer-fink.' The tutor replayed the recording, wrote the question on paper, and the candidate read it without difficulty and answered it fluently in writing.",
        question: "What does the reading-versus-listening contrast reveal?",
        options: [
          { id: "a", text: "A vocabulary gap: the phrase was genuinely beyond her level and belongs on her word list." },
          { id: "b", text: "A seam problem: known words joined at their boundaries, and her ear needs join training rather than new words." },
          { id: "c", text: "A speed problem: the examiner spoke unusually fast, and any candidate would have missed it." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A seam problem: known words joined at their boundaries, and her ear needs join training rather than new words.",
          "Reading the question easily while hearing it as one unknown word is the signature of a connected-speech gap: the vocabulary was present all along, and only the boundaries went missing.",
          "(a) is contradicted by her fluent written answer; (c) is contradicted by the routine speed the examiner used in the replay.",
        ),
        tags: ["speaking", "pronunciation", "connected-speech"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the seam table.",
        hints: [],
        question: "Name the three connected-speech processes and match each with one example from this lesson.",
        acceptedAnswers: [
          "linking as in an apple becoming a-napple, assimilation as in ten bikes becoming tem bikes, elision as in most people becoming mos people",
          "linking: turn it off to tur-ni-toff; assimilation: green park to greem park; elision: next station to nex-station",
          "consonant to vowel linking, sounds changing to match neighbours, and sounds dropping — a-napple, tem bikes, mos people",
          "linking a-napple, assimilation tem bikes, elision nex-station",
        ],
        keywords: ["linking", "assimilation", "elision"],
        feedback: fb(
          "Linking joins consonants to following vowels, assimilation shapes sounds to their neighbours, elision drops them entirely.",
          "The three processes account for nearly everything strange at full speed, and each owns one household example: a-napple, tem bikes, mos people.",
          "Answers that let elision delete sounds and assimilation change them have swapped the two, or have given linking the power to vanish consonants it does not have.",
        ),
        tags: ["speaking", "pronunciation", "connected-speech", "processes"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. How much connected speech should you deliberately put into your own test delivery?",
        hints: [],
        options: [
          { id: "a", text: "As much as possible — examiners reward every join, so speed and blending should be maximised." },
          { id: "b", text: "A light touch: let final consonants link into following vowels where it costs nothing, and never let a join swallow a meaning-bearing ending." },
          { id: "c", text: "None — clear test speech is careful speech, and joins belong only in casual conversation." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A light touch: let final consonants link into following vowels where it costs nothing, and never let a join swallow a meaning-bearing ending.",
          "The descriptors reward flexible, natural use, and light linking delivers that while protecting the endings that carry tense and number; the two extreme policies each lose something the criterion wants.",
          "(a) trades grammar for fluency and mumbles its plurals away; (c) produces the word-island delivery that reads as effortful even when accurate.",
        ),
        tags: ["speaking", "pronunciation", "connected-speech", "policy"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Say the joined phrases slowly, then the full sentence at natural pace with light links.",
        hints: ["Close the seams gently — tur-ni-toff — but keep the d of asked and the t of next visible in the slow pass."],
        situation: "Seam drill. Deliver each joined phrase slowly with the seam closed, then deliver the full sentence at the pace you would use in a Part 2 answer, keeping every meaning consonant alive.",
        targetPhrases: ["turn it off — tur-ni-toff", "an apple — a-napple", "I asked for a cup of tea at the next station."],
        mustSay: ["turn", "apple", "station"],
        feedback: fb(
          "A recording containing turn it off, an apple and the full sentence, with seams closing lightly and every ending intact.",
          "The slow pass installs the join movement and the fast pass tests the rule this lesson stands on: flow may grow, but never at the cost of a consonant that carries meaning.",
          "Recordings where speed deletes the asked ending or the station t have let a fluency costume swallow a grammar fact; slow back down and rebuild the seam.",
        ),
        tags: ["speaking", "pronunciation", "connected-speech", "drill"],
      }),
    ],
    assignment: {
      title: "A day of joins",
      instructions:
        "Listen to thirty seconds of natural English audio and write down five joins you actually heard, naming the process at work in each — linking, assimilation or elision. Then choose two of those joins you could use lightly in your own speaking, and explain in a sentence each why they cost nothing to say, plus one join you would leave to native-speed announcers and why.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Mark the joins in one podcast paragraph a day for a week — pencil lines between melted words — and watch your marked count climb as the ear tunes.",
      "Record the same Part 2 answer twice a week: once with word-island delivery, once with light links, and compare which version is easier to listen to for a full two minutes.",
    ],
  },
];
