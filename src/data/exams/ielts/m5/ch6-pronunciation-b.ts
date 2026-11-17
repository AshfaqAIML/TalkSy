/**
 * Chapter 6B — Pronunciation (Part B).
 *
 * The last five lessons of the Speaking Masterclass pronunciation chapter:
 * linking technique, rhythm, pausing, clear articulation and natural speech.
 * The accent-neutral stance continues unchanged: intelligibility is the
 * criterion, no national accent is worth more than another, and every band
 * reference reads as an estimate. All practice material stays original.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingPronunciationLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-linking",
    title: "Linking",
    description:
      "The practical craft of running words together: the small w and y glides English inserts between vowels, consonant-to-vowel joins, single-beat double consonants — drilled through a three-rung ladder from phrase to sentence to full answer.",
    objectives: [
      "produce the w and y glides English inserts between vowel-ending and vowel-beginning words",
      "join final consonants to following vowels without a break and hold twin consonants as one sound",
      "climb the practice ladder from short phrases to carrier sentences to complete answers",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "The previous lesson taught you to hear words melting together; this one teaches your mouth to do the melting. English has a small toolkit for closing the gaps between words — two invisible little consonants that appear from nowhere between vowels, a hop that carries final consonants into following vowels, and a single held beat where two identical consonants meet. None of these techniques is complicated; each is a habit, and habits are built on a ladder: phrase first, sentence second, full answer last.",
        beforeYouStart: [
          "You can already hear and name the seam processes from the connected-speech lesson.",
          "You can record yourself and listen back for one feature at a time, as the sounds lesson trained.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 1's short conversational turns show links most clearly, but every part benefits"],
          ["Task & question types", "Everyday answers about routines and habits, Part 2 narrations, and any answer where two vowels collide across a word boundary"],
          ["What is assessed", "Pronunciation — smooth, unbroken delivery between words sits inside the connected-speech language of the top descriptors"],
          ["Why this matters", "A glottal stop before every vowel chops your speech into syllables, and chopping is the opposite of the flow the criterion rewards"],
        ],
      },
      { type: "heading", text: "Component 1 — The two invisible consonants" },
      {
        type: "text",
        text: "Say go on out loud, slowly, and listen for the tiny w that appears between go and on: go-won. Say I am and hear the small y: I-yam. English never leaves two vowels nose to nose; it slides between them on one of two little consonants. Which one appears is decided by the shape of your lips at the end of the first word. Finish a word with rounded lips — go, do, too, you — and a w grows there, because the lips are already halfway to making it. Finish a word with a wide, spread mouth — see, she, I, say — and a y grows instead. These glides are not optional decoration: speakers of every English on earth use them, and their absence is precisely what makes delivery sound chopped.",
      },
      {
        type: "table",
        title: "Glides in action, sorted by lip shape",
        headers: ["First word ends with", "The glide that appears", "Slowly said", "Heard at speed"],
        rows: [
          ["Rounded lips: the oo of go, do, too", "A small w", "go on", "go-won"],
          ["Rounded lips: the oh of so, no, you", "A small w", "you asked", "you-wasked"],
          ["Spread mouth: the ee of see, she, we", "A small y", "we agree", "we-yagree"],
          ["Spread mouth: the i of I, my, by", "A small y", "I am", "I-yam"],
          ["Spread mouth: the ay of say, play", "A small y", "say it again", "say-yit again"],
        ],
      },
      {
        type: "audio",
        label: "Listen: w glides between rounded vowels",
        mode: "tts",
        text: "go on. do it. too early. you asked.",
        rate: 0.85,
      },
      {
        type: "audio",
        label: "Listen: y glides between spread vowels",
        mode: "tts",
        text: "I am. we agree. she always wins. say it again.",
        rate: 0.85,
      },
      { type: "heading", text: "Component 2 — Joins you are already halfway to" },
      {
        type: "text",
        text: "Two more techniques complete the kit, and both are easier than the glides. The consonant-to-vowel join you met last lesson: a final consonant simply hops forward — tur-ni-toff, a-napple — with no break and no extra sound. Then there is the twin consonant, the rarest and the most satisfying: when one word ends and the next begins with exactly the same consonant, English holds a single, slightly longer beat instead of saying it twice. Some money becomes suh-money with one m, this song becomes thi-song with one s, and best time becomes bes-time with one t. The beginner's version — some-muh money, with the consonant said twice and a shy vowel between — is the fingerprint of careful, choppy delivery, and removing it takes one focused listening pass.",
      },
      {
        type: "table",
        title: "The three techniques side by side",
        headers: ["Technique", "Where it applies", "Careful version", "Linked version"],
        rows: [
          ["The w glide", "Vowel to vowel, first word ends rounded", "go on", "go-won"],
          ["The y glide", "Vowel to vowel, first word ends spread", "I am", "I-yam"],
          ["Consonant hop", "Consonant to vowel across the boundary", "turn it off", "tur-ni-toff"],
          ["Twin hold", "Same consonant on both sides of the boundary", "some money", "suh-money (one m)"],
        ],
      },
      {
        type: "audio",
        label: "Listen: twin consonants held as one beat",
        mode: "tts",
        text: "some money. this song. best time. bus stop.",
        rate: 0.85,
      },
      {
        type: "steps",
        title: "The three-rung ladder: phrase, sentence, answer",
        intro: "One join at a time, climbing from safe to test-real.",
        steps: [
          {
            title: "Rung 1: Phrases at half speed",
            text: "Take four phrases — one per technique — and say each five times slowly, exaggerating the join: go-WON, I-YAM, tur-NI-toff, suh-MONEY. Half speed keeps the movement honest and lets your ear check that no extra vowel snuck in between the twin consonants.",
            examples: [
              { english: "Drill set: 'go on', 'I am', 'turn it off', 'some money' — five slow repetitions each, joins exaggerated.", note: "Four phrases cover the whole toolkit in under three minutes." },
            ],
          },
          {
            title: "Rung 2: Carrier sentences at walking pace",
            text: "Drop each phrase into a sentence you might genuinely say, and deliver the whole sentence at a comfortable middle speed: 'I go on walking tours whenever I travel.' The join must survive having real words around it — most joins die here first, which is why this rung exists.",
          },
          {
            title: "Rung 3: A full answer at test speed",
            text: "Record a complete Part 1 answer — forty seconds is plenty — and let the joins appear where the words happen to place them. Listen back only for breaks before vowels and double-tapped twins. This rung is not about forcing links in; it is about noticing which ones your mouth already makes and protecting them from nerves.",
            examples: [
              { english: "A recorded Saturday answer, checked for two glides: go-wout where go meets out, and I-yalways where I meets always.", note: "Two glides arriving naturally in one ordinary sentence — proof the rungs work." },
            ],
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: an ordinary answer with joins in place",
        mode: "tts",
        text: "I usually go out on Saturdays, and I always take the early train.",
        rate: 0.9,
      },
      {
        type: "example",
        title: "Links landing in real speech — seven moments",
        items: [
          { english: "Part 1: 'I go out with my cousins most weekends.' — go-wout arriving naturally between two ordinary words.", note: "The glide needs no planning once the phrase rung has installed it.", domain: "exam" },
          { english: "Part 1 introduction: 'I am in my final year at university.' — the I-yam glide smoothing the most-used sentence of the whole test.", note: "The sentence every candidate says is also the easiest place to sound fluent.", domain: "exam" },
          { english: "Encouraging a child at the pool: 'Do it again!' — one word of coaching, one clean w glide.", note: "Two-word commands are the smallest possible drill and they are everywhere.", domain: "life" },
          { english: "Closing a work call: 'Can we agree on Friday, then?' — the we-yagree glide keeping the request light.", note: "Business English runs on vowel collisions like agree on, ask about, email it.", domain: "work" },
          { english: "A learner tapes four linked phrases to the bathroom mirror and runs them during every tooth-brushing session for a fortnight.", note: "Anchoring drills to existing habits beats finding new willpower.", domain: "study" },
          { english: "Chatting with a neighbour: 'She always brings her dog.' — the she-yalways glide passing unnoticed, which is the point.", note: "Joins have succeeded exactly when nobody hears them.", domain: "life" },
          { english: "Part 2 narration: 'I took an early train, so I arrived before the crowds.' — took-wan and I-yarrived carrying a story forward without a single break.", note: "Narration flows when its seams close; listeners feel the story's momentum.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Linking mistakes corrected",
        items: [
          { wrong: "'Go… on.' — a hard break, with the throat closing before on, as though the two words belonged to different sentences.", right: "'Go-won.' — the lips already rounded from go, and a small w sliding across the gap.", reason: "A glottal stop before a vowel is the loudest possible announcement that the speaker is assembling words one at a time, and it chops flow at its most basic unit." },
          { wrong: "'Som-muh money.' — the m of some and the m of money said separately, with a shy vowel tucked between them.", right: "'Suh-money.' — a single m held for one slightly longer beat.", reason: "Twin consonants are held, not repeated; the double-tap version adds a syllable the word never had and flags careful, syllable-by-syllable delivery." },
          { wrong: "'Stop-wit now.' — a w forced in after a word that ends in a consonant, on the theory that every boundary needs a glide.", right: "'Stop it now.' — the final p hopping straight into the vowel of it.", reason: "Glides appear only between two vowels; after a consonant, the consonant itself does the joining, and an inserted w sounds like a foreign syllable." },
        ],
      },
      {
        type: "four-skills",
        title: "A weekend answer, joined rung by rung",
        reading: {
          text: "A Part 1 prompt in the style of the test asks: 'What do you usually do at the weekend?' A candidate's notes contain the following chunks: 'go out with friends', 'I am always tired by Friday', 'we agree on a place', 'some money for tickets', and 'turn it into a whole day'. The chunks hold four different link opportunities between them.",
          task: "Identify which linking technique each chunk needs, and mark the joined version of all five.",
        },
        writing: {
          task: "Write the five chunks in their joined forms with the technique named beside each, then draft the two sentences of a weekend answer that use three of them, and finish with a line on which join you expect to need the most practice.",
          guide: [
            "Sort by technique: go-wout and I-yalways are glides; a place needs no join; some money is a twin hold.",
            "Write the joined forms exactly as you would say them.",
            "Draft two natural sentences using three joined chunks.",
            "Name the join that your mouth resists most, honestly.",
          ],
          model: "Joined chunks: 'go-wout with friends' (w glide), 'I-yam always tired' (y glide), 'we-yagree on a place' (y glide), 'suh-money for tickets' (twin hold), 'turn-i-tinto a whole day' (consonant hop). Draft sentences: 'I go out with friends most weekends, and we usually agree on a café before we leave.' and 'It only costs some money for the tram, so we turn the trip into a whole day.' Practice note: the twin hold is my weakest join, because my careful habit says both m's, so that phrase gets the mirror slot this week.",
        },
        listening: {
          script: "Tutor: Your weekend answer is well organised, and your vocabulary is fine — but listen to what happens between your words. You said 'I… am', 'go… out', with a little door closing in your throat each time. Here is the trick: your lips are already making the w at the end of go. Don't restart — just let them finish the job they started. Try it: go-won, go-won. Now the whole phrase: go-won with friends. Feel how the sentence keeps moving? That movement is what examiners call flow, and you already own the pieces of it.",
          task: "What does the tutor notice happening between the candidate's words, and what trick does she teach for the w glide?",
        },
        speaking: {
          task: "Climb the ladder on camera: rung one, the four drilled phrases slowly; rung two, two carrier sentences at walking pace; rung three, a forty-second weekend answer at test speed. Record rung three only.",
          frames: [
            "Rung one: 'go-won… I-yam… tur-ni-toff… suh-money…'",
            "Rung two: 'We usually agree on a café before we leave.'",
            "Rung three: the full weekend answer at test pace.",
          ],
          checklist: [
            "Did any break sneak in before a vowel at full speed?",
            "Did some money stay a single m in the recorded answer?",
            "Did the glides survive without you planning them?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Complete toolkit", "Four techniques — w glide, y glide, consonant hop, twin hold — cover essentially every boundary English will put in front of you."],
          ["Laddered difficulty", "Phrases at half speed, then sentences, then answers, so each technique earns its place under pressure before the next arrives."],
          ["Physics, not imitation", "The glides grow from lip shapes you already make, so linking is learned as mechanics rather than as copying another speaker's accent."],
          ["Protection from overuse", "The top rung only protects joins that occur naturally, keeping the speaker from performing links instead of speaking."],
          ["Fast feedback loop", "One recorded answer, listened to for breaks and double-taps only, gives a same-day verdict on whether the rungs worked."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Warm the mouth with four linked phrases — one per technique — so the joins are already alive when the recording light goes on."],
          ["While the clock runs", "Let glides happen where the words place them; chasing links mid-sentence costs attention that your content deserves more."],
          ["If you are stuck", "Drop back to clean, careful delivery without joins — clarity without flow still scores, while forced links that break down cost both."],
          ["Final minutes", "Replay one recording listening only for breaks before vowels and double-tapped twins, and give the two worst boundaries tomorrow's rung one."],
        ],
      },
      {
        type: "summary",
        points: [
          "English inserts a small w between vowels when the first word ends with rounded lips — go on becomes go-won — and a small y when it ends with a spread mouth — I am becomes I-yam.",
          "Final consonants hop straight into following vowels, and twin consonants across a boundary are held as one slightly longer beat: suh-money, thi-song, bes-time.",
          "Glides appear only between two vowels; after a consonant, the consonant itself joins, and any inserted w is an intruder.",
          "Build each join on the three-rung ladder — phrase at half speed, carrier sentence at walking pace, full answer at test speed — and record the top rung.",
          "The aim is not to force links in but to stop the throat from slamming doors before vowels; flow follows naturally once the breaks are gone.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the connected-speech lesson and one from the intonation lesson.",
        items: [
          { question: "In 'ten bikes' becoming 'tem bikes', which seam process is running?", options: ["Linking", "Elision", "Assimilation"], correctIndex: 2, explanation: "The final sound changes its place of articulation to match the next sound, which is assimilation — the n shifts to m before the lip sound b.", from: "Connected speech" },
          { question: "What happened to the t in the announcement 'nex-station'?", options: ["It was elided — dropped as too costly before the following consonant", "It was linked onto the vowel of station", "It assimilated into a d"], correctIndex: 0, explanation: "Elision deletes a final t or d when the next word begins with a consonant, which is why station announcements sound the way they do.", from: "Connected speech" },
          { question: "How should a committed opinion end, melodically, in Part 3?", options: ["Rising, to invite the examiner's reply", "Falling, to close the thought and show commitment", "Level, to stay neutral"], correctIndex: 1, explanation: "The falling tone is the spoken full stop: it finishes the thought and shows you hold the position, while a rise would make the opinion sound provisional.", from: "Intonation" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Which glide appears between go and on, and why?",
        hints: ["Look at the shape your lips are already in at the end of the word go."],
        options: [
          { id: "a", text: "A small w, because go ends with rounded lips and the w simply finishes the movement they already started." },
          { id: "b", text: "A small y, because every vowel-to-vowel link takes a y regardless of lip shape." },
          { id: "c", text: "No glide — English leaves a clean break between two vowels." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A small w, because go ends with rounded lips and the w simply finishes the movement they already started.",
          "The glide is chosen by physics rather than by rule-learning: rounded endings grow a w and spread endings grow a y, so the mouth produces them almost automatically once the breaks stop.",
          "(b) ignores the lip-shape principle entirely; (c) describes the glottal-stop delivery that chops speech into isolated words.",
        ),
        tags: ["speaking", "pronunciation", "linking"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the tutor's observation and choose the best diagnosis.",
        hints: ["Where exactly do the breaks happen — before consonants, or before vowels?"],
        passageTitle: "The clean-break candidate",
        passage: "A tutor reviews a recorded Part 1 answer and writes: 'Your individual words are clear and your grammar is solid. Between the words, though, I keep hearing a small click — like a tiny door closing — before every word that starts with a vowel. Go and out never meet; I and am never meet. The result sounds careful but chopped, like someone placing one brick at a time.'",
        question: "What is the candidate doing, and what should they practise?",
        options: [
          { id: "a", text: "Speaking too quietly — the clicks are just microphone noise, and the fix is volume." },
          { id: "b", text: "Closing the throat with a glottal stop before every vowel-initial word — the fix is glide and consonant-hop practice on the three-rung ladder." },
          { id: "c", text: "Pronouncing individual words incorrectly — the fix is more vocabulary study." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Closing the throat with a glottal stop before every vowel-initial word — the fix is glide and consonant-hop practice on the three-rung ladder.",
          "The clicks land exactly where vowel-initial words begin, which is the signature of glottal stopping; the laddered phrase-sentence-answer routine replaces the door-closing with slides.",
          "(a) misreads a delivery habit as an equipment problem; (c) contradicts the tutor's own words about the candidate's clarity and grammar.",
        ),
        tags: ["speaking", "pronunciation", "linking"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the glide table.",
        hints: [],
        question: "State the lip-shape rule that decides between the w glide and the y glide, giving one example of each.",
        acceptedAnswers: [
          "rounded lips at the end of the first word grow a w, as in go-won; spread lips grow a y, as in I-yam",
          "words ending rounded take w — do it becomes do-wit; words ending spread take y — we agree becomes we-yagree",
          "w after oo and oh sounds like go on to go-won, y after ee and i sounds like I am to I-yam",
          "if the lips are round at the boundary, a w appears, e.g. too early to too-wearly; if the mouth is wide, a y appears, e.g. she always to she-yalways",
        ],
        keywords: ["w", "y", "lips"],
        feedback: fb(
          "Rounded endings grow a w; spread endings grow a y.",
          "The glide is already half-formed by the lips at the end of the first word, so the rule needs no memorised word lists — only a glance at what the mouth is doing.",
          "Answers that assign the glides by spelling, or that leave the choice to chance, have missed the physical shortcut the table teaches.",
        ),
        tags: ["speaking", "pronunciation", "linking", "glides"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. How should 'some money' be delivered where the two words meet?",
        hints: [],
        options: [
          { id: "a", text: "With both consonants fully released and a tiny vowel between them: som-muh money." },
          { id: "b", text: "With a single m held for one slightly longer beat: suh-money." },
          { id: "c", text: "With a glottal stop separating some from money entirely." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "With a single m held for one slightly longer beat: suh-money.",
          "Twin consonants across a word boundary merge into one held sound, which keeps the phrase moving and removes the extra syllable that double-tapping invents.",
          "(a) adds a syllable no dictionary ever printed and marks out careful, choppy delivery; (c) installs exactly the door-closing break this lesson exists to remove.",
        ),
        tags: ["speaking", "pronunciation", "linking", "twins"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Climb the ladder aloud: phrases, then sentences, then one full answer.",
        hints: ["Rounded lips finish go, so let the w appear on its own; hold some money as one single m."],
        situation: "Ladder drill. Deliver rung one — the four phrases slowly with joins wide — then rung two — two carrier sentences — then rung three — a forty-second answer about your typical Saturday, at test speed.",
        targetPhrases: ["go on — go-won", "I am — I-yam", "some money — suh-money", "On Saturdays I go out early, and I am usually home by nine."],
        mustSay: ["go", "I am", "some money"],
        feedback: fb(
          "A recording that climbs all three rungs, containing go on, I am and some money with their links in place at full speed.",
          "The ladder builds each join where it is safe — half-speed phrases — then proves it where it matters, inside an unrehearsed-feeling answer at test pace.",
          "Recordings where the phrases link beautifully but the free answer closes its throat before vowels show rung three was skipped; record again and let the glides arrive unbidden.",
        ),
        tags: ["speaking", "pronunciation", "linking", "drill"],
      }),
    ],
    assignment: {
      title: "Boundary diary",
      instructions:
        "Record a one-minute answer about your daily routine, then listen back and log every boundary between words: mark each one as glide, consonant hop, twin hold, or break. Write down the two boundaries that broke worst, name the technique each one needs, and describe tomorrow's rung-one phrase you will drill for them.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Tape four linked phrases — one per technique — somewhere you stand every morning, and run them five times each before leaving the house for a week.",
      "Once a day, say one sentence from your own life with a deliberate glide in it, then say it again naturally, until the glide no longer needs the deliberate version.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-rhythm",
    title: "Rhythm",
    description:
      "The pulse underneath English: stressed syllables arriving at roughly even intervals while everything else compresses between them — how it differs from syllable-timed languages, how to clap it, and why it is the carrier of fluency.",
    objectives: [
      "keep a steady pulse between stressed syllables while squeezing the unstressed ones between the beats",
      "recognise the difference between stress-timed and syllable-timed delivery in your own recordings",
      "use clapping and tapping routines to install the pulse into prepared answers",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Say 'Cats chase mice' and time yourself. Now say 'The cats will have chased all the mice' and time that too. English makes those two sentences nearly the same length, because English spends its time on beats, not on syllables: the three strong syllables keep their full duration, and every extra word squeezes into the gaps. That is the pulse underneath the language, and it is the difference between speech that flows and speech that marches. This lesson makes the pulse physical — you will clap it, tap it and finally speak it.",
        beforeYouStart: [
          "You can find a word's stressed syllable and a sentence's carrier words from the earlier lessons in this chapter.",
          "You are willing to clap while speaking, at least in private, because the pulse is felt before it is heard.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the pulse runs under every part, and Part 2's two minutes expose a missing pulse most brutally"],
          ["Task & question types", "Long-turn monologue, multi-clause Part 3 answers, and any moment when adding words threatens to slow delivery"],
          ["What is assessed", "Pronunciation for the stress-time pattern itself, and fluency and coherence for the continuous forward motion the pulse creates"],
          ["Why this matters", "Syllable-by-syllable delivery makes accurate answers feel slow and effortful, and length itself becomes a cost instead of an advantage"],
        ],
      },
      { type: "heading", text: "Component 1 — The beat that stays steady" },
      {
        type: "text",
        text: "English is stress-timed: the stressed syllables of a sentence arrive at roughly even intervals, like the beat of a drum, and however many unstressed syllables crowd between two beats, they share whatever time is left. Six small syllables between two beats? They run fast. One lonely syllable between the same two beats? It stretches out and takes its time. Many of the world's languages — and very possibly yours — work the other way: each syllable receives approximately equal time, and longer sentences simply take proportionally longer. Neither system is better music, but English hangs its stress peaks, its melody and much of its meaning on the beat, which is why a transferred syllable-timed habit makes delivery sound effortful even when every word is right.",
      },
      {
        type: "comparison",
        title: "Two timing systems, one sentence",
        intro: "The same words delivered on two different clocks.",
        columns: ["Stress-timed English", "Syllable-timed delivery"],
        rows: [
          { aspect: "Where the time goes", left: "Beats get their full duration; everything else compresses into the gaps", right: "Every syllable receives roughly equal time, whatever its role in the sentence" },
          { aspect: "The steady unit", left: "The interval between stressed syllables stays approximately constant", right: "The syllables themselves tick evenly, like a metronome with no accents" },
          { aspect: "What the listener hears", left: "A clear pulse that organises the sentence and carries the melody", right: "An even flow with no audible backbone, where peaks and valleys blur" },
          { aspect: "When words are added", left: "Extra syllables squeeze between existing beats, and length barely changes", right: "Extra syllables stretch the whole sentence, and speed demands sacrifice" },
        ],
        verdict: "The goal is not to abandon your first language's music but to borrow the English beat for the minutes the test lasts — intelligibility rides on it.",
      },
      {
        type: "audio",
        label: "Listen: three beats, two very different sentences",
        mode: "tts",
        text: "Cats chase mice. The cats will have chased all the mice.",
        rate: 0.9,
      },
      {
        type: "audio",
        label: "Listen: a shopping list with a steady pulse",
        mode: "tts",
        text: "a CUP of tea, a PACKET of crisps, a BOTtle of wine",
        rate: 0.85,
      },
      { type: "heading", text: "Component 2 — Rhythm as the carrier of fluency" },
      {
        type: "text",
        text: "Fluency, as the criterion hears it, is continuous forward motion — and that motion is made of beats. When the pulse holds, you can add clauses, hedges and examples without your answer feeling slower, because the new syllables compress into existing gaps. When the pulse is missing, every added word costs full price, long Part 2 turns start to drag, and candidates respond by shortening their answers — trading content for pace, the worst trade the test offers. The repair is physical, not mental: the beat must be felt in the body, by hand, before the mouth will trust it. Speakers who clap their sentences for a week report the strange and pleasant discovery that speaking English starts to feel like playing a percussion instrument they already own.",
      },
      {
        type: "steps",
        title: "Clap, tap, compress, speak",
        intro: "The pulse travels from hand to mouth in four moves.",
        steps: [
          {
            title: "Move 1: Clap only the beats",
            text: "Take a short sentence, mark its carrier words, and clap once per stressed syllable at a comfortable, steady tempo — like applauding slowly. Say the sentence at the same time, letting your voice land on the claps. Nothing but the beats may receive a clap.",
            examples: [
              { english: "'I SHOULD have ASKED her for the KEY' — three claps: should, asked, key.", note: "Three beats, seven syllables: the maths of compression in one sentence." },
            ],
          },
          {
            title: "Move 2: Tap every syllable",
            text: "Now tap the desk for every syllable of the same sentence without changing speed. Feel the crowd of small taps rushing to keep the beat appointment. This move shows you exactly which syllables must shrink — every tap that is not a clap.",
          },
          {
            title: "Move 3: Compress the non-beats",
            text: "Say the sentence again with claps only, and deliberately shrink the unstressed syllables: 'I sh'd ASK'd 'er fer the KEY'. The schwa work from the word-stress lesson pays its dividend here — every uh you can produce is a syllable that fits the gap.",
            examples: [
              { english: "'I shoudda ASKED her fer the KEY' — the same sentence with the gaps cleared for traffic.", note: "Compression is not mumbling: the beats stay full and proud." },
            ],
          },
          {
            title: "Move 4: Speak without the hands",
            text: "Drop the clapping and deliver the sentence at natural pace, then record it. Listen back tapping only the beats you can hear. A steady, findable pulse means the routine has done its work; a wobbly pulse means one more day of clapping, and that is fine.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: many syllables, three quiet beats",
        mode: "tts",
        text: "I should have asked her for the key.",
        rate: 0.9,
      },
      {
        type: "example",
        title: "The pulse in practice — seven beats",
        items: [
          { english: "A Part 2 answer delivered syllable by syllable — accurate, grammatical, and somehow tiring to listen to for a full two minutes.", note: "Listeners experience even-time delivery as effort, even when they cannot name why.", domain: "exam" },
          { english: "'I CAN swim quite WELL' — with can squeezed to a grunt between two full beats, exactly as fluent speakers treat their modal verbs.", note: "Compression of auxiliaries is the fingerprint of a working pulse.", domain: "exam" },
          { english: "Offering refreshments: 'Would you LIKE a CUP of COFFEE?' — a question carried on four beats with the rest rushing to keep up.", note: "Hospitality English is percussion: the offer lands on the beats.", domain: "life" },
          { english: "Reading figures aloud in a team update: 'Sales ROSE by THREE per CENT' — the numbers taking the beats so the detail stays findable.", note: "Data spoken without a pulse loses the figures inside the prepositions.", domain: "work" },
          { english: "A learner sets a metronome app to a slow tempo and claps one prepared sentence per beat-group each evening.", note: "A metronome turns rhythm practice into a game with a score, which is why it survives the week.", domain: "study" },
          { english: "A nursery rhyme remembered from childhood — 'RAIN, rain, GO a-WAY' — still carrying its beat after decades off duty.", note: "The pulse is stored deep; rhymes are the way back in.", domain: "life" },
          { english: "A six-beat Part 3 sentence held together by its pulse: 'MOST people FIND that the COST of LIVING has beCOME the MAJOR worry.'", note: "Long sentences survive their length by riding beats, not by slowing down.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Rhythm mistakes corrected",
        items: [
          { wrong: "'I | have | been | liv | ing | here | since | two | thou | sand | and | nine' — every syllable marching on the same clock, peaks indistinguishable from valleys.", right: "'I've been LIVing HERE since two-thousand-and-NINE' — three beats, with the rest compressed into the gaps.", reason: "Even-time delivery gives the listener no backbone to hang the sentence on, and the answer reads as slow and effortful even at full accuracy." },
          { wrong: "Keeping every syllable full but stretching the gaps between beats so the sentence takes twice as long.", right: "Holding the beat tempo steady and shrinking the unstressed syllables to fit.", reason: "When the pulse slows to accommodate extra syllables, the rhythm disappears anyway — the whole system depends on the beat refusing to move." },
          { wrong: "Clapping every word during practice 'for emphasis', then carrying that hammering into the recorded answer.", right: "Clapping only the stressed syllables in practice, so the hand trains the same distinction the mouth needs.", reason: "Practice installs whatever it rehearses: clapping everything rehearses everything stressed, which is the flat delivery this lesson exists to remove." },
        ],
      },
      {
        type: "four-skills",
        title: "A skill story, set to a pulse",
        reading: {
          text: "A Part 2 card in the style of the test instructs: 'Describe a skill you learned recently.' A candidate's notes read, with beats in capitals: 'Last WINter I deCIDed to learn to SWIM as an aDULT. It was HUMiliating at FIRST — CHILDren overtook me in the SLOW lane. But I hired a COACH for six LESsons, and by the END I could swim a whole LENGTH without stopping.'",
          task: "Count the beats in each sentence, and mark which syllables must compress for the pulse to hold.",
        },
        writing: {
          task: "Take the last sentence of the swimming notes and rewrite it twice: once with every syllable given full value, once compressed for a steady pulse. Then write two sentences of your own about a skill you are learning, with beats marked in capitals.",
          guide: [
            "Identify the beats first: END, COACH, LESsons, LENGTH.",
            "Write the even-time version and feel how long it becomes.",
            "Write the compressed version with shrunken connective syllables.",
            "Draft your own two sentences with capitals on the beats.",
          ],
          model: "Even-time version: 'But I hi-red a coach for six les-sons, and by the end I could swim a whole length with-out stop-ping' — every syllable marching, roughly half again as long. Compressed version: 'But I HIRED a COACH fer six LESsons, an' by the END I could swim a whole LENGTH without STOPping' — six beats, steady, alive. My own sentences: 'This YEAR I've been LEARNing to COOK from VIdeos. The HARDest part was TIMing, not the RECipe itself.'",
        },
        listening: {
          script: "Tutor: Let's find your pulse. Read your swimming answer again, and I'm going to clap what I hear. Ready? … Did you hear that? My claps sped up and slowed down to follow you, because you weren't holding a tempo — the syllables were setting the pace instead of the beats. Now reverse it: you clap a steady beat, quite slow, and fit the sentence inside it. Don't add syllables, don't remove them — just shrink the small ones until they fit between your hands. There. That's the sound the fluency criterion is listening for, and it was in your mouth the whole time.",
          task: "What was the tutor's clapping doing in the first pass, and what role reversal did she set up in the second?",
        },
        speaking: {
          task: "Clap the beat while saying your two skill sentences, then deliver them clap-free at test speed, and record the clap-free version.",
          frames: [
            "Clapping pass: 'This YEAR (clap) I've been LEARNing (clap)…'",
            "Clap-free pass: the same sentences at natural pace.",
            "Self-report: 'The sentence that held its pulse without my hands was …'",
          ],
          checklist: [
            "Did every clap land on a carrier word?",
            "Did the unstressed syllables shrink instead of slowing the beat?",
            "Could a listener still tap a steady pulse to your clap-free recording?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Fluency made physical", "The beat moves from the hand to the mouth, so continuous forward motion — the heart of the fluency criterion — becomes something the body can practise."],
          ["Length without drag", "Compression lets candidates add clauses and examples at no time cost, so content grows without the answer slowing."],
          ["First-language respect", "The lesson asks the learner to borrow a timing system for eleven minutes, not to replace the music of their own language permanently."],
          ["Built on earlier wins", "The schwa and the carrier-word peaks from earlier lessons become the raw material the pulse organises, tying the chapter together."],
          ["Self-verifiable", "A listener — or the learner — can tap along with any recording and score the pulse as steady or wobbling, no expert required."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Mark the beats in your prepared opener sentences and clap them once each, so the pulse is running before the first question lands."],
          ["While the clock runs", "Trust the beats and let small words shrink; if you feel the sentence dragging, the fix is compression, not speed."],
          ["If you are stuck", "When a sentence collapses mid-flow, stop, take one beat of silence, and restart from the last stressed word rather than from the beginning."],
          ["Final minutes", "Tap along with one recorded answer and judge only the pulse — steady means installed, wobbly means one more evening of clapping."],
        ],
      },
      {
        type: "summary",
        points: [
          "English is stress-timed: stressed syllables arrive at roughly even intervals, and unstressed syllables share whatever time remains between them.",
          "'Cats chase mice' and 'The cats will have chased all the mice' take nearly the same time, because added syllables compress into the gaps rather than stretching the sentence.",
          "Syllable-timed habits — every syllable on the same clock — make accurate speech sound slow and effortful, and they push candidates into shortening answers.",
          "The pulse is installed physically: clap only the beats, tap every syllable, compress the non-beats, then speak clap-free and record.",
          "Fluency is the pulse made audible: continuous forward motion that survives extra clauses because the beats refuse to move.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the linking lesson and one from the connected-speech lesson.",
        items: [
          { question: "What decides whether a w glide or a y glide appears between two vowels?", options: ["The spelling of the first word", "The lip shape at the end of the first word — rounded grows w, spread grows y", "The length of the second word"], correctIndex: 1, explanation: "The glide finishes a movement the lips have already begun, so rounded endings like go produce w and spread endings like I produce y.", from: "Linking" },
          { question: "How are twin consonants across a word boundary, as in some money, delivered?", options: ["Said twice, with a small vowel between them", "Held as a single, slightly longer beat", "The first consonant is dropped entirely"], correctIndex: 1, explanation: "Identical consonants merge into one held sound, which keeps the phrase moving and avoids inventing a syllable the words never had.", from: "Linking" },
          { question: "Why does fast fluent English sound like one long word to many learners?", options: ["Because speakers use rare vocabulary at speed", "Because the seams between words close through linking, assimilation and elision", "Because fast speakers drop every second word"], correctIndex: 1, explanation: "The words stay the same; their boundaries melt, and an ear trained on the three seam processes returns the known words to the listener.", from: "Connected speech" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Why do 'Cats chase mice' and 'The cats will have chased all the mice' take nearly the same time to say?",
        hints: ["Count the strong syllables in each sentence."],
        options: [
          { id: "a", text: "Because English gives time to beats, not syllables: the three stressed syllables keep full duration and the extra words squeeze into the gaps." },
          { id: "b", text: "Because the second sentence is spoken faster in a separate rule for long sentences." },
          { id: "c", text: "Because unstressed words are silent in natural English." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because English gives time to beats, not syllables: the three stressed syllables keep full duration and the extra words squeeze into the gaps.",
          "Stress-timing means the interval between beats stays roughly constant, so added syllables compress rather than stretch — the sentence grows words without growing time.",
          "(b) invents a special speed rule that does not exist; (c) overstates compression — small words shrink dramatically but never disappear.",
        ),
        tags: ["speaking", "pronunciation", "rhythm"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the observer's note and diagnose the timing system.",
        hints: ["Ask whether the time went to syllables or to beats."],
        passageTitle: "The accurate slowcoach",
        passage: "A candidate recorded his Part 2 answer about learning to drive. His observer wrote: 'Every word correct, every sentence complete, and yet I kept waiting for him to arrive. When he added an example, the answer grew by exactly the length of the example — nothing folded in, nothing sped up. By the second minute I was leaning forward, willing the story onwards.' The candidate's first language gives each syllable a similar amount of time.",
        question: "What is the observer hearing, and what would fix it?",
        options: [
          { id: "a", text: "A vocabulary problem — simpler words would speed him up." },
          { id: "b", text: "Syllable-timed delivery: each syllable pays full time, so added words stretch the answer; a stress-timed pulse with compressed unstressed syllables would fold examples in instead." },
          { id: "c", text: "A confidence problem — he simply needs to speak louder." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Syllable-timed delivery: each syllable pays full time, so added words stretch the answer; a stress-timed pulse with compressed unstressed syllables would fold examples in instead.",
          "The observer's arithmetic — growth exactly equal to the example's length — is the signature of even-time syllables, and the clap-tap-compress routine installs the missing beat.",
          "(a) misattributes a timing issue to word choice; (c) confuses audibility with pace, which the observer never questioned.",
        ),
        tags: ["speaking", "pronunciation", "rhythm"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the timing systems comparison.",
        hints: [],
        question: "In stress-timed English, what stays roughly constant, and what changes when a speaker adds words to a sentence?",
        acceptedAnswers: [
          "the interval between stressed syllables stays constant, and added syllables compress into the gaps",
          "the beat between stresses holds steady; extra words shrink to fit rather than stretching the sentence",
          "the gap between beats is roughly even, and extra unstressed syllables get squeezed between them",
          "the stressed syllables' timing holds, while added words must shrink or speed up to fit",
        ],
        keywords: ["stressed", "compress"],
        feedback: fb(
          "The interval between beats stays roughly constant; added syllables compress into the gaps.",
          "This is the single sentence version of stress-timing, and it explains the cats-chase-mice trick, the shopping-list pulse and the cost of syllable-by-syllable delivery at once.",
          "Answers claiming the syllables stay constant have described the other timing system, and answers claiming silence have confused compression with deletion.",
        ),
        tags: ["speaking", "pronunciation", "rhythm", "stress-timing"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why does this programme describe rhythm as the carrier of fluency?",
        hints: [],
        options: [
          { id: "a", text: "Because the beat lets a speaker add clauses and examples without slowing, producing the continuous forward motion the fluency criterion listens for." },
          { id: "b", text: "Because rhythm replaces the need for grammar in long answers." },
          { id: "c", text: "Because examiners count the beats per minute and score accordingly." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because the beat lets a speaker add clauses and examples without slowing, producing the continuous forward motion the fluency criterion listens for.",
          "Fluency is heard as unbroken momentum, and the pulse is what makes momentum mathematically possible: the beats hold their time while content grows around them.",
          "(b) no timing system rescues broken grammar, which rides inside every sentence; (c) invents a metric no examiner uses — the pulse matters, not its speed.",
        ),
        tags: ["speaking", "pronunciation", "rhythm", "fluency"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Clap the beats while speaking, then deliver the same sentences clap-free.",
        hints: ["Clap only on the capitalised syllables, and let every other syllable rush to fit."],
        situation: "Pulse drill. Say each sentence twice — first with a clap on every beat, then without hands at test speed — keeping the interval between beats steady throughout.",
        targetPhrases: ["I SHOULD have ASKED her for the KEY", "This YEAR I've been LEARNing to COOK", "a PACKET of rice and a BOTtle of oil"],
        mustSay: ["key", "learning", "packet"],
        feedback: fb(
          "A recording containing all three sentences, clap-free, with a pulse a listener could still tap along to.",
          "The clapped pass sets the tempo and the hands-free pass proves the body installed it, which is the entire journey from felt beat to spoken fluency.",
          "Recordings where the clap-free pass drifts back to even syllables show the beat lives in the hands still; a few more evenings of clapping will finish the transfer.",
        ),
        tags: ["speaking", "pronunciation", "rhythm", "drill"],
      }),
    ],
    assignment: {
      title: "Beats marked, promise made",
      instructions:
        "Write your three opening sentences for a Part 2 answer on any topic, with every beat marked in capitals. Under each sentence, note which syllables you will compress to hold the pulse, then record the three sentences clap-free at test speed and report whether a listener could tap a steady beat to your recording — and which sentence wobbled if one did.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Clap one prepared sentence per evening for a week — beats only, steady tempo — then say it clap-free into your recorder and score the pulse as steady or wobbly.",
      "Find a nursery rhyme or song lyric you have known for years, speak it on its beat, then speak a sentence of your own on the same beat, and notice what the borrowed pulse does to your speed.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-pausing",
    title: "Pausing",
    description:
      "The punctuation of speech: pausing between idea groups instead of mid-thought, breathing where the commas live, holding a beat before a key point — and the crucial difference between a meaning pause and a language-search silence.",
    objectives: [
      "break your answers into idea groups and pause only at their boundaries",
      "breathe at punctuation points so the voice projects calm rather than panic",
      "distinguish a meaning pause from a search silence in your own recordings",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Silence has a grammar. A pause in the right place organises an answer; the same length of silence in the wrong place reads as struggle. Candidates who fear silence fill every gap with sound and run out of breath mid-clause, when the truth is the opposite: examiners trust speakers who can stop deliberately, because stopping shows the speaker knows where one idea ends and the next begins. This lesson teaches you to punctuate aloud — and to tell your two silences apart, because only one of them is doing you any good.",
        beforeYouStart: [
          "You can already mark a sentence's carrier words and beats from the earlier lessons in this chapter.",
          "You can record a two-minute answer without reading, so the pauses studied here are real ones.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2's long turn above all, where two minutes of unpunctuated sound exhausts both speaker and examiner"],
          ["Task & question types", "Cue-card narrations, multi-point Part 3 answers, and moments when a needed word will not arrive on schedule"],
          ["What is assessed", "Fluency and coherence first — pausing at meaning boundaries is descriptor language — and pronunciation for the rhythm the pauses create"],
          ["Why this matters", "One well-placed silence makes an answer easier to follow than any amount of added vocabulary, and a search silence mid-clause does the exact opposite"],
        ],
      },
      { type: "heading", text: "Component 1 — Idea groups, the units of breath" },
      {
        type: "text",
        text: "Speak in idea groups: chunks of roughly four to eight words, each holding one complete thought. A group can be short ('That surprised me') or long ('the summer my grandfather taught me to sail'), but it has edges, and the edges are where speech punctuation lives. A comma in writing becomes a short pause; a full stop becomes a longer one; a new paragraph — in a Part 2 answer, the move to the next point on the card — becomes a full stop plus a breath. Pause at the edges and your listener receives your answer pre-chunked, ready to store; pause in the middle of a group and the listener holds half a thought in suspense, waiting for a completion that is not coming yet. The test is simple: if you could not comfortably write a comma, colon or full stop at the point where you stopped, you stopped in the wrong place.",
      },
      {
        type: "table",
        title: "Written punctuation, spoken",
        headers: ["Written mark", "Spoken equivalent", "Length", "What the listener hears"],
        rows: [
          ["Comma", "A short boundary pause", "About half a second", "More of this idea is coming"],
          ["Full stop", "A longer boundary pause", "A full second", "That idea is finished; the next one is being prepared"],
          ["Dash before a key point", "A held, deliberate pause", "Up to two seconds", "Something important is coming, and I should lean in"],
          ["No mark at all", "No pause permitted", "None", "Mid-group stopping sounds like the sentence broke, not like the speaker is thinking"],
        ],
      },
      {
        type: "audio",
        label: "Listen: an answer with audible punctuation",
        mode: "tts",
        text: "Every summer, we rent a small house by the lake. The children learn to fish; I learn to sleep. Without that week, I would not survive the city.",
        rate: 0.9,
      },
      { type: "heading", text: "Component 2 — Two silences that sound nothing alike" },
      {
        type: "text",
        text: "The meaning pause sits at an idea-group boundary, often with an audible breath, and the listener uses it to file the finished thought. The language-search silence sits mid-clause, in the middle of a half-built sentence, and the listener hears a speaker who has run aground — the difference is not the length but the location and the face that accompanies it. Ironically, the search silence gets longer the more a candidate worries about it, while the meaning pause can stretch to two full seconds and still project control. There is a third, rarer tool: the effect pause, held just before the point you most want remembered — 'the reason is simple … money' — which borrows drama from the delay. One habit protects all three: end your group, breathe, begin the next group. And if a word dies mid-group, abandon it gracefully — close the group with a simpler word you own, and hunt for the fancy one while parked safely at the boundary.",
      },
      {
        type: "table",
        title: "The two silences compared",
        headers: ["Feature", "Meaning pause", "Language-search silence"],
        rows: [
          ["Location", "At the edge of a complete idea group", "Inside a half-finished clause"],
          ["Breathing", "A calm, audible breath at the boundary", "Shallow or held breath, often with rising pitch before the stop"],
          ["What the listener concludes", "The speaker is organised and in control", "The speaker has lost the sentence's thread"],
          ["Effect when extended", "Grows more deliberate — even dramatic — with length", "Grows more alarming with every extra second"],
          ["Repair", "No repair needed; it is doing its job", "Finish the group simply, pause at the edge, restart the next idea"],
        ],
      },
      {
        type: "steps",
        title: "Slash, breathe, land, hold",
        intro: "Four moves from written answer to punctuated delivery.",
        steps: [
          {
            title: "Move 1: Slash the script",
            text: "Take a written answer and mark // at every place a full stop or strong comma would sit. Read it aloud touching every slash — the slashes are now the only places your voice may stop.",
            examples: [
              { english: "'My city has changed a lot // in the last ten years. // The old market // is now a car park, // which still upsets my mother.'", note: "Five slashes, five legal stopping points — pause anywhere else and the sentence breaks." },
            ],
          },
          {
            title: "Move 2: Breathe at the boundaries",
            text: "Read again, taking a small audible breath at each slash. The breath does double duty: it fuels the next idea group, and it converts every pause into an audible sign of organisation rather than distress.",
          },
          {
            title: "Move 3: Land the final word of each group",
            text: "Deliver the last word of every idea group with a small falling tone — the landing from the intonation lesson — before the pause. A landed final word tells the listener the group is finished; an unfinished, rising final word turns even a well-placed pause into a question.",
            examples: [
              { english: "'…is now a car park ↘' — landed, then the breath, then the next group begins.", note: "The landing and the pause together make one clean, audible full stop." },
            ],
          },
          {
            title: "Move 4: Hold one effect pause",
            text: "Choose the single most important point in the answer and mark it with a longer, deliberate pause just before delivery. One effect pause per answer is plenty; two begin to look theatrical, and theatre was never the criterion.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: the pause before the key point",
        mode: "tts",
        text: "And the reason is simple. Money.",
        rate: 0.85,
      },
      {
        type: "audio",
        label: "Listen: calm, breathed delivery at boundaries",
        mode: "tts",
        text: "Let me think about that for a second. There are two things to say, and the first one matters most.",
        rate: 0.85,
      },
      {
        type: "example",
        title: "Silence doing its job — seven pauses observed",
        items: [
          { english: "A Part 2 answer delivered in idea groups — a beat after each group, a breath before each new one — and the examiner never once re-asks for clarification.", note: "Pre-chunked answers are easy to store, and easy answers get listened to generously.", domain: "exam" },
          { english: "A candidate hunting for the word 'commemorate' stops mid-clause: 'the government built a…' — and the silence, sitting inside the broken group, reads as struggle.", note: "The location, not the duration, decided how the silence was heard.", domain: "exam" },
          { english: "The same candidate closes the group simply — 'the government built a statue' — pauses at the edge, and delivers 'a memorial, you might say' as a new group.", note: "Parking the search at the boundary turns a crisis into a rhetorical move.", domain: "exam" },
          { english: "A team leader presenting quarterly figures stops for a full second before the one number that matters: '…and that brings us to the figure I want you to remember.'", note: "One held pause focuses a room more than any slide ever has.", domain: "work" },
          { english: "A learner slash-marks one transcript a day and records it, scoring each take by whether the pauses landed on the slashes.", note: "Slash-marking turns punctuation from a writing habit into a speaking habit.", domain: "study" },
          { english: "Telling the classic joke about the talking dog, the teller pauses before the punchline — and the pause is the joke.", note: "Every storyteller knows what this lesson formalises: delay is delivery.", domain: "life" },
          { english: "Giving a visitor directions in the street: 'Go straight to the lights // turn left // and it's the blue door.' — three groups, three breaths, zero confusion.", note: "Everyday instruction lives on chunking; nobody gives directions in one breath.", domain: "life" },
        ],
      },
      {
        type: "mistakes",
        title: "Pausing mistakes corrected",
        items: [
          { wrong: "Stopping inside a clause to hunt a word: 'so the whole family gathered in my grandmother's… kitchen? house? …' — the sentence suspended in mid-air.", right: "Finish the group with a word you own — 'so the whole family gathered at my grandmother's place' — pause at the edge, then continue with the next idea.", reason: "A completed group followed by a boundary pause reads as composure, while a broken group followed by any silence reads as failure, whatever the speaker actually feels." },
          { wrong: "Two minutes of Part 2 delivered in one continuous breath-stream, three ideas stacked end to end with no stop anywhere.", right: "A full stop between idea groups: land the last word, breathe, begin the next group on fresh fuel.", reason: "Unpunctuated delivery hides the answer's structure and starves the speaker of oxygen, and both problems share one cheap repair." },
          { wrong: "Padding every gap with 'um' and 'err' so that silence never technically occurs — 'the most important thing is, um, that we, err, protect…'", right: "A silent pause at the idea-group boundary, with the mouth gently closed and a breath taken.", reason: "Fillers advertise the search in progress, while a silent boundary pause is heard as planning; the same thinking time costs marks in one form and buys them in the other." },
        ],
      },
      {
        type: "four-skills",
        title: "A Part 3 answer, punctuated aloud",
        reading: {
          text: "Discussion material in the style of the test: a Part 3 examiner asks, 'Why do some people prefer small shops to supermarkets?' A candidate's slash-marked answer reads: 'I think it comes down to trust // people in small shops know your name // and they remember what you bought last week. // Supermarkets have everything // but nobody in them knows you exist. // And the reason that matters is simple // time.' The last slash holds the effect pause.",
          task: "Count the idea groups, and identify which pause is the effect pause and what it is doing there.",
        },
        writing: {
          task: "Write your own three-sentence answer to the same question with // slashes at every intended pause, mark one effect pause with a double slash, and add one line explaining what your listener should conclude from each silence.",
          guide: [
            "Draft the ideas first, then decide the group edges.",
            "Place // where a comma or full stop could sit in writing.",
            "Choose one pre-point pause for drama, and only one.",
            "Note what each boundary pause tells the listener.",
          ],
          model: "Marked answer: 'Small shops survive on relationships // the owner knows your family // and half the street's history comes free with your groceries. // A supermarket sells convenience // but convenience has no memory. // For me the deciding factor is // attention.' Explanation: each single slash lets the listener file one complete idea, and the final double slash holds the room for a moment before the answer's one-word point — the pause does the emphasising so my voice does not have to shout.",
        },
        listening: {
          script: "Tutor: I want you to listen to your own two silences. First, after 'the owner remembers everyone' — you stopped, you breathed, you started a new sentence. That silence worked for you; it sounded like a speaker in control of her material. Now the second one, after 'they even deliver to my' — that stop sat in the middle of a promise your sentence had made and couldn't keep. Same length of silence, roughly; completely different message. From now on, when you feel a word going missing, finish the thought with something simpler, get yourself to the edge, and do your searching there.",
          task: "How does the tutor distinguish the two silences, and what move does she prescribe for the second kind?",
        },
        speaking: {
          task: "Deliver your slash-marked answer twice: once touching every slash with a finger-tap, once without taps at test pace, holding the effect pause a full second. Record the second delivery.",
          frames: [
            "Tapping pass: 'I think it comes down to trust (tap) // people in small shops know your name (tap)…'",
            "Test-pace pass with the effect pause held: '…the reason that matters is (hold) // time.'",
            "Self-report: 'The pause that felt longest to me was … but from outside it probably sounded …'",
          ],
          checklist: [
            "Did every pause land on a slash, never inside a group?",
            "Did you breathe audibly at the boundaries?",
            "Did the effect pause survive without turning into a laugh?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation made audible", "Boundary pauses show the examiner exactly where each idea ends, so the answer's organisation is heard rather than inferred."],
          ["Nerve management", "Breathing at punctuation points feeds the voice steadily, converting nervousness into a rhythm the listener reads as calm."],
          ["Emphasis without volume", "The single effect pause lands the key point with silence instead of loudness, which suits a test room far better than shouting."],
          ["Damage control", "Closing a troubled group with a simpler word and searching at the boundary converts the test's most dangerous moment into a routine one."],
          ["Filler elimination", "Replacing um and err with silent boundary pauses removes the single most common marker of a struggling speaker."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Slash-mark your prepared Part 2 opener and closer, and fix one breathing point in each, so the long turn starts and ends punctuated."],
          ["While the clock runs", "Think only in idea groups: land the last word, breathe at the edge, and trust the pause to do its quiet work."],
          ["If you are stuck", "When a word vanishes, finish the current group with any word you own, then hunt from the safety of the boundary — the pause is invisible there."],
          ["Final minutes", "Replay one recording and count the stops that fell inside idea groups; that count is next week's slash-marking practice list."],
        ],
      },
      {
        type: "summary",
        points: [
          "Speak in idea groups of roughly four to eight words, and pause only at their edges — the spoken equivalents of commas and full stops.",
          "Breathe at the boundaries: the audible breath turns every pause into a sign of organisation and keeps the voice fuelled.",
          "A meaning pause and a language-search silence differ by location, not length: at the edge they project control, mid-clause they project struggle.",
          "One effect pause before your most important point does the work of a raised voice, and one is the correct number per answer.",
          "When a word dies, close the group simply, park at the boundary, and search there — the same thinking time that costs marks mid-clause is free at the edge.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the rhythm lesson and one from the linking lesson.",
        items: [
          { question: "What were the four moves of the rhythm routine, in order?", options: ["Speak, clap, tap, compress", "Clap only the beats, tap every syllable, compress the non-beats, speak clap-free", "Listen, repeat, record, review"], correctIndex: 1, explanation: "The pulse travelled from hand to mouth: claps set the beat, taps revealed the crowd, compression cleared the gaps, and the hands-free pass proved the beat was installed.", from: "Rhythm" },
          { question: "In stress-timed English, what happens to an answer when the speaker adds extra words?", options: ["The answer slows down in proportion", "The extra syllables compress into the gaps between beats, so the length barely changes", "The extra words are spoken silently"], correctIndex: 1, explanation: "The beats hold their interval and the unstressed syllables shrink to fit, which is why fluent answers can grow in content without growing in time.", from: "Rhythm" },
          { question: "When one word ends and the next begins with the same consonant, as in best time, what should the mouth do?", options: ["Say both consonants separately with a vowel between", "Hold a single slightly longer beat of that consonant", "Insert a small glottal stop for clarity"], correctIndex: 1, explanation: "Twin consonants merge into one held sound — bes-time — which keeps the phrase moving and invents no extra syllables.", from: "Linking" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Two silences of identical length occur in one answer. What decides which one helps you?",
        hints: ["Ask where each silence sits relative to the sentence's structure."],
        options: [
          { id: "a", text: "The location: at an idea-group boundary the pause organises, while mid-clause the same silence reads as the sentence breaking down." },
          { id: "b", text: "The volume of the words before the silence." },
          { id: "c", text: "The length alone — longer silences always help more." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The location: at an idea-group boundary the pause organises, while mid-clause the same silence reads as the sentence breaking down.",
          "Listeners judge a silence by where it lands, not how long it lasts: an edge pause gets read as planning and a middle-of-clause pause as loss, regardless of duration.",
          "(b) is unrelated to how silence is interpreted; (c) reverses the rule for search silences, which grow more alarming with every extra second.",
        ),
        tags: ["speaking", "pronunciation", "pausing"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the mock-examiner's notes and choose the best advice.",
        hints: ["Find where each silence fell: at edges, or inside unfinished sentences?"],
        passageTitle: "Two minutes, eleven silences",
        passage: "A candidate's Part 2 turn about a memorable journey produced eleven noticeable silences. The examiner's notes read: 'Long stop after \"the road climbed into\" — never completed smoothly; long stop after \"we finally reached the summit\" — clean; long stop after \"my brother, who is afraid of\" — abandoned phrase; several calm breaths between complete sentences.' The candidate's vocabulary and grammar were rated strong throughout.",
        question: "What pattern do the notes reveal, and what is the correct repair?",
        options: [
          { id: "a", text: "The candidate pauses too often in general — the repair is speaking continuously for two minutes without stopping." },
          { id: "b", text: "Silences at sentence edges are clean, while mid-clause stops follow abandoned phrases — the repair is closing each group with a simpler word and searching from the boundary." },
          { id: "c", text: "The candidate's vocabulary is too weak for Part 2, so longer preparation before the test is the answer." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Silences at sentence edges are clean, while mid-clause stops follow abandoned phrases — the repair is closing each group with a simpler word and searching from the boundary.",
          "The notes split evenly into edge pauses that read as organised breathing and inside-clause stops that followed broken phrases, and the boundary-parking move repairs exactly the second kind.",
          "(a) would replace punctuation with a two-minute breathless stream, hiding the structure the clean pauses were providing; (c) is contradicted by the strong language ratings in the same notes.",
        ),
        tags: ["speaking", "pronunciation", "pausing"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the idea-group teaching.",
        hints: [],
        question: "Where should your pauses fall during a long answer, and what simple writing test decides whether a given stop was legal?",
        acceptedAnswers: [
          "at idea group boundaries, and a stop is legal only where a comma or full stop could appear in writing",
          "between idea groups — if you could not write a comma or full stop at that point, the stop was in the wrong place",
          "at the edges of complete thoughts; the punctuation test is whether a comma or full stop would fit there",
          "after complete groups of four to eight words, checked against where written punctuation would sit",
        ],
        keywords: ["idea", "boundaries"],
        feedback: fb(
          "Pauses belong at idea-group boundaries, and a stop is legal only where a comma or full stop could sit in writing.",
          "Borrowing written punctuation as the test gives speakers an instant rule they already own, because everyone who writes English already knows where the marks go.",
          "Answers permitting stops anywhere, or basing the choice on word length alone, have missed the edge-versus-inside distinction the whole lesson turns on.",
        ),
        tags: ["speaking", "pronunciation", "pausing", "idea-groups"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. How should the effect pause be used in a test answer?",
        hints: [],
        options: [
          { id: "a", text: "Once per answer, held just before the single point you most want remembered — delay does the emphasising that volume otherwise would." },
          { id: "b", text: "Before every sentence, so each one lands with equal drama." },
          { id: "c", text: "Never — dramatic pauses belong to actors and have no place in an examination." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Once per answer, held just before the single point you most want remembered — delay does the emphasising that volume otherwise would.",
          "A single held silence before a key point focuses the listener's attention without raising the voice, which suits a test room; repetition dilutes the device into mannerism.",
          "(b) turns a scalpel into a fog of theatrical pauses; (c) throws away a legitimate, descriptor-friendly tool because of where it is usually seen.",
        ),
        tags: ["speaking", "pronunciation", "pausing", "effect"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Deliver the slash-marked answer with audible boundary breaths and one held effect pause.",
        hints: ["Land the last word of each group with a small falling tone before you breathe — the landing makes the pause audible as a full stop."],
        situation: "Punctuation drill. Read the marked answer aloud, breathing at every // and holding the final double-marked pause a full second before the one-word point, then add one improvised group of your own at the end.",
        targetPhrases: ["Supermarkets have everything // but nobody in them knows you exist.", "For me the deciding factor is // attention.", "And that is why I still shop where people know my name."],
        mustSay: ["supermarkets", "attention", "name"],
        feedback: fb(
          "A recording containing all three sentences, with boundary breaths at the slashes and a held pause before attention.",
          "The drill wires three things together — the landed final word, the audible breath, and the deliberate delay — which are the complete punctuation kit for any long turn.",
          "Recordings where the breaths disappear at speed or the effect pause shrinks to nothing have delivered the words without the punctuation; slow back down and re-mark the slashes.",
        ),
        tags: ["speaking", "pronunciation", "pausing", "drill"],
      }),
    ],
    assignment: {
      title: "Silence audit",
      instructions:
        "Record a two-minute Part 2 answer, then listen back and log every silence longer than about a second. For each one, write where it fell (at an idea-group edge or mid-clause), what the listener most likely concluded, and how many you filled with um or err. Finish with the one change you will make to your pausing in tomorrow's recording.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Slash-mark one short transcript a day — // at every comma and full stop — then record it breathing at each mark, and score whether the pauses landed where the slashes live.",
      "Practise the emergency move three times this week: deliberately abandon a planned word mid-answer, close the idea group with a simpler one, and park at the boundary before continuing.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-articulation",
    title: "Clear articulation",
    description:
      "Moving the instrument: lip and tongue positions for the sounds that hide, keeping every -s, -ed and -d alive at speed, the ten-percent slowdown that buys clarity for free, and over-articulation as a practice technique you then relax.",
    objectives: [
      "place lips and tongue deliberately for the consonants that most often blur",
      "keep plural, past-tense and word-final sounds audible at full speaking speed",
      "use over-articulation as a rehearsal technique, then relax it to natural delivery",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "A guitarist tunes before playing; a speaker warms the mouth. English asks the jaw, lips and tongue to travel further than many languages do, and when the movements shrink — from tiredness, nerves or the fear of looking strange — the sounds blur together exactly where the meaning lives. This lesson is pure mechanics: where the tongue goes for the sounds that hide, how to keep endings alive when speed arrives, and how a ten-percent slowdown, invisible to any listener, buys back nearly all the clarity that nerves steal.",
        beforeYouStart: [
          "You know the five contrast pairs from the individual-sounds lesson, including think/sink and vet/wet.",
          "You can record an answer and listen back for one feature at a time without discouragement.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — articulation underpins every part, and Part 1's first thirty seconds set the examiner's ear for everything after"],
          ["Task & question types", "Job and study answers full of plural nouns, past-tense stories in Part 2, and any answer delivered under pressure"],
          ["What is assessed", "Pronunciation — clear articulation of sounds and endings is what the descriptor language about easy-to-follow delivery is built on"],
          ["Why this matters", "A blurred plural or vanished past tense changes meaning while sounding almost the same to the speaker, who cannot hear their own losses"],
        ],
      },
      { type: "heading", text: "Component 1 — The instrument and its three dials" },
      {
        type: "text",
        text: "Think of the mouth as an instrument with three dials: the jaw (how far open), the lips (rounded, spread or relaxed) and the tongue (forward, back, up against the ridge, or peeking between the teeth). English consonants are positions, not feelings — think is a position, with the tongue tip visibly between the teeth; v is teeth-on-lip, a small bite that buzzes; w is rounded lips with no teeth anywhere. Two sounds give speakers of most language backgrounds trouble because their difference is pure position: for l the tongue tip presses the ridge behind the top teeth, while for r the tongue curls back and the lips round slightly, touching nothing. Stand at a mirror and watch the dials move — speakers who never watch their mouths are flying on feel, and feel is exactly what collapses under exam pressure.",
      },
      {
        type: "table",
        title: "Positions for the sounds that hide",
        headers: ["Sound", "The position, in plain words", "The shortcut that blurs it"],
        rows: [
          ["think (th)", "Tongue tip lightly between the teeth, air flowing over it", "Tongue pulled back behind the teeth, producing sink"],
          ["v", "Top teeth resting on the lower lip, voice buzzing through", "No tooth contact, so vet drifts into wet"],
          ["w", "Both lips rounded and voiced, teeth uninvolved", "Lower lip touching the teeth, turning w into v"],
          ["r", "Tongue curled back, lips slightly rounded, nothing touching", "Tongue tip pressed to the ridge, turning r into l"],
          ["l", "Tongue tip firm on the ridge behind the top teeth", "Tongue curled back, turning l into r"],
          ["long ee (leave)", "Lips spread wide, tongue high and forward", "Relaxed lips, so leave collapses into live"],
        ],
      },
      {
        type: "audio",
        label: "Listen: tricky consonants at announcement pace",
        mode: "tts",
        text: "This Thursday, the third of the month. A very well-organized video review.",
        rate: 0.85,
      },
      { type: "heading", text: "Component 2 — Endings alive, and the ten-percent rule" },
      {
        type: "text",
        text: "Endings are where speed does its damage, because they arrive last, weigh least and vanish first. The plural s of months, the past t of worked, the d of had and and — each carries grammar, and each survives only if the tongue finishes its journey. The repair is not slowing everything down; it is the ten-percent rule. Deliver your whole answer about ten percent slower than your natural rush — a difference no listener consciously registers — and the tongue finds time to complete every movement it starts. Ten percent is the sweet spot: fifty percent slower destroys fluency and rhythm, while zero percent leaves endings on the floor. And when clarity still fails, reach for the practice tool that never fails: over-articulation. Deliver the sentence like a formal announcer, every dial at maximum, then at half that energy, then at natural delivery — the exaggeration resets the mouth's calibration so that natural lands clearer than before.",
      },
      {
        type: "steps",
        title: "Exaggerate, halve, relax, keep",
        intro: "The over-articulation ladder, rung by rung.",
        steps: [
          {
            title: "Rung 1: Announcer mode",
            text: "Deliver the sentence with every movement at maximum: jaw loose and open, lips travelling their full range, tongue making each position unmistakable, endings held a half-beat too long. It will feel ridiculous, which is how you know the dial has actually moved.",
            examples: [
              { english: "The tasks sentence from the audio — works, walks, finishes — delivered as though announcing a royal visit.", note: "Every final s and every th fully visible in the mirror at this speed." },
            ],
          },
          {
            title: "Rung 2: Half the theatre",
            text: "Repeat the sentence with the exaggeration halved — still clearer than everyday speech, no longer a performance. The mouth is learning where the middle of its range sits, which most speakers have never deliberately located.",
          },
          {
            title: "Rung 3: Natural delivery, on the new calibration",
            text: "Deliver once more at true conversational pace. Because the mouth has just travelled the full range, natural now lands in the upper half of clarity rather than the lower — the same reason pianists play scales before performing.",
            examples: [
              { english: "The same tasks sentence, conversational, endings still audible, nothing performed.", note: "Calibration, not permanent exaggeration, was always the goal." },
            ],
          },
          {
            title: "Rung 4: Keep the ending-check habit",
            text: "Record the natural version and listen only for endings: plurals, past tenses, the final consonants of content words. Every ending that survived at natural pace is now yours by habit; every ending that died marks tomorrow's rung one.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: every ending given its moment",
        mode: "tts",
        text: "She works hard, walks far, and always finishes her tasks.",
        rate: 0.8,
      },
      {
        type: "audio",
        label: "Listen: comfortable clarity, not slow speech",
        mode: "tts",
        text: "I'd really appreciate your advice on this.",
        rate: 0.9,
      },
      {
        type: "example",
        title: "Articulation observed — seven moments",
        items: [
          { english: "A candidate does two minutes of mirror work before every mock: th words, v/w pairs, then three sentences in announcer mode.", note: "Warm-up, not study — the mouth is a muscle, and muscles remember today's work.", domain: "study" },
          { english: "'I worked there for six month' — the vanished s quietly deleting a job's duration in a Part 1 answer.", note: "The speaker heard six months; the listener heard a broken noun.", domain: "exam" },
          { english: "Ordering at a packed counter: 'two flat whites and one sparkling water' — delivered at ninety percent speed, and nothing needs repeating.", note: "Ten percent slower is invisible to everyone except the person making it.", domain: "life" },
          { english: "Reading out an account reference over the phone, letter by letter, with the jaw fully open on every vowel.", note: "Professional life already runs on deliberate articulation; the test just asks you to borrow it.", domain: "work" },
          { english: "A learner records a Part 3 answer in announcer mode, then natural mode, and plays both to a friend without labels — the friend prefers the natural one but finds it 'unusually clear'.", note: "The ladder's fingerprint: calibration shows up as effortless-sounding clarity.", domain: "study" },
          { english: "Talking to a grandparent on a crackling line, a speaker automatically slows ten percent and finishes every ending — the instinct exists in every language.", note: "The ten-percent rule is not a new skill but a borrowed habit from bad phone lines everywhere.", domain: "life" },
          { english: "A Part 2 story where months, worked and watched all keep their clusters at full speed, and the timeline never wobbles.", note: "Narrative tenses live at the endings; keeping them keeps the story's clock.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Articulation mistakes corrected",
        items: [
          { wrong: "'I visited six country last year' — the plural s of countries lost at speed, and the sentence's meaning quietly damaged.", right: "'I visited six COUNTRIES last year' — the final cluster given its full moment even in a hurry.", reason: "The plural is grammar, and its loss is heard as an error even by listeners who cannot name what went wrong — while costing the speaker nothing to fix." },
          { wrong: "Speaking through a barely open jaw to sound relaxed and natural, lips barely moving.", right: "Jaw comfortably open, lips travelling their full range — natural clarity, not lazy quietness.", reason: "Relaxed and collapsed look identical from inside the speaker's head and sound nothing alike from outside; the mirror settles the difference in seconds." },
          { wrong: "Slowing down by half to be safe, dragging every syllable to the same careful length.", right: "Slow the whole delivery by about ten percent, and take the extra time from unstressed words, not from the endings.", reason: "A large slowdown damages fluency and rhythm readings while signalling panic, whereas ten percent is inaudible to the listener and transformative for the tongue." },
        ],
      },
      {
        type: "four-skills",
        title: "A work answer, warmed up and delivered",
        reading: {
          text: "A Part 1 opener in the style of the test: the examiner asks, 'What work do you do?' A candidate's planned answer reads: 'I'm a video editor. I work with three studios, and last month we finished a documentary about wine-making in the valleys. The work is varied, though the deadlines are ruthless.' The answer holds three th words, a v and w in the same sentence, two plural nouns, one past tense and a final cluster in deadlines.",
          task: "Mark every sound from the positions table that appears in the answer, and every ending that speed could swallow.",
        },
        writing: {
          task: "Write your own three-sentence work or study answer, then mark it: circle the position-tricky sounds, underline the endings that must survive, and note at which point you would place your single slowest, clearest word.",
          guide: [
            "Draft the answer first in natural language.",
            "Circle th, v/w and r/l sounds against the positions table.",
            "Underline every plural and past-tense ending.",
            "Choose your one slowest word and mark it.",
          ],
          model: "Answer: 'I train new nurses at a teaching hospital. Every Thursday, we run simulations of very difficult emergencies. Last winter, I moved from the wards to the training centre, and I have never regretted it.' Marked: three th words (Thursday, simulations — hidden inside — and teaching), v/w neighbours in very difficult and winters, endings on nurses, wards, simulations, emergencies and moved, and the single slowest word placed on Thursday, the answer's most public sound.",
        },
        listening: {
          script: "Tutor: Your clarity problem has a pattern — everything is fine until the last syllable of a word, and then the sound just stops existing. Play your recording and watch the transcript: worked, months, asked — each time the word ends in a consonant that never got finished. Here's your homework, and it's strange but it works: say the whole answer once as if you're announcing the news to a stadium. Exaggerate everything. Then say it normally. The exaggeration is scaffolding — you take it down afterwards, but the building keeps the shape.",
          task: "What pattern does the tutor find in the candidate's recording, and what two-step homework does she set?",
        },
        speaking: {
          task: "Climb the ladder on your marked answer: announcer mode in the mirror, half-theatre, then natural delivery at ten percent below your rush. Record only the final rung.",
          frames: [
            "Announcer pass: 'I train new NURSES at a TEACH-ing HOSpital…'",
            "Half-theatre pass: the same, dialled halfway back.",
            "Natural pass, recorded: conversational pace, endings alive.",
          ],
          checklist: [
            "Did every circled sound keep its position at natural speed?",
            "Did every underlined ending survive the final rung?",
            "Could a listener hear the difference between your natural pass and your old delivery?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Mechanics over mimicry", "Positions are described physically — where tongue, lips and jaw sit — so clarity arrives without imitating any particular accent's sound."],
          ["Meaning protection", "The ending-check habit defends plurals and past tenses, the two endings whose loss changes grammar rather than just polish."],
          ["Invisible slowdown", "Ten percent is below the listener's threshold of noticing yet above the tongue's threshold for finishing its movements."],
          ["Rehearsal range", "Over-articulation and relaxation give the mouth a full range to calibrate from, so natural delivery lands clearer than natural ever did alone."],
          ["Warm-up culture", "Treating the mouth as an instrument builds a two-minute pre-test routine that also burns off nervous energy."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Run ninety seconds of mirror warm-up on the day's likeliest sounds — th, v and w, plus three endings — before you leave for the test."],
          ["While the clock runs", "Ride the ten-percent rule: unhurried overall, generous on endings, and energy saved by compressing the small grammar words."],
          ["If you are stuck", "If a word comes out blurred, re-say it once at half speed and carry on — a single clear repetition reads as precision, not failure."],
          ["Final minutes", "Check one recording purely for swallowed endings, and give each casualty a place in tomorrow's announcer-mode warm-up."],
        ],
      },
      {
        type: "summary",
        points: [
          "The mouth has three dials — jaw, lips, tongue — and English consonants are positions on them: think is tongue-between-teeth, v is teeth-on-lip, w is rounded lips touching nothing.",
          "The r and l difference is pure position: tongue curled back for r, tongue tip pressed to the ridge for l.",
          "Endings carry grammar; keeping every plural s, past-tense t and final d alive at speed is articulation's highest-value job.",
          "Slow down about ten percent — inaudible to the listener, transformative for the tongue — and take the saved time from unstressed words, never from endings.",
          "Over-articulate as rehearsal — announcer mode, half-theatre, natural — and let the exaggeration calibrate the mouth so that natural lands clearer for free.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the pausing lesson and one from the rhythm lesson.",
        items: [
          { question: "What distinguishes a meaning pause from a language-search silence?", options: ["The pause's length, measured in seconds", "Its location: at an idea-group edge it projects control, mid-clause it projects struggle", "Whether the speaker's eyes are open or closed"], correctIndex: 1, explanation: "Location decides the message: edge silences file completed thoughts, while inside-clause silences sound like a sentence that broke in service.", from: "Pausing" },
          { question: "In the punctuation test from the pausing lesson, when is a spoken stop legal?", options: ["Whenever the speaker needs air", "Only where a comma, colon or full stop could reasonably sit in writing", "Only at the end of every second sentence"], correctIndex: 1, explanation: "Borrowing written punctuation gives speakers a boundary map they already own, which is why slash-marking works as a rehearsal tool.", from: "Pausing" },
          { question: "While clapping only the beats in the rhythm routine, what were you told to do with the unstressed syllables?", options: ["Say them at full length and slow the beat", "Shrink them so they fit between the claps", "Drop them entirely"], correctIndex: 1, explanation: "Compression of the non-beats is the engine of the pulse: the beat interval holds while the small syllables shrink to fit inside it.", from: "Rhythm" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. What is over-articulation for, given that nobody should speak that way in the test?",
        hints: ["Think about what musicians do before a performance."],
        options: [
          { id: "a", text: "It is a rehearsal technique: exaggerating every movement recalibrates the mouth so that natural delivery afterwards lands clearer than before." },
          { id: "b", text: "It is the target delivery style for the test itself, showing the examiner maximum effort." },
          { id: "c", text: "It is a warm-up for the lungs rather than the mouth." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It is a rehearsal technique: exaggerating every movement recalibrates the mouth so that natural delivery afterwards lands clearer than before.",
          "The ladder works like scales before a concert: the full range is travelled in private so the performance lands in the upper half of clarity without performing.",
          "(b) would deliver theatre to the examiner, who is listening for natural speech; (c) misattributes the exercise, which moves jaw, lips and tongue rather than breath.",
        ),
        tags: ["speaking", "pronunciation", "articulation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the mock feedback and choose the best interpretation.",
        hints: ["Compare how much the candidate slowed down with the ten-percent rule."],
        passageTitle: "The careful crawler",
        passage: "After a practice Part 2, a tutor wrote: 'Endings all present — well done. But somewhere around your second minute, the story stopped moving: every syllable had equal, careful weight, and the beat disappeared. My notes say 'clear but leaden'. Next mock, I want exactly the same endings with about half the extra time you took.' The candidate reported feeling completely in control and never rushed.",
        question: "What had the candidate done, and what does the tutor actually want?",
        options: [
          { id: "a", text: "The candidate over-articulated every syllable — a slowdown far beyond ten percent — and the tutor wants the same endings at nearly normal pace, taking time only from the unstressed words." },
          { id: "b", text: "The candidate rushed and swallowed endings, so the tutor wants even more care next time." },
          { id: "c", text: "The candidate's vocabulary was too simple, and the pace is irrelevant." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The candidate over-articulated every syllable — a slowdown far beyond ten percent — and the tutor wants the same endings at nearly normal pace, taking time only from the unstressed words.",
          "Equal careful weight on every syllable is the fingerprint of a giant slowdown, which keeps endings alive but kills the pulse; half the extra time restores the beat while keeping the grammar audible.",
          "(b) contradicts the tutor's own praise of the endings; (c) is nowhere in the feedback, which discusses delivery only.",
        ),
        tags: ["speaking", "pronunciation", "articulation"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the ten-percent rule.",
        hints: [],
        question: "State the ten-percent rule and explain why such a small slowdown works.",
        acceptedAnswers: [
          "slow the whole delivery by about ten percent, which listeners barely notice but which gives the tongue time to finish every movement",
          "deliver at ninety percent of your natural rush — inaudible to the listener, but endings stop vanishing",
          "take ten percent off your speed so every sound position completes, since the change is below the listener's noticing threshold",
          "a ten percent slowdown buys the tongue enough time for full positions and endings without sounding slow",
        ],
        keywords: ["ten", "percent"],
        feedback: fb(
          "Slow the whole delivery by about ten percent — a change listeners barely register but which lets the tongue complete every movement it starts.",
          "The rule works because noticing thresholds and tongue travel times sit on either side of the same small interval, so the gain is free to the speaker's image.",
          "Answers proposing fifty percent have chosen the slowdown that damages fluency readings, and answers proposing no slowdown leave the endings on the floor.",
        ),
        tags: ["speaking", "pronunciation", "articulation", "pace"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why is speaking through a barely open jaw a trap, even though it feels relaxed and natural from inside?",
        hints: [],
        options: [
          { id: "a", text: "Because the jaw's small travel compresses all the vowel and consonant positions together, blurring distinctions the listener needs — and the speaker cannot hear the damage from inside their own head." },
          { id: "b", text: "Because quiet speech is officially penalised by the descriptors." },
          { id: "c", text: "Because a closed jaw causes physical fatigue over a two-minute turn." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because the jaw's small travel compresses all the vowel and consonant positions together, blurring distinctions the listener needs — and the speaker cannot hear the damage from inside their own head.",
          "Self-monitoring is deaf to jaw collapse precisely because it feels like relaxation, which is why the mirror and the recording — outside views of the mouth — are the honest judges.",
          "(b) invents an official penalty for volume, which is a separate matter; (c) mistakes the symptom's direction — the jaw tires because it is working in a cramped position, not because it is open.",
        ),
        tags: ["speaking", "pronunciation", "articulation", "jaw"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided drill. Climb the articulation ladder: announcer mode, half-theatre, then natural.",
        hints: ["In announcer mode, let the tongue peek between the teeth on Thursday and let the teeth meet the lip on every v."],
        situation: "Articulation ladder. Deliver the sentences once each in announcer mode, half-theatre and natural delivery, recording only the final natural pass with every ending intact.",
        targetPhrases: ["Every Thursday, we run very difficult simulations.", "Last winter, I moved to the training centre.", "She works hard and always finishes her tasks."],
        mustSay: ["Thursday", "winter", "tasks"],
        feedback: fb(
          "A recording of the natural pass containing Thursday, winter and tasks, with positions held and endings audible.",
          "The two rehearsal rungs calibrate the dials so the recorded pass lands clear without sounding performed, which is the ladder's entire purpose in one take.",
          "Recordings where the natural pass loses the th of Thursday or the final s of tasks skipped the calibration; return to announcer mode and climb again.",
        ),
        tags: ["speaking", "pronunciation", "articulation", "drill"],
      }),
    ],
    assignment: {
      title: "The sound inventory",
      instructions:
        "Write out a three-sentence answer about your work or studies. Mark it up like the lesson's model: circle the position-tricky sounds (th, v, w, r and l), underline every ending that speed could swallow, and star your single slowest, clearest word. Then describe your own announcer-mode warm-up routine — which sounds it would feature, in what order, and how long it would run before test day.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Run ninety seconds of mirror warm-up daily — th, v and w positions plus three sentences in announcer mode — and finish each session with one natural-speed recording checked only for endings.",
      "Choose one sentence from your own life each day, say it once at half speed with full positions and once at your new ten-percent-slower pace, and confirm in the recording that the two sound nearly identical.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-pron-natural",
    title: "Natural speech",
    description:
      "Putting the chapter together: what natural actually means at each band, the four-question replay check for your own recordings, and a three-session-a-week self-training routine for the final fortnight before the test.",
    objectives: [
      "describe what natural speech means at different band levels, treating every band claim as an estimate",
      "run the four-question replay check on your own recordings",
      "follow a structured self-training routine through the final weeks before test day",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Natural is the most misunderstood word in the pronunciation criterion, because candidates hear it as a style they must copy rather than a description of speech that works. This closing lesson defines natural in testable terms — at band 6 and at band 8, always as estimates — and hands you the two tools that build it: a four-question replay check you can run on any recording, and a training routine that fits the last fortnight before your exam. Everything in the previous nine lessons assembles here.",
        beforeYouStart: [
          "You have worked through the nine earlier lessons of this chapter, from individual sounds to clear articulation.",
          "You have at least one recorded two-minute answer available to replay.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the whole test, integrated; this is the chapter's dress rehearsal"],
          ["Task & question types", "Full Part 1, Part 2 and Part 3 performances, self-assessed against the replay check"],
          ["What is assessed", "Pronunciation as a whole system — the descriptors' top bands reward speech that is sustained and effortless to follow, not speech that imitates"],
          ["Why this matters", "Candidates plateau when they practise without a feedback loop; the replay check and the routine are that loop, and they cost nothing but honesty"],
        ],
      },
      { type: "heading", text: "Component 1 — Natural is not someone else's accent" },
      {
        type: "text",
        text: "The chapter closes where it opened, because the founding fact has not changed: no examiner is listening for a country. An Indian, Nigerian, Brazilian, Chinese or Spanish accent — or any other accent on earth — can earn the highest scores the pronunciation criterion awards, from the moment the speaker becomes effortless to follow, because the criterion measures the listener's effort and never the speaker's postcode. Natural, in descriptor language, means speech where the features you have studied — contrasts, stress, melody, joins, pulse, pauses, articulation — run continuously and without apparent effort, inside whatever accent the speaker owns. A candidate chasing a borrowed accent pays twice: the imitation rarely fools anyone, and the attention it consumes is stolen from the ideas the test is actually examining. Keep your voice; install the features.",
      },
      { type: "heading", text: "Component 2 — Band 6 natural, band 8 natural (estimates)" },
      {
        type: "text",
        text: "What separates adequate natural speech from very good natural speech is not speed, vocabulary or accent — it is consistency and range. The table below sketches the difference in practical terms, and every line in it is an informed estimate, not a promise: examiners weigh features together, and no single line decides a band. Notice what is absent from the table: any mention of sounding British, American or anything else. Notice also that the band 6 column describes genuinely serviceable speech — a candidate at that level is already easy to follow most of the time, and the route upward is repetition of the same features, not a new accent.",
      },
      {
        type: "table",
        title: "Two versions of natural, compared (all band references are estimates)",
        headers: ["Feature", "Band 6 natural, roughly", "Band 8 natural, roughly"],
        rows: [
          ["Overall impression", "Generally easy to follow, though the listener occasionally works", "Effortless to follow throughout; nothing needs replaying"],
          ["Word and sentence stress", "Mostly accurate, with some keywords losing their beat under pressure", "Used flexibly to highlight, contrast and correct — stress does grammatical work"],
          ["Intonation", "Some range that narrows as nerves rise", "Sustained range; attitude, commitment and qualification all audible"],
          ["Connected speech", "Some linking, with stretches of word-by-word delivery between them", "Light, consistent joining; delivery flows without ever losing endings"],
          ["Pausing", "Mostly at boundaries, with occasional mid-clause search stops", "Controlled and meaningful; pauses structure the answer and hold effect"],
        ],
      },
      {
        type: "audio",
        label: "Listen: a natural-pace Part 1 answer",
        mode: "tts",
        text: "I've been living in this city for about six years now. I moved here for work, and honestly, I can't imagine leaving.",
        rate: 0.95,
      },
      { type: "heading", text: "Component 3 — The four-question replay check" },
      {
        type: "text",
        text: "Every lesson in this chapter ended with a recording; this is where the recordings earn their keep. After any recorded answer — thirty seconds or two minutes — replay it once and interrogate it with four questions, in this order. First: can a stranger follow me? This is the intelligibility test, and it is the only pass-fail question; everything else is refinement. Second: which words carry the stress? You should be able to tap the peaks, and the peaks should be the meaning words. Third: does my voice move? Listen for the closing falls, the open rises, the fall-rise before a qualification — a voice that sits on one pitch for thirty seconds fails this question regardless of its words. Fourth: do my pauses land at meaning boundaries? Count the silences that fell inside idea groups; each one is a small repair job. Four questions, one pass each, about eight minutes — and a diagnosis more honest than any feeling you have about your own speech.",
      },
      {
        type: "steps",
        title: "Running the replay check, one question per pass",
        intro: "Four listening passes, four verdicts, one fix.",
        steps: [
          {
            title: "Pass 1: The stranger test",
            text: "Replay the recording as if you had never met yourself, and answer only question one: could a first-time listener follow every sentence without asking again? Note any moment you would have needed to replay — those moments are tomorrow's contrast and ending drills.",
            examples: [
              { english: "Verdict example: 'Two moments needed replay — the swallowed months and the mis-stressed comfortable.'", note: "Question one converts vague worry into a specific to-do list." },
            ],
          },
          {
            title: "Pass 2: The peak hunt",
            text: "Replay tapping only the words that carry the beat. If the tapping is easy and lands on nouns and verbs, question two passes. If the taps wander or land on everything equally, return to the marking and hammering passes from the sentence-stress lesson.",
          },
          {
            title: "Pass 3: The movement test",
            text: "Replay with the volume low enough that words blur, listening only for pitch. A voice that rises and falls through the answer passes question three; a flat band of sound fails it, and the shadowing routine from the intonation lesson is the repair.",
            examples: [
              { english: "Low-volume verdict: 'I can hear the ends of her sentences even without the words' — pass.", note: "Melody that survives volume loss is melody that is carrying meaning." },
            ],
          },
          {
            title: "Pass 4: The boundary count",
            text: "Replay counting silences, and ask of each one: edge or inside? Every inside-clause stop is noted for the boundary-parking habit from the pausing lesson. Then choose exactly one fix from all four passes, apply it in a single re-record, and log the week's verdict.",
          },
        ],
      },
      {
        type: "audio",
        label: "Listen: flexible stress and a clean pause",
        mode: "tts",
        text: "The thing I love most about my job is the people. Everything else, I could take or leave.",
        rate: 0.95,
      },
      {
        type: "table",
        title: "The final-fortnight routine",
        headers: ["Session", "Recording", "Replay check focus", "Fix policy"],
        rows: [
          ["Monday, 20 minutes", "One Part 1 topic, three questions", "All four questions, quickly", "One fix, re-record the third answer only"],
          ["Wednesday, 25 minutes", "One full Part 2 card, two minutes", "Question one, then whichever question failed last week", "One fix, re-record the closing minute"],
          ["Friday, 25 minutes", "One Part 3 discussion, five minutes", "All four questions, plus a tally of inside-clause stops", "One fix, logged against last Friday's tally"],
          ["Final weekend", "One full mock Speaking test", "Question one only", "No fixes — maintenance, sleep, and the warm-up routine"],
        ],
      },
      {
        type: "audio",
        label: "Listen: a contrastive correction at natural speed",
        mode: "tts",
        text: "No, I said the morning course, not the evening one.",
        rate: 0.95,
      },
      {
        type: "example",
        title: "Natural speech observed — seven assemblies",
        items: [
          { english: "Two candidates with identical grammar: the faster one swallows endings and flattens pitch, the slower one keeps every feature alive — and listeners, asked which sounds more natural, choose the second every time.", note: "Natural lives in features, not in words per minute.", domain: "exam" },
          { english: "A mock marked, informally and only as an estimate, in the band 6 natural column for pauses — the candidate's fix was boundary-parking, and the next mock's tally of mid-clause stops fell from nine to two.", note: "One fix per week is slow enough to work and fast enough to show.", domain: "exam" },
          { english: "A learner runs the four-question check on Monday's recording and discovers that question three fails only after the second minute — the voice flattens as the tank empties.", note: "The check locates problems in time as well as in kind, which feelings never do.", domain: "study" },
          { english: "Chatting with a neighbour about a broken lift, a speaker uses contrastive stress, a fall-rise, two light links and a boundary pause without noticing any of them.", note: "The features you studied are already in your everyday speech — the test just asks for them under pressure.", domain: "life" },
          { english: "A team stand-up delivered at ninety percent speed with peaks on the numbers, and nobody asks for a repeat all week.", note: "Natural delivery is a professional skill before it is a test skill.", domain: "work" },
          { english: "In the final fortnight, a candidate records Monday, Wednesday and Friday, keeps a one-line log per session, and walks into the test with nine logged fixes behind her.", note: "The log matters less as evidence than as habit: recording with a verdict beats recording alone.", domain: "study" },
          { english: "A candidate with a strong accent delivers a Part 2 answer with every feature intact, and the mock examiner's note reads 'easy to follow throughout' — the accent never appears in the note.", note: "The criterion's vocabulary is about the listener's effort; accents appear only in the learner's imagination.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Natural-speech mistakes corrected",
        items: [
          { wrong: "Equating natural with fast: cramming more words per minute to sound fluent, and losing endings, peaks and pauses in the chase.", right: "Natural means the features run continuously at a pace you control — which is usually about ten percent below your top speed.", reason: "Speed is a by-product listeners notice; features are the substance they follow, and sacrificing substance for by-product is the chapter's one unforgivable trade." },
          { wrong: "Borrowing an accent for test day — loading a target country's vowels on top of a week's practice and hoping the examiner is fooled.", right: "Keeping your own accent and spending the same hours on contrasts, stress, melody, joins, pulse and pauses.", reason: "The descriptors never mention a region, imitation distracts attention from content, and a half-learned accent collapses under pressure exactly when the features needed it most." },
          { wrong: "Practising pronunciation silently — reading lessons, nodding, rehearsing in the head — and never once recording.", right: "Three recorded sessions a week, each followed by the four-question replay check and one applied fix.", reason: "Speech has no mirror except the recording; the learner who never records is rehearsing a self-image rather than a sound, and the first mock examiner is the first honest listener they meet." },
        ],
      },
      {
        type: "four-skills",
        title: "The last fortnight, planned and rehearsed",
        reading: {
          text: "Two candidates report their mock feedback, in material written in the style of the test. Candidate A: 'The examiner said my answers were easy to follow, though twice she leaned in when my voice went flat in the second minute of Part 2. My keywords mostly landed.' Candidate B: 'The examiner asked me to repeat three sentences — she said my endings disappeared when I sped up, and one long sentence lost its shape because I never stopped for breath.' Both candidates speak with clear, strong accents and neither was ever asked about accent.",
          task: "Using the band-6 and band-8 natural table (estimates only), say which features each candidate has and which each is missing.",
        },
        writing: {
          task: "Write your own final-fortnight plan: name the three weekly recording sessions you will actually keep, the question from the replay check that failed most recently, the single fix you will apply first, and the one sentence you will say to yourself on the morning of the test.",
          guide: [
            "Choose sessions you can genuinely keep — three short ones beat five abandoned ones.",
            "Name your most recent failed replay question, from a real recording if possible.",
            "Define the fix in one sentence, small enough to apply this week.",
            "Write the test-morning sentence in your own words.",
          ],
          model: "My plan: Monday, Wednesday and Friday at seven in the morning, twenty to twenty-five minutes each, phone recorder and this lesson's checklist. My most recent failed question was question three — my recording flattens after the first minute, especially in Part 2. First fix: end every idea group with a landed falling tone, re-recording the second minute of each Part 2 attempt. Test-morning sentence: 'Slower than feels right, clearer than feels necessary, and my own voice throughout.'",
        },
        listening: {
          script: "Tutor: You asked me which of the four questions matters most, and here is my honest answer. Question one is the examination: if a stranger can follow you, everything else is polish, and polish is what the upper bands are made of. Questions two, three and four are the polish. So run them in order, one pass each, and never skip the stranger test just because the others are more interesting to fix. And remember the rule that makes the routine survivable: one fix per week. You are not repairing a broken speaker. You are tuning an instrument that already plays.",
          task: "Which question does the tutor call the examination, and what rule does she say makes the routine survivable?",
        },
        speaking: {
          task: "Record a two-minute Part 2 answer on a topic of your choice, run all four passes of the replay check, and then report your verdicts aloud: one sentence per question.",
          frames: [
            "Verdict frame, question one: 'A stranger would follow everything except …'",
            "Verdict frame, questions two and three: 'My peaks land on …' and 'My voice moves until …'",
            "Verdict frame, question four: 'Of my pauses, the ones inside idea groups were …'",
          ],
          checklist: [
            "Did you run one pass per question instead of judging everything at once?",
            "Did you choose exactly one fix for this week?",
            "Did the whole check, recording included, take less than fifteen minutes?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Honest self-assessment", "The four questions replace feelings with verdicts, and each verdict maps onto a specific earlier lesson for the repair."],
          ["Band realism", "The band 6 and band 8 sketches are framed as estimates throughout, giving targets without promising outcomes."],
          ["Accent-neutral by definition", "Natural is defined entirely in listener-effort terms, so the learner's own accent remains the vehicle the features ride in."],
          ["Sustainable routine", "Three short weekly sessions with one fix each respect real schedules and produce a visible log of progress."],
          ["Taper design", "The final weekend switches to maintenance and sleep, because no feature is ever built in the last forty-eight hours."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Book the fortnight's recording sessions in your calendar now, with the replay check listed as part of each one."],
          ["While the clock runs", "Speak on the features you have installed — the stranger test is the only one running in the room — and let the pace sit ten percent below your rush."],
          ["If you are stuck", "Mid-test, return to question one: if the stranger can still follow you, nothing is lost, and the other three questions can wait for Friday's session."],
          ["Final minutes", "In the last two days before the test, change nothing: maintenance recordings, the warm-up routine, and an early night."],
        ],
      },
      {
        type: "summary",
        points: [
          "Natural speech means the chapter's features — contrasts, stress, melody, joins, pulse, pauses, articulation — running continuously inside your own accent, and no national accent is worth more than another on this criterion.",
          "Band 6 natural is already serviceable: generally easy to follow with occasional effort; band 8 natural is effortless throughout, with stress, intonation and pausing doing structural work — and every band line here is an estimate.",
          "The four-question replay check — can a stranger follow me, which words carry the stress, does my voice move, do my pauses land at meaning boundaries — converts any recording into a diagnosis in about eight minutes.",
          "One fix per week, applied in a single re-record and logged, is the pace at which features become permanent.",
          "The final fortnight runs three recorded sessions a week and tapers into maintenance, because nothing is built in the last two days and nothing needs to be.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the articulation lesson and one from the pausing lesson.",
        items: [
          { question: "Why does the articulation ladder finish with a natural-delivery rung instead of stopping at maximum clarity?", options: ["Because exaggeration is the goal and the natural rung is only a rest", "Because travelling the full range calibrates the mouth, so natural delivery afterwards lands in the upper half of clarity without performing", "Because the natural rung is where breathing is practised"], correctIndex: 1, explanation: "The ladder borrows the logic of scales before a concert: the exaggeration is scaffolding, taken down after use but leaving the building standing straighter.", from: "Clear articulation" },
          { question: "What are the three dials of the mouth, as the articulation lesson described them?", options: ["Volume, speed and pitch", "Jaw opening, lip shape and tongue position", "Breath, tone and rhythm"], correctIndex: 1, explanation: "English consonants are positions on those three dials, which is why mirror work — watching the dials move — repairs what self-listening cannot even hear.", from: "Clear articulation" },
          { question: "How many effect pauses belong in one test answer?", options: ["One, held before the single most important point", "One per sentence, for rhythm", "As many as possible, wherever a pause feels dramatic"], correctIndex: 0, explanation: "A single held silence focuses the listener before the point you most want remembered; repetition dilutes the device into mannerism.", from: "Pausing" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Two recordings of the same Part 2 answer exist. Recording one is faster; recording two is about ten percent slower with every ending, peak and pause intact. Which sounds more natural?",
        hints: ["Ask which recording a first-time listener would rather follow for two minutes."],
        options: [
          { id: "a", text: "Recording two: natural speech is features running continuously at a controlled pace, and listeners consistently prefer it over raw speed." },
          { id: "b", text: "Recording one: natural means fast, and the lost endings are a fair price for momentum." },
          { id: "c", text: "Neither, because naturalness cannot be practised or measured." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Recording two: natural speech is features running continuously at a controlled pace, and listeners consistently prefer it over raw speed.",
          "The word natural in the criterion describes speech that works for the listener, and work is done by contrasts, stress, melody and pauses — never by words per minute.",
          "(b) trades the substance the listener follows for a by-product they merely notice; (c) is refuted by the whole chapter: every feature here is trainable and checkable by recording.",
        ),
        tags: ["speaking", "pronunciation", "natural-speech"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the two mock notes and answer with the estimates table in mind.",
        hints: ["Match each note's language against the two columns of the natural-speech table."],
        passageTitle: "Two mock notes",
        passage: "Mock note one: 'Followed her easily throughout; the stress did real work in her corrections, and her pauses always arrived at the end of an idea.' Mock note two: 'Understood most of it, but I worked at times: some keywords lost their beat when he accelerated, and two silences landed in the middle of half-finished clauses.' Both candidates speak with strong, clear accents, and neither note mentions accent at all.",
        question: "In the lesson's terms (estimates only), where does each performance sit, and what is the gap made of?",
        options: [
          { id: "a", text: "Note one sketches band 8 natural and note two band 6 natural; the gap is consistency — beat-keeping under speed and boundary pausing — not vocabulary or accent." },
          { id: "b", text: "Note one sketches band 8 natural and note two band 6 natural; the gap is accent strength, which the second candidate must reduce." },
          { id: "c", text: "Both notes describe band 8 natural, since neither mentions a pronunciation error." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Note one sketches band 8 natural and note two band 6 natural; the gap is consistency — beat-keeping under speed and boundary pausing — not vocabulary or accent.",
          "The table's band 6 column is exactly note two's language — generally followed with occasional work — and the named weaknesses are precisely the features whose consistency defines the band 8 column.",
          "(b) contradicts both notes, neither of which mentions accent; (c) ignores that note two's listener 'worked at times', which is band 6 language by definition.",
        ),
        tags: ["speaking", "pronunciation", "natural-speech", "bands"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from the replay check.",
        hints: [],
        question: "List the four questions of the replay check, in order.",
        acceptedAnswers: [
          "can a stranger follow me; which words carry the stress; does my voice move; do my pauses land at meaning boundaries",
          "the stranger test, the peak hunt, the movement test, the boundary count",
          "intelligibility first, then stress placement, then pitch movement, then pause location",
          "followability, stress, voice movement, and whether pauses land at idea-group edges",
        ],
        keywords: ["stranger", "stress"],
        feedback: fb(
          "Can a stranger follow me, which words carry the stress, does my voice move, and do my pauses land at meaning boundaries.",
          "The four questions summarise the whole chapter as a self-check: intelligibility, sentence stress, intonation and pausing, in descending order of urgency.",
          "Answers that begin with anything other than the stranger test have reordered the priorities — intelligibility is the only pass-fail question on the list.",
        ),
        tags: ["speaking", "pronunciation", "natural-speech", "replay-check"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which statement matches what the pronunciation criterion actually rewards?",
        hints: [],
        options: [
          { id: "a", text: "Any accent — Indian, Nigerian, Brazilian, Chinese, Spanish or any other — can reach the top of the criterion when the speaker is effortless to follow, because the descriptors measure the listener's effort." },
          { id: "b", text: "Accents from countries where English is an official language are scored half a band higher automatically." },
          { id: "c", text: "The criterion rewards whichever accent the examiner personally finds familiar." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Any accent — Indian, Nigerian, Brazilian, Chinese, Spanish or any other — can reach the top of the criterion when the speaker is effortless to follow, because the descriptors measure the listener's effort.",
          "The descriptor language is entirely about intelligibility features — stress, intonation, connected speech — and it never names a region, which is why this chapter spent its hours on features and none on imitation.",
          "(b) invents an administrative bonus no scoring system contains; (c) contradicts examiner training, which standardises scoring against the descriptors rather than personal taste.",
        ),
        tags: ["speaking", "pronunciation", "natural-speech", "accent-neutrality"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Guided performance. Record a two-minute Part 2 answer, then report your replay-check verdicts aloud.",
        hints: ["Run one pass per question afterwards — intelligibility, peaks, pitch movement, pause locations — and speak the verdicts as single sentences."],
        situation: "Final rehearsal. Speak for two minutes on a cue-card topic of your choice at test pace, then, in the same recording, deliver one spoken sentence per replay question giving your honest verdict.",
        targetPhrases: ["A stranger could follow everything except …", "My peaks landed on … and my voice moved until …", "My pauses inside idea groups were … and this week's one fix is …"],
        mustSay: ["stranger", "peaks", "fix"],
        feedback: fb(
          "A single recording holding the two-minute answer plus spoken verdicts containing stranger, peaks and this week's fix.",
          "Speaking the verdicts out loud completes the loop the chapter built: performance, honest assessment and one named repair, all in the learner's own voice.",
          "Recordings with an answer but no verdicts have captured the performance and skipped the only part that improves next week's version.",
        ),
        tags: ["speaking", "pronunciation", "natural-speech", "drill"],
      }),
    ],
    assignment: {
      title: "My fortnight, in writing",
      instructions:
        "Write your final-fortnight training plan: the three weekly recording sessions you will actually keep, the replay-check question that failed most recently and the evidence for it, the single fix you will apply this week, and how your plan tapers in the last two days before the test. Close with the sentence you will say to yourself on the morning of the exam.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Run the full routine for one fortnight — Monday Part 1, Wednesday Part 2, Friday Part 3, each with the four-question replay check and one logged fix — and keep the log where you can see the fixes accumulating.",
      "On the final weekend before your test, record one complete mock Speaking test, run the stranger test on it alone, then stop practising pronunciation entirely and rest.",
    ],
  },
];
