import { cambridge10Tests } from "./cambridge10";
import { cambridge11Tests } from "./cambridge11";
import { cambridge12Tests } from "./cambridge12";

export type IELTSTest = {
  id: string;
  title: string;
  bookNumber: number;
  testNumber: number;
  type: "reading" | "listening";
  level: "academic" | "general";
  durationMinutes: number;
  transferMinutes: number;
  sections: IELTSSection[];
};

export type IELTSSection = {
  id: string;
  sectionNumber: number;
  title: string;
  passageTitle?: string;
  passageText?: string;
  audioUrl?: string;
  audioDurationSeconds?: number;
  instructions: string;
  diagramUrl?: string;
  questions: IELTSQuestion[];
};

export type IELTSQuestion = {
  id: string;
  number: number;
  groupLabel?: string;
  type:
    | "multiple_choice"
    | "fill_blank"
    | "true_false_ng"
    | "matching"
    | "short_answer"
    | "summary_completion"
    | "sentence_completion"
    | "table_completion"
    | "diagram_labelling"
    | "note_completion";
  question: string;
  options?: { label: string; value: string }[];
  correctAnswer: string;
  points: number;
};

// ============================================================
// CAMBRIDGE IELTS 1 – TEST 1
// Academic Reading
// ============================================================
const cambridge1_reading_academic_test1: IELTSTest = {
  id: "cam1-reading-academic-t1",
  title: "Cambridge IELTS 1 – Test 1",
  bookNumber: 1,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam1-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Coral Reefs Under Threat",
      instructions: "Questions 1–13. Read the passage and answer the following questions.",
      passageText: `Coral reefs are among the most productive and diverse ecosystems on Earth. They occupy less than one percent of the ocean floor yet support around 25 percent of all marine life, providing habitat, feeding grounds, and nurseries for thousands of species. Beyond their ecological importance, coral reefs supply food and income for more than half a billion people in tropical coastal regions.

Despite their importance, coral reefs are in serious decline. Scientists estimate that about 50 percent of the world's coral reefs have been lost since the 1950s, and the situation continues to worsen. The primary threats come from climate change, ocean acidification, overfishing, coastal development, and pollution.

Rising ocean temperatures due to climate change cause coral bleaching, a stress response in which corals expel the symbiotic algae (zooxanthellae) living in their tissues. Without the algae, corals lose their main food source and their vivid colours, turning ghostly white. While corals can recover from bleaching if temperatures return to normal quickly, prolonged or repeated bleaching events lead to coral death. Since 1998, mass bleaching events have become increasingly frequent and severe.

Ocean acidification, caused by the absorption of atmospheric carbon dioxide into seawater, is another serious threat. As CO₂ dissolves in water, it forms carbonic acid, lowering the ocean's pH. This makes it harder for corals to build and maintain their calcium carbonate skeletons, weakening the reef structure and slowing growth rates.

Overfishing disrupts the ecological balance of reef systems. Herbivorous fish such as parrotfish and surgeonfish graze on algae, preventing it from overgrowing corals. When these species are removed by fishing, algae blooms can smother reefs. The removal of top predators further destabilises food webs, leading to population explosions of certain species and crashes in others.

Coastal development contributes to reef decline through increased sedimentation and runoff. Construction, deforestation, and agriculture strip away vegetation, allowing soil to wash into the sea during rainfall. This sediment clouds the water, blocking sunlight that corals need for photosynthesis. Fertiliser runoff triggers algal blooms that deplete oxygen and choke reefs.

Despite the gloomy outlook, conservation efforts are showing some promise. Marine protected areas (MPAs), where fishing and other extractive activities are restricted, have helped reefs recover in some regions. Scientists are also experimenting with coral gardening, growing heat-resistant coral strains in nurseries and transplanting them onto degraded reefs. Community-based management programmes are engaging local fishermen in reef protection, combining traditional ecological knowledge with modern science.

However, experts warn that without decisive action to reduce carbon emissions globally, even the best local conservation efforts will be insufficient. The fate of coral reefs ultimately depends on the trajectory of global climate change.`,
      questions: [
        {
          id: "cam1-ra-t1-s1-q1",
          number: 1,
          type: "true_false_ng",
          question: "Coral reefs cover a small proportion of the ocean floor but support a disproportionately large amount of marine life.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "More than half the world's coral reefs have been lost since the mid-twentieth century.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "Corals can always recover from bleaching events regardless of how long temperatures remain elevated.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "Ocean acidification makes it harder for corals to build their skeletons.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "Parrotfish and surgeonfish are the most commercially valuable fish on coral reefs.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q6",
          number: 6,
          type: "multiple_choice",
          question: "According to the passage, what happens when herbivorous fish are removed from a reef?",
          options: [
            { label: "A. Coral bleaching increases", value: "A" },
            { label: "B. Algae grows over the corals", value: "B" },
            { label: "C. Water temperature rises", value: "C" },
            { label: "D. Sedimentation increases", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q7",
          number: 7,
          type: "multiple_choice",
          question: "What is a Marine Protected Area (MPA)?",
          options: [
            { label: "A. A zone where corals are bred artificially", value: "A" },
            { label: "B. A region where fishing and extractive activities are restricted", value: "B" },
            { label: "C. An area of ocean monitored for temperature changes", value: "C" },
            { label: "D. A coastal zone protected from construction", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q8",
          number: 8,
          type: "fill_blank",
          question: "Coral bleaching occurs when corals expel their __________ in response to heat stress.",
          correctAnswer: "zooxanthellae",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q9",
          number: 9,
          type: "fill_blank",
          question: "Carbon dioxide dissolving in seawater produces __________, which lowers the ocean's pH.",
          correctAnswer: "carbonic acid",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q10",
          number: 10,
          type: "fill_blank",
          question: "The technique of growing heat-resistant corals in nurseries and replanting them is known as coral __________.",
          correctAnswer: "gardening",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q11",
          number: 11,
          type: "short_answer",
          question: "What percentage of marine species do coral reefs support? (Write the number only)",
          correctAnswer: "25",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s1-q12",
          number: 12,
          type: "short_answer",
          question: "Name TWO ways in which coastal development harms coral reefs. (Write no more than FOUR WORDS each)",
          correctAnswer: "increased sedimentation; runoff / fertiliser runoff",
          points: 2,
        },
        {
          id: "cam1-ra-t1-s1-q13",
          number: 13,
          type: "multiple_choice",
          question: "What is the writer's main conclusion in the final paragraph?",
          options: [
            { label: "A. Local conservation is enough to save reefs", value: "A" },
            { label: "B. Marine protected areas are the best solution", value: "B" },
            { label: "C. Reducing global carbon emissions is essential for reef survival", value: "C" },
            { label: "D. Scientists have found a way to halt reef decline", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
    {
      id: "cam1-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Psychology of Decision-Making",
      instructions: "Questions 14–26. Read the passage and answer the following questions.",
      passageText: `Every day, people make hundreds of decisions — from trivial choices like what to eat for breakfast to life-changing ones like choosing a career or a life partner. Classical economics assumed that humans are rational agents who systematically evaluate all available information and choose the option that maximises their utility. However, decades of psychological research have revealed that human decision-making is far messier, more emotional, and more susceptible to bias than this rational model suggests.

The field of behavioural economics, pioneered by psychologists Daniel Kahneman and Amos Tversky in the 1970s, has documented numerous cognitive biases that systematically distort human judgement. Kahneman's influential "dual-process theory" distinguishes between two modes of thinking: System 1, which is fast, automatic, and intuitive, and System 2, which is slow, deliberate, and analytical. Most everyday decisions rely on System 1, which although efficient, is prone to errors and biases.

One of the most well-documented biases is the anchoring effect. When people are asked to estimate an unknown quantity, their answers are heavily influenced by an initial reference point (the "anchor"), even when that anchor is clearly arbitrary. In a classic experiment, participants who were first asked whether Mahatma Gandhi died before or after age 9 gave much lower age estimates than those asked whether he died before or after age 140 — even though both anchors were obviously wrong.

Loss aversion is another powerful bias. Research shows that the psychological pain of losing something is approximately twice as powerful as the pleasure of gaining something of equivalent value. This asymmetry leads people to make risk-averse choices in gain situations but risk-seeking choices in loss situations — a pattern that contradicts rational choice theory. Loss aversion explains why investors hold onto failing stocks longer than they should: selling would make the loss "real," whereas holding on preserves the hope of recovery.

The availability heuristic causes people to judge the likelihood of an event based on how easily examples come to mind. Events that are vivid, recent, or emotionally salient are judged as more probable than events that are less memorable, regardless of their actual statistical frequency. This bias helps explain why people overestimate the risk of dramatic but rare events (such as plane crashes or terrorist attacks) while underestimating more common but less dramatic risks (such as car accidents or heart disease).

The confirmation bias leads people to seek, interpret, and remember information in ways that confirm their pre-existing beliefs, while ignoring contradictory evidence. This bias is especially pronounced in politically and emotionally charged contexts. Studies have shown that people reading the same news article may draw opposite conclusions depending on their prior beliefs.

Understanding these biases has practical implications. Governments and organisations can use "nudge theory" — subtle changes in the way choices are presented — to guide people towards better decisions without restricting their freedom of choice. For example, making organ donation the default option (so that people must opt out rather than opt in) dramatically increases donation rates. Similarly, automatically enrolling employees in pension schemes has significantly boosted retirement savings rates across many countries.`,
      questions: [
        {
          id: "cam1-ra-t1-s2-q14",
          number: 14,
          type: "multiple_choice",
          question: "What did classical economics assume about human decision-making?",
          options: [
            { label: "A. People make decisions based on emotions", value: "A" },
            { label: "B. People are rational and maximise utility", value: "B" },
            { label: "C. People rely on intuition for most choices", value: "C" },
            { label: "D. People avoid risk in most situations", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "Match the bias (A–D) with its description.\n\nA. Anchoring effect\nB. Loss aversion\nC. Availability heuristic\nD. Confirmation bias\n\nQuestion: Judging the probability of an event based on how easily it comes to mind",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "Seeking information that supports pre-existing beliefs",
          options: [
            { label: "A. Anchoring effect", value: "A" },
            { label: "B. Loss aversion", value: "B" },
            { label: "C. Availability heuristic", value: "C" },
            { label: "D. Confirmation bias", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "Being heavily influenced by an initial reference point when making estimates",
          options: [
            { label: "A. Anchoring effect", value: "A" },
            { label: "B. Loss aversion", value: "B" },
            { label: "C. Availability heuristic", value: "C" },
            { label: "D. Confirmation bias", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q18",
          number: 18,
          type: "true_false_ng",
          question: "Daniel Kahneman and Amos Tversky developed behavioural economics in the 1980s.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q19",
          number: 19,
          type: "true_false_ng",
          question: "System 2 thinking is slower and more deliberate than System 1.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q20",
          number: 20,
          type: "true_false_ng",
          question: "Kahneman won the Nobel Prize in Economics for his work on cognitive biases.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q21",
          number: 21,
          type: "fill_blank",
          question: "According to Kahneman's theory, __________ thinking is fast and automatic.",
          correctAnswer: "System 1",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q22",
          number: 22,
          type: "fill_blank",
          question: "The psychological pain of losing is approximately __________ times as powerful as the pleasure of an equivalent gain.",
          correctAnswer: "twice",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q23",
          number: 23,
          type: "fill_blank",
          question: "Using small environmental changes to guide behaviour is known as __________ theory.",
          correctAnswer: "nudge",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q24",
          number: 24,
          type: "short_answer",
          question: "Give ONE example from the passage of how nudge theory has been applied. (No more than FIVE words)",
          correctAnswer: "organ donation default option / automatic pension enrolment",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q25",
          number: 25,
          type: "multiple_choice",
          question: "Why do investors hold onto failing stocks, according to the passage?",
          options: [
            { label: "A. They overestimate future gains", value: "A" },
            { label: "B. They are influenced by anchoring", value: "B" },
            { label: "C. Selling would make the loss feel real", value: "C" },
            { label: "D. They believe the stock will recover quickly", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "What is the main purpose of the passage?",
          options: [
            { label: "A. To criticise classical economic theory", value: "A" },
            { label: "B. To explain cognitive biases and their implications", value: "B" },
            { label: "C. To promote the use of nudge theory in government", value: "C" },
            { label: "D. To describe the career of Daniel Kahneman", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
      ],
    },
    {
      id: "cam1-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The History and Science of Sleep",
      instructions: "Questions 27–40. Read the passage and answer the following questions.",
      passageText: `Sleep is one of the most fundamental and universal biological processes, yet for centuries it was poorly understood. Ancient civilisations had rich mythologies surrounding sleep — the Greeks personified it as Hypnos, the god of sleep, twin brother of Thanatos, the god of death — but scientific understanding of why we sleep, and what happens when we do, has only emerged in the past century.

The modern scientific study of sleep began in earnest in the 1920s, when the German psychiatrist Hans Berger invented the electroencephalogram (EEG), a device that measures electrical activity in the brain. EEG recordings revealed that the sleeping brain is far from inactive; it cycles through distinct stages of activity throughout the night. In the 1950s, researchers identified rapid eye movement (REM) sleep, a stage associated with vivid dreaming and intense brain activity. It became clear that sleep is a complex, active process rather than a passive state of unconsciousness.

Modern sleep science recognises two main types of sleep: non-REM (NREM) sleep and REM sleep. NREM sleep is further divided into three stages. Stage 1 is a light transitional sleep from which people can be easily awakened. Stage 2 is characterised by sleep spindles — bursts of oscillatory brain activity — and involves the consolidation of memories and motor skills. Stage 3, also known as slow-wave sleep or deep sleep, is the most restorative phase, associated with physical repair, immune function, and the clearance of metabolic waste from the brain. REM sleep, which becomes longer and more frequent in the latter half of the night, is critical for emotional regulation and memory integration.

Sleep is regulated by two interacting systems: the circadian rhythm and sleep pressure. The circadian rhythm is an internal biological clock, governed primarily by light exposure, that synchronises physiological processes (including sleep and wakefulness) with the 24-hour day. The suprachiasmatic nucleus (SCN), a small region of the hypothalamus, acts as the master clock, receiving light signals from the retina and coordinating the release of melatonin — a hormone that promotes sleepiness — from the pineal gland. Sleep pressure, or homeostatic sleep drive, is the accumulating need for sleep the longer a person remains awake, driven by the build-up of adenosine in the brain. Caffeine works by blocking adenosine receptors, temporarily suppressing the feeling of sleepiness.

The consequences of sleep deprivation are wide-ranging and serious. Even one night of inadequate sleep impairs cognitive performance, reaction time, and emotional regulation. Chronic sleep deprivation is associated with an increased risk of obesity, type 2 diabetes, cardiovascular disease, and psychiatric disorders including depression and anxiety. Research by Matthew Walker and others has shown that the brain's ability to consolidate memories, make accurate predictions, and regulate appetite all decline significantly with insufficient sleep.

Sleep disorders affect a significant proportion of the population. Insomnia — difficulty falling or staying asleep — is the most common, affecting roughly 10–30% of adults. Obstructive sleep apnoea, in which the upper airway collapses during sleep causing repeated awakenings, affects approximately 10% of adults and is strongly associated with cardiovascular disease. Narcolepsy, a neurological disorder characterised by sudden, uncontrollable episodes of sleep, affects around 1 in 2,000 people.

Despite growing awareness of sleep's importance, modern societies have adopted lifestyles that systematically undermine sleep quality. Artificial light — especially the blue light emitted by screens — delays the circadian clock by suppressing melatonin secretion. Long working hours, shift work, social obligations, and the 24-hour availability of entertainment compete with sleep. Public health experts increasingly regard sleep deprivation as a silent epidemic with profound consequences for individual and societal wellbeing.`,
      questions: [
        {
          id: "cam1-ra-t1-s3-q27",
          number: 27,
          type: "multiple_choice",
          question: "Who invented the electroencephalogram (EEG)?",
          options: [
            { label: "A. Matthew Walker", value: "A" },
            { label: "B. Hans Berger", value: "B" },
            { label: "C. Amos Tversky", value: "C" },
            { label: "D. Hypnos", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "In which decade was REM sleep first identified?",
          options: [
            { label: "A. 1920s", value: "A" },
            { label: "B. 1940s", value: "B" },
            { label: "C. 1950s", value: "C" },
            { label: "D. 1960s", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q29",
          number: 29,
          type: "matching",
          question: "Match the sleep stage (A–D) with its characteristic.\n\nA. Stage 1 NREM\nB. Stage 2 NREM\nC. Stage 3 NREM (deep sleep)\nD. REM sleep\n\nQuestion: Physical repair and clearance of metabolic waste",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q30",
          number: 30,
          type: "matching",
          question: "Sleep spindles and memory consolidation",
          options: [
            { label: "A. Stage 1 NREM", value: "A" },
            { label: "B. Stage 2 NREM", value: "B" },
            { label: "C. Stage 3 NREM (deep sleep)", value: "C" },
            { label: "D. REM sleep", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q31",
          number: 31,
          type: "matching",
          question: "Emotional regulation and memory integration",
          options: [
            { label: "A. Stage 1 NREM", value: "A" },
            { label: "B. Stage 2 NREM", value: "B" },
            { label: "C. Stage 3 NREM (deep sleep)", value: "C" },
            { label: "D. REM sleep", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q32",
          number: 32,
          type: "fill_blank",
          question: "The master biological clock is located in a brain region called the __________.",
          correctAnswer: "suprachiasmatic nucleus",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q33",
          number: 33,
          type: "fill_blank",
          question: "The hormone __________ is released by the pineal gland to promote sleepiness.",
          correctAnswer: "melatonin",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q34",
          number: 34,
          type: "fill_blank",
          question: "Caffeine prevents sleepiness by blocking __________ receptors in the brain.",
          correctAnswer: "adenosine",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "Insomnia is the most common sleep disorder.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "Narcolepsy is more common than obstructive sleep apnoea.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "Blue light from screens reduces melatonin secretion.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q38",
          number: 38,
          type: "multiple_choice",
          question: "What does the passage say about the consequences of sleep deprivation?",
          options: [
            { label: "A. Effects are only seen after several nights of poor sleep", value: "A" },
            { label: "B. One night of poor sleep impairs cognition and emotional regulation", value: "B" },
            { label: "C. Sleep deprivation mainly affects physical health", value: "C" },
            { label: "D. The effects are reversible with caffeine", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-ra-t1-s3-q39",
          number: 39,
          type: "short_answer",
          question: "Name TWO chronic health conditions associated with long-term sleep deprivation. (Write no more than THREE WORDS each)",
          correctAnswer: "obesity; type 2 diabetes / cardiovascular disease / depression / anxiety",
          points: 2,
        },
        {
          id: "cam1-ra-t1-s3-q40",
          number: 40,
          type: "multiple_choice",
          question: "What is the writer's overall message in the final paragraph?",
          options: [
            { label: "A. Modern technology has solved sleep problems", value: "A" },
            { label: "B. Society is aware of sleep's importance and acts accordingly", value: "B" },
            { label: "C. Modern lifestyles undermine sleep with serious public health consequences", value: "C" },
            { label: "D. Shift work is the main cause of sleep deprivation", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 1 – TEST 1
// General Reading
// ============================================================
const cambridge1_reading_general_test1: IELTSTest = {
  id: "cam1-reading-general-t1",
  title: "Cambridge IELTS 1 – Test 1",
  bookNumber: 1,
  testNumber: 1,
  type: "reading",
  level: "general",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam1-rg-t1-s1",
      sectionNumber: 1,
      title: "Section 1",
      passageTitle: "Local Community Notices",
      instructions: "Questions 1–14. Read the notices below and answer the questions.",
      passageText: `**NOTICE A – Elmwood Community Library**
The library will be closed for refurbishment from 3–17 March. During this period, borrowers can return books to the drop box at the main entrance. All overdue fines will be waived for items returned during closure. The new digital catalogue will be available online from 10 March at www.elmwoodlibrary.org. Children's storytime sessions will resume on 20 March in the newly renovated children's wing.

**NOTICE B – Riverside Leisure Centre**
We are pleased to announce new swimming timetable changes effective 1 April. Adult lane swimming: Monday–Friday 06:00–08:00 and 19:00–21:00. Family swim: Saturdays 10:00–14:00. Over-60s aqua aerobics: Tuesdays and Thursdays 10:30–11:30. All sessions must be booked in advance via our app or at reception. Goggles and swim caps are available for hire at £1 each. Season tickets save up to 30% on pay-as-you-go rates.

**NOTICE C – Elmwood Adult Education Centre**
Enrolment is now open for spring term courses beginning 8 April. New courses include: Introduction to Watercolour Painting (Mondays, 18:00–20:00), Conversational Spanish for Beginners (Wednesdays, 19:00–21:00), and Home Baking (Saturdays, 10:00–13:00). All courses run for eight weeks. Early bird discount of 15% applies to bookings made before 15 March. Concessions available for students, pensioners, and job-seekers. For a full prospectus, visit the centre or call 01234 567890.

**NOTICE D – Elmwood Farmers' Market**
Every Sunday, 09:00–14:00 in the Town Square. Over 40 stalls selling locally grown produce, artisan bread, homemade preserves, and handcrafted goods. Free parking in the adjacent multi-storey car park for market visitors (show your parking ticket at the information stall for validation). Dogs welcome on leads. Hot food available from the street food zone. This week only: special guest cheesemaker from award-winning Hartley Farm — free tastings 10:00–12:00.

**NOTICE E – Elmwood Volunteering Network**
Volunteers needed for the annual Spring Clean on 29 March, 09:00–13:00. Meet at the bandstand in Elmwood Park. Bring your own gloves if possible — a limited supply will be available. Refreshments provided. Children aged 10+ are welcome with a parent or guardian. All volunteers will receive a certificate of participation. To register, email volunteer@elmwood.gov.uk or sign up at any local library or leisure centre.`,
      questions: [
        {
          id: "cam1-rg-t1-s1-q1",
          number: 1,
          type: "multiple_choice",
          question: "When will the library reopen after refurbishment?",
          options: [
            { label: "A. 3 March", value: "A" },
            { label: "B. 10 March", value: "B" },
            { label: "C. 17 March", value: "C" },
            { label: "D. 20 March", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "Overdue fines will still be charged for books returned during the library closure.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "Swimmers at the leisure centre must book their sessions in advance.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q4",
          number: 4,
          type: "multiple_choice",
          question: "When are over-60s aqua aerobics classes held?",
          options: [
            { label: "A. Mondays and Wednesdays", value: "A" },
            { label: "B. Tuesdays and Thursdays", value: "B" },
            { label: "C. Saturdays only", value: "C" },
            { label: "D. Every weekday morning", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q5",
          number: 5,
          type: "fill_blank",
          question: "Adult education spring term courses begin on __________.",
          correctAnswer: "8 April",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q6",
          number: 6,
          type: "fill_blank",
          question: "Bookings made before 15 March receive a __________ % early bird discount.",
          correctAnswer: "15",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "The farmers' market is held every Saturday.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "Dogs are not permitted at the farmers' market.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q9",
          number: 9,
          type: "fill_blank",
          question: "At the farmers' market, parking is free if you show your __________ at the information stall.",
          correctAnswer: "parking ticket",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q10",
          number: 10,
          type: "multiple_choice",
          question: "When is the Spring Clean volunteering event?",
          options: [
            { label: "A. 15 March", value: "A" },
            { label: "B. 20 March", value: "B" },
            { label: "C. 29 March", value: "C" },
            { label: "D. 8 April", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "All volunteers for the Spring Clean will receive a certificate of participation.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q12",
          number: 12,
          type: "fill_blank",
          question: "Children aged __________ and above may participate in the Spring Clean if accompanied by an adult.",
          correctAnswer: "10",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q13",
          number: 13,
          type: "multiple_choice",
          question: "Which notice would be most useful for someone wanting to learn a new language?",
          options: [
            { label: "A. Notice A", value: "A" },
            { label: "B. Notice B", value: "B" },
            { label: "C. Notice C", value: "C" },
            { label: "D. Notice D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-rg-t1-s1-q14",
          number: 14,
          type: "multiple_choice",
          question: "A pensioner wanting to enrol in a course at the Adult Education Centre would qualify for:",
          options: [
            { label: "A. A season ticket", value: "A" },
            { label: "B. A concession", value: "B" },
            { label: "C. A free tasting", value: "C" },
            { label: "D. A certificate", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 1 – TEST 1
// Listening (Academic & General share same listening)
// ============================================================
const cambridge1_listening_test1: IELTSTest = {
  id: "cam1-listening-t1",
  title: "Cambridge IELTS 1 – Test 1",
  bookNumber: 1,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  sections: [
    {
      id: "cam1-l-t1-s1",
      sectionNumber: 1,
      title: "Section 1",
      audioUrl: "/audio/cam1-listening-t1-s1.mp3",
      audioDurationSeconds: 300,
      instructions: "Questions 1–10. Listen to the conversation and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      passageText: `**NOTES: Sports Club Membership Enquiry**

Name of enquirer: Carol __1__
Contact telephone: __2__
Membership type requested: __3__ membership
Monthly fee: £__4__
Start date preferred: __5__
Activities interested in: swimming and __6__
Locker room access included: __7__ (yes/no)
Car parking: available in __8__ car park
Coach name: __9__
Induction session booked for: __10__ at 10 a.m.`,
      questions: [
        {
          id: "cam1-l-t1-s1-q1",
          number: 1,
          type: "fill_blank",
          question: "Carol's surname",
          correctAnswer: "Henderson",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q2",
          number: 2,
          type: "fill_blank",
          question: "Contact telephone number",
          correctAnswer: "07946 312485",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q3",
          number: 3,
          type: "fill_blank",
          question: "Membership type",
          correctAnswer: "annual",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q4",
          number: 4,
          type: "fill_blank",
          question: "Monthly fee (£)",
          correctAnswer: "42",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q5",
          number: 5,
          type: "fill_blank",
          question: "Preferred start date",
          correctAnswer: "1st March",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q6",
          number: 6,
          type: "fill_blank",
          question: "Second activity of interest",
          correctAnswer: "tennis",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q7",
          number: 7,
          type: "fill_blank",
          question: "Locker room access included?",
          correctAnswer: "yes",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q8",
          number: 8,
          type: "fill_blank",
          question: "Car parking location",
          correctAnswer: "north",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q9",
          number: 9,
          type: "fill_blank",
          question: "Coach name",
          correctAnswer: "Mike Patterson",
          points: 1,
        },
        {
          id: "cam1-l-t1-s1-q10",
          number: 10,
          type: "fill_blank",
          question: "Induction session date",
          correctAnswer: "Saturday",
          points: 1,
        },
      ],
    },
    {
      id: "cam1-l-t1-s2",
      sectionNumber: 2,
      title: "Section 2",
      audioUrl: "/audio/cam1-listening-t1-s2.mp3",
      audioDurationSeconds: 300,
      instructions: "Questions 11–20. Listen to the talk about a local nature reserve and answer the questions.",
      passageText: `**Greenfield Nature Reserve – Visitor Information**

Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.

Opening hours: __11__ a.m. to 5 p.m. daily
Nearest bus stop: __12__ Road
Entrance fee: £__13__ for adults
Children under __14__ free
Special feature: largest __15__ in the county
New trail opened: __16__ Trail (3.5 km)
Bird hide location: near the __17__ pond
Guided walks: every __18__ morning at 9:30
Café: serves hot food until __19__ p.m.
Volunteer days: first __20__ of every month`,
      questions: [
        {
          id: "cam1-l-t1-s2-q11",
          number: 11,
          type: "fill_blank",
          question: "Opening time (a.m.)",
          correctAnswer: "8",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q12",
          number: 12,
          type: "fill_blank",
          question: "Nearest bus stop road name",
          correctAnswer: "Station",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q13",
          number: 13,
          type: "fill_blank",
          question: "Adult entrance fee (£)",
          correctAnswer: "4.50",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q14",
          number: 14,
          type: "fill_blank",
          question: "Age below which children are free",
          correctAnswer: "12",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q15",
          number: 15,
          type: "fill_blank",
          question: "Special feature (largest in county)",
          correctAnswer: "reed bed",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q16",
          number: 16,
          type: "fill_blank",
          question: "Name of new trail",
          correctAnswer: "Woodland",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q17",
          number: 17,
          type: "fill_blank",
          question: "Location of bird hide",
          correctAnswer: "eastern",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q18",
          number: 18,
          type: "fill_blank",
          question: "Day of guided walks",
          correctAnswer: "Sunday",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q19",
          number: 19,
          type: "fill_blank",
          question: "Hot food served until (p.m.)",
          correctAnswer: "3",
          points: 1,
        },
        {
          id: "cam1-l-t1-s2-q20",
          number: 20,
          type: "fill_blank",
          question: "Volunteer days frequency",
          correctAnswer: "Saturday",
          points: 1,
        },
      ],
    },
    {
      id: "cam1-l-t1-s3",
      sectionNumber: 3,
      title: "Section 3",
      audioUrl: "/audio/cam1-listening-t1-s3.mp3",
      audioDurationSeconds: 360,
      instructions: "Questions 21–30. Listen to two students discussing their research project.",
      passageText: `Choose the correct letter A, B or C for questions 21–25.\nComplete the sentences for questions 26–30.`,
      questions: [
        {
          id: "cam1-l-t1-s3-q21",
          number: 21,
          type: "multiple_choice",
          question: "What is the topic of the students' research project?",
          options: [
            { label: "A. The effect of social media on study habits", value: "A" },
            { label: "B. Student attitudes to online learning", value: "B" },
            { label: "C. Library usage patterns among undergraduates", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q22",
          number: 22,
          type: "multiple_choice",
          question: "How many students did they survey?",
          options: [
            { label: "A. 50", value: "A" },
            { label: "B. 75", value: "B" },
            { label: "C. 100", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q23",
          number: 23,
          type: "multiple_choice",
          question: "What was the main finding of the survey?",
          options: [
            { label: "A. Most students prefer face-to-face learning", value: "A" },
            { label: "B. Students value flexibility in online learning", value: "B" },
            { label: "C. Internet connection was the biggest problem", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q24",
          number: 24,
          type: "multiple_choice",
          question: "What does the male student suggest adding to the report?",
          options: [
            { label: "A. More graphs", value: "A" },
            { label: "B. Interview transcripts", value: "B" },
            { label: "C. A literature review section", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q25",
          number: 25,
          type: "multiple_choice",
          question: "When is the final report due?",
          options: [
            { label: "A. End of term", value: "A" },
            { label: "B. Two weeks from now", value: "B" },
            { label: "C. Next Friday", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q26",
          number: 26,
          type: "fill_blank",
          question: "The students plan to use __________ to present their data visually.",
          correctAnswer: "charts",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q27",
          number: 27,
          type: "fill_blank",
          question: "The female student will write the __________ section.",
          correctAnswer: "introduction",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q28",
          number: 28,
          type: "fill_blank",
          question: "They agree to meet in the __________ on Thursday.",
          correctAnswer: "library",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q29",
          number: 29,
          type: "fill_blank",
          question: "Their supervisor's name is Dr __________.",
          correctAnswer: "Reynolds",
          points: 1,
        },
        {
          id: "cam1-l-t1-s3-q30",
          number: 30,
          type: "fill_blank",
          question: "The report must be submitted in __________ format.",
          correctAnswer: "PDF",
          points: 1,
        },
      ],
    },
    {
      id: "cam1-l-t1-s4",
      sectionNumber: 4,
      title: "Section 4",
      audioUrl: "/audio/cam1-listening-t1-s4.mp3",
      audioDurationSeconds: 360,
      instructions: "Questions 31–40. Listen to a lecture on urban green spaces.",
      passageText: `Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.`,
      questions: [
        {
          id: "cam1-l-t1-s4-q31",
          number: 31,
          type: "fill_blank",
          question: "Urban green spaces reduce city temperatures by up to __________ degrees Celsius.",
          correctAnswer: "5",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q32",
          number: 32,
          type: "fill_blank",
          question: "The process of water evaporating from plants is called __________.",
          correctAnswer: "evapotranspiration",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q33",
          number: 33,
          type: "fill_blank",
          question: "Studies show green spaces reduce __________ among urban residents.",
          correctAnswer: "stress",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q34",
          number: 34,
          type: "fill_blank",
          question: "The lecturer recommends a minimum of __________ square metres of green space per resident.",
          correctAnswer: "9",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q35",
          number: 35,
          type: "fill_blank",
          question: "Green roofs can reduce a building's energy use for __________ by 25%.",
          correctAnswer: "cooling",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q36",
          number: 36,
          type: "fill_blank",
          question: "The city of __________ is cited as a leading example of urban greening.",
          correctAnswer: "Singapore",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q37",
          number: 37,
          type: "fill_blank",
          question: "Community gardens improve social __________ in neighbourhoods.",
          correctAnswer: "cohesion",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q38",
          number: 38,
          type: "fill_blank",
          question: "Urban trees absorb __________ and other pollutants from the air.",
          correctAnswer: "carbon dioxide",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q39",
          number: 39,
          type: "fill_blank",
          question: "Green infrastructure helps manage __________ by reducing surface runoff.",
          correctAnswer: "flooding",
          points: 1,
        },
        {
          id: "cam1-l-t1-s4-q40",
          number: 40,
          type: "fill_blank",
          question: "The lecturer concludes that urban greening requires investment in both __________ and policy.",
          correctAnswer: "planning",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// All tests index
// ============================================================
export const allTests: IELTSTest[] = [
  cambridge1_listening_test1,
  ...cambridge10Tests,
  ...cambridge11Tests,
  ...cambridge12Tests,
  // More tests can be added here
];

export function getTestById(id: string): IELTSTest | undefined {
  return allTests.find((t) => t.id === id);
}

export function getTestsByType(type: "reading" | "listening", level: "academic" | "general"): IELTSTest[] {
  if (type === "listening") {
    return allTests.filter((t) => t.type === "listening");
  }
  return allTests.filter((t) => t.type === type && t.level === level);
}

export function getTotalQuestions(test: IELTSTest): number {
  return test.sections.reduce((acc, s) => acc + s.questions.length, 0);
}
