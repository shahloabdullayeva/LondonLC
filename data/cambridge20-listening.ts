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

export const cambridge20ListeningTests: IELTSTest[] = [cambridge20_listening_t1];
