import type { TenseData, TenseGroup } from "./types";

/**
 * The twelve core tenses with all nine comparison aspects:
 * meaning, structure, verb forms, helping verbs, affirmative, negative,
 * questions, WH-questions and time expressions.
 */

export const tenses: TenseData[] = [
  // ------------------------------------------------------------------ present
  {
    id: "present-simple",
    name: "Present Simple",
    group: "present",
    meaning: "Habits, routines, facts and schedules — things that are generally true.",
    structure: {
      affirmative: "Subject + verb (+s for he/she/it)",
      negative: "Subject + don't/doesn't + base verb",
      question: "Do/Does + subject + base verb?",
    },
    verbForm: "Base form (+s for he/she/it)",
    helpingVerbs: ["do", "does"],
    affirmative: ["She works in a bank.", "I drink tea every morning."],
    negative: ["She doesn't work on Sundays.", "I don't drink coffee."],
    questions: {
      yesNo: "Does she work here?",
      wh: [
        { question: "Where does she work?", whWord: "Where" },
        { question: "What do you drink?", whWord: "What" },
      ],
    },
    timeExpressions: ["every day", "usually", "always", "often", "never", "on Mondays"],
    tip: "The -s in 'she works' is the #1 beginner mistake — he/she/it takes -s!",
  },
  {
    id: "present-continuous",
    name: "Present Continuous",
    group: "present",
    meaning: "Actions happening now, around now, or temporary situations.",
    structure: {
      affirmative: "Subject + am/is/are + verb-ing",
      negative: "Subject + am/is/are + not + verb-ing",
      question: "Am/Is/Are + subject + verb-ing?",
    },
    verbForm: "Verb + -ing (the -ing form)",
    helpingVerbs: ["am", "is", "are"],
    affirmative: ["She is working right now.", "They are studying this week."],
    negative: ["She isn't working today.", "They aren't studying at the moment."],
    questions: {
      yesNo: "Is she working now?",
      wh: [
        { question: "What is she doing?", whWord: "What" },
        { question: "Why are they studying?", whWord: "Why" },
      ],
    },
    timeExpressions: ["now", "right now", "at the moment", "today", "this week"],
    tip: "State verbs (know, like, want) are rarely continuous: say 'I know', not 'I am knowing'.",
  },
  {
    id: "present-perfect",
    name: "Present Perfect",
    group: "present",
    meaning: "Past actions connected to now — experiences, unfinished time, recent news.",
    structure: {
      affirmative: "Subject + have/has + past participle",
      negative: "Subject + haven't/hasn't + past participle",
      question: "Have/Has + subject + past participle?",
    },
    verbForm: "Past participle (V3): worked, gone, seen",
    helpingVerbs: ["have", "has"],
    affirmative: ["She has worked there for years.", "I have seen that movie."],
    negative: ["She hasn't worked since May.", "I haven't seen him today."],
    questions: {
      yesNo: "Has she worked abroad?",
      wh: [
        { question: "How long have you worked here?", whWord: "How long" },
        { question: "Where has he gone?", whWord: "Where" },
      ],
    },
    timeExpressions: ["already", "yet", "just", "ever", "never", "for", "since"],
    tip: "Use 'for' with a duration (for two years) and 'since' with a start point (since 2020).",
  },
  {
    id: "present-perfect-continuous",
    name: "Present Perfect Continuous",
    group: "present",
    meaning: "Actions that started in the past and are still continuing — focus on duration.",
    structure: {
      affirmative: "Subject + have/has been + verb-ing",
      negative: "Subject + haven't/hasn't been + verb-ing",
      question: "Have/Has + subject + been + verb-ing?",
    },
    verbForm: "Verb + -ing",
    helpingVerbs: ["have", "has", "been"],
    affirmative: ["She has been working since 9 a.m.", "I have been learning English for a year."],
    negative: ["She hasn't been working lately.", "I haven't been sleeping well."],
    questions: {
      yesNo: "Has she been working today?",
      wh: [
        { question: "How long have you been waiting?", whWord: "How long" },
        { question: "What have you been doing?", whWord: "What" },
      ],
    },
    timeExpressions: ["for", "since", "all day", "lately", "recently"],
    tip: "Answers to 'How long…?' often use this tense: 'I've been waiting for 20 minutes.'",
  },
  // --------------------------------------------------------------------- past
  {
    id: "past-simple",
    name: "Past Simple",
    group: "past",
    meaning: "Finished actions in finished time — yesterday, last year, in 2019.",
    structure: {
      affirmative: "Subject + past verb (V2)",
      negative: "Subject + didn't + base verb",
      question: "Did + subject + base verb?",
    },
    verbForm: "Past form (V2): worked, went, saw",
    helpingVerbs: ["did"],
    affirmative: ["She worked late yesterday.", "We went to the beach."],
    negative: ["She didn't work late.", "We didn't go out."],
    questions: {
      yesNo: "Did she work late?",
      wh: [
        { question: "When did she work?", whWord: "When" },
        { question: "Where did you go?", whWord: "Where" },
      ],
    },
    timeExpressions: ["yesterday", "last week", "two days ago", "in 2019"],
    tip: "After 'did' the verb goes back to its base form: 'Did you go?', not 'Did you went?'",
  },
  {
    id: "past-continuous",
    name: "Past Continuous",
    group: "past",
    meaning: "Actions in progress at a moment in the past — often interrupted by another action.",
    structure: {
      affirmative: "Subject + was/were + verb-ing",
      negative: "Subject + wasn't/weren't + verb-ing",
      question: "Was/Were + subject + verb-ing?",
    },
    verbForm: "Verb + -ing",
    helpingVerbs: ["was", "were"],
    affirmative: ["She was working at 8 p.m.", "They were watching TV."],
    negative: ["She wasn't working then.", "They weren't watching anything."],
    questions: {
      yesNo: "Was she working late?",
      wh: [
        { question: "What was she doing?", whWord: "What" },
        { question: "What were they watching?", whWord: "What" },
      ],
    },
    timeExpressions: ["at 8 p.m. yesterday", "while", "when", "all evening"],
    tip: "Classic pair: 'I was cooking when the phone rang.' — longer action + sudden action.",
  },
  {
    id: "past-perfect",
    name: "Past Perfect",
    group: "past",
    meaning: "The earlier of two past actions — what had already happened before another past event.",
    structure: {
      affirmative: "Subject + had + past participle",
      negative: "Subject + hadn't + past participle",
      question: "Had + subject + past participle?",
    },
    verbForm: "Past participle (V3)",
    helpingVerbs: ["had"],
    affirmative: ["She had worked there before she moved.", "The film had started when we arrived."],
    negative: ["She hadn't worked there before.", "The film hadn't started yet."],
    questions: {
      yesNo: "Had she worked there before?",
      wh: [
        { question: "Why had they left early?", whWord: "Why" },
        { question: "What had happened before that?", whWord: "What" },
      ],
    },
    timeExpressions: ["before", "by the time", "already", "after"],
    tip: "Use past simple + past perfect together: 'When I arrived, the film had started.'",
  },
  {
    id: "past-perfect-continuous",
    name: "Past Perfect Continuous",
    group: "past",
    meaning: "Duration up to a point in the past — how long something had been happening.",
    structure: {
      affirmative: "Subject + had been + verb-ing",
      negative: "Subject + hadn't been + verb-ing",
      question: "Had + subject + been + verb-ing?",
    },
    verbForm: "Verb + -ing",
    helpingVerbs: ["had", "been"],
    affirmative: ["She had been working for hours before the break.", "It had been raining all night."],
    negative: ["She hadn't been working there long.", "It hadn't been raining."],
    questions: {
      yesNo: "Had she been working that day?",
      wh: [
        { question: "How long had it been raining?", whWord: "How long" },
        { question: "What had they been doing?", whWord: "What" },
      ],
    },
    timeExpressions: ["for two hours before", "all morning", "before that"],
    tip: "Visible result in the past: 'The streets were wet — it had been raining.'",
  },
  // ------------------------------------------------------------------- future
  {
    id: "future-simple",
    name: "Future Simple (will)",
    group: "future",
    meaning: "Predictions, spontaneous decisions, promises and offers.",
    structure: {
      affirmative: "Subject + will + base verb",
      negative: "Subject + won't + base verb",
      question: "Will + subject + base verb?",
    },
    verbForm: "Base form (no -s, no to!)",
    helpingVerbs: ["will"],
    affirmative: ["She will work tomorrow.", "I'll help you with that."],
    negative: ["She won't work this weekend.", "I won't be late, I promise."],
    questions: {
      yesNo: "Will she work tomorrow?",
      wh: [
        { question: "When will she start?", whWord: "When" },
        { question: "What will you do?", whWord: "What" },
      ],
    },
    timeExpressions: ["tomorrow", "next week", "soon", "in 2030"],
    tip: "For plans already decided, 'be going to' is common: 'I'm going to study tonight.'",
  },
  {
    id: "future-continuous",
    name: "Future Continuous",
    group: "future",
    meaning: "Actions that will be in progress at a specific future moment.",
    structure: {
      affirmative: "Subject + will be + verb-ing",
      negative: "Subject + won't be + verb-ing",
      question: "Will + subject + be + verb-ing?",
    },
    verbForm: "Verb + -ing",
    helpingVerbs: ["will", "be"],
    affirmative: ["She will be working at 9 p.m.", "This time tomorrow, we'll be flying."],
    negative: ["She won't be working then.", "We won't be flying yet."],
    questions: {
      yesNo: "Will she be working at 9?",
      wh: [
        { question: "What will you be doing at noon?", whWord: "What" },
        { question: "Where will they be staying?", whWord: "Where" },
      ],
    },
    timeExpressions: ["at 9 p.m. tomorrow", "this time next week", "all evening"],
    tip: "Picture the moment: at 9 p.m., the action is mid-way — 'will be working'.",
  },
  {
    id: "future-perfect",
    name: "Future Perfect",
    group: "future",
    meaning: "Actions that will be finished before a specific future time.",
    structure: {
      affirmative: "Subject + will have + past participle",
      negative: "Subject + won't have + past participle",
      question: "Will + subject + have + past participle?",
    },
    verbForm: "Past participle (V3)",
    helpingVerbs: ["will", "have"],
    affirmative: ["She will have finished by 5 p.m.", "By June, I will have finished the course."],
    negative: ["She won't have finished by then.", "I won't have finished it in time."],
    questions: {
      yesNo: "Will she have finished by 5?",
      wh: [
        { question: "How many lessons will you have completed by Friday?", whWord: "How many" },
      ],
    },
    timeExpressions: ["by 5 p.m.", "by then", "by the time", "before June"],
    tip: "'By' + future time is the signal: 'By Friday, I will have read two books.'",
  },
  {
    id: "future-perfect-continuous",
    name: "Future Perfect Continuous",
    group: "future",
    meaning: "How long something will have been happening by a future moment.",
    structure: {
      affirmative: "Subject + will have been + verb-ing",
      negative: "Subject + won't have been + verb-ing",
      question: "Will + subject + have been + verb-ing?",
    },
    verbForm: "Verb + -ing",
    helpingVerbs: ["will", "have", "been"],
    affirmative: ["By June, she will have been working here for ten years.", "I will have been studying all day."],
    negative: ["She won't have been working there long.", "I won't have been waiting much."],
    questions: {
      yesNo: "Will she have been working there long?",
      wh: [
        { question: "How long will you have been learning English by then?", whWord: "How long" },
      ],
    },
    timeExpressions: ["for ten years by June", "by then", "for hours by midnight"],
    tip: "Duration + future point: 'By midnight, I will have been studying for six hours.'",
  },
];

const byId = new Map(tenses.map((t) => [t.id, t]));

export function getTense(id: string): TenseData | undefined {
  return byId.get(id);
}

export function tensesByGroup(group: TenseGroup): TenseData[] {
  return tenses.filter((t) => t.group === group);
}
