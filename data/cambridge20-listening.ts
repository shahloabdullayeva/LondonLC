import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
// Files are expected to live in the `audio` bucket with names like
// `cam20-listening-t1-s1.mp3`. NEXT_PUBLIC_SUPABASE_URL is inlined at build time.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for an image (diagram / map) that
// lives in the `images` bucket — e.g. `cam20test3map.png`.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

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
  transferMinutes: 2,
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
  transferMinutes: 2,
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

// ============================================================
// CAMBRIDGE IELTS 20 – LISTENING TEST 3
// Parts: 1) Furniture rental companies (table completion)
//        2) Archaeology community project (MCQ + map labelling)
//        3) Theatre programmes (MCQ + matching)
//        4) Inclusive design (note completion)
// ============================================================
export const cambridge20_listening_t3: IELTSTest = {
  id: "cam20-listening-t3",
  title: "Cambridge IELTS 20 – Listening Test 3",
  bookNumber: 20,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam20-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam20-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Furniture Rental Companies

Peak Rentals
●  Prices range from $105 to $ 1 _______ per room per month.
●  The furniture is very 2 _______
●  Delivers in 1–2 days
●  Special offer: free 3 _______ with every living room set

4 _______ and Oliver
●  Mid-range prices
●  12% monthly free for 5 _______
●  Also offers a cleaning service

Larch Furniture
●  Offers cheapest prices for renting furniture and 6 _______ items
●  Must have own 7 _______
●  Minimum contract length: six months

8 _______ Rentals
●  See the 9 _______ for the most up-to-date prices
●  10 _______ are allowed within 7 days of delivery`,
      questions: [
        { id: "cam20-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. Prices range from $105 to $ _______ per room per month", correctAnswer: "239/two hundred thirty-nine/two hundred and thirty-nine", points: 1 },
        { id: "cam20-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. The furniture is very _______", correctAnswer: "modern", points: 1 },
        { id: "cam20-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. free _______ with every living room set", correctAnswer: "lamp", points: 1 },
        { id: "cam20-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. _______ and Oliver (company name)", correctAnswer: "Aaron", points: 1 },
        { id: "cam20-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. 12% monthly free for _______", correctAnswer: "damage", points: 1 },
        { id: "cam20-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. cheapest prices for renting furniture and _______ items", correctAnswer: "electronic", points: 1 },
        { id: "cam20-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. Must have own _______", correctAnswer: "insurance", points: 1 },
        { id: "cam20-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. _______ Rentals (company name)", correctAnswer: "space", points: 1 },
        { id: "cam20-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. See the _______ for the most up-to-date prices", correctAnswer: "app", points: 1 },
        { id: "cam20-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. _______ are allowed within 7 days of delivery", correctAnswer: "exchanges", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam20-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      diagramUrl: imageUrl("cam20test3map.png"),
      instructions: `Questions 11–16: Choose the correct letter, A, B or C.
Questions 17–20: Label the map. Choose the correct letter, A–G, next to each item.`,
      passageTitle: "Bidcaster Archaeological Dig",
      questions: [
        {
          id: "cam20-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11–16: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "11. Who was responsible for starting the community project?",
          options: [
            { label: "A  the castle owners", value: "A" },
            { label: "B  a national charity", value: "B" },
            { label: "C  the local council", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q12", number: 12,
          type: "multiple_choice",
          question: "12. How was the gold coin found?",
          options: [
            { label: "A  Heavy rain had removed some of the soil.", value: "A" },
            { label: "B  The ground was dug up by wild rabbits.", value: "B" },
            { label: "C  A person with a metal detector searched the area.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q13", number: 13,
          type: "multiple_choice",
          question: "13. What led the archaeologists to believe there was an ancient village on this site?",
          options: [
            { label: "A  the lucky discovery of old records", value: "A" },
            { label: "B  the bases of several structures visible in the grass", value: "B" },
            { label: "C  the unusual stones found near the castle", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q14", number: 14,
          type: "multiple_choice",
          question: "14. What are the team still hoping to find?",
          options: [
            { label: "A  everyday pottery", value: "A" },
            { label: "B  animal bones", value: "B" },
            { label: "C  pieces of jewellery", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q15", number: 15,
          type: "multiple_choice",
          question: "15. What was found on the other side of the river to the castle?",
          options: [
            { label: "A  the remains of a large palace", value: "A" },
            { label: "B  the outline of fields", value: "B" },
            { label: "C  a number of small huts", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q16", number: 16,
          type: "multiple_choice",
          question: "16. What do the team plan to do after work ends this summer?",
          options: [
            { label: "A  prepare a display for a museum", value: "A" },
            { label: "B  take part in a television programme", value: "B" },
            { label: "C  start to organise school visits", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q17", number: 17,
          groupLabel: `Questions 17–20: Label the map below. Choose the correct letter, A–G, next to each item.\n\nBidcaster Archaeological Dig — pick the map location (A–G) for each feature.`,
          type: "multiple_choice",
          question: "17. bridge foundations",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q18", number: 18,
          type: "multiple_choice",
          question: "18. rubbish pit",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q19", number: 19,
          type: "multiple_choice",
          question: "19. meeting hall",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam20-l-t3-s2-q20", number: 20,
          type: "multiple_choice",
          question: "20. fish pond",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam20-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Choose the correct letter, A, B or C.
Questions 27–30: Match each show to a comment about its programme. Choose FOUR answers from the box (A–F).`,
      passageText: `Finn and Maya discuss their project on theatre programmes.

Comments about programmes (for Q27–30):
A  Its origin is somewhat controversial.
B  It is historically significant for a country.
C  It was effective at attracting audiences.
D  It is included in a recent project.
E  It contains insights into the show.
F  It resembles an artwork.`,
      questions: [
        {
          id: "cam20-l-t3-s3-q21", number: 21,
          groupLabel: `Questions 21–26: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "21. Finn was pleased to discover that their topic",
          options: [
            { label: "A  was not familiar to their module leader.", value: "A" },
            { label: "B  had not been chosen by other students.", value: "B" },
            { label: "C  did not prove to be difficult to research.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q22", number: 22,
          type: "multiple_choice",
          question: "22. Maya says a mistaken belief about theatre programmes is that",
          options: [
            { label: "A  theatres pay companies to produce them.", value: "A" },
            { label: "B  few theatre-goers buy them nowadays.", value: "B" },
            { label: "C  they contain far more adverts than previously.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q23", number: 23,
          type: "multiple_choice",
          question: "23. Finn was surprised that, in early British theatre, programmes",
          options: [
            { label: "A  were difficult for audiences to obtain.", value: "A" },
            { label: "B  were given out free of charge.", value: "B" },
            { label: "C  were seen as a kind of contract.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q24", number: 24,
          type: "multiple_choice",
          question: "24. Maya feels their project should include an explanation of why companies of actors",
          options: [
            { label: "A  promoted their own plays.", value: "A" },
            { label: "B  performed plays outdoors.", value: "B" },
            { label: "C  had to tour with their plays.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q25", number: 25,
          type: "multiple_choice",
          question: "25. Finn and Maya both think that, compared to nineteenth-century programmes, those from the eighteenth century",
          options: [
            { label: "A  were more original.", value: "A" },
            { label: "B  were more colourful.", value: "B" },
            { label: "C  were more informative.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q26", number: 26,
          type: "multiple_choice",
          question: "26. Maya doesn't fully understand why, in the twentieth century,",
          options: [
            { label: "A  very few theatre programmes were printed in the USA.", value: "A" },
            { label: "B  British theatre programmes failed to develop for so long.", value: "B" },
            { label: "C  theatre programmes in Britain copied fashions from the USA.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q27", number: 27,
          groupLabel: `Questions 27–30: What comment is made about the programme for each of the following shows? Choose FOUR answers from the box (A–F) and write the correct letter next to each show.\n\nA  Its origin is somewhat controversial.\nB  It is historically significant for a country.\nC  It was effective at attracting audiences.\nD  It is included in a recent project.\nE  It contains insights into the show.\nF  It resembles an artwork.`,
          type: "multiple_choice",
          question: "27. Ruy Blas",
          options: [
            { label: "A  Its origin is somewhat controversial.", value: "A" },
            { label: "B  It is historically significant for a country.", value: "B" },
            { label: "C  It was effective at attracting audiences.", value: "C" },
            { label: "D  It is included in a recent project.", value: "D" },
            { label: "E  It contains insights into the show.", value: "E" },
            { label: "F  It resembles an artwork.", value: "F" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q28", number: 28,
          type: "multiple_choice",
          question: "28. Man of La Mancha",
          options: [
            { label: "A  Its origin is somewhat controversial.", value: "A" },
            { label: "B  It is historically significant for a country.", value: "B" },
            { label: "C  It was effective at attracting audiences.", value: "C" },
            { label: "D  It is included in a recent project.", value: "D" },
            { label: "E  It contains insights into the show.", value: "E" },
            { label: "F  It resembles an artwork.", value: "F" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q29", number: 29,
          type: "multiple_choice",
          question: "29. The Tragedy of Jane Shore",
          options: [
            { label: "A  Its origin is somewhat controversial.", value: "A" },
            { label: "B  It is historically significant for a country.", value: "B" },
            { label: "C  It was effective at attracting audiences.", value: "C" },
            { label: "D  It is included in a recent project.", value: "D" },
            { label: "E  It contains insights into the show.", value: "E" },
            { label: "F  It resembles an artwork.", value: "F" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t3-s3-q30", number: 30,
          type: "multiple_choice",
          question: "30. The Sailors' Festival",
          options: [
            { label: "A  Its origin is somewhat controversial.", value: "A" },
            { label: "B  It is historically significant for a country.", value: "B" },
            { label: "C  It was effective at attracting audiences.", value: "C" },
            { label: "D  It is included in a recent project.", value: "D" },
            { label: "E  It contains insights into the show.", value: "E" },
            { label: "F  It resembles an artwork.", value: "F" },
          ],
          correctAnswer: "D", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam20-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Inclusive design

Definition
●  Designing products that can be accessed by a diverse range of people without the need for any 31 _______
●  Not the same as universal design: that is design for everyone, including catering for people with 32 _______ problems.

Examples of inclusive design
●  33 _______ which are adjustable, avoiding back or neck problems
●  34 _______ in public toilets which are easier to use
●  To assist the elderly:
   ○  designers avoid using 35 _______ in interfaces
   ○  people can make commands using a mouse, keyboard or their 36 _______

Impact of non-inclusive designs
●  Access
   ○  Loss of independence for disabled people.
●  Safety
   ○  Seatbelts are especially problematic for 37 _______ women.
   ○  PPE jackets are often unsuitable because of the size of women's 38 _______
   ○  PPE for female 39 _______ officers dealing with emergencies is the worst.
●  Comfort in the workplace
   ○  The 40 _______ in offices is often too low for women.`,
      questions: [
        { id: "cam20-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. without the need for any _______", correctAnswer: "adaptation", points: 1 },
        { id: "cam20-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. catering for people with _______ problems", correctAnswer: "cognitive", points: 1 },
        { id: "cam20-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. _______ which are adjustable, avoiding back or neck problems", correctAnswer: "desks", points: 1 },
        { id: "cam20-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. _______ in public toilets which are easier to use", correctAnswer: "taps", points: 1 },
        { id: "cam20-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. designers avoid using _______ in interfaces", correctAnswer: "blue", points: 1 },
        { id: "cam20-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. people can make commands using a mouse, keyboard or their _______", correctAnswer: "voice", points: 1 },
        { id: "cam20-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. Seatbelts are especially problematic for _______ women", correctAnswer: "pregnant", points: 1 },
        { id: "cam20-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. PPE jackets are often unsuitable because of the size of women's _______", correctAnswer: "shoulders", points: 1 },
        { id: "cam20-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. PPE for female _______ officers dealing with emergencies is the worst", correctAnswer: "police", points: 1 },
        { id: "cam20-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. The _______ in offices is often too low for women", correctAnswer: "temperature", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 20 – LISTENING TEST 4
// Parts: 1) Family visit advice (note completion)
//        2) Football stadium tour + history (choose 2 + matching)
//        3) Teaching handwriting (choose 2 + MCQ)
//        4) Chembe Bird Sanctuary research (note completion)
// ============================================================
export const cambridge20_listening_t4: IELTSTest = {
  id: "cam20-listening-t4",
  title: "Cambridge IELTS 20 – Listening Test 4",
  bookNumber: 20,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam20-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam20-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Advice on family visit

Accommodation
●  1 _______ Hotel on George Street
●  cost of family room per night: £ 2 _______ (approx.)

Recommended trips
●  a 3 _______ tour of the city centre (starts in Carlton Square)
●  a trip by 4 _______ to the old fort

Science Museum
●  best day to visit: 5 _______
●  see the exhibition about 6 _______ which opens soon

Food
●  Clacton Market:
   ○  good for 7 _______ food
   ○  need to have lunch before 8 _______ p.m.

Theatre tickets
●  save up to 9 _______ % on ticket prices at bargaintickets.com

Free activities
●  Blakewell Gardens
●  Roots Music Festival
●  climb Telegraph Hill to see a view of the 10 _______`,
      questions: [
        { id: "cam20-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. _______ Hotel on George Street", correctAnswer: "Kings/King's", points: 1 },
        { id: "cam20-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. cost of family room per night: £ _______ (approx.)", correctAnswer: "125/one hundred twenty-five/one hundred and twenty-five", points: 1 },
        { id: "cam20-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. a _______ tour of the city centre (starts in Carlton Square)", correctAnswer: "walking", points: 1 },
        { id: "cam20-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. a trip by _______ to the old fort", correctAnswer: "boat", points: 1 },
        { id: "cam20-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. best day to visit: _______", correctAnswer: "Tuesday", points: 1 },
        { id: "cam20-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. see the exhibition about _______ which opens soon", correctAnswer: "space", points: 1 },
        { id: "cam20-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. good for _______ food", correctAnswer: "vegetarian", points: 1 },
        { id: "cam20-l-t4-s1-q8", number: 8, type: "note_completion", question: "8. need to have lunch before _______ p.m.", correctAnswer: "2.30/two thirty", points: 1 },
        { id: "cam20-l-t4-s1-q9", number: 9, type: "note_completion", question: "9. save up to _______ % on ticket prices", correctAnswer: "75/seventy-five", points: 1 },
        { id: "cam20-l-t4-s1-q10", number: 10, type: "note_completion", question: "10. climb Telegraph Hill to see a view of the _______", correctAnswer: "port", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam20-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose TWO letters, A–E.
Questions 15–20: Match each year to an event in the history of football. Choose from the box (A–H).`,
      passageText: `Football stadium tour and history

Events in the history of football (for Q15–20):
A  the introduction of pay for the players
B  a change to the design of the goal
C  the first use of lights for matches
D  the introduction of goalkeepers
E  the first international match
F  two changes to the rules of the game
G  the introduction of fee for spectators
H  an agreement on the length of a game`,
      questions: [
        {
          id: "cam20-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO things does the speaker say about visiting the football stadium with children?\n\nA  Children can get their photo taken with a football player.\nB  There is a competition for children today.\nC  Parents must stay with their children at all times.\nD  Children will need sunhats and drinks.\nE  The café has a special offer on meals for children.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  Children can get their photo taken with a football player.", value: "A" },
            { label: "B  There is a competition for children today.", value: "B" },
            { label: "C  Parents must stay with their children at all times.", value: "C" },
            { label: "D  Children will need sunhats and drinks.", value: "D" },
            { label: "E  The café has a special offer on meals for children.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q12", number: 12,
          type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  Children can get their photo taken with a football player.", value: "A" },
            { label: "B  There is a competition for children today.", value: "B" },
            { label: "C  Parents must stay with their children at all times.", value: "C" },
            { label: "D  Children will need sunhats and drinks.", value: "D" },
            { label: "E  The café has a special offer on meals for children.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO features of the stadium tour are new this year?\n\nA  VIP tour\nB  360 cinema experience\nC  audio guide\nD  dressing room tour\nE  tours in other languages\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  VIP tour", value: "A" },
            { label: "B  360 cinema experience", value: "B" },
            { label: "C  audio guide", value: "C" },
            { label: "D  dressing room tour", value: "D" },
            { label: "E  tours in other languages", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q14", number: 14,
          type: "multiple_choice",
          question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  VIP tour", value: "A" },
            { label: "B  360 cinema experience", value: "B" },
            { label: "C  audio guide", value: "C" },
            { label: "D  dressing room tour", value: "D" },
            { label: "E  tours in other languages", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Which event in the history of football in the UK took place in each of the following years? Choose SIX answers from the box (A–H) and write the correct letter next to each year.\n\nA  the introduction of pay for the players\nB  a change to the design of the goal\nC  the first use of lights for matches\nD  the introduction of goalkeepers\nE  the first international match\nF  two changes to the rules of the game\nG  the introduction of fee for spectators\nH  an agreement on the length of a game`,
          type: "multiple_choice",
          question: "15. 1870",
          options: [
            { label: "A  the introduction of pay for the players", value: "A" },
            { label: "B  a change to the design of the goal", value: "B" },
            { label: "C  the first use of lights for matches", value: "C" },
            { label: "D  the introduction of goalkeepers", value: "D" },
            { label: "E  the first international match", value: "E" },
            { label: "F  two changes to the rules of the game", value: "F" },
            { label: "G  the introduction of fee for spectators", value: "G" },
            { label: "H  an agreement on the length of a game", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q16", number: 16,
          type: "multiple_choice",
          question: "16. 1874",
          options: [
            { label: "A  the introduction of pay for the players", value: "A" },
            { label: "B  a change to the design of the goal", value: "B" },
            { label: "C  the first use of lights for matches", value: "C" },
            { label: "D  the introduction of goalkeepers", value: "D" },
            { label: "E  the first international match", value: "E" },
            { label: "F  two changes to the rules of the game", value: "F" },
            { label: "G  the introduction of fee for spectators", value: "G" },
            { label: "H  an agreement on the length of a game", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q17", number: 17,
          type: "multiple_choice",
          question: "17. 1875",
          options: [
            { label: "A  the introduction of pay for the players", value: "A" },
            { label: "B  a change to the design of the goal", value: "B" },
            { label: "C  the first use of lights for matches", value: "C" },
            { label: "D  the introduction of goalkeepers", value: "D" },
            { label: "E  the first international match", value: "E" },
            { label: "F  two changes to the rules of the game", value: "F" },
            { label: "G  the introduction of fee for spectators", value: "G" },
            { label: "H  an agreement on the length of a game", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q18", number: 18,
          type: "multiple_choice",
          question: "18. 1877",
          options: [
            { label: "A  the introduction of pay for the players", value: "A" },
            { label: "B  a change to the design of the goal", value: "B" },
            { label: "C  the first use of lights for matches", value: "C" },
            { label: "D  the introduction of goalkeepers", value: "D" },
            { label: "E  the first international match", value: "E" },
            { label: "F  two changes to the rules of the game", value: "F" },
            { label: "G  the introduction of fee for spectators", value: "G" },
            { label: "H  an agreement on the length of a game", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q19", number: 19,
          type: "multiple_choice",
          question: "19. 1878",
          options: [
            { label: "A  the introduction of pay for the players", value: "A" },
            { label: "B  a change to the design of the goal", value: "B" },
            { label: "C  the first use of lights for matches", value: "C" },
            { label: "D  the introduction of goalkeepers", value: "D" },
            { label: "E  the first international match", value: "E" },
            { label: "F  two changes to the rules of the game", value: "F" },
            { label: "G  the introduction of fee for spectators", value: "G" },
            { label: "H  an agreement on the length of a game", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t4-s2-q20", number: 20,
          type: "multiple_choice",
          question: "20. 1880",
          options: [
            { label: "A  the introduction of pay for the players", value: "A" },
            { label: "B  a change to the design of the goal", value: "B" },
            { label: "C  the first use of lights for matches", value: "C" },
            { label: "D  the introduction of goalkeepers", value: "D" },
            { label: "E  the first international match", value: "E" },
            { label: "F  two changes to the rules of the game", value: "F" },
            { label: "G  the introduction of fee for spectators", value: "G" },
            { label: "H  an agreement on the length of a game", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam20-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose TWO letters, A–E.
Questions 25–30: Choose the correct letter, A, B or C.`,
      passageText: `Two students discussing teaching handwriting.

Questions 21–22: Which TWO benefits of handwriting do the students mention?
Questions 23–24: For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to correct?
Questions 25–30: Teaching handwriting — choose A, B or C.`,
      questions: [
        {
          id: "cam20-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO benefits of handwriting do the students mention?\n\nA  improved fine motor skills\nB  improved memory\nC  improved concentration\nD  improved imagination\nE  improved spatial awareness\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  improved fine motor skills", value: "A" },
            { label: "B  improved memory", value: "B" },
            { label: "C  improved concentration", value: "C" },
            { label: "D  improved imagination", value: "D" },
            { label: "E  improved spatial awareness", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q22", number: 22,
          type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  improved fine motor skills", value: "A" },
            { label: "B  improved memory", value: "B" },
            { label: "C  improved concentration", value: "C" },
            { label: "D  improved imagination", value: "D" },
            { label: "E  improved spatial awareness", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nFor children with dyspraxia, which TWO problems with handwriting do the students think are easiest to correct?\n\nA  not spacing letters correctly\nB  not writing in a straight line\nC  applying too much pressure when writing\nD  confusing letter shapes\nE  writing very slowly\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  not spacing letters correctly", value: "A" },
            { label: "B  not writing in a straight line", value: "B" },
            { label: "C  applying too much pressure when writing", value: "C" },
            { label: "D  confusing letter shapes", value: "D" },
            { label: "E  writing very slowly", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q24", number: 24,
          type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  not spacing letters correctly", value: "A" },
            { label: "B  not writing in a straight line", value: "B" },
            { label: "C  applying too much pressure when writing", value: "C" },
            { label: "D  confusing letter shapes", value: "D" },
            { label: "E  writing very slowly", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q25", number: 25,
          groupLabel: `Questions 25–30: Choose the correct letter, A, B or C.\n\nTeaching handwriting`,
          type: "multiple_choice",
          question: "25. What does the woman say about using laptops to teach writing to children with dyslexia?",
          options: [
            { label: "A  Children often lack motivation to learn that way.", value: "A" },
            { label: "B  Children become fluent relatively quickly.", value: "B" },
            { label: "C  Children react more positively if they make a mistake.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q26", number: 26,
          type: "multiple_choice",
          question: "26. When discussing whether to teach cursive or print writing, the woman thinks that",
          options: [
            { label: "A  cursive writing disadvantages a certain group of children.", value: "A" },
            { label: "B  print writing is associated with lower academic performance.", value: "B" },
            { label: "C  most teachers in the UK prefer a traditional approach to handwriting.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q27", number: 27,
          type: "multiple_choice",
          question: "27. According to the students, what impact does poor handwriting have on exam performance?",
          options: [
            { label: "A  There is evidence to suggest grades are affected by poor handwriting.", value: "A" },
            { label: "B  Neat handwriting is less important now than it used to be.", value: "B" },
            { label: "C  Candidates write more slowly and produce shorter answers.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q28", number: 28,
          type: "multiple_choice",
          question: "28. What prediction does the man make about the future of handwriting?",
          options: [
            { label: "A  Touch typing will be taught before writing by hand.", value: "A" },
            { label: "B  Children will continue to learn to write by hand.", value: "B" },
            { label: "C  People will dislike handwriting on digital devices.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q29", number: 29,
          type: "multiple_choice",
          question: "29. The woman is concerned that relying on digital devices has made it difficult for her to",
          options: [
            { label: "A  take detailed notes.", value: "A" },
            { label: "B  spell and punctuate.", value: "B" },
            { label: "C  read old documents.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam20-l-t4-s3-q30", number: 30,
          type: "multiple_choice",
          question: "30. How do the students feel about their own handwriting?",
          options: [
            { label: "A  concerned they are unable to write quickly", value: "A" },
            { label: "B  embarrassed by comments made about it", value: "B" },
            { label: "C  regretful that they have lost the habit", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam20-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Research in the area around the Chembe Bird Sanctuary

The importance of birds of prey to the local communities
●  They destroy 31 _______ and other rodents.
●  They help to prevent farmers from being bitten by 32 _______
●  They have been an important part of the local culture for many years.
●  They now support the economy by encouraging 33 _______ in the area.

Falling numbers of birds of prey
●  The birds may be accidentally killed
   ○  by 34 _______ when they are hunting or sleeping
   ○  by electrocution from contact with power lines, especially at times when there is a lot of 35 _______
●  Local farmers may illegally shoot them or 36 _______ them.

Ways of protecting chickens from birds of prey
●  clearing away vegetation from the area (unhelpful)
●  providing a 37 _______ for chickens (expensive)
●  frightening birds of prey by
   ○  keeping a 38 _______
   ○  making a 39 _______ — e.g. with metal objects
●  A 40 _______ of methods is usually most effective.`,
      questions: [
        { id: "cam20-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. They destroy _______ and other rodents", correctAnswer: "rats", points: 1 },
        { id: "cam20-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. help to prevent farmers from being bitten by _______", correctAnswer: "snakes", points: 1 },
        { id: "cam20-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. support the economy by encouraging _______ in the area", correctAnswer: "tourism", points: 1 },
        { id: "cam20-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. by _______ when they are hunting or sleeping", correctAnswer: "traffic", points: 1 },
        { id: "cam20-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. power lines, especially at times when there is a lot of _______", correctAnswer: "rain", points: 1 },
        { id: "cam20-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. Local farmers may illegally shoot them or _______ them", correctAnswer: "poison", points: 1 },
        { id: "cam20-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. providing a _______ for chickens (expensive)", correctAnswer: "building", points: 1 },
        { id: "cam20-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. keeping a _______", correctAnswer: "dog", points: 1 },
        { id: "cam20-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. making a _______ — e.g. with metal objects", correctAnswer: "noise", points: 1 },
        { id: "cam20-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. A _______ of methods is usually most effective", correctAnswer: "combination", points: 1 },
      ],
    },
  ],
};

export const cambridge20ListeningTests: IELTSTest[] = [
  cambridge20_listening_t1,
  cambridge20_listening_t2,
  cambridge20_listening_t3,
  cambridge20_listening_t4,
];
