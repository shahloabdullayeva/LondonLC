import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 11 – LISTENING TEST 1
// Parts: 1) Hiring a public room (notes)
//        2) Fiddy Working Heritage Farm — visitor advice + A–I
//           map labelling
//        3) Study on Gender in Physics — Akira Miyake (MCQ)
//        4) Ocean Biodiversity (notes)
// ============================================================
export const cambridge11_listening_t1: IELTSTest = {
  id: "cam11-listening-t1",
  title: "Cambridge IELTS 11 – Listening Test 1",
  bookNumber: 11,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam11-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam11-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `HIRING A PUBLIC ROOM

●  the Main Hall – seats 200

Room and cost
●  the 1 _______ Room – seats 100
●  Cost of Main Hall for Saturday evening: £ 2 _______
   + £250 deposit (3 _______ payment is required)
●  Cost includes use of tables and chairs and also 4 _______
●  Additional charge for use of the kitchen: £25

Before the event
●  Will need a 5 _______ licence
●  Need to contact caretaker (Mr Evans) in advance to arrange 6 _______

During the event
●  The building is no smoking
●  The band should use the 7 _______ door at the back
●  Don't touch the system that controls the volume
●  For microphones, contact the caretaker

After the event
●  Need to know the 8 _______ for the cleaning cupboard
●  The 9 _______ must be washed and rubbish placed in black bags
●  All 10 _______ must be taken down
●  Chairs and tables must be piled up`,
      questions: [
        { id: "cam11-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. the _______ Room – seats 100", correctAnswer: "Charlton", points: 1 },
        { id: "cam11-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Cost of Main Hall for Saturday evening: £ _______", correctAnswer: "115", points: 1 },
        { id: "cam11-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. (_______ payment is required)", correctAnswer: "cash", points: 1 },
        { id: "cam11-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. use of tables and chairs and also _______", correctAnswer: "parking", points: 1 },
        { id: "cam11-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. Will need a _______ licence", correctAnswer: "music", points: 1 },
        { id: "cam11-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. contact caretaker in advance to arrange _______", correctAnswer: "entry", points: 1 },
        { id: "cam11-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. The band should use the _______ door at the back", correctAnswer: "stage", points: 1 },
        { id: "cam11-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. Need to know the _______ for the cleaning cupboard", correctAnswer: "code", points: 1 },
        { id: "cam11-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. The _______ must be washed", correctAnswer: "floor/floors", points: 1 },
        { id: "cam11-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. All _______ must be taken down", correctAnswer: "decoration/decorations", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam11-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Complete the notes below. Write ONE WORD for each answer.
Questions 15–20: Label the map of Fiddy Working Heritage Farm below. Write the correct letter, A–I, next to each location.`,
      passageTitle: "Fiddy Working Heritage Farm",
      diagramUrl: imageUrl("cam11test1map.png"),
      passageText: `Advice about visiting the farm

Visitors should
●  take care not to harm any 11 _______
●  not touch any 12 _______
●  wear 13 _______
●  not bring 14 _______ into the farm, with certain exceptions.`,
      questions: [
        { id: "cam11-l-t1-s2-q11", number: 11, type: "note_completion", question: "11. take care not to harm any _______", correctAnswer: "animal/animals", points: 1 },
        { id: "cam11-l-t1-s2-q12", number: 12, type: "note_completion", question: "12. not touch any _______", correctAnswer: "tool/tools", points: 1 },
        { id: "cam11-l-t1-s2-q13", number: 13, type: "note_completion", question: "13. wear _______", correctAnswer: "shoes", points: 1 },
        { id: "cam11-l-t1-s2-q14", number: 14, type: "note_completion", question: "14. not bring _______ into the farm", correctAnswer: "dog/dogs", points: 1 },
        {
          id: "cam11-l-t1-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Label the map of Fiddy Working Heritage Farm above. Write the correct letter, A–I, next to each location.`,
          type: "matching", question: "15. Scarecrow",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam11-l-t1-s2-q16", number: 16, type: "matching", question: "16. Maze",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam11-l-t1-s2-q17", number: 17, type: "matching", question: "17. Café",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam11-l-t1-s2-q18", number: 18, type: "matching", question: "18. Black Barn",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam11-l-t1-s2-q19", number: 19, type: "matching", question: "19. Covered picnic area",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam11-l-t1-s2-q20", number: 20, type: "matching", question: "20. Fiddy House",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam11-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–30: Choose the correct letter, A, B or C.`,
      passageTitle: "Greg & Lisa — study on gender in physics",
      questions: [
        {
          id: "cam11-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–30: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. The students in Akira Miyake's study were all majoring in",
          options: [
            { label: "A  physics.", value: "A" },
            { label: "B  psychology or physics.", value: "B" },
            { label: "C  science, technology, engineering or mathematics.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. The aim of Miyake's study was to investigate",
          options: [
            { label: "A  what kind of women choose to study physics.", value: "A" },
            { label: "B  a way of improving women's performance in physics.", value: "B" },
            { label: "C  whether fewer women than men study physics at college.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. The female physics students were wrong to believe that",
          options: [
            { label: "A  the teachers marked them in an unfair way.", value: "A" },
            { label: "B  the male students expected them to do badly.", value: "B" },
            { label: "C  their test results were lower than the male students'.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Miyake's team asked the students to write about",
          options: [
            { label: "A  what they enjoyed about studying physics.", value: "A" },
            { label: "B  the successful experiences of other people.", value: "B" },
            { label: "C  something that was important to them personally.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What was the aim of the writing exercise done by the subjects?",
          options: [
            { label: "A  to reduce stress", value: "A" },
            { label: "B  to strengthen verbal ability", value: "B" },
            { label: "C  to encourage logical thinking", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q26", number: 26, type: "multiple_choice",
          question: "26. What surprised the researchers about the study?",
          options: [
            { label: "A  how few students managed to get A grades", value: "A" },
            { label: "B  the positive impact it had on physics results for women", value: "B" },
            { label: "C  the difference between male and female performance", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q27", number: 27, type: "multiple_choice",
          question: "27. Greg and Lisa think Miyake's results could have been affected by",
          options: [
            { label: "A  the length of the writing task.", value: "A" },
            { label: "B  the number of students who took part.", value: "B" },
            { label: "C  the information the students were given.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Greg and Lisa decide that in their own project, they will compare the effects of",
          options: [
            { label: "A  two different writing tasks.", value: "A" },
            { label: "B  a writing task with an oral task.", value: "B" },
            { label: "C  two different oral tasks.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q29", number: 29, type: "multiple_choice",
          question: "29. The main finding of Smolinsky's research was that class teamwork activities",
          options: [
            { label: "A  were most effective when done by all-women groups.", value: "A" },
            { label: "B  had no effect on the performance of men or women.", value: "B" },
            { label: "C  improved the results of men more than of women.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t1-s3-q30", number: 30, type: "multiple_choice",
          question: "30. What will Lisa and Greg do next?",
          options: [
            { label: "A  talk to a professor", value: "A" },
            { label: "B  observe a science class", value: "B" },
            { label: "C  look at the science timetable", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam11-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Ocean Biodiversity

Biodiversity hotspots
●  areas containing many different species
●  important for locating targets for 31 _______
●  at first only identified on land

Boris Worm, 2005
●  identified hotspots for large ocean predators, e.g. sharks
●  found the ocean hotspots:
   –  were not always rich in 32 _______
   –  had higher temperatures at the 33 _______
   –  had sufficient 34 _______ in the water

Lisa Ballance, 2007
●  looked for hotspots for marine 35 _______
●  found these were all located where ocean currents meet

Census of Marine Life
●  found new ocean species living:
   –  under the 36 _______
   –  near volcanoes on the ocean floor

Global Marine Species Assessment
●  want to list endangered ocean species, considering:
   –  population size
   –  geographical distribution
   –  rate of 37 _______
●  Aim: to assess 20,000 species and make a distribution 38 _______ for each one

Recommendations to retain ocean biodiversity
●  increase the number of ocean reserves
●  establish 39 _______ corridors (e.g. for turtles)
●  reduce fishing quotas
●  catch fish only for the purpose of 40 _______`,
      questions: [
        { id: "cam11-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. important for locating targets for _______", correctAnswer: "conservation", points: 1 },
        { id: "cam11-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. were not always rich in _______", correctAnswer: "food/foods", points: 1 },
        { id: "cam11-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. higher temperatures at the _______", correctAnswer: "surface", points: 1 },
        { id: "cam11-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. had sufficient _______ in the water", correctAnswer: "oxygen/O2", points: 1 },
        { id: "cam11-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. looked for hotspots for marine _______", correctAnswer: "mammals", points: 1 },
        { id: "cam11-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. found new ocean species living under the _______", correctAnswer: "ice", points: 1 },
        { id: "cam11-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. rate of _______", correctAnswer: "decline/declining/decrease", points: 1 },
        { id: "cam11-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. make a distribution _______ for each one", correctAnswer: "map", points: 1 },
        { id: "cam11-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. establish _______ corridors (e.g. for turtles)", correctAnswer: "migration", points: 1 },
        { id: "cam11-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. catch fish only for the purpose of _______", correctAnswer: "consumption", points: 1 },
      ],
    },
  ],
};

export const cambridge11ListeningTests: IELTSTest[] = [
  cambridge11_listening_t1,
];
