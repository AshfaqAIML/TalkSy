/**
 * Chapter 1B — Speaking foundations (Part B).
 *
 * The second five lessons of the Speaking Masterclass foundations chapter:
 * pronunciation as a scored criterion, vocabulary for live answers, grammar
 * accuracy in speech, natural answer extension and honest handling of
 * unfamiliar questions. Pronunciation teaching is accent-neutral throughout:
 * no national accent is treated as worth more than another — the criterion
 * rewards being easy to understand. Every band reference reads as an
 * estimate, and every strategy is taught as method and language, never as
 * sentences to memorise.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingFoundationsLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pronunciation-criterion",
    title: "Pronunciation: what the criterion really rewards",
    description:
      "The criterion decoded: intelligibility — being easy to understand — through word stress, sentence stress, intonation and connected speech. Accent-neutral throughout: no national accent is worth more than another, and what blocks understanding is misplaced stress, flat pitch and swallowed endings, never geography.",
    objectives: [
      "explain what the Pronunciation criterion pays for: ease of understanding, not any particular accent",
      "use word stress and sentence stress to carry meaning instead of hiding it",
      "add intonation range and finished word endings so listeners follow without strain",
      "diagnose your own recordings against the four features, one feature at a time",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Pronunciation is the criterion candidates misread most often — they hear 'accent' where the examiners read 'clarity'. Nothing in the marking scale asks where your accent is from, and nothing rewards trading it for another one. What the criterion measures is whether a listener can follow you without strain: which syllables you land on, which words you lift out of the sentence, whether your voice moves, and whether the ends of your words arrive. This lesson decodes those four features and shows you how to train them inside the accent you already own.",
        beforeYouStart: [
          "You can name the four criteria the examiner scores and their equal weight.",
          "You have recorded and replayed at least one spoken answer of your own.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — all three parts, every minute the recorder captures"],
          ["Task & question types", "Interview questions, the long turn and the discussion: continuous live speech, never read aloud"],
          ["What is assessed", "Pronunciation — how far stress, intonation and finished word endings make you easy to follow"],
          ["Why this matters", "One criterion in four rides on clarity alone, and it is the one most often wasted on accent worry"],
        ],
      },
      { type: "heading", text: "What the criterion actually pays for" },
      {
        type: "text",
        text: "Read the criterion as a question the examiner is quietly asking for eleven to fourteen minutes: how much effort does following this candidate cost? Every useful thing in the Pronunciation scale answers that question. Word stress that lands where the listener expects lets each word resolve instantly; sentence stress lifts the words that carry the point; intonation shows where one idea ends and the next begins; complete word endings deliver the grammar the ear needs. None of that is accent. A candidate speaking with a clear Delhi, Nairobi, São Paulo or Manchester accent can reach the same pronunciation levels as any other candidate, because the scale grades intelligibility — being easy to understand — and nothing else. Every band mention in this lesson is a reading of typical performances, not a promise.",
      },
      { type: "heading", text: "The four features, in order of payback" },
      {
        type: "steps",
        title: "From sounds to sense: the four features",
        steps: [
          { title: "Word stress: the syllable that unlocks the word", text: "Every multi-syllable word has one syllable the listener's ear expects to hear loudest. Put the energy there and the word is recognised even if its vowels are imperfect; put it elsewhere and the listener rebuilds the word from scratch, falling a phrase behind. The fix is not a new accent — it is knowing where each word you actually use carries its beat, which is a short list of your own high-frequency words, checkable in a dictionary in seconds.", examples: [{ english: "'Comfortable' said as COM-fort-a-ble resolves at once; said as com-for-TA-ble it sounds like a different, non-existent word and the listener waits for a word that never lands.", note: "The stressed syllable is the word's identity card." }] },
          { title: "Sentence stress: make the point audible", text: "English pushes meaning-carrying words — nouns, verbs, adjectives, negations — forward and lets small function words shrink. Stress the wrong words, or none, and every sentence arrives with the same flat weight. Contrastive stress is the sharpest tool of all: moving the beat onto one word repairs a misunderstanding instantly.", examples: [{ english: "'I said the BLUE folder, not the green one' — the stressed colour does all the correcting work in half a second.", note: "One moved beat can replace a whole clarifying sentence." }] },
          { title: "Intonation: the voice that shows the shape", text: "Pitch movement signals structure: falling pitch closes a statement, rising pitch opens uncertainty, a list or a yes-no question. A flat delivery flattens meaning with it — forty seconds of monotone sounds like one unfinished sentence, and a listener hunting for progression finds none. You need range, not melody: down at the end of finished points, up where something follows.", examples: [{ english: "A travel anecdote told with a rise on the surprising detail and a fall on the closing line lands as a story; told on one note it lands as a recital.", note: "Pitch is punctuation you can hear." }] },
          { title: "Connected speech: natural, not swallowed", text: "Linking words together — 'next time' touching, 'a cup of tea' shrinking its middle — is what fluent English sounds like, and you should not stamp it out. The line to hold is between linking and deleting: squeeze the unstressed words, but never delete a sound that carries grammar or meaning. At band 6 and above, examiners typically expect comfortable, connected delivery rather than careful word-by-word dictation.", examples: [{ english: "'I'll ask her tomorrow' linked lightly sounds natural; 'I'll ask-er tomorr-' with the last syllable gone leaves the listener repairing your sentence for you.", note: "Link freely; delete nothing that carries meaning." }] },
          { title: "Word endings: small sounds, big grammar", text: "The final -ed, -s, -t and -d of English words are tiny, but they carry tense, plurality and possession — a large share of what the grammar criterion hears. Dropping them does not sound casual; it sounds like a different sentence, and the listener quietly does repair work. Finish your words: the last consonant is the cheapest accuracy you will ever buy.", examples: [{ english: "'I missed the deadline' without its final /t/ is heard as 'I miss the deadline' — a present-tense confession nobody intended.", note: "Endings are where pronunciation quietly serves grammar." }] },
        ],
      },
      {
        type: "table",
        title: "What actually blocks understanding",
        headers: ["Blocker", "What the listener experiences", "Fastest repair"],
        rows: [
          ["Misplaced word stress", "The word does not resolve; the listener rebuilds it and falls behind", "Check your top fifty spoken words in a dictionary and drill the beat"],
          ["Flat monotone", "No sense of where one point ends and the next starts; attention drifts", "Fall at the end of finished points, rise before something follows"],
          ["Swallowed endings", "Tense and plurals vanish; sentences arrive needing repair", "Slow ten per cent and finish every final consonant"],
          ["Runaway speed", "Stress, pitch and endings all disappear at once", "Speak just below your top speed and pause at sense breaks"],
          ["Accent imitation", "Effort spent performing sounds instead of communicating them", "Keep your own accent and make it clear — that is the whole job"],
        ],
      },
      {
        type: "grammar-rule",
        title: "The stress shift inside word families",
        rule: "Adding a suffix often moves the stressed syllable: PHO-tograph but pho-TOG-rapher; E-co-nomy but e-co-NOM-ic; re-LI-gion but re-li-GIOUS. Learn each family as a stress set rather than as separate words, because the ear tracks the shift even when the spelling barely changes.",
        explanation:
          "Most of the longer words candidates need for describing people, places and feelings come in families, and the family shares a shifting beat. Saying each pair aloud a few times is usually enough to lock the pattern in.",
        examples: [
          { english: "PHO-to-graph → pho-TOG-ra-pher: the same family, the beat two syllables to the right.", translation: "La familia cambia el acento: PHO-to-graph, pho-TOG-ra-pher." },
          { english: "E-co-nomy → e-co-NOM-ic: the noun and the adjective trade places on the stress map.", translation: "El sustantivo y el adjetivo cambian de sílaba tónica." },
        ],
        exceptions: ["Some families hold their stress through every suffix — COM-fort stays COM-fort-a-ble — so check each new family once instead of assuming a shift."],
      },
      { type: "heading", text: "Two habits that carry all four features" },
      {
        type: "text",
        text: "First, slow down by about ten per cent. Most clarity loss is not a pronunciation problem but a speed problem: at top speed there is no time to land stress, finish endings or let pitch move, and all four features collapse together. A notch below your maximum buys the time each feature needs. Second, pause where sense breaks, not where panic hits. A breath between ideas lets your falling pitch close the last point, gives the examiner a natural place to interject, and costs you nothing — silence at a sense boundary reads as control, while silence in the middle of a word reads as breakdown.",
      },
      {
        type: "example",
        title: "Clarity decisions, on the record",
        items: [
          { english: "Asked about her journey to the test centre, a candidate lands the beat on 'de-LAYED' and 'traf-fic'; the examiner follows a disastrous morning without one repeated word.", note: "Stress chosen for the words that carry the story.", domain: "exam" },
          { english: "A student telling a housemate 'I cleaned the KITCHEN, not the bathroom' repairs a mix-up with one stressed word and a shrug.", note: "Contrastive stress at work in ordinary life.", domain: "everyday" },
          { english: "A new employee reads the shift rota aloud, rising on 'Wednesday?' when unsure and falling on 'Friday.' when certain; the manager instantly sees which swap still needs confirming.", note: "Rising and falling pitch as workplace information.", domain: "work" },
          { english: "A traveller's flat 'yes' to 'window or aisle?' forces the agent to ask again; a falling 'aisle, please' settles the booking in one exchange.", note: "Closing pitch closes conversations.", domain: "travel" },
          { english: "Replaying a recording, a candidate counts four vanished endings in thirty seconds — 'worked', 'cooked', 'friends', 'missed' — and makes final consonants his single project for the week.", note: "Diagnosis from the recording, not from feelings.", domain: "study" },
          { english: "Two classmates describe the same lecture: the one who stresses 'THREE deadlines' and lets 'and' shrink is quoted correctly in the group chat; the monotone version comes back misquoted.", note: "Sentence stress decides what listeners remember.", domain: "study" },
          { english: "A candidate who spent months imitating a London accent keeps sliding back into her own mid-answer; once she abandons the imitation, her stress and endings stabilise and the whole answer relaxes.", note: "Accent imitation is a second job done badly; clarity is the only job.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Pronunciation mistakes corrected",
        items: [
          { wrong: "The examiner expects a British or American accent, so I'll perform one for the whole test.", right: "Speak in your own accent and spend the effort on stress, pitch and endings — the scale grades how easily you are followed.", reason: "No level of the scale names an accent, and a performed accent splits your attention between sounds and ideas, which usually makes clarity worse rather than better." },
          { wrong: "Fast speech sounds fluent, so I push my speed as high as I can hold.", right: "Sit just below your top speed: quick enough to flow, slow enough to finish words and land stress.", reason: "Speed that deletes syllables reads as unclear, and the criterion hears the missing syllables, not the bravery behind them." },
          { wrong: "If I mispronounce a word I should stop the answer and start the sentence again.", right: "Repair once — 'sorry, I mean…' — then continue; a single quick fix shows monitoring.", reason: "One clean repair costs a second and demonstrates control; chains of restarts eat your airtime and sound like breakdowns." },
        ],
      },
      {
        type: "four-skills",
        title: "One answer, tuned for the ear",
        reading: {
          text: "Two candidates answer the same question: 'Do you usually walk to work?' Answer A: 'Yes I walk every day it takes about thirty minutes from my flat it is faster than the bus.' Answer B: 'Yes, usually — it's about thirty minutes from my flat, which is actually quicker than the bus. When it rains, though, I take the metro.' Nothing in B uses a rarer word than A. The difference is delivery: B's stressed 'thirty' and 'quicker', the fall after 'bus', the rise on 'though', and the finished '-s' of 'rains' let the listener follow without effort.",
          task: "Name the four pronunciation features Answer B shows that Answer A hides.",
        },
        writing: {
          task: "Take this flat answer and rewrite it for the ear: mark the word you would stress in each clause with capitals, add one rise and one fall where your pitch would move, and name the two endings you must finish: 'I usually cook dinner at home because it is cheaper and I like knowing what goes in the food.'",
          guide: [
            "Stress: mark one point-carrying word per clause — the activity, the reason, the preference.",
            "Pitch: show a fall on the clause that finishes the answer and a rise where the second reason begins.",
            "Endings: decide which final consonants carry grammar — the '-s' on 'goes' is one of them.",
            "Read your marked version aloud twice and check the marks against what your voice actually does.",
          ],
          model: "Stress lands on COOK, CHEAPER and KNOWING, with the small words — 'it', 'is', 'the' — shrinking to almost nothing. Pitch rises into 'and I like…' and falls firmly on 'food', closing the answer. The endings to finish are the final /s/ of 'goes' and the closing /d/ of 'food' itself — small sounds, but they carry the tense and the last word of the turn.",
        },
        listening: {
          script: "Coach: Play back your long turn from yesterday. Candidate: Ugh — I sound completely flat. Coach: Flat where? Listen to the last ten seconds. Candidate: '…and the view from the bridge is amazing at sunset.' Coach: Your pitch does nothing on 'amazing' or on 'sunset' — two words begging for a beat. Say it again and lift 'a-MA-zing'. Candidate: 'The view from the bridge is a-MA-zing at SUN-set.' Coach: Better. Now listen earlier, at the museum sentence. Candidate: 'When I vi-si- the museum…' — I swallowed the last syllable. Coach: Finish it: 'vi-SI-ted'. That final syllable is your past tense.",
          task: "Which two features does the coach diagnose, and on which words does she work?",
        },
        speaking: {
          task: "Record yourself answering 'What do you usually do on Sundays?' for thirty seconds. Replay it once listening only for stress, once more only for endings. Then re-record, fixing the two worst moments you found.",
          frames: [
            "On Sundays I usually…, which means…",
            "But what I really enjoy about them is…",
            "When I was younger, though, Sundays were…",
          ],
          checklist: [
            "Did the point-carrying words land louder than the small ones?",
            "Did my voice fall at the end of each finished idea?",
            "Did the last consonant of every past-tense and plural word arrive?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Intelligibility", "Every marking choice serves the listener's ease — stressed point words, closed pitch on finished ideas, completed endings — which is the only thing the criterion measures."],
          ["Word and sentence stress", "'COOK', 'CHEAPER' and 'KNOWING' carry the three ideas while the function words shrink, so a short turn delivers three unmistakable points."],
          ["Intonation", "The rise into the second reason and the fall on 'food' display the answer's shape before any content word is analysed."],
          ["Accuracy by ear", "Finishing 'goes' and 'food' hands the grammar criterion its evidence for free — the pronunciation and grammar scores share the same syllables."],
          ["Fluency protection", "Slowing one notch and pausing at sense breaks keeps delivery relaxed, so no feature is sacrificed to speed."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Warm the mouth for ten minutes: read anything aloud, in your own accent, at conversational speed, finishing every word."],
          ["While the clock runs", "Land the stress on each answer's point word, let the small words shrink, and fall in pitch when an idea closes."],
          ["If you are stuck", "Drop one gear in speed rather than freezing: a slower clear answer always outscores a fast lost one."],
          ["Final minutes", "Keep finishing endings through the last discussion exchanges — late answers are recorded too, and fatigue is where endings vanish."],
        ],
      },
      {
        type: "summary",
        points: [
          "The Pronunciation criterion grades ease of understanding, never national origin: a clear accent from anywhere can reach any level of the scale.",
          "Word stress lets each word resolve, sentence stress carries the point, intonation shows where ideas end, and complete endings deliver grammar to the ear.",
          "Linking is natural and expected — squeeze unstressed words, but never delete sounds that carry meaning.",
          "Ten per cent less speed and pauses at sense boundaries buy time for all four features at once.",
          "Diagnose from recordings: count dropped endings and flat stretches, and take one feature per week rather than everything at once.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "How is the Speaking test structured?", options: ["Three parts across 11 to 14 minutes: interview, long turn, discussion", "Two parts across 20 minutes: interview and discussion", "Four parts across 15 minutes, including a read-aloud task"], correctIndex: 0, explanation: "The recorder runs for eleven to fourteen minutes over three parts — a short interview, the cue-card long turn and a two-way discussion.", from: "The Speaking examination format" },
          { question: "How do the four Speaking criteria combine into your section band?", options: ["Fluency counts double because the test is spoken", "Each of the four contributes a quarter of the band", "Pronunciation is scored only in Part 3"], correctIndex: 1, explanation: "The four criteria carry equal weight, so pronunciation is a quarter of the speaking band regardless of which part shows it best or worst.", from: "What the examiner assesses" },
          { question: "What did the assessment lesson say the Pronunciation criterion actually measures?", options: ["Closeness to a native-speaker accent", "Speed of delivery", "How easily a listener can follow what you say"], correctIndex: 2, explanation: "The scale describes intelligibility — being easy to follow — and no level of it names a national accent as the target.", from: "How Writing and Speaking are assessed" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "What does the Pronunciation criterion reward?",
        hints: ["Think about what the examiner needs from every minute of speech — and what the scale never mentions."],
        options: [
          { id: "a", text: "A British or American accent, since those are the reference varieties of the test." },
          { id: "b", text: "Being easy to follow — stress, pitch and finished endings — in whatever accent you speak." },
          { id: "c", text: "Speaking quickly and continuously, because pauses read as weak fluency." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Being easy to follow — stress, pitch and finished endings — in whatever accent you speak.",
          "The scale describes intelligibility from the listener's side: words that resolve, points that stand out, ideas that close. Accent origin appears nowhere in it, and a clear accent from any country can reach the same levels.",
          "Both distractors import goals the criterion never sets — accent imitation and raw speed — and both typically make clarity worse rather than better.",
        ),
        tags: ["speaking", "pronunciation", "criterion"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Your friend thinks you lent Marta your skateboard. You actually lent her your bicycle. Which word do you stress to correct him?",
        hints: ["Put the beat on the word that is wrong in his version of events."],
        options: [
          { id: "a", text: "I lent her my BICYCLE — stress replaces the object he has wrong." },
          { id: "b", text: "I LENT her my bicycle — stress replaces the action he has wrong." },
          { id: "c", text: "I lent HER my bicycle — stress replaces the person he has wrong." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "I lent her my BICYCLE — stress replaces the object he has wrong.",
          "Contrastive stress lands on the word being corrected: his error is the object, so the bicycle takes the beat and the repair completes itself in a single word.",
          "Stressing the verb or the person would correct claims your friend never made, leaving the skateboard misunderstanding fully intact.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Read the scene and decide what the coach's advice rests on.",
        hints: [],
        passageTitle: "The imitation audit",
        passage:
          "Damiel recorded two long turns. In the first, he performed an accent he had picked up from a streaming series: the vowels were borrowed, the pace uncertain, and three words per sentence dissolved before their endings. In the second, recorded after his coach told him to drop the act, he spoke with the accent of his home city — Lagos — at a calm speed, landing stress on the words that mattered and finishing every past tense. His coach marked the second turn clearly higher for pronunciation and told him why in one sentence.",
        question: "What is the coach's most likely one-sentence reason?",
        options: [
          { id: "a", text: "The Lagos accent is closer to the test's reference accent than the borrowed one." },
          { id: "b", text: "The second turn is far easier to follow: the stress lands and the endings arrive, which is what the criterion grades." },
          { id: "c", text: "The first turn was too slow, and the second reached a more impressive speed." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The second turn is far easier to follow: the stress lands and the endings arrive, which is what the criterion grades.",
          "The improvement the coach can hear is intelligibility: words that resolve, points that stand out, endings that carry tense. The criterion rewards exactly that, in any accent — and every band judgement here is an estimate.",
          "(a) invents a hierarchy of accents that the scale nowhere contains; (c) praises the opposite of what happened — the calmer speed is what saved the syllables.",
        ),
        tags: ["speaking", "pronunciation", "accent-neutral"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Name the two word classes that decide sentence stress.",
        question: "In a normal spoken sentence, which words take the stress and which ones shrink?",
        acceptedAnswers: [
          "content words are stressed and function words shrink",
          "stress the nouns verbs and adjectives, not the small grammar words",
          "meaning words like nouns and verbs carry the beat; words like the and of shrink",
          "content words take the stress and function words are reduced",
        ],
        keywords: ["content", "function"],
        hints: [],
        feedback: fb(
          "Content words — nouns, verbs, adjectives, negations — take the stress; function words shrink.",
          "English rhythm rests on the contrast between meaning-heavy words that land and small grammar words that reduce, and controlling that contrast is the fastest route to a clear sentence.",
          "Answers that stress every word equally, or none at all, describe exactly the flat delivery the criterion penalises.",
        ),
        tags: ["speaking", "pronunciation", "sentence-stress"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided speaking. Answer with contrastive stress, then check your endings.",
        situation:
          "The examiner asks: 'Do you usually study in the mornings?' Answer for twenty to thirty seconds, contrasting your weekday and weekend routines, stressing the words that correct any assumption the question makes, and finishing every word ending.",
        targetPhrases: [
          "but on weekends the routine flips completely…",
          "what really changes is…",
          "during the week, though, mornings are…",
        ],
        mustSay: ["mornings", "weekends", "but"],
        hints: [
          "Decide which two words carry the contrast and land the beat on them.",
          "Check your past-tense endings before you record — 'studied' needs its final syllable.",
        ],
        feedback: fb(
          "A clear contrast answer with stress on the weekday and weekend words, plus finished endings.",
          "The contrast gives you two natural stress points, and the routine gives you regular past-tense and plural endings to finish — two features trained inside one short answer. Replay for the two beats before judging the content.",
          "A flat, even delivery wastes the built-in contrast: the same words with no stress shift sound like a list rather than an answer.",
        ),
        tags: ["speaking", "pronunciation", "practice"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why do finished word endings belong in a pronunciation lesson at all?",
        hints: [],
        options: [
          { id: "a", text: "They carry grammar the listener needs — tense, plurality — so dropping them changes the sentence heard." },
          { id: "b", text: "English examiners count endings as a separate score inside the criterion." },
          { id: "c", text: "Endings make an accent sound more native, which the criterion rewards." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "They carry grammar the listener needs — tense, plurality — so dropping them changes the sentence heard.",
          "The final sounds of 'missed', 'works' and 'friends' are where tense, person and number live for the ear: finish them and the grammar arrives with the pronunciation, at no extra cost.",
          "(b) invents a sub-score nobody marks; (c) turns a clarity habit into an accent goal — the criterion cares that the sounds arrive, not where you learned them.",
        ),
        tags: ["speaking", "pronunciation", "endings"],
      }),
    ],
    assignment: {
      title: "The stress-and-endings audit",
      instructions:
        "Record yourself answering 'How do you usually spend your evenings?' for about thirty seconds. Then write out your answer with the two or three words you stressed in capitals, mark one place your voice rises and one place it falls, and list every past-tense or plural ending you hear yourself finish — or drop — on the replay.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Choose ten words you say in almost every practice answer, check each one's stressed syllable in a dictionary, and drill the beat aloud until it is automatic.",
      "Listen to one minute of any clear speaker you enjoy — any accent at all — and mark on paper where their pitch rises and falls; then read the same text aloud in your own accent with the same shape.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-vocabulary",
    title: "Vocabulary for speaking",
    description:
      "Precision over decoration for the spoken paper: exact plain words, collocations stored whole, description instead of silence when a word is missing, a natural spoken register, and topic preparation built as ideas with phrases attached — never scripts.",
    objectives: [
      "choose the exact plain word over the impressive wrong one at conversational speed",
      "store and retrieve collocations as whole phrases rather than single words",
      "describe around a missing word using its job, its category or a scene",
      "hold a natural spoken register instead of reading essay language aloud",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Vocabulary in Speaking is not a poetry contest. The examiner is not waiting to be impressed; she is waiting to understand exactly what you mean — and in speech she gets one hearing, with no chance to re-read your sentence. That single fact reshapes everything: the plain word that hits the meaning beats the grand word that misses it; words that travel together win over words assembled fresh; and a missing word is an invitation to describe, not a wall. This lesson builds those habits for live answers, in your own voice.",
        beforeYouStart: [
          "You can give a reason and an example inside a spoken answer without long pauses.",
          "You have answered practice questions aloud and replayed at least one recording.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — all three parts, with Part 3's abstract questions hardest on word choice"],
          ["Task & question types", "Familiar-topic interviews, the long turn, and the two-way discussion"],
          ["What is assessed", "Lexical Resource — range and precision of meaning, natural collocation, and paraphrase when a word is missing"],
          ["Why this matters", "One criterion in four follows your words alone, and the spoken version rewards talk-shaped language, not essay language"],
        ],
      },
      { type: "heading", text: "Precision: the exact word, not the biggest word" },
      {
        type: "text",
        text: "Ask yourself what a spoken answer costs the listener: one pass, at speed, with no paragraph to return to. Under those conditions precision is worth more than rarity. 'It was boiling on the platform' tells the whole story in seven words; 'the thermal conditions were quite extreme' takes longer and says less. The criterion's higher levels typically describe flexible, precise vocabulary — words matched to the exact shade you mean — and they notice misfires just as sharply: an idiom bent a half-tone wrong, a grand adjective attached to the wrong noun. The working habit is a single question: before you reach for an impressive word, name the plain word it would replace — and if the plain one is exact, say the plain one.",
      },
      { type: "heading", text: "Collocations: learn the pair, not the word" },
      {
        type: "text",
        text: "English words do most of their work in company: heavy traffic, take a shortcut, hold an opinion, a packed train, do the dishes. A learner who stores single words must assemble these pairs live, mid-sentence, and misfires — 'make a photo', 'a strong rain', 'open the light'. A learner who stores the pair deploys it whole and sounds fluent instantly, whatever the accent. That is why vocabulary lists of lone words transfer so badly to speech: the criterion listens for naturalness of combination, and naturalness lives between words, not inside them. Build your topic material as phrases with their partners already fixed.",
      },
      {
        type: "steps",
        title: "Talking around a missing word",
        steps: [
          { title: "Name the job it does", text: "The fastest rescue is function: 'it's the thing you use to keep soup hot' does the work of 'thermos' inside any sentence. The listener rebuilds the object from its purpose, usually in under a second, and your answer never stops moving.", examples: [{ english: "Describing a colander: 'you know, the bowl with holes — you wash lettuce in it' — job plus scene, and the listener is already nodding.", note: "Purpose is the strongest hint a description can carry." }] },
          { title: "Name the category it belongs to", text: "Category narrows the search: 'it's a kind of spice', 'it's a small kitchen machine', 'it's a water bird, like a big duck'. Even a category plus a cousin word gives the listener enough to follow your point while the exact word stays missing.", examples: [{ english: "'It's a sort of tool — like scissors, but for the garden' keeps a story about pruning alive without the word 'secateurs'.", note: "'Kind of' plus a cousin word is real, scoreable vocabulary." }] },
          { title: "Describe one scene with it", text: "Scenes are vivid and easy to say: 'the machine in the corner that hums all night' paints the refrigerator without naming it. Scenes also carry feeling and detail, so the paraphrase can enrich the answer instead of merely rescuing it.", examples: [{ english: "'We sat under the big cloth thing that kept the sun off' — a beach umbrella, described warmly enough that nobody misses the noun.", note: "A scene often says more than the missing word would have." }] },
          { title: "Hand over and keep going", text: "If the word still will not come, say so lightly and continue: 'I can't remember what it's called in English, but anyway…'. The criterion reads that as paraphrase skill and composure; a silence while you search would read as neither. The missing word was never going to be scored — the sentence around it is.", examples: [{ english: "'I've lost the word — sorry — but the point is, it saved us at least an hour' lands as fluent recovery, not failure.", note: "Naming the gap briefly is itself natural spoken English." }] },
        ],
      },
      {
        type: "table",
        title: "Said aloud: natural or imported?",
        headers: ["Idea you want", "Natural spoken choice", "Sounds imported aloud"],
        rows: [
          ["Introduce a contrast", "'That said…', 'but, to be honest…'", "'However, nevertheless…'"],
          ["Add a supporting point", "'On top of that…', 'and what else…'", "'Furthermore, moreover…'"],
          ["Give an example", "'For instance…', 'like when…'", "'To illustrate this…'"],
          ["Say something is big", "'huge', 'packed', 'massive'", "'of considerable magnitude'"],
          ["Admit a drawback", "'the downside is…'", "'a significant disadvantage notwithstanding'"],
        ],
        caption: "Read the right-hand column aloud and you can hear the essay arriving in the middle of a conversation.",
      },
      { type: "heading", text: "Register: talk like a person" },
      {
        type: "text",
        text: "Spoken English has its own glue: 'well', 'actually', 'to be honest', 'the thing is', 'kind of', plus contractions everywhere. None of it is lazy — it is the register conversations run on, and using it signals comfort with the language. Essay connectors imported into speech — 'moreover', 'furthermore', 'in conclusion' — have the opposite effect: they sound borrowed, and they often stall the flow because they were never built to be said at speed. In your answers, one formal word used exactly right impresses more than five formal connectors deployed as armour.",
      },
      { type: "heading", text: "Topic preparation: ideas with words attached" },
      {
        type: "text",
        text: "Prepare topics as idea banks, not scripts: five real memories of a place, three honest opinions about your job, a couple of stories that can bend to many prompts. Attach phrases to each item as you collect them — 'hectic but rewarding' pinned to one memory, 'off the beaten track' to another — and rehearse saying the phrases inside the stories, never alone. A bank like that survives any follow-up question, because the words arrive attached to things you actually mean; a memorised script collapses at the first 'why?', and the examiner hears the collapse.",
      },
      {
        type: "example",
        title: "Word choices at speaking speed",
        items: [
          { english: "Asked 'What's your hometown like?', a candidate answers 'small, safe, and honestly a bit boring at night' — four plain words carrying a complete, believable picture.", note: "Exact and plain beats vague and grand.", domain: "exam" },
          { english: "A student who 'takes notes', 'takes a break' and 'takes the bus' says all three without pausing — the pairs were stored whole, so no assembly happens live.", note: "Fluency is partly pre-assembled vocabulary.", domain: "study" },
          { english: "Forgetting 'the shredder', an office newcomer asks for 'the machine that cuts paper into little strips' — the whole office understands and the request lands.", note: "Description at work is a professional skill too.", domain: "work" },
          { english: "At a hostel desk, 'Might I inquire as to the feasibility of a late checkout?' earns a confused pause; 'Any chance of a late checkout?' earns a key held back until two.", note: "Register mismatch costs the speaker time and goodwill.", domain: "travel" },
          { english: "Describing a market, a candidate reaches for 'bustling', finds it gone, and lands on 'packed, noisy, brilliant' — the rescue phrase carries more feeling than the planned one.", note: "Paraphrase often outperforms the original word.", domain: "exam" },
          { english: "A flatmate 'makes tea', 'makes a mistake' and 'makes sense' but 'does the dishes' and 'does her best' — nobody taught her the swaps; the pairs simply ride together.", note: "Collocation is memory of company, not rules.", domain: "everyday" },
          { english: "Before a practice set on food, a candidate lists four real family dishes and pins phrases to each — 'slow-cooked', 'leftovers', 'way too spicy' — then answers every food question from the bank.", note: "Ideas with words attached survive follow-ups.", domain: "study" },
        ],
      },
      {
        type: "mistakes",
        title: "Vocabulary mistakes corrected",
        items: [
          { wrong: "I'll memorise fifty impressive phrases and drop them into my answers wherever they fit.", right: "Collect phrases attached to real stories and opinions you actually hold, and rehearse saying them inside those stories.", reason: "Detached phrases arrive in the wrong context, at the wrong moment, and the examiner hears the join — the criterion rewards natural use, not importation." },
          { wrong: "When a word is missing I must stop until I find it, because guessing is worse than silence.", right: "Describe the word's job, category or scene and keep the answer moving — 'it's the thing you use to…'.", reason: "A three-second description shows range and composure; silence shows neither, and the missing word was never scored anyway." },
          { wrong: "Essay words like 'moreover' and 'furthermore' will make my speech sound advanced.", right: "Use talk-shaped links — 'and', 'also', 'the thing is', 'to be honest' — that match how conversation actually sounds.", reason: "Spoken English runs on its own natural connectives; essay connectors said aloud read as recitation and often break the flow they were meant to build." },
        ],
      },
      {
        type: "four-skills",
        title: "The missing word, described",
        reading: {
          text: "Two candidates reach for 'kettle' during a long turn about their morning routine. The first stops: 'I use a… how do you say… nothing, sorry.' The second continues: 'The first thing I do is boil water in — you know the thing, the metal jug that whistles when it's ready — I can't think of the word, but anyway, I make coffee before anything else.' Both lost the same noun. Only one of them stopped talking, and only one answer reached the end of the routine.",
          task: "List the two description moves and the one hand-over move the second candidate used.",
        },
        writing: {
          task: "Choose three objects from your kitchen. For each, write two spoken sentences that describe it without naming it — one using its job, one using a scene — and for the third object, finish with the light hand-over: 'I can't think of the word, but anyway…'.",
          guide: [
            "Job move: 'it's the thing you use to…' — name the function, never the object.",
            "Scene move: 'it's the thing that sits on the… and hums / whistles / keeps…' — put it somewhere doing something.",
            "Hand-over: 'I can't think of the word, but anyway…' — say it lightly and still finish your point.",
            "Read all six sentences aloud once; if any of them stalls, it is a description short of a detail.",
          ],
          model: "Job: 'It's the thing you use to drain pasta — holes everywhere, water escapes, pasta stays.' Scene: 'It's the box that hums in the corner all night and keeps the milk cold no matter how hot the kitchen gets.' Hand-over: 'I can't think of the word for the big spoon with holes in it, but anyway, that's what I serve the pasta with, and nobody has complained yet.'",
        },
        listening: {
          script: "Coach: You froze for four seconds on 'thermos'. Try the job first. Candidate: 'The thing that… keeps drinks hot?' Coach: Perfect — keep going in the same sentence. Candidate: 'I take the thing that keeps drinks hot when I hike, because I hate cold tea at the top of a hill.' Coach: Now the category — try 'a kind of…'. Candidate: 'It's a kind of flask, a metal bottle thing.' Coach: And notice you said 'flask' — a cousin word counts as vocabulary too. You just scored range twice while hunting one noun.",
          task: "Which three rescue moves does the coach demonstrate, and which cousin word arrives by accident?",
        },
        speaking: {
          task: "Pick an object you used this morning and describe it for thirty seconds without naming it; your partner — or the recorder — then guesses the object and tells you which description move worked best.",
          frames: [
            "It's the thing you use to…",
            "It's a kind of…, like a bigger version of…",
            "You know, the one that… — I can't think of the word, but anyway…",
          ],
          checklist: [
            "Did I keep talking for the whole thirty seconds?",
            "Did I use at least two different rescue moves?",
            "Could someone name the object from my description alone?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Precision", "Every noun and verb in the model does exact work — 'drain', 'holes', 'whistles', 'hums' — so a listener with no visual still sees each object clearly."],
          ["Collocation", "The phrases arrive pre-assembled — 'boil water', 'serve the pasta', 'keep the milk cold' — the natural pairings the criterion listens for between words."],
          ["Paraphrase", "Three different rescue routes run inside real sentences, turning a missing noun into a display of range instead of a stop."],
          ["Register", "The talk is full of spoken glue — 'you know', 'anyway', 'the thing' — exactly the register a conversation runs on."],
          ["Preparation", "Nothing in the model was memorised as a script: the moves are habits, so they bend to any object and any follow-up question."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Build one idea bank per likely topic area — real memories and opinions with phrases pinned to each — and say the phrases aloud inside their stories."],
          ["While the clock runs", "When a word is missing, describe its job, category or scene and keep the sentence moving; never trade airtime for a silent search."],
          ["If you are stuck", "Reach one register level plainer: the exact everyday word said confidently outscores an imported formal one said hesitantly."],
          ["Final minutes", "In the late Part 3 exchanges keep the natural connectives coming — 'the thing is', 'that said' — so the register holds to the last answer."],
        ],
      },
      {
        type: "summary",
        points: [
          "Precision beats decoration in speech because the listener gets one hearing: the exact plain word outranks the grand word that misses.",
          "Collocations are stored whole or misfired separately — build topic material as phrases with their partners fixed.",
          "A missing word is an invitation to describe: name its job, its category or a scene it appears in, then hand over lightly and continue.",
          "Spoken register has its own glue — contractions, 'to be honest', 'the thing is' — and essay connectors imported into it sound borrowed.",
          "Prepare topics as idea banks with phrases attached to real memories and opinions; scripts collapse at the first follow-up question.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "What does Lexical Resource reward in a spoken answer?", options: ["The largest number of rare words the speaker can fit in", "Precise, natural vocabulary with paraphrase available when a word is missing", "Perfectly correct spelling of technical terms"], correctIndex: 1, explanation: "The criterion listens for range used accurately, natural collocation and the ability to talk around gaps — never raw rarity for its own sake.", from: "What the examiner assesses" },
          { question: "Which small sounds did the pronunciation lesson say carry tense and number to the listener's ear?", options: ["The final consonants of words — endings like -ed and -s", "The first syllable of every verb", "The stressed vowel of each noun"], correctIndex: 0, explanation: "Word endings deliver grammar information by ear, which is why finishing them was the pronunciation lesson's cheapest accuracy habit.", from: "Pronunciation: what the criterion really rewards" },
          { question: "In the assessment criteria, what does 'fluency' actually refer to?", options: ["Speed of delivery", "Speech that flows, with pauses for meaning rather than for missing words", "A native-like accent"], correctIndex: 1, explanation: "Fluency describes how speech flows and connects, including natural pausing for meaning — it is never a measure of how fast you talk.", from: "How Writing and Speaking are assessed" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Asked 'Was your flat expensive?', which reply shows vocabulary precision?",
        hints: ["Precision means the words match the exact shade of meaning — at speaking speed."],
        options: [
          { id: "a", text: "The rent was of a considerably elevated nature relative to my previous accommodation." },
          { id: "b", text: "It stung a bit, honestly — nearly half my salary goes on it now." },
          { id: "c", text: "It was very, very, very expensive and also quite costly." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It stung a bit, honestly — nearly half my salary goes on it now.",
          "Exact, natural and information-rich: 'stung' carries feeling, 'half my salary' carries scale, and every word lands where a listener can use it.",
          "(a) wraps a simple fact in borrowed formality that says less; (c) repeats one vague adjective, which is the opposite of range.",
        ),
        tags: ["speaking", "vocabulary", "precision"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Which sentence uses the natural spoken collocation?",
        hints: ["Which verb–noun pair would you actually hear from a fluent speaker?"],
        options: [
          { id: "a", text: "I usually make a shortcut through the park when I'm late." },
          { id: "b", text: "I usually do a shortcut through the park when I'm late." },
          { id: "c", text: "I usually take a shortcut through the park when I'm late." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "I usually take a shortcut through the park when I'm late.",
          "English fixes the pair: shortcuts are taken, like decisions, photos and breaks — storing 'take a shortcut' as one item is what makes it available at speed.",
          "(a) and (b) assemble the pair live from the wrong verbs, which is exactly the misfire the criterion hears as unnatural.",
        ),
        tags: ["speaking", "vocabulary", "collocation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Read the scene and decide what the examiner actually hears.",
        hints: [],
        passageTitle: "The missing pan",
        passage:
          "Describing her grandmother's kitchen, Mei lost the name of the heavy, tight-lidded pan her grandmother slow-cooked stews in. Instead of stopping, she carried the sentence on: 'She had this — it's the thing you use when a stew has to cook for hours, a heavy pot with a lid that never comes off, and honestly it made the whole flat smell like Sundays.' The examiner never learned the word Mei was hunting for, and never needed to: the description carried the meaning, the memory and the feeling, and the answer reached its end at full speed.",
        question: "What does the criterion most likely record for this moment?",
        options: [
          { id: "a", text: "A vocabulary failure — the target word was never produced." },
          { id: "b", text: "A paraphrase success: the object described by job and scene, inside a fluent sentence." },
          { id: "c", text: "A coherence problem, because the answer changed direction mid-sentence." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A paraphrase success: the object described by job and scene, inside a fluent sentence.",
          "Lexical Resource explicitly values paraphrase when a word is missing: describing function and scene keeps the meaning and even adds feeling, while hunting for the noun would have cost silence instead.",
          "(a) scores the missing word instead of the speech around it; (c) misreads a rescue as a detour — the sentence never left its story.",
        ),
        tags: ["speaking", "vocabulary", "paraphrase"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Recall the rescue moves for a missing word.",
        question: "When a word won't come, you can describe two things about it instead of stopping. Name one of them.",
        acceptedAnswers: [
          "what it does — its job or purpose",
          "what kind of thing it is — its category",
          "its job, like the thing you use to open tins",
          "its category, like a kind of kitchen machine",
          "what it looks like or where you keep it",
        ],
        keywords: ["job", "kind"],
        hints: [],
        feedback: fb(
          "Its job (what it does) or its category (what kind of thing it is) — the two fastest description routes.",
          "Both routes rebuild the meaning for the listener inside the sentence you are already saying, which is why the answer never has to stop for a missing noun.",
          "Answers that suggest waiting for the word, or switching languages, abandon the speech the criterion was busy scoring.",
        ),
        tags: ["speaking", "vocabulary", "paraphrase"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided speaking. Describe an object without naming it.",
        situation:
          "Choose an object you use every day and describe it to the recorder for about thirty seconds WITHOUT naming it: say what it does, what kind of thing it is, and one scene it appears in. If the name still will not come, hand over lightly — 'I can't think of the word, but anyway…' — and finish your point.",
        targetPhrases: [
          "It's the thing you use to…",
          "It's a kind of…, like a bigger version of…",
          "You know, the one that… — but anyway…",
        ],
        mustSay: ["thing", "use", "kind"],
        hints: [
          "Pick the object before you press record, and decide its single most useful job first.",
          "If you feel a pause coming, switch to the scene move — places and actions arrive faster than nouns under pressure.",
        ],
        feedback: fb(
          "Thirty seconds of continuous description with at least two rescue moves and no silent search.",
          "Keeping the sentence alive matters more than the missing noun: job, category and scene each rebuild the meaning differently, and the hand-over closes the gap gracefully. Replay and count which moves you actually used.",
          "Naming the object early ends the task with twenty seconds to fill; freezing mid-search hands the recorder silence, which no criterion can score.",
        ),
        tags: ["speaking", "vocabulary", "practice"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which answer keeps a natural spoken register?",
        hints: [],
        options: [
          { id: "a", text: "Furthermore, I would add that public transport in my city is, in the majority of cases, punctual." },
          { id: "b", text: "And to be honest, the buses here are pretty reliable — nine times out of ten they turn up on time." },
          { id: "c", text: "Public transport: punctuality — high. Frequency — acceptable. Crowdedness — significant." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "And to be honest, the buses here are pretty reliable — nine times out of ten they turn up on time.",
          "Contractions, 'and', 'to be honest' and a natural idiom ('nine times out of ten') hold the register a conversation runs on while still carrying precise information.",
          "(a) reads an essay aloud, complete with a written connector that stalls speech; (c) turns an answer into notes, which no criterion can score as connected language.",
        ),
        tags: ["speaking", "vocabulary", "register"],
      }),
    ],
    assignment: {
      title: "The idea bank, first entries",
      instructions:
        "Choose one topic area you expect in Part 1 — your morning routine, your street, your work or studies. List four real things in it (objects, people, habits), and for each write one exact phrase you could say about it, plus one rescue sentence you would use if the object's name escaped you mid-answer.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Collect ten collocations from anything you hear in English this week — conversations, podcasts, films — and say each aloud inside a true sentence about your own life the same day you collect it.",
      "Run the object game five times with a friend or a recorder: describe a random object for thirty seconds without naming it, then replay and count how many rescue moves you used.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-grammar-speech",
    title: "Grammar accuracy in speech",
    description:
      "The simple-plus-complex mix the grammar criterion rewards in live speech: confident simple forms, complex clauses where they carry the idea, tense frames for stories and routines, and the error tolerance that separates a slip from a breakdown.",
    objectives: [
      "keep simple structures accurate and confident at conversational speed",
      "deploy because, when, which, if and comparative structures where the idea needs them",
      "hold separate tense frames for narrating past events and describing routines",
      "self-correct meaning-blocking errors once, without freezing or restarting",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Speaking grammar is not writing grammar read aloud. You have no delete key, no second draft, and a listener who must understand you on one hearing — so the criterion reads your speech differently from an essay: it wants a mix, it forgives slips that do not block meaning, and it rewards the courage to attempt a complex clause that a cautious candidate would dodge. This lesson builds that mix deliberately — the simple sentence said with total confidence, the complex clause used when the idea genuinely needs it, and a monitoring habit that repairs the errors that matter and lets the rest flow past.",
        beforeYouStart: [
          "You can give a reason and an example inside a spoken answer without long pauses.",
          "You have told at least one two-minute story aloud in practice, however imperfectly.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — all three parts, from Part 1's routines to Part 3's speculation"],
          ["Task & question types", "Familiar-topic interviews, the long turn's narration, and discussion questions inviting reasons and hypotheses"],
          ["What is assessed", "Grammatical Range and Accuracy — the variety of structures attempted and how far errors block the listener"],
          ["Why this matters", "All-complex answers collapse and all-simple answers cap the band; the mix is what the middle and upper levels describe"],
        ],
      },
      { type: "heading", text: "The mix, not the mountain" },
      {
        type: "text",
        text: "Read the criterion's name again: Range AND Accuracy. A speech made entirely of short simple sentences can be perfectly accurate and still sit low, because range is missing; a speech stuffed with ambitious structures can show range and still sit low, because half the structures fail. What a band 7 performance typically offers is both at once — simple forms used freely and correctly, complex forms arriving where the idea demands them and mostly landing. The practical consequence is reassuring: you do not need perfect grammar, you need dependable grammar plus a handful of complex structures you can actually steer under pressure. Five are usually enough, and this lesson names them.",
      },
      { type: "heading", text: "Five complex structures that pull real weight" },
      {
        type: "steps",
        title: "The steering structures",
        steps: [
          { title: "because — the reason clause", text: "Part 3's 'why' questions, and every preference you state, want a because-clause attached. The clause turns an opinion into a position: 'I cycle to work because the traffic at eight in the morning is unbearable' says what you do and what drives it in one breath. It is the highest-value structure per second of effort you own.", examples: [{ english: "'I cycle to work because the traffic at eight in the morning is unbearable' — opinion plus mechanism, delivered as a single finished thought.", note: "A reason clause is the cheapest complex grammar that carries real meaning." }] },
          { title: "when — the time clause", text: "Routines and memories both run on when-clauses: 'When I get home, the first thing I do is…'. The clause links two events honestly without forcing you into a long sentence, and it makes general claims sound lived-in rather than recited.", examples: [{ english: "'When it rains, the whole city slows down' — a small observation that fits a dozen discussion questions.", note: "When-clauses turn rules into experience." }] },
          { title: "which — the comment clause", text: "A which-clause lets you tack a judgement onto a whole statement: '…, which surprised everyone'. It adds range cheaply because the grammar is fixed and the comment is entirely yours — verdicts, ironies, small conclusions all ride on the same pattern.", examples: [{ english: "'My old boss moved the whole team to a smaller office, which none of us understood' — narrative plus verdict in one sentence.", note: "One fixed pattern, endless personal comments." }] },
          { title: "if — the conditional", text: "Part 3 speculation lives on conditionals: second conditional for unreal present ('If the city banned cars, the centre would empty out'), first for real possibility ('If they add a night bus, I'll use it'). Get the if–would pairing right and one pattern covers dozens of discussion questions about change, policy and the future.", examples: [{ english: "'If my university had offered evening classes, I would have kept the job' — a closed past possibility, said cleanly.", note: "The if–would pairing is the pattern; the content is yours." }] },
          { title: "comparatives — the comparison engine", text: "Change questions ('Is X more popular than before?') and preference questions both run on comparatives: bigger than, not as crowded as, more convenient than it used to be. They are short, frequent and impossible to fake, which makes them ideal band-currency: real range that never feels heavy.", examples: [{ english: "'Renting is far less stressful than owning, at least at my age' — comparison plus stance in twelve words.", note: "Real range that costs the listener nothing." }] },
        ],
      },
      {
        type: "grammar-rule",
        title: "Tense frames: story mode and routine mode",
        rule: "Narrate past events in the past simple for the chain of actions, with the past continuous painting the background they happened against; describe routines in the present simple, with the present perfect for states that started in the past and still hold ('I've lived there for six years'). Pick the frame with the question and hold it to the end of the answer.",
        explanation:
          "Most tense chaos in speaking comes from frames leaking into each other mid-answer — a story drifting into the present, a routine drifting into the past. Holding one frame per answer is easier than fixing tenses one by one, and the listener hears the difference immediately.",
        examples: [
          { english: "Story: 'We were waiting outside the exam hall when the fire alarm went off' — background in past continuous, event in past simple.", translation: "Fondo en pasado continuo; acción en pasado simple." },
          { english: "Routine: 'I take the seven-forty bus every morning, and I've taken it since I moved here' — present simple frame, present perfect for duration.", translation: "Rutina en presente simple; duración en presente perfecto." },
        ],
        exceptions: ["Inside a story, quoted speech keeps its own tense, and a routine mentioned inside a memory switches frame only for its own clause — the frame around it stays past."],
      },
      {
        type: "table",
        title: "Will this error block meaning?",
        headers: ["Slip said aloud", "What the listener gets", "Verdict"],
        rows: [
          ["'Yesterday I go to the market'", "A present-tense verb inside a yesterday-story — the timeline wobbles", "Blocks: repair it"],
          ["'She like classical music'", "Missing third-person -s; the meaning arrives untouched", "Doesn't block: keep going"],
          ["'If I will see him, I tell him'", "The future leaks into the if-clause; the hypothesis still reads", "Doesn't block: keep going"],
          ["'I am agree with that'", "A borrowed pattern; every listener still understands", "Doesn't block: keep going"],
          ["'He was very exciting about the trip'", "Exciting and excited swapped — the sentence now says he causes excitement", "Half-blocks: repair if quick"],
        ],
      },
      { type: "heading", text: "Monitoring without freezing" },
      {
        type: "text",
        text: "You will hear some of your own errors as you make them — that is a skill, not a problem. The discipline is triage. Repair, once and briefly, only what blocks meaning: 'I go — sorry, went — to the market yesterday.' Let the rest flow past: a storm of self-correction reads worse than the errors it fixes, because it destroys the flow the other criterion is scoring. A useful rule to hold: one repair per answer at most, aimed at the slip that would otherwise change what the listener understood. Everything else you notice is material for your error log after the test, not for the answer itself.",
      },
      {
        type: "example",
        title: "Structures and slips, on the wire",
        items: [
          { english: "A candidate answers 'Why do people keep pets?' with three clean simple sentences and one because-clause — the mix a band 7 descriptor would typically recognise.", note: "The mix is visible because both halves are present.", domain: "exam" },
          { english: "'When the results came out, I was working a summer job at a hotel' — background and event sorted in twelve words, story mode held.", note: "The two past tenses doing their two jobs.", domain: "study" },
          { english: "A nurse tells a patient 'If you take it with food, it won't upset your stomach' — a first conditional carrying the whole instruction.", note: "Conditionals are working grammar, not exam decoration.", domain: "work" },
          { english: "Comparing two holidays: 'The coast was beautiful, but the city break was easier, honestly' — comparatives carrying preference without strain.", note: "Short comparatives still count as range.", domain: "travel" },
          { english: "Mid-answer a candidate says 'I have went — sorry, went — to that café since school', repairs once and finishes; the answer keeps its momentum.", note: "One quick repair reads as monitoring, not failure.", domain: "exam" },
          { english: "A student catches herself mixing frames — 'When I was a child we go — sorry, we went — to my grandmother's every summer' — and the story snaps back into the past.", note: "Frame drift is the error worth stopping for.", domain: "everyday" },
          { english: "Asked about weekends, a candidate holds present simple for six sentences, then adds 'which is why I guard them so fiercely' — a which-clause earned, not forced.", note: "Complex grammar lands best at the end of a simple run.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Grammar-in-speech mistakes corrected",
        items: [
          { wrong: "To show range I should make every sentence complex.", right: "Build answers from confident simple sentences and add one or two complex clauses where the idea genuinely needs them.", reason: "Range means variety, not density — an answer where every sentence fights for its structure typically fails half of them and exhausts the listener." },
          { wrong: "Any grammar mistake I notice, I should stop and fix immediately.", right: "Triage: repair once, briefly, only when the error changes what the listener understood.", reason: "The fluency criterion hears the stops as clearly as the grammar criterion hears the slips — one clean repair serves both, a chain of them serves neither." },
          { wrong: "Stories and routines can share one tense as long as I keep talking.", right: "Set the frame with the question — past for stories, present for routines — and hold it to the end of the answer.", reason: "Frame leaks are the errors most likely to block meaning, because the listener loses the timeline your events hang on." },
        ],
      },
      {
        type: "four-skills",
        title: "Two frames, one recording",
        reading: {
          text: "One practice recording held two answers. First: 'Do you cook during the week?' — 'Usually, yeah. When I get home late, I just make something quick, maybe an omelette. At weekends it's different because I have time, so I cook properly.' Second: 'Tell me about a meal you remember.' — 'It was my grandmother's birthday and we were all crowded into her tiny kitchen. She was stirring something on the stove while the rest of us argued about football, and eventually the whole flat smelled like her famous lemon soup.' Two answers, two frames, never a leak between them.",
          task: "Name the frame of each answer and the one complex clause that holds each together.",
        },
        writing: {
          task: "Write two short spoken answers on the same topic — cooking — one in routine mode and one in story mode. Each answer should be two or three sentences, contain one complex clause, and one of the two should end with a comparative.",
          guide: [
            "Routine frame: present simple throughout, with a when-clause for the typical pattern.",
            "Story frame: past continuous for the background, past simple for the events.",
            "One complex clause each: because, which or if — placed where it carries meaning.",
            "Comparative: end one answer with a than-phrase so range shows inside a short turn.",
          ],
          model: "Routine: 'I cook most weeknights, because takeaway for five evenings costs a fortune. When I'm really tired, an omelette is all I manage, which my flatmate finds hilarious.' Story: 'Last winter my cousin was staying with us when the heating broke, so we were cooking soup at midnight in coats and gloves — and that soup tasted better than anything I've made since.'",
        },
        listening: {
          script: "Tutor: Two answers, same topic. Listen for the frames. Candidate: 'The first one is present simple — she cooks, she gets home. The second starts with was staying… past continuous, background, then the heating broke — event, past simple.' Tutor: And the leak? Candidate: 'There isn't one — she never mixes them.' Tutor: One more listen — her complex clauses. Candidate: 'Because takeaway costs a fortune', 'which my flatmate finds hilarious', and 'tasted better than anything I've made since'. Tutor: A comparative inside a story — that is range arriving without effort. Now check your own recording for the same three things.",
          task: "Which three things does the tutor ask the candidate to check in his own recording?",
        },
        speaking: {
          task: "Record two thirty-second answers to 'Tell me about your mornings': one describing this year's routine, one describing one specific morning you remember. Hold one tense frame per answer, start to finish.",
          frames: [
            "Most mornings I…, and when I…, I usually…",
            "That particular morning, I was… when…",
            "…, which is exactly why I remember it.",
          ],
          checklist: [
            "Did each answer keep one tense frame to the very end?",
            "Did I use one because, when, which or if clause where it earned its place?",
            "Did I repair at most once, and only where the meaning wobbled?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Range", "Simple sentences carry the facts while a because-clause, a which-clause and a comparative each arrive exactly once, where the idea needs them — variety without density."],
          ["Accuracy", "Both frames hold to the last word: present simple through the routine, past continuous and past simple through the story, with no leak between them."],
          ["Fluency", "No sentence fights its own structure, so nothing stalls — the complexity is budgeted at roughly one clause per answer, leaving air for the next idea."],
          ["Coherence", "The when-clause and the which-clause connect events and judgements explicitly, so the listener hears why each detail belongs where it sits."],
          ["Monitoring", "The model shows what to do with a noticed slip: nothing mid-flow unless meaning wobbles, and everything else saved for the error log afterwards."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rehearse the five steering structures — because, when, which, if, comparatives — until each one starts a sentence without thinking."],
          ["While the clock runs", "Match frame to question the moment it lands: story questions open in the past, routine questions in the present, and the frame holds."],
          ["If you are stuck", "Drop to a short simple sentence and build again from there — a clean simple line outranks a complex clause collapsing mid-flight."],
          ["Final minutes", "Spend the late answers on structures you trust rather than ones you are tempted to show off; a finished answer scores, an abandoned one does not."],
        ],
      },
      {
        type: "summary",
        points: [
          "The criterion wants a mix: simple forms used freely and correctly, complex forms arriving where the idea demands them.",
          "Five steering structures cover most of the range you need: because, when, which, if and comparatives.",
          "Stories run on past simple with past continuous background; routines run on present simple with present perfect for duration — one frame per answer.",
          "Not every error is worth a repair: fix the ones that block meaning, once and briefly, and let the rest flow past.",
          "One self-correction per answer reads as monitoring; a chain of restarts reads as breakdown and starves fluency.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "What two things does the Grammatical Range and Accuracy criterion weigh together?", options: ["Sentence length and vocabulary rarity", "The variety of structures attempted and how far errors block communication", "Accent clarity and speaking speed"], correctIndex: 1, explanation: "The criterion's two halves are range and accuracy: the structures you attempt, judged against how often your errors get in the listener's way.", from: "What the examiner assesses" },
          { question: "According to the pronunciation lesson, why does slowing down help your grammar score?", options: ["Examiners mark slowly delivered answers more generously", "It buys time to land stress and finish endings — the sounds that carry tense and number", "Slow speech makes complex structures unnecessary"], correctIndex: 1, explanation: "Word endings deliver grammar by ear, and a slightly slower delivery is what lets them arrive — pronunciation serving grammar directly.", from: "Pronunciation: what the criterion really rewards" },
          { question: "When a word is missing mid-answer, what did the vocabulary lesson tell you to do?", options: ["Pause silently until the word returns", "Describe its job, category or the scene it belongs to, and keep talking", "Switch to your first language for that one word"], correctIndex: 1, explanation: "Talking around a gap keeps every criterion fed — range, fluency and meaning all survive a description, while a silent search feeds none of them.", from: "Vocabulary for speaking" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. When does a complex structure earn its place in a spoken answer?",
        hints: ["Think about what the idea needs, not what the band needs."],
        options: [
          { id: "a", text: "Whenever you want to show the examiner you know one — range is density." },
          { id: "b", text: "When the idea itself is a reason, a time link, a comment, a hypothesis or a comparison." },
          { id: "c", text: "Only in Part 3 — Parts 1 and 2 are scored on simple grammar." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "When the idea itself is a reason, a time link, a comment, a hypothesis or a comparison.",
          "The five steering structures exist because ideas come in those five shapes: a because-clause is how English carries a reason, an if-clause a hypothesis. Range means having the tool when the job appears.",
          "(a) treats complexity as seasoning and produces answers where every sentence stumbles; (c) invents a rule — the same criterion scores all three parts.",
        ),
        tags: ["speaking", "grammar", "range"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the transcript and find the urgent slip.",
        hints: ["Ask which slip changes the timeline the listener is building."],
        passageTitle: "The first-job turn",
        passage:
          "Ravi's practice turn about his first job ran ninety seconds. It opened, 'I work there for two years when I finish school.' Later came 'The manager, she was very kind to me', 'Every morning I am opening the shop at eight', and, near the end, 'One day the safe break and everyone panic.' His tutor played it back and marked exactly one of these slips as urgent — the one that made the whole story's timeline fall apart — and told him the other three could wait for homework.",
        question: "Which slip did the tutor mark as urgent — and why?",
        options: [
          { id: "a", text: "'The manager, she was very kind' — the extra pronoun makes the sentence ungrammatical." },
          { id: "b", text: "'I work there for two years when I finish school' — past events delivered in present tense collapse the story's timeline for the listener." },
          { id: "c", text: "'One day the safe break and everyone panic' — a dramatic moment needs perfect grammar." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'I work there for two years when I finish school' — past events delivered in present tense collapse the story's timeline for the listener.",
          "The opening sentence claims a finished two-year story in present-tense verbs, so the listener cannot place any event in time — a meaning-blocking frame leak, exactly the kind worth repairing live.",
          "(a) is a harmless extra pronoun every listener sees past; (c) drops endings but the drama still lands — homework material, not an urgent repair.",
        ),
        tags: ["speaking", "grammar", "tenses"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which answer holds the routine frame correctly?",
        hints: [],
        options: [
          { id: "a", text: "Every morning I am walking to the station and I will buy coffee from the kiosk." },
          { id: "b", text: "Every morning I walk to the station and buy coffee from the kiosk before the queue builds." },
          { id: "c", text: "Every morning I walked to the station and I buy coffee from the kiosk." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Every morning I walk to the station and buy coffee from the kiosk before the queue builds.",
          "Routines run on the present simple, plain and repeated: 'every morning' locks the frame and both verbs hold it to the end of the answer.",
          "(a) uses the continuous for a fixed habit and drags in a future form; (c) opens in the past and switches mid-sentence — the classic frame leak.",
        ),
        tags: ["speaking", "grammar", "routines"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Recall the story tenses.",
        question: "A story's background action and its main events use two different tenses — name them.",
        acceptedAnswers: [
          "past continuous for the background and past simple for the events",
          "past simple for the events and past continuous for the background",
          "the past continuous and the past simple",
          "was doing for the background and did for the events",
        ],
        keywords: ["past simple", "past continuous"],
        hints: [],
        feedback: fb(
          "Past continuous paints the background; past simple carries the chain of events.",
          "The division of labour is what keeps a story easy to follow: the ongoing scene runs in the continuous while each new event lands in the simple — 'we were waiting when the alarm went off'.",
          "Answers that put the events in the continuous flatten the story into one undifferentiated moment; answers using only the simple lose the scenery entirely.",
        ),
        tags: ["speaking", "grammar", "tenses"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided speaking. Tell a short story in the past frame.",
        situation:
          "The examiner asks: 'Tell me about a journey that didn't go to plan.' Speak for thirty to forty seconds: set the background with the past continuous, land the events in the past simple, and link them with 'when' and 'because'. If you hear a frame leak, repair it once and carry on.",
        targetPhrases: [
          "I was… when everything changed",
          "…because nobody had checked…",
          "which is why we ended up…",
        ],
        mustSay: ["was", "when", "because"],
        hints: [
          "Choose the background action first — the thing already in progress when the problem arrived.",
          "Keep every event verb in the past simple; let 'was …ing' carry only the scenery.",
        ],
        feedback: fb(
          "A story with continuous background, simple-tense events and clean when and because links.",
          "The two past tenses give the listener a timeline without effort, and the linking clauses show range exactly where the story needs them. Replay once listening only for tense — the frame is the score.",
          "A story told entirely in one tense, or drifting between frames, forces the listener to rebuild your timeline — the one repair worth making.",
        ),
        tags: ["speaking", "grammar", "practice"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Independent practice. Mid-answer you notice you said 'yesterday I go'. What is the best move?",
        hints: [],
        options: [
          { id: "a", text: "Restart the whole answer from the first sentence so the record is clean." },
          { id: "b", text: "Repair once — 'go — sorry, went —' — and carry on with the answer." },
          { id: "c", text: "Say nothing and hope the examiner forgot the tense." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Repair once — 'go — sorry, went —' — and carry on with the answer.",
          "A single quick self-correction shows you monitoring your own speech — the criterion treats that as control — and it costs one second of an answer that keeps its momentum.",
          "(a) burns the whole turn to fix two words and reads as breakdown; (c) leaves a timeline error in place, and the recorder forgets nothing.",
        ),
        tags: ["speaking", "grammar", "monitoring"],
      }),
    ],
    assignment: {
      title: "The two-frame recording",
      instructions:
        "Record two forty-second answers to the same question — 'What do you do after work?' — one in routine mode (present simple with a when-clause) and one in story mode (one specific evening: past simple events with past continuous background). Then transcribe only your verbs from each recording and check that every verb stayed inside its frame.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Take the five steering structures — because, when, which, if and one comparative — and say one true sentence with each, aloud, every day this week, on a different topic each day.",
      "Keep an error log of the slips you catch in recordings: mark each one 'blocked meaning' or 'kept going', and rehearse repairs only for the first kind in your next practice.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-extending",
    title: "Extending answers naturally",
    description:
      "The five extension moves that turn bare facts into developed answers — contrast, example, feeling, consequence and time — plus the judgement of when an answer is finished and should stop before it becomes a lecture.",
    objectives: [
      "extend a one-fact answer with contrast, example, feeling, consequence or time",
      "choose the move the question invites instead of stacking all five by habit",
      "recognise the natural stopping point before an answer becomes a lecture",
      "keep Part 1 answers inside a brisk twenty-to-forty-second turn",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "The answer-development lesson built your replies in layers — the direct answer, the reason, the grounding detail. This lesson adds the sideways gear: five named directions a layered answer can travel next. Contrast flips to the other side of a fact, example lands a specific, feeling names what something does to you, consequence follows it into your week, and time shifts the era it belongs to. Each move is one sentence long, each is chosen because the question invited it — and knowing when to stop is the quiet half of the skill, taught here alongside the moves themselves.",
        beforeYouStart: [
          "You can build an answer in layers — reply, reason, detail — from the answer-development lesson.",
          "You can attach a reason to an opinion without a long pause while searching for it.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 1's brisk turns above all, with the same moves powering the long turn"],
          ["Task & question types", "Familiar-topic interview questions: habits, preferences, pasts and frequents"],
          ["What is assessed", "Fluency and Coherence first — extended, connected speech — with every criterion fed by the longer answer"],
          ["Why this matters", "Bare one-liners cap several criteria at once, while unbroken monologues invite interruption; the target sits between"],
        ],
      },
      { type: "heading", text: "What a one-line answer leaves unsaid" },
      {
        type: "text",
        text: "'Do you like coffee?' — 'Yes.' The answer is true, grammatical, precisely worded, and worth almost nothing on the recording, because criteria cannot score what was never said. Each criterion needs material: fluency needs connected stretches to flow through, vocabulary needs ideas precise enough to demand exact words, grammar needs a second sentence to vary its structures against, coherence needs a relationship — a contrast, a consequence — to make visible. Extension is not padding; it is feeding the marking scheme. Two to four sentences in Part 1, each doing a different job, is the working shape — and the five moves below are the jobs.",
      },
      { type: "heading", text: "The five moves, one sentence each" },
      {
        type: "steps",
        title: "The extension toolkit",
        steps: [
          { title: "contrast — 'but…'", text: "A contrast adds a second world to your one fact: 'I work in a very quiet office, but on Fridays the whole floor turns into a market.' The move costs one word and doubles the material, and its second half often surprises, which listeners enjoy.", examples: [{ english: "'I'm quite an indoor person, but my flatmate drags me on hikes most months' — one sentence, two lifestyles.", note: "One 'but' turns a single fact into a two-sided picture." }] },
          { title: "example — 'for instance…'", text: "An example grounds a general claim in a specific case: 'for instance, last week…'. Specifics are also where your best vocabulary lives — dates, places, small disasters — so the example move feeds two criteria at once.", examples: [{ english: "'Street food here is serious business — for instance, there's a dumpling stall near my stop that sells out by eight' — a claim plus proof.", note: "One concrete example outperforms three extra adjectives." }] },
          { title: "feeling — 'what I love about it is…'", text: "Naming your feeling turns information into a position: 'what I love about it is…', 'what drives me mad is…'. Feeling sentences invite exactly the natural, precise vocabulary the criterion rewards, because only you can say what your relationship to a thing actually is.", examples: [{ english: "'The park's nothing special, really — what I love about it is that it's never crowded' — honesty plus feeling in one line.", note: "Feelings are where vocabulary gets personal and precise." }] },
          { title: "consequence — 'which means…'", text: "A consequence shows your fact changing your life: '…which means I'm usually asleep before eleven'. It connects ideas explicitly, which is coherence made audible — the listener does not have to infer the link, because you said it.", examples: [{ english: "'My course starts at eight sharp, which means I've become a morning person against my will' — fact plus effect.", note: "'Which means' is coherence you can hear." }] },
          { title: "time — 'when I was younger…'", text: "A time shift adds depth: 'when I was younger…', 'since I moved here…', 'back in school…'. It also switches the tense frame, quietly demonstrating range without a single ambitious structure.", examples: [{ english: "'When I was a teenager I hated our cold winters; now I miss them, oddly' — one sentence, two eras, two frames.", note: "Time moves demonstrate tense range for free." }] },
        ],
      },
      {
        type: "table",
        title: "Which move does the question invite?",
        headers: ["Question shape", "The move it invites", "Because"],
        rows: [
          ["'Do you like / enjoy…?'", "Feeling, then a reason or contrast", "The question asks for a position, and a position wants a because"],
          ["'How often do you…?'", "Routine, then consequence", "Frequency invites what the habit does to your week"],
          ["'Did you… when you were a child?'", "Time, then contrast with now", "The question already points backwards; the contrast brings it home"],
          ["'What do people in your country…?'", "Example, then generalisation", "A claim about many people is proved by one visible case"],
          ["'Has X changed in your city?'", "Time, then consequence or example", "Change questions want before-and-after plus an effect"],
        ],
      },
      { type: "heading", text: "Stopping: the quiet half of the skill" },
      {
        type: "text",
        text: "An extended answer earns nothing if it never ends. The signs of the natural stopping point: your last sentence closed a little box — a feeling stated, a consequence landed — and the next move would open a new box rather than deepen this one. Land the closing sentence with falling pitch, breathe, and let the examiner work. In Part 1 that means twenty to forty seconds; in the long turn, the moves chain until your two minutes fill; in Part 3, two or three moves are usually enough before the discussion needs to breathe. If you hear yourself listing a third example of the same thing, you have already gone one sentence too far.",
      },
      {
        type: "example",
        title: "Moves in the wild",
        items: [
          { english: "'Do you cook much?' answered in three moves: 'Not on weekdays — I'm too hungry to wait. But on Sundays I cook properly, which means Monday's lunch is sorted too.'", note: "Contrast plus consequence, twelve seconds, answer complete.", domain: "exam" },
          { english: "A candidate describing her street: 'It's quiet, but at seven every morning the bakery opposite fills the whole building with the smell of bread.'", note: "Contrast delivering a sensory example in one sentence.", domain: "everyday" },
          { english: "Asked about study habits: 'I revise out loud, which means my family can recite my biology course by now' — a fact, an effect, and a laugh.", note: "Consequence plus feeling is a natural pairing.", domain: "study" },
          { english: "A new employee answering 'How's the job?' with 'Exhausting, honestly — for instance, today I walked eleven thousand steps inside one building' — feeling plus proof.", note: "An example makes a complaint specific and interesting.", domain: "work" },
          { english: "'Did you travel as a child?' — 'Only to my grandmother's village, but that six-hour train ride was the biggest adventure I knew' — time plus feeling inside one turn.", note: "Small material extends beautifully when the move fits.", domain: "travel" },
          { english: "A candidate stacks all five moves onto a Part 1 question about shoes and meets a gentle 'okay, and what about…' after fifty seconds — the examiner reclaiming the turn.", note: "Over-extension has a price: the next question arrives early.", domain: "exam" },
          { english: "In a long turn about a photograph, a speaker chains time, contrast, example and feeling and lands on '…which is why it's still my wallpaper' — two minutes, closed cleanly.", note: "The moves chaining is exactly what the long turn runs on.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Extension mistakes corrected",
        items: [
          { wrong: "Longer is always better — I should talk until the examiner stops me.", right: "Extend until the answer's little box closes — feeling stated or consequence landed — then stop with falling pitch and hand the turn back.", reason: "The examiner sets the turn lengths in Parts 1 and 3; answers that ignore the shape get cut short, and the cut usually lands mid-move." },
          { wrong: "I'll use all five moves in every answer so the examiner sees the full set.", right: "Choose the one or two moves the question invites; save chaining all five for the long turn.", reason: "Mechanical stacking sounds rehearsed and eats the turn; the criterion reads a well-chosen single move as competence, not shortage." },
          { wrong: "If I run out of things to say, repeating the question's words buys time.", right: "Repeat only to launch a move — 'My street? What I love about it is…' — never as filler before silence.", reason: "Echoing the question without adding anything reads as a stall, whereas the same echo followed by a feeling or an example reads as a considered answer." },
        ],
      },
      {
        type: "four-skills",
        title: "One question, extended and landed",
        reading: {
          text: "The question was 'Do you usually read in the evening?' Answer A: 'Yes, I do, in the evening I usually read.' Answer B: 'Most nights, yes — it's how I switch off after screens. What I love about it is that half an hour disappears completely. On weekends, though, I read in the mornings instead, which means my evenings are free for friends.' Answer B answers the question, adds a feeling, contrasts the weekend and lands a consequence — four sentences, each doing one job, finished before the examiner needed to move.",
          task: "List the three moves Answer B uses, in order.",
        },
        writing: {
          task: "Take the bare answer 'Yes, I usually walk to work.' and write three extended versions, each built on a different single move — contrast, consequence and feeling — then mark which version you would stop after in Part 1.",
          guide: [
            "Contrast version: continue with '…, but on rainy days…' or '…, but in winter…'.",
            "Consequence version: continue with '…, which means…' and one real effect on your week.",
            "Feeling version: continue with 'What I enjoy about it is…' and one precise detail.",
            "Stop test: if your next sentence would open a new box, that is the examiner's turn, not yours.",
          ],
          model: "Contrast: 'Yes, I usually walk to work, but in December the dark mornings push me onto the bus.' Consequence: 'Yes, usually — it's forty minutes each way, which means I get through two podcasts a week without trying.' Feeling: 'Yes, and what I enjoy about it is the stretch along the river where the traffic can't reach.' That last version ends on a closed feeling — the natural place to hand the turn back.",
        },
        listening: {
          script: "Tutor: Your shoe answer ran a minute ten. Too long for Part 1. Candidate: I thought more was better. Tutor: Listen to where the examiner's pen stopped moving — around second forty. Candidate: After the third example. Tutor: Right. First example, great. Second, fine. Third example of the same shoe — the box was already closed. Play your closing sentence again. Candidate: '…so yes, that's basically my relationship with shoes.' Tutor: Flat pitch, no fall — it didn't sound finished. Re-record it: two moves, then fall on the last word.",
          task: "At roughly which second does the tutor say the answer finished its useful work, and what two fixes does she assign?",
        },
        speaking: {
          task: "Answer 'Do you usually cook in the evening?' twice: first with a contrast move only, then with a consequence move only. Land each answer with falling pitch on the final word and stop talking.",
          frames: [
            "Usually I…, but on …s, though, …",
            "…, which means my … is usually …",
            "What I like about that is…",
          ],
          checklist: [
            "Did each answer stop inside twenty to forty seconds?",
            "Did the final word carry a falling pitch before I stopped?",
            "Could a listener name which single move I used?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Development", "Each version turns one bare fact into three or four sentences of material — enough for every criterion to see the candidate's real level inside a short turn."],
          ["Move choice", "Contrast, consequence and feeling are chosen because the question invited them, not stacked mechanically — the fit is what makes the extension sound spontaneous."],
          ["Coherence", "'But', 'which means' and 'what I enjoy about it is' state the relationship between ideas out loud, which is the coherence criterion's raw material."],
          ["Turn shape", "Every version closes its box and hands the turn back with falling pitch, keeping the examiner's Part 1 rhythm intact."],
          ["Range", "The feeling version quietly shifts tense and vocabulary register, showing range without a single ambitious structure."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Learn the five moves as stems you can start anywhere: but, for instance, what I love about it is, which means, when I was younger."],
          ["While the clock runs", "Answer first, add the invited move second, and close on a landed sentence with falling pitch rather than a faded one."],
          ["If you are stuck", "Reach for the time move — 'when I was younger…' — because memories arrive faster than opinions under pressure."],
          ["Final minutes", "In the last exchanges keep answers to one or two moves; late-test fatigue turns chaining into rambling faster than candidates notice."],
        ],
      },
      {
        type: "summary",
        points: [
          "A bare fact starves every criterion; two to four sentences, each doing a different job, is the working Part 1 shape.",
          "The five moves are contrast, example, feeling, consequence and time — one sentence each, chosen because the question invited it.",
          "The question's shape tells you which move it wants: 'do you like' wants feeling, 'how often' wants consequence, 'as a child' wants time.",
          "Stop when the box closes: land the final sentence with falling pitch and hand the turn back before the third example of the same point.",
          "Chaining all five moves belongs to the long turn; in Part 1 it reads as a lecture and gets cut short.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Which connectives suit a spoken register, according to the vocabulary lesson?", options: ["Furthermore, moreover, in conclusion", "And, to be honest, the thing is, that said", "Only full formal sentences with no contractions"], correctIndex: 1, explanation: "Conversation runs on its own small links; essay connectors said aloud sound borrowed and often stall the flow they were meant to build.", from: "Vocabulary for speaking" },
          { question: "Routines are described in which tense frame, according to the grammar lesson?", options: ["The past continuous", "The present simple, with present perfect for duration", "The future simple"], correctIndex: 1, explanation: "Routine mode runs on the present simple, and the present perfect covers states that started in the past and still hold — one frame per answer.", from: "Grammar accuracy in speech" },
          { question: "What does the Fluency and Coherence criterion reward?", options: ["Speech that flows and connects, with pauses for meaning rather than for missing words", "Zero hesitation of any kind", "The largest number of words per minute"], correctIndex: 0, explanation: "Fluency is flow and connection — extension moves feed it — while meaning-pausing is natural and hesitation-hunting only damages delivery.", from: "What the examiner assesses" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. 'Do you enjoy cooking?' Which opening shows the feeling move?",
        hints: ["The move names your relationship to the activity, not just a fact about it."],
        options: [
          { id: "a", text: "I cook about four times a week, usually pasta." },
          { id: "b", text: "Honestly, yes — what I love about it is that nobody interrupts me for an hour." },
          { id: "c", text: "I learned to cook from my grandmother when I was ten." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Honestly, yes — what I love about it is that nobody interrupts me for an hour.",
          "The feeling move names your relationship — 'what I love about it is' — and then gives it precise content; the question invited a position and got one.",
          "(a) answers a frequency question nobody asked; (c) is the time move answering a history question the examiner did not set.",
        ),
        tags: ["speaking", "extension", "feeling"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. You have answered a Part 1 question with a fact and one contrast move. What is usually the right next step?",
        hints: ["Think about who owns the length of a Part 1 turn."],
        options: [
          { id: "a", text: "Add two more moves so the answer feels substantial." },
          { id: "b", text: "Land the closing sentence with falling pitch, stop, and hand the turn back to the examiner." },
          { id: "c", text: "Repeat the question's words while deciding what else to say." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Land the closing sentence with falling pitch, stop, and hand the turn back to the examiner.",
          "Part 1 turns are short by design: a fact plus one well-chosen move answers the question fully, and stopping cleanly shows control of the interview's rhythm.",
          "(a) turns a complete answer into a lecture the examiner will cut short; (c) is a stall the recorder captures as hesitation.",
        ),
        tags: ["speaking", "extension", "turn-shape"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Read the scene and decode the coach's instruction.",
        hints: [],
        passageTitle: "Close the box",
        passage:
          "The practice set asked 'Do you usually cook in the evening?' Karin's first attempt came out as: 'Yes, I usually cook in the evening, in the evening I cook dinner.' Her coach asked for one more try with a single instruction: close the box. Second attempt: 'Most evenings, yes, because eating out every night would ruin me. On Fridays, though, we order in, which means the kitchen gets a rest and so do I.' The coach stopped her there, before she could reach for a third sentence, and told her the second answer was complete.",
        question: "What did the coach's instruction 'close the box' ask Karin to do?",
        options: [
          { id: "a", text: "Cook the meal inside the story she tells" },
          { id: "b", text: "Let her final sentence complete the idea — consequence landed — instead of circling the same fact twice" },
          { id: "c", text: "Stop answering Part 1 questions with yes at the start" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Let her final sentence complete the idea — consequence landed — instead of circling the same fact twice",
          "Her first attempt repeats one fact; her second answers, gives a reason, contrasts Fridays and lands a consequence — a closed box that needs no third sentence, which is exactly the stopping judgement this lesson teaches.",
          "(a) takes the metaphor literally; (c) identifies a wording habit, not the structural job the coach was pointing at.",
        ),
        tags: ["speaking", "extension", "stopping"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Recall the extension toolkit.",
        question: "Four extension moves are contrast, example, feeling and consequence. What is the fifth?",
        acceptedAnswers: [
          "time",
          "the time move",
          "time shift — like when I was younger",
          "time, for instance when I was younger",
        ],
        keywords: ["time", "younger"],
        hints: [],
        feedback: fb(
          "Time — the move that shifts the era, as in 'when I was younger…'.",
          "The five moves cover the natural directions an answer can travel: sideways for contrast, into specifics for example, inward for feeling, forward for consequence and backward for time — one of them always fits the question.",
          "Answers naming a sixth direction usually restate one of the five in different words.",
        ),
        tags: ["speaking", "extension", "moves"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided speaking. Extend one answer with two moves, then stop.",
        situation:
          "The examiner asks: 'Do you usually cook in the evening?' Answer for about twenty seconds using a contrast move and then a consequence move, and land the final word with falling pitch before you stop.",
        targetPhrases: [
          "but on …, though, everything changes",
          "…, which means…",
          "What I love about that is…",
        ],
        mustSay: ["but", "which means", "evening"],
        hints: [
          "Pick the contrasting day or season before you press record, so the 'but' arrives without a pause.",
          "Let 'which means' carry one real effect on your week, then stop — resist the third move.",
        ],
        feedback: fb(
          "A fact, a contrast, a consequence and a clean fall on the final word.",
          "Two moves are the full Part 1 meal: the contrast doubles your material and the consequence connects it, and the falling pitch tells the examiner the turn is finished. Replay and check that you actually stopped.",
          "Running on to a third or fourth move turns a crisp answer into a lecture; fading out instead of falling leaves the examiner unsure whether you finished.",
        ),
        tags: ["speaking", "extension", "practice"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which behaviour is over-extension — extending past the natural stop?",
        hints: [],
        options: [
          { id: "a", text: "Using two moves that the question invited, then stopping with falling pitch" },
          { id: "b", text: "Hearing yourself open a third example of the same point after the feeling was already stated" },
          { id: "c", text: "Answering a Part 1 question in three sentences instead of one" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Hearing yourself open a third example of the same point after the feeling was already stated",
          "Once a box closes — feeling stated, consequence landed — further sentences open new boxes the turn cannot afford; the third example of the same point is the classic tell that stopping was due two sentences earlier.",
          "(a) describes a well-shaped short turn; (c) is the normal, healthy length for Part 1 — three sentences is not a lecture.",
        ),
        tags: ["speaking", "extension", "stopping"],
      }),
    ],
    assignment: {
      title: "Five questions, five moves",
      instructions:
        "Write the first two sentences of five different Part 1 answers, each opening with a different extension move — one 'but', one 'for instance', one 'what I love about it is', one 'which means', one 'when I was younger' — on five topics of your choice. Then mark, for each answer, the sentence you would land and stop on.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Answer five Part 1 questions aloud, one move each, forcing yourself to stop inside forty seconds; replay each and check whether your final word fell in pitch.",
      "Listen to one minute of any interview in English and note every contrast, example and consequence the speaker uses — then borrow the two most natural for your next practice set.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-unfamiliar",
    title: "Handling unfamiliar questions",
    description:
      "Honest strategies for questions you never prepared: buying time in natural English, thinking aloud as valid speech, the 'haven't really thought about it, but if I had to' frame, bridging from the unfamiliar to the familiar — and never pretending knowledge you lack.",
    objectives: [
      "buy two or three seconds with natural spoken fillers instead of silence",
      "think aloud in whole sentences while you search for a position",
      "use the honest 'haven't really thought about it, but if I had to' frame",
      "bridge an unfamiliar topic onto familiar ground without inventing facts",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Sooner or later — usually in Part 3 — a question arrives that you have never considered, in a domain you know nothing about, and the recorder keeps running. What you do in the next three seconds decides almost nothing about your knowledge and everything about your band, because the criteria cannot score silence and cannot verify facts, but they score speech continuously. The honest strategies in this lesson — buying time naturally, thinking aloud, admitting novelty and reasoning anyway — turn 'I don't know' into 'I haven't thought about this, but here's how it looks to me', which is a complete, scoreable answer.",
        beforeYouStart: [
          "You can hold a tense frame and steer a because-clause while speaking.",
          "You have met at least one practice question that stopped you cold.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 3 above all, where questions turn abstract, and any part where the topic runs past your experience"],
          ["Task & question types", "Speculation, evaluation and opinion questions built to push past prepared material"],
          ["What is assessed", "Fluency and Coherence under search pressure, with vocabulary and grammar still feeding on whatever speech you produce"],
          ["Why this matters", "The unfamiliar question is where rehearsed candidates collapse and honest, fluent ones keep every criterion fed"],
        ],
      },
      { type: "heading", text: "What the recorder hears when you don't know" },
      {
        type: "text",
        text: "Compare three reactions to an unanswerable question. Silence: the recorder captures nothing, and every criterion starves together. 'I don't know': two words, then the same silence with a full stop. Invention — a statistic you made up, an expert you cannot name: the recorder captures fluent lies, and examiners, who hear hundreds of answers, catch them almost instantly; the response collapses across criteria at once, because its language now rests on nothing. The fourth reaction — thinking aloud in honest English — captures continuous, connected, meaning-driven speech, which is precisely what the criteria exist to measure. Knowledge was never being tested. Reasoned speech was, and reasoning is available to everyone in the room.",
      },
      { type: "heading", text: "The honest toolkit, in order" },
      {
        type: "steps",
        title: "From blank face to full answer",
        steps: [
          { title: "Buy the seconds naturally", text: "Three seconds of natural English buys real thinking time: 'That's an interesting one…', 'Hmm, off the top of my head…', 'I've never been asked that before…'. These are not tricks — they are what fluent speakers of every level actually say while thinking, and the recorder counts them as speech. The boundary matters: on a question you could answer right now, open with the answer — the time-buyer belongs to questions that genuinely need the seconds.", examples: [{ english: "'That's an interesting one — I suppose it depends on the city' — four seconds bought, and a position already forming inside them.", note: "The filler and the thinking happen at the same time." }] },
          { title: "Think aloud, in sentences", text: "Narrate your reasoning instead of pausing inside it: 'The first thing that comes to mind is…', 'On the one hand…, but then again…'. Thinking aloud is not a weak substitute for an answer — in a speaking test it is the answer, because the reasoning is the content.", examples: [{ english: "'My first thought is that it saves time, but then again, the time gets spent learning the thing anyway' — a real position, built live.", note: "Two halves of a real argument, said as they form." }] },
          { title: "Admit novelty, then answer anyway", text: "The honest frame: 'I haven't really thought about it, but if I had to…'. The admission costs nothing — nobody expects a considered policy on everything — and the 'but' converts an empty answer into a first attempt, which is all any opinion question needs.", examples: [{ english: "'I haven't really thought about it, but if I had to choose, I'd say museums should be free for locals' — novelty admitted, position taken.", note: "The frame is a complete sentence, not an apology." }] },
          { title: "Bridge to what you know", text: "Relate the strange topic to a cousin you do know: a question about funding space research becomes a question about priorities you have watched your own city argue about. The bridge — 'it's a bit like…' — is visible, honest, and instantly lends you vocabulary and examples.", examples: [{ english: "'It's a bit like when our council renovated the stadium instead of the schools — same argument about visible projects versus daily needs'.", note: "A bridge lends you your own examples." }] },
          { title: "Never manufacture facts", text: "The one hard line: invent no statistics, no experts, no events. If evidence would help, say what you would want: 'I'd want to see the numbers before believing that.' Reasoning from principle beats a fabricated fact every time, on every criterion.", examples: [{ english: "'I don't know the figures, but logically, if buses were free the city would have to tax something else' — honest, and still analytical.", note: "Principles are always available; facts are not." }] },
        ],
      },
      {
        type: "table",
        title: "Silence, invention or speech?",
        headers: ["Reaction", "What the recorder captures", "Better move"],
        rows: [
          ["A long silent pause", "Nothing at all — every criterion starves for the duration", "Buy three seconds with 'that's an interesting one…'"],
          ["'I don't know' with a full stop", "Two words, then silence with the question still standing", "Add the frame: '…but if I had to guess…'"],
          ["An invented statistic or expert", "Fluent speech resting on nothing; experienced examiners hear the join", "Reason from principle: 'logically, it would depend on…'"],
          ["Thinking aloud through both sides", "Continuous, connected, meaning-driven speech — the criteria's raw material", "Stay with it; this is the answer"],
        ],
      },
      { type: "heading", text: "Why honesty is also strategy" },
      {
        type: "text",
        text: "It is worth saying plainly: the frame that scores best is also the truthful one. 'I haven't really thought about it, but if I had to…' works because it keeps producing language, shows structure under pressure, and builds a position the follow-up questions can develop. Invention produces the opposite: a fabricated fact cannot survive 'why do you think that?', and its collapse takes fluency, coherence and credibility down together. If you ever doubt this, remember what the examiner's follow-up questions are for — they probe exactly the answers that sounded too confident. Reasoned honesty is the only strategy that survives probing, which is why it is taught here as strategy and not as virtue.",
      },
      {
        type: "example",
        title: "Unfamiliar ground, crossed honestly",
        items: [
          { english: "Asked whether governments should fund space programmes, a candidate opens: 'That's an interesting one — I've never really followed it, but if I had to pick a side, I'd say basic science wins over flags on Mars.'", note: "Time bought, novelty admitted, position taken — in one breath.", domain: "exam" },
          { english: "A question about antique collecting gets bridged: 'It's a bit like people my age collecting sneakers — same urge, smaller shelves' — and suddenly the candidate has examples.", note: "The cousin topic supplies vocabulary for free.", domain: "everyday" },
          { english: "In a seminar, a student asked about a paper she hasn't read says: 'I can't speak to that study, but the principle would suggest…' — and keeps her credibility intact.", note: "The honest frame works identically at university.", domain: "study" },
          { english: "A junior analyst asked for figures he doesn't have answers: 'I wouldn't want to invent a number — what I can say is the pattern usually…', and the meeting moves on without damage.", note: "Refusing to manufacture facts reads as senior, not weak.", domain: "work" },
          { english: "Asked 'Should tourism be limited in historic cities?', a candidate thinks aloud through crowding, then through prices, and lands on timed tickets — an answer built entirely in real time.", note: "The reasoning is the content; nothing was prepared.", domain: "travel" },
          { english: "A candidate who invents 'ninety per cent of people prefer remote work' meets the follow-up 'where does that figure come from?' — and the collapse is audible.", note: "Fabrication dies on the first 'why?' or 'where from?'.", domain: "exam" },
          { english: "Faced with a question about opera, a candidate says 'I know almost nothing about opera, to be honest — my reference point is film music' and delivers a developed comparison.", note: "Naming your reference point is the bridge, said honestly.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Unfamiliar-question mistakes corrected",
        items: [
          { wrong: "If a question is outside my knowledge, I should say as little as possible and wait for an easier one.", right: "Say your way toward an answer: buy seconds, admit novelty, reason aloud — the criteria score speech, and silence scores nothing.", reason: "Part 3 questions are designed to leave prepared ground; short non-answers surrender exactly the stretch of the test where thinking skills are on display." },
          { wrong: "A confident statistic sounds impressive, even if I'm not sure it's true.", right: "Give reasoning instead of figures you cannot source, and say what evidence you would want to see.", reason: "Follow-up questions probe confident claims first, and an invented fact cannot survive being asked about — the whole answer collapses with it." },
          { wrong: "I should script answers for every possible topic so nothing surprises me.", right: "Prepare movable skills — the honest frame, bridging, thinking aloud — that work on topics you never predicted.", reason: "Topic space is infinite and follow-ups are unscripted; skills travel where scripts cannot, and rehearsed wording usually sounds rehearsed exactly when it matters most." },
        ],
      },
      {
        type: "four-skills",
        title: "The unanswerable question, answered honestly",
        reading: {
          text: "Part 3 practice: 'Should cities spend more on museums or on sports facilities?' Rafa's first instinct was to decline — he visits neither. Instead he heard himself say: 'Genuinely not something I've thought about — but if I had to, I'd say museums, because a city's memory outlives any season. Then again, stadiums keep thousands of teenagers busy on Saturdays, which museums can't claim. So maybe both, funded from different pockets?' The recorder captured forty-five seconds of balanced reasoning, two conditionals, four linkers and a genuine conclusion — from a question he knew nothing about.",
          task: "List the toolkit moves Rafa used, in order, and the two sides he weighed.",
        },
        writing: {
          task: "Write your own short answer to a question you have genuinely never considered — 'Should old buildings always be preserved?' — using all four honest moves: a natural time-buyer, the novelty admission, thinking aloud through two sides, and a small conclusion.",
          guide: [
            "Open with a natural time-buyer, not a pause: 'Off the top of my head…'.",
            "Admit novelty with the full frame: 'I haven't really thought about it, but if I had to…'.",
            "Think aloud through one argument on each side — 'on the one hand… but then again…'.",
            "Close small and honest: 'So maybe…?' or 'I'd want to see the costs before deciding.'",
          ],
          model: "Off the top of my head, I haven't really thought about it — but if I had to, I'd keep the buildings that carry a story and let go of the ones that are merely old, because a city needs its memory but not its dust. Then again, 'merely old' is exactly what future generations call the buildings we scrap today. So my honest answer is: preserve slowly, and ask the people who live beside them first.",
        },
        listening: {
          script: "Examiner: Why do you think some people are drawn to extreme sports? Candidate: That's an interesting one — I'm honestly the opposite, I get nervous on escalators. Examiner: Take your time. Candidate: Well, the first thing that comes to mind is the feeling afterwards — people say the ordinary day feels sharper. Then again, maybe it's just that some people's bodies need more intensity than office life provides, a bit like how I need headphones to concentrate. I suppose it's about buying strong sensations in the safest possible way? Examiner: That's a considered answer. Candidate: It's a considered guess, really — but it's mine.",
          task: "Which three honest moves does the candidate use, and what does she bridge to?",
        },
        speaking: {
          task: "Choose a topic you genuinely know nothing about — chess engines, wine, ballet — and answer 'Why do people love it?' for thirty seconds using a time-buyer, the honest frame and one bridge.",
          frames: [
            "That's an interesting one — off the top of my head…",
            "I haven't really thought about it, but if I had to…",
            "It's a bit like…, which is the part I do know.",
          ],
          checklist: [
            "Did I keep speaking in whole sentences for the full half minute?",
            "Did I admit novelty instead of inventing knowledge?",
            "Did my bridge reach something I actually know?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Fluency", "The model never stops producing connected speech: filler, frame and reasoning carry the answer across every moment where a search pause would otherwise open."],
          ["Coherence", "'On the one hand… then again… so maybe' builds a visible two-sided structure and a conclusion the follow-up questions can develop."],
          ["Vocabulary", "The bridge imports a familiar domain's words into the strange one, so range shows up exactly where the topic should have emptied it."],
          ["Grammar", "A conditional, a comparative and a because-clause all arrive naturally inside the reasoning — range without any structure being forced."],
          ["Honesty", "Nothing in the model depends on unverifiable facts, so no follow-up question can collapse it — the strategy survives probing by design."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Fix the honest frame in your mouth — 'I haven't really thought about it, but if I had to…' — until it starts itself under pressure."],
          ["While the clock runs", "Buy seconds in English, admit novelty early, and reason through two sides; treat your own thinking as the content of the answer."],
          ["If you are stuck", "Bridge to the nearest thing you do know — 'it's a bit like…' — and develop the cousin topic instead of the strange one."],
          ["Final minutes", "Hold the honest habits when fatigue makes invention tempting: a small reasoned guess outscores a big confident invention every time."],
        ],
      },
      {
        type: "summary",
        points: [
          "Silence and 'I don't know' score nothing; thinking aloud is real speech and feeds every criterion.",
          "Buy time naturally — 'that's an interesting one…' — because natural fillers are what fluent speakers say while thinking.",
          "The honest frame — 'I haven't really thought about it, but if I had to…' — converts an empty answer into a first attempt.",
          "Bridging — 'it's a bit like…' — carries vocabulary and examples across from a cousin topic you actually know.",
          "Never invent facts: follow-up questions probe confident claims first, and a fabricated figure collapses the whole answer with it.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Which clause did the grammar lesson recommend for adding a comment to a whole statement?", options: ["A because-clause", "A which-clause — '…, which surprised everyone'", "An if-clause"], correctIndex: 1, explanation: "The which-clause tacks your judgement onto a complete statement, which is exactly what an on-the-spot conclusion needs.", from: "Grammar accuracy in speech" },
          { question: "What are the five extension moves from the answer-development lesson?", options: ["Contrast, example, feeling, consequence and time", "Pause, repeat, translate, apologise, restart", "Speed, volume, accent, grammar, vocabulary"], correctIndex: 0, explanation: "Those five directions — sideways, into specifics, inward, forward and backward in time — are the toolkit an answer can grow along when the first idea runs out.", from: "Extending answers naturally" },
          { question: "In the test's own structure, what is Part 3?", options: ["A read-aloud task on an unseen text", "A two-way discussion of more abstract questions linked to the Part 2 topic", "A second cue card with harder vocabulary"], correctIndex: 1, explanation: "Part 3 opens the topic outward into abstract discussion — exactly where unfamiliar questions live and these honest strategies matter.", from: "The Speaking examination format" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. A Part 3 question arrives that you have never considered. Which opening buys you thinking time in natural, scoreable English?",
        hints: ["The recorder counts natural fillers as speech — but only real ones."],
        options: [
          { id: "a", text: "A five-second silence while you think." },
          { id: "b", text: "That's an interesting one — I haven't really thought about it before." },
          { id: "c", text: "Could you repeat the question, please, and also simplify it?" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "That's an interesting one — I haven't really thought about it before.",
          "The natural time-buyer keeps speech flowing while the mind works, admits novelty honestly, and hands you the 'but if I had to…' frame to continue with — three tools inside one sentence.",
          "(a) captures nothing for any criterion in the room; (c) spends your one clarification on avoiding the question rather than moving toward an answer.",
        ),
        tags: ["speaking", "unfamiliar", "time-buying"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Why does thinking aloud count as a real answer in the Speaking test?",
        hints: ["What can the criteria actually measure — knowledge, or speech?"],
        options: [
          { id: "a", text: "Because examiners lower their expectations for hard questions." },
          { id: "b", text: "Because the criteria measure continuous, connected, meaning-driven speech — and reasoning aloud produces exactly that." },
          { id: "c", text: "Because silence is marked as rude rather than weak." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because the criteria measure continuous, connected, meaning-driven speech — and reasoning aloud produces exactly that.",
          "The recorder can only ever score speech: reasoning voiced in whole sentences is continuous, coherent and meaning-driven, which is the raw material every criterion reads — whatever the topic's difficulty.",
          "(a) invents a generosity the scale does not contain; (c) confuses etiquette with marking — silence loses marks as absence, not as rudeness.",
        ),
        tags: ["speaking", "unfamiliar", "thinking-aloud"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Read the scene and decode the coach's one-line verdict.",
        hints: [],
        passageTitle: "The follow-up",
        passage:
          "Asked whether remote work helps the environment, Dinora answered at once: 'Definitely — studies show seventy per cent of pollution comes from commuting, so home offices obviously save the planet.' The examiner nodded and asked where that figure came from. Dinora's pace halved. 'I read it… somewhere, I think, in a news article — or maybe a video.' The next two answers came slower and shorter, and the confident opening was never developed again. Her coach, reviewing the recording, wrote one line at that first exchange: 'Reasoned beats invented.'",
        question: "What does the coach's line 'Reasoned beats invented' most precisely mean here?",
        options: [
          { id: "a", text: "Confident statistics should be delivered faster so follow-ups cannot catch them out." },
          { id: "b", text: "A reasoned argument from principle survives probing; an invented figure collapsed the answer and shook the candidate's rhythm for the rest of the test." },
          { id: "c", text: "Remote work is too technical a topic for the Speaking test." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A reasoned argument from principle survives probing; an invented figure collapsed the answer and shook the candidate's rhythm for the rest of the test.",
          "The fabricated figure could not survive one 'where from?', and its collapse cost more than the words: fluency, coherence and confidence all dipped together, which reasoning from principle would never have done.",
          "(a) treats the failure as a delivery problem rather than an honesty problem; (c) blames the topic for a strategy error the candidate could have fixed mid-answer.",
        ),
        tags: ["speaking", "unfamiliar", "honesty"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Recall the honest frame.",
        question: "When a question is completely new to you, what full frame turns an empty answer into a first attempt?",
        acceptedAnswers: [
          "I haven't really thought about it, but if I had to…",
          "I haven't really thought about it, but if I had to guess or choose…",
          "I've never considered it, but if I had to pick…",
          "I haven't thought about it, but if I had to decide…",
        ],
        keywords: ["thought about it", "if I had to"],
        hints: [],
        feedback: fb(
          "I haven't really thought about it, but if I had to…",
          "The frame admits novelty — which costs nothing, since nobody expects considered policies on everything — and the 'but' immediately converts the admission into a live first attempt that follow-up questions can develop.",
          "Frames that stop at the admission leave silence behind them; frames that skip the admission risk pretending knowledge the very next question will expose.",
        ),
        tags: ["speaking", "unfamiliar", "honest-frame"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided speaking. Answer an unfamiliar question honestly.",
        situation:
          "The examiner asks: 'Why do you think some people collect things — stamps, vinyl, sneakers?' Answer for about thirty seconds: open with 'That's an interesting one…', use the honest frame if the question is new to you, reason aloud with 'I suppose…', and bridge to anything you actually know about.",
        targetPhrases: [
          "That's an interesting one…",
          "I haven't really thought about it, but if I had to…",
          "It's a bit like…",
        ],
        mustSay: ["interesting", "suppose", "if I had to"],
        hints: [
          "Start the recording with the time-buyer — it is the easiest first word you will ever say.",
          "Let the bridge be honest: compare collecting to something you genuinely know, however small.",
        ],
        feedback: fb(
          "Half a minute of continuous, honest reasoning with a time-buyer, the frame and one bridge.",
          "The four moves chain naturally: the filler opens the airway, the frame buys honesty, the reasoning supplies content, and the bridge imports vocabulary you already own. Replay once and mark where each move happened.",
          "Stopping at the admission, or reaching for an invented expert statistic, abandons the only things the criteria can score — your own connected speech.",
        ),
        tags: ["speaking", "unfamiliar", "practice"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why is bridging — 'it's a bit like…' — an honest strategy rather than an evasion?",
        hints: [],
        options: [
          { id: "a", text: "Because it changes the question into one the examiner prefers." },
          { id: "b", text: "Because it names your actual reference point and reasons from it, instead of pretending to know the unfamiliar topic." },
          { id: "c", text: "Because examiners cannot tell the difference between the two topics." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because it names your actual reference point and reasons from it, instead of pretending to know the unfamiliar topic.",
          "A visible bridge declares exactly what you know — 'my reference point is film music' — and builds the answer on that truth, so every claim you make survives a follow-up question about it.",
          "(a) credits the move with powers it does not have — the question still stands; (c) assumes the listener is fooled, when the point is that nothing needs fooling: honest reasoning is fully scoreable.",
        ),
        tags: ["speaking", "unfamiliar", "bridging"],
      }),
    ],
    assignment: {
      title: "The honest answer, written and spoken",
      instructions:
        "Choose a Part 3 question you have genuinely never considered (for example: 'Should old cars be banned from city centres?'). Write the opening three sentences of your answer using a natural time-buyer, the honest frame, and one bridge to something you know — then record yourself finishing the answer aloud, thinking your way to a small conclusion.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Practise the honest frame until it is automatic: give it to ten unanswerable questions this week, from 'Should boxing be banned?' to 'Do trees have rights?' — five seconds each, aloud.",
      "Collect three natural time-buyers from English conversations or interviews you hear this week, and test which one feels most natural in your own mouth.",
    ],
  },
];
