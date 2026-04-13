import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
// Files are expected to live in the `audio` bucket with names like
// `cam20-listening-t1-s1.mp3`. NEXT_PUBLIC_SUPABASE_URL is inlined at build time.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// ============================================================
// CAMBRIDGE IELTS 20 – LISTENING TEST 1
// Parts: 1) Restaurant recommendations (note completion)
//        2) Pottery class (MCQ + choose 2)
//        3) Loneliness discussion (choose 2 + MCQ)
//        4) Reclaiming urban rivers (note completion)
// ============================================================
export const cambridge20_listening_t1: IELTSTest = {
  id: "cam20-listening-t1",
  title: "Cambridge IELTS 20 – Listening Test 1",
  bookNumber: 20,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  // One whole-test MP3 (~30 min) containing all 4 parts. The narrator
  // announces part transitions inside the recording — no per-section
  // files, no auto-advance, just one continuous stream.
  audioUrl: audioUrl("cam20-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam20-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Restaurant recommendations

The Junction
●  Location: Greyson Street, near the station
●  Good for people who are especially keen on 1 _______
●  Quite expensive
●  The 2 _______ is a good place for a drink

Paloma
●  Location: In Bow Street next to the cinema
●  3 _______ food, good for sharing
●  Staff are very friendly
●  Need to pay £50 deposit
●  A limited selection of 4 _______ food on the menu

The 5 _______
●  Location: At the top of a 6 _______
●  A famous chef
●  All the 7 _______ are very good
●  Only uses 8 _______ ingredients
●  Set lunch costs £ 9 _______ per person
●  Portions probably of 10 _______ size`,
      questions: [
        { id: "cam20-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Good for people who are especially keen on _______", correctAnswer: "fish", points: 1 },
        { id: "cam20-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. The _______ is a good place for a drink", correctAnswer: "roof", points: 1 },
        { id: "cam20-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. _______ food, good for sharing", correctAnswer: "Spanish", points: 1 },
        { id: "cam20-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. A limited selection of _______ food on the menu", correctAnswer: "vegetarian", points: 1 },
        { id: "cam20-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. Restaurant name: The _______", correctAnswer: "Audley", points: 1 },
        { id: "cam20-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. At the top of a _______", correctAnswer: "hotel", points: 1 },
        { id: "cam20-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. All the _______ are very good", correctAnswer: "reviews", points: 1 },
        { id: "cam20-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. Only uses _______ ingredients", correctAnswer: "local", points: 1 },
        { id: "cam20-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. Set lunch costs £ _______ per person", correctAnswer: "30/thirty", points: 1 },
        { id: "cam20-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Portions probably of _______ size", correctAnswer: "average", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam20-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Choose the correct letter, A, B or C.
Questions 17–18: Choose TWO letters, A–E (things Heather explains about kilns).
Questions 19–20: Choose TWO letters, A–E (points about a potter's tools).`,
      passageText: `A talk about pottery by Heather at Edelman Pottery.

Questions 11–16: Choose the correct letter, A, B or C.
Questions 17–18: Choose TWO letters, A–E. Which TWO things does Heather explain about kilns?
Questions 19–20: Choose TWO letters, A–E. Which TWO points does Heather make about a potter's tools?`,
      questions: [
        {
          id: "cam20-l-t1-s2-q11",
          number: 11,
          groupLabel: `Questions 11–16: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "11. Heather says pottery differs from other art forms because",
          options: [
            { label: "A  it lasts longer in the ground.", value: "A" },
            { label: "B  it is practised by more people.", value: "B" },
            { label: "C  it can be repaired more easily.", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q12",
          number: 12,
          type: "multiple_choice",
          question: "12. Archaeologists sometimes identify the use of ancient pottery from",
          options: [
            { label: "A  the clay it was made with.", value: "A" },
            { label: "B  the marks that are on it.", value: "B" },
            { label: "C  the basic shape of it.", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q13",
          number: 13,
          type: "multiple_choice",
          question: "13. Some people join Heather's pottery class because they want to",
          options: [
            { label: "A  create an item that looks very old.", value: "A" },
            { label: "B  find something that they are good at.", value: "B" },
            { label: "C  make something that will outlive them.", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q14",
          number: 14,
          type: "multiple_choice",
          question: "14. What does Heather value most about being a potter?",
          options: [
            { label: "A  its calming effect", value: "A" },
            { label: "B  its messy nature", value: "B" },
            { label: "C  its physical benefits", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q15",
          number: 15,
          type: "multiple_choice",
          question: "15. Most of the visitors to Edelman Pottery",
          options: [
            { label: "A  bring friends to join courses.", value: "A" },
            { label: "B  have never made a pot before.", value: "B" },
            { label: "C  try to learn techniques too quickly.", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q16",
          number: 16,
          type: "multiple_choice",
          question: "16. Heather reminds her visitors that they should",
          options: [
            { label: "A  put on their aprons.", value: "A" },
            { label: "B  change their clothes.", value: "B" },
            { label: "C  take off their jewellery.", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q17",
          number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhich TWO things does Heather explain about kilns?\n\nA  what their function is\nB  when they were invented\nC  ways of keeping them safe\nD  where to put one in your home\nE  what some people use instead of one\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  what their function is", value: "A" },
            { label: "B  when they were invented", value: "B" },
            { label: "C  ways of keeping them safe", value: "C" },
            { label: "D  where to put one in your home", value: "D" },
            { label: "E  what some people use instead of one", value: "E" },
          ],
          correctAnswer: "A/E",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q18",
          number: 18,
          type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  what their function is", value: "A" },
            { label: "B  when they were invented", value: "B" },
            { label: "C  ways of keeping them safe", value: "C" },
            { label: "D  where to put one in your home", value: "D" },
            { label: "E  what some people use instead of one", value: "E" },
          ],
          correctAnswer: "A/E",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q19",
          number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO points does Heather make about a potter's tools?\n\nA  Some are hard to hold.\nB  Some are worth buying.\nC  Some are essential items.\nD  Some have memorable names.\nE  Some are available for use by participants.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  Some are hard to hold.", value: "A" },
            { label: "B  Some are worth buying.", value: "B" },
            { label: "C  Some are essential items.", value: "C" },
            { label: "D  Some have memorable names.", value: "D" },
            { label: "E  Some are available for use by participants.", value: "E" },
          ],
          correctAnswer: "C/E",
          points: 1,
        },
        {
          id: "cam20-l-t1-s2-q20",
          number: 20,
          type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  Some are hard to hold.", value: "A" },
            { label: "B  Some are worth buying.", value: "B" },
            { label: "C  Some are essential items.", value: "C" },
            { label: "D  Some have memorable names.", value: "D" },
            { label: "E  Some are available for use by participants.", value: "E" },
          ],
          correctAnswer: "C/E",
          points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam20-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Choose TWO letters, A–E (various topics on loneliness).
Questions 27–30: Choose the correct letter, A, B or C.`,
      passageText: `Two students discussing their presentation on loneliness.

Questions 21–22: Which TWO things do the students both believe are responsible for the increase in loneliness?
Questions 23–24: Which TWO health risks associated with loneliness do the students agree are based on solid evidence?
Questions 25–26: Which TWO opinions do both the students express about the evolutionary theory of loneliness?
Questions 27–30: Loneliness and mental health — choose A, B or C.`,
      questions: [
        {
          id: "cam20-l-t1-s3-q21",
          number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO things do the students both believe are responsible for the increase in loneliness?\n\nA  social media\nB  smaller nuclear families\nC  urban design\nD  longer lifespans\nE  a mobile workforce\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  social media", value: "A" },
            { label: "B  smaller nuclear families", value: "B" },
            { label: "C  urban design", value: "C" },
            { label: "D  longer lifespans", value: "D" },
            { label: "E  a mobile workforce", value: "E" },
          ],
          correctAnswer: "C/E",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q22",
          number: 22,
          type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  social media", value: "A" },
            { label: "B  smaller nuclear families", value: "B" },
            { label: "C  urban design", value: "C" },
            { label: "D  longer lifespans", value: "D" },
            { label: "E  a mobile workforce", value: "E" },
          ],
          correctAnswer: "C/E",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q23",
          number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO health risks associated with loneliness do the students agree are based on solid evidence?\n\nA  a weakened immune system\nB  dementia\nC  cancer\nD  obesity\nE  cardiovascular disease\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  a weakened immune system", value: "A" },
            { label: "B  dementia", value: "B" },
            { label: "C  cancer", value: "C" },
            { label: "D  obesity", value: "D" },
            { label: "E  cardiovascular disease", value: "E" },
          ],
          correctAnswer: "A/C",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  a weakened immune system", value: "A" },
            { label: "B  dementia", value: "B" },
            { label: "C  cancer", value: "C" },
            { label: "D  obesity", value: "D" },
            { label: "E  cardiovascular disease", value: "E" },
          ],
          correctAnswer: "A/C",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q25",
          number: 25,
          groupLabel: `Questions 25 and 26: Choose TWO letters, A–E.\n\nWhich TWO opinions do both the students express about the evolutionary theory of loneliness?\n\nA  It has little practical relevance.\nB  It needs further investigation.\nC  It is misleading.\nD  It should be more widely accepted.\nE  It is difficult to understand.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "25. Choose TWO (first answer)",
          options: [
            { label: "A  It has little practical relevance.", value: "A" },
            { label: "B  It needs further investigation.", value: "B" },
            { label: "C  It is misleading.", value: "C" },
            { label: "D  It should be more widely accepted.", value: "D" },
            { label: "E  It is difficult to understand.", value: "E" },
          ],
          correctAnswer: "A/B",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Choose TWO (second answer)",
          options: [
            { label: "A  It has little practical relevance.", value: "A" },
            { label: "B  It needs further investigation.", value: "B" },
            { label: "C  It is misleading.", value: "C" },
            { label: "D  It should be more widely accepted.", value: "D" },
            { label: "E  It is difficult to understand.", value: "E" },
          ],
          correctAnswer: "A/B",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q27",
          number: 27,
          groupLabel: `Questions 27–30: Choose the correct letter, A, B or C.\n\nLoneliness and mental health`,
          type: "multiple_choice",
          question: "27. When comparing loneliness to depression, the students",
          options: [
            { label: "A  doubt that there will ever be a medical cure for loneliness.", value: "A" },
            { label: "B  claim that the link between loneliness and mental health is overstated.", value: "B" },
            { label: "C  express frustration that loneliness is not taken more seriously.", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. Why do the students decide to start their presentation with an example from their own experience?",
          options: [
            { label: "A  to explain how difficult loneliness can be", value: "A" },
            { label: "B  to highlight a situation that most students will recognise", value: "B" },
            { label: "C  to emphasise that feeling lonely is more common for men than women", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. The students agree that talking to strangers is a good strategy for dealing with loneliness because",
          options: [
            { label: "A  it creates a sense of belonging.", value: "A" },
            { label: "B  it builds self-confidence.", value: "B" },
            { label: "C  it makes people feel more positive.", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-l-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. The students find it difficult to understand why solitude is considered to be",
          options: [
            { label: "A  similar to loneliness.", value: "A" },
            { label: "B  necessary for mental health.", value: "B" },
            { label: "C  an enjoyable experience.", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam20-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Reclaiming urban rivers

Historical background
●  Nearly all major cities were built on a river.
●  Rivers were traditionally used by city dwellers for transport, fishing and recreation.
●  Industrial development and rising populations later led to:
   ○  more sewage from houses being discharged into the river
   ○  pollution from 31 _______ on the river bank.
●  In 1957, the River Thames in London was declared biologically 32 _______.

Recent improvements
●  Seals and even a 33 _______ have been seen in the River Thames.
●  Riverside warehouses are converted to restaurants and 34 _______.
●  In Los Angeles, there are plans to:
   ○  build a riverside 35 _______
   ○  display 36 _______ projects.
●  In Paris, 37 _______ are created on the sides of the river every summer.

Transport possibilities
●  Over 2 billion passengers already travel by 38 _______ in cities round the world.
●  Changes in shopping habits mean the number of deliveries that are made is increasing.
●  Instead of road transport, goods could be transported by large freight barges and electric 39 _______ or, in future, by 40 _______.`,
      questions: [
        { id: "cam20-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. pollution from _______ on the river bank", correctAnswer: "factories", points: 1 },
        { id: "cam20-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. In 1957, the River Thames in London was declared biologically _______", correctAnswer: "dead", points: 1 },
        { id: "cam20-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. Seals and even a _______ have been seen in the River Thames", correctAnswer: "whale", points: 1 },
        { id: "cam20-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. Riverside warehouses are converted to restaurants and _______", correctAnswer: "apartments", points: 1 },
        { id: "cam20-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. In LA: build a riverside _______", correctAnswer: "park", points: 1 },
        { id: "cam20-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. In LA: display _______ projects", correctAnswer: "art", points: 1 },
        { id: "cam20-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. In Paris, _______ are created on the sides of the river every summer", correctAnswer: "beaches", points: 1 },
        { id: "cam20-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. Over 2 billion passengers already travel by _______ in cities round the world", correctAnswer: "ferry", points: 1 },
        { id: "cam20-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. goods could be transported by large freight barges and electric _______", correctAnswer: "bikes", points: 1 },
        { id: "cam20-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. or, in future, by _______", correctAnswer: "drone", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 20 – LISTENING TEST 2
// Parts: 1) Caring for elderly at home (note/table completion)
//        2) Volunteer roles (matching + MCQ)
//        3) Human geography discussion (matching + MCQ)
//        4) Developing food trends (note completion)
// ============================================================
export const cambridge20_listening_t2: IELTSTest = {
  id: "cam20-listening-t2",
  title: "Cambridge IELTS 20 – Listening Test 2",
  bookNumber: 20,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam20-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam20-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Caring for elderly people at home

Local councils can arrange practical support to help those caring for elderly people at home.

This can give the carer:
●  time for other responsibilities
●  a 1 _______

Assessment of mother's needs
This may include discussion of:
●  how much 2 _______ the caring involves
●  what types of tasks are involved, e.g.
   ○  help with dressing
   ○  helping her have a 3 _______
   ○  shopping
   ○  helping with meals
   ○  dealing with 4 _______
●  any aspects of caring that are especially difficult, e.g.
   ○  loss of 5 _______
   ○  6 _______ her
   ○  preventing a 7 _______

Types of support that may be offered to carers
●  transport costs, e.g. cost of a 8 _______
●  car-related costs, e.g. fuel and 9 _______
●  help with housework
●  help to reduce 10 _______`,
      questions: [
        { id: "cam20-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. time for other responsibilities; also a _______", correctAnswer: "break", points: 1 },
        { id: "cam20-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. how much _______ the caring involves", correctAnswer: "time", points: 1 },
        { id: "cam20-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. helping her have a _______", correctAnswer: "shower", points: 1 },
        { id: "cam20-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. dealing with _______", correctAnswer: "money", points: 1 },
        { id: "cam20-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. loss of _______", correctAnswer: "memory", points: 1 },
        { id: "cam20-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. _______ her", correctAnswer: "lifting", points: 1 },
        { id: "cam20-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. preventing a _______", correctAnswer: "fall", points: 1 },
        { id: "cam20-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. transport costs, e.g. cost of a _______", correctAnswer: "taxi", points: 1 },
        { id: "cam20-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. car-related costs, e.g. fuel and _______", correctAnswer: "insurance", points: 1 },
        { id: "cam20-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. help to reduce _______", correctAnswer: "stress", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam20-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Match the activity to the volunteer role. Choose SIX answers from the box (A–I).
Questions 17–20: Choose the correct letter, A, B or C.`,
      passageText: `Volunteer roles

Volunteer role options (A–I):
A  providing entertainment
B  providing publicity about a council service
C  contacting local businesses
D  giving advice to visitors
E  collecting feedback on events
F  selling tickets
G  introducing guest speakers at an event
H  encouraging cooperation between local organisations
I  helping people find their seats

Activities (11–16):
11  walking around the town centre
12  helping at concerts
13  getting involved with community groups
14  helping with a magazine
15  participating at lunches for retired people
16  helping with the website`,
      questions: [
        {
          id: "cam20-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–16: What is the role of the volunteers in each of the following activities? Choose SIX answers from the box (A–I) and write the correct letter next to each activity.\n\nA  providing entertainment\nB  providing publicity about a council service\nC  contacting local businesses\nD  giving advice to visitors\nE  collecting feedback on events\nF  selling tickets\nG  introducing guest speakers at an event\nH  encouraging cooperation between local organisations\nI  helping people find their seats`,
          type: "multiple_choice",
          question: "11. walking around the town centre",
          options: [
            { label: "A  providing entertainment", value: "A" },
            { label: "B  providing publicity about a council service", value: "B" },
            { label: "C  contacting local businesses", value: "C" },
            { label: "D  giving advice to visitors", value: "D" },
            { label: "E  collecting feedback on events", value: "E" },
            { label: "F  selling tickets", value: "F" },
            { label: "G  introducing guest speakers at an event", value: "G" },
            { label: "H  encouraging cooperation between local organisations", value: "H" },
            { label: "I  helping people find their seats", value: "I" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q12", number: 12,
          type: "multiple_choice",
          question: "12. helping at concerts",
          options: [
            { label: "A  providing entertainment", value: "A" },
            { label: "B  providing publicity about a council service", value: "B" },
            { label: "C  contacting local businesses", value: "C" },
            { label: "D  giving advice to visitors", value: "D" },
            { label: "E  collecting feedback on events", value: "E" },
            { label: "F  selling tickets", value: "F" },
            { label: "G  introducing guest speakers at an event", value: "G" },
            { label: "H  encouraging cooperation between local organisations", value: "H" },
            { label: "I  helping people find their seats", value: "I" },
          ],
          correctAnswer: "I", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q13", number: 13,
          type: "multiple_choice",
          question: "13. getting involved with community groups",
          options: [
            { label: "A  providing entertainment", value: "A" },
            { label: "B  providing publicity about a council service", value: "B" },
            { label: "C  contacting local businesses", value: "C" },
            { label: "D  giving advice to visitors", value: "D" },
            { label: "E  collecting feedback on events", value: "E" },
            { label: "F  selling tickets", value: "F" },
            { label: "G  introducing guest speakers at an event", value: "G" },
            { label: "H  encouraging cooperation between local organisations", value: "H" },
            { label: "I  helping people find their seats", value: "I" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q14", number: 14,
          type: "multiple_choice",
          question: "14. helping with a magazine",
          options: [
            { label: "A  providing entertainment", value: "A" },
            { label: "B  providing publicity about a council service", value: "B" },
            { label: "C  contacting local businesses", value: "C" },
            { label: "D  giving advice to visitors", value: "D" },
            { label: "E  collecting feedback on events", value: "E" },
            { label: "F  selling tickets", value: "F" },
            { label: "G  introducing guest speakers at an event", value: "G" },
            { label: "H  encouraging cooperation between local organisations", value: "H" },
            { label: "I  helping people find their seats", value: "I" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q15", number: 15,
          type: "multiple_choice",
          question: "15. participating at lunches for retired people",
          options: [
            { label: "A  providing entertainment", value: "A" },
            { label: "B  providing publicity about a council service", value: "B" },
            { label: "C  contacting local businesses", value: "C" },
            { label: "D  giving advice to visitors", value: "D" },
            { label: "E  collecting feedback on events", value: "E" },
            { label: "F  selling tickets", value: "F" },
            { label: "G  introducing guest speakers at an event", value: "G" },
            { label: "H  encouraging cooperation between local organisations", value: "H" },
            { label: "I  helping people find their seats", value: "I" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q16", number: 16,
          type: "multiple_choice",
          question: "16. helping with the website",
          options: [
            { label: "A  providing entertainment", value: "A" },
            { label: "B  providing publicity about a council service", value: "B" },
            { label: "C  contacting local businesses", value: "C" },
            { label: "D  giving advice to visitors", value: "D" },
            { label: "E  collecting feedback on events", value: "E" },
            { label: "F  selling tickets", value: "F" },
            { label: "G  introducing guest speakers at an event", value: "G" },
            { label: "H  encouraging cooperation between local organisations", value: "H" },
            { label: "I  helping people find their seats", value: "I" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q17", number: 17,
          groupLabel: `Questions 17–20: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "17. Which event requires the largest number of volunteers?",
          options: [
            { label: "A  the music festival", value: "A" },
            { label: "B  the science festival", value: "B" },
            { label: "C  the book festival", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q18", number: 18,
          type: "multiple_choice",
          question: "18. What is the most important requirement for volunteers at the festivals?",
          options: [
            { label: "A  interpersonal skills", value: "A" },
            { label: "B  personal interest in the event", value: "B" },
            { label: "C  flexibility", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q19", number: 19,
          type: "multiple_choice",
          question: "19. New volunteers will start working in the week beginning",
          options: [
            { label: "A  2 September.", value: "A" },
            { label: "B  9 September.", value: "B" },
            { label: "C  23 September.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t2-s2-q20", number: 20,
          type: "multiple_choice",
          question: "20. What is the next annual event for volunteers?",
          options: [
            { label: "A  a boat trip", value: "A" },
            { label: "B  a barbecue", value: "B" },
            { label: "C  a party", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam20-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Match each aspect of human geography to Rosie and Colin's opinion. Choose FIVE answers from the box (A–G).
Questions 26–30: Choose the correct letter, A, B or C.`,
      passageText: `Rosie and Colin discussing their human geography project.

Opinions (A–G):
A  The information given about this was too vague.
B  This may not be relevant to their course.
C  This will involve only a small number of statistics.
D  It will be easy to find facts about this.
E  The facts about this may not be reliable.
F  No useful research has been done on this.
G  The information provided about this was interesting.

Aspects of human geography (21–25):
21  Population
22  Health
23  Economies
24  Culture
25  Poverty`,
      questions: [
        {
          id: "cam20-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–25: What is Rosie and Colin's opinion about each of the following aspects of human geography? Choose FIVE answers from the box (A–G) and write the correct letter next to each aspect.\n\nA  The information given about this was too vague.\nB  This may not be relevant to their course.\nC  This will involve only a small number of statistics.\nD  It will be easy to find facts about this.\nE  The facts about this may not be reliable.\nF  No useful research has been done on this.\nG  The information provided about this was interesting.`,
          type: "multiple_choice",
          question: "21. Population",
          options: [
            { label: "A  The information given about this was too vague.", value: "A" },
            { label: "B  This may not be relevant to their course.", value: "B" },
            { label: "C  This will involve only a small number of statistics.", value: "C" },
            { label: "D  It will be easy to find facts about this.", value: "D" },
            { label: "E  The facts about this may not be reliable.", value: "E" },
            { label: "F  No useful research has been done on this.", value: "F" },
            { label: "G  The information provided about this was interesting.", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q22", number: 22,
          type: "multiple_choice",
          question: "22. Health",
          options: [
            { label: "A  The information given about this was too vague.", value: "A" },
            { label: "B  This may not be relevant to their course.", value: "B" },
            { label: "C  This will involve only a small number of statistics.", value: "C" },
            { label: "D  It will be easy to find facts about this.", value: "D" },
            { label: "E  The facts about this may not be reliable.", value: "E" },
            { label: "F  No useful research has been done on this.", value: "F" },
            { label: "G  The information provided about this was interesting.", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q23", number: 23,
          type: "multiple_choice",
          question: "23. Economies",
          options: [
            { label: "A  The information given about this was too vague.", value: "A" },
            { label: "B  This may not be relevant to their course.", value: "B" },
            { label: "C  This will involve only a small number of statistics.", value: "C" },
            { label: "D  It will be easy to find facts about this.", value: "D" },
            { label: "E  The facts about this may not be reliable.", value: "E" },
            { label: "F  No useful research has been done on this.", value: "F" },
            { label: "G  The information provided about this was interesting.", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q24", number: 24,
          type: "multiple_choice",
          question: "24. Culture",
          options: [
            { label: "A  The information given about this was too vague.", value: "A" },
            { label: "B  This may not be relevant to their course.", value: "B" },
            { label: "C  This will involve only a small number of statistics.", value: "C" },
            { label: "D  It will be easy to find facts about this.", value: "D" },
            { label: "E  The facts about this may not be reliable.", value: "E" },
            { label: "F  No useful research has been done on this.", value: "F" },
            { label: "G  The information provided about this was interesting.", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q25", number: 25,
          type: "multiple_choice",
          question: "25. Poverty",
          options: [
            { label: "A  The information given about this was too vague.", value: "A" },
            { label: "B  This may not be relevant to their course.", value: "B" },
            { label: "C  This will involve only a small number of statistics.", value: "C" },
            { label: "D  It will be easy to find facts about this.", value: "D" },
            { label: "E  The facts about this may not be reliable.", value: "E" },
            { label: "F  No useful research has been done on this.", value: "F" },
            { label: "G  The information provided about this was interesting.", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q26", number: 26,
          groupLabel: `Questions 26–30: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "26. Rosie says that in her own city the main problem is",
          options: [
            { label: "A  crime.", value: "A" },
            { label: "B  housing.", value: "B" },
            { label: "C  unemployment.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q27", number: 27,
          type: "multiple_choice",
          question: "27. What recent additions to the outskirts of their cities are both students happy about?",
          options: [
            { label: "A  conference centres", value: "A" },
            { label: "B  sports centres", value: "B" },
            { label: "C  retail centres", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q28", number: 28,
          type: "multiple_choice",
          question: "28. The students agree that developing disused industrial sites may",
          options: [
            { label: "A  have unexpected costs.", value: "A" },
            { label: "B  damage the urban environment.", value: "B" },
            { label: "C  destroy valuable historical buildings.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q29", number: 29,
          type: "multiple_choice",
          question: "29. The students will mention Masdar City as an example of an attempt to achieve",
          options: [
            { label: "A  daily collections for waste recycling.", value: "A" },
            { label: "B  sustainable energy use.", value: "B" },
            { label: "C  free transport for everyone.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t2-s3-q30", number: 30,
          type: "multiple_choice",
          question: "30. When discussing the ecotown of Greenhill Abbots, Colin is uncertain about",
          options: [
            { label: "A  what its objectives were.", value: "A" },
            { label: "B  why there was opposition to it.", value: "B" },
            { label: "C  how much of it has actually been built.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam20-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Developing food trends

●  The growth in interest in food fashions started with 31 _______ of food being shared on social media.
●  The UK food industry is constantly developing products which are new or different.
●  Influencers on social media become 'ambassadors' for a brand.
   ○  Sales of 32 _______ food brands have grown rapidly this way.
●  Supermarkets track demand for ingredients on social media.
   ○  Famous 33 _______ are influential.

Marketing campaigns
●  The avocado:
   ○  34 _______ were invited to visit growers in South Africa.
   ○  Advertising focused on its 35 _______ benefits.
●  Oat milk:
   ○  A Swedish brand's media campaign received publicity by upsetting competitors.
   ○  Promotion in the USA through 36 _______ shops reduced the need for advertising.
   ○  It appealed to consumers who are concerned about the 37 _______
●  Norwegian skrei:
   ○  has helped strengthen the 38 _______ of Norwegian seafood.

Ethical concerns
●  Quinoa:
   ○  Its success led to an increase in its 39 _______
   ○  Overuse of resources resulted in poor quality 40 _______`,
      questions: [
        { id: "cam20-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. started with _______ of food being shared on social media", correctAnswer: "photos/photographs/pictures", points: 1 },
        { id: "cam20-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. Sales of _______ food brands have grown rapidly", correctAnswer: "vegan", points: 1 },
        { id: "cam20-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. Famous _______ are influential", correctAnswer: "chefs/cooks", points: 1 },
        { id: "cam20-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. _______ were invited to visit growers in South Africa", correctAnswer: "journalists/reporters", points: 1 },
        { id: "cam20-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. Advertising focused on its _______ benefits", correctAnswer: "health", points: 1 },
        { id: "cam20-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. Promotion in the USA through _______ shops reduced the need for advertising", correctAnswer: "coffee", points: 1 },
        { id: "cam20-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. It appealed to consumers who are concerned about the _______", correctAnswer: "environment", points: 1 },
        { id: "cam20-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. has helped strengthen the _______ of Norwegian seafood", correctAnswer: "reputation", points: 1 },
        { id: "cam20-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. Its success led to an increase in its _______", correctAnswer: "price/cost", points: 1 },
        { id: "cam20-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. Overuse of resources resulted in poor quality _______", correctAnswer: "soil", points: 1 },
      ],
    },
  ],
};

export const cambridge20ListeningTests: IELTSTest[] = [cambridge20_listening_t1, cambridge20_listening_t2];
